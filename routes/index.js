var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var app = express()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/route', function(req, res) {
  const body = req.body;
  const SendEmail = function() {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'user',
        pass: 'password'
      }
    });
    
    var mailOptions = {
      from: 'me',
      to: 'me@me',
      subject: 'From Website',
      text: `Imie: ${body.name}
             Adres e-mail: ${body.email}
             Treść wiadomości: ${body.message}`      
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    } 
    SendEmail();


    res.redirect('/')
});


module.exports = router;
