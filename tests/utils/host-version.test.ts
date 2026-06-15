/**
 * Covers `compareVersions` — the semver-like comparator used by the
 * host version check at LumiScript startup. Regressions here would
 * either suppress legitimate "update Lumiverse" warnings or nag users
 * on hosts that actually satisfy the minimum, both bad UX.
 *
 * `checkMinimumHostVersion` (the runtime wrapper) is covered against the mock
 * spindle: the no-minimum early-return, the host-lookup-failure swallow, and
 * the fires-toast-when-behind / silent-when-current branches.
 */

import { describe, test, expect } from 'bun:test';
import { compareVersions, checkMinimumHostVersion } from '../../src/utils/host-version.js';

describe('compareVersions — equal pairs', () => {
  test('same version returns 0', () => {
    expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
  });

  test('zero-padded shorter version equals fully-qualified', () => {
    expect(compareVersions('1.2', '1.2.0')).toBe(0);
    expect(compareVersions('1', '1.0.0')).toBe(0);
    expect(compareVersions('', '0.0.0')).toBe(0);
  });
});

describe('compareVersions — ordering', () => {
  test('returns negative when left is older', () => {
    expect(compareVersions('0.8.0', '0.9.0')).toBeLessThan(0);
    expect(compareVersions('1.0.0', '2.0.0')).toBeLessThan(0);
    expect(compareVersions('1.2.3', '1.2.4')).toBeLessThan(0);
  });

  test('returns positive when left is newer', () => {
    expect(compareVersions('0.9.0', '0.8.0')).toBeGreaterThan(0);
    expect(compareVersions('2.0.0', '1.9.9')).toBeGreaterThan(0);
    expect(compareVersions('1.2.4', '1.2.3')).toBeGreaterThan(0);
  });

  test('major dominates minor dominates patch', () => {
    // 2.0.0 > 1.99.99 — major wins.
    expect(compareVersions('2.0.0', '1.99.99')).toBeGreaterThan(0);
    // 1.2.0 > 1.1.99 — minor wins.
    expect(compareVersions('1.2.0', '1.1.99')).toBeGreaterThan(0);
  });
});

describe('compareVersions — prerelease + build metadata stripped', () => {
  test('prerelease tag is ignored', () => {
    // `-staging` / `-rc.1` should not influence the comparison.
    expect(compareVersions('0.9.0-staging', '0.9.0')).toBe(0);
    expect(compareVersions('0.9.0', '0.9.0-rc.1')).toBe(0);
  });

  test('build metadata is ignored', () => {
    expect(compareVersions('0.9.0+sha.abc', '0.9.0')).toBe(0);
    expect(compareVersions('0.9.0', '0.9.0+sha.def')).toBe(0);
  });

  test('both prerelease and build stripped together', () => {
    expect(compareVersions('0.9.0-staging+sha.abc', '0.9.0')).toBe(0);
  });

  test('ordering still works with prerelease tags present', () => {
    expect(compareVersions('0.8.0-staging', '0.9.0')).toBeLessThan(0);
    expect(compareVersions('0.9.1-rc.1', '0.9.0')).toBeGreaterThan(0);
  });
});

describe('compareVersions — unparseable segments', () => {
  test('returns 0 when a segment is non-numeric', () => {
    // "x" → NaN; we can't compare safely, so return 0 ("assume compatible").
    // This keeps the startup check from nagging users on oddly-formatted
    // version strings rather than falsely claiming they need to update.
    expect(compareVersions('1.x.3', '1.2.3')).toBe(0);
    expect(compareVersions('1.2.3', 'abc')).toBe(0);
  });
});

describe('checkMinimumHostVersion', () => {
  test('no manifest minimum → no host lookup, no toast', async () => {
    const spindle = (globalThis as any).spindle;
    // The mock manifest declares no `minimum_lumiverse_version` by default.
    await checkMinimumHostVersion();
    expect(spindle.version.getBackend).not.toHaveBeenCalled();
  });

  test('host below minimum → warning toast fires', async () => {
    const spindle = (globalThis as any).spindle;
    spindle.manifest.minimum_lumiverse_version = '2.0.0';
    spindle.version.getBackend.mockReturnValueOnce(Promise.resolve('1.0.0'));
    await checkMinimumHostVersion();
    expect(spindle.toast.warning).toHaveBeenCalled();
  });

  test('host meets minimum → no toast', async () => {
    const spindle = (globalThis as any).spindle;
    spindle.manifest.minimum_lumiverse_version = '1.0.0';
    spindle.version.getBackend.mockReturnValueOnce(Promise.resolve('1.5.0'));
    await checkMinimumHostVersion();
    expect(spindle.toast.warning).not.toHaveBeenCalled();
  });

  test('host lookup failure is swallowed (no toast)', async () => {
    const spindle = (globalThis as any).spindle;
    spindle.manifest.minimum_lumiverse_version = '2.0.0';
    spindle.version.getBackend.mockReturnValueOnce(Promise.reject(new Error('rpc down')));
    await checkMinimumHostVersion();
    expect(spindle.toast.warning).not.toHaveBeenCalled();
  });
});
