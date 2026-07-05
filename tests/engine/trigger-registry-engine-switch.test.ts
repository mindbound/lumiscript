/**
 * Engine-switch migration semantics — the selective fan-out's two halves.
 *
 * On an engineMode change, the backend partitions enabled trigger scripts with
 * `scriptRunsOnStartup`: startup-triggered scripts take the full `fireReload` (wipe + body re-run,
 * spaced), event-driven scripts take `fireEngineSwitchWipe` (wipe ONLY — their next natural trigger
 * fire re-runs the body under the new engine, so an automatic re-run would just burn cost).
 *
 * These tests pin the `fireEngineSwitchWipe` contract:
 *   - idle → the wipe hook runs, the body does NOT;
 *   - in-flight → DEFERRED (wiping mid-run would let the still-executing body re-register state on
 *     the old engine after the wipe passed); the queued wipe drains once idle — still no body run;
 *   - a queued full reload SUPERSEDES a queued wipe (the reload wipes before re-running) — the
 *     drain must not double-wipe;
 *   - the hook-absent fallback (partial wipe) completes cleanly.
 *
 * Harness mirrors trigger-registry-reload.test.ts: a controllable ScriptRunner that records into
 * `callOrder` alongside the wipe hook, so ordering asserts with one check.
 */

import { describe, test, expect, mock } from 'bun:test';
import {
  TriggerRegistry,
  type TriggerDeps,
  type ScriptRunner,
} from '../../src/engine/trigger-registry.js';
import {
  __setBroadcastHandlerInFlightForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { scriptRunsOnStartup } from '../../src/types/script.js';
import type { Script } from '../../src/types/script.js';
import type { BackendToFrontend } from '../../src/types/messages.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';
import { setActiveContext } from '../../src/engine/binding.js';

describe('scriptRunsOnStartup', () => {
  const base = { triggers: undefined as string[] | undefined };
  test('true for a script with an ls:startup trigger', () => {
    expect(scriptRunsOnStartup({ ...base, triggers: ['ls:startup'] })).toBe(true);
  });
  test('true when ls:startup is one of several triggers', () => {
    expect(scriptRunsOnStartup({ ...base, triggers: ['MESSAGE_SENT', 'ls:startup'] })).toBe(true);
  });
  test('false for an event-only script', () => {
    expect(scriptRunsOnStartup({ ...base, triggers: ['MESSAGE_SENT'] })).toBe(false);
  });
  test('false for empty or missing triggers', () => {
    expect(scriptRunsOnStartup({ ...base, triggers: [] })).toBe(false);
    expect(scriptRunsOnStartup({ triggers: undefined })).toBe(false);
  });
});

interface WipeHarness {
  registry:       TriggerRegistry;
  seeded:         Script;
  callOrder:      string[];
  wipeCalledWith: string[];
  unblockRun:     () => void;
}

/** Controllable runner + recording wipe hook — both push into `callOrder`. */
async function setupWipeHarness(withWipeHook = true): Promise<WipeHarness> {
  const adapter = new InMemoryStorageAdapter();
  const storage = new ScriptStorage(adapter, () => 'test-user');
  await storage.load();

  const seeded: Script = {
    id:             'engine-switch-test',
    name:           'Engine Switch Test',
    code:           '/* body */',
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['TEST_EVENT'],   // event-driven — the wipe-only half of the partition
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
  await storage.store.create(seeded);

  const callOrder:      string[] = [];
  const wipeCalledWith: string[] = [];

  let nextResolve: (() => void) | null = null;
  const controllableRunner: ScriptRunner = async (_script, _request) => {
    callOrder.push('runner');
    await new Promise<void>((r) => { nextResolve = r; });
    return { success: true, duration: 1 };
  };

  const deps: TriggerDeps = {
    grantedPermissions: new Set(),
    userId:             'test-user',
    scriptStorage:      storage,
    scriptTimeoutMs:    5_000,
    ...(withWipeHook ? {
      wipeScriptStateForReload: async (scriptId: string) => {
        callOrder.push('wipe');
        wipeCalledWith.push(scriptId);
      },
    } : {}),
  };
  const sendToFrontend = mock((_msg: BackendToFrontend) => {});
  const registry       = new TriggerRegistry(() => deps, sendToFrontend, controllableRunner);

  setActiveContext({ chatId: 'test-chat', characterId: 'test-char' });

  return {
    registry, seeded, callOrder, wipeCalledWith,
    unblockRun: () => {
      const r = nextResolve;
      nextResolve = null;
      r?.();
    },
  };
}

describe('TriggerRegistry.fireEngineSwitchWipe', () => {
  test('idle: wipes registered state WITHOUT re-running the body', async () => {
    const h = await setupWipeHarness();
    await h.registry.fireEngineSwitchWipe(h.seeded);

    expect(h.callOrder).toEqual(['wipe']);          // wipe ran, runner never invoked
    expect(h.wipeCalledWith).toEqual([h.seeded.id]);
  });

  test('in-flight (broadcast handler): DEFERS, then wipes once idle — still no body run', async () => {
    const h = await setupWipeHarness();
    __setBroadcastHandlerInFlightForTests(h.seeded.id, 1);
    try {
      await h.registry.fireEngineSwitchWipe(h.seeded);
      // Deferred — wiping now would let the in-flight handler re-register
      // state on the old engine after the wipe passed.
      expect(h.callOrder).toEqual([]);
    } finally {
      __setBroadcastHandlerInFlightForTests(h.seeded.id, 0);
    }
    // The idle poll (1s interval) drains the queued wipe on its next tick.
    await new Promise((r) => setTimeout(r, 1_100));
    expect(h.callOrder).toEqual(['wipe']);
    expect(h.wipeCalledWith).toEqual([h.seeded.id]);
  });

  test('a queued manual reload SUPERSEDES a queued wipe — drain wipes once, runs once', async () => {
    const h = await setupWipeHarness();
    // Drive a real run via the registered event handler so runningCounts increments.
    await h.registry.register(h.seeded);
    const onMock = (globalThis as unknown as {
      spindle: { on: { mock: { calls: unknown[][] } } };
    }).spindle.on;
    const handler = onMock.mock.calls.slice(-1)[0]![1] as (p: unknown) => Promise<void>;

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    expect(h.callOrder).toEqual(['runner']);        // real run in flight

    // Engine switch queues a wipe; the user then presses Reload (manual) — both queued.
    await h.registry.fireEngineSwitchWipe(h.seeded);
    await h.registry.fireReload(h.seeded, {
      reason: 'manual', previousCodeHash: 'a', currentCodeHash: 'a',
      previousLength: 1, currentLength: 1,
    });
    expect(h.callOrder).toEqual(['runner']);        // both deferred

    // Drain the real run — the completion drain fires the reload (which wipes
    // first) and consumes the queued wipe rather than double-wiping.
    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 50));

    expect(h.callOrder).toEqual(['runner', 'wipe', 'runner']); // ONE wipe (the reload's), then its run
    expect(h.wipeCalledWith).toEqual([h.seeded.id]);
    h.unblockRun();                                  // release the reload's run

    // Prove the wipe flag was consumed: the poll must not deliver a second
    // wipe later.
    await new Promise((r) => setTimeout(r, 1_200));
    expect(h.callOrder).toEqual(['runner', 'wipe', 'runner']);
  });

  test('in-flight real run: queued wipe drains on run completion — no body re-run', async () => {
    const h = await setupWipeHarness();
    await h.registry.register(h.seeded);
    const onMock = (globalThis as unknown as {
      spindle: { on: { mock: { calls: unknown[][] } } };
    }).spindle.on;
    const handler = onMock.mock.calls.slice(-1)[0]![1] as (p: unknown) => Promise<void>;

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    expect(h.callOrder).toEqual(['runner']);

    await h.registry.fireEngineSwitchWipe(h.seeded); // in-flight → queued
    expect(h.callOrder).toEqual(['runner']);

    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 50));

    // The completion drain wiped — and did NOT re-run the body.
    expect(h.callOrder).toEqual(['runner', 'wipe']);
    expect(h.wipeCalledWith).toEqual([h.seeded.id]);
  });

  test('hook-absent fallback (partial wipe) completes cleanly without a runner call', async () => {
    const h = await setupWipeHarness(false);
    await h.registry.fireEngineSwitchWipe(h.seeded); // must not throw
    expect(h.callOrder).toEqual([]);                 // no runner; partial wipe has no recorder
  });

  test('unregister CLEARS a queued wipe — no stale wipe fires when the in-flight run later drains', async () => {
    const h = await setupWipeHarness();
    await h.registry.register(h.seeded);
    const onMock = (globalThis as unknown as {
      spindle: { on: { mock: { calls: unknown[][] } } };
    }).spindle.on;
    const handler = onMock.mock.calls.slice(-1)[0]![1] as (p: unknown) => Promise<void>;

    const runP = handler({ messageId: 'm1' });
    await Promise.resolve();
    expect(h.callOrder).toEqual(['runner']);         // real run in flight

    await h.registry.fireEngineSwitchWipe(h.seeded); // in-flight → queued (deferred)
    expect(h.callOrder).toEqual(['runner']);

    // Teardown WHILE the wipe is queued + the run in flight. The script stays ENABLED in storage (as on a
    // master-toggle-off / rebuild teardown), so the run-completion drain's enabled guard would NOT stop a
    // stale wipe — only clearing the queued-wipe set does.
    h.registry.unregister(h.seeded.id, { clearLifecycleSubs: true });

    // Drain the in-flight run. runningCounts hits 0 before the drain, so a surviving queued wipe WOULD fire
    // here (the script is still enabled) — the cleared set is what keeps it from happening.
    h.unblockRun();
    await runP;
    await Promise.resolve();
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 50));
    expect(h.callOrder).toEqual(['runner']);         // NO stale 'wipe'

    // And the idle poll must not deliver one later either.
    await new Promise((r) => setTimeout(r, 1_200));
    expect(h.callOrder).toEqual(['runner']);
  });
});
