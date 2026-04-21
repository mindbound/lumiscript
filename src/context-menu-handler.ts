/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND CONTEXT-MENU HANDLER
 * ============================================================================
 * Runs in the browser. Receives `ls_context_menu_show` messages from the
 * backend, invokes `ctx.ui.showContextMenu(options)`, and echoes the user's
 * selection back via `ls_context_menu_result` so the backend can resolve
 * the awaiting promise on `api.ui.showContextMenu(...)`.
 *
 * No local state beyond the message subscription — every call is a
 * request-response cycle keyed by `requestId`. The backend's pending-promise
 * map does the correlation.
 */

import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type ContextMenuMessage = Extract<BackendToFrontend, { type: 'ls_context_menu_show' }>;

function isContextMenuMessage(msg: unknown): msg is ContextMenuMessage {
  return (msg as { type?: string })?.type === 'ls_context_menu_show';
}

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the context-menu command handler on the frontend message
 * multiplexer. Returns a cleanup function that detaches the subscription.
 *
 * In-flight menus on cleanup are left to resolve naturally via the host's
 * dismissal handling — the backend's pending-promise will resolve with
 * whatever `ctx.ui.showContextMenu`'s promise resolves to (typically `null`
 * on dismissal). If the backend's promise map was cleared (script teardown),
 * an arriving `ls_context_menu_result` becomes a no-op via
 * `resolveContextMenu`'s unknown-requestId guard.
 */
export function installContextMenuHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage(async (raw) => {
    if (!isContextMenuMessage(raw)) return;
    const msg = raw as ContextMenuMessage;

    let selectedKey: string | null = null;
    try {
      const result = await ctx.ui.showContextMenu({
        position: msg.options.position,
        items: msg.options.items,
      });
      selectedKey = result.selectedKey;
    } catch (err) {
      // Host threw (invalid options, internal error). Fall through to
      // sending `null`, matching the "user dismissed" semantic so the
      // backend's awaiting promise always resolves instead of hanging.
      console.warn('[LumiScript] ctx.ui.showContextMenu failed:', err);
    }

    sendToBackend({
      type: 'ls_context_menu_result',
      requestId: msg.requestId,
      selectedKey,
    });
  });

  return () => {
    unsubMessages();
  };
}
