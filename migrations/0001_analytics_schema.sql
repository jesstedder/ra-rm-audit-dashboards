CREATE TABLE IF NOT EXISTS sync_log (
  sync_id INTEGER PRIMARY KEY AUTOINCREMENT,
  synced_at TEXT NOT NULL,
  snapshot_date TEXT NOT NULL,
  ps_profile_count INTEGER NOT NULL DEFAULT 0,
  rm_unit_count INTEGER NOT NULL DEFAULT 0,
  rm_tenant_count INTEGER NOT NULL DEFAULT 0,
  rm_pet_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'ok',
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_sync_log_snapshot_date ON sync_log (snapshot_date);
CREATE INDEX IF NOT EXISTS idx_sync_log_status ON sync_log (status);

CREATE TABLE IF NOT EXISTS ps_profile_snapshots (
  snapshot_date TEXT NOT NULL,
  ps_id INTEGER NOT NULL,
  name TEXT,
  species TEXT,
  kind TEXT,
  status TEXT,
  paw_score INTEGER,
  score REAL,
  assistance_type TEXT,
  archived INTEGER NOT NULL DEFAULT 0,
  archive_reason TEXT,
  public_token TEXT,
  owner_name TEXT,
  unit_number TEXT,
  created_at TEXT,
  shared_at TEXT,
  PRIMARY KEY (snapshot_date, ps_id)
);

CREATE INDEX IF NOT EXISTS idx_ps_profile_snapshot_date ON ps_profile_snapshots (snapshot_date);
CREATE INDEX IF NOT EXISTS idx_ps_profile_unit ON ps_profile_snapshots (snapshot_date, unit_number);

CREATE TABLE IF NOT EXISTS ps_highlight_snapshots (
  snapshot_date TEXT NOT NULL,
  ps_id INTEGER NOT NULL,
  label TEXT NOT NULL,
  PRIMARY KEY (snapshot_date, ps_id, label)
);

CREATE INDEX IF NOT EXISTS idx_ps_highlight_snapshot_date ON ps_highlight_snapshots (snapshot_date);
CREATE INDEX IF NOT EXISTS idx_ps_highlight_date_id ON ps_highlight_snapshots (snapshot_date, ps_id);

CREATE TABLE IF NOT EXISTS ps_missing_fields_snapshots (
  snapshot_date TEXT NOT NULL,
  ps_id INTEGER NOT NULL,
  field_name TEXT NOT NULL,
  PRIMARY KEY (snapshot_date, ps_id, field_name)
);

CREATE INDEX IF NOT EXISTS idx_ps_missing_snapshot_date ON ps_missing_fields_snapshots (snapshot_date);
CREATE INDEX IF NOT EXISTS idx_ps_missing_date_id ON ps_missing_fields_snapshots (snapshot_date, ps_id);

-- One row per (unit × tenant × pet) per day.
-- tenant_id = 0 means unit has no tenant; pet_id = 0 means tenant has no pet.
CREATE TABLE IF NOT EXISTS rm_snapshots (
  snapshot_date TEXT NOT NULL,
  unit_id INTEGER NOT NULL,
  unit_name TEXT NOT NULL,
  tenant_id INTEGER NOT NULL DEFAULT 0,
  tenant_name TEXT,
  tenant_status TEXT,
  move_in_date TEXT,
  move_out_date TEXT,
  pet_id INTEGER NOT NULL DEFAULT 0,
  pet_name TEXT,
  pet_breed TEXT,
  pet_type_id INTEGER,
  PRIMARY KEY (snapshot_date, unit_id, tenant_id, pet_id)
);

CREATE INDEX IF NOT EXISTS idx_rm_snapshot_date ON rm_snapshots (snapshot_date);
CREATE INDEX IF NOT EXISTS idx_rm_snapshot_unit_name ON rm_snapshots (snapshot_date, unit_name);
