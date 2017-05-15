$(document).ready(function() {
						   
  $("h1").mousedown(function() {	//happens when user clicks on h1 tag
    $(this).css("background-color","lightgreen");	//Changes BC whatever user clicks on
  });

  $("h1").mouseup(function() {	//happens when user releases mouse click on h1 tag
    $(this).css("background-color","lightblue");	//Changes BC whatever user clicks on
  });

  $("h1").mouseenter(function() {	//happens when mouse moves over h1 tag
    $(this).css("background-color","lightgreen");	//Changes BC whatever user clicks on
  });

  $("h1").mouseleave(function() {	//happens when mouse moves away from h1 tag
    $(this).css("background-color","lightblue");	//Changes BC whatever user clicks on
  	$("*").unbind("mouseleave");	//Removes mouseleave event from all elements after the first one. Unbind removes events
  });  
  
});

