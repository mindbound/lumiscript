/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT EXECUTOR (post-Step-2 status)
 * ============================================================================
 * In-process AsyncFunction sandbox + helper factories for the api.* object.
 *
 * As of Step 2 (Lumiverse 519565 child-subprocess migration), the production
 * trigger-registry path runs scripts via `script-runner/host-dispatcher.ts:
 * dispatchRunScript()` — which spawns the user-script body in an isolated
 * subprocess that the host can SIGKILL on missed heartbeat. The in-process
 * `executeScript()` here is **no longer on the production hot path**.
 *
 * What's still live in this file:
 *   - `buildScriptAPI(script, options)`  — REUSED parent-side by
 *                                          `host-dispatcher.dispatchRunScript`
 *                                          to build the per-run api object
 *                                          that the api-proxy IPC dispatches
 *                                          target. Production-critical.
 *   - `executeScript(script, options)`   — TEST-INFRA ONLY. Used by
 *                                          `tests/_infra/in-process-runner.ts`
 *                                          to run scripts in-process for
 *                                          trigger-registry orchestration
 *                                          tests (mocking a real subprocess
 *                                          would require reimplementing most
 *                                          of the child runtime).
 *   - `buildScriptNamespace`              — used by `executeScript` for
 *                                          test-infra's `script.require`.
 *   - `buildCapturedConsole` / `buildSafeFetch` / `AsyncFunctionCtor`
 *                                       — helpers used by `executeScript`
 *                                          (test infra). Mirror code-shapes
 *                                          live in `script-runner/api-proxy.ts`
 *                                          and `script-runner/child-entry.ts`
 *                                          for the production-critical
 *                                          subprocess path.
 *
 * Security model (applies to the test-infra path; the production path
 * inherits the same model implemented child-side in `script-runner/`):
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
import { buildDatabanksAPI } from './api/databanks.js';
import { buildRpcAPI       } from './api/rpc.js';
import { buildPersonasAPI  } from './api/personas.js';
import { buildPresetsAPI   } from './api/presets.js';
import { buildRegexScriptsAPI } from './api/regex-scripts.js';
import { buildCouncilAPI   } from './api/council.js';
import { buildToolsAPI     } from './api/tools.js';
import { buildBroadcastAPI } from './api/broadcast.js';
import { buildEnclaveAPI   } from './api/enclave.js';
import { buildCommandsAPI  } from './api/commands.js';
import { buildEventsAPI   } from './api/events.js';
import { buildDOMAPI      } from './api/dom.js';
import { buildMacrosAPI   } from './api/macros.js';
import { buildTokensAPI   } from './api/tokens.js';
import { buildDbAPI       } from './api/db.js';
import { resolveBuiltin, isBuiltinName } from './builtin-library-registry.js';
import { getActiveChatId, getActiveCharacterId } from './binding.js';
import { serializeConsoleArg } from './console-format.js';

// ─── Executor options ─────────────────────────────────────────────────────────

