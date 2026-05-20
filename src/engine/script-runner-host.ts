/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT-RUNNER HOST DISPATCHER (api routing core)
 * ============================================================================
 * Pure-function helpers for routing `ApiProxyRequest` messages from the
 * child to the real `LumiScriptAPI` implementation. Sibling of
 * `src/script-runner/host-dispatcher.ts` — that module owns the spawn /
 * lifecycle / IPC plumbing; this one owns the per-call dispatch logic.
 *
 * Split is deliberate: `host-dispatcher.ts` has dependencies on `spindle`
 * + module state (childHandle, lifecycle subscriptions); the routing
 * logic here is testable in isolation.
 *
 * Phase 3 scope: value-returning api methods only. Object-handle returns
 * (Collection, DOMHandle, etc.) need the handle-table machinery that
 * Phases 4–5 add — until then, methods that try to return such objects
 * fail with a "not yet supported" error in `serializeReturnValue`.
 */

import type { LumiScriptAPI } from '../types/script.js';
import type {
  ApiProxyRequest,
  ApiProxyResponse,
  SerializedError,
  HandleRef,
  HandleKind,
} from '../types/script-runner-ipc.js';
import { isHandleRef } from '../types/script-runner-ipc.js';

// ─── Handle-returning method registry ────────────────────────────────────────
//
// Static map of api method paths that return objects requiring HandleRef
// wrapping (rather than direct serialization). When the dispatcher invokes
// one of these methods, the caller-supplied `registerHandle` helper turns
// the real object into a `{ __handleRef, id, kind }` reference that the
// child wraps in a typed proxy class.
//
// Phase 4 entries: just `db.collection` → Collection. Phase 5 will widen
// this to persistent-handle returners (`ui.dom.injectAtMessage` →
// DOMHandle, `macros.register` → RegisteredMacroHandle, etc.).
//
// Lifecycle notes per kind live in `host-dispatcher.ts`'s handle table —
// transient kinds get script-run-scoped cleanup, persistent kinds tie into
// the existing `clearByScriptId` patterns. This module just identifies WHO
// gets a handle; lifetime is the dispatcher's concern.

export const HANDLE_RETURNING_METHODS: Readonly<Record<string, HandleKind>> = {
  'db.collection':       'Collection',
  'ui.dom.addStyle':     'StyleHandle',
};

/**
 * Lifecycle classification per `HandleKind`.
 *
 * - **transient** — handle is dropped on script-run completion (host-dispatcher
 *   clears the per-run handle table when `run-result` arrives). Used for
 *   handles that user code typically allocates inline within a single run
 *   and never persists, e.g. `Collection`.
 *
 * - **persistent** — handle outlives the originating run; tied to the
 *   owning script's lifetime. The per-script handle table on the
 *   host-dispatcher holds these. Cleanup happens when the script is
 *   unregistered (Phase 9 wires this into the trigger-registry's
 *   existing `clearByScriptId` patterns; until then, persistent handles
 *   live until LumiScript itself unloads).
 *
 * Drift safety: every `HandleKind` in `script-runner-ipc.ts`'s union must
 * appear here. TypeScript's exhaustiveness check on `Record<HandleKind,...>`
 * enforces this — adding a new kind without classifying it is a compile
 * error.
 */
export const HANDLE_KIND_LIFECYCLE: Readonly<Record<HandleKind, 'transient' | 'persistent'>> = {
  // Persistent — registered once, lives across multiple trigger runs of the
  // same script. Cleanup tied to script-unregister via clearByScriptId
  // (Phase 9 integrates these into the existing patterns).
  //
  // ─── v0.26.1 — Collection promoted from transient to persistent ────────
  //
  // Originally `Collection` was transient — tied to the activeRun that
  // created it. That worked for the simple "open, use inline, drop" pattern
  // BUT broke any usage where a handle outlives its originating run:
  //
  //   1. Cross-run handle storage on `globalThis` (a known dev pattern in
  //      tracker-style scripts).
  //   2. Stale-`latest` race: a `db.collection` create issued under a stale
  //      runId resolved via `latestRunIdByScript` could land on the parent
  //      AFTER `dispatchRunScript` for a follow-up run had dropped the
  //      originating activeRun. Even with the `_runIdSource='latest'`
  //      fallback in `handleApiRequest`, the resulting handle's id keeps
  //      the stale runId prefix; subsequent `dispatchOnHandle` calls under
  //      `_runIdSource='ctx'` (the proxy's originating-run fallback) then
  //      can't be re-routed (handle scoping requires the originating run).
  //
  // Collection's underlying state is fully reconstructable from the path
  // string — no per-run state to preserve. Promoting to persistent gives
  // us the script-keyed handle id (`${scriptId}-h-N`), per-script
  // persistent-table storage, and survival across run boundaries until
  // script-unregister. Combined with the canonical's `(scope, path)`
  // dedup (`buildDbAPI`) and the dispatcher's obj-reuse dedup
  // (`registerHandle`), per-script handle accumulation is bounded by the
  // number of unique collections the script touches.
  Collection:                 'persistent',

  DOMHandle:                  'persistent',
  CollapsibleDOMHandle:       'persistent',
  ProgressBarHandle:          'persistent',
  RegisteredMacroHandle:      'persistent',
  RegisteredToolHandle:       'persistent',
  RegisteredDrawerTab:        'persistent',
  RegisteredInputBarAction:   'persistent',
  RegisteredCommandHandle:    'persistent',
  RegisteredFloatWidget:      'persistent',
  BroadcastSubscription:      'persistent',
  MacroInterceptorHandle:     'persistent',
  ContentProcessorHandle:     'persistent',
  StyleHandle:                'persistent',
  EnclaveHandle:              'persistent',
};

