/**
 * Unit tests for `src/components/storage/collections-logic.ts` — the pure
 * filter / sort / budget / tooltip logic extracted from `CollectionsSection`.
 * No DOM: all functions are data-in / data-out.
 */
import { describe, test, expect } from 'bun:test';
import {
  sizeBudget,
  scopeTooltip,
  scopeIdentityLine,
  compareCollections,
  filterAndSortCollections,
  nextScopeFilter,
  nextSort,
  ALL_SCOPES,
  SIZE_WARN_THRESHOLD_BYTES,
  SIZE_DANGER_THRESHOLD_BYTES,
  type Scope,
  type CollectionViewState,
} from '../../../src/components/storage/collections-logic.js';
import type { CollectionSummary } from '../../../src/engine/db-admin.js';

const MB = 1024 * 1024;

function mk(overrides: Partial<CollectionSummary> = {}): CollectionSummary {
  return {
    path: 'db/scripts/s1/collection.json',
    name: 'collection',
    scope: 'script',
    scriptId: 's1',
    sizeBytes: 0,
    modifiedAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  };
}

/** Build a default view state (no filtering, no sort) with overrides. */
function view(overrides: Partial<CollectionViewState> = {}): CollectionViewState {
  return {
    scopeFilter: new Set<Scope>(ALL_SCOPES),
    searchQuery: '',
    sortBy: null,
    sortDir: 'asc',
    scriptNameById: new Map<string, string>(),
    ...overrides,
  };
}

describe('sizeBudget', () => {
  test('below the warn threshold is "normal" with inherit color', () => {
    expect(sizeBudget(0)).toEqual({ tier: 'normal', color: 'inherit' });
    expect(sizeBudget(SIZE_WARN_THRESHOLD_BYTES - 1).tier).toBe('normal');
  });

  test('at exactly the warn threshold flips to "warn"', () => {
    expect(sizeBudget(SIZE_WARN_THRESHOLD_BYTES).tier).toBe('warn');
    expect(sizeBudget(25 * MB).tier).toBe('warn');
    expect(sizeBudget(SIZE_DANGER_THRESHOLD_BYTES - 1).tier).toBe('warn');
  });

  test('at exactly the danger threshold flips to "danger"', () => {
    expect(sizeBudget(SIZE_DANGER_THRESHOLD_BYTES).tier).toBe('danger');
    expect(sizeBudget(50 * MB).tier).toBe('danger');
  });

  test('warn / danger tiers carry a non-inherit color', () => {
    expect(sizeBudget(10 * MB).color).not.toBe('inherit');
    expect(sizeBudget(45 * MB).color).not.toBe('inherit');
  });
});

describe('scopeTooltip', () => {
  test('script scope falls back to the bare path', () => {
    expect(scopeTooltip(mk({ scope: 'script', path: 'db/scripts/s1/x.json' }))).toBe('db/scripts/s1/x.json');
  });

  test('character scope with a resolved name shows name + id + path', () => {
    const c = mk({ scope: 'character', characterId: 'c-1', characterName: 'Alice', path: 'p' });
    expect(scopeTooltip(c)).toBe('character: Alice (c-1)\np');
  });

  test('character scope with id but no name marks it not-loaded', () => {
    const c = mk({ scope: 'character', characterId: 'c-1', path: 'p' });
    expect(scopeTooltip(c)).toBe('character: c-1 (not currently loaded)\np');
  });

  test('character scope with neither name nor id falls back to the path', () => {
    const c = mk({ scope: 'character', path: 'p' });
    expect(scopeTooltip(c)).toBe('p');
  });

  test('chat scope with a resolved name shows name + id + path', () => {
    const c = mk({ scope: 'chat', chatId: 'ch-1', chatName: 'My Chat', path: 'p' });
    expect(scopeTooltip(c)).toBe('chat: My Chat (ch-1)\np');
  });

  test('chat scope with id but no name marks it not-loaded', () => {
    const c = mk({ scope: 'chat', chatId: 'ch-1', path: 'p' });
    expect(scopeTooltip(c)).toBe('chat: ch-1 (not currently loaded)\np');
  });
});

