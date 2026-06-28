/**
 * #11 P2 — structured marshaling across Boundary #2 (the Bun child ↔ the QuickJS
 * VM). P1 crossed this boundary with naive JSON.stringify/parse, which silently
 * mangles Date / Map / Set / typed-arrays / BigInt and collapses undefined→null.
 * This module restores structured-clone-grade fidelity (mirroring Boundary #1,
 * the IPC channel, which uses Bun's advanced serialization) over the VM's string
 * channel, via a compact TAGGED-ENVELOPE "shadow" encoding.
 *
 * A *shadow* is always a plain JSON value (so it crosses the string channel):
 *   string | boolean | null | finite num → itself
 *   NaN / +Infinity / -Infinity / -0     → { $: 'f', v: 'nan'|'+inf'|'-inf'|'-0' }
 *   undefined                            → { $: 'u' }
 *   bigint                               → { $: 'n', v: <decimal string> }
 *   Date                                 → { $: 'd', v: <epoch ms> }
 *   RegExp                               → { $: 'r', s: source, f: flags }
 *   Map                                  → { $: 'm', v: [[encK, encV], …] }
 *   Set                                  → { $: 's', v: [encV, …] }
 *   ArrayBuffer / typed array / DataView → { $: 'b', k: <ctor name>, v: [byte,…] }
 *   Array                                → [ enc, … ]
 *   plain object WITHOUT own '$'         → { key: enc, … }            (pass-through)
 *   plain object WITH own '$'            → { $: 'o', v: { key: enc, … } }  (escaped)
 *
 * Unsupported → throw with a clear message: functions (callbacks land in P5),
 * symbols, and circular references (a later pass can add ref-ids; structured
 * clone supports cycles but they are vanishingly rare in api args/returns).
 *
 * ── CRITICAL INVARIANT ──────────────────────────────────────────────────────
 * The in-VM twin (`VM_MARSHAL_BOOTSTRAP`, a JS string evaluated inside the
 * QuickJS context to define globalThis.__lsEncode / __lsDecode) and the host
 * TS below MUST implement the IDENTICAL wire format. The round-trip parity
 * tests (tests/script-runner/qjs-engine-marshal.test.ts) drive BOTH directions
 * through the real bridge and fail on any drift. Edit the two in lockstep.
 *
 * Typed-array bytes are carried as a plain number array (memory order). This is
 * simple and dependency-free (no base64 codec needed inside QuickJS); a later
 * pass can switch to base64 if large-binary wire size becomes a concern. Bytes
 * are endian-preserving only across same-endian peers (LE everywhere relevant).
 */

const UNSUPPORTED = 'LumiScript QuickJS engine: unsupported value — ';

const TYPED_ARRAY_CTORS: Record<string, new (buf: ArrayBuffer) => ArrayBufferView> = {
  Int8Array, Uint8Array, Uint8ClampedArray,
  Int16Array, Uint16Array,
  Int32Array, Uint32Array,
  Float32Array, Float64Array,
  BigInt64Array, BigUint64Array,
  DataView,
};

/** Encode a host value to its JSON-serializable shadow. Throws on unsupported. */
export function marshalEncode(value: unknown): unknown {
  return encodeInner(value, new Set<object>());
}

