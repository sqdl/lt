define(['jquery','template','./utils'],function($,template){

    var size=2;

    var reg=/\?[a-z]+=(\d+)/;
     // 获得请求参数
    var search=location.search ||'';
    // console.log(search);
    // 进行匹配查找
    var page=reg.exec(search)&&reg.exec(search)[1];

    page=page ||1;

    $.ajax({
        url:'/api/product/queryProductDetailList',
        type:'get',
        data:{page:page,pageSize:size},
        success:function(info){
            // console.log(info);
            // 总数据条数
            var total=info.total;
            var pageLen=Math.ceil(total/size);


            var html=template('tpl',info);

            // 分页
            var pagehtml = template('page',{
                page:page,
                pageLen:pageLen
            });

            $('.goods').html(html);
            $('.pagination').html(pagehtml);

        }
    })
})