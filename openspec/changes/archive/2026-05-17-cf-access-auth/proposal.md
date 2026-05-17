## Why

The dashboard is currently unprotected — anyone with the URL can access live property data. Cloudflare Zero Trust Access (with Auth0 as the IdP) is already configured on the account; wiring the Worker to read the identity CF injects gives us auth with no login UI to build and a clear path to role-based access control.

## What Changes

- Add Cloudflare Zero Trust Access Application protecting `ra.megroudebush.com`
- Disable `workers.dev` URL to close the auth bypass
- Add JWT verification middleware to the Hono Worker (using `jose`)
- Add `GET /api/me` endpoint returning authenticated user identity
- Add dev bypass: when `DEV_USER_EMAIL` is set in `.dev.vars`, use that identity instead of verifying a JWT
- Show authenticated user name (or email) in the React sidebar
- Add `CF_ACCESS_AUD` as a required Worker secret (the CF Access application audience tag)

## Capabilities

### New Capabilities

- `cf-access-auth`: CF Zero Trust JWT verification middleware, user identity extraction, `/api/me` endpoint, dev bypass pattern, and user display in the frontend sidebar

### Modified Capabilities

<!-- none — no existing specs to update -->

## Impact

- **New dependency**: `jose` (JWT verification, pure JS, Workers-compatible)
- **New secret**: `CF_ACCESS_AUD` (CF Access AUD tag — obtained from CF dashboard)
- **New dev vars**: `DEV_USER_EMAIL`, `DEV_USER_NAME` in `.dev.vars`
- **wrangler.toml**: `workers_dev = false`, add route for `ra.megroudebush.com`
- **All existing `/api/*` routes** now require a valid CF Access JWT (or dev bypass)
- **CF dashboard prerequisite**: Access Application must be created and AUD tag retrieved before production JWT flow can be tested
