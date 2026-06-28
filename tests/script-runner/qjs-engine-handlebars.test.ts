/**
 * #11 P3 C — in-VM Handlebars.
 *
 * `api.utils.template.compile` returns a function and `registerHelper` takes a
 * function — neither can cross IPC — so the in-VM api proxy re-homes template.*
 * onto a per-context Handlebars instance (vm-handlebars-bundle). `render` still
 * dispatches macros.resolve to the host for {{macro}} expansion, then compiles +
 * renders in-VM so in-VM-registered helpers apply. Helpers reset to the built-ins
 * each run (per-run isolation, matching the asyncfn per-run Handlebars.create()).
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Handlebars', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 C: in-VM Handlebars', () => {
  test('Handlebars is available + template.compile returns a working (sync) function', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const fn = api.utils.template.compile('Hello {{name}}, you have {{count}} messages.');
        return { typeofHbs: typeof Handlebars, out: fn({ name: 'Ada', count: 3 }) };
      `,
    })) as { typeofHbs: string; out: string };
    expect(v.typeofHbs).toBe('object');
    expect(v.out).toBe('Hello Ada, you have 3 messages.');
  });

  test('registerHelper: a custom in-VM helper is applied by compile', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        api.utils.template.registerHelper('shout', (s) => String(s).toUpperCase());
        return api.utils.template.compile('{{shout name}}')({ name: 'hi' });
      `,
    }));
    expect(v).toBe('HI');
  });

  test('render: dispatches macros.resolve to the host, then compiles in-VM with helpers', async () => {
    let captured: { method: string; args: unknown[] } | null = null;
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async (method, args) => {
        captured = { method, args };
        return { text: 'Resolved {{shout who}}' };   // host macro-resolution result
      },
      code: `
        api.utils.template.registerHelper('shout', (s) => String(s).toUpperCase());
        return await api.utils.template.render('{{macro}} {{shout who}}', { who: 'world' });
      `,
    }));
    expect(captured!.method).toBe('utils.macros.resolve');
    expect(v).toBe('Resolved WORLD');
  });

  test('helpers are isolated between runs (reset to built-ins each run)', async () => {
    const r1 = await runUserScriptInQuickJS(makeOpts({
      code: `
        api.utils.template.registerHelper('shout', (s) => String(s).toUpperCase());
        return api.utils.template.compile('{{shout name}}')({ name: 'hi' });
      `,
    }));
    expect(r1).toBe('HI');

    // A later, separate run must NOT see the previous run's 'shout' helper.
    const r2 = await runUserScriptInQuickJS(makeOpts({
      code: `
        try { return api.utils.template.compile('{{shout name}}')({ name: 'hi' }); }
        catch (e) { return 'MISSING:' + ((e && e.message) ? e.message.slice(0, 24) : ''); }
      `,
    })) as string;
    expect(r2.startsWith('MISSING')).toBe(true);
  });
});
