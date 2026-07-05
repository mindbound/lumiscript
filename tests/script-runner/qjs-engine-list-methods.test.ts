/**
 * #11 list-methods-sync-vs-promise — the 6 declared-SYNC list reads
 * (tools.list / macros.list / macros.listInterceptors / chat.getInjections /
 * chat.listContentProcessors / worldInfo.listInterceptors) must return ARRAYS
 * in-VM, served from the run's seeded `listSnapshots` (mirroring the asyncfn
 * proxy's `local*` arrays). Falling through to send() would yield a Promise,
 * so `api.macros.list().forEach()` would throw on a Promise.
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'List', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
    listSnapshots:  over.listSnapshots,
  };
}

describe('#11 list-methods-sync-vs-promise', () => {
  test('the 6 declared-sync reads return ARRAYS from the seeded snapshot (.forEach does not throw)', async () => {
    const out = await runUserScriptInQuickJS(makeOpts({
      listSnapshots: {
        tools:                 [{ name: 't1' }, { name: 't2' }],
        macros:                [{ name: 'm1' }],
        macroInterceptors:     [{ id: 'mi1' }],
        chatInjections:        [{ id: 'inj1' }],
        chatContentProcessors: [{ id: 'cp1' }],
        worldInfoInterceptors: [{ id: 'wi1' }],
      },
      code: `
        // .forEach() would throw if list() returned a Promise.
        var names = []; api.macros.list().forEach(function (m) { names.push(m.name); });
        return {
          isArray:    Array.isArray(api.tools.list()),
          toolNames:  api.tools.list().map(function (t) { return t.name; }),
          macroNames: names,
          miLen:      api.macros.listInterceptors().length,
          injLen:     api.chat.getInjections().length,
          cpLen:      api.chat.listContentProcessors().length,
          wiLen:      api.worldInfo.listInterceptors().length,
        };
      `,
    }));
    expect(out).toEqual({
      isArray: true, toolNames: ['t1', 't2'], macroNames: ['m1'],
      miLen: 1, injLen: 1, cpLen: 1, wiLen: 1,
    });
  });

  test('list reads default to empty arrays when no snapshot is seeded', async () => {
    const out = await runUserScriptInQuickJS(makeOpts({
      code: `return { t: api.tools.list().length, m: api.macros.list().length, isArr: Array.isArray(api.macros.list()) };`,
    }));
    expect(out).toEqual({ t: 0, m: 0, isArr: true });
  });

  test('each read is a fresh defensive copy — mutating a returned list cannot perturb the snapshot', async () => {
    const out = await runUserScriptInQuickJS(makeOpts({
      listSnapshots: {
        tools: [{ name: 't1' }], macros: [], macroInterceptors: [],
        chatInjections: [], chatContentProcessors: [], worldInfoInterceptors: [],
      },
      code: `
        var a = api.tools.list();
        a.push({ name: 'HACK' });   // mutate the returned array
        a[0].name = 'MUT';          // mutate a returned entry
        var b = api.tools.list();   // a fresh read must be unaffected
        return { bLen: b.length, bName: b[0].name };
      `,
    }));
    expect(out).toEqual({ bLen: 1, bName: 't1' });
  });
});
