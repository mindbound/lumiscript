/**
 * Unit tests for `src/components/manage/script-list-logic.ts` — the chunked
 * base64 encoder + folder-grouping transform extracted from `ScriptList`.
 * No DOM (btoa is a global).
 */
import { describe, test, expect } from 'bun:test';
import { bytesToBase64, groupByFolder } from '../../../src/components/manage/script-list-logic.js';
import type { Script } from '../../../src/types/script.js';

function script(id: string, folder?: string): Script {
  return { id, name: id, folder } as unknown as Script;
}

describe('bytesToBase64', () => {
  test('empty input → empty string', () => {
    expect(bytesToBase64(new Uint8Array([]))).toBe('');
  });

  test('matches btoa for small inputs', () => {
    expect(bytesToBase64(new Uint8Array([72, 73]))).toBe('SEk='); // "HI"
  });

  test('round-trips through atob', () => {
    const bytes = new Uint8Array([0, 1, 2, 250, 251, 255]);
    const decoded = atob(bytesToBase64(bytes));
    expect(decoded.length).toBe(bytes.length);
    for (let i = 0; i < bytes.length; i++) expect(decoded.charCodeAt(i)).toBe(bytes[i]!);
  });

  test('handles inputs larger than the 0x8000 chunk boundary', () => {
    const n = 0x8000 * 2 + 123; // spans three chunks
    const bytes = new Uint8Array(n);
    for (let i = 0; i < n; i++) bytes[i] = i % 256;
    const decoded = atob(bytesToBase64(bytes));
    expect(decoded.length).toBe(n);
    expect(decoded.charCodeAt(0)).toBe(0);
    expect(decoded.charCodeAt(n - 1)).toBe((n - 1) % 256);
  });
});

describe('groupByFolder', () => {
  test('empty input → empty map', () => {
    expect(groupByFolder([]).size).toBe(0);
  });

  test('unfiled scripts land in the "" group', () => {
    const out = groupByFolder([script('a'), script('b')]);
    expect([...out.keys()]).toEqual(['']);
    expect(out.get('')!.map((s) => s.id)).toEqual(['a', 'b']);
  });

  test('orders groups: "" first, then folders sorted; preserves in-folder order', () => {
    const out = groupByFolder([
      script('b1', 'Beta'),
      script('u1'),
      script('a1', 'Alpha'),
      script('b2', 'Beta'),
      script('u2'),
    ]);
    expect([...out.keys()]).toEqual(['', 'Alpha', 'Beta']);
    expect(out.get('')!.map((s) => s.id)).toEqual(['u1', 'u2']);
    expect(out.get('Alpha')!.map((s) => s.id)).toEqual(['a1']);
    expect(out.get('Beta')!.map((s) => s.id)).toEqual(['b1', 'b2']);
  });

  test('all-filed (no unfiled) → no "" group, folders sorted', () => {
    const out = groupByFolder([script('z', 'Zeta'), script('a', 'Alpha')]);
    expect([...out.keys()]).toEqual(['Alpha', 'Zeta']);
  });
});
