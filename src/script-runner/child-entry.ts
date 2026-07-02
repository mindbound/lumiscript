/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT-RUNNER CHILD ENTRY (Phase 2 skeleton)
 * ============================================================================
 * Built to `dist/script-runner.js`. Spawned by the LumiScript main backend
 * via `spindle.backendProcesses.spawn({ entry: 'dist/script-runner.js', ... })`.
 *
 * Phase 2 scope (this file): bare execution skeleton.
 *   - Receive `RunScriptRequest` from parent
 *   - Build a minimal AsyncFunction sandbox (only `data` parameter exposed)
 *   - Run the user code, race against `timeoutMs`
 *   - Send back `ScriptRunningNotice` and `RunScriptResult`
 *   - Idle heartbeat keeps the host's sync-loop watchdog refreshed
 *
 * Layered phase by phase:
 *   - Phases 3–5  api proxy — AsyncFunction receives `api`, `script`, etc.
 *   - Phase 6     broadcast-subscription forwarding (per-script handler map)
 *   - Phase 7     built-in libraries — `script.require('ls:*')` resolution
 *   - Phase 8     AbortSignal propagation (signal-bearing api methods)
 *   - Phase 9a    console capture forwarding (this file)
 *
 * Coming in Phase 9b: full executor takeover (`z`/`fetch`/`Bun`/`process`
 * sandbox bindings; `data` populated from real trigger payloads via the
 * dispatcher; tracking-set threading for tools/macros/interceptors).
 *
 * Architecture rationale: see `notes/step-2-design.md`. Keeping the surface
 * minimal in Phase 2 lets us verify the IPC pipeline end-to-end before
 * layering the api-proxy complexity on top.
 */

import type { SpindleBackendProcessContext } from 'lumiverse-spindle-types';
import type {
  ParentToChildMessage,
  ChildToParentMessage,
  RunScriptRequest,
  RunScriptResult,
  ScriptRunningNotice,
  ApiProxyResponse,
  BroadcastFireMessage,
  BroadcastSubscribeMessage,
  BroadcastUnsubscribeMessage,
  BroadcastClearMessage,
  ConsoleEntryNotice,
  SerializedError,
  RunHandlerRequest,
  RegisterHandler,
  UnregisterHandler,
  HandlerResult,
  ScriptUnregisterMessage,
  AdvancedModalDismissedNotice,
  FloatWidgetPositionNotice,
  StreamChunkMessage,
  StreamEndMessage,
  StreamRequest,
  StreamCancelRequest,
} from '../types/script-runner-ipc.js';
import type { ConsoleEntry, ConsoleEntryType } from '../types/script.js';
import {
  buildProxiedAPI,
  runIdContext,
  liveContextStore,
  rejectionAttribution,
  notifyAdvancedModalDismissed,
  notifyFloatWidgetPosition,
  clearScriptStateOnUnregister,
  applyScriptStateSnapshot,
  type ProxyHandle,
} from './api-proxy.js';
import { serializeConsoleArg } from '../engine/console-format.js';
// Phase 9c-gap-close — bundle zod into the child runtime so user-script
// bodies can use `z.object({...})` / `z.string()` / etc. exactly like
// they do in the in-process executor (which injects `z` into the
// AsyncFunction sandbox as a top-level binding).
import * as z from 'zod';
import { LumiScriptSecurityError } from '../types/lumiscript-errors.js';
// #11 — QuickJS-WASM isolate harness (engineMode='quickjs'). Reuses the
// api-proxy dispatch path verbatim; only the in-VM user-code boundary differs.
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  hasVmHandler,
  hasVmBroadcast,
  hasVmWidget,
  notifyVmWidgetPosition,
  hasVmModal,
  notifyVmModalDismissed,
  dropVmModal,
  disposeContextForScript,
  disposeScriptVmBroadcast,
  disposeVmHandler,
  hasVmStream,
  pushVmStreamChunk,
  pushVmStreamEnd,
  sweepVmStreamsForScript,
  setStreamQueueCap,
  sweepIdleContexts,
  warmupQuickJS,
  // #11 observability — engine telemetry note* bumpers (counters live in qjs-engine.ts) +
  // the getEngineTelemetry() snapshot spread into the diagnostic-stats reply.
  noteEngineRun,
  noteDegradedRun,
  noteQuickjsRunError,
  noteQuickjsFireError,
  noteQuickjsTimeout,
  getEngineTelemetry,
  // #11 P5-2 — inject the child-side Bun-timer scheduler the in-VM setTimeout/setInterval reach through.
  setVmTimerScheduler,
} from './qjs-engine.js';

// ─── Error classes ──────────────────────────────────────────────────────────

/**
 * Marker error for the async-timeout case in `runOne`. Distinct class so
 * `runOne`'s post-result handling can discriminate the timeout (where the
 * user's `fn()` has been orphaned by Promise.race and is still consuming
 * resources) from a regular script throw (where `fn()` exited normally).
 *
 * The `proc.fail(...)` call gated on this name is the only safe way to
 * terminate a runaway async loop — JavaScript provides no in-process
 * mechanism to externally abort an in-progress AsyncFunction.
 */
class ScriptTimeoutError extends Error {
  override readonly name = 'ScriptTimeoutError';
}

// ─── Constants ──────────────────────────────────────────────────────────────

/**
 * Idle heartbeat cadence. Fires while the child is between script runs;
 * keeps the host's `heartbeatTimeoutMs` watchdog refreshed without us
 * having to plumb anything through the user-code path.
 *
 * During an active script run, heartbeats happen as a side effect of the
 * AsyncFunction yielding to the event loop on each `await`. A truly
 * synchronous infinite loop blocks both this interval AND any other
 * heartbeat path — exactly the hang signal we want the host to detect.
 */
const IDLE_HEARTBEAT_INTERVAL_MS = 5_000;

/**
 * Reference to the JavaScript `AsyncFunction` constructor. Spec-defined as
 * the constructor of `(async () => {}).constructor`. Cast to a usable
 * shape; the runtime invocation surface is a function that accepts a
 * variadic list of parameter names followed by the function body string,
 * and returns an async-callable function.
 */
const AsyncFunctionCtor = (async () => {}).constructor as new (
  ...args: string[]
) => (...args: unknown[]) => Promise<unknown>;

// ─── Sandbox lockdown (CRIT-01 mitigation, v1.0.0-rc.7+) ────────────────────
//
// Capture-then-lockdown. Backend code paths reach for `process.X` /
// `globalThis.fetch` during normal operation; those captures land at
// module-init time (the consts below), before `installSandboxLockdown` runs
// from inside the default export's body. After lockdown, every non-
// whitelisted global throws `LumiScriptSecurityError` on access. User-script
// bodies see the lockdown via three layers of defence (parameter shadowing
// + globalThis lockdown + AsyncFunction body lexical rebindings); the
// dispatch-time check in `host-dispatcher.ts:checkUserScriptSecurity` catches
// dynamic `import()` (the one vector the runtime lockdown can't intercept,
// since `import()` is a JS syntax operator, not a property lookup).
//
// Full design + residual-gap accounting in `notes/security-hardening-rc7.md`.

/** Captured `process.on` — `process` becomes a throwing accessor post-lockdown. */
const _processOn          = process.on.bind(process);
/** Captured `process.memoryUsage` — used by `diagnostic-stats-request` handler. */
const _processMemoryUsage = process.memoryUsage.bind(process);
/** Captured `process.cpuUsage` — used by `diagnostic-stats-request` handler. */
const _processCpuUsage    = process.cpuUsage.bind(process);
/** Captured `process.uptime` — used by `diagnostic-stats-request` handler. */
const _processUptime      = process.uptime.bind(process);
/** Captured host `fetch` — passed to `allowDangerous` scripts as `safeFetch`. */
const _hostFetch          = globalThis.fetch.bind(globalThis);

/**
 * Allowlist of `globalThis` properties that survive the lockdown sweep.
 * Anything not on this list becomes a throwing accessor raising
 * `LumiScriptSecurityError` on read. Append additions cautiously — every
 * entry expands the user-script attack surface.
 *
 * Deliberate omissions: `Bun` (cannot be locked — non-configurable in Bun
 * runtime; passed via AsyncFunction parameter), `fetch` (locked at globalThis,
 * passed via parameter), `Function` / `eval` (locked — blocks `new Function`,
 * `(0, eval)`), `Worker`, `navigator`, `document`, `window`, `self`,
 * `require`, `XMLHttpRequest`, `WebSocket`, `EventSource`.
 */
const SAFE_GLOBALS: ReadonlySet<string> = new Set([
  // Identity
  'globalThis',
  // Standard ES global functions + value constants — pure, no capability
  // surface. User scripts use these freely; backend libs use them too.
  // Locking them was a "conservative default" oversight (verified by manual
  // smoke-test: scripts using `isNaN()` hit the lockdown's throwing accessor).
  'isNaN', 'isFinite', 'parseInt', 'parseFloat',
  'NaN', 'Infinity', 'undefined',
  'encodeURI', 'encodeURIComponent', 'decodeURI', 'decodeURIComponent',
  'escape', 'unescape',
  // Core built-ins
  'Object', 'Array', 'Number', 'Boolean', 'String', 'Symbol',
  'Date', 'RegExp', 'Map', 'Set', 'WeakMap', 'WeakSet', 'WeakRef',
  'Promise', 'Proxy', 'Reflect',
  // Function constructor — Zod's schema compiler and Handlebars' template
  // compiler both invoke `new Function(...)` at runtime. Locking Function
  // breaks both. Whitelisting Function does NOT materially worsen the
  // user-script threat surface because `({}).constructor.constructor`
  // already reaches the same Function constructor through the prototype
  // chain (auditor's residual gap from §2.5 Option B). The dispatch-time
  // check in `host-dispatcher.ts:checkUserScriptSecurity` rejects explicit
  // `Function(` and `.constructor.constructor` usage in user source as
  // defence-in-depth.
  'Function',
  // Buffer — Node-compat; backend libraries reach for it at runtime. User
  // scripts that use it can only manipulate bytes; doesn't enable escape.
  'Buffer',
  // Error types
  'Error', 'TypeError', 'RangeError', 'ReferenceError', 'SyntaxError',
  'URIError', 'EvalError', 'AggregateError',
  // Math + data
  'JSON', 'Math', 'Intl', 'BigInt',
  // Typed arrays + binary
  'ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'Atomics',
  'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
  'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array',
  'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array',
  // Text + URL + base64 codecs
  'TextEncoder', 'TextDecoder', 'URL', 'URLSearchParams',
  // `atob` / `btoa` — pure base64 codecs (binary-string <-> base64-string),
  // no capability surface. Standard Web Platform globals available in Bun.
  // Whitelisted because (a) library code commonly assumes they exist (Zod
  // and others feature-detect via `typeof atob !== 'undefined'`) and (b) the
  // backend's own helpers (`base64ToUint8Array` in api/utils.ts,
  // `dataUrlToBytes` in engine/image-format.ts) use them as a portable
  // alternative to `Buffer.from(b64, 'base64')` — the latter triggers the
  // host's bundle-scanner false-positive for "dynamic code execution"
  // (host commit `7e83b2c2`'s overbroad regex).
  'atob', 'btoa',
  // In-memory binary data carriers — no filesystem, no network, no escape
  // path. Tests use `new File(...)` to construct script-pack fixtures;
  // user scripts can use them for in-memory binary manipulation (e.g.
  // building blobs for api.images.upload). Filesystem access is gated by
  // api.files / allowDangerous, not these constructors.
  'Blob', 'File', 'FileReader', 'FormData',
  // HTTP message carriers — structural types. Network capability still
  // requires the fetch parameter (gated by allowDangerous via Layer 1).
  'Headers', 'Request', 'Response',
  // Async + timers + structured clone
  'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval',
  'queueMicrotask', 'structuredClone',
  // Abort
  'AbortController', 'AbortSignal',
  // Crypto (also used by api.utils.shortId; deliberate to expose to scripts)
  'crypto',
  // Benign
  'WebAssembly', 'performance', 'FinalizationRegistry',
  // Console — per-run shadowed via AsyncFunction's `const console = __console;`,
  // but kept whitelisted so the binding exists in the brief window before
  // the per-run preamble takes effect.
  'console',
  // Bun runtime metadata — read-only object (`{ userAgent: "Bun/X.Y.Z",
  // platform, hardwareConcurrency }`), no capability surface. Whitelisted
  // both for legitimate user-script use and because some 3rd-party libs
  // do `typeof navigator !== 'undefined' && navigator?.userAgent?.includes(...)`
  // for runtime detection (e.g. Zod's Cloudflare-Workers check).
  'navigator',
  // Event types — pure data carriers, no capability.
  'Event', 'EventTarget', 'CustomEvent', 'MessageEvent', 'ErrorEvent', 'CloseEvent',
  'DOMException',
  // ES2024 disposable resource pattern (`using` syntax).
  'AsyncDisposableStack', 'DisposableStack', 'SuppressedError',
  // Generic iteration.
  'Iterator',
  // Float16Array — ES2025 typed array.
  'Float16Array',
  // ES2024 ShadowRealm — pure realm-isolation primitive. Whitelisted so user
  // scripts can experiment with it; doesn't grant any capability the host
  // realm doesn't already have. (Long-term: this might become the v1.1
  // Option C closure mechanism for CRIT-01 residuals.)
  'ShadowRealm',
  // URLPattern — pattern matching for URLs (ES proposal, Bun ships it).
  'URLPattern',
  // Streams API — pure data transforms, no I/O capability themselves.
  // The dangerous part of streams is what you READ FROM or PIPE TO —
  // those endpoints (fetch responses, Bun file-handle, etc.) are separately gated.
  'ReadableStream', 'ReadableStreamBYOBReader', 'ReadableStreamBYOBRequest',
  'ReadableStreamDefaultController', 'ReadableStreamDefaultReader',
  'ReadableByteStreamController',
  'WritableStream', 'WritableStreamDefaultController', 'WritableStreamDefaultWriter',
  'TransformStream', 'TransformStreamDefaultController',
  'ByteLengthQueuingStrategy', 'CountQueuingStrategy',
  'CompressionStream', 'DecompressionStream',
  'TextDecoderStream', 'TextEncoderStream',
  // Web Crypto type classes (instance methods are pure crypto; the
  // capability surface is the bound key material, which user scripts can
  // create freely just like with `crypto.subtle`).
  'Crypto', 'CryptoKey', 'SubtleCrypto',
  // Performance API class hierarchy — measurement primitives only.
  'Performance', 'PerformanceEntry', 'PerformanceMark', 'PerformanceMeasure',
  'PerformanceObserver', 'PerformanceObserverEntryList',
  'PerformanceResourceTiming', 'PerformanceServerTiming', 'PerformanceTiming',
  // MessageChannel / MessagePort — within a single subprocess, can't reach
  // anything dangerous (process is the IPC endpoint; whitelisted separately).
  'MessageChannel', 'MessagePort',
  // Bun bundler error types — pure error subclasses, no capability.
  'BuildError', 'BuildMessage', 'ResolveError', 'ResolveMessage',
  // Bun's streaming HTML rewriter — instance methods are pure transforms;
  // the class itself doesn't grant capability. User scripts can use it for
  // DOM manipulation without reaching the host's actual DOM.
  'HTMLRewriter',
  // setImmediate / reportError — benign Node-compat helpers.
  'setImmediate', 'clearImmediate', 'reportError',
  // Spindle host gateway — NOT present on the script-runner subprocess's
  // globalThis in production (Spindle injects it into the BACKEND worker,
  // a different process). Whitelisted here because the test infrastructure
  // (`tests/_infra/setup.ts`) runs both backend and script-runner code in
  // a single Bun process and puts `spindle` on globalThis for every test
  // via `beforeEach`. No production exposure — `spindle` simply isn't
  // there for the lockdown to find when it iterates `Object.getOwnPropertyNames`.
  'spindle',
  // `process` — Spindle's `backend-process-runtime.ts` uses the standard
  // process lifecycle hooks (send / on / exit / signals) internally to
  // manage the subprocess lifecycle (init handshake, shutdown, IPC).
  // Locking `process` breaks
  // Spindle's own runtime and causes the subprocess to time out at startup
  // (verified empirically against host Lumiverse 0.9.7). Whitelisted on
  // architectural necessity. User-script defence:
  //   - Layer 1: AsyncFunction parameter shadow makes bare `process` undefined.
  //   - Layer 4: `checkUserScriptSecurity` (host-dispatcher) rejects literal
  //     `globalThis.process` / `globalThis["process"]` in user source.
  // Residual gap (same shape as Bun §4.0): aliased forms
  // (`const p = globalThis.process; p.env`) bypass Layer 4 and reach the real
  // process. v1.1 Option C (ShadowRealm / QuickJS) is the proper closure —
  // it gives the user-script realm its own `process` that the host's IPC
  // doesn't touch. See `notes/security-hardening-rc7.md` §4.0.
  'process',
]);

