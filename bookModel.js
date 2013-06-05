// Requires MongoDB database installed and running
// (see http://www.mongodb.org/downloads) plus
// the mongodb client driver (npm install mongodb)
//
// Note that the way I am connecting and disconnecting
// from the database in this example is NOT the recommended
// way. This is just to keep the example simple.
//
var MongoClient = require('mongodb').MongoClient;
var dbCollection = "books";
var dbUrl = "mongodb://localhost:27017/books";

var getAll = function(callback) {

  MongoClient.connect(dbUrl, function(err, db) {

    if(err) return callback(err);

    var collection = db.collection(dbCollection);
    collection.find().toArray(function(err, items){

      db.close()
      if(err) return callback(err);
      callback(null, items);

    });

  });

}


var getOne = function(id, callback) {

  MongoClient.connect(dbUrl, function(err, db) {

    if(err) return callback(err);

    var collection = db.collection(dbCollection);
    var query = {key: id};
    collection.find(query).toArray(function(err, items){

      db.close()
      if(err) return callback(err);
      callback(null, items[0]);

    });

  });

}


module.exports = {
  getAll: getAll,
  getOne: getOne
}