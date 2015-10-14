//Module dependencies
var express = require('express');

// Express settings
var app = express();
app.use(express.static('public'));

//Template settings
app.set('view engine', 'jade');
app.set('views', './views');

// Routes
app.get('/', function(req, res){
	res.render('pages/landing');
});

// Start the server
app.listen(3000);
console.log('Express running on port 3000');