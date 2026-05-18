/**
 * Parent-side coverage for `api.oauth.*`. Three methods, each gets a
 * forwarding test + a permission-gating test. The wrapper is pure
 * pass-through; the single-handler warning + guarded unsub logic lives
 * parent-side in `host-dispatcher.ts:case 'oauthCallback'` and is
 * covered separately in `tests/script-runner/e2e-oauth-callback.test.ts`.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildOAuthAPI } from '../../../src/engine/api/oauth.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildOAuthAPI(createTestDeps(overrides));
}

// ─── onCallback ─────────────────────────────────────────────────────────────

describe('onCallback', () => {
  test('forwards the handler to spindle.oauth.onCallback (sync — no await needed)', () => {
    const api = buildApi();
    const handler = async (_params: Record<string, string>) => undefined;
    api.onCallback(handler);

    expect(mockSpindle.oauth.onCallback).toHaveBeenCalledTimes(1);
    // Handler is passed by reference — the canonical doesn't wrap it for
    // in-process callers (the script-runner IPC path wraps separately).
    expect((mockSpindle.oauth.onCallback as any).mock.calls.at(-1)![0]).toBe(handler);
  });

  test('returns the unsubscribe function from spindle synchronously', () => {
    const api = buildApi();
    const unsub = api.onCallback(async () => undefined);
    expect(typeof unsub).toBe('function');
    expect(() => unsub()).not.toThrow();
  });

  test('throws PERMISSION_DENIED synchronously when oauth permission is missing', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.onCallback(async () => undefined)).toThrow('PERMISSION_DENIED');
  });
});

// ─── getCallbackUrl ─────────────────────────────────────────────────────────

describe('getCallbackUrl', () => {
  test('returns the callback URL path from spindle', async () => {
    const api = buildApi();
    const url = await api.getCallbackUrl();
    expect(url).toBe('/api/spindle-oauth/lumiscript/callback');
    expect(mockSpindle.oauth.getCallbackUrl).toHaveBeenCalledTimes(1);
  });

  test('throws PERMISSION_DENIED when oauth permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getCallbackUrl()).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── createState ────────────────────────────────────────────────────────────

describe('createState', () => {
  test('returns a CSRF state nonce from spindle', async () => {
    const api = buildApi();
    const state = await api.createState();
    expect(state).toBe('mock-state-nonce-abc123');
    expect(mockSpindle.oauth.createState).toHaveBeenCalledTimes(1);
  });

  test('throws PERMISSION_DENIED when oauth permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.createState()).rejects.toThrow('PERMISSION_DENIED');
  });
});
