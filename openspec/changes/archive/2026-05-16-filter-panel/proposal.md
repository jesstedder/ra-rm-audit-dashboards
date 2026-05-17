## Why

The dashboard-grids global spec requires all grids to have a collapsible filter panel, but the current pet fee audit uses a bare text input that doesn't satisfy that requirement and won't scale as more filter types are added. This change implements the filter panel pattern on the pet fee audit grid and establishes the reusable component for all future grids.

## What Changes

- Replace the bare text input above the pet fee audit table with a full filter panel control bar
- Add a `FilterPanel` reusable component at `src/web/src/components/FilterPanel.tsx` that encapsulates the toggle button, active chips, expanded panel, and clear-all behavior
- Pet fee audit panel exposes two filters: tenant name (text) and status (Current / Past / All)
- Active filter chips appear in the control bar when the panel is collapsed, each dismissible individually
- "Filters" button uses amber styling when any filter is active
- Smooth CSS height transition on panel open/close
- "Clear all" link inside the expanded panel

## Capabilities

### New Capabilities

<!-- none — this change implements an existing global spec requirement, not a new capability -->

### Modified Capabilities

- `dashboard-grids`: The pet fee audit grid now satisfies the collapsible filter panel requirement defined in this spec. No requirement text changes — this is implementation of existing requirements.

## Impact

- **New component**: `src/web/src/components/FilterPanel.tsx` — reusable across all future grid pages
- **Modified**: `src/web/src/features/audits/PetFeeAuditPage.tsx` — control bar replaced, filter state expanded to include status
- No API changes, no new dependencies (CSS transitions only, no animation library needed)
- Row count display moves from the old filter bar to the new control bar
