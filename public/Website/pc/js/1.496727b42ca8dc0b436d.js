webpackJsonp([1], {
    "2NXm": function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = s("Cz8s"), a = {
            render: function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "FooterWarp rb Warper"}, [s("div", {staticClass: "footer bb rb warp"}, [t._m(0), t._v(" "), s("p", {staticClass: "miniTitle"}, [t._v("优质的合作资源")]), t._v(" "), s("div", {staticClass: "lh rb imgs"}, [s("dl", {staticClass: "flex"}, [t._m(1), t._v(" "), s("dd", {staticClass: "flex"}, t._l([{
                    imgp: "-6px -12px",
                    href: "https://aws.amazon.com/cn/?nc2=h_lg"
                }, {imgp: "-234px -4px", href: "https://soduoduo.com/"}, {
                    imgp: "-463px -4px",
                    href: "https://www.8btc.com/"
                }, {imgp: "-695px -4px", href: "https://www.jinse.com/"}, {
                    imgp: "-0px -95px",
                    href: "https://www.hbg.com/zh-cn/"
                }, {imgp: "-231px -95px", href: "https://www.aliyun.com/?utm_content=se_1000301881"}, {
                    imgp: "-463px -95px",
                    href: "https://www.okcoin.com/"
                }, {imgp: "-705px -91px", href: "http://www.linkedin.com/company/kybernetwork/"}], function (t, e) {
                    return s("span", {
                        staticClass: "rb lh",
                        style: {backgroundPosition: t.imgp, marginBottom: e > 3 ? "30px" : ""}
                    }, [s("a", {attrs: {href: t.href, target: "_blank", title: t.href}})])
                }))])]), t._v(" "), s("p", {staticClass: "miniTitle2"}, [t._v("© 2014 成都子奇科技有限公司 蜀ICP备13026114号-7")])])])
            }, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "shadowText  ",
                    staticStyle: {"margin-top": "30px"}
                }, [e("p", {
                    staticClass: "back",
                    staticStyle: {color: "rgba(228,228,242,0.1)"}
                }, [this._v("合作伙伴")]), this._v(" "), e("p", {staticClass: "forword white "}, [this._v("合作伙伴")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("dt", {staticStyle: {position: "relative"}}, [e("img", {attrs: {src: "/website/pc/img/footerLogo.png"}}), this._v(" "), e("img", {
                    staticStyle: {
                        width: "14px",
                        height: "14px",
                        position: "absolute",
                        right: "-60px",
                        top: "20px"
                    }, attrs: {src: "/website/pc/img/close.png"}
                })])
            }]
        };
        var n = s("C7Lr")({
            data: function () {
                return {}
            }
        }, a, !1, function (t) {
            s("m+7X")
        }, "data-v-03896790", null).exports, o = s("DMPO"), l = s("kGj0"), c = s("aozt"), r = s.n(c), p = {
            data: function () {
                return {
                    msg: "Welcome to Your Vue.js App",
                    cityChoose: 0,
                    left: "10px",
                    flaseLeft: "",
                    section1Show: 0,
                    section1ShowSub: 0,
                    swiperOption: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        slidesPerGroup: 2,
                        loopFillGroupWithBlank: !0,
                        pagination: {
                            el: "#topage",
                            clickable: !0,
                            loop: !0,
                            bulletActiveClass: "my-bullet-active",
                            renderBullet: function (t, e) {
                                return '<span style="display:inline-block;width:8px;height:8px;margin-right:8px;outline:none;line-height:26px;" class="' + e + ' white  "></span>'
                            }
                        }
                    },
                    backLeft: "0px",
                    fullHeight: "",
                    displayBlockShow: !1,
                    displayBlockShowSub: !0,
                    map: "",
                    marker: "",
                    companyName: "",
                    youName: "",
                    tel: "",
                    wechat: "",
                    tiele: "",
                    content: "",
                    anliLIst: [],
                    bigIMGSHow: "",
                    newList: [],
                    zhezhao: [],
                    some: 0,
                    loading: !0,
                    once: !1
                }
            },
            methods: {
                closeZhezhao: function () {
                    this.displayBlockShow = !this.displayBlockShow, this.bigIMGSHow = null, this.zhezhao = []
                }, websit: function (t) {
                    t ? window.open(t) : alert("暂无官网链接")
                }, and: function (t) {
                    t ? window.open(t) : alert("Android端APP 暂未开放下载")
                }, ios: function (t) {
                    t ? window.open(t) : alert("IOS端APP 暂未开放下载")
                }, todetai: function (t) {
                    this.$router.push("/newsDealis/" + t)
                }, send: function () {
                    if (this.youName && this.tel && this.wechat && this.companyName) {
                        var t = {
                            name: this.youName,
                            tel: this.tel,
                            email: this.wechat,
                            company_name: this.companyName,
                            title: this.tiele,
                            content: this.content
                        };
                        r.a.post(href + "/api/msg", t).then(function (t) {
                            alert(t.data.msg)
                        })
                    } else alert("请保证 必填项已经填写")
                }, toNews: function () {
                    this.$router.push("/news")
                }, turnLeft: function () {
                    var t = this;
                    this.displayBlockShowSub = !1, this.bigIMGSHow = null, this.zhezhao = [{images: []}], setTimeout(function () {
                        t.some = t.some - 1, t.zhezhao = [t.anliLIst[t.some]], t.bigIMGSHow = t.zhezhao[0].images[0], t.displayBlockShowSub = !0
                    }, 1e3)
                }, turnRight: function () {
                    var t = this;
                    this.displayBlockShowSub = !1, this.bigIMGSHow = null, this.zhezhao = [{images: []}], setTimeout(function () {
                        t.some = t.some + 1, t.zhezhao = [t.anliLIst[t.some]], t.bigIMGSHow = t.zhezhao[0].images[0], t.displayBlockShowSub = !0
                    }, 1e3)
                }, showDislpay: function (t) {
                    this.zhezhao = [{images: []}], this.some = t, this.bigIMGSHow = null, this.zhezhao = [this.anliLIst[this.some]], this.bigIMGSHow = this.zhezhao[0].images[0], this.displayBlockShow = !this.displayBlockShow
                }, AisdeClick: function (t) {
                    switch (t) {
                        case 0:
                            document.documentElement.scrollTop = 0, document.body.scrollTop = 0;
                            break;
                        case 1:
                            break;
                        case 2:
                            window.open("http://wpa.qq.com/msgrd?v=3&uin=1834633402&site=qq&menu=yes")
                    }
                }, lineChangeLeave: function () {
                    this.left = this.flaseLeft
                }, lineFalseChange: function (t, e) {
                    this.flaseLeft = this.left, 0 == t ? this.left = "10px" : 1 == t ? this.left = "83px" : 2 == t && (this.left = "157px")
                }, lineChenge: function (t) {
                    this.cityChoose = t, 0 == t ? this.left = "10px" : 1 == t ? this.left = "83px" : 2 == t && (this.left = "157px"), this.flaseLeft = this.left
                }, createAni: function () {
                    var t = this;
                    setTimeout(function () {
                        var e, s = document.querySelector("canvas"), i = s.offsetWidth, a = s.offsetHeight;
                        if (!(e = new THREE.WebGLRenderer({
                                canvas: s,
                                antialias: !0,
                                alpha: !0
                            })))return console.log("er"), void t.createAni();
                        console.log("success"), e.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1), e.setSize(i, a), e.setClearColor(16777215, 0);
                        var n = new THREE.Scene, o = new THREE.PerspectiveCamera(40, i / a, .1, 1e3);
                        o.position.set(0, 0, 350);
                        var l = new THREE.Group;
                        n.add(l);
                        for (var c = new THREE.LineBasicMaterial({color: 16777215}), r = 100, p = 50, h = 0; h < 18; h++) {
                            var v = h, m = new THREE.Geometry;
                            m.y = v / 18 * r * 2;
                            for (var d = 0; d <= p; d++) {
                                var u = new THREE.Vector3;
                                u.x = Math.cos(d / p * Math.PI * 2), u.z = Math.sin(d / p * Math.PI * 2), u._o = u.clone(), m.vertices.push(u)
                            }
                            var _ = new THREE.Line(m, c);
                            l.add(_)
                        }
                        function f() {
                            s.style.width = "", s.style.height = "", i = s.offsetWidth, a = s.offsetHeight, o.aspect = i / a, o.updateProjectionMatrix(), e.setSize(i, a)
                        }

                        var g, w = new THREE.Vector2(.8, .5);
                        requestAnimationFrame(function t(s) {
                            requestAnimationFrame(t), function (t) {
                                for (var e = 0; e < l.children.length; e++) {
                                    var s = l.children[e];
                                    s.geometry.y += .3, s.geometry.y > 2 * r && (s.geometry.y = 0);
                                    for (var i = Math.sqrt(s.geometry.y * (2 * r - s.geometry.y)), a = 0; a <= p; a++) {
                                        var n = s.geometry.vertices[a], o = 15 * noise.simplex3(.009 * n.x, .009 * n.z + 6e-4 * t, .009 * s.geometry.y);
                                        n.copy(n._o), n.multiplyScalar(i + o), n.y = s.geometry.y - r
                                    }
                                    s.geometry.verticesNeedUpdate = !0
                                }
                            }(s), e.render(n, o)
                        }), window.addEventListener("mousemove", function (t) {
                            w.y = t.clientY / window.innerHeight, TweenMax.to(l.rotation, 2, {
                                x: 1 * w.y,
                                ease: Power1.easeOut
                            })
                        }), window.addEventListener("resize", function () {
                            g = clearTimeout(g), g = setTimeout(f, 200)
                        })
                    }, 2e3)
                }
            },
            components: {Header: i.a, Footer: n, swiper: o.swiper, swiperSlide: o.swiperSlide},
            created: function () {
                localStorage.loading && 1 == localStorage.loading ? this.loading = !1 : this.loading = !0
            },
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t.loading = !1, localStorage.loading = 1
                }, 2e3), this.createAni(), window.addEventListener("scroll", function () {
                    (document.documentElement.scrollTop >= 800 || document.body.scrollTop >= 800) && 0 == t.once && (r.a.get(href + "/api/project?&page=1&limit=10").then(function (e) {
                        t.anliLIst = e.data.list
                    }), t.once = !0)
                }), setTimeout(function () {
                    new Swiper("#sb", {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        slidesPerGroup: 2,
                        autoplay: !0,
                        loop: !0,
                        loopFillGroupWithBlank: !0,
                        pagination: {
                            el: "#pages", clickable: !0, renderBullet: function (t, e) {
                                return '<span style="display:inline-block;width:26px;height:26px;margin-right:8px;outline:none;line-height:26px;" class="' + e + ' white  ">' + (t + 1) + "</span>"
                            }
                        }
                    })
                }, 200), r.a.get(href + "/api/post?&page=1&limit=3").then(function (e) {
                    t.newList = e.data.list
                }), this.fullHeight = document.documentElement.clientHeight, window.onresize = function () {
                    t.fullHeight = document.documentElement.clientHeight
                }, l.lazyAMapApiLoaderInstance.load().then(function () {
                    t.map = new AMap.Map("container", {center: new AMap.LngLat(104.07012, 30.54451), zoom: 16});
                    new AMap.Marker({
                        position: [104.07012, 30.54451],
                        map: t.map,
                        bubble: !0,
                        animation: "AMAP_ANIMATION_DROP",
                        title: "成都子奇科技有限公司"
                    }).setLabel({offset: new AMap.Pixel(-45, -30), content: "成都子奇科技有限公司"})
                })
            }
        }, h = {
            render: function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "Warper"}, [s("Header"), t._v(" "), t.loading ? s("div", {
                    staticClass: "loading",
                    style: {height: t.fullHeight + "px"}
                }, [t._m(0)]) : t._e(), t._v(" "), t._l(t.zhezhao, function (e, i) {
                    return s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.displayBlockShow,
                            expression: "displayBlockShow"
                        }], staticClass: "displayBlock", style: {height: t.fullHeight + "px"}, on: {
                            click: function (e) {
                                if (e.target !== e.currentTarget)return null;
                                t.closeZhezhao()
                            }
                        }
                    }, [t._m(1, !0), t._v(" "), s("span", {
                        staticClass: "lh outside close pointer ",
                        on: {click: t.closeZhezhao}
                    }, [s("img", {attrs: {src: "/website/pc/img/close.png"}})]), t._v(" "), s("transition", {
                        attrs: {
                            name: "custom-classes-transition",
                            "enter-active-class": "animated fadeIn",
                            "leave-active-class": "animated fadeOut"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.displayBlockShowSub,
                            expression: "displayBlockShowSub"
                        }], staticClass: "subDisplayBlock"
                    }, [s("span", {
                        directives: [{name: "show", rawName: "v-show", value: t.some > 0, expression: "some > 0 "}],
                        staticClass: "lh outside leftarr pointer ",
                        on: {click: t.turnLeft}
                    }, [s("img", {attrs: {src: "/website/pc/img/left.png"}})]), t._v(" "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.some >= 0 && t.some < t.anliLIst.length - 1,
                            expression: "some >= 0 && some < anliLIst.length-1 "
                        }], staticClass: "lh outside rightarr pointer ", on: {click: t.turnRight}
                    }, [s("img", {attrs: {src: "/website/pc/img/right.png"}})]), t._v(" "), s("div", {staticClass: "Toparea bb"}, [s("dl", {staticClass: "flex"}, [s("dt", [e.icon ? s("img", {attrs: {src: e.icon}}) : t._e()]), t._v(" "), s("dd", [s("p", {staticClass: "tit fz18 fwb"}, [t._v(t._s(e.name) + " ")]), t._v(" "), s("p", {staticClass: "dir fz14"}, [t._v(t._s(e.tiny_info))])])]), t._v(" "), s("div", {staticClass: "btnGroup Right"}, [s("button", {
                        staticClass: "Show",
                        style: {backgroundColor: "0px" == t.backLeft ? "" : "#f6f6f6"},
                        on: {
                            click: function (e) {
                                t.backLeft = "0px" == t.backLeft ? "-85px" : "0px"
                            }
                        }
                    }, [t._v("APP下载")]), t._v(" "), s("button", {
                        staticClass: "back",
                        style: {left: t.backLeft}
                    }, [s("span", {
                        staticClass: "lh", staticStyle: {width: "20px", height: "20px"}, on: {
                            click: function (s) {
                                t.and(e.android_app)
                            }
                        }
                    }), t._v(" "), s("span", {
                        staticClass: "lh",
                        staticStyle: {width: "20px", height: "20px"},
                        on: {
                            click: function (s) {
                                t.ios(e.ios_app)
                            }
                        }
                    })]), t._v(" "), s("button", [s("span", {
                        on: {
                            click: function (s) {
                                t.websit(e.website)
                            }
                        }
                    }, [t._v("官网链接")])])])]), t._v(" "), s("div", {staticClass: "BigImg rb"}, [t.bigIMGSHow ? s("img", {attrs: {src: t.bigIMGSHow}}) : t._e()]), t._v(" "), s("div", {staticClass: "subImgsChoose bb"}, [s("ul", {staticClass: "flex"}, t._l(e.images, function (e, i) {
                        return s("li", {staticClass: "rb"}, [s("img", {
                            attrs: {src: e, alt: ""}, on: {
                                click: function (s) {
                                    t.bigIMGSHow = e
                                }
                            }
                        })])
                    }))])])])], 1)
                }), t._v(" "), s("ul", {staticClass: "aside"}, t._l([{imgP: "center 13px"}, {imgP: "center -37px"}, {imgP: "center -89px"}], function (e, i) {
                    return s("li", {
                        staticClass: " pointer",
                        style: {
                            backgroundPosition: e.imgP,
                            backgroundColor: 0 == i ? "rgba(255,255,255)" : "rgba(82,62,162,1)"
                        },
                        on: {
                            click: function (e) {
                                t.AisdeClick(i)
                            }
                        }
                    }, [1 == i ? s("span", {staticClass: "bb"}, [s("img", {attrs: {src: "/website/pc/img/ercode.png"}}), t._v(" "), s("span", {staticClass: "fz12 center lh"}, [t._v("关注微信公众号")])]) : t._e()])
                })), t._v(" "), t._m(2), t._v(" "), s("div", {staticClass: "section1Warper  Warper"}, [s("div", {staticClass: "section1 warp rb"}, [s("ul", {
                    staticClass: "flexB",
                    staticStyle: {"margin-left": "20px"}
                }, [t._m(3), t._v(" "), s("div", {
                    staticClass: "swiper-container",
                    staticStyle: {height: "505px", transform: "translateX(-40px)"},
                    attrs: {id: "sb"}
                }, [s("div", {staticClass: "swiper-wrapper"}, t._l([{
                    imgPoint: "-53px 2px",
                    title: "数字资产",
                    deriction: "基于区块链平台提供票据的资产化数字能力（发行、转让、贴现、兑付等），可应用于数字票据、共享积分、优惠券、数字TOKEN、股权登记等业务场景。"
                }, {
                    imgPoint: "-428px -8px",
                    title: "鉴证证明",
                    deriction: "基于超级账本(hyperledger)搭建区块链鉴证证明服务平台，可应用于知识产权、保单保全、公益捐赠、个人和企业资质证明等业务场景。"
                }, {
                    imgPoint: "-59px -533px",
                    title: "共享账本",
                    deriction: "基于区块链共享账本技术，为商业银行、登记及清算机构、交易所、保险等各类型金融机构提供创新的综合支付清算业务解决方案。"
                }, {
                    imgPoint: " -428px -536px",
                    title: "智能合约",
                    deriction: "基于超级账本(hyperledger)、以太坊（Ethereum）智能合约的编写，可应用于贸易款项交割、航空延误险、自行车租赁、房屋共享等合同自动执行的场景。"
                }, {
                    imgPoint: "-54px -1101px",
                    title: "分享经济",
                    deriction: "基于超级账本(hyperledger)的区块链可信网络互助服务，可以为用户加入互助平台的真实性、用户身份认证真实性、互助事件发生的真实性等各个环节提供真实性证明。"
                }, {
                    imgPoint: "-427px -1089px",
                    title: "防伪溯源",
                    deriction: "区块链技术结合防伪标签和物联网设备，能够防止人为因素造成的数据源造假，确保产品信息真实唯一，可溯源，防篡改，实时监控审核商品身份、商品动态、商品流向。"
                }, {
                    imgPoint: "-58px -1633px",
                    title: "信息安全",
                    deriction: "提供弹性、易用、安全、智能的企业信息安全防御体系，从网络层，系统层，应用层，数据层和业务层进行全方位保障。"
                }, {
                    imgPoint: "-429px -1637px",
                    title: "区块链游戏",
                    deriction: "基于以太坊（Ethereum）DAPP智能合约的区块链游戏，可应用于区块链菠菜类、站岗类、棋牌类、宠物养成、加密名人、加密资产等区块链游戏场景。"
                }, {
                    imgPoint: "-55px -2183px",
                    title: "区块链商城",
                    deriction: "基于超级账本(hyperledger)的区块链技术，打造去中心化电商生态体系，通过打通数字资产与实体商业的价值对接，实现商业服务的区块链转型。"
                }, {
                    imgPoint: "-438px -2184px",
                    title: "数字钱包",
                    deriction: "基于主流链上数据的多币种钱包体系，安全便捷高效的数字资产管理，灵活的商业应用方式助您快速落地数字资产。可独立应用运行，也可集成于传统互联网项目中。"
                }, {
                    imgPoint: "-60px -2723px",
                    title: "交易系统",
                    deriction: "基于区块链技术的多种模式交易系统，包含币币交易、场外OTC交易、场内C2C交易、商城交易、交易即挖矿交易等模式。"
                }, {
                    imgPoint: "-437px -2726px",
                    title: "区块链行情分析",
                    deriction: "基于数据抓取与二次加工清洗形成的区块链大数据行情平台。其数据可应用于区块链行情门户网站、区块链行情快报机器人、区块链资讯媒体网站。"
                }], function (e, i) {
                    return s("li", {
                        staticClass: "swiper-slide center",
                        staticStyle: {"margin-right": "40px"}
                    }, [s("p", {
                        staticClass: "img",
                        staticStyle: {height: "217px"},
                        style: {backgroundPosition: e.imgPoint}
                    }), t._v(" "), s("p", {
                        staticClass: "fwb fz18 center white",
                        staticStyle: {"margin-bottom": "40px"}
                    }, [t._v(t._s(e.title))]), t._v(" "), s("p", {
                        staticClass: "w266 white fz14 lh ",
                        staticStyle: {"text-align": "left"}
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.deriction) + "\n\t\t\t\t\t\t\t\t")])])
                }))])])])]), t._v(" "), s("div", {staticClass: "section2Warper  Warper"}, [s("div", {staticClass: "section2 warp rb"}, [s("dl", {staticClass: "flex"}, [t._m(4), t._v(" "), s("dd", {staticClass: "rb"}, [s("ul", {staticClass: "flex"}, t._l([{
                    color: "#4466D6",
                    num: "01",
                    title: "区块链项目总咨询与策划",
                    content: "项目总体规划、策略制定、法律问题、令牌设计和发行"
                }, {color: "#4EC8B8", num: "02", title: "创新的区块链技术支持", content: "令牌、钱包、智能合约、交易所等区块链系统的技术实现"}, {
                    color: "#6496E3",
                    num: "03",
                    title: "项目整体包装与发行",
                    content: "网站及宣传页制作、白皮书撰写、交易所上线及令牌推广"
                }, {
                    color: "#3D3075",
                    num: "04",
                    title: "区块链项目投资策略",
                    content: "全球A级项目投资策略和渠道提供，提供全方位风控保障。"
                }], function (e, i) {
                    return s("li", [s("div", {staticClass: "left Left"}, [s("div", {
                        staticClass: "box",
                        style: {backgroundColor: e.color}
                    }), t._v(" "), s("div", {staticClass: "trans fz12 fwb"}, [t._v(t._s(e.num))])]), t._v(" "), s("div", {staticClass: "right Left"}, [s("p", {staticClass: "titles fwb"}, [t._v(t._s(e.title))]), t._v(" "), s("p", {staticClass: "content fz14"}, [t._v(t._s(e.content))])])])
                }))])])])]), t._v(" "), s("div", {staticClass: "section3Warper  Warper"}, [s("div", {staticClass: "section3 warp "}, [t._m(5), t._v(" "), s("ul", {staticClass: "flexB"}, [s("swiper", {
                    ref: "mySwiper",
                    staticStyle: {width: "100%", height: "417px"},
                    attrs: {options: t.swiperOption}
                }, t._l(t.anliLIst, function (e, i) {
                    return s("swiper-slide", {
                        staticClass: "li",
                        staticStyle: {"background-size": "100% 100%", "margin-top": "30px"},
                        style: {backgroundImage: "url(" + e.images[0] + ")"}
                    }, [s("div", {
                        staticClass: "hover transition", on: {
                            click: function (e) {
                                t.showDislpay(i)
                            }
                        }
                    }, [s("div", {staticClass: "bottom bb"}, [s("p", {staticClass: "white name "}, [t._v(t._s(e.name))]), t._v(" "), s("p", {staticClass: "fz16 white "}, [t._v(t._s(e.tiny_info))]), t._v(" "), s("img", {
                        staticClass: "Right box",
                        attrs: {src: "/website/pc/img/button.png", alt: ""}
                    })])])])
                }))], 1), t._v(" "), s("div", {
                    staticClass: "swiper-pagination",
                    staticStyle: {"text-align": "center", width: "1100px"},
                    attrs: {slot: "pagination", id: "topage"},
                    slot: "pagination"
                })])]), t._v(" "), s("div", {staticClass: "section4Warper rb Warper"}, [s("div", {staticClass: "section4 warp rb"}, [t._m(6), t._v(" "), s("ul", {staticClass: "flexB"}, t._l(t.newList, function (e, i) {
                    return s("li", {staticClass: "rb bb white"}, [s("p", {staticClass: "title fz18 fwb"}, [t._v(t._s(e.title))]), t._v(" "), s("p", {staticClass: "content fz14"}, [s("span", {
                        staticClass: "lh",
                        domProps: {innerHTML: t._s(e.tiny_content)}
                    })]), t._v(" "), s("p", {
                        staticClass: "seeAll fz14", on: {
                            click: function (s) {
                                t.todetai(e.id)
                            }
                        }
                    }, [t._v("阅读全文 >")])])
                })), t._v(" "), s("div", {staticClass: "none center"}, [s("button", {
                    staticClass: "fz18 white pointer",
                    on: {click: t.toNews}
                }, [t._v("更多资讯")])])])]), t._v(" "), s("div", {staticClass: "section5Warper bb rb Warper"}, [s("div", {staticClass: "section5 warp rb"}, [s("div", {staticClass: "left  Left"}, [t._m(7), t._v(" "), t._m(8), t._v(" "), s("p", {staticClass: "info2"}, [t._v("我们是狂热的链圈技术从业者、是创新的区块链技术解决方案商和商业应用落地孵化器，为您提供区块链一站式项目孵化、开发、上线、推广、发行、投资等服务。")]), t._v(" "), s("ul", {staticClass: "flex"}, [t._l(["中国", "瑞典", "日本"], function (e, i) {
                    return s("li", {
                        class: (t.cityChoose, " pointer fz16 center transition"), on: {
                            mouseleave: function (e) {
                                t.lineChangeLeave()
                            }, mouseenter: function (e) {
                                t.lineFalseChange(i, 0)
                            }, click: function (e) {
                                t.lineChenge(i)
                            }
                        }
                    }, [t._v(t._s(e))])
                }), t._v(" "), s("li", {
                    staticClass: "line transition",
                    style: {left: t.left}
                })], 2), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == t.cityChoose,
                        expression: "cityChoose == 0"
                    }], staticClass: "loaction"
                }, [s("p", {staticClass: "fwb fz16"}, [t._v("成都子奇科技有限公司 总部")]), t._v(" "), t._m(9)]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == t.cityChoose,
                        expression: "cityChoose == 1"
                    }], staticClass: "loaction"
                }, [s("p", {staticClass: "fwb fz16"}, [t._v("成都子奇科技有限公司瑞典办事处")]), t._v(" "), t._m(10)]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 == t.cityChoose,
                        expression: "cityChoose == 2"
                    }], staticClass: "loaction"
                }, [s("p", {staticClass: "fwb fz16"}, [t._v("成都子奇科技有限公司日本办事处")]), t._v(" "), t._m(11)]), t._v(" "), s("div", {staticClass: "map rb"}, [s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == t.cityChoose,
                        expression: "cityChoose == 0"
                    }], staticStyle: {width: "471px", height: "358px"}, attrs: {id: "container"}
                }), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == t.cityChoose,
                        expression: "cityChoose == 1"
                    }], staticStyle: {width: "471px", height: "358px"}
                }, [s("img", {
                    staticStyle: {width: "471px", height: "358px"},
                    attrs: {src: "/website/pc/img/google_swe.png", alt: ""}
                })]), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 == t.cityChoose,
                        expression: "cityChoose == 2"
                    }], staticStyle: {width: "471px", height: "358px"}
                }, [s("img", {
                    staticStyle: {width: "471px", height: "358px"},
                    attrs: {src: "/website/pc/img/google_jp.png", alt: ""}
                })])])]), t._v(" "), s("div", {staticClass: "right Right"}, [t._m(12), t._v(" "), s("form", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.companyName,
                        expression: "companyName"
                    }], attrs: {type: "text", placeholder: "公司名称"}, domProps: {value: t.companyName}, on: {
                        input: function (e) {
                            e.target.composing || (t.companyName = e.target.value)
                        }
                    }
                }), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.youName,
                        expression: "youName"
                    }], attrs: {type: "text", placeholder: "您的姓名(必填)"}, domProps: {value: t.youName}, on: {
                        input: function (e) {
                            e.target.composing || (t.youName = e.target.value)
                        }
                    }
                }), t._v(" "), s("input", {
                    directives: [{name: "model", rawName: "v-model", value: t.tel, expression: "tel"}],
                    attrs: {type: "text", placeholder: "联系电话(必填)"},
                    domProps: {value: t.tel},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.tel = e.target.value)
                        }
                    }
                }), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.wechat,
                        expression: "wechat"
                    }], attrs: {type: "text", placeholder: "微信号(必填)"}, domProps: {value: t.wechat}, on: {
                        input: function (e) {
                            e.target.composing || (t.wechat = e.target.value)
                        }
                    }
                }), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.tiele,
                        expression: "tiele"
                    }], attrs: {type: "text", placeholder: "标题"}, domProps: {value: t.tiele}, on: {
                        input: function (e) {
                            e.target.composing || (t.tiele = e.target.value)
                        }
                    }
                }), t._v(" "), s("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.content,
                        expression: "content"
                    }], attrs: {placeholder: "咨询内容……"}, domProps: {value: t.content}, on: {
                        input: function (e) {
                            e.target.composing || (t.content = e.target.value)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "pointer", on: {
                        click: function (e) {
                            return e.preventDefault(), t.send(e)
                        }
                    }
                }, [t._v("发 送")])])])])]), t._v(" "), s("Footer")], 2)
            }, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "sk-wave"}, [e("div", {staticClass: "sk-rect sk-rect1"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect2"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect3"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect4"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect5"})])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "sk-wave"}, [e("div", {staticClass: "sk-rect sk-rect1"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect2"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect3"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect4"}), this._v(" "), e("div", {staticClass: "sk-rect sk-rect5"})])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "Topwarper"}, [e("canvas", {
                    staticClass: "scene scene--full",
                    staticStyle: {width: "100%", height: "100%", opacity: "0.1"},
                    attrs: {id: "scene"}
                }), this._v(" "), e("div", {staticClass: "Topwarp mw rb color"}, [e("div", {staticClass: "positionCenter center"}, [e("p", {staticClass: "Bigtitle"}, [this._v("创新的区块链技术解决方案与 "), e("br"), this._v(" 一站式应用落地孵化")]), this._v(" "), e("p", {staticClass: "smatitle"}, [this._v("您值得托付的区块链孵化器")])])])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("li", {
                    staticClass: "pl",
                    staticStyle: {"margin-right": "0"}
                }, [e("div", {staticClass: "shadowText color"}, [e("p", {
                    staticClass: "back",
                    staticStyle: {bottom: "-6px"}
                }, [this._v("技术方案")]), this._v(" "), e("p", {staticClass: "forword"}, [this._v("技术方案")])]), this._v(" "), e("p", {staticClass: "fz18 white"}, [this._v("\n\t\t\t\t\t\t\t企业级区块链方案 "), e("br"), this._v("\n\t\t\t\t\t\t\t及行业场景\n\t\t\t\t\t\t")]), this._v(" "), e("div", {
                    staticClass: "swiper-pagination",
                    staticStyle: {"margin-top": "89px"},
                    attrs: {id: "pages"}
                })])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("dt", [e("div", {staticClass: "shadowText color"}, [e("p", {staticClass: "back"}, [this._v("业务内容")]), this._v(" "), e("p", {staticClass: "forword"}, [this._v("业务内容")])]), this._v(" "), e("p", {staticClass: "fz18"}, [this._v("一站式区块链技术及应用落地孵化")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "shadowText  center"}, [e("p", {staticClass: "back"}, [this._v("案例展示")]), this._v(" "), e("p", {staticClass: "forword"}, [this._v("案例展示")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "shadowText  center"}, [e("p", {staticClass: "back"}, [this._v("最新资讯")]), this._v(" "), e("p", {staticClass: "forword white"}, [this._v("最新资讯")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "shadowText  ",
                    staticStyle: {"margin-top": "30px"}
                }, [e("p", {
                    staticClass: "back",
                    staticStyle: {color: "rgba(228,228,242,0.4)"}
                }, [this._v("公司信息")]), this._v(" "), e("p", {staticClass: "forword "}, [this._v("公司信息")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("p", {staticClass: "info"}, [e("strong", [this._v("成都子奇科技有限公司")]), this._v("2014年成立于中国成都，注册资金500万元，2017年挂牌天府股权交易中心，股票代码：811290。")])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("p", {staticClass: "loactionInfo"}, [e("span", [this._v("地址: 四川成都市高新区天府大道天华路天府软件园B区3栋4F-V06")]), e("br"), this._v(" "), e("span", [this._v("电话: 400-0288-767；18508233623")]), e("br"), this._v(" "), e("span", [this._v("Q Q: 1834633402")]), e("br"), this._v(" "), e("span", [this._v("邮箱: shxiao918@gmail.com")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("p", {staticClass: "loactionInfo"}, [e("span", [this._v("地址: Emmylundsvägen 1, 17172, Stockholm, Sweden")]), e("br"), this._v(" "), e("span", [this._v("电话: 400-0288-767")]), e("br"), this._v(" "), e("span", [this._v("手机: +0046-0760706468")]), e("br"), this._v(" "), e("span", [this._v("邮箱: sikewan1993@gmail.com")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("p", {staticClass: "loactionInfo"}, [e("span", [this._v("地址: 〒東京都豊島区池袋4-32-10ミニービル")]), e("br"), this._v(" "), e("span", [this._v("电话: 400-0288-767")]), e("br"), this._v(" "), e("span", [this._v("手机: +080-45788999")]), e("br"), this._v(" "), e("span", [this._v("邮箱: enbobobo@gmail.com")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "shadowText  ",
                    staticStyle: {"margin-top": "30px"}
                }, [e("p", {
                    staticClass: "back",
                    staticStyle: {color: "rgba(228,228,242,0.4)"}
                }, [this._v("业务咨询")]), this._v(" "), e("p", {staticClass: "forword "}, [this._v("业务咨询")]), this._v(" "), e("span", {staticClass: "lh fz14"}, [this._v("填写以下内容发送给我们，我们将在24小时内联系您")])])
            }]
        };
        var v = s("C7Lr")(p, h, !1, function (t) {
            s("uhhF")
        }, "data-v-7d79f305", null);
        e.default = v.exports
    }, "m+7X": function (t, e) {
    }, uhhF: function (t, e) {
    }
});
//# sourceMappingURL=1.496727b42ca8dc0b436d.js.map