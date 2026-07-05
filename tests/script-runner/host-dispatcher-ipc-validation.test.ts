/**
 * Regression fence for the Phase 3c / MED-04 Zod IPC validation at
 * `host-dispatcher.ts:handleChildMessage`.
 *
 * The `ChildToParentMessageSchema` schema (in
 * `src/types/script-runner-ipc-schemas.ts`) validates every inbound IPC
 * message from the script-runner subprocess. The dispatch boundary
 * drops malformed payloads silently after logging a `spindle.log.warn`.
 *
 * Test strategy:
 *   - Drive `ChildToParentMessageSchema.safeParse(...)` directly with
 *     synthetic payloads — that's the contract the boundary enforces.
 *   - Cover each variant's happy path + a representative fuzz of malformed
 *     shapes (missing required field, wrong type, oversized payload,
 *     unknown discriminator value, extra unknown key under `.strict()`).
 *   - End-to-end "malformed message dropped at the dispatch boundary"
 *     coverage already lives in the e2e suite (any test that sends an
 *     unparseable message would surface there); this file's scope is the
 *     schema correctness.
 *
 * Drift between the TypeScript types in `script-runner-ipc.ts` and the
 * schemas in `script-runner-ipc-schemas.ts` is a v1.x maintenance risk;
 * the happy-path cases below double as smoke-tests that catch obvious
 * field-name / -type drift.
 */

import { describe, test, expect } from 'bun:test';
import { ChildToParentMessageSchema, findMostSpecificIpcIssue } from '../../src/types/script-runner-ipc-schemas.js';
import { getEngineTelemetry } from '../../src/script-runner/qjs-engine.js';

// ─── Happy paths — every ChildToParentMessage variant accepted ──────────────

