## Context

The `src/lib/rm/` library is complete and battle-tested against the live API. This change adds the web layer on top. The deployment target is a standalone Cloudflare Worker (Hono) that serves both the API routes and the React static assets via Cloudflare's Worker Assets binding — a single `wrangler deploy` with no separate Pages project.

## Goals / Non-Goals

**Goals:**
- Working local dev environment (HMR for React via Vite, live API via `wrangler dev`)
- Single Cloudflare Worker deployment serving both API and frontend
- Pet-fee audit as the first end-to-end route + UI
- Component and layout foundation that future audit views slot into naturally

**Non-Goals:**
- Authentication/login for the dashboard itself (internal tool, no auth for now)
- Caching of API responses
- Multiple environments (staging, prod) — dev and prod only
- Unit tests for the web layer (manual verification on first scaffold)

## Decisions

### Decision: Standalone Cloudflare Worker (not Pages Functions)

The API and frontend are served by a single standalone Worker configured via `wrangler.toml` and deployed with `wrangler deploy`.

**Why:** A proper Worker gives full control over routing, middleware, and lifecycle. Pages Functions are a layer on top of Workers that adds Pages-specific constraints without benefit for this use case. Worker deployment is simpler to reason about and easier to manage secrets on.

**Structure:**
```
src/worker/
  index.ts       ← Hono app entry point; Worker `fetch` handler

wrangler.toml    ← Worker config: name, compatibility date, assets, vars
```

---

### Decision: Worker Assets for serving the React build

`wrangler.toml` uses the `[assets]` binding to serve the Vite build output (`dist/`) as static files. The Worker handles `/api/*` routes with Hono; everything else falls through to the asset serving.

```toml
[assets]
directory = "./dist"
```

**Why:** Single deployment, single domain, no CORS needed. The Worker and frontend share the same origin. No separate Pages project to configure or manage.

**Alternative considered:** Separate Cloudflare Pages project for the frontend + Worker for the API. Rejected — two deployments, CORS headers needed, more moving parts for an internal tool.

---

### Decision: Hono as the Worker's fetch handler

```typescript
// src/worker/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/api/*', cors())
// routes...

export default app
```

Hono's default export is a `{ fetch }` object compatible with the Workers runtime.

**Why:** Clean routing, typed middleware, easy to add new audit routes. Workers-native — no adapter shim needed (unlike the Pages Functions approach).

---

### Decision: Vite dev server + proxy for local development

During development, two processes run concurrently:
1. `wrangler dev --port 8787` — runs the Worker locally (API only, or with assets)
2. `vite dev --port 5173` — runs the React app with HMR, proxies `/api/*` to port 8787

`vite.config.ts` proxy:
```ts
server: { proxy: { '/api': 'http://localhost:8787' } }
```

**Why:** Vite's HMR is essential for productive UI work. `wrangler dev` handles the Worker runtime correctly for API calls. The proxy bridges them seamlessly.

**Dev scripts in `package.json`:**
```json
"dev:api": "wrangler dev --port 8787",
"dev:web": "vite",
"dev": "concurrently \"npm run dev:api\" \"npm run dev:web\"",
"build": "vite build",
"deploy": "npm run build && wrangler deploy"
```

---

### Decision: shadcn/ui components copied manually (not via CLI)

shadcn/ui component source is copied into `src/web/components/ui/` rather than using the shadcn CLI, which assumes Next.js project structure.

**Why:** The CLI generates Next.js-specific config. For a plain Vite project, copying the 3-4 needed components (`Table`, `Badge`, `Button`, `Skeleton`) directly is simpler and avoids framework-specific scaffolding.

---

### Decision: Tanstack Table for audit data tables

**Why:** Full control over rendering, sorting, filtering. The `shadcn/ui` DataTable pattern wraps Tanstack Table cleanly and is the community standard for this stack. Future audit views will need the same capabilities.

## Risks / Trade-offs

- **Worker Assets is relatively new** → Mitigation: straightforward `[assets]` config; well-documented; fallback is serving from Pages if issues arise.
- **Two dev processes** → Mitigation: `concurrently` wraps them; one command to start.
- **`wrangler dev` cold start on changes** → Mitigation: Workers runtime reloads fast; only affects API changes, not UI changes (which use Vite HMR).
- **No HTTPS in local dev** → Acceptable for an internal tool.
