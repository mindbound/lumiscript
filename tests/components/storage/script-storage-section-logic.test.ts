/**
 * Unit tests for `src/components/storage/script-storage-section-logic.ts` —
 * the budget / sort / filter logic extracted from `ScriptStorageSection`.
 * No DOM: data-in / data-out.
 */
import { describe, test, expect } from 'bun:test';
import {
  sizeBudget,
  compareEntries,
  filterAndSortEntries,
  nextSort,
  SIZE_WARN_THRESHOLD_BYTES,
  SIZE_DANGER_THRESHOLD_BYTES,
  type EntryViewState,
} from '../../../src/components/storage/script-storage-section-logic.js';
import type { ScriptStorageSummary } from '../../../src/engine/api/script-storage.js';

const KB = 1024;

function mk(o: Partial<ScriptStorageSummary> = {}): ScriptStorageSummary {
  return { scriptId: 's1', keyCount: 0, sizeBytes: 0, modifiedAtMs: 1000, ...o } as unknown as ScriptStorageSummary;
}

function view(o: Partial<EntryViewState> = {}): EntryViewState {
  return { searchQuery: '', sortBy: null, sortDir: 'asc', scriptNameById: new Map<string, string>(), ...o };
}

describe('sizeBudget (1 MB cap thresholds)', () => {
  test('below the warn threshold is normal', () => {
    expect(sizeBudget(0).tier).toBe('normal');
    expect(sizeBudget(SIZE_WARN_THRESHOLD_BYTES - 1).tier).toBe('normal');
  });
  test('warn band', () => {
    expect(sizeBudget(SIZE_WARN_THRESHOLD_BYTES).tier).toBe('warn');
    expect(sizeBudget(SIZE_DANGER_THRESHOLD_BYTES - 1).tier).toBe('warn');
  });
  test('danger band', () => {
    expect(sizeBudget(SIZE_DANGER_THRESHOLD_BYTES).tier).toBe('danger');
    expect(sizeBudget(1024 * KB).tier).toBe('danger');
  });
});

describe('compareEntries', () => {
  const NAMES = new Map<string, string>([['s1', 'Zebra'], ['s2', 'Alpha']]);

  test('script: sorts by resolved name, falls back to id', () => {
    // s2 → "Alpha" sorts before s1 → "Zebra"
    expect(compareEntries(mk({ scriptId: 's2' }), mk({ scriptId: 's1' }), 'script', NAMES)).toBeLessThan(0);
    // unknown id 'aaa' sorts before resolved 'Zebra'
    expect(compareEntries(mk({ scriptId: 'aaa' }), mk({ scriptId: 's1' }), 'script', NAMES)).toBeLessThan(0);
  });

  test('keys / size / modified are numeric diffs', () => {
    expect(compareEntries(mk({ keyCount: 9 }), mk({ keyCount: 4 }), 'keys', NAMES)).toBe(5);
    expect(compareEntries(mk({ sizeBytes: 300 }), mk({ sizeBytes: 100 }), 'size', NAMES)).toBe(200);
    expect(compareEntries(mk({ modifiedAtMs: 5000 }), mk({ modifiedAtMs: 1000 }), 'modified', NAMES)).toBe(4000);
  });
});

describe('filterAndSortEntries', () => {
  const NAMES = new Map<string, string>([['s1', 'Dice Roller'], ['s2', 'Notes']]);

  test('null entries pass through as null', () => {
    expect(filterAndSortEntries(null, view())).toBeNull();
  });

  test('no filter + no sort short-circuits to the SAME array reference', () => {
    const arr = [mk(), mk({ scriptId: 's2' })];
    expect(filterAndSortEntries(arr, view({ scriptNameById: NAMES }))).toBe(arr);
  });

  test('filter matches the resolved owner name (case-insensitive)', () => {
    const arr = [mk({ scriptId: 's1' }), mk({ scriptId: 's2' })];
    const out = filterAndSortEntries(arr, view({ searchQuery: 'dice', scriptNameById: NAMES }))!;
    expect(out).toHaveLength(1);
    expect(out[0]!.scriptId).toBe('s1');
  });

  test('filter falls back to the raw scriptId when unresolved', () => {
    const arr = [mk({ scriptId: 'abc-123' }), mk({ scriptId: 's2' })];
    const out = filterAndSortEntries(arr, view({ searchQuery: 'abc', scriptNameById: NAMES }))!;
    expect(out).toHaveLength(1);
    expect(out[0]!.scriptId).toBe('abc-123');
  });

  test('sort by size respects direction and does not mutate input', () => {
    const arr = [mk({ scriptId: 'b', sizeBytes: 200 }), mk({ scriptId: 'a', sizeBytes: 100 })];
    const asc = filterAndSortEntries(arr, view({ sortBy: 'size', sortDir: 'asc' }))!;
    expect(asc.map((e) => e.scriptId)).toEqual(['a', 'b']);
    expect(arr.map((e) => e.scriptId)).toEqual(['b', 'a']); // original untouched
  });
});

describe('nextSort', () => {
  test('different column → asc; same asc → desc; same desc → cleared', () => {
    expect(nextSort(null, 'asc', 'keys')).toEqual({ sortBy: 'keys', sortDir: 'asc' });
    expect(nextSort('keys', 'asc', 'keys')).toEqual({ sortBy: 'keys', sortDir: 'desc' });
    expect(nextSort('keys', 'desc', 'keys').sortBy).toBeNull();
  });
});
