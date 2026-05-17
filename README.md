# Rolling Acres — Property Dashboard

An audit and reporting dashboard for the Rolling Acres RentManager account. Built with TypeScript, Hono (Cloudflare Workers), and React.

## Prerequisites

- Node.js 18+
- A Cloudflare account (for deployment)
- RentManager API credentials (username, password, location ID)

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Configure environment variables**

Create a `.env` file for local console scripts:

```bash
RM_BASEURL=https://rollinga.api.rentmanager.com
RM_USERNAME=your_username
RM_PASSWORD=your_password
RM_LOCATIONID=1
```

Create a `.dev.vars` file for the local Cloudflare Worker (same values):

```bash
RM_BASEURL=https://rollinga.api.rentmanager.com
RM_USERNAME=your_username
RM_PASSWORD=your_password
RM_LOCATIONID=1
```

Both files are gitignored and never committed.

## Running Locally

**Full stack (recommended)** — Wrangler dev on port 8787, Vite with HMR on port 5173:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

The Vite dev server proxies all `/api/*` requests to the local Worker, so the React app gets live data with full hot-module reloading.

**API only** — useful when only working on backend changes:

```bash
npm run dev:api
```

Then call endpoints directly: `curl http://localhost:8787/api/audits/pet-fees`

## Console Scripts

Scripts run locally against the live RentManager API using `.env` credentials:

```bash
npm run audit:pet-fees    # Print tenants charged a pet fee with no pet on file
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Wrangler + Vite concurrently |
| `npm run dev:api` | Start Wrangler Worker only (port 8787) |
| `npm run dev:web` | Start Vite dev server only (port 5173) |
| `npm run build` | Build React app to `dist/` |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run audit:pet-fees` | Run pet fee audit console script |

## Deployment

**1. Authenticate with Cloudflare**

```bash
npx wrangler login
```

**2. Set production secrets**

```bash
npx wrangler secret put RM_BASEURL
npx wrangler secret put RM_USERNAME
npx wrangler secret put RM_PASSWORD
npx wrangler secret put RM_LOCATIONID
```

**3. Deploy**

```bash
npm run deploy
```

This builds the React app and deploys both the Worker and static assets in one step.

## Project Structure

```
src/
  lib/rm/              RentManager API client library
    client.ts          Authenticated fetch wrapper with pagination
    charges.ts         ChargeTypes and RecurringCharges
    pets.ts            Pets
    tenants.ts         Tenants
    audits/
      pet-fee.ts       Pet fee audit logic

  worker/
    index.ts           Hono app — Cloudflare Worker entry point

  web/                 React frontend (Vite)
    src/
      App.tsx          Shell with sidebar nav
      features/
        audits/
          PetFeeAuditPage.tsx   Pet fee audit table
          usePetFeeAudit.ts     Data fetching hook

scripts/               Local console scripts (run with tsx + .env)
  pet-fee-audit.ts

wrangler.toml          Cloudflare Worker config
vite.config.ts         Vite build config
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/audits/pet-fees` | Tenants charged a pet fee with no pet on file |

## RentManager API Notes

- Base URL: `https://rollinga.api.rentmanager.com`
- Auth: POST `/Authentication/AuthorizeUser` with username/password — returns a short-lived token
- Token expires after 24 hours or 15 minutes of inactivity (client re-authenticates automatically)
- Rate limit: 500 requests/hour
