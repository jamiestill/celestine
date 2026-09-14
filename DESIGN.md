---
name: S/Y Celestine
description: Private crewed sailing yacht charter in the US and British Virgin Islands.
colors:
  navy-core: "#00205b"
  navy-shade: "#001844"
  navy-deep: "#00102d"
  steel-blue: "#4d7ea8"
  steel-shade: "#3a5e7e"
  steel-ink: "#273f54"
  sky-tint: "#9dbfd9"
  harbor-sky: "#6e9cc2"
  pale-sky: "#d4e8f7"
  sailcloth: "#ece6d6"
  sailcloth-light: "#f5efe2"
  sailcloth-deep: "#ded4c0"
  brass-tint: "#cbbc96"
  harbor-coral: "#ff5a5f"
  gray-mid-dark: "#55575f"
  nav-glass: "rgba(183, 187, 192, 0.5)"
  sailcloth-mist: "rgba(214, 205, 186, 0.55)"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(48px, 8vw, 92px)"
    fontWeight: 400
    lineHeight: 0.98
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(38px, 9vw, 58px)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "'Jost', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "'Jost', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "4px"
rounded:
  hairline: "2px"
  card: "14px"
  panel: "16px"
  pill: "999px"
spacing:
  section-y: "56px"
  section-x: "56px"
  book-y: "130px"
  control-y: "18px"
  control-x: "26px"
components:
  button-primary:
    backgroundColor: "{colors.harbor-coral}"
    textColor: "{colors.navy-deep}"
    typography: "{typography.label}"
    padding: "18px 26px"
  button-dark:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.sailcloth}"
    typography: "{typography.label}"
    padding: "18px 26px"
  button-dark-hover:
    backgroundColor: "{colors.sailcloth}"
    textColor: "{colors.navy-deep}"
  button-ghost:
    textColor: "{colors.sailcloth}"
    typography: "{typography.label}"
    padding: "18px 40px"
  icon-button-round:
    backgroundColor: "{colors.navy-core}"
    textColor: "{colors.sailcloth}"
    rounded: "{rounded.pill}"
    size: "52px"
  nav-link:
    textColor: "{colors.steel-ink}"
    typography: "{typography.label}"
---

# Design System: S/Y Celestine

## Overview

**Creative North Star: "The Chartroom Logbook"**

Celestine reads like a navigator's chart table made elegant: deep navy fields printed with blueprint and orthographic yacht drawings, alternating with warm sailcloth-ivory pages. Cormorant Garamond sets headlines like entries in a well-kept log, and small, widely tracked uppercase Jost labels act as the instrument annotations. The sailing-yacht character is technical and crafted, never glossy motor-yacht chrome.

The page moves in full-bleed sections that alternate between the two worlds: navy/blueprint for atmosphere (stats, destinations, virtual tour, booking) and sailcloth for detail and decision-making (gallery, crew, layout, rates, availability). Density is generous: 56px section gutters, large serif headlines, and light-weight body copy. Motion is slow and calm: reveals over 0.8–1.2s with a soft ease-out, and all of it respects reduced-motion preferences.

**Key Characteristics:**
- Two-world rhythm: navy blueprint sections and sailcloth ivory sections.
- Serif display headlines (Cormorant Garamond, 400) over light sans body text (Jost, 300).
- Uppercase tracked labels (2–4px letter-spacing) for navigation, stats, and actions.
- Technical drawings (blueprints, orthographic views, cutaways) used as texture and proof.
- Square-cornered action buttons; circular controls only for icon-only carousel/lightbox navigation.
- Harbor Coral reserved for the primary conversion action.

## Colors

A brand-defined nautical palette of navy, steel blue, and sailcloth ivory, with a single warm coral for conversion.

### Primary
- **Celestine Navy** (navy-core): the brand anchor. Hero headline color on light imagery, stats band, destinations and booking section fields, theme color.
- **Night Watch** (navy-shade) and **Midnight Hull** (navy-deep): darker navy steps for the virtual tour's diagonal stripe, dark buttons, overlays (`rgba(0,16,45,0.72–0.92)`), and body text on ivory.

