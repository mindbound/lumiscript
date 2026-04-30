/**
 * Phase 11.E.3 — end-to-end AbortSignal propagation through the proxy +
 * IPC + parent's `handleApiRequest` controller injection.
 *
 * Phase 8's signal handling spans both sides:
 *   - Child proxy: strips `signal` from opts, marks `hasSignal: true` on
 *     the api-request, attaches an abort listener that fires
 *     `abort-request` IPC on signal abort.
 *   - Parent: on `hasSignal: true`, creates an `AbortController`, stores
 *     it under requestId, injects the controller's signal into the last
 *     object arg before dispatching to the canonical method. On
 *     `abort-request` IPC arrival, `handleAbortRequest` looks up the
 *     controller and calls `.abort()`, propagating cancellation into the
 *     canonical method's underlying network call (or whatever).
 *
 * This test walks the full path:
 *   1. Override `spindle.generate.raw` with a controllable promise that
 *      observes the injected signal.
 *   2. Run a script that calls `api.llm.generate(messages, { signal })`
 *      and aborts via `setTimeout`.
 *   3. Verify the api-request landed with `hasSignal: true` AND the
 *      injected signal in the opts arg.
 *   4. Verify the abort-request IPC was sent from the child.
 *   5. Verify the parent's controller observed the abort and the
 *      canonical promise rejected accordingly.
 */

import { describe, test, expect } from 'bun:test';
import { dispatchRunScript } from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { ApiProxyRequest, AbortRequest } from '../../src/types/script-runner-ipc.js';
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
    timeoutMs:          10_000,
    grantedPermissions: new Set<string>(['generation']),
    userId:             'test-user',
  };
}

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

function findApiRequest(ipc: ScriptRunnerMockIpc, method: string): ApiProxyRequest | undefined {
  return ipc.parentInbox().find(
    (m): m is ApiProxyRequest => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as ApiProxyRequest;
      return r.type === 'api-request' && r.method === method;
    },
  );
}

function findAbortRequest(ipc: ScriptRunnerMockIpc, requestId: string): AbortRequest | undefined {
  return ipc.parentInbox().find(
    (m): m is AbortRequest => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as AbortRequest;
      return r.type === 'abort-request' && r.requestId === requestId;
    },
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: AbortSignal end-to-end propagation', () => {
  test('signal abort fires abort-request IPC AND parent\'s injected controller observes the abort', async () => {
    const { ipc } = await setupE2E();
    const spindle = getSpindle();

    // Capture the signal the parent injects and resolve / reject based
    // on it. Mirrors a real LLM generation that respects the signal.
    let parentSideSignal: AbortSignal | null = null;
    let parentSideAborted = false;

    // Canonical `spindle.generate.raw` is called with a SINGLE options object
    // that carries `messages`, `signal`, etc. — not (messages, opts).
    spindle.generate.raw = (async (req: { signal?: AbortSignal }) => {
      parentSideSignal = req.signal ?? null;
      return new Promise<{ content: string; tool_calls: never[] }>((_, reject) => {
        if (!req.signal) {
          reject(new Error('test expected the parent to inject a signal'));
          return;
        }
        req.signal.addEventListener('abort', () => {
          parentSideAborted = true;
          reject(new Error('AbortError'));
        });
      });
    }) as MockSpindle['generate']['raw'];

    // Script: call generate with a signal, abort after a short delay,
    // catch the rejection, return a marker.
    const result = await dispatchRunScript(
      makeScript('script-A', `
        const ac = new AbortController();
        setTimeout(() => ac.abort(), 30);
        try {
          await api.llm.generate(
            [{ role: 'user', content: 'hi' }],
            { signal: ac.signal },
          );
          return 'no-throw';
        } catch (err) {
          return 'caught:' + (err.message || String(err));
        }
      `),
      makeRequest(),
    );

    expect(result.ok).toBe(true);
    expect(String(result.value)).toContain('caught:');

    // Verify the api-request was emitted with hasSignal: true.
    const apiReq = findApiRequest(ipc, 'llm.generate');
    expect(apiReq).toBeDefined();
    expect(apiReq!.hasSignal).toBe(true);

    // Verify the parent received the user-side signal (via the
    // controller it created and injected into the canonical's opts arg).
    expect(parentSideSignal).not.toBeNull();
    expect(parentSideAborted).toBe(true);

    // Verify the child sent an abort-request matching the api-request's id.
    const abortReq = findAbortRequest(ipc, apiReq!.requestId);
    expect(abortReq).toBeDefined();
  });

  test('pre-aborted signal lands the abort-request immediately (sync after the api-request)', async () => {
    const { ipc } = await setupE2E();
    const spindle = getSpindle();

    spindle.generate.raw = (async (req: { signal?: AbortSignal }) => {
      return new Promise<{ content: string; tool_calls: never[] }>((_, reject) => {
        // The pre-aborted signal's listener fires synchronously; the
        // parent gets the abort-request right after the api-request.
        if (req.signal?.aborted) {
          reject(new Error('AbortError-already-aborted'));
        } else {
          req.signal?.addEventListener('abort', () => reject(new Error('AbortError')));
        }
      });
    }) as MockSpindle['generate']['raw'];

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const ac = new AbortController();
        ac.abort();   // BEFORE the dispatch
        try {
          await api.llm.generate(
            [{ role: 'user', content: 'hi' }],
            { signal: ac.signal },
          );
          return 'no-throw';
        } catch (err) {
          return 'caught:' + err.message;
        }
      `),
      makeRequest(),
    );

    expect(result.ok).toBe(true);
    expect(String(result.value)).toMatch(/caught:.*Abort/);

    const apiReq = findApiRequest(ipc, 'llm.generate');
    const abortReq = findAbortRequest(ipc, apiReq!.requestId);
    expect(abortReq).toBeDefined();

    // Verify ordering: api-request precedes abort-request in parentInbox.
    const inbox = ipc.parentInbox();
    const apiIdx   = inbox.indexOf(apiReq!);
    const abortIdx = inbox.indexOf(abortReq!);
    expect(apiIdx).toBeGreaterThanOrEqual(0);
    expect(abortIdx).toBeGreaterThan(apiIdx);
  });
});
