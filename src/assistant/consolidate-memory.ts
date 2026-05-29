/**
 * ============================================================================
 * LUMISCRIPT — LISA MEMORY CONSOLIDATION (P4)
 * ============================================================================
 * A triggered (UI-button) pass that asks the LLM to tighten the user's memory
 * notes — merge duplicates, drop stale/redundant ones, refine wording — while
 * preserving every distinct fact. See `notes/lisa-memory-spec.md`.
 *
 * SAFETY (validate-or-leave-unchanged): the result is parsed + validated and
 * only saved if it's a well-formed, non-empty note list that fits the ceiling.
 * On ANY failure (LLM error, unparseable output, empty result), memory is left
 * EXACTLY as-is — a bad pass can never destroy notes. Reuses `appendNote` to
 * rebuild (free id-gen + hook cap + cumulative ceiling guard).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import { appendNote, loadNotes, saveNotes, type MemoryNote } from '../engine/assistant-memory.js';

/** Below this, consolidation isn't worth a round-trip. */
const MIN_NOTES_TO_CONSOLIDATE = 6;

export type ConsolidateResult =
  | { ok: true; before: number; after: number }
  | { ok: false; error: string };

export async function consolidateMemory(
  userId: string,
  connectionId?: string,
  signal?: AbortSignal,
): Promise<ConsolidateResult> {
  const notes = await loadNotes(userId);
  if (notes.length < MIN_NOTES_TO_CONSOLIDATE) {
    return { ok: false, error: `Only ${notes.length} note${notes.length === 1 ? '' : 's'} — nothing worth consolidating yet.` };
  }

  // Resolve provider/model from the connection (mirrors agent.ts — some
  // providers reject `connection_id` alone). Best-effort; fall through with
  // connection_id only if the lookup fails.
  let provider: string | undefined;
  let model: string | undefined;
  if (connectionId) {
    try {
      const conn = await spindle.connections.get(connectionId, userId);
      provider = conn?.provider;
      model = conn?.model;
    } catch { /* connection_id alone */ }
  }

  const inputJson = JSON.stringify(
    notes.map((n) => ({
      hook: n.hook,
      ...(n.detail ? { detail: n.detail } : {}),
      ...(n.category ? { category: n.category } : {}),
    })),
    null,
    2,
  );
  const prompt = [
    'You are consolidating a list of saved memory notes about a user — their preferences, conventions, and project context for a coding assistant.',
    '',
    'Rewrite them into a tighter set: merge duplicates and near-duplicates, drop anything clearly redundant or stale, and tighten the wording. PRESERVE every distinct piece of information — do NOT invent facts, and do NOT drop a fact just because it is the only one of its kind. Keep each `hook` to one concise line; put longer specifics in `detail`. Keep or refine the `category` groupings.',
    '',
    'Current notes:',
    inputJson,
    '',
    'Return ONLY a JSON array of the consolidated notes — each an object with "hook" (required string) and optional "detail" and "category" strings. No prose, no code fences, just the JSON array.',
  ].join('\n');

  let raw: unknown;
  try {
    const req = {
      type: 'raw' as const,
      messages: [{ role: 'user', content: prompt }],
      userId,
      ...(provider ? { provider } : {}),
      ...(model ? { model } : {}),
      ...(connectionId ? { connection_id: connectionId } : {}),
      ...(signal ? { signal } : {}),
    };
    raw = await spindle.generate.raw(req as unknown as Parameters<typeof spindle.generate.raw>[0]);
  } catch (err) {
    return { ok: false, error: `Consolidation request failed: ${err instanceof Error ? err.message : String(err)}. Memory left unchanged.` };
  }

  const parsed = parseNotesArray(extractContent(raw));
  if (!parsed) {
    return { ok: false, error: 'The model did not return a usable note list — memory left unchanged.' };
  }

  // Rebuild via appendNote: free id generation, hook truncation, and the
  // cumulative byte ceiling. If somehow over-ceiling, keep what fits.
  const now = Date.now();
  let rebuilt: MemoryNote[] = [];
  for (const p of parsed) {
    const r = appendNote(
      rebuilt,
      { hook: p.hook, ...(p.detail ? { detail: p.detail } : {}), ...(p.category ? { category: p.category } : {}), source: 'lisa' },
      now,
    );
    if ('error' in r) break;
    rebuilt = r.notes;
  }
  if (rebuilt.length === 0) {
    return { ok: false, error: 'Consolidation produced no valid notes — memory left unchanged.' };
  }

  await saveNotes(userId, rebuilt);
  return { ok: true, before: notes.length, after: rebuilt.length };
}

/** Pull text content out of `generate.raw`'s `unknown` result. Exported for tests. */
export function extractContent(raw: unknown): string {
  if (typeof raw === 'string') return raw;
  if (raw && typeof raw === 'object' && typeof (raw as { content?: unknown }).content === 'string') {
    return (raw as { content: string }).content;
  }
  return '';
}

/** Defensively extract a JSON note array from possibly-fenced/prose-wrapped text.
 *  Exported for tests — this is the validate-or-leave-unchanged safety gate. */
export function parseNotesArray(text: string): Array<{ hook: string; detail?: string; category?: string }> | null {
  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');
  if (start === -1 || end <= start) return null;
  let arr: unknown;
  try { arr = JSON.parse(text.slice(start, end + 1)); } catch { return null; }
  if (!Array.isArray(arr)) return null;
  const out: Array<{ hook: string; detail?: string; category?: string }> = [];
  for (const it of arr) {
    if (it && typeof it === 'object') {
      const o = it as { hook?: unknown; detail?: unknown; category?: unknown };
      if (typeof o.hook === 'string' && o.hook.trim()) {
        out.push({
          hook: o.hook,
          ...(typeof o.detail === 'string' ? { detail: o.detail } : {}),
          ...(typeof o.category === 'string' ? { category: o.category } : {}),
        });
      }
    }
  }
  return out.length ? out : null;
}
