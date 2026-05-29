import { describe, test, expect } from 'bun:test';
import type { DOMHandle } from '../../../src/types/script.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { buildComponentsAPI, resolveComponentValue } from '../../../src/engine/api/components.js';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sentMessages(): any[] {
  return ((globalThis as any).spindle.sendToFrontend as any).mock.calls.map(
    (call: unknown[]) => call[0],
  );
}
function messagesOfType(type: string): any[] {
  return sentMessages().filter((m: any) => m.type === type);
}
/** Minimal DOMHandle stub — the canonical only reads `.id` off the mount target. */
function slot(id = 'el-1'): DOMHandle {
  return { id } as unknown as DOMHandle;
}

// ─── Permission gate ────────────────────────────────────────────────────────

describe('components — permission gate', () => {
  test('mountBadge throws without app_manipulation', () => {
    const c = buildComponentsAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => c.mountBadge(slot(), { text: 'x' })).toThrow('PERMISSION_DENIED');
  });
  test('mountSwitch throws without app_manipulation', () => {
    const c = buildComponentsAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => c.mountSwitch(slot(), {})).toThrow('PERMISSION_DENIED');
  });
});

// ─── mount (display-only) ─────────────────────────────────────────────────────

describe('components — mountBadge / mountSpinner', () => {
  test('mountBadge sends comp_mount and returns a handle', () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountBadge(slot('badge-slot'), { text: 'Beta', color: 'warning', size: 'pill' });

    expect(handle.id).toBeTruthy();
    const msgs = messagesOfType('comp_mount');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
    expect(msgs[0].kind).toBe('badge');
    expect(msgs[0].targetElementId).toBe('badge-slot');
    expect(msgs[0].componentId).toBe(handle.id);
    expect(msgs[0].props).toEqual({ text: 'Beta', color: 'warning', size: 'pill' });
  });

  test('mountSpinner sends comp_mount with kind=spinner', () => {
    const c = buildComponentsAPI(createTestDeps());
    c.mountSpinner(slot(), { size: 24, fast: true });
    const msg = messagesOfType('comp_mount')[0];
    expect(msg.kind).toBe('spinner');
    expect(msg.props).toEqual({ size: 24, fast: true });
  });

  test('update sends comp_update; destroy sends comp_destroy (idempotent)', () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountBadge(slot(), {});
    handle.update({ text: 'Ready', color: 'success' });
    handle.destroy();
    handle.destroy(); // idempotent — no second comp_destroy

    const updates = messagesOfType('comp_update');
    expect(updates).toHaveLength(1);
    expect(updates[0].componentId).toBe(handle.id);
    expect(updates[0].props).toEqual({ text: 'Ready', color: 'success' });

    expect(messagesOfType('comp_destroy')).toHaveLength(1);
  });
});

// ─── internal threading (_componentId / _callbacks) ───────────────────────────

describe('components — child-threaded internals', () => {
  test('honours threaded _componentId and strips it from props', () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountBadge(slot(), { text: 'x', _componentId: 'fixed-id' } as any);
    expect(handle.id).toBe('fixed-id');
    const msg = messagesOfType('comp_mount')[0];
    expect(msg.componentId).toBe('fixed-id');
    expect(msg.props).toEqual({ text: 'x' });          // _componentId stripped
    expect('_componentId' in msg.props).toBe(false);
  });

  test('derives callbackNames from threaded _callbacks and strips it from props', () => {
    const c = buildComponentsAPI(createTestDeps());
    c.mountSwitch(slot(), { checked: true, _callbacks: { onChange: 'h-1' } } as any);
    const msg = messagesOfType('comp_mount')[0];
    expect(msg.callbackNames).toEqual(['onChange']);
    expect(msg.props).toEqual({ checked: true });        // _callbacks stripped
    expect('_callbacks' in msg.props).toBe(false);
  });

  test('display-only mount omits callbackNames', () => {
    const c = buildComponentsAPI(createTestDeps());
    c.mountBadge(slot(), { text: 'x' });
    expect(messagesOfType('comp_mount')[0].callbackNames).toBeUndefined();
  });
});

// ─── getValue() round-trip ────────────────────────────────────────────────────

