var rudp = require('../../../lib');
var dgram = require('dgram');
var fs = require('fs');
var chalk = require('chalk')
var path = require('path');
var args = process.argv.slice(2);
var filePath = args[2]
var serverPort = args[1]
var serverAddress = args[0]
var timerIsRunning = false
var startTime = 0
var endTime = 0
var clientSocket = dgram.createSocket('udp4')
var readStream = fs.createReadStream(filePath)
var client = new rudp.Client(clientSocket, serverAddress, serverPort);
var totalDataSize = 0
readStream.on('data', function(chunk) {
	if (!timerIsRunning) {
		timerIsRunning = true
		startTime = process.hrtime();
	}
	totalDataSize += chunk.length
	client.send(chunk)
});

readStream.on('end', function() {
	var endTime = process.hrtime(startTime);
	console.log(chalk.bold.green('File',totalDataSize,  'has been sent', endTime[1]/1000000, ' ms'))
	client.close()
	// clientSocket.close()
});