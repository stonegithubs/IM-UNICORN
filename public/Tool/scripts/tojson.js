function removeJson(obj,val){
    var text = $('textarea[name=tab_1_right]').val();
    if(text == ""){
        $(obj).removeClass('layui-form-checked');
        layer.msg('先来个字符串吧！');
    }else{

    }
}
function addJson(obj,val){
    console.log(val)

    var text = $('textarea[name=tab_1_left]').val();
    console.log(text)
    if(text == ""){
        $(obj).removeClass('layui-form-checked');
        layer.msg('先来个字符串吧！');
    }else{

        if(val == 1){
            var res = JSON.stringify(text, null, "\t"); // 缩进一个tab
            console.log(res)
            $('textarea[name=tab_1_right]').val(res);
        }
    }
}
$(function(){
    $(document).on('click','.layui-unselect.layui-form-checkbox',function(){
        var val = $(this).prev('input[type=checkbox]').val();
        if($(this).attr('class') == 'layui-unselect layui-form-checkbox layui-form-checked'){
            console.log(val);
            addJson(this,val);
        }else{
            removeJson(this,val);
        }
    });

});