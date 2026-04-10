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
 *   ls:tool:invoked      { name, args, result, scriptId, callMs }
 *   ls:tool:registered   { name, scriptId }
 *   ls:tool:unregistered { name, scriptId }
 *
 * Lifecycle:
 *   Subscriptions are tagged with the subscribing script's ID.
 *   clearByScriptId() removes all subscriptions owned by that script and is
 *   called from TriggerRegistry.unregister() and from the executor after a
 *   one-shot script completes.
 */

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
 */
export function emit(event: string, payload?: unknown): void {
  const set = bus.get(event);
  if (!set) return;
  for (const entry of set) {
    try {
      entry.handler(payload);
    } catch (err) {
      console.error(`[broadcast-bus] handler for '${event}' threw:`, err);
    }
  }
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
