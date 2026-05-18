/**
 * Child-side proxy dispatch tests for `api.images.*`.
 *
 * Same shape as the other proxy-X tests: each method gets a test
 * confirming the api-request IPC carries the correct dotted method
 * name + user-supplied args. DTO translation + permission gating
 * live parent-side in `engine/api/images.ts` (covered in
 * `tests/engine/api/images.test.ts`).
 *
 * Binary payload note: `api.images.upload`'s input includes a
 * `Uint8Array` for the raw bytes. Bun IPC structured-clones typed
 * arrays cleanly, so the proxy just forwards the input as-is — no
 * per-arg base64 encoding or other massaging. Tested explicitly to
 * pin the contract.
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage, ApiProxyRequest, ApiProxyResponse } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  apiRequests(method?: string): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'script-fixture',
    scriptName:         'Fixture Script',
    scriptType:         'trigger',
    chatIdAtStart:      null,
    characterIdAtStart: null,
    send:               (msg) => { sent.push(msg); },
    registerBroadcastHandler:   () => {},
    unregisterBroadcastHandler: () => {},
    registerHandlerClosure:     () => {},
    unregisterHandlerClosure:   () => {},
    toolsSnapshot:                 [],
    macrosSnapshot:                [],
    macroInterceptorsSnapshot:     [],
    chatInjectionsSnapshot:        [],
    chatContentProcessorsSnapshot: [],
    worldInfoInterceptorsSnapshot: [],
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    apiRequests: (method) =>
      sent.filter((m): m is ApiProxyRequest => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'api-request') return false;
        return method === undefined ? true : (m as ApiProxyRequest).method === method;
      }),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
  };
}

// ─── Per-method dispatch ────────────────────────────────────────────────────

describe('api-proxy: api.images.*', () => {
  test('upload dispatches with the input object as args[0] (carrying the Uint8Array)', () => {
    const h = makeHarness();
    const bytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    void h.proxy.api.images.upload({
      data:             bytes,
      filename:         'avatar.png',
      mimeType:         'image/png',
      ownerCharacterId: 'char-1',
    });
    const reqs = h.apiRequests('images.upload');
    expect(reqs.length).toBe(1);
    const arg = reqs[0]!.args[0] as { data: Uint8Array; filename: string; mimeType: string; ownerCharacterId: string };
    expect(arg.data).toBe(bytes); // reference identity — proxy forwards verbatim
    expect(arg.filename).toBe('avatar.png');
    expect(arg.mimeType).toBe('image/png');
    expect(arg.ownerCharacterId).toBe('char-1');
  });

  test('upload preserves Uint8Array byte content (structured-clone contract pin)', () => {
    const h = makeHarness();
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    void h.proxy.api.images.upload({ data: bytes });
    const reqs = h.apiRequests('images.upload');
    const arg = reqs[0]!.args[0] as { data: Uint8Array };
    // Same reference (proxy doesn't clone before send — Bun IPC does
    // the structured-clone). Asserting reference identity here pins
    // "no proxy-side encoding/decoding" — if a future refactor base64-
    // encodes binary args, this test surfaces it.
    expect(arg.data).toBe(bytes);
    expect(Array.from(arg.data)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('uploadFromDataUrl dispatches with [dataUrl, options]', () => {
    const h = makeHarness();
    void h.proxy.api.images.uploadFromDataUrl('data:image/png;base64,iVBORw0KGgo=', {
      originalFilename: 'snap.png',
      ownerCharacterId: 'char-9',
    });
    const reqs = h.apiRequests('images.uploadFromDataUrl');
    expect(reqs[0]!.args[0]).toBe('data:image/png;base64,iVBORw0KGgo=');
    expect(reqs[0]!.args[1]).toEqual({
      originalFilename: 'snap.png',
      ownerCharacterId: 'char-9',
    });
  });

  test('uploadFromDataUrl without options dispatches with just the data URL', () => {
    const h = makeHarness();
    void h.proxy.api.images.uploadFromDataUrl('data:image/png;base64,AAAA');
    const reqs = h.apiRequests('images.uploadFromDataUrl');
    expect(reqs[0]!.args[0]).toBe('data:image/png;base64,AAAA');
    expect(reqs[0]!.args[1]).toBeUndefined();
  });

  test('get dispatches with the imageId', () => {
    const h = makeHarness();
    void h.proxy.api.images.get('image-abc');
    const reqs = h.apiRequests('images.get');
    expect(reqs[0]!.args[0]).toBe('image-abc');
  });

  test('delete dispatches with the imageId', () => {
    const h = makeHarness();
    void h.proxy.api.images.delete('image-abc');
    const reqs = h.apiRequests('images.delete');
    expect(reqs[0]!.args[0]).toBe('image-abc');
  });

  test('the api-request carries the script context (scriptId + runId)', () => {
    const h = makeHarness();
    void h.proxy.api.images.upload({ data: new Uint8Array(0) });
    const req = h.apiRequests('images.upload')[0]!;
    expect(req.scriptId).toBe('script-fixture');
    expect(req.runId).toBe('run-fixture-1');
  });
});
