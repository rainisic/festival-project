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
