function speakSomething (what) {
	for (var i = 0; i < 10; i += 1) {
		console.log(what);
	}
}

// Anonymous function (function with no name)
var speakSomething = function(what) {
	for (var i = 0; i < 10; i += 1) {
		console.log(what);
	}
}

// Passing in a function as a parameter. Function acts as an object
window.setTimeout(speakSomething, 5000);	// Executes after 5000 ms

var obj = {
	'function' : function() {				//Property called 'function' that consists of an anonymous function called "function()"
				   console.log('Hello');
				 }
};

obj.function();

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function