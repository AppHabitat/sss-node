# ScreenshotShark in Node

![Screenshot Shark](http://screenshotshark.com/images/logo.png)

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

Check out [Screenshot Shark](http://www.screenshotshark.com) for all your screenshotting needs.
