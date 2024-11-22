const fs = require('fs');
const { clearScreenDown } = require('readline');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  err?console.log(err):console.log(data);
});
