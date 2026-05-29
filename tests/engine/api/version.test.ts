import { describe, test, expect, beforeEach } from 'bun:test';
import { buildVersionAPI } from '../../../src/engine/api/version.js';

let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

describe('api.version', () => {
  test('getBackend passes the backend version string through', async () => {
    mockSpindle.version.getBackend.mockReturnValueOnce(Promise.resolve('1.2.3'));
    const api = buildVersionAPI();
    expect(await api.getBackend()).toBe('1.2.3');
  });

  test('getFrontend passes the frontend version string through', async () => {
    mockSpindle.version.getFrontend.mockReturnValueOnce(Promise.resolve('4.5.6'));
    const api = buildVersionAPI();
    expect(await api.getFrontend()).toBe('4.5.6');
  });
});
