//----------------------------------------------------------conditionals

/*
		    Boolean Operators
	------------------------------------
		> 		Greater than
		< 		Less than
		>=		Greater than or Equal
		<=		Less than or Equal
		== 		Equal to
		===		Strictly Equal To
		!		Not
		!=		Not Equal to
		&&		This AND that must be true
		||		This OR that must be true
*/

console.log(1 > 3);				//false
console.log(10 != 10);			//false
var name = "Nick";
console.log(name == "nick");	//false
console.log(7 == "7")			//true
console.log(7 === "7")			//false

//---------------------------------------------If Statements

if ( 242 % 2 == 0) {
	console.log("This number is even");
} else {
	console.log("This number is odd");
}

var userName = "admin";
var password = "test1";

if (userName == "admin" && password == "test123") {
	console.log("Logged in");
} else if (userName != "admin") {
	console.log("Incorrect username");
} else 	{
	console.log("Incorrect password");
}


var age = 20;

if (age >= 35) {
	console.log("You can vote and also hold any place in government");
} else if (age >= 25) {
	console.log("You can vote and run for senate");
} else if (age >= 18) {
	console.log("You can vote");
} else {
	console.log("You're outta luck");
}

var coltsWinsVersusPatriots = 3;

if (coltsWinsVersusPatriots >= 3){
	console.log("We're the better team");
} else if (coltsWinsVersusPatriots == 2) {
	console.log("We're gonna win to break this tie")
} else {
	console.log("You may have the better record, but we're changing that today");
}

var i = 1
while (i<101) {
	if (i % 3 != 0 && i % 5 != 0) {
		console.log(i);
	}
	else if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	}
	else if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	i++;
}







