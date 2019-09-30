var rudp = require('../../../lib');
var dgram = require('dgram');
var fs = require('fs');
var args = process.argv.slice(2);
var serverPort = args[0]

var dest = fs.createWriteStream('received.json');
var serverSocket = dgram.createSocket('udp4');
serverSocket.bind(serverPort);
console.log('server is running on ', serverPort)
_connections = {};
var timerIsRunning = false
var startTime = 0
var endTime = 0
var totalSize = 0
var fileSize = 81664
serverSocket.on('message', function (message, rinfo) {
	var addressKey = rinfo.address + rinfo.port;
	var connection;
	if (!_connections[addressKey]) {
	  connection = new rudp.Connection(new rudp.PacketSender(serverSocket, rinfo.address, rinfo.port));
	  connection.on('data', data => {
		if (!timerIsRunning) {
				timerIsRunning = true
				startTime = process.hrtime();
			}
	  	totalSize += data.length
	  	if (totalSize === fileSize) {
	  		endTime = process.hrtime(startTime);
			console.log('File',totalSize,  'has been received', endTime[1]/1000000, ' ms')
	  	}
		dest.write(data)
	  })
	  _connections[addressKey] = connection;
	} else {	  
	  connection = _connections[addressKey];
	}
	var packet = new rudp.Packet(message);

	if (packet.getIsFinish()) {
		console.log('packet is finish')
	  delete _connections[addressKey];
	} else {
	  setImmediate(function () {
	    connection.receive(packet);
	  });
	}

});