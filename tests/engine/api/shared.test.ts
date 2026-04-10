import { describe, test, expect } from 'bun:test';
import {
  assertPerm,
  assertDangerous,
  requireChatId,
  shielded,
} from '../../../src/engine/api/shared.js';
import { createTestScript } from '../../_infra/mock-deps.js';

// ─── assertPerm ──────────────────────────────────────────────────────────────

describe('assertPerm', () => {
  test('does not throw when permission is granted', () => {
    expect(() => assertPerm('generation', () => true)).not.toThrow();
  });

  test('throws with PERMISSION_DENIED prefix when denied', () => {
    expect(() => assertPerm('generation', () => false)).toThrow('PERMISSION_DENIED:generation');
  });
});

// ─── assertDangerous ─────────────────────────────────────────────────────────

describe('assertDangerous', () => {
  test('does not throw when allowDangerous is true', () => {
    const script = createTestScript({ allowDangerous: true });
    expect(() => assertDangerous(script)).not.toThrow();
  });

  test('throws with script name when allowDangerous is false', () => {
    const script = createTestScript({ name: 'My Script', allowDangerous: false });
    expect(() => assertDangerous(script)).toThrow('My Script');
    expect(() => assertDangerous(script)).toThrow('Allow Dangerous');
  });
});

// ─── requireChatId ───────────────────────────────────────────────────────────

describe('requireChatId', () => {
  test('returns chatId when present', () => {
    expect(requireChatId({ chatId: 'chat-123' })).toBe('chat-123');
  });

  test('throws when chatId is null', () => {
    expect(() => requireChatId({ chatId: null })).toThrow('no active chat');
  });
});

// ─── shielded ────────────────────────────────────────────────────────────────

describe('shielded', () => {
  test('returns the original promise', () => {
    const p = Promise.resolve(42);
    expect(shielded(p)).toBe(p);
  });

  test('resolved promise still resolves normally', async () => {
    const result = await shielded(Promise.resolve('ok'));
    expect(result).toBe('ok');
  });

  test('rejected promise does not cause unhandled rejection', async () => {
    const p = Promise.reject(new Error('fail'));
    const s = shielded(p);
    // The shielded call prevents unhandled rejection.
    // Awaiting it should still reject.
    await expect(s).rejects.toThrow('fail');
  });
});
