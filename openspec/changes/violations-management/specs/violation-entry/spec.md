## ADDED Requirements

### Requirement: Tenant selection
The entry form SHALL provide a searchable dropdown of current tenants (Status = "Current") to select the tenant being cited. The tenant list SHALL be sourced from the existing RM tenants data. Selecting a tenant SHALL resolve their active unit via the lease mapping.

#### Scenario: Tenant selected
- **WHEN** user types in the tenant search field
- **THEN** the list filters to matching current tenants by name and the user can select one

#### Scenario: No active unit found
- **WHEN** a selected tenant has no active unit in the lease mapping
- **THEN** the form SHALL display an error and prevent submission for that tenant

---

### Requirement: Shared violation date
The form SHALL display a single date field that applies as the `ViolationDate` for all violations in the session. It SHALL default to today's date. The user MAY change it before submitting.

#### Scenario: Default date
- **WHEN** the entry form is opened
- **THEN** the violation date field SHALL default to today's date

#### Scenario: Date overridden
- **WHEN** user changes the shared date field
- **THEN** all violations in the current session SHALL use the new date on submission

---

### Requirement: Multiple violations per session
The form SHALL allow adding one or more violation rows in a single session. Each row is an independent violation. There SHALL be an "Add Another Violation" control to append a new blank row. Each row SHALL have a remove control. There SHALL be at least one row at all times.

#### Scenario: Add second violation
- **WHEN** user clicks "Add Another Violation"
- **THEN** a new blank violation row is appended below the existing rows

#### Scenario: Remove a violation row
- **WHEN** user clicks the remove control on a row
- **THEN** that row is removed, provided at least one row remains

---

### Requirement: Violation code selection with search
Each violation row SHALL have a searchable combobox for selecting a violation code. The combobox SHALL filter the list of 50+ codes by typing. Codes SHALL be loaded from `GET /api/violation-codes` on form mount and cached for the session. The displayed label SHALL include both the code identifier and its description.

#### Scenario: Code search
- **WHEN** user types in the code combobox
- **THEN** the dropdown filters to codes whose name or description contains the typed text (case-insensitive)

#### Scenario: Code required
- **WHEN** user attempts to submit with a violation row that has no code selected
- **THEN** submission is blocked and the row is highlighted as invalid

---

### Requirement: Resolve action with auto-fill
Each violation row SHALL have a resolve action text field. When a violation code is selected, the field SHALL auto-populate with that code's `ResolveAction` default from the RM ViolationCode record. The user MAY edit the pre-filled value. The field SHALL offer autocomplete suggestions drawn from resolve action strings on past violations fetched from RM.

#### Scenario: Code selected auto-fills resolve action
- **WHEN** user selects a violation code
- **THEN** the resolve action field is populated with the code's default ResolveAction value

#### Scenario: User overrides resolve action
- **WHEN** user edits the resolve action field after auto-fill
- **THEN** the edited value (not the code default) is submitted to RM

#### Scenario: Autocomplete from history
- **WHEN** user focuses the resolve action field
- **THEN** past resolve action strings from RM violations appear as autocomplete suggestions

---

### Requirement: Single image upload per violation
Each violation row SHALL have an optional image upload control. The user MAY attach one image file (JPEG or PNG). If an image is attached, it SHALL be uploaded to RM's image endpoint before the violation is created, and the returned `ImageID` SHALL be included in the violation POST body. If no image is attached, the violation is submitted without an `ImageID`.

#### Scenario: Image attached and submitted
- **WHEN** user attaches an image to a violation row and submits
- **THEN** the image is uploaded first, and the resulting ImageID is included in the violation creation payload

#### Scenario: Image upload fails
- **WHEN** an image upload fails during submission
- **THEN** the specific violation's row is flagged with an error; other violations without images proceed; the form does not silently discard the failure

#### Scenario: No image
- **WHEN** user submits a violation row with no image attached
- **THEN** the violation is created without an ImageID

---

### Requirement: Batch submission
On submit, all violation rows SHALL be sent to RM as a single `POST /Violations` request (array body). The worker endpoint SHALL resolve TenantID → UnitID via the lease mapping server-side before forwarding to RM. Submission SHALL be blocked if any row is missing a required field (violation code).

#### Scenario: Successful batch submit
- **WHEN** user clicks Submit with all rows valid
- **THEN** all violations are created in RM in one request, a success message is shown, and the form resets to a blank single-row state

#### Scenario: Partial failure
- **WHEN** RM returns an error for the batch
- **THEN** the form displays the RM error message and does not reset, allowing the user to correct and resubmit

#### Scenario: Submission blocked on invalid row
- **WHEN** any violation row is missing a required field
- **THEN** the Submit button is disabled or submission is prevented with inline validation errors

---

### Requirement: Violation codes worker endpoint
The worker SHALL expose `GET /api/violation-codes` returning the list of RM violation codes (ViolationCodeID, Code, Description, ResolveAction). The response SHALL be cached with a 1-hour TTL under cache key `rm-violation-codes`. The existing `bustCache` function SHALL include `rm-violation-codes`.

#### Scenario: Codes returned from cache
- **WHEN** violation codes have been fetched within the last hour
- **THEN** `GET /api/violation-codes` returns the cached list without calling RM

#### Scenario: Cache busted
- **WHEN** `POST /api/cache/refresh` is called
- **THEN** the `rm-violation-codes` cache entry is also invalidated

---

### Requirement: Violations create worker endpoint
The worker SHALL expose `POST /api/violations` accepting an array of violation objects (TenantID, ViolationCodeID, ViolationDate, ResolveAction, optional ImageID). The worker SHALL derive UnitID and PropertyID (from config) before forwarding to RM. On success it SHALL bust the `rm-violations` cache key and return the created violation IDs.

#### Scenario: Violations created
- **WHEN** a valid array of violations is POSTed
- **THEN** the worker creates them in RM and returns the new ViolationIDs

#### Scenario: RM error forwarded
- **WHEN** RM returns a 4xx or 5xx error
- **THEN** the worker returns a 502 with the RM error detail
