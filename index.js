(function() {
  var crypto, _;

  crypto = require('crypto');

  _ = require('underscore');

  exports.validate = function(options, hmac) {
    var cmp;
    cmp = crypto.createHash('sha1', secret).update("" + options.time + ":" + options.url + ":" + options.op).digest('hex');
    return cmp === hmac;
  };

  exports.screenshot = function(options) {
    var query;
    options = _.extend(options, {
      time: Math.round(new Date().getTime() / 1000),
      gravity: 'north',
      viewport: '1024x768',
      full: false,
      url: 'http://www.google.com/',
      op: 'r:200:120'
    });
    options.token = crypto.createHash('sha1', secret).update("" + options.time + ":" + options.url + ":" + options.op).digest('hex');
    query = querystring.stringify(options);
    return "http://localhost:8080/capture?" + query;
  };

}).call(this);
