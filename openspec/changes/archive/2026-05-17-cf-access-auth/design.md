## Context

The Hono Worker currently has no authentication — all `/api/*` routes and static assets are publicly accessible via the `workers.dev` URL. Cloudflare Zero Trust Access is already deployed on the account with Auth0 as the IdP. CF Access sits at the Cloudflare edge and injects a signed JWT (`Cf-Access-Jwt-Assertion` header) into every request that passes authentication. The Worker needs to read and verify this JWT to know who the user is.

Production URL: `ra.megroudebush.com` (on `megroudebush.com` CF zone)
CF Access team domain: `432milton.cloudflareaccess.com`

## Goals / Non-Goals

**Goals:**
- Verify the CF Access JWT on every `/api/*` request
- Extract user identity (email, name) from the verified JWT
- Expose identity via `GET /api/me`
- Show user name (or email fallback) in the React sidebar
- Support local dev without a real JWT via env var bypass
- Disable `workers.dev` URL to close the auth bypass gap

**Non-Goals:**
- Building login/logout UI (CF Access handles this entirely)
- Role-based access control (foundation laid, enforcement deferred)
- Session management or token refresh (handled by CF Access)
- Multi-location or multi-tenant auth

## Decisions

### JWT verification with `jose` rather than trusting headers

**Decision:** Use `jose` to cryptographically verify the `Cf-Access-Jwt-Assertion` JWT using CF's public keys before trusting any identity claims.

**Rationale:** The `Cf-Access-Authenticated-User-Email` header is simpler to read but forgeable if the `workers.dev` URL is reachable (CF does not set these headers on direct Worker requests). Even after setting `workers_dev = false`, proper JWT verification is the right baseline and enables extracting custom claims (including future roles) from Auth0.

**Alternatives considered:**
- Trust `Cf-Access-Authenticated-User-Email` header only — rejected because it requires the `workers.dev` bypass to be fully closed and offers no path to role claims.
- Hand-roll RS256 verification with Web Crypto — rejected in favor of `jose` (maintained library, fewer sharp edges).

**JWKS URL:** `https://432milton.cloudflareaccess.com/cdn-cgi/access/certs`

### `CF_ACCESS_AUD` as a required secret

**Decision:** The CF Access AUD tag (application audience) is stored as `CF_ACCESS_AUD` Worker secret, required in production. `jwtVerify` validates the `aud` claim.

**Rationale:** Without audience validation, any CF Access JWT from the `432milton` team (including other applications) would be accepted. The AUD tag scopes validation to this specific application.

### Auth middleware on `/api/*` only

**Decision:** The Hono auth middleware runs on `/api/*` routes. Static asset serving (`ASSETS.fetch`) is not gated by the Worker — CF Access protects the whole domain at the edge.

**Rationale:** Static files (JS, CSS) don't contain sensitive data and CF Access already blocks unauthenticated users before they reach the Worker. Gating `ASSETS.fetch` in the Worker would add latency for no security benefit.

### Dev bypass via `DEV_USER_EMAIL` env var

**Decision:** If `DEV_USER_EMAIL` is set in the Worker environment, skip JWT verification and use that value as the authenticated identity. `DEV_USER_NAME` is optional.

**Rationale:** `wrangler dev` has no CF Access in front of it. A hardcoded dev identity enables the full auth code path to run locally. The bypass is env-var-gated so it cannot accidentally activate in production (where `DEV_USER_EMAIL` is never set).

### Hono typed Variables for user context

**Decision:** User identity is attached to Hono's typed context via `c.set('user', userInfo)` in middleware, accessed in routes via `c.get('user')`.

**Rationale:** Avoids re-parsing the JWT per route, gives TypeScript type safety across all handlers, and makes future role checks a one-liner in any route.

### `/api/me` for frontend identity

**Decision:** The React app fetches `GET /api/me` once on mount to get the current user. The Worker reads it from Hono context (already verified by middleware).

**Rationale:** Clean separation — the frontend doesn't parse JWTs or read CF cookies. Enables future enrichment (e.g., adding roles to the response) without frontend changes.

### Name display with email fallback

**Decision:** Show `name` from the JWT if present; fall back to `email` if not. Auth0 passes `name` as a standard claim but CF Access may not always forward it depending on IdP configuration.

**Rationale:** Graceful degradation — the sidebar will work correctly regardless of whether the `name` claim is in the JWT.

## Risks / Trade-offs

**JWKS fetch on cold start** → CF's JWKS endpoint is fast and cached by `jose` within a Worker invocation. For a 3-user internal tool this is negligible. If it ever becomes a concern, pre-warm the JWKS set at Worker startup.

**`workers_dev = false` breaks `wrangler dev`** → It does not. `workers_dev = false` only disables the deployed `workers.dev` URL; local `wrangler dev` is unaffected.

**AUD tag is a CF dashboard prerequisite** → The JWT verification will fail in production until the CF Access Application is created and `CF_ACCESS_AUD` is set as a secret. Local dev bypasses this entirely. Document the setup steps clearly in tasks.

**`name` claim availability is unknown** → CF Access may or may not forward Auth0's `name` claim. The code handles both cases (name optional); the actual value will be confirmed on first login.

## Open Questions

- Does the CF Access Application need to be set to "self-hosted" mode pointing to `ra.megroudebush.com`? (Yes — that's the standard pattern for protecting a Worker on a custom domain.)
- Should the `workers.dev` URL be blocked via `workers_dev = false` or via a CF firewall rule? (`workers_dev = false` in wrangler.toml is the correct approach — it removes the route entirely.)
