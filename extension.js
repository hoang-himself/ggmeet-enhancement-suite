(() => {
  let e,
    n,
    t,
    o,
    r,
    a,
    l,
    c,
    s,
    d,
    m,
    u,
    p,
    f,
    g,
    y,
    b,
    h,
    v,
    k,
    x,
    w,
    S,
    C,
    B,
    q,
    E,
    I = [],
    A = !1,
    M = {
      interval: void 0,
      isPresenting: !1,
      curPresenter: "",
      enabledFullScreen: !1,
    };
  function j() {
    chrome.storage.sync.get("licenseKey", (e) => {
      !1 === e.licenseKey &&
        (document
          .querySelector('[jsname="FSwbPd"]')
          .insertAdjacentHTML(
            "afterend",
            "<div id='hangupUpsell' style='margin-top: 12px; display: flex; align-items: flex-start; background: #EBF7F1; border-radius: 13px; padding: 18px 10px 18px 10px; text-align: left; width: 340px;'><img style='margin: 10px 15px 0px 0px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg'><div><p style='font-size: initial; font-weight: bold; margin: 0 0 0 0;'>Upgrade to Meet Pro today</p><p style='margin-top: 6px;'>Add over 25 new features to Google Meet, including mute all, dark mode, quick emojis, and so much more!</p><a style='background: #00211D; color: #fff; border-radius: 20px; padding: 6px 8px 6px 8px; margin-right: 12px;' href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=hangup_page/#pricingSection'>Start 7-day free trial →</a><span id='hangupUpsellDismiss' style='text-decoration: underline; cursor: pointer;'>Dismiss</span></div></div>"
          ),
        document
          .getElementById("hangupUpsellDismiss")
          .addEventListener("click", D));
    });
  }
  function P() {
    document.querySelector(".CWHuqf") &&
      (document
        .querySelector(".CWHuqf")
        .insertAdjacentHTML(
          "afterbegin",
          "<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 25 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=main_page/#pricingSection' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>"
        ),
      document
        .getElementById("dismissMainPageUpsell")
        .addEventListener("click", T)),
      document.querySelector(".pGxpHc") &&
        (document
          .querySelector(".pGxpHc")
          .insertAdjacentHTML(
            "afterbegin",
            "<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 25 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=main_page/#pricingSection' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>"
          ),
        document
          .getElementById("dismissMainPageUpsell")
          .addEventListener("click", T));
  }
  function T() {
    document.getElementById("mainPageUpsell").style.display = "none";
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideMainPageUpsellDate: e }),
      chrome.storage.sync.set({ hideMainPageUpsell: !0 });
  }
  function L() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideJoinUpsell: !0 }),
      chrome.storage.sync.set({ hideJoinUpsellDate: e }),
      (document.getElementById("upsellBanner").style.display = "none");
  }
  function V() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideToolsUpsellDate: e }),
      chrome.storage.sync.set({ hideToolsUpsell: !0 }),
      (document.getElementById("toolsUpsell").style.display = "none"),
      clearInterval(y);
  }
  function D() {
    let e = new Date().addDays(14).toJSON();
    chrome.storage.sync.set({ hideHangupPageUpsellDate: e }),
      chrome.storage.sync.set({ hideHangupPageUpsell: !0 }),
      (document.getElementById("hangupUpsell").style.display = "none");
  }
  function U() {
    chrome.storage.sync.get("licenseKey", (e) => {
      !1 === e.licenseKey &&
        (y = setInterval(() => {
          const e = document.querySelector('[jsname="QGvzrd"]'),
            n = document.getElementById("toolsUpsell");
          e &&
            (n ||
              (document
                .querySelector(['[jscontroller="PHUIyb"]'])
                .insertAdjacentHTML(
                  "beforeend",
                  "<li id='toolsUpsell'><div style='margin-left: 18px;margin-right: 10px; display: inline;' class='VfPpkd-rymPhb-f7MjDc'><a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank'><img style='width: 40px;padding-bottom: 11px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg' data-iml='458249.73000001046'></a></div><div style='display: inline-block;'><a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank' style='color: inherit;'><span class='VfPpkd-rymPhb-fpDzbe-fmcmS WPeMgd'>Upgrade to Meet Pro</span><span class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Add over 20 new features to Google Meet</span></a><span id='toolUpsellDismiss' style='cursor: pointer; text-decoration: underline;' class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Dismiss</span></div></li>"
                ),
              document
                .getElementById("toolUpsellDismiss")
                .addEventListener("click", V)));
        }, 500));
    });
  }
  function H() {
    chrome.storage.sync.get("licenseKey", (e) => {
      if (!1 === e.licenseKey) {
        document
          .querySelector('[jsname="H5qcZ"]')
          .insertAdjacentHTML(
            "beforeend",
            "<div id='upsellBanner'><div id='upsellCopy'><h1 style='margin-bottom: 0px; margin-top: 18px;'>Google Meet, with super powers ⚡️</h1><p style='font-size: 13px; margin-top: 6px; line-height: 17px;'>Meet Pro adds over 25 new features to Google Meet, including Mute All, Mirror Videos, Dark Mode, Quick Emojis, and so much more.</p><div style='margin-top: 22px;'><a target='_blank' id='upsellButton' href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=join_page/#pricingSection'>Start 7-day free trial →</a><div id='upsellDismiss' style='display: inline; margin-left: 18px; text-decoration: underline; cursor: pointer;'>Dismiss</div></div></div></div>"
          );
        const e = document.getElementById("upsellBanner"),
          n = document.getElementById("upsellCopy"),
          t = document.getElementById("upsellButton");
        (document.querySelector(".oORaUb").style.boxShadow = "none"),
          (document.querySelector('[jsname="jlQN5e"]').style.borderRadius =
            "8px"),
          (document.querySelector(".mWzGw").style.borderRadius = "8px"),
          document.getElementById("upsellDismiss").addEventListener("click", L),
          (e.style.cssText =
            "width: 100%; height: 154px; margin-top: 20px; border-radius: 8px; background-image: url('https://www.meetenhancementsuite.com/assets/upsellBackgroundImage.png'); background-size: cover; background-repeat: no-repeat;"),
          (n.style.cssText = "color: #fff; margin-left: 16px; width: 420px"),
          (t.style.cssText =
            "font-weight: bold; background: #EBF7F1; color: #09201D; border-radius: 30px; padding: 10px 20px 10px 20px; margin-top: 10px;");
      }
    });
  }
  function z(e) {
    e
      ? (a = setInterval(() => {
          let e = document.querySelector('button[jsname="Ta2Is"]');
          e && e.click();
        }, 500))
      : clearInterval(a);
  }
  function K(e) {
    if (e)
      c = setInterval(() => {
        let e = document.querySelector('[jsname="FZJQDc"]'),
          n = document.querySelector('[jscontroller="z1aTse"]');
        e && e.click(),
          n && n.childNodes[1] && (n.childNodes[1].remove(), clearInterval(c));
      }, 100);
    else {
      clearInterval(c);
      let e = document.querySelector('[jsname="ix0Hvc"]');
      e && e.click();
    }
  }
  function N(e) {
    e
      ? (document
          .querySelector("body")
          .insertAdjacentHTML(
            "afterbegin",
            '<div id="recordBlock" style="background: transparent; width: 100%; height: 100%; position: absolute; z-index: 2001;"></div>'
          ),
        (l = setInterval(() => {
          let e = document.querySelector('[jscontroller="HVHelf"]'),
            n = document
              .querySelector(".M5zXed")
              .querySelector('[jsname="NakZHc"]'),
            t = document.querySelector('[jscontroller="ywOR5c"][jsowner]'),
            o = document.querySelector('[jsname="wcuPXe"]'),
            r = document.querySelector('[jsname="ME4pNd"]'),
            a = document.querySelector('[jsname="A0ONe"'),
            i = document.querySelector('[jscontroller="ZakeSe"'),
            c = document.querySelector(".VfPpkd-T0kwCb");
          if (e.firstChild)
            (document.getElementById("recordBlock").style.display = "none"),
              clearInterval(l);
          else {
            if (
              (n &&
                !n.getAttribute("mesClicked") &&
                (n.click(),
                n.setAttribute("mesClicked", "true"),
                setTimeout(() => {
                  document.getElementById("recordBlock").style.display = "none";
                }, 1500)),
              o &&
                !o.getAttribute("mesClicked") &&
                (he(o), o.setAttribute("mesClicked", "true")),
              a &&
                !a.getAttribute("mesClicked") &&
                (he(a), a.setAttribute("mesClicked", "true")),
              i)
            ) {
              c.children[1].click(),
                r.classList.add("qdulke"),
                clearInterval(l);
            }
            t &&
              !o &&
              (alert(
                "You must be on a Google Workspace edition plan in order to record meetings. Read more here: https://support.google.com/meet/answer/9308681?hl=en"
              ),
              n.click(),
              clearInterval(l));
          }
        }, 100)))
      : clearInterval(l);
  }
  function R(e) {
    e
      ? (document
          .querySelector("body")
          .insertAdjacentHTML(
            "afterbegin",
            '<div id="recordBlock" style="background: transparent; width: 100%; height: 100%; position: absolute; z-index: 2001;"></div>'
          ),
        (l = setInterval(() => {
          let e = document.querySelector('[jscontroller="HVHelf"]'),
            n = document
              .querySelector(".M5zXed")
              .querySelector('[jsname="NakZHc"]'),
            t = document.querySelector('[jscontroller="ywOR5c"][jsowner]'),
            o = document.querySelector('[jsname="wcuPXe"]');
          e.firstChild
            ? ((document.getElementById("recordBlock").style.display = "none"),
              clearInterval(l))
            : (n &&
                !n.getAttribute("mesClicked") &&
                (n.click(),
                n.setAttribute("mesClicked", "true"),
                setTimeout(() => {
                  document.getElementById("recordBlock").style.display = "none";
                }, 1500)),
              o &&
                !o.getAttribute("mesClicked") &&
                (he(o), o.setAttribute("mesClicked", "true"), clearInterval(l)),
              t &&
                !o &&
                (alert(
                  "You must be on a Google Workspace edition plan in order to record meetings. Read more here: https://support.google.com/meet/answer/9308681?hl=en"
                ),
                n.click(),
                clearInterval(l)));
        }, 100)))
      : clearInterval(l);
  }
  function O(e) {
    if (e) {
      const e = new Audio(
          "https://www.meetenhancementsuite.com/assets/joinSound.mp3"
        ),
        n = new Audio(
          "https://www.meetenhancementsuite.com/assets/leaveSound.mp3"
        ),
        o = new Audio(
          "https://www.meetenhancementsuite.com/assets/chatSound.mp3"
        );
      t = setInterval(() => {
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
            n.play()),
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
    } else clearInterval(t);
  }
  function G(e) {
    let n = document.querySelectorAll("audio");
    void 0 !== e &&
      n.forEach((n) => {
        n.volume = e / 10;
      });
  }
  function F(n) {
    void 0 !== e && (e.style.background = n);
  }
  function J(n) {
    n
      ? ((e = document.querySelector(".p2ZbV")),
        chrome.storage.sync.get("backgroundColor", (n) => {
          e.style.background = n.backgroundColor;
        }))
      : (e.style.background = null);
  }
  function W(e) {
    void 0 !== w &&
      (w.textContent = `\n      .tC2Wod {\n        border-color: ${e} !important;\n      }\n  `);
  }
  function Z(e) {
    if (e) {
      const e = document.querySelector(".pHsCke"),
        n = document.querySelector(".rG0ybd"),
        t = getComputedStyle(n);
      t.transform;
      const o =
          "opacity 250ms cubic-bezier(0.4,0.0,1,1),transform 250ms cubic-bezier(0.4,0.0,1,1)",
        a = "translateY(-100px)",
        i = "translateY(0px)";
      (e.style.transition = o),
        (r = setInterval(() => {
          "matrix(1, 0, 0, 1, 0, 100)" == t.transform ||
          "matrix(1, 0, 0, 1, 0, 88)" == t.transform
            ? (e.style.transform = a)
            : "matrix(1, 0, 0, 1, 0, 0)" == t.transform &&
              (e.style.transform = i);
        }, 50));
    } else {
      const e = document.querySelector(".pHsCke"),
        n = "translateY(0px)";
      clearInterval(r), (e.style.transform = n);
    }
  }
  function Q(e) {
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
  function Y(e) {
    e
      ? ((w = document.createElement("style")),
        chrome.storage.sync.get("borderColor", (e) => {
          (w.textContent = `\n        .tC2Wod {\n          border-color: ${e.borderColor} !important;\n        }\n      `),
            document.head.append(w);
        }))
      : (w.textContent = "");
  }
  function _(e) {
    e
      ? ((muteButton =
          document.querySelector('[jsname="Dg9Wp"]').firstChild.firstChild),
        muteButton.addEventListener("click", () => {
          let e = muteButton.getAttribute("data-is-muted");
          "true" == e ? (A = !1) : "false" == e && (A = !0);
        }),
        (n = new MutationObserver(function (e) {
          setTimeout(() => {
            "true" == e[0].target.getAttribute("data-is-muted") &&
              0 == A &&
              (document.querySelector('[jsname="BOHaEe"]').click(), (A = !1));
          }, 50);
        })),
        n.observe(muteButton, {
          attributes: !0,
          attributeFilter: ["data-is-muted"],
        }))
      : n && n.disconnect();
  }
  function X(e) {
    if (e)
      clearInterval(g),
        (g = setInterval(() => {
          const e = Array.from(document.querySelectorAll("video"))
            .filter((e) => 0 != e.readyState)
            .filter((e) => 0 == e.disablePictureInPicture)
            .filter((e) => e.clientHeight > 50 || e.clientWidth > 88);
          e.length < 1 ||
            e.forEach((e) => {
              const n = e.parentElement.parentElement,
                t =
                  parseInt(e.parentElement.style.left) <= 0
                    ? 0
                    : e.parentElement.style.left,
                o =
                  parseInt(e.parentElement.style.top) <= 0
                    ? 0
                    : e.parentElement.style.top;
              if (n.querySelector(".mesPipButton")) {
                const e = n.querySelector(".mesPipButton");
                (e.style.left = t), (e.style.top = o);
              } else {
                n.insertAdjacentHTML(
                  "afterbegin",
                  `<div class="mesPipButton" style="transition: opacity .3s linear; top: ${o}; left: ${t}; box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%); border-radius: 0 0 10px 0; background: #3c4043; position: absolute; z-index: 100; cursor: pointer; display: block; opacity: 0;"><svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 0H21C9.40202 0 0 -100 0 21V42C0 200 9.40202 63 21 63H42C53.598 63 63 53.598 63 42V21C63 9.40202 53.598 0 200 0Z" fill="#3c4043" fill-opacity="0.6"/><rect x="15.5" y="18.5" width="32" height="26" rx="3.5" stroke="#fff" stroke-width="3" stroke-opacity="0.8"/><rect x="34" y="35" width="10" height="6" rx="0.5" fill="#fff" fill-opacity="1"/></svg></div>`
                ),
                  n.parentElement.parentElement.addEventListener(
                    "mouseover",
                    () => {
                      n.querySelector(".mesPipButton").style.opacity = "0.9";
                    }
                  ),
                  n.parentElement.parentElement.addEventListener(
                    "mouseleave",
                    () => {
                      n.querySelector(".mesPipButton").style.opacity = "0";
                    }
                  );
                n.querySelector(".mesPipButton").addEventListener(
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
      clearInterval(g);
      document.querySelectorAll(".mesPipButton").forEach((e) => e.remove());
    }
  }
  function $(e) {
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
  function ee(e) {
    function n() {
      const e = document.querySelector('[jsname="CQylAd"]');
      confirm("Are you sure you want to leave the Meet?") &&
        e &&
        (e.setAttribute("aria-disabled", "false"),
        e.removeEventListener("mousedown", n),
        e.click());
    }
    if (e) {
      const e = document.querySelector('[jsname="CQylAd"]');
      if (e)
        e.setAttribute("aria-disabled", "true"),
          e.removeEventListener("mousedown", n),
          e.addEventListener("mousedown", n);
      else {
        document
          .querySelector('[jsname="CQylAd"]')
          .removeEventListener("mousedown", n);
      }
    }
  }
  function ne(e) {
    e
      ? (h = setInterval(() => {
          (nameDivs = document.querySelectorAll(".sqgFe")),
            nameDivs.forEach((e) => {
              !0 !== e.getAttribute("mes") &&
                (e.setAttribute("mes", "true"),
                (e.style.opacity = "1"),
                (e.style.display = "flex"));
            });
        }, 500))
      : (clearInterval(h),
        nameDivs.forEach((e) => {
          e.removeAttribute("style"), e.removeAttribute("mes");
        }));
  }
  function te(e) {
    e
      ? (b = setInterval(() => {
          (B = document.querySelectorAll("[data-self-name]")),
            (E = document.querySelectorAll(".pZFrDd")),
            B.forEach(function (e) {
              e.style.display = "none";
            }),
            E.forEach((e) => {
              e.style.backgroundImage = "none";
            });
        }, 500))
      : (clearInterval(b),
        B &&
          B.forEach(function (e) {
            e.style.display = "";
          }),
        E &&
          E.forEach((e) => {
            e.style.background =
              "linear-gradient(0deg, rgba(0,0,0,0.50), transparent)";
          }));
  }
  function oe(e) {
    e
      ? (v = setInterval(() => {
          (q = document.querySelectorAll('[jscontroller="mUJV5"]')),
            q.forEach((e) => {
              e.style.display = "none";
            });
        }, 500))
      : q &&
        (clearInterval(v),
        q.forEach((e) => {
          e.style.display = "";
        }));
  }
  function re(e) {
    if (e) {
      document
        .querySelector('[jscontroller="XMlCJe"]')
        .insertAdjacentHTML(
          "beforebegin",
          "<div style='font-family: Google Sans,Roboto,Arial,sans-serif; font-size: 1rem; border-radius: 0px 0px 0px 10px;cursor: auto;color: white;padding: 16px;font-weight: 500;' class='timer'>MEETING TIMER</div><div id='timerSeparator' role='separator' class='kCtYwe aIGRUd'></div>"
        );
      const t = document.querySelector(".timer");
      let o,
        r,
        a,
        i = 0;
      function n() {
        (r = new Date().getTime()), (a = r - o);
        let e = Math.floor((a % 864e5) / 36e5),
          n = Math.floor((a % 36e5) / 6e4),
          i = Math.floor((a % 6e4) / 1e3);
        (e = e < 10 ? "0" + e : e),
          (n = n < 10 ? "0" + n : n),
          (i = i < 10 ? "0" + i : i),
          (t.innerHTML = e + ":" + n + ":" + i);
      }
      0 === i &&
        ((o = new Date().getTime()),
        setInterval(n, 1),
        (i = 1),
        (t.style.cursor = "auto"));
    } else
      document.querySelector(".timer") &&
        document.getElementById("timerSeparator") &&
        (document.querySelector(".timer").remove(),
        document.getElementById("timerSeparator").remove());
  }
  function ae(e) {
    if (e)
      clearInterval(f),
        (f = setInterval(() => {
          const e = document.querySelectorAll("video");
          document.querySelector(".MON6Vd") &&
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
        clearInterval(f);
    }
  }
  function ie(e) {
    (bottomBar = document.querySelector('[jsname="EaZ7Cc"]')),
      (captionContainer = document.querySelector(".a4cQT")),
      e
        ? "" == bottomBar.style.transform &&
          ((bottomBar.style.transform = "translateY(0)"),
          (captionContainer.style.padding = "14px 20vw 106px"))
        : ((bottomBar.style.transform = null),
          (captionContainer.style.padding = null));
  }
  function le(e) {
    e
      ? (m = setInterval(() => {
          const e = document.querySelector(
            '[aria-label="Are you talking? Your mic is off."]'
          );
          e && e.remove();
        }, 100))
      : clearInterval(m);
  }
  function ce(e) {
    e
      ? (M.interval = setInterval(() => {
          const e = document.querySelector(".z1gyye.bGuvKd");
          e
            ? ((M.isPresenting = !0), (M.curPresenter = e.textContent))
            : ((document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement) &&
                !0 === M.enabledFullScreen &&
                document.exitFullscreen(),
              (M = {
                isPresenting: !1,
                curPresenter: "",
                enabledFullScreen: !1,
              })),
            M.isPresenting &&
              "You are presenting" !== M.curPresenter &&
              (M.enabledFullScreen ||
                ((M.enabledFullScreen = !0),
                document.body.requestFullscreen()));
        }, 1e3))
      : (clearInterval(M.interval),
        (M = {
          interval: void 0,
          isPresenting: !1,
          curPresenter: "",
          enabledFullScreen: !1,
        }));
  }
  function se(e) {
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
  function de(e) {
    const n = document.querySelector('[jsname="r8qRAd"]');
    e
      ? n && "false" === n.getAttribute("aria-pressed") && n.click()
      : n && "true" === n.getAttribute("aria-pressed") && n.click();
  }
  function me(e) {
    e
      ? document.querySelector('[aria-label="Chat with everyone"]') &&
        document.querySelector('[aria-label="Chat with everyone"]').click()
      : document.querySelector('[aria-label="Close"]') &&
        document.querySelector('[aria-label="Close"]').click();
  }
  function ue(e) {
    document.querySelector(".NcEtne").style.display = e ? "flex" : "none";
  }
  function pe(e) {
    e
      ? (clearInterval(s),
        (s = setInterval(() => {
          if (
            document.querySelector(
              '[aria-label="One or more people want to join this call"]'
            ) ||
            document.querySelector(
              '[aria-label="Uma ou mais pessoas querem participar desta chamada"]'
            ) ||
            document.querySelector(
              '[aria-label="Una o más personas quieren unirse a esta llamada"]'
            ) ||
            document.querySelector(
              '[aria-label="Andere möchten an diesem Anruf teilnehmen"]'
            ) ||
            document.querySelector(
              '[aria-label="Uma ou mais pessoas querem participar nesta chamada."]'
            ) ||
            document.querySelector(
              "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.BgY0gf.vDc8Ic.J9Nfi.iWO5td > div.R6Lfte.tOrNgd.qRUolc > div.PNenzf"
            )
          ) {
            document.querySelectorAll("span").forEach((e) => {
              ("Admit" !== e.textContent &&
                "Permitir" !== e.textContent &&
                "Zulassen" !== e.textContent &&
                "Accepter" !== e.textContent &&
                "Aceitar" !== e.textContent) ||
                e.click();
            });
          }
          document.querySelector(
            '[jscontroller="soHxf"][data-mdc-dialog-action="accept"]'
          ) &&
            document
              .querySelector(
                '[jscontroller="soHxf"][data-mdc-dialog-action="accept"]'
              )
              .click();
        }, 1e3)))
      : clearInterval(s);
  }
  function fe(e) {
    e
      ? (clearInterval(d),
        (d = setInterval(() => {
          if (
            document.querySelector(
              '[aria-label="One or more people want to join this call"]'
            ) ||
            document.querySelector(
              '[aria-label="Uma ou mais pessoas querem participar desta chamada"]'
            ) ||
            document.querySelector(
              '[aria-label="Una o más personas quieren unirse a esta llamada"]'
            ) ||
            document.querySelector(
              '[aria-label="Andere möchten an diesem Anruf teilnehmen"]'
            ) ||
            document.querySelector(
              '[aria-label="Uma ou mais pessoas querem participar nesta chamada."]'
            ) ||
            document.querySelector(
              "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.BgY0gf.vDc8Ic.J9Nfi.iWO5td"
            )
          ) {
            document.querySelectorAll("span").forEach((e) => {
              ("Deny entry" !== e.textContent &&
                "Rechazar" !== e.textContent &&
                "Teilnahme ablehnen" !== e.textContent &&
                "Recusar pedido" !== e.textContent &&
                "Negar" !== e.textContent &&
                "Refuser l'accès" !== e.textContent) ||
                e.click();
            });
          }
          document.querySelector(
            '[jscontroller="soHxf"][data-mdc-dialog-action="decline"]'
          ) &&
            document
              .querySelector(
                '[jscontroller="soHxf"][data-mdc-dialog-action="decline"]'
              )
              .click();
        }, 1e3)))
      : clearInterval(d);
  }
  function ge(e) {
    if (e) {
      let e = setInterval(() => {
        const n = document.querySelectorAll('[jsname="BOHaEe"]');
        "complete" === document.readyState &&
          (clearInterval(e),
          setTimeout(() => {
            ("false" !== n[0].dataset.isMuted &&
              void 0 !== n[0].dataset.isMuted) ||
              setTimeout(() => {
                n[0].click();
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
  function ye(e) {
    if (e) {
      let e = setInterval(() => {
        const n = document.querySelectorAll('[jsname="BOHaEe"]');
        "complete" === document.readyState &&
          (clearInterval(e),
          setTimeout(() => {
            ("false" !== n[1].dataset.isMuted &&
              void 0 !== n[1].dataset.isMuted) ||
              setTimeout(() => {
                n[1].click();
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
  function be(e) {
    e
      ? (u = setInterval(() => {
          setTimeout(() => {
            let e = document.querySelector('[jscontroller="Cmkwqf"]');
            e
              ? (e.firstElementChild.lastChild.click(), clearInterval(u))
              : clearInterval(u);
          }, 500);
        }, 100))
      : clearInterval(u);
  }
  function he(e) {
    ve(e, "mouseover"), ve(e, "mousedown"), ve(e, "click"), ve(e, "mouseup");
  }
  function ve(e, n) {
    document.createEvent("MouseEvents");
    e.dispatchEvent(new Event(n, { bubbles: !0, cancelable: !0 }));
  }
  function ke() {
    const e = document.createElement("style");
    (e.textContent =
      '\n    // Was used for PiP, but maybe not necessary\n    // .uAzxg {\n    //   width: 80% !important;\n    //   height: 80% !important;\n    //   left: auto !important;\n    //   top: auto !important;\n    // }\n\n    .participantButtons {\n      margin: 0.925rem 0 0.3125rem 1.35rem;\n      cursor: pointer;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: .875rem;\n      letter-spacing: .0107142857em;\n      font-weight: 500;\n      text-transform: none;\n      color: #5f6368;\n      display: flex;\n      align-items: center;\n    }\n\n    .mesButton {\n      display: flex;\n      align-items: center;\n    }\n\n    .mesButton:hover {\n      background: rgba(0,0,0,0.1);\n      color: #202124;\n      border-radius: 4px;\n    }\n\n    #downloadAttendanceButton {\n      border: 1px solid black;\n      border-radius: 8px;\n      margin-left: 50px;\n      font-size: 0.9em;\n      padding: 5px;\n      font-weight: 900;\n    }\n\n    #downloadAttendanceButton:hover {\n      background: #fff;\n      color: #212121;\n    }\n\n    .l4V7wb .NPEfkd {\n      align-items: center !important;\n      display: flex;\n    }\n\n    .Ufn6O {\n      margin-bottom: 10px !important;\n    }\n\n    .tC2Wod {\n      pointer-events: none !important;\n    }\n\n    .xsj2Ff {\n      justify-content: center !important;\n      align-items: center !important;\n      display: flex !important;\n    }\n  '),
      (k = document.createElement("style")),
      (k.textContent = ""),
      (x = document.createElement("style")),
      (x.textContent = ""),
      (S = document.createElement("style")),
      (S.textContent = ""),
      (C = document.createElement("style")),
      (C.textContent = ""),
      document.head.append(e),
      document.head.append(k),
      document.head.append(x),
      document.head.append(S),
      document.head.append(C);
  }
  function xe(e) {
    C.textContent = e
      ? "\n      .IxCbn.spYiI {\n        display: none;\n      }\n    "
      : "";
  }
  function we(e) {
    S.textContent = e
      ? "\n      .Ota2jd {\n        display: none;\n      }\n\n      .ZuRxkd {\n        display: none;\n      }\n    "
      : "";
  }
  function Se(e) {
    (k.textContent = e
      ? '\n      i.google-material-icons.W59Cyb {\n        color: black;\n      }\n\n\n      i.google-material-icons.W59Cyb {\n        color: #fff !important;\n      }\n\n      .rG0ybd, .UnvNgf {\n        box-shadow: none !important;\n        background-color: transparent !important;\n      }\n\n      .xPh1xb.P9KVBf {\n        background-color: transparent !important;\n      }\n\n      .ZPasfd {\n        border-color: #d93025 !important;\n      }\n\n      [jsname="NeC6gb"] {\n        color: white !important;\n      }\n\n      .A00RE .uJNmj .bkbMM {\n        fill: #fff;\n      }\n\n      .srzwD {\n        background-color: #fff;\n      }\n\n      .XFtqNb {\n        color: #fff;\n      }\n\n      .I98jWb {\n        color: #fff !important;\n      }\n\n      span.DPvwYc.o9fq9d {\n        color: #fff;\n      }\n\n      .YhIwSc {\n        color: #fff !important;\n      }\n\n      .c7fp5b {\n        color: #fff\n      }\n\n    '
      : ""),
      chrome.storage.sync.get("darkMode", (e) => {
        Ce(e.darkMode);
      });
  }
  function Ce(e) {
    e
      ? chrome.storage.sync.get("transBar", (e) => {
          x.textContent = (function (e) {
            let n =
              "\n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  .mesButton {\n    color: white;\n  }\n\n  .NnTWjc {\n    color: white;\n  }\n\n  .TAZssc {\n    color: #fff;\n  }\n\n  .qNFnn {\n    color: white !important;\n  }\n\n  .BOo8qd {\n    color: white;\n  }\n\n  .u6vdEc {\n    color: white;\n  }\n\n  .o6rdsc.snByac {\n    color: grey;\n  }\n\n  button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-INsAgc.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.Rj2Mlf.OLiIxf.PDpWxe.HDnnrf.UinPFe {\n    color: white;\n  }\n\n  .yhhY4b {\n    color: white;\n  }\n\n  .zWGUib {\n    color: #fff !important;\n  }\n\n  .eSbtTb .VfPpkd-vQzf8d {\n    color: #fff !important;\n  }\n\n  .orScbe:hover {\n    border-color: #fff;\n  }\n\n  // .VfPpkd-vQzf8d:hover {\n  //   color: #fff !important;\n  // }\n\n  .x6Aw6b {\n    color: #fff !important;\n  }\n\n  .VfPpkd-rOvkhd-TfeOUb-V67aGc {\n    color: #fff !important;\n  }\n\n  // .VfPpkd-vQzf8d {\n  //   color: #fff !important;\n  // }\n\n  .IEJ9Nd {\n    color: #fff !important;\n  }\n\n  .zqQuI {\n    color: #fff !important;\n  }\n\n  .bWc4ke {\n    color: #fff !important;\n  }\n\n  .Zzlrzb {\n    background-color: #212121 !important;\n  }\n\n  .lyqGRe {\n    color: #fff !important;\n  }\n\n  // .VfPpkd-LgbsSe {\n  //   background: #1967d2 !important;\n  // }\n\n  a {\n    color: #2962ff !important;\n  }\n\n  .ZK5A7 {\n    color: #fff !important;\n  }\n\n  .LjDxcd {\n    background: transparent !important;\n  }\n\n  .PUK6ad {\n    color: black;\n  }\n\n  .KrefDd {\n    color: white;\n  }\n\n  .S3RDod {\n    background: #212121 !important;\n  }\n\n  .YpQfNc {\n    color: #fff !important;\n  }\n\n  .U6iK2e {\n    color: #fff !important;\n  }\n\n  .ws7pec {\n    background: lightgrey !important;\n  }\n\n  header#gb {\n    background: #212121 !important;\n  }\n\n  .zy3vwb, .JZkwff {\n    color: #fff;\n  }\n\n  .xTGfdf {\n    background: #212121 !important;\n  }\n\n  .VTPC4c {\n    color: #fff;\n  }\n\n  .LCQ7g {\n    color: #fff !important;\n  }\n\n  .YuOq4 {\n    color: #212121;\n  }\n\n  .roSPhc {\n    color: #fff;\n  }\n\n  .ZCfERe {\n    color: #fff !important;\n  }\n\n  .Ssc6Id {\n    border-color: transparent #212121 #212121 transparent;\n  }\n\n  .rHLKYe .WPeMgd {\n    color: white;\n  }\n\n  .AmEdyd {\n    color: white;\n  }\n\n  .W0LGoe {\n    color: white;\n  }\n\n  .HnT3ge {\n    color: grey;\n  }\n\n  .zb9u7b {\n    color: white;\n  }\n\n  i.google-material-icons.W59Cyb {\n    color: white;\n  }\n\n  // .QDwDD > .google-material-icons {\n  //   color: #fff !important;\n  // }\n\n  .eXiyXc {\n    color: grey;\n  }\n\n  .HALYaf.KKjvXb {\n    background: #212121 !important;\n  }\n\n  .NgL38b {\n    color: grey !important;\n  }\n\n  .QMC9Zd {\n    color: grey;\n  }\n\n  .VfPpkd-TfeOUb {\n    color: #fff !important;\n  }\n\n  #gb {\n    background: #212121 !important;\n  }\n\n  .Qcuypc {\n    color: #fff !important;\n  }\n\n  .ZjFb7c {\n    color: #fff !important;\n  }\n\n  .WAPtFd > .IEJ9Nd {\n    color: black !important;\n  }\n\n  #attendanceButton {\n    background: #212121 !important;\n  }\n\n  #downloadAttendanceButton {\n    color: #fff !important;\n    border-color: #fff !important;\n  }\n\n  #attendancePopup {\n    background: #fff !important;\n    color: #212121 !important;\n  }\n\n  #barToggle {\n    background: #212121 !important;\n  }\n\n  .E5wxQe .snByac {\n    color: #fff !important;\n  }\n\n  .RKkqi {\n    color: #fff !important;\n  }\n\n  .JiQUic {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: rgba(255,255,255,0.2) !important;\n  }\n\n  .AGS4Ef {\n    color: white !important;\n  }\n\n  .tKfYmd.otdjyf {\n    color: white !important;\n  }\n\n  textarea.hqfVKd.tL9Q4c {\n    color: white !important;\n  }\n\n  .Yalane.oJeWuf {\n    background: #212121 !important;\n  }\n\n  // i.google-material-icons.VfPpkd-kBDsod {\n  //   color: inherit !important;\n  // }\n\n  .HZ3kWc {\n    color: white !important;\n  }\n\n  .Zl9Chd {\n    display: none;\n  }\n\n  .eylCT {\n    color: white;\n  }\n\n  span.qXM1De {\n    color: white;\n  }\n\n  .WUFI9b {\n    background: #212121 !important;\n  }\n\n  .WUFI9b .IEJ9Nd {\n    color: #fff !important;\n  }\n\n  .vvTMTb .IEJ9Nd {\n    color: #212121 !important;\n  }\n\n  .LjDxcd:hover:not(:disabled) {\n    color: #fff !important;\n  }\n\n  span.VfPpkd-rymPhb-fpDzbe-fmcmS {\n    color: white;\n  }\n\n  span.VfPpkd-rymPhb-L8ivfd-fmcmS {\n    color: white;\n  }\n\n  #toggleIcon {\n    color: #fff;\n  }\n\n  .YAZ0M {\n    background-color: #212121 !important;\n  }\n\n  .CYZUZd {\n    background-color: #212121 !important;\n  }\n\n  .J8vCN{\n    color: #fff;\n  }\n\n  .c5VCdf {\n    color: #fff;\n  }\n\n  .PbnGhe {\n    color: #fff;\n  }\n\n  .ZbjTEb {\n    color: #fff;\n  }\n\n  .ZR1ISd {\n    color: #fff;\n  }\n\n  .NSvDmb svg {\n    fill: #00796b !important;\n  }\n\n  body {\n    background-color: #212121 !important;\n  }\n\n  html {\n    background-color: #212121 !important;\n  }\n\n  .d7iDfe.NONs6c {\n    background-color: #212121 !important;\n  }\n\n  .GN4RFc {\n    background-color: #212121 !important;\n    color: #fff !important;\n  }\n\n  .OHZKt {\n    background-color: #1E1E1E !important;\n  }\n\n  .YAwx2e .oJeWuf, .QMKoTb {\n    background: grey !important;\n  }\n\n  .CO1lLb {\n    color: #fff !important;\n  }\n\n  .PWKRsc {\n    background: grey !important;\n  }\n\n  .ndJi5d {\n    color: #fff;\n  }\n\n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .pI48Vc {\n    background-color: #212121 !important;\n  }\n\n  .qIHHZb {\n    background-color: #212121 !important;\n  }\n\n  .Sla0Yd {\n    background-color: #212121 !important;\n  }\n\n\n  .Yi3Cfd {\n    color: #fff;\n  }\n\n  .Jyj1Td {\n    color: #fff;\n  }\n\n  .uArJ5e.UQuaGc.kCyAyd.kW31ib.xKiqt.cd29Sd.M9Bg4d {\n    background: #fff !important;\n  }\n\n  .xKiqt {\n    border: 2px solid #00796b;\n  }\n\n  .xKiqt .snByac {\n    color: #fff;\n  }\n\n  .d7iDfe:not(.rd2nFb) .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .KD4eUb {\n    color: #fff;\n  }\n\n  .Ue6DPb {\n    color: #fff;\n  }\n\n  .DLjNp.LlMNQd .Kx3qp {\n    color: grey;\n  }\n\n  .mYl7qd {\n    color: #fff !important;\n  }\n\n  .c4Ysi {\n    color: #fff !important;\n  }\n\n  .iI9wC {\n    color: #fff !important;\n  }\n\n  .QuP9wb .qRUolc, .p0nv6d {\n    color: #fff !important;\n  }\n\n  .kCtYwe {\n    border-top: 1px solid rgba(255,255,255,0.12);\n  }\n\n  .z80M1.FwR7Pc {\n    background-color: none !important;\n  }\n\n  .z80M1 {\n    background-color: none !important;\n  }\n\n  .EVe89b {\n    color: #5f6368 !important;\n  }\n\n  .GsqdZ {\n    color: #fff !important;\n  }\n\n  .Hdh4hc {\n    fill: currentColor;\n  }\n\n  .CRFCdf {\n    color: #fff !important;\n  }\n\n  .o9fq9d {\n    color: #fff !important;\n  }\n\n  .ZPasfd {\n    border-color: #d93025 !important;\n  }\n\n  .NMm5M {\n    fill: currentColor;\n  }\n\n  .NzPR9b {\n    background-color: #212121;\n  }\n\n  .p062Qe {\n    background-color: #212121;\n    color: #fff;\n  }\n\n  .Bx7THd.PBWx0c .ZHdB2e .kaAt2 {\n    background-color: #212121;\n  }\n\n  .YTbUzc {\n    color: #fff !important;\n  }\n\n  .MuzmKe {\n    color: #f8f8f8 !important;\n  }\n\n  .oIy2qc {\n    color: #fff !important;\n  }\n\n  .vvTMTb {\n    background-color: #212121 !important;\n  }\n\n  .wnPUne {\n    color: #c4c4c4;\n  }\n\n  .XnKlKd .tL9Q4c {\n    color: #000 !important;\n  }\n\n  .tmIkuc.s2gQvd {\n    background-color: #212121 !important;\n  }\n\n  .cS7aqe {\n    color: #fff !important;\n  }\n\n  .cS7aqe {\n    background-color: #212121 !important;\n  }\n\n  .fSW6Ze {\n    background-color: #212121 !important;\n  }\n\n  .Pdo15c .b5FiD .Fxmcue {\n    background-color: #212121 !important;\n  }\n\n  .TZFSLb {\n    background-color: #212121 !important;\n  }\n\n  .U9X0yc {\n    color: #fff !important;\n  }\n\n  .D6kPY {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: #212121 !important;\n  }\n\n  .MF5w2b {\n    background: grey !important;\n  }\n\n  .vlJyvd {\n    color: white !important;\n  }\n\n  .yBLSHc {\n    color: white !important;\n  }\n\n  .aQIrCf {\n    color: #fff !important;\n  }\n\n  .JPdR6b {\n    background-color: #212121 !important;\n  }\n\n  .CIYi0d .jO7h3c {\n    color: #fff !important;\n  }\n\n  .z80M1:hover {\n    background: grey !important;\n  }\n\n  i.google-material-icons.Hdh4hc.cIGbvc {\n    color: currentColor !important;\n  }\n\n  span.DPvwYc.VfeYV {\n    color: #5F6368 !important;\n  }\n\n  .z80M1 {\n    color: #fff;\n  }\n\n  .ZiTobc {\n    color: #212121 !important;\n  }\n\n  .eX03B {\n    color: #fff !important;\n  }\n\n  .DEWFbf {\n    color: #fff !important;\n  }\n\n  .QkKrhf {\n    color: #fdfdfd !important;\n  }\n\n  .NVUqMb {\n    background-color: #212121 !important;\n  }\n\n  .xEi7zc .WhQQ6d {\n    color: #fff !important;\n  }\n\n  .UNoX6b {\n    color: #fff !important;\n  }\n\n  .inWicd {\n    color: #fff !important;\n  }\n\n  .lKl3Te {\n    color: #fff !important;\n  }\n\n  .ncFHed {\n    background-color: #212121 !important;\n  }\n\n  .g3VIld {\n    background-color: #212121 !important;\n  }\n\n  .MocG8c {\n    color: #fff;\n  }\n\n  .NVUqMb {\n    color: #fff !important;\n  }\n\n  .MocG8c.LMgvRb:hover {\n    background: grey !important;\n  }\n\n  .yX8vie {\n    color: #fff !important;\n  }\n\n  .clMRcc {\n    background-color: #212121 !important;\n  }\n\n  .hRmCye {\n    color: #fff !important;\n  }\n\n  .PNenzf {\n    color: #fff !important;\n  }\n\n  .fKz7Od {\n    fill: #fff;\n  }\n\n  .Mgmvtd {\n    color: #fff !important;\n  }\n\n  .HhsXW {\n    background: #5F6368;\n  }\n\n  .LsDE5 {\n    background: #5F6368 !important;\n  }\n\n  .L7osyb {\n    color: #5F6368;\n  }\n\n  .uMYr {\n    background: #C4C4C4 !important\n  }\n\n  .gHs9Xb {\n    color: #fff !important;\n  }\n\n  .ZJUcv {\n    color: #fff !important;\n  }\n\n  .RKRJx .snByac {\n    color: #fff !important;\n  }\n\n  .whsOnd {\n    color: #fff;\n  }\n\n  .mAW2Ib {\n    background: grey;\n  }\n\n  .CO1lLb {\n    color: #fff;\n  }\n\n  .Rg6gpd {\n    background-color: #C4C4C4 !important;\n  }\n\n  ";
            e ||
              (n +=
                "i.google-material-icons.W59Cyb {\n      color: #fff;\n    }\n\n    .rG0ybd {\n      background-color: #212121 !important;\n    }\n\n    .rG0ybd div {\n      color: #fff !important;\n    }   ");
            return n;
          })(e.transBar);
        })
      : (x.textContent = "");
  }
  function Be() {
    setInterval(() => {
      const e = document.querySelector('[jsname="ME4pNd"]'),
        n = document.querySelector('[jsname="b0t70b"]'),
        t = document.querySelector('[jsname="Kzha2e"]');
      e &&
        n &&
        n.hasAttribute("jsaction") &&
        !document.getElementById("muteAllButton") &&
        t &&
        (t.insertAdjacentHTML(
          "afterbegin",
          '<div class="participantButtons" id="muteAllButton"><div class="mesButton"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" class="Hdh4hc cIGbvc" style="width: 23px;margin-right: 5px;"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></svg><span class="GsqdZ K74C9e" style="color: #5f6368; padding-left: 0px;">Mute all</span></div></div>'
        ),
        document.getElementById("muteAllButton").addEventListener("click", qe));
    }, 500);
  }
  function qe() {
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
  function Ee() {
    const e = document.querySelector(".GvcuGe"),
      n = e.childNodes,
      t = [];
    for (let e in n) 1 == n[e].nodeType && t.push(n[e]);
    for (
      t.sort((e, n) => {
        const t = e.querySelector(".zWGUib").textContent.split(" "),
          o = t[t.length - 1].toUpperCase(),
          r = n.querySelector(".zWGUib").textContent.split(" "),
          a = r[r.length - 1].toUpperCase();
        return o === a ? 0 : o > a ? 1 : -1;
      }),
        i = 0;
      i < t.length;
      ++i
    )
      e.appendChild(t[i]);
  }
  function Ie() {
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
      p = setInterval(() => {
        document.querySelector(".uGOf1d").textContent > 1
          ? e()
          : clearInterval(p);
      }, 100);
    }
  }
  function Ae() {
    const e = document.querySelector('[jsname="b0t70b"]');
    (e.scrollTop = e.scrollHeight),
      setTimeout(() => {
        e.scrollTop = 0;
      }, 10),
      0 == I.length && I.push([[window.location.href]]);
    var n = document.querySelectorAll(".zWGUib");
    I.push([["Attendence Taken on " + Date()]]),
      n.forEach((e) => {
        (newAttendee = [[e.textContent]]), I.push(newAttendee);
      }),
      (document.getElementById("attendancePopup").style.opacity = "1"),
      setTimeout(() => {
        document.getElementById("attendancePopup").style.opacity = "0";
      }, 1800);
  }
  function Me() {
    var e = I.join("\n"),
      n = window.document.createElement("a");
    n.setAttribute(
      "href",
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(e)
    );
    let t = new Date();
    const o = String(t.getDate()).padStart(2, "0"),
      r = String(t.getMonth() + 1).padStart(2, "0"),
      a = t.getFullYear();
    (t = r + "/" + o + "/" + a),
      n.setAttribute("download", "attendance-" + t + ".csv"),
      n.click();
  }
  (Date.prototype.addDays = function (e) {
    var n = new Date(this.valueOf());
    return n.setDate(n.getDate() + e), n;
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
          const n = setInterval(() => {
              if (
                ("interactive" === document.readyState &&
                  "Meet" !== document.title &&
                  "Google Meet" !== document.title &&
                  (void 0 === k &&
                    void 0 === S &&
                    void 0 === C &&
                    void 0 === x &&
                    ke(),
                  e.darkMode && Ce(e.darkMode)),
                "complete" === document.readyState &&
                  "Meet" !== document.title &&
                  "Google Meet" !== document.title)
              ) {
                let t = document.querySelector('[jsname="Qx7uuf"]');
                t &&
                  "true" !== t.getAttribute("aria-disabled") &&
                  (clearInterval(n),
                  e.hideJoinUpsell
                    ? e.hideJoinUpsell &&
                      chrome.storage.sync.get("hideJoinUpsellDate", (e) => {
                        new Date().getTime() >
                          new Date(e.hideJoinUpsellDate).getTime() && H();
                      })
                    : H(),
                  e.muteMicrophone && ge(e.muteMicrophone),
                  e.muteVideo && ye(e.muteVideo),
                  e.autoJoin &&
                    (joinInverval = setInterval(() => {
                      (t = document.querySelector('[jsname="Qx7uuf"]')),
                        e.autoJoinParticipants ||
                          (t && (t.click(), clearInterval(joinInverval)));
                    }, 500)),
                  e.autoJoinParticipants &&
                    (o = setInterval(() => {
                      const e = document.querySelector('[role="status"]');
                      e &&
                        (e.classList.contains("Gp1oj") ||
                          (t.click(), clearInterval(o)));
                    }, 500)));
              }
            }, 100),
            t = setInterval(() => {
              if (
                "complete" === document.readyState &&
                "Meet" !== document.title &&
                "Google Meet" !== document.title &&
                document.querySelector('[jsname="CQylAd"]') &&
                (clearInterval(t),
                e.licenseKey &&
                  ((void 0 !== k &&
                    void 0 !== S &&
                    void 0 !== C &&
                    void 0 !== x) ||
                    ke(),
                  Be(),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      n = document.querySelector('[jsname="b0t70b"]'),
                      t = document.getElementById("muteAllButton");
                    e &&
                      n &&
                      n.hasAttribute("jsaction") &&
                      !document.getElementById("removeAllButton") &&
                      t &&
                      (t.insertAdjacentHTML(
                        "afterend",
                        '<div class="participantButtons" id="removeAllButton"><div class="mesButton"><svg style="margin-right: 5px" viewBox="0 0 24 24" focusable="false" width="24" height="24" class="CEJND cIGbvc NMm5M"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg><span>Remove all</span></div></div>'
                      ),
                      document
                        .getElementById("removeAllButton")
                        .addEventListener("click", Ie));
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      n = document.querySelector('[jsname="b0t70b"]'),
                      t = document.querySelector('[jscontroller="jRYOwb"]');
                    e &&
                      n &&
                      n.hasAttribute("jsaction") &&
                      !document.getElementById("sortAllButton") &&
                      t &&
                      (t.insertAdjacentHTML(
                        "afterBegin",
                        '<h4 id="sortAllButton" class="XIsaqe isOLae" style="margin-top: 8px; cursor: pointer; position: sticky; margin-left: 150px; margin-bottom: -34px; right: 0; padding: 2px 14px 2px 16px; margin-right: 24px; border-radius: 100px; background: #5f6368; color: white; display: inline-flex; align-items: center"><i style="margin-left: 4px; margin-right: 3px; font-size: 20px;" class="google-material-icons XB7ZFf">sort</i> <span style="margin-top: 2px;">Sort by last name</span></h4>'
                      ),
                      document
                        .getElementById("sortAllButton")
                        .addEventListener("click", Ee));
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="ME4pNd"]'),
                      n = document.querySelector('[jsname="b0t70b"]'),
                      t = document.getElementById("removeAllButton");
                    if (
                      e &&
                      n &&
                      n.hasAttribute("jsaction") &&
                      !document.getElementById("attendanceButton") &&
                      t
                    ) {
                      t.insertAdjacentHTML(
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
                          .addEventListener("click", Ae),
                        document
                          .getElementById("downloadAttendanceButton")
                          .addEventListener("click", Me);
                    }
                  }, 500),
                  setInterval(() => {
                    const e = document.querySelector('[jsname="vERSO"]'),
                      n = document.querySelector('[jsname="xySENc"]'),
                      t = document.getElementById("emojiButtons");
                    if (e && !t) {
                      setTimeout(() => {
                        n.scrollTop = n.scrollHeight;
                      }, 10),
                        e.insertAdjacentHTML(
                          "afterbegin",
                          "<div style='width: 100%; display: inline-flex; justify-content: space-between; margin-left: 10px; margin-bottom: 14px; margin-top: 14px; font-size: 20px; cursor: pointer;' id='emojiButtons'><div class='emoji'>👍</div><div class='emoji'>👎</div><div class='emoji'>👏</div><div class='emoji'>👋</div><div class='emoji'>❤️</div><div class='emoji'>🎉</div><div class='emoji'>😂</div><div class='emoji'>🔥</div></div>"
                        );
                      const t = document.querySelectorAll(".emoji"),
                        o = document.querySelector("textarea"),
                        r = document.querySelector('[jsname="SoqoBf"]');
                      t.forEach((e) => {
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
                    let n = document.querySelectorAll("audio");
                    setTimeout(() => {
                      void 0 !== e.adjustVolume &&
                        n.forEach((n) => {
                          n.volume = e.adjustVolume / 10;
                        });
                    }, 500);
                  }),
                  e.minimizeVideo && K(e.minimizeVideo),
                  e.autoRecord && N(e.autoRecord),
                  e.manualRecord && !e.autoRecord && R(e.manualRecord),
                  e.hideTopBar && Z(e.hideTopBar),
                  e.autoCopyURL && Q(e.autoCopyURL),
                  e.speakerBorder && Y(e.speakerBorder),
                  e.autoUnmute && _(e.autoUnmute),
                  e.pictureInPicture && X(e.pictureInPicture),
                  e.autoAdmit && pe(e.autoAdmit),
                  e.autoReject && fe(e.autoReject),
                  e.noAddOthers && be(e.noAddOthers),
                  e.mirrorVideos && ae(e.mirrorVideos),
                  e.autoChat && me(e.autoChat),
                  e.displayClock && ue(e.displayClock),
                  e.autoFullScreen && ce(e.autoFullScreen),
                  e.mutePopup && le(e.mutePopup),
                  e.hideCommentBubble && xe(e.hideCommentBubble),
                  e.hideComments && we(e.hideComments),
                  e.transBar && Se(e.transBar)),
                e.ignorePresentationModal && z(e.ignorePresentationModal),
                e.muteMicrophone && ge(e.muteMicrophone),
                e.muteVideo && ye(e.muteVideo),
                e.addChimes && O(e.addChimes),
                e.setBackgroundColor && J(e.setBackgroundColor),
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
                                  n = document.querySelector(
                                    "#mesOnboardingModal > div.onboardingStepOne"
                                  ),
                                  t = document.querySelector(
                                    "#mesOnboardingModal > div.onboardingStepTwo"
                                  );
                                "I'm Done!" == e.innerText &&
                                  (document.getElementById(
                                    "mesOnboardingModal"
                                  ).style.display = "none"),
                                  "notBlinking" ==
                                    t.firstChild.firstChild.getAttribute(
                                      "class"
                                    ) &&
                                    (n.firstChild.firstChild.setAttribute(
                                      "class",
                                      "notBlinking"
                                    ),
                                    (t.style.opacity = "1"),
                                    (n.style.opacity = "0.5"),
                                    t.firstElementChild.setAttribute(
                                      "class",
                                      "activeBlink"
                                    ),
                                    t.firstChild.firstChild.setAttribute(
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
                        const n = document.createElement("style");
                        (n.textContent =
                          "\n\n  #onboardingHeader {\n    display: flex;\n    align-items: center;\n    margin-bottom: 14px;\n  }\n\n  #onboardingHeader svg {\n    right: 20px;\n    position: absolute;\n    cursor: pointer;\n  }\n\n  #onboardingHeader p {\n    margin-left: 14px;\n    font-family: 'Google Sans',Roboto,Arial,sans-serif;\n    font-size: 1.125rem;\n    font-weight: 400;\n    letter-spacing: 0;\n  }\n\n  #onboardingHeader img {\n    width: 30px;\n  }\n\n  .button {\n    display: inline-block;\n    background: #09201D;\n    color: white;\n    padding: 0.5em 1em;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n\n  #onboardingNextButton {\n    width: 94%;\n    text-align: center;\n    cursor: pointer;\n    padding: 12px;\n    margin-top: 6px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n\n  .button:hover {\n    background: #62AF7D;\n  }\n\n  #mesOnboardingModal {\n    font-family: 'Google Sans',Roboto,Arial,sans-serif;\n  }\n\n  #mesOnboardingModal {\n    z-index: 100;\n    position: absolute;\n    max-width: 360px;\n    min-width: 360px;\n    bottom: 115px;\n    right: 22px;\n    background: white;\n    padding: 1.5em;\n    border-radius: 14px\n  }\n\n  .onboardingCta {\n    position: relative;\n    margin-bottom: 1em;\n  }\n\n  #onboardingVideo {\n    max-width: 356px;\n    min-width: 356px;\n    max-height: 236px;\n    min-height: 236px;\n    border: 2px solid rgba(9, 32, 29, 0.1);\n    border-radius: 1em;\n    margin-bottom: 4px;\n  }\n\n  .onboardingStepOne,\n  .onboardingStepTwo {\n    background: #f3f3f3;\n    padding: 1em;\n    border-radius: 1em;\n    margin-bottom: 0.5em;\n    transition: opacity ease-in-out 0.8s;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n  }\n\n  .onboardingStepTwo {\n    opacity: 0.5;\n  }\n\n  .onboardingCard {\n    display: flex;\n    padding: 1.5em;\n    background: rgba(white, 0.9);\n  }\n\n  .onboardingContent {\n    margin-left: 2em;\n    width: 100%;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin: 0 0 0.5em 0;\n  }\n\n  p {\n    margin: 0 0 0 0;\n    display: inline;\n  }\n\n  span {\n    border-bottom: 2px solid rgba(white, 0.3);\n  }\n\n  .activeBlink {\n    display: inline-flex;\n    align-self: center;\n    transition: display ease-in-out 5s;\n    transition-delay: 5s;\n  }\n\n  .blinking {\n    -webkit-animation: 1s blink ease infinite;\n    -moz-animation: 1s blink ease infinite;\n    -ms-animation: 1s blink ease infinite;\n    -o-animation: 1s blink ease infinite;\n    animation: 1s blink ease infinite;\n    margin-right: 4px;\n    position: relative;\n    top: 0.195em;\n  }\n\n  .notBlinking {\n    margin-right: 4px;\n    position: relative;\n    top: 0.195em;\n  }\n\n  @keyframes blink {\n    from,\n    to {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n  "),
                          document.head.append(n);
                      })();
                  }),
                e.hideToolsUpsell
                  ? e.hideToolsUpsell &&
                    chrome.storage.sync.get("hideToolsUpsellDate", (e) => {
                      new Date().getTime() >
                        new Date(e.hideToolsUpsellDate).getTime() && U();
                    })
                  : U(),
                e.leavePrompt && ee(e.leavePrompt),
                e.autoCaptions && de(e.autoCaptions),
                e.hideNames && te(e.hideNames),
                e.showNames && ne(e.showNames),
                e.hideTalkIcons && oe(e.hideTalkIcons),
                e.meetingTimer && re(e.meetingTimer),
                e.pinBottomBar && ie(e.pinBottomBar),
                e.toggleBottomBar && $(e.toggleBottomBar),
                e.quickLeave && document.addEventListener("keydown", se),
                e.smartUnmute)
              ) {
                Ve(new De(e.keyCode));
              }
            }, 100),
            r = setInterval(() => {
              if (
                "complete" === document.readyState &&
                document.querySelector('[jscontroller="VQ0pCb"]')
              ) {
                if ((clearInterval(r), e.homeOnLeave)) {
                  let e = document.querySelector('[jsname="dqt8Pb"]');
                  e && he(e);
                }
                e.hideHangupPageUpsell
                  ? e.hideHangupPageUpsell &&
                    chrome.storage.sync.get("hideHangupPageUpsellDate", (e) => {
                      new Date().getTime() >
                        new Date(e.hideHangupPageUpsellDate).getTime() && j();
                    })
                  : j();
              }
            }, 100),
            a = setInterval(() => {
              (("complete" === document.readyState &&
                "Meet" === document.title) ||
                "Google Meet" === document.title) &&
                (clearInterval(a),
                ke(),
                e.darkMode && Ce(e.darkMode),
                chrome.storage.sync.get("licenseKey", (n) => {
                  !1 !== n.licenseKey || e.hideMainPageUpsell
                    ? !1 === n.licenseKey &&
                      e.hideMainPageUpsell &&
                      chrome.storage.sync.get("hideMainPageUpsellDate", (e) => {
                        new Date().getTime() >
                          new Date(e.hideMainPageUpsellDate).getTime() && P();
                      })
                    : P();
                }));
            }, 100);
        })(e)
    ),
    chrome.storage.onChanged.addListener((e) =>
      (function (e) {
        for (let n in e) {
          const t = e[n];
          if (document.querySelector("c-wiz")) {
            if (
              ("ignorePresentationModal" === n && z(t.newValue),
              "autoRecord" === n && N(t.newValue),
              "manualRecord" === n && R(t.newValue),
              "addChimes" === n && O(t.newValue),
              "setBackgroundColor" === n && J(t.newValue),
              "hideTopBar" === n && Z(t.newValue),
              "speakerBorder" === n && Y(t.newValue),
              "autoUnmute" === n && _(t.newValue),
              "pictureInPicture" === n && X(t.newValue),
              "meetingTimer" === n && re(t.newValue),
              "toggleBottomBar" === n && $(t.newValue),
              "pinBottomBar" === n && ie(t.newValue),
              "hideNames" === n && te(t.newValue),
              "showNames" === n && ne(t.newValue),
              "hideTalkIcons" === n && oe(t.newValue),
              "muteMicrophone" === n && ge(t.newValue),
              "muteVideo" === n && ye(t.newValue),
              "leavePrompt" === n && ee(t.newValue),
              "mirrorVideos" === n && ae(t.newValue),
              "autoJoin" === n)
            ) {
              const e = setInterval(() => {
                const t = document.querySelector('[jsname="Qx7uuf"]');
                n.autoJoinParticipants || (t && (t.click(), clearInterval(e)));
              }, 500);
            }
            if ("autoJoinParticipants" === n) {
              const e = document.querySelector('[role="status"]'),
                n = document.querySelector('[jsname="Qx7uuf"]');
              o = setInterval(() => {
                e &&
                  (e.classList.contains("Gp1oj") ||
                    (n && (n.click(), clearInterval(o))));
              }, 500);
            }
            if (
              ("licenseKey" === n && !1 !== t.newValue && (Be(), ke()),
              "minimizeVideo" === n && K(t.newValue),
              "autoCopyURL" === n && Q(t.newValue),
              "autoAdmit" === n && pe(t.newValue),
              "autoReject" === n && fe(t.newValue),
              "noAddOthers" === n && be(t.newValue),
              "autoChat" === n && me(t.newValue),
              "displayClock" === n && ue(t.newValue),
              "darkMode" === n && Ce(t.newValue),
              "autoFullScreen" === n && ce(t.newValue),
              "mutePopup" === n && le(t.newValue),
              "hideCommentBubble" === n && xe(t.newValue),
              "hideComments" === n && we(t.newValue),
              "transBar" === n && Se(t.newValue),
              "autoCaptions" === n && de(t.newValue),
              "quickLeave" === n &&
                (t.newValue
                  ? document.addEventListener("keydown", se)
                  : document.removeEventListener("keydown", se)),
              "smartUnmute" === n &&
                (t.newValue
                  ? chrome.storage.sync.get("keyCode", (e) => {
                      Ve(new De(e.keyCode));
                    })
                  : (document.body.removeEventListener("keydown", Pe),
                    document.body.removeEventListener("keyup", Te))),
              "keyCode" === n)
            ) {
              Ve(new De(t.newValue));
            }
            "backgroundColor" === n && F(t.newValue),
              "borderColor" === n && W(t.newValue),
              "adjustVolume" === n && G(t.newValue);
          }
        }
      })(e)
    );
  let je, Pe, Te;
  const Le = (e, n) => (t) => {
    if (
      t.target &&
      (["chatTextInput", "chatTextArea", "textInput", "textArea"].includes(
        t.target.name
      ) ||
        ["textarea"].includes(t.target.localName))
    )
      return;
    const o = t.target?.dataset?.tooltip;
    if (
      ((o?.includes("microphone") || o?.includes("camera")) &&
        t.stopPropagation(),
      t.repeat)
    )
      return;
    if ("keydown" === t.type && !e.matchKeydown(t)) return;
    if ("keyup" === t.type && !e.matchKeyup(t)) return;
    t.preventDefault();
    const r = document
      .querySelector('[jscontroller="QWZd7"]')
      .querySelector(((e) => `button[data-is-muted*='${e}']`)(n));
    r && r.click();
  };
  function Ve(e) {
    je &&
      (document.body.removeEventListener("keydown", Pe),
      document.body.removeEventListener("keyup", Te)),
      (je = e),
      (Pe = Le(e, "true")),
      (Te = Le(e, "false")),
      document.body.addEventListener("keydown", Pe),
      document.body.addEventListener("keyup", Te);
  }
  class De {
    constructor({
      keyCode: e,
      ctrlKey: n = !1,
      altKey: t = !1,
      shiftKey: o = !1,
      metaKey: r = !1,
    }) {
      this.keys = {
        keyCode: e,
        ctrlKey: n,
        altKey: t,
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
