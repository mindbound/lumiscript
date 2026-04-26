/**
 * Covers the per-script message content processor registry + multiplexer
 * dispatch. Mirrors macro-interceptor-registry.test.ts for the behaviours
 * that share shape (priority sort, replace, ownership, timeout, error
 * isolation, listAll). Adds coverage for the differences:
 *  - origin filter (instead of phase + matchTemplate)
 *  - extra-shallow-merge as DELTA-only return (verifying the dispatch returns
 *    only handler-added/overwritten keys, not pristine `initial.extra` keys)
 *  - extra dropped from final return on swipe origins (host ignores it)
 *  - extra still threaded through chain on swipe origins (handlers see
 *    consistent state during dispatch)
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import type { MessageContentProcessorCtxDTO } from 'lumiverse-spindle-types';
import {
  addEntry,
  removeEntry,
  clearByScriptId,
  hasAnyEntry,
  listAll,
  countByScriptId,
  listIdsByScriptId,
  diffAndCleanStale,
  dispatch,
  __reset,
} from '../../src/engine/message-content-processor-registry.js';

beforeEach(() => __reset());

function ctx(
  overrides?: Partial<MessageContentProcessorCtxDTO>,
): MessageContentProcessorCtxDTO {
  return {
    chatId: 'chat-1',
    content: 'hello',
    origin: 'create',
    userId: 'user-1',
    ...overrides,
  };
}

// ─── addEntry / removeEntry / lifecycle ─────────────────────────────────────

describe('addEntry', () => {
  test('creates an entry retrievable via listAll', () => {
    addEntry('script-1', 'Tracker', () => undefined, { id: 'p1' });
    const all = listAll();
    expect(all.length).toBe(1);
    expect(all[0]!.id).toBe('p1');
    expect(all[0]!.priority).toBe(100);
    expect(all[0]!.timeoutMs).toBe(2000);
    expect(all[0]!.origins).toBeNull();
  });

  test('auto-generates id when omitted', () => {
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-1', 'A', () => undefined);
    const ids = listAll().map((e) => e.id);
    expect(new Set(ids).size).toBe(2);
  });

  test('hasAnyEntry / countByScriptId track lifecycle', () => {
    expect(hasAnyEntry()).toBe(false);
    addEntry('s1', 'A', () => undefined);
    addEntry('s1', 'A', () => undefined);
    addEntry('s2', 'B', () => undefined);
    expect(hasAnyEntry()).toBe(true);
    expect(countByScriptId('s1')).toBe(2);
    expect(countByScriptId('s2')).toBe(1);
  });

  test('throws on non-function handler', () => {
    expect(() =>
      addEntry('s1', 'X', null as unknown as () => void, undefined),
    ).toThrow(/must be a function/);
  });

  test('throws on non-finite priority and non-positive timeoutMs', () => {
    expect(() =>
      addEntry('s1', 'X', () => undefined, { priority: NaN }),
    ).toThrow(/priority must be finite/);
    expect(() =>
      addEntry('s1', 'X', () => undefined, { timeoutMs: 0 }),
    ).toThrow(/timeoutMs must be a positive finite number/);
  });

  test('same (scriptId, id) replaces; cross-script ids do not collide', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1', priority: 50 });
    addEntry('s1', 'A', () => undefined, { id: 'p1', priority: 200 });
    addEntry('s2', 'B', () => undefined, { id: 'p1' });
    const all = listAll();
    expect(all.length).toBe(2);
    expect(all.find((e) => e.scriptId === 's1')!.priority).toBe(200);
  });
});

describe('removeEntry / clearByScriptId', () => {
  test('removeEntry — returns true and removes; false on unknown / cross-script', () => {
    addEntry('s1', 'X', () => undefined, { id: 'p1' });
    expect(removeEntry('s2', 'p1')).toBe(false); // wrong owner
    expect(removeEntry('s1', 'p1')).toBe(true);
    expect(removeEntry('s1', 'p1')).toBe(false); // already gone
  });

  test('clearByScriptId — drops only the targeted script', () => {
    addEntry('s1', 'A', () => undefined);
    addEntry('s1', 'A', () => undefined);
    addEntry('s2', 'B', () => undefined);
    clearByScriptId('s1');
    const all = listAll();
    expect(all.length).toBe(1);
    expect(all[0]!.scriptId).toBe('s2');
  });
});

// ─── dispatch — basic chain semantics ───────────────────────────────────────

describe('dispatch', () => {
  test('returns undefined when no entries are registered', async () => {
    const result = await dispatch(ctx());
    expect(result).toBeUndefined();
  });

  test('returns undefined when every handler passes through', async () => {
    addEntry('s1', 'A', () => undefined);
    addEntry('s2', 'B', () => undefined);
    const result = await dispatch(ctx());
    expect(result).toBeUndefined();
  });

  test('threads content in priority ASC order', async () => {
    addEntry('s1', 'A', (c) => ({ content: c.content + ':A' }), { priority: 100 });
    addEntry('s2', 'B', (c) => ({ content: c.content + ':B' }), { priority: 200 });
    const result = await dispatch(ctx({ content: 'in' }));
    expect(result).toEqual({ content: 'in:A:B' });
  });

  test('returns the content patch even when extra is unchanged', async () => {
    addEntry('s1', 'A', () => ({ content: 'replaced' }));
    const result = await dispatch(ctx({ content: 'in' }));
    expect(result).toEqual({ content: 'replaced' });
  });
});

// ─── dispatch — origin filter ───────────────────────────────────────────────

describe('dispatch — origin filter', () => {
  test('handler with origin filter is skipped when ctx.origin does not match', async () => {
    let called = false;
    addEntry(
      's1',
      'X',
      () => {
        called = true;
        return { content: 'transformed' };
      },
      { origin: 'update' },
    );
    const result = await dispatch(ctx({ origin: 'create' }));
    expect(called).toBe(false);
    expect(result).toBeUndefined();
  });

  test('handler with origin array runs when ctx.origin matches any', async () => {
    addEntry('s1', 'X', () => ({ content: 'transformed' }), {
      origin: ['create', 'swipe_add'],
    });
    expect(await dispatch(ctx({ origin: 'create' }))).toEqual({ content: 'transformed' });
    expect(await dispatch(ctx({ origin: 'swipe_add' }))).toEqual({ content: 'transformed' });
    expect(await dispatch(ctx({ origin: 'update' }))).toBeUndefined();
  });
});

// ─── dispatch — extra delta semantics (the subtle one) ──────────────────────

describe('dispatch — extra delta semantics', () => {
  test('returns ONLY the keys handlers wrote; pristine initial.extra keys are NOT round-tripped', async () => {
    // The host shallow-merges our returned `extra` onto the row's existing
    // extra. Returning pristine keys would re-stamp them on every write —
    // wasteful and unsafe under concurrent host-side mutations.
    addEntry('s1', 'A', () => ({ extra: { added: 1 } }));
    const result = await dispatch(
      ctx({ extra: { pristine: 'untouched', other: 42 } }),
    );
    expect(result).toEqual({ extra: { added: 1 } });
    expect((result as any).extra.pristine).toBeUndefined();
    expect((result as any).extra.other).toBeUndefined();
  });

  test('chain handlers see merged view (initial.extra + delta-so-far)', async () => {
    const observed: Record<string, unknown>[] = [];
    addEntry(
      's1',
      'A',
      (c) => {
        observed.push({ ...(c.extra ?? {}) });
        return { extra: { addedByA: 'a-value' } };
      },
      { priority: 100 },
    );
    addEntry(
      's2',
      'B',
      (c) => {
        observed.push({ ...(c.extra ?? {}) });
        return undefined;
      },
      { priority: 200 },
    );
    await dispatch(ctx({ extra: { pristine: 1 } }));
    expect(observed[0]).toEqual({ pristine: 1 }); // A sees pristine only
    expect(observed[1]).toEqual({ pristine: 1, addedByA: 'a-value' }); // B sees merged
  });

  test('later handler overwriting earlier delta key wins', async () => {
    addEntry('s1', 'A', () => ({ extra: { k: 'first' } }), { priority: 100 });
    addEntry('s2', 'B', () => ({ extra: { k: 'second' } }), { priority: 200 });
    const result = await dispatch(ctx({ extra: {} }));
    expect(result).toEqual({ extra: { k: 'second' } });
  });

  test('handler returning extra overwriting initial.extra key — delta carries the override', async () => {
    addEntry('s1', 'A', () => ({ extra: { existing: 'overwritten' } }));
    const result = await dispatch(ctx({ extra: { existing: 'original', other: 'untouched' } }));
    // Delta contains only the overwrite; `other` is left to the host's merge.
    expect(result).toEqual({ extra: { existing: 'overwritten' } });
  });
});

// ─── dispatch — swipe origin extra semantics ────────────────────────────────

describe('dispatch — swipe origin', () => {
  test('extra is dropped from the final return on swipe origins', async () => {
    addEntry('s1', 'A', () => ({ content: 'new', extra: { x: 1 } }));
    const result = await dispatch(ctx({ origin: 'swipe_add' }));
    expect(result).toEqual({ content: 'new' });
    expect((result as any).extra).toBeUndefined();
  });

  test('extra is still threaded through the chain on swipe origins (handlers see merged view)', async () => {
    let bSawExtra: Record<string, unknown> | undefined;
    addEntry('s1', 'A', () => ({ extra: { addedByA: 'value' } }), { priority: 100 });
    addEntry(
      's2',
      'B',
      (c) => {
        bSawExtra = c.extra ? { ...c.extra } : undefined;
        return undefined;
      },
      { priority: 200 },
    );
    await dispatch(ctx({ origin: 'swipe_update', extra: { pristine: 1 } }));
    expect(bSawExtra).toEqual({ pristine: 1, addedByA: 'value' });
  });

  test('content-only patch is preserved on swipe origins', async () => {
    addEntry('s1', 'A', () => ({ content: 'transformed' }));
    const result = await dispatch(ctx({ origin: 'swipe_update', swipeIndex: 2 }));
    expect(result).toEqual({ content: 'transformed' });
  });
});

// ─── dispatch — error / timeout isolation ───────────────────────────────────

describe('dispatch — error isolation', () => {
  test('throwing handler is skipped; chain continues', async () => {
    addEntry('s1', 'good-first', () => ({ content: 'first' }), { priority: 100 });
    addEntry(
      's2',
      'bad',
      () => {
        throw new Error('boom');
      },
      { priority: 200 },
    );
    addEntry(
      's3',
      'good-third',
      (c) => ({ content: c.content + ':third' }),
      { priority: 300 },
    );
    const result = await dispatch(ctx({ content: 'start' }));
    expect(result).toEqual({ content: 'first:third' });
    const warn = (globalThis as any).spindle.log.warn as { mock: { calls: unknown[][] } };
    const warnCalls = warn.mock.calls.map((c) => String(c[0]));
    expect(warnCalls.some((m) => m.includes('"bad"') && m.includes('threw'))).toBe(true);
  });

  test('handler exceeding timeoutMs is skipped; chain continues', async () => {
    addEntry(
      's1',
      'slow',
      () => new Promise<{ content: string }>((resolve) =>
        setTimeout(() => resolve({ content: 'slow' }), 50),
      ),
      { timeoutMs: 10 },
    );
    addEntry('s2', 'fast', (c) => ({ content: c.content + ':fast' }), { priority: 200 });
    const result = await dispatch(ctx({ content: 'in' }));
    expect(result).toEqual({ content: 'in:fast' });
    const warn = (globalThis as any).spindle.log.warn as { mock: { calls: unknown[][] } };
    const warnCalls = warn.mock.calls.map((c) => String(c[0]));
    expect(warnCalls.some((m) => m.includes('"slow"') && m.includes('timed out'))).toBe(true);
  });
});

// ─── listIdsByScriptId / diffAndCleanStale (stale-handler cleanup) ──────────
//
// Mirrors the matching block in `macro-interceptor-registry.test.ts`. The
// stale-cleanup path is shared infrastructure; both registries follow the
// same lifecycle hooks in `executor.ts` / `backend.ts` / `trigger-registry.ts`.

describe('listIdsByScriptId', () => {
  test('returns ids of entries owned by the given script', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1' });
    addEntry('s1', 'A', () => undefined, { id: 'p2' });
    addEntry('s2', 'B', () => undefined, { id: 'p1' });
    expect(listIdsByScriptId('s1').sort()).toEqual(['p1', 'p2']);
    expect(listIdsByScriptId('s2')).toEqual(['p1']);
  });

  test('returns an empty array when no entries are owned', () => {
    addEntry('s1', 'A', () => undefined);
    expect(listIdsByScriptId('s2')).toEqual([]);
  });
});

describe('diffAndCleanStale', () => {
  test('drops entries in preRunIds that were not re-registered this run', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1' });
    addEntry('s1', 'A', () => undefined, { id: 'p2' });
    const preRun = listIdsByScriptId('s1');
    const dropped = diffAndCleanStale('s1', preRun, new Set<string>(['p2']));
    expect(dropped.sort()).toEqual(['p1']);
    expect(listIdsByScriptId('s1')).toEqual(['p2']);
  });

  test('returns empty when all preRun ids were re-registered', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1' });
    const dropped = diffAndCleanStale('s1', ['p1'], new Set<string>(['p1']));
    expect(dropped).toEqual([]);
    expect(listIdsByScriptId('s1')).toEqual(['p1']);
  });

  test('only drops entries owned by the given script (cross-script defense)', () => {
    addEntry('s1', 'A', () => undefined, { id: 'shared' });
    addEntry('s2', 'B', () => undefined, { id: 'shared' });
    const dropped = diffAndCleanStale('s1', ['shared'], new Set<string>());
    expect(dropped).toEqual(['shared']);
    expect(listIdsByScriptId('s1')).toEqual([]);
    expect(listIdsByScriptId('s2')).toEqual(['shared']);
  });

  test('handles a script with no preRun entries (fresh registration)', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1' });
    const dropped = diffAndCleanStale('s1', [], new Set<string>(['p1']));
    expect(dropped).toEqual([]);
    expect(listIdsByScriptId('s1')).toEqual(['p1']);
  });

  test('drops nothing when the script already removed the preRun entry', () => {
    addEntry('s1', 'A', () => undefined, { id: 'p1' });
    removeEntry('s1', 'p1');
    const dropped = diffAndCleanStale('s1', ['p1'], new Set<string>());
    expect(dropped).toEqual([]);
  });
});
