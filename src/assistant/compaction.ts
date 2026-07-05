/**
 * ============================================================================
 * LUMISCRIPT — LISA CONTEXT COMPACTION (Tier-2, #4)
 * ============================================================================
 * Collapse the OLDER part of a long conversation into a single prose "handoff"
 * summary so the model-facing context stays lean — WITHOUT touching the full
 * thread the user sees. `thread.messages` stays canonical and untouched; the
 * collapse is applied only in the model's view (see model-history.ts
 * buildModelHistory, which prepends the handoff and slices from compactedThrough).
 *
 * `compactThread` picks a boundary (keeping a recent verbatim tail), summarizes
 * everything before it via a one-shot `spindle.generate.raw` call (cribbed from
 * consolidate-memory.ts), and returns the new {compactedThrough, handoff,
 * occupancyTokens}. PRESERVE-ON-FAILURE: on ANY error / empty summary it returns
 * null and the caller leaves the thread uncompacted — compaction can never lose
 * data (the full thread.messages is never modified here).
 *
 * Re-compaction folds the PREVIOUS handoff into the new summary so nothing
 * accumulated across successive compactions is dropped.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LlmMessageDTO } from 'lumiverse-spindle-types';
import type { AssistantThread } from './types.js';
import { estimateMessageTokens } from './agent.js';
import { extractContent, parseNotesArray } from './consolidate-memory.js';
import { loadNotes, appendNotes } from '../engine/assistant-memory.js';

/** Occupancy fraction of the budget at which auto-compaction fires. Sits between
 *  the gauge's amber (75%) and red (90%) bands; aligns with LumiAgent's ~84%. */
export const AUTO_COMPACT_THRESHOLD = 0.85;

/** Fraction of the budget's worth of most-recent messages kept VERBATIM (not
 *  folded into the handoff). Compaction brings occupancy down to roughly this
 *  plus the small handoff, giving generous hysteresis before the next trigger. */
const COMPACTION_TAIL_FRACTION = 0.30;

/** Per-message + total char caps on the transcript fed to the summary LLM, so a
 *  huge folded prefix can't exceed the summary model's window (which would throw
 *  → with pre-turn auto-compaction, that's a wasted retry every turn). The total
 *  cap keeps the MOST RECENT portion (older detail rides the prior handoff). */
const SUMMARY_TURN_CHAR_CAP = 8_000;
const SUMMARY_TOTAL_CHAR_CAP = 200_000;

function clip(s: string, cap: number): string {
  return s.length > cap ? `${s.slice(0, cap)}…[truncated]` : s;
}

export interface CompactionResult {
  /** New boundary — messages[0..compactedThrough) are folded into `handoff`. */
  compactedThrough: number;
  /** New prose handoff (folds in the prior handoff, if any). */
  handoff: string;
  /** Estimated model-facing occupancy AFTER compaction (drives the gauge). */
  occupancyTokens: number;
}

export interface CompactOptions {
  userId: string;
  /** Token budget (LumiScriptSettings.assistantContextTokens). */
  budget: number;
  /** Connection to run the summary on — reuse the conversation's. */
  connectionId?: string;
  signal?: AbortSignal;
}

/**
 * Choose the new compaction boundary: the OLDEST user-turn boundary whose suffix
 * still fits `tailBudgetTokens`, so messages[boundary..] stay verbatim and
 * messages[0..boundary) get folded. Cuts ONLY at role:'user' string turns (same
 * invariant as windowHistory) so the kept tail is always well-formed. Returns
 * null when the boundary wouldn't advance past `prevThrough` — i.e. there's
 * nothing new to fold (the anti-thrash guard). Exported for tests.
 */
export function pickCompactionBoundary(
  messages: LlmMessageDTO[],
  prevThrough: number,
  tailBudgetTokens: number,
): number | null {
  let acc = 0;
  let candidate = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    acc += estimateMessageTokens(messages[i]!);
    if (acc > tailBudgetTokens) break;
    const m = messages[i];
    if (m && m.role === 'user' && typeof m.content === 'string') candidate = i;
  }
  // `candidate` is the start of the verbatim tail to keep; everything before it
  // gets folded. Require it to advance past the existing boundary, else there's
  // nothing new worth a round-trip.
  if (candidate <= prevThrough) return null;
  return candidate;
}

/** Render the to-be-folded messages as a readable transcript for the summary
 *  prompt. Tool turns are described compactly; the prior handoff (if any) leads. */
