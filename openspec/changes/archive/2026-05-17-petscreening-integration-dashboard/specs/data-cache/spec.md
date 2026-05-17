## ADDED Requirements

### Requirement: Cloudflare Cache API wrapper

The system SHALL provide a cache module (`src/lib/cache.ts`) using `caches.default` with synthetic cache URLs (`https://cache.internal/{key}`). It SHALL expose `getCached<T>`, `setCached<T>`, and `bustCache` functions.

#### Scenario: Cache miss
- **WHEN** `getCached("rm-data")` is called and no entry exists
- **THEN** `null` is returned

#### Scenario: Cache hit within TTL
- **WHEN** `setCached("rm-data", data, 300)` is called and then `getCached("rm-data")` is called within 5 minutes
- **THEN** the stored data is returned

#### Scenario: Cache bust
- **WHEN** `bustCache("rm-data", "ps-profiles")` is called
- **THEN** both cache entries are deleted and subsequent `getCached` calls return `null`

---

### Requirement: POST /api/cache/refresh endpoint

The worker SHALL expose `POST /api/cache/refresh` (behind the existing auth middleware) that busts the `rm-data` and `ps-profiles` cache entries and returns `{ ok: true }`.

#### Scenario: Refresh triggered
- **WHEN** authenticated user POSTs to `/api/cache/refresh`
- **THEN** both cache entries are deleted and `{ ok: true }` is returned with HTTP 200

---

### Requirement: Refresh button with last-refreshed timestamp

The frontend SHALL include a `RefreshButton` component mounted in the sidebar footer. Clicking it SHALL call `POST /api/cache/refresh` and then trigger a re-fetch on the currently active page. The button SHALL display the time of the last successful refresh.

#### Scenario: Button clicked
- **WHEN** the user clicks the Refresh button
- **THEN** the button shows a loading state, calls the refresh endpoint, then reloads the active page's data and updates the displayed timestamp

#### Scenario: Refresh fails
- **WHEN** the refresh endpoint returns an error
- **THEN** an inline error message is shown and the timestamp is not updated
