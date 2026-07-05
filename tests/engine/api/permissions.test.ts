import { describe, test, expect, beforeEach } from 'bun:test';
import { buildPermissionsAPI } from '../../../src/engine/api/permissions.js';

let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

describe('api.permissions', () => {
  test('getGranted passes the granted permission list through', async () => {
    mockSpindle.permissions.getGranted.mockReturnValueOnce(
      Promise.resolve(['chat_mutation', 'generation']),
    );
    const api = buildPermissionsAPI();
    expect(await api.getGranted()).toEqual(['chat_mutation', 'generation']);
  });

  test('has resolves the sync host check to a Promise', async () => {
    mockSpindle.permissions.has.mockReturnValueOnce(true);
    const api = buildPermissionsAPI();
    expect(await api.has('images')).toBe(true);
    expect(mockSpindle.permissions.has).toHaveBeenCalledWith('images');
  });

  test('has returns false for an un-granted permission', async () => {
    mockSpindle.permissions.has.mockReturnValueOnce(false);
    const api = buildPermissionsAPI();
    expect(await api.has('oauth')).toBe(false);
  });
});
