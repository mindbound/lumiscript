/**
 * Card-embedded-scripts pure helpers (#12, Phase 0): envelope extraction,
 * install/update/skip decisions, and the permission-inference heuristic.
 */
import { describe, test, expect } from 'bun:test';
import {
  extractEmbeddedScripts,
  computeInstallActions,
  analyzeRequiredPermissions,
  hashScriptCode,
} from '../../src/engine/card-scripts.js';
import type { Script } from '../../src/types/script.js';
import type { EmbeddedScriptEntry } from '../../src/types/card-scripts.js';

const env = (over: Record<string, unknown>) => ({ lumiscript: { formatVersion: 1, bundleCardId: 'card-A', scripts: [], ...over } });
const okEntry = (over: Record<string, unknown> = {}) => ({ bundleId: 'b1', name: 'Dice', code: 'api.llm.generate()', type: 'trigger', ...over });

function mkEntry(over: { bundleId: string; code?: string; version?: string; name?: string }): EmbeddedScriptEntry {
  return {
    bundleId: over.bundleId,
    name: over.name ?? 'X',
    code: over.code ?? 'console.log(1)',
    type: 'trigger',
    ...(over.version !== undefined ? { metadata: { version: over.version } } : {}),
  };
}

function mkInstalled(over: { bundleCardId: string; bundleId: string; code?: string; version?: string; sourceHash?: string; id?: string }): Script {
  const code = over.code ?? 'console.log(1)';
  return {
    id: over.id ?? 'installed-1', name: 'X', code, enabled: false, allowDangerous: false,
    type: 'trigger', createdAt: 0, updatedAt: 0,
    bundledFrom: {
      bundleCardId: over.bundleCardId,
      bundleId: over.bundleId,
      ...(over.version !== undefined ? { version: over.version } : {}),
      sourceHash: over.sourceHash ?? hashScriptCode(code),
    },
  };
}

