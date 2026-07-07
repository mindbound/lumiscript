// Registers the ls:components built-in factory on the QuickJS VM's __lsBuiltins
// map so script.require('ls:components') can invoke it in-VM (parity with the
// asyncfn engine, which resolves it through builtin-library-registry). The
// factory closes over api.ui.* surfaces that already return sync handles in-VM.
import { createComponentsLibrary } from '../../src/engine/builtins/components.js';

const g = globalThis as unknown as { __lsBuiltins?: Record<string, unknown> };
g.__lsBuiltins = g.__lsBuiltins ?? {};
g.__lsBuiltins['ls:components'] = createComponentsLibrary;
