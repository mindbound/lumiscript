/**
 * ============================================================================
 * LUMISCRIPT — UI EVENT REGISTRY
 * ============================================================================
 * Backend-side store for `api.ui.events.*` — reactive Lumiverse UI state
 * (virtual keyboard, side drawer, settings modal).
 *
 * Each of the three channels holds:
 *   - the **latest known state** (a cache), so the snapshot getters
 *     (`getKeyboardState` etc.) can resolve synchronously without a frontend
 *     round-trip; and
 *   - a per-script set of **change handlers** that fan out on every change.
 *
 * The frontend subscribes once to `ctx.ui.events.on*Change`, pushes the initial
 * state on setup, and forwards every change via `ls_ui_*_changed` messages.
 * `backend.ts` routes those to `dispatch*Change`, which updates the cache and
 * fires the handlers.
 *
 * Lifecycle: handlers are pinned against worker eviction via the host
 * dispatcher's `handlerCleanups` (the `register-handler` path records the unsub
 * returned by `add*Handler`). Explicit unsubscribe calls that unsub; script
 * teardown / reload calls `clearByScript` (mirrors `drawer-tab-registry`, since
 * `unregisterScriptFromChild` drops `handlerCleanups` without invoking it).
 *
 * Caches default to "nothing visible" until the first frontend push. The push
 * arrives immediately on frontend connect, so the window is tiny — and these
 * states have sensible "off" defaults anyway.
 */

import type { UIKeyboardState, UIDrawerState, UISettingsState } from '../types/script.js';

const DEFAULT_KEYBOARD: UIKeyboardState = { visible: false, insetBottom: 0, viewportWidth: 0, viewportHeight: 0 };
const DEFAULT_DRAWER:   UIDrawerState   = { open: false, tabId: null };
const DEFAULT_SETTINGS: UISettingsState = { open: false, view: '' };

interface Channel<S> {
  /** Latest known state (cache for the snapshot getters). */
  state: S;
  /** scriptId → set of change handlers owned by that script. */
  handlers: Map<string, Set<(state: S) => void>>;
}

function makeChannel<S>(initial: S): Channel<S> {
  return { state: initial, handlers: new Map() };
}

const keyboard = makeChannel<UIKeyboardState>(DEFAULT_KEYBOARD);
const drawer   = makeChannel<UIDrawerState>(DEFAULT_DRAWER);
const settings = makeChannel<UISettingsState>(DEFAULT_SETTINGS);

function addHandler<S>(ch: Channel<S>, scriptId: string, fn: (state: S) => void): () => void {
  let set = ch.handlers.get(scriptId);
  if (!set) { set = new Set(); ch.handlers.set(scriptId, set); }
  set.add(fn);
  return () => {
    const s = ch.handlers.get(scriptId);
    if (!s) return;
    s.delete(fn);
    if (s.size === 0) ch.handlers.delete(scriptId);
  };
}

function dispatch<S>(ch: Channel<S>, state: S): void {
  ch.state = state;
  for (const set of ch.handlers.values()) {
    for (const fn of set) {
      try { fn(state); } catch {
        // User-callback errors are the script's responsibility; dispatch
        // continuity beats per-handler logging (matches drawer-tab-registry).
      }
    }
  }
}

// ─── Keyboard ────────────────────────────────────────────────────────────────
export const getKeyboardState   = (): UIKeyboardState => keyboard.state;
export const addKeyboardHandler = (scriptId: string, fn: (s: UIKeyboardState) => void): (() => void) => addHandler(keyboard, scriptId, fn);
export const dispatchKeyboardChange = (state: UIKeyboardState): void => dispatch(keyboard, state);

// ─── Drawer ──────────────────────────────────────────────────────────────────
export const getDrawerState   = (): UIDrawerState => drawer.state;
export const addDrawerHandler = (scriptId: string, fn: (s: UIDrawerState) => void): (() => void) => addHandler(drawer, scriptId, fn);
export const dispatchDrawerChange = (state: UIDrawerState): void => dispatch(drawer, state);

// ─── Settings ──────────────────────────────────────────────────────────────────
export const getSettingsState   = (): UISettingsState => settings.state;
export const addSettingsHandler = (scriptId: string, fn: (s: UISettingsState) => void): (() => void) => addHandler(settings, scriptId, fn);
export const dispatchSettingsChange = (state: UISettingsState): void => dispatch(settings, state);

// ─── Teardown ──────────────────────────────────────────────────────────────────

/**
 * Drop every change handler owned by a script across all three channels.
 * Called from `backend.ts` disable / reload paths (the cache is global and
 * intentionally preserved). Mirrors `drawer-tab-registry.clearByScript` —
 * needed because `unregisterScriptFromChild` drops `handlerCleanups` without
 * invoking the recorded unsubs.
 */
export function clearByScript(scriptId: string): void {
  keyboard.handlers.delete(scriptId);
  drawer.handlers.delete(scriptId);
  settings.handlers.delete(scriptId);
}

/** @internal — reset all state (for tests only). */
export function __reset(): void {
  keyboard.state = DEFAULT_KEYBOARD; keyboard.handlers.clear();
  drawer.state   = DEFAULT_DRAWER;   drawer.handlers.clear();
  settings.state = DEFAULT_SETTINGS; settings.handlers.clear();
}
