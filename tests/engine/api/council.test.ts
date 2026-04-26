/**
 * Covers the `api.council.*` read-only namespace introduced in v0.24.2.
 *
 * Concerns at this layer:
 *  - Pass-through of `CouncilSettings` and `CouncilMemberContext[]` (verbatim,
 *    no DTO transform — types are already camelCase upstream).
 *  - DTO → LumiaItem mapping for `getAvailableLumiaItems` (snake_case to
 *    camelCase: pack_id, avatar_url, author_name, gender_identity, sort_order,
 *    created_at, updated_at).
 *  - userId pass-through for operator-scoped extensions.
 *  - No permission gating — Council read access is free-tier per host docs.
 */

import { describe, test, expect } from 'bun:test';
import { buildCouncilAPI } from '../../../src/engine/api/council.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  mockSpindle = (globalThis as any).spindle;
  return buildCouncilAPI(createTestDeps(overrides));
}

// ─── getSettings ─────────────────────────────────────────────────────────────

describe('getSettings', () => {
  test('returns the upstream CouncilSettings verbatim (camelCase pass-through)', async () => {
    const api = buildApi();
    const settings = await api.getSettings();
    // Mock returns the default-shaped object — verify the camelCase fields
    // surface unchanged.
    expect(settings.councilMode).toBe(false);
    expect(settings.members).toEqual([]);
    expect(settings.toolsSettings.mode).toBe('sidecar');
    expect(settings.toolsSettings.timeoutMs).toBe(30000);
  });

  test('does not require any permission (free-tier surface)', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getSettings()).resolves.toBeDefined();
  });

  test('forwards userId from deps to spindle.council.getSettings', async () => {
    const api = buildApi({ userId: 'user-uuid-42' });
    await api.getSettings();
    const call = mockSpindle.council.getSettings.mock.calls[0];
    expect(call[0]).toEqual({ userId: 'user-uuid-42' });
  });

  test('forwards undefined when userId is null/undefined in deps', async () => {
    const api = buildApi({ userId: null });
    await api.getSettings();
    const call = mockSpindle.council.getSettings.mock.calls[0];
    expect(call[0]).toEqual({ userId: undefined });
  });
});

// ─── getMembers ──────────────────────────────────────────────────────────────

describe('getMembers', () => {
  test('returns the upstream CouncilMemberContext array verbatim', async () => {
    const memberContext = {
      memberId: 'mem-1',
      itemId: 'item-1',
      packId: 'pack-1',
      packName: 'Demo Pack',
      name: 'Plotmaster',
      role: 'Plot Enforcer',
      chance: 75,
      avatarUrl: '/api/v1/images/avatar-1',
      definition: 'Tall, wears a hat.',
      personality: 'Stern but fair.',
      behavior: 'Pushes back on plot stalls.',
      genderIdentity: 0 as const,
    };
    mockSpindle = (globalThis as any).spindle;
    mockSpindle.council.getMembers.mockReturnValueOnce(
      Promise.resolve([memberContext]),
    );
    const api = buildApi();
    const members = await api.getMembers();
    expect(members).toEqual([memberContext]);
    expect(members[0]!.role).toBe('Plot Enforcer');
    expect(members[0]!.avatarUrl).toBe('/api/v1/images/avatar-1');
  });

  test('returns an empty array when no members are assigned', async () => {
    const api = buildApi();
    expect(await api.getMembers()).toEqual([]);
  });

  test('forwards userId for operator-scoped extensions', async () => {
    const api = buildApi({ userId: 'user-uuid-99' });
    await api.getMembers();
    const call = mockSpindle.council.getMembers.mock.calls[0];
    expect(call[0]).toEqual({ userId: 'user-uuid-99' });
  });
});

// ─── getAvailableLumiaItems (DTO mapping) ───────────────────────────────────

describe('getAvailableLumiaItems', () => {
  /** Minimal LumiaItemDTO from the upstream Spindle API (snake_case). */
  const itemDTO = {
    id: 'item-1',
    pack_id: 'pack-1',
    name: 'Plotmaster',
    avatar_url: '/api/v1/images/avatar-1',
    author_name: 'Pack Author',
    definition: 'Tall, wears a hat.',
    personality: 'Stern but fair.',
    behavior: 'Pushes back on plot stalls.',
    gender_identity: 0 as const,
    version: '1.0.0',
    sort_order: 1,
    created_at: 1_700_000_000,
    updated_at: 1_700_000_500,
  };

  test('maps snake_case DTO fields to camelCase LumiaItem', async () => {
    mockSpindle = (globalThis as any).spindle;
    mockSpindle.council.getAvailableLumiaItems.mockReturnValueOnce(
      Promise.resolve([itemDTO]),
    );
    const api = buildApi();
    const items = await api.getAvailableLumiaItems();
    expect(items).toHaveLength(1);
    const item = items[0]!;
    // camelCase mappings — verify each renamed field
    expect(item.id).toBe('item-1');
    expect(item.packId).toBe('pack-1');
    expect(item.avatarUrl).toBe('/api/v1/images/avatar-1');
    expect(item.authorName).toBe('Pack Author');
    expect(item.genderIdentity).toBe(0);
    expect(item.sortOrder).toBe(1);
    expect(item.createdAt).toBe(1_700_000_000);
    expect(item.updatedAt).toBe(1_700_000_500);
    // Pass-through fields — verify they're unchanged
    expect(item.name).toBe('Plotmaster');
    expect(item.definition).toBe('Tall, wears a hat.');
    expect(item.personality).toBe('Stern but fair.');
    expect(item.behavior).toBe('Pushes back on plot stalls.');
    expect(item.version).toBe('1.0.0');
    // snake_case originals must not leak into the LS-shaped result
    expect((item as any).pack_id).toBeUndefined();
    expect((item as any).avatar_url).toBeUndefined();
    expect((item as any).gender_identity).toBeUndefined();
  });

  test('preserves null avatar_url through the mapping', async () => {
    mockSpindle = (globalThis as any).spindle;
    mockSpindle.council.getAvailableLumiaItems.mockReturnValueOnce(
      Promise.resolve([{ ...itemDTO, avatar_url: null }]),
    );
    const api = buildApi();
    const items = await api.getAvailableLumiaItems();
    expect(items[0]!.avatarUrl).toBeNull();
  });

  test('returns an empty array when the user has no installed items', async () => {
    const api = buildApi();
    expect(await api.getAvailableLumiaItems()).toEqual([]);
  });

  test('forwards userId for operator-scoped extensions', async () => {
    const api = buildApi({ userId: 'user-uuid-7' });
    await api.getAvailableLumiaItems();
    const call = mockSpindle.council.getAvailableLumiaItems.mock.calls[0];
    expect(call[0]).toEqual({ userId: 'user-uuid-7' });
  });
});
