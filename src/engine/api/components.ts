/**
 * ============================================================================
 * LUMISCRIPT — SHARED COMPONENTS API
 * ============================================================================
 * api.ui.components — mounts Lumiverse's first-party, themed React components
 * (`ctx.components.mountX`) into script-owned container elements.
 *
 * Like `api.ui.dom`, scripts run server-side in a Bun worker; this API
 * generates messages sent to the frontend via `spindle.sendToFrontend()`,
 * where the DOM handler translates them into `ctx.components.mount*` calls
 * and tracks the returned handles by `componentId`.
 *
 * `mount*` / `update` / `destroy` are fire-and-forget. `getValue()` is a
 * request-response round-trip that mirrors `DOMHandle.read()`. Mount-option
 * callbacks (`onChange`, …) are registered child-side as handler closures;
 * the child threads their handler-ids via `_callbacks`, and the FE wires the
 * callback names so user interaction fires a `component_callback` back.
 *
 * Requires the `app_manipulation` Spindle permission.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  ComponentsAPI,
  MountedComponentHandle,
  MountedValueComponentHandle,
  MountedCollapsibleSectionHandle,
  SpindleCollapsibleSectionOptions,
  SpindleBadgeOptions,
  SpindleSpinnerOptions,
  SpindleSwitchOptions,
  SpindleTextInputOptions,
  SpindleTextAreaOptions,
  SpindleNumericInputOptions,
  SpindleNumberStepperOptions,
  SpindleCheckboxOptions,
  SpindleRangeSliderOptions,
  SpindleSelectOptions,
  SpindleMultiSelectOptions,
  SpindleFolderDropdownOptions,
  SpindleModelComboboxOptions,
  SpindlePaginationOptions,
  SpindleCloseButtonOptions,
  DOMHandle,
} from '../../types/script.js';
import type { BackendToFrontend } from '../../types/messages.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import { nextDOMId, createDOMHandle } from './dom.js';

function send(msg: BackendToFrontend): void {
  spindle.sendToFrontend(msg);
}

// ─── getValue() round-trip (mirrors dom.ts pendingDomReads / resolveDomRead) ─

/** In-flight `getValue()` calls keyed by requestId. */
const pendingComponentValues = new Map<string, (value: unknown) => void>();

/**
 * Resolve a pending `getValue()` call. Invoked by the backend's
 * frontend-message handler when `comp_value_result` arrives. No-op on an
 * unknown requestId (stale response — caller already settled/timed out).
 */
export function resolveComponentValue(requestId: string, value: unknown): void {
  const resolve = pendingComponentValues.get(requestId);
  if (!resolve) return;
  pendingComponentValues.delete(requestId);
  resolve(value);
}

/** Test-only — clear the pending-values map between tests. */
export function __resetComponentValuesForTests(): void {
  pendingComponentValues.clear();
}

/**
 * Pull the child-threaded internals out of the mount options. `_componentId`
 * mirrors `DOMInjectOptions._elementId` (child allocates the id so its
 * sync-returned proxy handle matches host state). `_callbacks` maps each
 * registered callback NAME → the child-side handler-id; the names go to the
 * FE (to wire the callback), the handler-ids stay host-side (callback-route
 * registry in the dispatcher). Read via cast so the public option types stay
 * clean. Falls back to a fresh id for the direct/in-process (test) path.
 */
function takeMountInternals(
  options: Record<string, unknown>,
): { componentId: string; callbackNames: string[]; props: Record<string, unknown> } {
  // `_bodyElementId` is destructured purely to strip it from `props` (the
  // body-slot id reaches `mount()` via its dedicated param instead).
  const { _componentId, _bodyElementId: _strip, _callbacks, ...props } = options as {
    _componentId?:   string;
    _bodyElementId?: string;
    _callbacks?:     Record<string, string>;
  } & Record<string, unknown>;
  void _strip;
  return {
    componentId:   _componentId ?? nextDOMId('comp'),
    callbackNames: _callbacks ? Object.keys(_callbacks) : [],
    props,
  };
}

/**
 * Read a value-returning component method over the FE round-trip (mirrors
 * `DOMHandle.read` / `dom_read_request`). `method` names the FE handle method
 * to call — default `'getValue'`, also used for `'isExpanded'`.
 */
