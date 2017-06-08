

//-----------------------------------------------Functions


function greeting(){
	console.log("Hi Guys")
}
greeting();


var currentWeather = "rainy."
function weather(){
	console.log("Right now it is " + currentWeather)
}
weather();

//------------------Functions with Parameters

function shoes(brand){
	console.log("Man those " + brand + " are really nice.")
}
shoes("Crocs")

function add(x, y){
	console.log(x + y);
}


//------------------Functions that return data

//1
function add(x, y){
	return x+y;
}
var add = add(7, 3);
console.log("1. "+ add);


//2
function sub(x, y){
	return x-y;
}
var sub = sub(15, 5);
console.log("2. "+ sub);


//3
function mul(x, y){
	return x*y;
}
var mul = mul(5, 2);
console.log("3. "+ mul);


//4
function div(x, y){
	return x/y;
}
var div = div(5, 0.5);
console.log("4. "+ div);


//5
function mod(x, y){
	return x%y;
}
var mod = mod(10, 2);
console.log("5. "+ mod);


//Functions Challenges

function stringAdd(string1, string2) {
	return string1 + " " + string2;
}
var fullString = stringAdd("Hello", "World")
console.log(fullString);


function billTotal(water, electric, house, random) {
	return water + electric + house + random;
}
var totalBillCost = billTotal(100, 125, 270, 85);
console.log("You owe $" + totalBillCost + " this month.");

function sodaTotal(cost, amount, tax) {
	//return (amount*cost)+(amount*tax);
	return ((cost*tax)*amount)+(cost*amount);
}
var totalSodaCost = sodaTotal(0.99, 100, 0.07);
console.log("Your sodas will cost you $" + totalSodaCost + ".");

// Create a calculator function

function calculator(num1, operator, num2) {
	if(operator == "*") {
		return num1*num2;
	} else if(operator == "/") {
		return num1/num2;
	} else if(operator == "+") {
		return num1+num2;
	} else if(operator == "-") {
		return num1-num2;
	} else if(operator == "%") {
		return num1%num2;
	} else {
		console.log("Error");
	}
}

var calcAnswer = calculator(5, "-", 2);
console.log(calcAnswer);


























