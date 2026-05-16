/**
 * Phase D — TriggerRegistry hot-reload-on-edit tests.
 *
 * Covers:
 *   - `hasNoReloadDirective` regex recognition (positive + negative cases).
 *   - `fireReload` dispatches the body with `__event: 'ls:reload'` plus the
 *     full payload (`reason`, `previousCodeHash`, `currentCodeHash`,
 *     `previousLength`, `currentLength`, `triggeredAt`).
 *   - **Autosave-driven `fireReload` is DROPPED if a run is in flight** —
 *     the next real trigger event picks up the new code naturally; a
 *     queued reload-on-idle would just produce a redundant second run.
 *   - **Manual `fireReload` is DEFERRED** while a real run is in flight;
 *     queued payload fires once the running count drains to 0. Multiple
 *     deferred manual reloads coalesce — the latest payload wins.
 *   - **Broadcast-handler-in-flight gating** — async broadcast handlers
 *     (`api.broadcast.on` callbacks that return a Promise) bump a per-
 *     script counter via `broadcast-handler-started` / `-finished` IPCs.
 *     `scriptHasActiveDispatch` reads this counter; autosave reload drops
 *     while > 0, manual reload defers and fires on counter-clear.
 *
 * Uses a capture-only `ScriptRunner` strategy (records `(script, request)`
 * pairs) so tests can assert on the data shape without actually executing
 * any user-script body. Mirrors `inProcessRunner`'s injection point but
 * skips `executeScript` since we don't care what the body does — only what
 * the dispatcher passes to it.
 */

import { describe, test, expect, mock } from 'bun:test';
import {
  TriggerRegistry,
  hasReloadOnEditDirective,
  type TriggerDeps,
  type ScriptRunner,
  type LsReloadPayload,
} from '../../src/engine/trigger-registry.js';
import {
  __setBroadcastHandlerInFlightForTests,
  __getBroadcastHandlerInFlightCountForTests,
} from '../../src/script-runner/host-dispatcher.js';
import type { Script } from '../../src/types/script.js';
import type { BackendToFrontend } from '../../src/types/messages.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';
import { setActiveContext } from '../../src/engine/binding.js';

describe('hasReloadOnEditDirective', () => {
  test('detects directive at line start', () => {
    expect(hasReloadOnEditDirective('// @ls:reload-on-edit\nconst x = 1;')).toBe(true);
  });

  test('detects directive with leading whitespace', () => {
    expect(hasReloadOnEditDirective('  // @ls:reload-on-edit')).toBe(true);
    expect(hasReloadOnEditDirective('\t// @ls:reload-on-edit')).toBe(true);
  });

  test('detects directive on a non-first line', () => {
    expect(hasReloadOnEditDirective(
      'const x = 1;\n// @ls:reload-on-edit\nconst y = 2;',
    )).toBe(true);
  });

  test('does not match directive embedded mid-line (must be at line start)', () => {
    expect(hasReloadOnEditDirective('const x = 1; // @ls:reload-on-edit')).toBe(false);
  });

  test('does not match similar-looking tokens (literal match + trailing-boundary guard)', () => {
    expect(hasReloadOnEditDirective('// @ls:reload')).toBe(false);
    expect(hasReloadOnEditDirective('// ls:reload-on-edit')).toBe(false);          // missing @
    expect(hasReloadOnEditDirective('// @reload-on-edit')).toBe(false);             // missing ls: prefix
    expect(hasReloadOnEditDirective('// @ls:reload_on_edit')).toBe(false);          // underscores
    expect(hasReloadOnEditDirective('// @ls:reload-on-edit-disabled')).toBe(false); // trailing-boundary
  });

  test('returns false for code without the directive', () => {
    expect(hasReloadOnEditDirective('const x = 1;\nconsole.log("hello");')).toBe(false);
    expect(hasReloadOnEditDirective('')).toBe(false);
  });
});

interface ReloadTestHarness {
  registry:       TriggerRegistry;
  storage:        ScriptStorage;
  seeded:         Script;
  captured:       Array<{ script: Script; data: unknown }>;
  pendingResolve: () => void;
  unblockRun:     () => void;
  sendToFrontend: ReturnType<typeof mock>;
}

