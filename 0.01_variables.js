
//////////////////////////////////////////Basic Variable Info

//Declaration
var age;

// Initialization aka initial value
// Data Type of String
age = 19;

//Printing to console
console.log(age);

var firstName = "Nick";
var lastName = "Snider";
var fullName = firstName + " " + lastName;
console.log(fullName);

var street = "1111 Roadview Dr";
var state = "Indianapolis IN";
var zip = 46771;

var address = street + ", \n" + state + ", \n" + zip;

console.log(address);

var isAwake = true;

//////////////////////////////////////////Math

console.log(typeof("The answer to 10 % 3 is:" , 10 % 3));
//console.log(typeof("Nick"))

console.log(isNaN("Fish"));

var myAge = 19;
var maxAge = 100
var coffePerDay = 2;

var coffeForLife = ((maxAge - myAge)*365) * 2;
console.log("You will neeed " + coffeForLife + " cups of coffee if you live to the age of 100");

var lowercaseString = "Is this lowercase or uppercase?";
console.log(lowercaseString);

var uppercaseString = lowercaseString.toUpperCase();
console.log(uppercaseString);

x = 5;
y = 7;

console.log(x > 3 && y < 10);  		//true
console.log(x > 3 || y < 10);  		//true
console.log(x == 3 || y < 10); 		//true
console.log(x == 3 && y < 10); 		//false
console.log(x != 3 || y < 10); 		//true
console.log(x != 5 || y != 7); 		//false



