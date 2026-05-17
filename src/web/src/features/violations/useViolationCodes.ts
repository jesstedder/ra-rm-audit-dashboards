import { useState, useEffect, useMemo } from 'react';

export interface ViolationCode {
  ViolationCodeID: number;
  Code: string;
  Description: string;
  ResolveAction?: string;
}

interface UseViolationCodesResult {
  codes: ViolationCode[];
  loading: boolean;
  error: string | null;
  search: (query: string) => ViolationCode[];
}

export function useViolationCodes(): UseViolationCodesResult {
  const [codes, setCodes] = useState<ViolationCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/violation-codes')
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => null) as { error?: string } | null;
          throw new Error(body?.error ?? `API error ${res.status}`);
        }
        return res.json() as Promise<{ codes: ViolationCode[] }>;
      })
      .then(({ codes }) => setCodes(codes))
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false));
  }, []);

  const search = useMemo(() => (query: string): ViolationCode[] => {
    if (!query.trim()) return codes;
    const q = query.toLowerCase();
    return codes.filter(c =>
      c.Code.toLowerCase().includes(q) ||
      c.Description.toLowerCase().includes(q)
    );
  }, [codes]);

  return { codes, loading, error, search };
}
