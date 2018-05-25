var chroma = require('chroma-js');
var upperCase = require('upper-case');
var colors = require('./colors');

var scales = colors.reduce(function reduceColors(exports, color) {
  var shades = chroma
    .scale([chroma(color.light), chroma(color.dark)])
    .colors(10);
  var output = shades.reduce(function reduceShares(collection, shade, index) {
    var shadeName = upperCase(color.name.concat(index));
    collection[shadeName] = shade;
    if (color.alias) {
      var aliasName = upperCase(color.alias.concat(index));
      collection[aliasName] = shade;
    }
    return collection;
  }, {});
  return Object.assign(exports, output);
}, {});

module.exports = Object.assign(module.exports || {}, scales, {
  BLACK: '#000000',
  WHITE: '#ffffff',
});
