/**
 * High-resolution timing primitives for the perf bench harness.
 *
 * Uses `performance.now()` (sub-microsecond resolution in the Bun runtime).
 * For sub-millisecond operations the per-call stamping overhead is itself
 * measurable (the observer effect, R2 in the analysis plan) — use `timeBatch`
 * there instead of per-iteration `timeAsync`.
 */

export interface HistogramSummary {
  count: number;
  min:   number;
  max:   number;
  mean:  number;
  p50:   number;
  p95:   number;
  p99:   number;
}

/** Percentile/summary accumulator over a stream of millisecond samples. */
export class Histogram {
  private samples: number[] = [];
  private sorted = false;

  record(ms: number): void {
    this.samples.push(ms);
    this.sorted = false;
  }

  get count(): number {
    return this.samples.length;
  }

  private ensureSorted(): void {
    if (!this.sorted) {
      this.samples.sort((a, b) => a - b);
      this.sorted = true;
    }
  }

  /** Linear-interpolated percentile (`p` in [0,100]). NaN if empty. */
  percentile(p: number): number {
    if (this.samples.length === 0) return NaN;
    this.ensureSorted();
    const rank = (p / 100) * (this.samples.length - 1);
    const lo = Math.floor(rank);
    const hi = Math.ceil(rank);
    const loVal = this.samples[lo] as number;
    if (lo === hi) return loVal;
    const hiVal = this.samples[hi] as number;
    return loVal + (hiVal - loVal) * (rank - lo);
  }

  get min(): number {
    if (this.samples.length === 0) return NaN;
    this.ensureSorted();
    return this.samples[0] as number;
  }

  get max(): number {
    if (this.samples.length === 0) return NaN;
    this.ensureSorted();
    return this.samples[this.samples.length - 1] as number;
  }

  get mean(): number {
    if (this.samples.length === 0) return NaN;
    return this.samples.reduce((s, x) => s + x, 0) / this.samples.length;
  }

  summary(): HistogramSummary {
    return {
      count: this.count,
      min:   this.min,
      max:   this.max,
      mean:  this.mean,
      p50:   this.percentile(50),
      p95:   this.percentile(95),
      p99:   this.percentile(99),
    };
  }
}

/** Elapsed-time reader; `lap()` reads without resetting, `reset()` rebases. */
export class Stopwatch {
  private startedAt = performance.now();
  reset(): void {
    this.startedAt = performance.now();
  }
  lap(): number {
    return performance.now() - this.startedAt;
  }
}

/** Time a synchronous fn, recording the duration into `hist`; returns its result. */
export function timeSync<T>(hist: Histogram, fn: () => T): T {
  const t0 = performance.now();
  try {
    return fn();
  } finally {
    hist.record(performance.now() - t0);
  }
}

/** Time an async fn, recording the duration into `hist`; returns its result. */
export async function timeAsync<T>(hist: Histogram, fn: () => Promise<T>): Promise<T> {
  const t0 = performance.now();
  try {
    return await fn();
  } finally {
    hist.record(performance.now() - t0);
  }
}

/**
 * Measure aggregate wall-time over `iters` runs of `fn`, returning mean
 * ms/iter. Avoids per-iteration stamping overhead for sub-millisecond
 * operations (R2) — prefer this over a `timeAsync` loop for the tightest paths.
 */
export async function timeBatch(
  iters: number,
  fn: (i: number) => unknown | Promise<unknown>,
): Promise<number> {
  const t0 = performance.now();
  for (let i = 0; i < iters; i++) await fn(i);
  return (performance.now() - t0) / iters;
}
