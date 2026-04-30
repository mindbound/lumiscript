/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND ADVANCED MODAL HANDLER
 * ============================================================================
 * Runs in the browser. Receives `ls_modal_*` command messages from the backend
 * and translates them into calls against `ctx.ui.showModal(...)`.
 *
 * The modal body element returned by Spindle (`modal.root`) is bound into the
 * shared DOM element map via `bindExternalElement`, so subsequent `dom_update`
 * / `dom_listen` / `dom_remove` messages from the backend — driven by the
 * `DOMHandle` returned as `handle.root` — work against it using the existing
 * DOM message pipeline. No new message types are needed for content control.
 *
 * On dismissal (user-initiated or response to `ls_modal_dismiss`), sends an
 * `ls_modal_dismissed` message to the backend so the registry can fire
 * `onDismiss` handlers with the correct reason.
 */

import type { SpindleFrontendContext, SpindleModalHandle } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import { bindExternalElement, unbindExternalElement } from './dom-handler.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type ModalMessage = Extract<BackendToFrontend,
  | { type: 'ls_modal_open' }
  | { type: 'ls_modal_set_title' }
  | { type: 'ls_modal_dismiss' }
>;

function isModalMessage(msg: unknown): msg is ModalMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_modal_open'
      || t === 'ls_modal_set_title'
      || t === 'ls_modal_dismiss';
}

// ─── State ───────────────────────────────────────────────────────────────────

interface OpenModal {
  modalId: string;
  rootElementId: string;
  handle: SpindleModalHandle;
  /**
   * `true` once an `ls_modal_dismissed` has been sent for this modal. Prevents
   * the onDismiss-echo path from firing twice when both the user and a
   * subsequent backend teardown message race for the same modal.
   */
  echoed: boolean;
}

/** modalId → state */
const modals = new Map<string, OpenModal>();

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the advanced-modal command handler on the frontend message
 * multiplexer. Returns a cleanup function that dismisses every live modal
 * and detaches the message subscription.
 */
export function installModalHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isModalMessage(raw)) return;
    const msg = raw as ModalMessage;

    switch (msg.type) {
      // ── Open ───────────────────────────────────────────────────────────
      case 'ls_modal_open': {
        const { scriptId, modalId, rootElementId, options } = msg;

        // Already open? (Shouldn't happen — backend guards via registry —
        // but if it does, ignore the duplicate rather than stack two
        // host modals on one modalId.)
        if (modals.has(modalId)) break;

        let handle: SpindleModalHandle;
        try {
          handle = ctx.ui.showModal({
            title:      options.title,
            width:      options.width,
            maxHeight:  options.maxHeight,
            persistent: options.persistent,
          });
        } catch (err) {
          // Host rejected (e.g. stack-limit overflow despite the backend
          // pre-check, or an unexpected host error). Surface as an immediate
          // dismissal echo so the backend's onDismiss handlers still fire
          // and the registry state doesn't leak.
          console.warn('[LumiScript] ctx.ui.showModal failed:', err);
          sendToBackend({ type: 'ls_modal_dismissed', modalId });
          break;
        }

        // Bind the body element for the DOM pipeline.
        bindExternalElement(rootElementId, handle.root);

        // Tag the root element:
        // - `data-ls-script` is critical: `ctx.dom.addStyle` wraps CSS in
        //   `@scope ([data-ls-script="<scriptId>"])`, so without this the
        //   script's scoped CSS wouldn't match any content inside the modal
        //   body (which lives outside the normal injection wrapper chain).
        // - `data-ls-modal` identifies the modal for targeted CSS or DOM
        //   operations from scripts.
        handle.root.setAttribute('data-ls-script', scriptId);
        handle.root.setAttribute('data-ls-modal', modalId);

        const entry: OpenModal = { modalId, rootElementId, handle, echoed: false };
        modals.set(modalId, entry);

        // Wire dismissal echo. Fires on user-close AND on backend-initiated
        // dismiss() calls (the host invokes onDismiss for both).
        handle.onDismiss(() => {
          if (entry.echoed) return;
          entry.echoed = true;
          unbindExternalElement(rootElementId);
          modals.delete(modalId);
          sendToBackend({ type: 'ls_modal_dismissed', modalId });
        });

        // Phase 9d.4.d "Option B" — confirm to the backend that the modal
        // is fully mounted: `modals` Map populated, DOM element bound,
        // dismissal echo wired. The backend's `handleShowAdvancedModalRequest`
        // is awaiting this echo before resolving the open IPC's api-response,
        // which gates the script-runner child's `setTitle`/`dismiss`/`root.*`
        // dispatches against the frontend race window.
        //
        // Sent AFTER `modals.set` and `handle.onDismiss` registration so any
        // backend-side dispatch that fires the moment we resolve the awaiter
        // sees a fully-wired modal on the frontend side.
        sendToBackend({ type: 'ls_modal_opened', modalId });
        break;
      }

      // ── Set Title ──────────────────────────────────────────────────────
      case 'ls_modal_set_title': {
        const entry = modals.get(msg.modalId);
        if (!entry) break;
        try { entry.handle.setTitle(msg.title); } catch { /* host error — ignore */ }
        break;
      }

      // ── Dismiss ────────────────────────────────────────────────────────
      case 'ls_modal_dismiss': {
        const entry = modals.get(msg.modalId);
        if (!entry) break;
        // Triggering dismiss() causes the host to fire our onDismiss handler,
        // which sends the echo — don't pre-empt it here.
        try { entry.handle.dismiss(); } catch {
          // If dismiss throws (e.g. already dismissed on the host side),
          // synthesize the echo ourselves so backend handlers still fire.
          if (!entry.echoed) {
            entry.echoed = true;
            unbindExternalElement(entry.rootElementId);
            modals.delete(msg.modalId);
            sendToBackend({ type: 'ls_modal_dismissed', modalId: msg.modalId });
          }
        }
        break;
      }
    }
  });

  // ── Cleanup ──────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();
    for (const entry of modals.values()) {
      try { entry.handle.dismiss(); } catch { /* ignore */ }
      unbindExternalElement(entry.rootElementId);
    }
    modals.clear();
  };
}
