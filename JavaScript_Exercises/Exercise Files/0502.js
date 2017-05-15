// iterate over an array
var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

// Will iterate to number of enumerable objects (which is typically length of array or size of object)
for (var p in pageNames) {
	console.log(p + ' is ' + pageNames[p]);	// Order of objects is NOT guarunteed!
}

// iterate over an object
var pages = {				
	'first' : 'Home',
	'second' : 'About Us',
	'third' : 'Contact Us',
	'fourth' : 'JavaScript Playground',
	'fifth' : 'Blog',
};
for (var p in pages) {
	if (pages.hasOwnProperty(p)) {
		console.log(p + ' is ' + pages[p]);
	}
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...in