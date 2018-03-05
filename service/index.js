const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/rsvp/add', function(req, res) {
  console.log(req.body);
  const { name } = req.body;

  res.send("add " + name);
});

app.post('/rsvp/remove', function(req, res) {
  console.log(req.body);
  const { name } = req.body;

  res.send("remove " + name);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
