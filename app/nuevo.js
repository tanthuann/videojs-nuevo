/**
 * @license
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * Version 10.2.0
 */
/*eslint no-inner-declarations: "off"*/ import videojs from "video.js";
import document from "global/document";
const def = {
  infoSize: 18,
  zoomMenu: !0,
  rate: 1,
  pipButton: !0,
  ccButton: !0,
  relatedMenu: !0,
  settingsButton: !0,
  filtersMenu: !1,
  downloadButton: !1,
  rateMenu: !0,
  hdicon: !0,
  shareMenu: !0,
  zoomInfo: !0,
  chapterMarkers: !0,
  contextMenu: !0,
  contextLink: !0,
  timetooltip: !1,
  captionsSettings: "undefined",
  mousedisplay: !0,
  related: {},
  logoposition: "LT",
  logooffsetX: 10,
  logooffsetY: 10,
  logourl: "",
  url: "",
  title: "",
  description: "",
  embed: "",
  endAction: "",
  pubid: "",
  slideWidth: 160,
  slideHeight: 90,
  slideType: "vertical",
  limit: 0,
  limitmessage: "Watch full video on",
  resume: !1,
  video_id: "",
  playlistID: "undefined",
  playlistMaxH: "undefined",
  playlistUI: !0,
  playlistShow: !0,
  playlistAutoHide: !0,
  playlist: !1,
  currentSlide: "",
  infoIcon: "",
  target: "_blank",
  buttonRewind: !0,
  metatitle: "",
  metasubtitle: "",
  qualityMenu: !1,
  captionsSize: 1.25,
  tooltips: !0,
  singlePlay: !1,
  rewindforward: 10,
  snapshot: !1,
  snapshotType: "jpg",
  snapshotWatermark: "",
  ghostThumb: !1,
  minhd: 1080,
  liveReconnect: !1,
  paused: !1,
  controlbar: !0,
  touchRewindForward: !0,
  touchControls: !0,
  iosFullscreen: "native",
  androidLock: !1,
  playsinline: !0,
  keepSource: !1,
  log: !1,
};
var browser = videojs.browser;
function lint(e) {
  return e;
}
if (browser.IS_ANDROID) {
  try {
    videojs.options.html5.vhs.overrideNative = !0;
  } catch (e) {
    lint(e);
  }
  try {
    videojs.options.html5.hls.overrideNative = !0;
  } catch (e) {
    lint(e);
  }
  videojs.options.html5.nativeAudioTracks = !1;
  videojs.options.html5.nativeTextTracks = !1;
}
function setSkin(e) {
  var i = "progressControl",
    t = "playToggle",
    s = "liveDisplay",
    n = "seekToLive",
    a = "currentTimeDisplay",
    o = "timeDivider",
    l = "durationDisplay",
    r = "customControlSpacer",
    d = "volumePanel",
    v = "chaptersButton",
    f = "descriptionsButton",
    c = "subsCapsButton",
    u = "audioTrackButton",
    h = "pictureInPictureToggle",
    p = "fullscreenToggle",
    j = null;
  if ("treso" === e)
    j = { children: [i, t, s, n, a, l, d, r, v, f, c, u, h, p] };
  else if ("chrome" === e)
    j = { children: [t, s, n, a, o, l, r, i, d, v, f, c, u, h, p] };
  else if ("party" === e)
    j = { children: [t, s, n, i, a, o, l, r, d, v, f, c, u, h, p] };
  else if ("roundal" === e || "pinko" === e)
    j = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, i, o, l, r, d, v, f, c, u, h, p],
    };
  else if ("shaka" === e)
    j = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p],
    };
  else if ("flow" === e)
    j = { children: [t, s, n, a, o, l, i, r, d, v, f, c, u, h, p] };
  else if ("jwlike" === e)
    j = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [i, t, s, n, d, a, o, l, r, v, f, c, u, h, p],
    };
  else if ("mockup" === e)
    j = { children: [i, t, d, s, n, a, o, l, r, v, f, c, u, h, p] };
  else if ("nuevo" === e)
    j = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, o, i, l, r, d, v, f, c, u, h, p],
    };
  if (null !== j) videojs.options.controlBar = j;
}
var sortByKey = function (e, i) {
    return e.sort(function (e, t) {
      var s = e[i],
        n = t[i];
      return s < n ? -1 : s > n ? 1 : 0;
    });
  },
  vjs_find = function (e, i) {
    try {
      return e.querySelector(i);
    } catch (e) {
      return !1;
    }
  },
  vjs_mfind = function (e, i) {
    try {
      return e.querySelectorAll(i);
    } catch (e) {
      return !1;
    }
  },
  vjs_El = function (e, i, t) {
    var s = document.createElement(e);
    if (void 0 !== i) if ("" !== i) s.className = i;
    if (void 0 !== t) if ("" !== t) s.innerHTML = t;
    return s;
  };
