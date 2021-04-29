const router = require("express").Router();
const path = require("path");

// homepage
router.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exercise page
router.get("/exercise", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/excercise.html"));
});
//stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;