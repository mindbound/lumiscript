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
 *
 * Timing-model invariants that contributors editing this file MUST internalize
 * before adding a new register-handler kind, persistent-handle kind, or
 * run-tracking-set surface: see `notes/step-2-timing-model.md`. The v0.26.1
 * post-mortem (`notes/post-mortem-v0.26.1-late-ipc-bugs.md`) walks through
 * what happens when each invariant is violated.
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
  RpcRequestContext,
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
import { executionStatusStore } from '../engine/execution-status.js';
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
import {
  scriptHasPinningRegistrations,
  getRegistrationCountsForScript,
  type ScriptRegistrationCounts,
} from '../engine/script-pinning.js';

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

// v0.26.4 — wire the frontend-send function from backend.ts. Used by the
// async broadcast-handler lifecycle dispatch to push `execution_started`
// / `execution_ended` messages to the frontend so the sidebar status dot
// reflects in-flight broadcast work. Optional: if backend.ts forgets to
// call this, the frontend dot just doesn't update for broadcast-driven
// async work (graceful degradation, not a crash).
type SendToFrontend = (msg: unknown) => void;
let sendToFrontend: SendToFrontend | null = null;

/**
 * Wire the frontend-send function. Called once during backend.ts cold-start
 * init alongside `setScriptResolver`. Idempotent: re-calling replaces.
 */
export function setSendToFrontend(send: SendToFrontend): void {
  sendToFrontend = send;
}

// ─── Configuration ──────────────────────────────────────────────────────────

/**
 * Identifier for a script-runner worker instance.
 *
 * Phase A (v1.0 runtime-isolation refactor — see
 * notes/v1.0-runtime-isolation-and-hot-reload.md): always
 * `DEFAULT_WORKER_KEY` (`'main'`). Phase B+ pool mode uses distinct values
 * like `'worker-1'`, `'worker-2'`, ... — one per pool member.
 */
export type ScriptRunnerWorkerKey = string;

const SCRIPT_RUNNER_KIND  = 'lumiscript-script-runner';
// v1.0 runtime-isolation refactor (Phase C1): renamed from 'main' to
// 'worker-1' for symmetry with the multi-worker pool keys ('worker-2',
// 'worker-3', ...). On upgrade-in-place from pre-v1.0, an old 'main'-keyed
// process may briefly orphan until extension reload — bounded, no data
// loss, fully GCed on host restart.
//
// Exported so tests can reference it without depending on the literal
// value (which may change in future phases).
export const DEFAULT_WORKER_KEY: ScriptRunnerWorkerKey = 'worker-1';
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
//
// v1.0 runtime-isolation refactor (Phase A) — `childHandles` is keyed by
// `ScriptRunnerWorkerKey` so Phase B can extend to multiple concurrent
// workers without further state changes here. Phase A uses only the
// `DEFAULT_WORKER_KEY` entry; functionally equivalent to the pre-refactor
// `let childHandle: BackendProcessHandle | null` global.

const childHandles = new Map<ScriptRunnerWorkerKey, BackendProcessHandle>();

/**
 * Look up the BackendProcessHandle for a specific worker.
 * Returns null if that worker isn't currently spawned.
 *
 * Phase A callers omit the key argument and operate on the default worker.
 */
function getChildHandle(
  key: ScriptRunnerWorkerKey = DEFAULT_WORKER_KEY,
): BackendProcessHandle | null {
  return childHandles.get(key) ?? null;
}

/** Register a spawned BackendProcessHandle against a worker key. */
function setChildHandle(
  key: ScriptRunnerWorkerKey,
  handle: BackendProcessHandle,
): void {
  childHandles.set(key, handle);
  // Phase E — initial activity timestamp; the spawn itself counts as
  // activity so a freshly-spawned worker isn't immediately idle-evictable.
  workerLastActivity.set(key, Date.now());
}

/** Drop the registration for a worker key. Returns `true` if an entry existed. */
function deleteChildHandle(key: ScriptRunnerWorkerKey): boolean {
  return childHandles.delete(key);
}

/** True if at least one worker is currently spawned. */
function hasAnyChildHandle(): boolean {
  return childHandles.size > 0;
}

let messageUnsub:   (() => void) | null = null;
let lifecycleUnsub: (() => void) | null = null;

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

// `cachedUserId` stays a module-scope singleton — all workers spawn under
// the same userId (LumiScript is operator-scoped; one userId per extension
// instance).
let cachedUserId: string | null = null;

// v1.0 runtime-isolation refactor (Phase B) — restart bookkeeping is
// per-worker, keyed by `ScriptRunnerWorkerKey`. With single-worker default
// (Phase B effective pool size = 1), only the `DEFAULT_WORKER_KEY` entry
// exists. Phase D promotes the configurable default to >1.
const restartAttempts = new Map<ScriptRunnerWorkerKey, number>();
const restartTimers   = new Map<ScriptRunnerWorkerKey, ReturnType<typeof setTimeout>>();
const stabilityTimers = new Map<ScriptRunnerWorkerKey, ReturnType<typeof setTimeout>>();

function getRestartAttempts(key: ScriptRunnerWorkerKey): number {
  return restartAttempts.get(key) ?? 0;
}
function incrementRestartAttempts(key: ScriptRunnerWorkerKey): number {
  const next = getRestartAttempts(key) + 1;
  restartAttempts.set(key, next);
  return next;
}
function resetRestartAttempts(key: ScriptRunnerWorkerKey): void {
  restartAttempts.delete(key);
}

function getRestartTimer(key: ScriptRunnerWorkerKey): ReturnType<typeof setTimeout> | null {
  return restartTimers.get(key) ?? null;
}
function setRestartTimer(
  key:   ScriptRunnerWorkerKey,
  timer: ReturnType<typeof setTimeout>,
): void {
  restartTimers.set(key, timer);
}
function clearRestartTimer(key: ScriptRunnerWorkerKey): void {
  const t = restartTimers.get(key);
  if (t !== undefined) {
    clearTimeout(t);
    restartTimers.delete(key);
  }
}

function getStabilityTimer(key: ScriptRunnerWorkerKey): ReturnType<typeof setTimeout> | null {
  return stabilityTimers.get(key) ?? null;
}
function setStabilityTimer(
  key:   ScriptRunnerWorkerKey,
  timer: ReturnType<typeof setTimeout>,
): void {
  stabilityTimers.set(key, timer);
}
function clearStabilityTimer(key: ScriptRunnerWorkerKey): void {
  const t = stabilityTimers.get(key);
  if (t !== undefined) {
    clearTimeout(t);
    stabilityTimers.delete(key);
  }
}

/**
 * True if `processId` belongs to any of our currently-spawned workers.
 * Used by the global `onMessage` subscription to filter events for
 * processes we own across all pool members.
 */
function isOwnedProcessId(processId: string): boolean {
  for (const handle of childHandles.values()) {
    if (handle.processId === processId) return true;
  }
  return false;
}

/**
 * Reverse-lookup: find the workerKey for a given processId. Returns null
 * if no spawned worker matches. Used by `handleChildMessage` to attribute
 * inbound activity to the right worker for idle-eviction tracking (Phase
 * E). O(N) over `childHandles` (≤16 entries).
 */
function processIdToWorkerKey(processId: string): ScriptRunnerWorkerKey | null {
  for (const [key, handle] of childHandles) {
    if (handle.processId === processId) return key;
  }
  return null;
}

// ─── Worker assignment (Phase C1 / C2) ─────────────────────────────────────
//
// v1.0 runtime-isolation refactor — maps each enabled trigger script to
// the worker pool member that hosts it. Phase C2 promotes the C1 stub to
// actual least-loaded distribution across the pool configured via the
// `workerCount` setting.
//
// Assignment is in-memory only — on extension restart, all scripts get
// re-assigned via the same algorithm. No cross-session affinity guarantee.
//
// Stickiness: an existing assignment is preserved across pool-size
// changes (a script on `worker-2` stays on `worker-2` even if user grows
// the pool from 2 to 4). New assignments distribute across the new pool.
// A manual "Rebalance pool" UI action (Phase F) will provide explicit
// redistribution. A pool-size *decrease* triggers auto-rebalance off the
// over-cap workers (`rebalanceWorkerPool`) since those workers are being
// phased out.

const scriptWorkerAssignments = new Map<string, ScriptRunnerWorkerKey>();

// Phase C2 — `workerCount` setting reader. Wired by `backend.ts` cold-start
// init (see `setWorkerCountReader`) to pull live values from the settings
// store. Default returns 1 if backend forgets to wire — keeps single-worker
// behaviour as the safe fallback.
type WorkerCountReader = () => number;
let workerCountReader: WorkerCountReader = () => 1;

/**
 * Wire the workerCount reader. Called once during `backend.ts` cold-start
 * init alongside `setScriptResolver` + `setSendToFrontend`. Idempotent:
 * re-calling replaces the reader.
 */
export function setWorkerCountReader(fn: WorkerCountReader): void {
  workerCountReader = fn;
}

/**
 * Returns the workerKey hosting `scriptId`. Assigns lazily on first lookup
 * via least-loaded distribution across the configured pool. Sticky:
 * subsequent lookups return the same assignment until
 * `releaseScriptFromWorker` clears it.
 *
 * Ties on count are broken by lower index in the pool, so `worker-1` wins
 * over `worker-2` when both are equally loaded.
 */
