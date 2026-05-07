/**
 * Test factories for Script objects and APIBuildDeps.
 */

import { mock } from 'bun:test';
import type { Script } from '../../src/types/script.js';
import type { APIBuildDeps } from '../../src/engine/api/shared.js';

/**
 * Create a complete Script with sensible defaults.
 * Override any field via the `overrides` parameter.
 */
export function createTestScript(overrides?: Partial<Script>): Script {
  return {
    id: 'test-script-id',
    name: 'Test Script',
    code: '',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...overrides,
  };
}

/**
 * Create a complete APIBuildDeps with sensible defaults.
 * Accepts optional overrides including nested script overrides.
 */
export function createTestDeps(
  overrides?: Partial<Omit<APIBuildDeps, 'script'>> & { script?: Partial<Script> },
): APIBuildDeps {
  const { script: scriptOverrides, ...depsOverrides } = overrides ?? {};
  return {
    script: createTestScript(scriptOverrides),
    hasPerm: () => true,
    userId: 'test-user-id',
    activeContext: {
      chatId: 'test-chat-id',
      characterId: 'test-char-id',
    },
    onToolsChanged:      mock(() => {}),
    onInjectionsChanged: mock(() => {}),
    ...depsOverrides,
  };
}
