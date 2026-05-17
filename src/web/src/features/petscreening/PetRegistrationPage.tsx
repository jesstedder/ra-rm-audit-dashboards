import React, { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table';
import { usePetRegistration, type RegistrationCheckRow } from './usePetRegistration.ts';
import type { RegistrationStatus } from '@worker/index.js';
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

const ALL_STATUSES: RegistrationStatus[] = ['no_record', 'rm_only', 'gap', 'mismatched', 'matched'];

const STATUS_META: Record<RegistrationStatus, { label: string; chip: React.ReactNode; meaning: string; action: string }> = {
  no_record: {
    label: 'No Record',
    chip: <Badge variant="secondary">No Record</Badge>,
    meaning: 'Active tenant with no PetScreening profile or RM pets found',
    action: 'Ask tenant to submit PetScreening questionnaire',
  },
  rm_only: {
    label: 'RM Only',
    chip: <Badge variant="harvest">RM Only</Badge>,
    meaning: 'Pets registered in RentManager but no PetScreening profile',
    action: 'Ask tenant to complete PetScreening for their pet(s)',
  },
  gap: {
    label: 'Gap',
    chip: <Badge variant="harvest">⚠ Gap</Badge>,
    meaning: 'Pets registered in PetScreening but not in RentManager',
    action: 'Add pet(s) to RentManager',
  },
  mismatched: {
    label: 'Mismatch',
    chip: <Badge variant="harvest">⚠ Mismatch</Badge>,
    meaning: 'Both systems have pets but names don\'t match — may be different animals',
    action: 'Verify with tenant',
  },
  matched: {
    label: 'Matched',
    chip: <Badge variant="pasture">✓ Matched</Badge>,
    meaning: 'Pet records agree in both systems',
    action: 'No action needed',
  },
};

function fuzzyMatch(a: string, b: string): boolean {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const na = norm(a);
  const nb = norm(b);
  return na === nb || na.includes(nb) || nb.includes(na);
}

function PawScore({ score }: { score: number }) {
  const variant = score <= 2 ? 'harvest' : 'pasture';
  return (
    <Badge variant={variant} style={{ marginLeft: '4px', fontSize: '10px', padding: '1px 6px' }}>
      {score} paw{score !== 1 ? 's' : ''}
    </Badge>
  );
}

function PsLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
    >
      {children}
      <span style={{ fontSize: '10px', opacity: 0.6 }}>↗</span>
    </a>
  );
}

