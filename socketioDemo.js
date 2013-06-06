// A simple chat program using Node.js and Socket.io
// Example largely borrowed from: 
//    Socket.IO Real-time Web Application Development
//    by Rohit Rai
var express = require("express");
var socketio = require("socket.io");
var app = express();
var http = require("http");
var net = require("net");
var server = http.createServer(app);
var port = 80;
var dns = require('dns');

// Log the requests
app.use(express.logger("dev"));

// Serve static files
app.use(express.static(__dirname)); 

// Redirect to the chat.html page
app.get("/", function(req, res){
  res.redirect("chat.html");
});

// Route for everything else.
app.get("*", function(req, res){
  res.send(404, "Not found");
});

if(port == 80) {
  //Fire up Express on port 80 (default IP)
  server.listen(80);
  dns.lookup(require('os').hostname(), function (err, add, fam) {
    console.log("Listening at http://" + add);
  });
}
else {
  //Fire up Express on localhost/port
  server.listen(port, "localhost");
  console.log("Listening at http://localhost:" + port);
}

// Wire up Socket.io
var io = socketio.listen(server);
io.sockets.on("connection", function(socket) {
  
  // When somebody connects, greet them...
  var message = {
    type: "serverMessage",
    message: "Welcome to the chat!"
  };
  socket.send(JSON.stringify(message));
  
  // When somebody sends a message...
  socket.on("message", function(message) {
    message = JSON.parse(message);
    if(message.type == "userMessage") {
      // ...broadcast the message to everybody else...
      socket.broadcast.send(JSON.stringify(message));
      // ...and also to the original sender.
      message.type = "myMessage";
      socket.send(JSON.stringify(message));
    }
  });

});

