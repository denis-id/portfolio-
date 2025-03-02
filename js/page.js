(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61],
  {
    1539: function (e, t, s) {
      var i = {
        "./en/default.json": [7653, 653],
        "./id/default.json": [2524, 524],
      };
      function r(e) {
        if (!s.o(i, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = i[e],
          r = t[0];
        return s.e(t[1]).then(function () {
          return s.t(r, 19);
        });
      }
      (r.keys = function () {
        return Object.keys(i);
      }),
        (r.id = 1539),
        (e.exports = r);
    },
    6593: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 7665)),
        Promise.resolve().then(s.bind(s, 4393)),
        Promise.resolve().then(s.bind(s, 7125)),
        Promise.resolve().then(s.bind(s, 1169)),
        Promise.resolve().then(s.bind(s, 2770)),
        Promise.resolve().then(s.bind(s, 5704)),
        Promise.resolve().then(s.bind(s, 3886));
    },
    3300: function (e, t, s) {
      "use strict";
      s.d(t, {
        O: function () {
          return r;
        },
      });
      var i = s(7437);
      function r() {
        return (0, i.jsx)("div", {
          className: "text-xl",
          children: "DENIS",
        });
      }
    },
    8241: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return r;
        },
      });
      var i = s(7437);
      function r(e) {
        return (0, i.jsx)("div", {
          className: ""
            .concat(
              "large" === e.size
                ? "lg:px-16 w-full px-6"
                : "w-full px-4 lg:px-0 max-w-7xl mx-auto",
              " h-full "
            )
            .concat(e.className || " "),
          children: e.children,
        });
      }
      s(2265);
    },
    7459: function (e, t, s) {
      "use strict";
      s.d(t, {
        V: function () {
          return n;
        },
      });
      var i = s(7437),
        r = s(8241);
      function n(e) {
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", {
              className:
                "text-center pb-2 italic lg:text-4xl text-xl text-slate-200",
              children: e.title,
            }),
            (0, i.jsx)(r._, {
              children: (0, i.jsx)("div", {
                className: "border-b border-b-slate-50/10 mt-3  mx-auto ",
              }),
            }),
          ],
        });
      }
    },
    7665: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        });
      var i = s(7437);
      let r = { SIZE: { NAVBAR_HEIGHT: 68 } };
      var n = s(2265),
        a = s(8241),
        l = s(3300),
        o = s(7907),
        c = s(6343),
        d = s(2177),
        u = s(3959),
        m = s(2169);
      let h = u.fC;
      u.ZA;
      let p = u.B4,
        x = n.forwardRef((e, t) => {
          let { className: s, children: r, ...n } = e;
          return (0, i.jsxs)(u.xz, {
            ref: t,
            className: (0, m.cn)(
              "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              s
            ),
            ...n,
            children: [
              r,
              (0, i.jsx)(u.JO, {
                asChild: !0,
                children: (0, i.jsx)(d.jnn, {
                  className: "h-4 w-4 opacity-50",
                }),
              }),
            ],
          });
        });
      x.displayName = u.xz.displayName;
      let f = n.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, i.jsx)(u.u_, {
          ref: t,
          className: (0, m.cn)(
            "flex cursor-default items-center justify-center py-1",
            s
          ),
          ...r,
          children: (0, i.jsx)(d.g8U, {}),
        });
      });
      f.displayName = u.u_.displayName;
      let g = n.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, i.jsx)(u.$G, {
          ref: t,
          className: (0, m.cn)(
            "flex cursor-default items-center justify-center py-1",
            s
          ),
          ...r,
          children: (0, i.jsx)(d.v4q, {}),
        });
      });
      g.displayName = u.$G.displayName;
      let v = n.forwardRef((e, t) => {
        let { className: s, children: r, position: n = "popper", ...a } = e;
        return (0, i.jsx)(u.h_, {
          children: (0, i.jsxs)(u.VY, {
            ref: t,
            className: (0, m.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              s
            ),
            position: n,
            ...a,
            children: [
              (0, i.jsx)(f, {}),
              (0, i.jsx)(u.l_, {
                className: (0, m.cn)(
                  "p-1",
                  "popper" === n &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: r,
              }),
              (0, i.jsx)(g, {}),
            ],
          }),
        });
      });
      (v.displayName = u.VY.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, i.jsx)(u.__, {
            ref: t,
            className: (0, m.cn)("px-2 py-1.5 text-sm font-semibold", s),
            ...r,
          });
        }).displayName = u.__.displayName);
      let j = n.forwardRef((e, t) => {
        let { className: s, children: r, ...n } = e;
        return (0, i.jsxs)(u.ck, {
          ref: t,
          className: (0, m.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            s
          ),
          ...n,
          children: [
            (0, i.jsx)("span", {
              className:
                "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, i.jsx)(u.wU, {
                children: (0, i.jsx)(d.nQG, { className: "h-4 w-4" }),
              }),
            }),
            (0, i.jsx)(u.eT, { children: r }),
          ],
        });
      });
      (j.displayName = u.ck.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, i.jsx)(u.Z0, {
            ref: t,
            className: (0, m.cn)("-mx-1 my-1 h-px bg-muted", s),
            ...r,
          });
        }).displayName = u.Z0.displayName);
      var b = s(535),
        N = s.n(b);
      function _() {
        let { i18n: e } = (0, c.$G)(),
          t = e.language,
          s = (0, o.useRouter)(),
          r = (0, o.usePathname)();
        return (0, i.jsx)("div", {
          style: { zIndex: 99999 },
          children: (0, i.jsxs)(h, {
            onValueChange: (e) => {
              let i = new Date();
              i.setTime(i.getTime() + 2592e6);
              let n = i.toUTCString();
              (document.cookie = "NEXT_LOCALE="
                .concat(e, ";expires=")
                .concat(n, ";path=/")),
                t === N().defaultLocale
                  ? s.push("/" + e + r)
                  : s.push(r.replace("/".concat(t), "/".concat(e))),
                s.refresh();
            },
            value: t,
            children: [
              (0, i.jsx)(x, {
                className: "w-[180px]",
                children: (0, i.jsx)(p, { placeholder: "Theme" }),
              }),
              (0, i.jsx)(v, {
                children: [
                  { label: "Indonesian", value: "id" },
                  { label: "English", value: "en" },
                ].map((e, t) =>
                  (0, i.jsx)(j, { value: e.value, children: e.label }, t)
                ),
              }),
            ],
          }),
        });
      }
      var w = s(5487),
        y = function () {
          let [e, t] = (0, n.useState)(!1),
            { t: s } = (0, w.$G)(),
            o = [
              { label: s("home"), link: "#" },
              { label: s("about"), link: "#about" },
              { label: s("project"), link: "#project" },
              { label: s("contact"), link: "#contact" },
            ];
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 5);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, i.jsx)("nav", {
              style: {
                height: e ? r.SIZE.NAVBAR_HEIGHT : r.SIZE.NAVBAR_HEIGHT + 60,
                zIndex: 1,
              },
              className:
                " fixed  w-full backdrop-blur duration-300 border-b ".concat(
                  e
                    ? " bg-slate-900/60 border-b-slate-50/10 shadow-lg"
                    : "border-b-transparent"
                ),
              children: (0, i.jsx)(a._, {
                size: "large",
                children: (0, i.jsxs)("div", {
                  className: "grid grid-cols-2 lg:grid-cols-3 h-full ",
                  children: [
                    (0, i.jsx)("div", {
                      className: "flex items-center h-full",
                      children: (0, i.jsx)(l.O, {}),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "lg:flex justify-center items-center gap-4  hidden",
                      children: o.map((e, t) =>
                        (0, i.jsx)(
                          "a",
                          { href: e.link, children: e.label.toUpperCase() },
                          t
                        )
                      ),
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center justify-end",
                      children: (0, i.jsx)(_, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        };
    },
    4393: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          AboutPage: function () {
            return c;
          },
        });
      var i = s(7437),
        r = s(5487),
        n = s(7459),
        a = s(8241),
        l = s(703),
        o = s(1297);
      function c() {
        let { t: e } = (0, r.$G)();
        return (0, i.jsxs)("div", {
          id: "about",
          className: "min-h-screen pt-32",
          children: [
            (0, i.jsx)(n.V, { title: e("about_me") }),
            (0, i.jsx)(a._, {
              children: (0, i.jsxs)("div", {
                className: "mt-24 grid gap-10",
                children: [
                  (0, i.jsxs)("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      (0, i.jsx)(l.default, {
                        className: "rounded-lg w-full",
                        src: o.o.IMG.ABOUT_2,
                        alt: "Denis",
                        width: 600,
                        height: 600,
                      }),
                      (0, i.jsx)(l.default, {
                        className: "rounded-lg w-full",
                        src: o.o.IMG.ABOUT_1,
                        alt: "Denis",
                        width: 600,
                        height: 600,
                      }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    className: "font-light",
                    children: e("about_1"),
                  }),
                  (0, i.jsx)("p", {
                    className: "font-light",
                    children: e("about_2"),
                  }),
                  (0, i.jsx)("p", {
                    className: "font-light",
                    children: e("about_3"),
                  }),
                  (0, i.jsx)(l.default, {
                    className: "rounded-lg w-full",
                    src: o.o.IMG.ABOUT_3,
                    alt: "Denis",
                    width: 1200,
                    height: 1200,
                  }),
                  (0, i.jsx)("p", {
                    className: "font-light",
                    children: e("about_4"),
                  }),
                  (0, i.jsx)("p", {
                    className: "font-light",
                    children: e("about_5"),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7125: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ContactPage: function () {
            return m;
          },
        });
      var i = s(7437),
        r = s(6343),
        n = s(575),
        a = s(703);
      function l(e) {
        let { t } = (0, r.$G)(),
          s = e.data;
        return (
          s.icon,
          (0, i.jsxs)("div", {
            id: "card_medsos",
            className: "w-full",
            children: [
              (0, i.jsx)("div", {
                className: "outline_card",
                children: (0, i.jsxs)("div", {
                  className:
                    "content-outline relative p-2 flex flex-col justify-between h-full",
                  children: [
                    (0, i.jsx)("h3", {
                      className:
                        "font-semibold border-l-2 pl-2 text-3xl mt-3 border-l-primary-main text-slate-400 ",
                      children: s.linkText,
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("a", {
                          href: s.link,
                          className: "btn_content",
                          target: "_blank",
                          children: (0, i.jsx)(n.z, {
                            variant: "outline",
                            className: "flex items-center gap-2 px-5",
                            children: (0, i.jsx)("div", {
                              children: t("visit").toUpperCase(),
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            " absolute right-1 bottom-1 h-3 w-3 border border-r border-r-slate-50/20 border-b-slate-50/20 border-b ",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: "container w-full bg-main-card",
                children: (0, i.jsx)("div", {
                  className: " w-full bg-main-card/10 p-5",
                  children: (0, i.jsxs)("div", {
                    className: "content  flex flex-col items-center",
                    children: [
                      s.icon &&
                        (0, i.jsx)(a.default, {
                          src: s.icon,
                          alt: s.text,
                          width: 120,
                          height: 80,
                        }),
                      (0, i.jsx)("h2", {
                        className: "uppercase text-slate-500 ",
                        children: s.text,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var o = s(8241),
        c = s(1297),
        d = s(7459),
        u = s(5487);
      function m() {
        let e = [
            {
              text: "Email",
              link: "mailto:denisryana2012@gmail.com",
              linkText: "denisryana2012@gmail.com",
              icon: c.o.ICONS.IC_EMAIL,
            },
            {
              text: "Github",
              link: "https://github.com/DENA-ID",
              linkText: "DENA-ID",
              icon: c.o.ICONS.IC_GITHUB,
            },
            {
              text: "WhatsApp",
              link: "https://api.whatsapp.com/send/?phone=6282340987518&text&type=phone_number&app_absent=0",
              linkText: "✆ +62 823-4098-7518",
              icon: c.o.ICONS.IC_WA,
            },
            {
              text: "Linkedin",
              link: "https://www.linkedin.com/in/denis-arya-buana/",
              linkText: "@Denis Arya Buana",
              icon: c.o.ICONS.IC_LINKEDIN,
            },
            {
              text: "Instagram",
              link: "https://www.instagram.com/denisryna/",
              linkText: "@denisryna",
              icon: c.o.ICONS.IC_INSTAGRAM,
            },
            {
              text: "Facebook",
              link: "https://web.facebook.com/denis.aryabuana.9",
              linkText: "@Denis",
              icon: c.o.ICONS.IC_FACEBOOK,
            },
          ],
          { t } = (0, u.$G)();
        return (0, i.jsx)("div", {
          id: "contact",
          className: "pt-32 min-h-screen",
          children: (0, i.jsxs)(o._, {
            children: [
              (0, i.jsx)(d.V, { title: t("connect_with_me") }),
              (0, i.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-10",
                children: e.map((e, t) => (0, i.jsx)(l, { data: e }, t)),
              }),
            ],
          }),
        });
      }
    },
    1169: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          FooterPage: function () {
            return l;
          },
        });
      var i = s(7437),
        r = s(8241),
        n = s(3300),
        a = s(5487);
      function l() {
        let { t: e } = (0, a.$G)(),
          t = [
            { label: e("home"), link: "#" },
            { label: e("about"), link: "#about" },
            { label: e("project"), link: "#project" },
            { label: e("contact"), link: "#contact" },
          ];
        return (0, i.jsxs)("footer", {
          className: "w-full bg-main-card py-10 grid gap-8",
          children: [
            (0, i.jsx)(r._, {
              children: (0, i.jsx)("div", {
                children: (0, i.jsxs)("div", {
                  className: "flex justify-between lg:flex-row flex-col gap-4",
                  children: [
                    (0, i.jsx)(n.O, {}),
                    (0, i.jsx)("ul", {
                      className: "flex gap-3 font-light text-slate-400",
                      children: t.map((e, t) =>
                        (0, i.jsx)(
                          "li",
                          {
                            children: (0, i.jsx)("a", {
                              href: e.link,
                              children: e.label,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, i.jsx)("div", { className: "h-[1px] w-full bg-slate-50/10" }),
            (0, i.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center text-center gap-4",
              children: [
                (0, i.jsxs)("div", {
                  className: "text-sm font-light text-slate-500",
                  children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Denis - All Rights Reserved",
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "text-slate-500",
                  children: "V 3.1.0",
                }),
              ],
            }),
          ],
        });
      }
    },
    2770: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HeroPage: function () {
            return c;
          },
        });
      var i = s(7437),
        r = s(8241),
        n = s(5487),
        a = s(1297),
        l = s(575),
        o = s(2177);
      function c() {
        let { t: e } = (0, n.$G)();
        return (0, i.jsx)("div", {
          className: "h-[100dvh] hero bg-cover",
          id: "",
          style: { background: "url(".concat(a.o.IMG.HERO_COVER, ")") },
          children: (0, i.jsx)("div", {
            className: "h-full pt-32 lg:pt-0 bg-primary hero-content",
            children: (0, i.jsx)(r._, {
              children: (0, i.jsx)("div", {
                className:
                  "h-full flex items-center justify-center max-w-3xl mx-auto ",
                children: (0, i.jsxs)("div", {
                  className: "text-center grid gap-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "lg:text-3xl text-2xl",
                      children: e("Hi_there"),
                    }),
                    (0, i.jsx)("div", {
                      className: "lg:text-6xl text-2xl text-slate-200/90",
                      children: e("I'm Denis"),
                    }),
                    (0, i.jsx)("h1", {
                      className:
                        "lg:text-7xl text-3xl px-3 font-semibold uppercase",
                      children: "Denis Arya Buana",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-slate-400",
                      children: e(
                        "I'm a Fullstack Developer, i like to learn new things and i am very interested in the world of technology and i want to upgrade my skills in coding especially in the field of software engineering"
                      ),
                    }),
                    (0, i.jsxs)(l.z, {
                      onClick: () => {
                        fetch("/RESUME_DENIS.pdf/")
                          .then((e) => e.blob())
                          .then((e) => {
                            let t = window.URL.createObjectURL(new Blob([e])),
                              s = document.createElement("a");
                            (s.href = t),
                              (s.download = "RESUME_DENIS.pdf"),
                              document.body.appendChild(s),
                              s.click(),
                              window.URL.revokeObjectURL(t),
                              document.body.removeChild(s);
                          })
                          .catch((e) =>
                            console.error("Error downloading file:", e)
                          );
                      },
                      className: "flex gap-2 w-fit  mx-auto mt-3",
                      variant: "ghost",
                      children: [
                        (0, i.jsx)("div", { children: "Download CV" }),
                        " ",
                        (0, i.jsx)(o._8t, {}),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    5704: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ProjectPage: function () {
            return u;
          },
        });
      var i = s(7437),
        r = s(8241),
        n = s(7459),
        a = s(5487),
        l = s(1297);
      let o = [
        {
          title: "Aplikasi Sewa Mobil",
          image: l.o.PROJECT.Aplikasi_Sewa_Mobil,
          description: "Aplikasi_Sewa_Mobil",
          url: "https://denis-id.github.io/portfolio/sewa_mobil/RentalX_20-07-24-main/index.html",
        },
        {
          title: "Rupbasan Kemenkumham Bali",
          image: l.o.PROJECT.Rupbasan_Kemenkumham_Bali,
          description: "Rupbasan_Kemenkumham_Bali",
          url: "https://www.rupbasandenpasar.com/",
        },
        {
          title: "CMS Fair Indonesia",
          image: l.o.PROJECT.CMS_FAIR,
          description: "fair_cms_description",
          url: "https://www.fair-indonesia.com",
        },
        {
          title: "Food Order Landing Page",
          image: l.o.PROJECT.Food_Order_Landing_Page,
          description: "Food_Order_Landing_Page",
          url: "https://aldiniananda.github.io/dapur-dila/",
        },
        {
          title: "Ally And Co Online Shop",
          image: l.o.PROJECT.ANC,
          description: "anc_description",
          url: "https://allyandco.id/",
        },
        {
          title: "Wirguns Jewelry Shop",
          image: l.o.PROJECT.Wirguns_Jewelry_Shop,
          description: "Wirguns_Jewelry_Shop",
          url: "https://wirguns.github.io/jewelry/",
        },
      ];
      var c = s(703),
        d = s(575);
      function u() {
        let { t: e } = (0, a.$G)();
        return (0, i.jsx)("div", {
          id: "project",
          className: "min-h-screen pt-32",
          children: (0, i.jsxs)(r._, {
            children: [
              (0, i.jsx)(n.V, { title: e("my_project") }),
              (0, i.jsx)("div", {
                className: "mt-10 grid lg:grid-cols-3 grid-cols-2 gap-4",
                children: o.map((t, s) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      className: "bg-main-card border p-1",
                      children: [
                        (0, i.jsx)(c.default, {
                          src: t.image,
                          alt: t.title,
                          width: 500,
                          height: 500,
                        }),
                        (0, i.jsxs)("div", {
                          className: "p-3 grid gap-3",
                          children: [
                            (0, i.jsx)("h1", {
                              className: "lg:text-xl text-xs font-light",
                              children: t.title,
                            }),
                            (0, i.jsx)("a", {
                              href: t.url,
                              target: "_blank",
                              children: (0, i.jsx)(d.z, {
                                className: "text-xs lg:text-base",
                                disabled: !t.url,
                                variant: "outline",
                                children: e("visit").toUpperCase(),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    575: function (e, t, s) {
      "use strict";
      s.d(t, {
        z: function () {
          return c;
        },
      });
      var i = s(7437),
        r = s(2265),
        n = s(9143),
        a = s(7742),
        l = s(2169);
      let o = (0, a.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = r.forwardRef((e, t) => {
          let { className: s, variant: r, size: a, asChild: c = !1, ...d } = e,
            u = c ? n.g7 : "button";
          return (0, i.jsx)(u, {
            className: (0, l.cn)(o({ variant: r, size: a, className: s })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    1297: function (e, t, s) {
      "use strict";
      s.d(t, {
        o: function () {
          return i;
        },
      });
      let i = {

        PROJECT: {
          Aplikasi_Sewa_Mobil: "/assets/image/sewa-mobil.webp",
          Rupbasan_Kemenkumham_Bali: "/assets/image/rupbasan.webp",
          CMS_Fair_Indonesia: "/assets/image/image (2).webp",
          Food_Order_Landing_Page: "/assets/image/katering-fadila.webp",
          Ally_And_Co_Online_Shop: "/assets/image/allyco.webp",
          Wirguns_Jewelry_Shop: "/assets/image/wirguns-jewelry.webp",
        },
        GAMES: {
          Flappy_Bird_Game: "/assets/image/flappy-bird.webp",
          Crossy_Road_Game: "/assets/image/crossy-road.webp",
          Tower_Blocks: "/assets/image/tower-blocks.webp",
          Breakout_Game: "/assets/image/breakout-game.webp",
          Maze_Game: "/assets/image/maze-game.webp",
          Quizz_Game: "/assets/image/quizz-game.png",
          Minesweeper_Game: "/assets/image/minesweeper-game.webp",
          Candy_Crush_Game: "/assets/image/candy-crush-game.webp",
        },
        ICONS: {
          IC_EMAIL: "/assets/icons/email.webp",
          IC_FB: "/assets/icons/facebook.webp",
          IC_GITHUB: "/assets/icons/github.webp",
          IC_INSTAGRAM: "/assets/icons/instagram.webp",
          IC_FACEBOOK: "/assets/icons/facebook.webp",
          IC_LINKEDIN: "/assets/icons/linkedin.webp",
          IC_WA: "/assets/icons/whatsapp.webp",
        },
      };
    },
    535: function (e) {
      "use strict";
      e.exports = { locales: ["en", "id"], defaultLocale: "en" };
    },
    2169: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return n;
        },
      });
      var i = s(3167),
        r = s(1367);
      function n() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.m6)((0, i.W)(t));
      }
    },
    3886: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          TranslationsProvider: function () {
            return u;
          },
        });
      var i = s(7437);
      s(2265);
      var r = s(6343),
        n = s(1505),
        a = s(5362),
        l = s(5350),
        o = s(535),
        c = s.n(o);
      async function d(e, t, i, r) {
        (i = i || (0, n.Fs)()).use(a.D),
          r ||
            i.use(
              (0, l.Z)((e, t) =>
                s(1539)("./".concat(e, "/").concat(t, ".json"))
              )
            );
        let o = Array.isArray(t) ? t : [t];
        await i.init({
          lng: e,
          resources: r,
          fallbackLng: c().defaultLocale,
          supportedLngs: c().locales,
          defaultNS: o[0],
          fallbackNS: o[0],
          ns: o,
          preload: r ? [] : c().locales,
        });
        let d = (r && r.codes) || [];
        return (
          Array.isArray(d) && d.forEach((e) => {}),
          { i18n: i, resources: i.services.resourceStore.data, t: i.t }
        );
      }
      function u(e) {
        let { children: t, locale: s, namespaces: a, resources: l } = e,
          o = (0, n.Fs)();
        return d(s, a, o, l), (0, i.jsx)(r.a3, { i18n: o, children: t });
      }
    },
  },
  function (e) {
    e.O(0, [310, 657, 971, 69, 744], function () {
      return e((e.s = 6593));
    }),
      (_N_E = e.O());
  },
]);
