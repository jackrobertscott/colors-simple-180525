var fs = require('fs');
var path = require('path');
var scales = require('./scales');

fs.writeFile(
  path.join(__dirname, '..', 'index.json'),
  JSON.stringify(scales, null, 2),
  'utf8',
  function done() {
    console.log('created: index.json');
  },
);
