import React, { useMemo } from 'react';

const PALETTE = [
  'var(--color-amber)',
  '#6b8f6b',
  '#8b6b5e',
  '#5e7a8b',
  '#8b7a5e',
  '#7a5e8b',
];

interface TrendChartProps {
  rows: Record<string, unknown>[];
  timeBucketKey: string;
  seriesKeys: string[];
  valueKey: string;
  valueLabel: string;
}

export function TrendChart({ rows, timeBucketKey, seriesKeys, valueKey, valueLabel }: TrendChartProps) {
  const { timeBuckets, series, maxValue } = useMemo(() => {
    const buckets = [...new Set(rows.map(r => String(r[timeBucketKey] ?? '')))].sort();

    // Group by time bucket → series key → value
    const grouped: Record<string, Record<string, number>> = {};
    for (const row of rows) {
      const t = String(row[timeBucketKey] ?? '');
      const sk = seriesKeys.map(k => String(row[k] ?? '')).join(' / ') || 'Total';
      grouped[t] = grouped[t] ?? {};
      grouped[t][sk] = (grouped[t][sk] ?? 0) + Number(row[valueKey] ?? 0);
    }

    // Collect all series names, collapse beyond 5 to 'Other'
    const allSeries = [...new Set(Object.values(grouped).flatMap(g => Object.keys(g)))].sort();
    const topSeries = allSeries.length > 6 ? allSeries.slice(0, 5) : allSeries;
    const hasOther = allSeries.length > 6;

    const finalSeries = hasOther ? [...topSeries, 'Other'] : topSeries;

    // Rebuild grouped with 'Other' collapsed
    if (hasOther) {
      for (const t of buckets) {
        let other = 0;
        for (const s of allSeries) {
          if (!topSeries.includes(s)) {
            other += grouped[t]?.[s] ?? 0;
            delete grouped[t]?.[s];
          }
        }
        if (grouped[t]) grouped[t]['Other'] = other;
      }
    }

    const maxValue = Math.max(1, ...Object.values(grouped).flatMap(g => Object.values(g)));

    return { timeBuckets: buckets, series: finalSeries, maxValue, grouped };
  }, [rows, timeBucketKey, seriesKeys, valueKey]);

  if (rows.length === 0) return null;

  const chartH = 180;
  const chartPadL = 40;
  const chartPadR = 16;
  const chartPadT = 16;
  const chartPadB = 48;
  const groupW = Math.max(40, Math.floor((600 - chartPadL - chartPadR) / Math.max(timeBuckets.length, 1)));
  const barW = Math.max(6, Math.floor((groupW - 8) / Math.max(series.length, 1)));
  const totalW = chartPadL + chartPadR + groupW * timeBuckets.length;

  // Group data access (need it in render scope)
  const grouped: Record<string, Record<string, number>> = {};
  for (const row of rows) {
    const t = String(row[timeBucketKey] ?? '');
    const sk = seriesKeys.map(k => String(row[k] ?? '')).join(' / ') || 'Total';
    grouped[t] = grouped[t] ?? {};
    grouped[t][sk] = (grouped[t][sk] ?? 0) + Number(row[valueKey] ?? 0);
  }
  // Collapse others
  const allSeriesAll = [...new Set(Object.values(grouped).flatMap(g => Object.keys(g)))].sort();
  const topSeries = allSeriesAll.length > 6 ? allSeriesAll.slice(0, 5) : allSeriesAll;
  if (allSeriesAll.length > 6) {
    for (const t of timeBuckets) {
      let other = 0;
      for (const s of allSeriesAll) {
        if (!topSeries.includes(s)) { other += grouped[t]?.[s] ?? 0; delete grouped[t]?.[s]; }
      }
      if (grouped[t]) grouped[t]['Other'] = other;
    }
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ fontSize: '11px', color: 'var(--color-dust)', marginBottom: '8px', fontFamily: 'var(--font-ui)' }}>
        {valueLabel}
      </div>
      <div style={{ overflowX: 'auto' }}>
        <svg width={Math.max(totalW, 400)} height={chartH + chartPadT + chartPadB} style={{ display: 'block' }}>
          {/* Y-axis ticks */}
          {[0, 0.25, 0.5, 0.75, 1].map(frac => {
            const y = chartPadT + chartH - frac * chartH;
            const val = Math.round(frac * maxValue);
            return (
              <g key={frac}>
                <line x1={chartPadL - 4} y1={y} x2={totalW - chartPadR} y2={y} stroke="var(--color-straw)" strokeWidth={1} />
                <text x={chartPadL - 6} y={y + 4} textAnchor="end" fontSize={9} fill="var(--color-dust)">{val}</text>
              </g>
            );
          })}

          {/* Bars */}
          {timeBuckets.map((bucket, bi) => {
            const groupX = chartPadL + bi * groupW + 4;
            return (
              <g key={bucket}>
                {series.map((s, si) => {
                  const val = grouped[bucket]?.[s] ?? 0;
                  const barH = Math.round((val / maxValue) * chartH);
                  const x = groupX + si * barW;
                  const y = chartPadT + chartH - barH;
                  return (
                    <rect
                      key={s}
                      x={x} y={y}
                      width={Math.max(barW - 1, 2)} height={barH}
                      fill={PALETTE[si % PALETTE.length]}
                      opacity={0.85}
                    >
                      <title>{s}: {val}</title>
                    </rect>
                  );
                })}
                <text
                  x={groupX + (series.length * barW) / 2}
                  y={chartPadT + chartH + 14}
                  textAnchor="middle"
                  fontSize={9}
                  fill="var(--color-earth)"
                >
                  {bucket}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      {series.length > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
          {series.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'var(--font-ui)', color: 'var(--color-earth)' }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: PALETTE[i % PALETTE.length], opacity: 0.85 }} />
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