describe('components — getValue round-trip', () => {
  test('mountSwitch.getValue() sends comp_get_value and resolves on comp_value_result', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountSwitch(slot(), {});

    const pending = handle.getValue();
    const req = messagesOfType('comp_get_value')[0];
    expect(req.componentId).toBe(handle.id);
    expect(req.requestId).toBeTruthy();

    // Simulate the frontend's reply.
    resolveComponentValue(req.requestId, true);
    expect(await pending).toBe(true);
  });

  test('mountTextInput.getValue() resolves with the string value', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountTextInput(slot(), { value: 'seed' });

    const pending = handle.getValue();
    const req = messagesOfType('comp_get_value')[0];
    resolveComponentValue(req.requestId, 'typed text');
    expect(await pending).toBe('typed text');
  });

  test('resolveComponentValue no-ops on unknown requestId', () => {
    // Should not throw — stale/late response after teardown.
    expect(() => resolveComponentValue('never-issued', 42)).not.toThrow();
  });
});

// ─── Phase 2a value-input family ──────────────────────────────────────────────

describe('components — value-input family (Phase 2a)', () => {
  test('each value-input mount sends comp_mount with the right kind + value handle', () => {
    const c = buildComponentsAPI(createTestDeps());
    const cases: Array<[string, () => { id: string; getValue: () => Promise<unknown> }]> = [
      ['textArea',      () => c.mountTextArea(slot('s'), { rows: 6 })],
      ['numericInput',  () => c.mountNumericInput(slot('s'), { min: 0, max: 10, allowEmpty: true })],
      ['numberStepper', () => c.mountNumberStepper(slot('s'), { step: 5 })],
      ['checkbox',      () => c.mountCheckbox(slot('s'), { checked: true, label: 'Enable' })],
      ['rangeSlider',   () => c.mountRangeSlider(slot('s'), { min: 0, max: 100, value: 35 })],
    ];
    for (const [kind, mountFn] of cases) {
      (((globalThis as any).spindle.sendToFrontend as any)).mockClear();
      const handle = mountFn();
      expect(typeof handle.getValue).toBe('function');     // all are value handles
      const msg = messagesOfType('comp_mount')[0];
      expect(msg.kind).toBe(kind);
      expect(msg.targetElementId).toBe('s');
    }
  });

  test('rangeSlider threads BOTH onCommit and onDragValue as callbacks', () => {
    const c = buildComponentsAPI(createTestDeps());
    // The proxy strips functions → _callbacks; here we simulate that threading
    // to confirm the canonical derives both callback names.
    c.mountRangeSlider(slot(), {
      min: 0, max: 1,
      _callbacks: { onCommit: 'h-commit', onDragValue: 'h-drag' },
    } as any);
    const msg = messagesOfType('comp_mount')[0];
    expect((msg.callbackNames as string[]).sort()).toEqual(['onCommit', 'onDragValue']);
  });

  test('rangeSlider getValue() resolves with a number', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountRangeSlider(slot(), { min: 0, max: 100 });
    const pending = handle.getValue();
    const req = messagesOfType('comp_get_value')[0];
    resolveComponentValue(req.requestId, 42);
    expect(await pending).toBe(42);
  });

  test('numericInput getValue() can resolve null (empty)', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountNumericInput(slot(), { allowEmpty: true });
    const pending = handle.getValue();
    const req = messagesOfType('comp_get_value')[0];
    resolveComponentValue(req.requestId, null);
    expect(await pending).toBeNull();
  });
});

// ─── Phase 2a selection + utility family ──────────────────────────────────────

