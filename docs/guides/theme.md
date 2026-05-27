# Theming the host UI

`api.theme.*` lets your script override Lumiverse's CSS variables — the `--lumiverse-*` token set that controls accent color, backgrounds, text, borders, glass effects, typography, and spacing. Use it to recolor the app for a specific character / chat, derive a coherent palette from an image, or push fine-grained CSS adjustments on top of the user's current theme.

The surface is six methods covering three modes of operation:

- **`apply(overrides)`** — raw CSS variable overrides, with optional light/dark mode-keyed variants.
- **`applyPalette({ accent })`** — give the host one accent color, get a derived ~80-variable coherent theme.
- **`clear()`** — drop this script's contributions.
- **`getCurrent()`** — read the user's base theme (no extension overrides).
- **`extractColors(imageId)`** — extract a palette from a stored image; pairs with `applyPalette`.
- **`generateVariables(config)`** — produce the ~80-variable set inert (no apply), useful for previewing or batching.

All six require the `app_manipulation` permission. They throw `Error: PERMISSION_DENIED:app_manipulation — grant this permission to use this API` when the permission isn't granted.

## The big idea

Lumiverse's UI is driven by a set of CSS custom properties (`--lumiverse-accent`, `--lumiverse-bg`, `--lumiverse-text`, etc.). The host's theme engine populates these from the user's chosen palette + mode (light/dark). `api.theme.*` lets your script push a *layer* of overrides on top — and the host re-applies them whenever the user's theme changes, so your overrides survive theme switches.

Multiple scripts can theme concurrently. The store does per-key last-applied-wins for individual variables and most-recent-wins for palettes. Two scripts overriding the same variable cleanly resolve in favor of whoever ran most recently; two scripts both applying palettes pick the most recent one and discard the older one. This means you don't have to coordinate across scripts that all happen to write `--lumiverse-accent` — the merge is automatic.

Cleanup is automatic too: when your script is disabled or deleted, the host walks its contributions out and re-derives the merged result.

## Quick start

Recolor the app to match the active character. The simplest path is `applyPalette` with an accent color derived from the character's avatar:

```js
// @triggers CHAT_SWITCHED
// @description Recolor Lumiverse to match the active character's avatar.

const chat = await api.chats.getActive();
if (!chat?.characterId) return;

const character = await api.characters.get(chat.characterId);
if (!character?.imageId) return;

// Extract a palette from the avatar.
const palette = await api.theme.extractColors(character.imageId);

// Apply as the script's accent — the host derives ~80 variables coherently.
await api.theme.applyPalette({ accent: palette.dominantHsl });
```

When the user switches chats, `CHAT_SWITCHED` fires, the script recomputes the palette for the new character, and the app recolors. When the script is disabled, the contribution is cleared automatically.

## Surface

```ts
interface ThemeAPI {
  apply(overrides: ThemeOverride):              Promise<void>;
  applyPalette(palette: ThemePaletteConfig | null): Promise<void>;
  clear():                                       Promise<void>;
  getCurrent():                                  Promise<ThemeInfo>;
  extractColors(imageId: string):                Promise<ColorExtractionInfo>;
  generateVariables(config: ThemeVariablesConfig): Promise<Record<string, string>>;
}
```

All async; all require `app_manipulation`. The mutating methods (`apply`, `applyPalette`, `clear`) wrap a transparent retry against the host's macro-resolution race (see [Macro-race resilience](#macro-race-resilience) below).

### `apply(overrides)`

Apply raw CSS variable overrides. The overrides are scoped to your script; per-key last-applied-wins relative to other scripts' contributions.

```ts
interface ThemeOverride {
  variables?:        Record<string, string>;        // Mode-agnostic — always applied.
  variablesByMode?: {
    dark?:   Record<string, string>;                 // Applied when user's mode is dark.
    light?:  Record<string, string>;                 // Applied when user's mode is light.
  };
}
```