/**
 * Resolve a dotted method path against an api object. Returns the function
 * + the object to bind `this` to, or `null` if the path doesn't terminate
 * at a function.
 *
 * Path examples (Phase 3 scope):
 *   "utils.uuid"             → api.utils.uuid
 *   "utils.handlebars.render" → api.utils.handlebars.render
 *   "broadcast.emit"         → api.broadcast.emit
 *
 * Phases 4+ will extend with handle-relative paths; for now the path
 * always starts at the top-level api.
 */
function resolveMethodPath(
  api: LumiScriptAPI,
  path: string,
): { fn: (...args: unknown[]) => unknown; thisArg: unknown } | null {
  if (!path) return null;
  const parts = path.split('.');
  if (parts.length === 0) return null;

  let target: unknown = api;
  for (let i = 0; i < parts.length - 1; i++) {
    if (target == null || typeof target !== 'object') return null;
    const part = parts[i];
    if (part === undefined) return null; // satisfy noUncheckedIndexedAccess
    target = (target as Record<string, unknown>)[part];
  }

  if (target == null || typeof target !== 'object') return null;
  const methodName = parts[parts.length - 1];
  if (methodName === undefined) return null;
  const fn = (target as Record<string, unknown>)[methodName];
  if (typeof fn !== 'function') return null;

  return { fn: fn as (...args: unknown[]) => unknown, thisArg: target };
}

/**
 * Convert a thrown value into the IPC error shape. Matches the child's
 * `serializeError` helper for symmetry.
 */
function serializeError(err: unknown): SerializedError {
  if (err instanceof Error) {
    return {
      name:    err.name || 'Error',
      message: err.message || String(err),
      stack:   err.stack,
    };
  }
  return { name: 'Error', message: String(err) };
}

/**
 * Validate that a value is safe to send back to the child as the response
 * value. Phase 3 only allows JSON-serializable values: primitives, plain
 * objects, arrays. Object handles need Phase 4's handle-table to translate
 * to `HandleRef`; until then we error rather than silently sending an
 * un-proxyable object that would crash on the child side.
 *
 * Returns `{ ok: true, value }` for serializable values, or
 * `{ ok: false, error }` if the value would need handle-proxying we
 * don't support yet.
 */
function serializeReturnValue(value: unknown): { ok: true; value: unknown } | { ok: false; error: SerializedError } {
  // Already a HandleRef (passed through some path that knows how to construct one)? Pass it on.
  if (isHandleRef(value)) {
    return { ok: true, value };
  }

  // Primitives + null/undefined.
  if (
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return { ok: true, value };
  }

  // Plain objects + arrays — JSON-cloneable (most of the time). We do a
  // structural-clone test by round-tripping through JSON; if that throws,
  // the value contains something un-serializable (function, BigInt, etc.).
  if (typeof value === 'object') {
    try {
      // structuredClone is the right primitive but might not be present
      // on older Bun versions; JSON round-trip catches the most common
      // failures (functions, undefined-in-array). Both work for primitives
      // + plain data; both fail for object-with-methods (like a Collection).
      JSON.stringify(value);
      return { ok: true, value };
    } catch (err) {
      return {
        ok: false,
        error: {
          name: 'TypeError',
          message:
            'api-proxy host: return value not yet supported across IPC ' +
            '(likely an object with methods — handle-proxying lands in Phases 4–5). ' +
            `Original: ${err instanceof Error ? err.message : String(err)}`,
        },
      };
    }
  }

  // Function, BigInt, Symbol — definitively not serializable.
  return {
    ok: false,
    error: {
      name: 'TypeError',
      message:
        `api-proxy host: return value of type "${typeof value}" cannot cross IPC. ` +
        'Functions, BigInts, and Symbols are not transferable.',
    },
  };
}

/**
 * Helper callbacks supplied by the caller (host-dispatcher) for handle
 * lifecycle. Decoupled from this module so the actual storage of handles
 * (per-run table, persistent owner-tied store, etc.) lives in the same
 * module that owns run lifecycle, avoiding circular concerns.
 */
export interface HandleHelpers {
  /**
   * Resolve a `HandleRef` to its underlying real object. Returns
   * `undefined` if the handle has been released (run completed) or
   * never existed.
   */
  resolveHandle(ref: HandleRef): unknown | undefined;
  /**
   * Register a real object as a handle of the given kind. Returns a
   * `HandleRef` suitable for sending over IPC. The dispatcher decides
   * lifecycle (transient per-run vs. persistent owner-tied) based on
   * `kind`.
   */
  registerHandle(obj: unknown, kind: HandleKind): HandleRef;
}

