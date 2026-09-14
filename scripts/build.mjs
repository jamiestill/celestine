import { createServer } from "node:http";
import { readFile, rm, mkdir, cp, readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, relative, sep, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");
const SKIP_DIRS = new Set(["node_modules", "dist", ".git", ".netlify", ".claude", ".impeccable", "misc items", "scripts"]);
const SKIP_FILES = new Set(["package.json", "package-lock.json", "netlify.toml", ".DS_Store", ".gitignore"]);
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
  ".avif": "image/avif", ".mp4": "video/mp4", ".pdf": "application/pdf",
};

const html = await readFile(join(root, "index.html"), "utf8");
const support = await readFile(join(root, "support.js"), "utf8");

// Ship only media the live page references. Editor-only originals (listed in ext-resource-dependency metas)
// and unused uploads stay out, except folders whose file names the page builds at runtime.
const liveText = html.replace(/<meta name="ext-resource-dependency"[^>]*>/g, "") + support;
const dynamicPrefixes = [...liveText.matchAll(/["'`]((?:assets|uploads)\/[^"'`$]*)(?:["'`]\s*\+|\$\{)/g)].map((m) => m[1]);
const isUnused = (rel) =>
  /^(assets|uploads)\//.test(rel) &&
  !liveText.includes(rel) &&
  !liveText.includes(encodeURI(rel)) &&
  !dynamicPrefixes.some((p) => rel.startsWith(p));

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) files.push(...(await walk(join(dir, entry.name))));
    } else if (!SKIP_FILES.has(entry.name) && !entry.name.endsWith(".md")) {
      files.push(join(dir, entry.name));
    }
  }
  return files;
}

async function prerender() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = join(root, path === "/" ? "index.html" : path);
    if (!file.startsWith(root)) return res.writeHead(403).end();
    let body;
    try {
      body = await readFile(file);
    } catch {
      return res.writeHead(404).end();
    }
    res.writeHead(200, { "content-type": MIME[extname(file).toLowerCase()] || "application/octet-stream" }).end(body);
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { default: puppeteer } = await import("puppeteer");
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#dc-root main", { timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return await page.evaluate((source) => {
      const clone = document.getElementById("dc-root").cloneNode(true);
      clone.querySelectorAll(".reveal, [data-polaroid], [data-slide-in]").forEach((el) => {
        el.setAttribute("data-revealed", "yes");
        el.classList.add("reveal-visible");
      });
      clone.querySelectorAll("[data-hero-img]").forEach((el) => el.setAttribute("data-loaded", "yes"));
      clone.querySelectorAll("iframe, script, title, meta").forEach((el) => el.remove());
      const css = [...document.head.querySelectorAll("style")]
        .map((el) => el.textContent)
        .filter((text) => text.trim() && !source.includes(text.trim().slice(0, 120)));
      return { markup: clone.innerHTML, css };
    }, html);
  } finally {
    await browser.close();
    server.close();
  }
}

await rm(out, { recursive: true, force: true });
let skippedCount = 0;
let skippedBytes = 0;
for (const file of await walk(root)) {
  const rel = relative(root, file).split(sep).join("/");
  if (rel === "index.html") continue;
  if (isUnused(rel)) {
    skippedCount++;
    skippedBytes += (await stat(file)).size;
    continue;
  }
  await mkdir(dirname(join(out, rel)), { recursive: true });
  await cp(file, join(out, rel));
}

let built = html;
try {
  const { markup, css } = await prerender();
  // Swaps the static snapshot for the live React page. Anything already on screen is marked revealed with
  // transitions paused for two frames, so visible sections don't fade in a second time.
  const swap = `<script>(function(){var pre=document.getElementById("dc-prerender");if(!pre)return;function done(){var r=document.getElementById("dc-root");if(!r||!r.querySelector("main"))return false;var still=document.createElement("style");still.textContent="#dc-root *{transition:none!important}";document.head.appendChild(still);var h=window.innerHeight;r.querySelectorAll(".reveal,[data-polaroid],[data-slide-in]").forEach(function(el){if(el.getBoundingClientRect().top<h){el.setAttribute("data-revealed","yes");el.classList.add("reveal-visible")}});r.querySelectorAll("[data-hero-img]").forEach(function(el){el.setAttribute("data-loaded","yes")});pre.remove();requestAnimationFrame(function(){requestAnimationFrame(function(){still.remove()})});return true}if(done())return;var mo=new MutationObserver(function(){if(done())mo.disconnect()});mo.observe(document.documentElement,{childList:true,subtree:true})})();</script>`;
  const cssText = css.join("\n").replaceAll("#dc-root", "#dc-root, #dc-prerender");
  built = built
    .replace("</head>", () => `<style>x-dc{display:none!important}</style>\n<style data-prerender>${cssText}</style>\n</head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>\n?/, () => "")
    .replace("<x-dc>", () => `<div id="dc-prerender">${markup}</div>\n${swap}\n<x-dc>`);
  console.log(`Prerendered ${Math.round(markup.length / 1024)}KB of page markup.`);
} catch (err) {
  console.warn(`Prerender failed, publishing the client-rendered page unchanged: ${err.message}`);
}
await mkdir(out, { recursive: true });
await writeFile(join(out, "index.html"), built);
console.log(`Left out ${skippedCount} unused media files (${Math.round(skippedBytes / 1048576)}MB).`);
