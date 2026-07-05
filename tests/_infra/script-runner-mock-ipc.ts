/**
 * Bidirectional in-memory IPC pair for the script-runner subsystem.
 *
 * Wires a fake `BackendProcessHandle` (the parent's view of the spawned
 * child) to a fake `SpindleBackendProcessContext` (the child's `proc`
 * controller) so tests can:
 *   - Drive parent → child IPC by calling things that invoke `handle.send`,
 *     and observe the deliveries via `childInbox()` or by registering
 *     `proc.onMessage` handlers.
 *   - Drive child → parent IPC by calling `proc.send` (or by bringing up
 *     the child's runtime in-process and letting it post results
 *     organically), and observe via `parentInbox()` or via the parent's
 *     `spindle.backendProcesses.onMessage` registrations.
 *   - Inject lifecycle events (e.g. `timed_out`, `failed`) to exercise
 *     restart logic without a real subprocess crashing.
 *   - Track `proc.ready()`, `proc.heartbeat()`, `proc.complete()`, and
 *     `proc.fail()` invocations.
 *
 * Single-pair design: each `installScriptRunnerMockIpc` call sets up ONE
 * pair (matches LumiScript's "one script-runner per activation" lifecycle).
 * Tests that need to exercise respawn drive a respawn through `fireLifecycle`
 * + reset the pair via `reset()` rather than spawning multiple processes.
 *
 * Why two layers (this file + the fixture in `script-runner-fixture.ts`):
 * this file owns the IPC mechanics and stays general-purpose; the fixture
 * builds on top with conveniences for end-to-end flows (script dispatch,
 * runOne wiring, helper assertions). Tests that only need the IPC layer
 * (e.g. `host-dispatcher-restart.test.ts`, which doesn't bring up the
 * child runtime in-process) can use this file directly.
 */

import { mock } from 'bun:test';
import type {
  BackendProcessHandle,
  SpindleBackendProcessContext,
  BackendProcessLifecycleEventDTO,
  BackendProcessSpawnOptionsDTO,
  BackendProcessInfoDTO,
} from 'lumiverse-spindle-types';
import type { MockSpindle } from './mock-spindle.js';
// v1.0 runtime-isolation refactor (Phase C1): the mock fixture defaults
// `key` to whatever DEFAULT_WORKER_KEY is, so a rename of the production
// default doesn't desync the lifecycle filter — tests would otherwise hang
// waiting for events that the filter rejects.
import { DEFAULT_WORKER_KEY } from '../../src/script-runner/host-dispatcher.js';

export interface ScriptRunnerMockIpc {
  /**
   * Parent's view of the spawned child. Returned by `spindle.backendProcesses.spawn`
   * after the install. Send via `handle.send(payload)` to deliver to the
   * connected `childContext`'s onMessage handlers.
   */
  childHandle:  BackendProcessHandle;
  /**
   * Child-side process controller. Pass to `child-entry.ts:default(proc)`
   * to bring up the child runtime in-process for end-to-end tests, OR
   * use directly in unit tests via `proc.send(msg)` to inject child→parent
   * messages without bringing up the runtime.
   */
  childContext: SpindleBackendProcessContext;
  /** Snapshot of all parent → child payloads, oldest first. */
  childInbox():  unknown[];
  /** Snapshot of all child → parent payloads, oldest first. */
  parentInbox(): unknown[];
  /**
   * Fire a lifecycle event on every parent-side `onLifecycle` handler.
   * Use to drive `failed` / `timed_out` / `completed` / `stopped` in
   * restart-logic tests.
   */
  fireLifecycle(event: BackendProcessLifecycleEventDTO): void;
  /** True iff the child has called `proc.ready()` at least once. */
  isChildReady():    boolean;
  /** Number of `proc.heartbeat()` invocations since install / last reset. */
  heartbeats():      number;
  /**
   * The result the child passed to `proc.complete(result)`, or null if
   * the child hasn't called complete().
   */
  completedResult(): { result: unknown } | null;
  /**
   * The error the child passed to `proc.fail(err)`, or null if the child
   * hasn't called fail().
   */
  failedError():     string | null;
  /**
   * Trigger every child-side `proc.onStop` handler. Simulates the parent
   * calling `handle.stop({ reason })` (graceful shutdown). The host's
   * actual stop() flow drives this internally on `shutdownScriptRunner`;
   * tests use this to exercise the child's stop-handling code paths.
   */
  triggerStop(detail?: { reason?: string }): void;
  /**
   * Reset both inboxes, all handler sets, and all counters. Does NOT
   * detach from the spindle mock — the install is one-way for the test's
   * lifetime. Use to start a fresh round of assertions within a single test.
   */
  reset(): void;
}

