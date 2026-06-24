declare const spindle: import('lumiverse-spindle-types').SpindleAPI

import type { FrontendToBackend } from './types/messages.js';
import type { LumiScriptSettings, Script } from './types/script.js';
import { DEFAULT_SETTINGS } from './types/script.js';
import { ScriptStorage } from './storage/script-storage.js';
import { SettingsStore } from './storage/settings-store.js';
import { executionStatusStore } from './engine/execution-status.js';
import { setActiveContext, getActiveContext, getActiveChatId } from './engine/binding.js';
// All script execution flows through `runScriptViaChild` (trigger-registry
// + manual-run path). `executeScript` from `engine/executor.ts` is kept
// for the `inProcessRunner` test fixture only — it's not on any production
// path. See `engine/executor.ts`'s file-level JSDoc for status.
import { registerLumiScriptMacros, updateLumiScriptActiveMacro } from './macros.js';
import {
  TriggerRegistry,
  runScriptViaChild,
  hasReloadOnEditDirective,
  type LsReloadPayload,
} from './engine/trigger-registry.js';
import { createHash } from 'node:crypto';
import { generateUUID } from './utils/uuid.js';
import { listByMode, listAll, clearEphemeral, clearByScriptId, type InjectionEntry } from './engine/injection-store.js';
import { prepareCardScriptDetection, applyCardScriptInstall, type PreparedDetection } from './engine/card-scripts-install.js';
import { applyLumiScriptInjections } from './engine/interceptor-pipeline.js';
import {
  dispatch as dispatchMacroInterceptor,
  clearByScriptId as clearMacroInterceptorsByScriptId,
  listIdsByScriptId as macroInterceptorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleMacroInterceptors,
} from './engine/macro-interceptor-registry.js';
import {
  dispatch as dispatchMessageContentProcessor,
  clearByScriptId as clearMessageContentProcessorsByScriptId,
  listIdsByScriptId as contentProcessorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleContentProcessors,
} from './engine/message-content-processor-registry.js';
import {
  dispatch as dispatchWorldInfoInterceptor,
  hasAnyEntry as hasAnyWorldInfoInterceptor,
  clearByScriptId as clearWorldInfoInterceptorsByScriptId,
  listIdsByScriptId as worldInfoInterceptorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleWorldInfoInterceptors,
} from './engine/world-info-interceptor-registry.js';
import {
  clearByScriptId as clearToolsByScriptId,
  listAll as listAllTools,
  removeByName as removeToolByName,
  listNamesByScriptId as toolNamesByScript,
  diffAndCleanStaleTools,
} from './engine/tool-store.js';
import {
  clearByScriptId as clearMacrosByScriptId,
  listNamesByScriptId as macroNamesByScript,
  diffAndCleanStaleMacros,
} from './engine/macro-store.js';
import {
  clearByScriptId as clearRpcEndpointsByScriptId,
  listEndpointsByScriptId as rpcEndpointsByScript,
  diffAndCleanStaleEndpoints,
} from './engine/rpc-store.js';
import {
  clearByScriptId as clearCollectionHandleCacheByScriptId,
  setCollectionEvictHook,
} from './engine/collection-handle-cache.js';
import { flushThemeOnTeardown } from './engine/api/theme.js';
import {
  clearScriptStorageForScript,
  enumerateAllScriptStorage,
  inspectScriptStorage,
  clearScriptStorageAsAdmin,
  deleteScriptStorageEntryAsAdmin,
} from './engine/api/script-storage.js';
import { logCleanup } from './engine/cleanup-log.js';
import { dispatchToolInvocation } from './engine/tool-invocation.js';
import { dispatchEvent as dispatchDOMEvent, dispatchDelegateEvent as dispatchDOMDelegateEvent, cleanupScript as cleanupDOMScript } from './engine/dom-registry.js';
import {
  liveModalsByScript as advancedModalsByScript,
  markPendingDismissal as markModalPendingDismissal,
  markDismissed as markModalDismissed,
  dropEntry as dropAdvancedModalEntry,
} from './engine/advanced-modal-registry.js';
import {
  listByScript as listActionsByScript,
  clearByScript as clearActionsByScript,
  dispatchClick as dispatchActionClick,
} from './engine/input-bar-action-registry.js';
import {
  listByScript as listTagHandlersByScript,
  clearByScriptId as clearTagHandlersByScriptId,
  dispatchTagEvent,
} from './engine/message-tag-handler-registry.js';
import {
  liveWidgetsByScript,
  destroyWidget as destroyWidgetInRegistry,
  dropEntry as dropWidgetEntry,
  dispatchDragEnd as dispatchWidgetDragEnd,
} from './engine/float-widget-registry.js';
import {
  liveAppMountsByScript,
  destroyAppMount as destroyAppMountInRegistry,
  dropEntry as dropAppMountEntry,
} from './engine/app-mount-registry.js';
import {
  listByScript as listTabsByScript,
  clearByScript as clearTabsByScript,
  dispatchActivation as dispatchTabActivation,
} from './engine/drawer-tab-registry.js';
import { resolveContextMenu, resolvePickFile } from './engine/api/ui.js';
import {
  dispatchKeyboardChange,
  dispatchDrawerChange,
  dispatchSettingsChange,
  clearByScript as clearUiEventHandlersByScript,
} from './engine/ui-event-registry.js';
import { resolveDomRead } from './engine/api/dom.js';
import { resolveComponentValue } from './engine/api/components.js';
import { checkMinimumHostVersion } from './utils/host-version.js';
import {
  enumerateAllCollections,
  inspectCollection,
  countCollection,
  analyzeCollection,
  updateRecord,
  deleteRecord,
  isValidCollectionPath,
} from './engine/db-admin.js';
import { dbCacheKey, invalidateDbCache } from './engine/db-cache.js';
import { on as busOn, emit as busEmit, clearByScriptId as clearBroadcastByScriptId } from './engine/broadcast-bus.js';
import { clearCommandHandlerByScriptId } from './engine/api/commands.js';
import { buildReplayMessages } from './engine/replay.js';
import {
  spawnScriptRunner,
  dispatchComponentCallback,
  notifyAdvancedModalOpened,
  notifyAdvancedModalOpenFailed,
  notifyInputBarActionRegistered,
  notifyFloatWidgetCreated,
  notifyAppMountCreated,
  sendFloatWidgetPositionNotice,
  notifyDrawerTabRegistered,
  setScriptResolver,
  setSendToFrontend,
  setWorkerCountReader,
  setEvictionConfigReader,
  startEvictionSweep,
  rebalanceWorkerPool,
  redistributeAllAssignments,
  unregisterScriptFromChild,
  getRunnerHealth,
  getWorkerPoolDiagnostics,
  queryRunnerStats,
  queryWorkerMemoryBytes,
  releasePersistentHandleByObj,
  // shutdownScriptRunner — Phase 10 will wire this into teardown
} from './script-runner/host-dispatcher.js';
import {
  collectBackendDiagnostics,
  compactDiagnostics,
  type DiagnosticsReport,
  type ScriptRunnerProbeResult,
  type AssistantProbeResult,
} from './engine/diagnostics.js';
import { runAssistantTurn, estimateMessageTokens, estimateSystemFloorTokens, ATTACHED_SCRIPT_CODE_CAP, ATTACHED_FILE_TEXT_CAP } from './assistant/agent.js';
import { buildModelHistory } from './assistant/model-history.js';
import { compactThread, AUTO_COMPACT_THRESHOLD } from './assistant/compaction.js';
import { buildSessionNotesSection } from './assistant/system-prompt.js';
import { isEligibleUserFile, normalizeUserPath, MAX_USER_FILE_BYTES, USER_FILES_ROOT, userFileDisplayName, toUserFilePath } from './assistant/user-files.js';
import {
  memoryIndex as loadMemoryIndex,
  loadNotes as loadMemoryNotes,
  remember as addMemoryNote,
  editNote as editMemoryNote,
  forget as deleteMemoryNote,
} from './engine/assistant-memory.js';
import { consolidateMemory } from './assistant/consolidate-memory.js';
import { LOOKUP_TABLE } from './assistant/corpus/lookup-table.js';
import {
  loadThreadIndex,
  saveThreadIndex,
  loadThread,
  saveThread,
  deleteThreadFile,
  createNewThread,
  deriveTitle,
  buildIndexEntry,
  upsertIndexEntry,
  removeIndexEntry,
} from './assistant/storage.js';
import type { AssistantThread, AssistantThreadIndexEntry } from './assistant/types.js';

// ─── Active user + permission tracking ───────────────────────────────────────

let activeUserId: string | null = null;
const grantedPermissions = new Set<string>();

// Card-embedded scripts (#12): detections awaiting the user's consent reply,
// keyed by requestId (bounded; oldest evicted). Lost on worker respawn — a
// stale install reply then no-ops (see the `ls_card_scripts_install` handler).
const pendingCardDetections = new Map<string, PreparedDetection>();
const MAX_PENDING_CARD_DETECTIONS = 16;

// ─── In-app assistant — module-level state (v0.30.2 persistence) ─────────────
//
// Threads persist to `spindle.userStorage` under `assistant/threads/<id>.json`,
// indexed at `assistant/threads.json`. Only one thread is "active" — its body
// lives in memory between turns and gets persisted after each terminal turn.
// Other threads' bodies are loaded lazily on `assistant_switch_thread`.
let assistantThreadIndex: AssistantThreadIndexEntry[] = [];
let activeAssistantThread: AssistantThread | null = null;

// At most one assistant turn is in flight at a time. The abort controller +
// streamed-content buffer get cleared on every terminal outcome (completed
// / aborted / errored).
let assistantAbortController: AbortController | null = null;
let assistantStreamedContent = '';
let assistantInitialized = false;
// C2-02 — in-flight bootstrap promise, so concurrent cold-start callers dedupe
// onto one init instead of each passing the `assistantInitialized` check (set
// only at the very end of bootstrap) and running the full load twice.
let bootstrapInFlight: Promise<void> | null = null;

/**
 * Streamed-token coalescing window (ms). The agent fires onToken/onReasoning
 * once per provider token — a fast model emits hundreds per second. Sending one
 * `sendToFrontend` frame for each floods the host WebSocket (every frame is
 * JSON-parsed on the browser main thread) and, on a multi-user server, fans
 * every token out to all sessions. Instead we buffer tokens and flush at ~30Hz;
 * the frontend concatenates batches exactly as it did single tokens.
 */
const ASSISTANT_TOKEN_COALESCE_MS = 33;

async function refreshPermissions(): Promise<void> {
  try {
    const granted = await spindle.permissions.getGranted();
    grantedPermissions.clear();
    for (const p of granted) grantedPermissions.add(p);
  } catch {
    // Keep last known set on error
  }
}

/**
 * v0.27.1 — resolve `data.message.swipeId` against the active chat's
 * history before dispatching a delegated event. The FE emits a
 * placeholder `0` because `data-swipe-id` isn't stamped on the chat DOM;
 * the backend has direct access to `spindle.chat.getMessages(chatId)`
 * which carries the active swipe.
 *
 * Fall-through paths (resolution skipped, placeholder `0` preserved):
 *   - `data.message` not populated (matched element not inside a tracked
 *     message — possible on `root: 'document'` delegations that fire
 *     outside chat content).
 *   - No active chat (chat closed between event fire and dispatch).
 *   - `getMessages` throws (host-API failure; rare).
 *   - The message id isn't in the active chat's history (e.g. the user
 *     deleted the message between click and dispatch — also rare).
 *
 * Scripts that genuinely need watertight swipe-resolution can re-resolve
 * via `api.chat.getMessages()` inside the handler. The common case (read
 * `swipeId` off the click data) is now correct without that lookup.
 *
 * Cost: one host-API roundtrip per delegated event when the matched
 * element is inside a chat message. Acceptable for the typical click-
 * latency budget; cache later if hot-path traffic justifies it.
 */
async function resolveDelegateEventAndDispatch(
  delegationId: string,
  data: import('./types/script.js').DOMDelegatedEventData,
): Promise<void> {
  if (data.message?.id) {
    const chatId = getActiveChatId();
    if (chatId) {
      try {
        const msgs = await spindle.chat.getMessages(chatId);
        const found = msgs.find((m) => m.id === data.message!.id);
        if (found) {
          data.message.swipeId = found.swipe_id;
        }
      } catch {
        // Fall through with placeholder swipeId.
      }
    }
  }
  dispatchDOMDelegateEvent(delegationId, data);
}

/**
 * Fetch the active chat + its character name, then update activeContext.
 * Used before script execution and on `get_active_context` requests so that
 * binding display names (and api.chat.getChatId) reflect the live state.
 */
async function refreshActiveContext(userId: string | null): Promise<void> {
  const uid = userId ?? undefined;
  const chat = await spindle.chats.getActive(uid);
  if (!chat) {
    setActiveContext({ chatId: null, characterId: null, characterName: null });
    return;
  }
  const char = await spindle.characters.get(chat.character_id, uid).catch(() => null);
  setActiveContext({
    chatId:        chat.id,
    characterId:   chat.character_id,
    characterName: char?.name ?? null,
  });
}

// ─── Macro character-ID bridge ─────────────────────────────────────────────────
// Macro function handlers can't call spindle.chats.get() (needs userId in
// multi-user mode). Instead, publish the characterId to globalThis so handlers
// can read it synchronously — no IPC needed.
function publishActiveCharId(): void {
  const ctx = getActiveContext();
  (globalThis as Record<string, unknown>).__lsActiveCharId = ctx.characterId ?? null;
  (globalThis as Record<string, unknown>).__lsActiveUserId = activeUserId ?? null;
}

// ─── Storage ──────────────────────────────────────────────────────────────────

const getUserId = () => activeUserId ?? undefined;

const scriptStorage = new ScriptStorage(spindle.userStorage, getUserId);

// Phase 9e — wire the script-runner host-dispatcher's user-library
// resolver. This lets the child runtime's `script.require()` proxy
// fetch user-library script code via the `'script.fetchLibrary'` IPC.
// The resolver mirrors the canonical executor's lookup order:
// `getScript(id)` first (UUID match), then `getByName(name)` fallback.
//
// Wired at module-init time. Calls to `scriptResolver(...)` before
// `scriptStorage.load()` finishes return null (storage's lazy-load path
// — empty scripts list until populated); user code calling
// `script.require()` that early would see a "not found" error, which
// is the correct surface (storage genuinely has nothing yet).
setScriptResolver((nameOrId) =>
  scriptStorage.getScript(nameOrId) ?? scriptStorage.getByName(nameOrId) ?? null,
);

const settingsStore = new SettingsStore<LumiScriptSettings>(
  'settings.json',
  spindle.userStorage,
  getUserId,
  DEFAULT_SETTINGS,
);

// Register {{lumiScriptActive}} + character-var macros at module scope so they
// are available to the macro engine the instant the worker boots. The
// isEnabled callback reads from settingsStore.get(), which returns the
// defaults (enabled=true) until settingsStore.load() runs on the first
// frontend message. After load() we call updateLumiScriptActiveMacro() to
// reconcile with the persisted value.
registerLumiScriptMacros(() => settingsStore.get().enabled);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function send(
  msg: import('./types/messages.js').BackendToFrontend,
  userId: string | null = activeUserId,
): void {
  // Route to the active user's session by default instead of broadcasting to
  // EVERY connected session (audit C1-02). `spindle.sendToFrontend` with no
  // userId fans out to all sessions — wasted bandwidth and, on a multi-user
  // server, one user's scripts / status / storage leaking into another's panel
  // (incl. the full script code that backs `scripts_updated`). Mirrors
  // `sendAssistant`. A genuinely all-sessions broadcast would pass an explicit
  // `userId: null` — there are none today.
  spindle.sendToFrontend(msg, userId ?? undefined);
}

/**
 * Send a Lisa-assistant message to ONLY the target user. `spindle.sendToFrontend`
 * broadcasts to EVERY connected session when the userId is omitted (see its host
 * docs) — which both wastes WebSocket bandwidth fanning out to unrelated sessions
 * and, on a multi-user server, surfaces one user's Lisa conversation, threads,
 * memory, connections, etc. in another's open modal. Defaults to `activeUserId`
 * (set at the top of every `onFrontendMessage` handler); pass an explicit
 * `userId` from any helper that carries its own (e.g. pushAssistantMemory) so it
 * doesn't depend on the module-level value happening to match.
 */
function sendAssistant(
  payload: import('./types/messages.js').BackendToFrontend,
  userId: string | null = activeUserId,
): void {
  spindle.sendToFrontend(payload, userId ?? undefined);
}

// Wire host-dispatcher's frontend-send hook so async broadcast handler
// lifecycle messages reach the sidebar status indicator. Mirror of the
// `setScriptResolver` wiring above.
setSendToFrontend((msg) => send(msg as import('./types/messages.js').BackendToFrontend));

// Phase C2 (v1.0 runtime-isolation) — wire the workerCount reader so the
// dispatcher can size its pool from the live settings. Default fallback
// 1 keeps single-worker behaviour if `settingsStore.get()` returns an
// older settings shape (pre-Phase-C1 persisted JSON without workerCount).
setWorkerCountReader(() => settingsStore.get().workerCount ?? 1);

// Phase E (v1.0 runtime-isolation) — wire the eviction config reader so
// the dispatcher's sweep reads live thresholds. Fallback defaults match
// `DEFAULT_SETTINGS` (30-min idle, 512 MB memory ceiling) to handle older
// persisted settings JSON without these fields.
setEvictionConfigReader(() => {
  const s = settingsStore.get();
  return {
    idleTimeoutMs:      s.workerIdleTimeoutMs   ?? 30 * 60 * 1000,
    memoryCeilingBytes: (s.workerMemoryCeilingMb ?? 512) * 1024 * 1024,
  };
});
// Start the periodic eviction sweep. Idempotent — safe to call any time
// after the dispatcher module loads. The sweep is a no-op when no
// workers are spawned, so starting it before the first user-script fire
// has zero cost.
startEvictionSweep();

// audit C13-01 — wire the collection-handle-cache's LRU-eviction hook to the
// dispatcher's persistent-handle release, so a script minting many distinct
// collection names in one long run can't grow persistentHandles unbounded.
setCollectionEvictHook(releasePersistentHandleByObj);

function pushScripts(): void {
  send({ type: 'scripts_updated', scripts: scriptStorage.getScripts() });
}

function pushScript(script: import('./types/script.js').Script): void {
  send({ type: 'script_patched', script });
}

function pushSettings(): void {
  send({ type: 'settings_updated', settings: settingsStore.get() });
}

function pushInjections(): void {
  send({ type: 'injections_updated', injections: listAll() });
}

function pushTools(): void {
  const tools = listAllTools().map(e => ({
    name:             e.name,
    display_name:     e.displayName,
    description:      e.description,
    council_eligible: e.councilEligible,
    scriptId:         e.scriptId,
    scriptName:       e.scriptName,
  }));
  send({ type: 'tools_updated', tools });
}

/**
 * Fetch all variable scopes for the active context and push a snapshot
 * to the frontend for the Variable Inspector.
 */
async function pushVariables(userId: string | null): Promise<void> {
  const ctx = getActiveContext();
  const uid = userId ?? undefined;

  // Deserialize JSON-encoded Spindle variable values back to native types.
  function deserializeAll(raw: Record<string, string>): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(raw)) {
      if (v === '') { out[k] = v; continue; }
      try { out[k] = JSON.parse(v); } catch { out[k] = v; }
    }
    return out;
  }

  const [local, global, chat, character] = await Promise.all([
    ctx.chatId
      ? spindle.variables.local.list(ctx.chatId).catch(() => ({}))
      : Promise.resolve({}),
    spindle.variables.global.list(uid).catch(() => ({})),
    ctx.chatId
      ? spindle.variables.chat.list(ctx.chatId).catch(() => ({}))
      : Promise.resolve({}),
    ctx.characterId
      ? spindle.userStorage.getJson<Record<string, unknown>>(
          `variables/characters/${ctx.characterId}.json`,
          { fallback: {}, userId: uid },
        ).catch(() => ({}))
      : Promise.resolve({}),
  ]);

  send({
    type: 'variables_updated',
    variables: {
      local:     deserializeAll(local as Record<string, string>),
      global:    deserializeAll(global as Record<string, string>),
      chat:      deserializeAll(chat as Record<string, string>),
      character: character as Record<string, unknown>,
    },
  });
}

/**
 * Enumerate all collections across scripts/scopes and push the summary
 * to the frontend's Storage panel. Stat failures on individual paths
 * don't fail the whole call — those rows just surface as zero-sized.
 */
async function pushCollections(userId: string | null): Promise<void> {
  const collections = await enumerateAllCollections(userId ?? undefined);
  send({ type: 'collections_list', collections });
}

