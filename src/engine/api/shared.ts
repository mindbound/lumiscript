/**
 * ============================================================================
 * LUMISCRIPT — API SHARED HELPERS
 * ============================================================================
 * Shared dependency type and utility functions used across all API modules.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { Script } from '../../types/script.js';

// ─── Shared dependency object ─────────────────────────────────────────────────

/**
 * Dependencies passed to every API builder function.
 * Constructed once per script execution in executor.ts.
 */
export interface APIBuildDeps {
  /** The script being executed (for allowDangerous, name, etc.) */
  script: Script;
  /** Pre-built permission check against the extension's granted permissions. */
  hasPerm: (p: string) => boolean;
  /** Active user ID — required for operator-scoped spindle calls. */
  userId: string | null | undefined;
  /** Active character and chat from the current Lumiverse context. */
  activeContext: {
    chatId: string | null;
    characterId: string | null;
  };
  /**
   * Called immediately after a tool is registered or unregistered so the
   * Status tab reflects the change without waiting for execution to complete.
   */
  onToolsChanged?: () => void;
  /**
   * Per-execution tool-registration tracker. See ExecutorOptions for details.
   * When present, `buildToolsAPI` adds every tool name to this set on register.
   */
  toolsRegisteredThisRun?: Set<string>;
  /**
   * Parallel to `onToolsChanged` for macros. No caller wires this in v1 (no
   * Status-tab "Active Macros" list yet) — the seam is here so the UI can
   * light up later without changes to the API builder.
   */
  onMacrosChanged?: () => void;
  /**
   * Per-execution macro-registration tracker. When present, `buildMacrosAPI`
   * adds every macro name to this set on register. Consumed by
   * `diffAndCleanStaleMacros` at post-execution to auto-unregister macros
   * the updated script body no longer creates. Mirrors `toolsRegisteredThisRun`.
   */
  macrosRegisteredThisRun?: Set<string>;
}

// ─── Shared utility functions ─────────────────────────────────────────────────

/**
 * Mark a Promise as "handled" to prevent Bun from crashing the worker when a
 * user script calls an async API method without await. The no-op .catch()
 * satisfies Bun's unhandled-rejection detector; callers who DO await still
 * receive the rejection normally because we return the original Promise p.
 */
export function shielded<T>(p: Promise<T>): Promise<T> {
  p.catch(() => {});
  return p;
}

/**
 * Assert that the extension has been granted the named Spindle permission.
 *
 * When the check fails we log a warning to the server console BEFORE throwing.
 * The warning survives any downstream try/catch that might swallow the throw
 * (e.g. a best-effort debug helper), so there's always an audit trail for
 * permission-denied events. Otherwise the denial is completely invisible —
 * Spindle's `permissions.onDenied` handler never fires because we short-circuit
 * before touching Spindle.
 *
 * @param scriptName Optional — when supplied, the log line identifies the
 *   calling script. Every API builder has `deps.script.name` available; pass
 *   it through whenever you can.
 */
export function assertPerm(
  permission: string,
  hasPerm: (p: string) => boolean,
  scriptName?: string,
): void {
  if (!hasPerm(permission)) {
    const who = scriptName ? `script "${scriptName}"` : 'an unidentified script';
    spindle.log.warn(
      `[LumiScript] Permission "${permission}" not granted (required by ${who})`,
    );
    throw new Error(`PERMISSION_DENIED:${permission} — grant this permission to use this API`);
  }
}

/**
 * Assert that the calling script has `allowDangerous` enabled.
 *
 * Like `assertPerm`, logs a warning BEFORE throwing so the denial is visible
 * in the server log even if the script wraps the gated call in a try/catch
 * that swallows the error. `allowDangerous` is a LumiScript-internal flag
 * (not a Spindle permission), so without this log there's no audit trail
 * when a script tries to use a dangerous API without the flag.
 */
export function assertDangerous(script: Script): void {
  if (!script.allowDangerous) {
    spindle.log.warn(
      `[LumiScript] allowDangerous required but disabled on script "${script.name}"`,
    );
    throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use this API`);
  }
}

export function requireChatId(ctx: { chatId: string | null }): string {
  if (!ctx.chatId) throw new Error('api.chat: no active chat — open a chat first');
  return ctx.chatId;
}
