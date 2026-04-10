/**
 * ============================================================================
 * LUMISCRIPT — BINDING ENGINE
 * ============================================================================
 * Tracks the currently active character and chat in the backend worker.
 * Provides isAnyBindingSatisfied() for the execution gate.
 *
 * Active context is updated by backend.ts when it receives Lumiverse events:
 * - CHAT_CHANGED         → new chatId
 * - CHARACTER_EDITED     → may update characterId
 * - PERSONA_CHANGED      → may update characterId + characterName
 */

import type { ScriptBindingEntry } from '../types/script.js';

// ─── Mutable active context ───────────────────────────────────────────────────

interface ActiveContext {
  characterId: string | null;
  characterName: string | null;
  chatId: string | null;
}

const context: ActiveContext = {
  characterId: null,
  characterName: null,
  chatId: null,
};

// ─── Setters (called from backend.ts event handlers) ─────────────────────────

export function setActiveCharacter(id: string | null, name: string | null): void {
  context.characterId = id;
  context.characterName = name;
}

export function setActiveChat(id: string | null): void {
  context.chatId = id;
}

export function setActiveContext(ctx: Partial<ActiveContext>): void {
  if ('characterId' in ctx) context.characterId = ctx.characterId ?? null;
  if ('characterName' in ctx) context.characterName = ctx.characterName ?? null;
  if ('chatId' in ctx) context.chatId = ctx.chatId ?? null;
}

/** Reset context to initial null state. Used by test harness. */
export function resetContext(): void {
  context.characterId = null;
  context.characterName = null;
  context.chatId = null;
}

// ─── Getters ──────────────────────────────────────────────────────────────────

export function getActiveContext(): Readonly<ActiveContext> {
  return { ...context };
}

export function getActiveCharacterId(): string | null {
  return context.characterId;
}

export function getActiveCharacterName(): string | null {
  return context.characterName;
}

export function getActiveChatId(): string | null {
  return context.chatId;
}

// ─── Binding evaluation ───────────────────────────────────────────────────────

/**
 * Evaluate whether a script's bindings permit execution in the current context.
 *
 * Semantics:
 * - No bindings (undefined / empty) → global; always permitted.
 * - Non-empty → any single matching entry permits execution (OR logic).
 *
 * Character bindings match when the active character ID equals the binding's
 * characterId. Chat bindings match when the active chat ID equals the binding's
 * chatId.
 */
export function isAnyBindingSatisfied(bindings: ScriptBindingEntry[] | undefined): boolean {
  if (!bindings || bindings.length === 0) return true;

  for (const entry of bindings) {
    if (entry.type === 'character') {
      if (entry.characterId && entry.characterId === context.characterId) return true;
    } else if (entry.type === 'chat') {
      if (entry.chatId && entry.chatId === context.chatId) return true;
    }
  }

  return false;
}
