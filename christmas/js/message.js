var message = [
	"Loading....",
	"Christmas is comming.",
	"test values"
];

function Message(text) {
	this.text = text;

	// Add view.
	this.dom = $("<div class='messages'>" + this.text + "</div>");
	$("#message-pane").append(this.dom);
}

Message.load = function() {
	
	$(message).each(function() {
		new Message(this);
	});
}

Message.play = function() {
	
	var playInterval = setInterval(function() {

		if ($(".messages:visible").size() == 0) {
			
			// Show the first message.
			$(".messages:first").fadeIn(1000);

		} else if ($(".messages:visible").next().size() > 0) {
			
			// Show the next message.
			$(".messages:visible").fadeOut(1000, function() {
				$(this).next().fadeIn(1000);
			});

		} else {
		
			// Clear interval.
			clearInterval(playInterval);

			// Return status.
			return true;
		}
	}, 3000);
}
