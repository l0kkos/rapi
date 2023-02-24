$(document).ready(function(){
	$('.arriba').hide();
	$('.arriba').click(function(){
		$('body,html').animate({
			scrollTop:0
		},1000)
	});
	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$('.arriba').fadeIn();
		}
		else {
			$('.arriba').fadeOut();
		}
	});
});