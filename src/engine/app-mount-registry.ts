/**
 * ============================================================================
 * LUMISCRIPT — APP MOUNT REGISTRY
 * ============================================================================
 * Backend-side state for full-bleed app mounts created via `api.ui.mountApp()`
 * (host `ctx.ui.mountApp` — a route-persistent `document.body` portal).
 *
 * Simpler than the float-widget registry: an app mount has no position, size,
 * or drag — just a `rootElementId` (the script-owned DOM region) and a
 * `destroyed` flag. Mirrors `advanced-modal-registry` in spirit.
 *
 * Lifecycle:
 *   - `registerAppMount` records an entry + its `rootElementId`.
 *   - `destroyAppMount` flips the `destroyed` flag (idempotent).
 *   - `dropEntry` removes a destroyed entry from the map.
 *   - `liveAppMountsByScript` / `clearByScript` drive the teardown sweep.
 *   - `countLiveAppMountsByScript` feeds eviction-pinning.
 */

export interface AppMountRegisterOptions {
  className?: string;
  position?: 'start' | 'end' | 'app-overlay';
}

export interface AppMountEntry {
  mountId: string;
  rootElementId: string;
  scriptId: string;
  /** Frozen options from the original mount call. */
  options: AppMountRegisterOptions;
  destroyed: boolean;
}

/** `mountId` → entry */
const mounts = new Map<string, AppMountEntry>();

export function registerAppMount(
  mountId: string,
  rootElementId: string,
  scriptId: string,
  options: AppMountRegisterOptions,
): AppMountEntry {
  const entry: AppMountEntry = { mountId, rootElementId, scriptId, options, destroyed: false };
  mounts.set(mountId, entry);
  return entry;
}

export function getAppMount(mountId: string): AppMountEntry | undefined {
  return mounts.get(mountId);
}

/** Count live (non-destroyed) mounts owned by a script. Used for eviction-pinning. */
export function countLiveAppMountsByScript(scriptId: string): number {
  let n = 0;
  for (const entry of mounts.values()) {
    if (entry.scriptId === scriptId && !entry.destroyed) n++;
  }
  return n;
}

/**
 * Mark a mount destroyed. Returns `true` if it was live, `false` if already
 * destroyed / unknown. The caller sends `ls_app_mount_destroy` to the frontend.
 */
export function destroyAppMount(mountId: string): boolean {
  const entry = mounts.get(mountId);
  if (!entry || entry.destroyed) return false;
  entry.destroyed = true;
  return true;
}

/** Remove a destroyed entry from the map. No-op if still live or unknown. */
export function dropEntry(mountId: string): void {
  const entry = mounts.get(mountId);
  if (entry && entry.destroyed) mounts.delete(mountId);
}

/** Live mount ids owned by a script — for the teardown sweep. */
export function liveAppMountsByScript(scriptId: string): string[] {
  const ids: string[] = [];
  for (const entry of mounts.values()) {
    if (entry.scriptId === scriptId && !entry.destroyed) ids.push(entry.mountId);
  }
  return ids;
}

/** Drop every entry owned by a script (teardown / reload). */
export function clearByScript(scriptId: string): void {
  for (const [id, entry] of mounts) {
    if (entry.scriptId === scriptId) mounts.delete(id);
  }
}

/** @internal — reset all state (for tests only). */
export function __reset(): void {
  mounts.clear();
}
