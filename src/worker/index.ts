import { Hono } from 'hono';
import { config } from '../config.js';
import { cors } from 'hono/cors';
import { createClient, RMApiError } from '../lib/rm/client.js';
import { findTenantsWithPetFeeButNoPet } from '../lib/rm/audits/pet-fee.js';
import { verifyAccessToken, getDevUser, type UserInfo } from '../lib/auth/cf-access.js';
import { fetchAllData, fetchPsProfiles } from '../lib/fetchAllData.js';
import { getCached, getCachedAt, setCached, bustCache } from '../lib/cache.js';
import { buildUnitNameMap } from '../lib/rm/units.js';
import { buildTenantUnitMap, getAllLeases } from '../lib/rm/leases.js';
import type { PsProfile } from '../lib/petscreening/pets.js';
import { runAnalyticsEtl } from '../lib/analytics/etl.js';
import { STATIC_DIMENSIONS, MEASURES, highlightDimension } from '../lib/analytics/dimensions.js';
import { buildAnalyticsQuery, validateSpec, type QuerySpec } from '../lib/analytics/query-builder.js';
import {
  getViolations,
  getViolationCodes,
  createViolations,
  uploadViolationImage,
  markStagesCommunicated,
  type ViolationCode,
  type Violation,
  type StageNotifyItem,
} from '../lib/rm/violations.js';

interface Env {
  RM_BASEURL: string;
  RM_USERNAME: string;
  RM_PASSWORD: string;
  RM_LOCATIONID: string;
  CF_ACCESS_AUD: string;
  DEV_USER_EMAIL?: string;
  DEV_USER_NAME?: string;
  PETSCREENING_USERNAME: string;
  PETSCREENING_PASSWORD: string;
  PETSCREENER_PMID: string;
  ASSETS: Fetcher;
  ps_analytics: D1Database;
}

export type RegistrationStatus = 'no_record' | 'rm_only' | 'gap' | 'mismatched' | 'matched';

export interface RegistrationCheckRow {
  unitId: number;
  unitName: string;
  rmUnitLink: string;
  tenantId: number | null;
  tenantName: string | null;
  rmTenantLink: string | null;
  rmPets: Array<{ petId: number; name: string; breed?: string }>;
  psPets: Array<{ id: number; name: string; species: string; pawScore: number; publicToken: string; psLink: string }>;
  status: RegistrationStatus;
}

function fuzzyNameMatch(a: string, b: string): boolean {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const na = norm(a);
  const nb = norm(b);
  return na === nb || na.includes(nb) || nb.includes(na);
}

function computeStatus(
  psPets: RegistrationCheckRow['psPets'],
  rmPets: RegistrationCheckRow['rmPets'],
): RegistrationStatus {
  if (psPets.length > 0 && rmPets.length === 0) return 'gap';
  if (psPets.length === 0 && rmPets.length > 0) return 'rm_only';
  if (psPets.length === 0 && rmPets.length === 0) return 'no_record';
  const allMatch = psPets.every(pp => rmPets.some(rp => fuzzyNameMatch(pp.name, rp.name)));
  return allMatch ? 'matched' : 'mismatched';
}

const RM_WEB = config.rm.webUrl;
const PS_WEB = config.ps.baseUrl;

type Variables = { user: UserInfo };

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.use('/api/*', cors());

app.use('/api/*', async (c, next) => {
  const devUser = getDevUser(c.env);
  if (devUser) {
    c.set('user', devUser);
    return next();
  }

  const token = c.req.header('Cf-Access-Jwt-Assertion');
  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const user = await verifyAccessToken(token, c.env.CF_ACCESS_AUD);
    c.set('user', user);
    return next();
  } catch {
    return c.json({ error: 'Unauthorized' }, 401);
  }
});

app.get('/api/me', (c) => {
  return c.json(c.get('user'));
});

