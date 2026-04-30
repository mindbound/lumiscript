/**
 * ============================================================================
 * LUMISCRIPT — IMAGE-BYTES HELPERS (shared between parent + child runtimes)
 * ============================================================================
 * Single source of truth for `api.utils.image.*` byte-level helpers.
 *
 * Lives in its own file (zero dependencies) so the script-runner child can
 * import it without dragging in the parent's executor module graph
 * (Handlebars, spindle.cors, the api.* implementations, …). Mirrors the
 * pattern established by `console-format.ts` for `serializeConsoleArg`.
 *
 * Used by:
 *   - `engine/api/utils.ts:buildUtilsAPI` for in-process script runs
 *   - `script-runner/api-proxy.ts` for child-runtime runs (Phase 9d.2)
 *
 * Drift safety: any change here affects both runtimes simultaneously, by
 * design.
 */

/**
 * Magic-byte sniff. Returns the canonical MIME type, or null for
 * unrecognised / truncated input. Kept narrow to image formats that
 * Lumiverse / common browsers render natively.
 *
 * Signatures (offsets in bytes, values in hex):
 *   PNG   0–3  89 50 4E 47
 *   JPEG  0–2  FF D8 FF
 *   GIF   0–5  47 49 46 38 37 61 ("GIF87a") or 47 49 46 38 39 61 ("GIF89a")
 *   WebP  0–3  52 49 46 46 ("RIFF")        + 8–11  57 45 42 50 ("WEBP")
 *   BMP   0–1  42 4D
 */
export function detectImageMime(bytes: Uint8Array): string | null {
  if (bytes.length < 4) return null;

  // PNG
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
    return 'image/png';
  }
  // JPEG
  if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
    return 'image/jpeg';
  }
  // GIF (both 87a and 89a)
  if (
    bytes.length >= 6 &&
    bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 &&
    bytes[3] === 0x38 && (bytes[4] === 0x37 || bytes[4] === 0x39) &&
    bytes[5] === 0x61
  ) {
    return 'image/gif';
  }
  // WebP — RIFF container with WEBP fourcc at offset 8
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
    bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) {
    return 'image/webp';
  }
  // BMP
  if (bytes[0] === 0x42 && bytes[1] === 0x4D) {
    return 'image/bmp';
  }
  return null;
}

/**
 * Parse a base64-encoded data URL. Only the `data:<mime>;base64,<payload>`
 * shape is accepted — non-base64 data URIs (`data:image/svg+xml,<raw>`)
 * return null rather than being silently misinterpreted. `;charset=<cs>`
 * parameters are tolerated (ignored) because some producers include them.
 */
export function parseBase64DataUrl(url: string): { data: Uint8Array; mimeType: string } | null {
  // Shape: data:<mime>[;<param>]*;base64,<payload>
  // Parameter list is semicolon-delimited; `base64` must be the LAST one.
  const match = /^data:([^;,]+)(;[^,]+)?,(.*)$/s.exec(url);
  if (!match) return null;
  const mimeType = match[1] ?? '';
  const params   = match[2] ?? '';
  const payload  = match[3] ?? '';
  if (!mimeType) return null;
  if (!/(^|;)base64$/i.test(params)) return null;
  try {
    return { data: base64ToBytes(payload), mimeType };
  } catch {
    // atob throws InvalidCharacterError on non-base64 input.
    return null;
  }
}

/**
 * Uint8Array → base64 string. Chunks the input so String.fromCharCode
 * doesn't blow the argument-count stack limit on large buffers (typical
 * limit is ~65 535 args).
 */
export function bytesToBase64(bytes: Uint8Array): string {
  const CHUNK = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += CHUNK) {
    const slice = bytes.subarray(i, Math.min(i + CHUNK, bytes.length));
    binary += String.fromCharCode.apply(null, Array.from(slice));
  }
  return btoa(binary);
}

/**
 * base64 string → Uint8Array. Inverse of `bytesToBase64`. Throws via
 * atob on invalid input (caller catches).
 */
export function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
