/**
 * #11 P3 D — in-VM script.require.
 *
 * User-library source is fetched via the existing 'script.fetchLibrary' dispatch,
 * then compiled + run INSIDE the QuickJS VM (new AsyncFunction with the same
 * api/data/script/exports/module/fetch bindings as the asyncfn host path), so
 * library code is isolated like the main script. Per-run cache + circular
 * detection. `ls:*` built-ins (host TS factories) fail loud for now.
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Require', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

/** A dispatch that serves library source from a map + records api calls. */
function libDispatch(libs: Record<string, string>, onApi?: (m: string, a: unknown[]) => unknown) {
  let fetchCount = 0;
  const dispatch = async (method: string, args: unknown[]) => {
    if (method === 'script.fetchLibrary') {
      fetchCount++;
      const name = args[0] as string;
      if (!(name in libs)) throw new Error(`script.require: library "${name}" not found`);
      return { id: `id-${name}`, name, code: libs[name], allowDangerous: false };
    }
    return onApi ? onApi(method, args) : undefined;
  };
  return { dispatch, getFetchCount: () => fetchCount };
}

describe('#11 P3 D: in-VM script.require', () => {
  test('a user library is fetched, compiled in-VM, and its exports are returned', async () => {
    const { dispatch } = libDispatch({
      greeter: `exports.greet = (n) => 'hi ' + n; exports.NAME = 'greeter';`,
    });
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const lib = await script.require('greeter'); return { greet: lib.greet('Ada'), name: lib.NAME };`,
    })) as { greet: string; name: string };
    expect(v.greet).toBe('hi Ada');
    expect(v.name).toBe('greeter');
  });

  test('module.exports assignment works (CJS style)', async () => {
    const { dispatch } = libDispatch({ m: `module.exports = { answer: 42 };` });
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const lib = await script.require('m'); return lib.answer;`,
    }));
    expect(v).toBe(42);
  });

  test('require caches: a second require returns the same exports without re-fetching', async () => {
    const { dispatch, getFetchCount } = libDispatch({ m: `exports.v = 7;` });
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const a = await script.require('m'); const b = await script.require('m'); return { same: a === b, v: a.v };`,
    })) as { same: boolean; v: number };
    expect(v.same).toBe(true);
    expect(v.v).toBe(7);
    expect(getFetchCount()).toBe(1);
  });

  test('nested require works (a library requiring another library)', async () => {
    const { dispatch } = libDispatch({
      a: `const b = await script.require('b'); exports.sum = (x) => b.add(x, 10);`,
      b: `exports.add = (x, y) => x + y;`,
    });
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const a = await script.require('a'); return a.sum(5);`,
    }));
    expect(v).toBe(15);
  });

  test('circular dependency is detected', async () => {
    const { dispatch } = libDispatch({
      a: `const b = await script.require('b'); exports.fromA = b;`,
      b: `const a = await script.require('a'); exports.fromB = a;`,
    });
    let err: unknown;
    try {
      await runUserScriptInQuickJS(makeOpts({ dispatch, code: `await script.require('a'); return 'no-circular';` }));
    } catch (e) { err = e; }
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toContain('circular');
  });

  test('a library can call api.* (attributed to the calling script)', async () => {
    let stored: unknown[] = [];
    const { dispatch } = libDispatch(
      { storer: `exports.save = async (k, val) => { await api.scriptStorage.set(k, val); return 'saved'; };` },
      (m, a) => { if (m === 'scriptStorage.set') { stored = a; } return undefined; },
    );
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const lib = await script.require('storer'); return await lib.save('k', 99);`,
    }));
    expect(v).toBe('saved');
    expect(stored).toEqual(['k', 99]);
  });

  test('ls:* built-ins fail loud (host-side factories, not yet available)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { await script.require('ls:components'); return 'loaded'; } catch (e) { return 'caught:' + e.message; }`,
    })) as string;
    expect(v).toContain('caught:');
    expect(v).toContain('not yet available');
  });

  test('a not-found library rejects', async () => {
    const { dispatch } = libDispatch({ exists: `exports.x = 1;` });
    let err: unknown;
    try {
      await runUserScriptInQuickJS(makeOpts({ dispatch, code: `await script.require('missing'); return 1;` }));
    } catch (e) { err = e; }
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toContain('not found');
  });
});
