function Lyrics(name) {
	
	var current = this;

	var data = $.ajax({
		url:		"lyrics/" + name + ".lrc",
		type:		"get",
		dataType:	"text",
		success:	function(data) {
			current.data = data;
			current.analyze();
		}
	});
}

Lyrics.prototype.analyze = function() {
	
	// Get all sentences.
	this.sentences = new Array();
	var result = this.data.split("\n");
	for (var i = 0; i < result.length; i ++) {
		this.sentences[i] = new Array();
		this.sentences[i] = result[i].split("|");
	}

}

Lyrics.prototype.play = function() {

	var startTime = new Date().getTime();
	var duration = 500;
	var sentences = this.sentences;
	var index = 0;
	var isDisplay = false;
	$("#jp-lyrics").text(sentences[0][2]);
	$("#cn-lyrics").text(sentences[0][3]);

	var lrcPlay = setInterval(function() {

		var currentTime = new Date().getTime();

		// Check display time.
		if (!isDisplay && currentTime - startTime - duration >= sentences[index][0]) {
		
			// Lyrics fade in.
			$("#lyrics").fadeIn(duration);

			// Toggle display switch.
			isDisplay = true;
		}

		// Check disapear time.
		if (isDisplay && currentTime - startTime - duration >= sentences[index][1]) {

			// Toggle display switch.
			isDisplay = false;
			
			// Increase index.
			index ++;
			$("#lyrics").fadeOut(duration, function() {

				// Stop lyrics.
				if (index == sentences.length - 1) {
					
					// Clear interval
					clearInterval(lrcPlay);
					
					// Show back button.
					$("#step-video .enter-step-reset").fadeIn();
					
					return ;
				}
				
				// Change sentences.
				$("#jp-lyrics").text(sentences[index][2]);
				$("#cn-lyrics").text(sentences[index][3]);
			});
		}
	}, 20);
}
