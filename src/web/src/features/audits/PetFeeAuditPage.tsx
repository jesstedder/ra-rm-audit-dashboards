import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
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

const columnHelper = createColumnHelper<PetFeeAuditResult>();

const columns = [
  columnHelper.accessor('tenantName', {
    header: 'Tenant',
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor('unitId', {
    header: 'Unit ID',
    cell: (info) => info.getValue() ?? <span className="text-gray-400">—</span>,
    enableSorting: false,
  }),
  columnHelper.accessor('chargeTypeName', {
    header: 'Charge Type',
    cell: (info) => <Badge variant="secondary">{info.getValue()}</Badge>,
    enableSorting: false,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  }),
];

function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  );
}

export function PetFeeAuditPage() {
  const { data, loading, error } = usePetFeeAudit();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data: data ?? [],
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, _colId, filterValue: string) =>
      row.original.tenantName.toLowerCase().includes(filterValue.toLowerCase()),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pet Fee Audit</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tenants with an active pet fee charge but no pet on file.
        </p>
      </div>

      {loading && <LoadingSkeleton />}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Failed to load audit data: {error}
        </div>
      )}

      {!loading && !error && data?.length === 0 && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center text-sm text-green-700">
          No issues found — all pet fees have a corresponding pet on file.
        </div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <>
          <div className="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Filter by tenant name…"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-400 focus:outline-none"
            />
            <span className="text-sm text-gray-500">
              {table.getFilteredRowModel().rows.length} of {data.length} tenant(s)
            </span>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="hover:bg-transparent">
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() === 'asc' && ' ↑'}
                        {header.column.getIsSorted() === 'desc' && ' ↓'}
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
