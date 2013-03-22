function SceneController() {
	this.visibleScene = null;
}

SceneController.prototype.show = function(scene) {
	
	// Hide visible scene.
	$(this.visibleScene).fadeOut();
	
	// Show the scene.
	$(scene).fadeIn();

	this.visibleScene = scene;
}
