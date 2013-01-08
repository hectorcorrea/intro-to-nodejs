// Requires MongoDB database installed and running
// (see http://www.mongodb.org/downloads) plus
// the mongodb client driver (npm install mongodb)
var MongoClient = require('mongodb').MongoClient;
var dbCollection = "books";
var dbUrl = "mongodb://localhost:27017/books";

var AddDemoData = function() {

  console.log("Connecting...");
  MongoClient.connect(dbUrl, function(err, db) {

    if(err) {
      console.log("Error: " + err);
    }

    console.log("Adding data...");
    var collection = db.collection(dbCollection);
    var book1 = {key: "1", title: "Professional Node.js", author: "Pedro Teixeira"};
    collection.save(book1, function() { console.log("book 1 added"); });

    var book2 = {key: "2", title: "Node Up and Running", author: "Tom Hughes-Croucher"};
    collection.save(book2, function() { console.log("book 1 added"); });

  });

}

AddDemoData();