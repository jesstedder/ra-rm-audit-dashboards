import { useState, useEffect, useMemo } from 'react';

export interface ViolationStage {
  ViolationStageID: number;
  ViolationID: number;
  StageNumber: number;
  Name?: string;
  IsCommunicationSent: boolean;
  DueDate?: string;
  ConcurrencyID: number;
  IsCurrentStage: boolean;
}

export interface ViolationCode {
  ViolationCodeID: number;
  Code: string;
  Description: string;
}

export interface ViolationTenant {
  TenantID: number;
  FirstName: string;
  LastName: string;
}

export interface ViolationUnit {
  UnitID: number;
  Name: string;
}

export interface Violation {
  ViolationID: number;
  TenantID: number;
  UnitID: number;
  ViolationCodeID: number;
  ViolationDate: string;
  Description?: string;
  ResolveAction?: string;
  IsClosed: boolean;
  ViolationStages: ViolationStage[];
  ViolationCode?: ViolationCode;
  Tenant?: ViolationTenant;
  Unit?: ViolationUnit;
}

export interface TenantViolationGroup {
  tenantId: number;
  tenantName: string;
  unitName: string;
  violations: Violation[];
  stageNumbers: number[];
  hasMultipleStages: boolean;
  earliestDueDate: string | null;
}

interface UseViolationsResult {
  violations: Violation[] | null;
  byTenant: Map<number, TenantViolationGroup>;
  cachedAt: string | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export function useViolations(): UseViolationsResult {
  const [violations, setViolations] = useState<Violation[] | null>(null);
  const [cachedAt, setCachedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/violations')
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => null) as { error?: string } | null;
          throw new Error(body?.error ?? `API error ${res.status}`);
        }
        return res.json() as Promise<{ violations: Violation[]; cachedAt: string | null }>;
      })
      .then(({ violations, cachedAt }) => { setViolations(violations); setCachedAt(cachedAt); })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, [tick]);

  const byTenant = useMemo(() => {
    const map = new Map<number, TenantViolationGroup>();
    if (!violations) return map;

    for (const v of violations) {
      const tenantName = v.Tenant
        ? `${v.Tenant.FirstName} ${v.Tenant.LastName}`
        : `Tenant #${v.TenantID}`;
      const unitName = v.Unit?.Name ?? `Unit #${v.UnitID}`;

      const group = map.get(v.TenantID) ?? {
        tenantId: v.TenantID,
        tenantName,
        unitName,
        violations: [],
        stageNumbers: [],
        hasMultipleStages: false,
        earliestDueDate: null,
      };
      group.violations.push(v);

      const currentStage = v.ViolationStages.find(s => s.IsCurrentStage) ?? v.ViolationStages[0];
      if (currentStage) {
        if (!group.stageNumbers.includes(currentStage.StageNumber)) {
          group.stageNumbers.push(currentStage.StageNumber);
        }
        if (currentStage.DueDate) {
          if (!group.earliestDueDate || currentStage.DueDate < group.earliestDueDate) {
            group.earliestDueDate = currentStage.DueDate;
          }
        }
      }

      map.set(v.TenantID, group);
    }

    for (const group of map.values()) {
      group.hasMultipleStages = group.stageNumbers.length > 1;
    }

    return map;
  }, [violations]);

  return { violations, byTenant, cachedAt, loading, error, reload: () => setTick(t => t + 1) };
}
