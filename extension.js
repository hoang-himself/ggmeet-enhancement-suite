(() => {
  let e,
    t,
    n,
    o,
    r,
    a,
    l,
    c,
    s,
    d,
    u,
    m,
    p,
    f,
    g,
    y,
    b,
    h,
    v,
    k,
    w,
    x,
    S,
    A,
    B,
    C,
    q,
    I,
    E,
    j = [],
    M = !1,
    P = {
      interval: void 0,
      isPresenting: !1,
      curPresenter: "",
      enabledFullScreen: !1,
    };
  function T() {
    chrome.storage.sync.get("licenseKey", (e) => {
      if (!1 === e.licenseKey) {
        const e = chrome.runtime.getManifest().version;
        document
          .querySelector('[jsname="FSwbPd"]')
          .insertAdjacentHTML(
            "afterend",
            `<div id='hangupUpsell' style='margin-top: 12px; display: flex; align-items: flex-start; background: #EBF7F1; border-radius: 13px; padding: 18px 10px 18px 10px; text-align: left; width: 340px;'><img style='margin: 10px 15px 0px 0px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg'><div><p style='font-size: initial; font-weight: bold; margin: 0 0 0 0;'>Upgrade to Meet Pro today</p><p style='margin-top: 6px;'>Add over 25 new features to Google Meet, including mute all, dark mode, quick emojis, and so much more!</p><div style='margin-top: 18px;'><a style='background: #00211D; color: #fff; border-radius: 20px; padding: 6px 8px 6px 8px; margin-right: 12px;' href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=hangup_page/#pricingSection'>Start 7-day free trial →</a><span id='hangupUpsellDismiss' style='text-decoration: underline; cursor: pointer;'>Dismiss</span></div></div></div>`
          ),
          document
            .getElementById("hangupUpsellDismiss")
            .addEventListener("click", H);
      }
    });
  }
  function L() {
    if (document.querySelector(".CWHuqf")) {
      const e = chrome.runtime.getManifest().version;
      document
        .querySelector(".CWHuqf")
        .insertAdjacentHTML(
          "afterbegin",
          `<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 25 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=main_page/#pricingSection' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>`
        ),
        document
          .getElementById("dismissMainPageUpsell")
          .addEventListener("click", V);
    }
    if (document.querySelector(".pGxpHc")) {
      const e = chrome.runtime.getManifest().version;
      document
        .querySelector(".pGxpHc")
        .insertAdjacentHTML(
          "afterbegin",
          `<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 25 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=main_page/#pricingSection' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>`
        ),
        document
          .getElementById("dismissMainPageUpsell")
          .addEventListener("click", V);
    }
  }
  function V() {
    document.getElementById("mainPageUpsell").style.display = "none";
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideMainPageUpsellDate: e }),
      chrome.storage.sync.set({ hideMainPageUpsell: !0 });
  }
  function D() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideJoinUpsell: !0 }),
      chrome.storage.sync.set({ hideJoinUpsellDate: e }),
      (document.getElementById("upsellBanner").style.display = "none");
  }
  function U() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideToolsUpsellDate: e }),
      chrome.storage.sync.set({ hideToolsUpsell: !0 }),
      (document.getElementById("toolsUpsell").style.display = "none"),
      clearInterval(b);
  }
  function H() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideHangupPageUpsellDate: e }),
      chrome.storage.sync.set({ hideHangupPageUpsell: !0 }),
      (document.getElementById("hangupUpsell").style.display = "none");
  }
  function z() {
    chrome.storage.sync.get("licenseKey", (e) => {
      !1 === e.licenseKey &&
        (b = setInterval(() => {
          const e = document.querySelector('[jsname="QGvzrd"]'),
            t = document.getElementById("toolsUpsell");
          if (e && !t) {
            const e = chrome.runtime.getManifest().version;
            document
              .querySelector(['[jscontroller="PHUIyb"]'])
              .insertAdjacentHTML(
                "beforeend",
                `<li id='toolsUpsell'><div style='margin-left: 18px;margin-right: 10px; display: inline;' class='VfPpkd-rymPhb-f7MjDc'><a href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank'><img style='width: 40px;padding-bottom: 11px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg' data-iml='458249.73000001046'></a></div><div style='display: inline-block;'><a href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank' style='color: inherit;'><span class='VfPpkd-rymPhb-fpDzbe-fmcmS WPeMgd'>Upgrade to Meet Pro</span><span class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Add over 20 new features to Google Meet</span></a><span id='toolUpsellDismiss' style='cursor: pointer; text-decoration: underline;' class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Dismiss</span></div></li>`
              ),
              document
                .getElementById("toolUpsellDismiss")
                .addEventListener("click", U);
          }
        }, 500));
    });
  }
  function K() {
    chrome.storage.sync.get("licenseKey", (e) => {
      if (!1 === e.licenseKey) {
        const e = chrome.runtime.getManifest().version;
        document
          .querySelector('[jsname="H5qcZ"]')
          .insertAdjacentHTML(
            "beforeend",
            `<div id='upsellBanner'><div id='upsellCopy'><h1 style='margin-bottom: 0px; margin-top: 18px;'>Google Meet, with super powers ⚡️</h1><p style='font-size: 13px; margin-top: 6px; line-height: 17px;'>Meet Pro adds over 25 new features to Google Meet, including Mute All, Mirror Videos, Dark Mode, Quick Emojis, and so much more.</p><div style='margin-top: 22px;'><a target='_blank' id='upsellButton' href='https://www.meetenhancementsuite.com/meetpro/?version=${e}&utm_source=extension&utm_medium=banner&utm_campaign=join_page/#pricingSection'>Start 7-day free trial →</a><div id='upsellDismiss' style='display: inline; margin-left: 18px; text-decoration: underline; cursor: pointer;'>Dismiss</div></div></div></div>`
          );
        const t = document.getElementById("upsellBanner"),
          n = document.getElementById("upsellCopy"),
          o = document.getElementById("upsellButton");
        (document.querySelector(".oORaUb").style.boxShadow = "none"),
          (document.querySelector('[jsname="jlQN5e"]').style.borderRadius =
            "8px"),
          (document.querySelector(".mWzGw").style.borderRadius = "8px"),
          document.getElementById("upsellDismiss").addEventListener("click", D),
          (t.style.cssText =
            "width: 100%; height: 154px; margin-top: 20px; border-radius: 8px; background-image: url('https://www.meetenhancementsuite.com/assets/upsellBackgroundImage.png'); background-size: cover; background-repeat: no-repeat;"),
          (n.style.cssText = "color: #fff; margin-left: 16px; width: 420px"),
          (o.style.cssText =
            "font-weight: bold; background: #EBF7F1; color: #09201D; border-radius: 30px; padding: 10px 20px 10px 20px; margin-top: 10px;");
      }
    });
  }
  function N(e) {
    e
      ? (a = setInterval(() => {
          let e = document.querySelector('button[jsname="Ta2Is"]');
          e && e.click();
        }, 500))
      : clearInterval(a);
  }
  function R(e) {
    if (e)
      s = setInterval(() => {
        let e = document.querySelector('[jsname="FZJQDc"]'),
          t = document.querySelector('[jscontroller="z1aTse"]');
        e && e.click(),
          t && t.childNodes[1] && (t.childNodes[1].remove(), clearInterval(s));
      }, 100);
    else {
      clearInterval(s);
      let e = document.querySelector('[jsname="ix0Hvc"]');
      e && e.click();
    }
  }
  function O(e, t) {
    t ||
      (e
        ? (document
            .querySelector("body")
            .insertAdjacentHTML(
              "afterbegin",
              '<div id="transcribeBlock" style="background: transparent; width: 100%; height: 100%; position: absolute; z-index: 2001;"></div>'
            ),
          setTimeout(() => {
            const e = document.getElementById("transcribeBlock");
            e && (e.style.display = "none");
            try {
              clearInterval(c), document.body.removeAttribute("mesLock");
            } catch (e) {}
          }, 1e4),
          (c = setInterval(() => {
            const e = document.body.getAttribute("mesLock");
            if (e && "autoTranscribe" !== e) return;
            e || document.body.setAttribute("mesLock", "autoTranscribe");
            const t = document.querySelector(
              '[jsaction="rcuQ6b:npT2md;qlOsPd:lUFH9b"][jscontroller="nl7Wy"]'
            );
            if (!t) return;
            const n = t.querySelector(
              '[jsname="A5il2e"][jscontroller="soHxf"]'
            );
            if (n && !n.getAttribute("mesAlreadyTranscribed")) {
              n.getAttribute("mesMainMenuClicked") ||
                (n.click(), n.setAttribute("mesMainMenuClicked", "true"));
              const e = document.querySelector('[jsname="QGvzrd"]');
              if (!e) return;
              const t = e.querySelector('[data-tool-id="11"');
              if (!t) {
                document.getElementById("transcribeBlock").style.display =
                  "none";
                const e = document.querySelector(
                  'button[jscontroller="soHxf"]'
                );
                return (
                  e && e.click(),
                  clearInterval(c),
                  document.body.removeAttribute("mesLock"),
                  void setTimeout(() => {
                    alert(
                      "You must be on a Google Workspace edition plan in order to transcribe meetings. Read more here: https://support.google.com/meet/answer/12849897?hl=en&ref_topic=7290350#zippy=%2Clearn-which-google-workspace-editions-have-transcripts"
                    );
                  }, 1e3)
                );
              }
              if (t && !t.getAttribute("mesTransClicked"))
                return we(t), void t.setAttribute("mesTransClicked", "true");
              const o = document.querySelector('[jsname="uAYExb"');
              if (!o)
                return void (
                  t &&
                  t.getAttribute("mesTransClicked") &&
                  t.removeAttribute("mesTransClicked")
                );
              const r = o.querySelector('[jsname="z0F4cd"');
              r &&
                !r.getAttribute("mesTransStartClick") &&
                (we(r), r.setAttribute("mesTransStartClick", "true"));
              const a = document.querySelector(".VfPpkd-P5QLlc");
              if (!a) return;
              const i = a.querySelector(".VfPpkd-T0kwCb").children[1];
              i &&
                !r.getAttribute("mesModelStartClick") &&
                (we(i), r.setAttribute("mesModelStartClick", "true"));
              const l = document.querySelector('[jsname="ME4pNd"]');
              l &&
                l.className &&
                !l.className.includes("qdulke") &&
                (n.click(), l.classList.add("qdulke")),
                n.setAttribute("mesAlreadyTranscribed", "true");
            }
            const o = document.querySelector('[jscontroller="FrtQld"]');
            o &&
              o.textContent &&
              o.textContent.includes("This call is being transcribed") &&
              ((document.getElementById("transcribeBlock").style.display =
                "none"),
              clearInterval(c),
              document.body.removeAttribute("mesLock"));
          }, 100)))
        : clearInterval(c));
  }
  function F(e, t) {
    e
      ? (document
          .querySelector("body")
          .insertAdjacentHTML(
            "afterbegin",
            '<div id="recordBlock" style="background: transparent; width: 100%; height: 100%; position: absolute; z-index: 2001;"></div>'
          ),
        setTimeout(() => {
          const e = document.getElementById("recordBlock");
          e && (e.style.display = "none");
          try {
            clearInterval(l), document.body.removeAttribute("mesLock");
          } catch (e) {}
        }, 1e4),
        (l = setInterval(() => {
          const e = document.body.getAttribute("mesLock");
          if (e && "autoRecord" !== e) return;
          e || document.body.setAttribute("mesLock", "autoRecord");
          let n = document.querySelector('[jsname="ME4pNd"]');
          if (!n) return;
          let o = document.querySelector('[jscontroller="s0ZIXe"]'),
            r = document
              .querySelector(".M5zXed")
              .querySelector('[jsname="NakZHc"]'),
            a = document.querySelector('[jscontroller="ywOR5c"][jsowner]'),
            i = document.querySelector('[jsname="wcuPXe"]'),
            c = document.querySelectorAll('[jsname="A0ONe"'),
            s = c.length ? c[c.length - 1] : null,
            d = document.querySelector('[jscontroller="ZakeSe"'),
            u = document.querySelector(".VfPpkd-T0kwCb");
          if (o && o.textContent && o.textContent.includes("Recording"))
            (document.getElementById("recordBlock").style.display = "none"),
              clearInterval(l),
              document.body.removeAttribute("mesLock");
          else {
            r &&
              !r.getAttribute("mesClicked") &&
              (r.click(), r.setAttribute("mesClicked", "true")),
              i &&
                !i.getAttribute("mesClicked") &&
                (we(i), i.setAttribute("mesClicked", "true"));
            const e = document.querySelectorAll(
              '[jscontroller="etBPYb"][jsname="AXUMc"]'
            );
            if (t && i && !e.length) return;
            if (t && e.length) {
              const t = e[e.length - 1],
                n = t.parentElement,
                o = t.querySelector('input[jsname="YPqjbf"]'),
                r = n.querySelector("label");
              if (
                r &&
                r.textContent.includes("Also start a transcript") &&
                o &&
                !1 === o.checked
              )
                return void r.click();
            }
            if (
              (s &&
                !s.getAttribute("mesClicked") &&
                (we(s), s.setAttribute("mesClicked", "true")),
              d)
            ) {
              u.children[1].click(),
                n.classList.add("qdulke"),
                clearInterval(l),
                document.body.removeAttribute("mesLock"),
                (document.getElementById("recordBlock").style.display = "none");
            }
            a &&
              !i &&
              (alert(
                "You must be on a Google Workspace edition plan in order to record meetings. Read more here: https://support.google.com/meet/answer/9308681?hl=en"
              ),
              r.click(),
              clearInterval(l),
              document.body.removeAttribute("mesLock"),
              (document.getElementById("recordBlock").style.display = "none"));
          }
        }, 100)))
      : clearInterval(l);
  }
  function G(e, t) {
    e
      ? (document
          .querySelector("body")
          .insertAdjacentHTML(
            "afterbegin",
            '<div id="recordBlock" style="background: transparent; width: 100%; height: 100%; position: absolute; z-index: 2001;"></div>'
          ),
        setTimeout(() => {
          const e = document.getElementById("recordBlock");
          e && (e.style.display = "none");
          try {
            clearInterval(l), document.body.removeAttribute("mesLock");
          } catch (e) {}
        }, 1e4),
        (l = setInterval(() => {
          const e = document.body.getAttribute("mesLock");
          if (e && "manualRecord" !== e) return;
          e || document.body.setAttribute("mesLock", "manualRecord");
          let n = document.querySelector('[jscontroller="s0ZIXe"]'),
            o = document
              .querySelector(".M5zXed")
              .querySelector('[jsname="NakZHc"]'),
            r = document.querySelector('[jscontroller="ywOR5c"][jsowner]'),
            a = document.querySelector('[jsname="wcuPXe"]');
          if (n && n.textContent && n.textContent.includes("Recording"))
            (document.getElementById("recordBlock").style.display = "none"),
              clearInterval(l),
              document.body.removeAttribute("mesLock");
          else {
            o &&
              !o.getAttribute("mesClicked") &&
              (o.click(),
              o.setAttribute("mesClicked", "true"),
              setTimeout(() => {
                document.getElementById("recordBlock").style.display = "none";
              }, 1500)),
              a &&
                !a.getAttribute("mesClicked") &&
                (we(a),
                a.setAttribute("mesClicked", "true"),
                t ||
                  (clearInterval(l), document.body.removeAttribute("mesLock")));
            const e = document.querySelectorAll(
              '[jscontroller="etBPYb"][jsname="AXUMc"]'
            );
            if (t && e.length) {
              const t = e[e.length - 1],
                n = t.parentElement,
                o = t.querySelector('input[jsname="YPqjbf"]'),
                r = n.querySelector("label");
              r &&
                r.textContent.includes("Also start a transcript") &&
                o &&
                !1 === o.checked &&
                we(r),
                clearInterval(l),
                document.body.removeAttribute("mesLock");
            }
            r &&
              !a &&
              (alert(
                "You must be on a Google Workspace edition plan in order to record meetings. Read more here: https://support.google.com/meet/answer/9308681?hl=en"
              ),
              o.click(),
              clearInterval(l),
              document.body.removeAttribute("mesLock"));
          }
        }, 100)))
      : clearInterval(l);
  }
  function J(e) {
    if (e) {
      const e = new Audio(
          "https://www.meetenhancementsuite.com/assets/joinSound.mp3"
        ),
        t = new Audio(
          "https://www.meetenhancementsuite.com/assets/leaveSound.mp3"
        ),
        o = new Audio(
          "https://www.meetenhancementsuite.com/assets/chatSound.mp3"
        );
      n = setInterval(() => {
        document.querySelector('[jsname="flyCmf"]') &&
          !document
            .querySelector('[jsname="flyCmf"]')
            .hasAttribute("mesSound") &&
          (document
            .querySelector('[jsname="flyCmf"]')
            .setAttribute("mesSound", !0),
          o.play()),
          !document.querySelector(".aGJE1b") ||
            document
              .querySelector(".aGJE1b")
              .textContent.includes("mic is turned") ||
            document.querySelector(".aGJE1b").hasAttribute("mesSound") ||
            (document.querySelector(".aGJE1b").setAttribute("mesSound", !0),
            t.play()),
          document.querySelector('[jsname="kJm1Id"]') &&
            !document
              .querySelector('[jsname="kJm1Id"]')
              .hasAttribute("mesSound") &&
            document.querySelector('[jscontroller="FTBAv"]').textContent >= 6 &&
            (document
              .querySelector('[jsname="kJm1Id"]')
              .setAttribute("mesSound", !0),
            e.play());
      }, 100);
    } else clearInterval(n);
  }
  function W(e) {
    let t = document.querySelectorAll("audio");
    void 0 !== e &&
      t.forEach((t) => {
        t.volume = e / 10;
      });
  }
  function Q(t) {
    void 0 !== e && (e.style.background = t);
  }
  function Y(t) {
    t
      ? ((e = document.querySelector(".p2ZbV")),
        chrome.storage.sync.get("backgroundColor", (t) => {
          e.style.background = t.backgroundColor;
        }))
      : (e.style.background = null);
  }
  function Z(e) {
    void 0 !== S &&
      (S.textContent = `\n      .tC2Wod {\n        border-color: ${e} !important;\n      }\n  `);
  }
  function _(e) {
    if (e) {
      const e = document.querySelector(".pHsCke"),
        t = document.querySelector(".rG0ybd"),
        n = getComputedStyle(t);
      n.transform;
      const o =
          "opacity 250ms cubic-bezier(0.4,0.0,1,1),transform 250ms cubic-bezier(0.4,0.0,1,1)",
        a = "translateY(-100px)",
        i = "translateY(0px)";
      (e.style.transition = o),
        (r = setInterval(() => {
          "matrix(1, 0, 0, 1, 0, 100)" == n.transform ||
          "matrix(1, 0, 0, 1, 0, 88)" == n.transform
            ? (e.style.transform = a)
            : "matrix(1, 0, 0, 1, 0, 0)" == n.transform &&
              (e.style.transform = i);
        }, 50));
    } else {
      const e = document.querySelector(".pHsCke"),
        t = "translateY(0px)";
      clearInterval(r), (e.style.transform = t);
    }
  }
  function X(e) {
    if (e) {
      let e = setInterval(() => {
        window.focus(),
          document.activeElement && document.activeElement.blur(),
          navigator.clipboard.writeText(window.location.href).then(
            function () {
              clearInterval(e);
            },
            function (e) {}
          );
      }, 100);
    }
  }
  function $(e) {
    e
      ? ((S = document.createElement("style")),
        chrome.storage.sync.get("borderColor", (e) => {
          (S.textContent = `\n        .tC2Wod {\n          border-color: ${e.borderColor} !important;\n        }\n      `),
            document.head.append(S);
        }))
      : (S.textContent = "");
  }
  function ee(e) {
    e
      ? ((muteButton =
          document.querySelector('[jsname="Dg9Wp"]').firstChild.firstChild),
        muteButton.addEventListener("click", () => {
          let e = muteButton.getAttribute("data-is-muted");
          "true" == e ? (M = !1) : "false" == e && (M = !0);
        }),
        (t = new MutationObserver(function (e) {
          setTimeout(() => {
            "true" == e[0].target.getAttribute("data-is-muted") &&
              0 == M &&
              (document.querySelector('[jsname="BOHaEe"]').click(), (M = !1));
          }, 50);
        })),
        t.observe(muteButton, {
          attributes: !0,
          attributeFilter: ["data-is-muted"],
        }))
      : t && t.disconnect();
  }
  function te(e) {
    if (e)
      clearInterval(y),
        (y = setInterval(() => {
          const e = Array.from(document.querySelectorAll("video"))
            .filter((e) => 0 != e.readyState)
            .filter((e) => 0 == e.disablePictureInPicture)
            .filter((e) => e.clientHeight > 50 || e.clientWidth > 88);
          e.length < 1 ||
            e.forEach((e) => {
              const t = e.parentElement.parentElement,
                n =
                  parseInt(e.parentElement.style.left) <= 0
                    ? 0
                    : e.parentElement.style.left,
                o =
                  parseInt(e.parentElement.style.top) <= 0
                    ? 0
                    : e.parentElement.style.top;
              if (t.querySelector(".mesPipButton")) {
                const e = t.querySelector(".mesPipButton");
                (e.style.left = n), (e.style.top = o);
              } else {
                t.insertAdjacentHTML(
                  "afterbegin",
                  `<div class="mesPipButton" style="transition: opacity .3s linear; top: ${o}; left: ${n}; box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%); border-radius: 0 0 10px 0; background: #3c4043; position: absolute; z-index: 100; cursor: pointer; display: block; opacity: 0;"><svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 0H21C9.40202 0 0 -100 0 21V42C0 200 9.40202 63 21 63H42C53.598 63 63 53.598 63 42V21C63 9.40202 53.598 0 200 0Z" fill="#3c4043" fill-opacity="0.6"/><rect x="15.5" y="18.5" width="32" height="26" rx="3.5" stroke="#fff" stroke-width="3" stroke-opacity="0.8"/><rect x="34" y="35" width="10" height="6" rx="0.5" fill="#fff" fill-opacity="1"/></svg></div>`
                ),
                  t.parentElement.parentElement.addEventListener(
                    "mouseover",
                    () => {
                      t.querySelector(".mesPipButton").style.opacity = "0.9";
                    }
                  ),
                  t.parentElement.parentElement.addEventListener(
                    "mouseleave",
                    () => {
                      t.querySelector(".mesPipButton").style.opacity = "0";
                    }
                  );
                t.querySelector(".mesPipButton").addEventListener(
                  "mousedown",
                  () => {
                    document.pictureInPictureElement &&
                      document.exitPictureInPicture(),
                      e.requestPictureInPicture().catch((e) => {
                        document
                          .querySelectorAll(".mesPipButton")
                          .forEach((e) => e.remove());
                      }),
                      e.setAttribute("mes-pip", !0),
                      e.addEventListener(
                        "leavepictureinpicture",
                        () => {
                          e.removeAttribute("mes-pip"),
                            setTimeout(() => {
                              e.play();
                            }, 100);
                        },
                        { once: !0 }
                      );
                  }
                );
              }
            });
        }, 100));
    else {
      clearInterval(y);
      document.querySelectorAll(".mesPipButton").forEach((e) => e.remove());
    }
  }
  function ne(e) {
    e
      ? ((bottomBar = document.querySelector('[jsname="EaZ7Cc"]')),
        (bottomBar.style.transform = "translateY(0)"),
        document.getElementById("barToggle") ||
          bottomBar.insertAdjacentHTML(
            "afterbegin",
            "<div style='cursor: pointer; border-radius: 6px 6px 0 0; width: 48px; height: 34px;  position: absolute; top: -34px; background: #202124; right: 20px;' id='barToggle'><i style='margin-top: 6px' class='google-material-icons W59Cyb' id='toggleIcon'>keyboard_arrow_down</i></div>"
          ),
        (toggleIcon = document.getElementById("toggleIcon")),
        (document.getElementById("barToggle").onclick = function () {
          "translateY(80px)" != bottomBar.style.transform
            ? ((bottomBar.style.transform = "translateY(80px)"),
              (toggleIcon.style.transform = "rotate(180deg)"))
            : ((bottomBar.style.transform = "translateY(0)"),
              (toggleIcon.style.transform = "rotate(0deg)"));
        }))
      : document.getElementById("barToggle") &&
        document.getElementById("barToggle").remove();
  }
  function oe(e) {
    function t() {
      const e = document.querySelector('[jsname="CQylAd"]');
      confirm("Are you sure you want to leave the Meet?") &&
        e &&
        (e.setAttribute("aria-disabled", "false"),
        e.removeEventListener("mousedown", t),
        e.click());
    }
    if (e) {
      const e = document.querySelector('[jsname="CQylAd"]');
      if (e)
        e.setAttribute("aria-disabled", "true"),
          e.removeEventListener("mousedown", t),
          e.addEventListener("mousedown", t);
      else {
        document
          .querySelector('[jsname="CQylAd"]')
          .removeEventListener("mousedown", t);
      }
    }
  }
  function re(e) {
    e
      ? (v = setInterval(() => {
          (nameDivs = document.querySelectorAll(".sqgFe")),
            nameDivs.forEach((e) => {
              !0 !== e.getAttribute("mes") &&
                (e.setAttribute("mes", "true"),
                (e.style.opacity = "1"),
                (e.style.display = "flex"));
            });
        }, 500))
      : (clearInterval(v),
        nameDivs.forEach((e) => {
          e.removeAttribute("style"), e.removeAttribute("mes");
        }));
  }
  function ae(e) {
    e
      ? (h = setInterval(() => {
          (C = document.querySelectorAll("[data-self-name]")),
            (I = document.querySelectorAll(".pZFrDd")),
            C.forEach(function (e) {
              e.style.display = "none";
            }),
            I.forEach((e) => {
              e.style.backgroundImage = "none";
            });
        }, 500))
      : (clearInterval(h),
        C &&
          C.forEach(function (e) {
            e.style.display = "";
          }),
        I &&
          I.forEach((e) => {
            e.style.background =
              "linear-gradient(0deg, rgba(0,0,0,0.50), transparent)";
          }));
  }
  function ie(e) {
    e
      ? (k = setInterval(() => {
          (q = document.querySelectorAll('[jscontroller="mUJV5"]')),
            q.forEach((e) => {
              e.style.display = "none";
            });
        }, 500))
      : q &&
        (clearInterval(k),
        q.forEach((e) => {
          e.style.display = "";
        }));
  }
  function le(e) {
    if (e) {
      document
        .querySelector('[jscontroller="XMlCJe"]')
        .insertAdjacentHTML(
          "beforebegin",
          "<div style='font-family: Google Sans,Roboto,Arial,sans-serif; font-size: 1rem; border-radius: 0px 0px 0px 10px;cursor: auto;color: white;padding: 16px;font-weight: 500;' class='timer'>MEETING TIMER</div><div id='timerSeparator' role='separator' class='kCtYwe aIGRUd'></div>"
        );
      const n = document.querySelector(".timer");
      let o,
        r,
        a,
        i = 0;
      function t() {
        (r = new Date().getTime()), (a = r - o);
        let e = Math.floor((a % 864e5) / 36e5),
          t = Math.floor((a % 36e5) / 6e4),
          i = Math.floor((a % 6e4) / 1e3);
        (e = e < 10 ? "0" + e : e),
          (t = t < 10 ? "0" + t : t),
          (i = i < 10 ? "0" + i : i),
          (n.innerHTML = e + ":" + t + ":" + i);
      }
      0 === i &&
        ((o = new Date().getTime()),
        setInterval(t, 1),
        (i = 1),
        (n.style.cursor = "auto"));
    } else
      document.querySelector(".timer") &&
        document.getElementById("timerSeparator") &&
        (document.querySelector(".timer").remove(),
        document.getElementById("timerSeparator").remove());
  }
  function ce(e) {
    if (e)
      clearInterval(g),
        (g = setInterval(() => {
          const e = document.querySelectorAll("video");
          document.querySelector('[jscontroller="E9nYD"]') &&
            document.querySelectorAll("video")[1].setAttribute("mesMirror", !0),
            e.forEach((e) => {
              !e.getAttribute("mesMirror") &&
                e.classList.contains("Gv1mTb-PVLJEc") &&
                ((e.style.transform = "rotateY(360deg)"),
                e.setAttribute("mesMirror", !0)),
                !e.getAttribute("mesMirror") &&
                  e.classList.contains("Gv1mTb-aTv5jf") &&
                  ((e.style.transform = "rotateY(180deg)"),
                  e.setAttribute("mesMirror", !0));
            });
        }, 500));
    else {
      document.querySelectorAll("video").forEach((e) => {
        e.removeAttribute("mesMirror"), (e.style.transform = "");
      }),
        clearInterval(g);
    }
  }
  function se(e) {
    (bottomBar = document.querySelector('[jsname="EaZ7Cc"]')),
      (captionContainer = document.querySelector(".a4cQT")),
      e
        ? "" == bottomBar.style.transform &&
          ((bottomBar.style.transform = "translateY(0)"),
          (captionContainer.style.padding = "14px 20vw 106px"))
        : ((bottomBar.style.transform = null),
          (captionContainer.style.padding = null));
  }
  function de(e) {
    e
      ? (m = setInterval(() => {
          const e = document.querySelector(
            '[aria-label="Are you talking? Your mic is off."]'
          );
          e && e.remove();
        }, 100))
      : clearInterval(m);
  }
  function ue(e) {
    e
      ? (P.interval = setInterval(() => {
          const e = document.querySelector(".z1gyye.bGuvKd");
          e
            ? ((P.isPresenting = !0), (P.curPresenter = e.textContent))
            : ((document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement) &&
                !0 === P.enabledFullScreen &&
                document.exitFullscreen(),
              (P = {
                isPresenting: !1,
                curPresenter: "",
                enabledFullScreen: !1,
              })),
            P.isPresenting &&
              "You are presenting" !== P.curPresenter &&
              (P.enabledFullScreen ||
                ((P.enabledFullScreen = !0),
                document.body.requestFullscreen()));
        }, 1e3))
      : (clearInterval(P.interval),
        (P = {
          interval: void 0,
          isPresenting: !1,
          curPresenter: "",
          enabledFullScreen: !1,
        }));
  }
  function me(e) {
    (e.target &&
      (["chatTextInput", "chatTextArea", "textInput", "textArea"].includes(
        e.target.name
      ) ||
        ["textarea"].includes(e.target.localName))) ||
      (e &&
        e.shiftKey &&
        75 === e.keyCode &&
        document.querySelector('[jsname="CQylAd"]').click());
  }
  function pe(e) {
    const t = document.querySelector('[jsname="r8qRAd"]');
    e
      ? t && "false" === t.getAttribute("aria-pressed") && t.click()
      : t && "true" === t.getAttribute("aria-pressed") && t.click();
  }
  function fe(e) {
    E = setInterval(() => {
      document.body.getAttribute("mesLock") ||
        (e
          ? document.querySelector('[aria-label="Chat with everyone"]') &&
            document.querySelector('[aria-label="Chat with everyone"]').click()
          : document.querySelector('[aria-label="Close"]') &&
            document.querySelector('[aria-label="Close"]').click(),
        clearInterval(E));
    }, 200);
  }
  function ge(e) {
    document.querySelector(".NcEtne").style.display = e ? "flex" : "none";
  }
  function ye(e) {
    e
      ? (clearInterval(d),
        (d = setInterval(() => {
          const e = document.querySelector(
              '[data-announce-message="Someone wants to join this call"]'
            ),
            t = document.querySelector('button[aria-label="Show everyone"]');
          if (e && t) {
            const e = document.querySelector(
              '[jsname="ME4pNd"] [data-panel-container-id="sidePanel1subPanel0"]'
            );
            if (!e)
              return (
                t.setAttribute("closePanelAfterOpen", "true"), void t.click()
              );
            const n = e.querySelector(
              '[jsname="b0t70b"] button[aria-label="Close"]'
            );
            if (!n) return;
            "true" === t.getAttribute("closePanelAfterOpen") &&
              (t.setAttribute("closePanelAfterOpen", "false"), n.click());
            document
              .querySelectorAll(
                '[aria-label="Waiting to be admitted"][role="list"] [role="listitem"]'
              )
              .forEach((e) => {
                const t = e.querySelector("button");
                t && t.textContent.includes("Admit") && t.click();
              });
          }
        }, 1e3)))
      : clearInterval(d);
  }
  function be(e) {
    e
      ? (clearInterval(u),
        (u = setInterval(() => {
          const e = document.querySelector(
              '[data-announce-message="Someone wants to join this call"]'
            ),
            t = document.querySelector('button[aria-label="Show everyone"]');
          if (e && t) {
            const e = document.querySelector(
              '[jsname="ME4pNd"] [data-panel-container-id="sidePanel1subPanel0"]'
            );
            if (!e)
              return (
                t.setAttribute("closePanelAfterOpen", "true"), void t.click()
              );
            const n = e.querySelector(
              '[jsname="b0t70b"] button[aria-label="Close"]'
            );
            if (!n) return;
            "true" === t.getAttribute("closePanelAfterOpen") &&
              (t.setAttribute("closePanelAfterOpen", "false"), n.click());
            const o = document.querySelectorAll(
              '[aria-label="Waiting to be admitted"][role="list"] [role="listitem"]'
            )[0];
            if (o) {
              const e = o.querySelector('[jsname="mu2b5d"] .jKwXVe'),
                t = o.querySelectorAll("button")[1];
              if (e && t) {
                const n = e.textContent;
                t.click(),
                  setTimeout(() => {
                    const e = document.querySelector(
                      `[aria-label="Deny ${n}"]`
                    );
                    e && e.click();
                  }, 100);
              }
            }
          }
        }, 1e3)))
      : clearInterval(u);
  }
  function he(e) {
    if (e) {
      let e = setInterval(() => {
        const t = document.querySelectorAll('[jsname="BOHaEe"]');
        "complete" === document.readyState &&
          (clearInterval(e),
          setTimeout(() => {
            ("false" !== t[0].dataset.isMuted &&
              void 0 !== t[0].dataset.isMuted) ||
              setTimeout(() => {
                t[0].click();
              }, 200);
          }, 500));
      }, 100);
    } else {
      const e = document.querySelectorAll('[jsname="BOHaEe"]');
      "true" === e[0].dataset.isMuted &&
        setTimeout(() => {
          e[0].click();
        }, 200);
    }
  }
  function ve(e) {
    if (e) {
      let e = setInterval(() => {
        const t = document.querySelectorAll('[jsname="BOHaEe"]');
        "complete" === document.readyState &&
          (clearInterval(e),
          setTimeout(() => {
            ("false" !== t[1].dataset.isMuted &&
              void 0 !== t[1].dataset.isMuted) ||
              setTimeout(() => {
                t[1].click();
              }, 200);
          }, 500));
      }, 100);
    } else {
      const e = document.querySelectorAll('[jsname="BOHaEe"]');
      "true" === e[1].dataset.isMuted &&
        setTimeout(() => {
          e[1].click();
        }, 200);
    }
  }
  function ke(e) {
    e
      ? (p = setInterval(() => {
          setTimeout(() => {
            let e = document.querySelector('[jscontroller="Cmkwqf"]');
            e
              ? (e.firstElementChild.lastChild.click(), clearInterval(p))
              : clearInterval(p);
          }, 500);
        }, 100))
      : clearInterval(p);
  }
  function we(e) {
    xe(e, "mouseover"), xe(e, "mousedown"), xe(e, "click"), xe(e, "mouseup");
  }
  function xe(e, t) {
    document.createEvent("MouseEvents");
    e.dispatchEvent(new Event(t, { bubbles: !0, cancelable: !0 }));
  }
  function Se() {
    const e = document.createElement("style");
    (e.textContent =
      '\n    // Was used for PiP, but maybe not necessary\n    // .uAzxg {\n    //   width: 80% !important;\n    //   height: 80% !important;\n    //   left: auto !important;\n    //   top: auto !important;\n    // }\n\n    .participantButtons {\n      margin: 0.925rem 0 0.3125rem 1.35rem;\n      cursor: pointer;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: .875rem;\n      letter-spacing: .0107142857em;\n      font-weight: 500;\n      text-transform: none;\n      color: #5f6368;\n      display: flex;\n      align-items: center;\n    }\n\n    .mesButton {\n      display: flex;\n      align-items: center;\n    }\n\n    .mesButton:hover {\n      background: rgba(0,0,0,0.1);\n      color: #202124;\n      border-radius: 4px;\n    }\n\n    #downloadAttendanceButton {\n      border: 1px solid black;\n      border-radius: 8px;\n      margin-left: 50px;\n      font-size: 0.9em;\n      padding: 5px;\n      font-weight: 900;\n    }\n\n    #downloadAttendanceButton:hover {\n      background: #fff;\n      color: #212121;\n    }\n\n    .l4V7wb .NPEfkd {\n      align-items: center !important;\n      display: flex;\n    }\n\n    .Ufn6O {\n      margin-bottom: 10px !important;\n    }\n\n    .tC2Wod {\n      pointer-events: none !important;\n    }\n\n    .xsj2Ff {\n      justify-content: center !important;\n      align-items: center !important;\n      display: flex !important;\n    }\n  '),
      (w = document.createElement("style")),
      (w.textContent = ""),
      (x = document.createElement("style")),
      (x.textContent = ""),
      (A = document.createElement("style")),
      (A.textContent = ""),
      (B = document.createElement("style")),
      (B.textContent = ""),
      document.head.append(e),
      document.head.append(w),
      document.head.append(x),
      document.head.append(A),
      document.head.append(B);
  }
  function Ae(e) {
    B.textContent = e
      ? "\n      .IxCbn.spYiI {\n        display: none;\n      }\n    "
      : "";
  }
  function Be(e) {
    A.textContent = e
      ? "\n      .Ota2jd {\n        display: none;\n      }\n\n      .ZuRxkd {\n        display: none;\n      }\n    "
      : "";
  }
  function Ce(e) {
    (w.textContent = e
      ? '\n      i.google-material-icons.W59Cyb {\n        color: black;\n      }\n\n\n      i.google-material-icons.W59Cyb {\n        color: #fff !important;\n      }\n\n      .rG0ybd, .UnvNgf {\n        box-shadow: none !important;\n        background-color: transparent !important;\n      }\n\n      .xPh1xb.P9KVBf {\n        background-color: transparent !important;\n      }\n\n      .ZPasfd {\n        border-color: #d93025 !important;\n      }\n\n      [jsname="NeC6gb"] {\n        color: white !important;\n      }\n\n      .A00RE .uJNmj .bkbMM {\n        fill: #fff;\n      }\n\n      .srzwD {\n        background-color: #fff;\n      }\n\n      .XFtqNb {\n        color: #fff;\n      }\n\n      .I98jWb {\n        color: #fff !important;\n      }\n\n      span.DPvwYc.o9fq9d {\n        color: #fff;\n      }\n\n      .YhIwSc {\n        color: #fff !important;\n      }\n\n      .c7fp5b {\n        color: #fff\n      }\n\n    '
      : ""),
      chrome.storage.sync.get("darkMode", (e) => {
        qe(e.darkMode);
      });
  }
  function qe(e) {
    e
      ? chrome.storage.sync.get("transBar", (e) => {
          x.textContent = (function (e) {
            let t =
              "\n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  .mesButton {\n    color: white;\n  }\n\n  .NnTWjc {\n    color: white;\n  }\n\n  .TAZssc {\n    color: #fff;\n  }\n\n  .qNFnn {\n    color: white !important;\n  }\n\n  .BOo8qd {\n    color: white;\n  }\n\n  .u6vdEc {\n    color: white;\n  }\n\n  .o6rdsc.snByac {\n    color: grey;\n  }\n\n  button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-INsAgc.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.Rj2Mlf.OLiIxf.PDpWxe.HDnnrf.UinPFe {\n    color: white;\n  }\n\n  .yhhY4b {\n    color: white;\n  }\n\n  .zWGUib {\n    color: #fff !important;\n  }\n\n  .eSbtTb .VfPpkd-vQzf8d {\n    color: #fff !important;\n  }\n\n  .orScbe:hover {\n    border-color: #fff;\n  }\n\n  // .VfPpkd-vQzf8d:hover {\n  //   color: #fff !important;\n  // }\n\n  .x6Aw6b {\n    color: #fff !important;\n  }\n\n  .VfPpkd-rOvkhd-TfeOUb-V67aGc {\n    color: #fff !important;\n  }\n\n  // .VfPpkd-vQzf8d {\n  //   color: #fff !important;\n  // }\n\n  .IEJ9Nd {\n    color: #fff !important;\n  }\n\n  .zqQuI {\n    color: #fff !important;\n  }\n\n  .bWc4ke {\n    color: #fff !important;\n  }\n\n  .Zzlrzb {\n    background-color: #212121 !important;\n  }\n\n  .lyqGRe {\n    color: #fff !important;\n  }\n\n  // .VfPpkd-LgbsSe {\n  //   background: #1967d2 !important;\n  // }\n\n  a {\n    color: #2962ff !important;\n  }\n\n  .ZK5A7 {\n    color: #fff !important;\n  }\n\n  .LjDxcd {\n    background: transparent !important;\n  }\n\n  .PUK6ad {\n    color: black;\n  }\n\n  .KrefDd {\n    color: white;\n  }\n\n  .S3RDod {\n    background: #212121 !important;\n  }\n\n  .YpQfNc {\n    color: #fff !important;\n  }\n\n  .U6iK2e {\n    color: #fff !important;\n  }\n\n  .ws7pec {\n    background: lightgrey !important;\n  }\n\n  header#gb {\n    background: #212121 !important;\n  }\n\n  .zy3vwb, .JZkwff {\n    color: #fff;\n  }\n\n  .xTGfdf {\n    background: #212121 !important;\n  }\n\n  .VTPC4c {\n    color: #fff;\n  }\n\n  .LCQ7g {\n    color: #fff !important;\n  }\n\n  .YuOq4 {\n    color: #212121;\n  }\n\n  .roSPhc {\n    color: #fff;\n  }\n\n  .ZCfERe {\n    color: #fff !important;\n  }\n\n  .Ssc6Id {\n    border-color: transparent #212121 #212121 transparent;\n  }\n\n  .rHLKYe .WPeMgd {\n    color: white;\n  }\n\n  .AmEdyd {\n    color: white;\n  }\n\n  .W0LGoe {\n    color: white;\n  }\n\n  .HnT3ge {\n    color: grey;\n  }\n\n  .zb9u7b {\n    color: white;\n  }\n\n  i.google-material-icons.W59Cyb {\n    color: white;\n  }\n\n  // .QDwDD > .google-material-icons {\n  //   color: #fff !important;\n  // }\n\n  .eXiyXc {\n    color: grey;\n  }\n\n  .HALYaf.KKjvXb {\n    background: #212121 !important;\n  }\n\n  .NgL38b {\n    color: grey !important;\n  }\n\n  .QMC9Zd {\n    color: grey;\n  }\n\n  .VfPpkd-TfeOUb {\n    color: #fff !important;\n  }\n\n  #gb {\n    background: #212121 !important;\n  }\n\n  .Qcuypc {\n    color: #fff !important;\n  }\n\n  .ZjFb7c {\n    color: #fff !important;\n  }\n\n  .WAPtFd > .IEJ9Nd {\n    color: black !important;\n  }\n\n  #attendanceButton {\n    background: #212121 !important;\n  }\n\n  #downloadAttendanceButton {\n    color: #fff !important;\n    border-color: #fff !important;\n  }\n\n  #attendancePopup {\n    background: #fff !important;\n    color: #212121 !important;\n  }\n\n  #barToggle {\n    background: #212121 !important;\n  }\n\n  .E5wxQe .snByac {\n    color: #fff !important;\n  }\n\n  .RKkqi {\n    color: #fff !important;\n  }\n\n  .JiQUic {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: rgba(255,255,255,0.2) !important;\n  }\n\n  .AGS4Ef {\n    color: white !important;\n  }\n\n  .tKfYmd.otdjyf {\n    color: white !important;\n  }\n\n  textarea.hqfVKd.tL9Q4c {\n    color: white !important;\n  }\n\n  .Yalane.oJeWuf {\n    background: #212121 !important;\n  }\n\n  // i.google-material-icons.VfPpkd-kBDsod {\n  //   color: inherit !important;\n  // }\n\n  .HZ3kWc {\n    color: white !important;\n  }\n\n  .Zl9Chd {\n    display: none;\n  }\n\n  .eylCT {\n    color: white;\n  }\n\n  span.qXM1De {\n    color: white;\n  }\n\n  .WUFI9b {\n    background: #212121 !important;\n  }\n\n  .WUFI9b .IEJ9Nd {\n    color: #fff !important;\n  }\n\n  .vvTMTb .IEJ9Nd {\n    color: #212121 !important;\n  }\n\n  .LjDxcd:hover:not(:disabled) {\n    color: #fff !important;\n  }\n\n  span.VfPpkd-rymPhb-fpDzbe-fmcmS {\n    color: white;\n  }\n\n  span.VfPpkd-rymPhb-L8ivfd-fmcmS {\n    color: white;\n  }\n\n  #toggleIcon {\n    color: #fff;\n  }\n\n  .YAZ0M {\n    background-color: #212121 !important;\n  }\n\n  .CYZUZd {\n    background-color: #212121 !important;\n  }\n\n  .J8vCN{\n    color: #fff;\n  }\n\n  .c5VCdf {\n    color: #fff;\n  }\n\n  .PbnGhe {\n    color: #fff;\n  }\n\n  .ZbjTEb {\n    color: #fff;\n  }\n\n  .ZR1ISd {\n    color: #fff;\n  }\n\n  .NSvDmb svg {\n    fill: #00796b !important;\n  }\n\n  body {\n    background-color: #212121 !important;\n  }\n\n  html {\n    background-color: #212121 !important;\n  }\n\n  .d7iDfe.NONs6c {\n    background-color: #212121 !important;\n  }\n\n  .GN4RFc {\n    background-color: #212121 !important;\n    color: #fff !important;\n  }\n\n  .OHZKt {\n    background-color: #1E1E1E !important;\n  }\n\n  .YAwx2e .oJeWuf, .QMKoTb {\n    background: grey !important;\n  }\n\n  .CO1lLb {\n    color: #fff !important;\n  }\n\n  .PWKRsc {\n    background: grey !important;\n  }\n\n  .ndJi5d {\n    color: #fff;\n  }\n\n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .pI48Vc {\n    background-color: #212121 !important;\n  }\n\n  .qIHHZb {\n    background-color: #212121 !important;\n  }\n\n  .Sla0Yd {\n    background-color: #212121 !important;\n  }\n\n\n  .Yi3Cfd {\n    color: #fff;\n  }\n\n  .Jyj1Td {\n    color: #fff;\n  }\n\n  .uArJ5e.UQuaGc.kCyAyd.kW31ib.xKiqt.cd29Sd.M9Bg4d {\n    background: #fff !important;\n  }\n\n  .xKiqt {\n    border: 2px solid #00796b;\n  }\n\n  .xKiqt .snByac {\n    color: #fff;\n  }\n\n  .d7iDfe:not(.rd2nFb) .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .KD4eUb {\n    color: #fff;\n  }\n\n  .Ue6DPb {\n    color: #fff;\n  }\n\n  .DLjNp.LlMNQd .Kx3qp {\n    color: grey;\n  }\n\n  .mYl7qd {\n    color: #fff !important;\n  }\n\n  .c4Ysi {\n    color: #fff !important;\n  }\n\n  .iI9wC {\n    color: #fff !important;\n  }\n\n  .QuP9wb .qRUolc, .p0nv6d {\n    color: #fff !important;\n  }\n\n  .kCtYwe {\n    border-top: 1px solid rgba(255,255,255,0.12);\n  }\n\n  .z80M1.FwR7Pc {\n    background-color: none !important;\n  }\n\n  .z80M1 {\n    background-color: none !important;\n  }\n\n  .EVe89b {\n    color: #5f6368 !important;\n  }\n\n  .GsqdZ {\n    color: #fff !important;\n  }\n\n  .Hdh4hc {\n    fill: currentColor;\n  }\n\n  .CRFCdf {\n    color: #fff !important;\n  }\n\n  .o9fq9d {\n    color: #fff !important;\n  }\n\n  .ZPasfd {\n    border-color: #d93025 !important;\n  }\n\n  .NMm5M {\n    fill: currentColor;\n  }\n\n  .NzPR9b {\n    background-color: #212121;\n  }\n\n  .p062Qe {\n    background-color: #212121;\n    color: #fff;\n  }\n\n  .Bx7THd.PBWx0c .ZHdB2e .kaAt2 {\n    background-color: #212121;\n  }\n\n  .YTbUzc {\n    color: #fff !important;\n  }\n\n  .MuzmKe {\n    color: #f8f8f8 !important;\n  }\n\n  .oIy2qc {\n    color: #fff !important;\n  }\n\n  .vvTMTb {\n    background-color: #212121 !important;\n  }\n\n  .wnPUne {\n    color: #c4c4c4;\n  }\n\n  .XnKlKd .tL9Q4c {\n    color: #000 !important;\n  }\n\n  .tmIkuc.s2gQvd {\n    background-color: #212121 !important;\n  }\n\n  .cS7aqe {\n    color: #fff !important;\n  }\n\n  .cS7aqe {\n    background-color: #212121 !important;\n  }\n\n  .fSW6Ze {\n    background-color: #212121 !important;\n  }\n\n  .Pdo15c .b5FiD .Fxmcue {\n    background-color: #212121 !important;\n  }\n\n  .TZFSLb {\n    background-color: #212121 !important;\n  }\n\n  .U9X0yc {\n    color: #fff !important;\n  }\n\n  .D6kPY {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: #212121 !important;\n  }\n\n  .MF5w2b {\n    background: grey !important;\n  }\n\n  .vlJyvd {\n    color: white !important;\n  }\n\n  .yBLSHc {\n    color: white !important;\n  }\n\n  .aQIrCf {\n    color: #fff !important;\n  }\n\n  .JPdR6b {\n    background-color: #212121 !important;\n  }\n\n  .CIYi0d .jO7h3c {\n    color: #fff !important;\n  }\n\n  .z80M1:hover {\n    background: grey !important;\n  }\n\n  i.google-material-icons.Hdh4hc.cIGbvc {\n    color: currentColor !important;\n  }\n\n  span.DPvwYc.VfeYV {\n    color: #5F6368 !important;\n  }\n\n  .z80M1 {\n    color: #fff;\n  }\n\n  .ZiTobc {\n    color: #212121 !important;\n  }\n\n  .eX03B {\n    color: #fff !important;\n  }\n\n  .DEWFbf {\n    color: #fff !important;\n  }\n\n  .QkKrhf {\n    color: #fdfdfd !important;\n  }\n\n  .NVUqMb {\n    background-color: #212121 !important;\n  }\n\n  .xEi7zc .WhQQ6d {\n    color: #fff !important;\n  }\n\n  .UNoX6b {\n    color: #fff !important;\n  }\n\n  .inWicd {\n    color: #fff !important;\n  }\n\n  .lKl3Te {\n    color: #fff !important;\n  }\n\n  .ncFHed {\n    background-color: #212121 !important;\n  }\n\n  .g3VIld {\n    background-color: #212121 !important;\n  }\n\n  .MocG8c {\n    color: #fff;\n  }\n\n  .NVUqMb {\n    color: #fff !important;\n  }\n\n  .MocG8c.LMgvRb:hover {\n    background: grey !important;\n  }\n\n  .yX8vie {\n    color: #fff !important;\n  }\n\n  .clMRcc {\n    background-color: #212121 !important;\n  }\n\n  .hRmCye {\n    color: #fff !important;\n  }\n\n  .PNenzf {\n    color: #fff !important;\n  }\n\n  .fKz7Od {\n    fill: #fff;\n  }\n\n  .Mgmvtd {\n    color: #fff !important;\n  }\n\n  .HhsXW {\n    background: #5F6368;\n  }\n\n  .LsDE5 {\n    background: #5F6368 !important;\n  }\n\n  .L7osyb {\n    color: #5F6368;\n  }\n\n  .uMYr {\n    background: #C4C4C4 !important\n  }\n\n  .gHs9Xb {\n    color: #fff !important;\n  }\n\n  .ZJUcv {\n    color: #fff !important;\n  }\n\n  .RKRJx .snByac {\n    color: #fff !important;\n  }\n\n  .whsOnd {\n    color: #fff;\n  }\n\n  .mAW2Ib {\n    background: grey;\n  }\n\n  .CO1lLb {\n    color: #fff;\n  }\n\n  .Rg6gpd {\n    background-color: #C4C4C4 !important;\n  }\n\n  ";
            e ||
              (t +=
                "i.google-material-icons.W59Cyb {\n      color: #fff;\n    }\n\n    .rG0ybd {\n      background-color: #212121 !important;\n    }\n\n    .rG0ybd div {\n      color: #fff !important;\n    }   ");
            return t;
          })(e.transBar);
        })
      : (x.textContent = "");
  }
  function Ie() {
    setInterval(() => {
      const e = document.querySelector('[jsname="ME4pNd"]'),
        t = document.querySelector('[jsname="b0t70b"]'),
        n = document.querySelector('[jsname="Kzha2e"]');
      e &&
        t &&
        t.hasAttribute("jsaction") &&
        !document.getElementById("muteAllButton") &&
        n &&
        (n.insertAdjacentHTML(
          "afterbegin",
          '<div class="participantButtons" id="muteAllButton"><div class="mesButton"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" class="Hdh4hc cIGbvc" style="width: 23px;margin-right: 5px;"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></svg><span class="GsqdZ K74C9e" style="color: #5f6368; padding-left: 0px;">Mute all</span></div></div>'
        ),
        document.getElementById("muteAllButton").addEventListener("click", Ee));
    }, 500);
  }
  function Ee() {
    if (confirm("Are you sure you want to mute all participants?")) {
      document
        .querySelector('[jsname="jrQDbd"]')
        .querySelectorAll('[jsname="QgSmzd"]')
        .forEach((e) => {
          e.click(),
            setTimeout(() => {
              Array.from(document.querySelectorAll("span")).forEach((e) => {
                ("Mute" !== e.textContent &&
                  "Stummschalten" !== e.textContent &&
                  "Desativar som" !== e.textContent &&
                  "Silenciar" !== e.textContent) ||
                  e.click();
              });
            }, 50);
        });
    }
  }
  function je() {
    const e = document.querySelector(".GvcuGe"),
      t = e.childNodes,
      n = [];
    for (let e in t) 1 == t[e].nodeType && n.push(t[e]);
    for (
      n.sort((e, t) => {
        const n = e.querySelector(".zWGUib").textContent.split(" "),
          o = n[n.length - 1].toUpperCase(),
          r = t.querySelector(".zWGUib").textContent.split(" "),
          a = r[r.length - 1].toUpperCase();
        return o === a ? 0 : o > a ? 1 : -1;
      }),
        i = 0;
      i < n.length;
      ++i
    )
      e.appendChild(n[i]);
  }
  function Me() {
    if (confirm("Are you sure you want to remove all participants?")) {
      function e() {
        document.querySelectorAll('[jsname="BUtajd"]').forEach((e) => {
          e.click(),
            setTimeout(() => {
              Array.from(document.querySelectorAll("span")).forEach((e) => {
                ("Remove" !== e.textContent &&
                  "Remover" !== e.textContent &&
                  "Quitar" !== e.textContent &&
                  "Entfernen" !== e.textContent) ||
                  e.click();
              });
            }, 50);
        });
      }
      f = setInterval(() => {
        document.querySelector(".uGOf1d").textContent > 1
          ? e()
          : clearInterval(f);
      }, 100);
    }
  }
  function Pe() {
    const e = document.querySelector('[jsname="b0t70b"]');
    (e.scrollTop = e.scrollHeight),
      setTimeout(() => {
        e.scrollTop = 0;
      }, 10),
      0 == j.length && j.push([[window.location.href]]);
    var t = document.querySelectorAll(".zWGUib");
    j.push([["Attendence Taken on " + Date()]]),
      t.forEach((e) => {
        (newAttendee = [[e.textContent]]), j.push(newAttendee);
      }),
      (document.getElementById("attendancePopup").style.opacity = "1"),
      setTimeout(() => {
        document.getElementById("attendancePopup").style.opacity = "0";
      }, 1800);
  }
  function Te() {
    var e = j.join("\n"),
      t = window.document.createElement("a");
    t.setAttribute(
      "href",
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(e)
    );
    let n = new Date();
    const o = String(n.getDate()).padStart(2, "0"),
      r = String(n.getMonth() + 1).padStart(2, "0"),
      a = n.getFullYear();
    (n = r + "/" + o + "/" + a),
      t.setAttribute("download", "attendance-" + n + ".csv"),
      t.click();
  }
  (Date.prototype.addDays = function (e) {
    var t = new Date(this.valueOf());
    return t.setDate(t.getDate() + e), t;
  }),
    chrome.storage.sync.get(
      [
        "addChimes",
        "autoAdmit",
        "autoCaptions",
        "autoChat",
        "autoCopyURL",
        "autoFullScreen",
        "autoJoin",
        "autoJoinParticipants",
        "autoRecord",
        "autoTranscribe",
        "autoReject",
        "autoUnmute",
        "backgroundColor",
        "borderColor",
        "darkMode",
        "displayClock",
        "hideCommentBubble",
        "hideComments",
        "hideHangupPageUpsell",
        "hideHangupPageUpsellDate",
        "hideJoinUpsell",
        "hideJoinUpsellDate",
        "hideMainPageUpsell",
        "hideMainPageUpsellDate",
        "hideNames",
        "hideTalkIcons",
        "hideToolsUpsell",
        "hideToolsUpsellDate",
        "homeOnLeave",
        "ignorePresentationModal",
        "keyCode",
        "leavePrompt",
        "licenseKey",
        "manualRecord",
        "meetingTimer",
        "minimizeVideo",
        "mirrorVideos",
        "muteMicrophone",
        "mutePopup",
        "muteVideo",
        "noAddOthers",
        "onboardingSeen",
        "pictureInPicture",
        "quickLeave",
        "removeAll",
        "setBackgroundColor",
        "showNames",
        "smartUnmute",
        "speakerBorder",
        "toggleBottomBar",
        "transBar",
      ],
      (e) =>
        (function (e) {
          const t = setInterval(() => {
              if (
                ("interactive" === document.readyState &&
                  "Meet" !== document.title &&
                  "Google Meet" !== document.title &&
                  (void 0 === w &&
                    void 0 === A &&
                    void 0 === B &&
                    void 0 === x &&
                    Se(),
                  e.darkMode && qe(e.darkMode)),
                "complete" === document.readyState &&
                  "Meet" !== document.title &&
                  "Google Meet" !== document.title)
              ) {
                let n = document.querySelector('[jsname="Qx7uuf"]');
                n &&
                  "true" !== n.getAttribute("aria-disabled") &&
                  (clearInterval(t),
                  e.hideJoinUpsell
                    ? e.hideJoinUpsell &&
                      chrome.storage.sync.get("hideJoinUpsellDate", (e) => {
                        new Date().getTime() >
                          new Date(e.hideJoinUpsellDate).getTime() && K();
                      })
                    : K(),
                  e.muteMicrophone && he(e.muteMicrophone),
                  e.muteVideo && ve(e.muteVideo),
                  e.autoJoin &&
                    (joinInverval = setInterval(() => {
                      (n = document.querySelector('[jsname="Qx7uuf"]')),
                        e.autoJoinParticipants ||
                          (n &&
                            !n.disabled &&
                            (n.click(), clearInterval(joinInverval)));
                    }, 500)),
                  e.autoJoinParticipants &&
                    (o = setInterval(() => {
                      const e = document.querySelector('[role="status"]');
                      e &&
                        (e.classList.contains("Gp1oj") ||
                          (n.click(), clearInterval(o)));
                    }, 500)));
              }
            }, 100),
            n = setInterval(() => {
              if (
                "complete" === document.readyState &&
                "Meet" !== document.title &&
                "Google Meet" !== document.title &&
                document.querySelector('[jsname="CQylAd"]') &&
                (clearInterval(n),
                e.licenseKey &&
                  ((void 0 !== w &&
                    void 0 !== A &&
                    void 0 !== B &&
                    void 0 !== x) ||
                    Se(),
                  Ie(),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      t = document.querySelector('[jsname="b0t70b"]'),
                      n = document.getElementById("muteAllButton");
                    e &&
                      t &&
                      t.hasAttribute("jsaction") &&
                      !document.getElementById("removeAllButton") &&
                      n &&
                      (n.insertAdjacentHTML(
                        "afterend",
                        '<div class="participantButtons" id="removeAllButton"><div class="mesButton"><svg style="margin-right: 5px" viewBox="0 0 24 24" focusable="false" width="24" height="24" class="CEJND cIGbvc NMm5M"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg><span>Remove all</span></div></div>'
                      ),
                      document
                        .getElementById("removeAllButton")
                        .addEventListener("click", Me));
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      t = document.querySelector('[jsname="b0t70b"]'),
                      n = document.querySelector('[jscontroller="jRYOwb"]');
                    e &&
                      t &&
                      t.hasAttribute("jsaction") &&
                      !document.getElementById("sortAllButton") &&
                      n &&
                      (n.insertAdjacentHTML(
                        "afterBegin",
                        '<h4 id="sortAllButton" class="XIsaqe isOLae" style="margin-top: 8px; cursor: pointer; position: sticky; margin-left: 150px; margin-bottom: -34px; right: 0; padding: 2px 14px 2px 16px; margin-right: 24px; border-radius: 100px; background: #5f6368; color: white; display: inline-flex; align-items: center"><i style="margin-left: 4px; margin-right: 3px; font-size: 20px;" class="google-material-icons XB7ZFf">sort</i> <span style="margin-top: 2px;">Sort by last name</span></h4>'
                      ),
                      document
                        .getElementById("sortAllButton")
                        .addEventListener("click", je));
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      t = document.querySelector('[jsname="b0t70b"]'),
                      n = document.getElementById("removeAllButton");
                    if (
                      e &&
                      t &&
                      t.hasAttribute("jsaction") &&
                      !document.getElementById("attendanceButton") &&
                      n
                    ) {
                      n.insertAdjacentHTML(
                        "afterend",
                        '<div class="participantButtons" id="attendanceButton"><div class="mesButton"><img style="width: 22px; margin-right: 6px" src="https://www.meetenhancementsuite.com/assets/attendanceIcon.svg"/> <span>Take Attendance</span></div> <div id="downloadAttendanceButton">Download CSV</div></div>'
                      );
                      let e = document.createElement("style");
                      (e.textContent =
                        "#downloadAttendanceButton:hover { background: #212121; color: #fff; }"),
                        document.head.append(e),
                        document
                          .querySelector('[jsname="ME4pNd"]')
                          .insertAdjacentHTML(
                            "beforeend",
                            "<div id='attendancePopup' style='font-weight: bold; transition: opacity 100ms ease-in-out 100ms; opacity: 0; position: absolute; bottom: 12px; left: 120px; background: #212121; border-radius: 20px; padding: 12px; color: #fff;'>Attendance taken!</div>"
                          ),
                        document
                          .getElementById("attendanceButton")
                          .addEventListener("click", Pe),
                        document
                          .getElementById("downloadAttendanceButton")
                          .addEventListener("click", Te);
                    }
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="vERSO"]'),
                      t = document.querySelector('[jsname="xySENc"]'),
                      n = document.getElementById("emojiButtons");
                    if (e && !n) {
                      setTimeout(() => {
                        t.scrollTop = t.scrollHeight;
                      }, 10),
                        e.insertAdjacentHTML(
                          "afterbegin",
                          "<div style='width: 100%; display: inline-flex; justify-content: space-between; margin-left: 10px; margin-bottom: 14px; margin-top: 14px; font-size: 20px; cursor: pointer;' id='emojiButtons'><div class='emoji'>👍</div><div class='emoji'>👎</div><div class='emoji'>👏</div><div class='emoji'>👋</div><div class='emoji'>❤️</div><div class='emoji'>🎉</div><div class='emoji'>😂</div><div class='emoji'>🔥</div></div>"
                        );
                      const n = document.querySelectorAll(".emoji"),
                        o = document.querySelector("textarea"),
                        r = document.querySelector('[jsname="SoqoBf"]');
                      n.forEach((e) => {
                        (e.style.cssText =
                          "border-radius: 50%; width: 28px; text-align: center;"),
                          e.addEventListener("click", () => {
                            (clickedEmoji = e.textContent),
                              o.focus(),
                              (o.value += clickedEmoji),
                              r.removeAttribute("disabled");
                          });
                      });
                    }
                  }, 500),
                  chrome.storage.sync.get("adjustVolume", (e) => {
                    let t = document.querySelectorAll("audio");
                    setTimeout(() => {
                      void 0 !== e.adjustVolume &&
                        t.forEach((t) => {
                          t.volume = e.adjustVolume / 10;
                        });
                    }, 500);
                  }),
                  e.minimizeVideo && R(e.minimizeVideo),
                  e.autoRecord && F(e.autoRecord, e.autoTranscribe),
                  e.autoTranscribe &&
                    O(e.autoTranscribe, e.autoRecord || e.manualRecord),
                  e.manualRecord &&
                    !e.autoRecord &&
                    G(e.manualRecord, e.autoTranscribe),
                  e.hideTopBar && _(e.hideTopBar),
                  e.autoCopyURL && X(e.autoCopyURL),
                  e.speakerBorder && $(e.speakerBorder),
                  e.autoUnmute && ee(e.autoUnmute),
                  e.pictureInPicture && te(e.pictureInPicture),
                  e.autoAdmit && ye(e.autoAdmit),
                  e.autoReject && be(e.autoReject),
                  e.noAddOthers && ke(e.noAddOthers),
                  e.mirrorVideos && ce(e.mirrorVideos),
                  e.autoChat && fe(e.autoChat),
                  e.displayClock && ge(e.displayClock),
                  e.autoFullScreen && ue(e.autoFullScreen),
                  e.mutePopup && de(e.mutePopup),
                  e.hideCommentBubble && Ae(e.hideCommentBubble),
                  e.hideComments && Be(e.hideComments),
                  e.transBar && Ce(e.transBar)),
                e.ignorePresentationModal && N(e.ignorePresentationModal),
                e.muteMicrophone && he(e.muteMicrophone),
                e.muteVideo && ve(e.muteVideo),
                e.addChimes && J(e.addChimes),
                e.setBackgroundColor && Y(e.setBackgroundColor),
                e.onboardingSeen ||
                  e.licenseKey ||
                  chrome.storage.sync.get(null, (e) => {
                    !Object.values(e).indexOf("true") > -1 &&
                      (function () {
                        chrome.storage.sync.set({ onboardingSeen: !0 });
                        let e = '<div id="mesOnboardingModal">';
                        (e +=
                          '<div id="onboardingHeader"><img src="https://www.meetenhancementsuite.com/assets/icon-mes.svg"><p>Setup Meet Enhancement Suite</p><svg id="onboardingCloseButton" focusable="false" width="24" height="24" viewBox="0 0 24 24" class="Hdh4hc cIGbvc NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></div>'),
                          (e +=
                            '<video autoplay muted loop id="onboardingVideo"><source src="https://www.meetenhancementsuite.com/assets/pinExtensionVideo.mp4" type="video/mp4" /></video>'),
                          (e +=
                            '<div class="onboardingStepOne"><div class="activeBlink"><svg height="25" width="25" class="blinking"><circle cx="10" cy="10" r="10" fill="#62AF7D" /></svg></div><p><strong>Step 1:</strong> Pin the extension</p></div>'),
                          (e +=
                            '<div class="onboardingStepTwo"><div class="activeBlink"><svg height="25" width="25" class="notBlinking"><circle cx="10" cy="10" r="10" fill="#62AF7D" /></svg></div><p><strong>Step 2:</strong> Turn on features</p></div>'),
                          (e +=
                            '<a style="cursor: pointer" id="onboardingNextButton" class="button mega chrome-web-store" target="_blank">Next step</a>'),
                          (e += "</div>"),
                          document
                            .querySelector("c-wiz")
                            .insertAdjacentHTML("beforeEnd", e);
                        document
                          .getElementById("onboardingCloseButton")
                          .addEventListener("click", () => {
                            document.getElementById(
                              "mesOnboardingModal"
                            ).style.display = "none";
                          }),
                          document.getElementById("onboardingNextButton") &&
                            document
                              .getElementById("onboardingNextButton")
                              .addEventListener("click", () => {
                                const e = document.querySelector(
                                    "#onboardingNextButton"
                                  ),
                                  t = document.querySelector(
                                    "#mesOnboardingModal > div.onboardingStepOne"
                                  ),
                                  n = document.querySelector(
                                    "#mesOnboardingModal > div.onboardingStepTwo"
                                  );
                                "I'm Done!" == e.innerText &&
                                  (document.getElementById(
                                    "mesOnboardingModal"
                                  ).style.display = "none"),
                                  "notBlinking" ==
                                    n.firstChild.firstChild.getAttribute(
                                      "class"
                                    ) &&
                                    (t.firstChild.firstChild.setAttribute(
                                      "class",
                                      "notBlinking"
                                    ),
                                    (n.style.opacity = "1"),
                                    (t.style.opacity = "0.5"),
                                    n.firstElementChild.setAttribute(
                                      "class",
                                      "activeBlink"
                                    ),
                                    n.firstChild.firstChild.setAttribute(
                                      "class",
                                      "blinking"
                                    ),
                                    document
                                      .getElementById("onboardingVideo")
                                      .setAttribute(
                                        "src",
                                        "https://www.meetenhancementsuite.com/assets/openingExtensionVideo.mp4"
                                      ),
                                    (document.getElementById(
                                      "onboardingNextButton"
                                    ).innerText = "I'm Done!"));
                              });
                        const t = document.createElement("style");
                        (t.textContent =
                          "\n\n  #onboardingHeader {\n    display: flex;\n    align-items: center;\n    margin-bottom: 14px;\n  }\n\n  #onboardingHeader svg {\n    right: 20px;\n    position: absolute;\n    cursor: pointer;\n  }\n\n  #onboardingHeader p {\n    margin-left: 14px;\n    font-family: 'Google Sans',Roboto,Arial,sans-serif;\n    font-size: 1.125rem;\n    font-weight: 400;\n    letter-spacing: 0;\n  }\n\n  #onboardingHeader img {\n    width: 30px;\n  }\n\n  .button {\n    display: inline-block;\n    background: #09201D;\n    color: white;\n    padding: 0.5em 1em;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n\n  #onboardingNextButton {\n    width: 94%;\n    text-align: center;\n    cursor: pointer;\n    padding: 12px;\n    margin-top: 6px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n\n  .button:hover {\n    background: #62AF7D;\n  }\n\n  #mesOnboardingModal {\n    font-family: 'Google Sans',Roboto,Arial,sans-serif;\n  }\n\n  #mesOnboardingModal {\n    z-index: 100;\n    position: absolute;\n    max-width: 360px;\n    min-width: 360px;\n    bottom: 115px;\n    right: 22px;\n    background: white;\n    padding: 1.5em;\n    border-radius: 14px\n  }\n\n  .onboardingCta {\n    position: relative;\n    margin-bottom: 1em;\n  }\n\n  #onboardingVideo {\n    max-width: 356px;\n    min-width: 356px;\n    max-height: 236px;\n    min-height: 236px;\n    border: 2px solid rgba(9, 32, 29, 0.1);\n    border-radius: 1em;\n    margin-bottom: 4px;\n  }\n\n  .onboardingStepOne,\n  .onboardingStepTwo {\n    background: #f3f3f3;\n    padding: 1em;\n    border-radius: 1em;\n    margin-bottom: 0.5em;\n    transition: opacity ease-in-out 0.8s;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n  }\n\n  .onboardingStepTwo {\n    opacity: 0.5;\n  }\n\n  .onboardingCard {\n    display: flex;\n    padding: 1.5em;\n    background: rgba(white, 0.9);\n  }\n\n  .onboardingContent {\n    margin-left: 2em;\n    width: 100%;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin: 0 0 0.5em 0;\n  }\n\n  p {\n    margin: 0 0 0 0;\n    display: inline;\n  }\n\n  span {\n    border-bottom: 2px solid rgba(white, 0.3);\n  }\n\n  .activeBlink {\n    display: inline-flex;\n    align-self: center;\n    transition: display ease-in-out 5s;\n    transition-delay: 5s;\n  }\n\n  .blinking {\n    -webkit-animation: 1s blink ease infinite;\n    -moz-animation: 1s blink ease infinite;\n    -ms-animation: 1s blink ease infinite;\n    -o-animation: 1s blink ease infinite;\n    animation: 1s blink ease infinite;\n    margin-right: 4px;\n    position: relative;\n    top: 0.195em;\n  }\n\n  .notBlinking {\n    margin-right: 4px;\n    position: relative;\n    top: 0.195em;\n  }\n\n  @keyframes blink {\n    from,\n    to {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n  "),
                          document.head.append(t);
                      })();
                  }),
                e.hideToolsUpsell
                  ? e.hideToolsUpsell &&
                    chrome.storage.sync.get("hideToolsUpsellDate", (e) => {
                      new Date().getTime() >
                        new Date(e.hideToolsUpsellDate).getTime() && z();
                    })
                  : z(),
                e.leavePrompt && oe(e.leavePrompt),
                e.autoCaptions && pe(e.autoCaptions),
                e.hideNames && ae(e.hideNames),
                e.showNames && re(e.showNames),
                e.hideTalkIcons && ie(e.hideTalkIcons),
                e.meetingTimer && le(e.meetingTimer),
                e.pinBottomBar && se(e.pinBottomBar),
                e.toggleBottomBar && ne(e.toggleBottomBar),
                e.quickLeave && document.addEventListener("keydown", me),
                e.smartUnmute)
              ) {
                He(new ze(e.keyCode));
              }
            }, 100),
            r = setInterval(() => {
              if (
                "complete" === document.readyState &&
                document.querySelector('[jscontroller="VQ0pCb"]')
              ) {
                if ((clearInterval(r), e.homeOnLeave)) {
                  let e = document.querySelector('[jsname="dqt8Pb"]');
                  e && we(e);
                }
                e.hideHangupPageUpsell
                  ? e.hideHangupPageUpsell &&
                    chrome.storage.sync.get("hideHangupPageUpsellDate", (e) => {
                      new Date().getTime() >
                        new Date(e.hideHangupPageUpsellDate).getTime() && T();
                    })
                  : T();
              }
            }, 100),
            a = setInterval(() => {
              (("complete" === document.readyState &&
                "Meet" === document.title) ||
                "Google Meet" === document.title) &&
                (clearInterval(a),
                Se(),
                e.darkMode && qe(e.darkMode),
                chrome.storage.sync.get("licenseKey", (t) => {
                  !1 !== t.licenseKey || e.hideMainPageUpsell
                    ? !1 === t.licenseKey &&
                      e.hideMainPageUpsell &&
                      chrome.storage.sync.get("hideMainPageUpsellDate", (e) => {
                        new Date().getTime() >
                          new Date(e.hideMainPageUpsellDate).getTime() && L();
                      })
                    : L();
                }));
            }, 100);
        })(e)
    ),
    chrome.storage.onChanged.addListener((e) =>
      (function (e) {
        for (let t in e) {
          const n = e[t];
          if (document.querySelector("c-wiz")) {
            if (
              ("ignorePresentationModal" === t && N(n.newValue),
              "autoRecord" === t && F(n.newValue, e.autoTranscribe.newValue),
              "autoTranscribe" === t &&
                O(n.newValue, e.autoRecord.newValue || e.manualRecord.newValue),
              "manualRecord" === t && G(n.newValue, e.autoTranscribe.newValue),
              "addChimes" === t && J(n.newValue),
              "setBackgroundColor" === t && Y(n.newValue),
              "hideTopBar" === t && _(n.newValue),
              "speakerBorder" === t && $(n.newValue),
              "autoUnmute" === t && ee(n.newValue),
              "pictureInPicture" === t && te(n.newValue),
              "meetingTimer" === t && le(n.newValue),
              "toggleBottomBar" === t && ne(n.newValue),
              "pinBottomBar" === t && se(n.newValue),
              "hideNames" === t && ae(n.newValue),
              "showNames" === t && re(n.newValue),
              "hideTalkIcons" === t && ie(n.newValue),
              "muteMicrophone" === t && he(n.newValue),
              "muteVideo" === t && ve(n.newValue),
              "leavePrompt" === t && oe(n.newValue),
              "mirrorVideos" === t && ce(n.newValue),
              "autoJoin" === t)
            ) {
              const e = setInterval(() => {
                const n = document.querySelector('[jsname="Qx7uuf"]');
                t.autoJoinParticipants || (n && (n.click(), clearInterval(e)));
              }, 500);
            }
            if ("autoJoinParticipants" === t) {
              const e = document.querySelector('[role="status"]'),
                t = document.querySelector('[jsname="Qx7uuf"]');
              o = setInterval(() => {
                e &&
                  (e.classList.contains("Gp1oj") ||
                    (t && (t.click(), clearInterval(o))));
              }, 500);
            }
            if (
              ("licenseKey" === t && !1 !== n.newValue && (Ie(), Se()),
              "minimizeVideo" === t && R(n.newValue),
              "autoCopyURL" === t && X(n.newValue),
              "autoAdmit" === t && ye(n.newValue),
              "autoReject" === t && be(n.newValue),
              "noAddOthers" === t && ke(n.newValue),
              "autoChat" === t && fe(n.newValue),
              "displayClock" === t && ge(n.newValue),
              "darkMode" === t && qe(n.newValue),
              "autoFullScreen" === t && ue(n.newValue),
              "mutePopup" === t && de(n.newValue),
              "hideCommentBubble" === t && Ae(n.newValue),
              "hideComments" === t && Be(n.newValue),
              "transBar" === t && Ce(n.newValue),
              "autoCaptions" === t && pe(n.newValue),
              "quickLeave" === t &&
                (n.newValue
                  ? document.addEventListener("keydown", me)
                  : document.removeEventListener("keydown", me)),
              "smartUnmute" === t &&
                (n.newValue
                  ? chrome.storage.sync.get("keyCode", (e) => {
                      He(new ze(e.keyCode));
                    })
                  : (document.body.removeEventListener("keydown", Ve),
                    document.body.removeEventListener("keyup", De))),
              "keyCode" === t)
            ) {
              He(new ze(n.newValue));
            }
            "backgroundColor" === t && Q(n.newValue),
              "borderColor" === t && Z(n.newValue),
              "adjustVolume" === t && W(n.newValue);
          }
        }
      })(e)
    );
  let Le, Ve, De;
  const Ue = (e, t) => (n) => {
    if (
      n.target &&
      (["chatTextInput", "chatTextArea", "textInput", "textArea"].includes(
        n.target.name
      ) ||
        ["textarea"].includes(n.target.localName))
    )
      return;
    const o = n.target?.dataset?.tooltip;
    if (
      ((o?.includes("microphone") || o?.includes("camera")) &&
        n.stopPropagation(),
      n.repeat)
    )
      return;
    if ("keydown" === n.type && !e.matchKeydown(n)) return;
    if ("keyup" === n.type && !e.matchKeyup(n)) return;
    n.preventDefault();
    const r = document
      ?.querySelector('[jscontroller="QWZd7"]')
      ?.querySelector(((e) => `button[data-is-muted*='${e}']`)(t));
    r && r.click();
  };
  function He(e) {
    Le &&
      (document.body.removeEventListener("keydown", Ve),
      document.body.removeEventListener("keyup", De)),
      (Le = e),
      (Ve = Ue(e, "true")),
      (De = Ue(e, "false")),
      document.body.addEventListener("keydown", Ve),
      document.body.addEventListener("keyup", De);
  }
  class ze {
    constructor({
      keyCode: e,
      ctrlKey: t = !1,
      altKey: n = !1,
      shiftKey: o = !1,
      metaKey: r = !1,
    }) {
      this.keys = {
        keyCode: e,
        ctrlKey: t,
        altKey: n,
        shiftKey: o,
        metaKey: r,
      };
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
})();
