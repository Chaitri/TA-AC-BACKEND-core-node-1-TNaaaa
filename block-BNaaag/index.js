let fs = require('fs');

fs.readFile('./content.md', (err, content) => {
  if (err) console.log(err);
  else console.log(content.toString());
});

// Sync code from fs module

let data = 'Adding more content to file - sync';

fs.appendFileSync('./content.md', data);

// Async code from fs module

let newData = 'File overwritten - async';

fs.writeFile('./content.md', newData, (err) => {
  if (err) console.log(err);
  else {
    console.log('File written successfully!');
    console.log(fs.readFileSync('./content.md').toString());
  }
});

// Buffer

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write('Welcome to Buffer');
console.log('New buffer content ', buff1.toString());
