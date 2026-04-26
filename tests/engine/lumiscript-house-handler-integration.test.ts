/**
 * End-to-end integration tests for the new macro interceptor + message content
 * processor surfaces (v0.24.0).
 *
 * Where the per-registry test files (`macro-interceptor-registry.test.ts` /
 * `message-content-processor-registry.test.ts`) cover dispatch internals in
 * isolation, and the per-API test files (`api/macros.test.ts` /
 * `api/chat.test.ts`) cover the registration handles in isolation, this file
 * exercises the FULL chain — script registers via the API surface (with
 * permission gating, validation passthrough, lifecycle tracking) → entry
 * lands in the registry → dispatch is invoked the same way `backend.ts`'s
 * LS-house handler invokes it on every host call → final transformation
 * surfaces back.
 *
 * The host-registration call site itself (`spindle.registerMacroInterceptor`
 * /`spindle.registerMessageContentProcessor` in backend.ts) is a one-line
 * `(ctx) => dispatch(ctx)` thunk and is intentionally not covered here —
 * `backend.ts` carries too many module-load side effects to import directly
 * into a test (precedent: v0.23.3 post-mortem). Manual smoke against a real
 * Lumiverse build validates it.
 */

import { describe, test, expect } from 'bun:test';
import type {
  MacroInterceptorCtxDTO,
  MessageContentProcessorCtxDTO,
} from 'lumiverse-spindle-types';
import { buildMacrosAPI } from '../../src/engine/api/macros.js';
import { buildChatAPI } from '../../src/engine/api/chat.js';
import { dispatch as dispatchMacroInterceptor } from '../../src/engine/macro-interceptor-registry.js';
import { dispatch as dispatchMessageContentProcessor } from '../../src/engine/message-content-processor-registry.js';
import { createTestDeps } from '../_infra/mock-deps.js';

// ─── Test helpers ────────────────────────────────────────────────────────────

function macroCtx(overrides?: Partial<MacroInterceptorCtxDTO>): MacroInterceptorCtxDTO {
  return {
    template: '{{user}} hi',
    env: {
      commit: false,
      names: {},
      character: {},
      chat: {},
      system: {},
      variables: { local: {}, global: {}, chat: {} },
      extra: {},
    },
    commit: false,
    phase: 'prompt',
    ...overrides,
  };
}

function processorCtx(
  overrides?: Partial<MessageContentProcessorCtxDTO>,
): MessageContentProcessorCtxDTO {
  return {
    chatId: 'chat-1',
    content: 'hello',
    origin: 'create',
    userId: 'user-1',
    ...overrides,
  };
}

/**
 * Build an `api.macros` instance for a script with `macro_interceptor`
 * granted and an optional per-execution tracker for the stale-cleanup diff.
 */
function buildMacrosApiFor(
  scriptId: string,
  scriptName: string,
  macroInterceptorsRegisteredThisRun?: Set<string>,
) {
  return buildMacrosAPI(
    createTestDeps({
      script: { id: scriptId, name: scriptName },
      macroInterceptorsRegisteredThisRun,
    }),
  );
}

/** Same shape for `api.chat` — `chat_mutation` is granted by `createTestDeps` default. */
function buildChatApiFor(
  scriptId: string,
  scriptName: string,
  contentProcessorsRegisteredThisRun?: Set<string>,
) {
  return buildChatAPI(
    createTestDeps({
      script: { id: scriptId, name: scriptName },
      contentProcessorsRegisteredThisRun,
    }),
  );
}

// ═══ Macro interceptor — full-stack ═════════════════════════════════════════

