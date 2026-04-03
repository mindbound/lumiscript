/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT EXECUTOR
 * ============================================================================
 * Runs user scripts in an AsyncFunction sandbox with a clean api.* object.
 *
 * Security model:
 * - Scripts run in `new AsyncFunction` (not eval). No direct DOM access.
 * - api.utils.http.* requires allowDangerous on the script AND cors_proxy permission.
 * - api.chat.* requires chat_mutation permission.
 * - api.llm.* requires generation permission.
 *
 * API modules live in src/engine/api/. This file is the thin orchestrator.
 *
 * Exports used by TriggerRegistry:
 *   AsyncFunctionCtor   — shared AsyncFunction constructor
 *   buildScriptAPI      — build the api.* object for a script
 *   buildScriptNamespace — build the script.* namespace (require only)
 *   buildCapturedConsole — build console capture
 *
 * Trigger scripts receive two additional top-level variables:
 *   data  — event payload merged with { __event: 'EVENT_NAME' }
 *           (empty object {} when the script is run manually)
 *   api   — the full LumiScript API
 */

import * as z from 'zod';

import type {
  Script,
  LumiScriptAPI,
  ScriptExecutionResult,
  ConsoleEntry,
  ConsoleEntryType,
  ScriptNamespace,
} from '../types/script.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import { generateUUID } from '../utils/uuid.js';

import { type APIBuildDeps  } from './api/shared.js';
import { buildUtilsAPI      } from './api/utils.js';
import { buildJSONAPI       } from './api/json.js';
import { buildChatAPI       } from './api/chat.js';
import { buildLLMAPI        } from './api/llm.js';
import { buildVariablesAPI  } from './api/variables.js';
import { buildFilesAPI      } from './api/files.js';
import { buildUIAPI         } from './api/ui.js';
import { buildCharactersAPI } from './api/characters.js';
import { buildChatsAPI      } from './api/chats-session.js';
import { buildWorldInfoAPI  } from './api/world-info.js';
import { buildPersonasAPI  } from './api/personas.js';
import { buildToolsAPI     } from './api/tools.js';
import { buildBroadcastAPI } from './api/broadcast.js';

// ─── Executor options ─────────────────────────────────────────────────────────

export interface ExecutorOptions {
  grantedPermissions: Set<string>;
  activeContext: {
    chatId: string | null;
    characterId: string | null;
  };
  /** Active userId — required for operator-scoped extensions when calling spindle.generate.* */
  userId?: string | null;
  onConsole?: (entry: ConsoleEntry) => void;
  scriptStorage?: ScriptStorage;
  /**
   * Event payload injected as the `data` top-level variable.
   * Provided when the script is fired by TriggerRegistry in response to a
   * Lumiverse event. The object includes `__event` (the event name) plus all
   * fields from the raw event payload.
   * When undefined (manual run), `data` is an empty object {}.
   */
  eventData?: Record<string, unknown>;
  /**
   * Called immediately after a tool is registered or unregistered via
   * api.tools.register/unregister so the Status tab updates in real time
   * rather than waiting for script execution to complete.
   */
  onToolsChanged?: () => void;
}

// ─── Async function constructor (exported for use by TriggerRegistry) ─────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AsyncFunctionCtor = Object.getPrototypeOf(async function () {}).constructor as any;

// ─── Main entry point ─────────────────────────────────────────────────────────

export async function executeScript(
  script: Script,
  options: ExecutorOptions,
): Promise<ScriptExecutionResult> {
  const runId = generateUUID();
  const startTime = performance.now();

  const capturedConsole = buildCapturedConsole(options.onConsole);
  const api = buildScriptAPI(script, options);
  const scriptNS = buildScriptNamespace(script, options);
  const data = options.eventData ?? {};

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const fn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
      'api',
      'data',
      'script',
      '__console',
      'z',
      `"use strict";\nconst console = __console;\n${script.code}\n`,
    );

    await fn(api, data, scriptNS, capturedConsole, z);

    const duration = Math.round(performance.now() - startTime);
    return { success: true, duration, scriptId: script.id, runId };
  } catch (err: unknown) {
    const duration = Math.round(performance.now() - startTime);
    const error = err instanceof Error ? err : new Error(String(err));
    return { success: false, error, duration, scriptId: script.id, runId };
  }
}

// ─── API assembler (exported for use by TriggerRegistry) ──────────────────────

