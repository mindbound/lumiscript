import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { FrontendToBackend } from './types/messages.js';
import { installDOMHandler } from './dom-handler.js';
import { installModalHandler } from './modal-handler.js';
import { installContextMenuHandler } from './context-menu-handler.js';
import { installInputBarActionHandler } from './input-bar-action-handler.js';
import { installFloatWidgetHandler } from './float-widget-handler.js';
import { installDrawerTabHandler } from './drawer-tab-handler.js';

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

  // ─── Context-menu handler ───────────────────────────────────────────────
  // Stateless request-response proxy for `api.ui.showContextMenu` — receives
  // `ls_context_menu_show`, calls `ctx.ui.showContextMenu`, echoes the
  // selected key (or null) back via `ls_context_menu_result`.
  const cleanupContextMenu = installContextMenuHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupContextMenu);

  // ─── Input-bar action handler ───────────────────────────────────────────
  // Lifecycle proxy for `api.ui.registerInputBarAction`. Maintains a local
  // map of Spindle handles so set-label / set-enabled / destroy messages
  // can route to the right one. Click events are echoed back via
  // `ls_input_bar_action_click` for the backend registry to fan out.
  const cleanupInputBarActions = installInputBarActionHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupInputBarActions);

  // ─── Float widget handler ───────────────────────────────────────────────
  // Lifecycle proxy for `api.ui.createFloatWidget`. Binds each widget's
  // `.root` HTMLElement into the shared DOM element map so content ops
  // pipe through the existing `dom_*` pipeline. Drag-end coordinates are
  // echoed via `ls_float_widget_drag_end` so the backend's position cache
  // stays authoritative and script `onDragEnd` handlers fire.
  const cleanupFloatWidgets = installFloatWidgetHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupFloatWidgets);

  // ─── Drawer tab handler ─────────────────────────────────────────────────
  // Lifecycle proxy for `api.ui.registerDrawerTab`. Same root-element
  // binding trick as modals/widgets — the tab body is bound under
  // `rootElementId` so `dom_*` messages target it via the existing
  // pipeline. Activation events are echoed via `ls_drawer_tab_activated`.
  const cleanupDrawerTabs = installDrawerTabHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupDrawerTabs);

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