// ─── extractEmbeddedScripts ──────────────────────────────────────────────────
describe('extractEmbeddedScripts', () => {
  test('none — no extensions / no lumiscript key', () => {
    expect(extractEmbeddedScripts(undefined).kind).toBe('none');
    expect(extractEmbeddedScripts(null).kind).toBe('none');
    expect(extractEmbeddedScripts({}).kind).toBe('none');
    expect(extractEmbeddedScripts({ lumiscript: undefined }).kind).toBe('none');
    expect(extractEmbeddedScripts({ other: { a: 1 } }).kind).toBe('none');
  });

  test('invalid — bad envelope shapes', () => {
    expect(extractEmbeddedScripts({ lumiscript: 'nope' }).kind).toBe('invalid');
    expect(extractEmbeddedScripts({ lumiscript: [] }).kind).toBe('invalid');
    expect(extractEmbeddedScripts(env({ formatVersion: undefined })).kind).toBe('invalid');
    expect(extractEmbeddedScripts(env({ formatVersion: 0 })).kind).toBe('invalid');
    expect(extractEmbeddedScripts(env({ formatVersion: 2 })).kind).toBe('invalid'); // newer than supported
    expect(extractEmbeddedScripts(env({ bundleCardId: '' })).kind).toBe('invalid');
    expect(extractEmbeddedScripts(env({ scripts: 'x' })).kind).toBe('invalid');
  });

  test('ok — valid entries, bundleCardId surfaced', () => {
    const r = extractEmbeddedScripts(env({ scripts: [okEntry()] }));
    expect(r.kind).toBe('ok');
    if (r.kind !== 'ok') return;
    expect(r.bundleCardId).toBe('card-A');
    expect(r.scripts).toHaveLength(1);
    expect(r.scripts[0]!.bundleId).toBe('b1');
    expect(r.skipped).toHaveLength(0);
  });

  test('ok — malformed entries are skipped (not fatal), with reasons', () => {
    const r = extractEmbeddedScripts(env({ scripts: [
      okEntry({ bundleId: 'good' }),
      { name: 'NoBundleId', code: '', type: 'trigger' },   // missing bundleId
      { bundleId: 'x', code: 'y' },                          // missing name
      { bundleId: 'z', name: 'NoCode' },                     // missing code
    ] }));
    expect(r.kind).toBe('ok');
    if (r.kind !== 'ok') return;
    expect(r.scripts.map((s) => s.bundleId)).toEqual(['good']);
    expect(r.skipped).toHaveLength(3);
  });

  test('ok — duplicate bundleIds: first wins, rest skipped', () => {
    const r = extractEmbeddedScripts(env({ scripts: [okEntry({ bundleId: 'dup', name: 'A' }), okEntry({ bundleId: 'dup', name: 'B' })] }));
    if (r.kind !== 'ok') throw new Error('expected ok');
    expect(r.scripts).toHaveLength(1);
    expect(r.scripts[0]!.name).toBe('A');
    expect(r.skipped[0]!.reason).toContain('duplicate');
  });

  test('ok — unknown type defaults to trigger; metadata sanitized', () => {
    const r = extractEmbeddedScripts(env({ scripts: [
      { bundleId: 'b', name: 'N', code: 'c', type: 'EVIL', metadata: { version: '1.0.0', author: 'me', junk: 1 } },
    ] }));
    if (r.kind !== 'ok') throw new Error('expected ok');
    expect(r.scripts[0]!.type).toBe('trigger');
    expect(r.scripts[0]!.metadata).toEqual({ version: '1.0.0', author: 'me' });
  });

  test('ok — caps the embedded-script count, recording the overflow', () => {
    const many = Array.from({ length: 200 }, (_, i) => okEntry({ bundleId: `b${i}`, name: `S${i}` }));
    const r = extractEmbeddedScripts(env({ scripts: many }));
    if (r.kind !== 'ok') throw new Error('expected ok');
    expect(r.scripts).toHaveLength(64);                       // MAX_EMBEDDED_SCRIPTS
    expect(r.scripts[63]!.bundleId).toBe('b63');              // first 64 kept, in order
    expect(r.skipped.at(-1)!.reason).toContain('exceeds 64-script cap');
  });

  test('ok — bounds the raw scan for an all-invalid / all-duplicate hostile array', () => {
    // all-invalid: the accept-cap never fires (nothing valid), so the SCAN-cap
    // must stop the scan instead of walking the whole array.
    const invalid = extractEmbeddedScripts(env({ scripts: Array.from({ length: 5000 }, () => ({})) }));
    if (invalid.kind !== 'ok') throw new Error('expected ok');
    expect(invalid.scripts).toHaveLength(0);
    expect(invalid.skipped.length).toBeLessThanOrEqual(513);          // MAX_SCANNED_ENTRIES (512) + 1 overflow record
    expect(invalid.skipped.at(-1)!.reason).toContain('scan limit');

    // all-duplicate with a giant bundleId: scan bounded AND the echoed id clamped
    // so a huge attacker-controlled bundleId can't amplify skipped[] memory.
    const bigId = 'x'.repeat(10_000);
    const dup = extractEmbeddedScripts(env({ scripts: Array.from({ length: 5000 }, () => okEntry({ bundleId: bigId })) }));
    if (dup.kind !== 'ok') throw new Error('expected ok');
    expect(dup.scripts).toHaveLength(1);                              // first accepted, the rest are duplicates
    expect(dup.skipped.length).toBeLessThanOrEqual(513);
    const dupReason = dup.skipped.find((s) => s.reason.includes('duplicate'))!;
    expect(dupReason.reason.length).toBeLessThan(120);               // bundleId clamped to 80, not 10_000
  });

  test('ok — untrusted name / folder / metadata strings are length-clamped', () => {
    const r = extractEmbeddedScripts(env({ scripts: [{
      bundleId: 'b', name: 'N'.repeat(5000), code: 'c', folder: 'F'.repeat(5000),
      metadata: { description: 'D'.repeat(5000), author: 'A'.repeat(5000), version: 'V'.repeat(5000), tags: Array.from({ length: 100 }, () => 't'.repeat(500)) },
    }] }));
    if (r.kind !== 'ok') throw new Error('expected ok');
    const s = r.scripts[0]!;
    expect(s.name.length).toBe(200);
    expect(s.folder!.length).toBe(200);
    expect(s.metadata!.description!.length).toBe(1000);
    expect(s.metadata!.author!.length).toBe(120);
    expect(s.metadata!.version!.length).toBe(64);
    expect(s.metadata!.tags!.length).toBe(32);          // MAX_TAGS
    expect(s.metadata!.tags!.every((t) => t.length <= 64)).toBe(true);
  });
});

