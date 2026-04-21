/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND FLOAT WIDGET HANDLER
 * ============================================================================
 * Translates `ls_float_widget_*` messages from the backend into calls
 * against `ctx.ui.createFloatWidget(...)`. The widget's `.root` HTMLElement
 * is bound into the shared DOM element map via `bindExternalElement`, so
 * subsequent `dom_*` messages targeting `rootElementId` flow through the
 * existing DOM pipeline — identical trick to the advanced-modal handler.
 *
 * Drag-end events from the host's Spindle handle are echoed back via
 * `ls_float_widget_drag_end` so the backend registry can update its
 * position cache and fan out to `onDragEnd` handlers the script registered.
 *
 * On uninstall, every live widget is destroyed. Script-scoped teardown is
 * already handled by the backend emitting `ls_float_widget_destroy` for each
 * owned widget before clearing its registry — this handler just processes
 * those in the normal path.
 */

import type { SpindleFrontendContext, SpindleFloatWidgetHandle } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import { bindExternalElement, unbindExternalElement } from './dom-handler.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type FloatWidgetMessage = Extract<BackendToFrontend,
  | { type: 'ls_float_widget_create' }
  | { type: 'ls_float_widget_move' }
  | { type: 'ls_float_widget_set_visible' }
  | { type: 'ls_float_widget_destroy' }
>;

function isFloatWidgetMessage(msg: unknown): msg is FloatWidgetMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_float_widget_create'
      || t === 'ls_float_widget_move'
      || t === 'ls_float_widget_set_visible'
      || t === 'ls_float_widget_destroy';
}

// ─── State ───────────────────────────────────────────────────────────────────

interface OpenWidget {
  widgetId: string;
  rootElementId: string;
  handle: SpindleFloatWidgetHandle;
}

/** widgetId → open widget state */
const widgets = new Map<string, OpenWidget>();

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the float-widget command handler on the frontend message
 * multiplexer. Returns a cleanup function that destroys every live widget
 * and detaches the subscription.
 */
export function installFloatWidgetHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isFloatWidgetMessage(raw)) return;
    const msg = raw as FloatWidgetMessage;

    switch (msg.type) {
      // ── Create ─────────────────────────────────────────────────────────
      case 'ls_float_widget_create': {
        const { scriptId, widgetId, rootElementId, options } = msg;

        // Duplicate create for the same widgetId shouldn't happen (UUIDs
        // collide at astronomically low rates + the backend allocates them
        // per-call), but be defensive: tear down any prior handle rather
        // than leaking two overlapping Spindle widgets under one key.
        const existing = widgets.get(widgetId);
        if (existing) {
          try { existing.handle.destroy(); } catch { /* ignore */ }
          unbindExternalElement(existing.rootElementId);
          widgets.delete(widgetId);
        }

        let handle: SpindleFloatWidgetHandle;
        try {
          handle = ctx.ui.createFloatWidget({
            width:            options.width,
            height:           options.height,
            initialPosition:  options.initialPosition,
            snapToEdge:       options.snapToEdge,
            tooltip:          options.tooltip,
            chromeless:       options.chromeless,
          });
        } catch (err) {
          // Host rejected (e.g. global 8-widget limit or unexpected error).
          // Best we can do is surface to console; the script's handle
          // already exists and will silently no-op on further ops because
          // the backend registry entry is valid but no frontend widget
          // exists to manipulate.
          console.warn('[LumiScript] ctx.ui.createFloatWidget failed:', err);
          break;
        }

        // Bind the widget's `.root` element into the shared DOM map so
        // backend-initiated `dom_update` / `dom_listen` / etc. messages
        // routed to `rootElementId` manipulate the widget body.
        bindExternalElement(rootElementId, handle.root);

        // Tag the root element:
        // - `data-ls-script` is required for `ctx.dom.addStyle`'s
        //   `@scope ([data-ls-script="..."])` wrapper to match content
        //   inside the widget (same reason as advanced modals).
        // - `data-ls-widget` lets scripts target specific widgets via CSS.
        handle.root.setAttribute('data-ls-script', scriptId);
        handle.root.setAttribute('data-ls-widget', widgetId);

        widgets.set(widgetId, { widgetId, rootElementId, handle });

        // Wire drag-end echo. The host fires onDragEnd with the final
        // coordinates after each drag; we post the echo so the backend
        // registry can update its cache and fan out to script handlers.
        handle.onDragEnd((pos) => {
          sendToBackend({
            type: 'ls_float_widget_drag_end',
            widgetId,
            x: pos.x,
            y: pos.y,
          });
        });
        break;
      }

      // ── Move ───────────────────────────────────────────────────────────
      case 'ls_float_widget_move': {
        const entry = widgets.get(msg.widgetId);
        if (!entry) break;
        try { entry.handle.moveTo(msg.x, msg.y); } catch { /* host error — ignore */ }
        break;
      }

      // ── Set Visible ────────────────────────────────────────────────────
      case 'ls_float_widget_set_visible': {
        const entry = widgets.get(msg.widgetId);
        if (!entry) break;
        try { entry.handle.setVisible(msg.visible); } catch { /* host error — ignore */ }
        break;
      }

      // ── Destroy ────────────────────────────────────────────────────────
      case 'ls_float_widget_destroy': {
        const entry = widgets.get(msg.widgetId);
        if (!entry) break;
        try { entry.handle.destroy(); } catch { /* host error — ignore */ }
        unbindExternalElement(entry.rootElementId);
        widgets.delete(msg.widgetId);
        break;
      }
    }
  });

  // ── Cleanup ──────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();
    for (const entry of widgets.values()) {
      try { entry.handle.destroy(); } catch { /* ignore */ }
      unbindExternalElement(entry.rootElementId);
    }
    widgets.clear();
  };
}
