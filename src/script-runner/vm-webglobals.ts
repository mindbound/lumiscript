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
      if (c < 0x80) { bytes.push(c); continue; }
      if (c < 0x800) { bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f)); continue; }
      if (c >= 0xd800 && c <= 0xdbff) {
        // high surrogate — must be followed by a low surrogate, else U+FFFD (per spec)
        var c2 = (i + 1 < str.length) ? str.charCodeAt(i + 1) : 0;
        if (c2 >= 0xdc00 && c2 <= 0xdfff) {
          i++;
          var cp = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
          bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f));
        } else { bytes.push(0xef, 0xbf, 0xbd); } // lone high surrogate → U+FFFD
        continue;
      }
      if (c >= 0xdc00 && c <= 0xdfff) { bytes.push(0xef, 0xbf, 0xbd); continue; } // lone low surrogate → U+FFFD
      bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
    return Uint8Array.from(bytes);
  };
  globalThis.TextEncoder = TextEncoder;

  function TextDecoder() {}
  TextDecoder.prototype.encoding = 'utf-8';
  // Validating UTF-8 decoder. Rejects overlong forms, surrogate code points,
  // out-of-range, and truncated/ill-formed sequences — emitting U+FFFD — instead
  // of the previous lenient bit-assembly (which decoded overlong C1 81 → "A", a
  // smuggling vector, and read past the buffer on truncation).
  TextDecoder.prototype.decode = function (buf) {
    if (buf === undefined || buf === null) return '';
    var bytes = (buf instanceof Uint8Array) ? buf
      : (typeof ArrayBuffer !== 'undefined' && buf instanceof ArrayBuffer) ? new Uint8Array(buf)
      : (buf.buffer ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : new Uint8Array(buf));
    var out = '', i = 0, n = bytes.length;
    var FFFD = String.fromCharCode(0xfffd);
    while (i < n) {
      var b0 = bytes[i];
      if (b0 < 0x80) { out += String.fromCharCode(b0); i++; continue; }
      var len, cp, min;
      if (b0 >= 0xc2 && b0 <= 0xdf)      { len = 2; cp = b0 & 0x1f; min = 0x80; }
      else if (b0 >= 0xe0 && b0 <= 0xef) { len = 3; cp = b0 & 0x0f; min = 0x800; }
      else if (b0 >= 0xf0 && b0 <= 0xf4) { len = 4; cp = b0 & 0x07; min = 0x10000; }
      else { out += FFFD; i++; continue; } // invalid lead (C0/C1, F5-FF, stray continuation)
      if (i + len > n) { out += FFFD; i++; continue; } // truncated
      var ok = true;
      for (var k = 1; k < len; k++) {
        var bk = bytes[i + k];
        if (bk < 0x80 || bk > 0xbf) { ok = false; break; } // bad continuation
        cp = (cp << 6) | (bk & 0x3f);
      }
      if (!ok) { out += FFFD; i++; continue; } // resync at the offending byte
      if (cp < min || (cp >= 0xd800 && cp <= 0xdfff) || cp > 0x10ffff) { out += FFFD; i += len; continue; } // overlong / surrogate / too big
      if (cp < 0x10000) out += String.fromCharCode(cp);
      else { cp -= 0x10000; out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff)); }
      i += len;
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

  // ── timers — NOT YET SUPPORTED (host-scheduled callbacks land in a later phase) ──
  // setTimeout/setInterval need host-scheduled callback re-entry into the VM (the P5 callback
  // machinery), which is not built yet. Define THROWING stubs so a script that reaches for a timer
  // gets a clear 'not yet supported — a later phase' message (parity with the marshaler's fail-loud)
  // instead of the bare 'setTimeout is not defined' ReferenceError a missing global gives — that reads
  // like a LumiScript bug rather than an unbuilt feature. clearTimeout/clearInterval are safe NO-OPs:
  // set* always throws so no timer id can exist, and throwing in a teardown/cleanup path (where clear*
  // is typically called) would itself break cleanup.
  var unsupportedTimer = function (name) {
    return function () {
      throw new Error(
        'LumiScript QuickJS engine: ' + name + ' is not yet supported (timers land in a later phase). ' +
        'Restructure to avoid timers for now, or run this script under the AsyncFunction engine.',
      );
    };
  };
  globalThis.setTimeout = unsupportedTimer('setTimeout');
  globalThis.setInterval = unsupportedTimer('setInterval');
  globalThis.clearTimeout = function () {};
  globalThis.clearInterval = function () {};

  // structuredClone via the marshaler twin — same type fidelity (Date/Map/Set/
  // typed-arrays/etc.) and the same fail-loud on functions/symbols/cycles (real
  // structuredClone throws DataCloneError on functions too; it differs only by
  // supporting cycles, which the marshaler does not yet).
  globalThis.structuredClone = function (v) { return globalThis.__lsDecode(globalThis.__lsEncode(v)); };

  // ── URL / URLSearchParams (P3 A2) ──
  // Pragmatic WHATWG-subset, pure-JS: absolute parse + basic relative resolution,
  // the standard properties, and a live URLSearchParams. Needed by zod z.url()
  // (which calls new URL on the value) and general user code. NOT a full WHATWG
  // state machine (no IDNA / full percent-encode normalization) — enough for
  // validation and common get/build use.
  var encSP = function (s) { return encodeURIComponent(s).replace(/%20/g, '+'); };
  var decSP = function (s) { return decodeURIComponent(String(s).replace(/\\+/g, ' ')); };
  function USP(init) {
    this._l = [];
    if (init instanceof USP) { for (var a = 0; a < init._l.length; a++) this._l.push([init._l[a][0], init._l[a][1]]); }
    else if (typeof init === 'string') {
      var s = init.charAt(0) === '?' ? init.slice(1) : init;
      if (s) { var ps = s.split('&'); for (var i = 0; i < ps.length; i++) { if (!ps[i]) continue; var e = ps[i].indexOf('='); this._l.push([decSP(e < 0 ? ps[i] : ps[i].slice(0, e)), decSP(e < 0 ? '' : ps[i].slice(e + 1))]); } }
    } else if (Array.isArray(init)) { for (var j = 0; j < init.length; j++) this._l.push([String(init[j][0]), String(init[j][1])]); }
    else if (init && typeof init === 'object') { var ks = Object.keys(init); for (var m = 0; m < ks.length; m++) this._l.push([ks[m], String(init[ks[m]])]); }
  }
  USP.prototype.append = function (k, v) { this._l.push([String(k), String(v)]); };
  USP.prototype['delete'] = function (k) { k = String(k); var o = []; for (var i = 0; i < this._l.length; i++) if (this._l[i][0] !== k) o.push(this._l[i]); this._l = o; };
  USP.prototype.get = function (k) { k = String(k); for (var i = 0; i < this._l.length; i++) if (this._l[i][0] === k) return this._l[i][1]; return null; };
  USP.prototype.getAll = function (k) { k = String(k); var r = []; for (var i = 0; i < this._l.length; i++) if (this._l[i][0] === k) r.push(this._l[i][1]); return r; };
  USP.prototype.has = function (k) { k = String(k); for (var i = 0; i < this._l.length; i++) if (this._l[i][0] === k) return true; return false; };
  USP.prototype.set = function (k, v) { k = String(k); v = String(v); var f = false; var o = []; for (var i = 0; i < this._l.length; i++) { if (this._l[i][0] === k) { if (!f) { f = true; o.push([k, v]); } } else o.push(this._l[i]); } if (!f) o.push([k, v]); this._l = o; };
  USP.prototype.forEach = function (cb, t) { for (var i = 0; i < this._l.length; i++) cb.call(t, this._l[i][1], this._l[i][0], this); };
  USP.prototype.keys = function () { return this._l.map(function (p) { return p[0]; }); };
  USP.prototype.values = function () { return this._l.map(function (p) { return p[1]; }); };
  USP.prototype.entries = function () { return this._l.map(function (p) { return [p[0], p[1]]; }); };
  USP.prototype.sort = function () { this._l.sort(function (a, b) { return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; }); };
  USP.prototype.toString = function () { var r = []; for (var i = 0; i < this._l.length; i++) r.push(encSP(this._l[i][0]) + '=' + encSP(this._l[i][1])); return r.join('&'); };
  Object.defineProperty(USP.prototype, 'size', { get: function () { return this._l.length; } });
  globalThis.URLSearchParams = USP;

  var SPECIAL = { 'http:': '80', 'https:': '443', 'ws:': '80', 'wss:': '443', 'ftp:': '21', 'file:': '' };
  function normPath(p) {
    var parts = p.split('/'); var out = [];
    for (var i = 0; i < parts.length; i++) { if (parts[i] === '.') continue; if (parts[i] === '..') { if (out.length > 1) out.pop(); } else out.push(parts[i]); }
    return out.join('/');
  }
  function URLp(url, base) {
    var input = String(url).replace(/^[\\s]+|[\\s]+$/g, '');
    if (!/^[a-zA-Z][a-zA-Z0-9+.\\-]*:/.test(input)) {
      if (base === undefined || base === null) throw new TypeError('Invalid URL: ' + url);
      var b = base instanceof URLp ? base : new URLp(base);
      if (input.charAt(0) === '#') input = b.href.split('#')[0] + input;
      else if (input.charAt(0) === '?') input = b.href.split('#')[0].split('?')[0] + input;
      else if (input.slice(0, 2) === '//') input = b.protocol + input;
      else if (input.charAt(0) === '/') input = b.protocol + '//' + b.host + input;
      else input = b.protocol + '//' + b.host + normPath(b.pathname.replace(/[^\\/]*$/, '') + input);
    }
    var m = /^([a-zA-Z][a-zA-Z0-9+.\\-]*):([\\s\\S]*)$/.exec(input);
    if (!m) throw new TypeError('Invalid URL: ' + url);
    var protocol = m[1].toLowerCase() + ':';
    var rest = m[2];
    var isSpecial = Object.prototype.hasOwnProperty.call(SPECIAL, protocol);
    var username = '', password = '', hostname = '', port = '', pathname = '', search = '', hash = '';
    if (rest.slice(0, 2) === '//') {
      rest = rest.slice(2);
      var pe = rest.search(/[\\/?#]/);
      var auth = pe === -1 ? rest : rest.slice(0, pe);
      rest = pe === -1 ? '' : rest.slice(pe);
      var at = auth.lastIndexOf('@');
      if (at !== -1) { var cr = auth.slice(0, at); auth = auth.slice(at + 1); var ci = cr.indexOf(':'); if (ci === -1) username = cr; else { username = cr.slice(0, ci); password = cr.slice(ci + 1); } }
      var pi = auth.lastIndexOf(':');
      if (pi !== -1 && /^[0-9]*$/.test(auth.slice(pi + 1))) { hostname = auth.slice(0, pi); port = auth.slice(pi + 1); } else hostname = auth;
      if (isSpecial && !hostname && protocol !== 'file:') throw new TypeError('Invalid URL (no host): ' + url);
      if (port !== '' && SPECIAL[protocol] === port) port = '';
      if (!rest) rest = '/';
    } else if (isSpecial) {
      throw new TypeError('Invalid URL: ' + url);
    }
    var hi = rest.indexOf('#'); if (hi !== -1) { hash = rest.slice(hi); rest = rest.slice(0, hi); }
    var qi = rest.indexOf('?'); if (qi !== -1) { search = rest.slice(qi); rest = rest.slice(0, qi); }
    pathname = rest;
    this.protocol = protocol; this.username = username; this.password = password;
    this.hostname = hostname; this.port = port; this.pathname = pathname;
    this._search = search === '?' ? '' : search; this.hash = hash === '#' ? '' : hash; this._sp = null;
  }
  Object.defineProperty(URLp.prototype, 'host', { get: function () { return this.port ? this.hostname + ':' + this.port : this.hostname; }, configurable: true });
  Object.defineProperty(URLp.prototype, 'search', {
    get: function () { if (this._sp) { var t = this._sp.toString(); return t ? '?' + t : ''; } return this._search; },
    set: function (v) { v = String(v); this._search = v ? (v.charAt(0) === '?' ? v : '?' + v) : ''; this._sp = null; }, configurable: true,
  });
  Object.defineProperty(URLp.prototype, 'searchParams', { get: function () { if (!this._sp) this._sp = new USP(this._search); return this._sp; }, configurable: true });
  Object.defineProperty(URLp.prototype, 'origin', { get: function () { return (Object.prototype.hasOwnProperty.call(SPECIAL, this.protocol) && this.protocol !== 'file:') ? this.protocol + '//' + this.host : 'null'; }, configurable: true });
  Object.defineProperty(URLp.prototype, 'href', {
    get: function () {
      var s = this.protocol;
      if (this.hostname || Object.prototype.hasOwnProperty.call(SPECIAL, this.protocol)) {
        s += '//';
        if (this.username) { s += this.username; if (this.password) s += ':' + this.password; s += '@'; }
        s += this.host;
      }
      return s + this.pathname + this.search + this.hash;
    }, configurable: true,
  });
  URLp.prototype.toString = function () { return this.href; };
  URLp.prototype.toJSON = function () { return this.href; };
  globalThis.URL = URLp;
})();
`;
