## Why

All tenants are required to submit a PetScreening questionnaire regardless of pet ownership, but the Pet Registration Check page only distinguishes "All units" vs "Gaps only" — hiding other meaningful compliance states. Additionally, when both systems show pet records, there is no check that the pets are actually the same animals, meaning a tenant could register different pets in each system without being flagged.

## What Changes

- **Status filter expansion**: Replace the two-option "All / Gaps only" segmented control with a multi-state status filter covering the full taxonomy of compliance states (No Record, RM Only, Gap, Mismatched, Matched)
- **Status legend**: Add an inline description panel to the page explaining what each status means and what action it implies
- **Richer status computation**: Replace the binary `hasGap` field in `RegistrationCheckRow` with a `status` enum that covers all five states
- **Fuzzy pet name matching**: When a row has both PS pets and RM pets, compare pet names and species client-side using fuzzy string matching to determine whether the records refer to the same animals; surface mismatches as a distinct "Mismatched" status with per-pet match details visible in the row

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `pet-registration-check`: `RegistrationCheckRow` endpoint response shape changes (`hasGap: boolean` → `status: string` enum); UI filter, status display, and status legend all change significantly; fuzzy pet matching added to the matched-row display

## Impact

- `src/worker/index.ts` — update `RegistrationCheckRow` interface and status computation logic in the `/api/pets/registration-check` handler
- `src/web/src/features/petscreening/PetRegistrationPage.tsx` — replace filter control, add legend, add fuzzy match display in the PS Pets / RM Pets columns
- `openspec/specs/pet-registration-check/spec.md` — delta spec with updated requirements
