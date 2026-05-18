/**
 * Tests for `src/engine/diagnostics.ts` — the backend diagnostics collector
 * introduced in v0.28.0.
 *
 * Coverage focus:
 *   1. Top-level shape — sections in stable order, summary aggregation correct.
 *   2. Section A (LumiScript) — version / min-host / permissions status logic.
 *   3. Section C (active context) — chat / character / user state translation,
 *      especially the warn-on-stale-context heuristic for the v0.23.3 race.
 *   4. Section D (registrations) — counts pulled correctly from each registry.
 *   5. Section E (storage) — three branches: not probed / ok / failed.
 *
 * We mock `ScriptStorage` and `TriggerRegistry` as plain objects with just the
 * fields the collector reads. Other registries (injection-store, tool-store,
 * etc.) are module-level singletons cleared automatically by the test preload.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  collectBackendDiagnostics,
  type DiagnosticsCollectorDeps,
  type AssistantProbeResult,
} from '../../src/engine/diagnostics.js';
import { setActiveContext, resetContext } from '../../src/engine/binding.js';
import { addInjection } from '../../src/engine/injection-store.js';
import { addTool } from '../../src/engine/tool-store.js';
import { addMacro } from '../../src/engine/macro-store.js';
import { on as broadcastOn, clearAll as clearBroadcast } from '../../src/engine/broadcast-bus.js';
import * as themeStore from '../../src/engine/theme-store.js';
import { createTestScript } from '../_infra/mock-deps.js';
import type { Script } from '../../src/types/script.js';

// ─── Fixture helpers ────────────────────────────────────────────────────────

/**
 * Build a deps object with sensible defaults. Override any field via
 * `overrides`. `scriptStorage` and `triggerRegistry` are minimal mocks
 * exposing only the fields the collector reads — saves us standing up the
 * full classes for unit tests.
 */
function makeDeps(overrides?: Partial<DiagnosticsCollectorDeps> & {
  scripts?: Script[];
  handlerCount?: number;
}): DiagnosticsCollectorDeps {
  const scripts        = overrides?.scripts ?? [];
  const handlerCount   = overrides?.handlerCount ?? 0;
  const scriptStorage  = {
    getScripts: () => scripts,
    // v1.0 — diagnostics' Workers row resolves script names via
    // `getScript(id)?.name`. Unit-test fixtures don't load real scripts,
    // so this stub returns null and the resolver falls back to the
    // scriptId string. Tests that exercise name resolution explicitly
    // can override via `overrides.scriptStorage`.
    getScript:  (id: string) => scripts.find((s) => s.id === id) ?? null,
  } as any;
  const triggerRegistry = { handlerCount } as any;
  // Strip our extra fixture keys before spreading.
  const { scripts: _drop1, handlerCount: _drop2, ...rest } = overrides ?? {};
  void _drop1; void _drop2;
  return {
    scriptStorage,
    triggerRegistry,
    lumiScriptVersion:   '0.28.0',
    minLumiverseVersion: '0.9.5',
    grantedPermissions:  ['chat_mutation', 'generation'],
    activeUserId:        'user-1',
    ...rest,
  };
}

beforeEach(() => {
  resetContext();
  clearBroadcast();
});

// ─── Top-level shape ────────────────────────────────────────────────────────

describe('collectBackendDiagnostics — shape', () => {
  test('returns six sections in stable order', () => {
    const report = collectBackendDiagnostics(makeDeps());
    expect(report.sections).toHaveLength(6);
    expect(report.sections.map(s => s.id)).toEqual([
      'lumiscript', 'scriptRunner', 'activeContext', 'registrations', 'storage', 'assistant',
    ]);
  });

  test('generatedAt is a recent timestamp', () => {
    const before = Date.now();
    const report = collectBackendDiagnostics(makeDeps());
    const after  = Date.now();
    expect(report.generatedAt).toBeGreaterThanOrEqual(before);
    expect(report.generatedAt).toBeLessThanOrEqual(after);
  });

  test('summary counts match the sum of check statuses across all sections', () => {
    const report = collectBackendDiagnostics(makeDeps());
    const totalChecks = report.sections.reduce((acc, s) => acc + s.checks.length, 0);
    const totalSummed =
      report.summary.failures + report.summary.warnings +
      report.summary.passes   + report.summary.info;
    expect(totalSummed).toBe(totalChecks);
  });
});

// ─── Section A — LumiScript ────────────────────────────────────────────────

