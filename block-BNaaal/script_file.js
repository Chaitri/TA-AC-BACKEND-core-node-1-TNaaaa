const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Server is up!');
}

server.listen(4000, 'localhost', () => {
  console.log('Server is listening on port 4000');
});
