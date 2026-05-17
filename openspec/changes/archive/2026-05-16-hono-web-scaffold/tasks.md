## 1. Dependencies & Config

- [x] 1.1 Add `hono`, `@cloudflare/workers-types`, `concurrently` to `package.json`
- [x] 1.2 Add `react`, `react-dom`, `@types/react`, `@types/react-dom`, `@vitejs/plugin-react` to `package.json`
- [x] 1.3 Add `@tanstack/react-table`, `tailwindcss`, `@tailwindcss/vite` to `package.json`
- [x] 1.4 Run `npm install`
- [x] 1.5 Create `wrangler.toml` with Worker name, compatibility date, `[assets]` pointing to `./dist`, and `[vars]` placeholders for RM credentials
- [x] 1.6 Create `.dev.vars` with local RM credentials (RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID) — add to `.gitignore`
- [x] 1.7 Add dev/build/deploy scripts to `package.json`: `dev:api`, `dev:web`, `dev`, `build`, `deploy`

## 2. Hono Worker (`src/worker/`)

- [x] 2.1 Create `src/worker/index.ts` — Hono app with `cors()` middleware on `/api/*`, default export
- [x] 2.2 Define `Env` interface for Worker bindings (RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID)
- [x] 2.3 Add `GET /api/audits/pet-fees` route — read env, call `createClient`, call `findTenantsWithPetFeeButNoPet`, return JSON
- [x] 2.4 Add error handling: catch `RMApiError` → return 502; missing env → return 500
- [x] 2.5 Verify Worker starts with `wrangler dev` and `GET /api/audits/pet-fees` returns data

## 3. Vite + React Scaffold (`src/web/`)

- [x] 3.1 Create `vite.config.ts` with `@vitejs/plugin-react`, `@tailwindcss/vite`, output to `dist/`, proxy `/api` → `http://localhost:8787`
- [x] 3.2 Create `src/web/index.html` (Vite entry point)
- [x] 3.3 Create `src/web/src/main.tsx` (React root, `createRoot`)
- [x] 3.4 Create `src/web/src/App.tsx` with sidebar nav and main content area layout
- [x] 3.5 Add Tailwind base styles (`src/web/src/index.css`)

## 4. shadcn/ui Components

- [x] 4.1 Copy `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` component source into `src/web/src/components/ui/table.tsx`
- [x] 4.2 Copy `Badge` component into `src/web/src/components/ui/badge.tsx`
- [x] 4.3 Copy `Skeleton` component into `src/web/src/components/ui/skeleton.tsx`
- [x] 4.4 Add `cn` utility (`clsx` + `tailwind-merge`) to `src/web/src/lib/utils.ts`

## 5. Pet Fee Audit UI

- [x] 5.1 Create `src/web/src/features/audits/usePetFeeAudit.ts` — custom hook that fetches `/api/audits/pet-fees`, returns `{ data, loading, error }`
- [x] 5.2 Create `src/web/src/features/audits/PetFeeAuditPage.tsx` — uses hook, renders loading skeleton, error state, empty state, or data table
- [x] 5.3 Implement Tanstack Table with columns: Tenant (sortable, filterable), Unit ID, Charge Type, Amount
- [x] 5.4 Add text filter input above the table (filters by tenant name)
- [x] 5.5 Wire `PetFeeAuditPage` into `App.tsx` and add "Pet Fee Audit" sidebar nav link

## 6. End-to-End Verification

- [x] 6.1 Run `npm run build` — confirm Vite builds to `dist/` without errors
- [x] 6.2 Run `npm run dev` — confirm Vite and Wrangler start without errors
- [ ] 6.3 Open browser at `http://localhost:5173` — confirm React app loads with sidebar
- [ ] 6.4 Navigate to Pet Fee Audit page — confirm table loads with live data from the Worker
- [ ] 6.5 Test sort (click Tenant column header) and filter (type in filter input)
