/**
 * Bundle-into-card modal pure helpers (#12, Phase 3b): over-cap + per-field
 * length warnings that mirror the import-side clamps. (The modal itself is
 * field-tested.)
 */
import { describe, test, expect } from 'bun:test';
import { overCapWarning, lengthWarnings, bindingWarning, EMBED_SCRIPT_CAP } from '../../src/components/cardscripts/bundle-helpers.js';
import type { Script } from '../../src/types/script.js';

function mk(over: Partial<Script> = {}): Script {
  return { id: 'x', name: 'N', code: '', enabled: false, allowDangerous: false, type: 'trigger', createdAt: 0, updatedAt: 0, ...over };
}

describe('overCapWarning', () => {
  test('null at or below the import cap', () => {
    expect(overCapWarning(0)).toBeNull();
    expect(overCapWarning(EMBED_SCRIPT_CAP)).toBeNull();
  });

  test('warns above the cap with the dropped count', () => {
    const w = overCapWarning(EMBED_SCRIPT_CAP + 3);
    expect(w).not.toBeNull();
    expect(w).toContain('3 more');
    expect(w).toContain(String(EMBED_SCRIPT_CAP));
  });
});

describe('lengthWarnings', () => {
  test('no warnings for in-bounds scripts', () => {
    expect(lengthWarnings([mk({ name: 'Dice', folder: 'RPG', metadata: { version: '1.0.0', author: 'me', description: 'ok' } })])).toEqual([]);
  });

  test('flags each field that exceeds an import-side clamp', () => {
    const w = lengthWarnings([mk({
      name: 'N'.repeat(201),
      folder: 'F'.repeat(201),
      metadata: { description: 'D'.repeat(1001), author: 'A'.repeat(121), version: 'V'.repeat(65) },
    })]);
    expect(w).toHaveLength(5);
    expect(w.some((x) => x.includes('name'))).toBe(true);
    expect(w.some((x) => x.includes('folder'))).toBe(true);
    expect(w.some((x) => x.includes('description'))).toBe(true);
    expect(w.some((x) => x.includes('author'))).toBe(true);
    expect(w.some((x) => x.includes('version'))).toBe(true);
  });
});

describe('bindingWarning', () => {
  test('null when no selected script has bindings', () => {
    expect(bindingWarning([mk(), mk({ bindings: [] })])).toBeNull();
  });

  test('warns (singular) for one bound script', () => {
    const w = bindingWarning([mk({ name: 'Dice', bindings: [{ type: 'character', displayName: 'Alice', characterId: 'c1' }] })]);
    expect(w).not.toBeNull();
    expect(w).toContain('This script is');
    expect(w).toContain('Dice');
    expect(w).toContain("won't");
  });

  test('warns (plural, with count) for multiple bound scripts', () => {
    const w = bindingWarning([
      mk({ name: 'A', bindings: [{ type: 'chat', displayName: 'X', chatId: 'h1' }] }),
      mk({ name: 'B', bindings: [{ type: 'character', displayName: 'Y', characterId: 'c2' }] }),
    ]);
    expect(w).toContain('2 selected scripts');
  });
});
