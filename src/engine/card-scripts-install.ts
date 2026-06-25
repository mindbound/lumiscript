/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: IMPORT ORCHESTRATION (#12, Phase 1)
 * ============================================================================
 * Dependency-injected glue between the pure helpers (engine/card-scripts.ts)
 * and script storage. backend.ts wires this to the CHARACTER_CREATED event +
 * the `ls_card_scripts_install` message; it lives here so it's unit-testable
 * without the spindle global. Spec: notes/card-embedded-scripts-design.md.
 */
import type { Script, ScriptBundleProvenance, ScriptBindingEntry } from '../types/script.js';
import type { DetectedCardScript } from '../types/card-scripts.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import {
  extractEmbeddedScripts,
  computeInstallActions,
  analyzeRequiredPermissions,
  hashScriptCode,
} from './card-scripts.js';

/**
 * A detected card-scripts batch, cached by the backend (by requestId) between
 * the CHARACTER_CREATED detect and the user's consent reply.
 */
export interface PreparedDetection {
  requestId: string;
  hostCharacterId: string;
  bundleCardId: string;
  bundleName?: string;
  /**
   * The user this detection was computed for (whose installed scripts it was
   * de-duped against and whose library the install lands in). Stamped by the
   * backend; the install handler asserts the replying user matches so one
   * user's import can't be applied to another's library on a shared
   * (operator-scoped) worker. `null`/absent when no user context was active.
   */
  ownerUserId?: string | null;
  /** Every embedded script + its decision (install/update/skip) + permission
   *  analysis — the FE consent modal renders these. */
  items: DetectedCardScript[];
}

/**
 * Inspect a freshly created/imported character for embedded scripts and build
 * the detection payload. Returns null when there is NOTHING the user could act
 * on (no `extensions.lumiscript`, a malformed envelope, or every embedded
 * script already up-to-date) — the backend then shows no modal.
 */
export function prepareCardScriptDetection(params: {
  character: { id: string; name?: string | null; extensions?: unknown };
  installed: readonly Script[];
  granted: ReadonlySet<string> | readonly string[];
  genRequestId: () => string;
}): PreparedDetection | null {
  const { character, installed, granted, genRequestId } = params;
  const extracted = extractEmbeddedScripts(character.extensions);
  if (extracted.kind !== 'ok' || extracted.scripts.length === 0) return null;

  const byId = new Map(installed.map((s) => [s.id, s]));
  const decisions = computeInstallActions(extracted.bundleCardId, extracted.scripts, installed);
  const items: DetectedCardScript[] = decisions.map((d) => {
    // For an update, surface the on-disk truth (current name + enabled state) so
    // the modal reflects what's actually being overwritten, not the card's view.
    const target = d.action === 'update' && d.existingScriptId ? byId.get(d.existingScriptId) : undefined;
    return {
      ...d,
      permissions: analyzeRequiredPermissions(d.entry.code, granted),
      ...(target ? { existingName: target.name, targetEnabled: target.enabled } : {}),
    };
  });
  // No modal unless there's something to install or update.
  if (!items.some((i) => i.action === 'install' || i.action === 'update')) return null;

  return {
    requestId: genRequestId(),
    hostCharacterId: character.id,
    bundleCardId: extracted.bundleCardId,
    ...(character.name ? { bundleName: character.name } : {}),
    items,
  };
}

export interface InstallSummary {
  /** Names of newly-installed scripts. */
  installed: string[];
  /** Names of updated scripts. */
  updated: string[];
  /** Count of items not applied (unselected, skip-action, or vanished target). */
  skipped: number;
}

/**
 * Apply the user's consent selection from a cached detection. BACKEND-AUTHORITY:
 * only install/update decisions whose bundleId the user selected are applied;
 * skipped/unknown bundleIds are ignored (the FE supplies no script data). New
 * scripts land DISABLED + `allowDangerous:false` (review-before-enable); updates
 * overwrite code/config/provenance while PRESERVING the existing enabled +
 * allowDangerous state (the user already consented via the modal). An update
 * whose target vanished between detect and install falls back to a fresh install.
 */
