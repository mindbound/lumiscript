import { describe, test, expect } from 'bun:test';
import { buildAssistantSystemPrompt, buildSessionNotesSection } from '../../src/assistant/system-prompt.js';
import { LISA_PERSONA } from '../../src/assistant/persona/lisa.js';

// #3 prompt caching split: the system prompt is two pieces — a STABLE prefix
// (persona + cheat-sheet) that carries the cache breakpoint, and a VOLATILE
// session-notes tail that stays uncached. The cache only pays off if the stable
// prefix is byte-identical across turns and carries NO per-turn content.

describe('system prompt split (#3 prompt caching)', () => {
  test('stable prefix holds the cheat-sheet + persona but NOT the volatile session notes', () => {
    const stable = buildAssistantSystemPrompt(LISA_PERSONA);
    expect(stable).toContain('### YOUR KNOWLEDGE ###');
    expect(stable).toContain(LISA_PERSONA.definition);
    expect(stable).not.toContain('### SESSION NOTES');
  });

  test('stable prefix is byte-stable across calls (so the cache breakpoint never re-bills a write)', () => {
    expect(buildAssistantSystemPrompt(LISA_PERSONA)).toBe(buildAssistantSystemPrompt(LISA_PERSONA));
  });

  test('session-notes section carries the volatile memory index', () => {
    const withNotes = buildSessionNotesSection('(abc) User prefers tabs');
    expect(withNotes).toContain('### SESSION NOTES');
    expect(withNotes).toContain('User prefers tabs');
  });

  test('session-notes section is non-empty even with no memory index (no empty cache part)', () => {
    const empty = buildSessionNotesSection(undefined);
    expect(empty).toContain('### SESSION NOTES');
    expect(empty).toContain('no saved notes');
    expect(empty.trim().length).toBeGreaterThan(0);
  });
});