/**
 * Install the LumiScript sandbox lockdown on the current realm. Replaces
 * every `globalThis` property not in `SAFE_GLOBALS` with a writable data
 * slot holding `undefined` (read returns `undefined`, `typeof` returns
 * `"undefined"`, assignment rebinds the slot normally). Monkey-patches
 * `setTimeout` / `setInterval` to reject the string-form callback (which
 * compiles to `Function` under the hood).
 *
 * Idempotent: a property already locked with our non-configurable accessor
 * trips the inner `try/catch` and remains locked. Safe to call multiple
 * times; only the first call installs.
 *
 * Called once from the default export's body, before `proc.onMessage` is
 * registered. Module-init captures above must complete first.
 *
 * Residual gaps (closed by Option C / v1.1):
 *   - `({}).constructor.constructor('code')()` reaches the Function
 *     constructor via prototype chain, bypassing the globalThis lock.
 *     Constructed-function bodies execute in global scope where property
 *     locks apply, BUT `import()` is a syntax operator and works inside
 *     constructed functions — defended at dispatch time by
 *     `checkUserScriptSecurity` rejecting literal `import(` in source.
 *   - JIT / Bun-internal escapes via runtime bugs.
 * See `notes/security-hardening-rc7.md` for the full accounting.
 *
 * Exported for the sandbox-escape regression test (`tests/script-runner/
 * sandbox-escape.test.ts`) which exercises every PoC vector from
 * `notes/lumiscript-security-audit.md` §2.2 + §2.6 against a locked realm.
 */
export function installSandboxLockdown(): void {
  for (const name of Object.getOwnPropertyNames(globalThis)) {
    if (SAFE_GLOBALS.has(name)) continue;
    try {
      // Replace the property with a writable data slot holding `undefined`.
      // Design rationale (post-rc.7 manual-testing pivot):
      //
      //   The lockdown's purpose is blocking READ access to ORIGINAL host
      //   references. `defineProperty` replaces the data slot — the
      //   original Bun-side / Node-compat value (fs, http, Worker, etc.)
      //   is gone from the global object. Backend code paths capture what
      //   they need before lockdown (see `_processOn` / `_hostFetch` /
      //   etc. above).
      //
      //   Why `value: undefined` (data) instead of `get() { throw }`:
      //   the throwing-accessor design (rc.7 v1) broke `typeof X` feature
      //   detection used widely by third-party libraries (Zod, Handlebars,
      //   anything checking `typeof navigator !== 'undefined'` etc.). The
      //   `typeof` operator on a throwing getter rethrows. Returning
      //   undefined makes `typeof X === 'undefined'` evaluate naturally,
      //   matching the semantics of "X doesn't exist on globalThis."
      //
      //   Runtime access to a locked global from user code: `globalThis.Bun`
      //   evaluates to `undefined`; downstream `.file(...)` throws a
      //   standard `TypeError: Cannot read properties of undefined`. Less
      //   explicit than the old `LumiScriptSecurityError` but matches
      //   browser/Node feature-detect conventions. Explicit security errors
      //   for known-bad patterns still come from Layer 4
      //   (`checkUserScriptSecurity` in host-dispatcher) at dispatch time.
      //
      //   `writable: true, configurable: true` ensures the test
      //   infrastructure's `globalThis.spindle = createMockSpindle()`
      //   reassignment continues to work and the lockdown remains
      //   idempotent (second `installSandboxLockdown()` redefines).
      //
      //   `enumerable: false` keeps the now-undefined slot out of
      //   `Object.keys(globalThis)` enumeration — same observable effect
      //   as the property having been deleted.
      Object.defineProperty(globalThis, name, {
        configurable: true,
        enumerable:   false,
        writable:     true,
        value:        undefined,
      });
    } catch {
      // Property was non-configurable at the platform level (`Bun`, some
      // engine-internal slots). The fallback layers — AsyncFunction
      // parameter shadowing (Layer 1), AsyncFunction body lexical
      // preamble (Layer 3), and `checkUserScriptSecurity` source check
      // (Layer 4) — cover the common access patterns. The aliased-form
      // residual is documented in `notes/security-hardening-rc7.md` §4.0.
    }
  }

  // setTimeout / setInterval can accept a string in some runtimes (the
  // string compiles to Function under the hood — a vector if our Function
  // lock fails). Monkey-patch to require a callable first arg. #11 P5-3 —
  // ALSO track each timer per owning script (currentUserScriptId) so a leaked
  // interval can't outlive its script (Finding-4). A one-shot untracks itself
  // after firing (so repeated setTimeouts don't accumulate); intervals stay
  // tracked until clear/teardown. Internal timers (no active user run → no
  // scriptId) pass through untracked.
  const _setTimeout  = globalThis.setTimeout;
  const _setInterval = globalThis.setInterval;
  globalThis.setTimeout = ((cb: unknown, ms?: unknown, ...args: unknown[]): ReturnType<typeof setTimeout> => {
    if (typeof cb !== 'function') {
      throw new LumiScriptSecurityError(
        'setTimeout requires a function callback (string form is not supported in the LumiScript sandbox)',
      );
    }
    const sid = currentUserScriptId();
    if (sid === undefined) return _setTimeout(cb as (...a: unknown[]) => void, ms as number, ...(args as unknown[]));
    let id: ReturnType<typeof setTimeout>;
    id = _setTimeout((...cbArgs: unknown[]) => {
      untrackAsyncfnTimer(sid, id); // fired → drop from the set (bounds repeated-setTimeout accumulation)
      (cb as (...a: unknown[]) => void)(...cbArgs);
    }, ms as number, ...(args as unknown[]));
    trackAsyncfnTimer(sid, id);
    return id;
  }) as typeof setTimeout;
  globalThis.setInterval = ((cb: unknown, ms?: unknown, ...args: unknown[]): ReturnType<typeof setInterval> => {
    if (typeof cb !== 'function') {
      throw new LumiScriptSecurityError(
        'setInterval requires a function callback (string form is not supported in the LumiScript sandbox)',
      );
    }
    const sid = currentUserScriptId();
    const id = _setInterval(cb as (...a: unknown[]) => void, ms as number, ...(args as unknown[]));
    if (sid !== undefined) trackAsyncfnTimer(sid, id); // intervals persist until clearInterval/teardown
    return id;
  }) as typeof setInterval;
  // Patch clearTimeout/clearInterval to also DROP the id from the per-script tracking set. Without this,
  // a timer the user clears (an interval, or a one-shot cleared before it fires) stays in the set — since
  // only a one-shot FIRE untracks — so a script that repeatedly creates+clears timers accumulates dead
  // ids until it is unregistered. Untrack is attributed to the clearing run (mirroring creation); the
  // native clear always runs first so clearing works even outside a user run.
  const _clearTimeout  = globalThis.clearTimeout;
  const _clearInterval = globalThis.clearInterval;
  globalThis.clearTimeout = ((id?: unknown): void => {
    _clearTimeout(id as Parameters<typeof clearTimeout>[0]);
    const sid = currentUserScriptId();
    if (sid !== undefined && id !== undefined) untrackAsyncfnTimer(sid, id as ReturnType<typeof setTimeout>);
  }) as typeof clearTimeout;
  globalThis.clearInterval = ((id?: unknown): void => {
    _clearInterval(id as Parameters<typeof clearInterval>[0]);
    const sid = currentUserScriptId();
    if (sid !== undefined && id !== undefined) untrackAsyncfnTimer(sid, id as ReturnType<typeof setInterval>);
  }) as typeof clearInterval;
}

/**
 * Active proxy handles by `runId`. One entry per dispatched run.
 *
 * Phase 9d.3 lifecycle change: proxies are NOT dropped on `run-result` —
 * handler closures registered during the run capture the proxy's `api`
 * and need it to remain dispatchable when they fire later (e.g. at
 * prompt-assembly time long after the registering script run completed).
 * Proxies are dropped on `script-unregister` IPC instead. We track
 * `scriptId` alongside each entry so unregister can target precisely.
 *
 * Memory note: this means each script run accumulates a proxy (with
 * its own pending map + Handlebars instance) until the script is
 * unregistered. For typical session lifetimes (dozens to hundreds of
 * runs per script) the bloat is acceptable; longer-running deployments
 * may want a 9d.3.x optimization to drop proxies whose runs are old
 * AND whose handler-closure registry is empty.
 */
interface ActiveProxyEntry {
  scriptId: string;
  proxy:    ProxyHandle;
}
const activeProxies = new Map<string, ActiveProxyEntry>();

/**
 * Phase 6: broadcast handler closures, scoped per-script (NOT per-run).
 * Subscriptions persist across script runs; the parent's `dispatchRunScript`
 * sends `BroadcastClearMessage` at the start of every new run for a given
 * script, which drops THIS map's per-script entry. Between clears, fires
 * arriving via `BroadcastFireMessage` invoke the registered closure.
 *
 * Lifecycle invariant from `lumiscript_broadcast_bus.md`: subscriptions
 * are wiped at the START of each new trigger run, not the end. The proxy's
 * `broadcast.on` populates this map; `broadcast-clear` clears it; the
 * unsub function returned by `on` removes a single entry on demand.
 */
// v0.26.4 — return type widened to `unknown` so the broadcast-fire
// dispatcher can detect thenable returns and emit lifecycle messages
// for the sidebar status indicator. Sync handlers still return void;
// async-tracking-opt-in handlers return a Promise.
type BroadcastHandlerFn = (payload: unknown) => unknown;
const broadcastHandlers = new Map<string, Map<string, BroadcastHandlerFn>>();

function registerBroadcastHandler(
  scriptId: string,
  subId: string,
  handler: BroadcastHandlerFn,
): void {
  let scriptHandlers = broadcastHandlers.get(scriptId);
  if (!scriptHandlers) {
    scriptHandlers = new Map();
    broadcastHandlers.set(scriptId, scriptHandlers);
  }
  scriptHandlers.set(subId, handler);
}

function unregisterBroadcastHandler(scriptId: string, subId: string): void {
  const scriptHandlers = broadcastHandlers.get(scriptId);
  if (!scriptHandlers) return;
  scriptHandlers.delete(subId);
  if (scriptHandlers.size === 0) broadcastHandlers.delete(scriptId);
}

/**
 * Phase 9d.3 — function-handler closures, scoped per-script (NOT per-run).
 * Macros / tools / interceptors / etc. registered in run N continue to fire
 * after run N completes (e.g. at prompt-assembly time). The closures live
 * here keyed by `(scriptId, handlerId)` until script-unregister; the
 * matching parent-side wrapper (registered with the macro / tool / etc.
 * store on the parent) sends `RunHandlerRequest` IPC to the child each
 * time the host fires the handler.
 *
 * Mirrors the Phase 6 broadcast-handler registry shape — both have the
 * "captured closure outlives the originating run, scoped to the script"
 * lifecycle property. Distinct registries because the dispatch routes
 * differ (broadcasts use subId from the message; handlers use handlerId).
 */