export async function applyCardScriptInstall(params: {
  prepared: PreparedDetection;
  selectedBundleIds: readonly string[];
  /** Subset of selected bundleIds to scope to the imported character (#12 Q1):
   *  the installed script gets a single character binding to the host character
   *  instead of the author's (dead-on-import) bindings or running globally. */
  scopedBundleIds?: readonly string[];
  scriptStorage: ScriptStorage;
  genScriptId: () => string;
  now?: () => number;
}): Promise<InstallSummary> {
  const { prepared, selectedBundleIds, scriptStorage, genScriptId } = params;
  const now = params.now ?? Date.now;
  const selected = new Set(selectedBundleIds);
  const scoped = new Set(params.scopedBundleIds ?? []);
  const summary: InstallSummary = { installed: [], updated: [], skipped: 0 };

  // Resolve the bindings to write for an entry. The author's bundled bindings
  // reference THEIR character UUIDs (regenerated on import → dead), so they're
  // never carried. The consent toggle decides: scoped → one character binding to
  // the imported host character; otherwise global (no bindings).
  const resolveBindings = (bundleId: string): ScriptBindingEntry[] =>
    scoped.has(bundleId)
      ? [{ type: 'character', characterId: prepared.hostCharacterId, displayName: prepared.bundleName ?? 'this character' }]
      : [];

  for (const item of prepared.items) {
    if (!selected.has(item.entry.bundleId) || (item.action !== 'install' && item.action !== 'update')) {
      summary.skipped++;
      continue;
    }

    const provenance: ScriptBundleProvenance = {
      bundleCardId: prepared.bundleCardId,
      bundleId: item.entry.bundleId,
      hostCharacterId: prepared.hostCharacterId,
      ...(prepared.bundleName ? { bundleName: prepared.bundleName } : {}),
      ...(item.entry.metadata?.version ? { version: item.entry.metadata.version } : {}),
      sourceHash: hashScriptCode(item.entry.code),
    };

    // Resolve the script this entry targets. For an `update` use the matched id;
    // for either action ALSO re-check current storage for a script already
    // carrying this (bundleCardId, bundleId) — the cached decision is a snapshot
    // from detect time, and the script may have been installed since (e.g. a
    // co-pending import + chat-open Review for the same bundle). Matching here
    // updates-in-place instead of creating a `Foo (2)` duplicate.
    const existing =
      (item.action === 'update' && item.existingScriptId
        ? scriptStorage.getScript(item.existingScriptId)
        : null)
      ?? scriptStorage.getScripts().find(
        (s) => s.bundledFrom?.bundleCardId === prepared.bundleCardId && s.bundledFrom?.bundleId === item.entry.bundleId,
      )
      ?? null;

    if (existing) {
      // Overwrite code/config/provenance; preserve enabled + allowDangerous + name.
      // NOTE: `bindings` is deliberately NOT in the patch — scope is an
      // install-only decision (the toggle), so an update must PRESERVE whatever
      // bindings the script currently has (incl. a scope the user set manually
      // via BindingsSection). Re-applying the toggle here would silently clobber
      // that — worst case flipping a manually-scoped script to global (#12 Q1).
      const updated = await scriptStorage.updateScript(existing.id, {
        code: item.entry.code,
        type: item.entry.type,
        triggers: item.entry.triggers ?? [],
        ...(item.entry.folder !== undefined ? { folder: item.entry.folder } : {}),
        ...(item.entry.metadata !== undefined ? { metadata: item.entry.metadata } : {}),
        bundledFrom: provenance,
      });
      if (updated) summary.updated.push(updated.name);
      else summary.skipped++;
    } else {
      const uniqueName = await scriptStorage.getUniqueName(item.entry.name);
      const ts = now();
      const created = await scriptStorage.store.create({
        id: genScriptId(),
        name: uniqueName,
        code: item.entry.code,
        enabled: false,
        allowDangerous: false,
        type: item.entry.type,
        bindings: resolveBindings(item.entry.bundleId),
        triggers: item.entry.triggers ?? [],
        ...(item.entry.folder !== undefined ? { folder: item.entry.folder } : {}),
        ...(item.entry.metadata !== undefined ? { metadata: item.entry.metadata } : {}),
        bundledFrom: provenance,
        createdAt: ts,
        updatedAt: ts,
      });
      summary.installed.push(created.name);
    }
  }

  return summary;
}
