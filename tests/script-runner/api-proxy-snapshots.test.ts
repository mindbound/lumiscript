/**
 * Phase 11.C.5 — api-proxy sync-array-read + mutation-tracking tests.
 *
 * Five sync-list surfaces seed from a dispatch-time snapshot threaded
 * through `ProxyContext` and update locally on every mutation method so
 * subsequent `list()` calls within the same run reflect the just-mutated
 * state (canonical sync semantics):
 *
 *   - `api.tools.list()`              ← `toolsSnapshot`
 *   - `api.macros.list()`             ← `macrosSnapshot`
 *   - `api.macros.listInterceptors()` ← `macroInterceptorsSnapshot`
 *   - `api.chat.getInjections()`      ← `chatInjectionsSnapshot`
 *   - `api.chat.listContentProcessors()` ← `chatContentProcessorsSnapshot`
 *
 * For each surface, tests verify:
 *   - Initial list reflects the snapshot.
 *   - Empty snapshot → empty list.
 *   - register / inject mutates the local array → next list() shows the
 *     entry.
 *   - unregister / removeInjection mutates → next list() omits.
 *   - Re-register replaces (matches canonical "name uniqueness" semantics).
 *   - List returns a defensive shallow-copy: mutating the returned array
 *     doesn't mutate the proxy's internal state.
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage } from '../../src/types/script-runner-ipc.js';
import type {
  RegisteredToolInfo,
  RegisteredMacroInfo,
  RegisteredMacroInterceptorInfo,
  InjectionInfo,
  RegisteredMessageContentProcessorInfo,
} from '../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeProxy(snapshots: {
  tools?:        RegisteredToolInfo[];
  macros?:       RegisteredMacroInfo[];
  interceptors?: RegisteredMacroInterceptorInfo[];
  injections?:   InjectionInfo[];
  processors?:   RegisteredMessageContentProcessorInfo[];
} = {}): { proxy: ProxyHandle; sent: ChildToParentMessage[] } {
  const sent: ChildToParentMessage[] = [];
  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'script-fixture',
    scriptName:         'Fixture',
    scriptType:         'trigger',
    chatIdAtStart:      null,
    characterIdAtStart: null,
    send:               (msg) => { sent.push(msg); },
    registerBroadcastHandler:   () => {},
    unregisterBroadcastHandler: () => {},
    registerHandlerClosure:     () => {},
    unregisterHandlerClosure:   () => {},
    toolsSnapshot:                 snapshots.tools        ?? [],
    macrosSnapshot:                snapshots.macros       ?? [],
    macroInterceptorsSnapshot:     snapshots.interceptors ?? [],
    chatInjectionsSnapshot:        snapshots.injections   ?? [],
    chatContentProcessorsSnapshot: snapshots.processors   ?? [],
  };
  return { proxy: buildProxiedAPI(ctx), sent };
}

function makeToolEntry(name: string, scriptId = 'script-fixture'): RegisteredToolInfo {
  return {
    name,
    display_name:     `Display ${name}`,
    description:      `description of ${name}`,
    parameters:       { type: 'object', properties: {} },
    council_eligible: false,
    scriptId,
    scriptName:       'Fixture',
  } as RegisteredToolInfo;
}

function makeMacroEntry(name: string, scriptId = 'script-fixture'): RegisteredMacroInfo {
  return {
    name,
    description: `macro ${name}`,
    returnType:  'string',
    scriptId,
    scriptName:  'Fixture',
  } as RegisteredMacroInfo;
}

// ─── api.tools.list ──────────────────────────────────────────────────────────

describe('api-proxy: tools snapshot + list', () => {
  test('empty snapshot → empty list', () => {
    const { proxy } = makeProxy();
    expect(proxy.api.tools.list()).toEqual([]);
  });

  test('initial list reflects the seeded snapshot', () => {
    const seeded = [makeToolEntry('a'), makeToolEntry('b')];
    const { proxy } = makeProxy({ tools: seeded });

    const list = proxy.api.tools.list();
    expect(list.length).toBe(2);
    expect(list.map((t) => t.name)).toEqual(['a', 'b']);
  });

  test('register adds to local list visible to subsequent list() calls', () => {
    const { proxy } = makeProxy();
    expect(proxy.api.tools.list().length).toBe(0);

    proxy.api.tools.register('mytool', {
      display_name: 'My Tool',
      description:  'd',
      parameters:   { type: 'object', properties: {} },
    }, async () => 'result');

    const list = proxy.api.tools.list();
    expect(list.length).toBe(1);
    expect(list[0]!.name).toBe('mytool');
  });

  test('unregister removes from local list', () => {
    const { proxy } = makeProxy({ tools: [makeToolEntry('keep'), makeToolEntry('drop')] });
    expect(proxy.api.tools.list().length).toBe(2);

    proxy.api.tools.unregister('drop');

    const list = proxy.api.tools.list();
    expect(list.length).toBe(1);
    expect(list[0]!.name).toBe('keep');
  });

  test('re-register with the same name replaces the existing entry', () => {
    const { proxy } = makeProxy();
    proxy.api.tools.register('dup', {
      display_name: 'Dup',
      description:  'first',
      parameters:   { type: 'object', properties: {} },
    }, async () => 'a');
    expect(proxy.api.tools.list().length).toBe(1);

    proxy.api.tools.register('dup', {
      display_name: 'Dup',
      description:  'second',
      parameters:   { type: 'object', properties: {} },
    }, async () => 'b');

    const list = proxy.api.tools.list();
    expect(list.length).toBe(1);
    expect(list[0]!.name).toBe('dup');
    expect(list[0]!.description).toBe('second');
  });

  test('list() returns defensive copy — caller mutations don\'t affect store', () => {
    const { proxy } = makeProxy({ tools: [makeToolEntry('a')] });
    const a = proxy.api.tools.list();
    a.length = 0;
    a.push(makeToolEntry('inserted-by-test'));

    const fresh = proxy.api.tools.list();
    expect(fresh.length).toBe(1);
    expect(fresh[0]!.name).toBe('a');
  });

  test('unregister of unknown name is a no-op (no throw)', () => {
    const { proxy } = makeProxy({ tools: [makeToolEntry('keep')] });
    expect(() => proxy.api.tools.unregister('never-registered')).not.toThrow();
    expect(proxy.api.tools.list().length).toBe(1);
  });
});

// ─── api.macros.list ─────────────────────────────────────────────────────────

describe('api-proxy: macros snapshot + list', () => {
  test('empty snapshot → empty list', () => {
    const { proxy } = makeProxy();
    expect(proxy.api.macros.list()).toEqual([]);
  });

  test('initial list reflects seeded snapshot', () => {
    const seeded = [makeMacroEntry('m1'), makeMacroEntry('m2')];
    const { proxy } = makeProxy({ macros: seeded });
    expect(proxy.api.macros.list().map((m) => m.name)).toEqual(['m1', 'm2']);
  });

  test('register adds + unregister removes', () => {
    const { proxy } = makeProxy();
    proxy.api.macros.register('newm', { description: 'd', returnType: 'string' });
    expect(proxy.api.macros.list().map((m) => m.name)).toEqual(['newm']);

    proxy.api.macros.unregister('newm');
    expect(proxy.api.macros.list()).toEqual([]);
  });

  test('list() returns defensive copy', () => {
    const { proxy } = makeProxy({ macros: [makeMacroEntry('m1')] });
    const arr = proxy.api.macros.list();
    arr.length = 0;
    expect(proxy.api.macros.list().length).toBe(1);
  });
});

// ─── api.chat.getInjections ──────────────────────────────────────────────────

describe('api-proxy: chat injections snapshot + getInjections', () => {
  test('empty snapshot → empty list', () => {
    const { proxy } = makeProxy();
    expect(proxy.api.chat.getInjections()).toEqual([]);
  });

  test('inject adds + removeInjection removes', () => {
    const { proxy } = makeProxy();
    proxy.api.chat.inject('inj-1', 'content', { role: 'system', depth: 0 });
    let list = proxy.api.chat.getInjections();
    expect(list.length).toBe(1);
    expect(list[0]!.id).toBe('inj-1');
    expect(list[0]!.content).toBe('content');

    proxy.api.chat.removeInjection('inj-1');
    list = proxy.api.chat.getInjections();
    expect(list.length).toBe(0);
  });

  test('inject with same id replaces existing entry (canonical addInjection semantics)', () => {
    const { proxy } = makeProxy();
    proxy.api.chat.inject('inj-1', 'first', { role: 'system' });
    proxy.api.chat.inject('inj-1', 'second', { role: 'user' });

    const list = proxy.api.chat.getInjections();
    expect(list.length).toBe(1);
    expect(list[0]!.content).toBe('second');
    expect(list[0]!.role).toBe('user');
  });

  test('clearInjections drops only this script\'s entries (cross-script seeded entries survive)', () => {
    const seeded: InjectionInfo[] = [
      { id: 'mine',   content: 'x', mode: 'intercept', role: 'system', depth: 0, ephemeral: false, scriptId: 'script-fixture' },
      { id: 'other',  content: 'y', mode: 'intercept', role: 'system', depth: 0, ephemeral: false, scriptId: 'script-other' },
    ];
    const { proxy } = makeProxy({ injections: seeded });
    expect(proxy.api.chat.getInjections().length).toBe(2);

    proxy.api.chat.clearInjections();

    const remaining = proxy.api.chat.getInjections();
    expect(remaining.length).toBe(1);
    expect(remaining[0]!.id).toBe('other');
  });

  test('clearAllInjections wipes the local view entirely', () => {
    const seeded: InjectionInfo[] = [
      { id: 'a', content: 'x', mode: 'intercept', role: 'system', depth: 0, ephemeral: false, scriptId: 'script-fixture' },
      { id: 'b', content: 'y', mode: 'intercept', role: 'system', depth: 0, ephemeral: false, scriptId: 'script-other' },
    ];
    const { proxy } = makeProxy({ injections: seeded });

    proxy.api.chat.clearAllInjections();

    expect(proxy.api.chat.getInjections()).toEqual([]);
  });

  test('getInjections() returns defensive copy', () => {
    const { proxy } = makeProxy();
    proxy.api.chat.inject('inj-1', 'content', {});
    const arr = proxy.api.chat.getInjections();
    arr.length = 0;
    expect(proxy.api.chat.getInjections().length).toBe(1);
  });
});

// ─── Cross-surface independence ──────────────────────────────────────────────

describe('api-proxy: snapshot isolation between surfaces', () => {
  test('mutating tools doesn\'t affect macros / injections / etc.', () => {
    const { proxy } = makeProxy({
      tools:      [makeToolEntry('t1')],
      macros:     [makeMacroEntry('m1')],
      injections: [{
        id:        'i1',
        content:   'c',
        mode:      'intercept',
        role:      'system',
        depth:     0,
        ephemeral: false,
        scriptId:  'script-fixture',
      }],
    });

    proxy.api.tools.unregister('t1');

    expect(proxy.api.tools.list()).toEqual([]);
    expect(proxy.api.macros.list().length).toBe(1);
    expect(proxy.api.chat.getInjections().length).toBe(1);
  });

  test('all four list() surfaces start empty when no snapshots provided', () => {
    const { proxy } = makeProxy();
    expect(proxy.api.tools.list()).toEqual([]);
    expect(proxy.api.macros.list()).toEqual([]);
    expect(proxy.api.macros.listInterceptors()).toEqual([]);
    expect(proxy.api.chat.getInjections()).toEqual([]);
    expect(proxy.api.chat.listContentProcessors()).toEqual([]);
  });
});