// ─── computeInstallActions ───────────────────────────────────────────────────
describe('computeInstallActions', () => {
  test('install — no installed match', () => {
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1' })], []);
    expect(d[0]!.action).toBe('install');
  });

  test('match is scoped to (bundleCardId, bundleId) — same bundleId, other card → install', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-OTHER', bundleId: 'b1' })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1' })], installed);
    expect(d[0]!.action).toBe('install');
  });

  test('update — incoming semver newer', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', version: '1.0.0' })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', version: '1.1.0' })], installed);
    expect(d[0]!.action).toBe('update');
    expect(d[0]!.versionDelta).toEqual({ from: '1.0.0', to: '1.1.0' });
    expect(d[0]!.existingScriptId).toBe('installed-1');
  });

  test('skip — same version (up-to-date) / older (not-newer)', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', version: '2.0.0' })];
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', version: '2.0.0' })], installed)[0])
      .toMatchObject({ action: 'skip', skipReason: 'up-to-date' });
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', version: '1.9.9' })], installed)[0])
      .toMatchObject({ action: 'skip', skipReason: 'not-newer' });
  });

  test('hash fallback — no versions: unchanged code → skip(unchanged), changed → update', () => {
    const code = 'console.log("v1")';
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code, sourceHash: hashScriptCode(code) })];
    // incoming code identical to recorded install
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code })], installed)[0])
      .toMatchObject({ action: 'skip', skipReason: 'unchanged' });
    // incoming code differs
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code: 'console.log("v2")' })], installed)[0]!.action)
      .toBe('update');
  });

  test('non-strict-semver versions fall through to hash compare', () => {
    const code = 'x';
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code, version: '1.0', sourceHash: hashScriptCode(code) })];
    // "1.0" and "1.1" are not strict X.Y.Z → hash fallback; identical code → skip
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code, version: '1.1' })], installed)[0]!.action).toBe('skip');
  });

  test('localEdits flagged when the installed copy was edited since install', () => {
    const original = 'original()';
    const installed = [mkInstalled({
      bundleCardId: 'card-A', bundleId: 'b1', version: '1.0.0',
      code: 'EDITED locally',                  // current installed code...
      sourceHash: hashScriptCode(original),    // ...differs from the hash recorded at install
    })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', version: '1.1.0' })], installed);
    expect(d[0]!.action).toBe('update');
    expect(d[0]!.localEdits).toBe(true);
  });
});

// ─── analyzeRequiredPermissions ──────────────────────────────────────────────
describe('analyzeRequiredPermissions', () => {
  const perms = (code: string, granted: string[] = []) => analyzeRequiredPermissions(code, granted);

  test('maps common namespaces to permissions', () => {
    expect(perms('await api.llm.generate()').map((p) => p.permission)).toEqual(['generation']);
    expect(perms('api.chat.sendMessage("hi")').map((p) => p.permission)).toEqual(['chat_mutation']);
    expect(perms('api.utils.http.get(u)').map((p) => p.permission)).toEqual(['cors_proxy']);
    expect(perms('api.imageGen.generate({})').map((p) => p.permission)).toEqual(['image_gen']);
  });

  test('sub-namespace: api.chat.inject → interceptor, NOT chat_mutation', () => {
    const p = perms("api.chat.inject('id', 'note')");
    expect(p.map((x) => x.permission)).toEqual(['interceptor']);
  });

  test('a script using both inject and send needs both perms', () => {
    const p = perms("api.chat.inject('a','b'); api.chat.sendMessage('c')");
    expect(p.map((x) => x.permission).sort()).toEqual(['chat_mutation', 'interceptor']);
  });

  test('free namespaces produce no requirements', () => {
    expect(perms('api.variables.global.get("x"); api.scriptStorage.set("a", 1); api.db.collection("c")')).toEqual([]);
    expect(perms('api.ui.toast("hi"); api.broadcast.emit("e")')).toEqual([]);
  });

  test('deduped by permission', () => {
    const p = perms('api.chat.sendMessage("a"); api.chat.editMessage("b"); api.chat.deleteMessage("c")');
    expect(p).toHaveLength(1);
    expect(p[0]!.permission).toBe('chat_mutation');
  });

  test('granted flag reflects the granted set', () => {
    const p = perms('api.llm.generate(); api.databanks.list()', ['generation']);
    expect(p.find((x) => x.permission === 'generation')!.granted).toBe(true);
    expect(p.find((x) => x.permission === 'databanks')!.granted).toBe(false);
  });

  test('accepts a Set for granted', () => {
    const p = analyzeRequiredPermissions('api.llm.generate()', new Set(['generation']));
    expect(p[0]!.granted).toBe(true);
  });
});

