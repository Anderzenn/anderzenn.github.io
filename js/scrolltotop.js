jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('#bcktt').fadeIn('slow');
		} else {
			$('#bcktt').fadeOut('slow');
		}
	});
});