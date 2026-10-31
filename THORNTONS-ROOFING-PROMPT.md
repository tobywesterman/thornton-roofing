/impeccable

Build a **single homepage** for **Thornton's Roofing**, a local domestic and general roofing contractor serving **Hampshire, Surrey and West Sussex**. Put it in a folder called `v1/` inside this project folder. **This is one page only (`v1/index.html`). Do not create any other pages** (no service pages, About, Contact or Privacy pages). Build **one version only**. Do not produce alternative concepts, variations or design options.

---

## 1. Read this before you write any code

**Step 1: Inspect the project folder.** View every image yourself before building. The folder contains the logo and three photographs. **These are the only images to be used on the page.**

| File | What it is | Where to use it |
|---|---|---|
| `Thornton’s Roofing Logo (1).png` | Official logo. 2122 × 741 px, 32-bit PNG with a genuinely transparent background. Dark charcoal roof symbol and lettering (≈ `#0C181B`), green roof detailing and rules (≈ `#036A37`). | Header, footer, favicon source. Use exactly as supplied. |
| `Sunset Roof Construction Silhouettes.png` | **Portrait** 1086 × 1448 px. A roofer silhouetted on the ridge of a tiled hipped roof at sunset, scaffolding below, orange sky. | **The hero image (required, by the owner's choice).** Also the Open Graph/social share image. |
| `Thornton’s Roofing on Brick House.png` | Landscape 1448 × 1086 px. A large red-brick house with a new red clay plain-tile roof, fully scaffolded, with a **Thornton's Roofing banner** on the scaffold. Blue sky. | About section. |
| `Aerial View of New Roof Renovation.png` | Landscape 1448 × 1086 px. A drone view of a scaffolded house with a new dark slate roof, terracotta ridge and hip tiles, dormers, a rooflight and brick chimneys, with a **Thornton's Roofing banner** on the scaffold. | "No job too big or too small" image band. |

The two landscape photos show Thornton's Roofing's own banner, so they may be presented as the company's work (e.g. "Thornton's Roofing on site"). Do not invent locations, dates, materials or project stories for them beyond what is visible. Never generate, download or substitute stock or AI images. Do not alter the photos beyond cropping, resizing and format conversion. No filters or colour grading.

**Step 2: Study the reference.** The only design reference is **https://roof-plus.co.uk/**. Open its homepage in the browser and screenshot it at desktop (1440 px) and mobile (375 px) widths. Note the header and top bar, hero composition, section order, service card layout, use of light and dark bands, typography weight and case, buttons, the quote/contact block and the footer. Use its homepage as the structural and visual blueprint. Adapt it for Thornton's Roofing. Do not copy its text, logo, images, claims or company details, and do not introduce any other reference site.

---

## 2. The brief

- **Intent:** a traditional, established local roofing contractor. Confident, trustworthy, clean and practical. It should feel like a real business with years of presence, not a SaaS landing page, a template or a design experiment.
- **Audience:** homeowners, landlords and property owners in Hampshire, Surrey and West Sussex who need a roof repaired, replaced or built.
- **Goal:** enquiries. The primary CTA is **"Request a Free Quote"**. It scrolls to the quote form and is always one tap away on mobile.
- **Language:** UK English throughout (colour, guttering, fascias, soffits, storey, enquiry).

---

## 3. Logo rules (non-negotiable)

- Copy the logo into `v1/assets/` under a web-safe filename (e.g. `thorntons-roofing-logo.png`). Do not change its pixels: no recolouring, cropping, retouching, tracing to SVG, simplifying or redrawing.
- Scale it with CSS only, keeping the aspect ratio (`height` set, `width: auto`). Suggested sizes: about 56–64 px tall in the desktop header, about 44 px on mobile, and larger in the footer.
- No background, box, border, shadow, glow or filter on or behind it.
- **The logo is dark charcoal on transparent, so it only reads on light backgrounds.** The header and the footer area holding the logo must be light (white or a warm off-white). Never place it on the charcoal or green bands, or over a photograph. If you want a dark footer like the reference, split it: a light footer band holding the logo and company details, then a thin dark strip for the legal line.
- Use real text in `alt="Thornton's Roofing"`. Clicking the header logo scrolls back to the top.
- Produce the favicon and apple-touch icon by scaling the supplied PNG (the roof symbol may be cropped for the small icon only if it stays unaltered). Do not redraw it.

---

## 4. Colour and typography

**Palette from the logo:**
- Charcoal `#0C181B`: body text, headings, dark bands.
- Roof green `#036A37`: primary buttons, links, accents, rules, icons. White text on this green passes WCAG AA. Add a slightly darker green for hover/active states.
- Neutrals: white, a warm off-white or light stone for alternating section bands, mid-greys for borders and secondary text.
- No extra brand colours. The hero photograph supplies the only warm tones; do not pick up its orange as a UI colour.

**Type:** echo the logo. Headings in a strong, heavy geometric sans, uppercase or confident title case, with modest tracking on small labels (as with the logo's spaced ROOFING). Body in a highly readable sans at 17–18 px with comfortable line length. Two families at most, self-hosted or from Google Fonts with `font-display: swap`. No decorative serifs, scripts or trendy display fonts.

**Buttons:** solid green primary ("Request a Free Quote") and outlined or charcoal secondary. Square or slightly rounded corners, consistent with a traditional trade site. No gradient pills or glassmorphism.

---

## 5. File structure and navigation

Static, hand-written HTML, CSS and a small amount of vanilla JS. No framework or build step.

```
v1/
  index.html
  assets/ (logo, images in optimised WebP + original fallback, fonts, icons)
  css/styles.css
  js/main.js
  robots.txt
  sitemap.xml
```

**Navigation:** in-page anchor links that smooth-scroll to each section: Services · About · How We Work · Areas · Contact, with a click-to-call phone number and a green **Request a Free Quote** button on the right. The header is sticky. Give every section `scroll-margin-top` so headings are not hidden under it, and highlight the current section in the nav as you scroll. No dropdowns.

**Mobile:** a hamburger menu that opens a full-height accessible panel (focus trapped, Escape closes, body scroll locked, closes when a link is tapped), plus a **sticky bottom bar** with "Call" and "Request a Free Quote" side by side.

**Top bar** (as in the reference): a slim charcoal strip above the header reading "Roofing services across Hampshire, Surrey & West Sussex", with the placeholder phone number and email on the right.

---

## 6. The homepage, section by section

Follow the reference homepage's order and rhythm, adapted. Give each section an `id` matching the nav.

1. **Hero: `Sunset Roof Construction Silhouettes.png` (mandatory, do not swap it for another photo).** The photo is portrait, so do not stretch it into a thin full-width letterbox. Use a split composition: headline, supporting line and CTAs on a light or charcoal panel on the left, and the sunset roof photo filling the right half at full hero height, using `object-fit: cover` with focus on the roofer and the sun (around `object-position: 50% 40%`). On mobile, stack the text first and the image beneath at a 4:3 crop. The headline must stay fully readable without relying on a text-over-photo overlay.
   - H1, for example: "Roofing Contractors in Hampshire, Surrey & West Sussex".
   - Supporting line: repairs, replacements and new roofs for homeowners and property owners, with a clear written quote.
   - CTAs: **Request a Free Quote** (primary, scrolls to `#quote`) and **View Our Services** (secondary, scrolls to `#services`).
   - No caption on the hero. A worker in hi-vis at the lower left wears third-party branding, so crop or position the image so that branding is not legible.
2. **Roofing services (`#services`).** Section heading and short intro, then eight cards, each with a simple line icon, a title and a **three-to-four-sentence description** that does the job a service page would (what the work involves, common problems it fixes, typical materials in general terms): Roof Repairs & Maintenance · New Roofs & Roof Replacements · Slate Roofing · Roof Tiling · Flat Roofing · Leadwork & Flashing · Ridge & Hip Repairs · Guttering & Roofline. No "Learn more" links, because there are no other pages. Each card can end with a small "Ask about this" link that scrolls to the form and preselects that service in the "Type of work" field. Four columns on desktop, two on tablet, one on mobile. Draw consistent, simple icons yourself as inline SVG in the logo's charcoal and green. No emoji or clip-art.
   - Accurate trade detail is welcome (e.g. EPDM, GRP and built-up felt for flat roofs; natural and fibre-cement slate; clay and concrete tiles; mortar-bedded and dry-fix ridges; lead flashings, soakers and valleys; uPVC and cast iron guttering, fascias and soffits). Present it as general information, never as claims of certification, approved-installer status or manufacturer partnerships.
3. **About (`#about`).** Two columns: text introducing Thornton's Roofing as a local roofing company serving the three counties, written plainly and customer-focused. No founding date, team size, years of experience, history, named staff or accreditations. On the other side, `Thornton’s Roofing on Brick House.png`, cropped so the Thornton's banner and the new clay roof are clearly visible.
4. **"No job too big or too small" band.** As in the reference, a full-width image band using `Aerial View of New Roof Renovation.png` (wide crop centred on the slate roof and dormers), followed by or overlaid with a charcoal panel: from a slipped tile or a blocked gutter to a complete re-roof, with a quote CTA. If text sits over the photo, use a solid charcoal panel rather than a full-image dark wash, so the roof stays visible. **No statistics or counters** (the reference's "Years of Experience / Completed Projects / Happy Clients" counters are excluded because we have no verified figures).
5. **How we work (`#how-we-work`)** (replaces the reference's accreditation-heavy "We Are Proud Of Our Work" list). Four or five points about practice, not credentials: we inspect before we quote; a clear written quote with no surprises; quality materials suited to the property; tidy, safe working and a clean site; we keep you informed from start to finish. Present them as a bold-label list or a numbered row.
6. **Areas we cover (`#areas`).** Hampshire, Surrey and West Sussex, shown as three clear blocks or a simple stylised list with a short line about serving homes across each county. Do not list specific towns or draw a map that implies a base location (none has been supplied).
7. **Testimonials: omitted.** No genuine testimonials have been supplied. Do not build this section with invented quotes. Leave an HTML comment `<!-- TESTIMONIALS: add when genuine reviews are supplied -->` where it would sit.
8. **Quote / contact (`#quote`, also reachable from the "Contact" nav link)** ("Get your free roofing quote"). Two columns: a short reassurance paragraph and the contact block (Call / Email / Hours) on one side, and the quote form on the other (see section 7).
9. **Footer.** Light band: logo, one-line description, areas covered, the in-page section links, contact details and a quote CTA. Thin charcoal strip: "© [current year] Thornton's Roofing". No company number, VAT number or address unless supplied.

---

## 7. Contact details and the quote form

**Real contact details have not been supplied yet. Use these placeholder details, exactly as written, so the design shows complete, realistic contact points:**

| Detail | Placeholder | Note |
|---|---|---|
| Phone (landline) | `01632 960 123` (`tel:+441632960123`) | Ofcom range reserved for fictional use, so it never connects to a real person |
| Mobile | `07700 900 123` (`tel:+447700900123`) | Ofcom range reserved for fictional use |
| Email | `info@thorntonsroofing.co.uk` | Placeholder. Must be replaced before launch |
| Opening hours | Mon–Fri 8:00am–5:30pm, Sat 8:00am–12:00pm | Placeholder |

- Do not add a street address or postcode. No base location has been supplied, and the page describes the service area by county only.
- Put every contact detail in **one place**: a clearly commented config object at the top of `js/main.js` (`PHONE`, `PHONE_LINK`, `MOBILE`, `MOBILE_LINK`, `EMAIL`, `HOURS`, `FORM_ENDPOINT`), marked `// PLACEHOLDER: replace with real details before launch`. Also hard-code the same values in the HTML so they show without JavaScript, and mark each instance with `<!-- PLACEHOLDER CONTACT -->` so they can be found and replaced in one search.
- Show them as in the reference: phone and email in the top bar, a click-to-call phone number beside the header CTA on desktop, a prominent "Call" button in the mobile sticky bar, the contact block (Call / Email / Hours) in the quote section, and all of them in the footer. Phone numbers are `tel:` links and the email is a `mailto:` link.
- The **quote form is the primary contact route** and must work visually now. Fields: Name*, Phone*, Email*, Postcode*, Type of work (select: the eight services + "Not sure / other"), Message ("Describe the problem or the work you need"), and a consent checkbox with a short inline note (e.g. "We'll only use your details to respond to your enquiry"). There is no separate privacy page. Use proper `<label>`s, `autocomplete` and `inputmode` attributes, and accessible inline validation. Submit button: **Request a Free Quote**. After submission show a clear success message, and show a helpful error message on failure.
- Submission goes to `FORM_ENDPOINT` (e.g. Formspree, Netlify Forms or Web3Forms). Until one is set, the form validates and shows a notice in the console. Add a `<!-- TODO -->` comment explaining how to connect it.

---

## 8. Copy rules

- Natural, plain, professional and specific, written the way a good local tradesperson's website reads. Short paragraphs. Talk about the customer's roof and problem, not about "solutions" or "excellence".
- **Never invent:** testimonials, reviews, star ratings, review-platform badges, qualifications, accreditations (NFRC, TrustMark, Checkatrade, CompetentRoofer, etc.), insurance or guarantee terms, years trading, project counts, company history, staff names, statistics, or any phone number, email, hours or address other than the placeholders in section 7.
- Avoid filler such as "second to none", "one-stop shop", "we pride ourselves", "unparalleled", "cutting-edge" and "transform your home".
- Mention the three counties naturally for local SEO, without keyword stuffing.

---

## 9. SEO and technical quality

- `<title>` (≤ 60 characters), e.g. "Roofers in Hampshire, Surrey & West Sussex | Thornton's Roofing", and a meta description (≤ 155 characters).
- One H1 and a logical H2/H3 hierarchy (each section an H2). Semantic landmarks (`header`, `nav`, `main`, `footer`) and a skip link.
- JSON-LD `RoofingContractor` schema with `name`, `areaServed` (the three counties), `logo`, `url` and `makesOffer` for the eight services. Do not put the placeholder phone or email in the schema, and do not include `address` or `aggregateRating`. Leave a comment to add `telephone` and `email` once real details exist, so search engines never index placeholder data.
- Open Graph and Twitter meta using the hero image, plus a canonical tag with a `https://www.example.com` placeholder clearly marked TODO. `robots.txt` and a one-URL `sitemap.xml`.
- Images: convert photos to responsive WebP (`srcset`/`sizes`), with explicit `width`/`height`, descriptive alt text, `loading="lazy"` below the fold and the hero eager with `fetchpriority="high"`. Keep the original logo PNG as the source of truth. A WebP copy for display is fine only if it is pixel-identical in appearance and keeps transparency.
- Accessibility: WCAG 2.2 AA contrast, visible focus states, 44 px minimum tap targets, keyboard-operable menu, and `prefers-reduced-motion` respected (including turning off smooth scrolling).
- Motion: minimal and purposeful (subtle fade or rise on section entry, button hover states). No parallax, carousels, auto-playing sliders, counters or scroll-jacking.
- Performance: no unnecessary libraries, CSS under control, and Lighthouse scores of 90+ on mobile for Performance, Accessibility, Best Practices and SEO.

---

## 10. Always / Never

**Always:** one reference (roof-plus.co.uk), one direction, one version, one page (`v1/index.html`). Keep the reference homepage's structure, hierarchy and traditional contractor feel. Use the supplied logo exactly as given on light backgrounds. Use only the three supplied photos. Keep "Request a Free Quote" prominent at every screen size. Make the page fully responsive and mobile-first in usability.

**Never:** extra pages, alternative designs, a second reference, a different aesthetic, an altered or regenerated logo, a background behind the logo, generic AI landing-page layouts (gradient blobs, glass cards, oversized pill buttons, bento grids, "trusted by" logo strips), stock or AI imagery, invented business facts of any kind, any image other than the three supplied photos, invented captions or project details, Roof Plus content, or its North West, housebuilder and commercial references.

---

## 11. Verify before you finish

1. Run the page locally and check it in the browser at 375, 768, 1024 and 1440 px widths. Fix any overflow, cramped spacing, broken menu, unreadable text or logo problem.
2. Confirm that the sunset silhouette photo is the hero, that the brick house photo is in About and the aerial photo is in the image band, and that none is distorted or badly cropped at any width.
3. Compare the page side by side with the roof-plus.co.uk homepage screenshots and confirm that the structure and feel clearly follow it.
4. Confirm that the logo is untouched, transparent, undistorted and only shown on light backgrounds.
5. Click every nav link, footer link and CTA. Each must scroll to the right section with its heading visible below the sticky header. The "Ask about this" links must preselect the right service. Confirm that `v1/` contains only `index.html` as a page and no links point to other pages.
6. Test the form: required-field validation, keyboard use and the success/error states.
7. Search the built files for invented details: "years", "established", "accredited", "approved", "guarantee", "insured", "reviews", "★". Remove anything that is not supplied fact. Confirm that the only phone numbers and emails on the page are the section 7 placeholders, that every instance is marked `PLACEHOLDER CONTACT`, and that all the `tel:` and `mailto:` links work.
8. Finish with a short report listing what was built, where each image was used, where the placeholder contact details appear, and an **outstanding information checklist** for the owner: real phone number(s), email and opening hours (replacing the placeholders), form endpoint, domain, business address (if they want one shown), genuine testimonials, and accreditations/insurance (if any).
