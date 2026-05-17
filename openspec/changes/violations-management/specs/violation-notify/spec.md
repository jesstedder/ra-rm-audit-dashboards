## ADDED Requirements

### Requirement: Tenant-scoped violation selection
The notify workflow SHALL display all open, uncommunicated violations (IsCommunicationSent = false) for a selected tenant, grouped by tenant. All violations for the tenant SHALL be pre-selected by default. The user MAY deselect individual violations before confirming. There SHALL be a "Select All" / "Deselect All" toggle per tenant group. At least one violation SHALL be selected to proceed.

#### Scenario: Pre-selected on open from dashboard
- **WHEN** user opens the notify workflow from a tenant's dashboard row
- **THEN** all uncommunicated violations for that tenant are pre-selected

#### Scenario: Individual deselect
- **WHEN** user unchecks a specific violation
- **THEN** that violation is excluded from the notification batch while others remain selected

#### Scenario: No violations selected
- **WHEN** user deselects all violations
- **THEN** the confirm button is disabled

---

### Requirement: Violation row display
Each violation row in the notify workflow SHALL display: violation date, violation code name, description (if present), and current stage number. This gives the user enough context to verify the selection before confirming.

#### Scenario: Violation details visible
- **WHEN** the notify workflow is displayed
- **THEN** each violation row shows date, code name, and stage number

---

### Requirement: Confirmation step
Before marking violations as communicated, the workflow SHALL present a confirmation prompt summarizing: tenant name, count of violations being marked, and a list of violation codes. The user SHALL explicitly confirm before the API calls are made.

#### Scenario: Confirmation shown
- **WHEN** user clicks "Mark as Notified"
- **THEN** a confirmation dialog or inline summary is shown with the count and violation codes before any write occurs

#### Scenario: User cancels
- **WHEN** user dismisses the confirmation
- **THEN** no changes are made to RM and the selection state is preserved

---

### Requirement: Batch notify worker endpoint
The worker SHALL expose `POST /api/violations/notify` accepting an array of `{ violationId, stageId, concurrencyId }` objects. For each, it SHALL call RM's ViolationStages save endpoint with `IsCommunicationSent: true` and the provided `ConcurrencyID`. All stage updates SHALL be issued in parallel (Promise.all). On completion, the worker SHALL bust the `rm-violations` cache key and return a per-violation result indicating success or failure for each.

#### Scenario: All stages marked successfully
- **WHEN** all RM stage update calls succeed
- **THEN** the endpoint returns success for each violation and busts the cache

#### Scenario: Partial failure
- **WHEN** one or more RM stage update calls fail
- **THEN** the endpoint returns a partial-success response identifying which violations were marked and which failed; the cache is still busted for successfully marked violations

---

### Requirement: Post-notify feedback
After the notify API call completes, the UI SHALL show a success or partial-success message. Successfully marked violations SHALL be visually indicated (e.g., check mark, grayed out). If any failed, the failed violations SHALL remain selected and actionable for retry.

#### Scenario: All succeeded
- **WHEN** all selected violations are successfully marked
- **THEN** a success message is shown and the violations are marked as communicated in the UI

#### Scenario: Some failed
- **WHEN** some violations fail to mark
- **THEN** failed violations remain highlighted with an error state; a retry action is available; successfully marked ones are shown as done

---

### Requirement: Back-fill support
The notify workflow SHALL display ALL uncommunicated violations regardless of their violation date (no recency filter). This allows marking violations for letters already mailed in the past that were never marked in RM.

#### Scenario: Old violation visible
- **WHEN** a violation was created weeks ago and IsCommunicationSent is still false
- **THEN** it appears in the notify workflow and can be selected for marking
