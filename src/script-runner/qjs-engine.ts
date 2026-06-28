/**
 * #11 P1 — QuickJS-WASM engine harness + the IPC↔deferred-promise bridge.
 *
 * Runs a user-script body inside a QuickJS isolate instead of `new AsyncFunction`.
 * The Bun subprocess, the api-proxy `dispatch` / pending-map / `api-response`
 * routing, `flush`, `activeProxies`, the timeout race and `runIdContext` are all
 * REUSED verbatim by `child-entry.ts:runOne` — only the in-VM user-code boundary
 * differs. This module owns: the module/context lifecycle, injecting the sandbox
 * bindings as VM globals, and the bridge that turns an in-VM `await api.foo()`
 * into the host `dispatch(...)` and settles an in-VM promise when it resolves.
 *
 * Engine config (decided + spike-validated, see notes/sandbox-isolate-research.md):
 * quickjs-emscripten-core + the SYNC singlefile variant + the NON-asyncify
 * deferred-promise bridge (`ctx.newPromise()` + `executePendingJobs()` pump). This
 * preserves LS's promise contract — `await` / `.then` / genuinely-concurrent
 * `Promise.all` — which asyncify breaks.
 *
 * P1 scope: primitives/objects marshaled as JSON envelopes. HandleRef, streams,
 * AbortSignal, Zod, callbacks, structured marshaling, web-global shims and the
 * in-VM libraries land in P2–P6. `script.require` / `z` / `fetch` are stubbed.
 */
import {
  newQuickJSWASMModuleFromVariant,
  type QuickJSContext,
  type QuickJSWASMModule,
} from 'quickjs-emscripten-core';
import variant from '@jitl/quickjs-singlefile-mjs-release-sync';

/** Captured-console surface the harness forwards in-VM `console.*` to. Modeled
 *  as an index-signature record to match `buildChildCapturedConsole`'s actual
 *  return type (`Record<string, (...args) => void>`); the harness only reads
 *  log/warn/error/info. */
export type QuickJSConsole = Record<string, (...args: unknown[]) => void>;

export interface QuickJSRunOptions {
  code:           string;
  /** The api-proxy `dispatch` for THIS run (reused verbatim — see ProxyHandle.dispatch). */
  dispatch:       (method: string, args: unknown[]) => Promise<unknown>;
  data:           unknown;
  script:         { id: string; name: string; type: string };
  console:        QuickJSConsole;
  timeoutMs:      number;
  serializeError: (err: unknown) => { name: string; message: string; stack?: string };
}

// In-VM bootstrap: the recursive `api` Proxy. `api.chat.getMessages(a,b)` →
// `__hostDispatch('chat.getMessages', JSON.stringify([a,b]))` (a host fn that
// returns an in-VM promise), then unwrap the `{v}` / `{e}` envelope. Real
// promise semantics: `.then` / `Promise.all` / `await` all work.
const API_BOOTSTRAP = `
globalThis.__lsBuildApi = function (hostDispatch) {
  var unwrap = function (s) {
    var o = JSON.parse(s);
    if (o && o.e) {
      var err = new Error((o.e && o.e.message) || 'error');
      if (o.e.name) err.name = o.e.name;
      if (o.e.stack) err.stack = o.e.stack;
      throw err;
    }
    return o ? o.v : undefined;
  };
  // #11 fix (b) — FAIL LOUD on values JSON.stringify would silently mangle or
  // drop, instead of corrupting them on the way to the host. P1 marshals args
  // as JSON; functions (callbacks), Date, Map/Set, BigInt, symbols, RegExp and
  // typed arrays/ArrayBuffers are not yet supported (later phases) and asyncfn
  // passes them by structured clone — so a quickjs script that passes one would
  // otherwise see a wrong value with no error. Throw a clear, typed error.
  var BAD = 'LumiScript QuickJS engine (P1): unsupported argument — ';
  var assertJsonClean = function (v, seen, where) {
    var t = typeof v;
    if (v === null || t === 'string' || t === 'number' || t === 'boolean' || t === 'undefined') return;
    if (t === 'function') throw new Error(BAD + 'functions/callbacks are not yet marshaled (coming in a later phase) at ' + where + '.');
    if (t === 'bigint') throw new Error(BAD + 'BigInt is not JSON-serializable at ' + where + '.');
    if (t === 'symbol') throw new Error(BAD + 'symbol at ' + where + '.');
    if (v instanceof Date) throw new Error(BAD + 'Date would silently become an ISO string; pass a number or string at ' + where + '.');
    if (v instanceof Map || v instanceof Set) throw new Error(BAD + 'Map/Set would silently become {} at ' + where + '.');
    if (v instanceof RegExp) throw new Error(BAD + 'RegExp at ' + where + '.');
    if (typeof ArrayBuffer !== 'undefined' && (v instanceof ArrayBuffer || (ArrayBuffer.isView && ArrayBuffer.isView(v)))) throw new Error(BAD + 'binary (ArrayBuffer/typed array) is not yet marshaled at ' + where + '.');
    if (seen.has(v)) throw new Error(BAD + 'circular reference at ' + where + '.');
    seen.add(v);
    if (Array.isArray(v)) {
      for (var i = 0; i < v.length; i++) assertJsonClean(v[i], seen, where + '[' + i + ']');
    } else {
      var keys = Object.keys(v);
      for (var k = 0; k < keys.length; k++) assertJsonClean(v[keys[k]], seen, where + '.' + keys[k]);
    }
    seen.delete(v);
  };
  var make = function (path) {
    return new Proxy(function () {}, {
      get: function (_t, prop) {
        if (typeof prop !== 'string' || prop === 'then') return undefined;
        return make(path ? path + '.' + prop : prop);
      },
      apply: function (_t, _thisArg, args) {
        var a = args || [];
        for (var i = 0; i < a.length; i++) assertJsonClean(a[i], new Set(), 'api.' + path + ' argument ' + i);
        return Promise.resolve(hostDispatch(path, JSON.stringify(a))).then(unwrap);
      },
    });
  };
  return make('');
};
`;