interface InstallOpts {
  /**
   * Process ID to assign to the spawned handle / child controller.
   * Defaults to `'mock-script-runner-1'`. Tests that respawn-and-replace
   * can supply a different id on the second install if needed.
   */
  processId?: string;
  /**
   * Logical kind. Defaults to `'lumiscript-script-runner'` to match the
   * production dispatcher's filter. Tests that exercise the kind-filter
   * can supply a different value.
   */
  kind?: string;
  /** Stable key. Defaults to `'main'` to match production. */
  key?: string;
  /** Built entry path. Defaults to `'dist/script-runner.js'`. */
  entry?: string;
}

/**
 * Install a functioning mock of `spindle.backendProcesses` onto the given
 * mock spindle and return a controller for the connected pair. After this
 * call, any code path that calls `spindle.backendProcesses.spawn(...)`
 * receives the controller's `childHandle`.
 */
export function installScriptRunnerMockIpc(
  spindle: MockSpindle,
  opts:    InstallOpts = {},
): ScriptRunnerMockIpc {
  const processId = opts.processId ?? 'mock-script-runner-1';
  const kind      = opts.kind      ?? 'lumiscript-script-runner';
  const key       = opts.key       ?? DEFAULT_WORKER_KEY;
  const entry     = opts.entry     ?? 'dist/script-runner.js';

  const childInbox:  unknown[] = [];
  const parentInbox: unknown[] = [];
  const childMessageHandlers   = new Set<(payload: unknown) => void>();
  const parentMessageHandlers  = new Set<(event: { processId: string; payload: unknown; userId: string }) => void>();
  const lifecycleHandlers      = new Set<(event: BackendProcessLifecycleEventDTO) => void>();
  const childStopHandlers      = new Set<(detail: { reason?: string }) => void>();

  let childReady       = false;
  let heartbeats       = 0;
  let completedResult: { result: unknown } | null = null;
  let failedError:     string | null              = null;
  // userId is captured at spawn time and shared between handle + context.
  let capturedUserId: string | undefined;

  // Minimal info DTO shape — only the fields the dispatcher reads in
  // production (we'd populate richer data if any test asserted on info).
  const info: BackendProcessInfoDTO = {
    processId,
    extensionId: 'lumiscript',
    kind,
    key,
    entry,
    state:      'running',
    startedAt:  new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
  } as BackendProcessInfoDTO;

  const childHandle: BackendProcessHandle = {
    processId,
    entry,
    kind,
    key,
    info,
    send(payload) {
      childInbox.push(payload);
      // Snapshot so handlers added during dispatch don't fire for this round.
      const snapshot = [...childMessageHandlers];
      for (const h of snapshot) h(payload);
    },
    stop: mock(() => Promise.resolve()),
    refresh: mock(() => Promise.resolve(info)),
  };

  const childContext: SpindleBackendProcessContext = {
    processId,
    entry,
    kind,
    key,
    payload: {},
    get userId() { return capturedUserId; },
    ready() { childReady = true; },
    heartbeat() { heartbeats++; },
    send(payload) {
      parentInbox.push(payload);
      const snapshot = [...parentMessageHandlers];
      for (const h of snapshot) {
        h({ processId, payload, userId: capturedUserId ?? '' });
      }
    },
    onMessage(handler) {
      childMessageHandlers.add(handler);
      return () => childMessageHandlers.delete(handler);
    },
    complete(result) { completedResult = { result }; },
    fail(err)        { failedError    = err; },
    onStop(handler) {
      childStopHandlers.add(handler);
      return () => childStopHandlers.delete(handler);
    },
  };

  // Replace the default backendProcesses stub with real-routing impls.
  // `MockSpindle['backendProcesses']` is typed as `MockBackendProcesses`
  // (plain-function signatures matching production's SpindleAPI surface)
  // so the assignment is structurally compatible without casts.
  spindle.backendProcesses = {
    spawn: (spawnOpts: BackendProcessSpawnOptionsDTO) => {
      capturedUserId = spawnOpts.userId;
      // Production resolves the spawn promise after the child calls
      // `proc.ready()`. For most tests the child is brought up
      // synchronously by calling child-entry's default function with
      // childContext, OR the test never brings up the child and only
      // injects messages via parent's onMessage. Either way we resolve
      // immediately — tests that need ready-await semantics can assert
      // on `isChildReady()` after their setup completes.
      return Promise.resolve(childHandle);
    },
    list: () => Promise.resolve([info]),
    get:  (id: string) => Promise.resolve(id === processId ? info : null),
    stop: () => Promise.resolve(),
    onLifecycle(handler) {
      lifecycleHandlers.add(handler);
      return () => { lifecycleHandlers.delete(handler); };
    },
    onMessage(handler) {
      parentMessageHandlers.add(handler);
      return () => { parentMessageHandlers.delete(handler); };
    },
  };

  return {
    childHandle,
    childContext,
    childInbox:  () => [...childInbox],
    parentInbox: () => [...parentInbox],
    fireLifecycle(event) {
      const snapshot = [...lifecycleHandlers];
      for (const h of snapshot) h(event);
    },
    isChildReady:    () => childReady,
    heartbeats:      () => heartbeats,
    completedResult: () => completedResult,
    failedError:     () => failedError,
    triggerStop(detail = {}) {
      const snapshot = [...childStopHandlers];
      for (const h of snapshot) h(detail);
    },
    reset() {
      childInbox.length  = 0;
      parentInbox.length = 0;
      childMessageHandlers.clear();
      parentMessageHandlers.clear();
      lifecycleHandlers.clear();
      childStopHandlers.clear();
      childReady       = false;
      heartbeats       = 0;
      completedResult  = null;
      failedError      = null;
    },
  };
}

