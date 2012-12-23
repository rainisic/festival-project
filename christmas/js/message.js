var message = [
	"Merry Christmas，小娫～",
	"22号新纪元来临",
	"2012的圣诞变成了一个特殊的圣诞",
	"“新纪元的第一个圣诞”",
	"但无论怎样，一个人的圣诞都是寂寞的圣诞",
	"我明白一个人的寂寞，所以，我来陪你啦～",
	"虽然地理上我们天各一方",
	"但是在柏拉图的平行线上，我就在这里，在你身边",
	"有什么情感，随时可以向我宣泄",
	"有什么困难，随时可以找我帮忙",
	"要记住，你永远不是孤独的一个人，因为…",
	"<div class='big'>僕は君の<a class='red'>そばにいるね</a>（我会<a class='red'>在你身边</a>）</div>"
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

Message.play = function(callback) {
	
	// Play.
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
			
			// Callback.
			callback.call();
		}
	}, 5600);
}
