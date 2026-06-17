import { describe, test, expect } from 'bun:test';
import {
  windowHistory,
  estimateMessageTokens,
  capToolResult,
  type AssistantHistoryMessage,
} from '../../src/assistant/agent.js';

// The token-aware history window (#2). windowHistory trims the model-facing
// history to a TOKEN budget, cutting only at real user-turn boundaries (role
// 'user' with STRING content) so tool_use/tool_result pairs are never split —
// an orphaned tool_result is a hard provider error. estimateMessageTokens is
// the local (no-IPC) cost function it sums. These tests pin the cut invariant
// and the fail-safe, since this is the foundation the compaction trigger builds on.

type Msg = AssistantHistoryMessage;

const userText = (len: number): Msg => ({ role: 'user', content: 'u'.repeat(len) }) as Msg;
const asstText = (len: number): Msg => ({ role: 'assistant', content: 'a'.repeat(len) }) as Msg;
// Tool turns carry ARRAY content — crucially NOT a string user-boundary.
const toolUse = (): Msg =>
  ({ role: 'assistant', content: [{ type: 'tool_use', id: 't1', name: 'lookup', input: {} }] }) as Msg;
const toolResult = (): Msg =>
  ({ role: 'user', content: [{ type: 'tool_result', tool_use_id: 't1', content: 'res' }] }) as Msg;

describe('estimateMessageTokens', () => {
  test('counts string content as chars/4 + per-message framing', () => {
    // 400 chars → 100 + 8 framing.
    expect(estimateMessageTokens(userText(400))).toBe(108);
  });

  test('empty content is just the framing constant', () => {
    expect(estimateMessageTokens({ role: 'user', content: '' } as Msg)).toBe(8);
  });

  test('array (tool) content is measured via JSON serialization', () => {
    const m = toolResult();
    const expected = Math.ceil(JSON.stringify(m.content).length / 4) + 8;
    expect(estimateMessageTokens(m)).toBe(expected);
  });

  test('reasoning_content is added to the count', () => {
    const m = { role: 'assistant', content: 'a'.repeat(40), reasoning_content: 'r'.repeat(40) } as Msg;
    // (40 + 40) / 4 = 20, + 8 framing.
    expect(estimateMessageTokens(m)).toBe(28);
  });
});

describe('windowHistory', () => {
  test('returns the same array (identity) when the whole history fits', () => {
    const h = [userText(40), asstText(40), userText(40)];
    // ~18 tokens each → well under budget.
    expect(windowHistory(h, 1000)).toBe(h);
  });

  test('trims oldest turns to fit, cutting at a user boundary', () => {
    // tokens: [1008, 1008, 108, 108]; budget 300 fits only [m2, m3] (216).
    const m0 = userText(4000), m1 = asstText(4000), m2 = userText(400), m3 = asstText(400);
    const r = windowHistory([m0, m1, m2, m3], 300);
    expect(r).toEqual([m2, m3]);
    expect(r[0]).toBe(m2); // starts at the user turn, not mid-pair
  });

  test('never starts the window on an orphaned tool_result', () => {
    // [user, tool_use, tool_result, user]. A budget that fits the trailing
    // tool_result + user by tokens must STILL cut at the user turn, because the
    // tool_result is not a valid boundary (its tool_use would be excluded).
    const h = [userText(40), toolUse(), toolResult(), userText(40)];
    const r = windowHistory(h, 50);
    // Core invariant: the window's first turn is always a string-content user turn.
    expect(r[0]!.role).toBe('user');
    expect(typeof r[0]!.content).toBe('string');
  });

  test('keeps a user turn together with its trailing tool pair', () => {
    // tokens: [1008, 18, ~21, ~23]; budget 100 fits [user, tool_use, tool_result].
    const m0 = userText(4000), m1 = userText(40), m2 = toolUse(), m3 = toolResult();
    const r = windowHistory([m0, m1, m2, m3], 100);
    expect(r).toEqual([m1, m2, m3]);
    expect(r.length).toBe(3);
  });

  test('fail-safe: returns the newest user turn even when it alone overflows', () => {
    // Both turns are ~1008 tokens; budget 10 fits neither.
    const m0 = userText(4000), m1 = userText(4000);
    const r = windowHistory([m0, m1], 10);
    expect(r).toEqual([m1]); // minimal well-formed tail, never empty / never malformed
    expect(r[0]).toBe(m1);
  });
});

describe('capToolResult', () => {
  test('returns a short result unchanged', () => {
    const s = 'small tool result';
    expect(capToolResult(s)).toBe(s);
  });

  test('clips an oversized result and appends a truncation marker', () => {
    const s = 'x'.repeat(50_000);
    const out = capToolResult(s);
    expect(out.length).toBeLessThan(s.length);
    expect(out.startsWith('x'.repeat(40_000))).toBe(true);
    expect(out).toContain('truncated');
  });
});
