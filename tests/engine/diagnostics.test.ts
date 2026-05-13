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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scriptStorage  = { getScripts: () => scripts } as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    expect(alive.message).toContain('p-abc');
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