/**
 * Build a registry whose `ScriptRunner` is controllable: it pushes
 * `(script, request)` into `captured`, then awaits an external resolver
 * before returning. Tests that need a non-blocking run call `unblockRun`
 * immediately. Tests that need to hold a run "in flight" defer the
 * `unblockRun` call.
 */
async function setupReloadHarness(): Promise<ReloadTestHarness> {
  const adapter = new InMemoryStorageAdapter();
  const storage = new ScriptStorage(adapter, () => 'test-user');
  await storage.load();

  const seeded: Script = {
    id:             'reload-test',
    name:           'Reload Test',
    code:           '/* body */',
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['TEST_EVENT'],
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
  await storage.store.create(seeded);

  const captured: Array<{ script: Script; data: unknown }> = [];
  // Per-call resolver — each call to the runner awaits its OWN `unblock`
  // before resolving, so tests can hold a run in-flight until they choose.
  let nextResolve: (() => void) | null = null;
  const controllableRunner: ScriptRunner = async (script, request) => {
    captured.push({ script, data: request.data });
    await new Promise<void>((r) => { nextResolve = r; });
    return { success: true, duration: 1 };
  };

  const deps: TriggerDeps = {
    grantedPermissions: new Set(),
    userId:             'test-user',
    scriptStorage:      storage,
    scriptTimeoutMs:    5_000,
  };
  const sendToFrontend = mock((_msg: BackendToFrontend) => {});
  const registry       = new TriggerRegistry(() => deps, sendToFrontend, controllableRunner);

  setActiveContext({ chatId: 'test-chat', characterId: 'test-char' });

  return {
    registry,
    storage,
    seeded,
    captured,
    sendToFrontend,
    get pendingResolve() { return nextResolve!; },
    unblockRun: () => {
      // Snapshot the current resolver, clear the slot, then invoke. This
      // way a subsequent call to the runner can capture a fresh resolver
      // without racing with this one's completion.
      const r = nextResolve;
      nextResolve = null;
      r?.();
    },
  };
}

describe('TriggerRegistry.fireReload — body invocation', () => {
  test('fires body with __event "ls:reload" + full payload', async () => {
    const h = await setupReloadHarness();
    const payload: LsReloadPayload = {
      reason:           'autosave',
      previousCodeHash: 'aaaa1111bbbb2222',
      currentCodeHash:  'cccc3333dddd4444',
      previousLength:   100,
      currentLength:    120,
    };
    const fireP = h.registry.fireReload(h.seeded, payload);
    // Allow the runner to capture, then unblock.
    await Promise.resolve();
    h.unblockRun();
    await fireP;

    expect(h.captured).toHaveLength(1);
    const data = h.captured[0]!.data as Record<string, unknown>;
    expect(data.__event).toBe('ls:reload');
    expect(data.reason).toBe('autosave');
    expect(data.previousCodeHash).toBe('aaaa1111bbbb2222');
    expect(data.currentCodeHash).toBe('cccc3333dddd4444');
    expect(data.previousLength).toBe(100);
    expect(data.currentLength).toBe(120);
    expect(typeof data.triggeredAt).toBe('number');
  });

  test('payload reason "manual" passes through unchanged', async () => {
    const h = await setupReloadHarness();
    const fireP = h.registry.fireReload(h.seeded, {
      reason:           'manual',
      previousCodeHash: '',
      currentCodeHash:  '',
      previousLength:   0,
      currentLength:    0,
    });
    await Promise.resolve();
    h.unblockRun();
    await fireP;

    expect((h.captured[0]!.data as { reason: string }).reason).toBe('manual');
  });
});

describe('TriggerRegistry.fireReload — autosave dropped while in-flight', () => {
  /**
   * Drive a "real" run via the registered event handler so `runningCounts`
   * actually increments. Captures the handler from the mock spindle's
   * `on()` calls — same pattern as the batch-aggregation tests.
   */
  async function withRegisteredHandler(h: ReloadTestHarness): Promise<(payload: unknown) => Promise<void>> {
    await h.registry.register(h.seeded);
    const onMock = (globalThis as unknown as { spindle: { on: { mock: { calls: unknown[][] } } } }).spindle.on;
    const lastCall = onMock.mock.calls.slice(-1)[0]!;
    return lastCall[1] as (payload: unknown) => Promise<void>;
  }

  test('autosave fireReload during in-flight real run is dropped — no fire on drain', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    // Kick off a real run; the runner will block awaiting `unblockRun`.
    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    expect(h.captured).toHaveLength(1);
    expect((h.captured[0]!.data as { __event: string }).__event).toBe('TEST_EVENT');

    // Autosave reload while the run is in-flight — should be dropped.
    const reloadPayload: LsReloadPayload = {
      reason:           'autosave',
      previousCodeHash: 'old',
      currentCodeHash:  'new',
      previousLength:   50,
      currentLength:    60,
    };
    await h.registry.fireReload(h.seeded, reloadPayload);
    expect(h.captured).toHaveLength(1);

    // Unblock the real run. With the autosave-drop semantics no queued
    // reload should fire on drain.
    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();

    // Still just the one fire from the real event — autosave reload dropped.
    expect(h.captured).toHaveLength(1);
  });

  test('multiple autosave reloads during in-flight run all drop — no fire after drain', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();

    // Three autosave reloads in quick succession — all dropped.
    await h.registry.fireReload(h.seeded, {
      reason: 'autosave', previousCodeHash: 'h0', currentCodeHash: 'h1',
      previousLength: 100, currentLength: 110,
    });
    await h.registry.fireReload(h.seeded, {
      reason: 'autosave', previousCodeHash: 'h0', currentCodeHash: 'h2',
      previousLength: 100, currentLength: 120,
    });
    await h.registry.fireReload(h.seeded, {
      reason: 'autosave', previousCodeHash: 'h0', currentCodeHash: 'h3',
      previousLength: 100, currentLength: 130,
    });

    expect(h.captured).toHaveLength(1);

    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();

    // No queued reload fires — all three autosaves dropped.
    expect(h.captured).toHaveLength(1);
  });
});

