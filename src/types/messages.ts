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
} from './script.js';

// ─── Frontend → Backend ───────────────────────────────────────────────────────

export type FrontendToBackend =
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
      variables: {
        local: Record<string, unknown>;
        global: Record<string, unknown>;
        chat: Record<string, unknown>;
        character: Record<string, unknown>;
      };
    }
  // ─── DOM injection commands (backend → frontend) ──────────────────
  | { type: 'dom_inject';          scriptId: string; elementId: string; target: string; html: string; position: string; stableId?: string }
  | { type: 'dom_inject_at_message'; scriptId: string; elementId: string; messageId: string; html: string; position: 'header' | 'footer'; stableId?: string }
  | { type: 'dom_update';          elementId: string; html: string }
  | { type: 'dom_remove';          elementId: string }
  | { type: 'dom_add_style';       scriptId: string; styleId: string; css: string }
  | { type: 'dom_remove_style';    styleId: string }
  | { type: 'dom_listen';          elementId: string; listenerId: string; event: string }
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
;
