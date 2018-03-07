'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));
app.use(express.static('node_modules'));

app.get('/api/:fixture', function (req, res) {
  var fixture = require('./fixtures/' + req.params.fixture);
  res.send(fixture.data);
});

app.post('/api/test', function (req, res) {
  console.log(req.body.test);
  res.send('Success');
});

app.listen(3000, function () {
  console.log('Server now listening on port 3000!');
});
