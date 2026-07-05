/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: EXPORT/AUTHORING (#12, Phase 3)
 * ============================================================================
 * Pure (no-IO) inverse of the import side: turn a set of stored Scripts into a
 * `LumiscriptCardExtension` envelope to write into a character's
 * `extensions.lumiscript`. The backend wiring (load scripts, read the target
 * character's existing bundleCardId, persist via spindle.characters.update)
 * lives in backend.ts. Spec: notes/card-embedded-scripts-design.md §Export.
 *
 * What travels: the shareable `ScriptPackEntry` subset (name/code/type/triggers/
 * bindings/folder/metadata) + a stable `bundleId`. What does NOT: id, enabled,
 * allowDangerous, timestamps, bundledFrom — the import side regenerates those
 * with safe defaults (disabled + allowDangerous:false). Mirrors the field set in
 * `utils/pack-export.ts` (the existing pack serializer) plus the bundleId.
 */
import type { Script } from '../types/script.js';
import {
  LUMISCRIPT_CARD_FORMAT_VERSION,
  type EmbeddedScriptEntry,
  type LumiscriptCardExtension,
} from '../types/card-scripts.js';

/**
 * The per-script de-dup identity (`bundleId`) to embed. Must be STABLE across
 * re-bundles of the same script so the importer sees an update, not a duplicate
 * install (the import de-dup key is (`bundleCardId`, `bundleId`)).
 *
 *  - If the script was itself installed from a card (`bundledFrom`), PRESERVE
 *    its original `bundleId` so lineage/identity carries across a re-share.
 *  - Otherwise anchor on the script's own stable local `id` (a UUID): unique
 *    per script (no within-card collision even if two scripts share a name) and
 *    unchanged across re-bundles (unlike a name slug, which moves when renamed).
 */
export function resolveBundleId(script: Script): string {
  return script.bundledFrom?.bundleId ?? script.id;
}

/** Serialize one Script into the shareable card entry (+ bundleId). */
export function buildEmbeddedEntry(script: Script): EmbeddedScriptEntry {
  return {
    bundleId: resolveBundleId(script),
    name: script.name,
    code: script.code,
    type: script.type,
    ...(script.triggers && script.triggers.length > 0 ? { triggers: script.triggers } : {}),
    ...(script.bindings && script.bindings.length > 0 ? { bindings: script.bindings } : {}),
    ...(script.folder ? { folder: script.folder } : {}),
    ...(script.metadata && Object.keys(script.metadata).length > 0 ? { metadata: script.metadata } : {}),
  };
}

/**
 * Build the `extensions.lumiscript` envelope for a set of scripts. `bundleCardId`
 * is resolved by the caller (reuse the target character's existing one if present,
 * else mint fresh — keeps the card's identity stable across re-exports).
 *
 * De-dupes by `bundleId` (first wins): two distinct local scripts can only
 * collide when both preserve the same imported `bundleId` from different source
 * cards — rare, and the importer would dedupe anyway, so we drop the later one
 * here to keep the envelope clean. The caller reports the written count.
 */
export function buildCardBundle(scripts: readonly Script[], bundleCardId: string): LumiscriptCardExtension {
  const seen = new Set<string>();
  const entries: EmbeddedScriptEntry[] = [];
  for (const script of scripts) {
    const entry = buildEmbeddedEntry(script);
    if (seen.has(entry.bundleId)) continue;
    seen.add(entry.bundleId);
    entries.push(entry);
  }
  return {
    formatVersion: LUMISCRIPT_CARD_FORMAT_VERSION,
    bundleCardId,
    scripts: entries,
  };
}
