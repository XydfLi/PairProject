$(document).ready(function () {
    var MAX_COUNT = 30;// 限制当前页面最大显示论文的数量

    var keyWord = window.localStorage.getItem("keyWord");
    if (keyWord != null) {
        window.localStorage.removeItem("keyWord");
        selectPaperByKeyWord(keyWord);
    } else {
        selectPaper("all");
    }

    $("#read-list").click(function (){
        if (isEmpty($("#paperSearch").val())) {
            alert("搜索框为空");
            return ;
        }

        selectPaper($("#paperSearch").val());
    });

    function selectPaper(title) {
        var items = [];
        var URL = httpRoot + `/paper/` + title;
        if (title != "all") {
            if ($("#checkAllYear").is(':checked')){
                URL = URL + "?isSort=1";
            } else {
                URL = URL + "?isSort=0";
            }
        }
        $.ajax({
            url:URL,
            type:"GET",
            dataType:"json",
            async:false,
            success:function(result){
                for (var i = 0;i < result.length;i++){
                    if (i >= MAX_COUNT){
                        break;
                    }
                    var new_item = "    <div class=\"item\" id=\"item" + i + "\">\n" +
                        "        <div class=\"content\">\n" +
                        "            <div class=\"img\"><img src=\"img/paper.png\" alt=\"paper\" width=\"270px\" height=\"340px\"></div>\n" +
                        "            <div class=\"text\">\n" +
                        "                <p class=\"text-head\">" + result[i].title +
                        "                </p>\n" +
                        "                <p style=\"font-weight: bolder; margin: 10px 0;\">Abstract:</p>\n" +
                        "                <div class=\"text-content\">" + result[i].paperAbstract + "</div>\n" +
                        "                <div style=\"float: right\"><a href=\"" + result[i].url + "\">查看更多</a></div>"+
                        "                <div style=\"float: left\"><p><span style=\"font-weight: bolder;\">Keywords:</span>" + result[i].keyWord + "</p></div>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "        <div class=\"footer\">\n" +
                        "            <div><a href=\"" + result[i].url + "\">" + result[i].url + "</a></div>\n" +
                        "            <div>\n" +
                        "                <a type=\"submit\" class=\"btn btn-primary mb-2\">翻译</a>\n" +
                        "                <a type=\"submit\" class=\"btn btn-primary mb-2\">收藏</a>\n" +
                        "                <a type=\"submit\" name=\"item" + i + "\" class=\"btn btn-primary mb-2" +
                        " delete-item\">删除</a>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "    </div>"
                    items.push(new_item);
                }
            },
        });
        $("#item-list").empty();
        for (var i = 0;i < items.length;i++) {
            $("#item-list").append(items[i]);
        }

        $(".delete-item").click(function () {
            var id = $(this).attr("name")
            $("#"+id).remove();
        });
    }

    function selectPaperByKeyWord(keyWord) {
        var items = [];
        var URL = httpRoot + `/paper/keyWord/` + keyWord;
        $.ajax({
            url:URL,
            type:"GET",
            dataType:"json",
            async:false,
            success:function(result){
                for (var i = 0;i < result.length;i++){
                    if (i >= MAX_COUNT){
                        break;
                    }
                    var new_item = "    <div class=\"item\" id=\"item" + i + "\">\n" +
                        "        <div class=\"content\">\n" +
                        "            <div class=\"img\"><img src=\"img/paper.png\" alt=\"paper\" width=\"270px\" height=\"340px\"></div>\n" +
                        "            <div class=\"text\">\n" +
                        "                <p class=\"text-head\">" + result[i].title +
                        "                </p>\n" +
                        "                <p style=\"font-weight: bolder; margin: 10px 0;\">Abstract:</p>\n" +
                        "                <div class=\"text-content\">" + result[i].paperAbstract + "</div>\n" +
                        "                <div style=\"float: right\"><a href=\"" + result[i].url + "\">查看更多</a></div>"+
                        "                <div style=\"float: left\"><p><span style=\"font-weight: bolder;\">Keywords:</span>" + result[i].keyWord + "</p></div>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "        <div class=\"footer\">\n" +
                        "            <div><a href=\"" + result[i].url + "\">" + result[i].url + "</a></div>\n" +
                        "            <div>\n" +
                        "                <a type=\"submit\" class=\"btn btn-primary mb-2\">翻译</a>\n" +
                        "                <a type=\"submit\" class=\"btn btn-primary mb-2\">收藏</a>\n" +
                        "                <a type=\"submit\" name=\"item" + i + "\" class=\"btn btn-primary mb-2" +
                        " delete-item\">删除</a>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "    </div>"
                    items.push(new_item);
                }
            },
        });
        $("#item-list").empty();
        for (var i = 0;i < items.length;i++) {
            $("#item-list").append(items[i]);
        }

        $(".delete-item").click(function () {
            var id = $(this).attr("name")
            $("#"+id).remove();
        });
    }

    function isEmpty(obj){
        return typeof obj == "undefined" || obj == null || obj == "";
    }
});
