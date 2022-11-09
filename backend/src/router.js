const express = require("express");

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

module.exports = router;
