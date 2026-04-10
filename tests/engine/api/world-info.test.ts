import { describe, test, expect, beforeEach } from 'bun:test';
import { buildWorldInfoAPI } from '../../../src/engine/api/world-info.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildWorldInfoAPI(createTestDeps(overrides));
}

const bookDTO = {
  id: 'wb-1', name: 'My Lorebook', description: 'desc',
  metadata: {}, created_at: '2026-01-01', updated_at: '2026-01-02',
};

const entryDTO = {
  id: 'entry-1', world_book_id: 'wb-1', uid: 1, key: ['keyword'],
  keysecondary: [], content: 'Entry content', comment: '', position: 0,
  depth: 4, role: 'system', order_value: 100, selective: false, constant: false,
  disabled: false, group_name: '', group_override: false, group_weight: 100,
  probability: 100, scan_depth: null, case_sensitive: false, match_whole_words: false,
  automation_id: '', use_regex: false, prevent_recursion: false,
  exclude_recursion: false, delay_until_recursion: false, priority: 10,
  sticky: null, cooldown: null, delay: null, selective_logic: 0,
  use_probability: true, vectorized: false, extensions: {},
  created_at: '2026-01-01', updated_at: '2026-01-02',
};

// ─── World book CRUD ─────────────────────────────────────────────────────────

