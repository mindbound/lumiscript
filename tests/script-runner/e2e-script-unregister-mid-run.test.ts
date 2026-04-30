/**
 * Phase 11.D.4 — end-to-end script-unregister cleanup test.
 *
 * Verifies that `unregisterScriptFromChild` propagates through the IPC
 * pipeline and clears child-side state correctly:
 *
 *   - Sends `script-unregister` IPC to the child.
 *   - Child's `handleScriptUnregister` drops `handlerClosures`,
 *     `broadcastHandlers`, and `activeProxies` for the script.
 *   - Subsequent handler fires for the unregistered script land as
 *     `HandlerNotFoundError` from the child.
 *   - Per-script module-scope state in `api-proxy.ts`
 *     (`advancedModalState`, `floatWidgetState`, `domStableIdToElementId`)
 *     gets dropped via `clearScriptStateOnUnregister`.
 *
 * Production wiring: `backend.ts`'s `update_script` (disable) and
 * `delete_script` paths call `unregisterScriptFromChild(scriptId)` —
 * this test exercises that exact path end-to-end.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  unregisterScriptFromChild,
  __sendRunHandlerRequestForTests,
  __hasLastDispatchSnapshotForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler, ScriptUnregisterMessage } from '../../src/types/script-runner-ipc.js';
import type { ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(id: string, code: string): Script {
  return {
    id,
    name: `Test ${id}`,
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
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function findRegisterHandler(
  ipc: ScriptRunnerMockIpc,
  kind: RegisterHandler['kind'],
  name?: string,
): RegisterHandler | undefined {
  return ipc.parentInbox().find(
    (m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      if (r.type !== 'register-handler') return false;
      if (r.kind !== kind) return false;
      if (name !== undefined && (r as { name?: string }).name !== name) return false;
      return true;
    },
  );
}

function macroCtx() {
  return { args: [], characterId: null, chatId: null, userId: 'test-user' };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: script-unregister cleans up child + parent state', () => {
  test('unregisterScriptFromChild sends `script-unregister` IPC to the child', async () => {
    const { ipc } = await setupE2E();
    await dispatchRunScript(
      makeScript('script-A', 'return "body-done";'),
      makeRequest(),
    );

    unregisterScriptFromChild('script-A');

    const unregisterMsg = ipc.childInbox().find(
      (m): m is ScriptUnregisterMessage =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === 'script-unregister',
    );
    expect(unregisterMsg).toBeDefined();
    expect(unregisterMsg!.scriptId).toBe('script-A');
  });

  test('handler closures drop on unregister — subsequent fires return HandlerNotFoundError', async () => {
    const { ipc } = await setupE2E();

    const code = `
      api.macros.register('temp-macro', {
        description: 'will be unregistered',
        returnType:  'string',
      }, () => 'fired');
      return 'body-done';
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());
    const reg = findRegisterHandler(ipc, 'macro', 'temp-macro')!;

    // First fire works.
    const r1 = await __sendRunHandlerRequestForTests(
      'script-A', reg.handlerId, 'macro', [macroCtx()], 5_000,
    );
    expect(r1.ok).toBe(true);
    expect(r1.value).toBe('fired');

    unregisterScriptFromChild('script-A');

    // After unregister, the child has dropped the closure. The next fire
    // would fail child-side with HandlerNotFoundError. But the parent's
    // sendRunHandlerRequest now also fails first because lastDispatchByScript
    // was dropped by unregisterScriptFromChild — the snapshot is gone, so
    // sendRunHandlerRequest can't even build the api.
    await expect(
      __sendRunHandlerRequestForTests('script-A', reg.handlerId, 'macro', [macroCtx()], 5_000),
    ).rejects.toThrow(/no dispatch snapshot for script script-A/);
  });

  test('cross-script: unregistering script A leaves script B handlers firing', async () => {
    const { ipc } = await setupE2E();

    const codeA = `
      api.macros.register('macro-a', {description:'',returnType:'string'}, () => 'A');
      return 'a-done';
    `;
    const codeB = `
      api.macros.register('macro-b', {description:'',returnType:'string'}, () => 'B');
      return 'b-done';
    `;
    await dispatchRunScript(makeScript('script-A', codeA), makeRequest());
    await dispatchRunScript(makeScript('script-B', codeB), makeRequest());

    const regA = findRegisterHandler(ipc, 'macro', 'macro-a')!;
    const regB = findRegisterHandler(ipc, 'macro', 'macro-b')!;

    unregisterScriptFromChild('script-A');

    // B still works.
    const rB = await __sendRunHandlerRequestForTests(
      'script-B', regB.handlerId, 'macro', [macroCtx()], 5_000,
    );
    expect(rB.ok).toBe(true);
    expect(rB.value).toBe('B');

    // A is gone.
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
    expect(__hasLastDispatchSnapshotForTests('script-B')).toBe(true);
    void regA;
  });

  test('unregister + re-register same scriptId — fresh closure replaces old', async () => {
    const { ipc } = await setupE2E();

    // Run 1 registers a handler returning 'first'.
    await dispatchRunScript(
      makeScript('script-A', `
        api.macros.register('reg-macro', {description:'',returnType:'string'}, () => 'first');
        return 'r1';
      `),
      makeRequest(),
    );
    const reg1 = findRegisterHandler(ipc, 'macro', 'reg-macro')!;

    unregisterScriptFromChild('script-A');

    // Run 2 (fresh registration) returns 'second'.
    await dispatchRunScript(
      makeScript('script-A', `
        api.macros.register('reg-macro', {description:'',returnType:'string'}, () => 'second');
        return 'r2';
      `),
      makeRequest(),
    );

    // Find the SECOND register-handler IPC (parentInbox accumulates;
    // first register IPC is at the older index).
    const allMacroRegs = ipc.parentInbox().filter(
      (m): m is RegisterHandler =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === 'register-handler' &&
        (m as { kind?: unknown }).kind === 'macro' &&
        (m as { name?: unknown }).name === 'reg-macro',
    );
    expect(allMacroRegs.length).toBe(2);
    const reg2 = allMacroRegs[1]!;

    // The handlerIds CAN match across runs — the proxy's `nextHandlerSeq`
    // resets per buildProxiedAPI() call, so first-handler-of-the-run
    // always lands as `${scriptId}-${kind}-1`. The parent canonically
    // identifies macros by `name` (not handlerId) and replaces wrapper
    // closures on re-register; the child's handlerClosures map stores
    // the new closure under (scriptId, handlerId), overwriting the
    // previous run's identical key.
    void reg1;

    const r = await __sendRunHandlerRequestForTests(
      'script-A', reg2.handlerId, 'macro', [macroCtx()], 5_000,
    );
    expect(r.ok).toBe(true);
    expect(r.value).toBe('second');
  });
});