export interface ExecutorOptions {
  grantedPermissions: Set<string>;
  /**
   * Optional snapshot override of the active chat / character context.
   *
   * **Production callers should omit this field.** When omitted,
   * `buildScriptAPI` substitutes a live-reading view backed by
   * `binding.ts`'s module-scope state — so long-lived handlers that
   * outlive the originating script execution (tool invocations,
   * input-bar onClick, drawer-tab onActivate, modal onDismiss, widget
   * onDragEnd) see the CURRENT context at handler-call time rather
   * than a stale snapshot frozen at registration time.
   *
   * Tests pass a snapshot here when they want a deterministic context
   * isolated from the live `binding.ts` state. Production paths in
   * `backend.ts` and `trigger-registry.ts` rely on the live view —
   * trigger-fire context updates already flow through `binding.ts`'s
   * setters, so the live view always sees the right values.
   */
  activeContext?: {
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
   * Called immediately after `api.chat.inject` / `removeInjection` /
   * `clearInjections` / `clearAllInjections` mutates the injection store
   * so the LumiScriptPanel's Active Injections section reflects the
   * change without waiting for the panel's next manual refresh. Wired
   * in `backend.ts` to `pushInjections()`.
   */
  onInjectionsChanged?: () => void;
  /**
   * Per-execution async timeout override in milliseconds.
   * When set, overrides the module-level `SCRIPT_TIMEOUT_MS` default.
   * Callers should derive this from `LumiScriptSettings.scriptTimeoutMs`.
   */
  timeoutMs?: number;
  /**
   * When provided, every `api.tools.register(name, ...)` call during this
   * execution adds `name` to this set. After execution the caller can diff
   * the set against a pre-run snapshot (from `listNamesByScriptId`) to
   * detect and unregister stale tools that the updated code no longer creates.
   */
  toolsRegisteredThisRun?: Set<string>;
  /**
   * Parallel tracker for `api.macros.register(name, ...)` calls. Consumed by
   * `diffAndCleanStaleMacros` post-execution to auto-unregister macros the
   * updated script body no longer creates. See `toolsRegisteredThisRun`.
   */
  macrosRegisteredThisRun?: Set<string>;
  /**
   * Per-execution tracker for `api.macros.registerInterceptor(...)` calls.
   * Adds the resolved entry id (auto-generated or user-provided) on every
   * successful registration. Consumed by `macro-interceptor-registry`'s
   * `diffAndCleanStale` post-execution to drop stale entries — same shape
   * and intent as `toolsRegisteredThisRun` / `macrosRegisteredThisRun`.
   */
  macroInterceptorsRegisteredThisRun?: Set<string>;
  /**
   * Per-execution tracker for `api.chat.registerContentProcessor(...)` calls.
   * Mirror of `macroInterceptorsRegisteredThisRun` for the message-content-
   * processor surface.
   */
  contentProcessorsRegisteredThisRun?: Set<string>;
  /**
   * Per-execution tracker for `api.worldInfo.registerInterceptor(...)` calls
   * (v0.27.0+). Mirror of `macroInterceptorsRegisteredThisRun`.
   */
  worldInfoInterceptorsRegisteredThisRun?: Set<string>;
  /**
   * Per-execution tracker for `api.rpc.sync(...)` / `api.rpc.handle(...)`
   * calls — adds the fully-qualified endpoint name (e.g.
   * `lumiscript.tracker.state`) on every successful registration. Consumed
   * by `rpc-store.diffAndCleanStaleEndpoints` post-execution to drop
   * endpoints whose declarations disappeared from the script body on re-run.
   */
  rpcEndpointsRegisteredThisRun?: Set<string>;
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
 * Hard-limit reference value (script timeout + 5s grace). Mirrored
 * production-side as `script-runner/host-dispatcher.ts:HEARTBEAT_TIMEOUT_MS_DEFAULT`
 * — the watchdog window after which the host SIGKILLs the script-runner
 * child if heartbeats stop arriving. Kept exported here for symmetry
 * with `SCRIPT_TIMEOUT_MS` and for any future test-infra use; the
 * production hot path reads its own copy from the host-dispatcher.
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
    // This `executeScript` is test-infra-only — synchronous-loop recovery
    // (which this race CAN'T provide, since a sync infinite loop blocks
    // the event loop entirely) is the production trigger-registry's
    // concern, handled by the script-runner child subprocess + host's
    // heartbeat-based SIGKILL on missed heartbeat. Tests that exercise
    // the in-process runner accept that a `while(true){}` would hang
    // the test process — they don't deliberately construct that case.
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
    // The resolved value of the script body is captured and returned in the
    // ScriptExecutionResult. Callers may use it to obtain a script's
    // computed result (e.g. the TOOL_INVOCATION handler's output string).
    const returnValue = await Promise.race([
      consoleContext.run(
        options.onConsole ?? (() => {}),
        () => fn(api, data, scriptNS, capturedConsole, z, safeFetch, undefined, undefined) as Promise<unknown>,
      ),
      timeoutPromise,
    ]);

    const duration = Math.round(performance.now() - startTime);
    return { success: true, duration, scriptId: script.id, runId, returnValue };
  } catch (err: unknown) {
    const duration = Math.round(performance.now() - startTime);
    const error = err instanceof Error ? err : new Error(String(err));
    return { success: false, error, duration, scriptId: script.id, runId };
  }
}

