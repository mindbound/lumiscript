/**
 * ============================================================================
 * Cross-root "open assistant" event bus
 * ============================================================================
 * `LumiScriptPanel` (dock) and `SettingsPanel` (settings mount) are mounted
 * as TWO separate `createRoot` trees in `frontend.tsx`. They share message-
 * bus plumbing via `virtualOnBackendMessage`, but they have no common React
 * parent — so the AssistantModal's `open` state cannot be lifted to a
 * shared ancestor.
 *
 * The modal lives in `SettingsPanel` (its canonical home). Any other site
 * that wants to invoke it — currently: the Settings tab's own "Ask Lisa"
 * button, and the in-editor "Ask Lisa" topbar button — dispatches an
 * `ls:open-assistant` window event. `SettingsPanel` listens for it and
 * toggles its local `assistantOpen` state.
 *
 * Cross-root delivery is implicit: both React roots share `window`, so a
 * `window.dispatchEvent` from one root is observed by listeners attached
 * from the other.
 *
 * Idempotent: dispatching while the modal is already open is a no-op
 * (React state set to the same value short-circuits).
 */

export const LS_OPEN_ASSISTANT_EVENT = 'ls:open-assistant';

/**
 * Request the Lisa assistant modal to open. Safe to call from any React
 * root or vanilla DOM context — delivery is via a window-level custom
 * event. No-op if the listener isn't installed (i.e. SettingsPanel hasn't
 * mounted yet, which shouldn't happen in practice since both roots mount
 * synchronously during `setup`).
 */
export function dispatchOpenAssistant(): void {
  window.dispatchEvent(new CustomEvent(LS_OPEN_ASSISTANT_EVENT));
}
