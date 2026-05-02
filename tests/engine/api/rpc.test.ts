import { describe, test, expect, mock, beforeEach } from 'bun:test';
import { buildRpcAPI } from '../../../src/engine/api/rpc.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import {
  clearAll,
  addEndpoint,
  getEndpoint,
  listAll,
  listEndpointsByScriptId,
} from '../../../src/engine/rpc-store.js';

// Each test starts with a fresh rpc-store + clean spindle mocks (the latter
// auto-reset by tests/_infra/setup.ts preload — here we only need to reset
// rpc-store.ts's module-scope Map).
beforeEach(() => {
  clearAll();
});

// ─── slug derivation ────────────────────────────────────────────────────────

describe('slug derivation', () => {
  test('lowercases the script name', () => {
    const deps = createTestDeps({ script: { name: 'Tracker' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', { ok: true }).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.tracker.state');
    });
  });

  test('replaces whitespace with hyphens', () => {
    const deps = createTestDeps({ script: { name: 'My Tracker' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.my-tracker.state');
    });
  });

  test('strips characters outside [a-z0-9_-]', () => {
    const deps = createTestDeps({ script: { name: 'Hello! World?' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.hello-world.state');
    });
  });

  test('collapses runs of hyphens and underscores', () => {
    const deps = createTestDeps({ script: { name: 'a---b___c' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.a-b_c.state');
    });
  });

  test('trims leading and trailing hyphens / underscores', () => {
    const deps = createTestDeps({ script: { name: '__weird-name__' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.weird-name.state');
    });
  });

  test('throws when the name slugifies to empty', async () => {
    const deps = createTestDeps({ script: { name: '!!!' } });
    const api = buildRpcAPI(deps);
    await expect(api.sync('state', 1)).rejects.toThrow('cannot derive a slug');
  });
});

// ─── options.as override ────────────────────────────────────────────────────

describe('options.as override', () => {
  test('uses the override slug verbatim when provided', () => {
    const deps = createTestDeps({ script: { name: 'Original Name' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1, { as: 'world' }).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.world.state');
    });
  });

  test('throws on invalid override (uppercase letters)', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('state', 1, { as: 'World' })).rejects.toThrow('invalid slug override');
  });

  test('throws on invalid override (spaces)', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('state', 1, { as: 'my world' })).rejects.toThrow('invalid slug override');
  });

  test('throws on invalid override (contains dot)', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('state', 1, { as: 'a.b' })).rejects.toThrow('invalid slug override');
  });

  test('accepts numbers, hyphens, underscores in override', () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    return api.sync('state', 1, { as: 'a_b-c-123' }).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.a_b-c-123.state');
    });
  });
});

// ─── channel validation ─────────────────────────────────────────────────────

describe('channel validation', () => {
  test('accepts dotted multi-segment channels', () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);
    return api.sync('state.snapshot', { foo: 1 }).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.tracker.state.snapshot');
    });
  });

  test('rejects empty channel', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('', 1)).rejects.toThrow('invalid channel');
  });

  test('rejects channel with uppercase letters', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('State', 1)).rejects.toThrow('invalid channel');
  });

  test('rejects channel with spaces', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);
    await expect(api.sync('my state', 1)).rejects.toThrow('invalid channel');
  });
});

// ─── sync ───────────────────────────────────────────────────────────────────

