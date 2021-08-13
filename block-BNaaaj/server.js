let { parse } = require('url');

let parsedUrl = parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);

console.log(
  `Query String: ${JSON.stringify(parsedUrl.query)} , Pathname: ${
    parsedUrl.pathname
  } , Protocol: ${parsedUrl.protocol}`
);
