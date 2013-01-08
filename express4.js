var express = require('express');
var app = express();
var bookRoutes = require('./bookRoutes');

app.configure(function() {

  app.set('views', __dirname);
  app.set('view engine', 'ejs');
  
  app.use(express.logger('dev'));
  app.use(express.static(__dirname)); 

  app.use(express.bodyParser());
  app.use(app.router);

});

// Book routes
app.get('/books', bookRoutes.getAll);
app.get('/books/:id', bookRoutes.viewOne);
app.get('/search', bookRoutes.search);
app.post('/search', bookRoutes.searchResults);

// Route for everything else
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');

