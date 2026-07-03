/**
 * #11 — api.broadcast.emit limits (size cap + per-script rate limit), shared by BOTH engines
 * (broadcast-emit-limits.ts). The asyncfn proxy enforced these; the QuickJS in-VM proxy used to fall through
 * to the generic dispatch, so a quickjs script could flood the bus / send oversized payloads AND emit
 * returned a promise instead of sync-void. These lock the shared enforcer + the quickjs wiring.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import {
  enforceBroadcastEmitLimits, _resetBroadcastEmitLimitsForTests,
  BROADCAST_EMIT_MAX_BYTES, BROADCAST_EMIT_BURST, BROADCAST_EMIT_RATE_PER_SEC,
} from '../../src/script-runner/broadcast-emit-limits.js';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'BE', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('enforceBroadcastEmitLimits (shared enforcer)', () => {
  beforeEach(() => _resetBroadcastEmitLimitsForTests());

  test('a normal payload within budget does not throw', () => {
    expect(() => enforceBroadcastEmitLimits('s1', 1_000, 0)).not.toThrow();
  });

  test('over the size cap throws', () => {
    expect(() => enforceBroadcastEmitLimits('s1', BROADCAST_EMIT_MAX_BYTES + 1, 0)).toThrow(/size cap exceeded/);
  });

  test('a burst of BURST at one instant passes; the next throws; time refills the bucket', () => {
    for (let i = 0; i < BROADCAST_EMIT_BURST; i++) enforceBroadcastEmitLimits('s2', 0, 0);
    expect(() => enforceBroadcastEmitLimits('s2', 0, 0)).toThrow(/rate limit exceeded/);
    // ~RATE_PER_SEC tokens refill after 1s → an emit passes again.
    expect(BROADCAST_EMIT_RATE_PER_SEC).toBeGreaterThan(0);
    expect(() => enforceBroadcastEmitLimits('s2', 0, 1_000)).not.toThrow();
  });

  test('per-script buckets are independent', () => {
    for (let i = 0; i < BROADCAST_EMIT_BURST; i++) enforceBroadcastEmitLimits('a', 0, 0);
    expect(() => enforceBroadcastEmitLimits('a', 0, 0)).toThrow(/rate limit/); // a exhausted
    expect(() => enforceBroadcastEmitLimits('b', 0, 0)).not.toThrow();          // b fresh
  });
});

describe('QuickJS broadcast.emit enforces the limits + is sync-void (parity)', () => {
  beforeEach(() => _resetBroadcastEmitLimitsForTests());

  test('an oversized payload throws the size-cap error (was silently allowed pre-fix)', async () => {
    const r = await runUserScriptInQuickJS(makeOpts({
      script: { id: 'be-size', name: 'BE', type: 'trigger' },
      code: `try { api.broadcast.emit('ev', 'x'.repeat(2 * 1024 * 1024)); return 'no-throw'; } catch (e) { return 'threw:' + e.message; }`,
    })) as string;
    expect(r.startsWith('threw:')).toBe(true);
    expect(r).toContain('size cap exceeded');
  });

  test('a non-serialisable payload throws the serializability error (in-VM JSON.stringify guard)', async () => {
    const r = await runUserScriptInQuickJS(makeOpts({
      script: { id: 'be-cyc', name: 'BE', type: 'trigger' },
      code: `const o = {}; o.self = o; try { api.broadcast.emit('ev', o); return 'no-throw'; } catch (e) { return 'threw:' + e.message; }`,
    })) as string;
    expect(r.startsWith('threw:')).toBe(true);
    expect(r).toContain('not JSON-serialisable');
  });

  test('a normal emit returns undefined synchronously (fire-forget, NOT a promise)', async () => {
    const r = await runUserScriptInQuickJS(makeOpts({
      script: { id: 'be-ok', name: 'BE', type: 'trigger' },
      code: `const ret = api.broadcast.emit('ev', { hi: 1 }); return { isUndef: ret === undefined, isPromise: ret instanceof Promise };`,
    })) as { isUndef: boolean; isPromise: boolean };
    expect(r.isUndef).toBe(true);
    expect(r.isPromise).toBe(false);
  });
});
