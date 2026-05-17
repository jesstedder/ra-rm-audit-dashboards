import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';
import { getAllPets } from '../src/lib/rm/pets.js';
import { getAllUnits } from '../src/lib/rm/units.js';
import { getAllTenants } from '../src/lib/rm/tenants.js';
import { getAllLeases } from '../src/lib/rm/leases.js';
import { findTenantsWithPetFeeButNoPet } from '../src/lib/rm/audits/pet-fee.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

async function test(label: string, fn: () => Promise<unknown>) {
  process.stdout.write(`${label}... `);
  try {
    const result = await fn();
    const count = Array.isArray(result) ? result.length : '?';
    console.log(`✓ (${count} items)`);
  } catch (err) {
    console.log(`✗ FAILED: ${err}`);
  }
}

await test('getAllPets', () => getAllPets(client));
await test('getAllUnits', () => getAllUnits(client));
await test('getAllTenants', () => getAllTenants(client));
await test('getAllLeases', () => getAllLeases(client));
await test('findTenantsWithPetFeeButNoPet', () => findTenantsWithPetFeeButNoPet(client));
