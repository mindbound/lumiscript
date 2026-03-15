/** Generate a UUID v4 (uses the Web Crypto API, available in both Bun and browser) */
export function generateUUID(): string {
  return crypto.randomUUID();
}

/**
 * Generate a short ID — 8 random hex chars.
 * Not cryptographically unique at scale, but sufficient for in-session IDs.
 */
export function generateShortId(): string {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 8);
}
