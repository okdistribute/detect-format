detect-format
=============

[![build status](https://secure.travis-ci.org/karissa/detect-format.png)](http://travis-ci.org/karissa/detect-format)

Detects the format of a given buffer or string. It works a lot better if you give it a few lines.

```
var data = 'a,b,c\n1,2,3\n4,5,6\n7,8,9'
detectFormat(data)
{ format: 'csv', separator : ',' }

var data = 'a\tb\tc\n1\t2\t3'
detectFormat(data)
{ format: 'csv',  separator : '\t' }

var data = 'a|b|c\n1|2|3'
detectFormat(data)
{ format: 'csv',  separator : '|' }

var data = '[{"a": 1, "b": 2, "c": 3}, {"a": 4, "b": 5, "c": 6}]'
detectFormat(data)
{ format: 'json' }

var data = 'a|b|c\n1|2|3\n1|2' // malformed ending here
detectFormat(data)
{ format: 'csv',  separator: false } 
```

