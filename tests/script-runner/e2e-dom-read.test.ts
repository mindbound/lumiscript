/**
 * v1.0.0-rc.6 — end-to-end tests for `DOMHandle.read()` IPC roundtrip.
 *
 * `read()` is the first DOMHandle method whose canonical implementation
 * AWAITS a frontend response. The roundtrip is:
 *
 *   1. Script calls `handle.read(options)` — proxy dispatches
 *      `ui._dom.read` api-request to parent.
 *   2. Parent's `handleInternalDomRequest` 'read' branch looks up the
 *      canonical DOMHandle and calls `handle.read(options)`.
 *   3. Canonical adds a (requestId → resolver) entry to
 *      `pendingDomReads` and sends `dom_read_request` to the frontend.
 *   4. Frontend builds the snapshot from its `elementMap` entry, sends
 *      back `dom_read_response { requestId, snapshot }`.
 *   5. Backend's frontend-message handler routes the response to
 *      `resolveDomRead(requestId, snapshot)` which resolves the
 *      pending promise.
 *   6. Parent's `handleInternalDomRequest` await resolves → returns
 *      api-response with the snapshot value.
 *   7. Proxy's `dispatchOnHandle` resolves → user's `await
 *      handle.read()` resolves with the snapshot.
 *
 * In the test, the frontend doesn't exist (no DOM, no `dom-handler`
 * wired up). The test synthesises step 4 by intercepting
 * `dom_read_request` on `spindle.sendToFrontend` and calling
 * `resolveDomRead` directly on the same backend module. Steps 5-7
 * then proceed as normal.
 *
 * Assertion strategy: script-body throws on unexpected snapshot
 * values, so `result.ok` cleanly reflects pass/fail. Side-effects
 * (the `dom_read_request` payload shape) are spot-checked via
 * `sendToFrontend.mock.calls`.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  __resetForTests,
} from '../../src/script-runner/host-dispatcher.js';
import {
  resolveDomRead,
  __resetDomReadsForTests,
} from '../../src/engine/api/dom.js';
import { __reset as resetDomRegistry } from '../../src/engine/dom-registry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { SerializedDOMElement } from '../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(id: string, code: string): Script {
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

interface SendToFrontendMock {
  mock: { calls: unknown[][] };
  mockImplementation: (fn: (msg: unknown) => void) => void;
}

function getSendToFrontend(): SendToFrontendMock {
  return (globalThis as { spindle?: { sendToFrontend: SendToFrontendMock } }).spindle!
    .sendToFrontend as SendToFrontendMock;
}

/**
 * Wire an FE-side responder for `dom_read_request` IPCs. Each request
 * triggers a microtask that synthesises a `dom_read_response` via
 * `resolveDomRead`. The `synthesise` function picks a snapshot per
 * request — typically constant per test, but parameterisable for the
 * "second read sees updated state" case.
 *
 * `queueMicrotask` (rather than calling `resolveDomRead` synchronously)
 * matches production timing: the FE roundtrip is naturally async, and
 * the script-body's `await` should unwind through a microtask boundary.
 * Sync-resolving has been observed to cause reentrant routing surprises
 * in similar fixtures elsewhere in the codebase.
 */
function wireDomReadResponder(
  synthesise: (req: { requestId: string; elementId: string; options: { html?: boolean } }) => SerializedDOMElement | null,
): void {
  const send = getSendToFrontend();
  send.mockImplementation((msg) => {
    if (
      typeof msg === 'object' &&
      msg !== null &&
      (msg as { type?: unknown }).type === 'dom_read_request'
    ) {
      const req = msg as { requestId: string; elementId: string; options: { html?: boolean } };
      queueMicrotask(() => {
        resolveDomRead(req.requestId, synthesise(req));
      });
    }
  });
}

