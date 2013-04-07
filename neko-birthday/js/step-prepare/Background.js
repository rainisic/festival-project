function Background(target) {

	// Get the DOM.
	this.dom = target;
	
	// Initialize.
	this.autosize();

	// Add action listener.
	this.addActionListener();
}

Background.prototype.addActionListener = function() {

	// On window resize.
	var current = this;

	$(window).resize(function() { current.autosize(); });
}

Background.prototype.autosize = function() {

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
	$(this.dom).css("width", width)
		.css("height", height)
		.css("margin-left", -left)
		.css("margin-top", -top);
}
