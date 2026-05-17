import { useState, useEffect } from 'react';

export interface PetFeeAuditResult {
  tenantId: number;
  tenantName: string;
  unitId: number | undefined;
  chargeTypeName: string;
  amount: number;
}

interface UsePetFeeAuditResult {
  data: PetFeeAuditResult[] | null;
  loading: boolean;
  error: string | null;
}

export function usePetFeeAudit(): UsePetFeeAuditResult {
  const [data, setData] = useState<PetFeeAuditResult[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/audits/pet-fees')
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json() as Promise<PetFeeAuditResult[]>;
      })
      .then(setData)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
