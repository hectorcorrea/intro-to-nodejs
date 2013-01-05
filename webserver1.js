var http = require("http");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

  var now = new Date();
  console.log("Request received at: " + now);
  
  var html = "<p>Hello World, the time is <b>" + now + "</b>.</p>";
  res.end(html);

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);