function getWorkerForScript(scriptId: string): ScriptRunnerWorkerKey {
  const existing = scriptWorkerAssignments.get(scriptId);
  if (existing !== undefined) return existing;

  const known  = getKnownWorkerKeys();
  const counts = new Map<ScriptRunnerWorkerKey, number>(known.map(k => [k, 0]));
  for (const w of scriptWorkerAssignments.values()) {
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  let assigned = known[0]!;
  let min      = counts.get(assigned) ?? 0;
  for (let i = 1; i < known.length; i++) {
    const k = known[i]!;
    const c = counts.get(k) ?? 0;
    if (c < min) { min = c; assigned = k; }
  }
  scriptWorkerAssignments.set(scriptId, assigned);
  // Fires once per script's first dispatch — sticky-cache hits at line 403
  // return early before reaching here. Single log line per script-lifetime
  // gives operators a record of where each script landed without per-fire
  // log spam. Useful for verifying multi-worker distribution during manual
  // testing (Section 5.1) and for field debugging of cross-worker routing
  // issues. Counts in `getKnownWorkerKeys().length === 1` ("single-worker
  // mode") are still logged — harmless and confirms the single-worker
  // path for the default `workerCount=1` setup.
  spindle.log.info(
    `[script-runner] assigned script ${scriptId} to worker '${assigned}' ` +
    `(pool size: ${known.length})`,
  );
  return assigned;
}

/**
 * Drop the assignment for a script — call when the script is disabled or
 * deleted so its slot frees up for future least-loaded calculations.
 */
function releaseScriptFromWorker(scriptId: string): void {
  scriptWorkerAssignments.delete(scriptId);
}

/**
 * The set of worker keys the extension is *configured* to know about —
 * the pool of assignable workers. Driven by the `workerCount` setting,
 * clamped to `[1, 16]` (host enforces a 16-process cap per extension via
 * Spindle's `MAX_BACKEND_PROCESSES`).
 *
 * Used by:
 *   - `getWorkerForScript` least-loaded assignment (over THIS set).
 *   - `rebalanceWorkerPool` decrease handler (anything spawned not in this
 *     set is over-cap and a rebalance candidate).
 *
 * NOTE: The lifecycle filter uses `isActiveWorkerKey(key)` which checks
 * the union of this set + currently-spawned workers, to keep transitional
 * over-cap workers supervised during a pool-size-decrease rebalance.
 */
function getKnownWorkerKeys(): ScriptRunnerWorkerKey[] {
  const raw = workerCountReader();
  const n   = Math.max(1, Math.min(16, Math.floor(raw)));
  return Array.from({ length: n }, (_, i) => `worker-${i + 1}`);
}

/**
 * Whether `key` is currently a worker we recognise — either configured in
 * the pool OR currently spawned (for transitional over-cap workers during
 * a `workerCount` decrease). Used by `handleLifecycle` to filter events.
 *
 * The union view ensures lifecycle events for over-cap workers (in-flight
 * shutdown after a pool decrease) still flow through cleanup logic
 * rather than being silently dropped.
 */
function isActiveWorkerKey(key: ScriptRunnerWorkerKey): boolean {
  if (getKnownWorkerKeys().includes(key)) return true;
  return childHandles.has(key) || spawnInFlights.has(key);
}

// ─── Eviction (Phase E) ────────────────────────────────────────────────────
//
// Per-worker last-activity timestamps drive idle eviction; per-worker
// memory usage drives memory-ceiling eviction. The sweep runs on a
// periodic interval (60 s) and applies both policies. Workers with active
// trigger runs are exempt; the sweep always keeps at least
// `MIN_WARM_WORKERS` alive while any scripts are enabled.

/**
 * Sweep cadence — how often the eviction sweep runs. Bounded enough to
 * respond to memory pressure within a minute without flooding the
 * `diagnostic-stats-request` IPC channel (one query per spawned worker
 * per cycle).
 */
const EVICTION_SWEEP_INTERVAL_MS = 60_000;

/**
 * Per-worker memory-query timeout. Generous; the child usually responds
 * to `diagnostic-stats-request` in a few ms. A worker that's hung past
 * this is probably the *cause* of memory pressure, so a null reading
 * shouldn't block the sweep — the sweep just skips that worker's
 * contribution for this cycle.
 */
const EVICTION_MEMORY_QUERY_TIMEOUT_MS = 2_000;

/**
 * Hard-coded minimum warm workers — never evict below this count while
 * any scripts are enabled. Phase F may expose a configurable knob.
 */
const MIN_WARM_WORKERS = 1;

/**
 * Eviction policy values — read from the live settings via a wired
 * reader (see `setEvictionConfigReader`). The sweep reads fresh on
 * every cycle so settings changes take effect at the next sweep without
 * an explicit "reconfigure" call.
 */
export interface EvictionConfig {
  /** Idle window in ms; workers idle past this are eligible for eviction. */
  idleTimeoutMs:      number;
  /** Total memory ceiling in bytes; sum across all workers' RSS. */
  memoryCeilingBytes: number;
}

type EvictionConfigReader = () => EvictionConfig;
let evictionConfigReader: EvictionConfigReader = () => ({
  idleTimeoutMs:      30 * 60 * 1000,
  memoryCeilingBytes: 512 * 1024 * 1024,
});

/**
 * Wire the eviction config reader. Called once during `backend.ts` cold-
 * start init alongside `setWorkerCountReader`. Idempotent.
 */
export function setEvictionConfigReader(fn: EvictionConfigReader): void {
  evictionConfigReader = fn;
}

/**
 * Per-worker last-activity timestamps (ms since epoch). Bumped at every
 * dispatch site that sends to a worker AND at every inbound message
 * receive (except internal stats responses, which would self-bump every
 * sweep cycle). Used by the idle-eviction policy.
 */
const workerLastActivity = new Map<ScriptRunnerWorkerKey, number>();

/**
 * Bump a worker's last-activity timestamp. Called from dispatch + receive
 * paths. Cheap (one Map.set); negligible overhead at any realistic IPC
 * volume.
 */
function bumpWorkerActivity(workerKey: ScriptRunnerWorkerKey): void {
  workerLastActivity.set(workerKey, Date.now());
}

// Sweep timer state.
let evictionSweepTimer: ReturnType<typeof setInterval> | null = null;

// Phase E telemetry — monotonic counter + last-eviction snapshot for the
// diagnostics panel. Bumped in `evictWorker`. Reset only by
// `__resetForTests` (session-lifetime otherwise).
let totalEvictions:     number        = 0;
let lastEvictionAt:     number | null = null;
let lastEvictionReason: string | null = null;

// v1.0.0-rc.3+ telemetry — eviction-sweep ticks that decided NOT to evict
// a candidate worker because at least one assigned script holds active
// registrations (tool / macro / drawer tab / RPC endpoint / etc.). The
// counter increments once per skipped worker per sweep tick, so a sweep
// that finds three over-threshold workers all pinned by registrations
// bumps this by three. Sustained growth means "registration owners are
// keeping workers warm against the idle policy" — expected for users
// running long-lived tool / panel scripts, anomalous if the user has
// none of those.
let totalEvictionsSkippedByPin: number = 0;

// v0.28.0+ — Diagnostics-only counters. Separate from `restartAttempts`
// (which is the *current backoff index* and resets to 0 after a stable
// period). `totalRestartCount` is monotonic across the whole session so
// the diagnostics panel can surface "how many times has the script-runner
// been respawned since LumiScript loaded?" — a sustained non-zero value
// is a useful signal that something's repeatedly killing the child.
let totalRestartCount: number       = 0;
let lastRestartReason: string | null = null;

/**
 * In-flight `diagnostic-stats-request` correlations. Keyed by the requestId
 * we generated when sending; resolved by `handleChildMessage`'s response
 * branch. Cleared by either the resolution OR the caller's timeout cleanup,
 * whichever comes first.
 */
const pendingDiagnosticStats = new Map<
  string,
  (response: import('../types/script-runner-ipc.js').DiagnosticStatsResponse) => void
>();
let nextDiagnosticRequestSeq = 1;

/**
 * Phase 9c concurrency: when multiple callers race to spawn the child
 * (e.g. several ls:startup scripts firing fire-and-forget at activation
 * time), the first reads `!hasAnyChildHandle()` and starts spawning;
 * any concurrent caller that arrives BEFORE the first's `await` resolves
 * also reads null and would spawn a second time — the host's
 * `replaceExisting: true` would then kill the first child mid-flight,
 * dropping in-flight runs and triggering a `failed` lifecycle event.
 *
 * Coalescing: stash the in-flight spawn promise here so concurrent
 * callers await the SAME promise. Cleared on resolve/reject so a future
 * spawn (after a crash + Phase-10 restart) can fire fresh.
 *
 * Phase B (v1.0 runtime-isolation) — keyed by `ScriptRunnerWorkerKey` so
 * concurrent spawns of different workers don't conflict; a single worker's
 * coalescing semantics are unchanged.
 */
const spawnInFlights = new Map<ScriptRunnerWorkerKey, Promise<BackendProcessHandle>>();

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
  /**
   * The worker hosting this run. Phase C1: always `DEFAULT_WORKER_KEY`.
   * Phase C2 routes handler IPCs back through this key when multiple
   * workers are concurrently active.
   */
  workerKey:  ScriptRunnerWorkerKey;
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

// ─── v0.26.1 — per-script obj→handleId reverse map ──────────────────────────
//
// Persistent handles benefit from de-duplication: when the canonical
// returns the SAME JS object for repeated `api.db.collection(...)` calls
// (via `collection-handle-cache`), we should re-use the existing handle id
// rather than minting a fresh one each time. Without this, the persistent
// table accumulates many entries all pointing to the same object.
//
// The reverse map is keyed by scriptId (so cleanup is per-script) and
// maps the canonical JS object to its existing handle id. Looked up at
// the START of `registerHandle`; if hit, return the existing HandleRef.
// Cleared on script-unregister alongside `persistentHandles`.
//
// Transient handles are NOT deduplicated here — each transient handle is
// scoped to its originating run and shouldn't be shared across runs even
// when the obj is the same. Only persistent handles enter this map.

const persistentObjToHandleId = new Map<string, WeakMap<object, string>>();

function getOrCreateObjReverseMap(scriptId: string): WeakMap<object, string> {
  let map = persistentObjToHandleId.get(scriptId);
  if (!map) {
    map = new WeakMap<object, string>();
    persistentObjToHandleId.set(scriptId, map);
  }
  return map;
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
  // Phase C1 — route to the worker that hosts this script. C1 always
  // resolves to DEFAULT_WORKER_KEY; C2 distributes per-script.
  const workerKey = getWorkerForScript(scriptId);
  if (!getChildHandle(workerKey)) {
    throw new Error(`[script-runner] handler fire: worker '${workerKey}' for script ${scriptId} not running`);
  }
  // Phase E — bump activity; handler invocations count as work.
  bumpWorkerActivity(workerKey);
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
    workerKey,
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
      getChildHandle(workerKey)!.send(msg);
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
  // Phase C2 — route the notice to the worker hosting the widget's owning
  // script. The widget is registered under its owner's `scriptId` in
  // `pendingFloatWidgets`; we walk the (small) map to find it. O(N) over
  // total widget count — drag-end is user-paced, not perf-critical.
  let ownerScriptId: string | null = null;
  for (const [scriptId, widgets] of pendingFloatWidgets) {
    if (widgets.has(widgetId)) {
      ownerScriptId = scriptId;
      break;
    }
  }
  if (ownerScriptId === null) return;  // widget not registered (already torn down)

  const workerKey = getWorkerForScript(ownerScriptId);
  const handle    = getChildHandle(workerKey);
  if (!handle) return;
  // Phase E — fire-and-forget; bump activity.
  bumpWorkerActivity(workerKey);

  const notice: FloatWidgetPositionNotice = {
    type:     'float-widget-position',
    widgetId,
    x,
    y,
  };
  try { handle.send(notice); } catch (err) {
    spindle.log.warn(
      `[script-runner] float-widget-position send to worker '${workerKey}' failed for ${widgetId}: ${String(err)}`,
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

/**
 * Per-script "fallback" onConsole. Populated at every script-body dispatch
 * (`dispatchRunScript`) when the caller provides an `onConsole` option;
 * read by `handleConsoleEntry` when the runId-keyed `activeRuns` lookup
 * misses OR when the activeRun entry doesn't carry `onConsole`.
 *
 * Fixes two pre-existing console-routing failures:
 *
 *   1. **Orphaned-runId.** Phase 9d.4.x drops the previous script-body
 *      activeRun when a new `dispatchRunScript` fires for the same script.
 *      Late `console.log` calls from the orphaned run (`setInterval` ticks,
 *      long-tail `.then` chains, setTimeout callbacks) hit
 *      `activeRuns.get(runId)` → `undefined` and previously got silently
 *      dropped. Now they fall back to the per-script onConsole — same
 *      editor console panel, same script, so the routing is correct.
 *
 *   2. **Handler-call without onConsole.** `dispatchRunHandler` creates an
 *      activeRun for the handler call but does NOT supply `onConsole` —
 *      handler invocations have no caller-provided callback.
 *      `console.log` inside a broadcast / macro / tool / chat-injection /
 *      world-info / DOM event handler hit `!active.onConsole` and
 *      previously got silently dropped. Now they fall back to the
 *      per-script onConsole — visible in the editor console alongside
 *      the trigger-body output.
 *
 * Cleared in `unregisterScriptFromChild` (script disable / delete).
 */
const lastOnConsoleByScript = new Map<string, NonNullable<ActiveRun['onConsole']>>();

/**
 * Per-script counter of async broadcast handler invocations currently in
 * flight in the child. Bumped by `broadcast-handler-started` IPC,
 * decremented by `broadcast-handler-finished` (both ok and error arms).
 *
 * Used by `scriptHasActiveDispatch` to detect "broadcast handler is doing
 * async work in the child." Broadcast fires are fire-and-forget from the
 * parent (`sendBroadcastFireToChild` ships the IPC and returns), so
 * neither `pendingRuns` nor `pendingHandlerCalls` ever see them — without
 * this counter, an autosave-driven `ls:reload` would fire while e.g. the
 * tracker's `tracker:request-rerun` handler is mid-LLM-extraction,
 * breaking the "drop reload while script is busy" contract for scripts
 * that use broadcast handlers as long-running background work.
 *
 * Sync broadcast handlers don't emit started/finished IPCs (they return
 * non-thenable values; see `handleBroadcastFire` in child-entry.ts where
 * the lifecycle messages are only emitted when the user's handler return
 * value is a thenable). But sync handlers complete within their IPC
 * dispatch — there's no observable in-flight window worth detecting.
 *
 * Cleared in `unregisterScriptFromChild`.
 */
const broadcastHandlerInFlight = new Map<string, number>();

// ─── v0.26.1+ — per-run tracking-set registry ────────────────────────────────
//
// The trigger-registry passes per-run `Set<string>` instances for tools /
// macros / interceptors / processors / rpc endpoints in
// `DispatchRunScriptOpts.{tools,macros,...}RegisteredThisRun`. The canonical
// `register` methods (e.g. `api.macros.register`) add to whichever Set was
// installed in the api's deps — i.e., the run-specific Set captured by
// `buildScriptAPI(script, opts)` at dispatch time.
//
// Stale-diff at run-end uses the same Set reference (held by trigger-
// registry's local scope) to decide what to drop: `preRun \ registeredThisRun`.
//
// THE PROBLEM — late-arriving register-handler IPCs:
//   When a register-handler IPC for run-N arrives at the parent AFTER
//   run-N's `activeRuns` entry has been dropped (because a follow-up
//   `dispatchRunScript` for the same script replaced it), the
//   `activeOrLatestForScript` fallback routes the registration to run-(N+k)'s
//   api. The canonical's register populates run-(N+k)'s tracking set —
//   correct for that run. BUT run-N's tracking set stays empty.
//   When run-N's stale-diff later runs (run-N's body completes, run-result
//   arrives, executeTrigger resumes), it operates on its OWN local Set
//   reference and sees no registration for the macro/tool/etc. that the
//   user-script's body actually did register. Stale-diff drops it from
//   the store and `spindle.unregisterMacro`s it.
//
// THE FIX:
//   This map exposes per-runId tracking sets so the fallback path in
//   `handleRegisterHandler` can update the originating run's sets in
//   addition to the fallback target's. Result: run-N's stale-diff sees
//   the macro as registered-this-run and skips it.
//
// LIFECYCLE:
//   - Populated in `dispatchRunScript` when `opts.{X}RegisteredThisRun`
//     are supplied.
//   - Read by `handleRegisterHandler` cases on the fallback path (when
//     `activeOrLatestForScript` returned a different run than `msg.runId`).
//   - Cleaned up on `unregisterScriptFromChild` (entries owned by that
//     scriptId), on lifecycle `failed` / `timed_out` (clear all), and via
//     `__resetForTests`. Intentionally NOT cleaned up on next-dispatch
//     for the same script — late register-handler IPCs may still arrive
//     (the whole reason this map exists).
//
// MEMORY BOUND:
//   Per-entry footprint is small (a Map entry, the runId string key, the
//   PerRunTrackingSets struct of 5 Set references, and the scriptId string —
//   ~few hundred bytes total). With normal trigger workloads (~5 dispatches
//   per chat-turn × ~100 turns/session) the map stays well under a hundred
//   entries; growth is negligible.
//
//   For pathological workloads (a high-frequency trigger like MESSAGE_EDITED
//   firing on every keystroke, sustained for an extended session) the
//   unbounded growth could matter. We apply a soft cap with FIFO eviction:
//   when the map exceeds `TRACKING_SETS_SOFT_CAP` entries, the oldest entry
//   is dropped on each new insertion. JS Maps preserve insertion order so
//   `map.keys().next().value` gives the oldest key.
//
//   Cap is set high (10_000) so normal operation never trips it. If a real
//   workload trips the cap, the eviction emits a one-shot info log so the
//   operator can see it happened. After that, evictions are silent until
//   the cap-trip resets via __resetForTests / lifecycle reset / 30-second
//   re-warning window.
//
//   RISK: when an evicted entry is later looked up by the dual-update path
//   (because a late register-handler IPC arrived for that runId), the
//   `?.macros?.add` no-ops silently. The originating run's stale-diff would
//   then drop the registration — the exact bug Fix 9 prevents. The cap is
//   set high enough that this is extremely unlikely in practice; we accept
//   it as a tradeoff against unbounded memory growth.

interface PerRunTrackingSets {
  scriptId:               string;
  tools?:                 Set<string>;
  macros?:                Set<string>;
  macroInterceptors?:     Set<string>;
  contentProcessors?:     Set<string>;
  worldInfoInterceptors?: Set<string>;
  rpcEndpoints?:          Set<string>;
}

const trackingSetsByRunId = new Map<string, PerRunTrackingSets>();

const TRACKING_SETS_SOFT_CAP = 10_000;
/** Window during which we suppress repeat eviction warnings (ms). */
const TRACKING_SETS_EVICTION_WARN_WINDOW_MS = 30_000;
let lastTrackingSetEvictionWarnAt = 0;
/** Test-only override for the cap. Cleared by `__resetForTests`. */
let trackingSetsCapOverride: number | null = null;

/**
 * Apply the soft FIFO eviction cap to `trackingSetsByRunId`. Called
 * immediately after a new entry is inserted in `dispatchRunScript`. Logs
 * once per `TRACKING_SETS_EVICTION_WARN_WINDOW_MS` to surface unusual
 * workloads without spamming.
 */
function enforceTrackingSetsCap(): void {
  const cap = trackingSetsCapOverride ?? TRACKING_SETS_SOFT_CAP;
  while (trackingSetsByRunId.size > cap) {
    const oldestKey = trackingSetsByRunId.keys().next().value;
    if (oldestKey === undefined) return;
    trackingSetsByRunId.delete(oldestKey);
    const now = Date.now();
    if (now - lastTrackingSetEvictionWarnAt > TRACKING_SETS_EVICTION_WARN_WINDOW_MS) {
      lastTrackingSetEvictionWarnAt = now;
      spindle.log.info(
        `[script-runner] trackingSetsByRunId exceeded soft cap of ${cap} ` +
        `entries; evicted oldest entry (runId=${oldestKey}). High-frequency-trigger workload? ` +
        `Late register-handler IPCs for the evicted runs may no-op the dual-update — see ` +
        `notes/post-mortem-v0.26.1-late-ipc-bugs.md for the bug class this prevents.`,
      );
    }
  }
}

let nextRunSeq = 1;

function generateRunId(): string {
  return `run-${Date.now()}-${nextRunSeq++}`;
}

/**
 * v0.26.1 — unified runId-fallback resolver.
 *
 * Used by both `handleRegisterHandler` and `handleApiRequest` to find the
 * activeRun for a dispatch whose originating runId's activeRun has been
 * dropped (race window between `dispatchRunScript` dropping the previous
 * run's activeRun and a still-in-flight IPC from the previous run landing
 * at the parent). See `notes/step-2-timing-model.md` invariants I1, I2, I6
 * for the full background.
 *
 * Two policies:
 *
 *   - `'register-handler'`: ALWAYS attempts fallback. Safe because:
 *       - The wrapper closure built downstream captures `msg.scriptId` and
 *         `msg.handlerId` only — not the dispatch-time runId.
 *       - Child-side handler closures live in `handlerClosures[scriptId][handlerId]`,
 *         populated BEFORE the IPC is sent — so the wrapper still finds its
 *         closure when fired regardless of which run we register against.
 *       - Routing to the current active run correctly populates that run's
 *         `*RegisteredThisRun` tracking set (the originating run's set is
 *         dual-updated separately via `trackingSetsByRunId` — see Fix 9).
 *
 *   - `'api-request'`: fallback ONLY when the dispatch's metadata indicates
 *     re-routing is safe:
 *       - `_runIdSource === 'latest'` (top-level dispatch via stale routing
 *         key from the proxy's `latestRunIdByScript` map): always safe;
 *         dispatch carries no per-run state.
 *       - `_runIdSource === 'ctx'` AND `targetHandle.kind` is persistent:
 *         the handle resolves via `persistentHandles` (per-script, not
 *         per-run); we just need any active run for the api method's
 *         execution context.
 *       - `_runIdSource === 'ctx'` on a transient handle: the handle is
 *         tied to its originating run; if that run is gone the handle is
 *         too. NO fallback — return undefined so caller produces RunCompletedError.
 *       - `_runIdSource === 'context'` (handler-fire AsyncLocalStorage):
 *         handler-fires are per-call by design. NO fallback.
 *
 * Returns `undefined` if no fallback is permitted by policy OR no current
 * active run exists. Caller decides what to do (log skip, return RunCompletedError).
 *
 * Logs at info-level when fallback engages — visible in the backend log
 * whenever the timing race fires in production. Spamming this log is
 * expected during high-frequency trigger sequences (tracker-style scripts);
 * the audit trail is intentional.
 */
interface ResolveActiveRunCtx {
  scriptId:       string;
  runId:          string;
  /** Only relevant for `'api-request'` policy. */
  runIdSource?:   'context' | 'latest' | 'ctx' | undefined;
  /** Only relevant for `'api-request'` policy with `runIdSource === 'ctx'`. */
  targetHandle?:  HandleRef | undefined;
}
type ResolveActiveRunPolicy = 'register-handler' | 'api-request';

function resolveActiveRun(
  ctx:    ResolveActiveRunCtx,
  policy: ResolveActiveRunPolicy,
): ActiveRun | undefined {
  // Direct lookup — most common path; succeeds when the originating run
  // is still alive (not dropped by a follow-up dispatch).
  const direct = activeRuns.get(ctx.runId);
  if (direct) return direct;

  // Decide whether the policy permits fallback for this dispatch shape.
  let canFallback: boolean;
  switch (policy) {
    case 'register-handler':
      canFallback = true;
      break;
    case 'api-request':
      canFallback =
        ctx.runIdSource === 'latest' ||
        (ctx.runIdSource === 'ctx' &&
         ctx.targetHandle !== undefined &&
         HANDLE_KIND_LIFECYCLE[ctx.targetHandle.kind] === 'persistent');
      break;
  }
  if (!canFallback) return undefined;

  // Look up the script's current run.
  const latestRunId = scriptBodyActiveRunByScript.get(ctx.scriptId);
  if (latestRunId === undefined || latestRunId === ctx.runId) return undefined;
  const fallback = activeRuns.get(latestRunId);
  if (!fallback) return undefined;

  // Audit-trail log. Includes policy + (when relevant) targetHandle/runIdSource
  // so the operator can correlate with downstream warns.
  const detail = policy === 'register-handler'
    ? 'register-handler'
    : `api dispatch (source=${ctx.runIdSource ?? 'unknown'}` +
      (ctx.targetHandle ? `, handle=${ctx.targetHandle.kind}/${ctx.targetHandle.id})` : ')');
  spindle.log.info(
    `[script-runner] ${detail} fallback: runId ${ctx.runId} no longer active; ` +
    `routing to script's current run ${latestRunId} (script ${ctx.scriptId})`,
  );
  return fallback;
}

/**
 * Convenience wrapper: register-handler-policy fallback. Equivalent to
 * `resolveActiveRun({scriptId, runId}, 'register-handler')`. Kept as its
 * own name because the call sites in `handleRegisterHandler` are dense
 * enough that the shorter form reads better.
 */
function activeOrLatestForScript(scriptId: string, runId: string): ActiveRun | undefined {
  return resolveActiveRun({ scriptId, runId }, 'register-handler');
}

/**
 * v0.26.1+ — diagnostic-rich warn for the register-handler "skipped" path.
 *
 * When `activeOrLatestForScript` returns undefined, even the fallback
 * couldn't find a viable activeRun. The end-of-run stale-diff will then
 * drop the macro/tool/etc. on the assumption that the user-script forgot
 * to re-register it — which leads to follow-on symptoms (e.g. tracker-ui's
 * `{{tracker}}` resolve returning the literal text and the footer not
 * rendering).
 *
 * The diagnostic captures:
 *   - whether the direct `activeRuns[runId]` lookup hit or missed
 *   - what `scriptBodyActiveRunByScript[scriptId]` currently holds
 *     (`'none'` if undefined)
 *   - whether THAT runId has a live activeRuns entry
 *   - the runIds of any other activeRuns owned by this script (capped at
 *     5 to avoid log spam during pathological repro scenarios)
 *   - the global activeRuns size
 *
 * Read together, these values pinpoint why the fallback failed:
 *
 *   - `directLookup=missing, scriptBodyLatest=none`: script never dispatched
 *     OR `unregisterScriptFromChild` ran (full teardown).
 *   - `directLookup=missing, scriptBodyLatest=<X>, latestExists=false`:
 *     scriptBodyActiveRunByScript points at a dead runId — implies a
 *     mid-state where activeRuns was cleared but scriptBodyActiveRunByScript
 *     wasn't. Lifecycle race or test-only path.
 *   - `directLookup=missing, scriptBodyLatest=<X>, latestExists=true,
 *      activeForScript=[X]`: fallback returned undefined ONLY because
 *     `latestRunId === runId` (the dead runId). Sequence of state changes
 *     where scriptBodyActiveRunByScript wasn't updated.
 *   - `directLookup=missing, scriptBodyLatest=<X>, latestExists=true,
 *      activeForScript=[X, Y, Z]`: multiple alive runs for this script.
 *     Indicates concurrent dispatchRunScript races or handler-fire
 *     ephemeral runs left behind.
 */
function logLateRegisterSkip(msg: RegisterHandler): void {
  const directExists = activeRuns.has(msg.runId);
  const latestRunId  = scriptBodyActiveRunByScript.get(msg.scriptId);
  const latestExists = latestRunId !== undefined && activeRuns.has(latestRunId);

  const activeForScript: string[] = [];
  for (const [activeRunId, entry] of activeRuns) {
    if (entry.scriptId === msg.scriptId) {
      activeForScript.push(activeRunId);
      if (activeForScript.length >= 5) break;
    }
  }

  spindle.log.warn(
    `[script-runner] register-handler arrived after run ${msg.runId} ended; ` +
    `registration skipped (script ${msg.scriptId}, kind ${msg.kind}, ` +
    `directLookup=${directExists ? 'found' : 'missing'}, ` +
    `scriptBodyLatest=${latestRunId ?? 'none'}, ` +
    `latestExists=${latestExists}, ` +
    `activeForScript=[${activeForScript.join(', ')}], ` +
    // v1.0 multi-worker: this count aggregates across every spawned
    // worker. The per-script `activeForScript=[…]` list above is the
    // useful per-worker-relevant signal; this field is "is the runner
    // busy in general?" context. Made explicit to avoid the operator
    // misreading it as scoped to the registering worker.
    `totalActiveRuns=${activeRuns.size} (across all workers))`,
  );
}

// ─── Inbound message routing ────────────────────────────────────────────────

function handleChildMessage(payload: unknown, processId: string): void {
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

  // Worker-key derived once per inbound message — used both for activity
  // bumping (Phase E) AND for routing the api-response back to the
  // originating worker's child (Phase C2 multi-worker fix). Pre-fix,
  // `sendApiResponse` defaulted to `DEFAULT_WORKER_KEY` (worker-1), so
  // api responses for scripts on worker-2..N were sent to the wrong child
  // and the child-side `await api.foo()` hung forever.
  const sourceWorkerKey = processIdToWorkerKey(processId);

  // Phase E — bump activity for the sending worker, EXCEPT for our own
  // internal `diagnostic-stats-response`. The sweep queries memory via
  // `diagnostic-stats-request`; if we bumped on the response, every
  // sweep cycle would self-bump every worker and idle eviction could
  // never fire.
  if (msg.type !== 'diagnostic-stats-response' && sourceWorkerKey !== null) {
    bumpWorkerActivity(sourceWorkerKey);
  }

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
      void handleApiRequest(msg, sourceWorkerKey);
      break;

    case 'broadcast-subscribe':
      handleBroadcastSubscribe(msg);
      break;

    case 'broadcast-unsubscribe':
      handleBroadcastUnsubscribe(msg);
      break;

    case 'broadcast-handler-started': {
      // Async broadcast handler started — flip the script's status
      // indicator to 'running' for the duration of the awaited work.
      // Paired with `broadcast-handler-finished` from the child.
      //
      // The frontend's status dot is driven by `execution_started` /
      // `execution_ended` messages (see LumiScriptPanel.tsx), NOT by
      // executionStatusStore directly. Both sides updated here so the
      // host's in-memory state and the live UI stay in sync.
      // v1.0 diagnostic: log the lifecycle so support reports can
      // confirm whether broadcast-handler completion IPCs are arriving
      // (correlate with `…-finished` log line below). Useful for
      // disable-mid-flight bugs where the FE indicator stays "Running".
      spindle.log.info(
        `[script-runner] broadcast-handler-started: scriptId=${msg.scriptId}, ` +
        `subId=${msg.subId}, event='${msg.event}'`,
      );
      executionStatusStore.markRunning(msg.scriptId);
      const script = scriptResolver?.(msg.scriptId);
      sendToFrontend?.({
        type:       'execution_started',
        scriptId:   msg.scriptId,
        scriptName: script?.name ?? '<unknown>',
        // Synthesise a runId for this broadcast handler invocation. Frontend
        // uses runId only for console-entry routing; broadcast handlers
        // don't currently route console entries, so a synthetic id is fine.
        runId:      `broadcast:${msg.scriptId}:${msg.subId}:${Date.now()}`,
      });
      // Bump the per-script broadcast-in-flight counter so hot-reload
      // deferral (`scriptHasActiveDispatch`) sees this handler as active.
      // Counter is decremented in the `finished` arm below.
      broadcastHandlerInFlight.set(
        msg.scriptId,
        (broadcastHandlerInFlight.get(msg.scriptId) ?? 0) + 1,
      );
      break;
    }

    case 'broadcast-handler-finished': {
      // v1.0 diagnostic: log arrival so support reports can confirm
      // whether the IPC reached the parent (paired with `…-started`).
      // If a script's "Running" dot stays lit after disable, this log
      // tells you whether the cause is "handler hung in child, IPC
      // never sent" (no log line) vs "IPC arrived but FE update path
      // dropped it" (log line present).
      spindle.log.info(
        `[script-runner] broadcast-handler-finished: scriptId=${msg.scriptId}, ` +
        `subId=${msg.subId}, ok=${msg.ok}, durationMs=${msg.durationMs}` +
        (msg.ok ? '' : `, error='${msg.error}'`),
      );
      if (msg.ok) {
        executionStatusStore.markSuccess(msg.scriptId, msg.durationMs);
      } else {
        executionStatusStore.markError(msg.scriptId, msg.durationMs, msg.error);
      }
      sendToFrontend?.({
        type:     'execution_ended',
        scriptId: msg.scriptId,
        // Same synthetic runId shape as `started` — frontend doesn't
        // pair them by runId, only uses scriptId for state lookup.
        runId:    `broadcast:${msg.scriptId}:${msg.subId}`,
        success:  msg.ok,
        duration: msg.durationMs,
        ...(msg.ok ? {} : { error: msg.error }),
      });
      // Decrement the per-script broadcast-in-flight counter. `Math.max(0, …)`
      // is a defensive floor against a hypothetical extra `finished` IPC
      // (channel-down recovery, child restart mid-flight, etc.) that would
      // otherwise leave the counter negative and break the in-flight check.
      const prev = broadcastHandlerInFlight.get(msg.scriptId) ?? 0;
      const next = Math.max(0, prev - 1);
      if (next === 0) {
        broadcastHandlerInFlight.delete(msg.scriptId);
      } else {
        broadcastHandlerInFlight.set(msg.scriptId, next);
      }
      break;
    }

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

    case 'diagnostic-stats-response': {
      // v0.28.0+ — child replied to our `diagnostic-stats-request`.
      // Resolve the pending promise; the requester (the diagnostics
      // collector path in backend.ts) awaits this with a timeout.
      const resolver = pendingDiagnosticStats.get(msg.requestId);
      if (resolver) {
        pendingDiagnosticStats.delete(msg.requestId);
        resolver(msg);
      }
      // No warn on orphan: if the requester timed out before the
      // response arrived, the resolver entry was already cleaned up
      // and this branch is a silent no-op. That's the expected late-
      // response case, not a bug.
      break;
    }

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
 * If the run is gone (race: long-running body's first IPC arriving after
 * a follow-up dispatchRunScript drops its activeRun), fall back to the
 * script's CURRENT active run via `activeOrLatestForScript`. The wrapper
 * closures captured here only depend on `msg.scriptId` and
 * `msg.handlerId` (script-keyed, not run-keyed), and child-side handler
 * closures are looked up by `(scriptId, handlerId)` independently of the
 * dispatch-time runId — so routing the registration to the script's
 * current run is correct AND populates that run's `*RegisteredThisRun`
 * tracking set, preventing the stale-diff from dropping the registration.
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

      // v0.26.1 — fallback to script's current active run if the
      // originating runId's activeRun is gone. See `activeOrLatestForScript`
      // for the late-register-handler race rationale.
      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        // Canonical path: call api.macros.register on the run's api.
        // Tracks in macrosRegisteredThisRun, fires onMacrosChanged, etc.
        try {
          active.api.macros.register(msg.name, msg.def, wrapper);
          // v0.26.1 — dual-update on fallback. The canonical call above
          // populated ACTIVE's run-set (the Set captured at buildScriptAPI
          // time, owned by `active`'s run). When fallback engaged we
          // ALSO need to populate the ORIGINATING run's set so its
          // end-of-run stale-diff sees the registration as fresh.
          // No-op on the direct-lookup path: if `msg.runId` is `active`'s
          // own run, both reads point at the same Set and the canonical
          // already added it. See `trackingSetsByRunId` JSDoc above.
          if (!activeRuns.has(msg.runId)) {
            trackingSetsByRunId.get(msg.runId)?.macros?.add(msg.name);
          }
        } catch (err) {
          spindle.log.warn(
            `[script-runner] macros.register failed for "${msg.name}" (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
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
      ): string | Promise<string> => {
        // Honor Lumiverse's deadline hint when supplied. Council passes
        // `args.__deadlineMs = Date.now() + settings.toolsSettings.timeoutMs`
        // (council-execution.service.ts:313, with the user-configured
        // 15–120s slider value); the host-side `invokeExtensionTool` then
        // waits up to that same `timeoutMs` for our `tool_invocation_result`
        // (worker-host.ts:1782-1798). Honoring the hint end-to-end means
        // a long Council timeout is no longer truncated to 60s here.
        //
        // Direct invocation paths (`api.tools.invoke`, inline
        // `generateWithTools`) don't supply `__deadlineMs` → fall through
        // to the historical 60s default. 1s floor protects against clock
        // skew / queueing delay handing us a near-zero or negative budget.
        const deadlineHint = (args as Record<string, unknown>).__deadlineMs;
        const handlerTimeoutMs =
          typeof deadlineHint === 'number' && Number.isFinite(deadlineHint)
            ? Math.max(1_000, deadlineHint - Date.now())
            : 60_000;

        return sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'tool',
          // Pass undefined explicitly when no ctx — JSON.stringify drops
          // it from the wire, child-side `handlerArgs[1]` is undefined.
          ctxArg !== undefined ? [args, ctxArg] : [args],
          handlerTimeoutMs,
        ).then((result) => {
          if (!result.ok) {
            throw new Error(result.error?.message ?? 'tool handler failed');
          }
          // ToolHandler returns string per the canonical interface; coerce
          // defensively in case the user closure returned non-string.
          return String(result.value ?? '');
        });
      };

      // v0.26.1 — fallback to script's current active run if the
      // originating runId's activeRun is gone. See `activeOrLatestForScript`
      // for the late-register-handler race rationale.
      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        try {
          active.api.tools.register(msg.name, msg.def, wrapper);
          // v0.26.1 — dual-update on fallback (see macro case above for rationale).
          if (!activeRuns.has(msg.runId)) {
            trackingSetsByRunId.get(msg.runId)?.tools?.add(msg.name);
          }
        } catch (err) {
          spindle.log.warn(
            `[script-runner] tools.register failed for "${msg.name}" (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
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

      // v0.26.1 — fallback to script's current active run if the
      // originating runId's activeRun is gone. See `activeOrLatestForScript`
      // for the late-register-handler race rationale.
      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
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
        logLateRegisterSkip(msg);
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

      // v0.26.1 — fallback to script's current active run if the
      // originating runId's activeRun is gone. See `activeOrLatestForScript`
      // for the late-register-handler race rationale.
      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        try {
          // Canonical `macros.registerInterceptor(handler, options)` returns
          // a `{id, remove}` handle. We forward the `options.id = handlerId`
          // override (set by the proxy) so the canonical id matches our
          // handlerId, making `removeEntry(scriptId, handlerId)` valid.
          const canonicalHandle = active.api.macros.registerInterceptor(wrapper, msg.options);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, () => canonicalHandle.remove());
          // v0.26.1 — dual-update on fallback (see macro case above for rationale).
          // Note: the canonical's tracking set adds the auto-generated/forwarded
          // canonical id, not msg.handlerId. We mirror that — use canonicalHandle.id.
          if (!activeRuns.has(msg.runId)) {
            trackingSetsByRunId.get(msg.runId)?.macroInterceptors?.add(canonicalHandle.id);
          }
        } catch (err) {
          spindle.log.warn(
            `[script-runner] macros.registerInterceptor failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
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

      // v0.26.1 — fallback to script's current active run if the
      // originating runId's activeRun is gone. See `activeOrLatestForScript`
      // for the late-register-handler race rationale.
      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        try {
          const canonicalHandle = active.api.chat.registerContentProcessor(wrapper, msg.options);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, () => canonicalHandle.remove());
          // v0.26.1 — dual-update on fallback (see macro case for rationale).
          // Mirrors macroInterceptor: tracking-set key is the canonical id.
          if (!activeRuns.has(msg.runId)) {
            trackingSetsByRunId.get(msg.runId)?.contentProcessors?.add(canonicalHandle.id);
          }
        } catch (err) {
          spindle.log.warn(
            `[script-runner] chat.registerContentProcessor failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
      }
      break;
    }

    case 'worldInfoInterceptor': {
      // v0.27.0 — handler signature: (ctx) => void | WorldInfoInterceptorResult | Promise<…>.
      // Fires from the chain dispatcher when the host invokes our extension-
      // level world-info interceptor. Same wrapper shape as macroInterceptor
      // and contentProcessor: wrap a function that sends `run-handler` IPC
      // back to the child + awaits the result.
      const wrapper = (
        interceptorCtx: import('../types/script.js').WorldInfoInterceptorCtx,
      ): import('../types/script.js').WorldInfoInterceptorResult | void
        | Promise<import('../types/script.js').WorldInfoInterceptorResult | void> =>
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'worldInfoInterceptor',
          [interceptorCtx],
          // Per-fire timeout matches the canonical default (2000ms).
          (msg.options as { timeoutMs?: number } | undefined)?.timeoutMs ?? 2_000,
        ).then((result) => {
          if (!result.ok) {
            spindle.log.warn(
              `[script-runner] worldInfoInterceptor handler threw for ${msg.scriptId}: ${result.error?.message ?? 'unknown'}`,
            );
            return undefined;
          }
          // Canonical accepts void / undefined / WorldInfoInterceptorResult.
          if (result.value === undefined || result.value === null) return undefined;
          if (typeof result.value === 'object') {
            return result.value as import('../types/script.js').WorldInfoInterceptorResult;
          }
          return undefined;
        });

      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        try {
          const canonicalHandle = active.api.worldInfo.registerInterceptor(wrapper, msg.options);
          recordHandlerCleanup(msg.scriptId, msg.handlerId, () => canonicalHandle.remove());
          if (!activeRuns.has(msg.runId)) {
            trackingSetsByRunId.get(msg.runId)?.worldInfoInterceptors?.add(canonicalHandle.id);
          }
        } catch (err) {
          spindle.log.warn(
            `[script-runner] worldInfo.registerInterceptor failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
      }
      break;
    }

    case 'domDelegate': {
      // v0.27.1 — handler signature: (data: DOMDelegatedEventData) => void.
      // Fires when the frontend's capture listener matches a delegated
      // selector. Same fire-and-forget shape as `domEventListener`:
      // the wrapper kicks off `sendRunHandlerRequest` and logs + drops
      // any closure throw via the rejection path. The user's handler
      // returns void (or a Promise<void>) so we don't propagate the
      // result IPC's value back through the canonical engine.
      const wrapper = (data: import('../types/script.js').DOMDelegatedEventData): void => {
        sendRunHandlerRequest(
          msg.scriptId,
          msg.handlerId,
          'domDelegate',
          [data],
          // 5s budget — DOM events are interactive; anything slower than
          // that is almost certainly a bug in the user's handler. Same
          // budget as `domEventListener`.
          5_000,
        ).catch((err) => {
          spindle.log.warn(
            `[script-runner] api.ui.dom.delegate handler threw for ${msg.scriptId} ` +
            `(selector="${msg.selector}", event=${msg.event}): ${String(err)}`,
          );
        });
      };

      const active = activeOrLatestForScript(msg.scriptId, msg.runId);
      if (active) {
        try {
          const canonicalUnsub = active.api.ui.dom.delegate(
            msg.selector,
            msg.event,
            wrapper,
            msg.options,
          );
          recordHandlerCleanup(msg.scriptId, msg.handlerId, canonicalUnsub);
        } catch (err) {
          spindle.log.warn(
            `[script-runner] api.ui.dom.delegate failed (script ${msg.scriptId}): ${String(err)}`,
          );
        }
      } else {
        logLateRegisterSkip(msg);
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
    case 'worldInfoInterceptor':
    case 'domEventListener':
    case 'domDelegate':
    case 'inputBarActionClick':
    case 'floatWidgetDragEnd':
    case 'drawerTabActivate': {
      // Phase 9d.3.d / 9d.4.c-2 / 9d.4.e-1-b / 9d.4.e-2-b / 9d.4.e-3-b
      // + v0.27.0 (worldInfoInterceptor) + v0.27.1 (domDelegate) — same
      // shape as commandsOnInvoked: handlerId-based, canonical's unsub fn
      // (or `handle.remove()`) was stored under handlerId.
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
 * `onConsole` callback.
 *
 * Two-level lookup:
 *   1. **Direct (runId-keyed).** `activeRuns.get(msg.runId)` finds the run
 *      and uses its `onConsole`. Hits the common case (script-body run
 *      still alive, onConsole supplied at dispatch).
 *   2. **Fallback (scriptId-keyed).** If the direct lookup misses (the
 *      run's activeRun was orphaned by a later `dispatchRunScript`, Phase
 *      9d.4.x) OR the activeRun has no `onConsole` (handler-call activeRuns
 *      from `dispatchRunHandler` don't carry one), fall back to
 *      `lastOnConsoleByScript.get(msg.scriptId)`. This routes late console
 *      output from orphaned runs AND console output from handler callbacks
 *      (broadcast / macro / tool / chat-injection / world-info / DOM event)
 *      to the editor console where the user actually sees it.
 *
 * Entries for scripts with no registered onConsole anywhere (e.g. internal
 * dispatcher tests, runs that genuinely don't want output) still drop
 * silently — matches the in-process executor's behaviour.
 */
function handleConsoleEntry(msg: ConsoleEntryNotice): void {
  const active    = activeRuns.get(msg.runId);
  const onConsole = active?.onConsole ?? lastOnConsoleByScript.get(msg.scriptId);
  if (!onConsole) return;
  try {
    onConsole(msg.entry);
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
  // Phase C2 — route to the subscribing script's worker. Broadcast emission
  // already fans out per-subscriber via the bus (see `busEmit`); each
  // forwarder calls this with the subscriber's `scriptId` baked into `msg`.
  const workerKey = getWorkerForScript(msg.scriptId);
  const handle    = getChildHandle(workerKey);
  if (!handle) return;
  // Phase E — fire-and-forget IPC; bump explicitly since handleChildMessage
  // won't see a response if the handler runs silently (no api calls).
  bumpWorkerActivity(workerKey);
  try {
    handle.send(msg);
  } catch (err) {
    spindle.log.warn(`[script-runner] broadcast-fire send to worker '${workerKey}' failed: ${String(err)}`);
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
async function handleApiRequest(
  req:             ApiProxyRequest,
  sourceWorkerKey: ScriptRunnerWorkerKey | null,
): Promise<void> {
  // v0.26.1 — unified runId resolution. Direct lookup, falling back to the
  // script's current run when the dispatch's metadata indicates re-routing
  // is safe. Three permitted fallback shapes:
  //   - `_runIdSource === 'latest'`: top-level dispatch (db.collection,
  //     broadcast.emit, etc.) — no per-run state, always safe.
  //   - `_runIdSource === 'ctx'` AND persistent target handle: handle
  //     lifecycle is per-script, not per-run.
  //   - `_runIdSource === 'ctx'` on transient handle / `'context'` (handler
  //     fire ALS): NO fallback — handle/run is genuinely gone.
  // See `resolveActiveRun` JSDoc for the full rationale.
  const active = resolveActiveRun(
    {
      scriptId:     req.scriptId,
      runId:        req.runId,
      runIdSource:  req._runIdSource,
      targetHandle: req.targetHandle,
    },
    'api-request',
  );

  // Worker key for routing the response back to the right child. Prefer
  // the activeRun's `workerKey` (definitive source of truth — that's where
  // the proxy's pending-map lives, awaiting this requestId), falling back
  // to the IPC-channel-derived `sourceWorkerKey` when no active run exists
  // (late-request RunCompletedError path).
  const responseWorkerKey = active?.workerKey ?? sourceWorkerKey;
  if (!active) {
    // Late request — run already completed (its activeRuns entry was
    // dropped). Send back a clear error so the child's pending-map can
    // reject any still-awaiting promise.
    //
    // The error message names every diagnostic the operator needs to
    // pinpoint the late dispatch in the script: the api method, the
    // owning script, the runId, the request id (so the proxy log can
    // be cross-referenced), the target handle (when the call was
    // on a handle's method — disambiguates e.g. `db._collection.insert`
    // dispatched on which Collection handle), AND the runId-resolution
    // tier the proxy used to pick the runId (v0.26.1 — pinpoints the
    // leak class: handler-fire context propagation, cross-run latest-run
    // fallback, or originating-proxy fallback). Without these the operator
    // sees "something fired late, somewhere" — useless for debugging
    // races between fire-and-forget chains and the next dispatchRunScript.
    const handleSuffix = req.targetHandle
      ? `, targetHandle=${req.targetHandle.kind}/${req.targetHandle.id}`
      : '';
    const sourceSuffix = req._runIdSource
      ? `, runIdSource=${req._runIdSource}`
      : '';
    sendApiResponse(responseWorkerKey, {
      type:      'api-response',
      requestId: req.requestId,
      ok:        false,
      error: {
        name:    'RunCompletedError',
        message:
          `api-proxy host: late api call "${req.method}" from script "${req.scriptId}" arrived ` +
          `after run ${req.runId} ended (requestId=${req.requestId}${handleSuffix}${sourceSuffix})`,
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
        // v0.26.1 — obj-reuse dedup for persistent handles. If this exact
        // object reference has already been registered for this script, reuse
        // its existing handle id. Caller-side dedup (e.g. the
        // `collection-handle-cache` for `api.db.collection`) returns the
        // SAME wrapper object for the same `(scope, path)`; without this,
        // each call would register a fresh handle id pointing to the same
        // wrapper, accumulating in `persistentHandles` indefinitely.
        if (typeof obj === 'object' && obj !== null) {
          const reverseMap = getOrCreateObjReverseMap(active.scriptId);
          const existingId = reverseMap.get(obj);
          if (existingId !== undefined) {
            return { __handleRef: true, id: existingId, kind };
          }
          const id = generateHandleId(active.scriptId);
          persistentTable.set(id, { obj, kind });
          reverseMap.set(obj, id);
          return { __handleRef: true, id, kind };
        }
        // Defensive: non-object handles can't go into a WeakMap. Fall
        // through to plain registration without reverse-map dedup.
        // (No production handle types fit this branch; included for type
        // safety against future surface expansion.)
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
    } else if (req.method === 'rpc.handle') {
      // v0.26.0 — `api.rpc.handle()` registers an on-demand handler whose
      // closure lives child-side. Build a wrapper that fires the user's
      // closure via `RunHandlerRequest` whenever a foreign extension reads
      // the endpoint, then call canonical `api.rpc.handle()` to register
      // the wrapper with `spindle.rpcPool` and surface the resolved
      // fully-qualified endpoint name back through the api-response.
      response = await handleRpcHandleRequest(req, active);
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

  sendApiResponse(responseWorkerKey, response);
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
 *
 * ─── Post-eviction alias storage (v1.0.0-rc.3+) ─────────────────────────
 *
 * When a worker is evicted and respawned, the parent's dom-registry
 * (with stableId → elementId mappings) survives — DOM persistent state
 * outlives worker death by design. But the proxy's child-side
 * `domStableIdToElementId` cache dies with the worker. Post-respawn,
 * the proxy generates a fresh `_elementId` UUID for the same stableId
 * and threads it in `options._elementId`. The canonical's stableId
 * dedup path IGNORES `_elementId` and returns the existing handle's
 * id (correct from canonical's POV — the dom-registry entry hasn't
 * moved). But the proxy's sync DOMHandle now has `.id === _elementId`
 * (the new UUID), and all subsequent handle method dispatches
 * (`handle.on('click', …)`, `handle.update(...)`, etc.) carry the
 * proxy's id — which `pendingDomHandles` doesn't have an entry for.
 * Result: register-handler IPCs land "DOM handle not found" + the
 * registration silently drops, breaking re-attached event listeners
 * after eviction.
 *
 * Fix: when canonical's dedup returns a handle whose id differs from
 * the proxy's supplied `_elementId`, store the handle in
 * `pendingDomHandles` under BOTH ids. Both keys point at the same
 * handle ref; subsequent lookups via either id succeed. The canonical
 * still operates on its own id internally (dom-registry, FE messages
 * use the canonical id) — only the parent's IPC lookup table carries
 * the alias.
 *
 * Memory cost: each script × stableId × eviction-cycle accumulates
 * one alias entry. Bounded by N evictions over the script's lifetime,
 * freed on script-unregister. In practice tens of bytes per alias,
 * tens of entries per long-lived script across a day — not a concern.
 *
 * Long-term: see roadmap entry on the holistic state-sync-on-respawn
 * approach (Option C in the RC3 design conversation), which would
 * eliminate the alias accumulation by pre-populating the proxy's
 * stableId cache from the parent's view before the script body runs.
 */
async function handleDomInjectRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    let handle: DOMHandle;
    let options: DOMInjectOptions | DOMMessageInjectOptions | undefined;
    if (req.method === 'ui.dom.inject') {
      const target = req.args[0] as string;
      const html   = req.args[1] as string;
      options      = req.args[2] as DOMInjectOptions | undefined;
      handle = active.api.ui.dom.inject(target, html, options);
    } else {
      // 'ui.dom.injectAtMessage'
      const messageId = req.args[0] as string;
      const html      = req.args[1] as string;
      options         = req.args[2] as DOMMessageInjectOptions | undefined;
      handle = active.api.ui.dom.injectAtMessage(messageId, html, options);
    }
    storePendingDomHandle(active.scriptId, handle.id, handle);
    // Alias storage — see JSDoc § "Post-eviction alias storage".
    const proxyElementId = (options as { _elementId?: string } | undefined)?._elementId;
    if (proxyElementId !== undefined && proxyElementId !== handle.id) {
      storePendingDomHandle(active.scriptId, proxyElementId, handle);
    }
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
      // Same post-eviction alias storage as handleDomInjectRequest. See
      // that function's JSDoc § "Post-eviction alias storage" for the
      // full rationale — short version: when canonical's stableId dedup
      // returns a handle whose id differs from the proxy's supplied
      // `_elementId`, store under both keys so subsequent handle method
      // lookups via either id succeed.
      const childProxyElementId = options?._elementId;
      if (childProxyElementId !== undefined && childProxyElementId !== childHandle.id) {
        storePendingDomHandle(active.scriptId, childProxyElementId, childHandle);
      }
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
      // Phase C2 — route to the modal-owning script's worker. `active` is
      // the originating ActiveRun, so `active.workerKey` already names the
      // right destination (no scriptId-lookup needed).
      // Phase E — fire-and-forget; bump activity.
      bumpWorkerActivity(active.workerKey);
      try {
        getChildHandle(active.workerKey)?.send(notice);
      } catch (err) {
        spindle.log.warn(
          `[script-runner] advanced-modal-dismissed send to worker '${active.workerKey}' failed for ${handle.modalId}: ${String(err)}`,
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
        // Synthesize teardown dismissal for the timeout path. Phase C2 —
        // route to the originating run's worker via `active.workerKey`.
        const notice: AdvancedModalDismissedNotice = {
          type:    'advanced-modal-dismissed',
          modalId: handle.modalId,
          reason:  'teardown',
        };
        // Phase E — bump activity for the teardown send too.
        bumpWorkerActivity(active.workerKey);
        try { getChildHandle(active.workerKey)?.send(notice); }
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

/**
 * v0.26.0 — special-case `'rpc.handle'` so the user's handler closure
 * (which lives in the child) gets fired via `RunHandlerRequest` whenever
 * a foreign extension reads our endpoint.
 *
 * Args shape: `[channel: string, handlerId: string, options?: { as? }]`.
 * The proxy generates the handlerId, stashes the user's closure under it
 * in the child registry, then sends THIS request. We build a parent-side
 * wrapper that, when invoked by `spindle.rpcPool` (via the canonical
 * `api.rpc.handle`), dispatches `sendRunHandlerRequest` back to the child
 * with `kind: 'rpc'` and `args: [ctx]`. The result.value (whatever the
 * user's handler returned) becomes the read response.
 *
 * We delegate to the canonical `active.api.rpc.handle` rather than
 * touching `spindle.rpcPool` directly so the executor's slug derivation,
 * channel validation, and ownership-tracking (rpc-store + this-run set)
 * all run exactly as for the in-process / test path.
 */
async function handleRpcHandleRequest(
  req:    ApiProxyRequest,
  active: ActiveRun,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;
  try {
    const channel   = req.args[0];
    const handlerId = req.args[1];
    // RC2 — `options` may now carry `policy: RpcPolicy` in addition to
    // `as?: string`. We forward it transparently to `active.api.rpc.handle`,
    // which forwards to `spindle.rpcPool.handle`. The user-handler closure
    // (lives child-side) receives `effectivePermissions` on the
    // RpcRequestContext per the host's delegated-permission contract.
    const options   = req.args[2] as { as?: string; policy?: import('../types/script.js').RpcPolicy } | undefined;
    if (typeof channel !== 'string' || channel.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: { name: 'TypeError', message: 'rpc.handle: channel must be a non-empty string' },
      };
    }
    if (typeof handlerId !== 'string' || handlerId.length === 0) {
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name:    'InternalError',
          message: 'rpc.handle: proxy did not supply handlerId — child/parent contract violated',
        },
      };
    }
    // Wrapper fired by `spindle.rpcPool` whenever a foreign extension
    // reads our endpoint. Match canonical handler timeout: 60s, the same
    // as macros / tools wrappers (mirrors `sendRunHandlerRequest`'s usage
    // pattern in `handleRegisterHandler`).
    const wrapper = async (rpcCtx: RpcRequestContext): Promise<unknown> => {
      const result = await sendRunHandlerRequest(
        active.scriptId,
        handlerId,
        'rpc',
        [rpcCtx],
        60_000,
      );
      if (!result.ok) {
        throw new Error(result.error?.message ?? 'rpc handler failed');
      }
      return result.value;
    };
    const fullEndpoint = await active.api.rpc.handle(channel, wrapper, options);
    return {
      type:      'api-response',
      requestId,
      ok:        true,
      value:     fullEndpoint,
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

/**
 * Send an api-response back to the originating child worker.
 *
 * Multi-worker routing: `workerKey` is the worker hosting the run that
 * issued the api-request. With multiple workers in flight, naive routing
 * to `DEFAULT_WORKER_KEY` would silently drop the response for any worker
 * other than `worker-1`, hanging the child-side awaited proxy promise
 * forever. The caller (`handleApiRequest`) sources `workerKey` from the
 * activeRun's recorded `workerKey` (which was set at dispatch time), or
 * from the IPC channel's processId when no activeRun exists (late-request
 * error path).
 *
 * `workerKey === null` indicates "we couldn't determine the source"
 * (channel torn down between request arrival and response dispatch, or
 * the message bypassed handleChildMessage's processIdToWorkerKey lookup);
 * we warn and drop in that case rather than misroute.
 */
function sendApiResponse(
  workerKey: ScriptRunnerWorkerKey | null,
  response:  ApiProxyResponse,
): void {
  if (workerKey === null) {
    spindle.log.warn(
      `[script-runner] api-response: workerKey unknown for requestId=${response.requestId}; ` +
      `dropping (child-side pending-map will time out via heartbeat)`,
    );
    return;
  }
  const handle = getChildHandle(workerKey);
  if (!handle) {
    // Child died between request arrival and response dispatch — nothing
    // we can do; the lifecycle handler will reject pending runs anyway.
    return;
  }
  try {
    handle.send(response);
  } catch (err) {
    spindle.log.warn(
      `[script-runner] api-response send to worker '${workerKey}' failed: ${String(err)}`,
    );
  }
}

/**
 * Scoped per-worker cleanup of in-flight run state. Called from the
 * lifecycle handler on BOTH the crash arms (`failed` / `timed_out`) and
 * the graceful-shutdown arms (`stopped` / `completed`).
 *
 * Multi-worker invariant: cleanup must be scoped to runs whose
 * `workerKey` matches the dying worker. A crash/shutdown of one worker
 * must NOT touch state for runs on other workers — pre-fix the cleanup
 * was a global `pendingRuns.clear()` / `activeRuns.clear()` / etc.
 * which silently broke every other worker's outstanding work.
 *
 * What's cleaned (all per-worker):
 *   - `pendingRuns` / `pendingHandlerCalls` for runs on this worker:
 *     rejected with `rejection`, then dropped. Without this, in-flight
 *     callers awaiting `dispatchRunScript` / `dispatchRunHandler` for
 *     runs on the dead worker hang forever.
 *   - `activeRuns` / `trackingSetsByRunId` for runs on this worker:
 *     dropped (the scripts are dead; no late IPCs can route through them).
 *   - `scriptBodyActiveRunByScript` entries pointing at any dropped
 *     runId — keeping them would map script → dead runId and confuse
 *     the late-IPC routing helpers (`resolveActiveRun`).
 *   - `broadcastHandlerInFlight` counters for scripts assigned to this
 *     worker (their async handlers were running in the now-dead child
 *     and won't get to fire `broadcast-handler-finished`; leaving the
 *     counter at >0 would make `scriptHasActiveDispatch` /
 *     `workerHasActiveRun` erroneously report ongoing work forever).
 *
 * What's NOT cleaned (intentional):
 *   - `scriptWorkerAssignments` — scripts stay "on" this worker; the
 *     respawned worker (or post-rebalance reassignment) picks them up
 *     on the next fire via lazy-spawn / least-loaded.
 *   - `lastDispatchByScript` — survives across worker lifecycles; the
 *     snapshot is needed for handler invocations after respawn.
 */
function cleanupRunsForDeadWorker(
  workerKey: ScriptRunnerWorkerKey,
  rejection: Error,
): void {
  const runIdsOnDeadWorker = new Set<string>();
  for (const [runId, run] of activeRuns) {
    if (run.workerKey === workerKey) runIdsOnDeadWorker.add(runId);
  }
  for (const runId of runIdsOnDeadWorker) {
    const pendingRun = pendingRuns.get(runId);
    if (pendingRun) {
      pendingRun.reject(rejection);
      pendingRuns.delete(runId);
    }
    const pendingHandler = pendingHandlerCalls.get(runId);
    if (pendingHandler) {
      pendingHandler.reject(rejection);
      pendingHandlerCalls.delete(runId);
    }
    activeRuns.delete(runId);
    trackingSetsByRunId.delete(runId);
  }
  for (const [scriptId, runId] of scriptBodyActiveRunByScript) {
    if (runIdsOnDeadWorker.has(runId)) {
      scriptBodyActiveRunByScript.delete(scriptId);
    }
  }
  for (const [scriptId, assignedWorker] of scriptWorkerAssignments) {
    if (assignedWorker === workerKey) {
      broadcastHandlerInFlight.delete(scriptId);
    }
  }
}

function handleLifecycle(event: BackendProcessLifecycleEventDTO): void {
  // Filter to our specific kind — the host dispatches lifecycle events
  // for ALL backend processes the extension owns, not just ours.
  if (event.kind !== SCRIPT_RUNNER_KIND) {
    return;
  }
  // Phase B (v1.0 runtime-isolation): events carry the worker key under
  // which they were spawned. `event.key` is `string | undefined` (key is
  // optional in the spawn API); we always pass an explicit key so undefined
  // means "not ours". Phase C2: filter accepts both configured pool
  // members AND currently-spawned over-cap workers (during pool-size
  // decrease transitions) via `isActiveWorkerKey` — see its JSDoc for the
  // union-view rationale.
  if (event.key === undefined || !isActiveWorkerKey(event.key)) {
    return;
  }
  const workerKey: ScriptRunnerWorkerKey = event.key;

  switch (event.state) {
    case 'timed_out':
    case 'failed': {
      // Build a diagnostic that names the script(s) genuinely in flight
      // on THIS worker, so the operator log immediately tells which user
      // script (probably) caused the hang.
      //
      // Two filters vs. a raw `activeRuns` scan:
      //   1. `run.workerKey === workerKey` — only scripts on the crashed
      //      worker. Scripts on other workers are irrelevant to this
      //      crash; including them implicates innocents.
      //   2. Intersect with `pendingRuns` / `pendingHandlerCalls` — only
      //      scripts genuinely awaiting an IPC response. Phase 9d.4.x
      //      keeps `activeRuns` entries alive past `run-result` for late
      //      async work routing; those entries are NOT "in flight" in
      //      the "caused the hang" sense.
      //   3. Include any script on this worker with an in-flight broadcast
      //      handler (`broadcastHandlerInFlight > 0`) — those are child-
      //      side handler invocations that don't touch `pendingRuns` /
      //      `pendingHandlerCalls` at all.
      //
      // Pre-fix the list dumped EVERY script that had ever run on the
      // worker (including ones idle for hours), making the diagnostic
      // worse than useless. Same root-cause pattern as the eviction
      // sweep + hot-reload deferral fixes — `activeRuns` is for ROUTING,
      // not for "is this entity doing work right now?".
      const offendingScriptNames = new Set<string>();
      for (const [runId, run] of activeRuns) {
        if (run.workerKey !== workerKey) continue;
        if (pendingRuns.has(runId) || pendingHandlerCalls.has(runId)) {
          offendingScriptNames.add(run.scriptName);
        }
      }
      for (const [scriptId, assignedWorker] of scriptWorkerAssignments) {
        if (assignedWorker !== workerKey) continue;
        if ((broadcastHandlerInFlight.get(scriptId) ?? 0) === 0) continue;
        const snapshot = lastDispatchByScript.get(scriptId);
        if (snapshot) offendingScriptNames.add(snapshot.script.name);
      }
      const offendingScripts = [...offendingScriptNames].join(', ');
      const reason  = event.error ?? event.exitReason ?? 'unknown';
      const rejection = new Error(
        `[script-runner] worker '${workerKey}' ${event.state} (${reason})` +
        (offendingScripts ? `; in-flight on this worker: ${offendingScripts}` : ''),
      );
      spindle.log.error(rejection.message);

      // Reject + drop per-run state for runs on the crashed worker.
      // See `cleanupRunsForDeadWorker` JSDoc for the full lifecycle
      // contract.
      cleanupRunsForDeadWorker(workerKey, rejection);

      // Clear stability timer for the dead child — it was scheduled
      // against this now-deceased instance and would erroneously reset
      // restartAttempts to 0 mid-backoff if it fires.
      clearStabilityTimer(workerKey);

      deleteChildHandle(workerKey);

      // Phase 10 — schedule a respawn with exponential backoff. After the
      // new child is alive, prior user-script handler closures (macros,
      // tools, interceptors, content processors, DOM event listeners,
      // etc.) are GONE — the parent's canonical store still has wrappers
      // pointing at the old child's handlerIds, which no longer exist.
      // Surface this to the operator via a warning so they know to
      // disable+reenable affected scripts to restore handler functionality.
      spindle.log.warn(
        `[script-runner] worker '${workerKey}' respawn scheduled after ${event.state}. ` +
        `Note: user-script handler closures (macros, tools, interceptors, etc.) ` +
        `registered before the kill are now orphaned — the parent's wrappers ` +
        `point at child handlerIds that no longer exist. To restore those, ` +
        `disable+reenable any affected scripts (or reload the extension).`,
      );
      scheduleRespawn(workerKey, `child ${event.state}: ${reason}`);
      break;
    }

    case 'stopped':
    case 'completed': {
      // Graceful exit — caller invoked `stop()` (eviction sweep,
      // `rebalanceWorkerPool` shutting down an over-cap worker, full
      // `shutdownScriptRunner`) or the child called `complete()`.
      //
      // Multi-worker scoped cleanup. Pre-fix this arm assumed "pending
      // runs (if any) may already have received their results, but if
      // any remain, they'll get a generic rejection on the next dispatch
      // attempt." That assumption was true under single-worker mode (any
      // next dispatch hit the same dead child and surfaced an error).
      // Under multi-worker, surviving workers continue dispatching
      // normally, so runs that were in-flight on the gracefully-stopped
      // worker keep their `pendingRuns` / `pendingHandlerCalls` /
      // `activeRuns` / `scriptBodyActiveRunByScript` /
      // `trackingSetsByRunId` / `broadcastHandlerInFlight` state forever
      // — Promises never resolve, never reject, state never frees.
      //
      // The `rebalanceWorkerPool` path specifically shuts down over-cap
      // workers without an in-flight gate (eviction has the gate via
      // `workerHasActiveRun`, rebalance does not), so a `workerCount`
      // decrease while scripts are running was the worst-case path:
      // forever-hung Promises on the doomed workers' in-flight runs.
      //
      // Same scoped cleanup as the failed/timed_out arm — only state
      // for runs on THIS worker is touched.
      const rejection = new Error(
        `[script-runner] worker '${workerKey}' shut down gracefully ` +
        `(${event.state}); in-flight runs on this worker rejected`,
      );
      cleanupRunsForDeadWorker(workerKey, rejection);

      // Cancel any pending respawn for THIS worker — graceful exit means
      // this worker is tearing down, not that we should respawn it.
      clearRestartTimer(workerKey);
      clearStabilityTimer(workerKey);
      deleteChildHandle(workerKey);
      break;
    }

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
function scheduleRespawn(workerKey: ScriptRunnerWorkerKey, reason: string): void {
  if (cachedUserId === null) {
    spindle.log.warn(
      `[script-runner] cannot schedule respawn for worker '${workerKey}': userId not yet cached ` +
      `(respawn before first cold-start spawn?)`,
    );
    return;
  }
  if (getRestartTimer(workerKey) !== null) {
    spindle.log.warn(
      `[script-runner] respawn already scheduled for worker '${workerKey}'; ignoring duplicate trigger (reason: ${reason})`,
    );
    return;
  }

  const backoffMs     = getRestartBackoffMs();
  const attemptsSoFar = getRestartAttempts(workerKey);
  const idx           = Math.min(attemptsSoFar, backoffMs.length - 1);
  const delay         = backoffMs[idx]!;
  spindle.log.warn(
    `[script-runner] scheduling respawn for worker '${workerKey}' in ${delay}ms ` +
    `(attempt #${attemptsSoFar + 1}; reason: ${reason})`,
  );

  const timer = setTimeout(() => {
    // Timer fired — drop the Map entry directly; `clearRestartTimer` would
    // also clearTimeout() the same handle, which is harmless but redundant.
    restartTimers.delete(workerKey);
    const newAttempts = incrementRestartAttempts(workerKey);
    // v0.28.0+ — preserve the originating crash reason for the
    // diagnostics panel. `scheduleRespawn` is called recursively from
    // the `.catch` branch below with `respawn-attempt-N-failed` as the
    // reason; those are retry-internals, not user-visible causes.
    // Filtering them here ensures `lastRestartReason` holds the
    // semantically meaningful crash cause (`heartbeat-timeout`,
    // `async-timeout`, etc.).
    if (!reason.startsWith('respawn-attempt-')) {
      lastRestartReason = reason;
    }
    spindle.log.info(
      `[script-runner] firing respawn attempt #${newAttempts} for worker '${workerKey}'`,
    );
    void spawnScriptRunner(cachedUserId!, workerKey)
      .then(() => {
        // v0.28.0+ — only count a respawn as a "restart" once it
        // succeeds. A crash that takes three retries to recover from
        // is ONE restart event, not three; failed attempts surface
        // separately via `currentBackoffAttempts` in the diagnostics
        // snapshot.
        totalRestartCount++;
      })
      .catch((err) => {
        spindle.log.error(
          `[script-runner] respawn attempt #${newAttempts} for worker '${workerKey}' failed: ` +
          `${err instanceof Error ? err.message : String(err)}`,
        );
        // Reschedule with longer backoff (attempts already incremented above).
        scheduleRespawn(workerKey, `respawn-attempt-${newAttempts}-failed`);
      });
  }, delay);
  setRestartTimer(workerKey, timer);
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Spawn the script-runner child for a specific worker if not already
 * running. Idempotent per-worker — calling this when the worker is alive
 * returns its existing handle.
 *
 * Resolves once the child has called `process.ready()`. Rejects if the
 * spawn fails or the startup timeout fires.
 *
 * @param userId    Active user ID. LumiScript is an operator-scoped extension
 *                  (see Lumiverse extension manager badge), so `userId` is
 *                  required by the host on every spawn — it identifies which
 *                  user's context the spawned subprocess will act on. Caller
 *                  should pass the live `activeUserId` (LumiScript tracks
 *                  this on every frontend message arrival; cold-start callers
 *                  must defer the spawn until after the first frontend_ready
 *                  handler has populated `activeUserId`).
 * @param workerKey Pool member to spawn. Phase B (default `DEFAULT_WORKER_KEY`):
 *                  effectively single-worker. Phase C+ callers pass per-pool-
 *                  member keys to spawn distinct workers.
 */
export function spawnScriptRunner(
  userId:    string,
  workerKey: ScriptRunnerWorkerKey = DEFAULT_WORKER_KEY,
): Promise<BackendProcessHandle> {
  // Phase 10 — stash userId for use by the lifecycle-driven respawn path.
  // Single-user mode keeps this stable; if it ever changes (multi-user
  // operator mode), the most-recent caller's userId wins for respawns.
  cachedUserId = userId;

  const existing = getChildHandle(workerKey);
  if (existing) return Promise.resolve(existing);

  const inFlight = spawnInFlights.get(workerKey);
  if (inFlight) return inFlight;

  const promise = (async () => {
    // Wire up subscriptions before spawning so we don't miss any early
    // lifecycle events. They're idempotent — registering a no-op handler
    // before spawn is harmless.
    if (messageUnsub === null) {
      messageUnsub = spindle.backendProcesses.onMessage((event) => {
        // The onMessage handler fires for every backend process the
        // extension owns. We filter by processId to scope to our workers
        // (Phase B: any pool member's process counts as ours).
        if (!isOwnedProcessId(event.processId)) return;
        handleChildMessage(event.payload, event.processId);
      });
    }
    if (lifecycleUnsub === null) {
      lifecycleUnsub = spindle.backendProcesses.onLifecycle(handleLifecycle);
    }

    const spawnedAt = Date.now();
    const handle = await spindle.backendProcesses.spawn({
      entry:               SCRIPT_RUNNER_ENTRY,
      kind:                SCRIPT_RUNNER_KIND,
      key:                 workerKey,
      userId,               // Required by the host; see param JSDoc above
      payload:             {},  // Phase 9+ may pass settings (scriptTimeoutMs etc.) through here
      startupTimeoutMs:    STARTUP_TIMEOUT_MS,
      heartbeatTimeoutMs:  HEARTBEAT_TIMEOUT_MS_DEFAULT,
      replaceExisting:     true,  // if a stale instance is around (e.g. previous LumiScript run), replace it
    });
    setChildHandle(workerKey, handle);

    spindle.log.info(
      `[script-runner] spawned worker '${workerKey}' in ${Date.now() - spawnedAt}ms ` +
      `(processId=${handle.processId})`,
    );

    // Phase 10 — schedule the stability reset for THIS worker. If the new
    // child stays alive for STABILITY_THRESHOLD_MS, the restart-attempts
    // counter resets to 0 so a long-running session that hits ONE bad
    // script doesn't accumulate permanent backoff debt.
    //
    // The timer is cleared on death (in handleLifecycle) and on the next
    // spawn for this worker (so a respawn doesn't double-schedule).
    clearStabilityTimer(workerKey);
    const stabilityMs = getStabilityThresholdMs();
    const timer = setTimeout(() => {
      const attempts = getRestartAttempts(workerKey);
      if (attempts > 0) {
        spindle.log.info(
          `[script-runner] worker '${workerKey}' has been stable for ${stabilityMs / 1000}s; ` +
          `restart-attempts counter reset (was ${attempts})`,
        );
        resetRestartAttempts(workerKey);
      }
      stabilityTimers.delete(workerKey);
    }, stabilityMs);
    setStabilityTimer(workerKey, timer);

    return handle;
  })();

  spawnInFlights.set(workerKey, promise);

  // Clear the in-flight slot whether spawn succeeded or failed. On success,
  // future calls hit the `if (getChildHandle(workerKey))` short-circuit. On
  // failure, the slot opens for a fresh retry, which the lifecycle-driven
  // respawn path (Phase 10's `scheduleRespawn`) makes use of.
  promise.finally(() => { spawnInFlights.delete(workerKey); })
         .catch(() => { /* swallow — caller already handled */ });

  return promise;
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
   * v0.27.2+ — fired immediately after `api.chat.inject` /
   * `removeInjection` / `clearInjections` / `clearAllInjections` so the
   * LumiScriptPanel's Active Injections section reflects the change
   * mid-execution. Mirror of `ExecutorOptions.onInjectionsChanged`.
   */
  onInjectionsChanged?: () => void;
  /**
   * Phase 9b — per-run tracking sets. The api implementations on the parent
   * mutate these as the script registers tools / macros / interceptors /
   * content processors. After the run resolves, the caller diffs against a
   * pre-run snapshot to clean up stale registrations whose declarations
   * disappeared from the script body. Same shape and intent as the
   * matching `ExecutorOptions` fields.
   */
  toolsRegisteredThisRun?:                 Set<string>;
  macrosRegisteredThisRun?:                Set<string>;
  macroInterceptorsRegisteredThisRun?:     Set<string>;
  contentProcessorsRegisteredThisRun?:     Set<string>;
  /** v0.27.0+ — per-run tracking for `api.worldInfo.registerInterceptor`. */
  worldInfoInterceptorsRegisteredThisRun?: Set<string>;
  /**
   * v0.26.0 — per-run tracking of fully-qualified rpc-endpoint names
   * registered via `api.rpc.sync` / `api.rpc.handle`. The trigger-registry
   * uses this against a pre-run snapshot to auto-unregister endpoints whose
   * declarations disappeared from the script body on re-run.
   */
  rpcEndpointsRegisteredThisRun?:      Set<string>;
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
export async function dispatchRunScript(
  script:  Script,
  request: DispatchRunScriptRequest,
  opts:    DispatchRunScriptOpts = {},
): Promise<RunScriptResult> {
  // Phase C1 — derive the worker hosting this script. C1 always returns
  // DEFAULT_WORKER_KEY (single-worker behaviour preserved); C2 promotes to
  // least-loaded distribution.
  const workerKey = getWorkerForScript(script.id);

  // Lazy-spawn the assigned worker if it isn't running yet. The pool's
  // members other than DEFAULT_WORKER_KEY are spawned on-demand — at
  // bootstrap only `runScriptViaChild`'s eager `spawnScriptRunner(userId)`
  // ensures worker-1 is ready; least-loaded assignment to worker-2..N
  // arrives here with `getChildHandle(workerKey) === undefined` and needs
  // a spawn before the IPC dispatch can proceed.
  //
  // Same rationale covers the rebalance-pool path (assignments cleared →
  // next fire re-resolves via least-loaded → may pick a never-yet-spawned
  // worker) and the worker-count-decrease path (a script previously
  // assigned to worker-3 finds its sticky assignment dropped, re-resolves
  // to a still-configured worker, but if least-loaded picks an unspawned
  // worker the same lazy-spawn closes the gap).
  if (!getChildHandle(workerKey)) {
    if (request.userId === undefined) {
      throw new Error(
        `[script-runner] dispatchRunScript: cannot lazy-spawn worker ` +
        `'${workerKey}' for script '${script.id}' — request.userId is missing ` +
        `(spawn requires operator-scoped userId; production callers ` +
        `(runScriptViaChild) gate on userId !== null before reaching here)`,
      );
    }
    await spawnScriptRunner(request.userId, workerKey);
  }
  // Phase E — bump activity for the dispatched worker.
  bumpWorkerActivity(workerKey);

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
    grantedPermissions:                     request.grantedPermissions,
    userId:                                 request.userId ?? null,
    onToolsChanged:                         opts.onToolsChanged,
    onInjectionsChanged:                    opts.onInjectionsChanged,
    toolsRegisteredThisRun:                 opts.toolsRegisteredThisRun,
    macrosRegisteredThisRun:                opts.macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun:     opts.macroInterceptorsRegisteredThisRun,
    contentProcessorsRegisteredThisRun:     opts.contentProcessorsRegisteredThisRun,
    worldInfoInterceptorsRegisteredThisRun: opts.worldInfoInterceptorsRegisteredThisRun,
    rpcEndpointsRegisteredThisRun:          opts.rpcEndpointsRegisteredThisRun,
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
    worldInfoInterceptorsSnapshot: api.worldInfo.listInterceptors(),
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
  if (getChildHandle(workerKey)) {
    const clearMsg: BroadcastClearMessage = {
      type:     'broadcast-clear',
      scriptId: script.id,
    };
    try {
      getChildHandle(workerKey)!.send(clearMsg);
    } catch (err) {
      spindle.log.warn(`[script-runner] broadcast-clear send to worker '${workerKey}' failed: ${String(err)}`);
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
      workerKey,
      api,
      handles:    new Map(),  // transient handles for this run (dropped on script-body lifecycle drop)
      onConsole:  opts.onConsole,
    });
    // Per-script fallback for console routing. Used by `handleConsoleEntry`
    // when the runId-keyed lookup misses (orphaned by Phase 9d.4.x drop) or
    // when the activeRun has no onConsole (handler-call activeRuns). See
    // `lastOnConsoleByScript` JSDoc for the full reasoning.
    if (opts.onConsole) {
      lastOnConsoleByScript.set(script.id, opts.onConsole);
    }
    // v0.26.1 — record per-run tracking sets so the late-register-handler
    // fallback in `handleRegisterHandler` can dual-update both the fallback
    // target's run-set AND the originating run's run-set. See the
    // `trackingSetsByRunId` declaration JSDoc above for the full lifecycle.
    trackingSetsByRunId.set(runId, {
      scriptId:               script.id,
      ...(opts.toolsRegisteredThisRun                 ? { tools:                 opts.toolsRegisteredThisRun }                 : {}),
      ...(opts.macrosRegisteredThisRun                ? { macros:                opts.macrosRegisteredThisRun }                : {}),
      ...(opts.macroInterceptorsRegisteredThisRun     ? { macroInterceptors:     opts.macroInterceptorsRegisteredThisRun }     : {}),
      ...(opts.contentProcessorsRegisteredThisRun     ? { contentProcessors:     opts.contentProcessorsRegisteredThisRun }     : {}),
      ...(opts.worldInfoInterceptorsRegisteredThisRun ? { worldInfoInterceptors: opts.worldInfoInterceptorsRegisteredThisRun } : {}),
      ...(opts.rpcEndpointsRegisteredThisRun          ? { rpcEndpoints:          opts.rpcEndpointsRegisteredThisRun }          : {}),
    });
    enforceTrackingSetsCap();
    try {
      getChildHandle(workerKey)!.send(fullRequest);
    } catch (err) {
      pendingRuns.delete(runId);
      activeRuns.delete(runId);
      trackingSetsByRunId.delete(runId);  // run never started — entry was speculative
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
  //
  // Phase C2 — route to the script's worker. The assignment is still in
  // `scriptWorkerAssignments` at this point (the `releaseScriptFromWorker`
  // call at the end of this function is what drops it).
  const workerKey = getWorkerForScript(scriptId);
  const handle    = getChildHandle(workerKey);
  if (handle) {
    // Phase E — bump activity; unregister is real worker-bound work.
    bumpWorkerActivity(workerKey);
    const msg: ScriptUnregisterMessage = {
      type: 'script-unregister',
      scriptId,
    };
    try { handle.send(msg); }
    catch (err) {
      spindle.log.warn(
        `[script-runner] script-unregister send to worker '${workerKey}' failed for ${scriptId}: ${String(err)}`,
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
  // v0.26.1 — drop the obj→handleId reverse map alongside the persistent
  // handle table. WeakMap entries would also be GC'd naturally as the
  // canonical's handle objects become unreferenced, but explicit removal
  // is cheaper than waiting for GC and matches the rest of this teardown
  // sweep's "drop everything per-scriptId" shape.
  persistentObjToHandleId.delete(scriptId);
  lastDispatchByScript.delete(scriptId);
  // Per-script onConsole fallback (used by handleConsoleEntry for orphaned-
  // runId + handler-call routing). Same lifecycle as lastDispatchByScript:
  // dropped when the script is disabled / deleted.
  lastOnConsoleByScript.delete(scriptId);
  // Per-script broadcast-handler in-flight counter. The script is being
  // unregistered (disable / delete); any pending broadcast handlers in
  // the child are about to be torn down by the `script-unregister` IPC
  // sent above. Drop the counter so it can't strand a phantom in-flight
  // signal past the script's lifetime.
  broadcastHandlerInFlight.delete(scriptId);

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

  // v0.26.1 — drop per-run tracking-set records owned by this script.
  // Mirrors the activeRuns walk above. Without this, the map would retain
  // entries whose scripts have been disabled/deleted; not a correctness
  // bug (late IPCs would no-op the optional-chain `.add`) but unbounded
  // growth across long sessions with frequent script enable/disable cycles.
  for (const [runId, entry] of trackingSetsByRunId) {
    if (entry.scriptId === scriptId) {
      trackingSetsByRunId.delete(runId);
    }
  }

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

  // Phase C1 — drop the worker assignment so this scriptId's slot frees
  // up for future least-loaded calculations. C1: harmless (always assigns
  // to DEFAULT_WORKER_KEY anyway). C2: meaningful for re-balancing.
  releaseScriptFromWorker(scriptId);
}

/**
 * Graceful shutdown of a single worker. Sends `ShutdownRequest`, awaits
 * the host's `stop()`, drops our local handle + restart-state for that
 * worker. Idempotent on missing or already-stopping workers.
 *
 * Phase C2 — used by `shutdownScriptRunner` (iterates all workers) and
 * by `rebalanceWorkerPool` (shuts down over-cap workers after a
 * `workerCount` decrease).
 */
async function shutdownWorker(workerKey: ScriptRunnerWorkerKey): Promise<void> {
  const handle = getChildHandle(workerKey);
  if (!handle) return;
  deleteChildHandle(workerKey);
  // Cancel any pending restart for this worker — we're tearing it down
  // intentionally, not recovering from a crash.
  clearRestartTimer(workerKey);
  clearStabilityTimer(workerKey);

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
    spindle.log.warn(`[script-runner] worker '${workerKey}' graceful stop failed: ${String(err)}`);
  }
}

/**
 * Phase F — manual full redistribution of all script assignments. Clears
 * every entry in `scriptWorkerAssignments` so each script's next fire
 * triggers a fresh least-loaded lookup over the current pool.
 *
 * Use case: after a user bumps `workerCount` (e.g. 1 → 4), the existing
 * sticky-assignment behavior keeps scripts on their pre-change worker.
 * This action redistributes them across the new larger pool.
 *
 * Workers themselves are NOT shut down. Workers that end up idle after
 * redistribution will be reclaimed naturally by the eviction sweep.
 * Workers that pick up new scripts spawn-on-demand via the next dispatch.
 */
export function redistributeAllAssignments(): void {
  const count = scriptWorkerAssignments.size;
  scriptWorkerAssignments.clear();
  spindle.log.info(
    `[script-runner] manual rebalance: cleared ${count} script→worker assignment(s); next fires will redistribute via least-loaded`,
  );
}

/**
 * Phase C2 — rebalance the worker pool after a `workerCount` setting
 * change. Called from `backend.ts`'s `update_settings` handler whenever
 * workerCount may have shifted.
 *
 * Soft-decrease (Option C from the Phase C design discussion):
 *   1. Compute the configured pool from the current `workerCount`.
 *   2. Find spawned workers (or in-flight spawns) outside that pool —
 *      these are over-cap workers being phased out.
 *   3. Release all assignments on over-cap workers; affected scripts will
 *      re-assign to in-pool workers via `getWorkerForScript` on their
 *      next fire (least-loaded picks from the new, smaller pool).
 *   4. Shutdown the over-cap workers in parallel.
 *
 * Mid-flight runs on a doomed worker complete normally — `handle.stop()`
 * sends the graceful shutdown signal and awaits the host's stopped
 * lifecycle event. In-process state on the doomed worker (closures,
 * module-scope `globalThis` cache, persistent handles) is lost — same
 * trade-off as worker crash recovery (Phase 10's known limitation).
 *
 * Idempotent: if no over-cap workers exist (no decrease happened, or
 * decrease already processed), this is a no-op.
 */
export async function rebalanceWorkerPool(): Promise<void> {
  const configured = new Set(getKnownWorkerKeys());
  const overCap: ScriptRunnerWorkerKey[] = [];
  for (const key of childHandles.keys()) {
    if (!configured.has(key)) overCap.push(key);
  }
  for (const key of spawnInFlights.keys()) {
    if (!configured.has(key) && !overCap.includes(key)) overCap.push(key);
  }
  if (overCap.length === 0) return;

  // Release assignments on over-cap workers FIRST so affected scripts
  // re-assign to in-pool workers on next fire / handler invocation.
  const releasedCount = new Map<ScriptRunnerWorkerKey, number>();
  for (const [scriptId, assigned] of scriptWorkerAssignments) {
    if (overCap.includes(assigned)) {
      releaseScriptFromWorker(scriptId);
      releasedCount.set(assigned, (releasedCount.get(assigned) ?? 0) + 1);
    }
  }
  for (const [key, count] of releasedCount) {
    spindle.log.info(
      `[script-runner] rebalance: released ${count} script(s) from over-cap worker '${key}'`,
    );
  }

  // Shutdown the over-cap workers in parallel.
  await Promise.all(overCap.map((k) => shutdownWorker(k)));

  spindle.log.info(
    `[script-runner] rebalance complete — shut down ${overCap.length} over-cap worker(s): ${overCap.join(', ')}`,
  );
}

/**
 * Graceful shutdown. Sends `ShutdownRequest` to every spawned worker,
 * then awaits each `stop()`. Idempotent.
 *
 * Called during LumiScript teardown (extension disable / unload). Hard
 * kills come through the host's lifecycle path and don't go through here.
 *
 * Phase C2 — iterates all currently-spawned workers (was: just the
 * default child). The shared `messageUnsub` / `lifecycleUnsub` global
 * subscriptions are dropped only AFTER all workers are gone.
 */
export async function shutdownScriptRunner(): Promise<void> {
  // Phase E — stop the eviction sweep before tearing down workers, so a
  // mid-shutdown sweep doesn't try to evict workers we're already
  // stopping (harmless thanks to idempotent shutdownWorker, but tidier).
  stopEvictionSweep();
  const keys = [...childHandles.keys()];
  await Promise.all(keys.map((k) => shutdownWorker(k)));

  messageUnsub?.();
  lifecycleUnsub?.();
  messageUnsub   = null;
  lifecycleUnsub = null;
}

// ─── Eviction sweep machinery (Phase E) ───────────────────────────────────

/**
 * Query a specific worker's resident-set-size in bytes via the existing
 * `diagnostic-stats-request` IPC. Returns null if the worker isn't
 * spawned, the IPC send fails, or the worker doesn't respond within
 * `EVICTION_MEMORY_QUERY_TIMEOUT_MS`.
 *
 * Internal — used only by the eviction sweep. Does NOT bump the
 * target worker's activity (would defeat idle-eviction tracking).
 */
export async function queryWorkerMemoryBytes(workerKey: ScriptRunnerWorkerKey): Promise<number | null> {
  const handle = getChildHandle(workerKey);
  if (!handle) return null;

  const requestId = `eviction-mem-${nextDiagnosticRequestSeq++}`;

  return new Promise<number | null>((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      pendingDiagnosticStats.delete(requestId);
      resolve(null);
    }, EVICTION_MEMORY_QUERY_TIMEOUT_MS);

    pendingDiagnosticStats.set(requestId, (stats) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      pendingDiagnosticStats.delete(requestId);
      resolve(stats?.rss ?? null);
    });

    try {
      handle.send({ type: 'diagnostic-stats-request', requestId });
    } catch (err) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      pendingDiagnosticStats.delete(requestId);
      spindle.log.warn(
        `[script-runner] eviction memory query send to worker '${workerKey}' failed: ${err instanceof Error ? err.message : String(err)}`,
      );
      resolve(null);
    }
  });
}

/**
 * True if `workerKey` has any active run — i.e. is currently doing work
 * and should be exempt from eviction.
 *
 * "Active run" here mirrors the precise semantics of
 * `scriptHasActiveDispatch` (per-script equivalent): the worker is doing
 * IPC-bound work right now. That covers three lifecycle classes:
 *
 *   1. A script-body dispatch awaiting `run-result` — `pendingRuns` has
 *      the runId.
 *   2. A parent-dispatched handler call awaiting `handler-result`
 *      (commands.onInvoked, modal callbacks, etc.) — `pendingHandlerCalls`
 *      has the runId.
 *   3. A child-side async broadcast handler in flight — tracked via the
 *      `broadcastHandlerInFlight` counter (the parent's only signal for
 *      this lifecycle, since broadcast fires are fire-and-forget and
 *      neither `pendingRuns` nor `pendingHandlerCalls` see them).
 *
 * **Why we intersect with `pendingRuns` / `pendingHandlerCalls` rather
 * than scanning raw `activeRuns`:** Phase 9d.4.x deliberately keeps
 * `activeRuns` entries alive past `run-result` so the script's late
 * async work (setTimeout / setInterval / long-tail promise chains) can
 * keep routing api calls through the run's stored api object. That
 * survival horizon is for routing, NOT for "the worker is busy."
 *
 * Pre-fix: any script that ever ran on a worker left an `activeRuns`
 * entry behind, and the eviction sweep saw that entry as "active work"
 * → marked the worker exempt → idle eviction never fired. With the
 * intersection, only genuinely in-flight IPC counts.
 *
 * Note that the design intent (per `v1.0-user-facing-changes.md` § "Long-
 * lived background work needs to surface activity") is that scripts with
 * pure-client-side `setInterval` work get evicted along with their
 * worker. Authors who want to outlive idle eviction must call `api.*`
 * periodically to keep the worker visible to the host. A dedicated
 * keep-alive surface may land post-v1.0; for now the design accepts the
 * trade-off.
 */
function workerHasActiveRun(workerKey: ScriptRunnerWorkerKey): boolean {
  for (const [runId, run] of activeRuns) {
    if (run.workerKey !== workerKey) continue;
    if (pendingRuns.has(runId) || pendingHandlerCalls.has(runId)) return true;
  }
  // Broadcast handlers on the child side don't go through activeRuns —
  // sweep the counter for any script assigned to this worker.
  for (const [scriptId, assignedWorker] of scriptWorkerAssignments) {
    if (assignedWorker !== workerKey) continue;
    if ((broadcastHandlerInFlight.get(scriptId) ?? 0) > 0) return true;
  }
  return false;
}

/**
 * Phase F follow-up — true if `scriptId` has ANY dispatch in flight,
 * either a real trigger run OR a handler invocation (macro / tool /
 * broadcast / RPC endpoint / chat injection / world-info interceptor /
 * DOM event handler). Used by hot-reload deferral to avoid firing a body
 * re-run while the script is doing work that's not tracked via
 * `trigger-registry.runningCounts` (which only sees real trigger
 * events). Broadcast handlers in particular can run for many seconds
 * (e.g. tracker's rerun handler invoking the LLM extractor loop)
 * without ever being in `runningCounts`.
 *
 * **Why intersect with `pendingRuns` / `pendingHandlerCalls`:** raw
 * `activeRuns` is NOT a precise "currently doing work" signal.
 * Trigger-style script-body entries deliberately persist past
 * `run-result` (Phase 9d.4.x, see the comment in `handleRunResultMessage`)
 * so late-async work (`setTimeout` callbacks, `setInterval` ticks,
 * long-tail `.then` chains) can keep routing api requests through the
 * run's stored api object. That survival horizon is for ROUTING, not for
 * "is the script blocking a reload?" detection. A run is genuinely
 * in-flight only while it's awaiting a response from the child:
 * `pendingRuns` clears on `run-result`; `pendingHandlerCalls` clears on
 * `handler-result`. Intersecting `activeRuns` with those two maps gives
 * the precise "still awaiting child response" set we need.
 *
 * Without this intersection, hot-reload defers forever after the first
 * reload completes — the reload's own `activeRuns` entry persists,
 * `scriptHasActiveDispatch` keeps returning `true`, the deferred-reload
 * polling drain never finds idle, and every subsequent edit (and manual
 * reload button press) gets silently queued behind a never-clearing flag.
 */
export function scriptHasActiveDispatch(scriptId: string): boolean {
  // Async broadcast handler invocations are tracked separately — broadcast
  // fires are fire-and-forget from the parent (`sendBroadcastFireToChild`),
  // so they never show up in `pendingRuns` / `pendingHandlerCalls`. The
  // child emits `broadcast-handler-started` / `broadcast-handler-finished`
  // IPCs for thenable-returning handlers; this counter tracks them. See
  // the `broadcastHandlerInFlight` JSDoc for full reasoning.
  if ((broadcastHandlerInFlight.get(scriptId) ?? 0) > 0) return true;
  for (const [runId, run] of activeRuns) {
    if (run.scriptId !== scriptId) continue;
    if (pendingRuns.has(runId) || pendingHandlerCalls.has(runId)) return true;
  }
  return false;
}

/**
 * v1.0.0-rc.3+ — true if any script currently assigned to `workerKey`
 * holds active registrations (tools, macros, drawer tabs, RPC endpoints,
 * etc.) that would dangle after worker death. See `script-pinning.ts` for
 * the full registry list and rationale.
 *
 * Used by `evictWorker` (race-safe gate) AND by `evictionSweep`'s
 * candidate filters (efficiency — pinned workers are excluded from the
 * candidate list before sorting, mirroring the `workerHasActiveRun`
 * pattern).
 */
function workerHostsPinningRegistration(workerKey: ScriptRunnerWorkerKey): boolean {
  for (const [scriptId, assignedWorker] of scriptWorkerAssignments) {
    if (assignedWorker !== workerKey) continue;
    if (scriptHasPinningRegistrations(scriptId)) return true;
  }
  return false;
}

/**
 * Evict a single worker. Race-checked: re-verifies "no active runs" just
 * before shutdown, since the snapshot the sweep took may be stale by the
 * time we reach this call (memory queries are async). If a run started
 * during the sweep window, the eviction is aborted with a log; the next
 * sweep will reconsider.
 *
 * Releases all script assignments on the worker BEFORE shutdown so the
 * affected scripts re-assign to in-pool workers on their next fire.
 */
async function evictWorker(workerKey: ScriptRunnerWorkerKey, reason: string): Promise<void> {
  if (workerHasActiveRun(workerKey)) {
    spindle.log.info(
      `[script-runner] eviction skipped for worker '${workerKey}' (active run started during sweep; reason was: ${reason})`,
    );
    return;
  }
  // v1.0.0-rc.3+ — Registration-pinning gate. A worker hosting a script
  // with active long-lived registrations (api.tools.register, api.macros.
  // register, drawer tabs, RPC endpoints, etc.) must NOT be evicted —
  // those registrations have parent-side wrappers that route through
  // `sendRunHandlerRequest`, which throws synchronously when the worker
  // isn't running. Evicting such a worker turns every host-side wrapper
  // pointing at it into a null pointer; the user-visible symptom is
  // "this tool / macro / panel stops working until I manually toggle the
  // script". See `script-pinning.ts` for the full registry list +
  // rationale, and `notes/post-eviction-registration-pinning.md` if a
  // post-mortem follow-up surfaces a registry we missed.
  //
  // The check is BOTH here (race-safe — registrations could be added
  // between candidate snapshot and this call) AND in `evictionSweep`'s
  // candidate filters (so pinned workers don't displace eligible ones
  // off the front of the sort).
  if (workerHostsPinningRegistration(workerKey)) {
    totalEvictionsSkippedByPin++;
    spindle.log.info(
      `[script-runner] eviction skipped for worker '${workerKey}' ` +
      `(at least one assigned script holds active registrations; reason was: ${reason})`,
    );
    return;
  }

  // Release assignments on this worker so affected scripts re-assign on
  // next fire via least-loaded over the remaining pool.
  const releasedCount: string[] = [];
  for (const [scriptId, assigned] of scriptWorkerAssignments) {
    if (assigned === workerKey) {
      releaseScriptFromWorker(scriptId);
      releasedCount.push(scriptId);
    }
  }

  // Also drop the activity timestamp — fresh worker on respawn starts
  // with whatever timestamp `setChildHandle` writes.
  workerLastActivity.delete(workerKey);

  spindle.log.info(
    `[script-runner] evicting worker '${workerKey}' (${reason}); released ${releasedCount.length} script assignment(s)`,
  );

  // Phase E telemetry — bump BEFORE shutdownWorker so the counter reflects
  // the eviction even if shutdown errors during teardown.
  totalEvictions++;
  lastEvictionAt     = Date.now();
  lastEvictionReason = reason;

  await shutdownWorker(workerKey);
}

/**
 * One pass of the eviction sweep. Applies idle eviction first (no
 * memory queries needed), then memory eviction (queries each remaining
 * worker, sums totals, LRU-evicts until under ceiling). Workers with
 * active runs are exempt; the sweep keeps at least `MIN_WARM_WORKERS`
 * alive (counted across spawned workers, not configured pool size).
 *
 * Exported for tests to trigger manually without waiting for the
 * interval.
 */
export async function evictionSweep(): Promise<void> {
  const config = evictionConfigReader();
  const now    = Date.now();

  // Snapshot the spawned workers; the set may change during async memory
  // queries, but evictWorker re-checks eligibility just before shutdown.
  const spawned = [...childHandles.keys()];
  if (spawned.length <= MIN_WARM_WORKERS) {
    // Pool is at or below the warm floor — nothing to evict.
    return;
  }

  // ── Idle eviction pass ───────────────────────────────────────────────
  // Sort by ascending lastActivity (oldest first); evict any idle-past-
  // threshold workers while staying above the warm floor.
  //
  // v1.0.0-rc.3+ — pinned workers (those hosting at least one script with
  // active registrations) are filtered out at the candidate stage, NOT
  // just at the `evictWorker` race-check. Filtering at the candidate
  // stage matters for the floor-binding case: if 4 workers are spawned,
  // 3 are pinned, and 1 is genuinely idle, including pinned workers in
  // the candidate list would order them by lastActivity. The oldest
  // pinned one might sort before the genuinely-idle non-pinned one,
  // and `evictWorker` would skip it (via the registration gate) — but
  // the floor-counter (`spawnedAfterIdle`) decrements optimistically,
  // which could prematurely terminate the loop and leave the genuinely-
  // idle non-pinned worker un-evicted. Filtering the candidates avoids
  // that confusion entirely.
  //
  // The pinning-skip telemetry counter (`totalEvictionsSkippedByPin`) is
  // bumped imperatively in this loop so steady-state filtered skips are
  // observable in diagnostics (not just race-safe gate fires inside
  // `evictWorker`). Bumping happens once per pinned worker per sweep
  // pass; a worker pinned across both the idle and memory passes
  // contributes two increments per sweep, which approximates "how often
  // is the pinning policy kicking in" — fine for the diagnostic surface.
  const idleCandidates: { key: ScriptRunnerWorkerKey; lastActivity: number }[] = [];
  for (const k of spawned) {
    if (workerHasActiveRun(k)) continue;
    if (workerHostsPinningRegistration(k)) {
      totalEvictionsSkippedByPin++;
      continue;
    }
    idleCandidates.push({ key: k, lastActivity: workerLastActivity.get(k) ?? now });
  }
  idleCandidates.sort((a, b) => a.lastActivity - b.lastActivity);

  let spawnedAfterIdle = spawned.length;
  for (const c of idleCandidates) {
    if (spawnedAfterIdle <= MIN_WARM_WORKERS) break;
    if (now - c.lastActivity <= config.idleTimeoutMs) break;  // sorted; rest are younger
    await evictWorker(c.key, `idle > ${Math.round(config.idleTimeoutMs / 1000)}s`);
    spawnedAfterIdle--;
  }

  // ── Memory eviction pass ─────────────────────────────────────────────
  const remaining = [...childHandles.keys()];
  if (remaining.length <= MIN_WARM_WORKERS) return;

  // Query memory for each remaining worker in parallel.
  const memReadings = await Promise.all(
    remaining.map(async (k) => ({ key: k, bytes: await queryWorkerMemoryBytes(k) })),
  );
  let totalBytes = 0;
  for (const r of memReadings) {
    if (r.bytes !== null) totalBytes += r.bytes;
  }
  if (totalBytes <= config.memoryCeilingBytes) return;

  // Over ceiling — LRU-evict eligible workers until we drop under it.
  // "Eligible" = no active run, no pinning registrations, above warm floor.
  //
  // v1.0.0-rc.3+ — same registration-pin filter as the idle pass. A user
  // whose pool is ALL pinned workers AND over the memory ceiling will
  // see the sweep make no progress and surface a warning in the
  // diagnostics panel ("eviction-exempt" row); that's the correct
  // signal — the alternative ("evict pinned workers anyway as last
  // resort") would silently break the user's tools / macros / panels
  // mid-session. Better to leave memory pressure visible and let the
  // user adjust pool settings or kill registration-holding scripts
  // explicitly.
  //
  // Same telemetry-bump rationale as the idle pass — pinned-skips are
  // counted imperatively so steady-state diagnostics reflect them.
  const lruCandidates: { key: ScriptRunnerWorkerKey; bytes: number | null; lastActivity: number }[] = [];
  for (const r of memReadings) {
    if (workerHasActiveRun(r.key)) continue;
    if (workerHostsPinningRegistration(r.key)) {
      totalEvictionsSkippedByPin++;
      continue;
    }
    lruCandidates.push({ ...r, lastActivity: workerLastActivity.get(r.key) ?? now });
  }
  lruCandidates.sort((a, b) => a.lastActivity - b.lastActivity);

  let runningTotal = totalBytes;
  let spawnedAfterMem = remaining.length;
  for (const c of lruCandidates) {
    if (runningTotal <= config.memoryCeilingBytes) break;
    if (spawnedAfterMem <= MIN_WARM_WORKERS) break;
    const reason = `memory ceiling exceeded (total ${Math.round(runningTotal / 1024 / 1024)} MB > ${Math.round(config.memoryCeilingBytes / 1024 / 1024)} MB)`;
    await evictWorker(c.key, reason);
    runningTotal -= c.bytes ?? 0;
    spawnedAfterMem--;
  }
}

/**
 * Start the periodic eviction sweep. Idempotent (re-calling clears the
 * existing timer and starts fresh). Called from `backend.ts` cold-start
 * after settings load.
 */
export function startEvictionSweep(): void {
  if (evictionSweepTimer !== null) clearInterval(evictionSweepTimer);
  evictionSweepTimer = setInterval(() => {
    void evictionSweep().catch((err) => {
      spindle.log.warn(
        `[script-runner] eviction sweep failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    });
  }, EVICTION_SWEEP_INTERVAL_MS);
}

/**
 * Stop the periodic eviction sweep. Idempotent. Called by
 * `shutdownScriptRunner` during teardown.
 */
export function stopEvictionSweep(): void {
  if (evictionSweepTimer !== null) {
    clearInterval(evictionSweepTimer);
    evictionSweepTimer = null;
  }
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

/** @internal — true iff `pendingDomHandles` has an entry for `(scriptId, elementId)`.
 *  Lets the post-eviction alias-storage regression test verify the parent
 *  stores DOM handles under both the canonical id AND the proxy's
 *  `_elementId` after stableId dedup. */
export function __hasPendingDomHandleForTests(scriptId: string, elementId: string): boolean {
  return lookupPendingDomHandle(scriptId, elementId) !== undefined;
}

/** @internal */
export function __getRestartAttemptsForTests(
  workerKey: ScriptRunnerWorkerKey = DEFAULT_WORKER_KEY,
): number {
  return getRestartAttempts(workerKey);
}

/** @internal */
export function __isRestartTimerScheduledForTests(
  workerKey: ScriptRunnerWorkerKey = DEFAULT_WORKER_KEY,
): boolean {
  return getRestartTimer(workerKey) !== null;
}

/** @internal */
export function __isStabilityTimerScheduledForTests(
  workerKey: ScriptRunnerWorkerKey = DEFAULT_WORKER_KEY,
): boolean {
  return getStabilityTimer(workerKey) !== null;
}

/** @internal */
export function __getChildHandlePresentForTests(): boolean {
  return hasAnyChildHandle();
}

// ─── Phase C1 worker-assignment inspectors ─────────────────────────────────

/** @internal */
export function __getWorkerForScriptForTests(scriptId: string): ScriptRunnerWorkerKey {
  return getWorkerForScript(scriptId);
}

/** @internal */
export function __releaseScriptFromWorkerForTests(scriptId: string): void {
  releaseScriptFromWorker(scriptId);
}

/** @internal */
export function __getKnownWorkerKeysForTests(): ScriptRunnerWorkerKey[] {
  return getKnownWorkerKeys();
}

/** @internal */
export function __getAssignedScriptCountForTests(): number {
  return scriptWorkerAssignments.size;
}

/**
 * v1.0.0-rc.3+ — direct test access to the handler-cleanup machinery.
 * Installs a cleanup closure under `(scriptId, handlerId)` mirroring what
 * `recordHandlerCleanup` does inside `handleRegisterHandler`. Used by the
 * unregister-handler kind-switch tests to seed entries without driving
 * the full register-handler IPC flow.
 * @internal
 */
export function __recordHandlerCleanupForTests(
  scriptId:  string,
  handlerId: string,
  cleanup:   () => void,
): void {
  recordHandlerCleanup(scriptId, handlerId, cleanup);
}

/**
 * v1.0.0-rc.3+ — direct entry point for the parent's
 * `handleUnregisterHandler` switch so tests can exercise each `kind`
 * branch without driving a full child→parent IPC. Mirrors the call site
 * inside `handleChildMessage`'s 'unregister-handler' case.
 * @internal
 */
export function __handleUnregisterHandlerForTests(msg: UnregisterHandler): void {
  handleUnregisterHandler(msg);
}

/**
 * v1.0.0-rc.3+ — observe whether a `(scriptId, handlerId)` cleanup is
 * currently installed. Used by tests to assert post-unregister-handler
 * teardown landed (the entry should be gone after a successful
 * `invokeAndDropHandlerCleanup`).
 * @internal
 */
export function __hasHandlerCleanupForTests(scriptId: string, handlerId: string): boolean {
  return handlerCleanups.get(scriptId)?.has(handlerId) ?? false;
}

// ─── Phase E eviction inspectors ──────────────────────────────────────────

/**
 * Set a worker's last-activity timestamp manually. Tests use this to
 * simulate "worker has been idle for N ms" without waiting wall-clock time.
 * @internal
 */
export function __setWorkerLastActivityForTests(
  workerKey: ScriptRunnerWorkerKey,
  timestamp: number,
): void {
  workerLastActivity.set(workerKey, timestamp);
}

/** @internal */
export function __getWorkerLastActivityForTests(
  workerKey: ScriptRunnerWorkerKey,
): number | null {
  return workerLastActivity.get(workerKey) ?? null;
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
 * Phase C2-polish — invoke the private `sendBroadcastFireToChild` for
 * cross-worker routing tests. Lets tests verify a `broadcast-fire` IPC
 * routes to the subscribing script's worker (per Phase C2 routing logic)
 * without bringing up the full bus + subscribe machinery.
 *
 * @internal
 */
export function __sendBroadcastFireToChildForTests(msg: BroadcastFireMessage): void {
  sendBroadcastFireToChild(msg);
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

/**
 * Set / clear the `broadcastHandlerInFlight` counter for a script. Used by
 * `tests/engine/trigger-registry-reload.test.ts` to verify that
 * `scriptHasActiveDispatch` reports broadcast-handler-in-flight correctly,
 * which `fireReload` reads to drop autosave reloads + defer manual ones.
 *
 * In production this counter is only mutated by the
 * `broadcast-handler-started` / `broadcast-handler-finished` IPC handlers
 * (and cleared in `unregisterScriptFromChild`); the test seam exists so
 * a controllable-runner test can simulate "a broadcast handler is mid-
 * extraction" without standing up a full child process + bus.
 * @internal
 */
export function __setBroadcastHandlerInFlightForTests(scriptId: string, count: number): void {
  if (count <= 0) {
    broadcastHandlerInFlight.delete(scriptId);
  } else {
    broadcastHandlerInFlight.set(scriptId, count);
  }
}

/**
 * Read the `broadcastHandlerInFlight` counter for a script. Used by tests
 * to verify that the counter mutates in the expected direction across
 * `broadcast-handler-started` / `broadcast-handler-finished` IPC arrivals.
 * @internal
 */
export function __getBroadcastHandlerInFlightCountForTests(scriptId: string): number {
  return broadcastHandlerInFlight.get(scriptId) ?? 0;
}

/** @internal — inspector for trackingSetsByRunId (memory-bound testing). */
export function __getTrackingSetsByRunIdSizeForTests(): number {
  return trackingSetsByRunId.size;
}

/** @internal — inspector for trackingSetsByRunId (memory-bound testing). */
export function __hasTrackingSetEntryForTests(runId: string): boolean {
  return trackingSetsByRunId.has(runId);
}

/** @internal — production cap value for assertion tests. */
export function __getProductionTrackingSetsCapForTests(): number {
  return TRACKING_SETS_SOFT_CAP;
}

/** @internal — override cap for the next dispatches. Pass null to restore. */
export function __setTrackingSetsCapForTests(cap: number | null): void {
  trackingSetsCapOverride = cap;
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

// ─── Diagnostics surface (v0.28.0+) ─────────────────────────────────────────

/**
 * Synchronous snapshot of script-runner subprocess health from the host's
 * point of view. Consumed by `src/engine/diagnostics.ts` Section B. No
 * IPC — purely reflects module-level counters maintained by the lifecycle
 * machinery.
 *
 * `totalRestartCount` is monotonic from LumiScript load; `restartAttempts`
 * resets to 0 after a stable period (the backoff index, not a counter).
 * `lastRestartReason` is the most recent respawn reason string, or null if
 * no respawn has occurred this session.
 */
export interface ScriptRunnerHealthSnapshot {
  /** Total respawns since LumiScript loaded. */
  totalRestartCount: number;
  /** Most recent respawn reason, or null if no respawn this session. */
  lastRestartReason: string | null;
  /** Current backoff index (resets to 0 after the stability window). */
  currentBackoffAttempts: number;
  /** Whether a child process is currently alive (non-null handle). */
  childAlive: boolean;
  /** Current child processId, if alive. */
  processId: string | null;
}

export function getRunnerHealth(): ScriptRunnerHealthSnapshot {
  // processId: pick any spawned worker's processId. In single-worker mode
  // this is exactly the one worker; in multi-worker mode it's a
  // representative (the per-worker breakdown is in the Workers section of
  // the Diagnostics panel). Pre-fix this read defaulted to
  // DEFAULT_WORKER_KEY (`worker-1`); when worker-1 was evicted (idle or
  // memory eviction) but other workers were still spawned, the field
  // collapsed to `null` and the panel showed "Running (processId: <unknown>)".
  // Falls back to null only when no workers are spawned at all.
  const firstWorkerKey = childHandles.keys().next().value as
    | ScriptRunnerWorkerKey
    | undefined;
  return {
    totalRestartCount,
    lastRestartReason,
    currentBackoffAttempts: getRestartAttempts(DEFAULT_WORKER_KEY),
    childAlive:             hasAnyChildHandle(),
    processId:              firstWorkerKey
      ? getChildHandle(firstWorkerKey)?.processId ?? null
      : null,
  };
}

/**
 * Worker-pool diagnostics snapshot — synchronous, no IPC. Pairs with the
 * async `queryWorkerMemoryBytes(key)` per-worker memory reads to produce
 * the full Section B picture in the diagnostics report.
 *
 * Fields:
 *   - `configuredWorkerCount` — what the settings reader returns
 *     (clamped to `[1, 16]`).
 *   - `workers` — one row per currently-spawned worker.
 *   - `totalAssignedScripts` — count of entries in
 *     `scriptWorkerAssignments` (across all workers).
 *   - `evictionTelemetry` — session-monotonic eviction counter + last
 *     eviction's timestamp and reason.
 *   - `settings` — current eviction config (idle timeout + memory
 *     ceiling) as seen by the dispatcher, for the diagnostics consumer
 *     to surface alongside the runtime state.
 */
export interface WorkerPoolDiagnostics {
  configuredWorkerCount: number;
  workers: Array<{
    workerKey:           ScriptRunnerWorkerKey;
    processId:           string;
    lastActivityMs:      number;
    assignedScriptCount: number;
    /**
     * Script IDs currently assigned to this worker, sorted alphabetically
     * for deterministic output across reads. Names are resolved by the
     * diagnostics collector via `scriptStorage.getScript(id)?.name`
     * (this layer has no access to script storage). The modal uses the
     * resolved names for the per-worker Scripts-column tooltip + the
     * "Script assignments by worker" row in the Markdown export.
     */
    assignedScripts:     string[];
    restartAttempts:     number;
    /**
     * v1.0.0-rc.3+ — true when at least one assigned script holds active
     * long-lived registrations (tools, macros, drawer tabs, RPC endpoints,
     * etc.). Pinned workers are exempt from idle + memory eviction (see
     * `workerHostsPinningRegistration` + `evictWorker`).
     */
    pinnedByRegistrations: boolean;
    /**
     * v1.0.0-rc.3+ — per-pinning-script registration breakdown. Empty
     * array when `pinnedByRegistrations` is false. Each entry is a script
     * currently assigned to this worker that holds at least one
     * registration. Used by the diagnostics panel to render the
     * "Eviction-exempt scripts" row.
     *
     * `scriptId`s within the array are sorted alphabetically for
     * deterministic output across reads.
     */
    pinningScripts: Array<{
      scriptId: string;
      counts:   ScriptRegistrationCounts;
    }>;
  }>;
  totalAssignedScripts: number;
  evictionTelemetry: {
    totalEvictions:     number;
    lastEvictionAt:     number | null;
    lastEvictionReason: string | null;
    /**
     * v1.0.0-rc.3+ — count of sweep-tick decisions to NOT evict a
     * candidate worker because at least one assigned script held active
     * registrations. Sustained growth is expected for users running
     * long-lived tool / panel scripts; non-zero with no registration
     * scripts present would be anomalous.
     */
    totalEvictionsSkippedByPin: number;
  };
  settings: {
    idleTimeoutMs:      number;
    memoryCeilingBytes: number;
  };
}

export function getWorkerPoolDiagnostics(): WorkerPoolDiagnostics {
  // Per-worker assigned-script lists. Iterate the assignment Map once;
  // counts are derived from list length. Scripts within a worker are
  // alphabetically sorted for deterministic output across reads.
  const assignedByWorker = new Map<ScriptRunnerWorkerKey, string[]>();
  for (const [scriptId, workerKey] of scriptWorkerAssignments) {
    const list = assignedByWorker.get(workerKey) ?? [];
    list.push(scriptId);
    assignedByWorker.set(workerKey, list);
  }
  for (const list of assignedByWorker.values()) list.sort();

  const workers: WorkerPoolDiagnostics['workers'] = [];
  for (const [workerKey, handle] of childHandles) {
    const scripts = assignedByWorker.get(workerKey) ?? [];
    // v1.0.0-rc.3+ — registration census per assigned script. Drops
    // scripts with zero registrations from the breakdown so the
    // diagnostics row only surfaces the load-bearing ones.
    const pinningScripts: WorkerPoolDiagnostics['workers'][number]['pinningScripts'] = [];
    for (const scriptId of scripts) {
      const counts = getRegistrationCountsForScript(scriptId);
      if (counts.total > 0) {
        pinningScripts.push({ scriptId, counts });
      }
    }
    workers.push({
      workerKey,
      processId:             handle.processId,
      lastActivityMs:        workerLastActivity.get(workerKey) ?? 0,
      assignedScriptCount:   scripts.length,
      assignedScripts:       scripts,
      restartAttempts:       getRestartAttempts(workerKey),
      pinnedByRegistrations: pinningScripts.length > 0,
      pinningScripts,
    });
  }
  // Stable order — alphabetical by workerKey makes the diagnostic output
  // deterministic across reads even as the Map iteration order drifts.
  workers.sort((a, b) => a.workerKey.localeCompare(b.workerKey));

  const config = evictionConfigReader();

  return {
    configuredWorkerCount: workerCountReader(),
    workers,
    totalAssignedScripts:  scriptWorkerAssignments.size,
    evictionTelemetry: {
      totalEvictions,
      lastEvictionAt,
      lastEvictionReason,
      totalEvictionsSkippedByPin,
    },
    settings: {
      idleTimeoutMs:      config.idleTimeoutMs,
      memoryCeilingBytes: config.memoryCeilingBytes,
    },
  };
}

/**
 * Query a single worker's full diagnostic stats (RSS / heap / CPU /
 * uptime) via the `diagnostic-stats-request` IPC. Resolves with the
 * response or `null` if the worker isn't spawned, the send fails, or
 * the response times out (default 2 s).
 *
 * Private helper — used by the legacy `queryRunnerStats` aggregator
 * below. Could be exposed later if per-worker stats become part of the
 * public Diagnostics surface.
 */
async function queryWorkerStats(
  workerKey: ScriptRunnerWorkerKey,
  timeoutMs = 2_000,
): Promise<import('../types/script-runner-ipc.js').DiagnosticStatsResponse | null> {
  const handle = getChildHandle(workerKey);
  if (!handle) return null;

  const requestId = `diag-stats-${nextDiagnosticRequestSeq++}`;

  return new Promise((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      pendingDiagnosticStats.delete(requestId);
      resolve(null);
    }, timeoutMs);

    pendingDiagnosticStats.set(requestId, (response) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(response);
    });

    try {
      handle.send({ type: 'diagnostic-stats-request', requestId });
    } catch (err) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      pendingDiagnosticStats.delete(requestId);
      spindle.log.warn(
        `[script-runner] diagnostic-stats-request send to worker '${workerKey}' failed: ${err instanceof Error ? err.message : String(err)}`,
      );
      resolve(null);
    }
  });
}

/**
 * Async — request an aggregated process-stats snapshot across every
 * currently-spawned worker. Resolves with the aggregate response, or
 * `null` if no workers are spawned OR every per-worker query failed or
 * timed out.
 *
 * Aggregation: sums RSS / heap / CPU times across workers (sum is the
 * meaningful "total LumiScript footprint" reading); takes the max of
 * `uptimeSec` (the longest-lived worker's uptime is the most useful
 * "runner uptime" proxy — newly-spawned workers reset the clock).
 *
 * Timeout default 2 seconds *per worker* — the queries run in parallel,
 * so total wall-clock time is bounded by the slowest worker, not the
 * sum. A worker that times out is omitted from the aggregate rather
 * than failing the whole call.
 *
 * Pre-fix this routed to `getChildHandle()` (default
 * `DEFAULT_WORKER_KEY` = `worker-1`); when worker-1 was evicted but
 * others survived, the response never arrived, the request timed out,
 * and the Diagnostics panel surfaced "Stats request timed out — child
 * may be hung in a sync block." (False alarm — children were fine,
 * routing was wrong.)
 *
 * Consumed by `backend.ts`'s diagnostic-report handler before invoking
 * `collectBackendDiagnostics`.
 */
export async function queryRunnerStats(
  timeoutMs = 2_000,
): Promise<import('../types/script-runner-ipc.js').DiagnosticStatsResponse | null> {
  const workerKeys = [...childHandles.keys()];
  if (workerKeys.length === 0) return null;

  const responses = await Promise.all(
    workerKeys.map((k) => queryWorkerStats(k, timeoutMs)),
  );
  const successful = responses.filter(
    (r): r is import('../types/script-runner-ipc.js').DiagnosticStatsResponse =>
      r !== null,
  );
  if (successful.length === 0) return null;

  return {
    type:        'diagnostic-stats-response',
    requestId:   'aggregate',  // synthetic; this response is parent-constructed
    rss:         successful.reduce((s, r) => s + r.rss,         0),
    heapTotal:   successful.reduce((s, r) => s + r.heapTotal,   0),
    heapUsed:    successful.reduce((s, r) => s + r.heapUsed,    0),
    external:    successful.reduce((s, r) => s + r.external,    0),
    cpuUserUs:   successful.reduce((s, r) => s + r.cpuUserUs,   0),
    cpuSystemUs: successful.reduce((s, r) => s + r.cpuSystemUs, 0),
    uptimeSec:   Math.max(...successful.map((r) => r.uptimeSec)),
  };
}

/** @internal */
export function __resetForTests(): void {
  // Singletons / scalars
  scriptResolver           = null;
  childHandles.clear();
  messageUnsub             = null;
  lifecycleUnsub           = null;
  cachedUserId             = null;
  totalRestartCount        = 0;
  lastRestartReason        = null;
  // Phase B (v1.0 runtime-isolation) — per-worker Maps. Clear all timers
  // before dropping the Map entries so no stale callbacks fire post-reset.
  for (const t of restartTimers.values())   clearTimeout(t);
  for (const t of stabilityTimers.values()) clearTimeout(t);
  restartAttempts.clear();
  restartTimers.clear();
  stabilityTimers.clear();
  spawnInFlights.clear();
  // Phase C1 — worker assignment Map.
  scriptWorkerAssignments.clear();
  // Phase C2 — restore the workerCount reader's safe default. Without
  // this, a test that sets `setWorkerCountReader(() => N)` would leak the
  // configured N into other test files that just call `__resetForTests`.
  workerCountReader = () => 1;
  // Phase E — eviction state. Clear last-activity timestamps + restore
  // the eviction-config reader's safe default; stop any in-flight sweep
  // timer so tests don't see surprise eviction during their own setup.
  workerLastActivity.clear();
  evictionConfigReader = () => ({
    idleTimeoutMs:      30 * 60 * 1000,
    memoryCeilingBytes: 512 * 1024 * 1024,
  });
  if (evictionSweepTimer !== null) {
    clearInterval(evictionSweepTimer);
    evictionSweepTimer = null;
  }
  // Eviction telemetry — reset so tests see a clean slate.
  totalEvictions             = 0;
  lastEvictionAt             = null;
  lastEvictionReason         = null;
  totalEvictionsSkippedByPin = 0;
  openAwaitTimeoutOverride   = null;
  restartBackoffOverride     = null;
  stabilityThresholdOverride = null;
  lastTrackingSetEvictionWarnAt = 0;
  trackingSetsCapOverride       = null;

  // Sequences (counter resets so test-generated IDs stay deterministic across runs)
  nextHandleSeq            = 1;
  nextHandlerCallSeq       = 1;
  nextRunSeq               = 1;
  nextDiagnosticRequestSeq = 1;
  pendingDiagnosticStats.clear();

  // Maps without timers — straight clear
  pendingRuns.clear();
  activeRuns.clear();
  scriptBodyActiveRunByScript.clear();
  trackingSetsByRunId.clear();
  pendingHandlerCalls.clear();
  abortControllers.clear();
  persistentHandles.clear();
  persistentObjToHandleId.clear();
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
