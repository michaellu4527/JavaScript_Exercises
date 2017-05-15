//JavaScript Effects

$(document).ready(function() {
	//$("h2").hide();

  	$("h1").click(function() {
    	//$("h2").show(1000);		//Number inside show() is in milliseconds
  		//$("h2").toggle(1000);	//Toggles between hidden and shown on each mouse click
  		
  		//$("h2").slideUp(1000);	//Hides h2 element by sliding up
  		//$("h2").slideDown(1000);	//Reveals h2 element by sliding down
  		//$("h2").slideToggle(1000);	//Will show/hide element whenever h1 is clicked
  		
  		//$("h2").fadeOut(1000);	//h2 heading will fade out of view when h1 is clicked
  		//$("h2").fadeIn(1000);	//h2 heading will fade in
  		//$("h2").fadeToggle(1000);	//Will fade in/out when h1 is clicked
  		//$("h2").fadeTo(1000, 0.3);	//Second parameter is opacity. 1 for solid, 0 for transparent

  		//$("h2").delay(2000).fadeToggle(1000);	//Delays fade by 2 seconds
  		
  		//Function that hides h2 and then hides h3
  		$("h2").hide(1000, function() {	
  			$("h3").fadeOut(1000);

  		});

  	});
});