```js
await api.theme.apply({
  variables: {
    '--lumiverse-border-radius': '12px',
    '--lumiverse-transition-fast': '120ms',
  },
  variablesByMode: {
    dark:  { '--lumiverse-bg': '#0f0a1e' },
    light: { '--lumiverse-bg': '#fbf7ff' },
  },
});
```

The `variables` and `variablesByMode` slots compose: keys in both are merged, with mode-specific values overriding mode-agnostic ones at apply time. When the user switches mode, the host re-evaluates and pushes the right values without your script needing to react.

Variable names follow `--lumiverse-*`. There's no exhaustive list shipped with LumiScript — the canonical set lives upstream in `lumiverse-spindle-types`'s `ThemeOverrideDTO`. To discover the full set at runtime, call `generateVariables(...)` and inspect its result (see below).

### `applyPalette(palette)`

Give the host an accent color; receive a coherent ~80-variable theme derived from it. Pass `null` to clear this script's palette contribution (variables stay if you applied any).

```ts
interface ThemePaletteConfig { accent: ColorHSL; }
interface ColorHSL { h: number; s: number; l: number; }  // h: 0-360, s/l: 0-100
```

```js
// Soft purple accent:
await api.theme.applyPalette({ accent: { h: 270, s: 70, l: 60 } });

// Drop this script's palette but keep its `apply()` variables:
await api.theme.applyPalette(null);
```

The accent drives every coordinated color the host generates — backgrounds, borders, hover/focus states, status colors, glass tints — so a single `applyPalette` produces a *coherent* recolor rather than the patchy result you'd get by overriding individual variables yourself.

**Palettes don't merge.** If two scripts call `applyPalette`, only the most recent one's accent is active. (Per-script variables from `apply` still merge cleanly under whichever palette is current.)

### `clear()`

Drop both `apply` variables and `applyPalette` palettes contributed by *this script*. Other scripts' contributions are unaffected. Idempotent.

```js
await api.theme.clear();
```

Mostly useful from in-script commands ("revert theme" button) and from cleanup paths where your script changes mode without disable. Script-disable / -delete clears automatically — you don't need to call `clear()` in a teardown handler.

### `getCurrent()`

Read the user's current *base* theme. Returns the host's theme state, without any script overrides folded in.

```ts
interface ThemeInfo {
  id:              string;
  name:            string;
  mode:            'light' | 'dark';
  accent:          ColorHSL;
  enableGlass:     boolean;
  radiusScale:     number;
  fontScale:       number;
  uiScale:         number;
  characterAware:  boolean;
}
```

```js
const theme = await api.theme.getCurrent();
console.log(`User's accent: hsl(${theme.accent.h}, ${theme.accent.s}%, ${theme.accent.l}%) (${theme.mode} mode)`);
```

Useful for deriving overrides that stay tonally consistent with the user's choice — e.g., bumping the accent's lightness slightly without changing its hue:

```js
const current = await api.theme.getCurrent();
await api.theme.applyPalette({
  accent: { ...current.accent, l: Math.min(100, current.accent.l + 10) },
});
```

### `extractColors(imageId)`

Pull a palette from an image stored in Lumiverse's image table. Pairs with `applyPalette` via the `dominantHsl` field.

```ts
interface ColorExtractionInfo {
  dominant:    ColorRGB;                              // Most-dominant color overall.
  regions:     {                                      // Sampled by image region.
    top:    ColorRGB;
    center: ColorRGB;
    bottom: ColorRGB;
    left:   ColorRGB;
    right:  ColorRGB;
  };
  flatness:    {                                      // Color-uniformity per region (0–1).
    top:    number;
    center: number;
    bottom: number;
    left:   number;
    right:  number;
    full:   number;
  };
  average:     ColorRGB;
  isLight:     boolean;                               // Convenience: dominant luminance > 152 on 0-255 scale (≈ 0.596 normalized).
  dominantHsl: ColorHSL;                              // Same color as `dominant`, HSL — pass to applyPalette.
}
```

```js
const palette = await api.theme.extractColors(imageId);
await api.theme.applyPalette({ accent: palette.dominantHsl });
```

`imageId` is the canonical image-table ID — what `api.images.upload(...)` returns, what `character.imageId` exposes, what `api.imageGen.generate(...)` puts in its result. Don't pass file paths or URLs.

The `regions` and `flatness` fields are there for more deliberate palette construction — e.g., picking the *bottom* region's dominant color when the top is a mostly-flat sky or background:

```js
const palette = await api.theme.extractColors(imageId);
const accent  = palette.flatness.top > 0.8           // Top is flat (sky/wall)?
  ? rgbToHsl(palette.regions.bottom)                  // Use bottom's color instead.
  : palette.dominantHsl;
