/**
 * Find a Stage-1 uncommunicated violation to test IsCommunicationSent update
 */

import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

const violations = await client.getAll<Record<string, unknown>>(
  '/Violations',
  'filters=PropertyID,eq,1&embeds=ViolationStages&fields=ViolationID,PropertyID,TenantID,UnitID,UpdateDate,ViolationStages(ViolationStageID,StageNumber,IsCurrentStage,IsCommunicationSent,UpdateDate,ConcurrencyID)',
);

console.log(`Total violations: ${violations.length}`);

const stage1current = violations.filter((v: any) =>
  v.ViolationStages?.some((s: any) => s.IsCurrentStage && s.StageNumber === 1),
);

console.log(`Violations at Stage 1 (current): ${stage1current.length}`);

if (stage1current.length > 0) {
  const v = stage1current[0] as any;
  const stage = v.ViolationStages.find((s: any) => s.IsCurrentStage);
  console.log('\nFirst Stage-1-current violation:');
  console.log(JSON.stringify({ ViolationID: v.ViolationID, TenantID: v.TenantID, UnitID: v.UnitID, UpdateDate: v.UpdateDate, stage }, null, 2));
}
