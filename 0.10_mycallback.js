var fs = require('fs');

function getStates(filepath, done){
	fs.readFile(filepath, function(err, states){
		if (err) return done(err);

		fs.readFile('0.10_mycallback.dictionary', function(err, dict){
			if (err) return done(err);

			compareStates(states, dict);
		})
	})

	var compareStates = function(states, dict){
		dict = dict.toString().split('\n');
		states = states.toString().split('\n').filter(function(states){
			return dict.indexOf(states) !== -1;
		})
		done(states)
	}
}

getStates('0.10_mycallback.txt', function(states){
	console.log(states)
})


console.log("Hi");

var printInThreeSeconds = setTimeout(function(){
	console.log("Hello");
}, 1000);

// console.log("hello");