function readComponentValue<T>(componentId: string, method?: string): Promise<T> {
  return new Promise<T>((resolve) => {
    const requestId = nextDOMId('cv');
    pendingComponentValues.set(requestId, (value) => resolve(value as T));
    send({ type: 'comp_get_value', requestId, componentId, ...(method ? { method } : {}) });
  });
}

/** Fire-and-forget invoke of a void component method (expand/collapse/toggle, …). */
function invokeVoid(componentId: string, method: string, args: unknown[] = []): void {
  send({ type: 'comp_invoke', componentId, method, ...(args.length > 0 ? { args } : {}) });
}

/**
 * Build a base `MountedComponentHandle` (update/destroy) for `componentId`.
 * Methods send fire-and-forget `comp_*` messages (mirrors `createDOMHandle`).
 */
export function createMountedComponentHandle<TOptions>(
  componentId: string,
): MountedComponentHandle<TOptions> {
  let destroyed = false;
  return {
    get id(): string {
      return componentId;
    },
    update(patch: Partial<TOptions>): void {
      if (destroyed) return;
      send({ type: 'comp_update', componentId, props: (patch ?? {}) as Record<string, unknown> });
    },
    destroy(): void {
      if (destroyed) return; // idempotent
      destroyed = true;
      send({ type: 'comp_destroy', componentId });
    },
  };
}

/**
 * Build a value-bearing handle (base + async `getValue()`) for interactive
 * components. `getValue()` round-trips via `comp_get_value` / `comp_value_result`.
 */
export function createMountedValueComponentHandle<TOptions, TValue>(
  componentId: string,
): MountedValueComponentHandle<TOptions, TValue> {
  return {
    ...createMountedComponentHandle<TOptions>(componentId),
    getValue: (): Promise<TValue> => readComponentValue<TValue>(componentId),
  };
}

/**
 * Build a collapsible-section handle: base + a `body` DOMHandle (bound FE-side
 * to the host's section-body element) + expand/collapse/toggle (void) +
 * isExpanded (value round-trip). The body handle reuses the entire DOM
 * pipeline — `createDOMHandle(bodyElementId, …)` — so `handle.body.inject(...)`
 * / `.update(...)` work exactly like any injected element.
 */
export function createMountedCollapsibleHandle(
  componentId:   string,
  bodyElementId: string,
  deps:          APIBuildDeps,
): MountedCollapsibleSectionHandle {
  return {
    ...createMountedComponentHandle<SpindleCollapsibleSectionOptions>(componentId),
    body:       createDOMHandle(bodyElementId, deps),
    isExpanded: (): Promise<boolean> => readComponentValue<boolean>(componentId, 'isExpanded'),
    expand:     (): void => invokeVoid(componentId, 'expand'),
    collapse:   (): void => invokeVoid(componentId, 'collapse'),
    toggle:     (): void => invokeVoid(componentId, 'toggle'),
  };
}

