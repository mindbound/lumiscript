/**
 * Test preload — executed before every test file via bunfig.toml.
 *
 * Installs a fresh mock spindle on globalThis and resets all module-level
 * singletons so each test starts with a clean slate.
 */

import { beforeEach, mock } from 'bun:test';
import { createMockSpindle } from './mock-spindle.js';

// Singleton reset imports
import { clearAll as clearInjections } from '../../src/engine/injection-store.js';
import { clearAll as clearTools } from '../../src/engine/tool-store.js';
import { clearAll as clearMacros } from '../../src/engine/macro-store.js';
import { clearAll as clearRpc } from '../../src/engine/rpc-store.js';
import { clearAll as clearBroadcast } from '../../src/engine/broadcast-bus.js';
import { _clearDbCache } from '../../src/engine/db-cache.js';
import { resetContext } from '../../src/engine/binding.js';
import { executionStatusStore } from '../../src/engine/execution-status.js';
import { clearAllCommandHandlers } from '../../src/engine/api/commands.js';
import { __reset as resetDOMRegistry } from '../../src/engine/dom-registry.js';
import { __reset as resetUiEventRegistry } from '../../src/engine/ui-event-registry.js';
import { __resetComponentValuesForTests } from '../../src/engine/api/components.js';
import { __reset as resetMacroInterceptorRegistry } from '../../src/engine/macro-interceptor-registry.js';
import { __reset as resetMessageContentProcessorRegistry } from '../../src/engine/message-content-processor-registry.js';
// v1.0.0-rc.3+ — additional pinning-registry resets so eviction-pinning
// tests don't see leakage from prior tests in registries that previously
// weren't part of the per-test reset baseline. Hygiene-only; tests that
// don't exercise these registries see no behavioural change.
import { __reset as resetDrawerTabRegistry }            from '../../src/engine/drawer-tab-registry.js';
import { __reset as resetInputBarActionRegistry }      from '../../src/engine/input-bar-action-registry.js';
import { __reset as resetWorldInfoInterceptorRegistry } from '../../src/engine/world-info-interceptor-registry.js';
import { __reset as resetMessageTagHandlerRegistry }    from '../../src/engine/message-tag-handler-registry.js';
import { __reset as resetFloatWidgetRegistry }         from '../../src/engine/float-widget-registry.js';
import { __reset as resetAppMountRegistry }            from '../../src/engine/app-mount-registry.js';
import { __reset as resetAdvancedModalRegistry }       from '../../src/engine/advanced-modal-registry.js';
import { __resetForTests as resetThemeStore }           from '../../src/engine/theme-store.js';
// Phase 11.A — script-runner module-state resets so dispatcher / api-proxy
// tests don't leak between cases. Importing these here pulls the modules
// into the test runtime even for tests that don't exercise the script-runner
// directly; the cost is one-time-per-process and the modules have no
// init-time side effects (only function bodies touch spindle.*).
import { __resetForTests as resetHostDispatcher } from '../../src/script-runner/host-dispatcher.js';
import { __resetForTests as resetApiProxy }       from '../../src/script-runner/api-proxy.js';
// child-entry holds module-level `activeProxies` (and the unhandledRejection
// rate-limit state). These persist across test FILES in the shared bun
// process; without a per-test reset, a seam-seeded entry (the
// unhandledRejection-guard test's `_setActiveProxyForTests` stub) survives
// into whatever file bun runs next. The broadcast routers iterate every
// `activeProxies` entry, so a leaked stub there used to crash an e2e file's
// `routeApiResponse` on CI (filesystem-order-dependent — only reproduced when
// the guard file sorted before the e2e file). Reset both here so child-entry
// state is isolated per test, mirroring host-dispatcher / api-proxy.
import {
  _clearActiveProxiesForTests,
  _resetUnhandledRejectionRateStateForTests,
  _setEngineModeForTests,
} from '../../src/script-runner/child-entry.js';

// `dom-handler.ts` imports DOMPurify at module load — before any per-file DOM env
// (`useDOM()`) registers a window — so its DOMPurify has no DOM and `.sanitize` is
// undefined (throws). Mock `dompurify` to a passthrough at preload time so the
// sanitizer-touching handlers (scoped `dom_inject` / `dom_update`) can be exercised.
// Safe globally: no test exercises real `DOMPurify.sanitize` — the strip behaviour is
// covered by the pure `buildSanitizerStripDetail` tests (synthetic entries). Test
// runtime only; the shipped frontend bundle uses real DOMPurify.
mock.module('dompurify', () => ({
  default: {
    sanitize: (html: string) => String(html),
    removed: [],
  },
}));

beforeEach(() => {
  // Install fresh spindle mock on globalThis so `declare const spindle` resolves
  (globalThis as any).spindle = createMockSpindle();

  // Reset all module-level singletons
  clearInjections();
  clearTools();
  clearMacros();
  clearRpc();
  clearBroadcast();
  resetContext();
  executionStatusStore.clear();
  clearAllCommandHandlers();
  resetDOMRegistry();
  resetUiEventRegistry();
  __resetComponentValuesForTests();
  resetMacroInterceptorRegistry();
  resetMessageContentProcessorRegistry();
  resetDrawerTabRegistry();
  resetInputBarActionRegistry();
  resetWorldInfoInterceptorRegistry();
  resetMessageTagHandlerRegistry();
  resetFloatWidgetRegistry();
  resetAppMountRegistry();
  resetAdvancedModalRegistry();
  resetThemeStore();
  // Script-runner subsystem — Phase 11.A
  resetHostDispatcher();
  resetApiProxy();
  // child-entry module-level state (activeProxies + rejection rate-limit).
  // Prevents cross-file leakage of seam-seeded proxy stubs (see import note).
  _clearActiveProxiesForTests();
  _resetUnhandledRejectionRateStateForTests();
  // #11 — clear the per-process engine-mode override so a parity test that
  // pins engineMode='quickjs' can't leak into the next file's runs.
  _setEngineModeForTests(undefined);
  // api.db collection cache (module-global) — clear so a cached collection from
  // one test can't leak into the next.
  _clearDbCache();
});