describe('collectBackendDiagnostics — Section A (LumiScript)', () => {
  test('reports version + min-host requirement as info', () => {
    const report = collectBackendDiagnostics(makeDeps({
      lumiScriptVersion:   '0.28.0',
      minLumiverseVersion: '0.9.5',
    }));
    const section = report.sections.find(s => s.id === 'lumiscript')!;
    const version = section.checks.find(c => c.label === 'Version')!;
    const minHost = section.checks.find(c => c.label === 'Minimum Lumiverse host version')!;
    expect(version.status).toBe('info');
    expect(version.message).toBe('0.28.0');
    expect(minHost.status).toBe('info');
    expect(minHost.message).toContain('0.9.5');
  });

  test('granted permissions: pass when any present, warn when empty', () => {
    const withPerms = collectBackendDiagnostics(makeDeps({
      grantedPermissions: ['chat_mutation', 'generation', 'interceptor'],
    }));
    const withoutPerms = collectBackendDiagnostics(makeDeps({
      grantedPermissions: [],
    }));
    const withCheck = withPerms.sections.find(s => s.id === 'lumiscript')!
      .checks.find(c => c.label === 'Granted permissions')!;
    const withoutCheck = withoutPerms.sections.find(s => s.id === 'lumiscript')!
      .checks.find(c => c.label === 'Granted permissions')!;
    expect(withCheck.status).toBe('pass');
    expect(withCheck.message).toContain('3 permission');
    expect(withCheck.details?.granted).toEqual(['chat_mutation', 'generation', 'interceptor']);
    expect(withoutCheck.status).toBe('warn');
  });

  test('granted permissions detail is sorted alphabetically for stable markdown output', () => {
    const report = collectBackendDiagnostics(makeDeps({
      grantedPermissions: ['interceptor', 'chat_mutation', 'generation'],
    }));
    const check = report.sections.find(s => s.id === 'lumiscript')!
      .checks.find(c => c.label === 'Granted permissions')!;
    expect(check.details?.granted).toEqual(['chat_mutation', 'generation', 'interceptor']);
  });

  test('with lumiverseVersions probe: promotes min-host row to pass + adds backend/frontend rows', () => {
    const section = collectBackendDiagnostics(makeDeps({
      lumiScriptVersion:   '1.0.0-rc.2',
      minLumiverseVersion: '0.9.7',
      lumiverseVersions:   { backend: '0.9.7', frontend: '0.9.7' },
    })).sections.find(s => s.id === 'lumiscript')!;

    const minHost  = section.checks.find(c => c.label === 'Minimum Lumiverse host version')!;
    const backend  = section.checks.find(c => c.label === 'Lumiverse backend version')!;
    const frontend = section.checks.find(c => c.label === 'Lumiverse frontend version')!;

    expect(minHost.status).toBe('pass');
    // Message no longer repeats the backend version — that lives in the
    // explicit "Lumiverse backend version" row below. Pass status badge
    // carries the meets-min signal.
    expect(minHost.message).toBe('Requires 0.9.7');
    expect(minHost.details?.required).toBe('0.9.7');
    expect(minHost.details?.backend).toBe('0.9.7');
    expect(minHost.details?.frontend).toBe('0.9.7');

    expect(backend.status).toBe('info');
    expect(backend.message).toBe('0.9.7');
    expect(frontend.status).toBe('info');
    expect(frontend.message).toBe('0.9.7');
  });

  test('with lumiverseVersions probe + backend BELOW minimum: warn on min-host row', () => {
    const section = collectBackendDiagnostics(makeDeps({
      minLumiverseVersion: '0.9.7',
      // Backend running 0.8.5 — below the required 0.9.7.
      lumiverseVersions:   { backend: '0.8.5', frontend: '0.8.5' },
    })).sections.find(s => s.id === 'lumiscript')!;

    const minHost = section.checks.find(c => c.label === 'Minimum Lumiverse host version')!;
    expect(minHost.status).toBe('warn');
    expect(minHost.message).toBe('Requires 0.9.7 — extension may misbehave');
    // Actual versions still available via `details` for programmatic
    // consumers, even though they're elided from the message.
    expect(minHost.details?.backend).toBe('0.8.5');
  });

  test('with lumiverseVersions: backend version newer than minimum still passes', () => {
    const section = collectBackendDiagnostics(makeDeps({
      minLumiverseVersion: '0.9.5',
      lumiverseVersions:   { backend: '1.2.3', frontend: '1.2.3' },
    })).sections.find(s => s.id === 'lumiscript')!;

    const minHost = section.checks.find(c => c.label === 'Minimum Lumiverse host version')!;
    expect(minHost.status).toBe('pass');
  });

  test('without lumiverseVersions probe: min-host row stays info (no backend/frontend rows)', () => {
    const section = collectBackendDiagnostics(makeDeps({
      minLumiverseVersion: '0.9.7',
      // lumiverseVersions omitted — fallback path.
    })).sections.find(s => s.id === 'lumiscript')!;

    const minHost  = section.checks.find(c => c.label === 'Minimum Lumiverse host version')!;
    const backend  = section.checks.find(c => c.label === 'Lumiverse backend version');
    const frontend = section.checks.find(c => c.label === 'Lumiverse frontend version');

    expect(minHost.status).toBe('info');
    expect(minHost.message).toBe('Requires 0.9.7');
    // Fallback path doesn't add the explicit backend/frontend rows.
    expect(backend).toBeUndefined();
    expect(frontend).toBeUndefined();
  });
});

