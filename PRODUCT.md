# Product

<!-- impeccable:product-schema 1 -->

> Source: every fact below is taken from the owner's written brief (THORNTONS-ROOFING-PROMPT.md and the single-homepage revision of 2026-10-31). The confirmation round was skipped by the user, so nothing here was confirmed beyond that brief.

## Platform

web

## Stack

Static, hand-written HTML, CSS and a small amount of vanilla JS. No framework, no build step. Hosting not yet decided.

## Users

Homeowners, landlords and property owners in Hampshire, Surrey and West Sussex who need a roof repaired, replaced or built. Many arrive on a phone, often with a problem already happening (a leak, a slipped tile, a blocked gutter).

## Product Purpose

The website of Thornton's Roofing, a local domestic and general roofing contractor. Success is enquiries: a visitor requests a free quote through the form or calls.

## Positioning

A traditional, established local roofer for the three counties, covering everything from a single slipped tile to a complete re-roof, with an inspection before quoting and a clear written quote.

## Operating Context

Single homepage (`v1/index.html`) with in-page sections. The quote form is the primary contact route; phone is secondary. Form endpoint not yet chosen (Formspree, Netlify Forms or Web3Forms style).

## Capabilities and Constraints

- Services: Roof Repairs & Maintenance, New Roofs & Roof Replacements, Slate Roofing, Roof Tiling, Flat Roofing, Leadwork & Flashing, Ridge & Hip Repairs, Guttering & Roofline.
- Service area described by county only. No base location, street address or postcode.
- Contact details are placeholders (Ofcom fictional numbers, placeholder email and hours) held in one config object and marked `PLACEHOLDER CONTACT`.
- UK English throughout.

## Brand Commitments

- Logo: `Thornton’s Roofing Logo (1).png`, charcoal (#0C181B) and roof green (#036A37) on transparent. Used unaltered, only on light backgrounds. The original PNG is the source of truth. The page displays downscaled copies (344/516/688px wide, no recolouring or cropping), which the owner approved on 2026-10-31 for performance.
- Palette limited to the logo's charcoal and green plus neutrals. No orange UI colour.
- Single design reference: roof-plus.co.uk homepage (structure and feel only, never its content).
- Primary CTA wording: "Request a Free Quote".

## Evidence on Hand

- Three photographs only: sunset roofer silhouette (hero), brick house with Thornton's banner, aerial slate roof with Thornton's banner. The two landscape photos may be presented as the company's own work; nothing beyond what is visible may be claimed about them.
- Absent, and never to be invented: testimonials, reviews, ratings, accreditations, insurance or guarantee terms, years trading, project counts, history, staff names, statistics.

## Product Principles

1. Plain, specific trade language about the customer's roof, not marketing abstractions.
2. Every claim is something the business can stand behind today; gaps are left visibly empty, not filled.
3. The quote is always one tap away.
4. Feels like a long-standing local business, not a template or a tech product.

## Accessibility & Inclusion

WCAG 2.2 AA, 44px tap targets, keyboard-operable menu, reduced motion respected. Lighthouse 90+ on mobile across all four categories.
