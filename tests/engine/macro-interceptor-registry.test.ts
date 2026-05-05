/**
 * Covers the per-script macro interceptor registry + its multiplexer dispatch.
 *
 * The registry sits between the LS-house extension-level
 * `spindle.registerMacroInterceptor` registration in backend.ts and individual
 * scripts' `api.macros.registerInterceptor()` registrations. Every behaviour
 * here flows through the host's chain semantics:
 *  - priority ASC, registration-order tie-break
 *  - per-handler 2s soft timeout (default; configurable)
 *  - phase + matchTemplate pre-filters short-circuit before handler invocation
 *  - chain threads the (possibly-transformed) template
 *  - void / undefined return = pass through; string return = replace
 *  - thrown handler / timeout: isolated; chain continues with prior template
 *  - dispatch() returns the final transformed value, or undefined for
 *    full pass-through (matches the host's chain contract for our LS-house
 *    handler return value).
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import type { MacroInterceptorCtxDTO } from 'lumiverse-spindle-types';
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
} from '../../src/engine/macro-interceptor-registry.js';

beforeEach(() => __reset());

// ─── Test helpers ────────────────────────────────────────────────────────────

/** Build a minimal-but-valid `MacroInterceptorCtxDTO` for dispatch tests. */
function ctx(overrides?: Partial<MacroInterceptorCtxDTO>): MacroInterceptorCtxDTO {
  return {
    template: '{{user}} hi',
    env: {
      commit: false,
      names: {},
      character: {},
      chat: {},
      system: {},
      variables: { local: {}, global: {}, chat: {} },
      // Required by upstream `MacroInterceptorEnvDTO` (lumiverse-spindle-types
      // ≥0.4.62). Per-call macro overrides; empty in fixtures.
      dynamicMacros: {},
      extra: {},
    },
    commit: false,
    phase: 'prompt',
    ...overrides,
  };
}

// ─── addEntry — basic semantics ──────────────────────────────────────────────

describe('addEntry', () => {
  test('creates an entry retrievable via listAll', () => {
    addEntry('script-1', 'Tracker', () => undefined, { id: 'h1' });
    const all = listAll();
    expect(all.length).toBe(1);
    expect(all[0]!.scriptId).toBe('script-1');
    expect(all[0]!.id).toBe('h1');
    expect(all[0]!.priority).toBe(100); // default
    expect(all[0]!.timeoutMs).toBe(2000); // default
    expect(all[0]!.phases).toBeNull();
    expect(all[0]!.matchTemplate).toBeNull();
  });

  test('auto-generates id when omitted; ids are unique within a script', () => {
    addEntry('script-1', 'Tracker', () => undefined);
    addEntry('script-1', 'Tracker', () => undefined);
    const ids = listAll().map((e) => e.id);
    expect(ids.length).toBe(2);
    expect(new Set(ids).size).toBe(2);
  });

  test('hasAnyEntry / countByScriptId track adds correctly', () => {
    expect(hasAnyEntry()).toBe(false);
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-2', 'B', () => undefined);
    expect(hasAnyEntry()).toBe(true);
    expect(countByScriptId('script-1')).toBe(2);
    expect(countByScriptId('script-2')).toBe(1);
    expect(countByScriptId('nope')).toBe(0);
  });

  test('throws on non-function handler', () => {
    expect(() =>
      addEntry('script-1', 'X', 'not-a-fn' as unknown as () => void, undefined),
    ).toThrow(/must be a function/);
  });

  test('throws on non-finite priority', () => {
    expect(() =>
      addEntry('script-1', 'X', () => undefined, { priority: NaN }),
    ).toThrow(/priority must be finite/);
    expect(() =>
      addEntry('script-1', 'X', () => undefined, { priority: Infinity }),
    ).toThrow(/priority must be finite/);
  });

  test('throws on non-positive or non-finite timeoutMs', () => {
    expect(() =>
      addEntry('script-1', 'X', () => undefined, { timeoutMs: 0 }),
    ).toThrow(/timeoutMs must be a positive finite number/);
    expect(() =>
      addEntry('script-1', 'X', () => undefined, { timeoutMs: -1 }),
    ).toThrow(/timeoutMs must be a positive finite number/);
    expect(() =>
      addEntry('script-1', 'X', () => undefined, { timeoutMs: NaN }),
    ).toThrow(/timeoutMs must be a positive finite number/);
  });
});

