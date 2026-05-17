## ADDED Requirements

### Requirement: Hono app as Worker fetch handler
The system SHALL export a Hono app as the default export of `src/worker/index.ts`, compatible with the Cloudflare Workers runtime `fetch` handler interface.

#### Scenario: Worker handles API request
- **WHEN** a request arrives at `/api/audits/pet-fees`
- **THEN** the Hono router handles it and returns a JSON response

#### Scenario: Unknown API route returns 404
- **WHEN** a request arrives at an undefined `/api/*` path
- **THEN** Hono returns HTTP 404 with a JSON error body

---

### Requirement: RM credentials loaded from Worker env bindings
The Worker SHALL read `RM_BASEURL`, `RM_USERNAME`, `RM_PASSWORD`, and `RM_LOCATIONID` from the Cloudflare Worker environment (configured via `wrangler.toml` vars or Cloudflare dashboard secrets / `.dev.vars` locally), and pass them to `createClient` per request.

#### Scenario: All credentials present
- **WHEN** all four env vars are set and a request arrives
- **THEN** `createClient` is called with a valid `RMCredentials` object

#### Scenario: Missing credentials
- **WHEN** any required env var is absent
- **THEN** the API returns HTTP 500 with a descriptive error message

---

### Requirement: CORS middleware for local development
The Worker SHALL apply CORS headers to all `/api/*` routes so the Vite dev server (port 5173) can call the Wrangler dev server (port 8787) without browser errors during local development.

#### Scenario: Cross-origin request in dev
- **WHEN** a request arrives with `Origin: http://localhost:5173`
- **THEN** the response includes appropriate `Access-Control-Allow-Origin` headers

---

### Requirement: Worker Assets serves the React build
`wrangler.toml` SHALL configure `[assets]` pointing to `./dist` so the built React app is served as static files from the same Worker origin. Non-API requests fall through to assets automatically.

#### Scenario: Frontend served from Worker
- **WHEN** a request arrives at `/` or any non-`/api/*` path
- **THEN** the Worker serves the corresponding file from `./dist`
