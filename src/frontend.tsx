import type { SpindleFrontendContext, SpindleDockPanelHandle } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
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
  // The edge (left/right) is controlled by `LumiScriptSettings.dockPanelEdge`,
  // which changes live: when the user flips the setting, the current panel is
  // destroyed and a fresh one is requested on the new edge. React state inside
  // the panel is reset — acceptable because the user is in the Settings panel
  // (not the LS panel) at the moment they change this. Settings arrive
  // asynchronously via `settings_updated`, so we mount with the default edge
  // at setup time and remount once if the stored value differs.
  let currentPanel: SpindleDockPanelHandle | null = null;
  let currentRoot:  Root                    | null = null;
  let currentEdge:  'left' | 'right'               = 'right';

  function mountDockPanel(edge: 'left' | 'right') {
    // Teardown previous instance (if any) before claiming the new edge —
    // the host enforces "1 dock panel per edge per extension" so we can't
    // leave the old one live while requesting the new one.
    if (currentRoot)  { try { currentRoot.unmount(); } catch { /* ignore */ } currentRoot  = null; }
    if (currentPanel) { try { currentPanel.destroy(); } catch { /* ignore */ } currentPanel = null; }

    currentPanel = ctx.ui.requestDockPanel({
      edge,
      title: 'LumiScript',
      size: 420,
      minSize: 280,
      maxSize: 720,
      resizable: true,
      startCollapsed: true,
    });
    currentRoot = createRoot(currentPanel.root);
    currentRoot.render(
      <StrictMode>
        <LumiScriptPanel
          onBackendMessage={virtualOnBackendMessage}
          sendToBackend={sendToBackend}
        />
      </StrictMode>,
    );
    currentEdge = edge;
  }

  // Initial mount with the default edge. If the user's stored setting is
  // `'left'`, the subsequent `settings_updated` message below will trigger
  // a one-time remount onto the correct edge (~100ms flash at cold start,
  // acceptable cost).
  mountDockPanel('right');

  // Single cleanup covers whatever the current panel + root are at teardown
  // time — remounting replaces these refs in place, so teardown always hits
  // the live pair.
  cleanups.push(() => {
    if (currentRoot)  { try { currentRoot.unmount(); } catch { /* ignore */ } }
    if (currentPanel) { try { currentPanel.destroy(); } catch { /* ignore */ } }
  });

  // Re-mount on `dockPanelEdge` change. We subscribe to `settings_updated`
  // and only act when the edge actually differs from what we mounted last —
  // other setting changes (font size, autosave delay, etc.) don't need to
  // tear down the dock panel.
  const unsubDockSettings = virtualOnBackendMessage((raw) => {
    const msg = raw as BackendToFrontend;
    if (msg.type !== 'settings_updated') return;
    const edge = msg.settings.dockPanelEdge === 'left' ? 'left' : 'right';
    if (edge !== currentEdge) mountDockPanel(edge);
  });
  cleanups.push(unsubDockSettings);

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
