import { useState, useEffect } from 'react';

export interface PsProfileChip {
  publicToken: string;
  pawScore: number;
  petName: string;
  psLink: string;
}

export interface PetFeeAuditResult {
  tenantId: number;
  tenantName: string;
  unitId: number | undefined;
  unitName: string | undefined;
  chargeTypeName: string;
  amount: number;
  status: string;
  moveOutDate: string | undefined;
  psProfile?: PsProfileChip;
}

interface UsePetFeeAuditResult {
  data: PetFeeAuditResult[] | null;
  cachedAt: string | null;
  loading: boolean;
  error: string | null;
}

export function usePetFeeAudit(): UsePetFeeAuditResult {
  const [data, setData] = useState<PetFeeAuditResult[] | null>(null);
  const [cachedAt, setCachedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/audits/pet-fees')
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => null) as { error?: string } | null;
          throw new Error(body?.error ?? `API error ${res.status}`);
        }
        return res.json() as Promise<{ rows: PetFeeAuditResult[]; cachedAt: string | null }>;
      })
      .then(({ rows, cachedAt }) => { setData(rows); setCachedAt(cachedAt); })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, []);

  return { data, cachedAt, loading, error };
}
