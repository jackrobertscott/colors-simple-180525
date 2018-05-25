var upperCase = require('upper-case');
var colors = require('./shades');

var scales = colors.reduce(function reduceColors(exports, color) {
  var output = color.shades.reduce(function reduceShares(
    collection,
    shade,
    index,
  ) {
    var shadeName = upperCase(color.name.concat(index));
    collection[shadeName] = shade;
    return collection;
  },
  {});
  if (color.alias) {
    var alias = color.shades.reduce(function reduceShares(
      collection,
      shade,
      index,
    ) {
      var aliasName = upperCase(color.alias.concat(index));
      collection[aliasName] = shade;
      return collection;
    },
    {});
  }
  return Object.assign(exports, output, alias);
}, {});

var manuals = {
  BLACK: '#000000',
  WHITE: '#ffffff',
};

module.exports = Object.assign(module.exports || {}, scales, manuals);
