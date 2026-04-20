/**
 * ============================================================================
 * LUMISCRIPT — HOST VERSION CHECK
 * ============================================================================
 * Compares the running Lumiverse version against the `minimum_lumiverse_version`
 * declared in this extension's manifest. On mismatch: logs a warning to the
 * server console and fires a user-visible toast. Silent in all other cases.
 *
 * Doesn't BLOCK extension loading — Lumiverse has its own platform-level
 * enforcement for hard gating. This is a user-friendly reminder layer:
 * if someone updates LS but forgets to update Lumiverse, they see an
 * immediate visual cue in the chat UI (toast) instead of discovering the
 * mismatch later via a broken tool or missing event. The server log
 * captures the same message for operator-level diagnostics.
 *
 * Source of truth for the minimum version lives in `spindle.json` and is
 * read at runtime via `spindle.manifest.minimum_lumiverse_version` — no
 * duplicate constants to keep in sync.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

// ─── Version comparison ─────────────────────────────────────────────────────

/**
 * Strip SemVer prerelease tags (`-alpha.1`, `-rc.2`) and build metadata
 * (`+sha.abc123`) from a version string. We compare on the major.minor.patch
 * numeric tuple only — staging/RC suffixes shouldn't trigger the "update
 * required" warning when the underlying numeric version satisfies the floor.
 */
function normalizeVersion(v: string): string {
  // `.split('-')[0]` drops prerelease; a second `.split('+')[0]` drops
  // build metadata. Non-null assertions are safe — split on a string always
  // returns at least one element, even for empty input.
  return v.split('-')[0]!.split('+')[0]!;
}

/**
 * Numerically compare two semver-like version strings. Returns negative
 * when `a < b`, zero when equal, positive when `a > b`. Non-numeric
 * components that can't be compared safely return 0 (treated as "can't
 * determine" — callers should assume compatibility in ambiguous cases
 * rather than nag on unparseable versions).
 *
 * Handles different-length tuples by zero-padding ("1.2" vs "1.2.0" → 0).
 */
export function compareVersions(a: string, b: string): number {
  const pa = normalizeVersion(a).split('.').map(Number);
  const pb = normalizeVersion(b).split('.').map(Number);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const ai = pa[i] ?? 0;
    const bi = pb[i] ?? 0;
    if (Number.isNaN(ai) || Number.isNaN(bi)) return 0;
    if (ai !== bi) return ai - bi;
  }
  return 0;
}

// ─── Runtime check ──────────────────────────────────────────────────────────

/**
 * Run the host version check once at extension startup. Silent paths:
 *   - Manifest omits `minimum_lumiverse_version` (no floor declared).
 *   - Host version lookup fails (logged to server, but no toast — we
 *     shouldn't nag users about a check that itself errored out).
 *   - Host version meets or exceeds the declared minimum.
 *
 * Only fires user-facing output when the host is genuinely behind.
 */
export async function checkMinimumHostVersion(): Promise<void> {
  const minimum = spindle.manifest.minimum_lumiverse_version;
  if (!minimum) return;

  let hostVersion: string;
  try {
    hostVersion = await spindle.version.getBackend();
  } catch (err) {
    const text = err instanceof Error ? err.message : String(err);
    spindle.log.warn(
      `[LumiScript] Could not verify host Lumiverse version (non-blocking): ${text}`,
    );
    return;
  }

  if (compareVersions(hostVersion, minimum) >= 0) return;

  const msg =
    `LumiScript v${spindle.manifest.version} requires Lumiverse ${minimum} or newer. ` +
    `Current host is ${hostVersion}. Recent features (Council member context, ` +
    `structured chat-context delivery for tools, swipe-edit triggers, rich ` +
    `message patches) may be missing or broken on this version. Update ` +
    `Lumiverse to resolve.`;
  spindle.log.warn(`[LumiScript] ${msg}`);
  spindle.toast.warning(msg, {
    title: 'LumiScript — Update Lumiverse',
    duration: 12_000,
  });
}
