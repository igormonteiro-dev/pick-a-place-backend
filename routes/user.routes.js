const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");

/*
FAVORITES
*/

// CREATE FAVORITE WITH PLACE ID👇
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

  // DELETE FAVORITE WITH PLACE ID👇
  .delete(isAuthenticated, async (req, res, next) => {
    try {
      await Favorite.findByIdAndRemove(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });

// SHOW ALL FAVORITES BY USER👇
router.get("/favorites", isAuthenticated, async (req, res, next) => {
  try {
    const favoritesByUser = await Favorite.find({
      user: req.user.id,
    });
    return res.status(200).json(favoritesByUser);
  } catch (error) {
    next(error);
  }
});

/*
USER COMMENTS
*/

// CREATE COMMENT👇
router
  .route("/:id")
  .post(isAuthenticated, async (req, res, next) => {
    try {
      const { comment } = req.body;
      const commentToCreate = {
        comment,
        user: req.user.id,
        place: req.params.id,
      };
      const createdComment = await Comment.create(commentToCreate);
      res.status(201).json(createdComment);
    } catch (error) {
      next(error);
    }
  })

  // UPDATE COMMENT👇
  .patch(isAuthenticated, async (req, res, next) => {
    try {
      const { comment } = req.body;
      const commentToUpdate = {
        comment,
        user: req.user.id,
        place: req.params.id,
      };

      const commentUpdated = await Comment.findByIdAndUpdate(commentToUpdate);
      res.json(commentUpdated);
    } catch (error) {
      next(error);
    }
  })

  // DELETE COMMENT👇
  .delete(isAuthenticated, async (req, res, next) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });

// // SHOW A COMMENT BY Id👇
// router.get("/:id", async (req, res, next) => {
//   try {
//     const allComments = await Comment.find();
//     return res.status(200).json(allComments);
//   } catch (error) {
//     next(error);
//   }
// });

/* 
USER PROFILE
*/

// Create a bio👇

// Upload photo👇

// Update username and/or password👇

// Delete account👇

// Show all places with comment ?????

module.exports = router;
