/**
 * v1.0.0-rc.5 — end-to-end test for `api.oauth.onCallback`.
 *
 * Validates:
 *   1. Happy path: script registers handler, parent calls
 *      `spindle.oauth.onCallback(wrapper)`, the wrapper fires the user
 *      closure via `sendRunHandlerRequest`, and the user's return value
 *      flows back through the handler-result IPC.
 *   2. Cross-script collision warning: script A registers, script B
 *      registers — `spindle.log.warn` emits naming both scripts.
 *   3. Same-script re-register warning: script A registers, then re-
 *      registers without first unsubscribing — `spindle.log.warn` emits
 *      with the "missing unsub" hint.
 *
 * Companion: parent-side wrapper unit tests in
 * `tests/engine/api/oauth.test.ts`; child-side proxy IPC shape tests
 * in `tests/script-runner/api-proxy-oauth.test.ts`.
 */

import { describe, test, expect, mock } from 'bun:test';
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
    grantedPermissions: new Set<string>(['oauth']),
    userId:             'test-user',
  };
}

function findOAuthCallbackRegister(ipc: ScriptRunnerMockIpc, scriptId?: string): RegisterHandler | undefined {
  return ipc.parentInbox().findLast(
    (m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      if (r.type !== 'register-handler') return false;
      if (r.kind !== 'oauthCallback') return false;
      if (scriptId !== undefined && r.scriptId !== scriptId) return false;
      return true;
    },
  );
}

function getWarnSpy() {
  const spindle = (globalThis as { spindle?: { log: { warn: ReturnType<typeof mock> } } }).spindle!;
  return spindle.log.warn as unknown as { mock: { calls: unknown[][] } };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: api.oauth.onCallback handler fire + warnings', () => {
  test('happy path: handler closure fires with params + return value flows through', async () => {
    const { ipc } = await setupE2E();

    const code = `
      const unsub = await api.oauth.onCallback(async (params) => {
        return { html: '<h1>OK ' + params.code + '</h1>' };
      });
      return 'body-done';
    `;
    const result = await dispatchRunScript(makeScript('script-A', code), makeRequest());
    expect(result.ok).toBe(true);

    const reg = findOAuthCallbackRegister(ipc, 'script-A');
    expect(reg).toBeDefined();
    expect(reg!.kind).toBe('oauthCallback');

    // Fire the handler the same way the host's OAuth callback route would.
    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      reg!.handlerId,
      'oauthCallback',
      [{ code: 'auth-code-xyz', state: 'csrf-nonce-1' }],
      5_000,
    );
    expect(handlerResult.ok).toBe(true);
    expect(handlerResult.value).toEqual({ html: '<h1>OK auth-code-xyz</h1>' });
  });

  test('handler that returns void resolves to undefined (host will render a default page)', async () => {
    const { ipc } = await setupE2E();

    const code = `
      await api.oauth.onCallback(async (_params) => {
        // No return → undefined → host uses default success page.
      });
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());
    const reg = findOAuthCallbackRegister(ipc, 'script-A')!;

    const r = await __sendRunHandlerRequestForTests(
      'script-A',
      reg.handlerId,
      'oauthCallback',
      [{ code: 'X' }],
      5_000,
    );
    expect(r.ok).toBe(true);
    expect(r.value).toBeUndefined();
  });

  test('cross-script collision logs a warn naming both scripts', async () => {
    const { ipc } = await setupE2E();
    const warnSpy = getWarnSpy();
    const beforeCallCount = warnSpy.mock.calls.length;

    // Script A registers first.
    await dispatchRunScript(
      makeScript('script-A', `await api.oauth.onCallback(async () => undefined);`),
      makeRequest(),
    );
    // Then script B registers — should warn.
    await dispatchRunScript(
      makeScript('script-B', `await api.oauth.onCallback(async () => undefined);`),
      makeRequest(),
    );

    // Find the cross-script warning. The message names both scripts.
    const newWarns = warnSpy.mock.calls.slice(beforeCallCount);
    const collisionWarn = newWarns.find(
      (call) => typeof call[0] === 'string' &&
        (call[0] as string).includes('api.oauth.onCallback') &&
        (call[0] as string).includes('script-B') &&
        (call[0] as string).includes('script-A'),
    );
    expect(collisionWarn).toBeDefined();
    expect(collisionWarn![0]).toContain('replacing the OAuth callback handler previously registered');

    // Both registrations landed (last-wins; we don't reject).
    const regs = ipc.parentInbox().filter(
      (m): m is RegisterHandler =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === 'register-handler' &&
        (m as { kind?: unknown }).kind === 'oauthCallback',
    );
    expect(regs.length).toBe(2);
  });

  test('same-script re-register without unsub logs a warn with the missing-unsub hint', async () => {
    const { ipc } = await setupE2E();
    const warnSpy = getWarnSpy();
    const beforeCallCount = warnSpy.mock.calls.length;

    // Script registers twice in the same body, never calling unsub between.
    const code = `
      await api.oauth.onCallback(async () => undefined);
      await api.oauth.onCallback(async () => undefined);
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());

    const newWarns = warnSpy.mock.calls.slice(beforeCallCount);
    const sameScriptWarn = newWarns.find(
      (call) => typeof call[0] === 'string' &&
        (call[0] as string).includes('api.oauth.onCallback') &&
        (call[0] as string).includes('script-A') &&
        (call[0] as string).includes('previous registration from the same script'),
    );
    expect(sameScriptWarn).toBeDefined();
    expect(sameScriptWarn![0]).toContain('missing unsubscribe');

    // Both registrations sent.
    const regs = ipc.parentInbox().filter(
      (m): m is RegisterHandler =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === 'register-handler' &&
        (m as { kind?: unknown }).kind === 'oauthCallback',
    );
    expect(regs.length).toBe(2);
  });

  test('first-registration path emits NO warn (single-handler-per-extension initial case)', async () => {
    const { ipc } = await setupE2E();
    const warnSpy = getWarnSpy();
    const beforeCallCount = warnSpy.mock.calls.length;

    await dispatchRunScript(
      makeScript('script-A', `await api.oauth.onCallback(async () => undefined);`),
      makeRequest(),
    );

    const newWarns = warnSpy.mock.calls.slice(beforeCallCount);
    const oauthWarns = newWarns.filter(
      (call) => typeof call[0] === 'string' &&
        (call[0] as string).includes('api.oauth.onCallback'),
    );
    expect(oauthWarns.length).toBe(0);

    // Sanity: registration still landed.
    expect(findOAuthCallbackRegister(ipc, 'script-A')).toBeDefined();
  });
});
