import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';
const client = createClient({ baseUrl: process.env['RM_BASEURL']!, username: process.env['RM_USERNAME']!, password: process.env['RM_PASSWORD']!, locationId: parseInt(process.env['RM_LOCATIONID']!, 10) });
const types = await client.getAll<Record<string, unknown>>('ImageTypes', 'fields=ImageTypeID,Name,RelatedObjectType');
console.log(JSON.stringify(types, null, 2));