// ─── Section C — Active context ─────────────────────────────────────────────

describe('collectBackendDiagnostics — Section C (active context)', () => {
  test('all info when no chat is open', () => {
    // resetContext in beforeEach leaves all fields null.
    const section = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'activeContext')!;
    const chat      = section.checks.find(c => c.label === 'Chat ID')!;
    const character = section.checks.find(c => c.label === 'Character ID')!;
    expect(chat.status).toBe('info');
    expect(chat.message).toContain('no chat open');
    expect(character.status).toBe('info');
  });

  test('chat + character both resolved + activeUserId set → pass / pass / pass', () => {
    setActiveContext({ chatId: 'chat-1', characterId: 'char-1' });
    const section = collectBackendDiagnostics(makeDeps({ activeUserId: 'user-1' })).sections
      .find(s => s.id === 'activeContext')!;
    expect(section.checks.find(c => c.label === 'Chat ID')!.status).toBe('pass');
    expect(section.checks.find(c => c.label === 'Character ID')!.status).toBe('pass');
    expect(section.checks.find(c => c.label === 'User ID')!.status).toBe('pass');
  });

  test('chat open but character missing → warn (the v0.23.3 stale-context race signature)', () => {
    setActiveContext({ chatId: 'chat-1', characterId: null });
    const character = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'activeContext')!
      .checks.find(c => c.label === 'Character ID')!;
    expect(character.status).toBe('warn');
    // Message should hint at the known stale-context issue so users / support
    // can cross-reference the post-mortem when they hit this.
    expect(character.message).toContain('chat open');
  });

  test('missing activeUserId surfaces as warn (frontend hasn\'t synced yet)', () => {
    const userCheck = collectBackendDiagnostics(makeDeps({ activeUserId: null })).sections
      .find(s => s.id === 'activeContext')!
      .checks.find(c => c.label === 'User ID')!;
    expect(userCheck.status).toBe('warn');
  });
});

// ─── Section D — Registrations ──────────────────────────────────────────────

