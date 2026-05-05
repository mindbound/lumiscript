/**
 * Child-side proxy dispatch tests for api.db.* — focused on the Zod-schema
 * IPC trap.
 *
 * Background: a Zod schema is a class instance with method properties
 * (.parse, .safeParse, etc.). Bun's structured-clone serialiser drops
 * methods at the IPC boundary, so passing `{ schema }` to api.db.collection
 * caused a `DataCloneError: The object can not be cloned.` parent-side,
 * which surfaced through the user's `try/catch` as the warning
 * `roll_dice: failed to append to api.db dice-rolls history: The object
 * can not be cloned` during the v0.26.0 RPC smoke test of the Roll Dice
 * tool. (See api-proxy.ts:buildCollectionProxy JSDoc for the design.)
 *
 * The proxy now strips `opts.schema` before dispatch and validates
 * child-side at the insert / insertMany / update boundaries. These tests
 * confirm:
 *   - Zod schemas don't reach the IPC envelope
 *   - Validation fires on insert before dispatch
 *   - Validation throws with a wrapped, contextual error message
 *   - Update validation runs against `schema.partial()` for ZodObject
 */

import { describe, test, expect } from 'bun:test';
import * as z from 'zod';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  ApiProxyRequest,
  ApiProxyResponse,
  HandleRef,
} from '../../src/types/script-runner-ipc.js';

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  apiRequests(method?: string): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'script-fixture',
    scriptName:         'Fixture Script',
    scriptType:         'trigger',
    chatIdAtStart:      null,
    characterIdAtStart: null,
    send:               (msg) => { sent.push(msg); },
    registerBroadcastHandler:   () => {},
    unregisterBroadcastHandler: () => {},
    registerHandlerClosure:     () => {},
    unregisterHandlerClosure:   () => {},
    toolsSnapshot:                 [],
    macrosSnapshot:                [],
    macroInterceptorsSnapshot:     [],
    chatInjectionsSnapshot:        [],
    chatContentProcessorsSnapshot: [],
    worldInfoInterceptorsSnapshot: [],
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    apiRequests: (method) =>
      sent.filter((m): m is ApiProxyRequest => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'api-request') return false;
        return method === undefined ? true : (m as ApiProxyRequest).method === method;
      }),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
  };
}

/** Stand-in HandleRef for a Collection — the parent's handle table fixture. */
function fakeCollectionRef(): HandleRef {
  return { __handleRef: true, id: 'col-fixture-1', kind: 'Collection' };
}

// The actual user-supplied schema in roll-dice.js validates ONLY the user-
// authored fields; id / createdAt / updatedAt are LumiScript-managed and
// injected AFTER validation parent-side. ZodLike<DbRecord> at the type
// level requires id/createdAt/updatedAt on `parse()`'s return. We cast
// in the test to model the real-world JS-script usage (where TS doesn't
// enforce the constraint) — the proxy doesn't care either way at runtime.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DiceRollSchema: any = z.object({
  notation:   z.string(),
  total:      z.number(),
  outcome:    z.enum(['success', 'failure']).nullable(),
  difficulty: z.number().int().nullable(),
});

// ─── opts.schema strip ──────────────────────────────────────────────────────

describe('api.db.collection: Zod schema is stripped from IPC opts', () => {
  test('schema is removed from the dispatched args (would otherwise fail structured-clone)', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('dice-rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    const req = h.apiRequests('db.collection')[0]!;
    h.respond(req.requestId, fakeCollectionRef());
    await collectionPromise;

    const opts = req.args[1] as Record<string, unknown>;
    expect(opts).toBeDefined();
    expect(opts.scope).toBe('character');
    expect(opts.schema).toBeUndefined();
  });

  test('non-schema opts keys are preserved verbatim', async () => {
    const h = makeHarness();

    const promise = h.proxy.api.db.collection('rolls', {
      scope:  'chat',
      schema: DiceRollSchema,
    });
    const req = h.apiRequests('db.collection')[0]!;
    h.respond(req.requestId, fakeCollectionRef());
    await promise;

    const opts = req.args[1] as Record<string, unknown>;
    expect(opts.scope).toBe('chat');
    expect(opts.schema).toBeUndefined();
  });

  test('opts without a Zod schema pass through unchanged (plain JSON Schema, etc.)', async () => {
    const h = makeHarness();
    const plainOpts = { scope: 'chat' as const };

    const promise = h.proxy.api.db.collection('rolls', plainOpts);
    const req = h.apiRequests('db.collection')[0]!;
    h.respond(req.requestId, fakeCollectionRef());
    await promise;

    expect(req.args[1]).toBe(plainOpts);  // identity-preserved when no Zod found
  });
});

// ─── insert validation ──────────────────────────────────────────────────────

