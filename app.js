var express = require('express');
var app = express();

var axios = require('axios');
var creds = require('./creds')

app.use(express.static('public'));

var sheetsId = creds.sheetsId;
var key = '?key=' + creds.key;
var sheet = '/values/Sheet1!';
var range = 'A:Z';

app.get('/googlesheets', function(req, res, next) {
  axios.get('https://sheets.googleapis.com/v4/spreadsheets/'
    + sheetsId 
    + sheet 
    + range 
    + key
  )
  .then(resp => res.send(resp.data))
  .catch(error => console.log(error))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});