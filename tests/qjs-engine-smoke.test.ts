/**
 * #11 P0 smoke: the vendored QuickJS singlefile SYNC engine instantiates in
 * LS's own toolchain, and the vm-bundle-guard's neutralize/scan logic behaves.
 * (End-to-end "engine bundle → transform → scanner-clean" was proven manually
 * in the spike; here we lock the engine-loads check + the guard unit behavior.)
 */
import { test, expect, describe } from 'bun:test';
import variant from '@jitl/quickjs-singlefile-mjs-release-sync';
import { newQuickJSWASMModuleFromVariant } from 'quickjs-emscripten-core';
import { neutralizeNodeFsRequires, findDangerousModuleHits, hasResidualNodeFs } from '../scripts/vm-bundle-guard.js';

describe('QuickJS engine smoke (#11 P0)', () => {
  test('vendored singlefile SYNC variant instantiates + evaluates', async () => {
    const QuickJS = await newQuickJSWASMModuleFromVariant(variant);
    const ctx = QuickJS.newContext();
    expect(ctx.getNumber(ctx.unwrapResult(ctx.evalCode('1 + 2')))).toBe(3);
    ctx.dispose();
  });
});

describe('vm-bundle-guard (#11 P0)', () => {
  test('neutralizes node:fs requires (any require alias) to an empty module', () => {
    const out = neutralizeNodeFsRequires('var fs=require2("node:fs");var p=require("node:fs/promises");');
    expect(hasResidualNodeFs(out)).toBe(false);
    expect(out).toContain('({})');
    expect(out).not.toContain('node:fs');
  });

  test('leaves non-blocked node:path / node:url requires intact', () => {
    const code = 'var p=require2("node:path");var u=require2("node:url");';
    expect(neutralizeNodeFsRequires(code)).toBe(code);
  });

  test('flags dangerous module access host-equivalently; clean code is clean', () => {
    expect(findDangerousModuleHits('require("child_process")')).toContain('subprocess module access');
    expect(findDangerousModuleHits('import("node:net")')).toContain('direct socket module access');
    expect(findDangerousModuleHits('from "bun:sqlite"')).toContain('direct SQLite module access');
    expect(findDangerousModuleHits('const x = 1 + 2; const r = api.foo();')).toEqual([]);
  });

  test('host-equivalent scan does NOT flag a bundler-renamed require (the gap the transform fixes)', () => {
    // The host regex requires a bare `require(`; `require2(` slips past it — which is
    // exactly why we neutralize node:fs rather than rely on the scan catching it.
    expect(findDangerousModuleHits('require2("child_process")')).toEqual([]);
  });
});
