var params = {
  sex:1,
  styles:"",
  status:1
}
//类型：男女
$(".sex > div").on("touchend", function(){
  $(this).addClass("active").siblings().removeClass("active");
})

//分类
$(".styles > div").on("touchend", function(){
  $(this).addClass("active").siblings().removeClass("active");
})

//更新
$(".status > div").on("touchend", function(){
  $(this).addClass("active").siblings().removeClass("active");
})

$(".p3_box").on("click", "li", function(){
  var id = $(this).attr("id");
  location.href = "../common/cover.html?id="+id
})