import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createClient, RMApiError } from '../lib/rm/client.js';
import { findTenantsWithPetFeeButNoPet } from '../lib/rm/audits/pet-fee.js';

interface Env {
  RM_BASEURL: string;
  RM_USERNAME: string;
  RM_PASSWORD: string;
  RM_LOCATIONID: string;
  ASSETS: Fetcher;
}

const app = new Hono<{ Bindings: Env }>();

app.use('/api/*', cors());

app.get('/api/audits/pet-fees', async (c) => {
  const { RM_BASEURL, RM_USERNAME, RM_PASSWORD, RM_LOCATIONID } = c.env;

  if (!RM_BASEURL || !RM_USERNAME || !RM_PASSWORD || !RM_LOCATIONID) {
    return c.json({ error: 'Missing required RM credentials in Worker environment' }, 500);
  }

  try {
    const client = createClient({
      baseUrl: RM_BASEURL,
      username: RM_USERNAME,
      password: RM_PASSWORD,
      locationId: parseInt(RM_LOCATIONID, 10),
    });

    const results = await findTenantsWithPetFeeButNoPet(client);
    return c.json(results);
  } catch (err) {
    if (err instanceof RMApiError) {
      return c.json({ error: err.message, upstream: err.status }, 502);
    }
    throw err;
  }
});

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
