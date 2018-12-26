/**
 * 显示重置资金密码弹窗
 */
function show_set_trade_pass(){
    $('.modal-in.reset-pwd').css('display','block');
}

/**
 * 显示实名认证弹窗
 */
function show_real_verify(){
    $('.modal-in.real-verify').css('display','block');
}

/**
 * 显示高级认证弹窗
 */
function show_advanced_verify(){
    $('.modal-in.senior-auth-container').css('display','block');
    //$('.ivu-notice-notice').css('display','block');
    //alerShowCountTime("ivu-notice-notice");
}

/**
 * 显示绑定邮箱弹窗
 */
function show_bind_email(){
    $('.modal-in.bind-email').css('display','block');
}

/**
 * 显示修改登录密码弹窗
 */
function show_modify_login_pass(){
    $('.modal-in.modify-login-pass').css('display','block');
}

/**
 * 显示修改手机弹窗
 */
function show_modify_phone(){
    $('.modal-in.modify-phone').css('display','block');
}


/**
 * 显示添加收款方式弹窗
 */
function show_add_pay(){
    $('.modal-in.add-pay').css('display','block');
}

$(function(){

    //点击关闭弹窗
    //Click close the pop-up
    $('.ivu-modal-close').click(function(){
        //关闭所有弹窗
        //Close all pop-up
        $('.modal-in').css('display','none');
    });
    $('.cancel').click(function(){
        $('.modal-in').css('display','none');
    });

    //点击收付款方式下拉框
    $('.ivu-select-selection').click(function(){
        var isShow =  $('.ivu-select-dropdown').css('display');
        if(isShow == 'none'){
            $(this).closest('.ivu-select').addClass('ivu-select-visible');
            $('.ivu-select-dropdown').css('display','block');
        }else{
            $(this).closest('.ivu-select').removeClass('ivu-select-visible');
            $('.ivu-select-dropdown').css('display','none');
        }
    });

    //选择收款方式
    $('.ivu-select-item').click(function(){
        $(this).addClass('ivu-select-item-selected').siblings().removeClass('ivu-select-item-selected');
        $(this).addClass('ivu-select-item-focus').siblings().removeClass('ivu-select-item-focus');
        $('.ivu-icon-ios-arrow-down').prev('span').html($(this).html());
        $('.ivu-select-placeholder').addClass('ivu-select-selected-value');
        $('.ivu-select-selected-value').removeClass('ivu-select-placeholder');
        $('.ivu-select-selection').closest('.ivu-select').removeClass('ivu-select-visible');
        $('.ivu-select-dropdown').css('display','none');

        var type = $(this).attr('data-value');
        if(type == 1){
            $('.items.bank_card').css('display','block');
            $('.items.qrcode').css('display','none');
        }else if(type == 2 || type == 3){
            $('.items.qrcode').find('.upload-wrapper').find('p').html('请上传您的'+ $(this).html() +'收款二维码图片(*.jpg / *.png / *.jpeg)');
            $('.items.qrcode').css('display','block');
            $('.items.bank_card').css('display','none');
        }else{
            $('.items.bank_card').css('display','none');
            $('.items.qrcode').css('display','none');
        }

        $('.items.account').css('display','block');
        $('.items.account').find('.account-span').html( $(this).html() + '账号');
        $('.items.account').find('.ivu-input-large').attr('placeholder', '请输入' + $(this).html() + '账号');
        $('.items.ciphercode').css('display','block');

    });


});