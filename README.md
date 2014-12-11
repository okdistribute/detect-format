detect-format
=============

Detects the format of a given buffer or string

[![build status](https://secure.travis-ci.org/karissa/detect-format.png)](http://travis-ci.org/karissa/detect-format)

It works a lot better if you give it a few lines.


```
var data = 'a,b,c\n1,2,3\n4,5,6\n7,8,9'
detectFormat(data)
{ separator : ',' }

var data = 'a\tb\tc\n1\t2\t3'
detectFormat(data)
{ separator : '\t' }

var data = 'a|b|c\n1|2|3'
detectFormat(data)
{ separator : '|' }

var data = 'a|b|c\n1|2|3\n1|2' // malformed ending here
detectFormat(data)
{ separator: false } 
```

