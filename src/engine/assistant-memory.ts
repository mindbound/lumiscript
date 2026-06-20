/**
 * ============================================================================
 * LUMISCRIPT — LISA ASSISTANT MEMORY STORE
 * ============================================================================
 * Per-user, user-editable notes the in-app assistant (Lisa) reads + writes —
 * a "lite MEMORY.md". Persisted at `assistant/memory.json` via `userStorage`.
 * See `notes/lisa-memory-spec.md` for the full design + invariants.
 *
 * INVARIANTS (enforced here or by the Phase-2 system-prompt framing):
 *   - **Corpus supremacy** — notes are fallible, NEVER authoritative over the
 *     API reference. (Framing lives in the system prompt, Phase 2.)
 *   - **Scope** — user/project facts + preferences, not API facts.
 *   - The `hook` is the always-injected index line; `detail` is grepped on demand.
 *
 * Structure: PURE list helpers (`appendNote` / `dropNote` / `searchNotes` /
 * `renderIndex` — unit-tested directly) + thin async persistence wrappers the
 * tools call (`remember` / `forget` / `recall` / `memoryIndex` = load → mutate
 * → save). Phase 1: store + tool backing only — no injection or UI yet.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

const MEMORY_PATH = 'assistant/memory.json';

/**
 * Hard ceiling on the serialized store (bytes). Generous ("dozens of kB") —
 * only the hook index is injected each turn; `detail` is grepped via `recall`,
 * so a large body doesn't cost per-turn context. At the ceiling `appendNote`
 * refuses, so memory can never run away (Phase 4 adds triggered consolidation).
 */
export const MEMORY_BYTE_CEILING = 64 * 1024;

/** Max hook length (the always-injected index line). Longer hooks are truncated. */
export const MEMORY_HOOK_CAP = 120;

export interface MemoryNote {
  id: string;
  /** Concise one-liner — the always-injected index entry. */
  hook: string;
  /** Optional longer body — grepped via `recall`, not injected. */
  detail?: string;
  /** Optional grouping, e.g. 'preference' | 'project' | 'correction'. */
  category?: string;
  /** Who wrote it — drives the UI attribution (Phase 3). */
  source: 'lisa' | 'user';
  createdAt: number;
}

export interface AddNoteInput {
  hook: string;
  detail?: string;
  category?: string;
  source: 'lisa' | 'user';
}

// ─── Pure list helpers (unit-tested) ─────────────────────────────────────────

/** Generate a short id unique within `existing`. */
function makeNoteId(existing: Set<string>): string {
  for (let i = 0; i < 50; i++) {
    const id = crypto.randomUUID().replace(/-/g, '').slice(0, 6);
    if (!existing.has(id)) return id;
  }
  return crypto.randomUUID().slice(0, 8); // pathological fallback
}

/**
 * Append a note (pure). Enforces the byte ceiling against the serialized
 * result. Returns the new list + id, or an `error` string when the add would
 * exceed the ceiling / the hook is empty (caller surfaces it to the model).
 * `now` is injected for testability.
 */
export function appendNote(
  notes: MemoryNote[],
  input: AddNoteInput,
  now: number,
): { notes: MemoryNote[]; id: string } | { error: string } {
  const hook = input.hook.trim();
  if (!hook) return { error: 'A note needs a non-empty hook.' };
  const id = makeNoteId(new Set(notes.map((n) => n.id)));
  const detail = input.detail?.trim();
  const category = input.category?.trim();
  const note: MemoryNote = {
    id,
    hook: hook.length > MEMORY_HOOK_CAP ? `${hook.slice(0, MEMORY_HOOK_CAP - 1)}…` : hook,
    ...(detail ? { detail } : {}),
    ...(category ? { category } : {}),
    source: input.source,
    createdAt: now,
  };
  const next = [...notes, note];
  if (JSON.stringify(next).length > MEMORY_BYTE_CEILING) {
    return {
      error: `Memory is full (${MEMORY_BYTE_CEILING}-byte ceiling). Forget or consolidate notes before adding more.`,
    };
  }
  return { notes: next, id };
}

