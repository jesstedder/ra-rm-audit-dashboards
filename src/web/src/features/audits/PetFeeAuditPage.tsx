import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table';
import { usePetFeeAudit, type PetFeeAuditResult } from './usePetFeeAudit.ts';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../../components/ui/table.tsx';
import { Badge } from '../../components/ui/badge.tsx';
import { Skeleton } from '../../components/ui/skeleton.tsx';
import { FilterPanel } from '../../components/FilterPanel.tsx';

import { config } from '../../../../config.js';

const RM_WEB = config.rm.webUrl;

function RmLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
    >
      {children}
      <span style={{ fontSize: '10px', opacity: 0.5 }}>↗</span>
    </a>
  );
}

type StatusFilter = 'all' | 'Current' | 'Past';
type PsFilter = 'all' | 'has-ps';

const columnHelper = createColumnHelper<PetFeeAuditResult>();

const columns = [
  columnHelper.accessor('tenantName', {
    header: 'Tenant',
    cell: (info) => (
      <RmLink href={`${RM_WEB}/#/tenants/${info.row.original.tenantId}/details`}>
        <span style={{ fontWeight: 500, color: 'var(--color-bark)' }}>{info.getValue()}</span>
      </RmLink>
    ),
  }),
  columnHelper.accessor('unitName', {
    header: 'Unit',
    cell: (info) => {
      const name = info.getValue();
      const unitId = info.row.original.unitId;
      if (!name) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
      if (!unitId) return <span style={{ color: 'var(--color-earth)' }}>{name}</span>;
      return (
        <RmLink href={`${RM_WEB}/#/units/${unitId}/details`}>
          <span style={{ color: 'var(--color-earth)' }}>{name}</span>
        </RmLink>
      );
    },
    enableSorting: false,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      return (
        <Badge variant={status === 'Current' ? 'pasture' : 'harvest'}>
          {status}
        </Badge>
      );
    },
    enableSorting: false,
  }),
  columnHelper.display({
    id: 'rmPet',
    header: 'RM Pet',
    cell: () => <Badge variant="harvest">None</Badge>,
    enableSorting: false,
  }),
  columnHelper.accessor('moveOutDate', {
    header: 'Move-Out',
    cell: (info) => {
      const date = info.getValue();
      if (!date) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
      return (
        <span style={{ color: 'var(--color-earth)' }}>
          {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      );
    },
    enableSorting: false,
  }),
  columnHelper.accessor('chargeTypeName', {
    header: 'Charge Type',
    cell: (info) => <Badge variant="pond">{info.getValue()}</Badge>,
    enableSorting: false,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => (
      <span style={{ fontWeight: 500, color: 'var(--color-bark)' }}>
        ${info.getValue().toFixed(2)}
      </span>
    ),
  }),
  columnHelper.accessor('psProfile', {
    header: 'PetScreening',
    enableSorting: false,
    cell: (info) => {
      const ps = info.getValue();
      if (!ps) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
      const pawVariant = ps.pawScore <= 2 ? 'harvest' : 'pasture';
      return (
        <a
          href={ps.psLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}
        >
          <Badge variant="pond" style={{ gap: '4px' }}>
            <span style={{ fontWeight: 500 }}>{ps.petName}</span>
            <Badge variant={pawVariant} style={{ fontSize: '10px', padding: '0 4px' }}>
              {ps.pawScore}
            </Badge>
            <span style={{ fontSize: '10px', opacity: 0.7 }}>↗</span>
          </Badge>
        </a>
      );
    },
  }),
];

function LoadingSkeleton() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', fontSize: '13px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
        </svg>
        Loading data from RentManager…
      </div>
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" style={{ backgroundColor: 'var(--color-straw)', opacity: 0.5 }} />
        ))}
      </div>
    </div>
  );
}