describe('collectBackendDiagnostics — Section D (registrations)', () => {
  test('script counts split by enabled / disabled / type correctly', () => {
    const scripts: Script[] = [
      createTestScript({ id: 'a', name: 'A', type: 'trigger', enabled: true }),
      createTestScript({ id: 'b', name: 'B', type: 'trigger', enabled: false }),
      createTestScript({ id: 'c', name: 'C', type: 'library', enabled: true }),
    ];
    const section = collectBackendDiagnostics(makeDeps({ scripts })).sections
      .find(s => s.id === 'registrations')!;
    const scriptsCheck = section.checks.find(c => c.label === 'Scripts')!;
    expect(scriptsCheck.details).toMatchObject({
      total: 3, enabled: 2, disabled: 1, triggerType: 2, libraryType: 1,
    });
  });

  test('triggerRegistry.handlerCount is surfaced verbatim', () => {
    const section = collectBackendDiagnostics(makeDeps({ handlerCount: 7 })).sections
      .find(s => s.id === 'registrations')!;
    const subs = section.checks.find(c => c.label === 'Spindle event subscriptions')!;
    expect(subs.message).toContain('7 live subscription');
  });

  test('reads counts from module-level registries (tool / macro / injection / broadcast)', () => {
    // Populate some state in the module-level stores. Each store has its
    // own entry shape — we just need a valid record so the listAll().length
    // increments by one.
    addInjection({
      id: 'inj-1', content: 'x', mode: 'context',
      role: 'system', depth: 0, ephemeral: false, scriptId: 's1',
    });
    addTool({
      name:            'roll',
      displayName:     'Roll',
      description:     'd',
      parameters:      { type: 'object', properties: {} },
      councilEligible: false,
      handler:         () => 'r',
      scriptId:        's1',
      scriptName:      'A',
    });
    addMacro({
      name:        'mymacro',
      description: 'd',
      category:    'test',
      mode:        'pull',
      handler:     () => 'x',
      scriptId:    's1',
      scriptName:  'A',
    });
    broadcastOn('test', () => {}, 's1');

    const section = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'registrations')!;
    expect(section.checks.find(c => c.label === 'Tools')!.message).toContain('1');
    expect(section.checks.find(c => c.label === 'Macros')!.message).toContain('1');
    expect(section.checks.find(c => c.label === 'Injections')!.message).toContain('1');
    expect(section.checks.find(c => c.label === 'Broadcast subscriptions')!.message).toContain('1');
  });

  // v1.0.0-rc.5+ — Active theme overrides row.

  test('Active theme overrides row is omitted when no script has applied a theme', () => {
    themeStore.__resetForTests();
    const section = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'registrations')!;
    expect(section.checks.find(c => c.label === 'Active theme overrides')).toBeUndefined();
  });

  test('Active theme overrides row appears when scripts have theme contributions', () => {
    themeStore.__resetForTests();
    themeStore.setVariables('script-A', {
      variables:       { 'a': '1', 'b': '2' },
      variablesByMode: { dark: { 'd': '3' } },
    });
    themeStore.setPalette('script-B', { accent: { h: 280, s: 70, l: 60 } });

    const scripts: Script[] = [
      createTestScript({ id: 'script-A', name: 'A' }),
      createTestScript({ id: 'script-B', name: 'B' }),
    ];
    const section = collectBackendDiagnostics(makeDeps({ scripts })).sections
      .find(s => s.id === 'registrations')!;
    const row = section.checks.find(c => c.label === 'Active theme overrides');
    expect(row).toBeDefined();
    expect(row!.message).toContain('2 script(s) contributing');
    // Table rows: Script / Variables / Palette / Worker
    expect(row!.table?.headers).toEqual(['Script', 'Variables', 'Palette', 'Worker']);
    expect(row!.table?.rows.length).toBe(2);
    // Row order matches apply-order (oldest first).
    expect(row!.table?.rows[0]![0]).toBe('A');
    expect(row!.table?.rows[1]![0]).toBe('B');
  });

  test("Active theme overrides reports palette status (set / cleared / —)", () => {
    themeStore.__resetForTests();
    themeStore.setPalette('script-A', { accent: { h: 0, s: 0, l: 0 } });
    themeStore.setPalette('script-B', null);
    themeStore.setVariables('script-C', { variables: { 'x': '1' } });

    const scripts: Script[] = [
      createTestScript({ id: 'script-A', name: 'A' }),
      createTestScript({ id: 'script-B', name: 'B' }),
      createTestScript({ id: 'script-C', name: 'C' }),
    ];
    const row = collectBackendDiagnostics(makeDeps({ scripts })).sections
      .find(s => s.id === 'registrations')!
      .checks.find(c => c.label === 'Active theme overrides')!;

    // Cells: [Script, Variables, Palette, Worker]
    const aRow = row.table!.rows.find(r => r[0] === 'A')!;
    const bRow = row.table!.rows.find(r => r[0] === 'B')!;
    const cRow = row.table!.rows.find(r => r[0] === 'C')!;
    expect(aRow[2]).toBe('set');
    expect(bRow[2]).toBe('cleared');
    expect(cRow[2]).toBe('—');
  });

  test("Active theme overrides shows worker status when pool is probed", () => {
    themeStore.__resetForTests();
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    themeStore.setVariables('script-B', { variables: { 'x': '2' } });

    const scripts: Script[] = [
      createTestScript({ id: 'script-A', name: 'A' }),
      createTestScript({ id: 'script-B', name: 'B' }),
    ];
    const row = collectBackendDiagnostics(makeDeps({
      scripts,
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
        pool: {
          configuredWorkerCount: 2,
          workers: [
            { workerKey: 'worker-1', processId: 'p1', lastActivityMs: Date.now(), assignedScriptCount: 1, assignedScripts: ['script-A'], restartAttempts: 0, rss: null, pinnedByRegistrations: false, pinningScripts: [] },
          ],
          totalAssignedScripts:  1,
          evictionTelemetry:     { totalEvictions: 0, lastEvictionAt: null, lastEvictionReason: null, totalEvictionsSkippedByPin: 0 },
          settings:              { idleTimeoutMs: 30 * 60_000, memoryCeilingBytes: 512 * 1024 * 1024 },
        },
      },
    })).sections
      .find(s => s.id === 'registrations')!
      .checks.find(c => c.label === 'Active theme overrides')!;

    // script-A has an active worker (worker-1); script-B doesn't appear in any
    // worker's assignedScripts — its worker has been evicted.
    const aRow = row.table!.rows.find(r => r[0] === 'A')!;
    const bRow = row.table!.rows.find(r => r[0] === 'B')!;
    expect(aRow[3]).toBe('worker-1');
    expect(bRow[3]).toBe('evicted');
  });

  test("Active theme overrides reports worker: 'unknown' when pool is NOT probed", () => {
    themeStore.__resetForTests();
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    const scripts: Script[] = [createTestScript({ id: 'script-A', name: 'A' })];
    const row = collectBackendDiagnostics(makeDeps({ scripts })).sections
      .find(s => s.id === 'registrations')!
      .checks.find(c => c.label === 'Active theme overrides')!;
    expect(row.table!.rows[0]![3]).toBe('unknown');
  });
});

