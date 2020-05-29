// used to manage script dependencies (http module or http library)
const http = require('http');

// createServer is part of the http module 

const server = http.createServer( (req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
