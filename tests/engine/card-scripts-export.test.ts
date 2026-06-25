/**
 * Card-embedded-scripts export/authoring (#12, Phase 3): Script -> envelope
 * serialization + the stability/round-trip contract with the import side.
 */
import { describe, test, expect } from 'bun:test';
import { buildCardBundle, buildEmbeddedEntry, resolveBundleId } from '../../src/engine/card-scripts-export.js';
import { extractEmbeddedScripts, computeInstallActions } from '../../src/engine/card-scripts.js';
import type { Script } from '../../src/types/script.js';

function mkScript(over: Partial<Script> & { id: string; name: string }): Script {
  return {
    code: 'api.llm.generate()',
    enabled: true,
    allowDangerous: true,
    type: 'trigger',
    createdAt: 1,
    updatedAt: 2,
    ...over,
  };
}

describe('resolveBundleId', () => {
  test('falls back to the script id for an author-created script', () => {
    expect(resolveBundleId(mkScript({ id: 'sid-1', name: 'Dice' }))).toBe('sid-1');
  });

  test('preserves the imported bundleId (lineage across re-share)', () => {
    const s = mkScript({ id: 'sid-1', name: 'Dice', bundledFrom: { bundleCardId: 'bc', bundleId: 'mindbound.dice' } });
    expect(resolveBundleId(s)).toBe('mindbound.dice');
  });
});

describe('buildEmbeddedEntry', () => {
  test('carries only the shareable subset + bundleId (no id/enabled/allowDangerous/timestamps)', () => {
    const entry = buildEmbeddedEntry(mkScript({ id: 'sid-1', name: 'Dice', code: 'CODE' }));
    expect(Object.keys(entry).sort()).toEqual(['bundleId', 'code', 'name', 'type']);
    expect(entry).toMatchObject({ bundleId: 'sid-1', name: 'Dice', code: 'CODE', type: 'trigger' });
  });

  test('includes optional fields when present, omits them when empty', () => {
    const full = buildEmbeddedEntry(mkScript({
      id: 'sid-2', name: 'Full', type: 'library',
      triggers: ['MESSAGE_SENT'], bindings: [{ type: 'character', displayName: 'Alice', characterId: 'c1' }],
      folder: 'RPG', metadata: { version: '1.2.0', author: 'me' },
    }));
    expect(full).toMatchObject({
      type: 'library', triggers: ['MESSAGE_SENT'], folder: 'RPG', metadata: { version: '1.2.0', author: 'me' },
    });
    expect(full.bindings).toHaveLength(1);

    // Empty arrays / empty metadata object are omitted (not serialized as []/{}).
    const empties = buildEmbeddedEntry(mkScript({ id: 'sid-3', name: 'Empty', triggers: [], bindings: [], folder: '', metadata: {} }));
    expect(empties).not.toHaveProperty('triggers');
    expect(empties).not.toHaveProperty('bindings');
    expect(empties).not.toHaveProperty('folder');
    expect(empties).not.toHaveProperty('metadata');
  });
});

describe('buildCardBundle', () => {
  test('wraps entries in a versioned envelope with the given bundleCardId', () => {
    const env = buildCardBundle([mkScript({ id: 'a', name: 'A' }), mkScript({ id: 'b', name: 'B' })], 'card-1');
    expect(env.formatVersion).toBe(1);
    expect(env.bundleCardId).toBe('card-1');
    expect(env.scripts.map((s) => s.bundleId)).toEqual(['a', 'b']);
  });

  test('de-dupes by bundleId (first wins) when two scripts share an imported identity', () => {
    const shared = { bundleCardId: 'src', bundleId: 'dup' };
    const env = buildCardBundle([
      mkScript({ id: 'a', name: 'First', bundledFrom: shared }),
      mkScript({ id: 'b', name: 'Second', bundledFrom: shared }),
    ], 'card-1');
    expect(env.scripts).toHaveLength(1);
    expect(env.scripts[0]!.name).toBe('First');
  });
});

describe('round-trip with the import side', () => {
  test('a built envelope is accepted by extractEmbeddedScripts and installs cleanly', () => {
    const scripts = [
      mkScript({ id: 'a', name: 'Dice', code: 'C1', triggers: ['MESSAGE_SENT'], metadata: { version: '1.0.0' } }),
      mkScript({ id: 'b', name: 'Helper', code: 'C2', type: 'library' }),
    ];
    const envelope = buildCardBundle(scripts, 'card-XYZ');

    const extracted = extractEmbeddedScripts({ lumiscript: envelope });
    expect(extracted.kind).toBe('ok');
    if (extracted.kind !== 'ok') return;
    expect(extracted.bundleCardId).toBe('card-XYZ');
    expect(extracted.scripts.map((s) => s.bundleId)).toEqual(['a', 'b']);
    expect(extracted.skipped).toHaveLength(0);

    // Fresh install (nothing installed yet) → every entry is an 'install'.
    const decisions = computeInstallActions('card-XYZ', extracted.scripts, []);
    expect(decisions.every((d) => d.action === 'install')).toBe(true);
  });
});
