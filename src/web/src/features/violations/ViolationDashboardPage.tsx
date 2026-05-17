import React, { useMemo } from 'react';
import { useViolations, type TenantViolationGroup, type ViolationStage } from './useViolations.ts';
import { Badge } from '../../components/ui/badge.tsx';
import { Skeleton } from '../../components/ui/skeleton.tsx';
import { config } from '../../../../config.js';

const RM_WEB = config.rm.webUrl;

interface Props {
  onNotify: (tenantId: number) => void;
}

function getCurrentStage(v: { ViolationStages: ViolationStage[] }): ViolationStage | null {
  return v.ViolationStages.find(s => s.IsCurrentStage) ?? v.ViolationStages[0] ?? null;
}

function stageBadgeVariant(stageNum: number): 'secondary' | 'pasture' | 'harvest' {
  if (stageNum >= 2) return 'harvest';
  return 'secondary';
}

function SummaryCard({ label, value, warning }: { label: string; value: number; warning?: boolean }) {
  return (
    <div
      className="rounded p-4 flex flex-col gap-1"
      style={{
        backgroundColor: warning && value > 0 ? 'var(--color-harvest-bg)' : 'var(--color-ivory)',
        border: `1px solid ${warning && value > 0 ? 'var(--color-harvest-text)' : 'var(--color-straw)'}`,
        minWidth: '130px',
      }}
    >
      <span
        className="text-2xl font-bold"
        style={{
          fontFamily: 'var(--font-display)',
          color: warning && value > 0 ? 'var(--color-harvest-text)' : 'var(--color-bark)',
        }}
      >
        {value}
      </span>
      <span className="text-xs" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
        {label}
      </span>
    </div>
  );
}

