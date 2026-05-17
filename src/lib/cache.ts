import { config } from '../config.js';

// In-memory fallback for local dev where Cloudflare Cache API may not be available
const memCache = new Map<string, { data: unknown; expiresAt: number }>();

const CACHE_BASE = config.cache.baseUrl;

async function getCloudflareCache(): Promise<Cache | null> {
  try {
    return await caches.open('rm-api');
  } catch {
    return null;
  }
}

export async function getCached<T>(key: string): Promise<T | null> {
  const cache = await getCloudflareCache();

  if (cache) {
    try {
      const res = await cache.match(new Request(`${CACHE_BASE}/${key}`));
      if (res) return res.json() as Promise<T>;
      return null;
    } catch {
      // fall through to mem cache
    }
  }

  // In-memory fallback
  const entry = memCache.get(key);
  if (entry && entry.expiresAt > Date.now()) return entry.data as T;
  memCache.delete(key);
  return null;
}

export async function setCached<T>(key: string, data: T, ttlSeconds: number): Promise<void> {
  const now = new Date().toISOString();
  const cache = await getCloudflareCache();

  if (cache) {
    try {
      const res = new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `max-age=${ttlSeconds}`,
        },
      });
      const tsRes = new Response(now, {
        headers: { 'Content-Type': 'text/plain', 'Cache-Control': `max-age=${ttlSeconds}` },
      });
      await Promise.all([
        cache.put(new Request(`${CACHE_BASE}/${key}`), res),
        cache.put(new Request(`${CACHE_BASE}/${key}:ts`), tsRes),
      ]);
      return;
    } catch {
      // fall through to mem cache
    }
  }

  // In-memory fallback
  memCache.set(key, { data, expiresAt: Date.now() + ttlSeconds * 1000 });
  memCache.set(`${key}:ts`, { data: now, expiresAt: Date.now() + ttlSeconds * 1000 });
}

export async function getCachedAt(key: string): Promise<string | null> {
  const cache = await getCloudflareCache();

  if (cache) {
    try {
      const res = await cache.match(new Request(`${CACHE_BASE}/${key}:ts`));
      if (res) return res.text();
      return null;
    } catch {
      // fall through
    }
  }

  const entry = memCache.get(`${key}:ts`);
  if (entry && entry.expiresAt > Date.now()) return entry.data as string;
  return null;
}

export async function bustCache(...keys: string[]): Promise<void> {
  const cache = await getCloudflareCache();
  const allKeys = keys.flatMap(k => [k, `${k}:ts`]);

  if (cache) {
    try {
      await Promise.all(allKeys.map(key => cache.delete(new Request(`${CACHE_BASE}/${key}`))));
    } catch {
      // fall through
    }
  }

  for (const key of allKeys) memCache.delete(key);
}