// ─── Replace on same (scriptId, id) ──────────────────────────────────────────

describe('addEntry — replace semantics', () => {
  test('same (scriptId, id) replaces the prior entry without throwing', () => {
    addEntry('script-1', 'X', () => 'first', { id: 'h1', priority: 50 });
    expect(() =>
      addEntry('script-1', 'X', () => 'second', { id: 'h1', priority: 200 }),
    ).not.toThrow();
    const all = listAll();
    expect(all.length).toBe(1);
    expect(all[0]!.priority).toBe(200);
  });

  test('different scripts can share the same explicit id without collision', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    addEntry('script-2', 'B', () => undefined, { id: 'h1' });
    expect(listAll().length).toBe(2);
  });
});

// ─── removeEntry / clearByScriptId ──────────────────────────────────────────

describe('removeEntry', () => {
  test('returns true and removes a known entry', () => {
    addEntry('script-1', 'X', () => undefined, { id: 'h1' });
    expect(removeEntry('script-1', 'h1')).toBe(true);
    expect(listAll().length).toBe(0);
  });

  test('returns false on unknown entry', () => {
    expect(removeEntry('script-1', 'nope')).toBe(false);
  });

  test('returns false on cross-script remove attempt (ownership-scoped)', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    expect(removeEntry('script-2', 'h1')).toBe(false);
    expect(listAll().length).toBe(1);
  });
});

describe('clearByScriptId', () => {
  test('drops every entry owned by the given script', () => {
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-2', 'B', () => undefined);
    clearByScriptId('script-1');
    const all = listAll();
    expect(all.length).toBe(1);
    expect(all[0]!.scriptId).toBe('script-2');
  });

  test('also resets auto-id counter for the cleared script', () => {
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-1', 'A', () => undefined);
    clearByScriptId('script-1');
    addEntry('script-1', 'A', () => undefined);
    // First post-clear auto-id should be 1, not 3
    expect(listAll()[0]!.id).toBe('auto-1');
  });
});

// ─── dispatch — chain threading ──────────────────────────────────────────────

describe('dispatch', () => {
  test('returns undefined when no entries are registered', async () => {
    const result = await dispatch(ctx({ template: 'unchanged' }));
    expect(result).toBeUndefined();
  });

  test('returns undefined when every handler passes through (void return)', async () => {
    addEntry('script-1', 'A', () => undefined);
    addEntry('script-2', 'B', () => undefined);
    const result = await dispatch(ctx({ template: 'unchanged' }));
    expect(result).toBeUndefined();
  });

  test('returns the final string when one handler transforms', async () => {
    addEntry('script-1', 'A', () => 'first-out');
    const result = await dispatch(ctx({ template: 'in' }));
    expect(result).toBe('first-out');
  });

  test('threads the template through handlers in priority ASC order', async () => {
    const observed: string[] = [];
    addEntry(
      'script-1',
      'A',
      (c) => {
        observed.push(`p200:${c.template}`);
        return c.template + ':p200';
      },
      { priority: 200 },
    );
    addEntry(
      'script-1',
      'B',
      (c) => {
        observed.push(`p100:${c.template}`);
        return c.template + ':p100';
      },
      { priority: 100 },
    );
    const result = await dispatch(ctx({ template: 'start' }));
    expect(observed).toEqual(['p100:start', 'p200:start:p100']);
    expect(result).toBe('start:p100:p200');
  });

  test('breaks priority ties by registration order', async () => {
    const observed: string[] = [];
    addEntry('script-1', 'first', () => {
      observed.push('first');
      return undefined;
    });
    addEntry('script-1', 'second', () => {
      observed.push('second');
      return undefined;
    });
    await dispatch(ctx());
    expect(observed).toEqual(['first', 'second']);
  });
});

