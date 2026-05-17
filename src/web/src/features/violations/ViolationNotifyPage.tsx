import React, { useState, useMemo, useEffect } from 'react';
import { useViolations, type Violation, type ViolationStage } from './useViolations.ts';
import { Badge } from '../../components/ui/badge.tsx';
import { Skeleton } from '../../components/ui/skeleton.tsx';

interface Props {
  tenantId: number | null;
}

interface NotifyResult {
  violationId: number;
  stageId: number;
  success: boolean;
  error?: string;
}

function getCurrentStage(v: Violation): ViolationStage | null {
  return v.ViolationStages.find(s => s.IsCurrentStage) ?? v.ViolationStages[0] ?? null;
}

function isUncommunicated(v: Violation): boolean {
  const stage = getCurrentStage(v);
  return stage ? !stage.IsCommunicationSent : false;
}

export function ViolationNotifyPage({ tenantId }: Props) {
  const { violations, byTenant, loading, error, reload } = useViolations();

  // Selected violation IDs (by ViolationID)
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState<NotifyResult[] | null>(null);

  // Determine which groups to show: specific tenant if tenantId provided, else all
  const groups = useMemo(() => {
    if (tenantId !== null) {
      const group = byTenant.get(tenantId);
      return group ? [group] : [];
    }
    return [...byTenant.values()];
  }, [byTenant, tenantId]);

  // All uncommunicated violations across shown groups
  const uncommunicatedViolations = useMemo(() =>
    groups.flatMap(g => g.violations.filter(isUncommunicated)),
    [groups]
  );

  // Pre-select all uncommunicated on load
  useEffect(() => {
    if (uncommunicatedViolations.length > 0 && selected.size === 0) {
      setSelected(new Set(uncommunicatedViolations.map(v => v.ViolationID)));
    }
  }, [uncommunicatedViolations]);

  function toggleViolation(id: number) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleGroup(groupViolations: Violation[]) {
    const groupIds = groupViolations.filter(isUncommunicated).map(v => v.ViolationID);
    const allSelected = groupIds.every(id => selected.has(id));
    setSelected(prev => {
      const next = new Set(prev);
      if (allSelected) groupIds.forEach(id => next.delete(id));
      else groupIds.forEach(id => next.add(id));
      return next;
    });
  }

  const selectedViolations = uncommunicatedViolations.filter(v => selected.has(v.ViolationID));

  async function handleConfirm() {
    setSubmitting(true);
    setResults(null);
    try {
      const payload = selectedViolations.map(v => {
        const stage = getCurrentStage(v)!;
        return { violationId: v.ViolationID, stageId: stage.ViolationStageID, concurrencyId: stage.ConcurrencyID };
      });

      const res = await fetch('/api/violations/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await res.json() as { results: NotifyResult[]; allOk: boolean };
      setResults(body.results);
      setConfirming(false);

      // Remove successfully marked violations from selection
      const succeededIds = new Set(body.results.filter(r => r.success).map(r => r.violationId));
      setSelected(prev => {
        const next = new Set(prev);
        succeededIds.forEach(id => next.delete(id));
        return next;
      });

      // Reload violations data
      reload();
    } catch {
      setResults([{ violationId: 0, stageId: 0, success: false, error: 'Network error — please retry' }]);
      setConfirming(false);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-4" />
        {[1, 2, 3].map(i => <Skeleton key={i} className="h-12 mb-2" />)}
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

  if (uncommunicatedViolations.length === 0) {
    return (
      <div className="p-8">
        <h2
          className="text-2xl mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bark)', fontWeight: 600 }}
        >
          Mark as Notified
        </h2>
        <div
          className="rounded p-8 text-center"
          style={{ border: '1px solid var(--color-straw)', backgroundColor: 'var(--color-ivory)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            No uncommunicated violations{tenantId ? ' for this tenant' : ''}.
          </p>
        </div>
      </div>
    );
  }

  const allSucceeded = results !== null && results.length > 0 && results.every(r => r.success);
  const someSucceeded = results !== null && results.some(r => r.success);
  const someFailed = results !== null && results.some(r => !r.success);

  return (
    <div className="p-8 max-w-2xl">
      <h2
        className="text-2xl mb-1"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bark)', fontWeight: 600 }}
      >
        Mark as Notified
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
        Select the violations covered by the letter you sent, then confirm.
      </p>

      {/* Results feedback */}
      {allSucceeded && (
        <div
          className="mb-4 px-4 py-3 rounded text-sm"
          style={{ backgroundColor: 'var(--color-pasture-bg)', color: 'var(--color-pasture-text)', fontFamily: 'var(--font-ui)' }}
        >
          ✓ All {results!.length} violation{results!.length !== 1 ? 's' : ''} marked as notified.
        </div>
      )}
      {someFailed && (
        <div
          className="mb-4 px-4 py-3 rounded text-sm"
          style={{ backgroundColor: '#fef2f2', color: '#dc2626', fontFamily: 'var(--font-ui)' }}
        >
          {someSucceeded && `${results!.filter(r => r.success).length} succeeded. `}
          {results!.filter(r => !r.success).length} failed — see highlighted rows below. Retry when ready.
        </div>
      )}

      {/* Violation groups */}
      {groups.map(group => {
        const groupUncommunicated = group.violations.filter(isUncommunicated);
        if (groupUncommunicated.length === 0) return null;
        const allGroupSelected = groupUncommunicated.every(v => selected.has(v.ViolationID));

        return (
          <div
            key={group.tenantId}
            className="mb-6 rounded overflow-hidden"
            style={{ border: '1px solid var(--color-straw)' }}
          >
            {/* Group header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: 'var(--color-dust)', borderBottom: '1px solid var(--color-straw)' }}
            >
              <div>
                <span className="text-sm font-medium" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
                  {group.tenantName}
                </span>
                <span className="text-xs ml-2" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
                  Lot {group.unitName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => toggleGroup(group.violations)}
                className="text-xs px-2 py-1 rounded"
                style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', border: '1px solid var(--color-straw)', cursor: 'pointer' }}
              >
                {allGroupSelected ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            {/* Violation rows */}
            {groupUncommunicated.map((v, idx) => {
              const stage = getCurrentStage(v);
              const isSelected = selected.has(v.ViolationID);
              const resultForThis = results?.find(r => r.violationId === v.ViolationID);
              const failed = resultForThis && !resultForThis.success;
              const succeeded = resultForThis?.success;

              return (
                <label
                  key={v.ViolationID}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                  style={{
                    borderBottom: idx === groupUncommunicated.length - 1 ? 'none' : '1px solid var(--color-straw)',
                    backgroundColor: failed ? '#fef2f2' : succeeded ? 'var(--color-pasture-bg)' : 'transparent',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleViolation(v.ViolationID)}
                    disabled={succeeded}
                    style={{ accentColor: 'var(--color-bark)', width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
                        {v.ViolationCode?.Code ?? `Code #${v.ViolationCodeID}`}
                      </span>
                      {v.ViolationCode?.Description && (
                        <span className="text-xs" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
                          {v.ViolationCode.Description}
                        </span>
                      )}
                      {stage && (
                        <Badge variant={stage.StageNumber >= 2 ? 'harvest' : 'secondary'}>
                          Stage {stage.StageNumber}
                        </Badge>
                      )}
                      {succeeded && <Badge variant="pasture">✓ Notified</Badge>}
                      {failed && <Badge variant="destructive">Failed</Badge>}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
                      {new Date(v.ViolationDate).toLocaleDateString()}
                      {v.Description && ` — ${v.Description}`}
                    </div>
                    {failed && resultForThis?.error && (
                      <div className="text-xs mt-0.5" style={{ color: '#dc2626', fontFamily: 'var(--font-ui)' }}>
                        {resultForThis.error}
                      </div>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        );
      })}

      {/* Confirmation panel */}
      {!confirming && !allSucceeded && (
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            {selected.size} violation{selected.size !== 1 ? 's' : ''} selected
          </span>
          <button
            disabled={selected.size === 0}
            onClick={() => setConfirming(true)}
            className="px-6 py-2 rounded text-sm font-medium"
            style={{
              backgroundColor: selected.size > 0 ? 'var(--color-bark)' : 'var(--color-straw)',
              color: selected.size > 0 ? 'var(--color-ivory)' : 'var(--color-earth)',
              fontFamily: 'var(--font-ui)',
              cursor: selected.size > 0 ? 'pointer' : 'not-allowed',
              border: 'none',
            }}
          >
            Mark as Notified
          </button>
        </div>
      )}

      {/* Confirmation dialog */}
      {confirming && (
        <div
          className="rounded p-5 mt-4"
          style={{ border: '2px solid var(--color-bark)', backgroundColor: 'var(--color-ivory)' }}
        >
          <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
            Confirm notification for {selectedViolations.length} violation{selectedViolations.length !== 1 ? 's' : ''}:
          </p>
          <ul className="mb-4 space-y-1">
            {selectedViolations.map(v => (
              <li key={v.ViolationID} className="text-xs" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
                • {v.ViolationCode?.Code ?? `Code #${v.ViolationCodeID}`}
                {v.ViolationCode?.Description ? ` — ${v.ViolationCode.Description}` : ''}
                {' '}({new Date(v.ViolationDate).toLocaleDateString()})
              </li>
            ))}
          </ul>
          <p className="text-xs mb-4" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            This will mark each violation's current stage as <strong>IsCommunicationSent = true</strong> in RentManager.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="px-5 py-2 rounded text-sm font-medium"
              style={{
                backgroundColor: 'var(--color-bark)',
                color: 'var(--color-ivory)',
                fontFamily: 'var(--font-ui)',
                cursor: submitting ? 'not-allowed' : 'pointer',
                border: 'none',
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? 'Marking…' : 'Confirm'}
            </button>
            <button
              onClick={() => setConfirming(false)}
              disabled={submitting}
              className="px-5 py-2 rounded text-sm"
              style={{
                border: '1px solid var(--color-straw)',
                color: 'var(--color-earth)',
                fontFamily: 'var(--font-ui)',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
