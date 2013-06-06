// A chat server over TCP
// connect with "telnet localhost 9000" or "nc localhost 9000"
var net = require("net");
var port = 9000;
var server = net.createServer();
var clients = []

server.on('connection', function(client) {

  clients.push(client);
  client.write("Welcome\n");

  client.on('data', function(data) {

    console.log("Broadcasting to " + (clients.length-1) + " clients: " + data.toString());

    // broadcast the message to all other clients
    clients.forEach(function(otherClient) {
      if(otherClient != client) {
        otherClient.write("Somebody said: " + data + "\r\n");
      }
    });

  });

  client.on('close', function() {
    // remove the closed client from the list
    // (so that we don't broadcast to it anymore)
    console.log('client disconnected');
    var clientIndex = clients.indexOf(client);
    clients.splice(clientIndex, 1);
  });

});

console.log("Starting chat server on port:" + port);
server.listen(port);