function renderForSummary(prevHandoff: string | undefined, messages: LlmMessageDTO[]): string {
  const lines: string[] = [];
  if (prevHandoff) lines.push(`EARLIER SUMMARY (already compacted once — fold this in):\n${prevHandoff}\n`);
  for (const m of messages) {
    if (typeof m.content === 'string') {
      lines.push(`${m.role === 'user' ? 'USER' : 'ASSISTANT'}: ${clip(m.content, SUMMARY_TURN_CHAR_CAP)}`);
    } else if (Array.isArray(m.content)) {
      const parts = m.content as Array<{ type?: string; name?: string; content?: unknown }>;
      if (m.role === 'assistant') {
        const names = parts.filter((p) => p.type === 'tool_use').map((p) => p.name).filter(Boolean).join(', ');
        lines.push(`ASSISTANT (called tools: ${names || '—'})`);
      } else {
        const dump = parts
          .map((p) => (typeof p.content === 'string' ? p.content : JSON.stringify(p.content)))
          .join(' | ');
        lines.push(`TOOL RESULTS: ${dump.slice(0, 2000)}`);
      }
    }
  }
  const text = lines.join('\n');
  // Hard-cap the whole transcript so the summary call can't overflow the model's
  // window. Keep the most-recent portion (older detail is carried by the prior
  // handoff on re-compaction).
  return text.length > SUMMARY_TOTAL_CHAR_CAP
    ? `[…earlier folded messages truncated for the summary…]\n${text.slice(text.length - SUMMARY_TOTAL_CHAR_CAP)}`
    : text;
}

function buildSummaryPrompt(transcript: string): string {
  return [
    'You are compacting the earlier part of an ongoing conversation between a user and a coding assistant (for the LumiScript extension) to free up context space.',
    '',
    'Summarize everything below into a compact HANDOFF that lets the assistant continue seamlessly. Preserve:',
    "- The user's goals and any still-open requests.",
    '- Key decisions and what has already been done.',
    '- Work in progress and the immediate next steps.',
    '- Concrete facts worth keeping: script names, ids, file paths, settings, API names, error messages.',
    '',
    "Be concise and factual. This summary REPLACES the messages below in the assistant's working memory, so anything you omit is forgotten. Write terse notes-to-self (prose or bullets) — do NOT address the user or add commentary.",
    '',
    '--- CONVERSATION TO COMPACT ---',
    transcript,
  ].join('\n');
}

/**
 * Compact `thread` if there's enough older history to fold. Returns the new
 * compaction state, or null when nothing is folded OR on any failure (the
 * caller then leaves the thread exactly as-is — preserve-on-failure). Does NOT
 * mutate the thread; the caller applies the returned fields + persists.
 */
export async function compactThread(
  thread: AssistantThread,
  opts: CompactOptions,
): Promise<CompactionResult | null> {
  const prevThrough = thread.compactedThrough ?? 0;
  const tailBudget = Math.max(1, Math.floor(opts.budget * COMPACTION_TAIL_FRACTION));
  const newThrough = pickCompactionBoundary(thread.messages, prevThrough, tailBudget);
  if (newThrough === null) return null;

  // pickCompactionBoundary guarantees newThrough > prevThrough, so this slice
  // always has at least one message to fold.
  const toCompact = thread.messages.slice(prevThrough, newThrough);
  const prompt = buildSummaryPrompt(renderForSummary(thread.handoff, toCompact));

  // Resolve provider/model (some providers reject connection_id alone — mirrors
  // agent.ts + consolidate-memory.ts). Best-effort.
  let provider: string | undefined;
  let model: string | undefined;
  if (opts.connectionId) {
    try {
      const conn = await spindle.connections.get(opts.connectionId, opts.userId);
      provider = conn?.provider;
      model = conn?.model;
    } catch { /* fall through with connection_id only */ }
  }

  let raw: unknown;
  try {
    const req = {
      type: 'raw' as const,
      messages: [{ role: 'user', content: prompt }],
      userId: opts.userId,
      ...(provider ? { provider } : {}),
      ...(model ? { model } : {}),
      ...(opts.connectionId ? { connection_id: opts.connectionId } : {}),
      ...(opts.signal ? { signal: opts.signal } : {}),
    };
    raw = await spindle.generate.raw(req as unknown as Parameters<typeof spindle.generate.raw>[0]);
  } catch {
    return null; // preserve-on-failure (LLM error / abort)
  }

  const handoff = extractContent(raw).trim();
  if (!handoff) return null; // empty summary → leave uncompacted

  // Estimate post-compaction occupancy: the system-turn cost is unchanged, so
  // start from the prior occupancy, subtract what LEFT the model's view (the
  // prior handoff + the folded messages), and add the new handoff. An estimate
  // (flagged so the gauge shows `~`); the next real turn refreshes it exactly.
  const prevOccupancy = thread.lastPromptTokens ?? 0;
  const removed =
    (thread.handoff ? estimateMessageTokens({ role: 'user', content: thread.handoff }) : 0) +
    toCompact.reduce((n, m) => n + estimateMessageTokens(m), 0);
  const added = estimateMessageTokens({ role: 'user', content: handoff });
  const occupancyTokens = Math.max(0, prevOccupancy - removed + added);

  // Harvest durable cross-session facts into memory (fire-and-forget, best-effort)
  // — the "durable half" of compaction: transient task state rides the handoff,
  // while durable facts (preferences, conventions, decisions) go to the
  // always-injected memory so they outlive this thread. Runs async after we
  // return; a harvest failure must never block or break compaction.
  void harvestDurableFacts(toCompact, opts);

  return { compactedThrough: newThrough, handoff, occupancyTokens };
}

