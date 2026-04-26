/**
 * Covers the script-facing `api.macros.registerInterceptor` / `listInterceptors`
 * surface — the thin layer above `macro-interceptor-registry`.
 *
 * Concerns at this layer (NOT the registry's):
 *   - Permission gating (`macro_interceptor` required to register; listing is
 *     un-gated to mirror `api.macros.list()`).
 *   - Handle shape: `{ id, remove }` returned to the script. `remove()` is
 *     idempotent and cross-script-safe (ownership-scoped at the registry).
 *   - Validation errors from the registry surface as thrown Errors.
 *
 * Registry-internal behaviour (priority sort, chain threading, timeout
 * isolation, filter pre-checks) is covered by
 * `tests/engine/macro-interceptor-registry.test.ts`.
 */

import { describe, test, expect } from 'bun:test';
import { buildMacrosAPI } from '../../../src/engine/api/macros.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { listAll as listInterceptorEntries } from '../../../src/engine/macro-interceptor-registry.js';

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildMacrosAPI(createTestDeps(overrides));
}

// ─── registerInterceptor — basic semantics + permission gating ──────────────

describe('registerInterceptor', () => {
  test('returns a handle with id and remove() when permission granted', () => {
    const api = buildApi();
    const handle = api.registerInterceptor(() => undefined, { id: 'h1' });
    expect(handle.id).toBe('h1');
    expect(typeof handle.remove).toBe('function');
    expect(listInterceptorEntries().length).toBe(1);
  });

  test('throws PERMISSION_DENIED when macro_interceptor permission is denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.registerInterceptor(() => undefined)).toThrow(
      /PERMISSION_DENIED:macro_interceptor/,
    );
    expect(listInterceptorEntries().length).toBe(0);
  });

  test('auto-generates id when options.id is omitted', () => {
    const api = buildApi();
    const handle = api.registerInterceptor(() => undefined);
    expect(typeof handle.id).toBe('string');
    expect(handle.id.length).toBeGreaterThan(0);
  });

  test('propagates registry validation errors verbatim', () => {
    const api = buildApi();
    expect(() =>
      api.registerInterceptor(null as unknown as () => void),
    ).toThrow(/handler must be a function/);
    expect(() =>
      api.registerInterceptor(() => undefined, { timeoutMs: 0 }),
    ).toThrow(/timeoutMs must be a positive finite number/);
  });
});

// ─── handle.remove() ────────────────────────────────────────────────────────

describe('handle.remove', () => {
  test('removes the entry from the registry', () => {
    const api = buildApi();
    const handle = api.registerInterceptor(() => undefined, { id: 'h1' });
    expect(listInterceptorEntries().length).toBe(1);
    handle.remove();
    expect(listInterceptorEntries().length).toBe(0);
  });

  test('is idempotent (safe to call repeatedly)', () => {
    const api = buildApi();
    const handle = api.registerInterceptor(() => undefined, { id: 'h1' });
    expect(() => {
      handle.remove();
      handle.remove();
      handle.remove();
    }).not.toThrow();
    expect(listInterceptorEntries().length).toBe(0);
  });

  test('only removes the entry owned by the calling script', () => {
    // A handle from script-1 cannot deregister script-2's entry — even if
    // both used the same `id`. Defense-in-depth: scripts never see each
    // other's handles in practice, but the ownership check inside
    // `removeEntry` guarantees the invariant regardless.
    const apiA = buildApi({ script: { id: 'script-1', name: 'A' } });
    const apiB = buildApi({ script: { id: 'script-2', name: 'B' } });
    apiB.registerInterceptor(() => undefined, { id: 'shared-id' });
    const handleA = apiA.registerInterceptor(() => undefined, { id: 'shared-id' });
    expect(listInterceptorEntries().length).toBe(2);
    handleA.remove();
    const remaining = listInterceptorEntries();
    expect(remaining.length).toBe(1);
    expect(remaining[0]!.scriptId).toBe('script-2');
  });
});

// ─── listInterceptors ───────────────────────────────────────────────────────

describe('listInterceptors', () => {
  test('returns empty list when no interceptors are registered', () => {
    const api = buildApi();
    expect(api.listInterceptors()).toEqual([]);
  });

  test('returns snapshots across all scripts (shape mirrors registry listAll)', () => {
    const apiA = buildApi({ script: { id: 's1', name: 'A' } });
    const apiB = buildApi({ script: { id: 's2', name: 'B' } });
    apiA.registerInterceptor(() => undefined, { id: 'a1', priority: 50 });
    apiB.registerInterceptor(() => undefined, { id: 'b1', priority: 200 });
    const list = apiA.listInterceptors();
    expect(list.length).toBe(2);
    const a = list.find((e) => e.id === 'a1')!;
    const b = list.find((e) => e.id === 'b1')!;
    expect(a.scriptId).toBe('s1');
    expect(a.scriptName).toBe('A');
    expect(a.priority).toBe(50);
    expect(b.scriptId).toBe('s2');
    expect(b.priority).toBe(200);
  });

  test('does not require macro_interceptor permission (un-gated diagnostic)', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.listInterceptors()).not.toThrow();
  });
});
