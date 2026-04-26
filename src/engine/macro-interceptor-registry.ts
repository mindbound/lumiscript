/**
 * ============================================================================
 * LUMISCRIPT — MACRO INTERCEPTOR REGISTRY
 * ============================================================================
 * Tracks per-script handlers registered via `api.macros.registerInterceptor()`.
 *
 * Architecture:
 *
 *   ┌─ host (spindle) ──────────────────────────────────────────────────────┐
 *   │ spindle.registerMacroInterceptor(lsHouseHandler, priority=100)        │
 *   │   ↑ ONE registration, made at LS backend startup (backend.ts)         │
 *   └────────────────┬──────────────────────────────────────────────────────┘
 *                    │ host calls lsHouseHandler(ctx) per evaluate() pass
 *                    ▼
 *   ┌─ this module (LS multiplexer) ────────────────────────────────────────┐
 *   │ Map<key, MacroInterceptorEntry>                                       │
 *   │ dispatch(ctx): walks all entries, sorted by priority then registration │
 *   │   order; applies pre-filters (phase, matchTemplate); calls handler    │
 *   │   inside per-handler timeout; threads transformed template through    │
 *   │   the chain; returns the final value (or undefined for pass-through). │
 *   └─ ▲ ───────────────────────────────────────────────────────────────────┘
 *      │ scripts register/remove via api.macros.registerInterceptor (Phase 2)
 *
 * The host's contract:
 *   - "Second registration replaces the first" applies to ONE extension's
 *     registration with the host. We register exactly once per LS lifetime;
 *     the multiplexer fan-out happens entirely inside this registry.
 *   - 10-second host budget per invocation is shared across ALL LS scripts'
 *     handlers. To stay under, each per-script handler runs inside its own
 *     soft timeout (default 2s; configurable). On timeout/throw the chain
 *     forwards the prior template and logs a `spindle.log.warn`.
 *
 * Replay across frontend refresh: NOT NEEDED. Macro interceptors are pure
 * worker↔host hooks with no frontend reflection. The Bun worker (and this
 * registry) survives refresh; the host's single registration also persists.
 * Documented in backend.ts wiring.
 *
 * Lifecycle:
 *   - addEntry: insert or replace by `(scriptId, id)` — replace clears the
 *     prior handler closure, mirroring `tool-store` / `macro-store` semantics
 *     so trigger scripts can re-register naively.
 *   - removeEntry: explicit per-handle cleanup (returned via the API surface).
 *   - clearByScriptId: bulk-drop all entries owned by a script (disable /
 *     delete / reload teardown).
 *   - dispatch: invoked by the LS-house handler in backend.ts.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  MacroInterceptorCtxDTO,
  MacroInterceptorPhase,
} from 'lumiverse-spindle-types';

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * User-supplied macro interceptor handler. Sync or async. Returns either:
 *  - a transformed template `string` to replace the input for downstream
 *    handlers + the host's parser.
 *  - `void` / `undefined` to pass through unchanged.
 */
export type MacroInterceptorHandler = (
  ctx: MacroInterceptorCtxDTO,
) => string | void | Promise<string | void>;

/** Registration options — see `api.macros.registerInterceptor`. */
export interface MacroInterceptorOptions {
  /**
   * Stable identifier for this handler. Re-registration with the same
   * `(scriptId, id)` replaces the prior entry. Auto-generated if omitted
   * — auto-generated entries can only be removed via the returned handle
   * or the script's lifecycle teardown.
   */
  id?: string;
  /** Lower values run first. Default 100. */
  priority?: number;
  /**
   * Restrict the handler to specific evaluation phases. Default: all phases
   * (`'prompt'`, `'display'`, `'response'`, `'other'`). Pre-filtered before
   * the handler runs — non-matching contexts skip without invoking the
   * handler at all.
   */
  phase?: MacroInterceptorPhase | MacroInterceptorPhase[];
  /**
   * Pre-filter on template content. Skip the handler unless the template
   * contains the marker(s).
   *  - `string`: simple `includes` check.
   *  - `string[]`: any-of (skip unless at least one element is present).
   *  - `RegExp`: skip unless the regex matches.
   *
   * The most common use case is gating on a macro family namespace
   * (`'{{tracker.'` or `['{{tracker.', '{{state.']`) so handlers don't
   * have to write the same `if (!ctx.template.includes(...)) return`
   * boilerplate. Default: no filter.
   */
  matchTemplate?: string | string[] | RegExp;
  /**
   * Per-invocation soft timeout in milliseconds. On timeout the handler
   * is skipped (chain forwards the prior template) and a warning is
   * logged. Default: 2000. The host's outer 10-second budget is shared
   * across all LS scripts' handlers, so each handler should stay well
   * under it.
   */
  timeoutMs?: number;
}

/** Internal registry record. */
export interface MacroInterceptorEntry {
  scriptId: string;
  scriptName: string;
  id: string;
  handler: MacroInterceptorHandler;
  priority: number;
  /** `null` = no phase filter. Otherwise allowed phases as a Set for O(1) lookup. */
  phases: ReadonlySet<MacroInterceptorPhase> | null;
  /**
   * `null` = no template filter. Strings are matched via `includes` (any-of
   * for arrays); RegExp via `test`. Stored as a normalised array of strings
   * OR the original RegExp.
   */
  matchTemplate: ReadonlyArray<string> | RegExp | null;
  timeoutMs: number;
  /** Auto-incrementing tie-breaker for same-priority entries. */
  registeredAt: number;
}

/**
 * Snapshot returned by `listAll()`. Used for diagnostics surfaces (Status tab,
 * `api.macros.listInterceptors()`). Excludes the live handler reference.
 */
export interface RegisteredMacroInterceptorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  phases: MacroInterceptorPhase[] | null;
  matchTemplate: string[] | string | null;
  timeoutMs: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_PRIORITY = 100;
const DEFAULT_TIMEOUT_MS = 2000;

const ALL_PHASES: ReadonlyArray<MacroInterceptorPhase> = [
  'prompt',
  'display',
  'response',
  'other',
];

// ─── Registry state ──────────────────────────────────────────────────────────

/** `${scriptId}:${id}` → entry */
const entries = new Map<string, MacroInterceptorEntry>();

/** Monotonic registration counter — used as the tie-breaker for equal priority. */
let registrationCounter = 0;

/** Auto-id counter — bumps on every auto-generated id, scoped per script. */
const autoIdCounters = new Map<string, number>();

function compositeKey(scriptId: string, id: string): string {
  return `${scriptId}:${id}`;
}

function normalisePhases(
  phase: MacroInterceptorOptions['phase'],
): ReadonlySet<MacroInterceptorPhase> | null {
  if (phase === undefined) return null;
  const arr = Array.isArray(phase) ? phase : [phase];
  if (arr.length === 0) return null;
  // Validate — silently filter unknown phases rather than throw, so older
  // LS running against a newer host that adds a phase doesn't reject the
  // registration. Unknown phases are simply unmatchable from this build's POV.
  const valid = arr.filter((p): p is MacroInterceptorPhase =>
    ALL_PHASES.includes(p as MacroInterceptorPhase),
  );
  if (valid.length === 0) return null;
  return new Set(valid);
}

function normaliseMatchTemplate(
  match: MacroInterceptorOptions['matchTemplate'],
): ReadonlyArray<string> | RegExp | null {
  if (match === undefined) return null;
  if (match instanceof RegExp) return match;
  if (typeof match === 'string') return [match];
  if (Array.isArray(match)) {
    const trimmed = match.filter((s) => typeof s === 'string' && s.length > 0);
    return trimmed.length > 0 ? trimmed : null;
  }
  return null;
}

// ─── Mutators ────────────────────────────────────────────────────────────────

/**
 * Add or replace an entry. Returns the resolved id (auto-generated when not
 * supplied), so the caller can hand it back through the API surface for
 * later `remove()` calls.
 *
 * Throws on validation errors:
 *   - non-function `handler`
 *   - non-finite / negative `priority`
 *   - non-finite / non-positive `timeoutMs`
 */
export function addEntry(
  scriptId: string,
  scriptName: string,
  handler: MacroInterceptorHandler,
  options?: MacroInterceptorOptions,
): string {
  if (typeof handler !== 'function') {
    throw new Error(
      'api.macros.registerInterceptor: handler must be a function',
    );
  }

  const priority = options?.priority ?? DEFAULT_PRIORITY;
  if (!Number.isFinite(priority)) {
    throw new Error(
      `api.macros.registerInterceptor: priority must be finite (got ${priority})`,
    );
  }

  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error(
      `api.macros.registerInterceptor: timeoutMs must be a positive finite number (got ${timeoutMs})`,
    );
  }

  let id = options?.id;
  if (!id || typeof id !== 'string') {
    const next = (autoIdCounters.get(scriptId) ?? 0) + 1;
    autoIdCounters.set(scriptId, next);
    id = `auto-${next}`;
  }

  const entry: MacroInterceptorEntry = {
    scriptId,
    scriptName,
    id,
    handler,
    priority,
    phases: normalisePhases(options?.phase),
    matchTemplate: normaliseMatchTemplate(options?.matchTemplate),
    timeoutMs,
    registeredAt: ++registrationCounter,
  };
  entries.set(compositeKey(scriptId, id), entry);
  return id;
}

/**
 * Remove an entry by `(scriptId, id)`. Returns `true` if it was present,
 * `false` otherwise. Ownership-scoped — passing a `scriptId` that isn't the
 * owner yields a silent no-op and returns `false`.
 */
export function removeEntry(scriptId: string, id: string): boolean {
  const k = compositeKey(scriptId, id);
  const entry = entries.get(k);
  if (!entry || entry.scriptId !== scriptId) return false;
  return entries.delete(k);
}

/** Drop every entry owned by a script. Bulk teardown for disable/delete/reload. */
export function clearByScriptId(scriptId: string): void {
  for (const [k, entry] of entries) {
    if (entry.scriptId === scriptId) entries.delete(k);
  }
  autoIdCounters.delete(scriptId);
}

/** Whether any entries are currently registered (across all scripts). */
export function hasAnyEntry(): boolean {
  return entries.size > 0;
}

// ─── Readers ─────────────────────────────────────────────────────────────────

/** Snapshot of all entries for diagnostic / listing surfaces. */
export function listAll(): RegisteredMacroInterceptorInfo[] {
  const out: RegisteredMacroInterceptorInfo[] = [];
  for (const e of entries.values()) {
    out.push({
      scriptId: e.scriptId,
      scriptName: e.scriptName,
      id: e.id,
      priority: e.priority,
      phases: e.phases ? [...e.phases] : null,
      matchTemplate:
        e.matchTemplate instanceof RegExp
          ? String(e.matchTemplate)
          : e.matchTemplate
            ? [...e.matchTemplate]
            : null,
      timeoutMs: e.timeoutMs,
    });
  }
  return out;
}

/** Number of live entries owned by a given script. */
export function countByScriptId(scriptId: string): number {
  let n = 0;
  for (const e of entries.values()) {
    if (e.scriptId === scriptId) n++;
  }
  return n;
}

/**
 * Return the ids of all entries owned by a given script. Used for the
 * pre-execution snapshot in the auto-cleanup diff: callers compare this
 * list against ids registered during the run to detect stale entries
 * that the new code no longer creates.
 *
 * Mirrors `tool-store.listNamesByScriptId` / `macro-store.listNamesByScriptId`.
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
 * Diff a pre-execution id snapshot against the ids actively registered
 * during the run. Any id that existed before the run but was NOT
 * re-registered is stale (the new code no longer creates it) and gets
 * dropped from the registry.
 *
 * Returns the dropped ids so the caller can log them. Unlike
 * `diffAndCleanStaleTools` / `diffAndCleanStaleMacros`, NO host-side
 * `unregister*` call is needed — LumiScript's single LS-house
 * registration with the host stays live across all script lifecycles;
 * dropping ids from the registry alone means subsequent `dispatch()`
 * passes simply skip them.
 *
 * Defensive against cross-script id reuse: only drops if the entry is
 * still owned by `scriptId`, not some other script that happened to
 * register with the same id during this run (impossible under normal
 * usage since ids are owner-scoped via the composite key, but the
 * ownership check makes the invariant explicit).
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

/**
 * Sort entries by priority ASC, then registration order ASC. Stable for equal
 * priority so behaviour is deterministic across LS sessions.
 */