// ─── Section E — Storage ────────────────────────────────────────────────────

describe('collectBackendDiagnostics — Section E (storage)', () => {
  test('no probe → info, message says "Not probed"', () => {
    const check = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'storage')!
      .checks.find(c => c.label === 'userStorage reachability')!;
    expect(check.status).toBe('info');
    expect(check.message).toMatch(/[Nn]ot probed/);
  });

  test('successful probe with latency → pass + latency in message', () => {
    const check = collectBackendDiagnostics(makeDeps({
      storageProbe: { ok: true, latencyMs: 42 },
    })).sections
      .find(s => s.id === 'storage')!
      .checks.find(c => c.label === 'userStorage reachability')!;
    expect(check.status).toBe('pass');
    expect(check.message).toContain('42ms');
  });

  test('successful probe without latency → pass, no ms in message', () => {
    const check = collectBackendDiagnostics(makeDeps({
      storageProbe: { ok: true },
    })).sections
      .find(s => s.id === 'storage')!
      .checks.find(c => c.label === 'userStorage reachability')!;
    expect(check.status).toBe('pass');
    expect(check.message).not.toContain('ms');
  });

  test('failed probe → fail + carries error message', () => {
    const check = collectBackendDiagnostics(makeDeps({
      storageProbe: { ok: false, error: 'EACCES: permission denied' },
    })).sections
      .find(s => s.id === 'storage')!
      .checks.find(c => c.label === 'userStorage reachability')!;
    expect(check.status).toBe('fail');
    expect(check.message).toContain('EACCES');
  });

  test('failed probe without error message → fail with fallback', () => {
    const check = collectBackendDiagnostics(makeDeps({
      storageProbe: { ok: false },
    })).sections
      .find(s => s.id === 'storage')!
      .checks.find(c => c.label === 'userStorage reachability')!;
    expect(check.status).toBe('fail');
    expect(check.message).toBeTruthy();
  });
});

// ─── Section B — Script-runner subprocess ──────────────────────────────────

