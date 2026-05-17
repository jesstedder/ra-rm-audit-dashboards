## Context

The dashboard currently fetches PS and RM data on-demand with a 5-minute CF Cache layer. That cache is ephemeral — no history, no aggregate queries, no ability to answer "how has the pet population changed over time?" PetScreening's own reporting UI can't answer these questions either.

The system is a Cloudflare Worker (Hono) with a React frontend. There is no D1 binding today; the only storage primitives in use are the CF Cache API (5-min TTL) and Worker secrets/env vars. The PS client uses session auth with CSRF; the RM client uses module-level token caching to prevent concurrent auth.

Current data volumes: 215 PS profiles across 8 API pages, ~50 RM units.

## Goals / Non-Goals

**Goals:**
- Persist daily snapshots of PS + RM data in Cloudflare D1
- Support aggregate GROUP BY queries via a structured, safe query spec (no raw SQL from the client)
- View builder UI: choose dimensions, measures, filters, point-in-time vs trend mode
- Highlights normalized as a separate table so each flag label is a groupBy dimension

**Non-Goals:**
- Backfilling history before the first cron run (day 1 has one day of data; that's fine)
- Raw SQL editor in the UI
- Real-time data (daily cadence is sufficient)
- Write-back to PS or RM APIs
- Replacing the existing CF cache layer for the real-time endpoints (registration-check, pet-fee-audit remain cache-backed)

## Decisions

### 1. Full daily snapshots vs change-event log

**Decision**: Full daily snapshots — one row per entity per day across all tables.

Every day the cron inserts a complete copy of all PS profiles and RM data keyed by `snapshot_date`. At current scale (~2,500 rows/day), a full year is under 1M rows total. This makes point-in-time queries trivial (`WHERE snapshot_date = ?`) and requires no state reconstruction logic. Change events would be more storage-efficient but require complex CTEs to reconstruct state at a given date.

### 2. D1 (SQLite) for analytics storage

**Decision**: D1 over KV, R2, or external Postgres.

D1 is the only CF-native storage that supports SQL GROUP BY, aggregates, and multi-table joins — exactly what the view builder needs. KV would require client-side aggregation. R2 would require a separate query engine. D1 is the right tool: it's SQLite, it's fast for read-heavy analytical queries at this scale, and it's already available within the Worker runtime.

### 3. Structured query spec vs raw SQL from client

**Decision**: The `POST /api/analytics/query` endpoint accepts a typed spec object `{ snapshotDate, groupBy[], measures[], filters{}, dateRange? }`. The worker validates dimensions/measures against a known allowlist, then constructs parameterized SQL. No user-supplied string ever reaches the SQL.

This is necessary for security (SQL injection prevention) and is tractable because the dimension/measure set is finite and known. The allowlist is defined server-side and versioned with the code.

### 4. Highlights as a separate normalized table

**Decision**: `ps_highlight_snapshots (snapshot_date, ps_id, label)` — one row per flagged highlight per profile per day. Presence = flagged; absence = not flagged.

This enables `GROUP BY label` directly in SQL without JSON parsing. The 10 known highlight labels produce at most ~2,150 rows/day (215 profiles × 10 labels, though most profiles have 2–4 flags). Querying "not flagged" uses a LEFT JOIN + `WHERE h.label IS NULL` pattern.

Alternative considered: store highlights as a JSON column and use SQLite's `JSON_EACH()`. Rejected because D1's JSON function support is limited and GROUP BY on JSON array elements is awkward.

### 5. Cron trigger in wrangler.toml

**Decision**: Cloudflare Cron Triggers (`[triggers] crons = ["0 8 * * *"]`) running the same Worker. The scheduled handler receives a `ScheduledEvent` and branches on `event.scheduledTime`.

No external scheduler needed. The cron runs in a fresh Worker isolate (module-level state is empty, including RM token cache). The existing re-auth logic handles this: RM token is fetched fresh, PS session is re-established. The cron also busts the CF cache after writing to D1, so the real-time endpoints pick up fresh data without waiting for the 5-minute TTL.

### 6. Chart library for trend view

**Decision**: Implement a minimal SVG bar chart component directly (no new dependency).

The trend view needs a simple bar chart (one bar per time bucket, one series per groupBy value). This is achievable in ~100 lines of React + SVG. Adding Recharts or Chart.js for this use case would add significant bundle weight to a Worker-served asset. If requirements grow more complex, migrate to a library at that point.

### 7. ETL upsert strategy

**Decision**: `INSERT OR REPLACE INTO` (SQLite REPLACE semantics) on all snapshot tables. The primary key on every table includes `snapshot_date`, so re-running the cron on the same day is idempotent — it replaces that day's rows cleanly.

## Risks / Trade-offs

**PS auth session during multi-page ETL** → The existing re-auth-on-401 logic in the PS client handles mid-session expiry. The ETL fetches ~8 pages sequentially; if the session expires between pages, it re-authenticates and retries. Risk: low.

**D1 write volume** → At ~2,500 rows/day we are well within D1's free-tier write limit (100k/day). Even at 10× growth, we stay in free tier. Risk: negligible.

**Cross-isolate RM auth collision** → The module-level RM token Promise cache deduplicate auth within an isolate, but the cron runs in a separate isolate from live request handlers. Both could call `fetchToken` concurrently. The RM token is valid for ~30 minutes; overlap is a few seconds. Worst case: two auth requests fire simultaneously; the second one sees "already logged in" and the module-level cache discards the failed promise (existing behavior). Risk: low, known.

**D1 query timeout on complex joins** → The view builder could generate joins across 3–4 tables with GROUP BY on a highlight dimension. Add indexes on `(snapshot_date)` and `(snapshot_date, ps_id)` on all tables. At <1M rows total, queries should complete well within D1's 30-second timeout. Risk: low.

**Highlight label set expanding** → New PS highlight labels would appear in `ps_highlight_snapshots` automatically (INSERT OR REPLACE). The `GET /api/analytics/dimensions` endpoint reads distinct labels from the DB, so new labels surface in the UI without code changes. Risk: none.

## Migration Plan

1. **Manual prerequisite**: `wrangler d1 create ps-analytics` → copy the returned database ID
2. Add `[[d1_databases]]` binding to `wrangler.toml` with that ID and binding name `PS_ANALYTICS_DB`
3. Apply D1 migration: `wrangler d1 execute ps-analytics --file=migrations/0001_analytics_schema.sql`
4. Add `[triggers] crons = ["0 8 * * *"]` to `wrangler.toml`
5. Deploy: `npm run deploy`
6. Verify: `wrangler tail` — confirm scheduled event fires and sync_log row appears in D1
7. Rollback: remove the cron trigger and D1 binding from wrangler.toml; D1 data is retained but not written to

## Open Questions

- Should the cron also explicitly bust the CF cache entries (`rm-data`, `ps-profiles`, `pet-fee-audit`) after writing to D1? Probably yes — the cron has just fetched fresh data, so busting lets the real-time endpoints serve fresh results on next request without waiting for TTL expiry. Recommend: yes, add `bustCache(...)` at end of cron handler.