describe('macro interceptor — API → registry → dispatch full path', () => {
  test('empty: with no scripts registered, dispatch returns undefined (host pass-through)', async () => {
    const result = await dispatchMacroInterceptor(macroCtx({ template: 'unchanged' }));
    expect(result).toBeUndefined();
  });

  test('single script registers via API; dispatch returns transformed template', async () => {
    const api = buildMacrosApiFor('script-1', 'Tracker');
    api.registerInterceptor((ctx) => `${ctx.template} (transformed)`);
    const result = await dispatchMacroInterceptor(macroCtx({ template: 'in' }));
    expect(result).toBe('in (transformed)');
  });

  test('multiple scripts: dispatch threads through all handlers in priority order', async () => {
    const apiA = buildMacrosApiFor('script-1', 'A');
    const apiB = buildMacrosApiFor('script-2', 'B');
    // B has priority 50 (runs first), A has priority 200 (runs second).
    apiB.registerInterceptor((ctx) => ctx.template + ':B', { priority: 50 });
    apiA.registerInterceptor((ctx) => ctx.template + ':A', { priority: 200 });
    const result = await dispatchMacroInterceptor(macroCtx({ template: 'start' }));
    expect(result).toBe('start:B:A');
  });

  test('permission denied: registration throws, dispatch sees no entry', async () => {
    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'script-1', name: 'A' },
        hasPerm: () => false,
      }),
    );
    expect(() => api.registerInterceptor(() => 'x')).toThrow(
      /PERMISSION_DENIED:macro_interceptor/,
    );
    const result = await dispatchMacroInterceptor(macroCtx());
    expect(result).toBeUndefined();
  });

  test('handle.remove from script body removes the entry from dispatch', async () => {
    const api = buildMacrosApiFor('script-1', 'A');
    const handle = api.registerInterceptor((ctx) => ctx.template + ':A');
    let result = await dispatchMacroInterceptor(macroCtx({ template: 'start' }));
    expect(result).toBe('start:A');
    handle.remove();
    result = await dispatchMacroInterceptor(macroCtx({ template: 'start' }));
    expect(result).toBeUndefined();
  });

  test('stale-cleanup: previous run\'s registrations get auto-dropped on next run', async () => {
    // ── Run 1: script registers two interceptors ────────────────────────
    const run1Tracker = new Set<string>();
    const apiRun1 = buildMacrosApiFor('script-1', 'A', run1Tracker);
    const h1 = apiRun1.registerInterceptor(() => 'h1', { id: 'h1' });
    const h2 = apiRun1.registerInterceptor(() => 'h2', { id: 'h2' });
    expect(run1Tracker.has('h1')).toBe(true);
    expect(run1Tracker.has('h2')).toBe(true);

    // ── Pre-run-2 snapshot: ids the script owned coming into run 2 ──────
    // (Mirrors the snapshot taken in `executor.ts` / `trigger-registry.ts`.)
    const { listIdsByScriptId, diffAndCleanStale } = await import(
      '../../src/engine/macro-interceptor-registry.js'
    );
    const preRun2Ids = listIdsByScriptId('script-1');
    expect(preRun2Ids.sort()).toEqual(['h1', 'h2']);

    // ── Run 2: script body now only registers h2 (h1 was removed from code) ─
    const run2Tracker = new Set<string>();
    const apiRun2 = buildMacrosApiFor('script-1', 'A', run2Tracker);
    apiRun2.registerInterceptor(() => 'h2-new', { id: 'h2' });

    // ── Post-run-2 stale-cleanup ────────────────────────────────────────
    const dropped = diffAndCleanStale('script-1', preRun2Ids, run2Tracker);
    expect(dropped).toEqual(['h1']);

    // ── Dispatch only sees the active h2 entry ──────────────────────────
    const result = await dispatchMacroInterceptor(macroCtx({ template: 'in' }));
    expect(result).toBe('h2-new');

    // Stable refs survive — but h1's entry is gone from the registry.
    expect(typeof h1.remove).toBe('function');
    expect(typeof h2.remove).toBe('function');
  });

  test('teardown via clearByScriptId removes entries owned by one script only', async () => {
    const apiA = buildMacrosApiFor('script-1', 'A');
    const apiB = buildMacrosApiFor('script-2', 'B');
    apiA.registerInterceptor(() => 'A', { id: 'a1' });
    apiB.registerInterceptor((ctx) => ctx.template + ':B', { id: 'b1' });

    const { clearByScriptId } = await import(
      '../../src/engine/macro-interceptor-registry.js'
    );
    clearByScriptId('script-1');

    // Only B's transform applies now.
    const result = await dispatchMacroInterceptor(macroCtx({ template: 'in' }));
    expect(result).toBe('in:B');
  });
});

// ═══ Message content processor — full-stack ═════════════════════════════════

