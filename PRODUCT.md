# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences: affluent leisure travelers (couples, families, groups) researching and booking a crewed yacht charter directly, and yacht charter brokers who represent clients and need detailed specs, rates, and availability to pitch Celestine to their own customers. Both need to evaluate cabins, amenities, weekly rates, and open weeks, then reach out to inquire/book.

## Product Purpose

Market and drive charter inquiries/bookings for S/Y Celestine, a crewed 59ft sailing yacht operating in the US and British Virgin Islands. Success is a qualified inquiry or booking submitted via email/phone to the charter management contact (Paradise Yacht Management).

## Positioning

A genuine sailing experience combined with full luxury-yacht amenities — most boats at this comfort level are motor yachts, so the "sailboat feel + luxury you want" combination is Celestine's real differentiator versus competing BVI/USVI crewed charters.

## Operating Context

Guests browse the site to compare cabins, social zones, amenities, and pricing, then contact the broker/booking agent (Paradise Yacht Management) via email or phone to inquire about specific weeks. Brokers use the same site as a reference to pitch the yacht to their own clients.

## Capabilities and Constraints

- Fixed physical capacity: five queen cabins, up to 10 guests, with dedicated crew including a private chef — this is a real physical constraint of the vessel, not a marketing choice, and must not be altered without explicit confirmation.
- All-inclusive weekly charter rate model (rates observed on site range roughly $35,500–$46,000/week depending on season, inclusive of crew, meals, standard beverages, and water toys); optional dining enhancements are priced separately.
- Booking/inquiry funnel is external: mailto (bookings@paradiseyachtmanagement.com) and phone (+1 844-204-9846), not an on-site booking engine.
- Site currently ships as a static HTML page (index.html + support.js) with an assets/ directory (optimized images, SVG logo/icon, gallery) — no build framework detected.

## Evidence on Hand

- Real photography and vector assets in `assets/` (hero images, gallery, logo, orthographic/cutaway diagrams) and `uploads/`/`misc items/` (additional photos, brand palette PDF, screenshots).
- Real pricing table (weekly charter rates by season/date range, optional dining enhancements) and an "open weeks at a glance" availability section already present in index.html.
- Existing brand assets: Celestine-Logo.svg, icon.svg/png, a brand palette PDF in uploads/ — treat these as existing brand material, not yet confirmed as final/locked.

## Product Principles

- Preserve the sailboat-plus-luxury positioning in any copy or visual direction; don't let the site drift toward a generic motor-yacht-charter template.
- Keep pricing, capacity, and inclusions factually accurate to the vessel's real specs — these are constraints, not creative choices.
- Serve both direct guests and brokers from the same content; don't fork into separate broker-only vs. guest-only paths without being asked.
- Every path to conversion routes to the existing external contact (email/phone) — no invented booking/payment flow.
