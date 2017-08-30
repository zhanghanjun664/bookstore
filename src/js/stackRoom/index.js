var params = {
	sexType:"1",//传空全部 0=通用 1=男 2=女
	bookTypeId:"",//传空全部 分类ID
	bookStatusEnd:"0",//传空全部 0=连载中 1=已完结 2=限时免费
  current:0,//0=第一页 默认 0
  pageSize:10//页展示数量 不传默认10
}

var demo = $(".p3_item").clone();//书库列表demo
$(".p3_item").remove()
//获取分类列表
ajax({
	type:"post",
	url: REST_PRRFIX + '/weChatWeb/getBookType.json',
	dataType:"json",
	success:function(data){
		console.log(data)
		var html = "";
		data.data.forEach(function(item){
			html += '<div data-bookTypeId='+item.id+'>'+item.typeName+'</div>'
		})
		
		$(".styles").append(html);
	}
})

getData()










function getData(){
	if(params.current == 0){
		//切换类型，或者首次
		$(".p3_box").html("")
		
	}else{
		//加载更多数据
		
	}
	
	ajax({
		type:"post",
		url: REST_PRRFIX + '/api/index/classify.json',
		data:params,
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.data.list.length){
				$(".noData").hide();
				data.data.list.forEach(function(item){
					var demos = demo.clone();
					demos.attr("data-id", item.bookTypeId)
					demos.find(".p3_item_a img").attr("src", item.coverUrl)
					demos.find(".p3_item_c").text(item.title)
					demos.find(".p3_item_d").text(showSize(item.context,55))
					$(".p3_box").append(demos)
				})
			}else{
				if(params.current == 0){
					$(".noData").show();
				}else{
					$(".noData").hide()
				}
			}
			
		}
	})
	
}





//类型：男女
$(".sex > div").on("touchend", function(){
	var sexType = $(this).attr("data-sexType");
  $(this).addClass("active").siblings().removeClass("active");
  params.sexType = sexType;
  params.current = 0;//切换类型重新拿数据
  getData()
})

//分类
$(".styles").on("touchend", "div", function(){
	var bookTypeId = $(this).attr("data-bookTypeId");
  $(this).addClass("active").siblings().removeClass("active");
  console.log(bookTypeId)
  params.bookTypeId = bookTypeId;
  params.current = 0;//切换类型重新拿数据
  getData()
})

//更新
$(".status > div").on("touchend", function(){
	var bookStatusEnd = $(this).attr("data-bookStatusEnd");
  $(this).addClass("active").siblings().removeClass("active");
  params.bookStatusEnd = bookStatusEnd;
  params.current = 0;//切换类型重新拿数据
  getData()
})

$(".p3_box").on("click", "li", function(){
  var id = $(this).attr("id");
  location.href = "../common/cover.html?id="+id
})