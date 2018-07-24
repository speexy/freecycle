// server.js

const express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');


var transporter = nodeMailer.createTransport({
    host      : '<justemails.org>',
    port      : '<portnumeber>', //number, obviously, here as string to not screw up formatting
    ignoreTLS: false,
    tls :{rejectUnauthorized: false},
    secure :false,
    auth: {
        user: '<email@justemails.org>',
        pass: "<password>",
    }
});

const app = express();
const port = process.env.PORT || 3000;
const baseUrl = process.env.HEROKU_URL || "http://localhost:8000" ;


app.use('/', express.static(path.join(__dirname + 'public')))

app.listen(port, function(req, res){
  console.log('Server is running at port: ',port);
  console.log('baseUrl', baseUrl)
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", baseUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/favicon',  express.static(__dirname + '../static/favicon.ico'))


app.post( '/api/send', bodyParser.json(), function(req,res){

  var img = baseUrl+req.body.image
  var mailOptions = {
    from: 'jennifer.meyer@posteo.de',
    to: 'jennifer.meyer@posteo.de',
    replyTo: req.body.userEmail,
    subject: `Freecycle Reservation für ${req.body.title} von ${req.body.userName}`,
    text: `${req.body.userName} schreibt: ${req.body.userMessage} email: ${req.body.userEmail}, telegram: ${req.body.userTelegram}`,
    html: `<p><b>
              ${req.body.userName} schreibt:
          </b></p>
          <p>${req.body.userMessage}</p>
          <p><b>Kontaktdaten</b></p>
          <p>email: ${req.body.userEmail}</p>
          <p>telegram: ${req.body.userTelegram}</p>
          <img src=${img} width='300px'></img>
          <p>category: ${req.body.category}<p>`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
} );
