var rudp = require('../../../lib');
var dgram = require('dgram');
var fs = require('fs');
var args = process.argv.slice(2);
var serverPort = args[0]

var dest = fs.createWriteStream('received.json');
var serverSocket = dgram.createSocket('udp4');
serverSocket.bind(serverPort);
console.log('server is running on ', serverPort)
var server = new rudp.Server(serverSocket);

server.on('connection', (connection) => {
	connection.on('data', (data) => {
		console.log(data.length)
  		dest.write(data)
  	});
});