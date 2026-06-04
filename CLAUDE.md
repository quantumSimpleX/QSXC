# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Quantum SimpleX Consulting** — B2B enterprise consulting website. The repo contains:

- `designSystem/` — A standalone click-through UI prototype (open `designSystem/index.html` directly in a browser; no build step needed). This is the design source of truth.
- `docs/prd.md` — Full product requirements spec. Read this before building anything.
- The production website (Next.js or Astro + Tailwind) does **not yet exist** and needs to be built.

## Design System

The design system is the canonical reference for all visual decisions. Do not invent colors, fonts, or spacing — derive them from:

- `designSystem/src/styles/website.css` — component-level CSS (imports `base.css` → `colors_and_type.css`)
- CSS variables in use: `--qs-ink-900`, `--qs-aqua-{100–400}`, `--qs-paper-{pure,warm}`, `--fg-{1,2,3}`, `--fg-inverse`, `--accent-deep`, `--accent-2-deep`, `--font-display`, `--font-sans`, `--font-mono`, `--line`, `--shadow-1`, `--dur-base`, `--ease-out`
- Brand palette: two primary colors (aqua + amethyst) and an ink-black (`--qs-ink-900`)
- No gradient buttons, no testimonial carousels, no logo soup — the brand is intentionally restrained

Component reference in `designSystem/src/components/`:
- `shared/` — Header (sticky, translucent), Footer (2px ink rule + 3-col links), ContactCTA (ink-black band with form)
- `home/` — Hero (oversized display type, 1.6fr/1fr grid), PrinciplesStrip (full-bleed ink band, 3-col), PracticeGrid (3-up cards, aqua/amethyst/ink coded)
- `insights/` — InsightsList (row-based, hover-indent), InsightDetail (760px max-width long-form)

## Building the Production Site

When implementing `docs/prd.md`:

1. **Extract Tailwind config tokens** from the design system CSS variables first — map `--qs-ink-900`, `--qs-aqua-*`, etc. into `tailwind.config.js` color/font scales.
2. **Three routes to build:** `/` (home), `/services` (3-tier matrix), `/book` (iframe embed + fallback contact form).
3. **SSG required** — use Next.js App Router with `generateStaticParams` / static export, or Astro.
4. **No placeholder content** — all copy is specified verbatim in `docs/prd.md`. Use it exactly.
5. Desktop-first layout at ≥1024px (the kit was designed at 1440px).

## Previewing the Design Kit

```
# Just open the file — no server needed
start designSystem/index.html
```

The kit is wired as a SPA: home → insights list → article detail → back. The contact form simulates submission without posting anywhere.
