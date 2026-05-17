## ADDED Requirements

### Requirement: Pet fee audit status filter
The pet fee audit grid filter panel SHALL include a status filter in addition to the tenant name text search. The status filter is a three-state segmented control: All (default), Current, Past. Selecting Current or Past narrows the grid to rows matching that status value and produces a dismissible chip in the control bar. Selecting All clears the status filter.

#### Scenario: Filtering by Current status
- **WHEN** the user selects "Current" in the status filter control
- **THEN** only rows with `status === "Current"` are shown and a "Current" chip appears in the control bar

#### Scenario: Filtering by Past status
- **WHEN** the user selects "Past" in the status filter control
- **THEN** only rows with `status === "Past"` are shown and a "Past" chip appears in the control bar

#### Scenario: Clearing status filter via chip
- **WHEN** the user clicks `×` on the status chip in the control bar
- **THEN** the status filter resets to All and the grid shows all status values

#### Scenario: Combining name and status filters
- **WHEN** both a tenant name search and a status filter are active simultaneously
- **THEN** the grid shows only rows that match both conditions (AND logic)

### Requirement: FilterPanel reusable component
A `FilterPanel` component SHALL exist at `src/web/src/components/FilterPanel.tsx`. It SHALL accept filter state and callbacks as props and render: the Filters toggle button (with chevron and amber active styling), the active chip bar, the sliding panel container, and a "Clear all" link when filters are active. Individual grid pages own their filter state and pass it in as props.

#### Scenario: FilterPanel renders with no active filters
- **WHEN** `FilterPanel` is rendered with no active filter values
- **THEN** the toggle button shows neutral outline styling and no chips are rendered

#### Scenario: FilterPanel renders with active filters
- **WHEN** `FilterPanel` is rendered with one or more active filter values
- **THEN** the toggle button shows amber styling and the active chips are rendered in the control bar
