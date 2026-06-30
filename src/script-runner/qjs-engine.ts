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
import type { HandleKind, HandleRef } from '../types/script-runner-ipc.js';
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
      destroy: function () { if (destroyedRef.current) return; destroyedRef.current = true; gated('ui._floatWidget.destroy', [widgetId]); },
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
// deep-frozen.) Eval'd LAST in getContext, after all scaffolding is built.
const VM_FREEZE_BOOTSTRAP = `
(function () {
  var locked = ['__lsEncode', '__lsDecode', '__hostDispatch', '__lsBuildApi', 'api', 'z', 'Handlebars', '__hbs', '__lsRequire', '__console', '__lsRandomFill', 'crypto', 'TextEncoder', 'TextDecoder', 'atob', 'btoa', 'queueMicrotask', 'performance', 'structuredClone', 'URL', 'URLSearchParams', '__lsFetch', 'fetch', 'Headers', 'Response', '__hostHandleDispatch', '__lsVmHandleProxy', '__hostRegisterHandler', '__hostUnregisterHandler', '__hostUnregisterHandlerNamed', '__lsCallHandler', '__hostBroadcastSubscribe', '__hostBroadcastUnsubscribe', '__lsTrackChain', '__lsFlush', '__hostAllocElementId', '__hostRegisterWidget', '__hostRegisterModal', '__hostRegisterModalDismiss', '__hostUnregisterModalDismiss'];
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
}
let activeRun: ActiveRun | undefined;
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
    const run = activeRun;
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
    const run = activeRun;
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
    const run = activeRun;
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

  // ── P5 inc3c: macro/tool unregister BY NAME. macro/tool stores resolve by (scriptId,
  // name), NOT handlerId, so this sends a name-keyed unregister IPC (distinct from
  // __hostUnregisterHandler's handlerId-keyed one). The VM dup (pull-mode) is NOT disposed
  // here — it is reaped at teardown (asyncfn parity: the closure outlives unregister(name),
  // and a stale dup never fires once the host drops the name from its store). ──
  const hostUnregisterHandlerNamed = ctx.newFunction('__hostUnregisterHandlerNamed', (kindHandle, nameHandle) => {
    const run = activeRun;
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
    const run = activeRun;
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
    const run = activeRun;
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

  // ── P4b Inc 3c-2b: advanced-modal onDismiss listener registration. Dups the user fn into the
  // per-script vmHandlerHandles registry under a synthetic handlerId (so the dismiss bridge fires
  // it via fireHandlerInQuickJS's dual-lookup) + records the handlerId under the modal. NO register
  // IPC: onDismiss is a LOCAL listener (parity with the asyncfn listeners Set), fired only by the
  // host->VM dismiss notice, never the parent event bus. ──
  const hostRegisterModalDismiss = ctx.newFunction('__hostRegisterModalDismiss', (modalIdHandle, handlerIdHandle, fnHandle) => {
    const run = activeRun;
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
    const run = activeRun;
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
    const run = activeRun;
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
  activeRun = { dispatch: opts.dispatch, console: opts.console, serializeError: opts.serializeError, allowDangerous: opts.allowDangerous ?? false, hostFetch: opts.hostFetch, dispatchOnHandle: opts.dispatchOnHandle, scriptId: opts.script.id, dispatchRegisterHandler: opts.dispatchRegisterHandler, dispatchUnregisterHandler: opts.dispatchUnregisterHandler, dispatchUnregisterHandlerNamed: opts.dispatchUnregisterHandlerNamed, dispatchBroadcastSubscribe: opts.dispatchBroadcastSubscribe, dispatchBroadcastUnsubscribe: opts.dispatchBroadcastUnsubscribe };
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
  const ctx = context;
  const rec = vmWidgetOwner.get(widgetId);
  if (!ctx || !rec || !rec.cell.alive) return;
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
  const ctx = context;
  const rec = vmModalOwner.get(modalId);
  if (!ctx || !rec) return null;
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
  allowDangerous?: boolean;
  hostFetch?:      (url: string, init?: RequestInit) => Promise<Response>;
  dispatchOnHandle?: (targetHandle: HandleRef, method: string, args: unknown[]) => Promise<unknown>;
  dispatchRegisterHandler?: (kind: string, handlerId: string, meta: unknown) => void;
  dispatchUnregisterHandler?: (kind: string, handlerId: string) => void;
  dispatchUnregisterHandlerNamed?: (kind: string, name: string) => void;
  dispatchBroadcastSubscribe?: (subId: string, event: string) => void;
  dispatchBroadcastUnsubscribe?: (subId: string) => void;
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
  const ctx = await getContext();
  // The fire id may be a RunHandlerRequest handlerId OR a broadcast subId — they share
  // this fire path but live in separate registries (different clear lifecycles).
  const lookup = (): QuickJSHandle | undefined =>
    vmHandlerHandles.get(opts.scriptId)?.get(opts.handlerId) ?? vmBroadcastHandles.get(opts.scriptId)?.get(opts.handlerId);
  if (!lookup()?.alive) {
    throw new Error(`LumiScript QuickJS: no handler ${opts.handlerId} registered for script ${opts.scriptId}.`);
  }

  // Serialize against body-runs + other fires on the shared context.
  const prior = runChain;
  let releaseRun: () => void = () => {};
  runChain = new Promise<void>((resolve) => { releaseRun = resolve; });
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

  currentDeadline = Date.now() + opts.timeoutMs;
  activeRun = {
    dispatch: opts.dispatch, console: opts.console, serializeError: opts.serializeError,
    allowDangerous: opts.allowDangerous ?? false, hostFetch: opts.hostFetch,
    dispatchOnHandle: opts.dispatchOnHandle, scriptId: opts.scriptId,
    dispatchRegisterHandler: opts.dispatchRegisterHandler,
    dispatchUnregisterHandler: opts.dispatchUnregisterHandler,
    dispatchUnregisterHandlerNamed: opts.dispatchUnregisterHandlerNamed,
    dispatchBroadcastSubscribe: opts.dispatchBroadcastSubscribe,
    dispatchBroadcastUnsubscribe: opts.dispatchBroadcastUnsubscribe,
  };
  const pump = () => ctx.runtime.executePendingJobs();
  const timedOut = () => Date.now() > currentDeadline;
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
    // Marshal the args INTO the VM as a decoded array (mirror the per-run data path).
    ctx.newString(JSON.stringify(marshalEncode(opts.args))).consume((h) => ctx.setProp(ctx.global, '__lsFireArgsJson', h));
    const argsRes = ctx.evalCode('globalThis.__lsDecode(JSON.parse(globalThis.__lsFireArgsJson))');
    if (argsRes.error) throw toHostError(ctx.dump(track(argsRes.error)));
    const argsArray = track(argsRes.value);

    // Call the handler via the in-VM trampoline (applies fn + encodes the result).
    const callHandler = track(ctx.getProp(ctx.global, '__lsCallHandler'));
    const callRes = ctx.callFunction(callHandler, ctx.undefined, fnHandle, argsArray);
    if (callRes.error) {
      const e = ctx.dump(track(callRes.error));
      throw timedOut() ? timeoutError() : toHostError(e);
    }
    // Bridge the (possibly async) VM result back — same as the body-run.
    const settledP = ctx.resolvePromise(track(callRes.value));
    pump();
    const settled = await settledP;
    if (settled.error) {
      const e = ctx.dump(track(settled.error));
      throw timedOut() ? timeoutError() : toHostError(e);
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
    currentDeadline = Number.POSITIVE_INFINITY;
    activeRun = undefined;
    for (const h of arena) {
      try { if (h.alive) h.dispose(); } catch { /* swallow — fire is over */ }
    }
    releaseRun();
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
