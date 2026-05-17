/**
 * ============================================================================
 * LUMISCRIPT — INTERNAL BROADCAST BUS
 * ============================================================================
 * Lightweight pub/sub singleton that enables real-time script-to-script
 * communication within the LumiScript worker without requiring any Lumiverse
 * platform changes.
 *
 * All LumiScript scripts share this module because they run in the same worker
 * bundle. A script can emit a named event and any other script that called
 * api.broadcast.on() for that event will receive it synchronously.
 *
 * Event name conventions:
 *   ls:*       Reserved for LumiScript internal events (see below).
 *   *          User-defined event names — anything that doesn't start with ls:.
 *
 * Built-in ls: events emitted automatically by the engine:
 *   ls:tool:invoked              { name, args, result, scriptId, callMs }
 *   ls:tool:registered           { name, scriptId }
 *   ls:tool:unregistered         { name, scriptId }
 *   ls:collection:created        { name, scope, scriptId, path }
 *   ls:collection:dropped        { name, scope, scriptId, path, deletedCount }
 *   ls:collection:inserted       { name, scope, scriptId, id, record }
 *   ls:collection:updated        { name, scope, scriptId, count, filterKind }
 *   ls:collection:deleted        { name, scope, scriptId, count, filterKind }
 *   ls:collection:size-warning   { name, scope, scriptId, bytes }
 *
 * Lifecycle:
 *   Subscriptions are tagged with the subscribing script's ID.
 *   clearByScriptId() removes all subscriptions owned by that script and is
 *   called from TriggerRegistry.unregister() and from the executor after a
 *   one-shot script completes.
 *
 * Status indicator (v0.26.4+):
 *   Handlers that perform async work can opt into the sidebar status indicator
 *   (the green/amber/red dot in Manage and Status tabs) by RETURNING the
 *   thenable instead of fire-and-forget'ing it:
 *
 *     // Tracked — dot blinks amber while extraction runs
 *     api.broadcast.on('tracker:request-rerun', (payload) =>
 *       (async () => { … await runRerun(...) … })()
 *     );
 *
 *     // NOT tracked — handler returns immediately, dot stays whatever
 *     api.broadcast.on('tracker:request-rerun', (payload) => {
 *       void (async () => { … })();
 *     });
 *
 *   `emit()` detects thenable returns and wraps them with markRunning /
 *   markSuccess / markError around the awaited work. Sync-returning handlers
 *   produce no status update (current behaviour preserved).
 */

import { executionStatusStore } from './execution-status.js';

// Handler signature stays `=> void` (loose: TS accepts any return type and
// ignores it). Runtime thenable detection in `emit()` opts a handler into
// async tracking by returning a Promise/thenable, which TS still allows
// under `=> void`. Tightening the signature to `=> void | Promise<void>`
// would propagate as a breaking change to every existing handler whose
// implicit return value happens to be non-void (e.g. `p => arr.push(p)`).
type Handler = (payload: unknown) => void;

interface HandlerEntry {
  handler:  Handler;
  scriptId: string;
  /** Event name stored on the entry so clearByScriptId can delete in O(1). */
  event:    string;
}

const bus = new Map<string, Set<HandlerEntry>>();

/**
 * Reverse index: scriptId → Set<HandlerEntry> (entries across all events).
 *
 * Maintained in sync with `bus` so that clearByScriptId(scriptId) can skip
 * the full O(events × handlers) scan and instead iterate only the entries
 * that belong to the given script.
 */
const handlerIndex = new Map<string, Set<HandlerEntry>>();

/**
 * Emit a named event. All handlers subscribed to `event` are called
 * synchronously in registration order. Errors thrown by individual handlers
 * are caught and logged so one bad handler cannot break the others.
 *
 * Async-tracking opt-in (v0.26.4+): handlers that return a thenable are
 * tracked through `executionStatusStore` for the duration of the awaited
 * work. The sidebar status indicator blinks amber for the owning script
 * until the thenable settles, then flips to green (resolve) or red
 * (reject). Sync-returning handlers produce no status updates.
 *
 * Note: emit() itself remains synchronous from the caller's perspective.
 * Thenable handlers are awaited in detached tasks; the for-loop returns
 * as soon as every handler has been kicked off.
 */
export function emit(event: string, payload?: unknown): void {
  const set = bus.get(event);
  if (!set) return;
  for (const entry of set) {
    let result: unknown;
    try {
      result = (entry.handler as (payload: unknown) => unknown)(payload);
    } catch (err) {
      // Sync throw — log and skip status tracking (no Promise to await).
      console.error(`[broadcast-bus] handler for '${event}' threw:`, err);
      continue;
    }
    if (isThenable(result)) {
      trackAsyncHandler(event, entry.scriptId, result);
    }
  }
}

