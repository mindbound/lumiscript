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

/**
 * Static options captured at register time (never mutated). The live-mutable
 * title / shortName / badge ride on the entry itself, not here, so updates
 * via `setTitle` / `setShortName` / `setBadge` don't have to clone this.
 */
export interface DrawerTabRegisterOptions {
  description?: string;
  keywords?: string[];
  headerTitle?: string;
  iconSvg?: string;
  iconUrl?: string;
}

export interface DrawerTabEntry {
  scriptId: string;
  tabId: string;
  rootElementId: string;
  /** Frozen options from the original register call. */
  options: DrawerTabRegisterOptions;
  /** Current title (live — updates on `handle.setTitle(…)`). */
  title: string;
  /** Current short name (live — updates on `handle.setShortName(…)`). */
  shortName?: string;
  /**
   * Current badge (live — updates on `handle.setBadge(…)`).
   * `null` means "no badge"; differs from `undefined` (never set).
   */
  badge: string | null;
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
 * Register a new drawer tab, or replace an existing one with the same
 * `(scriptId, tabId)` key. Called synchronously from the API builder before
 * the `ls_drawer_tab_register` message is sent to the frontend (which itself
 * destroys + recreates the host-side Spindle handle when it sees a duplicate
 * key — matches how the input-bar action handler works).
 *
 * Replace semantics — mirrors `input-bar-action-registry.registerAction`:
 *   - Old `activateHandlers` are CLEARED — they're closures from a prior
 *     script run and the user's re-register expresses a fresh handle.
 *   - `title` / `shortName` / `options` come from the new call (so edits to
 *     the tab metadata between runs land correctly).
 *   - `badge` resets to `null` — the new run hasn't called `setBadge` yet;
 *     if the prior run had set one, treating the new run as a full reset
 *     is the least surprising default.
 *   - `rootElementId` is fresh each register (allocated upstream in
 *     `api/ui.ts` via `nextDOMId('dt')`). The frontend's drawer-tab
 *     handler destroys its stale element binding when the new register
 *     arrives, so the new rootElementId takes over cleanly.
 *
 * Cross-script collision isn't possible at this layer — the key includes
 * `scriptId`. Two scripts may share a `tabId` without conflict.
 */
export function registerTab(
  scriptId: string,
  tabId: string,
  rootElementId: string,
  title: string,
  shortName: string | undefined,
  options: DrawerTabRegisterOptions,
): DrawerTabEntry {
  const k = key(scriptId, tabId);
  const entry: DrawerTabEntry = {
    scriptId,
    tabId,
    rootElementId,
    options,
    title,
    shortName,
    badge: null,
    activateHandlers: new Set(),
  };
  tabs.set(k, entry);
  return entry;
}

/**
 * Whether a drawer tab with this `(scriptId, tabId)` is already live.
 * Used by the API builder to gate the per-script + total stack-limit
 * pre-checks: a replace shouldn't count against either limit since it
 * doesn't add a new entry.
 */
export function hasTab(scriptId: string, tabId: string): boolean {
  return tabs.has(key(scriptId, tabId));
}

/**
 * Update the cached title. Called by `handle.setTitle(…)` before the outbound
 * `ls_drawer_tab_set_title` message. Returns true if the entry exists.
 */
export function updateTitle(scriptId: string, tabId: string, title: string): boolean {
  const entry = getTab(scriptId, tabId);
  if (!entry) return false;
  entry.title = title;
  return true;
}

/**
 * Update the cached short name. Called by `handle.setShortName(…)` before
 * the outbound `ls_drawer_tab_set_short_name` message.
 */
export function updateShortName(scriptId: string, tabId: string, shortName: string): boolean {
  const entry = getTab(scriptId, tabId);
  if (!entry) return false;
  entry.shortName = shortName;
  return true;
}

/**
 * Update the cached badge. `null` clears the badge. Called by `handle.setBadge(…)`
 * before the outbound `ls_drawer_tab_set_badge` message.
 */
export function updateBadge(scriptId: string, tabId: string, badge: string | null): boolean {
  const entry = getTab(scriptId, tabId);
  if (!entry) return false;
  entry.badge = badge;
  return true;
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

// ─── Replay (frontend reconnect) ─────────────────────────────────────────────

/**
 * Build the list of `BackendToFrontend` messages that re-create every live
 * drawer tab on a freshly-mounted frontend.
 *
 * Per entry:
 *   - One `ls_drawer_tab_register` with the current live `title` /
 *     `shortName` folded into the options (so we don't also need to emit
 *     `set_title` / `set_short_name`).
 *   - An additional `ls_drawer_tab_set_badge` iff the tab has a non-null
 *     badge — the register message doesn't carry a `badge` field.
 *
 * Pure function: does not mutate the registry or send any messages.
 */
export function listReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of tabs.values()) {
    out.push({
      type: 'ls_drawer_tab_register',
      scriptId: entry.scriptId,
      tabId: entry.tabId,
      rootElementId: entry.rootElementId,
      options: {
        id:          entry.tabId,
        title:       entry.title,
        shortName:   entry.shortName,
        description: entry.options.description,
        keywords:    entry.options.keywords,
        headerTitle: entry.options.headerTitle,
        iconSvg:     entry.options.iconSvg,
        iconUrl:     entry.options.iconUrl,
      },
    });
    if (entry.badge !== null) {
      out.push({
        type: 'ls_drawer_tab_set_badge',
        scriptId: entry.scriptId,
        tabId: entry.tabId,
        badge: entry.badge,
      });
    }
  }
  return out;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  tabs.clear();
}
