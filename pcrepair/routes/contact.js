var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
// renders the contact template
  res.render('contact', {
    title: 'Contact'
  });
});

// send email
router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'eelizanjr@gmail.com',
      pass: 'meganddiachiodos'
    }
  });

  var mailOptions = {
    from: '"Enrico Elizan ?" <eelizanjr@gmail.com>',
    to: 'eelizan1@student.gsu.edu',
    subject: 'Hello from PC Repair',
    text: 'You have a submission from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
    html: '<p>You have a submission from... </p> <ul><li>Name: '+req.body.name+' </li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions, function(err, info){
    if(err) {
      return console.log(err);
    }
      console.log("Message Send:" + info.response);
      // redirect to homepage
      res.redirect('/');

  });

});

// export if you want to use this module in another file
module.exports = router;
