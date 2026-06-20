/**
 * Unit tests for `src/components/assistant/code-diff.ts` — the line-level diff
 * behind Lisa's "Apply to script" preview. The point of the preview is to make
 * the overwrite reviewable (and to surface a truncated tail as deleted lines),
 * so these pin the add/del accounting + the context collapsing.
 */
import { describe, test, expect } from 'bun:test';
import { computeCodeDiff, type DiffRow } from '../../../src/components/assistant/code-diff.js';

const types = (rows: DiffRow[]): string => rows.map((r) => r.type[0]).join('');

describe('computeCodeDiff', () => {
  test('identical input → no changes', () => {
    const d = computeCodeDiff('a\nb\nc', 'a\nb\nc');
    expect(d.identical).toBe(true);
    expect(d.added).toBe(0);
    expect(d.removed).toBe(0);
    expect(d.rows).toHaveLength(0);
  });

  test('pure addition → added lines, nothing removed', () => {
    const d = computeCodeDiff('a\nb', 'a\nb\nc\nd');
    expect(d.identical).toBe(false);
    expect(d.added).toBe(2);
    expect(d.removed).toBe(0);
    expect(d.rows.some((r) => r.type === 'add' && r.text === 'c')).toBe(true);
  });

  test('pure deletion → removed lines, nothing added', () => {
    const d = computeCodeDiff('a\nb\nc\nd', 'a\nb');
    expect(d.added).toBe(0);
    expect(d.removed).toBe(2);
    expect(d.rows.some((r) => r.type === 'del' && r.text === 'c')).toBe(true);
  });

  test('a changed line is one del + one add (not a silent swap)', () => {
    const d = computeCodeDiff('x = 1\ny = 2', 'x = 1\ny = 3');
    expect(d.added).toBe(1);
    expect(d.removed).toBe(1);
    expect(d.rows).toContainEqual({ type: 'del', text: 'y = 2' });
    expect(d.rows).toContainEqual({ type: 'add', text: 'y = 3' });
    expect(d.rows).toContainEqual({ type: 'ctx', text: 'x = 1' });
  });

  test('truncated tail shows as DELETED lines (the data-loss-visible case)', () => {
    // Lisa only saw the head and re-emitted it without the tail → the tail must
    // surface as deletions so the user can SEE the loss before applying.
    const current = Array.from({ length: 40 }, (_, i) => `line ${i}`).join('\n');
    const lisa = Array.from({ length: 20 }, (_, i) => `line ${i}`).join('\n');
    const d = computeCodeDiff(current, lisa);
    expect(d.added).toBe(0);
    expect(d.removed).toBe(20); // lines 20..39 dropped
    expect(d.rows.some((r) => r.type === 'del' && r.text === 'line 39')).toBe(true);
  });

  test('long unchanged runs collapse into a gap marker', () => {
    const same = Array.from({ length: 20 }, (_, i) => `s${i}`).join('\n');
    const d = computeCodeDiff(`x\n${same}\ny`, `X\n${same}\nY`, { context: 3 });
    const gap = d.rows.find((r) => r.type === 'gap');
    expect(gap).toBeDefined();
    expect(gap!.count).toBe(20 - 3 - 3); // 14 hidden between the two 3-line windows
    // changes are preserved around the gap
    expect(d.rows).toContainEqual({ type: 'del', text: 'x' });
    expect(d.rows).toContainEqual({ type: 'add', text: 'Y' });
  });

  test('short unchanged runs are NOT collapsed', () => {
    const d = computeCodeDiff('a\nb\nc\nold', 'a\nb\nc\nnew', { context: 3 });
    expect(d.rows.some((r) => r.type === 'gap')).toBe(false);
    expect(types(d.rows)).toContain('d'); // del
    expect(types(d.rows)).toContain('a'); // add
  });

  test('maxRows caps the rendered diff', () => {
    const before = Array.from({ length: 5000 }, (_, i) => `a${i}`).join('\n');
    const after = Array.from({ length: 5000 }, (_, i) => `b${i}`).join('\n');
    const d = computeCodeDiff(before, after, { maxRows: 500 });
    expect(d.truncatedRows).toBe(true);
    expect(d.rows.length).toBeLessThanOrEqual(500);
  });
});
