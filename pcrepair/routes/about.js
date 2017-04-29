var express = require('express');
var router = express.Router();

// '/about' is automatic
router.get('/', function(req, res, next) {
// renders the about template
  res.render('about', {
    title: 'About'
  });
});

// export if you want to use this module in another file
module.exports = router;
