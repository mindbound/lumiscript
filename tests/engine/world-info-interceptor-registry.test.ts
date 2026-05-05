/**
 * Covers the per-script world-info-interceptor registry + its multiplexer
 * dispatch. Mirrors `macro-interceptor-registry.test.ts` shape.
 *
 * The registry sits between the LS-house extension-level
 * `spindle.registerWorldInfoInterceptor` registration in backend.ts and
 * individual scripts' `api.worldInfo.registerInterceptor()` registrations.
 *
 * Coverage:
 *  - addEntry / removeEntry / clearByScriptId / listAll / countByScriptId
 *  - validation (non-function handler, non-finite priority, non-positive timeout)
 *  - auto-id generation per script + user-supplied id round-trip
 *  - listIdsByScriptId + diffAndCleanStale (pre-run snapshot diff)
 *  - dispatch ordering (priority ASC, registration-order tie-break)
 *  - vote-off precedence on `disabled` (later enabled/forced ignored)
 *  - last-write-wins on `mutated` per entry id
 *  - per-handler timeout isolates chain
 *  - thrown handler isolates chain
 *  - applyAccumulator threads prior decisions into next handler's ctx
 *  - empty registry returns undefined (full pass-through)
 *  - all-no-op handlers return undefined (no `touched` flag flipped)
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import type {
  WorldInfoInterceptorCtx,
  WorldInfoInterceptorEntry,
} from '../../src/types/script.js';
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
} from '../../src/engine/world-info-interceptor-registry.js';

beforeEach(() => __reset());

// ─── Test helpers ────────────────────────────────────────────────────────────

function makeEntry(id: string, overrides?: Partial<WorldInfoInterceptorEntry>): WorldInfoInterceptorEntry {
  return {
    id,
    worldBookId:    'wb-1',
    comment:        '',
    disabled:       false,
    constant:       false,
    extensions:     {},
    key:            [],
    keysecondary:   [],
    position:       0,
    depth:          0,
    priority:       100,
    probability:    100,
    useProbability: false,
    content:        `original-${id}`,
    ...overrides,
  };
}

function ctx(entryIds: string[] = ['e1', 'e2'], overrides?: Partial<WorldInfoInterceptorCtx>): WorldInfoInterceptorCtx {
  return {
    chatId:       'chat-1',
    characterId:  'char-1',
    entries:      entryIds.map((id) => makeEntry(id)),
    messages:     [],
    chatTurn:     1,
    chatMetadata: {},
    ...overrides,
  };
}

// ─── addEntry — basic semantics ──────────────────────────────────────────────

describe('addEntry', () => {
  test('returns the resolved id', () => {
    const id = addEntry('s1', 'Script One', () => undefined);
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  test('preserves user-supplied id', () => {
    const id = addEntry('s1', 'S1', () => undefined, { id: 'my-handler' });
    expect(id).toBe('my-handler');
  });

  test('generates unique auto-ids per script', () => {
    const a = addEntry('s1', 'S1', () => undefined);
    const b = addEntry('s1', 'S1', () => undefined);
    expect(a).not.toBe(b);
  });

  test('throws on non-function handler', () => {
    expect(() => addEntry('s1', 'S1', 'nope' as unknown as () => void)).toThrow(/handler must be a function/);
  });

  test('throws on non-finite priority', () => {
    expect(() => addEntry('s1', 'S1', () => undefined, { priority: NaN })).toThrow(/priority must be finite/);
  });

  test('throws on non-positive timeout', () => {
    expect(() => addEntry('s1', 'S1', () => undefined, { timeoutMs: 0 })).toThrow(/timeoutMs must be a positive finite number/);
  });

  test('replaces on duplicate id (same script)', () => {
    const id1 = addEntry('s1', 'S1', () => undefined, { id: 'X', priority: 50 });
    const id2 = addEntry('s1', 'S1', () => undefined, { id: 'X', priority: 200 });
    expect(id1).toBe(id2);
    expect(countByScriptId('s1')).toBe(1);
    expect(listAll()[0]?.priority).toBe(200);
  });
});

// ─── removeEntry / clearByScriptId ───────────────────────────────────────────

describe('removeEntry', () => {
  test('removes by (scriptId, id)', () => {
    addEntry('s1', 'S1', () => undefined, { id: 'a' });
    addEntry('s1', 'S1', () => undefined, { id: 'b' });
    expect(removeEntry('s1', 'a')).toBe(true);
    expect(countByScriptId('s1')).toBe(1);
    expect(listAll()[0]?.id).toBe('b');
  });

  test('returns false for unknown id', () => {
    expect(removeEntry('s1', 'nope')).toBe(false);
  });

  test('returns false when scriptId mismatch', () => {
    addEntry('s1', 'S1', () => undefined, { id: 'a' });
    expect(removeEntry('s2', 'a')).toBe(false);
    expect(countByScriptId('s1')).toBe(1);
  });
});

describe('clearByScriptId', () => {
  test('drops all entries owned by the script', () => {
    addEntry('s1', 'S1', () => undefined);
    addEntry('s1', 'S1', () => undefined);
    addEntry('s2', 'S2', () => undefined);
    clearByScriptId('s1');
    expect(countByScriptId('s1')).toBe(0);
    expect(countByScriptId('s2')).toBe(1);
  });

  test('resets auto-id counter for the cleared script', () => {
    const a1 = addEntry('s1', 'S1', () => undefined);
    clearByScriptId('s1');
    const a2 = addEntry('s1', 'S1', () => undefined);
    // Auto-id counter resets, so the new entry gets the same auto-id
    expect(a1).toBe(a2);
  });
});

// ─── diffAndCleanStale ───────────────────────────────────────────────────────

describe('diffAndCleanStale', () => {
  test('drops entries that existed before the run but were not re-registered', () => {
    addEntry('s1', 'S1', () => undefined, { id: 'old1' });
    addEntry('s1', 'S1', () => undefined, { id: 'old2' });
    const preRunIds = listIdsByScriptId('s1');
    expect(preRunIds.sort()).toEqual(['old1', 'old2']);

    // Simulate a re-run that only re-registers 'old1'.
    const stale = diffAndCleanStale('s1', preRunIds, new Set(['old1']));
    expect(stale).toEqual(['old2']);
    expect(countByScriptId('s1')).toBe(1);
    expect(listIdsByScriptId('s1')).toEqual(['old1']);
  });

  test('preserves entries that were both in pre-run snapshot AND re-registered', () => {
    addEntry('s1', 'S1', () => undefined, { id: 'a' });
    const stale = diffAndCleanStale('s1', ['a'], new Set(['a']));
    expect(stale).toEqual([]);
    expect(countByScriptId('s1')).toBe(1);
  });

  test('does not touch other scripts entries', () => {
    addEntry('s1', 'S1', () => undefined, { id: 'a' });
    addEntry('s2', 'S2', () => undefined, { id: 'a' });
    diffAndCleanStale('s1', ['a'], new Set());
    expect(countByScriptId('s1')).toBe(0);
    expect(countByScriptId('s2')).toBe(1);
  });
});

// ─── dispatch — pass-through and basic semantics ─────────────────────────────

describe('dispatch — basic', () => {
  test('returns undefined when no handlers registered', async () => {
    expect(await dispatch(ctx())).toBeUndefined();
  });

  test('returns undefined when all handlers return void', async () => {
    addEntry('s1', 'S1', () => undefined);
    addEntry('s1', 'S1', async () => undefined);
    expect(await dispatch(ctx())).toBeUndefined();
  });

  test('returns undefined on void return from a single handler', async () => {
    addEntry('s1', 'S1', () => undefined);
    expect(await dispatch(ctx(['e1']))).toBeUndefined();
  });

  test('aggregates a single handler\'s result', async () => {
    addEntry('s1', 'S1', () => ({ disabled: ['e1'] }));
    const result = await dispatch(ctx(['e1', 'e2']));
    expect(result?.disabled).toEqual(['e1']);
    expect(result?.enabled).toBeUndefined();
    expect(result?.forced).toBeUndefined();
    expect(result?.mutated).toBeUndefined();
  });
});

// ─── dispatch — priority ordering ─────────────────────────────────────────────

describe('dispatch — ordering', () => {
  test('lower-priority handler runs first', async () => {
    const order: string[] = [];
    addEntry('s2', 'S2', () => { order.push('B'); return undefined; }, { priority: 200 });
    addEntry('s1', 'S1', () => { order.push('A'); return undefined; }, { priority: 50 });
    await dispatch(ctx());
    expect(order).toEqual(['A', 'B']);
  });

  test('registration order breaks priority ties', async () => {
    const order: string[] = [];
    addEntry('s1', 'S1', () => { order.push('1'); return undefined; }, { priority: 100 });
    addEntry('s2', 'S2', () => { order.push('2'); return undefined; }, { priority: 100 });
    addEntry('s3', 'S3', () => { order.push('3'); return undefined; }, { priority: 100 });
    await dispatch(ctx());
    expect(order).toEqual(['1', '2', '3']);
  });
});

// ─── dispatch — vote-off precedence on `disabled` ────────────────────────────

describe('dispatch — vote-off precedence', () => {
  test('once disabled, later enabled vote does NOT revive', async () => {
    addEntry('s1', 'S1', () => ({ disabled: ['e1'] }), { priority: 50 });
    addEntry('s2', 'S2', () => ({ enabled:  ['e1'] }), { priority: 200 });
    const result = await dispatch(ctx(['e1']));
    expect(result?.disabled).toEqual(['e1']);
    // enabled is filtered to entries NOT in disabled set → empty → omitted
    expect(result?.enabled).toBeUndefined();
  });

  test('once disabled, later forced vote does NOT revive', async () => {
    addEntry('s1', 'S1', () => ({ disabled: ['e1'] }), { priority: 50 });
    addEntry('s2', 'S2', () => ({ forced:   ['e1'] }), { priority: 200 });
    const result = await dispatch(ctx(['e1']));
    expect(result?.disabled).toEqual(['e1']);
    expect(result?.forced).toBeUndefined();
  });

  test('vote-off works regardless of which handler votes first', async () => {
    addEntry('s1', 'S1', () => ({ enabled: ['e1'] }), { priority: 50 });
    addEntry('s2', 'S2', () => ({ disabled: ['e1'] }), { priority: 200 });
    const result = await dispatch(ctx(['e1']));
    expect(result?.disabled).toEqual(['e1']);
    expect(result?.enabled).toBeUndefined();
  });

  test('enabled + forced for non-disabled entries are preserved', async () => {
    addEntry('s1', 'S1', () => ({ disabled: ['e1'], enabled: ['e2'], forced: ['e3'] }));
    const result = await dispatch(ctx(['e1', 'e2', 'e3']));
    expect(result?.disabled).toEqual(['e1']);
    expect(result?.enabled).toEqual(['e2']);
    expect(result?.forced).toEqual(['e3']);
  });
});

// ─── dispatch — chain threading (handler sees prior decisions) ──────────────

describe('dispatch — chain threading', () => {
  test('second handler sees first handler\'s mutations applied to entries', async () => {
    let secondHandlerSawDisabled: boolean | undefined;
    addEntry('s1', 'S1', () => ({ disabled: ['e1'] }), { priority: 50 });
    addEntry('s2', 'S2', (handlerCtx) => {
      const e1 = handlerCtx.entries.find((e) => e.id === 'e1');
      secondHandlerSawDisabled = e1?.disabled;
      return undefined;
    }, { priority: 200 });
    await dispatch(ctx(['e1', 'e2']));
    expect(secondHandlerSawDisabled).toBe(true);
  });

  test('second handler sees first handler\'s content mutation', async () => {
    let secondHandlerSawContent: string | undefined;
    addEntry('s1', 'S1', () => ({ mutated: [{ id: 'e1', content: 'overwritten' }] }), { priority: 50 });
    addEntry('s2', 'S2', (handlerCtx) => {
      secondHandlerSawContent = handlerCtx.entries.find((e) => e.id === 'e1')?.content;
      return undefined;
    }, { priority: 200 });
    await dispatch(ctx(['e1']));
    expect(secondHandlerSawContent).toBe('overwritten');
  });

  test('initial ctx entries are NOT mutated in place', async () => {
    const initialCtx = ctx(['e1']);
    const initialContent = initialCtx.entries[0]!.content;
    addEntry('s1', 'S1', () => ({ mutated: [{ id: 'e1', content: 'overwritten' }] }));
    await dispatch(initialCtx);
    expect(initialCtx.entries[0]!.content).toBe(initialContent);
  });
});

// ─── dispatch — last-write-wins on mutated ──────────────────────────────────

describe('dispatch — mutated last-write-wins', () => {
  test('higher-priority handler\'s mutation wins', async () => {
    addEntry('s1', 'S1', () => ({ mutated: [{ id: 'e1', content: 'first'  }] }), { priority: 50 });
    addEntry('s2', 'S2', () => ({ mutated: [{ id: 'e1', content: 'second' }] }), { priority: 200 });
    const result = await dispatch(ctx(['e1']));
    // priority order: s1 runs first (lower priority value), s2 runs after.
    // last-write = s2. So content should be 'second'.
    expect(result?.mutated).toEqual([{ id: 'e1', content: 'second' }]);
  });

  test('different ids accumulate independently', async () => {
    addEntry('s1', 'S1', () => ({ mutated: [{ id: 'e1', content: 'm1' }] }));
    addEntry('s2', 'S2', () => ({ mutated: [{ id: 'e2', content: 'm2' }] }));
    const result = await dispatch(ctx(['e1', 'e2']));
    const sorted = [...(result?.mutated ?? [])].sort((a, b) => a.id.localeCompare(b.id));
    expect(sorted).toEqual([
      { id: 'e1', content: 'm1' },
      { id: 'e2', content: 'm2' },
    ]);
  });
});

// ─── dispatch — error / timeout isolation ───────────────────────────────────

describe('dispatch — error isolation', () => {
  test('a thrown handler does not break the chain', async () => {
    let secondRan = false;
    addEntry('s1', 'S1', () => { throw new Error('boom'); }, { priority: 50 });
    addEntry('s2', 'S2', () => { secondRan = true; return ({ disabled: ['e1'] }); }, { priority: 200 });
    const result = await dispatch(ctx(['e1']));
    expect(secondRan).toBe(true);
    expect(result?.disabled).toEqual(['e1']);
  });

  test('a timeout does not break the chain', async () => {
    let secondRan = false;
    addEntry('s1', 'S1', () => new Promise(() => { /* never resolves */ }), { timeoutMs: 50, priority: 50 });
    addEntry('s2', 'S2', () => { secondRan = true; return ({ disabled: ['e2'] }); }, { priority: 200 });
    const result = await dispatch(ctx(['e1', 'e2']));
    expect(secondRan).toBe(true);
    expect(result?.disabled).toEqual(['e2']);
  });
});

// ─── listAll / countByScriptId / hasAnyEntry ────────────────────────────────

describe('readers', () => {
  test('hasAnyEntry reflects registry state', () => {
    expect(hasAnyEntry()).toBe(false);
    addEntry('s1', 'S1', () => undefined);
    expect(hasAnyEntry()).toBe(true);
    clearByScriptId('s1');
    expect(hasAnyEntry()).toBe(false);
  });

  test('listAll returns RegisteredWorldInfoInterceptorInfo snapshots', () => {
    addEntry('s1', 'Script One', () => undefined, { id: 'a', priority: 75, timeoutMs: 1500 });
    const list = listAll();
    expect(list).toHaveLength(1);
    expect(list[0]).toEqual({
      scriptId:   's1',
      scriptName: 'Script One',
      id:         'a',
      priority:   75,
      timeoutMs:  1500,
    });
  });
});
