/**
 * Regression coverage for the v0.23.2 fix: long-lived handlers (tool
 * invocations, input-bar onClick, drawer-tab onActivate, modal onDismiss,
 * widget onDragEnd) must see the CURRENT active chat / character at
 * handler-call time, not the snapshot from registration time.
 *
 * Pre-fix bug: `buildScriptAPI` received a plain `activeContext` object
 * snapshot. Each API builder destructured it and used the captured
 * reference in closures. A tool registered at `ls:startup` (when no chat
 * was open) would forever see `chatId: null, characterId: null` even
 * after the user opened a chat — manifesting most visibly as
 * `api.db.collection({ scope: 'character' })` throwing
 * "scope='character' requires an active character" mid-spar.
 *
 * Fix: when `ExecutorOptions.activeContext` is omitted (production
 * callers do this; tests can still pass a snapshot to opt out for
 * isolation), `buildScriptAPI` substitutes a getter-backed object that
 * reads `binding.ts`'s module-scope state on every property access. The
 * api closures see the live truth.
 *
 * These tests pin the live-getter behavior at three levels:
 *   1. `api.db.collection({ scope: 'character' })` — the canary surface
 *      that throws hard when characterId is null
 *   2. `api.chat.*` — same shape via `requireChatId` (different error
 *      string, identical mechanism)
 *   3. `api.variables.local.*` — silent-no-op-on-null path; we assert
 *      the call-through to `spindle.variables.local.*` actually happens
 *      after a context change
 *   4. End-to-end via `buildScriptAPI` — the production path. Covers
 *      the case where `dispatchToolInvocation` later calls
 *      `entry.handler` whose `getApi()` closure was captured at a
 *      stale-context registration time.
 */

import { describe, test, expect, mock, beforeEach } from 'bun:test';
import { buildScriptAPI } from '../../src/engine/executor.js';
import { setActiveContext, resetContext } from '../../src/engine/binding.js';
import { __resetQueues } from '../../src/engine/db-queue.js';
import { clearAll as busClear } from '../../src/engine/broadcast-bus.js';
import type { ExecutorOptions } from '../../src/engine/executor.js';
import type { Script, LumiScriptAPI } from '../../src/types/script.js';

// ─── Test helpers ───────────────────────────────────────────────────────────

