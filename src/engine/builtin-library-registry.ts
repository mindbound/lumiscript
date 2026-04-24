/**
 * ============================================================================
 * LUMISCRIPT — BUILT-IN LIBRARY REGISTRY
 * ============================================================================
 * Resolves `ls:*` library names to native TypeScript factory functions.
 *
 * Built-in libraries differ from user libraries in two key ways:
 * 1. They are TypeScript modules, not sandboxed user code — no AsyncFunction.
 * 2. They receive the **calling** script's API, so DOM/chat/etc. operations
 *    are attributed to (and cleaned up with) the calling script.
 *
 * Usage in the executor:
 *   const factory = resolveBuiltin('ls:components');
 *   if (factory) {
 *     const exports = factory(callerApi);
 *     requireCache.set(name, exports);
 *   }
 */

import type { LumiScriptAPI } from '../types/script.js';

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Factory function for a built-in library.
 * Receives the calling script's fully-assembled API object so that all
 * operations (DOM injection, chat access, etc.) are attributed to the caller.
 */
export type BuiltinLibraryFactory = (api: LumiScriptAPI) => Record<string, unknown>;

// ─── Registry ────────────────────────────────────────────────────────────────

const builtinLibraries = new Map<string, BuiltinLibraryFactory>();

/**
 * Resolve a built-in library by name. Returns `undefined` if no built-in
 * with that name is registered.
 */
export function resolveBuiltin(name: string): BuiltinLibraryFactory | undefined {
  return builtinLibraries.get(name);
}

/**
 * Register a built-in library factory. Called at module load time for each
 * shipped library.
 */
export function registerBuiltin(name: string, factory: BuiltinLibraryFactory): void {
  builtinLibraries.set(name, factory);
}

/** Check whether a name uses the built-in library prefix. */
export function isBuiltinName(name: string): boolean {
  return name.startsWith('ls:');
}

// ─── Registrations ───────────────────────────────────────────────────────────

import { createComponentsLibrary } from './builtins/components.js';
import { createCouncilPromptLibrary } from './builtins/council-prompt.js';
import { createIconsLibrary } from './builtins/icons.js';

registerBuiltin('ls:components',      createComponentsLibrary);
registerBuiltin('ls:council-prompt',  createCouncilPromptLibrary);
registerBuiltin('ls:icons',           createIconsLibrary);
