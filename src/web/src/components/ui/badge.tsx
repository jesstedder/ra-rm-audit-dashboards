import * as React from 'react';
import { cn } from '../../lib/utils.ts';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'pasture' | 'harvest' | 'pond';
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: { backgroundColor: 'var(--color-bark)', color: 'var(--color-ivory)' },
  secondary: { backgroundColor: 'var(--color-straw)', color: 'var(--color-earth)' },
  destructive: { backgroundColor: '#dc2626', color: '#ffffff' },
  outline: { border: '1px solid var(--color-straw)', color: 'var(--color-earth)' },
  pasture: { backgroundColor: 'var(--color-pasture-bg)', color: 'var(--color-pasture-text)' },
  harvest: { backgroundColor: 'var(--color-harvest-bg)', color: 'var(--color-harvest-text)' },
  pond: { backgroundColor: 'var(--color-pond-bg)', color: 'var(--color-pond-text)' },
};

function Badge({ className, variant = 'default', style, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        className,
      )}
      style={{ ...variantStyles[variant], fontFamily: 'var(--font-ui)', ...style }}
      {...props}
    />
  );
}

export { Badge };
