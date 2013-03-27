$(document).ready(function() {

	// Create background
	var background = new Background($("#background img"));

	// Create scene controller.
	var sceneController = new SceneController();
	sceneController.show($("#step-prepare"));

	// DEBUG
	sceneController.show($("#step-video"));

	// Add event listener.
	addEventListener();

	// Define audio player and lyrics.
	var player = $("#step-video audio")[0];
	var lyrics = new Lyrics("kimisorakiseki");

	$("#enter-step-video").click(function() {
		sceneController.show($("#step-video"));
		player.play();
		lyrics.play();
	});
	$("#enter-step-music").click(function() { sceneController.show($("#step-music")); });
	$("#enter-step-album").click(function() { sceneController.show($("#step-album")); });
	$("#enter-step-reset").click(function() { sceneController.show($("#step-prepare")); });

	setTimeout(function() {
		var player = document.querySelector("#step-video audio");
		lyrics.play();
		player.play();
		//player.currentTime = 110;
	}, 1000);
});

function addEventListener() {
	
	// Disable text select.
	$(document).on("selectstart", function() {
		return false;
	});

}
