const http = require('http');
const url = require('url');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;
  if (req.method === 'GET' && pathName === '/') {
    res.end('Welcome to homepage.');
  } else if (req.method === 'GET' && pathName === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>This is all about NodeJS</h2>');
    res.end();
  } else if (req.method === 'POST' && pathName === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(`${JSON.stringify({ message: 'this is a post request' })}`);
  }
}

server.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});
