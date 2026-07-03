/**
 * User-managed private-host allowlist for LumiScript outbound HTTP.
 *
 * Outbound HTTP is SSRF-hardened by default: every request is routed through the host's cors proxy →
 * `safeFetch`, which resolves + pins DNS and blocks loopback / LAN / link-local / cloud-metadata addresses.
 * This allowlist is the escape hatch for the *intentional* local case — a local model server (Ollama,
 * LM Studio, ComfyUI, …), a LAN device (Home Assistant, a NAS) — where the USER (never a script) names
 * specific hosts that may be reached DIRECTLY, bypassing the private-IP block.
 *
 * Three safety properties make the direct path sound:
 *   1. Matching is LITERAL on the URL's host. A hostname that merely *resolves* to an allowlisted IP does
 *      NOT match — it stays on `safeFetch`. So a rebinding / `evil.com → 127.0.0.1` trick can't reach the
 *      direct path; it fails closed to the hardened path.
 *   2. Entries are IP literals or `localhost` (± a port) — fixed addresses with no DNS ambiguity, so the
 *      direct fetch has no resolve-then-connect TOCTOU to exploit.
 *   3. Only http/https URLs are direct-eligible. The direct path skips `safeFetch`, which is what enforces
 *      the scheme — so a non-http(s) URL (`file:`, `ftp:`, …) falls through to the hardened path instead,
 *      closing an otherwise-arbitrary local-file read via `file://<allowlisted-ip>/…`.
 *
 * Paired with the per-script `allowDangerous` gate: `allowDangerous` grants the HTTP capability at all; the
 * allowlist scopes WHICH private hosts that capability may reach. The list lives in user settings and is
 * never writable by a script.
 */

/** Normalize a host for comparison: trim, lowercase, drop a trailing dot + surrounding IPv6 brackets. */
function normHost(h: string): string {
  return h.trim().toLowerCase().replace(/\.+$/, '').replace(/^\[|\]$/g, '');
}

/**
 * Canonicalize a host the SAME way the WHATWG URL parser normalizes a request URL's hostname, so an
 * allowlist ENTRY and an incoming URL are always compared in one representation. Without this, an entry
 * `[0:0:0:0:0:0:0:1]` would never match `::1` (what `new URL` yields for that address), and `01.02.03.04`
 * would never match `1.2.3.4` — a silently-dead allowlist entry the user believes is active. Returns null
 * for a host the URL parser rejects (e.g. `999.999.999.999`, a zone-scoped `fe80::1%eth0`), so such an
 * entry is refused up front rather than stored as permanently inert.
 */
function canonicalizeHost(rawHost: string): string | null {
  const h = normHost(rawHost);
  if (!h) return null;
  const bracketed = h.includes(':') ? `[${h}]` : h;
  try {
    return normHost(new URL(`http://${bracketed}/`).hostname);
  } catch {
    return null;
  }
}

/**
 * Parse an allowlist entry into `{ host, port? }`. Accepts `host`, `host:port`, `[ipv6]`, `[ipv6]:port`.
 * The host is canonicalized to the WHATWG form (see `canonicalizeHost`) so it matches what `new URL`
 * produces for the same address; an entry whose host the URL parser rejects returns null.
 */
export function parseAllowlistEntry(entry: string): { host: string; port?: string } | null {
  const e = entry.trim();
  if (!e) return null;
  let rawHost: string;
  let port: string | undefined;
  // [ipv6] or [ipv6]:port
  const v6 = e.match(/^\[([^\]]+)\](?::(\d+))?$/);
  if (v6) {
    rawHost = v6[1]!;
    port = v6[2];
  } else {
    // host:port — a SINGLE colon with a numeric tail (a bare IPv6 literal has multiple colons)
    const colons = e.split(':');
    if (colons.length === 2 && /^\d+$/.test(colons[1]!)) {
      rawHost = colons[0]!;
      port = colons[1];
    } else {
      // bare host, or a bare IPv6 literal (2+ colons)
      rawHost = e;
    }
  }
  const host = canonicalizeHost(rawHost);
  if (host === null) return null;
  return port !== undefined ? { host, port } : { host };
}

/**
 * A host is eligible for the DIRECT (allowlist) path only if it's a FIXED address — an IP literal or
 * `localhost` — i.e. one the direct fetch can't be steered off by DNS. A regular hostname is NOT eligible
 * even if it appears in the allowlist: it would resolve at connect time (no `safeFetch` pinning), re-opening
 * the rebinding window the guard exists to close. Such a URL falls through to the hardened cors → safeFetch
 * path. (The UI validates entries to this same shape; this enforces it at the security layer regardless of
 * how the setting was populated, e.g. a hand-edited settings.json.)
 */
export function isDirectEligibleHost(host: string): boolean {
  const h = normHost(host);
  if (h === 'localhost' || h.endsWith('.localhost')) return true;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true; // IPv4 literal
  if (h.includes(':')) return true;                   // IPv6 literal (brackets already stripped by normHost)
  return false;
}

/**
 * Does the URL's host (+ port) exactly match a user-allowlisted private host? The URL host must itself be a
 * fixed address (isDirectEligibleHost) — a hostname is never eligible. An entry WITHOUT a port matches any
 * port on that host; an entry WITH a port matches only that port. Returns false on an empty allowlist or an
 * unparseable URL (fail closed → the caller routes through the hardened path).
 */
export function isAllowlistedHost(url: string, allowlist: readonly string[]): boolean {
  if (!allowlist.length) return false;
  let u: URL;
  try { u = new URL(url); } catch { return false; }
  // The direct path skips safeFetch, which is the ONLY layer that enforces http/https — so enforce it
  // here too. A non-http(s) scheme (file:, ftp:, data:, …) must never take the direct path: e.g.
  // `file://127.0.0.1/etc/passwd` has an allowlisted host but would be an arbitrary local-file read.
  // Failing closed routes such a URL to the hardened path, where safeFetch rejects the scheme consistently.
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return false;
  const host = normHost(u.hostname);
  if (!isDirectEligibleHost(host)) return false; // hostnames never take the direct path (rebinding guard)
  const port = u.port; // '' for a default port (80/443)
  for (const raw of allowlist) {
    const entry = parseAllowlistEntry(raw);
    if (!entry || entry.host !== host) continue;
    if (entry.port === undefined || entry.port === port) return true;
  }
  return false;
}
