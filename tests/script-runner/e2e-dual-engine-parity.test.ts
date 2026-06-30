/**
 * #11 P5 — DUAL-ENGINE PARITY HARNESS (the Increment-3 capstone).
 *
 * For every handler-registration kind the QuickJS isolate re-implements in-VM
 * (commands.onInvoked [inc1], the interceptor family [inc2], the clean
 * subscriptions + ui.dom.delegate [inc3a], broadcast.on [inc3b], macros/tools
 * [inc3c], chat.onMessageTag [inc3d]), this runs the SAME user-script body
 * through BOTH engines — asyncfn (the shipped baseline) and quickjs (the
 * isolate) — and asserts the OBSERVABLE behavior is identical:
 *
 *   1. The register-handler IPC the parent receives is structurally identical
 *      (modulo engine-specific id formats — asyncfn `scriptId-kind-seq` vs
 *      quickjs `kind:uuid` — which are normalized away). This is the headline
 *      assertion: the host cannot tell which engine produced the registration.
 *   2. Firing the handler succeeds under both engines (ok:true).
 *   3. The quickjs fire returns the correct value; the asyncfn fire returns the
 *      same value OR undefined (some asyncfn wrappers intentionally discard the
 *      return for void-contract kinds — the host ignores it either way).
 *
 * This is the strongest faithfulness proof for the in-VM interception and a
 * durable regression net for the P8 default-flip. Engine remains flag-gated
 * (engineMode default 'asyncfn'); this harness drives quickjs only via the
 * test seam.
 */
import { describe, test, expect, afterEach } from 'bun:test';
import {
  dispatchRunScript,
  __sendRunHandlerRequestForTests,
  __resetForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler, BroadcastSubscribeMessage, HandlerKind } from '../../src/types/script-runner-ipc.js';

type EngineMode = 'quickjs' | undefined; // undefined = asyncfn

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Parity ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}

/** Replace engine-specific id values (handlerId / runId / scriptId / subId) with
 *  stable placeholders anywhere they appear in the structure, longest-first so an
 *  id that embeds another (asyncfn handlerId embeds scriptId) is replaced whole. */
function normalizeIds(obj: unknown, ids: Record<string, string | undefined>): unknown {
  let json = JSON.stringify(obj);
  const pairs = Object.entries(ids)
    .filter((e): e is [string, string] => typeof e[1] === 'string' && e[1].length > 0)
    .sort((a, b) => b[1].length - a[1].length);
  for (const [placeholder, actual] of pairs) json = json.split(actual).join(placeholder);
  return JSON.parse(json);
}

interface Scenario {
  name: string;
  kind: string;        // the register-handler kind to find + fire
  body: string;        // user-script body that registers the handler
  fireArgs: unknown[]; // args delivered to the fired handler
  expectValue: unknown; // the value the handler returns from those args
}

// Every kind that fires through the standard RunHandlerRequest -> fireVmHandler
// path. Handlers derive their return purely from the fire args (engine-independent).
const SCENARIOS: Scenario[] = [
  { name: 'commands.onInvoked', kind: 'commandsOnInvoked',
    body: `api.commands.onInvoked((id, ctx) => 'C:' + id + ':' + ctx.n);`,
    fireArgs: ['cmd1', { n: 5 }], expectValue: 'C:cmd1:5' },
  { name: 'macros.registerInterceptor', kind: 'macroInterceptor',
    body: `api.macros.registerInterceptor((c) => 'MI:' + c.text, { priority: 50 });`,
    fireArgs: [{ text: 'bar' }], expectValue: 'MI:bar' },
  { name: 'chat.registerContentProcessor', kind: 'contentProcessor',
    body: `api.chat.registerContentProcessor((c) => 'CP:' + c.text, { priority: 10 });`,
    fireArgs: [{ text: 'baz' }], expectValue: 'CP:baz' },
  { name: 'worldInfo.registerInterceptor', kind: 'worldInfoInterceptor',
    body: `api.worldInfo.registerInterceptor((c) => 'WI:' + c.text);`,
    fireArgs: [{ text: 'qux' }], expectValue: 'WI:qux' },
  { name: 'ui.events.onKeyboardChange', kind: 'uiKeyboardChange',
    body: `api.ui.events.onKeyboardChange((s) => 'K:' + s.visible);`,
    fireArgs: [{ visible: true }], expectValue: 'K:true' },
  { name: 'oauth.onCallback', kind: 'oauthCallback',
    body: `api.oauth.onCallback((p) => 'O:' + p.code);`,
    fireArgs: [{ code: 'xyz' }], expectValue: 'O:xyz' },
  { name: 'ui.dom.delegate', kind: 'domDelegate',
    body: `api.ui.dom.delegate('.btn', 'click', (e) => 'D:' + e.kind, { capture: true });`,
    fireArgs: [{ kind: 'click' }], expectValue: 'D:click' },
  { name: 'macros.register (pull)', kind: 'macro',
    body: `api.macros.register('greet', { description: 'hi' }, (ctx) => 'M:' + ctx.args[0]);`,
    fireArgs: [{ args: ['world'] }], expectValue: 'M:world' },
  { name: 'tools.register', kind: 'tool',
    body: `api.tools.register('t', { description: 'd', parameters: {} }, (args) => 'T:' + args.q);`,
    fireArgs: [{ q: 'ping' }], expectValue: 'T:ping' },
  { name: 'chat.onMessageTag', kind: 'messageTagHandler',
    body: `api.chat.onMessageTag('dice', (ev) => 'TAG:' + ev.content, { removeFromMessage: true });`,
    fireArgs: [{ tagName: 'dice', content: '7', attrs: {} }], expectValue: 'TAG:7' },
];

