/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: CONSENT MODAL (#12, Phase 2)
 * ============================================================================
 * Mounted in its own root (panel-independent) so it can appear whenever a card
 * import fires, even with the LumiScript dock collapsed. Subscribes to
 * `ls_card_scripts_detected`, queues batches, and renders a per-script review
 * (action badge + permission warnings + checkbox) inside the shared
 * ConfirmDialog chrome. On confirm it replies `ls_card_scripts_install` with the
 * selected bundleIds; the backend is authoritative for the actual install.
 *
 * Colours are hard-coded rgb() rather than `--lumiverse-*` tokens. That's a
 * stylistic choice, not a portal requirement: those tokens are declared on
 * `:root` and cascade into portals fine. Only `--lumiverse-accent` resolves to
 * nothing — the host never defines it (its accent token is `--lumiverse-primary`).
 */
import { useEffect, useState, type FC, type CSSProperties } from 'react';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { isActionable, isScopable, defaultSelectedBundleIds, defaultScopedBundleIds, actionBadgeLabel } from './consent-helpers.js';
import { TypeBadge, HookPills, pillStyle, formatScriptSize } from './script-pills.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import type { CardScriptAction } from '../../types/card-scripts.js';

type Detected = Extract<BackendToFrontend, { type: 'ls_card_scripts_detected' }>;

// ─── Styling (hard-coded — body-portal surface) ──────────────────────────────

const TEXT = 'rgb(222,223,230)';
const MUTED = 'rgba(222,223,230,0.6)';
const WARN = 'rgb(214,158,46)';

const rowStyle: CSSProperties = {
  padding: '10px 0',
  borderTop: '1px solid rgba(255,255,255,0.08)',
  color: TEXT,
  fontSize: 13,
};
const descStyle: CSSProperties = { marginTop: 4, marginLeft: 21, color: TEXT, opacity: 0.85, lineHeight: 1.4 };
const pillsRowStyle: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6, marginLeft: 21 };
const warnStyle: CSSProperties = { marginTop: 5, marginLeft: 21, color: WARN, fontSize: 11.5, lineHeight: 1.4 };
const noteStyle: CSSProperties = { color: MUTED, fontSize: 12, lineHeight: 1.5, marginBottom: 4 };
const hookStyle: CSSProperties = { marginTop: 3, marginLeft: 21, color: 'rgb(150,166,205)', fontSize: 11, lineHeight: 1.4 };
const scopeStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, marginLeft: 21, color: TEXT, fontSize: 11.5, cursor: 'pointer', opacity: 0.9 };

function badgeStyle(action: CardScriptAction): CSSProperties {
  const base: CSSProperties = { marginLeft: 'auto', fontSize: 11, padding: '1px 7px', borderRadius: 6, fontWeight: 600, whiteSpace: 'nowrap' };
  if (action === 'install') return { ...base, background: 'rgba(72,187,120,0.18)', color: 'rgb(104,211,145)' };
  if (action === 'update')  return { ...base, background: 'rgba(147,112,219,0.20)', color: 'rgb(184,154,236)' };
  return { ...base, background: 'rgba(160,160,170,0.15)', color: MUTED };
}

// ─── Component ───────────────────────────────────────────────────────────────

