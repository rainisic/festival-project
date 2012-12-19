$(function() {
	prompting();
	setTimeout(messaging, 2000);
});

function prompting() {
	
	// Show the promoting.
	$("#step-prompt").show();
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

function messaging() {
	
	// Hide the previous step pane.
	$("#step-prompt").fadeOut(1000);

	// Show this step pane.
	$("#step-message").fadeIn(1000);
	
	// Load all messages.
	Message.load();
	var index = 0;
	var messageInterval = setInterval(function() {
		
	}, 1000);
}
