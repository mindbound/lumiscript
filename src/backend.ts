declare const spindle: import('lumiverse-spindle-types').SpindleAPI

import type { FrontendToBackend } from './types/messages.js';
import type { LumiScriptSettings } from './types/script.js';
import { DEFAULT_SETTINGS } from './types/script.js';
import { ScriptStorage } from './storage/script-storage.js';
import { SettingsStore } from './storage/settings-store.js';
import { executionStatusStore } from './engine/execution-status.js';
import { setActiveContext, getActiveContext } from './engine/binding.js';
import { executeScript } from './engine/executor.js';
import { registerLumiScriptMacros, updateLumiScriptActiveMacro } from './macros.js';
import { TriggerRegistry } from './engine/trigger-registry.js';
import { generateUUID } from './utils/uuid.js';
import { readFile } from 'fs/promises';
import { listByMode, listAll, clearEphemeral, clearByScriptId, type InjectionEntry } from './engine/injection-store.js';
import { applyLumiScriptInjections } from './engine/interceptor-pipeline.js';
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
import { logCleanup } from './engine/cleanup-log.js';
import { dispatchToolInvocation } from './engine/tool-invocation.js';
import { dispatchEvent as dispatchDOMEvent, cleanupScript as cleanupDOMScript } from './engine/dom-registry.js';
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
  liveWidgetsByScript,
  destroyWidget as destroyWidgetInRegistry,
  dropEntry as dropWidgetEntry,
  dispatchDragEnd as dispatchWidgetDragEnd,
} from './engine/float-widget-registry.js';
import {
  listByScript as listTabsByScript,
  clearByScript as clearTabsByScript,
  dispatchActivation as dispatchTabActivation,
} from './engine/drawer-tab-registry.js';
import { resolveContextMenu } from './engine/api/ui.js';
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
import { on as busOn } from './engine/broadcast-bus.js';
import { buildReplayMessages } from './engine/replay.js';

// ─── Active user + permission tracking ───────────────────────────────────────

let activeUserId: string | null = null;
const grantedPermissions = new Set<string>();

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

function send(msg: import('./types/messages.js').BackendToFrontend): void {
  spindle.sendToFrontend(msg);
}

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
    userId: activeUserId,
    scriptStorage,
    onToolsChanged: pushTools,
    scriptTimeoutMs: settingsStore.get().scriptTimeoutMs,
  }),
  send,
);

/**
 * Synchronise the trigger registry with the current settings + scripts.
 * Called after any script mutation, settings change, or on first storage load.
 *
 * - If LumiScript is globally disabled: remove all spindle.on() subscriptions.
 * - Otherwise: rebuild subscriptions for all enabled trigger scripts.
 */
