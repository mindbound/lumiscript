/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: IMPORT ORCHESTRATION (#12, Phase 1)
 * ============================================================================
 * Dependency-injected glue between the pure helpers (engine/card-scripts.ts)
 * and script storage. backend.ts wires this to the CHARACTER_CREATED event +
 * the `ls_card_scripts_install` message; it lives here so it's unit-testable
 * without the spindle global. Spec: notes/card-embedded-scripts-design.md.
 */
import type { Script, ScriptBundleProvenance } from '../types/script.js';
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

  const decisions = computeInstallActions(extracted.bundleCardId, extracted.scripts, installed);
  const items: DetectedCardScript[] = decisions.map((d) => ({
    ...d,
    permissions: analyzeRequiredPermissions(d.entry.code, granted),
  }));
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
  scriptStorage: ScriptStorage;
  genScriptId: () => string;
  now?: () => number;
}): Promise<InstallSummary> {
  const { prepared, selectedBundleIds, scriptStorage, genScriptId } = params;
  const now = params.now ?? Date.now;
  const selected = new Set(selectedBundleIds);
  const summary: InstallSummary = { installed: [], updated: [], skipped: 0 };

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

    const existing = item.action === 'update' && item.existingScriptId
      ? scriptStorage.getScript(item.existingScriptId)
      : null;

    if (existing) {
      // Overwrite code/config/provenance; preserve enabled + allowDangerous + name.
      const updated = await scriptStorage.updateScript(existing.id, {
        code: item.entry.code,
        type: item.entry.type,
        triggers: item.entry.triggers ?? [],
        bindings: item.entry.bindings ?? [],
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
        bindings: item.entry.bindings ?? [],
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
