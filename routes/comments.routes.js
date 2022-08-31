const router = require("express").Router();
const Comment = require("../models/Comment.model");
const isAuthenticated = require("../middleware/isAuthenticated");

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

// // Not deployed for now
// // SHOW ALL COMMENTS BY USER👇
// router.get("/:id", isAuthenticated, async (req, res, next) => {
//   try {
//     const allComments = await Comment.find();
//     return res.status(200).json(allComments);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
