/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT PACK EXPORT
 * ============================================================================
 * Serializes selected scripts into a pack.json, compresses into a ZIP,
 * and triggers a browser download. Runs entirely on the frontend.
 */

import { zipSync, strToU8 } from 'fflate';
import type { Script, ScriptPackEntry } from '../types/script.js';

/**
 * Export the given scripts as a `.lumiscript.zip` download.
 *
 * Only shareable fields are included — id, enabled, allowDangerous, and
 * timestamps are omitted (regenerated on import with safe defaults).
 */
export function exportScriptPack(scripts: Script[], packName: string): void {
  const entries: ScriptPackEntry[] = scripts.map(s => ({
    name: s.name,
    code: s.code,
    type: s.type,
    triggers: s.triggers,
    bindings: s.bindings,
    folder: s.folder,
    metadata: s.metadata,
  }));

  const pack = {
    format: 'lumiscript-pack-v1' as const,
    exportedAt: new Date().toISOString(),
    scripts: entries,
  };

  const zipped = zipSync({ 'pack.json': strToU8(JSON.stringify(pack, null, 2)) });
  const blob = new Blob([zipped.buffer as ArrayBuffer], { type: 'application/zip' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${packName}.lumiscript.zip`;
  a.click();
  URL.revokeObjectURL(url);
}
