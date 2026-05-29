import { describe, test, expect, beforeEach } from 'bun:test';
import { buildMemoriesAPI } from '../../../src/engine/api/memories.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

describe('api.memories — permission gate', () => {
  test('every sub-namespace throws without the memories permission', () => {
    const api = buildMemoriesAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => api.cortex.query({ chatId: 'c', queryText: 'q' })).toThrow('PERMISSION_DENIED');
    expect(() => api.cortex.getConfig()).toThrow('PERMISSION_DENIED');
    expect(() => api.chatMemory.get('c')).toThrow('PERMISSION_DENIED');
    expect(() => api.chatMemory.listChunks('c')).toThrow('PERMISSION_DENIED');
    expect(() => api.stats.usage('c')).toThrow('PERMISSION_DENIED');
  });
});

describe('api.memories.cortex', () => {
  test('query folds in the active userId (overriding any caller-supplied one) and passes the result through', async () => {
    mockSpindle.memories.cortex.query.mockReturnValueOnce(Promise.resolve({
      memories: [{ source: 'chunk', sourceId: 's', content: 'hi', finalScore: 0.9 }],
      entityContext: [], activeRelationships: [], arcContext: 'Act I', stats: {},
    }));
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-1' }));
    const r = await api.cortex.query({ chatId: 'chat-1', queryText: 'selene', topK: 5, userId: 'spoofed' } as any);

    const call = mockSpindle.memories.cortex.query.mock.calls[0][0];
    expect(call.chatId).toBe('chat-1');
    expect(call.queryText).toBe('selene');
    expect(call.topK).toBe(5);
    expect(call.userId).toBe('u-1'); // active user wins over the caller-supplied 'spoofed'

    expect(r.memories).toHaveLength(1);
    expect(r.arcContext).toBe('Act I');
  });

  test('getConfig / putConfig forward the active userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-2' }));
    await api.cortex.getConfig();
    expect(mockSpindle.memories.cortex.getConfig.mock.calls[0][0]).toBe('u-2');

    await api.cortex.putConfig({ enabled: true });
    expect(mockSpindle.memories.cortex.putConfig.mock.calls[0][0]).toEqual({ enabled: true });
    expect(mockSpindle.memories.cortex.putConfig.mock.calls[0][1]).toBe('u-2');
  });

  test('queryLinked forwards chatId + { queryText, userId }', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-3' }));
    await api.cortex.queryLinked('chat-9', { queryText: 'dagger' });
    expect(mockSpindle.memories.cortex.queryLinked.mock.calls[0][0]).toBe('chat-9');
    expect(mockSpindle.memories.cortex.queryLinked.mock.calls[0][1]).toEqual({ queryText: 'dagger', userId: 'u-3' });
  });

  test('getCached returns null when no cache; invalidateCache forwards chatId', async () => {
    const api = buildMemoriesAPI(createTestDeps());
    expect(await api.cortex.getCached('chat-1')).toBeNull();
    await api.cortex.invalidateCache('chat-1');
    expect(mockSpindle.memories.cortex.invalidateCache.mock.calls[0][0]).toBe('chat-1');
  });
});

describe('api.memories.chatMemory', () => {
  test('get forwards chatId + { topK, userId } and passes the payload through', async () => {
    mockSpindle.memories.chatMemory.get.mockReturnValueOnce(Promise.resolve({
      chunks: [{ content: 'c', score: 0.5, metadata: {} }], formatted: 'F', count: 1,
      enabled: true, queryPreview: 'q', settingsSource: 'per_chat', chunksAvailable: 3, chunksPending: 0,
    }));
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-4' }));
    const r = await api.chatMemory.get('chat-1', { topK: 6 });
    expect(mockSpindle.memories.chatMemory.get.mock.calls[0][0]).toBe('chat-1');
    expect(mockSpindle.memories.chatMemory.get.mock.calls[0][1]).toEqual({ topK: 6, userId: 'u-4' });
    expect(r.count).toBe(1);
    expect(r.formatted).toBe('F');
  });

  test('listChunks / invalidate forward chatId + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-5' }));
    await api.chatMemory.listChunks('chat-2');
    expect(mockSpindle.memories.chatMemory.listChunks.mock.calls[0]).toEqual(['chat-2', 'u-5']);
    await api.chatMemory.invalidate('chat-2');
    expect(mockSpindle.memories.chatMemory.invalidate.mock.calls[0]).toEqual(['chat-2', 'u-5']);
  });
});

