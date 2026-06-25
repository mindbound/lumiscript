/**
 * Pure (React-free) helpers + the cross-root open signal for the "Bundle into
 * character card" authoring modal (#12, Phase 3b). The modal lives in its own
 * frontend root (like the consent host), so the script-manager toolbar button
 * opens it by dispatching a window CustomEvent carrying the current scripts —
 * the established two-roots bus pattern (no prop threading through ManagePanel).
 */
import type { Script } from '../../types/script.js';

/** Window CustomEvent that opens the bundle modal; detail carries the scripts. */
export const OPEN_BUNDLE_EVENT = 'ls:open-bundle-modal';

export interface OpenBundleDetail {
  scripts: Script[];
}

/** Fire the open signal from the script-manager toolbar. */
export function openBundleModal(scripts: Script[]): void {
  window.dispatchEvent(new CustomEvent<OpenBundleDetail>(OPEN_BUNDLE_EVENT, { detail: { scripts } }));
}

/**
 * Max scripts the import side accepts from one card. MUST match
 * `MAX_EMBEDDED_SCRIPTS` in engine/card-scripts.ts — beyond this the importer
 * silently drops the overflow, so the author is warned up front.
 */
export const EMBED_SCRIPT_CAP = 64;

// Import-side length clamps (engine/card-scripts.ts validateEntry/sanitizeMetadata).
// Kept in sync here so the author sees a warning rather than a silent truncation
// on re-import. Low drift risk (these are stable schema bounds).
const NAME_MAX = 200;
const FOLDER_MAX = 200;
const DESC_MAX = 1000;
const AUTHOR_MAX = 120;
const VERSION_MAX = 64;

/** Warn when more scripts are selected than the import side will accept. */
export function overCapWarning(selectedCount: number): string | null {
  if (selectedCount <= EMBED_SCRIPT_CAP) return null;
  const dropped = selectedCount - EMBED_SCRIPT_CAP;
  return `Only the first ${EMBED_SCRIPT_CAP} scripts are importable — ${dropped} more won't fit when the card is imported.`;
}

/** Per-script warnings for fields the import side would clamp (no silent loss). */
export function lengthWarnings(scripts: readonly Script[]): string[] {
  const out: string[] = [];
  const label = (s: Script): string => (s.name.length > 32 ? `${s.name.slice(0, 32)}…` : s.name);
  for (const s of scripts) {
    if (s.name.length > NAME_MAX) out.push(`“${label(s)}”: name over ${NAME_MAX} chars — trimmed on import.`);
    if (s.folder && s.folder.length > FOLDER_MAX) out.push(`“${label(s)}”: folder over ${FOLDER_MAX} chars — trimmed on import.`);
    const m = s.metadata;
    if (m?.description && m.description.length > DESC_MAX) out.push(`“${label(s)}”: description over ${DESC_MAX} chars — trimmed on import.`);
    if (m?.author && m.author.length > AUTHOR_MAX) out.push(`“${label(s)}”: author over ${AUTHOR_MAX} chars — trimmed on import.`);
    if (m?.version && m.version.length > VERSION_MAX) out.push(`“${label(s)}”: version over ${VERSION_MAX} chars — trimmed on import.`);
  }
  return out;
}

/**
 * Warn that a selected script's character/chat BINDINGS won't survive an import.
 * Bindings match by raw character/chat UUID, and the host regenerates those on
 * every card import — so a bound script installs but never matches any context
 * on the importer's side (verified against engine/binding.ts). Not silently
 * stripped (that would make a bound script run GLOBALLY on import — worse); the
 * author is told so they / the importer can re-bind.
 */
export function bindingWarning(scripts: readonly Script[]): string | null {
  const bound = scripts.filter((s) => s.bindings && s.bindings.length > 0);
  if (bound.length === 0) return null;
  const shown = bound.slice(0, 3).map((s) => `“${s.name.length > 28 ? `${s.name.slice(0, 28)}…` : s.name}”`).join(', ');
  const more = bound.length > 3 ? `, +${bound.length - 3} more` : '';
  const plural = bound.length === 1;
  return `${plural ? 'This script is' : `${bound.length} selected scripts are`} bound to specific characters/chats (${shown}${more}). ` +
    `Those bindings won't carry to whoever imports the card — the imported ${plural ? 'script' : 'scripts'} won't run until re-bound.`;
}
