declare const spindle: import('lumiverse-spindle-types').SpindleAPI

import type { FrontendToBackend } from './types/messages.js';
import type { LumiScriptSettings } from './types/script.js';
import { DEFAULT_SETTINGS } from './types/script.js';
import { ScriptStorage } from './storage/script-storage.js';
import { SettingsStore } from './storage/settings-store.js';
import { executionStatusStore } from './engine/execution-status.js';
import { setActiveContext, getActiveContext } from './engine/binding.js';
import { executeScript } from './engine/executor.js';
import { TriggerRegistry } from './engine/trigger-registry.js';
import { generateUUID } from './utils/uuid.js';
import { readFile } from 'fs/promises';
import { listByMode, listAll, clearEphemeral, clearByScriptId } from './engine/injection-store.js';
import { getTool, clearByScriptId as clearToolsByScriptId, listAll as listAllTools } from './engine/tool-store.js';
import { emit as broadcastEmit } from './engine/broadcast-bus.js';

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

// ─── Storage ──────────────────────────────────────────────────────────────────

const getUserId = () => activeUserId ?? undefined;

const scriptStorage = new ScriptStorage(spindle.userStorage, getUserId);

const settingsStore = new SettingsStore<LumiScriptSettings>(
  'settings.json',
  spindle.userStorage,
  getUserId,
  DEFAULT_SETTINGS,
);

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
  send({
    type: 'tools_updated',
    tools: listAllTools().map(e => ({
      name:             e.name,
      display_name:     e.displayName,
      description:      e.description,
      council_eligible: e.councilEligible,
      scriptId:         e.scriptId,
      scriptName:       e.scriptName,
    })),
  });
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
spindle.registerContextHandler(async (ctx) => {
  const entries = listByMode('context');
  if (entries.length === 0) return ctx;
  return {
    ...(ctx as Record<string, unknown>),
    _lumiScriptInjections: entries.map(e => ({ content: e.content, role: e.role })),
  };
}, 50);

// Interceptor (post-assembly) — three responsibilities, in order:
//
//  1. Auto-sidecar: if sidecarEnabled + connection configured + tools registered,
//     run an agentic LLM tool loop on the assembled messages and splice the final
//     result into the array before returning. Mirrors TavernScript's external-mode
//     interceptor (index.tsx:337–394). Skipped for quiet/impersonate/continue.
//     No cycle detection needed — spindle.generate.raw() bypasses the interceptor.
//
//  2. mode:'context' injections: reads _lumiScriptInjections from the spindle
//     context (populated by the context handler above) and PREPENDS them at index
//     0, before all assembled content. Ephemeral context entries are cleared here.
//
//  3. mode:'intercept' injections: splices each entry at depth from the END of
//     the message array. Ephemeral entries cleared after.
spindle.registerInterceptor(async (messages, context) => {
  let result = [...messages];
  const ctx = context as Record<string, unknown>;

  // ── 1. Auto-sidecar agentic loop ─────────────────────────────────────────
  // Only runs when: sidecarEnabled + connection configured + tools registered
  // + generation type is not quiet/impersonate/continue.
  // No cycle detection needed — spindle.generate.raw() bypasses the interceptor.
  if (settingsStore.isLoaded) {
    const settings = settingsStore.get();
    const genType = ctx.generationType as string | undefined;
    const skipTypes = ['quiet', 'impersonate', 'continue'];
    const sidecarTools = listAllTools();

    if (
      settings.sidecarEnabled &&
      settings.sidecarConnectionId &&
      !skipTypes.includes(genType ?? '') &&
      sidecarTools.length > 0
    ) {
      const schemas = sidecarTools.map(t => ({
        name:        t.name,
        description: t.description,
        parameters:  t.parameters ?? {},
      }));

      let loopMessages = [...result];
      let turnCount = 0;
      const toolCallSummary: Array<{ name: string; success: boolean }> = [];
      let sidecarInjected = false;
      let sidecarError: string | undefined;

      try {
        const maxTurns = settings.sidecarMaxTurns ?? 6;
        for (let i = 0; i < maxTurns; i++) {
          type RawResult = { content?: string; tool_calls?: Array<{ name: string; args: Record<string, unknown>; call_id: string }> };
          const raw = await (spindle.generate.raw({
            type:          'raw' as const,
            messages:      loopMessages,
            tools:         schemas,
            connection_id: settings.sidecarConnectionId!,
          } as any)) as RawResult;

          turnCount = i + 1;

          if (!raw.tool_calls?.length) {
            // LLM produced final text — inject into the assembled messages
            if (raw.content) {
              const depth = settings.sidecarInjectionDepth ?? 0;
              const idx = Math.max(0, result.length - depth);
              result.splice(idx, 0, { role: 'system' as const, content: raw.content });
              sidecarInjected = true;
            }
            break;
          }

          // LLM made tool calls — execute handlers and append results
          for (const call of raw.tool_calls) {
            const entry = getTool(call.name);
            if (!entry) {
              toolCallSummary.push({ name: call.name, success: false });
              loopMessages.push({ role: 'user' as const, content: `[Tool not found: ${call.name}]` });
              continue;
            }
            try {
              const toolResult = await entry.handler(call.args ?? {});
              toolCallSummary.push({ name: call.name, success: true });
              loopMessages.push(
                { role: 'assistant' as const, content: `[Calling: ${call.name}]` },
                { role: 'user'      as const, content: `[Result of ${call.name}]: ${toolResult}` },
              );
            } catch (err: any) {
              toolCallSummary.push({ name: call.name, success: false });
              loopMessages.push({ role: 'user' as const, content: `[Error in ${call.name}]: ${err?.message ?? 'unknown'}` });
            }
          }
        }
      } catch (err: any) {
        sidecarError = err?.message ?? 'Sidecar loop failed';
        spindle.log.warn(`[LumiScript] Sidecar loop error: ${sidecarError}`);
      }

      // Report run stats to the Status tab
      send({ type: 'sidecar_run_result', turns: turnCount, toolCalls: toolCallSummary, injected: sidecarInjected, error: sidecarError });
    }
  }

  // ── 2. Context-mode: prepend before all assembled content (index 0) ───────
  const ctxInjections = ctx?._lumiScriptInjections as Array<{ content: string; role: string }> | undefined;
  if (ctxInjections && ctxInjections.length > 0) {
    result = [
      ...ctxInjections.map(e => ({
        role: e.role as 'system' | 'user' | 'assistant',
        content: e.content,
      })),
      ...result,
    ];
    clearEphemeral('context');
  }

  // ── 3. Intercept-mode: splice at depth from end of assembled array ─────────
  const interceptEntries = listByMode('intercept');
  for (const e of interceptEntries) {
    const idx = Math.max(0, result.length - e.depth);
    result.splice(idx, 0, { role: e.role as 'system' | 'user' | 'assistant', content: e.content });
  }
  clearEphemeral('intercept');

  return result;
}, 50);