describe('sync', () => {
  test('calls spindle.rpcPool.sync with the slugged channel path and value', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);

    await api.sync('state', { ok: true });

    const rpcPoolSync = (globalThis as any).spindle.rpcPool.sync;
    expect(rpcPoolSync).toHaveBeenCalledWith('tracker.state', { ok: true });
  });

  test('returns the fully-qualified endpoint string', () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);
    return api.sync('state', 1).then((endpoint) => {
      expect(endpoint).toBe('lumiscript.tracker.state');
    });
  });

  test('records the endpoint in the rpc-store with mode "sync"', async () => {
    const deps = createTestDeps({
      script: { id: 'script-1', name: 'tracker' },
    });
    const api = buildRpcAPI(deps);

    await api.sync('state', 42);

    const entry = getEndpoint('lumiscript.tracker.state');
    expect(entry).toBeDefined();
    expect(entry!.mode).toBe('sync');
    expect(entry!.scriptId).toBe('script-1');
  });

  test('adds the endpoint to the per-run tracking set', async () => {
    const tracker = new Set<string>();
    const deps = createTestDeps({
      script: { name: 'tracker' },
      rpcEndpointsRegisteredThisRun: tracker,
    });
    const api = buildRpcAPI(deps);

    await api.sync('state', 1);

    expect(tracker.has('lumiscript.tracker.state')).toBe(true);
  });

  test('logs an info entry to the backend console on registration', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);

    await api.sync('state', 1);

    const logInfo = (globalThis as any).spindle.log.info;
    expect(logInfo).toHaveBeenCalled();
    const lastCall = logInfo.mock.calls[logInfo.mock.calls.length - 1][0] as string;
    expect(lastCall).toContain('lumiscript.tracker.state');
    expect(lastCall).toContain('sync');
  });
});

// ─── handle ─────────────────────────────────────────────────────────────────

describe('handle', () => {
  test('calls spindle.rpcPool.handle with the slugged channel path', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);
    const handler = mock(() => 'response');

    await api.handle('history', handler);

    const rpcPoolHandle = (globalThis as any).spindle.rpcPool.handle;
    expect(rpcPoolHandle).toHaveBeenCalled();
    expect(rpcPoolHandle.mock.calls[0]![0]).toBe('tracker.history');
  });

  test('returns the fully-qualified endpoint string', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);

    const endpoint = await api.handle('history', () => 'response');

    expect(endpoint).toBe('lumiscript.tracker.history');
  });

  test('records the endpoint in the rpc-store with mode "handle"', async () => {
    const deps = createTestDeps({
      script: { id: 'script-1', name: 'tracker' },
    });
    const api = buildRpcAPI(deps);

    await api.handle('history', () => 'response');

    const entry = getEndpoint('lumiscript.tracker.history');
    expect(entry).toBeDefined();
    expect(entry!.mode).toBe('handle');
    expect(entry!.scriptId).toBe('script-1');
  });

  test('forwards the user handler to spindle.rpcPool.handle for invocation', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);
    const handler = mock((ctx) => `hello-${ctx.requesterExtensionId}`);

    await api.handle('greet', handler);

    const rpcPoolHandle = (globalThis as any).spindle.rpcPool.handle;
    const wrapper = rpcPoolHandle.mock.calls[0]![1] as (ctx: unknown) => unknown;
    const result = wrapper({
      endpoint: 'lumiscript.tracker.greet',
      requesterExtensionId: 'foreign-ext',
    });
    expect(result).toBe('hello-foreign-ext');
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

// ─── read ───────────────────────────────────────────────────────────────────

describe('read', () => {
  test('calls spindle.rpcPool.read with the endpoint string verbatim', async () => {
    const deps = createTestDeps();
    const api = buildRpcAPI(deps);

    await api.read('foreign-extension.some-channel');

    const rpcPoolRead = (globalThis as any).spindle.rpcPool.read;
    expect(rpcPoolRead).toHaveBeenCalledWith('foreign-extension.some-channel');
  });

  test('does NOT record ownership (reads are non-state)', async () => {
    const deps = createTestDeps({ script: { id: 'reader' } });
    const api = buildRpcAPI(deps);

    await api.read('foreign.endpoint');

    expect(listEndpointsByScriptId('reader')).toEqual([]);
    expect(listAll().length).toBe(0);
  });

  test('returns whatever spindle.rpcPool.read resolved to', async () => {
    (globalThis as any).spindle.rpcPool.read = mock(() => Promise.resolve({ value: 99 }));

    const deps = createTestDeps();
    const api = buildRpcAPI(deps);

    const result = await api.read<{ value: number }>('foreign.endpoint');
    expect(result).toEqual({ value: 99 });
  });
});

// ─── unregister ─────────────────────────────────────────────────────────────

