var bannerDemo = $(".swiper-slide").clone();
$(".swiper-slide").remove();
var dataBannerList = [
  {
    src: "../../img/test.jpg",
    title: "标题a",
    content: "内容",
    id: "1"
  },
  {
    src: "../../img/test.jpg",
    title: "标题",
    content: "内容b",
    id: "2"
  },
  {
    src: "../../img/test.jpg",
    title: "标题c",
    content: "内容",
    id: "3"
  },
  {
    src: "../../img/test.jpg",
    title: "标题d",
    content: "内容",
    id: "4"
  },
  {
    src: "../../img/test.jpg",
    title: "标题e",
    content: "内容",
    id: "5"
  }
]
dataBannerList.forEach(function(item,index){
  var demo = bannerDemo.clone();
  demo.attr("id",item.id);
  demo.find(".banner_a").attr("src",item.src);
  demo.find(".banner_c").text(item.title);
  demo.find(".banner_d").text(item.content) ;
  $(".swiper-wrapper").append(demo)
})


new Swiper('#banner', {
  autoplay: 4000,
  speed: 600,
  // 如果需要分页器
  pagination: '.swiper-pagination',

})





//倒计时
function leftTimer(year, month, day, hour, minute, second) { 
  var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数 
   
  var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
   
  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
   
  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
   
  var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
   
  days = checkTime(days); 
  hours = checkTime(hours); 
  minutes = checkTime(minutes); 
  seconds = checkTime(seconds); 
  var timer = setInterval("leftTimer(2017,11,11,11,11,11)", 1000); 
  console.log(days + "天" + hours + "小时" + minutes + "分" + seconds + "秒")
}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
   
  if(i < 10)  {  
    i = "0" + i; 
  } 
  return i;
}
//leftTimer(2017,11,11,11,11,11)
var currentDate = new Date();
var EndTime = new Date((currentDate.getTime()+1000*60*60));

var days = EndTime - currentDate;
EndTimeMsg = parseInt(days / 1000); //精确到秒

function show() {
  var h = Math.floor(EndTimeMsg / 60 / 60);
  var m = Math.floor((EndTimeMsg - h * 60 * 60) / 60);
  var s = Math.floor((EndTimeMsg - h * 60 * 60 - m * 60));
  var str = checkTime(parseInt(h / 24))+" 天 "+checkTime(h%24)+" 时 "+checkTime(m)+" 分 "+checkTime(s)+" 秒"
  $(".countDown").text("还剩: "+str)
  EndTimeMsg--;
  if(EndTimeMsg <= 0) {
      $(".countDown").text("还剩: 00 天 00 时 00 分 00 秒")
  }
  console.log()
}
setInterval(show, 1000)

$("#banner").on("click", ".swiper-slide", function(){
  var id = $(this).attr("id");
  location.href = "../common/cover.html?id="+id
})
