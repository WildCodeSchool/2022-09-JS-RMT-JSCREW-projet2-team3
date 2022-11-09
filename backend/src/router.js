const express = require("express");

const router = express.Router();

const movies = require("./data/movies");

router.get("/movies", (req, res) => {
  res.send(movies);
});

module.exports = router;
