/**
 * ============================================================================
 * LUMISCRIPT — BUILT-IN LIBRARY: ls:components
 * ============================================================================
 * Reusable UI component factories that wrap the low-level DOM injection API.
 *
 * Two API patterns:
 *   **Injection functions** — call dom.inject/injectAtMessage, return DOMHandle.
 *     messageFooter, messageHeader, progressBar, floatingButton
 *
 *   **HTML string builders** — return raw HTML for composition.
 *     badgeHtml, statBarHtml, keyValueHtml
 *
 * Usage:
 *   const { messageFooter, badgeHtml, statBarHtml } = await script.require('ls:components');
 *   messageFooter(msg.id, `
 *     ${badgeHtml('HP', { variant: 'danger', dot: true })}
 *     ${statBarHtml('Health', 75, { color: '#e74c3c' })}
 *   `, { id: `stats-${msg.id}` });
 *
 * All components close over the **calling** script's `api.ui.dom`, so injected
 * elements are owned by (and cleaned up with) the calling script.
 */

import type { DOMHandle, ProgressBarHandle } from '../../types/script.js';
import type { BuiltinLibraryFactory } from '../builtin-library-registry.js';

// ─── Internal utilities ──────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

// ─── CSS constants ───────────────────────────────────────────────────────────

const MESSAGE_FOOTER_CSS = `
.ls-comp-msg-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem 0.75rem;
  padding: 4px 10px;
  margin-top: 4px;
  border-top: 1px solid var(--lumiverse-border, rgba(255,255,255,0.06));
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--lumiverse-text-muted, var(--lumiverse-text-secondary, #a0a0a0));
  opacity: 0.7;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-msg-footer:hover {
  opacity: 1;
}
`;

const MESSAGE_HEADER_CSS = `
.ls-comp-msg-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem 0.75rem;
  padding: 4px 10px;
  margin-bottom: 4px;
  border-bottom: 1px solid var(--lumiverse-border, rgba(255,255,255,0.06));
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--lumiverse-text-muted, var(--lumiverse-text-secondary, #a0a0a0));
  opacity: 0.7;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-msg-header:hover {
  opacity: 1;
}
`;

const BADGE_CSS = `
.ls-comp-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  border-radius: 999px;
  white-space: nowrap;
  line-height: 1;
  vertical-align: middle;
}
.ls-comp-badge--sm {
  font-size: 0.65rem;
  padding: 2px 6px;
}
.ls-comp-badge--md {
  font-size: 0.7rem;
  padding: 3px 8px;
}
.ls-comp-badge--default {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.06));
  color: var(--lumiverse-text-muted, #a0a0a0);
}
.ls-comp-badge--accent {
  background: color-mix(in srgb, var(--lumiverse-accent, #6366f1) 15%, transparent);
  color: var(--lumiverse-accent, #6366f1);
}
.ls-comp-badge--success {
  background: rgba(46, 204, 113, 0.15);
  color: #2ecc71;
}
.ls-comp-badge--warning {
  background: rgba(241, 196, 15, 0.15);
  color: #f1c40f;
}
.ls-comp-badge--danger {
  background: rgba(231, 76, 60, 0.15);
  color: #e74c3c;
}
.ls-comp-badge--info {
  background: rgba(52, 152, 219, 0.15);
  color: #3498db;
}
.ls-comp-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 4px currentColor;
  flex-shrink: 0;
}
`;

const STAT_BAR_CSS = `
.ls-comp-stat-bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  line-height: 1;
}
.ls-comp-stat-bar--no-value {
  grid-template-columns: auto 1fr;
}
.ls-comp-stat-bar__label {
  color: var(--lumiverse-text-muted, #a0a0a0);
  font-weight: 500;
  white-space: nowrap;
}
.ls-comp-stat-bar__track {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.08));
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}
.ls-comp-stat-bar__fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--lumiverse-accent, #6366f1);
  transition: width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.ls-comp-stat-bar__value {
  color: var(--lumiverse-text, #fff);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  text-align: right;
  min-width: 2.5em;
}
`;

