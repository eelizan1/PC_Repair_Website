var express = require('express');
var router = express.Router();
// to bring in json
var fs = require('fs');

var results;
fs.readFile('json/services.json', 'utf8', function(err, data) {
  if(err) {
    throw err;
  } else {
    results = JSON.parse(data);
  }
});


router.get('/', function(req, res, next) {
// renders the index template
  res.render('services', {
    title: 'Services',
    // pass along JSON in services
    services: results
  });
});

// export if you want to use this module in another file
module.exports = router;
