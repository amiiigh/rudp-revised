const net = require('net');
const fs = require('fs');
var args = process.argv.slice(2);
var serverPort = args[0]
const server = net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  console.log('new client connected ', socket.name);
  socket.on('end', () => {
    console.log('client disconnected');
  });
  socket.on('data', (data) => {
      fs.appendFile('received.json', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
});

server.on('error', (err) => {
  throw err;
});

server.listen(8124, '0.0.0.0', () => {
  console.log('server has started');
}); 