// ─── API assembler (exported for use by TriggerRegistry) ──────────────────────

export function buildScriptAPI(script: Script, options: ExecutorOptions): LumiScriptAPI {
  const {
    grantedPermissions,
    activeContext: providedContext,
    userId,
    onToolsChanged,
    onInjectionsChanged,
    toolsRegisteredThisRun,
    macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun,
    contentProcessorsRegisteredThisRun,
    worldInfoInterceptorsRegisteredThisRun,
    rpcEndpointsRegisteredThisRun,
  } = options;
  const hasPerm = (p: string) => grantedPermissions.has(p);

  // Pass a LIVE-reading view of the active context to API builders so
  // closures captured by long-lived handlers (tool invocations,
  // input-bar onClick, drawer-tab onActivate, modal onDismiss, widget
  // onDragEnd) read the CURRENT context at handler-call time rather
  // than the snapshot from registration time. Without this, any tool
  // registered before the user opened a chat would forever see
  // `chatId: null, characterId: null` regardless of subsequent
  // context changes — manifesting as e.g. `api.db.collection({ scope:
  // 'character' })` throwing "requires an active character" mid-spar.
  //
  // `binding.ts`'s module-scope state is mutated atomically by
  // `setActiveContext` in `backend.ts`'s Lumiverse-event handlers, so
  // these getters always return the current truth.
  //
  // Tests can opt out via the `activeContext` option override — useful
  // for deterministic context within a unit test that doesn't want to
  // touch global binding.ts state. Production callers (`backend.ts`,
  // `trigger-registry.ts`) omit the option and get the live view.
  const activeContext: APIBuildDeps['activeContext'] = providedContext ?? {
    get chatId()      { return getActiveChatId(); },
    get characterId() { return getActiveCharacterId(); },
  };

  const deps: APIBuildDeps = {
    script,
    hasPerm,
    userId,
    activeContext,
    onToolsChanged,
    onInjectionsChanged,
    toolsRegisteredThisRun,
    // `onMacrosChanged` is intentionally omitted for v1 — no Status-tab
    // "Active Macros" list yet. The seam exists on APIBuildDeps so the UI
    // can be wired in later without touching this file or api/macros.ts.
    macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun,
    contentProcessorsRegisteredThisRun,
    worldInfoInterceptorsRegisteredThisRun,
    rpcEndpointsRegisteredThisRun,
  };

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
    databanks:  buildDatabanksAPI(deps),
    personas:   buildPersonasAPI(deps),
    presets:    buildPresetsAPI(deps),
    regexScripts: buildRegexScriptsAPI(deps),
    rpc:        buildRpcAPI(deps),
    council:    buildCouncilAPI(deps),
    tools:      buildToolsAPI(deps, () => api),
    macros:     buildMacrosAPI(deps),
    broadcast:  buildBroadcastAPI(deps),
    commands:   buildCommandsAPI(deps),
    events:     buildEventsAPI(deps),
    tokens:     buildTokensAPI(deps),
    db:         buildDbAPI(deps),
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
    // Script identity — read at namespace-build time. Name can become stale
    // if the user renames the script mid-execution (rare), but id and type
    // are immutable for the lifetime of the script record.
    id:   _script.id,
    name: _script.name,
    type: _script.type,

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

// `serializeConsoleArg` lives in `./console-format.ts` so the script-runner
// child can share the same formatter without dragging in this module's
// (parent-only) dependency graph.
