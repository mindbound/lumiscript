/**
 * #11 P3 audit (I1) — isolate containment for the QuickJS engine.
 *
 * The QuickJS context is reused across runs of different scripts. These tests pin
 * the containment properties the P3 audit flagged as unverified: the trusted
 * scaffolding bindings are locked so one run can't reassign them to poison the
 * next (H1), the per-run reset SOURCES are frozen, and host globals (Bun/process)
 * are structurally absent. (Host-boundary escape is covered separately; here we
 * assert the IN-VM cross-script isolation properties.)
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Containment', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 audit (H1): trusted scaffolding is locked', () => {
  test('scaffolding bindings are non-writable (a run cannot reassign them)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const names = ['__lsEncode','__lsDecode','__hostDispatch','api','z','Handlebars','__hbs','__lsRequire','__console','TextEncoder','TextDecoder','structuredClone'];
        const out = {};
        for (const n of names) {
          try { globalThis[n] = function () { return 'HACKED'; }; out[n] = 'writable'; }
          catch (e) { out[n] = 'locked'; }
        }
        return out;
      `,
    })) as Record<string, string>;
    for (const n of Object.keys(v)) expect(v[n]).toBe('locked');
  });

  test('the __hbsBuiltins reset source is frozen', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { globalThis.__hbsBuiltins.evil = 1; return 'mutable'; } catch (e) { return 'frozen'; }`,
    }));
    expect(v).toBe('frozen');
  });

  test('a tampering run cannot poison the next run — marshaling stays intact', async () => {
    const a = await runUserScriptInQuickJS(makeOpts({
      code: `try { globalThis.__lsEncode = () => 'X'; return 'tampered'; } catch (e) { return 'blocked'; }`,
    }));
    expect(a).toBe('blocked');

    // Run B marshals a Date correctly — would be broken if A had replaced __lsEncode.
    const b = await runUserScriptInQuickJS(makeOpts({ code: `return { d: new Date(5) };` })) as { d: Date };
    expect(b.d).toBeInstanceOf(Date);
    expect(b.d.getTime()).toBe(5);
  });
});

describe('#11 P3 audit (I1): host globals are absent in the VM', () => {
  test('Bun / process / require are undefined', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return { bun: typeof Bun, process: typeof process, require: typeof require };`,
    })) as Record<string, string>;
    expect(v.bun).toBe('undefined');
    expect(v.process).toBe('undefined');
    expect(v.require).toBe('undefined');
  });
});
