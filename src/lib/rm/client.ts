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

export function createClient(credentials: RMCredentials): RMClient {
  let cachedToken: string | null = null;

  async function getToken(): Promise<string> {
    if (!cachedToken) {
      cachedToken = await fetchToken(credentials);
    }
    return cachedToken;
  }

  async function getAll<T>(path: string, queryString?: string, isRetry = false): Promise<T[]> {
    const token = await getToken();
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
        cachedToken = null;
        return getAll<T>(path, queryString, true);
      }

      if (response.status === 204) return results;

      if (!response.ok) {
        const body = await response.text().catch(() => '');
        throw new RMApiError(response.status, body, path);
      }

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

  return { getAll };
}
