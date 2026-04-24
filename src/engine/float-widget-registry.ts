/**
 * ============================================================================
 * LUMISCRIPT — FLOAT WIDGET REGISTRY
 * ============================================================================
 * Tracks backend-side state for float widgets registered via
 * `api.ui.createFloatWidget()`.
 *
 * Each widget has two identifiers:
 *   - `widgetId`        — stable identity of the widget itself; used for
 *                         move / set-visible / destroy / drag-end messages.
 *   - `rootElementId`   — the DOM element ID the frontend binds to the
 *                         widget's `.root` HTMLElement. Subsequent DOMHandle
 *                         operations on `widget.root` target this ID and
 *                         flow through the existing dom-registry pipeline.
 *
 * Unlike the advanced-modal registry, float widgets cache live state
 * (position + visibility) so `handle.getPosition()` and `handle.isVisible()`
 * can return synchronously. Position is updated by:
 *   - `moveTo(x, y)` — optimistic cache update on the API side, message
 *     sent to the frontend. If the host clamps, the cache briefly lags.
 *   - `ls_float_widget_drag_end` echoes from the frontend — authoritative
 *     post-drag coordinates.
 *
 * No `diffAndCleanStale*` infra — widgets persist across script re-runs
 * and are explicitly destroyed via `destroy()` or teardown.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Static widget options captured at register time (never mutated). Live state
 * — x / y / visible — rides on the entry itself.
 */
export interface FloatWidgetRegisterOptions {
  width: number;
  height: number;
  initialPosition?: { x: number; y: number };
  snapToEdge?: boolean;
  tooltip?: string;
  chromeless?: boolean;
}

export interface FloatWidgetEntry {
  widgetId: string;
  rootElementId: string;
  scriptId: string;
  /** Frozen options from the original create call. Needed for replay. */
  options: FloatWidgetRegisterOptions;
  x: number;
  y: number;
  visible: boolean;
  /** Handlers registered via `handle.onDragEnd(fn)`. Fan-out on each drag end. */
  dragEndHandlers: Set<(pos: { x: number; y: number }) => void>;
  /**
   * `true` once `destroy()` has run or teardown has cleared the entry. Guards
   * against late echoes from the frontend firing handlers after destruction.
   */
  destroyed: boolean;
}

// ─── Registry state ──────────────────────────────────────────────────────────

/** widgetId → entry */
const widgets = new Map<string, FloatWidgetEntry>();

// ─── Widget lifecycle ────────────────────────────────────────────────────────

/**
 * Register a new widget. Called synchronously from the API builder before
 * the `ls_float_widget_create` message is sent. Seeds the position cache
 * with the caller's `initialPosition` (or `{ 0, 0 }` if absent — the host
 * will apply its own default placement in that case, and the first
 * drag-end echo will correct the cache).
 */
export function registerWidget(
  widgetId: string,
  rootElementId: string,
  scriptId: string,
  options: FloatWidgetRegisterOptions,
): FloatWidgetEntry {
  const initialX = options.initialPosition?.x ?? 0;
  const initialY = options.initialPosition?.y ?? 0;
  const entry: FloatWidgetEntry = {
    widgetId,
    rootElementId,
    scriptId,
    options,
    x: initialX,
    y: initialY,
    visible: true,
    dragEndHandlers: new Set(),
    destroyed: false,
  };
  widgets.set(widgetId, entry);
  return entry;
}

export function getWidget(widgetId: string): FloatWidgetEntry | undefined {
  return widgets.get(widgetId);
}

/**
 * Count live (non-destroyed) widgets owned by a script. Used by the API
 * builder to pre-check the 2-per-script stack limit synchronously.
 */
export function countLiveWidgetsByScript(scriptId: string): number {
  let n = 0;
  for (const entry of widgets.values()) {
    if (entry.scriptId === scriptId && !entry.destroyed) n++;
  }
  return n;
}

/**
 * Update the cached position — optimistic update on `moveTo(x, y)` before
 * sending the message, and authoritative update on drag-end echo. No-op if
 * the widget is gone or destroyed.
 */
export function updatePosition(widgetId: string, x: number, y: number): void {
  const entry = widgets.get(widgetId);
  if (!entry || entry.destroyed) return;
  entry.x = x;
  entry.y = y;
}

/** Update the cached visibility. No-op if gone or destroyed. */
export function updateVisibility(widgetId: string, visible: boolean): void {
  const entry = widgets.get(widgetId);
  if (!entry || entry.destroyed) return;
  entry.visible = visible;
}

