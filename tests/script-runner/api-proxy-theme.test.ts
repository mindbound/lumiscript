/**
 * Child-side proxy dispatch tests for `api.theme.*`.
 *
 * Verifies that calling each `api.theme.*` method through the proxy
 * produces an api-request IPC with the correct dotted method name and
 * user-supplied args. The proxy is a thin `mkAsync`-driven wrapper —
 * the merge layer + DTO translation + permission gating live parent-
 * side in `engine/theme-store.ts` + `engine/api/theme.ts` (covered in
 * `tests/engine/theme-store.test.ts` + `tests/engine/api/theme.test.ts`).
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

describe('api-proxy: api.theme.*', () => {
  test('apply dispatches with the overrides object as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.theme.apply({ variables: { '--lumiverse-accent': 'purple' } });
    const reqs = h.apiRequests('theme.apply');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toEqual({ variables: { '--lumiverse-accent': 'purple' } });
  });

  test('apply forwards variablesByMode dark + light shape unchanged', () => {
    const h = makeHarness();
    void h.proxy.api.theme.apply({
      variablesByMode: {
        dark:  { '--lumiverse-bg': '#000' },
        light: { '--lumiverse-bg': '#fff' },
      },
    });
    const reqs = h.apiRequests('theme.apply');
    expect((reqs[0]!.args[0] as { variablesByMode: { dark: { '--lumiverse-bg': string } } })
      .variablesByMode.dark['--lumiverse-bg']).toBe('#000');
  });

  test('applyPalette dispatches with the palette config as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.theme.applyPalette({ accent: { h: 280, s: 70, l: 60 } });
    const reqs = h.apiRequests('theme.applyPalette');
    expect(reqs[0]!.args[0]).toEqual({ accent: { h: 280, s: 70, l: 60 } });
  });

  test('applyPalette with null forwards null (clear sentinel)', () => {
    const h = makeHarness();
    void h.proxy.api.theme.applyPalette(null);
    const reqs = h.apiRequests('theme.applyPalette');
    expect(reqs[0]!.args[0]).toBeNull();
  });

  test('clear dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.theme.clear();
    const reqs = h.apiRequests('theme.clear');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });

  test('getCurrent dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.theme.getCurrent();
    const reqs = h.apiRequests('theme.getCurrent');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });

  test('extractColors dispatches with the imageId as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.theme.extractColors('image-abc');
    const reqs = h.apiRequests('theme.extractColors');
    expect(reqs[0]!.args[0]).toBe('image-abc');
  });

  test('generateVariables dispatches with the config object as args[0]', () => {
    const h = makeHarness();
    const config = {
      accent:      { h: 280, s: 70, l: 60 },
      mode:        'dark' as const,
      enableGlass: true,
      radiusScale: 1.2,
    };
    void h.proxy.api.theme.generateVariables(config);
    const reqs = h.apiRequests('theme.generateVariables');
    expect(reqs[0]!.args[0]).toEqual(config);
  });

  test('a single proxy.api.theme call produces exactly one api-request IPC', () => {
    const h = makeHarness();
    void h.proxy.api.theme.apply({ variables: { 'x': '1' } });
    expect(h.apiRequests().length).toBe(1);
  });

  test('the api-request carries the script context (scriptId + runId)', () => {
    const h = makeHarness();
    void h.proxy.api.theme.apply({ variables: { 'x': '1' } });
    const req = h.apiRequests('theme.apply')[0]!;
    expect(req.scriptId).toBe('script-fixture');
    expect(req.runId).toBe('run-fixture-1');
  });
});
