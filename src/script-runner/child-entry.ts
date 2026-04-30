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
  BroadcastClearMessage,
  ConsoleEntryNotice,
  SerializedError,
  RunHandlerRequest,
  HandlerResult,
  ScriptUnregisterMessage,
  AdvancedModalDismissedNotice,
  FloatWidgetPositionNotice,
} from '../types/script-runner-ipc.js';
import type { ConsoleEntry, ConsoleEntryType } from '../types/script.js';
import {
  buildProxiedAPI,
  runIdContext,
  notifyAdvancedModalDismissed,
  notifyFloatWidgetPosition,
  clearScriptStateOnUnregister,
  type ProxyHandle,
} from './api-proxy.js';
import { serializeConsoleArg } from '../engine/console-format.js';
// Phase 9c-gap-close — bundle zod into the child runtime so user-script
// bodies can use `z.object({...})` / `z.string()` / etc. exactly like
// they do in the in-process executor (which injects `z` into the
// AsyncFunction sandbox as a top-level binding).
import * as z from 'zod';

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
type BroadcastHandlerFn = (payload: unknown) => void;
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

function handleBroadcastFire(msg: BroadcastFireMessage): void {
  const scriptHandlers = broadcastHandlers.get(msg.scriptId);
  const handler = scriptHandlers?.get(msg.subId);
  if (!handler) return; // late fire after clear/unsub — drop silently
  try {
    handler(msg.payload);
  } catch {
    // Mirror the bus's existing semantic: errors caught so one bad handler
    // can't break the others. Console capture (Phase 9) will eventually
    // surface these to the LumiScript console pane; for now they're silent.
  }
}

function handleBroadcastClear(msg: BroadcastClearMessage): void {
  broadcastHandlers.delete(msg.scriptId);
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
function handleAdvancedModalDismissed(msg: AdvancedModalDismissedNotice): void {
  notifyAdvancedModalDismissed(msg.modalId, msg.reason);
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
  notifyFloatWidgetPosition(msg.widgetId, msg.x, msg.y);
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
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new Error(
          `Handler ${req.kind}/${req.handlerId} exceeded ${req.timeoutMs / 1000}s timeout`,
        )),
        req.timeoutMs,
      ),
    );
    value = await Promise.race([
      runIdContext.run(req.runId, () => Promise.resolve(handler(...req.args))),
      timeoutPromise,
    ]);
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
 * Phase 9d.3 — drop all per-script state when a script is unregistered
 * (extension disable, script delete, etc.). Mirrors the existing
 * `clearByScriptId` semantics on the parent's macro / tool / etc. stores.
 *
 * Cleans up: handler closures, broadcast handlers, AND any active proxies
 * that belonged to runs of this script. The proxies hold per-script
 * Handlebars state, pending request maps, etc. — dropping them releases
 * memory accumulated across runs.
 */
function handleScriptUnregister(msg: ScriptUnregisterMessage): void {
  handlerClosures.delete(msg.scriptId);
  broadcastHandlers.delete(msg.scriptId);
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
      ? globalThis.fetch.bind(globalThis)
      : ((() => {
          throw new Error(
            `"${req.scriptName}" must enable Allow Dangerous to use fetch directly. ` +
            `Use api.utils.http.* for HTTP requests.`,
          );
        }) as unknown as typeof globalThis.fetch);

    const fn = new AsyncFunctionCtor(
      'api',
      'data',
      'script',
      '__console',
      'z',
      'fetch',
      'Bun',
      'process',
      `"use strict";\nconst console = __console;\n${req.code}\n`,
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
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(
        () =>
          reject(
            new ScriptTimeoutError(
              `Script "${req.scriptName}" exceeded the ${req.timeoutMs / 1000}s execution timeout. ` +
              `(Looking for await on a stalled Promise? Tighten error handling around your async calls.)`,
            ),
          ),
        req.timeoutMs,
      ),
    );

    value = await Promise.race([
      fn(proxy.api, req.data, proxy.script, capturedConsole, z, safeFetch, undefined, undefined),
      timeoutPromise,
    ]);
  } catch (err) {
    ok = false;
    error = serializeError(err);
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
    proc.fail(
      `script-runner: async-timeout in "${req.scriptName}" (runId=${req.runId}); ` +
      `terminating to prevent orphan-body resource leak`,
    );
  }
}

// ─── Entry ──────────────────────────────────────────────────────────────────

/**
 * Default export — the runtime invokes this on subprocess startup, passing
 * the `process` controller. Returns an optional cleanup function the
 * runtime calls on natural completion (we also wire `process.onStop()` to
 * the same cleanup for graceful-stop requests from the parent).
 */
export default function (proc: SpindleBackendProcessContext): () => void {
  let heartbeatTimer: ReturnType<typeof setInterval> | null = setInterval(() => {
    proc.heartbeat();
  }, IDLE_HEARTBEAT_INTERVAL_MS);

  const cleanup = (): void => {
    if (heartbeatTimer !== null) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  };

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

      case 'broadcast-fire':
        handleBroadcastFire(msg);
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
        handleScriptUnregister(msg);
        break;

      case 'advanced-modal-dismissed':
        handleAdvancedModalDismissed(msg);
        break;

      case 'float-widget-position':
        handleFloatWidgetPosition(msg);
        break;

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