describe('TriggerRegistry.fireReload — manual deferred while in-flight', () => {
  async function withRegisteredHandler(h: ReloadTestHarness): Promise<(payload: unknown) => Promise<void>> {
    await h.registry.register(h.seeded);
    const onMock = (globalThis as unknown as { spindle: { on: { mock: { calls: unknown[][] } } } }).spindle.on;
    const lastCall = onMock.mock.calls.slice(-1)[0]!;
    return lastCall[1] as (payload: unknown) => Promise<void>;
  }

  test('manual fireReload during in-flight real run queues and fires on drain', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    expect(h.captured).toHaveLength(1);
    expect((h.captured[0]!.data as { __event: string }).__event).toBe('TEST_EVENT');

    // Manual reload while the run is in-flight — should defer, then fire.
    const reloadPayload: LsReloadPayload = {
      reason:           'manual',
      previousCodeHash: 'aaaa',
      currentCodeHash:  'aaaa',  // manual reload reuses the current hash
      previousLength:   50,
      currentLength:    50,
    };
    await h.registry.fireReload(h.seeded, reloadPayload);
    expect(h.captured).toHaveLength(1);

    // Drain.
    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();

    // The queued manual reload should now have fired.
    expect(h.captured).toHaveLength(2);
    expect((h.captured[1]!.data as { __event: string }).__event).toBe('ls:reload');
    expect((h.captured[1]!.data as { reason: string }).reason).toBe('manual');

    h.unblockRun();
  });

  test('multiple deferred manual reloads coalesce — latest payload wins', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();

    // Three rapid manual presses — should coalesce to one fire of the latest.
    await h.registry.fireReload(h.seeded, {
      reason: 'manual', previousCodeHash: 'h0', currentCodeHash: 'h0',
      previousLength: 100, currentLength: 100,
    });
    await h.registry.fireReload(h.seeded, {
      reason: 'manual', previousCodeHash: 'h0', currentCodeHash: 'h0',
      previousLength: 100, currentLength: 100,
    });
    await h.registry.fireReload(h.seeded, {
      reason: 'manual', previousCodeHash: 'h0', currentCodeHash: 'h0',
      previousLength: 100, currentLength: 100,
    });

    expect(h.captured).toHaveLength(1);

    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();

    // Exactly ONE additional fire (coalesced).
    expect(h.captured).toHaveLength(2);
    expect((h.captured[1]!.data as { reason: string }).reason).toBe('manual');

    h.unblockRun();
  });
});

