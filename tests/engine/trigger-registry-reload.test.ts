/**
 * Phase D — TriggerRegistry hot-reload-on-edit tests.
 *
 * Covers:
 *   - `hasNoReloadDirective` regex recognition (positive + negative cases).
 *   - `fireReload` dispatches the body with `__event: 'ls:reload'` plus the
 *     full payload (`reason`, `previousCodeHash`, `currentCodeHash`,
 *     `previousLength`, `currentLength`, `triggeredAt`).
 *   - `fireReload` is deferred while a real run is in flight; queued
 *     payload fires once the running count drains to 0.
 *   - Multiple deferred reloads coalesce — the latest payload wins.
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
  hasNoReloadDirective,
  type TriggerDeps,
  type ScriptRunner,
  type LsReloadPayload,
} from '../../src/engine/trigger-registry.js';
import type { Script } from '../../src/types/script.js';
import type { BackendToFrontend } from '../../src/types/messages.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';
import { setActiveContext } from '../../src/engine/binding.js';

describe('hasNoReloadDirective', () => {
  test('detects directive at line start', () => {
    expect(hasNoReloadDirective('// @no-reload-on-edit\nconst x = 1;')).toBe(true);
  });

  test('detects directive with leading whitespace', () => {
    expect(hasNoReloadDirective('  // @no-reload-on-edit')).toBe(true);
    expect(hasNoReloadDirective('\t// @no-reload-on-edit')).toBe(true);
  });

  test('detects directive on a non-first line', () => {
    expect(hasNoReloadDirective(
      'const x = 1;\n// @no-reload-on-edit\nconst y = 2;',
    )).toBe(true);
  });

  test('does not match directive embedded mid-line (must be at line start)', () => {
    expect(hasNoReloadDirective('const x = 1; // @no-reload-on-edit')).toBe(false);
  });

  test('does not match similar-looking tokens (word boundary + literal match)', () => {
    expect(hasNoReloadDirective('// @no-reload')).toBe(false);
    expect(hasNoReloadDirective('// no-reload-on-edit')).toBe(false);          // missing @
    expect(hasNoReloadDirective('// @no_reload_on_edit')).toBe(false);          // underscores
    expect(hasNoReloadDirective('// @no-reload-on-edit-disabled')).toBe(false); // word-boundary
  });

  test('returns false for code without the directive', () => {
    expect(hasNoReloadDirective('const x = 1;\nconsole.log("hello");')).toBe(false);
    expect(hasNoReloadDirective('')).toBe(false);
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

describe('TriggerRegistry.fireReload — deferred while in-flight', () => {
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

  test('fireReload during an in-flight real run queues and fires on drain', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    // Kick off a real run; the runner will block awaiting `unblockRun`.
    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    // The runner captured the real event (TEST_EVENT) payload first —
    // the dispatcher sets `data.__event` to the event name on every fire.
    expect(h.captured).toHaveLength(1);
    expect((h.captured[0]!.data as { __event: string }).__event).toBe('TEST_EVENT');

    // While the run is in-flight, queue a reload.
    const reloadPayload: LsReloadPayload = {
      reason:           'autosave',
      previousCodeHash: 'old',
      currentCodeHash:  'new',
      previousLength:   50,
      currentLength:    60,
    };
    await h.registry.fireReload(h.seeded, reloadPayload);
    // The reload should NOT have fired yet — captured count unchanged.
    expect(h.captured).toHaveLength(1);

    // Unblock the real run; the drain branch should fire the queued reload.
    h.unblockRun();
    await runP;
    // Drain fires `void this.fireReload(...)` which awaits its own runner.
    // Yield enough times for the microtask + the reload's runner-capture.
    await Promise.resolve();
    await Promise.resolve();

    expect(h.captured).toHaveLength(2);
    expect((h.captured[1]!.data as { __event: string }).__event).toBe('ls:reload');
    expect((h.captured[1]!.data as { currentCodeHash: string }).currentCodeHash).toBe('new');

    // Cleanup — let the queued reload's runner resolve.
    h.unblockRun();
  });

  test('multiple deferred reloads coalesce — latest payload wins', async () => {
    const h       = await setupReloadHarness();
    const handler = await withRegisteredHandler(h);

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();

    // Queue three reloads in quick succession — each overwrites the prior.
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

    // Still just the one captured run (the real event).
    expect(h.captured).toHaveLength(1);

    // Drain.
    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();

    // Exactly ONE additional fire — the latest payload.
    expect(h.captured).toHaveLength(2);
    expect((h.captured[1]!.data as { currentCodeHash: string }).currentCodeHash).toBe('h3');
    expect((h.captured[1]!.data as { currentLength: number }).currentLength).toBe(130);

    h.unblockRun();
  });
});
