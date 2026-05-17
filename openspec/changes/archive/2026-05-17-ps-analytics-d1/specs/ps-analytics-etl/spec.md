## ADDED Requirements

### Requirement: D1 analytics schema

The system SHALL create a Cloudflare D1 database named `ps-analytics` with binding `PS_ANALYTICS_DB` and the following tables, applied via a migration file at `migrations/0001_analytics_schema.sql`:

```sql
sync_log (sync_id PK, synced_at, snapshot_date, ps_profile_count,
          rm_unit_count, rm_tenant_count, rm_pet_count, status, error_message)

ps_profile_snapshots (snapshot_date + ps_id PK, name, species, kind, status,
                      paw_score, score, assistance_type, archived, archive_reason,
                      public_token, owner_name, unit_number, created_at, shared_at)

ps_highlight_snapshots (snapshot_date + ps_id + label PK)

ps_missing_fields_snapshots (snapshot_date + ps_id + field_name PK)

rm_snapshots (snapshot_date + unit_id + tenant_id + pet_id PK,
              unit_name, tenant_name, tenant_status, move_in_date, move_out_date,
              pet_name, pet_species, pet_breed)
```

Indexes SHALL be created on `snapshot_date` for all tables and on `(snapshot_date, ps_id)` for `ps_highlight_snapshots` and `ps_missing_fields_snapshots`.

#### Scenario: Migration applied
- **WHEN** `wrangler d1 execute ps-analytics --file=migrations/0001_analytics_schema.sql` is run
- **THEN** all five tables and their indexes exist in the D1 database

---

### Requirement: Daily cron ETL worker

The Worker SHALL handle a `scheduled` event (Cloudflare Cron Trigger) configured at `"0 8 * * *"` in `wrangler.toml`. The handler SHALL:
1. Compute `snapshot_date` as the current UTC date (`YYYY-MM-DD`)
2. Fetch all PS profiles (all paginated pages) via the existing PS client
3. Fetch RM units, tenants, and pets via the existing RM client
4. Upsert all rows into D1 using `INSERT OR REPLACE INTO`
5. Write a `sync_log` row with counts and `status = 'ok'`
6. Bust the CF cache keys `rm-data`, `ps-profiles`, and `pet-fee-audit`

#### Scenario: Successful sync
- **WHEN** the cron fires at 8am UTC
- **THEN** all PS profiles and RM data are upserted into D1 and a sync_log row with `status = 'ok'` is written

#### Scenario: Idempotent re-run
- **WHEN** the cron fires twice on the same UTC date
- **THEN** the second run replaces the first day's rows; no duplicate rows exist; sync_log has two rows for that date

#### Scenario: ETL error
- **WHEN** either the PS or RM API returns an error during the cron run
- **THEN** a sync_log row with `status = 'error'` and the error message is written; the worker does not throw (cron completes without retry loop)

---

### Requirement: PS profile snapshot includes all available fields

The ETL SHALL capture all available PS fields per profile including fields not used by existing endpoints: `score` (fractional), `shared_at`, `created_at`, `assistance_type`, `archived`, `archive_reason`, highlights array (each label as a row in `ps_highlight_snapshots`), and `missing_required_fields` (each field name as a row in `ps_missing_fields_snapshots`).

#### Scenario: Profile with highlights
- **WHEN** a PS profile has `screening_info.highlights = ["Breed", "Weight"]`
- **THEN** two rows are inserted into `ps_highlight_snapshots` for that profile with labels "Breed" and "Weight"

#### Scenario: Profile with no highlights
- **WHEN** a PS profile has an empty highlights array
- **THEN** no rows are inserted into `ps_highlight_snapshots` for that profile on that date

#### Scenario: Profile with no unit
- **WHEN** a PS profile has no `property_manager.unit`
- **THEN** `unit_number` is stored as NULL; the profile row is still inserted into `ps_profile_snapshots`