type HandlerClosure = (...args: unknown[]) => unknown | Promise<unknown>;
const handlerClosures = new Map<string, Map<string, HandlerClosure>>();

function registerHandlerClosure(
  scriptId: string,
  handlerId: string,
  fn: HandlerClosure,
): void {
  let scriptHandlers = handlerClosures.get(scriptId);
  if (!scriptHandlers) {
    scriptHandlers = new Map();
    handlerClosures.set(scriptId, scriptHandlers);
  }
  scriptHandlers.set(handlerId, fn);
}

function unregisterHandlerClosure(scriptId: string, handlerId: string): void {
  const scriptHandlers = handlerClosures.get(scriptId);
  if (!scriptHandlers) return;
  scriptHandlers.delete(handlerId);
  if (scriptHandlers.size === 0) handlerClosures.delete(scriptId);
}

/**
 * Max time an async broadcast (`api.broadcast.on`) handler may run before the
 * child releases the parent's in-flight counter (audit C5-01). It does NOT
 * cancel the user's promise (the child can't) — it only fires the `-finished`
 * notice so a never-resolving handler can't pin its worker against eviction +
 * block hot-reload forever. Generous, because legitimate broadcast handlers
 * react to pub/sub events and should be quick.
 */
const BROADCAST_HANDLER_TIMEOUT_MS = 30_000;

function handleBroadcastFire(
  proc: SpindleBackendProcessContext,
  msg: BroadcastFireMessage,
): void {
  // #11 P5 inc3b — a quickjs broadcast handler closure lives in the VM (keyed by subId
  // in the engine's broadcast registry), NOT in broadcastHandlers. Route by presence.
  if (hasVmBroadcast(msg.scriptId, msg.subId)) {
    fireVmBroadcast(proc, msg);
    return;
  }
  const scriptHandlers = broadcastHandlers.get(msg.scriptId);
  const handler = scriptHandlers?.get(msg.subId);
  if (!handler) return; // late fire after clear/unsub — drop silently

  // Async-tracking opt-in (v0.26.4+): if the user's handler returns a
  // thenable, forward lifecycle notices to the parent so it can update
  // `executionStatusStore` (the sidebar dot) for the duration of the
  // awaited work. Sync handlers and sync-throwing handlers produce no
  // lifecycle messages — the indicator simply doesn't move for them.
  let result: unknown;
  try {
    result = (handler as (payload: unknown) => unknown)(msg.payload);
  } catch {
    // Mirror the bus's existing semantic: errors caught so one bad handler
    // can't break the others. Console capture (Phase 9) will eventually
    // surface these to the LumiScript console pane; for now they're silent.
    return;
  }

  if (result !== null && typeof result === 'object' && typeof (result as { then?: unknown }).then === 'function') {
    const startedAt = Date.now();
    try {
      send(proc, {
        type:     'broadcast-handler-started',
        scriptId: msg.scriptId,
        subId:    msg.subId,
        event:    msg.event,
      });
    } catch { /* channel down — best-effort */ }

    // Fire `broadcast-handler-finished` EXACTLY ONCE — on resolve, reject, OR
    // timeout (audit C5-01). The timeout is the fix: without it a never-
    // resolving handler never fires -finished, so the parent's
    // broadcastHandlerInFlight counter stays pinned forever (worker exempt from
    // eviction, hot-reload blocked). `settled` prevents a late resolve/reject
    // from double-decrementing the counter after a timeout already released it.
    let settled = false;
    const finish = (ok: boolean, error?: string): void => {
      if (settled) return;
      settled = true;
      const base = {
        type:       'broadcast-handler-finished' as const,
        scriptId:   msg.scriptId,
        subId:      msg.subId,
        event:      msg.event,
        durationMs: Date.now() - startedAt,
      };
      try {
        send(proc, ok
          ? { ...base, ok: true }
          : { ...base, ok: false, error: error ?? 'broadcast handler failed' });
      } catch { /* channel down — best-effort */ }
    };

    const timer = setTimeout(
      () => finish(false, `broadcast handler exceeded ${BROADCAST_HANDLER_TIMEOUT_MS / 1000}s timeout`),
      BROADCAST_HANDLER_TIMEOUT_MS,
    );

    void (result as Promise<unknown>).then(
      () => { clearTimeout(timer); finish(true); },
      (err: unknown) => { clearTimeout(timer); finish(false, err instanceof Error ? err.message : String(err)); },
    );
  }
}

function handleBroadcastClear(msg: BroadcastClearMessage): void {
  broadcastHandlers.delete(msg.scriptId);
  // #11 P5 inc3b — also drop the quickjs script's VM broadcast handler dups (parity:
  // broadcast subs are wiped at the start of each new run, unlike persistent handlers).
  disposeScriptVmBroadcast(msg.scriptId);
}

/**
 * Phase 9d.4.d — handle an `advanced-modal-dismissed` notice from the
 * parent. Routes to the api-proxy's module-scope state via the exported
 * `notifyAdvancedModalDismissed`, which flips the cached dismissed flag
 * + fans out to user-registered onDismiss listeners.
 *
 * Thin wrapper at this layer: child-entry only knows "parent says modal
 * X dismissed for reason Y"; the api-proxy module owns storage layout
 * + listener fan-out semantics.
 */
function handleAdvancedModalDismissed(proc: SpindleBackendProcessContext, msg: AdvancedModalDismissedNotice): void {
  // #11 P4b Inc 3c-2b — a quickjs modal's dismissedRef + onDismiss listeners live in the VM, not in
  // api-proxy module scope. The notice carries no engineMode, so route by owner-registry membership.
  if (hasVmModal(msg.modalId)) { fireVmModalDismiss(proc, msg); return; }
  notifyAdvancedModalDismissed(msg.modalId, msg.reason);
}

/**
 * #11 P4b Inc 3c-2b — fan an advanced-modal-dismissed notice out to a quickjs modal's onDismiss
 * listeners. Mirrors `fireVmBroadcast`: find the script's proxy, fire each listener via
 * `fireHandlerInQuickJS` (runChain-serialized, errors swallowed so one bad listener can't break
 * dismissal, async-hang -> proc.fail). `notifyVmModalDismissed` first flips the in-VM dismissedRef
 * EAGERLY (so `handle.dismissed` reads true immediately + a late onDismiss takes the fast-path) and
 * returns the listener snapshot. The modal is dropped (dups disposed, registries cleared) only once
 * ALL fires settle — the dups must stay alive in vmHandlerHandles across the serialized fires.
 */
function fireVmModalDismiss(proc: SpindleBackendProcessContext, msg: AdvancedModalDismissedNotice): void {
  const info = notifyVmModalDismissed(msg.modalId, msg.reason);
  if (!info) return; // unknown / already-dropped modal — fires-once (notify cleared the owner)
  const { scriptId, handlerIds } = info;
  // notifyVmModalDismissed already removed the owner/listener membership (synchronous fires-once), so
  // dropVmModal must dispose the dups by the captured scriptId + handlerIds (the maps are now empty).
  if (handlerIds.length === 0) { dropVmModal(msg.modalId, scriptId, handlerIds); return; }
  let proxy: ProxyHandle | undefined;
  for (const entry of activeProxies.values()) {
    if (entry.scriptId === scriptId) { proxy = entry.proxy; break; }
  }
  if (!proxy) { dropVmModal(msg.modalId, scriptId, handlerIds); return; } // no proxy — can't fire; still drop the dups
  const theProxy = proxy;
  proc.heartbeat();
  const synthRunId = `advModalDismiss:${msg.modalId}`;
  const capturedConsole = buildChildCapturedConsole(proc, synthRunId, scriptId);
  const dispatchers = makeHandlerDispatchers(proc, synthRunId, scriptId, 'latest');
  const fires = handlerIds.map((handlerId) =>
    raceWithTimeout(
      fireHandlerInQuickJS({
        scriptId,
        handlerId,
        args:                         [msg.reason],
        timeoutMs:                    BROADCAST_HANDLER_TIMEOUT_MS,
        dispatch:                     theProxy.dispatch,
        dispatchOnHandle:             theProxy.dispatchOnHandle,
        console:                      capturedConsole,
        serializeError,
        allowDangerous:               false,
        dispatchRegisterHandler:        dispatchers.dispatchRegisterHandler,
        dispatchUnregisterHandler:      dispatchers.dispatchUnregisterHandler,
        dispatchUnregisterHandlerNamed: dispatchers.dispatchUnregisterHandlerNamed,
        dispatchBroadcastSubscribe:     dispatchers.dispatchBroadcastSubscribe,
        dispatchBroadcastUnsubscribe: dispatchers.dispatchBroadcastUnsubscribe,
      }),
      BROADCAST_HANDLER_TIMEOUT_MS,
      () => new ScriptTimeoutError(`advanced-modal onDismiss handler ${handlerId} (modal ${msg.modalId}) exceeded ${BROADCAST_HANDLER_TIMEOUT_MS / 1000}s timeout`),
    ).catch((err: unknown) => {
      // Swallow listener errors (dismissal parity). On the async-hang ScriptTimeoutError, kill the
      // worker so the wedged runChain slot is cleared by respawn.
      if (err instanceof Error && err.name === 'ScriptTimeoutError') {
        noteQuickjsTimeout(); // #11 observability — quickjs fire timeout (onDismiss → child respawn)
        proc.fail(`script-runner: async-timeout firing advanced-modal onDismiss handler ${handlerId} (scriptId=${scriptId}); terminating to clear the wedged engine runChain`);
      }
    }),
  );
  // Drop the modal once ALL listeners have settled — fireHandlerInQuickJS re-fetches the dup AFTER
  // its runChain await, so the dups must outlive every (serialized) fire.
  void Promise.allSettled(fires).then(() => { dropVmModal(msg.modalId, scriptId, handlerIds); });
}

/**
 * Phase 9d.4.e-2-b — handle a `FloatWidgetPositionNotice` from the parent.
 * Routes to the api-proxy's module-scope state via `notifyFloatWidgetPosition`,
 * which updates the cached `positionCache` so the proxy's sync
 * `handle.getPosition()` returns the FE-driven coordinates.
 *
 * Same thin-wrapper shape as `handleAdvancedModalDismissed`: child-entry
 * only knows "parent says widget X is now at (x, y)"; api-proxy owns the
 * storage layout.
 */
function handleFloatWidgetPosition(msg: FloatWidgetPositionNotice): void {
  // #11 P4b Inc 3c-2a — a quickjs float widget's positionCache lives in the VM, not in api-proxy
  // module scope. The notice carries no engineMode, so route by owner-registry membership.
  if (hasVmWidget(msg.widgetId)) { notifyVmWidgetPosition(msg.widgetId, msg.x, msg.y); return; }
  notifyFloatWidgetPosition(msg.widgetId, msg.x, msg.y);
}

/**
 * Race a promise against a timeout, clearing the timeout timer once the promise
 * settles (win OR loss) so the timer + its closure don't linger until the
 * deadline (audit C7-02 / C8-01 / C8-02). `Promise.race` does NOT cancel the
 * loser, so a bare `setTimeout(reject)` kept firing at `timeoutMs` on every
 * successful run / handler-fire — a per-fire timer + closure leak.
 */
