const http = require('http');
const PORT = 4444;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('Request Method: ', req.method);
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Server response.</h1>');
}

server.listen(PORT, 'localhost', () => {
  console.log('Server is listening on port ', PORT);
});
