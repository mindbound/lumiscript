/**
 * ============================================================================
 * LUMISCRIPT — DRAWER TAB REGISTRY
 * ============================================================================
 * Tracks backend-side state for drawer tabs registered via
 * `api.ui.registerDrawerTab()`.
 *
 * Each tab is identified by the pair `(scriptId, tabId)`, where `tabId` is
 * the user-supplied `id` from `DrawerTabOptions` — unique within a single
 * script. Scripts cannot see or manipulate other scripts' tabs; all mutators
 * are ownership-scoped.
 *
 * Quotas:
 *   - Spindle enforces 4 drawer tabs per extension (LumiScript is one).
 *   - LumiScript enforces **1 per script** synchronously at register time
 *     so one script can't starve the shared per-extension quota.
 *   - `countTotal()` lets the API builder also pre-check the 4-cap before
 *     accepting a new registration.
 *
 * Lifecycle:
 *   - `registerTab` records an entry + its `rootElementId`. Rejects
 *     duplicate `(scriptId, tabId)` pairs with a clear error.
 *   - `destroyTab` drops the entry and clears onActivate handlers.
 *   - `dispatchActivation` fans out on `ls_drawer_tab_activated` echoes.
 *   - `clearByScript` drops every entry owned by a script (teardown).
 *
 * Unlike tools/macros, drawer tabs are explicitly registered once and
 * persist across script re-runs — no `diffAndCleanStale*` infra needed.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DrawerTabEntry {
  scriptId: string;
  tabId: string;
  rootElementId: string;
  activateHandlers: Set<() => void>;
}

// ─── Registry state ──────────────────────────────────────────────────────────

/** `${scriptId}:${tabId}` → entry */
const tabs = new Map<string, DrawerTabEntry>();

function key(scriptId: string, tabId: string): string {
  return `${scriptId}:${tabId}`;
}

// ─── Lifecycle ───────────────────────────────────────────────────────────────

/**
 * Register a new drawer tab. Called synchronously from the API builder
 * before the `ls_drawer_tab_register` message is sent.
 *
 * Throws if `(scriptId, tabId)` is already registered — first-wins ownership
 * policy mirroring input-bar actions.
 */
export function registerTab(
  scriptId: string,
  tabId: string,
  rootElementId: string,
): DrawerTabEntry {
  const k = key(scriptId, tabId);
  if (tabs.has(k)) {
    throw new Error(
      `api.ui.registerDrawerTab: duplicate tab id "${tabId}" for this script. ` +
      `Call handle.destroy() before re-registering.`,
    );
  }
  const entry: DrawerTabEntry = {
    scriptId,
    tabId,
    rootElementId,
    activateHandlers: new Set(),
  };
  tabs.set(k, entry);
  return entry;
}

/**
 * Fetch an entry by ownership. Returns undefined if unknown or the
 * ownership check fails (silent miss — ownership is an invariant,
 * mismatches indicate caller bugs).
 */
export function getTab(scriptId: string, tabId: string): DrawerTabEntry | undefined {
  const entry = tabs.get(key(scriptId, tabId));
  if (!entry || entry.scriptId !== scriptId) return undefined;
  return entry;
}

/**
 * Register an activation handler on a tab. Returns an unsubscribe function
 * that removes just that one handler. Multiple handlers supported.
 */
export function addActivateHandler(
  scriptId: string,
  tabId: string,
  handler: () => void,
): () => void {
  const entry = getTab(scriptId, tabId);
  if (!entry) return () => {};
  entry.activateHandlers.add(handler);
  return () => {
    entry.activateHandlers.delete(handler);
  };
}

/**
 * Destroy a tab. Returns `true` if the entry was removed, `false` if it
 * was already gone. The caller is responsible for sending
 * `ls_drawer_tab_destroy` to the frontend.
 */
export function destroyTab(scriptId: string, tabId: string): boolean {
  const entry = getTab(scriptId, tabId);
  if (!entry) return false;
  entry.activateHandlers.clear();
  tabs.delete(key(scriptId, tabId));
  return true;
}

// ─── Event dispatch ──────────────────────────────────────────────────────────

/**
 * Fire every registered activation handler for a tab. Called from the
 * frontend-message handler in `backend.ts` when an `ls_drawer_tab_activated`
 * message arrives.
 */
export function dispatchActivation(scriptId: string, tabId: string): void {
  const entry = getTab(scriptId, tabId);
  if (!entry) return;
  for (const fn of entry.activateHandlers) {
    try { fn(); } catch {
      // Intentionally swallowed — user-supplied callback errors are the
      // script's responsibility. Registry-level dispatch prioritises
      // continuity over per-handler logging.
    }
  }
}

// ─── Enumeration ─────────────────────────────────────────────────────────────

/**
 * Count live tabs owned by a script. Used by the API builder to enforce
 * the LumiScript-level "1 tab per script" cap synchronously.
 */
export function countByScript(scriptId: string): number {
  let n = 0;
  for (const entry of tabs.values()) {
    if (entry.scriptId === scriptId) n++;
  }
  return n;
}

/**
 * Total live tabs across all scripts. Used to pre-check the Spindle 4-cap
 * before accepting a new registration (LumiScript is one extension — all
 * scripts share the quota).
 */
export function countTotal(): number {
  return tabs.size;
}

/**
 * Return all tab IDs owned by a script. Used in the teardown sweep to emit
 * `ls_drawer_tab_destroy` messages for each before calling `clearByScript`.
 */
export function listByScript(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of tabs.values()) {
    if (entry.scriptId === scriptId) ids.push(entry.tabId);
  }
  return ids;
}

/**
 * Drop every entry owned by a script. Called from `backend.ts` disable /
 * delete paths after destroy messages have been sent to the frontend.
 */
export function clearByScript(scriptId: string): void {
  for (const [k, entry] of tabs) {
    if (entry.scriptId === scriptId) tabs.delete(k);
  }
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  tabs.clear();
}
