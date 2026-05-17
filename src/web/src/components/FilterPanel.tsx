import type { ReactNode } from 'react';

interface FilterChip {
  label: string;
  onRemove: () => void;
}

interface FilterPanelProps {
  open: boolean;
  onToggle: () => void;
  hasActiveFilters: boolean;
  activeChips: FilterChip[];
  onClearAll: () => void;
  rowCount: ReactNode;
  children: ReactNode;
}

export function FilterPanel({
  open,
  onToggle,
  hasActiveFilters,
  activeChips,
  onClearAll,
  rowCount,
  children,
}: FilterPanelProps) {
  return (
    <div className="mb-5">
      {/* Control bar */}
      <div className="flex items-center gap-2 mb-0">
        {/* Filters toggle button */}
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors"
          style={{
            border: hasActiveFilters
              ? '1px solid var(--color-amber)'
              : '1px solid var(--color-straw)',
            color: hasActiveFilters ? 'var(--color-amber)' : 'var(--color-earth)',
            backgroundColor: 'var(--color-ivory)',
            fontFamily: 'var(--font-ui)',
            fontWeight: 500,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            style={{ color: hasActiveFilters ? 'var(--color-amber)' : 'var(--color-earth)' }}
          >
            <path
              d="M1 2.5h11M3 6.5h7M5 10.5h3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filters
          <span style={{ fontSize: '0.6rem', lineHeight: 1 }}>
            {open ? '▴' : '▾'}
          </span>
        </button>

        {/* Active filter chips */}
        {activeChips.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
            style={{
              backgroundColor: 'var(--color-straw)',
              color: 'var(--color-earth)',
              fontFamily: 'var(--font-ui)',
            }}
          >
            {chip.label}
            <button
              onClick={chip.onRemove}
              className="flex items-center justify-center w-3.5 h-3.5 rounded-full transition-colors"
              style={{ color: 'var(--color-dust)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-bark)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-dust)'; }}
              aria-label={`Remove ${chip.label} filter`}
            >
              ×
            </button>
          </span>
        ))}

        {/* Row count — pushed to right */}
        <span
          className="ml-auto text-sm"
          style={{ color: 'var(--color-dust)', fontFamily: 'var(--font-ui)', fontWeight: 300 }}
        >
          {rowCount}
        </span>
      </div>

      {/* Sliding panel */}
      <div
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.22s ease, opacity 0.18s ease',
        }}
      >
        <div
          className="mt-2 rounded-lg px-4 py-4"
          style={{
            backgroundColor: 'var(--color-field)',
            border: '1px solid var(--color-straw)',
          }}
        >
          <div className="flex flex-wrap items-end gap-4">
            {children}

            {hasActiveFilters && (
              <button
                onClick={onClearAll}
                className="text-xs pb-px transition-colors"
                style={{
                  color: 'var(--color-dust)',
                  fontFamily: 'var(--font-ui)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-earth)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-dust)'; }}
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
