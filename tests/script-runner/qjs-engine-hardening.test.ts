/**
 * #11 P1 increment 2 — QuickJS engine hardening (adversarial-audit follow-ups).
 *
 * Covers the four fixes pulled forward into P1 after the multi-agent audit:
 *   (a) the deferred-promise bridge settles for EVERY outcome — a result that
 *       fails host-side JSON.stringify falls back to an error envelope instead
 *       of hanging the in-VM await + leaking the deferred's handles.
 *   (b) FAIL-LOUD arg validation — functions/Date/Map/Set/BigInt/etc. throw a
 *       clear error in-VM rather than being silently mangled by JSON.stringify.
 *   (c) the host method resolver own-property gate — prototype-chain paths
 *       (constructor / __proto__ / toString / ...) are rejected, so the generic
 *       in-VM proxy can't reach realm primitives. (Protects both engines.)
 *   (d) a synchronous infinite loop is normalized to a ScriptTimeoutError so the
 *       friendly message + the proc.fail zombie-protection both engage.
 *
 * (a)/(b)/(d) are unit-tested directly against `runUserScriptInQuickJS` with a
 * mock dispatch (fast, isolated). (c) lives in the HOST resolver, so it is
 * exercised through the real in-process dispatch path under engineMode=quickjs.
 */

import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  _vmObjectCountForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';
import { dispatchRunScript } from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Hardening', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

// ─── (a) bridge always settles ────────────────────────────────────────────────

describe('#11 fix(a): the bridge settles for every outcome', () => {
  test('a non-marshalable dispatch RESULT rejects cleanly instead of hanging', async () => {
    // dispatch returns a value containing a function → marshalEncode throws
    // INSIDE settle()'s try → the deferred is still resolved with an {e}
    // envelope. If the deferred ever failed to settle this test would hang to
    // its timeout. (BigInt is now SUPPORTED by structured marshaling — P2 — so
    // a function is the trigger for the un-marshalable path.)
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async () => ({ fn: () => 1 }),
      code: `try { await api.foo(); return 'NO-THROW'; } catch (e) { return 'caught:' + e.message; }`,
    }));
    expect(typeof v).toBe('string');
    expect(v as string).toContain('caught:');
    expect(v as string).toContain('could not be marshaled');
  });
});

// ─── (b) fail-loud argument validation ─────────────────────────────────────────