// ─── dispatch — phase filter ────────────────────────────────────────────────

describe('dispatch — phase filter', () => {
  test('handler with phase filter is skipped when ctx.phase does not match', async () => {
    let called = false;
    addEntry(
      'script-1',
      'X',
      () => {
        called = true;
        return 'transformed';
      },
      { phase: 'display' },
    );
    const result = await dispatch(ctx({ phase: 'prompt' }));
    expect(called).toBe(false);
    expect(result).toBeUndefined();
  });

  test('handler with phase filter runs when ctx.phase matches', async () => {
    addEntry('script-1', 'X', () => 'transformed', { phase: ['prompt', 'response'] });
    const result = await dispatch(ctx({ phase: 'prompt' }));
    expect(result).toBe('transformed');
  });

  test('handler without phase filter runs for any phase', async () => {
    addEntry('script-1', 'X', () => 'transformed');
    const result = await dispatch(ctx({ phase: 'other' }));
    expect(result).toBe('transformed');
  });
});

// ─── dispatch — matchTemplate filter ────────────────────────────────────────

describe('dispatch — matchTemplate filter', () => {
  test('string filter: skips when template does not contain marker', async () => {
    let called = false;
    addEntry(
      'script-1',
      'X',
      () => {
        called = true;
        return 'transformed';
      },
      { matchTemplate: '{{tracker.' },
    );
    const result = await dispatch(ctx({ template: '{{user}} hi' }));
    expect(called).toBe(false);
    expect(result).toBeUndefined();
  });

  test('string filter: runs when template contains marker', async () => {
    addEntry('script-1', 'X', () => 'transformed', {
      matchTemplate: '{{tracker.',
    });
    const result = await dispatch(ctx({ template: '{{tracker.intensity}}' }));
    expect(result).toBe('transformed');
  });

  test('string-array filter (any-of): runs when at least one marker is present', async () => {
    addEntry('script-1', 'X', () => 'transformed', {
      matchTemplate: ['{{tracker.', '{{state.'],
    });
    const result = await dispatch(ctx({ template: '{{state.mood}} ok' }));
    expect(result).toBe('transformed');
  });

  test('RegExp filter: runs when regex matches', async () => {
    addEntry('script-1', 'X', () => 'transformed', {
      matchTemplate: /\{\{tracker\.[a-z]+\}\}/,
    });
    const result = await dispatch(ctx({ template: '{{tracker.intensity}}' }));
    expect(result).toBe('transformed');
  });

  test('matchTemplate is re-evaluated against the CURRENT template after upstream transforms', async () => {
    // Handler A (priority 100) prepends a tracker marker;
    // Handler B (priority 200) only fires if {{tracker. is present.
    addEntry('script-1', 'A', (c) => '{{tracker.x}} ' + c.template, {
      priority: 100,
    });
    addEntry(
      'script-1',
      'B',
      (c) => c.template.replace('{{tracker.x}}', 'X'),
      { priority: 200, matchTemplate: '{{tracker.' },
    );
    const result = await dispatch(ctx({ template: 'plain' }));
    expect(result).toBe('X plain');
  });
});

// ─── dispatch — error / timeout isolation ───────────────────────────────────

