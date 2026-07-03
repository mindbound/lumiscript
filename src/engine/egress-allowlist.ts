/**
 * User-managed private-host allowlist for LumiScript outbound HTTP.
 *
 * Outbound HTTP is SSRF-hardened by default: every request is routed through the host's cors proxy →
 * `safeFetch`, which resolves + pins DNS and blocks loopback / LAN / link-local / cloud-metadata addresses.
 * This allowlist is the escape hatch for the *intentional* local case — a local model server (Ollama,
 * LM Studio, ComfyUI, …), a LAN device (Home Assistant, a NAS) — where the USER (never a script) names
 * specific hosts that may be reached DIRECTLY, bypassing the private-IP block.
 *
 * Two safety properties make the direct path sound:
 *   1. Matching is LITERAL on the URL's host. A hostname that merely *resolves* to an allowlisted IP does
 *      NOT match — it stays on `safeFetch`. So a rebinding / `evil.com → 127.0.0.1` trick can't reach the
 *      direct path; it fails closed to the hardened path.
 *   2. Entries are IP literals or `localhost` (± a port) — fixed addresses with no DNS ambiguity, so the
 *      direct fetch has no resolve-then-connect TOCTOU to exploit.
 *
 * Paired with the per-script `allowDangerous` gate: `allowDangerous` grants the HTTP capability at all; the
 * allowlist scopes WHICH private hosts that capability may reach. The list lives in user settings and is
 * never writable by a script.
 */

/** Normalize a host for comparison: trim, lowercase, drop a trailing dot + surrounding IPv6 brackets. */
function normHost(h: string): string {
  return h.trim().toLowerCase().replace(/\.+$/, '').replace(/^\[|\]$/g, '');
}

/** Parse an allowlist entry into `{ host, port? }`. Accepts `host`, `host:port`, `[ipv6]`, `[ipv6]:port`. */
export function parseAllowlistEntry(entry: string): { host: string; port?: string } | null {
  const e = entry.trim();
  if (!e) return null;
  // [ipv6] or [ipv6]:port
  const v6 = e.match(/^\[([^\]]+)\](?::(\d+))?$/);
  if (v6) return { host: normHost(v6[1]!), port: v6[2] };
  // host:port — a SINGLE colon with a numeric tail (a bare IPv6 literal has multiple colons)
  const colons = e.split(':');
  if (colons.length === 2 && /^\d+$/.test(colons[1]!)) return { host: normHost(colons[0]!), port: colons[1] };
  // bare host, or a bare IPv6 literal (2+ colons)
  return { host: normHost(e) };
}

/**
 * Does the URL's host (+ port) exactly match a user-allowlisted private host? An entry WITHOUT a port
 * matches any port on that host; an entry WITH a port matches only that port. Returns false on an empty
 * allowlist or an unparseable URL (fail closed → the caller routes through the hardened path).
 */
export function isAllowlistedHost(url: string, allowlist: readonly string[]): boolean {
  if (!allowlist.length) return false;
  let u: URL;
  try { u = new URL(url); } catch { return false; }
  const host = normHost(u.hostname);
  const port = u.port; // '' for a default port (80/443)
  for (const raw of allowlist) {
    const entry = parseAllowlistEntry(raw);
    if (!entry || entry.host !== host) continue;
    if (entry.port === undefined || entry.port === port) return true;
  }
  return false;
}
