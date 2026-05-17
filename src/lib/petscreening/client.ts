import { config } from '../../config.js';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const BASE_URL = config.ps.baseUrl;

export interface PsCredentials {
  username: string;
  password: string;
}

export interface PsClient {
  get<T>(path: string): Promise<T>;
}

async function getCsrfToken(cookie: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/`, {
    headers: { 'User-Agent': USER_AGENT, Cookie: cookie },
  });
  const html = await res.text();
  const match = html.match(/<meta name="csrf-token" content="([^"]+)"/);
  if (!match?.[1]) {
    throw new Error('Could not extract CSRF token from PetScreening landing page');
  }
  return match[1];
}

function extractSetCookies(headers: Headers): string {
  const cookies: string[] = [];
  headers.forEach((value, name) => {
    if (name.toLowerCase() === 'set-cookie') {
      const nameVal = value.split(';')[0] ?? '';
      if (nameVal) cookies.push(nameVal);
    }
  });
  return cookies.join('; ');
}

export async function createPsClient(credentials: PsCredentials): Promise<PsClient> {
  // Step 1: Get session cookie + CSRF token
  const landingRes = await fetch(`${BASE_URL}/`, {
    headers: { 'User-Agent': USER_AGENT },
    redirect: 'follow',
  });
  let sessionCookie = extractSetCookies(landingRes.headers);
  const html = await landingRes.text();
  const csrfMatch = html.match(/<meta name="csrf-token" content="([^"]+)"/);
  if (!csrfMatch?.[1]) {
    throw new Error('Could not extract CSRF token from PetScreening landing page');
  }
  let csrfToken: string = csrfMatch[1];

  // Step 2: Authenticate
  const authRes = await fetch(`${BASE_URL}/api/core/v1/session`, {
    method: 'POST',
    headers: new Headers({
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-Token': csrfToken,
      Cookie: sessionCookie,
    }),
    body: JSON.stringify({ user: { email: credentials.username, password: credentials.password } }),
    redirect: 'manual',
  });

  if (authRes.status !== 201) {
    throw new Error(`PetScreening authentication failed: HTTP ${authRes.status}`);
  }

  const authCookies = extractSetCookies(authRes.headers);
  if (authCookies) sessionCookie = authCookies;

  async function get<T>(path: string, isRetry = false): Promise<T> {
    if (!isRetry) {
      csrfToken = await getCsrfToken(sessionCookie).catch(() => csrfToken);
    }

    const res = await fetch(`${BASE_URL}${path}`, {
      headers: new Headers({
        'User-Agent': USER_AGENT,
        Accept: 'application/json',
        'X-CSRF-Token': csrfToken,
        Cookie: sessionCookie,
      }),
    });

    if (res.status === 401 && !isRetry) {
      const reauth = await createPsClient(credentials);
      return reauth.get<T>(path);
    }

    if (!res.ok) {
      throw new Error(`PetScreening API error: HTTP ${res.status} on ${path}`);
    }

    return res.json() as Promise<T>;
  }

  return { get };
}
