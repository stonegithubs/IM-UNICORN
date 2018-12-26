$('.rounded.menu-bg').click(function(){
    if($(this).attr('class') == 'rounded menu-bg selected'){
        return false;
    }else{
        $('.rounded.menu-bg').removeClass('selected');
        $(this).addClass('selected');
        var val = $(this).attr('alt');
        location.href = '/team/index/index?theme='+val;
    }
});