function StatusLegend() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-ivory)',
        border: '1px solid var(--color-straw)',
        borderRadius: '10px',
        padding: '14px 18px',
        marginBottom: '20px',
        fontFamily: 'var(--font-ui)',
      }}
    >
      <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-dust)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
        Status Guide
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '6px 16px', alignItems: 'start' }}>
        {ALL_STATUSES.map(s => {
          const m = STATUS_META[s];
          return (
            <React.Fragment key={s}>
              <div style={{ paddingTop: '1px' }}>{m.chip}</div>
              <span style={{ fontSize: '12px', color: 'var(--color-earth)' }}>{m.meaning}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-dust)', fontStyle: 'italic' }}>{m.action}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

const columnHelper = createColumnHelper<RegistrationCheckRow>();

function buildColumns(selectedStatuses: Set<RegistrationStatus>) {
  return [
    columnHelper.accessor('unitName', {
      header: 'Unit',
      cell: info => (
        <a
          href={info.row.original.rmUnitLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 600, color: 'var(--color-bark)', textDecoration: 'none' }}
        >
          {info.getValue()} ↗
        </a>
      ),
    }),
    columnHelper.accessor('tenantName', {
      header: 'Tenant',
      cell: info => {
        const name = info.getValue();
        const link = info.row.original.rmTenantLink;
        if (!name) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
        return (
          <a
            href={link ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-earth)', textDecoration: 'none' }}
          >
            {name} ↗
          </a>
        );
      },
    }),
    columnHelper.accessor('psPets', {
      header: 'PetScreening',
      enableSorting: false,
      cell: info => {
        const pets = info.getValue();
        const row = info.row.original;
        if (pets.length === 0) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {pets.map(p => {
              const isMismatch = row.status === 'mismatched' &&
                !row.rmPets.some(rp => fuzzyMatch(p.name, rp.name));
              return (
                <PsLink key={p.id} href={p.psLink}>
                  <span style={{ color: isMismatch ? 'var(--color-amber)' : 'var(--color-bark)', fontWeight: 500 }}>
                    {isMismatch && '⚠ '}{p.name}
                  </span>
                  <span style={{ color: 'var(--color-earth)', fontSize: '11px' }}> ({p.species})</span>
                  {p.pawScore > 0 && <PawScore score={p.pawScore} />}
                </PsLink>
              );
            })}
          </div>
        );
      },
    }),
    columnHelper.accessor('rmPets', {
      header: 'RM Pets',
      enableSorting: false,
      cell: info => {
        const pets = info.getValue();
        const row = info.row.original;
        if (pets.length === 0) return <span style={{ color: 'var(--color-dust)' }}>—</span>;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {pets.map(p => {
              const isMismatch = row.status === 'mismatched' &&
                !row.psPets.some(pp => fuzzyMatch(p.name, pp.name));
              return (
                <span key={p.petId} style={{ color: isMismatch ? 'var(--color-amber)' : 'var(--color-earth)', fontSize: '13px' }}>
                  {isMismatch && '⚠ '}{p.name}
                </span>
              );
            })}
          </div>
        );
      },
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      enableSorting: false,
      cell: info => STATUS_META[info.getValue()].chip,
    }),
  ];
}

function LoadingSkeleton() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', fontSize: '13px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
        </svg>
        Loading data from RentManager &amp; PetScreening…
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

function matchesSearch(row: RegistrationCheckRow, search: string): boolean {
  const q = search.toLowerCase();
  if (row.tenantName?.toLowerCase().includes(q)) return true;
  if (row.rmPets.some(p => p.name.toLowerCase().includes(q))) return true;
  if (row.psPets.some(p => p.name.toLowerCase().includes(q))) return true;
  return false;
}

const ALL_STATUSES_SET = new Set(ALL_STATUSES);

