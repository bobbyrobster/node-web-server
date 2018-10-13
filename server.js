const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Rob',
    likes: [
      'apples'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});


app.get('/bad', (req, res) => {
  res.send({
    errorMessae: 'Bad'
  });
});

app.listen(3000, () => {
  console.log('Server is up');
});
