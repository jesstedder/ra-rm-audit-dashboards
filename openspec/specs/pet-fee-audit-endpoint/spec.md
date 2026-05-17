# Capability: Pet Fee Audit Endpoint

Requirements for the `GET /api/audits/pet-fees` API endpoint.

---

## Requirement: GET /api/audits/pet-fees returns audit results

The system SHALL provide a `GET /api/audits/pet-fees` endpoint that calls `findTenantsWithPetFeeButNoPet(client)`, joins the results with PS profile data by unit name, and returns the enriched results as a JSON object `{ rows, cachedAt }`. Both RM data and PS profiles SHALL be fetched from the shared cache (5-minute TTL) and refreshed via `POST /api/cache/refresh`.

#### Scenario: Results returned
- **WHEN** `GET /api/audits/pet-fees` is called
- **THEN** the response is HTTP 200 with `Content-Type: application/json` and a JSON object containing `rows` (array of `PetFeeAuditResult`) and `cachedAt` (ISO timestamp string or null)

#### Scenario: Empty result
- **WHEN** no mismatches exist
- **THEN** the response is HTTP 200 with `{ rows: [], cachedAt: string | null }`

#### Scenario: RM API error
- **WHEN** the RentManager API returns an error during the audit
- **THEN** the endpoint returns HTTP 502 with a JSON error body containing the upstream status and message

---

## Requirement: Audit result JSON shape

Each item in the `rows` array SHALL include `tenantId`, `tenantName`, `unitId`, `unitName`, `chargeTypeName`, `amount`, `status`, `moveOutDate`, and an optional `psProfile` field. The `psProfile` field SHALL be present when a PS profile exists for the same unit as the audit result row.

`psProfile` shape:
```
{
  publicToken: string
  pawScore: number
  petName: string
  psLink: string   // https://rolling-acres.petscreening.com/p/{publicToken}
}
```

#### Scenario: Result shape with PS match
- **WHEN** the endpoint returns results and a PS profile exists for the unit
- **THEN** each matching object contains `psProfile` with `publicToken`, `pawScore`, `petName`, and `psLink`

#### Scenario: Result shape without PS match
- **WHEN** no PS profile exists for the unit
- **THEN** `psProfile` is absent (or `undefined`) on that row
