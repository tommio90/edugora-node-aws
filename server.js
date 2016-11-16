var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello bitches')
})

app.listen(3007, function () {
  console.log('Example app listening on port' );
});