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
  isContextPinned,
  setStreamQueueCap,
  getEngineTelemetry,
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
    dispatchStreamAbort: over.dispatchStreamAbort,
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
    // Telemetry: one stream opened, none cancelled (it drained to a normal end).
    expect(getEngineTelemetry().streamsOpened).toBe(1);
    expect(getEngineTelemetry().streamsCancelled).toBe(0);
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
    expect(getEngineTelemetry().streamsCancelled).toBe(1); // an early break counts as a cancel
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

  test('CROSS-RUN: a stream STORED in one run opens + drains in a LATER run (lazy open)', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    // Run A: create + store the generator, don't iterate. Lazy open → NOTHING opens yet (nothing leaks if
    // the stored generator is never drained).
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-crossrun',
      code: `globalThis.__stored = api.llm.generateStream([{ role: 'user', content: 'hi' }]); return 'stored';`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(rid).toBeUndefined(); // lazy: no open, no dispatch in run A
    // Run B (same script → same context/globalThis): drain the stored generator. The stream OPENS on the
    // first pull here; its dispatchStreamStart feeds the chunks synchronously into the fresh cell.
    const out = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-crossrun',
      code: `const out = []; for await (const c of globalThis.__stored) { out.push(c.token); } return out;`,
      dispatchStreamStart: (requestId: string) => {
        rid = requestId;
        pushVmStreamChunk(requestId, { token: 'x' });
        pushVmStreamChunk(requestId, { token: 'y' });
        pushVmStreamEnd(requestId, true);
      },
    }));
    expect(out).toEqual(['x', 'y']);       // drained in run B
    expect(hasVmStream(rid!)).toBe(false); // reaped on drain
    disposeScriptVmHandlers('strm-crossrun'); disposeContextForScript('strm-crossrun', true);
  });

  test('a created-but-never-iterated generateStream opens NOTHING (lazy — no leaked cell, no wasted upstream)', async () => {
    _setContextModelForTests('per-script');
    let opened = false;
    const r = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-noiter',
      code: `const g = api.llm.generateStream([{ role: 'user', content: 'hi' }]); return 'created';`, // never iterated
      dispatchStreamStart: () => { opened = true; },
    }));
    expect(r).toBe('created');
    expect(opened).toBe(false); // lazy: no __lsStreamStart → no cell, no upstream generation dispatched
    disposeContextForScript('strm-noiter', true);
  });

  test('script teardown closes an open (never-drained) stream + returns its requestId for the host cancel', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-teardown',
      // Lazy open: iterate once (.next()) to actually open the stream; the pull parks (nothing pushed) so it
      // stays open + never-drained past the run's end.
      code: `globalThis.__s = api.llm.generateStream([{ role: 'user', content: 'hi' }]); globalThis.__s.next().catch(() => {}); return null;`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(hasVmStream(rid!)).toBe(true);
    // What handleScriptUnregister runs: sweep the script's open streams.
    const cancelled = sweepVmStreamsForScript('strm-teardown');
    expect(cancelled).toEqual([rid!]);      // requestId handed back so the host upstream gets a stream-cancel
    expect(hasVmStream(rid!)).toBe(false);  // cell dropped — no leak
    disposeScriptVmHandlers('strm-teardown'); disposeContextForScript('strm-teardown', true);
  });

  test('an open stream PINS its per-script context until swept (so eviction cannot dispose it out from under a live stream)', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-pin',
      // Lazy open: iterate once (.next()) to actually open the stream.
      code: `globalThis.__s = api.llm.generateStream([{ role: 'user', content: 'hi' }]); globalThis.__s.next().catch(() => {}); return null;`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(hasVmStream(rid!)).toBe(true);
    expect(isContextPinned('strm-pin')).toBe(true);  // an open stream keeps the context resident (idle/cap eviction skips a pinned context)
    sweepVmStreamsForScript('strm-pin');             // teardown sweep drops the cell
    expect(isContextPinned('strm-pin')).toBe(false); // unpinned again → evictable
    disposeScriptVmHandlers('strm-pin'); disposeContextForScript('strm-pin', true);
  });

  test('the configurable queue cap bounds an undrained stream — the over-cap chunk overflows + ends it', async () => {
    _setContextModelForTests('per-script');
    setStreamQueueCap(3); // each stream captures the current cap at open (refreshed per run in prod)
    let rid: string | undefined;
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-cap',
      // Lazy open: iterate once (.next()) to open the stream; that parks a single pull.
      code: `globalThis.__s = api.llm.generateStream([{ role: 'user', content: 'hi' }]); globalThis.__s.next().catch(() => {}); return null;`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    // The first push satisfies the parked pull (primes the generator, consumed by the priming .next()); after
    // that the cell has no waiter, so further pushes queue against the cap.
    expect(pushVmStreamChunk(rid!, 0)).toBe(false); // primes the parked pull
    expect(pushVmStreamChunk(rid!, 1)).toBe(false);
    expect(pushVmStreamChunk(rid!, 2)).toBe(false);
    expect(pushVmStreamChunk(rid!, 3)).toBe(false);
    expect(pushVmStreamChunk(rid!, 4)).toBe(true); // over cap → the router should cancel the host upstream
    const drained = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-cap',
      code: `const out = []; try { for await (const c of globalThis.__s) out.push(c); return { out, err: 'none' }; } catch (e) { return { out, err: e.name }; }`,
    })) as { out: number[]; err: string };
    expect(drained.out).toEqual([1, 2, 3]);        // the queued chunks still deliver (chunk 0 primed the .next())
    expect(drained.err).toBe('StreamOverflowError'); // then the overflow error terminates the stream
    disposeScriptVmHandlers('strm-cap'); disposeContextForScript('strm-cap', true);
  });

  test('teardown of a PARKED pull is abort-safe: the sweep settles the deferred BEFORE the context is disposed', async () => {
    _setContextModelForTests('per-script');
    let rid: string | undefined;
    // Park a pull WITHOUT delivering a chunk: create the generator + call .next() (runs it to the awaited
    // __lsStreamPull, which parks a live in-VM deferred), then return. dispatchStreamStart pushes nothing,
    // so the pull stays parked past the run's end.
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-parked',
      code: `globalThis.__g = api.llm.generateStream([{ role: 'user', content: 'hi' }]); globalThis.__p = globalThis.__g.next(); return 'parked';`,
      dispatchStreamStart: (requestId: string) => { rid = requestId; },
    }));
    expect(hasVmStream(rid!)).toBe(true);
    // handleScriptUnregister's order: sweep (settles the parked pull's deferred + drops the cell) BEFORE
    // disposing the context. Disposing a context that still holds a live UNSETTLED stream promise aborts
    // the WASM runtime — this asserts the safe order does not.
    sweepVmStreamsForScript('strm-parked');
    expect(hasVmStream(rid!)).toBe(false);
    disposeScriptVmHandlers('strm-parked');
    disposeContextForScript('strm-parked', true); // must NOT abort
    // The runtime survived: a fresh run still executes.
    const after = await runUserScriptInQuickJS(streamOpts({ scriptId: 'strm-after', code: `return 6 * 7;` }));
    expect(after).toBe(42);
    disposeContextForScript('strm-after', true);
  });

  test('a user-supplied AbortSignal is honoured: aborting mid-stream ends it (was: rejected up front)', async () => {
    _setContextModelForTests('per-script');
    let abortedReqId: string | undefined;
    const dispatchStreamAbort = (requestId: string): void => {
      abortedReqId = requestId;
      // The host aborts the upstream generation → ends the stream with an AbortError (the terminal event
      // the generator's pull loop consumes). Parity with the AsyncFunction engine.
      pushVmStreamEnd(requestId, false, { name: 'AbortError', message: 'The operation was aborted' });
    };
    const dispatchStreamStart = (requestId: string): void => {
      pushVmStreamChunk(requestId, { token: 'a' }); // one chunk, then the stream stays open until aborted
    };
    const r = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-signal',
      code: `const c = new AbortController(); const out = [];
        try {
          for await (const chunk of api.llm.generateStream([{ role: 'user', content: 'hi' }], { signal: c.signal })) { out.push(chunk.token); c.abort(); }
          return { out: out, ended: 'clean' };
        } catch (e) { return { out: out, ended: e.name }; }`,
      dispatchStreamStart,
      dispatchStreamAbort,
    })) as { out: string[]; ended: string };
    expect(r.out).toEqual(['a']);               // got the first chunk before aborting
    expect(r.ended).toBe('AbortError');         // the abort ended the stream (the host's AbortError)
    expect(typeof abortedReqId).toBe('string'); // __lsStreamAbort → dispatchStreamAbort fired an abort-request
    disposeContextForScript('strm-signal', true);
  });

  test('a pre-aborted AbortSignal ends the stream immediately (no chunks)', async () => {
    _setContextModelForTests('per-script');
    let abortedReqId: string | undefined;
    const dispatchStreamAbort = (requestId: string): void => {
      abortedReqId = requestId;
      pushVmStreamEnd(requestId, false, { name: 'AbortError', message: 'aborted' });
    };
    const r = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'strm-preabort',
      code: `const c = new AbortController(); c.abort(); const out = [];
        try {
          for await (const chunk of api.llm.generateStream([{ role: 'user', content: 'hi' }], { signal: c.signal })) { out.push(chunk.token); }
          return { out: out, ended: 'clean' };
        } catch (e) { return { out: out, ended: e.name }; }`,
      dispatchStreamStart: () => { /* pre-abort ends it before any chunk is pushed */ },
      dispatchStreamAbort,
    })) as { out: string[]; ended: string };
    expect(r.out).toEqual([]);
    expect(r.ended).toBe('AbortError');
    expect(typeof abortedReqId).toBe('string');
    disposeContextForScript('strm-preabort', true);
  });

  test('one script CANNOT pull or cancel another script\'s stream (ownership check blocks cross-script access)', async () => {
    // Shared context model (the default): every script shares one VM globalThis carrying the __lsStream*
    // host fns, and requestIds (vmstream:<scriptId>:<seq>) are enumerable — so without an owner check a
    // second script could drain or tear down a foreign stream.
    let ridA: string | undefined;
    await runUserScriptInQuickJS(streamOpts({
      scriptId: 'owner-A',
      // Lazy open: iterate once (.next()) to open A's stream (parks a single pull).
      code: `globalThis.__a = api.llm.generateStream([{ role: 'user', content: 'hi' }]); globalThis.__a.next().catch(() => {}); return null;`,
      dispatchStreamStart: (requestId: string) => { ridA = requestId; },
    }));
    expect(hasVmStream(ridA!)).toBe(true);
    pushVmStreamChunk(ridA!, { prime: 1 });          // satisfies A's parked pull (consumed by A's own .next())
    pushVmStreamChunk(ridA!, { secret: 'A-token' }); // now genuinely QUEUED in A's cell, with no waiter
    // Attacker B (same shared VM) tries to cancel + pull A's stream by its enumerable requestId.
    const bGot = await runUserScriptInQuickJS(streamOpts({
      scriptId: 'attacker-B',
      code: `globalThis.__lsStreamCancel(${JSON.stringify(ridA)}); return JSON.parse(await globalThis.__lsStreamPull(${JSON.stringify(ridA)}));`,
    })) as { error?: { name?: string } };
    expect(hasVmStream(ridA!)).toBe(true);                   // B's cancel was a NO-OP — A's stream survives
    expect(bGot.error?.name).toBe('StreamClosedError');      // B's pull is refused, not fed A's chunk
    expect(JSON.stringify(bGot)).not.toContain('A-token');   // no cross-script exfiltration
    disposeScriptVmHandlers('attacker-B'); disposeContextForScript('attacker-B', true);
    sweepVmStreamsForScript('owner-A'); disposeScriptVmHandlers('owner-A'); disposeContextForScript('owner-A', true);
  });
});
