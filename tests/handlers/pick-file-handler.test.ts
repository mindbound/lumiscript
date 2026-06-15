/**
 * Unit tests for `src/pick-file-handler.ts`.
 *
 * The handler is a pure request→response bridge: it listens for
 * `ls_pick_file_request`, calls `ctx.uploads.pickFile(options)`, base64-encodes
 * each picked file's `bytes` for the JSON bus, and echoes the result back via
 * `ls_pick_file_result` keyed by `requestId`. On host throw (e.g. oversize) it
 * forwards `error` instead of `files` so the backend rejects. No module-level
 * state, no DOM access.
 *
 * The handler body is `async` (awaits the pickFile promise), so we `await` a
 * microtask before asserting `sent[]`. We cross-check the base64 encoding
 * against the real `bytesToBase64` the handler uses.
 *
 * Follows the `install()`/`sent[]` pattern from `tests/dom-handler-dom.test.ts`.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installPickFileHandler } from '../../src/pick-file-handler.js';
import { bytesToBase64 } from '../../src/engine/image-format.js';

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
});

/** Yield to the microtask queue so an awaited ctx promise settles. */
const flush = () => new Promise<void>((r) => setTimeout(r, 0));

/** A host upload file (mirrors SpindleUploadFile: bytes is a Uint8Array). */
type HostFile = { name: string; mimeType: string; sizeBytes: number; bytes: Uint8Array };

/**
 * Install the pick-file handler with an inline mock `ctx` exposing only
 * `uploads.pickFile`. `files` controls what the picker resolves to; `reject`
 * makes it throw (oversize / host error path).
 */
function install(opts?: { files?: HostFile[]; reject?: unknown }) {
  const pickFile = mock((_options: unknown) => {
    if (opts?.reject !== undefined) return Promise.reject(opts.reject);
    return Promise.resolve(opts?.files ?? []);
  });
  const ctx = { uploads: { pickFile } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  const unsub = mock(() => {});
  activeCleanup = installPickFileHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return unsub; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, pickFile, unsub };
}

const requestMsg = (overrides: Record<string, unknown> = {}) => ({
  type: 'ls_pick_file_request',
  requestId: 'pf-1',
  options: { accept: ['image/png'], multiple: true, maxSizeBytes: 1024 },
  ...overrides,
});

describe('pick-file-handler — request/response routing', () => {
  test('forwards accept/multiple/maxSizeBytes to ctx.uploads.pickFile', async () => {
    const { handler, pickFile } = install({ files: [] });
    handler(requestMsg());
    await flush();

    expect(pickFile).toHaveBeenCalledTimes(1);
    const arg = pickFile.mock.calls[0]![0] as any;
    expect(arg.accept).toEqual(['image/png']);
    expect(arg.multiple).toBe(true);
    expect(arg.maxSizeBytes).toBe(1024);
  });

  test('encodes picked files (bytes→base64) and echoes them by requestId', async () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 250]);
    const { handler, sent } = install({
      files: [{ name: 'a.png', mimeType: 'image/png', sizeBytes: 5, bytes }],
    });
    handler(requestMsg({ requestId: 'pf-42' }));
    await flush();

    const res = sent.find((m) => m.type === 'ls_pick_file_result');
    expect(res).toBeDefined();
    expect(res.requestId).toBe('pf-42');
    expect(res.error).toBeUndefined();
    expect(res.files).toHaveLength(1);
    expect(res.files[0]).toEqual({
      name: 'a.png',
      mimeType: 'image/png',
      sizeBytes: 5,
      // Cross-check against the real encoder the handler uses.
      dataBase64: bytesToBase64(bytes),
    });
  });

  test('handles a multi-file selection, preserving order', async () => {
    const f1 = new Uint8Array([0]);
    const f2 = new Uint8Array([255, 254]);
    const { handler, sent } = install({
      files: [
        { name: 'one.bin', mimeType: 'application/octet-stream', sizeBytes: 1, bytes: f1 },
        { name: 'two.bin', mimeType: 'application/octet-stream', sizeBytes: 2, bytes: f2 },
      ],
    });
    handler(requestMsg());
    await flush();

    const res = sent.find((m) => m.type === 'ls_pick_file_result');
    expect(res.files.map((f: any) => f.name)).toEqual(['one.bin', 'two.bin']);
    expect(res.files[0].dataBase64).toBe(bytesToBase64(f1));
    expect(res.files[1].dataBase64).toBe(bytesToBase64(f2));
  });

  test('user cancel → empty files array (no error)', async () => {
    const { handler, sent } = install({ files: [] });
    handler(requestMsg({ requestId: 'pf-cancel' }));
    await flush();

    const res = sent.find((m) => m.type === 'ls_pick_file_result');
    expect(res.requestId).toBe('pf-cancel');
    expect(res.files).toEqual([]);
    expect(res.error).toBeUndefined();
  });

  test('host throw (Error) forwards the message via `error` so the backend rejects', async () => {
    const { handler, sent } = install({ reject: new Error('file exceeds maxSizeBytes') });
    handler(requestMsg({ requestId: 'pf-big' }));
    await flush();

    const res = sent.find((m) => m.type === 'ls_pick_file_result');
    expect(res).toBeDefined();
    expect(res.requestId).toBe('pf-big');
    expect(res.files).toBeUndefined();
    expect(res.error).toBe('file exceeds maxSizeBytes');
  });

  test('host throw of a non-Error is stringified into `error`', async () => {
    const { handler, sent } = install({ reject: 'plain string failure' });
    handler(requestMsg());
    await flush();

    const res = sent.find((m) => m.type === 'ls_pick_file_result');
    expect(res.error).toBe('plain string failure');
  });

  test('ignores unrelated message types (no ctx call, nothing sent)', async () => {
    const { handler, sent, pickFile } = install();
    handler({ type: 'ls_context_menu_show', requestId: 'x' });
    handler({ type: 'whatever' });
    await flush();

    expect(pickFile).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('cleanup calls the onBackendMessage unsubscribe', () => {
    const { unsub } = install();
    expect(unsub).not.toHaveBeenCalled();
    activeCleanup?.();
    activeCleanup = undefined;
    expect(unsub).toHaveBeenCalledTimes(1);
  });
});
