import { describe, test, expect, beforeEach } from 'bun:test';
import { buildFilesAPI } from '../../../src/engine/api/files.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildFilesAPI(createTestDeps(overrides));
}

// ─── Guard checks (shared across all tiers) ─────────────────────────────────

describe('guard checks', () => {
  test('all user* methods throw when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.userRead('f')).toThrow('Allow Dangerous');
    expect(() => api.userWrite('f', 'd')).toThrow('Allow Dangerous');
    expect(() => api.userDelete('f')).toThrow('Allow Dangerous');
    expect(() => api.userExists('f')).toThrow('Allow Dangerous');
    expect(() => api.userList()).toThrow('Allow Dangerous');
    expect(() => api.userMkdir('f')).toThrow('Allow Dangerous');
  });

  test('all shared* methods throw when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.sharedRead('f')).toThrow('Allow Dangerous');
    expect(() => api.sharedWrite('f', 'd')).toThrow('Allow Dangerous');
    expect(() => api.sharedDelete('f')).toThrow('Allow Dangerous');
    expect(() => api.sharedExists('f')).toThrow('Allow Dangerous');
    expect(() => api.sharedList()).toThrow('Allow Dangerous');
    expect(() => api.sharedStat('f')).toThrow('Allow Dangerous');
    expect(() => api.sharedMkdir('f')).toThrow('Allow Dangerous');
    expect(() => api.sharedMove('a', 'b')).toThrow('Allow Dangerous');
  });

  test('all temp* methods throw when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.tempRead('f')).toThrow('Allow Dangerous');
    expect(() => api.tempWrite('f', 'd')).toThrow('Allow Dangerous');
    expect(() => api.tempDelete('f')).toThrow('Allow Dangerous');
    expect(() => api.tempList()).toThrow('Allow Dangerous');
    expect(() => api.tempStat('f')).toThrow('Allow Dangerous');
    expect(() => api.tempClearExpired()).toThrow('Allow Dangerous');
    expect(() => api.tempReadBinary('f')).toThrow('Allow Dangerous');
    expect(() => api.tempWriteBinary('f', new Uint8Array())).toThrow('Allow Dangerous');
    expect(() => api.tempGetPoolStatus()).toThrow('Allow Dangerous');
    expect(() => api.tempRequestBlock(10)).toThrow('Allow Dangerous');
    expect(() => api.tempReleaseBlock('r')).toThrow('Allow Dangerous');
  });

  test('temp* methods throw when ephemeral_storage permission denied', () => {
    const api = buildApi({
      script: { allowDangerous: true },
      hasPerm: (p: string) => p !== 'ephemeral_storage',
    });
    expect(() => api.tempRead('f')).toThrow('PERMISSION_DENIED');
    expect(() => api.tempWrite('f', 'd')).toThrow('PERMISSION_DENIED');
  });
});

// ─── user* delegation ────────────────────────────────────────────────────────

describe('user storage delegation', () => {
  test('userRead delegates to spindle.userStorage.read', async () => {
    mockSpindle.userStorage.read.mockReturnValueOnce(Promise.resolve('data'));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.userRead('file.txt')).toBe('data');
    expect(mockSpindle.userStorage.read).toHaveBeenCalledWith('file.txt', 'test-user-id');
  });

  test('userWrite delegates to spindle.userStorage.write', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.userWrite('file.txt', 'content');
    expect(mockSpindle.userStorage.write).toHaveBeenCalledWith('file.txt', 'content', 'test-user-id');
  });
});

// ─── shared* delegation ──────────────────────────────────────────────────────

describe('shared storage delegation', () => {
  test('sharedRead delegates to spindle.storage.read', async () => {
    mockSpindle.storage.read.mockReturnValueOnce(Promise.resolve('data'));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.sharedRead('file.txt')).toBe('data');
    expect(mockSpindle.storage.read).toHaveBeenCalledWith('file.txt');
  });

  test('sharedMove delegates to spindle.storage.move', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.sharedMove('a.txt', 'b.txt');
    expect(mockSpindle.storage.move).toHaveBeenCalledWith('a.txt', 'b.txt');
  });
});

// ─── temp* delegation ────────────────────────────────────────────────────────

