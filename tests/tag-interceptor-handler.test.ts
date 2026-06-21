/**
 * Tests for the FE message-tag interceptor bridge (the MULTIPLEX + filter + dedup
 * the adversarial pass flagged). The host dedupes delivery by the shared
 * extensionId, so the bridge MUST register one host interceptor per tag and fan
 * out locally — otherwise two scripts on the same tag collide and only one fires.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import { installTagInterceptorHandler, __resetForTests } from '../src/tag-interceptor-handler.js';
import type { BackendToFrontend, FrontendToBackend } from '../src/types/messages.js';

interface HostRec { tagName: string; removeFromMessage?: boolean; handler: (p: any) => void; alive: boolean }

function harness() {
  const hostInterceptors: HostRec[] = [];
  const ctx: any = {
    messages: {
      registerTagInterceptor(opts: any, handler: (p: any) => void) {
        const rec: HostRec = { tagName: opts.tagName, removeFromMessage: opts.removeFromMessage, handler, alive: true };
        hostInterceptors.push(rec);
        return () => { rec.alive = false; };
      },
    },
  };
  let backendHandler: ((msg: unknown) => void) | undefined;
  const onBackendMessage = (h: (msg: unknown) => void) => { backendHandler = h; return () => { backendHandler = undefined; }; };
  const sent: FrontendToBackend[] = [];
  const cleanup = installTagInterceptorHandler(ctx, onBackendMessage, (m) => { sent.push(m); });

  const register = (scriptId: string, handlerId: string, tagName: string, options?: any) =>
    backendHandler!({ type: 'ls_tag_interceptor_register', scriptId, handlerId, tagName, options } as BackendToFrontend);
  const unregister = (scriptId: string, handlerId: string) =>
    backendHandler!({ type: 'ls_tag_interceptor_unregister', scriptId, handlerId } as BackendToFrontend);
  const fire = (tagName: string, payload: Record<string, unknown>) => {
    for (const hi of hostInterceptors) {
      if (hi.tagName === tagName && hi.alive) {
        hi.handler({ tagName, attrs: {}, content: '', fullMatch: `<${tagName}/>`, isStreaming: false, ...payload });
      }
    }
  };
  const firedIds = () => (sent.filter((m) => m.type === 'ls_tag_interceptor_fired') as any[]).map((m) => m.handlerId);
  const aliveFor = (tagName: string) => hostInterceptors.filter((h) => h.tagName === tagName && h.alive);
  return { register, unregister, fire, firedIds, aliveFor, hostInterceptors, cleanup };
}

beforeEach(() => __resetForTests());

describe('tag-interceptor FE bridge — multiplex', () => {
  test('two scripts on the same tag share ONE host interceptor and BOTH fire (the multiplex fix)', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice');
    h.register('s2', 'h2', 'dice');
    expect(h.aliveFor('dice')).toHaveLength(1); // ONE host interceptor, not two
    h.fire('dice', { fullMatch: '<dice>20</dice>', messageId: 'm1' });
    expect(h.firedIds().sort()).toEqual(['h1', 'h2']); // both delivered
  });

  test('streaming fires are dropped — only completion (!isStreaming) delivers', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice');
    h.fire('dice', { messageId: 'm1', fullMatch: '<dice>1</dice>', isStreaming: true });
    expect(h.firedIds()).toHaveLength(0);
    h.fire('dice', { messageId: 'm1', fullMatch: '<dice>1</dice>', isStreaming: false });
    expect(h.firedIds()).toEqual(['h1']);
  });

  test('a completed message re-firing on remount delivers once (persistent dedup)', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice');
    const p = { messageId: 'm1', fullMatch: '<dice>20</dice>' };
    h.fire('dice', p);
    h.fire('dice', p); // remount re-fire — deduped
    expect(h.firedIds()).toHaveLength(1);
  });

  test('an edit (changed fullMatch) re-fires', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice');
    h.fire('dice', { messageId: 'm1', fullMatch: '<dice>20</dice>' });
    h.fire('dice', { messageId: 'm1', fullMatch: '<dice>15</dice>' }); // edited content
    expect(h.firedIds()).toHaveLength(2);
  });

  test('per-handler attrs filter — a non-matching tag does not deliver', () => {
    const h = harness();
    h.register('s1', 'h1', 'roll', { attrs: { type: 'd20' } });
    h.fire('roll', { fullMatch: '<roll type="d6">1</roll>', attrs: { type: 'd6' }, messageId: 'm1' });
    expect(h.firedIds()).toHaveLength(0); // d6 doesn't match the d20 handler
    h.fire('roll', { fullMatch: '<roll type="d20">1</roll>', attrs: { type: 'd20' }, messageId: 'm2' });
    expect(h.firedIds()).toEqual(['h1']);
  });

  test('unregister drops one handler; the LAST unregister tears down the host interceptor', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice');
    h.register('s2', 'h2', 'dice');
    h.unregister('s1', 'h1');
    expect(h.aliveFor('dice')).toHaveLength(1); // host interceptor still alive (h2 remains)
    h.fire('dice', { fullMatch: '<dice>x</dice>', messageId: 'm1' });
    expect(h.firedIds()).toEqual(['h2']); // only h2 now
    h.unregister('s2', 'h2');
    expect(h.aliveFor('dice')).toHaveLength(0); // last handler gone → host interceptor unregistered
  });

  test('removeFromMessage is OR-merged across a tag and re-registers the host interceptor on change', () => {
    const h = harness();
    h.register('s1', 'h1', 'dice', { removeFromMessage: false });
    expect(h.aliveFor('dice')[0]!.removeFromMessage).toBe(false); // only a keep-handler so far
    h.register('s2', 'h2', 'dice', { removeFromMessage: true });   // now someone wants strip
    const live = h.aliveFor('dice');
    expect(live).toHaveLength(1);                                   // still one host interceptor
    expect(live[0]!.removeFromMessage).toBe(true);                 // re-registered with merged=true
  });
});
