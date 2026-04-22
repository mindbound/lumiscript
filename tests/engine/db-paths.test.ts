import { describe, test, expect } from 'bun:test';
import {
  DbScopeError,
  DbNameError,
  assertValidName,
  resolvePath,
  resolveListPrefix,
  extractCollectionNames,
  type DbScopeContext,
} from '../../src/engine/db-paths.js';

// ─── Helper ──────────────────────────────────────────────────────────────────

function ctx(overrides: Partial<DbScopeContext> = {}): DbScopeContext {
  return {
    scriptId: 'script-1',
    chatId: 'chat-1',
    characterId: 'character-1',
    ...overrides,
  };
}

// ─── assertValidName ─────────────────────────────────────────────────────────

describe('assertValidName', () => {
  test('accepts simple alphanumeric names', () => {
    expect(() => assertValidName('rolls')).not.toThrow();
    expect(() => assertValidName('diceRolls2')).not.toThrow();
  });

  test('accepts underscore, dash, and dot within the name', () => {
    expect(() => assertValidName('dice_rolls')).not.toThrow();
    expect(() => assertValidName('dice-rolls')).not.toThrow();
    expect(() => assertValidName('v1.0.snapshot')).not.toThrow();
  });

  test('rejects non-string input', () => {
    // @ts-expect-error — intentional type violation
    expect(() => assertValidName(42)).toThrow(DbNameError);
    // @ts-expect-error — intentional type violation
    expect(() => assertValidName(null)).toThrow(DbNameError);
    // @ts-expect-error — intentional type violation
    expect(() => assertValidName(undefined)).toThrow(DbNameError);
  });

  test('rejects empty string', () => {
    expect(() => assertValidName('')).toThrow(DbNameError);
  });

  test('rejects names longer than 64 chars', () => {
    expect(() => assertValidName('a'.repeat(65))).toThrow(DbNameError);
  });

  test('accepts names exactly 64 chars', () => {
    expect(() => assertValidName('a'.repeat(64))).not.toThrow();
  });

  test('rejects path separators', () => {
    expect(() => assertValidName('foo/bar')).toThrow(DbNameError);
    expect(() => assertValidName('foo\\bar')).toThrow(DbNameError);
  });

  test('rejects path-traversal sequences', () => {
    expect(() => assertValidName('..foo')).toThrow(DbNameError);
    expect(() => assertValidName('foo..bar')).toThrow(DbNameError);
  });

  test('rejects leading dot (dotfile-style)', () => {
    expect(() => assertValidName('.hidden')).toThrow(DbNameError);
  });

  test('rejects names starting with underscore or dash', () => {
    // First char must be alphanumeric.
    expect(() => assertValidName('_foo')).toThrow(DbNameError);
    expect(() => assertValidName('-foo')).toThrow(DbNameError);
  });
});

// ─── resolvePath ─────────────────────────────────────────────────────────────

describe('resolvePath', () => {
  test('script scope produces db/scripts/{scriptId}/{name}.json', () => {
    expect(resolvePath('script', ctx(), 'rolls'))
      .toBe('db/scripts/script-1/rolls.json');
  });

  test('character scope produces db/characters/{characterId}/{scriptId}/{name}.json', () => {
    expect(resolvePath('character', ctx(), 'rolls'))
      .toBe('db/characters/character-1/script-1/rolls.json');
  });

  test('chat scope produces db/chats/{chatId}/{scriptId}/{name}.json', () => {
    expect(resolvePath('chat', ctx(), 'rolls'))
      .toBe('db/chats/chat-1/script-1/rolls.json');
  });

  test('character scope throws DbScopeError when characterId missing', () => {
    expect(() => resolvePath('character', ctx({ characterId: null }), 'rolls'))
      .toThrow(DbScopeError);
  });

  test('chat scope throws DbScopeError when chatId missing', () => {
    expect(() => resolvePath('chat', ctx({ chatId: null }), 'rolls'))
      .toThrow(DbScopeError);
  });

  test('script scope never throws scope-error (scriptId always present)', () => {
    expect(() => resolvePath('script', ctx(), 'rolls')).not.toThrow();
  });

  test('delegates to assertValidName — bad name throws DbNameError', () => {
    expect(() => resolvePath('script', ctx(), '../evil')).toThrow(DbNameError);
  });
});

// ─── resolveListPrefix ───────────────────────────────────────────────────────

describe('resolveListPrefix', () => {
  test('script scope produces db/scripts/{scriptId}/', () => {
    expect(resolveListPrefix('script', ctx())).toBe('db/scripts/script-1/');
  });

  test('character scope produces db/characters/{characterId}/{scriptId}/', () => {
    expect(resolveListPrefix('character', ctx()))
      .toBe('db/characters/character-1/script-1/');
  });

  test('chat scope produces db/chats/{chatId}/{scriptId}/', () => {
    expect(resolveListPrefix('chat', ctx()))
      .toBe('db/chats/chat-1/script-1/');
  });

  test('throws when scope requires context the ctx lacks', () => {
    expect(() => resolveListPrefix('character', ctx({ characterId: null })))
      .toThrow(DbScopeError);
    expect(() => resolveListPrefix('chat', ctx({ chatId: null })))
      .toThrow(DbScopeError);
  });
});

// ─── extractCollectionNames ──────────────────────────────────────────────────

describe('extractCollectionNames', () => {
  const prefix = 'db/scripts/script-1/';

  test('strips prefix and .json from full paths', () => {
    expect(extractCollectionNames(prefix, [
      'db/scripts/script-1/rolls.json',
      'db/scripts/script-1/counters.json',
    ])).toEqual(['rolls', 'counters']);
  });

  test('handles paths already relative to the prefix', () => {
    expect(extractCollectionNames(prefix, ['rolls.json', 'counters.json']))
      .toEqual(['rolls', 'counters']);
  });

  test('ignores entries without a .json suffix', () => {
    expect(extractCollectionNames(prefix, [
      'rolls.json',
      'notes.txt',
      'README',
    ])).toEqual(['rolls']);
  });

  test('ignores nested paths (collections live directly under the prefix)', () => {
    expect(extractCollectionNames(prefix, [
      'rolls.json',
      'subdir/nested.json',
    ])).toEqual(['rolls']);
  });

  test('strips leading slashes from relative paths', () => {
    expect(extractCollectionNames(prefix, ['/rolls.json']))
      .toEqual(['rolls']);
  });

  test('returns empty array on empty input', () => {
    expect(extractCollectionNames(prefix, [])).toEqual([]);
  });

  test('ignores a bare ".json" entry (empty name)', () => {
    expect(extractCollectionNames(prefix, ['.json'])).toEqual([]);
  });
});
