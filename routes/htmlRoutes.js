const router = require("express").Router();
const path = require("path");

// Main page, add a new workout
router.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//new excercise form 
router.get("/exercise", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/excercise.html"));
});
//dashboard 
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;