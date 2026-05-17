import { useState, useEffect } from 'react';

export interface DimensionConfig {
  id: string;
  label: string;
  type: 'categorical' | 'temporal' | 'boolean';
  group: 'petProfile' | 'time' | 'rentManager' | 'screeningFlags';
}

export interface MeasureConfig {
  id: string;
  label: string;
}

export interface AnalyticsDimensions {
  latestSnapshot: string | null;
  syncedAt: string | null;
  dimensions: DimensionConfig[];
  measures: MeasureConfig[];
  loading: boolean;
  error: string | null;
}

export function useAnalyticsDimensions(): AnalyticsDimensions {
  const [state, setState] = useState<AnalyticsDimensions>({
    latestSnapshot: null,
    syncedAt: null,
    dimensions: [],
    measures: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch('/api/analytics/dimensions')
      .then(async res => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json() as Promise<Omit<AnalyticsDimensions, 'loading' | 'error'>>;
      })
      .then(data => setState({ ...data, loading: false, error: null }))
      .catch((err: unknown) =>
        setState(s => ({ ...s, loading: false, error: err instanceof Error ? err.message : 'Unknown error' }))
      );
  }, []);

  return state;
}
