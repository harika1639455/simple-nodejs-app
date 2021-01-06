var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(' version v3.0.0 is deployed ');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your nodejs app is listening at port %s',  port);
});
