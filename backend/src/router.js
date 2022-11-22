const express = require("express");
const { connect } = require("./db");

const router = express.Router();

const movies = require("./data/movies");

router.get("/Films", (req, res) => {
  res.send(movies);
});

router.get("/Films/:id", (req, res) => {
  const parsedMovieId = parseInt(req.params.id, 10);
  const movie = movies.find((film) => film.id === parsedMovieId);

  if (movie) {
    res.status(200).send(movie);
  } else {
    res.status(404).send("Not Found");
  }
});

router.get("/Threefilm", (red, res) => {
  connect
    .query("SELECT * FROM movies ORDER BY RAND() LIMIT 3")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/FilmAction", (red, res) => {
  connect
    .query("SELECT * FROM movies WHERE genre_ids LIKE 'Action' LIMIT 3")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