function encodeInner(v: unknown, seen: Set<object>): unknown {
  if (v === null) return null;
  const t = typeof v;
  if (t === 'string' || t === 'boolean') return v;
  if (t === 'number') {
    // JSON.stringify turns NaN/±Infinity into null and drops -0's sign; tag them
    // so they survive the wire with structured-clone parity (H2).
    if (Number.isNaN(v as number)) return { $: 'f', v: 'nan' };
    if (v === Infinity) return { $: 'f', v: '+inf' };
    if (v === -Infinity) return { $: 'f', v: '-inf' };
    if (Object.is(v, -0)) return { $: 'f', v: '-0' };
    return v;
  }
  if (t === 'undefined') return { $: 'u' };
  if (t === 'bigint') return { $: 'n', v: (v as bigint).toString() };
  if (t === 'function') throw new Error(UNSUPPORTED + 'functions/callbacks are not yet marshaled (a later phase).');
  if (t === 'symbol') throw new Error(UNSUPPORTED + 'symbol.');

  const obj = v as object;
  if (v instanceof Date) return { $: 'd', v: (v as Date).getTime() };
  if (v instanceof RegExp) return { $: 'r', s: (v as RegExp).source, f: (v as RegExp).flags };
  if (seen.has(obj)) throw new Error(UNSUPPORTED + 'circular reference.');
  seen.add(obj);
  try {
    if (v instanceof Map) {
      const out: Array<[unknown, unknown]> = [];
      for (const [k, val] of v) out.push([encodeInner(k, seen), encodeInner(val, seen)]);
      return { $: 'm', v: out };
    }
    if (v instanceof Set) {
      const out: unknown[] = [];
      for (const val of v) out.push(encodeInner(val, seen));
      return { $: 's', v: out };
    }
    if (v instanceof ArrayBuffer) {
      return { $: 'b', k: 'ArrayBuffer', v: Array.from(new Uint8Array(v)) };
    }
    if (ArrayBuffer.isView(v)) {
      const view = v as ArrayBufferView;
      const bytes = Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
      return { $: 'b', k: view.constructor.name, v: bytes };
    }
    if (Array.isArray(v)) {
      // index loop (NOT .map, which skips holes) so the host twin matches the VM
      // twin byte-for-byte on sparse arrays — both read a hole as undefined → {$:'u'} (M1).
      const arr: unknown[] = [];
      for (let i = 0; i < v.length; i++) arr.push(encodeInner(v[i], seen));
      return arr;
    }

    const rec = v as Record<string, unknown>;
    const mapped: Record<string, unknown> = {};
    for (const key of Object.keys(rec)) mapped[key] = encodeInner(rec[key], seen);
    return Object.prototype.hasOwnProperty.call(rec, '$') ? { $: 'o', v: mapped } : mapped;
  } finally {
    seen.delete(obj);
  }
}

/** Decode a shadow (from the VM) back to a host value. */
export function marshalDecode(shadow: unknown): unknown {
  if (shadow === null || typeof shadow !== 'object') return shadow;
  if (Array.isArray(shadow)) return shadow.map(marshalDecode);

  const o = shadow as Record<string, unknown>;
  if (Object.prototype.hasOwnProperty.call(o, '$')) {
    switch (o.$) {
      case 'u': return undefined;
      case 'f': return o.v === 'nan' ? NaN : o.v === '+inf' ? Infinity : o.v === '-inf' ? -Infinity : -0;
      case 'n': return BigInt(o.v as string);
      case 'd': return new Date(o.v as number);
      case 'r': return new RegExp(o.s as string, o.f as string);
      case 'm': return new Map((o.v as Array<[unknown, unknown]>).map(([k, val]) => [marshalDecode(k), marshalDecode(val)]));
      case 's': return new Set((o.v as unknown[]).map(marshalDecode));
      case 'b': return decodeBytes(o.k as string, o.v as number[]);
      case 'o': {
        const inner = o.v as Record<string, unknown>;
        const out: Record<string, unknown> = {};
        for (const key of Object.keys(inner)) out[key] = marshalDecode(inner[key]);
        return out;
      }
      default: throw new Error(UNSUPPORTED + 'unknown marshaling tag ' + String(o.$) + '.');
    }
  }

  const out: Record<string, unknown> = {};
  for (const key of Object.keys(o)) out[key] = marshalDecode(o[key]);
  return out;
}

function decodeBytes(kind: string, bytes: number[]): unknown {
  const u8 = Uint8Array.from(bytes);
  if (kind === 'ArrayBuffer') return u8.buffer;
  if (kind === 'Uint8Array' || !kind) return u8;
  const Ctor = TYPED_ARRAY_CTORS[kind];
  return Ctor ? new Ctor(u8.buffer) : u8;
}

/**
 * The in-VM twin of the above, as a string evaluated once per QuickJS context.
 * Defines globalThis.__lsEncode / __lsDecode with the IDENTICAL wire format.
 * MUST be kept in lockstep with marshalEncode / marshalDecode (see invariant).
 * Uses an array as the cycle-detection set (WeakSet works in QuickJS but an
 * array is enough for the small object graphs that cross per call).
 */
