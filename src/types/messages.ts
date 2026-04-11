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
} from './script.js';

// ─── Frontend → Backend ───────────────────────────────────────────────────────

export type FrontendToBackend =
  | { type: 'get_scripts' }
  | { type: 'get_settings' }
  | { type: 'get_active_context' }
  | { type: 'get_injections' }
  | { type: 'get_tools' }
  | { type: 'get_connections' }
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
      /** Available connection profiles for the sidecar settings dropdown. */
      type: 'connections_updated';
      connections: Array<{ id: string; name: string; provider: string }>;
    }
  | {
      /**
       * Result of an auto-sidecar run. Sent after each interceptor pass that
       * executed the sidecar loop, whether it succeeded or was skipped.
       */
      type: 'sidecar_run_result';
      /** Number of LLM turns consumed (0 if loop did not run). */
      turns: number;
      /** Tool calls that were executed in this run. */
      toolCalls: Array<{ name: string; success: boolean }>;
      /** Whether a result was injected into the assembled messages. */
      injected: boolean;
      /** Error message if the sidecar loop failed. */
      error?: string;
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
;
