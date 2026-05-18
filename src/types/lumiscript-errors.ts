/**
 * Cross-cutting LumiScript runtime error classes.
 *
 * Defined separately from individual modules so the same class identity is
 * shared across parent-process / child-subprocess / test contexts. The `name`
 * property is the discrimination key for runtime routing (see e.g. the
 * unhandled-rejection guard in `child-entry.ts` which routes by `err.name`).
 */

/**
 * Thrown when a user script attempts an action blocked by the sandbox
 * hardening (CRIT-01 mitigation — v1.0.0-rc.7+). Two sources:
 *
 *   1. **Runtime lockdown** — `child-entry.ts`'s `installSandboxLockdown`
 *      replaces non-whitelisted `globalThis.*` properties with throwing
 *      accessors. A user script reaching `globalThis.Bun.file(...)` /
 *      `globalThis.process.env` / `globalThis.fetch(...)` / `new Function(...)`
 *      / `(0, eval)(...)` triggers the accessor and lands here.
 *
 *   2. **Dispatch-time source check** — `host-dispatcher.ts`'s
 *      `checkUserScriptSecurity` regex-rejects literal `import(` /
 *      `require(` in user-script source before the run dispatches. Catches
 *      the one vector the runtime lockdown cannot intercept (dynamic
 *      `import()` is a JS syntax operator, not a property lookup).
 *
 * Caught by the unhandled-rejection guard (`child-entry.ts:handleUnhandledRejection`)
 * which routes to the originating script's editor console via a
 * `console-entry` IPC with `entry.type: 'security'` for distinct rendering.
 *
 * NOTE: this is INTERIM hardening. The proper fix is Option C — running
 * user scripts in a true WASM-based VM (`quickjs-emscripten` with the
 * `RELEASE_ASYNC` variant) — targeted for v1.1+. The residual gap with
 * Option A is described in `notes/security-hardening-rc7.md` (the
 * `({}).constructor.constructor('return import(...)')()` path).
 */
export class LumiScriptSecurityError extends Error {
  override readonly name = 'LumiScriptSecurityError';

  constructor(message: string) {
    super(message);
    // Bun/Node both expose Error.captureStackTrace; guard for portability.
    if (typeof (Error as { captureStackTrace?: unknown }).captureStackTrace === 'function') {
      (Error as { captureStackTrace: (target: object, ctor: Function) => void })
        .captureStackTrace(this, LumiScriptSecurityError);
    }
  }
}
