$(window).scroll(function(){
   
 

   
})


$(".right-banner__arrow").click(function(){
    $('html, body').animate({
           scrollTop : 0
       }, 0);
       return false;
   });


$('.catalog__text').mouseenter(function(){
  $(".navigation__wrap").addClass("on")


  var $thisNavi = $(this).attr('data-navi');
  if($thisNavi === "onenavi"){
  	$('#one').addClass('on').siblings().removeClass('on');
  }else if($thisNavi === "twonavi"){
  	$('#two').addClass('on').siblings().removeClass('on');
  }else if($thisNavi === "threenavi"){
    $('#three').addClass('on').siblings().removeClass('on');
  }else if($thisNavi === "fournavi"){
    $('#four').addClass('on').siblings().removeClass('on');
  }else if($thisNavi === "fivenavi"){
  	$('#five').addClass('on').siblings().removeClass('on');
  }else{
  	$('#six').addClass('on').siblings().removeClass('on');
  }
})


  $('.navigation__wrap').mouseleave(function(){
    $(".navigation__wrap").removeClass("on")
  })



$('.middle__two-title-button').click(function(){
  var $thisButton = $(this).attr('data-button');

if($thisButton === "left"){
  $('#lefttext').addClass('on').siblings().removeClass('on');
  $(this).addClass('on').siblings().removeClass('on');
}else if($thisButton === "right"){
  $('#righttext').addClass('on').siblings().removeClass('on');
  $(this).addClass('on').siblings().removeClass('on');
}else {
 
}
})



