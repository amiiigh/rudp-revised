const net = require('net');
const fs = require('fs');
const path = require('path');
var chalk    = require('chalk');
var args = process.argv.slice(2);
var filePath = args[2]
var serverPort = args[1]
var serverAddress = args[0]
var readStream = fs.createReadStream(filePath)
var client = new net.Socket()
var timerIsRunning = false
var startTime = 0
var endTime = 0
client.connect(serverPort, serverAddress);
readStream.on('error', function(e) {
	console.error(e);
});
readStream.on('data', function(chunk) {
	if (!timerIsRunning) {
		timerIsRunning = true
		startTime = process.hrtime();
	}
	client.write(chunk)
});

readStream.on('end', function() {
	var endTime = process.hrtime(startTime);
	console.log(chalk.bold.green('File has been sent', endTime[1]/1000000, ' ms'))
	client.end();
});

client.on('end', () => {
  console.log(chalk.bold.yellow('Disconnected from server'))
});