// Registers the ls:icons built-in factory on the QuickJS VM's __lsBuiltins map
// so script.require('ls:icons') works in-VM (parity with asyncfn). The factory
// ignores its api arg — it returns the frozen ICON_SVG record + pure helpers.
import { createIconsLibrary } from '../../src/engine/builtins/icons.js';

const g = globalThis as unknown as { __lsBuiltins?: Record<string, unknown> };
g.__lsBuiltins = g.__lsBuiltins ?? {};
g.__lsBuiltins['ls:icons'] = createIconsLibrary;