app.get('/api/audits/pet-fees', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;

  if (!RM_BASEURL || !RM_USERNAME || !RM_PASSWORD || !RM_LOCATIONID) {
    return c.json({ error: 'Missing required RM credentials in Worker environment' }, 500);
  }

  try {
    type EnrichedAuditRow = Awaited<ReturnType<typeof findTenantsWithPetFeeButNoPet>>[number] & {
      psProfile?: { publicToken: string; pawScore: number; petName: string; psLink: string };
    };

    const cached = await getCached<EnrichedAuditRow[]>('pet-fee-audit');
    if (cached) return c.json({ rows: cached, cachedAt: await getCachedAt('pet-fee-audit') });

    const client = createClient({
      baseUrl: RM_BASEURL,
      username: RM_USERNAME,
      password: RM_PASSWORD,
      locationId: parseInt(RM_LOCATIONID, 10),
    });

    const [auditResults, psProfiles] = await Promise.all([
      findTenantsWithPetFeeButNoPet(client),
      fetchPsProfiles(c.env).catch(() => null),
    ]);

    // Build unit# → PS profiles map for joining
    const psByUnit = new Map<string, PsProfile[]>();
    if (psProfiles) {
      for (const p of psProfiles) {
        if (p.unitNumber) {
          const arr = psByUnit.get(p.unitNumber) ?? [];
          arr.push(p);
          psByUnit.set(p.unitNumber, arr);
        }
      }
    }

    const enriched: EnrichedAuditRow[] = auditResults.map(row => {
      const psMatches = row.unitName ? (psByUnit.get(row.unitName) ?? []) : [];
      const best = psMatches[0];
      return {
        ...row,
        psProfile: best
          ? {
              publicToken: best.publicToken,
              pawScore: best.pawScore,
              petName: best.name,
              psLink: `${PS_WEB}/p/${best.publicToken}`,
            }
          : undefined,
      };
    });

    await setCached('pet-fee-audit', enriched, config.cache.ttlSeconds);
    return c.json({ rows: enriched, cachedAt: await getCachedAt('pet-fee-audit') });
  } catch (err) {
    if (err instanceof RMApiError) {
      return c.json({ error: err.message, upstream: err.status }, 502);
    }
    throw err;
  }
});

app.get('/api/pets/registration-check', async (c) => {
  try {
    const data = await fetchAllData(c.env);
    const unitNameMap = buildUnitNameMap(data.rmUnits);
    const tenantUnitMap = buildTenantUnitMap(data.rmLeases);

    // Index RM pets by tenantId
    const petsByTenant = new Map<number, typeof data.rmPets>();
    for (const pet of data.rmPets) {
      const arr = petsByTenant.get(pet.TenantID) ?? [];
      arr.push(pet);
      petsByTenant.set(pet.TenantID, arr);
    }

    // Index PS profiles by unitNumber
    const psByUnit = new Map<string, PsProfile[]>();
    for (const p of data.psProfiles) {
      if (p.unitNumber) {
        const arr = psByUnit.get(p.unitNumber) ?? [];
        arr.push(p);
        psByUnit.set(p.unitNumber, arr);
      }
    }

    // Build tenantId → tenant
    const tenantById = new Map(data.rmTenants.map(t => [t.TenantID, t]));

    // Build one row per RM unit that has a current tenant or PS profile
    const unitIds = new Set<number>();
    for (const [, unitId] of tenantUnitMap) unitIds.add(unitId);
    for (const unit of data.rmUnits) {
      if (psByUnit.has(unit.Name)) unitIds.add(unit.UnitID);
    }

    // Build unit map by ID
    const unitById = new Map(data.rmUnits.map(u => [u.UnitID, u]));

    // TenantID → unitID, find one current tenant per unit
    const unitToTenant = new Map<number, number>();
    for (const [tenantId, unitId] of tenantUnitMap) {
      const tenant = tenantById.get(tenantId);
      if (tenant?.Status === 'Current' && !unitToTenant.has(unitId)) {
        unitToTenant.set(unitId, tenantId);
      }
    }

    const rows: RegistrationCheckRow[] = [];
    for (const unitId of unitIds) {
      const unit = unitById.get(unitId);
      if (!unit) continue;

      const tenantId = unitToTenant.get(unitId) ?? null;
      const tenant = tenantId != null ? tenantById.get(tenantId) : null;
      const rmPets = tenantId != null ? (petsByTenant.get(tenantId) ?? []) : [];
      const psPets = psByUnit.get(unit.Name) ?? [];

      const mappedRmPets = rmPets.map(p => ({ petId: p.PetID, name: p.Name ?? '', breed: p.Breed }));
      const mappedPsPets = psPets.map(p => ({
        id: p.id,
        name: p.name,
        species: p.species,
        pawScore: p.pawScore,
        publicToken: p.publicToken,
        psLink: `${PS_WEB}/p/${p.publicToken}`,
      }));
      rows.push({
        unitId,
        unitName: unit.Name,
        rmUnitLink: `${RM_WEB}/#/units/${unitId}/details`,
        tenantId,
        tenantName: tenant ? `${tenant.FirstName} ${tenant.LastName}` : null,
        rmTenantLink: tenantId != null ? `${RM_WEB}/#/tenants/${tenantId}/details` : null,
        rmPets: mappedRmPets,
        psPets: mappedPsPets,
        status: computeStatus(mappedPsPets, mappedRmPets),
      });
    }

    rows.sort((a, b) => a.unitName.localeCompare(b.unitName, undefined, { numeric: true }));

    return c.json({ rows, cachedAt: await getCachedAt('rm-data') });
  } catch (err) {
    if (err instanceof RMApiError) {
      return c.json({ error: err.message, upstream: err.status }, 502);
    }
    throw err;
  }
});

