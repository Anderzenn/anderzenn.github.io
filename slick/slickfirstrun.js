/*$(document).ready(function(){
	$('.slides').slick({
		arrows: true,
		dots: true,
		easing: "ease",
		autoplay: true, 
	});
	
	var $s = $(".slides");

	$s.slick({ 
    
		autoplay: true, 
		autoplaySpeed: 1000
    
	});
});*/

function createSlick(){  

	$(".slides").not('.slick-initialized').slick({
    autoplay: true,
    dots: true,
	speed: 600,
	autoplaySpeed: 7000,
	dragable: false,
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
			dragable: true
        } 
    }]
});	

}

createSlick();

//Now it will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );