/*$(document).ready(function() {
  var hText = $("#head1").text();		// Reads text from head1 ID
  var text1 = "The heading text is ";
  var text2 = text1 + hText;			// + Concatenates 2 variables (joins them together)


  $("h1").click(function() {
    $("p").text(text2);
  });
});
*/

// Shorter way
$(document).ready(function() {
  var hText = "The heading text is " + $("#head1").text();		// Condensed version of earlier concatenation

  $("h1").click(function() {
    $("p").text(hText);
  });
});


$(document).ready(function() {
  var lineNum = 0;

  $("h1").click(function() {
  	$("p").css("background-color", "mediumorchid")
    $("p").eq(lineNum).css("background-color", "darkseagreen");		// Selects p tag at index 0
    lineNum++;													// Cycling through p elements

    if (lineNum > 2) {							// Resets index to 0 if it goes over the max number of p elements
    	lineNum = 0;
    }
  });
});


$(document).ready(function() {
  var imageName = ["floatingball.gif", "redball.gif", "eightball.gif"];
  var indexNum = 0;

  $("#picture").click(function() {						// Picture will change when clicked on
  	$("#picture").attr("src", imageName[indexNum]);		// Iterating through array
  	indexNum++;
  	if (indexNum > 2) {
  		indexNum = 0;
  	}
 
  });
});


$(document).ready(function() {
  var imageName = ["floatingball.gif", "redball.gif", "eightball.gif"];
  var indexNum = 0;

  $("#picture").click(function() {						// Picture will change when clicked on
  	$("#picture").fadeOut(300, function() {				// Picture will fade out after 0.3 s
  		$("#picture").attr("src", imageName[indexNum]);		// Switch to another image
  		indexNum++;
  		if (indexNum > 2) {								// Makes sure it doesn't go out of bounds of array
  			indexNum = 0;
  		}
  		$("#picture").fadeIn(500);						// Picture fades back in, creating a more gradual transition between clicks
  	});		 
  });
});