// ─── Tool invocation dispatch ─────────────────────────────────────────────────
//
// Registered once at startup. Receives TOOL_INVOCATION messages for ALL tools
// registered by LumiScript scripts — both Council (sidecar/inline modes) and
// native LLM function-calling paths.
//
// The handler dispatches to the script's stored handler function. The handler
// was already wrapped in buildToolsAPI to inject the `api` reference lazily,
// so we only need to forward `args` here.
//
// IMPORTANT: The 'TOOL_INVOCATION' key must be UPPERCASE — the worker-runtime
// case "tool_invocation" dispatches to eventHandlers.get("TOOL_INVOCATION")
// (uppercase), and spindle.on() stores keys as-is without normalisation.
spindle.on('TOOL_INVOCATION', async (event: unknown) => {
  const { toolName, args } = event as { toolName: string; args: Record<string, unknown> };
  const entry = getTool(toolName);
  if (!entry) {
    spindle.log.warn(`[LumiScript] TOOL_INVOCATION: no handler for tool '${toolName}'`);
    return '';
  }
  const start = Date.now();
  const result = await Promise.resolve(entry.handler(args));
  broadcastEmit('ls:tool:invoked', {
    name:     toolName,
    args,
    result,
    scriptId: entry.scriptId,
    callMs:   Date.now() - start,
  });
  return result;
});

// ─── Trigger registry ─────────────────────────────────────────────────────────

const triggerRegistry = new TriggerRegistry(
  () => ({ grantedPermissions, userId: activeUserId, scriptStorage, onToolsChanged: pushTools }),
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
  if (!settingsStore.isLoaded) await settingsStore.load();
  if (!scriptStorage.store.isLoaded) await scriptStorage.load();

  // Register trigger handlers on the first message once storage is ready.
  // Populate context from the currently active chat BEFORE registering triggers
  // so binding checks are correct even for the very first event after a restart.
  if (!triggersInitialized) {
    triggersInitialized = true;
    await refreshActiveContext(activeUserId);
    void syncTriggers();
  }

  const msg = raw as FrontendToBackend;

  try {
    switch (msg.type) {
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

      case 'get_connections': {
        const connections = await spindle.connections.list(userId ?? undefined).catch(() => []);
        send({
          type: 'connections_updated',
          connections: connections.map(c => ({ id: c.id, name: c.name, provider: c.provider })),
        });
        break;
      }

      case 'get_active_context': {
        // Always fetch live state — also resolves character name for binding display labels.
        await refreshActiveContext(userId).catch(() => {});
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
        await scriptStorage.createScript(msg.name, msg.scriptType);
        pushScripts();
        void syncTriggers();
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
        // Clear injections and tools when a script is disabled so stale entries don't linger.
        if ('enabled' in msg.patch && !msg.patch.enabled) {
          clearByScriptId(msg.id);
          pushInjections();
          const clearedTools = clearToolsByScriptId(msg.id);
          for (const name of clearedTools) spindle.unregisterTool(name);
          pushTools();
        }
        break;
      }

      case 'delete_script': {
        // Clear injections and tools this script registered before removing it.
        clearByScriptId(msg.id);
        pushInjections();
        const clearedTools = clearToolsByScriptId(msg.id);
        for (const name of clearedTools) spindle.unregisterTool(name);
        pushTools();
        await scriptStorage.deleteScript(msg.id);
        pushScripts();
        void syncTriggers();
        break;
      }

      case 'duplicate_script': {
        await scriptStorage.duplicateScript(msg.id);
        pushScripts();
        void syncTriggers();
        break;
      }

      // ── Settings ─────────────────────────────────────────────────────────
      case 'update_settings': {
        await settingsStore.update(msg.patch);
        pushSettings();
        void syncTriggers(); // handles the master enabled/disabled toggle
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

        const runId = generateUUID();
        const ctx = getActiveContext();

        executionStatusStore.markRunning(script.id);
        send({
          type: 'execution_started',
          scriptId: script.id,
          scriptName: script.name,
          runId,
        });

        const result = await executeScript(script, {
          grantedPermissions,
          activeContext: { chatId: ctx.chatId, characterId: ctx.characterId },
          userId: activeUserId,
          onConsole: (entry) => {
            send({ type: 'console_entry', scriptId: script.id, runId, entry });
          },
          scriptStorage,
        });

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
  spindle.log.info('LumiScript backend ready');
})();

export {};


