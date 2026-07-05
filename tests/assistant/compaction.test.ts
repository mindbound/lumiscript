import { describe, test, expect } from 'bun:test';
import { pickCompactionBoundary } from '../../src/assistant/compaction.js';
import { buildModelHistory } from '../../src/assistant/model-history.js';
import type { AssistantThread } from '../../src/assistant/types.js';
import type { LlmMessageDTO } from 'lumiverse-spindle-types';

// Compaction (#4): pickCompactionBoundary chooses where to fold (keeping a
// recent verbatim tail, cutting at a user boundary, never re-folding); the
// buildModelHistory derivation collapses the folded prefix into a single
// 'user'-role handoff for the MODEL view while thread.messages stays canonical.

const u = (len: number): LlmMessageDTO => ({ role: 'user', content: 'u'.repeat(len) }) as LlmMessageDTO;
const a = (len: number): LlmMessageDTO => ({ role: 'assistant', content: 'a'.repeat(len) }) as LlmMessageDTO;

const thread = (over: Partial<AssistantThread>): AssistantThread =>
  ({ id: 't', title: 't', createdAt: 0, updatedAt: 0, messages: [], ...over }) as AssistantThread;

describe('pickCompactionBoundary', () => {
  test('returns null when the whole history already fits the tail budget', () => {
    expect(pickCompactionBoundary([u(40), a(40), u(40)], 0, 300)).toBeNull();
  });

  test('returns the oldest in-budget user boundary to keep as the verbatim tail', () => {
    // tokens ≈ [1008, 1008, 1008, 1008, 108]; tail budget 300 fits only the last
    // user turn — the one before it overflows.
    const msgs = [u(4000), a(4000), u(4000), a(4000), u(400)];
    const boundary = pickCompactionBoundary(msgs, 0, 300);
    expect(boundary).toBe(4);
    expect(msgs[boundary!]!.role).toBe('user'); // tail starts clean
  });

  test('returns null when the boundary would not advance past prevThrough (anti-thrash)', () => {
    // boundary would be 2, but we already compacted through 2 → nothing new to fold.
    expect(pickCompactionBoundary([u(4000), a(4000), u(400)], 2, 300)).toBeNull();
  });
});

describe('buildModelHistory (compaction derivation)', () => {
  test('returns the full messages unchanged when not compacted', () => {
    const msgs = [u(40), a(40), u(40)];
    expect(buildModelHistory(thread({ messages: msgs }))).toBe(msgs);
  });

  test('merges the handoff into the first kept user turn (no consecutive user turns)', () => {
    const msgs = [u(40), a(40), u(40), a(40)]; // compactedThrough=2 → tail [u(40), a(40)]
    const out = buildModelHistory(thread({ messages: msgs, compactedThrough: 2, handoff: 'PRIOR SUMMARY' }));
    expect(out.length).toBe(2); // merged user turn + a(40); NOT a separate handoff turn
    expect(out[0]!.role).toBe('user');
    expect(out[0]!.content).toContain('PRIOR SUMMARY');
    expect(out[0]!.content).toContain('u'.repeat(40)); // original first-kept content merged in
    expect(out[1]).toBe(msgs[3]);
  });

  test('treats a compaction marker with no handoff as uncompacted', () => {
    const msgs = [u(40), a(40)];
    expect(buildModelHistory(thread({ messages: msgs, compactedThrough: 1 }))).toBe(msgs);
  });
});