describe('message content processor — API → registry → dispatch full path', () => {
  test('empty: dispatch returns undefined when no processors are registered', async () => {
    const result = await dispatchMessageContentProcessor(processorCtx());
    expect(result).toBeUndefined();
  });

  test('single script registers; dispatch returns content + extra patch', async () => {
    const api = buildChatApiFor('script-1', 'Tracker');
    api.registerContentProcessor((ctx) => ({
      content: ctx.content.toUpperCase(),
      extra: { processed: true },
    }));
    const result = await dispatchMessageContentProcessor(
      processorCtx({ content: 'hello' }),
    );
    expect(result).toEqual({
      content: 'HELLO',
      extra: { processed: true },
    });
  });

  test('extra delta semantics through full stack: pristine initial.extra keys are NOT round-tripped', async () => {
    // The host shallow-merges our returned `extra` onto the row's existing
    // extra. Returning pristine keys would re-stamp them — wasteful and
    // unsafe under concurrent host-side mutations. Verifying the
    // delta-only contract holds end-to-end through the API + registry.
    const api = buildChatApiFor('script-1', 'A');
    api.registerContentProcessor(() => ({ extra: { added: 1 } }));
    const result = await dispatchMessageContentProcessor(
      processorCtx({ extra: { pristine: 'untouched', other: 42 } }),
    );
    expect(result).toEqual({ extra: { added: 1 } });
    expect((result as any).extra.pristine).toBeUndefined();
    expect((result as any).extra.other).toBeUndefined();
  });

  test('origin filter from API surface short-circuits at dispatch', async () => {
    const api = buildChatApiFor('script-1', 'A');
    let invoked = 0;
    api.registerContentProcessor(
      (ctx) => {
        invoked++;
        return { content: ctx.content + ':processed' };
      },
      { origin: 'create' },
    );
    // Matching origin → handler runs.
    const r1 = await dispatchMessageContentProcessor(processorCtx({ origin: 'create' }));
    expect(r1).toEqual({ content: 'hello:processed' });
    expect(invoked).toBe(1);
    // Non-matching origin → handler skipped.
    const r2 = await dispatchMessageContentProcessor(processorCtx({ origin: 'update' }));
    expect(r2).toBeUndefined();
    expect(invoked).toBe(1);
  });

  test('two scripts; later handler\'s overwrite of prior delta key wins', async () => {
    const apiA = buildChatApiFor('script-1', 'A');
    const apiB = buildChatApiFor('script-2', 'B');
    apiA.registerContentProcessor(() => ({ extra: { tracker: 'first' } }), {
      priority: 100,
    });
    apiB.registerContentProcessor(() => ({ extra: { tracker: 'second' } }), {
      priority: 200,
    });
    const result = await dispatchMessageContentProcessor(processorCtx());
    expect(result).toEqual({ extra: { tracker: 'second' } });
  });

  test('permission denied: registration throws, dispatch sees no entry', async () => {
    const api = buildChatAPI(
      createTestDeps({
        script: { id: 'script-1', name: 'A' },
        hasPerm: () => false,
      }),
    );
    expect(() => api.registerContentProcessor(() => undefined)).toThrow(
      /PERMISSION_DENIED:chat_mutation/,
    );
    const result = await dispatchMessageContentProcessor(processorCtx());
    expect(result).toBeUndefined();
  });

  test('stale-cleanup integrates with API surface — previous run\'s entries auto-drop', async () => {
    // ── Run 1 ──────────────────────────────────────────────────────────
    const run1Tracker = new Set<string>();
    const apiRun1 = buildChatApiFor('script-1', 'A', run1Tracker);
    apiRun1.registerContentProcessor(() => ({ content: 'p1-out' }), { id: 'p1' });
    apiRun1.registerContentProcessor(() => ({ content: 'p2-out' }), { id: 'p2' });

    const { listIdsByScriptId, diffAndCleanStale } = await import(
      '../../src/engine/message-content-processor-registry.js'
    );
    const preRun2Ids = listIdsByScriptId('script-1');

    // ── Run 2: only p2 re-registered ───────────────────────────────────
    const run2Tracker = new Set<string>();
    const apiRun2 = buildChatApiFor('script-1', 'A', run2Tracker);
    apiRun2.registerContentProcessor((ctx) => ({ content: ctx.content + ':p2' }), {
      id: 'p2',
    });

    const dropped = diffAndCleanStale('script-1', preRun2Ids, run2Tracker);
    expect(dropped).toEqual(['p1']);

    // ── Dispatch only sees p2 ──────────────────────────────────────────
    const result = await dispatchMessageContentProcessor(processorCtx({ content: 'in' }));
    expect(result).toEqual({ content: 'in:p2' });
  });
});

// ═══ Cross-surface independence ═════════════════════════════════════════════
//
// Both surfaces share infrastructure shape but live in independent registries
// and dispatch paths. A script registering both shouldn't see cross-talk.

describe('cross-surface independence', () => {
  test('script registering both interceptor + processor: each dispatch fires its own chain only', async () => {
    const macros = buildMacrosApiFor('script-1', 'A');
    const chat = buildChatApiFor('script-1', 'A');
    let macroInvoked = 0;
    let processorInvoked = 0;
    macros.registerInterceptor((ctx) => {
      macroInvoked++;
      return ctx.template + ':macro';
    });
    chat.registerContentProcessor((ctx) => {
      processorInvoked++;
      return { content: ctx.content + ':processor' };
    });

    // Macro dispatch fires macro handler only.
    const macroResult = await dispatchMacroInterceptor(macroCtx({ template: 'in' }));
    expect(macroResult).toBe('in:macro');
    expect(macroInvoked).toBe(1);
    expect(processorInvoked).toBe(0);

    // Processor dispatch fires processor handler only.
    const procResult = await dispatchMessageContentProcessor(processorCtx({ content: 'in' }));
    expect(procResult).toEqual({ content: 'in:processor' });
    expect(macroInvoked).toBe(1);
    expect(processorInvoked).toBe(1);
  });
});
