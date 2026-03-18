import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';

// ─── LumiScript Frontend ──────────────────────────────────────────────────
// Runs in the browser via dynamic import.
// Mounts a React 19 tree into the Spindle Dock Panel and Settings Panel.

// ─── iconToString ─────────────────────────────────────────────────────────
// Pattern for using lucide-react icons outside the React tree (e.g. raw DOM
// injection). Uses flushSync + createRoot — both already bundled via
// react-dom/client, so no extra renderer is pulled into the bundle.
//
// Usage:
//   import { flushSync } from 'react-dom';
//   import type { ReactElement } from 'react';
//   import { CheckCircle } from 'lucide-react';
//
//   function iconToString(el: ReactElement): string {
//     const div = document.createElement('div');
//     const root = createRoot(div);
//     flushSync(() => root.render(el));
//     const html = div.innerHTML;
//     root.unmount();
//     return html;
//   }
//
//   const icon = iconToString(<CheckCircle size={18} />);
//   someElement.innerHTML = icon; // safe — controlled SVG string, not user input

export function setup(ctx: SpindleFrontendContext) {
  const cleanups: (() => void)[] = [];

  // ─── CSS ────────────────────────────────────────────────────────────────
  const removeStyle = ctx.dom.addStyle(PANEL_CSS);
  cleanups.push(removeStyle);

  // ─── Backend message multiplexer ─────────────────────────────────────
  // A single Spindle onBackendMessage handler fans out to all React subtrees
  // AND the non-React UI handler below.
  const messageHandlers: Array<(msg: unknown) => void> = [];

  const unsubBackend = ctx.onBackendMessage((msg) => {
    for (const h of messageHandlers) h(msg);
  });
  cleanups.push(unsubBackend);

  const virtualOnBackendMessage = (handler: (msg: unknown) => void): (() => void) => {
    messageHandlers.push(handler);
    return () => {
      const i = messageHandlers.indexOf(handler);
      if (i !== -1) messageHandlers.splice(i, 1);
    };
  };

  const sendToBackend = (msg: FrontendToBackend) => {
    ctx.sendToBackend(msg);
  };

  // ─── Non-React UI handler (prompt / confirm) ──────────────────────────
  // Handles ui_request messages outside the React tree so that dialogs can
  // use the native browser APIs.
  // Note: toasts are now handled by spindle.toast on the backend — no
  // frontend involvement needed.
  const handleUIMessage = (raw: unknown) => {
    const msg = raw as BackendToFrontend;

    if (msg.type === 'ui_request') {
      if (msg.kind === 'prompt') {
        // Use native prompt — runs synchronously in the browser.
        const value = window.prompt(msg.message, msg.defaultValue) ?? null;
        sendToBackend({ type: 'ui_response', requestId: msg.requestId, value });
      } else if (msg.kind === 'confirm') {
        const title = msg.title ? `${msg.title}\n\n` : '';
        const confirmed = window.confirm(`${title}${msg.message}`);
        sendToBackend({ type: 'ui_response', requestId: msg.requestId, value: confirmed });
      }
    }
  };

  messageHandlers.push(handleUIMessage);
  cleanups.push(() => {
    const i = messageHandlers.indexOf(handleUIMessage);
    if (i !== -1) messageHandlers.splice(i, 1);
  });

  // ─── Dock Panel ─────────────────────────────────────────────────────────
  const panel = ctx.ui.requestDockPanel({
    edge: 'right',
    title: 'LumiScript',
    size: 420,
    minSize: 280,
    maxSize: 720,
    resizable: true,
    startCollapsed: true,
  });
  cleanups.push(() => panel.destroy());

  const panelRoot = createRoot(panel.root);
  panelRoot.render(
    <StrictMode>
      <LumiScriptPanel
        onBackendMessage={virtualOnBackendMessage}
        sendToBackend={sendToBackend}
      />
    </StrictMode>,
  );
  cleanups.push(() => panelRoot.unmount());

  // ─── Settings Panel ──────────────────────────────────────────────────────
  const settingsMount = ctx.ui.mount('settings_extensions');
  const settingsRoot = createRoot(settingsMount);
  settingsRoot.render(
    <StrictMode>
      <SettingsPanel
        onBackendMessage={virtualOnBackendMessage}
        sendToBackend={sendToBackend}
        onOpenPanel={() => panel.expand()}
      />
    </StrictMode>,
  );
  cleanups.push(() => settingsRoot.unmount());

  // ─── Teardown ──────────────────────────────────────────────────────────
  return () => {
    for (const fn of cleanups) {
      try {
        fn();
      } catch {
        // ignore cleanup errors
      }
    }
    ctx.dom.cleanup();
  };
}
