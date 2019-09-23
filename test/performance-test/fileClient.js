var rudp = require('../../lib');
var dgram = require('dgram');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'data.pdf');

console.log(fs.statSync(filePath)['size'])
var data = fs.readFileSync(filePath);
console.log('file is ready to send')

var clientSocket = dgram.createSocket('udp4');

var client = new rudp.Client(clientSocket, '128.119.245.46', 3001);

client.on('close', function () {
  clientSocket.close();
});

client.send(data)