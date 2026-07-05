/**
 * Unit tests for the message-tag-handler registry (the backend routing + ownership
 * + replay state behind `api.chat.onMessageTag`). The full multi-process flow
 * (proxy → IPC → host-dispatcher → FE → fire → child) is exercised by the
 * adversarial pass + manual field test; these pin the registry contract.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import {
  registerTagHandler, removeTagHandler, dispatchTagEvent,
  countByScriptId, listByScript, clearByScriptId, listReplayMessages, __reset,
} from '../../src/engine/message-tag-handler-registry.js';
import type { MessageTagEvent } from '../../src/types/script.js';

const ev = (over: Partial<MessageTagEvent> = {}): MessageTagEvent => ({
  tagName: 'dice', attrs: {}, content: '20', fullMatch: '<dice>20</dice>', ...over,
});

beforeEach(() => __reset());

describe('message-tag-handler-registry', () => {
  test('register + dispatch routes the event to the handler', () => {
    const seen: MessageTagEvent[] = [];
    registerTagHandler('s1', 'S1', 'h1', 'dice', (e) => { seen.push(e); });
    dispatchTagEvent('s1', 'h1', ev({ content: '7' }));
    expect(seen).toHaveLength(1);
    expect(seen[0]!.content).toBe('7');
  });

  test('dispatch to an unknown id is a no-op', () => {
    expect(() => dispatchTagEvent('s1', 'nope', ev())).not.toThrow();
  });

  test('dispatch is ownership-scoped — a mismatched scriptId does not fire', () => {
    const seen: string[] = [];
    registerTagHandler('s1', 'S1', 'h1', 'dice', () => { seen.push('fired'); });
    dispatchTagEvent('s2', 'h1', ev()); // wrong owner — no fire
    expect(seen).toHaveLength(0);
    dispatchTagEvent('s1', 'h1', ev()); // correct owner
    expect(seen).toHaveLength(1);
  });

  test('a throwing handler is swallowed — one bad handler cannot crash dispatch', () => {
    registerTagHandler('s1', 'S1', 'h1', 'dice', () => { throw new Error('boom'); });
    expect(() => dispatchTagEvent('s1', 'h1', ev())).not.toThrow();
  });

  test('a rejecting async handler does not surface an unhandled rejection', async () => {
    registerTagHandler('s1', 'S1', 'h1', 'dice', async () => { throw new Error('async boom'); });
    dispatchTagEvent('s1', 'h1', ev());
    await Promise.resolve(); // let the rejected promise settle (caught internally)
    expect(true).toBe(true);
  });

  test('removeTagHandler is ownership-scoped + idempotent', () => {
    registerTagHandler('s1', 'S1', 'h1', 'dice', () => {});
    expect(removeTagHandler('s2', 'h1')).toBe(false); // not the owner
    expect(removeTagHandler('s1', 'h1')).toBe(true);
    expect(removeTagHandler('s1', 'h1')).toBe(false); // already gone
  });

  test('countByScriptId + clearByScriptId are per-script', () => {
    registerTagHandler('s1', 'S1', 'h1', 'a', () => {});
    registerTagHandler('s1', 'S1', 'h2', 'b', () => {});
    registerTagHandler('s2', 'S2', 'h3', 'c', () => {});
    expect(countByScriptId('s1')).toBe(2);
    expect(countByScriptId('s2')).toBe(1);
    clearByScriptId('s1');
    expect(countByScriptId('s1')).toBe(0);
    expect(countByScriptId('s2')).toBe(1);
  });

  test('listByScript returns entries for the teardown sweep', () => {
    registerTagHandler('s1', 'S1', 'h1', 'a', () => {}, { removeFromMessage: false });
    const list = listByScript('s1');
    expect(list).toHaveLength(1);
    expect(list[0]!.id).toBe('h1');
    expect(list[0]!.tagName).toBe('a');
  });

  test('listReplayMessages rebuilds the FE register messages (with options)', () => {
    registerTagHandler('s1', 'S1', 'h1', 'dice', () => {}, { attrs: { type: 'd20' } });
    expect(listReplayMessages()).toEqual([
      {
        type: 'ls_tag_interceptor_register',
        scriptId: 's1', handlerId: 'h1', tagName: 'dice', options: { attrs: { type: 'd20' } },
      },
    ]);
  });

  test('two scripts on the same tag each route independently in the backend registry', () => {
    // Backend routing is keyed by unique handlerId, so a per-handler fired event
    // reaches the right script. (The host dedupes delivery by the shared
    // extensionId, so the FE bridge does the multiplexing — one host interceptor
    // per tag, fanned to N handlerIds — which is what makes BOTH actually fire.)
    const a: string[] = []; const b: string[] = [];
    registerTagHandler('s1', 'S1', 'h1', 'dice', () => { a.push('a'); });
    registerTagHandler('s2', 'S2', 'h2', 'dice', () => { b.push('b'); });
    dispatchTagEvent('s1', 'h1', ev());
    dispatchTagEvent('s2', 'h2', ev());
    expect(a).toHaveLength(1);
    expect(b).toHaveLength(1);
  });
});
