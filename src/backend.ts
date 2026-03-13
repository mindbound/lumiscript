declare const spindle: import('lumiverse-spindle-types').SpindleAPI

// ─── LumiScript Backend ───────────────────────────────────────────────────
// Runs in an isolated Bun worker thread.
// DOM access is not available here — communicate with the frontend module
// via spindle.sendToFrontend() / spindle.onFrontendMessage().

// ─── Init ─────────────────────────────────────────────────────────────────

spindle.log.info('LumiScript starting...')

export {}
