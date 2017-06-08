

//--------------------------------------------------Loops

//-----Do While Loop

//guarunteed to run at least one time
var i = 0;
do {
	i+=2;
	console.log(i);
} while(i < 20)

var x = 10;
do {
	x--;
	console.log(x);
} while(x>0);

//-----While Loop
var counting = 0;
while(counting<50){
	counting += 5;
	console.log(counting);
}

var timeLeft = 11;
while(timeLeft>0){
	timeLeft--;
	if(timeLeft == 0) {
		console.log("Blast off")
	} else {
		console.log(timeLeft);
	}
}

//-----For Loop
for(waffles = 0; waffles < 10; waffles++){
	console.log("I wasnt " + waffles + " waffles");
}





