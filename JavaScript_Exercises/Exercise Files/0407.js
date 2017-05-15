var thing = 12;
thing = 'twelve';
typeof thing;	//returns "string"

thing = 12;
typeof thing;	//returns "number"

thing = false;
typeof thing;	//returns "boolean"

thing = {};
typeof thing;	//returns "object"

thing = [];
typeof thing;	//returns "object"
typeof thing === 'object' && thing.hasOwnProperty('length'); // true if array

thing = {};
typeof thing === 'object' && thing.hasOwnProperty('length'); // false if not array

NaN;
typeof NaN;		//returns "number"

typeof null;	//returns "object" 
thing === null;		//Have to check in this way
thing = null;
thing;
thing === null;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof