/**
 * #11 P7-3.3 — cold-start bench for the per-script QuickJS context pool.
 *
 * Sizes the P7-3.1 idle-timeout by quantifying what an EVICTION re-pays: the per-context bootstrap
 * (newContext + the zod-dominated eval chain), separate from the once-per-process WASM module compile.
 * Four scenarios under contextModel='per-script':
 *   A. cold first build   — WASM module compile + first context bootstrap (ONE shot; warms the module).
 *   B. warm context build — a fresh scriptId with the module warm = the REBUILD tax.
 *   C. cache-hit reuse    — a pooled context re-run = steady state (what a rebuild would otherwise cost).
 *   D. evict -> rebuild   — evictIdleContext then re-run = the eviction round-trip.
 *
 *   bun run bench/engine/qjs-coldstart.bench.ts
 *
 * FIDELITY: in-process CPU timing (no IPC, R1) — high-fidelity for build cost (createContext is pure
 * in-VM work, no child round-trip). Absolute ms is machine-dependent; the B−C DELTA (rebuild tax) and
 * the p50/p95 shape are what size the idle-timeout. Whole-context cost only — per-evalCode-segment zod
 * attribution belongs to the later lazy-zod increment, not this cost-control bench.
 */
import {
  runUserScriptInQuickJS,
  evictIdleContext,
  _setContextModelForTests,
  _disposeContextForTests,
  _scriptContextCountForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';
import { createMockSpindle } from '../../tests/_infra/mock-spindle.js';
import { Histogram, Stopwatch, timeAsync } from '../_harness/timer.js';
import { timingTable, fmtMs } from '../_harness/report.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });
function runOpts(scriptId: string, code = 'return null;'): QuickJSRunOptions {
  return {
    code, dispatch: async () => undefined, data: {},
    script: { id: scriptId, name: scriptId, type: 'trigger' },
    console: noopConsole, timeoutMs: 30_000, serializeError,
  };
}

async function main(): Promise<void> {
  (globalThis as { spindle?: unknown }).spindle = createMockSpindle();
  _setContextModelForTests('per-script');
  console.log('\n=== #11 P7-3.3 QuickJS cold-start (in-process; per-script pool) ===\n');

  const N = 25; // samples per warm scenario

  // A. cold first build — the very first run pays WASM module compile + the full context bootstrap.
  //    One shot: the module stays warm afterward, so this is a single sample.
  const swCold = new Stopwatch();
  await runUserScriptInQuickJS(runOpts('cold-first'));
  const coldMs = swCold.lap();
  console.log(`A. cold first build (module compile + context bootstrap): ${fmtMs(coldMs)}  [1 sample]`);

  // B. warm context build — module now warm; each fresh scriptId pays only the context bootstrap
  //    (newContext + eval chain). This is the REBUILD tax an eviction re-pays. Evict each right after
  //    timing so the pool doesn't balloon (the evict is OUTSIDE the timed section).
  const buildH = new Histogram();
  for (let i = 0; i < N; i++) {
    const id = `warm-build-${i}`;
    await timeAsync(buildH, () => runUserScriptInQuickJS(runOpts(id)));
    evictIdleContext(id);
  }

  // C. cache-hit reuse — a pooled context re-run: getContextForScript hits, only the trivial body
  //    executes. Steady-state cost = what a rebuild would otherwise cost you.
  await runUserScriptInQuickJS(runOpts('cache-hit')); // prime the pool entry
  const hitH = new Histogram();
  for (let i = 0; i < N; i++) {
    await timeAsync(hitH, () => runUserScriptInQuickJS(runOpts('cache-hit')));
  }

  // D. evict -> rebuild round-trip — evictIdleContext (unpinned, between runs) then re-run. This is the
  //    real cost the sweep imposes on a script that fires again after being reaped.
  await runUserScriptInQuickJS(runOpts('evict-rebuild')); // prime
  const evictRebuildH = new Histogram();
  for (let i = 0; i < N; i++) {
    await timeAsync(evictRebuildH, async () => {
      evictIdleContext('evict-rebuild');
      await runUserScriptInQuickJS(runOpts('evict-rebuild'));
    });
  }

  console.log('\nwarm scenarios (WASM module already compiled):');
  console.log(timingTable([
    { label: 'B. warm context build (rebuild tax)', summary: buildH.summary() },
    { label: 'C. cache-hit reuse (steady state)',   summary: hitH.summary() },
    { label: 'D. evict -> rebuild round-trip',      summary: evictRebuildH.summary() },
  ]));

  const rebuildTax    = buildH.percentile(50) - hitH.percentile(50);
  const moduleCompile = coldMs - buildH.percentile(50);
  console.log('\nDerived:');
  console.log(`  WASM module compile (A − B.p50, ~once per process): ${fmtMs(moduleCompile)}`);
  console.log(`  context rebuild TAX (B.p50 − C.p50, per eviction):  ${fmtMs(rebuildTax)}`);
  console.log(`  → an eviction adds ~${fmtMs(rebuildTax)} to the NEXT run of that script. The P7-3.1`);
  console.log('    idle-timeout should be long enough that hot / soon-to-fire scripts rarely pay it');
  console.log('    (recency covers frequent use; handler/broadcast-holding scripts are pinned, never reaped).');
  console.log(`  pool size at end: ${_scriptContextCountForTests()} contexts`);

  _disposeContextForTests();
  console.log('\n[ok] qjs cold-start bench complete.\n');
}

await main();
