/** @format */

var http = require('http');
http
  .createServer((req, res) => {
    res.write('I am from past - http server');
    res.end();
  })
  .listen(8003);
