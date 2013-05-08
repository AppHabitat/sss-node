# ScreenshotShark in Node

               ,
             .';
         .-'` .'
       ,`.-'-.`\
      ; /     '-'
      | \       ,-,
      \  '-.__   )_`'._
       '.     ```      ``'--._
      .-' ,                   `'-.
       '-'`-._           ((   o   )
        jgs   `'--....(`- ,__..--'
                       '-'`

[ascii art cred](http://www.retrojunkie.com/asciiart/animals/sharks.htm)

This is the Node.js library for creating screenshot URLs using the ScreenshotShark service.

We like CoffeeScript:

```coffee

sss = require('sss-node')('api-key', 'secret')

opts =
  url: 'http://www.google.com'
  op:  'f:200:200'

console.log sss(opts)
```

But, if you prefer vanilla JS:

```javascript

var sss = require('sss-node')('api-key', 'secret');

var opts = {
  url: 'http://www.google.com',
  op:  'f:200:200'
};

console.log(sss(opts));
```



Check out [ScreenshotShark](http://www.screenshotshark.com) for your screenshotting needs.
