/**
 * Lisa memory store (Phase 1) — pure list helpers + persisted round-trip.
 *
 * The pure helpers (appendNote / dropNote / searchNotes / renderIndex) hold the
 * real logic (ceiling, ids, grep, index) and are tested directly. The async
 * tool-facing wrappers (remember / recall / forget) are round-tripped through an
 * in-memory userStorage backing the preload's mock spindle (db.test.ts pattern).
 */

import { describe, test, expect, mock, beforeEach } from 'bun:test';
import {
  appendNote, dropNote, updateNote, searchNotes, renderIndex,
  remember, recall, forget, loadNotes,
  MEMORY_BYTE_CEILING, MEMORY_HOOK_CAP,
  type MemoryNote,
} from '../../src/engine/assistant-memory.js';

// ─── In-memory userStorage backing the preload's mock spindle ────────────────
interface Store { [path: string]: unknown; }
let fakeStore: Store;

function patchSpindleUserStorage() {
  const us = (globalThis as any).spindle.userStorage;
  us.getJson = mock(async (path: string, opts: { fallback: unknown; userId?: string }) =>
    (path in fakeStore ? fakeStore[path] : opts.fallback));
  us.setJson = mock(async (path: string, value: unknown) => { fakeStore[path] = value; });
}

beforeEach(() => {
  fakeStore = {};
  patchSpindleUserStorage();
});

const note = (over: Partial<MemoryNote> = {}): MemoryNote => ({
  id: over.id ?? 'a1',
  hook: over.hook ?? 'hook',
  source: over.source ?? 'lisa',
  createdAt: over.createdAt ?? 1,
  ...(over.detail ? { detail: over.detail } : {}),
  ...(over.category ? { category: over.category } : {}),
});

// ─── appendNote ──────────────────────────────────────────────────────────────
describe('appendNote', () => {
  test('adds a note with a short id and echoes it', () => {
    const res = appendNote([], { hook: 'prefers tabs', source: 'lisa' }, 100);
    expect('error' in res).toBe(false);
    if ('error' in res) return;
    expect(res.notes).toHaveLength(1);
    expect(res.notes[0]!.id).toBe(res.id);
    expect(res.notes[0]!.hook).toBe('prefers tabs');
    expect(res.notes[0]!.createdAt).toBe(100);
  });

  test('generates unique ids across adds', () => {
    let notes: MemoryNote[] = [];
    const ids = new Set<string>();
    for (let i = 0; i < 25; i++) {
      const res = appendNote(notes, { hook: `n${i}`, source: 'lisa' }, i);
      if ('error' in res) throw new Error('unexpected ceiling/error');
      notes = res.notes;
      ids.add(res.id);
    }
    expect(ids.size).toBe(25);
  });

  test('truncates an over-long hook to the cap', () => {
    const long = 'x'.repeat(MEMORY_HOOK_CAP + 50);
    const res = appendNote([], { hook: long, source: 'lisa' }, 1);
    if ('error' in res) throw new Error('unexpected');
    expect(res.notes[0]!.hook.length).toBe(MEMORY_HOOK_CAP);
    expect(res.notes[0]!.hook.endsWith('…')).toBe(true);
  });

  test('rejects an empty / whitespace hook', () => {
    expect('error' in appendNote([], { hook: '   ', source: 'lisa' }, 1)).toBe(true);
  });

  test('refuses to exceed the byte ceiling', () => {
    const huge = 'y'.repeat(MEMORY_BYTE_CEILING + 1000);
    expect('error' in appendNote([], { hook: 'big', detail: huge, source: 'lisa' }, 1)).toBe(true);
  });
});

// ─── dropNote ────────────────────────────────────────────────────────────────
describe('dropNote', () => {
  test('removes an existing note', () => {
    const r = dropNote([note({ id: 'a1' }), note({ id: 'b2' })], 'a1');
    expect(r.removed).toBe(true);
    expect(r.notes.map((n) => n.id)).toEqual(['b2']);
  });
  test('no-op for a missing id', () => {
    const r = dropNote([note({ id: 'a1' })], 'zz');
    expect(r.removed).toBe(false);
    expect(r.notes).toHaveLength(1);
  });
});

