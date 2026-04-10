/**
 * ============================================================================
 * LUMISCRIPT — COMMANDS API
 * ============================================================================
 * Implements api.commands — register discoverable actions in the Lumiverse
 * command palette (Cmd/Ctrl+K).
 *
 * Free tier — no permission required.
 *
 * Each register() call replaces all previously registered commands from
 * this extension. Spindle enforces a max of 20 commands per extension.
 *
 * Handler lifecycle:
 *   onInvoked() automatically unsubscribes any previously registered handler
 *   for this script, preventing accumulation when trigger scripts re-fire.
 *   This mirrors the broadcast-bus subscription accumulation guard.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, CommandDefinition } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';

/**
 * Per-script command handler unsub tracker.
 * Prevents handler accumulation when a trigger script fires multiple times
 * and calls onInvoked() in each execution.
 */
const handlerUnsubs = new Map<string, () => void>();

/** Clear the tracked handler for a script. Called from trigger-registry cleanup. */
export function clearCommandHandlerByScriptId(scriptId: string): void {
  const unsub = handlerUnsubs.get(scriptId);
  if (unsub) {
    unsub();
    handlerUnsubs.delete(scriptId);
  }
}

/** Clear all tracked command handlers. Used by test harness. */
export function clearAllCommandHandlers(): void {
  for (const unsub of handlerUnsubs.values()) unsub();
  handlerUnsubs.clear();
}

export function buildCommandsAPI(deps: APIBuildDeps): LumiScriptAPI['commands'] {
  const { script } = deps;

  return {
    register(commands: CommandDefinition[]): void {
      spindle.commands.register(
        commands.map(cmd => ({
          id:          cmd.id,
          label:       cmd.label,
          description: cmd.description,
          keywords:    cmd.keywords,
          scope:       cmd.scope,
        })),
      );
    },

    unregister(commandIds?: string[]): void {
      spindle.commands.unregister(commandIds);
    },

    onInvoked(handler: (commandId: string, context: { route: string; chatId?: string; characterId?: string; isGroupChat?: boolean }) => void | Promise<void>): () => void {
      // Unsubscribe the previous handler for this script (if any) to prevent
      // accumulation across trigger re-fires.
      clearCommandHandlerByScriptId(script.id);

      const unsub = spindle.commands.onInvoked((commandId, ctx) => {
        handler(commandId, {
          route:        ctx.route,
          chatId:       ctx.chatId,
          characterId:  ctx.characterId,
          isGroupChat:  ctx.isGroupChat,
        });
      });

      handlerUnsubs.set(script.id, unsub);

      return () => {
        unsub();
        handlerUnsubs.delete(script.id);
      };
    },
  };
}
