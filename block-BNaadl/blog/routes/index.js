const express = require("express");
const router = express.Router();

// All the stand alone routes are here
/* GET home page. */

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
