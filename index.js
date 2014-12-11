/**
 * You should probably give me a few rows to improve accuracy.
 * C'mon, it won't hurt you any.
 */

module.exports = function (data) {
  if (typeof data != 'string') {
    data = data.toString();
  }

  if (isJSON(data)) return { format: 'json' }

  var delimiters = [',', '\t', '|'];

  for (var i in delimiters) {
    var format = delimiters[i];

    var result = tryDelimiter(data, format);
    if (result) {
      return {
        format: 'csv',
        separator: format
      }
    }
  }
  return {
    format: false,
    separator: false
  }
}

function isJSON(data) {
  try {
    JSON.parse(data)
    return true
  } catch (err) {
    return false
  }
}

function tryDelimiter(data, delimiter) {
  var rows = data.split('\n');
  var numColumns;

  if (rows.length == 1) {
    // you arent giving me that much info but I'll try, I guess.
    var row = splitDelimiter(rows[0], delimiter);
    return row.length > 0;
  }

  for (var i in rows) {
    var theRow = rows[i]
    if (theRow.indexOf(delimiter) < 0) return false

    var row = splitDelimiter(theRow, delimiter);

    if (i == 0) {
      numColumns = row.length;
    }
    else {
      if (numColumns != row.length) {
        return false;
      }
    }
  }
  return true;
}

function splitDelimiter(row, delimiter) {
  return row.split(delimiter);
}