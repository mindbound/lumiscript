/**
 * #11 P7-2 — cross-script isolation acceptance suite (contextModel='per-script').
 *
 * The headline net for Cluster-1 facets 1 (shared-context-concurrency) + 2 (third-party-lib-
 * internal-freeze): under 'per-script' each scriptId runs in its OWN QuickJSContext, so a script
 * cannot poison another's globalThis or third-party libs (z.object=evil), and a fired handler
 * runs in ITS script's context. These MUST fail under 'shared' (one context) and pass under
 * 'per-script'. NOTE: we never assert the SHARED-context leak directly (it would poison the
 * process-global context for every later test); instead we prove the poison is REAL by showing it
 * persists WITHIN the poisoning script, and that another script is unaffected.
 *
 * setup.ts beforeEach calls _disposeContextForTests(), which disposes the per-script pool + resets
 * contextModel to 'shared', so these tests don't leak contexts across files.
 */

import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  disposeContextForScript,
  _setContextModelForTests,
  _vmHandlerIdsForTests,
  _scriptContextCountForTests,
  _vmObjectCountForTests,
  type QuickJSRunOptions,
  type QuickJSFireOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

function runOpts(scriptId: string, code: string, dispatch?: QuickJSRunOptions['dispatch']): QuickJSRunOptions {
  return {
    code, dispatch: dispatch ?? (async () => undefined), data: {},
    script: { id: scriptId, name: scriptId, type: 'trigger' },
    console: noopConsole, timeoutMs: 5_000, serializeError,
  };
}
function fireOpts(over: Partial<QuickJSFireOptions> & { scriptId: string; handlerId: string }): QuickJSFireOptions {
  return {
    scriptId: over.scriptId, handlerId: over.handlerId, args: over.args ?? [], timeoutMs: 5_000,
    dispatch: over.dispatch ?? (async () => undefined), console: noopConsole, serializeError,
    script: over.script,
  };
}

describe('#11 P7-2 cross-script isolation (contextModel=per-script)', () => {
  test('third-party-lib-internal-freeze: poisoning the shared zod object stays within the poisoning script', async () => {
    _setContextModelForTests('per-script');
    // A mutates the shared, context-lifetime `z` object (VM_FREEZE_BOOTSTRAP locks the BINDING, not z's
    // internals — z is extensible, so a script can add/overwrite properties on it). Adding a property
    // is the realistic poison; z's useful methods (z.object etc.) are getters, immune to reassignment.
    await runUserScriptInQuickJS(runOpts('iso-zA', `z.__lsPoison = 'EVIL'; return null;`));
    // A's SECOND run sees it — proves the mutation is real + persists within A's context (z is not
    // per-run-reset). Under contextModel='shared' this would leak to EVERY later run of EVERY script.
    const aSecond = await runUserScriptInQuickJS(runOpts('iso-zA', `return z.__lsPoison === 'EVIL' ? 'self-poisoned' : 'clean';`));
    expect(aSecond).toBe('self-poisoned');
    // Script B (its OWN context + own zod bundle) sees a PRISTINE z — cross-script isolation.
    const b = await runUserScriptInQuickJS(runOpts('iso-zB', `return typeof z.__lsPoison === 'undefined' ? 'clean' : 'poisoned';`));
    expect(b).toBe('clean');
  });

  test('shared-context-concurrency: a globalThis assignment in one script does not leak to another', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('iso-gA', `globalThis.__leaked = 'from-A'; return null;`));
    const b = await runUserScriptInQuickJS(runOpts('iso-gB', `return typeof globalThis.__leaked === 'undefined' ? 'isolated' : globalThis.__leaked;`));
    expect(b).toBe('isolated');
  });

  test('a handler registered in script A fires in A\'s context (not another script\'s residue)', async () => {
    _setContextModelForTests('per-script');
    // A sets a context marker + registers a handler reading it.
    await runUserScriptInQuickJS(runOpts('iso-hA', `globalThis.__mark = 'A'; api.commands.onInvoked(() => globalThis.__mark); return null;`));
    const hid = _vmHandlerIdsForTests('iso-hA').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // B runs in its OWN context + sets a DIFFERENT marker. Under 'shared' this residue would win.
    await runUserScriptInQuickJS(runOpts('iso-hB', `globalThis.__mark = 'B'; return null;`));
    // Fire A's handler — it must run in A's context and read 'A', not B's 'B'.
    const out = await fireHandlerInQuickJS(fireOpts({ scriptId: 'iso-hA', handlerId: hid }));
    expect(out).toBe('A');
    disposeScriptVmHandlers('iso-hA');
  });

  test('per-script runs are isolated even when interleaved (A, B, A see their own globalThis)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('iso-iA', `globalThis.__v = (globalThis.__v || 0) + 1; return null;`));
    await runUserScriptInQuickJS(runOpts('iso-iB', `globalThis.__v = 100; return null;`));
    const a2 = await runUserScriptInQuickJS(runOpts('iso-iA', `globalThis.__v = (globalThis.__v || 0) + 1; return globalThis.__v;`));
    expect(a2).toBe(2); // A's own counter (1→2), NOT B's 100 — A's context persisted across B's run
  });

  // #11 P7-2 audit (handle-lifecycle-dispose#0) — teardown MUST free the per-script context or the
  // pool grows unbounded across create/delete churn. handleScriptUnregister calls
  // disposeContextForScript(scriptId, reason !== 'reload').
  test('disposeContextForScript(disposeContext=true) frees the per-script context (leak regression)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('iso-dispA', `globalThis.__x = 1; return null;`));
    expect(_scriptContextCountForTests()).toBe(1);            // pooled
    expect(_vmObjectCountForTests('iso-dispA')).not.toBeNull(); // context is alive
    disposeContextForScript('iso-dispA', true);               // disable / delete teardown
    expect(_scriptContextCountForTests()).toBe(0);            // pool entry freed — no leak
    expect(_vmObjectCountForTests('iso-dispA')).toBeNull();   // context disposed (resolver returns undefined)
    // A later run rebuilds a FRESH context (clean slate), proving the old one is truly gone.
    const rebuilt = await runUserScriptInQuickJS(runOpts('iso-dispA', `return typeof globalThis.__x;`));
    expect(rebuilt).toBe('undefined');                        // NOT '1' — fresh context, not the disposed one
    expect(_scriptContextCountForTests()).toBe(1);            // rebuilt entry
    disposeContextForScript('iso-dispA', true);
  });

  // reason='reload' path (wipeScriptStateForReload): sweep the stale handler dups but PRESERVE the
  // context, so globalThis + module captures survive a reload (asyncfn parity; "reload is not a disable").
  test('disposeContextForScript(disposeContext=false) sweeps handlers but PRESERVES the context (reload parity)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('iso-relA', `globalThis.__keep = 'survives'; api.commands.onInvoked(() => 'h'); return null;`));
    expect(_vmHandlerIdsForTests('iso-relA').length).toBe(1);
    disposeContextForScript('iso-relA', false);              // reload semantics
    expect(_vmHandlerIdsForTests('iso-relA').length).toBe(0); // stale handler dup swept
    expect(_scriptContextCountForTests()).toBe(1);           // context PRESERVED (not disposed)
    // The preserved context still holds the script's globalThis state (matches asyncfn reload).
    const after = await runUserScriptInQuickJS(runOpts('iso-relA', `return globalThis.__keep;`));
    expect(after).toBe('survives');
    disposeContextForScript('iso-relA', true);
  });
});
