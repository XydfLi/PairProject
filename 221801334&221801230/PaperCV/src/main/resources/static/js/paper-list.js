$(document).ready(function () {
    var PAGE_COUNT = 10;
    var items = [];
    var totalCount = 0;

    var keyWord = window.localStorage.getItem("keyWord");
    if (keyWord != null) {
        window.localStorage.removeItem("keyWord");
        showOne(httpRoot + `/paper/keyWord/` + keyWord, 1, "");
    } else {
        showOne(httpRoot + `/paper/all`, 1, "");
    }

    function showOne(URL, nowPage, back) {
        selectOne(URL + "/" + nowPage + back);// 获取数据

        if (items.length < 1) {
            alert("找不到您的论文数据！");
        }

        $("#item-list").pagination({
            currentPage: nowPage,
            totalPage: Math.ceil(totalCount/PAGE_COUNT),
            isShow:true,
            count:5,// 显示个数
            homePageText:'首页',
            endPageText:'尾页',
            prevPageText:'上一页',
            nextPageText:'下一页',
            callback: function (index) {// 回调函数
                showOne(URL, index, back);
            }
        });

        for (var i = 0;i < items.length;i++) {
            var new_item = "    <div class=\"item\" id=\"item" + i + "\">\n" +
                "        <div class=\"content\">\n" +
                "            <div class=\"img\"><img src=\"img/paper.png\" alt=\"paper\" width=\"270px\" height=\"340px\"></div>\n" +
                "            <div class=\"text\">\n" +
                "                <p class=\"text-head\">" + items[i].title +
                "                </p>\n" +
                "                <p style=\"font-weight: bolder; margin: 10px 0;\">Abstract:</p>\n" +
                "                <div class=\"text-content\">" + items[i].paperAbstract + "</div>\n" +
                "                <div style=\"float: right\"><a href=\"" + items[i].url + "\">查看更多</a></div>"+
                "                <div style=\"float: left\"><p><span style=\"font-weight: bolder;\">Keywords:</span>" + items[i].keyWord + "</p></div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            <div><a href=\"" + items[i].url + "\">" + items[i].url + "</a></div>\n" +
                "            <div>\n" +
                "                <a type=\"submit\" class=\"btn btn-primary mb-2\">翻译</a>\n" +
                "                <a type=\"submit\" class=\"btn btn-primary mb-2\">收藏</a>\n" +
                "                <a type=\"submit\" name=\"item" + i + "\" class=\"btn btn-primary mb-2" +
                " delete-item\">删除</a>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>"

            $("#item-list").append(new_item);
        }

        $(".delete-item").click(function () {
            var id = $(this).attr("name")
            $("#"+id).remove();
        });


    }

    function selectOne(url) {
        $.ajax({
            url:url,
            type:"GET",
            dataType:"json",
            async:false,
            success:function(result){
                totalCount = result.count;
                items = result.data;
            },
        });
    }

    $("#read-list").click(function (){
        if (isEmpty($("#paperSearch").val())) {
            alert("搜索框为空");
            return ;
        }

        var URL = httpRoot + `/paper/` + $("#paperSearch").val();
        if ($("#checkAllYear").is(':checked')){
            showOne(URL, 1, "?isSort=1");
        } else {
            showOne(URL, 1, "?isSort=0");
        }
    });

    function isEmpty(obj){
        return typeof obj == "undefined" || obj == null || obj == "";
    }
});
