import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PANEL_CSS } from './components/styles.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { FrontendToBackend } from './types/messages.js';

// ─── LumiScript Frontend ──────────────────────────────────────────────────
// Runs in the browser via dynamic import.
// Mounts a React 19 tree into the Spindle Dock Panel and Settings Panel.

export function setup(ctx: SpindleFrontendContext) {
  const cleanups: (() => void)[] = [];

  // ─── CSS ────────────────────────────────────────────────────────────────
  const removeStyle = ctx.dom.addStyle(PANEL_CSS);
  cleanups.push(removeStyle);

  // ─── Backend message multiplexer ─────────────────────────────────────
  // A single Spindle onBackendMessage handler fans out to all React subtrees.
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