describe('compareCollections', () => {
  const NAMES = new Map<string, string>([['s1', 'Zebra'], ['s2', 'Alpha']]);

  test('name: case-insensitive (apple sorts before Banana)', () => {
    expect(compareCollections(mk({ name: 'apple' }), mk({ name: 'Banana' }), 'name', NAMES)).toBeLessThan(0);
    expect(compareCollections(mk({ name: 'Banana' }), mk({ name: 'apple' }), 'name', NAMES)).toBeGreaterThan(0);
  });

  test('scope: lexical (character before script)', () => {
    expect(compareCollections(mk({ scope: 'character' }), mk({ scope: 'script' }), 'scope', NAMES)).toBeLessThan(0);
  });

  test('owner: sorts by the resolved script name, not the id', () => {
    // s2 → "Alpha", s1 → "Zebra": s2 should sort first despite the id order.
    expect(compareCollections(mk({ scriptId: 's2' }), mk({ scriptId: 's1' }), 'owner', NAMES)).toBeLessThan(0);
  });

  test('owner: falls back to the raw scriptId when unresolved', () => {
    // 'aaa' (unknown) vs resolved 'Zebra' — 'aaa' < 'Zebra' case-insensitively.
    expect(compareCollections(mk({ scriptId: 'aaa' }), mk({ scriptId: 's1' }), 'owner', NAMES)).toBeLessThan(0);
  });

  test('size: numeric difference', () => {
    expect(compareCollections(mk({ sizeBytes: 100 }), mk({ sizeBytes: 50 }), 'size', NAMES)).toBe(50);
  });

  test('updated: chronological by parsed date', () => {
    const newer = mk({ modifiedAt: '2026-02-01T00:00:00.000Z' });
    const older = mk({ modifiedAt: '2026-01-01T00:00:00.000Z' });
    expect(compareCollections(newer, older, 'updated', NAMES)).toBeGreaterThan(0);
  });
});

describe('filterAndSortCollections', () => {
  test('null collections pass through as null', () => {
    expect(filterAndSortCollections(null, view())).toBeNull();
  });

  test('no filter + no sort short-circuits to the SAME array reference', () => {
    const arr = [mk({ name: 'a' }), mk({ name: 'b' })];
    expect(filterAndSortCollections(arr, view())).toBe(arr);
  });

  test('scope filter keeps only the selected scopes', () => {
    const arr = [mk({ scope: 'script' }), mk({ scope: 'chat' }), mk({ scope: 'character' })];
    const out = filterAndSortCollections(arr, view({ scopeFilter: new Set<Scope>(['script']) }))!;
    expect(out).toHaveLength(1);
    expect(out[0]!.scope).toBe('script');
  });

  test('name filter is a case-insensitive substring match', () => {
    const arr = [mk({ name: 'Rolls' }), mk({ name: 'notes' }), mk({ name: 'scrollback' })];
    const out = filterAndSortCollections(arr, view({ searchQuery: 'OLL' }))!;
    expect(out.map((c) => c.name).sort()).toEqual(['Rolls', 'scrollback']);
  });

  test('sort by size respects direction', () => {
    const arr = [mk({ name: 'big', sizeBytes: 300 }), mk({ name: 'small', sizeBytes: 100 }), mk({ name: 'mid', sizeBytes: 200 })];
    const asc = filterAndSortCollections(arr, view({ sortBy: 'size', sortDir: 'asc' }))!;
    expect(asc.map((c) => c.name)).toEqual(['small', 'mid', 'big']);
    const desc = filterAndSortCollections(arr, view({ sortBy: 'size', sortDir: 'desc' }))!;
    expect(desc.map((c) => c.name)).toEqual(['big', 'mid', 'small']);
  });

  test('sorting does not mutate the input array', () => {
    const arr = [mk({ name: 'b', sizeBytes: 200 }), mk({ name: 'a', sizeBytes: 100 })];
    filterAndSortCollections(arr, view({ sortBy: 'size', sortDir: 'asc' }));
    expect(arr.map((c) => c.name)).toEqual(['b', 'a']); // original order preserved
  });

  test('combined scope + name + sort', () => {
    const arr = [
      mk({ name: 'alpha', scope: 'script', sizeBytes: 10 }),
      mk({ name: 'alfa', scope: 'chat', sizeBytes: 20 }),
      mk({ name: 'beta', scope: 'script', sizeBytes: 30 }),
      mk({ name: 'alpine', scope: 'script', sizeBytes: 5 }),
    ];
    const out = filterAndSortCollections(arr, view({
      scopeFilter: new Set<Scope>(['script']),
      searchQuery: 'al',
      sortBy: 'size',
      sortDir: 'asc',
    }))!;
    // 'alfa' filtered out (chat scope); 'beta' filtered out (no 'al'); remaining sorted by size.
    expect(out.map((c) => c.name)).toEqual(['alpine', 'alpha']);
  });
});

