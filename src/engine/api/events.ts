/**
 * ============================================================================
 * LUMISCRIPT — EVENTS API (Phase 1)
 * ============================================================================
 * In-memory event bus scoped to a single script execution.
 * Phase 2 will wire these to Lumiverse platform events via spindle.on().
 */

import type { LumiScriptAPI } from '../../types/script.js';

export function buildEventsAPI(): LumiScriptAPI['events'] {
  const bus = new Map<string, Array<(d: unknown) => void>>();

  const events: LumiScriptAPI['events'] = {
    on<T>(event: string, handler: (d: T) => void | Promise<void>) {
      if (!bus.has(event)) bus.set(event, []);
      const fn = (d: unknown) => { void handler(d as T); };
      bus.get(event)!.push(fn);
      return {
        event,
        unsubscribe: () => {
          const ls = bus.get(event);
          if (ls) ls.splice(ls.indexOf(fn), 1);
        },
      };
    },

    off(sub) { sub.unsubscribe(); },

    once<T>(event: string, handler: (d: T) => void | Promise<void>) {
      let sub: ReturnType<typeof events.on>;
      sub = events.on<T>(event, (data) => { sub.unsubscribe(); return handler(data); });
      return sub;
    },

    trigger(event, data) { for (const fn of bus.get(event) ?? []) fn(data); },
    list:  () => [...bus.keys()],
    count: (event) => bus.get(event)?.length ?? 0,
  };

  return events;
}
