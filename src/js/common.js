//toast
function showToast(value) {
  var html = '<div class="toast">' +
    '<div class="toast_value">' + value + '</div>' +
    '</div>'
  $("body").append(html)
  $(".toast").fadeIn(300);
  setTimeout(function() {
    $(".toast").fadeOut(300, function() {
      $(this).remove()
    });
  }, 1500)
}

//提示框
function showModal(config) {
  var title = config.title ? config.title : "提示";
  var html =
    '<div class="modal_container">' +
    '<div class="modal_box">' +
    '<div>' +
    '<p class="modal_title">' + title + '</p>' +
    '<p class="modal_content">' + config.content + '</p>' +
    '</div>' +
    '<div class="modal_footer">' +
    '<div class="modal_cancel">取消</div>' +
    '<div class="modal_submit">确认</div>' +
    '</div>' +
    '</div>' +
    '</div>'
  $("body").append(html)
  $(".modal_container").fadeIn(300);
  if(config.type == 1) {
    $(".modal_cancel").hide();
    $(".modal_title").hide();
//    $(".modal_submit").text("知道了")
    
  }else{
    $(".modal_cancel").on("click", function(){
      $(".modal_container").fadeOut(300, function(){

        $(this).remove()
      });
    })
  }

  $(".modal_submit").on("click", function(){
    config.success()
    $(".modal_container").fadeOut(300, function() {
      $(this).remove()
    });
  })

}

//header
if($("#headNav").length){
  var html = '<div class="headNav_left">'+
          '<img src="../../img/icon_home.png"/>'+
          '<span>首页</span>'+
        '</div>'+
        '<div class="hn_box">'+
          '<div class="go_stackRoom">书库</div>'+
          '<div class="go_search">搜索</div>'+
          '<div class="go_free">限免</div>'+
        '</div>'+
        '<div class="headNav_right">'+
          '<img src="../../img/icon_recharge_white.png"/>'+
          '<span>充值</span>'+
        '</div>'
  $("#headNav").append(html)
}
//首页
$("#headNav").on("touchend", ".headNav_left", function(){
  var a = location.href,b = a.match("/html/");
  var urls = a.slice(0, b.index) + "/html/home/index.html";
  location.href = urls;
})
//书库
$("#headNav").on("touchend", ".go_stackRoom", function(){
  var a = location.href,b = a.match("/html/");
  var urls = a.slice(0, b.index) + "/html/stackRoom/index.html";
  location.href = urls;
})
//搜索
$("#headNav").on("touchend", ".go_search", function(){
  var a = location.href,b = a.match("/html/");
  var urls = a.slice(0, b.index) + "/html/search/index.html";
  location.href = urls;
})
//限免
$("#headNav").on("touchend", ".go_free", function(){
  var a = location.href,b = a.match("/html/");
  var urls = a.slice(0, b.index) + "/html/free/index.html";
  location.href = urls;
})
//充值
$("#headNav").on("touchend", ".headNav_right", function(){
  var a = location.href,b = a.match("/html/");
  var urls = a.slice(0, b.index) + "/html/recharge/index.html";
  location.href = urls;
})
