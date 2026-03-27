/**
 * ============================================================================
 * LUMISCRIPT — BROADCAST API
 * ============================================================================
 * Implements api.broadcast — the LumiScript interface for real-time
 * script-to-script communication via the shared broadcast-bus singleton.
 *
 * No Lumiverse platform changes required; the bus lives entirely within
 * the LumiScript worker bundle.
 *
 * Subscription lifecycle:
 *   Subscriptions are tagged with the calling script's ID so they can be
 *   cleaned up automatically when the script is disabled, deleted, or
 *   finishes a one-shot execution (clearByScriptId is called by the
 *   executor and trigger-registry).
 */

import type { LumiScriptAPI } from '../../types/script.js';
import type { APIBuildDeps   } from './shared.js';
import { emit, on } from '../broadcast-bus.js';

export function buildBroadcastAPI(deps: APIBuildDeps): LumiScriptAPI['broadcast'] {
  const { script } = deps;

  return {
    emit(event: string, payload?: unknown): void {
      emit(event, payload);
    },

    on(event: string, handler: (payload: unknown) => void): () => void {
      return on(event, handler, script.id);
    },
  };
}