describe('collectBackendDiagnostics — Section B (script-runner)', () => {
  test('no probe → single info row noting "not probed"', () => {
    const section = collectBackendDiagnostics(makeDeps()).sections
      .find(s => s.id === 'scriptRunner')!;
    expect(section.checks).toHaveLength(1);
    expect(section.checks[0]!.status).toBe('info');
    expect(section.checks[0]!.message).toMatch(/[Nn]ot probed/);
  });

  test('alive child + no restarts + stats present → all pass / info', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p-abc',
        stats: {
          rss:         48 * 1024 * 1024,
          heapTotal:   32 * 1024 * 1024,
          heapUsed:    22 * 1024 * 1024,
          external:    2  * 1024 * 1024,
          cpuUserUs:   1_300_000,
          cpuSystemUs:   200_000,
          uptimeSec:   42.5,
        },
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    const alive    = section.checks.find(c => c.label === 'Subprocess alive')!;
    const restarts = section.checks.find(c => c.label === 'Total restarts (this session)')!;
    const memory   = section.checks.find(c => c.label === 'Memory')!;
    const cpu      = section.checks.find(c => c.label === 'CPU time')!;
    expect(alive.status).toBe('pass');
    // v1.0: the "Subprocess alive" message no longer carries a specific
    // processId — that would just be worker-1's PID in the multi-worker
    // pool, which read as "there's one subprocess" misleadingly. The
    // per-worker PIDs live in the Workers table further down. With no
    // `pool` field in this fixture, the collector falls back to
    // `childAlive ? 1 : 0`, so the message says "1 worker alive".
    expect(alive.message).toContain('Running');
    expect(alive.message).toContain('1 worker alive');
    expect(restarts.status).toBe('pass');
    expect(restarts.message).toContain('No respawns');
    expect(memory.status).toBe('info');
    expect(memory.message).toContain('MB');
    expect(cpu.status).toBe('info');
  });

  test('dead child → fail on subprocess + info on stats unavailability', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      1,
        lastRestartReason:      'heartbeat-timeout',
        currentBackoffAttempts: 1,
        childAlive:             false,
        processId:              null,
        stats:                  null,
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    expect(section.checks.find(c => c.label === 'Subprocess alive')!.status).toBe('fail');
    const stats = section.checks.find(c => c.label === 'Resource stats')!;
    expect(stats.status).toBe('info');
    expect(stats.message).toContain('no child alive');
  });

  test('alive child with timed-out stats → warn on resource stats row', () => {
    // Hung sync script — child alive but not responsive to the diag IPC.
    const stats = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p-hung',
        stats:                  null,
      },
    })).sections.find(s => s.id === 'scriptRunner')!
      .checks.find(c => c.label === 'Resource stats')!;
    expect(stats.status).toBe('warn');
    expect(stats.message).toContain('timed out');
  });

  test('restart count tiers: 0 → pass, 1-3 → warn, 4+ → fail', () => {
    const restartCheck = (count: number) =>
      collectBackendDiagnostics(makeDeps({
        scriptRunner: {
          totalRestartCount:      count,
          lastRestartReason:      count > 0 ? 'heartbeat-timeout' : null,
          currentBackoffAttempts: 0,
          childAlive:             true,
          processId:              'p',
          stats:                  null,
        },
      })).sections.find(s => s.id === 'scriptRunner')!
        .checks.find(c => c.label === 'Total restarts (this session)')!;

    expect(restartCheck(0).status).toBe('pass');
    expect(restartCheck(1).status).toBe('warn');
    expect(restartCheck(3).status).toBe('warn');
    expect(restartCheck(4).status).toBe('fail');
    expect(restartCheck(10).status).toBe('fail');
  });

  test('restart message includes last reason when present', () => {
    const check = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      2,
        lastRestartReason:      'heartbeat-timeout',
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
      },
    })).sections.find(s => s.id === 'scriptRunner')!
      .checks.find(c => c.label === 'Total restarts (this session)')!;
    expect(check.message).toContain('heartbeat-timeout');
  });

  // ── Phase F — Worker pool diagnostics ────────────────────────────────────

  test('pool omitted → no worker-pool checks appear (backward compat)', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
        // pool: omitted
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    expect(section.checks.find(c => c.label === 'Worker pool config')).toBeUndefined();
    expect(section.checks.find(c => c.label === 'Workers')).toBeUndefined();
    expect(section.checks.find(c => c.label === 'Total script assignments')).toBeUndefined();
    expect(section.checks.find(c => c.label === 'Evictions (this session)')).toBeUndefined();
  });

  test('pool provided → config recap check with workerCount + idle + memory', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
        pool: {
          configuredWorkerCount: 4,
          workers:               [],
          totalAssignedScripts:  0,
          evictionTelemetry:     { totalEvictions: 0, lastEvictionAt: null, lastEvictionReason: null, totalEvictionsSkippedByPin: 0 },
          settings:              { idleTimeoutMs: 30 * 60_000, memoryCeilingBytes: 512 * 1024 * 1024 },
        },
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    const config = section.checks.find(c => c.label === 'Worker pool config')!;
    expect(config.status).toBe('info');
    expect(config.message).toContain('4 configured');
    expect(config.message).toContain('0 spawned');
    expect(config.message).toContain('30 min');
    expect(config.message).toContain('512 MB');
  });

  test('pool with spawned workers → per-worker rows + total assignments', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
        pool: {
          configuredWorkerCount: 2,
          workers: [
            { workerKey: 'worker-1', processId: 'abc12345xyz', lastActivityMs: Date.now() - 5_000,  assignedScriptCount: 3, assignedScripts: ['s-1a', 's-1b', 's-1c'], restartAttempts: 0, rss: 87 * 1024 * 1024,  pinnedByRegistrations: false, pinningScripts: [] },
            { workerKey: 'worker-2', processId: 'def67890xyz', lastActivityMs: Date.now() - 90_000, assignedScriptCount: 2, assignedScripts: ['s-2a', 's-2b'],         restartAttempts: 0, rss: 102 * 1024 * 1024, pinnedByRegistrations: false, pinningScripts: [] },
          ],
          totalAssignedScripts:  5,
          evictionTelemetry:     { totalEvictions: 0, lastEvictionAt: null, lastEvictionReason: null, totalEvictionsSkippedByPin: 0 },
          settings:              { idleTimeoutMs: 30 * 60_000, memoryCeilingBytes: 512 * 1024 * 1024 },
        },
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    const workers = section.checks.find(c => c.label === 'Workers')!;
    expect(workers.status).toBe('info');
    expect(workers.message).toContain('worker-1');
    expect(workers.message).toContain('worker-2');
    expect(workers.message).toContain('abc12345');  // shortened pid
    expect(workers.message).toContain('3 script');
    expect(workers.message).toContain('87 MB');
    expect(workers.message).toContain('102 MB');

    const total = section.checks.find(c => c.label === 'Total script assignments')!;
    expect(total.status).toBe('info');
    expect(total.message).toContain('5');
  });

  test('eviction telemetry: 0 evictions vs N evictions', () => {
    const checkForEvictions = (totalEvictions: number, lastReason: string | null) =>
      collectBackendDiagnostics(makeDeps({
        scriptRunner: {
          totalRestartCount:      0,
          lastRestartReason:      null,
          currentBackoffAttempts: 0,
          childAlive:             true,
          processId:              'p',
          stats:                  null,
          pool: {
            configuredWorkerCount: 2,
            workers:               [],
            totalAssignedScripts:  0,
            evictionTelemetry: {
              totalEvictions,
              lastEvictionAt:             lastReason ? Date.now() : null,
              lastEvictionReason:         lastReason,
              totalEvictionsSkippedByPin: 0,
            },
            settings: { idleTimeoutMs: 30 * 60_000, memoryCeilingBytes: 512 * 1024 * 1024 },
          },
        },
      })).sections.find(s => s.id === 'scriptRunner')!
        .checks.find(c => c.label === 'Evictions (this session)')!;

    const none = checkForEvictions(0, null);
    expect(none.message).toContain('No evictions');

    const some = checkForEvictions(2, 'idle > 1800s');
    expect(some.message).toContain('2 eviction');
    expect(some.message).toContain('idle > 1800s');
  });

  test('pool with rss=null on a worker (per-worker query timed out) → shows ? MB', () => {
    const section = collectBackendDiagnostics(makeDeps({
      scriptRunner: {
        totalRestartCount:      0,
        lastRestartReason:      null,
        currentBackoffAttempts: 0,
        childAlive:             true,
        processId:              'p',
        stats:                  null,
        pool: {
          configuredWorkerCount: 2,
          workers: [
            { workerKey: 'worker-1', processId: 'p1', lastActivityMs: Date.now(), assignedScriptCount: 1, assignedScripts: ['s-only'], restartAttempts: 0, rss: null, pinnedByRegistrations: false, pinningScripts: [] },
          ],
          totalAssignedScripts:  1,
          evictionTelemetry:     { totalEvictions: 0, lastEvictionAt: null, lastEvictionReason: null, totalEvictionsSkippedByPin: 0 },
          settings:              { idleTimeoutMs: 30 * 60_000, memoryCeilingBytes: 512 * 1024 * 1024 },
        },
      },
    })).sections.find(s => s.id === 'scriptRunner')!;

    const workers = section.checks.find(c => c.label === 'Workers')!;
    expect(workers.message).toContain('? MB');
  });
});

