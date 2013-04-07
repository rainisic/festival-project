var DEBUG = true;
$(document).ready(function() {

	// Create background
	var background = new Background($("#background img"));

	// Create scene controller.
	var sceneController = new SceneController();
	sceneController.show($("#step-prepare"));

	// Add event listener.
	addEventListener();

	// Define audio player and lyrics.
	var player = $("#step-video audio")[0];
	var lyrics = new Lyrics("kimisorakiseki");
	var story = new Story($("#video")[0]);

	$("#enter-step-video").click(function() {
		sceneController.show($("#step-video"));
		player.play();
		lyrics.play();
		story.play();
	});
	$("#enter-step-music").click(function() { sceneController.show($("#step-music")); });
	$("#enter-step-album").click(function() { sceneController.show($("#step-album")); });
	$(".enter-step-reset").click(function() { sceneController.show($("#step-prepare")); });

});

function addEventListener() {
	
	// Disable text select.
	$(document).on("selectstart", function() {
		return false;
	});

}