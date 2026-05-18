import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

const results = await client.getAll<{ ViolationID: number; ImageID: number }>(
  '/Violations',
  'filters=ViolationID,eq,690&fields=ViolationID,ImageID',
);
console.log('ViolationID=690 ImageID:', results[0]?.ImageID);
