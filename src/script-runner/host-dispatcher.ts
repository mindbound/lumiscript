/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT-RUNNER HOST DISPATCHER (Phase 2 skeleton)
 * ============================================================================
 * Parent-side counterpart to `src/script-runner/child-entry.ts`. Spawns the
 * child via `spindle.backendProcesses`, dispatches script-run requests,
 * correlates child responses to caller promises, and handles lifecycle
 * events (timed_out, failed) at the level of "log + reject in-flight runs."
 *
 * Phase 2 scope (this file): minimal dispatch.
 *   - Spawn the child + wire up message + lifecycle subscriptions
 *   - `dispatchRunScript()` send + correlate
 *   - Track active scripts so timeout errors can name the offender
 *   - Graceful shutdown
 *
 * NOT in Phase 2 (later phases):
 *   - api proxy receiver (Phases 3–5) — handles `ApiProxyRequest`
 *   - Broadcast forwarding (Phase 6) — handles `BroadcastSubscribeMessage` etc.
 *   - Restart on timeout (Phase 10) — for now the child stays dead until
 *     LumiScript reloads; in Phase 10 we add automatic respawn
 *
 * Architecture rationale: see `notes/step-2-design.md`.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  BackendProcessHandle,
  BackendProcessLifecycleEventDTO,
} from 'lumiverse-spindle-types';
import type {
  ParentToChildMessage,
  ChildToParentMessage,
  RunScriptRequest,
  RunScriptResult,
  ApiProxyRequest,
  ApiProxyResponse,
  AbortRequest,
  HandleRef,
  HandleKind,
  BroadcastSubscribeMessage,
  BroadcastUnsubscribeMessage,
  BroadcastFireMessage,
  BroadcastClearMessage,
  ConsoleEntryNotice,
  RegisterHandler,
  UnregisterHandler,
  HandlerResult,
  RunHandlerRequest,
  ScriptUnregisterMessage,
} from '../types/script-runner-ipc.js';
import type {
  LumiScriptAPI,
  Script,
  ConsoleEntry,
  MacroContext,
  ToolInvocationArgs,
  ToolInvocationContext,
  ModalHandle,
  ModalItem,
  ShowModalOptions,
  DOMHandle,
  DOMInjectOptions,
  DOMMessageInjectOptions,
  DOMEventData,
  AdvancedModalHandle,
  AdvancedModalOptions,
  InputBarActionHandle,
  InputBarActionOptions,
  FloatWidgetHandle,
  FloatWidgetOptions,
  DrawerTabHandle,
  DrawerTabOptions,
} from '../types/script.js';
import type {
  AdvancedModalDismissedNotice,
  FloatWidgetPositionNotice,
} from '../types/script-runner-ipc.js';
import {
  removeMacro as macroStoreRemove,
} from '../engine/macro-store.js';
import {
  removeTool as toolStoreRemove,
} from '../engine/tool-store.js';
import { emit as busEmit } from '../engine/broadcast-bus.js';
import { buildScriptAPI } from '../engine/executor.js';
import {
  dispatchApiCall,
  HANDLE_KIND_LIFECYCLE,
  type HandleHelpers,
} from '../engine/script-runner-host.js';
import {
  on as busOn,
  clearByScriptId as busClearByScriptId,
} from '../engine/broadcast-bus.js';
import { getActiveChatId, getActiveCharacterId } from '../engine/binding.js';

// ─── Script resolver (Phase 9e) ─────────────────────────────────────────────
//
// User-library `script.require()` from the child runtime needs to fetch the
// library script's metadata + code from the parent's `scriptStorage`. The
// host-dispatcher doesn't import `scriptStorage` directly (would create a
// module cycle through `backend.ts`); instead, backend.ts wires up a
// resolver callback during init via `setScriptResolver`.
//
// The resolver returns a Script object (with `.code` populated) for a
// matching library script, or null if not found. Used by the
// `'script.fetchLibrary'` special-case in `handleApiRequest`.
let scriptResolver: ((nameOrId: string) => Script | null) | null = null;

/**
 * Phase 9e — wire the user-library lookup function from backend.ts.
 * Called once during cold-start init AFTER `scriptStorage.load()` has
 * resolved (so `getScript` / `getByName` return real entries rather than
 * empty results).
 *
 * Idempotent: re-calling replaces the resolver. Backend.ts calls this
 * exactly once.
 */
export function setScriptResolver(resolver: (nameOrId: string) => Script | null): void {
  scriptResolver = resolver;
}

// ─── Configuration ──────────────────────────────────────────────────────────

const SCRIPT_RUNNER_KIND  = 'lumiscript-script-runner';
const SCRIPT_RUNNER_KEY   = 'main';
const SCRIPT_RUNNER_ENTRY = 'dist/script-runner.js';

/** Generous startup timeout — the child has to load its bundle, set up handlers, call ready(). */
const STARTUP_TIMEOUT_MS = 3_000;

/**
 * Default heartbeat watchdog window. Matches the legacy in-process
 * watchdog (scriptTimeoutMs + 5s buffer) so a sync infinite loop in
 * a user script triggers SIGKILL after the same effective duration.
 *
 * Phase 9 will source `scriptTimeoutMs` from the live settings store and
 * pass it through to spawn() so the watchdog reflects the user-configured
 * timeout. For Phase 2 we hardcode the default (60s + 5s).
 */
const HEARTBEAT_TIMEOUT_MS_DEFAULT = 65_000;

// ─── Module state ───────────────────────────────────────────────────────────

let childHandle:    BackendProcessHandle | null = null;
let messageUnsub:   (() => void)         | null = null;
let lifecycleUnsub: (() => void)         | null = null;

// ─── Restart logic state (Phase 10) ─────────────────────────────────────────
//
// Auto-respawn the script-runner child after host-driven kills (heartbeat
// timeout SIGKILL or unexpected exit). Without this, a single user-script
// that hangs the child via `while(true){}` would leave LumiScript in a
// state where the main backend stays responsive (per Step 2 promise) but
// no further script runs work — a partial recovery.
//
// Backoff ladder: 1s → 2s → 4s → 8s → 16s → 30s (cap). Reset counter to 0
// once the new child has been alive for STABILITY_THRESHOLD_MS, so a
// long-running session that hits ONE bad script doesn't accumulate
// permanent backoff.
//
// Known limitation (deliberate non-coverage in Phase 10 MVP): handler
// closures (macros, tools, interceptors, content processors, etc.) live
// child-side per-run. After respawn, those closures are GONE, but the
// parent's canonical macro/tool/etc. stores still hold wrappers pointing
// at child handlerIds that no longer exist. Wrappers fired post-respawn
// surface HandlerNotFoundError. Mitigation logged as a user-visible
// warning during the respawn lifecycle path. Full auto-re-registration
// (re-firing the source scripts to repopulate handlers) is deferred —
// it'd require trigger-registry coordination beyond Phase 10's scope.
const RESTART_BACKOFF_MS    = [1_000, 2_000, 4_000, 8_000, 16_000, 30_000] as const;
const STABILITY_THRESHOLD_MS = 60_000;

// Phase 11.B.3 — test-only overrides. When non-null, replace the
// production values in `scheduleRespawn` and the stability-reset
// scheduling inside `spawnScriptRunner`. Tests use this to drive the
// full failed → respawn → stability cycle in milliseconds rather than
// minutes. Cleared by `__resetForTests()`.
let restartBackoffOverride:    readonly number[] | null = null;
let stabilityThresholdOverride: number            | null = null;
function getRestartBackoffMs(): readonly number[] {
  return restartBackoffOverride ?? RESTART_BACKOFF_MS;
}
function getStabilityThresholdMs(): number {
  return stabilityThresholdOverride ?? STABILITY_THRESHOLD_MS;
}

let cachedUserId:    string | null                        = null;
let restartAttempts: number                               = 0;
let restartTimer:    ReturnType<typeof setTimeout> | null = null;
let stabilityTimer:  ReturnType<typeof setTimeout> | null = null;

/**
 * Phase 9c concurrency: when multiple callers race to spawn the child
 * (e.g. several ls:startup scripts firing fire-and-forget at activation
 * time), the first reads `childHandle === null` and starts spawning;
 * any concurrent caller that arrives BEFORE the first's `await` resolves
 * also reads null and would spawn a second time — the host's
 * `replaceExisting: true` would then kill the first child mid-flight,
 * dropping in-flight runs and triggering a `failed` lifecycle event.
 *
 * Coalescing: stash the in-flight spawn promise here so concurrent
 * callers await the SAME promise. Cleared on resolve/reject so a future
 * spawn (after a crash + Phase-10 restart) can fire fresh.
 */
let spawnInFlight: Promise<BackendProcessHandle> | null = null;

interface PendingRun {
  resolve: (result: RunScriptResult) => void;
  reject:  (err: Error) => void;
}

/**
 * Per-run handle table. Maps `HandleRef.id` → underlying real object +
 * its kind. Phase 4 stores transient handles (e.g. Collection) here;
 * the entire table is dropped on `run-result` for transient cleanup.
 *
 * Phase 5 will add a separate persistent-handle table tied to the owning
 * script's lifecycle (mirroring macro-store / tool-store / dom-handler
 * cleanup patterns) — persistent handles outlive their originating run.
 */
type HandleTableEntry = { obj: unknown; kind: HandleKind };

interface ActiveRun {
  scriptId:   string;
  scriptName: string;
  startedAt:  number;
  /** The host-side LumiScriptAPI for this run — used by the api-proxy dispatcher. */
  api:        LumiScriptAPI;
  /** Transient handle table — dropped on run completion. */
  handles:    Map<string, HandleTableEntry>;
  /**
   * Phase 9a — invoked for every `ConsoleEntryNotice` arriving from the
   * child for THIS run. The caller wires this through to the existing
   * `console_entry` frontend message (matches the in-process executor's
   * `onConsole` callback shape exactly), so child-runtime entries appear
   * in the LumiScript console panel indistinguishable from in-process ones.
   *
   * Optional — runs that don't care about console output (e.g. internal
   * smoke tests that only assert on the run-result) can omit it; entries
   * arriving without a callback are dropped silently.
   */
  onConsole?: (entry: ConsoleEntry) => void;
}

let nextHandleSeq = 1;
function generateHandleId(seedKey: string): string {
  return `${seedKey}-h-${nextHandleSeq++}`;
}

// ─── Per-script persistent handle table ─────────────────────────────────────
//
// Persistent handles (DOMHandle, RegisteredMacroHandle, StyleHandle, …)
// outlive the originating script run and live until the owning script is
// unregistered. Until Phase 9 wires `clearByScriptId`-style cleanup into
// the trigger-registry's existing teardown path, persistent handles
// effectively live for LumiScript's lifetime — acceptable for v1 testing.
//
// The map is keyed by scriptId; each entry is a sub-map keyed by handleId.
// Lookup is O(1); a single-pass over both tables (transient + persistent)
// covers every active handle.

const persistentHandles = new Map<string, Map<string, HandleTableEntry>>();

function getOrCreatePersistentTable(scriptId: string): Map<string, HandleTableEntry> {
  let table = persistentHandles.get(scriptId);
  if (!table) {
    table = new Map<string, HandleTableEntry>();
    persistentHandles.set(scriptId, table);
  }
  return table;
}

// ─── Per-script broadcast forwarders (Phase 6) ──────────────────────────────
//
// When a child script registers `api.broadcast.on(event, handler)`, the
// closure stays in the child's per-script handler registry; here we register
// a parallel forwarder on the parent's broadcast bus that translates a
// real bus emission into a `BroadcastFireMessage` IPC to the child.
//
// We track each forwarder's bus-unsubscribe function so an explicit
// `BroadcastUnsubscribeMessage` from the child can drop just that one
// subscription without touching others. The bus's own `clearByScriptId`
// also tears these down en masse — that's the other path through here.

const broadcastForwarders = new Map<string, Map<string, () => void>>();

function getOrCreateForwarderTable(scriptId: string): Map<string, () => void> {
  let table = broadcastForwarders.get(scriptId);
  if (!table) {
    table = new Map<string, () => void>();
    broadcastForwarders.set(scriptId, table);
  }
  return table;
}

// ─── In-flight AbortControllers (Phase 8) ───────────────────────────────────
//
// When a child api-request includes `hasSignal: true`, we create a real
// `AbortController` here on the parent and inject its signal into the api
// method's options. If the child later sends an `AbortRequest` (because
// the user-script's AbortController fired), we look up the controller by
// requestId and call `.abort()` on it; the real api propagates the abort
// to its underlying network call (or whatever); the rejected promise
// becomes a SerializedError on the response. After the response is sent,
// the controller is dropped from this map.
//
// Late aborts (signal fires after response already arrived) silently no-op.
// The map's lifecycle is bounded by request lifecycle, NOT script-run —
// signals can in principle live longer than the api call they belong to,
// but the abort-request handler treats unknown requestIds as no-ops.

const abortControllers = new Map<string, AbortController>();

// ─── In-flight handler calls (Phase 9d.3) ────────────────────────────────────
//
// When the host's macro engine / tool dispatcher / etc. invokes a wrapper
// closure registered via `register-handler`, the wrapper sends a
// `RunHandlerRequest` to the child and awaits the matching `HandlerResult`.
// The promise's resolve/reject lives here keyed by the per-fire `runId`.
//
// Lifetime: created in `sendRunHandlerRequest` before dispatching the IPC,
// dropped on `HandlerResult` arrival. If the child crashes mid-fire, the
// lifecycle handler rejects all pending entries with a clear error.

interface PendingHandlerCall {
  resolve: (result: HandlerResult) => void;
  reject:  (err: Error) => void;
}
const pendingHandlerCalls = new Map<string, PendingHandlerCall>();

let nextHandlerCallSeq = 1;
function generateHandlerCallId(): string {
  return `handler-${Date.now()}-${nextHandlerCallSeq++}`;
}

/**
 * Send a `RunHandlerRequest` to the child and resolve with the matching
 * `HandlerResult`. The wrapper closures registered in the host's macro /
 * tool / etc. stores call this each time the host fires the handler.
 *
 * Per-fire: registers an ephemeral `activeRun` entry on the parent so any
 * api.* calls the user's handler closure makes (via the AsyncLocalStorage
 * runId override) route back to the right api object. The api built here
 * is bit-identical to what `dispatchRunScript` would build — same script,
 * same permissions, same live activeContext.
 */
async function sendRunHandlerRequest(
  scriptId:  string,
  handlerId: string,
  kind:      RunHandlerRequest['kind'],
  args:      unknown[],
  timeoutMs: number,
): Promise<HandlerResult> {
  if (!childHandle) {
    throw new Error('[script-runner] handler fire: child not running');
  }
  const snapshot = lastDispatchByScript.get(scriptId);
  if (!snapshot) {
    // No run has fired for this script since process start (rare —
    // handler registration must have come from somewhere). Surface
    // a clean error rather than spawning a synth-Script handler call
    // with possibly-wrong permissions.
    throw new Error(
      `[script-runner] handler fire: no dispatch snapshot for script ${scriptId} ` +
      `— cannot build api for handler invocation`,
    );
  }

  const runId = generateHandlerCallId();
  const api = buildScriptAPI(snapshot.script, {
    grantedPermissions: snapshot.grantedPermissions,
    userId:             snapshot.userId,
    // Tracking sets / onToolsChanged omitted — handler fires don't
    // re-register tools/macros/etc. as part of their normal operation.
    // (If a handler DID call api.tools.register, the registration
    // would land but stale-diff cleanup on next run would drop it.
    // That edge case is explicitly out of scope for 9d.3.a.)
  });

  activeRuns.set(runId, {
    scriptId,
    scriptName: snapshot.script.name,
    startedAt:  Date.now(),
    api,
    handles:    new Map(),
  });

  const msg: RunHandlerRequest = {
    type:      'run-handler',
    runId,
    scriptId,
    handlerId,
    kind,
    args,
    timeoutMs,
  };

  return new Promise<HandlerResult>((resolve, reject) => {
    pendingHandlerCalls.set(runId, { resolve, reject });
    try {
      childHandle!.send(msg);
    } catch (err) {
      pendingHandlerCalls.delete(runId);
      activeRuns.delete(runId);
      reject(err instanceof Error ? err : new Error(String(err)));
    }
  });
}

/**
 * Phase 9d.3 — per-script latest snapshot of `(Script object, granted
 * permissions, userId)` from the most recent `dispatchRunScript`. Handler
 * fires happen long after the registering run ended, so we need a way to
 * source these values without a live run handy. Each new script run
 * refreshes this map; the snapshot is "freshest values seen since
 * process start" which is good enough — Lumiverse's permission grants
 * don't change often, and `userId` is stable in single-user-mode.
 *
 * The `Script` reference matters for `buildScriptAPI` which reads
 * `script.allowDangerous` (gates http etc.) and `script.id` / `script.name`
 * (used for diagnostics + permission-error messages).
 *
 * Cleared per-script when needed (Phase 9d.3.x cleanup TODO).
 */
interface ScriptDispatchSnapshot {
  script:             Script;
  grantedPermissions: Set<string>;
  userId:             string | null;
}
const lastDispatchByScript = new Map<string, ScriptDispatchSnapshot>();

// ─── Parent-side handler-cleanup table (Phase 9d.3.c) ────────────────────────
//
// Some handler kinds register through the canonical `api.*` and get back a
// cleanup function (e.g. `commands.onInvoked` returns a sync unsub fn). The
// child's `unregister-handler` IPC for those kinds carries only `handlerId`
// (no `name`), so we need to know how to clean up parent-side state from
// just `(scriptId, handlerId)`. This map stores the per-handlerId cleanup
// closures keyed under the registering script.
//
// Used by:
//   - 9d.3.c: `commands.onInvoked` returns an unsub fn from canonical
//             `api.commands.onInvoked` — store it here so unregister-handler
//             can call it.
//   - 9d.3.d (planned): `chat.registerContentProcessor` and
//             `macros.registerInterceptor` also return handle objects with
//             `.remove()` methods — same pattern, store the remove fn here.
//
// Cleanup paths:
//   - explicit unregister-handler IPC: walk + invoke + delete entry
//   - script-unregister IPC: walk all entries for the script + invoke each
const handlerCleanups = new Map<string, Map<string, () => void>>();