// ─── Multi-worker mock IPC (Phase C2-polish) ────────────────────────────────
//
// Direct multi-pair install for testing cross-worker routing logic. Each
// worker key gets its own `ScriptRunnerMockIpc` pair (childInbox,
// childContext, parentInbox, lifecycle/stop wiring) — but the shared
// `spindle.backendProcesses.onLifecycle` / `onMessage` subscriptions are
// installed ONCE globally and fan out to all pairs.
//
// `spindle.backendProcesses.spawn({ kind, key, … })` routes by `(kind, key)`
// to the matching pair's `childHandle`. Spawns for unknown keys reject
// (loud failure surfaces test wiring mistakes immediately).
//
// Why direct (one-call install) rather than layered (multiple
// `installScriptRunnerMockIpc` calls): each install replaces the
// `spindle.backendProcesses` slot wholesale, so layered installs would
// just leave the last install's stub in place. The direct shape is the
// only structurally-correct option — see Phase C design discussion Q3.

export interface InstallMultiWorkerOpts {
  /**
   * Worker keys to set up pairs for. Order matters — `pairs[i]`
   * corresponds to `workerKeys[i]`.
   */
  workerKeys: string[];
  /** Shared `kind` for all pairs. Default: 'lumiscript-script-runner'. */
  kind?: string;
}

export interface MultiWorkerMockIpc {
  /** One mock pair per worker, in `opts.workerKeys` order. */
  pairs: ScriptRunnerMockIpc[];
  /** Look up a pair by workerKey. Throws if the key isn't configured. */
  pairForKey(workerKey: string): ScriptRunnerMockIpc;
  /** Reset all pairs + clear shared subscription handlers. */
  reset(): void;
  /**
   * Phase E test support — set the memory RSS (in bytes) that this worker
   * should report when the dispatcher sends a `diagnostic-stats-request`
   * IPC. The mock auto-replies with the configured value (or 0 if unset).
   * Lets eviction-sweep tests drive memory pressure deterministically
   * without bringing up the full child runtime.
   */
  setWorkerMemoryBytes(workerKey: string, bytes: number): void;
  /**
   * Phase E test support — make this worker stop answering
   * `diagnostic-stats-request` IPCs (simulating a worker too busy — e.g. mid
   * GC-pause — to reply). The dispatcher's memory query then times out and
   * resolves null, exercising the carry-forward path. Pair with
   * `__setEvictionMemoryQueryTimeoutForTests` so the timeout fires quickly.
   */
  setWorkerMemoryUnresponsive(workerKey: string, unresponsive: boolean): void;
}

