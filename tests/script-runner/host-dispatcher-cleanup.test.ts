/**
 * Phase 11.B.5 — host-dispatcher unregisterScriptFromChild cleanup tests.
 *
 * `unregisterScriptFromChild(scriptId)` is the parent-side counterpart to
 * the child's `script-unregister` handler. Called from `backend.ts` on
 * script disable / delete. Performs in order:
 *
 *   1. Sends a `script-unregister` IPC to the child.
 *   2. Drops every parent-side per-script handle table entry for the
 *      script (pendingModals, pendingDomHandles, pendingAdvancedModals,
 *      pendingInputBarActions, pendingFloatWidgets, pendingDrawerTabs,
 *      handlerCleanups, broadcastForwarders, persistentHandles,
 *      lastDispatchByScript).
 *   3. Drops every script-body activeRun owned by that script + clears
 *      the per-script tracker entry.
 *   4. Rejects awaiters keyed by `${scriptId}:…` (input-bar action
 *      registers + drawer-tab registers). Bare-keyed awaiters
 *      (advancedModalOpens, floatWidgetCreates) keep their natural
 *      timeout per the documented limitation.
 *
 * Coverage scope here:
 *   - script-unregister IPC sent on the wire.
 *   - lastDispatchByScript drop (the easy-to-seed table).
 *   - Idempotency on unknown scriptId.
 *   - Cross-script isolation (one unregister doesn't trash other scripts).
 *
 * Items already covered elsewhere (not duplicated here):
 *   - activeRun + scriptBodyActiveRunByScript drop → B.1
 *   - Input-bar / drawer-tab awaiter rejection on unregister → B.2
 *   - Advanced-modal / float-widget bare-keyed awaiter persistence → B.2
 *
 * Items deferred to Phase 11.D end-to-end coverage (because seeding the
 * tables requires a full api-request flow):
 *   - pendingModals / pendingDomHandles / pendingAdvancedModals /
 *     pendingInputBarActions / pendingFloatWidgets / pendingDrawerTabs /
 *     handlerCleanups / broadcastForwarders / persistentHandles full sweep.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  spawnScriptRunner,
  unregisterScriptFromChild,
  __hasLastDispatchSnapshotForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { Script } from '../../src/types/script.js';
import type { ScriptUnregisterMessage } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

async function setup(): Promise<ScriptRunnerMockIpc> {
  const ipc = installScriptRunnerMockIpc(getSpindle());
  await spawnScriptRunner('test-user');
  return ipc;
}

function makeScript(id: string): Script {
  return {
    id,
    name: `Test ${id}`,
    code: '/* */',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['ls:startup'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

function makeRequest() {
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function findUnregisterMessages(ipc: ScriptRunnerMockIpc): ScriptUnregisterMessage[] {
  return ipc.childInbox().filter(
    (m): m is ScriptUnregisterMessage =>
      typeof m === 'object' && m !== null &&
      (m as { type?: unknown }).type === 'script-unregister',
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('host-dispatcher: unregisterScriptFromChild', () => {
  test('sends a `script-unregister` IPC carrying the scriptId', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    unregisterScriptFromChild('script-A');

    const msgs = findUnregisterMessages(ipc);
    expect(msgs.length).toBe(1);
    expect(msgs[0]!.scriptId).toBe('script-A');
  });

  test('drops the lastDispatchByScript snapshot for that script', async () => {
    await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(true);

    unregisterScriptFromChild('script-A');

    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
  });

  test('on unknown scriptId is a silent no-op (idempotent)', async () => {
    const ipc = await setup();

    expect(() => unregisterScriptFromChild('never-registered')).not.toThrow();

    // Still sends the IPC — the child's handler is itself idempotent
    // on unknown scriptIds (matches the parent's permissive contract).
    const msgs = findUnregisterMessages(ipc);
    expect(msgs.length).toBe(1);
    expect(msgs[0]!.scriptId).toBe('never-registered');
  });

  test('called twice for the same script is safe (no throw, no state corruption)', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    unregisterScriptFromChild('script-A');
    expect(() => unregisterScriptFromChild('script-A')).not.toThrow();

    // Two IPCs sent — caller decides idempotency at their layer.
    const msgs = findUnregisterMessages(ipc);
    expect(msgs.length).toBe(2);
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
  });

  test('cross-script isolation: unregister A leaves B\'s lastDispatchByScript alone', async () => {
    await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    void dispatchRunScript(makeScript('script-B'), makeRequest());
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(true);
    expect(__hasLastDispatchSnapshotForTests('script-B')).toBe(true);

    unregisterScriptFromChild('script-A');

    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
    expect(__hasLastDispatchSnapshotForTests('script-B')).toBe(true);
  });

  test('safe to call when childHandle is null (e.g. before first spawn)', () => {
    // No setup() — IPC pair not installed, child not spawned.
    // unregisterScriptFromChild's IPC-send is wrapped in `if (childHandle)`
    // so a missing handle is a no-op for the IPC step. Per-script table
    // drops still run — they're local state cleanup.
    expect(() => unregisterScriptFromChild('script-A')).not.toThrow();
  });

  test('called after child crash still cleans up parent-side state', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest()).catch(() => {});

    // Crash the child.
    ipc.fireLifecycle({
      processId: ipc.childHandle.processId,
      entry:     ipc.childHandle.entry,
      kind:      ipc.childHandle.kind,
      key:       ipc.childHandle.key,
      state:     'failed',
      at:        new Date().toISOString(),
      error:     'crash',
    });

    // unregisterScriptFromChild should still drop the snapshot even though
    // the IPC send is now a no-op (childHandle is null after crash).
    unregisterScriptFromChild('script-A');
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
  });
});
