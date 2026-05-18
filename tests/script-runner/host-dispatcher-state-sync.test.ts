/**
 * v1.0.0-rc.6 — host-dispatcher state-sync-on-respawn behaviour.
 *
 * The dispatcher tracks which scripts have already received a
 * `script-state-sync` snapshot on each worker. First dispatch of a
 * script to a given worker triggers a snapshot send (gated on content);
 * subsequent dispatches skip the send. Cleanup hooks clear the
 * per-worker "seen" tracker on lifecycle events that drop the child's
 * memory:
 *   - lifecycle 'failed' / 'timed_out'         → cleanupRunsForDeadWorker
 *   - graceful shutdown                         → shutdownWorker
 *   - script unregister (disable / delete)      → unregisterScriptFromChild
 *   - test reset                                → __resetForTests
 *
 * Coverage exercises both:
 *   - Observable behaviour: childInbox contains/omits the `script-state-sync`
 *     message at the expected times, in the expected order relative to
 *     `run-script`.
 *   - Internal tracker state: via `__hasScriptBeenSeenOnWorkerForTests`,
 *     so cleanup-hook tests don't need a full child runtime + redispatch.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  dispatchRunScript,
  spawnScriptRunner,
  unregisterScriptFromChild,
  DEFAULT_WORKER_KEY,
  __resetForTests,
  __hasScriptBeenSeenOnWorkerForTests,
  __markScriptSeenOnWorkerForTests,
  __clearScriptsSeenPerWorkerForTests,
} from '../../src/script-runner/host-dispatcher.js';
import {
  registerElement,
  __reset as resetDomRegistry,
} from '../../src/engine/dom-registry.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import { setupE2E, type E2EFixture } from '../_infra/script-runner-fixture.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { Script } from '../../src/types/script.js';
import type { BackendProcessLifecycleEventDTO } from 'lumiverse-spindle-types';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

function makeScript(id: string, code = '/* */'): Script {
  return {
    id,
    name:           `Test ${id}`,
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
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function countSyncMessages(ipc: ScriptRunnerMockIpc, scriptId?: string): number {
  return ipc.childInbox().filter((m) => {
    if (typeof m !== 'object' || m === null) return false;
    if ((m as { type?: unknown }).type !== 'script-state-sync') return false;
    if (scriptId === undefined) return true;
    const snapshot = (m as { snapshot?: { scriptId?: string } }).snapshot;
    return snapshot?.scriptId === scriptId;
  }).length;
}

function fireFailed(ipc: ScriptRunnerMockIpc): void {
  const evt: BackendProcessLifecycleEventDTO = {
    processId: ipc.childHandle.processId,
    entry:     ipc.childHandle.entry,
    kind:      ipc.childHandle.kind,
    key:       ipc.childHandle.key,
    state:     'failed',
    at:        new Date().toISOString(),
    error:     'simulated worker crash',
  };
  ipc.fireLifecycle(evt);
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('host-dispatcher: state-sync send on first dispatch', () => {
  let fixture: E2EFixture;

  beforeEach(async () => {
    __resetForTests();
    resetDomRegistry();
    fixture = await setupE2E();
  });

  test('first dispatch with stable-id content sends sync BEFORE run-script', async () => {
    const scriptId = 'state-sync-first';
    // Pre-populate dom-registry as if a prior run had injected with a stableId.
    registerElement('el-1', scriptId, 'foo');
    registerElement('el-2', scriptId, 'bar');

    await dispatchRunScript(makeScript(scriptId), makeRequest());

    const inbox = fixture.ipc.childInbox();
    const syncIdx = inbox.findIndex(
      (m) => typeof m === 'object' && m !== null && (m as { type?: unknown }).type === 'script-state-sync',
    );
    const runIdx = inbox.findIndex(
      (m) => typeof m === 'object' && m !== null && (m as { type?: unknown }).type === 'run-script',
    );

    expect(syncIdx).toBeGreaterThanOrEqual(0);
    expect(runIdx).toBeGreaterThanOrEqual(0);
    expect(syncIdx).toBeLessThan(runIdx);

    // Snapshot payload matches the dom-registry contents.
    const syncMsg = inbox[syncIdx] as {
      type: 'script-state-sync';
      snapshot: { scriptId: string; domStableIds?: Record<string, string> };
    };
    expect(syncMsg.snapshot.scriptId).toBe(scriptId);
    expect(syncMsg.snapshot.domStableIds).toEqual({
      foo: 'el-1',
      bar: 'el-2',
    });
  });

  test('first dispatch with NO stable-id content does not send sync', async () => {
    const scriptId = 'state-sync-empty';
    // No registerElement calls — script has nothing to sync.

    await dispatchRunScript(makeScript(scriptId), makeRequest());

    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(0);

    // But the script IS marked as seen — the dispatcher "started the
    // conversation" with the child, so subsequent dispatches stay
    // skip-the-snapshot regardless of whether stable-ids show up later.
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(true);
  });

  test('second dispatch on same worker does NOT re-send sync', async () => {
    const scriptId = 'state-sync-second';
    registerElement('el-1', scriptId, 'foo');

    await dispatchRunScript(makeScript(scriptId), makeRequest());
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(1);

    await dispatchRunScript(makeScript(scriptId), makeRequest());
    // Still 1 — the second dispatch was skipped.
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(1);
  });

  test('different scripts on same worker each get their own sync', async () => {
    registerElement('el-a', 'script-A', 'foo');
    registerElement('el-b', 'script-B', 'bar');

    await dispatchRunScript(makeScript('script-A'), makeRequest());
    await dispatchRunScript(makeScript('script-B'), makeRequest());

    expect(countSyncMessages(fixture.ipc, 'script-A')).toBe(1);
    expect(countSyncMessages(fixture.ipc, 'script-B')).toBe(1);

    // And one more dispatch of each — no additional syncs.
    await dispatchRunScript(makeScript('script-A'), makeRequest());
    await dispatchRunScript(makeScript('script-B'), makeRequest());
    expect(countSyncMessages(fixture.ipc, 'script-A')).toBe(1);
    expect(countSyncMessages(fixture.ipc, 'script-B')).toBe(1);
  });
});

// ─── Cleanup hooks: tracker state directly (no respawn dispatch needed) ─────

describe('host-dispatcher: state-sync cleanup hooks', () => {
  let ipc: ScriptRunnerMockIpc;

  beforeEach(async () => {
    __resetForTests();
    resetDomRegistry();
    ipc = installScriptRunnerMockIpc(getSpindle());
    await spawnScriptRunner('test-user');
  });

  test('worker death (failed lifecycle) clears the per-worker seen set', () => {
    // Seed three scripts as "seen" on the spawned worker (DEFAULT_WORKER_KEY
    // = 'worker-1'), plus one on a different worker (which should NOT be
    // cleared — fireFailed targets only the worker whose key is in the
    // lifecycle event).
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A');
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-B');
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-C');
    __markScriptSeenOnWorkerForTests('other-worker', 'script-D');

    // Sanity: all four are marked.
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A')).toBe(true);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-B')).toBe(true);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-C')).toBe(true);
    expect(__hasScriptBeenSeenOnWorkerForTests('other-worker', 'script-D')).toBe(true);

    // Use the IPC from beforeEach (its childHandle.key is the default
    // worker key, so the parent's lifecycle handler routes the event
    // through cleanupRunsForDeadWorker, which clears scriptsSeenPerWorker
    // for that worker key).
    fireFailed(ipc);

    // DEFAULT_WORKER_KEY's set is cleared; other-worker untouched.
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A')).toBe(false);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-B')).toBe(false);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-C')).toBe(false);
    expect(__hasScriptBeenSeenOnWorkerForTests('other-worker', 'script-D')).toBe(true);
  });

  test('unregisterScriptFromChild drops the script from every worker seen set', () => {
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A');
    __markScriptSeenOnWorkerForTests('worker-2', 'script-A');
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-B');

    unregisterScriptFromChild('script-A');

    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A')).toBe(false);
    expect(__hasScriptBeenSeenOnWorkerForTests('worker-2', 'script-A')).toBe(false);
    // script-B's entry on default worker is untouched — only script-A is wiped.
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-B')).toBe(true);
  });

  test('__resetForTests clears the entire seen map', () => {
    __markScriptSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A');
    __markScriptSeenOnWorkerForTests('worker-2', 'script-B');

    __resetForTests();

    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, 'script-A')).toBe(false);
    expect(__hasScriptBeenSeenOnWorkerForTests('worker-2', 'script-B')).toBe(false);
  });
});

