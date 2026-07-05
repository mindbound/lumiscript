/**
 * CI-enforced bundle-size budget guard.
 *
 * Lives in `tests/` (not `bench/`) on purpose: `bunfig.toml` sets the test
 * `root = "./tests"`, so `bun test` — and therefore the `.github/workflows/ci.yml`
 * `bun test` step — only discovers test files under `tests/`. CI runs
 * `bun run build` before `bun test`, so `dist/*` is fresh at test time;
 * locally it checks whatever was last built.
 *
 * Budgets = the minified size at authoring (2026-06-19) + ~15-17% headroom,
 * because minified byte size is sensitive to the Bun version (CI pins `canary`
 * — caveat R5). A failure means a bundle grew unexpectedly: run
 * `bun build <entry> --minify --target <bun|browser> --analyze` to see what
 * landed, then either fix the regression or, if the growth is intentional
 * (a real feature), bump the BUDGETS entry with a note.
 *
 * Authoring sizes: backend 1,149,768 · frontend 1,668,162 · script-runner 597,243.
 */

import { test, expect } from 'bun:test';

const BUDGETS: Record<string, number> = {
  'dist/backend.js':       1_350_000,
  'dist/frontend.js':      1_900_000,
  // #11 P1 — the script-runner bundle now embeds the QuickJS-WASM singlefile
  // variant (@jitl/quickjs-singlefile-mjs-release-sync, ~1.39 MB of base64
  // WASM) for the opt-in `engineMode='quickjs'` isolate. The engine is lazily
  // instantiated (qjs-engine.ts:getContext), so the WASM only *compiles* on the
  // first quickjs run, but the base64 string rides in the bundle
  // unconditionally. Authoring size was 597,243; post-#11 it's ~1,966,389.
  // Bumped to ~1.97 MB + ~17% headroom. (Revisit if the engine is later
  // code-split out of the default-path bundle — see notes/sandbox-isolate-impl-plan.md.)
  // #11 P3 B — additionally embeds zod bundled as a VM-evaluable IIFE
  // (src/script-runner/generated/vm-zod-bundle.ts, ~262 KB) so `z` runs IN the
  // QuickJS isolate. This is a second copy of zod (the asyncfn path keeps the
  // module form); it collapses to one when asyncfn is retired in P9. Post-B size
  // ~2,327,867; bumped to ~2.7 MB + headroom. P3 C (in-VM Handlebars) will add more.
  'dist/script-runner.js': 2_700_000,
};

for (const [rel, max] of Object.entries(BUDGETS)) {
  test(`bundle size: ${rel} within budget`, () => {
    // Bun.file().size resolves relative to cwd (repo root under `bun test`).
    const bytes = Bun.file(rel).size;
    // A missing/unbuilt bundle reads as size 0 — fail loudly rather than
    // pass a false-green (0 <= budget).
    expect(bytes).toBeGreaterThan(0);
    if (bytes > max) {
      throw new Error(
        `${rel} is ${bytes} bytes (${(bytes / 1024).toFixed(0)} KB), over budget ` +
        `${max} (${(max / 1024).toFixed(0)} KB). Run the build with --analyze to see ` +
        `what grew, then fix the regression or intentionally bump BUDGETS in this file.`,
      );
    }
    expect(bytes).toBeLessThanOrEqual(max);
  });
}
