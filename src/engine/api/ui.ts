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

import type {
  LumiScriptAPI,
  UINotificationType,
  ModalItem,
  ShowModalOptions,
  ModalResult,
  ModalHandle,
  AdvancedModalOptions,
  AdvancedModalHandle,
  AdvancedModalDismissReason,
  ShowContextMenuOptions,
  ContextMenuItem,
  InputBarActionOptions,
  InputBarActionHandle,
  FloatWidgetOptions,
  FloatWidgetHandle,
  DrawerTabOptions,
  DrawerTabHandle,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { shielded, assertPerm } from './shared.js';
import { createDOMHandle, nextDOMId } from './dom.js';
import { registerElement } from '../dom-registry.js';
import {
  registerModal,
  countLiveModalsByScript,
  markPendingDismissal,
  addDismissHandler,
  getModal,
} from '../advanced-modal-registry.js';
import {
  registerAction,
  countByScript as countActionsByScript,
  updateLabel as updateActionLabel,
  updateEnabled as updateActionEnabled,
  addClickHandler as addActionClickHandler,
  destroyAction,
} from '../input-bar-action-registry.js';
import {
  registerWidget,
  getWidget,
  countLiveWidgetsByScript,
  updatePosition as updateWidgetPosition,
  updateVisibility as updateWidgetVisibility,
  addDragEndHandler,
  destroyWidget,
} from '../float-widget-registry.js';
import {
  registerTab,
  countByScript as countTabsByScript,
  countTotal as countTotalTabs,
  addActivateHandler,
  destroyTab,
} from '../drawer-tab-registry.js';

/** Maximum concurrent advanced modals per extension (host-enforced). */
const ADVANCED_MODAL_STACK_LIMIT = 2;

/** Maximum concurrent input-bar actions per extension (host-enforced: 4). */
const INPUT_BAR_ACTION_STACK_LIMIT = 4;

/** Maximum concurrent float widgets per extension (host-enforced: 2). */
const FLOAT_WIDGET_STACK_LIMIT = 2;

/**
 * LumiScript-enforced per-script drawer-tab cap. Prevents any single script
 * from starving the shared per-extension quota (host enforces 4 total).
 */
const DRAWER_TAB_PER_SCRIPT_LIMIT = 1;

/** Spindle's host cap on drawer tabs per extension. */
const DRAWER_TAB_TOTAL_LIMIT = 4;

// ─── Context menu — request-response bridge ─────────────────────────────────

/**
 * Map of in-flight `api.ui.showContextMenu` calls keyed by requestId.
 * The backend message handler in `backend.ts` calls `resolveContextMenu`
 * when an `ls_context_menu_result` arrives from the frontend, which resolves
 * the matching promise.
 */
const pendingContextMenus = new Map<string, (selectedKey: string | null) => void>();

/**
 * Resolve a pending `showContextMenu` call. Invoked by the backend's
 * frontend-message handler when the user makes (or declines) a selection.
 * No-op if the requestId is unknown (e.g. a stale result arriving after a
 * script teardown cleared all pending calls).
 */
export function resolveContextMenu(requestId: string, selectedKey: string | null): void {
  const resolve = pendingContextMenus.get(requestId);
  if (!resolve) return;
  pendingContextMenus.delete(requestId);
  resolve(selectedKey);
}

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

    showAdvancedModal(options: AdvancedModalOptions): AdvancedModalHandle {
      assertPerm('app_manipulation', deps.hasPerm, deps.script.name);

      const scriptId = deps.script.id;

      // ── Pre-check stack limit ──────────────────────────────────────────
      // Host enforces ≤ 2 modals per extension; catching the overflow here
      // surfaces it as a synchronous throw (with a clear message) instead
      // of as a silent no-op on the frontend.
      const live = countLiveModalsByScript(scriptId);
      if (live >= ADVANCED_MODAL_STACK_LIMIT) {
        throw new Error(
          `api.ui.showAdvancedModal: stack limit reached (${ADVANCED_MODAL_STACK_LIMIT} modals open for this script).` +
          ` Dismiss an existing modal before opening another.`,
        );
      }

      // ── Allocate IDs ───────────────────────────────────────────────────
      // `modalId` identifies the modal lifecycle on both sides;
      // `rootElementId` is what the frontend binds to the modal body so
      // the existing `dom_*` pipeline can manipulate content via the
      // DOMHandle returned as `.root`.
      const modalId       = crypto.randomUUID();
      const rootElementId = nextDOMId('mr');

      // Register in both registries BEFORE sending the open message so
      // any follow-up DOM op that the script fires synchronously after
      // this call has its elementId already resolved.
      //
      // NOTE: `registerElement` is passed NO stable ID — we never want
      // idempotent lookup to collide with a modal body.
      registerElement(rootElementId, scriptId);
      registerModal(modalId, rootElementId, scriptId);

      // ── Construct the handle ───────────────────────────────────────────
      const root = createDOMHandle(rootElementId, deps);

      const handle: AdvancedModalHandle = {
        modalId,
        root,
        get dismissed(): boolean {
          return getModal(modalId)?.dismissed ?? true;
        },
        setTitle(title: string): void {
          if (getModal(modalId)?.dismissed) return;
          spindle.sendToFrontend({ type: 'ls_modal_set_title', modalId, title });
        },
        dismiss(): void {
          const entry = getModal(modalId);
          if (!entry || entry.dismissed) return;
          markPendingDismissal(modalId, 'script');
          spindle.sendToFrontend({ type: 'ls_modal_dismiss', modalId });
        },
        onDismiss(fn: (reason: AdvancedModalDismissReason) => void): () => void {
          const entry = getModal(modalId);
          if (!entry) return () => {};
          // If the modal is already dismissed, fire on next microtask with
          // the recorded reason so callers don't have to special-case it.
          if (entry.dismissed && entry.dismissedReason) {
            const reason = entry.dismissedReason;
            queueMicrotask(() => {
              try { fn(reason); } catch { /* swallow user callback errors */ }
            });
            return () => {};
          }
          return addDismissHandler(modalId, fn);
        },
      };

      // ── Fire the open message ─────────────────────────────────────────
      spindle.sendToFrontend({
        type: 'ls_modal_open',
        scriptId,
        modalId,
        rootElementId,
        options: {
          title:      options.title,
          width:      options.width,
          maxHeight:  options.maxHeight,
          persistent: options.persistent,
        },
      });

      return handle;
    },

    showContextMenu(options: ShowContextMenuOptions): Promise<string | null> {
      const requestId = crypto.randomUUID();

      // Normalise items to a plain-object shape for the wire. Avoids
      // leaking any extra script-side properties through structured clone.
      const items = options.items.map((it): ContextMenuItem => ({
        key:      it.key,
        label:    it.label,
        type:     it.type,
        disabled: it.disabled,
        danger:   it.danger,
        active:   it.active,
      }));

      return shielded(new Promise<string | null>((resolve) => {
        pendingContextMenus.set(requestId, resolve);
        spindle.sendToFrontend({
          type: 'ls_context_menu_show',
          requestId,
          options: {
            position: { x: options.position.x, y: options.position.y },
            items,
          },
        });
      }));
    },

    registerInputBarAction(options: InputBarActionOptions): InputBarActionHandle {
      const scriptId = deps.script.id;

      // ── Validate id ──────────────────────────────────────────────────
      // The id is the primary identifier for every follow-up call
      // (setLabel / setEnabled / destroy) and for dispatching click events
      // back from the frontend. An empty or non-string id is a caller bug,
      // surfaced synchronously rather than silently misrouting messages.
      if (typeof options.id !== 'string' || options.id.length === 0) {
        throw new Error('api.ui.registerInputBarAction: options.id must be a non-empty string.');
      }

      // ── Pre-check stack limit ────────────────────────────────────────
      // Host enforces ≤ 4 per extension; we pre-check here so the overflow
      // surfaces as a synchronous throw with a clear message instead of a
      // silent no-op on the frontend.
      const live = countActionsByScript(scriptId);
      if (live >= INPUT_BAR_ACTION_STACK_LIMIT) {
        throw new Error(
          `api.ui.registerInputBarAction: stack limit reached (${INPUT_BAR_ACTION_STACK_LIMIT} actions open for this script).` +
          ` Call destroy() on an existing action before registering another.`,
        );
      }

      const actionId = options.id;
      const label    = options.label;
      const enabled  = options.enabled !== false;  // default: true

      // Registers in the backend registry. Throws on duplicate (scriptId,
      // actionId) — first-wins ownership policy mirroring tools / macros.
      // Done BEFORE sending the frontend message so a rejected registration
      // never leaks a live action to the host.
      registerAction(scriptId, actionId, label, enabled);

      spindle.sendToFrontend({
        type: 'ls_input_bar_action_register',
        scriptId,
        actionId,
        options: {
          label,
          iconSvg: options.iconSvg,
          iconUrl: options.iconUrl,
          enabled,
        },
      });

      // `destroyed` is per-handle. Teardown-driven clears (disable/delete)
      // drop the registry entry without touching this flag — in that case
      // subsequent handle calls fall through the registry's
      // "unknown-action" silent-no-op paths (updateLabel/updateEnabled
      // return false; addClickHandler returns a no-op unsubscribe).
      let destroyed = false;

      const handle: InputBarActionHandle = {
        actionId,
        setLabel(nextLabel: string): void {
          if (destroyed) return;
          if (!updateActionLabel(scriptId, actionId, nextLabel)) return;
          spindle.sendToFrontend({
            type: 'ls_input_bar_action_set_label',
            scriptId, actionId, label: nextLabel,
          });
        },
        setEnabled(nextEnabled: boolean): void {
          if (destroyed) return;
          if (!updateActionEnabled(scriptId, actionId, nextEnabled)) return;
          spindle.sendToFrontend({
            type: 'ls_input_bar_action_set_enabled',
            scriptId, actionId, enabled: nextEnabled,
          });
        },
        onClick(fn: () => void): () => void {
          if (destroyed) return () => {};
          return addActionClickHandler(scriptId, actionId, fn);
        },
        destroy(): void {
          if (destroyed) return;
          destroyed = true;
          // destroyAction returns false if the entry was already cleared
          // by teardown; either way, send the destroy message so the
          // frontend handler can release its own state.
          destroyAction(scriptId, actionId);
          spindle.sendToFrontend({
            type: 'ls_input_bar_action_destroy',
            scriptId, actionId,
          });
        },
      };

      return handle;
    },

    createFloatWidget(options: FloatWidgetOptions): FloatWidgetHandle {
      assertPerm('ui_panels', deps.hasPerm, deps.script.name);

      const scriptId = deps.script.id;

      // ── Pre-check stack limit ──────────────────────────────────────────
      const live = countLiveWidgetsByScript(scriptId);
      if (live >= FLOAT_WIDGET_STACK_LIMIT) {
        throw new Error(
          `api.ui.createFloatWidget: stack limit reached (${FLOAT_WIDGET_STACK_LIMIT} widgets open for this script).` +
          ` Call destroy() on an existing widget before creating another.`,
        );
      }

      // ── Allocate IDs ───────────────────────────────────────────────────
      const widgetId      = crypto.randomUUID();
      const rootElementId = nextDOMId('fw');

      // Seed position cache with the requested initial position. The host
      // may place elsewhere on first mount if `initialPosition` is omitted;
      // the first drag-end echo will correct the cache when that happens.
      const initialX = options.initialPosition?.x ?? 0;
      const initialY = options.initialPosition?.y ?? 0;

      // Register in both registries BEFORE sending the create message so
      // any follow-up DOM op fired synchronously after this call resolves
      // the elementId correctly.
      registerElement(rootElementId, scriptId);
      registerWidget(widgetId, rootElementId, scriptId, initialX, initialY);

      // ── Construct the handle ───────────────────────────────────────────
      const root = createDOMHandle(rootElementId, deps);

      const handle: FloatWidgetHandle = {
        widgetId,
        root,
        moveTo(x: number, y: number): void {
          const entry = getWidget(widgetId);
          if (!entry || entry.destroyed) return;
          updateWidgetPosition(widgetId, x, y);
          spindle.sendToFrontend({ type: 'ls_float_widget_move', widgetId, x, y });
        },
        getPosition(): { x: number; y: number } {
          const entry = getWidget(widgetId);
          if (!entry) return { x: 0, y: 0 };
          return { x: entry.x, y: entry.y };
        },
        setVisible(visible: boolean): void {
          const entry = getWidget(widgetId);
          if (!entry || entry.destroyed) return;
          updateWidgetVisibility(widgetId, visible);
          spindle.sendToFrontend({ type: 'ls_float_widget_set_visible', widgetId, visible });
        },
        isVisible(): boolean {
          const entry = getWidget(widgetId);
          if (!entry) return false;
          return entry.visible;
        },
        onDragEnd(fn: (pos: { x: number; y: number }) => void): () => void {
          return addDragEndHandler(widgetId, fn);
        },
        destroy(): void {
          if (!destroyWidget(widgetId)) return;
          spindle.sendToFrontend({ type: 'ls_float_widget_destroy', widgetId });
          // Drop the entry lazily via the backend's frontend-message handler
          // after any pending drag-end echoes have settled. Not strictly
          // necessary — `destroyed: true` already guards the handler
          // fan-out — but keeps the map tidy.
        },
      };

      // ── Fire the create message ───────────────────────────────────────
      spindle.sendToFrontend({
        type: 'ls_float_widget_create',
        scriptId,
        widgetId,
        rootElementId,
        options: {
          width:            options.width,
          height:           options.height,
          initialPosition:  options.initialPosition,
          snapToEdge:       options.snapToEdge,
          tooltip:          options.tooltip,
          chromeless:       options.chromeless,
        },
      });

      return handle;
    },

    registerDrawerTab(options: DrawerTabOptions): DrawerTabHandle {
      const scriptId = deps.script.id;

      // ── Validate id ──────────────────────────────────────────────────
      if (typeof options.id !== 'string' || options.id.length === 0) {
        throw new Error('api.ui.registerDrawerTab: options.id must be a non-empty string.');
      }
      if (typeof options.title !== 'string' || options.title.length === 0) {
        throw new Error('api.ui.registerDrawerTab: options.title must be a non-empty string.');
      }

      // ── Pre-check per-script cap ─────────────────────────────────────
      const liveForScript = countTabsByScript(scriptId);
      if (liveForScript >= DRAWER_TAB_PER_SCRIPT_LIMIT) {
        throw new Error(
          `api.ui.registerDrawerTab: per-script limit reached (${DRAWER_TAB_PER_SCRIPT_LIMIT} drawer tab per script).` +
          ` Call destroy() on the existing tab before registering another.`,
        );
      }

      // ── Pre-check LS-wide cap ────────────────────────────────────────
      // LumiScript is one Spindle extension, so all user scripts share
      // the 4-tab host quota. Fail fast with a message that names the
      // global rather than per-script exhaustion — different remedy.
      const liveTotal = countTotalTabs();
      if (liveTotal >= DRAWER_TAB_TOTAL_LIMIT) {
        throw new Error(
          `api.ui.registerDrawerTab: LumiScript drawer-tab quota exhausted (${DRAWER_TAB_TOTAL_LIMIT} total across all scripts).` +
          ` Another script must destroy its tab before this one can register.`,
        );
      }

      // ── Allocate IDs ─────────────────────────────────────────────────
      const tabId         = options.id;
      const rootElementId = nextDOMId('dt');

      // Register both entries BEFORE sending the create message so any
      // synchronous follow-up DOM op on `.root` finds the elementId.
      registerElement(rootElementId, scriptId);
      registerTab(scriptId, tabId, rootElementId);   // throws on duplicate

      // ── Construct the handle ─────────────────────────────────────────
      const root = createDOMHandle(rootElementId, deps);

      let destroyed = false;

      const handle: DrawerTabHandle = {
        tabId,
        root,
        setTitle(title: string): void {
          if (destroyed) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_set_title', scriptId, tabId, title });
        },
        setShortName(shortName: string): void {
          if (destroyed) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_set_short_name', scriptId, tabId, shortName });
        },
        setBadge(text: string | null): void {
          if (destroyed) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_set_badge', scriptId, tabId, badge: text });
        },
        activate(): void {
          if (destroyed) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_activate', scriptId, tabId });
        },
        onActivate(fn: () => void): () => void {
          if (destroyed) return () => {};
          return addActivateHandler(scriptId, tabId, fn);
        },
        destroy(): void {
          if (destroyed) return;
          destroyed = true;
          destroyTab(scriptId, tabId);
          spindle.sendToFrontend({ type: 'ls_drawer_tab_destroy', scriptId, tabId });
        },
      };

      // ── Fire the register message ────────────────────────────────────
      spindle.sendToFrontend({
        type: 'ls_drawer_tab_register',
        scriptId,
        tabId,
        rootElementId,
        options: {
          id:          options.id,
          title:       options.title,
          shortName:   options.shortName,
          description: options.description,
          keywords:    options.keywords,
          headerTitle: options.headerTitle,
          iconSvg:     options.iconSvg,
          iconUrl:     options.iconUrl,
        },
      });

      return handle;
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
export type {
  ModalItem,
  ShowModalOptions,
  ModalResult,
  ModalHandle,
  AdvancedModalOptions,
  AdvancedModalHandle,
  AdvancedModalDismissReason,
  ShowContextMenuOptions,
  ContextMenuItem,
  InputBarActionOptions,
  InputBarActionHandle,
  FloatWidgetOptions,
  FloatWidgetHandle,
  DrawerTabOptions,
  DrawerTabHandle,
};
