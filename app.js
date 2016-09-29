var express = require('express');
var app = express();

var axios = require('axios');
var creds = require('./creds')

var sheetsId = creds.sheetsId;
var key = '?key=' + creds.key;
var sheet = '/values/Sheet1!';
var range = 'A:Z';

app.get('/googlesheets', function(req, res, next) {
  axios.get('https://sheets.googleapis.com/v4/spreadsheets/'
    + sheetsId 
    + sheet 
    + range 
    + key)
    .then(function(resp) {
      console.log(resp)
      return resp.data;
    })
    .then(data => res.send(data))
    .catch(function(error) {console.log(error)})
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});