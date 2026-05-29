import { describe, test, expect, beforeEach } from 'bun:test';
import { buildUIAPI, resolvePickFile } from '../../../src/engine/api/ui.js';
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

// ─── navigation (free tier) ────────────────────────────────────────────────────

describe('navigation', () => {
  test('getDrawerTabs passes the tab list through + forwards userId', async () => {
    mockSpindle.ui.getDrawerTabs.mockReturnValueOnce(Promise.resolve([
      { id: 'connections', shortName: 'Conn', tabName: 'Connections', tabDescription: 'd', keywords: [], source: 'builtin' },
    ]));
    const api = buildApi({ userId: 'u-1' });
    const tabs = await api.getDrawerTabs();
    expect(tabs).toHaveLength(1);
    expect(tabs[0]!.id).toBe('connections');
    expect(mockSpindle.ui.getDrawerTabs.mock.calls[0][0]).toEqual({ userId: 'u-1' });
  });

  test('getSettingsTabs passes the tab list through', async () => {
    mockSpindle.ui.getSettingsTabs.mockReturnValueOnce(Promise.resolve([
      { id: 'display', shortName: 'Disp', tabName: 'Display', tabDescription: 'd', keywords: [] },
    ]));
    const api = buildApi();
    const tabs = await api.getSettingsTabs();
    expect(tabs[0]!.id).toBe('display');
  });

  test('openDrawerTab forwards tabId + userId', async () => {
    const api = buildApi({ userId: 'u-2' });
    await api.openDrawerTab('connections');
    expect(mockSpindle.ui.openDrawerTab.mock.calls[0][0]).toBe('connections');
    expect(mockSpindle.ui.openDrawerTab.mock.calls[0][1]).toEqual({ userId: 'u-2' });
  });

  test('openSettings forwards viewId + userId; undefined viewId is passed through', async () => {
    const api = buildApi({ userId: 'u-3' });
    await api.openSettings('connections');
    expect(mockSpindle.ui.openSettings.mock.calls[0][0]).toBe('connections');
    expect(mockSpindle.ui.openSettings.mock.calls[0][1]).toEqual({ userId: 'u-3' });

    await api.openSettings();
    expect(mockSpindle.ui.openSettings.mock.calls[1][0]).toBeUndefined();
  });

  test('closeDrawer / closeSettings / openCommandPalette / closeCommandPalette forward userId', async () => {
    const api = buildApi({ userId: 'u-4' });
    await api.closeDrawer();
    await api.closeSettings();
    await api.openCommandPalette();
    await api.closeCommandPalette();
    expect(mockSpindle.ui.closeDrawer.mock.calls[0][0]).toEqual({ userId: 'u-4' });
    expect(mockSpindle.ui.closeSettings.mock.calls[0][0]).toEqual({ userId: 'u-4' });
    expect(mockSpindle.ui.openCommandPalette.mock.calls[0][0]).toEqual({ userId: 'u-4' });
    expect(mockSpindle.ui.closeCommandPalette.mock.calls[0][0]).toEqual({ userId: 'u-4' });
  });
});

// ─── pickFile (frontend round-trip) ─────────────────────────────────────────────

describe('pickFile', () => {
  // Grab the most recent ls_pick_file_request the canonical sent to the frontend.
  function lastPickRequest(): any {
    const calls = mockSpindle.sendToFrontend.mock.calls;
    for (let i = calls.length - 1; i >= 0; i--) {
      if (calls[i][0]?.type === 'ls_pick_file_request') return calls[i][0];
    }
    return undefined;
  }

  test('sends ls_pick_file_request with the options, then resolves with decoded files', async () => {
    const api = buildApi();
    const p = api.pickFile({ accept: ['.json'], multiple: true, maxSizeBytes: 1000 });

    const req = lastPickRequest();
    expect(req.type).toBe('ls_pick_file_request');
    expect(req.options).toEqual({ accept: ['.json'], multiple: true, maxSizeBytes: 1000 });
    expect(typeof req.requestId).toBe('string');

    // Simulate the frontend echo. 'aGk=' is base64 for the bytes [104, 105] = "hi".
    resolvePickFile(req.requestId, {
      files: [{ name: 'a.txt', mimeType: 'text/plain', sizeBytes: 2, dataBase64: 'aGk=' }],
    });

    const files = await p;
    expect(files).toHaveLength(1);
    expect(files[0]!.name).toBe('a.txt');
    expect(files[0]!.mimeType).toBe('text/plain');
    expect(Array.from(files[0]!.bytes)).toEqual([104, 105]);
    expect(new TextDecoder().decode(files[0]!.bytes)).toBe('hi');
  });

  test('resolves with [] when the user cancels (empty files)', async () => {
    const api = buildApi();
    const p = api.pickFile();
    resolvePickFile(lastPickRequest().requestId, { files: [] });
    expect(await p).toEqual([]);
  });

  test('rejects when the host reports an error (e.g. oversize)', async () => {
    const api = buildApi();
    const p = api.pickFile({ maxSizeBytes: 1 });
    resolvePickFile(lastPickRequest().requestId, { error: 'File exceeds the maximum size' });
    await expect(p).rejects.toThrow('File exceeds the maximum size');
  });

  test('resolvePickFile no-ops on an unknown requestId', () => {
    expect(() => resolvePickFile('does-not-exist', { files: [] })).not.toThrow();
  });
});