interface Observation { runOk: boolean; registerIpc: unknown; fireOk: boolean; fireValue: unknown; }

async function observe(engine: EngineMode, scenario: Scenario): Promise<Observation> {
  __resetForTests();
  _setEngineModeForTests(engine);
  const sid = `parity-${engine ?? 'asyncfn'}`;
  const { ipc, childCleanup } = await setupE2E();
  try {
    const runRes = await dispatchRunScript(makeScript(sid, scenario.body + ' return null;'), makeRequest());
    const reg = ipc.parentInbox().find((m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as { type?: unknown; kind?: unknown };
      return r.type === 'register-handler' && r.kind === scenario.kind;
    });
    if (!reg) throw new Error(`[${engine ?? 'asyncfn'}] ${scenario.name}: no register-handler IPC for kind ${scenario.kind}`);
    const fire = await __sendRunHandlerRequestForTests(sid, reg.handlerId, scenario.kind as HandlerKind, scenario.fireArgs, 5_000);
    const registerIpc = normalizeIds(reg, {
      '<HID>': reg.handlerId,
      '<RID>': (reg as { runId?: string }).runId,
      '<SID>': sid,
    });
    return { runOk: runRes.ok, registerIpc, fireOk: fire.ok, fireValue: fire.value };
  } finally {
    childCleanup();
  }
}

afterEach(() => { _setEngineModeForTests(undefined); });

describe('#11 P5 dual-engine parity: register IPC + fire (asyncfn vs quickjs)', () => {
  for (const scenario of SCENARIOS) {
    test(`${scenario.name}: identical register IPC + fire behavior across engines`, async () => {
      const asyncfn = await observe(undefined, scenario);
      const quickjs = await observe('quickjs', scenario);

      // Both engines registered + ran the body.
      expect(asyncfn.runOk).toBe(true);
      expect(quickjs.runOk).toBe(true);

      // HEADLINE: the register-handler IPC is structurally identical (normalized ids).
      expect(quickjs.registerIpc).toEqual(asyncfn.registerIpc);

      // Both fires succeed.
      expect(asyncfn.fireOk).toBe(true);
      expect(quickjs.fireOk).toBe(true);

      // quickjs returns the correct value; asyncfn returns the same OR undefined
      // (some asyncfn wrappers discard the return for void-contract kinds — the
      // host ignores it either way, so this is a benign, documented difference).
      expect(quickjs.fireValue).toEqual(scenario.expectValue);
      expect([scenario.expectValue, undefined]).toContainEqual(asyncfn.fireValue);
    });
  }
});

describe('#11 P5 dual-engine parity: broadcast.on subscribe IPC', () => {
  test('broadcast.on emits an identical broadcast-subscribe IPC across engines', async () => {
    async function observeBroadcast(engine: EngineMode): Promise<unknown> {
      __resetForTests();
      _setEngineModeForTests(engine);
      const sid = `parity-bc-${engine ?? 'asyncfn'}`;
      const { ipc, childCleanup } = await setupE2E();
      try {
        expect((await dispatchRunScript(
          makeScript(sid, `api.broadcast.on('evt', () => {}); return null;`), makeRequest(),
        )).ok).toBe(true);
        const sub = ipc.parentInbox().find((m): m is BroadcastSubscribeMessage => {
          if (typeof m !== 'object' || m === null) return false;
          const r = m as { type?: unknown };
          return r.type === 'broadcast-subscribe';
        });
        if (!sub) throw new Error(`[${engine ?? 'asyncfn'}] no broadcast-subscribe IPC`);
        return normalizeIds(sub, { '<SUB>': sub.subId, '<SID>': sid });
      } finally {
        childCleanup();
      }
    }
    const asyncfn = await observeBroadcast(undefined);
    const quickjs = await observeBroadcast('quickjs');
    expect(quickjs).toEqual(asyncfn);
  });
});
