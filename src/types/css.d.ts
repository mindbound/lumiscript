/**
 * Type declaration for CSS file imports.
 * Bun's bundler returns the file contents as a raw string when imported
 * with a default binding (import CSS from './file.css').
 * This declaration tells TypeScript to treat such imports as strings.
 */
declare module '*.css' {
  const content: string;
  export default content;
}
