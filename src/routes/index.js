const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Anthem API");
});

module.exports = router;
