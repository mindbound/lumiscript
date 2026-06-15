/**
 * ============================================================================
 * ASSISTANT MODAL — pure logic
 * ============================================================================
 * Data-in / data-out helpers behind `AssistantModal.tsx`, extracted so they
 * can be unit-tested without mounting the (large) chat component:
 *
 *   - `DisplayMessage`      — the row shape the transcript renders
 *   - `formatTokens`        — compact token-count label for the usage strip
 *   - `formatRelativeTime`  — compact "last touched" label for thread rows
 *   - `historyToDisplay`    — convert a stored `LlmMessageDTO[]` thread (+ the
 *                             recorded apply markers) into `DisplayMessage[]`
 *
 * Nothing here imports React.
 */

import type { LlmMessageDTO } from 'lumiverse-spindle-types';
import type { LlmMessagePart } from '../../types/script.js';
import type { AppliedEvent } from '../../assistant/types.js';

export interface DisplayMessage {
  role: 'user' | 'assistant' | 'tool' | 'error' | 'applied';
  content: string;
  /** For tool rows. */
  toolName?: string;
  isError?: boolean;
  /** Marks an assistant bubble that was cut short by user-initiated stop. */
  aborted?: boolean;
  /** Reasoning / chain-of-thought tokens (DeepSeek thinking, o1, etc.). */
  reasoning?: string;
  /** For 'applied' marker rows: the target script name + whether it was an
   *  update-in-place (vs. a new-script create). */
  scriptName?: string;
  appliedUpdated?: boolean;
}

/**
 * Format a token count for compact display in the usage strip.
 *   <1000   → raw count, e.g. `850`
 *   <10000  → 1-decimal kilo, e.g. `1.2k`
 *   ≥10000  → 0-decimal kilo, e.g. `42k`
 */
export function formatTokens(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10_000) return `${(n / 1000).toFixed(1)}k`;
  return `${Math.round(n / 1000)}k`;
}

/**
 * Compact relative-time label for thread sidebar rows. Tuned for "when was
 * this thread last touched" rather than precise dating — past 7d we fall
 * through to a short calendar date.
 */
export function formatRelativeTime(epochMs: number): string {
  const seconds = (Date.now() - epochMs) / 1000;
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.round(seconds / 86400)}d ago`;
  return new Date(epochMs).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

/**
 * Convert an `LlmMessageDTO[]` history (the LLM-context shape the agent
 * uses) into the `DisplayMessage[]` shape the modal renders. Used when
 * loading a thread from storage on switch / mount.
 *
 * Mapping rules:
 *   - `system` turns → skipped
 *   - `user` with string content → user bubble
 *   - `user` with array content → tool_result-only turn; consumed by the
 *     first pass to pair with preceding tool_use parts (no own bubble)
 *   - `assistant` with string content → assistant bubble
 *   - `assistant` with array content → tool_use parts emit tool chips
 *     (paired with their result by tool_use_id); text parts emit bubbles
 */
export function historyToDisplay(history: LlmMessageDTO[], appliedEvents: AppliedEvent[] = []): DisplayMessage[] {
  // First pass: map tool_use_id → { content, isError }.
  const toolResults = new Map<string, { content: string; isError: boolean }>();
  for (const m of history) {
    if (m.role !== 'user' || !Array.isArray(m.content)) continue;
    for (const part of m.content as LlmMessagePart[]) {
      if (part.type === 'tool_result') {
        toolResults.set(part.tool_use_id, {
          content: typeof part.content === 'string' ? part.content : JSON.stringify(part.content),
          isError: !!part.is_error,
        });
      }
    }
  }
  const result: DisplayMessage[] = [];
  // Applied markers grouped by the message-count they follow, so they can be
  // interleaved into the transcript at their original positions on reload.
  const appliedByCount = new Map<number, AppliedEvent[]>();
  for (const ev of appliedEvents) {
    const arr = appliedByCount.get(ev.afterMessageCount);
    if (arr) arr.push(ev);
    else appliedByCount.set(ev.afterMessageCount, [ev]);
  }
  const flushApplied = (count: number) => {
    const evs = appliedByCount.get(count);
    if (!evs) return;
    for (const ev of evs) {
      result.push({ role: 'applied', content: '', scriptName: ev.scriptName, appliedUpdated: ev.updated });
    }
    appliedByCount.delete(count);
  };

  // Second pass: render in order, splicing applied markers after the Nth message.
  flushApplied(0); // applies recorded before any message (edge)
  for (let i = 0; i < history.length; i++) {
    const m = history[i]!;
    if (m.role !== 'system') {
      if (m.role === 'user') {
        if (typeof m.content === 'string') {
          result.push({ role: 'user', content: m.content });
        }
      } else if (m.role === 'assistant') {
        if (typeof m.content === 'string') {
          // `reasoning_content` is a field added to `LlmMessageDTO` in
          // spindle-types 0.4.72. The agent writes the field via conditional
          // spread; the read here needs an inline assertion until we bump
          // the dependency. TODO: drop post-bump.
          const reasoning = (m as LlmMessageDTO & { reasoning_content?: string }).reasoning_content;
          result.push({
            role: 'assistant',
            content: m.content,
            ...(reasoning ? { reasoning } : {}),
          });
        } else if (Array.isArray(m.content)) {
          for (const part of m.content as LlmMessagePart[]) {
            if (part.type === 'tool_use') {
              const r = toolResults.get(part.id);
              result.push({
                role: 'tool',
                toolName: part.name,
                content: r?.content ?? '(no result recorded)',
                isError: r?.isError ?? false,
              });
            } else if (part.type === 'text') {
              result.push({ role: 'assistant', content: part.text });
            }
          }
        }
      }
    }
    flushApplied(i + 1);
  }
  // Flush any markers anchored beyond the message count (e.g. messages since
  // trimmed) so they're not silently dropped.
  for (const evs of appliedByCount.values()) {
    for (const ev of evs) {
      result.push({ role: 'applied', content: '', scriptName: ev.scriptName, appliedUpdated: ev.updated });
    }
  }
  return result;
}
