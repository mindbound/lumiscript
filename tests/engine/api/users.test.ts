import { describe, test, expect, beforeEach } from 'bun:test';
import { buildUsersAPI } from '../../../src/engine/api/users.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

describe('api.users — isVisible', () => {
  test('passes the boolean through', async () => {
    mockSpindle.users.isVisible.mockReturnValueOnce(Promise.resolve(false));
    const api = buildUsersAPI(createTestDeps());
    expect(await api.isVisible()).toBe(false);

    mockSpindle.users.isVisible.mockReturnValueOnce(Promise.resolve(true));
    expect(await api.isVisible()).toBe(true);
  });

  test('forwards the active userId to spindle.users.isVisible', async () => {
    mockSpindle.users.isVisible.mockReturnValueOnce(Promise.resolve(true));
    const api = buildUsersAPI(createTestDeps({ userId: 'user-7' }));
    await api.isVisible();
    expect(mockSpindle.users.isVisible.mock.calls[0][0]).toBe('user-7');
  });
});

describe('api.users — getRole', () => {
  test('passes the role through', async () => {
    mockSpindle.users.getRole.mockReturnValueOnce(Promise.resolve('admin'));
    const api = buildUsersAPI(createTestDeps());
    expect(await api.getRole()).toBe('admin');

    mockSpindle.users.getRole.mockReturnValueOnce(Promise.resolve('operator'));
    expect(await api.getRole()).toBe('operator');
  });

  test('forwards the active userId to spindle.users.getRole', async () => {
    mockSpindle.users.getRole.mockReturnValueOnce(Promise.resolve('user'));
    const api = buildUsersAPI(createTestDeps({ userId: 'user-7' }));
    await api.getRole();
    expect(mockSpindle.users.getRole.mock.calls[0][0]).toBe('user-7');
  });
});
