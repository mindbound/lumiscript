/**
 * Scoped happy-dom registration for the handful of frontend tests that need a
 * real DOM (e.g. `dom-handler`). Call `useDOM()` once at the top of a test file
 * (or describe block); it registers happy-dom's `window` / `document` / etc. on
 * globalThis before the block and tears them down afterwards.
 *
 * Deliberately NOT wired into the global preload (`tests/_infra/setup.ts`):
 * happy-dom installs browser globals on globalThis, which would collide with the
 * sandbox-lockdown tests (`tests/script-runner/sandbox-escape.test.ts`) that
 * value-undefine globals to assert the lockdown. Scoping registration per-file
 * (register in beforeAll, unregister in afterAll) keeps the DOM strictly out of
 * every test that doesn't opt in, so the rest of the suite is unaffected.
 */
import { beforeAll, afterAll } from 'bun:test';
import { GlobalRegistrator } from '@happy-dom/global-registrator';

/** Opt this test file into a real DOM (scoped to the file's lifetime). */
export function useDOM(): void {
  beforeAll(() => {
    GlobalRegistrator.register();
  });
  afterAll(async () => {
    await GlobalRegistrator.unregister();
  });
}
