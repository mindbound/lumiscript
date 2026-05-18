/**
 * ============================================================================
 * LUMISCRIPT — THEME API
 * ============================================================================
 * Wrapper over Spindle's theme-engine surface (`spindle.theme.*`). Requires
 * the `app_manipulation` permission (shared with `api.ui.dom.*`).
 *
 * Per-script attribution: multiple LumiScript scripts can apply themes
 * concurrently — this builder routes `apply`/`applyPalette`/`clear`
 * through the module-scope `theme-store`, which maintains per-script
 * slots + an apply-order list. The merged result is pushed to
 * `spindle.theme.{apply,applyPalette}` on every mutation. See
 * `theme-store.ts` for the merge semantics (per-key last-wins for
 * variables; most-recent-script-wins for palette).
 *
 * Pass-through methods (no per-script state):
 *   - `getCurrent`        — read user's base theme info
 *   - `extractColors`     — palette extraction from an `imageId`
 *   - `generateVariables` — generate the full variable map without applying
 *
 * Lifecycle:
 *   - `script-unregister` IPC → backend.ts's `teardownDisabledScript`
 *     calls `themeStore.clearByScriptId` + this builder's `flushAfterTeardown`
 *     to push the post-clear merged state.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  ThemeAPI,
  ThemeOverride,
  ThemePaletteConfig,
  ThemeVariablesConfig,
  ThemeInfo,
  ColorExtractionInfo,
} from '../../types/script.js';
import type {
  ThemeInfoDTO,
  ThemeOverrideDTO,
  ThemePaletteConfigDTO,
  ThemeVariablesConfigDTO,
} from 'lumiverse-spindle-types';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import * as themeStore from '../theme-store.js';

export function buildThemeAPI(deps: APIBuildDeps): ThemeAPI {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;
  const scriptId = script.id;

  return {
    async apply(overrides: ThemeOverride) {
      assertPerm('app_manipulation', hasPerm, script.name);
      themeStore.setVariables(scriptId, overrides);
      await pushMergedVariables(uid);
    },

    async applyPalette(palette: ThemePaletteConfig | null) {
      assertPerm('app_manipulation', hasPerm, script.name);
      themeStore.setPalette(scriptId, palette);
      await pushActivePalette(uid);
    },

    async clear() {
      assertPerm('app_manipulation', hasPerm, script.name);
      const had = themeStore.clearByScriptId(scriptId);
      if (!had) return;
      // v1.0.0-rc.5 — when the store is now fully empty (this was the
      // last script contributing anything), call `spindle.theme.clear`
      // directly: a single IPC that clears the host's entire override
      // slot AND threads `userId` through the IPC envelope. Calling
      // `spindle.theme.apply({})` here instead would fail on installs
      // where the host can't auto-resolve `userId` from extension
      // scope, because the worker-runtime's `spindle.theme.apply`
      // signature doesn't accept (and so doesn't thread) `userId`.
      //
      // When OTHER scripts still have contributions, push the merged
      // result via the normal pair. This path is unreachable when
      // userId-threading is broken host-side AND multiple scripts
      // contribute via `apply` (rare combination — would need both an
      // operator-scoped LumiScript install AND multi-script themes).
      // If real-world usage hits that gap, the fix is upstream in
      // worker-runtime (adding userId threading to spindle.theme.apply).
      if (themeStore.isEmpty()) {
        await withMacroRaceRetry('theme.clear', () => spindle.theme.clear(uid));
      } else {
        await pushMergedVariables(uid);
        await pushActivePalette(uid);
      }
    },

    async getCurrent() {
      assertPerm('app_manipulation', hasPerm, script.name);
      const dto = await spindle.theme.getCurrent(uid);
      return mapThemeInfo(dto);
    },

    async extractColors(imageId: string) {
      assertPerm('app_manipulation', hasPerm, script.name);
      const result = await spindle.theme.extractColors(imageId, uid);
      // `ColorExtractionResult` is structurally identical to `ColorExtractionInfo`
      // (camelCase throughout, no DTO translation needed). The cast lives at
      // the boundary because TS treats the two interfaces as distinct types
      // even when shape-compatible.
      return result as ColorExtractionInfo;
    },

    async generateVariables(config: ThemeVariablesConfig) {
      assertPerm('app_manipulation', hasPerm, script.name);
      // `ThemeVariablesConfig` ⇄ `ThemeVariablesConfigDTO` are structurally
      // identical. Same cast-at-the-boundary rationale.
      return spindle.theme.generateVariables(config as ThemeVariablesConfigDTO);
    },
  };
}

// ─── DTO translation ────────────────────────────────────────────────────────

function mapThemeInfo(dto: ThemeInfoDTO): ThemeInfo {
  return {
    id:             dto.id,
    name:           dto.name,
    mode:           dto.mode,
    accent:         dto.accent,
    enableGlass:    dto.enableGlass,
    radiusScale:    dto.radiusScale,
    fontScale:      dto.fontScale,
    uiScale:        dto.uiScale,
    characterAware: dto.characterAware,
  };
}

// ─── Host non-committing-macro-resolve race guard ──────────────────────────

/**
 * Wrap a mutating `spindle.theme.*` call so the host's non-committing-
 * macro-resolution race becomes invisible to user scripts.
 *
 * Background: the host's worker-runtime maintains a module-scope
 * `macroInvocationStack`. While a macro is being resolved with
 * `commit: false` (typical for prompt previews + chat-title regen +
 * any other "what would this look like?" path), `assertMutationAllowed`
 * throws on every mutating spindle call from the same worker —
 * `theme.apply / applyPalette / clear`, `registerMacro`, etc. The race
 * window is short (a single async macro handler completing) but happens
 * to overlap chat-open transitions, which is exactly when theme scripts
 * triggered by `CHAT_SWITCHED` try to apply.
 *
 * The host gate is correct in spirit (mutations during commit:false
 * previews would leak into permanent state); the issue is that
 * `macroInvocationStack` isn't scoped to the macro's continuation chain
 * (would need `AsyncLocalStorage`), so concurrent unrelated mutations
 * fail too. A proper fix is upstream in worker-runtime. Until then,
 * brief exponential-backoff retry covers the typical sub-200ms macro
 * window.
 *
 * Scope: only the specific error-message-match retries. All other
 * errors propagate immediately so genuine failures aren't masked.
 *
 * Caught during v1.0.0-rc.5 manual testing — `char-avatar-theme` script
 * intermittently failed with `applyPalette() is not allowed during
 * non-committing macro resolution` on chat-open.
 */
