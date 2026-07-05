/**
 * Polls the script-runner's `diagnostic-stats-request` IPC on an interval,
 * building a memory/CPU time-series for a load run. Wraps the existing
 * `queryRunnerStats()` aggregator (host-dispatcher.ts) — no new IPC.
 *
 * FIDELITY (R1/R4): under the in-process bench bring-up the "child" runtime
 * shares the bench process, so `rss`/`heap*` report the COMBINED footprint,
 * not an isolated subprocess. That makes this reliable for leak *trend* ("does
 * it grow under sustained load?") but NOT for absolute isolated-child RSS —
 * validate absolute numbers against the real app (cf. notes/rss-discord-writeup.md,
 * which measured the real subprocess at ~112 MB mean idle).
 */

import { queryRunnerStats } from '../../src/script-runner/host-dispatcher.js';

export interface MemSample {
  /** ms since the sampler started (0 for the first manual sample before start). */
  t:         number;
  rss:       number;
  heapUsed:  number;
  heapTotal: number;
  external:  number;
}

export interface MemSeriesStat {
  min:   number;
  max:   number;
  mean:  number;
  first: number;
  last:  number;
  delta: number;
}

export interface MemSummary {
  samples:  number;
  rss:      MemSeriesStat;
  heapUsed: MemSeriesStat;
}

export class MemSampler {
  private series: MemSample[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;
  private startedAt = 0;

  constructor(private readonly intervalMs = 1000) {}

  /**
   * Take one sample now (also driven by the interval). Returns the sample, or
   * null if no worker is spawned / the stats query timed out.
   */
  async sampleOnce(): Promise<MemSample | null> {
    const stats = await queryRunnerStats();
    if (stats === null) return null;
    const sample: MemSample = {
      t:         this.startedAt === 0 ? 0 : performance.now() - this.startedAt,
      rss:       stats.rss,
      heapUsed:  stats.heapUsed,
      heapTotal: stats.heapTotal,
      external:  stats.external,
    };
    this.series.push(sample);
    return sample;
  }

  start(): void {
    if (this.timer !== null) return;
    this.startedAt = performance.now();
    this.timer = setInterval(() => {
      void this.sampleOnce();
    }, this.intervalMs);
  }

  stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  get samples(): readonly MemSample[] {
    return this.series;
  }

  summary(): MemSummary | null {
    if (this.series.length === 0) return null;
    const stat = (pick: (s: MemSample) => number): MemSeriesStat => {
      const vals = this.series.map(pick);
      const first = vals[0] as number;
      const last = vals[vals.length - 1] as number;
      return {
        min:   Math.min(...vals),
        max:   Math.max(...vals),
        mean:  vals.reduce((a, b) => a + b, 0) / vals.length,
        first,
        last,
        delta: last - first,
      };
    };
    return {
      samples:  this.series.length,
      rss:      stat((s) => s.rss),
      heapUsed: stat((s) => s.heapUsed),
    };
  }
}
