/**
 * Spike 1.4 — Confirmed endpoint: POST /Violations/{id}/ViolationStages
 *
 * Key finding: only the CURRENT stage can be updated (IsCurrentStage=true).
 * Stage 1274 is current for violation 436. Testing IsCommunicationSent update.
 *
 * Also testing concurrency requirement (UpdateDate vs ConcurrencyID vs neither).
 */

import 'dotenv/config';
import { createClient } from '../src/lib/rm/client.js';

const client = createClient({
  baseUrl: process.env['RM_BASEURL']!,
  username: process.env['RM_USERNAME']!,
  password: process.env['RM_PASSWORD']!,
  locationId: parseInt(process.env['RM_LOCATIONID']!, 10),
});

function section(title: string) {
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('─'.repeat(60));
}
function pass(msg: string) { console.log(`  ✓  ${msg}`); }
function fail(msg: string) { console.log(`  ✗  ${msg}`); }
function info(msg: string) { console.log(`  →  ${msg}`); }
function dump(label: string, obj: unknown) {
  console.log(`\n  [${label}]\n`, JSON.stringify(obj, null, 2));
}

const VIOLATION_ID = 436;
const CURRENT_STAGE_ID = 1274; // IsCurrentStage=true, UpdateDate=2026-01-12, ConcurrencyID=2

section('Spike 1.4 — POST /Violations/436/ViolationStages with current stage 1274');
info('Will set IsCommunicationSent=true on stage 1274 — flip it back in RM afterward');

// Attempt A: bare minimum — just ViolationStageID + IsCommunicationSent
info('\nAttempt A: ViolationStageID + IsCommunicationSent only (no concurrency)...');
try {
  const result = await client.post<unknown>(`/Violations/${VIOLATION_ID}/ViolationStages`, [{
    ViolationStageID: CURRENT_STAGE_ID,
    IsCommunicationSent: true,
  }]);
  pass('Attempt A succeeded!');
  dump('Response', result);
  info('RESULT: No concurrency needed — bare minimum works');
} catch (err) {
  fail(`Attempt A failed: ${err}`);

  // Attempt B: add UpdateDate (from prior GET: 2026-01-12T12:34:56)
  info('\nAttempt B: ViolationStageID + IsCommunicationSent + UpdateDate...');
  try {
    const result = await client.post<unknown>(`/Violations/${VIOLATION_ID}/ViolationStages`, [{
      ViolationStageID: CURRENT_STAGE_ID,
      IsCommunicationSent: true,
      UpdateDate: '2026-01-12T12:34:56',
    }]);
    pass('Attempt B succeeded!');
    dump('Response', result);
    info('RESULT: UpdateDate required');
  } catch (err2) {
    fail(`Attempt B failed: ${err2}`);

    // Attempt C: ConcurrencyID instead of UpdateDate
    info('\nAttempt C: ViolationStageID + IsCommunicationSent + ConcurrencyID=2...');
    try {
      const result = await client.post<unknown>(`/Violations/${VIOLATION_ID}/ViolationStages`, [{
        ViolationStageID: CURRENT_STAGE_ID,
        IsCommunicationSent: true,
        ConcurrencyID: 2,
      }]);
      pass('Attempt C succeeded!');
      dump('Response', result);
      info('RESULT: ConcurrencyID required');
    } catch (err3) {
      fail(`All attempts failed: ${err3}`);
      info('RESULT: Unknown — see errors above');
    }
  }
}

section('Done');
