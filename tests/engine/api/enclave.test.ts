import { describe, test, expect, beforeEach } from 'bun:test';
import { buildEnclaveAPI } from '../../../src/engine/api/enclave.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildEnclaveAPI(createTestDeps(overrides));
}

// ─── Guard checks ────────────────────────────────────────────────────────────

describe('guard checks', () => {
  test('all methods throw when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.put('key', 'value')).toThrow('Allow Dangerous');
    expect(() => api.get('key')).toThrow('Allow Dangerous');
    expect(() => api.delete('key')).toThrow('Allow Dangerous');
    expect(() => api.has('key')).toThrow('Allow Dangerous');
    expect(() => api.list()).toThrow('Allow Dangerous');
  });
});

// ─── Delegation ──────────────────────────────────────────────────────────────

describe('put', () => {
  test('delegates to spindle.enclave.put with userId', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.put('api_key', 'secret123');
    expect(mockSpindle.enclave.put).toHaveBeenCalledWith('api_key', 'secret123', 'test-user-id');
  });
});

describe('get', () => {
  test('delegates to spindle.enclave.get', async () => {
    mockSpindle.enclave.get.mockReturnValueOnce(Promise.resolve('secret123'));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.get('api_key')).toBe('secret123');
  });

  test('returns null when key not found', async () => {
    mockSpindle.enclave.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.get('missing')).toBeNull();
  });
});

describe('delete', () => {
  test('delegates to spindle.enclave.delete', async () => {
    mockSpindle.enclave.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.delete('key')).toBe(true);
  });
});

describe('has', () => {
  test('delegates to spindle.enclave.has', async () => {
    mockSpindle.enclave.has.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.has('key')).toBe(true);
  });
});

describe('list', () => {
  test('delegates to spindle.enclave.list', async () => {
    mockSpindle.enclave.list.mockReturnValueOnce(Promise.resolve(['key1', 'key2']));
    const api = buildApi({ script: { allowDangerous: true } });
    expect(await api.list()).toEqual(['key1', 'key2']);
  });
});