export function buildScriptAPI(script: Script, options: ExecutorOptions): LumiScriptAPI {
  const { grantedPermissions, activeContext, userId, onToolsChanged } = options;
  const hasPerm = (p: string) => grantedPermissions.has(p);

  const deps: APIBuildDeps = { script, hasPerm, userId, activeContext, onToolsChanged };

  // api is captured in a variable so that buildToolsAPI can receive a lazy
  // getter (() => api) that resolves to the fully-constructed object at
  // tool invocation time — not at build time (which would be a circular ref).
  const api: LumiScriptAPI = {
    utils:      buildUtilsAPI(deps),
    json:       buildJSONAPI(),
    variables:  buildVariablesAPI(deps),
    chat:       buildChatAPI(deps),
    llm:        buildLLMAPI(deps),
    files:      buildFilesAPI(deps),
    ui:         buildUIAPI(deps),
    characters: buildCharactersAPI(deps),
    chats:      buildChatsAPI(deps),
    worldInfo:  buildWorldInfoAPI(deps),
    personas:   buildPersonasAPI(deps),
    tools:      buildToolsAPI(deps, () => api),
    broadcast:  buildBroadcastAPI(deps),
  };
  return api;
}

// ─── Script namespace (script.require) ───────────────────────────────────────

/**
 * Build the `script.*` namespace injected into each script execution.
 * Contains only `require()` — event registration is handled via `triggers`
 * metadata and the TriggerRegistry, not via script.on().
 */
export function buildScriptNamespace(
  _script: Script,
  options: ExecutorOptions,
): ScriptNamespace {
  const requireCache = new Map<string, unknown>();
  const inProgress = new Set<string>();

  return {
    async require(nameOrId: string): Promise<unknown> {
      if (!options.scriptStorage) {
        throw new Error('script.require: ScriptStorage not available');
      }
      if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
      if (inProgress.has(nameOrId)) {
        throw new Error(`script.require: circular dependency detected for "${nameOrId}"`);
      }

      const library =
        options.scriptStorage.getScript(nameOrId) ??
        options.scriptStorage.getScripts().find(
          s => s.type === 'library' && s.name === nameOrId,
        );

      if (!library) throw new Error(`script.require: library "${nameOrId}" not found`);
      if (library.type !== 'library') {
        throw new Error(`script.require: "${nameOrId}" is not a library script`);
      }

      inProgress.add(nameOrId);
      try {
        const libExports: Record<string, unknown> = {};
        const libModule = { exports: libExports };
        const libApi = buildScriptAPI(library, options);
        const libScriptNS = buildScriptNamespace(library, options);
        const silentConsole = { log: () => {}, warn: () => {}, error: () => {}, info: () => {} };

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const libFn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
          'api', 'data', 'script', '__console', 'exports', 'module',
          `"use strict";\nconst console = __console;\n${library.code}\n`,
        );

        await libFn(libApi, {}, libScriptNS, silentConsole, libExports, libModule);
        const exports = libModule.exports;
        requireCache.set(nameOrId, exports);
        return exports;
      } finally {
        inProgress.delete(nameOrId);
      }
    },
  };
}

// ─── Console capture ──────────────────────────────────────────────────────────

export function buildCapturedConsole(
  onConsole?: (e: ConsoleEntry) => void,
): Record<string, (...args: unknown[]) => void> {
  const makeHandler = (type: ConsoleEntryType) =>
    (...args: unknown[]) => {
      const message = args.map(serializeConsoleArg).join(' ');
      const entry: ConsoleEntry = {
        timestamp: new Date().toLocaleTimeString(),
        type,
        message,
      };
      onConsole?.(entry);
    };

  return {
    log:   makeHandler('log'),
    warn:  makeHandler('warn'),
    error: makeHandler('error'),
    info:  makeHandler('info'),
  };
}

/**
 * Serialize a single console.log argument to a human-readable string.
 * Handles Promises, Errors, Maps/Sets and other built-ins that JSON.stringify
 * would silently reduce to "{}" or "[]".
 */
function serializeConsoleArg(a: unknown): string {
  if (a === undefined)         return 'undefined';
  if (a === null)              return 'null';
  if (typeof a === 'function') return `[Function: ${(a as { name?: string }).name ?? '(anonymous)'}]`;
  if (a instanceof Promise)    return '[Promise (pending)]';
  if (a instanceof Error)      return `${a.name}: ${a.message}`;
  if (a instanceof Map) {
    try {
      return `Map(${a.size}) { ${[...a.entries()].map(([k, v]) => `${JSON.stringify(k)} => ${serializeConsoleArg(v)}`).join(', ')} }`;
    } catch { return `[Map(${a.size})]`; }
  }
  if (a instanceof Set) {
    try {
      return `Set(${a.size}) { ${[...a].map(serializeConsoleArg).join(', ')} }`;
    } catch { return `[Set(${a.size})]`; }
  }
  if (typeof a === 'object') {
    const tag = Object.prototype.toString.call(a);
    if (tag !== '[object Object]' && tag !== '[object Array]') return tag;
    try { return JSON.stringify(a, null, 2); }
    catch { return String(a); }
  }
  return String(a);
}
