## 1. CF Dashboard Prerequisites (manual steps)

- [x] 1.1 In CF Workers dashboard: add custom domain `ra.megroudebush.com` to the `rm-api` Worker
- [x] 1.2 In CF Zero Trust dashboard: create a Self-Hosted Access Application for `ra.megroudebush.com` using the existing Auth0 IdP and access policy
- [x] 1.3 Copy the AUD tag from the Access Application overview page
- [x] 1.4 Add `CF_ACCESS_AUD` as a Worker secret via Cloudflare dashboard or `npx wrangler secret put CF_ACCESS_AUD`

## 2. Dependencies & Config

- [x] 2.1 Add `jose` to `package.json` and run `npm install`
- [x] 2.2 Set `workers_dev = false` in `wrangler.toml`
- [x] 2.3 Add route `{ pattern = "ra.megroudebush.com/*", zone_name = "megroudebush.com" }` to `wrangler.toml`
- [x] 2.4 Add `CF_ACCESS_AUD = ""` placeholder comment to `wrangler.toml` vars block
- [x] 2.5 Add `DEV_USER_EMAIL = "local@rolling-acres.com"` and `DEV_USER_NAME = "Local Dev"` to `.dev.vars`

## 3. Auth Library (`src/lib/auth/cf-access.ts`)

- [x] 3.1 Create `src/lib/auth/cf-access.ts` with `UserInfo` interface `{ email: string; name?: string; sub: string }`
- [x] 3.2 Implement `verifyAccessToken(token: string, aud: string): Promise<UserInfo>` using `jose` `createRemoteJWKSet` + `jwtVerify` against `432milton.cloudflareaccess.com/cdn-cgi/access/certs`
- [x] 3.3 Implement `getDevUser(env): UserInfo | null` — returns identity from `DEV_USER_EMAIL`/`DEV_USER_NAME` env vars if set, null otherwise

## 4. Worker Auth Middleware & `/api/me`

- [x] 4.1 Add `CF_ACCESS_AUD`, `DEV_USER_EMAIL`, `DEV_USER_NAME` to the `Env` interface in `src/worker/index.ts`
- [x] 4.2 Add `Variables: { user: UserInfo }` to the Hono app type
- [x] 4.3 Replace the existing `app.use('/api/*', cors())` with two middleware calls: cors first, then auth middleware
- [x] 4.4 Implement auth middleware: check `getDevUser` first; if null, read `Cf-Access-Jwt-Assertion` header and call `verifyAccessToken`; on failure return 401; on success call `c.set('user', userInfo)`
- [x] 4.5 Add `GET /api/me` route that returns `c.json(c.get('user'))`

## 5. Frontend User Display

- [x] 5.1 Create `src/web/src/hooks/useCurrentUser.ts` — fetch `/api/me` on mount, return `{ user, loading, error }`
- [x] 5.2 Add user display to `src/web/src/App.tsx` sidebar footer: show `user.name ?? user.email`, handle loading state gracefully (show nothing while loading)

## 6. Verification

- [x] 6.1 Run `npm run dev` — confirm wrangler starts and `GET /api/me` returns `{ email: "local@rolling-acres.com", name: "Local Dev", sub: "dev" }`
- [x] 6.2 Confirm React sidebar shows "Local Dev" in the footer
- [x] 6.3 Confirm existing `GET /api/audits/pet-fees` still works in dev (auth middleware passes through)
- [x] 6.4 After CF dashboard steps (section 1): deploy with `npm run deploy`, navigate to `ra.megroudebush.com`, confirm Auth0 login redirect, confirm `/api/me` returns real user identity
- [x] 6.5 Confirm sidebar shows real name or email after login
