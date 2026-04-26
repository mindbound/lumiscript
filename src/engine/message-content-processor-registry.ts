/**
 * ============================================================================
 * LUMISCRIPT — MESSAGE CONTENT PROCESSOR REGISTRY
 * ============================================================================
 * Tracks per-script handlers registered via
 * `api.chat.registerContentProcessor()`.
 *
 * Architecture mirrors `macro-interceptor-registry.ts` exactly — see the
 * comment block there for the multiplexer shape and host-side budget
 * reasoning. The differences are:
 *
 *   - Filter is on `origin` (`'create' | 'update' | 'swipe_add' | 'swipe_update'`)
 *     rather than phase + template-marker.
 *   - The chained value is a `{ content, extra }` patch shape, not a bare
 *     string. Each handler sees the previous handler's output applied; the
 *     final accumulated patch is what we return to the host.
 *   - `extra` shallow-merges across the chain (omitted keys preserved).
 *   - Per host docs: `extra` is IGNORED on swipe origins (swipes share the
 *     parent message's `extra`). We still propagate it through the chain so
 *     downstream handlers see it, but it's dropped from the final return
 *     value when origin is `'swipe_add'` / `'swipe_update'`.
 *
 * Replay across frontend refresh: NOT NEEDED (pure worker↔host hook).
 *
 * Permission: rides on the existing `chat_mutation` gate (LumiScript already
 * declares this; no new permission machinery required).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  MessageContentProcessorCtxDTO,
  MessageContentProcessorOrigin,
  MessageContentProcessorResultDTO,
} from 'lumiverse-spindle-types';

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * User-supplied content processor handler. Sync or async. Returns either:
 *  - a partial patch `{ content?, extra? }` to modify the write.
 *  - `void` / `undefined` to pass through unchanged.
 */
export type MessageContentProcessorHandler = (
  ctx: MessageContentProcessorCtxDTO,
) =>
  | MessageContentProcessorResultDTO
  | void
  | Promise<MessageContentProcessorResultDTO | void>;

/** Registration options — see `api.chat.registerContentProcessor`. */
export interface MessageContentProcessorOptions {
  /** Stable identifier. Re-registration with the same `(scriptId, id)` replaces. */
  id?: string;
  /** Lower runs first. Default 100. */
  priority?: number;
  /**
   * Restrict handler to specific origins. Default: all four
   * (`'create'`, `'update'`, `'swipe_add'`, `'swipe_update'`). Pre-filtered
   * before invocation — non-matching contexts skip without calling the
   * handler at all.
   */
  origin?: MessageContentProcessorOrigin | MessageContentProcessorOrigin[];
  /**
   * Per-invocation soft timeout in ms. Default 2000. Host's outer 10s
   * budget is shared across all LS scripts, so each handler should stay
   * well under it.
   */
  timeoutMs?: number;
}

/** Internal registry record. */
export interface MessageContentProcessorEntry {
  scriptId: string;
  scriptName: string;
  id: string;
  handler: MessageContentProcessorHandler;
  priority: number;
  origins: ReadonlySet<MessageContentProcessorOrigin> | null;
  timeoutMs: number;
  registeredAt: number;
}

/** Snapshot for diagnostics surfaces. */
export interface RegisteredMessageContentProcessorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  origins: MessageContentProcessorOrigin[] | null;
  timeoutMs: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_PRIORITY = 100;
const DEFAULT_TIMEOUT_MS = 2000;

const ALL_ORIGINS: ReadonlyArray<MessageContentProcessorOrigin> = [
  'create',
  'update',
  'swipe_add',
  'swipe_update',
];

// ─── Registry state ──────────────────────────────────────────────────────────

const entries = new Map<string, MessageContentProcessorEntry>();
let registrationCounter = 0;
const autoIdCounters = new Map<string, number>();

function compositeKey(scriptId: string, id: string): string {
  return `${scriptId}:${id}`;
}

function normaliseOrigins(
  origin: MessageContentProcessorOptions['origin'],
): ReadonlySet<MessageContentProcessorOrigin> | null {
  if (origin === undefined) return null;
  const arr = Array.isArray(origin) ? origin : [origin];
  if (arr.length === 0) return null;
  // Silently filter unknown origins — same forward-compat reasoning as
  // macro-interceptor-registry's phase normalisation.
  const valid = arr.filter((o): o is MessageContentProcessorOrigin =>
    ALL_ORIGINS.includes(o as MessageContentProcessorOrigin),
  );
  if (valid.length === 0) return null;
  return new Set(valid);
}

// ─── Mutators ────────────────────────────────────────────────────────────────

