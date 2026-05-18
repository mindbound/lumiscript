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

import type {
  CollapsibleDOMHandle,
  DOMHandle,
  MessageFooterOptions,
  MessageHeaderOptions,
  MultiSelectOptions,
  ProgressBarHandle,
} from '../../types/script.js';
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

// Lucide chevron paths — MIT-licensed. Server-side rendered as inline SVG so
// the component output is self-contained and safe to inject via DOMPurify.
const CHEVRON_UP_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" ' +
  'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';

const CHEVRON_DOWN_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" ' +
  'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';

// ─── CSS constants ───────────────────────────────────────────────────────────

const MESSAGE_FOOTER_CSS = `
/* Default (Bubble-mode) styling: footer sits INSIDE the bubble's content
   stack below the message text. The hairline border-top + 4px margin-top
   acts as a separator from content above it within the same container.
   Minimal-mode footers (see [data-ls-mode="minimal"] block below) use a
   different visual model — they sit as a sibling BELOW the card in the
   virtualRow, escaping the constrained .bubble flex item so they can span
   the full row width. See dom-handler.ts \`dom_inject_at_message\`. */
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
/* Minimal-mode footer: dom-handler stamps \`data-ls-mode="minimal"\` on
   the outer LS wrapper and inserts AFTER the .card in the .virtualRow
   (rather than inside .bubble), so the footer escapes Minimal's
   constrained \`.bubble\` flex item (\`max-width: 85%\`) and spans the
   full row width. The wrapper sits one level above .ls-comp-msg-footer,
   so the descendant selector is what matches.

   Mirror of the messageHeader pattern (see MESSAGE_HEADER_CSS), flipped
   vertically: 3-sided frame matching Minimal's .card (bottom + left +
   right; no top), rounded BOTTOM corners only, and a negative margin-top
   that overlaps into the card's rounded bottom corners + z-index so the
   footer's flat top paints over them. The card and footer then read as
   a single continuous frame.

   Differences from MESSAGE_HEADER_CSS:
   - Minimal's .card uses \`border: 1px solid var(--lcs-glass-border)\`
     (real 1px border), not Bubble's \`box-shadow: 0 0 0 0.5px\` half-pixel
     trick, so we use a real 1px border to match weight.
   - No per-tint variants — Minimal's .card has a flat \`--lcs-glass-bg\`
     (the per-side color comes from the accent bar via .card::before, not
     from a gradient layer), so a single neutral background suffices.
   - Opacity transition on \`> *\` (children) instead of the parent, for
     the same reason as the header: parent opacity would make the frame
     itself fade, partially revealing the card's rounded corners through
     the overlap zone on hover. */
:scope[data-ls-mode="minimal"] .ls-comp-msg-footer {
  /* Top padding (18px) keeps content below the negative-margin overlap
     zone (14px), leaving 4px breathing room. */
  padding: 18px 14px 6px;
  border-top: none;
  border-left: 1px solid var(--lcs-glass-border, rgba(255, 255, 255, 0.06));
  border-right: 1px solid var(--lcs-glass-border, rgba(255, 255, 255, 0.06));
  border-bottom: 1px solid var(--lcs-glass-border, rgba(255, 255, 255, 0.06));
  border-radius: 0 0 var(--lcs-radius, 14px) var(--lcs-radius, 14px);
  background: var(--lcs-glass-bg, rgba(20, 17, 28, 0.92));
  /* Overlap into the card's rounded bottom corners and paint over them. */
  margin-top: -14px;
  position: relative;
  z-index: 1;
  /* Frame stays solid; opacity moves to children. */
  opacity: 1;
}
:scope[data-ls-mode="minimal"] .ls-comp-msg-footer > * {
  opacity: 0.7;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
:scope[data-ls-mode="minimal"] .ls-comp-msg-footer:hover {
  opacity: 1;
}
:scope[data-ls-mode="minimal"] .ls-comp-msg-footer:hover > * {
  opacity: 1;
}
/* Collapsible variant: rather than override the base display: flex with
   display: block (which in practice loses the cascade against <button>
   UA styles in some engines and leaves the button sized to its intrinsic
   content width), keep the wrapper as flex and reconfigure it into a
   vertical stack. flex-direction: column + align-items: stretch makes
   the toggle bar and the body each fill the full cross-axis width
   automatically, without relying on width: 100% on the button. */
.ls-comp-msg-footer--collapsible {
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 0;
}
.ls-comp-msg-footer--collapsible .ls-comp-msg-footer__toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  /* Explicit per-property inheritance instead of the 'font' shorthand —
     some browsers drift on individual font sub-properties (notably
     line-height and letter-spacing) inside <button> when the shorthand
     is used, which made the plain-text portion of the title render
     slightly differently than the badge pill. */
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  cursor: pointer;
  user-select: none;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-msg-footer--collapsible .ls-comp-msg-footer__toggle:hover {
  opacity: 0.85;
}
/* Make ALL descendants of the toggle click-transparent — not just direct
   children. If a user passes composed HTML for the title (e.g. a badge
   with its own nested spans), clicks on those deep descendants would
   otherwise target the descendant (no data-ls-toggle) and our handler
   would reject them, breaking the re-collapse path. */
.ls-comp-msg-footer--collapsible .ls-comp-msg-footer__toggle * {
  pointer-events: none;
}
.ls-comp-msg-footer__title {
  flex: 1;
  min-width: 0;
  text-align: left;
}
.ls-comp-msg-footer__chevron {
  display: inline-flex;
  align-items: center;
  color: var(--lumiverse-text-muted, #a0a0a0);
}
.ls-comp-msg-footer__body.ls-collapsed {
  display: none;
}
.ls-comp-msg-footer__body:not(.ls-collapsed) {
  margin-top: 6px;
}
`;

