

//------------------------------Arrays

var fruit = ["Apples", "Oranges", "Bananas", "Strawberries"];
console.log(fruit);

fruit.push("Rasberries");
console.log(fruit);

fruit.pop();
console.log(fruit);

//-----For In loop

for (var f in fruit){
	console.log(fruit[f])
}


// Create an array of numbers 1 - 10, then use a for in loop to print it to the console
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var n in numbers){
// 	console.log(numbers[n]);
// }

var blankArray = [];
for (var num = 1; num < 11; num++){
	console.log(num)
	blankArray.push(num);
	console.log(blankArray);
}

// for (var blank in blankArray){
// 	console.log(blankArray[blank]);
// }


//-----Mixed Aarrays

// var someThings = ["Nick", 7, [19, true], "iPhone"];
// console.log(someThings[2][1]);

var lists = [["Honda", "BMW", "Ford"], ["Webster, Dublin"], ["Mary", "Dave", "Nick"]];
for (var list in lists) {
	for (var x in lists[list]) {
		console.log(lists[list][x])
	}
}

var randomNumbers = [];

for (var counter = 1; counter < 16; counter++){
	var num = (Math.floor(Math.random()*50))
	console.log(num);
	randomNumbers.push(num)
}

var moreNumbers = [5, 19, 21, 40, 11, 25, 7, 14, 2, 1, 3];










































