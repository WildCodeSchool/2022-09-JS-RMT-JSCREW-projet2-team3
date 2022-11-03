const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  res.send("hello team 3");
});

module.exports = router;