// ─── Per-script modal-handle map (Phase 9d.4.b) ──────────────────────────────
//
// `api.ui.showModal()` returns a `ModalHandle` synchronously to user code,
// but the handle's `result` Promise + `close()` method need to dispatch
// IPC. The proxy generates an `openRequestId` upfront child-side and
// threads it through `ShowModalOptions.openRequestId` (an @internal
// field on the canonical interface — see types/script.ts) so the
// canonical impl uses the SAME id. The parent stores the canonical
// handle here keyed by openRequestId; subsequent `ui._modal.awaitResult`
// / `ui._modal.close` IPC requests look up by id.
//
// Per-script scoping prevents cross-script handle leaks (one script's
// open modal can't be referenced by another script via id collision —
// they live in separate maps). Cleared on script-unregister via the
// existing parent-side handler-cleanup path.
const pendingModals = new Map<string, Map<string, ModalHandle>>();

function storePendingModal(scriptId: string, openRequestId: string, handle: ModalHandle): void {
  let scriptModals = pendingModals.get(scriptId);
  if (!scriptModals) {
    scriptModals = new Map();
    pendingModals.set(scriptId, scriptModals);
  }
  scriptModals.set(openRequestId, handle);
}

function lookupPendingModal(scriptId: string, openRequestId: string): ModalHandle | undefined {
  return pendingModals.get(scriptId)?.get(openRequestId);
}

function dropPendingModal(scriptId: string, openRequestId: string): void {
  const scriptModals = pendingModals.get(scriptId);
  if (!scriptModals) return;
  scriptModals.delete(openRequestId);
  if (scriptModals.size === 0) pendingModals.delete(scriptId);
}

// ─── Per-script DOM-handle map (Phase 9d.4.c-1) ──────────────────────────────
//
// `api.ui.dom.inject*()` returns a DOMHandle whose methods (update, remove,
// makeDraggable, injectChild) need to be reachable from the child via IPC.
// The canonical handle is just a closure object — no internal state, just
// methods that close over the elementId. We store the canonical handle here
// keyed by elementId so the child's `'ui._dom.*'` dispatch routes can look
// it up + invoke method-by-name.
//
// Stable-id idempotency note: when the user passes `options.id` and an
// element with that stableId already exists, the canonical's `inject` /
// `injectChild` returns the EXISTING handle (different elementId from
// what would have been newly generated). This is why the proxy's
// `inject*` returns `Promise<DOMHandle>` — the elementId can't be
// pre-generated child-side.
//
// Cleanup paths:
//   - explicit `handle.remove()`: looks up + invokes + drops the entry
//   - `ui.dom.cleanup()`: canonical's `clearByScriptId` tears down DOM
//     state; we drop ALL entries for the script to match
//   - script-unregister IPC (Phase 9f): bulk drop all entries for script
const pendingDomHandles = new Map<string, Map<string, DOMHandle>>();

function storePendingDomHandle(scriptId: string, elementId: string, handle: DOMHandle): void {
  let scriptHandles = pendingDomHandles.get(scriptId);
  if (!scriptHandles) {
    scriptHandles = new Map();
    pendingDomHandles.set(scriptId, scriptHandles);
  }
  scriptHandles.set(elementId, handle);
}

function lookupPendingDomHandle(scriptId: string, elementId: string): DOMHandle | undefined {
  return pendingDomHandles.get(scriptId)?.get(elementId);
}

function dropPendingDomHandle(scriptId: string, elementId: string): void {
  const scriptHandles = pendingDomHandles.get(scriptId);
  if (!scriptHandles) return;
  scriptHandles.delete(elementId);
  if (scriptHandles.size === 0) pendingDomHandles.delete(scriptId);
}

function dropAllPendingDomHandlesForScript(scriptId: string): void {
  pendingDomHandles.delete(scriptId);
}

// ─── Advanced-modal open-confirmation awaiter table (Phase 9d.4.d Option B) ──
//
// Closes the frontend-side race that bit us during initial bring-up: a
// script-runner child fires `setTitle`/`dismiss`/`root.update` immediately
// after `showAdvancedModal` returns, but the frontend hasn't yet processed
// `ls_modal_open` (modals Map empty, DOM element unbound), so the dispatch
// ricochets at empty lookups.
//
// Architecture:
//   1. `handleShowAdvancedModalRequest` calls canonical (which sends
//      `ls_modal_open` to frontend), then blocks api-response on a Promise
//      registered here keyed by modalId.
//   2. Frontend's modal-handler echoes `ls_modal_opened` after `modals.set` +
//      `bindExternalElement` + `handle.onDismiss` are all wired.
//   3. backend.ts's `case 'ls_modal_opened'` calls `notifyAdvancedModalOpened`,
//      which resolves the awaiter — `handleShowAdvancedModalRequest` then
//      returns the api-response, the proxy's open-ack settles, and any
//      queued setTitle/dismiss/root.* dispatches fire.
//
// Failure paths:
//   - Open echo never arrives (WS reconnect drop, etc.) → timeout after
//     `OPEN_AWAIT_TIMEOUT_MS` rejects the awaiter; api-response carries
//     a clear error; proxy's openAck rejects; sync handle flips to
//     dismissed=teardown so user listeners fire cleanly.
//   - Modal dismissed before opened (`ctx.ui.showModal` threw on FE) →
//     `case 'ls_modal_dismissed'` calls `notifyAdvancedModalOpenFailed`,
//     which rejects the awaiter with a "dismissed before open" error.
const pendingAdvancedModalOpens = new Map<string, {
  resolve: () => void;
  reject:  (err: Error) => void;
  timer:   ReturnType<typeof setTimeout>;
}>();

const OPEN_AWAIT_TIMEOUT_MS = 3_000;
// Phase 11.B.2 — test-only override. When non-null, replaces
// OPEN_AWAIT_TIMEOUT_MS in every awaiter's setTimeout AND in their
// timeout error messages. Tests use this to drive timeout paths quickly
// (e.g. 50ms) instead of waiting the production 3s. Cleared by
// `__resetForTests()`.
let openAwaitTimeoutOverride: number | null = null;
function getOpenAwaitTimeoutMs(): number {
  return openAwaitTimeoutOverride ?? OPEN_AWAIT_TIMEOUT_MS;
}

/**
 * Phase 9d.4.d Option B — frontend confirmed the modal is open. Resolves
 * the awaiter so `handleShowAdvancedModalRequest` proceeds to return the
 * api-response. Idempotent on missing modalId (late echo after timeout).
 *
 * Exported for backend.ts's `ls_modal_opened` frontend message handler.
 */
export function notifyAdvancedModalOpened(modalId: string): void {
  const awaiter = pendingAdvancedModalOpens.get(modalId);
  if (!awaiter) return;
  clearTimeout(awaiter.timer);
  pendingAdvancedModalOpens.delete(modalId);
  awaiter.resolve();
}

/**
 * Phase 9d.4.d Option B — open failed BEFORE the frontend could echo
 * `ls_modal_opened` (e.g. `ctx.ui.showModal` threw and the catch path
 * went straight to `ls_modal_dismissed`). Rejects the awaiter so the
 * proxy's openAck rejects and downstream method dispatches are skipped.
 *
 * Exported for backend.ts's `ls_modal_dismissed` frontend message handler.
 * Idempotent on missing modalId.
 */
export function notifyAdvancedModalOpenFailed(modalId: string, reason: string): void {
  const awaiter = pendingAdvancedModalOpens.get(modalId);
  if (!awaiter) return;
  clearTimeout(awaiter.timer);
  pendingAdvancedModalOpens.delete(modalId);
  awaiter.reject(new Error(`api.ui.showAdvancedModal: ${reason}`));
}

function awaitAdvancedModalOpen(modalId: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const timeoutMs = getOpenAwaitTimeoutMs();
    const timer = setTimeout(() => {
      pendingAdvancedModalOpens.delete(modalId);
      reject(new Error(
        `api.ui.showAdvancedModal: open confirmation from frontend timed out after ` +
        `${timeoutMs}ms (frontend may be disconnected; this is rare and usually ` +
        `indicates the WS layer dropped a message during reconnect)`,
      ));
    }, timeoutMs);
    pendingAdvancedModalOpens.set(modalId, { resolve, reject, timer });
  });
}

// ─── Input-bar-action register-confirmation awaiter (Phase 9d.4.e-1-a) ───────
//
// Same Option-B pattern as advanced modals: the canonical's
// `registerInputBarAction` sends `ls_input_bar_action_register` to the
// frontend, and we block the api-response on a `ls_input_bar_action_registered`
// echo confirming the FE side is fully mounted. Without it, a script-runner
// child firing setLabel / setEnabled immediately after register can ricochet
// at the FE's empty `actions` Map if `ls_input_bar_action_register` was
// dropped during a WS reconnect.
//
// Keyed by `${scriptId}:${actionId}` since (scriptId, actionId) is the
// canonical identity for this surface.
const pendingInputBarActionRegisters = new Map<string, {
  resolve: () => void;
  reject:  (err: Error) => void;
  timer:   ReturnType<typeof setTimeout>;
}>();

function ibaKey(scriptId: string, actionId: string): string {
  return `${scriptId}:${actionId}`;
}

/**
 * Phase 9d.4.e-1-a — frontend confirmed the input-bar action is mounted.
 * Resolves the awaiter so `handleRegisterInputBarActionRequest` returns
 * the api-response. Idempotent on missing key (late echo after timeout).
 *
 * Exported for backend.ts's `ls_input_bar_action_registered` handler.
 */
export function notifyInputBarActionRegistered(scriptId: string, actionId: string): void {
  const k = ibaKey(scriptId, actionId);
  const awaiter = pendingInputBarActionRegisters.get(k);
  if (!awaiter) return;
  clearTimeout(awaiter.timer);
  pendingInputBarActionRegisters.delete(k);
  awaiter.resolve();
}

function awaitInputBarActionRegister(scriptId: string, actionId: string): Promise<void> {
  const k = ibaKey(scriptId, actionId);
  return new Promise<void>((resolve, reject) => {
    const timeoutMs = getOpenAwaitTimeoutMs();
    const timer = setTimeout(() => {
      pendingInputBarActionRegisters.delete(k);
      reject(new Error(
        `api.ui.registerInputBarAction: register confirmation from frontend timed out ` +
        `after ${timeoutMs}ms (frontend may be disconnected; this is rare and ` +
        `usually indicates the WS layer dropped a message during reconnect)`,
      ));
    }, timeoutMs);
    pendingInputBarActionRegisters.set(k, { resolve, reject, timer });
  });
}

// ─── Per-script input-bar-action handle map (Phase 9d.4.e-1-a) ──────────────
//
// `api.ui.registerInputBarAction()` returns a sync handle whose methods
// (setLabel / setSubtitle / setEnabled / destroy / onClick) need to be
// reachable from the child via IPC. Same shape as `pendingAdvancedModals`:
// keyed by user-supplied actionId (per script) — no child-generated id
// threading needed since the user supplies `options.id` and the canonical
// honors it directly.
//
// Cleanup paths:
//   - explicit `handle.destroy()`: looks up + invokes + drops the entry.
//   - canonical's per-script teardown (script disable/delete): drops via
//     bulk clear (Phase 9f wires this).
const pendingInputBarActions = new Map<string, Map<string, InputBarActionHandle>>();

function storePendingInputBarAction(scriptId: string, actionId: string, handle: InputBarActionHandle): void {
  let scriptActions = pendingInputBarActions.get(scriptId);
  if (!scriptActions) {
    scriptActions = new Map();
    pendingInputBarActions.set(scriptId, scriptActions);
  }
  scriptActions.set(actionId, handle);
}

function lookupPendingInputBarAction(scriptId: string, actionId: string): InputBarActionHandle | undefined {
  return pendingInputBarActions.get(scriptId)?.get(actionId);
}

function dropPendingInputBarAction(scriptId: string, actionId: string): void {
  const scriptActions = pendingInputBarActions.get(scriptId);
  if (!scriptActions) return;
  scriptActions.delete(actionId);
  if (scriptActions.size === 0) pendingInputBarActions.delete(scriptId);
}

// ─── Float-widget create-confirmation awaiter (Phase 9d.4.e-2-a) ────────────
//
// Same Option-B pattern as advanced modals + input-bar actions. Keyed by
// widgetId (UUID, child-generated and threaded via @internal options field
// — same shape as showAdvancedModal's _modalId).
const pendingFloatWidgetCreates = new Map<string, {
  resolve: () => void;
  reject:  (err: Error) => void;
  timer:   ReturnType<typeof setTimeout>;
}>();

/**
 * Phase 9d.4.e-2-a — frontend confirmed the float widget is mounted.
 * Resolves the awaiter so `handleCreateFloatWidgetRequest` returns the
 * api-response. Idempotent on missing widgetId (late echo after timeout).
 *
 * Exported for backend.ts's `ls_float_widget_created` handler.
 */
export function notifyFloatWidgetCreated(widgetId: string): void {
  const awaiter = pendingFloatWidgetCreates.get(widgetId);
  if (!awaiter) return;
  clearTimeout(awaiter.timer);
  pendingFloatWidgetCreates.delete(widgetId);
  awaiter.resolve();
}

function awaitFloatWidgetCreate(widgetId: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const timeoutMs = getOpenAwaitTimeoutMs();
    const timer = setTimeout(() => {
      pendingFloatWidgetCreates.delete(widgetId);
      reject(new Error(
        `api.ui.createFloatWidget: create confirmation from frontend timed out after ` +
        `${timeoutMs}ms (frontend may be disconnected; this is rare and usually ` +
        `indicates the WS layer dropped a message during reconnect)`,
      ));
    }, timeoutMs);
    pendingFloatWidgetCreates.set(widgetId, { resolve, reject, timer });
  });
}

// ─── Per-script float-widget handle map (Phase 9d.4.e-2-a) ──────────────────
//
// Same shape as `pendingAdvancedModals` and `pendingInputBarActions`.
// Keyed by widgetId per script.
const pendingFloatWidgets = new Map<string, Map<string, FloatWidgetHandle>>();

function storePendingFloatWidget(scriptId: string, widgetId: string, handle: FloatWidgetHandle): void {
  let scriptWidgets = pendingFloatWidgets.get(scriptId);
  if (!scriptWidgets) {
    scriptWidgets = new Map();
    pendingFloatWidgets.set(scriptId, scriptWidgets);
  }
  scriptWidgets.set(widgetId, handle);
}

function lookupPendingFloatWidget(scriptId: string, widgetId: string): FloatWidgetHandle | undefined {
  return pendingFloatWidgets.get(scriptId)?.get(widgetId);
}

function dropPendingFloatWidget(scriptId: string, widgetId: string): void {
  const scriptWidgets = pendingFloatWidgets.get(scriptId);
  if (!scriptWidgets) return;
  scriptWidgets.delete(widgetId);
  if (scriptWidgets.size === 0) pendingFloatWidgets.delete(scriptId);
}

// ─── Drawer-tab register-confirmation awaiter (Phase 9d.4.e-3-a) ────────────
//
// Same Option-B pattern as the other registered UI surfaces. Keyed by
// `${scriptId}:${tabId}` since (scriptId, tabId) is the canonical identity.
const pendingDrawerTabRegisters = new Map<string, {
  resolve: () => void;
  reject:  (err: Error) => void;
  timer:   ReturnType<typeof setTimeout>;
}>();

function dtKey(scriptId: string, tabId: string): string {
  return `${scriptId}:${tabId}`;
}

/**
 * Phase 9d.4.e-3-a — frontend confirmed the drawer tab is mounted.
 * Resolves the awaiter so `handleRegisterDrawerTabRequest` returns the
 * api-response. Idempotent on missing key (late echo after timeout).
 *
 * Exported for backend.ts's `ls_drawer_tab_registered` handler.
 */
export function notifyDrawerTabRegistered(scriptId: string, tabId: string): void {
  const k = dtKey(scriptId, tabId);
  const awaiter = pendingDrawerTabRegisters.get(k);
  if (!awaiter) return;
  clearTimeout(awaiter.timer);
  pendingDrawerTabRegisters.delete(k);
  awaiter.resolve();
}

function awaitDrawerTabRegister(scriptId: string, tabId: string): Promise<void> {
  const k = dtKey(scriptId, tabId);
  return new Promise<void>((resolve, reject) => {
    const timeoutMs = getOpenAwaitTimeoutMs();
    const timer = setTimeout(() => {
      pendingDrawerTabRegisters.delete(k);
      reject(new Error(
        `api.ui.registerDrawerTab: register confirmation from frontend timed out ` +
        `after ${timeoutMs}ms (frontend may be disconnected; this is rare and ` +
        `usually indicates the WS layer dropped a message during reconnect)`,
      ));
    }, timeoutMs);
    pendingDrawerTabRegisters.set(k, { resolve, reject, timer });
  });
}

// ─── Per-script drawer-tab handle map (Phase 9d.4.e-3-a) ────────────────────
const pendingDrawerTabs = new Map<string, Map<string, DrawerTabHandle>>();

function storePendingDrawerTab(scriptId: string, tabId: string, handle: DrawerTabHandle): void {
  let scriptTabs = pendingDrawerTabs.get(scriptId);
  if (!scriptTabs) {
    scriptTabs = new Map();
    pendingDrawerTabs.set(scriptId, scriptTabs);
  }
  scriptTabs.set(tabId, handle);
}

function lookupPendingDrawerTab(scriptId: string, tabId: string): DrawerTabHandle | undefined {
  return pendingDrawerTabs.get(scriptId)?.get(tabId);
}

