import { VALID_DIMENSION_IDS, VALID_MEASURE_IDS } from './dimensions.js';

export interface QuerySpec {
  snapshotDate?: string;
  groupBy: string[];
  measures: string[];
  filters?: {
    species?: string;
    status?: string;
    unit_number?: string;
    tenant_status?: string;
    archived?: boolean;
  };
  dateRange?: {
    from: string;
    to: string;
    bucket: 'month' | 'day';
  };
}

export interface BuiltQuery {
  sql: string;
  params: unknown[];
  columns: Array<{ id: string; label: string }>;
}

// Validate all dimension and measure IDs against the allowlist
export function validateSpec(spec: QuerySpec, knownHighlightLabels: string[]): string | null {
  const validHighlights = new Set(knownHighlightLabels.map(l => `highlight:${l}`));
  for (const dim of spec.groupBy) {
    if (!VALID_DIMENSION_IDS.has(dim) && !validHighlights.has(dim)) {
      return `Unknown dimension: ${dim}`;
    }
  }
  for (const m of spec.measures) {
    if (!VALID_MEASURE_IDS.has(m)) {
      return `Unknown measure: ${m}`;
    }
  }
  return null;
}

export function buildAnalyticsQuery(spec: QuerySpec, knownHighlightLabels: string[]): BuiltQuery {
  const params: unknown[] = [];
  const isTrend = spec.snapshotDate === 'trend';

  // Separate highlight dimensions from standard ones
  const highlightDims = spec.groupBy.filter(d => d.startsWith('highlight:'));
  const standardDims = spec.groupBy.filter(d => !d.startsWith('highlight:'));

  // Build LEFT JOINs for highlight dimensions
  const joins: string[] = [];
  highlightDims.forEach((dim, i) => {
    const label = dim.slice('highlight:'.length);
    joins.push(
      `LEFT JOIN ps_highlight_snapshots h${i} ON h${i}.snapshot_date = p.snapshot_date AND h${i}.ps_id = p.ps_id AND h${i}.label = ?`
    );
    params.push(label);
  });

  // Map standard dimension id → SELECT expression
  function dimExpr(id: string): string {
    switch (id) {
      case 'species': return 'p.species';
      case 'kind': return 'p.kind';
      case 'status': return 'p.status';
      case 'paw_score': return 'p.paw_score';
      case 'paw_score_bucket': return "CASE WHEN p.paw_score <= 2 THEN '1-2' ELSE '3-5' END";
      case 'assistance_type': return "COALESCE(p.assistance_type, 'none')";
      case 'archived': return "CASE WHEN p.archived = 1 THEN 'yes' ELSE 'no' END";
      case 'shared_at_month': return "strftime('%Y-%m', p.shared_at)";
      case 'snapshot_date_month': return "strftime('%Y-%m', p.snapshot_date)";
      case 'unit_name': return 'p.unit_number';
      case 'tenant_status':
        return `CASE WHEN EXISTS(SELECT 1 FROM rm_snapshots r WHERE r.snapshot_date=p.snapshot_date AND r.unit_name=p.unit_number AND r.tenant_status='Current') THEN 'Current' ELSE 'Past/None' END`;
      case 'has_rm_pet':
        return `CASE WHEN EXISTS(SELECT 1 FROM rm_snapshots r WHERE r.snapshot_date=p.snapshot_date AND r.unit_name=p.unit_number AND r.pet_id > 0) THEN 'yes' ELSE 'no' END`;
      case 'has_gap':
        return `CASE WHEN NOT EXISTS(SELECT 1 FROM rm_snapshots r WHERE r.snapshot_date=p.snapshot_date AND r.unit_name=p.unit_number AND r.pet_id > 0) THEN 'yes' ELSE 'no' END`;
      default: return 'NULL';
    }
  }

  function dimLabel(id: string): string {
    const labels: Record<string, string> = {
      species: 'Species', kind: 'Kind', status: 'PS Status',
      paw_score: 'Paw Score', paw_score_bucket: 'Paw Score Range',
      assistance_type: 'Assistance Type', archived: 'Archived',
      shared_at_month: 'Submission Month', snapshot_date_month: 'Snapshot Month',
      unit_name: 'Unit', tenant_status: 'Tenant Status',
      has_rm_pet: 'Has RM Pet', has_gap: 'Has Gap',
    };
    return labels[id] ?? id;
  }

  const columns: Array<{ id: string; label: string }> = [];
  const selectParts: string[] = [];
  const groupByParts: string[] = [];

  // Add standard dimensions to SELECT + GROUP BY
  for (const dim of standardDims) {
    const expr = dimExpr(dim);
    const alias = dim.replace(/[^a-z0-9_]/gi, '_');
    selectParts.push(`${expr} AS ${alias}`);
    groupByParts.push(expr);
    columns.push({ id: alias, label: dimLabel(dim) });
  }

  // Add highlight dimensions to SELECT + GROUP BY
  highlightDims.forEach((dim, i) => {
    const label = dim.slice('highlight:'.length);
    const alias = `flag_${label.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
    const expr = `CASE WHEN h${i}.label IS NOT NULL THEN 'flagged' ELSE 'not flagged' END`;
    selectParts.push(`${expr} AS ${alias}`);
    groupByParts.push(expr);
    columns.push({ id: alias, label: `Flag: ${label}` });
  });

  // In trend mode, always include the time bucket
  if (isTrend && spec.dateRange) {
    const bucketExpr = spec.dateRange.bucket === 'month'
      ? "strftime('%Y-%m', p.snapshot_date)"
      : 'p.snapshot_date';
    const bucketAlias = 'time_bucket';
    if (!groupByParts.includes(bucketExpr)) {
      selectParts.unshift(`${bucketExpr} AS ${bucketAlias}`);
      groupByParts.unshift(bucketExpr);
      columns.unshift({ id: bucketAlias, label: spec.dateRange.bucket === 'month' ? 'Month' : 'Date' });
    }
  }

  // Measures
  const measureLabels: Record<string, string> = {
    count_profiles: '# Profiles',
    count_distinct_units: '# Units',
    avg_paw_score: 'Avg Paw Score',
    avg_score: 'Avg Raw Score',
  };
  const measureExprs: Record<string, string> = {
    count_profiles: 'COUNT(*)',
    count_distinct_units: 'COUNT(DISTINCT p.unit_number)',
    avg_paw_score: 'ROUND(AVG(CAST(p.paw_score AS REAL)), 1)',
    avg_score: 'ROUND(AVG(p.score), 2)',
  };
  for (const m of spec.measures) {
    const alias = m;
    selectParts.push(`${measureExprs[m]} AS ${alias}`);
    columns.push({ id: alias, label: measureLabels[m] ?? m });
  }

  // WHERE clause
  const whereParts: string[] = [];
  if (isTrend && spec.dateRange) {
    whereParts.push('p.snapshot_date BETWEEN ? AND ?');
    params.push(spec.dateRange.from, spec.dateRange.to);
  } else {
    whereParts.push('p.snapshot_date = ?');
    params.push(spec.snapshotDate ?? '');
  }

  const { filters } = spec;
  if (filters?.species) { whereParts.push('p.species = ?'); params.push(filters.species); }
  if (filters?.status) { whereParts.push('p.status = ?'); params.push(filters.status); }
  if (filters?.unit_number) { whereParts.push('p.unit_number LIKE ?'); params.push(`%${filters.unit_number}%`); }
  if (filters?.archived !== undefined) { whereParts.push('p.archived = ?'); params.push(filters.archived ? 1 : 0); }

  const sql = [
    `SELECT ${selectParts.join(', ')}`,
    'FROM ps_profile_snapshots p',
    ...joins,
    `WHERE ${whereParts.join(' AND ')}`,
    groupByParts.length > 0 ? `GROUP BY ${groupByParts.join(', ')}` : '',
    'ORDER BY 1',
  ].filter(Boolean).join('\n');

  return { sql, params, columns };
}
