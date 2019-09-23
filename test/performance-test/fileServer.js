var rudp = require('../../lib');
var dgram = require('dgram');
var fs = require('fs');
var serverSocket = dgram.createSocket('udp4');

serverSocket.bind(3001);

var server = new rudp.Server(serverSocket);

server.on('close', function () {
  serverSocket.close();
});

server.on('connection', function (connection) {
  connection.on('data', function (data) {
  	fs.appendFileSync('received', data)
  	// console.log(data.toString())
  	console.log(fs.statSync('received')['size'])
  });
});