// Use this file to initialize a MongoDB 
// database with some sample data.
// Usage
//    mongo < initDB.js

use books;
for(i=1; i<=20; i++) {
  var book = {
    title: "Book #" + i,
    author: "Author #" + i,
    key: i
  };
  db.books.insert(book);
}