describe('TriggerRegistry.fireReload — broadcast-handler-in-flight gating', () => {
  // Broadcast handler invocations are fire-and-forget from the parent
  // (`sendBroadcastFireToChild` ships the IPC and returns), so they never
  // surface in `pendingRuns` / `pendingHandlerCalls`. Instead, the child
  // emits `broadcast-handler-started` / `broadcast-handler-finished` IPCs
  // which bump a per-script `broadcastHandlerInFlight` counter in
  // `host-dispatcher.ts`. `scriptHasActiveDispatch` checks this counter
  // first; `fireReload` reads `scriptHasActiveDispatch` for its in-flight
  // gate.
  //
  // These tests simulate "a broadcast handler is mid-extraction" by
  // setting the counter directly via the test-only setter. The behaviour
  // under test is `fireReload`'s reaction — autosave drops, manual queues.

  test('autosave fireReload dropped while broadcast handler is in flight', async () => {
    const h = await setupReloadHarness();
    __setBroadcastHandlerInFlightForTests(h.seeded.id, 1);
    try {
      expect(__getBroadcastHandlerInFlightCountForTests(h.seeded.id)).toBe(1);

      await h.registry.fireReload(h.seeded, {
        reason:           'autosave',
        previousCodeHash: 'old',
        currentCodeHash:  'new',
        previousLength:   50,
        currentLength:    60,
      });

      // Autosave + in-flight → dropped silently. Nothing captured, no
      // queued payload to drain later.
      expect(h.captured).toHaveLength(0);
    } finally {
      __setBroadcastHandlerInFlightForTests(h.seeded.id, 0);
    }
  });

  test('manual fireReload deferred while broadcast handler is in flight, fires when counter clears', async () => {
    const h = await setupReloadHarness();
    __setBroadcastHandlerInFlightForTests(h.seeded.id, 1);

    await h.registry.fireReload(h.seeded, {
      reason:           'manual',
      previousCodeHash: 'aaaa',
      currentCodeHash:  'aaaa',
      previousLength:   100,
      currentLength:    100,
    });

    // Manual + in-flight → queued, NOT fired yet.
    expect(h.captured).toHaveLength(0);

    // Clear the counter — the polling drain (1 s interval inside
    // `schedulePendingReloadPoll`) should pick this up and fire the
    // queued reload on its next tick. Use real timers + a brief
    // setTimeout > 1000ms to let the drain run.
    __setBroadcastHandlerInFlightForTests(h.seeded.id, 0);
    await new Promise((r) => setTimeout(r, 1100));

    // Drain fired `void this.fireReload(...)` which awaits its own runner.
    // The harness's runner captures synchronously then awaits unblockRun.
    expect(h.captured).toHaveLength(1);
    expect((h.captured[0]!.data as { __event: string }).__event).toBe('ls:reload');
    expect((h.captured[0]!.data as { reason: string }).reason).toBe('manual');

    h.unblockRun();
  });

  test('autosave fireReload fires immediately when broadcast-handler counter is 0', async () => {
    const h = await setupReloadHarness();
    // Counter not bumped — script is idle from the broadcast-handler POV.
    expect(__getBroadcastHandlerInFlightCountForTests(h.seeded.id)).toBe(0);

    const fireP = h.registry.fireReload(h.seeded, {
      reason:           'autosave',
      previousCodeHash: 'old',
      currentCodeHash:  'new',
      previousLength:   50,
      currentLength:    60,
    });
    await Promise.resolve();
    h.unblockRun();
    await fireP;

    expect(h.captured).toHaveLength(1);
    expect((h.captured[0]!.data as { __event: string }).__event).toBe('ls:reload');
    expect((h.captured[0]!.data as { reason: string }).reason).toBe('autosave');
  });
});