// ─── updateNote ──────────────────────────────────────────────────────────────
describe('updateNote', () => {
  const base = (): MemoryNote[] => [note({ id: '1', hook: 'old hook', detail: 'old detail', category: 'preference' })];
  test('replaces hook + detail + category', () => {
    const r = updateNote(base(), '1', { hook: 'new hook', detail: 'new detail', category: 'project' });
    if ('error' in r) throw new Error('unexpected');
    expect(r.updated).toBe(true);
    expect(r.notes[0]!.hook).toBe('new hook');
    expect(r.notes[0]!.detail).toBe('new detail');
    expect(r.notes[0]!.category).toBe('project');
  });
  test('empty detail/category clears them', () => {
    const r = updateNote(base(), '1', { hook: 'h', detail: '', category: '' });
    if ('error' in r) throw new Error('unexpected');
    expect(r.notes[0]!.detail).toBeUndefined();
    expect(r.notes[0]!.category).toBeUndefined();
  });
  test('missing id → updated false', () => {
    const r = updateNote(base(), 'zz', { hook: 'h' });
    if ('error' in r) throw new Error('unexpected');
    expect(r.updated).toBe(false);
  });
  test('empty hook → error', () => {
    expect('error' in updateNote(base(), '1', { hook: '  ' })).toBe(true);
  });
});

// ─── searchNotes ─────────────────────────────────────────────────────────────
describe('searchNotes', () => {
  const notes = [
    note({ id: '1', hook: 'prefers function declarations', category: 'preference' }),
    note({ id: '2', hook: 'scoring project', detail: 'stores state in api.db', category: 'project' }),
    note({ id: '3', hook: 'uses api.chat.getChatId()' }),
  ];
  test('empty query returns all (copy)', () => {
    const r = searchNotes(notes, '');
    expect(r).toHaveLength(3);
    expect(r).not.toBe(notes);
  });
  test('case-insensitive substring on the hook', () => {
    expect(searchNotes(notes, 'FUNCTION').map((n) => n.id)).toEqual(['1']);
  });
  test('matches against detail and category too', () => {
    expect(searchNotes(notes, 'api.db').map((n) => n.id)).toEqual(['2']);
    expect(searchNotes(notes, 'project').map((n) => n.id)).toEqual(['2']);
  });
  test('AND semantics across terms', () => {
    expect(searchNotes(notes, 'scoring state').map((n) => n.id)).toEqual(['2']);
    expect(searchNotes(notes, 'scoring function')).toHaveLength(0);
  });
});

// ─── renderIndex ─────────────────────────────────────────────────────────────
describe('renderIndex', () => {
  test('empty store → empty string', () => {
    expect(renderIndex([])).toBe('');
  });
  test('groups by category (sorted), shows ids + a detail marker', () => {
    const idx = renderIndex([
      note({ id: 'p1', hook: 'tabs', category: 'preference' }),
      note({ id: 'j1', hook: 'scoring', detail: 'api.db', category: 'project' }),
    ]);
    expect(idx).toContain('[preference]');
    expect(idx).toContain('(p1) tabs');
    expect(idx).toContain('(j1) scoring …'); // detail → trailing marker
    expect(idx.indexOf('[preference]')).toBeLessThan(idx.indexOf('[project]'));
  });
  test('uncategorised notes fall under [misc]', () => {
    expect(renderIndex([note({ id: 'm1', hook: 'loose note' })])).toContain('[misc]');
  });
});

// ─── persisted round-trip ────────────────────────────────────────────────────
describe('remember / recall / forget round-trip', () => {
  test('remember persists; recall finds it', async () => {
    const res = await remember('u1', { hook: 'prefers tabs over spaces', category: 'preference', source: 'lisa' });
    expect(res.ok).toBe(true);
    expect(await loadNotes('u1')).toHaveLength(1);
    const found = await recall('u1', 'tabs');
    expect(found).toHaveLength(1);
    expect(found[0]!.hook).toContain('tabs');
  });
  test('forget removes by id; a missing id is a no-op', async () => {
    const res = await remember('u1', { hook: 'temp note', source: 'lisa' });
    if (!res.ok) throw new Error('unexpected error');
    expect(await forget('u1', res.id)).toBe(true);
    expect(await loadNotes('u1')).toHaveLength(0);
    expect(await forget('u1', res.id)).toBe(false);
  });
});