/**
 * Add or replace an entry. Returns the resolved id. Throws on validation
 * errors (non-function handler, non-finite priority, non-positive timeout).
 */
export function addEntry(
  scriptId: string,
  scriptName: string,
  handler: MessageContentProcessorHandler,
  options?: MessageContentProcessorOptions,
): string {
  if (typeof handler !== 'function') {
    throw new Error(
      'api.chat.registerContentProcessor: handler must be a function',
    );
  }

  const priority = options?.priority ?? DEFAULT_PRIORITY;
  if (!Number.isFinite(priority)) {
    throw new Error(
      `api.chat.registerContentProcessor: priority must be finite (got ${priority})`,
    );
  }

  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error(
      `api.chat.registerContentProcessor: timeoutMs must be a positive finite number (got ${timeoutMs})`,
    );
  }

  let id = options?.id;
  if (!id || typeof id !== 'string') {
    const next = (autoIdCounters.get(scriptId) ?? 0) + 1;
    autoIdCounters.set(scriptId, next);
    id = `auto-${next}`;
  }

  const entry: MessageContentProcessorEntry = {
    scriptId,
    scriptName,
    id,
    handler,
    priority,
    origins: normaliseOrigins(options?.origin),
    timeoutMs,
    registeredAt: ++registrationCounter,
  };
  entries.set(compositeKey(scriptId, id), entry);
  return id;
}

export function removeEntry(scriptId: string, id: string): boolean {
  const k = compositeKey(scriptId, id);
  const entry = entries.get(k);
  if (!entry || entry.scriptId !== scriptId) return false;
  return entries.delete(k);
}

export function clearByScriptId(scriptId: string): void {
  for (const [k, entry] of entries) {
    if (entry.scriptId === scriptId) entries.delete(k);
  }
  autoIdCounters.delete(scriptId);
}

export function hasAnyEntry(): boolean {
  return entries.size > 0;
}

// ─── Readers ─────────────────────────────────────────────────────────────────

export function listAll(): RegisteredMessageContentProcessorInfo[] {
  const out: RegisteredMessageContentProcessorInfo[] = [];
  for (const e of entries.values()) {
    out.push({
      scriptId: e.scriptId,
      scriptName: e.scriptName,
      id: e.id,
      priority: e.priority,
      origins: e.origins ? [...e.origins] : null,
      timeoutMs: e.timeoutMs,
    });
  }
  return out;
}

export function countByScriptId(scriptId: string): number {
  let n = 0;
  for (const e of entries.values()) {
    if (e.scriptId === scriptId) n++;
  }
  return n;
}

/**
 * Return the ids of all entries owned by a script. Pre-execution snapshot
 * for the auto-cleanup diff — see `macro-interceptor-registry`'s
 * `listIdsByScriptId` for the shared rationale.
 */
export function listIdsByScriptId(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of entries.values()) {
    if (entry.scriptId === scriptId) ids.push(entry.id);
  }
  return ids;
}

// ─── Post-execution auto-cleanup ────────────────────────────────────────────

/**
 * Diff pre-execution ids against ids registered during the run. Drops
 * stale ones from the registry and returns their ids. Mirrors
 * `macro-interceptor-registry.diffAndCleanStale` exactly — see that
 * function for the design rationale and the no-host-unregister-needed
 * note.
 */
export function diffAndCleanStale(
  scriptId: string,
  preRunIds: readonly string[],
  registeredThisRun: ReadonlySet<string>,
): string[] {
  const stale: string[] = [];
  for (const id of preRunIds) {
    if (registeredThisRun.has(id)) continue;
    const k = compositeKey(scriptId, id);
    const entry = entries.get(k);
    if (entry && entry.scriptId === scriptId) {
      entries.delete(k);
      stale.push(id);
    }
  }
  return stale;
}

// ─── Dispatch (multiplexer) ──────────────────────────────────────────────────

function sortedEntries(): MessageContentProcessorEntry[] {
  const arr = [...entries.values()];
  arr.sort(
    (a, b) =>
      a.priority - b.priority || a.registeredAt - b.registeredAt,
  );
  return arr;
}

function entryMatches(
  entry: MessageContentProcessorEntry,
  origin: MessageContentProcessorOrigin,
): boolean {
  if (entry.origins && !entry.origins.has(origin)) return false;
  return true;
}

function runWithTimeout(
  handler: MessageContentProcessorHandler,
  ctx: MessageContentProcessorCtxDTO,
  timeoutMs: number,
): Promise<MessageContentProcessorResultDTO | void> {
  return new Promise<MessageContentProcessorResultDTO | void>((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error('LS_PROCESSOR_TIMEOUT'));
    }, timeoutMs);

    Promise.resolve()
      .then(() => handler(ctx))
      .then(
        (val) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(val);
        },
        (err) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          reject(err);
        },
      );
  });
}

