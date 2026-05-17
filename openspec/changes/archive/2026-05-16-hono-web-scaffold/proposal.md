## Why

The RM library and pet-fee audit script are working, but the results only exist as console output. This change adds the web layer — a Hono API server and React dashboard — so audit results are browsable, filterable, and shareable without running a script.

## What Changes

- New Hono API server running as Cloudflare Pages Functions, exposing `/api/audits/pet-fees`
- New React + Vite frontend with a sidebar nav and pet-fee audit table as the first view
- Cloudflare Pages deployment config (`wrangler.toml`, `.dev.vars` setup)
- New dev dependencies: hono, react, vite, tailwindcss, shadcn/ui, tanstack-table

## Capabilities

### New Capabilities

- `api-server`: Hono app mounted as a Cloudflare Pages Function catch-all — handles all `/api/*` routes, reads RM credentials from Cloudflare env bindings, creates `RMClient` per request
- `pet-fee-audit-endpoint`: `GET /api/audits/pet-fees` — calls `findTenantsWithPetFeeButNoPet`, returns JSON array; serves as the template for all future audit endpoints
- `web-app-shell`: React + Vite SPA scaffold — sidebar nav, routing, Tailwind base styles, shadcn/ui component setup; designed to host multiple audit views over time
- `pet-fee-audit-ui`: Pet fee audit page — fetches `/api/audits/pet-fees`, renders results in a Tanstack Table with sort/filter; columns: Tenant, Unit, Charge Type, Amount

### Modified Capabilities

## Impact

- New `functions/` directory (Pages Functions entry point)
- New `src/web/` directory (React app source)
- New `wrangler.toml`, `vite.config.ts`, `tailwind.config.ts`
- Updated `package.json` with new dependencies and dev scripts
- `src/lib/rm/` — untouched
- `scripts/` — untouched
