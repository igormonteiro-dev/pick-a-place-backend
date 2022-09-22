const router = require("express").Router();
const Place = require("../models/Place.model");
const Comment = require("../models/Comment.model");
const isAuthenticated = require("../middleware/isAuthenticated");

// CREATE PLACE👇
router.post("/", async (req, res, next) => {
  try {
    const placeToCreate = await Place.create(req.body);

    res.status(201).json(placeToCreate);
  } catch (error) {
    next(error);
  }
});

// UPDATE PLACE BY ID👇
router
  .route("/:id")
  .patch(async (req, res, next) => {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(placeToUpdate);
    } catch (error) {
      next(error);
    }
  })

  // DELETE PLACE BY ID👇
  .delete(async (req, res, next) => {
    try {
      const removedPlace = await Place.findByIdAndDelete(req.params.id);
      res.sendStatus(204)({
        message: `You've removed ${removedPlace} from the database! `,
      });
    } catch (error) {
      next(error);
    }
  })

  // SHOW ONE PLACE WITH COMMENTS WHEN THE USER CLICK👇
  .get(async (req, res, next) => {
    try {
      const placeId = req.params.id;
      const placeFound = await Place.findById(placeId);
      const commentsFortheplace = await Comment.find({ place: placeId })
        .select({ comment: 1, _id: 0 })
        .populate({
          path: "user",
          select: { username: 1, avatar: 1, createdAt: 1, _id: 0 },
        });

      res.status(200).json({ placeFound, commentsFortheplace });
    } catch (error) {
      next(error);
    }
  });

// SHOW ALL PLACES BY THEME👇
router.route("/").get(async (req, res, next) => {
  try {
    const places = await Place.find(req.query);
    res.json(places);
  } catch (error) {
    next(error);
  }
});

// ADD COMMENT
router.post("/:id/comments", isAuthenticated, async (req, res, next) => {
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
});

// SHOW ALL COMMENTS BY PLACE
router.get("/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find({ place: req.params.id }).populate(
      "user"
    );
    return res.status(200).json({ comments });
  } catch (error) {
    next(error);
  }
});

router
  .route("/comments/:id")
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
