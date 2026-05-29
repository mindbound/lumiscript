/**
 * Lisa memory consolidation (P4) — the parse/validate safety gate.
 *
 * `parseNotesArray` is the validate-or-leave-unchanged backstop: a bad LLM
 * result must yield `null` (→ memory untouched), and a good one must extract +
 * validate cleanly even when wrapped in fences or prose. The LLM call itself
 * isn't unit-tested (needs a generate mock); this covers the logic that decides
 * whether a pass is allowed to overwrite memory.
 */

import { describe, test, expect } from 'bun:test';
import { parseNotesArray, extractContent } from '../../src/assistant/consolidate-memory.js';

describe('parseNotesArray', () => {
  test('plain JSON array', () => {
    const r = parseNotesArray('[{"hook":"a"},{"hook":"b","detail":"d","category":"c"}]');
    expect(r).not.toBeNull();
    expect(r!).toHaveLength(2);
    expect(r![1]).toEqual({ hook: 'b', detail: 'd', category: 'c' });
  });

  test('extracts from a ```json fence', () => {
    const r = parseNotesArray('```json\n[{"hook":"x"}]\n```');
    expect(r).toEqual([{ hook: 'x' }]);
  });

  test('extracts from prose-wrapped output', () => {
    const r = parseNotesArray('Sure! Here are the consolidated notes:\n[{"hook":"y"}]\nLet me know.');
    expect(r).toEqual([{ hook: 'y' }]);
  });

  test('drops items without a usable hook', () => {
    const r = parseNotesArray('[{"hook":"keep"},{"detail":"no hook"},{"hook":"  "},{"hook":123}]');
    expect(r).toEqual([{ hook: 'keep' }]);
  });

  test('drops non-string detail/category', () => {
    const r = parseNotesArray('[{"hook":"h","detail":5,"category":["x"]}]');
    expect(r).toEqual([{ hook: 'h' }]);
  });

  test('invalid JSON → null (memory left unchanged)', () => {
    expect(parseNotesArray('[{"hook": oops}]')).toBeNull();
  });

  test('no array present → null', () => {
    expect(parseNotesArray('I could not do that.')).toBeNull();
  });

  test('non-array JSON → null', () => {
    expect(parseNotesArray('{"hook":"not an array"}')).toBeNull();
  });

  test('empty array → null (nothing usable)', () => {
    expect(parseNotesArray('[]')).toBeNull();
  });

  test('array of all-invalid items → null', () => {
    expect(parseNotesArray('[{"detail":"no hook"},{"x":1}]')).toBeNull();
  });
});

describe('extractContent', () => {
  test('string passthrough', () => {
    expect(extractContent('hi')).toBe('hi');
  });
  test('{ content } object', () => {
    expect(extractContent({ content: 'body' })).toBe('body');
  });
  test('unrecognised shape → empty string', () => {
    expect(extractContent({ foo: 'bar' })).toBe('');
    expect(extractContent(null)).toBe('');
    expect(extractContent(42)).toBe('');
  });
});
