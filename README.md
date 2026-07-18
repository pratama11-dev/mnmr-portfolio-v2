# MAKIR by M.I.N.O — Marketing Site

Gamified single-page marketing site for MAKIR, a modular ERP built from the client's
actual business process. The page is a playable journey: diagnose operational chaos,
repair the broken pipeline, assemble your own module plan — an Operational Health HUD
tracks progress to 100% ("SYSTEM ONLINE").

## Stack

- Next.js 15 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS 4 + tw-animate-css
- GSAP + ScrollTrigger for scroll choreography
- Bilingual EN/ID via a typed client-side dictionary (no route-based i18n)

## Getting started

```bash
bun install
bun dev        # http://localhost:3000
bun run build  # production build (type-checks + lints)
```

## Structure

- `src/content/` — typed copy dictionaries (`en.ts`, `id.ts`), module/estimator data (`modules.ts`)
- `src/context/` — `LocaleContext` (EN/ID, persisted to localStorage), `GameContext` (journey state, derived health score)
- `src/components/sections/` — journey stages in page order: hero → chaos → barriers → principles → builder → method → comparison → vision → offer → contact
- `src/components/` — HUD, stage rail, ticker, header/footer, toggles

The scope estimator in the builder outputs indicative mandays/months only — no pricing.
Effort figures live in `src/content/modules.ts`.