/**
 * Execute one api-proxy request against the given script-bound api.
 * Self-contained: any thrown error is caught and returned as a failure
 * response. Never throws.
 *
 * Caller is responsible for:
 *   - Looking up the right `LumiScriptAPI` for this run's `runId`
 *   - Supplying handle helpers tied to the run's handle table
 *   - Sending the returned `ApiProxyResponse` back to the child via IPC
 *
 * Routing:
 *   - **Top-level method call** (`req.targetHandle === undefined`):
 *     resolve `req.method` against the api object via dotted-path
 *     traversal, invoke. If the method is in `HANDLE_RETURNING_METHODS`,
 *     wrap the result in a `HandleRef` via `helpers.registerHandle`;
 *     otherwise serialize as a value.
 *   - **Handle-method call** (`req.targetHandle !== undefined`):
 *     resolve the handle via `helpers.resolveHandle`, invoke `req.method`
 *     on it (single-segment method name, not dotted). The result is
 *     always serialized as a value — Phase 4 doesn't yet have
 *     handle-method calls returning new handles. (Phase 5 will, e.g.,
 *     `Collection.iterator()` returning a CursorHandle.)
 */
export async function dispatchApiCall(
  req: ApiProxyRequest,
  api: LumiScriptAPI,
  helpers: HandleHelpers,
): Promise<ApiProxyResponse> {
  const requestId = req.requestId;

  // ── Handle-method call: req.targetHandle set, method is a single name ──
  if (req.targetHandle !== undefined) {
    return dispatchHandleMethodCall(requestId, req, helpers);
  }

  // ── Top-level method call: resolve dotted path against the api ────────
  const resolved = resolveMethodPath(api, req.method);
  if (!resolved) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name: 'TypeError',
        message: `api-proxy host: method "${req.method}" not found on api`,
      },
    };
  }

  let result: unknown;
  try {
    result = await Promise.resolve(resolved.fn.apply(resolved.thisArg, req.args));
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     serializeError(err),
    };
  }

  // If this method is in the handle-returning registry, wrap the result.
  const handleKind = HANDLE_RETURNING_METHODS[req.method];
  if (handleKind !== undefined) {
    if (result == null) {
      // The api shouldn't return null/undefined for a handle-returning
      // method — surface it as a programming error.
      return {
        type:      'api-response',
        requestId,
        ok:        false,
        error: {
          name: 'TypeError',
          message: `api-proxy host: ${req.method} returned ${result === null ? 'null' : 'undefined'} but is registered as handle-returning`,
        },
      };
    }
    const ref = helpers.registerHandle(result, handleKind);
    return {
      type:      'api-response',
      requestId,
      ok:        true,
      value:     ref,
    };
  }

  // Otherwise serialize as a plain value.
  const serialized = serializeReturnValue(result);
  if (!serialized.ok) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     serialized.error,
    };
  }

  return {
    type:      'api-response',
    requestId,
    ok:        true,
    value:     serialized.value,
  };
}

/**
 * Handle-method call dispatch. Looks up the real object behind the
 * `targetHandle`, invokes the named method on it, serializes the result
 * as a value.
 */
async function dispatchHandleMethodCall(
  requestId: string,
  req: ApiProxyRequest,
  helpers: HandleHelpers,
): Promise<ApiProxyResponse> {
  const targetHandle = req.targetHandle!;
  const target = helpers.resolveHandle(targetHandle);

  if (target === undefined) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name: 'HandleReleasedError',
        message:
          `api-proxy host: handle ${targetHandle.kind}/${targetHandle.id} has been released ` +
          `(run completed) or never existed`,
      },
    };
  }

  if (target == null || typeof target !== 'object') {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name: 'TypeError',
        message:
          `api-proxy host: handle ${targetHandle.kind}/${targetHandle.id} resolved to a non-object ` +
          `(${typeof target}); cannot dispatch method "${req.method}"`,
      },
    };
  }

  const methodName = req.method;
  const fn = (target as Record<string, unknown>)[methodName];
  if (typeof fn !== 'function') {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error: {
        name: 'TypeError',
        message:
          `api-proxy host: ${targetHandle.kind} has no method "${methodName}"`,
      },
    };
  }

  let result: unknown;
  try {
    result = await Promise.resolve((fn as (...a: unknown[]) => unknown).apply(target, req.args));
  } catch (err) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     serializeError(err),
    };
  }

  const serialized = serializeReturnValue(result);
  if (!serialized.ok) {
    return {
      type:      'api-response',
      requestId,
      ok:        false,
      error:     serialized.error,
    };
  }

  return {
    type:      'api-response',
    requestId,
    ok:        true,
    value:     serialized.value,
  };
}

// Re-export for use by host-dispatcher when it needs to construct a
// HandleRef in later phases (Phase 4+). Not used in Phase 3.
export type { HandleRef };
