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
 *   3. **Shell bodies are populated BEFORE any inject that targets into them.**
 *      Scripts use `DOMHandle.injectChild(selector, html, ...)` to insert a
 *      child into a shell body (drawer tab / widget / modal root). The
 *      child inject's selector is resolved against the parent's element-map
 *      ref via `querySelector` — which only finds a match if the parent's
 *      INNER HTML has been populated first. So shell updates must fire
 *      before non-shell injects that depend on them.
 *
 *   4. **Listeners + draggable wire last.** Every listener / drag wiring
 *      needs its target element already mounted.
 *
 * The final order:
 *
 *     1. dom_add_style                        (listStyleReplayMessages)
 *     2. ls_input_bar_action_register         (listInputBarActionReplayMessages)
 *     3. ls_drawer_tab_register + set_badge   (listDrawerTabReplayMessages)
 *     4. ls_float_widget_create + move + set_visible  (listFloatWidgetReplayMessages)
 *     5. dom_update for shells                (listShellUpdateMessages)
 *     6. dom_inject / dom_inject_at_message   (listElementInjectMessages)
 *     7. dom_listen                           (listListenerReplayMessages)
 *     8. dom_make_draggable                   (listDraggableReplayMessages)
 *     9. dom_delegate_register                (listDelegationReplayMessages)
 *
 *   The delegation step (9) lands LAST because the FE's capture-phase
 *   listeners attach at the chat / document root, which is always mounted
 *   regardless of the per-script DOM state above. Order vs (1)-(8)
 *   doesn't matter for correctness, but trailing the sequence keeps the
 *   "host-UI shells first, then content, then event wiring" mental
 *   pattern consistent.
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
import { listReplayMessages as listTagInterceptorReplayMessages } from './message-tag-handler-registry.js';
import { listReplayMessages as listDrawerTabReplayMessages }      from './drawer-tab-registry.js';
import { listReplayMessages as listFloatWidgetReplayMessages }    from './float-widget-registry.js';
import {
  listStyleReplayMessages,
  listElementInjectMessages,
  listShellUpdateMessages,
  listListenerReplayMessages,
  listDraggableReplayMessages,
  listDelegationReplayMessages,
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
    ...listStyleReplayMessages(),            // 1. CSS first (avoids FOUC)
    ...listInputBarActionReplayMessages(),   // 2. Host-UI: popover rows
    ...listTagInterceptorReplayMessages(),   //    Message-tag interceptors (order-independent)
    ...listDrawerTabReplayMessages(),        // 3. Host-UI: sidebar tabs (+ shells registered)
    ...listFloatWidgetReplayMessages(),      // 4. Host-UI: overlay widgets (+ shells registered)
    ...listShellUpdateMessages(),            // 5. Fill tab / widget body HTML (so children below resolve)
    ...listElementInjectMessages(),          // 6. Standalone + shell-scoped DOM injections
    ...listListenerReplayMessages(),         // 7. Re-attach event listeners
    ...listDraggableReplayMessages(),        // 8. Re-wire makeDraggable
    ...listDelegationReplayMessages(),       // 9. Re-install delegation capture listeners (v0.27.1)
  ];
}
