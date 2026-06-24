/**
 * Types for character-card-embedded scripts (#12). A character card's V2/V3
 * `extensions.lumiscript` field carries scripts that auto-register (behind
 * per-script consent) when the card is imported. Self-contained LS feature, no
 * host primitives. See notes/card-embedded-scripts-design.md for the full spec.
 */
import type { ScriptPackEntry } from './script.js';

/** Current `extensions.lumiscript` envelope format version understood by LS. */
export const LUMISCRIPT_CARD_FORMAT_VERSION = 1;

/**
 * One script embedded in a card's `extensions.lumiscript.scripts` — the
 * shareable `ScriptPackEntry` subset plus a stable `bundleId`.
 */
export interface EmbeddedScriptEntry extends ScriptPackEntry {
  /**
   * Author-assigned id, stable + unique WITHIN one card bundle. Together with
   * the envelope's `bundleCardId` it forms the per-card de-dup key (#12 D1).
   */
  bundleId: string;
}

/** The `extensions.lumiscript` envelope written into a character card. */
export interface LumiscriptCardExtension {
  formatVersion: number;
  /**
   * Author-assigned stable id minted by the authoring UI; survives re-import.
   * NOT the host character UUID (the host regenerates that on every import, so
   * it can't anchor de-dup).
   */
  bundleCardId: string;
  scripts: EmbeddedScriptEntry[];
}

/**
 * A permission an embedded script appears to need (static heuristic over its
 * code) plus whether the importing user has granted it. `granted: false` is
 * surfaced as a non-blocking warning in the consent modal (#12 D2).
 */
export interface PermissionRequirement {
  /** The api namespace that triggered it, e.g. `'llm'` or `'chat.inject'`. */
  namespace: string;
  /** The Spindle permission it maps to, e.g. `'generation'`. */
  permission: string;
  granted: boolean;
}

export type CardScriptAction = 'install' | 'update' | 'skip';
export type CardScriptSkipReason = 'up-to-date' | 'not-newer' | 'unchanged';

/** Per-embedded-script decision computed at import time (without permissions). */
export interface InstallDecision {
  entry: EmbeddedScriptEntry;
  action: CardScriptAction;
  /** Why it was skipped (only when `action === 'skip'`). */
  skipReason?: CardScriptSkipReason;
  /** Version transition for an update (display only). */
  versionDelta?: { from?: string; to?: string };
  /**
   * True when the installed copy was locally edited since install (its current
   * code hash ≠ the recorded `sourceHash`), so an update would overwrite those
   * edits — the modal warns harder.
   */
  localEdits?: boolean;
  /** Installed `Script.id` this entry matches — set for `update` (and skips). */
  existingScriptId?: string;
}

/**
 * An {@link InstallDecision} enriched with the bits the consent modal renders
 * but the pure decision logic doesn't carry: permission analysis plus, for
 * `update` rows, the on-disk truth about the script being overwritten (carried
 * on `ls_card_scripts_detected`).
 */
export interface DetectedCardScript extends InstallDecision {
  permissions: PermissionRequirement[];
  /**
   * For an `update`: the matched installed script's CURRENT name (the update
   * preserves it, so it may differ from `entry.name` if the card renamed the
   * script). Lets the modal show what's actually being modified.
   */
  existingName?: string;
  /**
   * For an `update`: whether the matched installed script is currently ENABLED.
   * An update overwrites code while preserving `enabled`, so updating an enabled
   * script re-arms it with new code — the modal warns harder in that case.
   */
  targetEnabled?: boolean;
}
