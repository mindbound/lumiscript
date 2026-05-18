/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT STORAGE API
 * ============================================================================
 * Implements api.scriptStorage — the script-facing in-memory key/value store.
 *
 * No permission required. Closes the UX gap around per-script session state
 * that was previously covered by the `globalThis.__lumiscript_script_<id>_*`
 * convention (verbose, easy to forget the prefix).
 *
 * **Architecture choice — in-memory only.** Values live in a single
 * module-scope `Map<scriptId, Map<key, value>>` on the backend. No disk
 * persistence. Differentiates from `api.variables.local` (which IS
 * disk-persisted via `spindle.userStorage`) — scripts pick by intent:
 * "remember this across restarts" → variables, "track session state" →
 * scriptStorage.
 *
 * **Lifecycle**:
 *   - Survives worker eviction + respawn (parent-side state, not in worker
 *     memory). No state-sync-on-respawn integration needed.
 *   - Survives script edit / hot-reload (same as the `globalThis`
 *     convention — preserves dev iteration state).
 *   - Cleared on script disable / delete via `clearScriptStorageForScript`,
 *     wired from `backend.ts`'s `teardownDisabledScript`.
 *   - Lost on full backend restart (no persistence).
 *
 * **Size cap**: 1 MB per script on the JSON-serialised size of the full
 * map. Checked on every `set()`. Throws cleanly with a "capacity exceeded"
 * error when the write would cross the cap. The cap is a conscious
 * "small bag of session flags" framing — scripts hitting it should
 * migrate to `api.variables.*` or `api.db.*`.
 *
 * **Broadcasts**: every mutation fires an `ls:scriptStorage:*` event on
 * the broadcast bus so debug / admin tooling can react without polling.
 * `ls:*` prefix avoids the eviction-pinning policy (engine-lifecycle
 * subs don't pin their workers).
 *
 * @since v1.0.0-rc.6
 */

import type { ScriptStorageAPI } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { emit as busEmit } from '../broadcast-bus.js';

// ─── Module-scope state ──────────────────────────────────────────────────────

/**
 * Per-script in-memory key/value slots. Outer key is `scriptId`, inner
 * key is the user-supplied storage key. Values must be JSON-serialisable
 * (the IPC layer enforces structurally — passing functions / symbols /
 * DOM elements throws at the boundary).
 *
 * Cleared per-script entry on `clearScriptStorageForScript(scriptId)`
 * (called from `backend.ts:teardownDisabledScript`). Cleared wholesale
 * on `__resetForTests()` for test isolation.
 */
const scriptStorageMap = new Map<string, Map<string, unknown>>();

/**
 * Per-script last-mutation timestamp (`Date.now()` ms). Bumped on every
 * `set` / successful `delete` / non-empty `clear`. Dropped when the
 * script's slot is dropped (delete-of-last-entry, clear, teardown). Used
 * by the Storage-tab admin view to sort scripts by recency and to show
 * "modified X ago" in each row.
 *
 * Kept as a parallel Map (rather than folded into the slot) so that the
 * common path — get / has / keys — doesn't allocate or touch this map.
 * Only mutating operations + the admin enumeration path read/write it.
 */
const scriptStorageLastModified = new Map<string, number>();

/**
 * Per-script byte-size cap on the JSON-serialised total. 1 MB is a
 * conscious "small bag of session flags" framing — scripts that need
 * meaningful storage should use `api.variables.*` (persisted, scope-
 * tiered) or `api.db.*` (structured, queryable). Anyone hitting this
 * is probably reaching for the wrong primitive.
 *
 * Source-level constant for v1.0; no setting UI. If real-world usage
 * justifies a per-user override, the constant becomes a setting reader
 * in a future RC (additive change).
 */
const SCRIPT_STORAGE_CAP_BYTES = 1 * 1024 * 1024;

/**
 * Estimate the JSON-serialised byte size of a script's full storage
 * map, hypothetically including a candidate (key, value) write. Used
 * by `set()` to enforce the size cap BEFORE committing the write.
 *
 * Why hypothetical: we need to know whether the post-write state would
 * cross the cap, not the pre-write state. Building a plain object that
 * mirrors the map + the candidate and JSON-stringifying it is the
 * simplest accurate approach. For the worst-case 1 MB map this is
 * sub-millisecond stringify cost.
 */
function estimateSizeWith(
  existing: Map<string, unknown> | undefined,
  candidateKey:   string,
  candidateValue: unknown,
): number {
  const snapshot: Record<string, unknown> = {};
  if (existing) {
    for (const [k, v] of existing) {
      snapshot[k] = v;
    }
  }
  snapshot[candidateKey] = candidateValue;
  // `JSON.stringify` returning undefined would only happen for non-
  // serialisable top-level values, which we never pass here — the
  // candidate value crosses IPC first (which throws on non-cloneable
  // payloads), so by the time we get here the value is JSON-safe.
  return JSON.stringify(snapshot).length;
}

// ─── Cross-module exports ───────────────────────────────────────────────────

/**
 * Drop this script's storage slot. Called from `teardownDisabledScript`
 * (`backend.ts`) on script disable / delete. Idempotent on a missing
 * scriptId — safe to call for a script that never wrote anything.
 *
 * Emits `ls:scriptStorage:clear` if the script HAD entries, so debug
 * tooling can react to script teardown. No broadcast for a script that
 * never wrote — keeps the bus quiet for the common no-op case.
 */
export function clearScriptStorageForScript(scriptId: string): void {
  const slot = scriptStorageMap.get(scriptId);
  scriptStorageLastModified.delete(scriptId);
  if (!slot || slot.size === 0) {
    scriptStorageMap.delete(scriptId);
    return;
  }
  scriptStorageMap.delete(scriptId);
  busEmit('ls:scriptStorage:clear', { scriptId });
}

/**
 * Test-only reset. Wipes the whole map across all scripts. No broadcasts.
 *
 * @internal
 */
export function __resetScriptStorageForTests(): void {
  scriptStorageMap.clear();
  scriptStorageLastModified.clear();
}

/**
 * Test-only peek into the parent-side storage state. Useful for unit
 * tests that want to verify a write landed without going through the
 * proxy's IPC roundtrip.
 *
 * @internal
 */
export function __getScriptStorageEntryForTests(
  scriptId: string,
  key:      string,
): { has: boolean; value: unknown } {
  const slot = scriptStorageMap.get(scriptId);
  if (!slot || !slot.has(key)) return { has: false, value: undefined };
  return { has: true, value: slot.get(key) };
}

// ─── API builder ─────────────────────────────────────────────────────────────

/**
 * Build the `api.scriptStorage` namespace for a script. No permission
 * gating — this is a free-tier surface, ownership enforced structurally
 * via the `scriptId`-keyed outer map.
 */
export function buildScriptStorageAPI(deps: APIBuildDeps): ScriptStorageAPI {
  const scriptId = deps.script.id;

  function getSlot(): Map<string, unknown> | undefined {
    return scriptStorageMap.get(scriptId);
  }

  function getOrCreateSlot(): Map<string, unknown> {
    let slot = scriptStorageMap.get(scriptId);
    if (!slot) {
      slot = new Map<string, unknown>();
      scriptStorageMap.set(scriptId, slot);
    }
    return slot;
  }

  return {
    async get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined> {
      const slot = getSlot();
      if (!slot || !slot.has(key)) return defaultValue;
      return slot.get(key) as T;
    },

    async set(key: string, value: unknown): Promise<void> {
      const existing = getSlot();
      const projectedSize = estimateSizeWith(existing, key, value);
      if (projectedSize > SCRIPT_STORAGE_CAP_BYTES) {
        throw new Error(
          `api.scriptStorage: capacity exceeded — writing key "${key}" would push this ` +
          `script's storage to ${projectedSize} bytes, over the ${SCRIPT_STORAGE_CAP_BYTES}-byte ` +
          `per-script cap. Use api.variables.* (persisted) or api.db.* (structured collections) ` +
          `for storage at this scale.`,
        );
      }
      getOrCreateSlot().set(key, value);
      scriptStorageLastModified.set(scriptId, Date.now());
      busEmit('ls:scriptStorage:set', { scriptId, key, value });
    },

    async delete(key: string): Promise<boolean> {
      const slot = getSlot();
      if (!slot || !slot.has(key)) return false;
      slot.delete(key);
      busEmit('ls:scriptStorage:delete', { scriptId, key });
      // Drop the outer entry if the script's slot is now empty — keeps
      // the outer map tidy across long sessions with many enable/disable
      // cycles. Symmetric with `clear()` and `clearScriptStorageForScript`.
      if (slot.size === 0) {
        scriptStorageMap.delete(scriptId);
        scriptStorageLastModified.delete(scriptId);
      } else {
        scriptStorageLastModified.set(scriptId, Date.now());
      }
      return true;
    },

    async has(key: string): Promise<boolean> {
      const slot = getSlot();
      return slot ? slot.has(key) : false;
    },

    async clear(): Promise<void> {
      const slot = getSlot();
      if (!slot || slot.size === 0) {
        // Defensive cleanup of an empty outer entry without broadcast.
        scriptStorageMap.delete(scriptId);
        scriptStorageLastModified.delete(scriptId);
        return;
      }
      scriptStorageMap.delete(scriptId);
      scriptStorageLastModified.delete(scriptId);
      busEmit('ls:scriptStorage:clear', { scriptId });
    },

    async keys(): Promise<string[]> {
      const slot = getSlot();
      return slot ? [...slot.keys()] : [];
    },
  };
}

// ─── Admin enumeration (v1.0.0-rc.6 — Storage tab) ──────────────────────────
//
// Cross-script read surface for the Storage panel. All functions are
// pure parent-side reads of `scriptStorageMap` + `scriptStorageLastModified`
// — no IPC, no user-permission gating (admin view runs at backend trust
// level). Mutating admin actions (clear / delete-entry) go through the
// same broadcast emit path as user-script-initiated mutations so live
// refresh subscribers see them.

/**
 * Summary row shape for the Storage-tab admin view. One entry per
 * script with ≥1 stored key. Scripts with no entries don't appear —
 * matches the Collections section's "only collections that exist
 * are listed" behavior.
 */
export interface ScriptStorageSummary {
  scriptId:       string;
  /** Number of keys currently stored. */
  keyCount:       number;
  /** JSON-serialised total size in bytes (same metric as the per-script cap). */
  sizeBytes:      number;
  /**
   * Last-mutation timestamp (`Date.now()` ms). `0` if the slot exists
   * but lastModifiedAt was never recorded — should not happen in
   * practice (set/delete/clear all update the tracker), but defensive.
   */
  modifiedAtMs:   number;
}

/**
 * Walk the parent-side map and return a summary per script with ≥1
 * entry. Cheap — no JSON round-trip per row, just a `JSON.stringify`
 * of each slot for the size metric. For the worst-case 1 MB-cap-filled
 * slot this is sub-millisecond per script.
 */
export function enumerateAllScriptStorage(): ScriptStorageSummary[] {
  const out: ScriptStorageSummary[] = [];
  for (const [scriptId, slot] of scriptStorageMap) {
    if (slot.size === 0) continue;
    const sizeBytes = JSON.stringify(Object.fromEntries(slot)).length;
    out.push({
      scriptId,
      keyCount:     slot.size,
      sizeBytes,
      modifiedAtMs: scriptStorageLastModified.get(scriptId) ?? 0,
    });
  }
  return out;
}

/**
 * Return all key/value entries for a script, for the inspect modal.
 * Returns `null` when the script has no slot (vanished between
 * enumerate + inspect — host raced ahead of UI).
 *
 * Values are returned as-is — they're JSON-serialisable by construction
 * (the `set` path enforces that via the IPC boundary), so they cross
 * the spindle.sendToFrontend bus cleanly.
 */
export function inspectScriptStorage(
  scriptId: string,
): Array<{ key: string; value: unknown }> | null {
  const slot = scriptStorageMap.get(scriptId);
  if (!slot || slot.size === 0) return null;
  return [...slot].map(([key, value]) => ({ key, value }));
}

/**
 * Admin-side per-entry delete. Mirrors the user-script `delete()`
 * code path (drop entry, fire `ls:scriptStorage:delete` broadcast,
 * tidy outer slot if now empty, update lastModifiedAt). Returns
 * `true` if the entry existed, `false` otherwise.
 *
 * Used by the Storage-tab inspect modal's per-row delete affordance.
 */
export function deleteScriptStorageEntryAsAdmin(
  scriptId: string,
  key:      string,
): boolean {
  const slot = scriptStorageMap.get(scriptId);
  if (!slot || !slot.has(key)) return false;
  slot.delete(key);
  busEmit('ls:scriptStorage:delete', { scriptId, key });
  if (slot.size === 0) {
    scriptStorageMap.delete(scriptId);
    scriptStorageLastModified.delete(scriptId);
  } else {
    scriptStorageLastModified.set(scriptId, Date.now());
  }
  return true;
}

/**
 * Admin-side bulk clear of a script's slot. Mirrors the user-script
 * `clear()` code path. Used by the Storage-tab "clear" action on a
 * script row. Idempotent on missing / empty slots (no broadcast).
 *
 * Distinct from `clearScriptStorageForScript` (the teardown hook)
 * only in intent — the teardown hook is fired by
 * `backend.ts:teardownDisabledScript` on script disable/delete;
 * this one is fired by the admin UI. The actual operation is
 * identical, so we just delegate.
 */
export function clearScriptStorageAsAdmin(scriptId: string): void {
  clearScriptStorageForScript(scriptId);
}
