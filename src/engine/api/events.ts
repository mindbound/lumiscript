/**
 * ============================================================================
 * LUMISCRIPT — EVENTS API
 * ============================================================================
 * Implements api.events — persistent event tracking via the Spindle
 * event_tracking API. Provides track, query, replay, and getLatestState.
 *
 * Requires the `event_tracking` Spindle permission.
 * All methods delegate directly to `spindle.events.*`.
 */

import type { LumiScriptAPI, EventTrackOptions, EventQueryFilter, EventRecord } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

export function buildEventsAPI(deps: APIBuildDeps): LumiScriptAPI['events'] {
  const { hasPerm, activeContext } = deps;
  const PERM = 'event_tracking';

  const guard = () => {
    if (!hasPerm(PERM)) {
      throw new Error('api.events requires the event_tracking permission');
    }
  };

  return {
    async track(
      eventName: string,
      payload?: Record<string, unknown>,
      options?: EventTrackOptions,
    ): Promise<void> {
      guard();
      await spindle.events.track(eventName, payload, {
        level: options?.level,
        chatId: options?.chatId ?? activeContext.chatId ?? undefined,
        retentionDays: options?.retentionDays,
      });
    },

    async query(filter?: EventQueryFilter): Promise<EventRecord[]> {
      guard();
      const results = await spindle.events.query(filter);
      return results as EventRecord[];
    },

    async replay(filter?: EventQueryFilter): Promise<EventRecord[]> {
      guard();
      const results = await spindle.events.replay(filter);
      return results as EventRecord[];
    },

    async getLatestState(keys: string[]): Promise<Record<string, unknown>> {
      guard();
      return spindle.events.getLatestState(keys);
    },
  };
}
