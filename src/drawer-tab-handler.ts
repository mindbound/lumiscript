/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND DRAWER TAB HANDLER
 * ============================================================================
 * Translates `ls_drawer_tab_*` messages from the backend into calls against
 * `ctx.ui.registerDrawerTab(...)`. The tab's `.root` HTMLElement is bound
 * into the shared DOM element map via `bindExternalElement` so subsequent
 * `dom_*` messages targeting `rootElementId` flow through the existing DOM
 * pipeline — same trick as advanced modal and float widget.
 *
 * Activation events from the host are echoed via `ls_drawer_tab_activated`
 * so the backend registry can fan out to `onActivate` handlers the script
 * registered.
 *
 * On uninstall, every live tab is destroyed. Script-scoped teardown is
 * already handled by the backend emitting `ls_drawer_tab_destroy` for each
 * owned tab before clearing its registry.
 */

import type { SpindleFrontendContext, SpindleDrawerTabHandle } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import { bindExternalElement, unbindExternalElement } from './dom-handler.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type DrawerTabMessage = Extract<BackendToFrontend,
  | { type: 'ls_drawer_tab_register' }
  | { type: 'ls_drawer_tab_set_title' }
  | { type: 'ls_drawer_tab_set_short_name' }
  | { type: 'ls_drawer_tab_set_badge' }
  | { type: 'ls_drawer_tab_activate' }
  | { type: 'ls_drawer_tab_destroy' }
>;

function isDrawerTabMessage(msg: unknown): msg is DrawerTabMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_drawer_tab_register'
      || t === 'ls_drawer_tab_set_title'
      || t === 'ls_drawer_tab_set_short_name'
      || t === 'ls_drawer_tab_set_badge'
      || t === 'ls_drawer_tab_activate'
      || t === 'ls_drawer_tab_destroy';
}

// ─── State ───────────────────────────────────────────────────────────────────

interface OpenTab {
  scriptId: string;
  tabId: string;
  rootElementId: string;
  handle: SpindleDrawerTabHandle;
}

/** `${scriptId}:${tabId}` → open tab state */
const tabs = new Map<string, OpenTab>();

function key(scriptId: string, tabId: string): string {
  return `${scriptId}:${tabId}`;
}

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the drawer-tab command handler on the frontend message multiplexer.
 * Returns a cleanup function that destroys every live tab and detaches the
 * subscription.
 */
export function installDrawerTabHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isDrawerTabMessage(raw)) return;
    const msg = raw as DrawerTabMessage;
    const k = key(msg.scriptId, msg.tabId);

    switch (msg.type) {
      // ── Register ───────────────────────────────────────────────────────
      case 'ls_drawer_tab_register': {
        // Defensive: if a duplicate (scriptId, tabId) slips through (the
        // backend registry should reject duplicates, but be robust), tear
        // down the prior handle before replacing.
        const existing = tabs.get(k);
        if (existing) {
          try { existing.handle.destroy(); } catch { /* ignore */ }
          unbindExternalElement(existing.rootElementId);
          tabs.delete(k);
        }

        let handle: SpindleDrawerTabHandle;
        try {
          handle = ctx.ui.registerDrawerTab({
            id:          msg.options.id,
            title:       msg.options.title,
            shortName:   msg.options.shortName,
            description: msg.options.description,
            keywords:    msg.options.keywords,
            headerTitle: msg.options.headerTitle,
            iconSvg:     msg.options.iconSvg,
            iconUrl:     msg.options.iconUrl,
          });
        } catch (err) {
          // Host rejected (e.g. 8-global cap, or the 4-per-extension cap
          // if LS's pre-check missed something). No good recovery — surface
          // to console for debugging visibility.
          console.warn('[LumiScript] ctx.ui.registerDrawerTab failed:', err);
          break;
        }

        // Bind the tab body element into the shared DOM map so backend
        // `dom_*` messages find it. Stamp `data-ls-script` for @scope
        // matching + `data-ls-tab` for script-authored CSS targeting.
        bindExternalElement(msg.rootElementId, handle.root);
        handle.root.setAttribute('data-ls-script', msg.scriptId);
        handle.root.setAttribute('data-ls-tab', msg.tabId);

        tabs.set(k, {
          scriptId: msg.scriptId,
          tabId:    msg.tabId,
          rootElementId: msg.rootElementId,
          handle,
        });

        // Wire activation echo. Host fires onActivate on sidebar click,
        // command-palette selection, or programmatic `activate()`.
        handle.onActivate(() => {
          sendToBackend({
            type: 'ls_drawer_tab_activated',
            scriptId: msg.scriptId,
            tabId:    msg.tabId,
          });
        });
        break;
      }

      // ── Set Title ──────────────────────────────────────────────────────
      case 'ls_drawer_tab_set_title': {
        const entry = tabs.get(k);
        if (!entry) break;
        try { entry.handle.setTitle(msg.title); } catch { /* host error — ignore */ }
        break;
      }

      // ── Set Short Name ─────────────────────────────────────────────────
      case 'ls_drawer_tab_set_short_name': {
        const entry = tabs.get(k);
        if (!entry) break;
        try { entry.handle.setShortName(msg.shortName); } catch { /* host error — ignore */ }
        break;
      }

      // ── Set Badge ──────────────────────────────────────────────────────
      case 'ls_drawer_tab_set_badge': {
        const entry = tabs.get(k);
        if (!entry) break;
        try { entry.handle.setBadge(msg.badge); } catch { /* host error — ignore */ }
        break;
      }

      // ── Activate ───────────────────────────────────────────────────────
      case 'ls_drawer_tab_activate': {
        const entry = tabs.get(k);
        if (!entry) break;
        try { entry.handle.activate(); } catch { /* host error — ignore */ }
        break;
      }

      // ── Destroy ────────────────────────────────────────────────────────
      case 'ls_drawer_tab_destroy': {
        const entry = tabs.get(k);
        if (!entry) break;
        try { entry.handle.destroy(); } catch { /* host error — ignore */ }
        unbindExternalElement(entry.rootElementId);
        tabs.delete(k);
        break;
      }
    }
  });

  // ── Cleanup ──────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();
    for (const entry of tabs.values()) {
      try { entry.handle.destroy(); } catch { /* ignore */ }
      unbindExternalElement(entry.rootElementId);
    }
    tabs.clear();
  };
}
