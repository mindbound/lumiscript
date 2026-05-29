/**
 * ============================================================================
 * LUMISCRIPT — MEMORIES API (Memory Cortex + Long-Term Chat Memory)
 * ============================================================================
 * Thin proxy over `spindle.memories.*`. The host owns the schema and its DTOs
 * are camelCase + already-safe, so this is a structural pass-through — the
 * script-facing types are direct aliases of the host DTOs (see script.ts).
 *
 * Gated on the `memories` permission (every method). The active `userId` is
 * folded in implicitly so scripts don't reason about operator-scoping; for the
 * `cortex.query` / `queryLinked` / `chatMemory.*` calls that carry a userId in
 * their options/payload, we OVERRIDE it with the active user.
 *
 * Phase 1 surface: `cortex` + `chatMemory` + `stats`. The entity/relation graph,
 * consolidations, salience, vaults, and links land in later phases.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  CortexQuery,
  MemoryCortexConfig,
  MemoryEntityUpsert,
  MemoryEntityStatusUpdate,
  MemoryRelationUpsert,
  VaultCreate,
  ChatLinkAttach,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm, shielded } from './shared.js';

export function buildMemoriesAPI(deps: APIBuildDeps): LumiScriptAPI['memories'] {
  const { hasPerm, script } = deps;
  const userId = deps.userId ?? undefined;
  const gate = (): void => assertPerm('memories', hasPerm, script.name);

  return {
    cortex: {
      getConfig: () => { gate(); return shielded(spindle.memories.cortex.getConfig(userId)); },
      putConfig: (patch: Partial<MemoryCortexConfig>) => {
        gate();
        return shielded(spindle.memories.cortex.putConfig(patch, userId));
      },
      query: (query: CortexQuery) => {
        gate();
        // Override any caller-supplied userId with the active user.
        return shielded(spindle.memories.cortex.query({ ...query, userId }));
      },
      queryLinked: (chatId: string, options?: { queryText?: string }) => {
        gate();
        return shielded(spindle.memories.cortex.queryLinked(chatId, { ...options, userId }));
      },
      getCached: (chatId: string) => { gate(); return shielded(spindle.memories.cortex.getCached(chatId)); },
      getCachedLinked: (chatId: string) => { gate(); return shielded(spindle.memories.cortex.getCachedLinked(chatId)); },
      invalidateCache: (chatId: string) => { gate(); return shielded(spindle.memories.cortex.invalidateCache(chatId)); },
      invalidateLinkedCache: (chatId: string) => { gate(); return shielded(spindle.memories.cortex.invalidateLinkedCache(chatId)); },
    },

    entities: {
      list: (chatId: string, options?: { activeOnly?: boolean; limit?: number }) => {
        gate();
        return shielded(spindle.memories.entities.list(chatId, { ...options, userId }));
      },
      get: (entityId: string) => { gate(); return shielded(spindle.memories.entities.get(entityId, userId)); },
      findByName: (chatId: string, name: string) => { gate(); return shielded(spindle.memories.entities.findByName(chatId, name, userId)); },
      upsert: (chatId: string, entity: MemoryEntityUpsert, options?: { chunkId?: string | null; createdAt?: number }) => {
        gate();
        return shielded(spindle.memories.entities.upsert(chatId, entity, { ...options, userId }));
      },
      updateStatus: (entityId: string, patch: MemoryEntityStatusUpdate) => {
        gate();
        return shielded(spindle.memories.entities.updateStatus(entityId, patch, userId));
      },
      addFacts: (entityId: string, facts: string[]) => { gate(); return shielded(spindle.memories.entities.addFacts(entityId, facts, userId)); },
      getFacts: (entityId: string) => { gate(); return shielded(spindle.memories.entities.getFacts(entityId, userId)); },
      updateEmotionalValence: (entityId: string, valence: Record<string, number>) => {
        gate();
        return shielded(spindle.memories.entities.updateEmotionalValence(entityId, valence, userId));
      },
    },

    relations: {
      list: (chatId: string) => { gate(); return shielded(spindle.memories.relations.list(chatId, userId)); },
      listAll: (chatId: string) => { gate(); return shielded(spindle.memories.relations.listAll(chatId, userId)); },
      forEntity: (chatId: string, entityId: string) => { gate(); return shielded(spindle.memories.relations.forEntity(chatId, entityId, userId)); },
      forEntities: (chatId: string, entityIds: string[], options?: { limit?: number }) => {
        gate();
        return shielded(spindle.memories.relations.forEntities(chatId, entityIds, { ...options, userId }));
      },
      upsert: (chatId: string, relation: MemoryRelationUpsert, options?: { chunkId?: string | null }) => {
        gate();
        return shielded(spindle.memories.relations.upsert(chatId, relation, { ...options, userId }));
      },
    },

    consolidations: {
      list: (chatId: string, options?: { tier?: number }) => {
        gate();
        return shielded(spindle.memories.consolidations.list(chatId, { ...options, userId }));
      },
      latestArc: (chatId: string) => { gate(); return shielded(spindle.memories.consolidations.latestArc(chatId, userId)); },
      run: (chatId: string) => { gate(); return shielded(spindle.memories.consolidations.run(chatId, userId)); },
    },

    salience: {
      list: (chatId: string, options?: { limit?: number; offset?: number }) => {
        gate();
        return shielded(spindle.memories.salience.list(chatId, { ...options, userId }));
      },
    },

    vaults: {
      list: () => { gate(); return shielded(spindle.memories.vaults.list(userId)); },
      get: (vaultId: string) => { gate(); return shielded(spindle.memories.vaults.get(vaultId, userId)); },
      getChunks: (vaultId: string) => { gate(); return shielded(spindle.memories.vaults.getChunks(vaultId, userId)); },
      create: (input: VaultCreate) => { gate(); return shielded(spindle.memories.vaults.create(input, userId)); },
      rename: (vaultId: string, name: string) => { gate(); return shielded(spindle.memories.vaults.rename(vaultId, name, userId)); },
      delete: (vaultId: string) => { gate(); return shielded(spindle.memories.vaults.delete(vaultId, userId)); },
      reindex: (vaultId: string) => { gate(); return shielded(spindle.memories.vaults.reindex(vaultId, userId)); },
    },

    links: {
      list: (chatId: string) => { gate(); return shielded(spindle.memories.links.list(chatId, userId)); },
      attach: (input: ChatLinkAttach) => { gate(); return shielded(spindle.memories.links.attach(input, userId)); },
      remove: (chatId: string, linkId: string) => { gate(); return shielded(spindle.memories.links.remove(chatId, linkId, userId)); },
      toggle: (chatId: string, linkId: string, enabled: boolean) => { gate(); return shielded(spindle.memories.links.toggle(chatId, linkId, enabled, userId)); },
    },

    chatMemory: {
      listChunks: (chatId: string) => { gate(); return shielded(spindle.memories.chatMemory.listChunks(chatId, userId)); },
      get: (chatId: string, options?: { topK?: number }) => {
        gate();
        return shielded(spindle.memories.chatMemory.get(chatId, { ...options, userId }));
      },
      warm: (chatId: string, options?: { force?: boolean }) => {
        gate();
        return shielded(spindle.memories.chatMemory.warm(chatId, { ...options, userId }));
      },
      invalidate: (chatId: string) => { gate(); return shielded(spindle.memories.chatMemory.invalidate(chatId, userId)); },
    },

    stats: {
      usage: (chatId: string) => { gate(); return shielded(spindle.memories.stats.usage(chatId, userId)); },
      ingestionStatus: (chatId: string) => { gate(); return shielded(spindle.memories.stats.ingestionStatus(chatId, userId)); },
      ingestionTelemetry: (chatId: string) => { gate(); return shielded(spindle.memories.stats.ingestionTelemetry(chatId, userId)); },
    },
  };
}
