var test = require('ava');
var upperCase = require('upper-case');
var colors = require('./lib/colors');
var scales = require('.');

colors.forEach(color => {
  var colorNameFirst = upperCase(color.name.concat(0));
  test(`should contain color: ${colorNameFirst}`, t =>
    t.true(typeof scales[colorNameFirst] === 'string'));
  var colorNameLast = upperCase(color.name.concat(9));
  test(`should contain color: ${colorNameLast}`, t =>
    t.true(typeof scales[colorNameLast] === 'string'));
});
