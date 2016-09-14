	$(document).ready(function () {
	    $("#textExample").verticaltabs({
	        speed: 500,
	        slideShow: false,
	        activeIndex: 0
	    });
	    $("#imageExample").verticaltabs({
	        speed: 1000,
	        slideShow: true,
	        slideShowSpeed: 3000,
	        activeIndex: 0,
	        playPausePos: "topRight"
	    });
	});