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
  // #11 parity sweep — Option-B FE-echo resolvers so gated-factory runs finish fast.
  notifyAdvancedModalOpened,
  notifyFloatWidgetCreated,
  notifyDrawerTabRegistered,
  notifyAppMountCreated,
  __getPendingAdvancedModalOpenIdsForTests,
  __getPendingFloatWidgetCreateIdsForTests,
  __getPendingDrawerTabRegisterKeysForTests,
  __getPendingAppMountCreateIdsForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { RegisterHandler, BroadcastSubscribeMessage, HandlerKind, ApiProxyRequest } from '../../src/types/script-runner-ipc.js';

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

// ───────────────────────────────────────────────────────────────────────────
// #11 parity sweep — gated FACTORY / DOM-handle CREATE dispatch (the sequences
// the register-handler harness above omits). Each factory's CREATE api-request
// is produced by the SAME api-proxy `dispatch` under both engines (quickjs's
// in-VM factory intercepts call the identical dispatch), so the child→parent
// `api-request` must be byte-identical modulo the per-run uuids. This is the
// durable regression net for the P8 default-flip: the host cannot tell which
// engine produced a factory call. (addStyle: CREATE only — its `.remove()` is an
// accepted async/HandleRef divergence, out of scope.)
// ───────────────────────────────────────────────────────────────────────────

function makeFactoryRequest() {
  // Factories permission-gate; without these the canonical throws before dispatch.
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(['ui_panels', 'app_manipulation']), userId: 'test-user' };
}
function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}
/** Install a parent-side watcher that fires `cb` when the matching factory api-request lands. */
function watchApiRequest(spindle: MockSpindle, method: string, cb: (req: ApiProxyRequest) => void): () => void {
  return spindle.backendProcesses.onMessage((event) => {
    const m = event.payload as { type?: unknown; method?: unknown };
    if (m && typeof m === 'object' && m.type === 'api-request' && m.method === method) cb(event.payload as ApiProxyRequest);
  });
}
/** Poll the pending-awaiter table until the open-await is registered, THEN echo (platform-race-safe). */
async function echoWhenAwaiterReady(isReady: () => boolean, echo: () => void): Promise<void> {
  for (let i = 0; i < 2000 && !isReady(); i++) await new Promise<void>((r) => setTimeout(r, 0));
  echo();
}

interface FactoryScenario {
  name: string;
  body: string;
  method: string;
  /** The generated-uuid values in the found api-request to normalize away before comparison. */
  ids: (req: ApiProxyRequest) => Array<string | undefined>;
  /** Gated factories block the run on an FE-echo; resolve it so the run finishes fast. */
  echo?: (req: ApiProxyRequest) => void;
}
const opts0 = (req: ApiProxyRequest) => req.args[0] as Record<string, unknown>;

const FACTORY_SCENARIOS: FactoryScenario[] = [
  { name: 'ui.dom.inject', method: 'ui.dom.inject',
    body: `api.ui.dom.inject('#target', '<p>x</p>');`,
    ids: (req) => [(req.args[2] as Record<string, unknown> | undefined)?._elementId as string] },
  { name: 'ui.dom.addStyle', method: 'ui.dom.addStyle',
    body: `api.ui.dom.addStyle('.x { color: red }');`,
    ids: () => [] }, // CREATE carries no id
  { name: 'ui.createFloatWidget', method: 'ui.createFloatWidget',
    body: `api.ui.createFloatWidget({ width: 200, height: 100 });`,
    ids: (req) => [opts0(req)._widgetId as string, opts0(req)._rootElementId as string],
    echo: (req) => { const id = opts0(req)._widgetId as string; void echoWhenAwaiterReady(() => __getPendingFloatWidgetCreateIdsForTests().includes(id), () => notifyFloatWidgetCreated(id)); } },
  { name: 'ui.showAdvancedModal', method: 'ui.showAdvancedModal',
    body: `api.ui.showAdvancedModal({ title: 'Hi' });`,
    ids: (req) => [opts0(req)._modalId as string, opts0(req)._rootElementId as string],
    echo: (req) => { const id = opts0(req)._modalId as string; void echoWhenAwaiterReady(() => __getPendingAdvancedModalOpenIdsForTests().includes(id), () => notifyAdvancedModalOpened(id)); } },
  { name: 'ui.registerDrawerTab', method: 'ui.registerDrawerTab',
    body: `api.ui.registerDrawerTab({ id: 'my-tab', title: 'My Tab' });`,
    ids: (req) => [opts0(req)._rootElementId as string], // tabId 'my-tab' is a user literal — do NOT normalize
    echo: (req) => { const tabId = opts0(req).id as string; void echoWhenAwaiterReady(() => __getPendingDrawerTabRegisterKeysForTests().includes(`${req.scriptId}:${tabId}`), () => notifyDrawerTabRegistered(req.scriptId, tabId)); } },
  { name: 'ui.mountApp', method: 'ui.mountApp',
    body: `api.ui.mountApp({ title: 'A' });`,
    ids: (req) => [opts0(req)._mountId as string, opts0(req)._rootElementId as string],
    echo: (req) => { const id = opts0(req)._mountId as string; void echoWhenAwaiterReady(() => __getPendingAppMountCreateIdsForTests().includes(id), () => notifyAppMountCreated(id)); } },
];

async function observeFactory(engine: EngineMode, sc: FactoryScenario): Promise<unknown> {
  __resetForTests();
  _setEngineModeForTests(engine);
  const sid = `parity-fac-${engine ?? 'asyncfn'}`;
  const { ipc, childCleanup } = await setupE2E();
  const unsub = sc.echo ? watchApiRequest(getSpindle(), sc.method, sc.echo) : () => {};
  try {
    const runRes = await dispatchRunScript(makeScript(sid, sc.body + ' return null;'), makeFactoryRequest());
    if (!runRes.ok) throw new Error(`[${engine ?? 'asyncfn'}] ${sc.name}: run failed`);
    const req = ipc.parentInbox().find((m): m is ApiProxyRequest => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as { type?: unknown; method?: unknown };
      return r.type === 'api-request' && r.method === sc.method;
    });
    if (!req) throw new Error(`[${engine ?? 'asyncfn'}] ${sc.name}: no api-request for ${sc.method}`);
    // Normalize the per-run uuids (requestId + the fire runId + the per-engine scriptId + the generated
    // handle ids) so the STRUCTURAL create dispatch compares equal across engines.
    const idMap: Record<string, string | undefined> = { '<REQID>': req.requestId, '<RID>': req.runId, '<SID>': sid };
    sc.ids(req).forEach((v, i) => { if (v) idMap[`<ID${i}>`] = v; });
    return normalizeIds(req, idMap);
  } finally {
    unsub();
    childCleanup();
  }
}

describe('#11 parity sweep: gated-factory CREATE dispatch (asyncfn vs quickjs)', () => {
  for (const sc of FACTORY_SCENARIOS) {
    test(`${sc.name}: identical CREATE api-request across engines`, async () => {
      const asyncfn = await observeFactory(undefined, sc);
      const quickjs = await observeFactory('quickjs', sc);
      expect(quickjs).toEqual(asyncfn);
    });
  }
});
