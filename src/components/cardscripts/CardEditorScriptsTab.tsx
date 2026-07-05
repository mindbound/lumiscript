/**
 * ============================================================================
 * LUMISCRIPT — CHARACTER-EDITOR "LumiScript" TAB (#12, Phase E)
 * ============================================================================
 * A tab inside Lumiverse's native character-editor modal (registered via
 * `ctx.ui.registerCharacterEditorTab`, host commit 5fa15552 / spindle-types
 * 0.5.27). It manages the scripts bundled into the character card being edited
 * — read from the editor's DRAFT `extensions.lumiscript` (reflects unsaved
 * edits) and parsed with the same defensive `extractEmbeddedScripts` the import
 * path uses (one source of truth).
 *
 *   - Phase 1: read-only view of the bundled scripts as compact cards.
 *   - Phase 2: DELETE a bundled script (auto-persists via the editor's
 *     `updateExtensions(..., {immediate})` → wholesale-replace save).
 *   - Phase 3: per-script INSTALLED-STATUS badges + LATE-IMPORT (opens the
 *     standard consent modal; backend reads the SAVED card, never FE data).
 *   - Phase 4 (this revision): BUNDLE-FROM-HERE — add scripts from your library
 *     into the edited card. The backend builds the embedded entries from real
 *     storage (backend-authority); the FE merges them into the draft and the
 *     editor auto-saves. Reuses the card's existing bundleCardId or mints one.
 *
 * Mounted as its own React root into the host-provided tab `root` (see
 * frontend.tsx). Destructive confirms use the host-native `ctx.ui.showConfirm`
 * (bridged in as `confirm`), which layers above the editor modal.
 */
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { FC, CSSProperties } from 'react';
import type {
  SpindleCharacterEditorHelper,
  SpindleCharacterEditorState,
  SpindleConfirmOptions,
} from 'lumiverse-spindle-types';
import { AlertTriangle, Package, Trash2, Download, CheckCircle2, ArrowUpCircle, Plus, Folder } from 'lucide-react';
import { extractEmbeddedScripts } from '../../engine/card-scripts.js';
import { ScriptPickerList } from './ScriptPickerList.js';
import { TypeBadge, HookPills, pillStyle, formatScriptSize } from './script-pills.js';
import { LUMISCRIPT_CARD_FORMAT_VERSION, type EmbeddedScriptEntry } from '../../types/card-scripts.js';
import type { Script } from '../../types/script.js';
import type { FrontendToBackend, BackendToFrontend } from '../../types/messages.js';

type ScriptStatus = {
  state: 'installed' | 'not-installed' | 'update-available' | 'library-newer';
  installedName?: string;
  installedEnabled?: boolean;
};

interface Props {
  /** Host helper exposing the live editor draft + safe extension mutators. */
  editor: SpindleCharacterEditorHelper;
  /** Host-native confirm (themed, layers above the editor modal). Resolves true on confirm. */
  confirm: (opts: SpindleConfirmOptions) => Promise<boolean>;
  sendToBackend: (msg: FrontendToBackend) => void;
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
}

const ACCENT = 'rgb(147,112,219)';
const TEXT = 'var(--lumiverse-text, rgb(222,223,230))';
const DIM = 'var(--lumiverse-text-dim, rgb(150,152,165))';
const BORDER = 'var(--lumiverse-border, rgba(255,255,255,0.10))';
const RADIUS = 'var(--lumiverse-radius, 6px)';
const GREEN = 'rgb(110,190,130)';
const AMBER = 'rgb(220,180,90)';
const FILL_SUBTLE = 'var(--lumiverse-fill-subtle, rgba(255,255,255,0.03))';

const wrapStyle: CSSProperties = { padding: '4px 2px', color: TEXT, fontSize: 13, lineHeight: 1.4 };
const headerStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, margin: '2px 0 12px' };
const cardStyle: CSSProperties = { border: `1px solid ${BORDER}`, borderRadius: RADIUS, background: FILL_SUBTLE, padding: '10px 12px', marginBottom: 8 };
const rowStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' };
const nameStyle: CSSProperties = { fontWeight: 600, fontSize: 13.5, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };
const descStyle: CSSProperties = { color: DIM, fontSize: 12, marginTop: 6 };
const metaRowStyle: CSSProperties = { ...rowStyle, marginTop: 8, gap: 6 };
const iconBtnStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, flexShrink: 0, padding: 0,
  background: 'transparent', border: `1px solid ${BORDER}`, borderRadius: RADIUS, color: DIM, cursor: 'pointer',
};
const accentBtnStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: RADIUS, fontSize: 12, fontWeight: 600,
  background: 'rgba(147,112,219,0.16)', color: ACCENT, border: '1px solid rgba(147,112,219,0.34)', cursor: 'pointer',
};
const ghostBtnStyle: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: RADIUS, fontSize: 12,
  background: 'transparent', color: DIM, border: `1px solid ${BORDER}`, cursor: 'pointer',
};
const emptyStyle: CSSProperties = { color: DIM, fontSize: 12.5, padding: '18px 4px', textAlign: 'center' };
const warnStyle: CSSProperties = {
  display: 'flex', gap: 8, alignItems: 'flex-start', padding: '9px 11px', borderRadius: RADIUS, fontSize: 12.5,
  background: 'rgba(220,160,40,0.10)', border: '1px solid rgba(220,160,40,0.32)', color: 'var(--lumiverse-text, rgb(230,210,170))',
};
const pickerStyle: CSSProperties = { border: `1px solid ${BORDER}`, borderRadius: RADIUS, background: FILL_SUBTLE, padding: '10px 12px', marginBottom: 10 };
const pickerActionsStyle: CSSProperties = { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 4 };

