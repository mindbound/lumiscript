/**
 * Unit tests for `src/components/storage/record-logic.ts` — the pure
 * record/inspect logic shared by `InspectModal` + `EditRecordModal`.
 * No DOM: all functions are data-in / data-out.
 */
import { describe, test, expect } from 'bun:test';
import {
  prettyPrintUserData,
  parseRecordDraft,
  buildInspectRequest,
  formatTopValue,
  formatNum,
} from '../../../src/components/storage/record-logic.js';
import type { DbRecord } from '../../../src/types/script.js';

function rec(overrides: Partial<DbRecord> = {}): DbRecord {
  return { id: 'r1', createdAt: 1000, updatedAt: 2000, ...overrides };
}

/** Structural view of the `inspect_collection` request for assertions. */
interface InspectReq {
  type: string;
  path: string;
  textFilter?: string;
  deepFilter?: boolean;
  jsonqueryFilter?: string;
  limit: number;
  offset: number;
}
const asReq = (r: unknown) => r as InspectReq;

describe('prettyPrintUserData', () => {
  test('strips the reserved fields and pretty-prints user data', () => {
    const out = prettyPrintUserData(rec({ hp: 50, name: 'Goblin' }));
    const parsed = JSON.parse(out);
    expect(parsed).toEqual({ hp: 50, name: 'Goblin' });
    expect(parsed.id).toBeUndefined();
    expect(parsed.createdAt).toBeUndefined();
    expect(parsed.updatedAt).toBeUndefined();
  });

  test('a record with only reserved fields prints as an empty object', () => {
    expect(prettyPrintUserData(rec())).toBe('{}');
  });

  test('preserves nested structures', () => {
    const out = prettyPrintUserData(rec({ stats: { str: 10, items: ['a', 'b'] } }));
    expect(JSON.parse(out)).toEqual({ stats: { str: 10, items: ['a', 'b'] } });
  });

  test('uses 2-space indentation', () => {
    expect(prettyPrintUserData(rec({ a: 1 }))).toBe('{\n  "a": 1\n}');
  });
});

describe('parseRecordDraft', () => {
  test('accepts a plain JSON object', () => {
    const r = parseRecordDraft('{"hp": 10, "tag": "x"}');
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.patch).toEqual({ hp: 10, tag: 'x' });
  });

  test('accepts an empty object', () => {
    const r = parseRecordDraft('{}');
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.patch).toEqual({});
  });

  test('rejects malformed JSON with the parser message', () => {
    const r = parseRecordDraft('{ not json ');
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toStartWith('JSON parse error:');
  });

  test('rejects an array', () => {
    const r = parseRecordDraft('[1, 2, 3]');
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain('must be a JSON object');
  });

  test('rejects null', () => {
    const r = parseRecordDraft('null');
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain('must be a JSON object');
  });

  test('rejects a bare primitive', () => {
    expect(parseRecordDraft('42').ok).toBe(false);
    expect(parseRecordDraft('"hello"').ok).toBe(false);
    expect(parseRecordDraft('true').ok).toBe(false);
  });
});

describe('buildInspectRequest', () => {
  test('shallow mode carries textFilter, omits deepFilter, computes offset', () => {
    const req = asReq(buildInspectRequest('p/c.json', 'shallow', 'gob', 2, 50));
    expect(req.type).toBe('inspect_collection');
    expect(req.path).toBe('p/c.json');
    expect(req.textFilter).toBe('gob');
    expect(req.deepFilter).toBeUndefined();
    expect(req.jsonqueryFilter).toBeUndefined();
    expect(req.limit).toBe(50);
    expect(req.offset).toBe(100);
  });

  test('deep mode sets deepFilter true', () => {
    const req = asReq(buildInspectRequest('p', 'deep', 'needle', 0, 25));
    expect(req.textFilter).toBe('needle');
    expect(req.deepFilter).toBe(true);
    expect(req.offset).toBe(0);
  });

  test('jsonquery mode carries jsonqueryFilter and omits text/deep', () => {
    const req = asReq(buildInspectRequest('p', 'jsonquery', 'filter(.hp > 50)', 1, 50));
    expect(req.jsonqueryFilter).toBe('filter(.hp > 50)');
    expect(req.textFilter).toBeUndefined();
    expect(req.deepFilter).toBeUndefined();
    expect(req.offset).toBe(50);
  });

  test('empty / whitespace filter collapses to undefined (no-filter path)', () => {
    expect(asReq(buildInspectRequest('p', 'shallow', '', 0, 50)).textFilter).toBeUndefined();
    expect(asReq(buildInspectRequest('p', 'shallow', '   ', 0, 50)).textFilter).toBeUndefined();
    expect(asReq(buildInspectRequest('p', 'jsonquery', '   ', 0, 50)).jsonqueryFilter).toBeUndefined();
  });

  test('trims surrounding whitespace from the needle', () => {
    expect(asReq(buildInspectRequest('p', 'shallow', '  gob  ', 0, 50)).textFilter).toBe('gob');
  });
});

describe('formatTopValue', () => {
  test('quotes strings', () => {
    expect(formatTopValue('hello')).toBe('"hello"');
  });

  test('truncates strings longer than 32 chars to 30 + ellipsis', () => {
    const long = 'x'.repeat(40);
    expect(formatTopValue(long)).toBe(`"${'x'.repeat(30)}…"`);
  });

  test('does not truncate a 32-char string', () => {
    const s = 'x'.repeat(32);
    expect(formatTopValue(s)).toBe(`"${s}"`);
  });

  test('truncates a 33-char string', () => {
    expect(formatTopValue('x'.repeat(33))).toBe(`"${'x'.repeat(30)}…"`);
  });

  test('null renders as the literal null', () => {
    expect(formatTopValue(null)).toBe('null');
  });

  test('numbers and booleans render via String()', () => {
    expect(formatTopValue(42)).toBe('42');
    expect(formatTopValue(true)).toBe('true');
  });
});

describe('formatNum', () => {
  test('integers render without decimals', () => {
    expect(formatNum(12)).toBe('12');
    expect(formatNum(0)).toBe('0');
    expect(formatNum(-5)).toBe('-5');
  });

  test('fractional values render to 2 decimals', () => {
    expect(formatNum(12.0000000001)).toBe('12.00');
    expect(formatNum(3.14159)).toBe('3.14');
  });

  test('non-finite values render as an em dash', () => {
    expect(formatNum(NaN)).toBe('—');
    expect(formatNum(Infinity)).toBe('—');
    expect(formatNum(-Infinity)).toBe('—');
  });
});
