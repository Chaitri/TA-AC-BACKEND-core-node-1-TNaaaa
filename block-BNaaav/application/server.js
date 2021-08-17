const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(handleRequest).listen(3000);

function handleRequest(req, res) {
  let file = url.parse(req.url).pathname;
  let path = './' + file;
  let fileType = req.url.split('.').pop();

  if (file === '/') fs.createReadStream('./index.html').pipe(res);

  if (fileType === 'css') {
    res.setHeader('Content-Type', 'text/css');
    let path = './' + file;
    fs.readFile(path, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }

  if (fileType === 'jfif' || fileType === 'jpg' || fileType === 'jpeg') {
    res.setHeader('Content-Type', 'image/jpeg');
    let path = './' + file;
    fs.readFile(path, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }

  if (fileType === 'svg') {
    res.setHeader('Content-Type', 'image/svg+xml');
    let path = './' + file;
    fs.readFile(path, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }

  if (fileType === 'js') {
    res.setHeader('Content-Type', 'application/x-javascript');
    let path = './' + file;
    fs.readFile(path, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }

  if (fileType === 'html') {
    res.setHeader('Content-Type', 'text/html');
    let path = './' + file;
    fs.readFile(path, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}
