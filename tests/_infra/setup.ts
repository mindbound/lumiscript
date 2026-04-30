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
import { clearAllCommandHandlers } from '../../src/engine/api/commands.js';
import { __reset as resetDOMRegistry } from '../../src/engine/dom-registry.js';
import { __reset as resetMacroInterceptorRegistry } from '../../src/engine/macro-interceptor-registry.js';
import { __reset as resetMessageContentProcessorRegistry } from '../../src/engine/message-content-processor-registry.js';
// Phase 11.A — script-runner module-state resets so dispatcher / api-proxy
// tests don't leak between cases. Importing these here pulls the modules
// into the test runtime even for tests that don't exercise the script-runner
// directly; the cost is one-time-per-process and the modules have no
// init-time side effects (only function bodies touch spindle.*).
import { __resetForTests as resetHostDispatcher } from '../../src/script-runner/host-dispatcher.js';
import { __resetForTests as resetApiProxy }       from '../../src/script-runner/api-proxy.js';

beforeEach(() => {
  // Install fresh spindle mock on globalThis so `declare const spindle` resolves
  (globalThis as any).spindle = createMockSpindle();

  // Reset all module-level singletons
  clearInjections();
  clearTools();
  clearBroadcast();
  resetContext();
  executionStatusStore.clear();
  clearAllCommandHandlers();
  resetDOMRegistry();
  resetMacroInterceptorRegistry();
  resetMessageContentProcessorRegistry();
  // Script-runner subsystem — Phase 11.A
  resetHostDispatcher();
  resetApiProxy();
});
