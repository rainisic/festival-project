function Story(dom) {

	// Get canvas and context.
	this.canvas = dom;
	this.context = this.canvas.getContext("2d");
	
	// Initialize canvas.
	this.init();
}

Story.prototype.init = function() {
	
	// Initialize canvas width and height.
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
}

Story.prototype.play = function() {

}
