import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import { ErrorBoundary } from './components/common/ErrorBoundary.js';
import type { FrontendToBackend } from './types/messages.js';
import { installDOMHandler } from './dom-handler.js';
import { installModalHandler } from './modal-handler.js';
import { installContextMenuHandler } from './context-menu-handler.js';
import { installPickFileHandler } from './pick-file-handler.js';
import { installInputBarActionHandler } from './input-bar-action-handler.js';
import { installTagInterceptorHandler } from './tag-interceptor-handler.js';
import { installFloatWidgetHandler } from './float-widget-handler.js';
import { installAppMountHandler } from './app-mount-handler.js';
import { installDrawerTabHandler } from './drawer-tab-handler.js';
import { setHostComponents } from './host-ui.js';

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

  // ─── File-picker handler ────────────────────────────────────────────────
  // Stateless request-response proxy for `api.ui.pickFile` — receives
  // `ls_pick_file_request`, calls `ctx.uploads.pickFile`, base64-encodes the
  // selected file bytes, and echoes them back via `ls_pick_file_result`.
  const cleanupPickFile = installPickFileHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupPickFile);

  // ─── UI events bridge (api.ui.events) ───────────────────────────────────
  // Subscribe ONCE to the host's reactive UI state and forward to the backend,
  // which caches the latest (for `api.ui.events.getX` snapshots) and fans out
  // to script subscribers. Push the initial snapshot on connect so the cache
  // isn't stale before the first change. Guarded for older hosts that predate
  // `ctx.ui.events`.
  const uiEvents = ctx.ui?.events;
  if (uiEvents) {
    try {
      sendToBackend({ type: 'ls_ui_keyboard_changed', state: uiEvents.getKeyboardState() });
      sendToBackend({ type: 'ls_ui_drawer_changed',   state: uiEvents.getDrawerState() });
      sendToBackend({ type: 'ls_ui_settings_changed', state: uiEvents.getSettingsState() });
    } catch { /* initial snapshot best-effort */ }
    cleanups.push(uiEvents.onKeyboardChange((state) => sendToBackend({ type: 'ls_ui_keyboard_changed', state })));
    cleanups.push(uiEvents.onDrawerChange((state) => sendToBackend({ type: 'ls_ui_drawer_changed', state })));
    cleanups.push(uiEvents.onSettingsChange((state) => sendToBackend({ type: 'ls_ui_settings_changed', state })));
  }

  // ─── Input-bar action handler ───────────────────────────────────────────
  // Lifecycle proxy for `api.ui.registerInputBarAction`. Maintains a local
  // map of Spindle handles so set-label / set-enabled / destroy messages
  // can route to the right one. Click events are echoed back via
  // `ls_input_bar_action_click` for the backend registry to fan out.
  const cleanupInputBarActions = installInputBarActionHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupInputBarActions);

  // ─── Message-tag interceptor handler ────────────────────────────────────
  // Lifecycle proxy for `api.chat.onMessageTag`. Registers host
  // `ctx.messages.registerTagInterceptor`s and echoes matched COMPLETED tags
  // back via `ls_tag_interceptor_fired` (streaming filtered + deduped).
  const cleanupTagInterceptors = installTagInterceptorHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupTagInterceptors);

  // ─── Float widget handler ───────────────────────────────────────────────
  // Lifecycle proxy for `api.ui.createFloatWidget`. Binds each widget's
  // `.root` HTMLElement into the shared DOM element map so content ops
  // pipe through the existing `dom_*` pipeline. Drag-end coordinates are
  // echoed via `ls_float_widget_drag_end` so the backend's position cache
  // stays authoritative and script `onDragEnd` handlers fire.
  const cleanupFloatWidgets = installFloatWidgetHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupFloatWidgets);

  // ─── App mount handler ──────────────────────────────────────────────────
  // Lifecycle proxy for `api.ui.mountApp`. Binds each mount's `.root` element
  // into the shared DOM map (same trick as float widgets), echoes the
  // Option-B `ls_app_mount_created` confirm, and handles set-visible / destroy.
  const cleanupAppMounts = installAppMountHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupAppMounts);

  // ─── Drawer tab handler ─────────────────────────────────────────────────
  // Lifecycle proxy for `api.ui.registerDrawerTab`. Same root-element
  // binding trick as modals/widgets — the tab body is bound under
  // `rootElementId` so `dom_*` messages target it via the existing
  // pipeline. Activation events are echoed via `ls_drawer_tab_activated`.
  const cleanupDrawerTabs = installDrawerTabHandler(ctx, virtualOnBackendMessage, sendToBackend);
  cleanups.push(cleanupDrawerTabs);

  // ─── Frontend-ready signal ──────────────────────────────────────────────
  // Fire AFTER every sub-handler above has subscribed to the message bus,
  // so any replay messages the backend fans out in response are guaranteed
  // to reach a subscribed handler. Replay messages are routed by `type`
  // (dom_*, ls_input_bar_action_register, ls_drawer_tab_register, etc.),
  // so every installXxxHandler above must have run first.
  //
  // The backend distinguishes two cases:
  //   - First-ever `frontend_ready` (`triggersInitialized: false`): cold
  //     start. Load storage, init triggers, fire `ls:startup`. User scripts
  //     register their UI as usual — registries are empty before this.
  //   - Subsequent `frontend_ready` (`triggersInitialized: true`): browser
  //     refresh. Replay every live registry entry so actions, tabs,
  //     widgets, and DOM content come back without user-script code
  //     re-running.
  sendToBackend({ type: 'frontend_ready' });

  // Park the host shared-component factory so the (ctx-free) React trees can
  // reach it via `getHostComponents()` (see host-ui.ts). Older hosts may not
  // expose `ctx.components` — the accessor stays null and callers fall back.
  setHostComponents(ctx.components);

  // ─── Dock Panel ─────────────────────────────────────────────────────────
  // We request `edge: 'right'` unconditionally — Lumiverse upstream
  // (commit 4c3a2bd, Apr 2026) rewrites horizontal edges to the user's
  // chosen side via the native Spindle Dock placement control, so an
  // extension-level override would only compete with that setting.
  const dockPanel = ctx.ui.requestDockPanel({
    edge: 'right',
    title: 'LumiScript',
    size: 420,
    minSize: 280,
    maxSize: 720,
    resizable: true,
    startCollapsed: true,
  });
  const dockRoot = createRoot(dockPanel.root);
  dockRoot.render(
    <StrictMode>
      <ErrorBoundary label="LumiScript panel">
        <LumiScriptPanel
          onBackendMessage={virtualOnBackendMessage}
          sendToBackend={sendToBackend}
        />
      </ErrorBoundary>
    </StrictMode>,
  );
  cleanups.push(() => {
    try { dockRoot.unmount();   } catch { /* ignore */ }
    try { dockPanel.destroy();  } catch { /* ignore */ }
  });

  // ─── Settings Panel ──────────────────────────────────────────────────────
  const settingsMount = ctx.ui.mount('settings_extensions');
  const settingsRoot = createRoot(settingsMount);
  settingsRoot.render(
    <StrictMode>
      <ErrorBoundary label="LumiScript settings">
        <SettingsPanel
          onBackendMessage={virtualOnBackendMessage}
          sendToBackend={sendToBackend}
        />
      </ErrorBoundary>
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
