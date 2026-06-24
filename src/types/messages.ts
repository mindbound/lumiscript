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
  UIKeyboardState,
  UIDrawerState,
  UISettingsState,
  MessageTagEvent,
  MessageTagOptions,
} from './script.js';
import type { DetectedCardScript } from './card-scripts.js';
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
  // ── Card-embedded scripts (#12): FE confirms which detected scripts to install ──
  // BACKEND-AUTHORITY INVARIANT (Phase 1 must uphold): the backend is the source of
  // truth. It caches the full DetectedCardScript[] by requestId at detect time; on
  // this reply it MUST intersect selectedBundleIds with the cached install/update
  // decisions, ignore unknown/skip bundleIds, and treat a cache miss (e.g. worker
  // respawn between detect and install) as a hard error — re-detect, never fabricate
  // an install (no script data rides on this message by design).
  | {
      type: 'ls_card_scripts_install';
      /** Correlates with the cached `ls_card_scripts_detected` batch. */
      requestId: string;
      /** Author-assigned bundle id of the batch — lets the BE assert the reply
       *  matches the cached batch before installing. */
      bundleCardId: string;
      /** bundleIds the user chose to install/update (subset of the detected set). */
      selectedBundleIds: string[];
    }
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
      /**
       * Phase F (v1.0 runtime-isolation) — manual "Reload script" action
       * from the script editor topbar. Fires regardless of the
       * `// @ls:reload-on-edit` directive (manual reloads always fire,
       * present or not). Library scripts are silently ignored (no body to re-run;
       * libraries are loaded on demand via `script.require()`).
       */
      type: 'reload_script';
      id: string;
    }
  | {
      /**
       * Phase F (v1.0 runtime-isolation) — manual "Rebalance pool" action
       * from the settings panel. Forces every assigned script to release
       * its current worker; subsequent fires re-assign via least-loaded
       * over the configured pool. Useful after increasing `workerCount`
       * to redistribute scripts onto the new workers (sticky-assignment
       * means existing scripts otherwise stay on their original worker).
       */
      type: 'rebalance_pool';
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
  // ─── Shared host components (api.ui.components.*, v1.0.0-rc.9) ──────
  | {
      /**
       * Fired by the frontend when a mounted component invokes one of its
       * registered callbacks (e.g. a switch's onChange). The backend resolves
       * `(componentId, callbackName)` → the script's handler-id via the
       * dispatcher's callback-route registry and fires `sendRunHandlerRequest`.
       */
      type: 'component_callback';
      componentId: string;
      callbackName: string;
      value: unknown;
    }
  | {
      /** Reply to `comp_get_value`. Carries the component's current value. */
      type: 'comp_value_result';
      requestId: string;
      value: unknown;
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
  // ─── File picker result (frontend → backend) ──────────────────────
  | {
      /**
       * Fired by the frontend after `ctx.uploads.pickFile` settles. On
       * success `files` carries each picked file with its bytes base64-encoded
       * for the JSON bus (the backend decodes to Uint8Array before resolving).
       * User-cancel resolves with an empty `files` array. On host error (e.g. a
       * file exceeded `maxSizeBytes` — the host throws) `error` is set and the
       * backend rejects the awaiting `api.ui.pickFile` promise. Correlated to
       * the request via `requestId`.
       */
      type: 'ls_pick_file_result';
      requestId: string;
      files?: Array<{ name: string; mimeType: string; sizeBytes: number; dataBase64: string }>;
      error?: string;
    }
  // ─── UI state changes (frontend → backend) ────────────────────────
  // The frontend subscribes once to `ctx.ui.events.on*Change`, pushes the
  // initial snapshot on connect, and forwards every change. The backend caches
  // the latest (for `api.ui.events.getX`) and fans out to subscribers. Global
  // (not per-script) — the host event source is shared.
  | { type: 'ls_ui_keyboard_changed'; state: UIKeyboardState; }
  | { type: 'ls_ui_drawer_changed';   state: UIDrawerState; }
  | { type: 'ls_ui_settings_changed'; state: UISettingsState; }
  // ─── DOM read response (frontend → backend) ───────────────────────
  | {
      /**
       * v1.0.0-rc.6 — frontend's response to a `dom_read_request`. The
       * backend correlates via `requestId` and resolves the awaiting
       * `DOMHandle.read()` promise.
       *
       * `snapshot` is `null` when the element wasn't found in the live
       * DOM at read-time (script called `.remove()` between dispatch
       * and the FE handling the request, host shell tore down the
       * parent, etc.) — surfaced to the script as a `null` resolution,
       * NOT a throw.
       *
       * Naming: `dom_*` prefix (rather than `ls_*`) so this routes
       * through the same DOM-handler message pipeline as the other
       * DOM ops, matching the convention used by `dom_inject` /
       * `dom_update` / `dom_remove` / etc.
       */
      type: 'dom_read_response';
      requestId: string;
      snapshot: import('./script.js').SerializedDOMElement | null;
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
       * Fired by the frontend when a registered message-tag interceptor matches
       * a COMPLETED message (the FE bridge filters out streaming partials and
       * dedupes per `messageId:tagName:fullMatch`). Backend routes to the
       * script's handler by `handlerId`. Fire-and-forget — no response.
       */
      type: 'ls_tag_interceptor_fired';
      scriptId: string;
      handlerId: string;
      event: MessageTagEvent;
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
  // ─── App mount confirm (frontend → backend) ────────────────────────
  | {
      /**
       * Echoed after the frontend creates the `ctx.ui.mountApp` portal and
       * binds its `.root`. Same Option-B role as `ls_float_widget_created`:
       * gates the create IPC's api-response on real FE confirmation so the
       * child can't fire setVisible / destroy / root.update before the mount
       * (and its bound `.root` element) exists.
       */
      type: 'ls_app_mount_created';
      mountId: string;
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
  // ─── Storage panel — Script Storage section (v1.0.0-rc.6+) ────────
  | {
      /** Request a full enumeration of `api.scriptStorage` slots across
       *  all scripts. Backend replies with `script_storage_list`. */
      type: 'list_script_storage';
    }
  | {
      /** Load entries (key/value pairs) for a specific script's
       *  scriptStorage slot for the inspect modal. Backend replies with
       *  `script_storage_entries` echoing the scriptId. */
      type: 'inspect_script_storage';
      scriptId: string;
    }
  | {
      /** Admin-clear a script's full scriptStorage slot. Fires the
       *  same `ls:scriptStorage:clear` broadcast as user-script
       *  `clear()`, so debug subscribers + the live-refresh path see
       *  it. No reply — frontend re-fetches via the `script_storage_updated`
       *  hint that lands on the broadcast. */
      type: 'clear_script_storage';
      scriptId: string;
    }
  | {
      /** Admin-delete a single key from a script's scriptStorage slot.
       *  Fires `ls:scriptStorage:delete` with the user-script-equivalent
       *  payload. No reply — frontend re-fetches via the
       *  `script_storage_updated` hint. */
      type: 'delete_script_storage_entry';
      scriptId: string;
      key: string;
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
      /**
       * Retry of a turn whose previous attempt failed. The failed attempt was
       * never persisted and its user bubble is still shown, so the backend
       * skips the `assistant_user_turn` echo to avoid duplicating it.
       */
      isRetry?: boolean;
      /**
       * IDs of the user's own scripts (@-mentioned in the composer) to attach
       * as read-context for this turn. The backend resolves each ID to its
       * current name/type/code and the agent folds them into the (ephemeral,
       * never-persisted) system prompt — so the code is always fresh and never
       * bloats the chat bubble or saved history. Unknown IDs are skipped.
       */
      contextScriptIds?: string[];
      /**
       * Reserved-folder ("userfiles/") file paths attached as read-context for
       * this turn. Resolved + injected alongside scripts; never persisted to
       * history. Ineligible / missing / oversized paths are skipped.
       */
      contextFilePaths?: string[];
      /**
       * Edit-and-resend of the last user turn. The previous turn SUCCEEDED and
       * is persisted, so the backend trims the last user message + its assistant
       * reply (and any tool turns between) from the thread before regenerating
       * with this (edited) `content`. Like `isRetry`, the FE already shows the
       * edited bubble, so the `assistant_user_turn` echo is skipped. Only sent
       * when the last user turn already has a subsequent assistant reply.
       */
      editLast?: boolean;
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
  // Persist the active thread's attached-script context set (the @-mention
  // chips). Fired on attach/detach so the chip tray survives reload independent
  // of sending. Backend updates the active thread + persists if it has content.
  | { type: 'assistant_set_context'; scriptIds: string[]; filePaths?: string[] }
  // ─── Attachable user files (the "Lisa files" reserved folder) ────────────
  // List the user's attachable reference files (picker open / refresh). Backend
  // replies with `user_files`.
  | { type: 'request_user_files' }
  // Add a reference file to the reserved folder (the picker's "add file" form).
  // `name` is a within-folder name (extension validated); backend writes it then
  // replies with a refreshed `user_files` (carrying `error` on a validation fail).
  | { type: 'add_user_file'; name: string; content: string }
  // Delete a reference file from the reserved folder; backend deletes
  // (eligibility-checked) and replies with a refreshed `user_files`.
  | { type: 'delete_user_file'; path: string }
  // ─── Lisa memory (the editable Memory panel) ────────────────────────────
  // Request the current memory notes (panel open / refresh). Backend replies
  // with `assistant_memory`.
  | { type: 'request_assistant_memory' }
  // User adds a note via the panel (stored with source: 'user').
  | { type: 'assistant_memory_add'; hook: string; detail?: string; category?: string }
  // User edits a note's editable fields in place (empty detail/category clears).
  | { type: 'assistant_memory_edit'; id: string; hook: string; detail?: string; category?: string }
  // User deletes a note by id.
  | { type: 'assistant_memory_delete'; id: string }
  // Trigger a consolidation pass (merge/dedupe/prune via the LLM). Uses the
  // modal's current connection. Backend replies with `assistant_memory_consolidated`
  // and (on success) a refreshed `assistant_memory`.
  | { type: 'assistant_memory_consolidate'; connectionId?: string }
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
  // `targetScriptId` (Phase 3): when set, UPDATE that existing script's code in
  // place (the user picked "Update «script»" from the apply menu — only offered
  // for @-attached scripts). When absent, create a new script (original path).
  | { type: 'assistant_apply_to_script'; code: string; languageHint?: string; targetScriptId?: string }
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
  // Manual context compaction ("Compact now") — fold the older part of the
  // active thread into a handoff summary now. `connectionId` runs the summary on
  // the user's chosen connection (mirrors assistant_memory_consolidate).
  | { type: 'assistant_compact'; connectionId?: string }
  // Request a breakdown of what's filling the context window (corpus / memory /
  // chat / attachments token estimates) — sent when the user opens the gauge's
  // breakdown popover, answered with assistant_context_breakdown.
  | { type: 'request_context_breakdown' }
;

// ─── Backend → Frontend ───────────────────────────────────────────────────────

export type BackendToFrontend =
  // ── Card-embedded scripts (#12): BE asks the FE to show the consent modal ──
  | {
      type: 'ls_card_scripts_detected';
      /** Correlates the later `ls_card_scripts_install` reply. */
      requestId: string;
      /** Host character UUID the bundle was imported into (provenance). */
      hostCharacterId: string;
      /** Author-assigned stable bundle id (de-dup anchor). */
      bundleCardId: string;
      bundleName?: string;
      /** Per-script decision + permission analysis for the modal. */
      items: DetectedCardScript[];
    }
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
      /**
       * v1.0 — when set to `true`, the FE resets the script's status dot
       * to `'idle'` (grey) instead of inferring `'success'`/`'error'`
       * from the `success` flag. Used by the synthetic `execution_ended`
       * the backend sends when a script is disabled mid-flight: the
       * script didn't really succeed or fail, it was forcibly stopped,
       * and 'idle' communicates that more truthfully than green-success.
       *
       * Optional + defaults to false → backward-compatible; old senders
       * (and all real run-end paths) keep producing the standard
       * success/error dot.
       */
      idleAfter?: boolean;
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
  // ─── Shared host components (api.ui.components.*, v1.0.0-rc.9) ─────────
  // Mount a Lumiverse first-party React component (`ctx.components.mountX`)
  // into a script-owned element (`targetElementId`, a DOMHandle's id). The
  // frontend maps `kind` → the matching `ctx.components.mount*` helper and
  // stores the returned handle by `componentId`. `props` is the mount
  // options with any callback functions stripped (replaced by handler ids
  // in `callbacks` — wired in the Phase-1b interactive path).
  | {
      type:            'comp_mount';
      scriptId:        string;
      componentId:     string;
      targetElementId: string;
      kind:            string;
      props:           Record<string, unknown>;
      /**
       * Names of the callbacks the user registered (e.g. `['onChange']`). The
       * frontend wires each into the mount props so the corresponding user
       * interaction sends a `component_callback` back. Handler-ids stay
       * host-side (in the dispatcher's callback-route registry); the FE only
       * needs the names. Empty/absent for display-only components.
       */
      callbackNames?:  string[];
      /**
       * For body-slot components (mountCollapsibleSection): the elementId to
       * bind the host handle's `.body` element to, so the script's body
       * `DOMHandle` resolves through the normal DOM pipeline. v1.0.0-rc.9.
       */
      bodyElementId?:  string;
    }
  | { type: 'comp_update';  componentId: string; props: Record<string, unknown> }
  | { type: 'comp_destroy'; componentId: string }
  // Value-returning method round-trip (mirrors dom_read_request). `method`
  // names the component method to read (default `'getValue'`; also used for
  // `isExpanded`). FE replies with comp_value_result.
  | { type: 'comp_get_value'; requestId: string; componentId: string; method?: string }
  // Void method invoke (fire-and-forget): expand/collapse/toggle (+ future
  // focus/blur/open/close/refresh). FE calls componentMountMap[componentId][method](...args).
  | { type: 'comp_invoke';  componentId: string; method: string; args?: unknown[] }
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
  // ─── DOM read request (backend → frontend) ─────────────────────────
  | {
      /**
       * v1.0.0-rc.6 — request the frontend to read a serialized snapshot
       * of the element bound to `elementId`. The frontend looks up the
       * element in its `elementMap`, builds the `SerializedDOMElement`
       * snapshot (or `null` if the element no longer exists in the live
       * DOM), and echoes it back via `ls_dom_read_response` using the
       * same `requestId` so the backend can resolve the awaiting
       * `DOMHandle.read()` promise.
       *
       * `options.html` controls whether `innerHTML` is included in the
       * snapshot (default `false` — most use cases don't need the full
       * markup, and the omission keeps the IPC payload small).
       */
      type: 'dom_read_request';
      requestId: string;
      elementId: string;
      options: {
        html?: boolean;
      };
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
  // ─── File picker request (backend → frontend) ──────────────────────
  | {
      /**
       * Request the frontend to open the native file picker via
       * `ctx.uploads.pickFile(options)`. The frontend base64-encodes each
       * selected file's bytes and echoes them back via `ls_pick_file_result`
       * using the same `requestId` so the backend can resolve (or reject) the
       * awaiting `api.ui.pickFile` promise.
       */
      type: 'ls_pick_file_request';
      requestId: string;
      options: {
        accept?: string[];
        multiple?: boolean;
        maxSizeBytes?: number;
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
  // ─── Message-tag interceptor lifecycle (backend → frontend) ─────────
  | {
      /**
       * Register a message-tag interceptor. The frontend calls
       * `ctx.messages.registerTagInterceptor({ tagName, attrs, removeFromMessage })`
       * and stores the host unsubscribe keyed by `handlerId`. When the host
       * fires for a COMPLETED message the FE echoes `ls_tag_interceptor_fired`.
       * One host interceptor per registration (host fires all per-tag).
       */
      type: 'ls_tag_interceptor_register';
      scriptId: string;
      handlerId: string;
      tagName: string;
      options?: MessageTagOptions;
    }
  | {
      /**
       * Unregister a message-tag interceptor — the frontend calls the stored
       * host unsubscribe for `handlerId` and drops it. Sent on the script's
       * `onMessageTag` unsubscribe AND in the disable/delete/reload teardown
       * sweep (before the backend registry is cleared) so no host interceptor
       * is left zombied.
       */
      type: 'ls_tag_interceptor_unregister';
      scriptId: string;
      handlerId: string;
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
  // ─── App mount lifecycle (backend → frontend) ──────────────────────
  | {
      /**
       * Create a full-bleed app-shell portal via `ctx.ui.mountApp(options)`.
       * The frontend binds the returned handle's `.root` into the shared DOM
       * element map (so `dom_*` ops targeting `rootElementId` flow through the
       * existing pipeline) and echoes `ls_app_mount_created` back.
       */
      type: 'ls_app_mount_create';
      scriptId: string;
      mountId: string;
      rootElementId: string;
      options: {
        className?: string;
        position?: 'start' | 'end' | 'app-overlay';
      };
    }
  | {
      /** Show or hide a mounted app without destroying it. */
      type: 'ls_app_mount_set_visible';
      mountId: string;
      visible: boolean;
    }
  | {
      /** Destroy a mounted app — removes it from the app shell. Idempotent frontend-side. */
      type: 'ls_app_mount_destroy';
      mountId: string;
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
      /** v1.0.0-rc.6 — full scriptStorage enumeration (admin view).
       *  Frontend replaces its row state with this on receipt. */
      type: 'script_storage_list';
      entries: import('../engine/api/script-storage.js').ScriptStorageSummary[];
    }
  | {
      /** v1.0.0-rc.6 — key/value entries for a specific script's
       *  scriptStorage slot, echoing the scriptId for inspect-modal
       *  routing. `entries` is `null` when the script's slot vanished
       *  between enumerate + inspect (e.g. host raced ahead of UI). */
      type: 'script_storage_entries';
      scriptId: string;
      entries: Array<{ key: string; value: unknown }> | null;
    }
  | {
      /** v1.0.0-rc.6 — debounced hint fired in response to any
       *  `ls:scriptStorage:*` broadcast (set / delete / clear). No
       *  payload. Frontend is expected to re-request
       *  `list_script_storage` if the Storage panel's Script Storage
       *  section is currently visible. Mirrors `collections_updated`. */
      type: 'script_storage_updated';
    }
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
        /** Context occupancy — size of the latest single prompt (for the
         *  fullness gauge), vs `promptTokens` which sums iterations for billing. */
        occupancyTokens?: number;
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
        /** Context occupancy — size of the latest single prompt (for the
         *  fullness gauge), vs `promptTokens` which sums iterations for billing. */
        occupancyTokens?: number;
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
      /** Attached-script context IDs to restore into the chip tray. Empty for
       *  new threads or threads persisted before context-persistence shipped. */
      contextScriptIds: string[];
      /** Reserved-folder file paths to restore into the chip tray (file
       *  attachments). Empty for new threads or threads persisted before this. */
      contextFilePaths: string[];
      /** Apply markers to interleave into the reconstructed transcript. Empty
       *  for threads with no applies (or persisted before this shipped). */
      appliedEvents: import('../assistant/types.js').AppliedEvent[];
      /** Persisted prompt-token count of the thread's last turn, for the
       *  context-fullness gauge. Undefined for new / pre-gauge threads. */
      lastPromptTokens?: number;
      /** Whether `lastPromptTokens` was a local estimate (gauge shows `~`). */
      lastPromptEstimated?: boolean;
      /** Compaction boundary, if this thread has been compacted — anchors the
       *  "compacted here" transcript divider on reload. Undefined = uncompacted. */
      compactedThrough?: number;
      /** Last turn's in/out/total usage + lifetime thread total — replayed so the
       *  usage strip survives thread switches. Undefined for pre-this threads. */
      lastTurnUsage?: { promptTokens: number; completionTokens: number; totalTokens: number; estimated?: boolean };
      totalUsage?: { promptTokens: number; completionTokens: number; totalTokens: number; estimated?: boolean };
    }
  // Success confirmation for `assistant_apply_to_script` — carries the
  // generated script name + classified type so the modal can render a
  // brief toast / inline confirmation. Frontend may also auto-trigger
  // `pushScripts` consumers to refresh the script-manager list.
  | {
      type: 'assistant_apply_success';
      scriptName: string;
      scriptType: import('./script.js').ScriptType;
      /** True when an existing script was updated in place; false/absent when a
       *  new script was created. Drives the toast wording ("Updated" vs "Created"). */
      updated?: boolean;
    }
  // Failure path — surfaced as an error toast inline in the modal.
  | { type: 'assistant_apply_error'; error: string }
  // Current Lisa memory notes — pushed on request + after every add/edit/delete
  // so the Memory panel stays in sync.
  | { type: 'assistant_memory'; notes: import('../engine/assistant-memory.js').MemoryNote[] }
  // Result of a consolidation pass — `before`/`after` note counts for the toast,
  // or `error` when the pass was a no-op / failed (memory left unchanged).
  | { type: 'assistant_memory_consolidated'; before: number; after: number; error?: string }
  // Attachable user files for the picker (reply to request_user_files / add /
  // delete). `error` carries a validation or I/O message from an add attempt.
  | {
      type: 'user_files';
      files: Array<{ path: string; name: string; sizeBytes: number }>;
      error?: string;
    }
  // Thread export payload — backend assembled the Markdown; frontend
  // triggers the actual user-facing download via a temporary blob URL.
  | {
      type: 'assistant_thread_exported';
      threadId: string;
      filename: string;
      content: string;
    }
  // Context compaction happened (auto pre-turn, or manual) — the older prefix was
  // folded into a handoff. `ok:true` carries the new (lower) occupancy for the
  // fullness gauge + the new boundary for the transcript divider; `ok:false`
  // carries a reason (nothing old enough to fold, or the summary call failed —
  // the thread is left uncompacted either way).
  | {
      type: 'assistant_compacted';
      ok: boolean;
      occupancyTokens?: number;
      estimated?: boolean;
      compactedThrough?: number;
      error?: string;
    }
  // Per-segment token-estimate breakdown of the current context occupancy, for
  // the gauge's breakdown popover. All LOCAL estimates (shown with ~), in tokens.
  | {
      type: 'assistant_context_breakdown';
      corpus: number;       // persona + API cheat-sheet (the fixed prefix)
      memory: number;       // saved-notes / session-notes section
      chat: number;         // the conversation history
      attachments: number;  // @-attached scripts + files (0 if none)
    }
;