await api.theme.applyPalette({ accent });
```

(You'd need to write the `rgbToHsl` helper yourself; the API hands you RGB for regions and HSL only for `dominantHsl`.)

### `generateVariables(config)`

Produce the ~80-variable set without applying it. Useful for previewing palettes, batching multiple derivations, or seeing the full variable list.

```ts
interface ThemeVariablesConfig {
  accent:        ColorHSL;
  mode:          'light' | 'dark';
  enableGlass?:  boolean;
  radiusScale?:  number;
  fontScale?:    number;
  uiScale?:      number;
  baseColors?:   Record<string, string>;              // Optional override of host's base palette anchors (CSS color strings, NOT ColorHSL).
  statusColors?: Record<string, string>;              // Optional override of status/error/warning anchors (CSS color strings, NOT ColorHSL).
}
```

Returns a `Record<string, string>` mapping CSS var names to values. Pass it directly into `apply({ variables: ... })` to actually apply, or hold onto it for preview / comparison purposes.

```js
// Preview what a palette would look like, without committing:
const vars = await api.theme.generateVariables({
  accent: { h: 200, s: 70, l: 55 },
  mode:   'dark',
});

renderPreviewSwatches(vars);                          // Your UI's preview code.

// User clicks "apply" — now actually apply:
await api.theme.apply({ variables: vars });
```

This is also how to inspect the full variable list at runtime: call `generateVariables` once with any accent, log the keys.

## Per-script attribution

Multiple scripts can theme concurrently. The store applies these rules:

- **Variables** (from `apply`) merge per-key, last-applied-wins. If Script A sets `--lumiverse-border-radius: 12px` and Script B sets `--lumiverse-border-radius: 8px`, whichever applied most recently is active. The OTHER keys each script set remain present.
- **Palettes** (from `applyPalette`) are most-recent-script-wins overall. Only one accent palette is active at a time; later `applyPalette` calls replace earlier ones.
- **Mode-keyed variants** (`variablesByMode.dark`, `.light`) merge independently of each other and of mode-agnostic `variables`.

This is generally what you want: scripts that change unrelated aspects compose cleanly without coordination. Scripts that fight for the same variable just have last-write-wins semantics, which is unambiguous.

If you need *deterministic* coordination — "my script's accent should always win" — you'd need to re-apply on a frequent trigger (e.g., on every `MESSAGE_SENT`) so your write is the most-recent one when it matters. Cleaner: avoid the conflict by picking distinct overrides per script.

## Mode-keyed variants

When the user switches between light and dark mode, the host re-evaluates `variablesByMode` to push the right variant. You don't need to subscribe to a mode-changed event — the host handles it for you.

```js
await api.theme.apply({
  variables:       { '--lumiverse-border-radius': '12px' },          // Always.
  variablesByMode: {
    dark:  { '--lumiverse-bg': '#0f0a1e', '--lumiverse-text': '#e8e2f5' },
    light: { '--lumiverse-bg': '#fbf7ff', '--lumiverse-text': '#1a0f2e' },
  },
});
```

`variables` always applies. `variablesByMode.dark` overrides `variables` when the user is in dark mode (same for `.light`). If you only need to override values in one mode, leave the other empty:

```js
await api.theme.apply({
  variablesByMode: {
    dark: { '--lumiverse-accent-fg': '#fff' },                       // Only adjust dark mode.
  },
});
```

## Auto-cleanup on script disable

When your script is disabled or deleted, the host walks its contributions out and re-derives the merged result. You don't need to call `clear()` in a teardown path — it happens automatically as part of `flushThemeOnTeardown(scriptId, userId)` (`src/engine/api/theme.ts:246-259`).

This means scripts can apply themes confidently — there's no cleanup obligation. If you want to clear *mid-life* (e.g., a "revert to default" button in your UI), `clear()` is the explicit call.

## Macro-race resilience

The host has a known race where mutating `spindle.*` calls (including theme writes) throw if they fire while a macro is being resolved with `commit: false` (chat-title regeneration, prompt previews). LumiScript wraps the mutating theme methods (`apply`, `applyPalette`, `clear`) in a transparent retry helper: backoff at 15 / 30 / 60 / 120 / 240 ms, 5 attempts total.

In practice, your script never sees this. If you ever do — because all 5 retries failed — the call throws and you'll see a `... is not allowed during non-committing macro resolution` error from the underlying Spindle layer. That's rare and only happens during sustained macro-resolution storms (the most common trigger being `CHAT_SWITCHED` firing a chat-title regen). If you hit it consistently, defer the theme write to a non-cold-start trigger.

(Implementation: `src/engine/api/theme.ts:165-189`. The retry helper is `withMacroRaceRetry`.)

## Common pitfalls

- **Hex accent strings don't work — accent is HSL.** `api.theme.applyPalette({ accent: '#9370DB' })` is a type error. Convert to `{ h: 270, s: 60, l: 65 }` (or roll a hex-to-HSL helper).

- **`apply` variables don't compose with `applyPalette` derivations the way you'd expect.** If you `applyPalette({ accent: ... })` and then `apply({ variables: { '--lumiverse-bg': ... } })`, the palette's derived `--lumiverse-bg` is overridden by your apply. Good — that's the point. But the *other* derived variables (foreground, borders, glass tint) are still keyed to the palette's logic, which may or may not look right next to your overridden background. Either commit to fully-palette-driven theming, or fully variable-driven; mixing is fine for surgical tweaks but can break coherence at scale.

- **`extractColors` works on imageId only, not URLs or file paths.** The imageId comes from `api.images.upload(...)`, `character.imageId`, `api.imageGen.generate(...).imageId`, etc. If you have a URL, upload it first via `api.utils.http.get(url, { responseType: 'arraybuffer' })` → `api.images.upload(...)`.

- **`getCurrent` returns the BASE theme, not the merged result.** If you want to see what's *actually* applied (including your overrides and other scripts'), there's no public method to read the merged state. You can only know what you contributed (track it in `globalThis` or `api.scriptStorage`) and what the user's base is.

- **Palettes don't merge.** Two scripts applying `applyPalette` race for "most recent". If you need to coordinate, use `apply({ variables: { '--lumiverse-accent': ... } })` instead — variables merge per-key cleanly.

- **Theme writes during `CHAT_SWITCHED` may transiently fail.** The macro-race retry handles most cases, but pathological chat-open storms can exhaust the 5 retries. If your script does heavy theming on every chat-open, consider deferring the apply to a subsequent trigger or batching with `generateVariables` (read-only — no race) followed by `apply` slightly later.

- **`enableGlass: false` on the user's theme disables glass surfaces globally.** You can read it via `getCurrent().enableGlass`; respect it (don't push glass-specific variables when the user has glass disabled, or they'll get inconsistent surfaces).

## See also

- **In-app Reference, "API Functions → api.theme" section** — auto-generated method list.
- **[`concepts/permissions.md`](../concepts/permissions.md)** — the `app_manipulation` permission (also gates `api.ui.dom.*` and `api.ui.showAdvancedModal`).
- **`api.images.*` reference** — `imageId` provenance for `extractColors`.
- **`api.imageGen.*` reference** — generates images that produce imageIds usable with `extractColors`.
- **Lumiverse host `frontend/src/theme/variables.css`** — canonical source for the `--lumiverse-*` variable definitions (their default values and groupings).
