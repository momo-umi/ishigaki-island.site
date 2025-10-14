$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var ptop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > ptop - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
	var scroll = $(window).scrollTop();
	console.log(scroll);
	if (scroll >= 1){
		$(window).ready(function (){
		var scroll = $(window).scrollTop();
		
		$('.fadein').addClass('scrollin');
		});
	 }
});