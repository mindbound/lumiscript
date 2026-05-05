/**
 * ============================================================================
 * LUMISCRIPT — WORLD INFO INTERCEPTOR REGISTRY
 * ============================================================================
 * Tracks per-script handlers registered via
 * `api.worldInfo.registerInterceptor()`.
 *
 * Architecture mirrors `message-content-processor-registry.ts` and
 * `macro-interceptor-registry.ts`:
 *
 *   - One single host-side `spindle.registerWorldInfoInterceptor(...)` call
 *     at backend startup, registered as the LS-extension-level interceptor.
 *   - LS scripts register many handlers via `api.worldInfo.registerInterceptor`.
 *     The single host registration fans out to all of them.
 *   - Multiplexer in `dispatch()` walks all entries in priority order and
 *     applies each handler's result to a running accumulator. Each handler
 *     sees the CURRENT state of the chain (post-prior-handler-mutations) so
 *     handlers can compose decisions cleanly.
 *
 * Result merge semantics (per Lumiverse doc):
 *   - `disabled`: vote-off precedence. Once any handler votes disabled
 *     for an id, no later `enabled` / `forced` vote can revive it. The
 *     final disabled set is the union of every handler's disabled votes.
 *   - `enabled`: un-flips a stored `disabled: true`. Has NO effect on
 *     entries any handler voted to disable.
 *   - `forced`: sets `constant: true` for this turn. Has NO effect if
 *     the entry is in the disabled set. Independent of `enabled` —
 *     forcing a stored-disabled entry requires BOTH `enabled` + `forced`.
 *   - `mutated` (content overrides): last-write-wins per entry. Applies
 *     regardless of activation state.
 *
 * Errors / timeouts are caught per-handler — the chain continues with
 * the prior accumulator forwarded, and a `spindle.log.warn` records the
 * failure with enough context for triage.
 *
 * Replay across frontend refresh: NOT NEEDED (pure worker↔host hook).
 *
 * Permission: rides on the existing `generation` gate (LumiScript already
 * declares it; no new permission machinery required — same as the other
 * interceptor-family hooks).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  WorldInfoInterceptorCtx,
  WorldInfoInterceptorEntry as PublicEntry,
  WorldInfoInterceptorMutation,
  WorldInfoInterceptorResult,
  WorldInfoInterceptorHandler,
  WorldInfoInterceptorOptions,
  RegisteredWorldInfoInterceptorInfo,
} from '../types/script.js';

// Re-export the public types so backend.ts wiring can pull them from
// here without a separate import — convenience only.
export type {
  WorldInfoInterceptorHandler,
  WorldInfoInterceptorOptions,
  RegisteredWorldInfoInterceptorInfo,
};

// ─── Internal types ──────────────────────────────────────────────────────────

/** Internal registry record. */
interface WorldInfoInterceptorRegistryEntry {
  scriptId: string;
  scriptName: string;
  id: string;
  handler: WorldInfoInterceptorHandler;
  priority: number;
  timeoutMs: number;
  registeredAt: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_PRIORITY = 100;
const DEFAULT_TIMEOUT_MS = 2000;

// ─── Registry state ──────────────────────────────────────────────────────────

const entries = new Map<string, WorldInfoInterceptorRegistryEntry>();
let registrationCounter = 0;
const autoIdCounters = new Map<string, number>();

function compositeKey(scriptId: string, id: string): string {
  return `${scriptId}:${id}`;
}

// ─── Mutators ────────────────────────────────────────────────────────────────

/**
 * Add or replace an entry. Returns the resolved id. Throws on validation
 * errors (non-function handler, non-finite priority, non-positive timeout).
 */
export function addEntry(
  scriptId: string,
  scriptName: string,
  handler: WorldInfoInterceptorHandler,
  options?: WorldInfoInterceptorOptions,
): string {
  if (typeof handler !== 'function') {
    throw new Error(
      'api.worldInfo.registerInterceptor: handler must be a function',
    );
  }

  const priority = options?.priority ?? DEFAULT_PRIORITY;
  if (!Number.isFinite(priority)) {
    throw new Error(
      `api.worldInfo.registerInterceptor: priority must be finite (got ${priority})`,
    );
  }

  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error(
      `api.worldInfo.registerInterceptor: timeoutMs must be a positive finite number (got ${timeoutMs})`,
    );
  }

  let id = options?.id;
  if (!id || typeof id !== 'string') {
    const next = (autoIdCounters.get(scriptId) ?? 0) + 1;
    autoIdCounters.set(scriptId, next);
    id = `auto-${next}`;
  }

  const entry: WorldInfoInterceptorRegistryEntry = {
    scriptId,
    scriptName,
    id,
    handler,
    priority,
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

/** Test-only: wipe ALL state. Mirrors `macro-interceptor-registry.__reset`. */
export function __reset(): void {
  entries.clear();
  autoIdCounters.clear();
  registrationCounter = 0;
}

export function hasAnyEntry(): boolean {
  return entries.size > 0;
}

// ─── Readers ─────────────────────────────────────────────────────────────────

export function listAll(): RegisteredWorldInfoInterceptorInfo[] {
  const out: RegisteredWorldInfoInterceptorInfo[] = [];
  for (const e of entries.values()) {
    out.push({
      scriptId: e.scriptId,
      scriptName: e.scriptName,
      id: e.id,
      priority: e.priority,
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
 * stale ones from the registry. Mirrors `macro-interceptor-registry.
 * diffAndCleanStale` — see that function for the design rationale.
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

function sortedEntries(): WorldInfoInterceptorRegistryEntry[] {
  const arr = [...entries.values()];
  arr.sort(
    (a, b) =>
      a.priority - b.priority || a.registeredAt - b.registeredAt,
  );
  return arr;
}

function runWithTimeout(
  handler: WorldInfoInterceptorHandler,
  ctx: WorldInfoInterceptorCtx,
  timeoutMs: number,
): Promise<WorldInfoInterceptorResult | void> {
  return new Promise<WorldInfoInterceptorResult | void>((resolve, reject) => {
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
          reject(err instanceof Error ? err : new Error(String(err)));
        },
      );
  });
}

/**
 * Build a fresh entries list reflecting the current accumulator state on
 * top of the initial `ctx.entries`. Each handler in the chain sees this
 * "current view" so handlers can compose cleanly.
 *
 * Apply order:
 *   1. mutated.content overrides the entry's content
 *   2. disabled set forces `disabled: true`
 *   3. enabled set un-flips stored `disabled: true` (only if NOT in disabled set)
 *   4. forced set sets `constant: true` (only if NOT in disabled set)
 */
function applyAccumulator(
  initialEntries: readonly PublicEntry[],
  acc: ChainAccumulator,
): PublicEntry[] {
  return initialEntries.map((e) => {
    const next: { -readonly [K in keyof PublicEntry]: PublicEntry[K] } = { ...e };
    if (acc.mutated.has(e.id)) {
      next.content = acc.mutated.get(e.id)!;
    }
    if (acc.disabled.has(e.id)) {
      next.disabled = true;
    } else {
      if (acc.enabled.has(e.id)) next.disabled = false;
      if (acc.forced.has(e.id))  next.constant = true;
    }
    return next;
  });
}

interface ChainAccumulator {
  disabled: Set<string>;
  enabled:  Set<string>;
  forced:   Set<string>;
  mutated:  Map<string, string>;
}

/**
 * Walk all registered entries in priority order, threading each handler's
 * decisions through a chain accumulator. Returns the final aggregated
 * result, or `undefined` to signal full pass-through (matches the host's
 * chain semantics).
 */
export async function dispatch(
  initial: WorldInfoInterceptorCtx,
): Promise<WorldInfoInterceptorResult | void> {
  if (entries.size === 0) return;

  const ordered = sortedEntries();
  const acc: ChainAccumulator = {
    disabled: new Set(),
    enabled:  new Set(),
    forced:   new Set(),
    mutated:  new Map(),
  };
  let touched = false;

  for (const entry of ordered) {
    // Build a fresh ctx with entries reflecting the current accumulator
    // so this handler sees the prior handlers' decisions.
    const handlerCtx: WorldInfoInterceptorCtx = {
      ...initial,
      entries: applyAccumulator(initial.entries, acc),
    };

    let result: WorldInfoInterceptorResult | void;
    const startedAt = Date.now();
    try {
      result = await runWithTimeout(entry.handler, handlerCtx, entry.timeoutMs);
    } catch (err) {
      const ms = Date.now() - startedAt;
      const isTimeout =
        err instanceof Error && err.message === 'LS_INTERCEPTOR_TIMEOUT';
      const reason = err instanceof Error ? err.message : String(err);
      spindle.log.warn(
        `[LumiScript] worldInfo interceptor ${entry.scriptName}/${entry.id} ` +
        `${isTimeout ? `timed out after ${ms}ms` : `failed: ${reason}`} — ` +
        `forwarding prior accumulator to next handler`,
      );
      continue;
    }

    if (!result || typeof result !== 'object') continue;

    // Disabled votes: stick. Add to set; future enabled/forced are
    // gated against this set in `applyAccumulator`.
    if (Array.isArray(result.disabled)) {
      for (const id of result.disabled) {
        if (typeof id === 'string' && id.length > 0) {
          acc.disabled.add(id);
          touched = true;
        }
      }
    }

    if (Array.isArray(result.enabled)) {
      for (const id of result.enabled) {
        if (typeof id === 'string' && id.length > 0) {
          acc.enabled.add(id);
          touched = true;
        }
      }
    }

    if (Array.isArray(result.forced)) {
      for (const id of result.forced) {
        if (typeof id === 'string' && id.length > 0) {
          acc.forced.add(id);
          touched = true;
        }
      }
    }

    // Mutated entries: last-write-wins per entry id.
    if (Array.isArray(result.mutated)) {
      for (const m of result.mutated) {
        if (m && typeof m === 'object'
          && typeof (m as WorldInfoInterceptorMutation).id === 'string'
          && typeof (m as WorldInfoInterceptorMutation).content === 'string'
        ) {
          acc.mutated.set(
            (m as WorldInfoInterceptorMutation).id,
            (m as WorldInfoInterceptorMutation).content,
          );
          touched = true;
        }
      }
    }
  }

  if (!touched) return;

  // Build final aggregated result. Apply the gating rules:
  //   - disabled: full disabled set (vote-off precedence)
  //   - enabled: only ids NOT in disabled set
  //   - forced:  only ids NOT in disabled set
  //   - mutated: the last-write-wins map, as an array
  const finalEnabled = [...acc.enabled].filter((id) => !acc.disabled.has(id));
  const finalForced  = [...acc.forced ].filter((id) => !acc.disabled.has(id));
  const finalMutated = [...acc.mutated.entries()].map(([id, content]) => ({ id, content }));

  const out: { disabled?: string[]; enabled?: string[]; forced?: string[]; mutated?: { id: string; content: string }[] } = {};
  if (acc.disabled.size > 0) out.disabled = [...acc.disabled];
  if (finalEnabled.length > 0) out.enabled = finalEnabled;
  if (finalForced.length  > 0) out.forced  = finalForced;
  if (finalMutated.length > 0) out.mutated = finalMutated;
  return out;
}