async function raceWithTimeout<T>(
  op: Promise<T>,
  timeoutMs: number,
  makeTimeoutError: () => Error,
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(makeTimeoutError()), timeoutMs);
  });
  try {
    return await Promise.race([op, timeoutPromise]);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

/**
 * Phase 9d.3 — fire a previously-registered function-handler. The IPC
 * carries a fresh per-fire `runId` so any api.* calls the handler makes
 * land on the parent's per-fire ephemeral activeRun (built from the
 * script's current permissions / activeContext / userId).
 *
 * The handler closure runs inside `runIdContext.run(req.runId, …)` so
 * the proxy's `dispatch` reads the per-fire runId via AsyncLocalStorage.
 * Without this override, the dispatch would use the closure's
 * originally-captured `ctx.runId` from the registering run, which has
 * since been cleaned up parent-side.
 *
 * Errors caught + serialized; never re-thrown.
 */
async function handleRunHandlerRequest(
  proc: SpindleBackendProcessContext,
  req:  RunHandlerRequest,
): Promise<void> {
  const startedAt = Date.now();

  // #11 P5 — a quickjs handler closure lives IN the VM (the dup'd fn handle in the
  // engine's per-script registry), NOT in handlerClosures. Route by registry presence
  // (no engineMode needed on the wire — a handler's engine is where its closure lives).
  if (hasVmHandler(req.scriptId, req.handlerId)) {
    await fireVmHandler(proc, req, startedAt);
    return;
  }

  const scriptHandlers = handlerClosures.get(req.scriptId);
  const handler = scriptHandlers?.get(req.handlerId);

  if (!handler) {
    // Handler dropped between register and fire — common race when a
    // script is reloaded mid-prompt-assembly. Surface a clean error.
    const result: HandlerResult = {
      type:       'handler-result',
      runId:      req.runId,
      ok:         false,
      error: {
        name:    'HandlerNotFoundError',
        message: `Handler ${req.kind}/${req.handlerId} not registered for script ${req.scriptId} (likely cleaned up before fire reached child)`,
      },
      durationMs: Date.now() - startedAt,
    };
    proc.send(result);
    return;
  }

  // Refresh heartbeat — the handler may run for several seconds.
  proc.heartbeat();

  let value: unknown = undefined;
  let ok = true;
  let error: SerializedError | undefined;
  try {
    // Race against handler timeout (mirror script-run timeout race).
    // Two nested AsyncLocalStorage scopes:
    //   1. liveContextStore — fresh per-fire chatId / characterId from
    //      the parent's binding.ts. Sync getters (api.chat.getChatId)
    //      read from this so long-lived handlers see live state, not
    //      the script-load snapshot.
    //   2. runIdContext — fresh per-fire runId so the proxy's dispatch
    //      routes api.* calls through the ephemeral activeRun the parent
    //      registered for this fire.
    value = await raceWithTimeout(
      liveContextStore.run(
        { chatId: req.chatIdAtFire, characterId: req.characterIdAtFire },
        () => runIdContext.run(req.runId, () => Promise.resolve(handler(...req.args))),
      ),
      req.timeoutMs,
      () => new Error(`Handler ${req.kind}/${req.handlerId} exceeded ${req.timeoutMs / 1000}s timeout`),
    );
  } catch (err) {
    ok = false;
    error = serializeError(err);
  }

  const result: HandlerResult = {
    type:       'handler-result',
    runId:      req.runId,
    ok,
    durationMs: Date.now() - startedAt,
  };
  if (ok)    result.value = value;
  if (error) result.error = error;
  proc.send(result);
}

/**
 * #11 P5 — build the register/unregister-handler IPC dispatchers for an in-VM
 * registration (during a body-run OR a handler fire). The closure stays in the VM
 * registry; only the function-less IPC crosses, so the parent wires the canonical
 * wrapper identically to the asyncfn path (Boundary #1 unchanged).
 *
 * SECURITY: a VM-supplied `meta` is spread FIRST so the host-stamped trust-critical
 * fields (type/kind/runId/scriptId/handlerId/hasHandler) always win — a crafted meta
 * cannot forge another script's registration.
 */
function makeHandlerDispatchers(
  proc:        SpindleBackendProcessContext,
  runId:       string,
  scriptId:    string,
  // For a child-local fire (timer / broadcast / modal-dismiss) the runId is synthetic and was never
  // registered on the host, so a stream opened from that callback can't resolve by direct runId lookup.
  // Passing 'latest' lets the host resolve the stream against the script's current body run — matching
  // how the legacy engine routes a stream opened from a fire. Omitted (undefined) for a live host run.
  runIdSource?: 'context' | 'latest' | 'ctx',
): {
  dispatchRegisterHandler: (kind: string, handlerId: string, meta: unknown) => void;
  dispatchUnregisterHandler: (kind: string, handlerId: string) => void;
  dispatchUnregisterHandlerNamed: (kind: string, name: string) => void;
  dispatchBroadcastSubscribe: (subId: string, event: string) => void;
  dispatchBroadcastUnsubscribe: (subId: string) => void;
  dispatchStreamStart: (requestId: string, method: string, args: unknown[], hasSignal: boolean) => void;
  dispatchStreamCancel: (requestId: string) => void;
} {
  return {
    dispatchRegisterHandler: (kind, handlerId, meta) => {
      const msg = {
        ...(meta && typeof meta === 'object' ? meta : {}),
        type:       'register-handler',
        kind,
        runId,
        scriptId,
        handlerId,
        hasHandler: true,
      } as unknown as RegisterHandler;
      proc.send(msg);
    },
    dispatchUnregisterHandler: (kind, handlerId) => {
      const msg = { type: 'unregister-handler', kind, scriptId, handlerId } as unknown as UnregisterHandler;
      proc.send(msg);
    },
    // P5 inc3c — macro/tool unregister is BY NAME (the host's macro/tool stores resolve
    // by (scriptId, name), not handlerId). Same IPC type, name field instead of handlerId.
    dispatchUnregisterHandlerNamed: (kind, name) => {
      const msg = { type: 'unregister-handler', kind, scriptId, name } as unknown as UnregisterHandler;
      proc.send(msg);
    },
    // P5 inc3b — broadcast.on uses the separate broadcast-subscribe / -unsubscribe IPC
    // (keyed by subId, no kind/handlerId/runId/hasHandler). The closure lives in the VM
    // registry; the parent fires it via broadcast-fire. Boundary #1 unchanged.
    dispatchBroadcastSubscribe: (subId, event) => {
      proc.send({ type: 'broadcast-subscribe', scriptId, subId, event } as BroadcastSubscribeMessage);
    },
    dispatchBroadcastUnsubscribe: (subId) => {
      proc.send({ type: 'broadcast-unsubscribe', scriptId, subId } as BroadcastUnsubscribeMessage);
    },
    // generateStream — the in-VM generator owns the chunk queue (vmStreams); only the request + cancel
    // envelopes cross to the host, carrying this run's runId/scriptId (+ runIdSource so a fire-opened
    // stream can fall back to the script's body run — see the runIdSource param note above).
    dispatchStreamStart: (requestId, method, args, hasSignal) => {
      proc.send({ type: 'stream-request', requestId, runId, scriptId, method, args, hasSignal, _runIdSource: runIdSource } as StreamRequest);
    },
    dispatchStreamCancel: (requestId) => {
      proc.send({ type: 'stream-cancel', requestId } as StreamCancelRequest);
    },
  };
}

/**
 * #11 P5 — fire a handler whose closure lives in the QuickJS VM. Dispatches the
 * handler's api.* calls through a PERSISTED proxy for this script (any run's — the
 * runId is overridden to the fire's runId via runIdContext, and api-responses route
 * by requestId broadcast across all proxies). Wrapped in the SAME liveContextStore +
 * runIdContext + raceWithTimeout as the asyncfn path so at-fire chat/character context
 * and the async-hang guard behave identically. The dup'd fn handle stays in the
 * engine registry (disposed on unregister), not here.
 */
async function fireVmHandler(
  proc:      SpindleBackendProcessContext,
  req:       RunHandlerRequest,
  startedAt: number,
): Promise<void> {
  // A persisted proxy for this script provides dispatch/dispatchOnHandle. Proxies are
  // kept across runs for fires (see runOne's activeProxies note); any one for this
  // script works — they share scriptId and the runId is overridden per-fire.
  let proxy: ProxyHandle | undefined;
  for (const entry of activeProxies.values()) {
    if (entry.scriptId === req.scriptId) { proxy = entry.proxy; break; }
  }

  proc.heartbeat();
  let value: unknown = undefined;
  let ok = true;
  let error: SerializedError | undefined;
  try {
    if (!proxy) {
      throw new Error(`api-proxy host: no active proxy for script ${req.scriptId} firing handler ${req.handlerId}`);
    }
    const theProxy = proxy;
    const capturedConsole = buildChildCapturedConsole(proc, req.runId, req.scriptId);
    // A handler may itself register/unregister handlers (api.commands.onInvoked from
    // inside a fire) — thread the same IPC dispatchers as the body-run so those reach
    // the parent (else the new registration stores a dup the parent never wires).
    const dispatchers = makeHandlerDispatchers(proc, req.runId, req.scriptId);
    value = await raceWithTimeout(
      liveContextStore.run(
        { chatId: req.chatIdAtFire, characterId: req.characterIdAtFire },
        () => runIdContext.run(req.runId, () => fireHandlerInQuickJS({
          scriptId:                  req.scriptId,
          handlerId:                 req.handlerId,
          args:                      req.args,
          timeoutMs:                 req.timeoutMs,
          dispatch:                  theProxy.dispatch,
          dispatchOnHandle:          theProxy.dispatchOnHandle,
          console:                   capturedConsole,
          serializeError,
          // #11 P7-F3 — the fired script's identity, so the quickjs fire re-seeds globalThis.script
          // (no residue). RunHandlerRequest now carries scriptName/scriptType.
          script:                    { id: req.scriptId, name: req.scriptName, type: req.scriptType },
          // Thread the script's allowDangerous (RunHandlerRequest now carries it) so an
          // allowDangerous script's fired handler can fetch under quickjs, matching asyncfn (whose
          // closure baked in the right fetch at body-run time). hostFetch is the captured host fetch,
          // granted only when allowDangerous — same gate as the body-run (child-entry runOne).
          allowDangerous:            req.allowDangerous,
          hostFetch:                 req.allowDangerous ? _hostFetch : undefined,
          // #11 P7-F4 (Tier 0) — the invoking script (api.tools.invoke path only) so the fire can
          // fast-reject a self-reentrant invoke instead of deadlocking on the caller's runChain.
          callerScriptId:            req.callerScriptId,
          dispatchRegisterHandler:        dispatchers.dispatchRegisterHandler,
          dispatchUnregisterHandler:      dispatchers.dispatchUnregisterHandler,
          dispatchUnregisterHandlerNamed: dispatchers.dispatchUnregisterHandlerNamed,
        })),
      ),
      req.timeoutMs,
      // ScriptTimeoutError so the proc.fail gate below fires: an ASYNC-hung handler
      // (awaiting a never-settling api call) leaves fireHandlerInQuickJS parked on the
      // shared runChain slot (the interrupt only catches SYNC loops), wedging every
      // later run/fire on this child. Killing + respawning the worker is the only
      // rescue (parity with the body-run's async-timeout posture).
      () => new ScriptTimeoutError(`Handler ${req.kind}/${req.handlerId} exceeded ${req.timeoutMs / 1000}s timeout`),
    );
  } catch (err) {
    ok = false;
    error = serializeError(err);
    // #11 observability — this is the quickjs-only fire path (routed by hasVmHandler). Count a genuine
    // engine fire-error, but EXCLUDE the two expected/tracked-elsewhere classes: a timeout (counted at
    // the proc.fail gate below) and a self-invoke reentrant reject (counted at its throw site + surfaced
    // to the caller as an ordinary rejection, not an engine fault).
    if (error.name !== 'ScriptTimeoutError' && error.name !== 'ReentrantToolInvokeError') noteQuickjsFireError();
  }

  const result: HandlerResult = {
    type:       'handler-result',
    runId:      req.runId,
    ok,
    durationMs: Date.now() - startedAt,
  };
  if (ok)    result.value = value;
  if (error) result.error = error;
  proc.send(result);

  // Async-hang rescue (see the ScriptTimeoutError above): kill the worker so the
  // wedged runChain slot is cleared by respawn. Same posture as runOne's body-run.
  if (!ok && error?.name === 'ScriptTimeoutError') {
    noteQuickjsTimeout(); // #11 observability — quickjs fire timeout (→ child respawn)
    proc.fail(
      `script-runner: async-timeout firing handler ${req.kind}/${req.handlerId} ` +
      `(scriptId=${req.scriptId}, runId=${req.runId}); terminating to clear the wedged engine runChain`,
    );
  }
}

/**
 * #11 P5 inc3b — fire a broadcast handler whose closure lives in the QuickJS VM.
 * Unlike a RunHandlerRequest fire this is FIRE-AND-FORGET (the bus expects no result)
 * and UNWRAPPED — no at-fire chat/character context and no per-fire runId, so the
 * handler's api.* calls route through the proxy's originating-run id, parity with the
 * asyncfn broadcast path (handleBroadcastFire does not wrap in liveContext/runIdContext).
 * Handler errors are SWALLOWED (one bad subscriber can't break the bus). The async-hang
 * guard still applies: a never-settling api call would strand the shared runChain, so on
 * timeout we proc.fail (same posture as the body-run). Nested registrations from a
 * broadcast handler are rare; their IPC runId is synthetic (no originating run here).
 */
function fireVmBroadcast(proc: SpindleBackendProcessContext, msg: BroadcastFireMessage): void {
  let proxy: ProxyHandle | undefined;
  for (const entry of activeProxies.values()) {
    if (entry.scriptId === msg.scriptId) { proxy = entry.proxy; break; }
  }
  if (!proxy) return; // no proxy for the script — drop (like the broadcastHandlers miss)
  const theProxy = proxy;
  proc.heartbeat();
  const synthRunId = `broadcast:${msg.subId}`;
  const capturedConsole = buildChildCapturedConsole(proc, synthRunId, msg.scriptId);
  const dispatchers = makeHandlerDispatchers(proc, synthRunId, msg.scriptId, 'latest');
  void raceWithTimeout(
    fireHandlerInQuickJS({
      scriptId:                     msg.scriptId,
      handlerId:                    msg.subId,
      args:                         [msg.payload],
      timeoutMs:                    BROADCAST_HANDLER_TIMEOUT_MS,
      dispatch:                     theProxy.dispatch,
      dispatchOnHandle:             theProxy.dispatchOnHandle,
      console:                      capturedConsole,
      serializeError,
      allowDangerous:               false,
      dispatchRegisterHandler:        dispatchers.dispatchRegisterHandler,
      dispatchUnregisterHandler:      dispatchers.dispatchUnregisterHandler,
      dispatchUnregisterHandlerNamed: dispatchers.dispatchUnregisterHandlerNamed,
      dispatchBroadcastSubscribe:     dispatchers.dispatchBroadcastSubscribe,
      dispatchBroadcastUnsubscribe: dispatchers.dispatchBroadcastUnsubscribe,
    }),
    BROADCAST_HANDLER_TIMEOUT_MS,
    () => new ScriptTimeoutError(`Broadcast handler ${msg.subId} (event ${msg.event}) exceeded ${BROADCAST_HANDLER_TIMEOUT_MS / 1000}s timeout`),
  ).catch((err: unknown) => {
    // Swallow handler errors (bus parity). On the async-hang ScriptTimeoutError, kill
    // the worker so the wedged runChain slot is cleared by respawn.
    if (err instanceof Error && err.name === 'ScriptTimeoutError') {
      noteQuickjsTimeout(); // #11 observability — quickjs fire timeout (broadcast → child respawn)
      proc.fail(`script-runner: async-timeout firing broadcast handler ${msg.subId} (scriptId=${msg.scriptId}); terminating to clear the wedged engine runChain`);
    }
  });
}

// ─── #11 P5-2: child-side timer store + host-scheduled fire ────────────────────
//
// A quickjs timer is entirely CHILD-LOCAL: the in-VM setTimeout/setInterval registers the callback
// (dup'd into the VM handler registry by a VM-generated timerId) and calls the injected scheduler; here
// we arm a real Bun timer whose expiry fires the callback via fireHandlerInQuickJS on its OWN runChain
// entry (macrotask parity — setTimeout(fn,0) runs AFTER the current run; no F4 deadlock since a timer
// fire carries no callerScriptId). One-shots delete themselves from the store BEFORE firing (so the id
// is free for a re-schedule inside the fire) and dispose their VM dup AFTER (so a fired setTimeout does
// not pin the context until teardown); intervals re-arm implicitly and keep their dup until
// clearInterval/teardown. All of a script's timers are cancelled at teardown (clearAllTimersForScript).
interface VmTimerEntry { handle: ReturnType<typeof setInterval>; repeat: boolean }
const vmTimerStore = new Map<string, Map<string, VmTimerEntry>>();

function scheduleVmTimer(proc: SpindleBackendProcessContext, scriptId: string, timerId: string, ms: number, repeat: boolean): void {
  let perScript = vmTimerStore.get(scriptId);
  if (!perScript) { perScript = new Map(); vmTimerStore.set(scriptId, perScript); }
  const prev = perScript.get(timerId); // a re-schedule under the same id replaces the old Bun handle
  if (prev) { clearInterval(prev.handle); clearTimeout(prev.handle); }
  if (repeat) {
    const handle = setInterval(() => { fireVmTimer(proc, scriptId, timerId, false); }, ms);
    perScript.set(timerId, { handle, repeat: true });
  } else {
    const handle = setTimeout(() => {
      const ps = vmTimerStore.get(scriptId); // drop BEFORE firing (id free for a re-schedule in the fire)
      ps?.delete(timerId);
      if (ps && ps.size === 0) vmTimerStore.delete(scriptId);
      fireVmTimer(proc, scriptId, timerId, true);
    }, ms);
    perScript.set(timerId, { handle, repeat: false });
  }
}

function clearVmTimer(scriptId: string, timerId: string): void {
  const perScript = vmTimerStore.get(scriptId);
  if (!perScript) return;
  const entry = perScript.get(timerId);
  if (!entry) return;
  clearInterval(entry.handle); clearTimeout(entry.handle);
  perScript.delete(timerId);
  if (perScript.size === 0) vmTimerStore.delete(scriptId);
}

/**
 * #11 P5-2 / P5-3 — cancel every Bun timer for a script (teardown / reload / disable / delete). The VM
 * callback dups are separately swept by disposeScriptVmHandlers (via disposeContextForScript); this
 * cancels the child-side Bun handles so a leaked interval can't keep firing after the script is gone —
 * the quickjs half of the Finding-4 leak fix.
 */
function clearAllTimersForScript(scriptId: string): void {
  const perScript = vmTimerStore.get(scriptId);
  if (!perScript) return;
  for (const { handle } of perScript.values()) { clearInterval(handle); clearTimeout(handle); }
  vmTimerStore.delete(scriptId);
}

/**
 * Fire a VM timer callback. Mirrors fireVmBroadcast (fire-and-forget, errors swallowed, async-hang →
 * proc.fail); `oneShot` disposes the callback dup after the fire settles so a fired setTimeout doesn't
 * linger in vmHandlerHandles (pinning the context) until teardown.
 */
function fireVmTimer(proc: SpindleBackendProcessContext, scriptId: string, timerId: string, oneShot: boolean): void {
  let proxy: ProxyHandle | undefined;
  for (const entry of activeProxies.values()) {
    if (entry.scriptId === scriptId) { proxy = entry.proxy; break; }
  }
  if (!proxy) { if (oneShot) disposeVmHandler(scriptId, timerId); return; } // torn down between arm + fire
  const theProxy = proxy;
  proc.heartbeat();
  const synthRunId = `vmTimer:${timerId}`;
  const capturedConsole = buildChildCapturedConsole(proc, synthRunId, scriptId);
  const dispatchers = makeHandlerDispatchers(proc, synthRunId, scriptId, 'latest');
  void raceWithTimeout(
    fireHandlerInQuickJS({
      scriptId,
      handlerId:        timerId,
      args:             [],
      timeoutMs:        BROADCAST_HANDLER_TIMEOUT_MS,
      dispatch:         theProxy.dispatch,
      dispatchOnHandle: theProxy.dispatchOnHandle,
      console:          capturedConsole,
      serializeError,
      allowDangerous:   false, // timer callbacks use api.utils.http, not bare fetch (broadcast parity)
      ...dispatchers,
    }),
    BROADCAST_HANDLER_TIMEOUT_MS,
    () => new ScriptTimeoutError(`Timer ${timerId} (script ${scriptId}) exceeded ${BROADCAST_HANDLER_TIMEOUT_MS / 1000}s timeout`),
  ).catch((err: unknown) => {
    // Swallow handler errors (fire-and-forget parity). On the async-hang ScriptTimeoutError, kill the
    // worker so the wedged runChain slot is cleared by respawn (mirrors fireVmBroadcast).
    if (err instanceof Error && err.name === 'ScriptTimeoutError') {
      noteQuickjsTimeout(); // #11 observability — quickjs fire timeout (timer → child respawn)
      proc.fail(`script-runner: async-timeout firing timer ${timerId} (scriptId=${scriptId}); terminating to clear the wedged engine runChain`);
    }
  }).finally(() => { if (oneShot) disposeVmHandler(scriptId, timerId); });
}

// ─── #11 P5-3: asyncfn user-timer tracking (the Finding-4 leak fix for the AsyncFunction engine) ──────
//
// The asyncfn engine runs user code in the child's own global scope, so a user setTimeout/setInterval
// goes through the monkeypatched globalThis.setTimeout/setInterval (installSandboxLockdown). Pre-P5-3
// those wrappers tracked NOTHING, so a leaked interval survived reload/disable and kept firing the old
// closure (the exact field-test Finding-4). Track each user timer per-script + cancel them all on
// unregister. Attribution = the run active when the timer is created, resolved from runIdContext (the
// body-run ALS) via activeProxies. Timers created OUTSIDE a user run (LumiScript's own heartbeat /
// raceWithTimeout) resolve to no scriptId → NOT tracked (correct — not user timers). Timers set inside a
// handler-fire / broadcast handler (a synthetic runId not in activeProxies) also resolve to no scriptId
// → not tracked (a documented minor gap; long-lived timers live in body/trigger runs, which ARE covered).
// The quickjs half of this fix is clearAllTimersForScript above.
const asyncfnTimerStore = new Map<string, Set<ReturnType<typeof setTimeout>>>();
/** The scriptId of the user run currently executing (body/trigger run), or undefined outside one. */
function currentUserScriptId(): string | undefined {
  const runId = runIdContext.getStore();
  return runId === undefined ? undefined : activeProxies.get(runId)?.scriptId;
}
function trackAsyncfnTimer(scriptId: string, id: ReturnType<typeof setTimeout>): void {
  let set = asyncfnTimerStore.get(scriptId);
  if (!set) { set = new Set(); asyncfnTimerStore.set(scriptId, set); }
  set.add(id);
}
function untrackAsyncfnTimer(scriptId: string, id: ReturnType<typeof setTimeout>): void {
  const set = asyncfnTimerStore.get(scriptId);
  if (!set) return;
  set.delete(id);
  if (set.size === 0) asyncfnTimerStore.delete(scriptId);
}
/** Cancel every tracked asyncfn user timer for a script (teardown / reload / disable / delete). */
function clearAllAsyncfnTimersForScript(scriptId: string): void {
  const set = asyncfnTimerStore.get(scriptId);
  if (!set) return;
  // Snapshot: the patched clearTimeout/clearInterval untrack from this same set, so iterating a copy
  // avoids mutating the set mid-iteration. (At teardown there is no active run, so the patched untrack
  // is a no-op, but the snapshot keeps this correct regardless of the calling context.)
  for (const id of [...set]) { clearTimeout(id); clearInterval(id); }
  asyncfnTimerStore.delete(scriptId);
}

/**
 * Phase 9d.3 — drop all per-script state when a script is unregistered
 * (extension disable, script delete, etc.). Mirrors the existing
 * `clearByScriptId` semantics on the parent's macro / tool / etc. stores.
 *
 * Cleans up: handler closures, broadcast handlers, AND any active proxies
 * that belonged to runs of this script. The proxies hold per-script
 * Handlebars state, pending request maps, etc. — dropping them releases
 * memory accumulated across runs.
 */
function handleScriptUnregister(proc: SpindleBackendProcessContext, msg: ScriptUnregisterMessage): void {
  handlerClosures.delete(msg.scriptId);
  broadcastHandlers.delete(msg.scriptId);
  // #11 P5 — dispose this script's dup'd in-VM handler fn handles (quickjs engine).
  // #11 P7-2 — under contextModel='per-script', ALSO dispose the script's whole
  // QuickJSContext, UNLESS this is a reload (reason='reload' keeps the context so
  // globalThis + module captures survive — see ScriptUnregisterMessage.reason). The
  // default (disable / delete / omitted reason) disposes it, preventing an unbounded
  // context leak across create/delete churn. No-op beyond the handle sweep under 'shared'.
  disposeContextForScript(msg.scriptId, msg.reason !== 'reload');
  // #11 P5-2 — cancel this script's child-side Bun timers (setTimeout/setInterval). disposeContextForScript
  // above swept the callback DUPS (via disposeScriptVmHandlers); this stops the armed Bun timers so a
  // leaked interval can't keep firing after disable/delete/reload — the quickjs half of the Finding-4 fix.
  clearAllTimersForScript(msg.scriptId);
  // #11 P5-3 — the asyncfn half: cancel this script's tracked user setTimeout/setInterval. Together with
  // clearAllTimersForScript this closes Finding-4 on BOTH engines (a leaked interval surviving a reload).
  clearAllAsyncfnTimersForScript(msg.scriptId);
  // #11 P5-4 — close this script's open in-VM generateStream streams: the engine wakes any parked
  // consumer with an aborted-end + drops the cells; we tell the host to tear down each upstream so a
  // disable/delete/reload can't leak a stream cell + an in-flight generate request.
  for (const requestId of sweepVmStreamsForScript(msg.scriptId)) {
    proc.send({ type: 'stream-cancel', requestId } as StreamCancelRequest);
  }
  // audit C8-03 + C8-04 — prune the per-script rate-limit buckets so they don't
  // accumulate one entry per ever-seen scriptId across the child's lifetime.
  consoleRateState.delete(msg.scriptId);
  unhandledRejectionRateState.delete(msg.scriptId);
  // Drop only the proxies that belong to THIS script. Other scripts'
  // proxies (which may still be servicing in-flight runs or holding
  // post-run handler closures) stay intact.
  for (const [runId, entry] of activeProxies) {
    if (entry.scriptId === msg.scriptId) {
      entry.proxy.cleanup('script unregistered');
      activeProxies.delete(runId);
    }
  }
  // Phase 9f-1 — drop module-scope per-script state in api-proxy
  // (advancedModalState, floatWidgetState, domStableIdToElementId).
  // Without this, those tables would accumulate entries across the
  // child's lifetime as scripts come and go.
  clearScriptStateOnUnregister(msg.scriptId);
  // v1.0 — globalThis convention auto-cleanup. User scripts that opt into
  // the namespace `globalThis.__lumiscript_script_<scriptId>_*` get those
  // keys swept here when the script is unregistered (disable, delete,
  // or master-toggle-off cleanup). Scripts using arbitrary `globalThis`
  // keys are unaffected — their state continues to persist across
  // disable/re-enable cycles, matching the v0.x behaviour.
  //
  // Why this matters: prior to this sweep, a script that stored state
  // on `globalThis` (e.g. an in-flight-tracking flag, a cache, a counter)
  // would carry that state across disable + re-enable, leading to
  // confusing stale-state bugs (canonical example: tracker's
  // `__lumiscript_tracker_rerun_inflight` flag stuck "true" after a
  // mid-flight disable, breaking the rerun button on re-enable).
  //
  // Convention recommendation in user-facing docs; this is forward-
  // compatible with a future `api.scriptStorage` API that would use the
  // same prefix internally for proper auto-scoped per-script state.
  const scriptStatePrefix = `__lumiscript_script_${msg.scriptId}_`;
  const globalKeys = Object.keys(globalThis as Record<string, unknown>);
  for (const key of globalKeys) {
    if (key.startsWith(scriptStatePrefix)) {
      delete (globalThis as Record<string, unknown>)[key];
    }
  }
}

// ─── Internal helpers ───────────────────────────────────────────────────────

function send(
  proc: SpindleBackendProcessContext,
  msg: ChildToParentMessage,
): void {
  proc.send(msg);
}

/**
 * Phase 9a — build a `console`-shaped object whose log/warn/error/info
 * methods serialize their args, package a `ConsoleEntry` (matching the
 * canonical in-process shape from `executor.ts:buildCapturedConsole`),
 * and emit a `ConsoleEntryNotice` IPC up to the parent. The parent's
 * dispatcher routes the notice to the run's `onConsole` callback, which
 * forwards through the same `console_entry` frontend message the in-
 * process executor uses — the LumiScript console panel can't tell child-
 * runtime entries apart from in-process ones.
 *
 * Closes over `runId` + `scriptId` so a console call from a long-tail
 * promise that resolves AFTER run completion still tags the right run.
 * Parent-side lookup of a now-completed run drops the entry silently
 * (matches in-process behaviour for the same edge case).
 *
 * `success` and `separator` types from `ConsoleEntryType` are deliberately
 * NOT bound — neither is reachable from user-script `console.*` calls
 * (matches `buildCapturedConsole` parity exactly).
 */
function buildChildCapturedConsole(
  proc: SpindleBackendProcessContext,
  runId: string,
  scriptId: string,
): Record<string, (...args: unknown[]) => void> {
  const makeHandler = (type: ConsoleEntryType) =>
    (...args: unknown[]) => {
      // Rate-gate FIRST (audit C8-03) so a tight `while(true) console.log()`
      // loop can't flood the console-entry IPC + parent dispatch + backend log.
      // Dropping before serialization also skips the per-entry arg-serialize cost.
      const { emit, summary } = consoleRateGate(scriptId, Date.now());
      if (summary !== null) {
        try {
          proc.send({
            type:     'console-entry',
            runId,
            scriptId,
            entry: { timestamp: new Date().toLocaleTimeString(), type: 'warn', message: `[lumiscript] ${summary}.` },
          });
        } catch { /* channel down — drop */ }
      }
      if (!emit) return;
      const message = args.map(serializeConsoleArg).join(' ');
      const entry: ConsoleEntry = {
        timestamp: new Date().toLocaleTimeString(),
        type,
        message,
      };
      const notice: ConsoleEntryNotice = {
        type:     'console-entry',
        runId,
        scriptId,
        entry,
      };
      try { proc.send(notice); } catch { /* channel down — drop */ }
    };

  return {
    log:   makeHandler('log'),
    warn:  makeHandler('warn'),
    error: makeHandler('error'),
    info:  makeHandler('info'),
  };
}

// ── Console-entry rate limit (audit C8-03) ──────────────────────────────────
// Cap console-entry IPC per scriptId per window — generous for legitimate
// logging, bounded against a runaway loop. Mirrors the unhandled-rejection
// token bucket below. The state map is pruned in handleScriptUnregister.
const CONSOLE_ENTRY_THRESHOLD = 500;
const CONSOLE_ENTRY_WINDOW_MS = 5_000;
interface ConsoleRateState { windowStartMs: number; count: number; suppressed: number; }
const consoleRateState = new Map<string, ConsoleRateState>();

/**
 * Per-script console-entry gate. Returns whether to emit this entry, plus a
 * one-time `N suppressed` summary string when a window that dropped entries
 * rolls over (so the user learns their logging was throttled).
 */
function consoleRateGate(scriptId: string, now: number): { emit: boolean; summary: string | null } {
  const state = consoleRateState.get(scriptId);
  if (state === undefined) {
    consoleRateState.set(scriptId, { windowStartMs: now, count: 1, suppressed: 0 });
    return { emit: true, summary: null };
  }
  if (now - state.windowStartMs > CONSOLE_ENTRY_WINDOW_MS) {
    const summary = state.suppressed > 0
      ? `${state.suppressed} console ${state.suppressed === 1 ? 'entry was' : 'entries were'} suppressed ` +
        `(rate limit: ${CONSOLE_ENTRY_THRESHOLD} per ${CONSOLE_ENTRY_WINDOW_MS / 1000}s)`
      : null;
    state.windowStartMs = now;
    state.count = 1;
    state.suppressed = 0;
    return { emit: true, summary };
  }
  if (state.count < CONSOLE_ENTRY_THRESHOLD) {
    state.count += 1;
    return { emit: true, summary: null };
  }
  state.suppressed += 1;
  return { emit: false, summary: null };
}

/**
 * Route an `api-response` IPC arrival to the proxy that owns the
 * corresponding pending request. The runId on the wire isn't on the
 * response (the requestId is the only correlation key), so we walk the
 * active proxies and forward to whichever one has the requestId in its
 * pending-map.
 *
 * In Phase 3 there's only ever one active proxy at a time, so this is
 * trivially fast. The pattern generalizes if Phase 4+ ever runs scripts
 * concurrently (which it doesn't yet).
 */
function routeApiResponse(msg: ApiProxyResponse): void {
  for (const entry of activeProxies.values()) {
    entry.proxy.handleResponse(msg);
    // handleResponse silently drops requestIds it doesn't own, so
    // calling it on every active proxy is safe and the right one wins.
  }
}

/**
 * Same broadcast-to-all-active-proxies pattern as `routeApiResponse`, but
 * for the v1.0.0-rc.9 streaming-IPC envelope kinds. Each proxy's
 * `handleStreamChunk` / `handleStreamEnd` silently drops requestIds it
 * doesn't own; the right one wins.
 */
function routeStreamChunk(proc: SpindleBackendProcessContext, msg: StreamChunkMessage): void {
  // A quickjs (in-VM) stream owns its chunk queue in the engine; feed it there and stop. If the undrained
  // queue hit the cap, the engine ended the stream with an overflow error — tell the host to stop the
  // upstream. Non-quickjs requestIds fall through to the asyncfn proxy broadcast unchanged.
  if (hasVmStream(msg.requestId)) {
    if (pushVmStreamChunk(msg.requestId, msg.chunk)) {
      proc.send({ type: 'stream-cancel', requestId: msg.requestId } as StreamCancelRequest);
    }
    return;
  }
  for (const entry of activeProxies.values()) {
    entry.proxy.handleStreamChunk(msg);
  }
}
function routeStreamEnd(msg: StreamEndMessage): void {
  if (hasVmStream(msg.requestId)) {
    pushVmStreamEnd(msg.requestId, msg.ok, msg.error);
    return;
  }
  for (const entry of activeProxies.values()) {
    entry.proxy.handleStreamEnd(msg);
  }
}

/**
 * Convert a thrown value into a serializable error shape. Errors don't
 * survive structured-clone over IPC intact (the prototype chain and
 * non-enumerable fields like `stack` get stripped), so we capture
 * name/message/stack explicitly into a plain object.
 */
function serializeError(err: unknown): SerializedError {
  if (err instanceof Error) {
    return {
      name:    err.name || 'Error',
      message: err.message || String(err),
      stack:   err.stack,
    };
  }
  return { name: 'Error', message: String(err) };
}

/**
 * Execute one user-script run. Self-contained: any error caught here is
 * surfaced via `RunScriptResult { ok: false, error }` rather than thrown.
 *
 * The AsyncFunction sandbox exposed in Phase 2 has only the `data`
 * parameter (the trigger event payload). Phase 3 will extend the parameter
 * list to include the proxied `api`, `script` (with `script.require()`),
 * captured `console`, `z` (Zod), and the shadowed globals (`fetch`, `Bun`,
 * `process`) the existing in-process executor provides.
 */
async function runOne(
  proc: SpindleBackendProcessContext,
  req: RunScriptRequest,
): Promise<void> {
  const startedAt = Date.now();

  // Tell the parent which script we're about to run. Lets the parent
  // surface "script X timed out" in lifecycle errors when the host
  // SIGKILLs us on missed heartbeat.
  const runningNotice: ScriptRunningNotice = {
    type:       'script-running',
    runId:      req.runId,
    scriptId:   req.scriptId,
    scriptName: req.scriptName,
    startedAt,
  };
  send(proc, runningNotice);

  // Refresh the watchdog window before entering the user code. The idle
  // interval is 5s, but a script could legitimately run longer than that;
  // explicit refresh on each run-start gives the configured heartbeat
  // window (default 65s = scriptTimeoutMs + 5s) to actually elapse before
  // the host considers us hung.
  proc.heartbeat();

  let value: unknown = undefined;
  let ok = true;
  let error: SerializedError | undefined;
  // #11 observability — the RESOLVED engine for this run, hoisted to function scope so the
  // post-`finally` result-assembly (the shared catch + the timeout proc.fail below, both OUTSIDE
  // the try where engineMode is set) can attribute run errors / timeouts to the right engine.
  let engineMode: 'asyncfn' | 'quickjs' = 'asyncfn';
  // #11 P5-4 — refresh the QuickJS generateStream queue cap from the setting (threaded per run) so a
  // settings change takes effect on the next run's newly-opened streams. No-op for asyncfn runs.
  if (req.streamQueueCap !== undefined) setStreamQueueCap(req.streamQueueCap);

  // Build the proxy api for this run. Stash by runId so api-response IPC
  // arrivals can route to its pending-request map.
  //
  // Broadcast-handler register/unregister callbacks delegate to the
  // module-level `broadcastHandlers` map (per-script scope) — those
  // closures must outlive THIS run, so we can't store them on the
  // proxy itself (which gets cleaned up on run completion).
  const proxy = buildProxiedAPI({
    runId:              req.runId,
    scriptId:           req.scriptId,
    scriptName:         req.scriptName,
    scriptType:         req.scriptType,
    chatIdAtStart:      req.chatIdAtStart      ?? null,
    characterIdAtStart: req.characterIdAtStart ?? null,
    send:               (msg) => proc.send(msg),
    registerBroadcastHandler: (subId, handler) =>
      registerBroadcastHandler(req.scriptId, subId, handler),
    unregisterBroadcastHandler: (subId) =>
      unregisterBroadcastHandler(req.scriptId, subId),
    registerHandlerClosure: (handlerId, fn) =>
      registerHandlerClosure(req.scriptId, handlerId, fn),
    unregisterHandlerClosure: (handlerId) =>
      unregisterHandlerClosure(req.scriptId, handlerId),
    // Phase 9d.X — sync-array-read snapshots threaded from the parent's
    // RunScriptRequest. Default to empty arrays for older parents that
    // didn't supply them (forward-compat; current parent always supplies).
    toolsSnapshot:                 req.toolsSnapshot                 ?? [],
    macrosSnapshot:                req.macrosSnapshot                ?? [],
    macroInterceptorsSnapshot:     req.macroInterceptorsSnapshot     ?? [],
    chatInjectionsSnapshot:        req.chatInjectionsSnapshot        ?? [],
    chatContentProcessorsSnapshot: req.chatContentProcessorsSnapshot ?? [],
    worldInfoInterceptorsSnapshot: req.worldInfoInterceptorsSnapshot ?? [],
  });
  activeProxies.set(req.runId, { scriptId: req.scriptId, proxy });

  try {
    // Phase 9a sandbox: `api` + `data` + `script` + `__console`.
    // Parameter order matches the in-process executor's convention so a
    // future migration of in-process code into the child requires zero
    // body changes. The `const console = __console` prefix makes
    // `console.log(...)` in user code resolve to our captured handler
    // (parameter-shadowing the global `console` binding).
    //
    // Other globals (`z`, `fetch`, `Bun`, `process`) come in Phase 9b
    // when this child takes over the full executor responsibility.
    const capturedConsole = buildChildCapturedConsole(proc, req.runId, req.scriptId);

    // Phase 9c-gap-close: sandbox parameter list mirrors the canonical
    // in-process executor exactly (executor.ts:231-242). Without these
    // bindings (`z`, `fetch`, `Bun`, `process`), user scripts that
    // reference any of them as top-level identifiers fail with
    // `ReferenceError` in the child runtime. The shadowing semantics:
    //   - `z`: real zod, bundled into the child via `import * as z`.
    //   - `fetch`: real `globalThis.fetch` for allowDangerous scripts;
    //              throws otherwise (matching `buildSafeFetch` in
    //              executor.ts).
    //   - `Bun`: always undefined — direct Bun API access is forbidden
    //           per the Lumiverse 519565 capability regex.
    //   - `process`: always undefined — same reason.
    const safeFetch: typeof globalThis.fetch = req.allowDangerous
      ? _hostFetch
      : ((() => {
          throw new Error(
            `"${req.scriptName}" must enable Allow Dangerous to use fetch directly. ` +
            `Use api.utils.http.* for HTTP requests.`,
          );
        }) as unknown as typeof globalThis.fetch);

    // #11 — engine selection. Default 'asyncfn' (the AsyncFunction path below);
    // 'quickjs' will route to the QuickJS-WASM isolate harness (P1 increment 2).
    // Per-run via RunScriptRequest.engineMode; the test seam overrides per-process
    // for the parity harness. Branch sits inside the try so a quickjs failure is
    // surfaced as RunScriptResult { ok:false } like any other body error.
    engineMode = testEngineMode ?? req.engineMode ?? 'asyncfn';
    // #11 cold-start-fallback — if quickjs is requested but the WASM module can't instantiate on this
    // platform, DEGRADE this run to the AsyncFunction engine instead of hard-failing (there is no other
    // isolation layer, so degrade gracefully). warmupQuickJS is cached + this `await` sits OUTSIDE the
    // run's raceWithTimeout below, so the module compile is never charged against the script's deadline
    // (a first quickjs run pays ~106ms here, once per process, off-budget). No cost under the asyncfn
    // default (the guard skips it). When available, warmupQuickJS resolves ~instantly.
    if (engineMode === 'quickjs' && !(await warmupQuickJS())) {
      engineMode = 'asyncfn';
      noteDegradedRun(); // #11 observability — a quickjs-requested run fell back (WASM uninstantiable)
    }
    // #11 observability — attribute the run to its RESOLVED engine (AFTER the degrade so a degraded
    // run counts as asyncfn, preserving the degradedRuns signal — see the risk the design flagged).
    noteEngineRun(engineMode);
    if (engineMode === 'quickjs') {
      // #11 — QuickJS-WASM isolate. The harness reuses proxy.dispatch / the
      // pending-map / api-response routing / flush / activeProxies verbatim;
      // only the in-VM user-code boundary differs. Wrapped in the SAME
      // raceWithTimeout + runIdContext.run as the AsyncFunction path so the
      // async-timeout semantics, ScriptTimeoutError shape, and runId
      // attribution are identical across engines. (The harness ALSO sets an
      // in-VM interrupt deadline as a sync-loop guard — the two are
      // complementary: this race catches a stalled host Promise, the interrupt
      // catches a sync `while(true){}` the race can't see.)
      value = await raceWithTimeout(
        runIdContext.run(req.runId, () =>
          runUserScriptInQuickJS({
            code:           req.code,
            dispatch:       proxy.dispatch,
            data:           req.data,
            script:         { id: req.scriptId, name: req.scriptName, type: req.scriptType },
            console:        capturedConsole,
            timeoutMs:      req.timeoutMs,
            serializeError,
            allowDangerous: req.allowDangerous,
            // Pass the host fetch CAPTURED PRE-LOCKDOWN (_hostFetch). `globalThis.fetch`
            // is nulled by installSandboxLockdown(), so the in-VM bridge must use this
            // reference. Only granted when allowDangerous (defense-in-depth alongside
            // the engine's own allowDangerous gate). Mirrors the asyncfn safeFetch.
            hostFetch:      req.allowDangerous ? _hostFetch : undefined,
            // P4 — handle-method dispatcher, so in-VM handle proxies (db.collection
            // etc.) route method calls back through the SAME targetHandle IPC as the
            // asyncfn path. Boundary #1 unchanged.
            dispatchOnHandle: proxy.dispatchOnHandle,
            // P5 — when an in-VM handler is registered/unregistered, send the
            // function-less register/unregister-handler IPC to the parent (the closure
            // stays in the VM registry, keyed by the same handlerId). Boundary #1
            // unchanged — the parent wires the wrapper identically across engines.
            ...makeHandlerDispatchers(proc, req.runId, req.scriptId),
            // #11 list-methods parity — seed the sync-list snapshots so the in-VM declared-SYNC
            // list reads (tools.list / macros.list / etc.) return arrays, matching asyncfn's local*.
            listSnapshots: {
              tools:                 req.toolsSnapshot                 ?? [],
              macros:                req.macrosSnapshot                ?? [],
              macroInterceptors:     req.macroInterceptorsSnapshot     ?? [],
              chatInjections:        req.chatInjectionsSnapshot        ?? [],
              chatContentProcessors: req.chatContentProcessorsSnapshot ?? [],
              worldInfoInterceptors: req.worldInfoInterceptorsSnapshot ?? [],
            },
          }),
        ),
        req.timeoutMs,
        () => new ScriptTimeoutError(
          `Script "${req.scriptName}" exceeded the ${req.timeoutMs / 1000}s execution timeout. ` +
          `(Looking for await on a stalled Promise? Tighten error handling around your async calls.)`,
        ),
      );
    } else {
    // CRIT-01 Layer 3: hard lexical rebindings layered on top of the
    // AsyncFunction parameter shadowing. Belt-and-braces against the
    // globalThis lockdown (Layer 2):
    //   - `Function = undefined` blocks `new Function('return Bun')()`
    //     even if a future Bun runtime change makes `globalThis.Function`
    //     non-configurable and the lockdown can't lock it.
    //   - `global/self/window/require` are platform-specific aliases
    //     for the global object; we want them inert regardless of which
    //     platform Bun happens to ship them under.
    // Deliberate omissions:
    //   - `eval` — strict mode forbids `const eval` as a binding (SyntaxError).
    //     The globalThis lockdown handles `(0, eval)` / bare `eval(...)`.
    //   - `globalThis` — whitelisted by lockdown so legitimate access to
    //     `globalThis.Map` etc. still works; per-property locks defend
    //     against `globalThis.Bun`.
    //   - `Bun` / `process` / `fetch` — already parameter-shadowed below.
    // Caveat: shadowing `Function` breaks `something instanceof Function`
    // and `typeof Function === 'function'`. Use `typeof x === 'function'`
    // instead. Flagged in rc.7 release notes.
    const fn = new AsyncFunctionCtor(
      'api',
      'data',
      'script',
      '__console',
      'z',
      'fetch',
      'Bun',
      'process',
      `"use strict";
const console  = __console;
const Function = undefined;
const global   = undefined;
const self     = undefined;
const window   = undefined;
const require  = undefined;
${req.code}
`,
    );

    // Async timeout race — same pattern as the legacy in-process
    // executor.ts. Catches `while(true) await ...` cleanly; sync infinite
    // loops are caught by the host's heartbeat watchdog (which fires
    // SIGKILL externally and ends our process before this race resolves).
    //
    // CRITICAL CAVEAT: Promise.race does NOT cancel the loser. When the
    // timeout wins, `fn()` keeps running indefinitely — the user's
    // `await new Promise(r => setTimeout(r, ...))` chain has no
    // termination condition we can trigger from the outside. Without
    // intervention, the orphan body keeps consuming CPU + console-entry
    // IPC bandwidth until the child dies for some other reason. The
    // post-result `proc.fail()` call below (gated on this specific
    // error class) terminates the child cleanly so Phase 10's restart
    // logic respawns a fresh one.
    // Wrap the body invocation in `runIdContext.run(req.runId, …)` so
    // AsyncLocalStorage carries the runId through every async hop the
    // body initiates — including detached promises like un-awaited
    // `(async () => { … })()` IIFEs. Previously only the handler-fire
    // path wrapped (line ~357); the body itself ran with no ALS store
    // set, so the `unhandledRejection` guard above couldn't attribute
    // detached rejections back to the originating script (the worker
    // survived, but the editor console never saw the error). With the
    // wrap, `runIdContext.getStore()` inside the guard returns
    // `req.runId`, which resolves through `activeProxies` to the
    // scriptId, and the rejection lands as an `error` entry in the
    // user's editor console as expected.
    //
    // No behaviour change on the dispatch side: the proxy already does
    // `runIdContext.getStore() ?? ctx.runId`, and `ctx.runId` was set
    // to `req.runId` at proxy construction — so the getStore() result
    // matches the fallback value. Handler-fire paths still override
    // via their own `runIdContext.run(handlerRunId, …)` to swap in
    // the per-fire runId.
    value = await raceWithTimeout(
      runIdContext.run(req.runId, () =>
        fn(proxy.api, req.data, proxy.script, capturedConsole, z, safeFetch, undefined, undefined),
      ),
      req.timeoutMs,
      () => new ScriptTimeoutError(
        `Script "${req.scriptName}" exceeded the ${req.timeoutMs / 1000}s execution timeout. ` +
        `(Looking for await on a stalled Promise? Tighten error handling around your async calls.)`,
      ),
    );
    }
  } catch (err) {
    ok = false;
    error = serializeError(err);
    // #11 observability — a quickjs body-run threw. Timeouts are counted separately at the proc.fail
    // gate below (they also force a respawn), so exclude them here to keep the two signals distinct.
    if (engineMode === 'quickjs' && error.name !== 'ScriptTimeoutError') noteQuickjsRunError();
  } finally {
    // Phase 9d.3 lifecycle: do NOT drop the proxy from `activeProxies`
    // here. Handler closures registered during this run (macros, tools,
    // interceptors, etc.) capture the proxy's `api` and need it to
    // remain dispatchable when they fire later. The proxy gets dropped
    // on `script-unregister` IPC instead.
    //
    // Drain fix: BEFORE sending run-result, await all fire-and-forget
    // chains the script body initiated (gated dispatches like
    // `tab.root.update` queued behind `registerDrawerTab`'s openAck;
    // `mkSyncVoidFireForget` chains; etc.). Without this drain, the
    // script body returns synchronously while gated chains are still
    // waiting on their FE-echo promises, run-result lands at the
    // parent which deletes `activeRuns[runId]`, and the gated dispatch
    // eventually arrives at a now-dead run → `RunCompletedError`
    // warning + the gated FE side-effect (e.g. setting modal/tab/widget
    // content) never lands. Drain ensures all chains settle while the
    // run is still active parent-side.
    try {
      await proxy.flush();
    } catch {
      // proxy.flush itself never throws — the inner Promise.allSettled
      // captures everything. Defensive try/catch in case future changes
      // alter that.
    }
  }

  const result: RunScriptResult = {
    type:       'run-result',
    runId:      req.runId,
    scriptId:   req.scriptId,
    ok,
    durationMs: Date.now() - startedAt,
  };
  if (ok) result.value = value;
  if (error) result.error = error;

  send(proc, result);

  // Async-timeout zombie protection. When `Promise.race` resolves with
  // `ScriptTimeoutError`, the user's `fn()` is still running in the
  // background — JavaScript can't externally terminate an AsyncFunction.
  // Without this `proc.fail()`, the orphan body keeps consuming CPU and
  // emitting console-entry IPCs until the child happens to die for
  // some other reason; multiple bad runs accumulate orphans.
  //
  // `proc.fail(reason)` signals the host to kill the subprocess. The
  // host fires a `failed` lifecycle event on the parent; Phase 10's
  // `handleLifecycle` rejects in-flight `pendingRuns` /
  // `pendingHandlerCalls`, clears `activeRuns`, and schedules a respawn
  // through the backoff ladder (1s default for the first failure).
  //
  // Trade-off: any OTHER scripts running concurrently on this child get
  // their runs / handler fires rejected as collateral damage. Same
  // posture as the sync-hang SIGKILL path — `notes/security-patch-
  // 519565-migration.md` documents this as a known v1.0 limitation,
  // a per-script process-isolation design lives in v2 if it becomes a
  // real-world pain point.
  if (!ok && error?.name === 'ScriptTimeoutError') {
    // #11 observability — a quickjs body-run timed out (→ whole-child respawn). Count it + TAG the engine
    // into the proc.fail reason so the host-side respawn log distinguishes a quickjs hang from an asyncfn one.
    if (engineMode === 'quickjs') noteQuickjsTimeout();
    proc.fail(
      `script-runner: async-timeout in "${req.scriptName}" (engine=${engineMode}, runId=${req.runId}); ` +
      `terminating to prevent orphan-body resource leak`,
    );
  }
}

// ─── Unhandled-rejection guard (v1.0.0-rc.2+) ──────────────────────────────
//
// Without this, a detached promise rejection inside any user-script — e.g.
// an un-awaited `(async () => { ... })();` IIFE whose inner `await` throws,
// including `PERMISSION_DENIED:<perm>` on a gated API call or a missing-
// method error from a script that predates an API addition — crashes the
// entire shared worker subprocess via Bun's default unhandled-rejection-
// exits-process behaviour.
//
// Worker death cascades: handler closures (macros, tools, interceptors,
// broadcast subscriptions, RPC handlers, etc.) registered by ANY script
// assigned to that worker are orphaned, since their child-side closures
// live in the dead process while the parent's wrappers still point at
// handlerIds that no longer exist. The parent auto-respawns the worker
// (logging the "user-script handler closures ... are now orphaned"
// warning) but the co-located scripts on that worker are functionally
// dead until the user disable/re-enables them. That's a violation of the
// v1.0 isolation contract — one badly-written script shouldn't take out
// the others on its worker.
//
// Survival strategy:
//   1. Attribute the rejection to the originating script via the WeakMap
//      populated by `api-proxy.ts`'s `taggedReject` at the reject-call
//      site (set BEFORE the rejection propagates, so the entry is
//      available when this handler reads it — the ALS-based lookup
//      below rarely propagates because Bun runs the event handler in
//      a context detached from the rejecting promise's async tree, but
//      it stays as a safety net).
//   2. If attributable, route the rejection to that script's editor
//      console as an error so the user can see what happened.
//   3. Always log to backend stderr (server-side `console.error`) for
//      the audit trail, including the unattributable case.
//   4. Do NOT terminate the worker process. The worker stays alive;
//      co-located scripts keep their registered handlers.
//
// Trade-off: bona-fide fatal runtime issues (rare) no longer crash-and-
// respawn the worker; they leave a noisy log line instead. Right call in
// 99% of cases — the common cause of an unhandled rejection is a user
// script with a detached promise, not a runtime breakdown.
//
// Exported (not a closure inside the entry function) so unit tests can
// drive it directly with mock inputs — Bun's test runner auto-fails any
// test that produces an unhandled rejection, regardless of process-level
// handlers, so we can't test the full event-firing flow without a
// child-subprocess fixture. Unit-testing the routing logic + relying on
// Node/Bun's documented behaviour that ANY registered `unhandledRejection`
// listener suppresses the default exit is the practical regression gate.

// ─── Per-script rejection log rate-limit (Phase 3d / LOW-01, v1.0.0-rc.7+)
//
// A hostile or buggy script doing `for (let i=0; i<1e6; i++) Promise.reject(...)`
// would, pre-rc.7, write a million backend-stderr lines and emit a million
// console-entry IPCs — disk fills, log aggregators rate-limit, the editor's
// own console truncation cap kicks in. Bucket per scriptId (plus a
// `__unattributed__` fallback bucket for rejections that don't carry the
// WeakMap+ALS attribution). After 10 rejections in a 60s window, further
// rejections drop silently; when the window resets, the next-arriving
// rejection prepends a "N additional rejection(s) suppressed" summary
// before logging itself normally. No window-end timer — the summary fires
// on demand when activity resumes, which is when the user is actually
// looking at the console.

/** Max rejections logged per scriptId per window. Audit LOW-03. */
const UNHANDLED_REJECTION_THRESHOLD = 10;
/** Window length for the rejection-log rate-limit, in milliseconds. */
const UNHANDLED_REJECTION_WINDOW_MS = 60_000;

interface UnhandledRejectionRateState {
  /** Wall-clock ms when this window started. */
  windowStartMs: number;
  /** Rejections LOGGED (stderr + editor) so far this window. */
  count:         number;
  /** Rejections SILENTLY dropped this window (count > threshold). */
  suppressed:    number;
}

const unhandledRejectionRateState = new Map<string, UnhandledRejectionRateState>();

export function handleUnhandledRejection(
  reason: unknown,
  proc:   SpindleBackendProcessContext,
): void {
  const errMsg = reason instanceof Error
    ? (reason.stack ?? reason.message ?? String(reason))
    : String(reason);

  // Two-tier attribution. See JSDoc above for full rationale.
  let runId: string | undefined;
  let scriptId: string | undefined;
  if (reason !== null && typeof reason === 'object') {
    const attribution = rejectionAttribution.get(reason);
    if (attribution) {
      runId    = attribution.runId;
      scriptId = attribution.scriptId;
    }
  }
  if (runId === undefined) {
    const ctxRunId = runIdContext.getStore();
    if (ctxRunId !== undefined) {
      const entry = activeProxies.get(ctxRunId);
      if (entry) {
        runId    = ctxRunId;
        scriptId = entry.scriptId;
      }
    }
  }

  // ── Rate-limit gate (Phase 3d / LOW-03) ───────────────────────────────
  // Bucket per scriptId; unattributable rejections share a fallback bucket.
  // Threshold = `UNHANDLED_REJECTION_THRESHOLD` per `UNHANDLED_REJECTION_WINDOW_MS`.
  const rateLimitKey = scriptId ?? '__unattributed__';
  const now = Date.now();
  const state = unhandledRejectionRateState.get(rateLimitKey);
  let suppressedSummary: string | null = null;
  let shouldLog = true;

  if (state === undefined) {
    unhandledRejectionRateState.set(rateLimitKey, {
      windowStartMs: now,
      count:         1,
      suppressed:    0,
    });
  } else if (now - state.windowStartMs > UNHANDLED_REJECTION_WINDOW_MS) {
    // Window expired. If the prior window suppressed any rejections,
    // emit a summary BEFORE the current rejection so the user sees the
    // count when activity resumes.
    if (state.suppressed > 0) {
      suppressedSummary =
        `${state.suppressed} additional rejection(s) were suppressed during the previous ` +
        `${UNHANDLED_REJECTION_WINDOW_MS / 1000}s rate-limit window`;
    }
    state.windowStartMs = now;
    state.count         = 1;
    state.suppressed    = 0;
  } else if (state.count < UNHANDLED_REJECTION_THRESHOLD) {
    state.count += 1;
  } else {
    state.suppressed += 1;
    shouldLog = false;
  }

  // Emit the previous-window suppression summary if one was queued.
  if (suppressedSummary !== null) {
    console.error(
      `[script-runner] ${suppressedSummary}` +
      (scriptId !== undefined ? ` for script ${scriptId}.` : ' (unattributed).'),
    );
    if (scriptId !== undefined && runId !== undefined) {
      try {
        proc.send({
          type:     'console-entry',
          runId,
          scriptId,
          entry: {
            timestamp: new Date().toLocaleTimeString(),
            type:      'warn',
            message:   `[lumiscript] ${suppressedSummary}.`,
          },
        });
      } catch {
        // Channel down — drop; backend stderr above is the fallback.
      }
    }
  }

  // Drop fully if past threshold this window.
  if (!shouldLog) return;

  // Backend stderr — survives even if IPC routing fails or the originating
  // runId can't be attributed.
  console.error(
    `[script-runner] unhandledRejection survived (worker stays up). Reason: ${errMsg}`,
  );

  if (runId === undefined || scriptId === undefined) return;

  // CRIT-01: detect LumiScriptSecurityError thrown by the sandbox lockdown
  // (Layer 2 throwing accessors / setTimeout monkey-patch) so the editor
  // console can render it with the distinct `security` kind. Match by
  // `.name` rather than `instanceof` so cross-module class-identity drift
  // doesn't cause silent demotion to plain error styling.
  const isSecurityError = reason !== null
    && typeof reason === 'object'
    && (reason as { name?: unknown }).name === 'LumiScriptSecurityError';
  const consoleType: ConsoleEntryType = isSecurityError ? 'security' : 'error';
  const consoleMessage = isSecurityError
    ? `[security] ${reason instanceof Error ? reason.message : errMsg}`
    : `[lumiscript] unhandled rejection: ${errMsg}`;

  // Route to the originating script's editor console.
  try {
    proc.send({
      type:     'console-entry',
      runId,
      scriptId,
      entry: {
        timestamp: new Date().toLocaleTimeString(),
        type:      consoleType,
        message:   consoleMessage,
      },
    });
  } catch {
    // Channel down — drop. Backend log line above is the fallback.
  }
}

/** @internal Test seam — reset the rate-limit map between tests. */
export function _resetUnhandledRejectionRateStateForTests(): void {
  unhandledRejectionRateState.clear();
  consoleRateState.clear();
}

// ─── Test-only helpers ──────────────────────────────────────────────────────
//
// Exported with `_`-prefixed names so they're visible-but-discouraged for
// production callers. Used by `tests/script-runner/unhandled-rejection-
// guard.test.ts` to seed / clear the module-scope `activeProxies` map so
// the guard's WeakMap + ALS attribution paths can be exercised against
// known runIds without bringing up the full subprocess fixture.

/** @internal Test seam — seed an activeProxies entry. */
export function _setActiveProxyForTests(runId: string, scriptId: string): void {
  // The unhandledRejection guard only reads `scriptId`, but the broadcast
  // routers (`routeApiResponse` / `routeStreamChunk` / `routeStreamEnd`) and
  // `handleScriptUnregister` call methods on EVERY entry's `proxy`. Seed a
  // stub with no-op implementations of exactly those methods so a leaked
  // entry can never crash routing — `activeProxies` is module-level state
  // shared across test files, and bun's test-file order is filesystem-
  // readdir-dependent (ext4 on CI vs NTFS locally), so this seam can outlive
  // its own file and land in an e2e file's `routeApiResponse` sweep. A bare
  // `{}` here is what produced the CI-only `entry.proxy.handleResponse is not
  // a function` TypeError (which manifested as the F-L9 e2e timeout when the
  // throw aborted the response sweep before the real proxy was reached).
  const stubProxy = {
    handleResponse:    () => {},
    handleStreamChunk: () => {},
    handleStreamEnd:   () => {},
    cleanup:           () => {},
  } as unknown as ProxyHandle;
  activeProxies.set(runId, { scriptId, proxy: stubProxy });
}

/** @internal Test seam — clear all activeProxies entries. */
export function _clearActiveProxiesForTests(): void {
  activeProxies.clear();
}

/**
 * @internal Test seam (#11) — force the engine mode per-process for the parity
 * harness (mirrors `_setActiveProxyForTests`). `runOne` reads it ahead of
 * `req.engineMode`. Reset to `undefined` in `tests/_infra/setup.ts` (wired with
 * P1 increment 2's parity tests) so it can't leak across test files.
 */
let testEngineMode: 'asyncfn' | 'quickjs' | undefined;
export function _setEngineModeForTests(mode: 'asyncfn' | 'quickjs' | undefined): void {
  testEngineMode = mode;
}

/** @internal Test seam — current activeProxies cardinality (leak measurement). */
export function _activeProxyCountForTests(): number {
  return activeProxies.size;
}

/** @internal Test seam — how many asyncfn user timers are currently tracked for a script (leak
 *  measurement: a create+clear cycle must return to 0, not accumulate). */
export function _asyncfnTimerCountForTests(scriptId: string): number {
  return asyncfnTimerStore.get(scriptId)?.size ?? 0;
}

// ─── Entry ──────────────────────────────────────────────────────────────────

/**
 * Default export — the runtime invokes this on subprocess startup, passing
 * the `process` controller. Returns an optional cleanup function the
 * runtime calls on natural completion (we also wire `process.onStop()` to
 * the same cleanup for graceful-stop requests from the parent).
 */
export default function (proc: SpindleBackendProcessContext): () => void {
  // CRIT-01 mitigation: install the sandbox lockdown BEFORE any user-code-
  // adjacent surface is wired (heartbeat timer, IPC message handler).
  // Module-init captures (`_processOn` / `_hostFetch` / etc.) are already
  // bound — see the "Sandbox lockdown" section above.
  installSandboxLockdown();

  // #11 P5-2 — wire the quickjs in-VM timers to real child-side Bun timers. The VM's setTimeout/
  // setInterval reach __hostScheduleTimer/__hostClearTimer (qjs-engine), which delegate here; the Bun
  // timer's expiry fires the callback via fireVmTimer → fireHandlerInQuickJS. Captured `proc` is stable
  // for the child's lifetime. No-op cost for asyncfn-only children (nothing calls the scheduler).
  setVmTimerScheduler({
    schedule: (scriptId, timerId, ms, repeat) => scheduleVmTimer(proc, scriptId, timerId, ms, repeat),
    clear:    (scriptId, timerId) => clearVmTimer(scriptId, timerId),
  });

  // #11 cold-start-fallback — NOTE: no unconditional module pre-warm here. Instantiating the WASM module
  // in EVERY child would waste ~106ms + tens of MB in asyncfn-only children (quickjs is default-off), so
  // the module is warmed LAZILY by `warmupQuickJS()` at engine-selection in runOne — outside the run's
  // timeout budget, and only when a run actually selects quickjs (zero cost under the asyncfn default).
  // When engine-toggle-wiring makes quickjs the configured engine, THAT increment should add a startup
  // pre-warm gated on the setting so the first quickjs run doesn't wait on the compile.

  let heartbeatTimer: ReturnType<typeof setInterval> | null = setInterval(() => {
    proc.heartbeat();
    // #11 P7-3.1 — piggyback the quickjs per-script context idle-sweep on the existing heartbeat (the
    // engine owns no timer). No-op under contextModel='shared' (the default today) — reaps idle,
    // unpinned, non-mid-run per-script contexts + enforces POOL_CAP once per-script is the default.
    // #11 observability — capture the (previously discarded) evicted count + log only NON-ZERO sweeps;
    // the 5-min idle TTL makes reclaims naturally sparse, so this never firehoses. No per-eviction log.
    const evicted = sweepIdleContexts();
    if (evicted > 0) {
      try {
        console.info(`[script-runner] quickjs pool: evicted ${evicted} idle context(s), ${getEngineTelemetry().liveContexts} remain`);
      } catch { /* console may be locked down */ }
    }
  }, IDLE_HEARTBEAT_INTERVAL_MS);

  const cleanup = (): void => {
    if (heartbeatTimer !== null) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  };

  // Register the worker-isolation guard. See `handleUnhandledRejection`
  // JSDoc for the full rationale. Uses the pre-lockdown captured
  // `_processOn` because `process` itself is a throwing accessor after
  // `installSandboxLockdown` ran above.
  _processOn('unhandledRejection', (reason: unknown) => {
    handleUnhandledRejection(reason, proc);
  });

  proc.onMessage((payload) => {
    // Defensive: payloads come over IPC; validate shape before narrowing.
    if (
      !payload ||
      typeof payload !== 'object' ||
      typeof (payload as { type?: unknown }).type !== 'string'
    ) {
      // Drop silently — better than crashing the child on a stray message.
      return;
    }
    const msg = payload as ParentToChildMessage;

    switch (msg.type) {
      case 'run-script':
        // Fire-and-forget: `runOne` swallows errors and surfaces them via
        // RunScriptResult. Awaiting here would serialize concurrent runs,
        // but Phase 2 only sees one run at a time anyway. Future phases
        // may add concurrency control.
        void runOne(proc, msg);
        break;

      case 'shutdown':
        // Parent-requested graceful shutdown. Stop the idle heartbeat
        // and tell the host we're done; the host's `process.complete()`
        // path tears down the subprocess cleanly.
        cleanup();
        proc.complete();
        break;

      case 'api-response':
        routeApiResponse(msg);
        break;

      case 'stream-chunk':
        routeStreamChunk(proc, msg);
        break;

      case 'stream-end':
        routeStreamEnd(msg);
        break;

      case 'broadcast-fire':
        handleBroadcastFire(proc, msg);
        break;

      case 'broadcast-clear':
        handleBroadcastClear(msg);
        break;

      case 'run-handler':
        // Fire-and-forget: handleRunHandlerRequest sends `handler-result`
        // back from inside its async body; awaiting here would serialize
        // concurrent handler fires unnecessarily.
        void handleRunHandlerRequest(proc, msg);
        break;

      case 'script-unregister':
        handleScriptUnregister(proc, msg);
        break;

      case 'script-state-sync':
        // v1.0.0-rc.6 — parent sending a per-script stable-id snapshot
        // to pre-populate our proxy-side caches before the next
        // `run-script` for this script arrives. Bun IPC is FIFO per
        // channel, so this case ALWAYS lands before the corresponding
        // `run-script` for the same script-worker pairing. Synchronous
        // body — no async work between this and the next message read.
        applyScriptStateSnapshot(msg.snapshot);
        break;

      case 'advanced-modal-dismissed':
        handleAdvancedModalDismissed(proc, msg);
        break;

      case 'float-widget-position':
        handleFloatWidgetPosition(msg);
        break;

      case 'diagnostic-stats-request': {
        // v0.28.0+ — parent (diagnostics collector) requests a snapshot
        // of this child's own resource usage. Standard Node-compat
        // process introspection APIs; no banned-API concern. Cheap to
        // sample — both calls return immediately without IO.
        //
        // Uses the pre-lockdown captured `_processMemoryUsage` / etc.
        // because `process` itself is a throwing accessor after
        // `installSandboxLockdown` ran at the top of this default export.
        const mem = _processMemoryUsage();
        const cpu = _processCpuUsage();
        proc.send({
          type:        'diagnostic-stats-response',
          requestId:   msg.requestId,
          rss:         mem.rss,
          heapTotal:   mem.heapTotal,
          heapUsed:    mem.heapUsed,
          external:    mem.external,
          cpuUserUs:   cpu.user,
          cpuSystemUs: cpu.system,
          uptimeSec:   _processUptime(),
          // #11 observability — fold this child's QuickJS-engine telemetry into the stats reply
          // (rides the existing diagnostic-stats round-trip; no new IPC pair). Counters are 0 and the
          // pool snapshot reads 'shared'/empty until quickjs is actually exercised on this child.
          engine:      getEngineTelemetry(),
        });
        break;
      }

      default:
        // Unknown / not-yet-implemented — silently ignore.
        break;
    }
  });

  // Host invokes onStop when the parent calls handle.stop() (graceful).
  // Hard kills (heartbeat timeout) bypass this entirely — the OS kills the
  // process; our `cleanup` doesn't get a chance to run.
  proc.onStop(() => {
    cleanup();
  });

  // Acknowledge readiness — releases the parent's `spawn()` promise.
  proc.ready();

  return cleanup;
}
