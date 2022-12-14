const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const Favorite = require("../models/Favorite.model");

// CREATE FAVORITE👇
router
  .route("/:id")
  .post(isAuthenticated, async (req, res, next) => {
    try {
      // TODO if the user already favorited, send a 400
      const addToFavorites = {
        place: req.params.id,
        user: req.user.id,
      };

      const favCreated = await Favorite.create(addToFavorites);
      res.status(201).json(favCreated);
    } catch (error) {
      next(error);
    }
  })

  // DELETE FAVORITE👇
  .delete(isAuthenticated, async (req, res, next) => {
    try {
      // TODO make it use placeId??
      // in which case we can use .findManyAndDelete
      await Favorite.findByIdAndDelete(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });

// SHOW FAVORITES BY USER 👇
router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const favoritesByUser = await Favorite.find({
      user: req.user.id,
    }).populate("place");
    return res.status(200).json(favoritesByUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