export const VM_MARSHAL_BOOTSTRAP = `
(function () {
  var BAD = 'LumiScript QuickJS engine: unsupported value — ';
  function enc(v, seen) {
    if (v === null) return null;
    var t = typeof v;
    if (t === 'string' || t === 'boolean') return v;
    if (t === 'number') {
      if (Number.isNaN(v)) return { $: 'f', v: 'nan' };
      if (v === Infinity) return { $: 'f', v: '+inf' };
      if (v === -Infinity) return { $: 'f', v: '-inf' };
      if (Object.is(v, -0)) return { $: 'f', v: '-0' };
      return v;
    }
    if (t === 'undefined') return { $: 'u' };
    if (t === 'bigint') return { $: 'n', v: v.toString() };
    if (t === 'function') throw new Error(BAD + 'functions/callbacks are not yet marshaled (a later phase).');
    if (t === 'symbol') throw new Error(BAD + 'symbol.');
    if (v instanceof Date) return { $: 'd', v: v.getTime() };
    if (v instanceof RegExp) return { $: 'r', s: v.source, f: v.flags };
    if (seen.indexOf(v) !== -1) throw new Error(BAD + 'circular reference.');
    seen.push(v);
    try {
      if (v instanceof Map) {
        var m = []; v.forEach(function (val, k) { m.push([enc(k, seen), enc(val, seen)]); }); return { $: 'm', v: m };
      }
      if (v instanceof Set) {
        var s = []; v.forEach(function (val) { s.push(enc(val, seen)); }); return { $: 's', v: s };
      }
      if (typeof ArrayBuffer !== 'undefined' && v instanceof ArrayBuffer) {
        return { $: 'b', k: 'ArrayBuffer', v: Array.prototype.slice.call(new Uint8Array(v)) };
      }
      if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView && ArrayBuffer.isView(v)) {
        var nm = v.constructor && v.constructor.name;
        return { $: 'b', k: nm, v: Array.prototype.slice.call(new Uint8Array(v.buffer, v.byteOffset, v.byteLength)) };
      }
      if (Array.isArray(v)) { var a = []; for (var i = 0; i < v.length; i++) a.push(enc(v[i], seen)); return a; }
      var keys = Object.keys(v); var o = {};
      for (var j = 0; j < keys.length; j++) o[keys[j]] = enc(v[keys[j]], seen);
      return Object.prototype.hasOwnProperty.call(v, '$') ? { $: 'o', v: o } : o;
    } finally { seen.pop(); }
  }
  function decB(kind, bytes) {
    var u8 = Uint8Array.from(bytes);
    if (kind === 'ArrayBuffer') return u8.buffer;
    if (kind === 'Uint8Array' || !kind) return u8;
    var C = (typeof globalThis[kind] === 'function') ? globalThis[kind] : null;
    return C ? new C(u8.buffer) : u8;
  }
  function dec(x) {
    if (x === null || typeof x !== 'object') return x;
    if (Array.isArray(x)) { var a = []; for (var i = 0; i < x.length; i++) a.push(dec(x[i])); return a; }
    if (Object.prototype.hasOwnProperty.call(x, '$')) {
      switch (x.$) {
        case 'u': return undefined;
        case 'f': return x.v === 'nan' ? NaN : x.v === '+inf' ? Infinity : x.v === '-inf' ? -Infinity : -0;
        case 'n': return BigInt(x.v);
        case 'd': return new Date(x.v);
        case 'r': return new RegExp(x.s, x.f);
        case 'm': { var m = new Map(); for (var i = 0; i < x.v.length; i++) m.set(dec(x.v[i][0]), dec(x.v[i][1])); return m; }
        case 's': { var s = new Set(); for (var i = 0; i < x.v.length; i++) s.add(dec(x.v[i])); return s; }
        case 'b': return decB(x.k, x.v);
        case 'o': { var o = {}; var ks = Object.keys(x.v); for (var i = 0; i < ks.length; i++) o[ks[i]] = dec(x.v[ks[i]]); return o; }
        default: throw new Error(BAD + 'unknown marshaling tag ' + String(x.$) + '.');
      }
    }
    var oo = {}; var k2 = Object.keys(x); for (var i = 0; i < k2.length; i++) oo[k2[i]] = dec(x[k2[i]]); return oo;
  }
  globalThis.__lsEncode = function (v) { return enc(v, []); };
  globalThis.__lsDecode = dec;
})();
`;
