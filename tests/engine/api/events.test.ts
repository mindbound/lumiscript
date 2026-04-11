import { describe, test, expect, beforeEach } from 'bun:test';
import { buildEventsAPI } from '../../../src/engine/api/events.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let deps: ReturnType<typeof createTestDeps>;
let mockSpindle: any;

beforeEach(() => {
  deps = createTestDeps();
  mockSpindle = (globalThis as any).spindle;
});

// ─── Permission gate ────────────────────────────────────────────────────────

describe('permission gate', () => {
  test('track throws without event_tracking permission', async () => {
    deps.hasPerm = () => false;
    const events = buildEventsAPI(deps);
    expect(events.track('test')).rejects.toThrow('event_tracking');
  });

  test('query throws without event_tracking permission', async () => {
    deps.hasPerm = () => false;
    const events = buildEventsAPI(deps);
    expect(events.query()).rejects.toThrow('event_tracking');
  });

  test('replay throws without event_tracking permission', async () => {
    deps.hasPerm = () => false;
    const events = buildEventsAPI(deps);
    expect(events.replay()).rejects.toThrow('event_tracking');
  });

  test('getLatestState throws without event_tracking permission', async () => {
    deps.hasPerm = () => false;
    const events = buildEventsAPI(deps);
    expect(events.getLatestState(['key'])).rejects.toThrow('event_tracking');
  });
});

// ─── track ──────────────────────────────────────────────────────────────────

describe('track', () => {
  test('delegates to spindle.events.track with eventName and payload', async () => {
    const events = buildEventsAPI(deps);
    await events.track('user_action', { button: 'save' });

    expect(mockSpindle.events.track).toHaveBeenCalledTimes(1);
    const [name, payload] = mockSpindle.events.track.mock.calls[0]!;
    expect(name).toBe('user_action');
    expect(payload).toEqual({ button: 'save' });
  });

  test('passes options through (level, chatId, retentionDays)', async () => {
    const events = buildEventsAPI(deps);
    await events.track('error', { msg: 'fail' }, {
      level: 'error',
      chatId: 'custom-chat',
      retentionDays: 30,
    });

    const [, , opts] = mockSpindle.events.track.mock.calls[0]!;
    expect(opts.level).toBe('error');
    expect(opts.chatId).toBe('custom-chat');
    expect(opts.retentionDays).toBe(30);
  });

  test('defaults chatId to active context chatId', async () => {
    deps.activeContext.chatId = 'active-chat-id';
    const events = buildEventsAPI(deps);
    await events.track('test');

    const [, , opts] = mockSpindle.events.track.mock.calls[0]!;
    expect(opts.chatId).toBe('active-chat-id');
  });

  test('explicit chatId overrides active context', async () => {
    deps.activeContext.chatId = 'active-chat-id';
    const events = buildEventsAPI(deps);
    await events.track('test', undefined, { chatId: 'override-chat' });

    const [, , opts] = mockSpindle.events.track.mock.calls[0]!;
    expect(opts.chatId).toBe('override-chat');
  });

  test('chatId is undefined when no active context and no explicit chat', async () => {
    deps.activeContext.chatId = null;
    const events = buildEventsAPI(deps);
    await events.track('test');

    const [, , opts] = mockSpindle.events.track.mock.calls[0]!;
    expect(opts.chatId).toBeUndefined();
  });
});

// ─── query ──────────────────────────────────────────────────────────────────

describe('query', () => {
  test('delegates to spindle.events.query with filter', async () => {
    const mockResults = [
      { id: '1', ts: '2026-04-11T00:00:00Z', eventName: 'test', level: 'info' },
    ];
    mockSpindle.events.query.mockReturnValueOnce(Promise.resolve(mockResults));

    const events = buildEventsAPI(deps);
    const results = await events.query({ eventName: 'test', limit: 5 });

    expect(mockSpindle.events.query).toHaveBeenCalledWith({ eventName: 'test', limit: 5 });
    expect(results).toEqual(mockResults);
  });

  test('works with no filter', async () => {
    mockSpindle.events.query.mockReturnValueOnce(Promise.resolve([]));
    const events = buildEventsAPI(deps);
    const results = await events.query();

    expect(mockSpindle.events.query).toHaveBeenCalledWith(undefined);
    expect(results).toEqual([]);
  });
});

// ─── replay ─────────────────────────────────────────────────────────────────

describe('replay', () => {
  test('delegates to spindle.events.replay with filter', async () => {
    const mockResults = [
      { id: '1', ts: '2026-04-10T00:00:00Z', eventName: 'init', level: 'debug' },
      { id: '2', ts: '2026-04-11T00:00:00Z', eventName: 'init', level: 'debug' },
    ];
    mockSpindle.events.replay.mockReturnValueOnce(Promise.resolve(mockResults));

    const events = buildEventsAPI(deps);
    const results = await events.replay({ since: '2026-04-10' });

    expect(mockSpindle.events.replay).toHaveBeenCalledWith({ since: '2026-04-10' });
    expect(results).toHaveLength(2);
  });
});

// ─── getLatestState ─────────────────────────────────────────────────────────

describe('getLatestState', () => {
  test('delegates to spindle.events.getLatestState', async () => {
    const mockState = { counter: 42, lastSeen: '2026-04-11' };
    mockSpindle.events.getLatestState.mockReturnValueOnce(Promise.resolve(mockState));

    const events = buildEventsAPI(deps);
    const state = await events.getLatestState(['counter', 'lastSeen']);

    expect(mockSpindle.events.getLatestState).toHaveBeenCalledWith(['counter', 'lastSeen']);
    expect(state).toEqual(mockState);
  });
});