const KEY_VALUE_CSS = `
.ls-comp-kv {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  font-size: 0.75rem;
  line-height: 1.5;
  padding: 2px 0;
}
.ls-comp-kv__label {
  color: var(--lumiverse-text-muted, #a0a0a0);
  white-space: nowrap;
  flex-shrink: 0;
}
.ls-comp-kv__value {
  color: var(--lumiverse-text, #fff);
  font-weight: 600;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ls-comp-kv__value--muted {
  color: var(--lumiverse-text-muted, #a0a0a0);
  font-weight: 400;
}
`;

const PROGRESS_CSS = `
.ls-comp-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.75rem;
}
.ls-comp-progress__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.ls-comp-progress__label {
  color: var(--lumiverse-text-muted, #a0a0a0);
}
.ls-comp-progress__percent {
  color: var(--lumiverse-text, #fff);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.ls-comp-progress__track {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.08));
  border-radius: var(--lumiverse-radius, 4px);
  overflow: hidden;
}
.ls-comp-progress__fill {
  height: 100%;
  border-radius: inherit;
  background: var(--lumiverse-accent, #6366f1);
  transition: width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
`;

const FLOATING_BUTTON_CSS = `
.ls-comp-fab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid var(--lumiverse-border, rgba(255,255,255,0.1));
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--lumiverse-transition-fast, 0.15s),
              border-color var(--lumiverse-transition-fast, 0.15s),
              box-shadow var(--lumiverse-transition-fast, 0.15s),
              filter var(--lumiverse-transition-fast, 0.15s);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.ls-comp-fab--sm {
  font-size: 0.7rem;
  padding: 6px 12px;
  border-radius: var(--lumiverse-radius, 6px);
  min-width: 32px;
  min-height: 32px;
}
.ls-comp-fab--md {
  font-size: 0.8rem;
  padding: 8px 16px;
  border-radius: var(--lumiverse-radius, 8px);
  min-width: 40px;
  min-height: 40px;
}
.ls-comp-fab--icon-only.ls-comp-fab--sm {
  padding: 6px;
  border-radius: 50%;
}
.ls-comp-fab--icon-only.ls-comp-fab--md {
  padding: 8px;
  border-radius: 50%;
}
.ls-comp-fab--default {
  background: var(--lumiverse-fill, rgba(30,30,35,0.85));
  color: var(--lumiverse-text, #fff);
}
.ls-comp-fab--default:hover {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.1));
}
.ls-comp-fab--accent {
  background: var(--lumiverse-accent, #6366f1);
  color: var(--lumiverse-accent-fg, #fff);
  border-color: transparent;
}
.ls-comp-fab--accent:hover {
  filter: brightness(1.1);
}
.ls-comp-fab--ghost {
  background: transparent;
  color: var(--lumiverse-text-muted, #a0a0a0);
  border-color: transparent;
  box-shadow: none;
}
.ls-comp-fab--ghost:hover {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.06));
  color: var(--lumiverse-text, #fff);
}
.ls-comp-fab__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
}
.ls-comp-fab__icon > svg {
  width: 100%;
  height: 100%;
}
.ls-comp-fab__label {
  line-height: 1;
}
`;

// ─── Factory ─────────────────────────────────────────────────────────────────

export const createComponentsLibrary: BuiltinLibraryFactory = (api) => {
  // Lazy style injection — one flag per component group, injected on first use.
  function ensureStyles(css: string, flag: { v: boolean }): void {
    if (flag.v) return;
    api.ui.dom.addStyle(css);
    flag.v = true;
  }

  // Wrap booleans in objects so ensureStyles can mutate them.
  const footerFlag  = { v: false };
  const headerFlag  = { v: false };
  const badgeFlag   = { v: false };
  const statBarFlag = { v: false };
  const kvFlag      = { v: false };
  const progressFlag = { v: false };
  const fabFlag     = { v: false };

  // Sync the initial footerStyleInjected → footerFlag for backward compat
  // (not needed since we're rewriting, but kept for clarity)

  // ── messageFooter ──────────────────────────────────────────────────────

  function messageFooter(
    messageId: string,
    html: string,
    options?: { id?: string; className?: string },
  ): DOMHandle {
    ensureStyles(MESSAGE_FOOTER_CSS, footerFlag);
    const classes = ['ls-comp-msg-footer', options?.className].filter(Boolean).join(' ');
    return api.ui.dom.injectAtMessage(messageId, `<div class="${classes}">${html}</div>`, {
      position: 'footer',
      id: options?.id,
    });
  }

  // ── messageHeader ─────────────────────────────────────────────────────

  function messageHeader(
    messageId: string,
    html: string,
    options?: { id?: string; className?: string },
  ): DOMHandle {
    ensureStyles(MESSAGE_HEADER_CSS, headerFlag);
    const classes = ['ls-comp-msg-header', options?.className].filter(Boolean).join(' ');
    return api.ui.dom.injectAtMessage(messageId, `<div class="${classes}">${html}</div>`, {
      position: 'header',
      id: options?.id,
    });
  }

  // ── badgeHtml ─────────────────────────────────────────────────────────

  function badgeHtml(
    text: string,
    options?: { variant?: string; size?: string; dot?: boolean; className?: string },
  ): string {
    ensureStyles(BADGE_CSS, badgeFlag);
    const variant = options?.variant ?? 'default';
    const size = options?.size ?? 'md';
    const classes = [
      'ls-comp-badge',
      `ls-comp-badge--${variant}`,
      `ls-comp-badge--${size}`,
      options?.className,
    ].filter(Boolean).join(' ');

    const dot = options?.dot ? '<span class="ls-comp-badge__dot"></span>' : '';
    return `<span class="${classes}">${dot}${escapeHtml(text)}</span>`;
  }

  // ── statBarHtml ───────────────────────────────────────────────────────

  function statBarHtml(
    label: string,
    value: number,
    options?: { max?: number; color?: string; showValue?: boolean; height?: number; className?: string },
  ): string {
    ensureStyles(STAT_BAR_CSS, statBarFlag);
    const max = options?.max ?? 100;
    const showValue = options?.showValue !== false;
    const height = options?.height ?? 6;
    const color = options?.color ?? 'var(--lumiverse-accent, #6366f1)';
    const clamped = clamp(value, 0, max);
    const percent = max > 0 ? (clamped / max) * 100 : 0;

    const noValueClass = showValue ? '' : ' ls-comp-stat-bar--no-value';
    const classes = ['ls-comp-stat-bar', options?.className].filter(Boolean).join(' ') + noValueClass;

    const valueHtml = showValue
      ? `<span class="ls-comp-stat-bar__value">${Math.round(clamped)}/${max}</span>`
      : '';

    return `<div class="${classes}">` +
      `<span class="ls-comp-stat-bar__label">${escapeHtml(label)}</span>` +
      `<div class="ls-comp-stat-bar__track" style="height:${height}px">` +
        `<div class="ls-comp-stat-bar__fill" style="width:${percent.toFixed(1)}%;background:${color}"></div>` +
      `</div>` +
      valueHtml +
    `</div>`;
  }

  // ── keyValueHtml ──────────────────────────────────────────────────────

  function keyValueHtml(
    label: string,
    value: string,
    options?: { muted?: boolean; className?: string },
  ): string {
    ensureStyles(KEY_VALUE_CSS, kvFlag);
    const classes = ['ls-comp-kv', options?.className].filter(Boolean).join(' ');
    const valueClass = options?.muted
      ? 'ls-comp-kv__value ls-comp-kv__value--muted'
      : 'ls-comp-kv__value';

    return `<div class="${classes}">` +
      `<span class="ls-comp-kv__label">${escapeHtml(label)}</span>` +
      `<span class="${valueClass}">${escapeHtml(value)}</span>` +
    `</div>`;
  }

  // ── progressBar ───────────────────────────────────────────────────────

  function buildProgressHtml(
    value: number,
    label?: string,
    color?: string,
    showPercent?: boolean,
    height?: number,
    className?: string,
  ): string {
    const clamped = clamp(value, 0, 100);
    const h = height ?? 8;
    const c = color ?? 'var(--lumiverse-accent, #6366f1)';
    const showPct = showPercent !== false;

    const hasHeader = !!label || showPct;
    const classes = ['ls-comp-progress', className].filter(Boolean).join(' ');

    let headerHtml = '';
    if (hasHeader) {
      const labelSpan = label ? `<span class="ls-comp-progress__label">${escapeHtml(label)}</span>` : '';
      const pctSpan = showPct ? `<span class="ls-comp-progress__percent">${Math.round(clamped)}%</span>` : '';
      headerHtml = `<div class="ls-comp-progress__header">${labelSpan}${pctSpan}</div>`;
    }

    return `<div class="${classes}">` +
      headerHtml +
      `<div class="ls-comp-progress__track" style="height:${h}px">` +
        `<div class="ls-comp-progress__fill" style="width:${clamped.toFixed(1)}%;background:${c}"></div>` +
      `</div>` +
    `</div>`;
  }

  function progressBar(
    target: string,
    options?: {
      value?: number; label?: string; color?: string;
      showPercent?: boolean; height?: number; id?: string; className?: string;
    },
  ): ProgressBarHandle {
    ensureStyles(PROGRESS_CSS, progressFlag);

    const value = options?.value ?? 0;
    const { label, color, showPercent, height, className } = options ?? {};
    const html = buildProgressHtml(value, label, color, showPercent, height, className);

    const handle = api.ui.dom.inject(target, html, {
      position: 'beforeend',
      id: options?.id,
    });

    // Current state for setValue regeneration
    let currentLabel = label;
    let currentColor = color;
    let currentShowPercent = showPercent;
    let currentHeight = height;
    let currentClassName = className;

    return {
      get id() { return handle.id; },
      update: handle.update.bind(handle),
      remove: handle.remove.bind(handle),
      on: handle.on.bind(handle),
      setValue(newValue: number, newLabel?: string): void {
        if (newLabel !== undefined) currentLabel = newLabel;
        handle.update(buildProgressHtml(
          newValue, currentLabel, currentColor, currentShowPercent,
          currentHeight, currentClassName,
        ));
      },
    };
  }

  // ── floatingButton ────────────────────────────────────────────────────

  function floatingButton(
    label: string,
    options?: {
      position?: { top?: string; right?: string; bottom?: string; left?: string };
      icon?: string; variant?: string; size?: string;
      draggable?: boolean;
      id?: string; className?: string;
    },
  ): DOMHandle {
    ensureStyles(FLOATING_BUTTON_CSS, fabFlag);

    const variant = options?.variant ?? 'default';
    const size = options?.size ?? 'md';
    const pos = options?.position ?? {};
    const top = pos.top ?? 'auto';
    const right = pos.right ?? '16px';
    const bottom = pos.bottom ?? '80px';
    const left = pos.left ?? 'auto';

    const isIconOnly = !!options?.icon && !label;
    const classes = [
      'ls-comp-fab',
      `ls-comp-fab--${variant}`,
      `ls-comp-fab--${size}`,
      isIconOnly ? 'ls-comp-fab--icon-only' : '',
      options?.draggable ? 'ls-comp-fab--draggable' : '',
      options?.className,
    ].filter(Boolean).join(' ');

    const iconHtml = options?.icon
      ? `<span class="ls-comp-fab__icon">${options.icon}</span>`
      : '';
    const labelHtml = label
      ? `<span class="ls-comp-fab__label">${escapeHtml(label)}</span>`
      : '';

    const style = `position:fixed;top:${top};right:${right};bottom:${bottom};left:${left};z-index:9999`;
    const html = `<button class="${classes}" style="${style}">${iconHtml}${labelHtml}</button>`;

    const handle = api.ui.dom.inject('body', html, {
      position: 'beforeend',
      id: options?.id,
    });

    if (options?.draggable) {
      api.ui.dom._makeDraggable(handle.id);
    }

    return handle;
  }

  // ── Exports ────────────────────────────────────────────────────────────

  return {
    messageFooter,
    messageHeader,
    badgeHtml,
    statBarHtml,
    keyValueHtml,
    progressBar,
    floatingButton,
  };
};