export function buildComponentsAPI(deps: APIBuildDeps): ComponentsAPI {
  const scriptId = deps.script.id;

  function gate(): void {
    assertPerm('app_manipulation', deps.hasPerm, deps.script.name);
  }

  // Param is `object` (not `Record<string, unknown>`) so option interfaces
  // with REQUIRED fields (e.g. SpindleRangeSliderOptions' min/max) are
  // assignable without a per-call cast — an interface with required members
  // has no string index signature and won't widen to Record directly.
  function mount(
    kind: string,
    target: DOMHandle,
    options: object,
    bodyElementId?: string,
  ): string {
    gate();
    const { componentId, callbackNames, props } = takeMountInternals(options as Record<string, unknown>);
    send({
      type:            'comp_mount',
      scriptId,
      componentId,
      targetElementId: target.id,
      kind,
      props,
      ...(callbackNames.length > 0 ? { callbackNames } : {}),
      ...(bodyElementId ? { bodyElementId } : {}),
    });
    return componentId;
  }

  return {
    mountBadge(target, options = {}): MountedComponentHandle<SpindleBadgeOptions> {
      const id = mount('badge', target, options);
      return createMountedComponentHandle<SpindleBadgeOptions>(id);
    },
    mountSpinner(target, options = {}): MountedComponentHandle<SpindleSpinnerOptions> {
      const id = mount('spinner', target, options);
      return createMountedComponentHandle<SpindleSpinnerOptions>(id);
    },
    mountSwitch(target, options = {}): MountedValueComponentHandle<SpindleSwitchOptions, boolean> {
      const id = mount('switch', target, options);
      return createMountedValueComponentHandle<SpindleSwitchOptions, boolean>(id);
    },
    mountTextInput(target, options = {}): MountedValueComponentHandle<SpindleTextInputOptions, string> {
      const id = mount('textInput', target, options);
      return createMountedValueComponentHandle<SpindleTextInputOptions, string>(id);
    },
    mountTextArea(target, options = {}): MountedValueComponentHandle<SpindleTextAreaOptions, string> {
      const id = mount('textArea', target, options);
      return createMountedValueComponentHandle<SpindleTextAreaOptions, string>(id);
    },
    mountNumericInput(target, options = {}): MountedValueComponentHandle<SpindleNumericInputOptions, number | null> {
      const id = mount('numericInput', target, options);
      return createMountedValueComponentHandle<SpindleNumericInputOptions, number | null>(id);
    },
    mountNumberStepper(target, options = {}): MountedValueComponentHandle<SpindleNumberStepperOptions, number | null> {
      const id = mount('numberStepper', target, options);
      return createMountedValueComponentHandle<SpindleNumberStepperOptions, number | null>(id);
    },
    mountCheckbox(target, options = {}): MountedValueComponentHandle<SpindleCheckboxOptions, boolean> {
      const id = mount('checkbox', target, options);
      return createMountedValueComponentHandle<SpindleCheckboxOptions, boolean>(id);
    },
    mountRangeSlider(target, options): MountedValueComponentHandle<SpindleRangeSliderOptions, number> {
      const id = mount('rangeSlider', target, options);
      return createMountedValueComponentHandle<SpindleRangeSliderOptions, number>(id);
    },
    mountSelect(target, options = {}): MountedValueComponentHandle<SpindleSelectOptions, string> {
      const id = mount('select', target, options);
      return createMountedValueComponentHandle<SpindleSelectOptions, string>(id);
    },
    mountMultiSelect(target, options = {}): MountedValueComponentHandle<SpindleMultiSelectOptions, string[]> {
      const id = mount('multiSelect', target, options);
      return createMountedValueComponentHandle<SpindleMultiSelectOptions, string[]>(id);
    },
    mountFolderDropdown(target, options = {}): MountedValueComponentHandle<SpindleFolderDropdownOptions, string> {
      const id = mount('folderDropdown', target, options);
      return createMountedValueComponentHandle<SpindleFolderDropdownOptions, string>(id);
    },
    mountModelCombobox(target, options = {}): MountedValueComponentHandle<SpindleModelComboboxOptions, string> {
      const id = mount('modelCombobox', target, options);
      return createMountedValueComponentHandle<SpindleModelComboboxOptions, string>(id);
    },
    mountPagination(target, options): MountedComponentHandle<SpindlePaginationOptions> {
      const id = mount('pagination', target, options);
      return createMountedComponentHandle<SpindlePaginationOptions>(id);
    },
    mountCloseButton(target, options = {}): MountedComponentHandle<SpindleCloseButtonOptions> {
      const id = mount('closeButton', target, options);
      return createMountedComponentHandle<SpindleCloseButtonOptions>(id);
    },
    mountCollapsibleSection(target, options): MountedCollapsibleSectionHandle {
      // Body-slot component: allocate a bodyElementId (honour the child-threaded
      // one for proxy parity), pass it to mount() so the FE binds the host's
      // section-body element to it, and build a handle whose `.body` DOMHandle
      // drives that same elementId through the normal DOM pipeline.
      const bodyElementId =
        (options as { _bodyElementId?: string })._bodyElementId ?? nextDOMId('cbody');
      const id = mount('collapsibleSection', target, options, bodyElementId);
      return createMountedCollapsibleHandle(id, bodyElementId, deps);
    },
  };
}
