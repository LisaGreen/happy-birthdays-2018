const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('./host.key', 'utf8');
const certificate = fs.readFileSync('./host.cert', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const app = express();

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/rsvp/add', function(req, res) {
  console.log(req.body);
  const { name, email, profId } = req.body;

  res.send("add " + name + email + profId);
});

app.post('/rsvp/remove', function(req, res) {
  console.log(req.body);
  const { name, email, profId } = req.body;

  res.send("remove " + name + email + profId);
});

