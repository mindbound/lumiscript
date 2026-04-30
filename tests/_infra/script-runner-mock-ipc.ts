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
  const key       = opts.key       ?? 'main';
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
