const express = require("express");
const { connect } = require("./db");

const router = express.Router();

router.get("/Films", (req, res) => {
  connect
    .query("SELECT * FROM movies")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/Films/:id", (req, res) => {
  connect
    .query("SELECT * FROM movies WHERE id = ?", [req.params.id])
    .then(([response]) => {
      res.status(200).send(response[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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

router.get("/FilmAction", (req, res) => {
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

router.get("/categories/:categorie/films", (req, res) => {
  connect
    .query("SELECT * FROM movies WHERE genre_ids = ? LIMIT 8", [
      req.params.categorie,
    ])
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
