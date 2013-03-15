$(document).ready(function() {
	
	// Get canvas and context.
	var canvas = $("#main-canvas")[0];
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var context = canvas.getContext("2d");

	var size = 100;
	var paint = setInterval(function() {
		size ++;
		context.scale(1, 1);
		context.scale(size / 100, size / 100);
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		draw(context);
		console.log(size / 100);
		if (size == 110)
			clearInterval(paint);
	}, 10);

	context.scale(2.0, 2.0);
	draw(context);
});

function draw(context) {

	context.beginPath();
	context.arc(10, 10, 10, 0, Math.PI * 2, true);
	context.closePath();
	gradient = context.createRadialGradient(10, 10, 5, 10, 10, 10);
	gradient.addColorStop(0, "transparent");
	gradient.addColorStop(0.7, "#ffffff");
	gradient.addColorStop(1, "transparent")
	context.fillStyle = gradient;
	context.fill();
}