/** The de-dup id a library script would take inside a card bundle. */
function libraryBundleId(s: Script): string {
  return s.bundledFrom?.bundleId ?? s.id;
}

/**
 * Immutably drop the embedded script with `bundleId` from a draft extensions
 * blob. Removing the last one drops the whole `lumiscript` key (clean card).
 */
function removeEmbeddedScript(ext: Record<string, unknown>, bundleId: string): Record<string, unknown> {
  const next = { ...ext };
  const ls = next.lumiscript;
  if (ls === null || typeof ls !== 'object' || Array.isArray(ls)) return next;
  const env = ls as Record<string, unknown>;
  const scripts = Array.isArray(env.scripts) ? env.scripts : [];
  const remaining = scripts.filter(
    (s) => !(s !== null && typeof s === 'object' && (s as Record<string, unknown>).bundleId === bundleId),
  );
  if (remaining.length === 0) delete next.lumiscript;
  else next.lumiscript = { ...env, scripts: remaining };
  return next;
}

/**
 * Immutably merge backend-built entries into the draft's `lumiscript` bundle.
 * Reuses the card's existing `bundleCardId` (so re-shares update in place) or
 * mints a fresh one for a card that had no bundle. Same-`bundleId` entries are
 * replaced, not duplicated.
 */
function addEmbeddedEntries(ext: Record<string, unknown>, entries: EmbeddedScriptEntry[]): Record<string, unknown> {
  if (entries.length === 0) return ext;
  const next = { ...ext };
  const ls = next.lumiscript;
  const env = (ls !== null && typeof ls === 'object' && !Array.isArray(ls)) ? (ls as Record<string, unknown>) : undefined;
  const cardId = (env && typeof env.bundleCardId === 'string' && env.bundleCardId.trim() !== '') ? env.bundleCardId : crypto.randomUUID();
  const prev = (env && Array.isArray(env.scripts)) ? env.scripts : [];
  const newIds = new Set(entries.map((e) => e.bundleId));
  const merged = [
    ...prev.filter((s) => !(s !== null && typeof s === 'object' && newIds.has((s as Record<string, unknown>).bundleId as string))),
    ...entries,
  ];
  next.lumiscript = { formatVersion: LUMISCRIPT_CARD_FORMAT_VERSION, bundleCardId: cardId, scripts: merged };
  return next;
}

const StatusBadge: FC<{ status: ScriptStatus }> = ({ status }) => {
  switch (status.state) {
    case 'installed':
      return (
        <span style={{ ...pillStyle, color: GREEN, borderColor: 'rgba(110,190,130,0.30)' }} title={status.installedName ? `In your library as "${status.installedName}"${status.installedEnabled ? ' (enabled)' : ' (disabled)'}` : undefined}>
          <CheckCircle2 size={10} /> In your library
        </span>
      );
    case 'update-available':
      return <span style={{ ...pillStyle, color: AMBER, borderColor: 'rgba(220,180,90,0.32)' }}><ArrowUpCircle size={10} /> Update available</span>;
    case 'library-newer':
      return <span style={pillStyle} title="Your installed copy is newer than the card's">Library is newer</span>;
    case 'not-installed':
    default:
      return <span style={pillStyle}>Not in your library</span>;
  }
};

