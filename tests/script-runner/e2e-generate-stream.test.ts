/**
 * End-to-end `api.llm.generateStream` under the QuickJS engine — the FULL host↔child IPC seam that the
 * unit tests (qjs-generate-stream.test.ts) stub by pushing chunks straight into the queue via
 * pushVmStreamChunk / pushVmStreamEnd. Here nothing is stubbed: a run opens a stream in-VM, which sends a
 * real `stream-request` envelope to the host; the host resolves the active run, calls the real
 * `api.llm.generateStream` (which wraps the mock `spindle.generate.rawStream`), and pumps each yielded
 * chunk back over IPC as a `stream-chunk` / terminal `stream-end`. The child's real routers
 * (routeStreamChunk / routeStreamEnd) feed vmStreams, and the in-VM async generator drains.
 *
 * The first test is the crux: the mock upstream trickles chunks across REAL timers, so each chunk arrives
 * asynchronously while the in-VM generator is parked on a pull — proving a parked pull resumes (and the
 * run stays alive + keeps pumping) across genuine event-loop turns, not just when chunks are pre-queued.
 *
 * setupE2E() brings up the parent dispatcher + the child runtime against a shared in-memory IPC pair and
 * wires the real stream routers; dispatchRunScript drives a run to its run-result.
 */
import { describe, test, expect } from 'bun:test';
import { dispatchRunScript, __resetForTests } from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { getEngineTelemetry } from '../../src/script-runner/qjs-engine.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Stream ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
// generateStream is permission-gated on `generation` (asserted synchronously in the host api), so the
// request must grant it — unlike the timer e2e, whose surface is free.
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(['generation']), userId: 'test-user' };
}
const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

describe('e2e generateStream (real host↔child stream IPC)', () => {
  test('CRUX: chunks trickled across real timers drain in order end-to-end (parked pull resumes each turn)', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      const spindle = (globalThis as any).spindle;
      // Upstream trickles a, b, c across real timers, then ends. Each chunk crosses the IPC seam while the
      // in-VM generator is parked on its next pull.
      spindle.generate.rawStream.mockImplementation(() => (async function* () {
        yield { token: 'a' }; await delay(5);
        yield { token: 'b' }; await delay(5);
        yield { token: 'c' };
      })());
      const res = await dispatchRunScript(
        makeScript('e2e-strm-order',
          `const out = []; for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) out.push(c.token); return out;`),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      expect(res.value).toEqual(['a', 'b', 'c']); // full drain over the real seam, in order
      expect(getEngineTelemetry().streamsOpened).toBe(1);
      expect(getEngineTelemetry().streamsCancelled).toBe(0); // drained to a normal end — not cancelled
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('chunk values keep structured-marshaling parity (Date / nested) across the IPC seam', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      const spindle = (globalThis as any).spindle;
      spindle.generate.rawStream.mockImplementation(() => (async function* () {
        yield { at: new Date(7), meta: { n: 2 } };
      })());
      const res = await dispatchRunScript(
        makeScript('e2e-strm-marshal',
          `for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { return { isDate: c.at instanceof Date, t: c.at.getTime(), n: c.meta.n }; }`),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      expect(res.value).toEqual({ isDate: true, t: 7, n: 2 }); // Date survived host→IPC→VM round-trip
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('an upstream error mid-stream surfaces as a throw in the consumer, after the chunks already yielded', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      const spindle = (globalThis as any).spindle;
      spindle.generate.rawStream.mockImplementation(() => (async function* () {
        yield { token: 'a' };
        await delay(2);
        throw Object.assign(new Error('upstream boom'), { name: 'GenError' });
      })());
      const res = await dispatchRunScript(
        makeScript('e2e-strm-err',
          `const out = []; try { for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) out.push(c.token); return 'NO-THROW'; } catch (e) { return e.name + ':' + e.message + ':' + out.join(''); }`),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      expect(res.value).toBe('GenError:upstream boom:a'); // yielded 'a', then the host stream-end{ok:false} threw
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('breaking early sends a real stream-cancel over IPC and tears down the upstream generator', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { ipc, childCleanup } = await setupE2E();
    try {
      const spindle = (globalThis as any).spindle;
      let upstreamClosed = false;
      spindle.generate.rawStream.mockImplementation(() => (async function* () {
        try {
          yield { token: 'a' }; await delay(5);
          yield { token: 'b' }; await delay(5);
          yield { token: 'c' };
        } finally {
          upstreamClosed = true; // the host called .return() on the upstream iterator
        }
      })());
      const res = await dispatchRunScript(
        makeScript('e2e-strm-break',
          `let first; for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { first = c.token; break; } return first;`),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      expect(res.value).toBe('a'); // consumed one chunk, then broke
      // The child sent a stream-cancel envelope to the host (sent synchronously as the run broke).
      const cancels = ipc.parentInbox().filter((m) => (m as { type?: string }).type === 'stream-cancel');
      expect(cancels.length).toBe(1);
      expect(getEngineTelemetry().streamsCancelled).toBe(1); // an early break counts as a cancel
      // The host's .return() on the upstream iterator runs the mock's finally — give the timers a window.
      await delay(60);
      expect(upstreamClosed).toBe(true);
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('a stream opened from a timer fire tags the request runIdSource=latest, so the host resolves it against the body run', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { ipc, childCleanup } = await setupE2E();
    try {
      const spindle = (globalThis as any).spindle;
      spindle.generate.rawStream.mockImplementation(() => (async function* () { yield { token: 'x' }; })());
      const res = await dispatchRunScript(
        // The timer fire's runId is synthetic (never registered host-side); opening a stream from it would
        // hit the host late-request path and fail unless the request carries runIdSource=latest.
        makeScript('e2e-strm-fire', `setTimeout(() => { api.llm.generateStream([{ role: 'user', content: 'hi' }]); }, 10); return 'scheduled';`),
        makeRequest(),
      );
      expect(res.value).toBe('scheduled');
      // Wait for the real timer to fire and the in-VM __lsStreamStart → dispatchStreamStart → proc.send to land.
      const streamReqs = () => ipc.parentInbox().filter((m) => (m as { type?: string }).type === 'stream-request');
      for (let i = 0; i < 40 && streamReqs().length === 0; i++) await delay(10);
      const reqs = streamReqs();
      expect(reqs.length).toBe(1);
      const first = reqs[0] as { runId: string; _runIdSource?: string };
      expect(first.runId.startsWith('vmTimer:')).toBe(true); // synthetic fire runId, not in host activeRuns
      expect(first._runIdSource).toBe('latest');             // → host falls back to the script's body run
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });
});
