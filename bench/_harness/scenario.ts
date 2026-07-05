/**
 * Generic measured-scenario runner: setup → warmup → timed iterations →
 * teardown. The per-scenario context `C` is built once and threaded into each
 * `run` call, so per-iteration cost excludes setup. Used by the engine + IPC
 * benches; the Phase-0 baseline drives the primitives directly.
 */

import { Histogram, timeAsync } from './timer.js';
import type { HistogramSummary } from './timer.js';

export interface ScenarioOptions<C> {
  name:      string;
  /** Unmeasured iterations before the timed run (JIT warmup). Default 0. */
  warmup?:   number;
  /** Number of measured iterations. */
  iters:     number;
  /** Build the per-scenario context once, before the loop. */
  setup?:    () => Promise<C> | C;
  /** The measured operation — receives the context + iteration index. */
  run:       (ctx: C, i: number) => Promise<unknown> | unknown;
  /** Tear down the context after the loop (always runs, even on throw). */
  teardown?: (ctx: C) => Promise<void> | void;
}

export interface ScenarioResult {
  name:    string;
  iters:   number;
  summary: HistogramSummary;
}

/** Run a measured scenario and return its timing summary. */
export async function runScenario<C>(opts: ScenarioOptions<C>): Promise<ScenarioResult> {
  const ctx = (opts.setup ? await opts.setup() : undefined) as C;
  try {
    const warmup = opts.warmup ?? 0;
    for (let i = 0; i < warmup; i++) await opts.run(ctx, i);

    const hist = new Histogram();
    for (let i = 0; i < opts.iters; i++) {
      await timeAsync(hist, async () => {
        await opts.run(ctx, i);
      });
    }
    return { name: opts.name, iters: opts.iters, summary: hist.summary() };
  } finally {
    if (opts.teardown) await opts.teardown(ctx);
  }
}