describe('#11 fix(b): non-JSON args fail loud (not silently mangled)', () => {
  test('a function argument throws a clear error and never reaches the host', async () => {
    let dispatched = false;
    // Use a GENERIC method (api.foo) — handler-registration paths like
    // api.broadcast.on / api.commands.onInvoked legitimately accept a function
    // (P5 intercepts them in the apply trap before marshaling). A top-level
    // function arg to a non-handler method must still fail loud.
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async () => { dispatched = true; return undefined; },
      code: `try { await api.foo(() => {}); return 'NO-THROW'; } catch (e) { return 'caught:' + e.message; }`,
    }));
    expect(v as string).toContain('caught:');
    expect(v as string).toContain('functions/callbacks');
    expect(dispatched).toBe(false);
  });

  // Date / Map / Set / BigInt / typed-array args are now SUPPORTED by structured
  // marshaling (P2) — their round-trips live in qjs-engine-marshal.test.ts.
  // Functions / symbols / cycles remain fail-loud (callbacks are P5).

  test('a nested function (inside an object/array arg) is also caught', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { await api.foo({ opts: { onDone: () => 1 } }); return 'NO-THROW'; } catch (e) { return 'caught:' + e.message; }`,
    }));
    expect(v as string).toContain('caught:');
    expect(v as string).toContain('functions/callbacks');
  });

  test('JSON-clean args pass through to the host unchanged', async () => {
    const seen: Array<[string, unknown[]]> = [];
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async (m, a) => { seen.push([m, a]); return 'ok'; },
      code: `return await api.scriptStorage.set('k', { n: 1, s: 'x', arr: [1, 2, true, null] });`,
    }));
    expect(v).toBe('ok');
    expect(seen[0]).toEqual(['scriptStorage.set', ['k', { n: 1, s: 'x', arr: [1, 2, true, null] }]]);
  });
});

// ─── (d) sync-loop → ScriptTimeoutError ────────────────────────────────────────

describe('#11 fix(d): a synchronous infinite loop normalizes to ScriptTimeoutError', () => {
  test('while(true){} surfaces a ScriptTimeoutError (not a bare InternalError)', async () => {
    let err: unknown;
    try {
      await runUserScriptInQuickJS(makeOpts({ code: `while (true) {}`, timeoutMs: 250 }));
    } catch (e) {
      err = e;
    }
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).name).toBe('ScriptTimeoutError');
    expect((err as Error).message).toContain('execution timeout');
  }, 10_000);
});

// ─── (c) host own-property gate (via the real dispatch path, quickjs) ───────────

function makeScript(id: string, code: string): Script {
  return {
    id,
    name:           `Guard ${id}`,
    code,
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['ls:startup'],
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
}

function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}

describe('#11 fix(c): host method resolver rejects prototype-chain paths (quickjs)', () => {
  test('constructor / __proto__ / toString / the constructor.constructor gadget are all blocked at runtime', async () => {
    await setupE2E();
    _setEngineModeForTests('quickjs');
    // DYNAMIC property names on purpose: the host SOURCE scanner
    // (checkUserScriptSecurity) already rejects the LITERAL `.constructor.constructor`
    // / `Function(` / `import(` forms in source. This test targets the RUNTIME
    // resolver own-property gate (fix c) — the layer that still blocks these
    // paths when a script obfuscates them past the regex (e.g. `api[c][c]`).
    const code = `
      const out = [];
      for (const p of ['constructor', '__proto__', 'toString', 'valueOf', 'hasOwnProperty']) {
        try { await api[p](); out.push(p + ':REACHED'); }
        catch (e) { out.push(p + ':blocked'); }
      }
      const seg = 'con' + 'structor';
      try { await api[seg][seg]('return 1'); out.push('gadget:REACHED'); }
      catch (e) { out.push('gadget:blocked'); }
      return out;
    `;
    const res = await dispatchRunScript(makeScript('proto-1', code), makeRequest());
    expect(res.ok).toBe(true);
    const out = res.value as string[];
    expect(out).toHaveLength(6);
    for (const entry of out) expect(entry).toContain('blocked');
  });

  test('a legitimate own method still resolves under the guard', async () => {
    await setupE2E();
    _setEngineModeForTests('quickjs');
    const code = `await api.scriptStorage.set('k', 'v'); return await api.scriptStorage.get('k');`;
    const res = await dispatchRunScript(makeScript('legit-1', code), makeRequest());
    expect(res.ok).toBe(true);
    expect(res.value).toBe('v');
  });
});

// ─── M4: per-run handle arena (leak oracle) ────────────────────────────────────

describe('#11 P2 (M4): per-run handle arena leaves no handles behind', () => {
  test('VM object count stays flat across 450 mixed (success / api-call / throwing) runs', async () => {
    // Warm up so the context + QuickJS atom/shape caches stabilize first.
    for (let i = 0; i < 10; i++) {
      await runUserScriptInQuickJS(makeOpts({ code: `return ({ a: [1, 2, 3], d: new Date(), m: new Map([['k', 1]]) });` }));
    }
    const before = _vmObjectCountForTests();
    expect(before).not.toBeNull();

    for (let i = 0; i < 150; i++) {
      await runUserScriptInQuickJS(makeOpts({ code: `return ({ a: [1, 2, 3], d: new Date(), m: new Map([['k', 1]]) });` }));
      // api-call run exercises the per-call deferred bridge + arg marshaling
      await runUserScriptInQuickJS(makeOpts({ code: `await api.foo(new Date()); return await api.bar();` }));
      // throwing run exercises the finally/arena disposal on the error path
      try { await runUserScriptInQuickJS(makeOpts({ code: `throw new Error('boom');` })); } catch { /* expected */ }
    }
    const after = _vmObjectCountForTests();

    // QuickJS is refcounted; the stable context-lifetime scaffolding + the per-run
    // arena keep the VM heap flat (measured: exactly 0 growth/run). A regression
    // that recreated per-run scaffolding or leaked a handle would add hundreds of
    // live objects over 450 runs. The tight bound makes that impossible to miss.
    expect((after as number) - (before as number)).toBeLessThan(50);
  }, 30_000);
});

// ─── H1: run serialization on the shared context ───────────────────────────────

describe('#11 P2 audit H1: concurrent runs are serialized (no cross-run corruption)', () => {
  test('two un-awaited runs each see only their OWN data/dispatch across an await', async () => {
    // Each run reads data.tag before AND after an api call whose dispatch yields
    // the event loop (setTimeout). If the runs interleaved on the shared context,
    // run A's post-await read of globalThis.data / activeRun.dispatch would see
    // run B's. The run lock serializes them, so each stays isolated.
    const mk = (tag: string) => makeOpts({
      data: { tag },
      dispatch: async (m: string) => { await new Promise((r) => setTimeout(r, 5)); return tag + ':' + m; },
      code: `const before = data.tag; const d = await api.ping(); const after = data.tag; return { before, after, d };`,
    });

    const [a, b] = await Promise.all([
      runUserScriptInQuickJS(mk('A')),
      runUserScriptInQuickJS(mk('B')),
    ]) as Array<{ before: string; after: string; d: string }>;

    expect(a).toEqual({ before: 'A', after: 'A', d: 'A:ping' });
    expect(b).toEqual({ before: 'B', after: 'B', d: 'B:ping' });
  }, 10_000);
});
