/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT PACK IMPORT
 * ============================================================================
 * Extracts and validates a script pack ZIP. Runs entirely on the frontend.
 * Only reads `pack.json` by exact name — all other ZIP entries are ignored,
 * preventing path traversal attacks.
 *
 * Zip-bomb DoS mitigation (Phase 3b / MED-02, v1.0.0-rc.7+): uses fflate's
 * `unzipSync(buf, { filter })` form. The filter callback runs against each
 * entry's central-directory metadata BEFORE inflation; entries that don't
 * match the filter are skipped without being decompressed. A malicious
 * archive containing a 1 MB `pack.json` plus a 100 GB sibling entry no
 * longer inflates the sibling. Pre-rc.7 used bare `unzipSync(buf)` which
 * inflates every entry before any cap is applied (audit MED-02).
 *
 * Note: the audit's MED-02 §4.6 stated `unzipSync` doesn't support filter
 * and recommended the async `unzip(buf, opts, cb)` form. Empirically (fflate
 * 0.8.3) `unzipSync` DOES accept `{ filter }` in its second arg and behaves
 * identically — verified by probe + the regression test below. The sync
 * form is simpler and avoids fflate's async-worker code path which has
 * issues under Bun's test runtime.
 */

import { unzipSync, strFromU8 } from 'fflate';
import { ScriptPackSchema } from './pack-schema.js';
import type { ScriptPackEntry } from '../types/script.js';

/** Hard limit on decompressed pack.json size (1 MB). */
const MAX_DECOMPRESSED_BYTES = 1_048_576;

/**
 * Parse and validate a `.lumiscript.zip` File.
 *
 * @throws If the file is not a valid ZIP, lacks `pack.json`, exceeds the size
 *         limit, or fails schema validation.
 * @returns Validated script entries ready to send to the backend.
 */
export async function parseScriptPack(file: File): Promise<ScriptPackEntry[]> {
  const buf = new Uint8Array(await file.arrayBuffer());

  let files: Record<string, Uint8Array>;
  try {
    // Inflate `pack.json` only; every other entry is skipped at the
    // central-directory stage without being decompressed. This is the
    // zip-bomb mitigation — adversarial sibling entries never reach the
    // inflate codepath.
    files = unzipSync(buf, {
      filter: (file) => file.name === 'pack.json',
    });
  } catch {
    throw new Error('Could not read ZIP file. Is this a valid .zip archive?');
  }

  const packBytes = files['pack.json'];
  if (!packBytes) {
    throw new Error('Invalid script pack: missing pack.json');
  }

  if (packBytes.byteLength > MAX_DECOMPRESSED_BYTES) {
    throw new Error(`Pack exceeds the ${MAX_DECOMPRESSED_BYTES / 1024 / 1024} MB decompressed size limit`);
  }

  const raw = strFromU8(packBytes);

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error('Invalid script pack: pack.json is not valid JSON');
  }

  const result = ScriptPackSchema.parse(parsed);
  return result.scripts;
}
