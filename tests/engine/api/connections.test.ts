import { describe, test, expect, beforeEach } from 'bun:test';
import { buildConnectionsAPI } from '../../../src/engine/api/connections.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

// `any` for the mock spindle — tests queue custom DTO shapes.
let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

function conn(over: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id: 'c1', name: 'My GPT', provider: 'openai', api_url: 'https://api.openai.com/v1',
    model: 'gpt-4o', preset_id: null, is_default: false, has_api_key: true,
    metadata: {}, reasoning_bindings: null, created_at: 1, updated_at: 2, ...over,
  };
}

describe('api.connections', () => {
  test('list passes the DTO array through (incl. safe has_api_key, no key field)', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([conn({ id: 'a' }), conn({ id: 'b' })]));
    const api = buildConnectionsAPI(createTestDeps());
    const r = await api.list();
    expect(r.map((c) => c.id)).toEqual(['a', 'b']);
    const first = r[0]!;
    expect(first.has_api_key).toBe(true);
    expect('api_key' in first).toBe(false);
  });

  test('list forwards the active userId to spindle.connections.list', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    const api = buildConnectionsAPI(createTestDeps({ userId: 'user-9' }));
    await api.list();
    expect(mockSpindle.connections.list.mock.calls[0][0]).toBe('user-9');
  });

  test('get returns the connection, or null when absent', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(Promise.resolve(conn({ id: 'x' })));
    const api = buildConnectionsAPI(createTestDeps());
    expect((await api.get('x'))?.id).toBe('x');

    mockSpindle.connections.get.mockReturnValueOnce(Promise.resolve(null));
    expect(await api.get('missing')).toBeNull();
  });

  test('getDefault returns the is_default connection', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(
      Promise.resolve([conn({ id: 'a' }), conn({ id: 'b', is_default: true })]),
    );
    const api = buildConnectionsAPI(createTestDeps());
    expect((await api.getDefault())?.id).toBe('b');
  });

  test('getDefault falls back to the first connection when none is default', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([conn({ id: 'a' }), conn({ id: 'b' })]));
    const api = buildConnectionsAPI(createTestDeps());
    expect((await api.getDefault())?.id).toBe('a');
  });

  test('getDefault returns null when there are no connections', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    const api = buildConnectionsAPI(createTestDeps());
    expect(await api.getDefault()).toBeNull();
  });

  test('findByName matches case-insensitively', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([conn({ id: 'a', name: 'My GPT-4o' })]));
    const api = buildConnectionsAPI(createTestDeps());
    expect((await api.findByName('my gpt-4o'))?.id).toBe('a');
  });

  test('findByName returns null when unmatched', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([conn({ id: 'a', name: 'X' })]));
    const api = buildConnectionsAPI(createTestDeps());
    expect(await api.findByName('nope')).toBeNull();
  });
});
