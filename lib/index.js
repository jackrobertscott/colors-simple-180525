const fs = require('fs');
const path = require('path');
const scales = require('./scales');

/**
 * Prepare types for type definition file.
 */
const types = Object.keys(scales).reduce((file, key) => {
  return file.concat(`export declare const ${key}: string;\n`);
}, '');

/**
 * Create type definition file.
 */
fs.writeFile(
  path.join(__dirname, '..', 'index.d.ts'),
  types,
  'utf8',
  function done() {
    console.log('done: index.d.ts');
  },
);

/**
 * Create colors file.
 */
fs.writeFile(
  path.join(__dirname, '..', 'colors.json'),
  JSON.stringify(scales, null, 2),
  'utf8',
  function done() {
    console.log('done: colors.json');
  },
);