describe('api.memories.stats', () => {
  test('usage / ingestionStatus / ingestionTelemetry forward chatId + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-6' }));
    await api.stats.usage('chat-3');
    await api.stats.ingestionStatus('chat-3');
    await api.stats.ingestionTelemetry('chat-3');
    expect(mockSpindle.memories.stats.usage.mock.calls[0]).toEqual(['chat-3', 'u-6']);
    expect(mockSpindle.memories.stats.ingestionStatus.mock.calls[0]).toEqual(['chat-3', 'u-6']);
    expect(mockSpindle.memories.stats.ingestionTelemetry.mock.calls[0]).toEqual(['chat-3', 'u-6']);
  });
});

describe('api.memories.entities', () => {
  test('gate applies', () => {
    const api = buildMemoriesAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => api.entities.list('c')).toThrow('PERMISSION_DENIED');
    expect(() => api.relations.upsert('c', { source: 'a', target: 'b', type: 'ally', label: '', sentiment: 0 })).toThrow('PERMISSION_DENIED');
  });

  test('list folds userId into options', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-1' }));
    await api.entities.list('chat-1', { activeOnly: false, limit: 10 });
    expect(mockSpindle.memories.entities.list.mock.calls[0][0]).toBe('chat-1');
    expect(mockSpindle.memories.entities.list.mock.calls[0][1]).toEqual({ activeOnly: false, limit: 10, userId: 'u-1' });
  });

  test('get / findByName forward the trailing userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-2' }));
    await api.entities.get('e-1');
    expect(mockSpindle.memories.entities.get.mock.calls[0]).toEqual(['e-1', 'u-2']);
    await api.entities.findByName('chat-1', 'Selene');
    expect(mockSpindle.memories.entities.findByName.mock.calls[0]).toEqual(['chat-1', 'Selene', 'u-2']);
  });

  test('upsert forwards entity + { chunkId, createdAt, userId }', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-3' }));
    await api.entities.upsert('chat-1', { name: 'Selene', type: 'character', aliases: ['Lady of Ashes'] }, { chunkId: 'k-1' });
    expect(mockSpindle.memories.entities.upsert.mock.calls[0][0]).toBe('chat-1');
    expect(mockSpindle.memories.entities.upsert.mock.calls[0][1]).toEqual({ name: 'Selene', type: 'character', aliases: ['Lady of Ashes'] });
    expect(mockSpindle.memories.entities.upsert.mock.calls[0][2]).toEqual({ chunkId: 'k-1', userId: 'u-3' });
  });

  test('addFacts / updateEmotionalValence forward args + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-4' }));
    await api.entities.addFacts('e-1', ['Allergic to silver']);
    expect(mockSpindle.memories.entities.addFacts.mock.calls[0]).toEqual(['e-1', ['Allergic to silver'], 'u-4']);
    await api.entities.updateEmotionalValence('e-1', { betrayal: 0.6 });
    expect(mockSpindle.memories.entities.updateEmotionalValence.mock.calls[0]).toEqual(['e-1', { betrayal: 0.6 }, 'u-4']);
  });
});

describe('api.memories.relations', () => {
  test('list / forEntity forward chatId (+ entityId) + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-5' }));
    await api.relations.list('chat-1');
    expect(mockSpindle.memories.relations.list.mock.calls[0]).toEqual(['chat-1', 'u-5']);
    await api.relations.forEntity('chat-1', 'e-1');
    expect(mockSpindle.memories.relations.forEntity.mock.calls[0]).toEqual(['chat-1', 'e-1', 'u-5']);
  });

  test('upsert forwards relation + { chunkId, userId } and passes null through when dropped', async () => {
    mockSpindle.memories.relations.upsert.mockReturnValueOnce(Promise.resolve(null));
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-6' }));
    const r = await api.relations.upsert('chat-1', { source: 'Selene', target: 'Marcus', type: 'rival', label: 'duel pending', sentiment: -0.4 }, { chunkId: 'k-2' });
    expect(mockSpindle.memories.relations.upsert.mock.calls[0][1]).toEqual({ source: 'Selene', target: 'Marcus', type: 'rival', label: 'duel pending', sentiment: -0.4 });
    expect(mockSpindle.memories.relations.upsert.mock.calls[0][2]).toEqual({ chunkId: 'k-2', userId: 'u-6' });
    expect(r).toBeNull();
  });

  test('forEntities folds userId into options', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-7' }));
    await api.relations.forEntities('chat-1', ['e-1', 'e-2'], { limit: 50 });
    expect(mockSpindle.memories.relations.forEntities.mock.calls[0][1]).toEqual(['e-1', 'e-2']);
    expect(mockSpindle.memories.relations.forEntities.mock.calls[0][2]).toEqual({ limit: 50, userId: 'u-7' });
  });
});

