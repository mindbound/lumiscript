import { describe, test, expect, beforeEach } from 'bun:test';
import {
  runExclusive,
  __resetQueues,
  __queueCount,
} from '../../src/engine/db-queue.js';

beforeEach(() => __resetQueues());

// ─── Sequencing ──────────────────────────────────────────────────────────────

describe('runExclusive — same-path sequencing', () => {
  test('two parallel ops on the same path run in order', async () => {
    const log: string[] = [];

    const op = (label: string, delayMs: number) => async () => {
      log.push(`start:${label}`);
      await new Promise<void>(r => setTimeout(r, delayMs));
      log.push(`end:${label}`);
      return label;
    };

    const [a, b] = await Promise.all([
      runExclusive('path:a', op('A', 20)),
      runExclusive('path:a', op('B', 1)),
    ]);

    expect(a).toBe('A');
    expect(b).toBe('B');
    // A started before B (queued first), and A ended before B started.
    expect(log).toEqual(['start:A', 'end:A', 'start:B', 'end:B']);
  });

  test('many sequential ops queue and complete in order', async () => {
    const results: number[] = [];
    const ops = Array.from({ length: 10 }, (_, i) => runExclusive(
      'path:a',
      async () => {
        // Each op yields once to allow interleaving *attempts*, but the
        // queue should still serialize them strictly.
        await new Promise<void>(r => setTimeout(r, 0));
        results.push(i);
        return i;
      },
    ));
    await Promise.all(ops);
    expect(results).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

// ─── Isolation ───────────────────────────────────────────────────────────────

describe('runExclusive — different-path concurrency', () => {
  test('ops on different paths run concurrently', async () => {
    const log: string[] = [];
    const op = (label: string, delayMs: number) => async () => {
      log.push(`start:${label}`);
      await new Promise<void>(r => setTimeout(r, delayMs));
      log.push(`end:${label}`);
      return label;
    };

    await Promise.all([
      runExclusive('path:a', op('A', 20)),
      runExclusive('path:b', op('B', 1)),
    ]);

    // B should finish before A does (B is faster and they don't wait on each other).
    // The first two entries should be the two start events; B-end before A-end.
    expect(log.slice(0, 2).sort()).toEqual(['start:A', 'start:B']);
    expect(log.indexOf('end:B')).toBeLessThan(log.indexOf('end:A'));
  });
});

// ─── Fault tolerance ─────────────────────────────────────────────────────────

describe('runExclusive — failed op does not poison the chain', () => {
  test('throws from op propagate to caller', async () => {
    await expect(runExclusive('path:a', async () => {
      throw new Error('boom');
    })).rejects.toThrow('boom');
  });

  test('ops queued after a rejection still run', async () => {
    // First op rejects.
    const failed = runExclusive('path:a', async () => {
      throw new Error('boom');
    });
    await expect(failed).rejects.toThrow('boom');

    // Second op queued on the same path should still run.
    const result = await runExclusive('path:a', async () => 'ok');
    expect(result).toBe('ok');
  });

  test('ops queued *in parallel* with a failing op still run', async () => {
    const results = await Promise.allSettled([
      runExclusive('path:a', async () => { throw new Error('boom'); }),
      runExclusive('path:a', async () => 'second'),
      runExclusive('path:a', async () => 'third'),
    ]);

    expect(results[0]).toMatchObject({ status: 'rejected' });
    expect(results[1]).toMatchObject({ status: 'fulfilled', value: 'second' });
    expect(results[2]).toMatchObject({ status: 'fulfilled', value: 'third' });
  });
});

// ─── Memory: settle-and-trim ─────────────────────────────────────────────────

describe('runExclusive — queue map cleanup', () => {
  test('queue map entry is dropped after the chain drains', async () => {
    expect(__queueCount()).toBe(0);

    await runExclusive('path:a', async () => 'done');

    expect(__queueCount()).toBe(0);
  });

  test('queue map holds an entry while an op is in flight', async () => {
    let release!: () => void;
    const hold = new Promise<void>(r => { release = r; });

    const pending = runExclusive('path:a', async () => {
      await hold;
      return 'done';
    });

    // While in flight the map should have one entry.
    expect(__queueCount()).toBe(1);

    release();
    await pending;

    // After drain the entry should be released.
    expect(__queueCount()).toBe(0);
  });

  test('map drains back to zero after a batch of ops across multiple paths', async () => {
    await Promise.all([
      runExclusive('path:a', async () => 1),
      runExclusive('path:a', async () => 2),
      runExclusive('path:b', async () => 3),
      runExclusive('path:c', async () => 4),
    ]);

    expect(__queueCount()).toBe(0);
  });

  test('failure does not leak a queue entry', async () => {
    await expect(runExclusive('path:a', async () => {
      throw new Error('boom');
    })).rejects.toThrow('boom');

    expect(__queueCount()).toBe(0);
  });
});
