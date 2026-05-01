/**
 * Parent-side unit tests for the api.databanks namespace.
 *
 * Mirrors the personas.test.ts shape (mock-spindle injected via global,
 * `createTestDeps` for APIBuildDeps, named `mockSpindle.databanks.*`
 * functions used as MockReturnValueOnce hooks). Coverage:
 *
 *   - DTO ↔ camelCase translation (DatabankDTO → DatabankInfo,
 *     DatabankDocumentDTO → DatabankDocumentInfo).
 *   - Permission gating on every method.
 *   - Input mapping (snake_case → camelCase + scope_id pass-through).
 *   - documents.create's string-or-Uint8Array convenience (strings UTF-8 encoded).
 *   - findByName helpers (databanks + documents): match found, no match,
 *     scope filter pass-through.
 *   - waitUntilReady polling: ready-on-first-check fast path, transitions
 *     pending→processing→ready, error status throws, timeout throws,
 *     mid-poll deletion throws.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildDatabanksAPI } from '../../../src/engine/api/databanks.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildDatabanksAPI(createTestDeps(overrides));
}

// ─── Fixtures ────────────────────────────────────────────────────────────────

const databankDTO = {
  id: 'db-1',
  name: 'Session Notes',
  description: 'Imported notes',
  scope: 'chat' as const,
  scope_id: 'chat-xyz',
  enabled: true,
  metadata: { tag: 'live' },
  document_count: 3,
  created_at: 1700000000,
  updated_at: 1700000100,
};

const documentDTO = {
  id: 'doc-1',
  databank_id: 'db-1',
  name: 'session-recap',
  slug: 'session-recap',
  mime_type: 'text/markdown',
  file_size: 256,
  content_hash: 'abc123',
  total_chunks: 4,
  status: 'ready' as const,
  error_message: null,
  metadata: {},
  created_at: 1700000000,
  updated_at: 1700000200,
};

// ─── Top-level CRUD ──────────────────────────────────────────────────────────

describe('list', () => {
  test('maps DTOs to camelCase', async () => {
    mockSpindle.databanks.list.mockReturnValueOnce(
      Promise.resolve({ data: [databankDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.total).toBe(1);
    const bank = result.data[0]!;
    expect(bank.id).toBe('db-1');
    expect(bank.scopeId).toBe('chat-xyz');
    expect(bank.documentCount).toBe(3);
    expect(bank.createdAt).toBe(1700000000);
    expect(bank.updatedAt).toBe(1700000100);
  });

  test('passes scope filter through', async () => {
    mockSpindle.databanks.list.mockReturnValueOnce(
      Promise.resolve({ data: [], total: 0 }),
    );
    const api = buildApi();
    await api.list({ scope: 'character', scopeId: 'char-1' });
    const opts = (mockSpindle.databanks.list.mock.calls[0] as any)[0];
    expect(opts.scope).toBe('character');
    expect(opts.scopeId).toBe('char-1');
    expect(opts.userId).toBe('test-user-id');
  });

  test('throws when databanks permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED:databanks');
  });
});

describe('get', () => {
  test('returns mapped databank', async () => {
    mockSpindle.databanks.get.mockReturnValueOnce(Promise.resolve(databankDTO));
    const api = buildApi();
    const result = await api.get('db-1');
    expect(result!.name).toBe('Session Notes');
    expect(result!.scopeId).toBe('chat-xyz');
  });

  test('returns null when not found', async () => {
    mockSpindle.databanks.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('missing')).toBeNull();
  });

  test('throws when permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.get('db-1')).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('findByName', () => {
  test('returns the first match across the page', async () => {
    const dtoA = { ...databankDTO, id: 'db-A', name: 'Other' };
    const dtoB = { ...databankDTO, id: 'db-B', name: 'Wanted' };
    mockSpindle.databanks.list.mockReturnValueOnce(
      Promise.resolve({ data: [dtoA, dtoB], total: 2 }),
    );
    const api = buildApi();
    const found = await api.findByName('Wanted');
    expect(found).not.toBeNull();
    expect(found!.id).toBe('db-B');
  });

  test('returns null when no match', async () => {
    mockSpindle.databanks.list.mockReturnValueOnce(
      Promise.resolve({ data: [databankDTO], total: 1 }),
    );
    const api = buildApi();
    expect(await api.findByName('Nope')).toBeNull();
  });

  test('passes scope filter to spindle.databanks.list', async () => {
    mockSpindle.databanks.list.mockReturnValueOnce(
      Promise.resolve({ data: [], total: 0 }),
    );
    const api = buildApi();
    await api.findByName('Foo', 'character');
    const opts = (mockSpindle.databanks.list.mock.calls[0] as any)[0];
    expect(opts.scope).toBe('character');
  });

  test('paginates when first page has no match', async () => {
    const dtoB = { ...databankDTO, id: 'db-B', name: 'Match' };
    mockSpindle.databanks.list
      .mockReturnValueOnce(Promise.resolve({ data: [databankDTO], total: 2 }))
      .mockReturnValueOnce(Promise.resolve({ data: [dtoB], total: 2 }));
    const api = buildApi();
    const found = await api.findByName('Match');
    expect(found!.id).toBe('db-B');
    expect(mockSpindle.databanks.list.mock.calls.length).toBe(2);
    const offsetSecond = (mockSpindle.databanks.list.mock.calls[1] as any)[0].offset;
    expect(offsetSecond).toBe(1);
  });
});

describe('create', () => {
  test('maps input to snake_case and returns mapped result', async () => {
    mockSpindle.databanks.create.mockReturnValueOnce(Promise.resolve(databankDTO));
    const api = buildApi();
    const result = await api.create({
      name: 'New Bank',
      description: 'desc',
      scope: 'chat',
      scopeId: 'chat-xyz',
    });
    expect(result.id).toBe('db-1');
    const args = (mockSpindle.databanks.create.mock.calls[0] as any);
    expect(args[0].name).toBe('New Bank');
    expect(args[0].scope_id).toBe('chat-xyz');
    expect(args[0].description).toBe('desc');
  });

  test('omits scope_id when not provided (global scope)', async () => {
    mockSpindle.databanks.create.mockReturnValueOnce(
      Promise.resolve({ ...databankDTO, scope: 'global', scope_id: null }),
    );
    const api = buildApi();
    await api.create({ name: 'Global Bank', scope: 'global' });
    const dto = (mockSpindle.databanks.create.mock.calls[0] as any)[0];
    expect('scope_id' in dto).toBe(false);
  });
});

describe('update', () => {
  test('maps update input to snake_case (subset)', async () => {
    mockSpindle.databanks.update.mockReturnValueOnce(Promise.resolve(databankDTO));
    const api = buildApi();
    await api.update('db-1', { description: 'new desc', enabled: false });
    const args = (mockSpindle.databanks.update.mock.calls[0] as any);
    expect(args[0]).toBe('db-1');
    expect(args[1].description).toBe('new desc');
    expect(args[1].enabled).toBe(false);
    expect('name' in args[1]).toBe(false);
  });
});

describe('delete', () => {
  test('delegates to spindle.databanks.delete', async () => {
    mockSpindle.databanks.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('db-1')).toBe(true);
  });
});

// ─── Documents ───────────────────────────────────────────────────────────────

describe('documents.list', () => {
  test('maps document DTOs to camelCase', async () => {
    mockSpindle.databanks.documents.list.mockReturnValueOnce(
      Promise.resolve({ data: [documentDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.documents.list('db-1');
    const doc = result.data[0]!;
    expect(doc.databankId).toBe('db-1');
    expect(doc.mimeType).toBe('text/markdown');
    expect(doc.fileSize).toBe(256);
    expect(doc.contentHash).toBe('abc123');
    expect(doc.totalChunks).toBe(4);
    expect(doc.status).toBe('ready');
    expect(doc.errorMessage).toBeNull();
  });
});

describe('documents.get', () => {
  test('returns null when not found', async () => {
    mockSpindle.databanks.documents.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.documents.get('missing')).toBeNull();
  });
});

describe('documents.findByName', () => {
  test('returns the first document matching the display name', async () => {
    const otherDoc = { ...documentDTO, id: 'doc-2', name: 'other-doc' };
    mockSpindle.databanks.documents.list.mockReturnValueOnce(
      Promise.resolve({ data: [otherDoc, documentDTO], total: 2 }),
    );
    const api = buildApi();
    const found = await api.documents.findByName('db-1', 'session-recap');
    expect(found!.id).toBe('doc-1');
  });
});

describe('documents.create', () => {
  test('UTF-8 encodes string input', async () => {
    mockSpindle.databanks.documents.create.mockReturnValueOnce(Promise.resolve(documentDTO));
    const api = buildApi();
    await api.documents.create('db-1', {
      data: '# Hello',
      filename: 'note.md',
    });
    const args = (mockSpindle.databanks.documents.create.mock.calls[0] as any);
    expect(args[0]).toBe('db-1');
    const dto = args[1];
    expect(dto.data).toBeInstanceOf(Uint8Array);
    expect(new TextDecoder().decode(dto.data)).toBe('# Hello');
    expect(dto.filename).toBe('note.md');
  });

  test('passes Uint8Array through unchanged', async () => {
    mockSpindle.databanks.documents.create.mockReturnValueOnce(Promise.resolve(documentDTO));
    const api = buildApi();
    const bytes = new Uint8Array([0x68, 0x69]);
    await api.documents.create('db-1', { data: bytes, filename: 'a.bin' });
    const dto = (mockSpindle.databanks.documents.create.mock.calls[0] as any)[1];
    expect(dto.data).toBe(bytes);
  });

  test('maps name + mimeType to snake_case', async () => {
    mockSpindle.databanks.documents.create.mockReturnValueOnce(Promise.resolve(documentDTO));
    const api = buildApi();
    await api.documents.create('db-1', {
      data: 'x',
      filename: 'a.md',
      mimeType: 'text/markdown',
      name: 'Display',
    });
    const dto = (mockSpindle.databanks.documents.create.mock.calls[0] as any)[1];
    expect(dto.mime_type).toBe('text/markdown');
    expect(dto.name).toBe('Display');
  });
});

describe('documents.update', () => {
  test('passes the new name through', async () => {
    mockSpindle.databanks.documents.update.mockReturnValueOnce(Promise.resolve(documentDTO));
    const api = buildApi();
    await api.documents.update('doc-1', { name: 'Renamed' });
    const args = (mockSpindle.databanks.documents.update.mock.calls[0] as any);
    expect(args[0]).toBe('doc-1');
    expect(args[1].name).toBe('Renamed');
  });
});

describe('documents.getContent', () => {
  test('returns content payload when available', async () => {
    mockSpindle.databanks.documents.getContent.mockReturnValueOnce(
      Promise.resolve({ content: '# Hello' }),
    );
    const api = buildApi();
    const result = await api.documents.getContent('doc-1');
    expect(result!.content).toBe('# Hello');
  });

  test('returns null when not yet ready / missing', async () => {
    mockSpindle.databanks.documents.getContent.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.documents.getContent('doc-1')).toBeNull();
  });
});

describe('documents.reprocess', () => {
  test('returns the success envelope', async () => {
    mockSpindle.databanks.documents.reprocess.mockReturnValueOnce(
      Promise.resolve({ success: true, status: 'processing' }),
    );
    const api = buildApi();
    const result = await api.documents.reprocess('doc-1');
    expect(result.success).toBe(true);
    expect(result.status).toBe('processing');
  });
});

// ─── waitUntilReady polling ──────────────────────────────────────────────────

describe('documents.waitUntilReady', () => {
  test('returns immediately when already ready (single get)', async () => {
    mockSpindle.databanks.documents.get.mockReturnValueOnce(
      Promise.resolve({ ...documentDTO, status: 'ready' }),
    );
    const api = buildApi();
    const result = await api.documents.waitUntilReady('doc-1');
    expect(result.status).toBe('ready');
    expect(mockSpindle.databanks.documents.get.mock.calls.length).toBe(1);
  });

  test('polls through pending → processing → ready', async () => {
    mockSpindle.databanks.documents.get
      .mockReturnValueOnce(Promise.resolve({ ...documentDTO, status: 'pending' }))
      .mockReturnValueOnce(Promise.resolve({ ...documentDTO, status: 'processing' }))
      .mockReturnValueOnce(Promise.resolve({ ...documentDTO, status: 'ready' }));
    const api = buildApi();
    const result = await api.documents.waitUntilReady('doc-1', { pollIntervalMs: 1, timeoutMs: 5_000 });
    expect(result.status).toBe('ready');
    expect(mockSpindle.databanks.documents.get.mock.calls.length).toBe(3);
  });

  test('throws when status reaches "error"', async () => {
    mockSpindle.databanks.documents.get.mockReturnValueOnce(
      Promise.resolve({ ...documentDTO, status: 'error', error_message: 'parse failed' }),
    );
    const api = buildApi();
    await expect(api.documents.waitUntilReady('doc-1')).rejects.toThrow(/failed processing.*parse failed/);
  });

  test('throws when document is deleted mid-poll (get returns null)', async () => {
    mockSpindle.databanks.documents.get
      .mockReturnValueOnce(Promise.resolve({ ...documentDTO, status: 'processing' }))
      .mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    await expect(
      api.documents.waitUntilReady('doc-1', { pollIntervalMs: 1, timeoutMs: 5_000 }),
    ).rejects.toThrow(/disappeared.*deleted/);
  });

  test('throws on timeout', async () => {
    mockSpindle.databanks.documents.get.mockReturnValue(
      Promise.resolve({ ...documentDTO, status: 'pending' }),
    );
    const api = buildApi();
    await expect(
      api.documents.waitUntilReady('doc-1', { pollIntervalMs: 5, timeoutMs: 20 }),
    ).rejects.toThrow(/did not reach 'ready' within 20ms/);
  });
});