app.get('/api/tenants', async (c) => {
  try {
    type RmBundle = { tenants: Array<{ TenantID: number; FirstName: string; LastName: string; Status: string }> };
    const cached = await getCached<RmBundle>('rm-data');
    if (cached) {
      const current = cached.tenants.filter(t => t.Status === 'Current');
      return c.json({ tenants: current });
    }
    const data = await fetchAllData(c.env);
    const current = data.rmTenants.filter(t => t.Status === 'Current');
    return c.json({ tenants: current });
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    throw err;
  }
});

app.get('/api/violation-codes', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;
  try {
    const cached = await getCached<ViolationCode[]>('rm-violation-codes');
    if (cached) return c.json({ codes: cached });

    const client = createClient({ baseUrl: RM_BASEURL, username: RM_USERNAME, password: RM_PASSWORD, locationId: parseInt(RM_LOCATIONID, 10) });
    const codes = await getViolationCodes(client);
    await setCached('rm-violation-codes', codes, 3600);
    return c.json({ codes });
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    throw err;
  }
});

app.get('/api/violations', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;
  try {
    const cached = await getCached<Violation[]>('rm-violations');
    if (cached) return c.json({ violations: cached, cachedAt: await getCachedAt('rm-violations') });

    const client = createClient({ baseUrl: RM_BASEURL, username: RM_USERNAME, password: RM_PASSWORD, locationId: parseInt(RM_LOCATIONID, 10) });
    const violations = await getViolations(client, config.rm.propertyId);
    await setCached('rm-violations', violations, config.cache.ttlSeconds);
    return c.json({ violations, cachedAt: await getCachedAt('rm-violations') });
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    throw err;
  }
});

app.post('/api/violations', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;
  try {
    const body = await c.req.json<Array<{
      tenantId: number;
      violationCodeId: number;
      violationDate: string;
      dueDate: string;
      resolveAction?: string;
      description?: string;
      imageId?: number;
    }>>();

    if (!Array.isArray(body) || body.length === 0) {
      return c.json({ error: 'Request body must be a non-empty array of violations' }, 400);
    }

    const client = createClient({ baseUrl: RM_BASEURL, username: RM_USERNAME, password: RM_PASSWORD, locationId: parseInt(RM_LOCATIONID, 10) });

    // Resolve tenantId → unitId; reuse rm-data cache if warm, else fetch leases directly
    type RmBundle = { leases: Awaited<ReturnType<typeof getAllLeases>> };
    const cachedRm = await getCached<RmBundle>('rm-data');
    const leases = cachedRm?.leases ?? await getAllLeases(client);
    const tenantUnitMap = buildTenantUnitMap(leases);

    const items = body.map(v => {
      const unitId = tenantUnitMap.get(v.tenantId);
      if (!unitId) throw new Error(`No active unit found for tenant ${v.tenantId}`);
      if (!v.dueDate) throw new Error(`dueDate is required for violation (tenantId ${v.tenantId})`);
      return { tenantId: v.tenantId, unitId, violationCodeId: v.violationCodeId, violationDate: v.violationDate, dueDate: v.dueDate, resolveAction: v.resolveAction, description: v.description, imageId: v.imageId };
    });

    const created = await createViolations(client, config.rm.propertyId, items);
    await bustCache('rm-violations');
    return c.json({ violations: created });
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    if (err instanceof Error) return c.json({ error: err.message }, 400);
    throw err;
  }
});

app.post('/api/violations/notify', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;
  try {
    const body = await c.req.json<StageNotifyItem[]>();
    if (!Array.isArray(body) || body.length === 0) {
      return c.json({ error: 'Request body must be a non-empty array' }, 400);
    }

    const client = createClient({ baseUrl: RM_BASEURL, username: RM_USERNAME, password: RM_PASSWORD, locationId: parseInt(RM_LOCATIONID, 10) });
    const results = await markStagesCommunicated(client, body);
    await bustCache('rm-violations');
    const allOk = results.every(r => r.success);
    return c.json({ results, allOk }, allOk ? 200 : 207);
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    throw err;
  }
});

