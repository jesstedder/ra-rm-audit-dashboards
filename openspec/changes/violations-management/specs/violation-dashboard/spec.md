## ADDED Requirements

### Requirement: Open violations fetched with current stage
The worker SHALL expose `GET /api/violations` returning all non-closed violations for the property with the current stage embedded (ViolationStages embed, including StageNumber, IsCommunicationSent, DueDate, ConcurrencyID, IsCurrentStage). The response SHALL be cached under cache key `rm-violations` with a 300-second TTL. `bustCache` SHALL include `rm-violations`.

#### Scenario: Violations returned
- **WHEN** `GET /api/violations` is called
- **THEN** all open (IsClosed = false) violations for the property are returned with embedded current stage data

#### Scenario: Cache hit
- **WHEN** violations have been fetched within the last 300 seconds
- **THEN** the cached response is returned without calling RM

---

### Requirement: Tenant-rollup view
The dashboard SHALL display one row per tenant who has any open violations. Each row SHALL show: tenant name, lot/unit, total open violation count, the stage label(s) of their violations, the earliest due date across their open stages, and a link to the tenant's record in RM. Tenants with no open violations SHALL NOT appear.

#### Scenario: Tenant with violations shown
- **WHEN** a tenant has one or more open violations
- **THEN** they appear in the dashboard with their violation count and stage summary

#### Scenario: Tenant with no violations absent
- **WHEN** a tenant has no open violations
- **THEN** they do not appear in the dashboard

---

### Requirement: Summary counts
The dashboard SHALL display a summary header with aggregate counts:
- Total tenants currently in violation
- Count with at least one violation needing notice (Stage 1, IsCommunicationSent = false)
- Count with all violations noticed and pending compliance (Stage 1, IsCommunicationSent = true)
- Count with any escalated violation (StageNumber ≥ 2)
- Count flagged for review (violations at multiple distinct stage numbers simultaneously)

#### Scenario: Summary reflects current data
- **WHEN** the dashboard loads
- **THEN** all summary counts are derived from the same fetched violations data (no separate request)

---

### Requirement: Multi-stage flag
A tenant SHALL be flagged for review when they have open violations at more than one distinct StageNumber simultaneously (e.g., one Stage 1 and one Stage 2 violation). The flag SHALL be visually distinct (warning badge or icon) in the tenant row and counted in the summary.

#### Scenario: Multi-stage tenant flagged
- **WHEN** a tenant has open violations at Stage 1 and Stage 2
- **THEN** their row displays a warning flag and they are included in the "flagged for review" count

#### Scenario: Single-stage tenant not flagged
- **WHEN** all of a tenant's open violations are at the same stage number
- **THEN** no flag is shown for that tenant

---

### Requirement: Stage badge per tenant row
Each tenant row SHALL display a badge (or badges) indicating the stage(s) of their open violations. If all violations are at the same stage, one badge is shown. If multiple stages, each distinct stage is shown. Badge styling SHALL use Verdant Estate palette variants appropriate to severity (Stage 1 = secondary/neutral, Stage 2+ = harvest/amber escalation).

#### Scenario: Single stage badge
- **WHEN** tenant has two violations both at Stage 1
- **THEN** one "Stage 1" badge is shown

#### Scenario: Multiple stage badges
- **WHEN** tenant has violations at Stage 1 and Stage 2
- **THEN** both a "Stage 1" badge and a "Stage 2" badge are shown

---

### Requirement: RM tenant link
Each tenant row SHALL include a direct link to the tenant record in RM using the pattern from `config.rm.webUrl`. Clicking it SHALL open in a new tab.

#### Scenario: Tenant link navigates to RM
- **WHEN** user clicks the RM link in a tenant row
- **THEN** the RM tenant detail page opens in a new browser tab

---

### Requirement: Mark as Notified entry point
Each tenant row SHALL include a "Mark as Notified" action that navigates to the notify workflow pre-scoped to that tenant's violations.

#### Scenario: Mark as Notified from dashboard
- **WHEN** user clicks "Mark as Notified" on a tenant row
- **THEN** the notify workflow opens with that tenant's uncommunicated violations pre-selected
