import { useState } from 'react';
import { PetFeeAuditPage } from './features/audits/PetFeeAuditPage.tsx';

type Page = 'pet-fee-audit';

const navItems: { id: Page; label: string }[] = [
  { id: 'pet-fee-audit', label: 'Pet Fee Audit' },
];

export default function App() {
  const [page, setPage] = useState<Page>('pet-fee-audit');

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-56 bg-gray-900 text-gray-100 flex flex-col">
        <div className="px-5 py-5 border-b border-gray-700">
          <h1 className="text-sm font-semibold tracking-wider uppercase text-gray-400">
            Rolling Acres
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Property Dashboard</p>
        </div>
        <nav className="flex-1 py-4 px-2 space-y-1">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Audits
          </p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                page === item.id
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        {page === 'pet-fee-audit' && <PetFeeAuditPage />}
      </main>
    </div>
  );
}
