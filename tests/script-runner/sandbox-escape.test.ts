/**
 * CRIT-01 regression fence (v1.0.0-rc.7+).
 *
 * Tests the contract of the four-layer sandbox hardening installed by
 *   - `installSandboxLockdown()`             (child-entry.ts) — Layer 2
 *   - AsyncFunction parameter shadowing       (child-entry.ts) — Layer 1
 *   - AsyncFunction body lexical rebindings   (child-entry.ts) — Layer 3
 *   - `checkUserScriptSecurity()`             (host-dispatcher.ts) — Layer 4
 *
 * Failure here means user scripts can reach a host capability the audit
 * confirmed must be blocked. Before relaxing any case in this file, update
 * `notes/security-hardening-rc7.md` with the rationale + residual-gap
 * accounting and re-run the audit fixtures.
 *
 * Test strategy notes:
 *   - Direct `installSandboxLockdown()` calls in top-level test bodies trip
 *     Bun's test runner (it uses `process.X` internally between tests and
 *     the lockdown's throwing accessor on `process` breaks that). All
 *     runtime-effect tests therefore go through the existing
 *     `setupChildRuntime` harness, which calls childEntry → lockdown in a
 *     way the runner already tolerates (the same code path that the
 *     existing `child-entry-routing` + `e2e-*` tests exercise).
 *   - The most dangerous host global, `globalThis.Bun`, is defined as
 *     `configurable: false, writable: false` by the Bun runtime, so the
 *     Layer 2 throwing-accessor mechanism cannot replace it. Layer 1
 *     (parameter shadow makes BARE `Bun` undefined) and Layer 4 (source
 *     check rejects literal `globalThis.Bun` reads) close the common
 *     paths. Aliased forms (`const g = globalThis; g.Bun`) remain a
 *     residual gap — fully closing requires Option C in v1.1.
 *     See `notes/security-hardening-rc7.md` §4 for the full accounting.
 */

import { describe, test, expect, afterEach } from 'bun:test';
import childEntry from '../../src/script-runner/child-entry.js';
import { checkUserScriptSecurity } from '../../src/script-runner/host-dispatcher.js';
import { LumiScriptSecurityError } from '../../src/types/lumiscript-errors.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { RunScriptRequest, RunScriptResult } from '../../src/types/script-runner-ipc.js';

let activeCleanup: (() => void) | null = null;

afterEach(() => {
  if (activeCleanup !== null) {
    try { activeCleanup(); }
    catch { /* swallow */ }
    activeCleanup = null;
  }
});

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

function setupChildRuntime(): ScriptRunnerMockIpc {
  const ipc = installScriptRunnerMockIpc(getSpindle());
  activeCleanup = childEntry(ipc.childContext);
  return ipc;
}

function makeRunScriptMsg(overrides: Partial<RunScriptRequest> = {}): RunScriptRequest {
  return {
    type:               'run-script',
    runId:              'run-sandbox-1',
    scriptId:           'sandbox-test',
    scriptName:         'sandbox-test',
    scriptType:         'trigger',
    code:               '/* noop */',
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: [],
    allowDangerous:     false,
    chatIdAtStart:      null,
    characterIdAtStart: null,
    toolsSnapshot:                 [],
    macrosSnapshot:                [],
    macroInterceptorsSnapshot:     [],
    chatInjectionsSnapshot:        [],
    chatContentProcessorsSnapshot: [],
    ...overrides,
  };
}

async function waitForMessage<T>(ipc: ScriptRunnerMockIpc, type: string, timeoutMs = 1_000): Promise<T> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const found = ipc.parentInbox().find(
      (m): m is T =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === type,
    );
    if (found) return found;
    await new Promise<void>((r) => setTimeout(r, 5));
  }
  throw new Error(`waitForMessage: no '${type}' arrived within ${timeoutMs}ms`);
}

// ─── Layer 4 — checkUserScriptSecurity (source-level reject at dispatch) ────

