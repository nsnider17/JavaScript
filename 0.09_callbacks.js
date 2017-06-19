
var fs = require('fs') // fs is built in, don't need to install like express

function getBulls(filepath, done){
	fs.readFile(filepath, function(err, bulls){
		// error handling
		if (err) return done(err);

		fs.readFile('0.09_bulls.dictionary', function(err, dict) {
			// error handling
			if (err) return done(err);

			compareBulls(bulls, dict);

		})
	})
	var compareBulls = function(bulls, dict){
		//turn the items from these files into arrays then split them
		dict = dict.toString().split('\n');
		bulls = bulls.toString().split('\n').filter(function(bulls){
		//Going over the dictionary, checking if the bulls are located in the dictionary. If so, return value
			return dict.indexOf(bulls) !== -1;
		})
		done(bulls)
	}
}



getBulls('0.09_bulls.txt', function(bulls){
	// if (err) return done(err);
	console.log(bulls)
})















