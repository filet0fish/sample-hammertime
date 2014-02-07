
$(function () {

	$('#hammertime').carousel({ interval: false });

	var targetEl = document.getElementById('hammertime');

	Hammer(targetEl).on('swipe', function (e) {
		console.log('Someone touched this');
		console.dir(e);
	});

});
