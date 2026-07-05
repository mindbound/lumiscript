/**
 * ============================================================================
 * LumiScript — Assistant Thread Storage
 * ============================================================================
 * Persistence layer for the in-app code assistant's conversation threads.
 * Each thread lives in its own JSON file under `spindle.userStorage`; a
 * lightweight index file enumerates them for the sidebar.
 *
 * Layout (per-user):
 *
 *   assistant/
 *     threads.json                 // AssistantThreadIndexEntry[]
 *     threads/
 *       <threadId>.json            // AssistantThread (full messages)
 *
 * All operations require a `userId` — LumiScript is an operator-scoped
 * extension and the host's userStorage rejects per-user-tier calls without
 * one. Callers pass `activeUserId` from the backend.
 *
 * **Atomicity**: each file is self-contained. Updating one thread's body
 * doesn't risk corrupting another. The index file gets updated separately
 * after any thread mutation. Race-safety: assistant turns are serialised
 * upstream (one active turn at a time), and the modal is single-instance,
 * so concurrent writes to the same thread aren't a concern in practice.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { AssistantThread, AssistantThreadIndexEntry } from './types.js';

// ─── Paths ───────────────────────────────────────────────────────────────────

const INDEX_PATH = 'assistant/threads.json';
const threadPath = (id: string): string => `assistant/threads/${id}.json`;

// ─── Index file ──────────────────────────────────────────────────────────────

/**
 * Load the threads index. Returns an empty array on first run / missing file
 * (via the `fallback` option to `getJson`). Index entries are returned in
 * insertion order; callers that need recency ordering should sort by
 * `updatedAt desc`.
 */
export async function loadThreadIndex(userId: string): Promise<AssistantThreadIndexEntry[]> {
  return spindle.userStorage.getJson<AssistantThreadIndexEntry[]>(INDEX_PATH, {
    fallback: [],
    userId,
  });
}

/**
 * Write the threads index. Pretty-printed (indent 2) for human inspection.
 */
export async function saveThreadIndex(
  userId: string,
  index: AssistantThreadIndexEntry[],
): Promise<void> {
  await spindle.userStorage.setJson(INDEX_PATH, index, { indent: 2, userId });
}

// ─── Thread bodies ───────────────────────────────────────────────────────────

/**
 * Load a thread by ID. Returns null if the file doesn't exist — typically
 * means the thread was deleted but the index hadn't caught up, or the
 * passed ID is stale from a closed modal. Callers should treat null as
 * "vanished" and route through normal "no active thread" handling.
 */
export async function loadThread(
  userId: string,
  threadId: string,
): Promise<AssistantThread | null> {
  // The `fallback: null` form lets us distinguish "file doesn't exist" from
  // "parse error" — if the file IS present but malformed, `getJson` throws
  // and the caller bubbles up.
  return spindle.userStorage.getJson<AssistantThread | null>(threadPath(threadId), {
    fallback: null,
    userId,
  });
}

/**
 * Persist a thread body. By default bumps `updatedAt` to now BEFORE writing —
 * keeps the file's timestamp in sync with the on-disk content. Caller is
 * responsible for updating the index entry (see `upsertIndexEntry`).
 *
 * Pass `{ bumpUpdatedAt: false }` for a SILENT write that preserves the existing
 * `updatedAt` — used for changes that shouldn't count as "activity" or reorder
 * the recency-sorted sidebar (e.g. toggling an attached-script chip). Returns
 * the same object reference in that case (no timestamp spread).
 */
export async function saveThread(
  userId: string,
  thread: AssistantThread,
  opts?: { bumpUpdatedAt?: boolean },
): Promise<AssistantThread> {
  const stamped: AssistantThread =
    opts?.bumpUpdatedAt === false ? thread : { ...thread, updatedAt: Date.now() };
  // Compact (no indent): thread bodies are machine-read and grow with the
  // conversation, so the per-turn JSON.stringify + write cost is O(thread size)
  // — pretty-printing roughly doubles it for no benefit. (The small, human-
  // inspected index file stays indented; see saveThreadIndex.)
  await spindle.userStorage.setJson(threadPath(stamped.id), stamped, { userId });
  return stamped;
}

/**
 * Delete a thread file. Idempotent — silently swallows "file doesn't exist"
 * errors (the host's `delete` may throw on missing; we catch and continue).
 * Caller must separately update the index to drop the entry.
 */
export async function deleteThreadFile(userId: string, threadId: string): Promise<void> {
  try {
    await spindle.userStorage.delete(threadPath(threadId), userId);
  } catch {
    // Treat as already-gone. Verifying via `exists()` first would race
    // anyway; the catch-and-ignore is the simpler correct shape.
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Create a fresh, empty thread. Not yet persisted — caller decides when
 * (typically: on first user message, to avoid littering storage with
 * never-used threads).
 */
export function createNewThread(): AssistantThread {
  const now = Date.now();
  return {
    id: crypto.randomUUID(),
    title: 'New chat',
    createdAt: now,
    updatedAt: now,
    messages: [],
    contextScriptIds: [],
    contextFilePaths: [],
  };
}

/**
 * Derive a thread title from the first user message. Truncates to ~40 chars
 * on a word boundary if possible, appending an ellipsis when truncated.
 * Newlines collapse to single spaces for a clean one-line label.
 *
 * Future polish: optionally use an LLM call to summarise the first turn for
 * a more descriptive title. Truncation is good enough for v0.30.2 and
 * removes the LLM-call dependency from the persistence path.
 */
export function deriveTitle(firstUserMessage: string): string {
  const cleaned = firstUserMessage.replace(/\s+/g, ' ').trim();
  if (!cleaned) return 'New chat';
  const MAX = 40;
  if (cleaned.length <= MAX) return cleaned;
  // Try to break on a word boundary inside the budget; fall back to a
  // hard cut if no whitespace exists in the trailing third.
  const slice = cleaned.slice(0, MAX);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > MAX * 0.6 ? lastSpace : MAX;
  return `${cleaned.slice(0, cut).trimEnd()}…`;
}

/**
 * Build an index entry from a thread body. Used when persisting / renaming.
 * `messageCount` is the count of NON-SYSTEM messages — matches what the
 * sidebar would naturally want to display ("3 messages" feels right for
 * 1 user + 1 assistant + 1 follow-up; the system prompt is invisible to
 * the user).
 */
export function buildIndexEntry(thread: AssistantThread): AssistantThreadIndexEntry {
  return {
    id: thread.id,
    title: thread.title,
    createdAt: thread.createdAt,
    updatedAt: thread.updatedAt,
    messageCount: thread.messages.filter((m) => m.role !== 'system').length,
  };
}

/**
 * Insert-or-update an entry in an index array (by id), returning a new
 * array with the entry moved to the front. The "move to front" semantics
 * matches recency-first sidebar ordering naturally.
 */
export function upsertIndexEntry(
  index: AssistantThreadIndexEntry[],
  entry: AssistantThreadIndexEntry,
): AssistantThreadIndexEntry[] {
  const filtered = index.filter((e) => e.id !== entry.id);
  return [entry, ...filtered];
}

/**
 * Drop an entry from an index array by id. Returns the filtered array
 * (doesn't mutate). Idempotent — missing ids no-op.
 */
export function removeIndexEntry(
  index: AssistantThreadIndexEntry[],
  threadId: string,
): AssistantThreadIndexEntry[] {
  return index.filter((e) => e.id !== threadId);
}
