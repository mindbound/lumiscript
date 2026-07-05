/**
 * Unit tests for `src/engine/record-filter.ts` — the shared filter logic used by
 * BOTH the backend Storage-panel path and the InspectModal client-side fast
 * path. These pin the matcher semantics + the jsonquery mode precedence so the
 * two callers can never silently diverge.
 */
import { describe, test, expect } from 'bun:test';
import { matchesShallow, matchesDeep, filterRecords } from '../../src/engine/record-filter.js';
import type { DbRecord } from '../../src/types/script.js';

const rec = (over: Record<string, unknown>): DbRecord =>
  ({ id: 'x', createdAt: 1, updatedAt: 1, ...over }) as DbRecord;

describe('matchesShallow', () => {
  test('matches a top-level string field, case-insensitive', () => {
    expect(matchesShallow(rec({ name: 'Alice' }), 'ali')).toBe(true);
  });
  test('does NOT descend into nested objects/arrays', () => {
    expect(matchesShallow(rec({ meta: { name: 'Alice' } }), 'ali')).toBe(false);
  });
  test('ignores non-string fields', () => {
    expect(matchesShallow(rec({ hp: 50, alive: true }), '50')).toBe(false);
  });
});

describe('matchesDeep', () => {
  test('matches a string nested in objects', () => {
    expect(matchesDeep(rec({ meta: { tag: 'Boss' } }), 'boss')).toBe(true);
  });
  test('matches a string inside an array', () => {
    expect(matchesDeep(rec({ tags: ['a', 'Boss', 'c'] }), 'boss')).toBe(true);
  });
  test('numbers / booleans are not coerced', () => {
    expect(matchesDeep(rec({ hp: 50 }), '50')).toBe(false);
  });
});

describe('filterRecords', () => {
  const records: DbRecord[] = [
    rec({ id: '1', name: 'Alice', meta: { role: 'mage' }, hp: 30 }),
    rec({ id: '2', name: 'Bob',   meta: { role: 'rogue' }, hp: 50 }),
    rec({ id: '3', name: 'Cara',  meta: { role: 'mage' }, hp: 70 }),
  ];

  test('no filter → all records', () => {
    expect(filterRecords(records, {}).records).toHaveLength(3);
    expect(filterRecords(records, { textFilter: '   ' }).records).toHaveLength(3);
  });

  test('shallow text matches top-level only', () => {
    expect(filterRecords(records, { textFilter: 'alice' }).records.map((r) => r.id)).toEqual(['1']);
    // "mage" only appears in nested meta.role → shallow finds nothing.
    expect(filterRecords(records, { textFilter: 'mage' }).records).toHaveLength(0);
  });

  test('deep text descends into nested fields', () => {
    expect(filterRecords(records, { textFilter: 'mage', deepFilter: true }).records.map((r) => r.id)).toEqual(['1', '3']);
  });

  test('jsonquery filters with typed operators', () => {
    const res = filterRecords(records, { jsonqueryFilter: 'filter(.hp > 40)' });
    expect(res.error).toBeNull();
    expect(res.records.map((r) => r.id)).toEqual(['2', '3']);
  });

  test('jsonquery precedence: query wins over text fields', () => {
    const res = filterRecords(records, { textFilter: 'alice', jsonqueryFilter: 'filter(.hp > 40)' });
    expect(res.records.map((r) => r.id)).toEqual(['2', '3']);
  });

  test('invalid jsonquery → error, no records', () => {
    const res = filterRecords(records, { jsonqueryFilter: 'filter(.hp >' });
    expect(res.records).toHaveLength(0);
    expect(res.error).toContain('jsonquery error');
  });

  test('non-array jsonquery result → error', () => {
    const res = filterRecords(records, { jsonqueryFilter: 'size()' });
    expect(res.records).toHaveLength(0);
    expect(res.error).toContain('must return an array');
  });
});
