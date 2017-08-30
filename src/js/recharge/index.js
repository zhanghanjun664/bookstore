var demo = $(".p3_item").clone();
$(".p3_item").remove();

ajax({
	type:"POST",
	url: REST_PRRFIX + "/weChatWeb/getProdType.json",
	dataType:'json',
	success:function(data){
		console.log(data)
		if(data.data.length){
			data.data.forEach(function(item){
				var demos = demo.clone();
				demos.attr("data-price", item.price)
				demos.find(".p3_box_a").text(item.pdName)
				demos.find(".p3_box_b").text(item.ppa)
				demos.find(".p3_box_c").text(item.ppb)
				$(".p3_box").append(demos)
			})
		}
	}
})

$(".p3_box").on("touchstart", ".p3_item", function(){
	var price = $(this).attr("data-price");
	$(this).addClass("active").siblings().removeClass("active");
	console.log(price)
})