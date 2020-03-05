/*头部滚动*/
$(window).scroll(function(){
  headerInit();
});
function headerInit() {
  if($(this).scrollTop()>0){
    $("body").addClass("fixed-header-on");
  }else{
    $("body").removeClass("fixed-header-on");
  }
}
headerInit();
/*首页图片切换*/
var images=["img/banner.jpg","img/bg-image-1.jpg","img/bg-image-2.jpg"];
$(".index").backstretch(images, {
  fade: 750,
  duration: 3000,
  preload: 0,
  start: 2
});
/*关于页面*/
/*刷新后淡入*/
if($("[data-animation-effect]").length>0){
  $("[data-animation-effect]").each(function (index,e1) {
    var $this = $(this);
    var animationEffect = $this.attr["data.animation.effect"];
    setTimeout(function () {
      $this.removeClass("object-non-visiable").addClass("object-visiable");
      $this.addClass('animated' + animationEffect);
    },400);
  });
}
/*滚动监听*/
$('body').scrollspy({target:'#mynavbar'});
/*平滑滚动*/
$(".navbar a").click(function(event){
 /*console.log(this.hash);
  var target=$(this.hash);
  console.log(target.offset().top);*/
 var target=$(this.hash);
 $("html").animate({
   scrollTop:target.offset().top
 },1000);
});
/*图集页面*/
/*导航胶囊*/
$(".filter li a").click(function () {
  /*alert(1);*/
  var filterValue = $(this).attr('data-filter');
  /*alert(filterValue);*/
  $(".isotope-container").isotope({ filter: filterValue });
  $(this).parent().addClass('active').siblings().removeClass('active');
  return false;
});

