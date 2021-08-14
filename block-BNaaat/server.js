const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let pathname = url.parse(req.url).pathname;
  if (req.method === 'GET') {
    if (pathname === '/file') {
      res.setHeader('Content-Type', 'text/html');
      fs.readFile('./node.html', (err, content) => {
        if (err) console.log(err);
        else {
          res.end(content);
        }
      });
    } else if (pathname === '/stream') {
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream('./node.html').pipe(res);
    }
  } else {
    res.writeHead(404);
    res.end('No such file / directory');
  }
}

server.listen(5000, () => {
  console.log('Server is listening to port: 5000');
});
