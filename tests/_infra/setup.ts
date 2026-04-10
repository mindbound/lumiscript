/**
 * Test preload — executed before every test file via bunfig.toml.
 *
 * Installs a fresh mock spindle on globalThis and resets all module-level
 * singletons so each test starts with a clean slate.
 */

import { beforeEach } from 'bun:test';
import { createMockSpindle } from './mock-spindle.js';

// Singleton reset imports
import { clearAll as clearInjections } from '../../src/engine/injection-store.js';
import { clearAll as clearTools } from '../../src/engine/tool-store.js';
import { clearAll as clearBroadcast } from '../../src/engine/broadcast-bus.js';
import { resetContext } from '../../src/engine/binding.js';
import { executionStatusStore } from '../../src/engine/execution-status.js';

beforeEach(() => {
  // Install fresh spindle mock on globalThis so `declare const spindle` resolves
  (globalThis as any).spindle = createMockSpindle();

  // Reset all module-level singletons
  clearInjections();
  clearTools();
  clearBroadcast();
  resetContext();
  executionStatusStore.clear();
});
