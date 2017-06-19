

/*  

	iffe = Immediate-invoked Function Expression

*/


(function printNum(){
	var a = 5;
	console.log(a);
})();

(function counter(){
	var i = 0;
	while (i < 11) {
		console.log(i);
		i++;
	} 
})();