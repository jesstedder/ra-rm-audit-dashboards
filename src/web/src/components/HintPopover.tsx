import { useState, useEffect, useRef, useCallback } from 'react';

interface HintPopoverProps {
  hint: string;
}

export function HintPopover({ hint }: HintPopoverProps) {
  const [hovered, setHovered] = useState(false);
  const [latched, setLatched] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const open = hovered || latched;

  const dismiss = useCallback(() => {
    setLatched(false);
    setHovered(false);
  }, []);

  useEffect(() => {
    if (!latched) return;

    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setLatched(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') dismiss();
    }

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [latched, dismiss]);

  return (
    <span
      ref={containerRef}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Trigger */}
      <span
        onClick={() => setLatched(l => !l)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          border: '1px solid var(--color-straw)',
          color: 'var(--color-earth)',
          fontFamily: 'var(--font-ui)',
          fontSize: '9px',
          cursor: 'pointer',
          opacity: open ? 0.85 : 0.55,
          userSelect: 'none',
          transition: 'opacity 0.1s',
        }}
      >
        ?
      </span>

      {/* Popover */}
      {open && (
        <span
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50,
            backgroundColor: 'var(--color-bark)',
            color: 'var(--color-ivory)',
            fontFamily: 'var(--font-ui)',
            fontSize: '11px',
            lineHeight: '1.5',
            padding: '6px 10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
            pointerEvents: 'none',
          }}
        >
          {hint}
          {/* Downward caret */}
          <span
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid var(--color-bark)',
            }}
          />
        </span>
      )}
    </span>
  );
}
