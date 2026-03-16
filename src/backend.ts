declare const spindle: import('lumiverse-spindle-types').SpindleAPI

import type { FrontendToBackend } from './types/messages.js';
import type { LumiScriptSettings } from './types/script.js';
import { DEFAULT_SETTINGS } from './types/script.js';
import { ScriptStorage } from './storage/script-storage.js';
import { SettingsStore } from './storage/settings-store.js';
import { executionStatusStore } from './engine/execution-status.js';
import { setActiveContext, getActiveContext } from './engine/binding.js';
import { executeScript } from './engine/executor.js';
import { generateUUID } from './utils/uuid.js';

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

function pushSettings(): void {
  send({ type: 'settings_updated', settings: settingsStore.get() });
}

// ─── Frontend message handler ─────────────────────────────────────────────────

spindle.onFrontendMessage(async (raw, userId) => {
  activeUserId = userId;

  // Lazy-load storage on the first message so userId is known before any read or write.
  // This matches the pattern used by other Lumiverse extensions (e.g. silly_sim_tracker)
  // and avoids a read/write path mismatch caused by loading before userId is available.
  if (!settingsStore.isLoaded) await settingsStore.load();
  if (!scriptStorage.store.isLoaded) await scriptStorage.load();

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
        break;
      }

      case 'get_active_context': {
        // Always fetch live state rather than relying only on the cached context.
        const activeChat = await spindle.chats.getActive();
        if (activeChat) {
          setActiveContext({ chatId: activeChat.id, characterId: activeChat.character_id });
        }
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
        break;
      }

      case 'update_script': {
        await scriptStorage.updateScript(msg.id, msg.patch);
        pushScripts();
        break;
      }

      case 'delete_script': {
        await scriptStorage.deleteScript(msg.id);
        pushScripts();
        break;
      }

      case 'duplicate_script': {
        await scriptStorage.duplicateScript(msg.id);
        pushScripts();
        break;
      }

      // ── Settings ─────────────────────────────────────────────────────────
      case 'update_settings': {
        await settingsStore.update(msg.patch);
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

spindle.on('CHAT_CHANGED', (payload: unknown) => {
  const p = payload as { chatId?: string } | null;
  const newChatId = p?.chatId ?? null;
  // Fetch the full chat DTO to get character_id — the event payload doesn't include it.
  if (newChatId) {
    void spindle.chats.get(newChatId).then(chat => {
      setActiveContext({
        chatId: newChatId,
        characterId: chat?.character_id ?? null,
      });
      const ctx = getActiveContext();
      send({
        type: 'active_context',
        characterId: ctx.characterId,
        characterName: ctx.characterName,
        chatId: ctx.chatId,
      });
    });
  } else {
    setActiveContext({ chatId: null, characterId: null });
    const ctx = getActiveContext();
    send({
      type: 'active_context',
      characterId: ctx.characterId,
      characterName: ctx.characterName,
      chatId: ctx.chatId,
    });
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

// ─── Permission denied handler ────────────────────────────────────────────────

spindle.permissions.onDenied(({ permission, operation }) => {
  spindle.log.warn(`[LumiScript] Permission "${permission}" denied for "${operation}"`);
});

// ─── Init ─────────────────────────────────────────────────────────────────────

;(async () => {
  await refreshPermissions();
  // Populate the active context immediately using spindle.chats.getActive() so that
  // api.chat.*, api.variables.local/character, and script bindings all work from the
  // first script run — without waiting for a CHAT_CHANGED event to fire.
  try {
    const activeChat = await spindle.chats.getActive();
    if (activeChat) {
      setActiveContext({ chatId: activeChat.id, characterId: activeChat.character_id });
      spindle.log.info(`[LumiScript] Active context: chat=${activeChat.id} character=${activeChat.character_id}`);
    }
  } catch {
    // Non-fatal — active context stays null/null until the first CHAT_CHANGED event.
  }
  // Storage is loaded lazily in onFrontendMessage once userId is known.
  spindle.log.info('LumiScript backend ready');
})();

export {};
