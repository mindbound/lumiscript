import { describe, test, expect, beforeEach } from 'bun:test';
import {
  setActiveCharacter,
  setActiveChat,
  setActiveContext,
  getActiveContext,
  getActiveCharacterId,
  getActiveCharacterName,
  getActiveChatId,
  isAnyBindingSatisfied,
  resetContext,
} from '../../src/engine/binding.js';
import type { ScriptBindingEntry } from '../../src/types/script.js';

// resetContext is also called by setup.ts preload, but explicit here for clarity
beforeEach(() => resetContext());

// ─── Setters / Getters ───────────────────────────────────────────────────────

describe('setActiveCharacter', () => {
  test('sets characterId and characterName', () => {
    setActiveCharacter('char-1', 'Alice');
    expect(getActiveCharacterId()).toBe('char-1');
    expect(getActiveCharacterName()).toBe('Alice');
  });

  test('setting both to null clears them', () => {
    setActiveCharacter('char-1', 'Alice');
    setActiveCharacter(null, null);
    expect(getActiveCharacterId()).toBeNull();
    expect(getActiveCharacterName()).toBeNull();
  });
});

describe('setActiveChat', () => {
  test('sets chatId', () => {
    setActiveChat('chat-1');
    expect(getActiveChatId()).toBe('chat-1');
  });

  test('setting to null clears it', () => {
    setActiveChat('chat-1');
    setActiveChat(null);
    expect(getActiveChatId()).toBeNull();
  });
});

describe('setActiveContext', () => {
  test('sets all three fields from a full context partial', () => {
    setActiveContext({ characterId: 'c1', characterName: 'Bob', chatId: 'ch1' });
    expect(getActiveCharacterId()).toBe('c1');
    expect(getActiveCharacterName()).toBe('Bob');
    expect(getActiveChatId()).toBe('ch1');
  });

  test('sets only characterId without overwriting chatId', () => {
    setActiveChat('ch1');
    setActiveContext({ characterId: 'c2' });
    expect(getActiveCharacterId()).toBe('c2');
    expect(getActiveChatId()).toBe('ch1');
  });

  test('sets only chatId without overwriting characterId', () => {
    setActiveCharacter('c1', 'Alice');
    setActiveContext({ chatId: 'ch2' });
    expect(getActiveChatId()).toBe('ch2');
    expect(getActiveCharacterId()).toBe('c1');
  });

  test('explicitly setting a field to null resets it', () => {
    setActiveCharacter('c1', 'Alice');
    setActiveContext({ characterId: null });
    expect(getActiveCharacterId()).toBeNull();
  });
});

describe('getActiveContext', () => {
  test('returns a snapshot (not internal ref)', () => {
    setActiveCharacter('c1', 'Alice');
    setActiveChat('ch1');
    const ctx = getActiveContext();
    // Mutating the returned object should NOT affect the internal state
    (ctx as any).characterId = 'mutated';
    expect(getActiveCharacterId()).toBe('c1');
  });

  test('all getters return null in freshly-reset state', () => {
    expect(getActiveCharacterId()).toBeNull();
    expect(getActiveCharacterName()).toBeNull();
    expect(getActiveChatId()).toBeNull();
  });
});

// ─── isAnyBindingSatisfied ───────────────────────────────────────────────────

describe('isAnyBindingSatisfied', () => {
  beforeEach(() => {
    setActiveCharacter('char-1', 'Alice');
    setActiveChat('chat-1');
  });

  test('returns true when bindings is undefined', () => {
    expect(isAnyBindingSatisfied(undefined)).toBe(true);
  });

  test('returns true when bindings is empty array', () => {
    expect(isAnyBindingSatisfied([])).toBe(true);
  });

  test('returns true when a character binding matches', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'character', characterId: 'char-1', displayName: 'Alice' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(true);
  });

  test('returns false when a character binding does not match', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'character', characterId: 'char-999', displayName: 'Nobody' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(false);
  });

  test('returns true when a chat binding matches', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'chat', chatId: 'chat-1', displayName: 'Test Chat' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(true);
  });

  test('returns false when a chat binding does not match', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'chat', chatId: 'chat-999', displayName: 'Other Chat' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(false);
  });

  test('returns true if ANY of multiple bindings matches (OR semantics)', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'character', characterId: 'char-999', displayName: 'Nobody' },
      { type: 'chat', chatId: 'chat-1', displayName: 'Test Chat' }, // this one matches
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(true);
  });

  test('returns false when none of multiple bindings match', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'character', characterId: 'char-999', displayName: 'Nobody' },
      { type: 'chat', chatId: 'chat-999', displayName: 'Other Chat' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(false);
  });

  test('returns false when a character binding has empty string characterId', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'character', characterId: '', displayName: 'Empty' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(false);
  });

  test('returns false when a chat binding has empty string chatId', () => {
    const bindings: ScriptBindingEntry[] = [
      { type: 'chat', chatId: '', displayName: 'Empty' },
    ];
    expect(isAnyBindingSatisfied(bindings)).toBe(false);
  });
});
