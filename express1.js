var express = require('express');
var app = express();

// Log all requests
app.use(express.logger('dev'));

// Serve static files
app.use(express.static(__dirname)); 

// Route for specific URL
app.get('/books', function(req, res){
  res.send('A list of books goes here');
});

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');

