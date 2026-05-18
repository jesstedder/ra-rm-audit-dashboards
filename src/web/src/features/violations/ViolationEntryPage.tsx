import React, { useState, useEffect, useId, useRef } from 'react';
import { useViolationCodes } from './useViolationCodes.ts';
import type { ViolationCode } from './useViolationCodes.ts';

interface Tenant {
  TenantID: number;
  FirstName: string;
  LastName: string;
  Status: string;
}

interface ViolationRowData {
  id: string;
  violationCodeId: number | null;
  violationCode: ViolationCode | null;
  resolveAction: string;
  description: string;
  imageFile: File | null;
  imageId: number | null;
  imageUploading: boolean;
  imageError: string | null;
}

function newRow(): ViolationRowData {
  return {
    id: crypto.randomUUID(),
    violationCodeId: null,
    violationCode: null,
    resolveAction: '',
    description: '',
    imageFile: null,
    imageId: null,
    imageUploading: false,
    imageError: null,
  };
}

function CodeCombobox({
  value,
  codes,
  onSelect,
}: {
  value: ViolationCode | null;
  codes: ViolationCode[];
  onSelect: (code: ViolationCode | null) => void;
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? codes.filter(c =>
        c.Code.toLowerCase().includes(query.toLowerCase()) ||
        c.Description.toLowerCase().includes(query.toLowerCase())
      )
    : codes;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search violation codes…"
        value={open ? query : (value ? `${value.Code} — ${value.Description}` : '')}
        onChange={e => { setQuery(e.target.value); setOpen(true); if (!e.target.value) onSelect(null); }}
        onFocus={() => { setOpen(true); setQuery(''); }}
        className="w-full rounded border px-3 py-1.5 text-sm"
        style={{
          borderColor: 'var(--color-straw)',
          backgroundColor: 'var(--color-ivory)',
          color: 'var(--color-bark)',
          fontFamily: 'var(--font-ui)',
          outline: 'none',
        }}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: 'var(--color-ivory)',
            border: '1px solid var(--color-straw)',
            borderRadius: '4px',
            maxHeight: '220px',
            overflowY: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {filtered.slice(0, 50).map(c => (
            <button
              key={c.ViolationCodeID}
              type="button"
              onMouseDown={() => { onSelect(c); setQuery(''); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-sm"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--color-bark)',
                borderBottom: '1px solid var(--color-straw)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-dust)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
            >
              <span style={{ fontWeight: 600 }}>{c.Code}</span>
              <span style={{ color: 'var(--color-earth)', marginLeft: '6px' }}>{c.Description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ViolationRowForm({
  row,
  resolveActionSuggestions,
  codes,
  canRemove,
  onChange,
  onRemove,
}: {
  row: ViolationRowData;
  resolveActionSuggestions: string[];
  codes: ViolationCode[];
  canRemove: boolean;
  onChange: (updated: Partial<ViolationRowData>) => void;
  onRemove: () => void;
}) {
  const suggestId = useId();

  function handleCodeSelect(code: ViolationCode | null) {
    onChange({
      violationCode: code,
      violationCodeId: code?.ViolationCodeID ?? null,
      resolveAction: code?.ResolveAction ?? '',
    });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    onChange({ imageFile: file, imageId: null, imageError: null });
  }

  return (
    <div
      className="rounded p-4 mb-3"
      style={{
        border: '1px solid var(--color-straw)',
        backgroundColor: 'var(--color-ivory)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
          Violation
        </span>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs px-2 py-0.5 rounded"
            style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)', cursor: 'pointer' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#dc2626'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-earth)'; }}
          >
            Remove
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* Code selector */}
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            Violation Code <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <CodeCombobox value={row.violationCode} codes={codes} onSelect={handleCodeSelect} />
        </div>

        {/* Resolve action */}
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            Required Corrective Action
          </label>
          <input
            list={suggestId}
            type="text"
            value={row.resolveAction}
            onChange={e => onChange({ resolveAction: e.target.value })}
            placeholder="What must the tenant do to resolve this?"
            className="w-full rounded border px-3 py-1.5 text-sm"
            style={{
              borderColor: 'var(--color-straw)',
              backgroundColor: 'var(--color-ivory)',
              color: 'var(--color-bark)',
              fontFamily: 'var(--font-ui)',
              outline: 'none',
            }}
          />
          <datalist id={suggestId}>
            {resolveActionSuggestions.map((s, i) => (
              <option key={i} value={s} />
            ))}
          </datalist>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            Notes (optional)
          </label>
          <input
            type="text"
            value={row.description}
            onChange={e => onChange({ description: e.target.value })}
            placeholder="Additional details…"
            className="w-full rounded border px-3 py-1.5 text-sm"
            style={{
              borderColor: 'var(--color-straw)',
              backgroundColor: 'var(--color-ivory)',
              color: 'var(--color-bark)',
              fontFamily: 'var(--font-ui)',
              outline: 'none',
            }}
          />
        </div>

        {/* Image upload */}
        <div>
          <label className="block text-xs mb-1" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
            Photo (optional)
          </label>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleImageChange}
            className="text-sm"
            style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}
          />
          {row.imageFile && !row.imageId && !row.imageUploading && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-earth)' }}>
              {row.imageFile.name} — will upload on submit
            </p>
          )}
          {row.imageUploading && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-earth)' }}>Uploading…</p>
          )}
          {row.imageError && (
            <p className="text-xs mt-1" style={{ color: '#dc2626' }}>{row.imageError}</p>
          )}
          {row.imageId && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-pasture-text)' }}>✓ Photo uploaded (ID {row.imageId})</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ViolationEntryPage() {
  const { codes, loading: codesLoading } = useViolationCodes();
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [tenantsLoading, setTenantsLoading] = useState(true);
  const [pastResolveActions, setPastResolveActions] = useState<string[]>([]);

  const [selectedTenantId, setSelectedTenantId] = useState<number | null>(null);
  const [tenantQuery, setTenantQuery] = useState('');
  const [tenantOpen, setTenantOpen] = useState(false);
  const tenantRef = useRef<HTMLDivElement>(null);

  const [violationDate, setViolationDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().slice(0, 10);
  });
  const [rows, setRows] = useState<ViolationRowData[]>([newRow()]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load tenants
  useEffect(() => {
    fetch('/api/tenants')
      .then(r => r.json() as Promise<{ tenants: Tenant[] }>)
      .then(({ tenants }) => setTenants(tenants))
      .catch(() => {})
      .finally(() => setTenantsLoading(false));
  }, []);

  // Load past resolve actions for autocomplete
  useEffect(() => {
    fetch('/api/violations')
      .then(r => r.json() as Promise<{ violations: Array<{ ResolveAction?: string }> }>)
      .then(({ violations }) => {
        const unique = [...new Set(violations.flatMap(v => v.ResolveAction ? [v.ResolveAction] : []))];
        setPastResolveActions(unique);
      })
      .catch(() => {});
  }, []);

  // Close tenant dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (tenantRef.current && !tenantRef.current.contains(e.target as Node)) {
        setTenantOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectedTenant = tenants.find(t => t.TenantID === selectedTenantId) ?? null;
  const filteredTenants = tenantQuery.trim()
    ? tenants.filter(t => `${t.FirstName} ${t.LastName}`.toLowerCase().includes(tenantQuery.toLowerCase()))
    : tenants;

  function updateRow(id: string, patch: Partial<ViolationRowData>) {
    setRows(prev => prev.map(r => r.id === id ? { ...r, ...patch } : r));
  }

  function removeRow(id: string) {
    setRows(prev => prev.length > 1 ? prev.filter(r => r.id !== id) : prev);
  }

  function addRow() {
    setRows(prev => [...prev, newRow()]);
  }

  const isValid = selectedTenantId !== null && rows.every(r => r.violationCodeId !== null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      // Step 1: Create violations (no imageId needed)
      const payload = rows.map(row => ({
        tenantId: selectedTenantId!,
        violationCodeId: row.violationCodeId!,
        violationDate: `${violationDate}T00:00:00`,
        dueDate: `${dueDate}T00:00:00`,
        resolveAction: row.resolveAction || undefined,
        description: row.description || undefined,
      }));

      const res = await fetch('/api/violations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Submission failed' })) as { error?: string };
        throw new Error(body.error ?? 'Submission failed');
      }

      const { violations: created } = await res.json() as { violations: Array<{ ViolationID: number }> };

      // Step 2: Upload images in parallel (violation must exist first)
      await Promise.all(
        rows.map(async (row, idx) => {
          if (!row.imageFile) return;
          const violationId = created[idx]?.ViolationID;
          if (!violationId) return;
          updateRow(row.id, { imageUploading: true });
          try {
            const form = new FormData();
            form.append('image', row.imageFile);
            const imgRes = await fetch(`/api/violations/${violationId}/image`, { method: 'POST', body: form });
            if (!imgRes.ok) {
              const err = await imgRes.json().catch(() => ({ error: 'Photo upload failed' })) as { error?: string };
              updateRow(row.id, { imageUploading: false, imageError: err.error ?? 'Photo upload failed' });
            } else {
              const { imageId } = await imgRes.json() as { imageId: number };
              updateRow(row.id, { imageId, imageUploading: false });
            }
          } catch {
            updateRow(row.id, { imageUploading: false, imageError: 'Photo upload failed' });
          }
        })
      );

      setSubmitSuccess(true);
      setRows([newRow()]);
      setSelectedTenantId(null);
      setTenantQuery('');
      setViolationDate(new Date().toISOString().slice(0, 10));
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    borderColor: 'var(--color-straw)',
    backgroundColor: 'var(--color-ivory)',
    color: 'var(--color-bark)',
    fontFamily: 'var(--font-ui)',
    outline: 'none',
  };

  return (
    <div className="p-8 max-w-2xl">
      <h2
        className="text-2xl mb-1"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bark)', fontWeight: 600 }}
      >
        New Violation Report
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
        Select a tenant, set the date, and add one or more violations.
      </p>

      {submitSuccess && (
        <div
          className="mb-4 px-4 py-3 rounded text-sm"
          style={{ backgroundColor: 'var(--color-pasture-bg)', color: 'var(--color-pasture-text)', fontFamily: 'var(--font-ui)' }}
        >
          Violations submitted successfully.
        </div>
      )}

      {submitError && (
        <div
          className="mb-4 px-4 py-3 rounded text-sm"
          style={{ backgroundColor: '#fef2f2', color: '#dc2626', fontFamily: 'var(--font-ui)' }}
        >
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Tenant selector */}
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
            Tenant <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <div ref={tenantRef} style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder={tenantsLoading ? 'Loading tenants…' : 'Search tenant name…'}
              value={tenantOpen ? tenantQuery : (selectedTenant ? `${selectedTenant.FirstName} ${selectedTenant.LastName}` : tenantQuery)}
              onChange={e => { setTenantQuery(e.target.value); setTenantOpen(true); if (!e.target.value) setSelectedTenantId(null); }}
              onFocus={() => { setTenantOpen(true); setTenantQuery(''); }}
              disabled={tenantsLoading}
              className="w-full rounded border px-3 py-1.5 text-sm"
              style={inputStyle}
            />
            {tenantOpen && filteredTenants.length > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 50,
                  backgroundColor: 'var(--color-ivory)',
                  border: '1px solid var(--color-straw)',
                  borderRadius: '4px',
                  maxHeight: '200px',
                  overflowY: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                {filteredTenants.map(t => (
                  <button
                    key={t.TenantID}
                    type="button"
                    onMouseDown={() => { setSelectedTenantId(t.TenantID); setTenantQuery(''); setTenantOpen(false); }}
                    className="w-full text-left px-3 py-2 text-sm"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bark)', borderBottom: '1px solid var(--color-straw)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-dust)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    {t.FirstName} {t.LastName}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Shared violation date + due date */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
              Violation Date
            </label>
            <input
              type="date"
              value={violationDate}
              onChange={e => setViolationDate(e.target.value)}
              className="rounded border px-3 py-1.5 text-sm"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="rounded border px-3 py-1.5 text-sm"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Violation rows */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-bark)', fontFamily: 'var(--font-ui)' }}>
            Violations
          </p>
          {codesLoading ? (
            <p className="text-sm" style={{ color: 'var(--color-earth)' }}>Loading violation codes…</p>
          ) : (
            <>
              {rows.map(row => (
                <ViolationRowForm
                  key={row.id}
                  row={row}
                  codes={codes}
                  resolveActionSuggestions={pastResolveActions}
                  canRemove={rows.length > 1}
                  onChange={patch => updateRow(row.id, patch)}
                  onRemove={() => removeRow(row.id)}
                />
              ))}
              <button
                type="button"
                onClick={addRow}
                className="text-sm px-3 py-1.5 rounded"
                style={{
                  border: '1px dashed var(--color-straw)',
                  color: 'var(--color-earth)',
                  fontFamily: 'var(--font-ui)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-dust)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >
                + Add Another Violation
              </button>
            </>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!isValid || submitting}
            className="px-6 py-2 rounded text-sm font-medium"
            style={{
              backgroundColor: isValid && !submitting ? 'var(--color-bark)' : 'var(--color-straw)',
              color: isValid && !submitting ? 'var(--color-ivory)' : 'var(--color-earth)',
              fontFamily: 'var(--font-ui)',
              cursor: isValid && !submitting ? 'pointer' : 'not-allowed',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Submitting…' : `Submit ${rows.length === 1 ? 'Violation' : `${rows.length} Violations`}`}
          </button>
          {!isValid && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-earth)', fontFamily: 'var(--font-ui)' }}>
              {!selectedTenantId ? 'Select a tenant to continue.' : 'Each violation must have a code selected.'}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