/**
 * Best-effort: extract DURABLE cross-session facts from the just-folded prefix
 * and add them to the user's memory (the same store the `remember` tool writes,
 * source 'lisa'). One-shot LLM call, deduped against existing hooks, bounded by
 * the memory ceiling. Fully swallowed on any failure — never affects compaction.
 */
async function harvestDurableFacts(toCompact: LlmMessageDTO[], opts: CompactOptions): Promise<void> {
  // Durable facts come from what the USER said (preferences, decisions) — skip
  // the LLM call entirely if the folded prefix has no user-authored text.
  if (!toCompact.some((m) => m.role === 'user' && typeof m.content === 'string')) return;
  try {
    const existing = await loadNotes(opts.userId);
    const knownHooks = existing.map((n) => n.hook).join('\n') || '(none)';
    const prompt = buildHarvestPrompt(renderForSummary(undefined, toCompact), knownHooks);

    let provider: string | undefined;
    let model: string | undefined;
    if (opts.connectionId) {
      try {
        const conn = await spindle.connections.get(opts.connectionId, opts.userId);
        provider = conn?.provider;
        model = conn?.model;
      } catch { /* fall through with connection_id only */ }
    }
    const req = {
      type: 'raw' as const,
      messages: [{ role: 'user', content: prompt }],
      userId: opts.userId,
      ...(provider ? { provider } : {}),
      ...(model ? { model } : {}),
      ...(opts.connectionId ? { connection_id: opts.connectionId } : {}),
      ...(opts.signal ? { signal: opts.signal } : {}), // cancel with the turn
    };
    const raw = await spindle.generate.raw(req as unknown as Parameters<typeof spindle.generate.raw>[0]);
    const facts = parseNotesArray(extractContent(raw));
    if (!facts) return;
    // Serialized, dedup-aware batch write (won't clobber a concurrent `remember`).
    // Tagged 'harvested' so the index/panel groups + distinguishes auto-scraped
    // facts from ones the user (or the remember tool) explicitly chose to save.
    await appendNotes(opts.userId, facts.map((f) => ({
      hook: f.hook,
      ...(f.detail ? { detail: f.detail } : {}),
      category: 'harvested',
      source: 'lisa' as const,
    })));
  } catch {
    /* best-effort harvest — a failure here must never affect compaction */
  }
}

function buildHarvestPrompt(transcript: string, knownHooks: string): string {
  return [
    'You are reviewing the OLDER part of a conversation between a user and a coding assistant (for the LumiScript extension) that is about to be summarized away to save context.',
    '',
    'Extract any DURABLE, CROSS-SESSION facts worth remembering long-term about the USER or their PROJECT — stated preferences, conventions, decisions, environment/setup details, recurring goals. Do NOT extract transient task state (what was being worked on right now), and do NOT repeat anything already known.',
    '',
    'Already known (do NOT repeat these):',
    knownHooks,
    '',
    'Conversation:',
    transcript,
    '',
    'Return ONLY a JSON array of NEW durable facts, each an object {"hook": "<one concise line>", "detail": "<optional specifics>"}. If there is nothing new and durable worth saving, return [].',
  ].join('\n');
}
