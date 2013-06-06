// An echo server over TCP
// connect with "telnet localhost 9000" or "nc localhost 9000"
var net = require("net");
var port = 9000;
var server = net.createServer();

server.on('connection', function(client) {

  console.log("Somebody just connected...");
  client.write("Hello stranger\n");

  client.on('data', function(data) {
    client.write("You said: " + data + "\r\n");
  });

  client.on('end', function() {
    console.log('client disconnected');
  });
});

console.log("Starting chat server on port:" + port);
server.listen(port);
