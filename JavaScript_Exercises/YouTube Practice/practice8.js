//jQuery Traversing

$(document).ready(function() {
  $("h1").click(function() {
    $(this).add("p").css("background-color", "darkseagreen");	// Adds background color to p elements as well
  });
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").not("p.second").css("background-color", "darkseagreen");	// Removes second p tag
  });
});


$(document).ready(function() {
  $("h1").click(function() {
    $("div").next().css("background-color", "darkseagreen");	// Selects sibling elements that come after div tag
    $("h1").next("div").css("background-color", "darkseagreen");	//Selects all sibling div elements that come after a h1
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").prev().css("background-color", "darkseagreen");	// Selects sibling elements that come before p tags
  });
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").parent().css("background-color", "darkseagreen");	// Changes background for parent of p tags
  });
});


$(document).ready(function() {
  $("h1").click(function() {
    $("div").find("p").css("background-color", "darkseagreen");	// Finds p elements which are descendents of a div element
  });
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").first().css("background-color", "darkseagreen");	// selects very first p element
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").last().css("background-color", "darkseagreen");	// selects very last p element
});


$(document).ready(function() {
  $("h1").click(function() {
    $("p").eq(1).css("background-color", "darkseagreen");	// eq(index_number). Index starts at 0, so eq(1) selects second
});