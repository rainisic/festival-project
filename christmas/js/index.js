$(function() {
	prompting();
	
	$(document).keydown(function(event) {
		
		// 
		console.log(event.keyCode);
		if (event.keyCode == 122) {
			messaging();
		}
	});
});

function prompting() {
	
	// Show the promoting.
	$("#step-prompt").show();
}

function messaging() {
	
	// Hide the previous step pane.
	$("#step-prompt").fadeOut(1000);

	// Show this step pane.
	$("#step-message").fadeIn(1000);

	// Background move.
	$("#background").css("left", "-9999px");
	
	// Load all messages.
	Message.load();
	if (Message.play()) {
		snowing();
	}
}

function snowing() {
	
	// Hide the previous step pane.
	$("#step-message").fadeOut(1000);

	// Show this step pane.
	$("#step-snow").fadeIn(1000);
	
	// Generate snow.
	var snowInterval = setInterval(function() {
		new Snow().fall();
	}, 100);
	
}
