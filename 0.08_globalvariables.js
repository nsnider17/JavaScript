

// global variables weaken the resiliency of programs...
// One way to minimize the use of global variables is to create a 
// single global variable for your application

var myApp = {};

myApp.name = {
	firstName: "Nick",
	lastName	: "Snider"
};

myApp.location = {
	airline: "Southwest",
	number: 907,
	departure: {
		IATA: "IND",
		time: "2017-06-15 05:45",
		city: "Indianapolis"
	},
	arrival: {
		IATA: "LAX",
		time: "2017-06-15 10:42",
		city: "Los Angeles"
 	}
};

console.log(myApp.location.airline)