(function(e) {
        function t(t) {
            for (var i, a, r = t[0], s = t[1], u = t[2], l = 0, d = []; l < r.length; l++)
                a = r[l],
                Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
                    o[a] = 0;
            for (i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
            h && h(t);
            while (d.length)
                d.shift()();
            return c.push.apply(c, u || []),
                n()
        }
        function n() {
            for (var e, t = 0; t < c.length; t++) {
                for (var n = c[t], i = !0, a = 1; a < n.length; a++) {
                    var r = n[a];
                    0 !== o[r] && (i = !1)
                }
                i && (c.splice(t--, 1),
                    e = s(s.s = n[0]))
            }
            return e
        }
        var i = {}
            , a = {
            app: 0
        }
            , o = {
            app: 0
        }
            , c = [];
        function r(e) {
            return s.p + "js/" + ({}[e] || e) + "." + {
                "chunk-088a0a32": "ab30ab07",
                "chunk-0ef68799": "1f721930",
                "chunk-11901d9b": "f25264a4",
                "chunk-34f190d6": "c789c81e",
                "chunk-75690b08": "8050f7da",
                "chunk-2b36b241": "bdd9685c",
                "chunk-5e701512": "a4fcfbf7",
                "chunk-76890d1b": "20ccdaa3",
                "chunk-14b806ae": "73ffb072",
                "chunk-1ceb9f71": "a414310f",
                "chunk-1d808822": "e8cf9e61",
                "chunk-26b95658": "e3fc06f7",
                "chunk-29b1af5a": "d47c7a5b",
                "chunk-2a124d03": "1c0cacf0",
                "chunk-2d0aaf2c": "9c9f06a6",
                "chunk-2d0bdcfc": "c7451144",
                "chunk-2d0df025": "e629910d",
                "chunk-129e8441": "c2a9760e",
                "chunk-2e0a2494": "818d7e90",
                "chunk-3ba87caf": "b83dbfe7",
                "chunk-3bfbb2e6": "9e3d8143",
                "chunk-3d288824": "8112dc3f",
                "chunk-51c33fb8": "29c5841a",
                "chunk-6c1faf8e": "38eeb5c6",
                "chunk-f29c2138": "4e66697a",
                "chunk-6334038d": "a291a170",
                "chunk-6cec5d1e": "034cc699",
                "chunk-709a7603": "b3a842e5",
                "chunk-74675e06": "c50747be",
                "chunk-ed04e9ec": "62ac9665",
                "chunk-7da20801": "34717f9c",
                "chunk-7df32a43": "f9d1877b",
                "chunk-8d98e852": "eb9dd0f5",
                "chunk-91cca318": "fe376b3e",
                "chunk-a6a46212": "8ebdff05",
                "chunk-cbf97e3c": "8c113c81",
                "chunk-a852d9dc": "b4f9111d",
                "chunk-d6123588": "2fbc465b",
                "chunk-70cf9bb9": "9cb3e658",
                "chunk-009c2423": "d11193b4",
                "chunk-084d1d7e": "fb04a9bd",
                "chunk-31d116f4": "e2ec174b",
                "chunk-dc5b26d2": "374c94f0",
                "chunk-e63f6302": "4f624229",
                "chunk-34e06759": "d36b93e5",
                "chunk-176ffd0e": "a501b1b1",
                "chunk-4dee828c": "2c55d586",
                "chunk-32416200": "70d7c567",
                "chunk-a308741a": "128ead73",
                "chunk-07820763": "5f2d405d",
                "chunk-1113a080": "b2e94836",
                "chunk-3d1d49f5": "1d391cdc",
                "chunk-06542516": "ceeadd8a",
                "chunk-22933e3b": "4067e90d",
                "chunk-62b558cc": "be952728",
                "chunk-c1770b5e": "689138e3",
                "chunk-3f32dd50": "4abae581",
                "chunk-fe36baa4": "bab50b02",
                "chunk-ed68f798": "27e780bb"
            }[e] + ".js"
        }
        function s(t) {
            if (i[t])
                return i[t].exports;
            var n = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, s),
                n.l = !0,
                n.exports
        }
        s.e = function(e) {
            var t = []
                , n = {
                "chunk-088a0a32": 1,
                "chunk-11901d9b": 1,
                "chunk-34f190d6": 1,
                "chunk-5e701512": 1,
                "chunk-76890d1b": 1,
                "chunk-14b806ae": 1,
                "chunk-1ceb9f71": 1,
                "chunk-1d808822": 1,
                "chunk-26b95658": 1,
                "chunk-29b1af5a": 1,
                "chunk-2a124d03": 1,
                "chunk-129e8441": 1,
                "chunk-2e0a2494": 1,
                "chunk-3ba87caf": 1,
                "chunk-3bfbb2e6": 1,
                "chunk-3d288824": 1,
                "chunk-51c33fb8": 1,
                "chunk-6c1faf8e": 1,
                "chunk-f29c2138": 1,
                "chunk-6334038d": 1,
                "chunk-6cec5d1e": 1,
                "chunk-709a7603": 1,
                "chunk-ed04e9ec": 1,
                "chunk-7da20801": 1,
                "chunk-7df32a43": 1,
                "chunk-8d98e852": 1,
                "chunk-91cca318": 1,
                "chunk-a6a46212": 1,
                "chunk-cbf97e3c": 1,
                "chunk-a852d9dc": 1,
                "chunk-70cf9bb9": 1,
                "chunk-009c2423": 1,
                "chunk-084d1d7e": 1,
                "chunk-31d116f4": 1,
                "chunk-dc5b26d2": 1,
                "chunk-176ffd0e": 1,
                "chunk-4dee828c": 1,
                "chunk-32416200": 1,
                "chunk-a308741a": 1,
                "chunk-07820763": 1,
                "chunk-1113a080": 1,
                "chunk-3d1d49f5": 1,
                "chunk-06542516": 1,
                "chunk-22933e3b": 1,
                "chunk-62b558cc": 1,
                "chunk-c1770b5e": 1,
                "chunk-3f32dd50": 1,
                "chunk-fe36baa4": 1,
                "chunk-ed68f798": 1
            };
            a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
                    for (var i = "css/" + ({}[e] || e) + "." + {
                        "chunk-088a0a32": "fbf87b83",
                        "chunk-0ef68799": "31d6cfe0",
                        "chunk-11901d9b": "38c9bed2",
                        "chunk-34f190d6": "6ce07adf",
                        "chunk-75690b08": "31d6cfe0",
                        "chunk-2b36b241": "31d6cfe0",
                        "chunk-5e701512": "170e2250",
                        "chunk-76890d1b": "c13bf57c",
                        "chunk-14b806ae": "74788298",
                        "chunk-1ceb9f71": "f6797521",
                        "chunk-1d808822": "4ead45c9",
                        "chunk-26b95658": "10a0399b",
                        "chunk-29b1af5a": "a835ea5f",
                        "chunk-2a124d03": "fc08b763",
                        "chunk-2d0aaf2c": "31d6cfe0",
                        "chunk-2d0bdcfc": "31d6cfe0",
                        "chunk-2d0df025": "31d6cfe0",
                        "chunk-129e8441": "f1673605",
                        "chunk-2e0a2494": "d50ee355",
                        "chunk-3ba87caf": "5fe80d9d",
                        "chunk-3bfbb2e6": "f9c4b454",
                        "chunk-3d288824": "efbec601",
                        "chunk-51c33fb8": "710c2d5f",
                        "chunk-6c1faf8e": "102ca080",
                        "chunk-f29c2138": "d1fadef7",
                        "chunk-6334038d": "71cfbc47",
                        "chunk-6cec5d1e": "654523f1",
                        "chunk-709a7603": "18ee58f1",
                        "chunk-74675e06": "31d6cfe0",
                        "chunk-ed04e9ec": "5f3438dc",
                        "chunk-7da20801": "76e2440c",
                        "chunk-7df32a43": "37e0dc5c",
                        "chunk-8d98e852": "3518f2bc",
                        "chunk-91cca318": "9c64ff10",
                        "chunk-a6a46212": "fbd768f0",
                        "chunk-cbf97e3c": "fbc5b3c8",
                        "chunk-a852d9dc": "3a27f9c3",
                        "chunk-d6123588": "31d6cfe0",
                        "chunk-70cf9bb9": "c15921cc",
                        "chunk-009c2423": "b15e06f1",
                        "chunk-084d1d7e": "c949ecfd",
                        "chunk-31d116f4": "a8d48722",
                        "chunk-dc5b26d2": "8dc54c10",
                        "chunk-e63f6302": "31d6cfe0",
                        "chunk-34e06759": "31d6cfe0",
                        "chunk-176ffd0e": "ba943479",
                        "chunk-4dee828c": "edf034e8",
                        "chunk-32416200": "b0097127",
                        "chunk-a308741a": "aa5e79dd",
                        "chunk-07820763": "5d94376f",
                        "chunk-1113a080": "ab60cd16",
                        "chunk-3d1d49f5": "832cded7",
                        "chunk-06542516": "eb7a83cd",
                        "chunk-22933e3b": "8fe8c67f",
                        "chunk-62b558cc": "8fa093dd",
                        "chunk-c1770b5e": "e8734469",
                        "chunk-3f32dd50": "023e2f26",
                        "chunk-fe36baa4": "4435b275",
                        "chunk-ed68f798": "2d45d7bc"
                    }[e] + ".css", o = s.p + i, c = document.getElementsByTagName("link"), r = 0; r < c.length; r++) {
                        var u = c[r]
                            , l = u.getAttribute("data-href") || u.getAttribute("href");
                        if ("stylesheet" === u.rel && (l === i || l === o))
                            return t()
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                        u = d[r],
                            l = u.getAttribute("data-href");
                        if (l === i || l === o)
                            return t()
                    }
                    var h = document.createElement("link");
                    h.rel = "stylesheet",
                        h.type = "text/css",
                        h.onload = t,
                        h.onerror = function(t) {
                            var i = t && t.target && t.target.src || o
                                , c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                            c.code = "CSS_CHUNK_LOAD_FAILED",
                                c.request = i,
                                delete a[e],
                                h.parentNode.removeChild(h),
                                n(c)
                        }
                        ,
                        h.href = o;
                    var f = document.getElementsByTagName("head")[0];
                    f.appendChild(h)
                }
            )).then((function() {
                    a[e] = 0
                }
            )));
            var i = o[e];
            if (0 !== i)
                if (i)
                    t.push(i[2]);
                else {
                    var c = new Promise((function(t, n) {
                            i = o[e] = [t, n]
                        }
                    ));
                    t.push(i[2] = c);
                    var u, l = document.createElement("script");
                    l.charset = "utf-8",
                        l.timeout = 120,
                    s.nc && l.setAttribute("nonce", s.nc),
                        l.src = r(e);
                    var d = new Error;
                    u = function(t) {
                        l.onerror = l.onload = null,
                            clearTimeout(h);
                        var n = o[e];
                        if (0 !== n) {
                            if (n) {
                                var i = t && ("load" === t.type ? "missing" : t.type)
                                    , a = t && t.target && t.target.src;
                                d.message = "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")",
                                    d.name = "ChunkLoadError",
                                    d.type = i,
                                    d.request = a,
                                    n[1](d)
                            }
                            o[e] = void 0
                        }
                    }
                    ;
                    var h = setTimeout((function() {
                            u({
                                type: "timeout",
                                target: l
                            })
                        }
                    ), 12e4);
                    l.onerror = l.onload = u,
                        document.head.appendChild(l)
                }
            return Promise.all(t)
        }
            ,
            s.m = e,
            s.c = i,
            s.d = function(e, t, n) {
                s.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            s.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            s.t = function(e, t) {
                if (1 & t && (e = s(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (s.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var i in e)
                        s.d(n, i, function(t) {
                            return e[t]
                        }
                            .bind(null, i));
                return n
            }
            ,
            s.n = function(e) {
                var t = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                ;
                return s.d(t, "a", t),
                    t
            }
            ,
            s.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            s.p = "/",
            s.oe = function(e) {
                throw console.error(e),
                    e
            }
        ;
        var u = window["webpackJsonp"] = window["webpackJsonp"] || []
            , l = u.push.bind(u);
        u.push = t,
            u = u.slice();
        for (var d = 0; d < u.length; d++)
            t(u[d]);
        var h = l;
        c.push([0, "chunk-vendors"]),
            n()
    }
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    1: function(e, t) {},
    "124f": function(e, t, n) {},
    "19bc": function(e, t, n) {},
    2: function(e, t) {},
    "2e91": function(e, t, n) {},
    "365c": function(e, t, n) {
        "use strict";
        var i = {};
        n.r(i),
            n.d(i, "parcel", (function() {
                    return g
                }
            ));
        n("4160"),
            n("caad"),
            n("a9e3"),
            n("d3b7"),
            n("ac1f"),
            n("466d"),
            n("5319"),
            n("159b"),
            n("96cf");
        var a = n("1da1")
            , o = n("bc3a")
            , c = n.n(o)
            , r = (n("5c96"),
            n("a18c"))
            , s = (n("a78e"),
            n("4328"))
            , u = n.n(s)
            , l = n("555f")
            , d = "/api"
            , h = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var t, n, i, a, o, r, s, h, f, p, g;
                return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                        t = Object(l["c"])("refresh"),
                                        e.next = 4,
                                        c.a.post("".concat(d, "/auth/refreshToken"), u.a.stringify({
                                            refreshToken: t
                                        }));
                                case 4:
                                    if (n = e.sent,
                                        i = n.data,
                                    1002 !== i.code) {
                                        e.next = 11;
                                        break
                                    }
                                    return a = i || {},
                                        o = a.code,
                                        e.abrupt("return", {
                                            code: o
                                        });
                                case 11:
                                    return r = i || {},
                                        s = r.code,
                                        h = r.data,
                                        f = h.accessToken,
                                        p = h.refreshToken,
                                        g = h.ttoken,
                                    f && p && (new Date((new Date).getTime() + 72e5),
                                        Object(l["g"])("access", f, 7200),
                                        Object(l["g"])("refresh", p, 7200),
                                        Object(l["g"])("TToken", g, 7200)),
                                        e.abrupt("return", {
                                            code: s,
                                            data: {
                                                accessToken: f
                                            }
                                        });
                                case 14:
                                    e.next = 19;
                                    break;
                                case 16:
                                    e.prev = 16,
                                        e.t0 = e["catch"](0),
                                        console.log(e.t0);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                    }
                ), e, null, [[0, 16]])
            }
        )))
            , f = (n("25f0"),
            n("3452"))
            , p = n.n(f);
        function g(e) {
            var t = p.a.enc.Utf8.parse("IFROMC86")
                , n = p.a.DES.decrypt({
                ciphertext: p.a.enc.Base64.parse(e)
            }, t, {
                mode: p.a.mode.ECB,
                padding: p.a.pad.Pkcs7
            });
            return JSON.parse(n.toString(p.a.enc.Utf8))
        }
        var b = c.a.create();
        b.defaults.timeout = 3e4,
            b.defaults.baseURL = "/api",
            b.defaults.withCredentials = !1,
            b.setToken = function(e) {
                new Date((new Date).getTime() + 72e5);
                b.defaults.headers.Authorization = "Bearer " + e,
                    Object(l["g"])("access", e, 7200)
            }
        ;
        var m = null;
        window.isRefreshing = !1;
        var k = []
            , v = function(e) {
            return e.headers.Authorization = "Bearer " + Object(l["c"])("access"),
                e
        };
        b.interceptors.request.use(v, (function(e) {
                return m && e && m.close(),
                    Promise.reject(e)
            }
        ));
        b.interceptors.response.use(function() {
            var e = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, i, a, o;
                    return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (n = {},
                                        !t || !t.data) {
                                            e.next = 38;
                                            break
                                        }
                                        if (i = Number(t.code || t.data.code),
                                            n = t.data,
                                        200 !== i && i) {
                                            e.next = 8;
                                            break
                                        }
                                        n = t.data,
                                            e.next = 38;
                                        break;
                                    case 8:
                                        if (401 !== i) {
                                            e.next = 37;
                                            break
                                        }
                                        if (window.isRefreshing) {
                                            e.next = 34;
                                            break
                                        }
                                        return window.isRefreshing = !0,
                                            e.prev = 11,
                                            e.next = 14,
                                            h();
                                    case 14:
                                        if (a = e.sent,
                                            a.code,
                                            o = a.data.accessToken,
                                            !o) {
                                            e.next = 23;
                                            break
                                        }
                                        return b.setToken(o),
                                            t.config.headers.Authorization = o,
                                            k.forEach((function(e) {
                                                    return e(o)
                                                }
                                            )),
                                            k = [],
                                            e.abrupt("return", b(v(t.config)));
                                    case 23:
                                        e.next = 29;
                                        break;
                                    case 25:
                                        e.prev = 25,
                                            e.t0 = e["catch"](11),
                                            console.error("refreshtoken error =>", e.t0),
                                            y({
                                                redirect: r["a"].currentRoute.fullPath
                                            });
                                    case 29:
                                        return e.prev = 29,
                                            window.isRefreshing = !1,
                                            e.finish(29);
                                    case 32:
                                        e.next = 35;
                                        break;
                                    case 34:
                                        return e.abrupt("return", new Promise((function(e) {
                                                k.push((function(n) {
                                                        t.config.headers.Authorization = n,
                                                            e(b(v(t.config)))
                                                    }
                                                ))
                                            }
                                        )));
                                    case 35:
                                        e.next = 38;
                                        break;
                                    case 37:
                                        1002 === i ? (y({
                                            redirect: r["a"].currentRoute.fullPath
                                        }),
                                            w(),
                                            Object(l["a"])()) : [30073, 30072, 30074, 30078, 30075, 30076].includes(i);
                                    case 38:
                                        return m && m.close(),
                                            e.abrupt("return", n);
                                    case 40:
                                    case "end":
                                        return e.stop()
                                }
                        }
                    ), e, null, [[11, 25, 29, 32]])
                }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), (function(e) {
                return console.log("object", e),
                m && m.close(),
                    Promise.reject(e.response.data)
            }
        )),
            b.fn = Object.assign({}, i);
        var y = function(e) {
            var t = e.path
                , n = void 0 === t ? "/login" : t
                , i = e.redirect;
            "/login" != r["a"].currentRoute.path && setTimeout((function() {
                    r["a"].replace({
                        path: n,
                        query: {
                            redirect: i
                        }
                    })
                }
            ), 1200)
        };
        function w() {
            var e = document.cookie.match(/[^ =;]+(?==)/g);
            if (e)
                for (var t = e.length; t--; )
                    document.cookie = e[t] + "=0;path=/;expires=" + new Date(0).toUTCString(),
                        document.cookie = e[t] + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString(),
                        document.cookie = e[t] + "=0;path=/;domain=ratingdog.cn;expires=" + new Date(0).toUTCString()
        }
        var T = b
            , D = function(e, t, n) {
            var i = {};
            T.post(e, u.a.stringify(t)).then((function(e) {
                    e.data && 200 === e.code ? (i.data = e.data,
                        i.isOk = "ok",
                        i.code = e.code) : (i.data = e.data,
                        i.isOk = "no",
                        i.code = e.code,
                        i.message = e.message),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(e)
                }
            ))
        }
            , A = function(e, t, n) {
            var i = {};
            T.post(e, t).then((function(e) {
                    e.data && 200 === e.code ? (i.data = e.data,
                        i.isOk = "ok",
                        i.code = e.code) : (i.data = e.data,
                        i.isOk = "no",
                        i.code = e.code,
                        i.response = e),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(i)
                }
            ))
        }
            , C = function(e, t, n) {
            var i = {};
            T.post(e, u.a.stringify(t), {
                responseType: "blob"
            }).then((function(e) {
                    i.data = e,
                        i.isOk = "ok",
                        i.code = 200,
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(e)
                }
            ))
        }
            , S = function(e, t, n) {
            var i = {};
            T.post(e, u.a.stringify(t)).then((function(e) {
                    var t = T.fn.parcel(e);
                    t.data && 200 === t.code ? (i.data = t.data,
                        i.isOk = "ok",
                        i.code = t.code) : (i.data = t.data,
                        i.isOk = "no",
                        i.code = t.code,
                        i.message = t.message),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(e)
                }
            ))
        }
            , N = function(e, t, n) {
            var i = {};
            T.post(e, t).then((function(e) {
                    var t = T.fn.parcel(e);
                    e ? (i.data = t.data,
                        i.isOk = "ok",
                        i.code = t.code) : (i.data = t.data,
                        i.isOk = "no",
                        i.code = t.code,
                        i.response = t),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(i)
                }
            ))
        }
            , I = function(e, t, n) {
            var i = {};
            T.post(e, u.a.stringify(t)).then((function(e) {
                    var t = JSON.parse(T.fn.parcel(e));
                    t ? (i.data = t,
                        i.isOk = "ok",
                        i.code = 200) : (i.data = t,
                        i.isOk = "no",
                        i.code = 500,
                        i.message = ""),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(e)
                }
            ))
        }
            , j = function(e, t, n) {
            var i = {};
            T.get(e, {
                params: t
            }).then((function(e) {
                    var t = T.fn.parcel(e);
                    t.data && 200 === t.code ? (i.data = t.data,
                        i.isOk = "ok",
                        i.code = t.code) : (i.data = t.data,
                        i.isOk = "no",
                        i.code = t.code),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(i)
                }
            ))
        }
            , P = function(e, t, n) {
            var i = {};
            T.get(e, {
                params: t
            }).then((function(e) {
                    e.data && 200 === e.code ? (i.data = e.data,
                        i.isOk = "ok",
                        i.code = e.code) : (i.data = e.data,
                        i.isOk = "no",
                        i.code = e.code),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(i)
                }
            ))
        }
            , x = function(e, t, n) {
            var i = {};
            T.delete(e, {
                data: t
            }).then((function(e) {
                    e.data && 200 === e.status ? (i.data = e.data,
                        i.isOk = "ok",
                        i.status = e.status) : (i.data = e.data,
                        i.isOk = "no",
                        i.status = e.status),
                        n(i)
                }
            )).catch((function(e) {
                    i.isOk = "error",
                        i.error = e,
                        n(i)
                }
            ))
        }
            , O = function(e, t) {
            D("/auth/login", e, t)
        }
            , L = function(e, t) {
            D("/common/dataView", e, t)
        }
            , H = function(e, t) {
            I("/common/networkPersonData", e, t)
        }
            , R = function(e, t) {
            I("/advancedQuery/networkOnePersonData/" + e, "", t)
        }
            , Q = function(e, t) {
            D("/advancedQuery/personSuggestData", e, t)
        }
            , _ = function(e, t) {
            S("/common/hotKeywordData", e, t)
        }
            , B = function(e, t) {
            S("/baseQuery/homepageDisplay", e, t)
        }
            , F = function(e, t) {
            S("/baseQuery/homepageHotWord", e, t)
        }
            , U = function(e, t) {
            S("/common/kdstatistic", e, t)
        }
            , M = function(e, t) {
            N("/baseQuery/search", e, t)
        }
            , E = function(e, t) {
            A("/baseQuery/searchScreening", e, t)
        }
            , V = function(e, t) {
            A("/dataMiningDiscovery/search", e, t)
        }
            , z = function(e, t) {
            D("/baseQuery/searchDetails", e, t)
        }
            , K = function(e, t, n) {
            P("/baseQuery/resultsInfoData/" + e, t, n)
        }
            , W = function(e, t) {
            D("/baseQuery/relatedAchievement", e, t)
        }
            , Y = function(e, t) {
            D("/baseQuery/resultInfluenceAnalysisData", e, t)
        }
            , q = function(e, t) {
            D("/common/resultUpdateTime", e, t)
        }
            , X = function(e, t) {
            D("/common/completionProjectUpdateTime", e, t)
        }
            , G = function(e, t) {
            A("/captcha/get", e, t)
        }
            , $ = function(e, t) {
            A("/captcha/check", e, t)
        }
            , Z = function(e, t) {
            N("/baseQuery/supportQueryResultsData", e, t)
        }
            , J = function(e, t) {
            D("/common/supportProjectUpdateTime", e, t)
        }
            , ee = function(e, t) {
            A("/captcha/defaultCaptcha", e, t)
        }
            //  获取查询结果
            , te = function(e, t) {
            N("/baseQuery/completionQueryResultsData", e, t)
        }
            , ne = function(e, t) {
            A("/baseQuery/completionQueryScreeningResultsData", e, t)
        }
            , ie = function(e, t, n) {
            D("/baseQuery/conclusionProjectInfo/" + e, t, n)
        }
            , ae = function(e, t) {
            D("/baseQuery/completeProjectReport", e, t)
        }
            , oe = function(e, t) {
            D("/baseQuery/projectInfluenceAnalysisData", e, t)
        }
            , ce = function(e, t) {
            D("/common/advancedQueryUpdateTime", e, t)
        }
            , re = function(e, t) {
            D("/advancedQuery/orgSuggestData", e, t)
        }
            , se = function(e, t) {
            A("/advancedQuery/orgQueryResultsData", e, t)
        }
            , ue = function(e, t, n) {
            j("/advancedQuery/orgProjectSidebar/" + e, t, n)
        }
            , le = function(e, t) {
            D("/orgCooperationNetwork/unitNetworkAnalyseData", e, t)
        }
            , de = function(e, t) {
            N("/advancedQuery/supportQueryOrgParticipateResultsData", e, t)
        }
            , he = function(e, t) {
            N("/advancedQuery/supportQueryOrgResultsData", e, t)
        }
            , fe = function(e, t, n) {
            j("/advancedQuery/orgInfo/" + e, t, n)
        }
            , pe = function(e, t, n) {
            j("/advancedQuery/orgPAdminListData/" + e, t, n)
        }
            , ge = function(e, t) {
            A("/advancedQuery/personQueryResultsData", e, t)
        }
            , be = function(e, t) {
            D("/personCooperationNetwork/personNetworkAnalyseData", e, t)
        }
            , me = function(e, t) {
            D("/personCooperationNetwork/projectCooperateQueryResultsData", e, t)
        }
            , ke = function(e, t) {
            D("/advancedQuery/projectCooperateQueryResultsData", e, t)
        }
            , ve = function(e, t) {
            D("/orgCooperationNetwork/projectCooperateQueryResultsData", e, t)
        }
            , ye = function(e, t) {
            D("/personCooperationNetwork/achievementCooperateQueryResultsData", e, t)
        }
            , we = function(e, t) {
            D("/advancedQuery/achievementCooperateQueryResultsData", e, t)
        }
            , Te = function(e, t) {
            D("/personal/personNetworkAnalyseData", e, t)
        }
            , De = function(e, t) {
            N("/advancedQuery/supportQueryPersonResultsData", e, t)
        }
            , Ae = function(e, t) {
            N("/advancedQuery/supportQueryPersonParticipateResultsData", e, t)
        }
            , Ce = function(e, t, n) {
            j("/advancedQuery/personInfo/" + e, t, n)
        }
            , Se = function(e, t, n) {
            P("/advancedQuery/getPsnCodebyBrid/" + e, t, n)
        }
            , Ne = function(e, t) {
            S("/advancedQuery/personInfluenceAnalysisData", e, t)
        }
            , Ie = function(e, t) {
            S("/advancedQuery/personInfluenceAnalysisData", e, t)
        }
            , je = function(e, t, n) {
            j("/advancedQuery/personProjectSidebar/" + e, t, n)
        }
            , Pe = function(e, t) {
            D("/common/personCaptionCode", e, t)
        }
            , xe = function(e, t) {
            S("/common/fieldCode", e, t)
        }
            , Oe = function(e, t) {
            S("/common/supportTypeData", e, t)
        }
            , Le = function(e, t) {
            S("/common/supportTypeClassOneData", e, t)
        }
            , He = function(e, t, n) {
            j("/common/personInfo/" + e, t, n)
        }
            , Re = function(e, t, n) {
            j("/common/getPsnCodebyBrid/" + e, t, n)
        }
            , Qe = function(e, t) {
            D("/personal/listFavoriteTypeStatistic", e, t)
        }
            , _e = function(e, t) {
            D("/personal/listFavorite", e, t)
        }
            , Be = function(e, t) {
            D("/personal/deleteFavoriteOne", e, t)
        }
            , Fe = function(e, t) {
            D("/personal/deleteFavorite", e, t)
        }
            , Ue = function(e, t) {
            D("/personal/addFavorite", e, t)
        }
            , Me = function(e, t) {
            D("/personal/addWatch", e, t)
        }
            , Ee = function(e, t) {
            D("/personal/deleteWatchOne", e, t)
        }
            , Ve = function(e, t) {
            D("/personal/listWatch", e, t)
        }
            , ze = function(e, t) {
            D("/personal/deleteWatch", e, t)
        }
            , Ke = function(e, t, n) {
            D("/researchersInfo/personInfo/" + e, t, n)
        }
            , We = function(e, t, n) {
            D("/personal/personInfo/" + e, t, n)
        }
            , Ye = function(e, t, n) {
            S("/personal/researchDirection/" + e, t, n)
        }
            , qe = function(e, t) {
            D("/personal/getWatchCount", e, t)
        }
            , Xe = function(e, t) {
            D("/personal/readNotification", e, t)
        }
            , Ge = function(e, t) {
            D("/personal/listSearchHistory", e, t)
        }
            , $e = function(e, t) {
            D("/personal/deleteSearchHistory", e, t)
        }
            , Ze = function(e, t) {
            D("/personal/addSearchHistory", e, t)
        }
            , Je = function(e, t) {
            A("/errorFeedback/submitFeedback", e, t)
        }
            , et = function(e, t) {
            A("/userFeedback/submitFeedback", e, t)
        }
            , tt = function(e, t) {
            D("/dataMiningDiscovery/hotspotAnalysisData", e, t)
        }
            , nt = function(e, t) {
            D("/dataMiningDiscovery/keywordTendency", e, t)
        }
            , it = function(e, t) {
            D("/dataMiningDiscovery/keywordAnalysisForPerson", e, t)
        }
            , at = function(e, t) {
            D("/dataMiningDiscovery/keywordAnalysisForOrganization", e, t)
        }
            , ot = function(e, t) {
            D("/dataMiningDiscovery/keywordCooperation", e, t)
        }
            , ct = function(e, t) {
            A("/dataMiningDiscovery/keywordQueryResultsData", e, t)
        }
            , rt = function(e, t) {
            A("/dataMiningDiscovery/keywordAnalysisForAchievement", e, t)
        }
            , st = function(e, t) {
            D("/dataMiningDiscovery/subjectcodeAnalysisForPerson", e, t)
        }
            , ut = function(e, t) {
            D("/dataMiningDiscovery/subjectcodeAnalysisForOrganization", e, t)
        }
            , lt = function(e, t) {
            D("/dataMiningDiscovery/subjectCodeTreeResultsData", e, t)
        }
            , dt = function(e, t) {
            D("/knowledgeDiscovery/subjectCodeChangeResultsData", e, t)
        }
            , ht = function(e, t) {
            A("/dataMiningDiscovery/subjectCodeAnalysisForAchievement", e, t)
        }
            , ft = function(e, t) {
            A("/dataMiningDiscovery/subjectCodeAnalysisForProject", e, t)
        }
            , pt = function(e, t) {
            D("/knowledgeDiscovery/fieldCouplingAnalysisData", e, t)
        }
            , gt = function(e, t) {
            D("/knowledgeDiscovery/fieldCouplingProjectDataBySubjectName", e, t)
        }
            , bt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarity", e, t)
        }
            , mt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarityDeep", e, t)
        }
            , kt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarityDeepProject", e, t)
        }
            , vt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarityDeepOrg", e, t)
        }
            , yt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarityDeepPerson", e, t)
        }
            , wt = function(e, t) {
            D("/knowledgeDiscovery/keywordSimilarityDeepAchievement", e, t)
        }
            , Tt = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarity", e, t)
        }
            , Dt = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarityDeep", e, t)
        }
            , At = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarityDeepOrg", e, t)
        }
            , Ct = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarityDeepPerson", e, t)
        }
            , St = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarityDeepAchievement", e, t)
        }
            , Nt = function(e, t) {
            D("/knowledgeDiscovery/subjectcodeSimilarityDeepProject", e, t)
        }
            , It = function(e, t) {
            D("/knowledgeDiscovery/orgCooperateQueryResultsData", e, t)
        }
            , jt = function(e, t) {
            D("/knowledgeDiscovery/orgCooperateQueryResultsProjectData", e, t)
        }
            , Pt = function(e, t) {
            D("/knowledgeDiscovery/personCooperateQueryResultsData", e, t)
        }
            , xt = function(e, t) {
            D("/knowledgeDiscovery/personCooperateQueryResultsProjectData", e, t)
        }
            , Ot = function(e, t) {
            D("/knowledgeDiscovery/cooperatePersonResultsData", e, t)
        }
            , Lt = function(e, t) {
            S("/publicStatistics/treechart", e, t)
        }
            , Ht = function(e, t) {
            D("/publicStatistics/org", e, t)
        }
            , Rt = function(e, t) {
            S("/publicStatistics/sunburst", e, t)
        }
            , Qt = function(e, t) {
            S("/publicStatistics/yearDep", e, t)
        }
            , _t = function(e, t) {
            S("/publicStatistics/yearType", e, t)
        }
            , Bt = function(e, t) {
            S("/publicStatistics/treechart_conclusion", e, t)
        }
            , Ft = function(e, t) {
            D("/publicStatistics/org_conclusion", e, t)
        }
            , Ut = function(e, t) {
            S("/publicStatistics/sunburst_conclusion", e, t)
        }
            , Mt = function(e, t) {
            S("/publicStatistics/yearDep_conclusion", e, t)
        }
            , Et = function(e, t) {
            S("/publicStatistics/yearType_conclusion", e, t)
        }
            , Vt = function(e, t) {
            S("/publicStatistics/resultsDep", e, t)
        }
            , zt = function(e, t) {
            S("/publicStatistics/resultsType", e, t)
        }
            , Kt = function(e, t) {
            S("/publicStatistics/resultsYear", e, t)
        }
            , Wt = function(e, t) {
            D("/publicStatistics/resultsYearDep", e, t)
        }
            , Yt = function(e, t) {
            D("/publicStatistics/resultsYearType", e, t)
        }
            , qt = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel0", e, t)
        }
            , Xt = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel1", e, t)
        }
            , Gt = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel2", e, t)
        }
            , $t = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel3", e, t)
        }
            , Zt = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel4", e, t)
        }
            , Jt = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel5", e, t)
        }
            , en = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel6", e, t)
        }
            , tn = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel7", e, t)
        }
            , nn = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel8", e, t)
        }
            , an = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel9", e, t)
        }
            , on = function(e, t) {
            D("/advancedMultidimensionalStatistics/statisticsFromModel", e, t)
        }
            , cn = function(e, t) {
            P("/manager/roleAuthorities/all", e, t)
        }
            , rn = function(e, t) {
            P("/manager/roleAuthorities/delete/" + e, "", t)
        }
            , sn = function(e, t) {
            A("/manager/roleAuthorities/create", e, t)
        }
            , un = function(e, t) {
            A("/manager/roleAuthorities/update", e, t)
        }
            , ln = function(e, t) {
            P("/manager/role/all", e, t)
        }
            , dn = function(e, t) {
            P("/manager/role/delete/" + e, "", t)
        }
            , hn = function(e, t) {
            A("/manager/role/update", e, t)
        }
            , fn = function(e, t) {
            A("/manager/role/create", e, t)
        }
            , pn = function(e, t) {
            P("/manager/personBlacklist", e, t)
        }
            , gn = function(e, t) {
            x("/manager/personBlacklist/delete?personId=" + e, "", t)
        }
            , bn = function(e, t) {
            P("/manager/blacklist/get/" + e, "", t)
        }
            , mn = function(e, t) {
            x("/manager/blacklist/delete", e, t)
        }
            , kn = function(e, t) {
            D("/expert/recommendation/getExpertInfoListPager", e, t)
        }
            , vn = function(e, t) {
            D("/expert/recommendation/addExpertInfo", e, t)
        }
            , yn = function(e, t) {
            D("/expert/recommendation/deleteFavorite", e, t)
        }
            , wn = function(e, t) {
            D("/expert/recommendation/updateExpertInfo", e, t)
        }
            , Tn = function(e, t) {
            D("/expert/recommendation/batchSubmit", e, t)
        }
            , Dn = function(e, t) {
            C("/expert/recommendation/batchExport", e, t)
        }
            , An = function(e, t) {
            C("/expert/recommendation/viewExpertPdf", e, t)
        }
            , Cn = function(e, t) {
            D("/supportingUnit/listBills", e, t)
        }
            , Sn = function(e, t) {
            D("/supportingAudit/agreeDownloadingBill", e, t)
        }
            , Nn = function(e, t) {
            D("/supportingUnit/saveBill", e, t)
        }
            , In = function(e, t) {
            D("/supportingUnit/deleteBill", e, t)
        }
            , jn = function(e, t) {
            D("/supportingUnit/submitBill", e, t)
        }
            , Pn = function(e, t) {
            D("/supportingUnit/confirmCompletion", e, t)
        }
            , xn = function(e, t) {
            D("/supportingUnit/agreeDownloadingBill", e, t)
        }
            , On = function(e, t) {
            D("/supportingUnit/getBasicInfo", e, t)
        }
            , Ln = function(e, t) {
            C("/supportingUnit/viewDocument", e, t)
        }
            , Hn = function(e, t) {
            A("/brid/permission", e, t)
        }
            , Rn = function(e, t, n) {
            A("/brid/personInfo/" + e, t, n)
        }
            , Qn = function(e, t) {
            S("/brid/personInfluenceAnalysisData", e, t)
        }
            , _n = function(e, t, n) {
            S("/brid/researchDirection/" + e, t, n)
        }
            , Bn = function(e, t) {
            N("/brid/supportQueryPersonResultsData", e, t)
        }
            , Fn = function(e, t) {
            N("/brid/research", e, t)
        }
            , Un = function(e, t) {
            D("/brid/advancedQueryUpdateTime", e, t)
        };
        t["a"] = {
            getLogin: O,
            getIndexStatNum: L,
            getPersonData: H,
            getNetworkPerson: R,
            getPersonSuggest: Q,
            hotKeywordData: _,
            homepageDisplay: B,
            homepageHotWord: F,
            getKdStatistic: U,
            getResultsQueryList: M,
            getSearchScreening: E,
            getResultsQueryListData: V,
            getSearchDetails: z,
            getResultsInfo: K,
            relatedAchievement: W,
            getResultsImpact: Y,
            getResultsTime: q,
            getCompletionProject: X,
            getCaptcha2: G,
            getCaptchaCheck: $,
            getSupportQueryList: Z,
            getSupportTime: J,
            getCaptcha: ee,
            getResultsDataList: te,
            getScreeningResultsData: ne,
            getProjectImpact: oe,
            getOrgSuggest: re,
            getOrgSidebar: ue,
            getUnitNetwork: le,
            getOrgQueryResults: se,
            getOrgQueryResultsData: de,
            getZCOrgQueryResultsData: he,
            getOrgInfo: fe,
            getOrgPAdminList: pe,
            getProjectInfo: ie,
            getProjectReport: ae,
            getAdvancedTime: ce,
            getPersonQuery: ge,
            getPersonNetworkA: be,
            getCooperateQRD: me,
            getResultsData: ke,
            getCooperateQRD_ORG: ve,
            getCooperateCG: ye,
            getCooperateCGCenter: we,
            getNetworkAnalyseData: Te,
            getPersonInfo: Ce,
            getPsnCodebyBrid: Se,
            getPersonResultsData: De,
            getPersonParticipate: Ae,
            getPersonImpact: Ne,
            getPersonImpactCenter: Ie,
            getPersonSidebar: je,
            getCaptionCode: Pe,
            getFieldCode: xe,
            getSupportType: Oe,
            getTypeClassOneData: Le,
            getCommonPersonInfo: He,
            getCommonPsnCodebyBrid: Re,
            getFavoriteTypeStatistic: Qe,
            getListFavorite: _e,
            getDeleteFavoriteOne: Be,
            getDeleteFavorite: Fe,
            getAddFavorite: Ue,
            getListWatch: Ve,
            getAddWatch: Me,
            getDeleteWatchOne: Ee,
            getDeleteWatch: ze,
            getPersonCV: Ke,
            getCenterPersonCV: We,
            researchDirection: Ye,
            getWatchCount: qe,
            getReadNotification: Xe,
            getListSearchHistory: Ge,
            deleteSearchHistory: $e,
            addSearchHistory: Ze,
            getSubmitFeedback: Je,
            getUserFeedback: et,
            hotspotAnalysisData: tt,
            keywordTendency: nt,
            keywordAnalysisForPerson: it,
            keywordAnalysisForOrganization: at,
            keywordCooperation: ot,
            keywordQueryResultsData: ct,
            getDataMiningQueryKeywordList: rt,
            subjectcodeAnalysisForPerson: st,
            subjectcodeAnalysisForOrganization: ut,
            subjectCodeTreeResultsData: lt,
            subjectCodeChangeResultsData: dt,
            getDataMiningQueryList: ht,
            getSubjectCodeAnalysisForProject: ft,
            fieldCouplingAnalysisData: pt,
            fieldCouplingProjectData: gt,
            keywordSimilarity: bt,
            keywordSimilarityDeep: mt,
            keywordSimilarityDeepProject: kt,
            keywordSimilarityDeepOrg: vt,
            keywordSimilarityDeepPerson: yt,
            keywordSimilarityDeepAchievement: wt,
            subjectcodeSimilarity: Tt,
            subjectcodeSimilarityDeep: Dt,
            subjectcodeSimilarityDeepOrg: At,
            subjectcodeSimilarityDeepPerson: Ct,
            subjectcodeSimilarityDeepAchievement: St,
            subjectcodeSimilarityDeepProject: Nt,
            orgCooperateQueryResultsData: It,
            orgCooperateQueryResultsProjectData: jt,
            personCooperateQueryResultsData: Pt,
            personCooperateQueryResultsProjectData: xt,
            cooperatePersonResultsData: Ot,
            getTreechart: Lt,
            getOrg: Ht,
            getSunburst: Rt,
            getYearDep: Qt,
            getYearType: _t,
            getTreechart_conclusion: Bt,
            getOrg_conclusion: Ft,
            getSunburst_conclusion: Ut,
            getYearDep_conclusion: Mt,
            getYearType_conclusion: Et,
            getResultsDep: Vt,
            getResultsType: zt,
            getResultsYear: Kt,
            getResultsYearDep: Wt,
            getResultsYearType: Yt,
            showTable0: qt,
            showTable1: Xt,
            showTable2: Gt,
            showTable3: $t,
            showTable4: Zt,
            showTable5: Jt,
            showTable6: en,
            showTable7: tn,
            showTable8: nn,
            showTable9: an,
            showTable10: on,
            getRoleAuthorities: cn,
            deleteKD: rn,
            updateKD: un,
            addKD: sn,
            getRoleAll: ln,
            deleteIsis: dn,
            updateIsis: hn,
            addIsis: fn,
            getPersonBlacklist: pn,
            getPersonBlackDelete: gn,
            getPersonBlackIplist: bn,
            getPersonBlackIpDelete: mn,
            getExpertInfoListPager: kn,
            addExpertInfo: vn,
            deleteFavorite: yn,
            updateExpertInfo: wn,
            batchSubmit: Tn,
            batchExport: Dn,
            viewExpertPdf: An,
            getListBills: Cn,
            getAgreeDownloadingBill: Sn,
            saveBillTemp: Nn,
            deleteBill: In,
            submitBill: jn,
            confirmCompletion: Pn,
            agreeDownloadingBill: xn,
            getBasicInfo: On,
            viewDocument: Ln,
            getBridPermission: Hn,
            getBridPersonInfo2: Rn,
            getPersonInfluenceAnalysisData: Qn,
            getResearchDirection: _n,
            getBridProjectData: Bn,
            getBridResearch: Fn,
            getAdvancedQueryUpdateTime: Un
        }
    },
    "3bb0": function(e, t, n) {
        "use strict";
        n("a78e"),
            n("a18c");
        var i = {
            state: {
                loginAuth: ""
            },
            mutations: {
                SET_AUTH: function(e, t) {
                    e.loginAuth = t
                }
            },
            actions: {
                LoginAuth: function(e, t) {
                    var n = e.commit;
                    n("SET_AUTH", t)
                }
            }
        };
        t["a"] = i
    },
    "3f13": function(e, t, n) {
        "use strict";
        n("d9a5")
    },
    "45e5": function(e, t, n) {
        "use strict";
        n("f660")
    },
    "4ffd": function(e, t, n) {
        e.exports = n.p + "img/logo.b79bfd0c.png"
    },
    "555f": function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
                return a
            }
        )),
            n.d(t, "g", (function() {
                    return o
                }
            )),
            n.d(t, "b", (function() {
                    return c
                }
            )),
            n.d(t, "c", (function() {
                    return r
                }
            )),
            n.d(t, "d", (function() {
                    return s
                }
            )),
            n.d(t, "e", (function() {
                    return u
                }
            )),
            n.d(t, "a", (function() {
                    return l
                }
            ));
        var i = window.localStorage
            , a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                , a = Math.ceil(Date.now() / 1e3);
            return i.setItem(e, JSON.stringify(t)),
                n > 0 ? i.setItem(e + "_expire", a + parseInt(n)) : i.setItem(e + "_expire", 0),
                !0
        }
            , o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                , a = Math.ceil(Date.now() / 1e3);
            return i.setItem(e, t),
                n > 0 ? i.setItem(e + "_expire", a + parseInt(n)) : i.setItem(e + "_expire", 0),
                !0
        }
            , c = function(e) {
            var t = Math.ceil(Date.now() / 1e3)
                , n = i.getItem(e + "_expire")
                , a = parseInt(n)
                , o = 604800;
            if (null === n || a > 0 && (t > a || o > 0 && Math.abs(a - t) > o))
                return i.removeItem(e),
                    i.removeItem(e + "_expire"),
                    !1;
            var c = JSON.parse(i.getItem(e));
            return null !== c && !1 !== c && c
        }
            , r = function(e) {
            var t = Math.ceil(Date.now() / 1e3)
                , n = i.getItem(e + "_expire")
                , a = parseInt(n)
                , o = 7200;
            if (null === n || a > 0 && (t > a || o > 0 && Math.abs(a - t) > o))
                return i.removeItem(e),
                    i.removeItem(e + "_expire"),
                    !1;
            var c = i.getItem(e);
            return null !== c && !1 !== c && c
        }
            , s = function(e) {
            var t = Math.ceil(Date.now() / 1e3)
                , n = i.getItem(e + "_expire")
                , a = parseInt(n)
                , o = 7200;
            if (null === n || a > 0 && (t > a || o > 0 && Math.abs(a - t) > o))
                return i.removeItem(e),
                    i.removeItem(e + "_expire"),
                    !1;
            var c = decodeURIComponent(i.getItem(e));
            return null !== c && !1 !== c && c
        }
            , u = function(e) {
            i.removeItem(e)
        }
            , l = function() {
            i.clear()
        }
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("b0c0"),
            n("ac1f"),
            n("466d"),
            n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79d");
        var i = n("2b0e")
            , a = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)
        }
            , o = []
            , c = (n("841c"),
            {
                data: function() {
                    return {
                        dialogError: !1,
                        timer: null,
                        count: "",
                        url: ""
                    }
                },
                created: function() {
                    var e = this;
                    sessionStorage.getItem("store") && (this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store")))),
                        sessionStorage.removeItem("store")),
                        window.addEventListener("beforeunload", (function() {
                                sessionStorage.setItem("store", JSON.stringify(e.$store.state))
                            }
                        ));
                    var t = window.location;
                    this.url = t.pathname + t.search
                },
                methods: {}
            })
            , r = c
            , s = (n("5c0b"),
            n("2877"))
            , u = Object(s["a"])(r, a, o, !1, null, null, null)
            , l = u.exports
            , d = n("a18c")
            , h = n("2f62")
            , f = n("3bb0")
            , p = {
            positionIsShow: !0,
            position: [],
            backTop: null,
            isLoading: !1,
            auth: !1
        }
            , g = {
            setPositionIsShow: function(e, t) {
                e.positionIsShow = t
            },
            setPosition: function(e, t) {
                e.position = t
            },
            setBackTop: function(e, t) {
                e.backTop = t
            },
            isLoading: function(e, t) {
                e.isLoading = t
            },
            ISAUTH: function(e, t) {
                e.auth = t
            }
        }
            , b = {
            setArtile: function(e, t) {
                e.commit("setArtile", t)
            },
            isAuth: function(e, t) {
                var n = e.commit;
                n("ISAUTH", t)
            }
        }
            , m = {
            state: p,
            actions: b,
            mutations: g
        };
        i["default"].use(h["a"]);
        var k = new h["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {
                login: f["a"],
                variable: m
            }
        })
            , v = (n("96cf"),
            n("76fe"),
            n("9012"))
            , y = n("5c96")
            , w = n.n(y)
            , T = (n("0fae"),
            n("f24c"),
            n("19bc"),
            n("313e"))
            , D = (n("c695"),
            n("a388"))
            , A = n.n(D)
            , C = (n("7022"),
            n("c975"),
            n("d81d"),
            n("a434"),
            {})
            , S = function(e, t) {
            C[e] || (C[e] = []),
                C[e].push(t)
        }
            , N = function(e, t) {
            if (C[e]) {
                var n = C[e];
                n.map((function(e) {
                        e(t)
                    }
                ))
            }
        }
            , I = function(e, t) {
            if (C[e])
                if (t) {
                    var n = C[e].indexOf(t);
                    C[e].splice(n, 1)
                } else
                    C[e].length = 0
        }
            , j = {
            $on: S,
            $emit: N,
            $off: I
        }
            , P = "2020"
            , x = "2022"
            , O = !0
            , L = {
            $startYear: P,
            $endYear: x,
            $popoverShow: O
        }
            , H = n("bc3a")
            , R = n.n(H)
            , Q = n("4328")
            , _ = n.n(Q)
            , B = (n("a78e"),
            n("555f"));
        i["default"].use(v["tree"]),
            i["default"].use(w.a),
            i["default"].prototype.$echarts = T,
            i["default"].use(A.a),
            i["default"].prototype.$observer = j,
            i["default"].prototype.$timeRange = L,
            i["default"].prototype.$axios = R.a,
            i["default"].prototype.$qs = _.a,
            i["default"].config.productionTip = !1,
            d["a"].beforeEach((function(e, t, n) {
                    var i = Object(B["d"])("restrict");
                    e.meta.noNeedLogin ? i && "login" === e.name ? n({
                        path: "/"
                    }) : n() : i ? n() : n({
                        path: "/login",
                        query: {
                            redirect: e.fullPath
                        }
                    })
                }
            ));
        var F = window;
        d["a"].onError((function(e) {
                var t = /Loading chunk chunk-(.*)+ failed/g;
                F.location.reload();
                e.message.match(t)
            }
        )),
            new i["default"]({
                router: d["a"],
                store: k,
                render: function(e) {
                    return e(l)
                }
            }).$mount("#app")
    },
    "5c0b": function(e, t, n) {
        "use strict";
        n("9c0c")
    },
    7022: function(e, t, n) {},
    7312: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACoFBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////23uE4AAAA33RSTlMA+14CBAUB/t0DK/gR/P3fINiioTn5Jwru84jMgPXG+kJ70fJWEuXNwQzX9AtvPkooBw3VE7B5Rq84h0iRHXLLSYyPbeIwCeSfjpN1FLdT8bgXFkDvruF9VMRsYZA17IVfnkzDCGDAV4aJyRkYczTjskUc3i8j1i1Z0OqktvZ/ZM7KuapuTpwuZqYVPL3mUWKERNQ9EMjF3DrHKkGgGk1nT+h4Q5l3ButHqBtlYyKss2skDyzn7R5Yi790wiVL8M/TvHHSIat+2Wl6irqCaNoyO5SVozNQdmq7fFytsTHg401TiAAABadJREFUGBntwWWXI9cVBdAjtaQaNTMz4zAzMzMzM5OZmXHGnjF7wIwBY2IImJ0YA+evJB/c95XUpVa9qievZK3eG3369Pm/NbjwhVmX7qxvr6hovW3yE4WD8WuK1pbvzmKM7IrRj0Xx67hl8l101DzpDaRc5OJnTMyaV4vU2v8OkzhTiNQZ+jeLSWXPbEKKTGymK0/dhFQIz6Zrk0MwbugfqKF1MQzbM4Ra8g7DqNxHqCnnGAzak8Melue/eui1zHA4890Rq/Onsocje2FMWwvjHBidjhgnymcwzoROGBIZxljHN4bRQ3hbHmMti8CM8YzRUfk8HIW6FjDGjTBifxHttl9GQodbaZfxLxgQOkW7nVH0IjSadi1R+Pd72mR9gSTuCdBmCny7vYyKFURSQYvK+3Ph1yTa7IMLq2mzEz7traKyCa48TqVhKPy5msqQTrjS2U5lBXyJLqfILoRLj1oUU6PwYzOVm+HaTCoX4UcBRcY5uHa4iKIAPoTWUzwLDTdTXIjCu/5U0qHhFiqF8G44xbXQUk8xHN79k+I5aKmjeBneNVOsg5ZRFP+GZyUWuzWEoCXcQVECr9IpdkNTBUUxvJpIcQU03UZxCF41UpRD018pfgOv1lDUQdMKio3w6s8U46FpPMUT8CpI8RdoqqO4Bl49SbEBmsopGuHVEopN0FRAMQZeTaNYBU3VFEfh1YMWu70VgZa0pexmtcGzHIoT0DKN4i54N5LiRmgZT3ElvKukaIWWaoqf4N0hCisXGl6yKJ6Bd+FSil3QMImibCt8uIKiIROuNTVQXIIfK6mUw7VJVBrhR8l6iqKBcOlsDcXpQfDlXipbQnAl9DCVXfBnTwaVe+HKaCo1H8OnTVSyV8KFxmwqz8Kv3KuoZNQiqdoMKhnj4NsK2lQNQBL3NdBmA/zb+ghtal5Er66poU2/6TBgRDbtCjqRUFs+7awRMGIDYxwIIoHzRxhjF8yI3slY1z8AB/1/ZKxVYRiyeCrjPPxCJmI03VrNOEf2wpjiNxkvY3vlmGNR/Ffo2MTK1iLGW18Mg944TSdZpTk5pVl08tY6GDXtNLW8eQKG5Z6ihuOvwbjOl+naK6/DvOjJDrpUFQzBtHCwnRpyuqbDpNCrU6lpxpQwjNk/gR7k3QczmsZm05sbFsGAHaX0bOlJ+LV1LH3JL4EvxafoyBryyc5tXxe/nRkKZ+am93+xfFkendUXw4cny+igffb829HDosZv/0QHZd/Bs2CAPTSPvQMJpVfmsIesW+HR0xbj/W5iFL2KDtjOeFYdvIjMYhxr2Ci4UHjQYpyxEej7LeO0jIJLf3+Icb6BtjmMVdoVhWtpwQuM9TQ0bbQY4+BcaFl8JWNY90DLgADtiv4YgabInBraBTZDQ24p7ZavgwejDtBu6UtwLVxNuyHj4Mm5etpNGAS3ZtFu91x4lLmFdmvh0nmLNgtL4FnJQtpYd8OVwTNo81AbfJi+hTZPPQg31tLm/ib48no9bWbDhWkBKjMuw6dxzVSyvkJSadVUAg/At/4BKtelIZmTtBkOA+po8zOSiHxIZV4aDEi7nsrxNPTubipVuTBiXBmV+ejddVT2wZDnqHwQQW/GUPkoBEPC91MZgN6MpFILY0ZQeQW9GFpEcQYGraIILEJiXVTGwKD3qHQhsRaKCpgUqaBoQULpVLbBqDVU0pHIPoqOwTCqrYxiDhKZRzEThuVTLEQCz3dQPAbDnqGoGgRnSygWhGFYaAHFEjirpBgG4w5SfA5nyyh+gHFTKIbBWR7FQBh3luJLOBoUYLeqNBgXvYrdsqbDyVGKCUiBaymOwskOiseRAvkUO+BkNcX3SIHhFFPg5GqKIFJgDcWncLKWYjNS4CaKyXBSQPEoUuAOigI4GUkxECkwkGIknKxs7/eLG6JIgdA/+v0ibz769Onzv+M/sKUSEOlUMkYAAAAASUVORK5CYII="
    },
    "8f1f": function(e, t, n) {
        e.exports = n.p + "img/logo1.2116d243.png"
    },
    "958a": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAADAFBMVEVHcEzw3Zbw6Jjmo0f/++7//9306IT///T/wn/766n43nz/5czz38Tw3XDqwFzt2HX/883qrlnfrXvsukHwxUbwz4/uu13no0rxsUfVgFLtqD3NfCzlmWbll0Dnpjz588Px14L/97j/1YLuxG//+MzdqHbxwG3gr3T02HH4/9//y2v/2W/63K+iZVnpsVq5kXvxxWqoZVC0iHfw0qXttHfts3j/9Yb10b/orVjxy3nrvYjv3avquVj/7XPjqVT/vDXipWPiuH3XrGviAAABAXPyu0HqAADoAADqKADlAADfAAAAAH4AAG3vt0PytjXwx0Lxv0vzvj3qlSzxw0jvrjjhjDP112Xsvjc+ETruskjrsDv/0DnggCb/UQCYd1bWAABxeIPqNxL/wi//2T7/AAD6yVzKQhHFAACVj38ABHz241zyzFTuwlP74V/uuUfvyVvz013wyUzroTXwvS7qtE32xj/zqyv2tjH6xzfzri33vDHmkjbqni3tujf2yErvtD/moTXtfQr/cwD30lPpDADFjlXBiU//hwD3y01SNFGmtI3nHwriiiH0uUbkbQD1y0//u0r/7lDim0muom3/mShZN1XmmCztrC/1nBb1wE2cXSz8rCdpc4btAADjjUVfWWfwjh7/wTzUqj5YTnG+unZHIkb/1hbtOxB0ADflLQ7obiXeLB4OAGFbX3rrZSLfkyC4olzuiTNpF1KJaEXltFv1Zh6PhnWoWyP+ZwDlIgD2MgCIVjQ6GFD3VAAAEH/SZSCsjFDSAADPwmSqe0rkhTTby2nrPxL/Zxf/4UTbv23pjSnZUBL/0E7OtW/tkRR9enlWBVHtpy/lYBtkf5BpeYwNMY7HvYD3eyjjXC99Y1/oVSCBj5r/0FsNBmz/rA7/0TEAHJT6eyTXLQDspkTYu39UADsAAGXonCX/eg/VSAa+fS/oWhbYAADkbyAAAIfdKgTpgRsLP525mE1wYWL/nwClmYH/wQXccib/yk1thpbKrXX/sSMACJcAAIT3kgCWjHIfgWGsAAAAQ3RSTlMARHzrHhqrBwJBugpB4eyTXOdI9PCMvMbkXeScFNLGWidBsvtMruap7CnBMGb7+cvE99Fsscc1HNuVn4PgvvXD5ZhvTLE1gQAAAXZJREFUGNNjYIAAVh19I2NWBmSgqG64fffmw7qqKggx9taIWfv37tgyOaKNHSbGotUZ1+S+85jzlK6pSlBRTb0989s93Z0TnQ9OmLNUTQEsaPb/3YFY9xY3z26v2CUu27RBYub2GZmvds118/Bwc/Y46nLelgUo6PTl699PL7xOrw/f6Hn8kEvGfWugoOO/X38+f0t7dGnVuiMnbnpfu2cFFHT4kPrRJe1h4vtbK7feuHs17JwFUNDu+++f3ukpr1++vZ5y0OdyUowNUNDk+Y8nD56mx7/xWr56xb6zd6IsgYKmpx6fuZ3p8+zCpjU+3gnJkRcNgILKk+YtSD0Zd2XDorWLE2bOmDZdAygoX9sQ2rcweVnS7OiJ0Y2hUf6cINcLiITH9PT3hrh2NAdV5/OBxRh4BP2D6wODA+pca3wLcpgZwYJcuWElka4hAX5BRb552VlsYEFufmG/iqrK8rLA0uJCXiYOaIDKSErLyUpJiIuJCoGFACUVkHcekqG+AAAAAElFTkSuQmCC"
    },
    "9c0c": function(e, t, n) {},
    a18c: function(e, t, n) {
        "use strict";
        n("d3b7");
        var i = n("2b0e")
            , a = n("8c4f")
            , o = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "app-wrapper",
                style: {
                    minHeight: e.Height
                }
            }, [n("Heads"), e.$route.meta.isTabs ? n("tabs") : e._e(), n("el-backtop"), n("div", {
                staticClass: "main-container",
                style: {
                    "padding-bottom": "首页" === e.$route.meta.title ? "530px" : "/projectAnnounced" !== e.$route.path ? "220px" : "0"
                }
            }, [n("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [n("router-view", {
                key: e.$route.fullPath
            })], 1)], 1), "/projectAnnounced" !== e.$route.path ? n("footerNav") : e._e()], 1)
        }
            , c = []
            , r = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "header_warp"
            }, ["IE" === e.userAgent ? n("el-alert", {
                attrs: {
                    type: "warning",
                    center: "",
                    closable: !1
                }
            }, [n("template", {
                slot: "title"
            }, [e._v(" 尊敬的用户，您当前使用的浏览器是IE，可能会导致部分功能不能正常使用，为了不影响您的工作，"), n("a", {
                staticStyle: {
                    "text-decoration": "underline"
                },
                attrs: {
                    target: "_blank",
                    href: "https://www.google.cn/chrome/"
                }
            }, [e._v("请下载chrome浏览器")])])], 2) : e._e(), n("div", {
                staticClass: "header"
            }, [n("el-row", [n("el-col", {
                attrs: {
                    lg: 6,
                    span: 6
                }
            }, [n("img", {
                attrs: {
                    src: e.logo,
                    height: "50",
                    width: "270"
                }
            })]), n("el-col", {
                attrs: {
                    lg: 16,
                    span: 16
                }
            }, [n("el-menu", {
                staticClass: "el-menu-head",
                attrs: {
                    "default-active": e.$route.meta.Highlight.isNav,
                    mode: "horizontal",
                    "background-color": "#112059",
                    "text-color": "#fff",
                    "active-text-color": "white"
                }
            }, e._l(e.headData, (function(t, i) {
                    return n("el-menu-item", {
                        key: i,
                        staticClass: "menu-head",
                        attrs: {
                            index: t.isActive
                        }
                    }, ["个人中心" === t.name ? n("span", {
                        staticClass: "menu-all",
                        on: {
                            click: e.handleClick
                        }
                    }, [n("span", {
                        style: i < e.headData.length - 1 ? {
                            "border-right": " 1px solid",
                            padding: "0 0.7rem!important"
                        } : {
                            padding: "0 0.7rem!important"
                        }
                    }, [e._v(e._s(t.name) + " ")])]) : n("router-link", {
                        staticClass: "menu-all",
                        attrs: {
                            to: t.path,
                            tag: "span"
                        }
                    }, [n("span", {
                        style: i < e.headData.length - 1 ? {
                            "border-right": " 1px solid",
                            padding: "0 0.7rem!important"
                        } : {
                            padding: "0 0.7rem!important"
                        }
                    }, [e._v(e._s(t.name) + " ")])])], 1)
                }
            )), 1)], 1), n("el-col", {
                staticClass: "user",
                attrs: {
                    lg: 2,
                    span: 2
                }
            }, [e.user ? n("div", {
                ref: "user"
            }, [n("el-dropdown", {
                staticClass: "avatar-container",
                attrs: {
                    trigger: "click"
                }
            }, [n("div", {
                staticClass: "avatar-wrapper"
            }, [n("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: e.userImg,
                    height: "28",
                    width: "30"
                }
            }), n("span", {
                staticClass: "KD-login"
            }, [n("em", {
                ref: "em"
            }, [e._v(e._s(e.user))])])]), n("el-dropdown-menu", {
                staticClass: "user-dropdown",
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [n("el-dropdown-item", {
                attrs: {
                    divided: ""
                }
            }, [n("span", {
                staticClass: "user-exit",
                on: {
                    click: e.logout
                }
            }, [e._v("退出")])])], 1)], 1)], 1) : n("div", [n("img", {
                attrs: {
                    src: e.userImg,
                    height: "28",
                    width: "30"
                }
            }), n("span", {
                on: {
                    click: e.login
                }
            }, [e._v("登录")])])])], 1), n("p", {
                staticClass: "kd-prompt"
            }, [e._v("本平台提供的数据仅供参考")])], 1)], 1)
        }
            , s = []
            , u = (n("4160"),
            n("c975"),
            n("b0c0"),
            n("ac1f"),
            n("466d"),
            n("5319"),
            n("1276"),
            n("159b"),
            n("a78e"),
            n("4328"))
            , l = n.n(u)
            , d = n("555f")
            , h = {
            name: "Header",
            data: function() {
                return {
                    headData: [{
                        path: "/",
                        name: "首页",
                        isActive: "index",
                        auth: "0"
                    }, {
                        path: "/finalProjectInit",
                        name: "信息检索",
                        isActive: "info",
                        auth: "0"
                    }, {
                        path: "/supportStatistic",
                        name: "数据统计",
                        isActive: "dataStatistics",
                        auth: "0"
                    }, {
                        path: "/personCooperateNetworkDiscovery",
                        name: "知识网络分析",
                        isActive: "knowledgeNetwork",
                        auth: "8"
                    }, {
                        path: "/researchHotSpot",
                        name: "数据挖掘发现",
                        isActive: "dataMining",
                        auth: "7"
                    }, {
                        path: "/academicPage",
                        name: "个人中心",
                        isActive: "personalCenter",
                        auth: "0"
                    }, {
                        path: "/aboutUs",
                        name: "关于我们",
                        isActive: "aboutUs",
                        auth: "0"
                    }],
                    user: Object(d["d"])("username"),
                    userID: Object(d["c"])("code"),
                    userAgent: "",
                    logo: n("4ffd"),
                    userImg: n("7312")
                }
            },
            created: function() {
                var e = this
                    , t = Object(d["d"])("restrict");
                t && 0 !== t.length && (t = t.split(","));
                var n = [];
                this.headData.forEach((function(i) {
                        "0" !== i.auth || e.user ? "0" === i.auth && e.user && (-1 === t.indexOf("7") && -1 === t.indexOf("8") || "基础知识库" !== i.name) && n.push(i) : n.push(i),
                        t && 0 !== t.length && t.forEach((function(e) {
                                i.auth && i.auth === e && n.push(i)
                            }
                        ))
                    }
                )),
                    this.headData = n
            },
            mounted: function() {
                this.hanldeVisiblityChange(),
                    window.addEventListener("visibilitychange", this.hanldeVisiblityChange),
                    this.userAgent = this.myexplorer(),
                this.$refs.em && (this.$refs.em.style.width = this.$refs.user.clientWidth - 37 + "px")
            },
            methods: {
                login: function() {
                    this.deleteCookies(),
                        Object(d["a"])(),
                        this.authLogin()
                },
                logout: function() {
                    Object(d["a"])(),
                        window.location.href = "/",
                        this.user = Object(d["d"])("username"),
                        this.$store.dispatch("isAuth", !1)
                },
                myexplorer: function() {
                    var e = window.navigator.userAgent;
                    if (e.indexOf("QQBrowser") >= 0 || e.indexOf("QQ") >= 0)
                        return "腾讯QQ";
                    if (e.indexOf("Safari") >= 0 && e.indexOf("MetaSr") >= 0)
                        return "搜狗";
                    if (window.ActiveXObject || "ActiveXObject"in window) {
                        if (window.XMLHttpRequest) {
                            if (window.XMLHttpRequest && !document.documentMode)
                                return "IE7";
                            if (-[1] || !document.documentMode || "msDoNotTrack"in window.navigator) {
                                var t = function() {
                                    return void 0 === this
                                }();
                                return t ? (window.attachEvent,
                                    "IE") : "IE"
                            }
                            return "IE8"
                        }
                        return "IE6"
                    }
                    return e.indexOf("LBBROWSER") >= 0 ? "猎豹" : e.indexOf("360ee") >= 0 ? "360极速浏览器" : e.indexOf("360se") >= 0 ? "360安全浏览器" : e.indexOf("se") >= 0 ? "搜狗浏览器" : e.indexOf("aoyou") >= 0 ? "遨游浏览器" : e.indexOf("qqbrowser") >= 0 ? "QQ浏览器" : e.indexOf("baidu") >= 0 ? "百度浏览器" : e.indexOf("Firefox") >= 0 ? "火狐" : e.indexOf("Maxthon") >= 0 ? "遨游" : e.indexOf("Chrome") >= 0 ? "谷歌（或360伪装）" : e.indexOf("Opera") >= 0 ? "欧朋" : e.indexOf("TheWorld") >= 0 ? "世界之窗" : e.indexOf("Safari") >= 0 ? "苹果" : "其他"
                },
                deleteCookies: function() {
                    var e = document.cookie.match(/[^ =;]+(?==)/g);
                    if (e)
                        for (var t = e.length; t--; )
                            document.cookie = e[t] + "=0;path=/;expires=" + new Date(0).toUTCString(),
                                document.cookie = e[t] + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString(),
                                document.cookie = e[t] + "=0;path=/;domain=ratingdog.cn;expires=" + new Date(0).toUTCString()
                },
                authLogin: function() {
                    this.$router.replace({
                        path: "/login",
                        query: {
                            redirect: "/"
                        }
                    })
                },
                hanldeVisiblityChange: function() {
                    var e = this;
                    if ("hidden" === document.visibilityState)
                        ;
                    else if ("visible" === document.visibilityState) {
                        var t = Object(d["c"])("refresh");
                        t ? e.$axios.post("/api/auth/refreshToken", l.a.stringify({
                            refreshToken: t
                        })).then((function(t) {
                                var n = t.data.data;
                                if (1002 === t.data.code)
                                    e.deleteCookies(),
                                        Object(d["a"])(),
                                        e.user = "",
                                        e.$router.replace({
                                            path: "/login",
                                            query: {
                                                redirect: e.$route.fullPath
                                            }
                                        });
                                else {
                                    new Date((new Date).getTime() + 72e5);
                                    Object(d["g"])("access", n.accessToken, 7200),
                                        Object(d["g"])("refresh", n.refreshToken, 7200),
                                        Object(d["g"])("TToken", n["ttoken"], 7200),
                                        e.user = Object(d["d"])("username")
                                }
                            }
                        )) : (this.user = "",
                            Object(d["e"])("restrict"))
                    }
                },
                handleClick: function() {
                    var e = Object(d["d"])("restrict");
                    e && 0 !== e.length ? this.$router.push("/academicPage") : this.login()
                }
            }
        }
            , f = h
            , p = (n("45e5"),
            n("2877"))
            , g = Object(p["a"])(f, r, s, !1, null, "41bcba8b", null)
            , b = g.exports
            , m = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return "首页" === e.$route.meta.title ? n("div", {
                staticClass: "Footer"
            }, [n("div", {
                staticClass: "uniform"
            }, [n("div", {
                staticClass: "Policy_statement"
            }, [e._m(0), n("router-link", {
                attrs: {
                    target: "_blank",
                    to: {
                        path: "/statement"
                    }
                }
            }, [n("p", {
                staticClass: "describeInfo",
                staticStyle: {
                    "font-size": "15px"
                }
            }, [e._v("NSFC关于受资助项目科研论文实行开放获取的政策声明")])]), n("router-link", {
                attrs: {
                    target: "_blank",
                    to: {
                        path: "/policies"
                    }
                }
            }, [n("p", {
                staticClass: "describeInfo",
                staticStyle: {
                    "font-size": "15px",
                    "padding-top": "14px"
                }
            }, [e._v("NSFC基础研究知识库开放获取政策实施细则")])])], 1), e._m(1), n("div", {
                staticClass: "WeChat"
            }, [n("img", {
                attrs: {
                    src: e.WeChat,
                    height: "172",
                    width: "173"
                }
            }), n("p", [e._v("关注公众号获取更多资讯")])]), n("div", {
                staticClass: "Policy_statement related_links"
            }, [e._m(2), e._l(e.linkAddress, (function(t) {
                    return n("div", {
                        staticClass: "Links_pictures"
                    }, [n("img", {
                        attrs: {
                            src: t.logo,
                            height: "37",
                            width: "56"
                        }
                    }), n("div", [n("a", {
                        staticStyle: {
                            color: "#202020"
                        },
                        attrs: {
                            href: t.link,
                            target: "_blank"
                        }
                    }, [e._v(" " + e._s(t.title) + " ")])])])
                }
            ))], 2)]), e._m(3)]) : n("div", {
                staticClass: "Footer"
            }, [e._m(4)])
        }
            , k = [function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "describe titleH"
            }, [n("div", {
                staticClass: "title-line titleG-line"
            }), n("div", {
                staticClass: "title-content titleW-content"
            }, [e._v("政策声明")])])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "Policy_statement"
                }, [n("div", {
                    staticClass: "describe titleH"
                }, [n("div", {
                    staticClass: "title-line titleG-line"
                }), n("div", {
                    staticClass: "title-content titleW-content"
                }, [e._v("联系我们")])]), n("p", {
                    staticClass: "describeInfo",
                    staticStyle: {
                        "margin-bottom": "0"
                    }
                }, [e._v(" 服务热线：010-62327202 ")]), n("p", {
                    staticClass: "describeInfo",
                    staticStyle: {
                        margin: "50px 0"
                    }
                }, [e._v(" 服务邮箱：bigdata@nsfc.gov.cn ")]), n("p", {
                    staticClass: "describeInfo",
                    staticStyle: {
                        "margin-top": "0"
                    }
                }, [e._v(" 办公地址："), n("br"), e._v("北京市海淀区双清路83号 ")])])
            }
            , function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "describe titleH"
                }, [n("div", {
                    staticClass: "title-line titleG-line"
                }), n("div", {
                    staticClass: "title-content titleW-content"
                }, [e._v("相关链接")])])
            }
            , function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center"
                    }
                }, [i("p", {
                    staticClass: "copyright",
                    staticStyle: {
                        margin: "30px 0 10px 0",
                        display: "inline-block"
                    }
                }, [e._v("版权所有：国家自然科学基金委员会"), i("span", [e._v("京ICP备05002826号")]), i("a", {
                    staticClass: "ghs",
                    attrs: {
                        target: "_blank",
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040202500068"
                    }
                }, [i("img", {
                    staticClass: "ghs",
                    attrs: {
                        src: n("958a")
                    }
                }), e._v("京公网安备 11040202500068号 ")])])])
            }
            , function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin-bottom": "10px"
                    }
                }, [i("p", {
                    staticClass: "copyright",
                    staticStyle: {
                        display: "inline-block",
                        "padding-bottom": "0"
                    }
                }, [e._v("版权所有：国家自然科学基金委员会"), i("span", [e._v("京ICP备05002826号")]), i("a", {
                    staticClass: "ghs",
                    attrs: {
                        target: "_blank",
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040202500068"
                    }
                }, [i("img", {
                    attrs: {
                        src: n("958a")
                    }
                }), e._v("京公网安备 11040202500068号 ")])])])
            }
        ]
            , v = {
            name: "Footer",
            data: function() {
                return {
                    WeChat: n("df80"),
                    linkAddress: [{
                        title: "国家自然科学基金委员会",
                        link: "https://www.nsfc.gov.cn",
                        logo: n("8f1f")
                    }, {
                        title: "科学基金网络信息系统",
                        link: "https://grants.nsfc.gov.cn",
                        logo: n("8f1f")
                    }, {
                        title: "国家自然科学基金成果转化服务平台",
                        link: "https://cgzh.nsfc.cn/",
                        logo: n("8f1f")
                    }]
                }
            }
        }
            , y = v
            , w = (n("d8f9"),
            Object(p["a"])(y, m, k, !1, null, "3b5b239a", null))
            , T = w.exports
            , D = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "tab-warp"
            }, [n("div", {
                staticClass: "tabsNav"
            }, [n("div", {
                staticClass: "box"
            }, [n("ul", [e._l(e.tabTitle, (function(t, i) {
                    return n("li", {
                        key: i,
                        class: {
                            active: e.$route.meta.Highlight.isTab === t.isTab
                        },
                        on: {
                            click: function(n) {
                                return e.tabClick(t, i)
                            }
                        }
                    }, [e._v(e._s(t.title) + " "), e._m(0, !0), e._m(1, !0)])
                }
            )), e._l(e.aboutUsTab, (function(t, i) {
                    return "aboutUs" === e.$route.meta.Highlight.isNav ? n("li", {
                        key: i,
                        class: {
                            active: e.activeNav === t.isTab
                        },
                        on: {
                            click: function(n) {
                                return e.tabActiveNav(t, i)
                            }
                        }
                    }, [e._v(e._s(t.title) + " "), e._m(2, !0), e._m(3, !0)]) : e._e()
                }
            ))], 2)]), n("el-breadcrumb", {
                staticClass: "app-breadcrumb",
                attrs: {
                    separator: "/"
                }
            }, [n("transition-group", {
                attrs: {
                    name: "breadcrumb"
                }
            }, e._l(e.posArr, (function(t, i) {
                    return n("el-breadcrumb-item", {
                        key: t.routerPath + i
                    }, ["noredirect" === t.redirect ? n("span", {
                        staticClass: "no-redirect"
                    }, [e._v(e._s(t.routerName))]) : n("router-link", {
                        staticClass: "redirect",
                        attrs: {
                            to: t.redirect || t.routerPath
                        }
                    }, [e._v(e._s(t.routerName))])], 1)
                }
            )), 1)], 1)], 1)])
        }
            , A = [function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "left liDiv"
            }, [n("div")])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "right liDiv"
                }, [n("div")])
            }
            , function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "left liDiv"
                }, [n("div")])
            }
            , function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "right liDiv"
                }, [n("div")])
            }
        ]
            , C = function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("el-breadcrumb", {
                staticClass: "app-breadcrumb",
                attrs: {
                    separator: "/"
                }
            }, [n("transition-group", {
                attrs: {
                    name: "breadcrumb"
                }
            }, e._l(e.levelList, (function(t, i) {
                    return t.meta.title ? n("el-breadcrumb-item", {
                        key: t.path
                    }, ["noredirect" === t.redirect || i == e.levelList.length - 1 ? n("span", {
                        staticClass: "no-redirect"
                    }, [e._v(e._s(t.meta.title))]) : n("router-link", {
                        staticClass: "redirect",
                        attrs: {
                            to: t.redirect || t.path
                        }
                    }, [e._v(e._s(t.meta.title))])], 1) : e._e()
                }
            )), 1)], 1)
        }
            , S = []
            , N = (n("99af"),
            n("4de4"),
            {
                created: function() {
                    this.getBreadcrumb()
                },
                data: function() {
                    return {
                        levelList: null
                    }
                },
                watch: {
                    $route: function() {
                        this.getBreadcrumb()
                    }
                },
                methods: {
                    getBreadcrumb: function() {
                        var e = this.$route.matched.filter((function(e) {
                                return e.name
                            }
                        ))
                            , t = e[0];
                        t && "home" !== t.name && (e = [{
                            path: "/",
                            meta: {
                                title: "首页"
                            }
                        }].concat(e)),
                            this.levelList = e
                    }
                }
            })
            , I = N
            , j = (n("3f13"),
            Object(p["a"])(I, C, S, !1, null, "00e5452e", null))
            , P = j.exports
            , x = (n("365c"),
            {
                name: "tabs",
                components: {
                    Breadcrumb: P
                },
                data: function() {
                    return {
                        indexActive: "",
                        tabTitle: [],
                        aboutUsTab: [{
                            path: "",
                            title: "关于本站",
                            isTab: "0"
                        }, {
                            path: "",
                            title: "常见问题",
                            isTab: "1"
                        }, {
                            path: "",
                            title: "联系我们",
                            isTab: "2"
                        }, {
                            path: "",
                            title: "统计报告",
                            isTab: "3"
                        }],
                        posArr: [],
                        activeNav: 0,
                        badgeVal: 0
                    }
                },
                created: function() {
                    this.posArr = this.$store.state.variable.position
                },
                mounted: function() {
                    this.$observer.$on("activeNav", this.activeFn)
                },
                computed: {
                    position: function() {
                        return this.$store.state.variable.position
                    }
                },
                watch: {
                    position: function(e, t) {
                        this.posArr = e
                    },
                    $route: {
                        handler: function(e) {
                            switch (e.meta.Highlight.isNav) {
                                case "info":
                                    this.tabTitle = [{
                                        path: "/finalProjectInit",
                                        title: "结题项目",
                                        isTab: "final",
                                        auth: "0"
                                    }, {
                                        path: "/fundingProjectInit",
                                        title: "项目公布",
                                        isTab: "funding",
                                        auth: "0"
                                    }, {
                                        path: "/resultInit",
                                        title: "科研成果",
                                        isTab: "results",
                                        auth: "0"
                                    }, {
                                        path: "/personInit",
                                        title: "科研人员",
                                        isTab: "person",
                                        auth: "1"
                                    }, {
                                        path: "/unitInit",
                                        title: "科研单位",
                                        isTab: "unit",
                                        auth: "1"
                                    }];
                                    break;
                                case "personalCenter":
                                    this.tabTitle = [{
                                        path: "/academicPage?id=100080240",
                                        title: "学术主页",
                                        isTab: "academicPage",
                                        auth: "1"
                                    }, {
                                        path: "/myAttention",
                                        title: "我的关注",
                                        isTab: "myAttention",
                                        auth: "1"
                                    }, {
                                        path: "/myCollection",
                                        title: "我的收藏",
                                        isTab: "personalCenter",
                                        auth: "1"
                                    }, {
                                        path: "/retrieveRecords",
                                        title: "检索历史",
                                        isTab: "retrieveRecords",
                                        auth: "1"
                                    }, {
                                        path: "/unitApplication",
                                        title: "数据申请",
                                        isTab: "unitApplication",
                                        auth: "9"
                                    }, {
                                        path: "/unitAudit",
                                        title: "数据审核",
                                        isTab: "unitAudit",
                                        auth: "10"
                                    }];
                                    break;
                                case "dataStatistics":
                                    this.tabTitle = [{
                                        path: "/supportStatistic",
                                        title: "资助项目统计",
                                        isTab: "funding",
                                        auth: "0"
                                    }, {
                                        path: "/conclusionStatistic",
                                        title: "结题项目统计",
                                        isTab: "myAttention",
                                        auth: "0"
                                    }, {
                                        path: "/resultsStatistic",
                                        title: "成果产出统计",
                                        isTab: "personalCenter",
                                        auth: "0"
                                    }, {
                                        path: "/projectAnnounced",
                                        title: "项目公布统计",
                                        isTab: "projectAnnounced",
                                        auth: "3"
                                    }, {
                                        path: "/supportStatistics",
                                        title: "项目申请与资助统计",
                                        isTab: "supportStatistics",
                                        auth: "3"
                                    }];
                                    break;
                                case "knowledgeNetwork":
                                    this.tabTitle = [{
                                        path: "/personCooperateNetworkDiscovery",
                                        title: "科研人员合作网络分析",
                                        isTab: "personCooperateNetworkDiscovery",
                                        auth: "8"
                                    }, {
                                        path: "/unitNetworkDiscovery",
                                        title: "科研单位合作网络分析",
                                        isTab: "unitNetworkDiscovery",
                                        auth: "8"
                                    }, {
                                        path: "/interdisciplinarity",
                                        title: "学科交叉性分析",
                                        isTab: "interdisciplinarity",
                                        auth: "8"
                                    }, {
                                        path: "/KeywordCrossing",
                                        title: "关键词交叉性分析",
                                        isTab: "KeywordCrossing",
                                        auth: "8"
                                    }, {
                                        path: "/codeIntersectionality",
                                        title: "申请代码交叉性分析",
                                        isTab: "codeIntersectionality",
                                        auth: "8"
                                    }];
                                    break;
                                case "dataMining":
                                    this.tabTitle = [{
                                        path: "/researchHotSpot",
                                        title: "研究热点变化分析",
                                        isTab: "researchHotSpot",
                                        auth: "7"
                                    }, {
                                        path: "/keywordAnalysis",
                                        title: "关键词分析",
                                        isTab: "keywordAnalysis",
                                        auth: "7"
                                    }, {
                                        path: "/departmentAnalysis",
                                        title: "申请代码分析",
                                        isTab: "departmentAnalysis",
                                        auth: "7"
                                    }];
                                    break;
                                default:
                                    this.tabTitle = [];
                                    break
                            }
                            this.getCookie()
                        },
                        immediate: !0
                    }
                },
                methods: {
                    getCookie: function() {
                        this.tabTitle = this.filterArr(this.tabTitle)
                    },
                    filterArr: function(e) {
                        var t = Object(d["d"])("restrict");
                        t && 0 !== t.length && (t = t.split(","));
                        var n = [];
                        return e.forEach((function(e) {
                                "0" === e.auth && n.push(e),
                                t && 0 !== t.length && t.forEach((function(t) {
                                        e.auth && e.auth === t && n.push(e)
                                    }
                                ))
                            }
                        )),
                            n
                    },
                    goToPath: function(e) {
                        e.mark && this.$router.push({
                            path: e.routerName
                        })
                    },
                    tabClick: function(e, t) {
                        this.indexActive = t,
                            this.$router.push(e.path)
                    },
                    tabActiveNav: function(e, t) {
                        this.$observer.$emit("tabActiveNav", t)
                    },
                    activeFn: function(e) {
                        this.activeNav = e
                    }
                }
            })
            , O = x
            , L = (n("e7b3"),
            Object(p["a"])(O, D, A, !1, null, "fbaf31de", null))
            , H = L.exports
            , R = {
            name: "layout",
            data: function() {
                return {
                    Height: ""
                }
            },
            components: {
                Heads: b,
                footerNav: T,
                tabs: H
            },
            created: function() {
                this.Height = window.innerHeight + "px"
            }
        }
            , Q = R
            , _ = (n("d5e5"),
            Object(p["a"])(Q, o, c, !1, null, "c02e477a", null))
            , B = _.exports
            , F = {
            path: "",
            component: B,
            redirect: "/resultInit",
            meta: {
                title: "信息检索",
                noNeedLogin: !0
            },
            name: "infoRetrieval",
            children: [{
                path: "/resultInit",
                name: "resultInit",
                component: function() {
                    return Promise.all([n.e("chunk-3d288824"), n.e("chunk-6c1faf8e")]).then(n.bind(null, "14b0"))
                },
                meta: {
                    title: "科研成果",
                    icon: "home",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "results"
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/resultSearchList",
                name: "resultSearchList",
                meta: {
                    title: "成果列表",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "results"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return Promise.all([n.e("chunk-3d288824"), n.e("chunk-51c33fb8")]).then(n.bind(null, "3e4a"))
                }
            }, {
                path: "/resultDetails",
                meta: {
                    title: "成果详情",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "results"
                    },
                    noNeedLogin: !0
                },
                name: "resultDetails",
                component: function() {
                    return n.e("chunk-14b806ae").then(n.bind(null, "a32e"))
                }
            }, {
                path: "/finalProjectInit",
                name: "finalInit",
                meta: {
                    title: "结题项目",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "final"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return n.e("chunk-1d808822").then(n.bind(null, "5bdd"))
                }
            }, {
                path: "/finalSearchList",
                name: "finalSearchList",
                meta: {
                    title: "结题项目",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "final"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return n.e("chunk-3bfbb2e6").then(n.bind(null, "6a0c"))
                }
            }, {
                path: "/finalDetails",
                meta: {
                    title: "项目详情",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "final"
                    },
                    noNeedLogin: !0
                },
                name: "final-details",
                component: function() {
                    return Promise.all([n.e("chunk-d6123588"), n.e("chunk-cbf97e3c"), n.e("chunk-31d116f4")]).then(n.bind(null, "06d9"))
                }
            }, {
                path: "/fundingProjectInit",
                name: "fundingInit",
                meta: {
                    title: "资助项目",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "funding"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return Promise.all([n.e("chunk-3d288824"), n.e("chunk-f29c2138")]).then(n.bind(null, "7fa9"))
                }
            }, {
                path: "/personInit",
                name: "personInit",
                meta: {
                    title: "科研人员",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "person"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return n.e("chunk-3ba87caf").then(n.bind(null, "3148"))
                }
            }, {
                path: "/personSearchList",
                name: "personList",
                meta: {
                    title: "人员列表",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "person"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return n.e("chunk-2a124d03").then(n.bind(null, "361e"))
                }
            }, {
                path: "/nPersonDetails",
                name: "detailsPage",
                meta: {
                    title: "人员详情",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "person"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-d6123588"), n.e("chunk-70cf9bb9"), n.e("chunk-084d1d7e")]).then(n.bind(null, "bb02"))
                }
            }, {
                path: "/unitInit",
                name: "unitInit",
                meta: {
                    title: "科研单位",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "unit"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return n.e("chunk-2e0a2494").then(n.bind(null, "ad3c"))
                }
            }, {
                path: "/unitSearchList",
                name: "unitSearchList",
                meta: {
                    title: "单位列表",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "unit"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return n.e("chunk-7df32a43").then(n.bind(null, "747f"))
                }
            }, {
                path: "/unitDetails",
                meta: {
                    title: "单位详情",
                    isTabs: !0,
                    Highlight: {
                        isNav: "info",
                        isTab: "unit"
                    },
                    noNeedLogin: !1
                },
                name: "unitInfo-details",
                component: function() {
                    return n.e("chunk-7da20801").then(n.bind(null, "858c"))
                }
            }]
        }
            , U = F
            , M = {
            path: "",
            component: B,
            redirect: "/projectAnnounced",
            meta: {
                title: "数据统计",
                noNeedLogin: !0
            },
            children: [{
                path: "/supportStatistic",
                name: "supportInit",
                meta: {
                    title: "资助项目",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataStatistics",
                        isTab: "funding"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-0ef68799"), n.e("chunk-75690b08"), n.e("chunk-34e06759"), n.e("chunk-176ffd0e")]).then(n.bind(null, "70bb"))
                }
            }, {
                path: "/conclusionStatistic",
                name: "conclusionStatistic",
                meta: {
                    title: "结题项目",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataStatistics",
                        isTab: "myAttention"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-0ef68799"), n.e("chunk-75690b08"), n.e("chunk-34e06759"), n.e("chunk-4dee828c")]).then(n.bind(null, "f0cb"))
                }
            }, {
                path: "/resultsStatistic",
                name: "resultsStatistic",
                meta: {
                    title: "成果自定义",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataStatistics",
                        isTab: "personalCenter"
                    },
                    noNeedLogin: !0
                },
                component: function() {
                    return Promise.all([n.e("chunk-0ef68799"), n.e("chunk-75690b08"), n.e("chunk-2b36b241"), n.e("chunk-5e701512")]).then(n.bind(null, "c63d"))
                }
            }, {
                path: "/projectAnnounced",
                name: "projectAnnounced",
                component: function() {
                    return n.e("chunk-2d0aaf2c").then(n.bind(null, "12d9"))
                },
                meta: {
                    title: "项目公布",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataStatistics",
                        isTab: "projectAnnounced"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/supportStatistics",
                name: "supportStatistics",
                component: function() {
                    return n.e("chunk-91cca318").then(n.bind(null, "69b2"))
                },
                meta: {
                    title: "项目申请与资助统计",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataStatistics",
                        isTab: "supportStatistics"
                    },
                    noNeedLogin: !1
                }
            }]
        }
            , E = M
            , V = {
            path: "",
            component: B,
            redirect: "/interdisciplinarity",
            meta: {
                title: "知识网络分析",
                noNeedLogin: !1
            },
            children: [{
                path: "/personCooperateNetworkDiscovery",
                name: "personCooperateNetworkDiscovery",
                meta: {
                    title: "科研人员合作网络分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "knowledgeNetwork",
                        isTab: "personCooperateNetworkDiscovery"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-3d1d49f5"), n.e("chunk-06542516")]).then(n.bind(null, "553b"))
                }
            }, {
                path: "/unitNetworkDiscovery",
                name: "unitNetworkDiscovery",
                meta: {
                    title: "科研单位网络分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "knowledgeNetwork",
                        isTab: "unitNetworkDiscovery"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-3d1d49f5"), n.e("chunk-22933e3b")]).then(n.bind(null, "86f5"))
                }
            }, {
                path: "/interdisciplinarity",
                name: "interdisciplinarity",
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-fe36baa4")]).then(n.bind(null, "b1b3"))
                },
                meta: {
                    title: "学科交叉性分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "knowledgeNetwork",
                        isTab: "interdisciplinarity"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/KeywordCrossing",
                name: "KeywordCrossing",
                meta: {
                    title: "关键词交叉性分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "knowledgeNetwork",
                        isTab: "KeywordCrossing"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-34e06759"), n.e("chunk-a308741a"), n.e("chunk-2d0df025"), n.e("chunk-1113a080")]).then(n.bind(null, "155fb"))
                }
            }, {
                path: "/codeIntersectionality",
                name: "codeIntersectionality",
                meta: {
                    title: "申请代码交叉性分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "knowledgeNetwork",
                        isTab: "codeIntersectionality"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-34e06759"), n.e("chunk-a308741a"), n.e("chunk-07820763")]).then(n.bind(null, "7abd"))
                }
            }]
        }
            , z = V
            , K = {
            path: "",
            component: B,
            redirect: "/academicPage",
            meta: {
                title: "个人中心",
                noNeedLogin: !1
            },
            children: [{
                path: "/academicPage",
                name: "academicPage",
                component: function() {
                    return Promise.all([n.e("chunk-d6123588"), n.e("chunk-70cf9bb9"), n.e("chunk-009c2423")]).then(n.bind(null, "bc92"))
                },
                meta: {
                    title: "学术主页",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "academicPage"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/basicInfo",
                name: "basicInfo",
                component: function() {
                    return n.e("chunk-dc5b26d2").then(n.bind(null, "e618"))
                },
                meta: {
                    title: "基本信息",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "basicInfo"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/myCollection",
                name: "myCollection",
                component: function() {
                    return n.e("chunk-ed68f798").then(n.bind(null, "1dc6"))
                },
                meta: {
                    title: "我的收藏",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "personalCenter"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/myAttention",
                name: "myAttention",
                component: function() {
                    return Promise.all([n.e("chunk-75690b08"), n.e("chunk-2b36b241"), n.e("chunk-ed04e9ec")]).then(n.bind(null, "5ce9"))
                },
                meta: {
                    title: "我的关注",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "myAttention"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/retrieveRecords",
                name: "retrieveRecords",
                component: function() {
                    return n.e("chunk-1ceb9f71").then(n.bind(null, "87e3"))
                },
                meta: {
                    title: "检索历史",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "retrieveRecords"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/unitApplication",
                name: "unitApplication",
                component: function() {
                    return Promise.all([n.e("chunk-0ef68799"), n.e("chunk-11901d9b")]).then(n.bind(null, "5b12"))
                },
                meta: {
                    title: "依托单位数据申请",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "unitApplication"
                    },
                    noNeedLogin: !1
                }
            }, {
                path: "/unitAudit",
                name: "unitAudit",
                component: function() {
                    return Promise.all([n.e("chunk-0ef68799"), n.e("chunk-76890d1b")]).then(n.bind(null, "90c2"))
                },
                meta: {
                    title: "依托单位数据申请审核",
                    isTabs: !0,
                    Highlight: {
                        isNav: "personalCenter",
                        isTab: "unitAudit"
                    },
                    noNeedLogin: !1
                }
            }]
        }
            , W = K
            , Y = {
            path: "",
            component: B,
            redirect: "/researchHotSpot",
            meta: {
                title: "数据挖掘发现",
                noNeedLogin: !1
            },
            children: [{
                path: "/researchHotSpot",
                name: "researchHotSpot",
                meta: {
                    title: "研究热点变化分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataMining",
                        isTab: "researchHotSpot"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-32416200")]).then(n.bind(null, "2d68"))
                }
            }, {
                path: "/keywordAnalysis",
                name: "keywordAnalysis",
                meta: {
                    title: "关键词分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataMining",
                        isTab: "keywordAnalysis"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-62b558cc"), n.e("chunk-c1770b5e")]).then(n.bind(null, "99af2"))
                }
            }, {
                path: "/departmentAnalysis",
                name: "departmentAnalysis",
                meta: {
                    title: "申请代码分析",
                    isTabs: !0,
                    Highlight: {
                        isNav: "dataMining",
                        isTab: "departmentAnalysis"
                    },
                    noNeedLogin: !1
                },
                component: function() {
                    return Promise.all([n.e("chunk-e63f6302"), n.e("chunk-75690b08"), n.e("chunk-34e06759"), n.e("chunk-62b558cc"), n.e("chunk-3f32dd50")]).then(n.bind(null, "c47a"))
                }
            }]
        }
            , q = Y;
        i["default"].use(a["a"]);
        var X = a["a"].prototype.push;
        a["a"].prototype.push = function(e, t, n) {
            return t || n ? X.call(this, e, t, n) : X.call(this, e).catch((function(e) {
                    return e
                }
            ))
        }
        ;
        var G = [{
            path: "",
            component: B,
            redirect: "/",
            children: [{
                path: "/",
                name: "home",
                component: function() {
                    return Promise.all([n.e("chunk-2d0df025"), n.e("chunk-129e8441")]).then(n.bind(null, "37f9"))
                },
                meta: {
                    title: "首页",
                    icon: "home",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/login",
                name: "login",
                component: function() {
                    return n.e("chunk-29b1af5a").then(n.bind(null, "9ed6"))
                },
                meta: {
                    title: "首页",
                    icon: "home",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/reback",
                name: "reback",
                component: function() {
                    return n.e("chunk-74675e06").then(n.bind(null, "32b92"))
                },
                meta: {
                    title: "首页",
                    icon: "home",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/conclusionProjectReport",
                name: "conclusionProjectReport",
                component: function() {
                    return Promise.all([n.e("chunk-cbf97e3c"), n.e("chunk-a852d9dc")]).then(n.bind(null, "f670"))
                },
                meta: {
                    title: "结题报告",
                    Highlight: {
                        isNav: "info",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }]
        }, U, E, z, q, W, {
            path: "",
            component: B,
            meta: {
                title: "关于我们",
                noNeedLogin: !0
            },
            children: [{
                path: "/aboutUs",
                name: "aboutUs",
                component: function() {
                    return Promise.all([n.e("chunk-0ef68799"), n.e("chunk-34f190d6")]).then(n.bind(null, "ffc5"))
                },
                meta: {
                    title: "关于我们",
                    isTabs: !0,
                    Highlight: {
                        isNav: "aboutUs",
                        isTab: "aboutUs"
                    },
                    noNeedLogin: !0
                }
            }]
        }, {
            path: "",
            component: B,
            meta: {
                title: "声明政策",
                noNeedLogin: !0
            },
            children: [{
                path: "/statement",
                name: "statement",
                component: function() {
                    return n.e("chunk-6334038d").then(n.bind(null, "dcaf"))
                },
                meta: {
                    title: "声明",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/policies",
                name: "policies",
                component: function() {
                    return n.e("chunk-6cec5d1e").then(n.bind(null, "61da"))
                },
                meta: {
                    title: "政策",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/RevisedInstructions",
                name: "RevisedInstructions",
                component: function() {
                    return n.e("chunk-709a7603").then(n.bind(null, "ca1b"))
                },
                meta: {
                    title: "改版说明",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/personDetails",
                name: "personDetails",
                component: function() {
                    return n.e("chunk-088a0a32").then(n.bind(null, "ebba"))
                },
                meta: {
                    title: "BRID解析",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }, {
                path: "/callbackoar",
                name: "callbackoar",
                component: function() {
                    return n.e("chunk-26b95658").then(n.bind(null, "c95f"))
                },
                meta: {
                    title: "oar免密登录",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                }
            }]
        }, {
            path: "",
            component: B,
            meta: {
                title: "免密登录",
                noNeedLogin: !0
            },
            children: [{
                path: "/isisn",
                name: "isisn",
                component: function() {
                    return n.e("chunk-2d0bdcfc").then(n.bind(null, "2e1d"))
                },
                meta: {
                    title: "免密登录",
                    Highlight: {
                        isNav: "index",
                        isTab: ""
                    },
                    noNeedLogin: !0
                },
                children: [{
                    path: "callback",
                    name: "callback",
                    component: function() {
                        return n.e("chunk-a6a46212").then(n.bind(null, "d068"))
                    },
                    meta: {
                        title: "免密登录",
                        Highlight: {
                            isNav: "index",
                            isTab: ""
                        },
                        noNeedLogin: !0
                    }
                }, {
                    path: "callbackLogin",
                    name: "callbackLogin",
                    component: function() {
                        return n.e("chunk-8d98e852").then(n.bind(null, "a7e1"))
                    },
                    meta: {
                        title: "免密登录",
                        Highlight: {
                            isNav: "index",
                            isTab: ""
                        },
                        noNeedLogin: !0
                    }
                }]
            }]
        }]
            , $ = new a["a"]({
            mode: "history",
            base: "/",
            routes: G,
            scrollBehavior: function(e, t, n) {
                return {
                    x: 0,
                    y: 0
                }
            }
        });
        t["a"] = $
    },
    cd61: function(e, t, n) {},
    d5e5: function(e, t, n) {
        "use strict";
        n("2e91")
    },
    d8f9: function(e, t, n) {
        "use strict";
        n("cd61")
    },
    d9a5: function(e, t, n) {},
    df80: function(e, t, n) {
        e.exports = n.p + "img/wechat.1a8f800f.png"
    },
    e7b3: function(e, t, n) {
        "use strict";
        n("124f")
    },
    f24c: function(e, t, n) {},
    f660: function(e, t, n) {}
});