// ─── `ls:collection:*` broadcast → `collections_updated` forwarder ───────────
//
// Scripts emit broadcast events on every collection mutation. The Storage
// panel wants to refresh on change, but wiring one frontend message per
// broadcast would thrash the panel during rapid inserts (e.g. a 100-record
// insertMany). Debounce 200ms after the LAST event so the frontend's
// subsequent `list_collections` request sees a settled state.
const COLLECTIONS_UPDATE_DEBOUNCE_MS = 200;
const BACKEND_BROADCAST_OWNER = '__lumiscript_backend__';
const COLLECTION_BROADCAST_EVENTS = [
  'ls:collection:created',
  'ls:collection:dropped',
  'ls:collection:inserted',
  'ls:collection:updated',
  'ls:collection:deleted',
  'ls:collection:size-warning',
] as const;

let collectionsUpdateTimer: ReturnType<typeof setTimeout> | null = null;
function scheduleCollectionsUpdate(): void {
  if (collectionsUpdateTimer !== null) clearTimeout(collectionsUpdateTimer);
  collectionsUpdateTimer = setTimeout(() => {
    collectionsUpdateTimer = null;
    send({ type: 'collections_updated' });
  }, COLLECTIONS_UPDATE_DEBOUNCE_MS);
}

for (const event of COLLECTION_BROADCAST_EVENTS) {
  // Sentinel `scriptId` — the broadcast bus's `clearByScriptId` fires on
  // script lifecycle events only, and no real script will ever own this
  // id, so the subscription persists for the worker's lifetime.
  busOn(event, () => scheduleCollectionsUpdate(), BACKEND_BROADCAST_OWNER);
}

// ─── `ls:scriptStorage:*` broadcast → `script_storage_updated` forwarder ─────
//
// v1.0.0-rc.6 — mirrors the Collections debounced-refresh-hint pattern
// above. Scripts emit `ls:scriptStorage:set` / `:delete` / `:clear` on
// every mutation; the Storage panel's Script Storage section wants to
// refresh on change. Same 200 ms debounce — tight loops of `set` calls
// don't thrash the FE.
const SCRIPT_STORAGE_BROADCAST_EVENTS = [
  'ls:scriptStorage:set',
  'ls:scriptStorage:delete',
  'ls:scriptStorage:clear',
] as const;

let scriptStorageUpdateTimer: ReturnType<typeof setTimeout> | null = null;
function scheduleScriptStorageUpdate(): void {
  if (scriptStorageUpdateTimer !== null) clearTimeout(scriptStorageUpdateTimer);
  scriptStorageUpdateTimer = setTimeout(() => {
    scriptStorageUpdateTimer = null;
    send({ type: 'script_storage_updated' });
  }, COLLECTIONS_UPDATE_DEBOUNCE_MS);
}

for (const event of SCRIPT_STORAGE_BROADCAST_EVENTS) {
  busOn(event, () => scheduleScriptStorageUpdate(), BACKEND_BROADCAST_OWNER);
}

// ─── Prompt injection handlers ────────────────────────────────────────────────
//
// Registered unconditionally at module load so that any script calling
// api.chat.inject() has its entries picked up during the next generation
// cycle, without requiring any per-injection Spindle call.
//
// Context handler (pre-assembly) — handles mode:'context' entries.
// Enriches the spindle context object with a `_lumiScriptInjections` key BEFORE
// prompt assembly. The interceptor (below) reads this key from the context it
// receives and prepends the entries to the assembled message array.
//
// Pass the FULL `InjectionEntry` shape through (not just `{ content, role }`)
// so the interceptor can resolve per-injection breakdown labels via the
// entries' `scriptId` + `id` fields. `_lumiScriptInjections` is a private
// channel between our two registered handlers — Lumiverse host doesn't
// inspect or pass it through to other extensions, so the shape is safe to
// expose internally.
spindle.registerContextHandler(async (ctx) => {
  const entries = listByMode('context');
  if (entries.length === 0) return ctx;
  return {
    ...(ctx as Record<string, unknown>),
    _lumiScriptInjections: entries,
  };
}, 50);

// Interceptor (post-assembly) — two responsibilities, in order:
//
//  1. mode:'context' injections: reads _lumiScriptInjections from the spindle
//     context (populated by the context handler above) and PREPENDS them at
//     index 0, before all assembled content. Ephemeral context entries are
//     cleared here.
//  2. mode:'intercept' injections: splices each entry at depth from the END
//     of the message array. Ephemeral entries cleared after.
//
// Splicing + breakdown computation lives in the pure
// `applyLumiScriptInjections` helper (see `engine/interceptor-pipeline.ts`)
// so it can be unit-tested without a mock spindle. The helper returns
// breakdown entries pointing at each injected message — surfaced via
// `InterceptorResultDTO.breakdown` (spindle-types 0.4.37+) so each
// injection appears as a first-class row in Lumiverse's Prompt Breakdown
// / Dry Run UI attributed to LumiScript with a per-script label.
//
// Backwards-compat: when the breakdown is empty (no LS injections this
// round), return the legacy `LlmMessageDTO[]` shape. Older hosts that
// don't parse the `InterceptorResultDTO` object form pass through
// unchanged in the common no-injection path; only chats where LumiScript
// actively injected pay the object-form serialization cost.
spindle.registerInterceptor(async (messages, context) => {
  const ctx = context as Record<string, unknown>;
  const ctxInjections = ctx?._lumiScriptInjections as InjectionEntry[] | undefined;
  const interceptEntries = listByMode('intercept');

  // Fast-path: no LumiScript injections in flight — pass through with
  // zero allocation (the helper would do the same work, but skipping it
  // here keeps the no-op interceptor cycle indistinguishable from a
  // pre-LumiScript cost profile).
  if ((!ctxInjections || ctxInjections.length === 0) && interceptEntries.length === 0) {
    return messages;
  }

  const { messages: result, breakdown } = applyLumiScriptInjections(
    messages,
    ctxInjections ?? [],
    interceptEntries,
    (scriptId) => scriptStorage.getScript(scriptId)?.name ?? scriptId,
  );

  if (ctxInjections && ctxInjections.length > 0) clearEphemeral('context');
  if (interceptEntries.length > 0) clearEphemeral('intercept');

  // Only surface the InterceptorResultDTO object form when we have
  // breakdown data to attach. Defensive against any host build that
  // hasn't parsed the union return type cleanly — the legacy array
  // shape is the cheapest correct fall-through.
  return breakdown.length > 0
    ? { messages: result, breakdown }
    : result;
}, 50);

// ─── Macro interceptor (LS-house multiplexer) ────────────────────────────────
//
// One extension-level registration with the host that fans out to all LS
// scripts' `api.macros.registerInterceptor` handlers via the per-script
// registry's `dispatch()`. The host calls our LS-house handler once per
// `MacroEvaluator.evaluate()` iteration, giving us up to 10 wall-clock
// seconds across ALL of our scripts' handlers — `dispatch()` enforces a
// per-handler 2s soft timeout to keep us comfortably under the cap.
//
// Returns a transformed template `string` when at least one of our
// per-script handlers returned a string; `undefined` for full pass-through
// (the host's chain semantics mean `void`/`undefined` skips our extension
// without rebuilding the template).
//
// Forward-compat guard: older Lumiverse builds without
// `spindle.registerMacroInterceptor` simply skip the registration. The
// script-side `api.macros.registerInterceptor` call still throws
// `PERMISSION_DENIED:macro_interceptor` on those builds (the permission
// won't be granted), so behaviour gracefully degrades to "feature absent"
// without crashing the worker at startup.
//
// Replay across frontend refresh: NOT NEEDED. This is a pure worker↔host
// hook with no frontend reflection. The Bun worker (and the registry)
// survive refresh; the host's single registration also persists across
// our extension's runtime lifetime.
if (typeof spindle.registerMacroInterceptor === 'function') {
  spindle.registerMacroInterceptor(async (ctx) => {
    return await dispatchMacroInterceptor(ctx);
  }, 100);
} else {
  spindle.log.warn(
    '[LumiScript] host does not support spindle.registerMacroInterceptor — ' +
    'api.macros.registerInterceptor will be unavailable to scripts on this build.',
  );
}

// ─── Message content processor (LS-house multiplexer) ────────────────────────
//
// Mirrors the macro-interceptor wiring above. One extension-level
// registration; per-script handlers fan out via the per-script registry's
// `dispatch()`. Permission rides on the existing `chat_mutation` gate
// (no new permission machinery required).
//
// `dispatch()` returns a `MessageContentProcessorResultDTO` patch when at
// least one handler returned a content / extra modification, or
// `undefined` for full pass-through. `extra` is returned as a DELTA only —
// the host shallow-merges it onto the row's existing extra, so we don't
// round-trip pristine `initial.extra` keys (avoids re-stamping unchanged
// keys on every write).
//
// Loop safety: the host does NOT invoke this hook for `spindle.chat.*`
// mutations (sendMessage / editMessage / etc.) — those bypass the
// processor chain to avoid an extension's own writes triggering its own
// handler. Documented in `developer-docs/docs/backend-api/message-content-processor.md`.
//
// Forward-compat: same guard pattern as macro interceptor.
if (typeof spindle.registerMessageContentProcessor === 'function') {
  spindle.registerMessageContentProcessor(async (ctx) => {
    return await dispatchMessageContentProcessor(ctx);
  }, 100);
} else {
  spindle.log.warn(
    '[LumiScript] host does not support spindle.registerMessageContentProcessor — ' +
    'api.chat.registerContentProcessor will be unavailable to scripts on this build.',
  );
}

// ─── World info interceptor (LS-house multiplexer, v0.27.0) ──────────────────
//
// Mirrors the macro-interceptor + content-processor wiring above. One
// extension-level registration; per-script handlers fan out via the
// per-script registry's `dispatch()`. Permission rides on the existing
// `generation` gate — same as `api.llm.*` and the other interceptor
// hooks. No new permission machinery required.
//
// DTO ↔ LS-type translation at this boundary:
//   - Host hands us `WorldInfoInterceptorCtxDTO` (snake_case for
//     world_book_id / use_probability / keysecondary).
//   - We translate to `WorldInfoInterceptorCtx` (camelCase) before
//     dispatching, so user handlers see consistent LumiScript-flavour
//     types throughout `api.*`.
//   - `WorldInfoInterceptorMutation` shape is identical between DTO and
//     LS-type (id + content), so the result passes through unchanged.
//
// Forward-compat: same guard pattern as the other interceptor hooks.
if (typeof spindle.registerWorldInfoInterceptor === 'function') {
  spindle.registerWorldInfoInterceptor(async (dtoCtx) => {
    // Fast path (audit C1-01): if no script has registered a world-info
    // interceptor, skip the per-generation deep-copy of the full message +
    // entry arrays below — dispatch would early-return on the empty registry
    // anyway, so the copy was pure waste on every generation. The three
    // sibling interceptor wrappers already check-then-build; this one didn't.
    if (!hasAnyWorldInfoInterceptor()) return undefined;
    // DTO → LS-type translation. The entries' snake_case fields need
    // camelCase mapping; everything else is structurally identical.
    const lsCtx: import('./types/script.js').WorldInfoInterceptorCtx = {
      chatId:       dtoCtx.chatId,
      characterId:  dtoCtx.characterId,
      ...(dtoCtx.userId !== undefined ? { userId: dtoCtx.userId } : {}),
      entries: dtoCtx.entries.map((e) => ({
        id:             e.id,
        worldBookId:    e.world_book_id,
        comment:        e.comment,
        disabled:       e.disabled,
        constant:       e.constant,
        extensions:     e.extensions,
        key:            e.key,
        keysecondary:   e.keysecondary,
        position:       e.position,
        depth:          e.depth,
        priority:       e.priority,
        probability:    e.probability,
        useProbability: e.use_probability,
        content:        e.content,
      })),
      messages:     dtoCtx.messages.map((m) => ({ role: m.role, content: m.content })),
      chatTurn:     dtoCtx.chatTurn,
      chatMetadata: dtoCtx.chatMetadata,
    };
    const result = await dispatchWorldInfoInterceptor(lsCtx);
    if (!result) return undefined;
    // LS-type → DTO. The arrays of strings + mutations carry through
    // unchanged; just spread to satisfy the return type.
    return {
      ...(result.disabled ? { disabled: [...result.disabled] } : {}),
      ...(result.enabled  ? { enabled:  [...result.enabled]  } : {}),
      ...(result.forced   ? { forced:   [...result.forced]   } : {}),
      ...(result.mutated  ? { mutated:  result.mutated.map((m) => ({ id: m.id, content: m.content })) } : {}),
    };
  }, 100);
} else {
  spindle.log.warn(
    '[LumiScript] host does not support spindle.registerWorldInfoInterceptor — ' +
    'api.worldInfo.registerInterceptor will be unavailable to scripts on this build.',
  );
}

// ─── Tool invocation dispatch ─────────────────────────────────────────────────
//
// Registered once at startup. Routes TOOL_INVOCATION messages for ALL tools
// registered by LumiScript scripts — both the Council path (inline mode) and
// the native LLM function-calling path use the same handler.
//
// The dispatch logic lives in `./engine/tool-invocation.ts` so it can be tested
// directly (without mocking Spindle's event bus). The return value is awaited
// by the worker-runtime and posted back as `tool_invocation_result` with the
// matching requestId — this is the only path through which Council tools'
// results reach the deliberation block, so it is covered by a dedicated test
// suite.
//
// IMPORTANT: The 'TOOL_INVOCATION' key must be UPPERCASE — the worker-runtime
// case "tool_invocation" dispatches to eventHandlers.get("TOOL_INVOCATION")
// (uppercase), and spindle.on() stores keys as-is without normalisation.
spindle.on('TOOL_INVOCATION', dispatchToolInvocation);

// ─── Trigger registry ─────────────────────────────────────────────────────────

const triggerRegistry = new TriggerRegistry(
  () => ({
    grantedPermissions,
    userId:                   activeUserId,
    scriptStorage,
    onToolsChanged:           pushTools,
    onInjectionsChanged:      pushInjections,
    scriptTimeoutMs:          settingsStore.get().scriptTimeoutMs,
    // v1.0.0-rc.8 — full state wipe for `fireReload`. Closes the
    // pre-rc.8 gap where 7 of 13 pinning surfaces leaked across
    // reloads. See `wipeScriptStateForReload` JSDoc.
    wipeScriptStateForReload,
  }),
  send,
);

// ─── Hot-reload-on-edit (Phase D / v1.0 runtime-isolation) ────────────────────
//
// Code-only `update_script` patches that change an enabled trigger script's
// body fire a synthetic `ls:reload` event after a short debounce. The
// script's body re-runs end-to-end within its existing worker (Phase C2
// routing), refreshing closures captured by registered handlers
// (broadcasts, commands, macros, tools, interceptors, etc.).
//
// Debounce coalesces typing bursts that survive the FE's autosave debounce
// (default 1200ms) — usually 1-2 patches arrive at the backend in rapid
// succession when a user pauses then resumes typing.

const HOT_RELOAD_DEBOUNCE_MS = 500;

/** Per-script pending reload timers, keyed by scriptId. */
const hotReloadTimers = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Short hash (16 hex chars of sha256) of the given string. Used by
 * `ls:reload` event payloads to give scripts a "did code change from X to
 * Y" diagnostic signal without shipping the full code through the event.
 */
function shortCodeHash(code: string): string {
  return createHash('sha256').update(code).digest('hex').slice(0, 16);
}

/**
 * Debounced scheduler for hot-reload-on-edit. Coalesces multiple rapid
 * code patches for the same script into one `fireReload` call after the
 * debounce window expires. Re-reads the latest script from storage at
 * fire time — code may have changed again since the timer armed.
 *
 * Eligibility checks (enabled, type, directive) are re-evaluated at fire
 * time to catch settings/code changes that landed during the debounce
 * window.
 */
function scheduleHotReload(scriptId: string, previousCode: string): void {
  const existing = hotReloadTimers.get(scriptId);
  if (existing !== undefined) clearTimeout(existing);

  const timer = setTimeout(() => {
    hotReloadTimers.delete(scriptId);
    const latest = scriptStorage.getScript(scriptId);
    if (!latest || !latest.enabled || latest.type !== 'trigger') return;
    // Opt-in by default — fire only when the script explicitly declares
    // the `// @ls:reload-on-edit` directive. See trigger-registry's
    // `hasReloadOnEditDirective` JSDoc for the cost-asymmetry rationale.
    if (!hasReloadOnEditDirective(latest.code)) return;

    const payload: LsReloadPayload = {
      reason:           'autosave',
      previousCodeHash: shortCodeHash(previousCode),
      currentCodeHash:  shortCodeHash(latest.code),
      previousLength:   previousCode.length,
      currentLength:    latest.code.length,
    };
    void triggerRegistry.fireReload(latest, payload).catch((err) => {
      spindle.log.error(
        `[LumiScript] hot-reload fire for "${latest.name}" failed: ` +
        `${err instanceof Error ? err.message : String(err)}`,
      );
    });
  }, HOT_RELOAD_DEBOUNCE_MS);

  hotReloadTimers.set(scriptId, timer);
}

/**
 * Per-script teardown: fires `ls:teardown`, then clears all per-script
 * registrations (tools, macros, RPC endpoints, DOM, modals, input bar
 * actions, float widgets, drawer tabs), unregisters the script from
 * the script-runner subprocess, and resets the FE execution indicator
 * to idle.
 *
 * Called from two paths:
 *   - `update_script` with `enabled: false` — single-script disable.
 *   - `syncTriggers` when the master toggle goes OFF — iterates all
 *     enabled scripts so per-script registrations don't leak past
 *     the master toggle (v1.0 fix for the asymmetry where master-
 *     toggle-off previously only cleared Spindle event subscriptions).
 *
 * `disabledScript` is the stored record at `enabled=true`. Pass `null`
 * only if the script has been deleted from storage between detection
 * and call — `fireTeardown` is skipped in that case (the handler
 * couldn't run anyway) but the cleanup proceeds since it's keyed by
 * `scriptId`.
 */
