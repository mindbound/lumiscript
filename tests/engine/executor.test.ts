/**
 * Executor integration tests.
 *
 * These tests exercise the full script execution pipeline: sandbox creation,
 * API assembly, console capture, timeout handling, and script.require().
 *
 * The spindle mock is installed globally by the test preload (setup.ts).
 * Each test builds its own ExecutorOptions with the permissions and context
 * needed for the specific scenario.
 */

import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  executeScript,
  buildScriptAPI,
  buildScriptNamespace,
  buildCapturedConsole,
  SCRIPT_TIMEOUT_MS,
  HARD_LIMIT_MS,
  AsyncFunctionCtor,
} from '../../src/engine/executor.js';
import type { Script, ConsoleEntry, LumiScriptAPI } from '../../src/types/script.js';
import type { ExecutorOptions } from '../../src/engine/executor.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(overrides?: Partial<Script>): Script {
  return {
    id: 'test-script',
    name: 'Test Script',
    code: '',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...overrides,
  };
}

function makeOptions(overrides?: Partial<ExecutorOptions>): ExecutorOptions {
  return {
    grantedPermissions: new Set([
      'chat_mutation', 'generation', 'interceptor', 'cors_proxy',
      'tools', 'characters', 'chats', 'world_books', 'personas',
      'ephemeral_storage', 'context_handler',
    ]),
    activeContext: { chatId: 'test-chat', characterId: 'test-char' },
    userId: 'test-user',
    ...overrides,
  };
}

// ─── Constants ───────────────────────────────────────────────────────────────

describe('constants', () => {
  test('SCRIPT_TIMEOUT_MS is 60 seconds', () => {
    expect(SCRIPT_TIMEOUT_MS).toBe(60_000);
  });

  test('HARD_LIMIT_MS is SCRIPT_TIMEOUT_MS + 5 seconds', () => {
    expect(HARD_LIMIT_MS).toBe(SCRIPT_TIMEOUT_MS + 5_000);
  });

  test('AsyncFunctionCtor creates async functions', async () => {
    const fn = new AsyncFunctionCtor('return 42');
    expect(await fn()).toBe(42);
  });
});

// ─── executeScript ───────────────────────────────────────────────────────────

