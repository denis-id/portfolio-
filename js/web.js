(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [657],
  {
    5552: function (e, t, n) {
      "use strict";
      var r = n(7051),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var o = p(n);
            o && o !== h && e(t, o, r);
          }
          var a = c(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), g = l(n), m = 0; m < a.length; ++m) {
            var v = a[m];
            if (!i[v] && !(r && r[v]) && !(g && g[v]) && !(s && s[v])) {
              var y = f(n, v);
              try {
                u(t, v, y);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    5487: function (e, t, n) {
      "use strict";
      n.d(t, {
        $G: function () {
          return r.$G;
        },
      });
      var r = n(6343),
        o = n(2265);
      n(5552),
        "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        n(1505),
        o.createElement;
    },
    703: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(7447),
        o = n.n(r);
    },
    7907: function (e, t, n) {
      "use strict";
      var r = n(5313);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    1749: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(6921),
        o = n(1884),
        i = n(7437),
        a = o._(n(2265)),
        s = r._(n(4887)),
        l = r._(n(2251)),
        u = n(8630),
        c = n(6906),
        d = n(337);
      n(6184);
      let f = n(6993),
        p = r._(n(536)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/assets/image",
          loader: "default",
          dangerouslyAllowWEBP: !1,
          unoptimized: !1,
        };
      function g(e, t, n, r, o, i) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function m(e) {
        let [t, n] = a.version.split(".", 2),
          r = parseInt(t, 10),
          o = parseInt(n, 10);
        return r > 18 || (18 === r && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis._ASSETS_IMAGE_IMPORTED = !0);
      let v = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: s,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: h,
          unoptimized: v,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: S,
          onLoad: E,
          onError: k,
          ...C
        } = e;
        return (0, i.jsx)("img", {
          ...C,
          ...m(f),
          loading: h,
          width: l,
          height: s,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (k && (e.src = e.src), e.complete && g(e, p, b, w, x, v));
            },
            [n, p, b, w, x, k, v, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, p, b, w, x, v);
          },
          onError: (e) => {
            S(!0), "empty" !== p && x(!0), k && k(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...m(n.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(n.src, r), null)
          : (0, i.jsx)(l.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(f.RouterContext),
          r = (0, a.useContext)(d.ImageConfigContext),
          o = (0, a.useMemo)(() => {
            let e = h || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: s, onLoadingComplete: l } = e,
          g = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          g.current = s;
        }, [s]);
        let m = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          m.current = l;
        }, [l]);
        let [b, w] = (0, a.useState)(!1),
          [x, S] = (0, a.useState)(!1),
          { props: E, meta: k } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: b,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v, {
              ...E,
              unoptimized: k.unoptimized,
              placeholder: k.placeholder,
              fill: k.fill,
              onLoadRef: g,
              onLoadingCompleteRef: m,
              setBlurComplete: w,
              setShowAltText: S,
              ref: t,
            }),
            k.priority
              ? (0, i.jsx)(y, { isAppRouter: !n, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5827: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(6921)._(n(2265)).default.createContext({});
    },
    3044: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8630: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        n(6184);
      let r = n(7160),
        o = n(6906);
      function i(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var n;
        let s,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: h,
            className: g,
            quality: m,
            width: v,
            height: y,
            fill: b = !1,
            style: w,
            onLoad: x,
            onLoadingComplete: S,
            placeholder: E = "empty",
            blurDataURL: k,
            fetchPriority: C,
            layout: O,
            objectFit: P,
            objectPosition: R,
            lazyBoundary: L,
            lazyRoot: N,
            ...j
          } = e,
          { imgConf: T, showAltText: A, blurComplete: $, defaultLoader: I } = t,
          M = T || o.imageConfigDefault;
        if ("allSizes" in M) s = M;
        else {
          let e = [...M.deviceSizes, ...M.imageSizes].sort((e, t) => e - t),
            t = M.deviceSizes.sort((e, t) => e - t);
          s = { ...M, allSizes: e, deviceSizes: t };
        }
        let _ = j.loader || I;
        delete j.loader, delete j.srcSet;
        let D = "_assets_img_default" in _;
        if (D) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = _;
          _ = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          "fill" === O && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !d && (d = t);
        }
        let z = "",
          F = a(v),
          V = a(y);
        if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (k = k || e.blurDataURL),
            (z = e.src),
            !b)
          ) {
            if (F || V) {
              if (F && !V) {
                let t = F / e.width;
                V = Math.round(e.height * t);
              } else if (!F && V) {
                let t = V / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (V = e.height);
          }
        }
        let H = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : z) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (H = !1)),
          s.unoptimized && (f = !0),
          D && c.endsWith(".webp") && !s.dangerouslyAllowWEBP && (f = !0),
          p && (C = "high");
        let B = a(m),
          W = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: P,
                  objectPosition: R,
                }
              : {},
            A ? {} : { color: "transparent" },
            w
          ),
          U =
            $ || "empty" === E
              ? null
              : "blur" === E
              ? 'url("data:image/webp;charset=utf-8,' +
                (0, r.getImageBlurWEBP)({
                  widthInt: F,
                  heightInt: V,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: k || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
          K = U
            ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: U,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: a,
              loader: s,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, a),
              c = l.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: l
                .map(
                  (e, r) =>
                    s({ config: t, src: n, quality: i, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u
                )
                .join(", "),
              src: s({ config: t, src: n, quality: i, width: l[c] }),
            };
          })({
            config: s,
            src: c,
            unoptimized: f,
            width: F,
            quality: B,
            sizes: d,
            loader: _,
          });
        return {
          props: {
            ...j,
            loading: H ? "lazy" : h,
            fetchPriority: C,
            width: F,
            height: V,
            decoding: "async",
            className: g,
            style: { ...W, ...K },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: Z.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: E, fill: b },
        };
      }
    },
    2251: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return d;
          },
          default: function () {
            return g;
          },
        });
      let r = n(6921),
        o = n(1884),
        i = n(7437),
        a = o._(n(2265)),
        s = r._(n(7392)),
        l = n(5827),
        u = n(7484),
        c = n(3044);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(6184);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(l.AmpStateContext),
          r = (0, a.useContext)(u.HeadManagerContext);
        return (0, i.jsx)(s.default, {
          reduceComponentsToState: h,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7160: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = e,
          s = r ? 40 * r : t,
          l = o ? 40 * o : n,
          u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
         
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurwebp", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    337: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(6921)._(n(2265)),
        o = n(6906),
        i = r.default.createContext(o.imageConfigDefault);
    },
    6906: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/assets/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowWEBP: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    7447: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getImageProps: function () {
            return s;
          },
          default: function () {
            return l;
          },
        });
      let r = n(6921),
        o = n(8630),
        i = n(1749),
        a = r._(n(536)),
        s = (e) => {
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/assets/image",
              loader: "default",
              dangerouslyAllowWEBP: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        l = i.Image;
    },
    536: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n._assets_img_default = !0);
      let r = n;
    },
    6993: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(6921)._(n(2265)).default.createContext(null);
    },
    7392: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        a = o ? () => {} : r.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function s() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        if (o) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            s();
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    576: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case m:
                    case g:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function S(e) {
        return x(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = g),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return S(e) || x(e) === c;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return x(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return x(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return x(e) === f;
        }),
        (t.isFragment = function (e) {
          return x(e) === i;
        }),
        (t.isLazy = function (e) {
          return x(e) === m;
        }),
        (t.isMemo = function (e) {
          return x(e) === g;
        }),
        (t.isPortal = function (e) {
          return x(e) === o;
        }),
        (t.isProfiler = function (e) {
          return x(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return x(e) === a;
        }),
        (t.isSuspense = function (e) {
          return x(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === d ||
            e === s ||
            e === a ||
            e === p ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === g ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = x);
    },
    7051: function (e, t, n) {
      "use strict";
      e.exports = n(576);
    },
    2377: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    2110: function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    1266: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var r = n(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return (0, r.useCallback)(o(...e), e);
      }
    },
    3959: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        VY: function () {
          return nV;
        },
        ZA: function () {
          return nB;
        },
        JO: function () {
          return nz;
        },
        ck: function () {
          return nU;
        },
        wU: function () {
          return nZ;
        },
        eT: function () {
          return nK;
        },
        __: function () {
          return nW;
        },
        h_: function () {
          return nF;
        },
        fC: function () {
          return nM;
        },
        $G: function () {
          return nJ;
        },
        u_: function () {
          return nq;
        },
        Z0: function () {
          return nG;
        },
        xz: function () {
          return n_;
        },
        B4: function () {
          return nD;
        },
        l_: function () {
          return nH;
        },
      });
      var i,
        a,
        s,
        l,
        u,
        c,
        d = n(2110),
        f = n(2265),
        p = n.t(f, 2),
        h = n(4887);
      function g(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      function m(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function v(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => (0, f.createContext)(e));
            return function (n) {
              let r = (null == n ? void 0 : n[e]) || t;
              return (0, f.useMemo)(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let o = (0, f.createContext)(r),
                i = n.length;
              function a(t) {
                let { scope: n, children: r, ...a } = t,
                  s = (null == n ? void 0 : n[e][i]) || o,
                  l = (0, f.useMemo)(() => a, Object.values(a));
                return (0, f.createElement)(s.Provider, { value: l }, r);
              }
              return (
                (n = [...n, r]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, a) {
                    let s = (null == a ? void 0 : a[e][i]) || o,
                      l = (0, f.useContext)(s);
                    if (l) return l;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, f.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }
      var y = n(1266),
        b = n(9143);
      let w = (0, f.createContext)(void 0),
        x = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "webp",
          "ul",
        ].reduce((e, t) => {
          let n = (0, f.forwardRef)((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? b.g7 : t;
            return (
              (0, f.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, f.createElement)(i, (0, d.Z)({}, o, { ref: n }))
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function S(e) {
        let t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }),
          (0, f.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      let E = "dismissableLayer.update",
        k = (0, f.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        C = (0, f.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              onFocusOutside: s,
              onInteractOutside: l,
              onDismiss: u,
              ...c
            } = e,
            p = (0, f.useContext)(k),
            [h, g] = (0, f.useState)(null),
            v =
              null !== (n = null == h ? void 0 : h.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, b] = (0, f.useState)({}),
            w = (0, y.e)(t, (e) => g(e)),
            C = Array.from(p.layers),
            [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            L = C.indexOf(R),
            N = h ? C.indexOf(h) : -1,
            j = p.layersWithOutsidePointerEventsDisabled.size > 0,
            T = N >= L,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = S(e),
                r = (0, f.useRef)(!1),
                o = (0, f.useRef)(() => {});
              return (
                (0, f.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function i() {
                          P("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = i),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : i();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...p.branches].some((e) => e.contains(t));
              !T ||
                n ||
                (null == a || a(e),
                null == l || l(e),
                e.defaultPrevented || null == u || u());
            }, v),
            $ = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = S(e),
                r = (0, f.useRef)(!1);
              return (
                (0, f.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      P(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...p.branches].some((e) => e.contains(t)) ||
                (null == s || s(e),
                null == l || l(e),
                e.defaultPrevented || null == u || u());
            }, v);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = S(e);
              (0, f.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              N !== p.layers.size - 1 ||
                (null == i || i(e),
                !e.defaultPrevented && u && (e.preventDefault(), u()));
            }, v),
            (0, f.useEffect)(() => {
              if (h)
                return (
                  o &&
                    (0 === p.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = v.body.style.pointerEvents),
                      (v.body.style.pointerEvents = "none")),
                    p.layersWithOutsidePointerEventsDisabled.add(h)),
                  p.layers.add(h),
                  O(),
                  () => {
                    o &&
                      1 === p.layersWithOutsidePointerEventsDisabled.size &&
                      (v.body.style.pointerEvents = r);
                  }
                );
            }, [h, v, o, p]),
            (0, f.useEffect)(
              () => () => {
                h &&
                  (p.layers.delete(h),
                  p.layersWithOutsidePointerEventsDisabled.delete(h),
                  O());
              },
              [h, p]
            ),
            (0, f.useEffect)(() => {
              let e = () => b({});
              return (
                document.addEventListener(E, e),
                () => document.removeEventListener(E, e)
              );
            }, []),
            (0, f.createElement)(
              x.div,
              (0, d.Z)({}, c, {
                ref: w,
                style: {
                  pointerEvents: j ? (T ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: m(e.onFocusCapture, $.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, $.onBlurCapture),
                onPointerDownCapture: m(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function O() {
        let e = new CustomEvent(E);
        document.dispatchEvent(e);
      }
      function P(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && (0, h.flushSync)(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      let R = 0;
      function L() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      let N = "focusScope.autoFocusOnMount",
        j = "focusScope.autoFocusOnUnmount",
        T = { bubbles: !1, cancelable: !0 },
        A = (0, f.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...a
            } = e,
            [s, l] = (0, f.useState)(null),
            u = S(o),
            c = S(i),
            p = (0, f.useRef)(null),
            h = (0, y.e)(t, (e) => l(e)),
            g = (0, f.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, f.useEffect)(() => {
            if (r) {
              function e(e) {
                if (g.paused || !s) return;
                let t = e.target;
                s.contains(t) ? (p.current = t) : M(p.current, { select: !0 });
              }
              function t(e) {
                if (g.paused || !s) return;
                let t = e.relatedTarget;
                null === t || s.contains(t) || M(p.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && M(s);
              });
              return (
                s && n.observe(s, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, s, g.paused]),
            (0, f.useEffect)(() => {
              if (s) {
                _.add(g);
                let e = document.activeElement;
                if (!s.contains(e)) {
                  let t = new CustomEvent(N, T);
                  s.addEventListener(N, u),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (M(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        $(s).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && M(s));
                }
                return () => {
                  s.removeEventListener(N, u),
                    setTimeout(() => {
                      let t = new CustomEvent(j, T);
                      s.addEventListener(j, c),
                        s.dispatchEvent(t),
                        t.defaultPrevented ||
                          M(null != e ? e : document.body, { select: !0 }),
                        s.removeEventListener(j, c),
                        _.remove(g);
                    }, 0);
                };
              }
            }, [s, u, c, g]);
          let m = (0, f.useCallback)(
            (e) => {
              if ((!n && !r) || g.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = $(e);
                    return [I(t, e), I(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && M(i, { select: !0 }))
                    : (e.preventDefault(), n && M(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, g.paused]
          );
          return (0, f.createElement)(
            x.div,
            (0, d.Z)({ tabIndex: -1 }, a, { ref: h, onKeyDown: m })
          );
        });
      function $(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function I(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function M(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let _ =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = D(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = D(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function D(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let z = (null == globalThis ? void 0 : globalThis.document)
          ? f.useLayoutEffect
          : () => {},
        F = p["useId".toString()] || (() => void 0),
        V = 0;
      function H(e) {
        let [t, n] = f.useState(F());
        return (
          z(() => {
            e || n((e) => (null != e ? e : String(V++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let B = ["top", "right", "bottom", "left"],
        W = Math.min,
        U = Math.max,
        K = Math.round,
        Z = Math.floor,
        q = (e) => ({ x: e, y: e }),
        J = { left: "right", right: "left", bottom: "top", top: "bottom" },
        G = { start: "end", end: "start" };
      function Y(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function X(e) {
        return e.split("-")[0];
      }
      function Q(e) {
        return e.split("-")[1];
      }
      function ee(e) {
        return "x" === e ? "y" : "x";
      }
      function et(e) {
        return "y" === e ? "height" : "width";
      }
      function en(e) {
        return ["top", "bottom"].includes(X(e)) ? "y" : "x";
      }
      function er(e) {
        return e.replace(/start|end/g, (e) => G[e]);
      }
      function eo(e) {
        return e.replace(/left|right|bottom|top/g, (e) => J[e]);
      }
      function ei(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function ea(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function es(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          a = en(t),
          s = ee(en(t)),
          l = et(s),
          u = X(t),
          c = "y" === a,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[l] / 2 - i[l] / 2;
        switch (u) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (Q(t)) {
          case "start":
            r[s] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[s] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let el = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: a,
          } = n,
          s = i.filter(Boolean),
          l = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          u = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = es(u, r, l),
          f = r,
          p = {},
          h = 0;
        for (let n = 0; n < s.length; n++) {
          let { name: i, fn: g } = s[n],
            {
              x: m,
              y: v,
              data: y,
              reset: b,
            } = await g({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (c = null != m ? m : c),
            (d = null != v ? v : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            b &&
              h <= 50 &&
              (h++,
              "object" == typeof b &&
                (b.placement && (f = b.placement),
                b.rects &&
                  (u =
                    !0 === b.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: c, y: d } = es(u, f, l))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function eu(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: a, elements: s, strategy: l } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = Y(t, e),
          h = ei(p),
          g = s[f ? ("floating" === d ? "reference" : "floating") : d],
          m = ea(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(s.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: l,
            })
          ),
          v =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(s.floating)),
          b = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          w = ea(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: v,
                  offsetParent: y,
                  strategy: l,
                })
              : v
          );
        return {
          top: (m.top - w.top + h.top) / b.y,
          bottom: (w.bottom - m.bottom + h.bottom) / b.y,
          left: (m.left - w.left + h.left) / b.x,
          right: (w.right - m.right + h.right) / b.x,
        };
      }
      function ec(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ed(e) {
        return B.some((t) => e[t] >= 0);
      }
      async function ef(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          a = X(n),
          s = Q(n),
          l = "y" === en(n),
          u = ["left", "top"].includes(a) ? -1 : 1,
          c = i && l ? -1 : 1,
          d = Y(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: h,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          s && "number" == typeof h && (p = "end" === s ? -1 * h : h),
          l ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
        );
      }
      function ep(e) {
        return em(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function eh(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function eg(e) {
        var t;
        return null ==
          (t = (em(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function em(e) {
        return e instanceof Node || e instanceof eh(e).Node;
      }
      function ev(e) {
        return e instanceof Element || e instanceof eh(e).Element;
      }
      function ey(e) {
        return e instanceof HTMLElement || e instanceof eh(e).HTMLElement;
      }
      function eb(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof eh(e).ShadowRoot)
        );
      }
      function ew(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = ek(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function ex(e) {
        let t = eS(),
          n = ek(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function eS() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function eE(e) {
        return ["html", "body", "#document"].includes(ep(e));
      }
      function ek(e) {
        return eh(e).getComputedStyle(e);
      }
      function eC(e) {
        return ev(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function eO(e) {
        if ("html" === ep(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eb(e) && e.host) || eg(e);
        return eb(t) ? t.host : t;
      }
      function eP(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = eO(t);
            return eE(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : ey(n) && ew(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = eh(o);
        return i
          ? t.concat(
              a,
              a.visualViewport || [],
              ew(o) ? o : [],
              a.frameElement && n ? eP(a.frameElement) : []
            )
          : t.concat(o, eP(o, [], n));
      }
      function eR(e) {
        let t = ek(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = ey(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = K(n) !== i || K(r) !== a;
        return s && ((n = i), (r = a)), { width: n, height: r, $: s };
      }
      function eL(e) {
        return ev(e) ? e : e.contextElement;
      }
      function eN(e) {
        let t = eL(e);
        if (!ey(t)) return q(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eR(t),
          a = (i ? K(n.width) : n.width) / r,
          s = (i ? K(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        );
      }
      let ej = q(0);
      function eT(e) {
        let t = eh(e);
        return eS() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : ej;
      }
      function eA(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          a = eL(e),
          s = q(1);
        t && (r ? ev(r) && (s = eN(r)) : (s = eN(e)));
        let l = (void 0 === (o = n) && (o = !1), r && (!o || r === eh(a)) && o)
            ? eT(a)
            : q(0),
          u = (i.left + l.x) / s.x,
          c = (i.top + l.y) / s.y,
          d = i.width / s.x,
          f = i.height / s.y;
        if (a) {
          let e = eh(a),
            t = r && ev(r) ? eh(r) : r,
            n = e,
            o = n.frameElement;
          for (; o && r && t !== n; ) {
            let e = eN(o),
              t = o.getBoundingClientRect(),
              r = ek(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (u *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (u += i),
              (c += a),
              (o = (n = eh(o)).frameElement);
          }
        }
        return ea({ width: d, height: f, x: u, y: c });
      }
      let e$ = [":popover-open", ":modal"];
      function eI(e) {
        return e$.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eM(e) {
        return eA(eg(e)).left + eC(e).scrollLeft;
      }
      function e_(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = eh(e),
              r = eg(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              s = 0,
              l = 0;
            if (o) {
              (i = o.width), (a = o.height);
              let e = eS();
              (!e || (e && "fixed" === t)) &&
                ((s = o.offsetLeft), (l = o.offsetTop));
            }
            return { width: i, height: a, x: s, y: l };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = eg(e),
              n = eC(e),
              r = e.ownerDocument.body,
              o = U(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = U(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + eM(e),
              s = -n.scrollTop;
            return (
              "rtl" === ek(r).direction &&
                (a += U(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: s }
            );
          })(eg(e));
        else if (ev(t))
          r = (function (e, t) {
            let n = eA(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = ey(e) ? eN(e) : q(1),
              a = e.clientWidth * i.x;
            return {
              width: a,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = eT(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return ea(r);
      }
      function eD(e) {
        return "static" === ek(e).position;
      }
      function ez(e, t) {
        return ey(e) && "fixed" !== ek(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function eF(e, t) {
        let n = eh(e);
        if (eI(e)) return n;
        if (!ey(e)) {
          let t = eO(e);
          for (; t && !eE(t); ) {
            if (ev(t) && !eD(t)) return t;
            t = eO(t);
          }
          return n;
        }
        let r = ez(e, t);
        for (; r && ["table", "td", "th"].includes(ep(r)) && eD(r); )
          r = ez(r, t);
        return r && eE(r) && eD(r) && !ex(r)
          ? n
          : r ||
              (function (e) {
                let t = eO(e);
                for (; ey(t) && !eE(t); ) {
                  if (ex(t)) return t;
                  t = eO(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eV = async function (e) {
          let t = this.getOffsetParent || eF,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = ey(t),
                o = eg(t),
                i = "fixed" === n,
                a = eA(e, !0, i, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                l = q(0);
              if (r || (!r && !i)) {
                if ((("body" !== ep(t) || ew(o)) && (s = eC(t)), r)) {
                  let e = eA(t, !0, i, t);
                  (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                } else o && (l.x = eM(o));
              }
              return {
                x: a.left + s.scrollLeft - l.x,
                y: a.top + s.scrollTop - l.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eH = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              a = eg(r),
              s = !!t && eI(t.floating);
            if (r === a || (s && i)) return n;
            let l = { scrollLeft: 0, scrollTop: 0 },
              u = q(1),
              c = q(0),
              d = ey(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== ep(r) || ew(a)) && (l = eC(r)), ey(r))
            ) {
              let e = eA(r);
              (u = eN(r)),
                (c.x = e.x + r.clientLeft),
                (c.y = e.y + r.clientTop);
            }
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - l.scrollLeft * u.x + c.x,
              y: n.y * u.y - l.scrollTop * u.y + c.y,
            };
          },
          getDocumentElement: eg,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? eI(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eP(e, [], !1).filter(
                            (e) => ev(e) && "body" !== ep(e)
                          ),
                          o = null,
                          i = "fixed" === ek(e).position,
                          a = i ? eO(e) : e;
                        for (; ev(a) && !eE(a); ) {
                          let t = ek(a),
                            n = ex(a);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (ew(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = eO(t);
                                      return (
                                        !(r === n || !ev(r) || eE(r)) &&
                                        ("fixed" === ek(r).position || e(r, n))
                                      );
                                    })(e, a))
                            )
                              ? (r = r.filter((e) => e !== a))
                              : (o = t),
                            (a = eO(a));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = i[0],
              s = i.reduce((e, n) => {
                let r = e_(t, n, o);
                return (
                  (e.top = U(r.top, e.top)),
                  (e.right = W(r.right, e.right)),
                  (e.bottom = W(r.bottom, e.bottom)),
                  (e.left = U(r.left, e.left)),
                  e
                );
              }, e_(t, a, o));
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: eF,
          getElementRects: eV,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eR(e);
            return { width: t, height: n };
          },
          getScale: eN,
          isElement: ev,
          isRTL: function (e) {
            return "rtl" === ek(e).direction;
          },
        },
        eB = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: s,
                middlewareData: l,
              } = t,
              { element: u, padding: c = 0 } = Y(e, t) || {};
            if (null == u) return {};
            let d = ei(c),
              f = { x: n, y: r },
              p = ee(en(o)),
              h = et(p),
              g = await a.getDimensions(u),
              m = "y" === p,
              v = m ? "clientHeight" : "clientWidth",
              y = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              b = f[p] - i.reference[p],
              w = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(u)),
              x = w ? w[v] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(w)))) ||
              (x = s.floating[v] || i.floating[h]);
            let S = x / 2 - g[h] / 2 - 1,
              E = W(d[m ? "top" : "left"], S),
              k = W(d[m ? "bottom" : "right"], S),
              C = x - g[h] - k,
              O = x / 2 - g[h] / 2 + (y / 2 - b / 2),
              P = U(E, W(O, C)),
              R =
                !l.arrow &&
                null != Q(o) &&
                O !== P &&
                i.reference[h] / 2 - (O < E ? E : k) - g[h] / 2 < 0,
              L = R ? (O < E ? O - E : O - C) : 0;
            return {
              [p]: f[p] + L,
              data: {
                [p]: P,
                centerOffset: O - P - L,
                ...(R && { alignmentOffset: L }),
              },
              reset: R,
            };
          },
        }),
        eW = (e, t, n) => {
          let r = new Map(),
            o = { platform: eH, ...n },
            i = { ...o.platform, _c: r };
          return el(e, t, { ...o, platform: i });
        },
        eU = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eB({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eB({ element: n, padding: r }).fn(t)
              : {};
          },
        });
      var eK = "undefined" != typeof document ? f.useLayoutEffect : f.useEffect;
      function eZ(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eZ(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eZ(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eq(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eJ(e, t) {
        let n = eq(e);
        return Math.round(t * n) / n;
      }
      function eG(e) {
        let t = f.useRef(e);
        return (
          eK(() => {
            t.current = e;
          }),
          t
        );
      }
      let eY = (0, f.forwardRef)((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, f.createElement)(
            x.WEBP,
            (0, d.Z)({}, i, {
              ref: t,
              width: r,
              height: o,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            e.asChild
              ? n
              : (0, f.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        eX = "Popper",
        [eQ, e0] = v(eX),
        [e1, e2] = eQ(eX),
        e3 = (0, f.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            i = e2("PopperAnchor", n),
            a = (0, f.useRef)(null),
            s = (0, y.e)(t, a);
          return (
            (0, f.useEffect)(() => {
              i.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r ? null : (0, f.createElement)(x.div, (0, d.Z)({}, o, { ref: s }))
          );
        }),
        e6 = "PopperContent",
        [e8, e5] = eQ(e6),
        e4 = (0, f.forwardRef)((e, t) => {
          var n, r, o, i, a, s, l, u, c, p, g, m, v, b;
          let {
              __scopePopper: w,
              side: E = "bottom",
              sideOffset: k = 0,
              align: C = "center",
              alignOffset: O = 0,
              arrowPadding: P = 0,
              avoidCollisions: R = !0,
              collisionBoundary: L = [],
              collisionPadding: N = 0,
              sticky: j = "partial",
              hideWhenDetached: T = !1,
              updatePositionStrategy: A = "optimized",
              onPlaced: $,
              ...I
            } = e,
            M = e2(e6, w),
            [_, D] = (0, f.useState)(null),
            F = (0, y.e)(t, (e) => D(e)),
            [V, H] = (0, f.useState)(null),
            B = (function (e) {
              let [t, n] = (0, f.useState)(void 0);
              return (
                z(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(V),
            K =
              null !== (n = null == B ? void 0 : B.width) && void 0 !== n
                ? n
                : 0,
            q =
              null !== (r = null == B ? void 0 : B.height) && void 0 !== r
                ? r
                : 0,
            J =
              "number" == typeof N
                ? N
                : { top: 0, right: 0, bottom: 0, left: 0, ...N },
            G = Array.isArray(L) ? L : [L],
            ei = G.length > 0,
            ea = { padding: J, boundary: G.filter(e9), altBoundary: ei },
            {
              refs: es,
              floatingStyles: el,
              placement: ep,
              isPositioned: eh,
              middlewareData: em,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: i, floating: a } = {},
                  transform: s = !0,
                  whileElementsMounted: l,
                  open: u,
                } = e,
                [c, d] = f.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, g] = f.useState(r);
              eZ(p, r) || g(r);
              let [m, v] = f.useState(null),
                [y, b] = f.useState(null),
                w = f.useCallback((e) => {
                  e !== k.current && ((k.current = e), v(e));
                }, []),
                x = f.useCallback((e) => {
                  e !== C.current && ((C.current = e), b(e));
                }, []),
                S = i || m,
                E = a || y,
                k = f.useRef(null),
                C = f.useRef(null),
                O = f.useRef(c),
                P = null != l,
                R = eG(l),
                L = eG(o),
                N = f.useCallback(() => {
                  if (!k.current || !C.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  L.current && (e.platform = L.current),
                    eW(k.current, C.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      j.current &&
                        !eZ(O.current, t) &&
                        ((O.current = t),
                        h.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, L]);
              eK(() => {
                !1 === u &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [u]);
              let j = f.useRef(!1);
              eK(
                () => (
                  (j.current = !0),
                  () => {
                    j.current = !1;
                  }
                ),
                []
              ),
                eK(() => {
                  if ((S && (k.current = S), E && (C.current = E), S && E)) {
                    if (R.current) return R.current(S, E, N);
                    N();
                  }
                }, [S, E, N, R, P]);
              let T = f.useMemo(
                  () => ({
                    reference: k,
                    floating: C,
                    setReference: w,
                    setFloating: x,
                  }),
                  [w, x]
                ),
                A = f.useMemo(() => ({ reference: S, floating: E }), [S, E]),
                $ = f.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!A.floating) return e;
                  let t = eJ(A.floating, c.x),
                    r = eJ(A.floating, c.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eq(A.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, s, A.floating, c.x, c.y]);
              return f.useMemo(
                () => ({
                  ...c,
                  update: N,
                  refs: T,
                  elements: A,
                  floatingStyles: $,
                }),
                [c, N, T, A, $]
              );
            })({
              strategy: "fixed",
              placement: E + ("center" !== C ? "-" + C : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: a = !0,
                      elementResize: s = "function" == typeof ResizeObserver,
                      layoutShift: l = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: u = !1,
                    } = r,
                    c = eL(e),
                    d = i || a ? [...(c ? eP(c) : []), ...eP(t)] : [];
                  d.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      a && e.addEventListener("resize", n);
                  });
                  let f =
                      c && l
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = eg(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function a(s, l) {
                                void 0 === s && (s = !1),
                                  void 0 === l && (l = 1),
                                  i();
                                let {
                                  left: u,
                                  top: c,
                                  width: d,
                                  height: f,
                                } = e.getBoundingClientRect();
                                if ((s || t(), !d || !f)) return;
                                let p = Z(c),
                                  h = Z(o.clientWidth - (u + d)),
                                  g = {
                                    rootMargin:
                                      -p +
                                      "px " +
                                      -h +
                                      "px " +
                                      -Z(o.clientHeight - (c + f)) +
                                      "px " +
                                      -Z(u) +
                                      "px",
                                    threshold: U(0, W(1, l)) || 1,
                                  },
                                  m = !0;
                                function v(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== l) {
                                    if (!m) return a();
                                    t
                                      ? a(!1, t)
                                      : (n = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  m = !1;
                                }
                                try {
                                  r = new IntersectionObserver(v, {
                                    ...g,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(v, g);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(c, n)
                        : null,
                    p = -1,
                    h = null;
                  s &&
                    ((h = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === c &&
                        h &&
                        (h.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = h) || e.observe(t);
                        }))),
                        n();
                    })),
                    c && !u && h.observe(c),
                    h.observe(t));
                  let g = u ? eA(e) : null;
                  return (
                    u &&
                      (function t() {
                        let r = eA(e);
                        g &&
                          (r.x !== g.x ||
                            r.y !== g.y ||
                            r.width !== g.width ||
                            r.height !== g.height) &&
                          n(),
                          (g = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          a && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = h) || e.disconnect(),
                        (h = null),
                        u && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === A }),
              elements: { reference: M.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (c = { mainAxis: k + q, alignmentAxis: O }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: o, placement: i, middlewareData: a } = e,
                      s = await ef(e, c);
                    return i ===
                      (null == (t = a.offset) ? void 0 : t.placement) &&
                      null != (n = a.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + s.x,
                          y: o + s.y,
                          data: { ...s, placement: i },
                        };
                  },
                },
                R && {
                  name: "shift",
                  options: (g = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === j
                        ? (void 0 === p && (p = {}),
                          {
                            options: p,
                            fn(e) {
                              let {
                                  x: t,
                                  y: n,
                                  placement: r,
                                  rects: o,
                                  middlewareData: i,
                                } = e,
                                {
                                  offset: a = 0,
                                  mainAxis: s = !0,
                                  crossAxis: l = !0,
                                } = Y(p, e),
                                u = { x: t, y: n },
                                c = en(r),
                                d = ee(c),
                                f = u[d],
                                h = u[c],
                                g = Y(a, e),
                                m =
                                  "number" == typeof g
                                    ? { mainAxis: g, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...g };
                              if (s) {
                                let e = "y" === d ? "height" : "width",
                                  t =
                                    o.reference[d] - o.floating[e] + m.mainAxis,
                                  n =
                                    o.reference[d] +
                                    o.reference[e] -
                                    m.mainAxis;
                                f < t ? (f = t) : f > n && (f = n);
                              }
                              if (l) {
                                var v, y;
                                let e = "y" === d ? "width" : "height",
                                  t = ["top", "left"].includes(X(r)),
                                  n =
                                    o.reference[c] -
                                    o.floating[e] +
                                    ((t &&
                                      (null == (v = i.offset)
                                        ? void 0
                                        : v[c])) ||
                                      0) +
                                    (t ? 0 : m.crossAxis),
                                  a =
                                    o.reference[c] +
                                    o.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (y = i.offset)
                                          ? void 0
                                          : y[c]) || 0) -
                                    (t ? m.crossAxis : 0);
                                h < n ? (h = n) : h > a && (h = a);
                              }
                              return { [d]: f, [c]: h };
                            },
                          })
                        : void 0,
                    ...ea,
                  }),
                  async fn(e) {
                    let { x: t, y: n, placement: r } = e,
                      {
                        mainAxis: o = !0,
                        crossAxis: i = !1,
                        limiter: a = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...s
                      } = Y(g, e),
                      l = { x: t, y: n },
                      u = await eu(e, s),
                      c = en(X(r)),
                      d = ee(c),
                      f = l[d],
                      p = l[c];
                    if (o) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = f + u[e],
                        r = f - u[t];
                      f = U(n, W(f, r));
                    }
                    if (i) {
                      let e = "y" === c ? "top" : "left",
                        t = "y" === c ? "bottom" : "right",
                        n = p + u[e],
                        r = p - u[t];
                      p = U(n, W(p, r));
                    }
                    let h = a.fn({ ...e, [d]: f, [c]: p });
                    return { ...h, data: { x: h.x - t, y: h.y - n } };
                  },
                },
                R && {
                  name: "flip",
                  options: (m = { ...ea }),
                  async fn(e) {
                    var t, n, r, o, i;
                    let {
                        placement: a,
                        middlewareData: s,
                        rects: l,
                        initialPlacement: u,
                        platform: c,
                        elements: d,
                      } = e,
                      {
                        mainAxis: f = !0,
                        crossAxis: p = !0,
                        fallbackPlacements: h,
                        fallbackStrategy: g = "bestFit",
                        fallbackAxisSideDirection: v = "none",
                        flipAlignment: y = !0,
                        ...b
                      } = Y(m, e);
                    if (null != (t = s.arrow) && t.alignmentOffset) return {};
                    let w = X(a),
                      x = X(u) === u,
                      S = await (null == c.isRTL
                        ? void 0
                        : c.isRTL(d.floating)),
                      E =
                        h ||
                        (x || !y
                          ? [eo(u)]
                          : (function (e) {
                              let t = eo(e);
                              return [er(e), t, er(t)];
                            })(u));
                    h ||
                      "none" === v ||
                      E.push(
                        ...(function (e, t, n, r) {
                          let o = Q(e),
                            i = (function (e, t, n) {
                              let r = ["left", "right"],
                                o = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  if (n) return t ? o : r;
                                  return t ? r : o;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(X(e), "start" === n, r);
                          return (
                            o &&
                              ((i = i.map((e) => e + "-" + o)),
                              t && (i = i.concat(i.map(er)))),
                            i
                          );
                        })(u, y, v, S)
                      );
                    let k = [u, ...E],
                      C = await eu(e, b),
                      O = [],
                      P = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                    if ((f && O.push(C[w]), p)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = Q(e),
                          o = ee(en(e)),
                          i = et(o),
                          a =
                            "x" === o
                              ? r === (n ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === r
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[i] > t.floating[i] && (a = eo(a)),
                          [a, eo(a)]
                        );
                      })(a, l, S);
                      O.push(C[e[0]], C[e[1]]);
                    }
                    if (
                      ((P = [...P, { placement: a, overflows: O }]),
                      !O.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = s.flip) ? void 0 : r.index) || 0) + 1,
                        t = k[e];
                      if (t)
                        return {
                          data: { index: e, overflows: P },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (o = P.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : o.placement;
                      if (!n)
                        switch (g) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = P.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = u;
                        }
                      if (a !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (v = {
                    ...ea,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: n,
                      availableHeight: r,
                    }) => {
                      let { width: o, height: i } = t.reference,
                        a = e.floating.style;
                      a.setProperty("--radix-popper-available-width", `${n}px`),
                        a.setProperty(
                          "--radix-popper-available-height",
                          `${r}px`
                        ),
                        a.setProperty("--radix-popper-anchor-width", `${o}px`),
                        a.setProperty("--radix-popper-anchor-height", `${i}px`);
                    },
                  }),
                  async fn(e) {
                    let t, n;
                    let {
                        placement: r,
                        rects: o,
                        platform: i,
                        elements: a,
                      } = e,
                      { apply: s = () => {}, ...l } = Y(v, e),
                      u = await eu(e, l),
                      c = X(r),
                      d = Q(r),
                      f = "y" === en(r),
                      { width: p, height: h } = o.floating;
                    "top" === c || "bottom" === c
                      ? ((t = c),
                        (n =
                          d ===
                          ((await (null == i.isRTL
                            ? void 0
                            : i.isRTL(a.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((n = c), (t = "end" === d ? "top" : "bottom"));
                    let g = h - u[t],
                      m = p - u[n],
                      y = !e.middlewareData.shift,
                      b = g,
                      w = m;
                    if (f) {
                      let e = p - u.left - u.right;
                      w = d || y ? W(m, e) : e;
                    } else {
                      let e = h - u.top - u.bottom;
                      b = d || y ? W(g, e) : e;
                    }
                    if (y && !d) {
                      let e = U(u.left, 0),
                        t = U(u.right, 0),
                        n = U(u.top, 0),
                        r = U(u.bottom, 0);
                      f
                        ? (w =
                            p -
                            2 *
                              (0 !== e || 0 !== t ? e + t : U(u.left, u.right)))
                        : (b =
                            h -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : U(u.top, u.bottom)));
                    }
                    await s({ ...e, availableWidth: w, availableHeight: b });
                    let x = await i.getDimensions(a.floating);
                    return p !== x.width || h !== x.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                V && eU({ element: V, padding: P }),
                te({ arrowWidth: K, arrowHeight: q }),
                T && {
                  name: "hide",
                  options: (b = { strategy: "referenceHidden", ...ea }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: n = "referenceHidden", ...r } = Y(b, e);
                    switch (n) {
                      case "referenceHidden": {
                        let n = ec(
                          await eu(e, { ...r, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: ed(n),
                          },
                        };
                      }
                      case "escaped": {
                        let n = ec(
                          await eu(e, { ...r, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: n, escaped: ed(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [ev, ey] = tt(ep),
            eb = S($);
          z(() => {
            eh && (null == eb || eb());
          }, [eh, eb]);
          let ew = null === (o = em.arrow) || void 0 === o ? void 0 : o.x,
            ex = null === (i = em.arrow) || void 0 === i ? void 0 : i.y,
            eS =
              (null === (a = em.arrow) || void 0 === a
                ? void 0
                : a.centerOffset) !== 0,
            [eE, ek] = (0, f.useState)();
          return (
            z(() => {
              _ && ek(window.getComputedStyle(_).zIndex);
            }, [_]),
            (0, f.createElement)(
              "div",
              {
                ref: es.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...el,
                  transform: eh ? el.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eE,
                  "--radix-popper-transform-origin": [
                    null === (s = em.transformOrigin) || void 0 === s
                      ? void 0
                      : s.x,
                    null === (l = em.transformOrigin) || void 0 === l
                      ? void 0
                      : l.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, f.createElement)(
                e8,
                {
                  scope: w,
                  placedSide: ev,
                  onArrowChange: H,
                  arrowX: ew,
                  arrowY: ex,
                  shouldHideArrow: eS,
                },
                (0, f.createElement)(
                  x.div,
                  (0, d.Z)({ "data-side": ev, "data-align": ey }, I, {
                    ref: F,
                    style: {
                      ...I.style,
                      animation: eh ? void 0 : "none",
                      opacity:
                        null !== (u = em.hide) &&
                        void 0 !== u &&
                        u.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        e7 = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function e9(e) {
        return null !== e;
      }
      let te = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: s, rects: l, middlewareData: u } = t,
            c =
              (null === (n = u.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, h] = tt(s),
            g = { start: "0%", center: "50%", end: "100%" }[h],
            m =
              (null !==
                (r = null === (o = u.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              d / 2,
            v =
              (null !==
                (i = null === (a = u.arrow) || void 0 === a ? void 0 : a.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = c ? g : `${m}px`), (b = `${-f}px`))
              : "top" === p
              ? ((y = c ? g : `${m}px`), (b = `${l.floating.height + f}px`))
              : "right" === p
              ? ((y = `${-f}px`), (b = c ? g : `${v}px`))
              : "left" === p &&
                ((y = `${l.floating.width + f}px`), (b = c ? g : `${v}px`)),
            { data: { x: y, y: b } }
          );
        },
      });
      function tt(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let tn = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = (0, f.useState)(null);
          return (0, f.createElement)(
            e1,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        tr = (0, f.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...o
          } = e;
          return r
            ? h.createPortal(
                (0, f.createElement)(x.div, (0, d.Z)({}, o, { ref: t })),
                r
              )
            : null;
        });
      function to({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [r, o] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, f.useState)(e),
              [r] = n,
              o = (0, f.useRef)(r),
              i = S(t);
            return (
              (0, f.useEffect)(() => {
                o.current !== r && (i(r), (o.current = r));
              }, [r, o, i]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          i = void 0 !== e,
          a = i ? e : r,
          s = S(n);
        return [
          a,
          (0, f.useCallback)(
            (t) => {
              if (i) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else o(t);
            },
            [i, e, o, s]
          ),
        ];
      }
      let ti = (0, f.forwardRef)((e, t) =>
        (0, f.createElement)(
          x.span,
          (0, d.Z)({}, e, {
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        )
      );
      var ta = new WeakMap(),
        ts = new WeakMap(),
        tl = {},
        tu = 0,
        tc = function (e) {
          return e && (e.host || tc(e.parentNode));
        },
        td = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = tc(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tl[n] || (tl[n] = new WeakMap());
          var i = tl[n],
            a = [],
            s = new Set(),
            l = new Set(o),
            u = function (e) {
              !e || s.has(e) || (s.add(e), u(e.parentNode));
            };
          o.forEach(u);
          var c = function (e) {
            !e ||
              l.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (s.has(e)) c(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      l = (ta.get(e) || 0) + 1,
                      u = (i.get(e) || 0) + 1;
                    ta.set(e, l),
                      i.set(e, u),
                      a.push(e),
                      1 === l && o && ts.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            c(t),
            s.clear(),
            tu++,
            function () {
              a.forEach(function (e) {
                var t = ta.get(e) - 1,
                  o = i.get(e) - 1;
                ta.set(e, t),
                  i.set(e, o),
                  t || (ts.has(e) || e.removeAttribute(r), ts.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --tu ||
                  ((ta = new WeakMap()),
                  (ta = new WeakMap()),
                  (ts = new WeakMap()),
                  (tl = {}));
            }
          );
        },
        tf = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              td(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        tp = function () {
          return (tp =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function th(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var tg = "right-scroll-bar-position",
        tm = "width-before-scroll-bar";
      function tv(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var ty = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        tb = new WeakMap(),
        tw =
          (void 0 === i && (i = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (s = []),
          (l = !1),
          (u = {
            read: function () {
              if (l)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return s.length ? s[s.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, l);
              return (
                s.push(t),
                function () {
                  s = s.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (l = !0; s.length; ) {
                var t = s;
                (s = []), t.forEach(e);
              }
              s = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return s;
                },
              };
            },
            assignMedium: function (e) {
              l = !0;
              var t = [];
              if (s.length) {
                var n = s;
                (s = []), n.forEach(e), (t = s);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (s = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), s;
                  },
                });
            },
          })).options = tp({ async: !0, ssr: !1 }, i)),
          u),
        tx = function () {},
        tS = f.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = f.useRef(null),
            s = f.useState({
              onScrollCapture: tx,
              onWheelCapture: tx,
              onTouchMoveCapture: tx,
            }),
            l = s[0],
            u = s[1],
            c = e.forwardProps,
            d = e.children,
            p = e.className,
            h = e.removeScrollBar,
            g = e.enabled,
            m = e.shards,
            v = e.sideCar,
            y = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            x = e.as,
            S = th(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            E =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return tv(t, e);
                });
              }),
              ((o = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              ty(
                function () {
                  var e = tb.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || tv(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || tv(e, o);
                      });
                  }
                  tb.set(i, n);
                },
                [n]
              ),
              i),
            k = tp(tp({}, S), l);
          return f.createElement(
            f.Fragment,
            null,
            g &&
              f.createElement(v, {
                sideCar: tw,
                removeScrollBar: h,
                shards: m,
                noIsolation: y,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!w,
                lockRef: a,
              }),
            c
              ? f.cloneElement(f.Children.only(d), tp(tp({}, k), { ref: E }))
              : f.createElement(
                  void 0 === x ? "div" : x,
                  tp({}, k, { className: p, ref: E }),
                  d
                )
          );
        });
      (tS.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (tS.classNames = { fullWidth: tm, zeroRight: tg });
      var tE = function (e) {
        var t = e.sideCar,
          n = th(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, tp({}, n));
      };
      tE.isSideCarExport = !0;
      var tk = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = c || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tC = function () {
          var e = tk();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        tO = function () {
          var e = tC();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        tP = { left: 0, top: 0, right: 0, gap: 0 },
        tR = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        tL = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [tR(n), tR(r), tR(o)];
        },
        tN = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return tP;
          var t = tL(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        tj = tO(),
        tT = "data-scroll-locked",
        tA = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(tT, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(s, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(tg, " {\n    right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tm, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tg, " .")
              .concat(tg, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tm, " .")
              .concat(tm, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(tT, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        t$ = function () {
          var e = parseInt(document.body.getAttribute(tT) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        tI = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(tT, (t$() + 1).toString()),
              function () {
                var e = t$() - 1;
                e <= 0
                  ? document.body.removeAttribute(tT)
                  : document.body.setAttribute(tT, e.toString());
              }
            );
          }, []);
        },
        tM = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          tI();
          var i = f.useMemo(
            function () {
              return tN(o);
            },
            [o]
          );
          return f.createElement(tj, {
            styles: tA(i, !t, o, n ? "" : "!important"),
          });
        },
        t_ = !1;
      if ("undefined" != typeof window)
        try {
          var tD = Object.defineProperty({}, "passive", {
            get: function () {
              return (t_ = !0), !0;
            },
          });
          window.addEventListener("test", tD, tD),
            window.removeEventListener("test", tD, tD);
        } catch (e) {
          t_ = !1;
        }
      var tz = !!t_ && { passive: !1 },
        tF = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        tV = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              tH(e, n))
            ) {
              var r = tB(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        tH = function (e, t) {
          return "v" === e ? tF(t, "overflowY") : tF(t, "overflowX");
        },
        tB = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        tW = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * r,
            l = n.target,
            u = t.contains(l),
            c = !1,
            d = s > 0,
            f = 0,
            p = 0;
          do {
            var h = tB(e, l),
              g = h[0],
              m = h[1] - h[2] - a * g;
            (g || m) && tH(e, l) && ((f += m), (p += g)), (l = l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 0 === f) || (!o && s > f))
              ? (c = !0)
              : !d && ((o && 0 === p) || (!o && -s > p)) && (c = !0),
            c
          );
        },
        tU = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        tK = function (e) {
          return [e.deltaX, e.deltaY];
        },
        tZ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tq = 0,
        tJ = [],
        tG =
          (tw.useMedium(function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState(tq++)[0],
              i = f.useState(function () {
                return tO();
              })[0],
              a = f.useRef(e);
            f.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(tZ),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var s = f.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !a.current.allowPinchZoom;
                var o,
                  i = tU(e),
                  s = n.current,
                  l = "deltaX" in e ? e.deltaX : s[0] - i[0],
                  u = "deltaY" in e ? e.deltaY : s[1] - i[1],
                  c = e.target,
                  d = Math.abs(l) > Math.abs(u) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type)
                  return !1;
                var f = tV(d, c);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = tV(d, c))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (l || u) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return tW(p, t, e, "h" === p ? l : u, !0);
              }, []),
              l = f.useCallback(function (e) {
                if (tJ.length && tJ[tJ.length - 1] === i) {
                  var n = "deltaY" in e ? tK(e) : tU(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(tZ)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              u = f.useCallback(function (e, n, r, o) {
                var i = { name: e, delta: n, target: r, should: o };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              c = f.useCallback(function (e) {
                (n.current = tU(e)), (r.current = void 0);
              }, []),
              d = f.useCallback(function (t) {
                u(t.type, tK(t), t.target, s(t, e.lockRef.current));
              }, []),
              p = f.useCallback(function (t) {
                u(t.type, tU(t), t.target, s(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                tJ.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", l, tz),
                document.addEventListener("touchmove", l, tz),
                document.addEventListener("touchstart", c, tz),
                function () {
                  (tJ = tJ.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", l, tz),
                    document.removeEventListener("touchmove", l, tz),
                    document.removeEventListener("touchstart", c, tz);
                }
              );
            }, []);
            var h = e.removeScrollBar,
              g = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              g
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              h ? f.createElement(tM, { gapMode: "margin" }) : null
            );
          }),
          tE),
        tY = f.forwardRef(function (e, t) {
          return f.createElement(tS, tp({}, e, { ref: t, sideCar: tG }));
        });
      tY.classNames = tS.classNames;
      let tX = [" ", "Enter", "ArrowUp", "ArrowDown"],
        tQ = [" ", "Enter"],
        t0 = "Select",
        [t1, t2, t3] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = v(t),
            [o, i] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            a = e + "CollectionSlot",
            s = f.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = i(a, n),
                s = (0, y.e)(t, o.collectionRef);
              return f.createElement(b.g7, { ref: s }, r);
            }),
            l = e + "CollectionItemSlot",
            u = "data-radix-collection-item";
          return [
            {
              Provider: (e) => {
                let { scope: t, children: n } = e,
                  r = f.useRef(null),
                  i = f.useRef(new Map()).current;
                return f.createElement(
                  o,
                  { scope: t, itemMap: i, collectionRef: r },
                  n
                );
              },
              Slot: s,
              ItemSlot: f.forwardRef((e, t) => {
                let { scope: n, children: r, ...o } = e,
                  a = f.useRef(null),
                  s = (0, y.e)(t, a),
                  c = i(l, n);
                return (
                  f.useEffect(
                    () => (
                      c.itemMap.set(a, { ref: a, ...o }),
                      () => void c.itemMap.delete(a)
                    )
                  ),
                  f.createElement(b.g7, { [u]: "", ref: s }, r)
                );
              }),
            },
            function (t) {
              let n = i(e + "CollectionConsumer", t);
              return f.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${u}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ];
        })(t0),
        [t6, t8] = v(t0, [t3, e0]),
        t5 = e0(),
        [t4, t7] = t6(t0),
        [t9, ne] = t6(t0),
        nt = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...o } = e,
            i = t5(n),
            a = t7("SelectTrigger", n),
            s = a.disabled || r,
            l = (0, y.e)(t, a.onTriggerChange),
            u = t2(n),
            [c, p, h] = n$((e) => {
              let t = u().filter((e) => !e.disabled),
                n = t.find((e) => e.value === a.value),
                r = nI(t, e, n);
              void 0 !== r && a.onValueChange(r.value);
            }),
            g = () => {
              s || (a.onOpenChange(!0), h());
            };
          return (0, f.createElement)(
            e3,
            (0, d.Z)({ asChild: !0 }, i),
            (0, f.createElement)(
              x.button,
              (0, d.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": a.contentId,
                  "aria-expanded": a.open,
                  "aria-required": a.required,
                  "aria-autocomplete": "none",
                  dir: a.dir,
                  "data-state": a.open ? "open" : "closed",
                  disabled: s,
                  "data-disabled": s ? "" : void 0,
                  "data-placeholder": nT(a.value) ? "" : void 0,
                },
                o,
                {
                  ref: l,
                  onClick: m(o.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: m(o.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (g(),
                        (a.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: m(o.onKeyDown, (e) => {
                    let t = "" !== c.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      p(e.key),
                      (!t || " " !== e.key) &&
                        tX.includes(e.key) &&
                        (g(), e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        nn = (0, f.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: i,
              placeholder: a = "",
              ...s
            } = e,
            l = t7("SelectValue", n),
            { onValueNodeHasChildrenChange: u } = l,
            c = void 0 !== i,
            p = (0, y.e)(t, l.onValueNodeChange);
          return (
            z(() => {
              u(c);
            }, [u, c]),
            (0, f.createElement)(
              x.span,
              (0, d.Z)({}, s, { ref: p, style: { pointerEvents: "none" } }),
              nT(l.value) ? (0, f.createElement)(f.Fragment, null, a) : i
            )
          );
        }),
        nr = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, children: r, ...o } = e;
          return (0, f.createElement)(
            x.span,
            (0, d.Z)({ "aria-hidden": !0 }, o, { ref: t }),
            r || "▼"
          );
        }),
        no = "SelectContent",
        ni = (0, f.forwardRef)((e, t) => {
          let n = t7(no, e.__scopeSelect),
            [r, o] = (0, f.useState)();
          return (z(() => {
            o(new DocumentFragment());
          }, []),
          n.open)
            ? (0, f.createElement)(nl, (0, d.Z)({}, e, { ref: t }))
            : r
            ? (0, h.createPortal)(
                (0, f.createElement)(
                  na,
                  { scope: e.__scopeSelect },
                  (0, f.createElement)(
                    t1.Slot,
                    { scope: e.__scopeSelect },
                    (0, f.createElement)("div", null, e.children)
                  )
                ),
                r
              )
            : null;
        }),
        [na, ns] = t6(no),
        nl = (0, f.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              side: s,
              sideOffset: l,
              align: u,
              alignOffset: c,
              arrowPadding: p,
              collisionBoundary: h,
              collisionPadding: g,
              sticky: v,
              hideWhenDetached: w,
              avoidCollisions: x,
              ...S
            } = e,
            E = t7(no, n),
            [k, O] = (0, f.useState)(null),
            [P, N] = (0, f.useState)(null),
            j = (0, y.e)(t, (e) => O(e)),
            [T, $] = (0, f.useState)(null),
            [I, M] = (0, f.useState)(null),
            _ = t2(n),
            [D, z] = (0, f.useState)(!1),
            F = (0, f.useRef)(!1);
          (0, f.useEffect)(() => {
            if (k) return tf(k);
          }, [k]),
            (0, f.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : L()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : L()
                ),
                R++,
                () => {
                  1 === R &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    R--;
                }
              );
            }, []);
          let V = (0, f.useCallback)(
              (e) => {
                let [t, ...n] = _().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && P && (P.scrollTop = 0),
                    n === r && P && (P.scrollTop = P.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [_, P]
            ),
            H = (0, f.useCallback)(() => V([T, k]), [V, T, k]);
          (0, f.useEffect)(() => {
            D && H();
          }, [D, H]);
          let { onOpenChange: B, triggerPointerDownPosRef: W } = E;
          (0, f.useEffect)(() => {
            if (k) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = W.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (i = W.current) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : k.contains(n.target) || B(!1),
                    document.removeEventListener("pointermove", t),
                    (W.current = null);
                };
              return (
                null !== W.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [k, B, W]),
            (0, f.useEffect)(() => {
              let e = () => B(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [B]);
          let [U, K] = n$((e) => {
              let t = _().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = nI(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            Z = (0, f.useCallback)(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== E.value && E.value === t) || r) &&
                  ($(e), r && (F.current = !0));
              },
              [E.value]
            ),
            q = (0, f.useCallback)(() => (null == k ? void 0 : k.focus()), [k]),
            J = (0, f.useCallback)(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== E.value && E.value === t) || r) && M(e);
              },
              [E.value]
            ),
            G = "popper" === r ? nc : nu;
          return (0, f.createElement)(
            na,
            {
              scope: n,
              content: k,
              viewport: P,
              onViewportChange: N,
              itemRefCallback: Z,
              selectedItem: T,
              onItemLeave: q,
              itemTextRefCallback: J,
              focusSelectedItem: H,
              selectedItemText: I,
              position: r,
              isPositioned: D,
              searchRef: U,
            },
            (0, f.createElement)(
              tY,
              { as: b.g7, allowPinchZoom: !0 },
              (0, f.createElement)(
                A,
                {
                  asChild: !0,
                  trapped: E.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: m(o, (e) => {
                    var t;
                    null === (t = E.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, f.createElement)(
                  C,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => E.onOpenChange(!1),
                  },
                  (0, f.createElement)(
                    G,
                    (0, d.Z)(
                      {
                        role: "listbox",
                        id: E.contentId,
                        "data-state": E.open ? "open" : "closed",
                        dir: E.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      S,
                      G === nc
                        ? {
                            side: s,
                            sideOffset: l,
                            align: u,
                            alignOffset: c,
                            arrowPadding: p,
                            collisionBoundary: h,
                            collisionPadding: g,
                            sticky: v,
                            hideWhenDetached: w,
                            avoidCollisions: x,
                          }
                        : {},
                      {
                        onPlaced: () => z(!0),
                        ref: j,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...S.style,
                        },
                        onKeyDown: m(S.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || K(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = _()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              let n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => V(t)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        nu = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, onPlaced: r, ...o } = e,
            i = t7(no, n),
            a = ns(no, n),
            [s, l] = (0, f.useState)(null),
            [u, c] = (0, f.useState)(null),
            p = (0, y.e)(t, (e) => c(e)),
            h = t2(n),
            m = (0, f.useRef)(!1),
            v = (0, f.useRef)(!0),
            {
              viewport: b,
              selectedItem: w,
              selectedItemText: S,
              focusSelectedItem: E,
            } = a,
            k = (0, f.useCallback)(() => {
              if (i.trigger && i.valueNode && s && u && b && w && S) {
                let e = i.trigger.getBoundingClientRect(),
                  t = u.getBoundingClientRect(),
                  n = i.valueNode.getBoundingClientRect(),
                  o = S.getBoundingClientRect();
                if ("rtl" !== i.dir) {
                  let r = o.left - t.left,
                    i = n.left - r,
                    a = e.left - i,
                    l = e.width + a,
                    u = Math.max(l, t.width),
                    c = g(i, [10, window.innerWidth - 10 - u]);
                  (s.style.minWidth = l + "px"), (s.style.left = c + "px");
                } else {
                  let r = t.right - o.right,
                    i = window.innerWidth - n.right - r,
                    a = window.innerWidth - e.right - i,
                    l = e.width + a,
                    u = Math.max(l, t.width),
                    c = g(i, [10, window.innerWidth - 10 - u]);
                  (s.style.minWidth = l + "px"), (s.style.right = c + "px");
                }
                let a = h(),
                  l = window.innerHeight - 20,
                  c = b.scrollHeight,
                  d = window.getComputedStyle(u),
                  f = parseInt(d.borderTopWidth, 10),
                  p = parseInt(d.paddingTop, 10),
                  v = parseInt(d.borderBottomWidth, 10),
                  y = f + p + c + parseInt(d.paddingBottom, 10) + v,
                  x = Math.min(5 * w.offsetHeight, y),
                  E = window.getComputedStyle(b),
                  k = parseInt(E.paddingTop, 10),
                  C = parseInt(E.paddingBottom, 10),
                  O = e.top + e.height / 2 - 10,
                  P = w.offsetHeight / 2,
                  R = f + p + (w.offsetTop + P);
                if (R <= O) {
                  let e = w === a[a.length - 1].ref.current;
                  s.style.bottom = "0px";
                  let t = u.clientHeight - b.offsetTop - b.offsetHeight;
                  s.style.height =
                    R + Math.max(l - O, P + (e ? C : 0) + t + v) + "px";
                } else {
                  let e = w === a[0].ref.current;
                  s.style.top = "0px";
                  let t = Math.max(O, f + b.offsetTop + (e ? k : 0) + P);
                  (s.style.height = t + (y - R) + "px"),
                    (b.scrollTop = R - O + b.offsetTop);
                }
                (s.style.margin = "10px 0"),
                  (s.style.minHeight = x + "px"),
                  (s.style.maxHeight = l + "px"),
                  null == r || r(),
                  requestAnimationFrame(() => (m.current = !0));
              }
            }, [h, i.trigger, i.valueNode, s, u, b, w, S, i.dir, r]);
          z(() => k(), [k]);
          let [C, O] = (0, f.useState)();
          z(() => {
            u && O(window.getComputedStyle(u).zIndex);
          }, [u]);
          let P = (0, f.useCallback)(
            (e) => {
              e &&
                !0 === v.current &&
                (k(), null == E || E(), (v.current = !1));
            },
            [k, E]
          );
          return (0, f.createElement)(
            nd,
            {
              scope: n,
              contentWrapper: s,
              shouldExpandOnScrollRef: m,
              onScrollButtonChange: P,
            },
            (0, f.createElement)(
              "div",
              {
                ref: l,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: C,
                },
              },
              (0, f.createElement)(
                x.div,
                (0, d.Z)({}, o, {
                  ref: p,
                  style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style,
                  },
                })
              )
            )
          );
        }),
        nc = (0, f.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              align: r = "start",
              collisionPadding: o = 10,
              ...i
            } = e,
            a = t5(n);
          return (0, f.createElement)(
            e4,
            (0, d.Z)({}, a, i, {
              ref: t,
              align: r,
              collisionPadding: o,
              style: {
                boxSizing: "border-box",
                ...i.style,
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        [nd, nf] = t6(no, {}),
        np = "SelectViewport",
        nh = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = ns(np, n),
            i = nf(np, n),
            a = (0, y.e)(t, o.onViewportChange),
            s = (0, f.useRef)(0);
          return (0, f.createElement)(
            f.Fragment,
            null,
            (0, f.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, f.createElement)(
              t1.Slot,
              { scope: n },
              (0, f.createElement)(
                x.div,
                (0, d.Z)(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  r,
                  {
                    ref: a,
                    style: {
                      position: "relative",
                      flex: 1,
                      overflow: "auto",
                      ...r.style,
                    },
                    onScroll: m(r.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = i;
                      if (null != r && r.current && n) {
                        let e = Math.abs(s.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            o = Math.max(
                              parseFloat(n.style.minHeight),
                              parseFloat(n.style.height)
                            );
                          if (o < r) {
                            let i = o + e,
                              a = Math.min(r, i),
                              s = i - a;
                            (n.style.height = a + "px"),
                              "0px" === n.style.bottom &&
                                ((t.scrollTop = s > 0 ? s : 0),
                                (n.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      s.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [ng, nm] = t6("SelectGroup"),
        nv = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = H();
          return (0, f.createElement)(
            ng,
            { scope: n, id: o },
            (0, f.createElement)(
              x.div,
              (0, d.Z)({ role: "group", "aria-labelledby": o }, r, { ref: t })
            )
          );
        }),
        ny = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = nm("SelectLabel", n);
          return (0, f.createElement)(
            x.div,
            (0, d.Z)({ id: o.id }, r, { ref: t })
          );
        }),
        nb = "SelectItem",
        [nw, nx] = t6(nb),
        nS = (0, f.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: o = !1,
              textValue: i,
              ...a
            } = e,
            s = t7(nb, n),
            l = ns(nb, n),
            u = s.value === r,
            [c, p] = (0, f.useState)(null != i ? i : ""),
            [h, g] = (0, f.useState)(!1),
            v = (0, y.e)(t, (e) => {
              var t;
              return null === (t = l.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(l, e, r, o);
            }),
            b = H(),
            w = () => {
              o || (s.onValueChange(r), s.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, f.createElement)(
            nw,
            {
              scope: n,
              value: r,
              disabled: o,
              textId: b,
              isSelected: u,
              onItemTextChange: (0, f.useCallback)((e) => {
                p((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, f.createElement)(
              t1.ItemSlot,
              { scope: n, value: r, disabled: o, textValue: c },
              (0, f.createElement)(
                x.div,
                (0, d.Z)(
                  {
                    role: "option",
                    "aria-labelledby": b,
                    "data-highlighted": h ? "" : void 0,
                    "aria-selected": u && h,
                    "data-state": u ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                  },
                  a,
                  {
                    ref: v,
                    onFocus: m(a.onFocus, () => g(!0)),
                    onBlur: m(a.onBlur, () => g(!1)),
                    onPointerUp: m(a.onPointerUp, w),
                    onPointerMove: m(a.onPointerMove, (e) => {
                      if (o) {
                        var t;
                        null === (t = l.onItemLeave) ||
                          void 0 === t ||
                          t.call(l);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: m(a.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = l.onItemLeave) ||
                          void 0 === t ||
                          t.call(l);
                      }
                    }),
                    onKeyDown: m(a.onKeyDown, (e) => {
                      var t;
                      ((null === (t = l.searchRef) || void 0 === t
                        ? void 0
                        : t.current) !== "" &&
                        " " === e.key) ||
                        (tQ.includes(e.key) && w(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        nE = "SelectItemText",
        nk = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, className: r, style: o, ...i } = e,
            a = t7(nE, n),
            s = ns(nE, n),
            l = nx(nE, n),
            u = ne(nE, n),
            [c, p] = (0, f.useState)(null),
            g = (0, y.e)(
              t,
              (e) => p(e),
              l.onItemTextChange,
              (e) => {
                var t;
                return null === (t = s.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(s, e, l.value, l.disabled);
              }
            ),
            m = null == c ? void 0 : c.textContent,
            v = (0, f.useMemo)(
              () =>
                (0, f.createElement)(
                  "option",
                  { key: l.value, value: l.value, disabled: l.disabled },
                  m
                ),
              [l.disabled, l.value, m]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: w } = u;
          return (
            z(() => (b(v), () => w(v)), [b, w, v]),
            (0, f.createElement)(
              f.Fragment,
              null,
              (0, f.createElement)(
                x.span,
                (0, d.Z)({ id: l.textId }, i, { ref: g })
              ),
              l.isSelected && a.valueNode && !a.valueNodeHasChildren
                ? (0, h.createPortal)(i.children, a.valueNode)
                : null
            )
          );
        }),
        nC = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return nx("SelectItemIndicator", n).isSelected
            ? (0, f.createElement)(
                x.span,
                (0, d.Z)({ "aria-hidden": !0 }, r, { ref: t })
              )
            : null;
        }),
        nO = "SelectScrollUpButton",
        nP = (0, f.forwardRef)((e, t) => {
          let n = ns(nO, e.__scopeSelect),
            r = nf(nO, e.__scopeSelect),
            [o, i] = (0, f.useState)(!1),
            a = (0, y.e)(t, r.onScrollButtonChange);
          return (
            z(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  i(t.scrollTop > 0);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, f.createElement)(
                  nN,
                  (0, d.Z)({}, e, {
                    ref: a,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        nR = "SelectScrollDownButton",
        nL = (0, f.forwardRef)((e, t) => {
          let n = ns(nR, e.__scopeSelect),
            r = nf(nR, e.__scopeSelect),
            [o, i] = (0, f.useState)(!1),
            a = (0, y.e)(t, r.onScrollButtonChange);
          return (
            z(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  let e = t.scrollHeight - t.clientHeight;
                  i(Math.ceil(t.scrollTop) < e);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, f.createElement)(
                  nN,
                  (0, d.Z)({}, e, {
                    ref: a,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        nN = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...o } = e,
            i = ns("SelectScrollButton", n),
            a = (0, f.useRef)(null),
            s = t2(n),
            l = (0, f.useCallback)(() => {
              null !== a.current &&
                (window.clearInterval(a.current), (a.current = null));
            }, []);
          return (
            (0, f.useEffect)(() => () => l(), [l]),
            z(() => {
              var e;
              let t = s().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [s]),
            (0, f.createElement)(
              x.div,
              (0, d.Z)({ "aria-hidden": !0 }, o, {
                ref: t,
                style: { flexShrink: 0, ...o.style },
                onPointerDown: m(o.onPointerDown, () => {
                  null === a.current && (a.current = window.setInterval(r, 50));
                }),
                onPointerMove: m(o.onPointerMove, () => {
                  var e;
                  null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                    null === a.current &&
                      (a.current = window.setInterval(r, 50));
                }),
                onPointerLeave: m(o.onPointerLeave, () => {
                  l();
                }),
              })
            )
          );
        }),
        nj = (0, f.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, f.createElement)(
            x.div,
            (0, d.Z)({ "aria-hidden": !0 }, r, { ref: t })
          );
        });
      function nT(e) {
        return "" === e || void 0 === e;
      }
      let nA = (0, f.forwardRef)((e, t) => {
        let { value: n, ...r } = e,
          o = (0, f.useRef)(null),
          i = (0, y.e)(t, o),
          a = (function (e) {
            let t = (0, f.useRef)({ value: e, previous: e });
            return (0, f.useMemo)(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          (0, f.useEffect)(() => {
            let e = o.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n]),
          (0, f.createElement)(
            ti,
            { asChild: !0 },
            (0, f.createElement)(
              "select",
              (0, d.Z)({}, r, { ref: i, defaultValue: n })
            )
          )
        );
      });
      function n$(e) {
        let t = S(e),
          n = (0, f.useRef)(""),
          r = (0, f.useRef)(0),
          o = (0, f.useCallback)(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          i = (0, f.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, f.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, o, i]
        );
      }
      function nI(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (i = i.filter((e) => e !== n));
        let a = i.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return a !== n ? a : void 0;
      }
      nA.displayName = "BubbleSelect";
      let nM = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              value: a,
              defaultValue: s,
              onValueChange: l,
              dir: u,
              name: c,
              autoComplete: d,
              disabled: p,
              required: h,
            } = e,
            g = t5(t),
            [m, v] = (0, f.useState)(null),
            [y, b] = (0, f.useState)(null),
            [x, S] = (0, f.useState)(!1),
            E = (function (e) {
              let t = (0, f.useContext)(w);
              return e || t || "ltr";
            })(u),
            [k = !1, C] = to({ prop: r, defaultProp: o, onChange: i }),
            [O, P] = to({ prop: a, defaultProp: s, onChange: l }),
            R = (0, f.useRef)(null),
            L = !m || !!m.closest("form"),
            [N, j] = (0, f.useState)(new Set()),
            T = Array.from(N)
              .map((e) => e.props.value)
              .join(";");
          return (0, f.createElement)(
            tn,
            g,
            (0, f.createElement)(
              t4,
              {
                required: h,
                scope: t,
                trigger: m,
                onTriggerChange: v,
                valueNode: y,
                onValueNodeChange: b,
                valueNodeHasChildren: x,
                onValueNodeHasChildrenChange: S,
                contentId: H(),
                value: O,
                onValueChange: P,
                open: k,
                onOpenChange: C,
                dir: E,
                triggerPointerDownPosRef: R,
                disabled: p,
              },
              (0, f.createElement)(
                t1.Provider,
                { scope: t },
                (0, f.createElement)(
                  t9,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, f.useCallback)((e) => {
                      j((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, f.useCallback)((e) => {
                      j((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                  },
                  n
                )
              ),
              L
                ? (0, f.createElement)(
                    nA,
                    {
                      key: T,
                      "aria-hidden": !0,
                      required: h,
                      tabIndex: -1,
                      name: c,
                      autoComplete: d,
                      value: O,
                      onChange: (e) => P(e.target.value),
                      disabled: p,
                    },
                    void 0 === O
                      ? (0, f.createElement)("option", { value: "" })
                      : null,
                    Array.from(N)
                  )
                : null
            )
          );
        },
        n_ = nt,
        nD = nn,
        nz = nr,
        nF = (e) => (0, f.createElement)(tr, (0, d.Z)({ asChild: !0 }, e)),
        nV = ni,
        nH = nh,
        nB = nv,
        nW = ny,
        nU = nS,
        nK = nk,
        nZ = nC,
        nq = nP,
        nJ = nL,
        nG = nj;
    },
    9143: function (e, t, n) {
      "use strict";
      n.d(t, {
        g7: function () {
          return a;
        },
      });
      var r = n(2110),
        o = n(2265),
        i = n(1266);
      let a = (0, o.forwardRef)((e, t) => {
        let { children: n, ...i } = e,
          a = o.Children.toArray(n),
          l = a.find(u);
        if (l) {
          let e = l.props.children,
            n = a.map((t) =>
              t !== l
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            s,
            (0, r.Z)({}, i, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, o.createElement)(s, (0, r.Z)({}, i, { ref: t }), n);
      });
      a.displayName = "Slot";
      let s = (0, o.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && i
                      ? (n[r] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r &&
                      (n[r] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? (0, i.F)(t, n.ref) : n.ref,
            })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      s.displayName = "SlotClone";
      let l = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function u(e) {
        return (0, o.isValidElement)(e) && e.type === l;
      }
    },
    7742: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        i = (e, t) => (n) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == s ? void 0 : s[e];
              if (null === t) return null;
              let i = r(t) || r(o);
              return a[e][i];
            }),
            u =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            l,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...s, ...u }[t])
                      : { ...s, ...u }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    3167: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    5350: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = function (e) {
        return {
          type: "backend",
          init: function (e, t, n) {},
          read: function (t, n, r) {
            if ("function" == typeof e) {
              if (e.length < 3) {
                try {
                  var o = e(t, n);
                  o && "function" == typeof o.then
                    ? o
                        .then(function (e) {
                          return r(null, (e && e.default) || e);
                        })
                        .catch(r)
                    : r(null, o);
                } catch (e) {
                  r(e);
                }
                return;
              }
              e(t, n, r);
              return;
            }
            r(null, e && e[t] && e[t][n]);
          },
        };
      };
    },
    1505: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fs: function () {
          return B;
        },
      });
      let r = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class o {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || r),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new o(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new o(this.logger, e)
          );
        }
      }
      var i = new o();
      class a {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let e = 0; e < r; e++) t(...n);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [r, o] = t;
                for (let t = 0; t < o; t++) r.apply(r, [e, ...n]);
              });
        }
      }
      function s() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function l(e) {
        return null == e ? "" : "" + e;
      }
      let u = /###/g;
      function c(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(u, ".") : e;
        }
        function o() {
          return !e || "string" == typeof e;
        }
        let i = "string" != typeof t ? t : t.split("."),
          a = 0;
        for (; a < i.length - 1; ) {
          if (o()) return {};
          let t = r(i[a]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++a;
        }
        return o() ? {} : { obj: e, k: r(i[a]) };
      }
      function d(e, t, n) {
        let { obj: r, k: o } = c(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
          r[o] = n;
          return;
        }
        let i = t[t.length - 1],
          a = t.slice(0, t.length - 1),
          s = c(e, a, Object);
        for (; void 0 === s.obj && a.length; )
          (i = `${a[a.length - 1]}.${i}`),
            (s = c(e, (a = a.slice(0, a.length - 1)), Object)) &&
              s.obj &&
              void 0 !== s.obj[`${s.k}.${i}`] &&
              (s.obj = void 0);
        s.obj[`${s.k}.${i}`] = n;
      }
      function f(e, t) {
        let { obj: n, k: r } = c(e, t);
        if (n) return n[r];
      }
      function p(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var h = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function g(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => h[e]) : e;
      }
      class m {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, n),
            this.regExpQueue.push(e),
            n
          );
        }
      }
      let v = [" ", ",", "?", "!", ";"],
        y = new m(20);
      function b(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let r = t.split(n),
          o = e;
        for (let e = 0; e < r.length; ) {
          let t;
          if (!o || "object" != typeof o) return;
          let i = "";
          for (let a = e; a < r.length; ++a)
            if ((a !== e && (i += n), (i += r[a]), void 0 !== (t = o[i]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                a < r.length - 1
              )
                continue;
              e += a - e + 1;
              break;
            }
          o = t;
        }
        return o;
      }
      function w(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class x extends a {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            a =
              void 0 !== o.ignoreJSONStructure
                ? o.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (r = e.split("."))
            : ((r = [e, t]),
              n &&
                (Array.isArray(n)
                  ? r.push(...n)
                  : "string" == typeof n && i
                  ? r.push(...n.split(i))
                  : r.push(n)));
          let s = f(this.data, r);
          return (!s &&
            !t &&
            !n &&
            e.indexOf(".") > -1 &&
            ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
          s || !a || "string" != typeof n)
            ? s
            : b(this.data && this.data[e] && this.data[e][t], n, i);
        }
        addResource(e, t, n, r) {
          let o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            a = [e, t];
          n && (a = a.concat(i ? n.split(i) : n)),
            e.indexOf(".") > -1 && ((a = e.split(".")), (r = t), (t = a[1])),
            this.addNamespaces(t),
            d(this.data, a, r),
            o.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let r in n)
            ("string" == typeof n[r] ||
              "[object Array]" === Object.prototype.toString.apply(n[r])) &&
              this.addResource(e, t, r, n[r], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            a = [e, t];
          e.indexOf(".") > -1 &&
            ((a = e.split(".")), (r = n), (n = t), (t = a[1])),
            this.addNamespaces(t);
          let s = f(this.data, a) || {};
          i.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r
              ? (function e(t, n, r) {
                  for (let o in n)
                    "__proto__" !== o &&
                      "constructor" !== o &&
                      (o in t
                        ? "string" == typeof t[o] ||
                          t[o] instanceof String ||
                          "string" == typeof n[o] ||
                          n[o] instanceof String
                          ? r && (t[o] = n[o])
                          : e(t[o], n[o], r)
                        : (t[o] = n[o]));
                  return t;
                })(s, n, o)
              : (s = { ...s, ...n }),
            d(this.data, a, s),
            i.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          "v1" === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var S = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, o) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, o));
            }),
            t
          );
        },
      };
      let E = {};
      class k extends a {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = i.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          let r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            o = t.ns || this.options.defaultNS || [],
            i = n && e.indexOf(n) > -1,
            a =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                let r = v.filter((e) => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                if (0 === r.length) return !0;
                let o = y.getRegExp(
                    `(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
                  ),
                  i = !o.test(e);
                if (!i) {
                  let t = e.indexOf(n);
                  t > 0 && !o.test(e.substring(0, t)) && (i = !0);
                }
                return i;
              })(e, n, r);
          if (i && !a) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: o };
            let i = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(i[0]) > -1)) &&
              (o = i.shift()),
              (e = i.join(r));
          }
          return "string" == typeof o && (o = [o]), { key: e, namespaces: o };
        }
        translate(e, t, n) {
          if (
            ("object" != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          let r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            o =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: i, namespaces: a } = this.extractFromKey(e[e.length - 1], t),
            s = a[a.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: `${s}${e}${i}`,
                    usedKey: i,
                    exactUsedKey: i,
                    usedLng: l,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${s}${e}${i}`;
            }
            return r
              ? {
                  res: i,
                  usedKey: i,
                  exactUsedKey: i,
                  usedLng: l,
                  usedNS: s,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : i;
          }
          let c = this.resolve(e, t),
            d = c && c.res,
            f = (c && c.usedKey) || i,
            p = (c && c.exactUsedKey) || i,
            h = Object.prototype.toString.apply(d),
            g =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            v =
              "string" != typeof d &&
              "boolean" != typeof d &&
              "number" != typeof d;
          if (
            m &&
            d &&
            v &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(h) &&
            !("string" == typeof g && "[object Array]" === h)
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(f, d, { ...t, ns: a })
                : `key '${i} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (o) {
              let e = "[object Array]" === h,
                n = e ? [] : {},
                r = e ? p : f;
              for (let e in d)
                if (Object.prototype.hasOwnProperty.call(d, e)) {
                  let i = `${r}${o}${e}`;
                  (n[e] = this.translate(i, { ...t, joinArrays: !1, ns: a })),
                    n[e] === i && (n[e] = d[e]);
                }
              d = n;
            }
          } else if (m && "string" == typeof g && "[object Array]" === h)
            (d = d.join(g)) && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              a = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              f = k.hasDefaultValue(t),
              p = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              h =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              g =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (g && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${p}`] ||
                t[`defaultValue${h}`] ||
                t.defaultValue;
            !this.isValidLookup(d) && f && ((r = !0), (d = m)),
              this.isValidLookup(d) || ((a = !0), (d = i));
            let v =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                a
                  ? void 0
                  : d,
              y = f && m !== d && this.options.updateMissing;
            if (a || r || y) {
              if (
                (this.logger.log(
                  y ? "updateKey" : "missingKey",
                  l,
                  s,
                  i,
                  y ? m : d
                ),
                o)
              ) {
                let e = this.resolve(i, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language
                );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let o = f && r !== d ? r : v;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, s, n, o, y, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, s, n, o, y, t),
                  this.emit("missingKey", e, s, n, d);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      g &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], i + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, i, m));
            }
            (d = this.extendTranslation(d, e, t, c, n)),
              a &&
                d === i &&
                this.options.appendNamespaceToMissingKey &&
                (d = `${s}:${i}`),
              (a || r) &&
                this.options.parseMissingKeyHandler &&
                (d =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${s}:${i}`
                          : i,
                        r ? d : void 0
                      )
                    : this.options.parseMissingKeyHandler(d));
          }
          return r
            ? ((c.res = d), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : d;
        }
        extendTranslation(e, t, n, r, o) {
          var i = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r }
            );
          else if (!n.skipInterpolation) {
            let a;
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            let s =
              "string" == typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (s) {
              let t = e.match(this.interpolator.nestingRegexp);
              a = t && t.length;
            }
            let l = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n
              )),
              s)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              a < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = Array(e), a = 0;
                      a < e;
                      a++
                    )
                      r[a] = arguments[a];
                    return o && o[0] === r[0] && !n.context
                      ? (i.logger.warn(
                          `It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`
                        ),
                        null)
                      : i.translate(...r, t);
                  },
                  n
                )),
              n.interpolation && this.interpolator.reset();
          }
          let a = n.postProcess || this.options.postProcess,
            s = "string" == typeof a ? [a] : a;
          return (
            null != e &&
              s &&
              s.length &&
              !1 !== n.applyPostProcessor &&
              (e = S.handle(
                s,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            o,
            i,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let s = this.extractFromKey(e, a),
                l = s.key;
              n = l;
              let u = s.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== a.count && "string" != typeof a.count,
                d =
                  c &&
                  !a.ordinal &&
                  0 === a.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                f =
                  void 0 !== a.context &&
                  ("string" == typeof a.context ||
                    "number" == typeof a.context) &&
                  "" !== a.context,
                p = a.lngs
                  ? a.lngs
                  : this.languageUtils.toResolveHierarchy(
                      a.lng || this.language,
                      a.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((i = e),
                  !E[`${p[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(i) &&
                    ((E[`${p[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${p.join(
                        ", "
                      )}" won't get resolved as namespace "${i}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  p.forEach((n) => {
                    let i;
                    if (this.isValidLookup(t)) return;
                    o = n;
                    let s = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(s, l, n, e, a);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, a.count, a));
                      let t = `${this.options.pluralSeparator}zero`,
                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (s.push(l + e),
                          a.ordinal &&
                            0 === e.indexOf(r) &&
                            s.push(
                              l + e.replace(r, this.options.pluralSeparator)
                            ),
                          d && s.push(l + t)),
                        f)
                      ) {
                        let n = `${l}${this.options.contextSeparator}${a.context}`;
                        s.push(n),
                          c &&
                            (s.push(n + e),
                            a.ordinal &&
                              0 === e.indexOf(r) &&
                              s.push(
                                n + e.replace(r, this.options.pluralSeparator)
                              ),
                            d && s.push(n + t));
                      }
                    }
                    for (; (i = s.pop()); )
                      this.isValidLookup(t) ||
                        ((r = i), (t = this.getResource(n, e, i, a)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && "string" != typeof e.replace,
            n = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (n.count = e.count),
            this.options.interpolation.defaultVariables &&
              (n = { ...this.options.interpolation.defaultVariables, ...n }),
            !t)
          )
            for (let e of ((n = { ...n }),
            [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ]))
              delete n[e];
          return n;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function C(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class O {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = i.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = w(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
            ? null
            : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = w(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                ? ((n[0] = n[0].toLowerCase()),
                  (n[1] = n[1].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = C(n[1].toLowerCase())))
                : 3 === n.length &&
                  ((n[0] = n[0].toLowerCase()),
                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                  "sgn" !== n[0] &&
                    2 === n[2].length &&
                    (n[2] = n[2].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = C(n[1].toLowerCase())),
                  t.indexOf(n[2].toLowerCase()) > -1 &&
                    (n[2] = C(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) &&
                  (t = n);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let n = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(n)) return (t = n);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === n ||
                      (!(0 > e.indexOf("-") && 0 > n.indexOf("-")) &&
                        ((e.indexOf("-") > 0 &&
                          0 > n.indexOf("-") &&
                          e.substring(0, e.indexOf("-")) === n) ||
                          (0 === e.indexOf(n) && n.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" == typeof e && (e = e(t)),
            "string" == typeof e && (e = [e]),
            "[object Array]" === Object.prototype.toString.apply(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            o = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`
                    ));
            };
          return (
            "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  o(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  o(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  o(this.getLanguagePartFromCode(e)))
              : "string" == typeof e && o(this.formatLanguageCode(e)),
            n.forEach((e) => {
              0 > r.indexOf(e) && o(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let P = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        R = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        L = ["v1", "v2", "v3"],
        N = ["v4"],
        j = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class T {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = i.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              N.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              let e = {};
              return (
                P.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: R[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(w("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => j[e] - j[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${
                        t.ordinal ? `ordinal${this.options.prepend}` : ""
                      }${e}`
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${r.select(t)}`
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          let o = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" == typeof r
              ? `_plural_${r.toString()}`
              : o()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? o()
            : this.options.prepend && n.toString()
            ? this.options.prepend + n.toString()
            : n.toString();
        }
        shouldUseIntlApi() {
          return !L.includes(this.options.compatibilityJSON);
        }
      }
      function A(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          o =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          i = (function (e, t, n) {
            let r = f(e, n);
            return void 0 !== r ? r : f(t, n);
          })(e, t, n);
        return (
          !i &&
            o &&
            "string" == typeof n &&
            void 0 === (i = b(e, n, r)) &&
            (i = b(t, n, r)),
          i
        );
      }
      class $ {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = i.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let t = e.interpolation;
          (this.escape = void 0 !== t.escape ? t.escape : g),
            (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
            (this.useRawValueToEscape =
              void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
            (this.prefix = t.prefix ? p(t.prefix) : t.prefixEscaped || "{{"),
            (this.suffix = t.suffix ? p(t.suffix) : t.suffixEscaped || "}}"),
            (this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ","),
            (this.unescapePrefix = t.unescapeSuffix
              ? ""
              : t.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : t.unescapeSuffix || ""),
            (this.nestingPrefix = t.nestingPrefix
              ? p(t.nestingPrefix)
              : t.nestingPrefixEscaped || p("$t(")),
            (this.nestingSuffix = t.nestingSuffix
              ? p(t.nestingSuffix)
              : t.nestingSuffixEscaped || p(")")),
            (this.nestingOptionsSeparator = t.nestingOptionsSeparator
              ? t.nestingOptionsSeparator
              : t.nestingOptionsSeparator || ","),
            (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
            (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g");
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
            ));
        }
        interpolate(e, t, n, r) {
          let o, i, a;
          let s =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function u(e) {
            return e.replace(/\$/g, "$$$$");
          }
          let c = (e) => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let o = A(
                t,
                s,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(o, void 0, n, { ...r, ...t, interpolationkey: e })
                : o;
            }
            let o = e.split(this.formatSeparator),
              i = o.shift().trim(),
              a = o.join(this.formatSeparator).trim();
            return this.format(
              A(
                t,
                s,
                i,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              a,
              n,
              { ...r, ...t, interpolationkey: i }
            );
          };
          this.resetRegExp();
          let d =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            f =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => u(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? u(this.escape(e)) : u(e)),
              },
            ].forEach((t) => {
              for (a = 0; (o = t.regex.exec(e)); ) {
                let n = o[1].trim();
                if (void 0 === (i = c(n))) {
                  if ("function" == typeof d) {
                    let t = d(e, o, r);
                    i = "string" == typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    i = "";
                  else if (f) {
                    i = o[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${n} for interpolating ${e}`
                    ),
                      (i = "");
                } else
                  "string" == typeof i ||
                    this.useRawValueToEscape ||
                    (i = l(i));
                let s = t.safeValue(i);
                if (
                  ((e = e.replace(o[0], s)),
                  f
                    ? ((t.regex.lastIndex += i.length),
                      (t.regex.lastIndex -= o[0].length))
                    : (t.regex.lastIndex = 0),
                  ++a >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            o,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function a(e, t) {
            let n = this.nestingOptionsSeparator;
            if (0 > e.indexOf(n)) return e;
            let r = e.split(RegExp(`${n}[ ]*{`)),
              i = `{${r[1]}`;
            e = r[0];
            let a = (i = this.interpolate(i, o)).match(/'/g),
              s = i.match(/"/g);
            ((a && a.length % 2 == 0 && !s) || s.length % 2 != 0) &&
              (i = i.replace(/'/g, '"'));
            try {
              (o = JSON.parse(i)), t && (o = { ...t, ...o });
            } catch (t) {
              return (
                this.logger.warn(
                  `failed parsing options string in nesting for key ${e}`,
                  t
                ),
                `${e}${n}${i}`
              );
            }
            return (
              o.defaultValue &&
                o.defaultValue.indexOf(this.prefix) > -1 &&
                delete o.defaultValue,
              e
            );
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let s = [];
            ((o =
              (o = { ...i }).replace && "string" != typeof o.replace
                ? o.replace
                : o).applyPostProcessor = !1),
              delete o.defaultValue;
            let u = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              let e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (s = e), (u = !0);
            }
            if (
              (r = t(a.call(this, n[1].trim(), o), o)) &&
              n[0] === e &&
              "string" != typeof r
            )
              return r;
            "string" != typeof r && (r = l(r)),
              r ||
                (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                (r = "")),
              u &&
                (r = s.reduce(
                  (e, t) =>
                    this.format(e, t, i.lng, {
                      ...i,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim()
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function I(e) {
        let t = {};
        return function (n, r, o) {
          let i = r + JSON.stringify(o),
            a = t[i];
          return a || ((a = e(w(r), o)), (t[i] = a)), a(n);
        };
      }
      class M {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = i.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: I((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: I((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: I((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: I((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: I((e, t) => {
                let n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator
            ? n.formatSeparator
            : n.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = I(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let { formatName: o, formatOptions: i } = (function (e) {
              let t = e.toLowerCase().trim(),
                n = {};
              if (e.indexOf("(") > -1) {
                let r = e.split("(");
                t = r[0].toLowerCase().trim();
                let o = r[1].substring(0, r[1].length - 1);
                "currency" === t && 0 > o.indexOf(":")
                  ? n.currency || (n.currency = o.trim())
                  : "relativetime" === t && 0 > o.indexOf(":")
                  ? n.range || (n.range = o.trim())
                  : o.split(";").forEach((e) => {
                      if (!e) return;
                      let [t, ...r] = e.split(":"),
                        o = r
                          .join(":")
                          .trim()
                          .replace(/^'+|'+$/g, "");
                      n[t.trim()] || (n[t.trim()] = o),
                        "false" === o && (n[t.trim()] = !1),
                        "true" === o && (n[t.trim()] = !0),
                        isNaN(o) || (n[t.trim()] = parseInt(o, 10));
                    });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[o]) {
              let t = e;
              try {
                let a =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  s = a.locale || a.lng || r.locale || r.lng || n;
                t = this.formats[o](e, s, { ...i, ...r, ...a });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${o}`), e;
          }, e);
        }
      }
      class _ extends a {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = i.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          let o = {},
            i = {},
            a = {},
            s = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                let a = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[a] = 2)
                  : this.state[a] < 0 ||
                    (1 === this.state[a]
                      ? void 0 === i[a] && (i[a] = !0)
                      : ((this.state[a] = 1),
                        (r = !1),
                        void 0 === i[a] && (i[a] = !0),
                        void 0 === o[a] && (o[a] = !0),
                        void 0 === s[t] && (s[t] = !0)));
              }),
                r || (a[e] = !0);
            }),
            (Object.keys(o).length || Object.keys(i).length) &&
              this.queue.push({
                pending: i,
                pendingCount: Object.keys(i).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(o),
              pending: Object.keys(i),
              toLoadLanguages: Object.keys(a),
              toLoadNamespaces: Object.keys(s),
            }
          );
        }
        loaded(e, t, n) {
          let r = e.split("|"),
            o = r[0],
            i = r[1];
          t && this.emit("failedLoading", o, i, t),
            n &&
              this.store.addResourceBundle(o, i, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          let a = {};
          this.queue.forEach((n) => {
            (function (e, t, n, r) {
              let { obj: o, k: i } = c(e, t, Object);
              (o[i] = o[i] || []),
                r && (o[i] = o[i].concat(n)),
                r || o[i].push(n);
            })(n.loaded, [o], i),
              void 0 !== n.pending[e] &&
                (delete n.pending[e], n.pendingCount--),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  a[e] || (a[e] = {});
                  let t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === a[e][t] && (a[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", a),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            i = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return i(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: o,
              callback: i,
            });
            return;
          }
          this.readingCalls++;
          let a = (a, s) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (a && s && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * o, i);
                }, o);
                return;
              }
              i(a, s);
            },
            s = this.backend[n].bind(this.backend);
          if (2 === s.length) {
            try {
              let n = s(e, t);
              n && "function" == typeof n.then
                ? n.then((e) => a(null, e)).catch(a)
                : a(null, n);
            } catch (e) {
              a(e);
            }
            return;
          }
          return s(e, t, a);
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              r && r()
            );
          "string" == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" == typeof t && (t = [t]);
          let o = this.queueLoad(e, t, n, r);
          if (!o.toLoad.length) return o.pending.length || r(), null;
          o.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = e.split("|"),
            r = n[0],
            o = n[1];
          this.read(r, o, "read", void 0, void 0, (n, i) => {
            n &&
              this.logger.warn(
                `${t}loading namespace ${o} for language ${r} failed`,
                n
              ),
              !n &&
                i &&
                this.logger.log(
                  `${t}loaded namespace ${o} for language ${r}`,
                  i
                ),
              this.loaded(e, n, i);
          });
        }
        saveMissing(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          if (null != n && "" !== n) {
            if (this.backend && this.backend.create) {
              let s = { ...i, isUpdate: o },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let o;
                  (o = 5 === l.length ? l(e, t, n, r, s) : l(e, t, n, r)) &&
                  "function" == typeof o.then
                    ? o.then((e) => a(null, e)).catch(a)
                    : a(null, o);
                } catch (e) {
                  a(e);
                }
              else l(e, t, n, r, a, s);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function D() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function z(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function F() {}
      class V extends a {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = z(e)),
            (this.services = {}),
            (this.logger = i),
            (this.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                (t) => {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                }
              );
            })(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" == typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let r = D();
          function o(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...z(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? i.init(o(this.modules.logger), this.options)
              : i.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = M);
            let n = new O(this.options);
            this.store = new x(this.options.resources, this.options);
            let a = this.services;
            (a.logger = i),
              (a.resourceStore = this.store),
              (a.languageUtils = n),
              (a.pluralResolver = new T(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    r.interpolation.format) &&
                ((a.formatter = o(t)),
                a.formatter.init(a, this.options),
                (this.options.interpolation.format = a.formatter.format.bind(
                  a.formatter
                ))),
              (a.interpolator = new $(this.options)),
              (a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (a.backendConnector = new _(
                o(this.modules.backend),
                a.resourceStore,
                a,
                this.options
              )),
              a.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((a.languageDetector = o(this.modules.languageDetector)),
                a.languageDetector.init &&
                  a.languageDetector.init(
                    a,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((a.i18nFormat = o(this.modules.i18nFormat)),
                a.i18nFormat.init && a.i18nFormat.init(this)),
              (this.translator = new k(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = F),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            ),
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let a = s(),
            l = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!"
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  a.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? l()
              : setTimeout(l, 0),
            a
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : F,
            n = t,
            r = "string" == typeof e ? e : this.language;
          if (
            ("function" == typeof e && (n = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              r &&
              "cimode" === r.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return n();
            let e = [],
              t = (t) => {
                t &&
                  "cimode" !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            r
              ? t(r)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  n(e);
              });
          } else n(null);
        }
        reloadResources(e, t, n) {
          let r = s();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = F),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && S.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(["cimode", "dev"].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          let r = s();
          this.emit("languageChanging", e);
          let o = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            i = (e, i) => {
              i
                ? (o(i),
                  this.translator.changeLanguage(i),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", i),
                  this.logger.log("languageChanged", i))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            a = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let n =
                "string" == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || o(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  i(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(a)
                  : this.services.languageDetector.detect(a)
                : a(e)
              : a(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          let o = function (e, t) {
            let i, a;
            if ("object" != typeof t) {
              for (
                var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), u = 2;
                u < s;
                u++
              )
                l[u - 2] = arguments[u];
              i = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else i = { ...t };
            (i.lng = i.lng || o.lng),
              (i.lngs = i.lngs || o.lngs),
              (i.ns = i.ns || o.ns),
              (i.keyPrefix = i.keyPrefix || n || o.keyPrefix);
            let c = r.options.keySeparator || ".";
            return (
              (a =
                i.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${i.keyPrefix}${c}${e}`)
                  : i.keyPrefix
                  ? `${i.keyPrefix}${c}${e}`
                  : e),
              r.t(a, i)
            );
          };
          return (
            "string" == typeof e ? (o.lng = e) : (o.lngs = e),
            (o.ns = t),
            (o.keyPrefix = n),
            o
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          let i = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            let e = t.precheck(this, i);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(n, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (i(n, e) && (!r || i(o, e)))
          );
        }
        loadNamespaces(e, t) {
          let n = s();
          return this.options.ns
            ? ("string" == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let n = s();
          "string" == typeof e && (e = [e]);
          let r = this.options.preload || [],
            o = e.filter(
              (e) =>
                0 > r.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e)
            );
          return o.length
            ? ((this.options.preload = r.concat(o)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new O(D())
                ).getLanguagePartFromCode(e)
              ) > -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr"
            : "rtl";
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new V(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : F,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = { ...this.options, ...e, isClone: !0 },
            o = new V(r);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (o.logger = o.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              o[e] = this[e];
            }),
            (o.services = { ...this.services }),
            (o.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            n &&
              ((o.store = new x(this.store.data, r)),
              (o.services.resourceStore = o.store)),
            (o.translator = new k(o.services, r)),
            o.translator.on("*", function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              o.emit(e, ...n);
            }),
            o.init(r, t),
            (o.translator.options = r),
            (o.translator.backendConnector.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            o
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let H = V.createInstance();
      H.createInstance = V.createInstance;
      let B = H.createInstance;
      H.dir,
        H.init,
        H.loadResources,
        H.reloadResources,
        H.use,
        H.changeLanguage,
        H.getFixedT,
        H.t,
        H.exists,
        H.setDefaultNamespace,
        H.hasLoadedNamespace,
        H.loadNamespaces,
        H.loadLanguages;
    },
    603: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return l;
        },
        j: function () {
          return s;
        },
      });
      let r =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        o = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        i = (e) => o[e],
        a = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(r, i),
        };
      function s() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        a = { ...a, ...e };
      }
      function l() {
        return a;
      }
    },
    5942: function (e, t, n) {
      "use strict";
      let r;
      function o(e) {
        r = e;
      }
      function i() {
        return r;
      }
      n.d(t, {
        I: function () {
          return o;
        },
        n: function () {
          return i;
        },
      });
    },
    6343: function (e, t, n) {
      "use strict";
      n.d(t, {
        a3: function () {
          return m;
        },
        $G: function () {
          return g;
        },
      });
      var r = n(2265);
      n(2377), Object.create(null);
      let o = {};
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && o[t[0]]) ||
          ("string" == typeof t[0] && (o[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                console.warn(...t);
            }
          })(...t));
      }
      let a = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          let n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function s(e, t, n) {
        e.loadNamespaces(t, a(e, n));
      }
      function l(e, t, n, r) {
        "string" == typeof n && (n = [n]),
          n.forEach((t) => {
            0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
          }),
          e.loadLanguages(t, a(e, r));
      }
      var u = n(603),
        c = n(5942);
      n(5362);
      let d = (0, r.createContext)();
      class f {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      let p = (e, t) => {
        let n = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            n.current = t ? n.current : e;
          }, [e, t]),
          n.current
        );
      };
      function h(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function g(e) {
        var t, n;
        let o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { i18n: a } = o,
          { i18n: g, defaultNS: m } = (0, r.useContext)(d) || {},
          v = a || g || (0, c.n)();
        if ((v && !v.reportNamespaces && (v.reportNamespaces = new f()), !v)) {
          i(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          let e = (e, t) =>
              "string" == typeof t
                ? t
                : t && "object" == typeof t && "string" == typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        v.options.react &&
          void 0 !== v.options.react.wait &&
          i(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        let y = { ...(0, u.J)(), ...v.options.react, ...o },
          { useSuspense: b, keyPrefix: w } = y,
          x = e || m || (v.options && v.options.defaultNS);
        (x = "string" == typeof x ? [x] : x || ["translation"]),
          v.reportNamespaces.addUsedNamespaces &&
            v.reportNamespaces.addUsedNamespaces(x);
        let S =
            (v.isInitialized || v.initializedStoreOnce) &&
            x.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = t.languages[0],
                          o = !!t.options && t.options.fallbackLng,
                          i = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        let a = (e, n) => {
                          let r =
                            t.services.backendConnector.state[`${e}|${n}`];
                          return -1 === r || 2 === r;
                        };
                        return (
                          (!(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1
                          ) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!a(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(r, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources &&
                              !t.options.partialBundledLanguages) ||
                            (a(r, e) && (!o || a(i, e)))
                          )
                        );
                      })(e, t, n)
                  : (i("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, v, y)
            ),
          E =
            ((t = o.lng || null),
            (n = "fallback" === y.nsMode ? x : x[0]),
            (0, r.useCallback)(h(v, t, n, w), [v, t, n, w])),
          k = () => E,
          C = () => h(v, o.lng || null, "fallback" === y.nsMode ? x : x[0], w),
          [O, P] = (0, r.useState)(k),
          R = x.join();
        o.lng && (R = `${o.lng}${R}`);
        let L = p(R),
          N = (0, r.useRef)(!0);
        (0, r.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = y;
          function n() {
            N.current && P(C);
          }
          return (
            (N.current = !0),
            S ||
              b ||
              (o.lng
                ? l(v, o.lng, x, () => {
                    N.current && P(C);
                  })
                : s(v, x, () => {
                    N.current && P(C);
                  })),
            S && L && L !== R && N.current && P(C),
            e && v && v.on(e, n),
            t && v && v.store.on(t, n),
            () => {
              (N.current = !1),
                e && v && e.split(" ").forEach((e) => v.off(e, n)),
                t && v && t.split(" ").forEach((e) => v.store.off(e, n));
            }
          );
        }, [v, R]),
          (0, r.useEffect)(() => {
            N.current && S && P(k);
          }, [v, w, S]);
        let j = [O, v, S];
        if (((j.t = O), (j.i18n = v), (j.ready = S), S || (!S && !b))) return j;
        throw new Promise((e) => {
          o.lng ? l(v, o.lng, x, () => e()) : s(v, x, () => e());
        });
      }
      function m(e) {
        let { i18n: t, defaultNS: n, children: o } = e,
          i = (0, r.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, r.createElement)(d.Provider, { value: i }, o);
      }
    },
    5362: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return i;
        },
      });
      var r = n(603),
        o = n(5942);
      let i = {
        type: "3rdParty",
        init(e) {
          (0, r.j)(e.options.react), (0, o.I)(e);
        },
      };
    },
    1367: function (e, t, n) {
      "use strict";
      n.d(t, {
        m6: function () {
          return M;
        },
      });
      let r = /^\[(.+)\]$/;
      function o(e, t) {
        let n = e;
        return (
          t.split("-").forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      let i = /\s+/;
      function a() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              let n;
              if ("string" == typeof t) return t;
              let r = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (n = e(t[o])) && (r && (r += " "), (r += n));
              return r;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      function s(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        h = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        g =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function m(e) {
        return y(e) || c.has(e) || u.test(e);
      }
      function v(e) {
        return j(e, "length", T);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function b(e) {
        return j(e, "number", y);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function S(e) {
        return l.test(e);
      }
      function E(e) {
        return d.test(e);
      }
      let k = new Set(["length", "size", "percentage"]);
      function C(e) {
        return j(e, k, A);
      }
      function O(e) {
        return j(e, "position", A);
      }
      let P = new Set(["image", "url"]);
      function R(e) {
        return j(e, P, I);
      }
      function L(e) {
        return j(e, "", $);
      }
      function N() {
        return !0;
      }
      function j(e, t, n) {
        let r = l.exec(e);
        return (
          !!r &&
          (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
        );
      }
      function T(e) {
        return f.test(e) && !p.test(e);
      }
      function A() {
        return !1;
      }
      function $(e) {
        return h.test(e);
      }
      function I(e) {
        return g.test(e);
      }
      let M = (function (e) {
        let t, n, s;
        let l = function (i) {
          var a;
          return (
            (n = (t = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  n = new Map(),
                  r = new Map();
                function o(o, i) {
                  n.set(o, i), ++t > e && ((t = 0), (r = n), (n = new Map()));
                }
                return {
                  get(e) {
                    let t = n.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = r.get(e))
                      ? (o(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    n.has(e) ? n.set(e, t) : o(e, t);
                  },
                };
              })((a = [].reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  n = 1 === t.length,
                  r = t[0],
                  o = t.length;
                return function (e) {
                  let i;
                  let a = [],
                    s = 0,
                    l = 0;
                  for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === s) {
                      if (c === r && (n || e.slice(u, u + o) === t)) {
                        a.push(e.slice(l, u)), (l = u + o);
                        continue;
                      }
                      if ("/" === c) {
                        i = u;
                        continue;
                      }
                    }
                    "[" === c ? s++ : "]" === c && s--;
                  }
                  let u = 0 === a.length ? e : e.substring(l),
                    c = u.startsWith("!"),
                    d = c ? u.substring(1) : u;
                  return {
                    modifiers: a,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: i && i > l ? i - l : void 0,
                  };
                };
              })(a),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: n, prefix: r } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      r
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? r + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      r + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, n, r, i) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? n : o(n, t)).classGroupId = r;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(i), n, r, i);
                                return;
                              }
                              n.validators.push({
                                validator: t,
                                classGroupId: r,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, a]) => {
                              e(a, o(n, t), r, i);
                            });
                          });
                        })(t, i, e, n);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: n,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let n = e.split("-");
                    return (
                      "" === n[0] && 1 !== n.length && n.shift(),
                      (function e(t, n) {
                        if (0 === t.length) return n.classGroupId;
                        let r = t[0],
                          o = n.nextPart.get(r),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 === n.validators.length) return;
                        let a = t.join("-");
                        return n.validators.find(({ validator: e }) => e(a))
                          ?.classGroupId;
                      })(n, t) ||
                        (function (e) {
                          if (r.test(e)) {
                            let t = r.exec(e)[1],
                              n = t?.substring(0, t.indexOf(":"));
                            if (n) return "arbitrary.." + n;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let r = n[e] || [];
                    return t && i[e] ? [...r, ...i[e]] : r;
                  },
                };
              })(a),
            }).cache.get),
            (s = t.cache.set),
            (l = u),
            u(i)
          );
        };
        function u(e) {
          let r = n(e);
          if (r) return r;
          let o = (function (e, t) {
            let {
                splitModifiers: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: o,
              } = t,
              a = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: i,
                    maybePostfixModifierPosition: a,
                  } = n(e),
                  s = r(a ? i.substring(0, a) : i),
                  l = !!a;
                if (!s) {
                  if (!a || !(s = r(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                let u = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    n = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e);
                    }),
                    t.push(...n.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? u + "!" : u,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: r,
                  } = e,
                  i = t + n;
                return (
                  !a.has(i) &&
                  (a.add(i), o(n, r).forEach((e) => a.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, t);
          return s(e, o), o;
        }
        return function () {
          return l(a.apply(null, arguments));
        };
      })(function () {
        let e = s("colors"),
          t = s("spacing"),
          n = s("blur"),
          r = s("brightness"),
          o = s("borderColor"),
          i = s("borderRadius"),
          a = s("borderSpacing"),
          l = s("borderWidth"),
          u = s("contrast"),
          c = s("grayscale"),
          d = s("hueRotate"),
          f = s("invert"),
          p = s("gap"),
          h = s("gradientColorStops"),
          g = s("gradientColorStopPositions"),
          k = s("inset"),
          P = s("margin"),
          j = s("opacity"),
          T = s("padding"),
          A = s("saturate"),
          $ = s("scale"),
          I = s("sepia"),
          M = s("skew"),
          _ = s("space"),
          D = s("translate"),
          z = () => ["auto", "contain", "none"],
          F = () => ["auto", "hidden", "clip", "visible", "scroll"],
          V = () => ["auto", S, t],
          H = () => [S, t],
          B = () => ["", m, v],
          W = () => ["auto", y, S],
          U = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          K = () => ["solid", "dashed", "dotted", "double", "none"],
          Z = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          q = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          J = () => ["", "0", S],
          G = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Y = () => [y, b],
          X = () => [y, S];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [N],
            spacing: [m, v],
            blur: ["none", "", E, S],
            brightness: Y(),
            borderColor: [e],
            borderRadius: ["none", "", "full", E, S],
            borderSpacing: H(),
            borderWidth: B(),
            contrast: Y(),
            grayscale: J(),
            hueRotate: X(),
            invert: J(),
            gap: H(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, v],
            inset: V(),
            margin: V(),
            opacity: Y(),
            padding: H(),
            saturate: Y(),
            scale: Y(),
            sepia: J(),
            skew: X(),
            space: H(),
            translate: H(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", S] }],
            container: ["container"],
            columns: [{ columns: [E] }],
            "break-after": [{ "break-after": G() }],
            "break-before": [{ "break-before": G() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...U(), S] }],
            overflow: [{ overflow: F() }],
            "overflow-x": [{ "overflow-x": F() }],
            "overflow-y": [{ "overflow-y": F() }],
            overscroll: [{ overscroll: z() }],
            "overscroll-x": [{ "overscroll-x": z() }],
            "overscroll-y": [{ "overscroll-y": z() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [k] }],
            "inset-x": [{ "inset-x": [k] }],
            "inset-y": [{ "inset-y": [k] }],
            start: [{ start: [k] }],
            end: [{ end: [k] }],
            top: [{ top: [k] }],
            right: [{ right: [k] }],
            bottom: [{ bottom: [k] }],
            left: [{ left: [k] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, S] }],
            basis: [{ basis: V() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", S] }],
            grow: [{ grow: J() }],
            shrink: [{ shrink: J() }],
            order: [{ order: ["first", "last", "none", w, S] }],
            "grid-cols": [{ "grid-cols": [N] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, S] }, S] }],
            "col-start": [{ "col-start": W() }],
            "col-end": [{ "col-end": W() }],
            "grid-rows": [{ "grid-rows": [N] }],
            "row-start-end": [{ row: ["auto", { span: [w, S] }, S] }],
            "row-start": [{ "row-start": W() }],
            "row-end": [{ "row-end": W() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", S] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", S] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...q()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...q(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...q(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [T] }],
            px: [{ px: [T] }],
            py: [{ py: [T] }],
            ps: [{ ps: [T] }],
            pe: [{ pe: [T] }],
            pt: [{ pt: [T] }],
            pr: [{ pr: [T] }],
            pb: [{ pb: [T] }],
            pl: [{ pl: [T] }],
            m: [{ m: [P] }],
            mx: [{ mx: [P] }],
            my: [{ my: [P] }],
            ms: [{ ms: [P] }],
            me: [{ me: [P] }],
            mt: [{ mt: [P] }],
            mr: [{ mr: [P] }],
            mb: [{ mb: [P] }],
            ml: [{ ml: [P] }],
            "space-x": [{ "space-x": [_] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [_] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", S, t] },
            ],
            "min-w": [{ "min-w": [S, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  S,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [E] },
                  E,
                ],
              },
            ],
            h: [
              { h: [S, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [S, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", E, v] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  b,
                ],
              },
            ],
            "font-family": [{ font: [N] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  S,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, b] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  m,
                  S,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", S] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", S] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [j] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [j] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...K(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", m, v] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", m, S] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: H() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  S,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", S] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [j] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...U(), O] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", C] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  R,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [g] }],
            "gradient-via-pos": [{ via: [g] }],
            "gradient-to-pos": [{ to: [g] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [j] }],
            "border-style": [{ border: [...K(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [j] }],
            "divide-style": [{ divide: K() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...K()] }],
            "outline-offset": [{ "outline-offset": [m, S] }],
            "outline-w": [{ outline: [m, v] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: B() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [j] }],
            "ring-offset-w": [{ "ring-offset": [m, v] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", E, L] }],
            "shadow-color": [{ shadow: [N] }],
            opacity: [{ opacity: [j] }],
            "mix-blend": [
              { "mix-blend": [...Z(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": Z() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", E, S] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [A] }],
            sepia: [{ sepia: [I] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [j] }],
            "backdrop-saturate": [{ "backdrop-saturate": [A] }],
            "backdrop-sepia": [{ "backdrop-sepia": [I] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  S,
                ],
              },
            ],
            duration: [{ duration: X() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", S] }],
            delay: [{ delay: X() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", S] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [$] }],
            "scale-x": [{ "scale-x": [$] }],
            "scale-y": [{ "scale-y": [$] }],
            rotate: [{ rotate: [w, S] }],
            "translate-x": [{ "translate-x": [D] }],
            "translate-y": [{ "translate-y": [D] }],
            "skew-x": [{ "skew-x": [M] }],
            "skew-y": [{ "skew-y": [M] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  S,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  S,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": H() }],
            "scroll-mx": [{ "scroll-mx": H() }],
            "scroll-my": [{ "scroll-my": H() }],
            "scroll-ms": [{ "scroll-ms": H() }],
            "scroll-me": [{ "scroll-me": H() }],
            "scroll-mt": [{ "scroll-mt": H() }],
            "scroll-mr": [{ "scroll-mr": H() }],
            "scroll-mb": [{ "scroll-mb": H() }],
            "scroll-ml": [{ "scroll-ml": H() }],
            "scroll-p": [{ "scroll-p": H() }],
            "scroll-px": [{ "scroll-px": H() }],
            "scroll-py": [{ "scroll-py": H() }],
            "scroll-ps": [{ "scroll-ps": H() }],
            "scroll-pe": [{ "scroll-pe": H() }],
            "scroll-pt": [{ "scroll-pt": H() }],
            "scroll-pr": [{ "scroll-pr": H() }],
            "scroll-pb": [{ "scroll-pb": H() }],
            "scroll-pl": [{ "scroll-pl": H() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", S] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [m, v, b] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
