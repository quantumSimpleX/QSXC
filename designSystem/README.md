# Quantum Simplex — Website UI kit

A high-fidelity, click-through marketing-site recreation in the Quantum Simplex brand.

> **Note:** No production website code was attached. This kit is derived from the brand brief and is **representative**, not a recreation of a live site. Treat it as a launchpad for the real site rather than a faithful copy.

## Run it
Open `index.html`. The home screen shows the full marketing flow; the insights list and an article view are wired up as a click-through. The contact form posts to nothing — it simulates submission.

## Components

| File | What it is | Where it's used |
| --- | --- | --- |
| `Header.jsx`         | Sticky top nav with brand mark, links, primary CTA. Translucent paper background, backdrop-blurred. | Every screen |
| `Hero.jsx`           | Full-bleed hero with eyebrow, oversized headline, lede, two CTAs, and the simplex mark in a framed card. | Home |
| `PrinciplesStrip.jsx`| Full-bleed ink-black band with three numbered principles. Used as a transition between hero and grid. | Home |
| `PracticeGrid.jsx`   | Three-up grid of practice cards (Wave reading / Boat building / Crew training), aqua / amethyst / ink coded. | Home |
| `InsightsList.jsx`   | Row-based list of articles with category tag, title, sub, and meta. Subtle hover indent. | Home, Insights |
| `InsightDetail.jsx`  | Long-form article layout with tight measure, pull quote, ruled lists. | Article view |
| `ContactCTA.jsx`     | Ink-black footer band with form, pill-based topic selector, and confirmation state. | Home, Insights |
| `Footer.jsx`         | 2px ink rule, brand block, three-column link list, version mono tag. | Every screen |

## Brand tokens
All styles inherit from `../../colors_and_type.css` (via `../../base.css`). The website-only chrome lives in `website.css`.

## What's intentionally missing
- No image hero. The mark itself is the hero — that's the brand. Add a photo only if you commit to the imagery rules in the root `README.md`.
- No testimonial carousels, no logo soup, no gradient buttons. The brand is two colors and a wordmark.
- No mobile nav drawer — design is desktop-first and shown at 1440 in the kit preview.
