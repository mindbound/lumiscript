/**
 * Unit tests for `src/components/assistant/assistant-logic.ts` — the pure
 * formatters + the `historyToDisplay` thread-reload transform extracted from
 * the (large) AssistantModal. No React: `assistant-logic` has only type-only
 * imports, so it pulls in no runtime deps.
 */
import { describe, test, expect } from 'bun:test';
import {
  formatTokens,
  formatRelativeTime,
  historyToDisplay,
} from '../../../src/components/assistant/assistant-logic.js';
import type { LlmMessageDTO } from 'lumiverse-spindle-types';
import type { AppliedEvent } from '../../../src/assistant/types.js';

// ── Fixture builders (cast past the exact spindle-types shapes; the
//    transform only reads the fields constructed below) ──────────────────
const sysMsg  = (content: string): LlmMessageDTO => ({ role: 'system', content } as LlmMessageDTO);
const userMsg = (content: string): LlmMessageDTO => ({ role: 'user', content } as LlmMessageDTO);
const asstMsg = (content: string, reasoning?: string): LlmMessageDTO =>
  ({ role: 'assistant', content, ...(reasoning ? { reasoning_content: reasoning } : {}) } as LlmMessageDTO);
const asstToolUse = (id: string, name: string): LlmMessageDTO =>
  ({ role: 'assistant', content: [{ type: 'tool_use', id, name, input: {} }] } as unknown as LlmMessageDTO);
const userToolResult = (toolUseId: string, content: unknown, isError = false): LlmMessageDTO =>
  ({ role: 'user', content: [{ type: 'tool_result', tool_use_id: toolUseId, content, is_error: isError }] } as unknown as LlmMessageDTO);
const asstText = (text: string): LlmMessageDTO =>
  ({ role: 'assistant', content: [{ type: 'text', text }] } as unknown as LlmMessageDTO);
const applied = (afterMessageCount: number, scriptName: string, updated = false): AppliedEvent =>
  ({ afterMessageCount, scriptName, updated } as unknown as AppliedEvent);

describe('formatTokens', () => {
  test('counts below 1000 render raw', () => {
    expect(formatTokens(0)).toBe('0');
    expect(formatTokens(850)).toBe('850');
    expect(formatTokens(999)).toBe('999');
  });

  test('1000–9999 render as 1-decimal kilos', () => {
    expect(formatTokens(1000)).toBe('1.0k');
    expect(formatTokens(1500)).toBe('1.5k');
    expect(formatTokens(1234)).toBe('1.2k');
  });

  test('≥10000 render as rounded kilos', () => {
    expect(formatTokens(10_000)).toBe('10k');
    expect(formatTokens(42_000)).toBe('42k');
    expect(formatTokens(42_500)).toBe('43k'); // Math.round
  });
});

describe('formatRelativeTime', () => {
  const now = Date.now();
  test('within a minute is "just now"', () => {
    expect(formatRelativeTime(now - 1000)).toBe('just now');
  });
  test('minutes / hours / days buckets', () => {
    expect(formatRelativeTime(now - 5 * 60_000)).toBe('5m ago');
    expect(formatRelativeTime(now - 2 * 3_600_000)).toBe('2h ago');
    expect(formatRelativeTime(now - 3 * 86_400_000)).toBe('3d ago');
  });
  test('past 7 days falls through to a calendar date (not a relative label)', () => {
    const out = formatRelativeTime(now - 30 * 86_400_000);
    expect(out).not.toContain('ago');
    expect(out).not.toBe('just now');
    expect(out.length).toBeGreaterThan(0);
  });
});

describe('historyToDisplay — basic mapping', () => {
  test('empty history yields no rows', () => {
    expect(historyToDisplay([])).toEqual([]);
  });

  test('system turns are skipped', () => {
    expect(historyToDisplay([sysMsg('you are Lisa')])).toEqual([]);
  });

  test('a user string becomes a user bubble', () => {
    expect(historyToDisplay([userMsg('hi')])).toEqual([{ role: 'user', content: 'hi' }]);
  });

  test('an assistant string becomes an assistant bubble (no reasoning key)', () => {
    const out = historyToDisplay([asstMsg('hello')]);
    expect(out).toEqual([{ role: 'assistant', content: 'hello' }]);
    expect(out[0]!.reasoning).toBeUndefined();
  });

  test('assistant reasoning_content is surfaced as reasoning', () => {
    const out = historyToDisplay([asstMsg('answer', 'let me think')]);
    expect(out[0]).toMatchObject({ role: 'assistant', content: 'answer', reasoning: 'let me think' });
  });

  test('assistant array text parts become bubbles', () => {
    expect(historyToDisplay([asstText('paragraph')])).toEqual([{ role: 'assistant', content: 'paragraph' }]);
  });

  test('the default appliedEvents arg works when omitted', () => {
    expect(historyToDisplay([userMsg('q')])).toEqual([{ role: 'user', content: 'q' }]);
  });
});

describe('historyToDisplay — tool pairing', () => {
  test('a tool_use pairs with its following tool_result (result turn has no own bubble)', () => {
    const out = historyToDisplay([asstToolUse('t1', 'search'), userToolResult('t1', 'found 3', false)]);
    expect(out).toEqual([{ role: 'tool', toolName: 'search', content: 'found 3', isError: false }]);
  });

  test('a tool_use with no matching result shows the placeholder', () => {
    const out = historyToDisplay([asstToolUse('t1', 'search')]);
    expect(out).toEqual([{ role: 'tool', toolName: 'search', content: '(no result recorded)', isError: false }]);
  });

  test('an errored tool_result carries isError true', () => {
    const out = historyToDisplay([asstToolUse('t1', 'run'), userToolResult('t1', 'boom', true)]);
    expect(out[0]).toMatchObject({ role: 'tool', isError: true, content: 'boom' });
  });

  test('a non-string tool_result content is JSON-stringified', () => {
    const out = historyToDisplay([asstToolUse('t1', 'fetch'), userToolResult('t1', { ok: 1 })]);
    expect(out[0]!.content).toBe('{"ok":1}');
  });
});

describe('historyToDisplay — applied-marker interleaving', () => {
  test('a marker splices in after its afterMessageCount-th message', () => {
    const out = historyToDisplay([userMsg('q'), asstMsg('a')], [applied(2, 'MyScript', true)]);
    expect(out).toEqual([
      { role: 'user', content: 'q' },
      { role: 'assistant', content: 'a' },
      { role: 'applied', content: '', scriptName: 'MyScript', appliedUpdated: true },
    ]);
  });

  test('a marker at count 0 lands before any message', () => {
    const out = historyToDisplay([userMsg('q')], [applied(0, 'S')]);
    expect(out[0]).toMatchObject({ role: 'applied', scriptName: 'S' });
    expect(out[1]).toMatchObject({ role: 'user', content: 'q' });
  });

  test('a marker anchored beyond history length is flushed at the end (not dropped)', () => {
    const out = historyToDisplay([userMsg('q')], [applied(5, 'Late')]);
    expect(out).toEqual([
      { role: 'user', content: 'q' },
      { role: 'applied', content: '', scriptName: 'Late', appliedUpdated: false },
    ]);
  });

  test('multiple markers at the same count preserve order', () => {
    const out = historyToDisplay([userMsg('q')], [applied(1, 'A'), applied(1, 'B')]);
    expect(out.filter((r) => r.role === 'applied').map((r) => r.scriptName)).toEqual(['A', 'B']);
  });
});
