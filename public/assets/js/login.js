
$(document).ready(function() {
    $('html').append(
        ' <div id="login-form" class="mfp-hide"> ' +
        '<h2>登录</h2>' +
        '<form action="">' +
        '<div class=""><i class="fa fa-user"></i><input type="text" name="" id=""></div>' +
        '<div><i class="fa fa-unlock-alt"></i><input type="text" name="" id=""></div>' +
        '<input type="submit" class="btn btn-dark" value="登录">' +
        '</form>' +
        '<div class="clearfix addon"><a href="" class="pull-left">忘记密码</a><span href="" class="pull-right">还没有账号？<button class="btn btn-transparent">免费注册</button></span>' +
        '</div>' +
        '<button title="Close (Esc)" type="button" class="mfp-close">×</button>' +
        '</div>' +
        '<div id="register-form" class="mfp-hide"> ' +
        '<div class="form-wrapper">' +
        '<img src="./images/u486.png" class="img-responsive" />' +
        '<h3>注册 <span class="pull-right grey">已有账号,<a href="">登录</a></span></h3>' +
        '<form action="">' +
        '<div class=""><input type="text" name="" placeholder="请输入用户名" id=""></div>' +
        '<div><input type="text" name="" placeholder="请输入手机号码" id=""></div>' +
        '<div class="verify"><input type="text" name="" placeholder="请输入短信验证码" id=""><button class="btn btn-transparent">获取验证码</button></div>' +
        '<div><input type="text" name="" placeholder="请输入密码" id=""></div>' +
        '<div><input type="text" name="" placeholder="请重复输入您的密码" id=""></div>' +
        '<div><input type="text" name="" placeholder="请输入邀请码" id=""></div>' +
        '<input type="submit" class="btn btn-dark" value="注册">' +
        '</form>' +
        '</div>' +
        '<button title="Close (Esc)" type="button" class="mfp-close">×</button>' +
        '</div>' +
        '</div>'
    );
    $('.pop-up').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});