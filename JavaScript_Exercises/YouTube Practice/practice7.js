/*$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
    $(this).text("clicked");
    $("p").html('new <strong style="color: seagreen;">text</strong>');		// Changes text of all "p" tags to clicked
  																			
  																			// Overwrites "p" tag text with "new text" and bolds "text" 
  																			// while also turning it sea green when clicked on
  });
});


$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("div").empty();	// Deletes everything inside any "div" element once h1 heading is clicked
  });
});


$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("div").append("<p>new text</p>");	// Adds something to specified element
  });
});


$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("div").after("<p>new text</p>");	// Adds something outside of the div
  });
});


$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("div").prepend("<p>new text</p>");	// Adds something to the beginning of the specified element, inside it
  });
});

$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("div").before("<p>new text</p>");	// Adds something to the beginning of the element, outside of it
  });
});*/


$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("p").replaceWith("<h2>new text</h2>");	// Changes class of specified element after click
  });
});

$(document).ready(function() {
  $("h1").click(function() {		// $() is the JavaScript selector
  	$("#picture").attr("src", "floatingball.gif");	// Targets picture id then changes attribute to floatingball.gif after click
  });
});