import { describe, test, expect } from 'bun:test';
import { buildJSONAPI } from '../../../src/engine/api/json.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- The API uses
// `as never` return types for type flexibility; tests verify runtime behavior.
const json = buildJSONAPI() as any;

// ─── parse ───────────────────────────────────────────────────────────────────

describe('parse', () => {
  test('parses a valid JSON object string', () => {
    expect(json.parse('{"a":1}')).toEqual({ a: 1 });
  });

  test('parses a valid JSON array', () => {
    expect(json.parse('[1,2,3]')).toEqual([1, 2, 3]);
  });

  test('throws SyntaxError on invalid JSON', () => {
    expect(() => json.parse('{bad}')).toThrow(SyntaxError);
  });

  test('parses JSON primitives', () => {
    expect(json.parse('42')).toBe(42);
    expect(json.parse('"hello"')).toBe('hello');
    expect(json.parse('true')).toBe(true);
    expect(json.parse('null')).toBeNull();
  });
});

// ─── stringify ────────────────────────────────────────────────────────────────

describe('stringify', () => {
  test('stringifies an object to compact JSON by default', () => {
    expect(json.stringify({ a: 1, b: 2 })).toBe('{"a":1,"b":2}');
  });

  test('stringifies with 2-space indentation when pretty=true', () => {
    expect(json.stringify({ a: 1 }, true)).toBe('{\n  "a": 1\n}');
  });

  test('stringifies primitives', () => {
    expect(json.stringify(42)).toBe('42');
    expect(json.stringify('hi')).toBe('"hi"');
    expect(json.stringify(null)).toBe('null');
  });

  test('omits undefined values in objects', () => {
    expect(json.stringify({ a: 1, b: undefined })).toBe('{"a":1}');
  });
});

// ─── clone ───────────────────────────────────────────────────────────────────

describe('clone', () => {
  test('deep-clones a nested object (mutations do not affect original)', () => {
    const original = { a: { b: 1 } };
    const cloned = json.clone(original);
    cloned.a.b = 999;
    expect(original.a.b).toBe(1);
  });

  test('deep-clones arrays', () => {
    const original = [1, [2, 3]];
    const cloned = json.clone(original);
    (cloned[1] as number[])[0] = 99;
    expect((original[1] as number[])[0]).toBe(2);
  });
});

// ─── get ─────────────────────────────────────────────────────────────────────

describe('get', () => {
  const data = { a: { b: { c: 42 } }, x: 0, y: false, z: '' };

  test('retrieves a top-level property', () => {
    expect(json.get(data, 'a')).toEqual({ b: { c: 42 } });
  });

  test('retrieves a nested property by dotted path', () => {
    expect(json.get(data, 'a.b.c')).toBe(42);
  });

  test('returns defaultValue when an intermediate segment is missing', () => {
    expect(json.get(data, 'a.missing.c', 'fallback')).toBe('fallback');
  });

  test('returns defaultValue when traversing through null', () => {
    expect(json.get({ a: null }, 'a.b', 'fallback')).toBe('fallback');
  });

  test('returns undefined when no defaultValue and path missing', () => {
    expect(json.get(data, 'nonexistent')).toBeUndefined();
  });

  test('returns falsy non-nullish values (0, false, empty string) as-is', () => {
    expect(json.get(data, 'x')).toBe(0);
    expect(json.get(data, 'y')).toBe(false);
    expect(json.get(data, 'z')).toBe('');
  });
});

// ─── set ─────────────────────────────────────────────────────────────────────

describe('set', () => {
  test('sets a top-level property', () => {
    const data: Record<string, unknown> = { a: 1 };
    json.set(data, 'b', 2);
    expect(data).toEqual({ a: 1, b: 2 });
  });

  test('sets a deeply nested property, creating intermediates', () => {
    const data = {} as Record<string, unknown>;
    json.set(data, 'a.b.c', 42);
    expect(data).toEqual({ a: { b: { c: 42 } } });
  });

  test('overwrites an existing nested value', () => {
    const data = { a: { b: 1 } };
    json.set(data, 'a.b', 99);
    expect(data.a.b).toBe(99);
  });

  test('returns the same data reference (in-place mutation)', () => {
    const data = { a: 1 };
    const result = json.set(data, 'b', 2);
    expect(result).toBe(data);
  });
});

