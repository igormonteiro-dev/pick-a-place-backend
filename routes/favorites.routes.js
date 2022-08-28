const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated.js");
const Favorite = require("../models/Favorite.model");

// CREATE FAVORITE👇
router
  .route("/:id")
  .post(isAuthenticated, async (req, res, next) => {
    try {
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
      await Favorite.findByIdAndRemove(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })

  // SHOW ALL FAVORITES👇
  .get(async (req, res, next) => {
    try {
      const favorites = await Favorite.find();

      res.json(favorites);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
