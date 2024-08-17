$(function () {
    $("#link_reg").on('click', function () {
        $(".login-box").hide()
        $(".reg-box").show()
    })
    $("#link_login").on('click', function () {
        $(".login-box").show()
        $(".reg-box").hide()
    })


    //获取layui中获取
    var form = layui.form
    //自定义校验规则 通过form.verify()函数自定义
    form.verify({
        pwd: [/^[\S]{6,12}$/ ,'密码必须6到12位，且不能出现空格'],
        repwd:function(value){
            
        }
    })
})
