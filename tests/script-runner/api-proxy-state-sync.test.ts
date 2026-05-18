/**
 * v1.0.0-rc.6 — unit tests for `api-proxy.applyScriptStateSnapshot`.
 *
 * Companion to the parent-side `script-state-sync` IPC send: when the
 * parent sends a snapshot of the script's stable-id mappings before a
 * `run-script`, the child must seed its proxy-side
 * `domStableIdToElementId` map with those entries BEFORE the script
 * body runs. Otherwise the proxy generates fresh UUIDs for the same
 * stableIds and we're back to the post-eviction divergence the rc.3
 * alias-storage hotfix papered over.
 *
 * The snapshot itself is plumbed in via the `'script-state-sync'` case
 * in `child-entry.ts:onMessage`; this file exercises the seeding logic
 * directly via the exported `applyScriptStateSnapshot` so we don't
 * depend on IPC fixtures for the unit-level assertions.
 *
 * Observable effect: after applying a snapshot with `domStableIds:
 * { foo: 'preseeded-1' }`, the proxy's next `api.ui.dom.inject('body',
 * '<div/>', { id: 'foo' })` must thread `_elementId: 'preseeded-1'`
 * in the IPC's options.
 */

import { describe, test, expect } from 'bun:test';
import {
  buildProxiedAPI,
  applyScriptStateSnapshot,
  __resetForTests as resetApiProxy,
  type ProxyContext,
  type ProxyHandle,
} from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  ApiProxyRequest,
} from '../../src/types/script-runner-ipc.js';

// ─── Harness ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  apiRequests(method?: string): ApiProxyRequest[];
}

function makeHarness(scriptId: string): Harness {
  const sent: ChildToParentMessage[] = [];
  const ctx: ProxyContext = {
    runId:              `run-${scriptId}-1`,
    scriptId,
    scriptName:         `Script ${scriptId}`,
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
    apiRequests(method?: string) {
      return sent.filter(
        (m): m is ApiProxyRequest =>
          typeof m === 'object' &&
          m !== null &&
          (m as { type?: unknown }).type === 'api-request' &&
          (method === undefined || (m as { method?: unknown }).method === method),
      );
    },
  };
}

function elementIdFromInject(req: ApiProxyRequest): string {
  const options = req.args[2] as { _elementId?: string } | undefined;
  if (!options?._elementId) {
    throw new Error(`inject IPC missing _elementId in args[2] (got: ${JSON.stringify(req.args[2])})`);
  }
  return options._elementId;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('api-proxy.applyScriptStateSnapshot', () => {
  test('seeded stableId → elementId pair is honoured by the next inject', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    // Parent's view says stableId 'foo' maps to 'preseeded-1'. Apply.
    applyScriptStateSnapshot({
      scriptId:      'script-A',
      domStableIds: { foo: 'preseeded-1' },
    });

    // Inject with the same stableId — proxy reuses the seeded id.
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'foo' });
    const reqs = h.apiRequests('ui.dom.inject');
    expect(reqs.length).toBe(1);
    expect(elementIdFromInject(reqs[0]!)).toBe('preseeded-1');
  });

  test('multiple seeded entries each route correctly', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    applyScriptStateSnapshot({
      scriptId:     'script-A',
      domStableIds: {
        'header': 'pre-header',
        'footer': 'pre-footer',
        'sidebar': 'pre-sidebar',
      },
    });

    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'header' });
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'footer' });
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'sidebar' });

    const reqs = h.apiRequests('ui.dom.inject');
    expect(reqs.length).toBe(3);
    expect(elementIdFromInject(reqs[0]!)).toBe('pre-header');
    expect(elementIdFromInject(reqs[1]!)).toBe('pre-footer');
    expect(elementIdFromInject(reqs[2]!)).toBe('pre-sidebar');
  });

  test('inject with a stableId NOT in the snapshot generates a fresh UUID', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    applyScriptStateSnapshot({
      scriptId:     'script-A',
      domStableIds: { 'known-id': 'preseeded-1' },
    });

    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'unknown-id' });
    const reqs = h.apiRequests('ui.dom.inject');
    expect(reqs.length).toBe(1);
    const elementId = elementIdFromInject(reqs[0]!);
    // Fresh UUID — not the seeded value.
    expect(elementId).not.toBe('preseeded-1');
    // UUID v4 shape: 8-4-4-4-12 hex with dashes.
    expect(elementId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  test('snapshot for one script does not affect another script', () => {
    resetApiProxy();
    const hA = makeHarness('script-A');
    const hB = makeHarness('script-B');

    // Seed ONLY script-A.
    applyScriptStateSnapshot({
      scriptId:     'script-A',
      domStableIds: { 'shared': 'pre-A' },
    });

    // Both scripts inject with the same stableId.
    hA.proxy.api.ui.dom.inject('body', '<div/>', { id: 'shared' });
    hB.proxy.api.ui.dom.inject('body', '<span/>', { id: 'shared' });

    // A reuses the seeded id; B generates a fresh UUID.
    const idA = elementIdFromInject(hA.apiRequests('ui.dom.inject')[0]!);
    const idB = elementIdFromInject(hB.apiRequests('ui.dom.inject')[0]!);
    expect(idA).toBe('pre-A');
    expect(idB).not.toBe('pre-A');
  });

  test('repeated apply of the same snapshot is idempotent', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    const snapshot = {
      scriptId:     'script-A',
      domStableIds: { 'foo': 'preseeded-1' },
    };
    applyScriptStateSnapshot(snapshot);
    applyScriptStateSnapshot(snapshot);
    applyScriptStateSnapshot(snapshot);

    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'foo' });
    expect(elementIdFromInject(h.apiRequests('ui.dom.inject')[0]!)).toBe('preseeded-1');
  });

  test('subsequent snapshot extends the cache with new entries', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    applyScriptStateSnapshot({
      scriptId:     'script-A',
      domStableIds: { 'foo': 'pre-foo' },
    });
    applyScriptStateSnapshot({
      scriptId:     'script-A',
      domStableIds: { 'bar': 'pre-bar' },
    });

    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'foo' });
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'bar' });

    const reqs = h.apiRequests('ui.dom.inject');
    expect(elementIdFromInject(reqs[0]!)).toBe('pre-foo');
    expect(elementIdFromInject(reqs[1]!)).toBe('pre-bar');
  });

  test('snapshot with missing domStableIds field is a no-op (forward-compat)', () => {
    resetApiProxy();
    const h = makeHarness('script-A');

    // No domStableIds — simulates a future snapshot where only newer
    // fields are populated. Must not throw, must not corrupt cache.
    expect(() =>
      applyScriptStateSnapshot({ scriptId: 'script-A' }),
    ).not.toThrow();

    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'foo' });
    const id = elementIdFromInject(h.apiRequests('ui.dom.inject')[0]!);
    // No seed — fresh UUID generated.
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  test('snapshot with empty domStableIds map is a no-op (does not throw)', () => {
    resetApiProxy();
    expect(() =>
      applyScriptStateSnapshot({ scriptId: 'script-A', domStableIds: {} }),
    ).not.toThrow();
  });
});