const ScriptCard: FC<{ entry: EmbeddedScriptEntry; status?: ScriptStatus; onDelete: () => void }> = ({ entry, status, onDelete }) => {
  const meta = entry.metadata;
  const bindings = entry.bindings ?? [];
  return (
    <div style={cardStyle}>
      <div style={rowStyle}>
        <TypeBadge type={entry.type} />
        <span style={{ ...nameStyle, flex: 1 }} title={entry.name}>{entry.name}</span>
        {meta?.version && <span style={pillStyle}>v{meta.version}</span>}
        <button type="button" style={iconBtnStyle} title="Remove from card" aria-label={`Remove ${entry.name} from card`} onClick={onDelete}>
          <Trash2 size={13} />
        </button>
      </div>

      {meta?.description && <div style={descStyle}>{meta.description}</div>}

      <div style={metaRowStyle}>
        {status && <StatusBadge status={status} />}
        <HookPills type={entry.type} triggers={entry.triggers} />
        <span style={pillStyle}>{formatScriptSize(entry.code)}</span>
        {meta?.author && <span style={pillStyle}>by {meta.author}</span>}
        {entry.folder && <span style={pillStyle}><Folder size={10} />{entry.folder}</span>}
      </div>

      {bindings.length > 0 && (
        <div style={{ ...descStyle, marginTop: 8 }}>
          Bound to {bindings.map((b) => b.displayName).join(', ')}
          <span style={{ color: DIM, fontStyle: 'italic' }}> — bindings don&apos;t transfer to importers</span>
        </div>
      )}
    </div>
  );
};

const AddFromLibrary: FC<{ library: Script[]; bundledIds: Set<string>; onAdd: (ids: string[]) => void; onClose: () => void }> = ({ library, bundledIds, onAdd, onClose }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const addable = useMemo(() => library.filter((s) => !bundledIds.has(libraryBundleId(s))), [library, bundledIds]);
  const toggle = (id: string): void => setSelected((prev) => {
    const n = new Set(prev);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });
  return (
    <div style={pickerStyle}>
      <div style={{ fontWeight: 600, fontSize: 12.5 }}>Add scripts from your library</div>
      {library.length === 0 && <div style={descStyle}>Loading your scripts…</div>}
      {library.length > 0 && addable.length === 0 && <div style={descStyle}>All your scripts are already bundled into this card.</div>}
      {addable.length > 0 && (
        <ScriptPickerList scripts={addable} selected={selected} onToggle={toggle} maxHeight={220} />
      )}
      <div style={pickerActionsStyle}>
        <button type="button" style={ghostBtnStyle} onClick={onClose}>Cancel</button>
        <button type="button" style={{ ...accentBtnStyle, opacity: selected.size === 0 ? 0.5 : 1 }} disabled={selected.size === 0} onClick={() => onAdd([...selected])}>
          <Plus size={13} /> Add{selected.size > 0 ? ` ${selected.size}` : ''} to card
        </button>
      </div>
    </div>
  );
};

