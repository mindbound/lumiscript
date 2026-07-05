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
});
