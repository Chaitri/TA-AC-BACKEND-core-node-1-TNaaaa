const http = require('http');
const url = require('url');

// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

const serverQ1 = http.createServer(handleRequestQ1);
serverQ1.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

function handleRequestQ1(req, res) {
  console.log('Request object: ', req);
  console.log('Response object: ', res);
}

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

const serverQ2 = http.createServer(handleRequestQ2);
serverQ2.listen(5100, () => {
  console.log('Server is listening on port 5100');
});

function handleRequestQ2(req, res) {
  res.end('My first server in NodeJS');
}

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

const serverQ3 = http.createServer(handleRequestQ3);
serverQ3.listen(5555, () => {
  console.log('Server is listening on port 5555');
});

function handleRequestQ3(req, res) {
  console.log(req.headers);
  res.end(req.headers['user-agent']);
}

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

const serverQ4 = http.createServer(handleRequestQ4);
serverQ4.listen(5566, () => {
  console.log('Server is listening on port 5566');
});

function handleRequestQ4(req, res) {
  console.log('Request URL: ', req.url, ' and Request Method: ', req.method);
  res.end(`Request URL: ${req.url} and Request Method: ${req.method}`);
}

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

const serverQ5 = http.createServer(handleRequestQ5);
serverQ5.listen(7000, () => {
  console.log('Server is listening on port 7000');
});

function handleRequestQ5(req, res) {
  res.setHeader('Content-Type', 'application/JSON');
  res.end(JSON.stringify(req.headers));
}

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

const serverQ6 = http.createServer(handleRequestQ6);
serverQ6.listen(3333, () => {
  console.log('Server is listening on port 3333');
});

function handleRequestQ6(req, res) {
  res.statusCode = 202;
  res.end('Status Code set to - 202.');
}

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

const serverQ7 = http.createServer(handleRequestQ7);
serverQ7.listen(8000, () => {
  console.log('Server is listening on port 8000');
});

function handleRequestQ7(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

const serverQ7 = http.createServer(handleRequestQ7);
serverQ7.listen(8000, () => {
  console.log('Server is listening on port 8000');
});

function handleRequestQ7(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

const serverQ8 = http.createServer(handleRequestQ8);
serverQ8.listen(8888, () => {
  console.log('Server is listening on port 8888');
});

function handleRequestQ8(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

const serverQ9 = http.createServer(handleRequestQ9);
serverQ9.listen(5050, () => {
  console.log('Server is listening on port 5050');
});

function handleRequestQ9(req, res) {
  console.log(`Request method: ${req.method}`);
  res.setHeader('Content-Type', 'text/html');
  res.end('<h2>posted for first time</h2>');
}

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

const serverQ10 = http.createServer(handleRequestQ10);
serverQ10.listen(2345, () => {
  console.log('Server is listening on port 2345');
});

function handleRequestQ10(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Chaitri');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Chaitri</h2>');
  } else {
    res.statusCode = 404;
    res.end('No such page / directory');
  }
}

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

function handleRequestQ11(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<form>
    <input type="text" placeholder="Enter your name here" />
    <input type="email" placeholder="sample@xyz.com" />
    </form>`);
  } else if (req.method === 'POST' && req.url === '/users') {
    res.end('Posted for the second time');
  } else {
    res.statusCode = 404;
    res.end('No such page / directory');
  }
}

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

const serverQ12 = http.createServer(handleRequestQ12);
serverQ12.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

function handleRequestQ12(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  console.log('Pathname: ', pathname);
  console.log('URL: ', req.url, ' Pathname: ', pathname);
  let email = parsedUrl.query;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(email));
}
