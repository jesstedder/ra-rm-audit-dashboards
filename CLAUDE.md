# Project: Rolling Acres Property Dashboard

Cloudflare Worker + React frontend for the Rolling Acres Mobile Home Park. Hono framework, TanStack Table, Verdant Estate theme.

## Architecture

- `src/config.ts` — all non-secret configuration (URLs, TTLs). Single source of truth.
- `src/lib/` — shared logic used by the worker
- `src/worker/index.ts` — Hono Cloudflare Worker (API + static asset serving)
- `src/web/` — Vite/React frontend

Secrets (credentials) stay in `.dev.vars` locally and Cloudflare dashboard secrets in prod. They are never in `src/config.ts` or committed files.

## Rules

**No hardcoded URLs anywhere except `src/config.ts`.**  
Every URL — API base, web UI deep-link bases, Cloudflare Access domain, cache internal URL — must be imported from `config`. Do not inline URL strings in lib files, worker handlers, or frontend components.

**No secrets in source code.**  
RM credentials, PetScreening credentials, and CF_ACCESS_AUD are Worker environment bindings only (`.dev.vars` / Cloudflare secrets). Never import them from config or commit them.

**One RM auth session per isolate lifetime.**  
`src/lib/rm/client.ts` uses a module-level token cache. Do not call `createClient` more than once per worker handler for the same credentials — share the client or use the cache layer.

**Cache keys are defined alongside their consumers.**  
`ps-profiles`, `rm-data`, and `pet-fee-audit` are the canonical cache keys. `bustCache` in `POST /api/cache/refresh` must bust all three.
