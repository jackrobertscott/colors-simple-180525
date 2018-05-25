const fs = require('fs');
const path = require('path');
const scales = require('./scales');

const properties = Object.keys(scales).reduce((props, key) => {
  return props.concat(`  ${key}: '${scales[key]}',\n`);
}, '\n');
const contents = `module.exports = {${properties}};`;

fs.writeFile(
  path.join(__dirname, '..', 'index.js'),
  contents,
  'utf8',
  function done() {
    console.log('done');
  },
);
