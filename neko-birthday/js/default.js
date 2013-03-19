window.onload = function() {
	
	var startButton = document.querySelector("#startButton");
	startButton.addEventListener("click", function() {
		startButton.webkitRequestFullScreen();
	}, false);
}
