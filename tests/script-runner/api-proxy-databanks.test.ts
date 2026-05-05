/**
 * Child-side proxy dispatch tests for api.databanks.*.
 *
 * Verifies that calling each `api.databanks.*` and `api.databanks.documents.*`
 * method through the proxy produces an api-request IPC with the matching
 * dotted method name and the user-supplied args. The proxy here is a thin
 * `mkAsync`-driven wrapper; the real translation work happens parent-side
 * via `buildDatabanksAPI` (covered in tests/engine/api/databanks.test.ts).
 *
 * The Uint8Array structured-clone test confirms binary payloads cross the
 * IPC boundary intact — a class of value the function-filter rejection
 * test surfaced is NOT cloneable. Worth gating because `documents.create`
 * is the only file-data-bearing method on this surface.
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

// ─── Top-level databanks methods ─────────────────────────────────────────────

describe('api-proxy: api.databanks.*', () => {
  test('list dispatches with options as args[0]', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.list({ limit: 5, offset: 0, scope: 'character' });
    const reqs = h.apiRequests('databanks.list');
    expect(reqs.length).toBe(1);
    const opts = reqs[0]!.args[0] as Record<string, unknown>;
    expect(opts.limit).toBe(5);
    expect(opts.scope).toBe('character');
  });

  test('get dispatches with the databankId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.get('db-1');
    const reqs = h.apiRequests('databanks.get');
    expect(reqs[0]!.args[0]).toBe('db-1');
  });

  test('findByName dispatches with name + scope', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.findByName('Wanted', 'chat');
    const req = h.apiRequests('databanks.findByName')[0]!;
    expect(req.args[0]).toBe('Wanted');
    expect(req.args[1]).toBe('chat');
  });

  test('create dispatches with the input shape preserved', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.create({ name: 'New', scope: 'global' });
    const req = h.apiRequests('databanks.create')[0]!;
    const input = req.args[0] as { name: string; scope: string };
    expect(input.name).toBe('New');
    expect(input.scope).toBe('global');
  });

  test('update dispatches databankId + patch', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.update('db-1', { enabled: false });
    const req = h.apiRequests('databanks.update')[0]!;
    expect(req.args[0]).toBe('db-1');
    expect((req.args[1] as { enabled: boolean }).enabled).toBe(false);
  });

  test('delete dispatches with the databankId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.delete('db-1');
    const req = h.apiRequests('databanks.delete')[0]!;
    expect(req.args[0]).toBe('db-1');
  });
});

// ─── Documents subspace ──────────────────────────────────────────────────────

describe('api-proxy: api.databanks.documents.*', () => {
  test('list dispatches with databankId + options', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.list('db-1', { limit: 10 });
    const req = h.apiRequests('databanks.documents.list')[0]!;
    expect(req.args[0]).toBe('db-1');
    expect((req.args[1] as { limit: number }).limit).toBe(10);
  });

  test('get dispatches with the documentId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.get('doc-1');
    const req = h.apiRequests('databanks.documents.get')[0]!;
    expect(req.args[0]).toBe('doc-1');
  });

  test('findByName dispatches with databankId + name', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.findByName('db-1', 'session-recap');
    const req = h.apiRequests('databanks.documents.findByName')[0]!;
    expect(req.args[0]).toBe('db-1');
    expect(req.args[1]).toBe('session-recap');
  });

  test('create dispatches with databankId + input (string data passes through)', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.create('db-1', {
      data: '# Hello',
      filename: 'note.md',
    });
    const req = h.apiRequests('databanks.documents.create')[0]!;
    expect(req.args[0]).toBe('db-1');
    const input = req.args[1] as { data: string; filename: string };
    // Translation (string→Uint8Array) happens parent-side. Proxy just passes.
    expect(input.data).toBe('# Hello');
    expect(input.filename).toBe('note.md');
  });

  test('create dispatches Uint8Array data unchanged (binary payload IPC-cloneable)', () => {
    const h = makeHarness();
    const bytes = new Uint8Array([0x68, 0x69, 0x21]);
    void h.proxy.api.databanks.documents.create('db-1', {
      data: bytes,
      filename: 'a.bin',
    });
    const req = h.apiRequests('databanks.documents.create')[0]!;
    const input = req.args[1] as { data: Uint8Array };
    // Proxy stash is by reference (no clone happens in-process); the IPC
    // serialiser would structured-clone on real send. Both shapes preserve
    // byte content.
    expect(input.data).toBe(bytes);
    expect(Array.from(input.data)).toEqual([0x68, 0x69, 0x21]);
  });

  test('update dispatches documentId + patch', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.update('doc-1', { name: 'Renamed' });
    const req = h.apiRequests('databanks.documents.update')[0]!;
    expect(req.args[0]).toBe('doc-1');
    expect((req.args[1] as { name: string }).name).toBe('Renamed');
  });

  test('delete dispatches with the documentId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.delete('doc-1');
    const req = h.apiRequests('databanks.documents.delete')[0]!;
    expect(req.args[0]).toBe('doc-1');
  });

  test('getContent dispatches with the documentId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.getContent('doc-1');
    const req = h.apiRequests('databanks.documents.getContent')[0]!;
    expect(req.args[0]).toBe('doc-1');
  });

  test('reprocess dispatches with the documentId', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.reprocess('doc-1');
    const req = h.apiRequests('databanks.documents.reprocess')[0]!;
    expect(req.args[0]).toBe('doc-1');
  });

  test('waitUntilReady dispatches with documentId + options (parent-side polling)', () => {
    const h = makeHarness();
    void h.proxy.api.databanks.documents.waitUntilReady('doc-1', { timeoutMs: 5_000 });
    const req = h.apiRequests('databanks.documents.waitUntilReady')[0]!;
    expect(req.args[0]).toBe('doc-1');
    expect((req.args[1] as { timeoutMs: number }).timeoutMs).toBe(5_000);
  });
});

// ─── Response routing ────────────────────────────────────────────────────────

describe('api-proxy: api.databanks response handling', () => {
  test('a successful response resolves the awaiting Promise with the parent-mapped value', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.databanks.get('db-1');
    const req = h.apiRequests('databanks.get')[0]!;
    h.respond(req.requestId, { id: 'db-1', name: 'Test' });
    const result = await promise;
    expect((result as { id: string }).id).toBe('db-1');
  });
});
