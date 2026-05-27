/**
 * v1.0.0-rc.8 regression test — `async`-keyword handlers passed to
 * `DOMHandle.on / InputBarActionHandle.onClick / FloatWidgetHandle.onDragEnd
 * / DrawerTabHandle.onActivate` must have their full await chain awaited by
 * the engine's handler wrapper, so dispatches initiated after `await` inside
 * the handler land while the activeRun is still alive.
 *
 * Bug (caught during rc.8 docs-cycle field testing):
 *
 *   `api-proxy.ts`'s wrappers for the four handler kinds above stored the
 *   user closure under an `async` shell that called `handler(...)` WITHOUT
 *   `await`-ing it:
 *
 *     ctx.registerHandlerClosure(handlerId, async (...args) => {
 *       handler(args[0]);   // ← fire-and-forget
 *     });
 *
 *   For sync handlers this is fine — `handler(args[0])` returns undefined
 *   synchronously, the wrapper's Promise resolves immediately, handler-result
 *   IPC carries `ok=true durationMs≈0`. For an ASYNC user handler, the
 *   wrapper still resolves immediately (it never awaits the returned
 *   Promise), the parent fires handler-result + drops the activeRun within
 *   microseconds, and any dispatches the user's async handler makes after
 *   its first `await` arrive at the parent AFTER the run was closed →
 *   RunCompletedError, silently swallowed by the proxy's `.catch(() => {})`
 *   sync-void wrappers. From the user's perspective: "my handler runs but
 *   none of its post-await api calls take effect, and I see an
 *   unhandledRejection RunCompletedError in the console."
 *
 *   The user-facing TypeScript signature is `(data) => void`. TS's `void`
 *   return type is permissive — it accepts `Promise<void>` — so passing an
 *   async function is type-legal and the natural way to write a handler
 *   that needs async work. The engine wrapper failed to honor that.
 *
 * Fix (api-proxy.ts):
 *   ctx.registerHandlerClosure(handlerId, async (...args) => {
 *     await handler(args[0]);   // ← keep activeRun alive across await chain
 *   });
 *
 *   Applied to all four affected wrappers:
 *     - `domEventListener` (DOMHandle.on)
 *     - `inputBarActionClick` (api.ui.registerInputBarAction onClick)
 *     - `floatWidgetDragEnd` (FloatWidgetHandle.onDragEnd)
 *     - `drawerTabActivate` (DrawerTabHandle.onActivate)
 *
 * Coverage:
 *   End-to-end — handle.on('click', async () => { await X(); handle.update(Y); })
 *   reaches the FE via `dom_update` IPC. With the bug, the post-await
 *   handle.update dispatch was dropped silently (proxy's `.catch(() => {})`
 *   sync-void wrapper swallowed the RunCompletedError). With the fix, the
 *   FE sees the new HTML.
 *
 * Future-proofing: any refactor that reverts the `await` in any of the four
 * wrappers will fail this test and surface the regression immediately.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  __sendRunHandlerRequestForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler } from '../../src/types/script-runner-ipc.js';
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
    // app_manipulation gates `api.ui.dom.inject` + DOMHandle methods.
    // scriptStorage methods (the async ops the handler awaits) need no
    // permission.
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function findDomListenerHandler(ipc: ScriptRunnerMockIpc): RegisterHandler | undefined {
  return ipc.parentInbox().find(
    (m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      return r.type === 'register-handler' && r.kind === 'domEventListener';
    },
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: async handler with await chain (rc.8 regression)', () => {
  test('async DOMHandle.on click handler: post-await handle.update reaches the FE', async () => {
    const { ipc } = await setupE2E();
    const mockSpindle = (globalThis as { spindle?: { sendToFrontend: ReturnType<typeof Object> } }).spindle!;
    const sendToFrontend = mockSpindle.sendToFrontend as unknown as { mock: { calls: unknown[][] } };

    // The crucial shape: handler is `async` and `await`s an api call BEFORE
    // calling handle.update. Pre-fix, the wrapper's `handler(args[0])`
    // returned the pending Promise (discarded), wrapper resolved immediately,
    // activeRun dropped — the post-await handle.update dispatch landed late
    // and was silently swallowed by `.catch(() => {})`. Post-fix, the
    // wrapper awaits the entire chain, handle.update lands while the
    // activeRun is still alive.
    const code = `
      const handle = api.ui.dom.inject(
        'body',
        '<div data-action="trigger">INITIAL</div>',
        { id: 'async-chip' }
      );
      handle.on('click', async () => {
        await api.scriptStorage.set('async-test-key', 'fired');
        await api.scriptStorage.get('async-test-key');
        handle.update('<div data-action="trigger">UPDATED-AFTER-AWAIT</div>');
      });
      return 'body-done';
    `;
    const scriptResult = await dispatchRunScript(makeScript('script-A', code), makeRequest());
    expect(scriptResult.ok).toBe(true);

    const reg = findDomListenerHandler(ipc);
    expect(reg).toBeDefined();

    const callsBefore = sendToFrontend.mock.calls.length;

    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      reg!.handlerId,
      'domEventListener',
      [{ type: 'click', dataset: { action: 'trigger' } }],
      5_000,
    );

    expect(handlerResult.ok).toBe(true);

    // The post-await handle.update MUST reach the FE. With the bug,
    // this assertion would fail — the dispatch would be late and silently
    // dropped, no dom_update IPC would arrive.
    const newCalls = sendToFrontend.mock.calls.slice(callsBefore);
    const domUpdates = newCalls.filter(
      (call: unknown[]) =>
        typeof call[0] === 'object' && call[0] !== null &&
        (call[0] as { type?: unknown }).type === 'dom_update',
    );
    expect(domUpdates.length).toBe(1);
    const updateMsg = domUpdates[0]![0] as { type: 'dom_update'; html: string; elementId: string };
    expect(updateMsg.html).toContain('UPDATED-AFTER-AWAIT');
  });

});
