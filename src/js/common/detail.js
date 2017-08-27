//设置背景色
$(".p5_modal_background .p5_modal_b > div").on("touchend", function(){
  var color = $(this).attr("data-color");
  $(".wrap").css("background-color",color)
})

//设置字体大小
$(".p5_modal_fontSize .p5_modal_b > div").on("touchend", function(){
  var size = $(this).attr("data-size");
  $(".p3_box li").css("font-size",size)
})

//确定
$(".p5_modal_c").click(function(){
  $(".p5_modal > div").hide()
  $(".part5").hide()
})

//显示底部导航
$(".p4_nav").on("click", function(e){
  showNav()
  e.preventDefault();
})

//取消按钮
$(".p5_cancel").click(function(){
  hideNav()
})

//显示设置字体大小
$(".show_fontsize").click(function(){
  $(".p5_modal").hide();
  $(".p5_box").slideUp(100,function(){
    setTimeout(function(){
      showFontsize()
    },0)
  });
})

//显示设置背景色
$(".show_background").click(function(){
  $(".p5_modal").hide();
  $(".p5_box").slideUp(100,function(){
    setTimeout(function(){
      showBackground()
    },0)
  });
})

//添加书签
$(".btn_addMark").click(function(){
  showToast("添加成功")
  $(".p5_box").slideUp(100,function(){
    hideNav()
  });
  
})

//返回目录
$(".go_catalog").click(function(){
  location.href = "catalog.html"+location.search
})

//返回首页
$(".go_home").click(function(){
  location.href = "../home/index.html"
})

function showBackground(){
  $(".part5").show();//大盒子
  $(".p5_box").hide();//底部导航
  $(".p5_modal").show();//弹框
  $(".p5_modal_fontSize").hide();//文字
  $(".p5_modal_background").show();//背景色
}

function showFontsize(){
  $(".part5").show();//大盒子
  $(".p5_box").hide();//底部导航
  $(".p5_modal").show();//弹框
  $(".p5_modal_fontSize").show();//文字
  $(".p5_modal_background").hide();//背景色
}

function showNav(){
  $(".part5").show();
  $(".p5_modal").hide();
  $(".p5_box").slideDown(100);
}

function hideNav(){
  $(".p5_box").slideUp(100,function(){
    $(".part5").hide();
  });
}
