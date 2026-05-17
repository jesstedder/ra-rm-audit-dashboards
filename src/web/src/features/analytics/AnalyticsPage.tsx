import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table';
import { useAnalyticsDimensions, type DimensionConfig } from './useAnalyticsDimensions.ts';
import { useAnalyticsQuery } from './useAnalyticsQuery.ts';
import { TrendChart } from './TrendChart.tsx';
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from '../../components/ui/table.tsx';
import { Skeleton } from '../../components/ui/skeleton.tsx';

type Mode = 'point' | 'trend';

const GROUP_LABELS: Record<string, string> = {
  petProfile: 'Pet Profile',
  time: 'Time',
  rentManager: 'RentManager',
  screeningFlags: 'Screening Flags',
};

function CheckboxItem({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label
      style={{
        display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
        fontSize: '12px', fontFamily: 'var(--font-ui)', color: 'var(--color-earth)',
        padding: '2px 0',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        style={{ accentColor: 'var(--color-amber)', width: 13, height: 13 }}
      />
      {label}
    </label>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <p style={{
      fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em',
      color: 'var(--color-dust)', fontFamily: 'var(--font-ui)', marginBottom: '4px', marginTop: '10px',
    }}>
      {label}
    </p>
  );
}

function PanelBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-ivory)',
      border: '1px solid var(--color-straw)',
      borderRadius: '8px',
      padding: '14px 16px',
      minWidth: 180,
    }}>
      <p style={{
        fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em',
        color: 'var(--color-bark)', fontFamily: 'var(--font-ui)', fontWeight: 600, marginBottom: '6px',
      }}>
        {title}
      </p>
      {children}
    </div>
  );
}

function formatSnapshotDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export function AnalyticsPage() {
  const { dimensions, measures, latestSnapshot, loading: dimsLoading, error: dimsError } = useAnalyticsDimensions();

  const [selectedDims, setSelectedDims] = useState<Set<string>>(new Set());
  const [selectedMeasures, setSelectedMeasures] = useState<Set<string>>(new Set(['count_profiles']));
  const [mode, setMode] = useState<Mode>('point');
  const [snapshotDate, setSnapshotDate] = useState<string>('latest');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [bucket, setBucket] = useState<'month' | 'day'>('month');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterUnit, setFilterUnit] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const toggleDim = (id: string, on: boolean) =>
    setSelectedDims(prev => { const s = new Set(prev); on ? s.add(id) : s.delete(id); return s; });
  const toggleMeasure = (id: string, on: boolean) =>
    setSelectedMeasures(prev => { const s = new Set(prev); on ? s.add(id) : s.delete(id); return s; });

  const querySpec = useMemo(() => ({
    snapshotDate: mode === 'trend' ? 'trend' : snapshotDate,
    groupBy: [...selectedDims],
    measures: [...selectedMeasures],
    filters: {
      ...(filterSpecies ? { species: filterSpecies } : {}),
      ...(filterStatus ? { status: filterStatus } : {}),
      ...(filterUnit ? { unit_number: filterUnit } : {}),
    },
    ...(mode === 'trend' && dateFrom && dateTo ? { dateRange: { from: dateFrom, to: dateTo, bucket } } : {}),
  }), [selectedDims, selectedMeasures, mode, snapshotDate, filterSpecies, filterStatus, filterUnit, dateFrom, dateTo, bucket]);

  const { rows, columns, snapshotDate: resolvedDate, loading: queryLoading, error: queryError } = useAnalyticsQuery(querySpec);

  const columnHelper = createColumnHelper<Record<string, unknown>>();
  const tableColumns = useMemo(() =>
    columns.map(col =>
      columnHelper.accessor(row => row[col.id], {
        id: col.id,
        header: col.label,
        cell: info => {
          const v = info.getValue();
          if (v == null) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
          return String(v);
        },
      })
    ),
  [columns]);

  const table = useReactTable({
    data: rows,
    columns: tableColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Group dimensions by group for the picker
  const dimsByGroup = useMemo(() => {
    const map: Record<string, DimensionConfig[]> = {};
    for (const d of dimensions) {
      (map[d.group] = map[d.group] ?? []).push(d);
    }
    return map;
  }, [dimensions]);

  // Trend series keys = selected non-time dimensions
  const timeDimIds = new Set(['shared_at_month', 'snapshot_date_month', 'time_bucket']);
  const seriesKeys = [...selectedDims].filter(d => !timeDimIds.has(d))
    .map(d => {
      const dim = dimensions.find(dd => dd.id === d);
      return dim ? (d.startsWith('highlight:') ? `flag_${d.slice('highlight:'.length).replace(/[^a-z0-9]/gi, '_').toLowerCase()}` : d.replace(/[^a-z0-9_]/gi, '_')) : d;
    });

  const inputStyle: React.CSSProperties = {
    padding: '5px 10px', borderRadius: '6px',
    border: '1px solid var(--color-straw)', backgroundColor: 'var(--color-ivory)',
    color: 'var(--color-bark)', fontFamily: 'var(--font-ui)', fontSize: '12px', outline: 'none',
  };
  const selectStyle: React.CSSProperties = { ...inputStyle, paddingRight: '28px' };

  return (
    <div className="p-10">
      <div className="mb-6">
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2rem', color: 'var(--color-bark)', lineHeight: 1.2 }}>
          Analytics
        </h2>
        <p className="mt-1.5 text-sm" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', fontWeight: 300 }}>
          Aggregate pet &amp; screening data
          {resolvedDate && (
            <span style={{ color: 'var(--color-dust)', marginLeft: '8px', fontSize: '11px' }}>
              · Snapshot: {formatSnapshotDate(resolvedDate)}
            </span>
          )}
        </p>
      </div>

      {dimsLoading && (
        <div className="space-y-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-3/4" /></div>
      )}

      {dimsError && (
        <div style={{ backgroundColor: '#fef3e8', border: '1px solid #e8c99a', color: '#7a3c10', borderRadius: '8px', padding: '12px 16px', fontSize: '13px' }}>
          Failed to load dimensions: {dimsError}
        </div>
      )}

      {!dimsLoading && !dimsError && (
        <>
          {/* Mode toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-ui)', color: 'var(--color-dust)' }}>Mode:</span>
            <div className="inline-flex rounded-md overflow-hidden" style={{ border: '1px solid var(--color-straw)' }}>
              {(['point', 'trend'] as Mode[]).map((m, i) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="px-3 py-1.5 text-xs transition-colors"
                  style={{
                    backgroundColor: mode === m ? 'var(--color-sidebar-active)' : 'var(--color-ivory)',
                    color: mode === m ? 'var(--color-sidebar-brand)' : 'var(--color-earth)',
                    fontFamily: 'var(--font-ui)', fontWeight: mode === m ? 500 : 400,
                    borderRight: i === 0 ? '1px solid var(--color-straw)' : undefined,
                  }}
                >
                  {m === 'point' ? 'Point in time' : 'Trend over time'}
                </button>
              ))}
            </div>
          </div>

          {/* Pickers row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', alignItems: 'flex-start' }}>
            {/* Dimensions */}
            <PanelBox title="Group By">
              {Object.entries(dimsByGroup).map(([group, dims]) => (
                <div key={group}>
                  <SectionHeader label={GROUP_LABELS[group] ?? group} />
                  {dims.map(d => (
                    <CheckboxItem
                      key={d.id} id={d.id} label={d.label}
                      checked={selectedDims.has(d.id)}
                      onChange={on => toggleDim(d.id, on)}
                    />
                  ))}
                </div>
              ))}
            </PanelBox>

            {/* Measures */}
            <PanelBox title="Show">
              {measures.map(m => (
                <CheckboxItem
                  key={m.id} id={m.id} label={m.label}
                  checked={selectedMeasures.has(m.id)}
                  onChange={on => toggleMeasure(m.id, on)}
                />
              ))}
            </PanelBox>

            {/* Filters */}
            <PanelBox title="Filters">
              {mode === 'point' ? (
                <div style={{ marginBottom: '8px' }}>
                  <SectionHeader label="Snapshot date" />
                  <input
                    type="date"
                    value={snapshotDate === 'latest' ? (latestSnapshot ?? '') : snapshotDate}
                    onChange={e => setSnapshotDate(e.target.value || 'latest')}
                    style={{ ...inputStyle, width: '140px' }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
                  />
                </div>
              ) : (
                <div style={{ marginBottom: '8px' }}>
                  <SectionHeader label="Date range" />
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} style={{ ...inputStyle, width: '130px' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }} />
                    <span style={{ color: 'var(--color-dust)', fontSize: '11px' }}>to</span>
                    <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} style={{ ...inputStyle, width: '130px' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }} />
                  </div>
                  <div style={{ marginTop: '6px' }}>
                    <SectionHeader label="Bucket" />
                    <select value={bucket} onChange={e => setBucket(e.target.value as 'month' | 'day')} style={{ ...selectStyle }}>
                      <option value="month">Month</option>
                      <option value="day">Day</option>
                    </select>
                  </div>
                </div>
              )}

              <SectionHeader label="Species" />
              <select value={filterSpecies} onChange={e => setFilterSpecies(e.target.value)} style={{ ...selectStyle, width: '140px', marginBottom: '6px' }}>
                <option value="">All</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>

              <SectionHeader label="PS Status" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ ...selectStyle, width: '140px', marginBottom: '6px' }}>
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
                <option value="recommended">Recommended</option>
                <option value="non_responsive">Non-Responsive</option>
              </select>

              <SectionHeader label="Unit #" />
              <input
                type="text" placeholder="e.g. 12"
                value={filterUnit} onChange={e => setFilterUnit(e.target.value)}
                style={{ ...inputStyle, width: '80px' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
              />
            </PanelBox>
          </div>

          {/* Result area */}
          {queryLoading && (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" style={{ backgroundColor: 'var(--color-straw)', opacity: 0.5 }} />
              ))}
            </div>
          )}

          {queryError && (
            <div style={{ backgroundColor: '#fef3e8', border: '1px solid #e8c99a', color: '#7a3c10', borderRadius: '8px', padding: '12px 16px', fontSize: '13px' }}>
              {queryError}
            </div>
          )}

          {!queryLoading && !queryError && rows.length === 0 && (selectedDims.size > 0 || selectedMeasures.size > 0) && (
            <div style={{ borderRadius: '8px', padding: '32px', textAlign: 'center', fontSize: '13px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-straw)', color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
              No data found for the selected filters
            </div>
          )}

          {!queryLoading && !queryError && selectedDims.size === 0 && selectedMeasures.size === 0 && (
            <div style={{ borderRadius: '8px', padding: '32px', textAlign: 'center', fontSize: '13px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-straw)', color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
              Select dimensions or measures above to build a view
            </div>
          )}

          {!queryLoading && !queryError && rows.length > 0 && (
            <>
              {/* Trend note if only one snapshot */}
              {mode === 'trend' && (
                (() => {
                  const uniqueDates = new Set(rows.map(r => String(r['time_bucket'] ?? '')));
                  if (uniqueDates.size <= 1) {
                    return (
                      <div style={{ fontSize: '12px', color: 'var(--color-dust)', fontFamily: 'var(--font-ui)', marginBottom: '12px', padding: '8px 12px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-straw)', borderRadius: '6px' }}>
                        Only one snapshot available — run the cron daily to build trend history
                      </div>
                    );
                  }
                  return null;
                })()
              )}

              {/* Trend chart */}
              {mode === 'trend' && selectedMeasures.size > 0 && (
                <TrendChart
                  rows={rows}
                  timeBucketKey="time_bucket"
                  seriesKeys={seriesKeys}
                  valueKey={[...selectedMeasures][0]}
                  valueLabel={measures.find(m => m.id === [...selectedMeasures][0])?.label ?? ''}
                />
              )}

              {/* Row count */}
              <p style={{ fontSize: '12px', color: 'var(--color-dust)', fontFamily: 'var(--font-ui)', marginBottom: '8px' }}>
                {rows.length} row{rows.length !== 1 ? 's' : ''}
                {resolvedDate && mode === 'point' && (
                  <span> · Snapshot: {formatSnapshotDate(resolvedDate)}</span>
                )}
              </p>

              {/* Table */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-straw)', boxShadow: '0 1px 4px rgba(44,33,24,0.06)' }}>
                <Table>
                  <TableHeader>
                    {table.getHeaderGroups().map(hg => (
                      <TableRow key={hg.id} style={{ borderBottomColor: 'var(--color-straw)', backgroundColor: '#f7f2e8' }}>
                        {hg.headers.map(header => (
                          <TableHead
                            key={header.id}
                            className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getIsSorted() === 'asc' && <span style={{ color: 'var(--color-amber)', marginLeft: '4px' }}>↑</span>}
                            {header.column.getIsSorted() === 'desc' && <span style={{ color: 'var(--color-amber)', marginLeft: '4px' }}>↓</span>}
                          </TableHead>
                        ))}
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                    {table.getRowModel().rows.map(row => (
                      <TableRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
