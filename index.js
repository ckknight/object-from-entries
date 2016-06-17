'use strict';
function objectFromEntries(entries) {
  var result = {};
  var len = entries.length;
  for (var i = 0; i < len; ++i) {
    var entry = entries[i];
    var key = entry[0];
    var value = entry[1];
    result[key] = value;
  }
  return result;
};
module.exports = objectFromEntries;
