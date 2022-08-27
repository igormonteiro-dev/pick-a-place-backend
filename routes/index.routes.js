const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇

router.use("/places", require("../routes/places.routes"));

module.exports = router;
