const router = require("express").Router();
const mongoose = require("mongoose");
const Place = require("../models/Place.model");
const isAuthenticated = require("../middleware/isAuthenticated.js");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");

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
  });

// SHOW ONE PLACE  WITH COMMENTS WHEN THE USER CLICK👇
router.get("/:id", async (req, res, next) => {
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

module.exports = router;
