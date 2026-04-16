/**
 * ============================================================================
 * LUMISCRIPT — UI API
 * ============================================================================
 * api.ui — user-facing notifications and dialogs.
 *
 * toast()   — fire-and-forget notification; delegates to spindle.toast which
 *             renders the native Lumiverse toast in the frontend.
 *
 * prompt()  — async text input; calls spindle.prompt.input() directly — no
 *             frontend round-trip. Renders a native Lumiverse themed dialog
 *             with a single-line (or optional multi-line) text input.
 *
 * confirm() — async yes/no; calls spindle.modal.confirm() directly — no
 *             frontend round-trip. Renders a native Lumiverse themed dialog.
 *
 * Both prompt() and confirm() use direct Spindle backend calls. The old
 * pendingUIRequests / window.prompt / window.confirm infrastructure has been
 * removed.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, UINotificationType, ModalItem, ShowModalOptions, ModalResult, ModalHandle } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { shielded, assertPerm } from './shared.js';

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildUIAPI(deps: APIBuildDeps): Omit<LumiScriptAPI['ui'], 'dom'> {
  return {
    toast(
      message: string,
      type: UINotificationType = 'info',
      options?: { title?: string; duration?: number },
    ): void {
      // Delegate to the native Lumiverse toast API — no frontend round-trip needed.
      spindle.toast[type](message, options);
    },

    prompt(
      message: string,
      defaultValue = '',
      options: {
        placeholder?: string;
        submitLabel?: string;
        cancelLabel?: string;
        multiline?: boolean;
      } = {},
    ): Promise<string | null> {
      return shielded(
        spindle.prompt.input({
          title: message,
          defaultValue,
          placeholder: options.placeholder,
          submitLabel: options.submitLabel,
          cancelLabel: options.cancelLabel,
          multiline: options.multiline,
          userId: deps.userId ?? undefined,
        }).then(r => r.value), // r.value is null when cancelled, trimmed string otherwise
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

    editText(
      title?: string,
      value?: string,
      options: { placeholder?: string } = {},
    ): Promise<string | null> {
      return shielded(
        spindle.textEditor.open({
          title,
          value,
          placeholder: options.placeholder,
          userId: deps.userId ?? undefined,
        }).then(r => r.cancelled ? null : r.text),
      );
    },

    showModal(
      items: ModalItem[],
      options: ShowModalOptions,
    ): ModalHandle {
      const openRequestId = crypto.randomUUID();

      const result: Promise<ModalResult> = shielded(
        spindle.modal.open({
          title: options.title,
          // ModalItem is structurally identical to SpindleModalItemDTO —
          // cast to satisfy TypeScript's nominal check.
          items: items as import('lumiverse-spindle-types').SpindleModalItemDTO[],
          width: options.width,
          maxHeight: options.maxHeight,
          persistent: options.persistent,
          modalRequestId: openRequestId,
          userId: deps.userId ?? undefined,
        }).then(r => ({ dismissedBy: r.dismissedBy })),
      );

      return {
        openRequestId,
        result,
        close(): Promise<void> {
          return shielded(spindle.modal.close(openRequestId, deps.userId ?? undefined));
        },
      };
    },

    // ── Push notifications ─────────────────────────────────────────────────

    pushNotification(
      title: string,
      body: string,
      options: { tag?: string; url?: string; icon?: string; rawTitle?: boolean; image?: string } = {},
    ): Promise<{ sent: number }> {
      assertPerm('push_notification', deps.hasPerm, deps.script.name);
      return shielded(
        spindle.push.send({
          title,
          body,
          tag:      options.tag,
          url:      options.url,
          icon:     options.icon,
          rawTitle: options.rawTitle,
          image:    options.image,
        }, deps.userId ?? undefined),
      );
    },

    getPushStatus(): Promise<{ available: boolean; subscriptionCount: number }> {
      assertPerm('push_notification', deps.hasPerm, deps.script.name);
      return shielded(spindle.push.getStatus(deps.userId ?? undefined));
    },
  };
}

// Suppress unused-import warning — these types are re-exported for external consumers.
export type { ModalItem, ShowModalOptions, ModalResult, ModalHandle };
