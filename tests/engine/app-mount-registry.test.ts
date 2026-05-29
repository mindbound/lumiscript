import { describe, test, expect, beforeEach } from 'bun:test';
import {
  registerAppMount,
  getAppMount,
  countLiveAppMountsByScript,
  destroyAppMount,
  dropEntry,
  liveAppMountsByScript,
  clearByScript,
  __reset,
} from '../../src/engine/app-mount-registry.js';

beforeEach(() => __reset());

describe('app-mount-registry', () => {
  test('register + get round-trips the entry', () => {
    registerAppMount('m1', 'root-1', 'script-a', { position: 'app-overlay', className: 'x' });
    const e = getAppMount('m1');
    expect(e?.rootElementId).toBe('root-1');
    expect(e?.scriptId).toBe('script-a');
    expect(e?.options).toEqual({ position: 'app-overlay', className: 'x' });
    expect(e?.destroyed).toBe(false);
  });

  test('countLiveAppMountsByScript counts only live, owned mounts', () => {
    registerAppMount('m1', 'r1', 'script-a', {});
    registerAppMount('m2', 'r2', 'script-a', {});
    registerAppMount('m3', 'r3', 'script-b', {});
    expect(countLiveAppMountsByScript('script-a')).toBe(2);
    expect(countLiveAppMountsByScript('script-b')).toBe(1);
    destroyAppMount('m1');
    expect(countLiveAppMountsByScript('script-a')).toBe(1);
  });

  test('destroyAppMount flips the flag and is idempotent', () => {
    registerAppMount('m1', 'r1', 'script-a', {});
    expect(destroyAppMount('m1')).toBe(true);
    expect(getAppMount('m1')?.destroyed).toBe(true);
    expect(destroyAppMount('m1')).toBe(false);   // already destroyed
    expect(destroyAppMount('unknown')).toBe(false);
  });

  test('dropEntry removes a destroyed entry but not a live one', () => {
    registerAppMount('m1', 'r1', 'script-a', {});
    dropEntry('m1');                       // still live → no-op
    expect(getAppMount('m1')).toBeDefined();
    destroyAppMount('m1');
    dropEntry('m1');
    expect(getAppMount('m1')).toBeUndefined();
  });

  test('liveAppMountsByScript lists live ids; clearByScript drops all of a script', () => {
    registerAppMount('m1', 'r1', 'script-a', {});
    registerAppMount('m2', 'r2', 'script-a', {});
    registerAppMount('m3', 'r3', 'script-b', {});
    expect(liveAppMountsByScript('script-a').sort()).toEqual(['m1', 'm2']);
    clearByScript('script-a');
    expect(getAppMount('m1')).toBeUndefined();
    expect(getAppMount('m2')).toBeUndefined();
    expect(getAppMount('m3')).toBeDefined();   // other script untouched
  });
});
