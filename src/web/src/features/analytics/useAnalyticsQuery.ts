import { useState, useEffect, useRef, useCallback } from 'react';

export interface QuerySpec {
  snapshotDate?: string;
  groupBy: string[];
  measures: string[];
  filters?: {
    species?: string;
    status?: string;
    unit_number?: string;
    archived?: boolean;
  };
  dateRange?: {
    from: string;
    to: string;
    bucket: 'month' | 'day';
  };
}

export interface ColumnDef {
  id: string;
  label: string;
}

export interface QueryResult {
  rows: Record<string, unknown>[];
  columns: ColumnDef[];
  snapshotDate: string | null;
  loading: boolean;
  error: string | null;
}

export function useAnalyticsQuery(spec: QuerySpec): QueryResult {
  const [rows, setRows] = useState<Record<string, unknown>[]>([]);
  const [columns, setColumns] = useState<ColumnDef[]>([]);
  const [snapshotDate, setSnapshotDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const specStr = JSON.stringify(spec);

  const run = useCallback((s: QuerySpec) => {
    if (s.groupBy.length === 0 && s.measures.length === 0) {
      setRows([]);
      setColumns([]);
      return;
    }
    setLoading(true);
    setError(null);
    fetch('/api/analytics/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(s),
    })
      .then(async res => {
        if (!res.ok) {
          const body = await res.json().catch(() => null) as { error?: string } | null;
          throw new Error(body?.error ?? `API error ${res.status}`);
        }
        return res.json() as Promise<{ rows: Record<string, unknown>[]; columns: ColumnDef[]; snapshotDate: string }>;
      })
      .then(data => {
        setRows(data.rows);
        setColumns(data.columns);
        setSnapshotDate(data.snapshotDate);
      })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const s: QuerySpec = JSON.parse(specStr);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => run(s), 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specStr]);

  return { rows, columns, snapshotDate, loading, error };
}
