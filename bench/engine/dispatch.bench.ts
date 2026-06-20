/**
 * In-process engine-dispatch benchmark:
 *   - buildScriptAPI rebuild cost per run (G-03 / C11-01 — the ~33-namespace
 *     api object rebuilt on every script-body dispatch);
 *   - trigger fan-out orchestration cost per event across a script-count sweep
 *     (C11-03 — the per-fire snapshot/diff work), via the in-process runner so
 *     the script body is ~no-op and the orchestration dominates.
 *
 *   bun run bench/engine/dispatch.bench.ts
 *
 * FIDELITY: in-process (no IPC, R1) — measures the engine-side CPU only;
 * the real child subprocess round-trip is bench/ipc/*.
 */

import { buildScriptAPI } from '../../src/engine/executor.js';
import { TriggerRegistry, type TriggerDeps } from '../../src/engine/trigger-registry.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { setActiveContext } from '../../src/engine/binding.js';
import type { Script } from '../../src/types/script.js';
import type { BackendToFrontend } from '../../src/types/messages.js';
import { createMockSpindle } from '../../tests/_infra/mock-spindle.js';
import { InMemoryStorageAdapter } from '../../tests/_infra/mock-storage-adapter.js';
import { inProcessRunner } from '../../tests/_infra/in-process-runner.js';
import { timeBatch } from '../_harness/timer.js';
import { renderTable, fmtMs } from '../_harness/report.js';

const ALL_PERMS = [
  'chat_mutation', 'chats', 'characters', 'generation', 'interceptor', 'macro_interceptor',
  'cors_proxy', 'ui_panels', 'ephemeral_storage', 'world_books', 'databanks', 'personas',
  'presets', 'regex_scripts', 'context_handler', 'tools', 'push_notification', 'event_tracking',
  'app_manipulation', 'images', 'image_gen', 'oauth', 'web_search', 'memories',
];

function makeScript(id: string, code = ''): Script {
  return {
    id, name: id, code, enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['TEST_EVENT'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}

async function main(): Promise<void> {
  (globalThis as { spindle?: unknown }).spindle = createMockSpindle();
  console.log('\n=== engine dispatch (in-process; R1: no IPC) ===\n');

  // 1. buildScriptAPI — full rebuild of all api namespaces (all perms granted).
  const script = makeScript('build-bench');
  const opts = { grantedPermissions: new Set(ALL_PERMS), userId: 'bench-user' };
  const buildMs = await timeBatch(2000, () => {
    buildScriptAPI(script, opts);
  });
  console.log(`buildScriptAPI — rebuilt per script run (G-03 / C11-01): ${fmtMs(buildMs)} / call`);

  // 2. trigger fan-out — register N scripts on one event, fire it, time the
  //    per-fire orchestration (binding gate + 6 pre-snapshots + dispatch + 6 post-diffs).
  setActiveContext({ chatId: 'bench-chat', characterId: 'bench-char' });
  const rows: string[][] = [];
  for (const N of [10, 50, 100]) {
    (globalThis as { spindle?: unknown }).spindle = createMockSpindle();
    const storage = new ScriptStorage(new InMemoryStorageAdapter(), () => 'bench-user');
    await storage.load();
    const deps: TriggerDeps = {
      grantedPermissions: new Set(ALL_PERMS), userId: 'bench-user',
      scriptStorage: storage, scriptTimeoutMs: 5_000,
    };
    const registry = new TriggerRegistry(() => deps, (_m: BackendToFrontend) => {}, inProcessRunner);
    for (let i = 0; i < N; i++) {
      const s = makeScript(`script-${i}`);
      await storage.store.create(s);
      await registry.register(s);
    }
    const onMock = (globalThis as unknown as { spindle: { on: { mock: { calls: unknown[][] } } } }).spindle.on;
    const handlers = onMock.mock.calls
      .filter((c) => c[0] === 'TEST_EVENT')
      .map((c) => c[1] as (p: unknown) => Promise<void>);
    const fireMs = await timeBatch(20, async () => {
      await Promise.all(handlers.map((h) => h({ __event: 'TEST_EVENT' })));
    });
    rows.push([`${N}`, fmtMs(fireMs), fmtMs(fireMs / N), `${handlers.length}`]);
  }
  console.log('\ntrigger fan-out — one event to N scripts (in-process body; per-fire orchestration, C11-03):');
  console.log(renderTable(['scripts', 'ms / fire (all N)', 'ms / script', 'handlers'], rows));

  console.log('\n[ok] engine dispatch bench complete.\n');
}

await main();
