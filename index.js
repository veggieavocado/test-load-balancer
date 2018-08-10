const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log('포트 8080에서 서버 시작');
});

app.get('/', (req, res) => {
  res.status(200);
  res.send({ status: process.env.IP });
});
