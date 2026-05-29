/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND APP MOUNT HANDLER
 * ============================================================================
 * Translates `ls_app_mount_*` messages from the backend into calls against
 * `ctx.ui.mountApp(...)`. The mount's `.root` HTMLElement is bound into the
 * shared DOM element map via `bindExternalElement`, so subsequent `dom_*`
 * messages targeting `rootElementId` flow through the existing DOM pipeline —
 * identical trick to the float-widget + advanced-modal handlers.
 *
 * Simpler than float widgets: no position / drag / move. Just create (with
 * `.root` binding + Option-B confirm echo), set-visible, and destroy.
 */

import type { SpindleFrontendContext, SpindleAppMountHandle } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import { bindExternalElement, unbindExternalElement } from './dom-handler.js';

type AppMountMessage = Extract<BackendToFrontend,
  | { type: 'ls_app_mount_create' }
  | { type: 'ls_app_mount_set_visible' }
  | { type: 'ls_app_mount_destroy' }
>;

function isAppMountMessage(msg: unknown): msg is AppMountMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_app_mount_create'
      || t === 'ls_app_mount_set_visible'
      || t === 'ls_app_mount_destroy';
}

interface OpenMount {
  mountId: string;
  rootElementId: string;
  handle: SpindleAppMountHandle;
}

/** mountId → open mount state */
const mounts = new Map<string, OpenMount>();

/**
 * Install the app-mount command handler on the frontend message multiplexer.
 * Returns a cleanup function that destroys every live mount and detaches the
 * subscription.
 */
export function installAppMountHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isAppMountMessage(raw)) return;
    const msg = raw as AppMountMessage;

    switch (msg.type) {
      // ── Create ─────────────────────────────────────────────────────────
      case 'ls_app_mount_create': {
        const { scriptId, mountId, rootElementId, options } = msg;

        // Defensive: tear down any prior handle under this id rather than
        // leaking two overlapping mounts (UUID collisions are astronomically
        // unlikely, but the backend allocates per-call).
        const existing = mounts.get(mountId);
        if (existing) {
          try { existing.handle.destroy(); } catch { /* ignore */ }
          unbindExternalElement(existing.rootElementId);
          mounts.delete(mountId);
        }

        let handle: SpindleAppMountHandle;
        try {
          handle = ctx.ui.mountApp({
            className: options.className,
            position:  options.position,
          });
        } catch (err) {
          // Host rejected. The script's handle exists and will silently no-op
          // on further ops (the backend registry entry is valid but no
          // frontend mount exists). Surface to console.
          console.warn('[LumiScript] ctx.ui.mountApp failed:', err);
          break;
        }

        // Bind the mount's `.root` element into the shared DOM map so
        // backend-initiated dom_* messages routed to `rootElementId`
        // manipulate the mount body.
        bindExternalElement(rootElementId, handle.root);

        // `data-ls-script` is required for `ctx.dom.addStyle`'s
        // `@scope ([data-ls-script="..."])` wrapper to match content inside
        // the mount; `data-ls-mount` lets scripts target a specific mount.
        handle.root.setAttribute('data-ls-script', scriptId);
        handle.root.setAttribute('data-ls-mount', mountId);

        mounts.set(mountId, { mountId, rootElementId, handle });

        // Option-B confirm — the backend's mountApp request is awaiting this
        // echo before resolving the open IPC, gating the child's setVisible /
        // destroy / root.* dispatches against the FE mount race.
        sendToBackend({ type: 'ls_app_mount_created', mountId });
        break;
      }

      // ── Set Visible ────────────────────────────────────────────────────
      case 'ls_app_mount_set_visible': {
        const entry = mounts.get(msg.mountId);
        if (!entry) break;
        try { entry.handle.setVisible(msg.visible); } catch { /* host error — ignore */ }
        break;
      }

      // ── Destroy ────────────────────────────────────────────────────────
      case 'ls_app_mount_destroy': {
        const entry = mounts.get(msg.mountId);
        if (!entry) break;
        try { entry.handle.destroy(); } catch { /* host error — ignore */ }
        unbindExternalElement(entry.rootElementId);
        mounts.delete(msg.mountId);
        break;
      }
    }
  });

  return () => {
    unsubMessages();
    for (const entry of mounts.values()) {
      try { entry.handle.destroy(); } catch { /* ignore */ }
      unbindExternalElement(entry.rootElementId);
    }
    mounts.clear();
  };
}