describe('ChildToParentMessageSchema — happy paths (every variant)', () => {
  test('accepts ScriptRunningNotice', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'script-running',
      runId:      'r-1',
      scriptId:   's-1',
      scriptName: 'Test',
      startedAt:  Date.now(),
    }).success).toBe(true);
  });

  test('accepts RunScriptResult (ok branch)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'run-result',
      runId:      'r-1',
      scriptId:   's-1',
      ok:         true,
      value:      { foo: 'bar' },
      durationMs: 42,
    }).success).toBe(true);
  });

  test('accepts RunScriptResult (error branch)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'run-result',
      runId:      'r-1',
      scriptId:   's-1',
      ok:         false,
      error:      { name: 'Error', message: 'boom' },
      durationMs: 8,
    }).success).toBe(true);
  });

  test('accepts RunScriptResult with optional error stack', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'run-result',
      runId:      'r-1',
      scriptId:   's-1',
      ok:         false,
      error:      { name: 'Error', message: 'boom', stack: 'at line 1\nat line 2' },
      durationMs: 8,
    }).success).toBe(true);
  });

  test('accepts ApiProxyRequest with HandleRef targetHandle', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [{ x: 1 }],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'Collection' },
      hasSignal:    true,
      _runIdSource: 'context',
    }).success).toBe(true);
  });

  test('accepts AbortRequest', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'abort-request',
      requestId: 'req-1',
    }).success).toBe(true);
  });

  test('accepts StreamRequest (minimal — no optional fields)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'stream-request',
      requestId: 'req-1',
      runId:     'r-1',
      scriptId:  's-1',
      method:    'llm.generateStream',
      args:      [[{ role: 'user', content: 'hi' }]],
    }).success).toBe(true);
  });

  test('accepts StreamRequest (with hasSignal + _runIdSource)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'stream-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'llm.generateStream',
      args:         [[{ role: 'user', content: 'hi' }], { maxTokens: 100 }],
      hasSignal:    true,
      _runIdSource: 'context',
    }).success).toBe(true);
  });

  test('accepts StreamCancelRequest', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'stream-cancel',
      requestId: 'req-1',
    }).success).toBe(true);
  });

  test('accepts BroadcastSubscribeMessage', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'broadcast-subscribe',
      scriptId: 's-1',
      subId:    'sub-1',
      event:    'tracker:state-changed',
    }).success).toBe(true);
  });

  test('accepts BroadcastUnsubscribeMessage', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'broadcast-unsubscribe',
      scriptId: 's-1',
      subId:    'sub-1',
    }).success).toBe(true);
  });

  test('accepts broadcast-handler-started lifecycle notice', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'broadcast-handler-started',
      scriptId: 's-1',
      subId:    'sub-1',
      event:    'tracker:state-changed',
    }).success).toBe(true);
  });

  test('accepts broadcast-handler-finished ok=true', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'broadcast-handler-finished',
      scriptId:   's-1',
      subId:      'sub-1',
      event:      'tracker:state-changed',
      durationMs: 12,
      ok:         true,
    }).success).toBe(true);
  });

  test('accepts broadcast-handler-finished ok=false (with error string)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'broadcast-handler-finished',
      scriptId:   's-1',
      subId:      'sub-1',
      event:      'tracker:state-changed',
      durationMs: 12,
      ok:         false,
      error:      'handler threw: TypeError: x is undefined',
    }).success).toBe(true);
  });

  test('accepts ConsoleEntryNotice with each ConsoleEntryType', () => {
    for (const type of ['log','warn','error','info','success','separator','security'] as const) {
      expect(ChildToParentMessageSchema.safeParse({
        type:     'console-entry',
        runId:    'r-1',
        scriptId: 's-1',
        entry:    { timestamp: '12:34:56', type, message: 'hello' },
      }).success).toBe(true);
    }
  });

  test('accepts each RegisterHandler kind', () => {
    const variants = [
      { kind: 'macro',                runId: 'r', scriptId: 's', handlerId: 'h', name: 'm', def: {} },
      { kind: 'tool',                 runId: 'r', scriptId: 's', handlerId: 'h', name: 't', def: {} },
      { kind: 'commandsOnInvoked',    runId: 'r', scriptId: 's', handlerId: 'h' },
      { kind: 'macroInterceptor',     runId: 'r', scriptId: 's', handlerId: 'h' },
      { kind: 'contentProcessor',     runId: 'r', scriptId: 's', handlerId: 'h' },
      { kind: 'worldInfoInterceptor', runId: 'r', scriptId: 's', handlerId: 'h' },
      { kind: 'domEventListener',     runId: 'r', scriptId: 's', handlerId: 'h', elementId: 'e', event: 'click' },
      { kind: 'domDelegate',          runId: 'r', scriptId: 's', handlerId: 'h', selector: '.x', event: 'click' },
      { kind: 'inputBarActionClick',  runId: 'r', scriptId: 's', handlerId: 'h', actionId: 'a' },
      { kind: 'floatWidgetDragEnd',   runId: 'r', scriptId: 's', handlerId: 'h', widgetId: 'w' },
      { kind: 'drawerTabActivate',    runId: 'r', scriptId: 's', handlerId: 'h', tabId: 't' },
      { kind: 'oauthCallback',        runId: 'r', scriptId: 's', handlerId: 'h' },
    ];
    for (const variant of variants) {
      const msg = { type: 'register-handler', hasHandler: true, ...variant };
      const result = ChildToParentMessageSchema.safeParse(msg);
      expect(result.success).toBe(true);
    }
  });

  test('accepts UnregisterHandler by handlerId', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'unregister-handler',
      kind:      'macro',
      scriptId:  's-1',
      handlerId: 'h-1',
    }).success).toBe(true);
  });

  test('accepts UnregisterHandler by name', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'unregister-handler',
      kind:     'macro',
      scriptId: 's-1',
      name:     'my-macro',
    }).success).toBe(true);
  });

  test('accepts DiagnosticStatsResponse', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:        'diagnostic-stats-response',
      requestId:   'req-1',
      rss:         50_000_000,
      heapTotal:   30_000_000,
      heapUsed:    20_000_000,
      external:    1_000_000,
      cpuUserUs:   100_000,
      cpuSystemUs: 30_000,
      uptimeSec:   12.34,
    }).success).toBe(true);
  });

  // #11 observability — the engine telemetry rides the SAME message under a `.strict()` union. A REAL
  // getEngineTelemetry() snapshot must validate (guards against schema↔runtime drift — the exact class
  // of bug where a strict-schema miss silently drops the whole stats response, memory/CPU included).
  test('accepts DiagnosticStatsResponse with the engine telemetry snapshot', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:        'diagnostic-stats-response',
      requestId:   'req-1',
      rss:         50_000_000, heapTotal: 30_000_000, heapUsed: 20_000_000, external: 1_000_000,
      cpuUserUs:   100_000, cpuSystemUs: 30_000, uptimeSec: 12.34,
      engine:      getEngineTelemetry(), // real runtime shape
    }).success).toBe(true);
  });

  test('rejects a DiagnosticStatsResponse whose engine object carries an unknown key (strict)', () => {
    const res = ChildToParentMessageSchema.safeParse({
      type:        'diagnostic-stats-response',
      requestId:   'req-1',
      rss:         50_000_000, heapTotal: 30_000_000, heapUsed: 20_000_000, external: 1_000_000,
      cpuUserUs:   100_000, cpuSystemUs: 30_000, uptimeSec: 12.34,
      engine:      { ...getEngineTelemetry(), bogusField: 1 },
    });
    expect(res.success).toBe(false);
  });

  test('accepts HandlerResult (ok branch)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'handler-result',
      runId:      'hr-1',
      ok:         true,
      value:      'computed',
      durationMs: 3,
    }).success).toBe(true);
  });
});

