window.onload = function() {
	responsiveBackground(document.querySelector("#background img"));
	fadeIn(document.querySelector("#step0"), 1000);
}

window.onresize = function() {
	responsiveBackground(document.querySelector("#background img"));
}

function responsiveBackground(bg) {
	
	// Get window size.
	var WINDOW_WIDTH = window.innerWidth;
	var WINDOW_HEIGHT = window.innerHeight;
	
	// Define image size.
	var IMAGE_WIDTH = 1440;
	var IMAGE_HEIGHT = 900;

	// Calculate the background size and position.
	var width, height, left, top;
	if (WINDOW_WIDTH / WINDOW_HEIGHT == IMAGE_WIDTH / IMAGE_HEIGHT) {
		width = WINDOW_WIDTH;
		height = WINDOW_HEIGHT;
		left = 0;
		top = 0;
	} else if (WINDOW_WIDTH / WINDOW_HEIGHT > IMAGE_WIDTH / IMAGE_HEIGHT) {
		width = WINDOW_WIDTH;
		height = WINDOW_WIDTH / IMAGE_WIDTH * IMAGE_HEIGHT;
		left = 0;
		top = (height - WINDOW_HEIGHT) / 2;
	} else {
		width = WINDOW_HEIGHT / IMAGE_HEIGHT * IMAGE_WIDTH;
		height = WINDOW_HEIGHT;
		left = (width - WINDOW_WIDTH) / 2;
		top = 0;
	}

	// Set size and position.
	bg.width = width;
	bg.height = height;
	bg.style.marginLeft = -left + "px";
	bg.style.marginTop = -top + "px";
}

function fadeIn(target, speed) {

	// 
	target.style.opacity = 0;
	target.style.display = "block";
	
	var opacity = 0;
	var fadeInAnimate = setInterval(function() {
		
		// 
		opacity += 1 / (speed / 10) ;
		target.style.opacity = opacity;
		
		// Check clear interval
		if (opacity >= 1) {
			clearInterval(fadeInAnimate);
		}
	}, 10);
}
