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
  MountAppOptions,
  MountedAppHandle,
  DrawerTabOptions,
  DrawerTabHandle,
  UIDrawerTab,
  UISettingsTab,
  PickFileOptions,
  PickedFile,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { shielded, assertPerm } from './shared.js';
import { base64ToBytes } from '../image-format.js';
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
  hasAction,
  countByScript as countActionsByScript,
  listByScript as listActionsByScript,
  updateLabel as updateActionLabel,
  updateSubtitle as updateActionSubtitle,
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
  registerAppMount,
  getAppMount,
  destroyAppMount,
} from '../app-mount-registry.js';
import {
  registerTab,
  hasTab,
  countByScript as countTabsByScript,
  countTotal as countTotalTabs,
  listByScript as listTabsByScript,
  addActivateHandler,
  destroyTab,
  updateTitle as updateTabTitle,
  updateShortName as updateTabShortName,
  updateBadge as updateTabBadge,
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

// ─── File picker — request-response bridge ──────────────────────────────────

/**
 * In-flight `api.ui.pickFile` calls keyed by requestId. Unlike the context
 * menu (which only ever resolves), pickFile can also REJECT — the host throws
 * when a selected file exceeds `maxSizeBytes` — so we hold both callbacks.
 */
const pendingPickFiles = new Map<
  string,
  { resolve: (files: PickedFile[]) => void; reject: (err: Error) => void }
>();

/**
 * Settle a pending `pickFile` call from the frontend's `ls_pick_file_result`.
 * On `error`, reject (mirrors the host throw). Otherwise decode each wire file's
 * base64 payload back to a `Uint8Array` and resolve (an empty array = the user
 * cancelled). No-op on unknown requestId (stale result after script teardown).
 */
export function resolvePickFile(
  requestId: string,
  result: {
    files?: Array<{ name: string; mimeType: string; sizeBytes: number; dataBase64: string }>;
    error?: string;
  },
): void {
  const pending = pendingPickFiles.get(requestId);
  if (!pending) return;
  pendingPickFiles.delete(requestId);
  if (result.error !== undefined) {
    pending.reject(new Error(result.error));
    return;
  }
  const files: PickedFile[] = (result.files ?? []).map((f) => ({
    name:      f.name,
    mimeType:  f.mimeType,
    sizeBytes: f.sizeBytes,
    bytes:     base64ToBytes(f.dataBase64),
  }));
  pending.resolve(files);
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildUIAPI(deps: APIBuildDeps): Omit<LumiScriptAPI['ui'], 'dom' | 'components' | 'events'> {
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
      // `options.openRequestId` is the @internal opt-in for the script-
      // runner child runtime (Phase 9d.4.b). When omitted (typical user-
      // code path), we generate a fresh UUID. When present, we honor it
      // so the proxy-side sync ModalHandle's `.openRequestId` matches
      // the parent-side stored handle for later `awaitResult` / `close`
      // lookup. Behaviourally identical from user-script perspective.
      const openRequestId = options.openRequestId ?? crypto.randomUUID();

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
      //
      // Phase 9d.4.d — `options._modalId` / `options._rootElementId` are
      // @internal opt-ins for the script-runner child runtime. When the
      // child supplies them, we honor them so the proxy-side sync handle
      // carries ids matching parent-side state for later setTitle /
      // dismiss / DOMHandle dispatch lookups. Behaviourally identical
      // when omitted (typical user-code path).
      const modalId       = options._modalId       ?? crypto.randomUUID();
      const rootElementId = options._rootElementId ?? nextDOMId('mr');

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

      const actionId = options.id;
      const label    = options.label;
      const subtitle = options.subtitle;
      const enabled  = options.enabled !== false;  // default: true
      const iconSvg  = options.iconSvg;
      const iconUrl  = options.iconUrl;

      // ── Pre-check stack limit ────────────────────────────────────────
      // Host enforces ≤ 4 per extension; we pre-check here so the overflow
      // surfaces as a synchronous throw with a clear message instead of a
      // silent no-op on the frontend.
      //
      // Skip the check when this is a REPLACE — re-registering an action
      // that's already live for this script doesn't grow the stack, so
      // the limit shouldn't reject it. Matters for trigger-script patterns
      // that call registerInputBarAction from a recurring event handler
      // (e.g. SETTINGS_UPDATED) while at or near the limit.
      const isReplace = hasAction(scriptId, actionId);
      if (!isReplace) {
        const live = countActionsByScript(scriptId);
        if (live >= INPUT_BAR_ACTION_STACK_LIMIT) {
          // Enumerate the currently-registered IDs so scripts iterating
          // on their action set can spot stale entries (common pattern:
          // renaming an action between runs leaves the old id in the
          // registry until next disable / delete). Sorted alphabetically
          // so the list is stable across runs.
          const registered = listActionsByScript(scriptId).slice().sort();
          throw new Error(
            `api.ui.registerInputBarAction: stack limit reached (${INPUT_BAR_ACTION_STACK_LIMIT} actions open for this script, attempting to add "${actionId}"). ` +
            `Currently registered: [${registered.join(', ')}]. ` +
            `Call destroy() on an existing action before registering another, ` +
            `or disable + re-enable the script to clear stale registrations.`,
          );
        }
      }

      // Register (or replace) in the backend registry. Same-(scriptId,
      // actionId) re-registration overwrites the entry and clears old
      // click handlers — matches tool-store / macro-store behaviour. Done
      // BEFORE sending the frontend message so a rejected registration
      // never leaks a live action to the host.
      registerAction(scriptId, actionId, label, enabled, iconSvg, iconUrl, subtitle);

      spindle.sendToFrontend({
        type: 'ls_input_bar_action_register',
        scriptId,
        actionId,
        options: {
          label,
          subtitle,
          iconSvg,
          iconUrl,
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
        setSubtitle(nextSubtitle?: string): void {
          if (destroyed) return;
          if (!updateActionSubtitle(scriptId, actionId, nextSubtitle)) return;
          spindle.sendToFrontend({
            type: 'ls_input_bar_action_set_subtitle',
            scriptId, actionId, subtitle: nextSubtitle,
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
      // Phase 9d.4.e-2-a — `options._widgetId` / `options._rootElementId`
      // are @internal opt-ins for the script-runner child runtime. When the
      // child supplies them, we honor them so the proxy-side sync handle
      // carries ids matching parent-side state for later moveTo / setVisible
      // / destroy / DOMHandle root dispatch lookups. Behaviourally identical
      // when omitted (typical user-code path).
      const widgetId      = options._widgetId      ?? crypto.randomUUID();
      const rootElementId = options._rootElementId ?? nextDOMId('fw');

      // Register in both registries BEFORE sending the create message so
      // any follow-up DOM op fired synchronously after this call resolves
      // the elementId correctly. The widget registry seeds its position
      // cache from `options.initialPosition` — the host may place elsewhere
      // on first mount if that's omitted, and the first drag-end echo
      // corrects the cache when that happens.
      registerElement(rootElementId, scriptId);
      registerWidget(widgetId, rootElementId, scriptId, {
        width:           options.width,
        height:          options.height,
        initialPosition: options.initialPosition,
        snapToEdge:      options.snapToEdge,
        tooltip:         options.tooltip,
        chromeless:      options.chromeless,
      });

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

    mountApp(options: MountAppOptions = {}): MountedAppHandle {
      assertPerm('app_manipulation', deps.hasPerm, deps.script.name);

      const scriptId = deps.script.id;

      // ── Allocate IDs ───────────────────────────────────────────────────
      // `options._mountId` / `options._rootElementId` are @internal opt-ins
      // for the script-runner child runtime (mirrors createFloatWidget): the
      // child supplies them so the proxy-side sync handle carries ids matching
      // parent-side state for later setVisible / destroy / DOMHandle root
      // dispatch lookups. Generated here on the (rare) in-process path.
      const mountId       = options._mountId       ?? crypto.randomUUID();
      const rootElementId = options._rootElementId ?? nextDOMId('am');

      // Register BEFORE sending the create message so any synchronous follow-up
      // DOM op on `.root` resolves the elementId.
      registerElement(rootElementId, scriptId);
      registerAppMount(mountId, rootElementId, scriptId, {
        className: options.className,
        position:  options.position,
      });

      const root = createDOMHandle(rootElementId, deps);

      const handle: MountedAppHandle = {
        mountId,
        root,
        setVisible(visible: boolean): void {
          const entry = getAppMount(mountId);
          if (!entry || entry.destroyed) return;
          spindle.sendToFrontend({ type: 'ls_app_mount_set_visible', mountId, visible });
        },
        destroy(): void {
          if (!destroyAppMount(mountId)) return;
          spindle.sendToFrontend({ type: 'ls_app_mount_destroy', mountId });
        },
      };

      spindle.sendToFrontend({
        type: 'ls_app_mount_create',
        scriptId,
        mountId,
        rootElementId,
        options: {
          className: options.className,
          position:  options.position,
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

      // ── Pre-check stack limits ───────────────────────────────────────
      // Skip both checks when this is a REPLACE — re-registering a tab
      // that's already live for this script doesn't grow either stack,
      // so neither limit should reject it. Matters for the common pattern
      // of manually re-running a script (via the Run button or event
      // re-fire) while iterating — without this, every second run hits
      // the per-script cap until the user disable-enables to fire
      // `ls:teardown` and clean up.
      //
      // Mirrors `registerInputBarAction`: same `isReplace` gate, same
      // motivation. Checked against registry state (which persists across
      // script re-executions until teardown), not the API handle.
      const isReplace = hasTab(scriptId, options.id);
      if (!isReplace) {
        const liveForScript = countTabsByScript(scriptId);
        if (liveForScript >= DRAWER_TAB_PER_SCRIPT_LIMIT) {
          // Enumerate the currently-registered tab IDs for this script so
          // scripts iterating on their registration can spot stale entries.
          const registered = listTabsByScript(scriptId).slice().sort();
          throw new Error(
            `api.ui.registerDrawerTab: per-script limit reached (${DRAWER_TAB_PER_SCRIPT_LIMIT} drawer tab per script, attempting to add "${options.id}"). ` +
            `Currently registered: [${registered.join(', ')}]. ` +
            `Call destroy() on the existing tab before registering another, ` +
            `or disable + re-enable the script to clear stale registrations.`,
          );
        }

        // LumiScript is one Spindle extension, so all user scripts share
        // the 4-tab host quota. Fail fast with a message that names the
        // global rather than per-script exhaustion — different remedy.
        const liveTotal = countTotalTabs();
        if (liveTotal >= DRAWER_TAB_TOTAL_LIMIT) {
          throw new Error(
            `api.ui.registerDrawerTab: LumiScript drawer-tab quota exhausted (${DRAWER_TAB_TOTAL_LIMIT} total across all scripts, attempting to add "${options.id}"). ` +
            `Another script must destroy its tab before this one can register.`,
          );
        }
      }

      // ── Allocate IDs ─────────────────────────────────────────────────
      // Phase 9d.4.e-3-a — `options._rootElementId` is an @internal opt-in
      // for the script-runner child runtime. When the child supplies it,
      // we honor it as the rootElementId so the proxy-side sync
      // DOMHandle's id matches parent-side state for `ui._dom.*`
      // dispatch lookups. Behaviourally identical when omitted.
      const tabId         = options.id;
      const rootElementId = options._rootElementId ?? nextDOMId('dt');

      // Register both entries BEFORE sending the create message so any
      // synchronous follow-up DOM op on `.root` finds the elementId.
      registerElement(rootElementId, scriptId);
      registerTab(
        scriptId,
        tabId,
        rootElementId,
        options.title,
        options.shortName,
        {
          description: options.description,
          keywords:    options.keywords,
          headerTitle: options.headerTitle,
          iconSvg:     options.iconSvg,
          iconUrl:     options.iconUrl,
        },
      );   // throws on duplicate

      // ── Construct the handle ─────────────────────────────────────────
      const root = createDOMHandle(rootElementId, deps);

      let destroyed = false;

      const handle: DrawerTabHandle = {
        tabId,
        root,
        setTitle(title: string): void {
          if (destroyed) return;
          if (!updateTabTitle(scriptId, tabId, title)) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_set_title', scriptId, tabId, title });
        },
        setShortName(shortName: string): void {
          if (destroyed) return;
          if (!updateTabShortName(scriptId, tabId, shortName)) return;
          spindle.sendToFrontend({ type: 'ls_drawer_tab_set_short_name', scriptId, tabId, shortName });
        },
        setBadge(text: string | null): void {
          if (destroyed) return;
          if (!updateTabBadge(scriptId, tabId, text)) return;
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

    // ── Navigation (free tier) ──────────────────────────────────────────────
    // Backend passthroughs over spindle.ui.* — the same primitives the built-in
    // Command Palette uses. The active userId is folded in implicitly. The
    // listing DTOs are already safe + structurally identical to ours.

    getDrawerTabs(): Promise<UIDrawerTab[]> {
      return shielded(
        spindle.ui.getDrawerTabs({ userId: deps.userId ?? undefined })
          .then((dtos) => dtos as unknown as UIDrawerTab[]),
      );
    },

    getSettingsTabs(): Promise<UISettingsTab[]> {
      return shielded(
        spindle.ui.getSettingsTabs({ userId: deps.userId ?? undefined })
          .then((dtos) => dtos as unknown as UISettingsTab[]),
      );
    },

    openDrawerTab(tabId: string): Promise<void> {
      return shielded(spindle.ui.openDrawerTab(tabId, { userId: deps.userId ?? undefined }));
    },

    closeDrawer(): Promise<void> {
      return shielded(spindle.ui.closeDrawer({ userId: deps.userId ?? undefined }));
    },

    openSettings(viewId?: string): Promise<void> {
      return shielded(spindle.ui.openSettings(viewId, { userId: deps.userId ?? undefined }));
    },

    closeSettings(): Promise<void> {
      return shielded(spindle.ui.closeSettings({ userId: deps.userId ?? undefined }));
    },

    openCommandPalette(): Promise<void> {
      return shielded(spindle.ui.openCommandPalette({ userId: deps.userId ?? undefined }));
    },

    closeCommandPalette(): Promise<void> {
      return shielded(spindle.ui.closeCommandPalette({ userId: deps.userId ?? undefined }));
    },

    // ── File picker (free tier) ─────────────────────────────────────────────
    // Frontend round-trip: ask the frontend to open ctx.uploads.pickFile, get
    // the selected file(s) back (bytes base64-encoded over the JSON bus). The
    // native picker is the user-action gate, so no permission. Bytes decode to
    // Uint8Array in resolvePickFile before the promise settles.
    pickFile(options?: PickFileOptions): Promise<PickedFile[]> {
      const requestId = crypto.randomUUID();
      return shielded(new Promise<PickedFile[]>((resolve, reject) => {
        pendingPickFiles.set(requestId, { resolve, reject });
        spindle.sendToFrontend({
          type: 'ls_pick_file_request',
          requestId,
          options: {
            accept:       options?.accept,
            multiple:     options?.multiple,
            maxSizeBytes: options?.maxSizeBytes,
          },
        });
      }));
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
