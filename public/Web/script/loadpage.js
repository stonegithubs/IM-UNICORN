function PageCallback(e, t) {
    top.window.KCABLLACEGAG || (top.window.KCABLLACEGAG = {}), e && (top.window.KCABLLACEGAG[e] = t)
}
PageCallback(), function () {
    var e = document.querySelector("html");
    try {
        var t = localStorage.getItem("theme");
        "hb-day" === t && (e.className = e.className.replace("hb-night", "hb-day")), "hb-night" === t && (e.className = e.className.replace("hb-day", "hb-night")), t || localStorage.setItem("theme", "hb-night")
    } catch (e) {
        console.warn("不支持localStorage")
    } finally {
        -1 === e.className.indexOf("hb") && (e.className += " hb-night")
    }
}(), document.querySelector("html").className += " windsMind";