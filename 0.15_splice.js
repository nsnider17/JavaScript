
//array of letters
var myArray = ['a', 'b', 'c', 'd', 'e'];

// Finds index of letter and assigns it to "removeItem" variable
var removeItem = myArray.indexOf('b')

//using "removeItem" variable, 'b' is removed
console.log(myArray.splice(removeItem, 1))
console.log(myArray)

//now the letter 'c' is in the location of 'b', and it will be replaced with 'elephant'
console.log(myArray.splice(removeItem, 1, 'elephant'))
console.log(myArray)