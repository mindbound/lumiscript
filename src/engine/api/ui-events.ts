/**
 * ============================================================================
 * LUMISCRIPT — UI EVENTS API
 * ============================================================================
 * api.ui.events — reactive Lumiverse UI state (keyboard / drawer / settings).
 * Free tier. Assembled into `api.ui` alongside `dom` / `components`.
 *
 * Two mechanisms, both backed by `engine/ui-event-registry.ts`:
 *   - **Snapshot getters** (`getKeyboardState` …) resolve with the registry's
 *     cached latest state — no frontend round-trip. The frontend keeps the
 *     cache fresh by pushing `ls_ui_*_changed` on connect + on every change.
 *   - **Subscriptions** (`onKeyboardChange` …) register a handler into the
 *     registry and return an unsubscribe fn.
 *
 * NOTE: for child-runtime scripts the subscription path runs through the
 * api-proxy's `register-handler` IPC (the proxy registers a wrapper that fires
 * the script's closure), and the host dispatcher registers that wrapper into
 * the registry directly. The `onXChange` methods here are the canonical /
 * in-process registrations (same registry), kept for type completeness.
 */

import type {
  LumiScriptAPI,
  UIKeyboardState,
  UIDrawerState,
  UISettingsState,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import {
  getKeyboardState,   addKeyboardHandler,
  getDrawerState,     addDrawerHandler,
  getSettingsState,   addSettingsHandler,
} from '../ui-event-registry.js';

export function buildUIEventsAPI(deps: APIBuildDeps): LumiScriptAPI['ui']['events'] {
  const scriptId = deps.script.id;
  return {
    getKeyboardState: (): Promise<UIKeyboardState> => Promise.resolve(getKeyboardState()),
    onKeyboardChange: (handler: (state: UIKeyboardState) => void): (() => void) =>
      addKeyboardHandler(scriptId, handler),

    getDrawerState: (): Promise<UIDrawerState> => Promise.resolve(getDrawerState()),
    onDrawerChange: (handler: (state: UIDrawerState) => void): (() => void) =>
      addDrawerHandler(scriptId, handler),

    getSettingsState: (): Promise<UISettingsState> => Promise.resolve(getSettingsState()),
    onSettingsChange: (handler: (state: UISettingsState) => void): (() => void) =>
      addSettingsHandler(scriptId, handler),
  };
}
