import { getAllPsProfiles } from '../petscreening/pets.js';
import { createClient } from '../rm/client.js';
import { getAllUnits } from '../rm/units.js';
import { getAllTenants } from '../rm/tenants.js';
import { getAllLeases } from '../rm/leases.js';
import { getAllPets } from '../rm/pets.js';
import { bustCache } from '../cache.js';

type D1Database = {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
};
type D1PreparedStatement = { bind(...values: unknown[]): D1PreparedStatement; run(): Promise<D1Result> };
type D1Result = { success: boolean; error?: string };

interface EtlEnv {
  RM_BASEURL: string;
  RM_USERNAME: string;
  RM_PASSWORD: string;
  RM_LOCATIONID: string;
  PETSCREENING_USERNAME: string;
  PETSCREENING_PASSWORD: string;
  PETSCREENER_PMID: string;
}

const CHUNK = 90;

function chunks<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export async function runAnalyticsEtl(env: EtlEnv, db: D1Database): Promise<void> {
  const syncedAt = new Date().toISOString();
  const snapshotDate = syncedAt.slice(0, 10); // 'YYYY-MM-DD'

  let psProfileCount = 0;
  let rmUnitCount = 0;
  let rmTenantCount = 0;
  let rmPetCount = 0;

  try {
    // Fetch PS and RM data in parallel
    const [psProfiles, rmClient] = await Promise.all([
      getAllPsProfiles(env),
      Promise.resolve(createClient({
        baseUrl: env.RM_BASEURL,
        username: env.RM_USERNAME,
        password: env.RM_PASSWORD,
        locationId: parseInt(env.RM_LOCATIONID, 10),
      })),
    ]);
    const [units, tenants, leases, pets] = await Promise.all([
      getAllUnits(rmClient),
      getAllTenants(rmClient),
      getAllLeases(rmClient),
      getAllPets(rmClient),
    ]);

    psProfileCount = psProfiles.length;
    rmUnitCount = units.length;
    rmTenantCount = tenants.length;
    rmPetCount = pets.length;

    // Clear today's highlight and missing-field rows before inserting fresh ones
    await db.batch([
      db.prepare('DELETE FROM ps_highlight_snapshots WHERE snapshot_date = ?').bind(snapshotDate),
      db.prepare('DELETE FROM ps_missing_fields_snapshots WHERE snapshot_date = ?').bind(snapshotDate),
      db.prepare('DELETE FROM rm_snapshots WHERE snapshot_date = ?').bind(snapshotDate),
    ]);

    // Upsert PS profile rows
    const profileStmts = psProfiles.map(p =>
      db.prepare(`
        INSERT OR REPLACE INTO ps_profile_snapshots
          (snapshot_date, ps_id, name, species, kind, status, paw_score, score,
           assistance_type, archived, archive_reason, public_token, owner_name,
           unit_number, created_at, shared_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `).bind(
        snapshotDate, p.id, p.name, p.species, p.kind, p.status,
        p.pawScore, p.score, p.assistanceType, p.archived ? 1 : 0,
        p.archiveReason, p.publicToken, p.ownerName, p.unitNumber,
        p.createdAt, p.sharedAt,
      )
    );
    for (const batch of chunks(profileStmts, CHUNK)) await db.batch(batch);

    // Insert highlight rows
    const highlightStmts = psProfiles.flatMap(p =>
      p.highlights.map(label =>
        db.prepare('INSERT INTO ps_highlight_snapshots (snapshot_date, ps_id, label) VALUES (?,?,?)')
          .bind(snapshotDate, p.id, label)
      )
    );
    for (const batch of chunks(highlightStmts, CHUNK)) await db.batch(batch);

    // Insert missing-field rows
    const missingStmts = psProfiles.flatMap(p =>
      p.missingRequiredFields.map(field =>
        db.prepare('INSERT INTO ps_missing_fields_snapshots (snapshot_date, ps_id, field_name) VALUES (?,?,?)')
          .bind(snapshotDate, p.id, field)
      )
    );
    if (missingStmts.length > 0) {
      for (const batch of chunks(missingStmts, CHUNK)) await db.batch(batch);
    }

    // Build RM snapshot rows — one row per (unit × tenant × pet)
    const tenantById = new Map(tenants.map(t => [t.TenantID, t]));
    const leasesByUnit = new Map<number, typeof leases>();
    for (const lease of leases) {
      const arr = leasesByUnit.get(lease.UnitID) ?? [];
      arr.push(lease);
      leasesByUnit.set(lease.UnitID, arr);
    }
    const petsByTenant = new Map<number, typeof pets>();
    for (const pet of pets) {
      const arr = petsByTenant.get(pet.TenantID) ?? [];
      arr.push(pet);
      petsByTenant.set(pet.TenantID, arr);
    }

    const rmStmts: D1PreparedStatement[] = [];
    for (const unit of units) {
      const unitLeases = leasesByUnit.get(unit.UnitID) ?? [];
      if (unitLeases.length === 0) {
        // Unit with no tenant
        rmStmts.push(
          db.prepare(`
            INSERT OR REPLACE INTO rm_snapshots
              (snapshot_date, unit_id, unit_name, tenant_id, tenant_name, tenant_status,
               move_in_date, move_out_date, pet_id, pet_name, pet_breed, pet_type_id)
            VALUES (?,?,?,0,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL)
          `).bind(snapshotDate, unit.UnitID, unit.Name)
        );
        continue;
      }
      for (const lease of unitLeases) {
        const tenant = tenantById.get(lease.TenantID);
        const tenantPets = petsByTenant.get(lease.TenantID) ?? [];
        if (tenantPets.length === 0) {
          // Tenant with no pets
          rmStmts.push(
            db.prepare(`
              INSERT OR REPLACE INTO rm_snapshots
                (snapshot_date, unit_id, unit_name, tenant_id, tenant_name, tenant_status,
                 move_in_date, move_out_date, pet_id, pet_name, pet_breed, pet_type_id)
              VALUES (?,?,?,?,?,?,?,?,0,NULL,NULL,NULL)
            `).bind(
              snapshotDate, unit.UnitID, unit.Name,
              lease.TenantID,
              tenant ? `${tenant.FirstName} ${tenant.LastName}` : null,
              tenant?.Status ?? null,
              lease.MoveInDate ?? null,
              lease.MoveOutDate ?? null,
            )
          );
        } else {
          for (const pet of tenantPets) {
            rmStmts.push(
              db.prepare(`
                INSERT OR REPLACE INTO rm_snapshots
                  (snapshot_date, unit_id, unit_name, tenant_id, tenant_name, tenant_status,
                   move_in_date, move_out_date, pet_id, pet_name, pet_breed, pet_type_id)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
              `).bind(
                snapshotDate, unit.UnitID, unit.Name,
                lease.TenantID,
                tenant ? `${tenant.FirstName} ${tenant.LastName}` : null,
                tenant?.Status ?? null,
                lease.MoveInDate ?? null,
                lease.MoveOutDate ?? null,
                pet.PetID,
                pet.Name ?? null,
                pet.Breed ?? null,
                pet.PetTypeID ?? null,
              )
            );
          }
        }
      }
    }
    for (const batch of chunks(rmStmts, CHUNK)) await db.batch(batch);

    // Write success sync_log
    await db.prepare(`
      INSERT INTO sync_log (synced_at, snapshot_date, ps_profile_count, rm_unit_count, rm_tenant_count, rm_pet_count, status)
      VALUES (?,?,?,?,?,?,'ok')
    `).bind(syncedAt, snapshotDate, psProfileCount, rmUnitCount, rmTenantCount, rmPetCount).run();

    await bustCache('rm-data', 'ps-profiles', 'pet-fee-audit');
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[analytics-etl] ETL failed:', err);
    await db.prepare(`
      INSERT INTO sync_log (synced_at, snapshot_date, ps_profile_count, rm_unit_count, rm_tenant_count, rm_pet_count, status, error_message)
      VALUES (?,?,?,?,?,?,'error',?)
    `).bind(syncedAt, snapshotDate, psProfileCount, rmUnitCount, rmTenantCount, rmPetCount, msg).run();
    throw err;
  }
}
