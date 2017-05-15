var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');

//Another way of doing if/else statements
switch (answer) {
	case 'YES' :
		console.log('You said YES!');
		break;		//Must include break or else code will continue to run to next block

	case 'MAYBE' :
		console.log("You said maybe. I don't know what to make of that.");
		break;

	case 'NO' :
		console.log('You said no. :(');
		break;

	default : 	//Equivalent to 'else'
		console.log('You rebel, you!');
		break;
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch