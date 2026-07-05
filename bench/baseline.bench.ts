/**
 * Phase 0 baseline — validates the measurement harness plumbing end-to-end:
 * brings up the in-process child, exercises the real `diagnostic-stats` IPC
 * round-trip (timing it), samples memory, and snapshots registry cardinality.
 *
 *   bun run bench/baseline.bench.ts
 *
 * NOTE: numbers here come from the in-process bring-up (combined-process
 * memory, in-memory IPC) — they validate the PLUMBING, not absolute production
 * figures. The real isolated child idles ~112 MB RSS (notes/rss-discord-writeup.md).
 */

import { setupBenchChild } from './_harness/e2e-bootstrap.js';
import { MemSampler } from './_harness/mem-sampler.js';
import { snapshotRegistries } from './_harness/registry-probe.js';
import { Histogram, timeAsync } from './_harness/timer.js';
import { timingTable, renderTable, fmtMb } from './_harness/report.js';
import { queryRunnerStats } from '../src/script-runner/host-dispatcher.js';

const ROUND_TRIPS = 200;

async function main(): Promise<void> {
  const child = await setupBenchChild();
  try {
    // 1. Confirm the child is up and answers the diagnostic-stats IPC.
    const warm = await queryRunnerStats();
    if (warm === null) {
      throw new Error('child did not respond to diagnostic-stats — bring-up failed');
    }

    // 2. Time N diagnostic-stats round-trips (a real parent→child→parent IPC),
    //    accumulating the memory readings into a sampler as we go.
    const sampler = new MemSampler();
    const hist = new Histogram();
    for (let i = 0; i < ROUND_TRIPS; i++) {
      await timeAsync(hist, async () => {
        await sampler.sampleOnce();
      });
    }

    // 3. Registry baseline — expect all-zero on a fresh bring-up.
    const reg = snapshotRegistries();

    // 4. Report.
    console.log('\n=== LumiScript bench baseline (in-process bring-up) ===\n');
    console.log('diagnostic-stats IPC round-trip (in-memory channel — R1):');
    console.log(timingTable([{ label: 'queryRunnerStats', summary: hist.summary() }]));

    const mem = sampler.summary();
    if (mem !== null) {
      console.log('\nmemory — COMBINED process footprint, not isolated child (R1/R4):');
      console.log(
        renderTable(
          ['metric', 'min', 'mean', 'max', 'last'],
          [
            ['rss',      fmtMb(mem.rss.min),      fmtMb(mem.rss.mean),      fmtMb(mem.rss.max),      fmtMb(mem.rss.last)],
            ['heapUsed', fmtMb(mem.heapUsed.min), fmtMb(mem.heapUsed.mean), fmtMb(mem.heapUsed.max), fmtMb(mem.heapUsed.last)],
          ],
        ),
      );
    }

    const regRows = Object.entries(reg).map(([k, v]) => [k, String(v)]);
    const nonZero = regRows.filter(([, v]) => v !== '0');
    console.log('\nregistry cardinality (baseline — expect all zero):');
    console.log(renderTable(['registry', 'count'], regRows));
    console.log(
      nonZero.length === 0
        ? '\n[ok] baseline clean: all registries at zero.'
        : `\n[warn] ${nonZero.length} registry(ies) nonzero at baseline: ${nonZero
            .map(([k, v]) => `${k}=${v}`)
            .join(', ')}`,
    );

    console.log(
      '\n[ok] harness plumbing validated: bring-up, IPC round-trip timing, mem sampling, registry probe.\n',
    );
  } finally {
    child.cleanup();
  }
}

await main();
