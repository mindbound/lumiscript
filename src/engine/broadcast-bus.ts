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
}

const bus = new Map<string, Set<HandlerEntry>>();

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
  const entry: HandlerEntry = { handler, scriptId };
  bus.get(event)!.add(entry);
  return () => bus.get(event)?.delete(entry);
}

/**
 * Remove all subscriptions owned by the given script. Called automatically
 * when a script is disabled, deleted, or completes a one-shot execution.
 */
export function clearByScriptId(scriptId: string): void {
  for (const set of bus.values()) {
    for (const entry of set) {
      if (entry.scriptId === scriptId) set.delete(entry);
    }
  }
}
