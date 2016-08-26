$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left':'1020px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('left', '570px');
  			}  
  		);	
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});
	$(document).keydown(function (e) {

		var key = e.which;
		console.log ('user pressed the ' + key + ' key');



  		if (e.which == 88) {
  			console.log('user pressed keydown pressed x');
  			$('.ryu-ready').hide();
  			$('.ryu-still').hide();
        	$('.ryu-pose').show();
    	}
	})
	$(document).keyup(function (e) {
  		if (e.which == 88) {
  			console.log('user released x button');
        	$('.ryu-pose').hide();
        	$('.ryu-still').show();
    	}
	})
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
