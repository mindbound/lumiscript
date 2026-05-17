/**
 * Child-side proxy dispatch tests for api.presets.*.
 *
 * Verifies that calling each `api.presets.*`, `api.presets.blocks.*`, and
 * `api.presets.categories.*` method through the proxy produces an
 * api-request IPC with the matching dotted method name and the user-
 * supplied args. The proxy here is a thin `mkAsync`-driven wrapper; the
 * real translation work (permission gating, Spindle forwarding) happens
 * parent-side via `buildPresetsAPI` (covered in tests/engine/api/presets.test.ts).
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

// ─── Top-level preset methods ────────────────────────────────────────────────

describe('api-proxy: api.presets.*', () => {
  test('list dispatches with options as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.presets.list({ limit: 5, offset: 0 });
    const reqs = h.apiRequests('presets.list');
    expect(reqs.length).toBe(1);
    const opts = reqs[0]!.args[0] as Record<string, unknown>;
    expect(opts.limit).toBe(5);
    expect(opts.offset).toBe(0);
  });

  test('get dispatches with the presetId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.get('preset-1');
    const reqs = h.apiRequests('presets.get');
    expect(reqs[0]!.args[0]).toBe('preset-1');
  });

  test('create dispatches with the input', () => {
    const h = makeHarness();
    void h.proxy.api.presets.create({ name: 'New', provider: 'loom' });
    const reqs = h.apiRequests('presets.create');
    const input = reqs[0]!.args[0] as Record<string, unknown>;
    expect(input.name).toBe('New');
    expect(input.provider).toBe('loom');
  });

  test('update dispatches with presetId + input', () => {
    const h = makeHarness();
    void h.proxy.api.presets.update('preset-1', { engine: 'classic' });
    const reqs = h.apiRequests('presets.update');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect((reqs[0]!.args[1] as Record<string, unknown>).engine).toBe('classic');
  });

  test('delete dispatches with the presetId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.delete('preset-1');
    const reqs = h.apiRequests('presets.delete');
    expect(reqs[0]!.args[0]).toBe('preset-1');
  });
});

// ─── Nested presets.blocks.* methods ─────────────────────────────────────────
//
// Confirms the dotted method name traverses sub-namespaces correctly —
// `presets.blocks.list` not `presets.list` or `blocks.list`.

describe('api-proxy: api.presets.blocks.*', () => {
  test('blocks.list dispatches with the presetId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.list('preset-1');
    const reqs = h.apiRequests('presets.blocks.list');
    expect(reqs[0]!.args[0]).toBe('preset-1');
  });

  test('blocks.get dispatches with presetId + blockId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.get('preset-1', 'block-1');
    const reqs = h.apiRequests('presets.blocks.get');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect(reqs[0]!.args[1]).toBe('block-1');
  });

  test('blocks.create dispatches with presetId + input + options (with index)', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.create(
      'preset-1',
      { name: 'First' },
      { index: 0 },
    );
    const reqs = h.apiRequests('presets.blocks.create');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect((reqs[0]!.args[1] as Record<string, unknown>).name).toBe('First');
    expect((reqs[0]!.args[2] as Record<string, unknown>).index).toBe(0);
  });

  test('blocks.create dispatches without options when omitted', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.create('preset-1', { name: 'AppendMe' });
    const reqs = h.apiRequests('presets.blocks.create');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect((reqs[0]!.args[1] as Record<string, unknown>).name).toBe('AppendMe');
    // Third arg should not be present (caller omitted options).
    expect(reqs[0]!.args.length).toBe(2);
  });

  test('blocks.update dispatches with presetId + blockId + input', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.update('preset-1', 'block-1', { enabled: false });
    const reqs = h.apiRequests('presets.blocks.update');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect(reqs[0]!.args[1]).toBe('block-1');
    expect((reqs[0]!.args[2] as Record<string, unknown>).enabled).toBe(false);
  });

  test('blocks.delete dispatches with presetId + blockId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.blocks.delete('preset-1', 'block-1');
    const reqs = h.apiRequests('presets.blocks.delete');
    expect(reqs[0]!.args[0]).toBe('preset-1');
    expect(reqs[0]!.args[1]).toBe('block-1');
  });
});

// ─── Nested presets.categories.* methods ─────────────────────────────────────

describe('api-proxy: api.presets.categories.*', () => {
  test('categories.list dispatches with the presetId', () => {
    const h = makeHarness();
    void h.proxy.api.presets.categories.list('preset-1');
    const reqs = h.apiRequests('presets.categories.list');
    expect(reqs[0]!.args[0]).toBe('preset-1');
  });
});
