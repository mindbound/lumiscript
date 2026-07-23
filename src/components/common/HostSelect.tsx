/**
 * ============================================================================
 * HostSelect — React wrapper around Lumiverse's shared `select` component
 * ============================================================================
 * Bridges the host's imperative `ctx.components.mountSelect(el, opts)` into a
 * declarative React component: it mounts the host select into a container
 * <div> once, then pushes prop changes through the returned handle's
 * `update()`, and `destroy()`s on unmount.
 *
 * `ctx.components` isn't threaded through the extension's (ctx-free) React
 * trees — it's read from the module-level accessor (`host-ui.ts`, populated in
 * setup()). A plain themed <select> fallback renders whenever the host mount
 * isn't possible, so the control always works. Two cases:
 *   1. The host predates `ctx.components`.
 *   2. `mountSelect()` throws. The host only permits shared-component mounts into
 *      an extension-owned target under a REGISTERED PLACEMENT ROOT (drawer tab,
 *      dock panel, app mount, float widget, or a host modal body); anything else
 *      is rejected with "target must be inside DOM owned by the current
 *      extension". Our dialogs therefore portal into an app-mount root rather
 *      than `document.body` (see `getPortalRoot` in host-ui.ts), which satisfies
 *      the check. The fallback remains as defence-in-depth for when that root is
 *      unavailable — e.g. `app_manipulation` revoked, so the portal target
 *      degrades back to `document.body` — keeping the picker usable instead of
 *      leaving an empty slot where the dropdown should be.
 *
 * The `onChange` identity is decoupled from the mount via a ref, so a parent
 * passing an inline arrow doesn't force a remount on every render — only
 * genuine option/value/disabled changes flow through `update()`.
 */

import { useEffect, useRef, useState, type FC } from 'react';
import type { SpindleSelectOption, SpindleSelectOptions } from 'lumiverse-spindle-types';
import { getHostComponents } from '../../host-ui.js';

/**
 * Minimal structural handle — the host's `mountSelect` returns a
 * `SpindleSelectHandle`, but we only need `update`/`destroy` (from its
 * `SpindleMountedComponent` base) and avoid depending on that named type being
 * re-exported from the package index.
 */
type SelectHandle = {
  update(patch: Partial<SpindleSelectOptions>): void;
  destroy(): void;
};

export interface HostSelectProps {
  options: SpindleSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  /** Option count above which the host renders a search box. Default host: 8. */
  searchThreshold?: number;
}

/**
 * The host renders a mounted select's dropdown in a portal to `document.body` at
 * z-index 10002 (its own SearchableSelect stylesheet). Our dialogs sit above that
 * (up to 10010), so inside a dialog the dropdown would open *behind* the overlay
 * — the picker would look dead. Raise those portals above our dialog layer, but
 * only while one of our host selects is actually mounted, so we don't perturb
 * anyone else's stacking the rest of the time. Ref-counted for stacked dialogs.
 */
const ELEVATION_CLASS = 'ls-host-popover-above';
let elevationCount = 0;

function acquirePopoverElevation(): () => void {
  if (++elevationCount === 1) document.documentElement.classList.add(ELEVATION_CLASS);
  let released = false;
  return () => {
    if (released) return; // idempotent — React may run cleanup more than once
    released = true;
    if (--elevationCount === 0) document.documentElement.classList.remove(ELEVATION_CLASS);
  };
}

/**
 * Themed native <select> fallback — used when the host has no `ctx.components`,
 * and when a host mount is refused (see case 2 in the file header).
 */
const NativeSelectFallback: FC<HostSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  ariaLabel,
}) => (
  <select
    className="ls-host-select-native"
    value={value}
    disabled={disabled}
    aria-label={ariaLabel}
    onChange={(e) => onChange(e.target.value)}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((o) => (
      <option key={o.value} value={o.value} disabled={o.disabled}>
        {o.label}{o.sublabel ? ` — ${o.sublabel}` : ''}
      </option>
    ))}
  </select>
);

/** Imperative mount path — used when `ctx.components` is available. */
const HostSelectMounted: FC<HostSelectProps> = (props) => {
  const { options, value, onChange, placeholder, disabled, ariaLabel, searchThreshold } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<SelectHandle | null>(null);
  // Flipped when the host refuses the mount, so this render swaps to the native
  // control instead of leaving the empty container behind.
  const [mountFailed, setMountFailed] = useState(false);
  // Keep the latest onChange without re-mounting the host component.
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Mount once. Subsequent prop changes flow through the sync effect below.
  useEffect(() => {
    const host = getHostComponents();
    const el = containerRef.current;
    if (!host || !el) return;
    try {
      handleRef.current = host.mountSelect(el, {
        options,
        value,
        placeholder,
        disabled,
        ariaLabel,
        onChange: (v) => onChangeRef.current(v),
        ...(searchThreshold !== undefined ? { searchThreshold } : {}),
      });
    } catch (err) {
      // Typically the placement-ownership rejection described in the file header
      // (this control is inside a `createPortal(document.body)` dialog). Degrade
      // rather than render an empty slot.
      console.warn(
        `[LumiScript] HostSelect: mountSelect failed — ${err instanceof Error ? err.message : String(err)}. Falling back to a native select.`,
      );
      setMountFailed(true);
      return;
    }
    // Mounted for real — keep the host's dropdown portal above our dialog layer
    // for as long as this select lives.
    const releaseElevation = acquirePopoverElevation();
    return () => {
      releaseElevation();
      try { handleRef.current?.destroy(); } catch { /* ignore */ }
      handleRef.current = null;
    };
  }, []);

  // Push prop changes into the live handle.
  useEffect(() => {
    const patch: Partial<SpindleSelectOptions> = {
      options,
      value,
      placeholder,
      disabled,
      ariaLabel,
      ...(searchThreshold !== undefined ? { searchThreshold } : {}),
    };
    handleRef.current?.update(patch);
  }, [options, value, placeholder, disabled, ariaLabel, searchThreshold]);

  if (mountFailed) return <NativeSelectFallback {...props} />;
  return <div ref={containerRef} className="ls-host-select" />;
};

export const HostSelect: FC<HostSelectProps> = (props) =>
  getHostComponents() ? <HostSelectMounted {...props} /> : <NativeSelectFallback {...props} />;
