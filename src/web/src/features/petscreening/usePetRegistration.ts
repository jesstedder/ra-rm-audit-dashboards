import { useState, useEffect, useCallback } from 'react';
import type { RegistrationCheckRow } from '@worker/index.js';

export type { RegistrationCheckRow };

interface UsePetRegistrationResult {
  data: RegistrationCheckRow[] | null;
  cachedAt: string | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export function usePetRegistration(): UsePetRegistrationResult {
  const [data, setData] = useState<RegistrationCheckRow[] | null>(null);
  const [cachedAt, setCachedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const reload = useCallback(() => setTick(t => t + 1), []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/pets/registration-check')
      .then(async res => {
        if (!res.ok) {
          const body = await res.json().catch(() => null) as { error?: string } | null;
          throw new Error(body?.error ?? `API error ${res.status}`);
        }
        return res.json() as Promise<{ rows: RegistrationCheckRow[]; cachedAt: string | null }>;
      })
      .then(({ rows, cachedAt }) => { setData(rows); setCachedAt(cachedAt); })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, [tick]);

  return { data, cachedAt, loading, error, reload };
}
