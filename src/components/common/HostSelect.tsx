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
 * setup()). When the host predates `ctx.components`, we render a plain themed
 * <select> fallback so the control still works.
 *
 * The `onChange` identity is decoupled from the mount via a ref, so a parent
 * passing an inline arrow doesn't force a remount on every render — only
 * genuine option/value/disabled changes flow through `update()`.
 */

import { useEffect, useRef, type FC } from 'react';
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

/** Imperative mount path — used when `ctx.components` is available. */
const HostSelectMounted: FC<HostSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  ariaLabel,
  searchThreshold,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<SelectHandle | null>(null);
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
      console.warn(
        `[LumiScript] HostSelect: mountSelect failed — ${err instanceof Error ? err.message : String(err)}`,
      );
    }
    return () => {
      try { handleRef.current?.destroy(); } catch { /* ignore */ }
      handleRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return <div ref={containerRef} className="ls-host-select" />;
};

/** Themed native <select> fallback for hosts without `ctx.components`. */
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

export const HostSelect: FC<HostSelectProps> = (props) =>
  getHostComponents() ? <HostSelectMounted {...props} /> : <NativeSelectFallback {...props} />;