let modulePromise: Promise<QuickJSWASMModule> | undefined;
let context: QuickJSContext | undefined;
/** Per-run wall-clock deadline read by the (sync-loop) interrupt handler. */
let currentDeadline = Number.POSITIVE_INFINITY;

/** Lazily create the module (once per process) + the reusable context (once per
 *  child, mirroring the shared-child model). The interrupt handler reads the
 *  module-level `currentDeadline`, updated per-run; runs are sequential. */
async function getContext(): Promise<QuickJSContext> {
  if (context) return context;
  modulePromise ??= newQuickJSWASMModuleFromVariant(variant);
  const mod = await modulePromise;
  const ctx = mod.newContext();
  // Ring-0 sync-loop guard (P7 formalizes the supervision rings): aborts a sync
  // `while(true){}` the host heartbeat would otherwise SIGKILL the whole child for.
  ctx.runtime.setInterruptHandler(() => Date.now() > currentDeadline);
  ctx.runtime.setMemoryLimit(512 * 1024 * 1024); // generous backstop; P7 tunes
  ctx.unwrapResult(ctx.evalCode(API_BOOTSTRAP)).dispose();
  context = ctx;
  return ctx;
}

function toHostError(dumped: unknown): Error {
  if (dumped && typeof dumped === 'object' && 'message' in dumped) {
    const d = dumped as { name?: unknown; message?: unknown; stack?: unknown };
    const err = new Error(String(d.message));
    if (d.name)  err.name  = String(d.name);
    if (d.stack) err.stack = String(d.stack);
    return err;
  }
  return new Error(String(dumped));
}

/**
 * Run a user-script body in the QuickJS isolate and return its resolved value.
 * Caller (`runOne`) wraps this in `raceWithTimeout` + `runIdContext.run`, exactly
 * like the AsyncFunction path, so async-timeout semantics + runId attribution are
 * identical.
 */
