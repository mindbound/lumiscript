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
 * P2 update: args / return / data cross with STRUCTURED marshaling (vm-marshal.ts
 * — Date / Map / Set / typed-arrays / BigInt / undefined preserved with parity to
 * Boundary #1; functions / symbols / cycles fail loud). HandleRef, streams,
 * AbortSignal, Zod, callbacks, web-global shims and the in-VM libraries land in
 * P4–P6. `script.require` / `z` / `fetch` are stubbed.
 */
import {
  newQuickJSWASMModuleFromVariant,
  type QuickJSContext,
  type QuickJSHandle,
  type QuickJSWASMModule,
} from 'quickjs-emscripten-core';
import variant from '@jitl/quickjs-singlefile-mjs-release-sync';
import { marshalEncode, marshalDecode, VM_MARSHAL_BOOTSTRAP } from './vm-marshal.js';
import { VM_WEBGLOBALS_BOOTSTRAP } from './vm-webglobals.js';
import { VM_ZOD_BUNDLE } from './generated/vm-zod-bundle.js';
import { VM_HANDLEBARS_BUNDLE } from './generated/vm-handlebars-bundle.js';

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
  /** Gates the in-VM `fetch` global (direct host fetch), mirroring the asyncfn
   *  safeFetch: only allowDangerous scripts may fetch directly. Optional with a
   *  fail-safe default — absent means the capability is OFF (fetch blocked). */
  allowDangerous?: boolean;
  /** The host `fetch` reference CAPTURED BEFORE `installSandboxLockdown()` nulls
   *  `globalThis.fetch` (fetch is deliberately not in SAFE_GLOBALS — see
   *  child-entry's `_hostFetch`). The in-VM fetch bridge MUST use this captured
   *  reference, not a live `globalThis.fetch` read, or it sees `undefined` in the
   *  locked child realm. Absent → the in-VM `fetch` reports the capability is
   *  unavailable (the host did not grant it for this run). */
  hostFetch?: (url: string, init?: RequestInit) => Promise<Response>;
}

