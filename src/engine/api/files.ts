/**
 * ============================================================================
 * LUMISCRIPT — FILES API
 * ============================================================================
 * Thin wrappers around spindle.userStorage that enforce allowDangerous.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { type APIBuildDeps, assertDangerous } from './shared.js';

export function buildFilesAPI(deps: APIBuildDeps): LumiScriptAPI['files'] {
  const { script } = deps;

  return {
    read:   (path)          => { assertDangerous(script); return spindle.userStorage.read(path); },
    write:  (path, content) => { assertDangerous(script); return spindle.userStorage.write(path, content); },
    delete: (path)          => { assertDangerous(script); return spindle.userStorage.delete(path); },
    exists: (path)          => { assertDangerous(script); return spindle.userStorage.exists(path); },
    list:   (prefix)        => { assertDangerous(script); return spindle.userStorage.list(prefix); },
  };
}
