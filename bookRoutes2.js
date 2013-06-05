var model = require('./bookModel')

getAll = function(req, res) {
  model.getAll(function(err, bookList){
    if(err) {
      console.log(err);
      res.send("Oops!");
    }
    else {
      res.render("bookList.ejs", {books: bookList});
    }
  });
}

viewOne = function(req, res) {
  var id = parseInt(req.params.id, 10);
  model.getOne(id, function(err, bookData) {
    if(err) {
      console.log(err);
      res.send("Oops!");
    }
    else {
      res.render("bookView.ejs", {book: bookData});
    }
  });
}

search = function(req, res) {
  res.render("bookSearch.ejs");
}

searchResults = function(req, res) {
  var searchText = req.body.searchText;
  res.send("<p>Your search for <b>" + searchText + "</b> returned no results</p>");
}

module.exports = {
  getAll: getAll,
  viewOne: viewOne, 
  search: search,
  searchResults: searchResults
}
