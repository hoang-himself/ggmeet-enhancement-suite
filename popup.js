(() => {
  var e, t, o, n, r, s;
  function c(e) {
    ga("send", "event", e.target.id, e.target.checked);
  }
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
    })(),
    (function () {
      const e = document.getElementById("purchaseLinkWithVersion"),
        t = `https://www.meetenhancementsuite.com/meetpro/?version=${
          chrome.runtime.getManifest().version
        }&utm_source=extension&utm_medium=pro_button&utm_campaign=extension_button/#pricingSection`;
      e.href = t;
    })(),
    (e = window),
    (t = document),
    (o = "script"),
    (n = "ga"),
    (e.GoogleAnalyticsObject = n),
    (e.ga =
      e.ga ||
      function () {
        (e.ga.q = e.ga.q || []).push(arguments);
      }),
    (e.ga.l = 1 * new Date()),
    (r = t.createElement(o)),
    (s = t.getElementsByTagName(o)[0]),
    (r.async = 1),
    (r.src = "./ga.js"),
    s.parentNode.insertBefore(r, s),
    ga("create", "UA-162757005-1", "auto"),
    ga("set", "checkProtocolTask", null),
    ga("send", "pageview", "/popup");
  const d = [
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
    a = d.reduce((e, t) => ({ ...e, [t]: !1 }), {});
  function i() {
    let e = a;
    d.forEach((t) => {
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
  (a.keyCode = {
    keyCode: 32,
    ctrlKey: !1,
    altKey: !1,
    shiftKey: !1,
    metaKey: !1,
  }),
    (a.backgroundColor = "#111111"),
    (a.borderColor = "#669df6"),
    (a.adjustVolume = "10"),
    document.addEventListener("DOMContentLoaded", () => {
      chrome.storage.sync.get(a, function (e) {
        d.forEach((t) => {
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
              ((e.onchange = i), e.addEventListener("click", c));
          });
        })();
    });
  const l = document.getElementById("hotkey_edit"),
    y = document.getElementById("editHotkey"),
    m = document.getElementById("saveHotkey");
  let u;
  const g = (e) => {
    e.preventDefault(),
      (u = new h(h.keysFromEvent(e))),
      (l.innerText = u.display());
  };
  y.addEventListener("click", () => {
    "false" === l.getAttribute("data-active") &&
      (l.setAttribute("data-active", "true"),
      y.setAttribute("style", "display: none"),
      m.setAttribute("style", "display: block"),
      document.body.addEventListener("keydown", g));
  }),
    m.addEventListener("click", () => {
      "true" === l.getAttribute("data-active") &&
        (l.setAttribute("data-active", "false"),
        y.setAttribute("style", "display: block"),
        m.setAttribute("style", "display: none"),
        document.body.removeEventListener("keydown", g),
        chrome.storage.sync.set({ keyCode: u.keys }));
    }),
    document.addEventListener("click", (e) => {
      "true" === l.getAttribute("data-active") &&
        null != u &&
        e.target != m &&
        e.target != y &&
        (l.setAttribute("data-active", "false"),
        y.setAttribute("style", "display: block"),
        m.setAttribute("style", "display: none"),
        document.body.removeEventListener("keydown", g),
        chrome.storage.sync.set({ keyCode: u.keys }));
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
      if ("number" == typeof e) return E[e];
      var o,
        n = String(e);
      return (o = f[n.toLowerCase()])
        ? o
        : (o = b[n.toLowerCase()]) ||
            (1 === n.length ? n.charCodeAt(0) : void 0);
    }
    keyStrings() {
      return [
        this.keys.ctrlKey && "Control",
        this.keys.altKey && "Alt",
        this.keys.shiftKey && "Shift",
        this.keys.metaKey && "Command",
        this.keys.keyCode && v(this.keys.keyCode),
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
  function k(e) {
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
  function p(e) {
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
  function v(e) {
    if (e && "object" == typeof e) {
      var t = e.which || e.keyCode || e.charCode;
      t && (e = t);
    }
    if ("number" == typeof e) return E[e];
    var o,
      n = String(e);
    return (o = f[n.toLowerCase()])
      ? o
      : (o = b[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0);
  }
  document.getElementById("activateLink").addEventListener("click", () => {
    (document.getElementById("proLinks").style.display = "none"),
      (document.getElementById("activationForm").style.display = "contents");
  }),
    chrome.storage.sync.get("licenseKey", (e) => {
      if (!e.licenseKey) return void p();
      const t = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          license_key: e.licenseKey,
          increment_uses_count: "false",
        }),
      };
      fetch("https://hoang-himself.github.io/api/v1/ggmeet-enhancement-suite/index.json")
        .then((e) => e.json())
        .then((e) => {
          e.success && e.isPro
            ? e.licenseKey
              ? k(e.licenseKey)
              : k()
            : p("error");
        })
        .catch(() => {
          p("error");
        });
    }),
    document
      .getElementById("activationForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const t = document.getElementById("licenseKey").value;
        if (!t) return void p("error");
        const o = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            license_key: t.trim(),
            increment_uses_count: "true",
          }),
        };
        fetch("https://hoang-himself.github.io/api/v1/ggmeet-enhancement-suite/index.json")
          .then((e) => e.json())
          .then((e) => {
            e.success && e.isPro
              ? e.licenseKey
                ? k(e.licenseKey)
                : k()
              : p("error");
          })
          .catch(() => {
            p("error");
          });
      }),
    (v.isEventKey = function (e, t) {
      if (e && "object" == typeof e) {
        var o = e.which || e.keyCode || e.charCode;
        if (null == o) return !1;
        if ("string" == typeof t) {
          var n;
          if ((n = f[t.toLowerCase()])) return n === o;
          if ((n = b[t.toLowerCase()])) return n === o;
        } else if ("number" == typeof t) return t === o;
        return !1;
      }
    });
  var f = {
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
    b = {
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
  for (C = 97; C < 123; C++) f[String.fromCharCode(C)] = C - 32;
  for (var C = 48; C < 58; C++) f[C - 48] = C;
  for (C = 1; C < 13; C++) f["f" + C] = C + 111;
  for (C = 0; C < 10; C++) f["numpad " + C] = C + 96;
  var E = {};
  for (C in f) E[f[C]] = C;
  for (var K in b) f[K] = b[K];
  let B = document.getElementById("adjustVolume");
  B.addEventListener("change", () => {
    chrome.storage.sync.set({ adjustVolume: B.value });
  }),
    B.addEventListener("keydown", (e) => {
      e.preventDefault();
    });
  let I = document.querySelector("#backgroundColorPicker");
  I.addEventListener("change", function () {
    chrome.storage.sync.set({ backgroundColor: I.value });
  });
  let w = document.querySelector("#borderColor"),
    L = "#64ffda";
  chrome.storage.sync.get("borderColor", (e) => {
    setTimeout(() => {
      0 == e.borderColor &&
        (chrome.storage.sync.set({ borderColor: L }), (w.value = L));
    }, 500);
  }),
    w.addEventListener("change", function () {
      chrome.storage.sync.set({ borderColor: w.value });
    });
  const j = document.getElementById("autoRecord"),
    S = document.getElementById("manualRecord");
  j.addEventListener("click", () => {
    j.checked && (S.checked = !1);
  }),
    S.addEventListener("click", () => {
      S && (j.checked = !1);
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
