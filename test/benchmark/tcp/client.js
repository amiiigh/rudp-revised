const net = require('net');
const fs = require('fs');
const path = require('path');
var args = process.argv.slice(2);
var filePath = args[2]
var serverPort = args[1]
var serverAddress = args[0]
console.log('preparing the file to send ...')
console.log('the file size:', fs.statSync(filePath)['size'])
var data = fs.readFileSync(filePath);
console.log('the file is ready to send')
var client = new net.Socket();
client.connect(serverPort, serverAddress, () => {
  console.log('connected to server!');
  client.write(data);
});

client.on('end', () => {
  console.log('disconnected from server');
});