// ─── Fuzz / reject paths ────────────────────────────────────────────────────

describe('ChildToParentMessageSchema — rejects malformed inputs', () => {
  test('rejects null', () => {
    expect(ChildToParentMessageSchema.safeParse(null).success).toBe(false);
  });

  test('rejects primitive scalar', () => {
    expect(ChildToParentMessageSchema.safeParse('hello').success).toBe(false);
    expect(ChildToParentMessageSchema.safeParse(42).success).toBe(false);
  });

  test('rejects object missing `type`', () => {
    expect(ChildToParentMessageSchema.safeParse({
      runId: 'r-1', scriptId: 's-1',
    }).success).toBe(false);
  });

  test('rejects unknown `type` discriminator', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'totally-fake-type',
      scriptId: 's-1',
    }).success).toBe(false);
  });

  test('rejects ScriptRunningNotice missing scriptName', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'script-running',
      runId:     'r-1',
      scriptId:  's-1',
      startedAt: Date.now(),
    }).success).toBe(false);
  });

  test('rejects RunScriptResult with wrong-typed durationMs', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'run-result',
      runId:      'r-1',
      scriptId:   's-1',
      ok:         true,
      durationMs: 'not-a-number',
    }).success).toBe(false);
  });

  test('rejects ApiProxyRequest with non-array args', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'api-request',
      requestId: 'req-1',
      runId:     'r-1',
      scriptId:  's-1',
      method:    'find',
      args:      'not-an-array',
    }).success).toBe(false);
  });

  test('rejects StreamRequest missing required runId', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:      'stream-request',
      requestId: 'req-1',
      scriptId:  's-1',
      method:    'llm.generateStream',
      args:      [],
      // runId missing
    }).success).toBe(false);
  });

  test('rejects StreamRequest with unknown top-level key (strict)', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:        'stream-request',
      requestId:   'req-1',
      runId:       'r-1',
      scriptId:    's-1',
      method:      'llm.generateStream',
      args:        [],
      targetHandle: { __handleRef: true, id: 'h', kind: 'Collection' }, // streams have no handle form
    }).success).toBe(false);
  });

  test('rejects HandleRef with malformed __handleRef marker', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [],
      targetHandle: { __handleRef: false, id: 'h-1', kind: 'Collection' },
    }).success).toBe(false);
  });

  test('rejects HandleRef with unknown kind', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'NotARealKind' },
    }).success).toBe(false);
  });

  test('rejects ApiProxyRequest with unknown _runIdSource value', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [],
      _runIdSource: 'invalid-source',
    }).success).toBe(false);
  });

  test('rejects RegisterHandler with unknown kind', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'register-handler',
      kind:       'not-a-real-kind',
      runId:      'r-1',
      scriptId:   's-1',
      handlerId:  'h-1',
      hasHandler: true,
    }).success).toBe(false);
  });

  test('rejects RegisterHandler macro variant missing `def`', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'register-handler',
      kind:       'macro',
      runId:      'r-1',
      scriptId:   's-1',
      handlerId:  'h-1',
      name:       'm-1',
      hasHandler: true,
      // def: missing
    }).success).toBe(false);
  });

  test('rejects RegisterHandler with hasHandler !== true', () => {
    // Per the IPC contract, hasHandler is always literal `true` in the
    // current variants — distinct from the absence of a handler entirely.
    expect(ChildToParentMessageSchema.safeParse({
      type:       'register-handler',
      kind:       'commandsOnInvoked',
      runId:      'r-1',
      scriptId:   's-1',
      handlerId:  'h-1',
      hasHandler: false,
    }).success).toBe(false);
  });

  test('rejects ConsoleEntryNotice with non-allowed entry type', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:     'console-entry',
      runId:    'r-1',
      scriptId: 's-1',
      entry:    { timestamp: '12:34:56', type: 'debug', message: 'hi' },
    }).success).toBe(false);
  });

  test('rejects under strict — unknown top-level key in ScriptRunningNotice', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:                 'script-running',
      runId:                'r-1',
      scriptId:             's-1',
      scriptName:           'Test',
      startedAt:            Date.now(),
      mysteryFutureField:   'extra',
    }).success).toBe(false);
  });

  test('rejects under strict — unknown nested key in HandleRef', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'Collection', extra: 'nope' },
    }).success).toBe(false);
  });

  test('rejects BroadcastHandlerFinished ok=false missing error field', () => {
    expect(ChildToParentMessageSchema.safeParse({
      type:       'broadcast-handler-finished',
      scriptId:   's-1',
      subId:      'sub-1',
      event:      'x',
      durationMs: 5,
      ok:         false,
      // error: missing — the err-variant requires it
    }).success).toBe(false);
  });
});

