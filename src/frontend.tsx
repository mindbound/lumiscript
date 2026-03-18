import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import { StrictMode } from 'react';
import type { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { PANEL_CSS } from './components/styles/index.js';
import { LumiScriptPanel } from './components/LumiScriptPanel.js';
import { SettingsPanel } from './components/settings/SettingsPanel.js';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';

// ─── LumiScript Frontend ──────────────────────────────────────────────────
// Runs in the browser via dynamic import.
// Mounts a React 19 tree into the Spindle Dock Panel and Settings Panel.

// ─── Toast constants ──────────────────────────────────────────────────────
// Durations match Lumiverse's native ToastContainer defaults.
const TOAST_DURATIONS: Record<string, number> = {
  success: 4000,
  info:    5000,
  warning: 6000,
  error:   8000,
};

// Render a lucide-react icon to an SVG string using flushSync + createRoot.
// Both are already bundled via react-dom/client — no extra renderer needed.
// Runs once at module init; the detached div is discarded immediately after.
function iconToString(el: ReactElement): string {
  const div = document.createElement('div');
  const root = createRoot(div);
  flushSync(() => root.render(el));
  const html = div.innerHTML;
  root.unmount();
  return html;
}

const TOAST_ICONS: Record<string, string> = {
  success: iconToString(<CheckCircle   size={18} />),
  warning: iconToString(<AlertTriangle size={18} />),
  error:   iconToString(<XCircle       size={18} />),
  info:    iconToString(<Info          size={18} />),
};

const CLOSE_ICON = iconToString(<X size={14} />);

export function setup(ctx: SpindleFrontendContext) {
  const cleanups: (() => void)[] = [];

  // ─── CSS ────────────────────────────────────────────────────────────────
  const removeStyle = ctx.dom.addStyle(PANEL_CSS);
  cleanups.push(removeStyle);

  // ─── Toast container ─────────────────────────────────────────────────────
  // A persistent bottom-right stack; toasts are appended as children.
  // ctx.dom.createElement() creates a Spindle-tracked element — it will be
  // removed automatically by ctx.dom.cleanup() on extension teardown.
  const toastContainer = ctx.dom.createElement('div', { class: 'ls-toast-container' });
  document.body.appendChild(toastContainer);
  cleanups.push(() => { try { toastContainer.remove(); } catch { /* already removed */ } });

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

  // ─── Non-React UI handler (toast + prompt/confirm) ────────────────────
  // Handles ui_toast and ui_request messages outside the React tree so that
  // toasts appear in the page DOM (not inside the dock panel) and dialogs
  // can use the native browser APIs.
  const handleUIMessage = (raw: unknown) => {
    const msg = raw as BackendToFrontend;

    if (msg.type === 'ui_toast') {
      const type = msg.toastType in TOAST_DURATIONS ? msg.toastType : 'info';
      const duration = TOAST_DURATIONS[type]!;

      // Build toast element via DOM API so message text is set via textContent
      // (avoids any XSS via injected HTML even though the backend is trusted).
      const toastEl = document.createElement('div');
      toastEl.className = `ls-toast ls-toast-${type}`;
      toastEl.setAttribute('role', 'alert');
      toastEl.innerHTML = `
        <div class="ls-toast-icon">${TOAST_ICONS[type]}</div>
        <div class="ls-toast-body"><div class="ls-toast-message"></div></div>
        <button type="button" class="ls-toast-close" aria-label="Dismiss">${CLOSE_ICON}</button>
        <div class="ls-toast-progress-track">
          <div class="ls-toast-progress-bar" style="animation-duration:${duration}ms"></div>
        </div>
      `;

      // Set message via textContent — no HTML injection.
      const msgEl = toastEl.querySelector('.ls-toast-message');
      if (msgEl) msgEl.textContent = msg.message;

      toastContainer.appendChild(toastEl);

      // ── Dismiss logic ──────────────────────────────────────────────────
      let timer: ReturnType<typeof setTimeout>;

      const dismiss = () => {
        clearTimeout(timer);
        try { toastEl.remove(); } catch { /* already removed */ }
      };

      timer = setTimeout(dismiss, duration);

      // Click × to dismiss immediately.
      toastEl.querySelector('.ls-toast-close')?.addEventListener('click', dismiss);

      // Hover: pause auto-dismiss; on leave resume with 2 s grace period
      // (matches Lumiverse native ToastContainer behaviour).
      toastEl.addEventListener('mouseenter', () => clearTimeout(timer));
      toastEl.addEventListener('mouseleave', () => {
        timer = setTimeout(dismiss, 2000);
      });

      return;
    }

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