describe('executeScript', () => {
  test('executes a simple script and returns success', async () => {
    const script = makeScript({ code: 'const x = 1 + 1;' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(true);
    expect(result.scriptId).toBe('test-script');
    expect(result.runId).toBeDefined();
    expect(typeof result.duration).toBe('number');
  });

  test('captures the script body\'s return value on success', async () => {
    // The executor surfaces the last-expression return value on
    // `ScriptExecutionResult.returnValue`. Callers can use this for any
    // script whose body computes a result (manual runs, library scripts, etc.).
    const script = makeScript({ code: 'return "the answer: " + (40 + 2);' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(true);
    expect(result.returnValue).toBe('the answer: 42');
  });

  test('returnValue is undefined when the script body returns nothing', async () => {
    const script = makeScript({ code: 'const x = 1 + 1;' });  // no return
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(true);
    expect(result.returnValue).toBeUndefined();
  });

  test('returnValue is absent on failure', async () => {
    const script = makeScript({ code: 'throw new Error("fail");' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(false);
    expect(result.returnValue).toBeUndefined();
  });

  test('returnValue surfaces non-string values verbatim for caller coercion', async () => {
    // The tool-invocation handler coerces non-string return values via
    // String(), but the executor does not — it hands back whatever the
    // script produced so callers decide.
    const script = makeScript({ code: 'return { ok: true, n: 42 };' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(true);
    expect(result.returnValue).toEqual({ ok: true, n: 42 });
  });

  test('captures console output via onConsole callback', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({ code: 'console.log("hello"); console.warn("warning");' });
    const result = await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(result.success).toBe(true);
    expect(entries).toHaveLength(2);
    expect(entries[0]!.type).toBe('log');
    expect(entries[0]!.message).toBe('hello');
    expect(entries[1]!.type).toBe('warn');
    expect(entries[1]!.message).toBe('warning');
  });

  test('catches script errors and returns failure', async () => {
    const script = makeScript({ code: 'throw new Error("boom");' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.error!.message).toBe('boom');
    expect(typeof result.duration).toBe('number');
  });

  test('catches syntax errors in script code', async () => {
    const script = makeScript({ code: 'const x = {;' });
    const result = await executeScript(script, makeOptions());
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });

  test('provides api object to the script', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({
      code: 'console.log(typeof api.chat); console.log(typeof api.llm);',
    });
    await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toBe('object');
    expect(entries[1]!.message).toBe('object');
  });

  test('provides data (event payload) to the script', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({
      code: 'console.log(data.__event); console.log(data.chatId);',
    });
    await executeScript(script, makeOptions({
      eventData: { __event: 'MESSAGE_SENT', chatId: 'chat-123' },
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toBe('MESSAGE_SENT');
    expect(entries[1]!.message).toBe('chat-123');
  });

  test('data defaults to empty object when no eventData', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({
      code: 'console.log(JSON.stringify(data));',
    });
    await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toBe('{}');
  });

  test('provides z (Zod) to the script sandbox', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({
      code: 'console.log(typeof z.object);',
    });
    await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toBe('function');
  });

  test('shadows Bun and process as undefined', async () => {
    const entries: ConsoleEntry[] = [];
    const script = makeScript({
      code: 'console.log(typeof Bun); console.log(typeof process);',
    });
    await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toBe('undefined');
    expect(entries[1]!.message).toBe('undefined');
  });

  test('fetch throws for non-dangerous scripts', async () => {
    const script = makeScript({
      code: 'try { fetch("http://x"); } catch(e) { console.log(e.message); }',
      allowDangerous: false,
    });
    const entries: ConsoleEntry[] = [];
    await executeScript(script, makeOptions({
      onConsole: (e) => entries.push(e),
    }));
    expect(entries[0]!.message).toContain('Allow Dangerous');
  });

  test('timeoutMs overrides default and rejects long-running scripts', async () => {
    const script = makeScript({
      code: 'await new Promise(r => setTimeout(r, 5000));',
    });
    const result = await executeScript(script, makeOptions({
      timeoutMs: 50, // 50ms timeout
    }));
    expect(result.success).toBe(false);
    expect(result.error!.message).toContain('timeout');
  });
});

// ─── buildScriptAPI ──────────────────────────────────────────────────────────

describe('buildScriptAPI', () => {
  test('returns an object with all 15 API namespaces', () => {
    const api = buildScriptAPI(makeScript(), makeOptions());
    const namespaces = [
      'utils', 'json', 'variables', 'chat', 'llm', 'files', 'enclave',
      'ui', 'characters', 'chats', 'worldInfo', 'personas', 'tools', 'broadcast',
      'commands',
    ];
    for (const ns of namespaces) {
      expect(api[ns as keyof LumiScriptAPI]).toBeDefined();
    }
  });

  test('permission checking is wired from grantedPermissions', () => {
    const api = buildScriptAPI(makeScript(), makeOptions({
      grantedPermissions: new Set(), // no permissions
    }));
    // chat.getMessages requires chat_mutation — should throw
    expect(() => api.chat.getMessages()).toThrow('PERMISSION_DENIED');
  });
});

// ─── buildScriptNamespace (script.require) ───────────────────────────────────

describe('buildScriptNamespace', () => {
  let adapter: InMemoryStorageAdapter;
  let scriptStorage: ScriptStorage;

  beforeEach(async () => {
    adapter = new InMemoryStorageAdapter();
    scriptStorage = new ScriptStorage(adapter, () => 'test-user');
    await scriptStorage.load();
  });

  test('throws when ScriptStorage is not available', async () => {
    const ns = buildScriptNamespace(makeScript(), makeOptions({
      scriptStorage: undefined,
    }));
    await expect(ns.require('some-lib')).rejects.toThrow('ScriptStorage not available');
  });

  test('requires a library script by name and returns its exports', async () => {
    await scriptStorage.store.create({
      id: 'lib-1',
      name: 'my-lib',
      code: 'exports.greet = () => "hello";',
      enabled: true,
      allowDangerous: false,
      type: 'library',
      bindings: [],
      triggers: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const ns = buildScriptNamespace(makeScript(), makeOptions({ scriptStorage }));
    const lib = await ns.require('my-lib') as Record<string, unknown>;
    expect(typeof lib.greet).toBe('function');
  });

  test('caches library exports — second require returns same object', async () => {
    await scriptStorage.store.create({
      id: 'lib-1',
      name: 'cached-lib',
      code: 'exports.val = Math.random();',
      enabled: true,
      allowDangerous: false,
      type: 'library',
      bindings: [],
      triggers: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const ns = buildScriptNamespace(makeScript(), makeOptions({ scriptStorage }));
    const first = await ns.require('cached-lib');
    const second = await ns.require('cached-lib');
    expect(first).toBe(second); // same object reference (cached)
  });

  test('throws on circular dependency', async () => {
    // lib-a requires lib-b, lib-b requires lib-a
    await scriptStorage.store.create({
      id: 'lib-a', name: 'lib-a', type: 'library',
      code: 'await script.require("lib-b");',
      enabled: true, allowDangerous: false, bindings: [], triggers: [],
      createdAt: Date.now(), updatedAt: Date.now(),
    });
    await scriptStorage.store.create({
      id: 'lib-b', name: 'lib-b', type: 'library',
      code: 'await script.require("lib-a");',
      enabled: true, allowDangerous: false, bindings: [], triggers: [],
      createdAt: Date.now(), updatedAt: Date.now(),
    });

    const ns = buildScriptNamespace(makeScript(), makeOptions({ scriptStorage }));
    await expect(ns.require('lib-a')).rejects.toThrow('circular dependency');
  });

  test('throws when library not found', async () => {
    const ns = buildScriptNamespace(makeScript(), makeOptions({ scriptStorage }));
    await expect(ns.require('nonexistent')).rejects.toThrow('not found');
  });

  test('throws when requiring a trigger script (not a library)', async () => {
    await scriptStorage.store.create({
      id: 'trig-1', name: 'my-trigger', type: 'trigger',
      code: '', enabled: true, allowDangerous: false, bindings: [], triggers: [],
      createdAt: Date.now(), updatedAt: Date.now(),
    });

    const ns = buildScriptNamespace(makeScript(), makeOptions({ scriptStorage }));
    await expect(ns.require('my-trigger')).rejects.toThrow('not a library');
  });

  // ── Built-in libraries (ls:*) ──────────────────────────────────────────────

  test('resolves ls:components to a built-in library with exports', async () => {
    const ns = buildScriptNamespace(
      makeScript(),
      makeOptions({ scriptStorage }),
    );
    const lib = await ns.require('ls:components') as Record<string, unknown>;
    expect(typeof lib.messageFooter).toBe('function');
  });

  test('caches ls:components on second require', async () => {
    const ns = buildScriptNamespace(
      makeScript(),
      makeOptions({ scriptStorage }),
    );
    const first = await ns.require('ls:components');
    const second = await ns.require('ls:components');
    expect(first).toBe(second); // same object reference
  });

  test('throws for unknown ls: built-in', async () => {
    const ns = buildScriptNamespace(
      makeScript(),
      makeOptions({ scriptStorage }),
    );
    await expect(ns.require('ls:nonexistent')).rejects.toThrow('not found');
  });

  test('resolves ls:* without needing scriptStorage', async () => {
    const ns = buildScriptNamespace(
      makeScript(),
      makeOptions({ scriptStorage: undefined }),
    );
    // ls:components should resolve even without storage
    const lib = await ns.require('ls:components') as Record<string, unknown>;
    expect(typeof lib.messageFooter).toBe('function');
  });
});

// ─── buildCapturedConsole ────────────────────────────────────────────────────

describe('buildCapturedConsole', () => {
  // Cast to a typed console shape — the Record<string, ...> return type
  // causes TS to flag all method calls as possibly undefined.
  type CapturedConsole = { log: (...args: unknown[]) => void; warn: (...args: unknown[]) => void; error: (...args: unknown[]) => void; info: (...args: unknown[]) => void };

  test('captures log, warn, error, info entries', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log('hello');
    captured.warn('warning');
    captured.error('error');
    captured.info('info');
    expect(entries).toHaveLength(4);
    expect(entries.map(e => e.type)).toEqual(['log', 'warn', 'error', 'info']);
  });

  test('serializes various argument types', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;

    captured.log('string', 42, true, null, undefined);
    expect(entries[0]!.message).toBe('string 42 true null undefined');
  });

  test('serializes objects as JSON', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log({ a: 1 });
    expect(entries[0]!.message).toContain('"a": 1');
  });

  test('serializes Error instances', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log(new Error('test error'));
    expect(entries[0]!.message).toContain('Error: test error');
  });

  test('serializes Map and Set', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log(new Map([['a', 1]]));
    captured.log(new Set([1, 2, 3]));
    expect(entries[0]!.message).toContain('Map(1)');
    expect(entries[1]!.message).toContain('Set(3)');
  });

  test('serializes functions', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log(function myFunc() {});
    expect(entries[0]!.message).toContain('[Function: myFunc]');
  });

  test('serializes Promises', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log(Promise.resolve(42));
    expect(entries[0]!.message).toContain('[Promise');
  });

  test('includes timestamp on each entry', () => {
    const entries: ConsoleEntry[] = [];
    const captured = buildCapturedConsole((e) => entries.push(e)) as CapturedConsole;
    captured.log('test');
    expect(entries[0]!.timestamp).toBeDefined();
    expect(typeof entries[0]!.timestamp).toBe('string');
  });

  test('works without onConsole callback (no-op)', () => {
    const captured = buildCapturedConsole() as CapturedConsole;
    expect(() => captured.log('no callback')).not.toThrow();
  });
});
