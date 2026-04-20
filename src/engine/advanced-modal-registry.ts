/**
 * ============================================================================
 * LUMISCRIPT — ADVANCED MODAL REGISTRY
 * ============================================================================
 * Tracks backend-side state for advanced (DOM-owned) modals.
 *
 * An advanced modal has two backend identifiers:
 *   - `modalId`        — stable identity of the modal itself; used for
 *                        set-title / dismiss / dismissed-echo messages.
 *   - `rootElementId`  — the DOM element ID the frontend binds to the modal
 *                        body. Subsequent DOMHandle operations on
 *                        `modal.root` use this ID and flow through the
 *                        existing dom-registry + dom_* message pipeline.
 *
 * Lifecycle:
 *   - `registerModal` records the modal alongside its owner script.
 *   - `markDismissed` flips the dismissed flag, stamps a reason, and returns
 *     the handlers that should fire. Idempotent — subsequent calls after
 *     dismissal return no handlers.
 *   - `takeDismissalReason` lets the message handler ask "did the backend
 *     initiate this dismissal?" when a user-or-script ambiguous echo arrives.
 *   - `cleanupScript` returns every live modalId owned by the script so the
 *     caller can fire teardown messages and synthesize dismissals.
 *
 * This registry intentionally does NOT hold a reference to the DOM element
 * handle — that lives in `dom-registry.ts` and is used through the standard
 * DOMHandle pipeline. The two registries are linked by `rootElementId`.
 */
import type { AdvancedModalDismissReason } from '../types/script.js';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AdvancedModalEntry {
  modalId: string;
  rootElementId: string;
  scriptId: string;
  /**
   * Reason a pending dismissal was initiated by the backend. When the
   * frontend's `ls_modal_dismissed` echo arrives, the handler consults this
   * field: if set, fire handlers with that reason and clear it; if unset,
   * the dismissal originated from the user.
   */
  pendingReason: 'script' | 'teardown' | null;
  /** `true` once a dismissal has been processed; further dismissals are no-ops. */
  dismissed: boolean;
  /** The reason the modal was dismissed, once known. */
  dismissedReason: AdvancedModalDismissReason | null;
  /** Handlers registered via `handle.onDismiss(fn)`. Fire once, then cleared. */
  onDismissHandlers: Set<(reason: AdvancedModalDismissReason) => void>;
}

// ─── Registry state ──────────────────────────────────────────────────────────

/** modalId → entry */
const modals = new Map<string, AdvancedModalEntry>();

// ─── Modal lifecycle ─────────────────────────────────────────────────────────

/**
 * Register a new advanced modal. Called synchronously from the API builder
 * before the `ls_modal_open` message is sent.
 */
export function registerModal(
  modalId: string,
  rootElementId: string,
  scriptId: string,
): AdvancedModalEntry {
  const entry: AdvancedModalEntry = {
    modalId,
    rootElementId,
    scriptId,
    pendingReason: null,
    dismissed: false,
    dismissedReason: null,
    onDismissHandlers: new Set(),
  };
  modals.set(modalId, entry);
  return entry;
}

export function getModal(modalId: string): AdvancedModalEntry | undefined {
  return modals.get(modalId);
}

/**
 * How many live (not-yet-dismissed) modals does this script own?
 * Used by the API builder to enforce the 2-per-extension stack limit
 * synchronously before emitting `ls_modal_open`.
 */
export function countLiveModalsByScript(scriptId: string): number {
  let n = 0;
  for (const entry of modals.values()) {
    if (entry.scriptId === scriptId && !entry.dismissed) n++;
  }
  return n;
}

/**
 * Mark that the backend initiated a dismissal with the given reason. The
 * subsequent `ls_modal_dismissed` echo from the frontend will consult this.
 * No-op if already dismissed or if a reason is already pending.
 */
export function markPendingDismissal(
  modalId: string,
  reason: 'script' | 'teardown',
): void {
  const entry = modals.get(modalId);
  if (!entry || entry.dismissed) return;
  if (entry.pendingReason === null) {
    entry.pendingReason = reason;
  }
}

/**
 * Process a dismissal echo from the frontend. Resolves the reason
 * (backend-initiated vs user), flips `dismissed`, and returns the list of
 * handlers to fire with that reason. Handlers are cleared from the entry.
 *
 * Idempotent: second call returns an empty list.
 */
export function markDismissed(modalId: string): {
  reason: AdvancedModalDismissReason;
  handlers: Array<(reason: AdvancedModalDismissReason) => void>;
} | null {
  const entry = modals.get(modalId);
  if (!entry) return null;
  if (entry.dismissed) return { reason: entry.dismissedReason ?? 'user', handlers: [] };

  const reason: AdvancedModalDismissReason = entry.pendingReason ?? 'user';
  entry.dismissed = true;
  entry.dismissedReason = reason;
  entry.pendingReason = null;

  const handlers = [...entry.onDismissHandlers];
  entry.onDismissHandlers.clear();
  return { reason, handlers };
}

/** Register an onDismiss handler. Returns an unsubscribe function. */
export function addDismissHandler(
  modalId: string,
  handler: (reason: AdvancedModalDismissReason) => void,
): () => void {
  const entry = modals.get(modalId);
  if (!entry) return () => {};
  entry.onDismissHandlers.add(handler);
  return () => {
    entry.onDismissHandlers.delete(handler);
  };
}

// ─── Per-script cleanup ──────────────────────────────────────────────────────

/**
 * Return all live modalIds owned by the given script. Does NOT remove them —
 * the caller is expected to send `ls_modal_dismiss` for each (marking the
 * pending reason as `'teardown'`) so the dismissal echo fires handlers with
 * the correct reason. Fully dismissed entries are then dropped by a follow-up
 * `dropEntry` / `__reset`.
 */
export function liveModalsByScript(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of modals.values()) {
    if (entry.scriptId === scriptId && !entry.dismissed) {
      ids.push(entry.modalId);
    }
  }
  return ids;
}

/**
 * Drop a fully dismissed entry from the registry. Called after the handler
 * fan-out completes. Kept separate from `markDismissed` so late-arriving
 * messages targeting a dismissed modal still find the entry and no-op cleanly.
 */
export function dropEntry(modalId: string): void {
  const entry = modals.get(modalId);
  if (!entry) return;
  if (entry.dismissed) modals.delete(modalId);
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  modals.clear();
}
