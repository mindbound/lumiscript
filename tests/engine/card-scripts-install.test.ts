/**
 * Card-embedded-scripts import orchestration (#12, Phase 1): detection prep +
 * the consent-selection install/update, exercised against a real ScriptStorage.
 */
import { describe, test, expect } from 'bun:test';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';
import { prepareCardScriptDetection, applyCardScriptInstall } from '../../src/engine/card-scripts-install.js';
import { hashScriptCode } from '../../src/engine/card-scripts.js';
import type { Script } from '../../src/types/script.js';

async function freshStorage(seed: Script[] = []): Promise<ScriptStorage> {
  const s = new ScriptStorage(new InMemoryStorageAdapter(), () => 'u');
  await s.load();
  for (const sc of seed) await s.store.create(sc);
  return s;
}

const card = (scripts: unknown[], bundleCardId = 'bc1', name = 'Alice') =>
  ({ id: 'host-uuid-1', name, extensions: { lumiscript: { formatVersion: 1, bundleCardId, scripts } } });

const embed = (over: Record<string, unknown> = {}) =>
  ({ bundleId: 'b1', name: 'Dice', code: 'api.llm.generate()', type: 'trigger', ...over });

function installedScript(p: { id?: string; name?: string; code: string; bundleCardId: string; bundleId: string; version?: string; enabled?: boolean; allowDangerous?: boolean }): Script {
  return {
    id: p.id ?? 'old-1', name: p.name ?? 'Dice', code: p.code, enabled: p.enabled ?? true,
    allowDangerous: p.allowDangerous ?? false, type: 'trigger', createdAt: 1, updatedAt: 1,
    bundledFrom: { bundleCardId: p.bundleCardId, bundleId: p.bundleId, ...(p.version ? { version: p.version } : {}), sourceHash: hashScriptCode(p.code) },
  };
}

let seq = 0;
const genScriptId = () => `sid-${++seq}`;

describe('prepareCardScriptDetection', () => {
  test('null when no embedded scripts', async () => {
    const s = await freshStorage();
    expect(prepareCardScriptDetection({ character: { id: 'x', extensions: {} }, installed: s.getScripts(), granted: [], genRequestId: () => 'r' })).toBeNull();
  });

  test('detection for a new card script, with permission analysis', async () => {
    const s = await freshStorage();
    const prepared = prepareCardScriptDetection({ character: card([embed()]), installed: s.getScripts(), granted: [], genRequestId: () => 'req-1' });
    expect(prepared).not.toBeNull();
    expect(prepared!.requestId).toBe('req-1');
    expect(prepared!.bundleCardId).toBe('bc1');
    expect(prepared!.hostCharacterId).toBe('host-uuid-1');
    expect(prepared!.bundleName).toBe('Alice');
    expect(prepared!.items).toHaveLength(1);
    expect(prepared!.items[0]!.action).toBe('install');
    expect(prepared!.items[0]!.permissions).toEqual([{ namespace: 'llm', permission: 'generation', granted: false }]);
  });

  test('update items are enriched with the on-disk name + enabled state', async () => {
    const s = await freshStorage([installedScript({ id: 'old-1', name: 'My Dice', code: 'OLD', bundleCardId: 'bc1', bundleId: 'b1', version: '1.0.0', enabled: true })]);
    const prepared = prepareCardScriptDetection({
      character: card([embed({ name: 'Dice Roller', code: 'NEW', metadata: { version: '1.1.0' } })]),
      installed: s.getScripts(), granted: [], genRequestId: () => 'r',
    })!;
    const item = prepared.items[0]!;
    expect(item.action).toBe('update');
    expect(item.existingName).toBe('My Dice');   // on-disk name, NOT the card's 'Dice Roller'
    expect(item.targetEnabled).toBe(true);
  });

  test('install items carry no on-disk enrichment', async () => {
    const s = await freshStorage();
    const prepared = prepareCardScriptDetection({ character: card([embed()]), installed: s.getScripts(), granted: [], genRequestId: () => 'r' })!;
    expect(prepared.items[0]!.action).toBe('install');
    expect(prepared.items[0]!.existingName).toBeUndefined();
    expect(prepared.items[0]!.targetEnabled).toBeUndefined();
  });

  test('null when every embedded script is already up-to-date', async () => {
    const s = await freshStorage([installedScript({ code: 'X', bundleCardId: 'bc1', bundleId: 'b1', version: '1.0.0' })]);
    const prepared = prepareCardScriptDetection({
      character: card([embed({ bundleId: 'b1', code: 'X', metadata: { version: '1.0.0' } })]),
      installed: s.getScripts(), granted: [], genRequestId: () => 'r',
    });
    expect(prepared).toBeNull();
  });
});

