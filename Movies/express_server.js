/** @format */

var express = require('express');
var app = express();
var movie_data = require('./movie_data');
var uuid = require('uuid');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json(movie_data);
});

app.get('/:id', (req, res) => {
  const idd = parseInt(req.params.id);
  const found = movie_data.some(
    (movie) => movie.id === parseInt(req.params.id)
  );
  console.log(found);
  if (found) {
    res.json(
      movie_data.filter((movie) => movie.id === parseInt(req.params.id))
    );
  } else {
    res.sendStatus(400);
  }
});
console.log('some');

app.delete('/:id', (req, res) => {
  const found = movie_data.some(
    (movie) => movie.id === parseInt(req.params.id)
  );

  console.log(found);
  if (found) {
    movie_data = movie_data.filter(
      (movie) => movie.id !== parseInt(req.params.id)
    );
    res.json({ mgs: ' user delted', movie_data });
  } else {
    console.log('not found');
    res.sendStatus(555);
  }
});

app.post('/', (req, res) => {
  console.log(req.body);
  const m = {
    id: uuid.v4(),
    name: req.body.name,
    date: req.body.date,
  };
  console.log(m.id);
  console.log(m.date);
  console.log(m.name);
  if (!m.name || !m.date) {
    res.sendStatus(555);
  }
  movie_data.push(m);
  res.json({ msg: 'user added', movie_data });
});

app.put('/:id', (req, res) => {
  const found = movie_data.some((user) => user.id === parseInt(req.params.id));

  console.log(movie_data);

  if (found) {
    movie_data.forEach((movie) => {
      if (movie.id === parseInt(req.params.id)) {
        movie.name = req.body.name ? req.body.name : movie.name;
        movie.date = req.body.date ? req.body.date : movie.date;
        res.json({ msg: 'Movie updated', movie_data });
      }
    });
  }
});
app.listen(8004);


/*

http://localhost:8004
http://localhost:8004/2 
http://localhost:8004/2
http://localhost:8004
http://localhost:8004/2


*/