function makeScript(): Script {
  return {
    id:       'test-script',
    name:     'Test Script',
    code:     '',
    enabled:  true,
    allowDangerous: false,
    type:     'trigger',
    bindings: [],
    triggers: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

/**
 * Build api WITHOUT an explicit activeContext snapshot — exercises the
 * live-getter fallback path. Equivalent to how `backend.ts` and
 * `trigger-registry.ts` build the api in production after the v0.23.2
 * fix.
 */
function buildLiveApi(opts?: Partial<ExecutorOptions>): LumiScriptAPI {
  return buildScriptAPI(makeScript(), {
    grantedPermissions: new Set([
      'chat_mutation', 'generation', 'interceptor',
      'tools', 'characters', 'chats',
      'ephemeral_storage', 'context_handler',
    ]),
    userId: 'test-user',
    ...opts,
  });
}

/**
 * In-memory userStorage backing for api.db tests — same pattern as
 * `db.test.ts` so the storage layer doesn't influence the live-context
 * assertions.
 */
function patchUserStorage(): void {
  const us = (globalThis as any).spindle.userStorage;
  const fakeStore: Record<string, unknown> = {};
  us.getJson = mock(async (path: string, opts: { fallback: unknown }) =>
    path in fakeStore ? fakeStore[path] : opts.fallback);
  us.setJson = mock(async (path: string, value: unknown) => { fakeStore[path] = value; });
  us.list    = mock(async () => []);
  us.delete  = mock(async (path: string) => { delete fakeStore[path]; });
  us.exists  = mock(async (path: string) => path in fakeStore);
}

beforeEach(() => {
  resetContext();
  __resetQueues();
  busClear();
  patchUserStorage();
});

// ─── api.db live-context view ───────────────────────────────────────────────

describe('api.db — live activeContext view', () => {
  test('collection({scope: "character"}) throws when characterId is null at api-build time', async () => {
    // Sanity: the existing throw still fires when context truly is null.
    const api = buildLiveApi();
    await expect(api.db.collection('rolls', { scope: 'character' }))
      .rejects.toThrow(/scope="character" requires an active character/);
  });

  test('collection({scope: "character"}) succeeds AFTER setActiveContext mutates binding state — even when api was built with null context', async () => {
    // This is the Roll Dice bug case. Build api when no chat is open
    // (the registering-script scenario), then "user opens a chat with
    // a character" by mutating binding.ts state, then invoke the
    // collection — should succeed because the getter reads live truth.
    const api = buildLiveApi();
    setActiveContext({ chatId: 'chat-1', characterId: 'char-1' });

    const collection = await api.db.collection('dice-rolls', { scope: 'character' });
    expect(collection).toBeDefined();

    // Sanity: the path baked into the collection reflects the LIVE
    // characterId, not the null one from registration time.
    const inserted = await collection.insert({ notation: '1d20', result: 15 });
    expect(inserted.id).toBeDefined();

    const us = (globalThis as any).spindle.userStorage;
    const writeCalls = us.setJson.mock.calls as Array<[string, unknown]>;
    const lastWritePath = writeCalls[writeCalls.length - 1]?.[0];
    expect(lastWritePath).toBe('db/characters/char-1/test-script/dice-rolls.json');
  });

  test('collection({scope: "chat"}) follows live chatId across context changes', async () => {
    const api = buildLiveApi();
    setActiveContext({ chatId: 'chat-A', characterId: null });

    const collA = await api.db.collection('events', { scope: 'chat' });
    await collA.insert({ kind: 'first' });

    // User switches chats — context mutates, but the api object is the
    // same one held by tool/handler closures.
    setActiveContext({ chatId: 'chat-B', characterId: null });
    const collB = await api.db.collection('events', { scope: 'chat' });
    await collB.insert({ kind: 'second' });

    const us = (globalThis as any).spindle.userStorage;
    const paths = (us.setJson.mock.calls as Array<[string, unknown]>).map(c => c[0]);
    // Each insert wrote to a path derived from the LIVE chatId at insert time.
    expect(paths).toContain('db/chats/chat-A/test-script/events.json');
    expect(paths).toContain('db/chats/chat-B/test-script/events.json');
  });

  test('test snapshot override still works (preserves test isolation behavior)', async () => {
    // Tests that pass an explicit `activeContext` opt-out of the live
    // view. This is how db.test.ts / chat.test.ts / variables.test.ts
    // get deterministic context without touching binding.ts.
    const api = buildLiveApi({
      activeContext: { chatId: 'snapshot-chat', characterId: 'snapshot-char' },
    });
    // Mutate binding state — should NOT affect the snapshot-bound api.
    setActiveContext({ chatId: 'live-chat', characterId: 'live-char' });

    const collection = await api.db.collection('rolls', { scope: 'character' });
    await collection.insert({ x: 1 });

    const us = (globalThis as any).spindle.userStorage;
    const paths = (us.setJson.mock.calls as Array<[string, unknown]>).map(c => c[0]);
    expect(paths).toContain('db/characters/snapshot-char/test-script/rolls.json');
    // Should NOT have written to the live-context path.
    expect(paths).not.toContain('db/characters/live-char/test-script/rolls.json');
  });
});

// ─── api.chat live-context view ─────────────────────────────────────────────

describe('api.chat — live activeContext view', () => {
  test('getChatId() returns null when no chat is active', () => {
    const api = buildLiveApi();
    expect(api.chat.getChatId()).toBeNull();
  });

  test('getChatId() reflects the live chatId after setActiveContext', () => {
    // Same registering-when-null scenario as the api.db case. After the
    // user opens a chat, getChatId() should reflect the new value
    // immediately — the api object held by tool/handler closures sees
    // current state, not registration-time null.
    const api = buildLiveApi();
    expect(api.chat.getChatId()).toBeNull();

    setActiveContext({ chatId: 'chat-live', characterId: null });
    expect(api.chat.getChatId()).toBe('chat-live');

    setActiveContext({ chatId: 'chat-other', characterId: null });
    expect(api.chat.getChatId()).toBe('chat-other');
  });

  test('chat methods that requireChatId no longer throw after context becomes available', async () => {
    // Pre-fix: a tool handler registered while chatId was null would
    // permanently throw "no active chat" from requireChatId, even after
    // the user opened a chat. Live-getter fixes this — same api object,
    // post-mutation chat reads succeed.
    //
    // Note: `api.chat.getMessages` is a non-async arrow that throws
    // synchronously on missing context (`requireChatId` is sync). Use
    // `expect(() => ...).toThrow()` for the sync case rather than
    // `.rejects.toThrow()` (which only catches Promise rejections).
    // In real script code the call sits behind `await`, which folds
    // sync throws into Promise rejections via the async wrapper —
    // so user-observable behavior is "Promise rejects" either way,
    // it's just a test-shape detail here.
    const spindleAny = (globalThis as any).spindle;
    spindleAny.chat = {
      ...spindleAny.chat,
      getMessages: mock(async () => []),
    };

    const api = buildLiveApi();
    // Pre-context: getMessages throws synchronously.
    expect(() => api.chat.getMessages()).toThrow(/no active chat/);

    // Open a chat → live view updates → getMessages now reaches spindle.
    setActiveContext({ chatId: 'chat-1', characterId: null });
    await api.chat.getMessages();
    expect((spindleAny.chat.getMessages as any).mock.calls.length).toBeGreaterThan(0);
  });
});

// ─── api.variables.local live-context view ──────────────────────────────────

describe('api.variables.local — live activeContext view', () => {
  test('local.set silently no-ops while chatId is null, then writes after context becomes available', async () => {
    // The current api.variables.local pattern silently no-ops when
    // chatId is null (rather than throwing) — see api/variables.ts:92.
    // Pre-fix, a tool handler registered when chatId was null would
    // silently drop every local-variable write forever. Live-getter
    // fix: post-context-mutation writes target the live chatId.
    const spindleAny = (globalThis as any).spindle;
    spindleAny.variables = {
      local: {
        get:    mock(async () => ''),
        set:    mock(async () => {}),
        has:    mock(async () => false),
        delete: mock(async () => {}),
        list:   mock(async () => ({})),
      },
      global:    { ...spindleAny.variables?.global    },
      chat:      { ...spindleAny.variables?.chat      },
      character: { ...spindleAny.variables?.character },
    };

    const api = buildLiveApi();
    // Pre-context: silent no-op (no throw, no spindle call).
    await api.variables.local.set('k', 'v1');
    expect((spindleAny.variables.local.set as any).mock.calls.length).toBe(0);

    // Open a chat → live view updates → next call reaches spindle with
    // the live chatId.
    setActiveContext({ chatId: 'chat-X', characterId: null });
    await api.variables.local.set('k', 'v2');
    const setCalls = spindleAny.variables.local.set.mock.calls as Array<[string, string, string]>;
    expect(setCalls.length).toBe(1);
    expect(setCalls[0]![0]).toBe('chat-X');
    expect(setCalls[0]![1]).toBe('k');
  });
});

// ─── End-to-end: tool-handler simulation ────────────────────────────────────

describe('long-lived handler — tool registration + post-mutation invocation', () => {
  test('tool handler captures api at registration time, sees live context at invocation time (the Roll Dice bug)', async () => {
    // Simulates the exact path that produced the field bug:
    //   1. Script runs at ls:startup, no chat open. activeContext is
    //      null/null when buildScriptAPI runs.
    //   2. Script registers a tool whose handler closes over `api.db`.
    //   3. User opens a chat with a character — binding.ts state updates.
    //   4. Council invokes the tool. The handler's captured `api.db`
    //      should see the LIVE character, not the null one from step 1.
    //
    // Pre-fix: step 4 throws "scope='character' requires an active
    // character". Post-fix: step 4 succeeds.
    const api = buildLiveApi();

    // Capture an `api.db` reference inside a "handler" — this is the
    // exact closure shape `api.tools.register`'s wrappedHandler creates.
    const handler = async (): Promise<string> => {
      const collection = await api.db.collection('rolls', { scope: 'character' });
      const inserted = await collection.insert({ rolled: 17 });
      return `inserted ${inserted.id}`;
    };

    // Step 3: chat opens with character.
    setActiveContext({ chatId: 'chat-X', characterId: 'char-Y' });

    // Step 4: invoke the captured handler. Should succeed.
    const result = await handler();
    expect(result).toMatch(/^inserted /);

    // Verify the write landed at the LIVE character path.
    const us = (globalThis as any).spindle.userStorage;
    const paths = (us.setJson.mock.calls as Array<[string, unknown]>).map(c => c[0]);
    expect(paths).toContain('db/characters/char-Y/test-script/rolls.json');
  });

  test('tool handler sees subsequent context changes — multiple invocations, multiple chats', async () => {
    // Slightly different angle: the same tool, invoked multiple times
    // across context changes. Each invocation should target the
    // chat/character active AT THAT moment.
    const api = buildLiveApi();
    const handler = async (): Promise<void> => {
      const c = await api.db.collection('rolls', { scope: 'character' });
      await c.insert({ at: Date.now() });
    };

    setActiveContext({ chatId: 'c1', characterId: 'char-1' });
    await handler();
    setActiveContext({ chatId: 'c2', characterId: 'char-2' });
    await handler();
    setActiveContext({ chatId: 'c3', characterId: 'char-3' });
    await handler();

    const us = (globalThis as any).spindle.userStorage;
    const paths = (us.setJson.mock.calls as Array<[string, unknown]>).map(c => c[0]);
    expect(paths).toContain('db/characters/char-1/test-script/rolls.json');
    expect(paths).toContain('db/characters/char-2/test-script/rolls.json');
    expect(paths).toContain('db/characters/char-3/test-script/rolls.json');
  });
});
