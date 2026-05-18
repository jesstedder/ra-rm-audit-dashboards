import { useState, useEffect, useCallback } from 'react';

export type Page = 'pet-fee-audit' | 'pet-registration-check' | 'analytics' | 'violations-dashboard' | 'violations-new' | 'violations-notify';

const DEFAULT_PAGE: Page = 'pet-fee-audit';

const VALID_PAGES = new Set<Page>([
  'pet-fee-audit',
  'pet-registration-check',
  'analytics',
  'violations-dashboard',
  'violations-new',
  'violations-notify',
]);

function pageFromHash(): Page {
  const raw = window.location.hash.slice(2); // strip '#/'
  return VALID_PAGES.has(raw as Page) ? (raw as Page) : DEFAULT_PAGE;
}

export function useHashNav() {
  const [page, setPage] = useState<Page>(pageFromHash);

  useEffect(() => {
    function onHashChange() {
      setPage(pageFromHash());
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((p: Page) => {
    window.location.hash = `/${p}`;
  }, []);

  return { page, navigate };
}
