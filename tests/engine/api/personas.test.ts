import { describe, test, expect, beforeEach } from 'bun:test';
import { buildPersonasAPI } from '../../../src/engine/api/personas.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildPersonasAPI(createTestDeps(overrides));
}

const personaDTO = {
  id: 'p-1', name: 'Default', title: 'Main Persona', description: 'desc',
  image_id: null, attached_world_book_id: null, folder: null,
  is_default: true, metadata: {}, created_at: '2026-01-01', updated_at: '2026-01-02',
};

const worldBookDTO = {
  id: 'wb-1', name: 'Lore', description: 'desc',
  metadata: {}, created_at: '2026-01-01', updated_at: '2026-01-02',
};

describe('list', () => {
  test('maps DTOs to camelCase', async () => {
    mockSpindle.personas.list.mockReturnValueOnce(
      Promise.resolve({ data: [personaDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.data[0]!.isDefault).toBe(true);
    expect(result.data[0]!.attachedWorldBookId).toBeNull();
  });

  test('throws when personas permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('get', () => {
  test('returns mapped persona', async () => {
    mockSpindle.personas.get.mockReturnValueOnce(Promise.resolve(personaDTO));
    const api = buildApi();
    const result = await api.get('p-1');
    expect(result!.name).toBe('Default');
  });

  test('returns null when not found', async () => {
    mockSpindle.personas.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('missing')).toBeNull();
  });
});

describe('getDefault', () => {
  test('returns the default persona', async () => {
    mockSpindle.personas.getDefault.mockReturnValueOnce(Promise.resolve(personaDTO));
    const api = buildApi();
    expect((await api.getDefault())!.isDefault).toBe(true);
  });
});

describe('getActive', () => {
  test('returns the active persona', async () => {
    mockSpindle.personas.getActive.mockReturnValueOnce(Promise.resolve(personaDTO));
    const api = buildApi();
    expect((await api.getActive())!.id).toBe('p-1');
  });
});

describe('create', () => {
  test('maps input to snake_case and returns mapped result', async () => {
    mockSpindle.personas.create.mockReturnValueOnce(Promise.resolve(personaDTO));
    const api = buildApi();
    const result = await api.create({ name: 'New', isDefault: false });
    expect(result.name).toBe('Default');
    const call = mockSpindle.personas.create.mock.calls[0] as any;
    expect(call[0].name).toBe('New');
  });
});

describe('update', () => {
  test('maps update input to snake_case', async () => {
    mockSpindle.personas.update.mockReturnValueOnce(Promise.resolve(personaDTO));
    const api = buildApi();
    await api.update('p-1', { name: 'Updated', attachedWorldBookId: 'wb-1' });
    const call = mockSpindle.personas.update.mock.calls[0] as any;
    expect(call[1].attached_world_book_id).toBe('wb-1');
  });
});

describe('delete', () => {
  test('delegates to spindle.personas.delete', async () => {
    mockSpindle.personas.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('p-1')).toBe(true);
  });
});

describe('switchActive', () => {
  test('delegates to spindle.personas.switchActive', async () => {
    const api = buildApi();
    await api.switchActive('p-1');
    expect(mockSpindle.personas.switchActive).toHaveBeenCalledWith('p-1', 'test-user-id');
  });

  test('accepts null to deactivate', async () => {
    const api = buildApi();
    await api.switchActive(null);
    expect(mockSpindle.personas.switchActive).toHaveBeenCalledWith(null, 'test-user-id');
  });
});

describe('getWorldBook', () => {
  test('returns mapped world book', async () => {
    mockSpindle.personas.getWorldBook.mockReturnValueOnce(Promise.resolve(worldBookDTO));
    const api = buildApi();
    const result = await api.getWorldBook('p-1');
    expect(result!.name).toBe('Lore');
    expect(result!.description).toBe('desc');
  });

  test('returns null when no world book attached', async () => {
    mockSpindle.personas.getWorldBook.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.getWorldBook('p-1')).toBeNull();
  });
});
