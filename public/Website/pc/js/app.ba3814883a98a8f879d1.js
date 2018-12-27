webpackJsonp([5], {
    NHnr: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var a = t("IvJb"), r = {
            render: function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("div", {attrs: {id: "app"}}, [n("router-view")], 1)
            }, staticRenderFns: []
        };
        var i = t("C7Lr")({name: "App"}, r, !1, function (e) {
            t("XrWL")
        }, null, null).exports, o = t("zO6J");
        a.default.use(o.a);
        var u = new o.a({
            routes: [{
                path: "/", name: "index", component: function (e) {
                    return Promise.all([t.e(0), t.e(1)]).then(function () {
                        return e(t("2NXm"))
                    }.bind(null, t)).catch(t.oe)
                }
            }, {
                path: "/news", name: "news", component: function (e) {
                    return Promise.all([t.e(0), t.e(3)]).then(function () {
                        return e(t("ogbC"))
                    }.bind(null, t)).catch(t.oe)
                }
            }, {
                path: "/newsDealis/:id", name: "newsDealis", component: function (e) {
                    return Promise.all([t.e(0), t.e(2)]).then(function () {
                        return e(t("Hn/e"))
                    }.bind(null, t)).catch(t.oe)
                }
            }, {path: "*", redirect: "/index"}]
        }), c = t("DMPO"), l = t.n(c), p = t("kGj0"), d = t.n(p), f = t("eh2P"), s = t.n(f);
        t("yk+x");
        a.default.use(d.a), a.default.use(l.a), a.default.config.productionTip = !1, d.a.initAMapApiLoader({
            key: "6fdd794ebe018a1a3a6f746b99c969b4",
            plugin: ["AMap.Scale", "AMap.OverView", "AMap.ToolBar", "AMap.MapType"]
        }), a.default.directive("highlight", function (e) {
            e.querySelectorAll("pre code").forEach(function (e) {
                s.a.highlightBlock(e)
            })
        }), new a.default({el: "#app", router: u, components: {App: i}, template: "<App/>"})
    }, XrWL: function (e, n) {
    }, "yk+x": function (e, n) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.ba3814883a98a8f879d1.js.map