/** Remove a note by id (pure). `removed` is false when the id wasn't present. */
export function dropNote(notes: MemoryNote[], id: string): { notes: MemoryNote[]; removed: boolean } {
  const next = notes.filter((n) => n.id !== id);
  return { notes: next, removed: next.length !== notes.length };
}

/**
 * Replace a note's editable fields (pure) — a full edit of hook/detail/category
 * (empty detail/category clears them; hook must stay non-empty). Re-checks the
 * byte ceiling. `updated: false` when the id wasn't found.
 */
export function updateNote(
  notes: MemoryNote[],
  id: string,
  patch: { hook: string; detail?: string; category?: string },
): { notes: MemoryNote[]; updated: boolean } | { error: string } {
  const idx = notes.findIndex((n) => n.id === id);
  if (idx === -1) return { notes, updated: false };
  const hook = patch.hook.trim();
  if (!hook) return { error: 'A note needs a non-empty hook.' };
  const detail = patch.detail?.trim();
  const category = patch.category?.trim();
  const next: MemoryNote = {
    ...notes[idx]!,
    hook: hook.length > MEMORY_HOOK_CAP ? `${hook.slice(0, MEMORY_HOOK_CAP - 1)}…` : hook,
  };
  if (detail) next.detail = detail; else delete next.detail;
  if (category) next.category = category; else delete next.category;
  const list = [...notes];
  list[idx] = next;
  if (JSON.stringify(list).length > MEMORY_BYTE_CEILING) {
    return { error: `Memory is full (${MEMORY_BYTE_CEILING}-byte ceiling).` };
  }
  return { notes: list, updated: true };
}

/**
 * Grep notes (pure). Case-insensitive; every whitespace-split term must appear
 * somewhere in hook + detail + category (AND semantics). Empty query → all.
 */
