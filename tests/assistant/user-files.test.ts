/**
 * Eligibility rules for attachable user files (the "Lisa files" reserved
 * folder). These are the security boundary — they decide which userStorage
 * paths the picker lists and the agent reads — so the scoping (reserved root,
 * no traversal, extension allowlist) is exercised thoroughly here.
 */
import { describe, test, expect } from 'bun:test';
import {
  USER_FILES_ROOT,
  ALLOWED_FILE_EXTENSIONS,
  MAX_USER_FILE_BYTES,
  normalizeUserPath,
  fileExtension,
  isEligibleUserFile,
  toUserFilePath,
  userFileDisplayName,
  fenceLangForFile,
} from '../../src/assistant/user-files.js';

describe('constants', () => {
  test('reserved root has a trailing slash', () => {
    expect(USER_FILES_ROOT).toBe('userfiles/');
  });
  test('size ceiling is 256 KB', () => {
    expect(MAX_USER_FILE_BYTES).toBe(256 * 1024);
  });
  test('allowlist covers the common text types, not binaries', () => {
    expect(ALLOWED_FILE_EXTENSIONS).toContain('.md');
    expect(ALLOWED_FILE_EXTENSIONS).toContain('.txt');
    expect(ALLOWED_FILE_EXTENSIONS).toContain('.json');
    expect(ALLOWED_FILE_EXTENSIONS).toContain('.csv');
    expect(ALLOWED_FILE_EXTENSIONS).not.toContain('.exe');
    expect(ALLOWED_FILE_EXTENSIONS).not.toContain('.png');
  });
});

describe('normalizeUserPath', () => {
  test('converts native backslashes to forward slashes', () => {
    expect(normalizeUserPath('userfiles\\sub\\notes.md')).toBe('userfiles/sub/notes.md');
  });
  test('leaves forward-slash paths untouched', () => {
    expect(normalizeUserPath('userfiles/notes.md')).toBe('userfiles/notes.md');
  });
});

describe('fileExtension', () => {
  test('returns the lower-cased extension with the dot', () => {
    expect(fileExtension('userfiles/notes.MD')).toBe('.md');
    expect(fileExtension('a/b/data.JSON')).toBe('.json');
  });
  test('returns empty string when there is no extension', () => {
    expect(fileExtension('userfiles/README')).toBe('');
  });
  test('does not treat a leading-dot dotfile as an extension', () => {
    expect(fileExtension('userfiles/.gitignore')).toBe('');
  });
});

describe('isEligibleUserFile', () => {
  test('accepts allowed-extension files under the reserved root', () => {
    expect(isEligibleUserFile('userfiles/notes.md')).toBe(true);
    expect(isEligibleUserFile('userfiles/sub/doc.txt')).toBe(true);
    expect(isEligibleUserFile('userfiles/data.json')).toBe(true);
  });
  test('normalizes separators before checking', () => {
    expect(isEligibleUserFile('userfiles\\notes.md')).toBe(true);
  });
  test('rejects paths outside the reserved root — including LumiScript internals', () => {
    expect(isEligibleUserFile('notes.md')).toBe(false);
    expect(isEligibleUserFile('scripts.json')).toBe(false);
    expect(isEligibleUserFile('assistant/memory.json')).toBe(false);
    expect(isEligibleUserFile('assistant/threads/abc.json')).toBe(false);
    expect(isEligibleUserFile('variables/global.json')).toBe(false);
    expect(isEligibleUserFile('enclave/secret.json')).toBe(false);
  });
  test('rejects parent-directory traversal', () => {
    expect(isEligibleUserFile('userfiles/../scripts.json')).toBe(false);
    expect(isEligibleUserFile('userfiles/../../etc/passwd')).toBe(false);
  });
  test('rejects disallowed extensions even under the root', () => {
    expect(isEligibleUserFile('userfiles/app.exe')).toBe(false);
    expect(isEligibleUserFile('userfiles/photo.png')).toBe(false);
    expect(isEligibleUserFile('userfiles/noext')).toBe(false);
  });
  test('rejects the folder itself / directory-shaped paths', () => {
    expect(isEligibleUserFile('userfiles/')).toBe(false);
    expect(isEligibleUserFile('userfiles/sub/')).toBe(false);
  });
  test('rejects a path that merely starts with the root name but is a sibling', () => {
    // "userfilesX/..." must NOT match the "userfiles/" root.
    expect(isEligibleUserFile('userfilesX/notes.md')).toBe(false);
  });
});

describe('toUserFilePath', () => {
  test('prepends the reserved root to a bare name', () => {
    expect(toUserFilePath('notes.md')).toBe('userfiles/notes.md');
  });
  test('does not double the root when already present', () => {
    expect(toUserFilePath('userfiles/notes.md')).toBe('userfiles/notes.md');
  });
  test('strips a leading slash', () => {
    expect(toUserFilePath('/notes.md')).toBe('userfiles/notes.md');
  });
  test('normalizes backslashes', () => {
    expect(toUserFilePath('sub\\notes.md')).toBe('userfiles/sub/notes.md');
  });
});

describe('userFileDisplayName', () => {
  test('strips the reserved root for display', () => {
    expect(userFileDisplayName('userfiles/sub/doc.md')).toBe('sub/doc.md');
    expect(userFileDisplayName('userfiles/notes.md')).toBe('notes.md');
  });
  test('returns a non-root path normalized but unstripped', () => {
    expect(userFileDisplayName('elsewhere\\x.md')).toBe('elsewhere/x.md');
  });
});

describe('fenceLangForFile', () => {
  test('maps known extensions to a fence language', () => {
    expect(fenceLangForFile('userfiles/x.md')).toBe('md');
    expect(fenceLangForFile('userfiles/x.json')).toBe('json');
    expect(fenceLangForFile('userfiles/x.csv')).toBe('csv');
    expect(fenceLangForFile('userfiles/x.yaml')).toBe('yaml');
    expect(fenceLangForFile('userfiles/x.yml')).toBe('yaml');
    expect(fenceLangForFile('userfiles/x.js')).toBe('js');
    expect(fenceLangForFile('userfiles/x.ts')).toBe('ts');
  });
  test('returns empty string for plain text / unknown', () => {
    expect(fenceLangForFile('userfiles/x.txt')).toBe('');
    expect(fenceLangForFile('userfiles/x.log')).toBe('');
  });
});
