function Question1() {
    var date;
    var day;
    var year;

    var dayOfWeek = "";     //Creates empty variable to hold days of week
    var today = new Date();    //Creates date object 
    date = today.getDate();
    day = today.getDay();
    year = today.getFullYear();

    var hour;
    var minute;
    var second;
    var currentTime
    
    hour = today.getHours();
    if (hour > 12) {
        hour = hour - 12 + " PM";   //Distinguishing between AM and PM
    } 
    else {
        hour = hour + " AM";
    }

    minute = today.getMinutes();
    second = today.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;      //Keep at 2 digits
    }
    
    if (second < 10) {
        second = "0" + second;
    }

    currentTime = hour + " : " + minute + " : " + second;       //Outputting results
    dayOfWeek = date + "/" + day + "/" + year;

    console.log(dayOfWeek + " Hello" + today.getDay());
    document.getElementById("DayOfWeek").textContent = dayOfWeek;
    document.getElementById("CurrentTime").textContent = currentTime;
}

function Question2() {
    window.print();
}

function Question3() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    document.getElementById("CurrentDate").textContent = month + "/" + day + "/" + year;
}

function Question4() {
    document.getElementById("AreaTriangle567").textContent = AreaOfTriangle(5, 6, 7);
}

function AreaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    var Area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Area;
}

var startMarquee;

function Question5(arg) {
    if (arg == 1) {
        startMarquee = setInterval( function() {    //Will continue to execute function as long as mouse is over text
            var str = document.getElementById("Q5String").textContent;  //Obtaining "w3resource" string
            var arr = str.split('');    //Splits the string into individual characters
            var letter = arr.pop();     //Pops the last element off of the split string array
            arr.unshift(letter);    //Adds letter to the front of the array
            document.getElementById("Q5String").textContent = "";
            console.log(arr);
            for (var i = 0; i < str.length; i++) {
                document.getElementById("Q5String").textContent += arr[i];
            }
        }, 100)
    } else {
        clearInterval(startMarquee);    //Stops execution when mouse leaves "w3resource" string
    }
}

function Question6() {
    var year = document.getElementById("IsLeapYear").value;
    if (year % 400 == 0) {                              //If the year is divisible by 400, it is automatically a leap year
        document.getElementById("Q6Span").textContent = "This is a Leap Year!";
    }
    else if ((year % 4) == 0 && (year % 100) != 0) {    //Other condition for leap year
        document.getElementById("Q6Span").textContent = "This is a Leap Year!";
    }
    else {                                              //Anything else isn't
        document.getElementById("Q6Span").textContent = "This is not a Leap Year!";
    }
}

function Question7() {

    var year;
    for (year=2014; year<2051; year++) {
        var date = new Date(year, 0, 1);    //Checking for January 1 in currently looped year

        console.log(date.getDay());
        if (date.getDay() == 0) {       //If a Sunday
            document.getElementById("Q7Span").textContent = date.toDateString();    //Converting date into readable format
            break;                  //Breaking out of loop
        }
    }
}

function Question8() {
    var num = Math.floor((Math.random() * 10 + 1));     //Generates random number between 1 and 10
    var guess = document.getElementById("UserGuess").value;    //User's guess
    if (num == guess) {
        document.getElementById("Q8Span").textContent = "You got it!";
    } else {
        document.getElementById("Q8Span").textContent = "Wrong! Its " + num;
    }
}

function Question9() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);  //Defining date for Christmas

    console.log(today);
    console.log(christmas);

    todayDate = today.getTime();                            //Getting today's date in milliseconds from UTF
    christmasDate = christmas.getTime();                //Getting Christmas date in milliseconds

    diff = christmasDate - todayDate;               //Difference is days until Christmas in milliseconds

    if (diff < 0) {                                 //If day is 26th-31st...
        christmas = new Date(today.getFullYear() + 1, 11, 25);  //Need to take Christmas date of next year
        christmasUTF = christmas.getTime();
        diff = christmasUTF - todayUTF;
    }

    var daysTillChristmas = diff / 86400000;            //Converting milliseconds to days
    document.getElementById("Q9Span").textContent = Math.floor(daysTillChristmas);

}

function Question10(opr) {
    var num1 = document.getElementById("Operand1").value;       //Getting inputs
    var num2 = document.getElementById("Operand2").value;
    if (opr == 1)
    {
        var result = num1 * num2;                               //Multiplying numbers
        document.getElementById("Q10Span").textContent = result;    //Printing
    } else if (opr == 2) {
        var result = num1 / num2;                               //Dividing numbers
        document.getElementById("Q10Span").textContent = result;
    }
}

function Question11() {
    var isC = document.getElementById("CTemp").checked;     // Getting inputs
    var isF = document.getElementById("FTemp").checked;
    var degree = String.fromCharCode(parseInt("00B0", 16));     // Getting degree symbol
    if (isC) {
        var tC = document.getElementById("Temp").value;     // Converting to Fahrenheit
        var tnew = tC * (9 / 5) + 32;
        tnew += degree + "F";
    } else if (isF) {
        var tF = document.getElementById("Temp").value;     // Converting to Celsius
        var tnew = (tF - 32) * 5 / 9;
        tnew = tnew + degree +"C";  
    } else {                                                // Shouldn't ever execute
        var tnew = "Hm... Something went wrong."
    }

    document.getElementById("Q11Span").textContent = tnew;

}

function Question12() {
    var url = window.location.protocol;
    url += window.location.host;
    url += window.location.pathname;
    document.getElementById("Q12Span").textContent = url;
}