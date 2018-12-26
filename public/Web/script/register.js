

/**
 * 点击切换注册方式
 * Click switch registration mode
 * @param type 1:手机注册 Mobile registration 2:邮箱注册 Mailbox registration
 */
function switch_tab(type){
    $('input[name=register_type]').attr('value',type);
    if(type == 1){
        $('.col_form').removeClass('form_reg_email');
        $('.col_form').addClass('form_reg_phone');
    }else if(type == 2){
        $('.col_form').removeClass('form_reg_phone');
        $('.col_form').addClass('form_reg_email');
    }
}


function pwd_score_box_hide(){
    $('.pwd_score_box').css('display','none');
}
function pwd_score_box_show(){
    $('.pwd_score_box').css('display','block');
}

function phoneInput(obj){
    var phone = $(obj).val();
    if(isPhoneAvailable(phone) == true){
        console.log(phone)
        //$('#wrapper').css('display','block');
    }
}

function emailInput(obj){
    var email = $(obj).val();
    if(isEmailAvailable(email) == true){
        //$('#wrapper').css('display','block');
    }
}

//获取国家
function get_country_list(){
    $.ajax({
        type:'POST',
        url:'/api/Country/lists',
        data:"",
        dataType:'json',
        success:function(res){
            var lang = getLang();
            var html = '',html1 = '';
            if(lang == 'zh-cn' || lang == 'zh-hk'){
                //如果是中文
                var cy_ch = '<p class="label"' +
                    ' data-option="{&quot;key&quot;:&quot;常用&quot;,&quot;value&quot;:&quot;&quot;,&quot;info&quot;:&quot;&quot;}"' +
                    ' data-option-type="label"><span class="key">常用</span></p>';
                html += cy_ch;
                html1 += cy_ch;
            }else{
                var cy_en = '<p class="label"' +
                    ' data-option="{&quot;key&quot;:&quot;Frequently Used&quot;,&quot;value&quot;:&quot;&quot;,&quot;info&quot;:&quot;&quot;}"' +
                    ' data-option-type="label"><span class="key">Frequently Used</span></p>';
                html += cy_en;
                html1 += cy_en;
            }

            html +=  '<p class="" data-option="{&quot;key&quot;:&quot;China&quot;,&quot;value&quot;:&quot;37&quot;,&quot;info&quot;:&quot;中国&quot;}" data-option-type=""> <span class="key">China</span>  '+( lang == 'zh-cn' ? '<span class="info">中国</span>' : '' )+'  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Hong Kong (China)&quot;,&quot;value&quot;:&quot;71&quot;,&quot;info&quot;:&quot;中国香港&quot;}" ' +
                'data-option-type=""> <span class="key">Hong Kong (China)</span>  '+( lang == 'zh-cn' ? '<span class="info">中国香港</span>' : '' )+'  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Taiwan (China)&quot;,&quot;value&quot;:&quot;169&quot;,&quot;info&quot;:&quot;中国台湾&quot;}" ' +
                'data-option-type=""> <span class="key">Taiwan (China)</span>  '+( lang == 'zh-cn' ? '<span class="info">中国台湾</span>' : '' )+'  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Japan&quot;,&quot;value&quot;:&quot;83&quot;,&quot;info&quot;:&quot;日本&quot;}" ' +
                'data-option-type=""> <span class="key">Japan</span>  '+( lang == 'zh-cn' ? '<span class="info">日本</span>' : '' )+'  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Korea&quot;,&quot;value&quot;:&quot;88&quot;,&quot;info&quot;:&quot;韩国&quot;}" ' +
                'data-option-type=""> <span class="key">Korea</span>  '+( lang == 'zh-cn' ? '<span class="info">韩国</span>' : '' )+'  </p>';
            html1 += '<p class="" data-option="{&quot;key&quot;:&quot;China&quot;,&quot;value&quot;:&quot;0086&quot;,&quot;info&quot;:&quot;0086&quot;}" data-option-type=""> <span class="key">China</span>  <span class="info">0086</span>  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Hong Kong (China)&quot;,&quot;value&quot;:&quot;00852&quot;,&quot;info&quot;:&quot;00852&quot;}" ' +
                'data-option-type=""> <span class="key">Hong Kong (China)</span>  <span class="info">00852</span>  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Taiwan (China)&quot;,&quot;value&quot;:&quot;00886&quot;,&quot;info&quot;:&quot;00886&quot;}" ' +
                'data-option-type=""> <span class="key">Taiwan (China)</span>  <span class="info">00886</span>  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Japan&quot;,&quot;value&quot;:&quot;0081&quot;,&quot;info&quot;:&quot;0081&quot;}" ' +
                'data-option-type=""> <span class="key">Japan</span>  <span class="info">0081</span>  </p>'+
                '<p class="" ' +
                'data-option="{&quot;key&quot;:&quot;Korea&quot;,&quot;value&quot;:&quot;0082&quot;,&quot;info&quot;:&quot;0082&quot;}" ' +
                'data-option-type=""> <span class="key">Korea</span>  <span class="info">0082</span>  </p>';

            for(var i = 0 ; i < res.data.length ; i++){
                var item = res.data[i];
                html += '<p class=""' +
                    'data-option="{&quot;key&quot;:&quot;'+item.name_en+'&quot;,&quot;value&quot;:&quot;'+item.country_id+'&quot;,&quot;info&quot;:&quot;'+item.name_cn+'&quot;}"' +
                    'data-option-type=""><span class="key">'+item.name_en+'</span>'+( lang == 'zh-cn' ? '<span class="info">'+item.name_cn+'</span>' : '' )+'</p>';
                html1 += '<p class=""' +
                    'data-option="{&quot;key&quot;:&quot;'+item.name_en+'&quot;,&quot;value&quot;:&quot;'+item.area_code+'&quot;,&quot;info&quot;:&quot;'+item.area_code+'&quot;}"' +
                    'data-option-type=""><span class="key">'+item.name_en+'</span>'+( lang == 'zh-cn' ? '<span class="info">'+item.area_code+'</span>' : '' )+'</p>';
            }

            $('#wrap_select_country_id_option').html(html);
            $('#wrap_select_country_code_option').html(html1);
            //var   n=3.143423423;
            //alert(n.toString().split(".")[1].length);
            //Math.floor(6.68*Math.pow(10,2)+1)/Math.pow(10,2)

        },
        error: function (xhr) {
            console.log(xhr);
        }
    });
}
get_country_list();

