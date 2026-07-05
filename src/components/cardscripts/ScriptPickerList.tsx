/**
 * Shared script-selection list for the card-scripts authoring surfaces (#12):
 * the toolbar "Bundle into card" modal AND the character-editor tab's
 * "Add from library" picker. A scrollable column of checkbox rows, each with a
 * Trigger/Library type badge + the script name. Selection state is owned by the
 * caller (this is a controlled, presentational component).
 *
 * Styles are self-contained (token + rgb fallback) so it renders identically on
 * a body-portal surface — where `--lumiverse-*` tokens are unset — and inside
 * the editor modal where they resolve.
 */
import type { FC, CSSProperties } from 'react';
import { Zap, Library } from 'lucide-react';
import type { Script } from '../../types/script.js';

const listStyle: CSSProperties = {
  maxHeight: 240, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2, margin: '6px 0',
};
const rowStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, padding: '4px 4px', cursor: 'pointer' };
const badgeStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4, padding: '1px 7px', borderRadius: 999,
  fontSize: 11, fontWeight: 600, flexShrink: 0,
  background: 'rgba(147,112,219,0.14)', color: 'rgb(147,112,219)', border: '1px solid rgba(147,112,219,0.30)',
};
const nameStyle: CSSProperties = {
  fontWeight: 600, fontSize: 13, color: 'var(--lumiverse-text, rgb(222,223,230))',
  flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
};

interface Props {
  scripts: Script[];
  selected: Set<string>;
  onToggle: (id: string) => void;
  /** Override the scroll cap (default 240px). */
  maxHeight?: number;
}

export const ScriptPickerList: FC<Props> = ({ scripts, selected, onToggle, maxHeight }) => (
  <div style={maxHeight !== undefined ? { ...listStyle, maxHeight } : listStyle}>
    {scripts.map((s) => (
      <label key={s.id} style={rowStyle}>
        <input type="checkbox" checked={selected.has(s.id)} onChange={() => onToggle(s.id)} />
        <span style={badgeStyle}>
          {s.type === 'trigger' ? <Zap size={11} /> : <Library size={11} />}
          {s.type === 'trigger' ? 'Trigger' : 'Library'}
        </span>
        <span style={nameStyle} title={s.name}>{s.name}</span>
      </label>
    ))}
  </div>
);