function formatCachedAt(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) +
    ' · ' + d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function PetFeeAuditPage() {
  const { data, cachedAt, loading, error } = usePetFeeAudit();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [tenantSearch, setTenantSearch] = useState('');
  const [unitFilter, setUnitFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [psFilter, setPsFilter] = useState<PsFilter>('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => (data ?? []).filter(row => {
    if (tenantSearch && !row.tenantName.toLowerCase().includes(tenantSearch.toLowerCase())) return false;
    if (unitFilter && !(row.unitName ?? '').toLowerCase().includes(unitFilter.toLowerCase())) return false;
    if (statusFilter !== 'all' && row.status !== statusFilter) return false;
    if (psFilter === 'has-ps' && !row.psProfile) return false;
    return true;
  }), [data, tenantSearch, unitFilter, statusFilter, psFilter]);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const hasActiveFilters = tenantSearch !== '' || unitFilter !== '' || statusFilter !== 'all' || psFilter !== 'all';

  const activeChips = [
    ...(tenantSearch ? [{ label: tenantSearch.length > 20 ? tenantSearch.slice(0, 20) + '…' : tenantSearch, onRemove: () => setTenantSearch('') }] : []),
    ...(unitFilter ? [{ label: `Unit: ${unitFilter}`, onRemove: () => setUnitFilter('') }] : []),
    ...(statusFilter !== 'all' ? [{ label: statusFilter, onRemove: () => setStatusFilter('all') }] : []),
    ...(psFilter !== 'all' ? [{ label: 'Has PetScreening', onRemove: () => setPsFilter('all') }] : []),
  ];

  const onClearAll = () => { setTenantSearch(''); setUnitFilter(''); setStatusFilter('all'); setPsFilter('all'); };

  const filteredCount = filtered.length;
  const totalCount = data?.length ?? 0;

  return (
    <div className="p-10">
      {/* Page header */}
      <div className="mb-8">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '2rem',
            color: 'var(--color-bark)',
            letterSpacing: '0.01em',
            lineHeight: 1.2,
          }}
        >
          Pet Fee Audit
        </h2>
        <p
          className="mt-1.5 text-sm"
          style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', fontWeight: 300 }}
        >
          Tenants with an active pet fee charge but no pet on file
        </p>
        {cachedAt && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
            Data as of {formatCachedAt(cachedAt)}
          </p>
        )}
      </div>

      {loading && <LoadingSkeleton />}

      {error && (
        <div
          className="rounded-lg p-4 text-sm"
          style={{ backgroundColor: '#fef3e8', border: '1px solid #e8c99a', color: '#7a3c10' }}
        >
          Failed to load audit data: {error}
        </div>
      )}

      {!loading && !error && data?.length === 0 && (
        <div
          className="rounded-lg p-8 text-center text-sm"
          style={{
            backgroundColor: 'var(--color-pasture-bg)',
            border: '1px solid #a8d8b0',
            color: 'var(--color-pasture-text)',
            fontFamily: 'var(--font-ui)',
          }}
        >
          No issues found — all pet fees have a corresponding pet on file.
        </div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <>
          <FilterPanel
            open={filterOpen}
            onToggle={() => setFilterOpen((o) => !o)}
            hasActiveFilters={hasActiveFilters}
            activeChips={activeChips}
            onClearAll={onClearAll}
            rowCount={
              hasActiveFilters
                ? `${filteredCount} of ${totalCount} tenants`
                : `${totalCount} tenants`
            }
          >
            {/* Tenant name search */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                Tenant name
              </label>
              <input
                type="text"
                placeholder="Search…"
                value={tenantSearch}
                onChange={(e) => setTenantSearch(e.target.value)}
                className="w-56 text-sm outline-none transition-colors"
                style={{ padding: '7px 11px', borderRadius: '6px', border: '1px solid var(--color-straw)', backgroundColor: 'var(--color-ivory)', color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
              />
            </div>

            {/* Unit number filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                Unit #
              </label>
              <input
                type="text"
                placeholder="e.g. 12"
                value={unitFilter}
                onChange={(e) => setUnitFilter(e.target.value)}
                className="w-28 text-sm outline-none transition-colors"
                style={{ padding: '7px 11px', borderRadius: '6px', border: '1px solid var(--color-straw)', backgroundColor: 'var(--color-ivory)', color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
              />
            </div>

            {/* Status segmented control */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                Status
              </label>
              <div className="inline-flex rounded-md overflow-hidden" style={{ border: '1px solid var(--color-straw)' }}>
                {(['all', 'Current', 'Past'] as StatusFilter[]).map((s, i) => {
                  const isActive = statusFilter === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className="px-3 py-1.5 text-sm transition-colors"
                      style={{
                        backgroundColor: isActive ? 'var(--color-sidebar-active)' : 'var(--color-ivory)',
                        color: isActive ? 'var(--color-sidebar-brand)' : 'var(--color-earth)',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: isActive ? 500 : 400,
                        borderRight: i < 2 ? '1px solid var(--color-straw)' : undefined,
                      }}
                    >
                      {s === 'all' ? 'All' : s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PetScreening filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                PetScreening
              </label>
              <div className="inline-flex rounded-md overflow-hidden" style={{ border: '1px solid var(--color-straw)' }}>
                {(['all', 'has-ps'] as PsFilter[]).map((v, i) => {
                  const isActive = psFilter === v;
                  return (
                    <button
                      key={v}
                      onClick={() => setPsFilter(v)}
                      className="px-3 py-1.5 text-sm transition-colors"
                      style={{
                        backgroundColor: isActive ? 'var(--color-sidebar-active)' : 'var(--color-ivory)',
                        color: isActive ? 'var(--color-sidebar-brand)' : 'var(--color-earth)',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: isActive ? 500 : 400,
                        borderRight: i === 0 ? '1px solid var(--color-straw)' : undefined,
                      }}
                    >
                      {v === 'all' ? 'All' : 'Has PS'}
                    </button>
                  );
                })}
              </div>
            </div>
          </FilterPanel>

          {/* Table card */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              backgroundColor: 'var(--color-ivory)',
              border: '1px solid var(--color-straw)',
              boxShadow: '0 1px 4px rgba(44,33,24,0.06), 0 4px 16px rgba(44,33,24,0.04)',
            }}
          >
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    style={{ borderBottomColor: 'var(--color-straw)', backgroundColor: '#f7f2e8' }}
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() === 'asc' && (
                          <span style={{ color: 'var(--color-amber)', marginLeft: '4px' }}>↑</span>
                        )}
                        {header.column.getIsSorted() === 'desc' && (
                          <span style={{ color: 'var(--color-amber)', marginLeft: '4px' }}>↓</span>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
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
    </div>
  );
}