### Secondary
- **Steel Blue** (steel-blue): supporting accent and the site-wide focus ring (3px outline, 3px offset).
- **Harbor Steel** (steel-shade) and **Chart Ink** (steel-ink): secondary text, navigation links (full opacity for legibility over the hero photo), and fine linework.
- **Shallow Water** (sky-tint): light blue highlights and eyebrow labels on navy fields.
- **Harbor Sky** (harbor-sky): secondary action fill (Broker Partners, Learn More, floating Book) with Midnight Hull text; booked days in the availability calendar; text selection.
- **Pale Sky** (pale-sky): meal-plan panels and on-hold calendar days on Sailcloth.

### Tertiary
- **Harbor Coral** (harbor-coral): the conversion accent. Use it for the primary booking/inquiry action only, always with Midnight Hull text (6.2:1); ivory on coral fails contrast (2.7:1).
- **Brass Tint** (brass-tint): the brand's olive-gold accent for small premium details and callouts.

### Neutral
- **Sailcloth** (sailcloth): the dominant light surface and the text color on every navy field. Its translucent steps (`rgba(236,230,214, 0.12–0.95)`) form borders, ghost button outlines, and secondary text on dark backgrounds.
- **Sailcloth Light** (sailcloth-light): caption panels under the tour videos and the polaroid photo frames.
- **Sailcloth Deep** (sailcloth-deep): the gallery stage behind photos while they load.
- **Cool Gray 10** (gray-mid-dark): muted small print.
- **Nav Glass** (nav-glass): the translucent, blurred nav bar over the hero before scrolling.
- **Sailcloth Mist** (sailcloth-mist): the slow-drifting haze inside the rate cards.

### Named Rules
**The Two Worlds Rule.** Every section is either Navy (text in Sailcloth) or Sailcloth (text in Navy or Chart Ink). Don't introduce white or gray section backgrounds.

**The One Coral Rule.** Harbor Coral marks the single most important action in a view. Never use it for decoration, text, or more than one competing button.

**The Brand Sheet Rule.** New colors come from the Celestine Brand Palette (`uploads/Celestine_Brand_Palette.pdf`); Harbor Coral is the only approved addition.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Jost (with system-ui, sans-serif)

**Character:** A classical, high-contrast serif for voice and romance, paired with a clean geometric sans used light and tracked-out for precise instrument-panel labeling.

### Hierarchy
- **Display** (400, clamp(48px, 8vw, 92px), 0.98): hero headline only; balanced wrapping, max-width 900px, with a soft white glow when set over photography.
- **Headline** (400, clamp(38px, 9vw, 58px), 1–1.02): section titles such as "People who make it happen."
- **Title** (400, 22–34px): feature names ("Five Queen Cabins"), the mobile menu links (34px), and card headings.
- **Body** (Jost 300, 17px, ~1.6): descriptive paragraphs; keep lines within ~680px.
- **Label** (Jost 400, 12–13px, uppercase, 2–4px tracking): navigation, stats captions, and button text.

### Named Rules
**The Logbook Voice Rule.** Serif for things you'd say; tracked uppercase sans for things you'd annotate. Never set labels in Cormorant or headlines in Jost.

**The Light Hand Rule.** Body copy stays at weight 300 and headlines at 400. Bold weights are not part of the system.

## Layout

Single-page, full-bleed vertical sections, each with 56px horizontal and vertical padding (availability 90px vertical; the closing booking section 130px). Content containers cap at 680px for reading, 900–1000px for feature grids, and min(1100px, 92vw) for gallery imagery. The stats band is a four-column grid with no gaps.

Breakpoints are primarily 768px (mobile layout, burger menu, 58px scroll-margin for anchors), with refinements at 920px, 500px, 480px, and 430px and a 900px/1000px desktop enhancement. Anchored sections set `scroll-margin-top` so the fixed nav never covers titles.

## Elevation & Depth

