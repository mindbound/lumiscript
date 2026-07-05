/**
 * #11 P3 A2 — in-VM crypto (sync CSPRNG bridge).
 *
 * QuickJS has no crypto. A host newFunction (__lsRandomFill) runs synchronously
 * in the VM and returns real host-CSPRNG bytes, so crypto.getRandomValues /
 * randomUUID stay synchronous (the Web contract) with genuine entropy — no PRNG
 * or entropy-pool compromise. crypto.subtle is intentionally absent.
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Crypto', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 A2: crypto', () => {
  test('randomUUID returns a valid, distinct v4 UUID', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return { a: crypto.randomUUID(), b: crypto.randomUUID(), typeofCrypto: typeof crypto };`,
    })) as { a: string; b: string; typeofCrypto: string };
    expect(v.typeofCrypto).toBe('object');
    const v4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    expect(v.a).toMatch(v4);
    expect(v.b).toMatch(v4);
    expect(v.a).not.toBe(v.b);
  });

  test('getRandomValues fills the array in place and returns it; draws vary', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const a = new Uint8Array(16);
        const ret = crypto.getRandomValues(a);
        const b = new Uint8Array(16);
        crypto.getRandomValues(b);
        let diff = 0; for (let i = 0; i < 16; i++) if (a[i] !== b[i]) diff++;
        return { same: ret === a, len: a.length, allZero: Array.from(a).every(x => x === 0), diff };
      `,
    })) as { same: boolean; len: number; allZero: boolean; diff: number };
    expect(v.same).toBe(true);
    expect(v.len).toBe(16);
    expect(v.allZero).toBe(false);
    expect(v.diff).toBeGreaterThan(8); // two CSPRNG draws differ in nearly all bytes
  });

  test('getRandomValues works on a wider typed array (byte view)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `const a = new Uint32Array(4); crypto.getRandomValues(a); return { len: a.length, anyNonZero: Array.from(a).some(x => x !== 0) };`,
    })) as { len: number; anyNonZero: boolean };
    expect(v.len).toBe(4);
    expect(v.anyNonZero).toBe(true);
  });

  test('getRandomValues rejects a non-typed-array', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { crypto.getRandomValues([1, 2, 3]); return 'no-throw'; } catch (e) { return 'threw'; }`,
    }));
    expect(v).toBe('threw');
  });

  test('crypto binding is frozen (cannot be reassigned by a run)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { globalThis.crypto = { randomUUID: () => 'HACKED' }; return 'writable'; } catch (e) { return 'locked'; }`,
    }));
    expect(v).toBe('locked');
  });
});
