/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND INPUT-BAR ACTION HANDLER
 * ============================================================================
 * Runs in the browser. Translates `ls_input_bar_action_*` messages from the
 * backend into calls against `ctx.ui.registerInputBarAction(...)`, and echoes
 * click events back to the backend so the script's onClick handlers fire.
 *
 * Local state: `Map<${scriptId}:${actionId}, SpindleInputBarActionHandle>`.
 * The backend is the source of truth for label / enabled state; this map
 * just holds the Spindle handles so we can route set-label / set-enabled /
 * destroy messages to the correct one.
 *
 * On uninstall, every live action is destroyed. Script-scoped teardown
 * (on disable / delete) is already handled by the backend emitting
 * `ls_input_bar_action_destroy` for each owned action before clearing its
 * registry — this handler just has to process those in the normal path.
 */

import type { SpindleFrontendContext, SpindleInputBarActionHandle } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type InputBarActionMessage = Extract<BackendToFrontend,
  | { type: 'ls_input_bar_action_register' }
  | { type: 'ls_input_bar_action_set_label' }
  | { type: 'ls_input_bar_action_set_enabled' }
  | { type: 'ls_input_bar_action_destroy' }
>;

function isInputBarActionMessage(msg: unknown): msg is InputBarActionMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_input_bar_action_register'
      || t === 'ls_input_bar_action_set_label'
      || t === 'ls_input_bar_action_set_enabled'
      || t === 'ls_input_bar_action_destroy';
}

// ─── State ───────────────────────────────────────────────────────────────────

/** `${scriptId}:${actionId}` → Spindle handle. */
const actions = new Map<string, SpindleInputBarActionHandle>();

function key(scriptId: string, actionId: string): string {
  return `${scriptId}:${actionId}`;
}

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the input-bar-action command handler on the frontend message
 * multiplexer. Returns a cleanup function that destroys every live action
 * and detaches the subscription.
 */
export function installInputBarActionHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isInputBarActionMessage(raw)) return;
    const msg = raw as InputBarActionMessage;
    const k = key(msg.scriptId, msg.actionId);

    switch (msg.type) {
      // ── Register ───────────────────────────────────────────────────────
      case 'ls_input_bar_action_register': {
        // Duplicate register? Shouldn't happen — backend rejects duplicate
        // (scriptId, actionId) pairs via the registry. If it does, destroy
        // the prior handle to avoid two host actions sharing one key.
        const existing = actions.get(k);
        if (existing) {
          try { existing.destroy(); } catch { /* ignore */ }
          actions.delete(k);
        }

        let handle: SpindleInputBarActionHandle;
        try {
          handle = ctx.ui.registerInputBarAction({
            id:       msg.actionId,
            label:    msg.options.label,
            iconSvg:  msg.options.iconSvg,
            iconUrl:  msg.options.iconUrl,
            enabled:  msg.options.enabled,
          });
        } catch (err) {
          // Host rejected (e.g. global 12-action limit exceeded despite
          // the backend per-script pre-check, or unexpected host error).
          // No good recovery path from the frontend; surface to console
          // so developers see it during iteration.
          console.warn('[LumiScript] ctx.ui.registerInputBarAction failed:', err);
          break;
        }

        actions.set(k, handle);

        // Wire click echo. The host fires onClick whenever the user taps
        // the action row; we post `ls_input_bar_action_click` so the
        // backend registry can fan out to every handler the script
        // registered via `handle.onClick(fn)`.
        handle.onClick(() => {
          sendToBackend({
            type: 'ls_input_bar_action_click',
            scriptId: msg.scriptId,
            actionId: msg.actionId,
          });
        });
        break;
      }

      // ── Set Label ──────────────────────────────────────────────────────
      case 'ls_input_bar_action_set_label': {
        const handle = actions.get(k);
        if (!handle) break;
        try { handle.setLabel(msg.label); } catch { /* host error — ignore */ }
        break;
      }

      // ── Set Enabled ────────────────────────────────────────────────────
      case 'ls_input_bar_action_set_enabled': {
        const handle = actions.get(k);
        if (!handle) break;
        try { handle.setEnabled(msg.enabled); } catch { /* host error — ignore */ }
        break;
      }

      // ── Destroy ────────────────────────────────────────────────────────
      case 'ls_input_bar_action_destroy': {
        const handle = actions.get(k);
        if (!handle) break;
        try { handle.destroy(); } catch { /* host error — ignore */ }
        actions.delete(k);
        break;
      }
    }
  });

  // ── Cleanup ──────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();
    for (const handle of actions.values()) {
      try { handle.destroy(); } catch { /* ignore */ }
    }
    actions.clear();
  };
}
