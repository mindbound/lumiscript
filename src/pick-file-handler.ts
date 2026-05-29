/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND FILE-PICKER HANDLER
 * ============================================================================
 * Runs in the browser. Receives `ls_pick_file_request` messages from the
 * backend, invokes `ctx.uploads.pickFile(options)`, and echoes the selected
 * file(s) back via `ls_pick_file_result` so the backend can settle the
 * awaiting promise on `api.ui.pickFile(...)`.
 *
 * Each file's `bytes` (a Uint8Array) is base64-encoded for the JSON message
 * bus — the backend decodes back to a Uint8Array before resolving. On host
 * error (a selected file exceeds `maxSizeBytes` — `ctx.uploads.pickFile`
 * throws), we forward the message in `error` so the backend REJECTS, mirroring
 * the host semantics. User-cancel resolves naturally as an empty file list.
 *
 * No local state beyond the message subscription — every call is a
 * request-response cycle keyed by `requestId`; the backend's pending-promise
 * map does the correlation.
 */

import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import { bytesToBase64 } from './engine/image-format.js';

type PickFileMessage = Extract<BackendToFrontend, { type: 'ls_pick_file_request' }>;

function isPickFileMessage(msg: unknown): msg is PickFileMessage {
  return (msg as { type?: string })?.type === 'ls_pick_file_request';
}

export function installPickFileHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage(async (raw) => {
    if (!isPickFileMessage(raw)) return;
    const msg = raw as PickFileMessage;

    try {
      const picked = await ctx.uploads.pickFile({
        accept:       msg.options.accept,
        multiple:     msg.options.multiple,
        maxSizeBytes: msg.options.maxSizeBytes,
      });
      sendToBackend({
        type:      'ls_pick_file_result',
        requestId: msg.requestId,
        files: picked.map((f) => ({
          name:       f.name,
          mimeType:   f.mimeType,
          sizeBytes:  f.sizeBytes,
          dataBase64: bytesToBase64(f.bytes),
        })),
      });
    } catch (err) {
      // Host threw — most commonly a file exceeded maxSizeBytes. Forward the
      // message so the backend rejects the awaiting api.ui.pickFile promise.
      sendToBackend({
        type:      'ls_pick_file_result',
        requestId: msg.requestId,
        error:     err instanceof Error ? err.message : String(err),
      });
    }
  });

  return () => {
    unsubMessages();
  };
}
