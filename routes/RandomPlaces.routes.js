const router = require("express").Router();
const Places = require("../models/Place.model");

router.get("/random", async (req, res, next) => {
  try {
    const randomPlaces = await Places.aggregate([{ $sample: { size: 4 } }]);
    return res.status(200).json(randomPlaces);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
