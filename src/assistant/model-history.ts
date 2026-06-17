/**
 * ============================================================================
 * LumiScript Assistant — Model-facing history derivation
 * ============================================================================
 * The boundary between "what the LLM sees" and "the stored/displayed thread".
 *
 * `AssistantThread.messages` is the single source of truth: the FULL record
 * shown to the user and persisted verbatim — it is never collapsed (collapsing
 * it was the v1.1 data-loss bug). What the model receives as prior history is
 * DERIVED from the thread here, so compaction can shrink the model's view
 * without ever touching the user's thread.
 *
 * Today this is the identity (`compactedThrough` is dormant — nothing sets it
 * yet). When Tier-2 compaction lands, a set `compactedThrough` collapses
 * `messages[0..compactedThrough)` into a single `handoff` summary message, so
 * the model sees `[handoff, ...messages.slice(compactedThrough)]` while
 * `thread.messages` stays intact. Per-turn TOKEN windowing still happens
 * downstream in `runAssistantTurn` (windowHistory) — this layer is about the
 * compaction boundary, not the per-turn token budget.
 */

import type { LlmMessageDTO } from 'lumiverse-spindle-types';
import type { AssistantThread } from './types.js';

/**
 * Derive the model-facing prior history for a thread (the value passed as
 * `runAssistantTurn`'s `opts.history`). When the thread has been compacted, the
 * model sees a single handoff summary in place of the folded prefix, then the
 * verbatim recent tail; otherwise it sees the full thread.
 *
 * IMPORTANT: this returns a DERIVED view — `thread.messages` is never modified.
 * The backend must NOT write this value back into `thread.messages` (it appends
 * only the new turns past `buildModelHistory(thread).length` after a turn); the
 * synthetic handoff lives only in the model's view, never in the canonical record.
 */
export function buildModelHistory(thread: AssistantThread): LlmMessageDTO[] {
  const { messages, compactedThrough, handoff } = thread;
  if (compactedThrough && compactedThrough > 0 && handoff) {
    const tail = messages.slice(compactedThrough);
    const first = tail[0];
    // compactedThrough always lands on a user-string turn (compaction cuts only
    // there), so MERGE the handoff INTO that first user turn rather than
    // prepending it as its own message — two consecutive user turns would be
    // rejected by strict providers (Anthropic / DeepSeek require alternating
    // roles). The handoff rides a user turn either way (a windowHistory cut
    // boundary, so windowing keeps it — barring a pathologically small budget
    // where even the newest turn alone overflows, which hits the universal
    // fail-safe). messages[0..compactedThrough) live on only inside this summary;
    // messages[compactedThrough..] stay verbatim. thread.messages is untouched.
    if (first && first.role === 'user' && typeof first.content === 'string') {
      const merged: LlmMessageDTO = {
        role: 'user',
        content:
          `[Summary of earlier conversation, condensed to save context:]\n\n${handoff}\n\n` +
          `[End of summary — the messages below are verbatim.]\n\n${first.content}`,
      };
      return [merged, ...tail.slice(1)];
    }
    // Fallback (the boundary should always be a user turn): prepend it standalone.
    return [{ role: 'user', content: handoff }, ...tail];
  }
  return messages;
}
