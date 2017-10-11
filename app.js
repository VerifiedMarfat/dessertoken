var express = require('express')
var path = require('path');
var app = express()
var port = process.env.PORT || 8000

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'))
})

app.listen(port, function() {
  console.log('Running on http://localhost:8000');
})