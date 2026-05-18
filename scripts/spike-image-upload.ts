/**
 * Spike: POST /Violations/{id}/Image — one process, one token, all attempts.
 *
 * npx tsx scripts/spike-image-upload.ts
 */

import 'dotenv/config';

const BASE = process.env['RM_BASEURL']!;

// Authenticate ONCE for the entire script
const authRes = await fetch(`${BASE}/Authentication/AuthorizeUser`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({
    Username: process.env['RM_USERNAME'],
    Password: process.env['RM_PASSWORD'],
    LocationID: parseInt(process.env['RM_LOCATIONID']!, 10),
  }),
});
if (!authRes.ok) { console.error('Auth failed:', await authRes.text()); process.exit(1); }
const token = await authRes.json() as string;
console.log('Authenticated.\n');

const violationId = 690;
const pngBytes = Buffer.from(
  '89504e470d0a1a0a0000000d4948445200000001000000010802000000907753de0000000c4944415478016360f8cfc00000000200016e21bc330000000049454e44ae426082',
  'hex',
);
const imageFile = new File([pngBytes], 'test.png', { type: 'image/png' });
const modelBlob = new Blob([JSON.stringify({ ImageTypeID: 7, FileName: 'test.png' })], { type: 'application/json' });

async function tryUpload(label: string, form: FormData): Promise<boolean> {
  process.stdout.write(`${label} ... `);
  const res = await fetch(`${BASE}/Violations/${violationId}/Image`, {
    method: 'POST',
    headers: { 'X-RM12Api-ApiToken': token, Accept: 'application/json' },
    body: form,
  });
  const text = await res.text();
  if (res.ok) {
    console.log(`✓ SUCCEEDED!\n${text}`);
    return true;
  }
  const msg = JSON.parse(text)?.DeveloperMessage ?? text;
  console.log(`✗ ${res.status}: ${msg}`);
  return false;
}

const modelJson = JSON.stringify({ ImageTypeID: 7, FileName: 'test.png' });

// Plain string appends (no Blob/filename — sends as a regular form data value, not a file part)
const f0 = new FormData(); f0.append('item', modelJson); f0.append('FileStream', imageFile, 'test.png');
const f1 = new FormData(); f1.append('Image', modelJson); f1.append('FileStream', imageFile, 'test.png');
const f2 = new FormData(); f2.append('model', modelJson); f2.append('FileStream', imageFile, 'test.png');
const f3 = new FormData(); f3.append('imageModel', modelJson); f3.append('FileStream', imageFile, 'test.png');
// Try the JSON as the sole text field alongside a file named 'file' instead of 'FileStream'
const f4 = new FormData(); f4.append('item', modelJson); f4.append('file', imageFile, 'test.png');
// Try raw JSON POST (not multipart) with FileName field only — see what field RM complains is missing
const f5 = new FormData(); f5.append('item', JSON.stringify({ ImageTypeID: 7 })); f5.append('FileStream', imageFile, 'test.png');

await tryUpload('item=plain string JSON + FileStream', f0) ||
await tryUpload('Image=plain string JSON + FileStream', f1) ||
await tryUpload('model=plain string JSON + FileStream', f2) ||
await tryUpload('imageModel=plain string JSON + FileStream', f3) ||
await tryUpload('item=plain string JSON + file', f4) ||
await tryUpload('item=JSON (no FileName) + FileStream', f5);

console.log(`\nViolationID=${violationId} — delete from RM when done.`);
