/**
 * Test data factory functions for creating common test fixtures.
 */

import type { InjectionEntry } from '../../src/engine/injection-store.js';
import type { ToolEntry } from '../../src/engine/tool-store.js';
import type { Script } from '../../src/types/script.js';
import { mock } from 'bun:test';

/** Create an InjectionEntry with defaults. */
export function createInjectionEntry(overrides?: Partial<InjectionEntry>): InjectionEntry {
  return {
    id: 'inj-1',
    content: 'test injection content',
    mode: 'intercept',
    role: 'system',
    depth: 0,
    ephemeral: false,
    scriptId: 'script-1',
    ...overrides,
  };
}

/** Create a ToolEntry with defaults. */
export function createToolEntry(overrides?: Partial<ToolEntry>): ToolEntry {
  return {
    name: 'test-tool',
    displayName: 'Test Tool',
    description: 'A test tool',
    parameters: { type: 'object', properties: {} },
    councilEligible: false,
    handler: mock(() => 'result'),
    scriptId: 'script-1',
    scriptName: 'Test Script',
    ...overrides,
  };
}

/** Create a minimal Script object for storage tests. */
export function createScript(overrides?: Partial<Script>): Script {
  return {
    id: 'test-script-id',
    name: 'Test Script',
    code: 'console.log("hello")',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['MESSAGE_SENT'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...overrides,
  };
}