describe('nextScopeFilter', () => {
  test('adds an absent scope', () => {
    const out = nextScopeFilter(new Set<Scope>(['script']), 'chat');
    expect([...out].sort()).toEqual(['chat', 'script']);
  });

  test('removes a present scope', () => {
    const out = nextScopeFilter(new Set<Scope>(['script', 'chat']), 'chat');
    expect([...out]).toEqual(['script']);
  });

  test('removing the last scope re-enables ALL scopes (never-empty guard)', () => {
    const out = nextScopeFilter(new Set<Scope>(['script']), 'script');
    expect(out.size).toBe(ALL_SCOPES.length);
    for (const s of ALL_SCOPES) expect(out.has(s)).toBe(true);
  });

  test('does not mutate the previous set', () => {
    const prev = new Set<Scope>(['script', 'chat']);
    nextScopeFilter(prev, 'chat');
    expect([...prev].sort()).toEqual(['chat', 'script']);
  });
});

describe('nextSort', () => {
  test('a different column starts at ascending', () => {
    expect(nextSort(null, 'asc', 'name')).toEqual({ sortBy: 'name', sortDir: 'asc' });
    expect(nextSort('size', 'desc', 'name')).toEqual({ sortBy: 'name', sortDir: 'asc' });
  });

  test('same column, asc → desc', () => {
    expect(nextSort('name', 'asc', 'name')).toEqual({ sortBy: 'name', sortDir: 'desc' });
  });

  test('same column, desc → cleared (sortBy null)', () => {
    expect(nextSort('name', 'desc', 'name').sortBy).toBeNull();
  });
});

describe('scopeIdentityLine', () => {
  test('script scope has no identity line', () => {
    expect(scopeIdentityLine(mk({ scope: 'script' }))).toBeNull();
  });

  test('character with both name + id resolves a Character line', () => {
    expect(scopeIdentityLine(mk({ scope: 'character', characterName: 'Alice', characterId: 'c-1' })))
      .toEqual({ label: 'Character', name: 'Alice', id: 'c-1' });
  });

  test('character missing either name or id → null', () => {
    expect(scopeIdentityLine(mk({ scope: 'character', characterId: 'c-1' }))).toBeNull();
    expect(scopeIdentityLine(mk({ scope: 'character', characterName: 'Alice' }))).toBeNull();
  });

  test('chat with both name + id resolves a Chat line', () => {
    expect(scopeIdentityLine(mk({ scope: 'chat', chatName: 'My Chat', chatId: 'ch-1' })))
      .toEqual({ label: 'Chat', name: 'My Chat', id: 'ch-1' });
  });

  test('chat missing either name or id → null', () => {
    expect(scopeIdentityLine(mk({ scope: 'chat', chatId: 'ch-1' }))).toBeNull();
  });
});
