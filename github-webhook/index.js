const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/addteam', (req, res) => {
  res.end();
});

app.listen(3000, () => console.log('Server listening on 3000'));