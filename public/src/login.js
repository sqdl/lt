define(['jquery'],function($){
    // 提交表单
    $('form').on('submit', function () {
        var _this = $(this);

        $.ajax({
            //访问api就是访问localhost：3000
            url: '/api/employee/employeeLogin',
            type: 'post',
            data: _this.serialize(),
            success: function (info) {
                if (info.error) {
                    return alert(info.message);
                }
                location.href = '/';

            }

        })

        return false;
    })

})