/** True if `v` looks like a thenable (Promise or PromiseLike). */
function isThenable(v: unknown): v is Promise<void> {
  return (
    v !== null &&
    typeof v === 'object' &&
    typeof (v as { then?: unknown }).then === 'function'
  );
}

/**
 * Wrap a thenable handler return with execution-status updates. Detached
 * — the caller (`emit`) doesn't await this; we run it as a side-task that
 * fires markRunning immediately, then markSuccess / markError on settlement.
 *
 * Cross-talk with trigger-registry: trigger-registry maintains its own
 * `runningCounts` to handle concurrent same-script invocations correctly,
 * and only flips to markSuccess when the count hits 0. This wrapper does
 * NOT participate in that count — it just sets/unsets status. If a script
 * has both a trigger run AND a broadcast handler in flight at the same
 * time, the dot may briefly flash green when the broadcast finishes
 * before the trigger run does. Acceptable for v1; a future refactor
 * could share runningCounts across both surfaces if needed.
 */
function trackAsyncHandler(event: string, scriptId: string, promise: Promise<void>): void {
  const startedAt = Date.now();
  executionStatusStore.markRunning(scriptId);
  void promise.then(
    () => {
      executionStatusStore.markSuccess(scriptId, Date.now() - startedAt);
    },
    (err: unknown) => {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[broadcast-bus] handler for '${event}' rejected:`, err);
      executionStatusStore.markError(scriptId, Date.now() - startedAt, message);
    },
  );
}

/**
 * Subscribe to a named event. Returns an unsubscribe function.
 * The `scriptId` is used to group subscriptions so they can be removed
 * en-masse when the owning script is unregistered.
 */
export function on(event: string, handler: Handler, scriptId: string): () => void {
  if (!bus.has(event)) bus.set(event, new Set());
  const entry: HandlerEntry = { handler, scriptId, event };
  bus.get(event)!.add(entry);

  // Populate reverse index so clearByScriptId can find this entry in O(1).
  if (!handlerIndex.has(scriptId)) handlerIndex.set(scriptId, new Set());
  handlerIndex.get(scriptId)!.add(entry);

  return () => {
    bus.get(event)?.delete(entry);
    handlerIndex.get(scriptId)?.delete(entry);
  };
}

/**
 * Remove all subscriptions owned by the given script. Called automatically
 * when a script is disabled, deleted, or completes a one-shot execution.
 *
 * Uses the reverse index for O(entries owned by scriptId) complexity instead
 * of the previous O(events × handlers) full-bus scan.
 */
export function clearByScriptId(scriptId: string): void {
  const entries = handlerIndex.get(scriptId);
  if (!entries) return; // O(1) early exit — script has no subscriptions
  for (const entry of entries) {
    bus.get(entry.event)?.delete(entry); // O(1) per entry via stored event name
  }
  handlerIndex.delete(scriptId);
}

/** Remove all subscriptions across all events and scripts. Used by test harness. */
export function clearAll(): void {
  bus.clear();
  handlerIndex.clear();
}

/**
 * Count of all active subscriptions across every event and every script.
 * O(events) — sums each per-event Set's size; cheap even with hundreds of
 * subscriptions. Used by the v0.28.0+ diagnostics panel to surface live
 * broadcast-bus state.
 */
export function countSubscriptions(): number {
  let n = 0;
  for (const set of bus.values()) n += set.size;
  return n;
}

/**
 * v1.0.0-rc.4+ — count user-event broadcast subscriptions owned by
 * `scriptId`, EXCLUDING any subscription whose event name starts with
 * `ls:` (the LumiScript-internal reserved prefix).
 *
 * Why the prefix filter: `ls:startup`, `ls:tool:*`, `ls:collection:*`,
 * etc. are engine-emitted lifecycle events. They fire only as a side-
 * effect of the script's own activity (a body run, a tool registration,
 * a db mutation). A worker hosting an "ls:*-only" subscriber never needs
 * to stay warm waiting for one to arrive externally — when the producing
 * activity happens, the worker is by definition already alive (or being
 * spawned). Counting these would over-pin every script that subscribes
 * to `ls:startup` for re-init purposes.
 *
 * Cross-worker user-event broadcasts (`tracker:rerun-state-changed`,
 * `my-app:custom-event`) ARE load-bearing — a forwarded broadcast from
 * worker A into worker B's dead bus is silently dropped. Pinning closes
 * that gap.
 *
 * O(subs-for-this-script) via the reverse handlerIndex; cheap.
 */
export function countUserEventSubscriptionsByScriptId(scriptId: string): number {
  const entries = handlerIndex.get(scriptId);
  if (!entries) return 0;
  let count = 0;
  for (const entry of entries) {
    if (!entry.event.startsWith('ls:')) count++;
  }
  return count;
}
