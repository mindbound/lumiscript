/**
 * ============================================================================
 * LUMISCRIPT — UI API
 * ============================================================================
 * api.ui — user-facing notifications and dialogs.
 *
 * toast()   — fire-and-forget notification; delegates to spindle.toast which
 *             renders the native Lumiverse toast in the frontend.
 *
 * prompt()  — async text input; sends ui_request to the frontend, which shows
 *             a native dialog and sends back ui_response with the user's input.
 *
 * confirm() — async yes/no; calls spindle.modal.confirm() directly — no
 *             frontend round-trip. Renders a native Lumiverse themed dialog.
 *
 * Pending requests auto-resolve with null after TIMEOUT_MS to prevent
 * hanging script executions when the panel is closed mid-dialog.
 * (Only prompt() uses the pending-request pattern now.)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, UINotificationType } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { shielded } from './shared.js';
import { generateUUID } from '../../utils/uuid.js';

// ─── Pending request registry (module-level singleton) ────────────────────────

/** Resolvers keyed by requestId. Cleared when resolved or timed out. */
const pendingUIRequests = new Map<string, (value: string | boolean | null) => void>();

/** Auto-resolve timeout — 10 minutes. Prevents hung promises if panel closes. */
const TIMEOUT_MS = 10 * 60 * 1000;

/**
 * Called by the backend's onFrontendMessage handler when a ui_response arrives.
 * Returns true if the requestId was found and resolved, false otherwise.
 */
export function resolvePendingUIRequest(
  requestId: string,
  value: string | boolean | null,
): boolean {
  const resolve = pendingUIRequests.get(requestId);
  if (!resolve) return false;
  pendingUIRequests.delete(requestId);
  resolve(value);
  return true;
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildUIAPI(deps: APIBuildDeps): LumiScriptAPI['ui'] {
  const sendRequest = (msg: import('../../types/messages.js').BackendToFrontend) => {
    spindle.sendToFrontend(msg);
  };

  return {
    toast(
      message: string,
      type: UINotificationType = 'info',
      options?: { title?: string; duration?: number },
    ): void {
      // Delegate to the native Lumiverse toast API — no frontend round-trip needed.
      spindle.toast[type](message, options);
    },

    prompt(message: string, defaultValue = ''): Promise<string | null> {
      const requestId = generateUUID();
      return shielded(
        new Promise<string | null>((resolve) => {
          const timer = setTimeout(() => {
            pendingUIRequests.delete(requestId);
            resolve(null); // timeout — treat as cancelled
          }, TIMEOUT_MS);

          pendingUIRequests.set(requestId, (value) => {
            clearTimeout(timer);
            resolve(value as string | null);
          });

          sendRequest({
            type: 'ui_request',
            requestId,
            kind: 'prompt',
            message,
            defaultValue,
          });
        }),
      );
    },

    confirm(
      message: string,
      title = '',
      options: {
        variant?: 'info' | 'warning' | 'danger' | 'success';
        confirmLabel?: string;
        cancelLabel?: string;
      } = {},
    ): Promise<boolean> {
      return shielded(
        spindle.modal.confirm({
          title: title || 'Confirm',
          message,
          variant: options.variant,
          confirmLabel: options.confirmLabel,
          cancelLabel: options.cancelLabel,
          userId: deps.userId ?? undefined,
        }).then(r => r.confirmed),
      );
    },
  };
}
