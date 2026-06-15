/**
 * ============================================================================
 * SCRIPT LIST — pure logic
 * ============================================================================
 * Encoding + grouping helpers behind `ScriptList.tsx`, extracted for
 * unit-testing without rendering the (dialog-heavy) component.
 *
 *   - `bytesToBase64`  — chunked base64 encode for pack export over IPC
 *   - `groupByFolder`  — group scripts into folder buckets (unfiled first)
 *
 * Nothing here imports React.
 */

import type { Script } from '../../types/script.js';

/**
 * Base64-encode a byte array for transport across the frontend→backend
 * message channel. Uses chunked String.fromCharCode to avoid blowing the
 * call stack on packs larger than the per-call argument limit (~65k).
 */
export function bytesToBase64(bytes: Uint8Array): string {
  const CHUNK = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += CHUNK) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(binary);
}

/** Group scripts by folder. Scripts without a folder go into the '' group. */
export function groupByFolder(scripts: Script[]): Map<string, Script[]> {
  const groups = new Map<string, Script[]>();
  for (const s of scripts) {
    const folder = s.folder ?? '';
    if (!groups.has(folder)) groups.set(folder, []);
    groups.get(folder)!.push(s);
  }
  // Sort: unfiled first, then alphabetical folder names
  const sorted = new Map<string, Script[]>();
  if (groups.has('')) sorted.set('', groups.get('')!);
  const folderNames = [...groups.keys()].filter(k => k !== '').sort();
  for (const name of folderNames) sorted.set(name, groups.get(name)!);
  return sorted;
}