describe('applyCardScriptInstall', () => {
  test('installs a selected new script DISABLED + with provenance', async () => {
    const s = await freshStorage();
    const prepared = prepareCardScriptDetection({ character: card([embed({ code: 'CODE1' })]), installed: s.getScripts(), granted: [], genRequestId: () => 'req-1' })!;
    const summary = await applyCardScriptInstall({ prepared, selectedBundleIds: ['b1'], scriptStorage: s, genScriptId: () => 'sid-A' });
    expect(summary.installed).toEqual(['Dice']);
    const sc = s.getScript('sid-A')!;
    expect(sc.enabled).toBe(false);
    expect(sc.allowDangerous).toBe(false);
    expect(sc.bundledFrom).toMatchObject({ bundleCardId: 'bc1', bundleId: 'b1', hostCharacterId: 'host-uuid-1', bundleName: 'Alice' });
    expect(sc.bundledFrom!.sourceHash).toBe(hashScriptCode('CODE1'));
  });

  test('unselected items are skipped, not installed', async () => {
    const s = await freshStorage();
    const prepared = prepareCardScriptDetection({ character: card([embed()]), installed: s.getScripts(), granted: [], genRequestId: () => 'r' })!;
    const summary = await applyCardScriptInstall({ prepared, selectedBundleIds: [], scriptStorage: s, genScriptId });
    expect(summary.installed).toEqual([]);
    expect(summary.skipped).toBe(1);
    expect(s.getScripts()).toHaveLength(0);
  });

  test('update overwrites code + provenance but PRESERVES enabled + allowDangerous', async () => {
    const s = await freshStorage([installedScript({ code: 'OLD', bundleCardId: 'bc1', bundleId: 'b1', version: '1.0.0', enabled: true, allowDangerous: true })]);
    const prepared = prepareCardScriptDetection({
      character: card([embed({ code: 'NEW', metadata: { version: '1.1.0' } })]),
      installed: s.getScripts(), granted: [], genRequestId: () => 'r',
    })!;
    expect(prepared.items[0]!.action).toBe('update');
    const summary = await applyCardScriptInstall({ prepared, selectedBundleIds: ['b1'], scriptStorage: s, genScriptId });
    expect(summary.updated).toEqual(['Dice']);
    const sc = s.getScript('old-1')!;
    expect(sc.code).toBe('NEW');
    expect(sc.enabled).toBe(true);          // preserved
    expect(sc.allowDangerous).toBe(true);   // preserved
    expect(sc.bundledFrom!.version).toBe('1.1.0');
    expect(sc.bundledFrom!.sourceHash).toBe(hashScriptCode('NEW'));
    expect(s.getScripts()).toHaveLength(1); // updated in place, not duplicated
  });

  test('a selected SKIP-action item is not applied (backend authority)', async () => {
    const s = await freshStorage([installedScript({ code: 'X', bundleCardId: 'bc1', bundleId: 'b1', version: '1.0.0' })]);
    const prepared = prepareCardScriptDetection({
      character: card([
        embed({ bundleId: 'b1', name: 'Dice', code: 'X', metadata: { version: '1.0.0' } }), // up-to-date → skip
        embed({ bundleId: 'b2', name: 'Other', code: 'CODE-B2' }),                           // new → install
      ]),
      installed: s.getScripts(), granted: [], genRequestId: () => 'r',
    })!;
    const summary = await applyCardScriptInstall({ prepared, selectedBundleIds: ['b1', 'b2'], scriptStorage: s, genScriptId: () => 'sid-B2' });
    expect(summary.installed).toEqual(['Other']);   // only the install-action one
    expect(summary.skipped).toBe(1);                // the selected skip is ignored
    expect(s.getScript('sid-B2')).not.toBeNull();
  });

  test('an update whose target vanished falls back to a fresh install', async () => {
    const s = await freshStorage([installedScript({ code: 'OLD', bundleCardId: 'bc1', bundleId: 'b1', version: '1.0.0' })]);
    const prepared = prepareCardScriptDetection({
      character: card([embed({ code: 'NEW', metadata: { version: '1.1.0' } })]),
      installed: s.getScripts(), granted: [], genRequestId: () => 'r',
    })!;
    expect(prepared.items[0]!.action).toBe('update');
    await s.deleteScript('old-1'); // target gone between detect and install
    const summary = await applyCardScriptInstall({ prepared, selectedBundleIds: ['b1'], scriptStorage: s, genScriptId: () => 'sid-fresh' });
    expect(summary.installed).toEqual(['Dice']);   // installed fresh, not updated
    expect(summary.updated).toEqual([]);
    expect(s.getScript('sid-fresh')).not.toBeNull();
  });
});
