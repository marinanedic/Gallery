$(document).ready(function(){
	$('.galimg').each(function(){
	var width = $(this).children('img').width(),
		height = $(this).children('img').height();

		if(width < height) {
			$(this).addClass('portrait');
	}

	 else {
	 	$(this). addClass('landscape');
	 }

	});
});