describe('unregister', () => {
  test('calls spindle.rpcPool.unregister with the slugged channel path', async () => {
    const deps = createTestDeps({ script: { name: 'tracker' } });
    const api = buildRpcAPI(deps);
    await api.sync('state', 1);

    await api.unregister('state');

    const rpcPoolUnregister = (globalThis as any).spindle.rpcPool.unregister;
    expect(rpcPoolUnregister).toHaveBeenCalledWith('tracker.state');
  });

  test('removes the endpoint from the rpc-store', async () => {
    const deps = createTestDeps({ script: { id: 'script-1', name: 'tracker' } });
    const api = buildRpcAPI(deps);
    await api.sync('state', 1);

    await api.unregister('state');

    expect(getEndpoint('lumiscript.tracker.state')).toBeUndefined();
  });

  test('honours options.as when reconstructing the channel path', async () => {
    const deps = createTestDeps({ script: { name: 'original' } });
    const api = buildRpcAPI(deps);
    await api.sync('state', 1, { as: 'world' });

    await api.unregister('state', { as: 'world' });

    const rpcPoolUnregister = (globalThis as any).spindle.rpcPool.unregister;
    expect(rpcPoolUnregister).toHaveBeenCalledWith('world.state');
    expect(getEndpoint('lumiscript.world.state')).toBeUndefined();
  });

  test('is idempotent for endpoints not owned by the script', async () => {
    // Pre-seed an endpoint owned by a different script.
    addEndpoint({
      endpoint: 'lumiscript.other.state',
      mode:     'sync',
      scriptId: 'other-script',
      scriptName: 'Other',
    });

    const deps = createTestDeps({ script: { id: 'me', name: 'other' } });
    const api = buildRpcAPI(deps);

    // Tries to unregister "state" under "other" slug — but the entry
    // is owned by `other-script`, not `me`. removeEndpoint returns
    // false; we still call spindle.rpcPool.unregister (the canonical
    // is idempotent).
    await api.unregister('state');

    expect(getEndpoint('lumiscript.other.state')).toBeDefined();
  });
});

// ─── ownership tracking ─────────────────────────────────────────────────────

describe('ownership tracking', () => {
  test('two different scripts can publish on the same channel without colliding (slug auto-namespaces)', async () => {
    const tracker = buildRpcAPI(
      createTestDeps({ script: { id: 'tracker', name: 'tracker' } }),
    );
    const orrery = buildRpcAPI(
      createTestDeps({ script: { id: 'orrery', name: 'orrery' } }),
    );

    const e1 = await tracker.sync('state', 1);
    const e2 = await orrery.sync('state', 2);

    expect(e1).toBe('lumiscript.tracker.state');
    expect(e2).toBe('lumiscript.orrery.state');
    expect(listAll().length).toBe(2);
  });

  test('cross-script collision via options.as throws', async () => {
    const a = buildRpcAPI(
      createTestDeps({ script: { id: 'script-a', name: 'a' } }),
    );
    const b = buildRpcAPI(
      createTestDeps({ script: { id: 'script-b', name: 'b' } }),
    );

    await a.sync('state', 1, { as: 'shared' });

    await expect(b.sync('state', 2, { as: 'shared' })).rejects.toThrow(
      'already registered',
    );
  });

  test('same-script re-registration with mode transition replaces the entry', async () => {
    const deps = createTestDeps({
      script: { id: 'tracker', name: 'tracker' },
    });
    const api = buildRpcAPI(deps);

    await api.sync('state', 1);
    await api.handle('state', () => ({ updated: true }));

    const entry = getEndpoint('lumiscript.tracker.state');
    expect(entry).toBeDefined();
    expect(entry!.mode).toBe('handle');
    expect(listEndpointsByScriptId('tracker').length).toBe(1);
  });

  test('listEndpointsByScriptId returns all endpoints owned by a script', async () => {
    const deps = createTestDeps({
      script: { id: 'tracker', name: 'tracker' },
    });
    const api = buildRpcAPI(deps);

    await api.sync('state', 1);
    await api.sync('history', 2);
    await api.handle('snapshot', () => 'x');

    const owned = listEndpointsByScriptId('tracker').sort();
    expect(owned).toEqual([
      'lumiscript.tracker.history',
      'lumiscript.tracker.snapshot',
      'lumiscript.tracker.state',
    ]);
  });
});
