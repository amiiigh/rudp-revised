const net = require('net');
const fs = require('fs');
const path = require('path');
var args = process.argv.slice(2);
var filePath = args[2]
var serverPort = args[1]
var serverAddress = args[0]
var sync = fs.createReadStream(filePath);
var client = new net.Socket();
client.connect(serverPort, serverAddress);
sync.on('error', function(e) {
	console.error(e);
});
sync.on('open', function() {
	sync.pipe(client);
});
sync.on('finish', function() {
	socket.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});