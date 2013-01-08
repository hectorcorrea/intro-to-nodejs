// Define some demo data
var bookList = [];
bookList.push({title: "Thinking, Fast and Slow", author: "Daniel Kahneman"});
bookList.push({title: "The Signal and the Noise: Why So Many Predictions Fail — but Some Don't", author: "Nate Silver"});

getAll = function(req, res) {
  res.render("bookList.ejs", {books: bookList});
}

viewOne = function(req, res) {
  var index = parseInt(req.params.id) - 1;
  var bookData = bookList[index]; 
  res.render("bookView.ejs", {book: bookData});
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