export function searchNotes(notes: MemoryNote[], query: string): MemoryNote[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [...notes];
  return notes.filter((n) => {
    const hay = `${n.hook} ${n.detail ?? ''} ${n.category ?? ''}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}

/**
 * Render the always-injected index — hooks grouped by category, each tagged
 * with its id (so the model can `recall` / `forget` by id) and a `…` marker
 * when there's grepped detail behind it. Returns '' for an empty store.
 */
export function renderIndex(notes: MemoryNote[]): string {
  if (notes.length === 0) return '';
  const byCat = new Map<string, MemoryNote[]>();
  for (const n of notes) {
    const cat = n.category ?? 'misc';
    const arr = byCat.get(cat);
    if (arr) arr.push(n);
    else byCat.set(cat, [n]);
  }
  const lines: string[] = [];
  for (const [cat, arr] of [...byCat.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`[${cat}]`);
    for (const n of arr) lines.push(`  (${n.id}) ${n.hook}${n.detail ? ' …' : ''}`);
  }
  return lines.join('\n');
}

// ─── Persistence wrappers (used by the tools) ────────────────────────────────

export async function loadNotes(userId: string): Promise<MemoryNote[]> {
  return spindle.userStorage.getJson<MemoryNote[]>(MEMORY_PATH, { fallback: [], userId });
}

export async function saveNotes(userId: string, notes: MemoryNote[]): Promise<void> {
  await spindle.userStorage.setJson(MEMORY_PATH, notes, { indent: 2, userId });
}

// ─── Per-user write serialization ────────────────────────────────────────────
//
// Every mutating wrapper does load → mutate → save against one per-user file.
// Without serialization, two concurrent mutators — notably the compaction
// harvest racing the `remember` tool during the SAME turn — read the same
// snapshot and the later save clobbers the earlier's write (lost update). This
// chains each user's mutations to run one-at-a-time; reads stay lock-free.
const memoryWriteChains = new Map<string, Promise<unknown>>();

function withMemoryLock<T>(userId: string, fn: () => Promise<T>): Promise<T> {
  const prev = memoryWriteChains.get(userId) ?? Promise.resolve();
  const result = prev.then(fn, fn); // run fn after prev settles, whatever its outcome
  memoryWriteChains.set(userId, result.then(() => {}, () => {})); // non-rejecting tail
  return result;
}

/**
 * Fingerprint a note list by its MUTABLE content (id + hook + detail +
 * category). `createdAt`/`source` are immutable post-create, so this flips iff
 * a note was added, removed, or edited — exactly the mutations the write lock
 * serializes. Order-sensitive, which is fine: no mutator reorders existing
 * notes (remember appends, forget filters in place, editNote maps in place).
 */
function notesFingerprint(notes: MemoryNote[]): string {
  return JSON.stringify(notes.map((n) => [n.id, n.hook, n.detail ?? '', n.category ?? '']));
}

/**
 * Wholesale-replace the store with `next`, but ONLY if it still matches
 * `expected` — i.e. nothing was written since the caller read `expected`. The
 * re-load + compare + save run inside the per-user write lock, so a concurrent
 * remember/forget/appendNotes that committed while the caller was busy (e.g. a
 * multi-second LLM round-trip) is never clobbered by a stale snapshot. Returns
 * true if written, false if a concurrent change was detected (the caller should
 * leave its result unapplied). Backs P4 consolidation, whose load → LLM →
 * rebuild straddles the round-trip OUTSIDE the lock. (audit G-04)
 */
export async function commitNotesIfUnchanged(
  userId: string,
  expected: MemoryNote[],
  next: MemoryNote[],
): Promise<boolean> {
  return withMemoryLock(userId, async () => {
    const current = await loadNotes(userId);
    if (notesFingerprint(current) !== notesFingerprint(expected)) return false;
    await saveNotes(userId, next);
    return true;
  });
}

/**
 * Add MANY notes in one serialized load → append → save. Skips inputs whose
 * normalized hook already exists (cheap dedup — against the current store AND
 * within the batch) and stops at the byte ceiling. Returns how many were added.
 * Used by the compaction harvest (which may surface several durable facts).
 */
export async function appendNotes(userId: string, inputs: AddNoteInput[]): Promise<{ added: number }> {
  return withMemoryLock(userId, async () => {
    const notes = await loadNotes(userId);
    const have = new Set(notes.map((n) => n.hook.trim().toLowerCase()));
    const now = Date.now();
    let cur = notes;
    let added = 0;
    for (const input of inputs) {
      const key = input.hook.trim().toLowerCase();
      if (!key || have.has(key)) continue; // dedup vs existing + within this batch
      const res = appendNote(cur, input, now);
      if ('error' in res) break; // ceiling reached — keep what fit
      cur = res.notes;
      have.add(key);
      added++;
    }
    if (added > 0) await saveNotes(userId, cur);
    return { added };
  });
}

/** Tool-facing: add a note. */
export async function remember(
  userId: string,
  input: AddNoteInput,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  return withMemoryLock(userId, async () => {
    const res = appendNote(await loadNotes(userId), input, Date.now());
    if ('error' in res) return { ok: false as const, error: res.error };
    await saveNotes(userId, res.notes);
    return { ok: true as const, id: res.id };
  });
}

/** Tool-facing: remove a note by id. Returns whether anything was removed. */
export async function forget(userId: string, id: string): Promise<boolean> {
  return withMemoryLock(userId, async () => {
    const { notes, removed } = dropNote(await loadNotes(userId), id);
    if (removed) await saveNotes(userId, notes);
    return removed;
  });
}

/** UI-facing: edit a note's hook/detail/category in place. */
export async function editNote(
  userId: string,
  id: string,
  patch: { hook: string; detail?: string; category?: string },
): Promise<{ ok: true } | { ok: false; error: string }> {
  return withMemoryLock(userId, async () => {
    const res = updateNote(await loadNotes(userId), id, patch);
    if ('error' in res) return { ok: false as const, error: res.error };
    if (res.updated) await saveNotes(userId, res.notes);
    return { ok: true as const };
  });
}

/** Tool-facing: grep the store. */
export async function recall(userId: string, query: string): Promise<MemoryNote[]> {
  return searchNotes(await loadNotes(userId), query);
}

/** Phase-2 injection: the always-loaded index string for a user (or '' if empty). */
export async function memoryIndex(userId: string): Promise<string> {
  return renderIndex(await loadNotes(userId));
}
