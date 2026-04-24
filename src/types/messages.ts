/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND ↔ BACKEND MESSAGE TYPES
 * ============================================================================
 * Discriminated union types for all messages exchanged between the Spindle
 * backend worker and the React frontend.
 *
 * Convention: use a `type` field as the discriminant on both sides.
 */

import type {
  Script,
  ScriptType,
  ScriptPackEntry,
  ScriptBindingEntry,
  ScriptMetadata,
  ConsoleEntry,
  LumiScriptSettings,
  InjectionInfo,
  RegisteredToolInfo,
  DOMEventData,
  DbRecord,
} from './script.js';
import type { CollectionSummary } from '../engine/db-admin.js';

// ─── Shared payload shapes ────────────────────────────────────────────────────

/**
 * Snapshot of all variable scopes for the active context. Delivered via
 * `variables_updated` messages; consumed by the frontend Storage panel.
 */
export interface VariablesSnapshot {
  local:     Record<string, unknown>;
  global:    Record<string, unknown>;
  chat:      Record<string, unknown>;
  character: Record<string, unknown>;
}

// ─── Frontend → Backend ───────────────────────────────────────────────────────

export type FrontendToBackend =
  | {
      /**
       * Emitted by the frontend as the very first message on mount — before
       * `get_scripts` / `get_settings` / etc. — so the backend knows the
       * React tree is live and ready to receive outbound register messages.
       *
       * Two paths on the backend side:
       *   - First-ever arrival (`triggersInitialized: false`): normal cold
       *     start — load storage, init triggers, fire `ls:startup`. User
       *     scripts register their UI as usual.
       *   - Subsequent arrivals (`triggersInitialized: true`): browser
       *     refresh. The backend worker is still alive with all registries
       *     populated; replay every live registration to the newly-mounted
       *     frontend so actions / tabs / widgets / DOM come back without
       *     re-running user-script code.
       */
      type: 'frontend_ready';
    }
  | { type: 'get_scripts' }
  | { type: 'get_settings' }
  | { type: 'get_active_context' }
  | { type: 'get_injections' }
  | { type: 'get_tools' }
  | { type: 'get_variables' }
  | {
      type: 'create_script';
      name: string;
      scriptType: ScriptType;
    }
  | {
      type: 'update_script';
      id: string;
      patch: {
        name?: string;
        code?: string;
        enabled?: boolean;
        allowDangerous?: boolean;
        bindings?: ScriptBindingEntry[];
        triggers?: string[];
        folder?: string;
        metadata?: ScriptMetadata;
      };
    }
  | {
      type: 'delete_script';
      id: string;
    }
  | {
      type: 'duplicate_script';
      id: string;
    }
  | {
      type: 'run_script';
      id: string;
    }
  | {
      type: 'update_settings';
      patch: Partial<LumiScriptSettings>;
    }
  | {
      type: 'import_scripts';
      entries: ScriptPackEntry[];
    }
  | {
      /**
       * Shift+click on the Script Manager Export button. Instead of triggering
       * a browser download, write the zipped pack to the extension's scoped
       * storage at `exports/<scriptType>.lumiscript.zip`.
       *
       * Intended for external developer tooling (e.g. a CLI pipeline that
       * polls a fixed path, unpacks via pack2js, edits, re-packs via js2pack,
       * and imports back). Since `spindle.storage` is path-sandboxed to the
       * extension's own storage directory, external tools need to know
       * Lumiverse's data-dir convention for their OS to reach the file —
       * the backend logs the resolved path on each write.
       *
       * `bytesB64` is the zip payload, base64-encoded so it survives the
       * frontend→backend message channel regardless of transport.
       * `scriptType` is the active Script Manager tab ('trigger' | 'library')
       * and becomes the filename stem, keeping the two tabs in separate
       * output files instead of last-write-wins.
       */
      type: 'save_pack_to_disk';
      bytesB64: string;
      scriptType: ScriptType;
    }
  | {
      /**
       * Admin-override removal of a single tool registration. Dispatched from
       * the Status-tab "Remove" action on an Active Tools row. Drops the entry
       * from `tool-store`, forgets the name in `tool-script-registry` if it
       * was declaratively registered, and calls `spindle.unregisterTool(name)`.
       *
       * Does NOT disable or edit the owning script — the next script mutation
       * that triggers `syncAll()` will re-register a declarative tool whose
       * source script is still present and enabled. This action is a stop-gap
       * for stale registrations, not a persistent disable.
       */
      type: 'unregister_tool';
      name: string;
    }
  // ─── DOM events (frontend → backend) ──────────────────────────────
  | {
      /** Fired by the frontend when a DOM event occurs on an injected element. */
      type: 'dom_event';
      elementId: string;
      listenerId: string;
      event: string;
      data: DOMEventData;
    }
  // ─── Advanced modal lifecycle (frontend → backend) ─────────────────
  | {
      /**
       * Fired by the frontend when an advanced modal has been dismissed —
       * either by user action (close button, backdrop click, Escape) or in
       * response to a backend-initiated `ls_modal_dismiss` message.
       *
       * The backend distinguishes `'user'` from `'script'`/`'teardown'` by
       * tracking whether it initiated the dismissal itself; this message
       * always reports a plain completion.
       */
      type: 'ls_modal_dismissed';
      modalId: string;
    }
  // ─── Context menu result (frontend → backend) ─────────────────────
  | {
      /**
       * Fired by the frontend after `ctx.ui.showContextMenu` resolves — either
       * with the user's selected `key` or `null` if the menu was dismissed.
       * The backend correlates this with the original request via `requestId`.
       */
      type: 'ls_context_menu_result';
      requestId: string;
      selectedKey: string | null;
    }
  // ─── Input bar action click (frontend → backend) ──────────────────
  | {
      /**
       * Fired by the frontend when the user activates a registered input-bar
       * action. Backend fans the event out to all click handlers registered
       * on that action via `handle.onClick(fn)`.
       */
      type: 'ls_input_bar_action_click';
      scriptId: string;
      actionId: string;
    }
  // ─── Float widget drag end (frontend → backend) ────────────────────
  | {
      /**
       * Fired by the frontend when the user completes a drag gesture on a
       * float widget. The backend updates its cached position + fans the
       * event out to any `onDragEnd` handlers the script registered.
       */
      type: 'ls_float_widget_drag_end';
      widgetId: string;
      x: number;
      y: number;
    }
  // ─── Drawer tab activation (frontend → backend) ────────────────────
  | {
      /**
       * Fired by the frontend when the user switches to a registered
       * drawer tab (via sidebar click, command palette, or programmatic
       * `handle.activate()`). Backend fans the event out to all handlers
       * registered via `handle.onActivate(fn)`.
       */
      type: 'ls_drawer_tab_activated';
      scriptId: string;
      tabId: string;
    }
  // ─── Storage panel — Collections section (admin view) ──────────────
  | {
      /** Request a full enumeration of all collections across all
       *  scripts/scopes. Backend replies with `collections_list`. */
      type: 'list_collections';
    }
  | {
      /** Load records from a specific collection for the inspect modal.
       *  Backend replies with `collection_records` echoing the path so
       *  the frontend can route responses to the correct open modal. */
      type: 'inspect_collection';
      path: string;
      textFilter?: string;
      limit?: number;
      offset?: number;
    }
  | {
      /** Delete a collection (and all its records) from admin view.
       *  Path must match one of the known scope templates — backend
       *  rejects anything else. Backend replies with updated
       *  `collections_list` after drop. */
      type: 'drop_collection';
      path: string;
    }
;

// ─── Backend → Frontend ───────────────────────────────────────────────────────

export type BackendToFrontend =
  | {
      type: 'scripts_updated';
      scripts: Script[];
    }
  | {
      /**
       * Single-script delta sent after a code-only autosave.
       * Cheaper than scripts_updated — avoids broadcasting all scripts'
       * full code on every keystroke after the autosave debounce.
       */
      type: 'script_patched';
      script: Script;
    }
  | {
      type: 'settings_updated';
      settings: LumiScriptSettings;
    }
  | {
      type: 'active_context';
      characterId: string | null;
      characterName: string | null;
      chatId: string | null;
    }
  | {
      type: 'execution_started';
      scriptId: string;
      scriptName: string;
      runId: string;
    }
  | {
      type: 'execution_ended';
      scriptId: string;
      runId: string;
      success: boolean;
      duration: number;
      error?: string;
    }
  | {
      type: 'console_entry';
      scriptId: string;
      runId: string;
      entry: ConsoleEntry;
    }
  | {
      type: 'error';
      message: string;
    }
  | {
      /** Current snapshot of all active injection entries. */
      type: 'injections_updated';
      injections: InjectionInfo[];
    }
  | {
      /** Current snapshot of all registered tools. */
      type: 'tools_updated';
      tools: RegisteredToolInfo[];
    }
  | {
      /** Current snapshot of all variable scopes for the active context. */
      type: 'variables_updated';
      variables: VariablesSnapshot;
    }
  // ─── DOM injection commands (backend → frontend) ──────────────────
  | { type: 'dom_inject';          scriptId: string; elementId: string; target: string; html: string; position: string; stableId?: string }
  | { type: 'dom_inject_at_message'; scriptId: string; elementId: string; messageId: string; html: string; position: 'header' | 'footer'; stableId?: string }
  | { type: 'dom_update';          elementId: string; html: string }
  | { type: 'dom_remove';          elementId: string }
  | { type: 'dom_add_style';       scriptId: string; styleId: string; css: string }
  | { type: 'dom_remove_style';    styleId: string }
  | { type: 'dom_listen';          elementId: string; listenerId: string; event: string; preventDefault?: boolean }
  | { type: 'dom_unlisten';        elementId: string; listenerId: string; event: string }
  | { type: 'dom_cleanup_script';  scriptId: string }
  | { type: 'dom_make_draggable';  elementId: string; handleSelector?: string }
  // ─── Advanced modal commands (backend → frontend) ──────────────────
  | {
      /**
       * Open an advanced modal. The frontend calls `ctx.ui.showModal(options)`
       * and binds the resulting body element to `rootElementId` in its DOM
       * element map, so subsequent `dom_update` / `dom_listen` / etc. messages
       * targeting `rootElementId` manipulate the modal body via the existing
       * DOM pipeline.
       */
      type: 'ls_modal_open';
      scriptId: string;
      modalId: string;
      rootElementId: string;
      options: {
        title: string;
        width?: number;
        maxHeight?: number;
        persistent?: boolean;
      };
    }
  | {
      /** Update an open modal's header title. */
      type: 'ls_modal_set_title';
      modalId: string;
      title: string;
    }
  | {
      /**
       * Request dismissal of an open modal. The frontend calls
       * `handle.dismiss()` on the underlying Spindle modal handle, which
       * produces an `ls_modal_dismissed` echo back to the backend.
       */
      type: 'ls_modal_dismiss';
      modalId: string;
    }
  // ─── Context menu commands (backend → frontend) ────────────────────
  | {
      /**
       * Request the frontend to show a themed context menu at the given
       * position. The frontend calls `ctx.ui.showContextMenu` and echoes the
       * user's selection back via `ls_context_menu_result` using the same
       * `requestId` so the backend can resolve the awaiting promise.
       */
      type: 'ls_context_menu_show';
      requestId: string;
      options: {
        position: { x: number; y: number };
        items: Array<{
          key: string;
          label: string;
          type?: 'item' | 'divider';
          disabled?: boolean;
          danger?: boolean;
          active?: boolean;
        }>;
      };
    }
  // ─── Input bar action lifecycle (backend → frontend) ───────────────
  | {
      /**
       * Register an input-bar action. The frontend calls
       * `ctx.ui.registerInputBarAction(options)` and stores the returned
       * handle keyed by `(scriptId, actionId)` so subsequent set-label /
       * set-enabled / destroy messages can find it. Click events are echoed
       * back via `ls_input_bar_action_click`.
       */
      type: 'ls_input_bar_action_register';
      scriptId: string;
      actionId: string;
      options: {
        label: string;
        iconSvg?: string;
        iconUrl?: string;
        enabled?: boolean;
      };
    }
  | {
      /** Update the label of a registered input-bar action. */
      type: 'ls_input_bar_action_set_label';
      scriptId: string;
      actionId: string;
      label: string;
    }
  | {
      /**
       * Show or hide a registered input-bar action. Disabled actions are
       * hidden from the popover (host behaviour), not greyed out.
       */
      type: 'ls_input_bar_action_set_enabled';
      scriptId: string;
      actionId: string;
      enabled: boolean;
    }
  | {
      /**
       * Destroy a registered input-bar action — removes it from the popover
       * and detaches any click listeners. Idempotent on the frontend side;
       * silently ignored if the action is already gone.
       */
      type: 'ls_input_bar_action_destroy';
      scriptId: string;
      actionId: string;
    }
  // ─── Float widget lifecycle (backend → frontend) ───────────────────
  | {
      /**
       * Create a float widget. The frontend calls `ctx.ui.createFloatWidget`,
       * binds the resulting widget's `.root` HTMLElement into the shared DOM
       * element map under `rootElementId` so `dom_*` messages targeting it
       * flow through the existing pipeline, and wires `onDragEnd` to echo
       * position updates back via `ls_float_widget_drag_end`.
       */
      type: 'ls_float_widget_create';
      scriptId: string;
      widgetId: string;
      rootElementId: string;
      options: {
        width: number;
        height: number;
        initialPosition?: { x: number; y: number };
        snapToEdge?: boolean;
        tooltip?: string;
        chromeless?: boolean;
      };
    }
  | {
      /** Move a widget to new coordinates. */
      type: 'ls_float_widget_move';
      widgetId: string;
      x: number;
      y: number;
    }
  | {
      /** Show or hide a widget. */
      type: 'ls_float_widget_set_visible';
      widgetId: string;
      visible: boolean;
    }
  | {
      /** Destroy a widget — removes it from the viewport. Idempotent frontend-side. */
      type: 'ls_float_widget_destroy';
      widgetId: string;
    }
  // ─── Drawer tab lifecycle (backend → frontend) ─────────────────────
  | {
      /**
       * Register a drawer tab. The frontend calls
       * `ctx.ui.registerDrawerTab(options)`, binds the returned tab's
       * `.root` HTMLElement into the shared DOM element map under
       * `rootElementId` so `dom_*` messages manipulate the tab body via
       * the existing pipeline, and wires `onActivate` to echo via
       * `ls_drawer_tab_activated`.
       */
      type: 'ls_drawer_tab_register';
      scriptId: string;
      tabId: string;
      rootElementId: string;
      options: {
        id: string;
        title: string;
        shortName?: string;
        description?: string;
        keywords?: string[];
        headerTitle?: string;
        iconSvg?: string;
        iconUrl?: string;
      };
    }
  | {
      /** Update a drawer tab's full title (command palette + panel header). */
      type: 'ls_drawer_tab_set_title';
      scriptId: string;
      tabId: string;
      title: string;
    }
  | {
      /** Update a drawer tab's sidebar icon label. */
      type: 'ls_drawer_tab_set_short_name';
      scriptId: string;
      tabId: string;
      shortName: string;
    }
  | {
      /** Show or clear a badge next to a drawer tab's icon. `null` clears. */
      type: 'ls_drawer_tab_set_badge';
      scriptId: string;
      tabId: string;
      badge: string | null;
    }
  | {
      /** Programmatically activate a drawer tab. */
      type: 'ls_drawer_tab_activate';
      scriptId: string;
      tabId: string;
    }
  | {
      /** Destroy a drawer tab. Idempotent on the frontend side. */
      type: 'ls_drawer_tab_destroy';
      scriptId: string;
      tabId: string;
    }
  // ─── Storage panel — Collections section ───────────────────────────
  | {
      /** Full collection list (admin view). Frontend replaces its row
       *  state with this on receipt. */
      type: 'collections_list';
      collections: CollectionSummary[];
    }
  | {
      /** Records for a specific collection, echoing the inspect request
       *  path so the frontend can route to the right open modal.
       *  `total` is the count AFTER filter, BEFORE pagination. */
      type: 'collection_records';
      path: string;
      records: DbRecord[];
      total: number;
    }
  | {
      /** Debounced hint fired in response to any `ls:collection:*`
       *  broadcast — no payload. Frontend is expected to re-request
       *  `list_collections` if the Storage panel is currently visible. */
      type: 'collections_updated';
    }
;