// ─── Issue-path reporting ───────────────────────────────────────────────────
// `handleChildMessage` formats the first issue's path + message into its
// drop-warn log. These tests assert the path information is preserved
// through Zod so the post-mortem log reads meaningfully.

describe('ChildToParentMessageSchema — validation issue paths are useful', () => {
  test('findMostSpecificIpcIssue surfaces the offending field for a missing required field', () => {
    const result = ChildToParentMessageSchema.safeParse({
      type:     'script-running',
      runId:    'r-1',
      scriptId: 's-1',
      // scriptName missing
      startedAt: Date.now(),
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = findMostSpecificIpcIssue(result.error.issues);
      expect(issue.path).toContain('scriptName');
    }
  });

  test('findMostSpecificIpcIssue digs into nested HandleRef for a malformed marker', () => {
    const result = ChildToParentMessageSchema.safeParse({
      type:         'api-request',
      requestId:    'req-1',
      runId:        'r-1',
      scriptId:     's-1',
      method:       'find',
      args:         [],
      targetHandle: { __handleRef: 'not-true', id: 'h-1', kind: 'Collection' },
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = findMostSpecificIpcIssue(result.error.issues);
      expect(issue.path).toContain('targetHandle');
    }
  });

  test('findMostSpecificIpcIssue falls back to (root) when no nested path is available', () => {
    // A non-object payload fails at the union root; no nested object-field
    // path is meaningful. The helper falls back to "(root)".
    const result = ChildToParentMessageSchema.safeParse(null);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = findMostSpecificIpcIssue(result.error.issues);
      expect(issue.path).toBe('(root)');
      expect(issue.message).toBeTruthy();
    }
  });
});