// ─── hashScriptCode ──────────────────────────────────────────────────────────
describe('hashScriptCode', () => {
  test('deterministic for identical input', () => {
    expect(hashScriptCode('abc')).toBe(hashScriptCode('abc'));
  });
  test('differs for different input', () => {
    expect(hashScriptCode('abc')).not.toBe(hashScriptCode('abd'));
    expect(hashScriptCode('')).not.toBe(hashScriptCode(' '));
  });
  test('fixed-width 14-char hex (guards stored sourceHash comparison)', () => {
    for (const s of ['', 'a', 'console.log(1)', 'x'.repeat(10000)]) {
      expect(hashScriptCode(s)).toMatch(/^[0-9a-f]{14}$/);
    }
  });
});

// ─── Phase 0 adversarial-pass follow-ups (2026-06-22) ─────────────────────────
describe('analyzeRequiredPermissions — corrected/complete map', () => {
  const perms = (code: string, granted: string[] = []) => analyzeRequiredPermissions(code, granted).map((p) => p.permission).sort();

  test('previously-missing gated namespaces now warn', () => {
    expect(perms('api.webSearch.query("x")')).toEqual(['web_search']);
    expect(perms('api.regexScripts.create({})')).toEqual(['regex_scripts']);
    expect(perms('api.memories.entities.list()')).toEqual(['memories']);
    expect(perms('api.files.tempWrite("f", "d")')).toEqual(['ephemeral_storage']);
    expect(perms('api.macros.registerInterceptor("m", fn)')).toEqual(['macro_interceptor']);
    expect(perms('api.ui.createFloatWidget({})')).toEqual(['ui_panels']);
    expect(perms('api.events.track("e", {})')).toEqual(['event_tracking']);
  });

  test('free methods no longer over-claim', () => {
    expect(perms('api.chat.removeInjection("x")')).toEqual([]);
    expect(perms('api.chat.getInjections()')).toEqual([]);
    expect(perms('api.macros.register("m", {})')).toEqual([]);           // only registerInterceptor gates
    expect(perms('api.files.userWrite("f", "d")')).toEqual([]);          // only temp* gates
  });

  test('worldInfo.registerInterceptor → generation, CRUD → world_books', () => {
    expect(perms('api.worldInfo.registerInterceptor(fn)')).toEqual(['generation']);
    expect(perms('api.worldInfo.create({})')).toEqual(['world_books']);
  });

  test('false positives stripped: comments / strings / member access', () => {
    expect(perms('// uses api.llm.generate here\nconst x = 1')).toEqual([]);
    expect(perms('const help = "call api.images.upload to store"')).toEqual([]);
    expect(perms('/* api.databanks.list */ noop()')).toEqual([]);
    expect(perms('this.api.llm.generate()')).toEqual([]);   // member access, not the global api
    expect(perms('myapi.llm.generate()')).toEqual([]);       // word boundary
  });

  test('template-literal interpolations are still scanned (not stripped)', () => {
    expect(perms('`result: ${api.llm.generate()}`')).toEqual(['generation']);
  });
});

