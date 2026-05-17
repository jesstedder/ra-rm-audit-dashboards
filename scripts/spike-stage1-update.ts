/**
 * Test IsCommunicationSent update on Stage-1 violation (not escalated)
 * Violation 6, Stage 16 (StageNumber=1, IsCurrentStage=true, IsCommunicationSent=false)
 */

import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

const VIOLATION_ID = 6;
const STAGE_ID = 16;

console.log('\nTest: POST /Violations/6/ViolationStages with IsCommunicationSent=true');
console.log('(Will mark stage 16 as communicated — flip it back in RM if needed)\n');

// Attempt A: bare minimum
try {
  const result = await client.post<unknown>(`/Violations/${VIOLATION_ID}/ViolationStages`, [{
    ViolationStageID: STAGE_ID,
    IsCommunicationSent: true,
  }]);
  console.log('✓ Attempt A (bare min) SUCCEEDED!');
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.log(`✗ Attempt A failed: ${err}`);

  // Attempt B: with UpdateDate (from GET: 2023-12-18T08:14:00)
  try {
    const result = await client.post<unknown>(`/Violations/${VIOLATION_ID}/ViolationStages`, [{
      ViolationStageID: STAGE_ID,
      IsCommunicationSent: true,
      UpdateDate: '2023-12-18T08:14:00',
    }]);
    console.log('✓ Attempt B (with UpdateDate) SUCCEEDED!');
    console.log(JSON.stringify(result, null, 2));
  } catch (err2) {
    console.log(`✗ Attempt B failed: ${err2}`);

    // Attempt C: try POST /Violations (collection) with just ViolationID + stage
    try {
      const result = await client.post<unknown>('/Violations?embeds=ViolationStages', [{
        ViolationID: VIOLATION_ID,
        PropertyID: 1,
        TenantID: 1544,
        UnitID: 190,
        UpdateDate: '2024-04-17T16:22:22',
        ViolationStages: [{
          ViolationStageID: STAGE_ID,
          ViolationID: VIOLATION_ID,
          IsCommunicationSent: true,
          UpdateDate: '2023-12-18T08:14:00',
        }],
      }]);
      console.log('✓ Attempt C (collection POST) SUCCEEDED!');
      console.log(JSON.stringify(result, null, 2));
    } catch (err3) {
      console.log(`✗ Attempt C failed: ${err3}`);
    }
  }
}
