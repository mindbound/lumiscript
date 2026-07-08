/**
 * #11 toHostError parity pin — a thrown value surfaces from the quickjs engine exactly as
 * asyncfn's serializeError would discriminate it (instanceof Error). ctx.dump loses the
 * instanceof info, so the engine asks the VM (__lsErrInfo): a real Error keeps name+message
 * (+stack); ANY non-Error thrown value becomes new Error(String(value)) — so a thrown plain
 * object is '[object Object]', NOT its `.message`.
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(code: string): QuickJSRunOptions {
  return {
    code,
    dispatch:       async () => undefined,
    data:           {},
    script:         { id: 's-err', name: 'Err', type: 'trigger' },
    console:        { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      5_000,
    serializeError: (e) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) }),
  };
}

describe('#11 toHostError parity', () => {
  test('a thrown Error keeps its name + message', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw new TypeError('te');`)))
      .rejects.toMatchObject({ name: 'TypeError', message: 'te' });
  });

  test('a thrown plain object surfaces String(value) = [object Object], NOT its .message (asyncfn parity)', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw { message: 'custom', name: 'Nope' };`)))
      .rejects.toMatchObject({ name: 'Error', message: '[object Object]' });
  });

  test('a thrown string surfaces String(value)', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw 'oops';`)))
      .rejects.toMatchObject({ name: 'Error', message: 'oops' });
  });

  test('a thrown number surfaces String(value)', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw 42;`)))
      .rejects.toMatchObject({ name: 'Error', message: '42' });
  });

  test('a thrown non-Error object with a custom toString uses the in-VM String() (not [object Object])', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw { toString: function () { return 'CUSTOM_STR'; } };`)))
      .rejects.toMatchObject({ name: 'Error', message: 'CUSTOM_STR' });
  });

  test('a thrown null surfaces String(null) = "null"', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw null;`)))
      .rejects.toMatchObject({ name: 'Error', message: 'null' });
  });

  test('a thrown undefined surfaces String(undefined) = "undefined"', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw undefined;`)))
      .rejects.toMatchObject({ name: 'Error', message: 'undefined' });
  });

  test('a thrown boolean surfaces String(true) = "true"', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`throw true;`)))
      .rejects.toMatchObject({ name: 'Error', message: 'true' });
  });

  test('a custom Error subclass keeps its custom .name (in-VM instanceof Error still holds)', async () => {
    await expect(runUserScriptInQuickJS(makeOpts(`class C extends Error { constructor(m) { super(m); this.name = 'MyCustomError'; } } throw new C('x');`)))
      .rejects.toMatchObject({ name: 'MyCustomError', message: 'x' });
  });

  test('a non-Error throw carries no stack — host-internal frames are not leaked', async () => {
    const err = await runUserScriptInQuickJS(makeOpts(`throw 42;`)).then(
      () => { throw new Error('expected rejection'); },
      (e: unknown) => e,
    );
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toBe('42');
    expect((err as Error).stack).toBeUndefined();
  });
});