describe('extractEmbeddedScripts — defensive (never throws)', () => {
  test('hostile throwing getter → invalid, not a throw', () => {
    const hostile = {};
    Object.defineProperty(hostile, 'lumiscript', { enumerable: true, get() { throw new Error('boom'); } });
    let res: ReturnType<typeof extractEmbeddedScripts> | undefined;
    expect(() => { res = extractEmbeddedScripts(hostile); }).not.toThrow();
    expect(res!.kind).toBe('invalid');
  });

  test('a throwing entry getter is skipped; siblings survive', () => {
    const bad = {};
    Object.defineProperty(bad, 'bundleId', { enumerable: true, get() { throw new Error('x'); } });
    const r = extractEmbeddedScripts({ lumiscript: { formatVersion: 1, bundleCardId: 'c', scripts: [bad, okEntry({ bundleId: 'good' })] } });
    if (r.kind !== 'ok') throw new Error('expected ok');
    expect(r.scripts.map((s) => s.bundleId)).toEqual(['good']);
    expect(r.skipped).toHaveLength(1);
  });

  test('malformed bindings elements are dropped', () => {
    const r = extractEmbeddedScripts({ lumiscript: { formatVersion: 1, bundleCardId: 'c', scripts: [
      { bundleId: 'b', name: 'N', code: 'c', type: 'trigger', bindings: [
        { type: 'character', characterId: 'uuid', displayName: 'Alice' }, // valid
        { type: 'evil', characterId: 42 },                                // bad type
        null, 42, 'nope',                                                 // junk
      ] },
    ] } });
    if (r.kind !== 'ok') throw new Error('expected ok');
    expect(r.scripts[0]!.bindings).toEqual([{ type: 'character', characterId: 'uuid', displayName: 'Alice' }]);
  });

  test('non-integer formatVersion / whitespace bundleCardId → invalid', () => {
    expect(extractEmbeddedScripts({ lumiscript: { formatVersion: 1.5, bundleCardId: 'c', scripts: [] } }).kind).toBe('invalid');
    expect(extractEmbeddedScripts({ lumiscript: { formatVersion: 1, bundleCardId: '   ', scripts: [] } }).kind).toBe('invalid');
  });
});

describe('computeInstallActions — strict semver + no-op skip', () => {
  test('leading-zero / whitespace versions are NOT strict semver → hash fallback', () => {
    const code = 'x';
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code, version: '1.0.0', sourceHash: hashScriptCode(code) })];
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code, version: '01.0.0' })], installed)[0])
      .toMatchObject({ action: 'skip', skipReason: 'unchanged' });
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code: 'CHANGED', version: '1.0.0 ' })], installed)[0]!.action)
      .toBe('update');
  });

  test('large version segments compare correctly (no 2^53 collapse)', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', version: '1.0.9007199254740992' })];
    expect(computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', version: '1.0.9007199254740993' })], installed)[0]!.action)
      .toBe('update');
  });

  test('no-op overwrite (incoming == current code) → skip, no localEdits warning', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code: 'NEWCODE', sourceHash: hashScriptCode('ORIGINAL') })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code: 'NEWCODE' })], installed)[0];
    expect(d!.action).toBe('skip');
    expect(d!.localEdits).toBeUndefined();
  });

  test('hash-fallback update flags localEdits when it would clobber edits', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code: 'USER-EDIT', sourceHash: hashScriptCode('ORIGINAL') })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code: 'CARD-V2' })], installed)[0];
    expect(d!.action).toBe('update');
    expect(d!.localEdits).toBe(true);
  });

  test('versionDelta omitted on a code-only update with identical non-semver versions', () => {
    const installed = [mkInstalled({ bundleCardId: 'card-A', bundleId: 'b1', code: 'A', version: '1.0', sourceHash: hashScriptCode('A') })];
    const d = computeInstallActions('card-A', [mkEntry({ bundleId: 'b1', code: 'B', version: '1.0' })], installed)[0];
    expect(d!.action).toBe('update');
    expect(d!.versionDelta).toBeUndefined();
  });
});
