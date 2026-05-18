import { useState, useRef, useCallback } from 'react';
import { PetFeeAuditPage } from './features/audits/PetFeeAuditPage.tsx';
import { PetRegistrationPage } from './features/petscreening/PetRegistrationPage.tsx';
import { AnalyticsPage } from './features/analytics/AnalyticsPage.tsx';
import { ViolationDashboardPage } from './features/violations/ViolationDashboardPage.tsx';
import { ViolationEntryPage } from './features/violations/ViolationEntryPage.tsx';
import { ViolationNotifyPage } from './features/violations/ViolationNotifyPage.tsx';
import { useCurrentUser } from './hooks/useCurrentUser.ts';
import { RefreshButton } from './components/RefreshButton.tsx';

type Page = 'pet-fee-audit' | 'pet-registration-check' | 'analytics' | 'violations-dashboard' | 'violations-new' | 'violations-notify';

const navItems: { id: Page; label: string; section: string }[] = [
  { id: 'pet-fee-audit', label: 'Pet Fee Audit', section: 'Audits' },
  { id: 'pet-registration-check', label: 'Pet Registration Check', section: 'Audits' },
  { id: 'violations-dashboard', label: 'Dashboard', section: 'Violations' },
  { id: 'violations-new', label: 'Quick Entry', section: 'Violations' },
  { id: 'analytics', label: 'Analytics', section: 'Analytics' },
];

export default function App() {
  const [page, setPage] = useState<Page>('pet-fee-audit');
  const [notifyTenantId, setNotifyTenantId] = useState<number | null>(null);
  const { user } = useCurrentUser();
  const reloadRef = useRef<(() => void) | null>(null);
  const handleReloadRef = useCallback((fn: () => void) => { reloadRef.current = fn; }, []);

  return (
    <div className="flex h-screen" style={{ backgroundColor: 'var(--color-field)' }}>
      <aside
        className="w-60 flex flex-col shrink-0"
        style={{
          backgroundColor: 'var(--color-sidebar-bg)',
          borderRight: '1px solid var(--color-sidebar-border)',
        }}
      >
        {/* Brand */}
        <div className="px-6 py-6" style={{ borderBottom: '1px solid var(--color-sidebar-border)' }}>
          <h1
            className="text-xl tracking-wide"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-sidebar-brand)',
              letterSpacing: '0.04em',
            }}
          >
            Rolling Acres
          </h1>
          <p className="text-xs mt-0.5 tracking-widest uppercase" style={{ color: 'var(--color-sidebar-muted)', letterSpacing: '0.12em' }}>
            Property Dashboard
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 px-3 space-y-0.5">
          {(['Audits', 'Violations', 'Analytics'] as const).map(section => {
            const sectionItems = navItems.filter(i => i.section === section);
            return (
              <div key={section} className={section !== 'Audits' ? 'mt-4' : ''}>
                <p
                  className="px-3 text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-sidebar-muted)', letterSpacing: '0.16em' }}
                >
                  {section}
                </p>
                {sectionItems.map((item) => {
                  const isActive = page === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setPage(item.id)}
                      className="w-full text-left px-3 py-2 rounded text-sm transition-all duration-150"
                      style={{
                        color: isActive ? 'var(--color-sidebar-brand)' : 'var(--color-sidebar-text)',
                        backgroundColor: isActive ? 'var(--color-sidebar-active)' : 'transparent',
                        borderLeft: isActive ? '2px solid var(--color-amber)' : '2px solid transparent',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: isActive ? 500 : 400,
                        paddingLeft: isActive ? '10px' : '12px',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-sidebar-hover)';
                          (e.currentTarget as HTMLElement).style.color = 'var(--color-sidebar-brand)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                          (e.currentTarget as HTMLElement).style.color = 'var(--color-sidebar-text)';
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* Refresh + User footer */}
        <div
          className="px-4 py-4 space-y-3"
          style={{ borderTop: '1px solid var(--color-sidebar-border)' }}
        >
          <RefreshButton onRefreshed={() => reloadRef.current?.()} />
          {user && (
            <p className="text-xs truncate px-1" style={{ color: 'var(--color-sidebar-muted)' }}>
              {user.name ?? user.email}
            </p>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {page === 'pet-fee-audit' && <PetFeeAuditPage />}
        {page === 'pet-registration-check' && (
          <PetRegistrationPage onReloadRef={handleReloadRef} />
        )}
        {page === 'analytics' && <AnalyticsPage />}
        {page === 'violations-dashboard' && (
          <ViolationDashboardPage onNotify={(tenantId) => { setNotifyTenantId(tenantId); setPage('violations-notify'); }} />
        )}
        {page === 'violations-new' && <ViolationEntryPage />}
        {page === 'violations-notify' && (
          <ViolationNotifyPage tenantId={notifyTenantId} />
        )}
      </main>
    </div>
  );
}