async function teardownDisabledScript(scriptId: string, disabledScript: Script | null): Promise<void> {
  const disabledName = disabledScript?.name ?? scriptId;

  // Fire ls:teardown BEFORE any state cleanup so the handler can
  // still access tools/macros/world-info it registered. No-op for
  // scripts that don't declare the trigger. Handler errors + timeouts
  // are logged and do NOT block the cleanup that follows.
  if (disabledScript) {
    await triggerRegistry.fireTeardown(disabledScript, 'disabled');
  }
  clearByScriptId(scriptId);
  pushInjections();
  const clearedTools = clearToolsByScriptId(scriptId);
  for (const name of clearedTools) spindle.unregisterTool(name);
  pushTools();
  const clearedMacros = clearMacrosByScriptId(scriptId);
  for (const name of clearedMacros) {
    try { spindle.unregisterMacro(name); } catch { /* swallow */ }
  }
  // Macro interceptor + message content processor entries owned by
  // this script. No host-side `unregister` per-entry — LumiScript's
  // single LS-house registration with the host stays live; dropping
  // entries from our registry means the next dispatch pass simply
  // skips them. Idempotent on already-disabled scripts.
  clearMacroInterceptorsByScriptId(scriptId);
  clearMessageContentProcessorsByScriptId(scriptId);
  clearWorldInfoInterceptorsByScriptId(scriptId);
  // RPC endpoints registered via `api.rpc.sync` / `api.rpc.handle`.
  // Spindle's auto-cleanup on extension unload tears down every
  // LumiScript-owned endpoint regardless of which script owns it,
  // so per-script granularity here lets us preserve other scripts'
  // endpoints when disabling just one. v0.26.0.
  const clearedRpcEndpoints = clearRpcEndpointsByScriptId(scriptId);
  for (const endpoint of clearedRpcEndpoints) {
    try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
  }
  // v0.26.1 — drop the per-script Collection dedup cache. The
  // wrappers themselves are then GC-able once the dispatcher's
  // persistentHandles + persistentObjToHandleId entries clear.
  clearCollectionHandleCacheByScriptId(scriptId);
  // v1.0.0-rc.5 — drop this script's contributions from the theme
  // override registry and push the post-clear merged result to
  // `spindle.theme.{apply,applyPalette}`. Awaited so the disable
  // op completes after the FE has visibly reverted the script's
  // theme contributions (consistent with the modal-dismiss + drawer-
  // tab-destroy ordering above). Errors during the spindle push are
  // swallowed by `flushThemeOnTeardown` after logging.
  try { await flushThemeOnTeardown(scriptId, activeUserId); }
  catch (err) {
    spindle.log.warn(`[lumiscript] theme teardown push failed for ${disabledName}: ${String(err)}`);
  }
  // v1.0.0-rc.6 — drop this script's `api.scriptStorage` slot. Mirrors the
  // existing `globalThis.__lumiscript_script_<id>_*` sweep convention.
  // Synchronous, no IPC — the map lives module-scope in `engine/api/
  // script-storage.ts`. Fires an `ls:scriptStorage:clear` broadcast if
  // the script had any entries (no-op for scripts that never wrote).
  clearScriptStorageForScript(scriptId);
  logCleanup('tool',  'disabled', disabledName, clearedTools);
  logCleanup('macro', 'disabled', disabledName, clearedMacros);
  logCleanup('rpc',   'disabled', disabledName, clearedRpcEndpoints);
  // Dismiss any advanced modals this script still has open. Marking
  // a pending reason of 'teardown' means the frontend's dismissal
  // echo (ls_modal_dismissed) will fire the script's onDismiss
  // handlers with `reason: 'teardown'` — even though the handlers
  // themselves may have already been collected by ls:teardown.
  for (const modalId of advancedModalsByScript(scriptId)) {
    markModalPendingDismissal(modalId, 'teardown');
    send({ type: 'ls_modal_dismiss', modalId });
  }
  // Destroy any input-bar actions this script still has registered.
  // Unlike modals, there's no dismissal-reason discriminant — input
  // bar actions are fire-and-forget click surfaces. Emit destroy
  // messages so the frontend tears down host state, then drop
  // registry entries in one sweep.
  for (const actionId of listActionsByScript(scriptId)) {
    send({ type: 'ls_input_bar_action_destroy', scriptId, actionId });
  }
  clearActionsByScript(scriptId);
  // Message-tag interceptors — tell the FE to drop each host interceptor, THEN
  // clear the registry (symmetric teardown; otherwise the host interceptor zombies
  // and keeps stripping tags). Handler closures are dropped by the unregister-IPC
  // / script-unregister cleanup separately.
  for (const tag of listTagHandlersByScript(scriptId)) {
    send({ type: 'ls_tag_interceptor_unregister', scriptId, handlerId: tag.id });
  }
  clearTagHandlersByScriptId(scriptId);
  // Destroy any float widgets this script still has open. Same
  // lifecycle shape as input-bar actions — fire-and-forget
  // destroy messages, then drop registry entries via the
  // destroyWidget + dropEntry pair (marking destroyed first so
  // any in-flight drag-end echoes become harmless no-ops).
  for (const widgetId of liveWidgetsByScript(scriptId)) {
    destroyWidgetInRegistry(widgetId);
    send({ type: 'ls_float_widget_destroy', widgetId });
    dropWidgetEntry(widgetId);
  }
  // Destroy any app mounts this script created (same lifecycle as widgets).
  for (const mountId of liveAppMountsByScript(scriptId)) {
    destroyAppMountInRegistry(mountId);
    send({ type: 'ls_app_mount_destroy', mountId });
    dropAppMountEntry(mountId);
  }
  // Destroy any drawer tabs this script has registered. Simple
  // lifecycle like input-bar actions — emit destroy messages,
  // then clear the registry entries.
  for (const tabId of listTabsByScript(scriptId)) {
    send({ type: 'ls_drawer_tab_destroy', scriptId, tabId });
  }
  clearTabsByScript(scriptId);
  clearUiEventHandlersByScript(scriptId);
  cleanupDOMScript(scriptId);
  send({ type: 'dom_cleanup_script', scriptId });
  // Phase 9f-1 — fully unregister the script from the script-runner
  // child. Sends `script-unregister` IPC + clears parent-side
  // per-script tables in host-dispatcher. Mirrors the canonical
  // teardown that the surrounding clearByScriptId / clearXxxByScript
  // calls perform for the rest of the registries.
  unregisterScriptFromChild(scriptId);
  // v1.0 — force-reset the FE's execution indicator for this
  // script. Without this the "Running" dot stays lit indefinitely
  // when a script is disabled mid-flight: the in-flight broadcast
  // handler / trigger run might eventually settle and emit
  // `broadcast-handler-finished` / its own `execution_ended`, but
  // (a) it might genuinely hang if `proxy.cleanup` doesn't unstick
  // a particular await, and (b) even when it does settle the FE
  // shouldn't keep showing "Running" for a script the user just
  // disabled.
  //
  // `idleAfter: true` resets the dot to 'idle' (grey) rather than
  // inferring 'success' (green) from `success: true`. The script
  // didn't really complete a run — the user forcibly stopped it.
  // 'idle' communicates that more truthfully than green-success.
  // A real `execution_ended` arriving later (from a delayed
  // broadcast-handler-finished IPC) will harmlessly re-update
  // the dot to success/error per its actual outcome.
  send({
    type:       'execution_ended',
    scriptId,
    runId:      `disable-cleanup:${scriptId}:${Date.now()}`,
    success:    true,
    duration:   0,
    idleAfter:  true,
  });
}

/**
 * v1.0.0-rc.8 — full per-script state wipe invoked by `fireReload`
 * (manual editor Reload button + autosave-driven reload-on-edit) so the
 * body re-runs into a clean slate. Distinct from `teardownDisabledScript`
 * in three ways:
 *
 *   1. Does NOT fire `ls:teardown` — reload is not a disable; the user
 *      wants the script to keep running, just with new code.
 *   2. Preserves `api.scriptStorage` data — schedulers, persisted UI
 *      state, etc. must survive a reload click. Wiping it would
 *      surprise users (e.g. Lisa scheduler's saved events vanishing
 *      when the author bumps a typo).
 *   3. Preserves `api.theme.*` overrides — body re-run will re-apply
 *      them if it calls `api.theme.*` again; preserving here avoids a
 *      visible flash of base theme between wipe and re-apply.
 *   4. Preserves `collection-handle-cache` — a pure dedup cache that's
 *      cheap to rebuild; preserving avoids unnecessary churn.
 *
 * Pre-rc.8 the partial `clearBroadcastByScriptId` + `clearCommandHandlerByScriptId`
 * + post-run diff cleanup inside `fireReload` left 7 of 13 pinning
 * surfaces leaking across reloads (DOM listeners, modals, float widgets,
 * drawer tabs, input-bar actions, world-info interceptors, injections).
 * Stale handler closures kept firing alongside the freshly-registered
 * ones from the new body — net effect: "Reload doesn't pick up changes,
 * had to toggle the extension to see new code take effect." This helper
 * closes that gap.
 *
 * Mirrors the bulk of `teardownDisabledScript`'s registry sweeps. Future
 * additions to the disable path that introduce new pinning surfaces
 * SHOULD also be added here (with a preserve-across-reload decision).
 */
async function wipeScriptStateForReload(scriptId: string): Promise<void> {
  // Broadcast subs (engine-lifecycle `ls:*` AND user events). Pre-rc.8
  // fireReload already cleared these; folded into the wipe so the
  // sequence is "one helper, one truth" for what reload wipes.
  clearBroadcastByScriptId(scriptId);
  clearCommandHandlerByScriptId(scriptId);
  // Injections — old `api.chat.inject` entries from the previous run
  // would otherwise leak into the next prompt assembly.
  clearByScriptId(scriptId);
  pushInjections();
  // Tools — body re-run will re-register from new code.
  const clearedTools = clearToolsByScriptId(scriptId);
  for (const name of clearedTools) spindle.unregisterTool(name);
  pushTools();
  // Macros.
  const clearedMacros = clearMacrosByScriptId(scriptId);
  for (const name of clearedMacros) {
    try { spindle.unregisterMacro(name); } catch { /* swallow */ }
  }
  // Interceptors + content processors — LumiScript-internal registries,
  // host-side single-registration stays live.
  clearMacroInterceptorsByScriptId(scriptId);
  clearMessageContentProcessorsByScriptId(scriptId);
  clearWorldInfoInterceptorsByScriptId(scriptId);
  // RPC endpoints.
  const clearedRpcEndpoints = clearRpcEndpointsByScriptId(scriptId);
  for (const endpoint of clearedRpcEndpoints) {
    try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
  }
  // Advanced modals — mirror teardownDisabledScript's
  // mark-pending-then-dismiss pattern. The 'teardown' reason on the
  // dismissal echo lets any still-live onDismiss handlers branch on
  // reload-vs-user-dismiss.
  for (const modalId of advancedModalsByScript(scriptId)) {
    markModalPendingDismissal(modalId, 'teardown');
    send({ type: 'ls_modal_dismiss', modalId });
  }
  // Input-bar actions, float widgets, drawer tabs — destroy then drop
  // from the per-script registry.
  for (const actionId of listActionsByScript(scriptId)) {
    send({ type: 'ls_input_bar_action_destroy', scriptId, actionId });
  }
  clearActionsByScript(scriptId);
  // Message-tag interceptors — FE-unregister each, then clear (symmetric teardown).
  for (const tag of listTagHandlersByScript(scriptId)) {
    send({ type: 'ls_tag_interceptor_unregister', scriptId, handlerId: tag.id });
  }
  clearTagHandlersByScriptId(scriptId);
  for (const widgetId of liveWidgetsByScript(scriptId)) {
    destroyWidgetInRegistry(widgetId);
    send({ type: 'ls_float_widget_destroy', widgetId });
    dropWidgetEntry(widgetId);
  }
  // Destroy any app mounts this script created (same lifecycle as widgets).
  for (const mountId of liveAppMountsByScript(scriptId)) {
    destroyAppMountInRegistry(mountId);
    send({ type: 'ls_app_mount_destroy', mountId });
    dropAppMountEntry(mountId);
  }
  for (const tabId of listTabsByScript(scriptId)) {
    send({ type: 'ls_drawer_tab_destroy', scriptId, tabId });
  }
  clearTabsByScript(scriptId);
  clearUiEventHandlersByScript(scriptId);
  // DOM — old injected elements + their listeners from the previous run.
  cleanupDOMScript(scriptId);
  send({ type: 'dom_cleanup_script', scriptId });
  // Script-runner child side — send `script-unregister` so the child
  // wipes its handler closure tables, DOMHandle aliases, and per-script
  // state. The next `runScript` call re-establishes everything fresh.
  // The worker subprocess itself survives: `spawnScriptRunner` is
  // idempotent and the eviction sweep runs on a 60s interval, so the
  // immediate re-dispatch reuses the same worker (preserving its
  // module-init captures + module-level imports for any libraries
  // `script.require()`'d during the previous run — those re-execute
  // anyway if the body re-loads them).
  unregisterScriptFromChild(scriptId);
}

/**
 * Synchronise the trigger registry with the current settings + scripts.
 * Called after any script mutation, settings change, or on first storage load.
 *
 * - If LumiScript is globally disabled: run per-script teardown for every
 *   enabled script (mirrors what `update_script` with `enabled:false`
 *   does, for each script), then remove all spindle.on() subscriptions.
 * - Otherwise: rebuild subscriptions for all enabled trigger scripts.
 */
async function syncTriggers(): Promise<void> {
  if (!settingsStore.isLoaded || !scriptStorage.store.isLoaded) return;
  if (!settingsStore.get().enabled) {
    // v1.0 — full per-script teardown on master-toggle-off. Previously
    // this branch only cleared Spindle event subscriptions via
    // `triggerRegistry.unregisterAll()`; per-script registrations
    // (tools, macros, RPC endpoints, DOM injections, modals, input
    // bar actions, float widgets, drawer tabs, etc.) would persist
    // past the master toggle until the extension fully reloaded.
    // Iterating enabled scripts and running the same teardown that
    // `update_script` does for `enabled:false` removes the asymmetry.
    for (const script of scriptStorage.getScripts()) {
      if (!script.enabled) continue;
      await teardownDisabledScript(script.id, script).catch(err => {
        spindle.log.warn(
          `[LumiScript] master-toggle teardown failed for "${script.name}": ` +
          `${err instanceof Error ? err.message : String(err)}`,
        );
      });
    }
    triggerRegistry.unregisterAll();
    return;
  }
  await triggerRegistry.reloadAll(scriptStorage.getScripts()).catch(err => {
    spindle.log.error(`[LumiScript] syncTriggers failed: ${err instanceof Error ? err.message : String(err)}`);
  });
}

// ─── Assistant thread bootstrap + helpers (v0.30.2) ──────────────────────────

/**
 * One-time boot of the assistant state. Called on the same cold-start path
 * as `triggersInitialized`. Loads the threads index; if any threads exist,
 * loads the most-recently-updated one as active. Otherwise creates a fresh
 * empty thread (not yet persisted — that happens on first user message).
 */
async function bootstrapAssistant(userId: string): Promise<void> {
  if (assistantInitialized) return;
  // Dedupe concurrent callers (the fire-and-forget `void bootstrapAssistant`
  // cold-start vs a near-simultaneous assistant_send / request_assistant_threads)
  // onto a single shared init. Cleared once settled so a retry after a failed
  // boot can run again. (audit C2-02)
  bootstrapInFlight ??= runAssistantBootstrap(userId).finally(() => {
    bootstrapInFlight = null;
  });
  return bootstrapInFlight;
}

async function runAssistantBootstrap(userId: string): Promise<void> {
  try {
    assistantThreadIndex = await loadThreadIndex(userId);
  } catch (err) {
    spindle.log.warn(
      `[LumiScript] assistant: failed to load thread index — starting fresh. ` +
      (err instanceof Error ? err.message : String(err)),
    );
    assistantThreadIndex = [];
  }
  assistantThreadIndex.sort((a, b) => b.updatedAt - a.updatedAt);
  if (assistantThreadIndex.length > 0) {
    const mostRecent = assistantThreadIndex[0]!;
    const loaded = await loadThread(userId, mostRecent.id).catch(() => null);
    if (loaded) {
      activeAssistantThread = loaded;
    } else {
      assistantThreadIndex = removeIndexEntry(assistantThreadIndex, mostRecent.id);
      activeAssistantThread = createNewThread();
    }
  } else {
    activeAssistantThread = createNewThread();
  }
  assistantInitialized = true;
}

function pushAssistantThreads(): void {
  sendAssistant({
    type: 'assistant_threads',
    threads: assistantThreadIndex,
    activeThreadId: activeAssistantThread?.id ?? null,
  });
}

/** Cheap non-crypto hash (djb2) for change-detecting attached-script code
 *  across assistant turns. A collision would only miss one change-flag —
 *  harmless — so cryptographic strength isn't needed. */
