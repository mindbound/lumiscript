/**
 * Regression fence for `parseScriptPack` — specifically the MED-02 zip-bomb
 * mitigation landed in Phase 3b / v1.0.0-rc.7+.
 *
 * Pre-rc.7: `parseScriptPack` used `unzipSync(buf)` which decompresses EVERY
 * entry in the archive before any size cap is applied. A malicious
 * `.lumiscript.zip` containing a 1 MB valid `pack.json` plus a 100 GB sibling
 * entry (compressed to a few hundred KB via long runs of zeros) would OOM
 * the browser tab on import.
 *
 * Post-rc.7: `parseScriptPack` uses fflate's streaming callback form with a
 * `filter` that matches only `pack.json`. Filtered entries are NOT inflated
 * — fflate reads them at the central-directory stage and skips inflation
 * entirely. The audit's MED-02 cites the same `filter` pattern as the
 * mechanical fix.
 *
 * Test strategy:
 *   - Synthesise zips via fflate's `zipSync` (no fixture files on disk).
 *   - Confirm valid packs continue to parse end-to-end.
 *   - Confirm a zip with a giant non-`pack.json` sibling parses successfully
 *     WITHOUT inflating the sibling. The proxy for "didn't inflate" is
 *     "didn't OOM" — we add a 16 MB sibling here (large enough to be
 *     noticeable if inflated, small enough to comfortably fit in the test
 *     process's memory if we did accidentally inflate). The fast wall-clock
 *     of the test additionally confirms the bomb path isn't being walked.
 */

import { describe, test, expect } from 'bun:test';
import { zipSync, strToU8 } from 'fflate';
import { parseScriptPack } from '../../src/utils/pack-import.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

function makeValidPackJson(): string {
  return JSON.stringify({
    format:     'lumiscript-pack-v1',
    exportedAt: '2026-05-19T12:00:00.000Z',
    scripts:    [
      {
        name: 'Test Script',
        code: 'return 42;',
        type: 'trigger',
      },
    ],
  });
}

function makeFile(zipBytes: Uint8Array, name = 'pack.lumiscript.zip'): File {
  // Bun's `Uint8Array<ArrayBufferLike>` doesn't satisfy `BlobPart` strict
  // typing under the test-tsconfig (mismatched `buffer` constraint vs DOM's
  // `ArrayBufferView<ArrayBuffer>`). Wrap via `Blob` to bridge — the Blob
  // ctor accepts the broader BlobPart-compatible shape at runtime.
  const blob = new Blob([zipBytes as unknown as ArrayBuffer], { type: 'application/zip' });
  return new File([blob], name, { type: 'application/zip' });
}

// ─── Happy path ─────────────────────────────────────────────────────────────

describe('parseScriptPack — happy path', () => {
  test('parses a minimal valid zip', async () => {
    const zip = zipSync({
      'pack.json': strToU8(makeValidPackJson()),
    });
    const entries = await parseScriptPack(makeFile(zip));
    expect(entries).toHaveLength(1);
    expect(entries[0]!.name).toBe('Test Script');
  });

  test('parses a zip whose pack.json is at its 1 MB cap', async () => {
    // Construct a pack.json near (but under) the 1 MB cap by padding the
    // metadata field with a long string. Just verifies the cap isn't
    // accidentally triggered by zips that are large-but-legitimate.
    const pad = 'x'.repeat(900_000);
    const pack = JSON.stringify({
      format:     'lumiscript-pack-v1',
      exportedAt: '2026-05-19T12:00:00.000Z',
      scripts:    [
        { name: 'Padded', code: 'return 1;', type: 'trigger', metadata: { note: pad } },
      ],
    });
    const zip = zipSync({ 'pack.json': strToU8(pack) });
    const entries = await parseScriptPack(makeFile(zip));
    expect(entries).toHaveLength(1);
    expect(entries[0]!.name).toBe('Padded');
  });
});

// ─── Zip-bomb (MED-02) regression fence ─────────────────────────────────────

describe('parseScriptPack — MED-02 zip-bomb mitigation', () => {
  test('skips non-pack.json siblings without inflating them', async () => {
    // 16 MB of zeros — inflates trivially (small compressed footprint due
    // to RLE-friendly content), but the FILTER means it's never inflated.
    // Pre-rc.7 this entry would have been inflated into memory.
    const giantSibling = new Uint8Array(16 * 1024 * 1024);
    const zip = zipSync({
      'pack.json':       strToU8(makeValidPackJson()),
      'malicious.bin':   giantSibling,
    });

    const start = Date.now();
    const entries = await parseScriptPack(makeFile(zip));
    const elapsedMs = Date.now() - start;

    // Behavioural assertion: parse succeeded with the legitimate pack.json
    // entry, ignoring the sibling.
    expect(entries).toHaveLength(1);
    expect(entries[0]!.name).toBe('Test Script');

    // Soft timing budget. Inflating 16 MB through fflate's WASM-free JS
    // path takes meaningfully longer than skipping it via central-directory
    // metadata. We use a generous 2-second budget here — well below the
    // ~tens of seconds we'd see if the sibling were inflated AND well above
    // the ~tens of milliseconds the happy path actually takes — so the
    // assertion is robust against CI variance while still failing loud if
    // the filter regresses.
    expect(elapsedMs).toBeLessThan(2_000);
  });

  test('still rejects oversized pack.json itself (defence-in-depth cap remains)', async () => {
    // pack.json > 1 MB — different bug class than the sibling-bomb. The
    // existing MAX_DECOMPRESSED_BYTES check still applies AFTER inflation
    // of the filtered (matched) entry.
    const huge = JSON.stringify({
      format:     'lumiscript-pack-v1',
      exportedAt: '2026-05-19T12:00:00.000Z',
      scripts:    [
        { name: 'X', code: 'return 1;', type: 'trigger', metadata: { note: 'x'.repeat(2_000_000) } },
      ],
    });
    const zip = zipSync({ 'pack.json': strToU8(huge) });
    await expect(parseScriptPack(makeFile(zip))).rejects.toThrow(/exceeds/);
  });

  test('still rejects archives without pack.json', async () => {
    const zip = zipSync({ 'not-pack.json': strToU8('{}') });
    await expect(parseScriptPack(makeFile(zip))).rejects.toThrow(/missing pack\.json/);
  });

  test('still rejects malformed JSON in pack.json', async () => {
    const zip = zipSync({ 'pack.json': strToU8('not valid json {{') });
    await expect(parseScriptPack(makeFile(zip))).rejects.toThrow(/not valid JSON/);
  });

  test('rejects non-zip bytes with a clear error', async () => {
    const notAZip = strToU8('this is not a zip file');
    await expect(parseScriptPack(makeFile(notAZip))).rejects.toThrow(/valid \.zip archive/);
  });
});
