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


var REST_PRRFIX = "/rest";
function ajax(config) {
	$.ajax({
		type: config.type,
		url: config.url,
		data: config.data,
		dataType: config.dataType,
		async: config.async,
		success: function(data) {
			//登录失效
			if(data.code == 1) {
				showToast(data.errMsg)
			} else {
				config.success(data);
			}
		},
		error: function(data) {
			typeof config.error == 'function' ? config.error(data) : ""
		}
	});

}


//多余字数省略号
function showSize(str,num){
	return str.slice(0,num)+"..."
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
//var userId = localStorage.getItem("xsUserId");
var userId = "testtest";
var URL_PREFIX = "http://10.0.30.121/xsManage/";

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

//时间转换
function formatDate(str){
	var sDate = new Date(str);
	var y = sDate.getFullYear();
	var m = sDate.getMonth()+1 < 10 ? "0"+(sDate.getMonth()+1) : sDate.getMonth()+1;
	var d = sDate.getDate() < 10 ? "0"+sDate.getDate() : sDate.getDate();
	var H = sDate.getHours() < 10 ? "0"+sDate.getDate() : sDate.getHours();
	var M = sDate.getMinutes() < 10 ? "0"+sDate.getMinutes() : sDate.getMinutes();
	var S = sDate.getSeconds() < 10 ? "0"+sDate.getSeconds() : sDate.getSeconds();
	return y+"-"+m+"-"+d+" "+H+":"+M+":"+S
}