describe('dispatch — error isolation', () => {
  test('throwing handler is skipped; chain continues with prior template', async () => {
    addEntry('script-1', 'good-first', () => 'first', { priority: 100 });
    addEntry(
      'script-2',
      'bad',
      () => {
        throw new Error('boom');
      },
      { priority: 200 },
    );
    addEntry(
      'script-3',
      'good-third',
      (c) => c.template + ':third',
      { priority: 300 },
    );
    const result = await dispatch(ctx({ template: 'start' }));
    // 'first' (from script-1) → bad throws (chain forwards 'first') → 'first:third'
    expect(result).toBe('first:third');
    const warn = (globalThis as any).spindle.log.warn as { mock: { calls: unknown[][] } };
    const warnCalls = warn.mock.calls.map((c) => String(c[0]));
    expect(warnCalls.some((m) => m.includes('"bad"') && m.includes('threw'))).toBe(true);
  });

  test('handler exceeding timeoutMs is skipped; chain continues', async () => {
    addEntry(
      'script-1',
      'slow',
      () => new Promise<string>((resolve) => setTimeout(() => resolve('slow-out'), 50)),
      { timeoutMs: 10 },
    );
    addEntry('script-1', 'fast', (c) => c.template + ':fast', { priority: 200 });
    const result = await dispatch(ctx({ template: 'in' }));
    expect(result).toBe('in:fast');
    const warn = (globalThis as any).spindle.log.warn as { mock: { calls: unknown[][] } };
    const warnCalls = warn.mock.calls.map((c) => String(c[0]));
    expect(warnCalls.some((m) => m.includes('"slow"') && m.includes('timed out'))).toBe(true);
  });
});

// ─── listIdsByScriptId / diffAndCleanStale (stale-handler cleanup) ──────────
//
// Mirrors `tool-store.diffAndCleanStaleTools` and the same pattern in
// `macro-store`. Used by `executor.ts` (via backend.ts and trigger-registry.ts)
// to drop entries the new script body no longer creates after a re-run.

describe('listIdsByScriptId', () => {
  test('returns ids of entries owned by the given script', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    addEntry('script-1', 'A', () => undefined, { id: 'h2' });
    addEntry('script-2', 'B', () => undefined, { id: 'h1' });
    expect(listIdsByScriptId('script-1').sort()).toEqual(['h1', 'h2']);
    expect(listIdsByScriptId('script-2')).toEqual(['h1']);
  });

  test('returns an empty array when no entries are owned', () => {
    addEntry('script-1', 'A', () => undefined);
    expect(listIdsByScriptId('script-2')).toEqual([]);
  });
});

describe('diffAndCleanStale', () => {
  test('drops entries in preRunIds that were not re-registered this run', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    addEntry('script-1', 'A', () => undefined, { id: 'h2' });
    const preRun = listIdsByScriptId('script-1'); // ['h1', 'h2']
    // Simulate a re-run that only registered h2 (h1 disappeared from the script body)
    const registeredThisRun = new Set<string>(['h2']);
    const dropped = diffAndCleanStale('script-1', preRun, registeredThisRun);
    expect(dropped.sort()).toEqual(['h1']);
    expect(listIdsByScriptId('script-1')).toEqual(['h2']);
  });

  test('returns empty when all preRun ids were re-registered', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    const preRun = listIdsByScriptId('script-1');
    const dropped = diffAndCleanStale(
      'script-1',
      preRun,
      new Set<string>(['h1']),
    );
    expect(dropped).toEqual([]);
    expect(listIdsByScriptId('script-1')).toEqual(['h1']);
  });

  test('only drops entries owned by the given script (cross-script defense)', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'shared' });
    addEntry('script-2', 'B', () => undefined, { id: 'shared' });
    // preRunIds for script-1 says 'shared' was there; this run didn't re-register it.
    // The drop must NOT touch script-2's entry with the same id.
    const dropped = diffAndCleanStale('script-1', ['shared'], new Set<string>());
    expect(dropped).toEqual(['shared']);
    expect(listIdsByScriptId('script-1')).toEqual([]);
    expect(listIdsByScriptId('script-2')).toEqual(['shared']);
  });

  test('handles a script with no preRun entries (e.g. fresh registration)', () => {
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    const dropped = diffAndCleanStale('script-1', [], new Set<string>(['h1']));
    expect(dropped).toEqual([]);
    expect(listIdsByScriptId('script-1')).toEqual(['h1']);
  });

  test('drops nothing when the script no longer owns any preRun entries (already-cleaned)', () => {
    // Script registered h1 then explicitly removed it before re-run completed.
    addEntry('script-1', 'A', () => undefined, { id: 'h1' });
    removeEntry('script-1', 'h1');
    const dropped = diffAndCleanStale('script-1', ['h1'], new Set<string>());
    expect(dropped).toEqual([]);
  });
});
