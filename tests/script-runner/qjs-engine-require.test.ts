/**
 * #11 P3 D — in-VM script.require.
 *
 * User-library source is fetched via the existing 'script.fetchLibrary' dispatch,
 * then compiled + run INSIDE the QuickJS VM (new AsyncFunction with the same
 * api/data/script/exports/module/fetch bindings as the asyncfn host path), so
 * library code is isolated like the main script. Per-run cache + circular
 * detection. `ls:*` built-ins (host TS factories) are bundled in-VM and loaded
 * via globalThis.__lsBuiltins — parity with the asyncfn builtin-library-registry.
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

  test('concurrent same-name requires share ONE fetch (no double-fetch)', async () => {
    const { dispatch, getFetchCount } = libDispatch({ m: `exports.v = 42;` });
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      code: `const [a, b] = await Promise.all([script.require('m'), script.require('m')]); return { same: a === b, v: a.v };`,
    })) as { same: boolean; v: number };
    expect(v.same).toBe(true);
    expect(v.v).toBe(42);
    expect(getFetchCount()).toBe(1); // ONE fetchLibrary despite two concurrent requires (was 2 before the loading dedup)
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

  // ls:* built-in libraries now load in-VM (their bundled factory is invoked
  // against globalThis.api) — parity with the asyncfn builtin-library-registry.
  // The asyncfn-side outputs are pinned by tests/engine/builtins/*.test.ts, and
  // qjs-engine-parity.test.ts asserts the two engines agree.
  test('ls:icons loads in-VM and returns the icon library', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `const lib = await script.require('ls:icons');
        const names = lib.names();
        return {
          isArr:  Array.isArray(names),
          n:      names.length,
          svgObj: typeof lib.svg === 'object' && lib.svg !== null,
          match:  names.length === Object.keys(lib.svg).length,
          sample: lib.sized(names[0], 24),
        };`,
    })) as { isArr: boolean; n: number; svgObj: boolean; match: boolean; sample: string };
    expect(v.isArr).toBe(true);
    expect(v.n).toBeGreaterThan(0);
    expect(v.svgObj).toBe(true);
    expect(v.match).toBe(true);            // every name has an svg entry, and vice-versa
    expect(v.sample).toContain('<svg');
  });

  test('ls:council-prompt loads in-VM (pure string builders)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `const lib = await script.require('ls:council-prompt');
        return {
          build: typeof lib.buildCouncilMessages,
          role:  typeof lib.roleNote,
          debug: typeof lib.debug,
        };`,
    })) as { build: string; role: string; debug: string };
    expect(v.build).toBe('function');
    expect(v.role).toBe('function');
    expect(v.debug).toBe('object');
  });

  test('ls:components loads in-VM (factory runs against globalThis.api)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `const lib = await script.require('ls:components');
        return { obj: typeof lib === 'object' && lib !== null, keys: Object.keys(lib).length };`,
    })) as { obj: boolean; keys: number };
    expect(v.obj).toBe(true);
    expect(v.keys).toBeGreaterThan(0);
  });

  test('an unknown ls:* built-in rejects with "not found"', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { await script.require('ls:does-not-exist'); return 'loaded'; } catch (e) { return 'caught:' + e.message; }`,
    })) as string;
    expect(v).toContain('caught:');
    expect(v).toContain('not found');
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
