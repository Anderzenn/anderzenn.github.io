jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('#bcktt').fadeIn('slow');
		} else {
			$('#bcktt').fadeOut('slow');
		}
	});
	$('#bcktt').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});