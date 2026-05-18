export class RMApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly path: string,
  ) {
    super(message);
    this.name = 'RMApiError';
  }
}

export interface RMCredentials {
  baseUrl: string;
  username: string;
  password: string;
  locationId: number;
}

export interface RMClient {
  getAll<T>(path: string, queryString?: string): Promise<T[]>;
  post<T>(path: string, body: unknown): Promise<T>;
  postMultipart<T>(path: string, formData: FormData): Promise<T>;
}

async function fetchToken(credentials: RMCredentials): Promise<string> {
  const url = `${credentials.baseUrl}/Authentication/AuthorizeUser`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      Username: credentials.username,
      Password: credentials.password,
      LocationID: credentials.locationId,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new RMApiError(response.status, `Authentication failed: ${body}`, '/Authentication/AuthorizeUser');
  }

  return (await response.json()) as string;
}

// Module-level token cache — shared across requests within the same isolate.
// Stores a pending Promise so concurrent calls share one in-flight auth request.
const tokenCache = new Map<string, Promise<string>>();
// Tracks which token promises have had at least one successful response.
// A 401 on an unproven token means the request is bad, not the token — don't re-auth.
const provenTokens = new Set<Promise<string>>();

export function createClient(credentials: RMCredentials): RMClient {
  const cacheKey = `${credentials.username}@${credentials.baseUrl}:${credentials.locationId}`;

  function fetchAndCacheToken(): Promise<string> {
    const p = fetchToken(credentials).catch(err => {
      tokenCache.delete(cacheKey);
      throw err;
    });
    tokenCache.set(cacheKey, p);
    return p;
  }

  function getTokenPromise(): Promise<string> {
    return tokenCache.get(cacheKey) ?? fetchAndCacheToken();
  }

  async function getAll<T>(path: string, queryString?: string, isRetry = false): Promise<T[]> {
    const tokenPromise = getTokenPromise();
    const token = await tokenPromise;
    const results: T[] = [];
    let pageNumber = 1;
    let totalResults: number | null = null;

    do {
      const qs = [
        `pageSize=1000`,
        `pageNumber=${pageNumber}`,
        ...(queryString ? [queryString] : []),
      ].join('&');

      const url = `${credentials.baseUrl}${path}?${qs}`;

      const response = await fetch(url, {
        headers: { 'X-RM12Api-ApiToken': token, Accept: 'application/json' },
      });

      if (response.status === 401 && !isRetry) {
        if (provenTokens.has(tokenPromise)) {
          provenTokens.delete(tokenPromise);
          tokenCache.delete(cacheKey);
          return getAll<T>(path, queryString, true);
        }
        const body = await response.text().catch(() => '');
        throw new RMApiError(401, body, path);
      }

      if (response.status === 204) return results;

      if (!response.ok) {
        const body = await response.text().catch(() => '');
        throw new RMApiError(response.status, body, path);
      }

      provenTokens.add(tokenPromise);

      if (totalResults === null) {
        const header = response.headers.get('X-Total-Results');
        totalResults = header ? parseInt(header, 10) : 0;
      }

      const page = (await response.json()) as T[];
      results.push(...page);
      pageNumber++;
    } while (results.length < (totalResults ?? 0));

    return results;
  }

  async function post<T>(path: string, body: unknown, isRetry = false): Promise<T> {
    const tokenPromise = getTokenPromise();
    const token = await tokenPromise;
    const url = `${credentials.baseUrl}${path}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-RM12Api-ApiToken': token,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 401 && !isRetry) {
      if (provenTokens.has(tokenPromise)) {
        provenTokens.delete(tokenPromise);
        tokenCache.delete(cacheKey);
        return post<T>(path, body, true);
      }
      const text = await response.text().catch(() => '');
      throw new RMApiError(401, text, path);
    }

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new RMApiError(response.status, text, path);
    }

    provenTokens.add(tokenPromise);
    return response.json() as Promise<T>;
  }

  async function postMultipart<T>(path: string, formData: FormData, isRetry = false): Promise<T> {
    const tokenPromise = getTokenPromise();
    const token = await tokenPromise;
    const url = `${credentials.baseUrl}${path}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-RM12Api-ApiToken': token,
        // Do NOT set Content-Type — fetch sets it with boundary for multipart
      },
      body: formData,
    });

    if (response.status === 401 && !isRetry) {
      if (provenTokens.has(tokenPromise)) {
        provenTokens.delete(tokenPromise);
        tokenCache.delete(cacheKey);
        return postMultipart<T>(path, formData, true);
      }
      const text = await response.text().catch(() => '');
      throw new RMApiError(401, text, path);
    }

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new RMApiError(response.status, text, path);
    }

    provenTokens.add(tokenPromise);
    return response.json() as Promise<T>;
  }

  return { getAll, post, postMultipart };
}
