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
 *     Same-(scriptId, actionId) re-registration replaces the entry (and
 *     clears its old click handlers — stale closures from a prior script
 *     run). Matches `tool-store` and `macro-store`: silent replace for
 *     same-script re-registration so trigger scripts can be called
 *     naively from events like `SETTINGS_UPDATED` without bespoke handle
 *     management. The key scheme (`${scriptId}:${actionId}`) makes
 *     cross-script collision impossible at the registry level — two
 *     scripts may share an `actionId` without conflict.
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
 * per-execution auto-stale diff pattern — the registry doesn't track
 * "which actions did this run declare" and prune the rest. Replace-on-
 * re-register is enough for the common trigger-invocation pattern; if a
 * script stops declaring an action, the leftover entry disappears on
 * script disable / delete via `clearByScript`.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface InputBarActionEntry {
  scriptId: string;
  actionId: string;
  label: string;
  enabled: boolean;
  /** Inline SVG string (sanitized at render time). Set by the API at register. */
  iconSvg?: string;
  /** URL to an icon image. Takes precedence over `iconSvg` on the host side. */
  iconUrl?: string;
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
 * Register a new action, or replace an existing one with the same
 * `(scriptId, actionId)` key. Called synchronously from the API builder
 * before the `ls_input_bar_action_register` message is sent to the
 * frontend (which itself destroys + recreates the host button when it
 * sees a duplicate key).
 *
 * Replace semantics:
 *   - Old click handlers are CLEARED — they're closures from a prior
 *     script run and the user's re-register expresses a fresh handle.
 *   - `label` and `enabled` come from the new call (effectively an
 *     in-place `setLabel` + `setEnabled`).
 *
 * Matches `tool-store.addTool` and `macro-store.addMacro` for the
 * trigger-re-invocation case. The key includes `scriptId`, so
 * cross-script collision isn't a possibility at this layer.
 */
export function registerAction(
  scriptId: string,
  actionId: string,
  label: string,
  enabled: boolean,
  iconSvg?: string,
  iconUrl?: string,
): InputBarActionEntry {
  const k = key(scriptId, actionId);
  const entry: InputBarActionEntry = {
    scriptId,
    actionId,
    label,
    enabled,
    iconSvg,
    iconUrl,
    clickHandlers: new Set(),
  };
  actions.set(k, entry);
  return entry;
}

/**
 * Whether an action with this `(scriptId, actionId)` is already live.
 * Used by the API builder to gate the stack-limit pre-check: a replace
 * shouldn't count against the limit since it doesn't add a new entry.
 */
export function hasAction(scriptId: string, actionId: string): boolean {
  return actions.has(key(scriptId, actionId));
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

// ─── Replay (frontend reconnect) ─────────────────────────────────────────────

/**
 * Build the list of `BackendToFrontend` messages that re-create every live
 * input-bar action on a freshly-mounted frontend (e.g. after a browser
 * refresh). Folds the current `label` / `enabled` / icons into a single
 * `ls_input_bar_action_register` per entry — no follow-up `set_label` /
 * `set_enabled` messages are needed because the register message already
 * carries those fields.
 *
 * Insertion order is iteration order of the underlying Map, which matches
 * registration order — preserves stable ordering in the frontend popover.
 *
 * Pure function: does not mutate the registry or send any messages. The
 * caller in `backend.ts` is responsible for flushing the output via
 * `spindle.sendToFrontend()`.
 */
export function listReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of actions.values()) {
    out.push({
      type: 'ls_input_bar_action_register',
      scriptId: entry.scriptId,
      actionId: entry.actionId,
      options: {
        label:   entry.label,
        iconSvg: entry.iconSvg,
        iconUrl: entry.iconUrl,
        enabled: entry.enabled,
      },
    });
  }
  return out;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  actions.clear();
}