function dropPendingDrawerTab(scriptId: string, tabId: string): void {
  const scriptTabs = pendingDrawerTabs.get(scriptId);
  if (!scriptTabs) return;
  scriptTabs.delete(tabId);
  if (scriptTabs.size === 0) pendingDrawerTabs.delete(scriptId);
}

/**
 * Phase 9d.4.e-2-b — send a `FloatWidgetPositionNotice` to the script-
 * runner child so its proxy-side position cache stays in sync with the
 * canonical's after a user drag.
 *
 * Fired from `backend.ts`'s `ls_float_widget_drag_end` handler BEFORE
 * `dispatchWidgetDragEnd` runs, so the notice arrives at the child first
 * (FIFO IPC). Any user `onDragEnd` handler subsequently invoked via
 * `RunHandlerRequest` then observes the updated `positionCache` when it
 * calls `handle.getPosition()`.
 *
 * Idempotent on missing childHandle (script-runner not running) — drops
 * silently. The next time the script-runner starts, the proxy's cache
 * will be re-initialised from the user's `initialPosition` and stays
 * accurate via this notice from then on.
 */
export function sendFloatWidgetPositionNotice(widgetId: string, x: number, y: number): void {
  if (!childHandle) return;
  const notice: FloatWidgetPositionNotice = {
    type:     'float-widget-position',
    widgetId,
    x,
    y,
  };
  try { childHandle.send(notice); } catch (err) {
    spindle.log.warn(
      `[script-runner] float-widget-position send failed for ${widgetId}: ${String(err)}`,
    );
  }
}

// ─── Per-script advanced-modal-handle map (Phase 9d.4.d) ─────────────────────
//
// `api.ui.showAdvancedModal()` returns a sync `AdvancedModalHandle` whose
// methods (setTitle, dismiss, dismissed-getter, onDismiss) need to be
// reachable from the child. Same shape as `pendingModals` but for the
// DOM-owned advanced-modal kind: keyed by modalId (child-generated and
// threaded via `options._modalId` so the canonical uses the same id).
//
// The handle's `.root` is a DOMHandle bound to `rootElementId` (also
// child-generated, threaded via `options._rootElementId`). We re-use the
// existing `pendingDomHandles` machinery for the `.root` surface — when
// `handleShowAdvancedModalRequest` fires, it stores the modal under
// modalId here AND stores the canonical `.root` handle under rootElementId
// in `pendingDomHandles`. From the child's side, the proxy constructs a
// DOMHandle proxy keyed by rootElementId; that proxy's `'ui._dom.*'`
// dispatches resolve via the existing DOM-handle path with no extra logic.
//
// Cleanup paths:
//   - explicit `handle.dismiss()`: looks up + invokes; canonical fires
//     `markPendingDismissal('script')` and frontend echoes back; the
//     bus-like onDismiss listener registered at open time then fires the
//     `advanced-modal-dismissed` IPC; the child drops its own state.
//     Parent-side: when the dismiss IPC has fired, drop here.
//   - canonical's per-script teardown: same path, just with reason='teardown'.
//   - script-unregister IPC (Phase 9f): bulk drop all entries.
const pendingAdvancedModals = new Map<string, Map<string, AdvancedModalHandle>>();

function storePendingAdvancedModal(scriptId: string, modalId: string, handle: AdvancedModalHandle): void {
  let scriptModals = pendingAdvancedModals.get(scriptId);
  if (!scriptModals) {
    scriptModals = new Map();
    pendingAdvancedModals.set(scriptId, scriptModals);
  }
  scriptModals.set(modalId, handle);
}

function lookupPendingAdvancedModal(scriptId: string, modalId: string): AdvancedModalHandle | undefined {
  return pendingAdvancedModals.get(scriptId)?.get(modalId);
}

function dropPendingAdvancedModal(scriptId: string, modalId: string): void {
  const scriptModals = pendingAdvancedModals.get(scriptId);
  if (!scriptModals) return;
  scriptModals.delete(modalId);
  if (scriptModals.size === 0) pendingAdvancedModals.delete(scriptId);
}

function recordHandlerCleanup(scriptId: string, handlerId: string, cleanup: () => void): void {
  let scriptCleanups = handlerCleanups.get(scriptId);
  if (!scriptCleanups) {
    scriptCleanups = new Map();
    handlerCleanups.set(scriptId, scriptCleanups);
  }
  scriptCleanups.set(handlerId, cleanup);
}

function invokeAndDropHandlerCleanup(scriptId: string, handlerId: string): boolean {
  const scriptCleanups = handlerCleanups.get(scriptId);
  if (!scriptCleanups) return false;
  const cleanup = scriptCleanups.get(handlerId);
  if (!cleanup) return false;
  try { cleanup(); } catch (err) {
    spindle.log.warn(`[script-runner] handler cleanup threw for ${scriptId}/${handlerId}: ${String(err)}`);
  }
  scriptCleanups.delete(handlerId);
  if (scriptCleanups.size === 0) handlerCleanups.delete(scriptId);
  return true;
}

const pendingRuns = new Map<string, PendingRun>();
const activeRuns  = new Map<string, ActiveRun>();

// ─── Script-body activeRun tracking (Phase 9d.4.x — script-body lifecycle parity) ──
//
// Maps `scriptId` → the runId of the latest script-body dispatchRunScript run
// that produced an activeRuns entry. Used to:
//
//   1. Drop the previous run's activeRun when a NEW run starts for the same
//      script (in `dispatchRunScript`). The previous run's setInterval /
//      setTimeout / promise-chain continuations are conceptually orphaned by
//      re-execution; their late dispatches will fail with `RunCompletedError`.
//
//   2. Drop the latest run's activeRun when the script is unregistered (in
//      `unregisterScriptFromChild`).
//
// Why this is needed: Phase 9d.3 already keeps child-side proxies alive past
// `run-result` so registered handlers (macros, tools, interceptors, etc.) can
// continue dispatching after their registering run ends. Without this map the
// parent-side activeRun was deleted on `run-result` (asymmetric with the
// child), which broke ANY post-run async work in the script body — most
// visibly `setInterval(() => tab.root.update(...))`-style live-rendering
// patterns where the periodic dispatch silently `RunCompletedError`s.
//
// Handler-fire ephemeral activeRuns (created by `sendRunHandlerRequest` and
// keyed by per-fire `handler-…` runIds) are NOT tracked here — those keep
// their original delete-on-handler-result semantics. They're bounded per-fire
// and shouldn't outlive the fire.
const scriptBodyActiveRunByScript = new Map<string, string>();

let nextRunSeq = 1;

function generateRunId(): string {
  return `run-${Date.now()}-${nextRunSeq++}`;
}

// ─── Inbound message routing ────────────────────────────────────────────────

function handleChildMessage(payload: unknown): void {
  // Defensive: validate shape before narrowing — payloads cross IPC and
  // could in principle be corrupted or malformed.
  if (
    !payload ||
    typeof payload !== 'object' ||
    typeof (payload as { type?: unknown }).type !== 'string'
  ) {
    spindle.log.warn('[script-runner] discarded malformed child message');
    return;
  }
  const msg = payload as ChildToParentMessage;

  switch (msg.type) {
    case 'run-result': {
      const pending = pendingRuns.get(msg.runId);
      if (!pending) {
        spindle.log.warn(`[script-runner] orphan run-result for ${msg.runId} (caller already gone)`);
        return;
      }
      pendingRuns.delete(msg.runId);
      // Phase 9d.4.x — do NOT delete activeRuns here. Script-body async work
      // scheduled BEFORE run-result but firing AFTER (setInterval ticks,
      // setTimeout callbacks, .then chains on long-tail promises) needs the
      // run's api object to remain dispatchable, mirroring the Phase 9d.3
      // child-side proxy lifetime. Drop happens in:
      //   - `dispatchRunScript` when a new run starts for the same script
      //     (the previous run's leftover async work is orphaned by re-execution).
      //   - `unregisterScriptFromChild` on script disable / delete.
      //   - `handleLifecycle` `failed` / `timed_out` arms on child crash.
      pending.resolve(msg);
      break;
    }

    case 'script-running': {
      // The dispatchRunScript call already populated activeRuns at dispatch
      // time (it needs the api there for the api-proxy lookup path); this
      // notice just refines `startedAt` with the child's actual run-start
      // timestamp rather than the dispatch-side stamp. Useful diagnostic
      // when the IPC adds noticeable latency.
      const existing = activeRuns.get(msg.runId);
      if (existing) existing.startedAt = msg.startedAt;
      break;
    }

    case 'api-request':
      void handleApiRequest(msg);
      break;

    case 'broadcast-subscribe':
      handleBroadcastSubscribe(msg);
      break;

    case 'broadcast-unsubscribe':
      handleBroadcastUnsubscribe(msg);
      break;

    case 'abort-request':
      handleAbortRequest(msg);
      break;

    case 'console-entry':
      handleConsoleEntry(msg);
      break;

    case 'register-handler':
      handleRegisterHandler(msg);
      break;

    case 'unregister-handler':
      handleUnregisterHandler(msg);
      break;

    case 'handler-result':
      handleHandlerResultMessage(msg);
      break;

    default:
      break;
  }
}

/**
 * Phase 9d.3.a — child registered a function-handler (e.g.
 * `api.macros.register('foo', def, handler)`). Build a wrapper closure
 * that forwards fires from the host's macro engine back to the child via
 * `RunHandlerRequest` IPC, then call the canonical `api.macros.register`
 * to register the wrapper with the host.
 *
 * `runId` on the message identifies the active run that issued the
 * registration call. We look up the run's api object and call its
 * `register` directly — that way the canonical impl handles all the
 * usual side effects (addMacro store mutation, spindle.registerMacro,
 * `macrosRegisteredThisRun` tracking, `onMacrosChanged` Status-tab kick,
 * `ls:macro:registered` broadcast emit).
 *
 * If the run is gone (rare race — registration arrives after run-end),
 * fall back to a "snapshot" path that builds a fresh api just for the
 * registration. That path is correct but doesn't track via
 * `*RegisteredThisRun` (impossible — no current run). Acceptable —
 * stale-diff cleanup at NEXT run will handle it.
 */
function handleRegisterHandler(msg: RegisterHandler): void {
  switch (msg.kind) {
    case 'macro': {
      const wrapper = (ctx: MacroContext): string | Promise<string> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'macro',
          [ctx],
          // Per-fire timeout — match canonical 60s default. Phase 9d.3.x
          // can pull this from settings if needed.
          60_000,
        ).then((result) => {
          if (!result.ok) {
            // Handler threw / timed out. Surface via thrown Error so
            // canonical macro-engine error path runs (logs + diagnostics).
            throw new Error(result.error?.message ?? 'macro handler failed');
          }
          // MacroHandler return is `string | Promise<string>` per the canonical
          // interface; serialize whatever the user returned. Numbers / booleans
          // are coerced like the canonical engine does (`String(rawResult)`).
          return String(result.value ?? '');
        });

      const active = activeRuns.get(msg.runId);
      if (active) {
        // Canonical path: call api.macros.register on the run's api.
        // Tracks in macrosRegisteredThisRun, fires onMacrosChanged, etc.
        try {
          active.api.macros.register(msg.name, msg.def, wrapper);
        } catch (err) {
          spindle.log.warn(
            `[script-runner] macros.register failed for "${msg.name}" (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        spindle.log.warn(
          `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
          `registration skipped (script ${msg.scriptId})`,
        );
      }
      break;
    }

    case 'tool': {
      // Phase 9d.3.b — wrapper for ToolHandler signature `(args, api, ctx?)`.
      // The canonical `api/tools.ts:register` wraps the user's handler so
      // host-side invocation calls `wrappedHandler(args, ctx)` and the
      // wrapper itself injects the live api. Mirror that here: our
      // outer wrapper takes (args, ctx?) from the host and dispatches
      // through `sendRunHandlerRequest` with `[args, ctx]` as IPC args.
      // The child-side wrapper (registered at proxy build time) injects
      // the proxy's api as positional arg 1 before invoking the user
      // closure.
      const wrapper = (
        args:    ToolInvocationArgs,
        // The canonical api.tools.register wraps user handlers to inject
        // the parent-side api here via `getApi()`. We ignore the parent
        // api — the child-side wrapper injects the proxy's api instead,
        // which is what user closures actually need (it dispatches through
        // their proxy back to per-fire ephemeral runs). Parameter is
        // retained for ToolHandler-signature compatibility.
        _parentApi: LumiScriptAPI,
        ctxArg?:  ToolInvocationContext,
      ): string | Promise<string> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'tool',
          // Pass undefined explicitly when no ctx — JSON.stringify drops
          // it from the wire, child-side `handlerArgs[1]` is undefined.
          ctxArg !== undefined ? [args, ctxArg] : [args],
          60_000,
        ).then((result) => {
          if (!result.ok) {
            throw new Error(result.error?.message ?? 'tool handler failed');
          }
          // ToolHandler returns string per the canonical interface; coerce
          // defensively in case the user closure returned non-string.
          return String(result.value ?? '');
        });

      const active = activeRuns.get(msg.runId);
      if (active) {
        try {
          active.api.tools.register(msg.name, msg.def, wrapper);
        } catch (err) {
          spindle.log.warn(
            `[script-runner] tools.register failed for "${msg.name}" (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        spindle.log.warn(
          `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
          `registration skipped (script ${msg.scriptId})`,
        );
      }
      break;
    }

    case 'commandsOnInvoked': {
      // Phase 9d.3.c — wrapper for command-palette dispatch. Canonical
      // `commands.onInvoked` handler signature: `(commandId, ctx) => void | Promise<void>`.
      // Return value is unused (commands fire-and-forget from the host's
      // perspective), so the wrapper doesn't need to coerce a return.
      // Errors thrown by the user closure surface as rejected promises in
      // the canonical onInvoked path; we propagate via thrown Error.
      const wrapper = (
        commandId: string,
        commandCtx: { route: string; chatId?: string; characterId?: string; isGroupChat?: boolean },
      ): void | Promise<void> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'commandsOnInvoked',
          [commandId, commandCtx],
          60_000,
        ).then((result) => {
          if (!result.ok) {
            throw new Error(result.error?.message ?? 'commands.onInvoked handler failed');
          }
          // void return — discard result.value (canonical interface
          // returns nothing meaningful).
        });

      const active = activeRuns.get(msg.runId);
      if (active) {
        try {
          // Canonical `commands.onInvoked(handler)` returns a sync unsub fn.
          // Store it under the handlerId so `unregister-handler` (or
          // `script-unregister`) can clean up parent-side state.
          const canonicalUnsub = active.api.commands.onInvoked(wrapper);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
        } catch (err) {
          spindle.log.warn(
            `[script-runner] commands.onInvoked failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        spindle.log.warn(
          `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
          `registration skipped (script ${msg.scriptId})`,
        );
      }
      break;
    }

    case 'macroInterceptor': {
      // Phase 9d.3.d — handler signature: (ctx) => string | void | Promise<…>.
      // Return string → replaces template; void/undefined → pass-through.
      const wrapper = (
        interceptorCtx: import('../types/script.js').MacroInterceptorCtx,
      ): string | void | Promise<string | void> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'macroInterceptor',
          [interceptorCtx],
          // Per-fire timeout matches the canonical `MacroInterceptorOptions.timeoutMs`
          // default (2000ms — same as `macro-interceptor-registry.ts:DEFAULT_TIMEOUT_MS`).
          // Per-options override could land here in 9d.3.x.
          msg.options?.timeoutMs ?? 2_000,
        ).then((result) => {
          if (!result.ok) {
            // Canonical interceptors swallow errors and pass through (per
            // the registry's per-handler try/catch). Mirror that — log
            // for diagnostic visibility but don't propagate.
            spindle.log.warn(
              `[script-runner] macroInterceptor handler threw for ${msg.scriptId}: ${result.error?.message ?? 'unknown'}`,
            );
            return undefined;
          }
          // Coerce: canonical accepts string or void/undefined return.
          // Anything else gets coerced to undefined (pass-through).
          return typeof result.value === 'string' ? result.value : undefined;
        });

      const active = activeRuns.get(msg.runId);
      if (active) {
        try {
          // Canonical `macros.registerInterceptor(handler, options)` returns
          // a `{id, remove}` handle. We forward the `options.id = handlerId`
          // override (set by the proxy) so the canonical id matches our
          // handlerId, making `removeEntry(scriptId, handlerId)` valid.
          const canonicalHandle = active.api.macros.registerInterceptor(wrapper, msg.options);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, () => canonicalHandle.remove());
        } catch (err) {
          spindle.log.warn(
            `[script-runner] macros.registerInterceptor failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        spindle.log.warn(
          `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
          `registration skipped (script ${msg.scriptId})`,
        );
      }
      break;
    }

    case 'contentProcessor': {
      // Phase 9d.3.d — handler signature: (ctx) => void | {content?, extra?} | Promise<…>.
      // The host's content-processor chain only invokes the handler for
      // user-initiated mutations (api.chat.* writes are exempt — see
      // canonical doc on `registerContentProcessor`).
      const wrapper = (
        processorCtx: import('../types/script.js').MessageContentProcessorCtx,
      ): void | { content?: string; extra?: Record<string, unknown> } | Promise<void | { content?: string; extra?: Record<string, unknown> }> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'contentProcessor',
          [processorCtx],
          // Same default as the macroInterceptor case — fast hot path.
          (msg.options as { timeoutMs?: number } | undefined)?.timeoutMs ?? 2_000,
        ).then((result) => {
          if (!result.ok) {
            spindle.log.warn(
              `[script-runner] contentProcessor handler threw for ${msg.scriptId}: ${result.error?.message ?? 'unknown'}`,
            );
            return undefined;
          }
          // Canonical accepts void or {content?, extra?}; anything else
          // coerces to undefined (pass-through, no transform applied).
          if (result.value === undefined || result.value === null) return undefined;
          if (typeof result.value === 'object') {
            return result.value as { content?: string; extra?: Record<string, unknown> };
          }
          return undefined;
        });

      const active = activeRuns.get(msg.runId);
      if (active) {
        try {
          const canonicalHandle = active.api.chat.registerContentProcessor(wrapper, msg.options);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, () => canonicalHandle.remove());
        } catch (err) {
          spindle.log.warn(
            `[script-runner] chat.registerContentProcessor failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        spindle.log.warn(
          `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
          `registration skipped (script ${msg.scriptId})`,
        );
      }
      break;
    }

    case 'domEventListener': {
      // Phase 9d.4.c-2 — handler signature: (data: DOMEventData) => void.
      // Fires when the frontend dispatches a real DOM event matching this
      // listener's element + event name. Same handler-IPC pattern as
      // commandsOnInvoked but scoped per-element rather than per-script:
      // we look up the canonical DOMHandle by elementId and call its
      // `.on(event, wrapper, options)`, storing the canonical unsub fn
      // under handlerId so unregister-handler can drop it.
      const wrapper = (data: DOMEventData): void => {
        // Fire-and-forget at this layer. The handler-result IPC carries
        // the user closure's void return; we don't need it. If the
        // closure throws, sendRunHandlerRequest's promise rejects —
        // log + drop (matches canonical's "errors caught so one bad
        // handler can't break the others" pattern).
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'domEventListener',
          [data],
          5_000,
        ).catch((err) => {
          spindle.log.warn(
            `[script-runner] DOMHandle.on handler threw for ${msg.scriptId} ` +
            `(elementId=${msg.elementId}, event=${msg.event}): ${String(err)}`,
          );
        });
      };

      const canonicalHandle = lookupPendingDomHandle(msg.scriptId, msg.elementId);
      if (!canonicalHandle) {
        spindle.log.warn(
          `[script-runner] register-handler kind=domEventListener: DOM handle ` +
          `${msg.elementId} not found (already removed or owned by a different script)`,
        );
        break;
      }
      try {
        const canonicalUnsub = canonicalHandle.on(msg.event, wrapper, msg.options);
        recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] DOMHandle.on failed (script ${msg.scriptId}, ` +
          `elementId=${msg.elementId}, event=${msg.event}): ${String(err)}`,
        );
      }
      break;
    }

    case 'inputBarActionClick': {
      // Phase 9d.4.e-1-b — handler signature: () => void. Fires when the
      // user clicks the action row in the FE Extras popover, echoes through
      // `dispatchActionClick(scriptId, actionId)` which fans out to every
      // wrapper in the action's clickHandlers Set. Same handler-IPC pattern
      // as DOMHandle.on but scoped per-action via actionId lookup.
      //
      // 5_000ms timeout matches DOMHandle.on (event-handler-fast-path budget).
      // Click handlers should be near-instant; longer-running work belongs
      // in a deferred async task the user kicks off from inside the handler.
      const wrapper = (): void => {
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'inputBarActionClick',
          [],
          5_000,
        ).catch((err) => {
          spindle.log.warn(
            `[script-runner] InputBarActionHandle.onClick handler threw for ${msg.scriptId} ` +
            `(actionId=${msg.actionId}): ${String(err)}`,
          );
        });
      };

      const canonicalHandle = lookupPendingInputBarAction(msg.scriptId, msg.actionId);
      if (!canonicalHandle) {
        spindle.log.warn(
          `[script-runner] register-handler kind=inputBarActionClick: input-bar action ` +
          `${msg.actionId} not found (already destroyed or owned by a different script)`,
        );
        break;
      }
      try {
        // Canonical's `handle.onClick(wrapper)` returns a sync unsub fn
        // (or `() => {}` if the canonical handle is `destroyed`). Either
        // way we store it under handlerId for the unregister path —
        // `() => {}` is harmless to call.
        const canonicalUnsub = canonicalHandle.onClick(wrapper);
        recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] InputBarActionHandle.onClick failed (script ${msg.scriptId}, ` +
          `actionId=${msg.actionId}): ${String(err)}`,
        );
      }
      break;
    }

    case 'floatWidgetDragEnd': {
      // Phase 9d.4.e-2-b — handler signature: (pos: {x, y}) => void.
      // Fires once per `ls_float_widget_drag_end` echo from the FE.
      // Position-cache sync is handled SEPARATELY via
      // `sendFloatWidgetPositionNotice` fired from backend.ts BEFORE
      // `dispatchWidgetDragEnd` — so the user's onDragEnd closure
      // observes the updated position when it reads `handle.getPosition()`.
      //
      // 5_000ms timeout matches DOMHandle.on. Drag handlers are typically
      // fast (commit position to storage, redraw, etc.); longer work
      // should be deferred via api.utils.wait or a user-driven async path.
      const wrapper = (pos: { x: number; y: number }): void => {
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'floatWidgetDragEnd',
          [pos],
          5_000,
        ).catch((err) => {
          spindle.log.warn(
            `[script-runner] FloatWidgetHandle.onDragEnd handler threw for ${msg.scriptId} ` +
            `(widgetId=${msg.widgetId}): ${String(err)}`,
          );
        });
      };

      const canonicalHandle = lookupPendingFloatWidget(msg.scriptId, msg.widgetId);
      if (!canonicalHandle) {
        spindle.log.warn(
          `[script-runner] register-handler kind=floatWidgetDragEnd: float widget ` +
          `${msg.widgetId} not found (already destroyed or owned by a different script)`,
        );
        break;
      }
      try {
        const canonicalUnsub = canonicalHandle.onDragEnd(wrapper);
        recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] FloatWidgetHandle.onDragEnd failed (script ${msg.scriptId}, ` +
          `widgetId=${msg.widgetId}): ${String(err)}`,
        );
      }
      break;
    }

    case 'drawerTabActivate': {
      // Phase 9d.4.e-3-b — handler signature: () => void. Fires when the
      // user switches to the tab via sidebar click, command-palette
      // selection, or programmatic `handle.activate()`. Same handler-IPC
      // pattern as inputBarActionClick but scoped per-tab via tabId lookup.
      //
      // 5_000ms timeout matches DOMHandle.on. Activation handlers are
      // typically fast (refresh tab content, mark the tab as seen, etc.);
      // longer work belongs in a deferred async task.
      const wrapper = (): void => {
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'drawerTabActivate',
          [],
          5_000,
        ).catch((err) => {
          spindle.log.warn(
            `[script-runner] DrawerTabHandle.onActivate handler threw for ${msg.scriptId} ` +
            `(tabId=${msg.tabId}): ${String(err)}`,
          );
        });
      };

      const canonicalHandle = lookupPendingDrawerTab(msg.scriptId, msg.tabId);
      if (!canonicalHandle) {
        spindle.log.warn(
          `[script-runner] register-handler kind=drawerTabActivate: drawer tab ` +
          `${msg.tabId} not found (already destroyed or owned by a different script)`,
        );
        break;
      }
      try {
        // Canonical's `handle.onActivate(wrapper)` returns a sync unsub
        // (or `() => {}` if the canonical handle is `destroyed`).
        const canonicalUnsub = canonicalHandle.onActivate(wrapper);
        recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] DrawerTabHandle.onActivate failed (script ${msg.scriptId}, ` +
          `tabId=${msg.tabId}): ${String(err)}`,
        );
      }
      break;
    }
  }
}

