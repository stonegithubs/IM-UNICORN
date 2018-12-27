webpackJsonp([3], {
    XkFc: function (t, e) {
    }, ogbC: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var a = s("Cz8s"), i = s("aozt"), c = s.n(i), n = {
            data: function () {
                return {pageNum: 0, totlesNum: 3, newList: [], fullHeight: "", loading: !0}
            }, methods: {
                toDealis: function (t) {
                    this.$router.push("/newsDealis/" + t)
                }, changePage: function (t) {
                    var e = this;
                    this.loading = !0, this.newList = [], 0 == t ? (this.pageNum--, c.a.get(href + "/api/post?&page=" + Number(this.pageNum) + "&limit=6").then(function (t) {
                        e.newList = t.data.list, e.totlesNum = Math.ceil(t.data.count / 6), e.pageNum = t.data.current, document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(function () {
                            e.loading = !1
                        }, 1e3)
                    })) : (this.pageNum++, c.a.get(href + "/api/post?&page=" + Number(this.pageNum) + "&limit=6").then(function (t) {
                        e.newList = t.data.list, e.totlesNum = Math.ceil(t.data.count / 6), e.pageNum = t.data.current, document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(function () {
                            e.loading = !1
                        }, 1e3)
                    }))
                }
            }, components: {Header: a.a}, mounted: function () {
                var t = this;
                this.fullHeight = document.documentElement.clientHeight, window.onresize = function () {
                    t.fullHeight = document.documentElement.clientHeight
                }, document.documentElement.scrollTop = 0, document.body.scrollTop = 0, c.a.get(href + "/api/post?&page=1&limit=6").then(function (e) {
                    t.newList = e.data.list, t.totlesNum = Math.ceil(e.data.count / 6), t.pageNum = e.data.current, setTimeout(function () {
                        t.loading = !1
                    }, 1e3)
                })
            }
        }, o = {
            render: function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "NewWarp Warper rb"}, [s("Header"), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.loading,
                        expression: "loading"
                    }], staticClass: "loading", style: {height: t.fullHeight + "px"}
                }, [t._m(0)]), t._v(" "), t._m(1), t._v(" "), s("div", {staticClass: "newsList rb Warper"}, [s("div", {staticClass: "warp rb"}, [s("ul", {staticClass: "flex"}, t._l(t.newList, function (e, a) {
                    return s("li", {
                        staticClass: "rb ", on: {
                            click: function (s) {
                                t.toDealis(e.id)
                            }
                        }
                    }, [s("div", {staticClass: "top rb"}, [s("img", {
                        attrs: {
                            src: e.cover_src ? e.cover_src : "/website/pc/img/M_pic6.png",
                            alt: ""
                        }
                    }), t._v(" "), s("span", {staticClass: "lh fz12 white center "}, [t._v(t._s(e.created_at.slice(0, 10)))])]), t._v(" "), s("div", {staticClass: "bom center"}, [s("p", {staticClass: "title fz18 fwb "}, [t._v(t._s(e.title))]), t._v(" "), s("button", [t._v("阅读文章")])])])
                })), t._v(" "), s("div", {staticClass: "switchPage rb"}, [s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == t.pageNum,
                        expression: "pageNum == 1"
                    }], staticClass: "Left  bb  rb grey", staticStyle: {color: "rgba(124,124,124,1)"}
                }, [t._v("← 上一页 ")]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 != t.pageNum,
                        expression: "pageNum != 1"
                    }], staticClass: "Left  bb  rb  white", on: {
                        click: function (e) {
                            t.changePage(0)
                        }
                    }
                }, [t._v("← 上一页 ")]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.pageNum == t.totlesNum,
                        expression: "pageNum == totlesNum "
                    }], staticClass: "Right bb  rb grey", staticStyle: {color: "rgba(124,124,124,1)"}
                }, [t._v("下一页  →")]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.pageNum != t.totlesNum,
                        expression: "pageNum != totlesNum  "
                    }], staticClass: "Right white  bb rb ", on: {
                        click: function (e) {
                            t.changePage(1)
                        }
                    }
                }, [t._v("下一页  →")])])])]), t._v(" "), t._m(2)], 1)
            }, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "sk-wave"}, [e("div", {staticClass: "sk-rect sk-rect1"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect2"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect3"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect4"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect5"})])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "Topwarper"}, [e("div", {staticClass: "Topwarp mw rb color"}, [e("div", {staticClass: "shadowText color"}, [e("p", {staticClass: "back"}, [this._v("最新资讯")]), this._v(" "), e("p", {staticClass: "forword"}, [this._v("最新资讯")]), this._v(" "), e("p", {staticClass: "subtext"}, [this._v("行业一手消息，最先知道")])])])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "FooterSubWarp rb Warper"}, [e("div", {staticClass: "warp rb"}, [e("p", {staticClass: "fz14 center"}, [this._v(" © 2014 成都子奇科技有限公司 蜀ICP备13026114号-7")])])])
            }]
        };
        var r = s("C7Lr")(n, o, !1, function (t) {
            s("XkFc")
        }, "data-v-26fbe40a", null);
        e.default = r.exports
    }
});
//# sourceMappingURL=3.2a3198edb022c292943b.js.map