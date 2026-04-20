import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { FrontendToBackend } from './types/messages.js';
import { installDOMHandler } from './dom-handler.js';
import { installModalHandler } from './modal-handler.js';

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

  // ─── DOM injection handler ──────────────────────────────────────────────
  const cleanupDOM = installDOMHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupDOM);

  // ─── Advanced modal handler ─────────────────────────────────────────────
  // Translates backend `ls_modal_*` commands into `ctx.ui.showModal(...)`
  // calls and echoes dismissal back to the backend. Shares the DOM element
  // map with installDOMHandler — the modal body is bound under the
  // `rootElementId` so `api.ui.dom.*` messages targeting it "just work".
  const cleanupModal = installModalHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupModal);

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