/**
 * Phase 9d.3.a — child unregistered a function-handler.
 * For `kind: 'macro'` + `name`-based unregister: directly mirror the
 * canonical `api.macros.unregister` cleanup (macro store removal,
 * spindle.unregisterMacro, broadcast emit). The canonical impl is a
 * static function on the macro store; no api object needed.
 */
function handleUnregisterHandler(msg: UnregisterHandler): void {
  switch (msg.kind) {
    case 'macro': {
      if (msg.name === undefined) {
        spindle.log.warn(`[script-runner] unregister-handler kind=macro missing name`);
        return;
      }
      if (macroStoreRemove(msg.name, msg.scriptId)) {
        try { spindle.unregisterMacro(msg.name); } catch { /* swallow — host may have already cleaned up */ }
        busEmit('ls:macro:unregistered', { name: msg.name, scriptId: msg.scriptId });
      }
      break;
    }

    case 'tool': {
      if (msg.name === undefined) {
        spindle.log.warn(`[script-runner] unregister-handler kind=tool missing name`);
        return;
      }
      if (toolStoreRemove(msg.name, msg.scriptId)) {
        try { spindle.unregisterTool(msg.name); } catch { /* swallow — host may have already cleaned up */ }
        busEmit('ls:tool:unregistered', { name: msg.name, scriptId: msg.scriptId });
      }
      break;
    }

    case 'commandsOnInvoked': {
      // Phase 9d.3.c — handlerId-based unregister (no `name` for this kind).
      // Looks up the canonical unsub fn that `handleRegisterHandler` stored
      // when the registration landed, calls it, drops the entry.
      if (msg.handlerId === undefined) {
        spindle.log.warn(`[script-runner] unregister-handler kind=commandsOnInvoked missing handlerId`);
        return;
      }
      // Idempotent — calling on an already-cleaned handlerId is a no-op.
      invokeAndDropHandlerCleanup(msg.scriptId, msg.handlerId);
      break;
    }

    case 'macroInterceptor':
    case 'contentProcessor':
    case 'domEventListener':
    case 'inputBarActionClick':
    case 'floatWidgetDragEnd':
    case 'drawerTabActivate': {
      // Phase 9d.3.d / 9d.4.c-2 / 9d.4.e-1-b / 9d.4.e-2-b / 9d.4.e-3-b
      // — same shape as commandsOnInvoked: handlerId-based, canonical's
      // unsub fn (or `handle.remove()`) was stored under handlerId.
      if (msg.handlerId === undefined) {
        spindle.log.warn(`[script-runner] unregister-handler kind=${msg.kind} missing handlerId`);
        return;
      }
      invokeAndDropHandlerCleanup(msg.scriptId, msg.handlerId);
      break;
    }
  }
}

/**
 * Route a handler-result back to the wrapper closure that's awaiting it.
 * Mirrors the existing `run-result` routing pattern. Drops the pending
 * entry and the ephemeral `activeRun` registered for this fire.
 */
function handleHandlerResultMessage(msg: HandlerResult): void {
  const pending = pendingHandlerCalls.get(msg.runId);
  if (!pending) {
    spindle.log.warn(`[script-runner] orphan handler-result for ${msg.runId}`);
    return;
  }
  pendingHandlerCalls.delete(msg.runId);
  activeRuns.delete(msg.runId);
  pending.resolve(msg);
}

// `sendRunHandlerRequest` reads the per-script Script from
// `lastDispatchByScript` directly — no synthesis fallback needed here
// since handler fires can only happen for scripts that have at least one
// dispatched run on record (the registration itself comes from a run).

/**
 * Route a console entry from the child to the originating run's
 * `onConsole` callback. Entries for runs that have already completed
 * (rare — would mean a long-tail promise resolved post-result) drop
 * silently. Entries without a registered callback (e.g. legacy callers
 * that didn't supply one) also drop silently — matches the in-process
 * executor's behaviour when `onConsole` is undefined.
 */
function handleConsoleEntry(msg: ConsoleEntryNotice): void {
  const active = activeRuns.get(msg.runId);
  if (!active || !active.onConsole) return;
  try {
    active.onConsole(msg.entry);
  } catch (err) {
    // A misbehaving onConsole shouldn't break the dispatcher. Log once
    // and drop; user-visible diagnostics surface through whatever
    // mechanism the caller's onConsole was supposed to drive anyway.
    spindle.log.warn(`[script-runner] onConsole threw for ${msg.scriptId}: ${String(err)}`);
  }
}

/**
 * Child requested abort of an in-flight api call. Look up the
 * AbortController, call .abort(), drop the entry. Idempotent on missing
 * (response may have already arrived; controller dropped; the abort is
 * a no-op).
 */
function handleAbortRequest(msg: AbortRequest): void {
  const controller = abortControllers.get(msg.requestId);
  if (!controller) return; // unknown / already-cleaned — no-op
  controller.abort();
  abortControllers.delete(msg.requestId);
}

/**
 * Child registered a broadcast subscription. Register a forwarder on the
 * real bus that, when fired, sends a `BroadcastFireMessage` to the child
 * with the payload. Track the bus-unsubscribe under (scriptId, subId) so
 * an explicit unsubscribe from the child can drop it cleanly.
 */
function handleBroadcastSubscribe(msg: BroadcastSubscribeMessage): void {
  const unsubFromBus = busOn(
    msg.event,
    (payload) => {
      sendBroadcastFireToChild({
        type:     'broadcast-fire',
        scriptId: msg.scriptId,
        subId:    msg.subId,
        event:    msg.event,
        payload,
      });
    },
    msg.scriptId,
  );
  getOrCreateForwarderTable(msg.scriptId).set(msg.subId, unsubFromBus);
}

/**
 * Child explicitly unsubscribed a single subscription. Look up the bus
 * unsubscribe and call it; drop the tracking entry.
 */
function handleBroadcastUnsubscribe(msg: BroadcastUnsubscribeMessage): void {
  const table = broadcastForwarders.get(msg.scriptId);
  if (!table) return;
  const unsubFromBus = table.get(msg.subId);
  if (unsubFromBus) {
    unsubFromBus();
    table.delete(msg.subId);
  }
  if (table.size === 0) broadcastForwarders.delete(msg.scriptId);
}

function sendBroadcastFireToChild(msg: BroadcastFireMessage): void {
  if (!childHandle) return;
  try {
    childHandle.send(msg);
  } catch (err) {
    spindle.log.warn(`[script-runner] broadcast-fire send failed: ${String(err)}`);
  }
}

/**
 * Handle an `api-request` from the child by routing it to the live api
 * for the requesting run, then sending the response back over IPC.
 *
 * Self-contained: any error during dispatch becomes a failure response
 * rather than throwing here. The child's pending-request map will reject
 * the user-script's awaited promise with the corresponding `Error`.
 */
async function handleApiRequest(req: ApiProxyRequest): Promise<void> {
  const active = activeRuns.get(req.runId);
  if (!active) {
    // Late request — run already completed (its activeRuns entry was
    // dropped). Send back a clear error so the child's pending-map can
    // reject any still-awaiting promise.
    sendApiResponse(req.requestId, {
      type:      'api-response',
      requestId: req.requestId,
      ok:        false,
      error: {
        name:    'RunCompletedError',
        message: `api-proxy host: run ${req.runId} no longer active (api call arrived after run completion)`,
      },
    });
    return;
  }

  // Build handle helpers backed by this run's transient table AND this
  // script's persistent table. `registerHandle` picks the right table by
  // looking up the kind's lifecycle classification; `resolveHandle`
  // checks both (transient first since per-run lookups are slightly more
  // common in v1 user code).
  const persistentTable = getOrCreatePersistentTable(active.scriptId);

  const helpers: HandleHelpers = {
    resolveHandle: (ref: HandleRef) => {
      // Transient first (per-run scope).
      const transientEntry = active.handles.get(ref.id);
      if (transientEntry && transientEntry.kind === ref.kind) {
        return transientEntry.obj;
      }
      // Then persistent (per-script scope).
      const persistentEntry = persistentTable.get(ref.id);
      if (persistentEntry && persistentEntry.kind === ref.kind) {
        return persistentEntry.obj;
      }
      // Kind mismatch or never registered → undefined; the dispatcher
      // returns a "HandleReleasedError" to the child.
      return undefined;
    },
    registerHandle: (obj: unknown, kind: HandleKind) => {
      const lifecycle = HANDLE_KIND_LIFECYCLE[kind];
      // Transient handles get a runId prefix so they're trivially
      // distinguishable in logs/inspection; persistent get a scriptId
      // prefix so cross-run continuity is visually obvious.
      if (lifecycle === 'transient') {
        const id = generateHandleId(req.runId);
        active.handles.set(id, { obj, kind });
        return { __handleRef: true, id, kind };
      } else {
        const id = generateHandleId(active.scriptId);
        persistentTable.set(id, { obj, kind });
        return { __handleRef: true, id, kind };
      }
    },
  };

  // Phase 8: if the child indicated it has a signal, create an
  // AbortController here on the parent and inject its signal into the
  // last object-shaped arg (the canonical "options" position for api
  // methods that accept signals — generate, generateStructured, etc.).
  // The controller is registered under the requestId so the child's
  // AbortRequest can find and trigger it.
  if (req.hasSignal === true) {
    const controller = new AbortController();
    abortControllers.set(req.requestId, controller);

    // Inject the parent-side signal into the last object arg in-place.
    // The proxy stripped any user-side signal before sending; this just
    // populates the slot the api method expects.
    for (let i = req.args.length - 1; i >= 0; i--) {
      const arg = req.args[i];
      if (typeof arg === 'object' && arg !== null && !Array.isArray(arg)) {
        req.args[i] = { ...arg, signal: controller.signal };
        break;
      }
    }
    // If no object arg found, the call has nowhere to receive the signal;
    // we still keep the controller around in case the user aborts (the
    // abort is then effectively a no-op on the underlying api but our
    // tracking stays consistent).
  }

  let response: ApiProxyResponse;
  try {
    // Phase 9d.4.b — special-case showModal + internal modal-handle access.
    // showModal returns a ModalHandle whose `.close()` and `.result` need
    // child-side dispatch lookups by openRequestId. dispatchApiCall's
    // serializeReturnValue would (correctly) reject the canonical handle
    // because it has functions on it; the special cases below intercept
    // before that path.
    if (req.method === 'ui.showModal') {
      response = await handleShowModalRequest(req, active);
    } else if (req.method.startsWith('ui._modal.')) {
      response = await handleInternalModalRequest(req, active);
    } else if (req.method === 'ui.dom.inject' || req.method === 'ui.dom.injectAtMessage') {
      // Phase 9d.4.c-1 — same pattern as showModal: the canonical returns
      // a DOMHandle whose methods can't cross IPC. Capture the handle,
      // store keyed by elementId, return just the elementId (a string)
      // as the api-response value. The proxy uses the elementId to
      // construct a sync-shaped DOMHandle whose methods lazy-dispatch.
      response = await handleDomInjectRequest(req, active);
    } else if (req.method.startsWith('ui._dom.')) {
      response = await handleInternalDomRequest(req, active);
    } else if (req.method === 'ui.dom.cleanup') {
      // Special-case cleanup() so we can drop our pendingDomHandles
      // entries alongside the canonical's per-script teardown.
      response = await handleDomCleanupRequest(req, active);
    } else if (req.method === 'ui.showAdvancedModal') {
      // Phase 9d.4.d — same handle-capture pattern as showModal but for
      // the DOM-owned AdvancedModalHandle. Stores the handle under
      // child-supplied modalId; also stores the `.root` DOMHandle under
      // rootElementId so subsequent `ui._dom.*` dispatches on the
      // proxy-side `handle.root` resolve cleanly. Wires an internal
      // onDismiss listener that fires the bus-like dismissal notice.
      response = await handleShowAdvancedModalRequest(req, active);
    } else if (req.method.startsWith('ui._advModal.')) {
      response = await handleInternalAdvancedModalRequest(req, active);
    } else if (req.method === 'ui.registerInputBarAction') {
      // Phase 9d.4.e-1-a — capture canonical handle by (scriptId, actionId),
      // wait for FE register-echo, return api-response. Setting / destroy
      // dispatches go through the `'ui._inputBar.*'` internal routes below.
      response = await handleRegisterInputBarActionRequest(req, active);
    } else if (req.method.startsWith('ui._inputBar.')) {
      response = await handleInternalInputBarActionRequest(req, active);
    } else if (req.method === 'ui.createFloatWidget') {
      // Phase 9d.4.e-2-a — capture canonical handle by (scriptId, widgetId),
      // store .root in pendingDomHandles for `ui._dom.*` dispatch lookups,
      // wait for FE create-echo, return api-response. moveTo / setVisible /
      // destroy go through `'ui._floatWidget.*'` below.
      response = await handleCreateFloatWidgetRequest(req, active);
    } else if (req.method.startsWith('ui._floatWidget.')) {
      response = await handleInternalFloatWidgetRequest(req, active);
    } else if (req.method === 'ui.registerDrawerTab') {
      // Phase 9d.4.e-3-a — capture canonical handle by (scriptId, tabId),
      // store .root in pendingDomHandles, wait for FE register-echo, return
      // api-response. setTitle / setShortName / setBadge / activate /
      // destroy go through `'ui._drawerTab.*'` below.
      response = await handleRegisterDrawerTabRequest(req, active);
    } else if (req.method.startsWith('ui._drawerTab.')) {
      response = await handleInternalDrawerTabRequest(req, active);
    } else if (req.method === 'script.fetchLibrary') {
      // Phase 9e — fetch a user-library script's metadata + code so the
      // child-side `script.require()` proxy can compile + run it in the
      // child sandbox. ls:* libraries are resolved entirely child-side
      // (bundled via `builtin-library-registry`); only non-ls:* names
      // come through this path.
      response = await handleFetchLibraryRequest(req);
    } else {
      response = await dispatchApiCall(req, active.api, helpers);
    }
  } finally {
    // Drop the controller regardless of resolve/reject — the request is
    // settled and the controller is no longer useful. Late aborts from
    // the child see the empty map and no-op.
    if (req.hasSignal === true) {
      abortControllers.delete(req.requestId);
    }
  }

  sendApiResponse(req.requestId, response);
}

