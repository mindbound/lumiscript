/**
 * #11 P7-3.2 — per-context memory re-tune. Under contextModel='per-script' each context caps its runtime
 * at CHILD_WASM_BUDGET / POOL_CAP (512MB / 8 = 64MB) so POOL_CAP live contexts inside the ONE child stay
 * within the aggregate budget (there is no host RSS kill — the pool must self-bound). The 'shared' context
 * (prod today) keeps the full budget. The C-stack cap is left at QuickJS's 256KB default, which already
 * throws a catchable in-VM stack-overflow — verified below — so no explicit setMaxStackSize is added.
 *
 * setup.ts beforeEach runs _disposeContextForTests() (disposes the pool + resets contextModel /
 * POOL_CAP / idleTimeoutMs / CHILD_WASM_BUDGET to their prod defaults).
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  getEngineTelemetry,
  _setContextModelForTests,
  _setChildWasmBudgetForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });
function runOpts(scriptId: string, code: string): QuickJSRunOptions {
  return {
    code, dispatch: async () => undefined, data: {},
    script: { id: scriptId, name: scriptId, type: 'trigger' },
    console: noopConsole, timeoutMs: 10_000, serializeError,
  };
}
async function rejects(p: Promise<unknown>): Promise<boolean> {
  try { await p; return false; } catch { return true; }
}

// A ~100MB Latin-1 string — over the 64MB per-script ceiling, well under the 512MB shared/raised one.
const ALLOC_100MB = `const s = 'x'.repeat(100 * 1024 * 1024); return s.length;`;

describe('#11 P7-3.2 per-context memory ceiling', () => {
  test('per-script caps at budget/POOL_CAP (64MB): an over-limit alloc is an in-VM OOM, NOT a child crash', async () => {
    _setContextModelForTests('per-script'); // perCtxLimit = 512MB / 8 = 64MB
    expect(await rejects(runUserScriptInQuickJS(runOpts('mem-oom', ALLOC_100MB)))).toBe(true);
    // #11 observability — the OOM is counted (shape-pinned: QuickJS surfaces it as InternalError('out of
    // memory'); a drift in that shape would silently zero the counter, so this assertion guards it).
    expect(getEngineTelemetry().inVmOom).toBe(1);
    // The child survives the in-VM OOM — a different script's context builds + runs fine afterward.
    const ok = await runUserScriptInQuickJS(runOpts('mem-ok', `return 1 + 1;`));
    expect(ok).toBe(2);
  });

  test('the shared context keeps the full budget — the 64MB per-script cap does NOT apply to shared', async () => {
    // 'shared' default: perCtxLimit = the whole 512MB budget, so the same 100MB alloc SUCCEEDS.
    const len = await runUserScriptInQuickJS(runOpts('mem-shared', ALLOC_100MB));
    expect(len).toBe(100 * 1024 * 1024);
  });

  test('the ceiling scales with the budget (seam): raising the budget lets the same alloc through', async () => {
    _setContextModelForTests('per-script');
    _setChildWasmBudgetForTests(2048 * 1024 * 1024); // perCtxLimit = 2GB / 8 = 256MB
    const len = await runUserScriptInQuickJS(runOpts('mem-big', ALLOC_100MB));
    expect(len).toBe(100 * 1024 * 1024); // 100MB fits under the raised 256MB per-context limit
  });

  test('runaway recursion surfaces as a catchable in-VM error (default 256KB stack backstop), not a crash', async () => {
    _setContextModelForTests('per-script');
    // Non-tail recursion (the `+ 1` prevents any TCO) → grows the C stack → QuickJS stack-overflow throw.
    expect(await rejects(runUserScriptInQuickJS(runOpts('mem-rec', `function f(n) { return f(n + 1) + 1; } return f(0);`)))).toBe(true);
    // #11 observability — a stack-overflow (RangeError) must NOT be miscounted as an OOM (guards the
    // inVmOom detector against over-matching a non-OOM error shape).
    expect(getEngineTelemetry().inVmOom).toBe(0);
    const ok = await runUserScriptInQuickJS(runOpts('mem-ok2', `return 3;`)); // child survived
    expect(ok).toBe(3);
  });
});
