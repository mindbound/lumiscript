/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: AUTHORING MODAL (#12, Phase 3b)
 * ============================================================================
 * "Bundle into character card": pick scripts + a target character, and write a
 * LumiscriptCardExtension envelope into that character's `extensions.lumiscript`
 * (so the scripts ride along when the card is exported). The actual write is
 * BACKEND-AUTHORITY — this modal sends only the chosen script ids + character id
 * (`ls_card_scripts_export`); the backend loads the real scripts from storage.
 *
 * Mounted in its own frontend root (like the consent host) and opened via the
 * `ls:open-bundle-modal` window event the script-manager toolbar dispatches —
 * avoids threading onBackendMessage through ManagePanel/ScriptList.
 *
 * Colours are hard-coded rgb(). That's belt-and-braces, NOT a portal
 * requirement: `--lumiverse-*` tokens are declared on `:root` and cascade into
 * portals fine. The long-standing "tokens are unset in portals" note was a
 * misdiagnosis — the only token that resolves to nothing is `--lumiverse-accent`,
 * which the host never defines (its accent token is `--lumiverse-primary`).
 */
import { useEffect, useMemo, useRef, useState, type FC, type CSSProperties } from 'react';
import type { SpindleSelectOption } from 'lumiverse-spindle-types';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { HostSelect } from '../common/HostSelect.js';
import { ScriptPickerList } from './ScriptPickerList.js';
import { OPEN_BUNDLE_EVENT, overCapWarning, lengthWarnings, bindingWarning, type OpenBundleDetail } from './bundle-helpers.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import type { Script } from '../../types/script.js';

type CharsList = Extract<BackendToFrontend, { type: 'ls_characters_list' }>;
type ExportResult = Extract<BackendToFrontend, { type: 'ls_card_scripts_export_result' }>;

// ─── Styling (hard-coded — body-portal surface) ──────────────────────────────

const TEXT = 'rgb(222,223,230)';
const MUTED = 'rgba(222,223,230,0.6)';
const WARN = 'rgb(214,158,46)';
const DANGER = 'rgb(246,130,130)';

const noteStyle: CSSProperties = { color: MUTED, fontSize: 12, lineHeight: 1.5, marginBottom: 10 };
const sectionLabel: CSSProperties = { color: TEXT, fontSize: 12, fontWeight: 600, margin: '12px 0 6px' };
const warnStyle: CSSProperties = { color: WARN, fontSize: 11.5, lineHeight: 1.45, marginTop: 6 };
const errStyle: CSSProperties = { color: DANGER, fontSize: 12, lineHeight: 1.45, marginTop: 8 };
const metaNote: CSSProperties = { color: MUTED, fontSize: 11, marginTop: 5 };
const linkBtn: CSSProperties = {
  marginLeft: 'auto', background: 'none', border: 'none', color: 'rgb(184,154,236)',
  fontSize: 11.5, cursor: 'pointer', padding: 0, fontWeight: 600,
};

interface Props {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const BundleIntoCardModal: FC<Props> = ({ onBackendMessage, sendToBackend }) => {
  const [open, setOpen] = useState(false);
  const [scripts, setScripts] = useState<Script[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [characters, setCharacters] = useState<{ id: string; name: string; avatarUrl?: string }[] | null>(null);
  const [charactersTotal, setCharactersTotal] = useState(0);
  const [characterId, setCharacterId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Per-submit token (this modal is mounted persistently and keeps receiving
  // backend messages while closed). `activeRequestRef` holds the token of the
  // in-flight submit; a result for any other token is from an abandoned earlier
  // submit and must be ignored so it can't hijack a freshly-reopened session.
  const reqSeqRef = useRef(0);
  const activeRequestRef = useRef<string | null>(null);

  // Backend replies (character list + export result). The central panel handler
  // ignores these types; this independent subscription owns them.
  useEffect(() => onBackendMessage((raw) => {
    const type = (raw as { type?: string })?.type;
    if (type === 'ls_characters_list') {
      const msg = raw as CharsList;
      setCharacters(msg.characters);
      setCharactersTotal(msg.total);
    } else if (type === 'ls_card_scripts_export_result') {
      const msg = raw as ExportResult;
      if (msg.requestId !== activeRequestRef.current) return;   // stale/abandoned submit — ignore
      activeRequestRef.current = null;
      if (msg.ok) setOpen(false);           // backend toasts the success summary
      else { setError(msg.error ?? 'Bundling failed.'); setSubmitting(false); }
    }
  }), [onBackendMessage]);

  // Open signal from the toolbar (carries the current scripts snapshot).
  useEffect(() => {
    const handler = (e: Event): void => {
      const detail = (e as CustomEvent<OpenBundleDetail>).detail;
      setScripts(detail?.scripts ?? []);
      setSelected(new Set());
      setCharacterId('');
      setError(null);
      setSubmitting(false);
      setCharacters(null);
      setCharactersTotal(0);
      activeRequestRef.current = null;       // fresh session — no in-flight submit
      setOpen(true);
      sendToBackend({ type: 'ls_list_characters' });
    };
    window.addEventListener(OPEN_BUNDLE_EVENT, handler);
    return () => window.removeEventListener(OPEN_BUNDLE_EVENT, handler);
  }, [sendToBackend]);

  const options: SpindleSelectOption[] = useMemo(
    () => (characters ?? []).map((c) => ({
      value: c.id,
      label: c.name,
      // Avatar thumbnail in both the dropdown rows and the selected trigger;
      // falls back to an initial bubble when the character has no portrait.
      leading: {
        type: 'image',
        src: c.avatarUrl ?? '',
        alt: c.name,
        rounded: true,
        fallback: { text: (c.name.trim().charAt(0) || '?').toUpperCase() },
      },
    })),
    [characters],
  );

  if (!open) return null;

  const selectedScripts = scripts.filter((s) => selected.has(s.id));
  const capWarn = overCapWarning(selected.size);
  const lenWarns = lengthWarnings(selectedScripts);
  const bindWarn = bindingWarning(selectedScripts);
  const allSelected = scripts.length > 0 && selected.size === scripts.length;

  const toggle = (id: string): void => setSelected((s) => {
    const next = new Set(s);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const toggleAll = (): void => setSelected(allSelected ? new Set() : new Set(scripts.map((s) => s.id)));

  const confirm = (): void => {
    if (submitting) return;                                   // guard double-submit (button can't be disabled)
    if (selected.size === 0) { setError('Select at least one script to bundle.'); return; }
    if (!characterId) { setError('Choose a target character.'); return; }
    const requestId = String(++reqSeqRef.current);
    activeRequestRef.current = requestId;
    setError(null);
    setSubmitting(true);
    sendToBackend({ type: 'ls_card_scripts_export', requestId, scriptIds: [...selected], characterId });
  };

  const confirmLabel = submitting
    ? 'Bundling…'
    : selected.size > 0 && characterId
      ? `Bundle ${selected.size} script${selected.size === 1 ? '' : 's'}`
      : 'Bundle';

  return (
    <ConfirmDialog
      title="Bundle scripts into a character card"
      confirmLabel={confirmLabel}
      cancelLabel="Cancel"
      wide
      overlayZIndex={10010}
      onConfirm={confirm}
      onCancel={() => {
        // Abandon any in-flight submit: drop its token so its late result can't
        // reopen/error a future session, and clear the busy state.
        activeRequestRef.current = null;
        setSubmitting(false);
        setOpen(false);
      }}
    >
      <p style={noteStyle}>
        Selected scripts are written into the character card's data. Export the card afterwards to share them. Scripts install <b>disabled</b> when imported.
      </p>

      <div style={sectionLabel}>Target character</div>
      {characters === null ? (
        <div style={{ ...noteStyle, marginBottom: 0 }}>Loading characters…</div>
      ) : characters.length === 0 ? (
        <div style={{ ...noteStyle, marginBottom: 0 }}>No characters found.</div>
      ) : (
        <>
          <HostSelect
            options={options}
            value={characterId}
            onChange={setCharacterId}
            placeholder="Select a character…"
            ariaLabel="Target character"
          />
          {charactersTotal > characters.length ? (
            <div style={metaNote}>Showing {characters.length} of {charactersTotal} characters.</div>
          ) : null}
        </>
      )}

      <div style={{ ...sectionLabel, display: 'flex', alignItems: 'center' }}>
        <span>Scripts ({selected.size}/{scripts.length} selected)</span>
        {scripts.length > 0 ? (
          <button type="button" onClick={toggleAll} style={linkBtn}>{allSelected ? 'Clear' : 'Select all'}</button>
        ) : null}
      </div>
      {scripts.length === 0 ? (
        <div style={{ ...noteStyle, marginBottom: 0 }}>No scripts to bundle.</div>
      ) : (
        <ScriptPickerList scripts={scripts} selected={selected} onToggle={toggle} />
      )}

      {capWarn ? <div style={warnStyle}>⚠ {capWarn}</div> : null}
      {bindWarn ? <div style={warnStyle}>⚠ {bindWarn}</div> : null}
      {lenWarns.map((w, i) => <div key={i} style={warnStyle}>⚠ {w}</div>)}
      {error ? <div style={errStyle}>{error}</div> : null}
    </ConfirmDialog>
  );
};
