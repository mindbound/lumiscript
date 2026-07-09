/**
 * #11 §D — console type-identity parity under QuickJS.
 *
 * The in-VM console formats each argument via the shared serializeConsoleArg
 * (src/engine/console-format.ts) BEFORE it crosses the WASM boundary — while a
 * Map is still a real Map inside the VM. Without this, the console shim's
 * ctx.dump() flattens Map/Set/Error/Date to {} (their state lives in internal
 * slots, not own-enumerable props), so `console.log(new Map(...))` printed `{}`.
 *
 * Each case anchors to serializeConsoleArg() run host-side on the equivalent
 * value: the in-VM output MUST equal it — that IS the asyncfn-parity guarantee,
 * since both engines format through the same single-source-of-truth function.
 */
import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';
import { serializeConsoleArg } from '../../src/engine/console-format.js';

function runWithConsole(code: string): Promise<unknown[][]> {
  const captured: unknown[][] = [];
  const opts: QuickJSRunOptions = {
    code,
    dispatch:       async () => undefined,
    data:           {},
    script:         { id: 's-con', name: 'Con', type: 'trigger' },
    console:        { log: (...a: unknown[]) => { captured.push(a); }, warn() {}, error() {}, info() {} },
    timeoutMs:      5_000,
    serializeError: (e) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) }),
  };
  return runUserScriptInQuickJS(opts).then(() => captured);
}

describe('#11 QuickJS console type-identity', () => {
  test('a Map keeps its entries (not flattened to {})', async () => {
    const seen = await runWithConsole(`console.log(new Map([['a', 1], ['b', 2]]));`);
    expect(seen).toEqual([['Map(2) { "a" => 1, "b" => 2 }']]);
    expect(seen[0]).toEqual([serializeConsoleArg(new Map([['a', 1], ['b', 2]]))]); // parity anchor
  });

  test('a Set keeps its members', async () => {
    const seen = await runWithConsole(`console.log(new Set([1, 2, 3]));`);
    expect(seen).toEqual([['Set(3) { 1, 2, 3 }']]);
    expect(seen[0]).toEqual([serializeConsoleArg(new Set([1, 2, 3]))]);
  });

  test('an Error shows name + message', async () => {
    const seen = await runWithConsole(`console.log(new TypeError('boom'));`);
    expect(seen).toEqual([['TypeError: boom']]);
  });

  test('a Date renders as an ISO string (not [object Date])', async () => {
    const seen = await runWithConsole(`console.log(new Date(0));`);
    expect(seen).toEqual([['1970-01-01T00:00:00.000Z']]);
    expect(seen[0]).toEqual([serializeConsoleArg(new Date(0))]); // parity anchor
  });

  test('an invalid Date renders as "Invalid Date" (no throw)', async () => {
    const seen = await runWithConsole(`console.log(new Date('not-a-date'));`);
    expect(seen).toEqual([['Invalid Date']]);
  });

  test('a RegExp renders as its source + flags (not [object RegExp])', async () => {
    const seen = await runWithConsole(`console.log(/x/gi);`);
    expect(seen).toEqual([['/x/gi']]);
    expect(seen[0]).toEqual([serializeConsoleArg(/x/gi)]);
  });

  test('multiple args are each formatted then joined host-side', async () => {
    const seen = await runWithConsole(`console.log('count', new Set([9]));`);
    expect(seen).toEqual([['count', 'Set(1) { 9 }']]);
  });

  test('a plain object still renders (unchanged path)', async () => {
    const seen = await runWithConsole(`console.log({ a: 1 });`);
    expect(seen[0]).toEqual([serializeConsoleArg({ a: 1 })]);
  });

  test('warn / error / info are wrapped too', async () => {
    const captured: Record<string, unknown[]> = {};
    const opts: QuickJSRunOptions = {
      code:           `console.warn(new Set([1])); console.error(new Map([['e', 1]])); console.info(new Set([2]));`,
      dispatch:       async () => undefined,
      data:           {},
      script:         { id: 's-con2', name: 'Con2', type: 'trigger' },
      console:        {
        log() {},
        warn: (...a: unknown[]) => { captured.warn = a; },
        error: (...a: unknown[]) => { captured.error = a; },
        info: (...a: unknown[]) => { captured.info = a; },
      },
      timeoutMs:      5_000,
      serializeError: (e) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) }),
    };
    await runUserScriptInQuickJS(opts);
    expect(captured.warn).toEqual(['Set(1) { 1 }']);
    expect(captured.error).toEqual(['Map(1) { "e" => 1 }']);
    expect(captured.info).toEqual(['Set(1) { 2 }']);
  });
});