export function PetRegistrationPage({ onReloadRef }: { onReloadRef?: (fn: () => void) => void }) {
  const { data, cachedAt, loading, error, reload } = usePetRegistration();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<Set<RegistrationStatus>>(new Set(ALL_STATUSES));
  const [unitFilter, setUnitFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    onReloadRef?.(reload);
  }, [onReloadRef, reload]);

  const toggleStatus = (s: RegistrationStatus) => {
    setSelectedStatuses(prev => {
      const next = new Set(prev);
      if (next.has(s)) {
        next.delete(s);
      } else {
        next.add(s);
      }
      return next;
    });
  };

  const filtered = useMemo(() => (data ?? []).filter(row => {
    if (!selectedStatuses.has(row.status)) return false;
    if (unitFilter && !row.unitName.toLowerCase().includes(unitFilter.toLowerCase())) return false;
    if (searchFilter && !matchesSearch(row, searchFilter)) return false;
    return true;
  }), [data, selectedStatuses, unitFilter, searchFilter]);

  const columns = useMemo(() => buildColumns(selectedStatuses), [selectedStatuses]);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const statusFilterActive = selectedStatuses.size < ALL_STATUSES.length;
  const hasActiveFilters = statusFilterActive || unitFilter !== '' || searchFilter !== '';

  const activeChips = [
    ...(statusFilterActive
      ? ALL_STATUSES.filter(s => selectedStatuses.has(s)).map(s => ({
          label: STATUS_META[s].label,
          onRemove: () => toggleStatus(s),
        }))
      : []),
    ...(unitFilter ? [{ label: `Unit: ${unitFilter}`, onRemove: () => setUnitFilter('') }] : []),
    ...(searchFilter ? [{ label: searchFilter.length > 20 ? searchFilter.slice(0, 20) + '…' : searchFilter, onRemove: () => setSearchFilter('') }] : []),
  ];

  const onClearAll = () => {
    setSelectedStatuses(new Set(ALL_STATUSES));
    setUnitFilter('');
    setSearchFilter('');
  };

  const filteredCount = filtered.length;
  const totalCount = data?.length ?? 0;
  const gapCount = data?.filter(r => r.status === 'gap').length ?? 0;

  return (
    <div className="p-10">
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
          Pet Registration Check
        </h2>
        <p
          className="mt-1.5 text-sm"
          style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', fontWeight: 300 }}
        >
          PetScreening registrations cross-referenced against RentManager pet records
          {cachedAt && (
            <span style={{ color: 'var(--color-dust)', marginLeft: '8px', fontSize: '11px' }}>
              · Data as of {formatCachedAt(cachedAt)}
            </span>
          )}
          {gapCount > 0 && (
            <span style={{ color: 'var(--color-harvest-text)', fontWeight: 500, marginLeft: '8px' }}>
              · {gapCount} gap{gapCount !== 1 ? 's' : ''} found
            </span>
          )}
        </p>
      </div>

      {loading && <LoadingSkeleton />}

      {error && (
        <div
          className="rounded-lg p-4 text-sm"
          style={{ backgroundColor: '#fef3e8', border: '1px solid #e8c99a', color: '#7a3c10' }}
        >
          Failed to load data: {error}
        </div>
      )}

      {!loading && !error && data && (
        <>
          <StatusLegend />

          <FilterPanel
            open={filterOpen}
            onToggle={() => setFilterOpen(o => !o)}
            hasActiveFilters={hasActiveFilters}
            activeChips={activeChips}
            onClearAll={onClearAll}
            rowCount={
              hasActiveFilters
                ? `${filteredCount} of ${totalCount} units`
                : `${totalCount} units`
            }
          >
            {/* Status filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                Status
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {ALL_STATUSES.map(s => (
                  <label
                    key={s}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: 'var(--color-earth)',
                      fontFamily: 'var(--font-ui)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedStatuses.has(s)}
                      onChange={() => toggleStatus(s)}
                      style={{ accentColor: 'var(--color-amber)', width: '14px', height: '14px' }}
                    />
                    {STATUS_META[s].label}
                  </label>
                ))}
              </div>
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
                style={{
                  padding: '7px 11px',
                  borderRadius: '6px',
                  border: '1px solid var(--color-straw)',
                  backgroundColor: 'var(--color-ivory)',
                  color: 'var(--color-bark)',
                  fontFamily: 'var(--font-ui)',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
              />
            </div>

            {/* Tenant / pet name search */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)' }}>
                Tenant / pet name
              </label>
              <input
                type="text"
                placeholder="Search…"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-56 text-sm outline-none transition-colors"
                style={{
                  padding: '7px 11px',
                  borderRadius: '6px',
                  border: '1px solid var(--color-straw)',
                  backgroundColor: 'var(--color-ivory)',
                  color: 'var(--color-bark)',
                  fontFamily: 'var(--font-ui)',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-amber)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-straw)'; }}
              />
            </div>
          </FilterPanel>

          {filtered.length === 0 ? (
            <div
              className="rounded-lg p-8 text-center text-sm"
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-straw)',
                color: 'var(--color-dust)',
                fontFamily: 'var(--font-ui)',
              }}
            >
              No units match the selected filters
            </div>
          ) : (
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
                  {table.getHeaderGroups().map(hg => (
                    <TableRow
                      key={hg.id}
                      style={{ borderBottomColor: 'var(--color-straw)', backgroundColor: '#f7f2e8' }}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}
                    >
                      {hg.headers.map(header => (
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
          )}
        </>
      )}
    </div>
  );
}