/**
 * Phase 9d.4.b — special-case `'ui.showModal'` so the canonical's
 * sync-shaped ModalHandle gets stored in `pendingModals` keyed by the
 * proxy-supplied openRequestId. The api-response value is just the
 * openRequestId (echoed back as confirmation); the handle's methods
 * stay parent-side and are reached via subsequent `'ui._modal.*'` IPC.
 *
 * Required invariant: `args[1]` (options) MUST carry `openRequestId`,
 * generated by the proxy. The canonical reads `options.openRequestId
 * ?? crypto.randomUUID()` — when we route from the child, the proxy
 * always supplies it, so the canonical uses our id.
 */
async function handleShowModalRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const items   = req.args[0] as ModalItem[];
    const options = req.args[1] as ShowModalOptions;
    if (typeof options?.openRequestId !== 'string' || options.openRequestId.length === 0) {
      // Defensive: the proxy contract requires it. If missing, surface
      // a clear error rather than silently fall back to crypto.randomUUID
      // (which would mean the child's sync handle has an id that doesn't
      // match the parent's — every subsequent .close()/.result lookup fails).
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.showModal: proxy did not supply options.openRequestId — child/parent id contract violated',
        },
      };
    }
    const handle = active.api.ui.showModal(items, options);
    storePendingModal(active.scriptId, handle.openRequestId, handle);
    return {
      type:      'api-response',
      requestId,
      ok:        true,
      // Value is the openRequestId — proxy doesn't strictly need it back
      // (it generated the id), but echoing it back gives the proxy a
      // success signal it can await synchronously if it wants to.
      value:     handle.openRequestId,
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.b — internal dispatch routes for ModalHandle methods. The
 * proxy's sync handle dispatches `'ui._modal.awaitResult'` and
 * `'ui._modal.close'` with `[openRequestId]` as args; this looks up the
 * canonical handle from `pendingModals`, calls the matching method,
 * returns the result.
 *
 * Method paths:
 *   - `'ui._modal.awaitResult'` — awaits the canonical handle's
 *     `.result` Promise, returns the resolved `ModalResult`. After
 *     resolution, drops the handle from `pendingModals` (modal is
 *     dismissed; no further methods are valid).
 *   - `'ui._modal.close'` — calls the canonical handle's `.close()`.
 *     Doesn't drop here — `close()` triggers dismissal which resolves
 *     `.result`, which drops via the awaitResult path. (The proxy's
 *     `handle.close()` and `handle.result` both fire IPCs from user
 *     code; whichever resolves first cleans up.)
 */
async function handleInternalModalRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._modal.'.length);
  const openRequestId = req.args[0] as string;
  if (typeof openRequestId !== 'string' || openRequestId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing openRequestId arg` },
    };
  }
  const handle = lookupPendingModal(active.scriptId, openRequestId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     {
        name:    'ModalReleasedError',
        message: `${req.method}: modal ${openRequestId} not found (already dismissed, never opened, or owned by a different script)`,
      },
    };
  }
  try {
    let value: unknown;
    if (action === 'awaitResult') {
      value = await handle.result;
      // Resolution → modal dismissed → drop the entry. Future calls
      // for this id (rare — a script awaiting the same result twice)
      // surface the ModalReleasedError above.
      dropPendingModal(active.scriptId, openRequestId);
    } else if (action === 'close') {
      await handle.close();
      // Don't drop here. close() triggers dismissal which resolves
      // .result; the awaitResult path drops it then. If user code
      // closes without awaiting result, the entry sits until script-
      // unregister cleanup (acceptable v1 — small per-modal leak).
      value = undefined;
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal modal action` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.c-1 — handle `'ui.dom.inject'` / `'ui.dom.injectAtMessage'`.
 * Same pattern as `handleShowModalRequest`: invoke canonical, capture
 * returned handle, store by elementId, return the elementId as the
 * api-response value (the proxy uses it to construct a DOMHandle proxy
 * whose lazy-dispatched methods look up the canonical handle by id).
 *
 * Stable-id idempotency works correctly: if the user supplies a stable
 * id and a matching element exists, the canonical returns the existing
 * handle (same elementId). We re-store under the same key (overwriting
 * with the same handle reference is harmless) and return the existing
 * elementId. The proxy's await unblocks with the correct id.
 */
async function handleDomInjectRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    let handle: DOMHandle;
    if (req.method === 'ui.dom.inject') {
      const target  = req.args[0] as string;
      const html    = req.args[1] as string;
      const options = req.args[2] as DOMInjectOptions | undefined;
      handle = active.api.ui.dom.inject(target, html, options);
    } else {
      // 'ui.dom.injectAtMessage'
      const messageId = req.args[0] as string;
      const html      = req.args[1] as string;
      const options   = req.args[2] as DOMMessageInjectOptions | undefined;
      handle = active.api.ui.dom.injectAtMessage(messageId, html, options);
    }
    storePendingDomHandle(active.scriptId, handle.id, handle);
    return { type: 'api-response', requestId, ok: true, value: handle.id };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.c-1 — internal dispatch routes for DOMHandle methods. The
 * proxy's sync-shaped DOMHandle dispatches `'ui._dom.update'`,
 * `'ui._dom.remove'`, `'ui._dom.makeDraggable'`, and `'ui._dom.injectChild'`
 * with `[elementId, ...methodArgs]`. This looks up the canonical handle
 * and invokes the matching method.
 *
 * `'ui._dom.on'` is reserved for Phase 9d.4.c-2 (event-listener handler
 * IPC); reaching it before that lands surfaces as a clear error.
 */
async function handleInternalDomRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._dom.'.length);
  const elementId = req.args[0] as string;
  if (typeof elementId !== 'string' || elementId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing elementId arg` },
    };
  }
  const handle = lookupPendingDomHandle(active.scriptId, elementId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    'DomHandleReleasedError',
        message: `${req.method}: DOM handle ${elementId} not found (already removed, never injected, or owned by a different script)`,
      },
    };
  }
  try {
    let value: unknown;
    if (action === 'update') {
      const html = req.args[1] as string;
      handle.update(html);
      value = undefined;
    } else if (action === 'remove') {
      handle.remove();
      // Drop our entry — canonical removed the element + cascaded to
      // descendants + cleared listeners. Future method calls on this
      // elementId fail fast with DomHandleReleasedError.
      dropPendingDomHandle(active.scriptId, elementId);
      value = undefined;
    } else if (action === 'makeDraggable') {
      const handleSelector = req.args[1] as string | undefined;
      handle.makeDraggable(handleSelector);
      value = undefined;
    } else if (action === 'injectChild') {
      const target  = req.args[1] as string;
      const html    = req.args[2] as string;
      const options = req.args[3] as DOMInjectOptions | undefined;
      const childHandle = handle.injectChild(target, html, options);
      // Same shape as inject*: store by new elementId, return id.
      storePendingDomHandle(active.scriptId, childHandle.id, childHandle);
      value = childHandle.id;
    } else if (action === 'on') {
      // Phase 9d.4.c-2 routes DOMHandle.on() via the `register-handler`
      // IPC with kind='domEventListener', NOT via this internal dispatch
      // path. If the proxy somehow sends 'ui._dom.on' here, it's a bug
      // — surface clearly.
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui._dom.on: routing bug — DOMHandle.on() should dispatch via register-handler kind=domEventListener',
        },
      };
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal dom action "${action}"` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.c-1 — `ui.dom.cleanup()`. Sync void per the canonical
 * interface. The canonical's cleanup tears down ALL DOM state for the
 * script (injections + styles + listeners); we additionally drop ALL
 * our `pendingDomHandles` entries for the script so subsequent method
 * calls on stale proxy handles fail fast.
 */
async function handleDomCleanupRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  try {
    active.api.ui.dom.cleanup();
    dropAllPendingDomHandlesForScript(active.scriptId);
    return { type: 'api-response', requestId: req.requestId, ok: true, value: undefined };
  } catch (err) {
    return {
      type:      'api-response',
      requestId: req.requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.d — `'ui.showAdvancedModal'` special-case. Mirror of
 * `handleShowModalRequest`'s shape: the canonical returns an
 * `AdvancedModalHandle` whose methods can't cross IPC, so capture the
 * handle, store under (scriptId, modalId), echo modalId back as the
 * api-response value.
 *
 * Required invariants from the proxy:
 *   - `options._modalId` is a non-empty string (proxy generates it
 *     before dispatch so the sync handle returned to user code carries
 *     a stable id matching parent state).
 *   - `options._rootElementId` is a non-empty string (same reason — the
 *     `.root` DOMHandle proxy is constructed sync from this id).
 *
 * Side effects beyond the canonical's:
 *   - Store the canonical `.root` handle in `pendingDomHandles` keyed by
 *     rootElementId so `ui._dom.*` dispatches from the child's
 *     buildDOMHandleProxy(rootElementId) resolve. The canonical's
 *     `createDOMHandle` is a closure object; same lifetime semantics as
 *     a regular `inject` handle — we just register it earlier than the
 *     `ui.dom.inject` path would have.
 *   - Register an internal `onDismiss` listener with the canonical
 *     handle. When it fires, send a single `advanced-modal-dismissed`
 *     IPC notice to the child carrying `modalId + reason`. The child's
 *     api-proxy module-scope state fans out to all user-registered
 *     `onDismiss(fn)` listeners locally — no `register-handler` IPC per
 *     listener.
 *
 * Sync-throws from the canonical (stack-limit, perm denial) surface as
 * a normal failure response; the proxy translates that into a rejection
 * on the user-script's first method call (since the handle was returned
 * sync optimistically). See api-proxy.ts for the dismissal-promotion path.
 */
async function handleShowAdvancedModalRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const options = req.args[0] as AdvancedModalOptions;
    if (typeof options?._modalId !== 'string' || options._modalId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.showAdvancedModal: proxy did not supply options._modalId — child/parent id contract violated',
        },
      };
    }
    if (typeof options?._rootElementId !== 'string' || options._rootElementId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.showAdvancedModal: proxy did not supply options._rootElementId — child/parent id contract violated',
        },
      };
    }
    // Phase 9d.4.d Option B — register the open-await BEFORE the canonical
    // call. The canonical's `showAdvancedModal` synchronously fires the
    // `ls_modal_open` message to the frontend; our awaiter must be in the
    // table before that flies in case the frontend is fast enough to
    // echo `ls_modal_opened` back before this function continues. (Hard
    // to imagine in practice — frontend processing has its own event-loop
    // ticks — but cheap belt-and-braces.)
    const openPromise = awaitAdvancedModalOpen(options._modalId);

    const handle = active.api.ui.showAdvancedModal(options);

    // Store under modalId for setTitle/dismiss/dismissed-getter dispatch.
    storePendingAdvancedModal(active.scriptId, handle.modalId, handle);

    // Mirror the `.root` DOMHandle into pendingDomHandles so the proxy's
    // sync-shaped `handle.root` (which is just buildDOMHandleProxy(
    // rootElementId)) resolves through the existing 'ui._dom.*' routes
    // — same lookup machinery as `inject*`-returned handles.
    storePendingDomHandle(active.scriptId, handle.root.id, handle.root);

    // Register the internal onDismiss listener that fires the bus-like
    // notice IPC. When the modal dismisses (any path: user / script /
    // teardown), this fires once with the resolved reason; we send the
    // notice to the child and drop our own state.
    handle.onDismiss((reason) => {
      const notice: AdvancedModalDismissedNotice = {
        type:    'advanced-modal-dismissed',
        modalId: handle.modalId,
        reason,
      };
      try {
        if (childHandle) childHandle.send(notice);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] advanced-modal-dismissed send failed for ${handle.modalId}: ${String(err)}`,
        );
      }
      // Drop both per-script tables now that the modal is gone. The
      // canonical drops its own internal entry on next message tick;
      // any late-arriving setTitle/dismiss IPC from the child's pre-
      // dismissal frames hits the lookup-miss branch and surfaces a
      // clean ModalReleasedError.
      dropPendingAdvancedModal(active.scriptId, handle.modalId);
      dropPendingDomHandle(active.scriptId, handle.root.id);
    });

    // Phase 9d.4.d Option B — block the api-response until the frontend
    // confirms `modals.set` + `bindExternalElement` + dismissal-handler
    // wiring all completed. Up to this point the proxy's openAck Promise
    // is unresolved; once we return below, the proxy resolves and queued
    // setTitle/dismiss/root.* dispatches fly. Closes the FE race window.
    //
    // Failure modes:
    //   - timeout (3s default): rejects with a clear error string; the
    //     api-response carries it back; proxy openAck rejects; user-side
    //     setTitle/dismiss become no-ops via the dismissedRef-flipped path.
    //   - `ls_modal_dismissed` arrives before `_opened` (FE-side
    //     `ctx.ui.showModal` threw): notifyAdvancedModalOpenFailed rejects
    //     the awaiter from the dismissed-echo handler; same downstream.
    try {
      await openPromise;
    } catch (err) {
      // Still return success to keep the proxy's "sync handle" contract
      // simple — but flip the modal to dismissed-with-teardown via the
      // bus IPC we already wired. If the dismissal path already fired
      // (notifyAdvancedModalOpenFailed was called from `case
      // 'ls_modal_dismissed'`), this is a redundant no-op (handle
      // already dropped from pendingAdvancedModals); if it timed out,
      // we synthesize a teardown dismissal so the proxy's onDismiss
      // listeners get the right signal.
      const exists = lookupPendingAdvancedModal(active.scriptId, handle.modalId);
      if (exists) {
        // Synthesize teardown dismissal for the timeout path.
        const notice: AdvancedModalDismissedNotice = {
          type:    'advanced-modal-dismissed',
          modalId: handle.modalId,
          reason:  'teardown',
        };
        try { if (childHandle) childHandle.send(notice); }
        catch { /* channel down */ }
        dropPendingAdvancedModal(active.scriptId, handle.modalId);
        dropPendingDomHandle(active.scriptId, handle.root.id);
      }
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    err instanceof Error ? (err.name || 'Error') : 'Error',
          message: err instanceof Error ? err.message : String(err),
          ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
        },
      };
    }

    return {
      type:      'api-response',
      requestId,
      ok:        true,
      // Echo back modalId for parity with showModal's response shape;
      // proxy doesn't strictly need it (it generated the id), but the
      // success signal lets the proxy's sync handle promote any
      // dispatch failure into a clean rejection on first method call.
      value:     handle.modalId,
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.d — internal dispatch routes for AdvancedModalHandle methods.
 * The proxy's sync handle dispatches:
 *   - `'ui._advModal.setTitle'` with `[modalId, title]`
 *   - `'ui._advModal.dismiss'`  with `[modalId]`
 *
 * Both are sync-void on the canonical; we just call through and return
 * `value: undefined` on success. Lookup-miss (modal already dismissed,
 * etc.) returns a clean error — the proxy's sync API swallows these
 * because canonical setTitle/dismiss are non-throwing on dismissed
 * modals (see `getModal(modalId)?.dismissed` short-circuit in ui.ts).
 *
 * Note: there is intentionally no `'ui._advModal.onDismiss'` route. The
 * proxy keeps onDismiss listeners in module-scope state and fans them
 * out from the bus-like `advanced-modal-dismissed` IPC (registered
 * once per modal at open time). Avoids one parent-tracked
 * register-handler entry per listener.
 */
/**
 * Phase 9d.4.e-1-a — `'ui.registerInputBarAction'` special-case. Same
 * Option-B shape as advanced modals + showModal:
 *   1. Validate options.id sync (proxy already did this child-side, but
 *      defense-in-depth — bad ids would make the canonical throw anyway).
 *   2. Register the FE register-echo awaiter BEFORE calling canonical
 *      (defensive against an absurdly fast FE; matches advanced-modal
 *      ordering).
 *   3. Call canonical. Sync — registers in backend registry, sends
 *      `ls_input_bar_action_register` to FE, returns InputBarActionHandle.
 *   4. Store handle under (scriptId, actionId).
 *   5. Await FE echo. Timeout / rejection → drop the handle, surface
 *      error response (proxy's openAck rejects, downstream method
 *      dispatches no-op via destroyed flag).
 *   6. Return api-response.
 *
 * Re-registration with the same actionId is a CANONICAL replace (see
 * `input-bar-action-registry.ts` JSDoc) — the canonical drops old click
 * handlers + re-emits the FE message. We just store the new handle in
 * place; the FE handler itself destroys + re-creates the host action so
 * the old proxy's setLabel/etc. via the same actionId still target the
 * same FE entry. Tracking the old proxy handle is unnecessary.
 */
async function handleRegisterInputBarActionRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const options = req.args[0] as InputBarActionOptions;
    if (typeof options?.id !== 'string' || options.id.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'TypeError',
          message: 'api.ui.registerInputBarAction: options.id must be a non-empty string',
        },
      };
    }
    const actionId = options.id;
    const scriptId = active.scriptId;

    // Register the FE register-echo awaiter BEFORE the canonical fires
    // `ls_input_bar_action_register` to the frontend. Defensive against
    // a hypothetically instant FE echo arriving before this function
    // continues; mirrors the advanced-modal ordering convention.
    const registerPromise = awaitInputBarActionRegister(scriptId, actionId);

    const handle = active.api.ui.registerInputBarAction(options);

    // Store under (scriptId, actionId) for setLabel/setSubtitle/setEnabled/
    // destroy/onClick dispatch lookups. Same shape as pendingAdvancedModals.
    storePendingInputBarAction(scriptId, actionId, handle);

    // Phase 9d.4.e-1-a "Option B" — block api-response on FE confirming
    // the action is mounted. Up to this point the proxy's openAck Promise
    // is unresolved; once we return below, the proxy resolves and queued
    // setLabel/setSubtitle/setEnabled/destroy dispatches fly.
    try {
      await registerPromise;
    } catch (err) {
      // Awaiter timed out (FE never echoed). Drop our pending entry —
      // any further proxy method calls would lookup-miss anyway. The
      // proxy's openAck rejection drives the downstream chain to no-op.
      dropPendingInputBarAction(scriptId, actionId);
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    err instanceof Error ? (err.name || 'Error') : 'Error',
          message: err instanceof Error ? err.message : String(err),
          ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
        },
      };
    }

    return {
      type:      'api-response',
      requestId,
      ok:        true,
      // Echo back actionId for parity with showModal/showAdvancedModal's
      // response shape; proxy doesn't strictly need it (it generated by
      // user input options.id).
      value:     actionId,
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.e-1-a — internal dispatch routes for InputBarActionHandle methods.
 * The proxy's sync handle dispatches:
 *   - `'ui._inputBar.setLabel'`    with `[actionId, label]`
 *   - `'ui._inputBar.setSubtitle'` with `[actionId, subtitle]` (subtitle may be undefined → clear)
 *   - `'ui._inputBar.setEnabled'`  with `[actionId, enabled]`
 *   - `'ui._inputBar.destroy'`     with `[actionId]`
 *
 * All canonical methods are sync void; this just calls through. Lookup
 * miss returns a clean error — proxy's catch swallows it, matching the
 * canonical's own non-throwing semantics for stale handles.
 *
 * `'ui._inputBar.onClick'` is reserved for Phase 9d.4.e-1-b (handler-IPC).
 */
async function handleInternalInputBarActionRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._inputBar.'.length);
  const actionId  = req.args[0] as string;
  if (typeof actionId !== 'string' || actionId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing actionId arg` },
    };
  }
  const handle = lookupPendingInputBarAction(active.scriptId, actionId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    'InputBarActionReleasedError',
        message: `${req.method}: input-bar action ${actionId} not found (already destroyed, never registered, or owned by a different script)`,
      },
    };
  }
  try {
    if (action === 'setLabel') {
      const label = req.args[1] as string;
      handle.setLabel(label);
    } else if (action === 'setSubtitle') {
      // Subtitle can be undefined (canonical clears the second line).
      const subtitle = req.args[1] as string | undefined;
      handle.setSubtitle(subtitle);
    } else if (action === 'setEnabled') {
      const enabled = req.args[1] as boolean;
      handle.setEnabled(enabled);
    } else if (action === 'destroy') {
      handle.destroy();
      // Drop our entry — canonical removed the action from the registry
      // + cleared click handlers + emitted destroy to FE. Future method
      // calls on this actionId fail fast with the released-error above.
      dropPendingInputBarAction(active.scriptId, actionId);
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal input-bar action "${action}"` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value: undefined };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.e-2-a — `'ui.createFloatWidget'` special-case. Mirror of
 * `handleShowAdvancedModalRequest` for float widgets:
 *   1. Validate proxy-supplied `_widgetId` + `_rootElementId` (sync error
 *      response if missing — proxy contract violation).
 *   2. Register the FE create-echo awaiter BEFORE the canonical fires
 *      `ls_float_widget_create` to FE.
 *   3. Call canonical (`createFloatWidget` is sync — registers in
 *      registry, sends to FE, returns FloatWidgetHandle). Sync-throws
 *      include perm denial (`ui_panels`) and stack-limit overflow.
 *   4. Store handle by widgetId AND store `.root` DOMHandle in
 *      pendingDomHandles (so the proxy's gated `root.update`/etc. via
 *      `ui._dom.*` dispatches resolve correctly).
 *   5. Await FE echo. Timeout: drop entries + return error response.
 *   6. Return api-response with widgetId echoed.
 *
 * onDragEnd is registered separately by the proxy via the handler-IPC
 * pattern in Phase 9d.4.e-2-b — not part of this foundation.
 */
async function handleCreateFloatWidgetRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const options = req.args[0] as FloatWidgetOptions;
    if (typeof options?._widgetId !== 'string' || options._widgetId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.createFloatWidget: proxy did not supply options._widgetId — child/parent id contract violated',
        },
      };
    }
    if (typeof options?._rootElementId !== 'string' || options._rootElementId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.createFloatWidget: proxy did not supply options._rootElementId — child/parent id contract violated',
        },
      };
    }

    // Register FE create-echo awaiter BEFORE canonical fires `ls_float_widget_create`.
    const createPromise = awaitFloatWidgetCreate(options._widgetId);

    const handle = active.api.ui.createFloatWidget(options);

    // Store handle by widgetId for moveTo/setVisible/destroy dispatch lookups.
    storePendingFloatWidget(active.scriptId, handle.widgetId, handle);

    // Mirror `.root` DOMHandle into pendingDomHandles so the proxy's
    // `buildDOMHandleProxy(rootElementId, openAck)` resolves via the
    // existing `ui._dom.*` routes — same trick as showAdvancedModal.
    storePendingDomHandle(active.scriptId, handle.root.id, handle.root);

    // Phase 9d.4.e-2-a "Option B" — block api-response on FE confirming
    // the widget is mounted. Up to this point the proxy's openAck is
    // unresolved; once we return below, the proxy resolves and queued
    // moveTo/setVisible/destroy/root.* dispatches fire.
    try {
      await createPromise;
    } catch (err) {
      // Awaiter timed out — drop our entries.
      dropPendingFloatWidget(active.scriptId, handle.widgetId);
      dropPendingDomHandle(active.scriptId, handle.root.id);
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    err instanceof Error ? (err.name || 'Error') : 'Error',
          message: err instanceof Error ? err.message : String(err),
          ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
        },
      };
    }

    return {
      type:      'api-response',
      requestId,
      ok:        true,
      // Echo back widgetId for parity (proxy generated it).
      value:     handle.widgetId,
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.e-2-a — internal dispatch routes for FloatWidgetHandle methods.
 * The proxy's sync handle dispatches:
 *   - `'ui._floatWidget.moveTo'`     with `[widgetId, x, y]`
 *   - `'ui._floatWidget.setVisible'` with `[widgetId, visible]`
 *   - `'ui._floatWidget.destroy'`    with `[widgetId]`
 *
 * `getPosition`/`isVisible` are SYNC reads child-side — no IPC route needed.
 * Phase 9d.4.e-2-b will add a parent→child position-update notice so the
 * child's cached state stays in sync with FE-driven drag updates.
 */
async function handleInternalFloatWidgetRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._floatWidget.'.length);
  const widgetId  = req.args[0] as string;
  if (typeof widgetId !== 'string' || widgetId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing widgetId arg` },
    };
  }
  const handle = lookupPendingFloatWidget(active.scriptId, widgetId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    'FloatWidgetReleasedError',
        message: `${req.method}: float widget ${widgetId} not found (already destroyed, never created, or owned by a different script)`,
      },
    };
  }
  try {
    if (action === 'moveTo') {
      const x = req.args[1] as number;
      const y = req.args[2] as number;
      handle.moveTo(x, y);
    } else if (action === 'setVisible') {
      const visible = req.args[1] as boolean;
      handle.setVisible(visible);
    } else if (action === 'destroy') {
      handle.destroy();
      // Drop our entries — canonical removed widget + cleared handlers +
      // emitted destroy to FE. Future method calls fail fast with the
      // released-error above.
      dropPendingFloatWidget(active.scriptId, widgetId);
      dropPendingDomHandle(active.scriptId, handle.root.id);
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal float-widget action "${action}"` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value: undefined };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.e-3-a — `'ui.registerDrawerTab'` special-case. Mirror of
 * `handleCreateFloatWidgetRequest` for drawer tabs:
 *   1. Validate proxy-supplied `_rootElementId` (sync error if missing).
 *      The tabId is user-supplied (`options.id`) so no threading needed
 *      for that — the canonical's `options.id` validation happens during
 *      the canonical call below.
 *   2. Register the FE register-echo awaiter BEFORE the canonical fires
 *      `ls_drawer_tab_register` to FE.
 *   3. Call canonical (sync — registers in registry, sends to FE).
 *      Sync-throws include id/title validation + per-script and global
 *      stack-limit overflow.
 *   4. Store handle by tabId AND store `.root` DOMHandle in
 *      pendingDomHandles (so the proxy's gated `root.update`/etc. via
 *      `ui._dom.*` resolve correctly).
 *   5. Await FE echo. Timeout: drop entries + return error response.
 *   6. Return api-response with tabId echoed.
 *
 * onActivate is registered separately by the proxy via the handler-IPC
 * pattern in Phase 9d.4.e-3-b — not part of this foundation.
 */
async function handleRegisterDrawerTabRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const options = req.args[0] as DrawerTabOptions;
    if (typeof options?._rootElementId !== 'string' || options._rootElementId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'ui.registerDrawerTab: proxy did not supply options._rootElementId — child/parent id contract violated',
        },
      };
    }

    // Register FE register-echo awaiter BEFORE canonical fires
    // `ls_drawer_tab_register`. Canonical's id-validation throws happen
    // BEFORE our handle-storage path, so a failed id throws + the catch
    // returns ok:false; the awaiter never resolves but cleanup happens
    // implicitly via the timeout.
    const registerPromise = awaitDrawerTabRegister(active.scriptId, options.id);

    const handle = active.api.ui.registerDrawerTab(options);

    // Store by (scriptId, tabId) for setTitle/setShortName/setBadge/
    // activate/destroy/onActivate dispatch lookups.
    storePendingDrawerTab(active.scriptId, handle.tabId, handle);

    // Mirror `.root` DOMHandle into pendingDomHandles — same trick as
    // showAdvancedModal / createFloatWidget.
    storePendingDomHandle(active.scriptId, handle.root.id, handle.root);

    // Phase 9d.4.e-3-a "Option B" — block api-response on FE confirming
    // the tab is mounted.
    try {
      await registerPromise;
    } catch (err) {
      // Awaiter timed out — drop our entries.
      dropPendingDrawerTab(active.scriptId, handle.tabId);
      dropPendingDomHandle(active.scriptId, handle.root.id);
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    err instanceof Error ? (err.name || 'Error') : 'Error',
          message: err instanceof Error ? err.message : String(err),
          ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
        },
      };
    }

    return {
      type:      'api-response',
      requestId,
      ok:        true,
      // Echo back tabId for parity (proxy already knows it from user input).
      value:     handle.tabId,
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9d.4.e-3-a — internal dispatch routes for DrawerTabHandle methods.
 * The proxy's sync handle dispatches:
 *   - `'ui._drawerTab.setTitle'`     with `[tabId, title]`
 *   - `'ui._drawerTab.setShortName'` with `[tabId, shortName]`
 *   - `'ui._drawerTab.setBadge'`     with `[tabId, badge]` (badge: string | null)
 *   - `'ui._drawerTab.activate'`     with `[tabId]`
 *   - `'ui._drawerTab.destroy'`      with `[tabId]`
 *
 * onActivate is reserved for Phase 9d.4.e-3-b (handler-IPC).
 */
async function handleInternalDrawerTabRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._drawerTab.'.length);
  const tabId     = req.args[0] as string;
  if (typeof tabId !== 'string' || tabId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing tabId arg` },
    };
  }
  const handle = lookupPendingDrawerTab(active.scriptId, tabId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    'DrawerTabReleasedError',
        message: `${req.method}: drawer tab ${tabId} not found (already destroyed, never registered, or owned by a different script)`,
      },
    };
  }
  try {
    if (action === 'setTitle') {
      const title = req.args[1] as string;
      handle.setTitle(title);
    } else if (action === 'setShortName') {
      const shortName = req.args[1] as string;
      handle.setShortName(shortName);
    } else if (action === 'setBadge') {
      // Badge accepts string | null (null clears).
      const badge = req.args[1] as string | null;
      handle.setBadge(badge);
    } else if (action === 'activate') {
      handle.activate();
    } else if (action === 'destroy') {
      handle.destroy();
      // Drop our entries — canonical removed tab + cleared handlers +
      // emitted destroy to FE. Future method calls fail fast.
      dropPendingDrawerTab(active.scriptId, tabId);
      dropPendingDomHandle(active.scriptId, handle.root.id);
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal drawer-tab action "${action}"` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value: undefined };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

/**
 * Phase 9e — `'script.fetchLibrary'` special-case. Resolves a user-supplied
 * name-or-id into a library script's metadata + code. Validates that the
 * resolved script is type `'library'` (matches canonical's
 * `script.require()` check at executor.ts:426).
 *
 * Wire format on success: `{ id, name, code, allowDangerous }` — exactly
 * what the child-side proxy needs to compile and run the library code in
 * its AsyncFunction sandbox.
 *
 * Failure cases:
 *   - resolver not wired (backend.ts didn't call setScriptResolver)
 *   - not found
 *   - found but type !== 'library'
 *
 * Each is a structured error in the api-response so the proxy can
 * surface a clear message to user code.
 */
async function handleFetchLibraryRequest(
  req: ApiProxyRequest,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const nameOrId = req.args[0];
    if (typeof nameOrId !== 'string' || nameOrId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'TypeError',
          message: 'script.require: name must be a non-empty string',
        },
      };
    }
    if (!scriptResolver) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'script.require: ScriptStorage resolver not wired (backend.ts init incomplete?)',
        },
      };
    }
    const library = scriptResolver(nameOrId);
    if (!library) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'NotFoundError',
          message: `script.require: library "${nameOrId}" not found`,
        },
      };
    }
    if (library.type !== 'library') {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'TypeError',
          message: `script.require: "${nameOrId}" is not a library script (type: ${library.type})`,
        },
      };
    }
    return {
      type:      'api-response',
      requestId,
      ok:        true,
      value: {
        id:             library.id,
        name:           library.name,
        code:           library.code,
        allowDangerous: library.allowDangerous,
      },
    };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

async function handleInternalAdvancedModalRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  const action    = req.method.slice('ui._advModal.'.length);
  const modalId   = req.args[0] as string;
  if (typeof modalId !== 'string' || modalId.length === 0) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     { name: 'TypeError', message: `${req.method}: missing modalId arg` },
    };
  }
  const handle = lookupPendingAdvancedModal(active.scriptId, modalId);
  if (!handle) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    'AdvancedModalReleasedError',
        message: `${req.method}: advanced modal ${modalId} not found (already dismissed, never opened, or owned by a different script)`,
      },
    };
  }
  try {
    if (action === 'setTitle') {
      const title = req.args[1] as string;
      handle.setTitle(title);
    } else if (action === 'dismiss') {
      handle.dismiss();
      // Don't drop here — dismiss() triggers async dismissal echo from
      // the frontend; the bus-like onDismiss listener (registered at
      // open time) handles dropPendingAdvancedModal + dropPendingDomHandle
      // when the resolved reason fires.
    } else {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'TypeError', message: `${req.method}: unknown internal advanced-modal action "${action}"` },
      };
    }
    return { type: 'api-response', requestId, ok: true, value: undefined };
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name:    err instanceof Error ? (err.name || 'Error') : 'Error',
        message: err instanceof Error ? err.message : String(err),
        ...(err instanceof Error && err.stack ? { stack: err.stack } : {}),
      },
    };
  }
}