describe('list', () => {
  test('maps DTOs to camelCase', async () => {
    mockSpindle.world_books.list.mockReturnValueOnce(
      Promise.resolve({ data: [bookDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.data[0]!.name).toBe('My Lorebook');
  });

  test('throws when world_books permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('get', () => {
  test('resolves UUID ref directly', async () => {
    mockSpindle.world_books.get.mockReturnValueOnce(Promise.resolve(bookDTO));
    const api = buildApi();
    const result = await api.get('a1b2c3d4-e5f6-7890-abcd-ef1234567890');
    expect(result!.name).toBe('My Lorebook');
  });

  test('resolves name ref via list lookup', async () => {
    // First, populate the cache via list
    mockSpindle.world_books.list.mockReturnValueOnce(
      Promise.resolve({ data: [bookDTO], total: 1 }),
    );
    mockSpindle.world_books.get.mockReturnValueOnce(Promise.resolve(bookDTO));
    const api = buildApi();
    const result = await api.get('My Lorebook');
    expect(result!.id).toBe('wb-1');
  });

  test('throws when name not found', async () => {
    mockSpindle.world_books.list.mockReturnValueOnce(
      Promise.resolve({ data: [], total: 0 }),
    );
    const api = buildApi();
    await expect(api.get('Nonexistent')).rejects.toThrow('not found');
  });
});

describe('create', () => {
  test('creates and returns mapped world book', async () => {
    mockSpindle.world_books.create.mockReturnValueOnce(Promise.resolve(bookDTO));
    const api = buildApi();
    const result = await api.create({ name: 'New Book' });
    expect(result.name).toBe('My Lorebook');
  });
});

describe('delete', () => {
  test('resolves ref and deletes', async () => {
    mockSpindle.world_books.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    // UUID ref — no list lookup needed
    expect(await api.delete('a1b2c3d4-e5f6-7890-abcd-ef1234567890')).toBe(true);
  });
});

// ─── Entry CRUD ──────────────────────────────────────────────────────────────

describe('entries.list', () => {
  test('maps entry DTOs to camelCase', async () => {
    mockSpindle.world_books.entries.list.mockReturnValueOnce(
      Promise.resolve({ data: [entryDTO], total: 1 }),
    );
    const api = buildApi();
    // UUID ref
    const result = await api.entries.list('a1b2c3d4-e5f6-7890-abcd-ef1234567890');
    expect(result.data[0]!.worldBookId).toBe('wb-1');
    expect(result.data[0]!.orderValue).toBe(100);
  });
});

describe('entries.get', () => {
  test('returns mapped entry or null', async () => {
    mockSpindle.world_books.entries.get.mockReturnValueOnce(Promise.resolve(entryDTO));
    const api = buildApi();
    const entry = await api.entries.get('entry-1');
    expect(entry!.content).toBe('Entry content');
  });
});

describe('entries.create', () => {
  test('maps input to snake_case and returns mapped entry', async () => {
    mockSpindle.world_books.entries.create.mockReturnValueOnce(Promise.resolve(entryDTO));
    const api = buildApi();
    const result = await api.entries.create(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { key: ['test'], content: 'content', scanDepth: 5, caseSensitive: true },
    );
    expect(result.content).toBe('Entry content');
    const call = mockSpindle.world_books.entries.create.mock.calls[0] as any;
    expect(call[1].scan_depth).toBe(5);
    expect(call[1].case_sensitive).toBe(true);
  });
});

describe('entries.delete', () => {
  test('delegates to spindle.world_books.entries.delete', async () => {
    mockSpindle.world_books.entries.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.entries.delete('entry-1')).toBe(true);
  });
});

// ─── getCapturedActive ───────────────────────────────────────────────────────

describe('getCapturedActive', () => {
  test('returns activated entries with full data merged', async () => {
    mockSpindle.world_books.getActivated.mockReturnValueOnce(
      Promise.resolve([{ id: 'entry-1', source: 'keyword', score: 0.9 }]),
    );
    mockSpindle.world_books.entries.get.mockReturnValueOnce(Promise.resolve(entryDTO));
    const api = buildApi();
    const result = await api.getCapturedActive('chat-1');
    expect(result).toHaveLength(1);
    expect(result[0]!.content).toBe('Entry content');
    expect(result[0]!.source).toBe('keyword');
    expect(result[0]!.score).toBe(0.9);
  });

  test('returns empty array when no entries activated', async () => {
    mockSpindle.world_books.getActivated.mockReturnValueOnce(Promise.resolve([]));
    const api = buildApi();
    expect(await api.getCapturedActive('chat-1')).toEqual([]);
  });

  test('throws when no chatId available', async () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    await expect(api.getCapturedActive()).rejects.toThrow('no active chat');
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('update', () => {
  test('resolves ref, updates, and refreshes name cache', async () => {
    const updatedDTO = { ...bookDTO, name: 'Renamed Book' };
    mockSpindle.world_books.update.mockReturnValueOnce(Promise.resolve(updatedDTO));
    const api = buildApi();
    // Use UUID ref (no list lookup needed)
    const result = await api.update('a1b2c3d4-e5f6-7890-abcd-ef1234567890', { name: 'Renamed Book' });
    expect(result.name).toBe('Renamed Book');
  });
});

// ─── entries.create ──────────────────────────────────────────────────────────

describe('entries.create (additional)', () => {
  test('maps input fields to snake_case DTO', async () => {
    mockSpindle.world_books.entries.create.mockReturnValueOnce(Promise.resolve(entryDTO));
    const api = buildApi();
    await api.entries.create(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      {
        key: ['keyword'],
        content: 'Test content',
        orderValue: 50,
        matchWholeWords: true,
        preventRecursion: true,
      },
    );
    const call = mockSpindle.world_books.entries.create.mock.calls[0] as any;
    expect(call[1].order_value).toBe(50);
    expect(call[1].match_whole_words).toBe(true);
    expect(call[1].prevent_recursion).toBe(true);
  });
});

// ─── entries.update ──────────────────────────────────────────────────────────

describe('entries.update', () => {
  test('delegates to spindle and maps result', async () => {
    mockSpindle.world_books.entries.update.mockReturnValueOnce(Promise.resolve(entryDTO));
    const api = buildApi();
    const result = await api.entries.update('entry-1', {
      key: ['updated-keyword'],
      content: 'Updated content',
    });
    expect(result.id).toBe('entry-1');
    expect(mockSpindle.world_books.entries.update).toHaveBeenCalledTimes(1);
  });
});