export async function runUserScriptInQuickJS(opts: QuickJSRunOptions): Promise<unknown> {
  const ctx = await getContext();
  currentDeadline = Date.now() + opts.timeoutMs;
  const pump = () => ctx.runtime.executePendingJobs();

  // #11 fix (d) — a synchronous `while(true){}` blocks the host event loop, so
  // runOne's raceWithTimeout can't fire; the QuickJS interrupt handler aborts
  // the VM instead, surfacing an InternalError('interrupted'). The deadline
  // having passed is the unambiguous signal the interrupt fired (the handler
  // returns true ONLY then). Normalize to the SAME ScriptTimeoutError name +
  // message shape the asyncfn path uses, so the user sees the friendly message
  // AND runOne's `error.name === 'ScriptTimeoutError'` gate fires proc.fail() —
  // killing the child so the interrupted body can't leave residual state in the
  // reused context for the next run.
  const timedOut = () => Date.now() > currentDeadline;
  const timeoutError = () => {
    const err = new Error(
      `Script "${opts.script.name}" exceeded the ${opts.timeoutMs / 1000}s execution timeout ` +
      `(a synchronous loop with no await was interrupted by the QuickJS engine).`,
    );
    err.name = 'ScriptTimeoutError';
    return err;
  };

  try {
    // ── Bridge: __hostDispatch(path, argsJson) → dispatch(...) → in-VM promise ──
    const hostDispatch = ctx.newFunction('__hostDispatch', (pathHandle, argsHandle) => {
      const method = ctx.getString(pathHandle);
      const args = JSON.parse(ctx.getString(argsHandle)) as unknown[];
      const deferred = ctx.newPromise();
      // #11 fix (a) — settle the in-VM deferred for EVERY outcome, and never let
      // the marshaling step throw on the floor. If JSON.stringify of the result
      // throws (e.g. a BigInt/circular result that slipped past the host's
      // serializeReturnValue pre-filter), fall back to an `{e}` error envelope
      // so the deferred is still resolved — otherwise the in-VM promise would
      // hang until the host timeout and the deferred's handles would leak into
      // the process-global context. Both arms RESOLVE (success → `{v}`, failure
      // → `{e}` the in-VM proxy re-throws), so the in-VM promise never rejects.
      // `void`: not awaited (sync newFunction callback) and both arms handled.
      const settle = (envelope: { v: unknown } | { e: unknown }, fallbackMessage: string) => {
        let s: string;
        try {
          s = JSON.stringify(envelope);
        } catch {
          s = JSON.stringify({ e: { name: 'QuickJSMarshalError', message: fallbackMessage } });
        }
        ctx.newString(s).consume((h) => deferred.resolve(h));
        pump();
      };
      void opts.dispatch(method, args).then(
        (result) => settle({ v: result }, `Result of ${method}() is not JSON-serializable under the QuickJS engine (P1).`),
        (err) => settle({ e: opts.serializeError(err) }, `Error from ${method}() could not be serialized.`),
      );
      // Re-pump after the deferred settles so any jobs the resolution unblocked
      // (the awaiting body, chained `.then`s) flush. `settled` never rejects.
      void deferred.settled.then(pump);
      return deferred.handle;
    });
    ctx.setProp(ctx.global, '__hostDispatch', hostDispatch);
    hostDispatch.dispose();

    // ── Bindings (P1 subset): api / data / script / __console ──
    ctx.unwrapResult(ctx.evalCode('globalThis.api = __lsBuildApi(__hostDispatch);')).dispose();

    ctx.newString(JSON.stringify(opts.data ?? null)).consume((h) => ctx.setProp(ctx.global, '__lsDataJson', h));
    ctx.newString(JSON.stringify(opts.script)).consume((h) => ctx.setProp(ctx.global, '__lsScriptJson', h));
    ctx.unwrapResult(ctx.evalCode(`
      globalThis.data = JSON.parse(globalThis.__lsDataJson);
      globalThis.script = JSON.parse(globalThis.__lsScriptJson);
      globalThis.script.require = function () {
        throw new Error('script.require() is not available in the QuickJS engine yet (lands in #11 P3).');
      };
    `)).dispose();

    const consoleObj = ctx.newObject();
    for (const level of ['log', 'warn', 'error', 'info'] as const) {
      // Narrow before capturing: the console is an index-signature record, so
      // under noUncheckedIndexedAccess `opts.console[level]` is `fn | undefined`.
      // capturedConsole always supplies all four, so the guard never skips.
      const handler = opts.console[level];
      if (typeof handler !== 'function') continue;
      const fn = ctx.newFunction(level, (...argHandles) => {
        handler(...argHandles.map((h) => ctx.dump(h)));
      });
      ctx.setProp(consoleObj, level, fn);
      fn.dispose();
    }
    ctx.setProp(ctx.global, '__console', consoleObj);
    consoleObj.dispose();

    // ── Run the body as an async IIFE; top-level await works because it's async ──
    const evalRes = ctx.evalCode(`(async () => {
"use strict";
const console = globalThis.__console;
${opts.code}
})()`);
    if (evalRes.error) {
      const e = ctx.dump(evalRes.error);
      evalRes.error.dispose();
      throw timedOut() ? timeoutError() : toHostError(e);
    }
    const settledP = ctx.resolvePromise(evalRes.value);
    evalRes.value.dispose();
    pump();
    const settled = await settledP;
    if (settled.error) {
      const e = ctx.dump(settled.error);
      settled.error.dispose();
      throw timedOut() ? timeoutError() : toHostError(e);
    }
    const value = ctx.dump(settled.value);
    settled.value.dispose();
    return value;
  } finally {
    currentDeadline = Number.POSITIVE_INFINITY;
  }
}
