var counties = [
	'Belknap',
	'Strafford',
	'Carroll',
	'Rockingham'
];

counties[0];
counties[2];

counties[2] = 'Cheshire';
counties;

counties[4] = 'Carroll';
counties;

counties[counties.length] = 'Merrimack';
counties;

counties.push('Coos');
counties;

counties.pop();

delete counties[2];
counties;

counties.splice(2, 1);	//First param specifies index. Second specifies how many items you want to delete
counties;
counties.length;	//Refers to that amount of data in an array. NULLs count!

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array