/**
 * Build a fresh ctx with the threaded content + merged extra. Other fields
 * (chatId, messageId, origin, swipeIndex, userId) are unchanged from the
 * original.
 */
function ctxWith(
  base: MessageContentProcessorCtxDTO,
  content: string,
  extra: Record<string, unknown> | undefined,
): MessageContentProcessorCtxDTO {
  return {
    chatId: base.chatId,
    messageId: base.messageId,
    content,
    extra,
    origin: base.origin,
    swipeIndex: base.swipeIndex,
    userId: base.userId,
  };
}

/**
 * Whether `origin` is one of the swipe variants where the host ignores
 * `extra` patches (swipes share the parent message's `extra`).
 */
function originIgnoresExtra(origin: MessageContentProcessorOrigin): boolean {
  return origin === 'swipe_add' || origin === 'swipe_update';
}

/**
 * Walk all registered entries, threading content + extra through. Returns
 * the final patch (or `undefined` for full pass-through).
 *
 * `extra` semantics — IMPORTANT:
 *  - The host treats our returned `extra` as a SHALLOW-MERGE PATCH onto the
 *    row's existing `extra`. Returning the full merged state would round-
 *    trip `initial.extra`'s pristine keys redundantly (and worse, write them
 *    back even when no handler touched them — surprising behaviour for any
 *    concurrent host-side mutation between handler input and DB write).
 *  - So we track DELTA only: keys that handlers ADDED or OVERWROTE.
 *  - Each handler sees a fresh ctx with the MERGED VIEW (`initial.extra` +
 *    accumulated delta) — so chained handlers reading existing keys get
 *    consistent state regardless of who set them.
 *  - At the end we return only the delta as `extra`. Host merges it onto
 *    the row.
 *  - On swipe origins the host drops returned `extra` entirely (swipes share
 *    the parent message's `extra`), so we omit it from the final return
 *    value to match host semantics. The merged view is still threaded
 *    through the chain so handlers see consistent state during dispatch.
 */
export async function dispatch(
  initial: MessageContentProcessorCtxDTO,
): Promise<MessageContentProcessorResultDTO | void> {
  if (entries.size === 0) return;

  const ordered = sortedEntries();
  let currentContent = initial.content;
  /** Delta accumulator — only keys explicitly added/overwritten by handlers. */
  let extraDelta: Record<string, unknown> = {};
  let contentMutated = false;
  let extraMutated = false;

  for (const entry of ordered) {
    if (!entryMatches(entry, initial.origin)) continue;

    // Build the merged view for this handler: initial.extra + delta-so-far.
    // Allocate the merged object only when there's actually a delta to apply
    // (zero-allocation fast path for the common no-extra-modifications case).
    const viewExtra: Record<string, unknown> | undefined = extraMutated
      ? { ...(initial.extra ?? {}), ...extraDelta }
      : initial.extra;

    const handlerCtx = ctxWith(initial, currentContent, viewExtra);
    let result: MessageContentProcessorResultDTO | void;
    const startedAt = Date.now();
    try {
      result = await runWithTimeout(entry.handler, handlerCtx, entry.timeoutMs);
    } catch (err) {
      const ms = Date.now() - startedAt;
      const isTimeout =
        err instanceof Error && err.message === 'LS_PROCESSOR_TIMEOUT';
      const reason = isTimeout
        ? `timed out after ${ms}ms (limit ${entry.timeoutMs}ms)`
        : `threw: ${err instanceof Error ? err.message : String(err)}`;
      spindle.log.warn(
        `[LumiScript] message content processor "${entry.id}" (script "${entry.scriptName}") ${reason} — skipping handler, chain continues`,
      );
      continue;
    }

    if (result == null) continue; // void / undefined → pass through

    if (typeof result.content === 'string') {
      currentContent = result.content;
      contentMutated = true;
    }
    if (result.extra && typeof result.extra === 'object') {
      extraDelta = { ...extraDelta, ...result.extra };
      extraMutated = true;
    }
  }

  if (!contentMutated && !extraMutated) return;

  const out: MessageContentProcessorResultDTO = {};
  if (contentMutated) out.content = currentContent;
  // Drop delta on swipe origins (host ignores returned `extra` there anyway).
  if (extraMutated && !originIgnoresExtra(initial.origin)) {
    out.extra = extraDelta;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — clear all state. Tests only. */
export function __reset(): void {
  entries.clear();
  autoIdCounters.clear();
  registrationCounter = 0;
}