describe('api.memories.consolidations + salience', () => {
  test('gate applies', () => {
    const api = buildMemoriesAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => api.consolidations.run('c')).toThrow('PERMISSION_DENIED');
    expect(() => api.salience.list('c')).toThrow('PERMISSION_DENIED');
    expect(() => api.vaults.list()).toThrow('PERMISSION_DENIED');
    expect(() => api.links.list('c')).toThrow('PERMISSION_DENIED');
  });

  test('consolidations.list folds userId into options; latestArc/run forward trailing userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-1' }));
    await api.consolidations.list('chat-1', { tier: 2 });
    expect(mockSpindle.memories.consolidations.list.mock.calls[0][1]).toEqual({ tier: 2, userId: 'u-1' });
    await api.consolidations.latestArc('chat-1');
    expect(mockSpindle.memories.consolidations.latestArc.mock.calls[0]).toEqual(['chat-1', 'u-1']);
    await api.consolidations.run('chat-1');
    expect(mockSpindle.memories.consolidations.run.mock.calls[0]).toEqual(['chat-1', 'u-1']);
  });

  test('salience.list folds userId into options', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-2' }));
    await api.salience.list('chat-1', { limit: 100, offset: 20 });
    expect(mockSpindle.memories.salience.list.mock.calls[0][1]).toEqual({ limit: 100, offset: 20, userId: 'u-2' });
  });
});

describe('api.memories.vaults', () => {
  test('list forwards only the active userId; create forwards input + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-3' }));
    await api.vaults.list();
    expect(mockSpindle.memories.vaults.list.mock.calls[0]).toEqual(['u-3']);
    await api.vaults.create({ chatId: 'chat-1', name: 'Act I', description: 'frozen' });
    expect(mockSpindle.memories.vaults.create.mock.calls[0][0]).toEqual({ chatId: 'chat-1', name: 'Act I', description: 'frozen' });
    expect(mockSpindle.memories.vaults.create.mock.calls[0][1]).toBe('u-3');
  });

  test('rename / delete / reindex forward args + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-4' }));
    await api.vaults.rename('v-1', 'New name');
    expect(mockSpindle.memories.vaults.rename.mock.calls[0]).toEqual(['v-1', 'New name', 'u-4']);
    await api.vaults.delete('v-1');
    expect(mockSpindle.memories.vaults.delete.mock.calls[0]).toEqual(['v-1', 'u-4']);
    await api.vaults.reindex('v-1');
    expect(mockSpindle.memories.vaults.reindex.mock.calls[0]).toEqual(['v-1', 'u-4']);
  });
});

describe('api.memories.links', () => {
  test('attach forwards input + userId; remove / toggle forward args + userId', async () => {
    const api = buildMemoriesAPI(createTestDeps({ userId: 'u-5' }));
    await api.links.attach({ chatId: 'chat-b', linkType: 'interlink', targetChatId: 'chat-a', bidirectional: true });
    expect(mockSpindle.memories.links.attach.mock.calls[0][0]).toEqual({ chatId: 'chat-b', linkType: 'interlink', targetChatId: 'chat-a', bidirectional: true });
    expect(mockSpindle.memories.links.attach.mock.calls[0][1]).toBe('u-5');
    await api.links.remove('chat-b', 'link-1');
    expect(mockSpindle.memories.links.remove.mock.calls[0]).toEqual(['chat-b', 'link-1', 'u-5']);
    await api.links.toggle('chat-b', 'link-1', false);
    expect(mockSpindle.memories.links.toggle.mock.calls[0]).toEqual(['chat-b', 'link-1', false, 'u-5']);
  });
});
