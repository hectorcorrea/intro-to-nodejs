var express = require('express');
var app = express();

app.configure(function() {

  app.set('views', __dirname);
  app.set('view engine', 'ejs');
  
  app.use(express.logger('dev'));
  app.use(express.static(__dirname)); 

  app.use(express.bodyParser());
  app.use(app.router);

});


// Define some demo data
var bookList = [];
bookList.push({title: "Thinking, Fast and Slow", author: "Daniel Kahneman"});
bookList.push({title: "The Signal and the Noise: Why So Many Predictions Fail — but Some Don't", author: "Nate Silver"});

// Render a list of books
app.get('/books', function(req, res){
  res.render("bookList.ejs", {books: bookList});
});

// Render an individual book
app.get('/books/:id', function(req, res){
  var index = parseInt(req.params.id) - 1;
  var bookData = bookList[index]; 
  res.render("bookView.ejs", {book: bookData});
});

// Search form (GET)
app.get('/search', function(req, res){
  res.render("bookSearch.ejs");
});

// Search form (POST)
app.post('/search', function(req, res){
  var searchText = req.body.searchText;
  res.send("<p>Your search for <b>" + searchText + "</b> returned no results</p>");
});

// Routes for everything else
app.get('*', function(req, res){
  res.send('Hello World');
});


// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');

