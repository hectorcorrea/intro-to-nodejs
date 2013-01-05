var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;

var server = http.createServer(function(req, res) {

  counter++;
  console.log("Request: " + req.url + " (" + counter + ")");
  
  if(req.url == "/sample.html") {

    fs.readFile("sample.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;

  }

  res.setHeader("Content-Type", "text/html");
  res.end("<p>Hello World. Request counter: <b>" + counter + "</b>.</p>");

});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);







// Long delay example
// if(req.url == "/longdelay.html") {
//
//   console.log("Processing long delay...");
//   setTimeout(function() {
//     res.setHeader("Content-Type", "text/html");
//     res.end("<p>Done with long delay. Request counter: <b>" + counter + "</b>.</p>");
//     console.log("Done with long delay.");
//   }, 10000);
//   return;
//
// }