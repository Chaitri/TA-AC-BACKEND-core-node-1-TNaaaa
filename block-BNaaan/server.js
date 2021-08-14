const http = require('http');

let handleRequest = function (req, res) {
  console.log('Request headers: ', req.headers);
  console.log('Request method: ', req.method, ' URL: ', req.url);
  res.end('Hello! =)');
};

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