export const CardEditorScriptsTab: FC<Props> = ({ editor, confirm, sendToBackend, onBackendMessage }) => {
  const [state, setState] = useState<SpindleCharacterEditorState>(() => editor.getState());
  const [statuses, setStatuses] = useState<Record<string, ScriptStatus>>({});
  const [library, setLibrary] = useState<Script[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const pendingBuildRef = useRef<{ requestId: string; characterId: string } | null>(null);

  useEffect(() => editor.onChange(setState), [editor]);

  const parsed = useMemo(() => extractEmbeddedScripts(state.extensions), [state.extensions]);

  const requestStatus = useCallback(() => {
    const s = editor.getState();
    if (s.open && s.characterId) sendToBackend({ type: 'ls_card_editor_status', characterId: s.characterId });
  }, [editor, sendToBackend]);

  // Refresh status when the open character changes; clear when the editor closes.
  useEffect(() => {
    if (state.open && state.characterId) requestStatus();
    else { setStatuses({}); setPickerOpen(false); }
  }, [state.open, state.characterId, requestStatus]);

  // Pull the library list whenever the picker opens.
  useEffect(() => {
    if (pickerOpen) sendToBackend({ type: 'get_scripts' });
  }, [pickerOpen, sendToBackend]);

  // Backend replies: status result + install nudge + library list + built entries.
  useEffect(() => {
    return onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      if (msg.type === 'ls_card_editor_status_result') {
        if (msg.characterId !== editor.getState().characterId) return; // stale (character switched)
        const next: Record<string, ScriptStatus> = {};
        for (const st of msg.statuses) next[st.bundleId] = { state: st.state, installedName: st.installedName, installedEnabled: st.installedEnabled };
        setStatuses(next);
      } else if (msg.type === 'ls_card_editor_status_stale') {
        requestStatus();
      } else if (msg.type === 'scripts_updated') {
        setLibrary(msg.scripts);
      } else if (msg.type === 'ls_card_editor_bundle_entries') {
        const pending = pendingBuildRef.current;
        if (!pending || msg.requestId !== pending.requestId) return; // stale / not ours
        pendingBuildRef.current = null;
        // Never merge into a card other than the one the build was started for —
        // a character switch mid-round-trip would otherwise auto-save the wrong
        // card's bundle (the read-only status path guards on characterId too).
        if (editor.getState().characterId !== pending.characterId) return;
        try {
          editor.updateExtensions((ext) => addEmbeddedEntries(ext, msg.entries), { immediate: true });
          // The added entries are library scripts → content-present in the
          // library, so badge them 'installed' optimistically. (Re-reading the
          // just-saved card would race: the editor's immediate-save nulls its
          // pending ref, so a follow-up flush() resolves before the REST write
          // lands and the status read would see the pre-merge card.)
          setStatuses((prev) => {
            const next = { ...prev };
            for (const e of msg.entries) next[e.bundleId] = { state: 'installed', installedName: e.name };
            return next;
          });
        } catch (err) {
          console.warn('[LumiScript] bundle-from-library merge failed:', err);
        }
      }
    });
  }, [onBackendMessage, editor, requestStatus]);

  const handleDelete = useCallback(async (entry: EmbeddedScriptEntry) => {
    const ok = await confirm({
      title: 'Remove bundled script',
      message: `Remove "${entry.name}" from this character card? This edits the card only — any copy already installed in your library is left untouched.`,
      variant: 'danger',
      confirmLabel: 'Remove',
    });
    if (!ok) return;
    try {
      editor.updateExtensions((ext) => removeEmbeddedScript(ext, entry.bundleId), { immediate: true });
    } catch (err) {
      console.warn('[LumiScript] remove bundled script failed:', err);
    }
  }, [confirm, editor]);

  const handleImport = useCallback(async () => {
    const s = editor.getState();
    if (!s.characterId) return;
    try { await editor.flush(); } catch { /* best-effort */ }
    sendToBackend({ type: 'ls_card_editor_import', characterId: s.characterId });
  }, [editor, sendToBackend]);

  const handleAddSelected = useCallback((scriptIds: string[]) => {
    if (scriptIds.length === 0) return;
    const characterId = editor.getState().characterId;
    if (!characterId) return;
    const requestId = crypto.randomUUID();
    pendingBuildRef.current = { requestId, characterId };
    sendToBackend({ type: 'ls_card_editor_bundle_build', requestId, scriptIds });
    setPickerOpen(false);
  }, [editor, sendToBackend]);

  if (!state.open || !state.characterId) return null;

  // A malformed bundle is read-only (adding would overwrite the unreadable data).
  if (parsed.kind === 'invalid') {
    return (
      <div style={wrapStyle}>
        <div style={warnStyle}>
          <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>This character has a LumiScript bundle that couldn&apos;t be read: {parsed.reason}</span>
        </div>
      </div>
    );
  }

  const scripts = parsed.kind === 'ok' ? parsed.scripts : [];
  const isEmpty = scripts.length === 0;
  const bundledIds = new Set(scripts.map((e) => e.bundleId));
  const hasActionable = scripts.some((sc) => {
    const st = statuses[sc.bundleId];
    return !st || st.state === 'not-installed' || st.state === 'update-available';
  });

  return (
    <div style={wrapStyle}>
      <div style={headerStyle}>
        <Package size={16} color={ACCENT} />
        <span style={{ fontWeight: 600, flex: 1 }}>
          {isEmpty ? 'No bundled scripts' : `${scripts.length} bundled script${scripts.length === 1 ? '' : 's'}`}
        </span>
        {!isEmpty && hasActionable && (
          <button type="button" style={accentBtnStyle} onClick={() => void handleImport()} title="Review + install these scripts into your library">
            <Download size={13} /> Import to library
          </button>
        )}
        <button type="button" style={ghostBtnStyle} onClick={() => setPickerOpen((o) => !o)} title="Bundle scripts from your library into this card">
          <Plus size={13} /> Add
        </button>
      </div>

      {pickerOpen && (
        <AddFromLibrary library={library} bundledIds={bundledIds} onAdd={handleAddSelected} onClose={() => setPickerOpen(false)} />
      )}

      {isEmpty && !pickerOpen && (
        <div style={emptyStyle}>
          <Package size={22} style={{ opacity: 0.5, marginBottom: 8 }} />
          <div>This character has no bundled LumiScript scripts.</div>
          <div style={{ marginTop: 6, fontSize: 11.5 }}>Use <b>Add</b> to bundle some from your library.</div>
        </div>
      )}

      {scripts.map((entry) => (
        <ScriptCard key={entry.bundleId} entry={entry} status={statuses[entry.bundleId]} onDelete={() => void handleDelete(entry)} />
      ))}

      {parsed.kind === 'ok' && parsed.skipped.length > 0 && (
        <div style={{ ...descStyle, marginTop: 4 }}>
          {parsed.skipped.length} malformed entr{parsed.skipped.length === 1 ? 'y was' : 'ies were'} skipped.
        </div>
      )}
    </div>
  );
};