videojs.options.skin = "";
videojs.skin = function (e) {
  if ("" === videojs.options.skin)
    for (var i in vjs_skins)
      if (vjs_skins[i] === e) {
        setSkin(e);
        videojs.options.skin = e;
      }
};
if (document.body) {
  var vjs_skin = vjs_El("div"),
    doc = document.body;
  doc.appendChild(vjs_skin);
  var vjs_skins = [
    "nuevo",
    "treso",
    "chrome",
    "flow",
    "jwlike",
    "mockup",
    "party",
    "pinko",
    "roundal",
    "shaka",
  ];
  for (var k in vjs_skins) {
    vjs_skin.className = "vjs-" + vjs_skins[k];
    if (13 === vjs_skin.offsetWidth) {
      videojs.options.skin = vjs_skins[k];
      setSkin(vjs_skins[k]);
    }
  }
  doc.removeChild(vjs_skin);
} else {
  videojs.options.skin = "nuevo";
  setSkin("nuevo");
}
videojs.skin = function (e) {
  if ("" === videojs.options.skin) setSkin(e);
};
function dg13(e) {
  return (e + "").replace(/[a-z]/gi, function (e) {
    return String.fromCharCode(
      e.charCodeAt(0) + (e.toLowerCase() < "n" ? 13 : -13)
    );
  });
}
var doms = [
    "yrirqbirha",
    "znwbri",
    "gfbuynpby",
    "1.0.0.721",
    "rupnp",
    "bv.acqp",
    "zbp.avofw",
    "gra.yyrufw",
    "ccn.ofp",
    "kboqanfrqbp",
  ],
  initPlugin = function (e, i) {
    var t = videojs.dom,
      s = e.el(),
      n = videojs.mergeOptions(def, i);
    n.skin = videojs.options.skin;
    var a = !1,
      o = parseInt(n.rewindforward, 10);
    if (o < 1) o = 10;
    if (o > 90) o = 90;
    n.rewindforward = o;
    var l = !1,
      r = Object.defineProperty({}, "passive", {
        get: function () {
          l = !0;
          return !0;
        },
      });
    window.addEventListener("testPassive", null, r);
    window.removeEventListener("testPassive", null, r);
    document.addEventListener("pointermove", v);
    function d(e) {
      if (e) return e.touches[0].pageX || null;
    }
    function v(e) {
      if ("mouse" === e.pointerType) {
        a = !0;
        s.classList.remove("vjs-touch-inactive");
        s.classList.remove("vjs-touch-active");
        c(!1);
      }
    }
    window.addEventListener("touchstart", f, l ? { passive: !1 } : !1);
    function f(i) {
      s.classList.remove("vjs-has-mouse");
      c(!0);
      if (D.contains(i.target)) {
        Ue();
      }
      if (i.target === e.$(".vjs-tech")) {
        i.stopImmediatePropagation();
        if (t.hasClass(s, "vjs-user-active")) Fe();
        else {
          e.options_.inactivityTimeout = X;
          Oe();
        }
      }
    }
    e.on("dispose", function () {
      window.removeEventListener("touchstart", f);
      document.removeEventListener("pointermove", v);
    });
    function c(e) {
      var i = vjs_find(s, ".vjs-rewind-control"),
        n = vjs_find(s, ".vjs-forward-control"),
        a = vjs_find(s, ".vjs-extend-zoom"),
        o = vjs_find(s, ".vjs-related"),
        l = vjs_find(s, ".vjs-grid"),
        r = null,
        d = null;
      if (l) {
        r = vjs_find(l, ".vjs-arrow-prev");
        d = vjs_find(l, ".vjs-arrow-next");
      }
      if (e) {
        s.classList.remove("vjs-has-mouse");
        if (i) t.addClass(i, "vjs-hidden");
        if (n) t.addClass(n, "vjs-hidden");
        if (a) t.addClass(a, "vjs-hidden");
        if (o) t.addClass(o, "vjs-scroll");
        if (r) t.addClass(r, "vjs-hidden");
        if (d) t.addClass(d, "vjs-hidden");
      } else {
        s.classList.add("vjs-has-mouse");
        if (i) t.removeClass(i, "vjs-hidden");
        if (n) t.removeClass(n, "vjs-hidden");
        if (a) t.removeClass(a, "vjs-hidden");
        if (o) t.removeClass(o, "vjs-scroll");
        if (r) t.removeClass(r, "vjs-hidden");
        if (d) t.removeClass(d, "vjs-hidden");
      }
    }
    var u = function () {
      if (a) return !0;
      if (matchMedia("(pointer:fine)").matches) {
        c(!0);
        return !0;
      }
      return !1;
    };
    u();
    if (!1 === n.log) videojs.log.level("off");
    var h,
      p,
      j,
      m,
      g,
      y = 0,
      b = 0,
      _ = 0,
      C = 0,
      w = 1;
    e.shadowSlide = n.ghostThumb;
    var k = ">vid/<deretsiger ton tcudorP>'ncl-sjv'=ssalc vid<",
      x = !1,
      T = !1,
      E = !1,
      I = e.$(".vjs-tech");
    if (n.playsinline) I.setAttribute("playsinline", "true");
    if (e.autoplay) I.setAttribute("preload", "true");
    var L,
      M,
      H,
      S,
      B,
      N,
      q = [],
      z = vjs_find(s, ".vjs-big-play-button"),
      A = vjs_find(s, ".vjs-progress-holder"),
      P = vjs_find(s, ".vjs-loading-spinner"),
      D = vjs_find(s, ".vjs-control-bar"),
      W = vjs_find(s, ".vjs-poster");
    if (!0 === videojs.dispose) {
      e.qualities = [];
      e.qualityIndex = -1;
      if (
        "pseudo" === n.iosFullscreen &&
        videojs.browser.IS_IOS &&
        videojs.browser.IOS_VERSION > 9 &&
        !e.el_.ownerDocument.querySelector(".bc-iframe")
      ) {
        e.tech_.el_.setAttribute("playsinline", "playsinline");
        e.tech_.supportsFullScreen = function () {
          return !1;
        };
      }
      e.on("fullscreenchange", function () {
        if (videojs.browser.IS_ANDROID && n.androidLock)
          if ("undefined" !== typeof window)
            if (e.isFullscreen())
              window.screen.orientation.lock("landscape-primary");
            else window.screen.orientation.lock("any");
      });
      if (n.touchControls) {
        var R = e.addChild("button", {
          el: t.createEl(
            "button",
            { className: "vjs-big-button vjs-b-p-b" },
            {
              type: "button",
              title: e.localize("Pause"),
              "aria-disabled": "false",
            }
          ),
        });
        s.insertBefore(R.el_, z);
        R.el_.addEventListener("touchend", function (i) {
          i.stopImmediatePropagation();
          Ue();
          if (e.paused()) e.play();
          else e.pause();
        });
        z.ontouchend = W.ontouchend = function () {
          if (!0 !== x) t.addClass(s, "vjs-touch-inactive");
        };
      }
      if (n.touchRewindForward && n.touchControls) {
        var O = e.addChild("button", {
          el: t.createEl(
            "button",
            { className: "vjs-big-button vjs-b-r-b" },
            {
              type: "button",
              title: e.localize("Rewind"),
              "aria-disabled": "false",
            }
          ),
        });
        O.el_.innerHTML = "<span>" + n.rewindforward + "</span>";
        s.insertBefore(O.el_, z);
        var F = e.addChild("button", {
          el: t.createEl(
            "button",
            { className: "vjs-big-button vjs-b-f-b" },
            {
              type: "button",
              title: e.localize("Forward"),
              "aria-disabled": "false",
            }
          ),
        });
        F.el_.innerHTML = "<span>" + n.rewindforward + "</span>";
        s.insertBefore(F.el_, z);
        F.el_.ontouchend = function (i) {
          i.stopPropagation();
          Ue();
          e.forward();
        };
        O.el_.ontouchend = function (i) {
          i.stopPropagation();
          Ue();
          e.rewind();
        };
      }
      var U = e.options_.inactivityTimeout,
        X = 4e3;
      if (e.options_.inactivityTouchTimeout)
        X = e.options_.inactivityTouchTimeout;
      D.ontouchstart = D.ontouchmove = function () {
        Ue();
      };
      e.setQuality = function (i, t) {
        if (e.qualities.length)
          if ("boolean" === typeof t) {
            e.qualities[i].enabled = t;
            if (e.tech_.vhs) {
              e.tech_.vhs.representations()[i].enabled(t);
            }
          }
      };
      if (!0 !== n.controlbar) t.addClass(s, "vjs-controls-none");
      e.video_id = function () {
        for (var i = e.currentSources(), t = 0; t < i.length; t++)
          if (void 0 !== i[t].video_id) {
            n.video_id = i[t].video_id;
            break;
          }
        return n.video_id || null;
      };
      e.video_title = function () {
        for (var i = e.currentSources(), t = 0; t < i.length; t++)
          if (void 0 !== i[t].title) {
            n.title = i[t].title;
            break;
          }
        return n.title || null;
      };
      if (!0 !== n.ccButton) var Y = vjs_find(D, ".vjs-subs-caps-button");
      if (Y) t.addClass(Y, "vjs-abs-hidden");
      e.forward = function () {
        var i = e.duration(),
          t = e.currentTime();
        if (i > 0) {
          var s = t + n.rewindforward;
          if (s > i) e.currentTime(i);
          else e.currentTime(s);
        }
        e.trigger("forward", { oldTime: t, newTime: s });
      };
      e.rewind = function () {
        if (e.duration() > 0) {
          var i = e.currentTime(),
            t = e.currentTime() - n.rewindforward;
          if (t < 0) t = 0;
          e.currentTime(t);
          e.trigger("rewind", { oldTime: i, newTime: t });
        }
      };
      e.related = function () {
        if (
          n.settingsButton &&
          n.related.length > 1 &&
          n.relatedMenu &&
          !0 !== e.seeking()
        ) {
          Xe(L, !1);
          Xe(H, !1);
          t.removeClass(vjs_find(s, ".vjs-menu-settings"), "vjs-lock-showing");
          Xe(M, !0);
          ti();
          e.trigger("related");
          e.pause();
        }
      };
      e.snapshot = function () {
        var e = s.querySelector("video"),
          i = e.videoWidth,
          t = e.videoHeight,
          a = t / i,
          o = document.getElementById("snap");
        if (o) o.parentNode.removeChild(o);
        var l = document.createElement("canvas");
        l.id = "snap";
        l.style.position = "absolute";
        l.style.left = "-10000px";
        l.style.top = "0";
        document.body.appendChild(l);
        var r,
          d = l.getContext("2d");
        if (
          browser.IS_ANDROID ||
          browser.IS_IPAD ||
          browser.IS_IPHONE ||
          browser.IS_IPOD
        )
          if (i > 640) {
            t = parseInt(640 * a, 10);
            i = 640;
          }
        l.width = i;
        l.height = t;
        d.fillRect(0, 0, i, t);
        d.drawImage(e, 0, 0, i, t);
        if ("" !== n.snapshotWatermark)
          if (n.snapshotWatermark.length > 2) {
            var v = n.snapshotWatermark;
            if (i < 641) d.font = "16px verdana";
            else d.font = "24px verdana";
            var f = d.measureText(v).width;
            d.globalAlpha = 0.5;
            d.fillStyle = "white";
            d.fillText(v, i - f - 10, t - 20);
            d.fillStyle = "black";
            d.fillText(v, i - f - 10 + 2, t - 20 + 2);
          }
        var c = "snapshot.jpg";
        r = l.toDataURL("image/jpeg", 0.9);
        if ("png" === n.snapshotType) {
          c = "snapshot.png";
          r = l.toDataURL("image/png");
        }
        var u = document.createElement("a");
        u.href = r;
        u.download = c;
        document.body.appendChild(u);
        setTimeout(function () {
          u.click();
        }, 200);
      };
      e.on("filters", function () {
        Xe(L, !1);
        Xe(M, !1);
        Fe();
      });
      e.share = function () {
        if (n.settingsButton && n.shareMenu && !0 !== e.seeking()) {
          Xe(M, !1);
          Xe(H, !1);
          t.removeClass(vjs_find(s, ".vjs-menu-settings"), "vjs-lock-showing");
          e.trigger("share");
          var i = n.url || document.location.href,
            a = n.embed || "N/A";
          vjs_find(s, ".embed-code").value = a;
          vjs_find(s, ".perma").value = i;
          Xe(L, !0);
          e.pause();
        }
      };
      if (!0 !== n.contextMenu && "default" !== n.contextMenu)
        s.addEventListener(
          "contextmenu",
          function (e) {
            e.preventDefault();
          },
          !1
        );
      var K = vjs_find(s, ".vjs-custom-control-spacer");
      if (K) K.innerHTML = "";
      var $ = e.addChild("button", {
        el: t.createEl(
          "button",
          { className: "vjs-replay-button" },
          {
            type: "button",
            title: e.localize("Replay"),
            "aria-disabled": "false",
          }
        ),
      });
      s.insertBefore($.el_, z);
      $.el_.onclick = $.el_.ontouchstart = function (i) {
        i.stopImmediatePropagation();
        e.currentTime(0);
        e.play();
      };
      var Q = vjs_find(s, ".vjs-picture-in-picture-control");
      if (!0 !== n.pipButton) I.disablePictureInPicture = !0;
      var V = e.controlBar.el().lastChild;
      if ((document.pictureInPictureEnabled && n.pipButton) || Q)
        V = e.controlBar.getChild("pictureInPictureToggle").el_;
      var Z = e.controlBar.addChild("button", {
          el: t.createEl(
            "div",
            {
              className:
                "vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden",
            },
            {
              role: "button",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            }
          ),
        }),
        G = e.controlBar.addChild("button", {
          el: t.createEl("div", {
            className: "vjs-control vjs-button vjs-cog-menu-button vjs-hidden",
          }),
        });
      D.insertBefore(Z.el_, V);
      D.insertBefore(G.el_, V);
      N = G.el_;
      if (n.snapshot) {
        var J = e.controlBar.addChild("button", {
          el: t.createEl(
            "button",
            { className: "vjs-snap-control vjs-control vjs-button" },
            { type: "button" }
          ),
        });
        J.el_.innerHTML =
          '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
          e.localize("Snapshot") +
          "</span>";
        e.controlBar.el_.insertBefore(J.el_, G.el_);
        J.el_.onclick = J.el_.ontouchstart = function (i) {
          i.stopImmediatePropagation();
          e.snapshot();
        };
      }
      if (n.controlbar) {
        var ee = t.createEl("div", { className: "vjs-background-bar" });
        s.insertBefore(ee, D);
      }
      S = Z.el_;
      var ie =
        '<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' +
        e.localize("Quality") +
        '</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
      S.innerHTML = ie;
      if (n.buttonForward) {
        if (n.buttonRewind) Ye(!0);
        var te = "vjs-forward-control",
          se = e.controlBar.addChild("button", {
            el: t.createEl(
              "button",
              { className: te + " vjs-control vjs-button" },
              {
                title: e.localize("Forward"),
                type: "button",
                "aria-disabled": "false",
              }
            ),
          });
        se.el_.innerHTML =
          '<span class="num">' +
          n.rewindforward +
          '</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
          e.localize("Forward") +
          "</span>";
        if ("party" === n.skin && n.buttonRewind)
          e.controlBar.el_.insertBefore(
            se.el_,
            vjs_find(s, ".vjs-rewind-control").nextSibling
          );
        else
          e.controlBar.el_.insertBefore(
            se.el_,
            e.controlBar.getChild("playToggle").el_.nextSibling
          );
        se.el_.onclick = se.el_.ontouchstart = function () {
          e.forward();
        };
      } else if (n.buttonRewind) Ye();
      var ne = t.createEl("div", { className: "vjs-vast-label" });
      ne.innerHTML = e.localize("Advertisement");
      var ae = "playToggle";
      if ("party" === n.skin) ae = "progressControl";
      if ("treso" === n.skin) ae = "volumePanel";
      D.insertBefore(ne, e.controlBar.getChild(ae).el_.nextSibling);
      if (n.theaterButton) {
        var oe = e.controlBar.addChild("button", {
          el: t.createEl(
            "div",
            {
              className:
                "vjs-control vjs-button vjs-control-button vjs-mode-control",
            },
            { "aria-live": "polite", "aria-disabled": "false" }
          ),
        });
        oe.el_.innerHTML =
          '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
          e.localize("Theater mode") +
          "</span>";
        D.insertBefore(oe.el_, e.controlBar.getChild("fullscreenToggle").el_);
        var le = oe.el_;
        if ("large" === n.theaterButton) t.addClass(le, "vjs-mode");
        oe.el_.onclick = oe.el_.ontouchstart = function (i) {
          i.preventDefault();
          i.stopPropagation();
          var s = oe.el_;
          if (t.hasClass(s, "vjs-mode")) {
            t.removeClass(s, "vjs-mode");
            e.trigger("mode", "normal");
          } else {
            t.addClass(s, "vjs-mode");
            e.trigger("mode", "large");
          }
        };
      }
      var re = vjs_El("div", "vjs-menu-settings"),
        de = vjs_El("div", "vjs-menu-div vjs-settings-div");
      re.appendChild(de);
      var ve = vjs_El("div", "vjs-submenu vjs-settings-home");
      de.appendChild(ve);
      var fe = vjs_El("ul", "vjs-menu-content vjs-settings-list");
      ve.appendChild(fe);
      (B = t.createEl(
        "button",
        { className: "vjs-cog-button vjs-menu-button vjs-button" },
        {
          "aria-live": "polite",
          "aria-disabled": "false",
          "aria-expanded": "false",
        }
      )).innerHTML =
        '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-hd vjs-hidden">HD</span><span class="vjs-control-text" aria-live="polite">' +
        e.localize("Settings") +
        "</span>";
      N.appendChild(B);
      N.appendChild(re);
      if (n.downloadButton) {
        var ce = e.controlBar.addChild("button", {
          el: videojs.dom.createEl(
            "button",
            {
              className: "vjs-download-control vjs-control vjs-button",
              title: e.localize("Download"),
            },
            { type: "button", "aria-disabled": "false" }
          ),
        });
        D.insertBefore(ce.el_, e.controlBar.getChild("fullscreenToggle").el_);
        ce.el_.innerHTML =
          '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
          e.localize("Download") +
          "</span>";
        ce.el_.onclick = ce.el_.ontouchstart = function (i) {
          i.stopPropagation();
          var t = e.video_id();
          e.trigger("downloadVideo", { source: e.currentSrc(), id: t });
        };
      }
      $e();
      for (var ue = vjs_mfind(s, ".vjs-control"), he = 0; he < ue.length; he++)
        ue[he].removeAttribute("title");
      var pe = D.querySelectorAll(".vjs-button");
      for (he = 0; he < pe.length; he++) pe[he].removeAttribute("title");
      var je,
        me = browser.IE_VERSION,
        ge = s.offsetWidth,
        ye = s.offsetHeight;
      if (me > 0) je = setTimeout(Qe, 500);
      else
        try {
          (g = new ResizeObserver(function () {
            Ve();
          })).observe(s);
        } catch (e) {
          return !1;
        }
      e.on("dispose", function () {
        if (me > 0) clearTimeout(je);
        else
          try {
            g.unobserve(s);
          } catch (e) {
            return !1;
          }
        window.removeEventListener("click", Ze);
        window.removeEventListener("touchstart", Ge);
        if (window.parent)
          try {
            window.parent.removeEventListener("click", Ze);
            window.parent.removeEventListener("touchstart", Ge);
          } catch (e) {
            lint(e);
          }
        E = !0;
      });
      window.addEventListener("click", Ze);
      window.addEventListener("touchstart", Ge);
      if (window.parent)
        try {
          window.parent.addEventListener("click", Ze);
          window.parent.addEventListener("touchstart", Ge);
        } catch (e) {
          lint(e);
        }
      A.addEventListener("touchend", function (e) {
        Fe(e);
      });
      if ("" === n.title) n.title = n.metatitle = document.title;
      if ("" === n.infoText) n.infoText = n.metatitle;
      if (!n.timetooltip) {
        var be = vjs_find(s, ".vjs-play-progress"),
          _e = vjs_find(be, ".vjs-time-tooltip");
        if (be && _e) t.addClass(_e, "vjs-abs-hidden");
      }
      try {
        if (!n.mousedisplay)
          t.addClass(vjs_find(s, ".vjs-mouse-display"), "vjs-abs-hidden");
      } catch (e) {
        lint(e);
      }
      if (n.logocontrolbar) {
        var Ce = vjs_El("img"),
          we = !1;
        Ce.src = n.logocontrolbar;
        Ce.onload = function () {
          if (this.width + this.height === 0) we = !0;
          if (!0 !== we) {
            var i = vjs_El("div", "vjs-logo-bar");
            if ("" !== n.logourl) {
              var t = vjs_El("a");
              t.href = n.logourl;
              t.target = n.target;
              if (n.logotitle) t.title = n.logotitle;
              t.appendChild(Ce);
              i.appendChild(t);
              i.style.cursor = "pointer";
            } else i.appendChild(Ce);
            D.insertBefore(i, e.controlBar.getChild("fullscreenToggle").el_);
          }
        };
      }
      if (n.contextMenu && "default" !== n.contextMenu) {
        var ke = vjs_El("div", "vjs-context-menu vjs-hidden"),
          xe =
            '<ul><li class="cplay">Play</li><li class="cmute">Mute</li><li class="cfull">Fullscreen</li>';
        if (void 0 !== n.contextUrl && void 0 !== n.contextText)
          if (n.contextIcon)
            xe +=
              '<li class="link"><a target="' +
              n.target +
              '" href="' +
              n.contextUrl +
              '"><img src="' +
              n.contextIcon +
              '">' +
              n.contextText +
              "</a></li>";
          else
            xe +=
              '<li class="link"><a target="' +
              n.target +
              '" href="' +
              n.contextUrl +
              '">' +
              n.contextText +
              "</a></li>";
        else if (n.contextLink)
          xe +=
            '<li class="link"><a target="_blank" href="#">&copy; Luân Phạm v.1.0.0</a></li>';
        xe += "</ul>";
        ke.innerHTML = xe;
        s.appendChild(ke);
        var Te = vjs_find(ke, ".cplay"),
          Ee = vjs_find(ke, ".cmute"),
          Ie = vjs_find(ke, ".cfull");
        Te.onclick = function () {
          if (e.paused()) e.play();
          else e.pause();
        };
        Ee.onclick = function () {
          if (e.muted()) e.muted(!1);
          else e.muted(!0);
        };
        Ie.onclick = function () {
          if (e.isFullscreen()) e.exitFullscreen();
          else e.requestFullscreen();
        };
        function Le() {
          t.addClass(ke, "vjs-hidden");
          window.removeEventListener("scroll", Le);
          window.removeEventListener("mouseup", Le);
        }
        s.addEventListener("contextmenu", function (i) {
          i.preventDefault();
          if (e.paused()) Te.innerHTML = "Play";
          else Te.innerHTML = "Pause";
          if (e.muted()) Ee.innerHTML = "Unmute";
          else Ee.innerHTML = "Mute";
          if (e.isFullscreen()) Ie.innerHTML = "Exit Fullscreen";
          else Ie.innerHTML = "Fullscreen";
          t.removeClass(ke, "vjs-hidden");
          var n = ke.offsetWidth,
            a = ke.offsetHeight,
            o = null,
            l = null;
          if (i.clientY) o = i.clientY;
          if (i.clientX) l = i.clientX;
          if (null !== o && null !== l) {
            var r = s.getBoundingClientRect(),
              d = o - r.top,
              v = l - r.left;
            if (d + a > s.offsetHeight) d = s.offsetTop + s.offsetHeight - a;
            if (v + n > s.offsetWidth) v = s.offsetWidth - n;
            ke.style.top = d + "px";
            ke.style.left = v + "px";
            window.addEventListener("scroll", Le);
            window.addEventListener("mouseup", Le);
            if (window.parent)
              try {
                window.parent.addEventListener("scroll", Le);
                window.parent.addEventListener("mouseup", Le);
              } catch (i) {
                lint(i);
              }
            e.on("dispose", function () {
              window.removeEventListener("scroll", Le);
              window.removeEventListener("mouseup", Le);
              if (window.parent)
                try {
                  window.parent.removeEventListener("scroll", Le);
                  window.parent.removeEventListener("mouseup", Le);
                } catch (e) {
                  lint(e);
                }
            });
          }
        });
      }
      if (n.logo) {
        var Me = vjs_El("img");
        Me.src = n.logo;
        var He = vjs_El("div", "vjs-logo");
        if (n.logomin) He.className = "vjs-logo vjs-logo-min";
        s.appendChild(He);
        Me.onload = function () {
          if (this.width + this.height !== 0) {
            var e = n.logooffsetX,
              i = n.logooffsetY;
            if ("RT" === n.logoposition) {
              He.style.right = e + "px";
              He.style.top = i + "px";
            } else if ("LB" === n.logoposition) {
              He.style.left = e + "px";
              He.className += " vjs-logo-bottom";
            } else {
              He.style.left = e + "px";
              He.style.top = i + "px";
            }
            if ("" !== n.logourl) {
              var t = vjs_El("a");
              t.href = n.logourl;
              t.target = n.target;
              if (n.logotitle) t.title = n.logotitle;
              t.appendChild(Me);
              He.appendChild(t);
            } else He.appendChild(Me);
          } else s.removeChild(He);
        };
        Me.onerror = function () {
          s.removeChild(He);
        };
      }
      if ("treso" === n.skin) {
        var Se = vjs_find(s, ".vjs-current-time"),
          Be = vjs_find(s, ".vjs-duration");
        D.removeChild(Se);
        var Ne = vjs_find(s, ".vjs-progress-control");
        Ne.insertBefore(Se, Ne.childNodes[0]);
        D.removeChild(Be);
        Ne.appendChild(Be);
      }
      e.resetNuevo = function () {
        var i,
          a,
          o = [],
          l = [];
        Je();
        si();
        if (e.options_.sources.length > 0) l = o = e.options_.sources;
        try {
          vjs_find(S, ".vjs-menu .vjs-menu-content").innerHTML = "";
          t.addClass(S, "vjs-hidden");
        } catch (e) {
          lint(e);
        }
        if (!0 !== n.keepSource)
          for (var r = I; r.firstChild; ) r.removeChild(r.firstChild);
        if (!(o.length < 2)) {
          if (o.length > 1) {
            var d = 0,
              v = 0,
              f = [],
              c = [],
              u = [],
              h = "",
              p = 0,
              j = 0,
              m = 0,
              g = 0,
              y = 0,
              b = !1;
            for (d = 0; d < o.length; d++) if (o[d].res || o[d].label) v++;
            if (o.length >= 1) {
              n.dash = !1;
              n.hls = !1;
              var _ = "MediaSource" in window,
                w = !1;
              if (browser.IS_IPHONE || browser.IS_IPOD || browser.IS_IPAD)
                w = !0;
              for (p = 0; p < l.length; p++) {
                var k = "";
                try {
                  k = l[p].type;
                } catch (e) {
                  lint(e);
                }
                if (void 0 !== k) {
                  if (
                    -1 !== k.indexOf("x-mpegURL") ||
                    -1 !== k.indexOf("apple")
                  ) {
                    f[j] = l[p];
                    j++;
                  }
                  if (-1 !== k.indexOf("dash")) {
                    c[m] = l[p];
                    m++;
                  }
                }
                if (l[p].res && l[p].label) {
                  if (!0 !== b) {
                    b = !0;
                    a = {
                      res: l[p].res,
                      type: l[p].type,
                      src: l[p].src,
                      label: l[p].label,
                    };
                  }
                  var x = l[p].type;
                  if (void 0 === x) x = "";
                  if (
                    -1 !== x.indexOf("mpeg") ||
                    -1 !== x.indexOf("apple") ||
                    -1 !== x.indexOf("dash")
                  );
                  else {
                    u[g] = l[p];
                    g++;
                  }
                }
              }
            }
            var T = [];
            if (f.length > 0 && (_ || w)) return;
            if (c.length > 0 && _) return;
            if (v < 2) return;
            T = (T = u).sort(ai);
            var E = "",
              L = " vjs-checked";
            E = ' class="vjs-menu-item item-quality"';
            L = ' class="vjs-menu-item item-quality vjs-checked"';
            for (p = 0; p < T.length; p++) {
              var M = T[p].res,
                H = parseInt(M, 10),
                N = "";
              if (n.hdicon && H > n.minhd - 1) {
                var q = "HD";
                if (H > 1079 && n.minhd < 1080) q = "FullHD";
                if (H > 2159) q = "4K";
                N = '<i class="vjs-hd-icon">' + q + "</i>";
              }
              if (T[p].default) {
                i = T[p];
                h +=
                  "<li" +
                  L +
                  ' data-height="' +
                  p +
                  '">' +
                  T[p].label +
                  N +
                  "</li>";
              } else
                h +=
                  "<li" +
                  E +
                  ' data-height="' +
                  p +
                  '">' +
                  T[p].label +
                  N +
                  "</li>";
              y++;
            }
            if (y > 1) {
              C = y;
              if (n.qualityMenu) {
                yi();
                var z = vjs_find(s, ".vjs-menu-quality .vjs-menu-content");
                z.innerHTML = z.innerHTML + h;
                t.removeClass(vjs_find(s, ".vjs-extend-quality"), "vjs-hidden");
                t.removeClass(B, "vjs-hidden");
              } else {
                vjs_find(S, ".vjs-menu .vjs-menu-content").innerHTML = h;
                t.removeClass(S, "vjs-hidden");
              }
              var A = vjs_mfind(s, ".item-quality");
              si();
              for (p = 0; p < A.length; p++) {
                var P = A[p],
                  D = function (i) {
                    i.preventDefault();
                    for (var s, n = 0; n < A.length; n++) {
                      t.removeClass(A[n], "vjs-checked");
                      if (A[n] === i.target) s = n;
                    }
                    t.addClass(A[s], "vjs-checked");
                    var a = i.target.getAttribute("data-height");
                    ni(T[a].res, T[a].label);
                    var o = e.video_id();
                    e.trigger("resolutionchange", { id: o, res: T[a].res });
                    var l = T[a];
                    ri();
                    W(l);
                  };
                P.onclick = function (e) {
                  e.stopImmediatePropagation();
                  D(e);
                };
                Re(P);
                P.addEventListener(
                  "tap",
                  function (e) {
                    D(e);
                  },
                  !1
                );
              }
              ii();
              if (void 0 !== i || void 0 !== a)
                if (void 0 !== i && i !== a) {
                  ni(i.res, i.label);
                  e.src(i);
                  e.load();
                } else if (void 0 !== a) {
                  ni(a.res, a.label);
                  e.src(a);
                  e.load();
                }
              function W(i) {
                var t = e.currentTime(),
                  s = e.paused();
                e.src(i);
                e.load();
                R(t, s);
              }
              function R(i, t) {
                if (i > 0) e.currentTime(i);
                if (t) e.pause();
                else e.play();
                if (1 !== n.rate) e.setRate(n.rate);
              }
            }
          }
        } else e.src(l);
      };
      e.on("loadeddata", function () {
        if (t.hasClass(s, "vjs-ad-playing") || t.hasClass(s, "vjs-dai"))
          return !1;
        if (!T) {
          if (
            n.startTime ||
            e.options_.startTime ||
            e.$(".vjs-tech").getAttribute("startTime")
          ) {
            var i = e.$(".vjs-tech").getAttribute("startTime") || 0;
            if (n.startTime) i = n.startTime;
            if (e.options_.startTime) i = e.options_.startTime;
            n.startTime = i;
            if (i > 5 && i < e.duration() - 5) {
              P.style.opacity = 0;
              e.currentTime(i);
            }
          } else di();
          ci();
          if (e.isAudio()) {
            t.addClass(s, "vjs-audio");
            n.is_audio = !0;
          }
          e.trigger("medialoaded");
          var a = [
              vjs_find(s, ".vjs-play-control"),
              vjs_find(s, ".vjs-fullscreen-control"),
              vjs_find(s, ".vjs-mute-control"),
            ],
            o = 0;
          for (o = 0; o < a.length; o++)
            a[o].onmouseover = function (e) {
              e.target.removeAttribute("title");
            };
          if (!0 !== n.tooltips) {
            var l = vjs_mfind(s, ".vjs-control-text");
            for (o = 0; o < l.length; o++) t.addClass(l[o], "vjs-hidden");
          }
          var r = vjs_mfind(s, ".vjs-menu-button-popup");
          for (o = 0; o < r.length; o++) {
            r[o].onclick = function (e) {
              d(e);
            };
            r[o].ontouchstart = function (e) {
              d(e);
            };
            r[o].onmousemove = function (e) {
              var i =
                vjs_find(e.target, ".vjs-menu") ||
                vjs_find(e.target.parentNode, ".vjs-menu");
              if (i)
                if (t.hasClass(i, "vjs-lock-showing"));
                else {
                  var s =
                    e.target.querySelector(".vjs-control-text") ||
                    e.target.parentNode.querySelector(".vjs-control-text");
                  if (s) s.removeAttribute("style");
                }
            };
            function d(e) {
              for (
                var i = s.querySelectorAll(".vjs-control-text"), a = 0;
                a < i.length;
                a++
              )
                i[a].removeAttribute("style");
              var o = vjs_find(e.target, ".vjs-control-text");
              if ("true" === e.target.getAttribute("aria-expanded"))
                o.style.opacity = "0";
              else o.removeAttribute("style");
              var l =
                vjs_find(e.target, ".vjs-menu") ||
                vjs_find(e.target.parentNode, ".vjs-menu");
              if (!t.hasClass(l, "vjs-lock-showing")) Ke(e.target);
              var r =
                  vjs_find(e.target, ".vjs-menu-content") ||
                  vjs_find(e.target.parentNode, ".vjs-menu-content"),
                d = 0,
                v = 5;
              if ("shaka" === n.skin) d = 10;
              if ("treso" === n.skin) d = 10;
              if ("roundal" === n.skin || "mockup" === n.skin) d = 5;
              var f = s.offsetHeight - D.offsetHeight - 10,
                c = vjs_find(D, ".vjs-fullscreen-control");
              if (s.offsetWidth < 480) {
                if ("nuevo" === n.skin) v = 0;
                if ("party" === n.skin) v = -5;
                if ("pinko" === n.skin) v = -10;
                f = f + c.offsetHeight - v;
              } else f -= d;
              r.style.maxHeight = f + "px";
            }
          }
          pi();
          C = 0;
          e.qualityIndex = -1;
          e.off("mediachange");
          e.qualities = [];
          e.one("playing", c);
          e.one("levelsLoaded", c);
          e.on("dashlevelChange", function () {
            e.trigger("mediachange");
          });
        } else T = !1;
        function v() {
          if (e.tech_.vhs) {
            e.qualities = [];
            var i = e.tech_.vhs,
              t = i.representations();
            if (t.length > 0) {
              for (o = 0; o < t.length; o++) {
                var s = t[o],
                  n = "vjs_" + o,
                  a = {
                    id: n,
                    index: n,
                    label: n,
                    width: s.width,
                    height: s.height,
                    bandwidth: s.bandwidth,
                    bitrate: s.bandwidth,
                    enabled: !1,
                  };
                a.enabled = f.bind(this, o);
                e.qualities.push(a);
              }
              e.on("mediachange", function () {
                if (e.tech_.vhs) {
                  var s = (i = e.tech_.vhs).playlists.media();
                  if (s) {
                    for (
                      var n = s.attributes.BANDWIDTH,
                        a = s.attributes.HEIGHT,
                        o = 0;
                      o < t.length && n !== t[o].bandwidth && a !== t[o].height;
                      o++
                    );
                    e.qualityIndex = o;
                    e.trigger("qualityChange");
                  }
                }
              });
            }
          }
        }
        function f(i, t) {
          if (e.qualities) {
            var s = e.tech_.vhs.representations();
            if ("boolean" === typeof t) {
              e.qualities[i].enabled = t;
              s[i].enabled(t);
            }
            return e.qualities[i].enabled;
          }
          return !1;
        }
        function c() {
          v();
          if (e.qualities.length > 0) {
            yi();
            C = e.qualities.length;
            li(e.qualities);
            e.trigger("mediachange");
          }
        }
      });
      if (n.timetooltip) {
        var qe = vjs_find(s, ".vjs-play-progress"),
          ze = vjs_find(qe, ".vjs-time-tooltip");
        if (ze) ze.className = "vjs-time-tooltip";
      }
      if (n.mousedisplay) {
        var Ae = vjs_find(s, ".vjs-mouse-display");
        if (Ae) Ae.className = "vjs-mouse-display";
      }
      var Pe = vjs_find(s, ".vjs-info");
      if (Pe) s.removeChild(Pe);
      var De = vjs_find(s, ".vjs-audio-info");
      if (De) s.removeChild(De);
      e.audioInfo = function () {
        if (n.audioInfo && (n.audioInfo.artist || n.audioInfo.title))
          return n.audioInfo;
        else return !1;
      };
      vi();
      fi();
      if (e.options_.sources.length > 0) {
        e.resetNuevo(!1);
        ci();
        pi();
      }
      e.on("ratechange", function () {
        for (
          var i = e.playbackRate(), n = s.querySelectorAll(".vjs-speed"), a = 0;
          a < n.length;
          a++
        ) {
          var o = Number(n[a].innerHTML.replace("x", ""));
          t.removeClass(n[a], "vjs-checked");
          if (i === o) {
            t.addClass(n[a], "vjs-checked");
            break;
          }
        }
        if ("1" === i) i = e.localize("Normal");
        vjs_find(s, ".vjs-extend-speed span").innerHTML = i + "x";
      });
      e.setRate = function (i) {
        if (parseFloat(i) > 0) {
          e.trigger("ratechanged", { oldRate: e.playbackRate(), newRate: i });
          e.playbackRate(i);
          n.rate = i;
        }
      };
      e.setSource = function (i) {
        e.changeSource(i);
      };
      e.changeSource = function (i) {
        if (!t.hasClass(s, "vjs-ad-playing") && !t.hasClass(s, "vjs-dai"))
          if (!e.adPlaying)
            if (i) {
              if ("string" === typeof i) i = { sources: [{ src: i }] };
              if (i.src) i = { sources: [i] };
              if (i.sources) {
                var n = 1;
                if (e.paused()) n = 2;
                e.changeSrc(i);
                if (2 === n) e.pause();
                else {
                  e.load();
                  e.one("canplay", function () {
                    e.play();
                  });
                }
              }
            }
      };
      e.changeSrc = function (i) {
        if (!t.hasClass(s, "vjs-ad-playing") && !t.hasClass(s, "vjs-dai")) {
          n.title = "";
          n.infoTitle = null;
          n.infoDescription = null;
          n.description = "";
          n.metatitle = "";
          n.metasubtitle = "";
          for (var a = e.remoteTextTracks(), o = a.length || 0; o--; )
            e.removeRemoteTextTrack(a[o]);
          var l = e.videoTracks();
          for (o = l.length - 1; o >= 0; o--) e.videoTracks().removeTrack(l[o]);
          var r = e.audioTracks();
          for (o = r.length - 1; o >= 0; o--) e.videoTracks().removeTrack(r[o]);
          if (i) {
            if ("string" === typeof i) i = { sources: [{ src: i }] };
            if (i.src) i = { sources: [i] };
            if (i.sources) {
              n.rate = 1;
              e.setRate(1);
              n.video_id = void 0;
              if (void 0 !== i.video_id) n.video_id = i.video_id;
              if (void 0 !== i.audioInfo) n.audioInfo = i.audioInfo;
              else n.audioInfo = null;
              if (void 0 !== i.slideImage) n.slideImage = i.slideImage;
              else n.slideImage = "";
              if (void 0 !== i.slideWidth) n.slideWidth = i.slideWidth;
              if (void 0 !== i.slideHeight) n.slideHeight = i.slideHeight;
              if (void 0 !== i.thumbnails) n.thumbnails = i.thumbnails;
              else n.thumbnails = null;
              if (void 0 !== i.title) n.metatitle = n.title = i.title;
              if (void 0 !== i.description)
                n.description = i.infoDescription = i.description;
              if (void 0 !== i.embed) n.embed = i.embed;
              if (void 0 !== i.metatitle) n.metatitle = i.metatitle;
              if (void 0 !== i.infoTitle) n.infoTitle = i.infoTitle;
              if (void 0 !== i.infoDescription)
                n.infoDescription = i.infoDescription;
              if (void 0 !== i.infoUrl) n.infoUrl = i.infoUrl;
              if (void 0 !== i.infoIcon) n.infoIcon = i.infoIcon;
              if (void 0 !== i.subtitle) n.metasubtitle = i.subtitle;
              if (void 0 !== i.metasubtitle) n.metasubtitle = i.metasubtitle;
              if (void 0 !== i.url) n.url = i.url;
              for (o = 0; o < i.sources.length; o++) {
                if (!i.sources[o].metatitle && !i.sources[o].title)
                  i.sources[o].metatitle = n.metatitle;
                if (!i.sources[o].metatitle && i.sources[o].title)
                  i.sources[o].metatitle = i.sources[o].title;
                if (!i.sources[o].metasubtitle && !i.sources[o].subtitle)
                  i.sources[o].metasubtitle = n.metasubtitle;
                if (!i.sources[o].metasubtitle && i.sources[o].subtitle)
                  i.sources[o].metasubtitle = i.sources[o].subtitle;
              }
              e.options_.sources = i.sources;
              e.captions = null;
              if (void 0 !== i.tracks) {
                a = i.tracks;
                for (o = 0; o < a.length; o++)
                  if (void 0 !== a[o].src && "captions" === a[o].kind) {
                    if (a[o].default) a[o].mode = "showing";
                    a[o].language = a[o].srclang;
                  }
                if (a.length > 0) e.captions = a;
              }
              e.src(i.sources);
              setTimeout(function () {
                var s = W;
                if (void 0 !== i.poster) e.poster(i.poster);
                t.removeClass(s, "vjs-hidden");
                n.firstplay = !0;
              }, 200);
              e.trigger("newSource");
              e.resetNuevo(!0, i);
              fi();
              vi();
              setTimeout(function () {
                if (void 0 !== i.track) {
                  i.tracks = [];
                  i.tracks.push(i.track);
                }
                if (void 0 !== i.tracks)
                  for (var t = i.tracks, s = 0; s < t.length; s++)
                    if (void 0 !== t[s].src) {
                      if (t[s].default && "captions" === t[s].kind) {
                        t[s].mode = "showing";
                        e.currentTrack = t[s].src;
                      }
                      e.addRemoteTextTrack(t[s], !0).addEventListener(
                        "load",
                        function () {
                          if ("chapters" === this.kind) pi();
                          if ("metadata" === this.kind) {
                            var i = e.textTracks().length;
                            e.textTracks()[i - 1].src = this.src;
                            ui();
                          }
                        }
                      );
                    }
              }, 200);
            }
          }
        }
      };
      e.loadTracks = function (i) {
        for (var t, s = e.textTracks(), n = s.length || 0; n--; )
          e.removeRemoteTextTrack(s[n]);
        var a = [];
        if (!Array.isArray(i)) (t = [])[0] = i;
        else t = i;
        var o = !1,
          l = !1,
          r = e.textTracks();
        for (n = 0; n < t.length; n++) {
          var d = t[n];
          if ("chapters" === d.kind)
            for (let i = 0; i < r.length; i++)
              if ("chapters" === r[i].kind) {
                e.remoteTextTracks().removeTrack(r[i]);
                break;
              }
          if (d.kind && d.src) {
            a[n] = e.addRemoteTextTrack(d, !1);
            a[n].addEventListener("load", function () {
              if ("chapters" === this.kind && !0 !== o) {
                o = !0;
                pi();
              }
              if ("metadata" === this.kind && !0 !== l) {
                l = !0;
                var i = e.textTracks().length;
                e.textTracks()[i - 1].src = this.src;
                ui();
              }
            });
          }
        }
      };
      e.newPlaylist = function (i) {
        for (
          var t = s.className,
            a = vjs_find(s, ".vjs-vlist"),
            o = vjs_mfind(a, ".vjs-item"),
            l = 0;
          l < o.length;
          l++
        ) {
          o[l].onclick = null;
          o[l].ontouchstart = null;
          o[l].ontouchmove = null;
          o[l].ontouchend = null;
          a.removeChild(o[l]);
        }
        a.innerHTML = "";
        for (he = 0; he < i.length; he++) {
          var r = ji(i[he], he);
          a.appendChild(r);
        }
        if ("undefined" === n.playlistID) {
          var d = vjs_El("div", "vjs-last");
          a.appendChild(d);
        }
        e.playlist.currentItem(0);
        e.pause();
        e.changeSrc(i[0]);
        if (t.indexOf("vjs-has-started") > -1)
          e.one("canplay", function () {
            e.play();
          });
      };
      e.removeFromPlaylist = function (e) {
        if (n.playlist && n.playlistUI) {
          var i = vjs_find(s, ".vjs-vlist"),
            t = i.childNodes[e];
          i.removeChild(t);
          for (var a = 0; a < i.childNodes.length; a++)
            i.childNodes[a].setAttribute("data-id", a);
        }
      };
      e.addToPlaylist = function (e, i, t) {
        if (n.playlist && n.playlistUI) {
          var a,
            o = vjs_find(s, ".vjs-vlist"),
            l = o.childNodes.length;
          if ("number" === typeof t && "string" === typeof i) {
            if ("after" === i) {
              a = ji(e, t + 1);
              o.insertBefore(a, o.childNodes[t].nextSibling);
            } else if ("before" === i) {
              a = ji(e, t);
              o.insertBefore(a, o.childNodes[t]);
            }
            for (var r = 0; r < o.childNodes.length; r++)
              o.childNodes[r].setAttribute("data-id", r);
          } else {
            if (l > 0) a = ji(e, l - 1);
            else a = ji(e, 0);
            if (l > 1) o.insertBefore(a, o.childNodes[l - 2].nextSibling);
            else o.appendChild(a);
          }
        }
      };
      e.on("playlistready", function () {
        if (n.playlistRepeat) e.playlist.repeat(!0);
        mi();
      });
      e.ready(function () {
        E = !1;
        var i = vjs_find(A, ".vjs-play-progress");
        function a(n) {
          var a = A.getBoundingClientRect(),
            l = null;
          if ("touchstart" === n.type) {
            l = d(n);
            window.document.addEventListener("touchmove", o, !1);
            window.document.addEventListener("touchend", r, !1);
            if (window.parent)
              try {
                window.parent.document.addEventListener("touchend", r, !1);
              } catch (n) {
                lint(n);
              }
            t.addClass(s, "vjs-scrubbing");
          } else if ("mousedown" === n.type) {
            l = n.pageX;
            window.document.addEventListener("mousemove", o, !1);
            window.document.addEventListener("mouseup", r, !1);
            if (window.parent)
              try {
                window.parent.document.addEventListener("mouseup", r, !1);
              } catch (n) {
                lint(n);
              }
          }
          var v = (l - a.left) / A.offsetWidth;
          i.style.width = (100 * v).toFixed(2) + "%";
          videojs.holderdown = !0;
          e.trigger("progressdown");
        }
        function o(e) {
          var n = A.getBoundingClientRect();
          t.addClass(s, "vjs-scrubbing");
          var a = null;
          if ("touchmove" === e.type) a = d(e);
          else if ("mousemove" === e.type) a = e.pageX;
          var o = (a - n.left) / A.offsetWidth;
          if (o < 0) o = 0;
          if (o > 1) o = 1;
          i.style.width = (100 * o).toFixed(2) + "%";
        }
        function r(i) {
          i.preventDefault();
          i.stopPropagation();
          videojs.holderdown = !1;
          t.removeClass(s, "vjs-scrubbing");
          window.document.removeEventListener("mousemove", o);
          window.document.removeEventListener("mouseup", r);
          window.document.removeEventListener("touchmove", o);
          window.document.removeEventListener("touchend", r);
          if (window.parent)
            try {
              window.parent.document.removeEventListener("touchend", r);
              window.parent.document.removeEventListener("mouseup", r);
            } catch (i) {
              lint(i);
            }
          e.trigger("progressup");
        }
        A.addEventListener("mousedown", a, !1);
        A.addEventListener("touchstart", a, l ? { passive: !1 } : !1);
        e.on("timeupdate", function () {
          if (t.hasClass(s, "vjs-ad-playing") || t.hasClass(s, "vjs-dai"))
            return !1;
          var i = e.video_id(),
            a = e.currentTime(),
            o = e.duration();
          if (0 !== o && o !== 1 / 0)
            if (null !== i)
              if (n.resume && void 0 !== i) {
                a = parseFloat(a);
                var l = String("vjs_resume-" + i);
                if (a > 5 && a < o - 20) {
                  localStorage.removeItem(l);
                  wi(l, a);
                }
                if (a > o - 10)
                  try {
                    localStorage.removeItem(l);
                  } catch (e) {
                    lint(e);
                  }
              }
        });
        e.on("volumechange", function () {
          if (e.volume() > 0) wi("volume", e.volume());
        });
        e.on("seeked", function () {
          if (t.hasClass(s, "vjs-ad-playing") || t.hasClass(s, "vjs-dai"))
            return !1;
        });
        e.on("ended", function () {
          if (
            !(
              t.hasClass(s, "vjs-ad-playing") ||
              t.hasClass(s, "vjs-dai") ||
              t.hasClass(s, "vjs-up-next")
            )
          ) {
            var i = !0;
            if (n.playlist) {
              i = !1;
              if (
                e.playlist.currentIndex() === e.playlist.lastIndex() &&
                !0 !== e.playlist.repeat
              )
                i = !0;
            }
            if (i) {
              var a = e.video_id();
              if (n.resume && null != a)
                try {
                  localStorage.removeItem(String("vjs_resume-" + a));
                } catch (e) {
                  lint(e);
                }
              if ("" !== n.endAction) {
                if (n.settingsButton && "share" === n.endAction && n.shareMenu)
                  e.share();
                else if (
                  n.settingsButton &&
                  "related" === n.endAction &&
                  n.relatedMenu &&
                  M
                )
                  e.related();
              } else t.removeClass($.el_, "vjs-hidden");
            }
          }
        });
        e.on("playing", function () {
          if (t.hasClass(s, "vjs-ad-playing") || t.hasClass(s, "vjs-dai"))
            return !1;
          if (M) Xe(M, !1);
          if (L) Xe(L, !1);
          t.removeClass(P, "vjs-hidden");
          t.removeClass(P, "vjs-abs-hidden");
          if (
            (e.remoteTextTracks ? e.remoteTextTracks() : []).length < 1 &&
            browser.IS_IOS
          )
            t.addClass(vjs_find(s, ".vjs-subs-caps-button"), "vjs-hidden");
        });
        e.on("userinactive", function () {
          if (!0 !== e.paused()) Ke("", !0);
        });
        e.reconnect = function () {
          var i = e.currentSource();
          e.poster("");
          e.src(i);
          e.play();
        };
        e.on("canplay", function () {
          if (!0 !== x) {
            if (e.$(".vjs-tech").autoplay) {
              var i = e.play();
              if (void 0 !== i)
                i.then(function () {}).catch(function () {
                  e.muted(!0);
                  e.play();
                  var i = vjs_El("button", "vjs-auto-mute");
                  i.type = "button";
                  i.title = "Unmute";
                  i.setAttribute("aria-disabled", "false");
                  s.appendChild(i);
                  i.onclick = i.ontouchend = function (t) {
                    t.preventDefault();
                    e.muted(!1);
                    s.removeChild(i);
                  };
                  e.on("volumechange", function () {
                    if (!0 !== e.muted()) s.removeChild(i);
                  });
                });
            }
          }
        });
        e.on("play", function () {
          var i = vjs_find(s, ".vjs-picture-in-picture-control");
          if (!0 !== n.pipButton && i) i.parentNode.removeChild(i);
          if (t.hasClass(s, "vjs-ad-playing") || t.hasClass(s, "vjs-dai"))
            return !1;
          var a = t.hasClass(s, "vjs-live");
          if (e.paused() && a && n.liveReconnect) e.reconnect();
          if (n.singlePlay) {
            var o = vjs_mfind(document, "video");
            if (o.length > 1)
              for (var r = 0; r < o.length; r++) {
                var d = e.$(".vjs-tech");
                if (o[r] !== d) o[r].pause();
              }
          }
          e.userActive(!1);
          gi();
          P.style.opacity = 1;
          if (!x) {
            $e();
            x = !0;
            var v = vjs_find(s, ".vjs-info");
            if (v) {
              t.removeClass(v, "vjs-info-bottom");
              t.addClass(v, "vjs-info-top");
            }
            if (!0 !== e.isAudio()) t.addClass(W, "vjs-no-pointer");
            if (n.limit && (n.limiturl || "" !== n.url)) {
              var f = !1;
              if (n.startTime)
                if (Number(n.startTime) > 0 && Number(n.limit) > 0)
                  n.limit = Number(n.startTime) + Number(n.limit);
              e.on("timeupdate", function () {
                var i = e.currentTime();
                if (i < n.limitstart) e.currentTime(n.limitstart);
                if (i > n.limit) {
                  e.pause();
                  if (!0 !== f) {
                    if (!n.limiturl) n.limiturl = n.url;
                    f = !0;
                    var t = vjs_El("div", "vjs-limit-overlay"),
                      a = vjs_El("a", "vjs-limit");
                    a.href = n.limiturl;
                    a.target = n.target;
                    a.style.textDecoration = "none";
                    t.appendChild(a);
                    if (n.limitimage) {
                      var o = vjs_El("img");
                      o.src = n.limitimage;
                      o.onload = function () {
                        a.innerHTML = '<img src="' + n.limitimage + '" />';
                      };
                    } else l();
                    function l() {
                      var e = vjs_El("span");
                      e.innerHTML =
                        n.limitmessage + "<span>" + n.limiturl + "</span>";
                      a.appendChild(e);
                    }
                    s.appendChild(t);
                  }
                }
              });
            }
            if (localStorage && localStorage.volume && !0 !== e.muted())
              if (localStorage.volume > 0) e.volume(localStorage.volume);
            var c = !1;
            if (
              n.settingsButton &&
              (n.relatedMenu ||
                n.shareMenu ||
                n.rateMenu ||
                n.zoomMenu ||
                n.filtersMenu)
            ) {
              c = !0;
              n.menus = !0;
            } else {
              n.menus = !1;
              t.addClass(vjs_find(s, ".vjs-cog-menu-button"), "vjs-abs-hidden");
            }
            if (c) {
              var h = "",
                p = !1,
                j = !1;
              if (n.shareMenu)
                h +=
                  '<li class="vjs-settings-item vjs-share-button">' +
                  e.localize("Share") +
                  '<span class="vjs-share-icon"></span></li>';
              if (n.relatedMenu && n.related.length > 1)
                h +=
                  '<li class="vjs-settings-item vjs-related-button">' +
                  e.localize("Related") +
                  '<span class="vjs-related-icon"></span></li>';
              if (n.zoomMenu) {
                h =
                  h +
                  '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' +
                  e.localize("Zoom") +
                  '<span class="zoom-label">100%</span></li>';
                j = vjs_El(
                  "div",
                  "vjs-submenu vjs-zoom-menu vjs-hidden",
                  '<div class="vjs-settings-back vjs-zoom-return"><span>' +
                    e.localize("Zoom") +
                    '</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">' +
                    e.localize("Reset") +
                    "</div>"
                );
              }
              if (n.rateMenu) {
                h =
                  h +
                  '<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' +
                  e.localize("Speed") +
                  "<span>" +
                  e.localize("Normal") +
                  "</span></li>";
                p = vjs_El("div", "vjs-submenu vjs-menu-speed vjs-hidden");
                var m =
                    '<ul class="vjs-menu-content"><li class="vjs-settings-back">' +
                    e.localize("Speed") +
                    "</li>",
                  g = [0.25, 0.5, 1, 1.25, 1.5, 2];
                try {
                  if (e.playbackRates().length > 0) g = e.playbackRates();
                } catch (e) {
                  lint(e);
                }
                e.playbackRates(g);
                for (var _ = 0; _ < g.length; _++) {
                  var C = "vjs-speed";
                  if (1 === g[_]) C = "vjs-speed vjs-checked";
                  m += '<li class="vjs-menu-item ' + C + '">' + g[_] + "x</li>";
                }
                p = vjs_El(
                  "div",
                  "vjs-submenu vjs-menu-speed vjs-hidden",
                  (m += "</ul>")
                );
              }
              var k = vjs_find(s, ".vjs-settings-list");
              if ("" !== h) {
                k.innerHTML = h + k.innerHTML;
                var T = vjs_find(s, ".vjs-settings-div");
                if (p) T.appendChild(p);
                if (j) T.appendChild(j);
                t.removeClass(N, "vjs-hidden");
                ii();
                si();
                var E = function (i) {
                  i.stopImmediatePropagation();
                  var t = i.target.innerHTML;
                  t = t.replace("x", "");
                  e.setRate(t);
                  Ke("");
                };
                setTimeout(function () {
                  var e = vjs_mfind(s, ".vjs-speed");
                  for (_ = 0; _ < e.length; _++) {
                    e[_].onclick = function (e) {
                      E(e);
                    };
                    Re(e[_]);
                    e[_].addEventListener(
                      "tap",
                      function (e) {
                        E(e);
                      },
                      !1
                    );
                  }
                }, 200);
              }
              if (n.related.length > 1 && n.relatedMenu) {
                var H = n.related.length,
                  S = '<div class="vjs-close-btn"></div>';
                S +=
                  '<div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>';
                (M = vjs_El("div")).innerHTML = S;
                M.className = "vjs-grid vjs-hidden";
                M.setAttribute("aria-label", "Related dialog");
                M.setAttribute("aria-hidden", "true");
                var B = vjs_El("p");
                B.innerHTML = e.localize("Related");
                var q = vjs_El("div", "vjs-related");
                q.className = "vjs-related vjs-scroll";
                var z = s.offsetWidth,
                  A = 0.8 * z;
                if (!0 !== u()) A = 0.9 * z;
                M.appendChild(B);
                M.appendChild(q);
                s.appendChild(M);
                var D = vjs_find(M, ".vjs-arrow-prev"),
                  R = vjs_find(M, ".vjs-arrow-next"),
                  O = parseInt(vjs_find(s, ".vjs-prev").offsetWidth, 10) + 5;
                if (D) D.style.left = parseInt(q.style.left, 10) - O + "px";
                if (R) R.style.left = A + parseInt(q.style.left, 10) + "px";
                var F = vjs_El("div", "rel-block rel-anim");
                q.appendChild(F);
                var U = n.related;
                y = 1;
                for (_ = 0; _ < H; _++) {
                  var X = vjs_El("div", "rel-parent"),
                    Y = vjs_El("div", "rel-item");
                  X.appendChild(Y);
                  F.appendChild(X);
                  Y.innerHTML =
                    '<a class="rel-url" target="' +
                    n.target +
                    '" href="' +
                    U[_].url +
                    '" alt="' +
                    U[_].title +
                    '"><span class="rel-bg" style="background-image:url(' +
                    U[_].thumb +
                    ');"></span><label>' +
                    U[_].title +
                    "</label><i>" +
                    U[_].duration +
                    "</i></a>";
                }
                if (H < 7 && u()) {
                  if (D) t.addClass(D, "vjs-hidden");
                  if (R) t.addClass(R, "vjs-hidden");
                }
                var K = function (e) {
                  e.stopPropagation();
                  if (!t.hasClass(R, "vjs-disabled")) {
                    var i = q.offsetWidth;
                    y++;
                    t.removeClass(R, "vjs-disabled");
                    var s = (y - 1) * i;
                    F.style.left = "-" + s + "px";
                    if (y === b) t.addClass(R, "vjs-disabled");
                    t.removeClass(D, "vjs-disabled");
                  }
                };
                if (R)
                  R.onclick = function (e) {
                    K(e);
                  };
                var $ = function (e) {
                  e.stopPropagation();
                  if (!t.hasClass(D, "vjs-disabled")) {
                    var i = q.offsetWidth,
                      n = ((y -= 1) - 1) * i;
                    vjs_find(s, ".rel-block").style.left = "-" + n + "px";
                    if (D && R) {
                      if (1 === y) t.addClass(D, "vjs-disabled");
                      t.removeClass(R, "vjs-disabled");
                    }
                  }
                };
                if (D)
                  D.onclick = function (e) {
                    $(e);
                  };
                var Q = vjs_find(s, ".vjs-related-button");
                Q.onclick = Q.ontouchstart = function () {
                  e.related();
                };
                M.onclick = function () {
                  t.addClass(M, "vjs-hidden");
                  e.play();
                };
              }
              if (n.shareMenu) {
                (L = vjs_El(
                  "div",
                  "vjs-sharing-overlay vjs-hidden"
                )).setAttribute("aria-label", "Sharing Dialog");
                L.setAttribute("aria-hidden", "true");
                var V = vjs_El("div", "vjs-sharing-container"),
                  Z = vjs_El("div", "vjs-sharing-body"),
                  G = vjs_El("div", "vjs-close-btn vjs-share-close"),
                  J =
                    '<div class="vjs-inputs-body"><h2>' +
                    e.localize("Link") +
                    '</h2><input type="text" readonly class="perma"><h2>' +
                    e.localize("Embed") +
                    '</h2><input class="embed-code" readonly type="text"></div>';
                J +=
                  '<div class="vjs-inputs-body"><h2>' +
                  e.localize("Social") +
                  "</h2></div>";
                J +=
                  '<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>';
                J +=
                  '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>';
                J +=
                  '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>';
                J +=
                  '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>';
                Z.innerHTML = J;
                V.appendChild(Z);
                L.appendChild(G);
                L.appendChild(V);
                var ee = n.url || document.location.href,
                  ie = !1;
                s.appendChild(L);
                var te = vjs_find(s, ".vjs-share-button");
                te.onclick = te.ontouchstart = function () {
                  e.share();
                };
                var se = [],
                  ne = function (e) {
                    var i = [];
                    for (var t in e)
                      i.push(
                        encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                      );
                    return i.join("&");
                  },
                  ae = function (i) {
                    i.stopPropagation();
                    se = {
                      url: ee,
                      title: n.title || n.metatitle || document.title,
                      description:
                        e.localize("Check out this cool video on") +
                        " " +
                        n.url,
                      pubid: n.pubid || null,
                    };
                    var t = "";
                    switch (i.target.id.split("_")[1]) {
                      case "facebook":
                        t = "facebook";
                        break;
                      case "twitter":
                        t = "twitter";
                        break;
                      case "pinterest":
                        t = "pinterest";
                        break;
                      case "linkedin":
                        t = "linkedin";
                        break;
                      default:
                    }
                    if ("" !== t)
                      window.open(
                        "http://api.addthis.com/oexchange/0.8/forward/" +
                          t +
                          "/offer?" +
                          ne(se),
                        "AddThis",
                        "height=450,width=550,modal=yes,alwaysRaised=yes"
                      );
                  },
                  oe = s.querySelectorAll(".vjs-share-icon");
                for (_ = 0; _ < oe.length; _++)
                  oe[_].addEventListener("click", ae, !1);
                vjs_find(L, ".embed-code").onclick = function (e) {
                  e.stopImmediatePropagation();
                  this.select();
                };
                vjs_find(L, ".perma").onclick = function (e) {
                  e.stopImmediatePropagation();
                  this.select();
                };
                L.onclick = function () {
                  t.addClass(L, "vjs-hidden");
                  if (!0 !== ie) e.play();
                };
              }
              if (n.zoomMenu) {
                var le,
                  re,
                  de,
                  ve = W,
                  fe = e.$(".vjs-tech");
                if (n.zoomInfo) {
                  var ce = vjs_El("div", "vjs-zoom-parent vjs-hidden"),
                    ue = vjs_El("div", "vjs-reset-zoom");
                  ue.innerHTML = "100%";
                  ce.appendChild(ue);
                  var he = vjs_El("div", "vjs-reset-center"),
                    pe = vjs_El("div", "vjs-reset-cancel");
                  ce.appendChild(he);
                  ce.appendChild(pe);
                  var je = vjs_El("div", "vjs-reset-info");
                  ce.appendChild(je);
                  var me = e.localize(
                      "Drag zoomed area using your mouse or a finger."
                    ),
                    ge = e.localize(
                      "Use ZOOM slider or mouse wheel to ZOOM in video."
                    ),
                    ye = e.localize("ZOOM HELP"),
                    be = vjs_El("div", "vjs-zoom-help vjs-hidden");
                  if (n.zoomWheel)
                    be.innerHTML =
                      '<div class="zoom-close">x</div><div>' +
                      ye +
                      "</div>" +
                      ge +
                      "<div>" +
                      me +
                      "</div>";
                  else
                    be.innerHTML =
                      '<div class="zoom-close">x</div><div>' +
                      ye +
                      "</div>" +
                      me +
                      "</div>";
                  ce.appendChild(je);
                  je.onclick = function (e) {
                    _e(e);
                  };
                  function _e(e) {
                    e.preventDefault();
                    if (t.hasClass(be, "vjs-hidden"))
                      t.removeClass(be, "vjs-hidden");
                  }
                  vjs_find(be, ".zoom-close").onclick = function () {
                    t.addClass(be, "vjs-hidden");
                    t.addClass(be, "vjs-hidden");
                  };
                  s.appendChild(be);
                  pe.onmouseup = function () {
                    _i();
                  };
                  he.onmouseup = function (e) {
                    bi(e);
                  };
                  s.appendChild(ce);
                }
                var Ce = vjs_find(s, ".vjs-zoom-reset");
                if (Ce) Ce.addEventListener("mouseup", _i, !1);
                if (!s.hasAttribute("tabIndex"))
                  s.setAttribute("tabIndex", "-1");
                if (n.zoomWheel) {
                  ve.style.pointerEvents = "auto";
                  ve.addEventListener(
                    "mousewheel",
                    we,
                    l ? { passive: !1 } : !1
                  );
                  ve.addEventListener(
                    "DOMMouseScroll",
                    we,
                    l ? { passive: !1 } : !1
                  );
                  function we(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var i = Math.max(
                      -1,
                      Math.min(1, e.wheelDelta || -e.detail)
                    );
                    w = (100 * w + 20 * i) / 100;
                    if (w < 1) w = 1;
                    if (w > 5) w = 5;
                    if (1 === w) {
                      _i();
                      if (n.zoomInfo) t.addClass(ce, "vjs-hidden");
                    } else {
                      if (n.zoomInfo) t.removeClass(ce, "vjs-hidden");
                      ki(I, w);
                    }
                    var a = vjs_find(s, ".vjs-zoom-menu");
                    if (!0 !== t.hasClass(a, "vjs-hidden")) {
                      var o = ((w - 1) / 4) * 100;
                      vjs_find(s, ".vjs-zoom-level").style.height = o + "%";
                    }
                    ei(100 * w);
                    return !1;
                  }
                }
                function ke(e) {
                  if (w > 1) {
                    e.preventDefault();
                    e.stopPropagation();
                    le = !0;
                    de = [I.offsetLeft - e.clientX, I.offsetTop - e.clientY];
                    ve.style.pointerEvents = "none";
                    document.addEventListener("mouseup", Te, !0);
                    document.addEventListener("mousemove", xe, !0);
                  }
                }
                function xe(e) {
                  e.preventDefault();
                  if (le) {
                    try {
                      re = { x: e.clientX, y: e.clientY };
                    } catch (e) {
                      lint(e);
                    }
                    var i = re.x + de[0],
                      t = re.y + de[1],
                      n = (s.offsetWidth / 2) * (w - 1),
                      a = (s.offsetHeight / 2) * (w - 1);
                    if (i > n) i = n;
                    if (i < -1 * n) i = -1 * n;
                    if (t > a) t = a;
                    if (t < -1 * a) t = -1 * a;
                    fe.style.left = i + "px";
                    fe.style.top = t + "px";
                  }
                }
                function Te() {
                  ve.style.pointerEvents = "auto";
                  le = !1;
                  document.removeEventListener("mouseup", Te, !0);
                  document.removeEventListener("mousemove", xe, !0);
                }
                ve.onmousedown = function (e) {
                  ke(e);
                };
                function Ee(e, i) {
                  ve.style.pointerEvents = "auto";
                  var n = vjs_find(s, ".vjs-zoom-parent"),
                    a = e.pageY,
                    o = i.offsetHeight,
                    l = a - xi(i);
                  if (l > o) l = o;
                  if (l < 0) l = 0;
                  var r = parseInt(100 - (l / o) * 100, 10);
                  if (r < 0) r = 0;
                  if (r > 100) r = 100;
                  try {
                    vjs_find(s, ".vjs-zoom-level").style.height = r + "%";
                  } catch (e) {
                    lint(e);
                  }
                  try {
                    vjs_find(s, ".zoom-thumb").style.height = r + "%";
                  } catch (e) {
                    lint(e);
                  }
                  var d = 1 + (4 * r) / 100;
                  w = d;
                  ki(I, d);
                  ei(100 * d);
                  if (d > 1) {
                    videojs.options.blockKeys = !0;
                    t.removeClass(n, "vjs-hidden");
                  } else {
                    _i();
                    videojs.options.blockKeys = !1;
                    t.addClass(n, "vjs-hidden");
                  }
                }
                var Ie = vjs_find(s, ".vjs-zoom-slider");
                Ie.onclick = function (e) {
                  e.stopImmediatePropagation();
                };
                Ie.addEventListener("mousedown", Le, !1);
                function Le(e) {
                  e.stopImmediatePropagation();
                  Ti(!0);
                  var i = Ie;
                  Ee(e, i);
                  document.addEventListener("mousemove", t, !1);
                  document.addEventListener("mouseup", s, !1);
                  function t(e) {
                    Ee(e, i);
                  }
                  function s() {
                    Ti(!1);
                    document.removeEventListener("mouseup", s);
                    document.removeEventListener("mousemove", t);
                  }
                }
              }
              e.trigger("menusReady");
            }
          }
        });
      });
      if (n.mirrorButton) {
        e.controlBar.mirrorButton = e.controlBar.addChild("button", {
          el: t.createEl(
            "button",
            {
              text: "Mirror view",
              className: "vjs-mirror-button vjs-control vjs-button",
            },
            { role: "button", "aria-live": "polite", "aria-disabled": "false" }
          ),
        });
        e.controlBar.mirrorButton.el_.innerHTML =
          '<span class="vjs-control-text" aria-live="polite">' +
          e.localize("Mirror View") +
          "</span>";
        e.controlBar.el_.insertBefore(e.controlBar.mirrorButton.el_, G.el_);
        var We = function (e) {
          e.preventDefault();
          var i = s.className,
            n = !1;
          if (i.indexOf("vjs-has-started") > 0) n = !0;
          if (i.indexOf("vjs-ended") > 0) n = !1;
          if (n) {
            var a = "rotateY(0)";
            if (t.hasClass(e.target, "vjs-mirrored"))
              t.removeClass(e.target, "vjs-mirrored");
            else {
              t.addClass(e.target, "vjs-mirrored");
              a = "rotateY(180deg)";
            }
            I.style.transform = a;
            I.style.webkitTransform = a;
            I.style.msTransform = a;
          }
        };
        e.controlBar.mirrorButton.el_.onclick =
          e.controlBar.mirrorButton.el_.ontouchstart = function (e) {
            We(e);
          };
      }
      e.textTracksStyle = function (i) {
        if (vjs_find(s, ".vjs-text-track-settings")) {
          var t = e.captionsSettings,
            n = e.textTrackSettings;
          if ("undefined" !== i) {
            var a = {};
            for (var o in t)
              if (void 0 !== i[o])
                if ("fontPercent" === o)
                  if (i[o] < 1 || i[o] > 1) a[o] = parseFloat(i[o]);
                  else {
                    var l = vjs_find(s, ".vjs-font-percent");
                    vjs_find(l, "select").options.selectedIndex = 2;
                  }
                else a[o] = String(i[o]);
          }
          n.setValues(a);
          e.captionsSettings = i;
          n.updateDisplay();
          vjs_find(s, ".vjs-text-track-display").style.zIndex = "1";
        }
      };
      e.captionsSettings = {
        backgroundOpacity: "0",
        edgeStyle: "raised",
        fontPercent: 1.25,
      };
      e.textTracksStyle(e.captionsSettings);
      e.trigger("nuevoReady");
      s.style.visibility = "visible";
      if (!0 !== videojs.nuevo) s.parentNode.removeChild(s);
    } else s.innerHTML = k.split("").reverse().join("");
    function Re(e) {
      let i,
        t = !1,
        s = null;
      e.addEventListener(
        "touchstart",
        function (e) {
          i = window.performance.now();
          t = !1;
          s = { pageX: e.touches[0].pageX, pageY: e.touches[0].pageY };
          e.target.addEventListener("touchmove", n, !1);
          e.target.addEventListener("touchend", o, !1);
          e.target.addEventListener("touchcancel", a, !1);
        },
        l ? { passive: !1 } : !1
      );
      function n(e) {
        var i = e.touches[0].pageX - s.pageX,
          n = e.touches[0].pageY - s.pageY;
        if (Math.sqrt(i * i + n * n) > 200) t = !0;
      }
      function a() {
        t = !1;
      }
      function o(l) {
        s = null;
        if (window.performance.now() - i < 200 && !0 !== t) {
          l.preventDefault();
          e.dispatchEvent(new Event("tap"));
          l.target.removeEventListener("touchmove", n);
          l.target.removeEventListener("touchend", o);
          l.target.removeEventListener("touchend", a);
        }
      }
    }
    function Oe() {
      t.removeClass(s, "vjs-touch-inactive");
      t.addClass(s, "vjs-touch-active");
      t.removeClass(s, "vjs-user-inactive");
      t.addClass(s, "vjs-user-active");
      Ue();
    }
    function Fe() {
      clearTimeout(e.touchtimer);
      t.removeClass(s, "vjs-touch-active");
      t.addClass(s, "vjs-touch-inactive");
      t.removeClass(s, "vjs-user-active");
      t.addClass(s, "vjs-user-inactive");
    }
    function Ue() {
      clearTimeout(e.touchtimer);
      e.touchtimer = setTimeout(Fe, X);
    }
    function Xe(e, i) {
      if (e)
        if (i) {
          t.removeClass(e, "vjs-hidden");
          e.setAttribute("aria-hidden", "false");
        } else {
          t.addClass(e, "vjs-hidden");
          e.setAttribute("aria-hidden", "true");
        }
    }
    function Ye(i) {
      var s = "vjs-rewind-control";
      if (i) s = "vjs-rewind-control vjs-rewind-first";
      var a = e.controlBar.addChild("button", {
        el: t.createEl(
          "button",
          { className: s + " vjs-control vjs-button" },
          {
            title: e.localize("Rewind"),
            type: "button",
            "aria-disabled": "false",
          }
        ),
      });
      a.el_.innerHTML =
        '<span class="num">' +
        n.rewindforward +
        '</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        e.localize("Rewind") +
        "</span>";
      if (i)
        if ("party" === n.skin)
          D.insertBefore(
            a.el_,
            e.controlBar.getChild("playToggle").el_.nextSibling
          );
        else D.insertBefore(a.el_, e.controlBar.getChild("playToggle").el_);
      else
        e.controlBar.el_.insertBefore(
          a.el_,
          e.controlBar.getChild("playToggle").el_.nextSibling
        );
      a.el_.onclick = a.el_.ontouchstart = function () {
        e.rewind();
      };
    }
    function Ke(i) {
      try {
        if (e.isDisposed()) return;
      } catch (e) {
        lint(e);
      }
      if (!E) {
        if (t.hasClass(i, "vjs-cast")) return !1;
        if ("" === i) i = vjs_find(s, ".vjs-play-control");
        var n = i.className;
        if ("string" === typeof n || n instanceof String) {
          if (n.indexOf("vjs-settings-item") > -1) return;
          if (n.indexOf("vjs-quality-button") < 0)
            try {
              var a = vjs_find(S, ".vjs-menu");
              if (t.hasClass(a, "vjs-lock-showing"))
                t.removeClass(a, "vjs-lock-showing");
            } catch (e) {
              lint(e);
            }
          if (n.indexOf("vjs-chapters-button") < 0)
            e.controlBar.getChild("chaptersButton").unpressButton();
          if (n.indexOf("vjs-descriptions-button") < 0)
            e.controlBar.getChild("descriptionsButton").unpressButton();
          if (n.indexOf("vjs-subs-caps-button") < 0)
            try {
              e.controlBar.getChild("subsCapsButton").unpressButton();
            } catch (e) {
              lint(e);
            }
          if (n.indexOf("vjs-audio-button") < 0)
            e.controlBar.getChild("audioTrackButton").unpressButton();
          if (n.indexOf("vjs-cog-button") < 0)
            try {
              for (
                var o = vjs_find(s, ".vjs-settings-home"),
                  l = vjs_mfind(s, ".vjs-submenu"),
                  r = 0;
                r < l.length;
                r++
              ) {
                t.addClass(l[r], "vjs-hidden");
                if (l[r] === o) t.removeClass(o, "vjs-hidden");
              }
              var d = vjs_find(s, ".vjs-menu-settings"),
                v = vjs_find(s, ".vjs-cog-button");
              t.removeClass(d, "vjs-lock-showing");
              v.setAttribute("aria-expanded", "false");
              t.removeClass(v, "vjs-cog-active");
            } catch (e) {
              lint(e);
            }
        }
      }
    }
    function $e() {
      for (
        var e = s.offsetWidth,
          i = [
            "vjs-1600",
            "vjs-1280",
            "vjs-920",
            "vjs-600",
            "vjs-640",
            "vjs-480",
            "vjs-360",
            "vjs-320",
          ],
          n = 0;
        n < i.length;
        n++
      )
        t.removeClass(s, i[n]);
      if (e < 360) {
        t.addClass(s, "vjs-480");
        t.addClass(s, "vjs-360");
        if (e < 320) t.addClass(s, "vjs-320");
      } else if (e < 480) t.addClass(s, "vjs-480");
      else if (e < 640) {
        t.addClass(s, "vjs-640");
        if (e < 600) t.addClass(s, "vjs-600");
      } else if (e < 920) t.addClass(s, "vjs-920");
      else if (e < 1080) {
        t.addClass(s, "vjs-920");
        t.addClass(s, "vjs-1080");
      } else {
        t.addClass(s, "vjs-920");
        t.addClass(s, "vjs-1600");
      }
    }
    function Qe() {
      if (s.offsetWidth !== ge || s.offsetHeight !== ye) {
        ge = s.offsetWidth !== ge;
        ye = s.offsetHeight;
        Ve();
      }
      je = setTimeout(Qe, 500);
    }
    function Ve() {
      $e();
      ti();
      si();
      Ke("");
    }
    function Ze(i) {
      e.options_.innactivityTimeout = U;
      i.stopImmediatePropagation();
      Ke(i.target);
    }
    function Ge(e) {
      if (!s.contains(e.target)) Fe();
    }
    function Je() {
      var e = 0;
      try {
        var i = vjs_mfind(s, ".item-quality");
        for (e = 0; e < i.length; e++) {
          i[e].ontouchstart = null;
          i[e].onclick = null;
        }
      } catch (e) {
        lint(e);
      }
      var n = vjs_mfind(s, ".item-quality");
      for (e = 0; e < n.length; e++) n[e].parentNode.removeChild(n[e]);
      var a = vjs_find("nv,vjs-extend-quality");
      if (a) t.addClass(a, "vjs-hidden");
      vjs_find(S, ".vjs-menu .vjs-menu-content").innerHTML = "";
      t.addClass(S, "vjs-hidden");
    }
    function ei(e) {
      try {
        vjs_find(s, ".vjs-reset-zoom").innerHTML = parseInt(e, 10) + "%";
        vjs_find(s, ".zoom-label").innerHTML = parseInt(e, 10) + "%";
      } catch (e) {
        lint(e);
      }
    }
    function ii() {
      var e = S,
        i = vjs_find(e, ".vjs-menu"),
        a = vjs_find(i, ".vjs-menu-content");
      if (C > 1) {
        var o = function (i) {
          if (t.hasClass(i.target, "vjs-cast")) return !1;
          var n = vjs_find(i.target, ".vjs-control-text");
          i.stopPropagation();
          var o = vjs_find(e, ".vjs-menu");
          if (t.hasClass(o, "vjs-lock-showing")) {
            i.target.setAttribute("aria-expanded", "false");
            t.removeClass(o, "vjs-lock-showing");
            if (n) n.removeAttribute("style");
          } else {
            Ke(i.target);
            var l = s.offsetHeight - D.offsetHeight - 10;
            a.style.maxHeight = l + "px";
            t.addClass(o, "vjs-lock-showing");
            i.target.setAttribute("aria-expanded", "true");
            n.style.opacity = "0";
          }
        };
        e.onclick = e.ontouchstart = function (e) {
          o(e);
        };
        e.onmouseover = function (e) {
          var i =
            vjs_find(e.target, ".vjs-menu") ||
            vjs_find(e.target.parent, ".vjs-menu");
          if (i)
            if (!0 !== t.hasClass(i, "vjs-lock-showing")) {
              var s = vjs_find(e.target, ".vjs-control-text");
              if (s) s.removeAttribute("style");
            }
        };
      }
      var l = vjs_find(s, ".vjs-settings-div"),
        r = vjs_find(s, ".vjs-menu-speed"),
        d = vjs_find(s, ".vjs-zoom-menu"),
        v = vjs_find(s, ".vjs-menu-quality"),
        f = vjs_find(s, ".vjs-settings-home"),
        c = function (e, i, s) {
          e.stopPropagation();
          t.addClass(f, "vjs-hidden");
          t.removeClass(i, "vjs-hidden");
          if (d) if (d !== i) t.addClass(d, "vjs-hidden");
          if (v) if (v !== i) t.addClass(v, "vjs-hidden");
          l.style.width = q[s].width + "px";
          l.style.height = q[s].height + "px";
        },
        u = function (e) {
          e.stopPropagation();
          if (d) t.addClass(d, "vjs-hidden");
          if (r) t.addClass(r, "vjs-hidden");
          if (v) t.addClass(v, "vjs-hidden");
          t.removeClass(f, "vjs-hidden");
          l.style.width = q.cogMenu.width + "px";
          l.style.height = q.cogMenu.height + "px";
          ei(100 * w);
        };
      if (r) {
        var h = vjs_find(s, ".vjs-extend-speed");
        h.onclick = function (e) {
          c(e, r, "speedMenu");
        };
        Re(h);
        h.addEventListener(
          "tap",
          function (e) {
            c(e, r, "speedMenu");
          },
          !1
        );
        var p = vjs_find(r, ".vjs-settings-back");
        p.onclick = p.ontouchstart = function (e) {
          u(e);
        };
      }
      if (v && n.qualityMenu) {
        t.removeClass(vjs_find(s, ".vjs-cog-menu-button"), "vjs-hidden");
        v.onclick = function (e) {
          e.stopPropagation();
        };
        var j = vjs_find(s, ".vjs-extend-quality");
        j.onclick = function (e) {
          c(e, v, "qualityMenu");
        };
        Re(j);
        j.addEventListener(
          "tap",
          function (e) {
            c(e, v, "qualityMenu");
          },
          !1
        );
        var m = vjs_find(v, ".vjs-settings-back");
        m.onclick = m.ontouchstart = function (e) {
          u(e);
        };
      }
      if (d) {
        vjs_find(s, ".vjs-extend-zoom").onclick = function (e) {
          c(e, d, "zoomMenu");
        };
        vjs_find(d, ".vjs-settings-back").onclick = function (e) {
          u(e);
        };
      }
      var g = function (e) {
        e.preventDefault();
        if (!vjs_find(s, ".vjs-tech-chromecast")) {
          si();
          var i = s.querySelector(".vjs-menu-settings");
          if (d) t.addClass(d, "vjs-hidden");
          if (r) t.addClass(r, "vjs-hidden");
          if (!0 !== t.hasClass(i, "vjs-lock-showing")) {
            e.target.setAttribute("aria-expanded", "true");
            Ke(e.target);
            t.addClass(i, "vjs-lock-showing");
            vjs_find(B, ".vjs-control-text").style.opacity = 0;
            t.addClass(e.target, "vjs-cog-active");
            t.removeClass(f, "vjs-hidden");
            l.style.width = q.cogMenu.width + "px";
            l.style.height = q.cogMenu.height + "px";
            ei(100 * w);
          } else {
            e.target.setAttribute("aria-expanded", "false");
            t.removeClass(e.target, "vjs-cog-active");
            y();
          }
        }
      };
      function y() {
        if (d) t.addClass(d, "vjs-hidden");
        if (r) t.addClass(r, "vjs-hidden");
        t.removeClass(ve, "vjs-hidden");
        t.removeClass(re, "vjs-lock-showing");
        vjs_find(B, ".vjs-control-text").removeAttribute("style");
      }
      B.onclick = B.ontouchend = function (e) {
        g(e);
      };
      B.onmouseover = function () {
        if (!0 !== t.hasClass(re, "vjs-lock-showing"))
          vjs_find(B, ".vjs-control-text").removeAttribute("style");
      };
    }
    function ti() {
      if (!0 === n.menus) {
        var e = n.related.length,
          i = 0.8,
          a = 800;
        if (vjs_find(s, ".rel-block")) {
          t.removeClass(vjs_find(s, ".rel-block"), "rel-anim");
          var o = s.offsetWidth,
            l = o * i;
          if (l > a) l = a;
          var r = parseInt(vjs_find(s, ".vjs-related").style.maxWidth, 10);
          if (isNaN(r)) r = 0;
          if (parseInt(r, 10) < 100) r = a;
          if (l > r) l = r;
          var d = vjs_find(s, ".vjs-related");
          if (a < r) d.style.maxWidth = a + "px";
          else d.style.maxWidth = "800px";
          d.style.width = 100 * i + "%";
          var v = 3,
            f = 2;
          if (e < 5 && 3 !== e) v = 2;
          if (e < 4) f = 1;
          if (l < 480) {
            v = 2;
            f = 1;
          }
          var c = (l / v) * 0.5625,
            h = l / v,
            p = Math.ceil(e / 6);
          if (y > p) y = p;
          b = p;
          if (2 === v && 2 === f) b = Math.ceil(e / 4);
          if (2 === v && 1 === f) b = Math.ceil(e / 2);
          var j = c * f;
          d.style.height = j + "px";
          var m = o / 2 - l / 2;
          d.style.top = 0.55 * s.offsetHeight - j / 2 + "px";
          d.style.left = o / 2 - l / 2 + "px";
          var g = vjs_find(s, ".vjs-arrow-prev"),
            _ = vjs_find(s, ".vjs-arrow-next");
          if (u() && g && _) {
            var C = parseInt(vjs_find(s, ".vjs-prev").offsetWidth + 5, 10);
            g.style.left = m - C + "px";
            _.style.left = l + m + "px";
            t.removeClass(_, "vjs-disabled");
            t.removeClass(g, "vjs-disabled");
            if (y === b) t.addClass(_, "vjs-disabled");
            if (1 === y) t.addClass(g, "vjs-disabled");
          }
          if (y > 1) {
            var w = d.offsetWidth,
              k = (y - 1) * w;
            vjs_find(s, ".rel-block").style.left = "-" + k + "px";
          }
          for (
            var x = 0, T = 0, E = s.querySelectorAll(".rel-parent"), I = 0;
            I < E.length;
            I++
          ) {
            var L = E[I];
            L.style.left = x + "px";
            if (1 === T && f > 1) {
              L.style.top = c + "px";
              x += h;
            } else L.style.top = 0;
            if (1 === f) x += h;
            L.style.width = h + "px";
            L.style.height = c + "px";
            if (f > 1) {
              if (2 === ++T) T = 0;
            } else T = 0;
          }
          t.addClass(vjs_find(s, ".rel-block"), "rel-anim");
        }
      }
    }
    function si() {
      if (!0 === n.menus) {
        var e = vjs_find(s, ".vjs-settings-home"),
          i = vjs_find(s, ".vjs-menu-speed"),
          a = vjs_find(s, ".vjs-zoom-menu"),
          o = vjs_find(s, ".vjs-menu-quality"),
          l = vjs_find(s, ".vjs-settings-div");
        t.addClass(D, "vjs-block");
        l.style.width = "auto";
        l.style.height = "auto";
        var r = 5,
          d = 10;
        if ("pinko" === n.skin || "roundal" === n.skin || "mockup" === n.skin)
          r = 15;
        if ("shaka" === n.skin) {
          r = 15;
          d = 15;
        }
        if ("treso" === n.skin) {
          r = 30;
          d = 20;
        }
        if ("jwlike" === n.skin) r = 10;
        var v = s.offsetHeight - D.offsetHeight,
          f = vjs_find(D, ".vjs-fullscreen-control");
        if (s.offsetWidth < 480) {
          if ("pinko" === n.skin || "party" === n.skin) d = 0;
          if ("roundal" === n.skin) d = 15;
          v = v + f.offsetHeight - d;
        } else v -= r;
        if (v > 300) v = 300;
        l.style.maxHeight = v + "px";
        if (i) t.addClass(i, "vjs-hidden");
        if (a) t.addClass(a, "vjs-hidden");
        if (o) t.addClass(o, "vjs-hidden");
        var c = vjs_find(s, ".vjs-menu-settings");
        t.removeClass(c, "vjs-hidden");
        t.addClass(c, "vjs-invisible");
        q.cogMenu = { width: c.clientWidth, height: c.clientHeight };
        if (i) {
          t.addClass(e, "vjs-hidden");
          if (a) t.addClass(a, "vjs-hidden");
          if (o) t.addClass(o, "vjs-hidden");
          t.removeClass(i, "vjs-hidden");
          t.addClass(i, "vjs-invisible");
          q.speedMenu = { width: i.clientWidth, height: i.clientHeight };
          t.removeClass(i, "vjs-invisible");
          t.addClass(i, "vjs-hidden");
        }
        if (o && n.qualityMenu) {
          t.addClass(e, "vjs-hidden");
          if (a) t.addClass(a, "vjs-hidden");
          if (i) t.addClass(i, "vjs-hidden");
          t.removeClass(o, "vjs-hidden");
          t.addClass(o, "vjs-invisible");
          q.qualityMenu = { width: o.offsetWidth + 10, height: o.offsetHeight };
          t.removeClass(o, "vjs-invisible");
          t.addClass(o, "vjs-hidden");
          t.removeClass(vjs_find(s, ".vjs-cog-menu-button"), "vjs-hidden");
        }
        if (a) {
          t.addClass(e, "vjs-hidden");
          if (i) t.addClass(i, "vjs-hidden");
          if (o) t.addClass(o, "vjs-hidden");
          t.removeClass(a, "vjs-hidden");
          t.addClass(a, "vjs-invisible");
          a.style.width = "auto";
          q.zoomMenu = { width: a.clientWidth, height: a.clientHeight + 1 };
          t.removeClass(a, "vjs-invisible");
          t.addClass(a, "vjs-hidden");
        }
        t.removeClass(D, "vjs-block");
        t.addClass(vjs_mfind(s, ".vjs-submenu"), "vjs-hidden");
        t.removeClass(e, "vjs-hidden");
        t.removeClass(c, "vjs-invisible");
        t.removeClass(e, "vjs-hidden");
        if (
          n.speedMenu ||
          n.zoomMenu ||
          n.relatedMenu ||
          n.shareMenu ||
          n.qualityMenu
        )
          t.removeClass(vjs_find(s, ".vjs-cog-menu-button"), "vjs-hidden");
      }
    }
    function ni(e, i) {
      var a = parseInt(e, 10),
        o = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden"></i>',
        l = "";
      if (n.hdicon) {
        l = "HD";
        if (a > 2159) l = "4K";
        if (a > n.minhd - 1)
          o = '<i class="vjs-hd-icon vjs-hd-home">' + l + "</i>";
      }
      if (n.qualityMenu) {
        vjs_find(s, ".quality-label").innerHTML = i + o;
        if (a > n.minhd - 1)
          t.removeClass(vjs_find(s, ".vjs-hd"), "vjs-hidden");
        else t.addClass(vjs_find(s, ".vjs-hd"), "vjs-hidden");
      } else vjs_find(S, ".quality-span").innerHTML = i + o;
    }
    function ai(e, i) {
      if (!e.res || !i.res) return 0;
      else return +i.res - +e.res;
    }
    function oi(e) {
      if (n.hdicon)
        if (n.qualityMenu) {
          var i = vjs_find(s, ".vjs-hd");
          if (e > n.minhd - 1) {
            var a = "HD";
            if (e > 2159) a = "4K";
            i.innerHTML = a;
            t.removeClass(i, "vjs-hidden");
          } else t.addClass(i, "vjs-hidden");
        }
    }
    function li(i) {
      var a = null,
        o = null;
      try {
        a = e.dash.mediaPlayer || null;
      } catch (e) {
        lint(e);
      }
      var l = e.options().html5.hlsjsConfig || null,
        r = !0;
      if (l) if (!1 === l.smoothQualityChange) r = !1;
      Je();
      si();
      for (var d = [], v = !1, f = 0; f < i.length; f++) {
        v = !1;
        for (var c = 0; c < d.length; c++)
          if (i[f].height === d[c].height && i[f].bitrate === d[c].bitrate)
            v = !0;
        if (!0 !== v) d.push(i[f]);
      }
      if (!(d.length < 2)) {
        n.is_auto = !0;
        for (var u = 0, h = 0, p = !1, j = 0; j < d.length; j++) {
          var m = d[j];
          if (m.height > 0) u++;
          if (m.bitrate > 0) h++;
          for (var g = 0, y = 0; y < d.length; y++)
            if (m.height === d[y].height) g++;
          if (g > 1) p = !0;
        }
        var b = "bitrate";
        if (u > h) b = "height";
        d = (d = sortByKey(d, b)).reverse();
        C = d.length + 1;
        var _ = "vjs-menu-item item-quality",
          w = "vjs-menu-item item-quality vjs-checked",
          k = "";
        for (j = 0; j < d.length; j++) {
          var x = "",
            E = "",
            I = parseInt(d[j].height, 10);
          if (n.hdicon && I > n.minhd - 1) {
            var L = "HD";
            if (I > 1079 && n.minhd < 1080) L = "FullHD";
            if (I > 2159) L = "4K";
            E = '<i class="vjs-hd-icon">' + L + "</i>";
            oi(I);
          }
          var M = d[j].bitrate,
            H = d[j].height,
            N = parseInt(M / 1e3, 10);
          if (d[j].height > 0 || d[j].bitrate > 0) {
            var q = _;
            if (p)
              if (u === h)
                k +=
                  '<li data-id="' +
                  d[j].index +
                  '" class="' +
                  q +
                  '" data-bitrate="' +
                  M +
                  '" data-height="' +
                  H +
                  '"' +
                  x +
                  ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                  H +
                  "p (" +
                  N +
                  " kbps)</li>";
              else if (u > h)
                k +=
                  '<li data-id="' +
                  d[j].index +
                  '" class="' +
                  q +
                  '" data-bitrate="' +
                  M +
                  '" data-height="' +
                  H +
                  '"' +
                  x +
                  ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                  H +
                  "p" +
                  E +
                  "</li>";
              else
                k +=
                  '<li data-id="' +
                  d[j].index +
                  '" class="' +
                  q +
                  '" data-bitrate="' +
                  M +
                  '" data-height="' +
                  H +
                  '"' +
                  x +
                  ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                  N +
                  " kbps</li>";
            else if (d[j].bitrate > 0 && h > u)
              k +=
                '<li data-id="' +
                d[j].index +
                '" class="' +
                q +
                '" data-bitrate="' +
                M +
                '" data-height="' +
                H +
                '"' +
                x +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                H +
                "p (" +
                N +
                " kbps)</li>";
            else
              k +=
                '<li data-id="' +
                d[j].id +
                '" class="' +
                q +
                '" data-bitrate="' +
                M +
                '" data-height="' +
                H +
                '"' +
                x +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                H +
                "p" +
                E +
                "</li>";
          }
        }
        k +=
          '<li id="auto" class="vjs-menu-item item-quality auto-res vjs-checked" data-height="Autores"' +
          w +
          ' role="menuitem" aria-live="polite" aria-disabled="false">Auto<i class="autores"></i></li>';
        vjs_find(s, ".quality-span").innerHTML = "Auto";
        if (n.qualityMenu) {
          yi();
          var z = vjs_find(s, ".vjs-menu-quality .vjs-menu-content");
          z.innerHTML = z.innerHTML + k;
          t.removeClass(vjs_find(s, ".vjs-extend-quality"), "vjs-hidden");
          t.removeClass(B, "vjs-hidden");
        } else {
          vjs_find(S, ".vjs-menu .vjs-menu-content").innerHTML = k;
          t.removeClass(S, "vjs-hidden");
        }
        var A = vjs_mfind(s, ".item-quality");
        ii();
        si();
        if (e.qualities.length > 1)
          e.on("qualityChange", function (e, i) {
            if (a) {
              var t = i.height,
                n = i.bitrate;
              o = { height: t, bitrate: n };
            }
            var l = vjs_find(s, ".auto-res");
            if (l) {
              if (l.className.indexOf("vjs-checked") > -1) O();
            }
          });
        for (var D = 0; D < A.length; D++) {
          var W = A[D],
            R = function (e) {
              e.preventDefault();
              T = !0;
              for (var i = 0; i < A.length; i++)
                t.removeClass(A[i], "vjs-checked");
              t.removeClass(vjs_find(s, ".auto-res"), "vjs-checked");
              t.addClass(e.target, "vjs-checked");
              var n = e.target.getAttribute("id");
              ri();
              if ("auto" === n) O(!0);
              else F(e.target);
            };
          if (W.className.indexOf("vjs-hidden") < 0) {
            W.onclick = function (e) {
              e.stopImmediatePropagation();
              R(e);
            };
            Re(W);
            W.addEventListener(
              "tap",
              function (e) {
                R(e);
              },
              !1
            );
          }
        }
        O(!1);
      }
      function O(i) {
        if (t.hasClass(s, "vjs-has-started")) t.addClass(P, "vjs-hidden");
        if (a) {
          a.updateSettings({
            streaming: { abr: { autoSwitchBitrate: { video: !0 } } },
          });
          var l = vjs_find(s, ".auto-res");
          if (l)
            l.className = "vjs-menu-item item-quality auto-res vjs-checked";
          vjs_find(s, ".quality-span").innerHTML = "Auto";
        }
        if (i && !a)
          if (e.hlsjs)
            if (r) e.hlsjs.nextLevel = -1;
            else e.hlsjs.currentLevel = -1;
          else for (var d = 0; d < e.qualities.length; d++) e.setQuality(d, !0);
        var le = vjs_find(s, ".auto-res");
        if (le)
          le.className = "vjs-menu-item item-quality auto-res vjs-checked";
        var v = null;
        if (a) v = o;
        else v = e.qualities[e.qualityIndex];
        var f = "",
          c = "",
          u = 0;
        if (v) {
          if (v.height) u = parseInt(v.height, 10);
          if (u > 0) c = v.height + "p";
          else c = parseInt(v.bitrate / 1e3, 10) + "kbps";
          if (l) l.innerHTML = 'Auto<i class="autores">' + c + "</i>";
          if (n.hdicon) {
            if (u >= n.minhd - 1) f = "HD";
            if (u > 2159) f = "4K";
            oi(u);
          }
        }
        if ("" === f) te = "vjs-hd-icon vjs-hd-home vjs-hidden";
        else te = "vjs-hd-icon vjs-hd-home";
        vjs_find(s, ".quality-span").innerHTML =
          'Auto<i class="' + te + '">' + f + "</i>";
      }
      function F(i) {
        vjs_find(s, ".auto-res").innerHTML = 'Auto<i class="autores"></i>';
        for (
          var o = parseInt(i.getAttribute("data-height"), 10),
            l = o,
            d = parseInt(i.getAttribute("data-bitrate"), 10),
            v = e.qualities,
            f = vjs_mfind(s, ".item-quality"),
            c = 0;
          c < f.length;
          c++
        )
          t.removeClass(f[c], "vjs-checked");
        t.addClass(i, "vjs-checked");
        var u = e.video_id();
        if (0 === l) l = d;
        e.trigger("resolutionchange", { id: u, res: l });
        for (var h = 0; h < v.length; h++) {
          if (!e.hlsjs) e.setQuality(h, !1);
          if (v[h].height === l || v[h].bitrate === d)
            if (e.hlsjs)
              if (r) e.hlsjs.nextLevel = h;
              else e.hlsjs.currentLevel = h;
            else if (a) {
              a.updateSettings({
                streaming: { abr: { autoSwitchBitrate: { video: !1 } } },
              });
              a.setQualityFor("video", v[h].id);
            } else e.setQuality(h, !0);
        }
        var p = "",
          j = "",
          m = vjs_find(s, ".quality-span");
        if (o > 0) {
          p = "HD";
          if (o > 2159) p = "4K";
          if (o > n.minhd - 1)
            j = '<i class="vjs-hd-icon vjs-hd-home">' + p + "</i>";
          else
            j = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden">' + p + "</i>";
          m.innerHTML = o + "p" + j;
        } else if (d > 0) m.innerHTML = parseInt(d / 1e3, 10) + "kB";
        oi(o);
      }
    }
    function ri() {
      if (n.qualityMenu) {
        t.addClass(vjs_find(s, ".vjs-menu-quality"), "vjs-hidden");
        t.removeClass(vjs_find(s, ".vjs-settings-home"), "vjs-hidden");
        t.removeClass(vjs_find(s, ".vjs-menu-settings"), "vjs-lock-showing");
      } else if (S) {
        var e = vjs_find(S, ".vjs-menu"),
          i = vjs_find(S, ".vjs-control-text");
        if (e) {
          e.style.display = "none";
          t.removeClass(e, "vjs-lock-showing");
          if (i) i.removeAttribute("style");
        }
      }
    }
    function di() {
      var i = e.video_id();
      if (null !== i) {
        var a = 0;
        if (n.resume && void 0 !== i) {
          var o = String("vjs_resume-" + i);
          if (localStorage && localStorage.key)
            a = Number(localStorage.getItem(o));
        }
        if (
          !(
            t.hasClass(s, "vjs-ad-playing") ||
            t.hasClass(s, "vjs-dai") ||
            t.hasClass(s, "vjs-up-next")
          )
        )
          if (e.duration() !== 1 / 0)
            if ("8" !== browser.IOS_VERSION || 0 !== e.duration())
              if (a > 0 && a < e.duration() - 20)
                setTimeout(function () {
                  e.currentTime(a);
                }, 200);
      }
    }
    function vi() {
      var e = vjs_find(s, ".vjs-audio-info");
      if (e) s.removeChild(e);
      if (n.audioInfo && (n.audioInfo.artist || n.audioInfo.title)) {
        var i = vjs_El("span", "vjs-audio-info"),
          t = "";
        if (n.audioInfo.url)
          t = '<a href="' + n.audioInfo.url + '" target="' + n.target + '">';
        else i.style.pointerEvents = "none";
        if (n.audioInfo.cover)
          t +=
            '<span class="vjs-cover"><img src="' +
            n.audioInfo.cover +
            '"/></span>';
        t += '<span class="vjs-audio-item vjs-text">';
        if (n.audioInfo.artist)
          t += '<span class="audio-artist">' + n.audioInfo.artist + "</span>";
        if (n.audioInfo.title)
          t +=
            '<span class="vjs-audio-item vjs-song">' +
            n.audioInfo.title +
            "</span>";
        if (n.audioInfo.genre || n.audioInfo.album || n.audioInfo.year) {
          t += '<span class="vjs-audio-item audio-id">';
          if (n.audioInfo.genre)
            t += "<span>Genre: " + n.audioInfo.genre + "</span>";
          if (n.audioInfo.album)
            t += "<span>Album: " + n.audioInfo.album + "</span>";
          if (n.audioInfo.year)
            t += "<span>Year: " + n.audioInfo.year + "</span>";
          t += "</span>";
        }
        t += "</span>";
        if (n.audioInfo.url) t += "</a>";
        i.innerHTML = t;
        s.appendChild(i);
        i.onclick = function () {
          window.open(n.audioInfo.url, n.target);
        };
      }
    }
    function fi() {
      var e = vjs_find(s, ".vjs-info");
      if (e) s.removeChild(e);
      if (n.videoInfo && (n.infoText || n.infoTitle || "" !== n.title)) {
        var i = vjs_El("span", "vjs-info vjs-info-top");
        if (n.infoBottom) i = vjs_El("span", "vjs-info vjs-info-bottom");
        var t = "";
        s.appendChild(i);
        if (n.infoUrl)
          t = '<a href="' + n.infoUrl + '" target="' + n.target + '">';
        else i.style.pointerEvents = "none";
        var a = "";
        if (n.infoText) a = n.infoText;
        else if (n.infoTitle) a = n.infoTitle;
        else if ("" !== n.title) a = n.title;
        var o = "";
        if ("" !== n.infoIcon)
          o = '<span class="vjs-icon"><img src="' + n.infoIcon + '"/></span>';
        t += o;
        t += '<span class="vjs-text"><span class="vjs-ttl">' + a + "</span>";
        if (n.infoDescription)
          t += '<span class="vjs-dsc">' + n.infoDescription + "</span>";
        if (n.infoUrl) t += "</span></a></span>";
        else t += "</span>";
        i.innerHTML = t;
        i.onclick = function () {
          window.open(n.infoUrl, n.target);
        };
      }
    }
    function ci() {
      var i,
        t = [];
      if (e.textTracks().length > 0) {
        i = e.textTracks();
        for (var s = 0; s < i.length; s++) {
          var n = {},
            a = i[s];
          if ("captions" === a.kind) {
            n.kind = a.kind;
            n.src = a.src;
            n.language = a.language;
            n.label = a.label;
            if ("showing" === a.mode) n.mode = "showing";
            t.push(n);
          }
        }
      }
      if (t.length > 0) e.captions = t;
    }
    function ui() {
      var i = !1,
        t = e.textTracks();
      if (t.length > 0)
        for (var s = 0; s < t.length; s++)
          if ("metadata" === t[s].kind && t[s].src && !0 !== i)
            e.trigger("medialoaded");
    }
    function hi(e) {
      var i = vjs_find(s, ".vjs-thumbnail-holder"),
        a = vjs_find(s, ".vjs-progress-slide .vjs-thumb");
      if (i) {
        if ("shaka" === n.skin) {
          var o = Number(i.style.height.replace(/px$/, "")),
            l = i.computedStyleMap().get("bottom").value + o + 5;
          e.style.bottom = l + "px";
        } else t.addClass(i, "vjs-vtt");
        t.addClass(e, "vjs-chapter-mix");
      } else if (a) {
        if ("shaka" === n.skin) {
          var r = Number(a.style.height.replace(/px$/, ""));
          e.style.bottom = r + 32 + "px";
        } else t.addClass(a, "vjs-sld");
        t.addClass(e, "vjs-chapter-mix");
      }
      return 0;
    }
    function pi() {
      var i = e.textTracks(),
        a = vjs_find(s, ".vjs-chapter");
      if (a) a.parentNode.removeChild(a);
      if (n.chapterMarkers) {
        var o = s.getElementsByClassName("vjs-marker");
        if (o) for (; o.length > 0; ) o[0].parentNode.removeChild(o[0]);
        var l = !1;
        if (i.length > 0)
          for (var r = 0; r < i.length; r++)
            if ("chapters" === i[r].kind && i[r].cues && !0 !== l) {
              l = !0;
              var v = i[r];
            }
        if (v) {
          var f = v.cues;
          if (f) {
            let i = vjs_find(s, ".vjs-progress-control");
            var c = vjs_find(i, ".vjs-mouse-display");
            if (c) t.addClass(c, "vjs-abs-hidden");
            var u = [],
              h = e.duration(),
              p = vjs_El("div");
            p.className = "vjs-chapter";
            A.appendChild(p);
            function j(e) {
              var i;
              if ("mousemove" === e.type) i = e.pageX;
              else if ("touchmove" === e.type) i = d(e);
              var t = i - A.getBoundingClientRect().left;
              if (!(t < 0)) {
                var s = (t / A.offsetWidth) * h;
                hi(p);
                p.style.left = t + "px";
                for (var n = f.length - 1; n >= 0; n--)
                  if (s >= f[n].startTime) {
                    if (p.innerHTML !== f[n].text) {
                      p.innerHTML = f[n].text;
                      p.style.maxWidth = 0.9 * A.offsetWidth + "px";
                    }
                    var a = p.offsetWidth / 2,
                      o = A.offsetWidth - p.offsetWidth / 2;
                    if (t < a) p.style.left = a + "px";
                    if (t > o) p.style.left = o + "px";
                    p.style.opacity = "1";
                    p.style.visibility = "visible";
                    break;
                  }
              }
            }
            A.ontouchstart = function (e) {
              j(e);
              document.addEventListener("touchmove", j);
              document.addEventListener("touchend", m);
            };
            A.onmousemove = function (e) {
              j(e);
            };
            function m() {
              if (!videojs.holderdown) {
                document.removeEventListener("touchmove", j);
                document.removeEventListener("touchend", m);
                p.style.opacity = "0";
                p.style.visibility = "visible";
              }
            }
            A.onmouseout = function () {
              m();
            };
            for (r = 0; r < f.length; r++)
              if (h > 0)
                if (f[r].startTime > 0) {
                  u[r] = f[r].startTime;
                  var g = vjs_El("div", "vjs-marker"),
                    y = vjs_El("div", "vjs-marker-inn");
                  g.appendChild(y);
                  g.style.left = (u[r] / h) * 100 + "%";
                  A.appendChild(g);
                }
          }
        }
      }
    }
    function ji(i, t) {
      var s = vjs_El("div", "vjs-item");
      s.setAttribute("data-id", t);
      var a = vjs_El("div", "vjs-tmb");
      if (i.thumb) a.style.backgroundImage = "url(" + i.thumb + ")";
      else if (i.poster) a.style.backgroundImage = "url(" + i.poster + ")";
      s.appendChild(a);
      var o = vjs_El("p");
      if (i.title) o.innerHTML = i.title;
      else {
        var l = "";
        if (i.audioInfo)
          if (void 0 !== typeof i.audioInfo.title) {
            l = i.audioInfo.title;
            if (void 0 !== typeof i.audioInfo.artist)
              l = i.audioInfo.artist + " - " + l;
          }
        if ("" !== l) o.innerHTML = l;
        else {
          var r = i.sources[0].src,
            d = r.substring(r.lastIndexOf("/") + 1);
          if (i.sources.length > 0)
            for (var v = 0; v < i.sources.length; v++)
              if (i.sources[v].default)
                d = (r = i.sources[v].src).substring(r.lastIndexOf("/") + 1);
          d = d.replace(/(\.[^/.]+)+$/, "");
          o.innerHTML = d;
        }
      }
      s.appendChild(o);
      if ("undefined" !== n.playlistID)
        var f = document.getElementById(n.playlistID);
      if (f) {
        var c = vjs_El("p", "vjs-desc");
        if (i.description) c.innerHTML = i.description;
        s.appendChild(c);
      }
      if (i.duration) {
        var u = vjs_El("span");
        u.innerHTML = i.duration;
        s.appendChild(u);
      }
      var h = !1;
      s.onclick = function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        p(e);
      };
      s.ontouchstart = function () {
        h = !1;
      };
      s.ontouchmove = function () {
        h = !0;
      };
      s.ontouchend = function (e) {
        if (!0 !== h) p(e);
      };
      function p(i) {
        if (!e.adPlaying) {
          var t = i.target.getAttribute("data-id");
          e.playlist.currentItem(parseInt(t, 10));
          if (e.paused()) e.play();
        }
      }
      return s;
    }
    function mi() {
      var i = e.playlist.list();
      if (!(i.length < 2)) {
        e.on("error", function () {
          if (e.playlist.currentIndex() === e.playlist.lastIndex())
            if (!0 !== n.playlistRepeat) P.style.display = "none";
            else e.playlist.next(!0);
          else e.playlist.next(!0);
        });
        if (!0 !== n.playlist) {
          n.playlist = !0;
          if (n.playlistNavigation) {
            var a = vjs_El(
                "div",
                "vjs-playlist-nav vjs-nav-prev",
                '<div class="vjs-prev vjs-disabled"></div>'
              ),
              o = vjs_El(
                "div",
                "vjs-playlist-nav vjs-nav-next",
                '<div class="vjs-next"></div>'
              );
            s.appendChild(a);
            s.appendChild(o);
            o.onclick = function (i) {
              if (!e.adPlaying)
                if (i.target.className.indexOf("disabled") < 0)
                  e.playlist.next();
            };
            a.onclick = function (i) {
              if (!e.adPlaying)
                if (i.target.className.indexOf("disabled") < 0)
                  e.playlist.previous();
            };
          }
          if (n.playlistUI) {
            var l = null,
              r = null;
            if ("undefined" !== n.playlistID)
              l = document.getElementById(n.playlistID);
            if (l) r = vjs_El("div", "vjs-vplaylist vjs-vplaylist-horizontal");
            else r = vjs_El("div", "vjs-vplaylist vjs-vplaylist-show");
            if (!l) {
              var d = t.createEl(
                "div",
                { className: "vjs-playlist-button" },
                { title: "Playlist" }
              );
              s.appendChild(d);
              d.onclick = function () {
                t.addClass(r, "vjs-vplaylist-show");
                if (n.playlistFirst) t.addClass(r, "vjs-vplaylist-first");
              };
              r.style.visibility = "hidden";
            }
            var v = vjs_El("div", "vjs-head", "<span>PLAYLIST</span>"),
              f = vjs_El("div", "vjs-back", "<i></i>");
            if (l) f.innerHTML = '<i class="vdown"></i>';
            v.appendChild(f);
            r.appendChild(v);
            f.onclick = function () {
              if (l)
                if (c.offsetHeight > 0) {
                  f.innerHTML = '<i class="vup"></i>';
                  t.addClass(c, "vjs-list-min");
                } else {
                  f.innerHTML = '<i class="vdown"></i>';
                  t.removeClass(c, "vjs-list-min");
                }
              else t.removeClass(r, "vjs-vplaylist-show");
            };
            if (!l) s.appendChild(r);
            else l.appendChild(r);
            var c = vjs_El("div", "vjs-vlist");
            if (l) {
              t.addClass(c, "vjs-list-max");
              if (n.playlistMaxH) {
                var u = parseInt(n.playlistMaxH, 10);
                if (0 === u) c.style.height = "auto";
                else c.style.height = u + "px";
              }
            }
            r.appendChild(c);
            i = e.playlist.list();
            for (he = 0; he < i.length; he++) {
              var h = ji(i[he], he);
              c.appendChild(h);
            }
            if (!l) {
              var p = vjs_El("div", "vjs-last");
              c.appendChild(p);
              if (!0 !== n.playlistShow) {
                r.className = "vjs-vplaylist";
                setTimeout(function () {
                  r.style.visibility = "visible";
                }, 500);
              } else r.style.visibility = "visible";
            }
          }
        }
        e.on("playlist_newitem", function () {
          if (n.playlistUI)
            for (var i = vjs_mfind(c, ".vjs-item"), a = 0; a < i.length; a++)
              t.removeClass(i[a], "vjs-active-item");
          e.on("play", function () {
            if (n.playlistUI) {
              for (
                var i = e.playlist.currentIndex(),
                  a = vjs_mfind(c, ".vjs-item"),
                  o = 0;
                o < a.length;
                o++
              ) {
                t.removeClass(a[o], "vjs-active-item");
                if (o === i) t.addClass(a[o], "vjs-active-item");
              }
              if (n.playlistAutoHide && !l)
                t.removeClass(r, "vjs-vplaylist-show");
            }
            if (n.playlistNavigation) {
              var d = vjs_find(s, ".vjs-nav-prev"),
                v = vjs_find(s, ".vjs-nav-next"),
                f = vjs_find(d, ".vjs-prev"),
                u = vjs_find(v, ".vjs-next");
              if (0 === e.playlist.currentIndex())
                t.addClass(f, "vjs-disabled");
              else t.removeClass(f, "vjs-disabled");
              if (e.playlist.currentIndex() === e.playlist.lastIndex())
                t.addClass(u, "vjs-disabled");
              else t.removeClass(u, "vjs-disabled");
            }
          });
        });
      }
    }
    function gi() {
      e.sprite = !1;
      if ("" === n.slideImage || n.currentSlide !== n.slideImage) {
        var i = vjs_find(s, ".vjs-progress-slide");
        if (i) i.parentNode.removeChild(i);
        var a = vjs_find(s, ".vjs-thumb-poster");
        if (a) s.removeChild(a);
        if (!0 !== e.isAudio() && n.slideImage) {
          if ("" === n.slideImage) return;
          n.currentSlide = n.slideImage;
          var o = vjs_find(s, ".vjs-mouse-display");
          if (e.shadowSlide) {
            var r = vjs_El("div", "vjs-thumb-poster"),
              v = vjs_El("canvas");
            r.appendChild(v);
            s.insertBefore(r, W);
          }
          var f = vjs_find(s, ".vjs-play-progress"),
            c = vjs_find(f, ".vjs-time-tooltip");
          if (c) t.addClass(c, "vjs-abs-hidden");
          if (o) t.addClass(o, "vjs-abs-hidden");
          e.sprite = !0;
          h = vjs_El("div", "vjs-progress-slide");
          p = vjs_El("div", "vjs-thumb");
          m = vjs_El("div", "vjs-thumb-duration");
          j = vjs_El("img");
          if ("horizontal" === n.slideType) {
            j.style.width = "auto";
            j.style.height = n.slideHeight + "px";
          } else {
            j.style.height = "auto";
            j.style.width = n.slideWidth + "px";
          }
          p.appendChild(j);
          p.appendChild(m);
          h.appendChild(p);
          p.style.left = "-" + parseInt(n.slideWidth / 2, 10) + "px";
          A.appendChild(h);
          h.style.left = "-1000px";
          if (c) t.addClass(c, "vjs-abs-hidden");
          if (o) t.addClass(o, "vjs-abs-hidden");
          var u = 0,
            g = 0;
          A.addEventListener("mousemove", k);
          A.addEventListener("mousedown", T);
          A.addEventListener("mouseleave", I);
          A.addEventListener("touchstart", C, l ? { passive: !1 } : !1);
          var y = new Image();
          j.src = n.slideImage;
          y.src = n.slideImage;
          y.onload = function (e) {
            var i = e.target.width,
              s = e.target.height;
            _ = i / n.slideWidth;
            if ("horizontal" !== n.slideType) _ = s / n.slideHeight;
            t.removeClass(h, "vjs-hidden");
          };
        }
      }
      function b() {
        A.removeEventListener("touchmove", k);
        A.removeEventListener("touchend", b);
        E();
      }
      function C(e) {
        videojs.holderdown = !1;
        A.addEventListener("touchmove", function (e) {
          k(e);
        });
        k(e);
        A.addEventListener("touchend", b);
      }
      function w(e, i) {
        e = e < 0 ? 0 : e;
        let t = Math.floor(e % 60),
          s = Math.floor((e / 60) % 60),
          n = Math.floor(e / 3600);
        const a = Math.floor((i / 60) % 60),
          o = Math.floor(i / 3600);
        if (isNaN(e) || e === 1 / 0) n = s = t = "-";
        return (
          (n = n > 0 || o > 0 ? n + ":" : "") +
          (s = ((n || a >= 10) && s < 10 ? "0" + s : s) + ":") +
          (t = t < 10 ? "0" + t : t)
        );
      }
      function k(i) {
        if (!vjs_find(s, ".vjs-tech-chromecast")) {
          var a = A.getBoundingClientRect(),
            o = A.offsetWidth,
            l = null;
          if (i.pageX) l = i.pageX;
          else if (i.changedTouches) l = d();
          var f = l - a.left,
            c = f,
            y = f;
          if (0 === c && A.offsetWidth > 0 && videojs.holderdown)
            y = c = A.offsetWidth;
          var b = Number(c) / Number(o),
            C = b * e.duration();
          m.innerHTML = w(C, e.duration());
          var k = parseInt(b * _, 10);
          p.style.width = n.slideWidth + "px";
          p.style.height = n.slideHeight + "px";
          var x = 0;
          if ("horizontal" === n.slideType) {
            x = k * n.slideWidth;
            j.style.left = "-" + x + "px";
            u = x;
            g = 0;
          } else {
            x = k * n.slideHeight;
            j.style.top = "-" + x + "px";
            u = 0;
            g = x;
          }
          var T = n.slideWidth / 2,
            E = A.offsetWidth - n.slideWidth / 2;
          if (y > E) y = E;
          if (y < T) y = T;
          h.style.left = parseInt(y, 10) + "px";
          if (videojs.holderdown && e.shadowSlide) {
            var I = v.getContext("2d");
            v.width = s.offsetWidth;
            v.height = s.offsetHeight;
            r.style.width = s.offsetWidth + "px";
            r.style.height = s.offsetHeight + "px";
            I.drawImage(
              j,
              u,
              g,
              n.slideWidth,
              n.slideHeight,
              0,
              0,
              v.width,
              v.height
            );
          }
          t.addClass(p, "vjs-thumb-show");
        }
      }
      function x() {
        videojs.holderdown = !1;
        document.removeEventListener("mousemove", k);
        E();
      }
      function T() {
        document.addEventListener("mousemove", k);
        document.addEventListener("mouseup", x);
        if (e.shadowSlide) {
          var i = v.getContext("2d");
          v.width = s.offsetWidth;
          v.height = s.offsetHeight;
          r.style.width = s.offsetWidth + "px";
          r.style.height = s.offsetHeight + "px";
          i.drawImage(
            j,
            u,
            g,
            n.slideWidth,
            n.slideHeight,
            0,
            0,
            v.width,
            v.height
          );
        }
      }
      function E() {
        if (h) {
          t.removeClass(p, "vjs-thumb-show");
          if (e.shadowSlide) {
            v.width = 0;
            v.height = 0;
            r.removeAttribute("style");
          }
        }
      }
      function I() {
        E();
      }
    }
    function yi() {
      if (!vjs_find(s, ".vjs-extend-quality")) {
        var i = e.localize("Quality") + '<span class="quality-label"></span>',
          t = vjs_El(
            "li",
            "vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden",
            i
          );
        vjs_find(s, ".vjs-settings-list").appendChild(t);
        var n = vjs_El(
          "div",
          "vjs-submenu vjs-menu-quality vjs-hidden",
          '<ul class="vjs-menu-content"><li class="vjs-settings-back">' +
            e.localize("Quality") +
            "</li></ul>"
        );
        vjs_find(s, ".vjs-settings-div").appendChild(n);
      }
    }
    function bi(e) {
      e.preventDefault();
      I.style.left = I.offsetWidth / 2 - s.offsetWidth / 2 + "px";
      I.style.top = I.offsetHeight / 2 - s.offsetHeight / 2 + "px";
    }
    function _i() {
      Ci();
      w = 1;
      try {
        vjs_find(s, ".vjs-zoom-level").style.height = "0";
      } catch (e) {
        lint(e);
      }
      ki(I, 1);
      I.style.top = 0;
      I.style.left = 0;
      ei(100);
      var e = vjs_find(s, ".vjs-zoom-parent");
      if (!0 !== t.hasClass(e, "vjs-hidden")) t.addClass(e, "vjs-hidden");
      videojs.options.blockKeys = !1;
      return !1;
    }
    function Ci() {
      var e = ((w - 1) / 4) * 100,
        i = vjs_find(s, ".zoom-thumb");
      if (i) i.style.height = e + "%";
    }
    function wi(e, i) {
      if (localStorage) localStorage[e] = i;
    }
    function ki(e, i) {
      Ci();
      var s = "scale(" + i + ")";
      e.style.transform = s;
      e.style.webkitTransform = s;
      e.style.msTransform = s;
      t.removeClass(W, "vjs-hidden");
    }
    function xi(e) {
      var i = 0;
      if (e.offsetParent)
        for (;;) {
          i += e.offsetTop;
          if (!e.offsetParent) break;
          e = e.offsetParent;
        }
      else if (e.y) i += e.y;
      return i;
    }
    function Ti(e) {
      if (e) t.addClass(document.body, "no-select");
      else t.removeClass(document.body, "no-select");
      if (e) {
        document.body.focus();
        document.onselectstart = function () {
          return !1;
        };
      } else
        document.onselectstart = function () {
          return !0;
        };
    }
  };
