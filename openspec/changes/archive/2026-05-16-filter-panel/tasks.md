## 1. FilterPanel Component

- [x] 1.1 Create `src/web/src/components/FilterPanel.tsx` with props interface: `open`, `onToggle`, `hasActiveFilters`, `activeChips` (array of `{label, onRemove}`), `onClearAll`, `children` (the filter controls)
- [x] 1.2 Implement the control bar row: "Filters" toggle button (outline at rest, amber when `hasActiveFilters`), chevron `▾`/`▴` toggling with `open`, active chip list, row-count slot (via a prop or sibling layout in the page)
- [x] 1.3 Implement dismissible chips: small badge-sized elements with label and `×` button, using `--color-straw`/`--color-earth` colors; clicking `×` calls `onRemove`
- [x] 1.4 Implement the sliding panel: `max-height: 0` → `max-height: 300px`, `overflow: hidden`, CSS `transition` on `max-height` and `opacity`; panel background `--color-field`, top border `--color-straw`
- [x] 1.5 Add "Clear all" link inside the panel, visible only when `hasActiveFilters`; clicking calls `onClearAll`

## 2. Pet Fee Audit — Filter State

- [x] 2.1 Add `statusFilter` state to `PetFeeAuditPage`: `'all' | 'Current' | 'Past'`, defaulting to `'all'`
- [x] 2.2 Add `filterOpen` boolean state to `PetFeeAuditPage`, defaulting to `false`
- [x] 2.3 Wire status column filter: add `filterFn` to the `status` column definition that returns `true` when `statusFilter === 'all'` or value matches; call `table.getColumn('status')?.setFilterValue(statusFilter)` when `statusFilter` changes (via `useEffect`)

## 3. Pet Fee Audit — Control Bar & Panel

- [x] 3.1 Replace the existing bare `<input>` + count row in `PetFeeAuditPage` with the `FilterPanel` component; pass `open`, `onToggle`, `hasActiveFilters`, `activeChips`, and `onClearAll`
- [x] 3.2 Compute `hasActiveFilters`: true when `globalFilter !== ''` or `statusFilter !== 'all'`
- [x] 3.3 Compute `activeChips` array: include a name chip (label = truncated `globalFilter`, onRemove clears `globalFilter`) when name filter is set; include a status chip (label = `statusFilter`, onRemove resets to `'all'`) when status filter is set
- [x] 3.4 Implement `onClearAll`: resets both `globalFilter` to `''` and `statusFilter` to `'all'`
- [x] 3.5 Move the row count (`N of M tenants`) to the right side of the `FilterPanel` control bar (pass as a prop or render alongside)

## 4. Pet Fee Audit — Filter Panel Contents

- [x] 4.1 Inside the `FilterPanel` children, render the tenant name text input (same styling as before: `--color-ivory` bg, `--color-straw` border, amber focus border)
- [x] 4.2 Render the status segmented control: three buttons — "All", "Current", "Past" — styled as a pill group; active segment uses `--color-sidebar-active` bg with `--color-sidebar-brand` text (or amber outline), inactive uses `--color-ivory`

## 5. Verification

- [x] 5.1 Run `npm run build` — confirm no TypeScript or build errors
- [ ] 5.2 In browser: confirm panel is collapsed by default and table shows all rows
- [ ] 5.3 Click "Filters" — confirm panel slides open smoothly
- [ ] 5.4 Type a name — confirm name chip appears in control bar; clicking `×` clears it; table re-filters without reopening panel
- [ ] 5.5 Select "Current" — confirm status chip appears; rows narrow to Current tenants; both filters active simultaneously work (AND logic)
- [ ] 5.6 Click "Clear all" — confirm both filters reset and all rows reappear
- [ ] 5.7 Confirm "Filters" button shows amber styling when any filter is active, neutral styling when none are active
