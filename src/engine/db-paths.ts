/**
 * ============================================================================
 * LUMISCRIPT — DB PATHS
 * ============================================================================
 * Pure scope → filesystem-path resolver for `api.db.*` collections.
 *
 * The three scopes map to distinct path templates under the user's
 * `spindle.userStorage` root:
 *
 *   script    → db/scripts/{scriptId}/{name}.json
 *   character → db/characters/{characterId}/{scriptId}/{name}.json
 *   chat      → db/chats/{chatId}/{scriptId}/{name}.json
 *
 * `scriptId` is baked into every scope to enforce ownership: a script
 * literally cannot name a path that resolves to another script's
 * collections. `list()` / `drop()` are ownership-safe by construction.
 *
 * This module is pure — no side effects, no spindle references — so it is
 * unit-testable in isolation.
 */

import type { DbScope } from '../types/script.js';

// ─── Errors ──────────────────────────────────────────────────────────────────

/**
 * Thrown when a scope requires context the script doesn't have (e.g.
 * `scope: 'chat'` with no active chat). Explicit error rather than silent
 * no-op — `variables.local.set` has a documented silent-no-op footgun
 * that we deliberately don't repeat here.
 */
export class DbScopeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DbScopeError';
  }
}

/**
 * Thrown when a collection name fails validation. Separate class from
 * `DbScopeError` so scripts can `catch` them independently if they want
 * to distinguish "bad input" from "bad context".
 */
export class DbNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DbNameError';
  }
}

// ─── Name validation ─────────────────────────────────────────────────────────

/**
 * Allowed: alphanumerics plus `_`, `-`, `.`. First character must be
 * alphanumeric (rejects `.foo` dotfile-style names). Length 1–64.
 *
 * Rejects `..`, `/`, `\`, empty string, leading dot, and anything else
 * that could break filesystem path layers.
 */
const NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_\-.]{0,63}$/;

export function assertValidName(name: unknown): asserts name is string {
  if (typeof name !== 'string') {
    throw new DbNameError(`api.db: collection name must be a string (got ${typeof name})`);
  }
  if (name.length === 0) {
    throw new DbNameError('api.db: collection name must not be empty');
  }
  if (name.length > 64) {
    throw new DbNameError(`api.db: collection name "${name.slice(0, 20)}..." exceeds 64-char limit`);
  }
  if (name.includes('..') || name.includes('/') || name.includes('\\')) {
    throw new DbNameError(`api.db: collection name "${name}" contains forbidden path characters`);
  }
  if (!NAME_PATTERN.test(name)) {
    throw new DbNameError(
      `api.db: collection name "${name}" must match ${NAME_PATTERN.source} ` +
      `(alphanumerics plus _ - . , first char alphanumeric, 1-64 chars)`,
    );
  }
}

// ─── Scope context ───────────────────────────────────────────────────────────

/**
 * The identifiers needed to resolve a scoped path. `scriptId` is always
 * present; `chatId` / `characterId` depend on the caller's active context.
 * Missing context throws `DbScopeError` at resolution time for scopes that
 * require it.
 */
export interface DbScopeContext {
  scriptId: string;
  chatId: string | null;
  characterId: string | null;
}

// ─── Path resolution ─────────────────────────────────────────────────────────

/**
 * Resolve a collection's on-disk path. Throws `DbScopeError` if the
 * requested scope requires context the caller doesn't have.
 *
 * The returned path is relative to the spindle userStorage root; callers
 * pass it directly to `spindle.userStorage.getJson/setJson`.
 */
export function resolvePath(
  scope: DbScope,
  ctx: DbScopeContext,
  name: string,
): string {
  assertValidName(name);
  switch (scope) {
    case 'script':
      return `db/scripts/${ctx.scriptId}/${name}.json`;
    case 'character':
      if (!ctx.characterId) {
        throw new DbScopeError('api.db: scope="character" requires an active character');
      }
      return `db/characters/${ctx.characterId}/${ctx.scriptId}/${name}.json`;
    case 'chat':
      if (!ctx.chatId) {
        throw new DbScopeError('api.db: scope="chat" requires an active chat');
      }
      return `db/chats/${ctx.chatId}/${ctx.scriptId}/${name}.json`;
    default: {
      // Exhaustive check — if DbScope gains a new variant, this line flags it.
      const _exhaustive: never = scope;
      throw new DbScopeError(`api.db: unknown scope "${String(_exhaustive)}"`);
    }
  }
}

/**
 * Resolve the directory prefix that `list()` should scan for a given
 * scope. Throws on missing context for `character` / `chat` scopes, same
 * as `resolvePath`.
 */
export function resolveListPrefix(scope: DbScope, ctx: DbScopeContext): string {
  switch (scope) {
    case 'script':
      return `db/scripts/${ctx.scriptId}/`;
    case 'character':
      if (!ctx.characterId) {
        throw new DbScopeError('api.db: scope="character" requires an active character');
      }
      return `db/characters/${ctx.characterId}/${ctx.scriptId}/`;
    case 'chat':
      if (!ctx.chatId) {
        throw new DbScopeError('api.db: scope="chat" requires an active chat');
      }
      return `db/chats/${ctx.chatId}/${ctx.scriptId}/`;
    default: {
      const _exhaustive: never = scope;
      throw new DbScopeError(`api.db: unknown scope "${String(_exhaustive)}"`);
    }
  }
}

/**
 * Strip the scope prefix and `.json` suffix from a userStorage `list()`
 * result to produce the bare collection name. Ignores paths that don't
 * match the expected shape (e.g. nested directories, non-JSON files).
 */
export function extractCollectionNames(prefix: string, paths: string[]): string[] {
  const out: string[] = [];
  for (const path of paths) {
    // The `list()` primitive may return full paths OR paths relative to
    // the prefix — handle both defensively.
    let stripped = path.startsWith(prefix) ? path.slice(prefix.length) : path;
    // Leading slashes can appear if the primitive joined inconsistently.
    while (stripped.startsWith('/') || stripped.startsWith('\\')) {
      stripped = stripped.slice(1);
    }
    if (!stripped.endsWith('.json')) continue;
    // Reject nested paths — a valid collection lives directly under the prefix.
    if (stripped.includes('/') || stripped.includes('\\')) continue;
    const name = stripped.slice(0, -'.json'.length);
    if (name.length > 0) out.push(name);
  }
  return out;
}
