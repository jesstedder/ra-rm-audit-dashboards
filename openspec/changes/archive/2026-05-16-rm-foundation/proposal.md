## Why

Rolling Acres needs programmatic access to RentManager data to catch data-integrity issues (e.g. tenants charged a pet fee with no pet on file) that are invisible in the standard UI. This foundation establishes the TypeScript library and first audit script, with an architecture that scales into a Hono/Cloudflare Workers API and React dashboard.

## What Changes

- New TypeScript project scaffold with `tsx`-based script runner and strict ESM/fetch-only constraints
- New `src/lib/rm/` client library: authenticated RentManager WAPI12 wrapper with pagination support
- New `scripts/pet-fee-audit.ts`: first audit script answering "who is charged a pet fee but has no pet?"

## Capabilities

### New Capabilities

- `rm-api-client`: Authenticated HTTP client for RentManager WAPI12 — handles auth headers, pagination, error responses, and rate-limit awareness. Pure `fetch()` only so it runs on Cloudflare Workers later.
- `charges-module`: Functions for querying ChargeTypes and RecurringCharges from the RM API.
- `pets-module`: Functions for querying Pets from the RM API.
- `tenants-module`: Functions for querying Tenants (by ID set) from the RM API.
- `pet-fee-audit`: Console script that cross-references recurring pet fee charges against pet records and reports tenants with a fee but no pet.

### Modified Capabilities

## Impact

- New `package.json`, `tsconfig.json` at project root
- New `src/lib/rm/` directory (4 modules)
- New `scripts/` directory
- Runtime dependency: `tsx` (dev), `typescript` (dev)
- `.env` file already present with `RM_API` token — no changes needed
