$(document).ready(function() {
	$('.itty-slideshow').append(
		"<div class='itty-btn prev-btn' data-action='itty-prev'>&lsaquo;</div>" +
		"<div class='itty-btn next-btn' data-action='itty-next'>&rsaquo;</div>");

	var i = 0;
	$('.itty-slide').each(function() {
		$(this).attr('data-itty-id', i);
		$('.itty-indicators').append(
			"<div class='itty-ind inactive' data-target='" + i++ + "'></div>");
	});

	$('.itty-slider').attr('data-itty-slide', 0);

	$('.itty-btn').click(function() {
		switch ($(this).data('action')) {
			case "itty-next":
				ittyNext();
				break;
			case "itty-prev":
				ittyPrev();
				break;
			default:
				break;
		}
	});

	$('.itty-ind').click(function() {
		ittySlide(parseInt($(this).data('target')));
	});
});

var ittyNext = function() {
	ittySlide(parseInt($('.itty-slider').attr('data-itty-slide')) + 1);
};

var ittyPrev = function() {
	ittySlide(parseInt($('.itty-slider').attr('data-itty-slide')) - 1);
};

var ittySlide = function(slideID) {
	if (slideID < 0) slideID += i;
	slideID = slideID % i;
	$('.itty-slider').attr('data-itty-slide', slideID);
	$('.itty-slider').css('margin-left',
			(-1.007 * slideID * parseInt($('.itty-slide').css('width'))) + "px");
	$('.itty-ind').addClass('inactive');
	$('.itty-ind[data-target='+slideID+']').removeClass('inactive');
};
