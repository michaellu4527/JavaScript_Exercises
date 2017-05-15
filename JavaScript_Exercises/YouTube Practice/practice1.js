$(document).ready(function() {

	$("p").hide();		//hides all paragraph tags

	$("h1").click(function() {	//Executes as soon as h1 tag is clicked on
		$(this).next().slideToggle(300);	//Toggle visibility of tag that comes after heading tag
	});

});