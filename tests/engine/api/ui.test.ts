import { describe, test, expect, beforeEach } from 'bun:test';
import { buildUIAPI } from '../../../src/engine/api/ui.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildUIAPI(createTestDeps(overrides));
}

// ─── toast ───────────────────────────────────────────────────────────────────

describe('toast', () => {
  test('delegates to spindle.toast[type] with default info', () => {
    const api = buildApi();
    api.toast('Hello');
    expect(mockSpindle.toast.info).toHaveBeenCalledWith('Hello', undefined);
  });

  test('uses specified type', () => {
    const api = buildApi();
    api.toast('Error!', 'error');
    expect(mockSpindle.toast.error).toHaveBeenCalledWith('Error!', undefined);
  });

  test('passes options through', () => {
    const api = buildApi();
    api.toast('Msg', 'success', { title: 'Title', duration: 5000 });
    expect(mockSpindle.toast.success).toHaveBeenCalledWith('Msg', { title: 'Title', duration: 5000 });
  });

  test('supports all four types', () => {
    const api = buildApi();
    api.toast('a', 'info');
    api.toast('b', 'success');
    api.toast('c', 'warning');
    api.toast('d', 'error');
    expect(mockSpindle.toast.info).toHaveBeenCalledTimes(1);
    expect(mockSpindle.toast.success).toHaveBeenCalledTimes(1);
    expect(mockSpindle.toast.warning).toHaveBeenCalledTimes(1);
    expect(mockSpindle.toast.error).toHaveBeenCalledTimes(1);
  });
});

// ─── prompt ──────────────────────────────────────────────────────────────────

describe('prompt', () => {
  test('returns value from spindle.prompt.input', async () => {
    mockSpindle.prompt.input.mockReturnValueOnce(
      Promise.resolve({ value: 'user input', cancelled: false }),
    );
    const api = buildApi();
    expect(await api.prompt('Enter name:')).toBe('user input');
  });

  test('returns null when cancelled', async () => {
    mockSpindle.prompt.input.mockReturnValueOnce(
      Promise.resolve({ value: null, cancelled: true }),
    );
    const api = buildApi();
    expect(await api.prompt('Enter:')).toBeNull();
  });

  test('passes all options through', async () => {
    mockSpindle.prompt.input.mockReturnValueOnce(
      Promise.resolve({ value: '', cancelled: false }),
    );
    const api = buildApi();
    await api.prompt('Q?', 'default', {
      placeholder: 'hint', submitLabel: 'OK', cancelLabel: 'No', multiline: true,
    });
    const call = mockSpindle.prompt.input.mock.calls[0] as any;
    expect(call[0].title).toBe('Q?');
    expect(call[0].defaultValue).toBe('default');
    expect(call[0].placeholder).toBe('hint');
    expect(call[0].multiline).toBe(true);
  });
});

// ─── confirm ─────────────────────────────────────────────────────────────────

describe('confirm', () => {
  test('returns true when confirmed', async () => {
    mockSpindle.modal.confirm.mockReturnValueOnce(
      Promise.resolve({ confirmed: true }),
    );
    const api = buildApi();
    expect(await api.confirm('Are you sure?')).toBe(true);
  });

  test('returns false when not confirmed', async () => {
    mockSpindle.modal.confirm.mockReturnValueOnce(
      Promise.resolve({ confirmed: false }),
    );
    const api = buildApi();
    expect(await api.confirm('Sure?')).toBe(false);
  });

  test('passes variant and labels', async () => {
    mockSpindle.modal.confirm.mockReturnValueOnce(
      Promise.resolve({ confirmed: true }),
    );
    const api = buildApi();
    await api.confirm('Delete?', 'Confirm Deletion', {
      variant: 'danger', confirmLabel: 'Delete', cancelLabel: 'Keep',
    });
    const call = mockSpindle.modal.confirm.mock.calls[0] as any;
    expect(call[0].variant).toBe('danger');
    expect(call[0].confirmLabel).toBe('Delete');
  });
});

