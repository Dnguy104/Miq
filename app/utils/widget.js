window.UserVoice = {
    events: window.UserVoice || [],
    push: function(x) {
        window.UserVoice.events.push(x)
    },
    account: {
        "active_widgets": [],
        "campaign": "footer_poweredby",
        "name": "Logitech",
        "white_labeled": false,
        "widget2_domain": "widget.uservoice.com",
        "subdomain_ssl_host": "logitech.uservoice.com",
        "subdomain_site_host": "logitech.uservoice.com",
        "subdomain_key": "logitech",
        "subdomain_id": 818908,
        "client_key": "urstDguk2K0aOkLlEfWZzw",
        "client_options": null,
        "smartvote_autoprompt_enabled": false,
        "satisfaction_autoprompt_enabled": true,
        "messages": {
            "Loading": "Loading"
        },
        "has_ticketing_system": false,
        "has_feedback_system": true,
        "has_smartvote": true,
        "has_satisfaction": true,
        "source_version": 1552576626,
        "deactivated": false
    },
    client_widgets: {},
    manifest: {
        "tab-left-dark-no-bullhorn": "/pkg/clients/widget2/tab-left-dark-no-bullhorn-9669fb4a9d79416e9dc17618c9ed226faf8171ce461449f1282d6fcc2d6aa338.png",
        "tab-left-light-no-bullhorn": "/pkg/clients/widget2/tab-left-light-no-bullhorn-22005a1309b6593c2eafb9f5321f3e77834963069451d85657c9373b1513d47f.png",
        "tab-right-dark-no-bullhorn": "/pkg/clients/widget2/tab-right-dark-no-bullhorn-6c8fc4d589a9d68b16c89b8bd810aee48f11a826d292d22d2b5491cd2a072495.png",
        "tab-right-light-no-bullhorn": "/pkg/clients/widget2/tab-right-light-no-bullhorn-5d328c32f884bd477a82e24e95355e2ef41eed9a98f0a393e1354d2089dbc995.png",
        "tab-horizontal-dark-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-dark-no-bullhorn-ae2f0f4ee5366ac297a76055000da8256a23b7ff3ed9bd6c24317e3cf350139d.png",
        "tab-horizontal-light-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-light-no-bullhorn-32b202e4d461169a377f8750d26bef3947f3c24e9ef3bdce25a317e4e773148d.png",
        "close": "/pkg/clients/widget2/close-88877208b604c275adc17eac27513230d68cc0222e3a4cb147bbc0feba5d267c.png",
        "pb": "/pkg/clients/widget2/UserVoice-logo-light-c40af2f05c5f1dfe06de1a83875730553d9b6c8c663f980e700e1c5a1f1fac56.svg",
        "screenshot": "/pkg/clients/omnibox/screenshot-e7753ef39bd767a7c877dbee778dde8d93f4d9b9bf5b6471341eb8482c4825db.js"
    },
    kombucha_domain: 'https://by2.uservoice.com'
};
"undefined" != typeof UserVoice && UserVoice.showLightbox || !function(t, e, o) {
    function i(t) {
        F("Error: " + t + " See https://www.uservoice.com/o/javascript-sdk for more help.")
    }
    function s(t) {
        for (var e = [], o = 0; o < t.length; o++)
            e.push(t[o]);
        return e
    }
    function n(t, e, o, i, s) {
        var n = t - e / 2;
        return o > n - s && (n = o + s),
        n + e + s > i && (n = i - e - s),
        n
    }
    function r(e) {
        if ("getComputedStyle"in t) {
            for (var i = ["transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "OTransitionDuration", "msTransitionDuration"], s = 0, n = 0, r = i.length; r > n; n++) {
                var a = i[n]
                  , l = Y.getComputedStyle(e)[a] || e.style[a];
                if (l) {
                    s = 1e3 * parseFloat(l);
                    break
                }
            }
            if (0 !== s) {
                var p = Y.data(e, "transition-timer")
                  , c = Y.data(e, "transition-timeout-at")
                  , d = +new Date + s;
                Y.addClass(e, "uv-is-transitioning"),
                e.offsetWidth,
                (p === o || d > c) && (clearTimeout(p),
                Y.data(e, "transition-timer", setTimeout(function() {
                    Y.removeClass(e, "uv-is-transitioning"),
                    e.offsetWidth
                }, s)),
                Y.data(e, "transition-timeout-at", d))
            }
        }
    }
    function a(t) {
        meta = e.createElement("meta"),
        meta.setAttribute("name", "viewport"),
        meta.setAttribute("content", t),
        e.head.appendChild(meta)
    }
    function l() {
        for (var t, o = e.getElementsByTagName("meta"), i = 0; i < o.length; i++)
            if (/viewport/i.test(o[i].getAttribute("name"))) {
                t = o[i];
                break
            }
        return t
    }
    function p() {
        if (!M) {
            var t = l()
              , e = /user-scalable\s*=\s*(0|1|no|yes)/;
            if (t) {
                j = t;
                var o = t.getAttribute("content");
                t.parentNode.removeChild(t),
                a(e.test(o) ? o.replace(e, "user-scalable=0") : o + "; user-scalable=0")
            } else
                a("user-scalable=0");
            M = !0
        }
    }
    function c() {
        if (M) {
            var t = l();
            t.parentNode.removeChild(t),
            j ? e.head.appendChild(j) : a("user-scalable=1"),
            M = !1
        }
    }
    function d(t, e) {
        return t.replace(/\#\{([^{}]*)\}/g, function(t, o) {
            var i = e[o];
            return "string" == typeof i || "number" == typeof i ? i : t
        })
    }
    function u(t) {
        var o = e.createElement("div");
        return o.innerHTML = t,
        e.body.appendChild(o.firstChild),
        e.body.lastChild
    }
    function h(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function g(t, e) {
        e || (e = function(t) {
            return t
        }
        );
        var o = [];
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var s = e(i) + "=" + e(t[i]);
                o.push(s)
            }
        return o.join("&")
    }
    function m(t) {
        for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
            for (var s in e[i])
                e[i].hasOwnProperty(s) && ("object" == typeof t[s] && "object" == typeof e[i][s] ? m(t[s], e[i][s]) : t[s] = e[i][s]);
        return t
    }
    function f(t, o) {
        var i = e.createElement("style");
        i.type = "text/css",
        i.media = o || "screen",
        i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)),
        e.getElementsByTagName("head")[0].appendChild(i)
    }
    function b() {
        X || (f("#uvTab,.uv-tray,.uv-icon,.uv-popover,.uv-bubble{display:none!important}", "print"),
        X = !0)
    }
    function v() {
        W || (f(".uv-icon:hover{opacity:1}"),
        W = !0)
    }
    function x() {
        return e.getElementsByTagName("html")[0]
    }
    function y() {
        var o = e.documentElement
          , i = o && o.clientWidth || e.body.clientWidth
          , s = t.innerHeight || o && o.clientHeight || e.body.clientHeight;
        return {
            width: i,
            height: s
        }
    }
    function _(t) {
        return ((new Date).getTime() - t) / 1e3 / 60 / 60 / 24
    }
    function w(t) {
        return t && (t.tab_color !== o && (t.trigger_background_color = t.tab_color),
        t.tab_position !== o && (t.trigger_position = t.tab_position)),
        t || {}
    }
    function C(t, e) {
        return e && ("support" === e.mode ? e.post_suggestion_enabled = !1 : "feedback" === e.mode && (e.contact_enabled = !1),
        delete e.mode,
        e.default_mode !== o && (e.classic_default_mode = e.default_mode),
        w(e)),
        E({
            mode: t
        }, e || {})
    }
    function S(t, e) {
        if (ot.hasOwnProperty(t) || (ot[t] = {}),
        ot[t].hasOwnProperty(e))
            return ot[t][e];
        var o = t.split("*");
        if (1 === o.length)
            return ot[t][e] = t === e;
        var i = o.shift();
        if (!e.startsWith(i))
            return ot[t][e] = !1;
        var s = e.substr(i.length)
          , n = o.pop();
        if (!s.endsWith(n))
            return ot[t][e] = !1;
        s = s.substr(0, s.length - n.length);
        for (var r = 0; r < o.length; r++) {
            var a = o[r]
              , l = s.indexOf(a);
            if (-1 === l)
                return ot[t][e] = !1;
            s = s.substr(l + a.length)
        }
        return ot[t][e] = !0
    }
    function U() {
        U.fired || (U.fired = !0,
        UserVoice.account.deactivated || (tt.tracker.trackExternalView(),
        tt.tracker.ready()),
        tt.scan())
    }
    var z = {};
    z.sanitizeValue = function(t, e) {
        function o(t) {
            if ("[object Date]" === Object.prototype.toString.call(t))
                return t.getTime();
            if ("string" == typeof t) {
                var e = Date.parse(t);
                if (!isNaN(e))
                    return e
            }
            var o = parseInt(t, 10);
            if (isNaN(o))
                return 0;
            var i = 4102444800 > o;
            return i ? 1e3 * o : o
        }
        var i;
        switch (e) {
        case "boolean":
            i = "true" === t || t === !0 ? !0 : !1;
            break;
        case "timestamp":
            i = o(t);
            break;
        case "int":
            i = parseInt(t, 10),
            isNaN(i) && (i = 0);
            break;
        case "float":
            i = parseFloat(t),
            isNaN(i) && (i = 0);
            break;
        case "string":
            i = [t].toString();
            break;
        default:
            i = t
        }
        return i
    }
    ,
    z.isValidSize = function(t, e) {
        if ("int32cents" === e) {
            var o = 2147483647
              , i = -2147483648
              , s = 100 * t;
            return o >= s && s >= i
        }
        return t.length <= e
    }
    ,
    z.uTF8Encode = function(t) {
        t = t.replace(/\x0d\x0a/g, "\n");
        for (var e = "", o = 0; o < t.length; o++) {
            var i = t.charCodeAt(o);
            128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192),
            e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
            e += String.fromCharCode(i >> 6 & 63 | 128),
            e += String.fromCharCode(63 & i | 128))
        }
        return e
    }
    ,
    z.base64Encode = function(t) {
        var e, o, i, s, n, r, a, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", p = "", c = 0;
        for (t = z.uTF8Encode(t); c < t.length; )
            e = t.charCodeAt(c++),
            o = t.charCodeAt(c++),
            i = t.charCodeAt(c++),
            s = e >> 2,
            n = (3 & e) << 4 | o >> 4,
            r = (15 & o) << 2 | i >> 6,
            a = 63 & i,
            isNaN(o) ? r = a = 64 : isNaN(i) && (a = 64),
            p = p + l.charAt(s) + l.charAt(n) + l.charAt(r) + l.charAt(a);
        return p
    }
    ,
    z.extend = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
            for (var s in e[i])
                e[i].hasOwnProperty(s) && (t[s] = e[i][s]);
        return t
    }
    ,
    z.values = function(t) {
        var e, o = [];
        if (null == t)
            return o;
        for (e in t)
            t.hasOwnProperty(e) && o.push(t[e]);
        return o
    }
    ,
    z.setCookie = function(t, o, i) {
        i = z.extend({
            path: "/",
            domain: "",
            expires: new Date
        }, i || {});
        var s = [t, "=", encodeURIComponent(o), "; path=", i.path, "; domain=", i.domain];
        return i.expires && (i.expires.setFullYear(i.expires.getFullYear() + 1),
        s.push("; expires="),
        s.push(i.expires.toUTCString())),
        "https:" == e.location.protocol && s.push("; Secure"),
        e.cookie = s.join(""),
        o
    }
    ,
    z.getCookie = function(t) {
        for (var o, i = (e.cookie || "").split(";"), s = i.length, n = 0; s > n; n++)
            if (o = z.trim(i[n]),
            o.substr(0, t.length + 1) === t + "=")
                return decodeURIComponent(o.substr(t.length + 1))
    }
    ,
    z.deleteCookie = function(t, e) {
        var o = new Date;
        o.setFullYear(o.getFullYear() - 30),
        e = z.extend({
            expires: o
        }, e || {}),
        z.setCookie(t, "", e)
    }
    ,
    z.trim = function(t) {
        var e = String.prototype.trim;
        return e ? e.apply(t) : t.replace(/^\s+|\s+$/g, "")
    }
    ,
    z.isSpider = function() {
        return /(google web preview|baiduspider|yandexbot)/i.test(t.navigator.userAgent)
    }
    ,
    z.log = function() {
        "undefined" != typeof console && "undefined" != typeof console.log && "undefined" != typeof console.log.apply && console.log.apply(console, arguments)
    }
    ,
    function() {
        function e(t) {
            return 10 > t ? "0" + t : t
        }
        function o(t) {
            return a.lastIndex = 0,
            a.test(t) ? '"' + t.replace(a, function(t) {
                var e = l[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }
        function i(t, e) {
            var a, l, p, c, d, u = s, h = e[t];
            switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(t)),
            "function" == typeof r && (h = r.call(e, t, h)),
            typeof h) {
            case "string":
                return o(h);
            case "number":
                return isFinite(h) ? String(h) : "null";
            case "boolean":
            case "null":
                return String(h);
            case "object":
                if (!h)
                    return "null";
                if (s += n,
                d = [],
                "[object Array]" === Object.prototype.toString.apply(h)) {
                    for (c = h.length,
                    a = 0; c > a; a += 1)
                        d[a] = i(a, h) || "null";
                    return p = 0 === d.length ? "[]" : s ? "[\n" + s + d.join(",\n" + s) + "\n" + u + "]" : "[" + d.join(",") + "]",
                    s = u,
                    p
                }
                if (r && "object" == typeof r)
                    for (c = r.length,
                    a = 0; c > a; a += 1)
                        "string" == typeof r[a] && (l = r[a],
                        p = i(l, h),
                        p && d.push(o(l) + (s ? ": " : ":") + p));
                else
                    for (l in h)
                        Object.prototype.hasOwnProperty.call(h, l) && (p = i(l, h),
                        p && d.push(o(l) + (s ? ": " : ":") + p));
                return p = 0 === d.length ? "{}" : s ? "{\n" + s + d.join(",\n" + s) + "\n" + u + "}" : "{" + d.join(",") + "}",
                s = u,
                p
            }
        }
        "object" != typeof JSON && (t.JSON = {}),
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
        );
        var s, n, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, l = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, o) {
            var a;
            if (s = "",
            n = "",
            "number" == typeof o)
                for (a = 0; o > a; a += 1)
                    n += " ";
            else
                "string" == typeof o && (n = o);
            if (r = e,
            e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                throw new Error("JSON.stringify");
            return i("", {
                "": t
            })
        }
        )
    }();
    var O, T = function(t, o) {
        function i(e, o) {
            var s = this;
            this.subdomain = e,
            this.config = z.extend({}, i.default_config, o || {}),
            this.kombuchaId = a++,
            this.sessionCallbackName = "__uvSessionData" + this.kombuchaId,
            t[this.sessionCallbackName] = function(t) {
                s.sync(t)
            }
            ,
            this.tracks = [],
            this.identity = null,
            this.session = null,
            this.uvts = null,
            this.previousIdentity = null,
            this.isReady = !1,
            this.needsIdentityFlush = !1,
            this.needsSessionFlush = !1,
            this.firedUvts = !1,
            this.firedSession = !1,
            this.syncedSession = !0,
            this.cookieable = null,
            this.initFromCookie(),
            t.__kombuchas.push(this)
        }
        function s(t) {
            this.props = {},
            !t === Object(t) && (t = {}),
            this.set(z.extend({}, t, {
                o: (new Date).getTimezoneOffset()
            }))
        }
        function n() {
            this.store = new r,
            this.recurrent = this.store.get("r"),
            this.store.set("r", !0)
        }
        function r() {
            var e = "x";
            this.storage = null;
            try {
                this.storage = "sessionStorage"in t && t.sessionStorage,
                this.set(e, e),
                this.get(e) !== e ? this.storage = null : this.remove(e)
            } catch (o) {
                this.storage = null
            }
        }
        var a = 0;
        t.__kombuchas = t.__kombuchas || [],
        i.prototype.initFromCookie = function() {
            var t = z.getCookie(this.config.cookie_name);
            this.log("Kombucha#initFromCookie: %s", t),
            t && this.setUvts(t)
        }
        ,
        i.prototype.sendTraits = function() {
            if (this.identity) {
                var t = encodeURIComponent(z.base64Encode(JSON.stringify({
                    u: this.identity.toJSON()
                })));
                if (t !== this.previousIdentity) {
                    this.previousIdentity = t;
                    var e = new XMLHttpRequest
                      , o = [this.config.domain, "/t2/", this.subdomain, "/identify?d=", t].join("");
                    e.open("POST", o),
                    e.setRequestHeader("Content-Type", "application/json"),
                    e.send()
                }
            }
        }
        ,
        i.prototype.identify = function(t, e) {
            this.log("Kombucha#identify: %O", t);
            var e = "undefined" != typeof e ? e : !1;
            try {
                this.identity ? (e === !0 && (this.identity.props = {}),
                this.identity.set(t)) : this.identity = new s(t),
                this.needsIdentityFlush = !0,
                this.flush()
            } catch (o) {
                console.log("not sending traits due to client identify error: ", o)
            }
        }
        ,
        i.prototype.getIdentity = function(t) {
            return this.identity ? this.identity.toJSON() : void 0
        }
        ,
        i.prototype.syncSession = function() {
            this.syncedSession = !1,
            this.identify({})
        }
        ,
        i.prototype.updateSession = function(t) {
            this.log("Kombucha#updateSession: %O", t),
            this.needsSessionFlush = z.extend({}, this.needsSessionFlush || {}, this.session.set(t)),
            this.flush()
        }
        ,
        i.prototype.getSession = function(t) {
            return this.session.get(t)
        }
        ,
        i.prototype.dumpSession = function() {
            return this.session.toJSON()
        }
        ,
        i.prototype.sync = function(t) {
            this.log("Kombucha#sync: %O", t),
            t === Object(t) && (this.session.set(t),
            t.uvts && this.setUvts(t.uvts),
            this.syncCreatedAt(),
            this.fireSession())
        }
        ,
        i.prototype.syncCreatedAt = function() {
            var t = this.identity && this.identity.get("created_at");
            t && (this.log("Kombucha#syncCreatedAt: %O", t),
            this.session.set({
                created_at: t
            }))
        }
        ,
        i.prototype.fireSession = function() {
            this.session.isEnabled() && (this.firedSession ? this.syncedSession || ("function" == typeof this.config.onSync && this.config.onSync(),
            this.syncedSession = !0) : ("function" == typeof this.config.onSession && this.config.onSession(),
            this.firedSession = !0))
        }
        ,
        i.prototype.setUvts = function(t) {
            this.uvts = t,
            z.setCookie(this.config.cookie_name, t, {
                domain: this.cookieDomain()
            }),
            this.firedUvts || ("function" == typeof this.config.onUvts && this.config.onUvts(t),
            this.firedUvts = !0)
        }
        ,
        i.prototype.setConfig = function(t) {
            this.config = z.extend(this.config, t)
        }
        ,
        i.prototype.setChannel = function(t) {
            this.setConfig({
                channel: t
            })
        }
        ,
        i.prototype.track = function(t, e, o) {
            var i = {
                evt: t,
                props: e
            };
            o && (i.channel = o),
            this.tracks.push(i),
            this.flush()
        }
        ,
        i.prototype.trackExternalView = function() {
            this.log("Kombucha#trackExternalView: %s", this.config.channel),
            "external" === this.config.channel && this.track("view_page", {
                u: e.location.toString(),
                r: e.referrer
            })
        }
        ,
        i.prototype.flush = function() {
            if (this.isReady && this.config.enabled) {
                var t = 0
                  , e = this.tracks.length;
                if (this.log("Kombucha#flush: %s", e),
                this.uvts || this.shouldTrack())
                    for ((0 === e && this.needsIdentityFlush || this.needsSessionFlush) && this.sendTrack({
                        evt: "identify"
                    }); e > t; t += 1)
                        this.sendTrack(this.tracks.shift())
            }
        }
        ,
        i.prototype.sendTrack = function(t) {
            var o, i = {}, s = !this.syncedSession || !this.session.recurrent && !this.firedSession;
            o = this.config.v2 && "autoprompt" !== t.evt ? [this.config.domain, "/t2/", this.subdomain, "/", this.normalizeV2Channel(t.channel || this.config.channel)] : [this.config.domain, "/t/", this.subdomain, "/", l[t.channel || this.config.channel] || "_", "/", p[t.evt] || "_"],
            this.uvts && (o.push("/"),
            o.push(this.uvts)),
            o.push("/track.js?_=" + (new Date).getTime()),
            o.push("&s=" + (s ? "0" : "1")),
            o = o.join(""),
            this.needsIdentityFlush && (i.u = this.identity.toJSON(),
            this.needsIdentityFlush = !1),
            this.needsSessionFlush === Object(this.needsSessionFlush) && (i.u = z.extend({}, i.u || {}, this.needsSessionFlush),
            this.needsSessionFlush = !1),
            t.props && z.values(t.props).length > 0 && (i.e = t.props),
            this.log("Kombucha#sendTrack: %s, %O", o, i),
            i = z.values(i).length > 0 ? encodeURIComponent(z.base64Encode(JSON.stringify(i))) : null;
            var n, r, a;
            a = ["&c=", this.sessionCallbackName],
            i && (a.push("&d="),
            a.push(i)),
            n = e.getElementsByTagName("script")[0],
            r = e.createElement("script"),
            r.type = "application/javascript",
            r.async = !0,
            r.defer = !0,
            r.src = o + a.join(""),
            n.parentNode.insertBefore(r, n)
        }
        ,
        i.prototype.ready = function() {
            this.log("Kombucha#ready: %s", this.isReady),
            this.isReady || (this.isReady = !0,
            this.session = new n,
            this.flush(),
            this.afterReady())
        }
        ,
        i.prototype.afterReady = function() {}
        ,
        i.prototype.shouldTrack = function() {
            return !z.isSpider() && this.haveCookies()
        }
        ,
        i.prototype.haveCookies = function() {
            return null === this.cookieable && (z.setCookie("__uvt", "1", {
                domain: this.cookieDomain()
            }),
            this.cookieable = !!z.getCookie("__uvt"),
            z.deleteCookie("__uvt", {
                domain: this.cookieDomain()
            })),
            this.log("Kombucha#haveCookies: %s", this.cookieable),
            this.cookieable
        }
        ,
        i.prototype.log = function() {
            this.config.logging_enabled && z.log.apply(null, arguments)
        }
        ,
        i.prototype.cookieDomain = function(e) {
            return e || t.location.hostname
        }
        ,
        i.prototype.normalizeV2Channel = function(t) {
            switch (t = (t || "").toLowerCase()) {
            case "web":
            case "omnibox":
            case "portal":
            case "ios_app":
            case "android_app":
            case "ios_sdk":
            case "adnroid_sdk":
            case "classic_widget":
                return t;
            case "smartvote_widget":
            case "instant_answers_widget":
            case "satisfaction_widget":
                return "omnibox";
            case "site2":
                return "portal";
            case "external":
                return "web";
            case "admin":
                return "web"
            }
            return "_"
        }
        ,
        s.prototype.set = function(t) {
            var e, o;
            if (!t === Object(t) && (t = {}),
            t.account) {
                e = t.account,
                delete t.account;
                for (o in e)
                    e.hasOwnProperty(o) && (t["account_" + o] = e[o])
            }
            for (o in t) {
                var i = 0 === o.indexOf("cf_") || 0 === o.indexOf("account_cf_");
                if ((s.keys.hasOwnProperty(o) || i) && (this.props[o] = z.sanitizeValue(t[o], s.keys[o]),
                s.sizeLimits[o] && !z.isValidSize(this.props[o], s.sizeLimits[o]))) {
                    var n = o + " value " + this.props[o] + " overflow type " + s.keys[o] + "(" + s.sizeLimits[o] + ")";
                    throw new Error(n)
                }
            }
            return this.props
        }
        ,
        s.prototype.get = function(t) {
            return this.props[t]
        }
        ,
        s.prototype.toJSON = function() {
            var t = this.props
              , e = t.account || {}
              , o = {};
            for (k in t)
                0 === k.indexOf("account_") ? e[k.substr(8)] = t[k] : 0 !== k.indexOf("account") && (o[k] = t[k]);
            return o.account = e,
            o
        }
        ,
        s.keys = {
            o: "int",
            name: "string",
            email: "string",
            id: "string",
            type: "string",
            created_at: "timestamp",
            account_name: "string",
            account_id: "string",
            account_monthly_rate: "float",
            account_ltv: "float",
            account_plan: "string",
            account_created_at: "timestamp"
        },
        s.sizeLimits = {
            name: 255,
            email: 255,
            id: 255,
            account_id: 255,
            type: 255,
            account_name: 255,
            account_monthly_rate: "int32cents",
            account_ltv: "int32cents",
            account_plan: 255
        },
        n.prototype.set = function(t) {
            var e, o = {};
            for (e in t)
                n.keys.hasOwnProperty(e) && (o[e] = z.sanitizeValue(t[e], n.keys[e]));
            for (e in o)
                o.hasOwnProperty(e) && this.store.set(e, o[e]);
            return o
        }
        ,
        n.prototype.get = function(t) {
            return this.store.get(t)
        }
        ,
        n.prototype.toJSON = function() {
            var t, e = {};
            for (var i in n.keys)
                n.keys.hasOwnProperty(i) && (t = this.get(i),
                t !== o && (e[i] = t));
            return e
        }
        ,
        n.prototype.isEnabled = function() {
            return this.store.isEnabled()
        }
        ,
        n.keys = {
            created_at: "timestamp",
            active_days: "int",
            autoprompt_disabled: "boolean",
            smartvote: "boolean",
            satisfaction: "boolean",
            last_smartvote_autoprompt_at: "timestamp",
            last_satisfaction_autoprompt_at: "timestamp",
            last_sat_at: "timestamp",
            last_smartvote_at: "timestamp",
            dismissed_smartvote_at: "timestamp",
            dismissed_sat_at: "timestamp",
            autoprompted_satisfaction_at: "timestamp",
            autoprompted_smartvote_at: "timestamp"
        },
        r.prototype.isEnabled = function() {
            return !!this.storage
        }
        ,
        r.prototype.get = function(t) {
            if (this.storage) {
                var e, o = this.storage.getItem(this.makeKey(t));
                try {
                    e = JSON.parse(o)
                } catch (i) {}
                return e
            }
        }
        ,
        r.prototype.set = function(t, e) {
            this.storage && this.storage.setItem(this.makeKey(t), JSON.stringify(e))
        }
        ,
        r.prototype.remove = function(t) {
            this.storage && this.storage.removeItem(this.makeKey(t))
        }
        ,
        r.prototype.makeKey = function(t) {
            return r.namespace + t
        }
        ,
        r.namespace = "__uv_";
        var l = {
            external: "x",
            classic_widget: "w",
            smartvote_widget: "e",
            instant_answers_widget: "o",
            satisfaction_widget: "t",
            site2: "s",
            admin: "a"
        }
          , p = {
            view_page: "p",
            view_forum: "m",
            view_topic: "c",
            view_kb: "k",
            view_channel: "o",
            view_idea: "i",
            view_article: "f",
            view_comparison: "a",
            authenticate: "u",
            search_ideas: "s",
            search_articles: "r",
            vote_idea: "v",
            vote_article: "z",
            submit_ticket: "t",
            submit_idea: "d",
            subscribe_idea: "b",
            rate_satisfaction: "e",
            identify: "y",
            comment_idea: "h",
            dismiss: "w",
            autoprompt: "x",
            pick_idea: "1",
            view_tweet_button: "2",
            clicked_tweet_button: "3",
            posted_tweet: "4"
        };
        return i.default_config = {
            cookie_name: "uvts",
            domain: t.UserVoice.kombucha_domain,
            channel: "external",
            enabled: !0,
            logging_enabled: !1
        },
        i
    }(this), V = z.base64Encode, E = z.extend, F = (z.values,
    z.setCookie,
    z.getCookie,
    z.lpad,
    z.trim,
    z.log), N = ".uv-icon{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;cursor:pointer;position:relative;-moz-transition:all 300ms;-o-transition:all 300ms;-webkit-transition:all 300ms;transition:all 300ms;width:39px;height:39px;position:fixed;z-index:100002;opacity:0.8;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;-webkit-transition:opacity 100ms;transition:opacity 100ms}.uv-icon.uv-bottom-right{bottom:10px;right:12px}.uv-icon.uv-top-right{top:10px;right:12px}.uv-icon.uv-bottom-left{bottom:10px;left:12px}.uv-icon.uv-top-left{top:10px;left:12px}.uv-icon.uv-is-selected{opacity:1}.uv-icon svg{width:39px;height:39px}.uv-icon-trigger{display:block;width:39px;height:39px}.uv-popover{font-family:sans-serif;font-weight:100;font-size:13px;color:black;position:fixed;z-index:100001}.uv-popover-content{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background:white;border:1px solid transparent;position:relative;width:325px;height:325px;-moz-transition:background 200ms;-o-transition:background 200ms;-webkit-transition:background 200ms;transition:background 200ms}.uv-bottom .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-top .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-left .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-right .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-ie8 .uv-popover-content{position:relative}.uv-ie8 .uv-popover-content .uv-popover-content-shadow{display:block;background:black;content:'';position:absolute;left:-15px;top:-15px;width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,MakeShadow=true,ShadowOpacity=0.30);z-index:-1}.uv-popover-tail{border:9px solid transparent;width:0;z-index:10;position:absolute;-moz-transition:border-top-color 200ms;-o-transition:border-top-color 200ms;-webkit-transition:border-top-color 200ms;transition:border-top-color 200ms}.uv-top .uv-popover-tail{bottom:-20px;border-top:11px solid white}.uv-bottom .uv-popover-tail{top:-20px;border-bottom:11px solid white}.uv-left .uv-popover-tail{right:-20px;border-left:11px solid white}.uv-right .uv-popover-tail{left:-20px;border-right:11px solid white}.uv-popover-loading{background:white;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;width:100%;height:100%;left:0;top:0}.uv-popover-loading-text{position:absolute;top:50%;margin-top:-0.5em;width:100%;text-align:center}.uv-popover-iframe-container{height:100%}.uv-popover-iframe{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;overflow:hidden}.uv-is-hidden{display:none}.uv-is-invisible{display:block !important;visibility:hidden !important}.uv-is-transitioning{display:block !important}.uv-no-transition{-moz-transition:none !important;-webkit-transition:none !important;-o-transition:color 0 ease-in !important;transition:none !important}.uv-fade{opacity:1;-moz-transition:opacity 200ms ease-out;-o-transition:opacity 200ms ease-out;-webkit-transition:opacity 200ms ease-out;transition:opacity 200ms ease-out}.uv-fade.uv-is-hidden{opacity:0}.uv-scale-top,.uv-scale-top-left,.uv-scale-top-right,.uv-scale-bottom,.uv-scale-bottom-left,.uv-scale-bottom-right,.uv-scale-right,.uv-scale-right-top,.uv-scale-right-bottom,.uv-scale-left,.uv-scale-left-top,.uv-scale-left-bottom,.uv-slide-top,.uv-slide-bottom,.uv-slide-left,.uv-slide-right{opacity:1;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;-webkit-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%);-ms-transform:scale(0.8) translateY(-15%);-webkit-transform:scale(0.8) translateY(-15%);transform:scale(0.8) translateY(-15%)}.uv-scale-top-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%) translateX(-10%);-ms-transform:scale(0.8) translateY(-15%) translateX(-10%);-webkit-transform:scale(0.8) translateY(-15%) translateX(-10%);transform:scale(0.8) translateY(-15%) translateX(-10%)}.uv-scale-top-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%) translateX(10%);-ms-transform:scale(0.8) translateY(-15%) translateX(10%);-webkit-transform:scale(0.8) translateY(-15%) translateX(10%);transform:scale(0.8) translateY(-15%) translateX(10%)}.uv-scale-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%);-ms-transform:scale(0.8) translateY(15%);-webkit-transform:scale(0.8) translateY(15%);transform:scale(0.8) translateY(15%)}.uv-scale-bottom-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%) translateX(-10%);-ms-transform:scale(0.8) translateY(15%) translateX(-10%);-webkit-transform:scale(0.8) translateY(15%) translateX(-10%);transform:scale(0.8) translateY(15%) translateX(-10%)}.uv-scale-bottom-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%) translateX(10%);-ms-transform:scale(0.8) translateY(15%) translateX(10%);-webkit-transform:scale(0.8) translateY(15%) translateX(10%);transform:scale(0.8) translateY(15%) translateX(10%)}.uv-scale-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%);-ms-transform:scale(0.8) translateX(15%);-webkit-transform:scale(0.8) translateX(15%);transform:scale(0.8) translateX(15%)}.uv-scale-right-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%) translateY(-10%);-ms-transform:scale(0.8) translateX(15%) translateY(-10%);-webkit-transform:scale(0.8) translateX(15%) translateY(-10%);transform:scale(0.8) translateX(15%) translateY(-10%)}.uv-scale-right-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%) translateY(10%);-ms-transform:scale(0.8) translateX(15%) translateY(10%);-webkit-transform:scale(0.8) translateX(15%) translateY(10%);transform:scale(0.8) translateX(15%) translateY(10%)}.uv-scale-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%);-ms-transform:scale(0.8) translateX(-15%);-webkit-transform:scale(0.8) translateX(-15%);transform:scale(0.8) translateX(-15%)}.uv-scale-left-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%) translateY(-10%);-ms-transform:scale(0.8) translateX(-15%) translateY(-10%);-webkit-transform:scale(0.8) translateX(-15%) translateY(-10%);transform:scale(0.8) translateX(-15%) translateY(-10%)}.uv-scale-left-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%) translateY(10%);-ms-transform:scale(0.8) translateX(-15%) translateY(10%);-webkit-transform:scale(0.8) translateX(-15%) translateY(10%);transform:scale(0.8) translateX(-15%) translateY(10%)}.uv-slide-top.uv-is-hidden{-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uv-slide-bottom.uv-is-hidden{-moz-transform:translateY(100%);-ms-transform:translateY(100%);-webkit-transform:translateY(100%);transform:translateY(100%)}.uv-slide-left.uv-is-hidden{-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uv-slide-right.uv-is-hidden{-moz-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);transform:translateX(100%)}\n", I = function() {
        function e(t) {
            this.events = t,
            this.timer = null,
            this.last_hash = null
        }
        return e.prototype.listen = function() {
            var e = this;
            return "postMessage"in t && ("addEventListener"in t ? t.addEventListener("message", function(t) {
                e.dispatchEvent.apply(e, [t])
            }, !1) : t.attachEvent("onmessage", function(t) {
                e.dispatchEvent.apply(e, [t])
            })),
            this
        }
        ,
        e.prototype.dispatchEvent = function(t) {
            var e = t.data;
            try {
                e = JSON.parse(e)
            } catch (o) {}
            if (e === Object(e))
                for (var i in e)
                    e.hasOwnProperty(i) && this.events.hasOwnProperty(i) && this.events[i](e[i], t.source, t.origin);
            else
                this.events.hasOwnProperty(e) && this.events[e]()
        }
        ,
        e.getHash = function() {
            var e = t.location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        }
        ,
        e
    }(), A = {};
    A.match = function(t) {
        return t.test(navigator.userAgent)
    }
    ,
    A.match(/IEMobile/i) ? A.ieMobile = !0 : A.match(/msie (\d+\.\d+);/i) ? (A.ie = !0,
    A.version = parseInt(RegExp.$1, 10),
    A["ie" + A.version] = !0,
    A.ieCompatibility = 7 === A.version && A.match(/Trident/i),
    A.ieQuirks = e.compatMode && "BackCompat" === e.compatMode) : A.match(/Trident.*rv:(\d+)/i) && (A.ie = !0,
    A.version = parseInt(RegExp.$1, 10),
    A["ie" + A.version] = !0),
    A.touch = "ontouchstart"in t,
    A.mobile = A.match(/Android.*Mobile|iPhone|IEMobile/i),
    A.tablet = !A.mobile && A.match(/Android|iOS/i),
    A.iOS = "ontouchstart"in t && A.match(/like Mac OS X/i);
    var j, L = function(t) {
        return UserVoice.account.messages[t]
    }, Y = function() {
        var o = function() {
            var t, o, i;
            if (1 === arguments.length ? (t = e,
            o = "div",
            i = arguments[0]) : 2 === arguments.length ? (t = arguments[0],
            o = "div",
            i = arguments[1]) : (t = arguments[0],
            o = arguments[1],
            i = arguments[2]),
            t.querySelector)
                return t.querySelector(o + "." + i);
            for (var s = t.getElementsByTagName(o), n = new RegExp("\b" + i + "\b","gmi"), r = 0; r < s.length; r++)
                if (n.test(s[r].className))
                    return s[r];
            return null
        }
          , i = 0;
        return o.uniqId = function() {
            return i += 1,
            "uv-" + i
        }
        ,
        o.identify = function(t) {
            var e = t.getAttribute("id");
            return e ? e : (e = o.uniqId(),
            t.setAttribute("id", e),
            e)
        }
        ,
        o.data = function() {
            function t(t, i, s) {
                var n = o.identify(t);
                return e[n] = e[n] || {},
                arguments.length > 2 ? e[n][i] = s : e[n][i]
            }
            var e = {};
            return t
        }(),
        o.addClass = function(t, e) {
            new RegExp("(^|\\s+)" + e + "(\\s+|$)").test(t.className) || (t.className += (t.className ? " " : "") + e)
        }
        ,
        o.removeClass = function(t, e) {
            t.className = t.className.replace(new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)","g"), " ")
        }
        ,
        o.hasClass = function(t, e) {
            return t.className.indexOf(e) > -1
        }
        ,
        o.dimensions = function(t) {
            var e = t.display;
            if ("none" !== e && null !== e)
                return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
            var o = t.style
              , i = o.visibility
              , s = o.position
              , n = o.display;
            o.visibility = "hidden",
            o.position = "absolute",
            o.display = "block";
            var r = t.clientWidth
              , a = t.clientHeight;
            return o.display = n,
            o.position = s,
            o.visibility = i,
            {
                width: r,
                height: a
            }
        }
        ,
        o.offset = function(t) {
            for (var e = t, o = {
                top: 0,
                left: 0
            }; e; )
                o.top += e.offsetTop,
                o.left += e.offsetLeft,
                e = e.offsetParent;
            return o
        }
        ,
        o.on = function(e, o, i) {
            "addEventListener"in e ? e.addEventListener(o, i, !1) : e.attachEvent("on" + o, function() {
                return i.call(e, t.event)
            })
        }
        ,
        o.off = function(t, e, o) {
            "removeEventListener"in t ? t.removeEventListener(e, o, !1) : t.detachEvent(e, o)
        }
        ,
        o.one = function(t, e, i) {
            var s = function() {
                i(arguments),
                o.off(t, e, s)
            };
            o.on(t, e, s)
        }
        ,
        o.ready = function(o) {
            if (e.addEventListener)
                "complete" === e.readyState ? o() : (e.addEventListener("DOMContentLoaded", o, !1),
                t.addEventListener("load", o, !1));
            else if (e.attachEvent) {
                e.attachEvent("onreadystatechange", o),
                t.attachEvent("onload", o);
                var i = !1;
                try {
                    i = null === t.frameElement
                } catch (s) {}
                e.documentElement.doScroll && i
            }
        }
        ,
        o.element = function(t) {
            return t.nodeName ? t : e.getElementById(t.substr(1))
        }
        ,
        o.getComputedStyle = function(e) {
            var o = t.getComputedStyle(e);
            return o ? o : {}
        }
        ,
        o
    }(), M = !1, X = !1, W = !1, D = ["https:" === e.location.protocol ? "https://" : "http://", "widget.uservoice.com"].join(""), P = {
        "tab-light-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};",
        "tab-light-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};",
        "tab-light-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};",
        "tab-light-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};",
        "tab-light-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};",
        "tab-light-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
        "tab-dark-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};",
        "link-vertical": "display:block;padding:39px 5px 10px 5px;text-decoration:none;",
        "link-horizontal": "display:block;padding:6px 10px 2px 42px;text-decoration:none;",
        "link-vertical-no-bullhorn": "display:block;padding:10px 5px 10px 5px;text-decoration:none;",
        "link-horizontal-no-bullhorn": "display:block;padding:6px 10px 2px 10px;text-decoration:none;"
    }, R = "    html.uvw-dialog-open object,    html.uvw-dialog-open iframe,    html.uvw-dialog-open embed {      visibility: hidden;    }    html.uvw-dialog-open iframe.uvw-dialog-iframe {      visibility: visible;    }    ", J = function() {
        function t(t) {
            this.template = '<div id="uvTab" style="#{tabStyle}"><a id="uvTabLabel" style="background-color: transparent; #{linkStyle}" href="javascript:void(0);"><img src="#{imgSrc}" alt="#{tab_label}" style="border:0; background-color: transparent; padding:0; margin:0;" /></a></div>',
            this.widgets = [],
            this.options = t,
            this.processOptions()
        }
        return t.prototype.push = function(t) {
            this.widget = t,
            this.widgets.push(t)
        }
        ,
        t.prototype.pop = function() {
            1 !== this.widgets.length && (this.widgets.pop(),
            this.widget = this.widgets[this.widgets.length - 1])
        }
        ,
        t.prototype.render = function() {
            this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
            var t = new Image
              , e = this;
            Y.on(t, "load", function() {
                e.createElement(),
                e.show(),
                tt.pendingAutoprompt && (tt.pendingAutoprompt = !1,
                tt.autoprompt())
            }),
            t.src = this.options.imgSrc,
            b()
        }
        ,
        t.prototype.createElement = function() {
            var t = this.el = u(d(this.template, this.options))
              , e = this.btnEl = t.getElementsByTagName("a")[0]
              , o = this;
            Y.addClass(t, "uv-tab uv-slide-" + this.edge),
            t.setAttribute("aria-label", "Open Feedback Widget"),
            this.dimensions = Y.dimensions(t),
            this.hide(!1),
            this.rotation && (t.style.marginTop = ["-", Math.round(this.dimensions.height / 2), "px"].join("")),
            Y.on(e, "click", function(t) {
                return t.preventDefault && t.preventDefault(),
                o.visibleWidget ? o.visibleWidget.hide() : o.widget.show(),
                !1
            }),
            this.onCreateElement && this.onCreateElement(this)
        }
        ,
        t.prototype.remove = function() {
            this.el && (this.widget.hide(),
            this.hide())
        }
        ,
        t.prototype.hide = function(t) {
            t = t === o ? !0 : t,
            t && r(this.el),
            Y.addClass(this.el, "uv-is-hidden"),
            this.el.offsetWidth
        }
        ,
        t.prototype.show = function() {
            r(this.el),
            Y.removeClass(this.el, "uv-is-hidden"),
            this.el.offsetWidth
        }
        ,
        t.prototype.processOptions = function() {
            var t = {
                trigger_position: "right",
                trigger_background_color: "CC6D00",
                tab_label: "feedback",
                tab_inverted: !1
            }
              , e = E({}, t, this.options);
            e.trigger_position.match(/^((top|bottom|middle)-(left|right)|left|right)$/) || (e.trigger_position = t.trigger_position),
            e.trigger_position.match(/^(right|left)$/) && (e.trigger_position = "middle-" + e.trigger_position),
            "string" == typeof e.trigger_background_color && e.trigger_background_color.match(/^#/) && (e.trigger_background_color = e.trigger_background_color.substring(1));
            var o = /([^\-]+)-([^\-]+)/.exec(e.trigger_position)
              , i = o[1]
              , s = o[2]
              , n = "middle" === o[1] ? 90 : 0
              , r = ["tab-", e.inverted ? "light-" : "dark-", e.trigger_position].join("")
              , a = [n ? "link-vertical" : "link-horizontal", "-no-bullhorn"].join("")
              , l = [D, "/dcache", "/widget/feedback-tab.png?t=", encodeURIComponent(e.tab_label), "&c=", e.tab_inverted ? encodeURIComponent(e.trigger_background_color) : "ffffff", "&r=", encodeURIComponent(n), e.tab_inverted ? "&i=yes" : ""].join("")
              , p = e.trigger_position.replace(/middle-/, "").replace(/(bottom|top)-(right|left)/, "horizontal");
            p = ["tab-", p, e.tab_inverted ? "-light" : "-dark", "-no-bullhorn"].join(""),
            p = [D, UserVoice.manifest[p]].join(""),
            e.bgImage = p,
            e.imgSrc = l,
            e.tab_label = h(e.tab_label),
            r = P[r],
            a = P[a],
            (A.ie6 || A.ieQuirks) && (r += "position:absolute !important;",
            "top" === i ? r += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (!this.offsetHeight && 0)) + 'px');" : "middle" === i ? r += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + ((((document.documentElement.clientHeight || document.body.clientHeight) + (!this.offsetHeight && 0)) / 2) >> 0)) + 'px');" : "bottom" === i && (r += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight) + 'px');")),
            e.tabStyle = d(r, {
                color: e.trigger_background_color,
                bgImage: e.bgImage
            }),
            e.linkStyle = a,
            "top" === i ? this.edge = "top" : "bottom" === i ? this.edge = "bottom" : "left" === s ? this.edge = "left" : "right" === s && (this.edge = "right"),
            this.rotation = n,
            this.options = e
        }
        ,
        t
    }(), B = function() {
        function i() {}
        return i.template = '      <div class="uv-popover-content">        <div class="uv-popover-iframe-container"></div>        <div class="uv-popover-loading"><div class="uv-popover-loading-text" role="alert">' + L("Loading") + '&#8230;</div></div>        <!-- shadow for ie8 -->        <div class="uv-popover-content-shadow"></div>      </div>    ',
        i.prototype.show = function(t) {
            t = t === o ? !0 : t,
            tt.hideActive(),
            tt.active = this,
            tt.tracker.sendTraits(),
            this.el || this.render(),
            this.trigger && (this.trigger.visibleWidget = this),
            this.trigger && this.trigger.popoverWillShow && this.trigger.popoverWillShow(),
            t ? this.animateIn() : Y.removeClass(this.el, "uv-is-hidden"),
            this.iframe.poke({
                show: !0
            }),
            this.iframe.poke({
                focus: null
            })
        }
        ,
        i.prototype.hide = function(t) {
            if (t = t === o ? !0 : t,
            tt.active = null,
            this.el || this.render(),
            this.trigger && (this.trigger.visibleWidget = null),
            this.trigger && this.trigger.popoverWillHide && this.trigger.popoverWillHide(),
            t ? this.animateOut() : Y.addClass(this.el, "uv-is-hidden"),
            this.temp) {
                var e = this.el;
                setTimeout(function() {
                    e.parentNode.removeChild(e)
                }, 500)
            }
        }
        ,
        i.prototype.toggle = function(t) {
            this.el || this.render(),
            this.visible() ? this.hide(t) : this.show(t)
        }
        ,
        i.prototype.animateIn = function() {
            this.position(),
            r(this.el),
            Y.removeClass(this.el, "uv-is-hidden"),
            this.el.offsetWidth,
            this.createIframe()
        }
        ,
        i.prototype.animateOut = function() {
            r(this.el),
            Y.addClass(this.el, "uv-is-hidden")
        }
        ,
        i.prototype.visible = function() {
            return !Y.hasClass(this.el, "uv-is-hidden")
        }
        ,
        i.prototype.paneOpened = function(t, e) {
            e.needsReload && (this.needsReload = !0)
        }
        ,
        i.prototype.position = function() {
            var t = this.visible();
            Y.addClass(this.el, "uv-no-transition"),
            t || (Y.addClass(this.el, "uv-is-invisible"),
            this.el.style.left = "-1000px"),
            Y.removeClass(this.el, "uv-scale-\\S+"),
            this.el.offsetWidth,
            this.calculatePosition(),
            this.el.offsetWidth,
            t || Y.removeClass(this.el, "uv-is-invisible"),
            Y.removeClass(this.el, "uv-no-transition"),
            this.el.offsetWidth
        }
        ,
        i.prototype.createIframe = function() {
            var e = Y(this.el, "uv-popover-iframe-container")
              , o = Y(this.el, "uv-popover-loading")
              , i = this;
            (!this.iframe || this.needsReload) && (this.iframe && (e.removeChild(this.iframe.el),
            this.needsReload = !1),
            this.iframe = new Q("popover",this.options.widgetType,E({
                height: "100%"
            }, UserVoice.globalOptions, this.options)),
            this.iframe.render(),
            Y.addClass(this.iframe.el, "uv-popover-iframe"),
            e.appendChild(this.iframe.el),
            A.ie8 && Y.addClass(this.el, "uv-ie8"),
            Y.on(t, "resize", function() {
                i.visible() && i.calculatePosition()
            }),
            o && o.parentNode && (this.iframe.loaded || A.ie && A.version < 10 ? o.parentNode.removeChild(o) : Y.one(this.iframe.el, "load", function(t) {
                o.parentNode.removeChild(o)
            })))
        }
        ,
        i.prototype.createElement = function(t) {
            var o = this.el = e.createElement("div");
            o.innerHTML = this.template,
            o.setAttribute("data-html2canvas-ignore", "true"),
            o.setAttribute("aria-label", "Feedback Widget"),
            this.options.width && !A.mobile && (Y(o, "uv-popover-content").style.width = this.options.width),
            this.options.height && !A.mobile && (Y(o, "uv-popover-content").style.height = this.options.height),
            Y.addClass(this.el, "uv-popover uv-is-hidden"),
            t.appendChild(o)
        }
        ,
        i
    }(), H = function() {
        function o(t) {
            this.template = B.template,
            this.options = t,
            b()
        }
        return o.prototype = E({}, B.prototype),
        o.prototype.render = function() {
            this.createElement(e.body)
        }
        ,
        o.prototype.show = function() {
            var e, o, i;
            A.mobile && p(),
            B.prototype.show.apply(this, arguments),
            A.match(/iPhone OS 7/) && (e = this,
            (i = function() {
                e.visible() && (o !== y().height ? (t.scrollBy(0),
                o = y().height,
                setTimeout(i, 80)) : setTimeout(i, 800))
            }
            )())
        }
        ,
        o.prototype.hide = function() {
            B.prototype.hide.apply(this, arguments),
            A.mobile && (c(),
            this.needsReload = !0)
        }
        ,
        o.prototype.calculatePosition = function() {
            var e = this.options.position.match(/^(top|bottom)-(left|right)$/) ? this.options.position : "bottom-right"
              , o = /(\w+)-(\w+)/.exec(e);
            if (this.el.style.zIndex = 100003,
            A.mobile) {
                var i = Y(this.el, "uv-popover-content")
                  , s = t.innerWidth
                  , n = 325
                  , r = 10
                  , a = s / (n + 2 * r)
                  , l = Math.round(a * r);
                i.style.width = "100%",
                i.style.height = "50%",
                this.el.style.position = "fixed",
                this.el.style.top = l + "px",
                this.el.style.left = l + "px",
                this.el.style.bottom = l + "px",
                this.el.style.right = l + "px"
            } else {
                var r = 20;
                this.el.style.left = "",
                this.el.style[o[1]] = r + "px",
                this.el.style[o[2]] = r + "px"
            }
            Y.addClass(this.el, "uv-" + ("bottom" === o[1] ? "top" : "bottom")),
            Y.addClass(this.el, "uv-scale-" + e)
        }
        ,
        o
    }(), K = function() {
        function t(t, e) {
            this.template = B.template + '<div class="uv-popover-tail"></div>',
            this.options = t,
            this.trigger = e,
            b()
        }
        return t.prototype = E({}, B.prototype),
        t.prototype.render = function() {
            this.target = "self" === this.options.target ? this.trigger.el : Y.element(this.options.target),
            tt.systemTrigger && this.target === tt.systemTrigger.el ? (this.container = this.target,
            this.isContained = !0) : this.container = e.body,
            this.createElement(this.container)
        }
        ,
        t.prototype.paneOpened = function(t, e) {
            B.prototype.paneOpened.apply(this, arguments),
            this.setTailColor(e.backgroundColor)
        }
        ,
        t.prototype.defaultPosition = function() {
            var t = this.target
              , o = Y.offset(t)
              , i = Y.dimensions(t)
              , s = t.currentStyle ? t.currentStyle.position : Y.getComputedStyle(t, null).position
              , n = 100;
            return "fixed" !== s && (o.top -= e.body.scrollTop,
            o.left -= e.body.scrollLeft),
            o.top < n ? "bottom" : o.top + i.height + n > y().height ? "top" : o.left < n ? "right" : o.left + i.width + n > y().width ? "left" : o.top > o.top + i.height - y().height ? "bottom" : "top"
        }
        ,
        t.prototype.calculatePosition = function() {
            var t = Y(this.el, "uv-popover-tail")
              , e = this.target
              , o = "automatic" === this.options.position ? this.defaultPosition() : this.options.position
              , i = "top" === o ? "bottom" : "right" === o ? "left" : "left" === o ? "right" : "top"
              , s = "top" === o || "bottom" === o ? "left" : "top"
              , r = "left" === s ? "width" : "height"
              , a = "left" === s ? "top" : "left"
              , l = "width" === r ? "height" : "width"
              , p = Y.dimensions(this.el)
              , c = Y.dimensions(e)
              , d = Y.offset(e)
              , u = n(d[s] + c[r] / 2, p[r], 0, y()[r], 10)
              , h = n(d[s] - u + c[r] / 2, Y.dimensions(t)[r], 0, p[r], 15)
              , g = 1 * (h - Y.dimensions(t)[r] / 2) / p[r]
              , m = 1 / 3 >= g ? "left" === s ? "-left" : "-top" : 2 / 3 >= g ? "" : "left" === s ? "-right" : "-bottom"
              , f = e.currentStyle ? e.currentStyle.position : Y.getComputedStyle(e, null).position;
            this.currentPosition = o,
            this.el.style.position = "fixed" !== f || this.isContained ? "absolute" : "fixed",
            this.el.style[s] = u - (this.isContained ? d[s] : 0) + "px",
            t.style[s] = h + "px",
            Y.removeClass(this.el, "uv-(bottom|top|left|right)"),
            Y.addClass(this.el, "uv-" + o),
            Y.addClass(this.el, "uv-scale-" + i + m),
            "top" === o || "left" === o ? this.el.style[a] = (this.isContained ? 0 : d[a]) - p[l] - 14 + "px" : ("bottom" === o || "right" === o) && (this.el.style[a] = (this.isContained ? 0 : d[a]) + c[l] + 14 + "px")
        }
        ,
        t.prototype.setTailColor = function(t) {
            "transparent" !== t && ("#ffffff" === t || "rgb(255, 255, 255)" === t || "white" === t || "" === t ? Y.removeClass(this.el, "uv-reversed") : Y.addClass(this.el, "uv-reversed"),
            Y(this.el, "uv-popover-content").style.backgroundColor = t,
            Y(this.el, "uv-popover-tail").style["border" + this.currentPosition[0].toUpperCase() + this.currentPosition.slice(1) + "Color"] = t)
        }
        ,
        t
    }(), $ = function() {
        function t(t) {
            var e = {
                trigger_background_color: "rgba(46, 49, 51, 0.6)",
                trigger_position: "bottom-right"
            };
            this.options = E({}, e, t),
            this.options.trigger_position.match(/^(bottom|top)-(left|right)$/) || (this.options.trigger_position = e.trigger_position),
            this.widgets = [],
            A.touch || v(),
            b()
        }
        return t.icon_images = {
            contact: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n	<g>\r\n		<g>\r\n			<path class="uv-bubble-foreground" fill="#FFFFFF" d="M16.943,19.467c0-3.557,4.432-3.978,4.432-6.058c0-0.935-0.723-1.721-2.383-1.721\r\n				c-1.508,0-2.773,0.725-3.709,1.87l-2.441-2.743c1.598-1.9,4.01-2.924,6.602-2.924c3.891,0,6.271,1.959,6.271,4.765\r\n				c0,4.4-5.037,4.732-5.037,7.265c0,0.481,0.243,0.994,0.574,1.266l-3.316,0.965C17.303,21.459,16.943,20.522,16.943,19.467z\r\n				 M16.943,26.19c0-1.326,1.114-2.441,2.44-2.441c1.327,0,2.442,1.115,2.442,2.441c0,1.327-1.115,2.441-2.442,2.441\r\n				C18.058,28.632,16.943,27.518,16.943,26.19z"/>\r\n		</g>\r\n	</g>\r\n</g>\r\n</svg>\r\n',
            feedback: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
            simple_feedback: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
            post_suggestion: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
            smartvote: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
            satisfaction: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n</g>\r\n<g>\r\n	<g>\r\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M13.501,19.25c0.308,0.3,0.501,0.891,0.427,1.314l-1.02,5.95c-0.073,0.423,0.18,0.604,0.56,0.404\r\n			l5.338-2.806c0.381-0.2,1.004-0.2,1.385,0l5.338,2.806c0.38,0.201,0.633,0.018,0.561-0.404l-1.02-5.95\r\n			C25,20.141,25.191,19.55,25.499,19.25l4.321-4.21c0.308-0.3,0.211-0.596-0.215-0.658l-5.968-0.868\r\n			c-0.426-0.062-0.93-0.427-1.119-0.813l-2.673-5.412c-0.19-0.385-0.501-0.385-0.691,0l-2.671,5.412\r\n			c-0.191,0.385-0.695,0.75-1.12,0.813l-5.967,0.868c-0.426,0.062-0.523,0.358-0.215,0.658L13.501,19.25z"/>\r\n	</g>\r\n</g>\r\n</svg>\r\n'
        },
        t.prototype.remove = function() {
            this.widget.hide();
            try {
                e.body.removeChild(this.el)
            } catch (t) {}
        }
        ,
        t.prototype.push = function(t) {
            this.widget = t,
            this.widgets.push(t)
        }
        ,
        t.prototype.pop = function() {
            1 !== this.widgets.length && (this.widgets.pop(),
            this.widget = this.widgets[this.widgets.length - 1])
        }
        ,
        t.prototype.render = function() {
            var e = this
              , o = "classic_widget" === this.widget.options.mode ? "contact" : this.widget.options.mode;
            this.el || this.createElement(),
            this.btnEl.innerHTML = t.icon_images[o],
            A.ie8 || (this.options.trigger_color && (Y(this.el, "path", "uv-bubble-foreground").style.fill = this.options.trigger_color),
            this.options.trigger_background_color && (Y(this.el, "path", "uv-bubble-background").style.fill = this.options.trigger_background_color)),
            Y.on(this.el, "click", function() {
                e.visibleWidget ? e.visibleWidget.hide() : e.widget.show()
            })
        }
        ,
        t.prototype.createElement = function() {
            var t = this
              , o = this.el = e.createElement("div")
              , i = this.btnEl = e.createElement("a");
            i.className = "uv-icon-trigger",
            i.href = "javascript:void(0);",
            i.setAttribute("aria-label", "Open Feedback Widget"),
            i.addEventListener("keydown", function(e) {
                13 === e.keyCode && (e.preventDefault(),
                t.visibleWidget ? t.visibleWidget.hide() : t.widget.show())
            }),
            o.appendChild(i),
            o.setAttribute("data-html2canvas-ignore", "true"),
            Y.addClass(this.el, "uv-icon uv-" + this.options.trigger_position),
            A.ie8 && Y.addClass(this.el, "uv-ie8"),
            e.body.appendChild(this.el),
            this.onCreateElement && this.onCreateElement(this)
        }
        ,
        t.prototype.popoverWillShow = function() {
            Y.addClass(this.el, "uv-is-selected")
        }
        ,
        t.prototype.popoverWillHide = function() {
            Y.removeClass(this.el, "uv-is-selected")
        }
        ,
        t
    }(), q = function() {
        function t(t, e) {
            this.el = t,
            this.options = e,
            Y.data(this.el, "trigger", this)
        }
        return t.prototype.render = function() {
            var t = this;
            this.clickHandler = function(e) {
                return t.options.trigger_prevent_default_enabled && e.preventDefault && e.preventDefault(),
                t.widget.toggle(),
                t.options.trigger_prevent_default_enabled ? !1 : void 0
            }
            ,
            Y.on(this.el, "click", this.clickHandler)
        }
        ,
        t.prototype.remove = function() {
            this.removed = !0,
            Y.off(this.el, "click", this.clickHandler)
        }
        ,
        t
    }(), Q = function() {
        function i(t, e, o) {
            this.options = E({
                css: "display: block; background: transparent; padding: none; margin: none; border: none; width: #{width}; height: #{height}",
                cdn: "omnibox" === e,
                embed_type: t,
                type: e,
                width: "100%",
                height: "100%"
            }, o),
            this.options.mode.match(/contact|instant/) ? this.options.mode = "contact" : this.options.mode.match(/post_idea|post_suggestion/) ? this.options.mode = "feedback" : "satisfaction" === this.options.mode && (this.options.survey_lockout = !1),
            this.pokes = [],
            this.loaded = !1,
            this.setLocation(),
            this.src = [this.location.baseUrl, this.queryString()].join("?"),
            "object" == typeof o.config && this.poke({
                event: "config",
                data: o.config
            }),
            this.sendUserData(),
            i.all.push(this)
        }
        return i.all = [],
        i.prototype.setLocation = function() {
            var t = "https";
            UserVoice.account.deactivated ? this.location = {
                host: UserVoice.account.widget2_domain,
                protocol: t,
                baseUrl: t + "://" + UserVoice.account.widget2_domain + "/widget_environment/deactivated"
            } : this.options.src ? this.location = {
                host: UserVoice.account.subdomain_ssl_host,
                protocol: t,
                baseUrl: t + "://" + UserVoice.account.subdomain_ssl_host + this.options.src
            } : this.options.cdn ? this.location = {
                host: UserVoice.account.widget2_domain,
                protocol: t,
                baseUrl: [t, "://", UserVoice.account.widget2_domain, "/", this.options.type, "/", encodeURIComponent(this.options.locale || "0"), "/", encodeURIComponent(this.options.accent_color || "0"), "/", UserVoice.account.client_key].join("")
            } : this.location = {
                host: UserVoice.account.subdomain_ssl_host,
                protocol: t,
                baseUrl: t + "://" + UserVoice.account.subdomain_ssl_host + "/clients/widgets/" + this.options.type
            },
            this.location.origin = [this.location.protocol, "://", this.location.host].join("")
        }
        ,
        i.prototype.doLoad = function() {
            this.loaded = !0;
            var t = this.el.contentWindow;
            setTimeout(function() {
                t.focus()
            }, 0),
            this.poke()
        }
        ,
        i.prototype.poke = function(e) {
            if (e && ("object" == typeof e && (e = JSON.stringify(e)),
            this.pokes.push(e)),
            this.loaded && this.el && this.el.contentWindow) {
                for (var o = this.el.contentWindow, i = 0, s = this.pokes.length; s > i; i++)
                    if ("postMessage"in t)
                        o.postMessage(this.pokes[i], this.location.origin);
                    else
                        try {
                            o.location.href = [this.src, (+new Date).toString() + "&" + this.pokes[i]].join("#")
                        } catch (n) {}
                this.pokes = []
            }
        }
        ,
        i.prototype.render = function() {
            this.loaded = !1,
            this.options.startIframeLoad = +new Date;
            var t = this.el = e.createElement("iframe")
              , o = this
              , i = {
                height: this.options.height,
                width: this.options.width
            }
              , s = d(this.options.css, i);
            if (t.attachEvent ? t.attachEvent("onload", function() {
                o.doLoad()
            }) : t.onload = function() {
                o.doLoad()
            }
            ,
            t.name = "uvw-iframe-" + this.options.id,
            Y.addClass(t, "uvw-dialog-iframe"),
            A.ie ? t.style.setAttribute("cssText", s, 0) : t.setAttribute("style", s),
            t.setAttribute("allowtransparency", "true"),
            t.setAttribute("frameBorder", "0"),
            t.frameBorder = 0,
            !(A.ie && A.version < 9)) {
                t.style.visibility = "hidden";
                var n = t.onload;
                t.onload = function() {
                    "function" == typeof n && n(),
                    t.style.visibility = "visible"
                }
            }
            return t.src = this.src,
            t
        }
        ,
        i.prototype.queryString = function() {
            var e = {}
              , i = ["autofocus", "sess", "mode", "locale", "link_color", "topic_id", "forum_id", "article_id", "suggestion_id", "feedback_tab_name", "support_tab_name", "contact_us", "email", "name", "status_ids", "smartvote_status_ids", "states", "category_ids", "smartvote_category_ids", "survey_lockout", "primary_color", "accent_color", "trigger_color", "trigger_background_color", "header", "border", "custom_template_id", "design_settings_id", "allow_tests", "demo", "startIframeLoad", "org_name", "post_idea_title", "contact_title", "smartvote_title", "context", "embed_type", "trigger_method", "menu", "screenshot_enabled", "mobile", "twitter_demo", "twitter_demo_username", "twitter_demo_message", "twitter_demo_satisfaction_thanks_mode", "twitter_demo_satisfaction_thanks_message", "permalinks_enabled", "strings", "sso", "instant_answers", "smartvote", "satisfaction", "contact_enabled", "feedback_enabled"];
            "classic_widget" === this.options.type && i.push("sso");
            for (var s = 0; s < i.length; s++) {
                var n = i[s]
                  , r = this.options[n];
                r === o && (r = this.options["__" + n]),
                r !== o && ("string" == typeof r && n.match(/color/) && r.match(/^#/) && (r = r.substring(1)),
                "object" == typeof r && (r = JSON.stringify(r)),
                e[n] = r)
            }
            this.options.post_idea_enabled !== o && (this.options.post_suggestion_enabled = this.options.post_idea_enabled);
            var a = this.options.ticket_custom_fields || this.options.custom_fields;
            a && "object" == typeof a && (e.custom_fields = V(JSON.stringify(a)));
            var l = this.options.strings || {};
            return l && "object" == typeof l && (e.strings = V(JSON.stringify(l))),
            e.smartvote_status_ids && (e.status_ids = e.smartvote_status_ids,
            delete e.smartvote_status_ids),
            e.smartvote_category_ids && (e.category_ids = e.smartvote_category_ids,
            delete e.smartvote_category_ids),
            this.options.menu_enabled !== o && (e.menu = this.options.menu_enabled),
            this.options.smartvote_enabled !== o && (e.smartvote = this.options.smartvote_enabled),
            this.options.satisfaction_enabled !== o && (e.satisfaction = this.options.satisfaction_enabled),
            this.options.post_suggestion_enabled !== o && (e.feedback_enabled = this.options.post_suggestion_enabled),
            "classic_widget" === this.options.type && (this.options.classic_default_mode !== o && (e.default_mode = this.options.classic_default_mode),
            e.mode = this.options.contact_enabled ? this.options.post_suggestion_enabled ? "full" : "support" : "feedback"),
            e.referrer = t.location.href,
            g(e, function(t) {
                try {
                    t = decodeURIComponent(t)
                } catch (e) {}
                return encodeURIComponent(t)
            })
        }
        ,
        i.prototype.sendUserData = function() {
            if (tt.uvts && this.poke({
                setUvts: tt.uvts
            }),
            tt.email && this.poke({
                setEmail: tt.email
            }),
            tt.name && this.poke({
                setName: tt.name
            }),
            tt.sso && this.poke({
                setSSO: tt.sso
            }),
            tt.external_user_ids && tt.external_user_ids.length)
                for (var t = 0; t < tt.external_user_ids.length; t++)
                    this.poke({
                        addExternalUserId: tt.external_user_ids[t]
                    })
        }
        ,
        i.sendUserData = function() {
            for (var t = 0; t < this.all.length; t++)
                this.all[t].sendUserData()
        }
        ,
        i
    }(), Z = function() {
        function t(t, e) {
            var o = Y.dimensions(t).height
              , i = {
                trigger_method: "embed",
                height: 10 > o ? "325px" : "100%",
                contact_enabled: !0,
                post_suggestion_enabled: !0,
                smartvote_enabled: !0,
                feedback_enabled: !0
            }
              , s = tt.processModeOptions(E(i, UserVoice.globalOptions, e))
              , n = new Q("inline",s.widgetType,s)
              , r = t.currentStyle ? t.currentStyle.position : Y.getComputedStyle(t, null).position;
            for ("static" === r && (t.style.position = "relative"); t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(n.render()),
            n.poke({
                show: !0
            })
        }
        return t
    }(), G = function() {
        function o(t, e) {
            this.iframe = new Q("lightbox",t.widgetType,E({
                css: "display: block; border: none; -moz-border-radius: 3px; -webkit-border-radius: 3px; height: 100%; padding: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;-webkit-transform: translate3d(0,0,0);"
            }, t)),
            this.template = '<div class="uvOverlay1" id="uvw-overlay-#{id}" style="position: relative; visibility:hidden; z-index: 100003;"><div id="uvw-overlay-background-#{id}" style="background: #000; -ms-filter: alpha(opacity=75); filter: alpha(opacity=75); opacity: .75; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"></div><div class="uvOverlay2" style="height: 100%; overflow: auto; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"><div class="uvOverlay3" style="height: 100%; min-height: 550px; min-width: 900px; position: relative; width: 100%;"><div id="#{dialog_id}" style="-webkit-box-shadow: rgba(0,0,0,.5) 0 5px 5px; height: 500px; margin: -250px 0 0 -444px; position: absolute; top: 50%; left: 50%; width: 888px;"><div id="#{dialog_close_id}" title="Close Dialog" style="z-index: 100004; background: transparent url(' + D + UserVoice.manifest.close + ') 0 0 no-repeat; height: 48px; margin: 0; padding: 0; position: absolute; top: -22px; right: -24px; width: 48px;"><button style="background: none; border: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; cursor: pointer; height: 30px; margin: 6px 0 0 9px; padding: 0; width: 30px; text-indent: -9000px;">Close Dialog</button></div><div id="#{dialog_content_id}" style="position:static; width:100%; height:100%"></div>' + (UserVoice.account.campaign ? '<a id="uvw-dialog-powered-by-#{id}" href="http://www.uservoice.com/powered-by?uv_experience=classic&amp;uv_company_name=' + UserVoice.account.name + "&amp;uv_contact_url=" + UserVoice.account.subdomain_site_host + "&amp;utm_campaign=" + UserVoice.account.campaign + "&amp;utm_medium=widget2&amp;utm_source=" + UserVoice.account.subdomain_ssl_host + '" target="_blank" style="background: url(' + D + UserVoice.manifest.pb + ') 0 0 no-repeat; background-size: 100% 100%; font-size: 11px; width: 94px; height: 28px; position: absolute; bottom: -42px; right: 10px; text-indent: -9000px;">Powered by UserVoice</a>' : "") + "</div></div></div></div>",
            this.id = Y.uniqId(),
            this.dialog_id = "uvw-dialog-" + this.id,
            this.dialog_close_id = "uvw-dialog-close-" + this.id,
            this.dialog_content_id = "uvw-dialog-content-" + this.id,
            this.options = t
        }
        return o.prototype.toggle = function() {
            this.show()
        }
        ,
        o.prototype.show = function() {
            A.ie6 || A.touch || A.ieMobile || A.iOS || A.ieQuirks ? t.open(this.iframe.src, "uservoice_widget", "height=500,width=888,resizable=yes,scrollbars=1") : (this.initPopup(),
            this.overlay.style.visibility = "visible",
            this.overlay.style.display = "block",
            this.dialog.focus(),
            Y.addClass(x(), "uvw-dialog-open"))
        }
        ,
        o.prototype.hide = function() {
            this.iframe.poke("reset"),
            this.overlay && (this.overlay.style.display = "none"),
            Y.removeClass(x(), "uvw-dialog-open")
        }
        ,
        o.prototype.initPopup = function() {
            if (this.overlay || (f(R),
            this.overlay = u(d(this.template, this))),
            this.iframe.poke("opened"),
            !this.dialog || this.dialog.getAttribute("data-widget-key") !== this.id) {
                for (this.iframe.render(),
                this.dialogContent = e.getElementById(this.dialog_content_id); this.dialogContent.firstChild; )
                    this.dialogContent.removeChild(this.dialogContent.firstChild);
                this.dialogContent.appendChild(this.iframe.el),
                this.dialog = e.getElementById(this.dialog_id),
                this.dialog.setAttribute("data-widget-key", this.id);
                var t = this;
                Y.on(e.getElementById(this.dialog_close_id), "click", function(e) {
                    return t.hide()
                })
            }
        }
        ,
        o
    }(), tt = function() {
        var i = {
            session: !1,
            syncedSession: !1
        };
        return i.setUvts = function(t) {
            i.uvts = t,
            Q.sendUserData()
        }
        ,
        i.setEmail = function(t) {
            i.email = t,
            Q.sendUserData()
        }
        ,
        i.setName = function(t) {
            i.name = t,
            Q.sendUserData()
        }
        ,
        i.setSSO = function(t) {
            i.sso = t,
            Q.sendUserData()
        }
        ,
        i.addExternalUserId = function(t) {
            i.external_user_ids || (i.external_user_ids = []),
            i.external_user_ids.push(t),
            Q.sendUserData()
        }
        ,
        i.setSession = function() {
            i.session = !0,
            i.pendingAutoprompt && (i.pendingAutoprompt = !1,
            i.autoprompt())
        }
        ,
        i.syncSession = function() {
            i.syncedSession = !0,
            i.pendingAutoprompt && (i.pendingAutoprompt = !1,
            i.autoprompt())
        }
        ,
        i.tracker = new T(UserVoice.account.subdomain_id,{
            channel: e.location.host === UserVoice.account.subdomain_site_host ? "site2" : "external",
            onUvts: i.setUvts,
            onSession: i.setSession,
            onSync: i.syncSession,
            v2: !0
        }),
        i.jsonp = function() {
            var o = {}
              , i = 0;
            return o.send = function(o, s, n, r) {
                var a = "__uvJSONP" + i++;
                t[a] = r;
                var l = [];
                for (var p in s)
                    l.push(p + "=" + encodeURIComponent(s[p]));
                l.push(n + "=" + a);
                var c = e.createElement("script");
                c.src = o + "?" + l.join("&"),
                c.type = "application/javascript",
                c.async = !0,
                c.defer = !0;
                var d = e.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(c, d)
            }
            ,
            o
        }(),
        i.autoprompt = function() {
            if (A.mobile || UserVoice.account.deactivated)
                return void (this.pendingAutoprompt = !1);
            if (this.session === !1 || this.systemTrigger && this.systemTrigger.el === o)
                return void (this.pendingAutoprompt = !0);
            var t = this.tracker.dumpSession()
              , e = this.shouldShowSatisfactionPrompt(t)
              , s = this.shouldShowSmartVotePrompt(t);
            if (e || s) {
                if (this.syncedSession === !1)
                    return this.pendingAutoprompt = !0,
                    void this.tracker.syncSession();
                var n = {};
                if (this.tracker.identity) {
                    var r = {};
                    r.u = this.tracker.identity.toJSON(),
                    n.d = z.base64Encode(JSON.stringify(r))
                }
                var a = this;
                if (e) {
                    var l = function(t) {
                        t.last_satisfaction_autoprompt_at && a.tracker.session.set({
                            last_satisfaction_autoprompt_at: 1e3 * t.last_satisfaction_autoprompt_at
                        }),
                        t.satisfaction && (i.pushSystemWidget({
                            mode: "satisfaction"
                        }),
                        i.showAutoprompt({
                            mode: "satisfaction"
                        }),
                        a.tracker.track("autoprompt", {}, "satisfaction_widget"))
                    };
                    this.jsonp.send("https://by2.uservoice.com/autoprompt/" + UserVoice.account.subdomain_id + "/satisfaction", n, "c", l)
                }
                if (s) {
                    var p = function(t) {
                        t.last_smartvote_autoprompt_at && a.tracker.session.set({
                            last_smartvote_autoprompt_at: 1e3 * t.last_smartvote_autoprompt_at
                        }),
                        t.smartvote && (i.showAutoprompt({
                            mode: "smartvote"
                        }),
                        a.tracker.track("autoprompt", {}, "smartvote_widget"))
                    };
                    this.jsonp.send("https://by2.uservoice.com/autoprompt/" + UserVoice.account.subdomain_id + "/smartvote", n, "c", p)
                }
            }
        }
        ,
        i.shouldShowSatisfactionPrompt = function(t) {
            if (!UserVoice.account.satisfaction_autoprompt_enabled)
                return !1;
            if (t.autoprompt_disabled)
                return !1;
            var e = Math.max(t.created_at || 0, t.last_satisfaction_autoprompt_at || 0)
              , o = t.last_smartvote_autoprompt_at || 0;
            return 0 !== e ? _(e) >= 60 && _(o) >= 21 : !1
        }
        ,
        i.shouldShowSmartVotePrompt = function(t) {
            if (!UserVoice.account.smartvote_autoprompt_enabled)
                return !1;
            if (t.autoprompt_disabled)
                return !1;
            var e = t.last_smartvote_autoprompt_at || 0
              , o = t.last_satisfaction_autoprompt_at || 0;
            return 0 !== e ? _(e) >= 42 && _(o) >= 21 : 7 === t.active_days && _(o) >= 21
        }
        ,
        i.scan = function() {
            var t, o = s(e.getElementsByTagName("*"));
            t = function(t, e, o) {
                var s = t.getAttribute(e);
                t.hasAttribute && t.hasAttribute(e) && !t.getAttribute("data-uv-scanned") && (t.setAttribute("data-uv-scanned", "true"),
                o(t, s, i.extractOptions(t)))
            }
            ;
            for (var n = 0; n < o.length; n++) {
                var r = o[n];
                t(r, "data-uv-inline", this.renderInline),
                t(r, "data-uv-embed", this.renderInline),
                t(r, "data-uv-lightbox", this.linkToLightbox),
                t(r, "data-uv-show", this.linkToPopover),
                t(r, "data-uv-trigger", this.linkToPopover)
            }
        }
        ,
        i.renderInline = function(t, e, o) {
            "classic_widget" === e ? new Z(t,C(e, o)) : new Z(t,E({
                mode: e,
                contact_enabled: !0,
                post_suggestion_enabled: !0,
                smartvote_enabled: !0,
                feedback_enabled: !0
            }, o)),
            i.tracker.sendTraits()
        }
        ,
        i.linkToLightbox = function(t, e, o) {
            i.createCustomTrigger(t, E({
                target: "lightbox"
            }, C(e, o)))
        }
        ,
        i.linkToPopover = function(t, e, o) {
            i.createCustomTrigger(t, E({
                mode: e
            }, o))
        }
        ,
        i.extractOptions = function(t) {
            for (var e = {}, o = 0; o < t.attributes.length; o++) {
                var i = t.attributes[o]
                  , s = i.value;
                i.specified && i.name.match(/^data-uv-/) && (s.match(/^(true|false)$/) && (s = "true" === s),
                e[i.name.replace(/^data-uv-/, "").replace(/-/g, "_")] = s)
            }
            return e
        }
        ,
        i.processModeOptions = function(t) {
            return t.contact_enabled && !UserVoice.account.has_ticketing_system && (t.contact_enabled = !1),
            t.feedback_enabled && !UserVoice.account.has_feedback_system && (t.feedback_enabled = !1),
            t.smartvote_enabled && !UserVoice.account.has_smartvote && (t.smartvote_enabled = !1),
            t.satisfaction_enabled && !UserVoice.account.has_satisfaction && (t.satisfaction_enabled = !1),
            t.mode = t.mode || (t.contact_enabled ? "contact" : t.smartvote_enabled ? "smartvote" : "post_suggestion"),
            t.mode.match(/instant/) && (t.mode = "contact"),
            "post_idea" === t.mode && (t.mode = "post_suggestion"),
            t.widgetType = "classic_widget" === t.mode ? t.mode : "omnibox",
            UserVoice.account.has_ticketing_system || "contact" !== t.mode || (t.mode = "post_suggestion"),
            UserVoice.account.has_satisfaction || "satisfaction" !== t.mode || (t.mode = "post_suggestion"),
            UserVoice.account.has_smartvote || "smartvote" !== t.mode || (t.mode = "post_suggestion"),
            UserVoice.account.has_feedback_system || "post_suggestion" !== t.mode || (t.mode = "contact"),
            t
        }
        ,
        i.active = null,
        i.hideActive = function() {
            i.active && i.active.hide()
        }
        ,
        i.createCustomTrigger = function(t, e) {
            var o = new q(t,E({
                trigger_prevent_default_enabled: !0
            }, UserVoice.globalOptions, e))
              , s = i.createWidget(E({
                trigger_method: "custom_trigger"
            }, e), o);
            return e && e.autoprompt && (i.autopromptOptions = E({
                target: t
            }, Widget.autopromptOptions || {})),
            o.widget = s,
            o.render(),
            O = t,
            o
        }
        ,
        i.createSystemTrigger = function(t) {
            var e = E({
                trigger_color: "white"
            }, UserVoice.globalOptions, t || {})
              , o = e.trigger_style || "icon"
              , s = "icon" === o ? new $(e) : new J(e)
              , n = i.createWidget(E({
                trigger_method: "pin"
            }, t), s);
            if (!(A.ie && A.version < 8 && "icon" === o))
                return s.onCreateElement = function() {
                    O = s.btnEl
                }
                ,
                s.push(n),
                s.render(),
                s
        }
        ,
        i.createWidget = function(t, e) {
            var o = {
                target: "self",
                contact_enabled: !0,
                post_suggestion_enabled: !0,
                smartvote_enabled: !0,
                feedback_enabled: !0
            }
              , s = i.processModeOptions(E(o, UserVoice.globalOptions, t));
            return A.mobile && (s.mobile = !0),
            "lightbox" === s.target || "classic_widget" === s.mode ? new G(s,e) : s.target === !1 || "self" === s.target && !e ? (s.position = s.position || "bottom-right",
            new H(s,e)) : (s.position && s.position.match(/^(automatic|top|bottom|left|right)$/) || (s.position = "automatic"),
            A.mobile ? new H(s,e) : new K(s,e))
        }
        ,
        i.showWidget = function(t) {
            i.createWidget(E({
                temp: !0
            }, t), i.systemTrigger).show(),
            i.tracker.sendTraits()
        }
        ,
        i.showAutoprompt = function(t) {
            i.showWidget(E({
                trigger_method: "autoprompt"
            }, i.autopromptOptions || {}, t))
        }
        ,
        i.pushSystemWidget = function(t) {
            i.systemTrigger && i.systemTrigger.push(i.createWidget(t, i.systemTrigger))
        }
        ,
        i.includeCss = function() {
            f(N)
        }
        ,
        new I({
            openPane: function(t) {
                i.active && i.active.paneOpened(t[0], t[1])
            },
            close: function() {
                i.active && i.active.hide(),
                t.focus(),
                O && setTimeout(function() {
                    O.focus()
                }, 0)
            },
            dismiss: function() {
                i.active && i.active.hide()
            },
            voteSubmitted: function() {
                i.tracker.updateSession({
                    last_smartvote_at: (new Date).getTime()
                })
            },
            ratingSubmitted: function() {
                i.systemTrigger && i.systemTrigger.pop(),
                i.tracker.updateSession({
                    last_sat_at: (new Date).getTime()
                })
            },
            captureScreenshot: function(o, i, s) {
                ("http://widget.uservoice.com" === s || "https://widget.uservoice.com" === s) && (t.html2canvas_onload_options = {
                    onrendered: function(t) {
                        var e = t.toDataURL("image/png");
                        if (e) {
                            var n = e.split(",", 2)[1];
                            i.postMessage(JSON.stringify({
                                identifier: o,
                                content_type: "image/png",
                                base64data: n,
                                width: t.width,
                                height: t.height
                            }), s)
                        }
                    }
                },
                function() {
                    var t = e.createElement("script");
                    t.type = "text/javascript",
                    t.async = !0,
                    t.src = "//widget.uservoice.com" + UserVoice.manifest.screenshot + "?" + o;
                    var i = e.getElementsByTagName("head")[0];
                    i.appendChild(t)
                }())
            }
        }).listen(),
        i
    }();
    UserVoice.globalOptions = {},
    UserVoice._getWidgetEnv = function() {
        return tt
    }
    ,
    UserVoice.push = function(t) {
        var e = t[0]
          , o = t.slice(1);
        "function" == typeof UserVoice[e] && UserVoice[e].apply(null, o)
    }
    ,
    UserVoice.set = function(t, e) {
        if ("object" == typeof t)
            UserVoice.globalOptions = m(UserVoice.globalOptions, t),
            t.sso && tt.setSSO(t.sso);
        else {
            var o = {};
            o[t] = e,
            UserVoice.set(o)
        }
    }
    ,
    UserVoice.embed = function() {
        var t = arguments[0]
          , e = arguments[1]
          , s = arguments[2];
        return ("string" != typeof t || "#" === t[0]) && (e = arguments[0],
        s = arguments[1],
        t = null),
        e === o ? i("please specify where to embed it.") : void tt.renderInline(Y.element(e), t, s)
    }
    ,
    UserVoice.addTrigger = function(t, e) {
        if (t && t.nodeName || "string" == typeof t) {
            if (A.ie && A.version < 8)
                return;
            tt.createCustomTrigger(Y.element(t), e)
        } else
            e = t || {},
            tt.systemTrigger && tt.systemTrigger.remove(),
            tt.systemTrigger = tt.createSystemTrigger(w(e))
    }
    ,
    UserVoice.show = function(t) {
        "string" == typeof arguments[0] && (t = E({
            mode: arguments[0]
        }, arguments[1] || {})),
        tt.showWidget(E({
            trigger_method: "show"
        }, t || {}))
    }
    ,
    UserVoice.hide = function() {
        tt.hideActive()
    }
    ,
    UserVoice.removeTrigger = function(t) {
        t ? Y.data(Y.element(t), "trigger").remove() : (tt.systemTrigger.remove(),
        tt.systemTrigger = null)
    }
    ,
    UserVoice.autoprompt = function(t) {
        tt.autopromptOptions = t,
        tt.autoprompt()
    }
    ,
    UserVoice.identify = function(t, e) {
        tt.tracker.identify(t, e),
        t && (t.email && tt.setEmail(t.email),
        t.name && tt.setName(t.name))
    }
    ,
    UserVoice.setIdentity = function(t) {
        t && (t.email && tt.setEmail(t.email),
        t.name && tt.setName(t.name))
    }
    ,
    UserVoice.track = function(t, e) {
        tt.tracker.track(t, e)
    }
    ,
    UserVoice.footprint = function(t) {
        tt.tracker.setConfig({
            enabled: t
        })
    }
    ,
    UserVoice.scan = function() {
        tt.scan()
    }
    ,
    UserVoice.addExternalUserId = function(t) {
        tt.addExternalUserId(t)
    }
    ,
    UserVoice.setOption = UserVoice.setOptions = UserVoice.set,
    UserVoice.setSSO = function(t) {
        UserVoice.set("sso", t)
    }
    ,
    UserVoice.setCustomFields = function(t) {
        UserVoice.set("ticket_custom_fields", t)
    }
    ,
    UserVoice.setLocale = function(t) {
        UserVoice.set("locale", t)
    }
    ,
    UserVoice.showPrompt = UserVoice.showPopover = UserVoice.show,
    UserVoice.showLightbox = function(t, e) {
        tt.showWidget(E({
            target: "lightbox"
        }, C(t, e)))
    }
    ,
    UserVoice.hideLightbox = function() {}
    ,
    UserVoice.showIcon = UserVoice.pin = function(t, e) {
        e && (e.trigger_position = e.position,
        e.position = "automatic"),
        UserVoice.addTrigger(E({
            mode: t,
            trigger_style: "icon"
        }, e || {}))
    }
    ,
    UserVoice.showTab = function(t, e) {
        UserVoice.addTrigger(E({
            trigger_style: "tab"
        }, C(t, e)))
    }
    ,
    tt.includeCss();
    for (var et = 0; et < UserVoice.events.length; et++)
        UserVoice.push(UserVoice.events[et]);
    tt.scan();
    var ot = {}
      , it = {}
      , st = function() {
        var t = UserVoice.account.active_widgets;
        "object" != typeof t || !t.length > 0 || t.forEach(function(t, o) {
            if (t.target_urls && t.target_urls.length > 0) {
                var i = !1;
                t.target_urls.forEach(function(t) {
                    S(t, e.location.href) && (i = !0)
                }),
                i && !it[o] ? it[o] = tt.createSystemTrigger(t) : !i && it[o] && (it[o].remove(),
                delete it[o])
            }
        })
    }
      , nt = function(t, e, o) {
        var i, s, n, r, a = 0;
        o || (o = {});
        var l = function() {
            a = o.leading === !1 ? 0 : (new Date).getTime(),
            i = null,
            r = t.apply(s, n),
            i || (s = n = null)
        }
          , p = function() {
            var p = (new Date).getTime();
            a || o.leading !== !1 || (a = p);
            var c = e - (p - a);
            return s = this,
            n = arguments,
            0 >= c || c > e ? (i && (clearTimeout(i),
            i = null),
            a = p,
            r = t.apply(s, n),
            i || (s = n = null)) : i || o.trailing === !1 || (i = setTimeout(l, c)),
            r
        };
        return p.cancel = function() {
            clearTimeout(i),
            a = 0,
            i = s = n = null
        }
        ,
        p
    };
    UserVoice.account.active_widgets && UserVoice.account.active_widgets.length > 0 && (t.MutationObserver && (pageObserver = new MutationObserver(nt(st, 200)),
    pageObserver.observe(e.body, {
        childList: !0,
        subtree: !0
    })),
    t.addEventListener("popstate", st),
    t.addEventListener("hashchange", st),
    st()),
    Y.ready(U)
}(window, document);
