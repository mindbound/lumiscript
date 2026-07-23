/**
 * ============================================================================
 * LUMISCRIPT — EXPORT SCRIPTS AS PACK: SELECTION MODAL
 * ============================================================================
 * The "Export pack" toolbar action. Instead of exporting every script of the
 * active tab wholesale, it opens a selection list (the same `ScriptPickerList`
 * the "Bundle into card" modal uses) so the user picks exactly which scripts go
 * into the pack, plus a pack name. Export runs entirely on the frontend
 * (`exportScriptPack` builds the zip + triggers the download) — no backend
 * round-trip — so this is a plain controlled modal, not a persistent root.
 *
 * All scripts (both Trigger + Library) are shown; nothing is pre-selected
 * (matching the "Bundle into card" modal) — pick the ones to include, or use
 * Select all.
 *
 * Colours are hard-coded rgb() by choice, not necessity — `--lumiverse-*` tokens
 * are declared on `:root` and cascade into the ConfirmDialog's portal fine. Only
 * `--lumiverse-accent` resolves to nothing (the host never defines it; its accent
 * token is `--lumiverse-primary`).
 */
import { useState, type FC, type CSSProperties } from 'react';
import { Download } from 'lucide-react';
import type { Script } from '../../types/script.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { ScriptPickerList } from '../cardscripts/ScriptPickerList.js';

const TEXT = 'rgb(222,223,230)';
const MUTED = 'rgba(222,223,230,0.6)';
const DANGER = 'rgb(246,130,130)';

const noteStyle: CSSProperties = { color: MUTED, fontSize: 12, lineHeight: 1.5, marginBottom: 10 };
const sectionLabel: CSSProperties = { color: TEXT, fontSize: 12, fontWeight: 600, margin: '12px 0 6px', display: 'flex', alignItems: 'center' };
const errStyle: CSSProperties = { color: DANGER, fontSize: 12, lineHeight: 1.45, marginTop: 8 };
const linkBtn: CSSProperties = {
  marginLeft: 'auto', background: 'none', border: 'none', color: 'rgb(184,154,236)',
  fontSize: 11.5, cursor: 'pointer', padding: 0, fontWeight: 600,
};

interface Props {
  scripts: Script[];
  /** Perform the export with the chosen scripts + (trimmed) pack name. */
  onExport: (scripts: Script[], packName: string) => void;
  onCancel: () => void;
}

export const ExportPackModal: FC<Props> = ({ scripts, onExport, onCancel }) => {
  // Nothing pre-selected — matches the "Bundle into card" modal; the user picks
  // which scripts go into the pack (or clicks Select all).
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [packName, setPackName] = useState('my-scripts');
  const [error, setError] = useState<string | null>(null);

  const allSelected = scripts.length > 0 && selected.size === scripts.length;

  const toggle = (id: string): void => setSelected((s) => {
    const next = new Set(s);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const toggleAll = (): void => setSelected(allSelected ? new Set() : new Set(scripts.map((s) => s.id)));

  const confirm = (): void => {
    const name = packName.trim();
    if (selected.size === 0) { setError('Select at least one script to export.'); return; }
    if (!name) { setError('Enter a pack name.'); return; }
    onExport(scripts.filter((s) => selected.has(s.id)), name);
  };

  const confirmLabel = selected.size > 0
    ? `Export ${selected.size} script${selected.size === 1 ? '' : 's'}`
    : 'Export';

  return (
    <ConfirmDialog
      title="Export scripts as pack"
      confirmLabel={confirmLabel}
      confirmIcon={<Download size={12} />}
      cancelLabel="Cancel"
      wide
      onConfirm={confirm}
      onCancel={onCancel}
    >
      <p style={noteStyle}>
        Choose the scripts to include, then download a shareable <b>.lumiscript.zip</b> pack. Scripts install
        {' '}<b>disabled</b> when the pack is imported.
      </p>

      <div className="ls-prompt-label">Pack name</div>
      <input
        className="ls-prompt-input"
        type="text"
        value={packName}
        placeholder="my-scripts"
        aria-label="Pack name"
        onChange={(e) => { setPackName(e.target.value); if (error) setError(null); }}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); confirm(); } }}
      />

      <div style={sectionLabel}>
        <span>Scripts ({selected.size}/{scripts.length} selected)</span>
        {scripts.length > 0 ? (
          <button type="button" onClick={toggleAll} style={linkBtn}>{allSelected ? 'Clear' : 'Select all'}</button>
        ) : null}
      </div>
      {scripts.length === 0 ? (
        <div style={{ ...noteStyle, marginBottom: 0 }}>No scripts to export.</div>
      ) : (
        <ScriptPickerList scripts={scripts} selected={selected} onToggle={toggle} />
      )}

      {error ? <div style={errStyle}>{error}</div> : null}
    </ConfirmDialog>
  );
};