describe('components — selection + utility family (Phase 2a)', () => {
  test('value-handle mounts send the right kind + expose getValue', () => {
    const c = buildComponentsAPI(createTestDeps());
    const cases: Array<[string, () => { getValue: () => Promise<unknown> }]> = [
      ['select',         () => c.mountSelect(slot('s'), { options: [{ value: 'a', label: 'A' }] })],
      ['multiSelect',    () => c.mountMultiSelect(slot('s'), { options: [{ value: 'a', label: 'A' }] })],
      ['folderDropdown', () => c.mountFolderDropdown(slot('s'), { folders: ['Work'] })],
      ['modelCombobox',  () => c.mountModelCombobox(slot('s'), { connection: { kind: 'llm' } })],
    ];
    for (const [kind, mountFn] of cases) {
      (((globalThis as any).spindle.sendToFrontend as any)).mockClear();
      const handle = mountFn();
      expect(typeof handle.getValue).toBe('function');
      expect(messagesOfType('comp_mount')[0].kind).toBe(kind);
    }
  });

  test('pagination + closeButton are base handles (no getValue)', () => {
    const c = buildComponentsAPI(createTestDeps());
    const pager = c.mountPagination(slot(), { currentPage: 1, totalPages: 5, onPageChange: () => {} });
    expect(messagesOfType('comp_mount')[0].kind).toBe('pagination');
    expect((pager as any).getValue).toBeUndefined();

    (((globalThis as any).spindle.sendToFrontend as any)).mockClear();
    const close = c.mountCloseButton(slot(), { onClick: () => {} });
    expect(messagesOfType('comp_mount')[0].kind).toBe('closeButton');
    expect((close as any).getValue).toBeUndefined();
  });

  test('multiSelect getValue() resolves with a string array', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountMultiSelect(slot(), {});
    const pending = handle.getValue();
    const req = messagesOfType('comp_get_value')[0];
    resolveComponentValue(req.requestId, ['a', 'b']);
    expect(await pending).toEqual(['a', 'b']);
  });

  test('folderDropdown threads onChange + onCreateFolder callbacks', () => {
    const c = buildComponentsAPI(createTestDeps());
    c.mountFolderDropdown(slot(), {
      _callbacks: { onChange: 'h-1', onCreateFolder: 'h-2' },
    } as any);
    const msg = messagesOfType('comp_mount')[0];
    expect((msg.callbackNames as string[]).sort()).toEqual(['onChange', 'onCreateFolder']);
  });
});

// ─── Phase 2b collapsible section (body-slot) ─────────────────────────────────

describe('components — mountCollapsibleSection (Phase 2b)', () => {
  test('sends comp_mount with kind + bodyElementId and a body DOMHandle', () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountCollapsibleSection(slot('sec-slot'), {
      title: 'Advanced',
      _bodyElementId: 'body-123',
    } as any);

    const msg = messagesOfType('comp_mount')[0];
    expect(msg.kind).toBe('collapsibleSection');
    expect(msg.targetElementId).toBe('sec-slot');
    expect(msg.bodyElementId).toBe('body-123');
    expect(msg.props).toEqual({ title: 'Advanced' });  // internals stripped

    // The handle exposes a real DOMHandle body keyed to the bodyElementId.
    expect(handle.body).toBeDefined();
    expect(handle.body.id).toBe('body-123');
    expect(typeof handle.expand).toBe('function');
    expect(typeof handle.isExpanded).toBe('function');
  });

  test('expand/collapse/toggle send fire-and-forget comp_invoke', () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountCollapsibleSection(slot(), { title: 'X', _bodyElementId: 'b' } as any);
    (((globalThis as any).spindle.sendToFrontend as any)).mockClear();

    handle.expand();
    handle.collapse();
    handle.toggle();

    const invokes = messagesOfType('comp_invoke');
    expect(invokes.map((m: any) => m.method)).toEqual(['expand', 'collapse', 'toggle']);
  });

  test('isExpanded() round-trips via comp_get_value with method=isExpanded', async () => {
    const c = buildComponentsAPI(createTestDeps());
    const handle = c.mountCollapsibleSection(slot(), { title: 'X', _bodyElementId: 'b' } as any);
    (((globalThis as any).spindle.sendToFrontend as any)).mockClear();

    const pending = handle.isExpanded();
    const req = messagesOfType('comp_get_value')[0];
    expect(req.method).toBe('isExpanded');
    resolveComponentValue(req.requestId, true);
    expect(await pending).toBe(true);
  });

  test('onToggle is threaded as a callback', () => {
    const c = buildComponentsAPI(createTestDeps());
    c.mountCollapsibleSection(slot(), { title: 'X', _callbacks: { onToggle: 'h-1' } } as any);
    const msg = messagesOfType('comp_mount')[0];
    expect(msg.callbackNames).toEqual(['onToggle']);
  });
});