Depth comes mostly from imagery and tonal layering: navy overlays on photography, blueprint textures, and translucent sailcloth panels. Shadows are soft and ambient, used on floating elements only.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 8px 24px rgba(0,0,0,0.15)`): cards and floating panels.
- **Lift** (`box-shadow: 0 8px 32px rgba(0,0,0,0.2)`): raised overlays and larger panels.
- **Control** (`box-shadow: 0 4px 18px rgba(0,0,0,0.35)`): the lightbox close button over photography.
- **Stage** (`box-shadow: 0 30px 80px rgba(0,0,0,0.5)`): zoomed/lightbox imagery.
- **Sailcloth Glow** (`text-shadow: 0 0 12px rgba(236,230,214,0.95), 0 0 4px rgba(236,230,214,0.9)`): tagline glow for legibility over busy backgrounds.

### Named Rules
**The Paper, Not Plastic Rule.** Sections sit flat. Only elements that float over content (overlays, lightbox, controls on imagery) get shadows.

## Shapes

Mostly square. Action buttons and section edges have no radius, which keeps the precise chart-table feel. Rounding is reserved for specific jobs: fully round (999px / 50%) for icon-only controls and avatars, 14–16px for contained cards and panels, and 2px for the focus ring. Photos in collage treatments may tilt slightly (about ±2–5°) for a pinned-to-the-log feel.

## Components

### Buttons
Refined and restrained: small, widely tracked uppercase labels with generous padding and quiet color swaps.
- **Shape:** square corners (0).
- **Primary (Harbor Coral):** coral fill, Midnight Hull text, 12px / 4px tracking, 18px × 26px padding, min-width 132px; background transition 0.25s.
- **Dark:** Midnight Hull at 92% opacity with Sailcloth text; on hover it inverts to Sailcloth fill with Midnight Hull text (0.25s).
- **Ghost:** 1px Sailcloth border at 50% opacity with Sailcloth text, 14px / 2px tracking, 18px × 40px; used on navy fields (e.g. phone call).
- **Focus:** 3px Steel Blue outline, 3px offset.

### Icon Controls
- **Carousel arrows:** 52px circles, navy at 45% opacity, 1px Sailcloth border at 40%, Sailcloth glyph.
- **Lightbox:** 56px translucent Sailcloth circles for previous/next; a solid Sailcloth 48px close button with the Control shadow.

### Cards / Containers
- **Corner Style:** 14–16px when contained; feature items on sections sit flat without a container.
- **Background:** Sailcloth or translucent navy over imagery.
- **Shadow Strategy:** Float or Lift (see Elevation & Depth).

### Navigation
- **Desktop:** fixed bar with the logo on the left and uppercase Jost links (13px, 2px tracking, Chart Ink at 0.7 opacity). Color transitions over 0.2s.
- **Mobile (≤768px):** burger button opens a full-screen navy menu with 34px Cormorant links in Sailcloth.

### Stats Band (signature)
A full-width navy four-column grid of key yacht facts, with serif numerals and tracked uppercase captions in Sailcloth.

### Blueprint Sections (signature)
Navy fields covered with blueprint/chart artwork (`assets/opt/blueprint1`, `blueprint2`) and orthographic yacht drawings, carrying the Chartroom Logbook atmosphere into destinations and booking.

## Do's and Don'ts

### Do:
- **Do** alternate Navy and Sailcloth sections, each with 56px padding.
- **Do** set headlines in Cormorant Garamond 400 and labels in uppercase Jost with 2–4px tracking.
- **Do** use the blueprint, orthographic, and cutaway drawings as texture and proof of the vessel.
- **Do** keep action buttons square, with Harbor Coral for the single primary action and Dark or Ghost for the rest.
- **Do** keep the 3px Steel Blue focus ring, and give every new animation a `prefers-reduced-motion` counterpart (no looping sway, no slide; a short opacity fade at most).
- **Do** keep reveal motion slow and soft (0.6–1.2s, `cubic-bezier(0.22, 0.61, 0.36, 1)`).
- **Do** keep functional labels at 12px or larger, at 0.72 opacity or more.
- **Do** reference palette colors through the `:root` custom properties (`var(--navy-core)`), not raw hex.

### Don't:
- **Don't** add colors outside the Celestine Brand Palette besides Harbor Coral.
- **Don't** use more than one coral action competing in the same view.
- **Don't** round action buttons into pills; pills are for icon-only controls.
- **Don't** use bold weights or set body copy in the serif.
- **Don't** add white or cool-gray section backgrounds in place of Sailcloth.
- **Don't** set ivory or white text on Harbor Coral or Harbor Sky fills.