function sendApiResponse(_requestId: string, response: ApiProxyResponse): void {
  if (!childHandle) {
    // Child died between request arrival and response dispatch — nothing
    // we can do; the lifecycle handler will reject pending runs anyway.
    return;
  }
  try {
    childHandle.send(response);
  } catch (err) {
    spindle.log.warn(`[script-runner] api-response send failed: ${String(err)}`);
  }
}

function handleLifecycle(event: BackendProcessLifecycleEventDTO): void {
  // Filter to our specific child — the host dispatches lifecycle events
  // for ALL backend processes the extension owns, not just ours.
  if (event.kind !== SCRIPT_RUNNER_KIND || event.key !== SCRIPT_RUNNER_KEY) {
    return;
  }

  switch (event.state) {
    case 'timed_out':
    case 'failed': {
      // Build a diagnostic that names the script(s) currently in flight,
      // so the operator log can immediately tell which user script
      // (probably) caused the hang.
      const offendingScripts = Array.from(activeRuns.values())
        .map((a) => a.scriptName)
        .join(', ');
      const reason  = event.error ?? event.exitReason ?? 'unknown';
      const rejection = new Error(
        `[script-runner] child ${event.state} (${reason})` +
        (offendingScripts ? `; possibly caused by: ${offendingScripts}` : ''),
      );
      spindle.log.error(rejection.message);

      // Reject every in-flight caller so they don't hang forever waiting
      // for a result that will never come.
      for (const pending of pendingRuns.values()) {
        pending.reject(rejection);
      }
      pendingRuns.clear();
      activeRuns.clear();
      // Phase 9d.4.x — script-body activeRun tracking goes with activeRuns.
      // The new child has no knowledge of the prior runs' runIds; leaving
      // entries here would cause the next dispatchRunScript for one of those
      // scripts to attempt `activeRuns.delete(staleRunId)` (harmless no-op,
      // but tidier to clear).
      scriptBodyActiveRunByScript.clear();

      // Phase 10 — also reject any in-flight handler fires. These are
      // handler invocations from the parent's macro/tool/etc. wrappers
      // that send `RunHandlerRequest` and await `HandlerResult`. With
      // the child dead, the result will never arrive; without rejecting
      // here, the wrapper's promise would hang forever.
      for (const pending of pendingHandlerCalls.values()) {
        pending.reject(rejection);
      }
      pendingHandlerCalls.clear();

      // Clear stability timer for the dead child — it was scheduled
      // against this now-deceased instance and would erroneously reset
      // restartAttempts to 0 mid-backoff if it fires.
      if (stabilityTimer !== null) {
        clearTimeout(stabilityTimer);
        stabilityTimer = null;
      }

      childHandle = null;

      // Phase 10 — schedule a respawn with exponential backoff. After the
      // new child is alive, prior user-script handler closures (macros,
      // tools, interceptors, content processors, DOM event listeners,
      // etc.) are GONE — the parent's canonical store still has wrappers
      // pointing at the old child's handlerIds, which no longer exist.
      // Surface this to the operator via a warning so they know to
      // disable+reenable affected scripts to restore handler functionality.
      spindle.log.warn(
        `[script-runner] child respawn scheduled after ${event.state}. ` +
        `Note: user-script handler closures (macros, tools, interceptors, etc.) ` +
        `registered before the kill are now orphaned — the parent's wrappers ` +
        `point at child handlerIds that no longer exist. To restore those, ` +
        `disable+reenable any affected scripts (or reload the extension).`,
      );
      scheduleRespawn(`child ${event.state}: ${reason}`);
      break;
    }

    case 'stopped':
    case 'completed':
      // Graceful exit — caller invoked stop() or child called complete().
      // Clear our cached handle; pending runs (if any) may already have
      // received their results, but if any remain, they'll get a generic
      // rejection on the next dispatch attempt.
      //
      // Cancel any pending respawn — graceful exit means LumiScript is
      // tearing down, not that we should respawn.
      if (restartTimer !== null) {
        clearTimeout(restartTimer);
        restartTimer = null;
      }
      if (stabilityTimer !== null) {
        clearTimeout(stabilityTimer);
        stabilityTimer = null;
      }
      childHandle = null;
      break;

    default:
      // 'starting' / 'running' / 'stopping' — informational only.
      break;
  }
}

/**
 * Phase 10 — schedule the script-runner child to respawn after a backoff
 * delay. Called from `handleLifecycle` on `failed`/`timed_out` events.
 *
 * Exponential backoff via `RESTART_BACKOFF_MS` ladder (1s → 30s capped).
 * If the next respawn ALSO fails, the failure path schedules another
 * (incrementing attempts), so a persistently-broken child eventually
 * settles at the 30s cap rather than hammering the host.
 *
 * Stability reset is wired in `spawnScriptRunner` — once the new child
 * has been alive for `STABILITY_THRESHOLD_MS`, attempts goes back to 0.
 *
 * Idempotent on existing schedule: if a respawn is already scheduled,
 * the duplicate trigger is logged + skipped.
 */
