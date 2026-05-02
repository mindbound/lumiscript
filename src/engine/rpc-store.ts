/**
 * ============================================================================
 * LUMISCRIPT — RPC ENDPOINT STORE
 * ============================================================================
 * Module-level singleton tracking which user-script owns which fully-qualified
 * `spindle.rpcPool` endpoint. Structurally parallel to `macro-store` and
 * `tool-store`: scriptId-tagged entries, owner-scoped mutators, lifecycle
 * cleanup via `clearByScriptId`, auto-stale-diff on re-run.
 *
 * Why per-script ownership matters: every endpoint registered via
 * `api.rpc.sync` or `api.rpc.handle` lands at `lumiscript.<scriptSlug>.<channel>`.
 * Spindle's auto-cleanup-on-extension-unload is too coarse — it tears down
 * EVERY LumiScript-owned endpoint, even ones still in use. Per-script
 * granularity lets us unregister exactly the endpoints owned by the script
 * being disabled / deleted / replaced.
 *
 * Lifecycle:
 *   - api.rpc.sync()       → addEndpoint() + spindle.rpcPool.sync()
 *   - api.rpc.handle()     → addEndpoint() + spindle.rpcPool.handle()
 *   - api.rpc.unregister() → removeEndpoint() + spindle.rpcPool.unregister()
 *   - Script delete / disable → clearByScriptId() + spindle.rpcPool.unregister() × N
 *   - Post-execution on re-run → diffAndCleanStaleEndpoints() auto-unregisters
 *     endpoints the updated script body no longer creates.
 */

/** Internal record stored in the singleton map. */
export interface RpcEndpointEntry {
  /** Fully-qualified endpoint, e.g. `lumiscript.tracker.state`. */
  endpoint: string;
  /** `'sync'` = latest-value snapshot; `'handle'` = on-demand callback. */
  mode: 'sync' | 'handle';
  scriptId: string;
  scriptName: string;
}

// ─── Singleton ────────────────────────────────────────────────────────────────

const store = new Map<string, RpcEndpointEntry>();

// ─── Mutators ─────────────────────────────────────────────────────────────────

/**
 * Register an endpoint owned by a script. Re-registration of the same endpoint:
 *
 *   - by the SAME script: replaces the entry (sync→handle and vice versa are
 *     valid mode transitions; matches Spindle's behaviour where calling
 *     sync()/handle() on the same endpoint replaces the previous registration).
 *   - by a DIFFERENT script: throws. Two-tier namespacing
 *     (`lumiscript.<scriptSlug>.<channel>`) makes this scenario rare — it
 *     requires both scripts to override `as` to the same value — but the
 *     check guards against silent hijacking when it happens.
 */
export function addEndpoint(entry: RpcEndpointEntry): void {
  const existing = store.get(entry.endpoint);
  if (existing && existing.scriptId !== entry.scriptId) {
    throw new Error(
      `api.rpc: endpoint "${entry.endpoint}" is already registered by ` +
      `"${existing.scriptName}". Use a different channel or override the slug ` +
      `via options.as.`,
    );
  }
  store.set(entry.endpoint, entry);
}

/**
 * Remove an endpoint by fully-qualified name. Only removes the entry if owned
 * by `scriptId`. Returns `true` if removed, `false` if not found or not owned.
 */
export function removeEndpoint(endpoint: string, scriptId: string): boolean {
  const entry = store.get(endpoint);
  if (!entry || entry.scriptId !== scriptId) return false;
  store.delete(endpoint);
  return true;
}

/**
 * Remove all endpoints registered by the given script. Returns the
 * fully-qualified endpoint names so the caller can loop
 * `spindle.rpcPool.unregister(endpoint)` for each. Called from `backend.ts` on
 * script disable/delete.
 */
export function clearByScriptId(scriptId: string): string[] {
  const cleared: string[] = [];
  for (const [endpoint, entry] of store) {
    if (entry.scriptId === scriptId) {
      store.delete(endpoint);
      cleared.push(endpoint);
    }
  }
  return cleared;
}

/**
 * Return the fully-qualified names of all endpoints owned by the given script.
 * Used for the pre-execution snapshot in the auto-stale diff
 * (see `diffAndCleanStaleEndpoints`).
 */
export function listEndpointsByScriptId(scriptId: string): string[] {
  const endpoints: string[] = [];
  for (const [endpoint, entry] of store) {
    if (entry.scriptId === scriptId) endpoints.push(endpoint);
  }
  return endpoints;
}

/** Snapshot of all current entries. Test-only / diagnostics. */
export function listAll(): RpcEndpointEntry[] {
  return [...store.values()];
}

/** Look up an endpoint by fully-qualified name. Returns undefined if not registered. */
export function getEndpoint(endpoint: string): RpcEndpointEntry | undefined {
  return store.get(endpoint);
}

/** Remove all endpoints regardless of script. Test-only (mirrors `macro-store.clearAll`). */
export function clearAll(): void {
  store.clear();
}

// ─── Post-execution auto-cleanup ──────────────────────────────────────────────

/**
 * Diff a pre-execution endpoint snapshot against the set of endpoints actively
 * registered during the run. Any endpoint that existed before the run but was
 * NOT re-registered is stale and gets removed from the store.
 *
 * Returns the fully-qualified names of removed endpoints so the caller can
 * loop `spindle.rpcPool.unregister(endpoint)` for each. Mirrors
 * `diffAndCleanStaleMacros` exactly.
 */
export function diffAndCleanStaleEndpoints(
  scriptId: string,
  preRunEndpoints: readonly string[],
  registeredThisRun: ReadonlySet<string>,
): string[] {
  const stale: string[] = [];
  for (const endpoint of preRunEndpoints) {
    if (registeredThisRun.has(endpoint)) continue;
    const entry = store.get(endpoint);
    if (entry && entry.scriptId === scriptId) {
      store.delete(endpoint);
      stale.push(endpoint);
    }
  }
  return stale;
}
