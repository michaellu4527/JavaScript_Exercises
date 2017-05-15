$(document).ready(function() {
  	$("#testbutton").click(function() {		//Specifies testbutton ID
    	$("div > p").css("background-color","blue");		//Specifies p elements that are all children of div elements
    														//In other words, p tags that appear within a larger div tag
  		$("div > p:first-child").css("background-color","blue");	//Specifies only first p tag that appears in div tag
  		$("div > p:last-child").css("background-color","blue");		//Specifies final p tag contained in a div tag
  	
  		$("div strong").css("background-color","blue");	//Specifies any strong tags (descendents) within div tag



  	});
});
