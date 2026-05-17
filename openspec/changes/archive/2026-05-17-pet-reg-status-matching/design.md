## Context

The Pet Registration Check page currently surfaces `hasGap: boolean` — a unit is either a "gap" (PS pets with no RM record) or not. The business reality is richer: all tenants must fill out a PetScreening questionnaire, and a tenant can be out of compliance in multiple distinct ways. The current binary makes it impossible to filter on or act on the full compliance picture.

The data needed is already fetched: `psPets` (indexed by unit number from PS profiles) and `rmPets` (from the RM tenant record) are both in the API response. Pet name and species from both sides are available for comparison.

## Goals / Non-Goals

**Goals:**
- Replace `hasGap: boolean` with a `status` string enum covering all five compliance states
- Surface all statuses in the filter and explain each in a legend
- Fuzzy-match PS and RM pet names/species to detect cross-system mismatches

**Non-Goals:**
- Querying a separate PS "questionnaire submitted" endpoint to distinguish "no questionnaire" from "questionnaire with no pets" — not currently available in the PS session API we use; both map to `no_record`
- Auto-resolving or writing back to RM or PS
- Phonetic/ML-based similarity (a simple edit-distance check is sufficient at this scale)

## Decisions

### Status taxonomy (server-side computation)

Replace `hasGap` with a server-computed `status` field in `RegistrationCheckRow`:

| status | condition | compliance |
|--------|-----------|------------|
| `no_record` | active tenant, no PS pets, no RM pets | Unknown — may not have submitted |
| `rm_only` | no PS pets, has RM pets | Gap — pets in RM but not screened |
| `gap` | has PS pets, no RM pets | Gap — screened but not in RM |
| `mismatched` | has both, fuzzy match fails | Suspect — may be different animals |
| `matched` | has both, fuzzy match succeeds | OK |

**Why server-side?** Keeps the client filter logic simple and the status value is part of the data contract. Client has all the info it needs, but centralising avoids duplicating the logic if we ever add another consumer (e.g. the analytics ETL). `hasGap` is removed — it's fully derivable from `status`.

**Units with no active tenant** continue to appear only if they have PS profiles (existing behaviour), and their status is `gap` if they have PS pets and no RM pets.

### Fuzzy pet name matching (client-side)

The fuzzy match runs client-side in the React component when rendering the PS Pets / RM Pets columns. It does not affect the server-side `status` field — status is already determined by whether records exist. The match affects only the visual presentation of matched rows (showing which PS pet corresponds to which RM pet, and flagging mismatches).

**Algorithm (pure JS, no library):**
1. Normalize both names: lowercase, strip non-alphanumeric, trim
2. Exact: normalized strings are equal → `exact`
3. Contains: one normalized string contains the other → `close`
4. Species cross-check: PS `species` (e.g. "Dog") matches RM `breed` presence (if RM breed is known) — secondary signal only
5. Otherwise → `no_match`

For a row with N PS pets and M RM pets, compute a best-match pairing (greedy, sort by match quality). If any PS pet has `no_match` against all RM pets, the row is `mismatched`; otherwise `matched`. This is the same condition used for the server-side `status` field, so the server pre-computes `status = 'mismatched'` using the same algorithm.

**Why client-side rendering?** The match detail (which specific PS pet matched which RM pet) is presentation logic. The server only needs the aggregate pass/fail.

**Why no library?** The data volume is small (≤ 5 pets per row) and the normalization + contains check is sufficient. Levenshtein is not needed for animal names — "Buddy" vs "Bud" → contains; "Max" vs "Maximus" → contains. Adding a full edit-distance library for this is over-engineered.

### Filter redesign

Replace the two-button segmented control with a multi-select status filter (checkboxes or a dropdown). Default: all statuses shown. Filter chips appear in the active filter bar for any selected subset.

The legend is a small collapsible or always-visible section above the filter panel — a compact table of status → description → action implied.

## Risks / Trade-offs

- **`no_record` ambiguity**: A tenant who submitted "I have no pets" and a tenant who never submitted both appear as `no_record`. We can't distinguish them without a separate PS questionnaire-submitted endpoint. → Mitigation: the legend makes this explicit ("No PetScreening profile found — may not have submitted questionnaire").
- **Fuzzy match false positives on common names**: "Max" could match "Maxi", a different pet. → Mitigation: match is advisory, not authoritative; the status column shows "Matched (check names)" or similar, and the per-pet pairing is visible.
- **`hasGap` removal is a breaking change**: Any consumer expecting `hasGap` in the API response will break. → Mitigation: only the dashboard UI consumes this endpoint; update both together.

## Migration Plan

1. Update `RegistrationCheckRow` interface in `src/worker/index.ts` (add `status`, remove `hasGap`)
2. Update status computation in the `/api/pets/registration-check` handler
3. Update `PetRegistrationPage.tsx`: replace `hasGap` references with `status`, add legend, replace filter control, add per-pet match display
4. Update `usePetRegistration.ts` type to match new shape
5. No data migration needed — purely a computation change on already-fetched data
