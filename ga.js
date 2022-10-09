!(function () {
  var t,
    e,
    n,
    r = this || self,
    a = function (t, e) {
      t = t.split(".");
      var n,
        a = r;
      t[0] in a || void 0 === a.execScript || a.execScript("var " + t[0]);
      for (; t.length && (n = t.shift());)
        t.length || void 0 === e
          ? (a = a[n] && a[n] !== Object.prototype[n] ? a[n] : (a[n] = {}))
          : (a[n] = e);
    },
    o = function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    },
    i = function (t) {
      for (var e in t) if (t.hasOwnProperty(e)) return !0;
      return !1;
    },
    s = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    c = window,
    u = window.history,
    l = document,
    g = navigator,
    f = function (t, e) {
      l.addEventListener
        ? l.addEventListener(t, e, !1)
        : l.attachEvent && l.attachEvent("on" + t, e);
    },
    h = {},
    d = function () {
      (h.TAGGING = h.TAGGING || []), (h.TAGGING[1] = !0);
    },
    p = /:[0-9]+$/,
    v = function (t, e, n) {
      t = t.split("&");
      for (var r = 0; r < t.length; r++) {
        var a = t[r].split("=");
        if (decodeURIComponent(a[0]).replace(/\+/g, " ") === e)
          return (
            (e = a.slice(1).join("=")),
            n ? e : decodeURIComponent(e).replace(/\+/g, " ")
          );
      }
    },
    m = function (t, e) {
      return (
        e && (e = String(e).toLowerCase()),
        ("protocol" !== e && "port" !== e) ||
        (t.protocol = w(t.protocol) || w(c.location.protocol)),
        "port" === e
          ? (t.port = String(
            Number(t.hostname ? t.port : c.location.port) ||
            ("http" == t.protocol ? 80 : "https" == t.protocol ? 443 : "")
          ))
          : "host" === e &&
          (t.hostname = (t.hostname || c.location.hostname)
            .replace(p, "")
            .toLowerCase()),
        _(t, e, void 0, void 0, void 0)
      );
    },
    _ = function (t, e, n, r, a) {
      var o = w(t.protocol);
      switch ((e && (e = String(e).toLowerCase()), e)) {
        case "url_no_fragment":
          (r = ""),
            t &&
            t.href &&
            (r =
              0 > (r = t.href.indexOf("#")) ? t.href : t.href.substr(0, r)),
            (t = r);
          break;
        case "protocol":
          t = o;
          break;
        case "host":
          (t = t.hostname.replace(p, "").toLowerCase()),
            n &&
            (r = /^www\d*\./.exec(t)) &&
            r[0] &&
            (t = t.substr(r[0].length));
          break;
        case "port":
          t = String(
            Number(t.port) || ("http" == o ? 80 : "https" == o ? 443 : "")
          );
          break;
        case "path":
          t.pathname || t.hostname || d(),
            (t = (t =
              "/" == t.pathname.substr(0, 1)
                ? t.pathname
                : "/" + t.pathname).split("/")),
            0 <= (r || []).indexOf(t[t.length - 1]) && (t[t.length - 1] = ""),
            (t = t.join("/"));
          break;
        case "query":
          (t = t.search.replace("?", "")), a && (t = v(t, a, void 0));
          break;
        case "extension":
          t = (t =
            1 < (t = t.pathname.split(".")).length
              ? t[t.length - 1]
              : "").split("/")[0];
          break;
        case "fragment":
          t = t.hash.replace("#", "");
          break;
        default:
          t = t && t.href;
      }
      return t;
    },
    w = function (t) {
      return t ? t.replace(":", "").toLowerCase() : "";
    },
    b = function (t) {
      var e = l.createElement("a");
      t && (e.href = t);
      var n = e.pathname;
      return (
        "/" !== n[0] && (t || d(), (n = "/" + n)),
        (t = e.hostname.replace(p, "")),
        {
          href: e.href,
          protocol: e.protocol,
          host: e.host,
          hostname: t,
          pathname: n,
          search: e.search,
          hash: e.hash,
          port: e.port,
        }
      );
    };
  function y() {
    for (var e = t, n = {}, r = 0; r < e.length; ++r) n[e[r]] = r;
    return n;
  }
  function k() {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (t += t.toLowerCase() + "0123456789-_") + ".";
  }
  function x(n) {
    (t = t || k()), (e = e || y());
    for (var r = [], a = 0; a < n.length; a += 3) {
      var o = a + 1 < n.length,
        i = a + 2 < n.length,
        s = n.charCodeAt(a),
        c = o ? n.charCodeAt(a + 1) : 0,
        u = i ? n.charCodeAt(a + 2) : 0,
        l = s >> 2;
      (s = ((3 & s) << 4) | (c >> 4)),
        (c = ((15 & c) << 2) | (u >> 6)),
        (u &= 63),
        i || ((u = 64), o || (c = 64)),
        r.push(t[l], t[s], t[c], t[u]);
    }
    return r.join("");
  }
  function O(n) {
    function r(t) {
      for (; o < n.length;) {
        var r = n.charAt(o++),
          a = e[r];
        if (null != a) return a;
        if (!/^[\s\xa0]*$/.test(r))
          throw Error("Unknown base64 encoding at char: " + r);
      }
      return t;
    }
    (t = t || k()), (e = e || y());
    for (var a = "", o = 0; ;) {
      var i = r(-1),
        s = r(0),
        c = r(64),
        u = r(64);
      if (64 === u && -1 === i) return a;
      (a += String.fromCharCode((i << 2) | (s >> 4))),
        64 != c &&
        ((a += String.fromCharCode(((s << 4) & 240) | (c >> 2))),
          64 != u && (a += String.fromCharCode(((c << 6) & 192) | u)));
    }
  }
  var T = void 0,
    S = function () {
      var t = B,
        e = z,
        n = A(),
        r = function (e) {
          t(e.target || e.srcElement || {});
        };
      if (!n.init) {
        f("mousedown", r),
          f("keyup", r),
          f("submit", function (t) {
            e(t.target || t.srcElement || {});
          });
        var a = HTMLFormElement.prototype.submit;
        (HTMLFormElement.prototype.submit = function () {
          e(this), a.call(this);
        }),
          (n.init = !0);
      }
    },
    C = function (t, e, n, r, a) {
      (t = {
        callback: t,
        domains: e,
        fragment: 2 === n,
        placement: n,
        forms: r,
        sameHost: a,
      }),
        A().decorators.push(t);
    },
    E = function (t, e, n) {
      for (var r = A().decorators, a = {}, i = 0; i < r.length; ++i) {
        var s,
          c = r[i];
        if ((s = !n || c.forms))
          t: {
            s = c.domains;
            var u = t,
              g = !!c.sameHost;
            if (s && (g || u !== l.location.hostname))
              for (var f = 0; f < s.length; f++)
                if (s[f] instanceof RegExp) {
                  if (s[f].test(u)) {
                    s = !0;
                    break t;
                  }
                } else if (
                  0 <= u.indexOf(s[f]) ||
                  (g && 0 <= s[f].indexOf(u))
                ) {
                  s = !0;
                  break t;
                }
            s = !1;
          }
        s &&
          (null == (s = c.placement) && (s = c.fragment ? 2 : 1),
            s === e && o(a, c.callback()));
      }
      return a;
    };
  function A() {
    var t = {},
      e = c.google_tag_data;
    return (
      (c.google_tag_data = void 0 === e ? t : e),
      ((e = (t = c.google_tag_data).gl) && e.decorators) ||
      ((e = { decorators: [] }), (t.gl = e)),
      e
    );
  }
  var N = /(.*?)\*(.*?)\*(.*)/,
    j = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function I(t) {
    return new RegExp("(.*?)(^|&)" + t + "=([^&]*)&?(.*)");
  }
  var R = function (t, e) {
    var n,
      r = [];
    for (n in t)
      if (t.hasOwnProperty(n)) {
        var a = t[n];
        void 0 !== a &&
          a == a &&
          null !== a &&
          "[object Object]" !== a.toString() &&
          (r.push(n), r.push(x(String(a))));
      }
    return (
      (t = r.join("*")),
      void 0 !== e &&
      ((r = "xp_" + e),
        (e = M[e](t)),
        (t = t + "*" + [r, x(String(e))].join("*"))),
      ["1", L(t), t].join("*")
    );
  };
  function L(t, e) {
    if (
      ((t = [
        c.navigator.userAgent,
        new Date().getTimezoneOffset(),
        g.userLanguage || g.language,
        Math.floor(new Date(Date.now()).getTime() / 60 / 1e3) -
        (void 0 === e ? 0 : e),
        t,
      ].join("*")),
        !(e = n))
    ) {
      e = Array(256);
      for (var r = 0; 256 > r; r++) {
        for (var a = r, o = 0; 8 > o; o++)
          a = 1 & a ? (a >>> 1) ^ 3988292384 : a >>> 1;
        e[r] = a;
      }
    }
    for (n = e, e = 4294967295, r = 0; r < t.length; r++)
      e = (e >>> 8) ^ n[255 & (e ^ t.charCodeAt(r))];
    return ((-1 ^ e) >>> 0).toString(36);
  }
  var D = {},
    M =
      ((D[1] = function () {
        return "CHECKSUM_EXP_DISABLED";
      }),
        (D[2] = function () {
          return "CHECKSUM_EXP_DISABLED";
        }),
        (D[3] = function () {
          return "CHECKSUM_EXP_DISABLED";
        }),
        D);
  function P(t) {
    return function (e) {
      var n = b(c.location.href),
        r = n.search.replace("?", ""),
        a = v(r, "_gl", !0);
      e.query = U(a || "") || {};
      var o = (a = m(n, "fragment")).match(I("_gl"));
      (e.fragment = U((o && o[3]) || "") || {}),
        t &&
        (function (t, e, n) {
          function r(t, e) {
            return (t = $("_gl", t)).length && (t = e + t), t;
          }
          if (u && u.replaceState) {
            var a = I("_gl");
            (a.test(e) || a.test(n)) &&
              ((t = m(t, "path")),
                (e = r(e, "?")),
                (n = r(n, "#")),
                u.replaceState({}, void 0, "" + t + e + n));
          }
        })(n, r, a);
    };
  }
  function $(t, e) {
    if ((t = I(t).exec(e))) {
      var n = t[2],
        r = t[4];
      (e = t[1]), r && (e = e + n + r);
    }
    return e;
  }
  var U = function (t) {
    var e = void 0 === e ? 3 : e;
    try {
      if (t) {
        t: {
          for (var n = 0; 3 > n; ++n) {
            var r = N.exec(t);
            if (r) {
              var a = r;
              break t;
            }
            t = decodeURIComponent(t);
          }
          a = void 0;
        }
        if (a && "1" === a[1]) {
          var o = a[2],
            i = a[3];
          t: {
            for (a = 0; a < e; ++a)
              if (o === L(i, a)) {
                var s = !0;
                break t;
              }
            s = !1;
          }
          if (s) {
            e = {};
            var c = i ? i.split("*") : [];
            for (i = 0; i < c.length; i += 2) e[c[i]] = O(c[i + 1]);
            return e;
          }
        }
      }
    } catch (t) { }
  };
  function G(t, e, n, r) {
    function a(e) {
      var n = (e = $(t, e)).charAt(e.length - 1);
      return e && "&" !== n && (e += "&"), e + s;
    }
    r = void 0 !== r && r;
    var o = j.exec(n);
    if (!o) return "";
    n = o[1];
    var i = o[2] || "";
    o = o[3] || "";
    var s = t + "=" + e;
    return (
      r ? (o = "#" + a(o.substring(1))) : (i = "?" + a(i.substring(1))),
      "" + n + i + o
    );
  }
  function q(t, e) {
    var n = "FORM" === (t.tagName || "").toUpperCase(),
      r = E(e, 1, n),
      a = E(e, 2, n);
    e = E(e, 3, n);
    var o = T;
    for (var s in (i(r) &&
      ((r = R(r, o)), n ? F("_gl", r, t) : V("_gl", r, t, !1)),
      !n && i(a) && V("_gl", (n = R(a)), t, !0),
      e))
      e.hasOwnProperty(s) && H(s, e[s], t);
  }
  function H(t, e, n, r) {
    if (n.tagName) {
      if ("a" === n.tagName.toLowerCase()) return V(t, e, n, r);
      if ("form" === n.tagName.toLowerCase()) return F(t, e, n);
    }
    if ("string" == typeof n) return G(t, e, n, r);
  }
  function V(t, e, n, r) {
    n.href &&
      ((t = G(t, e, n.href, void 0 !== r && r)), s.test(t) && (n.href = t));
  }
  function F(t, e, n) {
    if (n && n.action) {
      var r = (n.method || "").toLowerCase();
      if ("get" === r) {
        r = n.childNodes || [];
        for (var a = !1, o = 0; o < r.length; o++) {
          var i = r[o];
          if (i.name === t) {
            i.setAttribute("value", e), (a = !0);
            break;
          }
        }
        a ||
          ((r = l.createElement("input")).setAttribute("type", "hidden"),
            r.setAttribute("name", t),
            r.setAttribute("value", e),
            n.appendChild(r));
      } else
        "post" === r && ((t = G(t, e, n.action)), s.test(t) && (n.action = t));
    }
  }
  function B(t) {
    try {
      t: {
        for (var e = 100; t && 0 < e;) {
          if (t.href && t.nodeName.match(/^a(?:rea)?$/i)) {
            var n = t;
            break t;
          }
          (t = t.parentNode), e--;
        }
        n = null;
      }
      if (n) {
        var r = n.protocol;
        ("http:" !== r && "https:" !== r) || q(n, n.hostname);
      }
    } catch (t) { }
  }
  function z(t) {
    try {
      t.action && q(t, m(b(t.action), "host"));
    } catch (t) { }
  }
  a("google_tag_data.glBridge.auto", function (t, e, n, r, a) {
    S(),
      void 0 !== a && (T = a),
      3 === a &&
      g.userAgentData &&
      g.userAgentData
        .getHighEntropyValues([
          "architecture",
          "model",
          "bitness",
          "platformVersion",
          "uaFullVersion",
        ])
        .then(function () { }),
      C(t, e, "fragment" === n ? 2 : 1, !!r, !1);
  }),
    a("google_tag_data.glBridge.passthrough", function (t, e, n, r) {
      S(),
        void 0 !== r && (T = r),
        C(t, [_(c.location, "host", !0)], e, !!n, !0);
    }),
    a("google_tag_data.glBridge.decorate", function (t, e, n) {
      return H("_gl", (t = R(t)), e, !!n);
    }),
    a("google_tag_data.glBridge.generate", R),
    a("google_tag_data.glBridge.get", function (t, e) {
      var n = P(!!e);
      return (
        (e = A()).data || ((e.data = { query: {}, fragment: {} }), n(e.data)),
        (n = {}),
        (e = e.data) && (o(n, e.query), t && o(n, e.fragment)),
        n
      );
    });
})(window),
  (function () {
    function t(t) {
      var e,
        n = 1;
      if (t)
        for (n = 0, e = t.length - 1; 0 <= e; e--) {
          var r = t.charCodeAt(e);
          n =
            0 != (r = 266338304 & (n = ((n << 6) & 268435455) + r + (r << 14)))
              ? n ^ (r >> 21)
              : n;
        }
      return n;
    }
    var e = function (t) {
      this.C = t || [];
    };
    (e.prototype.set = function (t) {
      this.C[t] = !0;
    }),
      (e.prototype.encode = function () {
        for (var t = [], e = 0; e < this.C.length; e++)
          this.C[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
        for (e = 0; e < t.length; e++)
          t[e] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
              t[e] || 0
            );
        return t.join("") + "~";
      });
    var n,
      r,
      a = window.GoogleAnalyticsObject;
    if (
      ((n = null != a) && (n = -1 < (a.constructor + "").indexOf("String")),
        (r = n))
    ) {
      var o = window.GoogleAnalyticsObject;
      r = o ? o.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    }
    var i = r || "ga",
      s = /^(?:utma\.)?\d+\.\d+$/,
      c = /^amp-[\w.-]{22,64}$/,
      u = !1,
      l = new e();
    function g(t) {
      l.set(t);
    }
    var f = function (t) {
      (t = h(t)), (t = new e(t));
      for (var n = l.C.slice(), r = 0; r < t.C.length; r++)
        n[r] = n[r] || t.C[r];
      return new e(n).encode();
    },
      h = function (t) {
        return (t = t.get(ze)), p(t) || (t = []), t;
      },
      d = function (t) {
        return "function" == typeof t;
      },
      p = function (t) {
        return "[object Array]" == Object.prototype.toString.call(Object(t));
      },
      v = function (t) {
        return null != t && -1 < (t.constructor + "").indexOf("String");
      },
      m = function (t, e) {
        return 0 == t.indexOf(e);
      },
      _ = function () {
        for (
          var e =
            R.navigator.userAgent +
            (L.cookie ? L.cookie : "") +
            (L.referrer ? L.referrer : ""),
          n = e.length,
          r = R.history.length;
          0 < r;

        )
          e += r-- ^ n++;
        return [
          It() ^ (2147483647 & t(e)),
          Math.round(new Date().getTime() / 1e3),
        ].join(".");
      },
      w = function () { },
      b = function (t) {
        return encodeURIComponent instanceof Function
          ? encodeURIComponent(t)
          : (g(28), t);
      },
      y = function (t, e, n, r) {
        try {
          t.addEventListener
            ? t.addEventListener(e, n, !!r)
            : t.attachEvent && t.attachEvent("on" + e, n);
        } catch (t) {
          g(27);
        }
      },
      k = /^[\w\-:/.?=&%!\[\]]+$/,
      x = /^[\w+/_-]+[=]{0,2}$/,
      O = null,
      T = function (t, e, n, r, a) {
        if (!O) {
          O = {
            createScriptURL: function (t) {
              return t;
            },
            createHTML: function (t) {
              return t;
            },
          };
          try {
            O = window.trustedTypes.createPolicy("google-analytics", O);
          } catch (t) { }
        }
        if (t) {
          var o = (L.querySelector && L.querySelector("script[nonce]")) || null;
          (o =
            (o && (o.nonce || (o.getAttribute && o.getAttribute("nonce")))) ||
            ""),
            n
              ? ((a = r = ""),
                e && k.test(e) && (r = ' id="' + e + '"'),
                o && x.test(o) && (a = ' nonce="' + o + '"'),
                k.test(t) &&
                L.write(
                  O.createHTML(
                    "<script" + r + a + ' src="' + t + '"></script>'
                  )
                ))
              : (((n = L.createElement("script")).type = "text/javascript"),
                (n.async = !0),
                (n.src = O.createScriptURL(t)),
                r && (n.onload = r),
                a && (n.onerror = a),
                e && (n.id = e),
                o && n.setAttribute("nonce", o),
                (t =
                  L.getElementsByTagName("script")[0]).parentNode.insertBefore(
                    n,
                    t
                  ));
        }
      },
      S = function (t, e) {
        return C(L.location[e ? "href" : "search"], t);
      },
      C = function (t, e) {
        return (t = t.match(
          "(?:&|#|\\?)" +
          b(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") +
          "=([^&#]*)"
        )) && 2 == t.length
          ? t[1]
          : "";
      },
      E = function () {
        var t = "" + L.location.hostname;
        return 0 == t.indexOf("www.") ? t.substring(4) : t;
      },
      A = function (t, e) {
        var n = t.indexOf(e);
        return !(
          (5 != n && 6 != n) ||
          ("/" != (t = t.charAt(n + e.length)) &&
            "?" != t &&
            "" != t &&
            ":" != t)
        );
      },
      N = function (t, e) {
        if (1 == e.length && null != e[0] && "object" == typeof e[0])
          return e[0];
        for (
          var n = {}, r = Math.min(t.length + 1, e.length), a = 0;
          a < r;
          a++
        ) {
          if ("object" == typeof e[a]) {
            for (var o in e[a]) e[a].hasOwnProperty(o) && (n[o] = e[a][o]);
            break;
          }
          a < t.length && (n[t[a]] = e[a]);
        }
        return n;
      },
      j = function (t, e) {
        for (var n = 0; n < t.length; n++) if (e == t[n]) return !0;
        return !1;
      },
      I = function () {
        (this.oa = []), (this.ea = {}), (this.m = {});
      };
    (I.prototype.set = function (t, e, n) {
      this.oa.push(t), n ? (this.m[":" + t] = e) : (this.ea[":" + t] = e);
    }),
      (I.prototype.get = function (t) {
        return this.m.hasOwnProperty(":" + t)
          ? this.m[":" + t]
          : this.ea[":" + t];
      }),
      (I.prototype.map = function (t) {
        for (var e = 0; e < this.oa.length; e++) {
          var n = this.oa[e],
            r = this.get(n);
          r && t(n, r);
        }
      });
    var R = window,
      L = document,
      D = document.currentScript ? document.currentScript.src : "",
      M = function (t, e) {
        return setTimeout(t, e);
      },
      P = window,
      $ = document,
      U = function (t) {
        var e = P._gaUserPrefs;
        if ((e && e.ioo && e.ioo()) || (t && !0 === P["ga-disable-" + t]))
          return !0;
        try {
          var n = P.external;
          if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0;
        } catch (t) { }
        for (
          t = [], e = String($.cookie).split(";"), n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n].split("="),
            a = r[0].replace(/^\s*|\s*$/g, "");
          a &&
            "AMP_TOKEN" == a &&
            ((r = r
              .slice(1)
              .join("=")
              .replace(/^\s*|\s*$/g, "")) && (r = decodeURIComponent(r)),
              t.push(r));
        }
        for (e = 0; e < t.length; e++) if ("$OPT_OUT" == t[e]) return !0;
        return !!$.getElementById("__gaOptOutExtension");
      },
      G = function (t) {
        var e = [],
          n = L.cookie.split(";");
        t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
        for (var r = 0; r < n.length; r++) {
          var a = n[r].match(t);
          a && e.push(a[1]);
        }
        return e;
      },
      q = function (t, e, n, r, a, o, i) {
        if (
          !(a =
            !U(a) && !(F.test(L.location.hostname) || ("/" == n && V.test(r))))
        )
          return !1;
        if (
          (e && 1200 < e.length && (e = e.substring(0, 1200)),
            (n = t + "=" + e + "; path=" + n + "; "),
            o &&
            (n +=
              "expires=" +
              new Date(new Date().getTime() + o).toGMTString() +
              "; "),
            r && "none" !== r && (n += "domain=" + r + ";"),
            i && (n += i + ";"),
            (r = L.cookie),
            (L.cookie = n),
            !(r = r != L.cookie))
        )
          t: {
            for (t = G(t), r = 0; r < t.length; r++)
              if (e == t[r]) {
                r = !0;
                break t;
              }
            r = !1;
          }
        return r;
      },
      H = function (t) {
        return encodeURIComponent
          ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29")
          : t;
      },
      V = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      F = /(^|\.)doubleclick\.net$/i;
    function B(t, e, n) {
      e = (function (t) {
        var e = [],
          n = L.cookie.split(";");
        t = new RegExp(
          "^\\s*" + (t || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        );
        for (var r = 0; r < n.length; r++) {
          var a = n[r].match(t);
          a &&
            e.push({
              ja: a[1],
              value: a[2],
              timestamp: Number(a[2].split(".")[1]) || 0,
            });
        }
        return (
          e.sort(function (t, e) {
            return e.timestamp - t.timestamp;
          }),
          e
        );
      })(e);
      var r = {};
      if (!e || !e.length) return r;
      for (var a = 0; a < e.length; a++) {
        var o = e[a].value.split(".");
        if ("1" !== o[0] || (n && 3 > o.length) || (!n && 3 !== o.length))
          t && (t.na = !0);
        else if (Number(o[1])) {
          r[e[a].ja] ? t && (t.pa = !0) : (r[e[a].ja] = []);
          var i = { version: o[0], timestamp: 1e3 * Number(o[1]), qa: o[2] };
          n && 3 < o.length && (i.labels = o.slice(3)), r[e[a].ja].push(i);
        }
      }
      return r;
    }
    var z,
      K,
      X,
      W,
      Z = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
      Y = /^(?:www\.|m\.|amp\.)+/,
      J = [],
      Q = function (t) {
        var e;
        if (
          it(t[Dn]) &&
          (void 0 === W &&
            (e = ((e = Nr.get()) && e._ga) || void 0) &&
            ((W = e), g(81)),
            void 0 !== W)
        )
          return t[dn] || (t[dn] = W), !1;
        if (t[Dn]) {
          if ((g(67), t[Cn] && "cookie" != t[Cn])) return !1;
          if (void 0 !== W) t[dn] || (t[dn] = W);
          else {
            t: {
              e = String(t[bn] || E());
              var n = String(t[yn] || "/"),
                r = G(String(t[wn] || "_ga"));
              if (!(e = wr(r, e, n)) || s.test(e)) e = !0;
              else if (0 == (e = G("AMP_TOKEN")).length) e = !0;
              else {
                if (
                  1 == e.length &&
                  ("$RETRIEVING" == (e = decodeURIComponent(e[0])) ||
                    "$OPT_OUT" == e ||
                    "$ERROR" == e ||
                    "$NOT_FOUND" == e)
                ) {
                  e = !0;
                  break t;
                }
                e = !1;
              }
            }
            if (e && et(tt, String(t[_n]))) return !0;
          }
        }
        return !1;
      },
      tt = function () {
        Ea.D([w]);
      },
      et = function (t, e) {
        var n = G("AMP_TOKEN");
        return 1 < n.length
          ? (g(55), !1)
          : "$OPT_OUT" == (n = decodeURIComponent(n[0] || "")) ||
            "$ERROR" == n ||
            U(e)
            ? (g(62), !1)
            : Z.test(L.referrer) || "$NOT_FOUND" != n
              ? void 0 !== W
                ? (g(56),
                  M(function () {
                    t(W);
                  }, 0),
                  !0)
                : z
                  ? (J.push(t), !0)
                  : "$RETRIEVING" == n
                    ? (g(57),
                      M(function () {
                        et(t, e);
                      }, 1e4),
                      !0)
                    : ((z = !0),
                      (n && "$" != n[0]) ||
                      (at("$RETRIEVING", 3e4), setTimeout(rt, 3e4), (n = "")),
                      !!nt(n, e) && (J.push(t), !0))
              : (g(68), !1);
      },
      nt = function (t, e, n) {
        if (!window.JSON) return g(58), !1;
        var r = R.XMLHttpRequest;
        if (!r) return g(59), !1;
        var a = new r();
        return "withCredentials" in a
          ? (a.open(
            "POST",
            (n || "https://ampcid.google.com/v1/publisher:getClientId") +
            "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",
            !0
          ),
            (a.withCredentials = !0),
            a.setRequestHeader("Content-Type", "text/plain"),
            (a.onload = function () {
              if (((z = !1), 4 == a.readyState)) {
                try {
                  200 != a.status && (g(61), ot("", "$ERROR", 3e4));
                  var r = JSON.parse(a.responseText);
                  r.optOut
                    ? (g(63), ot("", "$OPT_OUT", 31536e6))
                    : r.clientId
                      ? ot(r.clientId, r.securityToken, 31536e6)
                      : !n && r.alternateUrl
                        ? (K && clearTimeout(K), (z = !0), nt(t, e, r.alternateUrl))
                        : (g(64), ot("", "$NOT_FOUND", 36e5));
                } catch (t) {
                  g(65), ot("", "$ERROR", 3e4);
                }
                a = null;
              }
            }),
            (r = { originScope: "AMP_ECID_GOOGLE" }),
            t && (r.securityToken = t),
            a.send(JSON.stringify(r)),
            (K = M(function () {
              g(66), ot("", "$ERROR", 3e4);
            }, 1e4)),
            !0)
          : (g(60), !1);
      },
      rt = function () {
        z = !1;
      },
      at = function (t, e) {
        if (void 0 === X) {
          X = "";
          for (var n = kr(), r = 0; r < n.length; r++) {
            var a = n[r];
            if (q("AMP_TOKEN", encodeURIComponent(t), "/", a, "", e))
              return void (X = a);
          }
        }
        q("AMP_TOKEN", encodeURIComponent(t), "/", X, "", e);
      },
      ot = function (t, e, n) {
        for (
          K && clearTimeout(K), e && at(e, n), W = t, e = J, J = [], n = 0;
          n < e.length;
          n++
        )
          e[n](t);
      },
      it = function (t) {
        t: {
          if (Z.test(L.referrer)) {
            var e = L.location.hostname.replace(Y, "");
            e: {
              var n = L.referrer,
                r = (n = n.replace(/^https?:\/\//, ""))
                  .replace(/^[^/]+/, "")
                  .split("/"),
                a = r[2];
              if (
                !(r = (r = "s" == a ? r[3] : a) ? decodeURIComponent(r) : r)
              ) {
                if (0 == n.indexOf("xn--")) {
                  n = "";
                  break e;
                }
                (n = n.match(/(.*)\.cdn\.ampproject\.org\/?$/)) &&
                  2 == n.length &&
                  (r = n[1].replace(/-/g, ".").replace(/\.\./g, "-"));
              }
              n = r ? r.replace(Y, "") : "";
            }
            if (
              ((r = e === n) ||
                ((n = "." + n),
                  (r = e.substring(e.length - n.length, e.length) === n)),
                r)
            ) {
              e = !0;
              break t;
            }
            g(78);
          }
          e = !1;
        }
        return e && !1 !== t;
      },
      st = function (t) {
        return (
          (t || u || "https:" == L.location.protocol ? "https:" : "http:") +
          "//www.google-analytics.com"
        );
      },
      ct = function (t) {
        switch (t) {
          default:
          case 1:
            return "https://www.google-analytics.com/gtm/js?id=";
          case 2:
            return "https://www.googletagmanager.com/gtag/js?id=";
        }
      },
      ut = function (t) {
        (this.name = "len"), (this.message = t + "-8192");
      },
      lt = function (t, e, n) {
        if (((n = n || w), 2036 >= e.length)) ft(t, e, n);
        else {
          if (!(8192 >= e.length))
            throw (mt("len", e.length), new ut(e.length));
          vt(t, e, n) || ht(t, e, n) || ft(t, e, n);
        }
      },
      gt = function (t, e, n, r) {
        ht(t + "?" + e, "", (r = r || w), n);
      },
      ft = function (t, e, n) {
        var r = (function (t) {
          var e = L.createElement("img");
          return (e.width = 1), (e.height = 1), (e.src = t), e;
        })(t + "?" + e);
        r.onload = r.onerror = function () {
          (r.onload = null), (r.onerror = null), n();
        };
      },
      ht = function (t, e, n, r) {
        var a = R.XMLHttpRequest;
        if (!a) return !1;
        var o = new a();
        return (
          "withCredentials" in o &&
          ((t = t.replace(/^http:/, "https:")),
            o.open("POST", t, !0),
            (o.withCredentials = !0),
            o.setRequestHeader("Content-Type", "text/plain"),
            (o.onreadystatechange = function () {
              if (4 == o.readyState) {
                if (r && "text/plain" === o.getResponseHeader("Content-Type"))
                  try {
                    dt(r, o.responseText, n);
                  } catch (t) {
                    mt("xhr", "rsp"), n();
                  }
                else n();
                o = null;
              }
            }),
            o.send(e),
            !0)
        );
      },
      dt = function (t, e, n) {
        if (1 > e.length) mt("xhr", "ver", "0"), n();
        else if (3 < t.count++) mt("xhr", "tmr", "" + t.count), n();
        else {
          var r = e.charAt(0);
          if ("1" === r) pt(t, e.substring(1), n);
          else if (t.V && "2" === r) {
            var a = e.substring(1).split(","),
              o = 0;
            for (
              e = function () {
                ++o === a.length && n();
              },
              r = 0;
              r < a.length;
              r++
            )
              pt(t, a[r], e);
          } else mt("xhr", "ver", String(e.length)), n();
        }
      },
      pt = function (t, e, n) {
        if (0 === e.length) n();
        else {
          var r = e.charAt(0);
          switch (r) {
            case "d":
              gt("https://stats.g.doubleclick.net/j/collect", t.U, t, n);
              break;
            case "g":
              ft("https://www.google.com/ads/ga-audiences", t.google, n),
                (e = e.substring(1)) &&
                (/^[a-z.]{1,6}$/.test(e)
                  ? ft(
                    "https://www.google.%/ads/ga-audiences".replace("%", e),
                    t.google,
                    w
                  )
                  : mt("tld", "bcc", e));
              break;
            case "G":
              if (t.V) {
                t.V("G-" + e.substring(1)), n();
                break;
              }
            case "x":
              if (t.V) {
                t.V(), n();
                break;
              }
            default:
              mt("xhr", "brc", r), n();
          }
        }
      },
      vt = function (t, e, n) {
        return (
          !!R.navigator.sendBeacon &&
          !!R.navigator.sendBeacon(t, e) &&
          (n(), !0)
        );
      },
      mt = function (t, e, n) {
        1 <= 100 * Math.random() ||
          U("?") ||
          ((t = ["t=error", "_e=" + t, "_v=j96", "sr=1"]),
            e && t.push("_f=" + e),
            n && t.push("_m=" + b(n.substring(0, 100))),
            t.push("aip=1"),
            t.push("z=" + It()),
            ft(st(!0) + "/u/d", t.join("&"), w));
      },
      _t = function () {
        return (R.gaData = R.gaData || {});
      },
      wt = function (t) {
        var e = _t();
        return (e[t] = e[t] || {});
      },
      bt = function () {
        this.M = [];
      };
    function yt(e) {
      if (100 != e.get(Nn) && t(Mt(e, dn)) % 1e4 >= 100 * Pt(e, Nn))
        throw "abort";
    }
    function kt(t) {
      if (U(Mt(t, _n))) throw "abort";
    }
    function xt() {
      var t = L.location.protocol;
      if ("http:" != t && "https:" != t) throw "abort";
    }
    function Ot(t) {
      try {
        R.navigator.sendBeacon
          ? g(42)
          : R.XMLHttpRequest &&
          "withCredentials" in new R.XMLHttpRequest() &&
          g(40);
      } catch (t) { }
      t.set(Be, f(t), !0), t.set(ee, Pt(t, ee) + 1);
      var e = [];
      Ut.map(function (n, r) {
        r.F &&
          null != (n = t.get(n)) &&
          n != r.defaultValue &&
          ("boolean" == typeof n && (n *= 1), e.push(r.F + "=" + b("" + n)));
      }),
        !1 === t.get(nr) && e.push("npa=1"),
        e.push("z=" + Rt()),
        t.set(Jt, e.join("&"), !0);
    }
    function Tt(t) {
      var e = Mt(t, te);
      !e && t.get(Qt) && (e = "beacon");
      var n = Mt(t, Zn),
        r = Mt(t, qn),
        a = n || (r || st(!1) + "") + "/collect";
      "d" === Mt(t, tr)
        ? ((a = n || (r || st(!1) + "") + "/j/collect"),
          (e = t.get(Qn) || void 0),
          gt(a, Mt(t, Jt), e, t.Z(Yt)))
        : e
          ? ((n = Mt(t, Jt)),
            (r = (r = t.Z(Yt)) || w),
            "image" == e
              ? ft(a, n, r)
              : ("xhr" == e && ht(a, n, r)) ||
              ("beacon" == e && vt(a, n, r)) ||
              lt(a, n, r))
          : lt(a, Mt(t, Jt), t.Z(Yt)),
        (a = Mt(t, _n)),
        (e = (a = wt(a)).hitcount),
        (a.hitcount = e ? e + 1 : 1),
        a.first_hit || (a.first_hit = new Date().getTime()),
        (a = Mt(t, _n)),
        delete wt(a).pending_experiments,
        t.set(Yt, w, !0);
    }
    function St(t) {
      _t().expId && t.set(De, _t().expId),
        _t().expVar && t.set(Me, _t().expVar);
      var e = Mt(t, _n);
      if ((e = wt(e).pending_experiments)) {
        var n = [];
        for (r in e)
          e.hasOwnProperty(r) &&
            e[r] &&
            n.push(encodeURIComponent(r) + "." + encodeURIComponent(e[r]));
        var r = n.join("!");
      } else r = void 0;
      r && ((e = t.get(Pe)) && (r = e + "!" + r), t.set(Pe, r, !0));
    }
    function Ct() {
      if (R.navigator && "preview" == R.navigator.loadPurpose) throw "abort";
    }
    function Et(t) {
      var e = R.gaDevIds || [];
      if (p(e)) {
        var n = t.get("&did");
        v(n) && 0 < n.length && (e = e.concat(n.split(","))), (n = []);
        for (var r = 0; r < e.length; r++) j(n, e[r]) || n.push(e[r]);
        0 != n.length && t.set("&did", n.join(","), !0);
      }
    }
    function At(t) {
      if (!t.get(_n)) throw "abort";
    }
    function Nt(t) {
      try {
        if (!t.get(zn) && (t.set(zn, !0), !t.get("&gtm"))) {
          var e = void 0;
          if (
            (jt(S("gtm_debug")) && (e = 2),
              !e && m(L.referrer, "https://tagassistant.google.com/") && (e = 3),
              !e && j(L.cookie.split("; "), "__TAG_ASSISTANT=x") && (e = 4),
              e ||
              (jt(
                L.documentElement.getAttribute("data-tag-assistant-present")
              ) &&
                (e = 5)),
              e)
          ) {
            R["google.tagmanager.debugui2.queue"] ||
              ((R["google.tagmanager.debugui2.queue"] = []),
                T(
                  "https://www.google-analytics.com/debug/bootstrap?id=" +
                  t.get(_n) +
                  "&src=LEGACY&cond=" +
                  e
                ));
            var n = L.currentScript;
            R["google.tagmanager.debugui2.queue"].push({
              messageType: "LEGACY_CONTAINER_STARTING",
              data: { id: t.get(_n), scriptSource: (n && n.src) || "" },
            });
          }
        }
      } catch (t) { }
    }
    function jt(t) {
      if (null == t || 0 === t.length) return !1;
      t = Number(t);
      var e = Date.now();
      return t < e + 3e5 && t > e - 9e5;
    }
    (bt.prototype.add = function (t) {
      this.M.push(t);
    }),
      (bt.prototype.D = function (t) {
        try {
          for (var e = 0; e < this.M.length; e++) {
            var n = t.get(this.M[e]);
            n && d(n) && n.call(R, t);
          }
        } catch (t) { }
        (e = t.get(Yt)) != w && d(e) && (t.set(Yt, w, !0), setTimeout(e, 10));
      });
    var It = function () {
      return Math.round(2147483647 * Math.random());
    },
      Rt = function () {
        try {
          var t = new Uint32Array(1);
          return R.crypto.getRandomValues(t), 2147483647 & t[0];
        } catch (t) {
          return It();
        }
      };
    function Lt(t) {
      var e = Pt(t, qe);
      500 <= e && g(15);
      var n = Mt(t, Zt);
      if ("transaction" != n && "item" != n) {
        n = Pt(t, Ve);
        var r = new Date().getTime(),
          a = Pt(t, He);
        if (
          (0 == a && t.set(He, r),
            0 < (a = Math.round((2 * (r - a)) / 1e3)) &&
            ((n = Math.min(n + a, 20)), t.set(He, r)),
            0 >= n)
        )
          throw "abort";
        t.set(Ve, --n);
      }
      t.set(qe, ++e);
    }
    var Dt = function () {
      this.data = new I();
    };
    Dt.prototype.get = function (t) {
      var e = Ht(t),
        n = this.data.get(t);
      return (
        e &&
        null == n &&
        (n = d(e.defaultValue) ? e.defaultValue() : e.defaultValue),
        e && e.Z ? e.Z(this, t, n) : n
      );
    };
    var Mt = function (t, e) {
      return null == (t = t.get(e)) ? "" : "" + t;
    },
      Pt = function (t, e) {
        return null == (t = t.get(e)) || "" === t ? 0 : Number(t);
      };
    (Dt.prototype.Z = function (t) {
      return (t = this.get(t)) && d(t) ? t : w;
    }),
      (Dt.prototype.set = function (t, e, n) {
        if (t)
          if ("object" == typeof t)
            for (var r in t) t.hasOwnProperty(r) && $t(this, r, t[r], n);
          else $t(this, t, e, n);
      });
    var $t = function (t, e, n, r) {
      null != n && e === _n && oa.test(n);
      var a = Ht(e);
      a && a.o ? a.o(t, e, n, r) : t.data.set(e, n, r);
    },
      Ut = new I(),
      Gt = [],
      qt = function (t, e, n, r, a) {
        (this.name = t),
          (this.F = e),
          (this.Z = r),
          (this.o = a),
          (this.defaultValue = n);
      },
      Ht = function (t) {
        var e = Ut.get(t);
        if (!e)
          for (var n = 0; n < Gt.length; n++) {
            var r = Gt[n],
              a = r[0].exec(t);
            if (a) {
              (e = r[1](a)), Ut.set(e.name, e);
              break;
            }
          }
        return e;
      },
      Vt = function (t, e, n, r, a) {
        return (t = new qt(t, e, n, r, a)), Ut.set(t.name, t), t.name;
      },
      Ft = function (t, e) {
        Gt.push([new RegExp("^" + t + "$"), e]);
      },
      Bt = function (t, e, n) {
        return Vt(t, e, n, void 0, zt);
      },
      zt = function () { },
      Kt = Bt("apiVersion", "v"),
      Xt = Bt("clientVersion", "_v");
    Vt("anonymizeIp", "aip");
    var Wt = Vt("adSenseId", "a"),
      Zt = Vt("hitType", "t"),
      Yt = Vt("hitCallback"),
      Jt = Vt("hitPayload");
    Vt("nonInteraction", "ni"),
      Vt("currencyCode", "cu"),
      Vt("dataSource", "ds");
    var Qt = Vt("useBeacon", void 0, !1),
      te = Vt("transport");
    Vt("sessionControl", "sc", ""),
      Vt("sessionGroup", "sg"),
      Vt("queueTime", "qt");
    var ee = Vt("_s", "_s");
    Vt("screenName", "cd");
    var ne = Vt("location", "dl", ""),
      re = Vt("referrer", "dr"),
      ae = Vt("page", "dp", "");
    Vt("hostname", "dh");
    var oe = Vt("language", "ul"),
      ie = Vt("encoding", "de");
    Vt("title", "dt", function () {
      return L.title || void 0;
    }),
      Ft("contentGroup([0-9]+)", function (t) {
        return new qt(t[0], "cg" + t[1]);
      });
    var se = Vt("screenColors", "sd"),
      ce = Vt("screenResolution", "sr"),
      ue = Vt("viewportSize", "vp"),
      le = Vt("javaEnabled", "je"),
      ge = Vt("flashVersion", "fl");
    Vt("campaignId", "ci"),
      Vt("campaignName", "cn"),
      Vt("campaignSource", "cs"),
      Vt("campaignMedium", "cm"),
      Vt("campaignKeyword", "ck"),
      Vt("campaignContent", "cc");
    var fe = Vt("eventCategory", "ec"),
      he = Vt("eventAction", "ea"),
      de = Vt("eventLabel", "el"),
      pe = Vt("eventValue", "ev"),
      ve = Vt("socialNetwork", "sn"),
      me = Vt("socialAction", "sa"),
      _e = Vt("socialTarget", "st"),
      we = Vt("l1", "plt"),
      be = Vt("l2", "pdt"),
      ye = Vt("l3", "dns"),
      ke = Vt("l4", "rrt"),
      xe = Vt("l5", "srt"),
      Oe = Vt("l6", "tcp"),
      Te = Vt("l7", "dit"),
      Se = Vt("l8", "clt"),
      Ce = Vt("l9", "_gst"),
      Ee = Vt("l10", "_gbt"),
      Ae = Vt("l11", "_cst"),
      Ne = Vt("l12", "_cbt"),
      je = Vt("timingCategory", "utc"),
      Ie = Vt("timingVar", "utv"),
      Re = Vt("timingLabel", "utl"),
      Le = Vt("timingValue", "utt");
    Vt("appName", "an"),
      Vt("appVersion", "av", ""),
      Vt("appId", "aid", ""),
      Vt("appInstallerId", "aiid", ""),
      Vt("exDescription", "exd"),
      Vt("exFatal", "exf");
    var De = Vt("expId", "xid"),
      Me = Vt("expVar", "xvar"),
      Pe = Vt("exp", "exp"),
      $e = Vt("_utma", "_utma"),
      Ue = Vt("_utmz", "_utmz"),
      Ge = Vt("_utmht", "_utmht"),
      qe = Vt("_hc", void 0, 0),
      He = Vt("_ti", void 0, 0),
      Ve = Vt("_to", void 0, 20);
    Ft("dimension([0-9]+)", function (t) {
      return new qt(t[0], "cd" + t[1]);
    }),
      Ft("metric([0-9]+)", function (t) {
        return new qt(t[0], "cm" + t[1]);
      }),
      Vt(
        "linkerParam",
        void 0,
        void 0,
        function (t) {
          if (t.get(Fe)) return g(35), Nr.generate(Gr(t));
          var e = Mt(t, dn),
            n = Mt(t, Rn) || "";
          return (
            (e = "_ga=2." + b(Lr(n + e, 0) + "." + n + "-" + e)),
            (t = qr(t))
              ? (g(44),
                (t =
                  "&_gac=1." + b([Lr(t.qa, 0), t.timestamp, t.qa].join("."))))
              : (t = ""),
            e + t
          );
        },
        zt
      );
    var Fe = Bt("_cd2l", void 0, !1),
      Be = Vt("usage", "_u"),
      ze = Vt("_um");
    Vt(
      "forceSSL",
      void 0,
      void 0,
      function () {
        return u;
      },
      function (t, e, n) {
        g(34), (u = !!n);
      }
    );
    var Ke = Vt("_j1", "jid"),
      Xe = Vt("_j2", "gjid");
    Ft("\\&(.*)", function (t) {
      var e = new qt(t[0], t[1]),
        n = (function (t) {
          var e;
          return (
            Ut.map(function (n, r) {
              r.F == t && (e = r);
            }),
            e && e.name
          );
        })(t[0].substring(1));
      return (
        n &&
        ((e.Z = function (t) {
          return t.get(n);
        }),
          (e.o = function (t, e, r, a) {
            t.set(n, r, a);
          }),
          (e.F = void 0)),
        e
      );
    });
    var We = Bt("_oot"),
      Ze = Vt("previewTask"),
      Ye = Vt("checkProtocolTask"),
      Je = Vt("validationTask"),
      Qe = Vt("checkStorageTask"),
      tn = Vt("historyImportTask"),
      en = Vt("samplerTask"),
      nn = Vt("_rlt"),
      rn = Vt("buildHitTask"),
      an = Vt("sendHitTask"),
      on = Vt("ceTask"),
      sn = Vt("devIdTask"),
      cn = Vt("timingTask"),
      un = Vt("displayFeaturesTask"),
      ln = Vt("customTask"),
      gn = Vt("fpsCrossDomainTask"),
      fn = Bt("_cta"),
      hn = Bt("name"),
      dn = Bt("clientId", "cid"),
      pn = Bt("clientIdTime"),
      vn = Bt("storedClientId"),
      mn = Vt("userId", "uid"),
      _n = Bt("trackingId", "tid"),
      wn = Bt("cookieName", void 0, "_ga"),
      bn = Bt("cookieDomain"),
      yn = Bt("cookiePath", void 0, "/"),
      kn = Bt("cookieExpires", void 0, 63072e3),
      xn = Bt("cookieUpdate", void 0, !0),
      On = Bt("cookieFlags", void 0, ""),
      Tn = Bt("legacyCookieDomain"),
      Sn = Bt("legacyHistoryImport", void 0, !0),
      Cn = Bt("storage", void 0, "cookie"),
      En = Bt("allowLinker", void 0, !1),
      An = Bt("allowAnchor", void 0, !0),
      Nn = Bt("sampleRate", "sf", 100),
      jn = Bt("siteSpeedSampleRate", void 0, 1),
      In = Bt("alwaysSendReferrer", void 0, !1),
      Rn = Bt("_gid", "_gid"),
      Ln = Bt("_gcn"),
      Dn = Bt("useAmpClientId"),
      Mn = Bt("_gclid"),
      Pn = Bt("_gt"),
      $n = Bt("_ge", void 0, 7776e6),
      Un = Bt("_gclsrc"),
      Gn = Bt("storeGac", void 0, !0),
      qn = Vt("_x_19"),
      Hn = Vt("_fplc", "_fplc"),
      Vn = Bt("_cs"),
      Fn = Bt("_useUp", void 0, !1),
      Bn = Vt("up", "up"),
      zn = Vt("_tac", void 0, !1),
      Kn = Bt("_gbraid"),
      Xn = Bt("_gbt"),
      Wn = Bt("_gbe", void 0, 7776e6),
      Zn = Vt("transportUrl"),
      Yn = Vt("_r", "_r"),
      Jn = Vt("_slc", "_slc"),
      Qn = Vt("_dp"),
      tr = Vt("_jt", void 0, "n"),
      er = Vt("allowAdFeatures", void 0, !0),
      nr = Vt("allowAdPersonalizationSignals", void 0, !0);
    function rr(t, e, n, r) {
      e[t] = function () {
        try {
          return r && g(r), n.apply(this, arguments);
        } catch (e) {
          throw (mt("exc", t, e && e.name), e);
        }
      };
    }
    var ar = function (t) {
      if ("cookie" == t.get(Cn))
        return 0 < (t = G("FPLC")).length ? t[0] : void 0;
    },
      or = function (t) {
        var e;
        (e = Mt(t, qn) && t.get(Fe)) &&
          (e = !((e = Nr.get(t.get(An))) && e._fplc)),
          e && !ar(t) && t.set(Hn, "0");
      },
      ir = function (t) {
        var e = {};
        if (sr(e) || cr(e)) {
          var n = e[we];
          null == n ||
            1 / 0 == n ||
            isNaN(n) ||
            (0 < n
              ? (ur(e, ye),
                ur(e, Oe),
                ur(e, xe),
                ur(e, be),
                ur(e, ke),
                ur(e, Te),
                ur(e, Se),
                ur(e, Ce),
                ur(e, Ee),
                ur(e, Ae),
                ur(e, Ne),
                M(function () {
                  t(e);
                }, 10))
              : y(
                R,
                "load",
                function () {
                  ir(t);
                },
                !1
              ));
        }
      },
      sr = function (t) {
        var e = R.performance || R.webkitPerformance;
        if (!(e = e && e.timing)) return !1;
        var n = e.navigationStart;
        return (
          0 != n &&
          ((t[we] = e.loadEventStart - n),
            (t[ye] = e.domainLookupEnd - e.domainLookupStart),
            (t[Oe] = e.connectEnd - e.connectStart),
            (t[xe] = e.responseStart - e.requestStart),
            (t[be] = e.responseEnd - e.responseStart),
            (t[ke] = e.fetchStart - n),
            (t[Te] = e.domInteractive - n),
            (t[Se] = e.domContentLoadedEventStart - n),
            (t[Ce] = Aa.L - n),
            (t[Ee] = Aa.ya - n),
            R.google_tag_manager &&
            R.google_tag_manager._li &&
            ((e = R.google_tag_manager._li), (t[Ae] = e.cst), (t[Ne] = e.cbt)),
            !0)
        );
      },
      cr = function (t) {
        if (R.top != R) return !1;
        var e = R.external,
          n = e && e.onloadT;
        return (
          e && !e.isValidLoadTime && (n = void 0),
          2147483648 < n && (n = void 0),
          0 < n && e.setPageReadyTime(),
          null != n && ((t[we] = n), !0)
        );
      },
      ur = function (t, e) {
        var n = t[e];
        (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0);
      },
      lr = function (e) {
        return function (n) {
          if ("pageview" == n.get(Zt) && !e.I) {
            e.I = !0;
            var r = (function (e) {
              var n = Math.min(Pt(e, jn), 100);
              return !(t(Mt(e, dn)) % 100 >= n);
            })(n),
              a = 0 < C(Mt(n, ne), "gclid").length,
              o = 0 < C(Mt(n, ne), "wbraid").length;
            (r || a || o) &&
              ir(function (t) {
                r && e.send("timing", t), (a || o) && e.send("adtiming", t);
              });
          }
        };
      },
      gr = !1,
      fr = function (t) {
        if ("cookie" == Mt(t, Cn)) {
          if (t.get(xn) || Mt(t, vn) != Mt(t, dn)) {
            var e = 1e3 * Pt(t, kn);
            hr(t, dn, wn, e), t.data.set(vn, Mt(t, dn));
          }
          if (
            ((t.get(xn) || dr(t) != Mt(t, Rn)) && hr(t, Rn, Ln, 864e5),
              t.get(Gn))
          ) {
            if ((e = Mt(t, Mn))) {
              var n = Math.min(Pt(t, $n), 1e3 * Pt(t, kn));
              (n =
                0 === n
                  ? 0
                  : Math.min(n, 1e3 * Pt(t, Pn) + n - new Date().getTime())),
                t.data.set($n, n);
              var r = {},
                a = Mt(t, Pn),
                o = Mt(t, Un),
                i = xr(Mt(t, yn)),
                s = yr(Mt(t, bn)),
                c = Mt(t, _n),
                u = Mt(t, On);
              o && "aw.ds" != o
                ? r && (r.ua = !0)
                : ((e = ["1", a, H(e)].join(".")),
                  0 <= n &&
                  (r && (r.ta = !0), q("_gac_" + H(c), e, i, s, c, n, u))),
                Tr(r);
            }
          } else g(75);
          t.get(Gn) &&
            (e = Mt(t, Kn)) &&
            ((n =
              0 === (n = Math.min(Pt(t, Wn), 1e3 * Pt(t, kn)))
                ? 0
                : Math.min(n, 1e3 * Pt(t, Xn) + n - new Date().getTime())),
              t.data.set(Wn, n),
              (r = {}),
              (u = Mt(t, Xn)),
              (i = xr(Mt(t, yn))),
              (s = yr(Mt(t, bn))),
              (c = Mt(t, _n)),
              (t = Mt(t, On)),
              (e = ["1", u, H(e)].join(".")),
              0 <= n &&
              (r && (r.ta = !0), q("_gac_gb_" + H(c), e, i, s, c, n, t)),
              Sr(r));
        }
      },
      hr = function (t, e, n, r) {
        var a = mr(t, e);
        if (a) {
          n = Mt(t, n);
          var o = xr(Mt(t, yn)),
            i = yr(Mt(t, bn)),
            s = Mt(t, On),
            c = Mt(t, _n);
          if ("auto" != i) q(n, a, o, i, c, r, s) && (gr = !0);
          else {
            g(32);
            for (var u = kr(), l = 0; l < u.length; l++)
              if (
                ((i = u[l]),
                  t.data.set(bn, i),
                  (a = mr(t, e)),
                  q(n, a, o, i, c, r, s))
              )
                return void (gr = !0);
            t.data.set(bn, "auto");
          }
        }
      },
      dr = function (t) {
        var e = G(Mt(t, Ln));
        return _r(t, e);
      },
      pr = function (t) {
        if ("cookie" == Mt(t, Cn) && !gr && (fr(t), !gr)) throw "abort";
      },
      vr = function (t) {
        if (t.get(Sn)) {
          var e = Mt(t, bn),
            n = Mt(t, Tn) || E(),
            r = Cr("__utma", n, e);
          r &&
            (g(19),
              t.set(Ge, new Date().getTime(), !0),
              t.set($e, r.R),
              (e = Cr("__utmz", n, e)) && r.hash == e.hash && t.set(Ue, e.R));
        }
      },
      mr = function (t, e) {
        e = H(Mt(t, e));
        var n = yr(Mt(t, bn)).split(".").length;
        return (
          1 < (t = Or(Mt(t, yn))) && (n += "-" + t),
          e ? ["GA1", n, e].join(".") : ""
        );
      },
      _r = function (t, e) {
        return wr(e, Mt(t, bn), Mt(t, yn));
      },
      wr = function (t, e, n) {
        if (!t || 1 > t.length) g(12);
        else {
          for (var r = [], a = 0; a < t.length; a++) {
            var o = t[a],
              i = o.split("."),
              s = i.shift();
            ("GA1" == s || "1" == s) && 1 < i.length
              ? (1 == (o = i.shift().split("-")).length && (o[1] = "1"),
                (o[0] *= 1),
                (o[1] *= 1),
                (i = { H: o, s: i.join(".") }))
              : (i = c.test(o) ? { H: [0, 0], s: o } : void 0),
              i && r.push(i);
          }
          if (1 == r.length) return g(13), r[0].s;
          if (0 != r.length)
            return (
              g(14),
              1 == (r = br(r, yr(e).split(".").length, 0)).length
                ? r[0].s
                : (1 < (r = br(r, Or(n), 1)).length && g(41), r[0] && r[0].s)
            );
          g(12);
        }
      },
      br = function (t, e, n) {
        for (var r, a = [], o = [], i = 0; i < t.length; i++) {
          var s = t[i];
          s.H[n] == e
            ? a.push(s)
            : null == r || s.H[n] < r
              ? ((o = [s]), (r = s.H[n]))
              : s.H[n] == r && o.push(s);
        }
        return 0 < a.length ? a : o;
      },
      yr = function (t) {
        return 0 == t.indexOf(".") ? t.substr(1) : t;
      },
      kr = function () {
        var t = [],
          e = E().split(".");
        if (4 == e.length) {
          var n = e[e.length - 1];
          if (parseInt(n, 10) == n) return ["none"];
        }
        for (n = e.length - 2; 0 <= n; n--) t.push(e.slice(n).join("."));
        return (
          (e = L.location.hostname), F.test(e) || V.test(e) || t.push("none"), t
        );
      },
      xr = function (t) {
        return t
          ? (1 < t.length &&
            t.lastIndexOf("/") == t.length - 1 &&
            (t = t.substr(0, t.length - 1)),
            0 != t.indexOf("/") && (t = "/" + t),
            t)
          : "/";
      },
      Or = function (t) {
        return "/" == (t = xr(t)) ? 1 : t.split("/").length;
      },
      Tr = function (t) {
        t.ta && g(77), t.na && g(74), t.pa && g(73), t.ua && g(69);
      },
      Sr = function (t) {
        t.ta && g(85), t.na && g(86), t.pa && g(87);
      };
    function Cr(t, e, n) {
      "none" == e && (e = "");
      var r = [],
        a = G(t);
      t = "__utma" == t ? 6 : 2;
      for (var o = 0; o < a.length; o++) {
        var i = ("" + a[o]).split(".");
        i.length >= t && r.push({ hash: i[0], R: a[o], O: i });
      }
      if (0 != r.length)
        return 1 == r.length
          ? r[0]
          : Er(e, r) || Er(n, r) || Er(null, r) || r[0];
    }
    function Er(e, n) {
      if (null == e) var r = (e = 1);
      else (r = t(e)), (e = t(m(e, ".") ? e.substring(1) : "." + e));
      for (var a = 0; a < n.length; a++)
        if (n[a].hash == r || n[a].hash == e) return n[a];
    }
    var Ar = new RegExp(/^https?:\/\/([^\/:]+)/),
      Nr = R.google_tag_data.glBridge,
      jr = RegExp("(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)"),
      Ir = RegExp("(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)");
    function Rr(e, n) {
      var r = new Date(),
        a = R.navigator,
        o = a.plugins || [];
      for (
        e = [
          e,
          a.userAgent,
          r.getTimezoneOffset(),
          r.getYear(),
          r.getDate(),
          r.getHours(),
          r.getMinutes() + n,
        ],
        n = 0;
        n < o.length;
        ++n
      )
        e.push(o[n].description);
      return t(e.join("."));
    }
    function Lr(e, n) {
      var r = new Date(),
        a = R.navigator,
        o = r.getHours() + Math.floor((r.getMinutes() + n) / 60);
      return t(
        [
          e,
          a.userAgent,
          a.language || "",
          r.getTimezoneOffset(),
          r.getYear(),
          r.getDate() + Math.floor(o / 24),
          (24 + o) % 24,
          (60 + r.getMinutes() + n) % 60,
        ].join(".")
      );
    }
    var Dr = function (t) {
      g(48), (this.target = t), (this.T = !1);
    };
    Dr.prototype.ca = function (t, e) {
      if (t) {
        if (this.target.get(Fe)) return Nr.decorate(Gr(this.target), t, e);
        if (t.tagName) {
          if ("a" == t.tagName.toLowerCase())
            return void (t.href && (t.href = Mr(this, t.href, e)));
          if ("form" == t.tagName.toLowerCase()) return Pr(this, t);
        }
        if ("string" == typeof t) return Mr(this, t, e);
      }
    };
    var Mr = function (t, e, n) {
      var r = jr.exec(e);
      r && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : "")),
        (r = Ir.exec(e)) &&
        3 <= r.length &&
        (e = r[1] + (r[3] ? r[2] + r[3] : "")),
        (t = t.target.get("linkerParam")),
        (r = e.indexOf("?"));
      var a = e.indexOf("#");
      return (e = (e = n
        ? e + (-1 == a ? "#" : "&") + t
        : -1 == a
          ? e + (-1 === r ? "?" : "&") + t
          : e.substring(0, a) +
          (-1 === r || r > a ? "?" : "&") +
          t +
          e.substring(a)).replace(/&+_ga=/, "&_ga=")).replace(
            RegExp("&+_gac="),
            "&_gac="
          );
    },
      Pr = function (t, e) {
        if (e && e.action)
          if ("get" == e.method.toLowerCase()) {
            t = t.target.get("linkerParam").split("&");
            for (var n = 0; n < t.length; n++) {
              var r = t[n].split("="),
                a = r[1];
              r = r[0];
              for (var o = e.childNodes || [], i = !1, s = 0; s < o.length; s++)
                if (o[s].name == r) {
                  o[s].setAttribute("value", a), (i = !0);
                  break;
                }
              i ||
                ((o = L.createElement("input")).setAttribute("type", "hidden"),
                  o.setAttribute("name", r),
                  o.setAttribute("value", a),
                  e.appendChild(o));
            }
          } else
            "post" == e.method.toLowerCase() && (e.action = Mr(t, e.action));
      };
    function $r(t, e) {
      if (e == L.location.hostname) return !1;
      for (var n = 0; n < t.length; n++)
        if (t[n] instanceof RegExp) {
          if (t[n].test(e)) return !0;
        } else if (0 <= e.indexOf(t[n])) return !0;
      return !1;
    }
    function Ur(t, e) {
      return (
        e != Rr(t, 0) &&
        e != Rr(t, -1) &&
        e != Rr(t, -2) &&
        e != Lr(t, 0) &&
        e != Lr(t, -1) &&
        e != Lr(t, -2)
      );
    }
    function Gr(t) {
      var e = qr(t),
        n = {};
      return (
        (n._ga = t.get(dn)),
        (n._gid = t.get(Rn) || void 0),
        (n._gac = e ? [e.qa, e.timestamp].join(".") : void 0),
        (e = t.get(Hn)),
        (t = ar(t)),
        (n._fplc = e && "0" !== e ? e : t),
        n
      );
    }
    function qr(t) {
      function e(t) {
        return null == t || "" === t ? 0 : Number(t);
      }
      var n = t.get(Mn);
      if (n && t.get(Gn)) {
        var r = e(t.get(Pn));
        if (!(1e3 * r + e(t.get($n)) <= new Date().getTime()))
          return { timestamp: r, qa: n };
        g(76);
      }
    }
    (Dr.prototype.S = function (t, e, n) {
      function r(n) {
        try {
          n = n || R.event;
          t: {
            var r = n.target || n.srcElement;
            for (n = 100; r && 0 < n;) {
              if (r.href && r.nodeName.match(/^a(?:rea)?$/i)) {
                var o = r;
                break t;
              }
              (r = r.parentNode), n--;
            }
            o = {};
          }
          ("http:" == o.protocol || "https:" == o.protocol) &&
            $r(t, o.hostname || "") &&
            o.href &&
            (o.href = Mr(a, o.href, e));
        } catch (t) {
          g(26);
        }
      }
      var a = this;
      this.target.get(Fe)
        ? Nr.auto(
          function () {
            return Gr(a.target);
          },
          t,
          e ? "fragment" : "",
          n
        )
        : (this.T ||
          ((this.T = !0), y(L, "mousedown", r, !1), y(L, "keyup", r, !1)),
          n &&
          y(L, "submit", function (e) {
            if ((e = (e = e || R.event).target || e.srcElement) && e.action) {
              var n = e.action.match(Ar);
              n && $r(t, n[1]) && Pr(a, e);
            }
          }));
    }),
      (Dr.prototype.$ = function (t) {
        if (t) {
          var e = this,
            n = e.target.get(Vn);
          void 0 !== n &&
            Nr.passthrough(
              function () {
                if (n("analytics_storage")) return {};
                var t = {};
                return (t._ga = e.target.get(dn)), (t._up = "1"), t;
              },
              1,
              !0
            );
        }
      });
    var Hr = /^(GTM|OPT)-[A-Z0-9]+$/,
      Vr = /^G-[A-Z0-9]+$/,
      Fr = /;_gaexp=[^;]*/g,
      Br = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
      zr =
        /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
      Kr = function (t, e, n, r) {
        n = n || {};
        var a = 1;
        Vr.test(e) && (a = 2);
        var o = { id: e, type: a, B: n.dataLayer || "dataLayer", G: !1 },
          i = void 0;
        return (
          t.get("&gtm") == e && (o.G = !0),
          1 === a
            ? ((o.ia = !!t.get("anonymizeIp")),
              (o.sync = r),
              "t0" != (e = String(t.get("name"))) && (o.target = e),
              U(String(t.get("trackingId"))) ||
              ((o.clientId = String(t.get(dn))),
                (o.ka = Number(t.get(pn))),
                (n = n.palindrome ? Br : Fr),
                (n = (n = L.cookie.replace(/^|(; +)/g, ";").match(n))
                  ? n.sort().join("").substring(1)
                  : void 0),
                (o.la = n),
                (o.qa = C(Mt(t, ne), "gclid"))))
            : 2 === a &&
            ((o.context = "c"),
              (i = {
                allow_google_signals: t.get(er),
                allow_ad_personalization_signals: t.get(nr),
              })),
          (function (t, e) {
            var n = new Date().getTime();
            (R[t.B] = R[t.B] || []),
              (n = { "gtm.start": n }),
              t.sync || (n.event = "gtm.js"),
              R[t.B].push(n),
              2 === t.type &&
              (function (e, n, r) {
                R[t.B].push(arguments);
              })("config", t.id, e);
          })(o, i),
          (function (t) {
            function e(t, e) {
              e && (n += "&" + t + "=" + b(e));
            }
            var n = ct(t.type) + b(t.id);
            return (
              "dataLayer" != t.B && e("l", t.B),
              e("cx", t.context),
              e("t", t.target),
              e("cid", t.clientId),
              e("cidt", t.ka),
              e("gac", t.la),
              e("aip", t.ia),
              t.sync && e("m", "sync"),
              e("cycle", t.G),
              t.qa && e("gclid", t.qa),
              zr.test(L.referrer) && e("cb", String(It())),
              n
            );
          })(o)
        );
      },
      Xr = {},
      Wr = function (t, e) {
        e ||
          (e =
            (e = Mt(t, hn)) && "t0" != e
              ? na.test(e)
                ? "_gat_" + H(Mt(t, _n))
                : "_gat_" + H(e)
              : "_gat"),
          (this.Y = e);
      },
      Zr = function (t, e, n) {
        !1 === e.get(er) ||
          e.get(n) ||
          ("1" == G(t.Y)[0] ? e.set(n, "", !0) : e.set(n, "" + It(), !0));
      },
      Yr = function (t, e) {
        Jr(e) && q(t.Y, "1", Mt(e, yn), Mt(e, bn), Mt(e, _n), 6e4, Mt(e, On));
      },
      Jr = function (t) {
        return !!t.get(Ke) && !1 !== t.get(er);
      },
      Qr = function (t) {
        return (
          !Xr[Mt(t, _n)] &&
          void 0 === t.get("&gtm") &&
          void 0 === t.get(te) &&
          void 0 === t.get(Zn) &&
          void 0 === t.get(qn)
        );
      },
      ta = function (t, e) {
        var n = new I(),
          r = function (e) {
            Ht(e).F && n.set(Ht(e).F, t.get(e));
          };
        r(Kt),
          r(Xt),
          r(_n),
          r(dn),
          r(Ke),
          1 == e && (r(mn), r(Xe), r(Rn)),
          !1 === t.get(nr) && n.set("npa", "1"),
          n.set(Ht(Be).F, f(t));
        var a = "";
        return (
          n.map(function (t, e) {
            (a += b(t) + "="), (a += b("" + e) + "&");
          }),
          (a += "z=" + It()),
          1 == e
            ? (a = "t=dc&aip=1&_r=3&" + a)
            : 2 == e && (a = "t=sr&aip=1&_r=4&slf_rd=1&" + a),
          a
        );
      },
      ea = function (t) {
        if (Qr(t))
          return (
            (Xr[Mt(t, _n)] = !0),
            function (e) {
              if (e && !Xr[e]) {
                var n = Kr(t, e);
                T(n), (Xr[e] = !0);
              }
            }
          );
      },
      na = /^gtm\d+$/,
      ra = function (t, n) {
        if (!(t = t.model).get("dcLoaded")) {
          var r,
            a = new e(h(t));
          a.set(29),
            t.set(ze, a.C),
            (n = n || {})[wn] && (r = H(n[wn])),
            (function (t, e) {
              var n = e.get(rn);
              e.set(rn, function (e) {
                Zr(t, e, Ke), Zr(t, e, Xe);
                var r = n(e);
                return Yr(t, e), r;
              });
              var r = e.get(an);
              e.set(an, function (t) {
                var e = r(t);
                if (Jr(t)) {
                  g(80);
                  var n = { U: ta(t, 1), google: ta(t, 2), count: 0 };
                  gt("https://stats.g.doubleclick.net/j/collect", n.U, n),
                    t.set(Ke, "", !0);
                }
                return e;
              });
            })((n = new Wr(t, r)), t),
            t.set("dcLoaded", !0);
        }
      },
      aa = function (t) {
        if (!t.get("dcLoaded") && "cookie" == t.get(Cn)) {
          var e = new Wr(t);
          Zr(e, t, Ke), Zr(e, t, Xe), Yr(e, t), (e = Jr(t));
          var n = Qr(t);
          e && t.set(Yn, 1, !0),
            n && t.set(Jn, 1, !0),
            (e || n) &&
            (t.set(tr, "d", !0),
              g(79),
              t.set(
                Qn,
                { U: ta(t, 1), google: ta(t, 2), V: ea(t), count: 0 },
                !0
              ));
        }
      },
      oa = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
      ia = function (t) {
        function e(t, e) {
          r.model.data.set(t, e);
        }
        function n(t, n) {
          e(t, n), r.filters.add(t);
        }
        var r = this;
        (this.model = new Dt()),
          (this.filters = new bt()),
          e(hn, t[hn]),
          e(
            _n,
            (function (t) {
              return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
            })(t[_n])
          ),
          e(wn, t[wn]),
          e(bn, t[bn] || E()),
          e(yn, t[yn]),
          e(kn, t[kn]),
          e(xn, t[xn]),
          e(On, t[On]),
          e(Tn, t[Tn]),
          e(Sn, t[Sn]),
          e(En, t[En]),
          e(An, t[An]),
          e(Nn, t[Nn]),
          e(jn, t[jn]),
          e(In, t[In]),
          e(Cn, t[Cn]),
          e(mn, t[mn]),
          e(pn, t[pn]),
          e(Dn, t[Dn]),
          e(Gn, t[Gn]),
          e(Fe, t[Fe]),
          e(qn, t[qn]),
          e(Fn, t[Fn]),
          e(Vn, t[Vn]),
          e(Kt, 1),
          e(Xt, "j96"),
          n(fn, Nt),
          n(We, kt),
          n(ln, w),
          n(Ze, Ct),
          n(Ye, xt),
          n(Je, At),
          n(Qe, pr),
          n(tn, vr),
          n(en, yt),
          n(nn, Lt),
          n(on, St),
          n(sn, Et),
          n(un, aa),
          n(gn, or),
          n(rn, Ot),
          n(an, Tt),
          n(cn, lr(this)),
          fa(this.model),
          ga(this.model, t[dn]),
          this.model.set(
            Wt,
            (function () {
              var t = (R.gaGlobal = R.gaGlobal || {});
              return (t.hid = t.hid || It());
            })()
          );
      };
    (ia.prototype.get = function (t) {
      return this.model.get(t);
    }),
      (ia.prototype.set = function (t, e) {
        this.model.set(t, e);
      }),
      (ia.prototype.send = function (t) {
        if (!(1 > arguments.length)) {
          if ("string" == typeof arguments[0])
            var e = arguments[0],
              n = [].slice.call(arguments, 1);
          else (e = arguments[0] && arguments[0][Zt]), (n = arguments);
          e &&
            (((n = N(ha[e] || [], n))[Zt] = e),
              this.model.set(n, void 0, !0),
              this.filters.D(this.model),
              (this.model.data.m = {}));
        }
      }),
      (ia.prototype.ma = function (t, e) {
        var n = this;
        wa(t, n, e) ||
          (ya(t, function () {
            wa(t, n, e);
          }),
            ba(String(n.get(hn)), t, void 0, e, !0));
      });
    var sa,
      ca,
      ua,
      la,
      ga = function (t, e) {
        var n = Mt(t, wn);
        if (
          (t.data.set(Ln, "_ga" == n ? "_gid" : n + "_gid"),
            "cookie" == Mt(t, Cn))
        ) {
          if (((gr = !1), (n = G(Mt(t, wn))), !(n = _r(t, n)))) {
            n = Mt(t, bn);
            var r = Mt(t, Tn) || E();
            null != (n = Cr("__utma", r, n))
              ? (g(10), (n = n.O[1] + "." + n.O[2]))
              : (n = void 0);
          }
          if ((n && (gr = !0), (r = n && !t.get(xn))))
            if (2 != (r = n.split(".")).length) r = !1;
            else if ((r = Number(r[1]))) {
              var a = Pt(t, kn);
              r = r + a < new Date().getTime() / 1e3;
            } else r = !1;
          r && (n = void 0),
            n &&
            (t.data.set(vn, n),
              t.data.set(dn, n),
              (n = dr(t)) && t.data.set(Rn, n)),
            t.get(Gn) &&
            ((n = t.get(Mn)), (r = t.get(Un)), !n || (r && "aw.ds" != r)) &&
            ((n = {}),
              (r = (L ? B(n) : {})[Mt(t, _n)]),
              Tr(n),
              r &&
              0 != r.length &&
              ((n = r[0]),
                t.data.set(Pn, n.timestamp / 1e3),
                t.data.set(Mn, n.qa))),
            t.get(Gn) &&
            ((n = t.get(Kn)),
              (r = {}),
              (a = (L ? B(r, "_gac_gb", !0) : {})[Mt(t, _n)]),
              Sr(r),
              a &&
              0 != a.length &&
              ((a = (r = a[0]).qa),
                (n && n !== a) ||
                (r.labels &&
                  r.labels.length &&
                  (a += "." + r.labels.join(".")),
                  t.data.set(Xn, r.timestamp / 1e3),
                  t.data.set(Kn, a))));
        }
        if (t.get(xn)) {
          n = S("_ga", !!t.get(An));
          var o = S("_gl", !!t.get(An));
          if (
            ((a = (r = Nr.get(t.get(An)))._ga),
              o && 0 < o.indexOf("_ga*") && !a && g(30),
              e || !t.get(Fn))
          )
            o = !1;
          else if (void 0 === (o = t.get(Vn)) || o("analytics_storage")) o = !1;
          else {
            if ((g(84), t.data.set(Bn, 1), (o = r._up)))
              if ((o = Ar.exec(L.referrer))) {
                o = o[1];
                var i = L.location.hostname;
                o =
                  i === o || 0 <= i.indexOf("." + o) || 0 <= o.indexOf("." + i);
              } else o = !1;
            o = !!o;
          }
          i = r.gclid;
          var c = r._gac;
          if (n || a || i || c)
            if ((n && a && g(36), t.get(En) || it(t.get(Dn)) || o)) {
              if (
                (a &&
                  (g(38),
                    t.data.set(dn, a),
                    r._gid && (g(51), t.data.set(Rn, r._gid))),
                  i
                    ? (g(82),
                      t.data.set(Mn, i),
                      r.gclsrc && t.data.set(Un, r.gclsrc))
                    : c &&
                    (a = c.split(".")) &&
                    2 === a.length &&
                    (g(37), t.data.set(Mn, a[0]), t.data.set(Pn, a[1])),
                  (r = r._fplc) && Mt(t, qn) && (g(83), t.data.set(Hn, r)),
                  n)
              )
                t: if (((r = n.indexOf(".")), -1 == r)) g(22);
                else {
                  if (
                    ((a = n.substring(0, r)),
                      (r = (o = n.substring(r + 1)).indexOf(".")),
                      (n = o.substring(0, r)),
                      (o = o.substring(r + 1)),
                      "1" == a)
                  ) {
                    if (Ur((r = o), n)) {
                      g(23);
                      break t;
                    }
                  } else {
                    if ("2" != a) {
                      g(22);
                      break t;
                    }
                    if (
                      ((a = ""),
                        0 < (r = o.indexOf("-"))
                          ? ((a = o.substring(0, r)), (r = o.substring(r + 1)))
                          : (r = o.substring(1)),
                        Ur(a + r, n))
                    ) {
                      g(53);
                      break t;
                    }
                    a && (g(2), t.data.set(Rn, a));
                  }
                  g(11),
                    t.data.set(dn, r),
                    (n = S("_gac", !!t.get(An))) &&
                    ("1" != (n = n.split("."))[0] || 4 != n.length
                      ? g(72)
                      : Ur(n[3], n[1])
                        ? g(71)
                        : (t.data.set(Mn, n[3]), t.data.set(Pn, n[2]), g(70)));
                }
            } else g(21);
        }
        e && (g(9), t.data.set(dn, b(e))),
          t.get(dn) ||
          ((e =
            (e = R.gaGlobal) && e.from_cookie && "cookie" !== Mt(t, Cn)
              ? void 0
              : (e = e && e.vid) && -1 !== e.search(s)
                ? e
                : void 0)
            ? (g(17), t.data.set(dn, e))
            : (g(8), t.data.set(dn, _()))),
          t.get(Rn) || (g(3), t.data.set(Rn, _())),
          fr(t),
          (e = R.gaGlobal = R.gaGlobal || {}),
          (t = (n = Mt(t, dn)) === Mt(t, vn)),
          (null == e.vid || (t && !e.from_cookie)) &&
          ((e.vid = n), (e.from_cookie = t));
      },
      fa = function (t) {
        var e,
          n = R.navigator,
          r = R.screen,
          a = L.location,
          o = t.set;
        t: {
          var i = !!t.get(In),
            s = !!t.get(Dn),
            c = L.referrer;
          if (/^(https?|android-app):\/\//i.test(c)) {
            if (i) break t;
            if (((i = "//" + L.location.hostname), !A(c, i))) {
              if (
                s &&
                ((s = i.replace(/\./g, "-") + ".cdn.ampproject.org"), A(c, s))
              ) {
                c = void 0;
                break t;
              }
              break t;
            }
          }
          c = void 0;
        }
        if (
          (o.call(t, re, c),
            a &&
            ("/" != (o = a.pathname || "").charAt(0) && (g(31), (o = "/" + o)),
              t.set(ne, a.protocol + "//" + a.hostname + o + a.search)),
            r && t.set(ce, r.width + "x" + r.height),
            r && t.set(se, r.colorDepth + "-bit"),
            (r = L.documentElement),
            (c = (o = L.body) && o.clientWidth && o.clientHeight),
            (s = []),
            r &&
              r.clientWidth &&
              r.clientHeight &&
              ("CSS1Compat" === L.compatMode || !c)
              ? (s = [r.clientWidth, r.clientHeight])
              : c && (s = [o.clientWidth, o.clientHeight]),
            (r = 0 >= s[0] || 0 >= s[1] ? "" : s.join("x")),
            t.set(ue, r),
            (r = t.set),
            (o = (o = R.navigator) ? o.plugins : null) && o.length)
        )
          for (c = 0; c < o.length && !e; c++)
            -1 < (s = o[c]).name.indexOf("Shockwave Flash") &&
              (e = s.description);
        if (!e)
          try {
            var u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            e = u.GetVariable("$version");
          } catch (t) { }
        if (!e)
          try {
            (u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
              (e = "WIN 6,0,21,0"),
              (u.AllowScriptAccess = "always"),
              (e = u.GetVariable("$version"));
          } catch (t) { }
        if (!e)
          try {
            e = (u = new ActiveXObject(
              "ShockwaveFlash.ShockwaveFlash"
            )).GetVariable("$version");
          } catch (t) { }
        if (
          (e &&
            (u = e.match(/[\d]+/g)) &&
            3 <= u.length &&
            (e = u[0] + "." + u[1] + " r" + u[2]),
            r.call(t, ge, e || void 0),
            t.set(ie, L.characterSet || L.charset),
            t.set(
              le,
              (n && "function" == typeof n.javaEnabled && n.javaEnabled()) || !1
            ),
            t.set(
              oe,
              ((n && (n.language || n.browserLanguage)) || "").toLowerCase()
            ),
            t.data.set(Mn, S("gclid", !0)),
            t.data.set(Un, S("gclsrc", !0)),
            t.data.set(Pn, Math.round(new Date().getTime() / 1e3)),
            t.get(Mn) ||
            (t.data.set(Kn, S("wbraid", !0)),
              t.data.set(Xn, Math.round(new Date().getTime() / 1e3))),
            a && t.get(An) && (n = L.location.hash))
        ) {
          for (n = n.split(/[?&#]+/), a = [], e = 0; e < n.length; ++e)
            (m(n[e], "utm_id") ||
              m(n[e], "utm_campaign") ||
              m(n[e], "utm_source") ||
              m(n[e], "utm_medium") ||
              m(n[e], "utm_term") ||
              m(n[e], "utm_content") ||
              m(n[e], "gclid") ||
              m(n[e], "dclid") ||
              m(n[e], "gclsrc") ||
              m(n[e], "wbraid")) &&
              a.push(n[e]);
          0 < a.length && ((n = "#" + a.join("&")), t.set(ne, t.get(ne) + n));
        }
      },
      ha = {
        pageview: [ae],
        event: [fe, he, de, pe],
        social: [ve, me, _e],
        timing: [je, Ie, Le, Re],
      },
      da = function (t) {
        return "prerender" != L.visibilityState && (t(), !0);
      },
      pa = function (t) {
        if (!da(t)) {
          g(16);
          var e = !1,
            n = function () {
              if (!e && da(t)) {
                e = !0;
                var r = n,
                  a = L;
                a.removeEventListener
                  ? a.removeEventListener("visibilitychange", r, !1)
                  : a.detachEvent && a.detachEvent("onvisibilitychange", r);
              }
            };
          y(L, "visibilitychange", n);
        }
      },
      va = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
      ma = function (t) {
        if (d(t[0])) this.u = t[0];
        else {
          var e = va.exec(t[0]);
          if (
            (null != e &&
              4 == e.length &&
              ((this.da = e[1] || "t0"),
                (this.K = e[2] || ""),
                (this.methodName = e[3]),
                (this.aa = [].slice.call(t, 1)),
                this.K ||
                ((this.A = "create" == this.methodName),
                  (this.i = "require" == this.methodName),
                  (this.g = "provide" == this.methodName),
                  (this.ba = "remove" == this.methodName)),
                this.i &&
                (3 <= this.aa.length
                  ? ((this.X = this.aa[1]), (this.W = this.aa[2]))
                  : this.aa[1] &&
                  (v(this.aa[1])
                    ? (this.X = this.aa[1])
                    : (this.W = this.aa[1])))),
              (e = t[1]),
              (t = t[2]),
              !this.methodName)
          )
            throw "abort";
          if (this.i && (!v(e) || "" == e)) throw "abort";
          if (this.g && (!v(e) || "" == e || !d(t))) throw "abort";
          if (_a(this.da) || _a(this.K)) throw "abort";
          if (this.g && "t0" != this.da) throw "abort";
        }
      };
    function _a(t) {
      return 0 <= t.indexOf(".") || 0 <= t.indexOf(":");
    }
    (sa = new I()),
      (ua = new I()),
      (la = new I()),
      (ca = { ec: 45, ecommerce: 46, linkid: 47 });
    var wa = function (t, e, n) {
      e == Aa || e.get(hn);
      var r = sa.get(t);
      return (
        !!d(r) &&
        ((e.plugins_ = e.plugins_ || new I()),
          e.plugins_.get(t) || e.plugins_.set(t, new r(e, n || {})),
          !0)
      );
    },
      ba = function (t, e, n, r, a) {
        if (!d(sa.get(e)) && !ua.get(e)) {
          ca.hasOwnProperty(e) && g(ca[e]);
          var o,
            i = void 0;
          if (Hr.test(e)) {
            if ((g(52), !(t = Aa.j(t)))) return !0;
            (n = Kr(t.model, e, r, a)),
              (i = function () {
                Ea.D(["provide", e, function () { }]);
                var t = R[(r && r.dataLayer) || "dataLayer"];
                t &&
                  t.hide &&
                  d(t.hide.end) &&
                  t.hide[e] &&
                  (t.hide.end(), (t.hide.end = void 0));
              });
          }
          !n && ca.hasOwnProperty(e) ? (g(39), (n = e + ".js")) : g(43),
            n &&
            (r && (o = r[qn]),
              v(o) || (o = void 0),
              (t = Sa(Ca(n, o))),
              !o || (Oa(t.protocol) && xa(t)) || (t = Sa(Ca(n))),
              Oa(t.protocol) &&
              xa(t) &&
              (T(t.url, void 0, a, void 0, i), ua.set(e, !0)));
        }
      },
      ya = function (t, e) {
        var n = la.get(t) || [];
        n.push(e), la.set(t, n);
      },
      ka = function (t, e) {
        sa.set(t, e), (e = la.get(t) || []);
        for (var n = 0; n < e.length; n++) e[n]();
        la.set(t, []);
      },
      xa = function (t) {
        var e = Sa(L.location.href);
        return !(
          !m(t.url, ct(1)) &&
          !m(t.url, ct(2)) &&
          (t.query ||
            0 <= t.url.indexOf("?") ||
            0 <= t.path.indexOf("://") ||
            (!(
              (t.host == e.host && t.port == e.port) ||
              (D &&
                (((e = L.createElement("a")).href = D),
                  (e = Ta(e)),
                  t.host === e[0] && t.port === e[1]))
            ) &&
              ((e = "http:" == t.protocol ? 80 : 443),
                "www.google-analytics.com" != t.host ||
                (t.port || e) != e ||
                !m(t.path, "/plugins/"))))
        );
      },
      Oa = function (t) {
        var e = L.location.protocol;
        return "https:" == t || t == e || ("http:" == t && "http:" == e);
      },
      Ta = function (t) {
        var e = t.hostname || "",
          n = 0 <= e.indexOf("]");
        return (
          (e = e.split(n ? "]" : ":")[0].toLowerCase()),
          n && (e += "]"),
          (n = (t.protocol || "").toLowerCase()),
          (n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : "")),
          (t = t.pathname || ""),
          m(t, "/") || (t = "/" + t),
          [e, "" + n, t]
        );
      },
      Sa = function (t) {
        var e = L.createElement("a");
        e.href = L.location.href;
        var n = (e.protocol || "").toLowerCase(),
          r = Ta(e),
          a = e.search || "",
          o = n + "//" + r[0] + (r[1] ? ":" + r[1] : "");
        return (
          m(t, "//")
            ? (t = n + t)
            : m(t, "/")
              ? (t = o + t)
              : !t || m(t, "?")
                ? (t = o + r[2] + (t || a))
                : 0 > t.split("/")[0].indexOf(":") &&
                (t = o + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + t),
          (e.href = t),
          (n = Ta(e)),
          {
            protocol: (e.protocol || "").toLowerCase(),
            host: n[0],
            port: n[1],
            path: n[2],
            query: e.search || "",
            url: t || "",
          }
        );
      },
      Ca = function (t, e) {
        return t && 0 <= t.indexOf("/")
          ? t
          : (e || st(!1)) + "/plugins/ua/" + t;
      },
      Ea = {
        ga: function () {
          Ea.fa = [];
        },
      };
    Ea.ga(),
      (Ea.D = function (t) {
        var e = Ea.J.apply(Ea, arguments);
        for (
          e = Ea.fa.concat(e), Ea.fa = [];
          0 < e.length && !Ea.v(e[0]) && (e.shift(), !(0 < Ea.fa.length));

        );
        Ea.fa = Ea.fa.concat(e);
      }),
      (Ea.ra = function (t) {
        Aa.q && (300 === Aa.q.length && (Aa.q.shift(), Aa.qd++), Aa.q.push(t));
      }),
      (Ea.J = function (t) {
        for (var e = [], n = 0; n < arguments.length; n++)
          try {
            var r = new ma(arguments[n]);
            r.g
              ? ka(r.aa[0], r.aa[1])
              : (r.i && (r.ha = ba(r.da, r.aa[0], r.X, r.W)), e.push(r)),
              Ea.ra(arguments[n]);
          } catch (t) { }
        return e;
      }),
      (Ea.v = function (t) {
        try {
          if (t.u) t.u.call(R, Aa.j("t0"));
          else {
            var e = t.da == i ? Aa : Aa.j(t.da);
            if (t.A) {
              if ("t0" == t.da && null === (e = Aa.create.apply(Aa, t.aa)))
                return !0;
            } else if (t.ba) Aa.remove(t.da);
            else if (e)
              if (t.i) {
                if (
                  (t.ha && (t.ha = ba(t.da, t.aa[0], t.X, t.W)),
                    !wa(t.aa[0], e, t.W))
                )
                  return !0;
              } else if (t.K) {
                var n = t.methodName,
                  r = t.aa,
                  a = e.plugins_.get(t.K);
                a[n].apply(a, r);
              } else e[t.methodName].apply(e, t.aa);
          }
        } catch (t) { }
      });
    var Aa = function (t) {
      g(1), Ea.D.apply(Ea, [arguments]);
    };
    (Aa.h = {}), (Aa.P = []), (Aa.L = 0), (Aa.ya = 0), (Aa.answer = 42);
    var Na = [_n, bn, hn];
    (Aa.create = function (t) {
      var e = N(Na, [].slice.call(arguments));
      e[hn] || (e[hn] = "t0");
      var n = "" + e[hn];
      if (Aa.h[n]) return Aa.h[n];
      if (Q(e)) return null;
      if (
        ((e = new ia(e)),
          (Aa.h[n] = e),
          Aa.P.push(e),
          (n = _t().tracker_created),
          d(n))
      )
        try {
          n(e);
        } catch (t) { }
      return e;
    }),
      (Aa.remove = function (t) {
        for (var e = 0; e < Aa.P.length; e++)
          if (Aa.P[e].get(hn) == t) {
            Aa.P.splice(e, 1), (Aa.h[t] = null);
            break;
          }
      }),
      (Aa.j = function (t) {
        return Aa.h[t];
      }),
      (Aa.getAll = function () {
        return Aa.P.slice(0);
      }),
      (Aa.N = function () {
        "ga" != i && g(49);
        var t = R[i];
        if (!t || 42 != t.answer) {
          (Aa.L = t && t.l), (Aa.ya = 1 * new Date()), (Aa.loaded = !0);
          var e = t && t.q,
            n = p(e);
          if (
            ((t = []),
              n ? (t = e.slice(0)) : g(50),
              (Aa.q = n ? e : []),
              Aa.q.splice(0),
              (Aa.qd = 0),
              rr("create", (e = R[i] = Aa), e.create),
              rr("remove", e, e.remove),
              rr("getByName", e, e.j, 5),
              rr("getAll", e, e.getAll, 6),
              rr("get", (e = ia.prototype), e.get, 7),
              rr("set", e, e.set, 4),
              rr("send", e, e.send),
              rr("requireSync", e, e.ma),
              rr("get", (e = Dt.prototype), e.get),
              rr("set", e, e.set),
              "https:" != L.location.protocol && !u)
          ) {
            t: {
              for (
                e = L.getElementsByTagName("script"), n = 0;
                n < e.length && 100 > n;
                n++
              ) {
                var r = e[n].src;
                if (r && 0 == r.indexOf(st(!0) + "/analytics")) {
                  e = !0;
                  break t;
                }
              }
              e = !1;
            }
            e && (u = !0);
          }
          ((R.gaplugins = R.gaplugins || {}).Linker = Dr),
            (e = Dr.prototype),
            ka("linker", Dr),
            rr("decorate", e, e.ca, 20),
            rr("autoLink", e, e.S, 25),
            rr("passthrough", e, e.$, 25),
            ka("displayfeatures", ra),
            ka("adfeatures", ra),
            Ea.D.apply(Aa, t);
        }
      });
    var ja = Aa.N,
      Ia = R[i];
    Ia && Ia.r ? ja() : pa(ja),
      pa(function () {
        Ea.D(["provide", "render", w]);
      });
  })(window);
