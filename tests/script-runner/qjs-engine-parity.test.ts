/**
 * #11 P1 — QuickJS engine parity (the increment-2 exit gate).
 *
 * Drives the FULL in-process dispatch path (parent host-dispatcher ↔ child
 * `runOne` over the shared mock IPC, real `proxy.dispatch` / pending-map /
 * `api-response` routing / `flush`) under BOTH engines and asserts identical
 * observable behaviour. `engineMode='quickjs'` is forced per-process via the
 * `_setEngineModeForTests` seam (reset to `undefined` in `_infra/setup.ts`
 * before every test, so it can't leak across files).
 *
 * The load-bearing claim P1 must prove: the non-asyncify deferred-promise
 * bridge preserves LS's promise contract over REAL IPC — `await`, `.then`,
 * and genuinely-concurrent `Promise.all` all behave exactly as they do under
 * `new AsyncFunction`. (The spike proved this against a mock dispatch; this
 * proves it against the real one.) Plus: data marshaled IN, value marshaled
 * OUT, and body errors surfaced identically.
 *
 * Scope deliberately limited to plain-dispatch api methods (scriptStorage.*)
 * + pure body logic. HandleRef-returning factories, callbacks, streams, Zod
 * and structured (non-JSON) marshaling are P2–P6 and are NOT exercised here.
 */

import { describe, test, expect } from 'bun:test';
import { dispatchRunScript } from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string): Script {
  return {
    id,
    name:           `Parity ${id}`,
    code,
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['ls:startup'],
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
}

function makeRequest(data: unknown = {}) {
  return {
    data,
    timeoutMs:          5_000,
    // scriptStorage needs no permission; the parity scripts touch nothing gated.
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

// Run the entire suite once per engine. Same assertions, same expected values —
// any divergence between the AsyncFunction path and the QuickJS isolate fails here.
for (const engine of ['asyncfn', 'quickjs'] as const) {
  describe(`engine parity [${engine}]`, () => {
    test('await round-trips a real api dispatch result', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      const code = `
        await api.scriptStorage.set('k', 'v1');
        const got = await api.scriptStorage.get('k');
        return got;
      `;
      const res = await dispatchRunScript(makeScript('await-1', code), makeRequest());

      expect(res.ok).toBe(true);
      expect(res.value).toBe('v1');
    });

    test('api.utils.getEngine() reports this run\'s engine', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      // Sync method returned straight from the body. Each engine reports its own
      // identity (asyncfn -> 'asyncfn'; quickjs -> 'quickjs' via the in-VM
      // intercept), proven here over the real dispatch path.
      const res = await dispatchRunScript(makeScript('get-engine', `return api.utils.getEngine();`), makeRequest());

      expect(res.ok).toBe(true);
      expect(res.value).toBe(engine);
    });

    test('.then chaining round-trips', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      const code = `
        return api.scriptStorage.set('k', 'v2')
          .then(() => api.scriptStorage.get('k'));
      `;
      const res = await dispatchRunScript(makeScript('then-1', code), makeRequest());

      expect(res.ok).toBe(true);
      expect(res.value).toBe('v2');
    });

    test('concurrent Promise.all — multiple dispatches in flight at once', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      // Concurrent SETs (3 dispatches in flight together), then concurrent GETs.
      // The deferred bridge must keep each in-flight dispatch independent and
      // resolve all three — the property asyncify breaks.
      const code = `
        await Promise.all([
          api.scriptStorage.set('a', 'A'),
          api.scriptStorage.set('b', 'B'),
          api.scriptStorage.set('c', 'C'),
        ]);
        const vals = await Promise.all([
          api.scriptStorage.get('a'),
          api.scriptStorage.get('b'),
          api.scriptStorage.get('c'),
        ]);
        return vals.join(',');
      `;
      const res = await dispatchRunScript(makeScript('all-1', code), makeRequest());

      expect(res.ok).toBe(true);
      expect(res.value).toBe('A,B,C');
    });

    test('data marshaled IN and return value marshaled OUT', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      const code = `
        return { sum: data.a + data.b, echo: data.s, nested: { ok: data.a > 0 } };
      `;
      const res = await dispatchRunScript(
        makeScript('data-1', code),
        makeRequest({ a: 41, b: 1, s: 'hi' }),
      );

      expect(res.ok).toBe(true);
      expect(res.value).toEqual({ sum: 42, echo: 'hi', nested: { ok: true } });
    });

    test('a thrown body error surfaces as ok:false with the message intact', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);

      const code = `throw new Error('boom-' + data.tag);`;
      const res = await dispatchRunScript(
        makeScript('throw-1', code),
        makeRequest({ tag: 'xyz' }),
      );

      expect(res.ok).toBe(false);
      expect(res.error?.name).toBe('Error');
      expect(res.error?.message).toContain('boom-xyz');
    });

    // ls:* built-in libraries: bundled in-VM for QuickJS, resolved via the host
    // builtin-library-registry for asyncfn. The same require must yield the same
    // library on both engines — asserted via engine-independent invariants (any
    // divergence fails on the offending engine's iteration).
    test('ls:icons require returns the icon library', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);
      const code = `
        const lib = await script.require('ls:icons');
        const names = lib.names();
        return { count: names.length, svgKeys: Object.keys(lib.svg).length, sample: lib.sized(names[0], 24) };
      `;
      const res = await dispatchRunScript(makeScript('lsicons', code), makeRequest());
      expect(res.ok).toBe(true);
      const v = res.value as { count: number; svgKeys: number; sample: string };
      expect(v.count).toBeGreaterThan(0);
      expect(v.count).toBe(v.svgKeys);        // names ↔ svg record agree
      expect(v.sample).toContain('<svg');
    });

    test('ls:council-prompt require returns the builder surface', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);
      const code = `
        const lib = await script.require('ls:council-prompt');
        return {
          hasBuild: typeof lib.buildCouncilMessages === 'function',
          hasRole:  typeof lib.roleNote === 'function',
          debugObj: typeof lib.debug === 'object' && lib.debug !== null,
        };
      `;
      const res = await dispatchRunScript(makeScript('lscouncil', code), makeRequest());
      expect(res.ok).toBe(true);
      expect(res.value).toEqual({ hasBuild: true, hasRole: true, debugObj: true });
    });

    test('ls:components require loads (factory runs against api)', async () => {
      await setupE2E();
      _setEngineModeForTests(engine);
      const code = `
        const lib = await script.require('ls:components');
        return { loaded: typeof lib === 'object' && lib !== null, nonEmpty: Object.keys(lib).length > 0 };
      `;
      const res = await dispatchRunScript(makeScript('lscomponents', code), makeRequest());
      expect(res.ok).toBe(true);
      expect(res.value).toEqual({ loaded: true, nonEmpty: true });
    });
  });
}
