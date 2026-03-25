/**
 * ============================================================================
 * LUMISCRIPT — API SHARED HELPERS
 * ============================================================================
 * Shared dependency type and utility functions used across all API modules.
 */

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

export function assertPerm(permission: string, hasPerm: (p: string) => boolean): void {
  if (!hasPerm(permission)) {
    throw new Error(`PERMISSION_DENIED:${permission} — grant this permission to use this API`);
  }
}

export function assertDangerous(script: Script): void {
  if (!script.allowDangerous) {
    throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use this API`);
  }
}

export function requireChatId(ctx: { chatId: string | null }): string {
  if (!ctx.chatId) throw new Error('api.chat: no active chat — open a chat first');
  return ctx.chatId;
}
