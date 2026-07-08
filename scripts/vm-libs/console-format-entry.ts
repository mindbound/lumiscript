// Registers the shared console-arg formatter on the QuickJS VM's globalThis so
// the in-VM console can format Map / Set / Error / Date / etc. with their type
// identity intact — parity with the asyncfn engine. Without it, the console
// shim's ctx.dump() flattens those built-ins to {} at the WASM boundary (their
// state lives in internal slots, not own-enumerable props), because the shared
// serializeConsoleArg is instanceof-based and never sees a real Map once dumped.
// Bundling the EXISTING formatter (rather than reimplementing it in the VM
// bootstrap string) keeps all three runtimes — asyncfn parent, child, QuickJS —
// in lockstep on one source of truth, and sidesteps the CSS/template backtick
// trap (the formatter's template literals are compiled here, not embedded in a
// host template literal).
import { serializeConsoleArg } from '../../src/engine/console-format.js';

const g = globalThis as unknown as { __lsFormatConsoleArg?: (a: unknown) => string };
g.__lsFormatConsoleArg = serializeConsoleArg;
