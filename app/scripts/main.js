
$(function () {

	$('#hammertime').carousel({ interval: false });

	var targetEl = document.getElementById('hammertime');

	Hammer(targetEl, { drag: false, tap: false, transform: false, hold: false, swipe_velocity: 0.2 }).on('swipe', function (e) {
		console.log('Someone touched this');
		if (e.gesture.direction === Hammer.DIRECTION_LEFT) {
			$('#hammertime').carousel('next');
		} else if (e.gesture.direction === Hammer.DIRECTION_RIGHT) {
			$('#hammertime').carousel('prev');
		}
	});

});
