/**
 * Unit tests for `src/engine/api/tokens.ts` — a thin proxy over `spindle.tokens.*`
 * whose job is the snake_case→camelCase DTO remap and folding the active `userId`
 * into the options bag. The mock spindle has no `tokens` namespace, so each test
 * sets one inline on the (per-test-fresh) global mock.
 */
import { describe, test, expect, mock } from 'bun:test';
import { buildTokensAPI } from '../../../src/engine/api/tokens.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

const DTO = {
  total_tokens: 42,
  model: 'gpt-4o',
  modelSource: 'main' as const,
  tokenizer_id: 'o200k_base',
  tokenizer_name: 'o200k',
  approximate: false,
};

function withTokensMock() {
  const spindle = (globalThis as any).spindle;
  spindle.tokens = {
    countText:     mock(() => Promise.resolve(DTO)),
    countMessages: mock(() => Promise.resolve(DTO)),
    countChat:     mock(() => Promise.resolve({ ...DTO, approximate: true })),
  };
  return spindle;
}

describe('api.tokens — DTO remap + userId passthrough', () => {
  test('countText maps snake_case → camelCase and folds in userId', async () => {
    const spindle = withTokensMock();
    const api = buildTokensAPI(createTestDeps());
    const r = await api.countText('hello', { model: 'gpt-4o' });
    expect(r).toEqual({
      totalTokens: 42,
      model: 'gpt-4o',
      modelSource: 'main',
      tokenizerId: 'o200k_base',
      tokenizerName: 'o200k',
      approximate: false,
    });
    expect(spindle.tokens.countText.mock.calls[0]![0]).toBe('hello');
    expect(spindle.tokens.countText.mock.calls[0]![1]).toMatchObject({ model: 'gpt-4o', userId: 'test-user-id' });
  });

  test('countMessages passes the messages array through and remaps the result', async () => {
    const spindle = withTokensMock();
    const api = buildTokensAPI(createTestDeps());
    const msgs = [{ role: 'user' as const, content: 'hi' }];
    const r = await api.countMessages(msgs);
    expect(r.totalTokens).toBe(42);
    expect(r.tokenizerId).toBe('o200k_base');
    expect(spindle.tokens.countMessages.mock.calls[0]![0]).toBe(msgs);
  });

  test('countChat forwards the chatId and remaps (approximate=true here)', async () => {
    const spindle = withTokensMock();
    const api = buildTokensAPI(createTestDeps());
    const r = await api.countChat('chat-1');
    expect(r.approximate).toBe(true);
    expect(spindle.tokens.countChat.mock.calls[0]![0]).toBe('chat-1');
    expect(spindle.tokens.countChat.mock.calls[0]![1]).toMatchObject({ userId: 'test-user-id' });
  });
});
