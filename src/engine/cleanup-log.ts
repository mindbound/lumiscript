/**
 * ============================================================================
 * LUMISCRIPT — CLEANUP LOG
 * ============================================================================
 * Unified audit-log helper for the lifecycle-cleanup paths that unregister
 * script-owned resources (tools and macros) with Spindle.
 *
 * Callers used to loop `spindle.unregisterTool(name)` / `spindle.unregisterMacro(name)`
 * silently. This helper adds a single `spindle.log.info` line per cleanup
 * operation naming the script and the resources that were removed, so
 * "where did my macro go?" debugging has an obvious answer in the server
 * console.
 *
 * Used from:
 *   - `src/backend.ts` disable / delete / manual-run paths
 *   - `src/engine/trigger-registry.ts` event-handler + fireStartup paths
 *
 * Silent when `names` is empty — cleanup passes that unregistered nothing
 * produce no log noise.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

export type CleanupKind = 'tool' | 'macro';

/**
 * Reason tags for cleanup operations. Keeping the set small + string-typed
 * makes greps across logs trivial ("disabled", "deleted", "stale after re-run").
 */
export type CleanupReason = 'disabled' | 'deleted' | 'stale after re-run';

/**
 * Log a cleanup operation. No-op when `names` is empty.
 */
export function logCleanup(
  kind: CleanupKind,
  reason: CleanupReason,
  scriptName: string,
  names: readonly string[],
): void {
  if (names.length === 0) return;
  const noun = names.length === 1 ? kind : `${kind}s`;
  spindle.log.info(
    `[LumiScript] Unregistered ${names.length} ${noun} from "${scriptName}" (${reason}): ${names.join(', ')}`,
  );
}
