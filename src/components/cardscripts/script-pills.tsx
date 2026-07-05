/**
 * Shared visual primitives for presenting a script's shape — the type badge,
 * event-hook pills, and size formatting — so the card-editor tab, the import
 * consent modal, and the delete-script confirm all render scripts identically.
 *
 * Styles are token + rgb-fallback so they look right both inside the editor
 * modal (where `--lumiverse-*` resolve) and on body-portal surfaces (where they
 * don't — the consent modal and confirm dialogs).
 */
import type { FC, CSSProperties } from 'react';
import { Zap, Library } from 'lucide-react';
import type { ScriptType } from '../../types/script.js';

const ACCENT = 'rgb(147,112,219)';
const DIM = 'var(--lumiverse-text-dim, rgb(150,152,165))';
const BORDER = 'var(--lumiverse-border, rgba(255,255,255,0.10))';

/** Neutral info pill (event hook, size, author, folder…). */
export const pillStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4, padding: '1px 7px', borderRadius: 999, fontSize: 11,
  background: 'var(--lumiverse-fill, rgba(255,255,255,0.06))', color: DIM, border: `1px solid ${BORDER}`,
};

/** Accent-tinted Trigger/Library type badge. */
export const typeBadgeStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4, padding: '1px 7px', borderRadius: 999,
  fontSize: 11, fontWeight: 600, background: 'rgba(147,112,219,0.14)', color: ACCENT, border: '1px solid rgba(147,112,219,0.30)',
};

export function formatSizeChars(n: number): string {
  return n >= 1024 ? `${(n / 1024).toFixed(1)} KB` : `${n} chars`;
}

export function formatScriptSize(code: string): string {
  return formatSizeChars(code.length);
}

export const TypeBadge: FC<{ type: ScriptType }> = ({ type }) => (
  <span style={typeBadgeStyle}>
    {type === 'trigger' ? <Zap size={11} /> : <Library size={11} />}
    {type === 'trigger' ? 'Trigger' : 'Library'}
  </span>
);

/** Event-hook pills for a trigger script (or a muted "no event hooks"); nothing for a library. */
export const HookPills: FC<{ type: ScriptType; triggers?: string[] }> = ({ type, triggers }) => {
  if (type !== 'trigger') return null;
  const hooks = triggers ?? [];
  if (hooks.length === 0) return <span style={{ ...pillStyle, color: DIM }}>no event hooks</span>;
  return <>{hooks.map((t) => <span key={t} style={pillStyle}><Zap size={10} />{t}</span>)}</>;
};
