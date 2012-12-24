$(function() {
	
	// First step.
	nextStep();
});

function nextStep() {

	// Toggle to the next step.
	if ($(".step-frame:visible").size() == 0) {
	
		// Show the first step.
		$(".step-frame:first").fadeIn(1000);
		
		// Call next step method.
		var name = $(".step-frame:first").attr("id");
		eval(name.substring(5, name.length)).call();
		
	} else if (!$(".step-frame:visible").is(".step-frame:last")) {
	
		// Get the steps.
		var currentStep = $(".step-frame:visible");
		var nextStep = currentStep.next();
		
		// Define the animation.
		var animate = [
			function() { nextStep.css("opacity", 0).show(playAnimation); },
			function() { currentStep.fadeOut(1000, playAnimation); },
			function() { nextStep.animate({"opacity": 1}, 1000, playAnimation); }
		];
		function playAnimation() { $(document).dequeue("next-step-animation"); }
		
		// Animate queue.
		$(document).queue("next-step-animation", animate);
		playAnimation();
		
		// Call next step method.
		var name = $(nextStep).attr("id");
		eval(name.substring(5, name.length)).call();
	}
}

function prompt() {

	console.log("Prompt function is loaded.");

	$(document).keydown(function(event) {
		
		// Check step.
		if ($("#step-prompt").is(":visible") && event.keyCode == 122) {
	
			// Toggle to next step.
			nextStep();
		}
	});
}

function conversation() {

	console.log("Conversation function is loaded.");

	// Background move. 
	//(Wait 0.1 second because #step-conversation is not ready.)
	// CSS3 transition will not work when target is invisible.
	// So must ensure the element is visible.
	setTimeout(function() { $("#step-conversation .background").css("left", "-9999px"); }, 100);
	
	// Start background music.
	$("#bgsound")[0].play();
	
	// Load all messages.
	Message.load();
	Message.play(function() {
	
		// Stop background music.
		$("#bgsound")[0].pause();
		
		nextStep();
	});
}

function snow() {

	console.log("Snow function is loaded.");
	
	// Play Music.
	$("#music")[0].play();
	
	// Define the animation.
	var animate = [
		function() { $("#step-snow article header").delay(2000).fadeIn(1000, showLyricAnimate); },
		function() { $("#step-snow article .lyric").delay(1000).fadeIn(1000, showLyricAnimate); },
		function() { $("#step-snow #word-a").css( "-webkit-transform", "rotate(360deg)"); setTimeout(showLyricAnimate, 200); },
		function() { $("#step-snow #word-i").css("-webkit-transform", "rotate(360deg)"); setTimeout(showLyricAnimate, 200); },
		function() { $("#step-snow #word-shi").css("-webkit-transform", "rotate(360deg)"); setTimeout(showLyricAnimate, 200); },
		function() { $("#step-snow #word-te").css("-webkit-transform", "rotate(360deg)"); setTimeout(showLyricAnimate, 200); },
		function() { $("#step-snow #word-ru").css("-webkit-transform", "rotate(360deg)"); setTimeout(showLyricAnimate, 200); },
	];
	function showLyricAnimate() { $(document).dequeue("show-lyric-animate"); }
	
	// Animate queue.
	$(document).queue("show-lyric-animate", animate);
	showLyricAnimate();
	
	// Generate snow.
	var snowInterval = setInterval(function() {
		new Snow().fall();
	}, 200);
	
}
