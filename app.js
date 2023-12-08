const express = require('express');

const app = express();

require('dotenv').config()
//puerto 8082
const port = process.env.PORT;


app.use(express.static('public'));

app.get('/hello-world',  (req, res) => {
    res.send('Hello World');
  })
  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })