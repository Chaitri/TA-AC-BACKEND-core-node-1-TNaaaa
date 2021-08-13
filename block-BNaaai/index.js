// 1. Use **URL** module to parse url informaton.

let url = require('url');
let sampleUrl =
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male';

let parsedUrl = url.parse(sampleUrl, true);
console.log(parsedUrl);

console.log('Pathname: ', parsedUrl.pathname);
console.log('Query: ', parsedUrl.query);
console.log(`Host: ${parsedUrl.host} , Protocol: ${parsedUrl.protocol}`);

// 2. Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.

/* 
Request URL: https://en.wikipedia.org/wiki/2020_Summer_Olympics
Request Method: GET
Status Code: 200 
Remote Address: 103.102.166.224:443
Referrer Policy: origin
*/