// ─── Re-sync after the seen tracker is cleared ───────────────────────────────

describe('host-dispatcher: state-sync re-arms after seen-tracker clear', () => {
  let fixture: E2EFixture;

  beforeEach(async () => {
    __resetForTests();
    resetDomRegistry();
    fixture = await setupE2E();
  });

  test('dispatch after seen-tracker clear re-sends the snapshot', async () => {
    // This test exercises the parent-side "re-send snapshot post-worker-
    // death" behaviour by clearing the seen-tracker directly (via the
    // test-only helper) rather than firing the full lifecycle event +
    // re-spawning. The seen-tracker is what gates the snapshot send, so
    // clearing it is the load-bearing simulation step. The dom-registry
    // is preserved (it survives worker death by design).
    const scriptId = 'state-sync-respawn';
    registerElement('el-1', scriptId, 'foo');

    // ── Run 1 — first dispatch, sync sent ──────────────────────────────
    await dispatchRunScript(makeScript(scriptId), makeRequest());
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(1);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(true);

    // ── Run 2 — same worker, no sync expected (already seen) ───────────
    await dispatchRunScript(makeScript(scriptId), makeRequest());
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(1);

    // ── Simulate worker death's effect on the seen tracker ─────────────
    __clearScriptsSeenPerWorkerForTests();
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(false);

    // ── Run 3 — tracker is empty, sync re-sent ─────────────────────────
    await dispatchRunScript(makeScript(scriptId), makeRequest());
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(2);
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(true);

    // ── Run 4 — same worker, no further sync ───────────────────────────
    await dispatchRunScript(makeScript(scriptId), makeRequest());
    expect(countSyncMessages(fixture.ipc, scriptId)).toBe(2);
  });
});
