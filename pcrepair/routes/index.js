var express = require('express');
var router = express.Router();

/* GET home page. */
// 'localhost:3000/'
router.get('/', function(req, res, next) {
// renders the index template
  res.render('index', {
    title: 'Home'
  });
});

// export if you want to use this module in another file
module.exports = router;
