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

/**
 * ── Dialog portal root ──────────────────────────────────────────────────────
 * The element our modals `createPortal` into, instead of `document.body`.
 *
 * The host only permits `ctx.components.mount*` when the target sits inside an
 * extension-owned element under a REGISTERED placement root (drawer tab, dock
 * panel, app mount, float widget, host modal body). `document.body` is neither,
 * so a `HostSelect` rendered inside a body-portaled dialog is refused with
 * "target must be inside DOM owned by the current extension".
 *
 * An app mount created with `position: 'end'` is a registered, owned root that
 * the host appends to `document.body` with `position`/`z-index` cleared — so
 * portaling there keeps our existing stacking and focus behaviour exactly as it
 * was, while satisfying both ownership gates.
 *
 * Stays null when the mount can't be created (e.g. `app_manipulation` isn't
 * granted). Callers then fall back to `document.body`: dialogs still work, and
 * any `HostSelect` inside degrades to its native <select>.
 */
let portalRoot: HTMLElement | null = null;

/** Called from `setup()` once the app mount exists; passed `null` on teardown. */
export function setPortalRoot(el: HTMLElement | null): void {
  portalRoot = el;
}

/**
 * The portal target for modals — the owned + registered root when available,
 * otherwise `document.body`. Never null, so call sites stay a plain
 * `createPortal(dialog, getPortalRoot())`.
 */
export function getPortalRoot(): HTMLElement {
  return portalRoot ?? document.body;
}
