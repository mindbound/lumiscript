/**
 * ============================================================================
 * LUMISCRIPT — DOM INJECTION API
 * ============================================================================
 * api.ui.dom — remote DOM manipulation proxy.
 *
 * Scripts run server-side in a Bun worker. This API generates messages that
 * are sent to the frontend via spindle.sendToFrontend(), where the frontend
 * DOM handler translates them into ctx.dom.* calls.
 *
 * All operations are fire-and-forget — the backend does not await confirmation
 * from the frontend.
 *
 * Requires the `app_manipulation` Spindle permission.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, DOMEventData, DOMHandle, DOMInjectOptions } from '../../types/script.js';
import type { BackendToFrontend } from '../../types/messages.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import {
  registerElement,
  resolveStableId,
  unregisterElement,
  registerStyle,
  unregisterStyle,
  addListener,
  removeListener,
  clearListeners,
  cleanupScript,
} from '../dom-registry.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

let _idCounter = 0;
function nextId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${(++_idCounter).toString(36)}`;
}

function send(msg: BackendToFrontend): void {
  spindle.sendToFrontend(msg);
}

// ─── API builder ─────────────────────────────────────────────────────────────

export function buildDOMAPI(deps: APIBuildDeps): LumiScriptAPI['ui']['dom'] {
  const scriptId = deps.script.id;

  function gate(): void {
    assertPerm('app_manipulation', deps.hasPerm);
  }

  function createHandle(elementId: string): DOMHandle {
    return {
      get id() { return elementId; },

      update(html: string): void {
        gate();
        send({ type: 'dom_update', elementId, html });
      },

      remove(): void {
        gate();
        // Clear listeners in registry (frontend will also detach on remove)
        clearListeners(elementId);
        unregisterElement(elementId);
        send({ type: 'dom_remove', elementId });
      },

      on(event: string, handler: (data: DOMEventData) => void): () => void {
        gate();
        const listenerId = nextId('dl');
        addListener(elementId, listenerId, event, handler);
        send({ type: 'dom_listen', elementId, listenerId, event });

        return () => {
          removeListener(elementId, listenerId);
          send({ type: 'dom_unlisten', elementId, listenerId, event });
        };
      },
    };
  }

  return {
    inject(
      target: string,
      html: string,
      options: DOMInjectOptions = {},
    ): DOMHandle {
      gate();
      const { position = 'beforeend', id: stableId } = options;

      // ── Idempotent injection via stable ID ───────────────────────────
      if (stableId) {
        const existingId = resolveStableId(scriptId, stableId);
        if (existingId) {
          // Element already exists — update in place, clear old listeners.
          const cleared = clearListeners(existingId);
          for (const { listenerId, event } of cleared) {
            send({ type: 'dom_unlisten', elementId: existingId, listenerId, event });
          }
          send({ type: 'dom_update', elementId: existingId, html });
          return createHandle(existingId);
        }
      }

      // ── New injection ────────────────────────────────────────────────
      const elementId = nextId('de');
      registerElement(elementId, scriptId, stableId);
      send({
        type: 'dom_inject',
        scriptId,
        elementId,
        target,
        html,
        position,
        stableId,
      });
      return createHandle(elementId);
    },

    addStyle(css: string): { remove(): void } {
      gate();
      const styleId = nextId('ds');
      registerStyle(styleId, scriptId);
      send({ type: 'dom_add_style', scriptId, styleId, css });

      return {
        remove(): void {
          unregisterStyle(styleId);
          send({ type: 'dom_remove_style', styleId });
        },
      };
    },

    cleanup(): void {
      gate();
      const { elementIds, styleIds } = cleanupScript(scriptId);
      // Single message tells the frontend to remove everything for this script.
      // The frontend also removes individual elements/styles, but the bulk
      // message is simpler and handles race conditions.
      if (elementIds.length > 0 || styleIds.length > 0) {
        send({ type: 'dom_cleanup_script', scriptId });
      }
    },
  };
}
