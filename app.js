const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const oneNumberRoute = require('./routes/getNumber');
const threeNumbersRoute = require('./routes/getThreeNumbers');

app.use('/', oneNumberRoute);
app.use('/', threeNumbersRoute);

app.get('/oneNumberPage', (req, res) => {
  res.render('oneNumberPage');
});
app.get('/threeNumbersPage', (req, res) => {
  res.render('threeNumbersPage');
});

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000!');
});
