const router = require("express").Router();
const Comment = require("../models/Comment.model");
const isAuthenticated = require("../middleware/isAuthenticated");

// CREATE COMMENT👇

router
  .route("/")
  // UPDATE COMMENT👇
  .patch(isAuthenticated, async (req, res, next) => {
    try {
      const { comment } = req.body;
      const commentToUpdate = {
        comment,
      };

      const commentUpdated = await Comment.findByIdAndUpdate(
        req.params.id,
        commentToUpdate,
        { new: true }
      );
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

module.exports = router;
