# Simple google sheets as db

## Setup

Add a `creds.js` file with keys and sheet. For example:
```javascript
var sheetsId = 'YOUR GOOGLE SHEETS ID';
var key = 'YOUR KEY'
module.exports = { sheetsId, key } 
```

Also `npm install`

## Run

`node app.js`