function hashScriptCode(code: string): string {
  let h = 5381;
  for (let i = 0; i < code.length; i++) h = (((h << 5) + h) + code.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

async function listAttachableUserFiles(
  userId: string | undefined,
): Promise<Array<{ path: string; name: string; sizeBytes: number }>> {
  let rel: string[] = [];
  try {
    rel = await spindle.userStorage.list(USER_FILES_ROOT, userId);
  } catch {
    return []; // reserved folder doesn't exist yet → nothing attachable
  }
  const out: Array<{ path: string; name: string; sizeBytes: number }> = [];
  for (const r of rel) {
    // list(prefix) returns paths RELATIVE to the prefix (native separators on
    // Windows) — normalize + prepend the reserved root back on.
    const path = USER_FILES_ROOT + normalizeUserPath(r);
    if (!isEligibleUserFile(path)) continue;
    try {
      const st = await spindle.userStorage.stat(path, userId);
      if (!st.exists || !st.isFile || st.sizeBytes > MAX_USER_FILE_BYTES) continue;
      out.push({ path, name: userFileDisplayName(path), sizeBytes: st.sizeBytes });
    } catch { /* skip unreadable / vanished entry */ }
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

function pushActiveThreadLoaded(): void {
  if (!activeAssistantThread) return;
  // Gauge occupancy: the persisted last-turn value if present; else (threads
  // created before occupancy was persisted) a local estimate over the current
  // model-history + the fixed system floor, so the gauge + "Compact now" button
  // still appear on an older chat. Flagged estimated; the next turn refines it.
  let gauge: { lastPromptTokens?: number; lastPromptEstimated?: boolean } = {};
  if (activeAssistantThread.lastPromptTokens !== undefined) {
    gauge = {
      lastPromptTokens: activeAssistantThread.lastPromptTokens,
      lastPromptEstimated: activeAssistantThread.lastPromptEstimated ?? false,
    };
  } else if (activeAssistantThread.messages.some((m) => m.role !== 'system')) {
    const historyTokens = buildModelHistory(activeAssistantThread)
      .reduce((n, m) => n + estimateMessageTokens(m), 0);
    gauge = { lastPromptTokens: estimateSystemFloorTokens() + historyTokens, lastPromptEstimated: true };
  }
  sendAssistant({
    type: 'assistant_thread_loaded',
    threadId: activeAssistantThread.id,
    title:    activeAssistantThread.title,
    messages: activeAssistantThread.messages,
    contextScriptIds: activeAssistantThread.contextScriptIds ?? [],
    contextFilePaths: activeAssistantThread.contextFilePaths ?? [],
    appliedEvents: activeAssistantThread.appliedEvents ?? [],
    ...gauge,
    ...(activeAssistantThread.lastTurnUsage ? { lastTurnUsage: activeAssistantThread.lastTurnUsage } : {}),
    ...(activeAssistantThread.totalUsage ? { totalUsage: activeAssistantThread.totalUsage } : {}),
    ...(activeAssistantThread.compactedThrough !== undefined
      ? { compactedThrough: activeAssistantThread.compactedThrough }
      : {}),
  });
}

/**
 * Compute + push a per-segment token-estimate breakdown of the active thread's
 * context occupancy (corpus / memory / chat / attachments) for the gauge's
 * breakdown popover. ON-DEMAND — the FE requests it when the popover opens. All
 * LOCAL estimates via estimateMessageTokens (the same yardstick as the gauge);
 * informational + best-effort, never throws into the caller.
 */
async function pushContextBreakdown(userId: string): Promise<void> {
  try {
    // Snapshot the thread up front so an await mid-compute can't mix one thread's
    // chat/attachments with another's if the user switches threads meanwhile.
    const thread = activeAssistantThread;
    const corpus = estimateSystemFloorTokens();
    if (!thread) {
      // No active thread — still reply (corpus only) so the FE popover never
      // hangs on its "Calculating…" placeholder.
      sendAssistant({ type: 'assistant_context_breakdown', corpus, memory: 0, chat: 0, attachments: 0 }, userId);
      return;
    }
    let memIndex = '';
    try { memIndex = await loadMemoryIndex(userId); } catch { /* leave empty */ }
    const memory = estimateMessageTokens({ role: 'system', content: buildSessionNotesSection(memIndex) });
    const chat = buildModelHistory(thread).reduce((n, m) => n + estimateMessageTokens(m), 0);
    const attachments = await estimateAttachmentTokens(userId, thread);
    sendAssistant({ type: 'assistant_context_breakdown', corpus, memory, chat, attachments }, userId);
  } catch (err) {
    spindle.log.warn(`[LumiScript] pushContextBreakdown failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}

/** Token estimate for the thread's @-attached scripts (sync) + reserved-folder
 *  files (read fresh). Mirrors how runAssistantTurn folds them into the system
 *  prompt; best-effort per item so one unreadable file doesn't drop the rest. */
async function estimateAttachmentTokens(userId: string, thread: AssistantThread): Promise<number> {
  let total = 0;
  const scriptIds = new Set(thread.contextScriptIds ?? []);
  if (scriptIds.size > 0) {
    for (const sc of scriptStorage.getScripts()) {
      if (scriptIds.has(sc.id)) total += estimateMessageTokens({ role: 'user', content: sc.code.slice(0, ATTACHED_SCRIPT_CODE_CAP) });
    }
  }
  for (const rawPath of thread.contextFilePaths ?? []) {
    try {
      const path = normalizeUserPath(rawPath);
      if (!isEligibleUserFile(path)) continue;
      const st = await spindle.userStorage.stat(path, userId);
      if (!st.exists || !st.isFile || st.sizeBytes > MAX_USER_FILE_BYTES) continue;
      const content = await spindle.userStorage.read(path, userId);
      total += estimateMessageTokens({ role: 'user', content: content.slice(0, ATTACHED_FILE_TEXT_CAP) });
    } catch { /* skip unreadable / vanished file */ }
  }
  return total;
}

/** Push the user's current memory notes to the Memory panel. Best-effort —
 *  sends an empty list on a read failure rather than breaking the panel. */
async function pushAssistantMemory(userId: string): Promise<void> {
  try {
    sendAssistant({ type: 'assistant_memory', notes: await loadMemoryNotes(userId) }, userId);
  } catch (err) {
    spindle.log.warn(`[LumiScript] pushAssistantMemory failed: ${err instanceof Error ? err.message : String(err)}`);
    sendAssistant({ type: 'assistant_memory', notes: [] }, userId);
  }
}

/** Record an "Apply to script" event on the active thread (parallel to
 *  `messages`, never sent to the LLM) so it renders as a transcript marker and
 *  survives reload. Anchored after the current message count. No-op without an
 *  active thread / user. */
function recordAppliedEvent(
  name: string,
  type: import('./types/script.js').ScriptType,
  updated: boolean,
): void {
  if (!activeAssistantThread || !activeUserId) return;
  (activeAssistantThread.appliedEvents ??= []).push({
    afterMessageCount: activeAssistantThread.messages.length,
    scriptName: name,
    scriptType: type,
    updated,
  });
  void persistActiveThread(activeUserId);
}

async function persistActiveThread(userId: string): Promise<void> {
  if (!activeAssistantThread) return;
  const hasContent = activeAssistantThread.messages.some((m) => m.role !== 'system');
  if (!hasContent) return;
  try {
    const saved = await saveThread(userId, activeAssistantThread);
    activeAssistantThread = saved;
    const entry = buildIndexEntry(saved);
    assistantThreadIndex = upsertIndexEntry(assistantThreadIndex, entry);
    await saveThreadIndex(userId, assistantThreadIndex);
    pushAssistantThreads();
  } catch (err) {
    spindle.log.warn(
      `[LumiScript] assistant: failed to persist thread ${activeAssistantThread.id} — ` +
      (err instanceof Error ? err.message : String(err)),
    );
  }
}

// ─── Diagnostics collection ─────────────────────────────────────────────────

/**
 * Collect a full backend diagnostics report — runs the async probes (storage
 * round-trip, script-runner stats IPC, per-worker memory, assistant subsystem,
 * host versions) and folds them into the synchronous `collectBackendDiagnostics`.
 * Shared by the `request_diagnostics` FE handler and the Lisa `read_diagnostics`
 * tool so both observe identical runtime state.
 *
 * `userId` scopes the per-user probes (storage + assistant); when undefined those
 * sections render their "Not probed" rows. In the FE handler the message `userId`
 * equals `activeUserId`, so this is behaviour-identical to the prior inline code.
 */
async function runDiagnostics(userId: string | undefined): Promise<DiagnosticsReport> {
  // Storage probe — small round-trip read on scripts.json to time userStorage.
  // Already loaded by the time this fires, so this is just a "can we still read?".
  const storageStart = Date.now();
  const storageProbe = await spindle.userStorage.getJson('scripts.json', { userId })
    .then(() => ({ ok: true as const, latencyMs: Date.now() - storageStart }))
    .catch((err: unknown) => ({
      ok: false as const,
      error: err instanceof Error ? err.message : String(err),
    }));

  // Script-runner: sync health snapshot + async resource-stats IPC.
  // queryRunnerStats has its own internal 2s timeout; null means the child
  // either timed out or wasn't alive. Worker-pool diagnostics: sync state plus
  // async parallel per-worker memory queries (each bounded by a 2s timeout).
  const runnerHealth = getRunnerHealth();
  const runnerStats  = await queryRunnerStats();
  const poolSnapshot = getWorkerPoolDiagnostics();
  const perWorkerRss = await Promise.all(
    poolSnapshot.workers.map(async (w) => ({
      workerKey: w.workerKey,
      rss:       await queryWorkerMemoryBytes(w.workerKey),
    })),
  );
  const rssByWorker = new Map<string, number | null>(
    perWorkerRss.map((r) => [r.workerKey, r.rss]),
  );
  const scriptRunner: ScriptRunnerProbeResult = {
    ...runnerHealth,
    stats: runnerStats === null
      ? null
      : {
          rss:         runnerStats.rss,
          heapTotal:   runnerStats.heapTotal,
          heapUsed:    runnerStats.heapUsed,
          external:    runnerStats.external,
          cpuUserUs:   runnerStats.cpuUserUs,
          cpuSystemUs: runnerStats.cpuSystemUs,
          uptimeSec:   runnerStats.uptimeSec,
        },
    pool: {
      configuredWorkerCount: poolSnapshot.configuredWorkerCount,
      workers: poolSnapshot.workers.map((w) => ({
        workerKey:             w.workerKey,
        processId:             w.processId,
        lastActivityMs:        w.lastActivityMs,
        assignedScriptCount:   w.assignedScriptCount,
        assignedScripts:       w.assignedScripts,
        restartAttempts:       w.restartAttempts,
        rss:                   rssByWorker.get(w.workerKey) ?? null,
        pinnedByRegistrations: w.pinnedByRegistrations,
        pinningScripts:        w.pinningScripts,
      })),
      totalAssignedScripts: poolSnapshot.totalAssignedScripts,
      evictionTelemetry:    poolSnapshot.evictionTelemetry,
      settings:             poolSnapshot.settings,
    },
  };

  // Assistant probe — bundles the four "Assistant (Lisa)" checks. Skipped when
  // there's no active user (userStorage rejects without an id; the collector
  // renders the "Not probed" info row instead).
  let assistantProbe: AssistantProbeResult | undefined;
  if (userId) {
    const userIdForProbe = userId;
    const corpusEntries = Object.keys(LOOKUP_TABLE).length;

    // Thread-storage probe. Index load is the gate; per-thread reads are
    // best-effort (allSettled) — a single corrupted thread shouldn't disqualify
    // the others. Sum bytes + tally readable from the fulfilled subset, surface
    // the first per-thread error for context.
    let indexLoaded     = false;
    let threadsIndexed  = 0;
    let threadsReadable = 0;
    let totalBytes      = 0;
    let storageError: string | undefined;
    try {
      const index = await loadThreadIndex(userIdForProbe);
      indexLoaded    = true;
      threadsIndexed = index.length;
      const reads = await Promise.allSettled(
        index.map((entry) =>
          spindle.userStorage.getJson<unknown>(
            `assistant/threads/${entry.id}.json`,
            { fallback: null, userId: userIdForProbe },
          ).then((body) => {
            if (body === null) throw new Error('thread file missing');
            // Re-serialise to estimate on-disk byte cost (host parsed for us).
            totalBytes += JSON.stringify(body).length;
            threadsReadable += 1;
          }),
        ),
      );
      const firstFailure = reads.find((r) => r.status === 'rejected');
      if (firstFailure && firstFailure.status === 'rejected') {
        const reasonMsg = firstFailure.reason instanceof Error
          ? firstFailure.reason.message
          : String(firstFailure.reason);
        storageError =
          `${threadsIndexed - threadsReadable} thread file(s) unreadable; first error: ${reasonMsg}`;
      }
    } catch (err) {
      storageError = err instanceof Error ? err.message : String(err);
    }

    // Connections probe — same spindle.connections.list the modal picker uses.
    let connectionsCount = 0;
    let defaultName:     string | undefined;
    let defaultModel:    string | undefined;
    let defaultProvider: string | undefined;
    try {
      const list = await spindle.connections.list(userIdForProbe);
      connectionsCount = list.length;
      const dflt = list.find((conn) => conn.is_default);
      if (dflt) {
        defaultName     = dflt.name;
        defaultModel    = dflt.model;
        defaultProvider = dflt.provider;
      }
    } catch (err) {
      spindle.log.warn(
        `[LumiScript] diagnostics: connections probe failed: ` +
        (err instanceof Error ? err.message : String(err)),
      );
    }

    const s = settingsStore.get();
    assistantProbe = {
      initialised: assistantInitialized,
      corpusEntries,
      storage: {
        indexLoaded,
        threadsIndexed,
        threadsReadable,
        totalBytes,
        ...(storageError ? { error: storageError } : {}),
      },
      connections: {
        count: connectionsCount,
        ...(defaultName     ? { defaultName     } : {}),
        ...(defaultModel    ? { defaultModel    } : {}),
        ...(defaultProvider ? { defaultProvider } : {}),
      },
      settings: {
        maxIterations: s.assistantMaxIterations,
        ...(s.assistantTemperature !== undefined ? { temperature: s.assistantTemperature } : {}),
        ...(s.assistantTopP        !== undefined ? { topP:        s.assistantTopP        } : {}),
        ...(s.assistantMaxTokens   !== undefined ? { maxTokens:   s.assistantMaxTokens   } : {}),
        parallelToolCalls: s.assistantParallelToolCalls,
      },
    };
  }

  // Host versions via the free-tier spindle.version.* surface (host bf974cfb+).
  // Wrapped in try/catch — older hosts predating this surface throw; diagnostics
  // still work, just without the explicit version rows.
  let lumiverseVersions: { backend: string; frontend: string } | undefined;
  try {
    const [backendVersion, frontendVersion] = await Promise.all([
      spindle.version.getBackend(),
      spindle.version.getFrontend(),
    ]);
    lumiverseVersions = { backend: backendVersion, frontend: frontendVersion };
  } catch (err) {
    spindle.log.warn(
      `[LumiScript] diagnostics: spindle.version probe failed ` +
      `(host probably predates the API) — ` +
      `${err instanceof Error ? err.message : String(err)}`,
    );
  }

  return collectBackendDiagnostics({
    scriptStorage,
    triggerRegistry,
    lumiScriptVersion:   spindle.manifest.version,
    minLumiverseVersion: spindle.manifest.minimum_lumiverse_version ?? '0.0.0',
    ...(lumiverseVersions !== undefined ? { lumiverseVersions } : {}),
    grantedPermissions:  [...grantedPermissions],
    activeUserId:        userId ?? null,
    storageProbe,
    scriptRunner,
    assistantProbe,
  });
}

// ─── Frontend message handler ─────────────────────────────────────────────────

let triggersInitialized = false;

spindle.onFrontendMessage(async (raw, userId) => {
  activeUserId = userId;

  // Lazy-load storage on the first message so userId is known before any read or write.
  // This matches the pattern used by other Lumiverse extensions (e.g. silly_sim_tracker)
  // and avoids a read/write path mismatch caused by loading before userId is available.
  // Loads are independent so we run them in parallel to minimise the "status dot
  // green" latency observable at cold start.
  const loadPromises: Promise<unknown>[] = [];
  if (!settingsStore.isLoaded) loadPromises.push(settingsStore.load());
  if (!scriptStorage.store.isLoaded) loadPromises.push(scriptStorage.load());
  if (loadPromises.length > 0) {
    // Host userStorage I/O can reject at cold start; catch so this async
    // onFrontendMessage handler can't leak an unhandled rejection — the cold-
    // start block runs BEFORE the switch's try/catch, and the backend has no
    // global unhandledRejection guard.
    await Promise.all(loadPromises).catch((err) => {
      spindle.log.warn(`[LumiScript] cold-start storage load failed: ${err instanceof Error ? err.message : String(err)}`);
    });
    // Reconcile the {{lumiScriptActive}} macro with the just-loaded settings.
    // The macro was registered at module scope with the default (enabled=true);
    // if the user had persisted `enabled: false`, push it through now.
    updateLumiScriptActiveMacro(settingsStore.get().enabled);
  }

  // Register trigger handlers on the first message once storage is ready.
  // refreshActiveContext runs in parallel with the trigger/tool registration
  // passes because neither sync step reads the active-context state — bindings
  // only fire on subsequent Lumiverse events, by which point the awaited
  // context has already landed.
  //
  // `justInitialized` captures whether THIS invocation ran the cold-start
  // block, so the `frontend_ready` handler below can distinguish cold start
  // (nothing to replay — scripts haven't registered yet) from a refresh
  // reconnect (worker survived, registries populated, replay required).
  const justInitialized = !triggersInitialized;
  if (!triggersInitialized) {
    triggersInitialized = true;
    const contextPromise = refreshActiveContext(activeUserId);
    void syncTriggers();
    // Bootstrap the assistant's thread state at the same time — independent
    // of triggers, can run in parallel. Fire-and-forget; on failure we'll
    // lazily retry on the next assistant interaction.
    void bootstrapAssistant(activeUserId);
    await contextPromise.catch((err) => {
      spindle.log.warn(`[LumiScript] cold-start active-context load failed: ${err instanceof Error ? err.message : String(err)}`);
    });
    publishActiveCharId();
    // Verify the host meets our minimum Lumiverse version (declared in
    // spindle.json). Fire-and-forget: warns via toast + log if the host
    // is too old, silent otherwise. Hooked here rather than module scope
    // so the toast reaches a live frontend (we know it is — this block
    // only runs on first frontend message).
    void checkMinimumHostVersion();

    // ─── Spawn script-runner child ─────────────────────────────────────
    // Spawns the supervised subprocess that user scripts execute inside.
    // Hooked here (not in the module-load init IIFE) because
    // `spindle.backendProcesses.spawn` requires a userId even for user-
    // scoped extensions, and `activeUserId` is only populated on the
    // first frontend message arrival.
    //
    // Failure is non-fatal — `spawnScriptRunner` rejection is logged and
    // dropped here. Subsequent script runs that try to dispatch through
    // an absent child will surface clean errors at dispatch time. This
    // is rare in practice; the spawn itself is well-tested on cold start.
    if (activeUserId) {
      void spawnScriptRunner(activeUserId).catch((err) => {
        spindle.log.warn(
          `[script-runner] cold-start spawn failed: ${err instanceof Error ? err.message : String(err)}`,
        );
      });
    } else {
      spindle.log.warn(
        '[script-runner] skipped cold-start spawn — no activeUserId on first frontend message; ' +
        'this is unexpected and warrants investigation',
      );
    }
  }

  const msg = raw as FrontendToBackend;

  try {
    switch (msg.type) {
      // ── Frontend lifecycle ──────────────────────────────────────────────
      case 'frontend_ready': {
        // On cold start, the init block above this switch already ran and
        // registries are still empty (user scripts register asynchronously
        // via `ls:startup`). Nothing to replay.
        //
        // On reconnect (browser refresh — worker survived), `triggersInitialized`
        // was already true when this handler started, so `justInitialized` is
        // false. Walk the per-registry replay builders and re-emit every
        // live registration so input-bar actions, drawer tabs, float widgets,
        // and DOM injections come back without user-script code re-running.
        //
        // Modals + in-flight prompt()/confirm()/showContextMenu() do NOT
        // replay — refresh is treated as user-interrupt on those (correct UX).
        if (!justInitialized) {
          for (const replayMsg of buildReplayMessages()) send(replayMsg);
        }
        break;
      }

      // ── Read ────────────────────────────────────────────────────────────
      case 'get_scripts': {
        pushScripts();
        break;
      }

      case 'get_settings': {
        pushSettings();
        // Lazily check for updates once per session (when the user actually
        // has the panel open so they can see the toast notification).
        if (!_updateCheckDone) {
          _updateCheckDone = true;
          void checkForUpdates();
        }
        break;
      }

      case 'get_injections': {
        pushInjections();
        break;
      }

      case 'get_tools': {
        pushTools();
        break;
      }

      case 'get_variables': {
        await pushVariables(userId);
        break;
      }

      // ── Diagnostics panel (v0.28.0+) ────────────────────────────────────
      case 'request_diagnostics': {
        const report = await runDiagnostics(userId);
        spindle.sendToFrontend({ type: 'diagnostics_report', report });
        break;
      }

      // ── In-app assistant ────────────────────────────────────────────────
      case 'assistant_send': {
        // Single-flight guard (audit C2-01): if a turn is already streaming
        // (assistantAbortController set), refuse rather than overwrite it.
        // Overwriting orphans turn-1's abort, lets turn-1's finally null the
        // controller mid-turn-2, and races two saveThread writes onto one
        // thread file. The FE also blocks concurrent sends; this enforces the
        // invariant backend-side, mirroring assistant_compact (2031) /
        // assistant_switch_thread (2232).
        if (assistantAbortController) {
          sendAssistant({
            type: 'assistant_error',
            error: 'Busy generating — wait for the current reply to finish.',
          });
          break;
        }
        // Skip the user-turn echo on retry / edit-resend: the bubble is already
        // shown on the FE (retry kept it in place; edit-resend updated it), so
        // re-echoing would duplicate it.
        if (!msg.isRetry && !msg.editLast) {
          sendAssistant({ type: 'assistant_user_turn', content: msg.content });
        }
        if (!activeUserId) {
          sendAssistant({
            type: 'assistant_error',
            error: 'Assistant unavailable: no active user. Make sure Lumiverse has finished loading before opening Lisa.',
          });
          break;
        }
        if (!assistantInitialized) await bootstrapAssistant(activeUserId);
        // C2-01 cold-start completion: the busy-guard above ran BEFORE the
        // bootstrap `await`, so on cold start two near-simultaneous sends can
        // both pass it (controller still null) and both await the SAME bootstrap
        // promise (shared via the C2-02 memoization). Re-check here: the first
        // send to resume runs synchronously from this point through the
        // controller-set below (no await in between), so the second resumes to a
        // non-null controller and is refused — closing the same double-controller
        // / racing-saveThread race the guard targets. In steady state the await
        // above is skipped, so this re-check is a cheap no-op.
        if (assistantAbortController) {
          sendAssistant({
            type: 'assistant_error',
            error: 'Busy generating — wait for the current reply to finish.',
          });
          break;
        }
        if (!activeAssistantThread) {
          sendAssistant({
            type: 'assistant_error',
            error: 'Assistant unavailable: failed to initialise thread state.',
          });
          break;
        }
        // Edit-and-resend: the prior turn succeeded and is persisted, so drop the
        // last user turn + everything after it (its assistant reply + any tool
        // turns) before regenerating with the edited `content`. Cut only at a real
        // user-turn boundary (role 'user' + string content) so tool_use/tool_result
        // pairs are never split. (The FE only sends editLast when the last user
        // turn already has an assistant reply, so a match always exists.)
        if (msg.editLast) {
          const hist = activeAssistantThread.messages;
          let cut = -1;
          for (let i = hist.length - 1; i >= 0; i--) {
            const h = hist[i];
            if (h && h.role === 'user' && typeof h.content === 'string') { cut = i; break; }
          }
          if (cut !== -1) {
            activeAssistantThread.messages = hist.slice(0, cut);
            // If the trim reached into or before the compaction boundary, the
            // handoff + compactedThrough no longer describe messages[0..K) — drop
            // the compaction state so the boundary can't go stale (the next
            // auto-compact rebuilds it). When `cut` is safely after the boundary,
            // the compacted prefix is untouched, so the state is kept.
            if (
              activeAssistantThread.compactedThrough !== undefined &&
              cut <= activeAssistantThread.compactedThrough
            ) {
              activeAssistantThread.compactedThrough = undefined;
              activeAssistantThread.handoff = undefined;
            }
          }
        }
        // Title derivation on first user message in a brand-new thread.
        const isFirstUserMessage =
          activeAssistantThread.messages.filter((m) => m.role !== 'system').length === 0;
        if (isFirstUserMessage) {
          activeAssistantThread.title = deriveTitle(msg.content);
        }
        assistantAbortController = new AbortController();
        assistantStreamedContent = '';
        let aborted = false;
        // Coalesce streamed tokens/reasoning into ~30Hz batches instead of one
        // WS frame per token (see ASSISTANT_TOKEN_COALESCE_MS). Buffers are
        // flushed on the timer, before each tool chip, and before any terminal
        // message; the timer is cleared in `finally` so no stray frame escapes.
        let tokenBatch = '';
        let reasoningBatch = '';
        let assistantBatchTimer: ReturnType<typeof setTimeout> | null = null;
        const flushAssistantBatches = () => {
          if (assistantBatchTimer !== null) {
            clearTimeout(assistantBatchTimer);
            assistantBatchTimer = null;
          }
          if (tokenBatch) {
            sendAssistant({ type: 'assistant_token', token: tokenBatch });
            tokenBatch = '';
          }
          if (reasoningBatch) {
            sendAssistant({ type: 'assistant_reasoning', token: reasoningBatch });
            reasoningBatch = '';
          }
        };
        const scheduleAssistantBatchFlush = () => {
          if (assistantBatchTimer !== null) return;
          assistantBatchTimer = setTimeout(flushAssistantBatches, ASSISTANT_TOKEN_COALESCE_MS);
        };
        try {
          // Generation parameter defaults from settings. Optional numeric
          // fields pass through only when explicitly set ("blank = use
          // connection default" semantic). `parallel_tool_calls=true` is
          // also the host's default — we still send it explicitly so
          // settings-driven `false` always wins over connection presets.
          const s = settingsStore.get();
          const parameters: Record<string, unknown> = {};
          if (typeof s.assistantTemperature === 'number') parameters.temperature       = s.assistantTemperature;
          if (typeof s.assistantTopP        === 'number') parameters.top_p             = s.assistantTopP;
          if (typeof s.assistantMaxTokens   === 'number') parameters.max_tokens        = s.assistantMaxTokens;
          parameters.parallel_tool_calls = s.assistantParallelToolCalls;

          // Resolve @-mentioned script IDs to their CURRENT code for read-
          // context. Re-resolved fresh on every send (never persisted into
          // thread history), so edits the user makes between turns are always
          // reflected. Unknown IDs (e.g. deleted since attaching) are skipped.
          const allScriptsForContext = scriptStorage.getScripts();
          // Per-thread change detection: compare each attached script's current
          // code hash to the baseline from the last turn it was shown. A script
          // whose hash differs (and had a prior baseline) is flagged `changed`,
          // so the agent notes it — covers both the user applying a suggestion
          // and a manual edit between turns. First-seen scripts get no flag.
          const prevSeenHashes = activeAssistantThread.seenScriptHashes ?? {};
          const nextSeenHashes: Record<string, string> = {};
          const attachedScripts = (msg.contextScriptIds ?? [])
            .map((id) => allScriptsForContext.find((sc) => sc.id === id))
            .filter((sc): sc is NonNullable<typeof sc> => sc != null)
            .map((sc) => {
              const hash = hashScriptCode(sc.code);
              nextSeenHashes[sc.id] = hash;
              const prior = prevSeenHashes[sc.id];
              return {
                id: sc.id, name: sc.name, type: sc.type, code: sc.code,
                changed: prior !== undefined && prior !== hash,
              };
            });
          // Persist the context set + the new seen-hash baseline onto the thread
          // (persistActiveThread runs after the turn). contextScriptIds restores
          // the chip tray on reload; seenScriptHashes makes change-detection
          // survive reload. Baseline tracks only currently-attached scripts.
          activeAssistantThread.contextScriptIds = msg.contextScriptIds ?? [];
          activeAssistantThread.seenScriptHashes = nextSeenHashes;

          // Resolve @-attached user files (reserved "userfiles/" folder). Read
          // fresh each turn via userStorage so edits reflect; eligibility-gated
          // (root + extension) + size-capped; unknown/oversized/unreadable paths
          // are skipped. Hashed for change-detection, mirroring scripts.
          const prevSeenFileHashes = activeAssistantThread.seenFileHashes ?? {};
          const nextSeenFileHashes: Record<string, string> = {};
          const attachedFiles: { path: string; content: string; changed: boolean }[] = [];
          for (const rawPath of (msg.contextFilePaths ?? [])) {
            const path = normalizeUserPath(rawPath);
            if (!isEligibleUserFile(path)) continue;
            try {
              const st = await spindle.userStorage.stat(path, activeUserId ?? undefined);
              if (!st.exists || !st.isFile || st.sizeBytes > MAX_USER_FILE_BYTES) continue;
              const content = await spindle.userStorage.read(path, activeUserId ?? undefined);
              const hash = hashScriptCode(content);
              nextSeenFileHashes[path] = hash;
              const prior = prevSeenFileHashes[path];
              attachedFiles.push({ path, content, changed: prior !== undefined && prior !== hash });
            } catch { /* skip unreadable / vanished file */ }
          }
          activeAssistantThread.contextFilePaths = msg.contextFilePaths ?? [];
          activeAssistantThread.seenFileHashes = nextSeenFileHashes;

          // Load this user's memory index (hooks) for the SESSION NOTES section.
          // Best-effort — a memory read failure must never break a turn.
          let memIndexStr = '';
          try { memIndexStr = await loadMemoryIndex(activeUserId); } catch { /* leave empty */ }

          // Auto-compaction (pre-turn): if the PREVIOUS turn left the context over
          // the threshold, fold the older prefix into a handoff summary BEFORE this
          // turn so it starts lean. Runs while the composer is disabled (the FE
          // blocks concurrent sends during generation) — so there's no re-entrancy
          // window — and shares this turn's abort signal. Opt-out via setting;
          // preserve-on-failure (compactThread returns null on any error) so it can
          // never lose data or block the turn. The gauge refreshes naturally from
          // THIS turn's assistant_completed (no separate event needed for auto).
          if (
            s.assistantAutoCompact &&
            (activeAssistantThread.lastPromptTokens ?? 0) >=
              s.assistantContextTokens * AUTO_COMPACT_THRESHOLD
          ) {
            const compacted = await compactThread(activeAssistantThread, {
              userId: activeUserId,
              budget: s.assistantContextTokens,
              signal: assistantAbortController.signal,
              ...(msg.connectionId ? { connectionId: msg.connectionId } : {}),
            });
            if (compacted) {
              activeAssistantThread.compactedThrough = compacted.compactedThrough;
              activeAssistantThread.handoff = compacted.handoff;
              // Tell the FE so the gauge drops now (the "compacted here" divider
              // appears on the next thread reload). This turn's assistant_completed
              // then refines the gauge to the real post-compaction occupancy.
              sendAssistant({
                type: 'assistant_compacted',
                ok: true,
                occupancyTokens: compacted.occupancyTokens,
                estimated: true,
                compactedThrough: compacted.compactedThrough,
              });
            }
          }

          // Model-facing prior history — derived from the thread (reflecting any
          // compaction just applied) so the LLM's view is shrunk without touching
          // the full persisted/displayed `messages`. Hoisted so its length lets us
          // recover this turn's NEW messages (the delta) below, instead of writing
          // the derived view back — which would round-trip a synthetic handoff into
          // the canonical record (the v1.1 data-loss class).
          const modelHistory = buildModelHistory(activeAssistantThread);
          const result = await runAssistantTurn(
            {
              history: modelHistory,
              userInput: msg.content,
              userId: activeUserId,
              // Lets the `read_diagnostics` tool pull live runtime state through
              // the same collection path the Settings "View Diagnostics" panel uses.
              collectDiagnostics: () => runDiagnostics(userId).then(compactDiagnostics),
              // Read-only view of the active user's library for list_scripts /
              // read_script — reads the per-user scriptStorage live each call.
              scriptLibrary: {
                list: () => scriptStorage.getScripts().map((sc) => ({
                  id: sc.id, name: sc.name, type: sc.type, enabled: sc.enabled,
                })),
                read: (id: string) => {
                  const sc = scriptStorage.getScript(id);
                  return sc
                    ? { id: sc.id, name: sc.name, type: sc.type, enabled: sc.enabled, code: sc.code }
                    : null;
                },
              },
              maxIterations: s.assistantMaxIterations,
              contextTokens: s.assistantContextTokens,
              promptCaching: s.assistantPromptCaching,
              signal: assistantAbortController.signal,
              parameters,
              ...(msg.connectionId ? { connectionId: msg.connectionId } : {}),
              ...(attachedScripts.length > 0 ? { attachedScripts } : {}),
              ...(attachedFiles.length > 0 ? { attachedFiles } : {}),
              ...(memIndexStr ? { memoryIndex: memIndexStr } : {}),
            },
            {
              onToken: (token) => {
                assistantStreamedContent += token;
                tokenBatch += token;
                scheduleAssistantBatchFlush();
              },
              onReasoning: (token) => {
                reasoningBatch += token;
                scheduleAssistantBatchFlush();
              },
              onToolCall: (ev) => {
                // Deliver any buffered tokens before the tool chip so the
                // transcript's text→tool-call order is preserved.
                flushAssistantBatches();
                sendAssistant({
                  type:    'assistant_tool_call',
                  callId:  ev.callId,
                  name:    ev.name,
                  args:    ev.args,
                  result:  ev.result,
                  isError: ev.isError,
                });
              },
              onAborted: () => { aborted = true; },
            },
          );
          // Flush any tokens/reasoning still buffered so the frontend's
          // streaming preview + reasoning are complete before assistant_completed
          // (which reads the accumulated reasoning) replaces the live bubble.
          flushAssistantBatches();
          // Append only this turn's NEW messages (everything past the model-facing
          // history we sent) to the CANONICAL full thread — never replace it with
          // result.messages, which is the derived/compacted view. Replacing would
          // round-trip the synthetic handoff into storage AND drop the folded
          // prefix (the v1.1 data-loss class). The system turn never enters the
          // record, so the role!=='system' filter is just defensive.
          activeAssistantThread.messages = [
            ...activeAssistantThread.messages,
            ...result.messages.slice(modelHistory.length).filter((m) => m.role !== 'system'),
          ];
          // Persist this turn's prompt-token count for the context-fullness gauge
          // (replayed on thread load). Only update when usage was resolved — an
          // unreported turn leaves the prior value rather than blanking the gauge.
          if (result.usage) {
            activeAssistantThread.lastPromptTokens = result.usage.occupancyTokens ?? result.usage.promptTokens;
            activeAssistantThread.lastPromptEstimated = result.usage.estimated ?? false;
            // Persist the strip's in/out + a lifetime running total so they survive
            // thread switches / modal reopen (like the gauge), not just the session.
            const u = result.usage;
            activeAssistantThread.lastTurnUsage = {
              promptTokens: u.promptTokens,
              completionTokens: u.completionTokens,
              totalTokens: u.totalTokens,
              ...(u.estimated ? { estimated: true } : {}),
            };
            const prev = activeAssistantThread.totalUsage;
            activeAssistantThread.totalUsage = {
              promptTokens: (prev?.promptTokens ?? 0) + u.promptTokens,
              completionTokens: (prev?.completionTokens ?? 0) + u.completionTokens,
              totalTokens: (prev?.totalTokens ?? 0) + u.totalTokens,
              ...((prev?.estimated || u.estimated) ? { estimated: true } : {}),
            };
          }
          sendAssistant({
            type:    'assistant_completed',
            content: result.content,
            ...(result.usage ? { usage: result.usage } : {}),
          });
          void persistActiveThread(activeUserId);
        } catch (err) {
          // Flush buffered tokens/reasoning before the terminal message —
          // assistant_aborted reconstructs from the streamed reasoning the FE
          // accumulated, so it must arrive first.
          flushAssistantBatches();
          if (aborted) {
            sendAssistant({
              type:    'assistant_aborted',
              content: assistantStreamedContent,
            });
          } else {
            const errMsg = err instanceof Error ? err.message : String(err);
            spindle.log.warn(`[LumiScript] assistant_send failed: ${errMsg}`);
            sendAssistant({ type: 'assistant_error', error: errMsg });
          }
        } finally {
          if (assistantBatchTimer !== null) {
            clearTimeout(assistantBatchTimer);
            assistantBatchTimer = null;
          }
          assistantAbortController = null;
          assistantStreamedContent = '';
        }
        break;
      }

      case 'request_context_breakdown': {
        if (activeUserId) void pushContextBreakdown(activeUserId);
        break;
      }

      case 'assistant_compact': {
        if (!activeUserId || !activeAssistantThread) {
          // No active thread (e.g. not-yet / failed bootstrap after a reconnect).
          // Reply anyway so the FE clears its "compacting" spinner.
          sendAssistant({ type: 'assistant_compacted', ok: false, error: 'Assistant not ready yet — try again in a moment.' });
          break;
        }
        // Refuse mid-generation — a concurrent turn would race the thread state.
        // (The FE also disables the button while a turn is streaming.)
        if (assistantAbortController) {
          sendAssistant({ type: 'assistant_compacted', ok: false, error: 'Busy generating — try again in a moment.' });
          break;
        }
        const cs = settingsStore.get();
        // C2-03 — advertise compaction as in-flight so the C2-01 assistant_send
        // busy-guard (which checks `assistantAbortController`) refuses a send
        // arriving during the ~1-3s compact LLM call. Without this, compact sets
        // no controller, the send isn't refused, and the two race a saveThread
        // write onto one thread file. We reuse assistantAbortController purely as
        // the in-flight marker the send guard already reads; compactThread isn't
        // wired to the signal, so an abort during compaction stays a no-op
        // (unchanged behaviour). MUST clear in `finally` — a thrown compact that
        // left it set would wedge every future send.
        assistantAbortController = new AbortController();
        try {
          // Capture the target thread: compactThread awaits a ~1-3s LLM call, during
          // which the user could switch threads. If the active thread changed by the
          // time we resolve, discard rather than write thread A's handoff onto B.
          const target = activeAssistantThread;
          const compacted = await compactThread(target, {
            userId: activeUserId,
            budget: cs.assistantContextTokens,
            ...(msg.connectionId ? { connectionId: msg.connectionId } : {}),
          });
          if (activeAssistantThread !== target) {
            sendAssistant({ type: 'assistant_compacted', ok: false, error: 'Conversation changed — compaction cancelled.' });
            break;
          }
          if (compacted) {
            target.compactedThrough = compacted.compactedThrough;
            target.handoff = compacted.handoff;
            target.lastPromptTokens = compacted.occupancyTokens;
            target.lastPromptEstimated = true;
            await persistActiveThread(activeUserId);
            sendAssistant({
              type: 'assistant_compacted',
              ok: true,
              occupancyTokens: compacted.occupancyTokens,
              estimated: true,
              compactedThrough: compacted.compactedThrough,
            });
          } else {
            sendAssistant({ type: 'assistant_compacted', ok: false, error: 'Nothing old enough to compact yet — Lisa folds older messages to free space once a conversation grows (and auto-runs near full). Keep chatting and it\'ll become available.' });
          }
        } finally {
          assistantAbortController = null;
        }
        break;
      }

      case 'assistant_reset':
      case 'assistant_new_thread': {
        if (!activeUserId) break;
        if (!assistantInitialized) await bootstrapAssistant(activeUserId);
        activeAssistantThread = createNewThread();
        pushAssistantThreads();
        pushActiveThreadLoaded();
        break;
      }

      // Persist the active thread's attached-script context set (chip tray).
      // Fired by the frontend on attach/detach so the set survives reload even
      // without a send. Only persists once the thread has content — an empty
      // brand-new thread holds the set in memory until its first message
      // (avoids littering storage with never-used thread files).
      case 'assistant_set_context': {
        if (!activeUserId || !assistantInitialized || !activeAssistantThread) break;
        activeAssistantThread.contextScriptIds = msg.scriptIds;
        activeAssistantThread.contextFilePaths = msg.filePaths ?? [];
        // Context-only persist: write the body WITHOUT bumping updatedAt or
        // touching the index — toggling a chip shouldn't reorder the sidebar or
        // count as thread activity. Only persists once the thread has content
        // (mirrors persistActiveThread; empty new threads hold the set in memory
        // until their first message). saveThread with bumpUpdatedAt:false returns
        // the same object, so no reassignment / switch-race concern.
        if (activeAssistantThread.messages.some((m) => m.role !== 'system')) {
          void saveThread(activeUserId, activeAssistantThread, { bumpUpdatedAt: false })
            .catch((err) => spindle.log.warn(
              `[LumiScript] assistant_set_context persist failed: ` +
              (err instanceof Error ? err.message : String(err)),
            ));
        }
        break;
      }

      // ── Attachable user files ("Lisa files" reserved folder) ────────────
      case 'request_user_files': {
        if (activeUserId) {
          const files = await listAttachableUserFiles(activeUserId);
          sendAssistant({ type: 'user_files', files });
        }
        break;
      }
      case 'add_user_file': {
        if (activeUserId) {
          const path = toUserFilePath(msg.name);
          const errs: string[] = [];
          if (!msg.name.trim()) errs.push('Enter a file name.');
          else if (!isEligibleUserFile(path)) errs.push('Use an allowed text extension (e.g. .md, .txt, .json, .csv).');
          if (new TextEncoder().encode(msg.content).length > MAX_USER_FILE_BYTES) errs.push('File is too large (256 KB max).');
          if (errs.length === 0) {
            try {
              await spindle.userStorage.write(path, msg.content, activeUserId);
            } catch (err) {
              errs.push('Could not save the file.');
              spindle.log.warn(`[LumiScript] add_user_file failed: ${err instanceof Error ? err.message : String(err)}`);
            }
          }
          const files = await listAttachableUserFiles(activeUserId);
          sendAssistant({ type: 'user_files', files, ...(errs.length ? { error: errs.join(' ') } : {}) });
        }
        break;
      }
      case 'delete_user_file': {
        if (activeUserId) {
          const path = normalizeUserPath(msg.path);
          if (isEligibleUserFile(path)) {
            try {
              await spindle.userStorage.delete(path, activeUserId);
            } catch (err) {
              spindle.log.warn(`[LumiScript] delete_user_file failed: ${err instanceof Error ? err.message : String(err)}`);
            }
          }
          const files = await listAttachableUserFiles(activeUserId);
          sendAssistant({ type: 'user_files', files });
        }
        break;
      }

      // ── Lisa memory panel (user curation: list / add / edit / delete) ───
      case 'request_assistant_memory': {
        if (activeUserId) await pushAssistantMemory(activeUserId);
        break;
      }
      case 'assistant_memory_add': {
        if (!activeUserId) break;
        await addMemoryNote(activeUserId, {
          hook: msg.hook,
          ...(msg.detail ? { detail: msg.detail } : {}),
          ...(msg.category ? { category: msg.category } : {}),
          source: 'user',
        });
        await pushAssistantMemory(activeUserId);
        break;
      }
      case 'assistant_memory_edit': {
        if (!activeUserId) break;
        await editMemoryNote(activeUserId, msg.id, {
          hook: msg.hook,
          detail: msg.detail,
          category: msg.category,
        });
        await pushAssistantMemory(activeUserId);
        break;
      }
      case 'assistant_memory_delete': {
        if (!activeUserId) break;
        await deleteMemoryNote(activeUserId, msg.id);
        await pushAssistantMemory(activeUserId);
        break;
      }
      case 'assistant_memory_consolidate': {
        if (!activeUserId) break;
        const res = await consolidateMemory(activeUserId, msg.connectionId);
        if (res.ok) {
          await pushAssistantMemory(activeUserId);
          sendAssistant({ type: 'assistant_memory_consolidated', before: res.before, after: res.after });
        } else {
          sendAssistant({ type: 'assistant_memory_consolidated', before: 0, after: 0, error: res.error });
        }
        break;
      }

      case 'assistant_abort': {
        assistantAbortController?.abort();
        break;
      }

      case 'request_assistant_connections': {
        try {
          const list = await spindle.connections.list(activeUserId ?? undefined);
          sendAssistant({
            type: 'assistant_connections',
            connections: list.map((c) => ({
              id:        c.id,
              name:      c.name,
              model:     c.model,
              provider:  c.provider,
              isDefault: c.is_default ?? false,
            })),
          });
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] request_assistant_connections failed: ` +
            (err instanceof Error ? err.message : String(err)),
          );
          sendAssistant({ type: 'assistant_connections', connections: [] });
        }
        break;
      }

      case 'request_assistant_threads': {
        if (!activeUserId) {
          sendAssistant({ type: 'assistant_threads', threads: [], activeThreadId: null });
          break;
        }
        if (!assistantInitialized) await bootstrapAssistant(activeUserId);
        pushAssistantThreads();
        if (activeAssistantThread) pushActiveThreadLoaded();
        break;
      }

      case 'assistant_switch_thread': {
        if (!activeUserId || !assistantInitialized) break;
        if (assistantAbortController) {
          spindle.log.warn(
            `[LumiScript] assistant_switch_thread refused: turn in flight. Abort first.`,
          );
          break;
        }
        const target = await loadThread(activeUserId, msg.threadId).catch(() => null);
        if (!target) {
          assistantThreadIndex = removeIndexEntry(assistantThreadIndex, msg.threadId);
          await saveThreadIndex(activeUserId, assistantThreadIndex);
          pushAssistantThreads();
          break;
        }
        activeAssistantThread = target;
        pushAssistantThreads();
        pushActiveThreadLoaded();
        break;
      }

      case 'assistant_rename_thread': {
        if (!activeUserId || !assistantInitialized) break;
        const newTitle = msg.title.trim() || 'Untitled';
        const target = activeAssistantThread?.id === msg.threadId
          ? activeAssistantThread
          : await loadThread(activeUserId, msg.threadId).catch(() => null);
        if (!target) break;
        target.title = newTitle;
        target.updatedAt = Date.now();
        if (activeAssistantThread?.id === msg.threadId) {
          activeAssistantThread = target;
        }
        try {
          await saveThread(activeUserId, target);
          const entry = buildIndexEntry(target);
          assistantThreadIndex = upsertIndexEntry(assistantThreadIndex, entry);
          await saveThreadIndex(activeUserId, assistantThreadIndex);
          pushAssistantThreads();
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] assistant_rename_thread failed: ` +
            (err instanceof Error ? err.message : String(err)),
          );
        }
        break;
      }

      case 'assistant_delete_thread': {
        if (!activeUserId || !assistantInitialized) break;
        // Confirm via the Spindle-native modal — host-themed, accessible,
        // can't accidentally lose a long thread.
        const target = assistantThreadIndex.find((e) => e.id === msg.threadId);
        const titlePreview = target?.title ?? 'this thread';
        const confirmRes = await spindle.modal.confirm({
          title:        'Delete thread?',
          message:      `Deleting "${titlePreview}" will permanently remove its conversation history. This can't be undone.`,
          variant:      'danger',
          confirmLabel: 'Delete',
          cancelLabel:  'Keep',
          userId:       activeUserId,
        }).catch(() => ({ confirmed: false }));
        if (!confirmRes.confirmed) break;

        await deleteThreadFile(activeUserId, msg.threadId);
        assistantThreadIndex = removeIndexEntry(assistantThreadIndex, msg.threadId);
        try {
          await saveThreadIndex(activeUserId, assistantThreadIndex);
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] assistant_delete_thread index save failed: ` +
            (err instanceof Error ? err.message : String(err)),
          );
        }
        if (activeAssistantThread?.id === msg.threadId) {
          if (assistantThreadIndex.length > 0) {
            const next = assistantThreadIndex[0]!;
            const loaded = await loadThread(activeUserId, next.id).catch(() => null);
            activeAssistantThread = loaded ?? createNewThread();
          } else {
            activeAssistantThread = createNewThread();
          }
          pushActiveThreadLoaded();
        }
        pushAssistantThreads();
        break;
      }

      case 'assistant_apply_to_script': {
        // "Apply to script" affordance — user clicked a code block's apply
        // button in the assistant modal. We classify trigger vs library from
        // the code shape, generate a name, prepend a provenance header, and
        // create the script via scriptStorage. Returns success/error event
        // for the modal's inline confirmation.
        try {
          const codeRaw = msg.code ?? '';

          // ── Update an existing (attached) script in place ──────────────────
          // When the user picked "Update «script»" from the apply menu, the
          // frontend sends the target id. Replace its code verbatim — no
          // provenance header, no rename — then refresh (mirrors the create
          // path's post-write calls). The destructive-overwrite confirm was
          // already shown frontend-side.
          if (msg.targetScriptId) {
            const target = scriptStorage.getScript(msg.targetScriptId);
            if (!target) {
              sendAssistant({
                type:  'assistant_apply_error',
                error: 'That script no longer exists — it may have been deleted since you attached it.',
              });
              break;
            }
            await scriptStorage.updateScript(msg.targetScriptId, { code: codeRaw });
            pushScripts();
            void syncTriggers();
            pushTools();
            recordAppliedEvent(target.name, target.type, true);
            sendAssistant({
              type:       'assistant_apply_success',
              scriptName: target.name,
              scriptType: target.type,
              updated:    true,
            });
            break;
          }

          // Classification heuristic: presence-based, conservative defaults.
          //   - `// @triggers` comment anywhere → trigger (user is writing
          //     a trigger-shaped script even if @triggers is documentary)
          //   - `module.exports` or `exports.X = ...` → library
          //   - else → trigger (more common case in user code)
          let scriptType: import('./types/script.js').ScriptType = 'trigger';
          if (/\/\/\s*@triggers\b/m.test(codeRaw)) {
            scriptType = 'trigger';
          } else if (/(^|\s)module\.exports\s*=|(^|\s)exports\.\w+\s*=/m.test(codeRaw)) {
            scriptType = 'library';
          }

          // Name derivation: pull from the first description-style comment if
          // present (`// @name Something`, `// @description Something`, or
          // first non-frontmatter comment line). Else fall back to a
          // timestamp-based default. Cap at 60 chars for the script-list.
          let derivedName: string | null = null;
          const nameMatch = codeRaw.match(/\/\/\s*@name\s+(.+)$/m);
          if (nameMatch?.[1]) derivedName = nameMatch[1].trim();
          if (!derivedName) {
            const descMatch = codeRaw.match(/\/\/\s*@description\s+(.+)$/m);
            if (descMatch?.[1]) derivedName = descMatch[1].trim();
          }
          if (!derivedName) {
            const stamp = new Date().toISOString().replace('T', ' ').slice(0, 16);
            derivedName = `Imported from Lisa — ${stamp}`;
          }
          if (derivedName.length > 60) derivedName = `${derivedName.slice(0, 57)}…`;

          // Provenance header prepended unless the code already starts with
          // a frontmatter block (existing @triggers / @name / etc.).
          const hasFrontmatter = /^\/\/\s*@\w+/m.test(codeRaw.split('\n').slice(0, 5).join('\n'));
          const headerLine = `// Imported from Lisa — ${new Date().toISOString().slice(0, 10)} — review before enabling.`;
          const finalCode = hasFrontmatter
            ? `${headerLine}\n${codeRaw}`
            : `${headerLine}\n\n${codeRaw}`;

          await scriptStorage.createScript(derivedName, scriptType, finalCode);
          pushScripts();
          void syncTriggers();
          pushTools();
          recordAppliedEvent(derivedName, scriptType, false);
          sendAssistant({
            type:       'assistant_apply_success',
            scriptName: derivedName,
            scriptType,
            updated:    false,
          });
        } catch (err) {
          const errMsg = err instanceof Error ? err.message : String(err);
          spindle.log.warn(`[LumiScript] assistant_apply_to_script failed: ${errMsg}`);
          sendAssistant({ type: 'assistant_apply_error', error: errMsg });
        }
        break;
      }

      case 'assistant_clear_all_threads': {
        if (!activeUserId || !assistantInitialized) break;

        // Spindle-native confirm before anything destructive.
        const confirmRes = await spindle.modal.confirm({
          title:        'Clear all threads?',
          message:      `This will permanently delete every Lisa thread (${assistantThreadIndex.length} total) and all their conversation history. This can't be undone.`,
          variant:      'danger',
          confirmLabel: 'Delete all',
          cancelLabel:  'Keep',
          userId:       activeUserId,
        }).catch(() => ({ confirmed: false }));
        if (!confirmRes.confirmed) break;

        // Walk the index and delete each thread file. Idempotent — failures
        // are swallowed per-thread (deleteThreadFile already does this).
        const idsToDelete = assistantThreadIndex.map((e) => e.id);
        await Promise.all(idsToDelete.map((id) => deleteThreadFile(activeUserId!, id)));

        // Clear the in-memory index + persist the empty file.
        assistantThreadIndex = [];
        try {
          await saveThreadIndex(activeUserId, assistantThreadIndex);
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] assistant_clear_all_threads: index save failed: ` +
            (err instanceof Error ? err.message : String(err)),
          );
        }

        // Replace the active slot with a fresh empty thread (not persisted
        // — same as the post-`assistant_new_thread` state).
        activeAssistantThread = createNewThread();
        pushAssistantThreads();
        pushActiveThreadLoaded();
        break;
      }

      case 'assistant_export_thread': {
        if (!activeUserId || !assistantInitialized) break;

        // Load the target thread — prefer in-memory if it's the active
        // one, fall back to disk.
        const thread = activeAssistantThread?.id === msg.threadId
          ? activeAssistantThread
          : await loadThread(activeUserId, msg.threadId).catch(() => null);
        if (!thread) {
          spindle.log.warn(`[LumiScript] assistant_export_thread: thread ${msg.threadId} not found.`);
          break;
        }

        // Assemble Markdown. Format: title header + per-message blocks with
        // role-coded headers. Tool-use parts render as inline annotations.
        // Reasoning content renders as a > blockquote before the assistant
        // bubble's text.
        const lines: string[] = [];
        lines.push(`# ${thread.title}`);
        lines.push('');
        // Timestamp is the actual export-click time, not the thread's
        // last-activity time — the latter is misleading when "Exported"
        // is in the header (reads like "exported just now"). `Date.now()`
        // is more truthful for the Discord-support-report use case.
        lines.push(`_Exported from Lisa — ${new Date().toISOString().slice(0, 19).replace('T', ' ')}_`);
        lines.push('');
        lines.push('---');
        lines.push('');

        // Map tool_use_id → result, to pair tool calls with their outcomes
        // when rendering (same pattern the modal's historyToDisplay uses).
        const toolResults = new Map<string, { content: string; isError: boolean }>();
        for (const m of thread.messages) {
          if (m.role !== 'user' || !Array.isArray(m.content)) continue;
          for (const part of m.content as Array<{ type: string; tool_use_id?: string; content?: string; is_error?: boolean }>) {
            if (part.type === 'tool_result' && part.tool_use_id) {
              toolResults.set(part.tool_use_id, {
                content: typeof part.content === 'string' ? part.content : JSON.stringify(part.content),
                isError: !!part.is_error,
              });
            }
          }
        }

        for (const m of thread.messages) {
          if (m.role === 'system') continue;
          if (m.role === 'user' && Array.isArray(m.content)) continue; // tool_result-only, handled inline below
          // Display label: "Lisa" for assistant bubbles, matching the
          // modal's `ASSISTANT_DISPLAY_NAME` (kept in sync with the
          // backend's LISA_PERSONA.name).
          const roleLabel = m.role === 'user' ? '👤 User' : '🤖 Lisa';
          lines.push(`## ${roleLabel}`);
          lines.push('');

          // Reasoning content first if present (assistant only).
          const reasoning = (m as { reasoning_content?: string }).reasoning_content;
          if (reasoning) {
            lines.push('> **Reasoning:**');
            for (const rline of reasoning.split('\n')) lines.push(`> ${rline}`);
            lines.push('');
          }

          if (typeof m.content === 'string') {
            lines.push(m.content);
            lines.push('');
          } else if (Array.isArray(m.content)) {
            for (const part of m.content as Array<{ type: string; text?: string; id?: string; name?: string; input?: Record<string, unknown> }>) {
              if (part.type === 'text' && part.text) {
                lines.push(part.text);
                lines.push('');
              } else if (part.type === 'tool_use' && part.id && part.name) {
                const result = toolResults.get(part.id);
                const inputJson = JSON.stringify(part.input ?? {}, null, 2);
                lines.push(`**🔧 Tool call: \`${part.name}\`**`);
                lines.push('');
                lines.push('```json');
                lines.push(inputJson);
                lines.push('```');
                if (result) {
                  lines.push('');
                  lines.push(result.isError ? '**✕ Tool error:**' : '**✓ Tool result:**');
                  lines.push('');
                  // Try to render the result as pretty-printed JSON for
                  // readability — tool results from `lookup_api` and
                  // friends are JSON-shaped, and the raw form is a
                  // single line of escape-spaghetti (literal \n and \"
                  // sequences). Fall back to the raw string when the
                  // payload isn't parseable (e.g. plain error messages
                  // from `is_error: true` results, or non-JSON tool
                  // contents from future tools). When we successfully
                  // pretty-print, tag the fence as `json` so Markdown
                  // viewers can syntax-highlight — matching what tool
                  // call inputs already do above.
                  let resultBody = result.content;
                  let resultLang = '';
                  try {
                    resultBody = JSON.stringify(JSON.parse(result.content), null, 2);
                    resultLang = 'json';
                  } catch {
                    // Leave defaults — raw string, no language tag.
                  }
                  lines.push('```' + resultLang);
                  lines.push(resultBody);
                  lines.push('```');
                }
                lines.push('');
              }
            }
          }
          lines.push('---');
          lines.push('');
        }

        const content = lines.join('\n');
        // Filename: derive from the title with a date suffix. Strip / replace
        // chars that don't survive in filesystem-safe names.
        const safeTitle = thread.title
          .replace(/[\\/:*?"<>|]/g, '-')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .slice(0, 60) || 'thread';
        const datePart = new Date().toISOString().slice(0, 10);
        const filename = `lisa-${safeTitle}-${datePart}.md`;

        sendAssistant({
          type:     'assistant_thread_exported',
          threadId: thread.id,
          filename,
          content,
        });
        break;
      }

      // ── Storage panel: Script Storage (v1.0.0-rc.6+, admin view) ────────
      case 'list_script_storage': {
        const entries = enumerateAllScriptStorage();
        send({ type: 'script_storage_list', entries });
        break;
      }

      case 'inspect_script_storage': {
        const entries = inspectScriptStorage(msg.scriptId);
        send({ type: 'script_storage_entries', scriptId: msg.scriptId, entries });
        break;
      }

      case 'clear_script_storage': {
        // No-op-safe via the delegate to `clearScriptStorageForScript`.
        // Fires `ls:scriptStorage:clear` if the slot had entries; the
        // FE re-fetches via the `script_storage_updated` hint that
        // lands after the broadcast settles through the 200 ms debounce.
        clearScriptStorageAsAdmin(msg.scriptId);
        break;
      }

      case 'delete_script_storage_entry': {
        // Returns boolean for "did it exist"; we don't echo the result
        // back — the FE refreshes via the `script_storage_updated`
        // hint that lands after `ls:scriptStorage:delete` settles.
        deleteScriptStorageEntryAsAdmin(msg.scriptId, msg.key);
        break;
      }

      // ── Storage panel: Collections (admin view) ─────────────────────────
      case 'list_collections': {
        await pushCollections(userId);
        break;
      }

      case 'inspect_collection': {
        // Path is supplied by frontend — validated inside inspectCollection
        // before any storage read. Invalid paths throw, which we catch
        // and surface as an empty result rather than crashing the handler.
        // jsonquery errors don't throw — they come back via result.error
        // and are forwarded transparently to the frontend for inline
        // display below the filter input.
        try {
          const result = await inspectCollection(
            msg.path,
            {
              textFilter:      msg.textFilter,
              deepFilter:      msg.deepFilter,
              jsonqueryFilter: msg.jsonqueryFilter,
              limit:           msg.limit,
              offset:          msg.offset,
            },
            userId ?? undefined,
          );
          send({
            type:    'collection_records',
            path:    msg.path,
            records: result.records,
            total:   result.total,
            error:   result.error,
          });
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] inspect_collection failed for "${msg.path}": ` +
            (err instanceof Error ? err.message : String(err)),
          );
          send({
            type:    'collection_records',
            path:    msg.path,
            records: [],
            total:   0,
          });
        }
        break;
      }

      case 'drop_collection': {
        // Defense: reject anything that doesn't match a known scope path
        // template — frontend should never send these, but this prevents
        // any other userStorage path from being targeted.
        if (!isValidCollectionPath(msg.path)) {
          spindle.log.warn(
            `[LumiScript] drop_collection rejected invalid path "${msg.path}"`,
          );
          break;
        }
        try {
          await spindle.userStorage.delete(msg.path, userId ?? undefined);
        } catch (err) {
          spindle.log.warn(
            `[LumiScript] drop_collection failed for "${msg.path}": ` +
            (err instanceof Error ? err.message : String(err)),
          );
        }
        // Out-of-band delete (bypasses DbStore) — drop the cached array for this
        // collection so a script's next api.db read doesn't serve phantom records.
        // Mirrors api.db.collection().drop() (engine/api/db.ts). Invalidate even
        // if the delete threw (e.g. file already gone): the cache must not outlive
        // the on-disk collection.
        invalidateDbCache(dbCacheKey(userId ?? undefined, msg.path));
        // Refresh immediately rather than waiting for the debounced hint.
        await pushCollections(userId);
        break;
      }

      case 'count_collection': {
        // Lightweight record-count query for the drop confirmation
        // dialog. countCollection returns -1 for missing / malformed
        // paths; the frontend handler treats that as "unknown" and
        // hides the count line rather than displaying "0 records"
        // (which would imply a legitimate empty collection).
        const count = await countCollection(msg.path, userId ?? undefined);
        send({ type: 'collection_count', path: msg.path, count });
        break;
      }

      case 'update_record': {
        // Admin-side per-record edit from the InspectModal. Mutation
        // routes through `runExclusive` for the same path lock used by
        // `api.db.update()` so concurrent script + admin writes
        // serialize. On success the broadcast forwarder picks up
        // `ls:collection:updated` and the open inspect modal re-fetches
        // via its `refreshToken` bump. Failures (record missing, size
        // cap, write error) surface through a toast — same pattern as
        // script-execution failures.
        const result = await updateRecord(
          msg.path,
          msg.recordId,
          msg.patch,
          userId ?? undefined,
        );
        if (!result.success) {
          spindle.log.warn(
            `[LumiScript] update_record failed for "${msg.path}" id=${msg.recordId}: ${result.error}`,
          );
          spindle.toast.error(result.error ?? 'Failed to update record', {
            title: 'Storage — edit record',
          });
        }
        break;
      }

      case 'analyze_collection': {
        // Aggregate stats for the InspectModal's Stats tab. Always
        // walks the full collection (no pagination); the 50 MB cap
        // bounds cost. Errors degrade to an empty stats result rather
        // than throwing — the UI shows a "no records" placeholder so
        // a stale path doesn't crash the modal.
        const stats = await analyzeCollection(msg.path, userId ?? undefined);
        send({ type: 'collection_stats', path: msg.path, stats });
        break;
      }

      case 'delete_record': {
        const result = await deleteRecord(
          msg.path,
          msg.recordId,
          userId ?? undefined,
        );
        if (!result.success) {
          spindle.log.warn(
            `[LumiScript] delete_record failed for "${msg.path}" id=${msg.recordId}: ${result.error}`,
          );
          spindle.toast.error(result.error ?? 'Failed to delete record', {
            title: 'Storage — delete record',
          });
        }
        break;
      }

      case 'get_active_context': {
        // Always fetch live state — also resolves character name for binding display labels.
        await refreshActiveContext(userId).catch(() => {});
        publishActiveCharId();
        const ctx = getActiveContext();
        send({
          type: 'active_context',
          characterId: ctx.characterId,
          characterName: ctx.characterName,
          chatId: ctx.chatId,
        });
        break;
      }

      // ── CRUD ────────────────────────────────────────────────────────────
      case 'create_script': {
        const s = settingsStore.get();
        const template =
          msg.scriptType === 'library' ? s.defaultLibraryTemplate
          : s.defaultTriggerTemplate;
        await scriptStorage.createScript(msg.name, msg.scriptType, template);
        pushScripts();
        void syncTriggers();
        pushTools();
        break;
      }

      // ── Card-embedded scripts (#12) — install from a card's consent modal ───
      case 'ls_card_scripts_install': {
        const prepared = pendingCardDetections.get(msg.requestId);
        if (!prepared || prepared.bundleCardId !== msg.bundleCardId) {
          // Cache miss (worker respawn or LRU eviction between detect + reply) or
          // mismatched batch — never fabricate an install from FE-supplied data.
          // Surface it: the FE already closed the modal, so a silent drop would
          // leave the user thinking the install succeeded.
          spindle.log.warn(`[LumiScript] card-scripts install: stale/unknown requestId ${msg.requestId} — ignoring`);
          spindle.toast.warning(
            'This card-scripts install expired before it could be applied. Re-import the character to try again.',
            // Scope to the replying user — this carries that user's import
            // activity and must not fan out to other sessions on a shared worker.
            { title: 'Card scripts', userId: activeUserId ?? undefined },
          );
          break;
        }
        // Owner guard: on a shared (operator-scoped) worker the detection was
        // computed against — and must land in — one specific user's library.
        // Reject a reply arriving under a DIFFERENT active user. Tolerant of a
        // null owner (detect ran before any FE session) to avoid false rejects.
        if (prepared.ownerUserId != null && activeUserId != null && prepared.ownerUserId !== activeUserId) {
          pendingCardDetections.delete(msg.requestId);
          spindle.log.warn(`[LumiScript] card-scripts install: owner/active user mismatch for ${msg.requestId} — ignoring`);
          break;
        }
        pendingCardDetections.delete(msg.requestId);
        // Defensive coercion: incoming FE messages are unvalidated; a non-array
        // selectedBundleIds would throw in `new Set(...)` AFTER the cache delete,
        // losing the batch. An empty selection simply installs nothing.
        const selectedBundleIds = Array.isArray(msg.selectedBundleIds) ? msg.selectedBundleIds : [];
        const summary = await applyCardScriptInstall({
          prepared,
          selectedBundleIds,
          scriptStorage,
          genScriptId: generateUUID,
        });
        pushScripts();
        // An update overwrites a trigger script's `triggers` while preserving
        // enabled:true, so the TriggerRegistry must re-sync (mirrors update_script).
        if (summary.updated.length > 0) void syncTriggers();
        spindle.log.info(`[LumiScript] card-scripts: installed ${summary.installed.length}, updated ${summary.updated.length}, skipped ${summary.skipped}`);
        const changed = summary.installed.length + summary.updated.length;
        if (changed > 0) {
          const parts: string[] = [];
          if (summary.installed.length) parts.push(`installed ${summary.installed.length}`);
          if (summary.updated.length) parts.push(`updated ${summary.updated.length}`);
          const fromCard = prepared.bundleName ? ` from ${prepared.bundleName}` : '';
          spindle.toast.success(
            `LumiScript ${parts.join(', ')} script${changed === 1 ? '' : 's'}${fromCard}. ` +
            `Review and enable ${changed === 1 ? 'it' : 'them'} in the LumiScript panel.`,
            // Scope to the importing user — the message includes the card name +
            // their install activity; broadcasting it would leak to other sessions.
            { title: 'Card scripts', userId: activeUserId ?? undefined },
          );
          // Let scripts react to a card-scripts install (e.g. a manager script).
          busEmit('ls:card-scripts:installed', {
            bundleCardId: prepared.bundleCardId,
            hostCharacterId: prepared.hostCharacterId,
            installed: summary.installed,
            updated: summary.updated,
          });
        }
        break;
      }

      // ── Card-embedded scripts (#12) — FE dismissed the consent modal ────────
      case 'ls_card_scripts_dismiss': {
        // Free the cached detection (and the embedded source it holds) promptly
        // rather than waiting for LRU eviction. Harmless no-op if already gone.
        pendingCardDetections.delete(msg.requestId);
        break;
      }

      case 'update_script': {
        // v0.26.x diagnostic — log every received update_script with the patch
        // shape + (for code patches) the code length. Helps confirm whether
        // the frontend's saveCode IPC is reaching the backend at all.
        const patchKeys = Object.keys(msg.patch ?? {}).join(',');
        const codeLen = (msg.patch as { code?: string })?.code?.length ?? -1;
        spindle.log.info(
          `[LumiScript] update_script: id=${msg.id}, keys=[${patchKeys}]` +
          (codeLen >= 0 ? `, codeLen=${codeLen}` : ''),
        );
        // Phase D — capture the pre-update code so the hot-reload eligibility
        // check can detect byte-different patches. Skipped when the patch
        // doesn't touch code (purely cosmetic and avoids a storage read for
        // common non-code patches like enabled/name).
        const previousCodeForReload =
          'code' in msg.patch
            ? scriptStorage.getScript(msg.id)?.code ?? ''
            : null;
        // v1.0 — capture pre-update enabled state so the `ls:startup`
        // re-fire below can detect the disabled→enabled transition.
        // Skipped when the patch doesn't touch `enabled` (no transition
        // possible).
        const previousEnabledForStartup =
          'enabled' in msg.patch
            ? scriptStorage.getScript(msg.id)?.enabled ?? false
            : null;

        let updated;
        try {
          updated = await scriptStorage.updateScript(msg.id, msg.patch);
        } catch (err) {
          spindle.log.error(
            `[LumiScript] update_script: persist FAILED for id=${msg.id}: ` +
            `${err instanceof Error ? err.message : String(err)}`,
          );
          throw err;
        }
        spindle.log.info(
          `[LumiScript] update_script: persisted id=${msg.id}, ` +
          `updated.codeLen=${updated?.code?.length ?? -1}`,
        );
        // Code-only autosave: send a single-script delta instead of broadcasting
        // all scripts' code on every keystroke after the debounce period.
        const isCodeOnly = 'code' in msg.patch && Object.keys(msg.patch).length === 1;
        if (isCodeOnly && updated) {
          pushScript(updated);
        } else {
          pushScripts();
        }
        // Phase D — schedule a hot-reload-on-edit if the patch touched
        // code, the script is an enabled trigger, the code is byte-
        // different, AND the script opts in via `@ls:reload-on-edit`.
        // Opt-in by default (post-design re-evaluation — see trigger-
        // registry's `hasReloadOnEditDirective` JSDoc). Debounce
        // coalesces typing bursts; eligibility is re-checked at fire
        // time inside `scheduleHotReload` to handle settings/code
        // changes during the debounce.
        if (
          previousCodeForReload !== null &&
          updated &&
          updated.enabled &&
          updated.type === 'trigger' &&
          updated.code !== previousCodeForReload &&
          hasReloadOnEditDirective(updated.code)
        ) {
          scheduleHotReload(updated.id, previousCodeForReload);
        }
        // Only re-register when subscriptions need to change.
        // Code / name / metadata / bindings take effect at the next invocation
        // via live storage lookup — no re-registration needed.
        if ('enabled' in msg.patch || 'triggers' in msg.patch) {
          void syncTriggers();
        }
        if (
          'enabled' in msg.patch ||
          'name'    in msg.patch
        ) {
          pushTools();
        }
        // v1.0 — re-fire `ls:startup` on the disabled→enabled transition.
        // Symmetric partner to `ls:teardown` on the enabled→disabled side;
        // gives scripts a chance to re-establish state that disable's
        // cleanup wiped (most importantly, the bottom-of-body
        // `api.broadcast.on(...)` registrations that would otherwise
        // stay dormant until the next real trigger event refires the
        // body).
        //
        // Gated on:
        //   - `'enabled' in msg.patch` (only when the patch actually
        //     touches the enabled flag)
        //   - `msg.patch.enabled === true` (transitioning TO enabled)
        //   - `previousEnabledForStartup === false` (was disabled
        //     before — skips the case where the patch sets enabled:true
        //     on an already-enabled script, e.g. cosmetic re-saves)
        //   - `updated` exists (defensive)
        //
        // Fire-and-forget — backend.ts doesn't await the body run.
        // `fireStartup` internally skips scripts that don't declare
        // `ls:startup` in their triggers list, same as `fireTeardown`.
        if (
          'enabled' in msg.patch &&
          msg.patch.enabled === true &&
          previousEnabledForStartup === false &&
          updated
        ) {
          void triggerRegistry.fireStartup(updated).catch((err) => {
            spindle.log.warn(
              `[LumiScript] fireStartup (re-enable) for "${updated.name}" failed: ` +
              `${err instanceof Error ? err.message : String(err)}`,
            );
          });
        }
        // Clear injections, tools, macros, and DOM when a script is
        // disabled so stale entries don't linger. Extracted into a
        // helper (`teardownDisabledScript`) since the master-toggle-off
        // path now runs the same cleanup for every enabled script.
        if ('enabled' in msg.patch && !msg.patch.enabled) {
          await teardownDisabledScript(msg.id, scriptStorage.getScript(msg.id));
        }
        break;
      }

      case 'delete_script': {
        // Clear injections, tools, macros, and DOM this script registered before removing it.
        // Capture the name BEFORE deleteScript() removes it from storage so
        // the cleanup log has a readable identifier.
        const deletedScript = scriptStorage.getScript(msg.id);
        const deletedName   = deletedScript?.name ?? msg.id;
        // Fire ls:teardown with reason='deleted' before any state cleanup.
        // fireTeardown internally skips already-disabled scripts (they were
        // torn down on the earlier disable event), so deleting an
        // already-disabled script is a no-op here.
        if (deletedScript) {
          await triggerRegistry.fireTeardown(deletedScript, 'deleted');
        }
        clearByScriptId(msg.id);
        pushInjections();
        const clearedTools = clearToolsByScriptId(msg.id);
        for (const name of clearedTools) spindle.unregisterTool(name);
        pushTools();
        const clearedMacros = clearMacrosByScriptId(msg.id);
        for (const name of clearedMacros) {
          try { spindle.unregisterMacro(name); } catch { /* swallow */ }
        }
        // Drop interceptor + processor entries — see matching block in
        // `update_script` for the no-host-unregister-needed reasoning.
        clearMacroInterceptorsByScriptId(msg.id);
        clearMessageContentProcessorsByScriptId(msg.id);
        clearWorldInfoInterceptorsByScriptId(msg.id);
        // RPC endpoints — see matching block in `update_script` for context.
        const clearedRpcEndpoints = clearRpcEndpointsByScriptId(msg.id);
        for (const endpoint of clearedRpcEndpoints) {
          try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
        }
        // v0.26.1 — drop the per-script Collection dedup cache (see matching
        // block in `update_script` for context).
        clearCollectionHandleCacheByScriptId(msg.id);
        logCleanup('tool',  'deleted', deletedName, clearedTools);
        logCleanup('macro', 'deleted', deletedName, clearedMacros);
        logCleanup('rpc',   'deleted', deletedName, clearedRpcEndpoints);
        // Dismiss any advanced modals this script still has open. See the
        // matching block in `update_script` for the teardown-reason story.
        for (const modalId of advancedModalsByScript(msg.id)) {
          markModalPendingDismissal(modalId, 'teardown');
          send({ type: 'ls_modal_dismiss', modalId });
        }
        // Destroy any input-bar actions this script still has registered —
        // see the matching block in `update_script` for the teardown story.
        for (const actionId of listActionsByScript(msg.id)) {
          send({ type: 'ls_input_bar_action_destroy', scriptId: msg.id, actionId });
        }
        clearActionsByScript(msg.id);
        // Message-tag interceptors — FE-unregister each, then clear (symmetric teardown).
        for (const tag of listTagHandlersByScript(msg.id)) {
          send({ type: 'ls_tag_interceptor_unregister', scriptId: msg.id, handlerId: tag.id });
        }
        clearTagHandlersByScriptId(msg.id);
        // Destroy float widgets — see the matching block in `update_script`.
        for (const widgetId of liveWidgetsByScript(msg.id)) {
          destroyWidgetInRegistry(widgetId);
          send({ type: 'ls_float_widget_destroy', widgetId });
          dropWidgetEntry(widgetId);
        }
        // Destroy app mounts — see the matching block in `update_script`.
        for (const mountId of liveAppMountsByScript(msg.id)) {
          destroyAppMountInRegistry(mountId);
          send({ type: 'ls_app_mount_destroy', mountId });
          dropAppMountEntry(mountId);
        }
        // Destroy drawer tabs — see the matching block in `update_script`.
        for (const tabId of listTabsByScript(msg.id)) {
          send({ type: 'ls_drawer_tab_destroy', scriptId: msg.id, tabId });
        }
        clearTabsByScript(msg.id);
        cleanupDOMScript(msg.id);
        send({ type: 'dom_cleanup_script', scriptId: msg.id });
        // Phase 9f-1 — same script-runner teardown as the disable path
        // in `update_script`. Done BEFORE `scriptStorage.deleteScript`
        // so any in-flight runs of this script see the unregister IPC
        // before the storage record disappears.
        unregisterScriptFromChild(msg.id);
        await scriptStorage.deleteScript(msg.id);
        pushScripts();
        void syncTriggers();
        pushTools();
        break;
      }

      case 'duplicate_script': {
        await scriptStorage.duplicateScript(msg.id);
        pushScripts();
        void syncTriggers();
        pushTools();
        break;
      }

      case 'import_scripts': {
        await scriptStorage.importScripts(msg.entries);
        pushScripts();
        void syncTriggers();
        pushTools();
        break;
      }

      case 'save_pack_to_disk': {
        // Shift+click on Export: decode the base64 payload the frontend
        // built via buildScriptPackBytes() and drop it into extension storage
        // at a predictable, per-tab path. External dev tooling polls this
        // file as an alternative to the browser-download path.
        //
        // spindle.storage is path-sandboxed to
        //   {DATA_DIR}/users/{userId}/extensions/lumiscript/storage/
        // so the caller can't redirect the write elsewhere. We log the
        // relative path on success; testers resolve the absolute location
        // against their Lumiverse data dir once, then hard-code it in
        // whatever tool consumes the file.
        try {
          const bin = atob(msg.bytesB64);
          const bytes = new Uint8Array(bin.length);
          for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
          const relPath = `exports/${msg.scriptType}.lumiscript.zip`;
          await spindle.storage.writeBinary(relPath, bytes);
          spindle.log.info(
            `[LumiScript] Exported ${msg.scriptType} pack to extension storage: ` +
            `${relPath} (${bytes.byteLength} bytes)`,
          );
          spindle.toast.success(
            `Pack saved to extension storage: ${relPath}`,
            { title: 'Export' },
          );
        } catch (err) {
          const text = err instanceof Error ? err.message : String(err);
          spindle.log.error(`[LumiScript] save_pack_to_disk failed: ${text}`);
          spindle.toast.error(`Export to disk failed: ${text}`, { title: 'Export' });
        }
        break;
      }

      // ── Tools ────────────────────────────────────────────────────────────
      case 'unregister_tool': {
        // Admin-override removal from the Status-tab "Remove" action.
        // Mirrors the cleanup dance done by disable-script and delete-script,
        // but scoped to a single tool name without touching the owning script.
        const name = msg.name;
        const removedImperative = removeToolByName(name);
        if (removedImperative) {
          try {
            spindle.unregisterTool(name);
          } catch (err) {
            spindle.log.warn(
              `[LumiScript] unregisterTool("${name}") failed: ` +
              (err instanceof Error ? err.message : String(err)),
            );
          }
        }
        pushTools();
        break;
      }

      // ── DOM events (from frontend) ──────────────────────────────────────
      case 'dom_event': {
        dispatchDOMEvent(msg.listenerId, msg.data);
        break;
      }

      // ── DOM delegated events (from frontend; v0.27.1) ───────────────────
      // Fires when the FE's capture-phase listener finds a registered
      // selector match. Routes to the host-side wrapper closure stored
      // by `engine/api/dom.ts:delegate`, which in turn fires
      // `sendRunHandlerRequest` to invoke the script's child-side handler.
      //
      // Swipe-id resolution: the FE populates `data.message.swipeId = 0`
      // as a placeholder because `data-swipe-id` isn't stamped on the
      // chat DOM. Resolve to the actual active swipe here via
      // `resolveDelegateEventAndDispatch` before invoking the wrapper —
      // fire-and-forget so the message-handler dispatch loop stays sync.
      case 'dom_delegate_event': {
        void resolveDelegateEventAndDispatch(msg.delegationId, msg.data);
        break;
      }

      // ── Advanced modal dismissal echo ─────────────────────────────────
      // Frontend sends this after any modal dismissal (user-initiated or
      // in response to a backend `ls_modal_dismiss`). The registry tracks
      // whether the backend initiated the dismissal (via markPendingDismissal)
      // and reports the correct reason to subscribed handlers.
      // ── Advanced modal open confirmation ──────────────────────────────
      // Phase 9d.4.d "Option B" — frontend echo confirming the modal is
      // mounted + DOM-bound + dismissal-handler wired. Routes to the
      // script-runner host-dispatcher's awaiter table, which resolves the
      // pending open-IPC's api-response. See `notifyAdvancedModalOpened` JSDoc.
      case 'ls_modal_opened': {
        notifyAdvancedModalOpened(msg.modalId);
        break;
      }

      case 'ls_modal_dismissed': {
        const result = markModalDismissed(msg.modalId);
        if (result) {
          for (const fn of result.handlers) {
            try { fn(result.reason); } catch (err) {
              spindle.log.warn(
                `[LumiScript] onDismiss handler threw: ` +
                (err instanceof Error ? err.message : String(err)),
              );
            }
          }
          dropAdvancedModalEntry(msg.modalId);
        }
        // Phase 9d.4.d "Option B" — if the modal was dismissed BEFORE its
        // open echo arrived (e.g. `ctx.ui.showModal` threw on the frontend
        // and the catch path immediately echoed dismissed), reject any
        // pending open-IPC awaiter so the proxy's openAck cleanly rejects.
        // Idempotent on missing entry: notifyAdvancedModalOpenFailed
        // silently no-ops if the awaiter has already resolved/rejected.
        notifyAdvancedModalOpenFailed(
          msg.modalId,
          'modal dismissed before open confirmation arrived',
        );
        break;
      }

      // ── Context menu selection result ──────────────────────────────────
      // Frontend echoes this after `ctx.ui.showContextMenu` resolves (with
      // the selected key, or null on user dismissal). `resolveContextMenu`
      // no-ops on unknown requestId (stale result after script teardown).
      case 'ls_context_menu_result': {
        resolveContextMenu(msg.requestId, msg.selectedKey);
        break;
      }

      // ── File picker result ─────────────────────────────────────────────
      // Frontend echoes this after `ctx.uploads.pickFile` settles. On error
      // (e.g. oversize) the awaiting `api.ui.pickFile` promise rejects; else it
      // resolves with the decoded files (empty = user cancelled).
      // `resolvePickFile` no-ops on unknown requestId (stale after teardown).
      case 'ls_pick_file_result': {
        resolvePickFile(msg.requestId, { files: msg.files, error: msg.error });
        break;
      }

      // ── UI state changes (api.ui.events) ───────────────────────────────
      // Frontend pushes initial state on connect + every change. Update the
      // cache + fan out to subscribers.
      case 'ls_ui_keyboard_changed': {
        dispatchKeyboardChange(msg.state);
        break;
      }
      case 'ls_ui_drawer_changed': {
        dispatchDrawerChange(msg.state);
        break;
      }
      case 'ls_ui_settings_changed': {
        dispatchSettingsChange(msg.state);
        break;
      }

      // ── DOM read response (v1.0.0-rc.6) ────────────────────────────────
      // Frontend echoes this after building a `SerializedDOMElement`
      // snapshot for a `DOMHandle.read()` call (or `null` if the
      // element was no longer in the live DOM at read-time).
      // `resolveDomRead` no-ops on unknown requestId — stale response
      // after script teardown / cancellation just gets dropped.
      case 'dom_read_response': {
        resolveDomRead(msg.requestId, msg.snapshot);
        break;
      }

      // ── Shared component callback (api.ui.components.*, v1.0.0-rc.9) ────
      // A mounted component fired a registered callback (e.g. switch onChange).
      // Route to the owning script's handler closure via the dispatcher's
      // callback-route registry.
      case 'component_callback': {
        dispatchComponentCallback(msg.componentId, msg.callbackName, msg.value);
        break;
      }

      // ── Shared component getValue() response (v1.0.0-rc.9) ──────────────
      // Frontend reply to a `comp_get_value` request. `resolveComponentValue`
      // no-ops on an unknown requestId (stale response after teardown).
      case 'comp_value_result': {
        resolveComponentValue(msg.requestId, msg.value);
        break;
      }

      // ── Input bar action click ─────────────────────────────────────────
      // Frontend sends this when the user activates a registered action.
      // Registry fans the click out to every handler registered via
      // `handle.onClick(fn)`. Per-handler errors are swallowed inside
      // dispatchClick — one bad handler can't stop the rest.
      case 'ls_input_bar_action_click': {
        dispatchActionClick(msg.scriptId, msg.actionId);
        break;
      }

      // ── Message-tag interceptor fired ──────────────────────────────────
      // Frontend sends this when a registered interceptor matches a COMPLETED
      // message (the FE bridge filters streaming partials + dedupes). Route to
      // the script's handler by handlerId; the registry forwards it into the
      // child and swallows per-handler errors (the child reports them).
      case 'ls_tag_interceptor_fired': {
        dispatchTagEvent(msg.scriptId, msg.handlerId, msg.event);
        break;
      }

      // ── Input bar action register confirmation ─────────────────────────
      // Phase 9d.4.e-1-a "Option B" — frontend echo confirming the action
      // is mounted + click-echo wired. Routes to the script-runner host-
      // dispatcher's awaiter table so `handleRegisterInputBarActionRequest`
      // can resolve its open IPC's api-response. See `notifyInputBarActionRegistered` JSDoc.
      case 'ls_input_bar_action_registered': {
        notifyInputBarActionRegistered(msg.scriptId, msg.actionId);
        break;
      }

      // ── Float widget create confirmation ───────────────────────────────
      // Phase 9d.4.e-2-a "Option B" — frontend echo confirming the widget
      // is mounted, root element DOM-bound, drag-end echo wired. Routes
      // to the script-runner host-dispatcher's awaiter table.
      case 'ls_float_widget_created': {
        notifyFloatWidgetCreated(msg.widgetId);
        break;
      }

      // ── App mount create confirmation (Option B) ───────────────────────
      case 'ls_app_mount_created': {
        notifyAppMountCreated(msg.mountId);
        break;
      }

      // ── Drawer tab register confirmation ───────────────────────────────
      // Phase 9d.4.e-3-a "Option B" — frontend echo confirming the tab is
      // mounted, root element DOM-bound, activation echo wired.
      case 'ls_drawer_tab_registered': {
        notifyDrawerTabRegistered(msg.scriptId, msg.tabId);
        break;
      }

      // ── Float widget drag end ──────────────────────────────────────────
      // Authoritative position update from the frontend after the user
      // completes a drag. Registry updates the position cache + fans out
      // to any `onDragEnd` handlers the script registered.
      //
      // Phase 9d.4.e-2-b — also send a position notice to the script-
      // runner child BEFORE dispatchWidgetDragEnd, so the proxy's
      // positionCache is up-to-date when the user's onDragEnd handler
      // fires (handler arrives via RunHandlerRequest, queued behind the
      // notice on the same FIFO IPC channel). FE-driven position updates
      // therefore reach `handle.getPosition()` correctly inside the
      // user's drag-end callback.
      case 'ls_float_widget_drag_end': {
        sendFloatWidgetPositionNotice(msg.widgetId, msg.x, msg.y);
        dispatchWidgetDragEnd(msg.widgetId, msg.x, msg.y);
        break;
      }

      // ── Drawer tab activation ──────────────────────────────────────────
      // User switched to a registered drawer tab (via sidebar click,
      // command palette, or programmatic `activate()`). Registry fans out
      // to every `onActivate` handler the script registered.
      case 'ls_drawer_tab_activated': {
        dispatchTabActivation(msg.scriptId, msg.tabId);
        break;
      }

      // ── Settings ─────────────────────────────────────────────────────────
      case 'update_settings': {
        await settingsStore.update(msg.patch);
        pushSettings();
        void syncTriggers(); // handles the master enabled/disabled toggle
        // Keep {{lumiScriptActive}} macro in sync with the master toggle.
        updateLumiScriptActiveMacro(settingsStore.get().enabled);
        // Phase C2 (v1.0 runtime-isolation) — if `workerCount` may have
        // shifted, rebalance the worker pool (soft-decrease + auto-shutdown
        // of over-cap workers; in-pool spawns happen lazily via the
        // existing dispatch path). Fire-and-forget; the rebalance is
        // self-contained and any failure surfaces via the spindle log.
        if (msg.patch && Object.prototype.hasOwnProperty.call(msg.patch, 'workerCount')) {
          void rebalanceWorkerPool();
        }
        break;
      }

      case 'assistant_reset_generation_defaults': {
        // Single-purpose IPC: clears the three optional numeric overrides
        // (temperature / top_p / max_tokens) and resets parallel-tool-calls
        // to the default `true`. Spread + undefined cleanly wipes the
        // fields from the persisted JSON; FE re-renders inputs as empty
        // via the standard `settings_updated` broadcast.
        await settingsStore.update({
          assistantTemperature: undefined,
          assistantTopP: undefined,
          assistantMaxTokens: undefined,
          assistantParallelToolCalls: true,
        });
        pushSettings();
        break;
      }



      // ── Run ───────────────────────────────────────────────────────────────
      case 'run_script': {
        const script = scriptStorage.getScript(msg.id);
        if (!script) {
          send({ type: 'error', message: `Script not found: ${msg.id}` });
          break;
        }

        // Refresh active context (chat + character name) before execution so api.chat.*,
        // api.variables.local/character, and script bindings all see the current state.
        await refreshActiveContext(userId).catch(() => {});
        publishActiveCharId();

        const runId = generateUUID();

        executionStatusStore.markRunning(script.id);
        send({
          type: 'execution_started',
          scriptId: script.id,
          scriptName: script.name,
          runId,
        });

        // Sync-loop recovery: Phase 9c moved trigger fires into the
        // script-runner child (host SIGKILL on heartbeat timeout); this
        // manual-run path is now also routed through the child via
        // `runScriptViaChild` (Phase 9d.3.b cutover-of-9c-gap, the same
        // strategy `trigger-registry.ts` uses for event/startup/teardown
        // fires). A `while(true){}` user script invoked via Run Now no
        // longer hangs the LumiScript subprocess — the host kills the
        // child after `heartbeatTimeoutMs` and the dispatcher reports a
        // failed result.
        //
        // The async Promise.race timeout INSIDE the child still catches
        // async infinite loops (`while(true) await …`) cleanly within
        // `scriptTimeoutMs`. Both layers compose.

        // Snapshot tool + macro names AND interceptor / processor entry ids
        // owned by this script BEFORE execution so we can diff afterwards
        // and auto-clean anything the new code no longer creates (e.g.
        // user renamed `roll_dice` → `roll_d20`, removed an
        // `api.macros.register(...)` call, or stopped calling
        // `api.macros.registerInterceptor` from a code path that previously
        // ran on every trigger event).
        const preRunToolNames                        = toolNamesByScript(script.id);
        const preRunMacroNames                       = macroNamesByScript(script.id);
        const preRunMacroInterceptorIds              = macroInterceptorIdsByScript(script.id);
        const preRunContentProcessorIds              = contentProcessorIdsByScript(script.id);
        const preRunWorldInfoInterceptorIds          = worldInfoInterceptorIdsByScript(script.id);
        const preRunRpcEndpoints                     = rpcEndpointsByScript(script.id);
        const toolsRegisteredThisRun                 = new Set<string>();
        const macrosRegisteredThisRun                = new Set<string>();
        const macroInterceptorsRegisteredThisRun     = new Set<string>();
        const contentProcessorsRegisteredThisRun     = new Set<string>();
        const worldInfoInterceptorsRegisteredThisRun = new Set<string>();
        const rpcEndpointsRegisteredThisRun          = new Set<string>();

        // Manual-run path goes through the same dispatcher as trigger
        // fires (Phase 9c + 9d.3.b unification). `activeContext` is NOT
        // passed in opts — `buildScriptAPI` substitutes a live-reading
        // view backed by `binding.ts` so any handlers the script
        // registers see the CURRENT context at fire time. Static refresh
        // of `ctx` already happened above via `refreshActiveContext`.
        //
        // `void scriptStorage` — unused on this path (user-library
        // `script.require()` IPC routing lands in Phase 9e).
        void scriptStorage;
        const timeoutMs = settingsStore.get().scriptTimeoutMs;
        const result = await runScriptViaChild(
          script,
          {
            data:               {},
            timeoutMs,
            grantedPermissions,
            userId:             activeUserId,
          },
          {
            onConsole: (entry) => {
              send({ type: 'console_entry', scriptId: script.id, runId, entry });
            },
            onToolsChanged:                         pushTools,
            onInjectionsChanged:                    pushInjections,
            toolsRegisteredThisRun,
            macrosRegisteredThisRun,
            macroInterceptorsRegisteredThisRun,
            contentProcessorsRegisteredThisRun,
            worldInfoInterceptorsRegisteredThisRun,
            rpcEndpointsRegisteredThisRun,
          },
        );

        // ── Auto-cleanup stale registrations ──────────────────────────────
        // Anything the script owned before this run but did NOT re-register
        // during this execution is stale. Tools + macros + rpc endpoints
        // need a host-side unregister; interceptor + processor entries are
        // LS-side only (one extension-level registration with the host
        // stays live), so dropping registry entries is sufficient — the
        // next dispatch pass simply skips them.
        const staleTools = diffAndCleanStaleTools(script.id, preRunToolNames, toolsRegisteredThisRun);
        for (const name of staleTools) {
          try { spindle.unregisterTool(name); } catch { /* swallow */ }
        }
        const staleMacros = diffAndCleanStaleMacros(script.id, preRunMacroNames, macrosRegisteredThisRun);
        for (const name of staleMacros) {
          try { spindle.unregisterMacro(name); } catch { /* swallow */ }
        }
        // Stale-cleanup for the LS-side-only registries — no host call,
        // no log noise (the cleanup-log helper is `tool`/`macro`-shaped
        // and extending it is deferred). The drop count is observable
        // via `api.macros.listInterceptors()` / `api.chat.listContentProcessors()`
        // for diagnostics; if a usage pattern emerges where logging
        // surfaces real value, a follow-up can extend `CleanupKind`.
        diffAndCleanStaleMacroInterceptors(
          script.id, preRunMacroInterceptorIds, macroInterceptorsRegisteredThisRun,
        );
        diffAndCleanStaleContentProcessors(
          script.id, preRunContentProcessorIds, contentProcessorsRegisteredThisRun,
        );
        diffAndCleanStaleWorldInfoInterceptors(
          script.id, preRunWorldInfoInterceptorIds, worldInfoInterceptorsRegisteredThisRun,
        );
        const staleRpcEndpoints = diffAndCleanStaleEndpoints(
          script.id, preRunRpcEndpoints, rpcEndpointsRegisteredThisRun,
        );
        for (const endpoint of staleRpcEndpoints) {
          try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
        }
        logCleanup('tool',  'stale after re-run', script.name, staleTools);
        logCleanup('macro', 'stale after re-run', script.name, staleMacros);
        logCleanup('rpc',   'stale after re-run', script.name, staleRpcEndpoints);

        if (result.success) {
          executionStatusStore.markSuccess(script.id, result.duration);
        } else {
          executionStatusStore.markError(
            script.id,
            result.duration,
            result.error?.message ?? 'Unknown error',
          );
        }

        send({
          type: 'execution_ended',
          scriptId: script.id,
          runId,                          // local runId — runViaChild's adapter doesn't expose the dispatcher's wire runId
          success: result.success,
          duration: result.duration,
          error: result.error?.message,
        });
        // Surface failures as a user-visible toast. The sidebar dot and the
        // editor console already reflect the error, but those require the
        // user to be looking at the extension panel — a toast gives
        // immediate feedback regardless of which Lumiverse view is active.
        if (!result.success) {
          spindle.toast.error(result.error?.message ?? 'Unknown error', {
            title: `LumiScript — ${script.name}`,
            duration: 10_000,
          });
        }
        // Push injection and tool snapshots so the Status tab reflects any
        // api.chat.inject() or api.tools.register() calls made during execution.
        pushInjections();
        pushTools();

        break;
      }

      // ── Phase F (v1.0 runtime-isolation) ───────────────────────────────
      case 'reload_script': {
        // Manual "Reload script" action — fires `ls:reload` for the given
        // script regardless of the `@ls:reload-on-edit` directive (that
        // directive only gates the autosave-driven reload path; manual
        // reloads always fire, present or not). Library scripts are silently
        // skipped — there's no body to re-run.
        const script = scriptStorage.getScript(msg.id);
        if (!script) {
          send({ type: 'error', message: `Script not found: ${msg.id}` });
          break;
        }
        if (!script.enabled || script.type !== 'trigger') {
          spindle.log.info(
            `[LumiScript] reload_script: skipped (script disabled or not a trigger): ${msg.id}`,
          );
          break;
        }
        const codeHash = shortCodeHash(script.code);
        const payload: LsReloadPayload = {
          reason:           'manual',
          previousCodeHash: codeHash,
          currentCodeHash:  codeHash,
          previousLength:   script.code.length,
          currentLength:    script.code.length,
        };
        void triggerRegistry.fireReload(script, payload).catch((err) => {
          spindle.log.error(
            `[LumiScript] reload_script: fireReload failed for "${script.name}": ` +
            `${err instanceof Error ? err.message : String(err)}`,
          );
        });
        break;
      }

      case 'rebalance_pool': {
        // Manual rebalance — release ALL script→worker assignments so
        // each script's next fire triggers a fresh least-loaded lookup
        // over the current pool. Useful after bumping `workerCount` to
        // redistribute scripts onto newly-available workers.
        redistributeAllAssignments();
        break;
      }
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    spindle.log.error(`[LumiScript] Frontend message handler error: ${message}`);
    send({ type: 'error', message });
  }
});

// ─── Lumiverse event listeners ────────────────────────────────────────────────

/**
 * Update active context on chat-open / chat-close.
 *
 * Subscribes to `CHAT_SWITCHED` (Lumiverse host >= 0.9.5). Earlier hosts
 * fired `SETTINGS_UPDATED { key: 'activeChatId', value }` for the same
 * signal; the host commit at 5127cce moved chat-switch messaging onto
 * a dedicated event with a cleaner `{ chatId: string | null }` payload.
 * `SETTINGS_UPDATED` no longer carries chat-navigation information for
 * us to consume.
 *
 * **Two-phase update on chat-open** (the field-bug-shaping detail):
 *   1. SYNC: chatId is set immediately so concurrent `CHAT_SWITCHED`
 *      trigger handlers see the current chatId during their binding-gate
 *      evaluation. backend.ts registers this handler at module-load time
 *      (before triggers are registered on the first frontend message),
 *      which guarantees we run first.
 *   2. ASYNC follow-up: characterId is resolved via `spindle.chats.get`
 *      → `spindle.characters.get` and written to binding.ts within
 *      ~10-15ms. This phase fixes the v0.23.2-discovered bug where
 *      tool handlers + character-bound scripts saw a NULL or STALE
 *      characterId after a chat-open event:
 *        - Cold-start manifestation: characterId stays null from boot
 *          until something explicitly refreshes context, breaking
 *          `api.db.collection({scope:'character'})` in tool dispatches.
 *        - Chat-switch manifestation: characterId stays at the PREVIOUS
 *          chat's character across the switch, silently writing
 *          per-character data to the wrong character's collection.
 *      In real usage, the ~10-15ms async window is dwarfed by LLM
 *      latency on any tool-invocation flow (Council deliberation alone
 *      is hundreds of ms minimum), so the race against tool dispatch
 *      doesn't fire in practice. `tool-invocation.ts` carries a
 *      sanity-check log that surfaces any case where the window DOES
 *      get hit.
 *
 * **Chat-close** (`payload.chatId === null`): leave context unchanged.
 * Scripts bound to the chat / character being closed should still see
 * their bindings as satisfied (their teardown handlers, etc., depend on
 * this). The next chat-open overwrites both fields atomically via the
 * two-phase update above.
 */
spindle.on('CHAT_SWITCHED', (payload: unknown) => {
  const p = payload as { chatId?: unknown } | null;
  if (!p) return;
  const newChatId = typeof p.chatId === 'string' ? p.chatId : null;
  if (!newChatId) return;   // chat-close — leave context unchanged

  // Phase 1: sync chatId update for binding-gate semantics.
  setActiveContext({ chatId: newChatId });
  const ctx = getActiveContext();
  send({ type: 'active_context', characterId: ctx.characterId, characterName: ctx.characterName, chatId: ctx.chatId });
  // Retry any ls:startup scripts whose bindings were previously unsatisfied
  // (e.g. character-bound scripts that couldn't fire at boot because no chat
  // was open). Now that a chat is active, their bindings may be satisfied.
  void triggerRegistry.retryPendingStartups();

  // Phase 2: async character resolution. Settles binding.ts state
  // for everyone reading via the live-getter view (api.db, api.chat,
  // api.variables.local|character, all tool/handler closures).
  //
  // Fire-and-forget: callers down the synchronous chain don't need
  // to wait for this — they already have the chatId they need. The
  // characterId fill happens in the background and is observable
  // by the time any LLM-mediated tool flow can dispatch.
  void (async () => {
    try {
      const chat = await spindle.chats.get(newChatId, activeUserId ?? undefined);
      if (!chat) return;
      const char = await spindle.characters.get(chat.character_id, activeUserId ?? undefined).catch(() => null);
      setActiveContext({
        characterId:   chat.character_id,
        characterName: char?.name ?? null,
      });
      publishActiveCharId();
      // Re-broadcast the now-complete context to the frontend so
      // the panel's display name updates without an explicit refresh.
      const updated = getActiveContext();
      send({ type: 'active_context', characterId: updated.characterId, characterName: updated.characterName, chatId: updated.chatId });
    } catch (err) {
      // Non-fatal — manifests as the original bug shape (null /
      // stale characterId), which the tool-invocation.ts sanity
      // check surfaces via warn. Logging here too so the failure
      // is attributable to the chat-open path rather than ambient
      // staleness.
      spindle.log.warn(
        `[LumiScript] CHAT_SWITCHED: failed to resolve character for chat ${newChatId} — ` +
        `${err instanceof Error ? err.message : String(err)}`,
      );
    }
  })();
});

spindle.on('CHARACTER_EDITED', (payload: unknown) => {
  const p = payload as { id?: string; character?: { name?: string } } | null;
  if (p?.id) {
    setActiveContext({
      characterId: p.id,
      characterName: p.character?.name ?? null,
    });

    // Refresh stale binding display names: if a character was renamed, update
    // all scripts that have a binding to this character so the UI shows the
    // new name without requiring manual re-binding.
    const newName = p.character?.name;
    if (newName && scriptStorage?.store.isLoaded) {
      for (const script of scriptStorage.getScripts()) {
        if (!script.bindings?.length) continue;
        let changed = false;
        const updated = script.bindings.map(b => {
          if (b.type === 'character' && b.characterId === p.id && b.displayName !== newName) {
            changed = true;
            return { ...b, displayName: newName };
          }
          return b;
        });
        if (changed) {
          scriptStorage.updateScript(script.id, { bindings: updated }).catch(() => {});
        }
      }
    }
  }
});

// Card-embedded scripts (#12): on character create/import, detect scripts in the
// card's `extensions` and ask the user (FE consent modal) which to install.
spindle.on('CHARACTER_CREATED', (payload: unknown, userId?: string) => {
  void handleCharacterCreated(payload, userId ?? null);
});

async function handleCharacterCreated(payload: unknown, eventUserId: string | null): Promise<void> {
  try {
    if (!scriptStorage.store.isLoaded) return; // pre-cold-start imports are not retro-detected
    // On a shared (operator-scoped) worker, CHARACTER_CREATED is delivered for
    // EVERY user's import. The detection is computed against — and the modal
    // routed to — `activeUserId` (last FE sender). Skip an import the host
    // attributes to a different user so we never surface one user's import,
    // de-duped against another user's library, to the wrong user. No-op on the
    // single-user posture (eventUserId === activeUserId).
    if (eventUserId != null && activeUserId != null && eventUserId !== activeUserId) return;
    const character = (payload as { character?: { id?: string; name?: string | null; extensions?: unknown } } | null)?.character;
    if (!character?.id) return;
    const prepared = prepareCardScriptDetection({
      character: { id: character.id, name: character.name ?? null, extensions: character.extensions },
      installed: scriptStorage.getScripts(),
      granted: grantedPermissions,
      genRequestId: generateUUID,
    });
    if (!prepared) return;
    // Stamp the user this detection was computed for / routed to; the install
    // handler asserts the reply arrives under the same active user.
    prepared.ownerUserId = activeUserId;
    pendingCardDetections.set(prepared.requestId, prepared);
    while (pendingCardDetections.size > MAX_PENDING_CARD_DETECTIONS) {
      const oldest = pendingCardDetections.keys().next().value;
      if (oldest === undefined) break;
      pendingCardDetections.delete(oldest);
    }
    send({
      type: 'ls_card_scripts_detected',
      requestId: prepared.requestId,
      hostCharacterId: prepared.hostCharacterId,
      bundleCardId: prepared.bundleCardId,
      ...(prepared.bundleName !== undefined ? { bundleName: prepared.bundleName } : {}),
      items: prepared.items,
    });
  } catch (err) {
    spindle.log.warn(`[LumiScript] CHARACTER_CREATED card-scripts detect failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}

spindle.on('PERSONA_CHANGED', (payload: unknown) => {
  const p = payload as { persona?: { id?: string; name?: string } } | null;
  if (p?.persona?.id) {
    setActiveContext({
      characterId: p.persona.id,
      characterName: p.persona.name ?? null,
    });
  }
});

// ─── Update availability check ───────────────────────────────────────────────
//
// Fires once, lazily, when the frontend first calls get_settings (which means
// the user has the panel open and will actually see the toast). Checks if the
// installed extension's `version` differs from the remote `version` in the
// repo's spindle.json. Fails silently on any error (no network, non-GitHub
// repo, missing/unparseable remote spindle.json, etc.).
//
// Implementation note: prior to the Lumiverse 519565 security patch (Apr 2026)
// this function read .git/HEAD + .git/refs/heads/* + spindle.json off disk
// via `fs/promises` to compare branch SHAs. The patch blocks fs imports in
// extension bundles, so we now source local manifest data from `spindle.manifest`
// (host-exposed at runtime) and fetch the remote spindle.json directly via
// raw.githubusercontent.com. Branch comparison is dropped — semver comparison
// is more robust and was always the user-visible signal anyway.
// See notes/security-patch-519565-migration.md for the full migration record.

let _updateCheckDone = false;

async function checkForUpdates(): Promise<void> {
  try {
    const localVersion = spindle.manifest.version;
    const githubUrl    = spindle.manifest.github;
    if (!localVersion || !githubUrl) return;

    // Parse owner/repo from "https://github.com/owner/repo[.git][/]"
    const urlMatch = githubUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
    const owner    = urlMatch?.[1];
    const repo     = urlMatch?.[2];
    if (!owner || !repo) return;

    // Fetch the remote spindle.json from the default branch (`main`).
    // raw.githubusercontent.com is unauthenticated and CDN-cached, so there's
    // no API rate-limiting concern for casual users. Non-`main` defaults will
    // 404 and we'll skip silently — matching the original on-detached-HEAD
    // behaviour.
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/spindle.json`,
      { headers: { 'User-Agent': 'LumiScript/1.0 update-check' } },
    );
    if (!res.ok) return;
    const remote = await res.json() as { version?: string };
    const remoteVersion = remote.version;
    if (!remoteVersion || remoteVersion === localVersion) return; // up to date

    spindle.log.info(
      `[LumiScript] Update available: local=${localVersion} remote=${remoteVersion}`,
    );
    spindle.toast.info(
      `LumiScript ${remoteVersion} is available (you have ${localVersion}). Update via the Extensions panel.`,
      { title: 'LumiScript update available', duration: 12000 },
    );
  } catch {
    // Skip silently: no network, parse error, missing manifest field, etc.
  }
}

// ─── Permission denied handler ────────────────────────────────────────────────

spindle.permissions.onDenied(({ permission, operation }) => {
  spindle.log.warn(`[LumiScript] Permission "${permission}" denied for "${operation}"`);
});

// ─── Init ─────────────────────────────────────────────────────────────────────

void (async () => {
  await refreshPermissions();
  // Active context is populated lazily:
  // - On the first `get_active_context` frontend message (calls spindle.chats.getActive with userId)
  // - On each CHAT_CHANGED event (calls spindle.chats.get with userId)
  // Trigger handlers are initialized lazily on the first frontend message once
  // storage and userId are both available (see triggersInitialized guard above).
  // userId is not available at startup so getActive/storage cannot be called here.

  // Probe Lumiverse version info (spindle.version.* is available from
  // spindle-types 0.4.21 / Lumiverse staging onward). Stashed on globalThis so
  // future feature-gating checks don't have to re-query Spindle. Falls back to
  // null on older hosts that don't implement the namespace yet — callers must
  // treat these as "unknown" rather than a specific version.
  void (async () => {
    try {
      const [backend, frontend] = await Promise.all([
        spindle.version.getBackend().catch(() => null),
        spindle.version.getFrontend().catch(() => null),
      ]);
      (globalThis as Record<string, unknown>).__lsLumiverseBackendVersion  = backend;
      (globalThis as Record<string, unknown>).__lsLumiverseFrontendVersion = frontend;
      if (backend || frontend) {
        spindle.log.info(`[LumiScript] Host Lumiverse versions — backend: ${backend ?? 'unknown'}, frontend: ${frontend ?? 'unknown'}`);
      }
    } catch {
      // spindle.version namespace missing entirely — pre-0.4.21 host. Leave
      // the globals unset; feature-gating code should treat `undefined` as
      // "namespace unavailable" and skip capability-dependent paths.
    }
  })();

  spindle.log.info('LumiScript backend ready');

  // The script-runner child is spawned LAZILY on the first frontend message
  // arrival (where `activeUserId` is known). LumiScript is an operator-scoped
  // extension, so `backendProcesses.spawn` requires a `userId` to scope the
  // subprocess to a specific user — at module-load time here in the init
  // IIFE, no user has handshaked yet. See the cold-start block in the
  // frontend message handler (search for "Phase 2 smoke").
})();

export {};