describe('checkUserScriptSecurity (Layer 4, dispatch-time)', () => {
  test('accepts a clean script body', () => {
    expect(() => checkUserScriptSecurity('return 42;')).not.toThrow();
  });

  test('accepts api.* calls and normal user-script idioms', () => {
    expect(() => checkUserScriptSecurity(
      `const msg = await api.chat.getMessages();
       return msg.length;`,
    )).not.toThrow();
  });

  test('rejects literal `import("bun:sqlite")` (dynamic import)', () => {
    expect(() => checkUserScriptSecurity('await import("bun:sqlite");'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects `import (` with internal whitespace', () => {
    expect(() => checkUserScriptSecurity('await import   ("fs");'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects bare `require("fs")` (CommonJS-style global)', () => {
    expect(() => checkUserScriptSecurity('const fs = require("fs");'))
      .toThrow(LumiScriptSecurityError);
  });

  test('ACCEPTS `script.require("library-name")` (LumiScript library-loading API)', () => {
    // Regression test for the `(?<!\.)` lookbehind — must not over-reject
    // legitimate `script.require()` calls (the documented library-loading
    // path). Bare `require(` stays rejected.
    expect(() => checkUserScriptSecurity('const lib = await script.require("my-helper-lib");'))
      .not.toThrow();
  });

  test('ACCEPTS `obj.require("x")` for arbitrary objects (method-style usage stays allowed)', () => {
    expect(() => checkUserScriptSecurity('const r = myObj.require("foo");'))
      .not.toThrow();
  });

  test('rejects `new Function(...)` (constructor invocation)', () => {
    expect(() => checkUserScriptSecurity('const f = new Function("return 1"); f();'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects bare `Function(...)` invocation', () => {
    expect(() => checkUserScriptSecurity('Function("return 1")();'))
      .toThrow(LumiScriptSecurityError);
  });

  test('ACCEPTS `obj.Function(...)` method-style usage (unusual but valid user code)', () => {
    expect(() => checkUserScriptSecurity('const r = factory.Function("arg");'))
      .not.toThrow();
  });

  test('rejects `({}).constructor.constructor` prototype-chain Function access', () => {
    expect(() => checkUserScriptSecurity('({}.constructor.constructor)("return 1")();'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects `[].constructor.constructor` variant', () => {
    expect(() => checkUserScriptSecurity('[].constructor.constructor("x")();'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects literal `globalThis.Bun` (Bun is non-configurable; Layer 4 catches the common form)', () => {
    expect(() => checkUserScriptSecurity('const b = globalThis.Bun;'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects `globalThis["Bun"]` bracket access', () => {
    expect(() => checkUserScriptSecurity('const b = globalThis["Bun"];'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects literal `globalThis.process` (process is whitelisted for Spindle runtime; Layer 4 catches user-script literal access)', () => {
    expect(() => checkUserScriptSecurity('const e = globalThis.process.env;'))
      .toThrow(LumiScriptSecurityError);
  });

  test('rejects `globalThis["process"]` bracket access', () => {
    expect(() => checkUserScriptSecurity('const p = globalThis["process"];'))
      .toThrow(LumiScriptSecurityError);
  });

  test('does NOT reject `import(` inside line comments', () => {
    expect(() => checkUserScriptSecurity('// const x = import("foo");\nreturn 1;'))
      .not.toThrow();
  });

  test('does NOT reject `import(` inside block comments', () => {
    expect(() => checkUserScriptSecurity('/* import("foo") */\nreturn 1;'))
      .not.toThrow();
  });

  test('rejects `import(` inside a string (acceptable false-positive)', () => {
    // Documented limitation — we don't strip string literals to avoid
    // tokenizer cost. Users with this false positive can rename the
    // offending string.
    expect(() => checkUserScriptSecurity('return "use import(...) syntax";'))
      .toThrow(LumiScriptSecurityError);
  });

  test('LumiScriptSecurityError carries the expected name', () => {
    try {
      checkUserScriptSecurity('await import("x");');
      throw new Error('expected throw');
    } catch (err) {
      expect(err).toBeInstanceOf(LumiScriptSecurityError);
      expect((err as Error).name).toBe('LumiScriptSecurityError');
    }
  });
});

// ─── Layer 1 + 2 — runtime escape vectors via AsyncFunction sandbox ─────────

describe('runtime escape vectors (via the child IPC harness)', () => {
  test('Layer 1: bare `Bun` identifier → undefined (parameter shadow)', async () => {
    const ipc = setupChildRuntime();
    ipc.childHandle.send(makeRunScriptMsg({
      code: 'return typeof Bun;',
    }));
    const result = await waitForMessage<RunScriptResult>(ipc, 'run-result');
    expect(result.ok).toBe(true);
    expect(result.value).toBe('undefined');
  });

  test('Layer 1: bare `process` identifier → undefined', async () => {
    const ipc = setupChildRuntime();
    ipc.childHandle.send(makeRunScriptMsg({
      code: 'return typeof process;',
    }));
    const result = await waitForMessage<RunScriptResult>(ipc, 'run-result');
    expect(result.ok).toBe(true);
    expect(result.value).toBe('undefined');
  });

  test('Layer 3 preamble: bare `global`, `self`, `window`, `require` are undefined', async () => {
    const ipc = setupChildRuntime();
    ipc.childHandle.send(makeRunScriptMsg({
      code: `return {
        global:  typeof global,
        self:    typeof self,
        window:  typeof window,
        require: typeof require,
      };`,
    }));
    const result = await waitForMessage<RunScriptResult>(ipc, 'run-result');
    expect(result.ok).toBe(true);
    expect(result.value).toEqual({
      global:  'undefined',
      self:    'undefined',
      window:  'undefined',
      require: 'undefined',
    });
  });

  test('Layer 3 preamble: bare `Function` is shadowed undefined inside the body', async () => {
    const ipc = setupChildRuntime();
    ipc.childHandle.send(makeRunScriptMsg({
      code: 'return typeof Function;',
    }));
    const result = await waitForMessage<RunScriptResult>(ipc, 'run-result');
    expect(result.ok).toBe(true);
    expect(result.value).toBe('undefined');
  });

  test('non-allowDangerous scripts: `fetch` parameter throws on call', async () => {
    const ipc = setupChildRuntime();
    ipc.childHandle.send(makeRunScriptMsg({
      allowDangerous: false,
      code: `
        try { await fetch('http://example.com'); return 'leaked'; }
        catch (err) { return 'blocked:' + err.message; }
      `,
    }));
    const result = await waitForMessage<RunScriptResult>(ipc, 'run-result');
    expect(result.ok).toBe(true);
    expect(String(result.value)).toMatch(/Allow Dangerous|api\.utils\.http/);
  });
});

// ─── Pointers to the residual-gap accounting ────────────────────────────────

describe('residual gap breadcrumbs (Option C / v1.1)', () => {
  test('docs pointer — see notes/security-hardening-rc7.md §4', () => {
    // Intentionally empty. Lives here as a discoverability hook from CI
    // failure output: anyone investigating sandbox-escape regressions
    // should read the residual-gap accounting before relaxing tests.
    expect(true).toBe(true);
  });
});
