/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT EXECUTOR
 * ============================================================================
 * Runs user scripts in an AsyncFunction sandbox with a clean api.* object.
 *
 * Security model:
 * - Scripts run in `new AsyncFunction` (not eval). No direct DOM access.
 * - `Bun` and `process` globals are shadowed to `undefined` — always blocked.
 * - `fetch` is shadowed: allowed only when allowDangerous is set on the script.
 * - api.utils.http.* requires allowDangerous on the script AND cors_proxy permission.
 * - api.chat.* requires chat_mutation permission.
 * - api.llm.* requires generation permission.
 * - Note: dynamic `import()` is a language keyword and cannot be parameter-shadowed;
 *   it remains accessible in the worker (known surface, low practical risk for
 *   single-user deployments, higher risk for multi-user operator mode).
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

import { AsyncLocalStorage } from 'async_hooks';
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
import { buildEnclaveAPI   } from './api/enclave.js';
import { buildCommandsAPI  } from './api/commands.js';
import { buildEventsAPI   } from './api/events.js';
import { buildDOMAPI      } from './api/dom.js';
import { resolveBuiltin, isBuiltinName } from './builtin-library-registry.js';

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
  /**
   * Per-execution async timeout override in milliseconds.
   * When set, overrides the module-level `SCRIPT_TIMEOUT_MS` default.
   * Callers should derive this from `LumiScriptSettings.scriptTimeoutMs`.
   */
  timeoutMs?: number;
}

// ─── Cross-script console context ────────────────────────────────────────────

/**
 * AsyncLocalStorage holding the active script execution's onConsole callback.
 *
 * When Script B calls api.broadcast.emit() and Script A's handler fires, the
 * handler's console.log calls should appear in Script B's console (the caller),
 * not Script A's. AsyncLocalStorage propagates the context across await
 * boundaries, so async handlers are covered correctly.
 *
 * Falls back to the registering script's own onConsole if no active context
 * (e.g. a handler fires outside any script execution).
 */
const consoleContext = new AsyncLocalStorage<(e: ConsoleEntry) => void>();

// ─── Async function constructor (exported for use by TriggerRegistry) ─────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AsyncFunctionCtor = Object.getPrototypeOf(async function () {}).constructor as any;

// ─── Sandbox globals ──────────────────────────────────────────────────────────

/**
 * Build a safe `fetch` replacement for the script sandbox.
 *
 * - `allowDangerous` scripts receive the real globalThis.fetch.
 * - All other scripts receive a function that throws a descriptive error,
 *   preventing silent bypass of the `api.utils.http.*` permission gate.
 *
 * `Bun` and `process` are always passed as `undefined` — neither has a
 * legitimate use from user script code.
 */
function buildSafeFetch(script: Script): typeof globalThis.fetch {
  if (script.allowDangerous) return globalThis.fetch.bind(globalThis);
  return (() => {
    throw new Error(
      `"${script.name}" must enable Allow Dangerous to use fetch directly. ` +
      `Use api.utils.http.* for HTTP requests.`,
    );
  }) as unknown as typeof globalThis.fetch;
}

// ─── Execution timeout constants ─────────────────────────────────────────────

/**
 * Default async-loop timeout — rejects the script execution promise after 60 s.
 * Caught by the `catch` block in `executeScript`, producing a normal
 * `execution_ended { success: false }` message with a descriptive error.
 * Can be overridden at call time via `ExecutorOptions.timeoutMs` (driven by
 * the `LumiScriptSettings.scriptTimeoutMs` user setting).
 */
export const SCRIPT_TIMEOUT_MS = 60_000;

/**
 * Default hard limit for the synchronous-loop watchdog set by `backend.ts`
 * and `trigger-registry.ts` around every `executeScript` call.  If the worker
 * event loop is blocked for this long (synchronous `while(true) {}`) the
 * caller invokes `process.exit(1)` — the only reliable escape from a sync
 * loop.  Always derived as the effective async timeout + 5 s buffer so the
 * async timeout always fires first for async loops.
 */
