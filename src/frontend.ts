import type { SpindleFrontendContext } from 'lumiverse-spindle-types'

// ─── LumiScript Frontend ──────────────────────────────────────────────────
// Runs in the browser via dynamic import.
// All HTML is sanitized through DOMPurify before injection.
// Communication with the backend worker goes through ctx.sendToBackend()
// and ctx.onBackendMessage().

export function setup(ctx: SpindleFrontendContext) {
  const cleanups: (() => void)[] = []

  // ─── Teardown ────────────────────────────────────────────────────────────

  return () => {
    for (const fn of cleanups) {
      try {
        fn()
      } catch {
        // ignore cleanup errors
      }
    }
    ctx.dom.cleanup()
  }
}