describe('api.db.collection: insert validates child-side', () => {
  test('valid record passes validation and dispatches insert', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    const insertPromise = collection.insert({
      notation:   '1d20+3',
      total:      18,
      outcome:    'success',
      difficulty: 15,
    });

    const insertReq = h.apiRequests('insert')[0]!;
    expect(insertReq).toBeDefined();
    h.respond(insertReq.requestId, { id: 'r1', notation: '1d20+3', total: 18, outcome: 'success', difficulty: 15 });
    await insertPromise;
  });

  test('invalid record (wrong type) throws BEFORE dispatch reaches the parent', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    expect(() => collection.insert({
      notation:   '1d20+3',
      total:      'eighteen' as unknown as number,  // schema requires number
      outcome:    null,
      difficulty: null,
    })).toThrow('schema validation failed on insert');

    expect(h.apiRequests('insert').length).toBe(0);
  });

  test('insertMany validates each record with its index in the error message', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    expect(() => collection.insertMany([
      { notation: '1d20',   total: 10, outcome: 'failure', difficulty: 15 },
      { notation: '1d20+5', total: 'oops' as unknown as number, outcome: 'success', difficulty: 12 },
    ])).toThrow('schema validation failed on insertMany[1]');

    expect(h.apiRequests('insertMany').length).toBe(0);
  });
});

// ─── update validation ──────────────────────────────────────────────────────

describe('api.db.collection: update validates patch via schema.partial()', () => {
  test('valid partial patch passes and dispatches', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    const updatePromise = collection.update({ id: 'r1' }, { total: 22 });
    const updateReq = h.apiRequests('update')[0]!;
    expect(updateReq).toBeDefined();
    h.respond(updateReq.requestId, 1);
    await updatePromise;
  });

  test('invalid patch field throws BEFORE dispatch', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('rolls', {
      scope:  'character',
      schema: DiceRollSchema,
    });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    expect(() => collection.update({ id: 'r1' }, {
      total: 'not-a-number' as unknown as number,
    })).toThrow('schema validation failed on update (patch)');

    expect(h.apiRequests('update').length).toBe(0);
  });
});

// ─── no-schema collection ───────────────────────────────────────────────────

describe('api.db.collection: schemaless collection (no validation)', () => {
  test('insert dispatches without validation when no schema was supplied', async () => {
    const h = makeHarness();

    const collectionPromise = h.proxy.api.db.collection('logs', { scope: 'chat' });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;

    const insertPromise = collection.insert({ anything: 'goes' });
    const insertReq = h.apiRequests('insert')[0]!;
    expect(insertReq).toBeDefined();
    h.respond(insertReq.requestId, { id: 'l1', anything: 'goes' });
    await insertPromise;
  });
});

// ─── function-predicate guard ───────────────────────────────────────────────
//
// Same architectural class as the Zod-schema strip: function references can't
// cross the script-runner subprocess IPC boundary (structured-clone rejects
// them). We could let the cryptic "DataCloneError: The object can not be
// cloned" surface — but that's the kind of error that takes a full debug
// session through the IPC stack to diagnose. Instead, the proxy detects
// function filters at call time and throws a clear, actionable error
// pointing at the alternative API surfaces. These tests pin that behaviour.

describe('api.db.collection: function-predicate guard', () => {
  async function makeCollection() {
    const h = makeHarness();
    const collectionPromise = h.proxy.api.db.collection('items', { scope: 'chat' });
    h.respond(h.apiRequests('db.collection')[0]!.requestId, fakeCollectionRef());
    const collection = await collectionPromise;
    return { h, collection };
  }

  test('delete rejects function predicate with actionable message', async () => {
    const { h, collection } = await makeCollection();
    expect(() => collection.delete(() => true)).toThrow('api.db.delete: function predicates can\'t cross');
    expect(() => collection.delete(() => true)).toThrow('clear()');
    expect(h.apiRequests('delete').length).toBe(0);
  });

  test('update rejects function predicate with actionable message', async () => {
    const { h, collection } = await makeCollection();
    expect(() => collection.update(() => true, { x: 1 })).toThrow('api.db.update: function predicates can\'t cross');
    expect(h.apiRequests('update').length).toBe(0);
  });

  test('find rejects function predicate with actionable message', async () => {
    const { h, collection } = await makeCollection();
    expect(() => collection.find((r) => Boolean(r))).toThrow('api.db.find: function predicates can\'t cross');
    expect(() => collection.find((r) => Boolean(r))).toThrow('apply your predicate locally');
    expect(h.apiRequests('find').length).toBe(0);
  });

  test('findOne rejects function predicate with actionable message', async () => {
    const { h, collection } = await makeCollection();
    expect(() => collection.findOne((r) => Boolean(r))).toThrow('api.db.findOne: function predicates can\'t cross');
    expect(h.apiRequests('findOne').length).toBe(0);
  });

  test('count rejects function predicate with actionable message', async () => {
    const { h, collection } = await makeCollection();
    expect(() => collection.count(() => true)).toThrow('api.db.count: function predicates can\'t cross');
    expect(h.apiRequests('count').length).toBe(0);
  });

  test('clear() — the recommended replacement — dispatches normally', async () => {
    const { h, collection } = await makeCollection();
    void collection.clear();
    expect(h.apiRequests('clear').length).toBe(1);
  });

  test('object filter dispatches normally', async () => {
    const { h, collection } = await makeCollection();
    void collection.delete({ deleted: true });
    expect(h.apiRequests('delete').length).toBe(1);
    const req = h.apiRequests('delete')[0]!;
    expect((req.args as unknown[])[0]).toEqual({ deleted: true });
  });

  test('undefined filter (find/count) dispatches normally', async () => {
    const { h, collection } = await makeCollection();
    void collection.find();
    void collection.count();
    expect(h.apiRequests('find').length).toBe(1);
    expect(h.apiRequests('count').length).toBe(1);
  });
});
