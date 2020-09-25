var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(' Hi there!! I am using CloudNative tools \n');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your nodejs app is listening at port %s',  port);
});