async function syncTriggers(): Promise<void> {
  if (!settingsStore.isLoaded || !scriptStorage.store.isLoaded) return;
  if (!settingsStore.get().enabled) {
    triggerRegistry.unregisterAll();
    return;
  }
  await triggerRegistry.reloadAll(scriptStorage.getScripts()).catch(err => {
    spindle.log.error(`[LumiScript] syncTriggers failed: ${err instanceof Error ? err.message : String(err)}`);
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
    await Promise.all(loadPromises);
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
    await contextPromise;
    publishActiveCharId();
    // Verify the host meets our minimum Lumiverse version (declared in
    // spindle.json). Fire-and-forget: warns via toast + log if the host
    // is too old, silent otherwise. Hooked here rather than module scope
    // so the toast reaches a live frontend (we know it is — this block
    // only runs on first frontend message).
    void checkMinimumHostVersion();
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

      case 'update_script': {
        const updated = await scriptStorage.updateScript(msg.id, msg.patch);
        // Code-only autosave: send a single-script delta instead of broadcasting
        // all scripts' code on every keystroke after the debounce period.
        const isCodeOnly = 'code' in msg.patch && Object.keys(msg.patch).length === 1;
        if (isCodeOnly && updated) {
          pushScript(updated);
        } else {
          pushScripts();
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
        // Clear injections, tools, macros, and DOM when a script is disabled so stale entries don't linger.
        if ('enabled' in msg.patch && !msg.patch.enabled) {
          const disabledScript  = scriptStorage.getScript(msg.id);
          const disabledName    = disabledScript?.name ?? msg.id;
          // Fire ls:teardown BEFORE any state cleanup so the handler can
          // still access tools/macros/world-info it registered. No-op for
          // scripts that don't declare the trigger. Handler errors + timeouts
          // are logged and do NOT block the cleanup that follows.
          if (disabledScript) {
            // The stored record still has enabled=true at this point (we're
            // about to update it) — fireTeardown's guard expects the current
            // enabled state, so use the stored record rather than the patch.
            await triggerRegistry.fireTeardown(disabledScript, 'disabled');
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
          logCleanup('tool',  'disabled', disabledName, clearedTools);
          logCleanup('macro', 'disabled', disabledName, clearedMacros);
          // Dismiss any advanced modals this script still has open. Marking
          // a pending reason of 'teardown' means the frontend's dismissal
          // echo (ls_modal_dismissed) will fire the script's onDismiss
          // handlers with `reason: 'teardown'` — even though the handlers
          // themselves may have already been collected by ls:teardown.
          for (const modalId of advancedModalsByScript(msg.id)) {
            markModalPendingDismissal(modalId, 'teardown');
            send({ type: 'ls_modal_dismiss', modalId });
          }
          // Destroy any input-bar actions this script still has registered.
          // Unlike modals, there's no dismissal-reason discriminant — input
          // bar actions are fire-and-forget click surfaces. Emit destroy
          // messages so the frontend tears down host state, then drop
          // registry entries in one sweep.
          for (const actionId of listActionsByScript(msg.id)) {
            send({ type: 'ls_input_bar_action_destroy', scriptId: msg.id, actionId });
          }
          clearActionsByScript(msg.id);
          // Destroy any float widgets this script still has open. Same
          // lifecycle shape as input-bar actions — fire-and-forget
          // destroy messages, then drop registry entries via the
          // destroyWidget + dropEntry pair (marking destroyed first so
          // any in-flight drag-end echoes become harmless no-ops).
          for (const widgetId of liveWidgetsByScript(msg.id)) {
            destroyWidgetInRegistry(widgetId);
            send({ type: 'ls_float_widget_destroy', widgetId });
            dropWidgetEntry(widgetId);
          }
          // Destroy any drawer tabs this script has registered. Simple
          // lifecycle like input-bar actions — emit destroy messages,
          // then clear the registry entries.
          for (const tabId of listTabsByScript(msg.id)) {
            send({ type: 'ls_drawer_tab_destroy', scriptId: msg.id, tabId });
          }
          clearTabsByScript(msg.id);
          cleanupDOMScript(msg.id);
          send({ type: 'dom_cleanup_script', scriptId: msg.id });
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
        logCleanup('tool',  'deleted', deletedName, clearedTools);
        logCleanup('macro', 'deleted', deletedName, clearedMacros);
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
        // Destroy float widgets — see the matching block in `update_script`.
        for (const widgetId of liveWidgetsByScript(msg.id)) {
          destroyWidgetInRegistry(widgetId);
          send({ type: 'ls_float_widget_destroy', widgetId });
          dropWidgetEntry(widgetId);
        }
        // Destroy drawer tabs — see the matching block in `update_script`.
        for (const tabId of listTabsByScript(msg.id)) {
          send({ type: 'ls_drawer_tab_destroy', scriptId: msg.id, tabId });
        }
        clearTabsByScript(msg.id);
        cleanupDOMScript(msg.id);
        send({ type: 'dom_cleanup_script', scriptId: msg.id });
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

      // ── Advanced modal dismissal echo ─────────────────────────────────
      // Frontend sends this after any modal dismissal (user-initiated or
      // in response to a backend `ls_modal_dismiss`). The registry tracks
      // whether the backend initiated the dismissal (via markPendingDismissal)
      // and reports the correct reason to subscribed handlers.
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

      // ── Input bar action click ─────────────────────────────────────────
      // Frontend sends this when the user activates a registered action.
      // Registry fans the click out to every handler registered via
      // `handle.onClick(fn)`. Per-handler errors are swallowed inside
      // dispatchClick — one bad handler can't stop the rest.
      case 'ls_input_bar_action_click': {
        dispatchActionClick(msg.scriptId, msg.actionId);
        break;
      }

      // ── Float widget drag end ──────────────────────────────────────────
      // Authoritative position update from the frontend after the user
      // completes a drag. Registry updates the position cache + fans out
      // to any `onDragEnd` handlers the script registered.
      case 'ls_float_widget_drag_end': {
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
        const ctx = getActiveContext();

        executionStatusStore.markRunning(script.id);
        send({
          type: 'execution_started',
          scriptId: script.id,
          scriptName: script.name,
          runId,
        });

        // Sync-loop watchdog: process.exit(1) is the only escape when the
        // worker event loop is blocked by a synchronous infinite loop.
        // The async Promise.race timeout inside executeScript fires first for
        // async loops and clears this watchdog through the normal return path.
        const timeoutMs = settingsStore.get().scriptTimeoutMs;
        const syncWatchdog = setTimeout(() => {
          spindle.log.error(
            `[LumiScript] Script "${script.name}" blocked the worker with a synchronous infinite loop — terminating`,
          );
          process.exit(1);
        }, timeoutMs + 5_000);

        // Snapshot tool + macro names owned by this script BEFORE execution
        // so we can diff afterwards and auto-unregister anything the new
        // code no longer creates (e.g. user renamed `roll_dice` → `roll_d20`,
        // or removed an `api.macros.register(...)` call).
        const preRunToolNames  = toolNamesByScript(script.id);
        const preRunMacroNames = macroNamesByScript(script.id);
        const toolsRegisteredThisRun  = new Set<string>();
        const macrosRegisteredThisRun = new Set<string>();

        const result = await executeScript(script, {
          grantedPermissions,
          activeContext: { chatId: ctx.chatId, characterId: ctx.characterId },
          userId: activeUserId,
          onConsole: (entry) => {
            send({ type: 'console_entry', scriptId: script.id, runId, entry });
          },
          scriptStorage,
          timeoutMs,
          toolsRegisteredThisRun,
          macrosRegisteredThisRun,
        });
        clearTimeout(syncWatchdog);

        // ── Auto-cleanup stale tools + macros ─────────────────────────────
        // Anything the script owned before this run but did NOT re-register
        // during this execution is stale. Remove from the store + Spindle.
        const staleTools = diffAndCleanStaleTools(script.id, preRunToolNames, toolsRegisteredThisRun);
        for (const name of staleTools) {
          try { spindle.unregisterTool(name); } catch { /* swallow */ }
        }
        const staleMacros = diffAndCleanStaleMacros(script.id, preRunMacroNames, macrosRegisteredThisRun);
        for (const name of staleMacros) {
          try { spindle.unregisterMacro(name); } catch { /* swallow */ }
        }
        logCleanup('tool',  'stale after re-run', script.name, staleTools);
        logCleanup('macro', 'stale after re-run', script.name, staleMacros);

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
          runId: result.runId,
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
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    spindle.log.error(`[LumiScript] Frontend message handler error: ${message}`);
    send({ type: 'error', message });
  }
});

// ─── Lumiverse event listeners ────────────────────────────────────────────────

/**
 * Synchronously update context from SETTINGS_UPDATED so that binding checks
 * on trigger scripts subscribed to this event see the CURRENT context, not the
 * stale previous one.
 *
 * Problem: Lumiverse fires SETTINGS_UPDATED { key: 'activeChatId', value: id }
 * before CHAT_CHANGED. The CHAT_CHANGED handler calls setActiveContext() inside
 * an async spindle.chats.get() callback, so context.chatId is still the OLD
 * chat when SETTINGS_UPDATED trigger handlers run their binding check.
 *
 * Fix: backend.ts registers before trigger scripts (module-level code runs at
 * startup; trigger scripts are registered on the first frontend message). This
 * handler therefore always executes before any trigger script's SETTINGS_UPDATED
 * handler, giving the binding gate a current chatId and characterId.
 */
spindle.on('SETTINGS_UPDATED', (payload: unknown) => {
  const p = payload as { key?: string; value?: unknown } | null;
  if (!p) return;

  if (p.key === 'activeChatId') {
    const newChatId = typeof p.value === 'string' ? p.value : null;

    if (newChatId) {
      // Opening a new chat: eagerly update chatId so binding checks on concurrent
      // SETTINGS_UPDATED trigger handlers see the new chatId, not the stale one.
      //
      // characterId/characterName are intentionally left unchanged: the new chat's
      // character is only known after CHAT_CHANGED's async spindle.chats.get() call.
      // Leaving the previous character in place preserves character binding checks
      // for scripts bound to the same character across multiple chats.
      setActiveContext({ chatId: newChatId });
      const ctx = getActiveContext();
      send({ type: 'active_context', characterId: ctx.characterId, characterName: ctx.characterName, chatId: ctx.chatId });
      // Retry any ls:startup scripts whose bindings were previously unsatisfied
      // (e.g. character-bound scripts that couldn't fire at boot because no chat
      // was open). Now that a chat is active, their bindings may be satisfied.
      void triggerRegistry.retryPendingStartups();
    }
    // Closing (null): leave context unchanged so scripts bound to the chat or
    // character being closed can still fire their handlers. CHAT_CHANGED will
    // clear context shortly after.
  }
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
// installed extension is behind its remote branch on GitHub. Fails silently on
// any error (no .git dir, no network, non-GitHub repo, API rate limit, etc.).

let _updateCheckDone = false;

async function checkForUpdates(): Promise<void> {
  try {
    // Derive extension root from this file's URL.
    // import.meta.url = "file:///abs/path/to/dist/backend.js"
    // Strip filename → dist dir, strip dist dir → extension root.
    const fileUrl = import.meta.url;
    const distUrl = fileUrl.slice(0, fileUrl.lastIndexOf('/'));
    const rootUrl = distUrl.slice(0, distUrl.lastIndexOf('/'));
    // Convert file:// URL to a filesystem path (Bun uses forward slashes on all platforms)
    const gitRoot = rootUrl.replace(/^file:\/\/\/?/, match => (match === 'file:///' ? '/' : ''));

    // Read .git/HEAD to identify the current branch.
    // Normal checkout: "ref: refs/heads/staging\n"
    // Detached HEAD: a raw SHA — skip check.
    const headText = (await readFile(gitRoot + '/.git/HEAD', 'utf-8')).trim();
    const refMatch = headText.match(/^ref: refs\/heads\/(.+)$/);
    if (!refMatch) return; // detached HEAD or unexpected format
    const branch = refMatch[1];
    if (!branch) return; // noUncheckedIndexedAccess guard

    // Read local commit SHA from the individual ref file.
    // Fall back to .git/packed-refs if the file has been packed by git gc.
    let localSHA: string | null = null;
    try {
      localSHA = (await readFile(gitRoot + '/.git/refs/heads/' + branch, 'utf-8')).trim();
    } catch {
      const packed = await readFile(gitRoot + '/.git/packed-refs', 'utf-8').catch(() => '');
      for (const line of packed.split('\n')) {
        if (line.endsWith(' refs/heads/' + branch)) {
          localSHA = line.split(' ')[0] ?? null;
          break;
        }
      }
    }
    if (!localSHA) return;

    // Parse owner/repo from the "github" field in spindle.json.
    const manifest = JSON.parse(
      await readFile(gitRoot + '/spindle.json', 'utf-8'),
    ) as { github?: string };
    if (!manifest.github) return;
    const urlMatch = manifest.github.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
    const owner = urlMatch?.[1];
    const repo   = urlMatch?.[2];
    if (!owner || !repo) return;

    // Ask GitHub API for the latest commit on this branch.
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits/${encodeURIComponent(branch)}`,
      { headers: { 'User-Agent': 'LumiScript/1.0 update-check' } },
    );
    if (!res.ok) return;
    const data = await res.json() as { sha?: string };
    if (!data.sha || data.sha === localSHA) return; // up to date

    spindle.log.info(
      `[LumiScript] Update available: local=${localSHA.slice(0, 7)} remote=${data.sha.slice(0, 7)} (${branch})`,
    );
    spindle.toast.info(
      `A newer version is available on the "${branch}" branch. Update via the Extensions panel.`,
      { title: 'LumiScript update available', duration: 12000 },
    );
  } catch {
    // Skip silently: no .git dir (ZIP install), no network, API error, etc.
  }
}

// ─── Permission denied handler ────────────────────────────────────────────────

spindle.permissions.onDenied(({ permission, operation }) => {
  spindle.log.warn(`[LumiScript] Permission "${permission}" denied for "${operation}"`);
});

// ─── Init ─────────────────────────────────────────────────────────────────────

;(async () => {
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
})();

export {};


