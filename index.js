var detectJsonStyle = require('detect-json-style')
var detectCsv = require('detect-csv')
/**
 * You should probably give me a few rows to improve accuracy.
 * C'mon, it won't hurt you any.
 */

module.exports = function (data) {
  var json = detectJsonStyle(data)
  if (json)  return {
    format: 'json',
    style: json.style, 
    selector: json.selector // according to the JSONStream module
  }
  var csv = detectCsv(data)
  if(csv) return {
    format: 'csv',
    separator: csv.delimiter
  }
  // failed to detect
  return false
}

