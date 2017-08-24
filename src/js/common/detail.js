$(".p5_modal_background").show()
$(".p5_modal_background .p5_modal_b > div").on("touchend", function(){
  var color = $(this).attr("data-color");
  console.log($(this),color)
  $(".wrap").css("background-color",color)
})

//确定
$(".p5_modal_c").click(function(){
  $(".p5_modal > div").hide()
  $(".part5").hide()
})