// In-VM bootstrap: the recursive `api` Proxy. `api.chat.getMessages(a,b)` →
// `__hostDispatch('chat.getMessages', <marshaled args>)` (a host fn that returns
// an in-VM promise), then unwrap the `{v}` / `{e}` envelope. Real promise
// semantics: `.then` / `Promise.all` / `await` all work. Args + results cross
// with STRUCTURED marshaling (__lsEncode/__lsDecode, defined by VM_MARSHAL_BOOTSTRAP)
// so Date/Map/Set/typed-arrays/BigInt/undefined survive with parity; functions/
// symbols/cycles make __lsEncode throw (fail loud) synchronously at the call site.
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
    return globalThis.__lsDecode(o ? o.v : undefined);
  };
  // Raw dispatch: marshal args → host → unwrap result.
  var send = function (method, args) {
    return Promise.resolve(hostDispatch(method, JSON.stringify(globalThis.__lsEncode(args || [])))).then(unwrap);
  };
  // #11 P3 B — a Zod schema is a VM object (methods) that cannot cross IPC.
  // Convert it to JSON Schema IN the VM (z.toJSONSchema) before dispatch and run
  // .parse on the response IN the VM, mirroring the asyncfn proxy's
  // convertZodToJsonSchemaIfNeeded (api-proxy.ts). Plain-object schemas pass through.
  var isZod = function (s) {
    return !!(s && typeof s === 'object' && globalThis.z && globalThis.z.ZodType && (s instanceof globalThis.z.ZodType));
  };
  var toJsonSchema = function (s) {
    return globalThis.z.toJSONSchema(s, { target: 'openapi-3.0', cycles: 'ref', unrepresentable: 'any' });
  };
  var generateStructured = function (args) {
    var messages = args[0], schema = args[1], options = args[2];
    var zodSchema = isZod(schema) ? schema : null;
    var jsonSchema = zodSchema ? toJsonSchema(schema) : schema;
    var dispatchArgs = options !== undefined ? [messages, jsonSchema, options] : [messages, jsonSchema];
    return send('llm.generateStructured', dispatchArgs).then(function (parsed) {
      return zodSchema ? zodSchema.parse(parsed) : parsed;
    });
  };
  var generateWithTools = function (args) {
    var messages = args[0], tools = args[1], options = args[2], schema = args[3];
    var zodSchema = isZod(schema) ? schema : null;
    var jsonSchema = zodSchema ? toJsonSchema(schema) : schema;
    return send('llm.generateWithTools', [messages, tools, options || {}, jsonSchema]).then(function (raw) {
      if (zodSchema && raw && (raw.tool_calls === undefined || raw.tool_calls === null || raw.tool_calls.length === 0)) {
        try { return Object.assign({}, raw, { content: zodSchema.parse(raw.content) }); } catch (e) { return raw; }
      }
      return raw;
    });
  };
  // #11 P3 C — template.* re-homed onto the in-VM Handlebars (globalThis.__hbs):
  // compile returns an in-VM function (sync), registerHelper takes an in-VM fn
  // (sync void), render dispatches macros.resolve to the host then compiles +
  // renders in-VM so in-VM-registered helpers apply. Mirrors the asyncfn proxy.
  var templateCompile = function (a) {
    var compiled = globalThis.__hbs.compile(a[0]);
    return function (data) { return compiled(data || {}); };
  };
  var templateRegisterHelper = function (a) {
    globalThis.__hbs.registerHelper(a[0], a[1]);
    return undefined;
  };
  var templateRender = function (a) {
    var template = a[0], data = a[1] || {}, options = a[2] || {};
    var macroOpts = {};
    if (options.chatId !== undefined) macroOpts.chatId = options.chatId;
    if (options.characterId !== undefined) macroOpts.characterId = options.characterId;
    return send('utils.macros.resolve', [template, macroOpts]).then(function (result) {
      return globalThis.__hbs.compile(result.text)(data);
    });
  };
  var make = function (path) {
    return new Proxy(function () {}, {
      get: function (_t, prop) {
        if (typeof prop !== 'string' || prop === 'then') return undefined;
        return make(path ? path + '.' + prop : prop);
      },
      apply: function (_t, _thisArg, args) {
        var a = args || [];
        if (path === 'llm.generateStructured') return generateStructured(a);
        if (path === 'llm.generateWithTools') return generateWithTools(a);
        if (path === 'utils.template.compile') return templateCompile(a);
        if (path === 'utils.template.registerHelper') return templateRegisterHelper(a);
        if (path === 'utils.template.render') return templateRender(a);
        return send(path, a);
      },
    });
  };
  return make('');
};
`;

// #11 P3 D — in-VM script.require. User-library SOURCE is fetched via the
// existing 'script.fetchLibrary' dispatch, then compiled + run INSIDE the VM
// (replacing the host AsyncFunctionCtor at api-proxy.ts:4582) so library code is
// isolated like the main script. Per-run cache + circular detection. `ls:*`
// built-ins are host-side TS factories returning function-bearing objects that
// can't be marshaled, so they fail loud for now (a later pass re-homes them).
// __lsMakeRequire(hostDispatch) returns a fresh require (its own cache) per run.
const VM_REQUIRE_BOOTSTRAP = `
(function () {
  var AsyncFunction = (async function () {}).constructor;
  var unwrap = function (s) {
    var o = JSON.parse(s);
    if (o && o.e) {
      var e = new Error((o.e && o.e.message) || 'error');
      if (o.e.name) e.name = o.e.name;
      if (o.e.stack) e.stack = o.e.stack;
      throw e;
    }
    return globalThis.__lsDecode(o ? o.v : undefined);
  };
  var hostCall = function (method, args) {
    return Promise.resolve(globalThis.__hostDispatch(method, JSON.stringify(globalThis.__lsEncode(args)))).then(unwrap);
  };
  // Built ONCE per context (a recursive per-run closure forms a scope↔fn cycle
  // QuickJS can't refcount-free → per-run churn the leak oracle catches). The
  // per-run cache + in-progress maps live on globalThis (reset each run); runs
  // are serialized (P2/H1) so they never overlap.
  globalThis.__lsRequire = function (nameOrId) {
    var cache = globalThis.__lsRequireCache;
    var inProgress = globalThis.__lsRequireInProgress;
    if (typeof nameOrId !== 'string' || nameOrId.length === 0) {
      return Promise.reject(new Error('script.require: name must be a non-empty string'));
    }
    if (nameOrId.indexOf('ls:') === 0) {
      return Promise.reject(new Error('script.require: built-in "' + nameOrId + '" libraries are not yet available in the QuickJS engine (host-side ls:* factories).'));
    }
    if (Object.prototype.hasOwnProperty.call(cache, nameOrId)) return Promise.resolve(cache[nameOrId]);
    if (inProgress[nameOrId]) return Promise.reject(new Error('script.require: circular dependency detected for "' + nameOrId + '"'));
    return hostCall('script.fetchLibrary', [nameOrId]).then(function (libInfo) {
      inProgress[nameOrId] = true;
      var done = function () { delete inProgress[nameOrId]; };
      try {
        var libExports = {};
        var libModule = { exports: libExports };
        var libScript = { id: libInfo.id, name: libInfo.name, type: 'library', require: globalThis.__lsRequire };
        var silent = { log: function () {}, warn: function () {}, error: function () {}, info: function () {} };
        var libFetch = function () { throw new Error('"' + libInfo.name + '" cannot use fetch directly in the QuickJS engine yet (#11 P3 A2). Use api.utils.http.*.'); };
        var libFn = new AsyncFunction('api', 'data', 'script', '__console', 'exports', 'module', 'fetch', 'Bun', 'process', '"use strict";\\nconst console = __console;\\n' + libInfo.code + '\\n');
        return Promise.resolve(libFn(globalThis.api, {}, libScript, silent, libExports, libModule, libFetch, undefined, undefined)).then(function () {
          done();
          cache[nameOrId] = libModule.exports;
          return libModule.exports;
        }, function (err) { done(); throw err; });
      } catch (e) { done(); throw e; }
    });
  };
})();
`;

// #11 P3 audit (H1) — lock the trusted scaffolding bindings so one run can't
// reassign them (e.g. globalThis.__lsEncode = evil, globalThis.api = evilProxy)
// and poison the NEXT run on the shared process-global context. data / script /
// __lsRequireCache / __hbs.helpers stay per-run-mutable (reset each run); the
// frozen `__hbsBuiltins*` snapshots are the reset SOURCES so they can't be
// tampered. (Third-party z/Handlebars internal-property mutation remains a
// residual until per-run contexts land in P7 — bindings are locked, objects not
// deep-frozen.) Eval'd LAST in getContext, after all scaffolding is built.
const VM_FREEZE_BOOTSTRAP = `
(function () {
  var locked = ['__lsEncode', '__lsDecode', '__hostDispatch', '__lsBuildApi', 'api', 'z', 'Handlebars', '__hbs', '__lsRequire', '__console', '__lsRandomFill', 'crypto', 'TextEncoder', 'TextDecoder', 'atob', 'btoa', 'queueMicrotask', 'performance', 'structuredClone', 'URL', 'URLSearchParams', '__lsFetch', 'fetch', 'Headers', 'Response'];
  for (var i = 0; i < locked.length; i++) {
    var name = locked[i];
    if (Object.prototype.hasOwnProperty.call(globalThis, name)) {
      // Pass 'value' explicitly: QuickJS defineProperty clears the value to
      // undefined when 'value' is omitted (non-spec), so re-state the current one.
      try { Object.defineProperty(globalThis, name, { value: globalThis[name], writable: false, configurable: false }); } catch (e) {}
    }
  }
  if (globalThis.__hbsBuiltins) Object.freeze(globalThis.__hbsBuiltins);
  if (globalThis.__hbsBuiltinPartials) Object.freeze(globalThis.__hbsBuiltinPartials);
  if (globalThis.__hbsBuiltinDecorators) Object.freeze(globalThis.__hbsBuiltinDecorators);
})();
`;

// #11 P3 A2 — in-VM crypto. The sync CSPRNG bridge: __lsRandomFill(n) (a host
// newFunction in createContext) returns a JSON array of n cryptographically-
// strong bytes from the HOST crypto. Host-function calls run SYNCHRONOUSLY in the
// VM (unlike __hostDispatch's deferred promise), so getRandomValues / randomUUID
// stay synchronous (the Web contract) with real entropy — no PRNG / entropy-pool
// compromise. crypto.subtle is intentionally absent (QuickJS lacks it; async).
const VM_CRYPTO_BOOTSTRAP = `
(function () {
  var fill = function (n) { return JSON.parse(globalThis.__lsRandomFill(n)); };
  globalThis.crypto = {
    getRandomValues: function (arr) {
      if (!arr || typeof arr.byteLength !== 'number') throw new TypeError('crypto.getRandomValues: an integer-typed array is required');
      var view = (arr instanceof Uint8Array) ? arr : new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
      var b = fill(view.length);
      for (var i = 0; i < view.length; i++) view[i] = b[i];
      return arr;
    },
    randomUUID: function () {
      var b = fill(16);
      b[6] = (b[6] & 0x0f) | 0x40; // version 4
      b[8] = (b[8] & 0x3f) | 0x80; // variant 10
      var h = [];
      for (var i = 0; i < 16; i++) h.push((b[i] + 256).toString(16).slice(1));
      return h.slice(0, 4).join('') + '-' + h.slice(4, 6).join('') + '-' + h.slice(6, 8).join('') + '-' + h.slice(8, 10).join('') + '-' + h.slice(10, 16).join('');
    },
  };
})();
`;

// #11 P3 A2 — in-VM fetch. DIRECT host fetch (gated by the run's allowDangerous),
// mirroring the asyncfn safeFetch — NOT cors-proxied (api.utils.http covers that).
// __lsFetch(url, optsJson) is an ASYNC host fn (createContext, deferred-promise
// pattern like __hostDispatch): it runs the child's globalThis.fetch, reads the
// body as bytes, and settles with {ok,status,statusText,headers,bytes}. The VM
// wrapper builds a Response (text/json/arrayBuffer/bytes + a Headers).
const VM_FETCH_BOOTSTRAP = `
(function () {
  var unwrap = function (s) {
    var o = JSON.parse(s);
    if (o && o.e) { var e = new Error((o.e && o.e.message) || 'fetch failed'); if (o.e.name) e.name = o.e.name; throw e; }
    return globalThis.__lsDecode(o ? o.v : undefined);
  };
  function Headers(obj) {
    this._h = {};
    if (obj) { var ks = Object.keys(obj); for (var i = 0; i < ks.length; i++) this._h[ks[i].toLowerCase()] = String(obj[ks[i]]); }
  }
  Headers.prototype.get = function (k) { var v = this._h[String(k).toLowerCase()]; return v === undefined ? null : v; };
  Headers.prototype.has = function (k) { return Object.prototype.hasOwnProperty.call(this._h, String(k).toLowerCase()); };
  Headers.prototype.forEach = function (cb, t) { var ks = Object.keys(this._h); for (var i = 0; i < ks.length; i++) cb.call(t, this._h[ks[i]], ks[i], this); };
  globalThis.Headers = Headers;
  function Response(r) {
    this.ok = !!r.ok; this.status = r.status; this.statusText = r.statusText || '';
    this.url = r.url || ''; this.redirected = !!r.redirected;
    this.headers = new Headers(r.headers || {});
    this._bytes = (r.bytes instanceof Uint8Array) ? r.bytes : new Uint8Array(0);
    this.bodyUsed = false;
  }
  Response.prototype.arrayBuffer = function () { this.bodyUsed = true; return Promise.resolve(this._bytes.buffer); };
  Response.prototype.bytes = function () { this.bodyUsed = true; return Promise.resolve(this._bytes); };
  Response.prototype.text = function () { this.bodyUsed = true; return Promise.resolve(new TextDecoder().decode(this._bytes)); };
  Response.prototype.json = function () { return this.text().then(function (t) { return JSON.parse(t); }); };
  globalThis.Response = Response;
  globalThis.fetch = function (url, opts) {
    var o = opts || {};
    var norm = { method: o.method || 'GET', headers: o.headers || {}, body: (o.body === undefined ? null : o.body) };
    return Promise.resolve(globalThis.__lsFetch(String(url), JSON.stringify(globalThis.__lsEncode(norm)))).then(unwrap).then(function (r) { return new Response(r); });
  };
})();
`;

let modulePromise: Promise<QuickJSWASMModule> | undefined;
let context: QuickJSContext | undefined;
/** Per-run wall-clock deadline read by the (sync-loop) interrupt handler. */
let currentDeadline = Number.POSITIVE_INFINITY;

/**
 * The currently-executing run's host bindings. The STABLE in-VM scaffolding —
 * `__hostDispatch`, `__console`, and the `api` proxy — is built ONCE per context
 * and reads this at call time. Building that scaffolding per run (as the first
 * P2 cut did) churned cyclic garbage (the api proxy's recursive `make` closure)
 * that QuickJS only reclaims at its internal malloc-GC threshold — there is no
 * exposed manual GC in quickjs-emscripten (verified: no JS_RunGC in the FFI, no
 * `std` module in contexts). Swapping a plain host object per run instead keeps
 * the VM heap flat (the leak oracle pins this) and avoids per-run proxy alloc.
 */
interface ActiveRun {
  dispatch:       (method: string, args: unknown[]) => Promise<unknown>;
  console:        QuickJSConsole;
  serializeError: (err: unknown) => { name: string; message: string; stack?: string };
  allowDangerous: boolean;
  /** Pre-lockdown host fetch (see QuickJSRunOptions.hostFetch). */
  hostFetch?: (url: string, init?: RequestInit) => Promise<Response>;
}
let activeRun: ActiveRun | undefined;
/** Cached context build — promise-based so concurrent first calls share ONE
 *  context (a plain `if (context)` check races two builds). Cleared on failure
 *  so a transient build error doesn't poison every later run. */
let contextPromise: Promise<QuickJSContext> | undefined;
/** #11 P2/H1 — run serializer. The api/console scaffolding, globalThis.data, and
 *  activeRun/currentDeadline all live on ONE process-global context, so two runs
 *  cannot interleave without corrupting each other. Each run chains behind the
 *  previous, ENFORCING the (previously only-asserted) sequential premise. True
 *  concurrency would need a context-per-run pool — tracked for P7. */
let runChain: Promise<void> = Promise.resolve();

/** Race-safe, retry-on-failure accessor for the singleton context. */
function getContext(): Promise<QuickJSContext> {
  if (!contextPromise) {
    contextPromise = createContext();
    // On a failed build, clear the cache so a later run retries instead of
    // getting the same rejected promise forever.
    contextPromise.catch(() => { contextPromise = undefined; });
  }
  return contextPromise;
}

/** Create the module (once per process) + the reusable context (once per child,
 *  mirroring the shared-child model) + the stable VM scaffolding. The interrupt
 *  handler reads the module-level `currentDeadline`, updated per-run. */
async function createContext(): Promise<QuickJSContext> {
  modulePromise ??= newQuickJSWASMModuleFromVariant(variant);
  const mod = await modulePromise;
  const ctx = mod.newContext();
  try {
  const pump = () => ctx.runtime.executePendingJobs();

  // Ring-0 sync-loop guard (P7 formalizes the supervision rings): aborts a sync
  // `while(true){}` the host heartbeat would otherwise SIGKILL the whole child for.
  ctx.runtime.setInterruptHandler(() => Date.now() > currentDeadline);
  ctx.runtime.setMemoryLimit(512 * 1024 * 1024); // generous backstop; P7 tunes

  // Order matters: the marshaler twin defines __lsEncode/__lsDecode, which the
  // api proxy (API_BOOTSTRAP's __lsBuildApi) references at call time.
  ctx.unwrapResult(ctx.evalCode(VM_MARSHAL_BOOTSTRAP)).dispose();
  // P3 A1 — pure-JS Web-global polyfills (structuredClone reuses the marshaler).
  ctx.unwrapResult(ctx.evalCode(VM_WEBGLOBALS_BOOTSTRAP)).dispose();
  // P3 B — bundle zod in-VM (sets globalThis.z) so user `z.object(...)` works and
  // the api proxy can convert Zod schemas → JSON Schema in-VM. ~95ms one-time per
  // context (a cold-start cost amortized over the child's lifetime; lazy-load is
  // a tracked optimization).
  ctx.unwrapResult(ctx.evalCode(VM_ZOD_BUNDLE)).dispose();
  // P3 C — bundle Handlebars in-VM + a per-context instance for
  // template.compile/render/registerHelper. Snapshot the built-in helpers so
  // each run can reset to them (per-run helper isolation matching the asyncfn
  // per-run Handlebars.create()).
  ctx.unwrapResult(ctx.evalCode(VM_HANDLEBARS_BUNDLE)).dispose();
  ctx.unwrapResult(ctx.evalCode(
    'globalThis.__hbs = globalThis.Handlebars.create();' +
    'globalThis.__hbsBuiltins = Object.assign({}, globalThis.__hbs.helpers);' +
    'globalThis.__hbsBuiltinPartials = Object.assign({}, globalThis.__hbs.partials);' +
    'globalThis.__hbsBuiltinDecorators = Object.assign({}, globalThis.__hbs.decorators || {});',
  )).dispose();
  ctx.unwrapResult(ctx.evalCode(API_BOOTSTRAP)).dispose();
  // P3 D — in-VM script.require (defines globalThis.__lsRequire).
  ctx.unwrapResult(ctx.evalCode(VM_REQUIRE_BOOTSTRAP)).dispose();

  // ── Stable __hostDispatch (built ONCE) — reads activeRun at call time. ──
  // Each call creates a per-CALL deferred, resolved when the host dispatch
  // settles. fix(a): settle for EVERY outcome (incl. a non-marshalable result),
  // so the in-VM promise can never hang and leak the deferred's handles.
  const hostDispatch = ctx.newFunction('__hostDispatch', (pathHandle, argsHandle) => {
    const method = ctx.getString(pathHandle);
    const args = marshalDecode(JSON.parse(ctx.getString(argsHandle))) as unknown[];
    const deferred = ctx.newPromise();
    const settle = (kind: 'v' | 'e', payload: unknown, fallbackMessage: string) => {
      let s: string;
      try {
        s = JSON.stringify(kind === 'v' ? { v: marshalEncode(payload) } : { e: payload });
      } catch {
        s = JSON.stringify({ e: { name: 'QuickJSMarshalError', message: fallbackMessage } });
      }
      ctx.newString(s).consume((h) => deferred.resolve(h));
      pump();
    };
    const run = activeRun;
    if (!run) {
      settle('e', { name: 'Error', message: `LumiScript QuickJS: no active run for ${method}().` }, 'no active run');
    } else {
      void run.dispatch(method, args).then(
        (result) => settle('v', result, `Result of ${method}() could not be marshaled to the QuickJS engine.`),
        (err) => settle('e', run.serializeError(err), `Error from ${method}() could not be serialized.`),
      );
    }
    // Re-pump after the deferred settles so jobs the resolution unblocked flush.
    void deferred.settled.then(pump);
    return deferred.handle;
  });
  ctx.setProp(ctx.global, '__hostDispatch', hostDispatch);
  hostDispatch.dispose(); // VM retains it via the global; this frees only the host handle

  // Build the api proxy ONCE (its recursive `make` closure is cyclic; building
  // it per run was the churn the leak oracle caught).
  ctx.unwrapResult(ctx.evalCode('globalThis.api = __lsBuildApi(__hostDispatch);')).dispose();

  // ── Stable __console (built ONCE) — forwards to activeRun.console at call time. ──
  const consoleObj = ctx.newObject();
  for (const level of ['log', 'warn', 'error', 'info'] as const) {
    const fn = ctx.newFunction(level, (...argHandles) => {
      const handler = activeRun?.console[level];
      if (typeof handler === 'function') handler(...argHandles.map((h) => ctx.dump(h)));
    });
    ctx.setProp(consoleObj, level, fn);
    fn.dispose();
  }
  ctx.setProp(ctx.global, '__console', consoleObj);
  consoleObj.dispose();

  // ── Sync CSPRNG bridge (P3 A2 crypto) — host fn returns n strong bytes as JSON.
  // newFunction callbacks run synchronously in the VM, so crypto.* stays sync. ──
  const randomFill = ctx.newFunction('__lsRandomFill', (nHandle) => {
    const n = Math.max(0, Math.min(ctx.getNumber(nHandle) | 0, 65536));
    const bytes = new Uint8Array(n);
    globalThis.crypto.getRandomValues(bytes); // host (Bun) crypto — CSPRNG, sync
    return ctx.newString(JSON.stringify(Array.from(bytes)));
  });
  ctx.setProp(ctx.global, '__lsRandomFill', randomFill);
  randomFill.dispose();
  ctx.unwrapResult(ctx.evalCode(VM_CRYPTO_BOOTSTRAP)).dispose();

  // ── Direct fetch bridge (P3 A2) — async host fn (deferred-promise pattern, like
  // __hostDispatch). Gated by the run's allowDangerous (mirrors asyncfn safeFetch);
  // runs the child's globalThis.fetch and settles with the response + body bytes. ──
  const fetchFn = ctx.newFunction('__lsFetch', (urlHandle, optsHandle) => {
    const url = ctx.getString(urlHandle);
    const reqInit = marshalDecode(JSON.parse(ctx.getString(optsHandle))) as { method?: string; headers?: Record<string, string>; body?: unknown };
    const deferred = ctx.newPromise();
    const settle = (kind: 'v' | 'e', payload: unknown, fallbackMessage: string) => {
      let s: string;
      try {
        s = JSON.stringify(kind === 'v' ? { v: marshalEncode(payload) } : { e: payload });
      } catch {
        s = JSON.stringify({ e: { name: 'QuickJSMarshalError', message: fallbackMessage } });
      }
      ctx.newString(s).consume((h) => deferred.resolve(h));
      pump();
    };
    const run = activeRun;
    if (!run) {
      settle('e', { name: 'Error', message: 'LumiScript QuickJS: no active run for fetch().' }, 'no active run');
    } else if (!run.allowDangerous) {
      settle('e', { name: 'Error', message: 'fetch() requires Allow Dangerous in the QuickJS engine. Use api.utils.http.* for HTTP.' }, 'fetch blocked');
    } else if (!run.hostFetch) {
      // allowDangerous but the host did not pass a captured fetch — should not
      // happen in production (child-entry always supplies _hostFetch when
      // allowDangerous); fail loudly rather than reading a lockdown-nulled global.
      settle('e', { name: 'Error', message: 'fetch() is unavailable: the host did not grant a fetch capability for this run.' }, 'fetch unavailable');
    } else {
      const hostFetch = run.hostFetch;
      void (async () => {
        try {
          const init: RequestInit = { method: reqInit?.method ?? 'GET' };
          if (reqInit?.headers) init.headers = reqInit.headers;
          if (reqInit?.body !== undefined && reqInit?.body !== null) init.body = reqInit.body as BodyInit;
          const res = await hostFetch(url, init);
          const bytes = new Uint8Array(await res.arrayBuffer());
          const headers: Record<string, string> = {};
          res.headers.forEach((v, k) => { headers[k] = v; });
          settle('v', { ok: res.ok, status: res.status, statusText: res.statusText, url: res.url, redirected: res.redirected, headers, bytes }, 'fetch result could not be marshaled');
        } catch (err) {
          settle('e', run.serializeError(err), 'fetch error could not be serialized');
        }
      })();
    }
    void deferred.settled.then(pump);
    return deferred.handle;
  });
  ctx.setProp(ctx.global, '__lsFetch', fetchFn);
  fetchFn.dispose();
  ctx.unwrapResult(ctx.evalCode(VM_FETCH_BOOTSTRAP)).dispose();

  // P3 audit H1 — lock the trusted scaffolding bindings. MUST be the last eval,
  // after api / __hostDispatch / __console / crypto / fetch are built, so frozen.
  ctx.unwrapResult(ctx.evalCode(VM_FREEZE_BOOTSTRAP)).dispose();

  context = ctx;
  return ctx;
  } catch (err) {
    // L3 — never leak the half-built native context on a setup failure.
    try { ctx.dispose(); } catch { /* already dead */ }
    throw err;
  }
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

  // #11 P2/H1 — acquire the run lock BEFORE touching any shared per-run state.
  // The link is established synchronously (no await between reading and replacing
  // runChain) so concurrent callers queue deterministically; then await the prior
  // run before claiming activeRun / currentDeadline / the in-VM data.
  const prior = runChain;
  let releaseRun!: () => void;
  runChain = new Promise<void>((resolve) => { releaseRun = resolve; });
  await prior;

  currentDeadline = Date.now() + opts.timeoutMs;
  activeRun = { dispatch: opts.dispatch, console: opts.console, serializeError: opts.serializeError, allowDangerous: opts.allowDangerous ?? false, hostFetch: opts.hostFetch };
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

  // #11 P2 — per-run handle arena. The body-eval handles below are tracked here
  // and disposed in the `finally`, so a throw can't leak a HOST handle into the
  // never-disposed process-global context (the audit's M4). The stable
  // scaffolding (api / __console / __hostDispatch) is context-lifetime, not
  // per-run; the `.consume`d data/script strings self-dispose; the per-call
  // deferred handles are VM-owned.
  const arena: QuickJSHandle[] = [];
  const track = <T extends QuickJSHandle>(h: T): T => { arena.push(h); return h; };

  try {
    // Per-run bindings only. data crosses with structured marshaling
    // (Date/Map/undefined-keyed fields preserved, parity with asyncfn's
    // by-reference pass); script is plain id/name/type strings. Both overwrite
    // the previous run's globals (acyclic → refcount-freed, no churn).
    ctx.newString(JSON.stringify(marshalEncode(opts.data))).consume((h) => ctx.setProp(ctx.global, '__lsDataJson', h));
    ctx.newString(JSON.stringify(opts.script)).consume((h) => ctx.setProp(ctx.global, '__lsScriptJson', h));
    ctx.unwrapResult(ctx.evalCode(`
      globalThis.data = globalThis.__lsDecode(JSON.parse(globalThis.__lsDataJson));
      globalThis.script = JSON.parse(globalThis.__lsScriptJson);
      globalThis.__lsRequireCache = {};
      globalThis.__lsRequireInProgress = {};
      globalThis.script.require = globalThis.__lsRequire;
      globalThis.__hbs.helpers = Object.assign({}, globalThis.__hbsBuiltins);
      globalThis.__hbs.partials = Object.assign({}, globalThis.__hbsBuiltinPartials);
      globalThis.__hbs.decorators = Object.assign({}, globalThis.__hbsBuiltinDecorators);
    `)).dispose();

    // ── Run the body as an async IIFE; top-level await works because it's async.
    // The resolved value is structured-encoded IN-VM (so Date/Map/etc. returns
    // keep parity); a non-marshalable return (function/symbol/cycle) makes
    // __lsEncode throw → the IIFE rejects → surfaced as a normal body error. ──
    const evalRes = ctx.evalCode(`(async () => {
"use strict";
const console = globalThis.__console;
${opts.code}
})().then(function (r) { return JSON.stringify(globalThis.__lsEncode(r)); })`);
    if (evalRes.error) {
      const e = ctx.dump(track(evalRes.error));
      throw timedOut() ? timeoutError() : toHostError(e);
    }
    const settledP = ctx.resolvePromise(track(evalRes.value));
    pump();
    const settled = await settledP;
    if (settled.error) {
      const e = ctx.dump(track(settled.error));
      throw timedOut() ? timeoutError() : toHostError(e);
    }
    const value = marshalDecode(JSON.parse(ctx.getString(track(settled.value))));
    return value;
  } finally {
    currentDeadline = Number.POSITIVE_INFINITY;
    activeRun = undefined;
    // Dispose every handle this run allocated, even on the throw paths. `.alive`
    // guards against a handle disposed elsewhere; cleanup must never throw.
    for (const h of arena) {
      try { if (h.alive) h.dispose(); } catch { /* swallow — run is over */ }
    }
    releaseRun(); // release the run lock so the next queued run can proceed
  }
}

/**
 * #11 P2 leak oracle (test-only) — the live-object count in the reused VM
 * context, or null if no context has been created yet. QuickJS is refcounted,
 * so a per-run handle leak shows up as deterministic, unbounded growth in this
 * number across runs; a healthy reused context plateaus. Used by
 * qjs-engine-marshal/hardening tests to assert the handle arena leaves nothing
 * behind. Reads runtime.computeMemoryUsage() and disposes its own probe handle.
 */
export function _vmObjectCountForTests(): number | null {
  if (!context) return null;
  const usage = context.runtime.computeMemoryUsage();
  try {
    const stats = context.dump(usage) as Record<string, unknown>;
    const n = stats.obj_count;
    return typeof n === 'number' ? n : null;
  } finally {
    usage.dispose();
  }
}
