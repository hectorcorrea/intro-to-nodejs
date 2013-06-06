// A simple chat program using Node.js and Socket.io
// Example largely borrowed from: 
//    Socket.IO Real-time Web Application Development
//    by Rohit Rai
var express = require("express");
var socketio = require("socket.io");
var app = express();
var http = require("http");
var server = http.createServer(app);
var port = 3000;
var serverUrl = "127.0.0.1";

if(port == 80) {
  serverUrl = null;//"192.168.1.103";  
}

// Log the requests
app.use(express.logger("dev"));

// Serve static files
app.use(express.static(__dirname)); 

// Route for everything else.
app.get("*", function(req, res){
  res.send(404, "Not found");
});

// Fire up Express
server.listen(port, serverUrl);
console.log("Listening at http://" + (serverUrl ? serverUrl : "localhost" ) + ":" + port);

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
    console.log("A message was received");
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

