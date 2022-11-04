const express = require("express");

const router = express.Router();

const movies = require("./data/movies");

router.get("/Films", (req, res) => {
  res.send(movies);
});

module.exports = router;
