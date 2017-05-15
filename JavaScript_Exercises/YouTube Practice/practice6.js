$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).css({
			"margin-left": "+=50px",	// Increments by 50 pixels every time mouse is hovered over
			"background-color": "lightskyblue"	//Changes background to light sky blue
		})
	});
});


$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).addClass("emphasis shrink");	//Underlines text, changes color and shrinks it (references HTML classes)		
	});
});


$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).removeClass("shrink emphasis");	//Removes selected classes	
	});
});


$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).removeClass("emphasis").addClass("shrink");	// Removes emphasis class, then adds shrink class
});

$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).toggleClass("emphasis shrink");	// Toggles whether class is applied or not (separate classes w/ a space)
												// Off -> On and On -> Off
	});
});

