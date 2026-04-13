import { describe, test, expect } from 'bun:test';
import {
  resolveBuiltin,
  isBuiltinName,
  registerBuiltin,
} from '../../src/engine/builtin-library-registry.js';
import type { BuiltinLibraryFactory } from '../../src/engine/builtin-library-registry.js';

// ─── isBuiltinName ──────────────────────────────────────────────────────────

describe('isBuiltinName', () => {
  test('returns true for ls: prefixed names', () => {
    expect(isBuiltinName('ls:components')).toBe(true);
    expect(isBuiltinName('ls:utils')).toBe(true);
  });

  test('returns false for user library names', () => {
    expect(isBuiltinName('my-lib')).toBe(false);
    expect(isBuiltinName('helpers')).toBe(false);
    expect(isBuiltinName('ls-components')).toBe(false); // dash, not colon
  });
});

// ─── resolveBuiltin ─────────────────────────────────────────────────────────

describe('resolveBuiltin', () => {
  test('resolves ls:components to a factory function', () => {
    const factory = resolveBuiltin('ls:components');
    expect(typeof factory).toBe('function');
  });

  test('returns undefined for unregistered built-in names', () => {
    expect(resolveBuiltin('ls:nonexistent')).toBeUndefined();
  });

  test('returns undefined for non-ls: names', () => {
    expect(resolveBuiltin('user-lib')).toBeUndefined();
  });
});

// ─── registerBuiltin ────────────────────────────────────────────────────────

describe('registerBuiltin', () => {
  test('registers a factory that can be resolved', () => {
    const factory: BuiltinLibraryFactory = () => ({ test: true });
    registerBuiltin('ls:test-lib', factory);

    const resolved = resolveBuiltin('ls:test-lib');
    expect(resolved).toBe(factory);
  });
});
