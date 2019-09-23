var rudp = require('../../../lib/');
var dgram = require('dgram');

var socket = dgram.createSocket('udp4');
var ssocket = dgram.createSocket('udp4');
var port = 10000 + Math.floor(Math.random() * (65535 - 10000))
socket.bind(port)
ssocket.bind(port + 1);

var client = new rudp.Client(socket, '54.145.75.108', 8823);
var client2 = new rudp.Client(ssocket, '54.145.75.108', 8823);

client.send(Buffer.from('hey'))
client2.send(Buffer.from('hey'))
// process.stdin.resume();

// process.stdin.on('data', function (data) {
//   client.send(data);
// });

client.on('data', function (data) {
  console.log('1:', socket.address().address, ':', socket.address().port,' -> ', data.toString('utf8').trim());
});
client2.on('data', function (data) {
  console.log('2:', ssocket.address().address, ':', ssocket.address().port,' -> ', data.toString('utf8').trim());
});