// ─── showModal ───────────────────────────────────────────────────────────────

describe('showModal', () => {
  test('returns a ModalHandle with openRequestId and result promise', async () => {
    mockSpindle.modal.open.mockReturnValueOnce(
      Promise.resolve({ openRequestId: 'req-1', dismissedBy: 'user' }),
    );
    const api = buildApi();
    const handle = api.showModal(
      [{ type: 'text', content: 'Hello' }],
      { title: 'Info' },
    );
    expect(handle.openRequestId).toBeDefined();
    expect(typeof handle.close).toBe('function');
    const result = await handle.result;
    expect(result.dismissedBy).toBe('user');
  });

  test('close() calls spindle.modal.close with the request id', async () => {
    mockSpindle.modal.open.mockReturnValueOnce(
      Promise.resolve({ openRequestId: 'req-1', dismissedBy: 'user' }),
    );
    const api = buildApi();
    const handle = api.showModal([], { title: 'Test' });
    await handle.close();
    expect(mockSpindle.modal.close).toHaveBeenCalledWith(
      handle.openRequestId,
      'test-user-id',
    );
  });
});

// ─── editText ────────────────────────────────────────────────────────────────

describe('editText', () => {
  test('returns text when user submits', async () => {
    mockSpindle.textEditor.open.mockReturnValueOnce(
      Promise.resolve({ text: 'edited content', cancelled: false }),
    );
    const api = buildApi();
    expect(await api.editText('Edit Prompt', 'initial')).toBe('edited content');
  });

  test('returns null when user cancels', async () => {
    mockSpindle.textEditor.open.mockReturnValueOnce(
      Promise.resolve({ text: '', cancelled: true }),
    );
    const api = buildApi();
    expect(await api.editText('Edit')).toBeNull();
  });

  test('passes all options through to spindle.textEditor.open', async () => {
    mockSpindle.textEditor.open.mockReturnValueOnce(
      Promise.resolve({ text: 'ok', cancelled: false }),
    );
    const api = buildApi();
    await api.editText('Title', 'value', { placeholder: 'hint' });
    const call = mockSpindle.textEditor.open.mock.calls[0] as any;
    expect(call[0].title).toBe('Title');
    expect(call[0].value).toBe('value');
    expect(call[0].placeholder).toBe('hint');
    expect(call[0].userId).toBe('test-user-id');
  });
});

// ─── pushNotification ────────────────────────────────────────────────────────

describe('pushNotification', () => {
  test('delegates to spindle.push.send with title, body, and options', async () => {
    mockSpindle.push.send.mockReturnValueOnce(Promise.resolve({ sent: 2 }));
    const api = buildApi();
    const result = await api.pushNotification('Alert', 'Something happened', { tag: 'alert-1' });
    expect(result.sent).toBe(2);
    const call = mockSpindle.push.send.mock.calls[0] as any;
    expect(call[0].title).toBe('Alert');
    expect(call[0].body).toBe('Something happened');
    expect(call[0].tag).toBe('alert-1');
    expect(call[1]).toBe('test-user-id');
  });

  test('throws when push_notification permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.pushNotification('Hi', 'Test')).toThrow('PERMISSION_DENIED');
  });
});

// ─── getPushStatus ───────────────────────────────────────────────────────────

describe('getPushStatus', () => {
  test('delegates to spindle.push.getStatus', async () => {
    mockSpindle.push.getStatus.mockReturnValueOnce(
      Promise.resolve({ available: true, subscriptionCount: 3 }),
    );
    const api = buildApi();
    const status = await api.getPushStatus();
    expect(status.available).toBe(true);
    expect(status.subscriptionCount).toBe(3);
  });

  test('throws when push_notification permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.getPushStatus()).toThrow('PERMISSION_DENIED');
  });
});
