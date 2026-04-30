/**
 * ============================================================================
 * LUMISCRIPT — CONSOLE-ARG FORMATTER (shared between parent + child runtimes)
 * ============================================================================
 * Single source of truth for how a console.log argument turns into a
 * human-readable string.
 *
 * Lives in its own file (zero dependencies) so the script-runner child can
 * import it without dragging in the parent's executor module graph
 * (AsyncLocalStorage, zod, the api.* implementations, …). Child bundles
 * stay small; formatter behaviour stays in lock-step across both sides.
 *
 * Used by:
 *   - `executor.ts:buildCapturedConsole` for in-process script runs
 *   - `child-entry.ts:buildChildCapturedConsole` for child-runtime runs
 *
 * Drift safety: any change here affects both runtimes simultaneously, by
 * design. Tests that pin specific formatting outputs cover both paths.
 */

/**
 * Serialize a single console.* argument to a human-readable string.
 * Handles Promises, Errors, Maps/Sets and other built-ins that
 * `JSON.stringify` would silently reduce to "{}" or "[]".
 */
export function serializeConsoleArg(a: unknown): string {
  if (a === undefined)         return 'undefined';
  if (a === null)              return 'null';
  if (typeof a === 'function') return `[Function: ${(a as { name?: string }).name ?? '(anonymous)'}]`;
  if (a instanceof Promise)    return '[Promise (pending)]';
  if (a instanceof Error)      return `${a.name}: ${a.message}`;
  if (a instanceof Map) {
    try {
      return `Map(${a.size}) { ${[...a.entries()].map(([k, v]) => `${JSON.stringify(k)} => ${serializeConsoleArg(v)}`).join(', ')} }`;
    } catch { return `[Map(${a.size})]`; }
  }
  if (a instanceof Set) {
    try {
      return `Set(${a.size}) { ${[...a].map(serializeConsoleArg).join(', ')} }`;
    } catch { return `[Set(${a.size})]`; }
  }
  if (typeof a === 'object') {
    const tag = Object.prototype.toString.call(a);
    if (tag !== '[object Object]' && tag !== '[object Array]') return tag;
    try { return JSON.stringify(a, null, 2); }
    catch { return String(a); }
  }
  return String(a);
}
