/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT-RUNNER CHILD-SIDE API PROXY (Phase 3)
 * ============================================================================
 * Vends a (subset of) `LumiScriptAPI` whose methods either run locally in
 * the child (when they have no host-side state to coordinate) or dispatch
 * their work to the parent via `ApiProxyRequest` IPC. The child's user-script
 * code sees a normal-looking `api` object; the IPC layer is invisible.
 *
 * Phase 3 surface:
 *   - `api.utils` — `uuid`, `shortId`, `wait`, `random.*` implemented LOCALLY
 *     (sync / pure / no host state, so IPC would be wasted overhead). Other
 *     `utils` members (handlebars, macros.resolve, http, etc.) stubbed —
 *     they need either bundled libraries (Phase 7) or async-side-effecting
 *     IPC routes that we don't yet need for the smoke test.
 *   - `api.broadcast.emit` — sync void; dispatches via fire-and-forget IPC.
 *   - `api.variables.{local,global,character,chat}.*` — fully async; the
 *     canonical `VariableStore.get/set/delete/has/clear` shape returns
 *     Promises naturally, so IPC dispatch is a clean drop-in. THIS is the
 *     primary value-returning proxy demo for the Phase 3 smoke test.
 *
 * Phases 4–7 will widen the surface; Phase 7 in particular bundles
 * libraries (handlebars, ls:components) into the child so the locally-
 * implemented branch grows.
 *
 * ─── Drift safety ────────────────────────────────────────────────────────
 *
 * Each namespace builder is typed against the canonical interface from
 * `src/types/script.ts`. Methods with declared signatures must return
 * exactly what the interface says. Sync-returning methods MUST be
 * implemented locally (Promise<T> ≠ T). Async methods can be proxied or
 * implemented locally.
 *
 * Methods that aren't yet wired throw a clear "lands in Phase N" error
 * via `notYetImplemented`.
 */

import type {
  LumiScriptAPI,
  UtilsAPI,
  BroadcastAPI,
  VariablesAPI,
  VariableStore,
  DbAPI,
  Collection,
  DbRecord,
  DbFilter,
  UIAPI,
  DOMAPI,
  DOMHandle,
  DOMInjectOptions,
  DOMMessageInjectOptions,
  ScriptNamespace,
  ScriptType,
  LLMAPI,
  ChatAPI,
  ChatsAPI,
  CharactersAPI,
  WorldInfoAPI,
  DatabanksAPI,
  PersonasAPI,
  CouncilAPI,
  FilesAPI,
  EnclaveAPI,
  TokensAPI,
  EventsAPI,
  CommandsAPI,
  ToolsAPI,
  MacrosAPI,
  JSONAPI,
  RpcAPI,
  RpcRequestContext,
  MacrosResolveOptions,
  MacrosResolveResult,
  AdvancedModalHandle,
  AdvancedModalDismissReason,
  RegisteredToolInfo,
  RegisteredMacroInfo,
  RegisteredMacroInterceptorInfo,
  InjectionInfo,
  RegisteredMessageContentProcessorInfo,
} from '../types/script.js';
// Phase 9d.2 — sync local utilities bundled into the child:
//   - Handlebars: per-script-isolated template environment for utils.template.*
//   - jsonquery (via the parent's `buildJSONAPI` factory): full json.* surface
//   - image helpers: shared with the parent via `../engine/image-format.js`
import Handlebars from 'handlebars';
import { buildJSONAPI } from '../engine/api/json.js';
// Phase 9d.5 — Zod (already bundled into the child via child-entry.ts).
// Re-imported here so `api-proxy.ts` can detect Zod schemas (via
// `instanceof z.ZodType`) and convert them to JSON Schema before crossing
// IPC. Bundle size unaffected — Bun deduplicates.
import * as z from 'zod';
import {
  detectImageMime,
  parseBase64DataUrl,
  bytesToBase64,
} from '../engine/image-format.js';
// Phase 7: built-in library factories. Importing the registry triggers
// each library's side-effect registration (registerBuiltin calls in
// `builtin-library-registry.ts`). The library factory functions and their
// transitively-imported code (e.g. ICON_SVG manifest in ls:icons) get
// pulled into `dist/script-runner.js` as a result.
import {
  resolveBuiltin,
  isBuiltinName,
} from '../engine/builtin-library-registry.js';
import type {
  ApiProxyRequest,
  ApiProxyResponse,
  ChildToParentMessage,
  HandleRef,
  BroadcastSubscribeMessage,
  BroadcastUnsubscribeMessage,
  AbortRequest,
  RegisterHandler,
  UnregisterHandler,
} from '../types/script-runner-ipc.js';
import { isHandleRef } from '../types/script-runner-ipc.js';
import { AsyncLocalStorage } from 'async_hooks';

/**
 * Phase 9d.3 — singleton AsyncLocalStorage for the active runId. The
 * proxy's `dispatch` reads from this store; falls back to `ctx.runId`
 * when no context is active.
 *
 * Why this exists: handler closures registered in run N still need to
 * make working api.* calls when they fire after run N has ended (e.g.
 * a pull-mode macro fires during prompt assembly, long after the
 * registering script run completed). Wrapping each fire in
 * `runIdContext.run(handlerRunId, …)` overrides the dispatch's runId
 * with a fresh per-fire id; the parent registers a matching ephemeral
 * activeRun for routing.
 *
 * Module-level singleton (one AsyncLocalStorage per child runtime).
 * Exposed for use by `child-entry.ts`'s `run-handler` handler.
 */
export const runIdContext = new AsyncLocalStorage<string>();

// ─── Advanced-modal child-side state (Phase 9d.4.d) ─────────────────────────
//
// Module-scope (cross-run) state for `api.ui.showAdvancedModal()`. Each
// open modal lives here keyed by modalId from open until dismissal. Carries:
//   - `dismissedRef`: { current: boolean }
//        Mutable cell read by the sync handle's `dismissed` getter. The
//        getter sees the LIVE value, not a snapshot — flips to true the
//        moment `notifyAdvancedModalDismissed` lands.
//   - `dismissedReasonRef`: { current: AdvancedModalDismissReason | null }
//        Same pattern; stored so any onDismiss listener registered AFTER
//        dismissal fires on next microtask with the recorded reason
//        (parity with canonical's `addDismissHandler` post-dismissal path).
//   - `listeners`: Set<fn>
//        User-registered onDismiss callbacks. Fired in iteration order
//        when the dismiss notice arrives. Cleared after fan-out.
//
// Lives at module scope (not inside `buildProxiedAPI`) so multiple
// per-script proxies can coexist if a script opens modals across runs:
// the modal state persists between proxy lifecycles for the duration of
// the modal's open lifetime, which is shorter than (e.g.) a registered
// macro handler closure but can outlive the originating run easily.
//
// Memory: each modal entry is ~3 small objects + a Set; cleared on
// dismissal. Long-lived modals don't accumulate state.
interface AdvancedModalState {
  /** Phase 9f-1 — set on register; used by script-unregister cleanup to filter by owning script. */
  scriptId:           string;
  dismissedRef:       { current: boolean };
  dismissedReasonRef: { current: AdvancedModalDismissReason | null };
  listeners:          Set<(reason: AdvancedModalDismissReason) => void>;
}
const advancedModalState = new Map<string, AdvancedModalState>();

// ─── Float-widget child-side state (Phase 9d.4.e-2-b) ───────────────────────
//
// Module-scope (cross-run, child-runtime-lifetime) state for float widgets.
// Mirrors `advancedModalState`'s shape: keyed by widgetId, contains mutable
// cells the proxy's sync getters close over so they always read the LIVE
// values (not snapshots).
//
// `positionCache` is updated:
//   - SYNCHRONOUSLY when the user calls `handle.moveTo(x, y)` (cache
//     reflects the user's intent immediately, matching the canonical's
//     sync `updateWidgetPosition + entry.x/y` mutation).
//   - VIA `notifyFloatWidgetPosition` when the parent forwards a
//     `FloatWidgetPositionNotice` after a FE drag.
//
// `visibleCache.current` is updated synchronously by `handle.setVisible(v)`
// (canonical doesn't expose a way for the FE to mutate visibility — it's
// always programmatic — so no notice is needed for this field).
//
// State entry is created on `createFloatWidget` and dropped on
// `handle.destroy()` (or implicitly on script-unregister via the larger
// teardown path that Phase 9f wires up).
interface FloatWidgetState {
  /** Phase 9f-1 — set on register; used by script-unregister cleanup to filter by owning script. */
  scriptId:      string;
  positionCache: { x: number; y: number };
  visibleCache:  { current: boolean };
}
const floatWidgetState = new Map<string, FloatWidgetState>();

/**
 * Phase 9d.4.e-2-b — handle a `FloatWidgetPositionNotice` IPC notice from
 * the parent. Updates the cached position so the proxy's sync
 * `handle.getPosition()` returns the FE-driven coordinates.
 *
 * Idempotent on missing widgetId — late notices for already-destroyed
 * widgets silently no-op.
 *
 * Called by the child-entry IPC dispatcher; lives in api-proxy.ts because
 * the state map is module-private here.
 */
export function notifyFloatWidgetPosition(widgetId: string, x: number, y: number): void {
  const state = floatWidgetState.get(widgetId);
  if (!state) return;
  state.positionCache.x = x;
  state.positionCache.y = y;
}

/**
 * Phase 9f-1 — clear all module-scope per-script state when a script is
 * fully unregistered (disable / delete on the parent). Called from
 * `child-entry.ts`'s `handleScriptUnregister` alongside the existing
 * cleanup of `handlerClosures` / `broadcastHandlers` / `activeProxies`.
 *
 * Without this, module-scope state seeded during the script's runs
 * (advanced modals, float widgets, DOM stable-id cache) would leak —
 * each new script registration accumulating entries until the child
 * runtime restarts.
 *
 * Walks the keyed-by-inner-id tables (advancedModalState, floatWidgetState)
 * filtering by `scriptId`; drops the outer-keyed-by-scriptId table
 * (`domStableIdToElementId`) by direct delete. Idempotent on missing
 * scriptIds.
 */
export function clearScriptStateOnUnregister(scriptId: string): void {
  // Advanced modals — keyed by modalId, value carries scriptId.
  for (const [modalId, state] of advancedModalState) {
    if (state.scriptId === scriptId) advancedModalState.delete(modalId);
  }
  // Float widgets — same shape.
  for (const [widgetId, state] of floatWidgetState) {
    if (state.scriptId === scriptId) floatWidgetState.delete(widgetId);
  }
  // DOM stable-id cache — outer key IS scriptId, single delete.
  domStableIdToElementId.delete(scriptId);
  // Latest-run tracker — same.
  latestRunIdByScript.delete(scriptId);
}

// ─── Latest-run tracker per script (Phase 9d.4.x cross-run handle fix) ─────
//
// Maps `scriptId → latest known runId for that script's script-body run`.
// Refreshed on every `buildProxiedAPI` call (i.e. every dispatchRunScript
// arrival). Read by `dispatch` / `dispatchWithSignal` to route IPC under
// the LATEST run's runId rather than the originating run's snapshot.
//
// Why this exists. Phase 9d.3 keeps per-script proxies alive past
// `run-result` so registered handler closures can still dispatch later.
// Phase 9d.4.x's parent-side activeRun lifetime fix keeps the parent's
// activeRun alive past run-result too — but DROPS the previous activeRun
// when a new dispatchRunScript starts for the same script (orphan-by-
// re-execution semantics). Result: handles built by run N's proxy and
// stashed on globalThis (e.g. `globalThis.HANDLE = h`) keep working
// during run N. But when run N+1 starts and the script body invokes
// `globalThis.HANDLE.remove()`, the proxy's `dispatch` uses run N's
// captured `ctx.runId` — which is no longer in `activeRuns` — and
// the parent returns `RunCompletedError`, swallowed silently by the
// fire-and-forget proxy method. The canonical never receives the
// remove; subsequent stable-id-keyed inject lands on the still-extant
// canonical entry via `resolveStableId` and updates a phantom DOM node
// that the FE detached when the chat container unmounted.
//
// The fix: dispatch reads `latestRunIdByScript[ctx.scriptId]` first,
// falling back to `ctx.runId` only when no script-body run is currently
// tracked (e.g. the first call right after construction, or after script
// unregister). When run N+1's `buildProxiedAPI` overwrites the entry,
// run N's old handles automatically route through to run N+1's activeRun.
//
// Cleared on `script-unregister` IPC (alongside the other per-script
// module state) and on `__resetForTests`.
const latestRunIdByScript = new Map<string, string>();

// ─── DOM stable-id → elementId cache (Phase 9d.4.c-1 sync-return repair) ────
//
// Per-script (cross-run, child-runtime-lifetime) cache mapping user-supplied
// stable ids → child-generated elementIds. Lets `api.ui.dom.inject({id: 'X'})`
// across multiple runs (or repeated within a run) consistently resolve to the
// SAME elementId, so the canonical's stableId-idempotency lookup
// (`resolveStableId`) finds the existing element on second+ calls — exact
// behaviour parity with the in-process executor's canonical impl.
//
// Module-scope (not inside `buildProxiedAPI`) so it persists across runs of
// the same script. Cleared on `script-unregister` IPC alongside other
// per-script state.
//
// Why we need this: pre-repair, `inject` returned `Promise<DOMHandle>` because
// the canonical might return an existing handle with a different elementId
// (the stableId-idempotency case). User scripts written against the canonical
// sync contract — `const h = api.ui.dom.inject(...); h.makeDraggable(...);`
// — broke because `h` was a Promise. The repair: child generates the
// elementId upfront, threads via `options._elementId`, canonical honors it.
// The proxy + canonical agree on the elementId by construction.
const domStableIdToElementId = new Map<string, Map<string, string>>();

function getOrAllocateElementId(scriptId: string, stableId: string | undefined): string {
  if (stableId === undefined) return crypto.randomUUID();
  let scriptMap = domStableIdToElementId.get(scriptId);
  if (!scriptMap) {
    scriptMap = new Map();
    domStableIdToElementId.set(scriptId, scriptMap);
  }
  const cached = scriptMap.get(stableId);
  if (cached !== undefined) return cached;
  const fresh = crypto.randomUUID();
  scriptMap.set(stableId, fresh);
  return fresh;
}

/**
 * Phase 9d.4.d — handle an `advanced-modal-dismissed` IPC notice from the
 * parent. Flips the cached `dismissed` flag, fires all locally-registered
 * `onDismiss(fn)` listeners with the resolved reason, and drops the entry.
 *
 * Called by the child-entry IPC dispatcher; lives in api-proxy.ts because
 * the state map is module-private here (encapsulation: child-entry knows
 * "modal got dismissed", api-proxy knows the storage layout + listener
 * fan-out semantics).
 *
 * Idempotent on missing modalId — late notices for already-dropped modals
 * (paranoid edge case) silently no-op.
 */
export function notifyAdvancedModalDismissed(
  modalId: string,
  reason:  AdvancedModalDismissReason,
): void {
  const state = advancedModalState.get(modalId);
  if (!state) return;
  state.dismissedRef.current       = true;
  state.dismissedReasonRef.current = reason;
  // Snapshot listeners before iterating; user callbacks may add or remove
  // listeners but those mutations apply to the next dismissal (this one
  // fires once per modal).
  const snapshot = [...state.listeners];
  state.listeners.clear();
  // Drop the entry now that dismissal has been fully fanned out. Future
  // unsub calls on the listener-returned closures hit the cleared set
  // (no-op delete on a missing key).
  advancedModalState.delete(modalId);
  for (const fn of snapshot) {
    try { fn(reason); }
    catch { /* mirror canonical: swallow user callback errors */ }
  }
}

// ─── Internal helpers ───────────────────────────────────────────────────────

let nextRequestSeq = 1;

function generateRequestId(runId: string): string {
  return `${runId}-req-${nextRequestSeq++}`;
}

let nextSubSeq = 1;

function generateSubId(scriptId: string): string {
  return `${scriptId}-sub-${nextSubSeq++}`;
}

function reconstructError(err: ApiProxyResponse['error']): Error {
  const name    = err?.name    ?? 'Error';
  const message = err?.message ?? 'api proxy: unknown error';
  const reconstructed = new Error(message);
  reconstructed.name = name;
  if (err?.stack) reconstructed.stack = err.stack;
  return reconstructed;
}

/**
 * Phase 9d.5 — Zod schema handling for `llm.generateStructured` /
 * `llm.generateWithTools`.
 *
 * Bun's IPC strips class-instance prototypes, so a Zod schema sent across
 * the parent boundary loses its `.parse()` method and `instanceof z.ZodType`
 * fails parent-side. The fix: do all Zod work CHILD-side. Convert the
 * schema to plain JSON Schema before dispatch (parent receives a plain
 * object that survives serialization), and apply the user's original Zod
 * `.parse()` to the parsed response after the dispatch resolves.
 *
 * Returns:
 *   - `{ jsonSchema: <obj>, zodSchema: <z.ZodType> }` — user passed a Zod
 *     schema. Send `jsonSchema` over IPC; validate response with `zodSchema`.
 *   - `{ jsonSchema: <obj>, zodSchema: null }` — user passed a plain JSON
 *     Schema object. Send as-is; no validation.
 *   - `{ jsonSchema: null, zodSchema: null }` — schema is missing or
 *     invalid. Caller decides whether this is an error path.
 */
function convertZodToJsonSchemaIfNeeded(schema: unknown): {
  jsonSchema: Record<string, unknown> | null;
  zodSchema:  z.ZodType<unknown> | null;
} {
  if (schema instanceof z.ZodType) {
    // Same conversion options as the canonical's `toJsonSchemaObject` —
    // keeps behaviour bit-identical on the LLM side.
    const jsonSchema = z.toJSONSchema(schema, {
      target:         'openapi-3.0',
      cycles:         'ref',
      unrepresentable: 'any',
    }) as Record<string, unknown>;
    return { jsonSchema, zodSchema: schema as z.ZodType<unknown> };
  }
  if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
    return { jsonSchema: schema as Record<string, unknown>, zodSchema: null };
  }
  return { jsonSchema: null, zodSchema: null };
}

// ─── Phase 9d.1 generic-passthrough helpers ─────────────────────────────────
//
// `mkAsync` wraps a method-path string in a variadic dispatcher cast to the
// canonical interface's method type. Drift safety is enforced at the call
// site: assigning the result to a typed namespace property (e.g.
// `chat: ChatAPI = { getMessages: mkAsync<ChatAPI['getMessages']>(...) }`)
// means TS verifies the cast target matches the canonical signature. Wrong
// type parameter would surface as a typecheck error at the property
// assignment.
//
// The `dispatch` reference is closed over in `buildProxiedAPI`'s scope and
// passed in as a closure-captured callable; we accept it as an arg here so
// the helper itself stays free of `buildProxiedAPI` state.
//
// `mkSyncVoidFireForget` is for sync-void api methods that mutate parent-
// side state (e.g. `chat.inject`, `commands.register`). The user-script
// caller doesn't await; the IPC fires; any failure surfaces silently
// (matching the canonical contract: these methods don't throw to callers).

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mkAsync<T extends (...args: any[]) => Promise<any>>(
  dispatch: (method: string, args: unknown[]) => Promise<unknown>,
  method: string,
): T {
  return ((...args: unknown[]) => dispatch(method, args)) as unknown as T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mkSyncVoidFireForget<T extends (...args: any[]) => void>(
  dispatch: (method: string, args: unknown[]) => Promise<unknown>,
  method: string,
  trackChain?: <U>(p: Promise<U>) => Promise<U>,
): T {
  return ((...args: unknown[]) => {
    const p = dispatch(method, args).catch(() => { /* canonical: sync void doesn't throw to caller */ });
    if (trackChain !== undefined) trackChain(p);
  }) as unknown as T;
}

// ─── Public types ───────────────────────────────────────────────────────────

export interface ProxyContext {
  runId:    string;
  scriptId: string;
  /**
   * Phase 7 — script identity for `script.id` / `script.name` exposure.
   * Type defaults to 'trigger' for runs dispatched from triggers (matching
   * the synthetic Script construction in host-dispatcher.ts).
   */
  scriptName: string;
  scriptType: ScriptType;
  /**
   * Phase 9d.1 — snapshot of activeContext at run-dispatch time. Used by
   * sync-returning api methods that need a chatId / characterId locally
   * (e.g. `api.chat.getChatId()`). Snapshot semantics are correct for
   * trigger fires; long-lived registered handlers (Phase 9d.3) get their
   * own per-fire context delivery via the handler-IPC payload.
   */
  chatIdAtStart:      string | null;
  characterIdAtStart: string | null;
  send:       (msg: ChildToParentMessage) => void;
  /**
   * Phase 6 — register a broadcast handler closure in the child's
   * per-script handler map. The closure outlives THIS run (subscriptions
   * persist between runs), so it lives in `child-entry.ts`'s module-scope
   * map rather than on the proxy itself. Returns void; parent-side
   * subscription registration happens via the IPC `BroadcastSubscribeMessage`
   * the proxy emits in the same call.
   */
  registerBroadcastHandler:   (subId: string, handler: (payload: unknown) => void) => void;
  /** Phase 6 — drop a broadcast handler from the child's registry. */
  unregisterBroadcastHandler: (subId: string) => void;
  /**
   * Phase 9d.3 — register a function-handler closure (macro / tool /
   * interceptor / etc.) in the child's per-script handler registry.
   * The closure outlives THIS run (handlers fire across runs and at
   * prompt-assembly time long after registration), so it lives in
   * `child-entry.ts`'s module-scope map keyed by `(scriptId, handlerId)`.
   */
  registerHandlerClosure:   (handlerId: string, fn: (...args: unknown[]) => unknown | Promise<unknown>) => void;
  /** Phase 9d.3 — drop a handler closure from the child's registry. */
  unregisterHandlerClosure: (handlerId: string) => void;
  /**
   * Phase 9d.X — sync-array-read snapshots at run-dispatch time. The
   * proxy seeds its mutable per-run arrays from these on construction.
   * `api.tools.list()` / `macros.list()` / etc. return slices off the
   * mutable array; mutation methods (register/unregister/inject/etc.)
   * update the array eagerly so within-run mutations are visible to
   * subsequent list() calls (matches canonical sync semantics).
   */
  toolsSnapshot:                 RegisteredToolInfo[];
  macrosSnapshot:                RegisteredMacroInfo[];
  macroInterceptorsSnapshot:     RegisteredMacroInterceptorInfo[];
  chatInjectionsSnapshot:        InjectionInfo[];
  chatContentProcessorsSnapshot: RegisteredMessageContentProcessorInfo[];
}

export interface ProxyHandle {
  api: Pick<
    LumiScriptAPI,
    | 'utils'
    | 'broadcast'
    | 'variables'
    | 'db'
    | 'ui'
    | 'llm'
    // ── Phase 9d.1 additions ───────────────────────────────────────────────
    | 'chat'
    | 'chats'
    | 'characters'
    | 'worldInfo'
    | 'databanks'
    | 'personas'
    | 'council'
    | 'files'
    | 'enclave'
    | 'tokens'
    | 'events'
    | 'commands'
    | 'tools'
    | 'macros'
    // ── Phase 9d.2 additions ───────────────────────────────────────────────
    | 'json'
    // ── v0.26.0 additions ───────────────────────────────────────────────────
    | 'rpc'
  >;
  /**
   * Phase 7 — `script.*` namespace injected as a separate top-level
   * variable into the AsyncFunction sandbox. Currently exposes id/name/type
   * + `require()` for user/built-in libraries.
   */
  script: ScriptNamespace;
  /** Forward an `ApiProxyResponse` IPC to the proxy's pending-request map. */
  handleResponse(msg: ApiProxyResponse): void;
  /** Reject any in-flight requests (called on script-run completion). */
  cleanup(reason?: string): void;
  /**
   * Drain all fire-and-forget chains before signaling run completion.
   * Awaited by `child-entry.ts:runOne` after the user-script body returns
   * but BEFORE the `run-result` IPC is sent, so gated dispatches (e.g.
   * `tab.root.update(...)` queued behind a still-pending `openAck` from
   * `registerDrawerTab`'s FE-echo) reach the parent while the originating
   * `activeRuns[runId]` entry is still live.
   *
   * Without this drain, gated chains race: openAck's Promise resolves on
   * the order of hundreds of milliseconds (FE round-trip), and a typical
   * script body returns synchronously in microseconds. Result: the
   * deferred `dispatch(...)` lands at a parent that has already deleted
   * `activeRuns[runId]` post-`run-result` — surfaces as
   * `RunCompletedError` console warnings + the gated FE side-effects
   * (`update`, `injectChild`, etc.) silently never apply.
   */
  flush(): Promise<void>;
}

// ─── Proxy builder ──────────────────────────────────────────────────────────

export function buildProxiedAPI(ctx: ProxyContext): ProxyHandle {
  type Pending = { resolve: (v: unknown) => void; reject: (err: Error) => void };
  const pending = new Map<string, Pending>();

  // Phase 9d.4.x cross-run handle fix — refresh the script's latest
  // runId. Cross-run handle method invocations (e.g. a DOMHandle stored
  // on globalThis from run N, invoked from run N+1's body) read from
  // this map via `dispatch` so their IPC routes to the LATEST activeRun
  // rather than the dropped originating one.
  latestRunIdByScript.set(ctx.scriptId, ctx.runId);

  // ─── Fire-and-forget chain tracker ───────────────────────────────────────
  //
  // Every fire-and-forget Promise (gated dispatches, mkSyncVoidFireForget
  // dispatches, register-handler IPC chains queued behind openAck, etc.)
  // is added here on creation and removed on settle. `flush()` awaits all
  // entries before runOne sends `run-result`, ensuring deferred side
  // effects reach the parent while the originating run is still live.
  //
  // Why a Set rather than just relying on the existing `pending` Map: the
  // pending map only tracks dispatches that have already been SENT
  // (entry inserted right before `ctx.send`). A chain like
  // `gateOrFire(() => dispatch(...))` doesn't hit `dispatch` — and so
  // doesn't appear in pending — until the gate (openAck etc.) resolves.
  // This Set captures the OUTER Promise for those gated chains, so
  // flush observes "this user-issued operation hasn't completed yet"
  // even before the underlying dispatch fires.
  const outstandingChains = new Set<Promise<unknown>>();

  function trackChain<T>(p: Promise<T>): Promise<T> {
    outstandingChains.add(p as Promise<unknown>);
    p.finally(() => outstandingChains.delete(p as Promise<unknown>))
      .catch(() => { /* already-tracked errors handled by callers' .catch */ });
    return p;
  }

  async function flush(): Promise<void> {
    // Loop in case a settling chain spawns a new one (e.g. a dispatch's
    // response triggers a follow-up send). In practice the proxy doesn't
    // currently have such cascading sends — the loop is defensive
    // belt-and-braces.
    let safety = 8;
    while (outstandingChains.size > 0 && safety-- > 0) {
      const snapshot = [...outstandingChains];
      await Promise.allSettled(snapshot);
    }
  }

  // ─── Phase 9d.X — sync-array-read mutable per-run state ──────────────────
  //
  // Seed from the dispatch-time snapshots threaded through ProxyContext.
  // The proxy returns slices off these arrays from `tools.list()` etc.
  // Mutation methods (register/unregister/inject/removeInjection/etc.) push
  // and splice these arrays eagerly so subsequent list() calls within the
  // same run see the just-mutated state — matches canonical sync semantics.
  //
  // Cross-script mutations during the same run are NOT reflected (snapshot
  // is dispatch-time + this-script-only diffs); acceptable best-effort for
  // diagnostic surfaces. A user script that needs cross-script-fresh data
  // would need to dispatch the read manually (out of scope for v1).
  //
  // Helper: the SAME instance is also the `apiForLibraries` snapshot — so
  // built-in libraries (ls:components etc.) calling api.tools.list see the
  // live array. Same for everything else.
  const localTools:                 RegisteredToolInfo[]                       = [...ctx.toolsSnapshot];
  const localMacros:                RegisteredMacroInfo[]                      = [...ctx.macrosSnapshot];
  const localMacroInterceptors:     RegisteredMacroInterceptorInfo[]           = [...ctx.macroInterceptorsSnapshot];
  const localChatInjections:        InjectionInfo[]                            = [...ctx.chatInjectionsSnapshot];
  const localChatContentProcessors: RegisteredMessageContentProcessorInfo[]    = [...ctx.chatContentProcessorsSnapshot];

  /**
   * Generic IPC dispatcher. Sends an api-request, returns a Promise.
   *
   * Three-tier runId resolution:
   *   1. `runIdContext.getStore()` (Phase 9d.3) — the per-fire ephemeral
   *      runId installed by the child's `run-handler` IPC handler around
   *      handler closure invocations. Wins when a handler is firing so
   *      the api-request lands at the parent's per-fire ephemeral
   *      activeRun built by `sendRunHandlerRequest`.
   *   2. `latestRunIdByScript[ctx.scriptId]` (Phase 9d.4.x cross-run
   *      handle fix) — the latest known script-body runId for this
   *      script. Wins when there's no handler-fire context active and
   *      the call is being made from a normal script-body context OR
   *      from a stale handle whose proxy was built by an older run.
   *      Without this, old-run handles dispatch under the originating
   *      run's runId — which is no longer in `activeRuns` once the next
   *      dispatchRunScript drops it — and fail silently with
   *      `RunCompletedError`.
   *   3. `ctx.runId` (originating run) — only reached during the very
   *      first call after construction (before the latest-run map is
   *      populated, which happens synchronously in the buildProxiedAPI
   *      preamble — so this fallback is essentially defensive only).
   */
  function dispatch(method: string, args: unknown[]): Promise<unknown> {
    // v0.26.1 — track which tier resolved the runId so the late-dispatch
    // error can identify the leak class (handler-fire context vs. cross-run
    // latest-run fallback vs. originating-proxy fallback). See
    // `ApiProxyRequest._runIdSource` JSDoc.
    const ctxRunId = runIdContext.getStore();
    const latestRunId = latestRunIdByScript.get(ctx.scriptId);
    const runIdSource: 'context' | 'latest' | 'ctx' =
      ctxRunId !== undefined ? 'context'
      : latestRunId !== undefined ? 'latest'
      : 'ctx';
    const runId = ctxRunId ?? latestRunId ?? ctx.runId;
    const requestId = generateRequestId(runId);
    // v0.26.1 — wrap in trackChain so unawaited dispatches still get drained
    // by flush() before run-result fires. Pre-fix: only `mkSyncVoidFireForget`
    // and the explicit `trackChain(dispatch(...).catch(...))` call sites were
    // tracked. A user-script forgetting `await api.foo(...)` (or escaping the
    // await chain via .forEach + bare promise return, etc.) would leak the
    // dispatch past run-result, surfacing as `RunCompletedError` when a
    // later dispatchRunScript dropped the activeRun. Auto-tracking every
    // dispatch makes the script-body lifetime invariant strict: no IPC
    // initiated under this proxy can outlive `flush()`. Awaited code is
    // unaffected — the user's await and flush() wait on the same Promise,
    // so total time = max(user-await, flush) = same as before.
    const p = new Promise<unknown>((resolve, reject) => {
      pending.set(requestId, { resolve, reject });
      const msg: ApiProxyRequest = {
        type:     'api-request',
        requestId,
        runId,
        scriptId: ctx.scriptId,
        method,
        args,
        _runIdSource: runIdSource,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        pending.delete(requestId);
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    });
    return trackChain(p);
  }

  /**
   * Phase 8 — dispatch with AbortSignal support. Used by api methods that
   * accept `opts.signal` (currently `api.llm.generate` and
   * `api.llm.generateStructured`; expand as more signal-bearing methods
   * are proxied).
   *
   * Strips the signal from the args before send (signals don't serialize
   * across IPC), flags `hasSignal: true` so the parent reconstructs a
   * real signal on its side, and listens for abort to send a corresponding
   * `AbortRequest` IPC.
   *
   * Pre-aborted signal short-circuits cleanly: the listener fires
   * synchronously when added (per spec), so we send the abort immediately
   * after the api-request — the parent's controller fires before the real
   * api method makes any meaningful progress.
   *
   * @param method      Dotted-path method (e.g. 'llm.generateStructured')
   * @param args        Args with the signal already stripped from opts
   * @param signal      The user-supplied AbortSignal, or undefined
   */
  function dispatchWithSignal(
    method: string,
    args: unknown[],
    signal: AbortSignal | undefined,
  ): Promise<unknown> {
    // Same three-tier runId resolution as `dispatch` — see the JSDoc
    // there for the cross-run-handle rationale.
    const ctxRunId = runIdContext.getStore();
    const latestRunId = latestRunIdByScript.get(ctx.scriptId);
    const runIdSource: 'context' | 'latest' | 'ctx' =
      ctxRunId !== undefined ? 'context'
      : latestRunId !== undefined ? 'latest'
      : 'ctx';
    const runId = ctxRunId ?? latestRunId ?? ctx.runId;
    const requestId = generateRequestId(runId);
    // v0.26.1 — wrap in trackChain. See `dispatch` for the rationale.
    const p = new Promise<unknown>((resolve, reject) => {
      pending.set(requestId, { resolve, reject });
      const msg: ApiProxyRequest = {
        type:     'api-request',
        requestId,
        runId,
        scriptId: ctx.scriptId,
        method,
        args,
        hasSignal: signal !== undefined,
        _runIdSource: runIdSource,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        pending.delete(requestId);
        reject(err instanceof Error ? err : new Error(String(err)));
        return;
      }

      if (signal === undefined) return;

      const sendAbort = (): void => {
        const abortMsg: AbortRequest = { type: 'abort-request', requestId };
        try { ctx.send(abortMsg); } catch { /* channel down — abort is moot */ }
      };

      if (signal.aborted) {
        // Already aborted — fire immediately. Parent receives api-request
        // then abort-request in FIFO order; controller is created and
        // aborted before the real api method makes progress.
        sendAbort();
      } else {
        signal.addEventListener('abort', sendAbort, { once: true });
      }
    });
    return trackChain(p);
  }

  /**
   * Strip `signal` from an opts-shaped object. Returns a shallow clone
   * without the signal field, or the original opts if no signal was
   * present. Used by signal-bearing api methods to build the wire payload.
   */
  function stripSignalFromOpts<T extends { signal?: AbortSignal } | undefined>(
    opts: T,
  ): { stripped: T; signal: AbortSignal | undefined } {
    if (!opts || opts.signal === undefined) {
      return { stripped: opts, signal: undefined };
    }
    const { signal, ...rest } = opts;
    return { stripped: rest as T, signal };
  }

  // ── utils — sync methods implemented LOCALLY (no IPC) ────────────────────

  /**
   * Phase 9d.2 — per-run-isolated Handlebars instance for `utils.template.*`.
   * Created here (inside `buildProxiedAPI`) so each script run gets its own
   * helper registry. Matches the canonical in-process executor's
   * `Handlebars.create()` per-run scoping behaviour exactly.
   */
  const hbs = Handlebars.create();

  const utils: UtilsAPI = {
    /* Sync, pure: implement locally. */
    uuid: () => crypto.randomUUID(),

    shortId: () => {
      // 8-char base36 random — sufficient for in-script disambiguation.
      const a = Math.random().toString(36).slice(2, 6);
      const b = Math.random().toString(36).slice(2, 6);
      return (a + b).slice(0, 8);
    },

    /* Async timer: implement locally. No host-side state; setTimeout is fine. */
    wait: (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)),

    /* Pure functions: implement locally. */
    random: {
      int:   (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      float: (min, max) => Math.random() * (max - min) + min,
      pick:  <T>(arr: T[]): T => {
        if (arr.length === 0) throw new Error('utils.random.pick: empty array');
        return arr[Math.floor(Math.random() * arr.length)] as T;
      },
      bool:    () => Math.random() < 0.5,
      chance:  (p) => Math.random() < p,
      shuffle: <T>(arr: T[]): T[] => {
        const out = [...arr];
        for (let i = out.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = out[i] as T;
          out[i] = out[j] as T;
          out[j] = tmp;
        }
        return out;
      },
    },

    /* ── Phase 9d.1: utils.macros.resolve — async proxy ─────────────── */
    macros: {
      resolve: mkAsync<UtilsAPI['macros']['resolve']>(dispatch, 'utils.macros.resolve'),
    },

    /**
     * Phase 9d.2 — per-script-isolated Handlebars environment.
     *
     * `Handlebars.create()` returns a fresh instance whose helper registry
     * is independent of the global one — `registerHelper` calls inside one
     * script's run can't bleed into another's. The instance lives for the
     * duration of `buildProxiedAPI` (one per script run), matching the
     * canonical in-process executor's per-run scoping behaviour.
     *
     * `render` runs Lumiverse macros first via the parent (one IPC
     * roundtrip through `utils.macros.resolve`), then compiles and renders
     * the resulting Handlebars template locally — same two-pass behaviour
     * as the in-process impl, just with the macro pass crossing IPC.
     *
     * `compile` and `registerHelper` are pure Handlebars operations and
     * stay entirely local — no IPC.
     */
    template: {
      render: async (template, data = {}, options = {}) => {
        const macroResolveOpts: MacrosResolveOptions = {
          ...(options.chatId      !== undefined ? { chatId:      options.chatId      } : {}),
          ...(options.characterId !== undefined ? { characterId: options.characterId } : {}),
        };
        const result = await dispatch('utils.macros.resolve', [template, macroResolveOpts]) as MacrosResolveResult;
        return hbs.compile(result.text)(data);
      },

      compile: (template) => {
        const compiled = hbs.compile(template);
        return (data = {}) => compiled(data);
      },

      registerHelper: (name, fn) => {
        hbs.registerHelper(name, fn as Handlebars.HelperDelegate);
      },
    },

    /* ── Phase 9d.1: utils.http — async proxy ────────────────────────── */
    /* allowDangerous + cors_proxy permission gating happens parent-side  */
    /* in the existing api impl; the proxy just forwards.                 */
    http: {
      get:     mkAsync<UtilsAPI['http']['get']>(dispatch,     'utils.http.get'),
      post:    mkAsync<UtilsAPI['http']['post']>(dispatch,    'utils.http.post'),
      put:     mkAsync<UtilsAPI['http']['put']>(dispatch,     'utils.http.put'),
      delete:  mkAsync<UtilsAPI['http']['delete']>(dispatch,  'utils.http.delete'),
      request: mkAsync<UtilsAPI['http']['request']>(dispatch, 'utils.http.request'),
    },

    /* ── Phase 9d.2: pure-byte image utilities (shared `image-format.ts`) ── */
    image: {
      detectMime:     (bytes) => detectImageMime(bytes),
      dataUrlToBytes: (url)   => parseBase64DataUrl(url),
      bytesToDataUrl: (bytes, mimeType) => `data:${mimeType};base64,${bytesToBase64(bytes)}`,
    },
  };

  // ── broadcast.emit — sync void; fire-and-forget IPC ──────────────────────

  const broadcast: BroadcastAPI = {
    emit: (event, payload) => {
      // Canonical signature is `(event, payload?) => void` — synchronous.
      // We dispatch in the background; if the parent rejects (e.g. invalid
      // event name), the rejection surfaces in our pending-map's reject
      // path, where the catch swallows it (matching the canonical contract:
      // emit doesn't throw to callers).
      trackChain(dispatch('broadcast.emit', [event, payload]).catch(() => {
        // Silent — the host will have logged any real issue.
      }));
    },

    /**
     * Phase 6 — subscribe a handler to a broadcast event. The handler closure
     * stays in the child (it can't be remoted); the parent registers a
     * forwarder on the real bus that sends `BroadcastFireMessage` IPC to
     * the child whenever the event fires.
     *
     * Lifecycle (mirrors the in-process bus per `lumiscript_broadcast_bus.md`):
     * subscriptions persist BETWEEN script runs and are cleared at the
     * START of each new run for the owning script. The parent's
     * `dispatchRunScript` sends `BroadcastClearMessage` before each
     * `RunScriptRequest`, which drops the child's per-script handler
     * registry for that script.
     *
     * The returned unsubscribe function explicitly removes a single entry
     * (both child-side closure and parent-side bus subscription) on
     * demand — cleaner than waiting for the next clear.
     */
    on: (event: string, handler: (payload: unknown) => void): (() => void) => {
      const subId = generateSubId(ctx.scriptId);

      // Wrap the user's handler so a thrown error doesn't cascade. Mirrors
      // the in-process bus's "errors caught so one bad handler can't break
      // the others" semantic. Async errors become unhandled rejections —
      // same as the existing in-process behaviour.
      const wrapped = (payload: unknown): void => {
        try {
          handler(payload);
        } catch {
          // Silent — Phase 9's console capture will surface these once
          // it ships; until then mirror the bus's existing swallow path.
        }
      };

      ctx.registerBroadcastHandler(subId, wrapped);

      const subMsg: BroadcastSubscribeMessage = {
        type:     'broadcast-subscribe',
        scriptId: ctx.scriptId,
        subId,
        event,
      };
      try {
        ctx.send(subMsg);
      } catch (err) {
        // Channel write failed — undo the local registration so we don't
        // leak a closure that'll never receive fires.
        ctx.unregisterBroadcastHandler(subId);
        throw err instanceof Error ? err : new Error(String(err));
      }

      return () => {
        ctx.unregisterBroadcastHandler(subId);
        const unsubMsg: BroadcastUnsubscribeMessage = {
          type:     'broadcast-unsubscribe',
          scriptId: ctx.scriptId,
          subId,
        };
        try { ctx.send(unsubMsg); } catch { /* channel down — handler is already gone child-side */ }
      };
    },
  };

  // ── variables — full async proxy via IPC (the Phase 3 demo target) ──────

  /**
   * Build a proxy `VariableStore` for one of the four scopes. Each method
   * dispatches via IPC and returns the parent's response.
   */
  function buildVariableStoreProxy(scope: 'local' | 'global' | 'character' | 'chat'): VariableStore {
    return {
      get: <T = unknown>(key: string, defaultValue?: T) =>
        dispatch(`variables.${scope}.get`, [key, defaultValue]) as Promise<T | undefined>,

      set: <T = unknown>(key: string, value: T) =>
        dispatch(`variables.${scope}.set`, [key, value]) as Promise<void>,

      delete: (key: string) =>
        dispatch(`variables.${scope}.delete`, [key]) as Promise<boolean>,

      has: (key: string) =>
        dispatch(`variables.${scope}.has`, [key]) as Promise<boolean>,

      clear: () =>
        dispatch(`variables.${scope}.clear`, []) as Promise<void>,
    };
  }

  const variables: VariablesAPI = {
    local:     buildVariableStoreProxy('local'),
    global:    buildVariableStoreProxy('global'),
    character: buildVariableStoreProxy('character'),
    chat:      buildVariableStoreProxy('chat'),
  };

  // ── db — handle-returning api.db.collection + value-returning rest ──────

  /**
   * Generic handle-method dispatcher. Sends an `api-request` with
   * `targetHandle` set; the parent's host-dispatcher resolves the handle
   * to the real object and invokes the method on it. Mirrors `dispatch`
   * but for handle-relative calls.
   */
  function dispatchOnHandle(
    targetHandle: HandleRef,
    method: string,
    args: unknown[],
  ): Promise<unknown> {
    // dispatchOnHandle uses two-tier resolution (no `latestRunIdByScript`
    // middle tier — handles dispatch under their originating proxy's
    // run by design). The diagnostic discriminant captures which tier
    // resolved.
    const ctxRunId = runIdContext.getStore();
    const runIdSource: 'context' | 'ctx' =
      ctxRunId !== undefined ? 'context' : 'ctx';
    const runId = ctxRunId ?? ctx.runId;
    const requestId = generateRequestId(runId);
    // v0.26.1 — wrap in trackChain. See `dispatch` for the rationale.
    const p = new Promise<unknown>((resolve, reject) => {
      pending.set(requestId, { resolve, reject });
      const msg: ApiProxyRequest = {
        type:     'api-request',
        requestId,
        runId,
        scriptId: ctx.scriptId,
        method,
        args,
        targetHandle,
        _runIdSource: runIdSource,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        pending.delete(requestId);
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    });
    return trackChain(p);
  }

  /**
   * Wrap a `HandleRef` returned by `api.db.collection` in a `Collection<T>`
   * shape. Each method dispatches via `dispatchOnHandle`. The user script
   * sees a normal Collection; IPC layer is invisible.
   *
   * Schema handling (script-runner / IPC path): Zod schemas can't survive
   * Bun's structured-clone — class-instance methods are stripped, so the
   * parent never receives a usable `schema.parse()`. We move validation
   * child-side: the user's Zod schema is captured in this closure when
   * `db.collection({ schema })` is called, and we validate at every
   * insert/insertMany boundary BEFORE crossing IPC. The parent-side
   * `DbStore` runs without a schema in this path; that's fine — validation
   * already happened upstream and parent just persists.
   *
   * Update validation is best-effort: we use `schema.partial().parse(patch)`
   * for `ZodObject` schemas (catches a bad value in any provided field),
   * skip otherwise. Weaker than the in-process executor's "validate the
   * merged record" but covers the common case. Patch shapes that pass
   * `partial()` but produce an invalid merged record persist without
   * detection; flag this in user-facing docs when the update path matters.
   */
  function buildCollectionProxy<T extends DbRecord>(
    handleRef: HandleRef,
    schema?:   z.ZodType<unknown>,
  ): Collection<T> {
    function validateOnInsert(record: unknown, context: string): void {
      if (!schema) return;
      try { schema.parse(record); }
      catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(`api.db: schema validation failed on ${context}: ${msg}`);
      }
    }

    /**
     * v0.26.x — function-predicate guard.
     *
     * `DbFilter` accepts `undefined | Partial<T> | ((record: T) => boolean)`.
     * Function predicates are valid in the canonical (in-process) but cannot
     * cross the script-runner subprocess IPC boundary — `structuredClone`
     * rejects function references with `DataCloneError: The object can not
     * be cloned`. Without this guard, calls like `collection.delete(() => true)`
     * surface that opaque error from deep inside the IPC marshalling layer.
     *
     * Throw a clear, actionable error pointing at the simpler API surfaces
     * that don't have this constraint:
     *   - `clear()`              for "remove all records"
     *   - object filter shape    for narrow updates / deletes
     *     (e.g. `{ deleted: false }`)
     *   - `query(jsonQueryStr)`  for complex filtering — jsonquery strings
     *                            cross IPC cleanly
     *
     * Workaround for find/findOne with predicate logic: fetch all records
     * (`find()` with no filter), filter locally in user code.
     *
     * Same architectural constraint as the Zod schema strip in `db.collection`
     * (Fix 1 in v0.26.1 post-mortem) — non-cloneable JS values cannot cross IPC.
     */
    function rejectFunctionFilter(method: string, filter: unknown): void {
      if (typeof filter === 'function') {
        throw new Error(
          `api.db.${method}: function predicates can't cross the script-runner ` +
          `IPC boundary. Alternatives: use \`clear()\` for "delete all", ` +
          `an object filter (e.g. \`{ field: value }\`) for narrow matches, ` +
          `or \`query(jsonQueryString)\` for complex filtering. For ` +
          `\`find\`/\`findOne\`, fetch with \`find()\` (no filter) and ` +
          `apply your predicate locally in script code.`,
        );
      }
    }

    return {
      insert: (record) => {
        validateOnInsert(record, 'insert');
        return dispatchOnHandle(handleRef, 'insert', [record]) as Promise<T>;
      },

      insertMany: (records) => {
        if (Array.isArray(records)) {
          records.forEach((r, i) => validateOnInsert(r, `insertMany[${i}]`));
        }
        return dispatchOnHandle(handleRef, 'insertMany', [records]) as Promise<T[]>;
      },

      find: (filter?: DbFilter<T>) => {
        rejectFunctionFilter('find', filter);
        return dispatchOnHandle(handleRef, 'find', filter !== undefined ? [filter] : []) as Promise<T[]>;
      },

      findOne: (filter: DbFilter<T>) => {
        rejectFunctionFilter('findOne', filter);
        return dispatchOnHandle(handleRef, 'findOne', [filter]) as Promise<T | null>;
      },

      update: (filter: DbFilter<T>, patch: Partial<T>) => {
        rejectFunctionFilter('update', filter);
        // Best-effort patch validation: schema.partial() for ZodObject;
        // skip otherwise. See the function-level JSDoc above for the
        // weaker-than-canonical caveat.
        if (schema instanceof z.ZodObject) {
          try { schema.partial().parse(patch); }
          catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            throw new Error(`api.db: schema validation failed on update (patch): ${msg}`);
          }
        }
        return dispatchOnHandle(handleRef, 'update', [filter, patch]) as Promise<number>;
      },

      delete: (filter: DbFilter<T>) => {
        rejectFunctionFilter('delete', filter);
        return dispatchOnHandle(handleRef, 'delete', [filter]) as Promise<number>;
      },

      count: (filter?: DbFilter<T>) => {
        rejectFunctionFilter('count', filter);
        return dispatchOnHandle(handleRef, 'count', filter !== undefined ? [filter] : []) as Promise<number>;
      },

      clear: () =>
        dispatchOnHandle(handleRef, 'clear', []) as Promise<void>,

      query: <R = unknown>(jsonQuery: string) =>
        dispatchOnHandle(handleRef, 'query', [jsonQuery]) as Promise<R>,
    };
  }

  // ── ui — Phase 5 vends `dom.addStyle` (StyleHandle); rest stubbed ───────

  const dom: DOMAPI = {
    /**
     * Phase 5 smoke target: registers a CSS rule with the host, gets back
     * a `StyleHandle` with `.remove()`. The handle is persistent (lives
     * past the originating run) per the lifecycle classification.
     *
     * The canonical signature returns a sync-shaped `{ remove(): void }`
     * — but we can't make a sync object from an async IPC, so we delay
     * resolution by returning a pre-resolved-handle object: the handle
     * IPC fires, but the returned object's `remove()` is sync void.
     *
     * SHAPE NOTE: addStyle is documented as sync-returning. Our proxy
     * makes the IPC call sync-fire-and-forget on registration too — the
     * caller gets a `{ remove() }` object whose handle isn't yet known
     * at return time. We stash a handle promise internally; `remove()`
     * awaits it then dispatches the removal. Pragma: most user code
     * calls addStyle once in a setup() block and remove() much later,
     * so the resolution race is irrelevant in practice.
     */
    addStyle: (css, opts) => {
      // v0.26.x — `opts.id` enables replace-by-id semantics on the host:
      // repeated calls with the same `(scriptId, id)` remove the prior
      // stylesheet before injecting the new one. Plain JSON object — no
      // structured-clone trap. See `engine/api/dom.ts:addStyle` for the
      // host-side implementation.
      const args: unknown[] = opts !== undefined ? [css, opts] : [css];
      const handlePromise = dispatch('ui.dom.addStyle', args) as Promise<HandleRef>;
      // Cache the handle once it arrives so subsequent .remove() calls
      // don't re-await; first .remove() always pays the resolution cost.
      let cachedHandle: HandleRef | null = null;
      let cachedError: Error | null = null;
      void handlePromise.then(
        (h) => { cachedHandle = isHandleRef(h) ? h : null; if (!cachedHandle) cachedError = new Error('addStyle: host did not return a HandleRef'); },
        (err) => { cachedError = err instanceof Error ? err : new Error(String(err)); },
      );
      return {
        remove: () => {
          // Fire-and-forget like broadcast.emit. If the handle hasn't
          // arrived yet (rare — addStyle resolves in ~10ms), we await
          // inside an async IIFE.
          void (async () => {
            try {
              if (cachedHandle) {
                await dispatchOnHandle(cachedHandle, 'remove', []);
                return;
              }
              if (cachedError) throw cachedError;
              const h = await handlePromise;
              if (!isHandleRef(h)) throw new Error('addStyle: handle never resolved');
              await dispatchOnHandle(h, 'remove', []);
            } catch {
              // Silent — addStyle's canonical .remove() is sync-void;
              // a remove failure shouldn't surface as a thrown error.
            }
          })();
        },
      };
    },

    /**
     * Phase 9d.4.c-1 — DOM injection (sync return, repaired post-9d.4.e-2-a).
     *
     * The proxy generates the elementId child-side and threads it via
     * `options._elementId` so the canonical uses the same id; the
     * returned DOMHandle is sync-shaped with that elementId baked in.
     * Stable-id idempotency works via a per-script cache: repeated
     * `inject({id: 'X'})` calls within a child runtime lifetime resolve
     * to the SAME elementId, and the canonical's `resolveStableId` block
     * finds the existing element + updates in place — exact behavioural
     * parity with the in-process executor's canonical contract.
     *
     * The dispatch is fire-and-forget at this level — we don't await the
     * api-response. Canonical sync-throws (perm denial via `gate()`)
     * become async catch-handler logs; the user's handle methods then
     * silently no-op via the ui._dom.* lookup-miss path. Acceptable
     * trade-off for preserving the canonical's sync return type.
     */
    inject: (target: string, html: string, options?: DOMInjectOptions): DOMHandle => {
      const stableId  = options?.id;
      const elementId = getOrAllocateElementId(ctx.scriptId, stableId);
      const fullOptions: DOMInjectOptions = {
        ...options,
        _elementId: elementId,
      };
      trackChain(dispatch('ui.dom.inject', [target, html, fullOptions]).catch((err) => {
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.dom.inject: dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `subsequent handle method calls will no-op via parent-side lookup miss`,
          );
        } catch { /* ignore */ }
      }));
      return buildDOMHandleProxy(elementId);
    },

    injectAtMessage: (messageId: string, html: string, options?: DOMMessageInjectOptions): DOMHandle => {
      const stableId  = options?.id;
      const elementId = getOrAllocateElementId(ctx.scriptId, stableId);
      const fullOptions: DOMMessageInjectOptions = {
        ...options,
        _elementId: elementId,
      };
      trackChain(dispatch('ui.dom.injectAtMessage', [messageId, html, fullOptions]).catch((err) => {
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.dom.injectAtMessage: dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `subsequent handle method calls will no-op via parent-side lookup miss`,
          );
        } catch { /* ignore */ }
      }));
      return buildDOMHandleProxy(elementId);
    },

    /**
     * Phase 9d.4.c-1 — `cleanup()` is sync void per the canonical
     * interface. The parent's special-case route at `'ui.dom.cleanup'`
     * tears down BOTH the canonical DOM state AND our `pendingDomHandles`
     * map for the script. Fire-and-forget at the user level.
     */
    cleanup: mkSyncVoidFireForget<DOMAPI['cleanup']>(dispatch, 'ui.dom.cleanup', trackChain),
  };

  /**
   * Phase 9d.4.c-1 — sync-shaped DOMHandle proxy. Construct from an
   * elementId (the canonical's id, returned by the parent after
   * inject*). Methods lazy-dispatch to internal `'ui._dom.*'` routes;
   * the parent looks up the canonical handle by elementId and invokes.
   *
   * Sync-void methods (update, remove, makeDraggable) use fire-and-
   * forget IPC. Errors during these (e.g. handle already removed)
   * surface as console warnings via the api-proxy error path but don't
   * throw to user code — matches canonical's own non-throwing semantics.
   *
   * `injectChild` is async-returning for the same idempotency reason
   * as `inject`. `on()` is reserved for Phase 9d.4.c-2.
   *
   * Phase 9d.4.d Option B — `gateAck` (optional) is a Promise that
   * method dispatches chain off when the canonical handle's frontend
   * binding is async (showAdvancedModal's `.root` is constructed sync
   * but the rootElementId only becomes meaningful on the FE after
   * `ls_modal_open` is processed). For regular `inject*`-returned
   * handles, `gateAck` is omitted — the inject Promise already gated
   * the construction of the proxy itself, so any sync method call after
   * is post-binding by construction (within the same WS / IPC channel
   * arrival ordering, modulo WS reconnect — see Option B notes in
   * host-dispatcher.ts).
   *
   * When `gateAck` rejects, chained dispatches skip via the standard
   * Promise reject-pass-through; the catch on each method swallows the
   * rejection (canonical sync-void contract). User code sees no throw.
   */
  function buildDOMHandleProxy(elementId: string, gateAck?: Promise<unknown>): DOMHandle {
    // Why conditional gating instead of an always-resolved Promise?
    //
    // An always-resolved gate (`gate = gateAck ?? Promise.resolve()` then
    // `gate.then(...)` on every dispatch) introduces a microtask hop even
    // for un-gated callers (regular inject*-returned handles). That hop
    // reorders these dispatches against any sync IPC issued AFTER them in
    // the same turn that bypasses the gate (e.g. `api.ui.dom.cleanup` is
    // `mkSyncVoidFireForget` and fires synchronously). Result: cleanup's
    // IPC arrives at the parent before the microtask-deferred ones,
    // dropping pendingDomHandles for the script before subsequent
    // register-handler / dom.remove dispatches can look up the elementId
    // → spurious "DOM handle ... not found" warnings.
    //
    // Pre-Option-B all DOMHandle method dispatches were sync ctx.sends,
    // so they arrived at the parent in user-code source order, ahead of
    // any subsequent cleanup. We restore that ordering for the un-gated
    // path while preserving the gating semantics for showAdvancedModal's
    // root (where the gate IS the entire point — block until the modal's
    // open echo lands so the elementId is bound parent + frontend side).
    const gateOrFire = (thunk: () => Promise<unknown>): Promise<unknown> =>
      gateAck === undefined ? thunk() : gateAck.then(thunk);

    return {
      get id(): string { return elementId; },

      update: (html: string): void => {
        trackChain(gateOrFire(() => dispatch('ui._dom.update', [elementId, html]))
          .catch(() => { /* canonical: sync void — drop errors */ }));
      },

      remove: (): void => {
        trackChain(gateOrFire(() => dispatch('ui._dom.remove', [elementId]))
          .catch(() => { /* canonical: sync void */ }));
      },

      makeDraggable: (handleSelector?: string): void => {
        trackChain(gateOrFire(() => dispatch(
          'ui._dom.makeDraggable',
          handleSelector !== undefined ? [elementId, handleSelector] : [elementId],
        )).catch(() => { /* canonical: sync void */ }));
      },

      /**
       * Phase 9d.4.c-1 sync-return repair — same `_elementId` threading
       * as top-level `inject`. Child generates elementId upfront, threads
       * via `options._elementId`, returns sync DOMHandle. Dispatch goes
       * through `gateOrFire` so it queues behind the parent's openAck
       * when this handle is the `.root` of a showAdvancedModal /
       * createFloatWidget (otherwise fires sync immediately).
       *
       * Stable-id cache participates the same way `inject` does — repeat
       * `injectChild({id: 'X'})` calls resolve to the same elementId.
       */
      injectChild: (target: string, html: string, options?: DOMInjectOptions): DOMHandle => {
        const childStableId  = options?.id;
        const childElementId = getOrAllocateElementId(ctx.scriptId, childStableId);
        const fullOptions: DOMInjectOptions = {
          ...options,
          _elementId: childElementId,
        };
        trackChain(gateOrFire(() => dispatch(
          'ui._dom.injectChild',
          [elementId, target, html, fullOptions],
        )).catch((err) => {
          try {
            // eslint-disable-next-line no-console
            console.warn(
              `DOMHandle.injectChild: dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
              `subsequent child-handle method calls will no-op via parent-side lookup miss`,
            );
          } catch { /* ignore */ }
        }));
        return buildDOMHandleProxy(childElementId);
      },

      /**
       * Phase 9d.4.c-2 — attach a DOM event listener.
       *
       * Same handler-IPC pattern as `commands.onInvoked` (9d.3.c) but
       * scoped per-element rather than per-script:
       *   1. Generate per-script handlerId
       *   2. Stash handler closure in child's per-script registry
       *   3. Send `register-handler` IPC with kind='domEventListener'
       *      carrying elementId + event + options
       *   4. Parent looks up canonical DOMHandle by elementId, calls
       *      its `.on(event, wrapper, options)`, stores returned unsub
       *      under handlerId in `handlerCleanups`
       *   5. Return sync unsub fn that drops local closure + sends
       *      `unregister-handler` IPC
       *
       * When DOM event fires, frontend → parent's dom-registry → wrapper
       * → `RunHandlerRequest` IPC to child → handler closure invoked
       * with `DOMEventData` payload.
       *
       * Phase 9d.4.d Option B — when `gateAck` is set, `register-handler`
       * IPC is also gated (parent's lookup of the canonical DOMHandle by
       * elementId only succeeds after the open path stored it). Same
       * gate variable closed over from `buildDOMHandleProxy`'s scope.
       */
      on: ((event, handler, options) => {
        const handlerId = generateHandlerId('domEventListener');
        ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
          // IPC args shape: [data: DOMEventData]. Handler returns void.
          handler(handlerArgs[0] as Parameters<typeof handler>[0]);
        });

        const buildAndSend = (): void => {
          const msg: RegisterHandler = {
            type:       'register-handler',
            kind:       'domEventListener',
            runId:      runIdContext.getStore() ?? ctx.runId,
            scriptId:   ctx.scriptId,
            handlerId,
            elementId,
            event,
            ...(options !== undefined ? { options } : {}),
            hasHandler: true,
          };
          ctx.send(msg);
        };

        // Same conditional-gating reasoning as the dispatch helpers: when
        // gateAck is undefined, fire register-handler synchronously to
        // preserve in-turn IPC ordering against subsequent sync sends
        // (e.g. unsub() called immediately after on()). When a gate is
        // supplied, queue behind it so the parent has the DOMHandle
        // stored under elementId before the lookup runs.
        if (gateAck === undefined) {
          try {
            buildAndSend();
          } catch (err) {
            ctx.unregisterHandlerClosure(handlerId);
            throw err instanceof Error ? err : new Error(String(err));
          }
        } else {
          trackChain(gateAck
            .then(buildAndSend)
            .catch(() => {
              // gate rejected (e.g. modal open timed out) — drop the
              // closure since no parent-side wrapper will ever fire it.
              ctx.unregisterHandlerClosure(handlerId);
            }));
        }

        return () => {
          ctx.unregisterHandlerClosure(handlerId);
          const unsubMsg: UnregisterHandler = {
            type:       'unregister-handler',
            kind:       'domEventListener',
            scriptId:   ctx.scriptId,
            handlerId,
          };
          // Unsub fires synchronously regardless of gate. If the user
          // calls unsub before a gated register-handler has reached the
          // parent, the parent's unregister-handler doesn't find the
          // handlerId (no register-handler arrived yet) and silently
          // no-ops. That's acceptable because:
          //   - the gated register-handler chain has its own .catch that
          //     drops the local closure if it observes a no-longer-needed
          //     state, AND
          //   - if register-handler subsequently lands on the parent
          //     without a child-side handlerId to fire, the wrapper
          //     fires `RunHandlerRequest` once and the child's
          //     handlerClosure-not-found path returns a clean error.
          try { ctx.send(unsubMsg); } catch { /* sync void: no throw */ }
        };
      }) as DOMHandle['on'],
    };
  }

  // ─── ui — Phase 9d.4.a vends the simple-passthrough subset ────────────────
  //
  // **Architecture note (worth banking)**: most of `api.ui.*` looks like it
  // needs a "frontend bridge" — the methods are clearly UI-bound and the
  // canonical impls in `engine/api/ui.ts` send messages to the frontend.
  // BUT: from this proxy's perspective, none of that matters. The
  // canonical impl runs on the parent and handles the entire frontend
  // round-trip itself:
  //
  //   - `toast`, `prompt`, `confirm`, `editText` use direct host APIs
  //     (`spindle.toast`, `spindle.prompt.input`, `spindle.modal.confirm`,
  //     `spindle.textEditor.open`). The host's own modal/prompt machinery
  //     is what users see; nothing flows through extension code on the
  //     frontend side.
  //
  //   - `showContextMenu`, `pushNotification`, `getPushStatus` use
  //     parent-side awaiter tables (e.g. `pendingContextMenus` in
  //     `api/ui.ts`) plus `spindle.sendToFrontend`/`onFrontendMessage`
  //     for the round-trip. Backend's `onFrontendMessage` handler routes
  //     incoming `ls_context_menu_result` / etc. messages to the right
  //     awaiter, resolves the canonical impl's promise, which returns up
  //     through `dispatchApiCall` and out to the child via `api-response`.
  //
  // The result is that the EXISTING `api-request` / `api-response` IPC
  // channel (built in Phases 3–5) already carries everything we need.
  // No new IPC types, no three-hop bridge, no separate channel. These
  // are just `mkAsync` / `mkSyncVoidFireForget` passthroughs — the same
  // pattern as `chat.*` / `chats.*` / `worldInfo.*` / etc. from 9d.1.
  //
  // Methods that DO need additional infrastructure:
  //   - `showModal` / `showAdvancedModal` return handles → 9d.4.b uses
  //     the persistent-handle pattern from Phase 5 (StyleHandle) and
  //     9d.3.d (interceptor handles).
  //   - `dom.{inject,injectAtMessage,cleanup}` use DOMHandle → 9d.4.c.
  //   - `registerInputBarAction` / `createFloatWidget` / `registerDrawerTab`
  //     have onClick / onActivate handlers → 9d.4.d combines the
  //     handler-IPC pattern from 9d.3 with the handle pattern.
  //
  // Of those four, only `dom.inject*` is "the frontend bridge" in any
  // meaningful sense — and even there, the canonical impl sends frontend
  // messages directly; we just need to proxy the DOMHandle's methods
  // back through `api-request`. The proxy stays thin throughout.
  const ui: UIAPI = {
    dom,

    // ── Phase 9d.4.a — simple passthroughs ─────────────────────────────────
    toast:            mkSyncVoidFireForget<UIAPI['toast']>(dispatch, 'ui.toast', trackChain),
    prompt:           mkAsync<UIAPI['prompt']>(dispatch,           'ui.prompt'),
    confirm:          mkAsync<UIAPI['confirm']>(dispatch,          'ui.confirm'),
    editText:         mkAsync<UIAPI['editText']>(dispatch,         'ui.editText'),
    showContextMenu:  mkAsync<UIAPI['showContextMenu']>(dispatch,  'ui.showContextMenu'),
    pushNotification: mkAsync<UIAPI['pushNotification']>(dispatch, 'ui.pushNotification'),
    getPushStatus:    mkAsync<UIAPI['getPushStatus']>(dispatch,    'ui.getPushStatus'),

    // ── Phase 9d.4.b: ModalHandle ──────────────────────────────────────────
    //
    // Sync return per the canonical interface. The trick:
    //   1. Generate `openRequestId` upfront child-side (a UUID).
    //   2. Send `dispatch('ui.showModal', [items, {...options, openRequestId}])`
    //      — the canonical reads `options.openRequestId ?? crypto.randomUUID()`
    //      so our id wins.
    //   3. Return a sync handle with our `openRequestId`. The handle's
    //      `result` and `close()` lazy-dispatch via internal method
    //      paths (`ui._modal.awaitResult` / `ui._modal.close`) that
    //      look up the canonical handle parent-side by id.
    //
    // The dispatch in step 2 is fire-and-forget at the user-code level
    // (no await), but its rejection isn't lost — we await it inside the
    // handle's `result` Promise (which dispatches awaitResult only after
    // showModalAck resolves), so any error in the showModal call surfaces
    // as a result-Promise rejection. This matches the canonical's
    // semantics where a failed showModal would also surface via the
    // result Promise rejecting.
    showModal: (items, options) => {
      const openRequestId = crypto.randomUUID();
      const showModalAck = dispatch('ui.showModal', [
        items,
        { ...options, openRequestId },
      ]).catch((err) => {
        // Re-throw here so awaitResult below sees it. The user-level
        // rejection surfaces via handle.result.
        throw err instanceof Error ? err : new Error(String(err));
      });

      return {
        openRequestId,
        // result dispatches awaitResult AFTER showModalAck — ensures the
        // parent has registered the canonical handle before we look up.
        result: showModalAck.then(
          () => dispatch('ui._modal.awaitResult', [openRequestId]) as Promise<import('../types/script.js').ModalResult>,
        ),
        close: () => showModalAck.then(
          () => dispatch('ui._modal.close', [openRequestId]) as Promise<void>,
        ),
      };
    },

    /**
     * Phase 9d.4.d — sync-shaped AdvancedModalHandle proxy. Same trick
     * as `showModal` (9d.4.b): generate ids upfront child-side and
     * thread them via @internal options fields so the canonical uses
     * THE SAME ids as our proxy. The sync handle methods then dispatch
     * via internal `'ui._advModal.*'` routes that look up by modalId.
     *
     * Three pieces of state per modal live in module-scope
     * `advancedModalState`:
     *   - `dismissedRef.current`: boolean read by the `.dismissed` getter
     *   - `dismissedReasonRef.current`: reason recorded for late onDismiss
     *   - `listeners`: Set of user-registered onDismiss callbacks
     *
     * The bus-like dismiss propagation (one `advanced-modal-dismissed`
     * IPC per modal lifetime, fanned out to N listeners locally) is
     * handled by the module-scope `notifyAdvancedModalDismissed`
     * function the child-entry IPC dispatcher calls.
     *
     * Sync-throws from canonical (stack-limit / perm denial) become
     * deferred async failures: the dispatch rejection flips
     * `dismissedRef.current = true` so the handle reports as dismissed,
     * fires listeners with reason='teardown' on next microtask. This
     * preserves canonical's never-throw semantics for setTitle/dismiss
     * while giving onDismiss callbacks a chance to react.
     *
     * The `.root` DOMHandle is constructed sync from rootElementId via
     * `buildDOMHandleProxy(rootElementId)` — same machinery as
     * `inject*`-returned handles. The parent registers its canonical
     * `.root` under the same id so all `'ui._dom.*'` dispatches work.
     *
     * `.id` on `.root` is reachable in canonical too (DOMHandle has
     * a stable `id` field) — proxy's getter returns the closed-over
     * rootElementId, so `handle.root.id === rootElementId` parity holds.
     */
    showAdvancedModal: (options) => {
      const modalId       = crypto.randomUUID();
      const rootElementId = crypto.randomUUID();

      const dismissedRef:       { current: boolean }                                = { current: false };
      const dismissedReasonRef: { current: AdvancedModalDismissReason | null }      = { current: null };
      const listeners:          Set<(reason: AdvancedModalDismissReason) => void>   = new Set();
      advancedModalState.set(modalId, { scriptId: ctx.scriptId, dismissedRef, dismissedReasonRef, listeners });

      // Phase 9d.4.d Option B — fire the open dispatch and KEEP the
      // Promise around. The parent now blocks the api-response until
      // the frontend's `ls_modal_opened` echo confirms the modal is
      // mounted + DOM-bound + dismissal-handler wired. Until openAck
      // resolves, all downstream ops (setTitle, dismiss, root.update,
      // root.on, etc.) are queued; once it resolves they all fly in
      // FIFO order against a fully-prepared parent + frontend.
      //
      // openAck rejects on:
      //   - parent-side timeout (frontend echo never arrives, e.g. WS
      //     reconnect dropped `ls_modal_open`)
      //   - dismissal-before-open (FE-side `ctx.ui.showModal` threw
      //     and the catch path went straight to `ls_modal_dismissed`)
      // In either case, the .catch below promotes the modal to
      // dismissed=teardown; user's onDismiss callbacks fire cleanly;
      // setTitle/dismiss/root.* take their dismissedRef early-return
      // paths (or chain off rejected gate, same outcome).
      const openAck = trackChain(dispatch('ui.showAdvancedModal', [
        { ...options, _modalId: modalId, _rootElementId: rootElementId },
      ]).catch((err) => {
        const state = advancedModalState.get(modalId);
        if (!state || state.dismissedRef.current) {
          // Parent already issued an `advanced-modal-dismissed` IPC for
          // this modal (the synthesised teardown notice we send when
          // the awaiter rejects). The bus path already fired listeners
          // with the right reason; nothing more to do here, but rethrow
          // so the gated chain in buildDOMHandleProxy / setTitle / etc.
          // sees the rejection and skips its dispatch.
          throw err;
        }
        // Awaiter rejected before the parent's bus path fired — happens
        // if the parent's special-case dispatch returned an error
        // response without going through the synthesised-dismissal path.
        // Defensive: synth a teardown locally + fan out listeners.
        state.dismissedRef.current       = true;
        state.dismissedReasonRef.current = 'teardown';
        const snapshot = [...state.listeners];
        state.listeners.clear();
        advancedModalState.delete(modalId);
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.showAdvancedModal: open dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `handle dismissed with reason='teardown'`,
          );
        } catch { /* ignore */ }
        for (const fn of snapshot) {
          try { fn('teardown'); }
          catch { /* swallow */ }
        }
        // Re-throw so any awaiter-of-openAck (the gated chain in
        // buildDOMHandleProxy, setTitle, dismiss) sees the rejection
        // and skips its dispatch via the standard reject-pass-through.
        throw err;
      }));

      // Build the sync DOMHandle proxy gated on openAck. The proxy's
      // method dispatches will queue inside their `gate.then(...)` until
      // openAck resolves (or skip via reject-pass-through if it rejects).
      // Pass openAck — NOT the unwrapped Promise — so the gate observes
      // the same rejection if the parent fails the open. The catch above
      // is a side-effect chain (synthesises dismissal) and re-throws so
      // openAck still rejects from a downstream consumer's perspective.
      const root = buildDOMHandleProxy(rootElementId, openAck);

      const handle: AdvancedModalHandle = {
        modalId,
        root,
        get dismissed(): boolean {
          return dismissedRef.current;
        },
        setTitle: (title: string): void => {
          if (dismissedRef.current) return; // canonical no-op on dismissed
          trackChain(openAck
            .then(() => dispatch('ui._advModal.setTitle', [modalId, title]))
            .catch(() => { /* canonical: sync void; rejection skips the dispatch */ }));
        },
        dismiss: (): void => {
          if (dismissedRef.current) return; // canonical no-op on dismissed
          trackChain(openAck
            .then(() => dispatch('ui._advModal.dismiss', [modalId]))
            .catch(() => { /* canonical: sync void */ }));
        },
        onDismiss: (fn) => {
          // Canonical: if the modal is already dismissed when onDismiss
          // is called, fire the handler on the next microtask with the
          // recorded reason. We mirror that here, reading the cached
          // reason from dismissedReasonRef (set by notifyAdvancedModalDismissed
          // OR by the open-dispatch failure path).
          if (dismissedRef.current) {
            const reason = dismissedReasonRef.current ?? 'user';
            queueMicrotask(() => {
              try { fn(reason); }
              catch { /* swallow user callback errors */ }
            });
            return () => {};
          }
          listeners.add(fn);
          return () => {
            // Idempotent — removing a fn that's already gone is a no-op
            // delete. Safe to call multiple times.
            listeners.delete(fn);
          };
        },
      };

      return handle;
    },

    // ── Phase 9d.4.e-1-a: registerInputBarAction (sync handle, FE-echo gated) ──
    //
    // Same Option-B shape as showAdvancedModal:
    //   1. Sync-validate options.id (proxy-side throws match canonical's
    //      sync-throw contract, surfaced to user code via try/catch).
    //   2. Capture openAck from `dispatch('ui.registerInputBarAction', ...)`.
    //      Parent's `handleRegisterInputBarActionRequest` blocks the
    //      api-response on the frontend's `ls_input_bar_action_registered`
    //      echo — once that lands, openAck resolves and queued downstream
    //      dispatches fly.
    //   3. Return sync handle. setLabel / setSubtitle / setEnabled / destroy
    //      chain on openAck; local `destroyed` flag short-circuits after
    //      destroy() to mirror canonical's `let destroyed = false` guard.
    //   4. onClick lands in 9d.4.e-1-b (handler-IPC pattern, kind='inputBarActionClick').
    //
    // openAck rejection paths:
    //   - parent timeout (FE never echoed; e.g. WS reconnect dropped the
    //     register message)
    //   - canonical sync-throw (stack-limit, validation) — surfaces as
    //     api-response error; proxy treats same as timeout.
    // Both paths flip the local destroyed flag so downstream methods
    // skip cleanly via canonical's "destroyed: no-op" semantics.
    registerInputBarAction: (options: import('../types/script.js').InputBarActionOptions) => {
      // Proxy-side sync validation matches canonical's `if (typeof options.id
      // !== 'string' || options.id.length === 0) throw ...` — surfaces as
      // a thrown Error in user code rather than a deferred async failure.
      if (typeof options?.id !== 'string' || options.id.length === 0) {
        throw new Error('api.ui.registerInputBarAction: options.id must be a non-empty string.');
      }
      const actionId = options.id;

      // Local destroyed flag — flipped by user calling handle.destroy()
      // OR by openAck rejection (the modal failed to register on FE).
      // Mirrors canonical's `let destroyed = false` per-handle gate.
      const destroyedRef = { current: false };

      const openAck = trackChain(dispatch('ui.registerInputBarAction', [options]).catch((err) => {
        // Open failed — flip destroyed so subsequent methods short-circuit.
        // No equivalent of advanced-modal's bus-IPC needed: input-bar
        // actions don't have an onDismiss surface, so we just need
        // downstream method calls to no-op. The destroyedRef flip
        // achieves that without further coordination.
        destroyedRef.current = true;
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.registerInputBarAction: register dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `handle methods will no-op`,
          );
        } catch { /* ignore */ }
        // Re-throw so the gated method dispatches see the rejection
        // and skip via standard reject-pass-through.
        throw err;
      }));

      return {
        actionId,
        setLabel: (nextLabel: string): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._inputBar.setLabel', [actionId, nextLabel]))
            .catch(() => { /* canonical: sync void */ }));
        },
        setSubtitle: (nextSubtitle?: string): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._inputBar.setSubtitle', [actionId, nextSubtitle]))
            .catch(() => { /* canonical: sync void */ }));
        },
        setEnabled: (nextEnabled: boolean): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._inputBar.setEnabled', [actionId, nextEnabled]))
            .catch(() => { /* canonical: sync void */ }));
        },
        /**
         * Phase 9d.4.e-1-b — register a click handler.
         *
         * Same handler-IPC pattern as `commands.onInvoked` (9d.3.c) and
         * `DOMHandle.on` (9d.4.c-2), scoped per-action by closing over
         * `actionId`:
         *   1. Generate per-script handlerId
         *   2. Stash handler closure (`() => void`) in child's per-script
         *      registry
         *   3. Send `register-handler` IPC kind='inputBarActionClick'
         *      carrying actionId — gated on `openAck` so the parent has
         *      the canonical handle stored in `pendingInputBarActions`
         *      before the lookup runs
         *   4. Parent looks up canonical InputBarActionHandle by
         *      (scriptId, actionId), calls its `.onClick(wrapper)`,
         *      stores returned unsub under handlerId in `handlerCleanups`
         *   5. Return sync unsub fn that drops local closure + sends
         *      `unregister-handler` IPC (handlerId-based)
         *
         * When user clicks the action: FE → backend's
         * `dispatchActionClick(scriptId, actionId)` → fans out wrappers →
         * `RunHandlerRequest` IPC to child → handler closure invoked.
         *
         * If `destroyedRef` is already true (handle was destroyed locally
         * OR openAck rejected), `onClick` returns a no-op unsub matching
         * canonical's `if (destroyed) return () => {};` semantics.
         */
        onClick: (handler: () => void): (() => void) => {
          if (destroyedRef.current) return () => {};

          const handlerId = generateHandlerId('inputBarActionClick');
          ctx.registerHandlerClosure(handlerId, async (..._handlerArgs: unknown[]) => {
            // IPC args shape: [] (canonical click is a no-arg callback).
            // Wrap in a Promise-returning closure so HandlerResult can
            // capture sync-throws from the user closure cleanly.
            handler();
          });

          const buildAndSend = (): void => {
            const msg: RegisterHandler = {
              type:       'register-handler',
              kind:       'inputBarActionClick',
              runId:      runIdContext.getStore() ?? ctx.runId,
              scriptId:   ctx.scriptId,
              handlerId,
              actionId,
              hasHandler: true,
            };
            ctx.send(msg);
          };

          // Always gate via openAck: even though the parent's lookup table
          // (`pendingInputBarActions`) is populated synchronously inside
          // `handleRegisterInputBarActionRequest`, the openAck-resolution
          // edge already implies the action is fully wired both
          // parent-side and FE-side. Gating here keeps the contract
          // consistent: every method on the handle waits for "register
          // confirmed" before firing IPC, which is the simplest mental
          // model for users + makes debugging predictable.
          trackChain(openAck
            .then(buildAndSend)
            .catch(() => {
              // openAck rejected (e.g. FE timeout) — drop the closure
              // since no parent-side wrapper will ever fire it.
              ctx.unregisterHandlerClosure(handlerId);
            }));

          return () => {
            ctx.unregisterHandlerClosure(handlerId);
            const unsubMsg: UnregisterHandler = {
              type:       'unregister-handler',
              kind:       'inputBarActionClick',
              scriptId:   ctx.scriptId,
              handlerId,
            };
            // Unsub fires synchronously regardless of gate — same
            // reasoning as DOMHandle.on (9d.4.c-2). Pre-register-arrival
            // unsubs surface on the parent as a no-op
            // `invokeAndDropHandlerCleanup` lookup miss.
            try { ctx.send(unsubMsg); } catch { /* sync void */ }
          };
        },
        destroy: (): void => {
          if (destroyedRef.current) return;
          destroyedRef.current = true;
          trackChain(openAck
            .then(() => dispatch('ui._inputBar.destroy', [actionId]))
            .catch(() => { /* canonical: sync void */ }));
        },
      };
    },

    /**
     * Phase 9d.4.e-2-a — sync-shaped FloatWidgetHandle proxy.
     *
     * Same Option-B shape as showAdvancedModal: child-generates widgetId
     * + rootElementId, threads via @internal options, parent stores both
     * handle and `.root` DOMHandle keyed by their respective ids, awaits
     * FE create-echo before resolving the api-response. Proxy methods
     * (moveTo / setVisible / destroy) chain on openAck.
     *
     * Sync getters (`getPosition`, `isVisible`) read from child-local
     * cached state. The cache is initialised from `options.initialPosition`
     * (defaulting to `{x: 0, y: 0}`) and visibility-true. Updates:
     *   - User-driven (moveTo, setVisible) — cache updated SYNC alongside
     *     IPC dispatch.
     *   - FE-driven (drag-end events) — Phase 9d.4.e-2-b adds a
     *     parent→child position-update notice so the cache reflects
     *     drag results. Until that lands, the child's `getPosition()`
     *     after a user drag returns the LAST USER-SET position, NOT the
     *     drag-end position. Documented limitation closed in 9d.4.e-2-b.
     *
     * `onDragEnd` lands in Phase 9d.4.e-2-b alongside the FE-driven
     * position-update; until then it's `notYetImplemented`.
     */
    createFloatWidget: (options: import('../types/script.js').FloatWidgetOptions) => {
      const widgetId      = crypto.randomUUID();
      const rootElementId = crypto.randomUUID();

      // Phase 9d.4.e-2-b — store cache cells at MODULE scope (keyed by
      // widgetId) so `notifyFloatWidgetPosition` can update them when a
      // FE-driven drag fires. The handle's sync getters close over the
      // SAME cells (passed by reference into `floatWidgetState`), so live
      // updates propagate without any indirection.
      //
      // Initialised from canonical defaults: position from `options.
      // initialPosition` (or `{0, 0}`), visibility starts as `true`
      // (canonical doesn't expose an `initialVisible` option — widgets
      // always start visible, then `setVisible(false)` hides).
      const positionCache = {
        x: options.initialPosition?.x ?? 0,
        y: options.initialPosition?.y ?? 0,
      };
      const visibleCache = { current: true };
      floatWidgetState.set(widgetId, { scriptId: ctx.scriptId, positionCache, visibleCache });

      // Local destroyed flag — flipped by user's destroy() call OR by
      // openAck rejection. Mirrors canonical's per-handle gate.
      const destroyedRef = { current: false };

      const openAck = dispatch('ui.createFloatWidget', [
        { ...options, _widgetId: widgetId, _rootElementId: rootElementId },
      ]).catch((err) => {
        destroyedRef.current = true;
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.createFloatWidget: create dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `handle methods will no-op`,
          );
        } catch { /* ignore */ }
        throw err;
      });

      // Build the .root DOMHandle proxy gated on openAck. Same machinery
      // as showAdvancedModal — the parent registers `.root` in
      // pendingDomHandles inside handleCreateFloatWidgetRequest, so by
      // the time openAck resolves, ui._dom.* dispatches will resolve.
      const root = buildDOMHandleProxy(rootElementId, openAck);

      return {
        widgetId,
        root,
        moveTo: (x: number, y: number): void => {
          if (destroyedRef.current) return;
          // Update local cache SYNC so a getPosition() right after moveTo
          // reflects the user's intent (canonical's behaviour exactly —
          // updateWidgetPosition + entry.x/y mutation is sync).
          positionCache.x = x;
          positionCache.y = y;
          trackChain(openAck
            .then(() => dispatch('ui._floatWidget.moveTo', [widgetId, x, y]))
            .catch(() => { /* canonical: sync void */ }));
        },
        getPosition: (): { x: number; y: number } => {
          // Sync read from positionCache cell. The cell is updated:
          //   - by `moveTo` (programmatic, sync)
          //   - by `notifyFloatWidgetPosition` (FE drag, async via IPC)
          // So the read is always live wrt both update paths.
          return { x: positionCache.x, y: positionCache.y };
        },
        setVisible: (visible: boolean): void => {
          if (destroyedRef.current) return;
          visibleCache.current = visible;
          trackChain(openAck
            .then(() => dispatch('ui._floatWidget.setVisible', [widgetId, visible]))
            .catch(() => { /* canonical: sync void */ }));
        },
        isVisible: (): boolean => {
          return visibleCache.current;
        },
        /**
         * Phase 9d.4.e-2-b — register a drag-end handler.
         *
         * Same handler-IPC pattern as `commands.onInvoked` (9d.3.c),
         * `DOMHandle.on` (9d.4.c-2), and `inputBarAction.onClick` (9d.4.e-1-b),
         * scoped per-widget by closing over `widgetId`:
         *   1. Generate per-script handlerId
         *   2. Stash handler closure (`(pos) => void`) in child's
         *      per-script registry
         *   3. Send `register-handler` IPC kind='floatWidgetDragEnd'
         *      carrying widgetId — gated on `openAck` so the parent has
         *      the canonical handle stored in `pendingFloatWidgets`
         *      before the lookup runs
         *   4. Parent looks up canonical FloatWidgetHandle by
         *      (scriptId, widgetId), calls its `.onDragEnd(wrapper)`,
         *      stores returned unsub under handlerId in `handlerCleanups`
         *   5. Return sync unsub fn that drops local closure + sends
         *      `unregister-handler` IPC (handlerId-based)
         *
         * Position-cache sync is INDEPENDENT of registration: every drag
         * fires a `FloatWidgetPositionNotice` (parent → child) regardless
         * of how many user handlers are registered. The notice arrives at
         * the child BEFORE the `RunHandlerRequest` (FIFO IPC), so any
         * `handle.getPosition()` call inside the user's onDragEnd
         * closure observes the new coordinates.
         *
         * If `destroyedRef` is true (handle destroyed locally OR openAck
         * rejected), returns a no-op unsub matching canonical's
         * destroyed-handle semantics.
         */
        onDragEnd: (handler: (pos: { x: number; y: number }) => void): (() => void) => {
          if (destroyedRef.current) return () => {};

          const handlerId = generateHandlerId('floatWidgetDragEnd');
          ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
            // IPC args shape: [pos: {x, y}]. Handler returns void.
            handler(handlerArgs[0] as { x: number; y: number });
          });

          const buildAndSend = (): void => {
            const msg: RegisterHandler = {
              type:       'register-handler',
              kind:       'floatWidgetDragEnd',
              runId:      runIdContext.getStore() ?? ctx.runId,
              scriptId:   ctx.scriptId,
              handlerId,
              widgetId,
              hasHandler: true,
            };
            ctx.send(msg);
          };

          // Always gate via openAck so the parent's pendingFloatWidgets
          // entry exists before the lookup runs. Same reasoning as the
          // `inputBarActionClick` register path.
          trackChain(openAck
            .then(buildAndSend)
            .catch(() => {
              // openAck rejected (e.g. FE timeout) — drop the closure
              // since no parent-side wrapper will ever fire it.
              ctx.unregisterHandlerClosure(handlerId);
            }));

          return () => {
            ctx.unregisterHandlerClosure(handlerId);
            const unsubMsg: UnregisterHandler = {
              type:       'unregister-handler',
              kind:       'floatWidgetDragEnd',
              scriptId:   ctx.scriptId,
              handlerId,
            };
            // Unsub fires synchronously regardless of gate (same reasoning
            // as DOMHandle.on / inputBarActionClick unsubs).
            try { ctx.send(unsubMsg); } catch { /* sync void */ }
          };
        },
        destroy: (): void => {
          if (destroyedRef.current) return;
          destroyedRef.current = true;
          // Drop the module-scope state for this widget so the cache
          // map doesn't grow indefinitely. Late notices arriving after
          // destroy hit the no-op branch in `notifyFloatWidgetPosition`.
          floatWidgetState.delete(widgetId);
          trackChain(openAck
            .then(() => dispatch('ui._floatWidget.destroy', [widgetId]))
            .catch(() => { /* canonical: sync void */ }));
        },
      };
    },

    /**
     * Phase 9d.4.e-3-a — sync-shaped DrawerTabHandle proxy.
     *
     * Same Option-B shape as createFloatWidget: child-generates
     * `_rootElementId` (tabId is user-supplied via `options.id`),
     * threads via @internal options, parent stores both handle and
     * `.root` DOMHandle keyed by their respective ids, awaits FE
     * register-echo before resolving the api-response. Proxy methods
     * (setTitle / setShortName / setBadge / activate / destroy) chain on
     * openAck.
     *
     * Sync validation matches canonical: throws on empty/non-string id
     * or title.
     *
     * `onActivate` lands in Phase 9d.4.e-3-b alongside handler-IPC kind=
     * 'drawerTabActivate'; until then it's `notYetImplemented`.
     */
    registerDrawerTab: (options: import('../types/script.js').DrawerTabOptions) => {
      // Proxy-side sync validation matches canonical's sync throws —
      // surfaces as a thrown Error in user code rather than a deferred
      // async failure.
      if (typeof options?.id !== 'string' || options.id.length === 0) {
        throw new Error('api.ui.registerDrawerTab: options.id must be a non-empty string.');
      }
      if (typeof options?.title !== 'string' || options.title.length === 0) {
        throw new Error('api.ui.registerDrawerTab: options.title must be a non-empty string.');
      }
      const tabId         = options.id;
      const rootElementId = crypto.randomUUID();

      // Local destroyed flag — flipped by user's destroy() call OR by
      // openAck rejection. Mirrors canonical's per-handle gate.
      const destroyedRef = { current: false };

      const openAck = dispatch('ui.registerDrawerTab', [
        { ...options, _rootElementId: rootElementId },
      ]).catch((err) => {
        destroyedRef.current = true;
        try {
          // eslint-disable-next-line no-console
          console.warn(
            `api.ui.registerDrawerTab: register dispatch failed (${err instanceof Error ? err.message : String(err)}); ` +
            `handle methods will no-op`,
          );
        } catch { /* ignore */ }
        throw err;
      });

      // Build the .root DOMHandle proxy gated on openAck. Same machinery
      // as showAdvancedModal / createFloatWidget — parent registers
      // `.root` in pendingDomHandles inside handleRegisterDrawerTabRequest.
      const root = buildDOMHandleProxy(rootElementId, openAck);

      return {
        tabId,
        root,
        setTitle: (title: string): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._drawerTab.setTitle', [tabId, title]))
            .catch(() => { /* canonical: sync void */ }));
        },
        setShortName: (shortName: string): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._drawerTab.setShortName', [tabId, shortName]))
            .catch(() => { /* canonical: sync void */ }));
        },
        setBadge: (text: string | null): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._drawerTab.setBadge', [tabId, text]))
            .catch(() => { /* canonical: sync void */ }));
        },
        activate: (): void => {
          if (destroyedRef.current) return;
          trackChain(openAck
            .then(() => dispatch('ui._drawerTab.activate', [tabId]))
            .catch(() => { /* canonical: sync void */ }));
        },
        /**
         * Phase 9d.4.e-3-b — register an activation handler.
         *
         * Same handler-IPC pattern as `commands.onInvoked` (9d.3.c),
         * `DOMHandle.on` (9d.4.c-2), `inputBarAction.onClick` (9d.4.e-1-b),
         * and `floatWidget.onDragEnd` (9d.4.e-2-b), scoped per-tab by
         * closing over `tabId`:
         *   1. Generate per-script handlerId
         *   2. Stash handler closure (`() => void`) in child's per-script
         *      registry
         *   3. Send `register-handler` IPC kind='drawerTabActivate'
         *      carrying tabId — gated on `openAck` so the parent has
         *      the canonical handle stored before the lookup runs
         *   4. Parent looks up canonical DrawerTabHandle by
         *      (scriptId, tabId), calls its `.onActivate(wrapper)`,
         *      stores returned unsub under handlerId in `handlerCleanups`
         *   5. Return sync unsub fn
         *
         * Activation events come from: sidebar click, command-palette
         * selection, or programmatic `handle.activate()`. The host
         * fires `onActivate` for all three paths.
         *
         * If `destroyedRef` is true (handle destroyed locally OR openAck
         * rejected), returns a no-op unsub matching canonical's
         * destroyed-handle semantics.
         */
        onActivate: (handler: () => void): (() => void) => {
          if (destroyedRef.current) return () => {};

          const handlerId = generateHandlerId('drawerTabActivate');
          ctx.registerHandlerClosure(handlerId, async (..._handlerArgs: unknown[]) => {
            // IPC args shape: [] (canonical onActivate is no-arg).
            handler();
          });

          const buildAndSend = (): void => {
            const msg: RegisterHandler = {
              type:       'register-handler',
              kind:       'drawerTabActivate',
              runId:      runIdContext.getStore() ?? ctx.runId,
              scriptId:   ctx.scriptId,
              handlerId,
              tabId,
              hasHandler: true,
            };
            ctx.send(msg);
          };

          // Always gate via openAck so the parent's pendingDrawerTabs
          // entry exists before the lookup runs. Same reasoning as
          // floatWidget.onDragEnd / inputBarAction.onClick.
          trackChain(openAck
            .then(buildAndSend)
            .catch(() => {
              // openAck rejected (e.g. FE timeout) — drop the closure
              // since no parent-side wrapper will ever fire it.
              ctx.unregisterHandlerClosure(handlerId);
            }));

          return () => {
            ctx.unregisterHandlerClosure(handlerId);
            const unsubMsg: UnregisterHandler = {
              type:       'unregister-handler',
              kind:       'drawerTabActivate',
              scriptId:   ctx.scriptId,
              handlerId,
            };
            try { ctx.send(unsubMsg); } catch { /* sync void */ }
          };
        },
        destroy: (): void => {
          if (destroyedRef.current) return;
          destroyedRef.current = true;
          trackChain(openAck
            .then(() => dispatch('ui._drawerTab.destroy', [tabId]))
            .catch(() => { /* canonical: sync void */ }));
        },
      };
    },
  };

  const db: DbAPI = {
    /**
     * Returns a Collection proxy backed by a handle-ref. The parent's
     * dispatcher recognises `db.collection` as handle-returning (per
     * `script-runner-host.ts`'s registry) and registers the real
     * Collection in the run's transient handle table; we get back an
     * opaque `HandleRef` and wrap it in a typed proxy.
     */
    collection: async <T extends DbRecord = DbRecord>(
      name: string,
      opts?: Parameters<DbAPI['collection']>[1],
    ): Promise<Collection<T>> => {
      // Detect + strip Zod schema before IPC. A Zod schema is a class
      // instance with method properties (`.parse`, etc.), which Bun's
      // structured-clone serialiser drops — historically surfacing as
      // `DataCloneError: The object can not be cloned.` Capture it in
      // this closure so `buildCollectionProxy` can validate child-side
      // at insert/insertMany/update boundaries; the parent-side
      // canonical receives schemaless opts and skips its own schema
      // validation pass.
      const userSchema = opts?.schema instanceof z.ZodType
        ? (opts.schema as z.ZodType<unknown>)
        : undefined;
      const optsForIpc = userSchema
        ? Object.fromEntries(Object.entries(opts!).filter(([k]) => k !== 'schema'))
        : opts;
      const ref = await dispatch('db.collection', [name, optsForIpc]);
      if (!isHandleRef(ref) || ref.kind !== 'Collection') {
        throw new Error(
          'api.db.collection: expected HandleRef of kind "Collection" from host, got: ' +
          JSON.stringify(ref).slice(0, 200),
        );
      }
      return buildCollectionProxy<T>(ref, userSchema);
    },

    /* Value-returning methods — standard dispatch. */
    list:   (scope) => dispatch('db.list',   scope !== undefined ? [scope] : []) as Promise<string[]>,
    drop:   (name, scope) => dispatch('db.drop',   scope !== undefined ? [name, scope] : [name]) as Promise<void>,
    exists: (name, scope) => dispatch('db.exists', scope !== undefined ? [name, scope] : [name]) as Promise<boolean>,
  };

  // ── llm — Phase 8: generate / generateStructured with AbortSignal support ─

  const llm: LLMAPI = {
    generate: (messages, options) => {
      const { stripped, signal } = stripSignalFromOpts(options);
      return dispatchWithSignal(
        'llm.generate',
        stripped !== undefined ? [messages, stripped] : [messages],
        signal,
      ) as Promise<string>;
    },

    /**
     * Phase 9d.5 — generateStructured with proper Zod handling.
     *
     * Zod schemas can't survive Bun's IPC (class instances lose their
     * prototype). Conversion happens CHILD-side: convert Zod → JSON
     * Schema, send the JSON Schema across IPC. The parent's canonical
     * sees a plain object (not Zod), takes its non-Zod branch, returns
     * the JSON-parsed value. The proxy then applies the user's original
     * Zod `.parse()` to the result for validation.
     *
     * Mirrors canonical's throw-on-validation-fail semantics — the
     * canonical's generateStructured uses `zodSchema.parse()` (throws
     * on failure), and we do the same here. Distinct from
     * generateWithTools below, which silently swallows validation
     * errors and returns the raw-parsed value.
     */
    generateStructured: <T = unknown>(
      messages: Parameters<LLMAPI['generateStructured']>[0],
      schema:   Parameters<LLMAPI['generateStructured']>[1],
      options?: Parameters<LLMAPI['generateStructured']>[2],
    ): Promise<T> => {
      const { stripped, signal } = stripSignalFromOpts(options);
      const { jsonSchema, zodSchema } = convertZodToJsonSchemaIfNeeded(schema);
      if (jsonSchema === null) {
        return Promise.reject(new Error(
          'api.llm.generateStructured: schema must be a Zod schema or a plain JSON Schema object',
        ));
      }
      return dispatchWithSignal(
        'llm.generateStructured',
        stripped !== undefined ? [messages, jsonSchema, stripped] : [messages, jsonSchema],
        signal,
      ).then((parsed) => {
        // If user supplied a Zod schema, validate child-side. Mirrors
        // canonical's `zodSchema.parse(parsed)` behaviour exactly:
        // throws on validation failure (NOT swallowed — distinct from
        // generateWithTools). User code typically wraps this in try/catch
        // or relies on the throw to surface schema mismatches.
        if (zodSchema) {
          return zodSchema.parse(parsed) as T;
        }
        return parsed as T;
      });
    },

    /**
     * Phase 9d.5 — generateWithTools agentic loop.
     *
     * Two forms (mirrors canonical overloads):
     *   - 3-arg: `(messages, tools, options?)` → `Promise<LLMRawResult>`
     *   - 4-arg: `(messages, tools, options, schema)` → `Promise<LLMRawResultStructured<T>>`
     *
     * Schema handling matches `generateStructured` above: child converts
     * Zod → JSON Schema before dispatch, validates the final-step result
     * child-side. Distinct from generateStructured: silently swallows
     * Zod validation errors and returns the raw-parsed value (mirrors
     * canonical's try/catch around `.parse()` in the agentic path).
     *
     * Tool-call results (intermediate steps with `tool_calls` populated)
     * pass through unchanged; only the FINAL step (no `tool_calls`)
     * triggers the parse + validate path. The user is expected to
     * iterate: invoke each tool call, append the result, call
     * `generateWithTools` again until no tool_calls remain.
     */
    generateWithTools: ((
      messages: Parameters<LLMAPI['generateWithTools']>[0],
      tools:    Parameters<LLMAPI['generateWithTools']>[1],
      opts?:    Parameters<LLMAPI['generateWithTools']>[2],
      schema?:  unknown,
    ): Promise<unknown> => {
      const { stripped, signal } = stripSignalFromOpts(opts);

      // 3-arg form: no schema. Plain passthrough with abort handling.
      if (schema === undefined) {
        return dispatchWithSignal(
          'llm.generateWithTools',
          stripped !== undefined ? [messages, tools, stripped] : [messages, tools],
          signal,
        );
      }

      // 4-arg form: schema present. Convert Zod → JSON Schema if needed.
      const { jsonSchema, zodSchema } = convertZodToJsonSchemaIfNeeded(schema);
      if (jsonSchema === null) {
        return Promise.reject(new Error(
          'api.llm.generateWithTools: schema must be a Zod schema or a plain JSON Schema object',
        ));
      }
      // Always pass a 3rd-position options arg (even {}) so the canonical
      // receives schema in the 4th position correctly.
      return dispatchWithSignal(
        'llm.generateWithTools',
        [messages, tools, stripped ?? {}, jsonSchema],
        signal,
      ).then((raw) => {
        // Canonical's 4-arg path returns:
        //   - intermediate step: { content: <string>, tool_calls: [...] }
        //   - final step:        { content: <parsed JSON>, tool_calls: undefined }
        // Validate Zod ONLY on the final step.
        const result = raw as { content: unknown; tool_calls?: unknown };
        if (zodSchema && (result.tool_calls === undefined || (Array.isArray(result.tool_calls) && result.tool_calls.length === 0))) {
          try {
            return { ...result, content: zodSchema.parse(result.content) };
          } catch {
            // Mirror canonical: swallow validation errors, return raw-parsed value.
            return result;
          }
        }
        return result;
      });
    }) as LLMAPI['generateWithTools'],

    /**
     * Phase 9d.5 — dryRun (prompt-assembly introspection).
     *
     * Plain async passthrough — no special args. Parent's canonical does
     * all the heavy lifting (chat lookup, prompt assembly, token counting,
     * world-info activation). DryRunResult shape is JSON-serializable so
     * survives IPC unchanged.
     */
    dryRun: mkAsync<LLMAPI['dryRun']>(dispatch, 'llm.dryRun'),
  };

  // ─── Phase 9d.1: value-returning passthrough namespaces ────────────────────
  //
  // The pattern below is uniform across most namespaces:
  //   - Async value-returning methods → `mkAsync<T>(dispatch, 'ns.method')`
  //   - Sync void w/ parent-state mutation → `mkSyncVoidFireForget<T>(...)`
  //   - Sync return → either `notYetImplemented` (deferred) or local closure
  //   - Function-handler registrations → `notYetImplemented` (Phase 9d.3)
  //
  // Drift safety: each namespace is annotated with its canonical interface
  // (e.g. `: ChatAPI`), so any mismatch between what we vend and what the
  // canonical surface declares becomes a TS error at the assignment site.

  // ── chat — message ops + injection + content processors ─────────────────
  const chat: ChatAPI = {
    // Async value-returning passthrough
    getMessages:        mkAsync<ChatAPI['getMessages']>(dispatch,        'chat.getMessages'),
    sendMessage:        mkAsync<ChatAPI['sendMessage']>(dispatch,        'chat.sendMessage'),
    editMessage:        mkAsync<ChatAPI['editMessage']>(dispatch,        'chat.editMessage'),
    deleteMessage:      mkAsync<ChatAPI['deleteMessage']>(dispatch,      'chat.deleteMessage'),
    getMetadata:        mkAsync<ChatAPI['getMetadata']>(dispatch,        'chat.getMetadata'),
    setMetadata:        mkAsync<ChatAPI['setMetadata']>(dispatch,        'chat.setMetadata'),
    setMessageHidden:   mkAsync<ChatAPI['setMessageHidden']>(dispatch,   'chat.setMessageHidden'),
    setMessagesHidden:  mkAsync<ChatAPI['setMessagesHidden']>(dispatch,  'chat.setMessagesHidden'),
    isMessageHidden:    mkAsync<ChatAPI['isMessageHidden']>(dispatch,    'chat.isMessageHidden'),

    // Sync local — read from the run-start activeContext snapshot.
    // For long-lived registered handlers (Phase 9d.3) the live context
    // gets delivered with each fire, not snapshotted here.
    getChatId: () => ctx.chatIdAtStart,

    // Sync void fire-and-forget — parent state mutation, no return value.
    // Phase 9d.X — also update local snapshot for list() consistency.
    inject: (id, content, options) => {
      trackChain(dispatch('chat.inject', [id, content, options]).catch(() => { /* canonical: sync void */ }));
      // Update local snapshot. Canonical: `addInjection` REPLACES on
      // duplicate id (within the same store). Mirror that.
      const existingIdx = localChatInjections.findIndex((i) => i.id === id);
      const entry: InjectionInfo = {
        id,
        content,
        mode:      options?.mode      ?? 'intercept',
        role:      options?.role      ?? 'system',
        depth:     options?.depth     ?? 0,
        ephemeral: options?.ephemeral ?? false,
        scriptId:  ctx.scriptId,
      };
      if (existingIdx >= 0) localChatInjections[existingIdx] = entry;
      else                   localChatInjections.push(entry);
    },

    removeInjection: (id) => {
      trackChain(dispatch('chat.removeInjection', [id]).catch(() => { /* canonical: sync void */ }));
      const idx = localChatInjections.findIndex((i) => i.id === id);
      if (idx >= 0) localChatInjections.splice(idx, 1);
    },

    clearInjections: () => {
      trackChain(dispatch('chat.clearInjections', []).catch(() => { /* canonical: sync void */ }));
      // Filter out injections owned by this script.
      for (let i = localChatInjections.length - 1; i >= 0; i--) {
        if (localChatInjections[i]?.scriptId === ctx.scriptId) {
          localChatInjections.splice(i, 1);
        }
      }
    },

    clearAllInjections: () => {
      trackChain(dispatch('chat.clearAllInjections', []).catch(() => { /* canonical: sync void */ }));
      // Wipe the whole local snapshot — the canonical clears all injections
      // across all scripts. (We can't see other-script entries beyond
      // dispatch-time snapshot, but those are all that's in our local
      // array anyway.)
      localChatInjections.length = 0;
    },

    /**
     * Phase 9d.X — sync array read from local snapshot. Defensive shallow
     * copy of each entry.
     */
    getInjections:         () => localChatInjections.map((i) => ({ ...i })),
    listContentProcessors: () => localChatContentProcessors.map((p) => ({ ...p })),

    /**
     * Phase 9d.3.d — Same shape as `macros.registerInterceptor`: returns
     * a sync `{id, remove}` handle (per `MessageContentProcessorHandle`).
     * Note: `MessageContentProcessorOptions` doesn't currently expose a
     * user-supplied `id` field (per the canonical interface), so we
     * always auto-generate. If a future canonical change adds `id`, the
     * `userSuppliedId` branch below picks it up automatically.
     */
    registerContentProcessor: (handler, options) => {
      // `options.id` isn't part of the canonical MessageContentProcessorOptions
      // interface today, but we read it defensively for forward-compat
      // (parent-side `addProcessorEntry` accepts options.id when present).
      const userSuppliedId = (options as { id?: string } | undefined)?.id;
      const handlerId = userSuppliedId ?? generateHandlerId('contentProcessor');

      ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
        // IPC args shape: [ctx: MessageContentProcessorContext]. Handler
        // returns void | { content?, extra? } | Promise<…>.
        return handler(handlerArgs[0] as Parameters<typeof handler>[0]);
      });

      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'contentProcessor',
        runId:      runIdContext.getStore() ?? ctx.runId,
        scriptId:   ctx.scriptId,
        handlerId,
        options:    options !== undefined
          ? { ...options, id: handlerId } as typeof options & { id: string }
          : { id: handlerId } as typeof options & { id: string },
        hasHandler: true,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        ctx.unregisterHandlerClosure(handlerId);
        throw err instanceof Error ? err : new Error(String(err));
      }

      // Phase 9d.X — update local snapshot.
      // Options use singular `origin` (single value | array); the
      // RegisteredXxxInfo's `origins` field is always normalized to an
      // array (or null) — mirrors the canonical's option-to-info shape
      // mapping for content processors.
      const originOption = options?.origin;
      const normalizedOrigins = originOption === undefined
        ? null
        : Array.isArray(originOption)
          ? originOption
          : [originOption];
      const processorEntry: RegisteredMessageContentProcessorInfo = {
        scriptId:   ctx.scriptId,
        scriptName: ctx.scriptName,
        id:         handlerId,
        priority:   options?.priority ?? 100,
        origins:    normalizedOrigins,
        timeoutMs:  options?.timeoutMs ?? 2_000,
      };
      const existingIdx = localChatContentProcessors.findIndex(
        (p) => p.scriptId === ctx.scriptId && p.id === handlerId,
      );
      if (existingIdx >= 0) localChatContentProcessors[existingIdx] = processorEntry;
      else                   localChatContentProcessors.push(processorEntry);

      return {
        id: handlerId,
        remove: () => {
          ctx.unregisterHandlerClosure(handlerId);
          const unsubMsg: UnregisterHandler = {
            type:       'unregister-handler',
            kind:       'contentProcessor',
            scriptId:   ctx.scriptId,
            handlerId,
          };
          try { ctx.send(unsubMsg); } catch { /* sync void: no throw */ }
          // Phase 9d.X — update local snapshot.
          const idx = localChatContentProcessors.findIndex(
            (p) => p.scriptId === ctx.scriptId && p.id === handlerId,
          );
          if (idx >= 0) localChatContentProcessors.splice(idx, 1);
        },
      };
    },
  };

  // ── chats (chat-session CRUD) ─────────────────────────────────────────────
  const chats: ChatsAPI = {
    list:        mkAsync<ChatsAPI['list']>(dispatch,        'chats.list'),
    get:         mkAsync<ChatsAPI['get']>(dispatch,         'chats.get'),
    getActive:   mkAsync<ChatsAPI['getActive']>(dispatch,   'chats.getActive'),
    update:      mkAsync<ChatsAPI['update']>(dispatch,      'chats.update'),
    delete:      mkAsync<ChatsAPI['delete']>(dispatch,      'chats.delete'),
    getMemories: mkAsync<ChatsAPI['getMemories']>(dispatch, 'chats.getMemories'),
  };

  // ── characters ────────────────────────────────────────────────────────────
  const characters: CharactersAPI = {
    list:      mkAsync<CharactersAPI['list']>(dispatch,      'characters.list'),
    get:       mkAsync<CharactersAPI['get']>(dispatch,       'characters.get'),
    getByName: mkAsync<CharactersAPI['getByName']>(dispatch, 'characters.getByName'),
    create:    mkAsync<CharactersAPI['create']>(dispatch,    'characters.create'),
    setAvatar: mkAsync<CharactersAPI['setAvatar']>(dispatch, 'characters.setAvatar'),
    update:    mkAsync<CharactersAPI['update']>(dispatch,    'characters.update'),
    delete:    mkAsync<CharactersAPI['delete']>(dispatch,    'characters.delete'),
  };

  // ── worldInfo (world books + entries) ─────────────────────────────────────
  const worldInfo: WorldInfoAPI = {
    list:               mkAsync<WorldInfoAPI['list']>(dispatch,               'worldInfo.list'),
    get:                mkAsync<WorldInfoAPI['get']>(dispatch,                'worldInfo.get'),
    create:             mkAsync<WorldInfoAPI['create']>(dispatch,             'worldInfo.create'),
    update:             mkAsync<WorldInfoAPI['update']>(dispatch,             'worldInfo.update'),
    delete:             mkAsync<WorldInfoAPI['delete']>(dispatch,             'worldInfo.delete'),
    getCapturedActive:  mkAsync<WorldInfoAPI['getCapturedActive']>(dispatch,  'worldInfo.getCapturedActive'),
    entries: {
      list:                       mkAsync<WorldInfoAPI['entries']['list']>(dispatch,                       'worldInfo.entries.list'),
      get:                        mkAsync<WorldInfoAPI['entries']['get']>(dispatch,                        'worldInfo.entries.get'),
      create:                     mkAsync<WorldInfoAPI['entries']['create']>(dispatch,                     'worldInfo.entries.create'),
      update:                     mkAsync<WorldInfoAPI['entries']['update']>(dispatch,                     'worldInfo.entries.update'),
      delete:                     mkAsync<WorldInfoAPI['entries']['delete']>(dispatch,                     'worldInfo.entries.delete'),
      listByAutomationIdPrefix:   mkAsync<WorldInfoAPI['entries']['listByAutomationIdPrefix']>(dispatch,   'worldInfo.entries.listByAutomationIdPrefix'),
    },
  };

  // ── databanks (vectorised document collections + their documents) ────────
  //
  // All methods proxy 1:1 to the parent's `api.databanks.*` surface via the
  // generic dotted-path dispatcher in `script-runner-host.ts:resolveMethodPath`.
  // The Uint8Array body of `documents.create({ data, … })` rides Bun's IPC
  // structured-clone serialiser intact (binary types are cloneable, unlike
  // functions). Strings are accepted at the parent boundary too — the parent
  // builder UTF-8 encodes them before forwarding to Spindle.
  const databanks: DatabanksAPI = {
    list:        mkAsync<DatabanksAPI['list']>(dispatch,        'databanks.list'),
    get:         mkAsync<DatabanksAPI['get']>(dispatch,         'databanks.get'),
    findByName:  mkAsync<DatabanksAPI['findByName']>(dispatch,  'databanks.findByName'),
    create:      mkAsync<DatabanksAPI['create']>(dispatch,      'databanks.create'),
    update:      mkAsync<DatabanksAPI['update']>(dispatch,      'databanks.update'),
    delete:      mkAsync<DatabanksAPI['delete']>(dispatch,      'databanks.delete'),
    documents: {
      list:            mkAsync<DatabanksAPI['documents']['list']>(dispatch,            'databanks.documents.list'),
      get:             mkAsync<DatabanksAPI['documents']['get']>(dispatch,             'databanks.documents.get'),
      findByName:      mkAsync<DatabanksAPI['documents']['findByName']>(dispatch,      'databanks.documents.findByName'),
      create:          mkAsync<DatabanksAPI['documents']['create']>(dispatch,          'databanks.documents.create'),
      update:          mkAsync<DatabanksAPI['documents']['update']>(dispatch,          'databanks.documents.update'),
      delete:          mkAsync<DatabanksAPI['documents']['delete']>(dispatch,          'databanks.documents.delete'),
      getContent:      mkAsync<DatabanksAPI['documents']['getContent']>(dispatch,      'databanks.documents.getContent'),
      reprocess:       mkAsync<DatabanksAPI['documents']['reprocess']>(dispatch,       'databanks.documents.reprocess'),
      waitUntilReady:  mkAsync<DatabanksAPI['documents']['waitUntilReady']>(dispatch,  'databanks.documents.waitUntilReady'),
    },
  };

  // ── personas ──────────────────────────────────────────────────────────────
  const personas: PersonasAPI = {
    list:           mkAsync<PersonasAPI['list']>(dispatch,           'personas.list'),
    get:            mkAsync<PersonasAPI['get']>(dispatch,            'personas.get'),
    getDefault:     mkAsync<PersonasAPI['getDefault']>(dispatch,     'personas.getDefault'),
    getActive:      mkAsync<PersonasAPI['getActive']>(dispatch,      'personas.getActive'),
    create:         mkAsync<PersonasAPI['create']>(dispatch,         'personas.create'),
    update:         mkAsync<PersonasAPI['update']>(dispatch,         'personas.update'),
    delete:         mkAsync<PersonasAPI['delete']>(dispatch,         'personas.delete'),
    switchActive:   mkAsync<PersonasAPI['switchActive']>(dispatch,   'personas.switchActive'),
    getWorldBook:   mkAsync<PersonasAPI['getWorldBook']>(dispatch,   'personas.getWorldBook'),
  };

  // ── council (read-only) ───────────────────────────────────────────────────
  const council: CouncilAPI = {
    getSettings:             mkAsync<CouncilAPI['getSettings']>(dispatch,             'council.getSettings'),
    getMembers:              mkAsync<CouncilAPI['getMembers']>(dispatch,              'council.getMembers'),
    getAvailableLumiaItems:  mkAsync<CouncilAPI['getAvailableLumiaItems']>(dispatch,  'council.getAvailableLumiaItems'),
  };

  // ── files (three storage tiers) ───────────────────────────────────────────
  const files: FilesAPI = {
    userRead:    mkAsync<FilesAPI['userRead']>(dispatch,    'files.userRead'),
    userWrite:   mkAsync<FilesAPI['userWrite']>(dispatch,   'files.userWrite'),
    userDelete:  mkAsync<FilesAPI['userDelete']>(dispatch,  'files.userDelete'),
    userExists:  mkAsync<FilesAPI['userExists']>(dispatch,  'files.userExists'),
    userList:    mkAsync<FilesAPI['userList']>(dispatch,    'files.userList'),
    userMkdir:   mkAsync<FilesAPI['userMkdir']>(dispatch,   'files.userMkdir'),

    sharedRead:    mkAsync<FilesAPI['sharedRead']>(dispatch,    'files.sharedRead'),
    sharedWrite:   mkAsync<FilesAPI['sharedWrite']>(dispatch,   'files.sharedWrite'),
    sharedDelete:  mkAsync<FilesAPI['sharedDelete']>(dispatch,  'files.sharedDelete'),
    sharedExists:  mkAsync<FilesAPI['sharedExists']>(dispatch,  'files.sharedExists'),
    sharedList:    mkAsync<FilesAPI['sharedList']>(dispatch,    'files.sharedList'),
    sharedStat:    mkAsync<FilesAPI['sharedStat']>(dispatch,    'files.sharedStat'),
    sharedMkdir:   mkAsync<FilesAPI['sharedMkdir']>(dispatch,   'files.sharedMkdir'),
    sharedMove:    mkAsync<FilesAPI['sharedMove']>(dispatch,    'files.sharedMove'),

    tempRead:          mkAsync<FilesAPI['tempRead']>(dispatch,          'files.tempRead'),
    tempWrite:         mkAsync<FilesAPI['tempWrite']>(dispatch,         'files.tempWrite'),
    tempDelete:        mkAsync<FilesAPI['tempDelete']>(dispatch,        'files.tempDelete'),
    tempList:          mkAsync<FilesAPI['tempList']>(dispatch,          'files.tempList'),
    tempStat:          mkAsync<FilesAPI['tempStat']>(dispatch,          'files.tempStat'),
    tempClearExpired:  mkAsync<FilesAPI['tempClearExpired']>(dispatch,  'files.tempClearExpired'),
  };

  // ── enclave (encrypted secrets) ───────────────────────────────────────────
  const enclave: EnclaveAPI = {
    put:    mkAsync<EnclaveAPI['put']>(dispatch,    'enclave.put'),
    get:    mkAsync<EnclaveAPI['get']>(dispatch,    'enclave.get'),
    delete: mkAsync<EnclaveAPI['delete']>(dispatch, 'enclave.delete'),
    has:    mkAsync<EnclaveAPI['has']>(dispatch,    'enclave.has'),
    list:   mkAsync<EnclaveAPI['list']>(dispatch,   'enclave.list'),
  };

  // ── tokens (server-side counting) ─────────────────────────────────────────
  const tokens: TokensAPI = {
    countText:     mkAsync<TokensAPI['countText']>(dispatch,     'tokens.countText'),
    countMessages: mkAsync<TokensAPI['countMessages']>(dispatch, 'tokens.countMessages'),
    countChat:     mkAsync<TokensAPI['countChat']>(dispatch,     'tokens.countChat'),
  };

  // ── json (Phase 9d.2 — pure-local; jsonquery bundled into the child) ──────
  // The parent's `buildJSONAPI()` factory has no spindle dependencies — only
  // `jsonquery` from npm — so we can call it directly here. Same exact
  // implementation runs in both the parent (in-process executor) and the
  // child (this proxy); behaviour is bit-identical.
  const json: JSONAPI = buildJSONAPI();

  // ── rpc (v0.26.0 — cross-extension shared RPC pool) ──────────────────────
  //
  // `sync` / `read` / `unregister` are plain async dispatch — the canonical
  // parent-side `api.rpc.*` does the slug derivation + ownership tracking.
  //
  // `handle()` mirrors the macro/tool register-via-handler-IPC pattern but
  // routes through `api-request` (not `register-handler`) because the user
  // expects the resolved fully-qualified endpoint string back. Flow:
  //   1. Generate per-script handlerId
  //   2. Stash a wrapper around the user's closure in the child registry.
  //      Wrapper unpacks IPC args (`[ctx]`) and forwards to user fn.
  //   3. Dispatch `'rpc.handle'` with `[channel, handlerId, options]`.
  //      Parent's host-dispatcher special-cases this method, builds a
  //      parent-side wrapper that fires `RunHandlerRequest` per
  //      foreign-extension read, calls canonical `api.rpc.handle`, and
  //      returns the resolved endpoint string.
  //
  // Local channel→handlerId tracking lets `unregister(channel)` drop the
  // matching child-side closure (and `handle()` replacing an existing
  // channel drops the old one). Without this the closure would persist
  // until script-unregister and slowly accumulate across long sessions.
  const localRpcHandlers = new Map<string, string>();
  const rpcLocalKey = (channel: string, asOverride: string | undefined): string =>
    `${asOverride ?? ''}::${channel}`;

  const rpc: RpcAPI = {
    sync: async (channel, value, options) => {
      // sync() replaces any prior handle() registration on the same channel —
      // mirror that child-side by dropping any tracked handlerId.
      const key = rpcLocalKey(channel, options?.as);
      const priorHandlerId = localRpcHandlers.get(key);
      if (priorHandlerId !== undefined) {
        ctx.unregisterHandlerClosure(priorHandlerId);
        localRpcHandlers.delete(key);
      }
      return dispatch('rpc.sync', [channel, value, options]) as Promise<string>;
    },

    handle: async (channel, handler, options) => {
      const key = rpcLocalKey(channel, options?.as);
      // Drop any previously-stashed closure for this channel before
      // installing the new one (replace-by-channel semantics).
      const priorHandlerId = localRpcHandlers.get(key);
      if (priorHandlerId !== undefined) {
        ctx.unregisterHandlerClosure(priorHandlerId);
        localRpcHandlers.delete(key);
      }
      const handlerId = generateHandlerId('rpc');
      ctx.registerHandlerClosure(handlerId, async (...args: unknown[]) => {
        // IPC args shape: [ctx: RpcRequestContext]
        return handler(args[0] as RpcRequestContext);
      });
      try {
        const fullEndpoint = await dispatch('rpc.handle', [channel, handlerId, options]) as string;
        localRpcHandlers.set(key, handlerId);
        return fullEndpoint;
      } catch (err) {
        // Parent rejected (invalid channel, slug derivation failed,
        // cross-script ownership conflict). Drop the closure we stashed
        // so it doesn't leak.
        ctx.unregisterHandlerClosure(handlerId);
        throw err instanceof Error ? err : new Error(String(err));
      }
    },

    read: mkAsync<RpcAPI['read']>(dispatch, 'rpc.read'),

    unregister: async (channel, options) => {
      const key = rpcLocalKey(channel, options?.as);
      const priorHandlerId = localRpcHandlers.get(key);
      if (priorHandlerId !== undefined) {
        ctx.unregisterHandlerClosure(priorHandlerId);
        localRpcHandlers.delete(key);
      }
      await dispatch('rpc.unregister', [channel, options]);
    },
  };

  // ── events (track / query / replay; on lands in 9d.3) ────────────────────
  const events: EventsAPI = {
    track:           mkAsync<EventsAPI['track']>(dispatch,           'events.track'),
    query:           mkAsync<EventsAPI['query']>(dispatch,           'events.query'),
    replay:          mkAsync<EventsAPI['replay']>(dispatch,          'events.replay'),
    getLatestState:  mkAsync<EventsAPI['getLatestState']>(dispatch,  'events.getLatestState'),
  };

  // ── commands (Phase 9d.3.c wires onInvoked via handler IPC) ────────────
  //
  // `register` / `unregister` carry no closures — sync-void passthroughs.
  // `onInvoked(handler)` is the function-handler path. Same shape as
  // `macros.register` / `tools.register`, except:
  //   - No `name`, no `def`. The script can have at most ONE active
  //     `onInvoked` handler at a time (canonical auto-unsubs the prior
  //     one — see `clearCommandHandlerByScriptId` in `api/commands.ts`).
  //   - Returns a sync unsubscribe function from user code's perspective.
  //     The unsub sends `unregister-handler` IPC (handlerId-based, since
  //     there's no name to look up by).
  //   - Handler signature: `(commandId: string, ctx: CommandContext) => void | Promise<void>`.
  const commands: CommandsAPI = {
    register:    mkSyncVoidFireForget<CommandsAPI['register']>(dispatch,   'commands.register',   trackChain),
    unregister:  mkSyncVoidFireForget<CommandsAPI['unregister']>(dispatch, 'commands.unregister', trackChain),

    onInvoked: (handler) => {
      const handlerId = generateHandlerId('commandsOnInvoked');
      ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
        // IPC args shape: [commandId, ctx]
        return handler(
          handlerArgs[0] as Parameters<typeof handler>[0],
          handlerArgs[1] as Parameters<typeof handler>[1],
        );
      });
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'commandsOnInvoked',
        runId:      runIdContext.getStore() ?? ctx.runId,
        scriptId:   ctx.scriptId,
        handlerId,
        hasHandler: true,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        ctx.unregisterHandlerClosure(handlerId);
        throw err instanceof Error ? err : new Error(String(err));
      }

      // Return the canonical-shaped sync unsubscribe function. The
      // user calls this directly; we drop the local closure + send the
      // `unregister-handler` IPC. Idempotent: repeated calls are safe
      // (registry .delete is idempotent, parent treats unknown
      // handlerId on unregister as no-op).
      return () => {
        ctx.unregisterHandlerClosure(handlerId);
        const unsubMsg: UnregisterHandler = {
          type:       'unregister-handler',
          kind:       'commandsOnInvoked',
          scriptId:   ctx.scriptId,
          handlerId,
        };
        try { ctx.send(unsubMsg); } catch { /* sync void: no throw */ }
      };
    },
  };

  // ── tools — Phase 9d.3.b wires register/unregister via handler IPC ──────
  //
  // Same pattern as `macros.register` (9d.3.a) but for `kind: 'tool'`:
  //   1. Generate a unique handlerId
  //   2. Stash a wrapper around the user's handler in the child registry.
  //      The wrapper unpacks the IPC args (`[toolArgs, toolCtx?]`) and
  //      injects `apiForLibraries` as positional arg 1, matching the
  //      canonical `ToolHandler` signature `(args, api, ctx?) => string`.
  //   3. Send `register-handler` IPC. Parent builds a wrapper that fires
  //      the host's tool-invocation path through `sendRunHandlerRequest`.
  //
  // `tools.invoke` stays as a plain dispatch passthrough — it just calls
  // the parent's `api.tools.invoke(name, args)` which finds the tool in
  // the tool-store and invokes the parent-side wrapper, which sends back
  // a `RunHandlerRequest` to fire the user's closure.
  //
  // `tools.list` stays deferred — sync-array-read needs a parent→child
  // snapshot push mechanism (Phase 9d.X).
  const tools: ToolsAPI = {
    register: (name, def, handler) => {
      const handlerId = generateHandlerId('tool');
      ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
        // IPC args shape: [args: ToolInvocationArgs, ctx?: ToolInvocationContext]
        // Inject `apiForLibraries` as the canonical second positional
        // arg per the ToolHandler signature. User closures that close
        // over `api` from the script body see the same proxy api, so
        // either path (closure-captured `api` or injected `injectedApi`)
        // resolves to the same live object.
        return handler(
          handlerArgs[0] as Parameters<typeof handler>[0],
          apiForLibraries,
          handlerArgs[1] as Parameters<typeof handler>[2],
        );
      });
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'tool',
        runId:      runIdContext.getStore() ?? ctx.runId,
        scriptId:   ctx.scriptId,
        handlerId,
        name,
        def,
        hasHandler: true,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        ctx.unregisterHandlerClosure(handlerId);
        throw err instanceof Error ? err : new Error(String(err));
      }
      // Phase 9d.X — update local snapshot. Replace any existing entry
      // for the same (scriptId, name) — matches canonical's "register
      // replaces existing" semantics in tool-store.
      const existingIdx = localTools.findIndex(
        (t) => t.scriptId === ctx.scriptId && t.name === name,
      );
      const entry: RegisteredToolInfo = {
        name,
        display_name:     def.display_name,
        description:      def.description,
        parameters:       def.parameters,
        council_eligible: def.council_eligible ?? false,
        scriptId:         ctx.scriptId,
        scriptName:       ctx.scriptName,
      };
      if (existingIdx >= 0) localTools[existingIdx] = entry;
      else                   localTools.push(entry);
    },

    unregister: (name) => {
      const msg: UnregisterHandler = {
        type:     'unregister-handler',
        kind:     'tool',
        scriptId: ctx.scriptId,
        name,
      };
      try { ctx.send(msg); } catch { /* canonical: sync void */ }
      // Phase 9d.X — update local snapshot.
      const idx = localTools.findIndex(
        (t) => t.scriptId === ctx.scriptId && t.name === name,
      );
      if (idx >= 0) localTools.splice(idx, 1);
    },

    /**
     * Phase 9d.X — sync array read from local snapshot. Returns a fresh
     * array of fresh entry objects to match the canonical's
     * `listAll().map(...)` defensive-copy semantics.
     */
    list: () => localTools.map((t) => ({ ...t })),

    invoke: mkAsync<ToolsAPI['invoke']>(dispatch, 'tools.invoke'),
  };

  // ── macros — Phase 9d.3.a wires register/unregister via handler IPC ──────
  //
  // Push-mode (`api.macros.register(name, def)` — no handler) goes through
  // a regular `dispatch` passthrough — the parent's macro store can register
  // a push-mode macro without any closure.
  //
  // Pull-mode (`api.macros.register(name, def, handler)`) needs the handler
  // closure to live on the child. The proxy:
  //   1. Generates a unique handlerId
  //   2. Stashes the handler in the child's per-script handler registry
  //      (lifetime: until script-unregister)
  //   3. Sends a `register-handler` IPC to the parent. The parent builds a
  //      wrapper closure that, when fired by Lumiverse's macro engine,
  //      sends `RunHandlerRequest` back and awaits `HandlerResult`.
  //
  // The IPC fire is sync from the user-script's perspective — `register`
  // is canonically void. Failures (reserved name, already-owned-by-other-
  // script) surface on the parent; if they need to throw to the user we
  // could add a sync ack via dispatch, but the canonical impl already
  // throws SYNCHRONOUSLY in `addMacro` — which we can't replicate without
  // a roundtrip. For 9d.3.a we accept that name-collision errors arrive
  // out-of-band as console errors via the parent's onConsole route.
  let nextHandlerSeq = 1;
  const generateHandlerId = (kind: string): string =>
    `${ctx.scriptId}-${kind}-${nextHandlerSeq++}`;

  const macros: MacrosAPI = {
    register: (name, def, handler) => {
      if (handler === undefined) {
        // Push-mode: no closure to register. Send through the regular
        // dispatch passthrough — the parent's macros.register handles
        // this case (handler param defaults to empty-string for push).
        trackChain(dispatch('macros.register', [name, def]).catch(() => { /* canonical: sync void */ }));
      } else {
        // Pull-mode: stash handler closure + send register-handler IPC.
        const handlerId = generateHandlerId('macro');
        ctx.registerHandlerClosure(handlerId, async (...args: unknown[]) => {
          // First arg is MacroContext; handler signature is `(ctx) => string | Promise<string>`.
          return handler(args[0] as Parameters<typeof handler>[0]);
        });
        const msg: RegisterHandler = {
          type:       'register-handler',
          kind:       'macro',
          runId:      runIdContext.getStore() ?? ctx.runId,
          scriptId:   ctx.scriptId,
          handlerId,
          name,
          def,
          hasHandler: true,
        };
        try {
          ctx.send(msg);
        } catch (err) {
          // Channel write failed — undo the local registration so we don't
          // leak a handler the parent never knew about.
          ctx.unregisterHandlerClosure(handlerId);
          throw err instanceof Error ? err : new Error(String(err));
        }
      }
      // Phase 9d.X — update local snapshot. Replace existing entry
      // for `(scriptId, name)` — canonical's macro-store re-register
      // semantics overwrite in place.
      const existingIdx = localMacros.findIndex(
        (m) => m.scriptId === ctx.scriptId && m.name === name,
      );
      const entry: RegisteredMacroInfo = {
        name,
        description: def.description,
        // Canonical defaults `category` to `extension:lumiscript:user`
        // when omitted (per MacroDefinition JSDoc). Mirror that.
        category:    def.category ?? 'extension:lumiscript:user',
        ...(def.returnType !== undefined ? { returnType: def.returnType } : {}),
        ...(def.args       !== undefined ? { args:       def.args       } : {}),
        mode:        handler ? 'pull' : 'push',
        scriptId:    ctx.scriptId,
        scriptName:  ctx.scriptName,
      };
      if (existingIdx >= 0) localMacros[existingIdx] = entry;
      else                   localMacros.push(entry);
    },

    updateValue: (name, value) => {
      trackChain(dispatch('macros.updateValue', [name, value]).catch(() => { /* canonical: sync void */ }));
      // Phase 9d.X — update local snapshot's lastValue for this push-mode
      // macro. Canonical: only meaningful for push-mode, but we update
      // the cell regardless — list() returns it on inspection.
      const entry = localMacros.find(
        (m) => m.scriptId === ctx.scriptId && m.name === name,
      );
      if (entry) entry.lastValue = String(value);
    },

    unregister: (name) => {
      // Send name-based unregister IPC. Parent looks up the macro entry
      // by `(scriptId, name)`, drops it, also drops the corresponding
      // handlerId from the parent's handler-id table, signals the child
      // to drop the closure too.
      const msg: UnregisterHandler = {
        type:     'unregister-handler',
        kind:     'macro',
        scriptId: ctx.scriptId,
        name,
      };
      try { ctx.send(msg); } catch { /* canonical: sync void */ }
      // Phase 9d.X — update local snapshot.
      const idx = localMacros.findIndex(
        (m) => m.scriptId === ctx.scriptId && m.name === name,
      );
      if (idx >= 0) localMacros.splice(idx, 1);
    },

    /**
     * Phase 9d.X — sync array read from local snapshot. Defensive shallow
     * copy of each entry (matches canonical's `listAll().map(...)`).
     */
    list: () => localMacros.map((m) => ({ ...m })),

    /**
     * Phase 9d.3.d — Handle-returning function-handler registration.
     *
     * Same shape as macros.register but returns a sync `{id, remove}`
     * handle (per `MacroInterceptorHandle`). The id is generated child-side
     * and forwarded via `options.id` so the parent's
     * `addInterceptorEntry(scriptId, scriptName, handler, options)` uses
     * the SAME id when storing under `compositeKey(scriptId, id)` — the
     * handle's `.id` therefore matches what `removeInterceptorEntry`
     * expects when `handle.remove()` later fires.
     *
     * If the user supplied `options.id`, we preserve it (canonical behavior).
     * Otherwise we generate a unique id via the standard handlerId pattern.
     */
    registerInterceptor: (handler, options) => {
      const userSuppliedId = options?.id;
      const handlerId = userSuppliedId ?? generateHandlerId('macroInterceptor');

      ctx.registerHandlerClosure(handlerId, async (...handlerArgs: unknown[]) => {
        // IPC args shape: [ctx: MacroInterceptorCtx]. Handler returns
        // string | void | Promise<string | void>.
        return handler(handlerArgs[0] as Parameters<typeof handler>[0]);
      });

      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'macroInterceptor',
        runId:      runIdContext.getStore() ?? ctx.runId,
        scriptId:   ctx.scriptId,
        handlerId,
        // Forward the full options bag to the parent. We override
        // `options.id` to ensure the canonical entry uses our handlerId.
        options:    { ...options, id: handlerId },
        hasHandler: true,
      };
      try {
        ctx.send(msg);
      } catch (err) {
        ctx.unregisterHandlerClosure(handlerId);
        throw err instanceof Error ? err : new Error(String(err));
      }

      // Phase 9d.X — update local snapshot.
      // Options use singular `phase` (single value | array); the
      // RegisteredXxxInfo's `phases` field is always normalized to an
      // array (or null). Same for matchTemplate's RegExp normalization.
      const phaseOption = options?.phase;
      const normalizedPhases = phaseOption === undefined
        ? null
        : Array.isArray(phaseOption)
          ? phaseOption
          : [phaseOption];
      const matchTemplate = options?.matchTemplate ?? null;
      const interceptorEntry: RegisteredMacroInterceptorInfo = {
        scriptId:    ctx.scriptId,
        scriptName:  ctx.scriptName,
        id:          handlerId,
        priority:    options?.priority ?? 100,
        phases:      normalizedPhases,
        // Canonical's matchTemplate: RegExp → String(regexp); string-array
        // → preserved as array; undefined → null. Plain string → wrapped
        // as 1-elt array (per the canonical's serialisation).
        matchTemplate: matchTemplate instanceof RegExp
          ? String(matchTemplate)
          : Array.isArray(matchTemplate)
            ? matchTemplate
            : typeof matchTemplate === 'string'
              ? [matchTemplate]
              : null,
        timeoutMs:   options?.timeoutMs ?? 2_000,
      };
      // Canonical's macro-interceptor-registry replaces on duplicate id.
      // Mirror that.
      const existingIdx = localMacroInterceptors.findIndex(
        (i) => i.scriptId === ctx.scriptId && i.id === handlerId,
      );
      if (existingIdx >= 0) localMacroInterceptors[existingIdx] = interceptorEntry;
      else                   localMacroInterceptors.push(interceptorEntry);

      return {
        id: handlerId,
        remove: () => {
          ctx.unregisterHandlerClosure(handlerId);
          const unsubMsg: UnregisterHandler = {
            type:       'unregister-handler',
            kind:       'macroInterceptor',
            scriptId:   ctx.scriptId,
            handlerId,
          };
          try { ctx.send(unsubMsg); } catch { /* sync void: no throw */ }
          // Phase 9d.X — update local snapshot.
          const idx = localMacroInterceptors.findIndex(
            (i) => i.scriptId === ctx.scriptId && i.id === handlerId,
          );
          if (idx >= 0) localMacroInterceptors.splice(idx, 1);
        },
      };
    },

    /**
     * Phase 9d.X — sync array read from local snapshot. Defensive shallow
     * copy of each entry. (matchTemplate is already a flat type — string,
     * array, or null — all primitives or arrays of primitives, so a
     * shallow spread is sufficient.)
     */
    listInterceptors: () => localMacroInterceptors.map((i) => ({ ...i })),
  };

  // ── script namespace (Phase 7 + 9e: full script.require) ────────────────
  //
  // - ls:* libraries: resolved entirely child-side via the bundled registry.
  // - non-ls:* (user libraries): fetched via `'script.fetchLibrary'` IPC
  //   from the parent's scriptStorage; compiled and run child-side in an
  //   AsyncFunction sandbox matching the canonical's library-execution
  //   shape (api/data/script/console/exports/module/fetch/Bun/process).
  //
  // Both paths share the same `requireCache` and `inProgress` set, so:
  //   - Repeated `require('foo')` returns the same exports object.
  //   - Circular requires (libA → libB → libA) throw a clear error.
  //
  // Caveat vs. canonical: the canonical builds a SEPARATE api per library
  // via `buildScriptAPI(library, options)`, so registrations from inside
  // the library carry the LIBRARY's scriptId. The proxy passes the
  // CALLING script's `apiForLibraries` to keep IPC complexity bounded —
  // registrations from libraries appear under the caller's scriptId in
  // diagnostic surfaces (e.g. tools.list). Functionally invisible (the
  // tool/macro/etc. still works); only inspection differs. Users that
  // need exact-match canonical behavior should register from the calling
  // script directly rather than through a shared library.

  // Per-run library cache: same library required twice in one run gets
  // the same exports object (matches the in-process executor's
  // `requireCache` pattern). Shared between top-level `script.require`
  // and library-internal `script.require` via closure capture.
  const requireCache = new Map<string, unknown>();
  // Phase 9e — circular-dependency tracker. Same shape as the canonical's
  // executor.ts:386 `inProgress`. Names are added before compilation /
  // factory invocation, removed in `finally`. A re-entrant call for the
  // same name throws.
  const inProgress = new Set<string>();

  // Build the api object once for library factories. Cast to the full
  // LumiScriptAPI even though we currently only implement a subset —
  // libraries that touch unimplemented namespaces will throw clearly.
  const apiForLibraries = {
    utils, broadcast, variables, db, ui, llm,
    chat, chats, characters, worldInfo, databanks, personas, council,
    files, enclave, tokens, events, commands, tools, macros,
    json,
  } as unknown as LumiScriptAPI;

  // AsyncFunction constructor — used for compiling user-library code in
  // the child runtime. Spec-defined as the constructor of an async
  // arrow function. Reused across all library compilations in this proxy.
  const AsyncFunctionCtor = (async () => {}).constructor as new (
    ...args: string[]
  ) => (...args: unknown[]) => Promise<unknown>;

  // Phase 9e — `requireFn` is a free function (not an inline method) so
  // libraries can pass IT as their own `script.require`, sharing the
  // proxy's `requireCache` and `inProgress` via closure capture.
  // Recursive: a library's body calling `script.require('bar')` re-enters
  // this same function with the cache/in-progress set carried through.
  const requireFn = async (nameOrId: string): Promise<unknown> => {
    // ── Built-in libraries (ls:*) ───────────────────────────────────────
    if (isBuiltinName(nameOrId)) {
      if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
      const factory = resolveBuiltin(nameOrId);
      if (!factory) {
        throw new Error(`script.require: built-in library "${nameOrId}" not found`);
      }
      const exports = factory(apiForLibraries);
      requireCache.set(nameOrId, exports);
      return exports;
    }

    // ── User libraries (via parent IPC) ─────────────────────────────────
    if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
    if (inProgress.has(nameOrId)) {
      throw new Error(`script.require: circular dependency detected for "${nameOrId}"`);
    }

    // Fetch library metadata from the parent. This resolves to the
    // canonical Script lookup chain (`getScript(id) ?? getByName(name)`)
    // wired through `setScriptResolver` in backend.ts. Error responses
    // ("not found" / "not a library script") propagate through dispatch's
    // standard reject path and surface to user code as thrown errors.
    const libInfo = (await dispatch('script.fetchLibrary', [nameOrId])) as {
      id:             string;
      name:           string;
      code:           string;
      allowDangerous: boolean;
    };

    inProgress.add(nameOrId);
    try {
      const libExports: Record<string, unknown> = {};
      const libModule = { exports: libExports };

      // Build the library's `script.*` namespace. Shares `requireFn`
      // (and through closure, `requireCache` + `inProgress`) so nested
      // requires inside the library participate in the same cache and
      // circular-dependency tracking as the top-level script's requires.
      const libScriptNS: ScriptNamespace = {
        id:      libInfo.id,
        name:    libInfo.name,
        type:    'library',
        require: requireFn,
      };

      // Match canonical: silent console for libraries (don't pollute the
      // calling script's console output). Library authors that need
      // diagnostic visibility can use api.utils.* or surface state to the
      // caller via exports.
      const silentConsole = {
        log:   () => {},
        warn:  () => {},
        error: () => {},
        info:  () => {},
      };

      // `fetch` binding governed by the LIBRARY's allowDangerous flag —
      // matches canonical's `buildSafeFetch(library)`. A library that
      // doesn't have allowDangerous gets a throwing fetch even if the
      // calling script does have it. (api.utils.http.* is also gated
      // parent-side via the calling script's allowDangerous, so a
      // library calling api.utils.http.* sees the CALLER's perm — minor
      // canonical divergence, see the comment block above.)
      const libSafeFetch: typeof globalThis.fetch = libInfo.allowDangerous
        ? globalThis.fetch.bind(globalThis)
        : ((() => {
            throw new Error(
              `"${libInfo.name}" must enable Allow Dangerous to use fetch directly. ` +
              `Use api.utils.http.* for HTTP requests.`,
            );
          }) as unknown as typeof globalThis.fetch);

      // Library AsyncFunction shape matches canonical executor.ts:440-446
      // exactly: api / data / script / __console / exports / module /
      // fetch / Bun / process. (No `z` — canonical doesn't expose Zod to
      // libraries.) `Bun` and `process` are always undefined.
      const libFn = new AsyncFunctionCtor(
        'api', 'data', 'script', '__console', 'exports', 'module',
        'fetch',   // shadow: library's allowDangerous governs
        'Bun',     // shadow: undefined
        'process', // shadow: undefined
        `"use strict";\nconst console = __console;\n${libInfo.code}\n`,
      );

      await libFn(
        apiForLibraries, {}, libScriptNS, silentConsole,
        libExports, libModule, libSafeFetch, undefined, undefined,
      );
      const exports = libModule.exports;
      requireCache.set(nameOrId, exports);
      return exports;
    } finally {
      inProgress.delete(nameOrId);
    }
  };

  const script: ScriptNamespace = {
    id:      ctx.scriptId,
    name:    ctx.scriptName,
    type:    ctx.scriptType,
    require: requireFn,
  };

  // ── Lifecycle ────────────────────────────────────────────────────────────

  function handleResponse(msg: ApiProxyResponse): void {
    const p = pending.get(msg.requestId);
    if (!p) return; // late or unknown — drop silently
    pending.delete(msg.requestId);
    if (msg.ok) {
      p.resolve(msg.value);
    } else {
      p.reject(reconstructError(msg.error));
    }
  }

  function cleanup(reason: string = 'script run completed'): void {
    if (pending.size === 0) return;
    const err = new Error(`api proxy: dispatch aborted (${reason})`);
    for (const p of pending.values()) p.reject(err);
    pending.clear();
  }

  return {
    api: {
      utils, broadcast, variables, db, ui, llm,
      chat, chats, characters, worldInfo, databanks, personas, council,
      files, enclave, tokens, events, commands, tools, macros,
      json,
      rpc,
    },
    script,
    handleResponse,
    cleanup,
    flush,
  };
}

// ─── Test-only reset (Phase 11.A) ───────────────────────────────────────────
//
// Resets the module-scope state containers `api-proxy.ts` owns. Per-proxy
// state (the `pending` map, `outstandingChains`, etc.) lives inside the
// closure returned by `buildProxiedAPI` and dies with the proxy reference;
// the only state that outlives a proxy and persists across tests in the
// same module instance is the per-script module-scope state below.
//
// `clearScriptStateOnUnregister(scriptId)` already covers per-script teardown
// for live unregister flows; this reset clears EVERYTHING regardless of
// scriptId so a test can start from a fully empty surface without enumerating
// the script ids it touched.
/** @internal */
export function __resetForTests(): void {
  advancedModalState.clear();
  floatWidgetState.clear();
  domStableIdToElementId.clear();
  latestRunIdByScript.clear();
}