function sortedEntries(): MacroInterceptorEntry[] {
  const arr = [...entries.values()];
  arr.sort(
    (a, b) =>
      a.priority - b.priority || a.registeredAt - b.registeredAt,
  );
  return arr;
}

/** Pre-filter check: phase + template marker. Returns true if the entry should run. */
function entryMatches(
  entry: MacroInterceptorEntry,
  phase: MacroInterceptorPhase,
  template: string,
): boolean {
  if (entry.phases && !entry.phases.has(phase)) return false;
  const m = entry.matchTemplate;
  if (m === null) return true;
  if (m instanceof RegExp) return m.test(template);
  // string[] — any-of
  for (const s of m) {
    if (template.includes(s)) return true;
  }
  return false;
}

/**
 * Race a handler invocation against a soft timeout. Resolves to the handler's
 * result on success, or rejects with `Error('LS_INTERCEPTOR_TIMEOUT')` when
 * the timeout fires first. The timer is cleared on settle to avoid keeping
 * the worker alive for residual handles.
 */
function runWithTimeout(
  handler: MacroInterceptorHandler,
  ctx: MacroInterceptorCtxDTO,
  timeoutMs: number,
): Promise<string | void> {
  return new Promise<string | void>((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error('LS_INTERCEPTOR_TIMEOUT'));
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
 * Build a fresh ctx for the next handler in the chain, threading the
 * possibly-transformed template into it. All other fields (env, commit,
 * phase, sourceHint, userId) are unchanged from the original ctx.
 */
function ctxWith(
  base: MacroInterceptorCtxDTO,
  template: string,
): MacroInterceptorCtxDTO {
  return {
    template,
    env: base.env,
    commit: base.commit,
    phase: base.phase,
    sourceHint: base.sourceHint,
    userId: base.userId,
  };
}

/**
 * Walk all registered entries, applying each handler's transform in order.
 * Returns the final transformed template if any handler returned a string,
 * or `undefined` to signal pass-through (matches the host's chain semantics).
 *
 * Errors / timeouts are caught per-handler — the chain continues with the
 * prior template forwarded, and a `spindle.log.warn` records the failure
 * with enough context for triage.
 */
export async function dispatch(
  initial: MacroInterceptorCtxDTO,
): Promise<string | void> {
  if (entries.size === 0) return;

  const ordered = sortedEntries();
  let currentTemplate = initial.template;
  let mutated = false;

  for (const entry of ordered) {
    if (!entryMatches(entry, initial.phase, currentTemplate)) continue;

    const handlerCtx = ctxWith(initial, currentTemplate);
    let result: string | void;
    const startedAt = Date.now();
    try {
      result = await runWithTimeout(entry.handler, handlerCtx, entry.timeoutMs);
    } catch (err) {
      const ms = Date.now() - startedAt;
      const isTimeout =
        err instanceof Error && err.message === 'LS_INTERCEPTOR_TIMEOUT';
      const reason = isTimeout
        ? `timed out after ${ms}ms (limit ${entry.timeoutMs}ms)`
        : `threw: ${err instanceof Error ? err.message : String(err)}`;
      spindle.log.warn(
        `[LumiScript] macro interceptor "${entry.id}" (script "${entry.scriptName}") ${reason} — skipping handler, chain continues`,
      );
      continue;
    }

    if (typeof result === 'string') {
      currentTemplate = result;
      mutated = true;
    }
    // void / undefined → pass through, current template unchanged
  }

  return mutated ? currentTemplate : undefined;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — clear all state. Tests only. */
export function __reset(): void {
  entries.clear();
  autoIdCounters.clear();
  registrationCounter = 0;
}
