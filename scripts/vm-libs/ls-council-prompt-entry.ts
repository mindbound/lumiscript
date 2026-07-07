// Registers the ls:council-prompt built-in factory on the QuickJS VM's
// __lsBuiltins map so script.require('ls:council-prompt') works in-VM (parity
// with asyncfn). The factory ignores its api arg — pure string builders.
import { createCouncilPromptLibrary } from '../../src/engine/builtins/council-prompt.js';

const g = globalThis as unknown as { __lsBuiltins?: Record<string, unknown> };
g.__lsBuiltins = g.__lsBuiltins ?? {};
g.__lsBuiltins['ls:council-prompt'] = createCouncilPromptLibrary;
