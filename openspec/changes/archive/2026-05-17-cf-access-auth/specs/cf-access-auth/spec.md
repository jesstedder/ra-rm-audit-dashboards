## ADDED Requirements

### Requirement: JWT verification middleware
All `/api/*` Worker routes SHALL verify the Cloudflare Access JWT before processing the request. The JWT is read from the `Cf-Access-Jwt-Assertion` request header and verified against CF's JWKS at `https://432milton.cloudflareaccess.com/cdn-cgi/access/certs` with issuer `https://432milton.cloudflareaccess.com` and audience `CF_ACCESS_AUD`.

#### Scenario: Valid JWT present
- **WHEN** a request arrives at any `/api/*` route with a valid `Cf-Access-Jwt-Assertion` header
- **THEN** the request proceeds and user identity is available to the route handler

#### Scenario: Missing JWT
- **WHEN** a request arrives at any `/api/*` route with no `Cf-Access-Jwt-Assertion` header and no dev bypass configured
- **THEN** the Worker returns HTTP 401 with `{ "error": "Unauthorized" }`

#### Scenario: Invalid or expired JWT
- **WHEN** a request arrives with a `Cf-Access-Jwt-Assertion` header that fails signature verification or is expired
- **THEN** the Worker returns HTTP 401 with `{ "error": "Unauthorized" }`

### Requirement: Dev identity bypass
When `DEV_USER_EMAIL` is set in the Worker environment, the JWT verification step SHALL be skipped and the value of `DEV_USER_EMAIL` used as the authenticated user's email. `DEV_USER_NAME` MAY also be set to provide a display name.

#### Scenario: Dev bypass active
- **WHEN** `DEV_USER_EMAIL` is set in the environment and a request arrives at any `/api/*` route
- **THEN** the request is treated as authenticated with that email (and name if `DEV_USER_NAME` is set), without any JWT header required

#### Scenario: Dev bypass not set in production
- **WHEN** `DEV_USER_EMAIL` is not set in the environment
- **THEN** JWT verification proceeds normally; the bypass is inactive

### Requirement: User identity endpoint
The system SHALL expose `GET /api/me` returning the authenticated user's identity as JSON.

#### Scenario: Authenticated request to /api/me
- **WHEN** an authenticated request is made to `GET /api/me`
- **THEN** the response is HTTP 200 with `{ "email": "...", "name": "..." | null, "sub": "..." }`

### Requirement: Name-or-email display in sidebar
The React frontend SHALL display the authenticated user's name if available, falling back to their email address if the `name` field is absent or empty.

#### Scenario: Name present in identity
- **WHEN** `GET /api/me` returns a non-empty `name` field
- **THEN** the sidebar displays the name

#### Scenario: Name absent from identity
- **WHEN** `GET /api/me` returns a null or empty `name` field
- **THEN** the sidebar displays the email address instead

### Requirement: workers.dev URL disabled
The Worker's `workers.dev` URL SHALL be disabled in production to prevent auth bypass via direct Worker access.

#### Scenario: workers.dev disabled
- **WHEN** the Worker is deployed with `workers_dev = false` in wrangler.toml
- **THEN** the `<name>.workers.dev` URL returns a CF error and is not usable

#### Scenario: Custom domain route active
- **WHEN** the Worker is deployed with a route for `ra.megroudebush.com/*`
- **THEN** traffic to `ra.megroudebush.com` is served by the Worker and protected by CF Access
