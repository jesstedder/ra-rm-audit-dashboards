## ADDED Requirements

### Requirement: Client creation
The system SHALL provide a `createClient(token: string)` function that returns an `RMClient` object configured for the Rolling Acres RentManager instance (`https://rollinga.api.rentmanager.com`).

#### Scenario: Client created with valid token
- **WHEN** `createClient` is called with a non-empty token string
- **THEN** it returns an `RMClient` with the base URL and auth header pre-configured

---

### Requirement: Authenticated requests
The `RMClient` SHALL attach `X-RM12Api-ApiToken: <token>` to every outbound request automatically.

#### Scenario: Request includes auth header
- **WHEN** any `RMClient` method makes a fetch call
- **THEN** the request includes the `X-RM12Api-ApiToken` header with the configured token

---

### Requirement: Paginated collection fetch
The `RMClient` SHALL provide a `getAll<T>(path, params?)` method that fetches all pages of a collection and returns a single `T[]`, using `pageSize=1000` and incrementing `pageNumber` until all records are retrieved.

#### Scenario: Single-page result
- **WHEN** `getAll` is called and `X-Total-Results` is ≤ 1000
- **THEN** it returns all records in a single fetch

#### Scenario: Multi-page result
- **WHEN** `getAll` is called and `X-Total-Results` exceeds 1000
- **THEN** it fetches subsequent pages until all records are retrieved and returns the combined array

#### Scenario: Empty result (204 response)
- **WHEN** the API returns HTTP 204
- **THEN** `getAll` returns an empty array without throwing

---

### Requirement: Error normalization
The `RMClient` SHALL throw a typed `RMApiError` (with `status`, `message`, and `path`) for any non-2xx response other than 204.

#### Scenario: 4xx response
- **WHEN** the API returns a 4xx status
- **THEN** an `RMApiError` is thrown with the status code and response body as message

#### Scenario: 5xx response
- **WHEN** the API returns a 5xx status
- **THEN** an `RMApiError` is thrown with the status code