export const HARD_LIMIT_MS = SCRIPT_TIMEOUT_MS + 5_000;

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
    const safeFetch = buildSafeFetch(script);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const fn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
      'api',
      'data',
      'script',
      '__console',
      'z',
      'fetch',   // shadow: allowDangerous → real fetch; else → throws
      'Bun',     // shadow: always undefined — no direct Bun API access
      'process', // shadow: always undefined — no process/env access
      `"use strict";\nconst console = __console;\n${script.code}\n`,
    );

    // ── Async timeout guard ───────────────────────────────────────────────
    // Races the script against a rejection timer so async infinite loops
    // (e.g. `while(true) { await api.llm.generate(); }`) are caught and
    // reported as a clean execution_ended { success: false } message.
    //
    // Synchronous loops cannot be interrupted here because they block the
    // event loop entirely.  The process.exit(1) watchdog set by callers in
    // backend.ts / trigger-registry.ts handles that case.
    const effectiveTimeoutMs = options.timeoutMs ?? SCRIPT_TIMEOUT_MS;
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new Error(
          `Script "${script.name}" exceeded the ${effectiveTimeoutMs / 1000}s execution timeout. ` +
          `Check for infinite loops or long-running async operations.`,
        )),
        effectiveTimeoutMs,
      ),
    );

    // Run inside consoleContext so broadcast handlers fired during this
    // execution route their console output here (not to the registering script).
    await Promise.race([
      consoleContext.run(
        options.onConsole ?? (() => {}),
        () => fn(api, data, scriptNS, capturedConsole, z, safeFetch, undefined, undefined) as Promise<unknown>,
      ),
      timeoutPromise,
    ]);

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
    enclave:    buildEnclaveAPI(deps),
    ui:         { ...buildUIAPI(deps), dom: buildDOMAPI(deps) },
    characters: buildCharactersAPI(deps),
    chats:      buildChatsAPI(deps),
    worldInfo:  buildWorldInfoAPI(deps),
    personas:   buildPersonasAPI(deps),
    tools:      buildToolsAPI(deps, () => api),
    broadcast:  buildBroadcastAPI(deps),
    commands:   buildCommandsAPI(deps),
    events:     buildEventsAPI(deps),
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
  sharedInProgress?: Set<string>,
): ScriptNamespace {
  const requireCache = new Map<string, unknown>();
  // sharedInProgress is passed by parent require() calls so circular dependency
  // detection works across library boundaries (not just within a single namespace).
  const inProgress = sharedInProgress ?? new Set<string>();

  return {
    async require(nameOrId: string): Promise<unknown> {
      // ── Built-in libraries (ls:*) — resolved before user storage ─────
      if (isBuiltinName(nameOrId)) {
        if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
        const factory = resolveBuiltin(nameOrId);
        if (!factory) {
          throw new Error(`script.require: built-in library "${nameOrId}" not found`);
        }
        // Build API from the CALLING script — so DOM elements, permissions,
        // and scriptId all belong to the caller, not a synthetic script.
        const callerApi = buildScriptAPI(_script, options);
        const exports = factory(callerApi);
        requireCache.set(nameOrId, exports);
        return exports;
      }

      // ── User libraries (from storage) ────────────────────────────────
      if (!options.scriptStorage) {
        throw new Error('script.require: ScriptStorage not available');
      }
      if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
      if (inProgress.has(nameOrId)) {
        throw new Error(`script.require: circular dependency detected for "${nameOrId}"`);
      }

      const library =
        options.scriptStorage.getScript(nameOrId) ??
        options.scriptStorage.getByName(nameOrId);

      if (!library) throw new Error(`script.require: library "${nameOrId}" not found`);
      if (library.type !== 'library') {
        throw new Error(`script.require: "${nameOrId}" is not a library script`);
      }

      inProgress.add(nameOrId);
      try {
        const libExports: Record<string, unknown> = {};
        const libModule = { exports: libExports };
        const libApi = buildScriptAPI(library, options);
        const libScriptNS = buildScriptNamespace(library, options, inProgress);
        const silentConsole = { log: () => {}, warn: () => {}, error: () => {}, info: () => {} };
        const libSafeFetch = buildSafeFetch(library);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const libFn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
          'api', 'data', 'script', '__console', 'exports', 'module',
          'fetch',   // shadow: library's own allowDangerous flag governs access
          'Bun',     // shadow: always undefined
          'process', // shadow: always undefined
          `"use strict";\nconst console = __console;\n${library.code}\n`,
        );

        await libFn(libApi, {}, libScriptNS, silentConsole, libExports, libModule, libSafeFetch, undefined, undefined);
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
      (consoleContext.getStore() ?? onConsole)?.(entry);
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
