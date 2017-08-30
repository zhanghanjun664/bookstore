var demo = $(".p3_item").clone();
$(".p3_item").remove();

ajax({
	type:"POST",
	url: REST_PRRFIX + '/api/index/classify.json',
	data:{bookTypeId:2,pageSize:6,sexType:0,bookStatusEnd:"",current:0},
	dataType:"json",
	success:function(data){
		console.log(data)
		if(data.data.list.length){
			data.data.list.forEach(function(item){
				var demos = demo.clone();
				demos.show();
				demos.attr("data-id", item.bookTypeId);
				demos.find(".p3_fm").attr("src", item.coverUrl);
				demos.find(".p3_item_c").text(item.title);
				demos.find(".p3_item_d").text(showSize(item.context, 55));
				demos.find(".p3_item_e span").text(item.title);//限免时间
				$(".p3_box").append(demos)
			})
			$(".noData").hide()
		}else{
			$(".noData").show()
		}
	}
})

//跳转
$(".p3_box").on("click", "li", function(){
	var id = $(this).attr("data-id");
	location.href = "../common/cover.html?id="+id;
})