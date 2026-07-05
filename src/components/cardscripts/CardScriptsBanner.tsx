/**
 * Passive "this character bundles scripts you don't have" banner (#12, Phase C).
 * Rendered inside the panel (NOT a body portal), so `--lumiverse-*` tokens
 * resolve — kept with rgb fallbacks anyway. Non-blocking: Review opens the
 * normal consent modal; Dismiss records the dismissal so it won't re-surface.
 */
import type { FC, CSSProperties } from 'react';
import { Package, X } from 'lucide-react';

interface Props {
  characterName: string | null;
  count: number;
  onReview: () => void;
  onDismiss: () => void;
}

const bannerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '7px 10px',
  margin: '6px 8px 0',
  borderRadius: 'var(--lumiverse-radius, 6px)',
  background: 'rgba(147,112,219,0.12)',
  border: '1px solid rgba(147,112,219,0.32)',
  color: 'var(--lumiverse-text, rgb(222,223,230))',
  fontSize: 12.5,
  lineHeight: 1.35,
};
const textStyle: CSSProperties = { flex: 1, minWidth: 0 };
const reviewStyle: CSSProperties = {
  flexShrink: 0,
  background: 'rgba(147,112,219,0.22)',
  border: '1px solid rgba(147,112,219,0.4)',
  color: 'var(--lumiverse-text, rgb(222,223,230))',
  borderRadius: 5,
  padding: '2px 10px',
  fontSize: 12,
  fontWeight: 600,
  cursor: 'pointer',
};
const dismissStyle: CSSProperties = {
  flexShrink: 0,
  display: 'inline-flex',
  background: 'none',
  border: 'none',
  color: 'var(--lumiverse-text-muted, rgba(222,223,230,0.6))',
  cursor: 'pointer',
  padding: 2,
};

export const CardScriptsBanner: FC<Props> = ({ characterName, count, onReview, onDismiss }) => (
  <div style={bannerStyle}>
    <Package size={14} style={{ flexShrink: 0, color: 'rgb(184,154,236)' }} />
    <span style={textStyle}>
      {characterName ? <b>{characterName}</b> : 'This character'} bundles {count} script{count === 1 ? '' : 's'} you don&apos;t have.
    </span>
    <button type="button" style={reviewStyle} onClick={onReview}>Review</button>
    <button type="button" style={dismissStyle} onClick={onDismiss} title="Dismiss — don't remind me for these" aria-label="Dismiss">
      <X size={13} />
    </button>
  </div>
);
