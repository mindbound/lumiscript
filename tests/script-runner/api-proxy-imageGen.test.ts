/**
 * Child-side proxy dispatch tests for `api.imageGen.*`.
 *
 * Same shape as the api-proxy-images tests: each method gets a test
 * confirming the api-request IPC carries the correct dotted method name
 * + user-supplied args. DTO translation + permission gating live
 * parent-side in `engine/api/imageGen.ts` (covered in
 * `tests/engine/api/imageGen.test.ts`).
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

describe('api-proxy: api.imageGen.*', () => {
  test('generate dispatches with the input object as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.generate({
      prompt:           'a starry night',
      connectionId:     'conn-abc',
      negativePrompt:   'blurry',
      model:            'sdxl-1.0',
      parameters:       { width: 1024, height: 1024 },
      ownerCharacterId: 'char-1',
      ownerChatId:      'chat-2',
    });
    const reqs = h.apiRequests('imageGen.generate');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toEqual({
      prompt:           'a starry night',
      connectionId:     'conn-abc',
      negativePrompt:   'blurry',
      model:            'sdxl-1.0',
      parameters:       { width: 1024, height: 1024 },
      ownerCharacterId: 'char-1',
      ownerChatId:      'chat-2',
    });
  });

  test('generate with minimal input dispatches only the prompt-bearing object', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.generate({ prompt: 'minimal' });
    const reqs = h.apiRequests('imageGen.generate');
    expect(reqs[0]!.args[0]).toEqual({ prompt: 'minimal' });
  });

  test('generate forwards image_array parameters verbatim (img2img / inpainting integration)', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.generate({
      prompt: 'enhance',
      parameters: { input_images: ['img-1', 'img-2'], strength: 0.6 },
    });
    const reqs = h.apiRequests('imageGen.generate');
    const params = (reqs[0]!.args[0] as { parameters: { input_images: string[]; strength: number } }).parameters;
    expect(params.input_images).toEqual(['img-1', 'img-2']);
    expect(params.strength).toBe(0.6);
  });

  test('getProviders dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.getProviders();
    const reqs = h.apiRequests('imageGen.getProviders');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });

  test('listConnections dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.listConnections();
    const reqs = h.apiRequests('imageGen.listConnections');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });

  test('getConnection dispatches with the connectionId', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.getConnection('conn-xyz');
    const reqs = h.apiRequests('imageGen.getConnection');
    expect(reqs[0]!.args[0]).toBe('conn-xyz');
  });

  test('getModels dispatches with the connectionId', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.getModels('conn-xyz');
    const reqs = h.apiRequests('imageGen.getModels');
    expect(reqs[0]!.args[0]).toBe('conn-xyz');
  });

  test('the api-request carries the script context (scriptId + runId)', () => {
    const h = makeHarness();
    void h.proxy.api.imageGen.generate({ prompt: 'context test' });
    const req = h.apiRequests('imageGen.generate')[0]!;
    expect(req.scriptId).toBe('script-fixture');
    expect(req.runId).toBe('run-fixture-1');
  });
});
