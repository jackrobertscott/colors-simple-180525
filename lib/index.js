var fs = require('fs');
var path = require('path');
var scales = require('./scales');

fs.writeFile(
  path.join(__dirname, '..', 'colors.json'),
  JSON.stringify(scales, null, 2),
  'utf8',
  function done() {
    console.log('created: colors.json');
  },
);