interface Props {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const CardScriptsConsentHost: FC<Props> = ({ onBackendMessage, sendToBackend }) => {
  const [queue, setQueue] = useState<Detected[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // bundleIds the user chose to scope to the imported character (#12 Q1).
  const [scoped, setScoped] = useState<Set<string>>(new Set());
  // The requestId `selected` was computed for. Lets us reset the selection the
  // instant the front-of-queue batch changes (see below).
  const [selectedFor, setSelectedFor] = useState<string | undefined>(undefined);
  const current = queue[0] ?? null;
  const currentId = current?.requestId;

  useEffect(() => onBackendMessage((raw) => {
    if ((raw as { type?: string })?.type === 'ls_card_scripts_detected') {
      setQueue((q) => [...q, raw as Detected]);
    }
  }), [onBackendMessage]);

  // Reset the checkbox selection when the front-of-queue batch changes — DURING
  // render (the documented "adjust state on prop change" pattern), not in an
  // effect. React discards this pass and re-renders before painting, so the
  // checkboxes never flash the previous batch's state (which they would if two
  // batches happened to share a bundleId string).
  if (currentId !== selectedFor) {
    setSelectedFor(currentId);
    setSelected(current ? new Set(defaultSelectedBundleIds(current.items)) : new Set());
    setScoped(current ? new Set(defaultScopedBundleIds(current.items)) : new Set());
  }

  if (!current) return null;

  const advance = (): void => setQueue((q) => q.slice(1));
  const toggle = (bundleId: string): void => setSelected((s) => {
    const next = new Set(s);
    if (next.has(bundleId)) next.delete(bundleId); else next.add(bundleId);
    return next;
  });
  const toggleScope = (bundleId: string): void => setScoped((s) => {
    const next = new Set(s);
    if (next.has(bundleId)) next.delete(bundleId); else next.add(bundleId);
    return next;
  });
  const confirm = (): void => {
    sendToBackend({
      type: 'ls_card_scripts_install',
      requestId: current.requestId,
      bundleCardId: current.bundleCardId,
      selectedBundleIds: [...selected],
      // Only meaningful for selected scopable scripts; the backend intersects anyway.
      scopedBundleIds: [...scoped].filter((id) => selected.has(id)),
    });
    advance();
  };
  // Cancel/Esc: tell the backend to free the cached detection (it holds the full
  // embedded script source) rather than leaving it to LRU eviction.
  const dismiss = (): void => {
    sendToBackend({ type: 'ls_card_scripts_dismiss', requestId: current.requestId });
    advance();
  };

  const actionableCount = current.items.filter(isActionable).length;
  const from = current.bundleName ?? 'this character';

  return (
    <ConfirmDialog
      title={`Install scripts from ${from}?`}
      confirmLabel={selected.size > 0 ? `Install ${selected.size} selected` : 'Install none'}
      cancelLabel="Not now"
      wide
      overlayZIndex={10010}
      onConfirm={confirm}
      onCancel={dismiss}
    >
      <p style={noteStyle}>
        This character card includes <b>{actionableCount}</b> LumiScript script{actionableCount === 1 ? '' : 's'}.
        They install <b>disabled</b> — review the code in the LumiScript panel before enabling.
      </p>
      {current.items.map((item) => {
        const act = isActionable(item);
        const ungranted = item.permissions.filter((p) => !p.granted);
        // On an update the on-disk name wins (the update preserves it); show that,
        // and flag when the card's name for the script differs from what's installed.
        const isUpdate = item.action === 'update';
        const displayName = isUpdate && item.existingName ? item.existingName : item.entry.name;
        const renamedFromCard = isUpdate && item.existingName && item.existingName !== item.entry.name;
        return (
          <div key={item.entry.bundleId} style={rowStyle}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: act ? 'pointer' : 'default', opacity: act ? 1 : 0.55 }}>
              {act
                ? <input type="checkbox" checked={selected.has(item.entry.bundleId)} onChange={() => toggle(item.entry.bundleId)} />
                : <span style={{ width: 13, display: 'inline-block' }} />}
              <TypeBadge type={item.entry.type} />
              <span style={{ fontWeight: 600 }}>{displayName}</span>
              <span style={badgeStyle(item.action)}>{actionBadgeLabel(item)}</span>
            </label>
            {item.entry.metadata?.description ? <div style={descStyle}>{item.entry.metadata.description}</div> : null}
            <div style={pillsRowStyle}>
              <HookPills type={item.entry.type} triggers={item.entry.triggers} />
              <span style={pillStyle}>{formatScriptSize(item.entry.code)}</span>
              {item.entry.metadata?.author ? <span style={pillStyle}>by {item.entry.metadata.author}</span> : null}
              {item.entry.metadata?.version ? <span style={pillStyle}>v{item.entry.metadata.version}</span> : null}
              {renamedFromCard ? <span style={pillStyle}>card: “{item.entry.name}”</span> : null}
            </div>
            {item.entry.bindings && item.entry.bindings.length > 0 ? (
              <div style={hookStyle}>
                Card author scoped this to {item.entry.bindings.map((b) => b.displayName).join(', ')}{' '}
                <span style={{ color: MUTED }}>(not carried on import — use the toggle below)</span>
              </div>
            ) : null}
            {act && isScopable(item) && selected.has(item.entry.bundleId) ? (
              <label style={scopeStyle}>
                <input type="checkbox" checked={scoped.has(item.entry.bundleId)} onChange={() => toggleScope(item.entry.bundleId)} />
                <span>Run only for {from} <span style={{ color: MUTED }}>(otherwise runs in every chat)</span></span>
              </label>
            ) : null}
            {item.targetEnabled ? (
              <div style={warnStyle}>⚠ This replaces the code of an <b>enabled</b> script — the new code runs on its next trigger.</div>
            ) : null}
            {item.localEdits ? (
              <div style={warnStyle}>⚠ You've edited this script locally — updating overwrites your changes.</div>
            ) : null}
            {ungranted.length > 0 ? (
              <div style={warnStyle}>
                ⚠ Needs {ungranted.length > 1 ? 'permissions' : 'permission'} not currently granted: {ungranted.map((p) => p.permission).join(', ')}.
                {' '}Enable in Lumiverse → Extensions, or the script may not work.
              </div>
            ) : null}
          </div>
        );
      })}
    </ConfirmDialog>
  );
};
