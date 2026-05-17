## 1. API — Update RegistrationCheckRow and status computation

- [x] 1.1 In `src/worker/index.ts`, update the `RegistrationCheckRow` interface: add `status: 'no_record' | 'rm_only' | 'gap' | 'mismatched' | 'matched'` and remove `hasGap: boolean`
- [x] 1.2 Add a `fuzzyNameMatch(a: string, b: string): boolean` helper in `src/worker/index.ts` (or a small utility file): normalize both to lowercase alphanumeric, return true if equal or one contains the other
- [x] 1.3 Update the `/api/pets/registration-check` handler to compute `status` per the five-rule taxonomy using `fuzzyNameMatch`; remove the `hasGap` field from the pushed row object

## 2. Frontend — Type and hook update

- [x] 2.1 Update the `RegistrationCheckRow` type in `src/web/src/features/petscreening/usePetRegistration.ts`: add `status` field, remove `hasGap`

## 3. Frontend — Status filter

- [x] 3.1 Replace the `GapFilter = 'all' | 'gaps'` type in `PetRegistrationPage.tsx` with a set-based status filter: `selectedStatuses: Set<string>` initialized to all five values
- [x] 3.2 Replace the "All units / Gaps only" segmented control in the filter panel with a row of five status checkboxes (No Record, RM Only, Gap, Mismatch, Matched); each toggles its status in/out of `selectedStatuses`
- [x] 3.3 Update the `filtered` useMemo to filter rows by `selectedStatuses.has(row.status)` instead of the old gap check
- [x] 3.4 Update the active filter chips: when fewer than all five statuses are selected, show a chip per selected status with a remove handler; add a "Clear" chip when any filter is active
- [x] 3.5 Update the `hasActiveFilters` check to include the status filter state

## 4. Frontend — Status chip display

- [x] 4.1 Update the Status column cell renderer to use the five-state `row.status` value instead of `hasGap`; apply chips: `no_record` → secondary "No Record", `rm_only` → harvest "RM Only", `gap` → harvest "⚠ Gap", `mismatched` → harvest "⚠ Mismatch", `matched` → pasture "✓ Matched"

## 5. Frontend — Fuzzy match highlight in PS Pets / RM Pets columns

- [x] 5.1 Add a `fuzzyMatch(a: string, b: string): boolean` utility in the component file (same algorithm as server: lowercase alphanumeric, equal or contains)
- [x] 5.2 Update the PS Pets column cell renderer: for rows with `status === 'mismatched'`, check each PS pet name against all RM pet names; render unmatched PS pet names with amber/warning styling (e.g. amber color + "⚠" prefix)
- [x] 5.3 Update the RM Pets column cell renderer: for rows with `status === 'mismatched'`, check each RM pet name against all PS pet names; render unmatched RM pet names with the same warning styling

## 6. Frontend — Status legend

- [x] 6.1 Add a `StatusLegend` component (inline in `PetRegistrationPage.tsx`) that renders a compact five-row table: Status chip | Meaning | Implied action (using the descriptions from the spec)
- [x] 6.2 Render `StatusLegend` above the filter panel; it should be visible at all times (not collapsible) — it is small enough to always show

## 7. Verification

- [x] 7.1 Confirm the API response no longer includes `hasGap` and includes `status` with correct values by checking a known gap unit and a known matched unit in the browser devtools network tab
- [x] 7.2 Confirm each status chip variant appears correctly in the table
- [x] 7.3 Test the status filter: select only "Gap" — verify only gap rows show; select "Gap + Mismatch" — verify both show; clear all — verify all rows return
- [x] 7.4 If any units have both PS and RM pets with different names, confirm the mismatch highlight appears on the unmatched pet names
- [x] 7.5 Confirm the status legend renders above the filter panel with correct descriptions