// ─── merge ───────────────────────────────────────────────────────────────────

describe('merge', () => {
  test('shallow-merges two objects', () => {
    expect(json.merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test('later objects overwrite keys from earlier ones', () => {
    expect(json.merge({ a: 1 }, { a: 99 })).toEqual({ a: 99 });
  });

  test('does not mutate any input object', () => {
    const a = { x: 1 };
    const b = { y: 2 };
    json.merge(a, b);
    expect(a).toEqual({ x: 1 });
    expect(b).toEqual({ y: 2 });
  });

  test('handles empty objects', () => {
    expect(json.merge({}, { a: 1 })).toEqual({ a: 1 });
    expect(json.merge({ a: 1 }, {})).toEqual({ a: 1 });
  });
});

// ─── isValid ─────────────────────────────────────────────────────────────────

describe('isValid', () => {
  test('returns true for a valid JSON object string', () => {
    expect(json.isValid('{"a":1}')).toBe(true);
  });

  test('returns false for invalid JSON', () => {
    expect(json.isValid('{bad}')).toBe(false);
  });

  test('returns true for JSON primitives', () => {
    expect(json.isValid('42')).toBe(true);
    expect(json.isValid('"hi"')).toBe(true);
    expect(json.isValid('true')).toBe(true);
    expect(json.isValid('null')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(json.isValid('')).toBe(false);
  });
});

// ─── filter ──────────────────────────────────────────────────────────────────

describe('filter', () => {
  test('returns elements matching the predicate', () => {
    expect(json.filter([1, 2, 3, 4], (n: number) => n > 2)).toEqual([3, 4]);
  });

  test('returns empty array when no elements match', () => {
    expect(json.filter([1, 2], (n: number) => n > 10)).toEqual([]);
  });

  test('returns all elements when all match', () => {
    expect(json.filter([1, 2, 3], () => true)).toEqual([1, 2, 3]);
  });
});

// ─── sort ────────────────────────────────────────────────────────────────────

describe('sort', () => {
  const items = [
    { name: 'c', val: 3 },
    { name: 'a', val: 1 },
    { name: 'b', val: 2 },
  ];

  test('sorts ascending by string key', () => {
    const sorted = json.sort(items, 'name');
    expect(sorted.map((i: any) => i.name)).toEqual(['a', 'b', 'c']);
  });

  test('sorts descending by numeric key', () => {
    const sorted = json.sort(items, 'val', 'desc');
    expect(sorted.map((i: any) => i.val)).toEqual([3, 2, 1]);
  });

  test('defaults to ascending when direction is omitted', () => {
    const sorted = json.sort(items, 'val');
    expect(sorted.map((i: any) => i.val)).toEqual([1, 2, 3]);
  });

  test('returns a new array (does not mutate original)', () => {
    const sorted = json.sort(items, 'val');
    expect(sorted).not.toBe(items);
    expect(items[0]!.name).toBe('c'); // original order unchanged
  });
});

// ─── uniq ────────────────────────────────────────────────────────────────────

describe('uniq', () => {
  test('removes duplicate primitives', () => {
    expect(json.uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test('preserves order of first occurrence', () => {
    expect(json.uniq([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });

  test('returns empty array for empty input', () => {
    expect(json.uniq([])).toEqual([]);
  });
});

// ─── flatten ─────────────────────────────────────────────────────────────────

describe('flatten', () => {
  test('flattens a singly nested array', () => {
    expect(json.flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test('flattens deeply nested arrays', () => {
    expect(json.flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test('returns empty array for empty input', () => {
    expect(json.flatten([])).toEqual([]);
  });
});
