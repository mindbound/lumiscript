/**
 * ============================================================================
 * HOST SHARED-COMPONENT ACCESSOR
 * ============================================================================
 * The extension's React trees are intentionally `ctx`-free: `setup()` renders
 * the dock + settings roots with only `sendToBackend` / `onBackendMessage`
 * (bus-only, by design — see frontend.tsx). A few components nonetheless want
 * to mount Lumiverse's first-party shared components (`ctx.components.mountX`).
 * Rather than thread `ctx` through the whole tree, `setup()` parks the
 * components helper here once and React code reads it via `getHostComponents()`.
 *
 * Null when the host predates `ctx.components` (older Lumiverse builds). Every
 * caller MUST degrade gracefully — e.g. `HostSelect` renders a native <select>
 * fallback. The host typing marks `ctx.components` as always-present, but older
 * runtimes don't provide it, hence the runtime-nullable accessor.
 */

import type { SpindleFrontendContext } from 'lumiverse-spindle-types';

export type HostComponents = SpindleFrontendContext['components'];

let hostComponents: HostComponents | null = null;

/** Called once from `setup()` in frontend.tsx with `ctx.components`. */
export function setHostComponents(components: HostComponents | null | undefined): void {
  hostComponents = components ?? null;
}

/** The host shared-component factory, or `null` when unavailable on this host. */
export function getHostComponents(): HostComponents | null {
  return hostComponents;
}
