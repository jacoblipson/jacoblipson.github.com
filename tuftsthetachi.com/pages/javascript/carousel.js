$(document).ready(function() {
		/* demo script */
		var index = 0;
		var tindex = 6;
		var images = $("#gallery img");
		var thumbs = $("#thumbs img");
		var imgHeight = 100;

		for (i=0; i<thumbs.length; i++) {
			$(thumbs[i]).addClass("thumb-"+i);
			$(images[i]).addClass("image-"+i);
		}

		show(index, tindex);
		$autotimer = setInterval(sift, 6000);

		$("#thumbs").animate({
			scrollTop: 200
		}, 400, 'easeOutSine');

		function sift() {
			$('#thumbs img:first-child').animate(
				{
					'margin-top': '100px'
				},
				400,
				'easeOutSine',
				function() {
					$(thumbs).slice(tindex, (tindex + 1)).clone().prependTo("#thumbs");
					$("#thumbs img:last-child").remove();
					$('#thumbs img').css('margin-top', '0');
				}
			);

			if ( index < 5){
				index += 1;
			} else {
				index = 0;
			}

			if(tindex > 0) {
				tindex = tindex - 1;
			} else {
				tindex = 5;
			}

			show(index, tindex);
		}

		function show(num, tnum) {
			$(images).fadeOut(400);
			$(".image-"+num).stop().fadeIn(400);
		}

		$("#next").on('click', function(e) {
			sift();
			if(typeof $autotimer != "undefined" && $autotimer != false) {
				clearInterval($autotimer);
				$autotimer = false;
				setTimeout(function(){
					$autotimer = setInterval(sift, 6000);
				}, 6000);
			}
			e.preventDefault();
		});

});