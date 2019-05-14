var iconv = require('iconv-lite');
var request = require('request');

request.get('https://s.weibo.com').pipe(iconv.decodeStream('gbk')).collect(function(err, body) {
    console.log(body);
});