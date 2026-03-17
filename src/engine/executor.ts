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
 *   buildScriptNamespace — build the script.* namespace (on / require)
 *   executeHandler      — run a pre-captured event handler closure
 */

import * as z from 'zod';

import type {
  Script,
  LumiScriptAPI,
  ScriptExecutionResult,
  ConsoleEntry,
  ConsoleEntryType,
  ScriptNamespace,
  ScriptEventHandler,
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
import { buildEventsAPI     } from './api/events.js';
import { buildCharactersAPI } from './api/characters.js';
import { buildChatsAPI      } from './api/chats-session.js';

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

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const fn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
      'api',
      'script',
      '__console',
      'z',
      `"use strict";\nconst console = __console;\n${script.code}\n`,
    );

    await fn(api, scriptNS, capturedConsole, z);

    const duration = Math.round(performance.now() - startTime);
    return { success: true, duration, scriptId: script.id, runId };
  } catch (err: unknown) {
    const duration = Math.round(performance.now() - startTime);
    const error = err instanceof Error ? err : new Error(String(err));
    return { success: false, error, duration, scriptId: script.id, runId };
  }
}

// ─── Handler execution (used by TriggerRegistry for event-driven invocation) ──

/**
 * Execute a pre-captured handler closure (from a script.on() registration).
 * The handler receives (eventData, api) — api is freshly built from options.
 */
export async function executeHandler<T = unknown>(
  script: Script,
  handler: ScriptEventHandler<T>,
  eventData: T,
  options: ExecutorOptions,
): Promise<ScriptExecutionResult> {
  const runId = generateUUID();
  const startTime = performance.now();

  const capturedConsole = buildCapturedConsole(options.onConsole);
  // Captured console is available in the api modules via the executor context.
  // We don't inject it as a global here — handler is already a compiled closure.
  void capturedConsole; // console forwarding happens via options.onConsole

  const api = buildScriptAPI(script, options);

  try {
    await handler(eventData, api);
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
  const { grantedPermissions, activeContext, userId } = options;
  const hasPerm = (p: string) => grantedPermissions.has(p);

  const deps: APIBuildDeps = { script, hasPerm, userId, activeContext };

  // worldInfo is still a stub — pending Lumiverse World Book API.
  const worldInfo = new Proxy({} as LumiScriptAPI['worldInfo'], {
    get: (_t, prop) => {
      if (prop === '_stub') return true;
      return () => { throw new Error(`api.worldInfo.${String(prop)}: not yet available in LumiScript`); };
    },
  });

  return {
    utils:      buildUtilsAPI(deps),
    json:       buildJSONAPI(),
    variables:  buildVariablesAPI(deps),
    chat:       buildChatAPI(deps),
    llm:        buildLLMAPI(deps),
    files:      buildFilesAPI(deps),
    events:     buildEventsAPI(),
    characters: buildCharactersAPI(deps),
    chats:      buildChatsAPI(deps),
    worldInfo,
  };
}

// ─── Script namespace (script.on, script.require) ─────────────────────────────

/**
 * Build the `script.*` namespace injected into each script execution.
 *
 * @param onImpl  Optional override for `script.on()`. When omitted the default
 *                no-op is used (Phase 1 manual-run behaviour). TriggerRegistry
 *                passes its registration handler here so `script.on()` captures
 *                event handlers during the trigger registration run.
 */
export function buildScriptNamespace(
  script: Script,
  options: ExecutorOptions,
  onImpl?: ScriptNamespace['on'],
): ScriptNamespace {
  const requireCache = new Map<string, unknown>();
  const inProgress = new Set<string>();

  return {
    on: onImpl ?? ((_event, _handler) => { /* no-op in manual-run / library context */ }) as ScriptNamespace['on'],

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
          'api', 'script', '__console', 'exports', 'module',
          `"use strict";\nconst console = __console;\n${library.code}\n`,
        );

        await libFn(libApi, libScriptNS, silentConsole, libExports, libModule);
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
