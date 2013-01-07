var express = require('express');
var app = express();

// Log the requests
app.use(express.logger('dev'));

// Serve static files
app.use(express.static(__dirname)); 

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');

