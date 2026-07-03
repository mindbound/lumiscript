/**
 * User-managed private-host allowlist matcher — the security-critical decision of whether an outbound URL
 * may take the DIRECT fetch path (bypassing safeFetch's private-IP block) or must stay on the hardened path.
 * Matching is literal on the URL host, so a hostname that merely resolves to an allowlisted IP must NOT match.
 */
import { describe, test, expect } from 'bun:test';
import { isAllowlistedHost, parseAllowlistEntry } from '../../src/engine/egress-allowlist.js';

describe('isAllowlistedHost', () => {
  test('empty allowlist never matches (default-safe)', () => {
    expect(isAllowlistedHost('http://localhost:11434/api', [])).toBe(false);
  });

  test('exact host match (any port when the entry has none)', () => {
    const list = ['localhost'];
    expect(isAllowlistedHost('http://localhost:11434/', list)).toBe(true);
    expect(isAllowlistedHost('http://localhost/', list)).toBe(true);
    expect(isAllowlistedHost('https://localhost:8443/x', list)).toBe(true);
  });

  test('port-scoped entry matches only that port', () => {
    const list = ['localhost:11434'];
    expect(isAllowlistedHost('http://localhost:11434/', list)).toBe(true);
    expect(isAllowlistedHost('http://localhost:1234/', list)).toBe(false);
    expect(isAllowlistedHost('http://localhost/', list)).toBe(false); // default port ≠ 11434
  });

  test('IPv4 literals + LAN addresses', () => {
    expect(isAllowlistedHost('http://127.0.0.1:5000/', ['127.0.0.1'])).toBe(true);
    expect(isAllowlistedHost('http://192.168.1.50:8123/', ['192.168.1.50:8123'])).toBe(true);
    expect(isAllowlistedHost('http://192.168.1.51/', ['192.168.1.50'])).toBe(false);
  });

  test('IPv6 literals (bracketed in URLs, bracketed or bare in entries)', () => {
    expect(isAllowlistedHost('http://[::1]:11434/', ['[::1]'])).toBe(true);
    expect(isAllowlistedHost('http://[::1]/', ['::1'])).toBe(true);
    expect(isAllowlistedHost('http://[fd00::1]:8080/', ['[fd00::1]:8080'])).toBe(true);
  });

  test('a default-port entry never matches (default ports normalize to empty in URLs)', () => {
    // http://…:80 and https://…:443 normalize URL.port to '' — so pin non-default ports (or omit the port).
    expect(isAllowlistedHost('http://localhost/', ['localhost:80'])).toBe(false);
    expect(isAllowlistedHost('http://localhost/', ['localhost'])).toBe(true); // omit port → matches
  });

  test('SECURITY: a hostname that RESOLVES to an allowlisted IP does NOT match (literal only)', () => {
    // The URL host is a domain, not the allowlisted literal — must fail closed to the hardened path,
    // even though the domain might resolve to 127.0.0.1 (DNS-rebinding class of bypass).
    expect(isAllowlistedHost('http://evil.example.com/', ['127.0.0.1', 'localhost'])).toBe(false);
    expect(isAllowlistedHost('http://127.0.0.1.nip.io/', ['127.0.0.1'])).toBe(false);
  });

  test('SECURITY: a hostname URL never takes the direct path even if the hostname is literally allowlisted', () => {
    // A hand-edited settings.json could add a bare hostname. Only fixed addresses (IP/localhost) are
    // direct-eligible; a hostname resolves at connect time with no pinning → must fall through to safeFetch.
    expect(isAllowlistedHost('http://myserver.local/', ['myserver.local'])).toBe(false);
    expect(isAllowlistedHost('http://internal.corp:8080/', ['internal.corp:8080'])).toBe(false);
  });

  test('case + trailing-dot normalization', () => {
    expect(isAllowlistedHost('http://LOCALHOST./', ['localhost'])).toBe(true);
    expect(isAllowlistedHost('http://localhost/', ['LocalHost'])).toBe(true);
  });

  test('unparseable URL fails closed', () => {
    expect(isAllowlistedHost('not a url', ['localhost'])).toBe(false);
  });

  test('parseAllowlistEntry shapes', () => {
    expect(parseAllowlistEntry('localhost')).toEqual({ host: 'localhost' });
    expect(parseAllowlistEntry('localhost:11434')).toEqual({ host: 'localhost', port: '11434' });
    expect(parseAllowlistEntry('[::1]')).toEqual({ host: '::1', port: undefined });
    expect(parseAllowlistEntry('[fd00::1]:8080')).toEqual({ host: 'fd00::1', port: '8080' });
    expect(parseAllowlistEntry('  ')).toBeNull();
  });

  test('SECURITY: a non-http(s) scheme never takes the direct path (file:// local-file-read guard)', () => {
    // The direct path skips safeFetch, which is the only layer that enforces http/https. A file:// URL to
    // an allowlisted IP would otherwise be an arbitrary local-file read, so it must fail closed.
    expect(isAllowlistedHost('file://127.0.0.1/etc/passwd', ['127.0.0.1'])).toBe(false);
    expect(isAllowlistedHost('file://[::1]/etc/passwd', ['::1'])).toBe(false);
    expect(isAllowlistedHost('ftp://127.0.0.1/x', ['127.0.0.1'])).toBe(false);
    // http/https to the same allowlisted host still take the direct path.
    expect(isAllowlistedHost('http://127.0.0.1/x', ['127.0.0.1'])).toBe(true);
    expect(isAllowlistedHost('https://127.0.0.1/x', ['127.0.0.1'])).toBe(true);
  });

  test('non-canonical IP / IPv6 entries are canonicalized so they actually match their own server', () => {
    // Entry and URL host are compared in one WHATWG-canonical form; a non-canonical literal the user types
    // must still authorize requests to it (previously it was a silent dead entry).
    expect(isAllowlistedHost('http://[::1]/', ['[0:0:0:0:0:0:0:1]'])).toBe(true);
    expect(isAllowlistedHost('http://1.2.3.4/', ['01.02.03.04'])).toBe(true);
  });

  test('parseAllowlistEntry canonicalizes hosts and rejects invalid addresses', () => {
    expect(parseAllowlistEntry('01.02.03.04')).toEqual({ host: '1.2.3.4' });
    expect(parseAllowlistEntry('[0:0:0:0:0:0:0:1]')).toEqual({ host: '::1' });
    expect(parseAllowlistEntry('[0:0:0:0:0:0:0:1]:8080')).toEqual({ host: '::1', port: '8080' });
    expect(parseAllowlistEntry('999.999.999.999')).toBeNull();
  });
});
