## 1. Project Scaffold

- [x] 1.1 Create `package.json` with `tsx`, `typescript`, `dotenv` as dev dependencies
- [x] 1.2 Create `tsconfig.json` with strict mode, ESM output, `src` and `scripts` paths
- [x] 1.3 Add `scripts` entry to `package.json`: `"audit:pet-fees": "tsx scripts/pet-fee-audit.ts"`

## 2. RM API Client (`src/lib/rm/client.ts`)

- [x] 2.1 Define `RMApiError` class with `status`, `message`, `path`
- [x] 2.2 Define `RMClient` type and `createClient(token)` factory function
- [x] 2.3 Implement `getAll<T>(path, params?)` with pagination loop (pageSize=1000, X-Total-Results header)
- [x] 2.4 Handle 204 response as empty array in `getAll`
- [x] 2.5 Throw `RMApiError` on non-2xx (excluding 204)

## 3. Charges Module (`src/lib/rm/charges.ts`)

- [x] 3.1 Define `ChargeType` and `RecurringCharge` TypeScript interfaces
- [x] 3.2 Implement `getChargeTypes(client)` using `client.getAll('/ChargeTypes')`
- [x] 3.3 Implement `findPetFeeChargeTypes(chargeTypes)` with case-insensitive name matching
- [x] 3.4 Implement `getRecurringChargesByTypeIds(client, ids)` — filter per ID, merge results; return early on empty input

## 4. Pets Module (`src/lib/rm/pets.ts`)

- [x] 4.1 Define `Pet` TypeScript interface
- [x] 4.2 Implement `getAllPets(client)` using `client.getAll('/Pets')`
- [x] 4.3 Implement `getTenantIdsWithPets(pets)` returning `Set<number>`

## 5. Tenants Module (`src/lib/rm/tenants.ts`)

- [x] 5.1 Define `Tenant` TypeScript interface
- [x] 5.2 Implement `getTenantsByIds(client, ids)` — batch fetch using `filters=TenantID,in,{ids}`; return early on empty input
- [x] 5.3 Implement `tenantDisplayName(tenant)` helper

## 6. Pet Fee Audit (`src/lib/rm/audits/pet-fee.ts` + `scripts/pet-fee-audit.ts`)

- [x] 6.1 Implement `findTenantsWithPetFeeButNoPet(client)` — orchestrates calls to charges, pets, tenants modules and returns result array
- [x] 6.2 Create `scripts/pet-fee-audit.ts` — loads `.env`, creates client, calls audit function, prints table and summary to console
- [x] 6.3 Verify output against live API: confirm matched ChargeType names, check result for known issues