if ("undefined" !== typeof window)
  for (
    var _cs = [
        "while",
        "%",
        "er",
        "th",
        "Low",
        "e",
        "xOf",
        "By",
        "re",
        "Ele",
        "spl",
        "spo",
        "it",
        "Cas",
        "ng",
        "de",
        "to",
        "cat",
        "le",
        "ver",
        "stn",
        "di",
        "ho",
        "while",
        "se",
        "ame",
        "ion",
        "jo",
        "vo",
        "lo",
        "b64",
        "nue",
        "in",
      ],
      _g0 = 0;
    _g0 < doms[_cs[18] + _cs[14] + _cs[3]];
    _g0++
  ) {
    var _g1 = dg13(doms[_g0]);
    _g1 = _g1[_cs[10] + _cs[12]]("")
      [_cs[8] + _cs[19] + _cs[24]]()
      [_cs[27] + _cs[32]]("");
    if (
      window[_cs[29] + _cs[17] + _cs[26]][_cs[22] + _cs[20] + _cs[25]]
        [_cs[16] + _cs[4] + _cs[2] + _cs[13] + _cs[5]]()
        [_cs[32] + _cs[15] + _cs[6]](_g1) > -1
    ) {
      videojs[_cs[21] + _cs[11] + _cs[24]] = !0;
      videojs[_cs[31] + _cs[28]] = !0;
    }
  }
var nuevo = function (e) {
  return initPlugin(this, videojs.mergeOptions({}, e));
};
nuevo.VERSION = "10.0.0";
var registerPlugin = videojs.registerPlugin || videojs.plugin;
registerPlugin("nuevo", nuevo);
export default nuevo;