/** Register a drag-end handler. Returns an unsubscribe function. */
export function addDragEndHandler(
  widgetId: string,
  handler: (pos: { x: number; y: number }) => void,
): () => void {
  const entry = widgets.get(widgetId);
  if (!entry || entry.destroyed) return () => {};
  entry.dragEndHandlers.add(handler);
  return () => {
    entry.dragEndHandlers.delete(handler);
  };
}

/**
 * Dispatch a drag-end event. Called from `backend.ts` when an
 * `ls_float_widget_drag_end` message arrives. Updates the position cache
 * authoritatively, then fires every registered handler. Per-handler errors
 * are swallowed — one bad handler can't stop the rest.
 */
export function dispatchDragEnd(widgetId: string, x: number, y: number): void {
  const entry = widgets.get(widgetId);
  if (!entry || entry.destroyed) return;
  entry.x = x;
  entry.y = y;
  const pos = { x, y };
  for (const fn of entry.dragEndHandlers) {
    try { fn(pos); } catch {
      // Intentionally swallowed — user-supplied callback errors are
      // the script's responsibility. Registry-level dispatch prioritises
      // continuity over per-handler logging noise.
    }
  }
}

/**
 * Destroy a widget. Marks the entry `destroyed` (guards against late
 * drag-end echoes) and clears its handler set, but does NOT remove the
 * entry from the map yet — `dropEntry` does that after the teardown path
 * has run. Returns `true` if the state transition applied, `false` if
 * already destroyed or unknown.
 */
export function destroyWidget(widgetId: string): boolean {
  const entry = widgets.get(widgetId);
  if (!entry || entry.destroyed) return false;
  entry.destroyed = true;
  entry.dragEndHandlers.clear();
  return true;
}

/** Drop a destroyed entry from the registry. Safe to call on non-destroyed — no-op then. */
export function dropEntry(widgetId: string): void {
  const entry = widgets.get(widgetId);
  if (!entry) return;
  if (entry.destroyed) widgets.delete(widgetId);
}

// ─── Per-script cleanup ──────────────────────────────────────────────────────

/**
 * Return widgetIds of every live widget owned by a script. Used in the
 * teardown sweep — caller sends `ls_float_widget_destroy` for each, calls
 * `destroyWidget` + `dropEntry`, then continues with DOM cleanup.
 */
export function liveWidgetsByScript(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of widgets.values()) {
    if (entry.scriptId === scriptId && !entry.destroyed) {
      ids.push(entry.widgetId);
    }
  }
  return ids;
}

// ─── Replay (frontend reconnect) ─────────────────────────────────────────────

/**
 * Build the list of `BackendToFrontend` messages that re-create every live
 * float widget on a freshly-mounted frontend.
 *
 * Per live (non-destroyed) entry:
 *   - One `ls_float_widget_create` with the original register options.
 *   - An `ls_float_widget_move` iff the cached `(x, y)` differs from the
 *     initial position requested in options — preserves the user's dragged
 *     placement across refresh.
 *   - An `ls_float_widget_set_visible` iff the widget is currently hidden
 *     (`visible: true` is the default so we skip the message in that case).
 *
 * Destroyed entries (awaiting `dropEntry`) are skipped — replay matches
 * the live state observable via the handle's `getPosition` / `isVisible`.
 */
export function listReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of widgets.values()) {
    if (entry.destroyed) continue;
    out.push({
      type: 'ls_float_widget_create',
      scriptId: entry.scriptId,
      widgetId: entry.widgetId,
      rootElementId: entry.rootElementId,
      options: {
        width:           entry.options.width,
        height:          entry.options.height,
        initialPosition: entry.options.initialPosition,
        snapToEdge:      entry.options.snapToEdge,
        tooltip:         entry.options.tooltip,
        chromeless:      entry.options.chromeless,
      },
    });
    const initialX = entry.options.initialPosition?.x ?? 0;
    const initialY = entry.options.initialPosition?.y ?? 0;
    if (entry.x !== initialX || entry.y !== initialY) {
      out.push({
        type: 'ls_float_widget_move',
        widgetId: entry.widgetId,
        x: entry.x,
        y: entry.y,
      });
    }
    if (!entry.visible) {
      out.push({
        type: 'ls_float_widget_set_visible',
        widgetId: entry.widgetId,
        visible: false,
      });
    }
  }
  return out;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  widgets.clear();
}
