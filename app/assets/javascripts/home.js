$(document).ready(function() {
	"use strict";

	var topoffset = 50;

	//Activate Scrollspy
	$('body').scrollspy ({
		target: 'header .navbar',
		offset: topoffset
	});


	// Add class to navbar when user scrolls down.
	var scroll_start = 0;
	var startchange = $('#top');
	var offset = startchange.offset();

	if (startchange.length){
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if(scroll_start > (offset.top+300) ) {
				$("header .navbar").addClass("past-scroll")
			} else {
				$("header .navbar").removeClass("past-scroll")
			}

		});
	}

	var screenHeight = $(window).height();

	$('.full-height').css('height', screenHeight);

	$(window).resize(function() {
		screenHeight = $(window).height();
		$('.full-height').css('height', screenHeight);
	});

	$('#topside .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});

});

// Example code from here: http://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp
// for bootstrap's carouse methods. 
//
// $(document).ready(function(){
//     // Activate Carousel
//     $("#myCarousel").carousel({interval: 500});
    
//     // Enable Carousel Indicators
//     $(".item1").click(function(){
//         $("#myCarousel").carousel(0);
//     });
//     $(".item2").click(function(){
//         $("#myCarousel").carousel(1);
//     });
//     $(".item3").click(function(){
//         $("#myCarousel").carousel(2);
//     });
//     $(".item4").click(function(){
//         $("#myCarousel").carousel(3);
//     });
    
//     // Enable Carousel Controls
//     $(".left").click(function(){
//         $("#myCarousel").carousel("prev");
//     });
//     $(".right").click(function(){
//         $("#myCarousel").carousel("next");
//     });
// });