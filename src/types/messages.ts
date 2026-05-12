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
  DOMDelegatedEventData,
  ConditionalPreventDefault,
  DbRecord,
} from './script.js';
import type { CollectionSummary, CollectionStats } from '../engine/db-admin.js';

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
  | {
      /**
       * Fired by the frontend when a delegated event matches a registered
       * `api.ui.dom.delegate()` selector. v0.27.1+. Carries the matched
       * delegationId and the serialized DOMDelegatedEventData payload —
       * backend looks up the delegation in the dom-registry's delegation
       * table and routes to the script's wrapper closure.
       */
      type: 'dom_delegate_event';
      delegationId: string;
      data: DOMDelegatedEventData;
    }
  // ─── Advanced modal lifecycle (frontend → backend) ─────────────────
  | {
      /**
       * Fired by the frontend AFTER an advanced modal has been mounted and
       * its rootElementId is bound into the shared DOM element map. Lets
       * the backend (specifically the script-runner host-dispatcher's
       * `handleShowAdvancedModalRequest`) wait for genuine open-confirmation
       * before resolving the open IPC's api-response — closing the race
       * where a script-runner child fires `setTitle`/`dismiss`/`root.update`
       * IPCs that the backend forwards to the frontend before the frontend's
       * `modals` Map and DOM-handle binding are populated.
       *
       * Phase 9d.4.d "Option B" architecture. Same shape applies to
       * floatWidget + drawerTab in Phase 9d.4.e (`ls_float_widget_created`,
       * `ls_drawer_tab_registered` echoes).
       *
       * On open failure — `ctx.ui.showModal` throwing on the frontend — the
       * frontend sends `ls_modal_dismissed` directly without an `_opened`
       * echo. The backend's awaiter table is reaped via the dismiss path
       * (rejecting the awaiter) so the proxy's open-ack rejects cleanly.
       */
      type: 'ls_modal_opened';
      modalId: string;
    }
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
  | {
      /**
       * Fired by the frontend AFTER a registered input-bar action has been
       * mounted: `ctx.ui.registerInputBarAction` succeeded, the handle is
       * stored in the per-frontend `actions` Map, and the click-echo wiring
       * is in place.
       *
       * Same role as `ls_modal_opened`: lets the script-runner's host-
       * dispatcher gate the open IPC's api-response on real frontend
       * confirmation, closing the race where a script-runner child fires
       * `setLabel`/`setEnabled`/`destroy` before the frontend has finished
       * mounting the action. Phase 9d.4.e-1-a "Option B" architecture.
       *
       * Open-failure path: `ctx.ui.registerInputBarAction` throwing on the
       * frontend logs a console.warn but does NOT echo back. The backend's
       * awaiter timeout (matching the modal-open timeout) catches that and
       * rejects the proxy's openAck.
       */
      type: 'ls_input_bar_action_registered';
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
  | {
      /**
       * Fired by the frontend AFTER a created float widget has been
       * mounted: `ctx.ui.createFloatWidget` succeeded, the handle's
       * rootElement was bound into the shared DOM map, and the drag-end
       * echo wiring is in place.
       *
       * Same role as `ls_modal_opened` and `ls_input_bar_action_registered`:
       * lets the script-runner host-dispatcher gate the create IPC's
       * api-response on real frontend confirmation, closing the race where
       * a script-runner child fires `moveTo`/`setVisible`/`destroy` (or
       * `root.update`) before the FE has finished mounting the widget.
       * Phase 9d.4.e-2-a "Option B" architecture.
       */
      type: 'ls_float_widget_created';
      widgetId: string;
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
  | {
      /**
       * Fired by the frontend AFTER a registered drawer tab has been
       * mounted: `ctx.ui.registerDrawerTab` succeeded, the tab body
       * rootElement was bound into the shared DOM map, and the activate
       * echo wiring is in place.
       *
       * Same role as the other `ls_*_registered`/`ls_*_created`/
       * `ls_modal_opened` echoes: lets the script-runner host-dispatcher
       * gate the open IPC's api-response on real frontend confirmation,
       * closing the race where a script-runner child fires
       * `setTitle`/`setBadge`/`activate`/`destroy` (or `root.update`)
       * before the FE has finished mounting the tab. Phase 9d.4.e-3-a
       * "Option B" architecture.
       */
      type: 'ls_drawer_tab_registered';
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
      /** When true, the backend's text filter walks the full record tree
       *  recursively (matching string values at any depth) rather than
       *  the default top-level-only shallow match. Default: false. */
      deepFilter?: boolean;
      /**
       * Power-user mode — pass a jsonquery expression (e.g.
       * `filter(.hp > 50)` or `pipe(filter(.tier == "hard"), sort(.created))`).
       * Mutually exclusive with `textFilter`: when this is set, the
       * backend ignores `textFilter` and `deepFilter` and runs the
       * query against the records array.
       *
       * Errors (parse / runtime / non-array result) are returned via
       * `collection_records.error` rather than throwing on the wire.
       */
      jsonqueryFilter?: string;
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
  | {
      /** Lightweight record-count query — used by the drop confirmation
       *  dialog so the user knows how many records they're about to
       *  permanently delete. Backend replies with `collection_count`
       *  echoing the path. Reads the file once (length-only); doesn't
       *  load records into the response. */
      type: 'count_collection';
      path: string;
    }
  | {
      /**
       * Admin-side per-record update from the InspectModal's edit
       * surface. `patch` is the full user-data shape (reserved fields
       * `id` / `createdAt` / `updatedAt` are stripped backend-side
       * regardless of what's passed). The mutation queues through
       * `runExclusive` for the same path used by `api.db.update()`,
       * so admin and script writes stay serialized.
       *
       * Backend emits `ls:collection:updated` on success — the existing
       * debounced `collections_updated` forwarder picks it up and the
       * open inspect modal re-fetches via its `refreshToken` bump.
       * Errors (record not found, size cap, malformed patch) surface
       * as a `spindle.toast.error`, matching the script-execution
       * failure pattern.
       */
      type: 'update_record';
      path: string;
      recordId: string;
      patch: Record<string, unknown>;
    }
  | {
      /**
       * Admin-side per-record deletion from the InspectModal. Like
       * `update_record`, this queues through `runExclusive` and emits
       * `ls:collection:deleted` on success so the existing refresh
       * pipeline picks the change up. Errors surface via toast.
       *
       * Lightweight inline confirm in the UI (two-click pill on the
       * record header) — no full dialog like the per-collection drop,
       * since one-record loss is recoverable in spirit (the broadcast
       * is observable; user can re-insert via a one-shot script).
       */
      type: 'delete_record';
      path: string;
      recordId: string;
    }
  | {
      /**
       * Request a per-field aggregate analysis of a collection — drives
       * the InspectModal's Stats tab. Computes: per-field presence,
       * type distribution, distinct primitive cardinality, top values,
       * and numeric range when applicable.
       *
       * No filter / pagination params: stats are always over the full
       * collection (the 50 MB cap bounds the cost). Backend replies
       * with `collection_stats` echoing the path so the modal can
       * route the response to the correct open instance.
       */
      type: 'analyze_collection';
      path: string;
    }
  // ─── Diagnostics (v0.28.0) ──────────────────────────────────────────────
  // Frontend requests a fresh diagnostics report. Backend collects from
  // every registry + probes storage + IPC's the script-runner child for
  // resource stats, then sends `diagnostics_report` back with the merged
  // result. No correlation id — the FE only has one diagnostics modal
  // open at a time; rapid re-requests just supersede in flight.
  | { type: 'request_diagnostics' }
  // ─── In-app code assistant ──────────────────────────────────────────────
  // New user turn. Backend echoes via `assistant_user_turn` + streams
  // tokens / reasoning / tool calls back, finalising with
  // `assistant_completed` (or `assistant_aborted` / `assistant_error`).
  | {
      type: 'assistant_send';
      /** The user's new message. */
      content: string;
      /** Lumiverse LLM connection ID. */
      connectionId?: string;
    }
  // "New chat" — creates a new thread and switches the active thread to it.
  | { type: 'assistant_reset' }
  // Frontend asks the backend for the connection list (modal mount).
  | { type: 'request_assistant_connections' }
  // Abort the in-flight assistant turn, if any. Idempotent.
  | { type: 'assistant_abort' }
  // ─── Thread management (v0.30.2) ───────────────────────────────────────
  // Frontend asks the backend for the threads index + the currently active
  // thread id. Sent on modal mount. Backend replies via `assistant_threads`.
  | { type: 'request_assistant_threads' }
  // Switch the active thread. Backend loads the target's body from storage,
  // updates `activeAssistantThreadId`, and replies via `assistant_thread_loaded`
  // with the full message history. Aborts any in-flight turn first.
  | { type: 'assistant_switch_thread'; threadId: string }
  // Create a brand-new thread + switch to it. Equivalent to `assistant_reset`
  // semantically but explicit about intent for the sidebar "New chat" button.
  | { type: 'assistant_new_thread' }
  // Rename a thread. Updates the in-memory thread (if active), the on-disk
  // file, and the index. Backend pushes an updated `assistant_threads`.
  | { type: 'assistant_rename_thread'; threadId: string; title: string }
  // Delete a thread. Backend confirms via Spindle-native modal before acting.
  // If the deleted thread was active, backend auto-switches to the next-most-
  // recent (or creates a new fresh thread if none remain). Backend pushes
  // `assistant_threads` and — if the active thread changed — `assistant_thread_loaded`.
  | { type: 'assistant_delete_thread'; threadId: string }
  // "Apply to script" — user clicked the apply button on a fenced code block
  // in an assistant message. Backend auto-classifies trigger vs library from
  // the code shape (presence of `// @triggers` → trigger; `module.exports`
  // → library; else default trigger), generates a name, prepends a
  // provenance header, and calls scriptStorage.createScript. Replies via
  // `assistant_apply_success` (or `assistant_apply_error` on failure).
  // `languageHint` is the markdown fence language tag (`js`, `ts`, etc.) —
  // not strictly required but useful for the heuristic.
  | { type: 'assistant_apply_to_script'; code: string; languageHint?: string }
  // ─── Conversation management (v0.30.x — gap #10) ────────────────────────
  // Delete every thread (with confirm). Backend pops a Spindle-native modal
  // for confirmation; on confirm, deletes all per-thread files, clears the
  // index, creates a fresh empty active thread. Pushes `assistant_threads`
  // (empty + new active id) and `assistant_thread_loaded` (empty body).
  | { type: 'assistant_clear_all_threads' }
  // Export a single thread as Markdown. Backend assembles the markdown
  // (title + role-headed message blocks + reasoning content + tool-call
  // annotations) and sends it back via `assistant_thread_exported` —
  // frontend triggers the user-facing download via a temporary blob URL.
  | { type: 'assistant_export_thread'; threadId: string }
  // Reset the four generation-default settings to "no override":
  // assistantTemperature / assistantTopP / assistantMaxTokens → undefined;
  // assistantParallelToolCalls → true. Done via a dedicated IPC rather
  // than `update_settings` because JSON.stringify drops undefined values
  // at the wire, so the existing patch shape can't carry "delete this
  // field" intent. Backend follows up with the standard `settings_updated`
  // broadcast so the inputs re-render empty.
  | { type: 'assistant_reset_generation_defaults' }
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
  | {
      /**
       * Inject HTML into a CSS target. When `parentElementId` is set, the
       * selector is resolved relative to that element (via the frontend's
       * element-map ref) instead of via `document.querySelector`. Enables
       * injecting into lazy-mounted / orphaned elements (modal / widget /
       * drawer-tab bodies before their parent mounts into the live DOM).
       * Omit `parentElementId` for document-scoped inject (default).
       */
      type: 'dom_inject';
      scriptId: string;
      elementId: string;
      target: string;
      html: string;
      position: string;
      stableId?: string;
      parentElementId?: string;
    }
  | { type: 'dom_inject_at_message'; scriptId: string; elementId: string; messageId: string; html: string; position: 'header' | 'footer'; stableId?: string }
  | { type: 'dom_update';          elementId: string; html: string }
  | { type: 'dom_remove';          elementId: string }
  | { type: 'dom_add_style';       scriptId: string; styleId: string; css: string }
  | { type: 'dom_remove_style';    styleId: string }
  | { type: 'dom_listen';          elementId: string; listenerId: string; event: string; preventDefault?: boolean | ConditionalPreventDefault }
  | { type: 'dom_unlisten';        elementId: string; listenerId: string; event: string }
  // ─── api.ui.dom.delegate (v0.27.1) ────────────────────────────────────
  // Single-listener-per-(root, event)-tuple capture-phase delegation. The
  // frontend maintains a Set<{delegationId, selector, options}> per (root,
  // event) tuple; on a matching event, fires `dom_delegate_event` back
  // with the matched delegationId + serialized event data.
  | {
      type:         'dom_delegate_register';
      scriptId:     string;
      delegationId: string;
      selector:     string;
      event:        string;
      /** Where to attach the actual host-side capture listener. */
      root:         'chat' | 'document';
      /** Limit matching to a specific message's `.mes_text` subtree. */
      messageId?:   string;
      /**
       * v0.27.5+: can be `boolean` (legacy: fire on every selector match)
       * or `ConditionalPreventDefault` (fire only on matching event data).
       */
      preventDefault?: boolean | ConditionalPreventDefault;
      stopPropagation?: boolean;
    }
  | { type: 'dom_delegate_unregister'; delegationId: string; event: string }
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
        /** Optional second-line subtitle. Host-side feature added in
         *  spindle-types 0.4.36 — older hosts ignore the field
         *  silently, which is the correct fall-back for this kind of
         *  cosmetic enrichment. */
        subtitle?: string;
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
       * Update (or clear) the subtitle of a registered input-bar
       * action. `subtitle: undefined` removes a previously-set
       * subtitle — the host re-renders the row as single-line.
       */
      type: 'ls_input_bar_action_set_subtitle';
      scriptId: string;
      actionId: string;
      subtitle: string | undefined;
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
      /**
       * Set when the inspect request failed — only relevant for
       * `jsonqueryFilter` mode (parse errors, runtime errors, or
       * non-array query results). Frontend renders this inline below
       * the filter input so the user can fix their query without
       * losing context. `records` is `[]` and `total` is `0` whenever
       * `error` is present.
       */
      error?: string;
    }
  | {
      /** Debounced hint fired in response to any `ls:collection:*`
       *  broadcast — no payload. Frontend is expected to re-request
       *  `list_collections` if the Storage panel is currently visible. */
      type: 'collections_updated';
    }
  | {
      /** Record count for a specific collection — reply to `count_collection`.
       *  `count` is the number of records (`-1` indicates the collection
       *  is missing or unreadable; UI should hide the count rather than
       *  show "0" which is a legitimate empty-collection state). */
      type: 'collection_count';
      path: string;
      count: number;
    }
  | {
      /** Per-field aggregate stats — reply to `analyze_collection`.
       *  Empty `fields` is a valid result (collection is empty, missing,
       *  or contains only reserved fields). Frontend renders an empty-
       *  state placeholder rather than a blank view in that case. */
      type: 'collection_stats';
      path: string;
      stats: CollectionStats;
    }
  // ─── Diagnostics (v0.28.0) ──────────────────────────────────────────────
  // Backend's response to `request_diagnostics`. The full structured report
  // — type defined in `src/engine/diagnostics.ts:DiagnosticsReport`. Backend
  // builds it via `collectBackendDiagnostics(...)` with merged sync state +
  // async probe results (storage + script-runner subprocess).
  | {
      type:   'diagnostics_report';
      report: import('../engine/diagnostics.js').DiagnosticsReport;
    }
  // ─── In-app code assistant ──────────────────────────────────────────────
  // The user-sent turn is echoed back so the frontend doesn't have to
  // optimistically render and then reconcile.
  | { type: 'assistant_user_turn'; content: string }
  // Incremental content / reasoning tokens streamed from rawStream.
  | { type: 'assistant_token'; token: string }
  | { type: 'assistant_reasoning'; token: string }
  // Mid-turn tool invocation surfaced as a compact chip.
  | {
      type: 'assistant_tool_call';
      callId: string;
      name: string;
      args: Record<string, unknown>;
      result: string;
      isError: boolean;
    }
  // Final assistant message + cumulative usage. End-of-turn signal.
  // `usage` is optional — some providers/endpoints don't surface usage on
  // streaming responses. `usage.estimated` is true when the agent fell
  // back to client-side counting via `spindle.tokens.countText`.
  | {
      type: 'assistant_completed';
      content: string;
      usage?: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
        estimated?: boolean;
      };
    }
  // Failure path — emitted instead of `assistant_completed`.
  | { type: 'assistant_error'; error: string }
  // User-initiated abort confirmed by backend.
  | {
      type: 'assistant_aborted';
      content: string;
      usage?: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
        estimated?: boolean;
      };
    }
  // Connection list pushed to the frontend in response to
  // `request_assistant_connections`.
  | {
      type: 'assistant_connections';
      connections: Array<{
        id: string;
        name: string;
        model: string;
        provider: string;
        isDefault: boolean;
      }>;
    }
  // Threads index + currently active thread id. Sorted by `updatedAt` desc.
  | {
      type: 'assistant_threads';
      threads: import('../assistant/types.js').AssistantThreadIndexEntry[];
      activeThreadId: string | null;
    }
  // Body of a thread loaded into the active slot.
  | {
      type: 'assistant_thread_loaded';
      threadId: string;
      title: string;
      messages: import('lumiverse-spindle-types').LlmMessageDTO[];
    }
  // Success confirmation for `assistant_apply_to_script` — carries the
  // generated script name + classified type so the modal can render a
  // brief toast / inline confirmation. Frontend may also auto-trigger
  // `pushScripts` consumers to refresh the script-manager list.
  | {
      type: 'assistant_apply_success';
      scriptName: string;
      scriptType: import('./script.js').ScriptType;
    }
  // Failure path — surfaced as an error toast inline in the modal.
  | { type: 'assistant_apply_error'; error: string }
  // Thread export payload — backend assembled the Markdown; frontend
  // triggers the actual user-facing download via a temporary blob URL.
  | {
      type: 'assistant_thread_exported';
      threadId: string;
      filename: string;
      content: string;
    }
;
