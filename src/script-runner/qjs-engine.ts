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
import { enforceBroadcastEmitLimits } from './broadcast-emit-limits.js';
import type { HandleKind, HandleRef, EngineTelemetry } from '../types/script-runner-ipc.js';
import { VM_WEBGLOBALS_BOOTSTRAP } from './vm-webglobals.js';
import { VM_ZOD_BUNDLE } from './generated/vm-zod-bundle.js';
import { VM_HANDLEBARS_BUNDLE } from './generated/vm-handlebars-bundle.js';
import { VM_LS_COMPONENTS_BUNDLE } from './generated/vm-ls-components-bundle.js';
import { VM_LS_ICONS_BUNDLE } from './generated/vm-ls-icons-bundle.js';
import { VM_LS_COUNCIL_PROMPT_BUNDLE } from './generated/vm-ls-council-prompt-bundle.js';

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
  /** Gates the in-VM `fetch` global: only allowDangerous scripts get a working `fetch`.
   *  Both engines route bare `fetch` through the host's SSRF-safe egress path (see `hostFetch`
   *  below), so this only decides whether the capability exists — not how it reaches the network.
   *  Optional with a fail-safe default — absent means the capability is OFF (fetch blocked). */
  allowDangerous?: boolean;
  /** The host-side `fetch` the in-VM bridge calls (child-entry's `makeGuardedHostFetch`, built per
   *  run from the api proxy's dispatch). It forwards the request through `api.utils.http.request` →
   *  the host cors proxy → `safeFetch`, so the in-VM `fetch` gets the same SSRF-safe egress as
   *  `api.utils.http.*` (private hosts blocked unless the user allowlists them) — no raw host `fetch`
   *  is ever exposed to the VM. Absent → the in-VM `fetch` reports the capability is unavailable
   *  (the host did not grant it for this run). */
  hostFetch?: (url: string, init?: RequestInit) => Promise<Response>;
  /** Host-side handle-method dispatcher (`proxy.dispatchOnHandle`), threaded so the
   *  in-VM handle proxies (P4) can route a method call on a held HandleRef back to
   *  the canonical host implementation (same IPC + targetHandle envelope as the
   *  asyncfn path). Absent → in-VM handle methods report the capability is
   *  unavailable (the host did not grant it for this run). */
  dispatchOnHandle?: (targetHandle: HandleRef, method: string, args: unknown[]) => Promise<unknown>;
  /** P5 — dispatch the (function-less) register-handler IPC to the parent when an
   *  in-VM handler is registered. The closure stays in the VM registry. Optional. */
  dispatchRegisterHandler?: (kind: string, handlerId: string, meta: unknown) => void;
  /** P5 — dispatch the unregister-handler IPC to the parent on an in-VM unsub. */
  dispatchUnregisterHandler?: (kind: string, handlerId: string) => void;
  /** P5 inc3c — name-keyed unregister IPC for macro/tool (api.macros/tools.unregister). */
  dispatchUnregisterHandlerNamed?: (kind: string, name: string) => void;
  /** P5 inc3b — broadcast.on uses a SEPARATE IPC (broadcast-subscribe, keyed by subId,
   *  not handlerId/kind). The closure still lives in the VM registry (keyed by subId). */
  dispatchBroadcastSubscribe?: (subId: string, event: string) => void;
  dispatchBroadcastUnsubscribe?: (subId: string) => void;
  /** generateStream — send the StreamRequest / StreamCancel IPC to the parent. The in-VM generator owns
   *  the chunk queue (vmStreams); only these two envelopes cross to the host. */
  dispatchStreamStart?: (requestId: string, method: string, args: unknown[], hasSignal: boolean) => void;
  dispatchStreamCancel?: (requestId: string) => void;
  /** #11 list-methods parity — the run's sync-list snapshots, seeded into the VM so the 6
   *  declared-SYNC list reads (tools.list / macros.list / macros.listInterceptors /
   *  chat.getInjections / chat.listContentProcessors / worldInfo.listInterceptors) return arrays
   *  in-VM instead of falling through to send() → Promise (`api.macros.list().forEach()` would
   *  throw on a Promise). Mirrors the asyncfn proxy's `local*` arrays (api-proxy.ts:876-881),
   *  seeded from the parent's RunScriptRequest. Absent → the lists read empty.
   *  NOTE: seeded per BODY-run; a fired handler reads the last body-run's snapshot (the same
   *  residue caveat as `data`/`script` — see the data-script-residue follow-up). */
  listSnapshots?: {
    tools:                 readonly unknown[];
    macros:                readonly unknown[];
    macroInterceptors:     readonly unknown[];
    chatInjections:        readonly unknown[];
    chatContentProcessors: readonly unknown[];
    worldInfoInterceptors: readonly unknown[];
  };
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
  // api.llm.generateStream — an async generator that pulls host-pushed chunks. The generator object is
  // returned SYNCHRONOUSLY (the IIFE returns the generator, not a promise) so it can be stored on globalThis
  // and iterated in a LATER run/handler. The stream is opened LAZILY on the FIRST iteration (__lsStreamStart
  // is inside the generator body), matching the AsyncFunction engine: a generator that is created but never
  // iterated opens nothing — no leaked stream cell, no wasted upstream generation. Each __lsStreamPull
  // settles with the next event (a JSON string) once a chunk/end arrives; the finally cancels the upstream
  // on an early break. Break the for-await (or let it finish) to end the stream. A user-supplied AbortSignal
  // in options is not yet supported here (a later phase). It does NOT fail at marshaling — a signal has no
  // own-enumerable keys, so the encoder would quietly drop it and the stream would ignore it — so reject it
  // up front with a clear error rather than silently diverging from the AsyncFunction engine (which honours
  // the signal).
  var generateStream = function (args) {
    var messages = args[0], options = args[1];
    if (options && options.signal !== undefined) {
      throw new Error('api.llm.generateStream: AbortSignal is not yet supported in the QuickJS engine (a later phase). Break the for-await (or let it finish) to end the stream.');
    }
    var wireArgs = (options !== undefined) ? [messages, options] : [messages];
    return (async function* () {
      // Lazy open: the request goes out on the FIRST pull, not at creation. __lsStreamStart returns '' when
      // no run is active (a generator iterated outside any run) — nothing to stream, so just end.
      var requestId = globalThis.__lsStreamStart(JSON.stringify(globalThis.__lsEncode(wireArgs)), false);
      if (!requestId) return;
      try {
        while (true) {
          var ev = JSON.parse(await globalThis.__lsStreamPull(requestId));
          if (ev.end) return;
          if (ev.error) {
            var err = new Error((ev.error && ev.error.message) || 'stream error');
            if (ev.error && ev.error.name) err.name = ev.error.name;
            throw err;
          }
          yield globalThis.__lsDecode(ev.chunk);
        }
      } finally {
        globalThis.__lsStreamCancel(requestId);
      }
    })();
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
  // #11 P4 — db.collection. Mirrors the asyncfn buildCollectionProxy (api-proxy.ts):
  // a Zod schema is a non-cloneable ZodType, so it is STRIPPED before IPC and
  // validation happens CHILD-side (here, in-VM) at the insert/insertMany/update
  // boundaries. Returns a specialized validating wrapper — NOT a passable handle
  // (no __handleRef), exactly like the asyncfn Collection — over the underlying
  // handle proxy from the {$:'h'} handle-OUT path.
  var collectionRejectFn = function (method, filter) {
    if (typeof filter === 'function') {
      throw new Error('api.db.' + method + ': function predicates cannot cross the QuickJS engine boundary. ' +
        'Use clear() for "delete all", an object filter (e.g. { field: value }), or query(jsonQueryString); ' +
        'for find/findOne, fetch with find() (no filter) and apply your predicate in script code.');
    }
  };
  var buildVmCollection = function (handle, schema) {
    var validateOnInsert = function (record, context) {
      if (!schema) return;
      try { schema.parse(record); }
      catch (err) { throw new Error('api.db: schema validation failed on ' + context + ': ' + ((err && err.message) ? err.message : String(err))); }
    };
    return {
      insert: function (record) { validateOnInsert(record, 'insert'); return handle.insert(record); },
      insertMany: function (records) {
        if (Array.isArray(records)) for (var i = 0; i < records.length; i++) validateOnInsert(records[i], 'insertMany[' + i + ']');
        return handle.insertMany(records);
      },
      find: function (filter) { collectionRejectFn('find', filter); return filter !== undefined ? handle.find(filter) : handle.find(); },
      findOne: function (filter) { collectionRejectFn('findOne', filter); return handle.findOne(filter); },
      update: function (filter, patch) {
        collectionRejectFn('update', filter);
        if (schema && globalThis.z && globalThis.z.ZodObject && (schema instanceof globalThis.z.ZodObject)) {
          try { schema.partial().parse(patch); }
          catch (err) { throw new Error('api.db: schema validation failed on update (patch): ' + ((err && err.message) ? err.message : String(err))); }
        }
        return handle.update(filter, patch);
      },
      'delete': function (filter) { collectionRejectFn('delete', filter); return handle['delete'](filter); },
      count: function (filter) { collectionRejectFn('count', filter); return filter !== undefined ? handle.count(filter) : handle.count(); },
      clear: function () { return handle.clear(); },
      query: function (jsonQuery) { return handle.query(jsonQuery); },
    };
  };
  var dbCollection = function (a) {
    var name = a[0], opts = a[1];
    var schema = (opts && typeof opts === 'object' && isZod(opts.schema)) ? opts.schema : null;
    var optsForIpc = opts;
    if (schema) {
      optsForIpc = {};
      var keys = Object.keys(opts);
      for (var i = 0; i < keys.length; i++) if (keys[i] !== 'schema') optsForIpc[keys[i]] = opts[keys[i]];
    }
    return send('db.collection', [name, optsForIpc]).then(function (handle) {
      // Parity with the asyncfn proxy's post-dispatch guard (api-proxy.ts): the host
      // registers db.collection as Collection-returning, so a non-handle / wrong-kind
      // return is structurally impossible — but assert it for an actionable error if
      // that host contract ever regresses. NOTE: here 'handle' is the DECODED in-VM
      // proxy (its get-trap exposes __handleRef/kind), not a raw ref.
      if (!(handle && handle.__handleRef === true && handle.kind === 'Collection')) {
        throw new Error('api.db.collection: expected a Collection handle from the host.');
      }
      return buildVmCollection(handle, schema);
    });
  };
  // #11 P5 — handler-registering methods are INTERCEPTED in-VM (the asyncfn proxy
  // that does this runs in the child and is bypassed for quickjs). The user fn is
  // handed UN-marshaled to the host __hostRegisterHandler (which dups its VM handle
  // to survive run-end + sends the function-less register-handler IPC to the parent
  // keyed by the same handlerId); the parent fires it later via fireHandlerInQuickJS.
  // handlerId is UNIQUE per registration (mirrors the asyncfn generateHandlerId), so
  // the parent's register/run/unregister envelopes round-trip it. Returns an unsub fn.
  var registerVmHandler = function (kind, method, fn, meta) {
    if (typeof fn !== 'function') throw new Error('api.' + method + ': handler must be a function.');
    var handlerId = kind + ':' + globalThis.crypto.randomUUID();
    globalThis.__hostRegisterHandler(kind, handlerId, fn, JSON.stringify(globalThis.__lsEncode(meta || {})));
    return function () { globalThis.__hostUnregisterHandler(kind, handlerId); };
  };
  // #11 P5 — the interceptor family (macros.registerInterceptor / chat.register-
  // ContentProcessor / worldInfo.registerInterceptor): (handler, options) returning a
  // sync { id, remove() } handle (per the asyncfn baseline). The child generates the
  // entry id and forwards it as options.id so the parent stores under the SAME id the
  // returned handle exposes (handle.remove() then resolves parent-side). Handler
  // returns string | void; the fire marshals that back.
  var registerInterceptor = function (kind, method, handler, options) {
    if (typeof handler !== 'function') throw new Error('api.' + method + ': handler must be a function.');
    // Nullish (not truthy) guard, parity with the asyncfn options.id-or-generate: a
    // present-but-empty-string id is preserved as the entry id, not regenerated.
    var handlerId = (options && options.id != null) ? options.id : (kind + ':' + globalThis.crypto.randomUUID());
    var optsForIpc = Object.assign({}, options || {}, { id: handlerId });
    globalThis.__hostRegisterHandler(kind, handlerId, handler, JSON.stringify(globalThis.__lsEncode({ options: optsForIpc })));
    return { id: handlerId, remove: function () { globalThis.__hostUnregisterHandler(kind, handlerId); } };
  };
  // #11 P5 inc3b — broadcast.on(event, handler) is a SEPARATE mechanism (subId +
  // broadcast-subscribe IPC, not register-handler). Dups the fn into the VM registry
  // keyed by subId; the parent fires it via broadcast-fire. Returns a sync unsub fn.
  var broadcastOn = function (event, handler) {
    if (typeof handler !== 'function') throw new Error('api.broadcast.on(event, handler): handler must be a function.');
    var subId = 'sub:' + globalThis.crypto.randomUUID();
    globalThis.__hostBroadcastSubscribe(subId, handler, String(event));
    return function () { globalThis.__hostBroadcastUnsubscribe(subId); };
  };
  // #11 P5 inc3c — macro/tool registration: VOID return, NAME-keyed unregister. The
  // handler is dup'd + fired by handlerId (like commands.onInvoked), but the register IPC
  // ALSO carries {name, def} (the host stores the wrapper by NAME) and unregister is BY
  // NAME. The name<->handlerId bridge lives HOST-side (one shared VM context can't be
  // namespaced by scriptId, which is host-stamped), so the VM just sends the name on
  // unregister; the dup is reaped at teardown (asyncfn keeps its closure until teardown
  // too). registerNamedHandler validates fn loud + returns undefined (these methods are
  // canonically sync-void, NOT an unsub fn / handle).
  var registerNamedHandler = function (kind, method, name, def, fn) {
    if (typeof fn !== 'function') throw new Error('api.' + method + ': handler must be a function.');
    var handlerId = kind + ':' + globalThis.crypto.randomUUID();
    globalThis.__hostRegisterHandler(kind, handlerId, fn, JSON.stringify(globalThis.__lsEncode({ name: String(name), def: def })));
  };
  var unregisterNamedHandler = function (kind, name) {
    globalThis.__hostUnregisterHandlerNamed(kind, String(name));
  };
  // #11 P4b Inc 3c-1 — shared GATED register-handler helper (the DOMHandle.on pattern). For
  // per-handle callbacks that hang off a factory openAck (floatWidget.onDragEnd /
  // drawerTab.onActivate / inputBarAction.onClick): dup the fn via __hostRegisterHandler behind
  // the gate so the parent has the canonical handle stored before its lookup; a cancelled flag
  // drops a still-gated registration if unsub runs before the gate resolves; a destroyed handle
  // returns a no-op unsub (never registers). Fires via the existing kind-agnostic fireVmHandler.
  var gatedRegisterHandler = function (kind, method, fn, meta, gateAck, destroyedRef) {
    if (typeof fn !== 'function') throw new Error('api.' + method + ': handler must be a function.');
    if (destroyedRef && destroyedRef.current) return function () {};
    var handlerId = kind + ':' + globalThis.crypto.randomUUID();
    var cancelled = false;
    var register = function () {
      if (cancelled) return;
      globalThis.__hostRegisterHandler(kind, handlerId, fn, JSON.stringify(globalThis.__lsEncode(meta || {})));
    };
    if (gateAck === undefined) { register(); }
    else { globalThis.__lsTrackChain(gateAck.then(register).catch(function () {})); }
    return function () { cancelled = true; globalThis.__hostUnregisterHandler(kind, handlerId); };
  };
  // #11 P4b Inc 1 — string-id DOM handles (mirrors api-proxy.ts buildDOMHandleProxy/inject).
  // elementId is generated UPFRONT (so the handle returns synchronously) + threaded via the
  // @internal _elementId option so the canonical adopts the SAME id; methods dispatch via
  // plain send('ui._dom.*', [elementId, ...]) — the host routes by method-prefix + args[0],
  // IGNORING targetHandle (host-dispatcher.ts:3839), so no HandleRef is needed. Stable-id
  // dedup is host-side (__hostAllocElementId, cross-run). Each void dispatch is gateOrFire'd
  // (un-gated fires now; a .root behind a future open-ack queues behind it — P4b Inc 2) +
  // __lsTrackChain'd so the run-loop flush drains un-awaited calls.
  var allocElementId = function (options) {
    var sid = options && options.id;
    return (sid === undefined || sid === null)
      ? globalThis.crypto.randomUUID()
      : globalThis.__hostAllocElementId(String(sid), globalThis.crypto.randomUUID());
  };
  var buildDomHandle = function (elementId, gateAck) {
    var gateOrFire = function (thunk) { return (gateAck === undefined) ? thunk() : gateAck.then(thunk); };
    var fireVoid = function (method, args) {
      globalThis.__lsTrackChain(gateOrFire(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      id: elementId,
      update: function (html) { fireVoid('ui._dom.update', [elementId, html]); },
      remove: function () { fireVoid('ui._dom.remove', [elementId]); },
      makeDraggable: function (handleSelector) {
        fireVoid('ui._dom.makeDraggable', (handleSelector !== undefined) ? [elementId, handleSelector] : [elementId]);
      },
      injectChild: function (target, html, options) {
        var childElementId = allocElementId(options);
        var fullOptions = Object.assign({}, options, { _elementId: childElementId });
        fireVoid('ui._dom.injectChild', [elementId, target, html, fullOptions]);
        return buildDomHandle(childElementId, gateAck);
      },
      // P4b Inc 1b — DOMHandle.on(event, handler, options?): a per-element DOM event
      // listener. Same register-handler path as commands.onInvoked (the host dups the fn
      // + fires it via RunHandlerRequest with [DOMEventData]); the elementId/event/options
      // ride in meta (spread top-level → kind 'domEventListener' variant). When this handle
      // is a gated .root (showAdvancedModal/createFloatWidget, P4b Inc 2), the register is
      // queued behind the open-ack so the parent has the canonical DOMHandle stored under
      // elementId before its .on lookup runs. Returns a sync unsub; a cancelled-flag guard
      // drops a still-gated registration if unsub runs before the gate resolves.
      on: function (event, handler, options) {
        if (typeof handler !== 'function') throw new Error('DOMHandle.on(event, handler): handler must be a function.');
        var handlerId = 'domEventListener:' + globalThis.crypto.randomUUID();
        var meta = { elementId: elementId, event: String(event) };
        if (options !== undefined) meta.options = options;
        var cancelled = false;
        var register = function () {
          if (cancelled) return;
          globalThis.__hostRegisterHandler('domEventListener', handlerId, handler, JSON.stringify(globalThis.__lsEncode(meta)));
        };
        if (gateAck === undefined) {
          register();
        } else {
          globalThis.__lsTrackChain(gateAck.then(register).catch(function () {}));
        }
        return function () {
          cancelled = true;
          globalThis.__hostUnregisterHandler('domEventListener', handlerId);
        };
      },
      read: function (options) {
        return gateOrFire(function () { return send('ui._dom.read', (options !== undefined) ? [elementId, options] : [elementId]); });
      },
    };
  };
  var injectDom = function (method, target, html, options) {
    var elementId = allocElementId(options);
    var fullOptions = Object.assign({}, options, { _elementId: elementId });
    globalThis.__lsTrackChain(send(method, [target, html, fullOptions]).catch(function () {}));
    return buildDomHandle(elementId);
  };
  // #11 P5-1 — in-VM component-mount interceptor (mirrors api-proxy.ts dispatchComponentMount +
  // buildMounted*Proxy). Mount-options can carry fn callbacks (onChange/onCommit/onClick/...) which the
  // marshaler cannot encode; strip each fn out, register it under the EXISTING componentCallback kind
  // (dup'd into vmHandlerHandles via __hostRegisterComponentCallback — NO register-handler IPC: the
  // parent routes component_callback fires via the componentCallbackRoutes map it builds from the mount
  // _callbacks, matching asyncfn's child-side-only registration), thread the name->handlerId map via
  // _callbacks, and dispatch the fn-less options fire-and-forget. Returns a sync handle whose methods
  // dispatch ui._components.* (routed host-side by componentId=args[0], no targetHandle needed). The
  // handle SHAPE (base / value+getValue / collapsible+body/expand/...) mirrors the asyncfn per-method
  // builders; the value/collapsible method sets are enumerated to match.
  var LS_VALUE_MOUNTS = { mountSwitch: 1, mountTextInput: 1, mountTextArea: 1, mountNumericInput: 1, mountNumberStepper: 1, mountCheckbox: 1, mountRangeSlider: 1, mountSelect: 1, mountMultiSelect: 1, mountFolderDropdown: 1, mountModelCombobox: 1, mountPagination: 1 };
  var componentVoid = function (componentId, method, extra) {
    globalThis.__lsTrackChain(send('ui._components.' + method, [componentId].concat(extra || [])).catch(function () {}));
  };
  var componentValue = function (componentId, method) {
    return send('ui._components.' + method, [componentId]);
  };
  var buildComponentHandle = function (componentId, handlerIds, shape, bodyElementId) {
    var handle = {
      id: componentId,
      update: function (patch) { componentVoid(componentId, 'update', [patch === undefined ? {} : patch]); },
      destroy: function () {
        componentVoid(componentId, 'destroy', []);
        // Eager reap — drop the callback dups so the component's lifecycle doesn't pin the script
        // past its unmount (mirrors asyncfn's ctx.unregisterHandlerClosure loop in destroy()).
        for (var i = 0; i < handlerIds.length; i++) globalThis.__hostUnregisterComponentCallback(handlerIds[i]);
      },
    };
    if (shape === 'value') {
      handle.getValue = function () { return componentValue(componentId, 'getValue'); };
    } else if (shape === 'collapsible') {
      handle.body = buildDomHandle(bodyElementId);
      handle.isExpanded = function () { return componentValue(componentId, 'isExpanded'); };
      handle.expand = function () { componentVoid(componentId, 'expand', []); };
      handle.collapse = function () { componentVoid(componentId, 'collapse', []); };
      handle.toggle = function () { componentVoid(componentId, 'toggle', []); };
    }
    return handle;
  };
  var mountComponent = function (method, target, options) {
    var methodName = method.slice('ui.components.'.length);
    var componentId = globalThis.crypto.randomUUID();
    var props = {};
    var callbacks = {};
    var handlerIds = [];
    var opts = options || {};
    var keys = Object.keys(opts);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = opts[key];
      if (typeof val === 'function') {
        var handlerId = 'componentCallback:' + globalThis.crypto.randomUUID();
        globalThis.__hostRegisterComponentCallback(handlerId, val);
        callbacks[key] = handlerId;
        handlerIds.push(handlerId);
      } else {
        props[key] = val;
      }
    }
    var shape = LS_VALUE_MOUNTS[methodName] ? 'value' : (methodName === 'mountCollapsibleSection' ? 'collapsible' : 'base');
    var dispatchProps = Object.assign({}, props, { _componentId: componentId, _callbacks: callbacks });
    var bodyElementId;
    if (shape === 'collapsible') {
      bodyElementId = globalThis.crypto.randomUUID();
      dispatchProps._bodyElementId = bodyElementId;
    }
    var targetId = (target && target.id !== undefined) ? target.id : target;
    globalThis.__lsTrackChain(send(method, [targetId, dispatchProps]).catch(function () {}));
    return buildComponentHandle(componentId, handlerIds, shape, bodyElementId);
  };
  // #11 P4b Inc 2 — GATED factory handles (showAdvancedModal / createFloatWidget). The first
  // consumers of buildDomHandle's gateAck path. ids are generated UPFRONT + threaded via the
  // @internal _modalId/_widgetId/_rootElementId so the canonical adopts them; openAck =
  // send('ui.showAdvancedModal' | 'ui.createFloatWidget', [optsWithIds]) resolves when the FE
  // has mounted+bound. .root = buildDomHandle(rootElementId, openAck) (gated). Each void method
  // queues behind openAck via gated() (__lsTrackChain(openAck.then(send).catch())) — the in-VM
  // send is NOT auto-tracked (unlike asyncfn proxy.dispatch), so we MUST trackChain the openAck
  // AND each method, else the run-loop flush can't drain them. Inc 2 was callback-free; the
  // callbacks + FE-driven notices landed in Inc 3c (onDismiss/onDragEnd via gated register-handler
  // dups; the dismissed/position notices via the host->VM bridge -- notifyVmModalDismissed /
  // notifyVmWidgetPosition). dismissed/destroyedRef flip on the openAck-reject path (the path the
  // VM owns) AND on the notice bridge; dismiss() matches asyncfn = does NOT flip locally.
  var buildAdvancedModalHandle = function (modalId, rootElementId, openAck, dismissedRef) {
    var gated = function (method, args) {
      globalThis.__lsTrackChain(openAck.then(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      modalId: modalId,
      root: buildDomHandle(rootElementId, openAck),
      get dismissed() { return dismissedRef.current; },
      setTitle: function (title) { if (dismissedRef.current) return; gated('ui._advModal.setTitle', [modalId, title]); },
      dismiss: function () { if (dismissedRef.current) return; gated('ui._advModal.dismiss', [modalId]); },
      // P4b Inc 3c-2b — onDismiss: already-dismissed fast-path fires on the next microtask with the
      // recorded reason; else dup the fn host-side (synth handlerId, NO register IPC -- it is a
      // local listener, parity with the asyncfn listeners Set) so the dismiss bridge can fire it
      // via fireHandlerInQuickJS. unsub drops the dup + the per-modal listener record.
      onDismiss: function (fn) {
        if (typeof fn !== 'function') throw new Error('api.ui.showAdvancedModal(...).onDismiss(fn): handler must be a function.');
        if (dismissedRef.current) {
          var reason = dismissedRef.reason;
          globalThis.queueMicrotask(function () { try { fn(reason); } catch (e) {} });
          return function () {};
        }
        var handlerId = 'advancedModalDismiss:' + globalThis.crypto.randomUUID();
        globalThis.__hostRegisterModalDismiss(String(modalId), handlerId, fn);
        return function () { globalThis.__hostUnregisterModalDismiss(String(modalId), handlerId); };
      },
    };
  };
  var showAdvancedModal = function (options) {
    var modalId = globalThis.crypto.randomUUID();
    var rootElementId = globalThis.crypto.randomUUID();
    var optsWithIds = Object.assign({}, options, { _modalId: modalId, _rootElementId: rootElementId });
    var dismissedRef = { current: false, reason: 'user' };
    // P4b Inc 3c-2b — hand the dismissedRef cell to the HOST (dup'd + held by modalId) so an
    // advanced-modal-dismissed notice can flip it + record the reason; onDismiss reads the same object.
    // The cell is NOT exposed on globalThis (audit security-containment#0) — user code can't reach it.
    globalThis.__hostRegisterModal(String(modalId), dismissedRef);
    // first-writer-wins on reason (asyncfn parity, api-proxy.ts:2384-2399): if a host dismiss notice
    // already flipped the cell with the real reason, the openAck-reject must NOT clobber it with 'teardown'.
    var openAck = globalThis.__lsTrackChain(send('ui.showAdvancedModal', [optsWithIds]).catch(function (err) { if (!dismissedRef.current) { dismissedRef.current = true; dismissedRef.reason = 'teardown'; } throw err; }));
    return buildAdvancedModalHandle(modalId, rootElementId, openAck, dismissedRef);
  };
  var buildFloatWidgetHandle = function (widgetId, rootElementId, openAck, destroyedRef, positionCache, visibleCache) {
    var gated = function (method, args) {
      globalThis.__lsTrackChain(openAck.then(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      widgetId: widgetId,
      root: buildDomHandle(rootElementId, openAck),
      moveTo: function (x, y) { if (destroyedRef.current) return; positionCache.x = x; positionCache.y = y; gated('ui._floatWidget.moveTo', [widgetId, x, y]); },
      getPosition: function () { return { x: positionCache.x, y: positionCache.y }; },
      setVisible: function (visible) { if (destroyedRef.current) return; visibleCache.current = visible; gated('ui._floatWidget.setVisible', [widgetId, visible]); },
      isVisible: function () { return visibleCache.current; },
      destroy: function () { if (destroyedRef.current) return; destroyedRef.current = true; globalThis.__hostDropWidget(String(widgetId)); gated('ui._floatWidget.destroy', [widgetId]); },
      // P4b Inc 3c-1 — onDragEnd: gated register-handler (kind floatWidgetDragEnd); the handler
      // receives the drag [pos] as its arg (delivered by the fire). getPosition()-reflects-drag
      // INSIDE the closure still needs the position-notice -> positionCache bridge (3c-2).
      onDragEnd: function (handler) { return gatedRegisterHandler('floatWidgetDragEnd', 'floatWidget.onDragEnd', handler, { widgetId: widgetId }, openAck, destroyedRef); },
    };
  };
  var createFloatWidget = function (options) {
    var widgetId = globalThis.crypto.randomUUID();
    var rootElementId = globalThis.crypto.randomUUID();
    var optsWithIds = Object.assign({}, options, { _widgetId: widgetId, _rootElementId: rootElementId });
    var destroyedRef = { current: false };
    var ip = (options && options.initialPosition) || {};
    var positionCache = { x: (ip.x != null) ? ip.x : 0, y: (ip.y != null) ? ip.y : 0 };
    var visibleCache = { current: true };
    // P4b Inc 3c-2a — hand the positionCache cell to the HOST (dup'd + held by widgetId) so a
    // float-widget-position notice can update it (getPosition reads the same object). The cell is
    // NOT exposed on globalThis (audit security-containment#0) — user code can't reach it.
    globalThis.__hostRegisterWidget(String(widgetId), positionCache);
    var openAck = globalThis.__lsTrackChain(send('ui.createFloatWidget', [optsWithIds]).catch(function (err) { destroyedRef.current = true; throw err; }));
    return buildFloatWidgetHandle(widgetId, rootElementId, openAck, destroyedRef, positionCache, visibleCache);
  };
  // #11 P4b Inc 3b — the remaining CALLBACK-FREE gated factories (same shape as Inc 2). The
  // onActivate callback (drawerTab) is DEFERRED to 3c-1 (gated register-handler kind).
  var buildDrawerTabHandle = function (tabId, rootElementId, openAck, destroyedRef) {
    var gated = function (method, args) {
      globalThis.__lsTrackChain(openAck.then(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      tabId: tabId,
      root: buildDomHandle(rootElementId, openAck),
      setTitle: function (title) { if (destroyedRef.current) return; gated('ui._drawerTab.setTitle', [tabId, title]); },
      setShortName: function (shortName) { if (destroyedRef.current) return; gated('ui._drawerTab.setShortName', [tabId, shortName]); },
      setBadge: function (text) { if (destroyedRef.current) return; gated('ui._drawerTab.setBadge', [tabId, text]); },
      activate: function () { if (destroyedRef.current) return; gated('ui._drawerTab.activate', [tabId]); },
      destroy: function () { if (destroyedRef.current) return; destroyedRef.current = true; gated('ui._drawerTab.destroy', [tabId]); },
      // P4b Inc 3c-1 — onActivate: gated register-handler (kind drawerTabActivate), no-arg fire.
      onActivate: function (handler) { return gatedRegisterHandler('drawerTabActivate', 'drawerTab.onActivate', handler, { tabId: tabId }, openAck, destroyedRef); },
    };
  };
  var registerDrawerTab = function (options) {
    if (typeof (options && options.id) !== 'string' || options.id.length === 0) throw new Error('api.ui.registerDrawerTab: options.id must be a non-empty string.');
    if (typeof options.title !== 'string' || options.title.length === 0) throw new Error('api.ui.registerDrawerTab: options.title must be a non-empty string.');
    var tabId = options.id;
    var rootElementId = globalThis.crypto.randomUUID();
    var destroyedRef = { current: false };
    var optsWithIds = Object.assign({}, options, { _rootElementId: rootElementId });
    var openAck = globalThis.__lsTrackChain(send('ui.registerDrawerTab', [optsWithIds]).catch(function (err) { destroyedRef.current = true; throw err; }));
    return buildDrawerTabHandle(tabId, rootElementId, openAck, destroyedRef);
  };
  var buildAppMountHandle = function (mountId, rootElementId, openAck, destroyedRef) {
    var gated = function (method, args) {
      globalThis.__lsTrackChain(openAck.then(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      mountId: mountId,
      root: buildDomHandle(rootElementId, openAck),
      setVisible: function (visible) { if (destroyedRef.current) return; gated('ui._appMount.setVisible', [mountId, visible]); },
      destroy: function () { if (destroyedRef.current) return; destroyedRef.current = true; gated('ui._appMount.destroy', [mountId]); },
    };
  };
  var mountApp = function (options) {
    var opts = options || {};
    var mountId = globalThis.crypto.randomUUID();
    var rootElementId = globalThis.crypto.randomUUID();
    var destroyedRef = { current: false };
    var optsWithIds = Object.assign({}, opts, { _mountId: mountId, _rootElementId: rootElementId });
    var openAck = globalThis.__lsTrackChain(send('ui.mountApp', [optsWithIds]).catch(function (err) { destroyedRef.current = true; throw err; }));
    return buildAppMountHandle(mountId, rootElementId, openAck, destroyedRef);
  };
  // #11 P4b Inc 3c-1 — registerInputBarAction: a gated factory with NO .root (host reads
  // options.id as actionId; raw options on the wire). setLabel/setSubtitle/setEnabled/destroy
  // are gated-void; onClick is a gated register-handler (kind inputBarActionClick, no-arg fire).
  var buildInputBarActionHandle = function (actionId, openAck, destroyedRef) {
    var gated = function (method, args) {
      globalThis.__lsTrackChain(openAck.then(function () { return send(method, args); }).catch(function () {}));
    };
    return {
      actionId: actionId,
      setLabel: function (label) { if (destroyedRef.current) return; gated('ui._inputBar.setLabel', [actionId, label]); },
      setSubtitle: function (subtitle) { if (destroyedRef.current) return; gated('ui._inputBar.setSubtitle', [actionId, subtitle]); },
      setEnabled: function (enabled) { if (destroyedRef.current) return; gated('ui._inputBar.setEnabled', [actionId, enabled]); },
      destroy: function () { if (destroyedRef.current) return; destroyedRef.current = true; gated('ui._inputBar.destroy', [actionId]); },
      onClick: function (handler) { return gatedRegisterHandler('inputBarActionClick', 'inputBarAction.onClick', handler, { actionId: actionId }, openAck, destroyedRef); },
    };
  };
  var registerInputBarAction = function (options) {
    if (typeof (options && options.id) !== 'string' || options.id.length === 0) throw new Error('api.ui.registerInputBarAction: options.id must be a non-empty string.');
    var actionId = options.id;
    var destroyedRef = { current: false };
    var openAck = globalThis.__lsTrackChain(send('ui.registerInputBarAction', [options]).catch(function (err) { destroyedRef.current = true; throw err; }));
    return buildInputBarActionHandle(actionId, openAck, destroyedRef);
  };
  // #11 P4b Inc 3b-2 — showModal: NOT the gated-void factory shape. openRequestId threads
  // INSIDE options; the result is an EAGER Promise property (showModalAck.then(awaitResult)) the
  // user awaits; close() returns a Promise. Both are __lsTrackChain'd so an un-awaited
  // result/close drains at flush (parity with asyncfn auto-trackChain on proxy.dispatch) +
  // a rejection is observed (no leak); the user await consumes the same promise. A failed
  // open surfaces via result/close rejecting (showModalAck.catch rethrows).
  var showModal = function (items, options) {
    var openRequestId = globalThis.crypto.randomUUID();
    var optsWithIds = Object.assign({}, options, { openRequestId: openRequestId });
    var showModalAck = globalThis.__lsTrackChain(send('ui.showModal', [items, optsWithIds]).catch(function (err) { throw (err instanceof Error) ? err : new Error(String(err)); }));
    return {
      openRequestId: openRequestId,
      result: globalThis.__lsTrackChain(showModalAck.then(function () { return send('ui._modal.awaitResult', [openRequestId]); })),
      close: function () { return globalThis.__lsTrackChain(showModalAck.then(function () { return send('ui._modal.close', [openRequestId]); })); },
    };
  };
  // #11 list-methods parity — read a seeded sync-list snapshot (api-proxy.ts local* arrays) by key,
  // returning a fresh array of SHALLOW-cloned entries (matches asyncfn's .map(x => ({...x}))).
  var __lsListSnap = function (key) {
    var snaps = globalThis.__lsListSnapshots;
    var arr = snaps && snaps[key];
    if (!Array.isArray(arr)) return []; // unseeded, or a script clobbered its own snapshot global
    return arr.map(function (e) { return Object.assign({}, e); });
  };
  var make = function (path) {
    return new Proxy(function () {}, {
      get: function (_t, prop) {
        if (typeof prop !== 'string' || prop === 'then') return undefined;
        return make(path ? path + '.' + prop : prop);
      },
      apply: function (_t, _thisArg, args) {
        var a = args || [];
        // #11 list-methods parity — the 6 declared-SYNC reads, served from the seeded run snapshot.
        // Falling through to send() would yield a Promise that breaks list().forEach() on user code.
        if (path === 'tools.list')                 return __lsListSnap('tools');
        if (path === 'macros.list')                return __lsListSnap('macros');
        if (path === 'macros.listInterceptors')    return __lsListSnap('macroInterceptors');
        if (path === 'chat.getInjections')         return __lsListSnap('chatInjections');
        if (path === 'chat.listContentProcessors') return __lsListSnap('chatContentProcessors');
        if (path === 'worldInfo.listInterceptors') return __lsListSnap('worldInfoInterceptors');
        if (path === 'llm.generateStructured') return generateStructured(a);
        if (path === 'llm.generateStream') return generateStream(a);
        if (path === 'llm.generateWithTools') return generateWithTools(a);
        if (path === 'utils.template.compile') return templateCompile(a);
        if (path === 'utils.template.registerHelper') return templateRegisterHelper(a);
        if (path === 'utils.template.render') return templateRender(a);
        if (path === 'db.collection') return dbCollection(a);
        // P4b Inc 1 — string-id DOM injection. Allocates elementId in-VM, threads _elementId,
        // un-gated fire-and-forget send, returns a sync DOMHandle (update/remove/makeDraggable/
        // injectChild/read). injectAtMessage's a[0] is a messageId (positional, same shape).
        if (path === 'ui.dom.inject') return injectDom('ui.dom.inject', a[0], a[1], a[2]);
        if (path === 'ui.dom.injectAtMessage') return injectDom('ui.dom.injectAtMessage', a[0], a[1], a[2]);
        // P4b Inc 2 — gated factory handles. MUST intercept before the generic send() below,
        // else they fall through to the host handle-OUT path ({$:'h'} async reflective proxy)
        // instead of a sync plain-object handle.
        if (path === 'ui.showAdvancedModal') return showAdvancedModal(a[0]);
        if (path === 'ui.createFloatWidget') return createFloatWidget(a[0]);
        // P4b Inc 3b — remaining callback-free gated factories (same intercept-before-send rule).
        if (path === 'ui.registerDrawerTab') return registerDrawerTab(a[0]);
        if (path === 'ui.mountApp') return mountApp(a[0]);
        if (path === 'ui.registerInputBarAction') return registerInputBarAction(a[0]);
        if (path === 'ui.showModal') return showModal(a[0], a[1]);
        // #11 P5-1 — component mounts: strip fn callbacks (register under the componentCallback kind),
        // dispatch fn-less options, return a sync handle. Prefix match covers every mount* method. MUST
        // precede the generic send() below — else the fn-valued options hit the marshaler function-throw.
        if (path.indexOf('ui.components.mount') === 0) return mountComponent(path, a[0], a[1]);
        if (path === 'commands.onInvoked') return registerVmHandler('commandsOnInvoked', 'commands.onInvoked(handler)', a[0], {});
        if (path === 'macros.registerInterceptor') return registerInterceptor('macroInterceptor', 'macros.registerInterceptor', a[0], a[1]);
        if (path === 'chat.registerContentProcessor') return registerInterceptor('contentProcessor', 'chat.registerContentProcessor', a[0], a[1]);
        if (path === 'worldInfo.registerInterceptor') return registerInterceptor('worldInfoInterceptor', 'worldInfo.registerInterceptor', a[0], a[1]);
        // P5 inc3a — clean standalone subscription kinds (single-arg handler, unsub fn).
        if (path === 'ui.events.onKeyboardChange') return registerVmHandler('uiKeyboardChange', 'ui.events.onKeyboardChange', a[0], {});
        if (path === 'ui.events.onDrawerChange') return registerVmHandler('uiDrawerChange', 'ui.events.onDrawerChange', a[0], {});
        if (path === 'ui.events.onSettingsChange') return registerVmHandler('uiSettingsChange', 'ui.events.onSettingsChange', a[0], {});
        if (path === 'oauth.onCallback') return registerVmHandler('oauthCallback', 'oauth.onCallback', a[0], {});
        // ui.dom.delegate(selector, event, handler, options?) — handler is a[2]; the
        // selector/event/options ride in the register IPC (meta), the parent binds the
        // delegated listener. Returns an unsub fn.
        if (path === 'ui.dom.delegate') return registerVmHandler('domDelegate', 'ui.dom.delegate', a[2], { selector: a[0], event: a[1], options: a[3] || {} });
        // P5 inc3d — chat.onMessageTag(tagName, handler, options?). HANDLER IS a[1]; tagName
        // + options ride in meta (spread TOP-LEVEL by dispatchRegisterHandler, so msg.tagName /
        // msg.options match the messageTagHandler IPC variant byte-for-byte vs asyncfn). NOT the
        // interceptor helper (that nests under options + injects id; here the host injects id +
        // options is carried RAW). Returns a sync unsub fn; fire arg is [MessageTagEvent].
        if (path === 'chat.onMessageTag') return registerVmHandler('messageTagHandler', 'chat.onMessageTag', a[1], { tagName: a[0], options: a[2] });
        // P5 inc3b — broadcast.on(event, handler): separate broadcast-subscribe IPC.
        if (path === 'broadcast.on') return broadcastOn(a[0], a[1]);
        // P5 inc3c — macros/tools registration. PULL-mode macro + tools register a
        // handler fn (dup'd + fired by handlerId); the register IPC also carries {name,
        // def} and unregister is BY NAME. PUSH-mode macro (no handler) + updateValue are
        // fire-and-forget passthroughs (sync void, swallowed rejection — asyncfn parity).
        if (path === 'macros.register') {
          if (a[2] === undefined) { globalThis.__lsTrackChain(send(path, a).catch(function () {})); return; } // push-mode (handler===undefined); trackChain so the run-loop flush drains it (asyncfn parity)
          return registerNamedHandler('macro', 'macros.register', a[0], a[1], a[2]);  // pull (validates fn)
        }
        if (path === 'macros.updateValue') { globalThis.__lsTrackChain(send(path, a).catch(function () {})); return; }
        if (path === 'macros.unregister') { unregisterNamedHandler('macro', a[0]); return; }
        if (path === 'tools.register') {
          var __toolFn = a[2];
          if (typeof __toolFn !== 'function') throw new Error('api.tools.register: handler must be a function.');
          // ToolHandler signature is (args, api, ctx?) — the host fires with [toolArgs] or
          // [toolArgs, toolCtx] (api is NOT on the wire); re-inject the in-VM api as arg 1.
          return registerNamedHandler('tool', 'tools.register', a[0], a[1], function (toolArgs, toolCtx) {
            return __toolFn(toolArgs, rootApi, toolCtx);
          });
        }
        if (path === 'tools.unregister') { unregisterNamedHandler('tool', a[0]); return; }
        // broadcast.emit — sync-VOID with the SAME limits the asyncfn proxy enforces (parity): serializability
        // (JSON.stringify throws in-VM), a size cap + per-script rate limit (__lsBroadcastEmitCheck throws
        // host-side via the shared enforcer). The catch-all would skip the limits AND return a promise
        // instead of void. Then fire-forget-dispatch like the sync-void group below.
        if (path === 'broadcast.emit') {
          var __pl = a[1];
          var __bytes;
          try { __bytes = __pl === undefined ? 0 : JSON.stringify(__pl).length; }
          catch (e) { throw new Error('api.broadcast.emit: payload is not JSON-serialisable (' + (e && e.message) + '). Broadcast payloads must round-trip through structured-clone IPC.'); }
          globalThis.__lsBroadcastEmitCheck(__bytes);
          globalThis.__lsTrackChain(send(path, a).catch(function () {}));
          return;
        }
        // flush#1 — asyncfn-classified sync-VOID methods (mkSyncVoidFireForget): swallow the
        // rejection AND __lsTrackChain the fire-and-forget dispatch so the run-loop flush drains it,
        // then return void. Falling through to the catch-all would return an un-tracked, un-caught
        // Promise (weaker ordering + a silent in-VM unhandled rejection on host-dispatch failure).
        if (path === 'ui.toast' || path === 'ui.dom.cleanup' || path === 'commands.register' || path === 'commands.unregister') {
          globalThis.__lsTrackChain(send(path, a).catch(function () {}));
          return;
        }
        return send(path, a);
      },
    });
  };
  // Capture the root api proxy once so tool handlers can re-inject it (see tools.register).
  var rootApi = make('');
  return rootApi;
};
`;

// #11 P4 — in-VM handle proxy factory. A host HandleRef (db.collection / addStyle
// return, or a held handle decoded from an arg) crosses Boundary #2 as {$:'h'} and
// the marshaler twin's dec() turns it into one of these: a reflective Proxy whose
// methods dispatch via __hostHandleDispatch(id, kind, method, argsJson) — the
// handle-method analogue of __hostDispatch (which produces the host's
// targetHandle-bearing ApiProxyRequest). Cached per-run in __lsVmHandles by id so
// two decodes of the same handle return the SAME object (identity parity with the
// asyncfn proxy). The table is per-run-mutable (reset each run), NOT frozen.
const VM_HANDLE_BOOTSTRAP = `
globalThis.__lsVmHandleProxy = function (id, kind) {
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
  var table = globalThis.__lsVmHandles || (globalThis.__lsVmHandles = {});
  if (Object.prototype.hasOwnProperty.call(table, id)) return table[id];
  var proxy = new Proxy(function () {}, {
    get: function (_t, prop) {
      if (prop === '__handleRef') return true;
      if (prop === 'id') return id;
      if (prop === 'kind') return kind;
      // Not thenable (so 'await handle' does not try to call .then) and no symbol props.
      if (typeof prop !== 'string' || prop === 'then') return undefined;
      return function () {
        var args = Array.prototype.slice.call(arguments);
        return Promise.resolve(globalThis.__hostHandleDispatch(id, kind, prop, JSON.stringify(globalThis.__lsEncode(args)))).then(unwrap);
      };
    },
  });
  table[id] = proxy;
  return proxy;
};
`;

// #11 P5 — the in-VM handler-call trampoline. fireHandlerInQuickJS hands it the
// stored handler fn + a decoded args array; it applies the fn, awaits a (possibly
// async) result, and encodes it to the wire (mirroring the body-run return path).
// Errors propagate as a rejection → resolvePromise's settled.error on the host.
const VM_HANDLER_BOOTSTRAP = `
globalThis.__lsCallHandler = function (fn, args) {
  return Promise.resolve(fn.apply(undefined, args || [])).then(function (r) {
    return JSON.stringify(globalThis.__lsEncode(r));
  });
};
`;

// #11 P3 D — in-VM script.require. User-library SOURCE is fetched via the
// existing 'script.fetchLibrary' dispatch, then compiled + run INSIDE the VM
// (replacing the host AsyncFunctionCtor at api-proxy.ts:4582) so library code is
// isolated like the main script. Per-run cache + circular detection. `ls:*`
// built-ins are host-side TS factories whose function-bearing return can't be
// marshaled across the VM boundary, so they're bundled in-VM (vm-ls-*-bundle.ts →
// globalThis.__lsBuiltins) and their factory is invoked against globalThis.api on
// require — parity with the asyncfn builtin-library-registry.
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
    var loading = globalThis.__lsRequireLoading;
    if (typeof nameOrId !== 'string' || nameOrId.length === 0) {
      return Promise.reject(new Error('script.require: name must be a non-empty string'));
    }
    if (nameOrId.indexOf('ls:') === 0) {
      // In-VM built-in libraries: invoke the bundled factory against globalThis.api
      // (parity with the asyncfn builtin-library-registry). Cached per-run like user
      // libs; sync (factories don't await). globalThis.__lsBuiltins is populated +
      // frozen at context bootstrap from the vm-ls-*-bundle.ts bundles.
      if (Object.prototype.hasOwnProperty.call(cache, nameOrId)) return Promise.resolve(cache[nameOrId]);
      var factory = globalThis.__lsBuiltins && globalThis.__lsBuiltins[nameOrId];
      if (typeof factory !== 'function') {
        return Promise.reject(new Error('script.require: built-in library "' + nameOrId + '" not found'));
      }
      try {
        var ex = factory(globalThis.api);
        cache[nameOrId] = ex;
        return Promise.resolve(ex);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    if (Object.prototype.hasOwnProperty.call(cache, nameOrId)) return Promise.resolve(cache[nameOrId]);
    // inProgress is set only WHILE a library body executes, so a require reaching it is a nested (circular)
    // require. loading is set for the whole in-flight load (fetch + body), so a require reaching it is a
    // CONCURRENT sibling (e.g. Promise.all([require(x), require(x)])) that hasn't started the body yet —
    // hand it the same in-flight promise instead of firing a second fetchLibrary. Order matters: circular
    // (inProgress) is checked before concurrent (loading).
    if (inProgress[nameOrId]) return Promise.reject(new Error('script.require: circular dependency detected for "' + nameOrId + '"'));
    if (loading[nameOrId]) return loading[nameOrId];
    var p = hostCall('script.fetchLibrary', [nameOrId]).then(function (libInfo) {
      inProgress[nameOrId] = true;
      var done = function () { delete inProgress[nameOrId]; };
      try {
        var libExports = {};
        var libModule = { exports: libExports };
        var libScript = { id: libInfo.id, name: libInfo.name, type: 'library', require: globalThis.__lsRequire };
        var silent = { log: function () {}, warn: function () {}, error: function () {}, info: function () {} };
        var libFetch = globalThis.fetch; // the gated in-VM fetch (routes through __lsFetch, enforces the run allowDangerous) — same fetch the body gets
        var libFn = new AsyncFunction('api', 'data', 'script', '__console', 'exports', 'module', 'fetch', 'Bun', 'process', '"use strict";\\nconst console = __console;\\n' + libInfo.code + '\\n');
        return Promise.resolve(libFn(globalThis.api, {}, libScript, silent, libExports, libModule, libFetch, undefined, undefined)).then(function () {
          done();
          cache[nameOrId] = libModule.exports;
          return libModule.exports;
        }, function (err) { done(); throw err; });
      } catch (e) { done(); throw e; }
    });
    // Drop the in-flight marker on ANY settle (fetch reject, body throw, or success), so a failed load can
    // be retried and a completed one falls through to the value cache above.
    loading[nameOrId] = p;
    var clearLoading = function () { if (loading[nameOrId] === p) delete loading[nameOrId]; };
    p.then(clearLoading, clearLoading);
    return p;
  };
})();
`;

// #11 P4b Inc 1 — intra-run deferred-chain drain (port of api-proxy.ts trackChain/flush,
// :807-858). The qjs run-loop awaits ONLY the body IIFE, then nulls activeRun; an un-awaited
// dispatch (esp. a gated factory method queued behind an FE open-ack) settles AFTER that →
// __hostDispatch sees no active run → silent drop (the in-VM RunCompletedError analogue).
// __lsTrackChain registers each such chain; the run-loop calls __lsFlush after the body
// settles (activeRun still live) to drain them. Cap 32 bounds cascade depth (runaway is
// still bounded by the per-run timeout). __lsOutstanding is reset per run (next to
// __lsVmHandles); the done-closure captures its run's Set so a late settle after a per-run
// reset deletes from the correct (now-garbage) Set, never the live one.
const VM_FLUSH_BOOTSTRAP = `
(function () {
  globalThis.__lsTrackChain = function (p) {
    var set = globalThis.__lsOutstanding || (globalThis.__lsOutstanding = new Set());
    set.add(p);
    var done = function () { set.delete(p); };
    Promise.resolve(p).then(done, done);
    return p;
  };
  globalThis.__lsFlush = function () {
    var set = globalThis.__lsOutstanding || (globalThis.__lsOutstanding = new Set());
    return (async function () {
      var cap = 32;
      while (set.size > 0 && cap-- > 0) {
        await Promise.allSettled(Array.from(set));
      }
    })();
  };
  // #11 P4b Inc 3c-2 hardening (audit security-containment#0): the float-widget/advanced-modal cell
  // lookup is NOT kept in a user-reachable globalThis Map (a frozen BINDING still leaves the Map
  // contents enumerable + .clear()-able cross-script). The host holds each cell as a dup'd handle
  // (vmWidgetOwner/vmModalOwner) and writes it directly via setProp — see notifyVmWidgetPosition /
  // notifyVmModalDismissed. Nothing to expose in-VM here.
})();
`;

// #11 P3 audit (H1) — lock the trusted scaffolding bindings so one run can't
// reassign them (e.g. globalThis.__lsEncode = evil, globalThis.api = evilProxy)
// and poison the NEXT run on the shared process-global context. data / script /
// __lsRequireCache / __hbs.helpers stay per-run-mutable (reset each run); the
// frozen `__hbsBuiltins*` snapshots are the reset SOURCES so they can't be
// tampered. (Third-party z/Handlebars internal-property mutation remains a
// residual until per-run contexts land in P7 — bindings are locked, objects not
// deep-frozen.) Eval'd LAST in createContext, after all scaffolding is built.
const VM_FREEZE_BOOTSTRAP = `
(function () {
  var locked = ['__lsEncode', '__lsDecode', '__lsErrInfo', '__hostDispatch', '__lsBuildApi', 'api', 'z', 'Handlebars', '__hbs', '__lsRequire', '__lsBuiltins', '__console', '__lsRandomFill', 'crypto', 'TextEncoder', 'TextDecoder', 'atob', 'btoa', 'queueMicrotask', 'performance', 'structuredClone', 'URL', 'URLSearchParams', '__lsFetch', '__lsFetchAbort', 'fetch', 'Headers', 'Response', 'AbortController', 'AbortSignal', '__hostHandleDispatch', '__lsVmHandleProxy', '__hostRegisterHandler', '__hostUnregisterHandler', '__hostUnregisterHandlerNamed', '__hostRegisterComponentCallback', '__hostUnregisterComponentCallback', '__hostScheduleTimer', '__hostClearTimer', '__lsStreamStart', '__lsStreamPull', '__lsStreamCancel', '__lsCallHandler', '__hostBroadcastSubscribe', '__hostBroadcastUnsubscribe', '__lsBroadcastEmitCheck', '__lsTrackChain', '__lsFlush', '__hostAllocElementId', '__hostRegisterWidget', '__hostDropWidget', '__hostRegisterModal', '__hostRegisterModalDismiss', '__hostUnregisterModalDismiss'];
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

// The JSON-able RequestInit fields the in-VM fetch wrapper copies onto the request handed to the host
// bridge (method/headers/body are handled explicitly; the AbortSignal rides the abort path below; these
// are the plain string/boolean extras). Kept in sync with __lsFetchPassThrough in VM_FETCH_BOOTSTRAP.
// NOTE: bare `fetch` egresses through the guarded host path (makeGuardedHostFetch → api.utils.http.request
// → cors proxy → safeFetch, or a direct fetch for an allowlisted host). That path forwards method / headers
// / body, and — on the direct path — the AbortSignal (so an in-VM ctrl.abort() cancels the request; see the
// abort wiring below + makeGuardedHostFetch). These browser-oriented fields are still threaded to the host
// boundary but NOT applied to the outgoing request: they're server-meaningless (or safeFetch-owned, e.g.
// redirect), so the guarded path deliberately drops them.
const FETCH_INIT_PASSTHROUGH = ['mode', 'credentials', 'cache', 'redirect', 'referrer', 'referrerPolicy', 'integrity', 'keepalive'] as const;

// 3c fetch-binary-base64 — cap the response body the host pulls into memory + transfers to the VM
// (asyncfn raw fetch is uncapped, but the VM transfer + decode is the cost we bound). Checked
// against Content-Length first (reject before the body read) and again post-read.
const FETCH_MAX_RESPONSE_BYTES = 64 * 1024 * 1024; // 64 MiB

// 3b fetch-abortsignal — pending host AbortControllers keyed by the VM-generated abortId, so an
// in-VM ctrl.abort() (routed via __lsFetchAbort) cancels the real host fetch. Self-cleared when the
// fetch settles; entries are host objects (GC'd on delete), no VM handle to dispose.
const vmFetchAborts = new Map<string, AbortController>();

// __lsFetch(url, optsJson) is an ASYNC host fn (createContext, deferred-promise
// pattern like __hostDispatch): it runs the child's globalThis.fetch, reads the
// body as bytes, and settles with {ok,status,statusText,headers,bytes}. The VM
// wrapper builds a Response (text/json/arrayBuffer/bytes + a Headers).
const VM_FETCH_BOOTSTRAP = `
(function () {
  var __lsMakeAbortError = function (msg) { var e = new Error(msg || 'The operation was aborted.'); e.name = 'AbortError'; return e; };
  // 3c fetch-binary-base64 — decode a base64 body string to bytes (atob is a frozen VM global).
  // Bodies cross as base64 (not a marshaled number array) to cut the transfer blowup ~3x.
  var __lsB64ToBytes = function (b64) {
    if (!b64) return new Uint8Array(0);
    var bin = globalThis.atob(b64); var len = bin.length; var out = new Uint8Array(len);
    for (var i = 0; i < len; i++) out[i] = bin.charCodeAt(i) & 0xff;
    return out;
  };
  // 3b fetch-abortsignal — minimal AbortController / AbortSignal (the VM has none). abort()
  // fans out to onabort + addEventListener('abort') listeners; the fetch wrapper registers a
  // listener that signals the host to abort the real request.
  function AbortSignal() { this.aborted = false; this.reason = undefined; this._abortListeners = []; this.onabort = null; }
  AbortSignal.prototype.addEventListener = function (type, cb) { if (type === 'abort' && typeof cb === 'function') this._abortListeners.push(cb); };
  AbortSignal.prototype.removeEventListener = function (type, cb) { if (type === 'abort') { var idx = this._abortListeners.indexOf(cb); if (idx >= 0) this._abortListeners.splice(idx, 1); } };
  AbortSignal.prototype.throwIfAborted = function () { if (this.aborted) throw this.reason; };
  AbortSignal.prototype.dispatchEvent = function () { return true; };
  AbortSignal.abort = function (reason) { var s = new AbortSignal(); s.aborted = true; s.reason = (reason !== undefined) ? reason : __lsMakeAbortError(); return s; };
  globalThis.AbortSignal = AbortSignal;
  function AbortController() { this.signal = new AbortSignal(); }
  AbortController.prototype.abort = function (reason) {
    var s = this.signal;
    if (s.aborted) return;
    s.aborted = true; s.reason = (reason !== undefined) ? reason : __lsMakeAbortError();
    var ev = { type: 'abort' };
    if (typeof s.onabort === 'function') { try { s.onabort.call(s, ev); } catch (e) {} }
    var ls = s._abortListeners.slice();
    for (var i = 0; i < ls.length; i++) { try { ls[i].call(s, ev); } catch (e) {} }
  };
  globalThis.AbortController = AbortController;
  var unwrap = function (s) {
    var o = JSON.parse(s);
    if (o && o.e) { var e = new Error((o.e && o.e.message) || 'fetch failed'); if (o.e.name) e.name = o.e.name; throw e; }
    return globalThis.__lsDecode(o ? o.v : undefined);
  };
  function Headers(obj, setCookies) {
    this._h = {};
    this._sc = setCookies || []; // individual Set-Cookie values, preserved out-of-band (see getSetCookie)
    if (obj) { var ks = Object.keys(obj); for (var i = 0; i < ks.length; i++) this._h[ks[i].toLowerCase()] = String(obj[ks[i]]); }
  }
  Headers.prototype.get = function (k) { var v = this._h[String(k).toLowerCase()]; return v === undefined ? null : v; };
  Headers.prototype.has = function (k) { return Object.prototype.hasOwnProperty.call(this._h, String(k).toLowerCase()); };
  Headers.prototype.forEach = function (cb, t) { var ks = Object.keys(this._h); for (var i = 0; i < ks.length; i++) cb.call(t, this._h[ks[i]], ks[i], this); };
  Headers.prototype.getSetCookie = function () { return this._sc.slice(); };
  globalThis.Headers = Headers;
  function Response(r) {
    this.ok = !!r.ok; this.status = r.status; this.statusText = r.statusText || '';
    this.url = r.url || ''; this.redirected = !!r.redirected;
    this.headers = new Headers(r.headers || {}, r.setCookies || []);
    // 3c — body arrives as base64 (bodyB64); legacy bytes path kept as a fallback.
    this._bytes = (typeof r.bodyB64 === 'string') ? __lsB64ToBytes(r.bodyB64) : ((r.bytes instanceof Uint8Array) ? r.bytes : new Uint8Array(0));
    this.bodyUsed = false;
  }
  Response.prototype.arrayBuffer = function () { this.bodyUsed = true; return Promise.resolve(this._bytes.buffer); };
  Response.prototype.bytes = function () { this.bodyUsed = true; return Promise.resolve(this._bytes); };
  Response.prototype.text = function () { this.bodyUsed = true; return Promise.resolve(new TextDecoder().decode(this._bytes)); };
  Response.prototype.json = function () { return this.text().then(function (t) { return JSON.parse(t); }); };
  globalThis.Response = Response;
  var __lsFetchPassThrough = ['mode', 'credentials', 'cache', 'redirect', 'referrer', 'referrerPolicy', 'integrity', 'keepalive'];
  globalThis.fetch = function (url, opts) {
    var o = opts || {};
    var norm = { method: o.method || 'GET', headers: o.headers || {}, body: (o.body === undefined ? null : o.body) };
    // Thread the JSON-able RequestInit fields asyncfn's raw fetch passes through (fetch-dropped-
    // requestinit). signal is NOT JSON-serializable and is handled via the abort path below.
    for (var i = 0; i < __lsFetchPassThrough.length; i++) { var k = __lsFetchPassThrough[i]; if (o[k] !== undefined) norm[k] = o[k]; }
    var signal = o.signal;
    // Already aborted before the request started -> reject with the signal's reason (AbortError parity).
    if (signal && signal.aborted) return Promise.reject(signal.reason || __lsMakeAbortError());
    var abortId = null, onAbort = null;
    if (signal && typeof signal.addEventListener === 'function') {
      abortId = 'fetchAbort:' + globalThis.crypto.randomUUID();
      norm.__lsAbortId = abortId;
      onAbort = function () { try { globalThis.__lsFetchAbort(abortId); } catch (e) {} };
      signal.addEventListener('abort', onAbort);
    }
    var cleanup = function () { if (signal && onAbort && typeof signal.removeEventListener === 'function') { try { signal.removeEventListener('abort', onAbort); } catch (e) {} } };
    return Promise.resolve(globalThis.__lsFetch(String(url), JSON.stringify(globalThis.__lsEncode(norm)))).then(unwrap).then(
      function (r) { cleanup(); return new Response(r); },
      function (e) { cleanup(); throw e; }
    );
  };
})();
`;

let modulePromise: Promise<QuickJSWASMModule> | undefined;

/** #11 cold-start-fallback — cached instantiability verdict for the WASM module on THIS platform
 *  (deterministic once known). undefined until warmupQuickJS runs. */
let quickjsAvailability: Promise<boolean> | undefined;

/**
 * #11 cold-start-fallback — instantiate the WASM module (the once-per-process ~106ms compile — P7-3.3
 * bench) and report whether quickjs is USABLE on this platform. Two jobs:
 *  1. PRE-WARM: called fire-and-forget at CHILD STARTUP so the module compile happens OUTSIDE any run's
 *     timeout budget (the first quickjs run would otherwise pay it inside its own raceWithTimeout).
 *  2. DEGRADE PROBE: awaited at engine-selection (runOne, outside the run's raceWithTimeout). A `false`
 *     lets runOne fall back to the AsyncFunction engine for the run instead of HARD-FAILING every
 *     quickjs run — the failure mode on a platform where the WASM variant won't instantiate (there is
 *     no other isolation layer, so we degrade gracefully rather than break all scripts).
 * Cached (a platform failure is deterministic); on failure modulePromise is cleared so a later call may
 * retry. Never throws — returns false on any instantiation error.
 */
export function warmupQuickJS(): Promise<boolean> {
  quickjsAvailability ??= (async () => {
    const t0 = Date.now();
    try {
      modulePromise ??= newQuickJSWASMModuleFromVariant(variant);
      await modulePromise;
      const ms = Date.now() - t0;
      noteColdStart(ms, true); // #11 observability — one-time cold-start success + timing
      try {
        console.info(`[script-runner] QuickJS WASM instantiated in ${ms}ms; isolate engine active`);
      } catch { /* console may be locked down */ }
      return true;
    } catch (err) {
      modulePromise = undefined;
      noteColdStart(0, false); // #11 observability — probed, degrade-to-asyncfn
      try {
        console.error(
          `[script-runner] QuickJS WASM module failed to instantiate on this platform — degrading to ` +
          `the AsyncFunction engine for all quickjs runs on this child. ` +
          `${err instanceof Error ? err.message : String(err)}`,
        );
      } catch { /* console may be locked down */ }
      return false;
    }
  })();
  return quickjsAvailability;
}

/** #11 cold-start-fallback test seam — force warmupQuickJS's cached verdict (true = available,
 *  false = degrade-to-asyncfn) without an un-instantiable platform; undefined re-arms the real probe.
 *  Reset in tests/_infra/setup.ts beforeEach. */
export function _setQuickJSAvailabilityForTests(v: boolean | undefined): void {
  quickjsAvailability = v === undefined ? undefined : Promise.resolve(v);
}

// ─── #11 observability — engine telemetry ────────────────────────────────────
/**
 * Field-diagnostics for the quickjs rollout. Every field is either a monotonic counter
 * (cumulative since child spawn, summable across workers) or a one-time cold-start probe
 * result. Pure instrumentation — every bump is off the hot path (once per run / fire / evict /
 * degrade), nothing's behavior depends on these. Surfaced via getEngineTelemetry() on the
 * diagnostic-stats IPC and rendered in the "Engine (QuickJS-WASM)" diagnostics section.
 * Reset only by the _resetEngineTelemetryForTests seam (wired into tests/_infra/setup.ts).
 * NOTE the risk the design flagged: keep every COUNTER a plain summable integer — host-dispatcher
 * SUMS them across workers. The cold-start fields are per-child probe results (representative, not
 * summed); the live pool snapshot getEngineTelemetry() appends is likewise per-child.
 */
interface EngineCounters {
  /** True once warmupQuickJS's cached verdict has resolved (distinguishes "not probed" from ok=false). */
  coldStartProbed:   boolean;
  /** Did the WASM module instantiate on this platform (the warmup verdict). */
  coldStartOk:       boolean;
  /** WASM instantiate wall-time in ms (the once-per-process compile); 0 until probed / on failure. */
  coldStartMs:       number;
  /** Body-runs dispatched on the quickjs engine (counted at the RESOLVED engine, post-degrade). */
  quickjsRuns:       number;
  /** Body-runs dispatched on the asyncfn engine (the denominator for the quickjs ratio). */
  asyncfnRuns:       number;
  /** quickjs-requested runs that DEGRADED to asyncfn because the WASM module won't instantiate. */
  degradedRuns:      number;
  /** quickjs body-runs that threw a non-timeout error. */
  quickjsRunErrors:  number;
  /** quickjs handler-fires that threw a non-timeout, non-reentrant error. */
  quickjsFireErrors: number;
  /** quickjs run/fire timeouts (each forces a whole-child respawn — the key stability signal). */
  quickjsTimeouts:   number;
  /** asyncfn body-runs that threw a non-timeout error (user-script throws land here too — informational). */
  asyncfnRunErrors:  number;
  /** asyncfn runs that hit their timeout (each forces a whole-child respawn — the asyncfn stability signal). */
  asyncfnTimeouts:   number;
  /** F4 self-`api.tools.invoke` fast-rejects (an expected user error, tracked separately from fireErrors). */
  reentrantRejects:  number;
  /** In-VM out-of-memory errors (a per-context memory-limit hit surfaced by toHostError). */
  inVmOom:           number;
  /** Per-script contexts evicted (idle-TTL reap + cap enforcement). Always 0 under contextModel='shared'. */
  contextEvictions:  number;
  /** Times the pool accepted an over-cap insert because every other context was pinned/mid-run. */
  overCapTolerated:  number;
  /** Date.now() of the last context eviction (0 = none). Representative, not summed. */
  lastEvictionAt:    number;
  /** generateStream streams opened (in-VM). */
  streamsOpened:     number;
  /** generateStream streams force-closed before a normal end (consumer break, queue overflow, teardown). */
  streamsCancelled:  number;
}
const engineCounters: EngineCounters = {
  coldStartProbed: false, coldStartOk: false, coldStartMs: 0,
  quickjsRuns: 0, asyncfnRuns: 0, degradedRuns: 0,
  quickjsRunErrors: 0, quickjsFireErrors: 0, quickjsTimeouts: 0,
  asyncfnRunErrors: 0, asyncfnTimeouts: 0,
  reentrantRejects: 0, inVmOom: 0, contextEvictions: 0, overCapTolerated: 0, lastEvictionAt: 0,
  streamsOpened: 0, streamsCancelled: 0,
};
/** Edge-trigger latch for the over-cap-tolerated WARN (see enforcePoolCap): logs only on the
 *  TRANSITION into the tolerated state, re-armed when an eviction drops the pool back within cap. */
let overCapLogged = false;

/** #11 observability — record the one-time cold-start (WASM instantiate) probe result. Called from
 *  warmupQuickJS on both the success and the failure branch. */
export function noteColdStart(ms: number, ok: boolean): void {
  engineCounters.coldStartProbed = true;
  engineCounters.coldStartOk     = ok;
  engineCounters.coldStartMs     = ms;
}
/** #11 observability — attribute a dispatched body-run to its RESOLVED engine (call AFTER the
 *  warmup-degrade reassignment so a degraded run counts as asyncfn, not quickjs). */
export function noteEngineRun(engine: 'quickjs' | 'asyncfn'): void {
  if (engine === 'quickjs') engineCounters.quickjsRuns++;
  else engineCounters.asyncfnRuns++;
}
/** #11 observability — a quickjs-requested run degraded to asyncfn (WASM uninstantiable on this platform). */
export function noteDegradedRun():      void { engineCounters.degradedRuns++; }
/** #11 observability — a quickjs body-run threw a non-timeout error. */
export function noteQuickjsRunError():   void { engineCounters.quickjsRunErrors++; }
/** #11 observability — a quickjs handler-fire threw a non-timeout, non-reentrant error. */
export function noteQuickjsFireError():  void { engineCounters.quickjsFireErrors++; }
/** #11 observability — a quickjs run/fire hit its timeout (→ child respawn). */
export function noteQuickjsTimeout():    void { engineCounters.quickjsTimeouts++; }
/** Observability — an asyncfn body-run threw a non-timeout error. */
export function noteAsyncfnRunError():   void { engineCounters.asyncfnRunErrors++; }
/** Observability — an asyncfn run hit its timeout (→ child respawn). */
export function noteAsyncfnTimeout():    void { engineCounters.asyncfnTimeouts++; }

/** #11 observability — snapshot the engine telemetry for the diagnostic-stats reply. The counter
 *  fields spread from {@link EngineCounters}; the pool fields read live state (scriptContexts /
 *  POOL_CAP / contextReservations / isContextPinned / perContextMemoryLimit, all declared below —
 *  resolved at call time, never during module init). The return type is the canonical wire shape
 *  ({@link EngineTelemetry} in script-runner-ipc.ts), so any drift between the local counters and
 *  the wire contract is a compile error here. */
export function getEngineTelemetry(): EngineTelemetry {
  let pinned = 0;
  for (const scriptId of scriptContexts.keys()) if (isContextPinned(scriptId)) pinned++;
  return {
    ...engineCounters,
    contextModel,
    liveContexts:     scriptContexts.size,
    poolCap:          POOL_CAP,
    pinnedContexts:   pinned,
    reservedContexts: contextReservations.size,
    perCtxLimitBytes: perContextMemoryLimit(),
  };
}
/** #11 observability test seam — zero every counter + re-arm the over-cap latch. Wired into
 *  tests/_infra/setup.ts beforeEach so telemetry never bleeds between test files. */
export function _resetEngineTelemetryForTests(): void {
  engineCounters.coldStartProbed = false;
  engineCounters.coldStartOk     = false;
  engineCounters.coldStartMs     = 0;
  engineCounters.quickjsRuns       = 0;
  engineCounters.asyncfnRuns       = 0;
  engineCounters.degradedRuns      = 0;
  engineCounters.quickjsRunErrors  = 0;
  engineCounters.quickjsFireErrors = 0;
  engineCounters.quickjsTimeouts   = 0;
  engineCounters.asyncfnRunErrors  = 0;
  engineCounters.asyncfnTimeouts   = 0;
  engineCounters.reentrantRejects  = 0;
  engineCounters.inVmOom           = 0;
  engineCounters.contextEvictions  = 0;
  engineCounters.overCapTolerated  = 0;
  engineCounters.streamsOpened      = 0;
  engineCounters.streamsCancelled   = 0;
  engineCounters.lastEvictionAt    = 0;
  overCapLogged = false;
}

/** #11 P7-1 — the sync-resolved shared ScriptContext record. The notice bridges + leak oracle
 *  need a script's ctx SYNCHRONOUSLY (the notice arrives between runs, off the async build path),
 *  so they resolve it via resolveScriptContext(scriptId). Under contextModel='shared' one record
 *  backs every script (this var, set in createContext); P7-2 makes resolveScriptContext pool-aware. */
let sharedSc: ScriptContext | undefined;

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
  /** Per-run handle-method dispatcher (see QuickJSRunOptions.dispatchOnHandle). */
  dispatchOnHandle?: (targetHandle: HandleRef, method: string, args: unknown[]) => Promise<unknown>;
  /** P5 — the scriptId of the current run/fire; keys the per-script VM handler registry. */
  scriptId?: string;
  /** P5 — dispatch the (function-less) register-handler IPC to the parent (the closure
   *  lives in the VM registry, never crosses). Optional so unit tests can exercise the
   *  fire path without the parent IPC wiring. */
  dispatchRegisterHandler?: (kind: string, handlerId: string, meta: unknown) => void;
  /** P5 — dispatch the unregister-handler IPC to the parent when an in-VM handler's
   *  unsub fn runs, so the parent drops its canonical subscription (else it leaks a
   *  ghost registration that errors on every later invoke). */
  dispatchUnregisterHandler?: (kind: string, handlerId: string) => void;
  /** P5 inc3c — name-keyed unregister for macro/tool (see QuickJSRunOptions). */
  dispatchUnregisterHandlerNamed?: (kind: string, name: string) => void;
  /** P5 inc3b — broadcast subscribe/unsubscribe IPC (see QuickJSRunOptions). */
  dispatchBroadcastSubscribe?: (subId: string, event: string) => void;
  dispatchBroadcastUnsubscribe?: (subId: string) => void;
  dispatchStreamStart?: (requestId: string, method: string, args: unknown[], hasSignal: boolean) => void;
  dispatchStreamCancel?: (requestId: string) => void;
}

/**
 * #11 P7-0 — per-context run-state record. Each QuickJSContext carries its OWN
 * `activeRun` / `currentDeadline` / `runChain` (the foundation for per-script
 * contexts in P7-2). For now a SINGLE shared record is used (contextModel='shared',
 * via getContextForScript's sharedScPromise), so behavior is identical to the prior
 * module-global model — the run-state simply lives on the record instead of in
 * module-level `let`s.
 */
interface ScriptContext {
  ctx:             QuickJSContext;
  runChain:        Promise<void>;
  activeRun:       ActiveRun | undefined;
  currentDeadline: number;
  /** #11 P7-3 — recency marker (Date.now()) for the bounded-pool LRU. Bumped on every USE of this
   *  script's context: a getContextForScript cache-hit, a body-run start, a handler-fire start. The
   *  idle sweep evicts the oldest UNPINNED context; a frequently-run/fired script keeps a fresh stamp
   *  and is never chosen. Unused under contextModel='shared' (one record, never evicted). */
  lastUsedAt:      number;
}
/** #11 P5 — per-script registry of DUP'd in-VM handler fn handles. Keyed (scriptId,
 *  handlerId). The dup keeps the VM fn alive across runs (it is NOT in any run's
 *  arena); disposed on unregister / script teardown. The parent fires a stored
 *  handler via `fireHandlerInQuickJS`. */
const vmHandlerHandles = new Map<string, Map<string, QuickJSHandle>>();
/** #11 P5 inc3b — SEPARATE per-script registry of DUP'd broadcast handler fn handles,
 *  keyed (scriptId, subId). Distinct from vmHandlerHandles because broadcast subs have
 *  a different lifecycle: the parent clears them at the START of every new run (via
 *  BroadcastClearMessage), whereas RunHandlerRequest handlers persist until unregister.
 *  Disposed on broadcast-clear (per-run) + on full script teardown. */
const vmBroadcastHandles = new Map<string, Map<string, QuickJSHandle>>();
/** #11 P4b Inc 1 — DOM stable-id → elementId map for inject dedup, keyed (scriptId,
 *  stableId). CROSS-RUN (a script re-injecting with the same stable id reuses the
 *  elementId so the host updates in place), mirroring api-proxy.ts's domStableIdToElementId.
 *  The single shared VM context can't see scriptId (host-stamped), so the dedup lives
 *  host-side (same reason as inc3c's named-handler resolution); the VM generates the
 *  candidate uuid in-VM and __hostAllocElementId returns the cached one for a known
 *  stableId. Cleared on full script teardown (disposeScriptVmHandlers). */
const vmDomStableIds = new Map<string, Map<string, string>>();
/** #11 P4b Inc 3c-2 — host-side OWNER + CELL records for the gated factory handles whose host->VM
 *  notices (float-widget-position / advanced-modal-dismissed) carry NO scriptId. Recorded at
 *  create-time (__hostRegisterWidget / __hostRegisterModal under the host-stamped activeRun.scriptId)
 *  so the child-entry notice bifurcation can (a) test membership [VM vs asyncfn], (b) recover the
 *  owner scriptId for fireHandlerInQuickJS [modal onDismiss], and (c) sweep on script teardown.
 *  Inc 3c-2 hardening (audit security-containment#0): the in-VM cell (positionCache / dismissedRef)
 *  is held HOST-SIDE as a dup'd handle — NOT in a user-reachable globalThis Map — so the host notice
 *  bridge writes it directly via setProp (no eval-string bridge) and user code cannot enumerate or
 *  .clear() other scripts' cells. The dup shares the underlying object with the VM closure the handle
 *  getter reads; disposing the dup never frees that object (the VM closure keeps it alive). */
interface VmFactoryRecord { scriptId: string; cell: QuickJSHandle }
const vmWidgetOwner = new Map<string, VmFactoryRecord>(); // widgetId -> {scriptId, positionCache handle}
const vmModalOwner = new Map<string, VmFactoryRecord>();  // modalId  -> {scriptId, dismissedRef handle}
const vmModalListeners = new Map<string, Set<string>>(); // modalId -> onDismiss handlerIds

// ─── api.llm.generateStream — in-VM stream state ─────────────────────────────
//
// A quickjs generateStream is an in-VM async generator that pulls host-pushed chunks. The chunk queue
// lives HERE (host side, keyed by requestId), NOT in the VM and NOT on any run — so a stream opened in
// one run survives that run's end and can be drained by a LATER run/handler (the queue is fed by the
// child's stream routers regardless of which run, if any, is active). Each pull (__lsStreamPull) either
// takes a queued event or parks a resolver in `waiters`; a chunk/end arrival wakes one waiter (settling
// its in-VM promise) or enqueues. `queueCap` bounds an opened-but-never-drained stream (the queue can't
// grow unbounded across runs); overflow ends the stream with an error + signals the caller to cancel the
// upstream. Cells are reaped on drain / cancel / script teardown — NEVER at the opening run's end.
type VmStreamEvent =
  | { kind: 'chunk'; chunk: unknown }
  | { kind: 'end'; ok: boolean; error?: { name: string; message: string } };
interface VmStreamCell {
  queue:   VmStreamEvent[];
  waiters: Array<(ev: VmStreamEvent) => void>;
  ended:   boolean;
  scriptId: string;
  queueCap: number;
}
const vmStreams = new Map<string, VmStreamCell>();
/** scriptId → its open stream requestIds, for the teardown sweep (disposeScriptVmHandlers). */
const vmStreamsByScript = new Map<string, Set<string>>();
/** Bound on undrained queued events per stream (an opened-but-not-consumed stream can't grow forever,
 *  especially cross-run). Module-level `let` for the test seam; a later increment threads the setting. */
let streamQueueCap = 512;
let vmStreamSeq = 0;

/** True iff requestId is a quickjs (in-VM) stream — the child routers check this to feed vmStreams
 *  instead of the asyncfn proxy broadcast. */
export function hasVmStream(requestId: string): boolean { return vmStreams.has(requestId); }

/** Set the per-stream chunk-queue cap from the LumiScriptSettings value. Refreshed at each run start
 *  (child-entry runOne) so a settings change applies to newly-opened streams; each stream captures the
 *  current value at open. Ignores non-positive / non-finite values (keeps the prior cap). */
export function setStreamQueueCap(n: number): void {
  if (Number.isFinite(n) && n > 0) streamQueueCap = Math.floor(n);
}

function openVmStream(requestId: string, scriptId: string): void {
  vmStreams.set(requestId, { queue: [], waiters: [], ended: false, scriptId, queueCap: streamQueueCap });
  let set = vmStreamsByScript.get(scriptId);
  if (!set) { set = new Set(); vmStreamsByScript.set(scriptId, set); }
  set.add(requestId);
  engineCounters.streamsOpened++;
}
/** Deliver an event to a parked waiter if one exists, else enqueue it. */
function deliverVmStreamEvent(cell: VmStreamCell, ev: VmStreamEvent): void {
  const w = cell.waiters.shift();
  if (w) w(ev);
  else cell.queue.push(ev);
}
/** Feed a chunk. Returns true if the undrained queue hit the cap — the caller (child router) should send
 *  a StreamCancelRequest to stop the host upstream; the stream is ended with an overflow error. */
export function pushVmStreamChunk(requestId: string, chunk: unknown): boolean {
  const cell = vmStreams.get(requestId);
  if (!cell || cell.ended) return false;
  if (cell.waiters.length === 0 && cell.queue.length >= cell.queueCap) {
    cell.ended = true;
    engineCounters.streamsCancelled++; // over cap → the stream is force-closed
    deliverVmStreamEvent(cell, { kind: 'end', ok: false, error: { name: 'StreamOverflowError', message: `generateStream: ${cell.queueCap} chunks queued without being consumed — cancelling the stream (drain it faster, or store + iterate it sooner).` } });
    return true;
  }
  deliverVmStreamEvent(cell, { kind: 'chunk', chunk });
  return false;
}
/** Signal the terminal event (ok=true normal end, ok=false + error for a failure). */
export function pushVmStreamEnd(requestId: string, ok: boolean, error?: { name: string; message: string }): void {
  const cell = vmStreams.get(requestId);
  if (!cell || cell.ended) return;
  cell.ended = true;
  deliverVmStreamEvent(cell, { kind: 'end', ok, error });
}
/** Drop a stream cell (the generator's finally / cancel / teardown). Wakes any parked waiter with a
 *  synthetic closed-end so an in-flight pull can't hang. Returns the owning scriptId, or undefined. */
function dropVmStream(requestId: string): string | undefined {
  const cell = vmStreams.get(requestId);
  if (!cell) return undefined;
  vmStreams.delete(requestId);
  vmStreamsByScript.get(cell.scriptId)?.delete(requestId);
  const w = cell.waiters.shift();
  if (w) w({ kind: 'end', ok: false, error: { name: 'StreamClosedError', message: 'stream closed' } });
  return cell.scriptId;
}

/** Close every open stream a script owns (script unregister / disable / delete / reload). Wakes any
 *  parked consumer with an aborted-end (so its generator's finally runs) and drops the cells. Returns the
 *  requestIds so the caller can send a StreamCancelRequest per stream (stop the host's upstream). */
export function sweepVmStreamsForScript(scriptId: string): string[] {
  const set = vmStreamsByScript.get(scriptId);
  if (!set) return [];
  const requestIds = [...set];
  for (const requestId of requestIds) {
    const cell = vmStreams.get(requestId);
    if (cell && !cell.ended) {
      cell.ended = true;
      engineCounters.streamsCancelled++; // force-closed by teardown
      deliverVmStreamEvent(cell, { kind: 'end', ok: false, error: { name: 'AbortError', message: 'script unregistered' } });
    }
    dropVmStream(requestId);
  }
  vmStreamsByScript.delete(scriptId);
  return requestIds;
}
/** #11 P7-2 — the context model. 'shared' (default) = ONE process-global context backs every script
 *  (the P7-0/P7-1 behavior — runs serialize on one runChain). 'per-script' = each scriptId gets its
 *  OWN QuickJSContext (its own globalThis + zod/Handlebars/api bundle + runChain/activeRun/
 *  currentDeadline), so cross-script poisoning (z.object=evil, globalThis bleed) + cross-script run
 *  serialization are eliminated. Set via _setContextModelForTests; prod stays 'shared' until the
 *  rollout flip. The WASM module (modulePromise) stays process-global — only newContext()+the
 *  ~95ms bootstrap chain is paid per script, not WASM compile. */
let contextModel: 'shared' | 'per-script' = 'shared';

/** Under 'shared': one cached record (sharedScPromise → sharedSc, the sync-resolved handle). Under
 *  'per-script': a per-scriptId pool — the *Promises map dedups concurrent first-builds; scriptContexts
 *  holds the RESOLVED records for the sync resolver. Cleared on build failure so a transient error
 *  doesn't poison later runs. */
let sharedScPromise: Promise<ScriptContext> | undefined;
const scriptContextPromises = new Map<string, Promise<ScriptContext>>();
const scriptContexts = new Map<string, ScriptContext>();

/** Race-safe, retry-on-failure accessor for a script's context record (#11 P7-0/P7-2). Under 'shared'
 *  every scriptId shares one record; under 'per-script' each scriptId lazily builds + caches its own.
 *  The resolved record is stored (sharedSc / scriptContexts) so the sync resolveScriptContext can read it. */
function getContextForScript(scriptId: string): Promise<ScriptContext> {
  if (contextModel === 'shared') {
    if (!sharedScPromise) {
      sharedScPromise = createContext().then((sc) => { sharedSc = sc; return sc; });
      sharedScPromise.catch(() => { sharedScPromise = undefined; sharedSc = undefined; });
    }
    return sharedScPromise;
  }
  let p = scriptContextPromises.get(scriptId);
  if (!p) {
    // #11 P7-2 — identity-guard the publish. A teardown (disposeContextForScript) or a rebuild
    // during this in-flight build deletes/replaces the promise entry; if we're no longer the CURRENT
    // build when we resolve, DON'T publish a torn-down/superseded context into scriptContexts (a
    // use-after-free / resurrection hazard) — dispose the orphan instead.
    const build: Promise<ScriptContext> = createContext().then((sc) => {
      if (scriptContextPromises.get(scriptId) === build) {
        // #11 P7-3.1 — a publish is a USE: re-stamp recency to NOW (the build-time stamp is ~46ms
        // stale, so a sibling that ran during the build could otherwise look fresher and make this
        // just-built, about-to-be-run context the LRU victim of its own cap-check — critic gap #4).
        sc.lastUsedAt = Date.now();
        scriptContexts.set(scriptId, sc);
        enforcePoolCap(scriptId); // evict LRU evictable if over cap — but EXEMPT this just-built, about-to-run context
      } else { try { sc.ctx.dispose(); } catch { /* orphaned by a concurrent teardown/rebuild */ } }
      return sc;
    });
    build.catch(() => {
      if (scriptContextPromises.get(scriptId) === build) { scriptContextPromises.delete(scriptId); scriptContexts.delete(scriptId); }
    });
    p = build;
    scriptContextPromises.set(scriptId, p);
  } else {
    // #11 P7-3 — cache HIT: bump recency so an awaited-but-not-yet-run reuse still counts as use and
    // the LRU sweep won't reap a soon-to-run context. resolveScriptContext (sync) reads the same record.
    const sc = scriptContexts.get(scriptId);
    if (sc) sc.lastUsedAt = Date.now();
  }
  return p;
}

/** #11 P7-1/P7-2 — SYNCHRONOUS resolver of a script's already-built context record, for the
 *  between-runs callers that can't await (the notice bridges + leak oracle). 'shared' → the single
 *  shared record; 'per-script' → the pool entry. undefined if that context hasn't been built yet
 *  (the notice/oracle then no-ops). */
function resolveScriptContext(scriptId: string): ScriptContext | undefined {
  return contextModel === 'shared' ? sharedSc : scriptContexts.get(scriptId);
}

/** #11 P7-3.1 — bounded-pool knobs (module-level so the test seams can override; prod uses the
 *  constants). POOL_CAP is the HARD bound on live per-script contexts (coupled to P7-3.2's per-context
 *  memory limit — perCtxLimit × POOL_CAP is the child's WASM-heap budget; since there is no host RSS
 *  kill the pool must self-bound). idleTimeoutMs reaps contexts idle longer than this — generous
 *  because a rebuild is cheap (~46ms, P7-3.3 bench) and handler/broadcast-holding contexts are pinned
 *  (never reaped), so only an idle BODY-run script ever re-pays it, before its next run's deadline. */
let POOL_CAP = 8;
let idleTimeoutMs = 5 * 60_000;

/** #11 P7-3.2 — aggregate WASM-heap budget for the ONE script-runner child. There is NO host RSS kill
 *  (the child heartbeat is time-based only), so the per-script pool must self-bound: each per-script
 *  context caps its runtime at CHILD_WASM_BUDGET / POOL_CAP, so POOL_CAP live contexts stay within the
 *  budget. Total child RSS ≈ ~112MB baseline + the process-global WASM module code + POOL_CAP × perCtx
 *  + marshaling buffers. `let` for the _setChildWasmBudgetForTests seam. */
let CHILD_WASM_BUDGET = 512 * 1024 * 1024;

/** Per-context WASM memory limit (bytes). Under 'per-script' the pool holds up to POOL_CAP live contexts
 *  inside one child, so cap each at CHILD_WASM_BUDGET / POOL_CAP (= 64MB at 512MB/8) — the aggregate never
 *  exceeds the budget. Under 'shared' (a single reused context, never pooled) keep the whole budget, so
 *  prod behaviour is unchanged (was a flat 512MB). NOTE: the runtime's C-stack cap is left at QuickJS's
 *  256KB default (mod.newContext applies it when maxStackSizeBytes is unset), which already throws a
 *  catchable in-VM stack-overflow on runaway recursion — an explicit setMaxStackSize would be redundant
 *  and risks breaking legitimate deep-but-bounded recursion, so it is intentionally omitted. */
function perContextMemoryLimit(): number {
  return contextModel === 'per-script' ? Math.floor(CHILD_WASM_BUDGET / POOL_CAP) : CHILD_WASM_BUDGET;
}

/** #11 P7-3.1 (audit hardening) — scriptIds with an in-flight body-run ACQUISITION. runUserScriptInQuickJS
 *  captures `const ctx = sc.ctx` then `await prior` (the runChain serialization) BEFORE setting
 *  sc.activeRun, so for that span sc.activeRun is undefined and, if the script is unpinned, the context
 *  would be isEvictable — a concurrent build's enforcePoolCap or the sweep could dispose the very ctx the
 *  parked run is about to use (a use-after-free on the captured local; the P7-3.1 audit's microtask race).
 *  A reservation set SYNCHRONOUSLY before the acquisition awaits + cleared in the run's finally keeps the
 *  context non-evictable across the whole acquire→run span. Counter-valued (concurrent queued runs of one
 *  script each reserve). The FIRE path needs no reservation: a fired handler has an alive dup, so
 *  isContextPinned is already true for its whole fire. */
const contextReservations = new Map<string, number>();
function reserveContext(scriptId: string): void {
  contextReservations.set(scriptId, (contextReservations.get(scriptId) ?? 0) + 1);
}
function releaseContext(scriptId: string): void {
  const n = (contextReservations.get(scriptId) ?? 0) - 1;
  if (n <= 0) contextReservations.delete(scriptId);
  else contextReservations.set(scriptId, n);
}
function isContextReserved(scriptId: string): boolean {
  return (contextReservations.get(scriptId) ?? 0) > 0;
}

/** A pooled context is an eviction CANDIDATE iff it is not mid-run (a run/fire captures `sc.ctx` after
 *  its await, so disposing mid-run is a use-after-free), not RESERVED (a body-run is mid-acquisition,
 *  before activeRun is set — same UAF), and not pinned (a live cross-run handler dup a fire would reach
 *  — un-rebuildable). evictIdleContext re-checks all three; this is the selection filter. */
function isEvictable(scriptId: string, sc: ScriptContext): boolean {
  return sc.activeRun === undefined && !isContextReserved(scriptId) && !isContextPinned(scriptId);
}

/** The least-recently-used EVICTABLE scriptId (oldest lastUsedAt), or undefined if none are evictable
 *  (all pinned / mid-run / exempt). Ties resolve to the first-iterated (oldest-inserted). `exempt`
 *  protects a scriptId from selection — used for the just-built context at its own insert-time
 *  cap-check (see enforcePoolCap). */
function lruEvictable(exempt?: string): string | undefined {
  let victim: string | undefined;
  let oldestAt = Infinity;
  for (const [scriptId, sc] of scriptContexts) {
    if (scriptId === exempt) continue;
    if (!isEvictable(scriptId, sc)) continue;
    if (sc.lastUsedAt < oldestAt) { oldestAt = sc.lastUsedAt; victim = scriptId; }
  }
  return victim;
}

/** #11 P7-3.1 — enforce POOL_CAP after an insert: while over cap, evict the LRU evictable context. If
 *  NONE are evictable (every remaining context is pinned / mid-run / exempt), stop and accept over-cap
 *  — we NEVER force-evict a pinned context (that silently loses its handlers; the fully-pinned-pool
 *  decision = accept + retain). `exempt` = the just-inserted scriptId, protected from its OWN cap-check:
 *  its run has not started (activeRun still undefined) and its handler (if any) registers DURING the
 *  imminent body-run, so it is neither mid-run-guarded nor pinned yet — without the exemption a pool of
 *  otherwise-pinned contexts would make the just-built context the only evictable candidate and evict
 *  the very context the caller is about to run (critic gap #4 / use-after-free). No-op under 'shared'. */
function enforcePoolCap(exempt?: string): void {
  if (contextModel !== 'per-script') return;
  while (scriptContexts.size > POOL_CAP) {
    const victim = lruEvictable(exempt);
    if (victim === undefined) {
      // #11 observability — over cap but every remaining context is pinned/mid-run/exempt: we accept the
      // over-cap insert and RETAIN (never force-evict a pinned context). Count it every time; edge-trigger
      // the WARN so a busy pool doesn't firehose (re-armed by evictIdleContext when the pool recovers).
      engineCounters.overCapTolerated++;
      if (!overCapLogged) {
        overCapLogged = true;
        try {
          console.warn(
            `[script-runner] engine: context pool over cap (${scriptContexts.size}/${POOL_CAP}) — all ` +
            `contexts pinned, eviction deferred (possible handler-pin leak)`,
          );
        } catch { /* console may be locked down */ }
      }
      break; // all remaining are pinned/mid-run/exempt — accept over-cap
    }
    if (!evictIdleContext(victim)) break; // defensive: shouldn't fail (victim was evictable), avoid a spin
  }
}

/** #11 P7-3.1 — periodic idle reaper, ticked off child-entry's IDLE_HEARTBEAT interval (the engine owns
 *  no timer). Evicts every EVICTABLE context idle longer than idleMs, then enforces POOL_CAP as a
 *  backstop (a context tolerated over-cap while pinned becomes reclaimable once it unpins). Pinned +
 *  mid-run contexts are skipped (never reaped). Returns the count evicted. No-op under 'shared'. Tests
 *  drive it directly with an explicit (now, idleMs); prod calls it arg-less every heartbeat. */
export function sweepIdleContexts(now: number = Date.now(), idleMs: number = idleTimeoutMs): number {
  if (contextModel !== 'per-script') return 0;
  let evicted = 0;
  // Snapshot the entries first — evictIdleContext mutates scriptContexts during the loop.
  for (const [scriptId, sc] of [...scriptContexts]) {
    if (sc.activeRun !== undefined) continue;          // mid-run — never reap
    if (isContextReserved(scriptId)) continue;         // body-run mid-acquisition — never reap (UAF window)
    if (isContextPinned(scriptId)) continue;           // pinned — never reap (a fire would find a dead ctx)
    if (now - sc.lastUsedAt > idleMs && evictIdleContext(scriptId)) evicted++;
  }
  // Cap backstop: an insert may have been forced over-cap by an all-pinned pool; reclaim now.
  while (scriptContexts.size > POOL_CAP) {
    const victim = lruEvictable();
    if (victim === undefined || !evictIdleContext(victim)) break;
    evicted++;
  }
  return evicted;
}

/** #11 P5-2 — the child-side timer scheduler the in-VM setTimeout/setInterval reach through. Injected
 *  by child-entry (setVmTimerScheduler) because the Bun-timer store + the fireHandlerInQuickJS re-entry
 *  live in the child, NOT the VM — a timer is entirely child-local (no parent IPC): the VM registers the
 *  callback (dup'd into vmHandlerHandles by timerId) + calls schedule(); the child arms a Bun timer whose
 *  expiry fires the callback via fireHandlerInQuickJS on its own runChain entry. `undefined` in a unit
 *  test that doesn't wire it → the callback still registers (fireable manually) but no Bun timer arms. */
export interface VmTimerScheduler {
  schedule(scriptId: string, timerId: string, ms: number, repeat: boolean): void;
  clear(scriptId: string, timerId: string): void;
}
let vmTimerScheduler: VmTimerScheduler | undefined;
export function setVmTimerScheduler(s: VmTimerScheduler | undefined): void { vmTimerScheduler = s; }

/** Create the module (once per process) + the reusable context (once per child,
 *  mirroring the shared-child model) + the stable VM scaffolding. Returns the
 *  per-context ScriptContext record (#11 P7-0). The interrupt handler and every
 *  host-fn closure read the run-state OFF the record (`sc.currentDeadline` /
 *  `sc.activeRun`), updated per-run by runUserScriptInQuickJS / fireHandlerInQuickJS. */
async function createContext(): Promise<ScriptContext> {
  modulePromise ??= newQuickJSWASMModuleFromVariant(variant);
  const mod = await modulePromise;
  const ctx = mod.newContext();
  try {
  // #11 P7-0 — the per-context run-state record. The interrupt handler + every
  // host-fn closure below read activeRun/currentDeadline off THIS record (in scope
  // for the whole createContext closure), not module globals.
  const sc: ScriptContext = { ctx, runChain: Promise.resolve(), activeRun: undefined, currentDeadline: Number.POSITIVE_INFINITY, lastUsedAt: Date.now() };
  // Guard against a disposed context: a settle's `deferred.settled.then(pump)` microtask can fire AFTER
  // the context was disposed (e.g. a parked stream pull settled by the teardown sweep, then the context
  // disposed on the same tick). executePendingJobs on a freed runtime throws "Lifetime not alive"; skip it.
  const pump = () => { if (ctx.alive) ctx.runtime.executePendingJobs(); };

  // Ring-0 sync-loop guard (P7 formalizes the supervision rings): aborts a sync
  // `while(true){}` the host heartbeat would otherwise SIGKILL the whole child for.
  ctx.runtime.setInterruptHandler(() => Date.now() > sc.currentDeadline);
  // #11 P7-3.2 — per-script contexts cap at CHILD_WASM_BUDGET/POOL_CAP (64MB) so the pool's aggregate
  // WASM heap stays bounded (no host RSS kill); 'shared' keeps the full budget (prod behaviour unchanged).
  ctx.runtime.setMemoryLimit(perContextMemoryLimit());

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
  // Bundle the ls:* built-in libraries in-VM — each entry sets
  // globalThis.__lsBuiltins['ls:name'] = factory, so script.require('ls:*') can
  // invoke the factory against the run's globalThis.api (parity with the asyncfn
  // builtin-library-registry). The factories run per require, not at bootstrap.
  ctx.unwrapResult(ctx.evalCode(VM_LS_COMPONENTS_BUNDLE)).dispose();
  ctx.unwrapResult(ctx.evalCode(VM_LS_ICONS_BUNDLE)).dispose();
  ctx.unwrapResult(ctx.evalCode(VM_LS_COUNCIL_PROMPT_BUNDLE)).dispose();
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
    const run = sc.activeRun;
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

  // ── Stable __hostHandleDispatch (built ONCE) — the handle-method analogue of
  // __hostDispatch (P4). An in-VM handle proxy calls it with (id, kind, method,
  // argsJson); it routes to activeRun.dispatchOnHandle, which produces the host's
  // targetHandle-bearing ApiProxyRequest (Boundary #1 unchanged). Same per-call
  // deferred + settle/pump idiom as __hostDispatch so the in-VM promise never hangs. ──
  const hostHandleDispatch = ctx.newFunction('__hostHandleDispatch', (idHandle, kindHandle, methodHandle, argsHandle) => {
    const id = ctx.getString(idHandle);
    const handleKind = ctx.getString(kindHandle) as HandleKind;
    const method = ctx.getString(methodHandle);
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
    const run = sc.activeRun;
    if (!run) {
      settle('e', { name: 'Error', message: `LumiScript QuickJS: no active run for handle ${handleKind}.${method}().` }, 'no active run');
    } else if (!run.dispatchOnHandle) {
      settle('e', { name: 'Error', message: 'LumiScript QuickJS: handle dispatch is unavailable for this run.' }, 'no handle dispatch');
    } else {
      const targetHandle: HandleRef = { __handleRef: true, id, kind: handleKind };
      void run.dispatchOnHandle(targetHandle, method, args).then(
        (result) => settle('v', result, `Result of handle ${handleKind}.${method}() could not be marshaled to the QuickJS engine.`),
        (err) => settle('e', run.serializeError(err), `Error from handle ${handleKind}.${method}() could not be serialized.`),
      );
    }
    void deferred.settled.then(pump);
    return deferred.handle;
  });
  ctx.setProp(ctx.global, '__hostHandleDispatch', hostHandleDispatch);
  hostHandleDispatch.dispose();
  // The in-VM handle-proxy factory (reads __hostHandleDispatch at method-call time).
  ctx.unwrapResult(ctx.evalCode(VM_HANDLE_BOOTSTRAP)).dispose();

  // ── P5: handler registration. __hostRegisterHandler receives the user fn as a raw
  // VM handle (newFunction args are handles, never marshaled) and DUPS it so it
  // survives the run's arena disposal; the dup lives in the per-script vmHandlerHandles
  // registry until unregister/teardown. The parent fires it later via
  // fireHandlerInQuickJS. The function-less register IPC reaches the parent via
  // activeRun.dispatchRegisterHandler (so the parent knows to route the event here). ──
  const hostRegisterHandler = ctx.newFunction('__hostRegisterHandler', (kindHandle, handlerIdHandle, fnHandle, metaHandle) => {
    const run = sc.activeRun;
    const handlerId = ctx.getString(handlerIdHandle);
    if (run?.scriptId) {
      const kind = ctx.getString(kindHandle);
      // meta crosses with STRUCTURED marshaling (the in-VM helpers __lsEncode it),
      // so non-JSON register options survive — e.g. a macroInterceptor matchTemplate
      // RegExp reaches the parent as a real RegExp (Boundary #1 structured-clones it).
      let meta: unknown;
      try { meta = marshalDecode(JSON.parse(ctx.getString(metaHandle))); } catch { meta = undefined; }
      const dup = fnHandle.dup(); // survives run-end; disposed on unregister/teardown
      let perScript = vmHandlerHandles.get(run.scriptId);
      if (!perScript) { perScript = new Map(); vmHandlerHandles.set(run.scriptId, perScript); }
      const prev = perScript.get(handlerId);
      if (prev?.alive) { try { prev.dispose(); } catch { /* re-register replaces */ } }
      perScript.set(handlerId, dup);
      run.dispatchRegisterHandler?.(kind, handlerId, meta);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostRegisterHandler', hostRegisterHandler);
  hostRegisterHandler.dispose();
  const hostUnregisterHandler = ctx.newFunction('__hostUnregisterHandler', (kindHandle, handlerIdHandle) => {
    const run = sc.activeRun;
    const kind = ctx.getString(kindHandle);
    const handlerId = ctx.getString(handlerIdHandle);
    if (run?.scriptId) {
      const perScript = vmHandlerHandles.get(run.scriptId);
      const h = perScript?.get(handlerId);
      if (h?.alive) { try { h.dispose(); } catch { /* */ } }
      perScript?.delete(handlerId);
      // Tell the parent to drop its canonical subscription (parity with the asyncfn
      // unsub) — otherwise it keeps a ghost registration that errors on every invoke.
      run.dispatchUnregisterHandler?.(kind, handlerId);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostUnregisterHandler', hostUnregisterHandler);
  hostUnregisterHandler.dispose();

  // ── #11 P5-1: component-callback registration. Component mount-options (onChange/onCommit/onClick
  // /...) carry fn callbacks. Unlike every other register-handler kind, componentCallback has NO
  // RegisterHandler IPC variant — the parent routes a fired component_callback via the
  // componentCallbackRoutes map it builds from the mount's `_callbacks` (host-dispatcher
  // dispatchComponentCallback), exactly like asyncfn registers the closure CHILD-SIDE only. So these
  // JUST dup the fn into vmHandlerHandles (so hasVmHandler → fireVmHandler routes the fire) with NO
  // register/unregister IPC. Disposed eagerly on component destroy + swept at teardown by
  // disposeScriptVmHandlers (so a mounted component's callbacks pin the context, mirroring broadcast). ──
  const hostRegisterComponentCallback = ctx.newFunction('__hostRegisterComponentCallback', (handlerIdHandle, fnHandle) => {
    const run = sc.activeRun;
    if (run?.scriptId) {
      const handlerId = ctx.getString(handlerIdHandle);
      const dup = fnHandle.dup(); // survives run-end; disposed on destroy/teardown
      let perScript = vmHandlerHandles.get(run.scriptId);
      if (!perScript) { perScript = new Map(); vmHandlerHandles.set(run.scriptId, perScript); }
      const prev = perScript.get(handlerId);
      if (prev?.alive) { try { prev.dispose(); } catch { /* re-register replaces */ } }
      perScript.set(handlerId, dup);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostRegisterComponentCallback', hostRegisterComponentCallback);
  hostRegisterComponentCallback.dispose();
  const hostUnregisterComponentCallback = ctx.newFunction('__hostUnregisterComponentCallback', (handlerIdHandle) => {
    const run = sc.activeRun;
    if (run?.scriptId) {
      const handlerId = ctx.getString(handlerIdHandle);
      const perScript = vmHandlerHandles.get(run.scriptId);
      const h = perScript?.get(handlerId);
      if (h?.alive) { try { h.dispose(); } catch { /* already gone */ } }
      perScript?.delete(handlerId);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostUnregisterComponentCallback', hostUnregisterComponentCallback);
  hostUnregisterComponentCallback.dispose();

  // ── #11 P5-2: timers. In-VM setTimeout/setInterval reach __hostScheduleTimer with a VM-generated
  // timerId + the raw callback fn. Like componentCallback the fn is dup'd into vmHandlerHandles (so
  // hasVmHandler → fireHandlerInQuickJS routes the fire) with NO register-handler IPC — a timer fire is
  // entirely CHILD-LOCAL (the child's Bun-timer store, injected via vmTimerScheduler, arms the timer and
  // fires the callback), so the parent never sees it. The dup pins the context until clear/teardown
  // (broadcast-parity pinning) — a pending timer keeps an otherwise-idle script's context resident. ──
  const hostScheduleTimer = ctx.newFunction('__hostScheduleTimer', (timerIdHandle, fnHandle, msHandle, repeatHandle) => {
    const run = sc.activeRun;
    if (!run?.scriptId) return; // setTimeout is always called from user code (a run/fire is active)
    const timerId = ctx.getString(timerIdHandle);
    const dup = fnHandle.dup(); // survives run-end; disposed on clear/teardown
    let perScript = vmHandlerHandles.get(run.scriptId);
    if (!perScript) { perScript = new Map(); vmHandlerHandles.set(run.scriptId, perScript); }
    const prev = perScript.get(timerId);
    if (prev?.alive) { try { prev.dispose(); } catch { /* re-schedule replaces */ } }
    perScript.set(timerId, dup);
    const ms = Number(ctx.dump(msHandle)) || 0;
    const repeat = ctx.dump(repeatHandle) === true;
    vmTimerScheduler?.schedule(run.scriptId, timerId, ms < 0 ? 0 : ms, repeat);
  });
  ctx.setProp(ctx.global, '__hostScheduleTimer', hostScheduleTimer);
  hostScheduleTimer.dispose();
  const hostClearTimer = ctx.newFunction('__hostClearTimer', (timerIdHandle) => {
    const run = sc.activeRun;
    if (!run?.scriptId) return;
    const timerId = ctx.getString(timerIdHandle);
    const perScript = vmHandlerHandles.get(run.scriptId);
    const h = perScript?.get(timerId);
    if (h?.alive) { try { h.dispose(); } catch { /* already gone */ } }
    perScript?.delete(timerId);
    vmTimerScheduler?.clear(run.scriptId, timerId);
  });
  ctx.setProp(ctx.global, '__hostClearTimer', hostClearTimer);
  hostClearTimer.dispose();

  // ── api.llm.generateStream — the three host functions the in-VM generator drives. Start opens a
  // stream cell + sends the StreamRequest; pull returns a promise settled by the next queued/pushed event
  // (chunk / end / error), marshaled into the VM as a JSON string the generator parses; cancel drops the
  // cell + (if the stream had not ended) tells the host to tear down the upstream. Same deferred/pump
  // idiom as __hostDispatch, so an in-VM `await __lsStreamPull()` never hangs. ──
  const hostStreamStart = ctx.newFunction('__lsStreamStart', (argsJsonHandle, hasSignalHandle) => {
    const run = sc.activeRun;
    if (!run?.scriptId) return ctx.newString(''); // generateStream is called from user code — a run is active
    const args = marshalDecode(JSON.parse(ctx.getString(argsJsonHandle))) as unknown[];
    const hasSignal = ctx.dump(hasSignalHandle) === true;
    const requestId = `vmstream:${run.scriptId}:${++vmStreamSeq}`;
    openVmStream(requestId, run.scriptId);
    run.dispatchStreamStart?.(requestId, 'llm.generateStream', args, hasSignal);
    return ctx.newString(requestId);
  });
  ctx.setProp(ctx.global, '__lsStreamStart', hostStreamStart);
  hostStreamStart.dispose();
  const hostStreamPull = ctx.newFunction('__lsStreamPull', (requestIdHandle) => {
    const requestId = ctx.getString(requestIdHandle);
    const deferred = ctx.newPromise();
    const settle = (ev: VmStreamEvent): void => {
      let s: string;
      try {
        if (ev.kind === 'chunk') s = JSON.stringify({ chunk: marshalEncode(ev.chunk) });
        else if (ev.ok) s = JSON.stringify({ end: true });
        else s = JSON.stringify({ error: ev.error ?? { name: 'Error', message: 'stream error' } });
      } catch {
        s = JSON.stringify({ error: { name: 'QuickJSMarshalError', message: 'A stream chunk could not be marshaled to the QuickJS engine.' } });
      }
      ctx.newString(s).consume((h) => deferred.resolve(h));
      pump();
    };
    const cell = vmStreams.get(requestId);
    // Ownership: only the stream's OWNING script may pull it. The requestId is VM-supplied and its format
    // (vmstream:<scriptId>:<seq>) is enumerable, so under the shared context model another script could try
    // to drain a foreign stream's tokens — treat a missing OR non-owned cell as not-open. A same-script
    // cross-run drain still passes (cell.scriptId === the draining run's scriptId).
    if (!cell || cell.scriptId !== sc.activeRun?.scriptId) {
      settle({ kind: 'end', ok: false, error: { name: 'StreamClosedError', message: 'stream not open' } });
    } else {
      const queued = cell.queue.shift();
      if (queued) settle(queued);
      else cell.waiters.push(settle); // parked; a later pushVmStream* / dropVmStream wakes it
    }
    void deferred.settled.then(pump);
    return deferred.handle;
  });
  ctx.setProp(ctx.global, '__lsStreamPull', hostStreamPull);
  hostStreamPull.dispose();
  const hostStreamCancel = ctx.newFunction('__lsStreamCancel', (requestIdHandle) => {
    const requestId = ctx.getString(requestIdHandle);
    const cell = vmStreams.get(requestId);
    // Ownership: only the owning script may cancel its stream (the requestId is VM-supplied + enumerable).
    // A missing or non-owned cell is a no-op — a foreign script can't tear down another's stream/upstream.
    if (!cell || cell.scriptId !== sc.activeRun?.scriptId) return;
    const wasEnded = cell.ended; // owned cell; already-ended → the host upstream is already gone
    dropVmStream(requestId);
    if (!wasEnded) {
      engineCounters.streamsCancelled++; // consumer broke before the stream ended
      sc.activeRun?.dispatchStreamCancel?.(requestId); // stop the upstream
    }
  });
  ctx.setProp(ctx.global, '__lsStreamCancel', hostStreamCancel);
  hostStreamCancel.dispose();

  // ── P5 inc3c: macro/tool unregister BY NAME. macro/tool stores resolve by (scriptId,
  // name), NOT handlerId, so this sends a name-keyed unregister IPC (distinct from
  // __hostUnregisterHandler's handlerId-keyed one). The VM dup (pull-mode) is NOT disposed
  // here — it is reaped at teardown (asyncfn parity: the closure outlives unregister(name),
  // and a stale dup never fires once the host drops the name from its store). ──
  const hostUnregisterHandlerNamed = ctx.newFunction('__hostUnregisterHandlerNamed', (kindHandle, nameHandle) => {
    const run = sc.activeRun;
    if (run?.scriptId) {
      const kind = ctx.getString(kindHandle);
      const name = ctx.getString(nameHandle);
      run.dispatchUnregisterHandlerNamed?.(kind, name);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostUnregisterHandlerNamed', hostUnregisterHandlerNamed);
  hostUnregisterHandlerNamed.dispose();

  // ── P4b Inc 1: DOM stable-id → elementId dedup. The VM allocates a candidate uuid
  // in-VM (no host-side crypto needed) and calls this with (stableId, candidate); for a
  // KNOWN (scriptId, stableId) we return the cached elementId so the host updates in place
  // across runs, else we store + return the candidate. scriptId is host-stamped (activeRun),
  // so two scripts' same stable id never collide. ──
  const hostAllocElementId = ctx.newFunction('__hostAllocElementId', (stableIdHandle, candidateHandle) => {
    const run = sc.activeRun;
    const stableId = ctx.getString(stableIdHandle);
    const candidate = ctx.getString(candidateHandle);
    if (!stableId || !run?.scriptId) return ctx.newString(candidate);
    let perScript = vmDomStableIds.get(run.scriptId);
    if (!perScript) { perScript = new Map(); vmDomStableIds.set(run.scriptId, perScript); }
    const cached = perScript.get(stableId);
    if (cached !== undefined) return ctx.newString(cached);
    perScript.set(stableId, candidate);
    return ctx.newString(candidate);
  });
  ctx.setProp(ctx.global, '__hostAllocElementId', hostAllocElementId);
  hostAllocElementId.dispose();

  // ── P4b Inc 3c-2: record the owner scriptId + DUP the in-VM cell of a gated factory handle
  // (widget positionCache / modal dismissedRef) so the scriptId-less host->VM notices (float-widget-
  // position / advanced-modal-dismissed) can be bifurcated + routed child-side AND written directly
  // via setProp (no user-reachable globalThis Map — audit security-containment#0). activeRun.scriptId
  // is host-stamped (never VM-forgeable). OWNER-TAKEOVER GUARD (audit security-containment#1): these
  // globals are VM-callable, so reject re-pointing an id already owned by a DIFFERENT script — a
  // leaked uuid can't hijack the dismiss/position routing. The cell handle is dup'd so it survives
  // the run arena; it shares the underlying object with the VM closure the handle getter reads. ──
  const registerFactoryCell = (owner: Map<string, VmFactoryRecord>, idHandle: QuickJSHandle, cellHandle: QuickJSHandle): void => {
    const run = sc.activeRun;
    if (!run?.scriptId) return;
    const id = ctx.getString(idHandle);
    const cur = owner.get(id);
    if (cur && cur.scriptId !== run.scriptId) return; // owned by another script — refuse takeover
    if (cur) { try { cur.cell.dispose(); } catch { /* same-owner re-register replaces */ } }
    owner.set(id, { scriptId: run.scriptId, cell: cellHandle.dup() });
  };
  const hostRegisterWidget = ctx.newFunction('__hostRegisterWidget', (idHandle, cellHandle) => {
    registerFactoryCell(vmWidgetOwner, idHandle, cellHandle);
  });
  ctx.setProp(ctx.global, '__hostRegisterWidget', hostRegisterWidget);
  hostRegisterWidget.dispose();
  const hostRegisterModal = ctx.newFunction('__hostRegisterModal', (idHandle, cellHandle) => {
    registerFactoryCell(vmModalOwner, idHandle, cellHandle);
  });
  ctx.setProp(ctx.global, '__hostRegisterModal', hostRegisterModal);
  hostRegisterModal.dispose();
  // widget-destroy-leak — a float widget's destroy() drops its host-held cell + owner eagerly
  // (asyncfn parity: floatWidgetState.delete on destroy). Owner-scoped so a script can only drop its
  // OWN widget; a late position notice then no-ops (hasVmWidget false) instead of mutating a dead cell.
  const hostDropWidget = ctx.newFunction('__hostDropWidget', (idHandle) => {
    const run = sc.activeRun;
    const id = ctx.getString(idHandle);
    const rec = vmWidgetOwner.get(id);
    if (rec && run?.scriptId === rec.scriptId) {
      try { if (rec.cell.alive) rec.cell.dispose(); } catch { /* */ }
      vmWidgetOwner.delete(id);
    }
  });
  ctx.setProp(ctx.global, '__hostDropWidget', hostDropWidget);
  hostDropWidget.dispose();

  // ── P4b Inc 3c-2b: advanced-modal onDismiss listener registration. Dups the user fn into the
  // per-script vmHandlerHandles registry under a synthetic handlerId (so the dismiss bridge fires
  // it via fireHandlerInQuickJS's dual-lookup) + records the handlerId under the modal. NO register
  // IPC: onDismiss is a LOCAL listener (parity with the asyncfn listeners Set), fired only by the
  // host->VM dismiss notice, never the parent event bus. ──
  const hostRegisterModalDismiss = ctx.newFunction('__hostRegisterModalDismiss', (modalIdHandle, handlerIdHandle, fnHandle) => {
    const run = sc.activeRun;
    if (!run?.scriptId) return;
    const modalId = ctx.getString(modalIdHandle);
    // OWNER GUARD (audit security-containment#2): only the modal's owning script may attach onDismiss
    // listeners, so a cross-script registration can't mis-scope the dup (dup under caller, listener
    // under owner) and leak. Matches __hostUnregisterModalDismiss's owner resolution.
    if (vmModalOwner.get(modalId)?.scriptId !== run.scriptId) return;
    const handlerId = ctx.getString(handlerIdHandle);
    const dup = fnHandle.dup(); // survives run-end; disposed on unsub / dismiss-drop / teardown
    let perScript = vmHandlerHandles.get(run.scriptId);
    if (!perScript) { perScript = new Map(); vmHandlerHandles.set(run.scriptId, perScript); }
    const prev = perScript.get(handlerId);
    if (prev?.alive) { try { prev.dispose(); } catch { /* re-register replaces */ } }
    perScript.set(handlerId, dup);
    let listeners = vmModalListeners.get(modalId);
    if (!listeners) { listeners = new Set(); vmModalListeners.set(modalId, listeners); }
    listeners.add(handlerId);
  });
  ctx.setProp(ctx.global, '__hostRegisterModalDismiss', hostRegisterModalDismiss);
  hostRegisterModalDismiss.dispose();

  const hostUnregisterModalDismiss = ctx.newFunction('__hostUnregisterModalDismiss', (modalIdHandle, handlerIdHandle) => {
    const modalId = ctx.getString(modalIdHandle);
    const handlerId = ctx.getString(handlerIdHandle);
    // Resolve the owner from vmModalOwner (set at create) rather than activeRun, so an unsub from
    // any context disposes the right dup. The owner === the scriptId the dup was stored under.
    const scriptId = vmModalOwner.get(modalId)?.scriptId;
    if (scriptId !== undefined) {
      const perScript = vmHandlerHandles.get(scriptId);
      const h = perScript?.get(handlerId);
      if (h?.alive) { try { h.dispose(); } catch { /* */ } }
      perScript?.delete(handlerId);
    }
    vmModalListeners.get(modalId)?.delete(handlerId);
  });
  ctx.setProp(ctx.global, '__hostUnregisterModalDismiss', hostUnregisterModalDismiss);
  hostUnregisterModalDismiss.dispose();

  // ── P5 inc3b: broadcast subscription. Same dup-the-VM-fn pattern as
  // __hostRegisterHandler, but the closure is keyed by subId and lives in the SEPARATE
  // vmBroadcastHandles registry (broadcast subs are cleared per-run by the parent's
  // BroadcastClearMessage, unlike persistent handlers). The parent IPC is
  // broadcast-subscribe (not register-handler). ──
  const hostBroadcastSubscribe = ctx.newFunction('__hostBroadcastSubscribe', (subIdHandle, fnHandle, eventHandle) => {
    const run = sc.activeRun;
    const subId = ctx.getString(subIdHandle);
    if (run?.scriptId) {
      const event = ctx.getString(eventHandle);
      const dup = fnHandle.dup();
      let perScript = vmBroadcastHandles.get(run.scriptId);
      if (!perScript) { perScript = new Map(); vmBroadcastHandles.set(run.scriptId, perScript); }
      const prev = perScript.get(subId);
      if (prev?.alive) { try { prev.dispose(); } catch { /* re-subscribe replaces */ } }
      perScript.set(subId, dup);
      run.dispatchBroadcastSubscribe?.(subId, event);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostBroadcastSubscribe', hostBroadcastSubscribe);
  hostBroadcastSubscribe.dispose();
  const hostBroadcastUnsubscribe = ctx.newFunction('__hostBroadcastUnsubscribe', (subIdHandle) => {
    const run = sc.activeRun;
    const subId = ctx.getString(subIdHandle);
    if (run?.scriptId) {
      const perScript = vmBroadcastHandles.get(run.scriptId);
      const h = perScript?.get(subId);
      if (h?.alive) { try { h.dispose(); } catch { /* */ } }
      perScript?.delete(subId);
      run.dispatchBroadcastUnsubscribe?.(subId);
    }
    // returns undefined to the VM
  });
  ctx.setProp(ctx.global, '__hostBroadcastUnsubscribe', hostBroadcastUnsubscribe);
  hostBroadcastUnsubscribe.dispose();

  // The in-VM handler-call trampoline (reads __lsEncode at fire time).
  ctx.unwrapResult(ctx.evalCode(VM_HANDLER_BOOTSTRAP)).dispose();
  // #11 P4b Inc 1 — the intra-run deferred-chain drain harness (__lsTrackChain / __lsFlush).
  ctx.unwrapResult(ctx.evalCode(VM_FLUSH_BOOTSTRAP)).dispose();

  // ── Stable __console (built ONCE) — forwards to activeRun.console at call time. ──
  const consoleObj = ctx.newObject();
  for (const level of ['log', 'warn', 'error', 'info'] as const) {
    const fn = ctx.newFunction(level, (...argHandles) => {
      const handler = sc.activeRun?.console[level];
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

  // ── api.broadcast.emit limits (shared with asyncfn) — a sync host fn the in-VM proxy calls with the
  // serialised payload byte count; enforceBroadcastEmitLimits THROWS on over-cap / over-rate, which
  // quickjs-emscripten converts to a VM exception so the in-VM emit() throws (parity with the asyncfn
  // proxy). Keyed by the current run's scriptId, so the per-script rate bucket is shared across engines. ──
  const broadcastEmitCheck = ctx.newFunction('__lsBroadcastEmitCheck', (bytesHandle) => {
    const scriptId = sc.activeRun?.scriptId;
    if (scriptId) enforceBroadcastEmitLimits(scriptId, ctx.getNumber(bytesHandle) | 0);
    // returns undefined (void)
  });
  ctx.setProp(ctx.global, '__lsBroadcastEmitCheck', broadcastEmitCheck);
  broadcastEmitCheck.dispose();

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
    const run = sc.activeRun;
    if (!run) {
      settle('e', { name: 'Error', message: 'LumiScript QuickJS: no active run for fetch().' }, 'no active run');
    } else if (!run.allowDangerous) {
      settle('e', { name: 'Error', message: 'fetch() requires Allow Dangerous in the QuickJS engine. Use api.utils.http.* for HTTP.' }, 'fetch blocked');
    } else if (!run.hostFetch) {
      // allowDangerous but the host did not pass a fetch capability — should not happen in
      // production (child-entry always supplies makeGuardedHostFetch when allowDangerous);
      // fail loudly rather than silently no-op.
      settle('e', { name: 'Error', message: 'fetch() is unavailable: the host did not grant a fetch capability for this run.' }, 'fetch unavailable');
    } else {
      const hostFetch = run.hostFetch;
      const rawInit = reqInit as Record<string, unknown> | undefined;
      // 3b fetch-abortsignal — if the VM wrapper threaded an abortId, create a real host AbortController
      // for it so an in-VM ctrl.abort() (via __lsFetchAbort) cancels this request.
      const abortId = typeof rawInit?.__lsAbortId === 'string' ? (rawInit.__lsAbortId as string) : undefined;
      let controller: AbortController | undefined;
      if (abortId) { controller = new AbortController(); vmFetchAborts.set(abortId, controller); }
      void (async () => {
        try {
          const init: RequestInit = { method: reqInit?.method ?? 'GET' };
          if (reqInit?.headers) init.headers = reqInit.headers;
          if (reqInit?.body !== undefined && reqInit?.body !== null) init.body = reqInit.body as BodyInit;
          // fetch-dropped-requestinit — thread the JSON-able RequestInit fields the VM wrapper copied
          // through (credentials/mode/redirect/cache/etc.), matching asyncfn's raw-fetch pass-through.
          if (rawInit) {
            for (const k of FETCH_INIT_PASSTHROUGH) {
              if (rawInit[k] !== undefined) (init as Record<string, unknown>)[k] = rawInit[k];
            }
          }
          if (controller) init.signal = controller.signal;
          const res = await hostFetch(url, init);
          // 3c fetch-binary-base64 — cap by Content-Length BEFORE pulling the body when declared.
          const clen = Number(res.headers.get('content-length'));
          if (Number.isFinite(clen) && clen > FETCH_MAX_RESPONSE_BYTES) {
            settle('e', { name: 'Error', message: `fetch() response Content-Length ${clen} exceeds the ${FETCH_MAX_RESPONSE_BYTES}-byte limit.` }, 'response too large');
            return;
          }
          const bytes = new Uint8Array(await res.arrayBuffer());
          if (bytes.byteLength > FETCH_MAX_RESPONSE_BYTES) {
            settle('e', { name: 'Error', message: `fetch() response (${bytes.byteLength} bytes) exceeds the ${FETCH_MAX_RESPONSE_BYTES}-byte limit.` }, 'response too large');
            return;
          }
          const headers: Record<string, string> = {};
          res.headers.forEach((v, k) => { headers[k] = v; });
          // Preserve Set-Cookie multiplicity (the flat `headers` above collapses it) so the in-VM
          // Response's getSetCookie() returns each cookie; populated only on the direct path.
          const setCookies = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [];
          // 3c — body crosses as base64 (bodyB64), not a marshaled number array (~3x smaller transfer).
          const bodyB64 = Buffer.from(bytes).toString('base64');
          settle('v', { ok: res.ok, status: res.status, statusText: res.statusText, url: res.url, redirected: res.redirected, headers, bodyB64, setCookies }, 'fetch result could not be marshaled');
        } catch (err) {
          settle('e', run.serializeError(err), 'fetch error could not be serialized');
        } finally {
          if (abortId) vmFetchAborts.delete(abortId);
        }
      })();
    }
    void deferred.settled.then(pump);
    return deferred.handle;
  });
  ctx.setProp(ctx.global, '__lsFetch', fetchFn);
  fetchFn.dispose();
  // 3b fetch-abortsignal — the in-VM AbortController routes ctrl.abort() here; abort the mapped
  // host controller so the real request cancels (hostFetch then rejects with AbortError).
  const fetchAbortFn = ctx.newFunction('__lsFetchAbort', (abortIdHandle) => {
    const abortId = ctx.getString(abortIdHandle);
    const controller = vmFetchAborts.get(abortId);
    if (controller) { try { controller.abort(); } catch { /* */ } vmFetchAborts.delete(abortId); }
  });
  ctx.setProp(ctx.global, '__lsFetchAbort', fetchAbortFn);
  fetchAbortFn.dispose();
  ctx.unwrapResult(ctx.evalCode(VM_FETCH_BOOTSTRAP)).dispose();

  // toHostError parity pin — discriminate a thrown value IN-VM (instanceof Error + String(e)), since
  // ctx.dump loses the instanceof info. A real Error -> {isError, name, message, stack}; any other
  // thrown value -> {isError:false, str:String(e)} so the host surfaces new Error(String(value)),
  // matching asyncfn's serializeError else-branch (a thrown plain object becomes '[object Object]',
  // NOT its .message). Frozen below so a script can't spoof the discrimination.
  ctx.unwrapResult(ctx.evalCode(
    'globalThis.__lsErrInfo = function (e) { if (e instanceof Error) return { isError: true, name: String(e.name || "Error"), message: String(e.message), stack: e.stack ? String(e.stack) : undefined }; return { isError: false, str: String(e) }; };',
  )).dispose();

  // P3 audit H1 — lock the trusted scaffolding bindings. MUST be the last eval,
  // after api / __hostDispatch / __console / crypto / fetch are built, so frozen.
  ctx.unwrapResult(ctx.evalCode(VM_FREEZE_BOOTSTRAP)).dispose();

  // Keep the module alias = the shared record's ctx (the untouched notice bridges /
  // dispose / leak oracle read it directly). Return the record (#11 P7-0).
  // #11 P7-2 — getContextForScript stores the resolved record (sharedSc / scriptContexts) so this
  // stays model-agnostic; createContext just builds + returns a fresh record.
  return sc;
  } catch (err) {
    // L3 — never leak the half-built native context on a setup failure.
    try { ctx.dispose(); } catch { /* already dead */ }
    throw err;
  }
}

function toHostError(ctx: QuickJSContext, errorHandle: QuickJSHandle): Error {
  // Discriminate `instanceof Error` IN-VM (parity with asyncfn's serializeError) — ctx.dump alone
  // loses it, so a thrown plain object `{message:'x'}` would otherwise be upgraded to Error('x')
  // here while asyncfn surfaces String(value) = '[object Object]'. __lsErrInfo returns either
  // {isError:true, name, message, stack} or {isError:false, str:String(e)} (String runs in-VM).
  let info: { isError?: boolean; name?: unknown; message?: unknown; stack?: unknown; str?: unknown } | undefined;
  try {
    const fn = ctx.getProp(ctx.global, '__lsErrInfo');
    const res = ctx.callFunction(fn, ctx.undefined, errorHandle);
    fn.dispose();
    if (res.error) { res.error.dispose(); }
    else { info = ctx.dump(res.value) as typeof info; res.value.dispose(); }
  } catch { /* helper missing/clobbered — fall back to the raw dump below */ }
  if (info?.isError) {
    const err = new Error(String(info.message ?? ''));
    if (info.name)  err.name  = String(info.name);
    if (info.stack) err.stack = String(info.stack);
    // #11 observability — count an in-VM out-of-memory (a per-context memory-limit hit). QuickJS
    // surfaces it as InternalError('out of memory'); the shape is pinned by a telemetry test against
    // _setChildWasmBudgetForTests so a quickjs-emscripten version bump that drifts it fails loudly.
    if (String(info.name) === 'InternalError' && /out of memory/i.test(String(info.message ?? ''))) {
      engineCounters.inVmOom++;
    }
    return err;
  }
  if (info && info.isError === false) {
    return new Error(String(info.str ?? '')); // non-Error thrown value → String() parity
  }
  // Helper unavailable: best-effort raw dump (objects → '[object Object]' like asyncfn's String()).
  const dumped = ctx.dump(errorHandle);
  return new Error(typeof dumped === 'object' && dumped !== null ? '[object Object]' : String(dumped));
}

/**
 * Run a user-script body in the QuickJS isolate and return its resolved value.
 * Caller (`runOne`) wraps this in `raceWithTimeout` + `runIdContext.run`, exactly
 * like the AsyncFunction path, so async-timeout semantics + runId attribution are
 * identical.
 */
export async function runUserScriptInQuickJS(opts: QuickJSRunOptions): Promise<unknown> {
  // #11 P7-3.1 (audit) — RESERVE this script's context before the acquisition awaits (getContextForScript
  // + `await prior`), during which sc.activeRun is not yet set and an unpinned context would be
  // isEvictable: a concurrent build's enforcePoolCap or the sweep could dispose the ctx this parked run
  // is about to use (the audit's microtask-race UAF). Released in the finally; on a getContextForScript
  // rejection (build failure) the finally is never entered, so release on that path explicitly.
  const scriptId = opts.script.id;
  reserveContext(scriptId);
  let sc: ScriptContext;
  try {
    sc = await getContextForScript(scriptId);
  } catch (err) {
    releaseContext(scriptId);
    throw err;
  }
  const ctx = sc.ctx;

  // #11 P2/H1 — acquire the run lock BEFORE touching any shared per-run state.
  // The link is established synchronously (no await between reading and replacing
  // sc.runChain) so concurrent callers queue deterministically; then await the prior
  // run before claiming activeRun / currentDeadline / the in-VM data.
  const prior = sc.runChain;
  let releaseRun!: () => void;
  sc.runChain = new Promise<void>((resolve) => { releaseRun = resolve; });
  await prior;

  // #11 audit follow-up — teardown-UAF guard. The context can be disposed (disposeContextForScript, on
  // a script-unregister that runs synchronously off the message loop while this run was parked at
  // `await getContextForScript` / `await prior` — activeRun not yet set, so only the reservation guards
  // it, and the teardown path ignores the reservation; tracked as a per-script-rollout must-fix). No VM
  // handles are held yet at this point, so the dispose itself doesn't abort; but resuming onto the dead
  // `ctx` local would. Re-check `ctx.alive` and bail cleanly (release the lock + reservation) — the run
  // was for a script that got unregistered mid-flight, so aborting it is correct. mirrors the handler
  // re-fetch guard fireHandlerInQuickJS already has. No-op under 'shared' (context never disposed here).
  if (!ctx.alive) {
    releaseRun();
    releaseContext(scriptId);
    throw new Error(`LumiScript QuickJS: script context was disposed mid-acquisition (script ${scriptId} unregistered during its run).`);
  }

  sc.currentDeadline = Date.now() + opts.timeoutMs;
  sc.lastUsedAt = Date.now(); // #11 P7-3 — a run/fire start counts as use (LRU recency; keeps a hot script's context fresh)
  sc.activeRun = { dispatch: opts.dispatch, console: opts.console, serializeError: opts.serializeError, allowDangerous: opts.allowDangerous ?? false, hostFetch: opts.hostFetch, dispatchOnHandle: opts.dispatchOnHandle, scriptId: opts.script.id, dispatchRegisterHandler: opts.dispatchRegisterHandler, dispatchUnregisterHandler: opts.dispatchUnregisterHandler, dispatchUnregisterHandlerNamed: opts.dispatchUnregisterHandlerNamed, dispatchBroadcastSubscribe: opts.dispatchBroadcastSubscribe, dispatchBroadcastUnsubscribe: opts.dispatchBroadcastUnsubscribe, dispatchStreamStart: opts.dispatchStreamStart, dispatchStreamCancel: opts.dispatchStreamCancel };
  // Guard against a disposed context: a settle's `deferred.settled.then(pump)` microtask can fire AFTER
  // the context was disposed (e.g. a parked stream pull settled by the teardown sweep, then the context
  // disposed on the same tick). executePendingJobs on a freed runtime throws "Lifetime not alive"; skip it.
  const pump = () => { if (ctx.alive) ctx.runtime.executePendingJobs(); };

  // #11 fix (d) — a synchronous `while(true){}` blocks the host event loop, so
  // runOne's raceWithTimeout can't fire; the QuickJS interrupt handler aborts
  // the VM instead, surfacing an InternalError('interrupted'). The deadline
  // having passed is the unambiguous signal the interrupt fired (the handler
  // returns true ONLY then). Normalize to the SAME ScriptTimeoutError name +
  // message shape the asyncfn path uses, so the user sees the friendly message
  // AND runOne's `error.name === 'ScriptTimeoutError'` gate fires proc.fail() —
  // killing the child so the interrupted body can't leave residual state in the
  // reused context for the next run.
  const timedOut = () => Date.now() > sc.currentDeadline;
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
    // #11 list-methods parity — seed the sync-list snapshots so the in-VM list reads (intercepted
    // in API_BOOTSTRAP) return arrays. Overwritten per body-run like data/script.
    ctx.newString(JSON.stringify(marshalEncode(opts.listSnapshots ?? {}))).consume((h) => ctx.setProp(ctx.global, '__lsListSnapshotsJson', h));
    ctx.unwrapResult(ctx.evalCode(`
      globalThis.data = globalThis.__lsDecode(JSON.parse(globalThis.__lsDataJson));
      globalThis.script = JSON.parse(globalThis.__lsScriptJson);
      globalThis.__lsListSnapshots = globalThis.__lsDecode(JSON.parse(globalThis.__lsListSnapshotsJson));
      globalThis.__lsRequireCache = {};
      globalThis.__lsRequireInProgress = {};
      globalThis.__lsRequireLoading = {};
      globalThis.__lsVmHandles = {};
      globalThis.__lsOutstanding = new Set();
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
      const eh = track(evalRes.error);
      throw timedOut() ? timeoutError() : toHostError(ctx, eh);
    }
    const settledP = ctx.resolvePromise(track(evalRes.value));
    pump();
    const settled = await settledP;
    if (settled.error) {
      const eh = track(settled.error);
      throw timedOut() ? timeoutError() : toHostError(ctx, eh);
    }
    return marshalDecode(JSON.parse(ctx.getString(track(settled.value))));
  } finally {
    // #11 P4b Inc 1 — drain intra-run deferred chains (un-awaited dispatches, e.g. a
    // gate-deferred factory call) while activeRun is STILL LIVE, on BOTH the success and
    // the body-error path — mirroring asyncfn's proxy.flush() in child-entry's OUTER finally
    // (which runs on both, NOT only after a clean settle). The in-VM flush is the only
    // drainer of not-yet-sent gated chains (host-side trackChain only sees already-sent
    // dispatches), so skipping it on a throwing body would silently drop a queued gated
    // side-effect once Inc 2 lands gated handles. Best-effort: __lsFlush is allSettled in-VM
    // (won't reject); the try/catch keeps a flush hiccup from masking the body error. Skipped
    // on timeout — the worker is being torn down, and a hung chain (the timeout's own cause)
    // would hang the flush. Runs before activeRun is nulled so the drained sends still route.
    const wasTimedOut = timedOut();
    if (!wasTimedOut) {
      try {
        const flushHandle = ctx.unwrapResult(ctx.evalCode('globalThis.__lsFlush()'));
        const flushP = ctx.resolvePromise(flushHandle);
        pump();
        const flushSettled = (await flushP) as { value?: QuickJSHandle; error?: QuickJSHandle };
        flushHandle.dispose();
        if (flushSettled.value) flushSettled.value.dispose();
        if (flushSettled.error) flushSettled.error.dispose();
      } catch { /* best-effort drain — never let the flush mask the run's outcome */ }
    }
    sc.currentDeadline = Number.POSITIVE_INFINITY;
    sc.activeRun = undefined;
    // Dispose every handle this run allocated, even on the throw paths. `.alive`
    // guards against a handle disposed elsewhere; cleanup must never throw.
    for (const h of arena) {
      try { if (h.alive) h.dispose(); } catch { /* swallow — run is over */ }
    }
    releaseRun(); // release the run lock so the next queued run can proceed
    releaseContext(scriptId); // #11 P7-3.1 — drop the eviction reservation now the run is fully done
    maybeDisposePendingContext(scriptId); // #11 audit — dispose a teardown-deferred context now we're idle
  }
}

/** #11 P5 — true iff a quickjs handler closure is registered for (scriptId, handlerId).
 *  child-entry routes a RunHandlerRequest to the quickjs fire path by this predicate
 *  (no engineMode needed on the wire — a handler's engine is where its closure lives). */
export function hasVmHandler(scriptId: string, handlerId: string): boolean {
  return vmHandlerHandles.get(scriptId)?.get(handlerId)?.alive ?? false;
}

/** #11 P5 inc3b — true iff a quickjs broadcast handler is registered for (scriptId,
 *  subId). child-entry's handleBroadcastFire routes to the VM by this predicate. */
export function hasVmBroadcast(scriptId: string, subId: string): boolean {
  return vmBroadcastHandles.get(scriptId)?.get(subId)?.alive ?? false;
}

/** #11 P7-3 — true iff the inner (handlerId|subId)->handle map has ANY still-alive handle. A single
 *  unregister deletes its entry, but an EMPTIED inner map lingers (size 0), and a teardown off the
 *  message loop can dispose without deleting — so pin liveness is by `.alive`, matching hasVmHandler,
 *  not by `.size`. */
function mapHasAliveHandle(m: Map<string, QuickJSHandle> | undefined): boolean {
  if (!m) return false;
  for (const h of m.values()) if (h.alive) return true;
  return false;
}

/** #11 P7-3 — true iff this script's per-script context holds LIVE cross-run VM state a later fire or
 *  notice would reach, making it UN-EVICTABLE: an alive handler dup (vmHandlerHandles — commands /
 *  interceptors / modal-onDismiss), an alive broadcast sub (vmBroadcastHandles), or a live gated-factory
 *  owner record (vmWidgetOwner / vmModalOwner). Evicting such a context disposes those handles, and a
 *  subsequent fire would find a rebuilt EMPTY context — the fire path has no source to re-register
 *  (QuickJSFireOptions carries none), so the handler is permanently LOST. The idle sweep (P7-3.1) never
 *  evicts a pinned context; this is the load-bearing correctness gate. Reads LIVE occupancy every call
 *  (broadcast pins are transient — cleared at each run-start via BroadcastClearMessage — so a context
 *  legitimately transitions pinned->unpinned; never cache an 'ever-registered' flag). EXCLUDES
 *  vmDomStableIds (plain strings, re-injected fresh) + vmModalListeners (handlerId strings whose actual
 *  fn dups live in vmHandlerHandles, which pins for them). */
export function isContextPinned(scriptId: string): boolean {
  if (mapHasAliveHandle(vmHandlerHandles.get(scriptId))) return true;
  if (mapHasAliveHandle(vmBroadcastHandles.get(scriptId))) return true;
  for (const rec of vmWidgetOwner.values()) if (rec.scriptId === scriptId) return true;
  for (const rec of vmModalOwner.values()) if (rec.scriptId === scriptId) return true;
  // An open in-VM generateStream pins the context too. A parked pull holds a live deferred handle
  // INSIDE this context, and even an undrained stream's cell must be swept (and its upstream generation
  // cancelled) before the context is disposed. Keeping the context resident until the stream drains / is
  // cancelled / the script is torn down stops idle- or cap-eviction from disposing a context a stream
  // still points into (which would strand the parked pull's handle or leak the upstream generation).
  const openStreams = vmStreamsByScript.get(scriptId);
  if (openStreams && openStreams.size > 0) return true;
  return false;
}

/** #11 P5 inc3b — dispose this script's broadcast handler dups (broadcast-clear at
 *  run-start, or full teardown). Returns the count disposed. */
export function disposeScriptVmBroadcast(scriptId: string): number {
  const perScript = vmBroadcastHandles.get(scriptId);
  if (!perScript) return 0;
  let n = 0;
  for (const h of perScript.values()) {
    try { if (h.alive) { h.dispose(); n++; } } catch { /* swallow — teardown */ }
  }
  vmBroadcastHandles.delete(scriptId);
  return n;
}

/** Test-only — the registered handlerIds for a script (handlerIds are unique per
 *  registration, generated in-VM, so tests need a way to discover them). */
export function _vmHandlerIdsForTests(scriptId: string): string[] {
  return [...(vmHandlerHandles.get(scriptId)?.keys() ?? [])];
}

/** Test-only — the registered broadcast subIds for a script (P5 inc3b). */
export function _vmBroadcastIdsForTests(scriptId: string): string[] {
  return [...(vmBroadcastHandles.get(scriptId)?.keys() ?? [])];
}

/** #11 P5 — dispose every dup'd handler handle for a script (teardown / reload /
 *  unregister-all). Returns the count disposed. */
/** #11 P5-2 — dispose a SINGLE dup'd VM handler fn by (scriptId, handlerId) — e.g. a one-shot timer's
 *  callback after it fires, so a fired setTimeout doesn't pin the context until teardown. No-op if the
 *  handler is absent. Distinct from disposeScriptVmHandlers (which sweeps the whole script). */
export function disposeVmHandler(scriptId: string, handlerId: string): void {
  const perScript = vmHandlerHandles.get(scriptId);
  const h = perScript?.get(handlerId);
  if (h?.alive) { try { h.dispose(); } catch { /* already gone */ } }
  perScript?.delete(handlerId);
}

export function disposeScriptVmHandlers(scriptId: string): number {
  let n = disposeScriptVmBroadcast(scriptId); // full teardown also drops broadcast subs
  const perScript = vmHandlerHandles.get(scriptId);
  if (perScript) {
    for (const h of perScript.values()) {
      try { if (h.alive) { h.dispose(); n++; } } catch { /* swallow — teardown */ }
    }
    vmHandlerHandles.delete(scriptId);
  }
  // #11 P4b Inc 1 — full teardown also drops the DOM stable-id map (mirrors asyncfn's
  // clearScriptDomStableIds on unregister; a fresh script re-injects with new elementIds).
  vmDomStableIds.delete(scriptId);
  // #11 P4b Inc 3c-2 — drop this script's gated-factory notice state: dispose the host-held cell
  // handles (widget positionCache / modal dismissedRef) + the owner records. onDismiss listener dups
  // were swept above (they live in vmHandlerHandles). No in-VM registry to clear (audit#0 relocation).
  // Deleting from a Map during for-of iteration is safe.
  for (const [wid, rec] of vmWidgetOwner) {
    if (rec.scriptId === scriptId) { try { if (rec.cell.alive) rec.cell.dispose(); } catch { /* teardown */ } vmWidgetOwner.delete(wid); }
  }
  for (const [mid, rec] of vmModalOwner) {
    if (rec.scriptId === scriptId) { try { if (rec.cell.alive) rec.cell.dispose(); } catch { /* teardown */ } vmModalOwner.delete(mid); vmModalListeners.delete(mid); }
  }
  return n;
}

/** #11 P7-2 — production teardown of a script from the quickjs engine (disable / delete / reload).
 *  ALWAYS sweeps the script's dup'd VM handles via disposeScriptVmHandlers. The sweep-before-dispose
 *  ORDER is LOAD-BEARING: the release-sync WASM build's ctx.dispose() ABORTS the runtime (JS_FreeRuntime
 *  asserts list_empty(&rt->gc_obj_list)) if ANY handle owned by the context is still alive — so every
 *  new per-context handle source MUST be registered in disposeScriptVmHandlers or a future dispose here
 *  will abort. `disposeContext` gates the context teardown itself:
 *    - true  (disable / delete): under contextModel='per-script', dispose the script's QuickJSContext
 *      and drop its pool entries. WITHOUT this the pool grows unbounded across create/delete churn
 *      (each scriptId is a fresh UUID → a fresh ~tens-of-MB context orphaned forever) — the P7-2 audit
 *      must-fix (handle-lifecycle-dispose#0), gating the eventual contextModel default-flip.
 *    - false (reload): keep the context — asyncfn parity (arbitrary `globalThis` + module captures
 *      survive a reload; "reload is not a disable") and it skips a ~95ms rebuild. Only the stale
 *      handler dups are swept so the re-run re-registers cleanly.
 *  Under 'shared' the single record is reused across every script, so the context is NEVER disposed
 *  here regardless of `disposeContext` (only the handle sweep runs) — identical to the prior behavior. */
export function disposeContextForScript(scriptId: string, disposeContext: boolean): number {
  const n = disposeScriptVmHandlers(scriptId);
  if (disposeContext && contextModel === 'per-script') {
    const sc = scriptContexts.get(scriptId);
    scriptContexts.delete(scriptId);
    // Drop the in-flight build too: getContextForScript's identity-guard makes a still-resolving
    // build dispose its own orphan instead of publishing into the now-cleared pool.
    scriptContextPromises.delete(scriptId);
    if (sc) {
      // #11 audit follow-up — DEFER disposal if a run holds this context. script-unregister runs
      // synchronously off the message loop, so it can fire while a run is parked at acquisition
      // (reserved, no VM handles yet) OR mid-execution (activeRun set, holding live arena handles).
      // Disposing now would UAF the parked run OR — worse — abort the release-sync WASM runtime on the
      // mid-run's live handles (JS_FreeRuntime asserts an empty gc_obj_list). Mirror evictIdleContext's
      // reserved/activeRun guard: stash the context; the run's finally (maybeDisposePendingContext, after
      // it drops activeRun + the reservation) disposes it once fully idle. Removing it from the pool maps
      // above already prevents NEW acquisitions. No-op-safe: a rebuilt context for the same scriptId gets
      // a fresh pool entry, and the stale one here disposes when its holding run finishes.
      if (isContextReserved(scriptId) || sc.activeRun !== undefined) {
        pendingContextDisposal.set(scriptId, sc);
      } else {
        try { if (sc.ctx.alive) sc.ctx.dispose(); } catch { /* teardown */ }
      }
    }
    // #11 observability (audit follow-up) — this disable/delete removal shrinks the pool too, so re-arm
    // the over-cap WARN latch when it brings us back within cap. Without this, a pinned script leaving
    // via disable/delete (not idle-eviction) leaves overCapLogged stuck true, silently suppressing the
    // next genuine over-cap-tolerated warn. Mirrors the reset in evictIdleContext.
    if (scriptContexts.size <= POOL_CAP) overCapLogged = false;
  }
  return n;
}

/** #11 audit follow-up — contexts whose disposal was DEFERRED by disposeContextForScript because a run
 *  held them at teardown time. Keyed by the (now pool-removed) scriptId; disposed by the holding run's
 *  finally via maybeDisposePendingContext once it's idle. Kept OUT of scriptContexts so no new run
 *  acquires it. Cleared in _disposeContextForTests. */
const pendingContextDisposal = new Map<string, ScriptContext>();

/** Dispose a context whose teardown was deferred, IF its holding run has now released it (no reservation,
 *  no activeRun). Called from the run/fire finally after activeRun is nulled + the reservation dropped.
 *  No-op if nothing pending for the scriptId, or if another run still holds it (a queued run resolves it). */
function maybeDisposePendingContext(scriptId: string): void {
  const sc = pendingContextDisposal.get(scriptId);
  if (!sc) return;
  if (isContextReserved(scriptId) || sc.activeRun !== undefined) return; // still in use — a later release retries
  pendingContextDisposal.delete(scriptId);
  // Re-sweep before disposing. disposeContextForScript swept this script's handler dups + open streams at
  // unregister, but a run/handler that executed on this deferred (still-alive) context AFTERWARD — a queued
  // run resuming, or the holding run past an await — could have registered NEW handler/timer/component dups
  // or opened NEW streams. Disposing the context with any of those live would leave a per-context handle
  // outliving ctx.dispose() → JS_FreeRuntime aborts the whole WASM child. The context is idle here (no
  // reservation, no activeRun) so this is safe; both calls are no-ops in the normal case (nothing
  // re-registered). sweepVmStreamsForScript settles any parked pull (freeing its deferred) while the context
  // is still alive.
  disposeScriptVmHandlers(scriptId);
  sweepVmStreamsForScript(scriptId);
  try { if (sc.ctx.alive) sc.ctx.dispose(); } catch { /* teardown */ }
}

/** #11 P7-3 — IDLE EVICTION primitive (distinct from disposeContextForScript). Drops an idle script's
 *  QuickJSContext to reclaim WASM heap; the next getContextForScript rebuilds it lazily + transparently
 *  (a body-run/fire just re-pays the ~95ms bootstrap). Unlike disposeContextForScript it does NOT call
 *  disposeScriptVmHandlers — an evictable context is by definition UNPINNED (no live cross-run handler /
 *  broadcast / factory state), so there is nothing to sweep; skipping the destructive sweep encodes the
 *  invariant "we only ever evict handler-less contexts" and prevents a future change from silently
 *  destroying live handlers if the pin gate regressed. GUARDED: no-op unless contextModel='per-script'
 *  AND the context is not pinned (the caller — the P7-3.1 sweep — filters pinned + mid-run, but the
 *  pin re-check here is the load-bearing last line of defense against a stale candidate snapshot).
 *  Deletes BOTH pool maps so a concurrent in-flight build self-disposes its orphan (identity-guard
 *  discipline, mirroring disposeContextForScript). Returns true iff a context was actually disposed. */
export function evictIdleContext(scriptId: string): boolean {
  if (contextModel !== 'per-script') return false;
  const sc = scriptContexts.get(scriptId);
  // Never evict a context mid-run: a body-run/fire captures `const ctx = sc.ctx` AFTER its await, so
  // disposing between that capture and a later ctx call is a use-after-free. The P7-3.1 sweep also
  // pre-filters mid-run candidates (+ LRU recency covers the about-to-run window), but self-guarding
  // here makes the primitive safe to call unconditionally.
  if (sc && sc.activeRun !== undefined) return false;
  if (isContextReserved(scriptId)) return false; // a body-run is mid-acquisition (before activeRun is set) — same UAF
  if (isContextPinned(scriptId)) return false; // never evict a pinned context (use-after-free on next fire)
  scriptContexts.delete(scriptId);
  scriptContextPromises.delete(scriptId);
  if (sc) {
    try { if (sc.ctx.alive) sc.ctx.dispose(); } catch { /* eviction — best effort */ }
    engineCounters.contextEvictions++;            // #11 observability — cumulative evictions (idle + cap)
    engineCounters.lastEvictionAt = Date.now();
    if (scriptContexts.size <= POOL_CAP) overCapLogged = false; // pool recovered — re-arm the over-cap warn
    return true;
  }
  return false;
}

/** #11 P4b Inc 3c-2a — true iff widgetId is a quickjs-engine float widget. child-entry routes the
 *  scriptId-less float-widget-position notice to this VM bridge vs the asyncfn notify by this. */
export function hasVmWidget(widgetId: string): boolean {
  return vmWidgetOwner.has(widgetId);
}

/** #11 P4b Inc 3c-2a — apply a float-widget-position notice to the positionCache cell (the same
 *  object getPosition() reads) for a quickjs widget, by writing the host-held cell handle directly
 *  via setProp. Pure sync cell write, no run/activeRun (the notice arrives between runs), no in-VM
 *  eval / global (audit#0 — the cell is never exposed on globalThis). */
export function notifyVmWidgetPosition(widgetId: string, x: number, y: number): void {
  const rec = vmWidgetOwner.get(widgetId);
  if (!rec) return;
  const ctx = resolveScriptContext(rec.scriptId)?.ctx; // #11 P7-1 — the owning script's context
  if (!ctx || !rec.cell.alive) return;
  // setProp is wrapped: __hostRegisterWidget is VM-callable, so a script could same-owner-replace its
  // OWN cell with a non-object (setProp would throw). A sabotaged own handle must not crash the host.
  try {
    ctx.newNumber(x).consume((h) => ctx.setProp(rec.cell, 'x', h));
    ctx.newNumber(y).consume((h) => ctx.setProp(rec.cell, 'y', h));
  } catch { /* hostile/non-object cell — drop the write, never crash the IPC handler */ }
}

/** #11 P4b Inc 3c-2b — true iff modalId is a quickjs-engine advanced modal. child-entry routes the
 *  scriptId-less advanced-modal-dismissed notice to this VM bridge vs the asyncfn notify by this. */
export function hasVmModal(modalId: string): boolean {
  return vmModalOwner.has(modalId);
}

/** #11 P4b Inc 3c-2b — apply an advanced-modal-dismissed notice to the VM: EAGERLY flip the in-VM
 *  dismissedRef cell (+reason) so handle.dismissed reads true immediately and a later onDismiss
 *  takes the already-dismissed fast-path. Returns the owner scriptId + the onDismiss handlerIds so
 *  child-entry can fire them via fireHandlerInQuickJS; null for an unknown/already-dropped modal
 *  (late or duplicate notice -> fires-once). The caller MUST call dropVmModal AFTER firing — the
 *  listener dups must stay alive in vmHandlerHandles during the fire. */
export function notifyVmModalDismissed(modalId: string, reason: string): { scriptId: string; handlerIds: string[] } | null {
  const rec = vmModalOwner.get(modalId);
  if (!rec) return null;
  const ctx = resolveScriptContext(rec.scriptId)?.ctx; // #11 P7-1 — the owning script's context
  if (!ctx) return null;
  // EAGER flip the dismissedRef cell via the host-held handle: current=true, reason=<notice reason>.
  // ctx.true is a constant handle — never disposed; setProp does not consume the value. No in-VM eval
  // / global (audit#0). The cell handle is disposed now (the VM closure keeps the object alive for the
  // handle getter); dropVmModal handles only the listener dups afterwards.
  if (rec.cell.alive) {
    // setProp wrapped for the same reason as notifyVmWidgetPosition: a script could have same-owner-
    // replaced its own dismissedRef with a non-object. A sabotaged own modal must not crash the host;
    // the dismiss fan-out (separate listener dups) still proceeds below.
    try {
      ctx.setProp(rec.cell, 'current', ctx.true);
      ctx.newString(reason).consume((h) => ctx.setProp(rec.cell, 'reason', h));
    } catch { /* hostile/non-object cell — drop the flip, never crash the IPC handler */ }
    try { rec.cell.dispose(); } catch { /* */ }
  }
  // SYNCHRONOUS fires-once (audit lifecycle-races#0 / notice-bridge#0, asyncfn parity api-proxy.ts:509):
  // claim the modal NOW — remove owner + listener membership before returning the snapshot — so a
  // SECOND dismiss notice arriving during the (async) onDismiss fan-out re-enters and hits the
  // unknown-modal return-null path instead of re-firing every listener. The dups stay alive in
  // vmHandlerHandles (NOT cleared here) so the fan-out's fireHandlerInQuickJS still finds them; the
  // caller disposes them via dropVmModal(modalId, scriptId, handlerIds) after Promise.allSettled.
  const handlerIds = [...(vmModalListeners.get(modalId) ?? [])];
  vmModalOwner.delete(modalId);
  vmModalListeners.delete(modalId);
  return { scriptId: rec.scriptId, handlerIds };
}

/** #11 P4b Inc 3c-2b — drop a dismissed modal's residual state AFTER its onDismiss listeners have
 *  fired: dispose the listener dups (by the scriptId + handlerIds captured at notify time, since
 *  notifyVmModalDismissed already cleared the owner/listener maps for synchronous fires-once) and
 *  the modal already notified, its cell handle was disposed there. Idempotent — disposing an
 *  already-disposed dup is a no-op. scriptId/handlerIds are optional (a bare dropVmModal(modalId)
 *  just clears any residual owner/cell — the dups are then reaped at script teardown). */
export function dropVmModal(modalId: string, scriptId?: string, handlerIds?: readonly string[]): void {
  if (scriptId !== undefined && handlerIds) {
    const perScript = vmHandlerHandles.get(scriptId);
    for (const hid of handlerIds) {
      const h = perScript?.get(hid);
      if (h?.alive) { try { h.dispose(); } catch { /* */ } }
      perScript?.delete(hid);
    }
  }
  // If the owner record still exists (notify did NOT run — e.g. a direct dropVmModal in a test),
  // dispose its cell handle + clear membership. After notifyVmModalDismissed these are already gone.
  const rec = vmModalOwner.get(modalId);
  if (rec) { try { if (rec.cell.alive) rec.cell.dispose(); } catch { /* */ } vmModalOwner.delete(modalId); }
  vmModalListeners.delete(modalId);
}

/** Options for firing a stored in-VM handler (see fireHandlerInQuickJS). */
export interface QuickJSFireOptions {
  scriptId:       string;
  handlerId:      string;
  args:           unknown[];
  timeoutMs:      number;
  dispatch:       (method: string, args: unknown[]) => Promise<unknown>;
  console:        QuickJSConsole;
  serializeError: (err: unknown) => { name: string; message: string; stack?: string };
  /** #11 P7-F3 — the firing script's identity, re-seeded into globalThis.script at fire-start so a
   *  fired handler reads ITS OWN script (not the last body-run's residue). Absent (broadcast /
   *  onDismiss fires that carry only scriptId) → reconstructed as {id: scriptId, name:'', type:''}. */
  script?:        { id: string; name: string; type: string };
  allowDangerous?: boolean;
  hostFetch?:      (url: string, init?: RequestInit) => Promise<Response>;
  /** #11 P7-F4 (Tier 0) — the scriptId of the run that triggered this fire via api.tools.invoke (only
   *  that path sets it). When it equals the owner AND the owner's own run holds the runChain, the fire
   *  is a SELF-reentrant invoke that would deadlock; reject it fast instead. */
  callerScriptId?: string;
  dispatchOnHandle?: (targetHandle: HandleRef, method: string, args: unknown[]) => Promise<unknown>;
  dispatchRegisterHandler?: (kind: string, handlerId: string, meta: unknown) => void;
  dispatchUnregisterHandler?: (kind: string, handlerId: string) => void;
  dispatchUnregisterHandlerNamed?: (kind: string, name: string) => void;
  dispatchBroadcastSubscribe?: (subId: string, event: string) => void;
  dispatchBroadcastUnsubscribe?: (subId: string) => void;
  dispatchStreamStart?: (requestId: string, method: string, args: unknown[], hasSignal: boolean) => void;
  dispatchStreamCancel?: (requestId: string) => void;
}

/**
 * #11 P5 — fire a stored in-VM handler. Looks up the dup'd fn handle, marshals the
 * event args INTO the VM, calls the handler via the __lsCallHandler trampoline, and
 * bridges its (possibly async) result back — the INVERSE of __hostDispatch's bridge,
 * and structurally identical to the body-run (callFunction → resolvePromise → pump),
 * so a handler that `await`s an api.* call drains through the same machinery.
 *
 * Fires are SERIALIZED through the same `runChain` as body-runs: the shared context
 * has one `activeRun`/`currentDeadline`, so two overlapping fires (or a fire during a
 * body-run) would corrupt each other. The handler's own `api.*` calls route through
 * the fire's `activeRun`. The fn handle is NOT disposed here — it lives in the
 * registry until unregister/teardown.
 */
export async function fireHandlerInQuickJS(opts: QuickJSFireOptions): Promise<unknown> {
  const sc = await getContextForScript(opts.scriptId);
  const ctx = sc.ctx;
  // The fire id may be a RunHandlerRequest handlerId OR a broadcast subId — they share
  // this fire path but live in separate registries (different clear lifecycles).
  const lookup = (): QuickJSHandle | undefined =>
    vmHandlerHandles.get(opts.scriptId)?.get(opts.handlerId) ?? vmBroadcastHandles.get(opts.scriptId)?.get(opts.handlerId);
  if (!lookup()?.alive) {
    throw new Error(`LumiScript QuickJS: no handler ${opts.handlerId} registered for script ${opts.scriptId}.`);
  }

  // #11 P7-F4 (Tier 0) — fast-reject a SELF-reentrant api.tools.invoke. If the OWNER's own run holds the
  // runChain (sc.activeRun.scriptId === owner) AND the invoke came from that same owner
  // (callerScriptId === owner), `await prior` below would block forever: the caller run is parked
  // awaiting this very fire's result, so it never releases the lock the fire needs → deadlock → run
  // timeout → proc.fail → whole-child respawn (co-tenant runs killed). Reject BEFORE claiming the lock;
  // fireVmHandler serializes this throw into HandlerResult.error → the tool wrapper surfaces it as a
  // rejected promise on the caller's `await api.tools.invoke(...)` — catchable, no deadlock, no respawn.
  // A benign cross-script invoke (B invokes A's tool) fails callerScriptId===owner and serializes as
  // before; the shared-context case is guarded by sc.activeRun.scriptId===owner (a DIFFERENT script
  // holding the shared lock is not this owner's self-invoke). Full parity (returning the value) awaits
  // per-run isolation (P7-H1); this is the strictly-better failure mode until then. asyncfn never
  // reaches this path (its fires call the handler directly, no runChain).
  if (
    opts.callerScriptId !== undefined &&
    opts.callerScriptId === opts.scriptId &&
    sc.activeRun !== undefined &&
    sc.activeRun.scriptId === opts.scriptId
  ) {
    const err = new Error(
      `api.tools.invoke: a script cannot invoke its OWN tool while one of its runs is still in ` +
      `progress — the tool handler is serialized behind the current run, which is itself awaiting this ` +
      `invoke (a self-reentrant deadlock). Invoke the tool from a separate run/event, or call the ` +
      `underlying logic directly instead of through api.tools.invoke.`,
    );
    err.name = 'ReentrantToolInvokeError';
    engineCounters.reentrantRejects++; // #11 observability — track F4 self-invoke fast-rejects
    throw err;
  }

  // Serialize against body-runs + other fires on the shared context.
  const prior = sc.runChain;
  let releaseRun: () => void = () => {};
  sc.runChain = new Promise<void>((resolve) => { releaseRun = resolve; });
  await prior;

  // RE-FETCH after the await — an unregister/teardown (which runs off the message
  // loop, NOT runChain-serialized) may have disposed the handle while we were
  // queued. Using a stale disposed handle in callFunction would throw a confusing
  // use-after-free; surface the clean not-found instead.
  const fnHandle = lookup();
  if (!fnHandle?.alive) {
    releaseRun();
    throw new Error(`LumiScript QuickJS: handler ${opts.handlerId} was unregistered before its fire ran (script ${opts.scriptId}).`);
  }

  sc.currentDeadline = Date.now() + opts.timeoutMs;
  sc.lastUsedAt = Date.now(); // #11 P7-3 — a run/fire start counts as use (LRU recency; keeps a hot script's context fresh)
  sc.activeRun = {
    dispatch: opts.dispatch, console: opts.console, serializeError: opts.serializeError,
    allowDangerous: opts.allowDangerous ?? false, hostFetch: opts.hostFetch,
    dispatchOnHandle: opts.dispatchOnHandle, scriptId: opts.scriptId,
    dispatchRegisterHandler: opts.dispatchRegisterHandler,
    dispatchUnregisterHandler: opts.dispatchUnregisterHandler,
    dispatchUnregisterHandlerNamed: opts.dispatchUnregisterHandlerNamed,
    dispatchBroadcastSubscribe: opts.dispatchBroadcastSubscribe,
    dispatchBroadcastUnsubscribe: opts.dispatchBroadcastUnsubscribe,
    dispatchStreamStart: opts.dispatchStreamStart,
    dispatchStreamCancel: opts.dispatchStreamCancel,
  };
  // Guard against a disposed context: a settle's `deferred.settled.then(pump)` microtask can fire AFTER
  // the context was disposed (e.g. a parked stream pull settled by the teardown sweep, then the context
  // disposed on the same tick). executePendingJobs on a freed runtime throws "Lifetime not alive"; skip it.
  const pump = () => { if (ctx.alive) ctx.runtime.executePendingJobs(); };
  const timedOut = () => Date.now() > sc.currentDeadline;
  const timeoutError = () => {
    const err = new Error(`Handler ${opts.handlerId} exceeded the ${opts.timeoutMs / 1000}s timeout (a synchronous loop was interrupted by the QuickJS engine).`);
    err.name = 'ScriptTimeoutError';
    return err;
  };
  const arena: QuickJSHandle[] = [];
  const track = <T extends QuickJSHandle>(h: T): T => { arena.push(h); return h; };

  try {
    // #11 P4b Inc 3 — fresh per-fire deferred-chain set (mirrors the body-run's reset), so the
    // fire's flush drains ONLY this fire's chains, never a prior run's cap-exhausted leftovers.
    ctx.unwrapResult(ctx.evalCode('globalThis.__lsOutstanding = new Set()')).dispose();
    // #11 P7-F3 data-script-residue — re-seed globalThis.script/data/__lsListSnapshots so a fired
    // handler never reads the last body-run's residue (which under a shared context could be ANOTHER
    // script's). `script` is the fired script's identity (constant) — reconstructed from scriptId when
    // the fire path (broadcast/onDismiss) didn't carry name/type. data + lists are reset to EMPTY: a
    // fire is an event, not a body-run, so there is no trigger `data`. This diverges from asyncfn's
    // lexical capture of the REGISTRATION run's data/lists (a fired handler there sees the registering
    // run's `data` + tools/macros snapshot) — full parity needs per-handler env snapshots and is a
    // tracked follow-up (fire-handler-env-lexical-capture); the residue it replaces was strictly worse.
    const fireScript = opts.script ?? { id: opts.scriptId, name: '', type: '' };
    ctx.newString(JSON.stringify(fireScript)).consume((h) => ctx.setProp(ctx.global, '__lsFireScriptJson', h));
    ctx.unwrapResult(ctx.evalCode(
      'globalThis.script = JSON.parse(globalThis.__lsFireScriptJson);' +
      'globalThis.script.require = globalThis.__lsRequire;' +
      'globalThis.data = {};' +
      'globalThis.__lsListSnapshots = {};',
    )).dispose();
    // Marshal the args INTO the VM as a decoded array (mirror the per-run data path).
    ctx.newString(JSON.stringify(marshalEncode(opts.args))).consume((h) => ctx.setProp(ctx.global, '__lsFireArgsJson', h));
    const argsRes = ctx.evalCode('globalThis.__lsDecode(JSON.parse(globalThis.__lsFireArgsJson))');
    if (argsRes.error) throw toHostError(ctx, track(argsRes.error));
    const argsArray = track(argsRes.value);

    // Call the handler via the in-VM trampoline (applies fn + encodes the result).
    const callHandler = track(ctx.getProp(ctx.global, '__lsCallHandler'));
    const callRes = ctx.callFunction(callHandler, ctx.undefined, fnHandle, argsArray);
    if (callRes.error) {
      const eh = track(callRes.error);
      throw timedOut() ? timeoutError() : toHostError(ctx, eh);
    }
    // Bridge the (possibly async) VM result back — same as the body-run.
    const settledP = ctx.resolvePromise(track(callRes.value));
    pump();
    const settled = await settledP;
    if (settled.error) {
      const eh = track(settled.error);
      throw timedOut() ? timeoutError() : toHostError(ctx, eh);
    }
    return marshalDecode(JSON.parse(ctx.getString(track(settled.value))));
  } finally {
    // #11 P4b Inc 3 — drain this fire's intra-fire deferred chains (un-awaited gated factory /
    // push-mode dispatches issued by the fired handler) while activeRun is still live — the
    // fire-path analogue of the body-run drain. Without it, a gated dispatch from inside a fired
    // handler settles after activeRun=undefined → silent drop. Skipped on timeout (worker is being
    // torn down). Best-effort: __lsFlush is allSettled in-VM; the try/catch keeps it from masking
    // the handler outcome.
    const wasTimedOut = timedOut();
    if (!wasTimedOut) {
      try {
        const flushHandle = ctx.unwrapResult(ctx.evalCode('globalThis.__lsFlush()'));
        const flushP = ctx.resolvePromise(flushHandle);
        pump();
        const flushSettled = (await flushP) as { value?: QuickJSHandle; error?: QuickJSHandle };
        flushHandle.dispose();
        if (flushSettled.value) flushSettled.value.dispose();
        if (flushSettled.error) flushSettled.error.dispose();
      } catch { /* best-effort drain — never let the flush mask the fire's outcome */ }
    }
    sc.currentDeadline = Number.POSITIVE_INFINITY;
    sc.activeRun = undefined;
    for (const h of arena) {
      try { if (h.alive) h.dispose(); } catch { /* swallow — fire is over */ }
    }
    releaseRun();
    maybeDisposePendingContext(opts.scriptId); // #11 audit — dispose a teardown-deferred context now this fire is done
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
export function _vmObjectCountForTests(scriptId?: string): number | null {
  // #11 P7-1 — optional scriptId selects a specific script's context (P7-2 per-script pool);
  // omitted resolves the shared record. Null if that context hasn't been built.
  const sc = scriptId !== undefined ? resolveScriptContext(scriptId) : sharedSc;
  if (!sc) return null;
  const ctx = sc.ctx;
  const usage = ctx.runtime.computeMemoryUsage();
  try {
    const stats = ctx.dump(usage) as Record<string, unknown>;
    const n = stats.obj_count;
    return typeof n === 'number' ? n : null;
  } finally {
    usage.dispose();
  }
}

/** #11 P7-2 test seam — force the context model per-process (default 'shared'). Reset via
 *  _disposeContextForTests in setup.ts beforeEach; prod never sets it. */
export function _setContextModelForTests(mode: 'shared' | 'per-script'): void {
  contextModel = mode;
}

/**
 * #11 P7 — apply the LumiScript contextModel setting on this child (threaded per-run on RunScriptRequest;
 * child-entry calls it at run start). A CHANGE is applied ONLY on a clean child — no context has been built
 * yet — because a live context pool can't be safely re-partitioned mid-flight (pinned cross-run handlers,
 * in-flight runs, mixed per-context memory limits). A real flip therefore respawns the worker(s)
 * (backend update_settings), and the fresh child lands here with an empty pool and adopts the new model.
 * If any context already exists, the change is IGNORED (deferred to the next respawned child) rather than
 * risking a mid-flight teardown — so this is always a no-op after the first run of a given child.
 */
export function setContextModel(mode: 'shared' | 'per-script'): void {
  if (mode === contextModel) return;
  if (sharedSc !== undefined || sharedScPromise !== undefined || scriptContexts.size > 0 || scriptContextPromises.size > 0) {
    return; // a live context exists — a clean flip needs a respawn; leave the model unchanged
  }
  contextModel = mode;
}

/** #11 P7-2 test seam — current size of the per-script context pool (0 under 'shared'; the count of
 *  live per-script contexts under 'per-script'). Lets the isolation suite assert disposeContextForScript
 *  frees pool entries (the handle-lifecycle-dispose#0 leak regression). */
export function _scriptContextCountForTests(): number {
  return scriptContexts.size;
}

/** #11 audit follow-up test seam — count of contexts whose disposal was DEFERRED (a run held them at
 *  teardown time). Should return to 0 once the holding run's finally runs maybeDisposePendingContext. */
export function _pendingContextCountForTests(): number {
  return pendingContextDisposal.size;
}

/** #11 P7-3 test seam — read a per-script context's LRU recency marker (Date.now() of its last use),
 *  or null if that scriptId has no built context. Lets the pool tests assert lastUsedAt advances on a
 *  cache-hit / run / fire. Resolves via the same sync path resolveScriptContext uses. */
export function _lastUsedAtForTests(scriptId: string): number | null {
  return resolveScriptContext(scriptId)?.lastUsedAt ?? null;
}

/** #11 P7-3.1 test seam — override the bounded-pool knobs so a test can force cap-eviction (small cap)
 *  or idle-reaping (tiny idleMs via sweepIdleContexts' arg) without building 8+ contexts. Reset to the
 *  prod defaults by _disposeContextForTests. */
export function _setPoolCapForTests(cap: number): void { POOL_CAP = cap; }
export function _setIdleTimeoutForTests(ms: number): void { idleTimeoutMs = ms; }
/** #11 P7-3.2 test seam — override the aggregate child WASM budget so a test can drive a low per-context
 *  memory ceiling (perCtxLimit = budget / POOL_CAP) + assert an over-limit alloc surfaces as an in-VM OOM
 *  rather than a child crash. Reset by _disposeContextForTests. */
export function _setChildWasmBudgetForTests(bytes: number): void { CHILD_WASM_BUDGET = bytes; }

/** #11 P7-3.1 test seam — reserve a script's context (as a body-run acquisition does) so the eviction
 *  gates (evictIdleContext / lruEvictable / sweep) can be tested against the reservation deterministically
 *  without reproducing the microtask race. Returns the matching release fn. */
export function _reserveContextForTests(scriptId: string): () => void {
  reserveContext(scriptId);
  let released = false;
  return () => { if (!released) { released = true; releaseContext(scriptId); } };
}

/** #11 P7-2 test seam — dispose the PER-SCRIPT context pool + reset the model to 'shared', so a
 *  per-script-context test can't leak a context into another test file (the CI-readdir flake class).
 *  Each pooled script's held VM handles are swept first (disposeScriptVmHandlers) so ctx.dispose()
 *  sees no leaked handles. Cheap under 'shared' (empty pool); the shared record is reused across
 *  tests (NOT disposed here — that would force a ~95ms rebuild per test + break the leak oracle's
 *  reused-context premise). Wired into tests/_infra/setup.ts beforeEach. */
export function _disposeContextForTests(): void {
  for (const [scriptId, sc] of scriptContexts) {
    try { disposeScriptVmHandlers(scriptId); } catch { /* teardown */ }
    try { sc.ctx.dispose(); } catch { /* teardown */ }
  }
  scriptContexts.clear();
  scriptContextPromises.clear();
  // #11 audit — dispose any teardown-deferred contexts a test left pending (a run held one at dispose
  // time + never released), so they don't leak into the next file.
  for (const sc of pendingContextDisposal.values()) { try { if (sc.ctx.alive) sc.ctx.dispose(); } catch { /* teardown */ } }
  pendingContextDisposal.clear();
  // #11 P7-2 audit (sync-resolver-and-isolation#0) — the loop above only sweeps POOLED scriptIds;
  // under the 'shared' default (essentially the whole suite) the pool is empty, so a shared-mode test
  // that registered a handler / broadcast / widget / modal and never tore it down would leave a live
  // dup in the module registries (the shared context is intentionally NOT disposed — it's reused).
  // Sweep those too so a later per-script test can't collide on a scriptId a prior shared-mode test
  // left a live handle under (a wrong-context fire on scriptId+handlerId reuse). Disposes only the
  // dups held in the shared context, never the shared context itself.
  const dirty = new Set<string>([...vmHandlerHandles.keys(), ...vmBroadcastHandles.keys(), ...vmDomStableIds.keys()]);
  for (const rec of vmWidgetOwner.values()) dirty.add(rec.scriptId);
  for (const rec of vmModalOwner.values()) dirty.add(rec.scriptId);
  for (const scriptId of dirty) { try { disposeScriptVmHandlers(scriptId); } catch { /* teardown */ } }
  contextReservations.clear(); // #11 P7-3.1 — drop any dangling run reservations
  contextModel = 'shared';
  POOL_CAP = 8;              // #11 P7-3.1 — restore the pool-bound defaults (a test may have shrunk them)
  idleTimeoutMs = 5 * 60_000;
  CHILD_WASM_BUDGET = 512 * 1024 * 1024; // #11 P7-3.2 — restore the memory budget
  streamQueueCap = 512;                   // #11 P5-4 — restore the generateStream queue-cap default
  // Drop any leaked stream cells so a per-script stream test can't bleed into another file.
  for (const requestId of [...vmStreams.keys()]) dropVmStream(requestId);
  vmStreamsByScript.clear();
}
