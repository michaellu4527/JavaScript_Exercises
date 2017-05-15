var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;

console.log( regex.test(string1) );
console.log( regex.test(string2) );
console.log( regex.test(string3) );
console.log( regex.test(string4) );

regex = /this/i;	//i indicates case insensitive

regex = /^this/i;	//Checks if "this" appears in the beginning 

regex = /this$/i;	//Checks at end

regex = /ever.$/i;	//dot means any character can appear after it

regex = /ever\.$/i;		//Use \ if you're including . in the search

regex = /Moun.$/i;	

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://www.regular-expressions.info