export function installMultiWorkerMockIpc(
  spindle: MockSpindle,
  opts:    InstallMultiWorkerOpts,
): MultiWorkerMockIpc {
  const kind = opts.kind ?? 'lumiscript-script-runner';

  // Shared subscription handlers across all workers — the dispatcher
  // installs ONE `onMessage` + ONE `onLifecycle` handler and filters
  // internally by `processId` / `(kind, key)`, so the mock has to fan
  // every parent-bound event out via a shared Set.
  const lifecycleHandlers     = new Set<(event: BackendProcessLifecycleEventDTO) => void>();
  const parentMessageHandlers = new Set<(event: { processId: string; payload: unknown; userId: string }) => void>();

  interface PairInternal {
    pair:       ScriptRunnerMockIpc;
    info:       BackendProcessInfoDTO;
    setUserId:  (uid: string | undefined) => void;
  }
  const pairs: ScriptRunnerMockIpc[] = [];
  const byKey = new Map<string, PairInternal>();

  // Phase E test support — per-worker memory RSS. Defaults to 0; tests
  // configure via `setWorkerMemoryBytes`. Auto-replies to
  // `diagnostic-stats-request` sent to a worker.
  const memoryBytesByWorker = new Map<string, number>();
  // Workers flagged here suppress the diagnostic-stats auto-reply so the
  // dispatcher's memory query times out (carry-forward path).
  const unresponsiveWorkers = new Set<string>();

  for (let i = 0; i < opts.workerKeys.length; i++) {
    const workerKey = opts.workerKeys[i]!;
    const processId = `mock-${workerKey}-${i}`;
    const entry     = 'dist/script-runner.js';

    const childInbox:           unknown[]                                              = [];
    const parentInbox:          unknown[]                                              = [];
    const childMessageHandlers: Set<(payload: unknown) => void>                        = new Set();
    const childStopHandlers:    Set<(detail: { reason?: string }) => void>             = new Set();

    let childReady:      boolean                            = false;
    let heartbeats:      number                             = 0;
    let completedResult: { result: unknown } | null         = null;
    let failedError:     string | null                      = null;
    let capturedUserId:  string | undefined;

    const info: BackendProcessInfoDTO = {
      processId,
      extensionId: 'lumiscript',
      kind,
      key:         workerKey,
      entry,
      state:       'running',
      startedAt:   new Date().toISOString(),
      lastSeenAt:  new Date().toISOString(),
    } as BackendProcessInfoDTO;

    const childHandle: BackendProcessHandle = {
      processId,
      entry,
      kind,
      key: workerKey,
      info,
      send(payload) {
        childInbox.push(payload);
        // Phase E test support — auto-reply to `diagnostic-stats-request`
        // so eviction-sweep tests don't time out waiting for a stats
        // response that a real child would produce. Synchronous reply via
        // the shared parentMessageHandlers Set (same path as a real
        // child→parent IPC).
        if (
          payload !== null &&
          typeof payload === 'object' &&
          (payload as { type?: unknown }).type === 'diagnostic-stats-request' &&
          !unresponsiveWorkers.has(workerKey)
        ) {
          const requestId = (payload as { requestId?: string }).requestId;
          const rss       = memoryBytesByWorker.get(workerKey) ?? 0;
          const response  = {
            type:        'diagnostic-stats-response' as const,
            requestId,
            rss,
            heapTotal:   0,
            heapUsed:    0,
            external:    0,
            cpuUserUs:   0,
            cpuSystemUs: 0,
            uptimeSec:   1,
          };
          // Defer one microtask so the dispatcher's `pendingDiagnosticStats.set`
          // call (which happens after handle.send returns) is registered
          // before our reply hits parentMessageHandlers.
          queueMicrotask(() => {
            const snapshot = [...parentMessageHandlers];
            for (const h of snapshot) {
              h({ processId, payload: response, userId: capturedUserId ?? '' });
            }
          });
        }
        const snapshot = [...childMessageHandlers];
        for (const h of snapshot) h(payload);
      },
      stop:    mock(() => Promise.resolve()),
      refresh: mock(() => Promise.resolve(info)),
    };

    const childContext: SpindleBackendProcessContext = {
      processId,
      entry,
      kind,
      key: workerKey,
      payload: {},
      get userId() { return capturedUserId; },
      ready()      { childReady = true; },
      heartbeat()  { heartbeats++; },
      send(payload) {
        parentInbox.push(payload);
        const snapshot = [...parentMessageHandlers];
        for (const h of snapshot) {
          h({ processId, payload, userId: capturedUserId ?? '' });
        }
      },
      onMessage(handler) {
        childMessageHandlers.add(handler);
        return () => childMessageHandlers.delete(handler);
      },
      complete(result) { completedResult = { result }; },
      fail(err)        { failedError    = err; },
      onStop(handler) {
        childStopHandlers.add(handler);
        return () => childStopHandlers.delete(handler);
      },
    };

    const pair: ScriptRunnerMockIpc = {
      childHandle,
      childContext,
      childInbox:  () => [...childInbox],
      parentInbox: () => [...parentInbox],
      fireLifecycle(event) {
        const snapshot = [...lifecycleHandlers];
        for (const h of snapshot) h(event);
      },
      isChildReady:    () => childReady,
      heartbeats:      () => heartbeats,
      completedResult: () => completedResult,
      failedError:     () => failedError,
      triggerStop(detail = {}) {
        const snapshot = [...childStopHandlers];
        for (const h of snapshot) h(detail);
      },
      reset() {
        childInbox.length  = 0;
        parentInbox.length = 0;
        childMessageHandlers.clear();
        childStopHandlers.clear();
        childReady       = false;
        heartbeats       = 0;
        completedResult  = null;
        failedError      = null;
      },
    };

    pairs.push(pair);
    byKey.set(workerKey, {
      pair,
      info,
      setUserId: (uid) => { capturedUserId = uid; },
    });
  }

  spindle.backendProcesses = {
    spawn: (spawnOpts: BackendProcessSpawnOptionsDTO) => {
      if (spawnOpts.kind !== kind) {
        return Promise.reject(new Error(
          `installMultiWorkerMockIpc: spawn for unexpected kind '${spawnOpts.kind}' (configured: '${kind}')`,
        ));
      }
      const internal = spawnOpts.key !== undefined ? byKey.get(spawnOpts.key) : undefined;
      if (!internal) {
        return Promise.reject(new Error(
          `installMultiWorkerMockIpc: no mock pair for key '${spawnOpts.key ?? '(undefined)'}'`,
        ));
      }
      internal.setUserId(spawnOpts.userId);
      return Promise.resolve(internal.pair.childHandle);
    },
    list: () => Promise.resolve(Array.from(byKey.values()).map((p) => p.info)),
    get: (id: string) => {
      for (const p of byKey.values()) {
        if (p.pair.childHandle.processId === id) return Promise.resolve(p.info);
      }
      return Promise.resolve(null);
    },
    stop: () => Promise.resolve(),
    onLifecycle(handler) {
      lifecycleHandlers.add(handler);
      return () => { lifecycleHandlers.delete(handler); };
    },
    onMessage(handler) {
      parentMessageHandlers.add(handler);
      return () => { parentMessageHandlers.delete(handler); };
    },
  };

  return {
    pairs,
    pairForKey(workerKey: string): ScriptRunnerMockIpc {
      const internal = byKey.get(workerKey);
      if (!internal) {
        throw new Error(`MultiWorkerMockIpc: no pair configured for workerKey '${workerKey}'`);
      }
      return internal.pair;
    },
    reset() {
      for (const internal of byKey.values()) internal.pair.reset();
      lifecycleHandlers.clear();
      parentMessageHandlers.clear();
      memoryBytesByWorker.clear();
      unresponsiveWorkers.clear();
    },
    setWorkerMemoryBytes(workerKey: string, bytes: number): void {
      if (!byKey.has(workerKey)) {
        throw new Error(`MultiWorkerMockIpc: cannot set memory for unknown workerKey '${workerKey}'`);
      }
      memoryBytesByWorker.set(workerKey, bytes);
    },
    setWorkerMemoryUnresponsive(workerKey: string, unresponsive: boolean): void {
      if (!byKey.has(workerKey)) {
        throw new Error(`MultiWorkerMockIpc: cannot set responsiveness for unknown workerKey '${workerKey}'`);
      }
      if (unresponsive) unresponsiveWorkers.add(workerKey);
      else unresponsiveWorkers.delete(workerKey);
    },
  };
}
