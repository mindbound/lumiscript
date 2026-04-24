/**
 * ============================================================================
 * LUMISCRIPT — REPLAY ORCHESTRATOR
 * ============================================================================
 * Composes the cross-registry replay sequence that reconstructs every
 * script-registered host-UI surface on a freshly-mounted frontend (after a
 * browser refresh). Invoked from the `frontend_ready` handler in `backend.ts`
 * when `triggersInitialized` is already true — a signal that the worker
 * survived and the frontend is reconnecting, not cold-starting.
 *
 * The orchestration order matters. It's chosen so:
 *
 *   1. **Styles arrive before any content they target.** `addStyle` injections
 *      must land before `dom_inject` or any shell creation (modal / widget /
 *      tab) — otherwise injected content flashes unstyled while it waits for
 *      the CSS to re-attach.
 *
 *   2. **Parent shells exist before their content.** Drawer tabs and float
 *      widgets create host-UI containers whose body is bound to a shared-map
 *      `rootElementId`. The `dom_update` messages that repopulate those
 *      bodies (from the DOM registry's "shell" kind) have to come *after*
 *      the parent's register message, or the frontend's DOM handler resolves
 *      `elementId → (nothing)`.
 *
 *   3. **Listeners + draggable wire last.** Every listener / drag wiring
 *      needs its target element already mounted.
 *
 * The final order:
 *
 *     1. dom_add_style                        (listStyleReplayMessages)
 *     2. ls_input_bar_action_register         (listInputBarActionReplayMessages)
 *     3. ls_drawer_tab_register + set_badge   (listDrawerTabReplayMessages)
 *     4. ls_float_widget_create + move + set_visible  (listFloatWidgetReplayMessages)
 *     5. dom_inject / dom_inject_at_message   (listElementInjectMessages)
 *     6. dom_update for shells                (listShellUpdateMessages)
 *     7. dom_listen                           (listListenerReplayMessages)
 *     8. dom_make_draggable                   (listDraggableReplayMessages)
 *
 * Modals are deliberately NOT replayed — an open modal represents an
 * interrupted user interaction and refresh-mid-flow is expected to close it.
 * `showContextMenu` / `prompt` / `confirm` promises reject on teardown by the
 * existing shielded() machinery; they also don't replay.
 *
 * Pure composition: this module calls the per-registry builders (all pure)
 * and concatenates their outputs. It never sends a message itself — the
 * caller in `backend.ts` is responsible for flushing the returned array via
 * `spindle.sendToFrontend()`.
 */

import type { BackendToFrontend } from '../types/messages.js';
import { listReplayMessages as listInputBarActionReplayMessages } from './input-bar-action-registry.js';
import { listReplayMessages as listDrawerTabReplayMessages }      from './drawer-tab-registry.js';
import { listReplayMessages as listFloatWidgetReplayMessages }    from './float-widget-registry.js';
import {
  listStyleReplayMessages,
  listElementInjectMessages,
  listShellUpdateMessages,
  listListenerReplayMessages,
  listDraggableReplayMessages,
} from './dom-registry.js';

/**
 * Build the full replay message sequence in the correct cross-registry order.
 *
 * Pure: mutates no registry state, sends nothing. Call from the frontend-ready
 * handler and iterate the returned array, flushing each message via
 * `spindle.sendToFrontend()`.
 *
 * Returns `[]` when no registries hold live state (e.g. refresh happened
 * before any script registered anything — harmless).
 */
export function buildReplayMessages(): BackendToFrontend[] {
  return [
    ...listStyleReplayMessages(),            // 1. CSS first
    ...listInputBarActionReplayMessages(),   // 2. Host-UI: popover rows
    ...listDrawerTabReplayMessages(),        // 3. Host-UI: sidebar tabs (+ shells)
    ...listFloatWidgetReplayMessages(),      // 4. Host-UI: overlay widgets (+ shells)
    ...listElementInjectMessages(),          // 5. Standalone DOM injections
    ...listShellUpdateMessages(),            // 6. Fill in tab / widget body HTML
    ...listListenerReplayMessages(),         // 7. Re-attach event listeners
    ...listDraggableReplayMessages(),        // 8. Re-wire makeDraggable
  ];
}