const MESSAGE_HEADER_CSS = `
/* The header sits OUTSIDE the host's .card (which is the bubble's
   visual frame + the actions-pill positioning context). To make it
   read as a top-section of the bubble rather than a separate floating
   element, replicate the bubble's frame from outside:
     - matching base background (multi-layer glass gradient + glass-bg)
     - matching pseudo-border via box-shadow (0.5px outline)
     - rounded TOP corners only (radius matches host's .card)
     - flat BOTTOM, with a negative margin-bottom that overlaps into
       the bubble's rounded top corners — combined with z-index, this
       hides the bubble's top corner curvature so the header's flat
       bottom flushes seamlessly into the bubble's flat sides.
   Per-tint variants below (\`[data-ls-tint="..."]\`) match the host's
   per-message-side tint gradients so character / user messages get
   the matching slight blue / orange wash. \`data-ls-tint\` is set by
   the dom-handler at injection time by reading the host's
   \`.card[data-part]\` attribute. */
.ls-comp-msg-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem 0.75rem;
  /* Bottom padding (18px) keeps content above the negative-margin
     overlap zone (14px), leaving 4px breathing room. */
  padding: 6px 14px 18px;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--lumiverse-text-muted, var(--lumiverse-text-secondary, #a0a0a0));

  /* Visual frame matching host's .card — see
     frontend/src/components/chat/BubbleMessage.module.css:2-21 */
  border-radius: var(--lcs-radius, 14px) var(--lcs-radius, 14px) 0 0;
  background:
    linear-gradient(145deg,
      rgba(255, 255, 255, 0.022) 0%,
      rgba(255, 255, 255, 0.007) 40%,
      rgba(255, 255, 255, 0.013) 100%),
    var(--lcs-glass-bg, rgba(20, 17, 28, 0.92));

  /* Three-sided outline (top + left + right; NO bottom). The host's
     .card uses \`box-shadow: 0 0 0 0.5px ...\` for a uniform 4-side
     pseudo-border, but a bottom outline on us would land inside the
     bubble's frame and \"shine through\" — most visibly on
     .card:hover where the bubble's background brightens. We replicate
     the 0.5px outline only on the three sides where it makes sense.
     Each shadow is a directional offset of the box's shape (no spread),
     so the shadow follows our \`border-radius\` curves at the top
     corners and stays straight along the bottom-square sides. */
  box-shadow:
    0 -0.5px 0 0 var(--lcs-glass-border, rgba(255, 255, 255, 0.06)),
    -0.5px 0 0 0 var(--lcs-glass-border, rgba(255, 255, 255, 0.06)),
    0.5px 0 0 0 var(--lcs-glass-border, rgba(255, 255, 255, 0.06));

  /* Overlap into the bubble's top rounded corners and paint over
     them. Without this, the bubble's 14px-radius top corners would
     be visible under our flat-bottom header, creating a "two stacked
     cards" look. \`position: relative; z-index: 1\` ensures the
     header (and its background) paints above the .card's top edge. */
  margin-bottom: -14px;
  position: relative;
  z-index: 1;
}

/* Apply the muted-then-hover opacity transition to the header's
   element children (toggle button, body, user-passed wrappers) rather
   than the header itself. If we put \`opacity: 0.7\` on the parent,
   the entire box (including the bubble-matched background) becomes
   semi-transparent — the bubble's rounded top corners then become
   partially visible THROUGH the header in the negative-margin overlap
   zone, and the visible-then-hidden transition on hover produces a
   subtle "the bubble jumps" effect. Keeping the parent fully opaque
   (frame stays solid) and fading only the content element-children
   gives a cleaner result.
   Edge case: plain text passed directly inside a non-collapsible
   header (no wrapping element) won't fade — child-element selector
   doesn't match text nodes. Acceptable: such content is unusual,
   and "always visible" is a defensible default. */
.ls-comp-msg-header > * {
  opacity: 0.7;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-msg-header:hover > * {
  opacity: 1;
}

/* Per-tint backgrounds — match host's
   .character / .user gradient layers in BubbleMessage.module.css:42-57.
   \`data-ls-tint\` is on the LS wrapper element (parent of
   \`.ls-comp-msg-header\`), set at injection time by dom-handler.ts
   from the host \`.card[data-part]\` attribute. \`streaming\` shares
   character's tint — streaming bubbles are character-side and
   transition to \`character\` once generation completes.

   The \`:scope\` prefix is required: the wrapper IS the @scope root
   (same element carries \`data-ls-script\` and \`data-ls-tint\`).
   Per CSS scope spec, selectors inside a @scope block are
   relative-selectors, with an implicit \`:scope \` (descendant
   combinator) prefix. So a bare \`[data-ls-tint]\` would mean
   \`:scope [data-ls-tint]\` and look for a DESCENDANT with the
   attribute — which doesn't exist. \`:scope[data-ls-tint]\` matches
   the root WITH that attribute, which is what we want. */
:scope[data-ls-tint="character"] .ls-comp-msg-header,
:scope[data-ls-tint="streaming"] .ls-comp-msg-header {
  background:
    linear-gradient(145deg, var(--lcs-glass-char-tint, rgba(100, 120, 255, 0.03)) 0%, transparent 40%),
    linear-gradient(145deg,
      rgba(255, 255, 255, 0.022) 0%,
      rgba(255, 255, 255, 0.007) 40%,
      rgba(255, 255, 255, 0.013) 100%),
    var(--lcs-glass-bg, rgba(20, 17, 28, 0.92));
}
:scope[data-ls-tint="user"] .ls-comp-msg-header {
  background:
    linear-gradient(225deg, var(--lcs-glass-user-tint, rgba(255, 180, 100, 0.03)) 0%, transparent 40%),
    linear-gradient(145deg,
      rgba(255, 255, 255, 0.022) 0%,
      rgba(255, 255, 255, 0.007) 40%,
      rgba(255, 255, 255, 0.013) 100%),
    var(--lcs-glass-bg, rgba(20, 17, 28, 0.92));
}
/* Collapsible variant: rather than override the base display: flex with
   display: block (which in practice loses the cascade against <button>
   UA styles in some engines and leaves the button sized to its intrinsic
   content width), keep the wrapper as flex and reconfigure it into a
   vertical stack. flex-direction: column + align-items: stretch makes
   the toggle bar and the body each fill the full cross-axis width
   automatically, without relying on width: 100% on the button. */
.ls-comp-msg-header--collapsible {
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 0;
}
.ls-comp-msg-header--collapsible .ls-comp-msg-header__toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  /* Explicit per-property inheritance instead of the 'font' shorthand —
     some browsers drift on individual font sub-properties (notably
     line-height and letter-spacing) inside <button> when the shorthand
     is used, which made the plain-text portion of the title render
     slightly differently than the badge pill. */
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  cursor: pointer;
  user-select: none;
  transition: opacity var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-msg-header--collapsible .ls-comp-msg-header__toggle:hover {
  opacity: 0.85;
}
/* Make ALL descendants of the toggle click-transparent — not just direct
   children. If a user passes composed HTML for the title (e.g. a badge
   with its own nested spans), clicks on those deep descendants would
   otherwise target the descendant (no data-ls-toggle) and our handler
   would reject them, breaking the re-collapse path. */
.ls-comp-msg-header--collapsible .ls-comp-msg-header__toggle * {
  pointer-events: none;
}
.ls-comp-msg-header__title {
  flex: 1;
  min-width: 0;
  text-align: left;
}
.ls-comp-msg-header__chevron {
  display: inline-flex;
  align-items: center;
  color: var(--lumiverse-text-muted, #a0a0a0);
}
.ls-comp-msg-header__body.ls-collapsed {
  display: none;
}
.ls-comp-msg-header__body:not(.ls-collapsed) {
  margin-top: 6px;
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

const MULTI_SELECT_CSS = `
.ls-comp-ms {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 0;
  /* The advanced-modal body has its own padding; keep content flush. */
}
.ls-comp-ms__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 360px;
  overflow-y: auto;
  border-radius: var(--lumiverse-radius, 6px);
  border: 1px solid var(--lumiverse-border, rgba(255,255,255,0.08));
  background: var(--lumiverse-fill, rgba(0,0,0,0.15));
  padding: 4px;
}
.ls-comp-ms__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--lumiverse-radius, 4px);
  cursor: pointer;
  transition: background var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-ms__item:hover {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.05));
}
.ls-comp-ms__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.ls-comp-ms__item--disabled:hover {
  background: transparent;
}
.ls-comp-ms__cb {
  margin: 3px 0 0 0;
  cursor: pointer;
  accent-color: var(--lumiverse-accent, #6366f1);
  flex-shrink: 0;
}
.ls-comp-ms__item--disabled .ls-comp-ms__cb {
  cursor: not-allowed;
}
.ls-comp-ms__item-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
.ls-comp-ms__item-label {
  font-size: 0.9rem;
  color: var(--lumiverse-text, inherit);
  line-height: 1.35;
}
.ls-comp-ms__item-desc {
  font-size: 0.75rem;
  color: var(--lumiverse-text-muted, rgba(255,255,255,0.6));
  line-height: 1.4;
}
.ls-comp-ms__status {
  font-size: 0.75rem;
  color: var(--lumiverse-text-muted, rgba(255,255,255,0.6));
  text-align: right;
  padding: 0 2px;
}
.ls-comp-ms__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--lumiverse-border, rgba(255,255,255,0.06));
}
.ls-comp-ms__btn {
  padding: 6px 16px;
  font: inherit;
  font-size: 0.85rem;
  border-radius: var(--lumiverse-radius, 6px);
  border: 1px solid var(--lumiverse-border, rgba(255,255,255,0.1));
  background: transparent;
  color: var(--lumiverse-text, inherit);
  cursor: pointer;
  transition: background var(--lumiverse-transition-fast, 0.15s),
              border-color var(--lumiverse-transition-fast, 0.15s),
              filter var(--lumiverse-transition-fast, 0.15s);
}
.ls-comp-ms__btn:hover {
  background: var(--lumiverse-fill-subtle, rgba(255,255,255,0.05));
  border-color: var(--lumiverse-accent, #6366f1);
}
.ls-comp-ms__btn--confirm {
  background: var(--lumiverse-accent, #6366f1);
  border-color: var(--lumiverse-accent, #6366f1);
  color: var(--lumiverse-accent-fg, #fff);
}
.ls-comp-ms__btn--confirm:hover {
  background: var(--lumiverse-accent, #6366f1);
  filter: brightness(1.1);
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
  const multiSelectFlag = { v: false };

  // Sync the initial footerStyleInjected → footerFlag for backward compat
  // (not needed since we're rewriting, but kept for clarity)

  // ── messageFooter ──────────────────────────────────────────────────────

  /**
   * Shared implementation for messageHeader / messageFooter. The two components
   * differ only by their CSS base class (`ls-comp-msg-header` vs `-msg-footer`)
   * and their injection position (`'header'` vs `'footer'`). Everything else —
   * non-collapsible pass-through, collapsible branch with toggle bar, chevron
   * SVGs, click delegation, state closure, handle wrapping — is identical.
   */
  function messageBoundary(
    messageId: string,
    html: string,
    options: MessageHeaderOptions | MessageFooterOptions | undefined,
    baseClass: 'ls-comp-msg-header' | 'ls-comp-msg-footer',
    position: 'header' | 'footer',
    styleCss: string,
    styleFlag: { v: boolean },
  ): DOMHandle | CollapsibleDOMHandle {
    ensureStyles(styleCss, styleFlag);

    // ── Non-collapsible path: same behaviour as before ────────────────
    if (!options?.collapsible) {
      const classes = [baseClass, options?.className].filter(Boolean).join(' ');
      return api.ui.dom.injectAtMessage(messageId, `<div class="${classes}">${html}</div>`, {
        position,
        id: options?.id,
      });
    }

    // ── Collapsible path: toggle bar + body, state held in closure ────
    let collapsed = options.defaultCollapsed ?? false;
    let currentTitle = options.title ?? '';
    let currentBody = html;

    const wrapperClasses = [
      baseClass,
      `${baseClass}--collapsible`,
      options.className,
    ].filter(Boolean).join(' ');

    // Render the COMPLETE injection payload, wrapper and all. The frontend's
    // dom_update handler does `inner.innerHTML = msg.html` on the Lumiverse
    // `data-ls-el` container, which replaces everything inside it — including
    // our modifier-classed wrapper div. If we rendered just the button + body
    // here, the very first state change would destroy `.ls-comp-msg-*--collapsible`
    // and our descendant-scoped CSS (flex layout, font inheritance,
    // pointer-events gating) would stop matching, breaking re-collapse,
    // chevron alignment, and title font sizing on the second render onward.
    const renderFullHtml = (): string => {
      const chevron = collapsed ? CHEVRON_DOWN_SVG : CHEVRON_UP_SVG;
      const bodyClass = `${baseClass}__body${collapsed ? ' ls-collapsed' : ''}`;
      return (
        `<div class="${wrapperClasses}">` +
          `<button type="button" class="${baseClass}__toggle" ` +
            `data-ls-toggle="1" aria-expanded="${!collapsed}">` +
            `<span class="${baseClass}__title">${currentTitle}</span>` +
            `<span class="${baseClass}__chevron">${chevron}</span>` +
          `</button>` +
          `<div class="${bodyClass}">${currentBody}</div>` +
        `</div>`
      );
    };

    const handle = api.ui.dom.injectAtMessage(
      messageId,
      renderFullHtml(),
      { position, id: options.id },
    );

    // Click delegation — the click handler fires for any click inside the
    // wrapper; we identify toggle clicks by the `data-ls-toggle="1"` attribute
    // on the button. The CSS rule `pointer-events: none` on button children
    // guarantees `event.target` is the button itself, not a nested span.
    handle.on('click', (data) => {
      if (data.dataset?.lsToggle === '1') {
        collapsed = !collapsed;
        handle.update(renderFullHtml());
      }
    });

    const collapsibleHandle: CollapsibleDOMHandle = {
      get id() { return handle.id; },
      remove: handle.remove.bind(handle),
      on: handle.on.bind(handle),
      makeDraggable: handle.makeDraggable.bind(handle),
      injectChild: handle.injectChild.bind(handle),
      read: handle.read.bind(handle),
      isCollapsed: () => collapsed,
      setCollapsed(next: boolean) {
        collapsed = next;
        handle.update(renderFullHtml());
      },
      toggle() {
        collapsed = !collapsed;
        handle.update(renderFullHtml());
      },
      setTitle(title: string) {
        currentTitle = title;
        handle.update(renderFullHtml());
      },
      // Overrides DOMHandle.update() semantics: replace only the body HTML,
      // preserving title, chevron state, and aria-expanded.
      update(bodyHtml: string) {
        currentBody = bodyHtml;
        handle.update(renderFullHtml());
      },
    };
    return collapsibleHandle;
  }

  function messageFooter(
    messageId: string,
    html: string,
    options?: MessageFooterOptions,
  ): DOMHandle | CollapsibleDOMHandle {
    return messageBoundary(
      messageId, html, options,
      'ls-comp-msg-footer', 'footer', MESSAGE_FOOTER_CSS, footerFlag,
    );
  }

  // ── messageHeader ─────────────────────────────────────────────────────

  function messageHeader(
    messageId: string,
    html: string,
    options?: MessageHeaderOptions,
  ): DOMHandle | CollapsibleDOMHandle {
    return messageBoundary(
      messageId, html, options,
      'ls-comp-msg-header', 'header', MESSAGE_HEADER_CSS, headerFlag,
    );
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
      makeDraggable: handle.makeDraggable.bind(handle),
      injectChild: handle.injectChild.bind(handle),
      read: handle.read.bind(handle),
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
      handle.makeDraggable();
    }

    return handle;
  }

  // ── multiSelect ───────────────────────────────────────────────────────

  function multiSelect(options: MultiSelectOptions): Promise<string[] | null> {
    ensureStyles(MULTI_SELECT_CSS, multiSelectFlag);

    // Snapshot initial selection from the input items. Subsequent changes
    // are tracked in this Set; the input array is never mutated.
    const selected = new Set<string>();
    for (const it of options.items) {
      if (it.checked && !it.disabled) selected.add(it.key);
    }

    const confirmLabel = options.confirmLabel ?? 'Confirm';
    const cancelLabel  = options.cancelLabel  ?? 'Cancel';
    const minSelect    = options.minSelect ?? 0;
    const maxSelect    = options.maxSelect ?? Infinity;

    // Build the full body once. Checkbox state is managed by the browser
    // after the initial render — the backend just tracks `selected` from
    // change events. No re-renders on interaction, so focus never jumps.
    const renderBody = (): string => {
      const rows = options.items.map((it) => {
        const isChecked = selected.has(it.key);
        const itemClass = 'ls-comp-ms__item' + (it.disabled ? ' ls-comp-ms__item--disabled' : '');
        const descHtml  = it.description
          ? `<span class="ls-comp-ms__item-desc">${escapeHtml(it.description)}</span>`
          : '';
        return (
          `<label class="${itemClass}">` +
            `<input type="checkbox" class="ls-comp-ms__cb" ` +
              `data-ls-ms-key="${escapeHtml(it.key)}"` +
              `${isChecked ? ' checked' : ''}${it.disabled ? ' disabled' : ''}>` +
            `<span class="ls-comp-ms__item-body">` +
              `<span class="ls-comp-ms__item-label">${escapeHtml(it.label)}</span>` +
              descHtml +
            `</span>` +
          `</label>`
        );
      }).join('');

      const rangeHint = (() => {
        if (minSelect > 0 && Number.isFinite(maxSelect)) {
          return `Select ${minSelect}–${maxSelect}.`;
        }
        if (minSelect > 0) return `Select at least ${minSelect}.`;
        if (Number.isFinite(maxSelect)) return `Select up to ${maxSelect}.`;
        return '';
      })();

      const statusHtml = rangeHint
        ? `<div class="ls-comp-ms__status">${escapeHtml(rangeHint)}</div>`
        : '';

      return (
        `<div class="ls-comp-ms">` +
          `<div class="ls-comp-ms__list">${rows}</div>` +
          statusHtml +
          `<div class="ls-comp-ms__actions">` +
            `<button type="button" class="ls-comp-ms__btn" ` +
              `data-ls-ms-action="cancel">${escapeHtml(cancelLabel)}</button>` +
            `<button type="button" class="ls-comp-ms__btn ls-comp-ms__btn--confirm" ` +
              `data-ls-ms-action="confirm">${escapeHtml(confirmLabel)}</button>` +
          `</div>` +
        `</div>`
      );
    };

    return new Promise<string[] | null>((resolve) => {
      const modal = api.ui.showAdvancedModal({
        title:     options.title,
        width:     options.width ?? 480,
        maxHeight: options.maxHeight,
      });

      modal.root.update(renderBody());

      let resolved = false;
      const finish = (result: string[] | null): void => {
        if (resolved) return;
        resolved = true;
        resolve(result);
        modal.dismiss();
      };

      // Checkbox state → selected set.
      modal.root.on('change', (data) => {
        const key = data.dataset?.lsMsKey;
        if (typeof key !== 'string') return;
        if (data.targetChecked) selected.add(key);
        else selected.delete(key);
      });

      // Button clicks → Confirm/Cancel. Event delegation via data-ls-ms-action.
      modal.root.on('click', (data) => {
        const action = data.dataset?.lsMsAction;
        if (action === 'cancel') {
          finish(null);
          return;
        }
        if (action === 'confirm') {
          if (selected.size < minSelect) {
            const plural = minSelect === 1 ? 'item' : 'items';
            api.ui.toast(`Please select at least ${minSelect} ${plural}.`, 'warning');
            return;
          }
          if (selected.size > maxSelect) {
            const plural = maxSelect === 1 ? 'item' : 'items';
            api.ui.toast(`Please select at most ${maxSelect} ${plural}.`, 'warning');
            return;
          }
          // Return keys in the input item order, not the insertion order of
          // the Set (which reflects check-click order) — more predictable.
          const keys = options.items
            .filter((it) => selected.has(it.key))
            .map((it) => it.key);
          finish(keys);
        }
      });

      // Dismissal from the ✕ button, backdrop, Escape, or script teardown.
      // If the user clicked Cancel/Confirm we've already resolved; this
      // fires after `modal.dismiss()` but short-circuits on the `resolved`
      // guard. For user/teardown dismissal without an explicit choice,
      // resolve with `null`.
      modal.onDismiss(() => {
        if (!resolved) {
          resolved = true;
          resolve(null);
        }
      });
    });
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
    multiSelect,
  };
};
