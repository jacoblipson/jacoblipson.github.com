$(document).ready(function() {


		$("#pagepic1").on('click', function() {
			$("#info1").css('opacity', '0');
			$("#info1").css('display','block');
			$("#info1").delay(100).animate({opacity:1});		});
		$("#pagepic2").on('click', function() {
			$("#info2").css('opacity', '0');
			$("#info2").css('display','block');
			$("#info2").delay(100).animate({opacity:1});		});
		$("#pagepic3").on('click', function() {
			$("#info3").css('opacity', '0');
			$("#info3").css('display','block');
			$("#info3").delay(100).animate({opacity:1});
		});
		$("#pagepic4").on('click', function() {
			$("#info4").css('opacity', '0');
			$("#info4").css('display','block');
			$("#info4").delay(100).animate({opacity:1});		});
		$("#pagepic5").on('click', function() {
			$("#info5").css('opacity', '0');
			$("#info5").css('display','block');
			$("#info5").delay(100).animate({opacity:1});
		});
		$("#close1").on('click', function() {
			$("#info1").fadeOut("slow");
		});
		$("#close2").on('click', function() {
			$("#info2").fadeOut("slow");
		});
		$("#close3").on('click', function() {
			$("#info3").fadeOut("slow");
		});
		$("#close4").on('click', function() {
			$("#info4").fadeOut("slow");
		});
		$("#close5").on('click', function() {
			$("#info5").fadeOut("slow");
		});

});