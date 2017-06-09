

//-----------------------------------------Objects

var emptyObject = {};


//-----Object Literal
var johnQualls = {
//  Key			  Value
	name		: "John Qualls",
	age			: 39,
	hairColor   : "Brown Hair"
}

console.log(johnQualls.name, "is", johnQualls.age, "with", johnQualls.hairColor);
console.log(johnQualls.name + "is" + johnQualls.age + "with" + johnQualls.hairColor);

johnQualls.height = "6ft" ;
console.log(johnQualls.height)
console.log(johnQualls)


var animal = {
	type			: "Red Panda",
	weight			: "12 to 20lbs",
	commonInIndiana	: false,
	habitat			: ["Asia", "Mountains of Nepal", "Burma", "China"],
	diet			: "Herbivore",
}

console.log(animal.habitat);

//-----Square Bracket Notation
console.log(animal["habitat"]);
animal["nickName"] = "Pandie";


//-----Reassigning Value
animal.type = "Elk"; 
console.log(animal.type);

animal["weight"] = 15;
console.log(animal.weight);

console.log(animal);
console.log(Object.keys(animal))

// Objects with methods

var bryce = {
	name 				: "Bryce Greene",
	age					: 55,
	vocation			: "TA",
	email				: "thebryceisright@gmail.com",
	greeting			: function(){
							return "Greetings earthlings, I am " + this.name + ". I am here to learn you.";
						  },
	contactMe			: function(){
							return this.email;
						  },
	greetingAndContactMe: function(){
							return this.greeting() + this.contactMe();
						  }

}

console.log(bryce.greeting())
console.log(bryce.contactMe())
console.log(bryce.greetingAndContactMe)
console.log("\n\n\n\n\n")

//-----Object Constructors

var paul = new Object;
paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code", "listening to music", "baking banana muffins"];


//-----Object Constructor Template

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
			return "There are " + (this.rooms - this.booked) + " rooms left.";
	};
}


var jw = new Hotel("Jw Marriot", 300, 221);
var jwExp = new Hotel("JW Express", 100, 39);

jw.location = "Indiana";
console.log(jw.location)


var hotels = [jw, jwExp];
console.log(hotels[1].name)
for (var h in hotels){
	console.log(hotels[h].checkAvailability())
}

var person = {
	name 	: "Nick",
	age		: 19,
	uni		: "University of Cincinnati",
	getName : function(){
				return this.name;
			  },
	getAge 	: function(){
				return this.age;
			  },
	getUni	: function(){
				return this.uni;
			  }
}

console.log(person.getUni());

//-----Inheritance of Objects
var similarPerson = Object.create(person, {
	major 	: {value: "Business"},
	getMajor: {
		value: function(){
			return this.major;
		}
	}
});
console.log(similarPerson.name);
similarPerson.name = "Daniel";
console.log(similarPerson.name);

console.log(similarPerson.getMajor());





console.log("\n\n\n\n\n")









function Person(name, age, favoriteShows){
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;
	this.birthday = function(){
		console.log(age+=1);
	}
	this.checkSimilarShows = function(thePerson){
		for (i in favoriteShows){
			for (j in thePerson.favoriteShows) {
				if (favoriteShows[i] == thePerson.favoriteShows[j]){
					console.log(favoriteShows[i])
				}
			}
		}
	}
	this.printEach = function(){
		var x = Math.floor(Math.random()*favoriteShows.length);
		console.log("Hello, my name is " + name + " and I'm " + age + " years old and one of my favorite shows is " + favoriteShows[x]); 
	}
}


var person1 = new Person("Nick", 19, ["Modern Family", "Bull", "Psych", "x", "y"]);
var person2 = new Person("Noelle", 19, ["something", "Psych", "Bull", "Monk", "Modern Family"]);

person1.checkSimilarShows(person2);
person1.printEach();
person1.birthday();
person1.birthday();


























