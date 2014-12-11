var test = require('tape')
var detectFormat = require('./')

test('simple csv data', function (t) {
  var data = 'a,b,c\n1,2,3'
  var result = detectFormat(data)
  t.equals(result.separator, ',')
  t.end()
})

test('multiple lines of csv data', function (t) {
  var data = 'a,b,c\n1,2,3\n4,5,6\n7,8,9'
  var result = detectFormat(data)
  t.equals(result.separator, ',')
  t.end()
})

test('simple tsv data', function (t) {
  var data = 'a\tb\tc\n1\t2\t3'
  var result = detectFormat(data)
  t.equals(result.separator, '\t')
  t.end()
})


test('simple | data', function (t) {
  var data = 'a|b|c\n1|2|3'
  var result = detectFormat(data)
  t.equals(result.separator, '|')
  t.end()
})




test('malformed | data', function (t) {
  var data = 'a|b|c\n1|2|3\n1|2'
  var result = detectFormat(data)
  t.equals(result.separator, false)
  t.end()
})