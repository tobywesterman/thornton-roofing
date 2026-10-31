---
name: Thornton's Roofing
description: A traditional local roofing contractor's site, lettered in the logo's charcoal and roof green.
colors:
  charcoal: "#0c181b"
  charcoal-2: "#16262a"
  roof-green: "#036a37"
  roof-green-dark: "#024f29"
  green-tint: "#e6f0ea"
  white: "#ffffff"
  stone: "#f4f2ed"
  stone-2: "#e9e5dc"
  line: "#d9d4c9"
  text-secondary: "#4a5659"
  on-dark-secondary: "#b8c3c5"
  on-green-secondary: "#eef6f1"
  error: "#b42318"
typography:
  display:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.1rem + 4.2vw, 3.375rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  heading:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.6vw, 2.875rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 800
    lineHeight: 1.2
  label:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "2px"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "32px"
  section-y: "clamp(64px, 9vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.roof-green}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.roof-green-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
---

# Design System: Thornton's Roofing

## Overview

**Creative North Star: "The Firm's Own Signboard"**

The site reads like a long-standing local contractor's signage: the logo's charcoal and roof green, heavy uppercase lettering, real photos from site, and square-cornered fittings. It follows the structure of a traditional trade homepage (top bar, white header, full-bleed photo hero, ruled services grid, solid colour bands, quote block, split footer) and refuses SaaS conventions: no gradients, glass, pill buttons, bento grids or invented proof.

Colour comes in solid page-wide bands rather than scattered accents. The only warm tones on the page come from the photographs.

**Key Characteristics:**
- Charcoal and roof green from the logo, on white and warm stone.
- Montserrat 800 uppercase headings echoing the logo's lettering; Source Sans 3 for reading.
- A short green double rule under headings, taken from the rules either side of ROOFING in the logo.
- Hairline-ruled grids instead of shadowed cards.
- Solid charcoal panels over photos, never a full-image wash. In the hero, a charcoal fade sits under the text only, clearing to the photo where the roofer and sun are.

## Colors

A restrained, logo-only palette: two brand colours and warm neutrals. Colour carries whole bands (charcoal top bar, quote panel and legal strip; green How We Work band) rather than decoration.

### Primary
- **Roof Green** (#036a37): primary buttons, links, rules, icon accents, the How We Work band. White text on it passes AA.
- **Roof Green Dark** (#024f29): hover and active only.

### Neutral
- **Charcoal** (#0c181b): text, headings, top bar, aerial-band panel, quote info panel, legal strip.
- **White** (#ffffff) and **Stone** (#f4f2ed): alternating light bands. Stone carries the hero panel, About and the footer.
- **Line** (#d9d4c9): hairlines and grid rules. **Text Secondary** (#4a5659) for supporting copy on light grounds.
- On charcoal, secondary text is #b8c3c5; on green it is #eef6f1 (tinted from the hue, never grey).

### Named Rules
**The Logo-Only Rule.** No colour enters the UI that is not in the logo or a neutral. The hero's orange belongs to the photograph and is never sampled.

**The Light-Ground Logo Rule.** The logo is charcoal on transparent and only ever sits on white or stone: never on charcoal, green or a photo.

## Typography

**Display/Heading Font:** Montserrat (self-hosted variable, latin)
**Body Font:** Source Sans 3 (self-hosted variable, latin)

### Hierarchy
- **Display** (800, uppercase, clamp up to 3.375rem, line-height 1.04): the hero H1 only.
- **Heading** (800, uppercase, clamp 1.875–2.875rem): every section H2.
- **Title** (800, uppercase, 1.125–1.1875rem): service, step and county H3s.
- **Label** (700, uppercase, 0.8125rem, tracking 0.06–0.14em): buttons, "Ask about this" links, footer column titles.
- **Body** (400, 17px mobile / 18px desktop, line-height 1.6, measure ≤ 62ch).

### Named Rules
**The Lettering Rule.** Headings are always heavy uppercase Montserrat; tracking opens only on small labels, as with the logo's spaced ROOFING.

## Layout

Content sits in a 1240px wrap with 16/24/32px gutters. The hero text and the full-bleed quote panels pad their inner edge with `--edge`, which is computed from the same wrap and the scrollbar width, so every section's text starts on one vertical line. Sections use `clamp(64px, 9vw, 112px)` vertical padding. Breakpoints are 600px (two columns), 960px (desktop header, split hero and quote) and 1100px (four-column services, five-column practices).

The sticky header defines `--header-h` (64px mobile / 88px desktop), and every section carries `scroll-margin-top` equal to it.

## Elevation & Depth

Flat. Depth comes from colour bands and the aerial-band panel overlapping the photo. The only shadows are a soft one under the stuck header and above the mobile quote bar.

## Shapes

Square-cornered: a 2px radius on buttons and inputs, and none on panels and images. Diamond bullets (rotated 8px squares) mark the hero facts.

## Components

### Buttons
- **Primary:** solid roof green, white uppercase Montserrat label, 48px tall (54px large), 2px radius; darker green on hover.
- **Outline:** 2px charcoal border, charcoal label; fills charcoal on hover.
- The wording of the primary CTA is always "Request a Free Quote".

### Service grid (signature)
A 1px hairline grid (the grid background is `--line`, the cells are white) in 1, 2 or 4 columns. Each cell holds a 56px two-colour line icon (charcoal structure, green detail, 2.2–2.6 stroke), an uppercase title, a description, and an "Ask about this" label link with an SVG arrow.

### Hero
The sunset photo bleeds to the top, right and bottom edges on charcoal. On desktop it is anchored right (starting at `--edge` + 200px) with a left-to-right charcoal fade under the white text; on mobile it sits full width above the text and fades into charcoal. Buttons are primary green and white outline (`btn--outline-light`).

### Bands
- **Aerial band:** a full-bleed photo with a solid charcoal panel anchored bottom-left on desktop and stacked below the photo on mobile.
- **Practice band:** roof green, with items marked by a 4px white top rule and a bold uppercase label. No numerals.

### Inputs / Fields
50px tall, 1.5px grey border, 2px radius. On focus, a green border plus a soft 3px green ring. Errors use a red border plus an inline message with an SVG alert glyph, and a linked error summary.

### Navigation
- **Desktop:** Montserrat 600 links with a 3px green underline that scales in on hover and on the current section, a call block (phone in a green-tint circle), and the primary CTA.
- **Mobile:** a full-screen white panel with 60px uppercase links, plus a fixed bottom bar: Call in charcoal and Request a Free Quote in green, at a 1:2 width ratio.

## Do's and Don'ts

### Do:
- **Do** use only the supplied photographs, cropped but never filtered.
- **Do** put the green double rule under section headings.
- **Do** keep contact details sourced from the `CONFIG` object and marked `PLACEHOLDER CONTACT` until real ones exist.
- **Do** write plain trade language about the customer's roof.

### Don't:
- **Don't** place the logo on charcoal, green or a photo, or give it a box, shadow or filter.
- **Don't** add gradients, glass, pill buttons, eyebrow labels, counters, star ratings or a "trusted by" strip.
- **Don't** invent testimonials, accreditations, years trading, statistics or guarantees.
- **Don't** use the hero photo's orange anywhere in the UI.
