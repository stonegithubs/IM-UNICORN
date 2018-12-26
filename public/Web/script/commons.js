/**
 * 获取浏览器语言
 * @returns language
 */
localStorage.setItem("defaultLang","en-us");
function getLang(){
    var defaultLang = localStorage.getItem("defaultLang");
    var lang = localStorage.getItem("lang");
    if(lang != undefined){
        return lang;
    }else{
        return defaultLang;
    }
}

/**
 * 点击切换语言
 * @param obj 当前点击对象
 */
function switch_lang(obj){
    localStorage.setItem("lang",$(obj).attr('data-lang'));
    load_header_lang();
    load_page_lang();
}

var globalLang = {};
/**
 * 加载页面语言
 */
function load_page_lang(){
    var url = "/Web/lang/" + getLang() + ".json";//p为参数，可通过p手动指定配置路径，此时不根据默认路径加载多语言消息配置
    $.ajax({
        url : url,
        dataType : 'json',
        type : "GET",
        success : function(data, textStatus, jqXHR) {
            var pageName = $('html').attr('page-name');//获取当前页面名称
            var langList = data[pageName];

            $.extend( langList, data.header );//将2的值合并到1，同key时 默认2将会覆盖1的值
            $.extend( langList, data.footer );
            globalLang = langList;
            $('[set-lan]').each(function(){
                var me = $(this);
                var a = me.attr('set-lan').split(':');
                var p = a[0];   //文字放置位置
                var m = a[1];   //文字的标识

                var t = langList[m];
                if(t==undefined) return true;   //如果还是没有就跳出
                //文字放置位置有（html,val等，可以自己添加）
                switch(p){
                    case 'html':
                        me.html(t);
                        break;
                    case 'val':
                    case 'value':
                        me.val(t);
                        break;
                    case 'placeholder':
                        me.attr('placeholder',t);
                        break;
                    default:
                        me.attr(p,t);
                }
            });
        },
        error : function(a, b, c) {
            throw "Load i18n message error [" + getLang() + "], cause by : " + b;
        }
    });
}

/**
 * 加载页面头部语言
 */
function load_header_lang(){
    var lang_select_list = {
        "en-us":"English",
        "zh-cn":"简体中文",
        "zh-hk":"繁體中文",
        "ko-kr":"한국어",
        //"ru-ru":"Русский",
        //"de-de":"Deutsch",
        //"fr-fr":"Français",
        //"es-es":"Español",
        //"tr-tr":"Türkiye",
        //"vi-vi":"Tiếng Việt",
        //"pt-br":"Português-BR",
        //"pt-pt":"Português-PT",
        //"th-th":"ไทย"
    };
    var show_lang = getLang();
    $('#show_lang').html(lang_select_list[show_lang]);
    var show_lang_list_html = '';
    for(var p in lang_select_list){
        show_lang_list_html += '<a href="javascript:void(0);" data-lang="'+p+'" onclick="switch_lang(this)">'+lang_select_list[p]+'</a>';
    }
    $('#show_lang_list').html(show_lang_list_html);
}
load_header_lang();
load_page_lang();


function isPhoneAvailable($value) {
    var reg1=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!reg1.test($value)) {
        return false;
    } else {
        return true;
    }
}

function isEmailAvailable($value) {
    var reg2=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!reg2.test($value)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 显示弹框倒计时
 */
function alerShowCountTime($classname){
    var second = 3;
    var tim = setInterval(function () {
        if (second <= 0) {
            $('.' + $classname).attr('style','display:none');
            clearInterval(tim);
        }
        else {
            $('.' + $classname).attr('style','display:block');
            second--;
        }
    }, 1000);
}

$(function(){


});
