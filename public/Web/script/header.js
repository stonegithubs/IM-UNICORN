$(function(){
    //点击关闭弹窗
    //Click close the pop-up
    $('.dia_close').click(function(){
        //关闭所有弹窗
        //Close all pop-up
        $('.dialog_wrap').css('display','none');
    });


    //点击主题设置图标
    //Click theme settings Icon
    $('.change_theme').click(function(){
        $('.dia_setting').css('display','block');
    });
    //确认提交主题设置
    //Confirm submission of theme settings
    $('.dia_setting .btn_submit').click(function(){
        var t = $('input[name=theme]:checked').val();
        $('.dia_setting').css('display','none');
        localStorage.setItem("theme",t);
        PageCallback(), function () {
            var e = document.querySelector("html");
            try {
                var t = localStorage.getItem("theme");
                "hb-day" === t && (e.className = e.className.replace("hb-night", "hb-day")), "hb-night" === t && (e.className = e.className.replace("hb-day", "hb-night")), t || localStorage.setItem("theme", "hb-night")
            } catch (e) {
                //No support for localStorage
                console.warn("不支持localStorage")
            } finally {
                -1 === e.className.indexOf("hb") && (e.className += " hb-night")
            }
        }(), document.querySelector("html").className += " windsMind";

        var x = document.getElementById("chart_main");
        if(x != null){
            var y = (x.contentWindow || x.contentDocument);
            if(y != undefined){
                var ydoc = y.document;
                $(ydoc).find('html').attr('class',t);
                y.updateKline(false,true);
                //如果存在图表，更新图表数据
            }
        }


    });




    //勾选默认主题
    //Check the default theme
    var t = localStorage.getItem("theme");
    "hb-night" === t ? $('input[value=hb-night]').attr('checked','checked') : true;
    "hb-day" === t ? $('input[value=hb-day]').attr('checked','checked') : true;
});
