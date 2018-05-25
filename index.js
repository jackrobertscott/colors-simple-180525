var chroma = require('chroma-js');
var upperCase = require('upper-case');
var colors = require('./colors');

var scales = colors.reduce(function reduceColors(exports, color) {
  var changeable = chroma(color.color);
  var shades = chroma
    .scale([changeable.darken(2.5), changeable, changeable.brighten(2.5)])
    .colors(10);
  var output = shades.reduce(function reduceShares(collection, shade, index) {
    var shadeName = upperCase(color.name.concat(index));
    collection[shadeName] = shade;
    return collection;
  }, {});
  return Object.assign(exports, output);
}, {});

module.exports = Object.assign(module.exports || {}, scales);