export function ViolationDashboardPage({ onNotify }: Props) {
  const { violations, byTenant, cachedAt, loading, error, reload } = useViolations();

  const summary = useMemo(() => {
    if (!violations) return null;
    let needsNotice = 0;
    let noticedPending = 0;
    let escalated = 0;
    let flagged = 0;

    for (const group of byTenant.values()) {
      const stages = group.violations.map(v => getCurrentStage(v)).filter(Boolean) as ViolationStage[];
      const hasEscalated = stages.some(s => s.StageNumber >= 2);
      const hasUnnoticed = stages.some(s => s.StageNumber === 1 && !s.IsCommunicationSent);
      const allNoticed = stages.every(s => s.IsCommunicationSent);

      if (hasEscalated) escalated++;
      else if (hasUnnoticed) needsNotice++;
      else if (allNoticed) noticedPending++;

      if (group.hasMultipleStages) flagged++;
    }

    return { total: byTenant.size, needsNotice, noticedPending, escalated, flagged };
  }, [violations, byTenant]);

  const sortedGroups = useMemo(() => {
    return [...byTenant.values()].sort((a, b) => {
      // Flagged first, then escalated, then needs notice
      if (a.hasMultipleStages !== b.hasMultipleStages) return a.hasMultipleStages ? -1 : 1;
      const aMax = Math.max(...a.stageNumbers);
      const bMax = Math.max(...b.stageNumbers);
      return bMax - aMax;
    });
  }, [byTenant]);

  if (loading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="flex gap-3 mb-8">
          {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-20 w-32" />)}
        </div>
        {[1, 2, 3].map(i => <Skeleton key={i} className="h-14 mb-2" />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-sm" style={{ color: '#dc2626', fontFamily: 'var(--font-ui)' }}>
          Failed to load violations: {error}
        </p>
        <button onClick={reload} className="mt-2 text-sm underline" style={{ color: 'var(--color-bark)' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2
            className="text-2xl mb-1"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bark)', fontWeight: 600 }}
          >
            Violations
          </h2>
          {cachedAt && (
            <p className="text-xs" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
              Updated {new Date(cachedAt).toLocaleTimeString()}
            </p>
          )}
        </div>
        <button
          onClick={reload}
          className="text-xs px-3 py-1.5 rounded"
          style={{ border: '1px solid var(--color-straw)', color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', cursor: 'pointer' }}
        >
          Refresh
        </button>
      </div>

      {/* Summary cards */}
      {summary && (
        <div className="flex flex-wrap gap-3 mb-8">
          <SummaryCard label="In violation" value={summary.total} />
          <SummaryCard label="Needs notice" value={summary.needsNotice} />
          <SummaryCard label="Noticed, pending" value={summary.noticedPending} />
          <SummaryCard label="Escalated" value={summary.escalated} warning />
          <SummaryCard label="Flagged for review" value={summary.flagged} warning />
        </div>
      )}

      {/* No violations */}
      {byTenant.size === 0 && (
        <div
          className="rounded p-8 text-center"
          style={{ border: '1px solid var(--color-straw)', backgroundColor: 'var(--color-ivory)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            No open violations.
          </p>
        </div>
      )}

      {/* Tenant rows */}
      {sortedGroups.length > 0 && (
        <div
          className="rounded overflow-hidden"
          style={{ border: '1px solid var(--color-straw)' }}
        >
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-dust)', borderBottom: '1px solid var(--color-straw)' }}>
                {['Tenant', 'Violations', 'Stages', 'Due', 'Actions'].map(h => (
                  <th
                    key={h}
                    className="text-left px-4 py-2 text-xs font-medium uppercase tracking-wider"
                    style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', letterSpacing: '0.08em' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedGroups.map((group, idx) => (
                <TenantRow
                  key={group.tenantId}
                  group={group}
                  isLast={idx === sortedGroups.length - 1}
                  onNotify={onNotify}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function TenantRow({ group, isLast, onNotify }: { group: TenantViolationGroup; isLast: boolean; onNotify: (id: number) => void }) {
  const currentStages = group.violations
    .map(v => getCurrentStage(v))
    .filter(Boolean) as ViolationStage[];

  const earliestDue = group.earliestDueDate
    ? new Date(group.earliestDueDate).toLocaleDateString()
    : '—';

  const distinctStages = [...new Set(currentStages.map(s => s.StageNumber))].sort((a, b) => a - b);

  const hasUnnoticed = currentStages.some(s => !s.IsCommunicationSent);

  return (
    <tr
      style={{
        borderBottom: isLast ? 'none' : '1px solid var(--color-straw)',
        backgroundColor: 'transparent',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-dust)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
    >
      {/* Tenant */}
      <td className="px-4 py-3" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bark)' }}>
        <div className="flex items-center gap-2">
          {group.hasMultipleStages && (
            <span title="Violations at multiple stages — review required" style={{ fontSize: '14px' }}>⚠️</span>
          )}
          <div>
            <a
              href={`${RM_WEB}/#/tenants/${group.tenantId}/details`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-bark)', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
            >
              {group.tenantName}
              <span style={{ fontSize: '10px', opacity: 0.5 }}>↗</span>
            </a>
            <div className="text-xs mt-0.5" style={{ color: 'var(--color-earth)' }}>
              Lot {group.unitName}
            </div>
          </div>
        </div>
      </td>

      {/* Count */}
      <td className="px-4 py-3" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bark)' }}>
        {group.violations.length}
      </td>

      {/* Stage badges */}
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {distinctStages.map(n => (
            <Badge key={n} variant={stageBadgeVariant(n)}>
              Stage {n}
            </Badge>
          ))}
          {group.hasMultipleStages && (
            <Badge variant="harvest">Mixed</Badge>
          )}
        </div>
      </td>

      {/* Due date */}
      <td className="px-4 py-3 text-xs" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-earth)' }}>
        {earliestDue}
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          {hasUnnoticed && (
            <button
              onClick={() => onNotify(group.tenantId)}
              className="text-xs px-3 py-1 rounded"
              style={{
                backgroundColor: 'var(--color-bark)',
                color: 'var(--color-ivory)',
                fontFamily: 'var(--font-ui)',
                cursor: 'pointer',
                border: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              Mark as Notified
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
