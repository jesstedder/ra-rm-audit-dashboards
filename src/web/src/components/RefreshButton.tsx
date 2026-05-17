import { useState } from 'react';

interface RefreshButtonProps {
  onRefreshed?: () => void;
}

export function RefreshButton({ onRefreshed }: RefreshButtonProps) {
  const [loading, setLoading] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleRefresh() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/cache/refresh', { method: 'POST' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setLastRefreshed(new Date());
      onRefreshed?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Refresh failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <button
        onClick={handleRefresh}
        disabled={loading}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 10px',
          borderRadius: '6px',
          border: '1px solid var(--color-sidebar-border)',
          backgroundColor: loading ? 'var(--color-sidebar-hover)' : 'transparent',
          color: 'var(--color-sidebar-muted)',
          fontSize: '11px',
          fontFamily: 'var(--font-ui)',
          cursor: loading ? 'default' : 'pointer',
          transition: 'background-color 0.15s, color 0.15s',
          width: '100%',
          textAlign: 'left',
        }}
        onMouseEnter={e => {
          if (!loading) (e.currentTarget as HTMLElement).style.color = 'var(--color-sidebar-brand)';
        }}
        onMouseLeave={e => {
          if (!loading) (e.currentTarget as HTMLElement).style.color = 'var(--color-sidebar-muted)';
        }}
      >
        <span style={{ fontSize: '12px' }}>{loading ? '⟳' : '↺'}</span>
        {loading ? 'Refreshing…' : 'Refresh data'}
      </button>
      {lastRefreshed && !error && (
        <p style={{ fontSize: '10px', color: 'var(--color-sidebar-muted)', margin: 0, paddingLeft: '2px' }}>
          Updated {lastRefreshed.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        </p>
      )}
      {error && (
        <p style={{ fontSize: '10px', color: '#c0392b', margin: 0, paddingLeft: '2px' }}>{error}</p>
      )}
    </div>
  );
}
