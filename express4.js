var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var bookRoutes = require('./bookRoutes2');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(__dirname)); 

app.use(urlencodedParser);

// Book routes
app.get('/books', bookRoutes.getAll);
app.get('/books/:id', bookRoutes.viewOne);
app.get('/search', bookRoutes.search);
app.post('/search', urlencodedParser, bookRoutes.searchResults);

// Route for everything else
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');