describe('temp storage delegation', () => {
  test('tempWrite passes ttlMs option to spindle.ephemeral.write', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.tempWrite('cache.json', '{}', { ttlMs: 60000 });
    expect(mockSpindle.ephemeral.write).toHaveBeenCalledWith('cache.json', '{}', { ttlMs: 60000 });
  });

  test('tempWrite omits options when no ttlMs provided', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.tempWrite('cache.json', '{}');
    expect(mockSpindle.ephemeral.write).toHaveBeenCalledWith('cache.json', '{}', undefined);
  });

  test('tempStat maps fields from spindle.ephemeral.stat', async () => {
    mockSpindle.ephemeral.stat.mockReturnValueOnce(
      Promise.resolve({ sizeBytes: 1024, createdAt: '2026-01-01', expiresAt: '2026-01-02' }),
    );
    const api = buildApi({ script: { allowDangerous: true } });
    const stat = await api.tempStat('file');
    expect(stat).toEqual({ sizeBytes: 1024, createdAt: '2026-01-01', expiresAt: '2026-01-02' });
  });

  test('tempClearExpired delegates to spindle.ephemeral.clearExpired', async () => {
    mockSpindle.ephemeral.clearExpired.mockReturnValueOnce(Promise.resolve(5));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.tempClearExpired()).toBe(5);
  });

  test('tempWrite forwards reservationId', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.tempWrite('cache.bin', 'x', { reservationId: 'res-1', ttlMs: 5000 });
    expect(mockSpindle.ephemeral.write).toHaveBeenCalledWith('cache.bin', 'x', { reservationId: 'res-1', ttlMs: 5000 });
  });

  test('tempReadBinary delegates to spindle.ephemeral.readBinary and returns bytes', async () => {
    const bytes = new Uint8Array([1, 2, 3]);
    mockSpindle.ephemeral.readBinary.mockReturnValueOnce(Promise.resolve(bytes));
    const api = buildApi({ script: { allowDangerous: true } });
    const out = await api.tempReadBinary('blob.bin');
    expect(mockSpindle.ephemeral.readBinary).toHaveBeenCalledWith('blob.bin');
    expect(Array.from(out)).toEqual([1, 2, 3]);
  });

  test('tempWriteBinary passes bytes + options to spindle.ephemeral.writeBinary', async () => {
    const bytes = new Uint8Array([9, 8, 7]);
    const api = buildApi({ script: { allowDangerous: true } });
    await api.tempWriteBinary('blob.bin', bytes, { ttlMs: 1000, reservationId: 'r2' });
    expect(mockSpindle.ephemeral.writeBinary).toHaveBeenCalledWith('blob.bin', bytes, { ttlMs: 1000, reservationId: 'r2' });
  });

  test('tempGetPoolStatus delegates to spindle.ephemeral.getPoolStatus', async () => {
    mockSpindle.ephemeral.getPoolStatus.mockReturnValueOnce(Promise.resolve({
      globalMaxBytes: 1000, globalUsedBytes: 100, globalReservedBytes: 50, globalAvailableBytes: 850,
      extensionMaxBytes: 500, extensionUsedBytes: 40, extensionReservedBytes: 10, extensionAvailableBytes: 450,
      fileCount: 3, fileCountMax: 100,
    }));
    const api = buildApi({ script: { allowDangerous: true } });
    const status = await api.tempGetPoolStatus();
    expect(status.extensionAvailableBytes).toBe(450);
    expect(status.fileCount).toBe(3);
  });

  test('tempRequestBlock passes sizeBytes + options and returns the reservation', async () => {
    mockSpindle.ephemeral.requestBlock.mockReturnValueOnce(
      Promise.resolve({ reservationId: 'res-9', sizeBytes: 2048, expiresAt: '2026-01-03' }),
    );
    const api = buildApi({ script: { allowDangerous: true } });
    const res = await api.tempRequestBlock(2048, { ttlMs: 30000, reason: 'upload buffer' });
    expect(mockSpindle.ephemeral.requestBlock).toHaveBeenCalledWith(2048, { ttlMs: 30000, reason: 'upload buffer' });
    expect(res.reservationId).toBe('res-9');
    expect(res.sizeBytes).toBe(2048);
  });

  test('tempReleaseBlock delegates to spindle.ephemeral.releaseBlock', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.tempReleaseBlock('res-9');
    expect(mockSpindle.ephemeral.releaseBlock).toHaveBeenCalledWith('res-9');
  });
});
