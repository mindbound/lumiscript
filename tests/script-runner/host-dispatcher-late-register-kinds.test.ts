/**
 * v0.26.1 — late-register-handler dual-update tests for the OTHER kinds
 * with run-tracking sets: tool, macroInterceptor, contentProcessor.
 *
 * The macro case is covered in `host-dispatcher-late-register.test.ts`.
 * This file pins the parallel behavior for the other three so the
 * "I forgot which Set field this kind maps to" regression class is
 * caught at PR time.
 *
 * Uses the `setupLateRegisterScenario` fixture — see
 * `tests/_infra/long-running-script.ts` for the canonical test shape.
 *
 * For background see:
 *   - `notes/step-2-timing-model.md` (invariants I1-I4 in particular)
 *   - `notes/post-mortem-v0.26.1-late-ipc-bugs.md` (the saga that
 *     produced the dual-update fix)
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { setupLateRegisterScenario } from '../_infra/long-running-script.js';
import { clearAll as clearMacroStore, getMacro } from '../../src/engine/macro-store.js';
import { listNamesByScriptId as listToolNamesByScript, clearAll as clearToolStore } from '../../src/engine/tool-store.js';
import { clearByScriptId as clearMacroInterceptorsByScript } from '../../src/engine/macro-interceptor-registry.js';
import { clearByScriptId as clearContentProcessorsByScript } from '../../src/engine/message-content-processor-registry.js';

beforeEach(() => {
  clearMacroStore();
  clearToolStore();
  clearMacroInterceptorsByScript('script-A');
  clearContentProcessorsByScript('script-A');
});

describe('host-dispatcher: late register-handler dual-update — tool kind', () => {
  test('fallback dual-updates: BOTH originating run AND active run tools sets receive the name', async () => {
    const scn = await setupLateRegisterScenario();

    await scn.sendLateToolRegister('my-tool');

    expect(scn.run2.tools.has('my-tool')).toBe(true);  // canonical via active.api
    expect(scn.run1.tools.has('my-tool')).toBe(true);  // dual-update fallback path

    // Tool is in the canonical store, owned by script-A.
    expect(listToolNamesByScript('script-A')).toContain('my-tool');

    // Other Sets untouched.
    expect(scn.run1.macros.size).toBe(0);
    expect(scn.run2.macros.size).toBe(0);
  });
});

describe('host-dispatcher: late register-handler dual-update — macroInterceptor kind', () => {
  test('fallback dual-updates: BOTH originating run AND active run macroInterceptor sets receive the canonical id', async () => {
    const scn = await setupLateRegisterScenario();

    // The proxy sets options.id = handlerId, so canonicalHandle.id === handlerId.
    const handlerId = 'late-interceptor-1';
    await scn.sendLateMacroInterceptorRegister(handlerId);

    expect(scn.run2.macroInterceptors.has(handlerId)).toBe(true);
    expect(scn.run1.macroInterceptors.has(handlerId)).toBe(true);

    // Other Sets untouched.
    expect(scn.run1.tools.size).toBe(0);
    expect(scn.run1.macros.size).toBe(0);
  });
});

describe('host-dispatcher: late register-handler dual-update — contentProcessor kind', () => {
  test('fallback dual-updates: BOTH originating run AND active run contentProcessor sets receive the canonical id', async () => {
    const scn = await setupLateRegisterScenario();

    const handlerId = 'late-processor-1';
    await scn.sendLateContentProcessorRegister(handlerId);

    expect(scn.run2.contentProcessors.has(handlerId)).toBe(true);
    expect(scn.run1.contentProcessors.has(handlerId)).toBe(true);

    // Other Sets untouched — particularly important: contentProcessor and
    // macroInterceptor share a Set field shape but are distinct surfaces.
    expect(scn.run1.macroInterceptors.size).toBe(0);
    expect(scn.run2.macroInterceptors.size).toBe(0);
  });
});

describe('host-dispatcher: late register-handler dual-update — fields are isolated by kind', () => {
  test('macro/tool/macroInterceptor/contentProcessor all populate the right Set field', async () => {
    // Sanity test pinning the dual-update mapping. Each kind populates ONE
    // tracking-Set field per run; the others stay untouched.
    const scn = await setupLateRegisterScenario();

    await scn.sendLateMacroRegister('macro-1');
    await scn.sendLateToolRegister('tool-1');
    await scn.sendLateMacroInterceptorRegister('intc-1');
    await scn.sendLateContentProcessorRegister('proc-1');

    // run-1 (originating, dual-updated):
    expect(Array.from(scn.run1.macros)).toEqual(['macro-1']);
    expect(Array.from(scn.run1.tools)).toEqual(['tool-1']);
    expect(Array.from(scn.run1.macroInterceptors)).toEqual(['intc-1']);
    expect(Array.from(scn.run1.contentProcessors)).toEqual(['proc-1']);
    expect(scn.run1.rpcEndpoints.size).toBe(0);  // not a register-handler kind

    // run-2 (active, populated by canonical):
    expect(Array.from(scn.run2.macros)).toEqual(['macro-1']);
    expect(Array.from(scn.run2.tools)).toEqual(['tool-1']);
    expect(Array.from(scn.run2.macroInterceptors)).toEqual(['intc-1']);
    expect(Array.from(scn.run2.contentProcessors)).toEqual(['proc-1']);
    expect(scn.run2.rpcEndpoints.size).toBe(0);

    // Sanity: macro made it into the store too.
    expect(getMacro('macro-1')).toBeDefined();
  });
});