function scheduleRespawn(reason: string): void {
  if (cachedUserId === null) {
    spindle.log.warn(
      `[script-runner] cannot schedule respawn: userId not yet cached ` +
      `(respawn before first cold-start spawn?)`,
    );
    return;
  }
  if (restartTimer !== null) {
    spindle.log.warn(
      `[script-runner] respawn already scheduled; ignoring duplicate trigger (reason: ${reason})`,
    );
    return;
  }

  const backoffMs = getRestartBackoffMs();
  const idx       = Math.min(restartAttempts, backoffMs.length - 1);
  const delay     = backoffMs[idx]!;
  spindle.log.warn(
    `[script-runner] scheduling respawn in ${delay}ms ` +
    `(attempt #${restartAttempts + 1}; reason: ${reason})`,
  );

  restartTimer = setTimeout(() => {
    restartTimer = null;
    restartAttempts++;
    spindle.log.info(
      `[script-runner] firing respawn attempt #${restartAttempts}`,
    );
    void spawnScriptRunner(cachedUserId!).catch((err) => {
      spindle.log.error(
        `[script-runner] respawn attempt #${restartAttempts} failed: ` +
        `${err instanceof Error ? err.message : String(err)}`,
      );
      // Reschedule with longer backoff (attempts already incremented above).
      scheduleRespawn(`respawn-attempt-${restartAttempts}-failed`);
    });
  }, delay);
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Spawn the script-runner child if not already running. Idempotent — calling
 * this when the child is alive returns the existing handle.
 *
 * Resolves once the child has called `process.ready()`. Rejects if the
 * spawn fails or the startup timeout fires.
 *
 * @param userId  Active user ID. LumiScript is an operator-scoped extension
 *                (see Lumiverse extension manager badge), so `userId` is
 *                required by the host on every spawn — it identifies which
 *                user's context the spawned subprocess will act on. Caller
 *                should pass the live `activeUserId` (LumiScript tracks
 *                this on every frontend message arrival; cold-start callers
 *                must defer the spawn until after the first frontend_ready
 *                handler has populated `activeUserId`).
 */
export function spawnScriptRunner(userId: string): Promise<BackendProcessHandle> {
  // Phase 10 — stash userId for use by the lifecycle-driven respawn path.
  // Single-user mode keeps this stable; if it ever changes (multi-user
  // operator mode), the most-recent caller's userId wins for respawns.
  cachedUserId = userId;

  if (childHandle) return Promise.resolve(childHandle);
  if (spawnInFlight) return spawnInFlight;

  spawnInFlight = (async () => {
    // Wire up subscriptions before spawning so we don't miss any early
    // lifecycle events. They're idempotent — registering a no-op handler
    // before spawn is harmless.
    if (messageUnsub === null) {
      messageUnsub = spindle.backendProcesses.onMessage((event) => {
        // The onMessage handler fires for every backend process the
        // extension owns. We filter by processId to scope to our child.
        if (event.processId !== childHandle?.processId) return;
        handleChildMessage(event.payload);
      });
    }
    if (lifecycleUnsub === null) {
      lifecycleUnsub = spindle.backendProcesses.onLifecycle(handleLifecycle);
    }

    const spawnedAt = Date.now();
    const handle = await spindle.backendProcesses.spawn({
      entry:               SCRIPT_RUNNER_ENTRY,
      kind:                SCRIPT_RUNNER_KIND,
      key:                 SCRIPT_RUNNER_KEY,
      userId,               // Required by the host; see param JSDoc above
      payload:             {},  // Phase 9+ may pass settings (scriptTimeoutMs etc.) through here
      startupTimeoutMs:    STARTUP_TIMEOUT_MS,
      heartbeatTimeoutMs:  HEARTBEAT_TIMEOUT_MS_DEFAULT,
      replaceExisting:     true,  // if a stale instance is around (e.g. previous LumiScript run), replace it
    });
    childHandle = handle;

    spindle.log.info(
      `[script-runner] spawned in ${Date.now() - spawnedAt}ms ` +
      `(processId=${handle.processId})`,
    );

    // Phase 10 — schedule the stability reset. If the new child stays
    // alive for STABILITY_THRESHOLD_MS, the restart-attempts counter
    // resets to 0 so a long-running session that hits ONE bad script
    // doesn't accumulate permanent backoff debt.
    //
    // The timer is cleared on death (in handleLifecycle) and on the
    // next spawn (so a respawn doesn't double-schedule).
    if (stabilityTimer !== null) clearTimeout(stabilityTimer);
    const stabilityMs = getStabilityThresholdMs();
    stabilityTimer = setTimeout(() => {
      if (restartAttempts > 0) {
        spindle.log.info(
          `[script-runner] child has been stable for ${stabilityMs / 1000}s; ` +
          `restart-attempts counter reset (was ${restartAttempts})`,
        );
        restartAttempts = 0;
      }
      stabilityTimer = null;
    }, stabilityMs);

    return handle;
  })();

  // Clear the in-flight slot whether spawn succeeded or failed. On success,
  // future calls hit the `if (childHandle)` short-circuit. On failure, the
  // slot opens for a fresh retry, which the lifecycle-driven respawn path
  // (Phase 10's `scheduleRespawn`) makes use of.
  spawnInFlight.finally(() => { spawnInFlight = null; }).catch(() => { /* swallow — caller already handled */ });

  return spawnInFlight;
}

/**
 * Per-run inputs that vary by trigger fire — separate from the `Script`
 * (which is stable across runs) and from `DispatchRunScriptOpts` (which
 * carries parent-side callbacks + tracking sets).
 */
export interface DispatchRunScriptRequest {
  /** Trigger event payload — passed as the AsyncFunction's `data` arg. */
  data:               unknown;
  /** Async-loop timeout window. Driven by `LumiScriptSettings.scriptTimeoutMs`. */
  timeoutMs:          number;
  /**
   * Live extension-level granted-permissions set. NOT per-script — see
   * `lumiscript_permission_model.md`. Caller supplies the live set so api
   * impls reading it during the run see any mid-run grant changes.
   */
  grantedPermissions: Set<string>;
  /** User ID for operator-scoped api calls. Optional in single-user mode. */
  userId?:            string;
}

/**
 * Parent-side callbacks + per-run state that don't cross IPC. Mirrors the
 * subset of `ExecutorOptions` that production trigger-registry call sites
 * pass to `executeScript`. Phase 9c flips trigger-registry to use these
 * fields directly when calling `dispatchRunScript`.
 */
export interface DispatchRunScriptOpts {
  /**
   * Phase 9a — optional callback invoked for every `console.*` call inside
   * the user-script body, with a `ConsoleEntry` matching the in-process
   * executor's `onConsole` shape. Production callers should pass the same
   * `(entry) => sendToFrontend({ type: 'console_entry', scriptId, runId, entry })`
   * closure they pass to `executeScript` today, so the LumiScript console
   * panel sees child-runtime entries indistinguishable from in-process ones.
   */
  onConsole?: (entry: ConsoleEntry) => void;
  /**
   * Phase 9b — fired immediately after `api.tools.register/unregister` so
   * the Status sidebar updates in real time rather than waiting for the
   * script execution to complete. Mirror of `ExecutorOptions.onToolsChanged`.
   */
  onToolsChanged?: () => void;
  /**
   * Phase 9b — per-run tracking sets. The api implementations on the parent
   * mutate these as the script registers tools / macros / interceptors /
   * content processors. After the run resolves, the caller diffs against a
   * pre-run snapshot to clean up stale registrations whose declarations
   * disappeared from the script body. Same shape and intent as the
   * matching `ExecutorOptions` fields.
   */
  toolsRegisteredThisRun?:             Set<string>;
  macrosRegisteredThisRun?:            Set<string>;
  macroInterceptorsRegisteredThisRun?: Set<string>;
  contentProcessorsRegisteredThisRun?: Set<string>;
}

/**
 * Send a script execution request to the child and resolve with its result.
 *
 * Internally:
 *   - Builds a `LumiScriptAPI` for this run via the existing executor
 *     factory (`buildScriptAPI`). The api lives only on the parent; the
 *     child's proxy dispatches method calls back via `ApiProxyRequest`.
 *     Tracking sets and `onToolsChanged` from `opts` flow into the api so
 *     in-progress mutations are observable parent-side at run-end.
 *   - Stores the api in `activeRuns` keyed by runId so `handleApiRequest`
 *     can route incoming proxy requests to it.
 *   - Sends `RunScriptRequest` IPC carrying just what the child needs:
 *     code, data, identity, timeout. Permissions, tracking sets, and
 *     `onConsole` / `onToolsChanged` callbacks all stay on the parent.
 *
 * On `run-result` arrival, the api + transient-handle table are dropped
 * from `activeRuns`; pending api-requests for the now-completed run reject
 * with a clear "run completed" error. The persistent-handle table for the
 * script lives on until script-unregister (Phase 9d wires `clearByScriptId`
 * cleanup into the trigger-registry teardown path).
 *
 * Throws if the child isn't running — caller must `await spawnScriptRunner()`
 * first, typically at LumiScript startup deferred to the first frontend
 * handshake (so `userId` is known).
 *
 * @param script   The real `Script` from `ScriptStorage`. Drops the synth
 *                 shim used through Phase 8: `script.allowDangerous`,
 *                 `script.type`, and full identity now flow through cleanly.
 * @param request  Per-run inputs (event data, timeout, granted permissions,
 *                 active userId). All can vary fire-to-fire of the same script.
 * @param opts     Optional parent-side callbacks + tracking sets — see
 *                 `DispatchRunScriptOpts` JSDoc.
 */
export function dispatchRunScript(
  script:  Script,
  request: DispatchRunScriptRequest,
  opts:    DispatchRunScriptOpts = {},
): Promise<RunScriptResult> {
  if (!childHandle) {
    return Promise.reject(
      new Error('[script-runner] dispatchRunScript called before child was spawned'),
    );
  }

  const runId = generateRunId();

  // Phase 9d.3 — refresh the per-script snapshot used by handler fires
  // that run after this script's runs end. Handler `api.*` calls source
  // the Script object + permissions + userId from this map.
  lastDispatchByScript.set(script.id, {
    script,
    grantedPermissions: new Set(request.grantedPermissions),
    userId:             request.userId ?? null,
  });

  // Build the host-side api FIRST so we can call its sync-list methods
  // to populate the dispatch-time snapshots below. The api lifetime spans
  // this run; the snapshots cross IPC at dispatch time and live on the
  // child as mutable per-run state for `api.tools.list()` / etc.
  const api = buildScriptAPI(script, {
    grantedPermissions:                 request.grantedPermissions,
    userId:                             request.userId ?? null,
    onToolsChanged:                     opts.onToolsChanged,
    toolsRegisteredThisRun:             opts.toolsRegisteredThisRun,
    macrosRegisteredThisRun:            opts.macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun: opts.macroInterceptorsRegisteredThisRun,
    contentProcessorsRegisteredThisRun: opts.contentProcessorsRegisteredThisRun,
    // `activeContext` is intentionally omitted → buildScriptAPI substitutes
    // a live-getter view backed by `binding.ts`. Long-lived handlers
    // (registered tools, modal callbacks, etc.) read the CURRENT chat /
    // character at fire time rather than a stale snapshot from registration
    // time. See `executor.ts:ExecutorOptions.activeContext` JSDoc.
    //
    // `scriptStorage` is omitted in 9b (user-library `script.require()`
    // routing through IPC lands in 9d); built-in `ls:*` requires resolve
    // entirely inside the child via the bundled registry.
    //
    // `onConsole` is intentionally omitted — child-side console capture
    // forwards via IPC and routes through `activeRuns[runId].onConsole`,
    // so the parent's `buildScriptAPI` doesn't need it.
  });

  const fullRequest: RunScriptRequest = {
    type:               'run-script',
    runId,
    scriptId:           script.id,
    scriptName:         script.name,
    scriptType:         script.type,
    code:               script.code,
    data:               request.data,
    timeoutMs:          request.timeoutMs,
    grantedPermissions: Array.from(request.grantedPermissions),
    allowDangerous:     script.allowDangerous,
    chatIdAtStart:      getActiveChatId(),
    characterIdAtStart: getActiveCharacterId(),
    // Phase 9d.X — sync-array-read snapshots at dispatch time. The proxy
    // returns slices from these on `tools.list()` / etc. and mutates them
    // locally on register/unregister so within-run mutations are visible
    // to subsequent list() calls (matches canonical sync contract).
    toolsSnapshot:                 api.tools.list(),
    macrosSnapshot:                api.macros.list(),
    macroInterceptorsSnapshot:     api.macros.listInterceptors(),
    chatInjectionsSnapshot:        api.chat.getInjections(),
    chatContentProcessorsSnapshot: api.chat.listContentProcessors(),
    ...(request.userId !== undefined ? { userId: request.userId } : {}),
  };

  // (api was built above, before `fullRequest`, so the dispatch-time
  // sync-array-read snapshots in the IPC payload could be populated via
  // its `tools.list()` / `macros.list()` / etc. methods. Same api is
  // stored in `activeRuns` below for handling api-proxy IPCs from the
  // child during this run.)

  // Clear broadcast subscriptions for THIS script before the new run starts.
  // Mirrors the in-process pattern from `clearBroadcastByScriptId` —
  // subscriptions persist BETWEEN runs, wiped at the start of the next.
  // Clear in three places (the bus + our forwarder map + the child's
  // handler registry) so all sides agree.
  busClearByScriptId(script.id);
  broadcastForwarders.delete(script.id);
  if (childHandle) {
    const clearMsg: BroadcastClearMessage = {
      type:     'broadcast-clear',
      scriptId: script.id,
    };
    try {
      childHandle.send(clearMsg);
    } catch (err) {
      spindle.log.warn(`[script-runner] broadcast-clear send failed: ${String(err)}`);
    }
  }

  // Phase 9d.4.x — drop the previous script-body activeRun for this script
  // before installing the new one. The previous run's setInterval / setTimeout
  // / promise-chain continuations are conceptually orphaned by re-execution;
  // any late dispatches they make should fail with `RunCompletedError` from
  // here on. ls:startup scripts (single-run-per-lifetime) never trigger this
  // branch — their map entry only gets dropped via `unregisterScriptFromChild`.
  const previousScriptBodyRunId = scriptBodyActiveRunByScript.get(script.id);
  if (previousScriptBodyRunId !== undefined) {
    activeRuns.delete(previousScriptBodyRunId);
  }
  scriptBodyActiveRunByScript.set(script.id, runId);

  return new Promise<RunScriptResult>((resolve, reject) => {
    pendingRuns.set(runId, { resolve, reject });
    activeRuns.set(runId, {
      scriptId:   script.id,
      scriptName: script.name,
      startedAt:  Date.now(),
      api,
      handles:    new Map(),  // transient handles for this run (dropped on script-body lifecycle drop)
      onConsole:  opts.onConsole,
    });
    try {
      childHandle!.send(fullRequest);
    } catch (err) {
      pendingRuns.delete(runId);
      activeRuns.delete(runId);
      // Roll back the per-script tracking entry too — the run never started.
      if (scriptBodyActiveRunByScript.get(script.id) === runId) {
        scriptBodyActiveRunByScript.delete(script.id);
      }
      reject(err instanceof Error ? err : new Error(String(err)));
    }
  });
}

/**
 * Phase 9f-1 — fully unregister a script from the script-runner subsystem.
 *
 * Called from backend.ts's `update_script` (on disable) and
 * `delete_script` cases — the same teardown path that runs the canonical
 * `clearByScriptId` for tools / macros / interceptors / etc. This call
 * is the parallel cleanup for the child-process side of LumiScript.
 *
 * Performs in order:
 *   1. Sends `'script-unregister'` IPC to the child. Child's
 *      `handleScriptUnregister` clears `handlerClosures`,
 *      `broadcastHandlers`, `activeProxies`, AND module-scope state in
 *      `api-proxy.ts` (`advancedModalState`, `floatWidgetState`,
 *      `domStableIdToElementId`).
 *   2. Clears all parent-side per-script tables in this module:
 *      `pendingModals`, `pendingDomHandles`, `pendingAdvancedModals`,
 *      `pendingInputBarActions`, `pendingFloatWidgets`,
 *      `pendingDrawerTabs`, `handlerCleanups`, `broadcastForwarders`,
 *      `persistentHandles`, `lastDispatchByScript`, plus the awaiter
 *      tables (`pendingAdvancedModalOpens`, `pendingInputBarActionRegisters`,
 *      `pendingFloatWidgetCreates`, `pendingDrawerTabRegisters`).
 *
 * Idempotent on missing scriptId — safe to call multiple times or for a
 * script that never registered anything in the script runner.
 */
export function unregisterScriptFromChild(scriptId: string): void {
  // Send IPC first so the child can process its own cleanup before any
  // late api-requests it might still have queued reach the parent and
  // hit our about-to-be-cleared lookup tables.
  if (childHandle) {
    const msg: ScriptUnregisterMessage = {
      type: 'script-unregister',
      scriptId,
    };
    try { childHandle.send(msg); }
    catch (err) {
      spindle.log.warn(
        `[script-runner] script-unregister send failed for ${scriptId}: ${String(err)}`,
      );
    }
  }

  // Parent-side per-script handle tables. Each is keyed by scriptId at
  // its outermost level, so a single delete is sufficient.
  pendingModals.delete(scriptId);
  pendingDomHandles.delete(scriptId);
  pendingAdvancedModals.delete(scriptId);
  pendingInputBarActions.delete(scriptId);
  pendingFloatWidgets.delete(scriptId);
  pendingDrawerTabs.delete(scriptId);
  handlerCleanups.delete(scriptId);
  broadcastForwarders.delete(scriptId);
  persistentHandles.delete(scriptId);
  lastDispatchByScript.delete(scriptId);

  // Phase 9d.4.x — drop activeRuns owned by this script. With the script-body
  // activeRun lifecycle now extending past `run-result`, full teardown happens
  // here. Walk the map (rather than just dropping
  // `scriptBodyActiveRunByScript.get(scriptId)`) so any in-flight handler-fire
  // ephemeral activeRuns owned by this script also get dropped — those
  // wouldn't survive the child-side proxy cleanup that just fired anyway, and
  // dropping them here unblocks any late api-requests that might still race
  // through to land at clean RunCompletedError responses.
  for (const [runId, entry] of activeRuns) {
    if (entry.scriptId === scriptId) {
      activeRuns.delete(runId);
    }
  }
  scriptBodyActiveRunByScript.delete(scriptId);

  // Awaiter tables — keyed by `${scriptId}:${innerId}` for some, by
  // bare innerId for others. Reject + drop any awaiter that still has
  // the scriptId baked into its key. Awaiters at OPEN_AWAIT_TIMEOUT_MS
  // (3s) auto-reject anyway, but we drop early here so the proxy's
  // openAck rejects promptly when the script is being torn down rather
  // than after the timeout window.
  for (const [key, awaiter] of pendingInputBarActionRegisters) {
    if (key.startsWith(`${scriptId}:`)) {
      clearTimeout(awaiter.timer);
      pendingInputBarActionRegisters.delete(key);
      awaiter.reject(new Error(
        `api.ui.registerInputBarAction: script "${scriptId}" unregistered before open echo arrived`,
      ));
    }
  }
  for (const [key, awaiter] of pendingDrawerTabRegisters) {
    if (key.startsWith(`${scriptId}:`)) {
      clearTimeout(awaiter.timer);
      pendingDrawerTabRegisters.delete(key);
      awaiter.reject(new Error(
        `api.ui.registerDrawerTab: script "${scriptId}" unregistered before open echo arrived`,
      ));
    }
  }
  // pendingAdvancedModalOpens + pendingFloatWidgetCreates are keyed by
  // bare modalId/widgetId (not scriptId-prefixed) because their ids are
  // child-generated UUIDs unique across all scripts. The proxy would
  // need to track scriptId per awaiter to filter — for now we let them
  // time out naturally. Acceptable: the open IPC's client-side openAck
  // will eventually reject after OPEN_AWAIT_TIMEOUT_MS (3s); user code's
  // setTitle/dismiss/etc. dispatches no-op via destroyedRef thereafter.
}

/**
 * Graceful shutdown. Sends `ShutdownRequest` to the child, then awaits
 * the host's `stop()` to confirm the subprocess is gone. Idempotent.
 *
 * Called during LumiScript teardown (extension disable / unload). Hard
 * kills come through the host's lifecycle path and don't go through here.
 */
export async function shutdownScriptRunner(): Promise<void> {
  if (!childHandle) return;
  const handle = childHandle;
  childHandle = null;

  // Send graceful shutdown signal first; the child responds by calling
  // `process.complete()` which the host translates into a `completed`
  // lifecycle event.
  const shutdownMsg: ParentToChildMessage = { type: 'shutdown' };
  try {
    handle.send(shutdownMsg);
  } catch {
    // Channel may already be closed — fall through to stop().
  }

  try {
    await handle.stop({ reason: 'lumiscript_shutdown' });
  } catch (err) {
    spindle.log.warn(`[script-runner] graceful stop failed: ${String(err)}`);
  }

  messageUnsub?.();
  lifecycleUnsub?.();
  messageUnsub   = null;
  lifecycleUnsub = null;
}

/**
 * Diagnostic: returns the current state of the runner. Useful for the
 * Phase 2 startup smoke test and future telemetry / status surfaces.
 */
export function getScriptRunnerStatus(): {
  spawned:        boolean;
  processId:      string | null;
  inFlightRuns:   number;
  activeScripts:  string[];
} {
  return {
    spawned:       childHandle !== null,
    processId:     childHandle?.processId ?? null,
    inFlightRuns:  pendingRuns.size,
    activeScripts: Array.from(activeRuns.values()).map((a) => a.scriptName),
  };
}

// ─── Test-only inspectors (Phase 11.A) ─────────────────────────────────────
//
// Narrowly-scoped read-only views into module-scope state. Tests use these
// to assert on dispatcher behaviour without leaking internal Map/Set
// references (which would let a test mutate state and break others).
// Add new inspectors here as tests need them — keep each one focused.

/** @internal */
export function __getActiveRunIdsForTests(): string[] {
  return Array.from(activeRuns.keys());
}

/** @internal */
export function __hasActiveRunForTests(runId: string): boolean {
  return activeRuns.has(runId);
}

/** @internal */
export function __getActiveRunScriptIdForTests(runId: string): string | undefined {
  return activeRuns.get(runId)?.scriptId;
}

/** @internal */
export function __getScriptBodyRunIdForTests(scriptId: string): string | undefined {
  return scriptBodyActiveRunByScript.get(scriptId);
}

/** @internal */
export function __getPendingRunIdsForTests(): string[] {
  return Array.from(pendingRuns.keys());
}

/** @internal */
export function __getCachedUserIdForTests(): string | null {
  return cachedUserId;
}

/** @internal */
export function __getRestartAttemptsForTests(): number {
  return restartAttempts;
}

/** @internal */
export function __isRestartTimerScheduledForTests(): boolean {
  return restartTimer !== null;
}

/** @internal */
export function __isStabilityTimerScheduledForTests(): boolean {
  return stabilityTimer !== null;
}

/** @internal */
export function __getChildHandlePresentForTests(): boolean {
  return childHandle !== null;
}

// ─── Test-only awaiter installers + inspectors (Phase 11.B.2) ───────────────
//
// Direct access to the awaiter machinery without having to bring up a full
// api-request flow. Tests install an awaiter, observe the pending-table
// state, then either fire the matching `notifyXxx` to verify resolution,
// wait the (override-shrunk) timeout to verify rejection, or call
// `unregisterScriptFromChild` to verify drop semantics.
//
// `__setOpenAwaitTimeoutForTests(50)` typically — production awaiters take
// 3s, which is too slow for a unit test. Cleared by `__resetForTests`.

/** @internal */
export function __setOpenAwaitTimeoutForTests(ms: number | null): void {
  openAwaitTimeoutOverride = ms;
}

/** @internal */
export function __awaitAdvancedModalOpenForTests(modalId: string): Promise<void> {
  return awaitAdvancedModalOpen(modalId);
}

/** @internal */
export function __awaitInputBarActionRegisterForTests(scriptId: string, actionId: string): Promise<void> {
  return awaitInputBarActionRegister(scriptId, actionId);
}

/** @internal */
export function __awaitFloatWidgetCreateForTests(widgetId: string): Promise<void> {
  return awaitFloatWidgetCreate(widgetId);
}

/** @internal */
export function __awaitDrawerTabRegisterForTests(scriptId: string, tabId: string): Promise<void> {
  return awaitDrawerTabRegister(scriptId, tabId);
}

/** @internal */
export function __getPendingAdvancedModalOpenIdsForTests(): string[] {
  return Array.from(pendingAdvancedModalOpens.keys());
}

/** @internal */
export function __getPendingInputBarActionRegisterKeysForTests(): string[] {
  return Array.from(pendingInputBarActionRegisters.keys());
}

/** @internal */
export function __getPendingFloatWidgetCreateIdsForTests(): string[] {
  return Array.from(pendingFloatWidgetCreates.keys());
}

/** @internal */
export function __getPendingDrawerTabRegisterKeysForTests(): string[] {
  return Array.from(pendingDrawerTabRegisters.keys());
}

// ─── Test-only restart-logic overrides + inspectors (Phase 11.B.3) ──────────

/**
 * Returns the production backoff ladder for assertion against documented
 * values. Distinct from `__setRestartBackoffMsForTests` which overrides
 * what `scheduleRespawn` actually uses — this returns the constant.
 * @internal
 */
export function __getProductionRestartBackoffMsForTests(): readonly number[] {
  return RESTART_BACKOFF_MS;
}

/** @internal */
export function __getProductionStabilityThresholdMsForTests(): number {
  return STABILITY_THRESHOLD_MS;
}

/**
 * Override the backoff ladder for the next call to `scheduleRespawn`.
 * Pass null to restore the production ladder. Cleared by `__resetForTests`.
 * @internal
 */
export function __setRestartBackoffMsForTests(values: readonly number[] | null): void {
  restartBackoffOverride = values;
}

/**
 * Override the stability-reset threshold for the next call to
 * `spawnScriptRunner`. Pass null to restore the production value.
 * Cleared by `__resetForTests`.
 * @internal
 */
export function __setStabilityThresholdMsForTests(ms: number | null): void {
  stabilityThresholdOverride = ms;
}

/** @internal */
export function __getPendingHandlerCallIdsForTests(): string[] {
  return Array.from(pendingHandlerCalls.keys());
}

// ─── Test-only handler-IPC inspectors (Phase 11.B.4) ────────────────────────

/**
 * Direct entry point to the per-fire handler dispatch path. Returns the
 * same Promise<HandlerResult> production wrappers await on. Tests use
 * this to verify ephemeral activeRun installation, snapshot lookup,
 * pending-call tracking, and result routing without going through a
 * full register-handler flow.
 *
 * @internal
 */
export function __sendRunHandlerRequestForTests(
  scriptId:  string,
  handlerId: string,
  kind:      RunHandlerRequest['kind'],
  args:      unknown[],
  timeoutMs: number,
): Promise<HandlerResult> {
  return sendRunHandlerRequest(scriptId, handlerId, kind, args, timeoutMs);
}

/**
 * True iff `lastDispatchByScript` has a snapshot for the given scriptId.
 * Snapshot is installed on every `dispatchRunScript` and used by
 * `sendRunHandlerRequest` to source `(Script, grantedPermissions, userId)`
 * for handler invocations that fire after the registering run ends.
 * @internal
 */
export function __hasLastDispatchSnapshotForTests(scriptId: string): boolean {
  return lastDispatchByScript.has(scriptId);
}

// ─── Test-only reset (Phase 11.A) ───────────────────────────────────────────
//
// Resets every module-scope state container the dispatcher owns so successive
// tests start from a clean slate. Walks each awaiter table to `clearTimeout`
// any pending timers before dropping entries (otherwise the timer callback
// would fire against a torn-down test and pollute `bun test`'s timing).
//
// NOT exported in the production module index; tests import the file path
// directly (matches the established `__reset` convention in
// `dom-registry.ts`, `drawer-tab-registry.ts`, etc.).
//
// Pending Promises are NOT explicitly rejected — bun:test isolates each test
// so unsettled Promises are dropped with the test's own ALS context. If a
// future change introduces side effects (e.g. logging unsettled promises),
// reject explicitly here.
/** @internal */
export function __resetForTests(): void {
  // Singletons / scalars
  scriptResolver           = null;
  childHandle              = null;
  messageUnsub             = null;
  lifecycleUnsub           = null;
  cachedUserId             = null;
  restartAttempts          = 0;
  if (restartTimer  !== null) { clearTimeout(restartTimer);  restartTimer  = null; }
  if (stabilityTimer !== null) { clearTimeout(stabilityTimer); stabilityTimer = null; }
  spawnInFlight              = null;
  openAwaitTimeoutOverride   = null;
  restartBackoffOverride     = null;
  stabilityThresholdOverride = null;

  // Sequences (counter resets so test-generated IDs stay deterministic across runs)
  nextHandleSeq      = 1;
  nextHandlerCallSeq = 1;
  nextRunSeq         = 1;

  // Maps without timers — straight clear
  pendingRuns.clear();
  activeRuns.clear();
  scriptBodyActiveRunByScript.clear();
  pendingHandlerCalls.clear();
  abortControllers.clear();
  persistentHandles.clear();
  broadcastForwarders.clear();
  lastDispatchByScript.clear();
  handlerCleanups.clear();
  pendingModals.clear();
  pendingDomHandles.clear();
  pendingAdvancedModals.clear();
  pendingInputBarActions.clear();
  pendingFloatWidgets.clear();
  pendingDrawerTabs.clear();

  // Awaiter tables with timers — clearTimeout each entry before dropping
  for (const a of pendingAdvancedModalOpens.values())     clearTimeout(a.timer);
  for (const a of pendingInputBarActionRegisters.values()) clearTimeout(a.timer);
  for (const a of pendingFloatWidgetCreates.values())     clearTimeout(a.timer);
  for (const a of pendingDrawerTabRegisters.values())     clearTimeout(a.timer);
  pendingAdvancedModalOpens.clear();
  pendingInputBarActionRegisters.clear();
  pendingFloatWidgetCreates.clear();
  pendingDrawerTabRegisters.clear();
}
