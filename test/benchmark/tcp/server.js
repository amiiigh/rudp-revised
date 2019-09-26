const net = require('net');
const fs = require('fs');
var args = process.argv.slice(2);
var serverPort = args[0]
var dest = fs.createWriteStream('received.json');
const server = net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  console.log('new client connected ', socket.name);
  socket.on('end', () => {
    console.log('client disconnected');
  });
  socket.on('data', (data) => {
    console.log(data.toString())
    dest.write(data);
  })
});

server.on('error', (err) => {
  throw err;
});

server.listen(serverPort, '0.0.0.0', () => {
  console.log('server has started');
}); 