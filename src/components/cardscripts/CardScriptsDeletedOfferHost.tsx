/**
 * Card-delete cleanup offer (#12, Phase D). When a character whose card
 * installed LumiScript scripts is deleted, the backend sends a non-destructive
 * OFFER to remove those scripts. This host renders a danger-variant confirm
 * (default: Keep) and, on confirm, fires the existing `delete_script` per script
 * — which also records the dismissal (Phase B), so they won't be re-offered.
 *
 * Own frontend root (like the consent host); colours hard-coded rgb() by choice
 * — `--lumiverse-*` tokens ARE declared on `:root` and cascade into portals fine.
 * Only `--lumiverse-accent` is undefined host-side (its accent is
 * `--lumiverse-primary`).
 */
import { useEffect, useState, type FC, type CSSProperties } from 'react';
import { Trash2 } from 'lucide-react';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { TypeBadge, HookPills, pillStyle, formatSizeChars } from './script-pills.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';

type Offer = Extract<BackendToFrontend, { type: 'ls_card_scripts_deleted_offer' }>;

const bodyStyle: CSSProperties = { color: 'rgb(222,223,230)', fontSize: 13, lineHeight: 1.5, marginBottom: 8 };
const listStyle: CSSProperties = { margin: 0, maxHeight: 220, overflowY: 'auto' };
const scriptBoxStyle: CSSProperties = { border: '1px solid rgba(255,255,255,0.10)', borderRadius: 6, background: 'rgba(255,255,255,0.03)', padding: '8px 10px', marginBottom: 6 };
const bindLineStyle: CSSProperties = { marginTop: 8, fontSize: 11.5, color: 'rgba(222,223,230,0.7)' };

interface Props {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const CardScriptsDeletedOfferHost: FC<Props> = ({ onBackendMessage, sendToBackend }) => {
  const [queue, setQueue] = useState<Offer[]>([]);
  const current = queue[0] ?? null;

  useEffect(() => onBackendMessage((raw) => {
    if ((raw as { type?: string })?.type === 'ls_card_scripts_deleted_offer') {
      setQueue((q) => [...q, raw as Offer]);
    }
  }), [onBackendMessage]);

  if (!current) return null;

  const advance = (): void => setQueue((q) => q.slice(1));
  const remove = (): void => {
    for (const s of current.scripts) sendToBackend({ type: 'delete_script', id: s.id });
    advance();
  };

  const n = current.scripts.length;

  return (
    <ConfirmDialog
      title="Remove the card's scripts?"
      icon={<Trash2 size={15} style={{ color: 'rgb(246,130,130)' }} />}
      variant="danger"
      confirmLabel={`Remove ${n} script${n === 1 ? '' : 's'}`}
      cancelLabel="Keep"
      overlayZIndex={10010}
      onConfirm={remove}
      onCancel={advance}
    >
      <p style={bodyStyle}>
        {current.characterName ? <b>{current.characterName}</b> : 'A character'} was deleted. It installed{' '}
        {n} script{n === 1 ? '' : 's'} — remove {n === 1 ? 'it' : 'them'} too?
      </p>
      <div style={listStyle}>
        {current.scripts.map((s) => (
          <div key={s.id} style={scriptBoxStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <TypeBadge type={s.type} />
              <span style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</span>
              <HookPills type={s.type} triggers={s.triggers} />
              <span style={pillStyle}>{formatSizeChars(s.sizeChars)}</span>
            </div>
            {s.bindingNames && s.bindingNames.length > 0 ? (
              <div style={bindLineStyle}>Bound to {s.bindingNames.join(', ')}</div>
            ) : null}
          </div>
        ))}
      </div>
    </ConfirmDialog>
  );
};
