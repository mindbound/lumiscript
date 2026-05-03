/**
 * v0.26.1 — collection-handle-cache + canonical dedup tests.
 *
 * Verifies that `api.db.collection(...)` calls with the same scope + name
 * (resolving to the same path) return the SAME wrapper object on
 * subsequent calls. Pre-v0.26.1 every call created a fresh wrapper that
 * the dispatcher registered as a fresh persistent handle, accumulating
 * unbounded across long sessions.
 *
 * Tests cover:
 *   - Dedup hits: same (scope, name) → same wrapper
 *   - Dedup misses: different scope or different name → different wrapper
 *   - Per-script isolation: scriptA's wrapper isn't shared with scriptB
 *   - Cleanup: clearByScriptId drops the cache, next call creates a new wrapper
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildDbAPI } from '../../src/engine/api/db.js';
import {
  __resetForTests as resetCache,
  __countForTests as cacheCount,
  clearByScriptId,
} from '../../src/engine/collection-handle-cache.js';
import { createTestDeps } from '../_infra/mock-deps.js';

beforeEach(() => {
  resetCache();
});

describe('api.db.collection: canonical-side dedup', () => {
  test('same (scope, name) returns the SAME wrapper object', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    const a = await api.collection('events', { scope: 'character' });
    const b = await api.collection('events', { scope: 'character' });

    expect(a).toBe(b);
  });

  test('different scope returns a different wrapper', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    const a = await api.collection('events', { scope: 'character' });
    const b = await api.collection('events', { scope: 'chat' });

    expect(a).not.toBe(b);
  });

  test('different name returns a different wrapper', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    const a = await api.collection('events',  { scope: 'character' });
    const b = await api.collection('history', { scope: 'character' });

    expect(a).not.toBe(b);
  });

  test('different scripts get different wrappers (per-script isolation)', async () => {
    const apiA = buildDbAPI(createTestDeps({ script: { id: 'scriptA' } }));
    const apiB = buildDbAPI(createTestDeps({ script: { id: 'scriptB' } }));

    const a = await apiA.collection('events', { scope: 'character' });
    const b = await apiB.collection('events', { scope: 'character' });

    expect(a).not.toBe(b);
  });

  test('default scope (script) caches like an explicit one', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    const a = await api.collection('events');
    const b = await api.collection('events');

    expect(a).toBe(b);
  });

  test('cache count grows by one per unique (scope, path)', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    expect(cacheCount('tracker')).toBe(0);

    await api.collection('events', { scope: 'character' });
    expect(cacheCount('tracker')).toBe(1);

    await api.collection('events', { scope: 'character' });   // cache hit
    expect(cacheCount('tracker')).toBe(1);

    await api.collection('events', { scope: 'chat' });        // different scope
    expect(cacheCount('tracker')).toBe(2);

    await api.collection('history', { scope: 'character' });  // different name
    expect(cacheCount('tracker')).toBe(3);
  });

  test('clearByScriptId drops cache; next call creates a fresh wrapper', async () => {
    const api = buildDbAPI(createTestDeps({ script: { id: 'tracker' } }));

    const before = await api.collection('events', { scope: 'character' });
    expect(cacheCount('tracker')).toBe(1);

    clearByScriptId('tracker');
    expect(cacheCount('tracker')).toBe(0);

    const after = await api.collection('events', { scope: 'character' });
    expect(after).not.toBe(before);
    expect(cacheCount('tracker')).toBe(1);
  });

  test('clearByScriptId on script A does not affect script B', async () => {
    const apiA = buildDbAPI(createTestDeps({ script: { id: 'scriptA' } }));
    const apiB = buildDbAPI(createTestDeps({ script: { id: 'scriptB' } }));

    const a1 = await apiA.collection('events', { scope: 'character' });
    const b1 = await apiB.collection('events', { scope: 'character' });

    clearByScriptId('scriptA');

    // scriptB's wrapper survives
    const b2 = await apiB.collection('events', { scope: 'character' });
    expect(b2).toBe(b1);

    // scriptA's wrapper is gone
    const a2 = await apiA.collection('events', { scope: 'character' });
    expect(a2).not.toBe(a1);
  });
});