function getData(){
    var registerType = $('input[name=register_type]').val(),loginName = '';
    if(registerType == 1){
        loginName = $('input[name=phone]').val();
    }else{
        loginName = $('input[name=email]').val();
    }
    return {
        lang:getLang(),
        registerType: registerType,
        source: $('input[name=source]').val(),
        country_id: $('input[name=country_id]').val(),
        country_code: $('input[name=country_code]').val(),
        loginName:loginName,
        password: $('input[name=password]').val(),
        compare_pwd: $('input[name=compare_pwd]').val(),
        invite_code: $('input[name=invite_code]').val(),
    };
}

$(function(){
    $('#drag').drag();

    $('#wrap_select_country_id .select_label').click(function(){
        $(this).closest('.input_select').addClass('active');
        $('#wrap_select_country_id_option').css('display','block');
    });
    $(document).on('click',"#wrap_select_country_id_option p",function(){
        var option = JSON.parse($(this).attr('data-option'));
        var obj = $('#wrap_select_country_id .select_label');
        $('input[name=country_id]').attr('value',option.value);
        $(obj).find('.select_output').html(option.key);
        $(obj).closest('.input_select').addClass('active');
        $('#wrap_select_country_id_option').css('display','none');
    });

    $('#wrap_select_country_code .select_label').click(function(){
        $(this).closest('.input_select').addClass('active');
        $('#wrap_select_country_code_option').css('display','block');
    });
    $(document).on('click',"#wrap_select_country_code_option p",function(){
        var option = JSON.parse($(this).attr('data-option'));
        var obj = $('#wrap_select_country_code .select_label');
        $('input[name=country_code]').attr('value',option.value);
        $(obj).find('.select_output').html(option.value);
        $(obj).closest('.input_select').addClass('active');
        $('#wrap_select_country_code_option').css('display','none');
    });

    $('#btn_submit1').click(function(){
        var data = getData();
        $.ajax({
            type:'POST',
            url:'/api/Register/index',
            data:data,
            dataType:'json',
            success:function(res){

            },
            error: function (xhr) {
                console.log(xhr);
            }
        });

    });
});


$.fn.drag = function(options) {
    var x, drag = this, isMove = false, defaults = {
    };
    var options = $.extend(defaults, options);
    var handler = drag.find('.handler');
    var drag_bg = drag.find('.drag_bg');
    var text = drag.find('.drag_text');
    var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

    //鼠标按下时候的x轴的位置
    handler.mousedown(function(e) {
        isMove = true;
        x = e.pageX - parseInt(handler.css('left'), 10);
    });

    //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
    $(document).mousemove(function(e) {
        var _x = e.pageX - x;// _x = e.pageX - (e.pageX - parseInt(handler.css('left'), 10)) = x
        if (isMove) {
            if (_x > 0 && _x <= maxWidth) {
                handler.css({'left': _x});
                drag_bg.css({'width': _x});
            } else if (_x > maxWidth) {  //鼠标指针移动距离达到最大时清空事件
                dragOk();
            }
        }
    }).mouseup(function(e) {
        isMove = false;
        var _x = e.pageX - x;
        if (_x < maxWidth) { //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
            handler.css({'left': 0});
            drag_bg.css({'width': 0});
        }
    });

    //清空事件
    function dragOk() {
        handler.removeClass('handler_bg').addClass('handler_ok_bg');
        text.removeClass('slidetounlock').text('验证通过').css({'color':'#fff'});       //modify
        // drag.css({'color': '#fff !important'});

        handler.css({'left': maxWidth});                   // add
        drag_bg.css({'width': maxWidth});                  // add

        handler.unbind('mousedown');
        $(document).unbind('mousemove');
        $(document).unbind('mouseup');

    }
};
