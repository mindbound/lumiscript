/**
 * #11 — dispatchHandleMethodCall must not silently corrupt a handle-method return that carries methods.
 *
 * serializeReturnValue's JSON round-trip DROPS function properties (JSON.stringify omits them — it does NOT
 * throw), so a handle method returning an object-with-methods (a raw handle) would hand the VM a dead,
 * method-less object. No handle method returns one today (Collection/StyleHandle methods return plain
 * data/void; quickjs UI handles use the separate in-VM string-id path, not this HandleRef path), so this
 * guards a latent silent-corruption path — turning it into a loud, actionable error.
 */
import { describe, test, expect } from 'bun:test';
import { dispatchApiCall, type HandleHelpers } from '../../src/engine/script-runner-host.js';
import type { ApiProxyRequest, HandleRef } from '../../src/types/script-runner-ipc.js';

const HANDLE: HandleRef = { __handleRef: true, id: 'h1', kind: 'Collection' };
const api = {} as Parameters<typeof dispatchApiCall>[1]; // unused on the handle-method path (targetHandle set)

function reqFor(method: string): ApiProxyRequest {
  return { type: 'api-request', requestId: 'r1', runId: 'run1', scriptId: 's1', method, args: [], targetHandle: HANDLE };
}

describe('#11 dispatchHandleMethodCall: object-with-methods returns fail loud, not silent-strip', () => {
  const target = {
    returnsMethodsObject: () => ({ id: 'x', doThing: () => 42 }), // a raw handle-like object (has a method)
    returnsPlainData:     () => ({ id: 'x', n: 7 }),              // ordinary serializable data
    returnsArray:         () => [{ a: 1 }, { b: 2 }],             // arrays of plain data must still pass
  };
  const helpers: HandleHelpers = {
    resolveHandle:  () => target,
    registerHandle: () => HANDLE,
  };

  test('a handle method returning an object with methods is rejected with a clear error (not JSON-stripped)', async () => {
    const res = await dispatchApiCall(reqFor('returnsMethodsObject'), api, helpers);
    expect(res.ok).toBe(false);
    const err = (res as { error: { name: string; message: string } }).error;
    expect(err.name).toBe('TypeError');
    expect(err.message).toContain('object with methods');
  });

  test('a handle method returning plain data still serializes fine (control)', async () => {
    const res = await dispatchApiCall(reqFor('returnsPlainData'), api, helpers);
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toEqual({ id: 'x', n: 7 });
  });

  test('a handle method returning an array of plain data still serializes fine (no false positive)', async () => {
    const res = await dispatchApiCall(reqFor('returnsArray'), api, helpers);
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toEqual([{ a: 1 }, { b: 2 }]);
  });
});

// The handle-method path resolves the method as an OWN callable of the resolved handle (isOwnCallableSegment)
// — a reflective probe like coll.constructor / .hasOwnProperty / .__proto__, or a bogus name, must be
// rejected, never invoked off the prototype chain. This locks that gate (a security invariant with no prior
// direct assertion) against a regression.
describe('#11 dispatchHandleMethodCall: only OWN callables are invocable (reflective-probe gate)', () => {
  const target = { realMethod: () => 'ok' };
  const helpers: HandleHelpers = { resolveHandle: () => target, registerHandle: () => HANDLE };

  for (const bad of ['constructor', 'hasOwnProperty', 'toString', 'valueOf', '__proto__', 'notAMethod']) {
    test(`rejects non-own / prototype method "${bad}"`, async () => {
      const res = await dispatchApiCall(reqFor(bad), api, helpers);
      expect(res.ok).toBe(false);
      expect((res as { error: { message: string } }).error.message).toContain('has no method');
    });
  }

  test('allows a genuine own method', async () => {
    const res = await dispatchApiCall(reqFor('realMethod'), api, helpers);
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toBe('ok');
  });
});
