/**
 * ============================================================================
 * LUMISCRIPT — COMPONENT STYLES
 * ============================================================================
 * All CSS injected via ctx.dom.addStyle().
 * Uses --lumiverse-* CSS variables for theme integration.
 * All class names use the ls- prefix.
 */

export const PANEL_CSS = `
/* ── Layout ──────────────────────────────────────────────────────────────── */
.ls-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  color: var(--lumiverse-text);
  font-size: 13px;
  font-family: inherit;
}

/* ── Tab pills ───────────────────────────────────────────────────────────── */
.ls-tabs {
  display: flex;
  gap: 4px;
  padding: 8px 10px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-tab-pill {
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--lumiverse-border);
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}
.ls-tab-pill:hover {
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
}
.ls-tab-pill.ls-active {
  background: var(--lumiverse-accent);
  color: var(--lumiverse-accent-fg);
  border-color: var(--lumiverse-accent);
}

/* ── Script list header ─────────────────────────────────────────────────── */
.ls-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-list-type-tabs {
  display: flex;
  gap: 2px;
}
.ls-type-tab {
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
}
.ls-type-tab:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }
.ls-type-tab.ls-active {
  background: var(--lumiverse-fill-subtle);
  border-color: var(--lumiverse-border);
  color: var(--lumiverse-text);
}

/* ── Script list ────────────────────────────────────────────────────────── */
.ls-list-body {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding: 4px;
}
.ls-list-empty {
  padding: 32px 16px;
  text-align: center;
  color: var(--lumiverse-text-muted);
}
.ls-list-empty svg { margin-bottom: 8px; }
.ls-list-empty p { margin: 0; font-size: 12px; }

/* ── Script list item ──────────────────────────────────────────────────── */
.ls-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: var(--lumiverse-radius);
  border: 1px solid transparent;
  cursor: pointer;
  margin-bottom: 2px;
  transition: background 0.1s;
}
.ls-item:hover { background: var(--lumiverse-fill-subtle); }
.ls-item.ls-selected {
  background: var(--lumiverse-fill-subtle);
  border-color: var(--lumiverse-accent);
}
.ls-item.ls-disabled { opacity: 0.55; }
.ls-item-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--lumiverse-border);
}
.ls-item-dot.ls-dot-success { background: #22c55e; }
.ls-item-dot.ls-dot-running {
  background: #f59e0b;
  animation: ls-pulse 1s infinite;
}
.ls-item-dot.ls-dot-error { background: #ef4444; }
@keyframes ls-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.ls-item-body { flex: 1; min-width: 0; }
.ls-item-name {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
.ls-item-meta {
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  margin-top: 1px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ls-item-actions {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.1s;
}
.ls-item:hover .ls-item-actions { opacity: 1; }
.ls-item-bindings {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
}
.ls-item-binding-badges {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
}
.ls-binding-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 1px 5px;
  border-radius: 999px;
  background: var(--lumiverse-fill-subtle);
  border: 1px solid var(--lumiverse-border);
  font-size: 10px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
}

/* ── Icon button ────────────────────────────────────────────────────────── */
.ls-icon-btn {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.1s, color 0.1s;
}
.ls-icon-btn:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }
.ls-icon-btn.ls-danger:hover { color: #ef4444; }
.ls-icon-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Primary button ─────────────────────────────────────────────────────── */
.ls-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: var(--lumiverse-radius);
  border: 1px solid var(--lumiverse-border);
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  transition: background 0.1s;
}
.ls-btn:hover { background: var(--lumiverse-fill); }
.ls-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.ls-btn.ls-accent {
  background: var(--lumiverse-accent);
  color: var(--lumiverse-accent-fg);
  border-color: var(--lumiverse-accent);
}
.ls-btn.ls-accent:hover { opacity: 0.9; }

/* ── Editor view ────────────────────────────────────────────────────────── */
.ls-editor-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.ls-editor-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-editor-back {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  font-size: 12px;
  background: none;
  border: none;
  font-family: inherit;
  padding: 3px 6px;
  border-radius: 4px;
  transition: background 0.1s;
}
.ls-editor-back:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }
.ls-editor-name {
  flex: 1;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ls-editor-name-input {
  flex: 1;
  background: var(--lumiverse-fill-subtle);
  border: 1px solid var(--lumiverse-accent);
  border-radius: 4px;
  color: var(--lumiverse-text);
  font-size: 13px;
  font-family: inherit;
  padding: 2px 6px;
}
.ls-editor-unsaved {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  /* --lumiverse-accent is set dynamically by the theme engine;
     fall back to the base primary purple if not yet available */
  background: var(--lumiverse-accent, rgba(147, 112, 219, 0.9));
  flex-shrink: 0;
}
.ls-editor-monaco { flex: 1; min-height: 0; }

/* ── Console ────────────────────────────────────────────────────────────── */
.ls-console {
  flex-shrink: 0;
  border-top: 1px solid var(--lumiverse-border);
  display: flex;
  flex-direction: column;
}
/* Fixed height when expanded — ensures a consistent scrollable area from the first entry */
.ls-console:not(.ls-collapsed) {
  height: 150px;
}
.ls-console-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}
.ls-console-title {
  flex: 1;
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.ls-console-output {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding: 4px 8px;
  font-size: 11px;
  font-family: monospace;
}
.ls-console-empty {
  color: var(--lumiverse-text-muted);
  font-style: italic;
  padding: 4px 0;
}
.ls-log  { color: var(--lumiverse-text); }
.ls-warn  { color: #f59e0b; }
.ls-error { color: #ef4444; }
.ls-info  { color: #60a5fa; }
.ls-success { color: #22c55e; }
.ls-entry {
  display: flex;
  gap: 6px;
  padding: 1px 0;
  line-height: 1.5;
}
.ls-entry-time { color: var(--lumiverse-text-muted); flex-shrink: 0; }
.ls-entry-type { flex-shrink: 0; font-weight: 600; }
.ls-entry-msg { word-break: break-word; white-space: pre-wrap; }

/* ── Bindings ────────────────────────────────────────────────────────────── */
.ls-bindings {
  flex-shrink: 0;
  border-top: 1px solid var(--lumiverse-border);
  padding: 6px 10px;
}
.ls-bindings-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--lumiverse-text-muted);
}
.ls-bindings-global { font-style: italic; }
.ls-binding-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px 2px 5px;
  border-radius: 999px;
  background: var(--lumiverse-fill-subtle);
  border: 1px solid var(--lumiverse-border);
  font-size: 11px;
  color: var(--lumiverse-text);
}
.ls-chip-remove {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  padding: 0;
  margin-left: 2px;
  line-height: 1;
}
.ls-chip-remove:hover { color: #ef4444; }
.ls-bindings-add {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px dashed var(--lumiverse-border);
  background: none;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  font-size: 11px;
  font-family: inherit;
  transition: border-color 0.1s, color 0.1s;
}
.ls-bindings-add:hover { border-color: var(--lumiverse-accent); color: var(--lumiverse-text); }
.ls-bindings-add:disabled { opacity: 0.38; cursor: not-allowed; border-color: transparent; }

/* ── Metadata footer ────────────────────────────────────────────────────── */
.ls-meta-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 10px;
  border-top: 1px solid var(--lumiverse-border);
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  flex-shrink: 0;
  flex-wrap: wrap;
}
.ls-meta-item { display: flex; align-items: center; gap: 4px; }
.ls-danger-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  font-family: inherit;
  padding: 0;
  color: var(--lumiverse-text-muted);
}
.ls-danger-btn:hover { color: var(--lumiverse-text); }
.ls-dangerous { color: #ef4444; }

/* ── Settings panel ─────────────────────────────────────────────────────── */
.ls-settings {
  padding: 12px;
  border-radius: var(--lumiverse-radius);
  border: 1px solid var(--lumiverse-border);
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
  font-size: 13px;
  font-family: inherit;
}
.ls-settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.ls-settings-title {
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}
.ls-toggle-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.ls-toggle {
  position: relative;
  display: inline-flex;
  width: 32px;
  height: 18px;
  flex-shrink: 0;
}
.ls-toggle input { opacity: 0; width: 0; height: 0; }
.ls-toggle-slider {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: var(--lumiverse-border);
  cursor: pointer;
  transition: background 0.2s;
}
.ls-toggle-slider::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  left: 3px;
  top: 3px;
  border-radius: 50%;
  background: white;
  transition: transform 0.2s;
}
.ls-toggle input:checked + .ls-toggle-slider { background: var(--lumiverse-accent); }
.ls-toggle input:checked + .ls-toggle-slider::after { transform: translateX(14px); }
.ls-settings-counts {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.ls-count-card {
  flex: 1;
  padding: 8px;
  border-radius: var(--lumiverse-radius);
  border: 1px solid var(--lumiverse-border);
  cursor: pointer;
  text-align: center;
  transition: background 0.1s;
}
.ls-count-card:hover { background: var(--lumiverse-fill); }
.ls-count-num { font-size: 18px; font-weight: 600; color: var(--lumiverse-accent); }
.ls-count-label { font-size: 11px; color: var(--lumiverse-text-muted); }

/* ── Script modal ───────────────────────────────────────────────────────── */
.ls-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--lumiverse-modal-backdrop, rgba(0, 0, 0, 0.6));
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(3px);
}
.ls-modal-card {
  /* --lumiverse-gradient-modal is 98% opaque — correct for a portal modal with no parent backing */
  background: var(--lumiverse-gradient-modal, linear-gradient(135deg, rgba(35, 30, 48, 0.98), rgba(20, 17, 28, 0.98)));
  border: 1px solid var(--lumiverse-border);
  border-radius: calc(var(--lumiverse-radius) + 4px);
  width: 100%;
  max-width: 1100px;
  height: min(90vh, 820px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
}
.ls-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-modal-title {
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.ls-modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  transition: background 0.1s;
}
.ls-modal-close:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }
.ls-modal-body {
  flex: 1;
  min-height: 0;
  display: flex;
}
.ls-modal-sidebar {
  width: 250px;
  flex-shrink: 0;
  border-right: 1px solid var(--lumiverse-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.ls-modal-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

/* ── Status tab ─────────────────────────────────────────────────────────── */
.ls-status-list {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding: 4px;
}
.ls-status-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 6px 8px;
  border-radius: var(--lumiverse-radius);
}
.ls-status-row:hover { background: var(--lumiverse-fill-subtle); }
.ls-status-row-main { display: flex; align-items: center; gap: 8px; }
.ls-status-name { flex: 1; font-size: 12px; }
.ls-status-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.ls-status-duration { font-size: 11px; color: var(--lumiverse-text-muted); }
.ls-status-error { font-size: 11px; color: #ef4444; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ls-invoke-count { font-size: 10px; color: var(--lumiverse-text-muted); font-variant-numeric: tabular-nums; }
.ls-status-events { display: flex; flex-wrap: wrap; gap: 4px; padding-left: 16px; }
.ls-event-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 1px 5px;
  border-radius: 4px;
  border: 1px solid var(--lumiverse-border);
  font-size: 10px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
}
.ls-no-handlers { padding-left: 16px; font-size: 10px; color: var(--lumiverse-text-dim); font-style: italic; }
.ls-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--lumiverse-text-muted);
  gap: 8px;
  padding: 32px;
  text-align: center;
}
.ls-placeholder p { margin: 0; font-size: 12px; }
`;
