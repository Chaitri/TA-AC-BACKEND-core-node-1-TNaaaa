let os = require('os');
let { readFile, unlink, readFileSync } = require('fs');

console.log('Welcome to Nodejs');

console.log(
  `Number of cpus: ${
    os.cpus().length
  } , Free memory: ${os.freemem()} , Uptime: ${os.uptime} , Version: ${
    os.version
  }`
);

// Buffer

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write('Using buffers!');
console.log(buff1.toString());

// Blocking Code

console.log(readFileSync('./index.md', 'utf8'));

// Non-blocking Code

console.log(
  readFile('./index.md', 'utf8', (err, content) => {
    if (err) console.log('Error while reading file : ', err);
    else {
      console.log('Read successful: ');
      console.log(content);
    }
  })
);
