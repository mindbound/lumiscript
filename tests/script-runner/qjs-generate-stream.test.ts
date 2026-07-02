/**
 * api.llm.generateStream under the QuickJS engine — the in-VM async generator over a host-pushed chunk
 * queue. These drive the engine directly with a mock stream-dispatch that feeds the queue via
 * pushVmStreamChunk / pushVmStreamEnd (the same calls the child's stream routers make on a real
 * StreamChunkMessage / StreamEndMessage), so they exercise the full in-VM generator + vmStreams path
 * without a live host. The cross-run test is the crux: a stream opened in one run, drained in a later one.
 *
 * setup.ts beforeEach runs _disposeContextForTests() (drops the pool + resets contextModel).
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  pushVmStreamChunk,
  pushVmStreamEnd,
  hasVmStream,
  sweepVmStreamsForScript,
  disposeContextForScript,
  disposeScriptVmHandlers,
  _setContextModelForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

function streamOpts(over: Partial<QuickJSRunOptions> & { scriptId: string; code: string }): QuickJSRunOptions {
  return {
    code:                over.code,
    dispatch:            over.dispatch ?? (async () => undefined),
    data:                {},
    script:              { id: over.scriptId, name: over.scriptId, type: 'trigger' },
    console:             noopConsole,
    timeoutMs:           5_000,
    serializeError,
    dispatchStreamStart: over.dispatchStreamStart,
    dispatchStreamCancel: over.dispatchStreamCancel,
  };
}

describe('QuickJS generateStream', () => {
  test('yields host-pushed chunks in order, then ends; the cell is reaped on normal end', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    const dispatchStreamStart = (requestId: string): void => {
      rid = requestId;
      // Feed 3 chunks + end (queued before the generator's first pull — drained in order).
      pushVmStreamChunk(requestId, { token: 'a' });
      pushVmStreamChunk(requestId, { token: 'b' });
      pushVmStreamChunk(requestId, { token: 'c' });
      pushVmStreamEnd(requestId, true);
    };
    const out = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-order',
      code: `const out = []; for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { out.push(c.token); } return out;`,
      dispatchStreamStart,
    }));
    expect(out).toEqual(['a', 'b', 'c']);
    expect(hasVmStream(rid!)).toBe(false); // generator finally → __lsStreamCancel → cell dropped
    disposeContextForScript('strm-order', true);
  });

  test('chunk values round-trip with structured-marshaling parity (Date / nested)', async () => {
    _setContextModelForTests('per-script');
    const dispatchStreamStart = (requestId: string): void => {
      pushVmStreamChunk(requestId, { at: new Date(5), meta: { n: 1 } });
      pushVmStreamEnd(requestId, true);
    };
    const r = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-marshal',
      code: `for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { return { isDate: c.at instanceof Date, t: c.at.getTime(), n: c.meta.n }; }`,
      dispatchStreamStart,
    })) as Record<string, unknown>;
    expect(r).toEqual({ isDate: true, t: 5, n: 1 });
    disposeContextForScript('strm-marshal', true);
  });

  test('breaking the for-await early sends a stream-cancel', async () => {
    _setContextModelForTests('per-script');
    let cancelled: string | undefined;
    const dispatchStreamStart = (requestId: string): void => {
      pushVmStreamChunk(requestId, { token: 'a' });
      pushVmStreamChunk(requestId, { token: 'b' }); // never consumed — no end pushed (stream is "open")
    };
    const first = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-break',
      code: `let first; for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { first = c.token; break; } return first;`,
      dispatchStreamStart,
      dispatchStreamCancel: (requestId: string) => { cancelled = requestId; },
    }));
    expect(first).toBe('a');
    expect(typeof cancelled).toBe('string'); // finally → __lsStreamCancel → dispatchStreamCancel (stream not ended)
    disposeContextForScript('strm-break', true);
  });

  test('an error end throws in the consumer with the right name/message', async () => {
    _setContextModelForTests('per-script');
    const dispatchStreamStart = (requestId: string): void => {
      pushVmStreamChunk(requestId, { token: 'a' });
      pushVmStreamEnd(requestId, false, { name: 'GenError', message: 'upstream failed' });
    };
    const r = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-err',
      code: `const out = []; try { for await (const c of api.llm.generateStream([{ role: 'user', content: 'hi' }])) { out.push(c.token); } return 'NO-THROW'; } catch (e) { return e.name + ':' + e.message + ':' + out.join(''); }`,
      dispatchStreamStart,
    }));
    expect(r).toBe('GenError:upstream failed:a'); // yielded 'a', then threw on the error end
    disposeContextForScript('strm-err', true);
  });

  test('CROSS-RUN: a stream opened in one run is drained in a LATER run (incl. chunks queued between)', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    // Run A: open the stream + store the generator on globalThis; return without consuming.
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-crossrun',
      code: `globalThis.__stored = api.llm.generateStream([{ role: 'user', content: 'hi' }]); return 'opened';`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(hasVmStream(rid!)).toBe(true); // survives run A's end (the cell is module-scoped, not per-run)
    // Feed chunks + end while NO run is active — they queue in the cell.
    pushVmStreamChunk(rid!, { token: 'x' });
    pushVmStreamChunk(rid!, { token: 'y' });
    pushVmStreamEnd(rid!, true);
    // Run B (same script → same context/globalThis): retrieve the stored generator + drain it.
    const out = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-crossrun',
      code: `const out = []; for await (const c of globalThis.__stored) { out.push(c.token); } return out;`,
    }));
    expect(out).toEqual(['x', 'y']); // drained in run B, including the between-runs backlog
    expect(hasVmStream(rid!)).toBe(false); // reaped on drain
    disposeScriptVmHandlers('strm-crossrun'); disposeContextForScript('strm-crossrun', true);
  });

  test('script teardown closes an open (never-drained) stream + returns its requestId for the host cancel', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-teardown',
      code: `globalThis.__s = api.llm.generateStream([{ role: 'user', content: 'hi' }]); return null;`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(hasVmStream(rid!)).toBe(true);
    // What handleScriptUnregister runs: sweep the script's open streams.
    const cancelled = sweepVmStreamsForScript('strm-teardown');
    expect(cancelled).toEqual([rid!]);      // requestId handed back so the host upstream gets a stream-cancel
    expect(hasVmStream(rid!)).toBe(false);  // cell dropped — no leak
    disposeScriptVmHandlers('strm-teardown'); disposeContextForScript('strm-teardown', true);
  });
});