const MACRO_RACE_BASE_DELAY_MS = 15;
const MACRO_RACE_MAX_ATTEMPTS  = 5;

async function withMacroRaceRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= MACRO_RACE_MAX_ATTEMPTS; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('non-committing macro resolution')) {
        throw err;
      }
      lastErr = err;
      // 15, 30, 60, 120, 240 ms — total max ~465 ms before the final
      // throw. Comfortably wider than the typical preview-macro window.
      const delayMs = MACRO_RACE_BASE_DELAY_MS * Math.pow(2, attempt - 1);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  spindle.log.warn(
    `[lumiscript] ${label}: persistent host-macro-resolution race after ${MACRO_RACE_MAX_ATTEMPTS} attempts; surfacing to caller`,
  );
  throw lastErr;
}

// ─── Merge + push helpers ──────────────────────────────────────────────────

/**
 * Recompute + push the merged variables override. The host treats an
 * empty `{}` override as "clear my variables slot" — appropriate when
 * the last script that had variables has just cleared, leaving no
 * contributors. The palette slot is untouched by this path.
 *
 * `uid` is threaded through as the second argument so the host's
 * `resolveEffectiveUserId(userId)` succeeds on operator-scoped installs
 * (where it can't auto-resolve from scope). The matching signature
 * landed in `lumiverse-spindle-types` 0.4.75; the LumiScript dep already
 * targets `^0.4.75` so no cast is needed here.
 */
async function pushMergedVariables(uid: string | undefined): Promise<void> {
  const merged = themeStore.computeMergedVariables();
  await withMacroRaceRetry('theme.apply', () =>
    spindle.theme.apply(merged as ThemeOverrideDTO, uid),
  );
}

/**
 * Recompute + push the active palette. Most-recent-script-wins; `null`
 * is the explicit "clear the palette slot" call — passed through to
 * spindle which restores the user's base palette.
 */
async function pushActivePalette(uid: string | undefined): Promise<void> {
  const active = themeStore.computeActivePalette();
  await withMacroRaceRetry('theme.applyPalette', () =>
    spindle.theme.applyPalette(active as ThemePaletteConfigDTO | null, uid),
  );
}

// ─── Teardown helper for backend.ts ────────────────────────────────────────

/**
 * Called from `teardownDisabledScript` in `backend.ts` when a script is
 * disabled / deleted. Drops the script's theme state from the store and
 * pushes the post-clear merged result to spindle so any in-DOM CSS
 * variables the script was contributing get removed live.
 *
 * Fire-and-forget at the teardown call site — the async push shouldn't
 * block script-disable. Errors during the push log + drop (spindle.log
 * sees them); the next per-script `apply`/`clear` will reconverge.
 *
 * `userId` must be threaded from backend.ts's `activeUserId`: on
 * operator-scoped installs the host's `resolveEffectiveUserId(undefined)`
 * returns empty, which causes `spindle.theme.clear` (and applyPalette) to
 * reject with "userId is required for operator-scoped extensions" and
 * skip emitting the live FE-update event — the host's themeOverrides
 * slot stays populated and the user only sees the revert on the next
 * extension reload. v1.0.0-rc.5 manual testing caught this when
 * disabling `char-avatar-theme` left the avatar-derived palette stuck
 * on screen until FE refresh.
 */
export async function flushThemeOnTeardown(scriptId: string, userId: string | null | undefined): Promise<void> {
  const had = themeStore.clearByScriptId(scriptId);
  if (!had) return;
  const uid = userId ?? undefined;
  // Same shape as `clear()` above — when the store is fully empty
  // post-teardown, call `spindle.theme.clear()` directly to avoid the
  // `spindle.theme.apply({})` userId-threading gap.
  if (themeStore.isEmpty()) {
    await withMacroRaceRetry('theme.clear', () => spindle.theme.clear(uid));
  } else {
    await pushMergedVariables(uid);
    await pushActivePalette(uid);
  }
}
