/**
 * VM bundle guard (#11, P0). Post-build step on dist/script-runner.js, also
 * imported by the smoke test. Two jobs:
 *
 *  1. neutralizeNodeFsRequires — the QuickJS singlefile engine eagerly does
 *     `require("node:fs")` for emscripten's Node-env setup, but never USES fs in
 *     singlefile / embedded-wasm mode (proven: stubbing it to `{}` keeps the VM
 *     working). Replace that dead require with an empty module so the shipped
 *     bundle is GENUINELY fs-free — rather than relying on the host scanner
 *     happening to miss bun's renamed `require2(...)` form. `node:path` /
 *     `node:url` (also required by the glue) are left intact: not host-blocked.
 *
 *  2. findDangerousModuleHits — mirrors the host's DANGEROUS_BACKEND_CHECKS
 *     module regexes VERBATIM (src/spindle/manager.service.ts) so a bundle the
 *     host would reject at extension-load fails the BUILD here instead. Plus a
 *     stricter node:fs-only residual assertion (RESIDUAL_NODE_FS) that catches
 *     renamed-require forms the host regex misses — safe because the transform
 *     above removes the engine's only node:fs reference.
 *
 * Run directly: `bun scripts/vm-bundle-guard.ts [path]` (default dist/script-runner.js).
 */
import { readFileSync, writeFileSync } from 'node:fs';

/** require / require2 / __require / import(...) wrapping a node:fs[/promises] specifier. */
const NODE_FS_REQUIRE = /(?:[\w$]*require[\w$]*|import)\s*\(\s*(["'])node:fs(?:\/promises)?\1\s*\)/g;

export function neutralizeNodeFsRequires(code: string): string {
  return code.replace(NODE_FS_REQUIRE, '({})');
}

/** Verbatim mirror of the host's DANGEROUS_BACKEND_CHECKS module checks
 *  (src/spindle/manager.service.ts) — host-equivalent: no new false positives. */
const HOST_MODULE_CHECKS: ReadonlyArray<readonly [string, RegExp]> = [
  ['filesystem module access', /(?:from\s*["'`](?:node:)?fs(?:\/promises)?["'`]|require\s*\(\s*["'`](?:node:)?fs(?:\/promises)?["'`]\s*\)|import\s*\(\s*["'`](?:node:)?fs(?:\/promises)?["'`]\s*\))/],
  ['subprocess module access', /(?:from\s*["'`](?:node:)?child_process["'`]|require\s*\(\s*["'`](?:node:)?child_process["'`]\s*\)|import\s*\(\s*["'`](?:node:)?child_process["'`]\s*\))/],
  ['direct socket module access', /(?:from\s*["'`](?:node:)?(?:net|tls|dgram|http|https)["'`]|require\s*\(\s*["'`](?:node:)?(?:net|tls|dgram|http|https)["'`]\s*\)|import\s*\(\s*["'`](?:node:)?(?:net|tls|dgram|http|https)["'`]\s*\))/],
  ['worker or cluster module access', /(?:from\s*["'`](?:node:)?(?:worker_threads|cluster)["'`]|require\s*\(\s*["'`](?:node:)?(?:worker_threads|cluster)["'`]\s*\)|import\s*\(\s*["'`](?:node:)?(?:worker_threads|cluster)["'`]\s*\))/],
  ['direct SQLite module access', /(?:from\s*["'`](?:bun:sqlite|node:sqlite)["'`]|require\s*\(\s*["'`](?:bun:sqlite|node:sqlite)["'`]\s*\)|import\s*\(\s*["'`](?:bun:sqlite|node:sqlite)["'`]\s*\))/],
];

/** Stricter, node:fs-only: catches bundler-renamed require forms (require2/__require)
 *  the host's bare-`require(` regex misses. The transform's postcondition. */
const RESIDUAL_NODE_FS = /(?:[\w$]*require[\w$]*|import)\s*\(\s*["'`]node:fs(?:\/promises)?["'`]/;

export function findDangerousModuleHits(code: string): string[] {
  const hits = new Set<string>();
  for (const [label, re] of HOST_MODULE_CHECKS) if (re.test(code)) hits.add(label);
  return [...hits];
}

export function hasResidualNodeFs(code: string): boolean {
  return RESIDUAL_NODE_FS.test(code);
}

if (import.meta.main) {
  const path = process.argv[2] ?? 'dist/script-runner.js';
  const original = readFileSync(path, 'utf8');
  const neutralized = neutralizeNodeFsRequires(original);
  if (neutralized !== original) writeFileSync(path, neutralized);

  if (hasResidualNodeFs(neutralized)) {
    console.error(`[vm-bundle-guard] FAIL: ${path} still contains a node:fs require after neutralization (transform regex missed a form).`);
    process.exit(1);
  }
  const hits = findDangerousModuleHits(neutralized);
  if (hits.length > 0) {
    console.error(`[vm-bundle-guard] FAIL: ${path} has dangerous module access the host would reject at load: ${hits.join(', ')}`);
    process.exit(1);
  }
  console.log(`[vm-bundle-guard] OK: ${path} clean${neutralized !== original ? ' (node:fs neutralized)' : ''}.`);
}