app.post('/api/violations/:id/image', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;
  const violationId = parseInt(c.req.param('id'), 10);
  if (isNaN(violationId)) return c.json({ error: 'Invalid violation ID' }, 400);

  try {
    const formData = await c.req.formData();
    const imageEntry = formData.get('image');
    if (!(imageEntry instanceof File)) {
      return c.json({ error: 'Request must include an "image" file field' }, 400);
    }

    const client = createClient({ baseUrl: RM_BASEURL, username: RM_USERNAME, password: RM_PASSWORD, locationId: parseInt(RM_LOCATIONID, 10) });
    const result = await uploadViolationImage(client, violationId, imageEntry);
    return c.json({ imageId: result.ImageID });
  } catch (err) {
    if (err instanceof RMApiError) return c.json({ error: err.message, upstream: err.status }, 502);
    throw err;
  }
});

app.post('/api/analytics/sync', async (c) => {
  await runAnalyticsEtl(c.env, c.env.ps_analytics);
  const row = await c.env.ps_analytics
    .prepare(`SELECT snapshot_date, ps_profile_count, rm_unit_count, status FROM sync_log ORDER BY sync_id DESC LIMIT 1`)
    .first<{ snapshot_date: string; ps_profile_count: number; rm_unit_count: number; status: string }>();
  return c.json({ ok: true, ...row });
});

app.post('/api/cache/refresh', async (c) => {
  await bustCache('ps-profiles', 'rm-data', 'pet-fee-audit', 'rm-violations', 'rm-violation-codes');
  return c.json({ ok: true });
});

app.get('/api/analytics/dimensions', async (c) => {
  const db = c.env.ps_analytics;
  const [latestRow, highlightRows] = await Promise.all([
    db.prepare(`SELECT snapshot_date, synced_at FROM sync_log WHERE status = 'ok' ORDER BY snapshot_date DESC LIMIT 1`).first<{ snapshot_date: string; synced_at: string }>(),
    db.prepare(`SELECT DISTINCT label FROM ps_highlight_snapshots ORDER BY label`).all<{ label: string }>(),
  ]);

  const highlightDims = (highlightRows.results ?? []).map(r => highlightDimension(r.label));
  const allDimensions = [...STATIC_DIMENSIONS, ...highlightDims];

  return c.json({
    latestSnapshot: latestRow?.snapshot_date ?? null,
    syncedAt: latestRow?.synced_at ?? null,
    dimensions: allDimensions,
    measures: MEASURES,
  });
});

app.post('/api/analytics/query', async (c) => {
  const spec = await c.req.json<QuerySpec>();

  const db = c.env.ps_analytics;

  // Resolve 'latest' snapshot date
  let snapshotDate = spec.snapshotDate;
  if (!snapshotDate || snapshotDate === 'latest') {
    const row = await db.prepare(`SELECT snapshot_date FROM sync_log WHERE status = 'ok' ORDER BY snapshot_date DESC LIMIT 1`).first<{ snapshot_date: string }>();
    snapshotDate = row?.snapshot_date ?? '';
  }
  const resolvedSpec: QuerySpec = { ...spec, snapshotDate };

  // Get known highlight labels for allowlist validation
  const highlightRows = await db.prepare('SELECT DISTINCT label FROM ps_highlight_snapshots').all<{ label: string }>();
  const knownHighlightLabels = (highlightRows.results ?? []).map(r => r.label);

  const validationError = validateSpec(resolvedSpec, knownHighlightLabels);
  if (validationError) return c.json({ error: validationError }, 400);

  const { sql, params, columns } = buildAnalyticsQuery(resolvedSpec, knownHighlightLabels);

  const start = Date.now();
  const result = await db.prepare(sql).bind(...params).all();
  const executionMs = Date.now() - start;

  return c.json({
    rows: result.results ?? [],
    columns,
    snapshotDate: resolvedSpec.snapshotDate,
    executionMs,
  });
});

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw));

const scheduled: ExportedHandlerScheduledHandler<Env> = async (_event, env) => {
  await runAnalyticsEtl(env, env.ps_analytics);
};

export default { fetch: app.fetch, scheduled };
