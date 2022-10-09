(() => {
  chrome.runtime.sendMessage("popupOpen", (e) => e),
    (function () {
      for (
        var e = document.getElementsByTagName("html"), t = 0;
        t < e.length;
        t++
      ) {
        var o = e[t],
          n = o.innerHTML.toString(),
          r = n.replace(/__MSG_(\w+)__/g, function (e, t) {
            return t ? chrome.i18n.getMessage(t) : "";
          });
        r !== n && (o.innerHTML = r);
      }
    })();
  const e = "AgEOO";
  var t, o, n, r, s, a;
  function c(e) {
    ga("send", "event", e.target.id, e.target.checked);
  }
  (t = window),
    (o = document),
    (n = "script"),
    (r = "ga"),
    (t.GoogleAnalyticsObject = r),
    (t.ga =
      t.ga ||
      function () {
        (t.ga.q = t.ga.q || []).push(arguments);
      }),
    (t.ga.l = 1 * new Date()),
    (s = o.createElement(n)),
    (a = o.getElementsByTagName(n)[0]),
    (s.async = 1),
    (s.src = "./ga.js"),
    a.parentNode.insertBefore(s, a),
    ga("create", "UA-162757005-1", "auto"),
    ga("set", "checkProtocolTask", null),
    ga("send", "pageview", "/popup");
  const i = [
      "addChimes",
      "adjustVolume",
      "autoAdmit",
      "autoCaptions",
      "autoChat",
      "autoCopyURL",
      "autoJoin",
      "autoJoinParticipants",
      "autoRecord",
      "autoReject",
      "autoUnmute",
      "backgroundColor",
      "borderColor",
      "darkMode",
      "displayClock",
      "hideCommentBubble",
      "hideComments",
      "hideNames",
      "hideTalkIcons",
      "homeOnLeave",
      "ignorePresentationModal",
      "keyCode",
      "leavePrompt",
      "manualRecord",
      "meetingTimer",
      "minimizeVideo",
      "mirrorVideos",
      "muteMicrophone",
      "mutePopup",
      "muteVideo",
      "noAddOthers",
      "pictureInPicture",
      "quickLeave",
      "setBackgroundColor",
      "showNames",
      "smartUnmute",
      "speakerBorder",
      "toggleBottomBar",
      "transBar",
    ],
    d = i.reduce((e, t) => ({ ...e, [t]: !1 }), {});
  function l() {
    let e = d;
    i.forEach((t) => {
      "backgroundColor" == t
        ? (e[t] = document.getElementById("backgroundColorPicker").value)
        : "borderColor" == t
        ? (e[t] = document.getElementById("borderColor").value)
        : "adjustVolume" == t
        ? (e[t] = document.getElementById("adjustVolume").value)
        : "keyCode" == t
        ? delete e.keyCode
        : (e[t] = document.getElementById(t).checked);
    }),
      chrome.storage.sync.set(e);
  }
  (d.keyCode = {
    keyCode: 32,
    ctrlKey: !1,
    altKey: !1,
    shiftKey: !1,
    metaKey: !1,
  }),
    (d.backgroundColor = "#111111"),
    (d.borderColor = "#669df6"),
    (d.adjustVolume = "10"),
    document.addEventListener("DOMContentLoaded", () => {
      chrome.storage.sync.get(d, function (e) {
        i.forEach((t) => {
          if ("keyCode" === t) {
            const o = new h(h.keysFromEvent(e[t]));
            document.getElementById("hotkey_edit").innerText = o.display();
          } else
            "backgroundColor" === t
              ? (document.getElementById("backgroundColorPicker").value = e[t])
              : "borderColor" === t
              ? (document.getElementById("borderColor").value = e[t])
              : "adjustVolume" === t
              ? (document.getElementById("adjustVolume").value = e[t])
              : (document.getElementById(t).checked = e[t]);
        });
      }),
        (function () {
          const e = document.getElementById("featureList");
          Object.values(e.getElementsByTagName("input")).forEach((e) => {
            "checkbox" === e.type &&
              ((e.onchange = l), e.addEventListener("click", c));
          });
        })();
    });
  const y = document.getElementById("hotkey_edit"),
    u = document.getElementById("editHotkey"),
    m = document.getElementById("saveHotkey");
  let p;
  const g = (e) => {
    e.preventDefault(),
      (p = new h(h.keysFromEvent(e))),
      (y.innerText = p.display());
  };
  u.addEventListener("click", () => {
    "false" === y.getAttribute("data-active") &&
      (y.setAttribute("data-active", "true"),
      u.setAttribute("style", "display: none"),
      m.setAttribute("style", "display: block"),
      document.body.addEventListener("keydown", g));
  }),
    m.addEventListener("click", () => {
      "true" === y.getAttribute("data-active") &&
        (y.setAttribute("data-active", "false"),
        u.setAttribute("style", "display: block"),
        m.setAttribute("style", "display: none"),
        document.body.removeEventListener("keydown", g),
        chrome.storage.sync.set({ keyCode: p.keys }));
    }),
    document.addEventListener("click", (e) => {
      "true" === y.getAttribute("data-active") &&
        null != p &&
        e.target != m &&
        e.target != u &&
        (y.setAttribute("data-active", "false"),
        u.setAttribute("style", "display: block"),
        m.setAttribute("style", "display: none"),
        document.body.removeEventListener("keydown", g),
        chrome.storage.sync.set({ keyCode: p.keys }));
    });
  class h {
    constructor({
      keyCode: e,
      ctrlKey: t = !1,
      altKey: o = !1,
      shiftKey: n = !1,
      metaKey: r = !1,
    }) {
      this.keys = {
        keyCode: e,
        ctrlKey: t,
        altKey: o,
        shiftKey: n,
        metaKey: r,
      };
    }
    static keysFromEvent({
      keyCode: e,
      ctrlKey: t,
      altKey: o,
      shiftKey: n,
      metaKey: r,
    }) {
      const s = { ctrlKey: t, altKey: o, shiftKey: n, metaKey: r };
      return [16, 17, 18, 91].includes(e) || (s.keyCode = e), s;
    }
    fromEvent(e) {
      return new h(h.keysFromEvent(e));
    }
    keyCode(e) {
      if (e && "object" == typeof e) {
        var t = e.which || e.keyCode || e.charCode;
        t && (e = t);
      }
      if ("number" == typeof e) return L[e];
      var o,
        n = String(e);
      return (o = E[n.toLowerCase()])
        ? o
        : (o = K[n.toLowerCase()]) ||
            (1 === n.length ? n.charCodeAt(0) : void 0);
    }
    keyStrings() {
      return [
        this.keys.ctrlKey && "Control",
        this.keys.altKey && "Alt",
        this.keys.shiftKey && "Shift",
        this.keys.metaKey && "Command",
        this.keys.keyCode && C(this.keys.keyCode),
      ].filter((e) => e);
    }
    display() {
      return this.keyStrings()
        .map((e) => `${e}`)
        .join(" + ");
    }
    matchKeydown(e) {
      return (
        this.keys.ctrlKey == e.ctrlKey &&
        this.keys.altKey == e.altKey &&
        this.keys.shiftKey == e.shiftKey &&
        this.keys.metaKey == e.metaKey &&
        (this.keys.keyCode == e.keyCode ||
          ([16, 17, 18, 91].includes(e.keyCode) &&
            void 0 === this.keys.keyCode))
      );
    }
    matchKeyup(e) {
      return (
        !(!this.keys.keyCode || this.keys.keyCode != e.keyCode) ||
        (this.keys.ctrlKey && !e.ctrlKey) ||
        (this.keys.altKey && !e.altKey) ||
        (this.keys.shiftKey && !e.shiftKey) ||
        (this.keys.metaKey && !e.metaKey)
      );
    }
  }
  document.getElementById("activateLink").addEventListener("click", () => {
    (document.getElementById("proLinks").style.display = "none"),
      (document.getElementById("activationForm").style.display = "contents");
  });
  const k = (e, t, o) => {
      fetch(
        "https://hoang-himself.github.io/api/v1/ggmeet-enhancement-suite/index.json"
      )
        .then((e) => e.json())
        .then((n) => {
          if (n.success) {
            const e = new Date().getTime(),
              r =
                (Date.parse(n.purchase.subscription_cancelled_at) - e) / 864e5;
            ("keyfermath@gmail.com" === n.purchase.email ||
              ("(Single License)" === n.purchase.variants && n.uses <= 11) ||
              ("(Ten Licenses)" === n.purchase.variants && n.uses <= 15) ||
              ("(Fifty Licenses)" === n.purchase.variants && n.uses <= 60) ||
              "(Unlimited Licenses)" === n.purchase.variants) &&
            (r > 0 || !n.purchase.subscription_cancelled_at) &&
            !n.purchase.subscription_failed_at
              ? t
                ? f(t)
                : f()
              : null != o
              ? b("error")
              : b();
          } else v(e, t, o);
        })
        .catch(() => {});
    },
    v = (e, t, o) => {
      let n = e;
      (n.body = JSON.parse(n.body)),
        (n.body.product_permalink = n.body.product_permalink = "OOSyDN"),
        (n.body = JSON.stringify(n.body)),
        fetch(
          "https://hoang-himself.github.io/api/v1/ggmeet-enhancement-suite/index.json"
        )
          .then((e) => e.json())
          .then((e) => {
            if (e.success) {
              const n = new Date().getTime();
              let r =
                (Date.parse(e.purchase.subscription_cancelled_at) - n) / 864e5;
              ("keyfermath@gmail.com" === e.purchase.email ||
                ("(Single License)" === e.purchase.variants && e.uses <= 11) ||
                ("(Ten Licenses)" === e.purchase.variants && e.uses <= 15) ||
                ("(Fifty Licenses)" === e.purchase.variants && e.uses <= 60) ||
                "(Unlimited Licenses)" === e.purchase.variants) &&
              (r > 0 || !e.purchase.subscription_cancelled_at) &&
              !e.purchase.subscription_failed_at
                ? null != t
                  ? f(t)
                  : f()
                : null != o
                ? b("error")
                : b();
            } else null != o ? b("error") : b();
          })
          .catch(() => {});
    };
  function f(e) {
    e && chrome.storage.sync.set({ licenseKey: e }),
      (document.getElementById("proUpgrade").style.display = "none"),
      (document.getElementById("proFeatures").style.display = "block"),
      (document.getElementById("basicFeatureHeader").style.display = "block"),
      (document.getElementById("featureList").style.display = "inline"),
      (document.querySelector("body").style.width = "380px"),
      (document.getElementById("proFeatures").style.marginBottom = "90px"),
      (document.getElementById("hotkey_edit").disabled = !1),
      (document.getElementById("editHotkey").style.display = "block"),
      (document.getElementById("hotkeyTooltip").innerText =
        "Click to begin listening, click again to save.");
  }
  function b(e) {
    "error" === e &&
      ((document.getElementById("licenseKey").style.border = "2px"),
      (document.getElementById("licenseKey").style.borderStyle = "solid"),
      (document.getElementById("licenseKey").style.borderColor = "red")),
      chrome.storage.sync.set({ licenseKey: void 0 }),
      (document.getElementById("proUpgrade").style.display = "block"),
      (document.getElementById("proFeatures").style.display = "none"),
      (document.getElementById("hotkey_edit").disabled = !0),
      (document.getElementById("editHotkey").style.display = "none"),
      (document.getElementById("hotkeyTooltip").innerText =
        "Upgrade to Pro to set your own key binding.");
  }
  function C(e) {
    if (e && "object" == typeof e) {
      var t = e.which || e.keyCode || e.charCode;
      t && (e = t);
    }
    if ("number" == typeof e) return L[e];
    var o,
      n = String(e);
    return (o = E[n.toLowerCase()])
      ? o
      : (o = K[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0);
  }
  chrome.storage.sync.get("licenseKey", (t) => {
    if (t.licenseKey) {
      const o = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_permalink: e,
          license_key: t.licenseKey,
          increment_uses_count: "false",
        }),
      };
      k(o);
    } else b();
  }),
    document
      .getElementById("activationForm")
      .addEventListener("submit", (t) => {
        t.preventDefault();
        const o = document.getElementById("licenseKey").value,
          n = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_permalink: e,
              license_key: o,
              increment_uses_count: "true",
            }),
          };
        k(n, o, "error");
      }),
    (C.isEventKey = function (e, t) {
      if (e && "object" == typeof e) {
        var o = e.which || e.keyCode || e.charCode;
        if (null == o) return !1;
        if ("string" == typeof t) {
          var n;
          if ((n = E[t.toLowerCase()])) return n === o;
          if ((n = K[t.toLowerCase()])) return n === o;
        } else if ("number" == typeof t) return t === o;
        return !1;
      }
    });
  var E = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      ctrl: 17,
      alt: 18,
      "pause/break": 19,
      "caps lock": 20,
      esc: 27,
      space: 32,
      "page up": 33,
      "page down": 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      insert: 45,
      delete: 46,
      command: 91,
      "left command": 91,
      "right command": 93,
      "numpad *": 106,
      "numpad +": 107,
      "numpad -": 109,
      "numpad .": 110,
      "numpad /": 111,
      "num lock": 144,
      "scroll lock": 145,
      "my computer": 182,
      "my calculator": 183,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222,
    },
    K = {
      windows: 91,
      "⇧": 16,
      "⌥": 18,
      "⌃": 17,
      "⌘": 91,
      ctl: 17,
      control: 17,
      option: 18,
      pause: 19,
      break: 19,
      caps: 20,
      return: 13,
      escape: 27,
      spc: 32,
      spacebar: 32,
      pgup: 33,
      pgdn: 34,
      ins: 45,
      del: 46,
      cmd: 91,
    };
  /*!
   * Programatically add the following
   */
  for (B = 97; B < 123; B++) E[String.fromCharCode(B)] = B - 32;
  for (var B = 48; B < 58; B++) E[B - 48] = B;
  for (B = 1; B < 13; B++) E["f" + B] = B + 111;
  for (B = 0; B < 10; B++) E["numpad " + B] = B + 96;
  var L = {};
  for (B in E) L[E[B]] = B;
  for (var I in K) E[I] = K[I];
  let w = document.getElementById("adjustVolume");
  w.addEventListener("change", () => {
    chrome.storage.sync.set({ adjustVolume: w.value });
  }),
    w.addEventListener("keydown", (e) => {
      e.preventDefault();
    });
  let _ = document.querySelector("#backgroundColorPicker");
  _.addEventListener("change", function () {
    chrome.storage.sync.set({ backgroundColor: _.value });
  });
  let S = document.querySelector("#borderColor"),
    j = "#64ffda";
  chrome.storage.sync.get("borderColor", (e) => {
    setTimeout(() => {
      0 == e.borderColor &&
        (chrome.storage.sync.set({ borderColor: j }), (S.value = j));
    }, 500);
  }),
    S.addEventListener("change", function () {
      chrome.storage.sync.set({ borderColor: S.value });
    });
  const A = document.getElementById("autoRecord"),
    T = document.getElementById("manualRecord");
  A.addEventListener("click", () => {
    A.checked && (T.checked = !1);
  }),
    T.addEventListener("click", () => {
      T && (A.checked = !1);
    });
  document.querySelectorAll(".disabledCheckbox").forEach((e) => {
    e.addEventListener("click", () => {
      e.checked = "true";
    });
  }),
    chrome.storage.sync.get("reviewDismissed", (e) => {
      e.reviewDismissed
        ? (document.querySelector(".rateUsContainer").style.display = "none")
        : (document.querySelector(".rateUsContainer").style.display = "block");
    }),
    document.getElementById("positiveRating").addEventListener("click", () => {
      (document.querySelector(".rateInputStep").style.display = "none"),
        (document.querySelector(".rateUsAccept").style.display = "block");
    }),
    document
      .getElementById("leaveReviewButton")
      .addEventListener("click", () => {
        chrome.windows.create({
          url: "https://chrome.google.com/webstore/detail/google-meet-enhancement-s/ljojmlmdapmnibgflmmminacbjebjpno/reviews",
          type: "popup",
        }),
          chrome.storage.sync.set({ reviewDismissed: !0 });
      }),
    document.querySelectorAll(".ratingFace").forEach((e) => {
      e.addEventListener("click", () => {
        chrome.storage.sync.set({ reviewDismissed: !0 });
      });
    }),
    document.querySelector(".rateUsDismiss").addEventListener("click", () => {
      (document.querySelector(".rateUsContainer").style.display = "none"),
        chrome.storage.sync.set({ reviewDismissed: !0 });
    });
})();
