/**
 * ============================================================================
 * LUMISCRIPT — INPUT BAR ACTION REGISTRY
 * ============================================================================
 * Tracks backend-side state for input-bar actions registered via
 * `api.ui.registerInputBarAction()`.
 *
 * Each action is identified by the pair `(scriptId, actionId)`, where
 * `actionId` is the user-supplied `id` from `InputBarActionOptions` — unique
 * within a single script. Scripts cannot see or manipulate other scripts'
 * actions; all mutators are ownership-scoped.
 *
 * Lifecycle:
 *   - `registerAction` records an entry + its initial label/enabled state.
 *     Rejects duplicates with a clear error (the caller — `api.ui` builder
 *     — pre-checks the stack limit before calling this).
 *   - `destroyAction` drops the entry and returns the click handlers that
 *     were registered on it, so the caller can clear them explicitly. The
 *     frontend does its own cleanup on `ls_input_bar_action_destroy`.
 *   - `dispatchClick` fires when the frontend echoes an
 *     `ls_input_bar_action_click` — fans out to every handler registered
 *     on that action.
 *   - `clearByScript` drops every entry owned by a script (used in the
 *     disable / delete teardown paths).
 *
 * Unlike tools and macros, input-bar actions do NOT participate in the
 * per-execution auto-stale diff pattern — they're explicitly registered
 * once per session (not re-declared on every script re-run) and persist
 * until `destroy()` or teardown.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface InputBarActionEntry {
  scriptId: string;
  actionId: string;
  label: string;
  enabled: boolean;
  clickHandlers: Set<() => void>;
}

// ─── Registry state ──────────────────────────────────────────────────────────

/** `${scriptId}:${actionId}` → entry */
const actions = new Map<string, InputBarActionEntry>();

function key(scriptId: string, actionId: string): string {
  return `${scriptId}:${actionId}`;
}

// ─── Action lifecycle ────────────────────────────────────────────────────────

/**
 * Register a new action. Called synchronously from the API builder before
 * the `ls_input_bar_action_register` message is sent to the frontend.
 *
 * Throws if `(scriptId, actionId)` is already registered — mirrors the
 * first-wins ownership policy used by tools / macros.
 */
export function registerAction(
  scriptId: string,
  actionId: string,
  label: string,
  enabled: boolean,
): InputBarActionEntry {
  const k = key(scriptId, actionId);
  if (actions.has(k)) {
    throw new Error(
      `api.ui.registerInputBarAction: duplicate action id "${actionId}" for this script. ` +
      `Call handle.destroy() before re-registering.`,
    );
  }
  const entry: InputBarActionEntry = {
    scriptId,
    actionId,
    label,
    enabled,
    clickHandlers: new Set(),
  };
  actions.set(k, entry);
  return entry;
}

/**
 * Fetch an entry by ownership. Returns undefined if unknown OR if the
 * caller's script is not the owner (silent-miss rather than throwing —
 * ownership is an invariant, mismatches indicate caller bugs).
 */
export function getAction(scriptId: string, actionId: string): InputBarActionEntry | undefined {
  const entry = actions.get(key(scriptId, actionId));
  if (!entry || entry.scriptId !== scriptId) return undefined;
  return entry;
}

/**
 * Update an action's stored label. Called by `handle.setLabel(...)` before
 * sending `ls_input_bar_action_set_label` to the frontend. Returns `true`
 * if the update applied, `false` if the action is gone (caller should skip
 * the outbound message).
 */
export function updateLabel(scriptId: string, actionId: string, label: string): boolean {
  const entry = getAction(scriptId, actionId);
  if (!entry) return false;
  entry.label = label;
  return true;
}

/** Update an action's stored enabled flag. Same return semantics as `updateLabel`. */
export function updateEnabled(scriptId: string, actionId: string, enabled: boolean): boolean {
  const entry = getAction(scriptId, actionId);
  if (!entry) return false;
  entry.enabled = enabled;
  return true;
}

/**
 * Register a click handler on an action. Returns an unsubscribe function
 * that removes just that one handler. Multiple handlers per action are
 * supported — all fire on each click (matches Spindle's contract).
 *
 * If the action is gone, returns a no-op unsubscribe.
 */
export function addClickHandler(
  scriptId: string,
  actionId: string,
  handler: () => void,
): () => void {
  const entry = getAction(scriptId, actionId);
  if (!entry) return () => {};
  entry.clickHandlers.add(handler);
  return () => {
    entry.clickHandlers.delete(handler);
  };
}

/**
 * Destroy an action. Returns `true` if the entry was removed, `false` if
 * it was already gone. The caller is responsible for sending
 * `ls_input_bar_action_destroy` to the frontend.
 */
export function destroyAction(scriptId: string, actionId: string): boolean {
  const entry = getAction(scriptId, actionId);
  if (!entry) return false;
  entry.clickHandlers.clear();
  actions.delete(key(scriptId, actionId));
  return true;
}

// ─── Event dispatch ──────────────────────────────────────────────────────────

/**
 * Fire every registered click handler for an action. Called from the
 * frontend-message handler in `backend.ts` when an
 * `ls_input_bar_action_click` arrives.
 *
 * Handler errors are caught and logged by the caller — this function
 * swallows them per-handler so one bad handler can't stop the rest.
 */
export function dispatchClick(scriptId: string, actionId: string): void {
  const entry = getAction(scriptId, actionId);
  if (!entry) return;
  for (const fn of entry.clickHandlers) {
    try { fn(); } catch {
      // Intentionally swallowed — caller (backend.ts) does not log
      // per-handler because these are ordinary user-supplied callbacks
      // and logging each one would be noise. Script errors thrown from
      // click handlers surface via the script's own console during normal
      // operation; for registry-driven dispatch we prioritise continuity.
    }
  }
}

// ─── Enumeration ─────────────────────────────────────────────────────────────

/**
 * Count live actions owned by a script. Used by the API builder to enforce
 * the per-script limit synchronously before attempting `registerAction`.
 */
export function countByScript(scriptId: string): number {
  let n = 0;
  for (const entry of actions.values()) {
    if (entry.scriptId === scriptId) n++;
  }
  return n;
}

/**
 * Return all action IDs owned by a script. Used in the teardown sweep to
 * emit `ls_input_bar_action_destroy` messages for each before calling
 * `clearByScript`.
 */
export function listByScript(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of actions.values()) {
    if (entry.scriptId === scriptId) ids.push(entry.actionId);
  }
  return ids;
}

/**
 * Drop every entry owned by a script. Called from `backend.ts` disable /
 * delete paths after destroy messages have been sent to the frontend.
 */
export function clearByScript(scriptId: string): void {
  for (const [k, entry] of actions) {
    if (entry.scriptId === scriptId) actions.delete(k);
  }
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  actions.clear();
}
