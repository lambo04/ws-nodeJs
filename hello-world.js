const http = require('http');
const fs = require('fs');


console.log('HELLO WORLD');



const server = http.createServer((req, res) => {
  res.end('<h1>Hello Node!!!!</h1>');
}).listen(3000)