function findDomReadRequests(): Array<{ requestId: string; elementId: string; options: { html?: boolean } }> {
  return getSendToFrontend().mock.calls
    .map((c) => c[0])
    .filter(
      (m): m is { type: 'dom_read_request'; requestId: string; elementId: string; options: { html?: boolean } } =>
        typeof m === 'object' &&
        m !== null &&
        (m as { type?: unknown }).type === 'dom_read_request',
    )
    .map((m) => ({ requestId: m.requestId, elementId: m.elementId, options: m.options }));
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: DOMHandle.read() IPC roundtrip', () => {
  test('basic read resolves with the frontend-synthesised snapshot', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    // Test "FE" always replies with this fixed snapshot — script body
    // asserts the shape matches what was sent.
    wireDomReadResponder(() => ({
      tag:        'button',
      attrs:      { class: 'primary', id: 'submit' },
      text:       'Submit',
      childCount: 0,
    }));

    const body = `
      const h = api.ui.dom.inject('body', '<button class="primary" id="submit">Submit</button>', { id: 'foo' });
      const snap = await h.read();
      if (snap === null)               throw new Error('expected snapshot, got null');
      if (snap.tag !== 'button')       throw new Error('tag: ' + snap.tag);
      if (snap.attrs.class !== 'primary') throw new Error('class: ' + snap.attrs.class);
      if (snap.attrs.id !== 'submit')  throw new Error('id: ' + snap.attrs.id);
      if (snap.text !== 'Submit')      throw new Error('text: ' + snap.text);
      if (snap.childCount !== 0)       throw new Error('childCount: ' + snap.childCount);
      if (snap.html !== undefined)     throw new Error('html should be omitted by default');
    `;
    const result = await dispatchRunScript(makeScript('basic-read', body), makeRequest());
    expect(result.ok).toBe(true);

    // Spot-check the IPC payload that left the parent.
    const reqs = findDomReadRequests();
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.options).toEqual({});
  });

  test('read({ html: true }) propagates the option through the IPC', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    wireDomReadResponder(() => ({
      tag:        'div',
      attrs:      {},
      text:       'Hello world',
      childCount: 1,
      html:       '<span>Hello world</span>',
    }));

    const body = `
      const h = api.ui.dom.inject('body', '<div><span>Hello world</span></div>', { id: 'with-html' });
      const snap = await h.read({ html: true });
      if (!snap)                       throw new Error('expected snapshot');
      if (snap.html !== '<span>Hello world</span>') throw new Error('html: ' + snap.html);
    `;
    const result = await dispatchRunScript(makeScript('html-opt', body), makeRequest());
    expect(result.ok).toBe(true);

    const reqs = findDomReadRequests();
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.options.html).toBe(true);
  });

  test('null snapshot resolves cleanly (FE element vanished race)', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    // FE returns null — simulates the element being missing from the
    // live DOM at read-time even though the parent still has the
    // dom-registry / pendingDomHandles entry (e.g. host shell tore
    // down a parent container between dispatch and snapshot).
    wireDomReadResponder(() => null);

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'vanish' });
      const snap = await h.read();
      // Null is the expected response shape — should NOT throw.
      if (snap !== null) throw new Error('expected null, got ' + JSON.stringify(snap));
    `;
    const result = await dispatchRunScript(makeScript('null-snap', body), makeRequest());
    expect(result.ok).toBe(true);
  });

  test('read() after .remove() rejects with DomHandleReleasedError', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    // No responder needed — the dispatch should reject before
    // reaching the FE-bound request.
    wireDomReadResponder(() => {
      throw new Error('FE responder should NOT be invoked — dispatch should reject parent-side');
    });

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'gone' });
      h.remove();
      let caught = null;
      try {
        await h.read();
      } catch (err) {
        caught = err;
      }
      if (caught === null) throw new Error('expected DomHandleReleasedError, got resolution');
      const name = (caught && typeof caught === 'object' && 'name' in caught) ? caught.name : String(caught);
      if (name !== 'DomHandleReleasedError') throw new Error('expected DomHandleReleasedError, got: ' + name);
    `;
    const result = await dispatchRunScript(makeScript('post-remove', body), makeRequest());
    expect(result.ok).toBe(true);
  });

  test('read() dispatches with the proxy elementId in the IPC payload', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    wireDomReadResponder(() => ({
      tag: 'div', attrs: {}, text: '', childCount: 0,
    }));

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'id-check' });
      await h.read();
    `;
    const result = await dispatchRunScript(makeScript('id-payload', body), makeRequest());
    expect(result.ok).toBe(true);

    const reqs = findDomReadRequests();
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.elementId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    expect(typeof reqs[0]!.requestId).toBe('string');
    expect(reqs[0]!.requestId.length).toBeGreaterThan(0);
  });

  test('multiple reads on the same handle each get their own requestId', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    let callCount = 0;
    wireDomReadResponder(() => {
      callCount += 1;
      return { tag: 'div', attrs: { 'data-n': String(callCount) }, text: '', childCount: 0 };
    });

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'multi' });
      const s1 = await h.read();
      const s2 = await h.read();
      const s3 = await h.read();
      if (s1.attrs['data-n'] !== '1') throw new Error('s1: ' + JSON.stringify(s1));
      if (s2.attrs['data-n'] !== '2') throw new Error('s2: ' + JSON.stringify(s2));
      if (s3.attrs['data-n'] !== '3') throw new Error('s3: ' + JSON.stringify(s3));
    `;
    const result = await dispatchRunScript(makeScript('multi-read', body), makeRequest());
    expect(result.ok).toBe(true);

    const reqs = findDomReadRequests();
    expect(reqs.length).toBe(3);
    // All three requests have distinct requestIds.
    const requestIds = new Set(reqs.map((r) => r.requestId));
    expect(requestIds.size).toBe(3);
  });
});

describe('e2e: DOMHandle.read() resolveDomRead semantics', () => {
  test('resolveDomRead with unknown requestId is a no-op (stale response after script teardown)', async () => {
    __resetForTests();
    resetDomRegistry();
    __resetDomReadsForTests();
    await setupE2E();

    // Calling resolveDomRead before any read fires should not throw —
    // the pendingDomReads map has no entry, the resolver no-ops.
    expect(() => resolveDomRead('stale-requestId-no-one-is-listening', null)).not.toThrow();

    // Subsequent real read still works (the no-op didn't corrupt state).
    wireDomReadResponder(() => ({
      tag: 'span', attrs: {}, text: 'OK', childCount: 0,
    }));
    const body = `
      const h = api.ui.dom.inject('body', '<span>OK</span>', { id: 'after-stale' });
      const snap = await h.read();
      if (snap.text !== 'OK') throw new Error('snap: ' + JSON.stringify(snap));
    `;
    const result = await dispatchRunScript(makeScript('after-stale', body), makeRequest());
    expect(result.ok).toBe(true);
  });
});
