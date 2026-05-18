/**
 * Spike: creating a violation with ViolationStages + ViolationStages.ViolationStageAction
 *
 * Key finding from RM Request Builder:
 * - Valid POST /Violations embed options include BOTH:
 *   - "ViolationStages"
 *   - "ViolationStages.ViolationStageAction"  (dot-notation as a single option)
 * - Must pass both: embeds=ViolationStages,ViolationStages.ViolationStageAction
 *
 * Previous failures:
 * - embeds=ViolationStages alone → "ViolationStageAction post embed is required"
 * - embeds=ViolationStages.ViolationStageAction alone → "ViolationStages post embed is required"
 * - embeds=ViolationStages,ViolationStageAction → KeyNotFoundException
 */

import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

function dump(label: string, obj: unknown) {
  console.log(`\n[${label}]`, JSON.stringify(obj, null, 2));
}

const PROPERTY_ID = 1;
const TENANT_ID = 1531;
const UNIT_ID = 128;
const VIOLATION_CODE_ID = 152;

// First peek at a real Stage 1 name
const sample = await client.getAll<unknown>('/Violations', 'embeds=ViolationStages&fields=ViolationID,ViolationStages(StageNumber,Name)&filters=TenantID,eq,1531');
console.log('Sample stage name:', JSON.stringify(sample.slice(0, 2), null, 2));

console.log('\nNOTE: This will create a REAL violation — delete it from RM afterward!\n');
console.log('Attempt: embeds=ViolationStages,ViolationStages.ViolationStageAction');

try {
  const result = await client.post<unknown>(
    '/Violations?embeds=ViolationStages,ViolationStages.ViolationStageAction',
    [{
      PropertyID: PROPERTY_ID,
      TenantID: TENANT_ID,
      UnitID: UNIT_ID,
      ViolationCodeID: VIOLATION_CODE_ID,
      ViolationDate: '2026-05-17T00:00:00',
      Description: 'API TEST - PLEASE DELETE',
      ViolationStages: [{
        StageNumber: 1,
        Name: 'Door Hanger',
        StageDate: '2026-05-17T00:00:00',
        DueDate: '2026-06-16T00:00:00',
        IsCurrentStage: true,
        IsStageCreated: true,
        IsCommunicationSent: false,
        ViolationStageAction: { Action: '' },
      }],
    }],
  );
  console.log('✓ SUCCEEDED!');
  dump('Response', result);
} catch (err) {
  console.log(`✗ Failed: ${err}`);
}

console.log('\nDone.');
