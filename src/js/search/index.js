//输入框
$(".p2_inp").on("input", function(){
  if($(this).val()){
    $(".p2_cancel").show()
  }else{
    $(".p2_cancel").hide()
  }
})

//取消输入
$(".p2_cancel").on("touchstart", function(){
  $(".p2_inp").val("")
  $(this).hide();
})

//热门搜索
$(".part2_1_box").on("touchstart", "li", function(){
  console.log("跳去目录页")
})

//精彩推荐
$(".part3 .p3_box").on("click", "li", function(){
  var id = $(this).attr("id");
  location.href = "../common/cover.html?id="+id
})

//搜索
$(".p2_btn").on("touchstart", function(){
  console.log("请求数据")
  $(".part2_1").hide();//热门搜索消失
  $(".part4").show();
  if(1){
    //无结果
    $(".part4 .p3_title").text('搜索"'+$(".p2_inp").val()+'"共'+0+'条结果')
    $(".part4 .p3_box").html("<li class='p3_item' style='text-align:center;'>查无数据，换个条件试试看吧</li>")
  }
  
  
})