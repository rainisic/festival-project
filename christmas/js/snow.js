// Constant values.
var MIN_RADIUS = 5;
var MAX_RADIUS = 10;
var MAX_SPEED = 100;

function Snow() {

	// Initialize all attributes.
	this.radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
	this.posX = Math.random() * window.screen.width;
	this.posY = 0;
	this.speed = this.radius * MAX_SPEED;
	
	// Add the snow.
	this.dom = $("<div class='snow'></div>");
	this.dom.css("width", this.radius)
		.css("height", this.radius)
		.css("border-radius", this.radius)
		.css("top", this.posY)
		.css("left", this.posX)
	$("#snow-pane").append(this.dom);
}

/**
 * Snow fall down
 */
Snow.prototype.fall = function() {
	
	$(this.dom).animate({
		top: "100%"
	}, window.screen.height / this.speed * 10000, function() {
		$(this).remove();
	});
}
