$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({	
      	"font-size": "3em", 	// Increases font-size
      	"width": "50%",		// Decreases width
      	"left": "+=100px",		// Increases distance from left upon every click
    
      	"font-size": "hide",	//Will hide the heading after click
      	"font-size": "show"		// Will show the heading after click
      	"font-size": "toggle"	// will toggle between shown or hidden on each click
    
    }, 1000, function() {
    	$("h3").fadeOut(1000);
    });
  });
});