// ─── Assistant section (Lisa) ───────────────────────────────────────────────

/** Build a fully-populated AssistantProbeResult with sensible defaults.
 *  Tests override individual fields via the deep-partial-style helper
 *  inside their own bodies. */
function makeAssistantProbe(overrides: Partial<AssistantProbeResult> = {}): AssistantProbeResult {
  return {
    initialised:   true,
    corpusEntries: 394,
    storage: {
      indexLoaded:     true,
      threadsIndexed:  0,
      threadsReadable: 0,
      totalBytes:      0,
    },
    connections: {
      count: 0,
    },
    settings: {
      maxIterations:     8,
      parallelToolCalls: true,
    },
    ...overrides,
  };
}

describe('collectBackendDiagnostics — Assistant section', () => {
  test('emits a single "Not probed" info row when assistantProbe is undefined', () => {
    const section = collectBackendDiagnostics(makeDeps()).sections.find(s => s.id === 'assistant')!;
    expect(section.checks).toHaveLength(1);
    const only = section.checks[0]!;
    expect(only).toMatchObject({ status: 'info', label: 'Status' });
    expect(only.message).toContain('Not probed');
  });

  test('fails Corpus loaded when entry count is 0 (would silently hallucinate)', () => {
    const section = collectBackendDiagnostics(
      makeDeps({ assistantProbe: makeAssistantProbe({ corpusEntries: 0 }) }),
    ).sections.find(s => s.id === 'assistant')!;
    const corpus = section.checks.find(c => c.label === 'Corpus loaded')!;
    expect(corpus.status).toBe('fail');
    expect(corpus.details).toMatchObject({ corpusEntries: 0 });
  });

  test('passes Corpus loaded with the entry count in the message', () => {
    const section = collectBackendDiagnostics(
      makeDeps({ assistantProbe: makeAssistantProbe({ corpusEntries: 394 }) }),
    ).sections.find(s => s.id === 'assistant')!;
    const corpus = section.checks.find(c => c.label === 'Corpus loaded')!;
    expect(corpus.status).toBe('pass');
    expect(corpus.message).toContain('394');
  });

  test('fails Thread storage when the index is unreadable', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          storage: {
            indexLoaded: false, threadsIndexed: 0, threadsReadable: 0, totalBytes: 0,
            error: 'EACCES: permission denied',
          },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const storage = section.checks.find(c => c.label === 'Thread storage')!;
    expect(storage.status).toBe('fail');
    expect(storage.message).toContain('EACCES');
  });

  test('warns Thread storage when some threads are unreadable', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          storage: {
            indexLoaded: true, threadsIndexed: 5, threadsReadable: 3, totalBytes: 12_345,
            error: '2 thread file(s) unreadable; first error: corrupt JSON',
          },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const storage = section.checks.find(c => c.label === 'Thread storage')!;
    expect(storage.status).toBe('warn');
    expect(storage.message).toMatch(/3 of 5 threads readable/);
  });

  test('passes Thread storage on full readability', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          storage: {
            indexLoaded: true, threadsIndexed: 3, threadsReadable: 3, totalBytes: 8_192,
          },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const storage = section.checks.find(c => c.label === 'Thread storage')!;
    expect(storage.status).toBe('pass');
    expect(storage.message).toContain('3 thread(s) readable');
  });

  test('warns LLM connections when count is 0 (Lisa unable to run)', () => {
    const section = collectBackendDiagnostics(
      makeDeps({ assistantProbe: makeAssistantProbe({ connections: { count: 0 } }) }),
    ).sections.find(s => s.id === 'assistant')!;
    const conn = section.checks.find(c => c.label === 'LLM connections')!;
    expect(conn.status).toBe('warn');
    expect(conn.message).toContain('No LLM connections');
  });

  test('passes LLM connections and surfaces the default in the message', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          connections: {
            count: 2,
            defaultName:     'OpenRouter Sonnet',
            defaultModel:    'anthropic/claude-3.5-sonnet',
            defaultProvider: 'openrouter',
          },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const conn = section.checks.find(c => c.label === 'LLM connections')!;
    expect(conn.status).toBe('pass');
    expect(conn.message).toContain('OpenRouter Sonnet');
    expect(conn.message).toContain('claude-3.5-sonnet');
  });

  test('Generation defaults renders "No overrides" when all four are at defaults', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          settings: { maxIterations: 8, parallelToolCalls: true },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const gen = section.checks.find(c => c.label === 'Generation defaults')!;
    expect(gen.status).toBe('info');
    expect(gen.message).toContain('No overrides');
  });

  test('Generation defaults lists each active override', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          settings: {
            maxIterations:     12,
            temperature:       0.4,
            topP:              0.9,
            maxTokens:         2048,
            parallelToolCalls: false,
          },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const gen = section.checks.find(c => c.label === 'Generation defaults')!;
    expect(gen.message).toContain('temperature=0.4');
    expect(gen.message).toContain('top-p=0.9');
    expect(gen.message).toContain('max-tokens=2048');
    expect(gen.message).toContain('parallel-tool-calls=off');
  });

  test('Tool iterations ceiling reflects the configured value', () => {
    const section = collectBackendDiagnostics(
      makeDeps({
        assistantProbe: makeAssistantProbe({
          settings: { maxIterations: 14, parallelToolCalls: true },
        }),
      }),
    ).sections.find(s => s.id === 'assistant')!;
    const iters = section.checks.find(c => c.label === 'Tool iterations ceiling')!;
    expect(iters.status).toBe('info');
    expect(iters.message).toContain('14');
  });

  test('Initialised: info row when bootstrap has not yet run', () => {
    const section = collectBackendDiagnostics(
      makeDeps({ assistantProbe: makeAssistantProbe({ initialised: false }) }),
    ).sections.find(s => s.id === 'assistant')!;
    const init = section.checks.find(c => c.label === 'Initialised')!;
    expect(init.status).toBe('info');
  });
});
