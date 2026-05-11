/**
 * ============================================================================
 * LUMISCRIPT — COMPONENT STYLES ASSEMBLER
 * ============================================================================
 * Imports all per-concern CSS files as raw strings via Bun's text loader
 * (using import attributes) and concatenates them into a single PANEL_CSS
 * string for ctx.dom.addStyle().
 *
 * The `with { type: 'text' }` attribute overrides Bun's default CSS bundler
 * and returns each file's contents as a plain string.
 *
 * File layout:
 *   base.css      — panel layout, tab pills, icon-btn, primary btn
 *   list.css      — script list header, type tabs, list items, binding badges
 *   editor.css    — editor view, topbar, Monaco wrapper, metadata footer
 *   console.css   — console accordion, log entry types
 *   bindings.css  — bindings section, chips, add button
 *   triggers.css  — triggers section, event chip toggles
 *   modal.css     — modal overlay, card, header, sidebar/main layout
 *   status.css    — status tab, event badges, placeholder
 *   settings.css  — settings panel, toggle switch, count cards
 */

import BASE_CSS         from './base.css'         with { type: 'text' };
import LIST_CSS         from './list.css'         with { type: 'text' };
import EDITOR_CSS       from './editor.css'       with { type: 'text' };
import CONSOLE_CSS      from './console.css'      with { type: 'text' };
import BINDINGS_CSS     from './bindings.css'     with { type: 'text' };
import TRIGGERS_CSS     from './triggers.css'     with { type: 'text' };
import MODAL_CSS        from './modal.css'        with { type: 'text' };
import STATUS_CSS       from './status.css'       with { type: 'text' };
import SETTINGS_CSS     from './settings.css'     with { type: 'text' };
import REFERENCE_CSS    from './reference.css'    with { type: 'text' };
import DIAGNOSTICS_CSS  from './diagnostics.css'  with { type: 'text' };
export const PANEL_CSS =
  BASE_CSS +
  LIST_CSS +
  EDITOR_CSS +
  CONSOLE_CSS +
  BINDINGS_CSS +
  TRIGGERS_CSS +
  MODAL_CSS +
  STATUS_CSS +
  SETTINGS_CSS +
  REFERENCE_CSS +
  DIAGNOSTICS_CSS;
