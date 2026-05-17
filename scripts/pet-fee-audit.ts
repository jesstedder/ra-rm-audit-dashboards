import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';
import { findTenantsWithPetFeeButNoPet } from '../src/lib/rm/audits/pet-fee.js';

const baseUrl = process.env['RM_BASEURL'];
const username = process.env['RM_USERNAME'];
const password = process.env['RM_PASSWORD'];
const locationId = process.env['RM_LOCATIONID'];

if (!baseUrl || !username || !password || !locationId) {
  console.error('Error: RM_BASEURL, RM_USERNAME, RM_PASSWORD, and RM_LOCATIONID must all be set in .env');
  process.exit(1);
}

const client = createClient({
  baseUrl,
  username,
  password,
  locationId: parseInt(locationId, 10),
});

console.log('Running pet fee audit...\n');

const results = await findTenantsWithPetFeeButNoPet(client);

if (results.length === 0) {
  console.log('No issues found — all pet fees have a corresponding pet on file.');
  process.exit(0);
}

const col = (s: string, width: number) => s.padEnd(width).slice(0, width);

const header = [
  col('Tenant', 30),
  col('Unit ID', 10),
  col('Charge Type', 15),
  col('Amount', 10),
].join('  ');

const divider = '-'.repeat(header.length);

console.log(header);
console.log(divider);

for (const r of results) {
  console.log(
    [
      col(r.tenantName, 30),
      col(r.unitId !== undefined ? String(r.unitId) : '—', 10),
      col(r.chargeTypeName, 15),
      col(`$${r.amount.toFixed(2)}`, 10),
    ].join('  '),
  );
}

console.log(divider);
console.log(`\n${results.length} tenant(s) charged a pet fee with no pet on file.`);
