/**
 * #11 P3 (A1) — pure-JS Web-global polyfills for the QuickJS VM.
 *
 * QuickJS ships only core ES (JSON/Math/Date/Promise/Map/Set/Proxy/Reflect/
 * BigInt/Symbol/RegExp/Error). The Bun child the asyncfn engine runs in provides
 * the whole Web platform for free, so asyncfn scripts can use TextEncoder, atob,
 * structuredClone, etc. This bootstrap restores the subset that needs NO host
 * bridge — base64, UTF-8 text codecs, microtask scheduling, a monotonic-ish
 * clock, and a structured clone (built on the marshaler twin, so it shares the
 * exact same type fidelity). The host-bridged globals (crypto entropy, timers,
 * fetch, URL) land in A2.
 *
 * Evaluated once per context AFTER VM_MARSHAL_BOOTSTRAP (structuredClone reuses
 * __lsEncode/__lsDecode). Kept as a string (like the marshaler twin) so it runs
 * inside the isolate; there is no host-side counterpart to keep in lockstep.
 */
export const VM_WEBGLOBALS_BOOTSTRAP = `
(function () {
  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  // ── base64 (btoa/atob operate on Latin1 "binary strings", per the Web spec) ──
  globalThis.btoa = function (input) {
    var str = String(input);
    var out = '';
    for (var i = 0; i < str.length;) {
      var c1 = str.charCodeAt(i++);
      var c2 = str.charCodeAt(i++);
      var c3 = str.charCodeAt(i++);
      if (c1 > 0xff || (c2 === c2 && c2 > 0xff) || (c3 === c3 && c3 > 0xff)) {
        throw new Error("btoa: argument contains characters outside the Latin1 range");
      }
      var e1 = c1 >> 2;
      var e2 = ((c1 & 3) << 4) | (c2 >> 4);
      var e3 = ((c2 & 15) << 2) | (c3 >> 6);
      var e4 = c3 & 63;
      if (c2 !== c2) { e3 = 64; e4 = 64; }       // c2 is NaN (past end)
      else if (c3 !== c3) { e4 = 64; }            // c3 is NaN (past end)
      out += B64.charAt(e1) + B64.charAt(e2) + (e3 === 64 ? '=' : B64.charAt(e3)) + (e4 === 64 ? '=' : B64.charAt(e4));
    }
    return out;
  };
  globalThis.atob = function (input) {
    var str = String(input).replace(/[ \\t\\n\\f\\r]/g, '');
    if (str.length % 4 === 1) throw new Error("atob: invalid base64 (length)");
    var out = '';
    for (var bc = 0, bs = 0, buffer, i = 0; (buffer = str.charAt(i++));) {
      if (buffer === '=') break;
      buffer = B64.indexOf(buffer);
      if (buffer === -1) throw new Error("atob: invalid base64 character");
      bs = (bc % 4) ? bs * 64 + buffer : buffer;
      if (bc++ % 4) out += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)));
    }
    return out;
  };

  // ── UTF-8 text codecs ──
  function TextEncoder() {}
  TextEncoder.prototype.encoding = 'utf-8';
  TextEncoder.prototype.encode = function (input) {
    var str = String(input === undefined ? '' : input);
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) bytes.push(c);
      else if (c < 0x800) bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
      else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
        var c2 = str.charCodeAt(i + 1);
        if (c2 >= 0xdc00 && c2 <= 0xdfff) {
          i++;
          var cp = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
          bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f));
        } else bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
      } else bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
    return Uint8Array.from(bytes);
  };
  globalThis.TextEncoder = TextEncoder;

  function TextDecoder() {}
  TextDecoder.prototype.encoding = 'utf-8';
  TextDecoder.prototype.decode = function (buf) {
    if (buf === undefined || buf === null) return '';
    var bytes = (buf instanceof Uint8Array) ? buf
      : (typeof ArrayBuffer !== 'undefined' && buf instanceof ArrayBuffer) ? new Uint8Array(buf)
      : (buf.buffer ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : new Uint8Array(buf));
    var out = '', i = 0, n = bytes.length;
    while (i < n) {
      var c = bytes[i++];
      if (c < 0x80) out += String.fromCharCode(c);
      else if (c < 0xe0) out += String.fromCharCode(((c & 0x1f) << 6) | (bytes[i++] & 0x3f));
      else if (c < 0xf0) out += String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i++] & 0x3f) << 6) | (bytes[i++] & 0x3f));
      else {
        var cp = ((c & 0x07) << 18) | ((bytes[i++] & 0x3f) << 12) | ((bytes[i++] & 0x3f) << 6) | (bytes[i++] & 0x3f);
        cp -= 0x10000;
        out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff));
      }
    }
    return out;
  };
  globalThis.TextDecoder = TextDecoder;

  // ── scheduling + clock ──
  globalThis.queueMicrotask = function (cb) {
    if (typeof cb !== 'function') throw new TypeError('queueMicrotask: callback is not a function');
    Promise.resolve().then(cb);
  };
  // Monotonic-ish clock. No host timer is bridged here (A2), so this tracks
  // Date.now(); documented as wall-clock-derived, not strictly monotonic.
  globalThis.performance = { now: function () { return Date.now(); } };

  // structuredClone via the marshaler twin — same type fidelity (Date/Map/Set/
  // typed-arrays/etc.) and the same fail-loud on functions/symbols/cycles (real
  // structuredClone throws DataCloneError on functions too; it differs only by
  // supporting cycles, which the marshaler does not yet).
  globalThis.structuredClone = function (v) { return globalThis.__lsDecode(globalThis.__lsEncode(v)); };
})();
`;
